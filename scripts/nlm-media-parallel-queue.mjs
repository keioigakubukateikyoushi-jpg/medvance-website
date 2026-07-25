#!/usr/bin/env node
/**
 * 一般メディア量産キュー（並列）
 *
 * 上限近くまで並列で unit-factory を回す。
 * rate limit を検知したら並列度を落としてクールダウン。
 *
 * Usage:
 *   NLM_PARALLEL=3 node scripts/nlm-media-parallel-queue.mjs ME-EN-02 ME-PH-02 ...
 *   node scripts/nlm-media-parallel-queue.mjs --from-file /tmp/ids.txt
 *   node scripts/nlm-media-parallel-queue.mjs --video-only --no-research ME-EN-02
 *   node scripts/nlm-media-parallel-queue.mjs --wave foundation-next
 */
import { spawn } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const MEDIA = path.join(ROOT, "public/academy/media");
const FACTORY = path.join(ROOT, "scripts/nlm-unit-factory.mjs");
const LOG = process.env.NLM_MEDIA_LOG || "/tmp/nlm-media-parallel.log";

const args = process.argv.slice(2);
const flags = new Set(args.filter((a) => a.startsWith("--")));
const positional = args.filter((a) => !a.startsWith("--"));

let parallel = Math.max(1, parseInt(process.env.NLM_PARALLEL || "3", 10) || 3);
const STAGGER_MS = Math.max(0, parseInt(process.env.NLM_STAGGER_MS || "5000", 10) || 5000);
const COOLDOWN_ON_LIMIT_MS = Math.max(
  60_000,
  parseInt(process.env.NLM_LIMIT_COOLDOWN_MS || "180000", 10) || 180_000,
);

/** 各教科の入口直後（無料の次）を優先する波 */
const WAVES = {
  // 英 → 数 → 理（gate 済み・メディア未完を日次が再ソートするが、明示 wave も用意）
  "en-math-sci": [
    // 英語（入口の次）
    "ME-EN-02",
    "ME-EN-03",
    "ME-EN-04",
    "ME-EN-05",
    // 数学I
    "ME-M1-02",
    "ME-M1-03",
    "ME-M1-04",
    "ME-M1-05",
    "ME-M1-06",
    "ME-M1-07",
    "ME-M1-08",
    "ME-M1-09",
    "ME-M1-10",
    "ME-M1-11",
    "ME-M1-12",
    "ME-M1-13",
    "ME-M1-14",
    "ME-M1-15",
    "ME-M1-16",
    "ME-M1-17",
    "ME-M1-18",
    // 理科
    "ME-PH-02",
    "ME-PH-03",
    "ME-PH-04",
    "ME-PH-05",
    "ME-PH-06",
    "ME-PH-07",
    "ME-CH-02",
    "ME-CH-03",
    "ME-BI-02",
    "ME-BI-03",
  ],
  // math1 本文 full 済み → メディア生成（今日の本線）
  "math1-full": [
    "ME-M1-02",
    "ME-M1-03",
    "ME-M1-04",
    "ME-M1-05",
    "ME-M1-06",
    "ME-M1-07",
    "ME-M1-08",
    "ME-M1-09",
    "ME-M1-12",
    "ME-M1-13",
    "ME-M1-40",
    "ME-M1-39",
    "ME-M1-10",
    "ME-M1-11",
    "ME-M1-14",
    "ME-M1-15",
    "ME-M1-16",
    "ME-M1-17",
    "ME-M1-18",
  ],
  "foundation-next": [
    // 主要教科 02–03
    "ME-EN-02",
    "ME-EN-03",
    "ME-PH-02",
    "ME-PH-03",
    "ME-CH-02",
    "ME-CH-03",
    "ME-BI-02",
    "ME-BI-03",
    "ME-IV-02",
    "ME-IV-03",
    "ME-ES-02",
    "ME-ES-03",
    "ME-JA-02",
    "ME-JA-03",
    "ME-SO-02",
    "ME-SO-03",
    "ME-IF-02",
    "ME-IF-03",
    "ME-M1-04",
    "ME-M1-05",
    "ME-MA-01",
    "ME-MA-02",
    "ME-M2-01",
    "ME-M2-02",
    "ME-MB-01",
    "ME-MB-02",
    "ME-M3-01",
    "ME-M3-02",
  ],
};

function log(...parts) {
  const line = `[${new Date().toISOString()}] ${parts.join(" ")}`;
  console.log(line);
  fs.appendFileSync(LOG, line + "\n");
}

function hasPack(id, { needVideo = true } = {}) {
  const d = path.join(MEDIA, id);
  if (!fs.existsSync(d)) return false;
  const f = fs.readdirSync(d);
  const audio = f.some((x) => /audio|nlm_audio/.test(x) && /\.(m4a|mp3)$/i.test(x));
  const slides = f.some((x) => /slides\.pdf|nlm_slides/.test(x));
  const video = ["nlm_video.mp4", "video.mp4", "video_nlm.mp4"].some((n) => {
    const p = path.join(d, n);
    return fs.existsSync(p) && fs.statSync(p).size > 2_000_000;
  });
  if (needVideo) return audio && slides && video;
  return audio && slides;
}

function resolveIds() {
  if (flags.has("--from-file")) {
    const i = args.indexOf("--from-file");
    const file = args[i + 1];
    return fs
      .readFileSync(file, "utf8")
      .split(/\s+/)
      .map((s) => s.trim())
      .filter(Boolean);
  }
  if (flags.has("--wave")) {
    const i = args.indexOf("--wave");
    const name = args[i + 1];
    if (!WAVES[name]) throw new Error(`unknown wave: ${name}`);
    return WAVES[name];
  }
  if (positional.length) return positional;
  return WAVES["foundation-next"];
}

function factoryArgs() {
  const a = [];
  if (flags.has("--video-only")) a.push("--video-only");
  if (flags.has("--audio-only")) a.push("--audio-only");
  if (flags.has("--no-research") || !flags.has("--research")) a.push("--no-research");
  if (flags.has("--reuse-sources")) a.push("--reuse-sources");
  if (flags.has("--download-only")) a.push("--download-only");
  return a;
}

function runOne(id) {
  return new Promise((resolve) => {
    const fa = factoryArgs();
    log("START", id, `parallel=${parallel}`, fa.join(" "));
    const child = spawn("node", [FACTORY, id, ...fa], {
      cwd: ROOT,
      env: {
        ...process.env,
        NLM_VIDEO_FORMAT: process.env.NLM_VIDEO_FORMAT || "explainer",
        NLM_VIDEO_STYLE: process.env.NLM_VIDEO_STYLE || "whiteboard",
        NLM_UNIT_COOLDOWN_SECONDS: process.env.NLM_UNIT_COOLDOWN_SECONDS || "8",
        // 動画を飛ばさない（フル量産）
        NLM_SKIP_VIDEO: process.env.NLM_SKIP_VIDEO || "0",
      },
      stdio: ["ignore", "pipe", "pipe"],
    });
    let out = "";
    const onData = (buf) => {
      const t = buf.toString();
      out += t;
      process.stdout.write(t);
      fs.appendFileSync(LOG, t);
    };
    child.stdout.on("data", onData);
    child.stderr.on("data", onData);
    child.on("close", (code) => {
      const limited = /rate limit|RESOURCE_EXHAUSTED|Rate limited|quota/i.test(out);
      const videoOnly = flags.has("--video-only");
      const ok = videoOnly ? hasPack(id, { needVideo: true }) : hasPack(id, { needVideo: true }) || hasPack(id, { needVideo: false });
      log("END", id, `code=${code}`, ok ? "pack_ok" : "pack_incomplete", limited ? "RATE_LIMIT" : "");
      resolve({ id, code, ok, limited });
    });
  });
}

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

async function runPool(jobs) {
  let cursor = 0;
  let active = 0;
  let rateHits = 0;
  const results = [];
  const baseParallel = parallel;

  return new Promise((resolve) => {
    const kick = () => {
      while (active < parallel && cursor < jobs.length) {
        const id = jobs[cursor++];
        active++;
        const start = async () => {
          if (STAGGER_MS > 0 && active > 1) await sleep(STAGGER_MS);
          const res = await runOne(id);
          results.push(res);
          active--;
          if (res.limited) {
            rateHits++;
            const prev = parallel;
            parallel = 1;
            log("RATE_LIMIT → parallel", prev, "-> 1, cooldown", COOLDOWN_ON_LIMIT_MS);
            await sleep(COOLDOWN_ON_LIMIT_MS);
            if (rateHits < 4) {
              parallel = Math.max(1, Math.min(baseParallel, 2));
              log("parallel partial restore", parallel);
            }
          }
          if (cursor >= jobs.length && active === 0) resolve(results);
          else kick();
        };
        start();
      }
      if (jobs.length === 0) resolve(results);
    };
    kick();
  });
}

async function main() {
  fs.writeFileSync(LOG, `media parallel ${new Date().toISOString()}\n`);
  const all = resolveIds();
  const skipComplete = !flags.has("--force");
  const jobs = skipComplete
    ? all.filter((id) => !hasPack(id, { needVideo: !flags.has("--audio-slides-only") }))
    : all;

  log(
    "queue",
    JSON.stringify({
      parallel,
      staggerMs: STAGGER_MS,
      factoryArgs: factoryArgs(),
      total: all.length,
      jobs: jobs.length,
      jobIds: jobs,
    }),
  );

  if (!jobs.length) {
    log("nothing to do");
    return;
  }

  const results = await runPool(jobs);
  log("MEDIA_QUEUE_DONE");
  for (const id of all) {
    log("status", id, hasPack(id) ? "FULL_OK" : hasPack(id, { needVideo: false }) ? "NO_VIDEO" : "THIN");
  }
  const ok = results.filter((r) => r.ok).length;
  const lim = results.filter((r) => r.limited).length;
  log(`summary ok=${ok}/${results.length} rate_hits=${lim}`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
