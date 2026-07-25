#!/usr/bin/env node
/**
 * 単元に YouTube URL を紐づける（サイト埋め込み用）
 *
 * Usage:
 *   node scripts/set-media-youtube.mjs ME-PH-02 https://youtu.be/XXXXXXXXXXX
 *   node scripts/set-media-youtube.mjs ME-PH-02 https://www.youtube.com/watch?v=XXXXXXXXXXX
 *   node scripts/set-media-youtube.mjs ME-PH-02 --clear
 *
 * 書き込み先:
 *   - content/academy/media-youtube.json（本番でも読める正本）
 *   - public/academy/media/<id>/manifest.json の public_urls（あれば同期）
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const REG = path.join(ROOT, "content/academy/media-youtube.json");
const MEDIA = path.join(ROOT, "public/academy/media");

const args = process.argv.slice(2);
const unitId = args[0];
const clear = args.includes("--clear");
const url = args.find((a, i) => i > 0 && !a.startsWith("--"));

if (!unitId) {
  console.error("Usage: node scripts/set-media-youtube.mjs <UNIT_ID> <youtube-url|--clear>");
  process.exit(1);
}

function load() {
  if (!fs.existsSync(REG)) return { version: 1, updated: null, units: {} };
  return JSON.parse(fs.readFileSync(REG, "utf8"));
}

const data = load();
data.units = data.units || {};

if (clear) {
  delete data.units[unitId];
  console.log("cleared", unitId);
} else {
  if (!url) {
    console.error("URL required (or --clear)");
    process.exit(1);
  }
  data.units[unitId] = {
    ...(data.units[unitId] || {}),
    video: url.trim(),
  };
  console.log("set", unitId, "→", url.trim());
}

data.updated = new Date().toISOString();
fs.writeFileSync(REG, JSON.stringify(data, null, 2) + "\n");
console.log("wrote", REG);

// manifest 同期（ディレクトリがあるとき）
const manPath = path.join(MEDIA, unitId, "manifest.json");
if (fs.existsSync(manPath)) {
  try {
    const man = JSON.parse(fs.readFileSync(manPath, "utf8"));
    man.public_urls = man.public_urls || {};
    if (clear) {
      delete man.public_urls.video;
      delete man.public_urls.lecture_video;
    } else {
      man.public_urls.video = url.trim();
      man.public_urls.lecture_video = url.trim();
    }
    man.updated_at = new Date().toISOString();
    fs.writeFileSync(manPath, JSON.stringify(man, null, 2) + "\n");
    console.log("synced", manPath);
  } catch (e) {
    console.warn("manifest sync failed", e.message);
  }
}
