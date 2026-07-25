#!/usr/bin/env node
/**
 * 高品質動画キュー — 並列生成（日次上限近くまで）
 *
 * 方針:
 *  - デフォルト並列度 3（NLM_PARALLEL で変更）
 *  - 起動は数秒ずらす（同時 RPC の瞬時バーストを避ける）
 *  - rate limit を検知したら並列度を 1 に落とし、クールダウン
 *  - 上限付近でなければ長い 4 分待ちはしない
 *
 * Usage:
 *   node scripts/nlm-video-quality-queue.mjs
 *   NLM_PARALLEL=4 node scripts/nlm-video-quality-queue.mjs
 *   node scripts/nlm-video-quality-queue.mjs --force ME-EN-01 ME-CH-01
 */
import { spawn } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const MEDIA = path.join(ROOT, "public/academy/media");
const FACTORY = path.join(ROOT, "scripts/nlm-unit-factory.mjs");
const LOG = process.env.NLM_VIDEO_LOG || "/tmp/nlm-video-hq-parallel.log";

const DEFAULT_FREE = [
  "ME-EN-01",
  "ME-CH-01",
  "ME-BI-01",
  "ME-IV-01",
  "ME-ES-01",
  "ME-JA-01",
  "ME-SO-01",
  "ME-IF-01",
  "ADV-M1-06",
  // 既存の大動画は --force で再生成
  "ME-PH-01",
  "ME-M1-01",
];

const args = process.argv.slice(2);
const force = args.includes("--force");
const ids = args.filter((a) => !a.startsWith("--"));
const queueAll = ids.length ? ids : DEFAULT_FREE;

let parallel = Math.max(1, parseInt(process.env.NLM_PARALLEL || "3", 10) || 3);
const STAGGER_MS = Math.max(0, parseInt(process.env.NLM_STAGGER_MS || "6000", 10) || 6000);
const COOLDOWN_ON_LIMIT_MS = Math.max(
  60_000,
  parseInt(process.env.NLM_LIMIT_COOLDOWN_MS || "180000", 10) || 180_000,
);

function log(...parts) {
  const line = `[${new Date().toISOString()}] ${parts.join(" ")}`;
  console.log(line);
  fs.appendFileSync(LOG, line + "\n");
}

function hasGoodVideo(id) {
  const dir = path.join(MEDIA, id);
  for (const name of ["nlm_video.mp4", "video.mp4", "video_nlm.mp4"]) {
    const p = path.join(dir, name);
    if (fs.existsSync(p) && fs.statSync(p).size > 2_000_000) return true;
  }
  return false;
}

function runOne(id) {
  return new Promise((resolve) => {
    log("START", id, `parallel=${parallel}`);
    const child = spawn(
      "node",
      [FACTORY, id, "--video-only", "--no-research", "--reuse-sources"],
      {
        cwd: ROOT,
        env: {
          ...process.env,
          NLM_VIDEO_FORMAT: process.env.NLM_VIDEO_FORMAT || "explainer",
          NLM_VIDEO_STYLE: process.env.NLM_VIDEO_STYLE || "whiteboard",
          // 並列時はユニット間の工場内 sleep を短く
          NLM_UNIT_COOLDOWN_SECONDS: process.env.NLM_UNIT_COOLDOWN_SECONDS || "10",
        },
        stdio: ["ignore", "pipe", "pipe"],
      },
    );

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
      const ok = code === 0 && hasGoodVideo(id);
      const hardLimitHint =
        /\bRESOURCE_EXHAUSTED\b/.test(out) ||
        /\brate[\s_-]*limit(?:ed|ing)?\b/i.test(out) ||
        /\btoo\s+many\s+requests\b/i.test(out) ||
        /\b(?:http[\s_-]*)?(?:status|error|code)[:\s#=]*429\b/i.test(out) ||
        /\bquota\s*(?:exceeded|exhausted|limit|reached|hit)\b/i.test(out);
      const limited = !ok && hardLimitHint;
      log("END", id, `code=${code}`, ok ? "video_ok" : "video_missing", limited ? "RATE_LIMIT" : !ok ? "FAIL" : "");
      resolve({ id, code, ok, limited, out });
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

  return new Promise((resolve) => {
    const kick = async () => {
      while (active < parallel && cursor < jobs.length) {
        const id = jobs[cursor++];
        active++;
        // 起動をずらす
        if (STAGGER_MS > 0 && active > 1) await sleep(STAGGER_MS);

        runOne(id).then(async (res) => {
          results.push(res);
          active--;
          if (res.limited) {
            rateHits++;
            const prev = parallel;
            parallel = 1;
            log("RATE_LIMIT hit → parallel", prev, "->", parallel, "cooldown", COOLDOWN_ON_LIMIT_MS, "ms");
            await sleep(COOLDOWN_ON_LIMIT_MS);
            // 少し回復したら並列を戻す（上限近くまでは上げる）
            if (rateHits < 3) {
              parallel = Math.min(3, Math.max(1, parseInt(process.env.NLM_PARALLEL || "3", 10) || 3));
              log("parallel restored to", parallel);
            } else {
              log("staying at parallel=1 (multiple rate limits)");
            }
          }
          if (cursor >= jobs.length && active === 0) {
            resolve(results);
          } else {
            kick();
          }
        });
      }
      if (jobs.length === 0) resolve(results);
    };
    kick();
  });
}

async function main() {
  fs.writeFileSync(LOG, `video parallel queue ${new Date().toISOString()}\n`);
  const jobs = queueAll.filter((id) => force || !hasGoodVideo(id));
  log("queue", JSON.stringify({ force, parallel, staggerMs: STAGGER_MS, jobs }));

  if (!jobs.length) {
    log("nothing to do");
    return;
  }

  const results = await runPool(jobs);
  log("VIDEO_QUEUE_DONE");
  for (const id of queueAll) {
    log("status", id, hasGoodVideo(id) ? "video_OK" : "video_MISSING");
  }
  const ok = results.filter((r) => r.ok).length;
  const lim = results.filter((r) => r.limited).length;
  log(`summary ok=${ok}/${results.length} rate_limit_events≈${lim}`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
