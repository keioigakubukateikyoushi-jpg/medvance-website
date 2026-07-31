#!/usr/bin/env node
/**
 * NotebookLM Part日次生成ランナー。
 * generation-readyのPartだけを1件ずつ処理し、動画・音声・スライドPDF・
 * クイズの4点が揃うか、quota/rate limit/失敗を検知するまで進める。
 */
import fs from "node:fs";
import path from "node:path";
import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const CONTENT = path.join(ROOT, "content", "academy");
const MEDIA = path.join(ROOT, "public", "academy", "media");
const MANIFEST = path.join(CONTENT, "nlm-generation-manifest.json");
const STATE = path.join(CONTENT, "nlm-part-daily-state.json");
const LOCK = path.join(CONTENT, ".nlm-part-daily.lock");
const args = process.argv.slice(2);
const DRY = args.includes("--dry-run");
const CONFIRMED = args.includes("--confirm") || process.env.NLM_DAILY_CONFIRMED === "1";
const maxIndex = args.indexOf("--max");
const SAFETY_MAX = Math.max(1, Number(maxIndex >= 0 ? args[maxIndex + 1] : process.env.NLM_PART_DAILY_SAFETY_MAX || 999) || 999);

function today() {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Tokyo",
    year: "numeric",
    month: "2-digit",
    day: "2-digit"
  }).format(new Date());
}

function loadState() {
  if (!fs.existsSync(STATE)) return { version: 3, days: {}, partDays: {} };
  const state = JSON.parse(fs.readFileSync(STATE, "utf8"));
  state.version = Math.max(Number(state.version) || 1, 3);
  state.days ??= {};
  state.partDays ??= {};
  return state;
}

function saveState(state) {
  state.updatedAt = new Date().toISOString();
  fs.writeFileSync(STATE, `${JSON.stringify(state, null, 2)}\n`);
}

function fileReady(file, min = 100) {
  const full = path.join(MEDIA, file);
  return fs.existsSync(full) && fs.statSync(full).size >= min;
}

function packStatus(id) {
  return {
    video: fileReady(path.join(id, "nlm_video.mp4"), 10_000),
    audio: fileReady(path.join(id, "nlm_audio.m4a"), 5_000) || fileReady(path.join(id, "audio.m4a"), 5_000),
    slides: fileReady(path.join(id, "slides.pdf"), 5_000),
    quiz: fileReady(path.join(id, "nlm_quiz.json"), 50) || fileReady(path.join(id, "quiz.json"), 50)
  };
}

function complete(status) {
  return Object.values(status).every(Boolean);
}

function quotaFailure(output) {
  return /(RESOURCE_EXHAUSTED|rate.?limit|quota|daily limit|429|上限)/i.test(output);
}

function runPart(id) {
  const result = spawnSync(
    "node",
    [path.join(ROOT, "scripts", "nlm-unit-factory.mjs"), id, "--no-research"],
    {
      cwd: ROOT,
      encoding: "utf8",
      maxBuffer: 40 * 1024 * 1024,
      timeout: Number(process.env.NLM_PART_TIMEOUT_MS || 2_400_000),
      env: {
        ...process.env,
        NLM_RESEARCH_MODE: "off",
        NLM_UNIT_COOLDOWN_SECONDS: process.env.NLM_UNIT_COOLDOWN_SECONDS || "90"
      }
    }
  );
  const output = `${result.stdout || ""}\n${result.stderr || ""}`;
  process.stdout.write(output);
  return { code: result.status ?? 1, output };
}

if (!fs.existsSync(MANIFEST)) {
  console.error("固定マニフェストがありません。npm run academy:generation-manifest を先に実行してください。");
  process.exit(2);
}
const manifest = JSON.parse(fs.readFileSync(MANIFEST, "utf8"));
const stateForQueue = loadState();
const dayForQueue = today();
const todayStateForQueue = stateForQueue.partDays?.[dayForQueue] || { attempted: [] };
const completedParts = new Set(Object.values(stateForQueue.partDays || {}).flatMap((day) => day.complete || []));
const partialParts = new Set(
  Object.values(stateForQueue.partDays || {}).flatMap((day) => (day.partial || []).map((entry) => entry.id)),
);
const todayAttemptedParts = new Set(todayStateForQueue.attempted || []);
const excludedParts = new Set([...completedParts, ...partialParts, ...todayAttemptedParts]);
const queue = (manifest.parts || [])
  .filter((item) => item.status === "ready")
  .filter((item) => !excludedParts.has(item.partId))
  .map((item) => ({
    ...item,
    outputs: ["video", "audio", "slide_deck", "quiz"],
  }));
function priorityBucket(item) {
  if (["mathA-exam", "physics-exam", "chemistry-exam", "math1-exam", "english-exam"].includes(item.subjectId)) {
    return item.subjectId;
  }
  if (item.subjectId.startsWith("math")) return "other-math";
  if (["biology-exam"].includes(item.subjectId)) return "other-science";
  return "other";
}

function roundRobin(items) {
  const order = [
    "mathA-exam",
    "physics-exam",
    "chemistry-exam",
    "math1-exam",
    "physics-exam",
    "chemistry-exam",
    "mathA-exam",
    "math1-exam",
    "other-math",
    "other-science",
    "english-exam",
    "other",
  ];
  const keys = [...new Set(order)];
  const groups = Object.fromEntries(keys.map((key) => [key, []]));
  for (const item of items) {
    const key = priorityBucket(item);
    groups[key] ??= [];
    groups[key].push(item);
  }
  const out = [];
  while (Object.values(groups).some((group) => group.length)) {
    for (const key of order) {
      const item = groups[key]?.shift();
      if (item) out.push(item);
    }
  }
  return out;
}

const pending = roundRobin(queue.filter((item) => !complete(packStatus(item.partId))));
console.log("NotebookLM Part daily queue", {
  ready: queue.length,
  pending: pending.length,
  safetyMax: SAFETY_MAX,
  mode: DRY ? "dry-run" : "generate-until-limit",
  excluded: {
    complete: completedParts.size,
    partial: partialParts.size,
    todayAttempted: todayAttemptedParts.size,
  },
});

if (DRY) {
  for (const item of pending.slice(0, SAFETY_MAX)) {
    console.log("-", item.partId, packStatus(item.partId), item.command);
  }
  process.exit(0);
}
if (!CONFIRMED) {
  console.error("生成枠を使用します。--confirm または NLM_DAILY_CONFIRMED=1 が必要です。");
  process.exit(2);
}

let lockFd;
try {
  lockFd = fs.openSync(LOCK, "wx");
  fs.writeFileSync(lockFd, `${process.pid} ${new Date().toISOString()}\n`);
} catch {
  console.error("別の日次ワーカーが実行中です。二重実行を防ぐため停止します。");
  process.exit(3);
}
const releaseLock = () => {
  try {
    if (lockFd !== undefined) fs.closeSync(lockFd);
    if (fs.existsSync(LOCK)) fs.unlinkSync(LOCK);
  } catch {
    /* process exit cleanup only */
  }
};
process.on("exit", releaseLock);
process.on("SIGINT", () => process.exit(130));
process.on("SIGTERM", () => process.exit(143));

const state = loadState();
const day = today();
state.partDays[day] ??= { attempted: [], complete: [], partial: [], stoppedReason: null };
const dayState = state.partDays[day];
if (dayState.stoppedReason === "quota_or_rate_limit" && !args.includes("--force-retry")) {
  console.log("本日は上限検知済みです。翌日再開します。");
  process.exit(0);
}

let processed = 0;
for (const item of pending) {
  if (processed >= SAFETY_MAX) {
    dayState.stoppedReason = "safety_max";
    break;
  }
  const id = item.partId;
  console.log(`\n=== ${id} ===`);
  dayState.attempted = [...new Set([...dayState.attempted, id])];
  saveState(state);
  const result = runPart(id);
  const status = packStatus(id);
  processed += 1;
  if (complete(status)) {
    dayState.complete = [...new Set([...dayState.complete, id])];
    console.log("PACK COMPLETE", id, status);
    saveState(state);
    continue;
  }
  dayState.partial.push({ id, at: new Date().toISOString(), status, code: result.code });
  if (quotaFailure(result.output)) {
    dayState.stoppedReason = "quota_or_rate_limit";
    console.log("STOP quota/rate limit", id, status);
  } else {
    dayState.stoppedReason = "pack_incomplete";
    console.log("STOP pack incomplete", id, status);
  }
  saveState(state);
  break;
}
if (!dayState.stoppedReason && pending.length === 0) dayState.stoppedReason = "queue_empty";
if (!dayState.stoppedReason && processed < SAFETY_MAX) dayState.stoppedReason = "queue_drained";
saveState(state);
console.log("daily result", { day, processed, stoppedReason: dayState.stoppedReason });
