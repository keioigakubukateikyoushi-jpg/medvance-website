// 各大学ページのヒーロー最外divをUniversityHeroラッパーに置換する。
// 置換するのは最初の `<div style={{ backgroundColor: "#0c1a33" }} className="py-20 px-4">` 1つだけ。
// 内部のテキスト/タグ/ボタンはそのまま温存する。
import fs from "node:fs/promises";
import path from "node:path";

const ROOT = path.resolve("src/app/universities");
const SKIP = new Set(["national", "private"]);

const OPEN_VARIANTS = [
  '<div style={{ backgroundColor: "#0c1a33" }} className="py-20 px-4">',
  '<div style={{ backgroundColor: "#0c1a33" }} className="py-24 px-4">',
];

function addImport(src) {
  if (/from "@\/components\/UniversityHero"/.test(src)) return src;
  const importBlock = src.match(/^(import[^\n]+\n)+/);
  if (!importBlock) return src;
  const endIdx = importBlock.index + importBlock[0].length;
  return (
    src.slice(0, endIdx) +
    'import UniversityHero from "@/components/UniversityHero";\n' +
    src.slice(endIdx)
  );
}

function replaceFirstHero(src, slug) {
  let openIdx = -1;
  let openLen = 0;
  for (const v of OPEN_VARIANTS) {
    const idx = src.indexOf(v);
    if (idx >= 0 && (openIdx < 0 || idx < openIdx)) {
      openIdx = idx;
      openLen = v.length;
    }
  }
  if (openIdx < 0) return null;

  // 対応する閉じ </div> を深さカウントで探す
  let i = openIdx + openLen;
  let depth = 1; // 開いたdivが1つある状態
  while (i < src.length) {
    const openMatch = src.indexOf("<div", i);
    const closeMatch = src.indexOf("</div>", i);
    if (closeMatch < 0) return null;
    if (openMatch >= 0 && openMatch < closeMatch) {
      depth++;
      i = openMatch + 4;
    } else {
      depth--;
      if (depth === 0) {
        // closeMatch の </div> がトップを閉じる位置
        const endIdx = closeMatch + "</div>".length;
        const inner = src.slice(openIdx + openLen, closeMatch);
        const replacement = `<UniversityHero slug="${slug}">${inner}</UniversityHero>`;
        return src.slice(0, openIdx) + replacement + src.slice(endIdx);
      }
      i = closeMatch + 6;
    }
  }
  return null;
}

async function main() {
  const entries = await fs.readdir(ROOT, { withFileTypes: true });
  const slugs = entries.filter((e) => e.isDirectory() && !SKIP.has(e.name)).map((e) => e.name);

  for (const slug of slugs) {
    const file = path.join(ROOT, slug, "page.tsx");
    let src;
    try {
      src = await fs.readFile(file, "utf8");
    } catch {
      continue;
    }
    const replaced = replaceFirstHero(src, slug);
    if (!replaced) {
      console.log(`${slug}: hero opener not found — skipped`);
      continue;
    }
    const withImport = addImport(replaced);
    await fs.writeFile(file, withImport, "utf8");
    console.log(`${slug}: ok`);
  }
}

main();
