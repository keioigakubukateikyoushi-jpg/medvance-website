#!/usr/bin/env node
/**
 * 教材品質ゲート — 「売れるレベル」を機械判定する。
 *
 * Usage:
 *   node scripts/quality-gate.mjs              全単元のサマリ
 *   node scripts/quality-gate.mjs --detail     不合格の理由を単元ごとに表示
 *   node scripts/quality-gate.mjs ME-PH-01     指定単元だけ詳細表示
 *   node scripts/quality-gate.mjs --subject physics-exam
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const CONTENT = path.join(__dirname, "..", "content", "academy");

/** 売り物として満たすべき最低条件 */
export const STANDARD = {
  minBodyChars: 3000, // 本文の実質文字数（メタ行を除く）
  minWorkedExamples: 2, // 手順を追った解答つき例題
  minPracticeProblems: 3, // 自力演習（解答つき）
  minTraps: 3, // 落とし穴
  minQuizQuestions: 5,
  requiredSections: [
    "今日のゴール",
    "受験での位置づけ",
    "この回のポイント",
    "定義・用語",
    "核となる手順",
    "落とし穴",
    "到達チェック",
  ],
};

/** 全単元で使い回されている水増し定型文 */
const BOILERPLATE = [
  "ここが曖昧だと模試で同じ失点をくり返す",
  "医学部・難関大では用語の定義と手順の再現がそのまま得点になる",
  "条件を確認し、同じ手順で再現できるか検算する",
  "学科で差がつかない局面ほど、面接・小論文が合否を分ける",
  "共通テストは時間との勝負であり、根拠を本文・資料から拾えるかが得点に直結する",
];

/** 生成崩れの痕跡 */
const ARTIFACTS = [
  { re: /^- MEDVANCE .*## /m, name: "ヘッダ潰れ（##が本文化）" },
  { re: /^- の流れ/m, name: "「- の流れ」残留" },
  { re: /^- - /m, name: "二重箇条書き" },
  { re: /^\d+\. - /m, name: "番号崩れ" },
  { re: /要点:/, name: "解答が1行スタブ" },
  { re: /实/, name: "簡体字混入" },
  { re: /[a-zA-Z]{4,}/, name: null }, // 判定はしない（英単語は正当なので）
];

function readJson(p) {
  return JSON.parse(fs.readFileSync(p, "utf8"));
}

function subjectIds() {
  return readJson(path.join(CONTENT, "catalog.json")).subjects.map((s) => s.id);
}

/** 本文の実質文字数（メタ行・空行・区切りを除く） */
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

/** 「### 解答」直後に実質的な手順が何行あるか */
function solutionDepth(md, headingRe) {
  const lines = md.split("\n");
  const out = [];
  for (let i = 0; i < lines.length; i++) {
    if (!headingRe.test(lines[i])) continue;
    let steps = 0;
    for (let j = i + 1; j < lines.length && !/^#{2,3}\s/.test(lines[j]); j++) {
      const t = lines[j].trim();
      if (!t) continue;
      // 「要点: 〜」「条件を確認し〜」のような中身のない行は数えない
      if (/^-?\s*要点:/.test(t)) continue;
      if (t.includes("条件を確認し、同じ手順で再現できるか検算する")) continue;
      if (t.length < 6) continue;
      steps++;
    }
    out.push(steps);
  }
  return out;
}

function auditUnit(subjectId, unit) {
  const mdPath = path.join(CONTENT, subjectId, unit.file);
  if (!fs.existsSync(mdPath)) {
    return { id: unit.id, subjectId, fail: ["本文ファイルなし"], chars: 0 };
  }
  const md = fs.readFileSync(mdPath, "utf8");
  const fail = [];

  const chars = bodyChars(md);
  if (chars < STANDARD.minBodyChars) {
    fail.push(`本文${chars}字（基準${STANDARD.minBodyChars}字）`);
  }

  // 解答つき例題：### 解答A / 解答B のように手順が3行以上あるもの
  const exampleDepths = solutionDepth(md, /^###\s*解答[AB]?\s*$|^###\s*解答の流れ/);
  const worked = exampleDepths.filter((d) => d >= 3).length;
  if (worked < STANDARD.minWorkedExamples) {
    fail.push(`解答つき例題${worked}件（基準${STANDARD.minWorkedExamples}件）`);
  }

  // 演習の小問数：演習セクション内の (1)(2)... または箇条書き
  const exSec = md.match(/^##\s*演習[^\n]*\n([\s\S]*?)(?=^##\s)/m);
  let practice = 0;
  if (exSec) {
    const nums = exSec[1].match(/\$\((\d)\)\$|^\s*\((\d)\)/gm);
    practice = nums ? new Set(nums).size : 0;
    if (!practice && exSec[1].trim().length > 80) practice = 1;
  }
  if (practice < STANDARD.minPracticeProblems) {
    fail.push(`演習小問${practice}問（基準${STANDARD.minPracticeProblems}問）`);
  }

  const trapSec = md.match(/^##\s*落とし穴[^\n]*\n([\s\S]*?)(?=^##\s|\Z)/m);
  const traps = trapSec ? (trapSec[1].match(/^-\s+\S/gm) || []).length : 0;
  if (traps < STANDARD.minTraps) fail.push(`落とし穴${traps}件（基準${STANDARD.minTraps}件）`);

  for (const sec of STANDARD.requiredSections) {
    if (!md.includes(sec)) fail.push(`欠落: ${sec}`);
  }

  const bp = BOILERPLATE.filter((b) => md.includes(b));
  if (bp.length) fail.push(`使い回し定型文${bp.length}件`);

  for (const a of ARTIFACTS) {
    if (a.name && a.re.test(md)) fail.push(`生成崩れ: ${a.name}`);
  }

  // クイズ
  if (unit.quiz) {
    const qp = path.join(CONTENT, subjectId, unit.quiz);
    if (fs.existsSync(qp)) {
      const q = readJson(qp);
      const n = (q.questions || []).length;
      if (n < STANDARD.minQuizQuestions) fail.push(`クイズ${n}問`);
      const templated = (q.questions || []).filter((x) =>
        /今日のゴールを書け|中心用語・定義の要点は|手順の第1手は|この回のポイントを1つ書け/.test(
          x.prompt || "",
        ),
      ).length;
      if (templated) fail.push(`クイズが見出しの写経${templated}問`);
    } else {
      fail.push("クイズファイルなし");
    }
  } else {
    fail.push("クイズ未設定");
  }

  return { id: unit.id, subjectId, title: unit.title, fail, chars, worked, practice, traps };
}

function auditAll() {
  const rows = [];
  for (const sid of subjectIds()) {
    const idx = readJson(path.join(CONTENT, sid, "index.json"));
    for (const u of idx.units) rows.push(auditUnit(sid, u));
  }
  return rows;
}

// ---- CLI ----
const args = process.argv.slice(2);
const rows = auditAll();
const pass = rows.filter((r) => !r.fail.length);

if (args.includes("--subject")) {
  const sid = args[args.indexOf("--subject") + 1];
  const sub = rows.filter((r) => r.subjectId === sid);
  for (const r of sub) {
    const mark = r.fail.length ? "✗" : "✓";
    console.log(`${mark} ${r.id} ${r.chars}字 例題${r.worked} 演習${r.practice}`);
    if (r.fail.length && args.includes("--detail")) {
      for (const f of r.fail) console.log(`    - ${f}`);
    }
  }
  console.log(`\n${sid}: 合格 ${sub.filter((r) => !r.fail.length).length} / ${sub.length}`);
} else if (args.some((a) => /^(ME|ADV|ELI)-/.test(a))) {
  for (const id of args.filter((a) => /^(ME|ADV|ELI)-/.test(a))) {
    const r = rows.find((x) => x.id === id);
    if (!r) { console.log(`${id}: 見つかりません`); continue; }
    console.log(`${r.fail.length ? "✗" : "✓"} ${r.id} ${r.title}`);
    console.log(`   本文${r.chars}字 / 解答つき例題${r.worked} / 演習${r.practice}問 / 落とし穴${r.traps}`);
    for (const f of r.fail) console.log(`   - ${f}`);
  }
} else {
  const bySubject = {};
  for (const r of rows) {
    bySubject[r.subjectId] ??= { n: 0, ok: 0, chars: 0 };
    bySubject[r.subjectId].n++;
    bySubject[r.subjectId].chars += r.chars;
    if (!r.fail.length) bySubject[r.subjectId].ok++;
  }
  console.log("科目".padEnd(24) + "合格/総数   平均字数");
  console.log("-".repeat(50));
  for (const [sid, v] of Object.entries(bySubject)) {
    const avg = Math.round(v.chars / v.n);
    console.log(`${sid.padEnd(24)}${String(v.ok).padStart(4)}/${String(v.n).padEnd(4)}${String(avg).padStart(8)}字`);
  }
  console.log("-".repeat(50));
  console.log(`合計: 合格 ${pass.length} / ${rows.length}　平均 ${Math.round(rows.reduce((a, r) => a + r.chars, 0) / rows.length)}字`);
  if (args.includes("--detail")) {
    const reasons = {};
    for (const r of rows) for (const f of r.fail) {
      const key = f.replace(/\d+/g, "N");
      reasons[key] = (reasons[key] || 0) + 1;
    }
    console.log("\n不合格理由の内訳:");
    for (const [k, v] of Object.entries(reasons).sort((a, b) => b[1] - a[1])) {
      console.log(`  ${String(v).padStart(4)}件  ${k}`);
    }
  }
}
