#!/usr/bin/env node
/**
 * Builds the deterministic 898-Part NotebookLM generation manifest.
 * Read by the daily worker; it performs no AI or network calls.
 * Canon: content/academy/part-curriculum.json and canonical source files.
 */
import fs from "node:fs";
import path from "node:path";
import { createHash } from "node:crypto";
import { fileURLToPath } from "node:url";
import {
  buildArtifactPrompts,
  OUTPUT_PROFILE,
  PROFILE_VERSION,
} from "./lib/nlm-generation-profile.mjs";

const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const CONTENT = path.join(ROOT, "content", "academy");
const MEDIA = path.join(ROOT, "public", "academy", "media");
const INPUT = path.join(CONTENT, "part-curriculum.json");
const OUTPUT = path.join(CONTENT, "nlm-generation-manifest.json");
const CHECK = process.argv.includes("--check");

function sourcePaths(subjectId, part) {
  const canonical = part.canonical || {};
  return {
    lesson: part.file || canonical.lesson || `lessons/${part.id}.md`,
    storyboard: part.storyboard || canonical.storyboard || `storyboard/${part.id}.md`,
    slides: part.slides || canonical.slides || `slides/${part.id}.md`,
    quiz: part.quiz || canonical.quiz || `quiz/${part.id}.json`,
  };
}

function hashFiles(subjectId, sources) {
  const hash = createHash("sha256");
  for (const [role, relative] of Object.entries(sources)) {
    const file = path.join(CONTENT, subjectId, relative);
    hash.update(role);
    hash.update(relative);
    if (fs.existsSync(file)) hash.update(fs.readFileSync(file));
  }
  return hash.digest("hex");
}

function artifactStatus(partId) {
  const dir = path.join(MEDIA, partId);
  const ready = {
    video: ["nlm_video.mp4"].some((file) => fs.existsSync(path.join(dir, file))),
    audio: ["nlm_audio.m4a", "audio.m4a"].some((file) => fs.existsSync(path.join(dir, file))),
    slides: ["slides.pdf"].some((file) => fs.existsSync(path.join(dir, file))),
    quiz: ["nlm_quiz.json", "quiz.json"].some((file) => fs.existsSync(path.join(dir, file))),
  };
  return { ...ready, complete: Object.values(ready).every(Boolean) };
}

function build({ artifactSnapshot = null } = {}) {
  const curriculum = JSON.parse(fs.readFileSync(INPUT, "utf8"));
  const snapshotByPart = new Map(
    (artifactSnapshot?.parts || []).map((part) => [part.partId, part]),
  );
  const parts = [];
  for (const [subjectId, subject] of Object.entries(curriculum.subjects)) {
    for (const unit of subject.units) {
      for (const part of unit.parts) {
        const sources = sourcePaths(subjectId, part);
        const missing = Object.entries(sources)
          .filter(([, relative]) => !fs.existsSync(path.join(CONTENT, subjectId, relative)))
          .map(([role]) => role);
        const loc = {
          subject: subjectId,
          unit: {
            ...part,
            chapter: unit.chapter,
            parentUnitId: unit.id,
            parentTitle: unit.title,
          },
        };
        const snapshot = snapshotByPart.get(part.id);
        const artifacts = snapshot?.artifacts || artifactStatus(part.id);
        parts.push({
          subjectId,
          parentUnitId: unit.id,
          partId: part.id,
          part: part.part,
          chapter: unit.chapter,
          title: part.title,
          goal: part.goal,
          prerequisites: Array.isArray(part.prereq)
            ? part.prereq
            : part.prereq
              ? [part.prereq]
              : [],
          scopeIn: part.scope_in || [part.goal],
          scopeOut: part.scope_out || ["後続Part"],
          sources,
          sourceHash: hashFiles(subjectId, sources),
          status: missing.length
            ? "blocked_source_authoring"
            : snapshot?.status === "complete" || artifacts.complete
              ? "complete"
              : "ready",
          missing,
          artifacts,
          prompts: buildArtifactPrompts(loc),
          outputDirectory: `public/academy/media/${part.id}`,
          command: `node scripts/nlm-unit-factory.mjs ${part.id} --no-research`,
        });
      }
    }
  }
  return {
    _artifact: {
      what: "NotebookLM全Part固定生成マニフェスト",
      reader: "日次生成ワーカーと教材運用担当",
      canon: "part-curriculum.jsonと正本4点セット",
    },
    version: 1,
    profileVersion: PROFILE_VERSION,
    policy: {
      externalAiApis: "disabled",
      notebookLmOnly: true,
      research: "off",
      generation: "sequential",
      retry: "no-automatic-regeneration",
      integrationAndDeploy: "separate-batch",
      subjectRotation: ["english", "math", "science"],
    },
    outputProfile: OUTPUT_PROFILE,
    totals: {
      parts: parts.length,
      ready: parts.filter((part) => part.status === "ready").length,
      complete: parts.filter((part) => part.status === "complete").length,
      blocked: parts.filter((part) => part.status === "blocked_source_authoring").length,
    },
    parts,
  };
}

const existing = CHECK && fs.existsSync(OUTPUT)
  ? JSON.parse(fs.readFileSync(OUTPUT, "utf8"))
  : null;
const result = build({ artifactSnapshot: existing });
const serialized = `${JSON.stringify(result, null, 2)}\n`;
if (CHECK) {
  if (!fs.existsSync(OUTPUT) || fs.readFileSync(OUTPUT, "utf8") !== serialized) {
    throw new Error("nlm-generation-manifest.json is stale; run npm run academy:generation-manifest");
  }
  console.log("generation manifest check PASS", result.totals);
} else {
  fs.writeFileSync(OUTPUT, serialized);
  console.log("generation manifest written", result.totals);
}
