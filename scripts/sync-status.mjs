#!/usr/bin/env node
/**
 * quality-gate の判定結果を index.json / catalog.json の status に反映する。
 * 合格 → status:"full" / quality:"reviewed-v2"、不合格 → status:"outline" / quality:"draft"。
 *
 * Usage: node scripts/sync-status.mjs
 */
import fs from "node:fs";
import path from "node:path";
import { execFileSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");
const CONTENT = path.join(ROOT, "content", "academy");

const readJson = (p) => JSON.parse(fs.readFileSync(p, "utf8"));
const writeJson = (p, o) =>
  fs.writeFileSync(p, JSON.stringify(o, null, 2) + "\n", "utf8");

// quality-gate を各科目ごとに実行し、合格した単元IDを集める
const catalog = readJson(path.join(CONTENT, "catalog.json"));
const passing = new Set();
for (const s of catalog.subjects) {
  const out = execFileSync(
    "node",
    [path.join(__dirname, "quality-gate.mjs"), "--subject", s.id],
    { encoding: "utf8" },
  );
  for (const line of out.split("\n")) {
    const m = line.match(/^✓ ((?:ME|ADV|ELI)-[A-Z0-9-]+)/);
    if (m) passing.add(m[1]);
  }
}

/** goal はヘッダとmeta descriptionに素のテキストで出るので、数式記法を平文に落とす */
function plainGoal(s) {
  return s
    .replace(/\$([^$]*)\$/g, (_, inner) =>
      inner
        .replace(/\\text\{([^}]*)\}/g, "$1")
        .replace(/\\mathrm\{([^}]*)\}/g, "$1")
        .replace(/\\,|\\;|\\ /g, " ")
        .replace(/[\\{}]/g, "")
        .trim(),
    )
    .replace(/\s+/g, " ")
    .trim();
}

const counts = {};
for (const s of catalog.subjects) {
  const p = path.join(CONTENT, s.id, "index.json");
  const idx = readJson(p);
  let full = 0;
  let outline = 0;
  for (const u of idx.units) {
    if (passing.has(u.id)) {
      // 本文の「## 今日のゴール」を正本として index.json に同期する
      const md = fs.readFileSync(path.join(CONTENT, s.id, u.file), "utf8");
      const m = md.match(/^## 今日のゴール\n(.+)$/m);
      if (m) {
        const g = plainGoal(m[1]);
        if (g && g !== u.goal) u.goal = g;
      }
      u.status = "full";
      u.quality = "reviewed-v2";
      full++;
    } else {
      u.status = "outline";
      u.quality = "draft";
      outline++;
    }
  }
  idx.unit_count = idx.units.length;
  idx.full_count = full;
  idx.outline_count = outline;
  idx.completeness = full
    ? `品質基準に合格した ${full} 単元を公開中。残り ${outline} 単元は内容を拡充中。`
    : `全 ${outline} 単元は骨子のみ。内容を拡充中。`;
  writeJson(p, idx);
  counts[s.id] = [full, outline];
}

for (const holder of [catalog.subjects, ...catalog.tracks.map((t) => t.subjects)]) {
  for (const s of holder) {
    const [f, o] = counts[s.id];
    s.full_count = f;
    s.outline_count = o;
  }
}
const totalFull = Object.values(counts).reduce((a, [f]) => a + f, 0);
const totalAll = Object.values(counts).reduce((a, [f, o]) => a + f + o, 0);
catalog.totals.all_units = totalAll;
catalog.totals.all_full = totalFull;
catalog.totals.all_outline = totalAll - totalFull;
writeJson(path.join(CONTENT, "catalog.json"), catalog);

console.log(`品質基準に合格: ${totalFull} / ${totalAll} 単元`);
for (const [sid, [f, o]] of Object.entries(counts)) {
  if (f) console.log(`  ${sid}: full ${f} / outline ${o}`);
}
