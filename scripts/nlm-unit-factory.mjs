#!/usr/bin/env node
/**
 * Medvance × NotebookLM 細分化量産ファクトリ
 *
 * 原則（内容ずれ防止）:
 *  1. 正本 = content/academy/{subject}/lessons + storyboard のみを教材本体とする
 *  2. Deep Research は「教科書用語・定石の裏付け」用。例題の創作禁止
 *  3. Studio の focus は常に台本順・正本優先を明示
 *  4. 1 Part = 1ノートブック。生成前に正本を完成し、動画要求は原則1回
 *
 * Usage:
 *   node scripts/nlm-unit-factory.mjs ME-M1-04 ME-M1-05
 *   node scripts/nlm-unit-factory.mjs --subject math1-exam --limit 3
 *   node scripts/nlm-unit-factory.mjs ME-M1-04 --no-research --audio-only
 *   node scripts/nlm-unit-factory.mjs ME-M1-04 --no-research --video-only --reuse-sources
 *   node scripts/nlm-unit-factory.mjs ME-M1-04 --download-only
 *
 * Env:
 *   NLM_DRY=1  … コマンド表示のみ
 *   NLM_SKIP_VIDEO=1
 *   NLM_SKIP_AUDIO=1
 *   NLM_SKIP_SLIDES=1
 *   NLM_SKIP_QUIZ=1
 *   NLM_RESEARCH_MODE=fast|deep  (--research指定時のみ。default: fast)
 */
import fs from "node:fs";
import path from "node:path";
import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import { execFileSync } from "node:child_process";
import { createHash } from "node:crypto";
import { auditUnit } from "./quality-gate.mjs";
import { buildArtifactPrompts } from "./lib/nlm-generation-profile.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");
const CONTENT = path.join(ROOT, "content/academy");
const MEDIA = path.join(ROOT, "public/academy/media");
const REGISTRY = path.join(CONTENT, "nlm-registry.json");
const PART_CURRICULUM = path.join(CONTENT, "part-curriculum.json");
const PART_POLICY = JSON.parse(
  fs.readFileSync(path.join(CONTENT, "part-policy.json"), "utf8"),
);
const DRY = process.env.NLM_DRY === "1";
process.env.NOTEBOOKLM_BASE_URL ??= "https://notebooklm.google.com";
const claimedNotebookIds = new Set();

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

function quoteArg(arg) {
  return JSON.stringify(String(arg));
}

function shArgs(cmd, cmdArgs, opts = {}) {
  const rendered = [cmd, ...cmdArgs.map(quoteArg)].join(" ");
  console.log(DRY ? `[dry] ${rendered}` : `> ${rendered}`);
  if (DRY) return { status: 0, stdout: "", stderr: "" };
  const r = spawnSync(cmd, cmdArgs, {
    shell: false,
    encoding: "utf8",
    maxBuffer: 20 * 1024 * 1024,
    timeout: opts.timeout ?? 600_000,
    windowsHide: true,
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
  if (DRY) {
    console.log("[dry] registry update", REGISTRY);
    return;
  }
  fs.writeFileSync(REGISTRY, JSON.stringify(reg, null, 2));
}

function listSubjectDirs() {
  const out = [];
  for (const name of fs.readdirSync(CONTENT)) {
    const p = path.join(CONTENT, name);
    if (!fs.statSync(p).isDirectory()) continue;
    if (fs.existsSync(path.join(p, "index.json"))) {
      out.push(name);
      continue;
    }
    // advanced/math1, elite/math など
    for (const sub of fs.readdirSync(p)) {
      const sp = path.join(p, sub);
      if (fs.existsSync(path.join(sp, "index.json"))) out.push(path.join(name, sub));
    }
  }
  return out;
}


function sourcePathsFromPart(part) {
  const canonical = part.canonical || {};
  return {
    lesson: part.file || canonical.lesson || "lessons/" + part.id + ".md",
    storyboard: part.storyboard || canonical.storyboard || "storyboard/" + part.id + ".md",
    slides: part.slides || canonical.slides || "slides/" + part.id + ".md",
    quiz: part.quiz || canonical.quiz || "quiz/" + part.id + ".json",
  };
}

function findPartCurriculumUnit(unitId) {
  if (!fs.existsSync(PART_CURRICULUM)) return null;
  const curriculum = JSON.parse(fs.readFileSync(PART_CURRICULUM, "utf8"));
  for (const [subjectId, subject] of Object.entries(curriculum.subjects || {})) {
    for (const parent of subject.units || []) {
      const part = (parent.parts || []).find((item) => item.id === unitId);
      if (!part) continue;
      const sources = sourcePathsFromPart(part);
      const unit = {
        ...part,
        file: sources.lesson,
        storyboard: sources.storyboard,
        slides: sources.slides,
        quiz: sources.quiz,
        chapter: parent.chapter,
        prereq: part.prereq || parent.prereq || [],
        parentUnitId: parent.id,
        parentTitle: parent.title,
      };
      return {
        subjectDir: subjectId,
        subject: subjectId,
        unit,
        fromPartCurriculum: true,
        lessonPath: path.join(CONTENT, subjectId, sources.lesson),
        storyboardPath: path.join(CONTENT, subjectId, sources.storyboard),
        slidesPath: path.join(CONTENT, subjectId, sources.slides),
        quizPath: path.join(CONTENT, subjectId, sources.quiz),
      };
    }
  }
  return null;
}

function findUnit(unitId) {
  for (const dir of listSubjectDirs()) {
    const idxPath = path.join(CONTENT, dir, "index.json");
    if (!fs.existsSync(idxPath)) continue;
    const idx = JSON.parse(fs.readFileSync(idxPath, "utf8"));
    const parent = (idx.units || []).find(
      (u) => u.id === unitId || (u.parts || []).some((part) => part.id === unitId),
    );
    if (parent) {
      const part = (parent.parts || []).find((item) => item.id === unitId);
      const unit = part
        ? {
            ...part,
            chapter: parent.chapter,
            prereq: part.prereq || parent.prereq || [],
            parentUnitId: parent.id,
            parentTitle: parent.title,
          }
        : parent;
      return {
        subjectDir: dir,
        subject: idx.subject,
        unit,
        lessonPath: path.join(CONTENT, dir, unit.file),
        storyboardPath: unit.storyboard
          ? path.join(CONTENT, dir, unit.storyboard)
          : null,
        slidesPath: unit.slides ? path.join(CONTENT, dir, unit.slides) : null,
        quizPath: unit.quiz ? path.join(CONTENT, dir, unit.quiz) : null,
      };
    }
  }
  return findPartCurriculumUnit(unitId);
}

function listSubjectUnitIds(subjectDir, limit = Infinity) {
  const idx = JSON.parse(fs.readFileSync(path.join(CONTENT, subjectDir, "index.json"), "utf8"));
  return (idx.units || [])
    .flatMap((u) => (u.parts || []).length ? u.parts.map((part) => part.id) : [u.id])
    .slice(0, limit);
}

function durationSeconds(file) {
  try {
    return Number(execFileSync("ffprobe", ["-v", "error", "-show_entries", "format=duration", "-of", "default=nk=1:nw=1", file], { encoding: "utf8" }).trim());
  } catch {
    return null;
  }
}

function writeVideoDirectorSource(loc) {
  const u = loc.unit;
  const lesson = fs.existsSync(loc.lessonPath)
    ? fs.readFileSync(loc.lessonPath, "utf8")
    : "";
  // 主要見出しを抜粋して「画コンテ」にする
  const heads = [...lesson.matchAll(/^##\s+(.+)$/gm)].map((m) => m[1].trim()).slice(0, 14);
  const body = [
    `# VIDEO DIRECTOR CARD — ${u.id}`,
    ``,
    `Brand: Medvance（医学部・難関大）`,
    `Unit: ${u.id} ${u.title}`,
    `Chapter: ${u.chapter}`,
    `Goal: ${u.goal}`,
    `Minutes guide: 5–9 (content complete, no padding)`,
    ``,
    `## 画コンテ（この順で画面を進める）`,
    `1. タイトルカード: ${u.id} / ${u.title}`,
    `2. 今日のゴール（1文）`,
    ...heads.map((h, i) => `${i + 3}. ${h}`),
    ``,
    `## 禁止`,
    `- 台本外の例題・入試年度の創作`,
    `- 長い前置き・雑談・自己紹介`,
    `- 英語だけのスライド見出し`,
    ``,
    `## 品質`,
    `- 例題は手順が見える板書`,
    `- 落とし穴は具体的に1〜2個`,
    `- 最後に到達チェック`,
  ].join("\n");
  const out = path.join(MEDIA, u.id, "_video_director.md");
  fs.mkdirSync(path.dirname(out), { recursive: true });
  fs.writeFileSync(out, body, "utf8");
  return out;
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

function parseJsonOutput(output, fallback) {
  try {
    return JSON.parse(output || "");
  } catch {
    return fallback;
  }
}

function listText(value) {
  if (Array.isArray(value)) return value.filter(Boolean).join(', ');
  if (value == null) return "";
  return String(value);
}

function artifactCountFromStudioStatus(raw) {
  if (Array.isArray(raw)) return raw.length;
  if (raw && Array.isArray(raw.artifacts)) return raw.artifacts.length;
  if (raw && Array.isArray(raw.items)) return raw.items.length;
  return null;
}

function notebookSourceCount(raw, fallback) {
  const value = raw?.source_count ?? raw?.sourceCount ?? fallback;
  return Number(value || 0);
}

function findReusableEmptyNotebook(reg) {
  const list = shArgs("nlm", ["notebook", "list", "--json"], { timeout: 60_000 });
  if (list.status !== 0) return null;
  const notebooks = parseJsonOutput(list.stdout, []);
  if (!Array.isArray(notebooks) || notebooks.length < 495) return null;

  const registered = new Set(
    Object.values(reg.units || {})
      .map((unit) => unit?.notebook_id)
      .filter(Boolean),
  );
  const candidates = notebooks.filter((item) =>
    notebookSourceCount(item, 0) === 0 &&
    item?.id &&
    !registered.has(item.id) &&
    !claimedNotebookIds.has(item.id)
  );

  for (const candidate of candidates) {
    const id = candidate.id;
    const detail = shArgs("nlm", ["notebook", "get", id, "--json"], { timeout: 60_000 });
    if (detail.status !== 0) continue;
    const detailJson = parseJsonOutput(detail.stdout, null);
    const sourceCount = notebookSourceCount(detailJson, candidate.source_count);
    const sourcesLen = Array.isArray(detailJson?.sources) ? detailJson.sources.length : 0;
    if (sourceCount !== 0 || sourcesLen !== 0) continue;

    const studio = shArgs("nlm", ["studio", "status", id, "--json"], { timeout: 60_000 });
    if (studio.status !== 0) continue;
    const studioJson = parseJsonOutput(studio.stdout, []);
    const artifactCount = artifactCountFromStudioStatus(studioJson);
    if (artifactCount !== 0) continue;

    return {
      id,
      title: candidate.title || "",
      updated_at: candidate.updated_at || null,
    };
  }
  return null;
}

function claimReusableNotebook(reg, unitId, title) {
  const candidate = findReusableEmptyNotebook(reg);
  if (!candidate) return null;
  console.log("claim empty notebook", {
    unitId,
    notebook_id: candidate.id,
    previous_title: candidate.title,
    updated_at: candidate.updated_at,
  });
  const renamed = shArgs("nlm", ["notebook", "rename", candidate.id, title], { timeout: 60_000 });
  if (renamed.status !== 0) {
    console.warn("notebook rename failed; continuing with claimed empty notebook", candidate.id);
  }
  claimedNotebookIds.add(candidate.id);
  reg.units[unitId] = {
    ...(reg.units[unitId] || {}),
    notebook_id: candidate.id,
    title,
    reused_empty_notebook: true,
    previous_title: candidate.title,
    claimed_at: new Date().toISOString(),
    created_at: new Date().toISOString(),
  };
  saveRegistry(reg);
  return candidate.id;
}

function parseNotebookCreateId(output) {
  try {
    const j = JSON.parse(output || "{}");
    return j.id || j.notebook_id || j.notebook?.id || null;
  } catch {
    const m = String(output || "").match(
      /[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/i,
    );
    return m?.[0] || null;
  }
}

function ensureNotebook(reg, unitId, title) {
  if (reg.units[unitId]?.notebook_id) {
    console.log("reuse notebook", unitId, reg.units[unitId].notebook_id);
    return reg.units[unitId].notebook_id;
  }
  if (DRY) {
    const id = `dry-${unitId}`;
    reg.units[unitId] = {
      ...(reg.units[unitId] || {}),
      notebook_id: id,
      title,
      dry_run: true,
    };
    console.log("[dry] synthetic notebook", id);
    return id;
  }
  const r = shArgs("nlm", ["notebook", "create", title, "--json"]);
  let id = parseNotebookCreateId(r.stdout) || parseNotebookCreateId(r.stderr);
  const createOutput = `${r.stdout || ""}\n${r.stderr || ""}`;
  if (!id && createOutput.includes("INVALID_ARGUMENT")) {
    id = claimReusableNotebook(reg, unitId, title);
  }
  if (!id) {
    const list = shArgs("nlm", ["notebook", "list", "--json"], { timeout: 60_000 });
    const arr = parseJsonOutput(list.stdout, []);
    const hit = Array.isArray(arr) ? arr.find((x) => (x.title || "").includes(unitId)) : null;
    id = hit?.id;
  }
  if (!id) throw new Error(`failed to create notebook for ${unitId}: ${r.stderr}`);
  reg.units[unitId] = {
    ...(reg.units[unitId] || {}),
    notebook_id: id,
    title,
    created_at: reg.units[unitId]?.created_at || new Date().toISOString(),
  };
  saveRegistry(reg);
  return id;
}

function addCanonicalSources(nb, loc) {
  const files = [loc.lessonPath, loc.storyboardPath, loc.slidesPath, loc.quizPath].filter(
    (f) => f && fs.existsSync(f),
  ).map((f) => {
    if (path.extname(f).toLowerCase() !== ".json") return f;
    const json = JSON.parse(fs.readFileSync(f, "utf8"));
    const rendered = [
      `# ${loc.unit.id} 確認問題ソース`,
      "",
      "以下はこのPartの確認問題・正答・解説の正本です。",
      "",
      "```json",
      JSON.stringify(json, null, 2),
      "```",
      "",
    ].join("\n");
    const out = path.join(MEDIA, loc.unit.id, "_quiz_source.md");
    fs.mkdirSync(path.dirname(out), { recursive: true });
    fs.writeFileSync(out, rendered, "utf8");
    return out;
  });
  for (const f of files) {
    const r = sh(`nlm source add ${nb} --file ${JSON.stringify(f)} --wait`);
    if (r.status !== 0) console.warn("source add warn", f, r.stderr?.slice(-200));
  }
  // alignment note as text source
  const note = [
    `ALIGNMENT LOCK for ${loc.unit.id}`,
    `Goal: ${loc.unit.goal}`,
    `Prereq: ${listText(loc.unit.prereq) || "none"}`,
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
  // wait then import (CLI has no --auto-import; import is separate)
  const wait = mode === "deep" ? 900 : 180;
  const st = sh(`nlm research status ${nb} --max-wait ${wait}`, {
    timeout: (wait + 60) * 1000,
  });
  if (st.status !== 0) {
    console.warn("research status incomplete", (st.stdout + st.stderr).slice(-300));
  }
  const imp = sh(`nlm research import ${nb}`, { timeout: 600_000 });
  if (imp.status !== 0) {
    console.warn("research import incomplete", (imp.stdout + imp.stderr).slice(-300));
  }
  return true;
}

function createStudio(nb, prompts, kinds) {
  const created = { audio: false, video: false, slides: false, quiz: false };
  // note: quiz CLI may not support --language; audio/video/slides do
  if (kinds.audio && process.env.NLM_SKIP_AUDIO !== "1") {
    const r = sh(
      `nlm audio create ${nb} --format deep_dive --length default --language ja --focus ${JSON.stringify(prompts.audio)} --confirm`,
      { timeout: 120_000 },
    );
    if (r.status !== 0) console.warn("audio create", (r.stdout + r.stderr).slice(-400));
    else created.audio = true;
  }
  if (kinds.video && process.env.NLM_SKIP_VIDEO !== "1") {
    // 受験授業向き: explainer + whiteboard を第一選択（板書型）
    // 環境変数で上書き可: NLM_VIDEO_FORMAT / NLM_VIDEO_STYLE
    const vFormat = process.env.NLM_VIDEO_FORMAT || "explainer";
    const vStyle = process.env.NLM_VIDEO_STYLE || "whiteboard";
    const vFocus = JSON.stringify(prompts.video);
    const r = sh(
      `nlm video create ${nb} --format ${vFormat} --style ${vStyle} --language ja --focus ${vFocus} --confirm`,
      { timeout: 180_000 },
    );
    if (r.status !== 0) console.warn("video create failed; one-shot policy forbids automatic retry", (r.stdout + r.stderr).slice(-400));
    else created.video = true;
  }
  if (kinds.slides && process.env.NLM_SKIP_SLIDES !== "1") {
    const r = sh(
      `nlm slides create ${nb} --format detailed_deck --length default --language ja --focus ${JSON.stringify(prompts.slides)} --confirm`,
      { timeout: 120_000 },
    );
    if (r.status !== 0) console.warn("slides create", (r.stdout + r.stderr).slice(-400));
    else created.slides = true;
  }
  if (kinds.quiz && process.env.NLM_SKIP_QUIZ !== "1") {
    const r = sh(
      `nlm quiz create ${nb} --count 6 --difficulty 3 --focus ${JSON.stringify(prompts.quiz)} --confirm`,
      { timeout: 120_000 },
    );
    if (r.status !== 0) console.warn("quiz create", (r.stdout + r.stderr).slice(-400));
    else created.quiz = true;
  }
  return created;
}

function preflight(loc) {
  const failures = [];
  const audit = loc.fromPartCurriculum && loc.unit.readiness?.status === "generation_ready"
    ? { fail: [] }
    : auditUnit(loc.subjectDir, loc.unit);
  if (audit.fail.length) failures.push(...audit.fail);
  if (!loc.storyboardPath || !fs.existsSync(loc.storyboardPath)) failures.push("storyboard missing");
  if (!loc.slidesPath || !fs.existsSync(loc.slidesPath)) {
    failures.push("canonical slides missing");
  }
  if (!loc.quizPath || !fs.existsSync(loc.quizPath)) failures.push("canonical quiz missing");
  if (failures.length) {
    throw new Error(`preflight blocked: ${failures.join("; ")}`);
  }
  return audit;
}

function fileHash(file) {
  return createHash("sha256").update(fs.readFileSync(file)).digest("hex");
}

/** Studio が completed になるまで待つ（最大 maxWaitSec） */
function waitStudioReady(nb, { maxWaitSec = 900, pollSec = 30, types = null } = {}) {
  if (DRY) return { arts: [], ready: true };
  const deadline = Date.now() + maxWaitSec * 1000;
  const typeSet = types ? new Set(types) : null;
  while (Date.now() < deadline) {
    const r = sh(`nlm studio status ${nb} --json`, { timeout: 120_000 });
    let arts = [];
    try {
      arts = JSON.parse(r.stdout || "[]");
      if (!Array.isArray(arts) && arts.artifacts) arts = arts.artifacts;
    } catch {
      /* keep polling */
    }
    if (Array.isArray(arts) && arts.length) {
      if (typeSet) {
        arts = arts.filter((a) => typeSet.has(String(a.type || a.artifact_type || "")));
      }
      // 同型が複数ある場合は新しいもの優先（先頭が新しい想定、なければ全部）
      const statuses = arts.map((a) => String(a.status || a.state || "unknown").toLowerCase());
      const pending = statuses.filter((s) =>
        /progress|pending|running|generating|in_progress|processing/.test(s),
      );
      // unknown は「生成中の可能性」だが無限待ちしない: completed が1つでもあれば先へ
      const failed = statuses.filter((s) => /fail|error/.test(s));
      const done = statuses.filter((s) => /complete|ready|success|done/.test(s));
      console.log(
        "studio poll",
        arts.map((a) => `${a.type || a.artifact_type}:${a.status || "?"}`).join(", ") || "(no match)",
      );
      const completedTypes = new Set(
        arts
          .filter((a) => /complete|ready|success|done/.test(String(a.status || a.state || "").toLowerCase()))
          .map((a) => String(a.type || a.artifact_type || "")),
      );
      const allRequestedTypesDone =
        typeSet && [...typeSet].every((type) => completedTypes.has(type));
      if ((typeSet && allRequestedTypesDone) || (!typeSet && done.length > 0 && pending.length === 0)) {
        return { arts, ready: true };
      }
      if (pending.length === 0 && failed.length === arts.length && arts.length > 0) {
        return { arts, ready: false };
      }
    }
    sleep(pollSec * 1000);
  }
  console.warn("studio wait timeout", nb);
  return { arts: [], ready: false };
}

function downloadArtifacts(
  nb,
  unitId,
  loc,
  {
    wait = true,
    kinds = { audio: true, video: true, slides: true, quiz: true },
  } = {},
) {
  const out = path.join(MEDIA, unitId);
  fs.mkdirSync(out, { recursive: true });
  if (wait) {
    const types = [];
    if (kinds.video) types.push("video");
    if (kinds.audio) types.push("audio");
    if (kinds.slides) types.push("slide_deck");
    if (kinds.quiz) types.push("quiz");
    waitStudioReady(nb, {
      maxWaitSec: Number(process.env.NLM_STUDIO_WAIT_SECONDS || 1200),
      pollSec: Number(process.env.NLM_STUDIO_POLL_SECONDS || 40),
      // 対象タイプだけ待つ（旧ジョブの unknown に捕まらない）
      types: types.length ? types : null,
    });
  }

  const jobs = [];
  if (kinds.audio) {
    jobs.push(["audio", path.join(out, "nlm_audio.m4a")]);
  }
  if (kinds.video) {
    jobs.push(["video", path.join(out, "nlm_video.mp4")]);
  }
  if (kinds.slides) {
    jobs.push(["slide-deck", path.join(out, "slides.pdf")]);
  }
  if (DRY) {
    for (const [type, dest] of jobs) {
      sh(`nlm download ${type} ${nb} --output ${JSON.stringify(dest)}`);
    }
    if (kinds.quiz) {
      const quizOut = path.join(out, "nlm_quiz.json");
      sh(`nlm download quiz ${nb} --output ${JSON.stringify(quizOut)} --format json`);
    }
    return;
  }
  for (const [type, dest] of jobs) {
    // retry download a few times (artifact may still be finishing)
    let ok = false;
    for (let attempt = 1; attempt <= 4; attempt++) {
      const r = sh(`nlm download ${type} ${nb} --output ${JSON.stringify(dest)}`, {
        timeout: 300_000,
      });
      if (r.status === 0 && fs.existsSync(dest) && fs.statSync(dest).size > 1000) {
        console.log("downloaded", dest, fs.statSync(dest).size);
        if (type === "audio") fs.copyFileSync(dest, path.join(out, "audio.m4a"));
        if (type === "video") fs.copyFileSync(dest, path.join(out, "video.mp4"));
        ok = true;
        break;
      }
      console.warn(`download retry ${type} attempt ${attempt}`);
      sleep(45_000);
    }
    if (!ok) console.warn("download fail/skip", type);
  }
  // quiz optional
  if (kinds.quiz) {
    const quizOut = path.join(out, "nlm_quiz.json");
    const quiz = shArgs("nlm", ["download", "quiz", nb, "--output", quizOut, "--format", "json"], {
      timeout: 300_000,
    });
    if (quiz.status !== 0) {
      console.warn("download fail/skip quiz");
    }
    if (fs.existsSync(quizOut) && fs.statSync(quizOut).size > 20) {
      fs.copyFileSync(quizOut, path.join(out, "quiz.json"));
    }
  }

  // manifest
  const files = fs.readdirSync(out).filter((f) => !f.startsWith("."));
  let previousManifest = {};
  try {
    previousManifest = JSON.parse(
      fs.readFileSync(path.join(out, "manifest.json"), "utf8"),
    );
  } catch {
    /* first generation */
  }
  const man = {
    unit_id: unitId,
    parent_unit_id: loc.unit.parentUnitId || unitId,
    part_number: loc.unit.part || 1,
    brand: "Medvance",
    source: "notebooklm-unit-factory",
    notebook_id: nb,
    alignment: "lesson+storyboard primary; research secondary",
    files,
    audio: files.includes("audio.m4a") || files.includes("nlm_audio.m4a") ? "audio.m4a" : null,
    // Never publish a slide-rendered compatibility file as a lecture video.
    video: files.includes("nlm_video.mp4") ? "nlm_video.mp4" : null,
    slides_pdf: files.includes("slides.pdf") ? "slides.pdf" : null,
    lesson_pdf: files.includes("lesson.pdf") ? "lesson.pdf" : null,
    updated_at: new Date().toISOString(),
    provenance: {
      brand: "Medvance",
      generator: "notebooklm",
      canonical_sources: [path.basename(loc.lessonPath), path.basename(loc.storyboardPath || "")].filter(Boolean),
      canonical_sha256: [
        { role: "lesson", file: loc.lessonPath },
        { role: "storyboard", file: loc.storyboardPath },
      ]
        .filter((entry) => entry.file && fs.existsSync(entry.file))
        .map((entry) => ({
          role: entry.role,
          file: path.relative(path.join(CONTENT, loc.subjectDir), entry.file),
          sha256: fileHash(entry.file),
        })),
      video_generator: files.includes("nlm_video.mp4") ? "notebooklm" : null,
      video_duration_seconds: files.includes("nlm_video.mp4") ? durationSeconds(path.join(out, "nlm_video.mp4")) : null,
      audio_generator: files.includes("nlm_audio.m4a") ? "notebooklm" : null,
      slides_generator: files.includes("slides.pdf") || files.includes("nlm_slides.pdf") ? "notebooklm" : null,
    },
  };
  if (previousManifest.public_urls) man.public_urls = previousManifest.public_urls;
  fs.writeFileSync(path.join(out, "manifest.json"), JSON.stringify(man, null, 2));
}

function sleep(ms) {
  if (DRY) return;
  Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, ms);
}

function resolveKinds(options) {
  const only = options.audioOnly
    ? { audio: true, video: false, slides: false, quiz: false }
    : options.videoOnly
      ? { audio: false, video: true, slides: false, quiz: false }
      : { audio: true, video: true, slides: true, quiz: true };

  return {
    audio: only.audio && process.env.NLM_SKIP_AUDIO !== "1",
    video: only.video && process.env.NLM_SKIP_VIDEO !== "1",
    slides: only.slides && process.env.NLM_SKIP_SLIDES !== "1",
    quiz: only.quiz && process.env.NLM_SKIP_QUIZ !== "1",
  };
}

function processUnit(unitId, reg, options) {
  const loc = findUnit(unitId);
  if (!loc) {
    throw new Error(`unit not found ${unitId}`);
  }
  if (!fs.existsSync(loc.lessonPath)) {
    console.warn("no lesson", unitId);
    return;
  }

  console.log("\n========", unitId, loc.unit.title, "========");
  preflight(loc);
  const ymd = new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Tokyo",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(new Date()).replaceAll("-", "");
  const title = `Medvance ${unitId} ${ymd}`;
  const nb = ensureNotebook(reg, unitId, title);
  reg.units[unitId].subject = loc.subject;
  reg.units[unitId].subjectDir = loc.subjectDir;
  saveRegistry(reg);

  const kinds = resolveKinds(options);
  const existingVideoPath = path.join(MEDIA, unitId, "nlm_video.mp4");
  const existingSeconds = fs.existsSync(existingVideoPath)
    ? durationSeconds(existingVideoPath)
    : null;
  if (
    !options.downloadOnly &&
    kinds.video &&
    Number.isFinite(existingSeconds) &&
    existingSeconds > 0
  ) {
    kinds.video = false;
    reg.units[unitId].video_reused_at = new Date().toISOString();
    reg.units[unitId].video_duration_seconds = existingSeconds;
    console.log("skip video create: existing NotebookLM video is kept for content review", Math.round(existingSeconds), "sec");
  }
  if (!options.downloadOnly && kinds.video && reg.units[unitId]?.video_requested_at) {
    kinds.video = false;
    console.log("skip video create: one-shot request already recorded", reg.units[unitId].video_requested_at);
  }
  if (options.downloadOnly) {
    const accepted = reg.units[unitId]?.batch_submission?.accepted;
    if (Array.isArray(accepted) && accepted.length) {
      for (const kind of Object.keys(kinds)) {
        kinds[kind] = kinds[kind] && accepted.includes(kind);
      }
    }
    downloadArtifacts(nb, unitId, loc, { kinds });
    return;
  }

  if (!options.reuseSources) addCanonicalSources(nb, loc);

  // 動画品質用: 画コンテをソースに追加
  if (kinds.video) {
    const directorPath = writeVideoDirectorSource(loc);
    sh(`nlm source add ${nb} --file ${JSON.stringify(directorPath)} --wait`);
  }

  if (options.research) {
    try {
      runDeepResearch(nb, loc);
      reg.units[unitId].research_at = new Date().toISOString();
      saveRegistry(reg);
    } catch (e) {
      console.warn("research error", e.message);
    }
    sleep(5000);
  }

  const prompts = buildArtifactPrompts(loc);
  const created = createStudio(nb, prompts, kinds);
  reg.units[unitId].studio_requested_at = new Date().toISOString();
  if (created.video) {
    reg.units[unitId].video_requested_at = new Date().toISOString();
    reg.units[unitId].video_request_policy = PART_POLICY.policy;
  }
  reg.units[unitId].focus = prompts.common.slice(0, 200);
  if (kinds.video) {
    reg.units[unitId].video_focus = prompts.video.slice(0, 240);
    reg.units[unitId].video_quality = "hq-whiteboard-v1";
  }
  saveRegistry(reg);

  if (options.submitOnly) {
    const previous = reg.units[unitId].batch_submission || {};
    const requested = [
      ...new Set([
        ...(previous.requested || []),
        ...Object.entries(kinds).filter(([, value]) => value).map(([kind]) => kind),
      ]),
    ];
    const accepted = [
      ...new Set([
        ...(previous.accepted || []),
        ...Object.entries(created).filter(([, value]) => value).map(([kind]) => kind),
      ]),
    ];
    const missing = requested.filter((kind) => !accepted.includes(kind));
    reg.units[unitId].batch_submission = {
      at: new Date().toISOString(),
      requested,
      accepted,
      missing,
    };
    saveRegistry(reg);
    if (missing.length) {
      throw new Error(`studio submission incomplete: ${missing.join(",")}`);
    }
    console.log("SUBMISSION ACCEPTED", unitId, created);
    return;
  }

  // 生成完了を待ってからダウンロード（早すぎると失敗する）
  sleep(60_000);
  downloadArtifacts(nb, unitId, loc, { wait: true, kinds });
  reg.units[unitId].last_run_at = new Date().toISOString();
  saveRegistry(reg);

  // rate limit pause between units（動画制限が厳しい）
  const configuredCooldown = Number.parseInt(
    process.env.NLM_UNIT_COOLDOWN_SECONDS || "",
    10,
  );
  const cooldownSeconds = Number.isFinite(configuredCooldown)
    ? configuredCooldown
    : process.env.NLM_SKIP_VIDEO === "1"
      ? 60
      : 180;
  sleep(cooldownSeconds * 1000);
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
  // default: 無料入口（NLM 未整備を優先して埋める）
  return [
    "ME-EN-01",
    "ME-PH-01",
    "ME-CH-01",
    "ME-BI-01",
    "ME-IV-01",
    "ME-ES-01",
    "ME-JA-01",
    "ME-SO-01",
    "ME-IF-01",
    "ADV-M1-06",
  ];
}

function main() {
  const options = {
    research: flags.has("--research") && !flags.has("--no-research"),
    downloadOnly: flags.has("--download-only"),
    submitOnly: flags.has("--submit-only"),
    audioOnly: flags.has("--audio-only"),
    videoOnly: flags.has("--video-only"),
    reuseSources: flags.has("--reuse-sources"),
  };
  if (options.audioOnly && options.videoOnly) {
    throw new Error("--audio-only and --video-only cannot be combined");
  }
  if (options.downloadOnly && options.submitOnly) {
    throw new Error("--download-only and --submit-only cannot be combined");
  }
  const ids = resolveUnitIds();
  console.log("factory units:", ids.length, ids.join(", "));
  console.log("options", options, "research_mode", options.research ? process.env.NLM_RESEARCH_MODE || "fast" : "off");

  const reg = loadRegistry();
  let failures = 0;
  for (const id of ids) {
    try {
      processUnit(id, reg, options);
    } catch (e) {
      failures += 1;
      console.error("FAIL", id, e.message);
      // continue next after pause
      if (!options.submitOnly) sleep(60_000);
    }
  }
  console.log("done. registry →", REGISTRY);
  if (failures) process.exitCode = 1;
}

main();
