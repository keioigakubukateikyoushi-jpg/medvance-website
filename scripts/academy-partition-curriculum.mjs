#!/usr/bin/env node
/**
 * Refreshes Part readiness before NotebookLM daily queueing.
 * It does not use AI or network calls. A Part becomes generation_ready only
 * when the canonical lesson/storyboard/slides/quiz files exist and pass the
 * local source quality checks below.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const CONTENT = path.join(ROOT, "content", "academy");
const CURRICULUM = path.join(CONTENT, "part-curriculum.json");
const CHECK = process.argv.includes("--check");

function sourcePaths(part) {
  const canonical = part.canonical || {};
  return {
    lesson: part.file || canonical.lesson || "lessons/" + part.id + ".md",
    storyboard: part.storyboard || canonical.storyboard || "storyboard/" + part.id + ".md",
    slides: part.slides || canonical.slides || "slides/" + part.id + ".md",
    quiz: part.quiz || canonical.quiz || "quiz/" + part.id + ".json",
  };
}

function readText(file) {
  return fs.existsSync(file) ? fs.readFileSync(file, "utf8") : "";
}

function quizQuality(file) {
  const failures = [];
  let data;
  try {
    data = JSON.parse(readText(file));
  } catch {
    return ["quiz_json_invalid"];
  }
  if (data.quality && !String(data.quality).startsWith("reviewed") && data.quality !== "perfect-v1") {
    failures.push("quiz_quality_not_reviewed");
  }
  if (!Array.isArray(data.questions) || data.questions.length !== 6) failures.push("quiz_requires_6_questions");
  for (const [index, question] of (data.questions || []).entries()) {
    if (!question.prompt || String(question.prompt).length < 12) failures.push("quiz_" + (index + 1) + "_prompt_short");
    if (!Array.isArray(question.choices) || question.choices.length !== 4) failures.push("quiz_" + (index + 1) + "_choices_invalid");
    if (!Number.isInteger(question.answer) || question.answer < 0 || question.answer > 3) failures.push("quiz_" + (index + 1) + "_answer_invalid");
    if (!question.explanation || String(question.explanation).length < 12) failures.push("quiz_" + (index + 1) + "_explanation_short");
  }
  return failures;
}

function partQuality(subjectId, part) {
  const sources = sourcePaths(part);
  const missing = [];
  const failures = [];
  const files = Object.fromEntries(
    Object.entries(sources).map(([role, relative]) => [role, path.join(CONTENT, subjectId, relative)]),
  );
  for (const [role, file] of Object.entries(files)) {
    if (!fs.existsSync(file)) missing.push(role);
  }
  if (missing.length) return { status: "source_authoring_required", missing, failures };

  const lesson = readText(files.lesson);
  const storyboard = readText(files.storyboard);
  const slides = readText(files.slides);
  const lessonHeadings = lesson.match(/^##\s+/gm) || [];
  if (lesson.length < 1200) failures.push("lesson_too_short");
  if (lessonHeadings.length < 8) failures.push("lesson_needs_8_sections");
  if (!/ME-[A-Z0-9]+-[0-9]+-P[0-9]+/.test(lesson)) failures.push("lesson_missing_part_reference");
  if (storyboard.length < 300 || !/0:00/.test(storyboard)) failures.push("storyboard_too_thin");
  if (slides.length < 200 || (slides.match(/^##\s+/gm) || []).length < 5) failures.push("slides_too_thin");
  failures.push(...quizQuality(files.quiz));
  return {
    status: failures.length ? "source_authoring_required" : "generation_ready",
    missing,
    failures,
  };
}

const curriculum = JSON.parse(fs.readFileSync(CURRICULUM, "utf8"));
const previousGeneratedAt = curriculum.generatedAt;
let generationReady = 0;
let changed = 0;
const readyIds = [];
for (const [subjectId, subject] of Object.entries(curriculum.subjects)) {
  for (const unit of subject.units || []) {
    for (const part of unit.parts || []) {
      const next = partQuality(subjectId, part);
      const before = JSON.stringify(part.readiness || {});
      part.readiness = next;
      part.status = next.status === "generation_ready" ? "generation-ready" : "source-authoring-required";
      if (next.status === "generation_ready") {
        generationReady += 1;
        readyIds.push(part.id);
      }
      if (before !== JSON.stringify(next)) changed += 1;
    }
  }
}
const previousGenerationReady = Number(curriculum.totals?.generationReady) || 0;
const totalsChanged = previousGenerationReady !== generationReady;
curriculum.generatedAt = CHECK || (!changed && !totalsChanged) ? previousGeneratedAt : new Date().toISOString();
curriculum.totals = { ...(curriculum.totals || {}), generationReady };
const output = JSON.stringify(curriculum, null, 2) + "\n";
if (CHECK) {
  const current = fs.readFileSync(CURRICULUM, "utf8").replace(/\r\n/g, "\n");
  if (current !== output.replace(/\r\n/g, "\n")) {
    throw new Error("part-curriculum.json readiness is stale; run npm run academy:partition");
  }
  console.log("partition readiness check PASS", { generationReady, readyIds: readyIds.slice(0, 12) });
} else {
  fs.writeFileSync(CURRICULUM, output);
  console.log("partition readiness written", { generationReady, changed, readyIds: readyIds.slice(0, 12) });
}
