#!/usr/bin/env node
/**
 * NotebookLM Part daily batch runner.
 *
 * Phase 1 submits a batch of Part packs quickly so NotebookLM can generate
 * video/audio/slides/quiz in parallel. Phase 2 collects completed artifacts
 * with bounded local concurrency. Every submission is recorded before moving
 * on, including the sequence number at which a quota/rate-limit error occurs.
 */
import fs from "node:fs";
import path from "node:path";
import { spawn, spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const CONTENT = path.join(ROOT, "content", "academy");
const MEDIA = path.join(ROOT, "public", "academy", "media");
const MANIFEST = path.join(CONTENT, "nlm-generation-manifest.json");
const STATE = path.join(CONTENT, "nlm-part-daily-state.json");
const REGISTRY = path.join(CONTENT, "nlm-registry.json");
const LOCK = path.join(CONTENT, ".nlm-part-daily.lock");
const FACTORY = path.join(ROOT, "scripts", "nlm-unit-factory.mjs");
const args = process.argv.slice(2);
const DRY = args.includes("--dry-run");
const RETRY_SUBMISSION_ERRORS = args.includes("--retry-submission-errors");
const CLEAR_FALSE_QUOTA = args.includes("--clear-false-quota");
const CONFIRMED = args.includes("--confirm") || process.env.NLM_DAILY_CONFIRMED === "1";
const maxIndex = args.indexOf("--max");
const SAFETY_MAX = Math.max(
  10,
  Number(maxIndex >= 0 ? args[maxIndex + 1] : process.env.NLM_PART_DAILY_SAFETY_MAX || 40) || 40,
);
const BATCH_SIZE = Math.max(10, Number(process.env.NLM_SUBMISSION_BATCH_SIZE || 10) || 10);
const COLLECT_CONCURRENCY = Math.max(
  1,
  Math.min(10, Number(process.env.NLM_COLLECT_CONCURRENCY || 4) || 4),
);

function today() {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Tokyo",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(new Date());
}

function loadState() {
  if (!fs.existsSync(STATE)) return { version: 4, days: {}, partDays: {} };
  const state = JSON.parse(fs.readFileSync(STATE, "utf8"));
  state.version = Math.max(Number(state.version) || 1, 4);
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
    audio:
      fileReady(path.join(id, "nlm_audio.m4a"), 5_000) ||
      fileReady(path.join(id, "audio.m4a"), 5_000),
    slides: fileReady(path.join(id, "slides.pdf"), 5_000),
    quiz:
      fileReady(path.join(id, "nlm_quiz.json"), 50) ||
      fileReady(path.join(id, "quiz.json"), 50),
  };
}

function submissionSnapshot(id) {
  if (!fs.existsSync(REGISTRY)) return null;
  const registry = JSON.parse(fs.readFileSync(REGISTRY, "utf8"));
  return registry.units?.[id]?.batch_submission || null;
}

function complete(status) {
  return Object.values(status).every(Boolean);
}

function quotaFailure(output) {
  return /(RESOURCE_EXHAUSTED|rate.?limit|quota|daily limit|429|上限)/i.test(output);
}

function priorityGroup(item) {
  if (item.subjectId === "mathA-exam") return "mathA";
  if (item.subjectId === "physics-exam") return "physics";
  if (item.subjectId === "chemistry-exam") return "chemistry";
  if (item.subjectId === "math1-exam") return "math1";
  if (item.subjectId.startsWith("math")) return "otherMath";
  if (item.subjectId === "english-exam") return "english";
  if (item.subjectId === "biology-exam") return "otherScience";
  return "other";
}

function roundRobin(items) {
  const order = (
    process.env.NLM_SUBJECT_PRIORITY ||
    "mathA,physics,chemistry,math1,physics,chemistry,mathA,math1,otherMath,otherScience,english,other"
  )
    .split(",")
    .map((value) => value.trim())
    .filter(Boolean);
  const groupKeys = [
    ...new Set([
      ...order,
      "mathA",
      "physics",
      "chemistry",
      "math1",
      "otherMath",
      "otherScience",
      "english",
      "other",
    ]),
  ];
  const groups = Object.fromEntries(groupKeys.map((key) => [key, []]));
  for (const item of items) groups[priorityGroup(item)].push(item);
  const out = [];
  while (groupKeys.some((key) => groups[key].length)) {
    for (const key of order) {
      const item = groups[key].shift();
      if (item) out.push(item);
    }
  }
  return out;
}

function runSubmission(id, retryKinds = null) {
  const retrySet = retryKinds ? new Set(retryKinds) : null;
  const result = spawnSync("node", [FACTORY, id, "--no-research", "--submit-only"], {
    cwd: ROOT,
    encoding: "utf8",
    maxBuffer: 40 * 1024 * 1024,
    timeout: Number(process.env.NLM_SUBMISSION_TIMEOUT_MS || 900_000),
    env: {
      ...process.env,
      NLM_RESEARCH_MODE: "off",
      ...(retrySet
        ? {
            NLM_SKIP_AUDIO: retrySet.has("audio") ? "0" : "1",
            NLM_SKIP_VIDEO: retrySet.has("video") ? "0" : "1",
            NLM_SKIP_SLIDES: retrySet.has("slides") ? "0" : "1",
            NLM_SKIP_QUIZ: retrySet.has("quiz") ? "0" : "1",
          }
        : {}),
    },
  });
  const output = `${result.stdout || ""}\n${result.stderr || ""}`;
  process.stdout.write(output);
  return { code: result.status ?? 1, output };
}

function runCollection(id) {
  return new Promise((resolve) => {
    const child = spawn("node", [FACTORY, id, "--no-research", "--download-only"], {
      cwd: ROOT,
      env: {
        ...process.env,
        NLM_RESEARCH_MODE: "off",
        NLM_STUDIO_WAIT_SECONDS: process.env.NLM_STUDIO_WAIT_SECONDS || "1800",
        NLM_STUDIO_POLL_SECONDS: process.env.NLM_STUDIO_POLL_SECONDS || "40",
      },
      stdio: ["ignore", "pipe", "pipe"],
    });
    let output = "";
    child.stdout.on("data", (chunk) => {
      output += chunk;
      process.stdout.write(`[${id}] ${chunk}`);
    });
    child.stderr.on("data", (chunk) => {
      output += chunk;
      process.stderr.write(`[${id}] ${chunk}`);
    });
    const timeout = setTimeout(
      () => child.kill(),
      Number(process.env.NLM_COLLECTION_TIMEOUT_MS || 3_600_000),
    );
    child.on("close", (code) => {
      clearTimeout(timeout);
      resolve({ id, code: code ?? 1, output });
    });
  });
}

async function runPool(ids, limit, worker, onResult) {
  const queue = [...ids];
  async function consume() {
    while (queue.length) {
      const id = queue.shift();
      const result = await worker(id);
      await onResult(result);
    }
  }
  await Promise.all(
    Array.from({ length: Math.min(limit, ids.length) }, () => consume()),
  );
}

if (!fs.existsSync(MANIFEST)) {
  console.error("固定マニフェストがありません。npm run academy:generation-manifest を先に実行してください。");
  process.exit(2);
}

const manifest = JSON.parse(fs.readFileSync(MANIFEST, "utf8"));
const state = loadState();
const day = today();
state.partDays[day] ??= {
  attempted: [],
  complete: [],
  partial: [],
  submissions: [],
  collectionPending: [],
  stoppedReason: null,
};
const dayState = state.partDays[day];
dayState.attempted ??= [];
dayState.complete ??= [];
dayState.partial ??= [];
dayState.submissions ??= [];
dayState.collectionPending ??= [];
if (
  CLEAR_FALSE_QUOTA &&
  dayState.stoppedReason === "quota_or_rate_limit"
) {
  const flagged = dayState.submissions.find(
    (entry) => entry.sequence === dayState.firstQuotaErrorSequence,
  );
  if (flagged?.accepted) {
    console.log("CLEAR false quota marker from an accepted submission", {
      sequence: dayState.firstQuotaErrorSequence,
      id: dayState.firstQuotaErrorPartId,
    });
    delete dayState.firstQuotaErrorSequence;
    delete dayState.firstQuotaErrorPartId;
    delete dayState.limitProbe;
    dayState.stoppedReason = null;
    saveState(state);
  }
}
if (RETRY_SUBMISSION_ERRORS) {
  const retryableIds = new Set(
    dayState.submissions
      .filter(
        (entry) =>
          !entry.accepted &&
          entry.errorKind === "submission_error",
      )
      .map((entry) => entry.id),
  );
  if (retryableIds.size) {
    console.log("RETRY confirmed pre-notebook submission errors", [...retryableIds]);
    dayState.attempted = dayState.attempted.filter((id) => !retryableIds.has(id));
    dayState.partial = dayState.partial.filter((entry) => !retryableIds.has(entry.id));
    dayState.submissions = dayState.submissions.filter(
      (entry) => !retryableIds.has(entry.id),
    );
    saveState(state);
  }
}
const previousStoppedReason = dayState.stoppedReason;
const quotaAlreadyDetected =
  previousStoppedReason === "quota_or_rate_limit" &&
  !args.includes("--force-retry");
if (!quotaAlreadyDetected) dayState.stoppedReason = null;
for (const [index, id] of dayState.attempted.entries()) {
  if (dayState.submissions.some((entry) => entry.id === id)) continue;
  dayState.submissions.push({
    sequence: index + 1,
    id,
    at: null,
    accepted: complete(packStatus(id)),
    code: null,
    errorKind: complete(packStatus(id)) ? null : "legacy_sequential_unknown",
    mode: "legacy_sequential",
  });
}

const allAttempted = new Set(
  Object.values(state.partDays || {}).flatMap((entry) => entry.attempted || []),
);
const completedParts = new Set(
  Object.values(state.partDays || {}).flatMap((entry) => entry.complete || []),
);
const partialParts = new Set(
  Object.values(state.partDays || {}).flatMap((entry) =>
    (entry.partial || []).map((item) => item.id),
  ),
);
const excludedParts = new Set([...allAttempted, ...completedParts, ...partialParts]);
const manifestById = new Map(
  (manifest.parts || []).map((item) => [item.partId, item]),
);
const retryById = new Map();
for (const [partDay, entry] of Object.entries(state.partDays || {})) {
  if (partDay === day) continue;
  for (const partial of entry.partial || []) {
    const missing = partial.missing || submissionSnapshot(partial.id)?.missing || [];
    if (!missing.length || complete(packStatus(partial.id))) continue;
    const item = manifestById.get(partial.id);
    if (item) retryById.set(partial.id, { ...item, retryKinds: missing });
  }
}
const retryQueue = roundRobin([...retryById.values()]);
const readyQueue = roundRobin(
  (manifest.parts || [])
    .filter((item) => item.status === "ready")
    .filter((item) => !excludedParts.has(item.partId))
    .filter((item) => !retryById.has(item.partId))
    .filter((item) => !complete(packStatus(item.partId))),
);

console.log("NotebookLM Part daily batch queue", {
  ready: readyQueue.length,
  partialRetries: retryQueue.length,
  safetyMax: SAFETY_MAX,
  submissionBatchSize: BATCH_SIZE,
  collectConcurrency: COLLECT_CONCURRENCY,
  todayAttempted: dayState.attempted.length,
  mode: DRY ? "dry-run" : "batch-submit-then-collect",
});

if (DRY) {
  [...retryQueue, ...readyQueue].slice(0, SAFETY_MAX).forEach((item, index) => {
    console.log(
      `- submit #${dayState.attempted.length + index + 1}`,
      item.partId,
      priorityGroup(item),
      item.retryKinds ? `retry:${item.retryKinds.join(",")}` : "new",
      packStatus(item.partId),
    );
  });
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
    // process exit cleanup only
  }
};
process.on("exit", releaseLock);
process.on("SIGINT", () => process.exit(130));
process.on("SIGTERM", () => process.exit(143));

const remainingCapacity = Math.max(0, SAFETY_MAX - dayState.attempted.length);
const candidates = [...retryQueue, ...readyQueue].slice(0, remainingCapacity);
let quotaDetected = quotaAlreadyDetected;

for (let offset = 0; offset < candidates.length && !quotaDetected; offset += BATCH_SIZE) {
  const batch = candidates.slice(offset, offset + BATCH_SIZE);
  console.log(
    `SUBMISSION BATCH ${Math.floor(offset / BATCH_SIZE) + 1}`,
    batch.map((item) => item.partId),
  );
  for (const item of batch) {
    const sequence = dayState.attempted.length + 1;
    const id = item.partId;
    dayState.attempted.push(id);
    saveState(state);
    const result = runSubmission(id, item.retryKinds);
    const accepted = result.code === 0;
    const quota = !accepted && quotaFailure(result.output);
    const snapshot = submissionSnapshot(id);
    const acceptedKinds = snapshot?.accepted || [];
    const missingKinds = snapshot?.missing || [];
    dayState.submissions.push({
      sequence,
      id,
      subjectId: item.subjectId,
      at: new Date().toISOString(),
      accepted,
      code: result.code,
      errorKind: quota ? "quota_or_rate_limit" : accepted ? null : "submission_error",
      ...(item.retryKinds ? { retryKinds: item.retryKinds } : {}),
      acceptedKinds,
      missingKinds,
    });
    if (accepted || acceptedKinds.length) {
      dayState.collectionPending = [...new Set([...dayState.collectionPending, id])];
    }
    if (!accepted) {
      dayState.partial.push({
        id,
        at: new Date().toISOString(),
        stage: "submission",
        status: Object.fromEntries(
          ["video", "audio", "slides", "quiz"].map((kind) => [
            kind,
            acceptedKinds.includes(kind),
          ]),
        ),
        accepted: acceptedKinds,
        missing: missingKinds,
        code: result.code,
      });
    }
    if (quota) {
      quotaDetected = true;
      dayState.firstQuotaErrorSequence ??= sequence;
      dayState.firstQuotaErrorPartId ??= id;
      dayState.stoppedReason = "quota_or_rate_limit";
      console.log("FIRST QUOTA/RATE LIMIT", { sequence, id });
    }
    saveState(state);
    if (quotaDetected) break;
  }
}

const collectionIds = [
  ...new Set(
    Object.values(state.partDays)
      .flatMap((entry) => entry.collectionPending || [])
      .filter((id) => !complete(packStatus(id))),
  ),
];
console.log("COLLECTION START", {
  count: collectionIds.length,
  concurrency: COLLECT_CONCURRENCY,
  ids: collectionIds,
});

await runPool(collectionIds, COLLECT_CONCURRENCY, runCollection, async (result) => {
  const status = packStatus(result.id);
  if (complete(status)) {
    dayState.complete = [...new Set([...dayState.complete, result.id])];
    for (const entry of Object.values(state.partDays)) {
      entry.collectionPending = (entry.collectionPending || []).filter(
        (id) => id !== result.id,
      );
    }
    console.log("PACK COMPLETE", result.id, status);
  } else {
    console.log("COLLECTION PENDING", result.id, status, "code", result.code);
  }
  saveState(state);
});

if (!dayState.stoppedReason) {
  if (dayState.attempted.length >= SAFETY_MAX) {
    dayState.stoppedReason = "safety_max";
  } else if (candidates.length === 0) {
    dayState.stoppedReason = "queue_empty";
  } else if (candidates.length === readyQueue.length) {
    dayState.stoppedReason = "queue_drained";
  } else {
    dayState.stoppedReason = "batch_complete";
  }
}
dayState.limitProbe = {
  attempted: dayState.attempted.length,
  accepted: dayState.submissions.filter((entry) => entry.accepted).length,
  errors: dayState.submissions.filter((entry) => !entry.accepted).length,
  firstQuotaErrorSequence: dayState.firstQuotaErrorSequence || null,
  firstQuotaErrorPartId: dayState.firstQuotaErrorPartId || null,
  recordedAt: new Date().toISOString(),
};
saveState(state);
console.log("daily batch result", {
  day,
  stoppedReason: dayState.stoppedReason,
  limitProbe: dayState.limitProbe,
  complete: dayState.complete.length,
  collectionPending: dayState.collectionPending.length,
});
