// 直書きコラム30記事に ColumnArticleSchemas を一括追加（articleOnly mode）。
// 既存の faqSchema 手書きを残したまま Article + Breadcrumb のみ追加する。
// 一度実行したら削除して構わないワンショットスクリプト。
import { readFileSync, writeFileSync } from "node:fs";
import { execSync } from "node:child_process";
import path from "node:path";

const files = execSync(
  'grep -l "faqSchema\\b" src/app/column/*/page.tsx',
  { encoding: "utf8" }
)
  .split(/\r?\n/)
  .filter(Boolean);

let changed = 0;
let skipped = 0;

for (const file of files) {
  const original = readFileSync(file, "utf8");

  if (original.includes("ColumnArticleSchemas")) {
    skipped++;
    continue;
  }

  const slug = path.basename(path.dirname(file));

  let updated = original;

  if (updated.includes('import ColumnCTA from "@/components/ColumnCTA";')) {
    updated = updated.replace(
      'import ColumnCTA from "@/components/ColumnCTA";',
      'import ColumnCTA from "@/components/ColumnCTA";\nimport ColumnArticleSchemas from "@/components/ColumnArticleSchemas";'
    );
  } else {
    console.warn(`⚠ ${file}: ColumnCTA import not found, skipping import injection`);
    skipped++;
    continue;
  }

  // 最初の <script type="application/ld+json" の直前に挿入
  const scriptRe = /(\n([ \t]+))<script\s+type="application\/ld\+json"/;
  if (!scriptRe.test(updated)) {
    console.warn(`⚠ ${file}: <script type="application/ld+json"> not found`);
    skipped++;
    continue;
  }
  updated = updated.replace(
    scriptRe,
    (_m, _newlineIndent, indent) =>
      `\n${indent}<ColumnArticleSchemas slug="${slug}" articleOnly />\n${indent}<script type="application/ld+json"`
  );

  writeFileSync(file, updated, "utf8");
  changed++;
}

console.log(`changed: ${changed}, skipped: ${skipped}`);
