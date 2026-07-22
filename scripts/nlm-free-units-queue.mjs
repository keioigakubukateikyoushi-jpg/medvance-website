#!/usr/bin/env node
/**
 * 無料ユニットから順に NotebookLM 教材（音声・動画・スライド・クイズ）を生成。
 *
 * Usage:
 *   node scripts/nlm-free-units-queue.mjs
 *   node scripts/nlm-free-units-queue.mjs --download-only
 *   node scripts/nlm-free-units-queue.mjs --no-research
 *   node scripts/nlm-free-units-queue.mjs --skip-video   # 音声+スライド+クイズのみ
 */
import { spawnSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const MEDIA = path.join(ROOT, "public/academy/media");
const FACTORY = path.join(ROOT, "scripts/nlm-unit-factory.mjs");

const FREE = [
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
  // ME-M1-01 は既にフル NLM がある想定（欠けていれば再実行）
  "ME-M1-01",
];

const args = process.argv.slice(2);
const downloadOnly = args.includes("--download-only");
const noResearch = args.includes("--no-research") || !downloadOnly;
const skipVideo = args.includes("--skip-video");

function hasNlmPack(id) {
  const dir = path.join(MEDIA, id);
  if (!fs.existsSync(dir)) return false;
  const files = fs.readdirSync(dir);
  const audio = files.some((f) => /audio|nlm_audio/.test(f) && /\.(m4a|mp3)$/i.test(f));
  const slides = files.some((f) => /slides\.pdf|nlm_slides/.test(f));
  // 動画は rate limit で欠けることがあるので、音声+スライドで「最低限完了」とみなす
  return audio && slides;
}

function run(id) {
  const extra = [];
  if (downloadOnly) extra.push("--download-only");
  if (noResearch && !downloadOnly) extra.push("--no-research");
  const env = { ...process.env, NLM_RESEARCH_MODE: process.env.NLM_RESEARCH_MODE || "fast" };
  if (skipVideo) env.NLM_SKIP_VIDEO = "1";
  console.log("\n#### QUEUE", id, extra.join(" "), "####");
  const r = spawnSync("node", [FACTORY, id, ...extra], {
    cwd: ROOT,
    env,
    encoding: "utf8",
    stdio: "inherit",
    timeout: 0,
  });
  return r.status === 0;
}

function main() {
  console.log("free queue start", { downloadOnly, noResearch, skipVideo });
  for (const id of FREE) {
    if (!downloadOnly && hasNlmPack(id)) {
      console.log("skip (already has audio+slides):", id);
      continue;
    }
    try {
      run(id);
    } catch (e) {
      console.error("queue fail", id, e.message);
    }
    // ユニット間クールダウン
    if (!downloadOnly) {
      console.log("cooldown 3 min…");
      spawnSync("sleep", ["180"]);
    }
  }
  console.log("queue finished");
  for (const id of FREE) {
    console.log(id, hasNlmPack(id) ? "OK pack" : "incomplete", path.join(MEDIA, id));
  }
}

main();
