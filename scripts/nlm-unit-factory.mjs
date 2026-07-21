#!/usr/bin/env node
/**
 * Medvance × NotebookLM 細分化量産ファクトリ
 *
 * 原則（内容ずれ防止）:
 *  1. 正本 = content/academy/{subject}/lessons + storyboard のみを教材本体とする
 *  2. Deep Research は「教科書用語・定石の裏付け」用。例題の創作禁止
 *  3. Studio の focus は常に台本順・正本優先を明示
 *  4. 1ユニット = 1ノートブック（細分化）
 *
 * Usage:
 *   node scripts/nlm-unit-factory.mjs ME-M1-04 ME-M1-05
 *   node scripts/nlm-unit-factory.mjs --subject math1-exam --limit 3
 *   node scripts/nlm-unit-factory.mjs ME-M1-04 --no-research --audio-only
 *   node scripts/nlm-unit-factory.mjs ME-M1-04 --download-only
 *
 * Env:
 *   NLM_DRY=1  … コマンド表示のみ
 *   NLM_SKIP_VIDEO=1
 *   NLM_SKIP_AUDIO=1
 *   NLM_SKIP_SLIDES=1
 *   NLM_SKIP_QUIZ=1
 *   NLM_RESEARCH_MODE=fast|deep  (default: deep)
 */
import fs from "node:fs";
import path from "node:path";
import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");
const CONTENT = path.join(ROOT, "content/academy");
const MEDIA = path.join(ROOT, "public/academy/media");
const REGISTRY = path.join(CONTENT, "nlm-registry.json");
const DRY = process.env.NLM_DRY === "1";

const args = process.argv.slice(2);
const flags = new Set(args.filter((a) => a.startsWith("--")));
const positional = args.filter((a) => !a.startsWith("--"));

function sh(cmd, opts = {}) {
  console.log(DRY ? `[dry] ${cmd}` : `> ${cmd}`);
  if (DRY) return { status: 0, stdout: "", stderr: "" };
  const r = spawnSync(cmd, {
    shell: true,
    encoding: "utf8",
    maxBuffer: 20 * 1024 * 1024,
    timeout: opts.timeout ?? 600_000,
  });
  if (r.status !== 0) {
    const err = `${r.stdout || ""}\n${r.stderr || ""}`.trim();
    if (err) console.warn(err.slice(-600));
  } else if (r.stdout?.trim()) {
    console.log(r.stdout.trim().slice(0, 400));
  }
  return r;
}

function loadRegistry() {
  if (!fs.existsSync(REGISTRY)) {
    return { version: 1, updated: null, units: {} };
  }
  return JSON.parse(fs.readFileSync(REGISTRY, "utf8"));
}

function saveRegistry(reg) {
  reg.updated = new Date().toISOString();
  fs.writeFileSync(REGISTRY, JSON.stringify(reg, null, 2));
}

function findUnit(unitId) {
  for (const dir of fs.readdirSync(CONTENT)) {
    const idxPath = path.join(CONTENT, dir, "index.json");
    if (!fs.existsSync(idxPath)) continue;
    const idx = JSON.parse(fs.readFileSync(idxPath, "utf8"));
    const unit = (idx.units || []).find((u) => u.id === unitId);
    if (unit) {
      return {
        subjectDir: dir,
        subject: idx.subject,
        unit,
        lessonPath: path.join(CONTENT, dir, unit.file),
        storyboardPath: unit.storyboard
          ? path.join(CONTENT, dir, unit.storyboard)
          : null,
        quizPath: unit.quiz ? path.join(CONTENT, dir, unit.quiz) : null,
      };
    }
  }
  return null;
}

function listSubjectUnitIds(subjectDir, limit = Infinity) {
  const idx = JSON.parse(fs.readFileSync(path.join(CONTENT, subjectDir, "index.json"), "utf8"));
  return (idx.units || []).map((u) => u.id).slice(0, limit);
}

/** 正本固定の focus（ずれ防止の核心） */
function focusPrompt(loc) {
  const u = loc.unit;
  return [
    `【Medvance 公式教材・正本厳守】ユニット ${u.id}「${u.title}」。`,
    `科目: ${loc.subject} / 章: ${u.chapter} / ゴール: ${u.goal}`,
    `アップロードされた lesson と storyboard が唯一の正本。`,
    `台本（storyboard）のブロック順を必ず守る。台本にない例題・数値・入試問題を創作しない。`,
    `Deep Research 由来ソースがあっても、定義の言い換え・定石の補強にのみ使い、正本の手順・例題を置き換えない。`,
    `日本語。受験（医学部・難関大）向け。短く明確。`,
    `Use only uploaded sources. Do not invent statistics, quotes, or examples not in the sources.`,
  ].join(" ");
}

/** Deep Research 用クエリ（創作を誘発しない） */
function researchQuery(loc) {
  const u = loc.unit;
  return [
    `高校 ${loc.subject} の標準的な教科書範囲における`,
    `「${u.title}」の定義・公式・典型的な注意点`,
    `（一般的な学習指導要領レベルの解説に限定。`,
    `特定年度の入試問題・オリジナル問題の列挙は不要。`,
    `Medvance教材の正本を置き換える内容は不要）`,
  ].join("");
}

function ensureNotebook(reg, unitId, title) {
  if (reg.units[unitId]?.notebook_id) {
    console.log("reuse notebook", unitId, reg.units[unitId].notebook_id);
    return reg.units[unitId].notebook_id;
  }
  const r = sh(`nlm notebook create ${JSON.stringify(title)} --json`);
  let id = null;
  try {
    const j = JSON.parse(r.stdout || "{}");
    id = j.id || j.notebook_id || j.notebook?.id;
  } catch {
    /* parse from text */
    const m = (r.stdout + r.stderr).match(
      /[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/i,
    );
    id = m?.[0];
  }
  if (!id) {
    // fallback list
    const list = sh(`nlm notebook list --json`);
    try {
      const arr = JSON.parse(list.stdout || "[]");
      const hit = arr.find((x) => (x.title || "").includes(unitId));
      id = hit?.id;
    } catch {
      /* */
    }
  }
  if (!id) throw new Error(`failed to create notebook for ${unitId}: ${r.stderr}`);
  reg.units[unitId] = {
    ...(reg.units[unitId] || {}),
    notebook_id: id,
    title,
    created_at: new Date().toISOString(),
  };
  saveRegistry(reg);
  return id;
}

function addCanonicalSources(nb, loc) {
  const files = [loc.lessonPath, loc.storyboardPath].filter(
    (f) => f && fs.existsSync(f),
  );
  for (const f of files) {
    const r = sh(`nlm source add ${nb} --file ${JSON.stringify(f)} --wait`);
    if (r.status !== 0) console.warn("source add warn", f, r.stderr?.slice(-200));
  }
  // alignment note as text source
  const note = [
    `ALIGNMENT LOCK for ${loc.unit.id}`,
    `Goal: ${loc.unit.goal}`,
    `Prereq: ${(loc.unit.prereq || []).join(", ") || "none"}`,
    `Rule: storyboard order is mandatory. No invented exam problems.`,
    `Deep research sources are secondary; lesson+storyboard are primary.`,
  ].join("\n");
  const tmp = path.join(MEDIA, loc.unit.id, "_alignment_lock.txt");
  fs.mkdirSync(path.dirname(tmp), { recursive: true });
  fs.writeFileSync(tmp, note, "utf8");
  sh(`nlm source add ${nb} --file ${JSON.stringify(tmp)} --wait`);
}

function runDeepResearch(nb, loc) {
  const mode = process.env.NLM_RESEARCH_MODE || "deep";
  const q = researchQuery(loc);
  console.log("deep research", mode, q.slice(0, 80) + "…");
  // start
  const start = sh(
    `nlm research start ${JSON.stringify(q)} --notebook-id ${nb} --mode ${mode} --source web --force`,
    { timeout: 120_000 },
  );
  if (start.status !== 0) {
    console.warn("research start failed, continue with canonical only", start.stderr?.slice(-300));
    return false;
  }
  // wait + auto import (long for deep)
  const wait = mode === "deep" ? 900 : 180;
  const st = sh(
    `nlm research status ${nb} --max-wait ${wait} --auto-import`,
    { timeout: (wait + 60) * 1000 },
  );
  if (st.status !== 0) {
    console.warn("research status/import incomplete", st.stderr?.slice(-300));
    // try import all if task finished
    sh(`nlm research import ${nb} --confirm 2>/dev/null || true`);
  }
  return true;
}

function createStudio(nb, focus, kinds) {
  const F = JSON.stringify(focus);
  // note: quiz CLI may not support --language; audio/video/slides do
  if (kinds.audio && process.env.NLM_SKIP_AUDIO !== "1") {
    const r = sh(
      `nlm audio create ${nb} --format deep_dive --length default --language ja --focus ${F} --confirm`,
      { timeout: 120_000 },
    );
    if (r.status !== 0) console.warn("audio create", (r.stdout + r.stderr).slice(-400));
  }
  if (kinds.video && process.env.NLM_SKIP_VIDEO !== "1") {
    let r = sh(
      `nlm video create ${nb} --format explainer --style classic --language ja --focus ${F} --confirm`,
      { timeout: 120_000 },
    );
    if (r.status !== 0) {
      console.warn("video retry brief/whiteboard");
      r = sh(
        `nlm video create ${nb} --format brief --style whiteboard --language ja --focus ${F} --confirm`,
        { timeout: 120_000 },
      );
      if (r.status !== 0) console.warn("video create", (r.stdout + r.stderr).slice(-400));
    }
  }
  if (kinds.slides && process.env.NLM_SKIP_SLIDES !== "1") {
    const r = sh(
      `nlm slides create ${nb} --format detailed_deck --length default --language ja --focus ${F} --confirm`,
      { timeout: 120_000 },
    );
    if (r.status !== 0) console.warn("slides create", (r.stdout + r.stderr).slice(-400));
  }
  if (kinds.quiz && process.env.NLM_SKIP_QUIZ !== "1") {
    const r = sh(
      `nlm quiz create ${nb} --count 6 --difficulty 3 --focus ${F} --confirm`,
      { timeout: 120_000 },
    );
    if (r.status !== 0) console.warn("quiz create", (r.stdout + r.stderr).slice(-400));
  }
}

function downloadArtifacts(nb, unitId) {
  const out = path.join(MEDIA, unitId);
  fs.mkdirSync(out, { recursive: true });
  const jobs = [
    ["audio", path.join(out, "nlm_audio.m4a")],
    ["video", path.join(out, "nlm_video.mp4")],
    ["slide-deck", path.join(out, "slides.pdf")],
  ];
  for (const [type, dest] of jobs) {
    const r = sh(`nlm download ${type} ${nb} --output ${JSON.stringify(dest)}`, {
      timeout: 300_000,
    });
    if (r.status === 0 && fs.existsSync(dest)) {
      console.log("downloaded", dest, fs.statSync(dest).size);
      if (type === "audio") fs.copyFileSync(dest, path.join(out, "audio.m4a"));
      if (type === "video") fs.copyFileSync(dest, path.join(out, "video.mp4"));
    } else {
      console.warn("download fail/skip", type, r.stderr?.slice(-200));
    }
  }
  // quiz optional
  const quizOut = path.join(out, "nlm_quiz.json");
  sh(`nlm download quiz ${nb} --output ${JSON.stringify(quizOut)} --format json 2>/dev/null || true`);
  if (fs.existsSync(quizOut)) fs.copyFileSync(quizOut, path.join(out, "quiz.json"));

  // manifest
  const files = fs.readdirSync(out).filter((f) => !f.startsWith("."));
  const man = {
    unit_id: unitId,
    brand: "Medvance",
    source: "notebooklm-unit-factory",
    notebook_id: nb,
    alignment: "lesson+storyboard primary; research secondary",
    files,
    audio: files.includes("audio.m4a") ? "audio.m4a" : null,
    video: files.includes("video.mp4") ? "video.mp4" : null,
    slides_pdf: files.includes("slides.pdf") ? "slides.pdf" : null,
    lesson_pdf: files.includes("lesson.pdf") ? "lesson.pdf" : null,
  };
  fs.writeFileSync(path.join(out, "manifest.json"), JSON.stringify(man, null, 2));
}

function sleep(ms) {
  if (DRY) return;
  spawnSync("sleep", [String(Math.ceil(ms / 1000))]);
}

function processUnit(unitId, reg, options) {
  const loc = findUnit(unitId);
  if (!loc) {
    console.warn("unit not found", unitId);
    return;
  }
  if (!fs.existsSync(loc.lessonPath)) {
    console.warn("no lesson", unitId);
    return;
  }

  console.log("\n========", unitId, loc.unit.title, "========");
  const title = `Medvance ${unitId} ${loc.unit.title}`.slice(0, 80);
  const nb = ensureNotebook(reg, unitId, title);
  reg.units[unitId].subject = loc.subject;
  reg.units[unitId].subjectDir = loc.subjectDir;
  saveRegistry(reg);

  if (options.downloadOnly) {
    downloadArtifacts(nb, unitId);
    return;
  }

  addCanonicalSources(nb, loc);

  if (!options.noResearch) {
    try {
      runDeepResearch(nb, loc);
      reg.units[unitId].research_at = new Date().toISOString();
      saveRegistry(reg);
    } catch (e) {
      console.warn("research error", e.message);
    }
    sleep(5000);
  }

  const focus = focusPrompt(loc);
  const kinds = {
    audio: !options.audioOnly ? true : true,
    video: options.audioOnly ? false : true,
    slides: options.audioOnly ? false : true,
    quiz: options.audioOnly ? false : true,
  };
  if (options.audioOnly) {
    kinds.video = false;
    kinds.slides = false;
    kinds.quiz = false;
  }

  createStudio(nb, focus, kinds);
  reg.units[unitId].studio_requested_at = new Date().toISOString();
  reg.units[unitId].focus = focus.slice(0, 200);
  saveRegistry(reg);

  // poll status briefly
  sleep(15000);
  sh(`nlm studio status ${nb}`);

  // try download (may be incomplete — safe to re-run --download-only later)
  downloadArtifacts(nb, unitId);
  reg.units[unitId].last_run_at = new Date().toISOString();
  saveRegistry(reg);

  // rate limit pause between units
  sleep(90_000);
}

function resolveUnitIds() {
  if (flags.has("--subject")) {
    const i = args.indexOf("--subject");
    const subj = args[i + 1];
    let limit = Infinity;
    if (flags.has("--limit")) {
      limit = parseInt(args[args.indexOf("--limit") + 1], 10) || 3;
    }
    return listSubjectUnitIds(subj, limit);
  }
  if (positional.length) return positional;
  // default: free sample units that need media expansion
  return ["ME-M1-04", "ME-PH-01", "ME-CH-01"];
}

function main() {
  const options = {
    noResearch: flags.has("--no-research"),
    downloadOnly: flags.has("--download-only"),
    audioOnly: flags.has("--audio-only"),
  };
  const ids = resolveUnitIds();
  console.log("factory units:", ids.length, ids.join(", "));
  console.log("options", options, "research_mode", process.env.NLM_RESEARCH_MODE || "deep");

  const reg = loadRegistry();
  for (const id of ids) {
    try {
      processUnit(id, reg, options);
    } catch (e) {
      console.error("FAIL", id, e.message);
      // continue next after pause
      sleep(60_000);
    }
  }
  console.log("done. registry →", REGISTRY);
}

main();
