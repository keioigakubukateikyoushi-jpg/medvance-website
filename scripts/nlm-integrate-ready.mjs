#!/usr/bin/env node
/**
 * 完成した NLM メディアパックをサイト組み込み用に正規化する。
 *
 * やること:
 * 1. nlm_* → 配信名（audio.m4a / video.mp4 / slides.pdf）へコピー
 * 2. manifest.json を最新化（public_urls は保持）
 * 3. content/academy/media-ready.json を更新（git 追跡・進捗の正本）
 * 4. academy-progress-board で BOARD / inventory / 次キューを更新
 *
 * Usage:
 *   node scripts/nlm-integrate-ready.mjs              # 全 complete を走査
 *   node scripts/nlm-integrate-ready.mjs ME-PH-02 ME-M1-04
 *   node scripts/nlm-integrate-ready.mjs --from-file /tmp/ids.txt
 *   node scripts/nlm-integrate-ready.mjs --dry-run
 */
import { spawnSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const MEDIA = path.join(ROOT, "public/academy/media");
const CONTENT = path.join(ROOT, "content/academy");
const READY_PATH = path.join(CONTENT, "media-ready.json");
const LOG = process.env.NLM_INTEGRATE_LOG || "/tmp/nlm-integrate-ready.log";

const args = process.argv.slice(2);
const DRY = args.includes("--dry-run");
const positional = args.filter((a) => !a.startsWith("--"));
const fromIdx = args.indexOf("--from-file");

function log(...parts) {
  const line = `[${new Date().toISOString()}] ${parts.join(" ")}`;
  console.log(line);
  try {
    fs.appendFileSync(LOG, line + "\n");
  } catch {
    /* ignore */
  }
}

function loadIds() {
  if (fromIdx >= 0) {
    const p = args[fromIdx + 1];
    return fs
      .readFileSync(p, "utf8")
      .split(/\r?\n/)
      .map((s) => s.trim())
      .filter(Boolean);
  }
  if (positional.length) return positional;
  // 全ディレクトリ走査
  if (!fs.existsSync(MEDIA)) return [];
  return fs
    .readdirSync(MEDIA)
    .filter((d) => fs.statSync(path.join(MEDIA, d)).isDirectory())
    .filter((d) => /^(ME-|ADV-|ELI-)/.test(d));
}

function exists(dir, name) {
  try {
    return fs.existsSync(path.join(dir, name)) && fs.statSync(path.join(dir, name)).size > 1000;
  } catch {
    return false;
  }
}

function ensureCopy(dir, from, to) {
  const src = path.join(dir, from);
  const dest = path.join(dir, to);
  if (!fs.existsSync(src)) return false;
  if (fs.existsSync(dest) && fs.statSync(dest).size === fs.statSync(src).size) return true;
  if (DRY) {
    log("dry copy", from, "->", to);
    return true;
  }
  fs.copyFileSync(src, dest);
  log("copy", path.basename(dir), from, "->", to);
  return true;
}

function inspectPack(id) {
  const dir = path.join(MEDIA, id);
  if (!fs.existsSync(dir)) return null;

  // 配信名に正規化
  if (exists(dir, "nlm_audio.m4a") && !exists(dir, "audio.m4a")) ensureCopy(dir, "nlm_audio.m4a", "audio.m4a");
  if (exists(dir, "nlm_video.mp4") && !exists(dir, "video.mp4")) ensureCopy(dir, "nlm_video.mp4", "video.mp4");
  // slides は nlm_slides 命名ゆれ
  for (const alt of ["nlm_slides.pdf", "slides_nlm.pdf"]) {
    if (exists(dir, alt) && !exists(dir, "slides.pdf")) ensureCopy(dir, alt, "slides.pdf");
  }

  const audio = exists(dir, "audio.m4a") || exists(dir, "nlm_audio.m4a");
  const video = exists(dir, "video.mp4") || exists(dir, "nlm_video.mp4");
  const slides = exists(dir, "slides.pdf");
  const lessonHtml = exists(dir, "lesson.html") || fs.existsSync(path.join(dir, "lesson.html"));
  const lessonPdf = exists(dir, "lesson.pdf");

  // complete = 音声+動画+スライド（講義本体）
  const complete = audio && video && slides;
  const partial = (audio || video || slides) && !complete;

  // manifest 更新
  let previous = {};
  const manPath = path.join(dir, "manifest.json");
  try {
    previous = JSON.parse(fs.readFileSync(manPath, "utf8"));
  } catch {
    previous = {};
  }
  const files = fs.readdirSync(dir).filter((f) => !f.startsWith("."));
  const man = {
    ...previous,
    unit_id: id,
    brand: "Medvance",
    free: Boolean(previous.free),
    source: previous.source || "notebooklm-unit-factory",
    files,
    audio: audio ? "audio.m4a" : null,
    video: video ? "video.mp4" : null,
    slides_pdf: slides ? "slides.pdf" : null,
    lesson_pdf: lessonPdf ? "lesson.pdf" : null,
    pack: complete ? "complete" : partial ? "partial" : "thin",
    integrated_at: complete || partial ? new Date().toISOString() : previous.integrated_at || null,
    updated_at: new Date().toISOString(),
  };
  if (previous.public_urls) man.public_urls = previous.public_urls;
  if (previous.notebook_id) man.notebook_id = previous.notebook_id;
  if (!DRY) {
    fs.writeFileSync(manPath, JSON.stringify(man, null, 2) + "\n");
  }

  return {
    id,
    complete,
    partial,
    audio,
    video,
    slides,
    lessonHtml: Boolean(lessonHtml),
    lessonPdf,
    pack: man.pack,
    hasPublicUrls: Boolean(previous.public_urls && Object.keys(previous.public_urls).length),
    free: Boolean(previous.free),
    updated_at: man.updated_at,
  };
}

function loadReady() {
  if (!fs.existsSync(READY_PATH)) {
    return { version: 1, updated: null, complete: {}, partial: {} };
  }
  return JSON.parse(fs.readFileSync(READY_PATH, "utf8"));
}

function saveReady(ready) {
  ready.updated = new Date().toISOString();
  ready.counts = {
    complete: Object.keys(ready.complete || {}).length,
    partial: Object.keys(ready.partial || {}).length,
  };
  if (DRY) {
    log("dry would write", READY_PATH, JSON.stringify(ready.counts));
    return;
  }
  fs.writeFileSync(READY_PATH, JSON.stringify(ready, null, 2) + "\n");
  log("wrote", READY_PATH, `complete=${ready.counts.complete} partial=${ready.counts.partial}`);
}

function refreshBoard() {
  if (DRY) {
    log("dry skip board");
    return;
  }
  const r = spawnSync("node", [path.join(ROOT, "scripts/academy-progress-board.mjs")], {
    cwd: ROOT,
    encoding: "utf8",
  });
  if (r.stdout) process.stdout.write(r.stdout);
  if (r.status !== 0) {
    log("board failed", r.stderr || "");
    throw new Error("academy-progress-board failed");
  }
}

function main() {
  const ids = loadIds();
  log("integrate start", `ids=${ids.length}`, DRY ? "DRY" : "");
  const ready = loadReady();
  ready.complete = ready.complete || {};
  ready.partial = ready.partial || {};

  const report = { complete: [], partial: [], thin: [], missing: [] };

  for (const id of ids) {
    const pack = inspectPack(id);
    if (!pack) {
      report.missing.push(id);
      continue;
    }
    if (pack.complete) {
      ready.complete[id] = {
        audio: pack.audio,
        video: pack.video,
        slides: pack.slides,
        lessonPdf: pack.lessonPdf,
        hasPublicUrls: pack.hasPublicUrls,
        free: pack.free,
        updated_at: pack.updated_at,
      };
      delete ready.partial[id];
      report.complete.push(id);
    } else if (pack.partial) {
      ready.partial[id] = {
        audio: pack.audio,
        video: pack.video,
        slides: pack.slides,
        updated_at: pack.updated_at,
      };
      delete ready.complete[id];
      report.partial.push(id);
    } else {
      report.thin.push(id);
    }
  }

  saveReady(ready);
  refreshBoard();

  log(
    "integrate done",
    `complete=${report.complete.length}`,
    `partial=${report.partial.length}`,
    `thin=${report.thin.length}`,
    `missing=${report.missing.length}`,
  );
  if (report.complete.length) log("complete:", report.complete.join(", "));
  if (report.partial.length) log("partial:", report.partial.join(", "));

  // 日次ログに追記（あれば）
  const day = new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Tokyo",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(new Date());
  const dailyPath = path.join(ROOT, "docs/curriculum/progress/daily", `${day}-integrated.md`);
  if (!DRY) {
    const lines = [
      `# Integrated ${day}`,
      "",
      `- at: ${new Date().toISOString()}`,
      `- complete: ${report.complete.length}`,
      `- partial: ${report.partial.length}`,
      "",
      "## Complete",
      "",
      ...report.complete.map((id) => `- \`${id}\``),
      "",
      "## Partial",
      "",
      ...report.partial.map((id) => `- \`${id}\``),
      "",
    ];
    fs.mkdirSync(path.dirname(dailyPath), { recursive: true });
    fs.writeFileSync(dailyPath, lines.join("\n"));
    log("wrote", dailyPath);
  }

  console.log(JSON.stringify({ counts: ready.counts, report }, null, 2));
}

main();
