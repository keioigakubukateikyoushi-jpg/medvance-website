// 英語のEyebrowラベル（SaaS/AI的）を、日本語にするか削除する。
import fs from "node:fs/promises";
const TARGETS = [
  // [英語ラベル, 日本語 or null (削除)]
  ["Why Medvance", null], // 下のH2で十分
  ["Ideal For", "こんな受験生へ"],
  ["Free Consultation", "無料相談"],
  ["Popular Topics", "よくある検索"],
  ["Decision Support", null],
  ["Comparison", null],
  ["Tutors", null],
  ["Features", null],
  ["Coaching & Support", null],
  ["Nationwide Online", null],
  ["Flow", null],
  ["Pricing", null],
  ["Column", null],
  ["Recommended", null],
  ["Site Search", "記事を検索"],
  ["Tutor Recruitment", "講師募集"],
  ["Highlights", null],
  ["Related Columns", null],
  ["Search Intent Hubs", "よくあるテーマから探す"],
  ["Search", "検索"],
  ["Strategy Design", null],
  ["National University Guide", "国公立医学部ガイド"],
  ["24h Support", "24時間サポート"],
];

const FILES_GLOBS = [
  "src/app/page.tsx",
  "src/app/column/page.tsx",
  "src/components/RelatedColumns.tsx",
  "src/app/for/ko1/page.tsx",
  "src/app/for/ko2/page.tsx",
  "src/app/for/ko3/page.tsx",
  "src/app/for/ronin/page.tsx",
  "src/app/for/saijuken/page.tsx",
  "src/app/for/suisen-ao/page.tsx",
  "src/app/for/seiseki-up/page.tsx",
  "src/app/for/parents/page.tsx",
  "src/app/for/chugaku/page.tsx",
  "src/app/for/keio-fuzoku/page.tsx",
  "src/app/for/keio-naibu/page.tsx",
  "src/app/for/nangandai/page.tsx",
  "src/app/pricing/page.tsx",
  "src/app/about/page.tsx",
  "src/app/contact/page.tsx",
  "src/app/line/page.tsx",
  "src/app/services/page.tsx",
];

// Eyebrow <p>要素のマッチ: <p className="...uppercase..." style={{ color: "..." }}>\n  LABEL\n</p>
function makeRegex(label) {
  // ラベル内の特殊文字をエスケープ
  const esc = label.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  // 柔軟: ラベル前後の空白を許容
  return new RegExp(
    `<p([^>]*tracking-widest uppercase[^>]*)>\\s*${esc}\\s*</p>`,
    "g",
  );
}

async function processFile(file) {
  let src;
  try { src = await fs.readFile(file, "utf8"); } catch { return 0; }
  let changes = 0;
  let out = src;
  for (const [label, replacement] of TARGETS) {
    const re = makeRegex(label);
    out = out.replace(re, (match, attrs) => {
      changes++;
      if (replacement === null) return ""; // 削除
      return `<p${attrs}>${replacement}</p>`;
    });
  }
  if (changes > 0) {
    await fs.writeFile(file, out, "utf8");
    console.log(`${file}: ${changes} changes`);
  }
  return changes;
}

async function main() {
  let total = 0;
  for (const f of FILES_GLOBS) {
    total += await processFile(f);
  }
  console.log(`\nTotal: ${total} eyebrow labels processed`);
}
main();
