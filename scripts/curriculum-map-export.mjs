#!/usr/bin/env node
/**
 * 科目カリキュラムの現状マップを Markdown / JSON に出力する。
 *
 * Usage:
 *   node scripts/curriculum-map-export.mjs --subject math1-exam
 *   node scripts/curriculum-map-export.mjs --all
 *   node scripts/curriculum-map-export.mjs --subject math1-exam --json
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const CONTENT = path.join(ROOT, "content/academy");
const OUT_DIR = path.join(ROOT, "docs/curriculum/maps");

const args = process.argv.slice(2);
const asJson = args.includes("--json");
const all = args.includes("--all");
const subjectIdx = args.indexOf("--subject");
const onlySubject = subjectIdx >= 0 ? args[subjectIdx + 1] : null;

function bodyChars(md) {
  return md
    .split("\n")
    .filter(
      (l) =>
        l.trim() &&
        !/^-\s*(ブランド|講座|科目|章|目安|前提|次):/.test(l.trim()) &&
        !/^#\s/.test(l) &&
        !/^-{3,}$/.test(l.trim()) &&
        !/^©/.test(l.trim()),
    )
    .join("")
    .replace(/\s/g, "").length;
}

function listSubjectDirs() {
  const dirs = [];
  for (const ent of fs.readdirSync(CONTENT, { withFileTypes: true })) {
    if (!ent.isDirectory()) continue;
    if (ent.name.startsWith(".") || ent.name === "premium") continue;
    const idx = path.join(CONTENT, ent.name, "index.json");
    if (fs.existsSync(idx)) dirs.push(ent.name);
    // advanced / elite nested
    const nested = path.join(CONTENT, ent.name);
    if (["advanced", "elite"].includes(ent.name)) {
      for (const sub of fs.readdirSync(nested, { withFileTypes: true })) {
        if (!sub.isDirectory()) continue;
        const p = path.join(nested, sub.name, "index.json");
        if (fs.existsSync(p)) dirs.push(`${ent.name}/${sub.name}`);
      }
    }
  }
  return dirs.sort();
}

function loadSubject(subjectId) {
  const idxPath = path.join(CONTENT, subjectId, "index.json");
  if (!fs.existsSync(idxPath)) throw new Error(`no index: ${subjectId}`);
  return JSON.parse(fs.readFileSync(idxPath, "utf8"));
}

function unitRow(subjectId, unit, allIds) {
  const lessonPath = path.join(CONTENT, subjectId, unit.file || `lessons/${unit.id}.md`);
  let chars = 0;
  if (fs.existsSync(lessonPath)) {
    chars = bodyChars(fs.readFileSync(lessonPath, "utf8"));
  }
  const prereq = unit.prereq || [];
  const missingPrereq = prereq.filter((p) => !allIds.has(p));
  const storyOk = unit.storyboard
    ? fs.existsSync(path.join(CONTENT, subjectId, unit.storyboard))
    : false;
  const quizOk = unit.quiz
    ? fs.existsSync(path.join(CONTENT, subjectId, unit.quiz))
    : false;
  return {
    id: unit.id,
    chapter: unit.chapter || "",
    title: unit.title || "",
    minutes: unit.minutes || null,
    goal: unit.goal || "",
    prereq,
    missingPrereq,
    status: unit.status || "unknown",
    quality: unit.quality || "",
    chars,
    storyOk,
    quizOk,
    gateHint: chars >= 3000 ? "maybe" : "fail-chars",
  };
}

function detectCycles(units) {
  const graph = new Map(units.map((u) => [u.id, u.prereq || []]));
  const cycles = [];
  const visiting = new Set();
  const visited = new Set();
  function dfs(n, stack) {
    if (visiting.has(n)) {
      cycles.push([...stack, n]);
      return;
    }
    if (visited.has(n)) return;
    visiting.add(n);
    for (const p of graph.get(n) || []) {
      if (graph.has(p)) dfs(p, [...stack, n]);
    }
    visiting.delete(n);
    visited.add(n);
  }
  for (const id of graph.keys()) dfs(id, []);
  return cycles;
}

function exportSubject(subjectId) {
  const idx = loadSubject(subjectId);
  const units = idx.units || [];
  const allIds = new Set(units.map((u) => u.id));
  const rows = units.map((u) => unitRow(subjectId, u, allIds));
  const cycles = detectCycles(units);
  const byChapter = new Map();
  for (const r of rows) {
    if (!byChapter.has(r.chapter)) byChapter.set(r.chapter, []);
    byChapter.get(r.chapter).push(r);
  }

  const payload = {
    subjectId,
    subject: idx.subject,
    chapters: idx.chapters || [...byChapter.keys()],
    unit_count: units.length,
    full_count: rows.filter((r) => r.status === "full").length,
    outline_count: rows.filter((r) => r.status === "outline").length,
    mean_chars: rows.length
      ? Math.round(rows.reduce((s, r) => s + r.chars, 0) / rows.length)
      : 0,
    cycles,
    units: rows,
  };

  fs.mkdirSync(OUT_DIR, { recursive: true });
  const safe = subjectId.replace(/\//g, "__");
  if (asJson) {
    const p = path.join(OUT_DIR, `${safe}.json`);
    fs.writeFileSync(p, JSON.stringify(payload, null, 2) + "\n");
    console.log("wrote", p);
  } else {
    const lines = [];
    lines.push(`# Map: ${idx.subject || subjectId}`);
    lines.push("");
    lines.push(`- subjectId: \`${subjectId}\``);
    lines.push(`- units: ${payload.unit_count} (full ${payload.full_count} / outline ${payload.outline_count})`);
    lines.push(`- mean body chars: ${payload.mean_chars}`);
    lines.push(`- prereq cycles: ${cycles.length ? cycles.length : "none"}`);
    lines.push("");
    lines.push("## 章一覧");
    lines.push("");
    for (const ch of payload.chapters) {
      const list = byChapter.get(ch) || [];
      lines.push(`### ${ch || "（未分類）"} (${list.length})`);
      lines.push("");
      lines.push("| ID | タイトル | 分 | status | 字数 | prereq | gate |");
      lines.push("|---|---|---:|---|---:|---|---|");
      for (const r of list) {
        lines.push(
          `| ${r.id} | ${r.title.replace(/\|/g, "/")} | ${r.minutes ?? ""} | ${r.status} | ${r.chars} | ${(r.prereq || []).join(", ") || "—"} | ${r.gateHint} |`,
        );
      }
      lines.push("");
    }
    lines.push("## ゴール一覧（設計用）");
    lines.push("");
    for (const r of rows) {
      lines.push(`- **${r.id}** (${r.chapter}): ${r.goal || "（goal未設定）"}`);
    }
    lines.push("");
    lines.push(`生成: curriculum-map-export · ${new Date().toISOString()}`);
    const p = path.join(OUT_DIR, `${safe}.md`);
    fs.writeFileSync(p, lines.join("\n") + "\n");
    console.log("wrote", p);
  }
  return payload;
}

function main() {
  let subjects = [];
  if (all) subjects = listSubjectDirs();
  else if (onlySubject) subjects = [onlySubject];
  else {
    console.error("Usage: --subject <id> | --all  [--json]");
    process.exit(1);
  }
  for (const s of subjects) {
    try {
      exportSubject(s);
    } catch (e) {
      console.error("FAIL", s, e.message);
    }
  }
}

main();
