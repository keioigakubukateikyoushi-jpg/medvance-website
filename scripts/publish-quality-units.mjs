#!/usr/bin/env node
/**
 * 全ユニット（または指定ID / 無料セット）を市販級 lesson.html + lesson.pdf に出力。
 * Markdown 本文を KaTeX 対応 HTML に整形し、Chrome で PDF 化。
 *
 * Usage:
 *   node scripts/publish-quality-units.mjs --free
 *   node scripts/publish-quality-units.mjs ME-M1-14 ME-MA-01
 *   node scripts/publish-quality-units.mjs --all
 */
import fs from "node:fs";
import path from "node:path";
import { execFileSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");
const CONTENT = path.join(ROOT, "content/academy");
const MEDIA = path.join(ROOT, "public/academy/media");
const CHROME =
  process.env.CHROME_PATH ||
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";

const FREE = [
  "ME-M1-01",
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
];

function esc(s) {
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function loadCatalog() {
  return JSON.parse(fs.readFileSync(path.join(CONTENT, "catalog.json"), "utf8"));
}

function subjectDirs() {
  const cat = loadCatalog();
  const dirs = [];
  for (const t of cat.tracks || []) {
    for (const s of t.subjects || []) dirs.push({ id: s.id, trackLabel: t.label, subject: s.subject });
  }
  return dirs;
}

function findUnit(unitId) {
  for (const s of subjectDirs()) {
    const idxPath = path.join(CONTENT, s.id, "index.json");
    if (!fs.existsSync(idxPath)) continue;
    const idx = JSON.parse(fs.readFileSync(idxPath, "utf8"));
    const unit = (idx.units || []).find((u) => u.id === unitId);
    if (unit) {
      return {
        subjectId: s.id,
        trackLabel: idx.trackLabel || s.trackLabel,
        subject: idx.subject || s.subject,
        unit,
        lessonPath: path.join(CONTENT, s.id, unit.file),
        storyboardPath: unit.storyboard
          ? path.join(CONTENT, s.id, unit.storyboard)
          : null,
        quizPath: unit.quiz ? path.join(CONTENT, s.id, unit.quiz) : null,
      };
    }
  }
  return null;
}

function listAllUnitIds() {
  const ids = [];
  for (const s of subjectDirs()) {
    const idxPath = path.join(CONTENT, s.id, "index.json");
    if (!fs.existsSync(idxPath)) continue;
    const idx = JSON.parse(fs.readFileSync(idxPath, "utf8"));
    for (const u of idx.units || []) ids.push(u.id);
  }
  return ids;
}

/** Markdown → structured sections for premium layout */
function parseLessonMd(md) {
  const lines = md.replace(/\r\n/g, "\n").split("\n");
  let title = "";
  const meta = [];
  const sections = [];
  let cur = null;

  const push = () => {
    if (cur) {
      cur.body = cur.lines.join("\n").trim();
      sections.push(cur);
      cur = null;
    }
  };

  for (const line of lines) {
    if (/^#\s+/.test(line) && !title) {
      title = line.replace(/^#\s+/, "").trim();
      continue;
    }
    if (/^##\s+/.test(line)) {
      push();
      cur = { heading: line.replace(/^##\s+/, "").trim(), lines: [] };
      continue;
    }
    if (!cur && /^[-*]\s+/.test(line) && /ブランド|科目|章|目安|前提|次/.test(line)) {
      meta.push(line.replace(/^[-*]\s+/, "").trim());
      continue;
    }
    if (!cur) {
      // skip top fluff until first ##
      if (line.trim()) {
        // orphan body before first section
        if (!sections.length && !cur) {
          cur = { heading: "概要", lines: [line] };
        }
      }
      continue;
    }
    cur.lines.push(line);
  }
  push();
  return { title, meta, sections };
}

function inlineHtml(s) {
  // keep $...$ and $$...$$ for KaTeX; escape HTML elsewhere carefully
  // split by math first
  const parts = [];
  const re = /(\$\$[\s\S]+?\$\$|\$[^$\n]+?\$)/g;
  let last = 0;
  let m;
  while ((m = re.exec(s))) {
    if (m.index > last) parts.push({ t: "text", v: s.slice(last, m.index) });
    parts.push({ t: "math", v: m[0] });
    last = m.index + m[0].length;
  }
  if (last < s.length) parts.push({ t: "text", v: s.slice(last) });

  return parts
    .map((p) => {
      if (p.t === "math") return p.v; // raw for KaTeX
      return esc(p.v)
        .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
        .replace(/`([^`]+)`/g, "<code>$1</code>")
        .replace(
          /(ME-[A-Z0-9-]+|ADV-[A-Z0-9-]+|ELI-[A-Z0-9-]+)/g,
          '<span class="uid">$1</span>',
        );
    })
    .join("");
}

function bodyToHtml(body) {
  if (!body) return "";
  const lines = body.split("\n");
  const out = [];
  let inUl = false;
  let inOl = false;
  const flushUl = () => {
    if (inUl) {
      out.push("</ul>");
      inUl = false;
    }
  };
  const flushOl = () => {
    if (inOl) {
      out.push("</ol>");
      inOl = false;
    }
  };
  const flush = () => {
    flushUl();
    flushOl();
  };

  for (const line of lines) {
    if (/^###\s+/.test(line)) {
      flush();
      out.push(`<h3>${inlineHtml(line.replace(/^###\s+/, ""))}</h3>`);
      continue;
    }
    if (/^[-*]\s+/.test(line)) {
      flushOl();
      if (!inUl) {
        out.push("<ul>");
        inUl = true;
      }
      out.push(`<li>${inlineHtml(line.replace(/^[-*]\s+/, ""))}</li>`);
      continue;
    }
    if (/^\d+\.\s+/.test(line)) {
      flushUl();
      if (!inOl) {
        out.push("<ol>");
        inOl = true;
      }
      out.push(`<li>${inlineHtml(line.replace(/^\d+\.\s+/, ""))}</li>`);
      continue;
    }
    if (!line.trim()) {
      flush();
      continue;
    }
    flush();
    const t = line.trim();
    if (/^(ゴール|今日のゴール)/.test(t) || t.startsWith("答え")) {
      out.push(`<p class="callout">${inlineHtml(line)}</p>`);
    } else {
      out.push(`<p>${inlineHtml(line)}</p>`);
    }
  }
  flush();
  return out.join("\n");
}

function katexBoot(rel = "../../vendor/katex") {
  return `
<link rel="stylesheet" href="${rel}/katex.min.css"/>
<script src="${rel}/katex.min.js"></script>
<script src="${rel}/contrib/auto-render.min.js"></script>
<script>
(function(){
  function run(){
    if (typeof renderMathInElement !== "function") return;
    try {
      renderMathInElement(document.body, {
        delimiters: [
          {left:"$$", right:"$$", display:true},
          {left:"$", right:"$", display:false}
        ],
        throwOnError: false,
        strict: "ignore"
      });
    } catch(e) {}
    document.documentElement.setAttribute("data-katex-done","1");
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", run);
  else run();
})();
</script>`;
}

function lessonHtmlFromMd(loc, md) {
  const parsed = parseLessonMd(md);
  const u = loc.unit;
  const title = parsed.title || `${u.id} ${u.title}`;
  const goal = u.goal || "";
  const cards = parsed.sections
    .filter((s) => !/^©/.test(s.heading))
    .map((s) => {
      const cls =
        /落とし穴|減点|注意/.test(s.heading)
          ? "card traps"
          : /例題|演習|解答/.test(s.heading)
            ? "card example"
            : "card";
      return `<section class="${cls}"><h2>${esc(s.heading)}</h2>${bodyToHtml(s.body)}</section>`;
    })
    .join("\n");

  const metaLine = [
    loc.subject,
    u.chapter,
    u.minutes ? `約${u.minutes}分` : null,
  ]
    .filter(Boolean)
    .join(" · ");

  return `<!DOCTYPE html>
<html lang="ja">
<head>
<meta charset="utf-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1"/>
<title>${esc(title)} | Medvance</title>
${katexBoot("../../vendor/katex")}
<style>
  :root { --navy:#0c1a33; --gold:#c9922a; --bg:#f7f5f0; --ink:#1f2937; --muted:#6b7280; --line:#e5e1d8; }
  * { box-sizing: border-box; }
  body { margin:0; font-family: "Hiragino Sans", "Hiragino Kaku Gothic ProN", "Noto Sans JP", "Segoe UI", sans-serif; color:var(--ink); background:#fff; line-height:1.8; }
  .topbar { background:var(--navy); color:#fff; padding:1.75rem 1.25rem 1.5rem; }
  .topbar .brand { color:var(--gold); font-size:0.72rem; letter-spacing:0.14em; font-weight:700; }
  .topbar h1 { margin:0.45rem 0 0.35rem; font-size:1.4rem; font-weight:800; line-height:1.4; }
  .topbar .meta { font-size:0.85rem; opacity:0.75; }
  .goal { background:rgba(201,146,42,0.16); border-left:3px solid var(--gold); padding:0.7rem 0.95rem; margin-top:0.95rem; border-radius:0 10px 10px 0; font-size:0.95rem; }
  .wrap { max-width:720px; margin:0 auto; padding:1.25rem 1.1rem 3rem; }
  .card { background:#fff; border:1px solid var(--line); border-radius:14px; padding:1.15rem 1.25rem; margin:1rem 0; }
  .card.example { background:#fffefb; }
  .card.traps { background:#fff8f7; border-color:#f0d4d0; }
  .card.traps h2 { color:#7f1d1d; }
  h2 { margin:0 0 0.65rem; font-size:1.05rem; color:var(--navy); border-bottom:1px solid var(--line); padding-bottom:0.4rem; }
  h3 { margin:0.85rem 0 0.35rem; font-size:0.95rem; color:#374151; }
  p { margin:0.4rem 0; font-size:0.94rem; }
  ul, ol { margin:0.4rem 0 0.4rem 1.15rem; padding:0; }
  li { margin:0.3rem 0; font-size:0.94rem; }
  .callout { background:var(--bg); border-radius:10px; padding:0.7rem 0.9rem; }
  code { background:#f3f4f6; padding:0.1rem 0.35rem; border-radius:4px; font-size:0.88em; }
  .uid { font-family: ui-monospace, monospace; font-size:0.85em; color:var(--navy); background:#eef2ff; padding:0.05rem 0.3rem; border-radius:4px; }
  .math-block, .katex-display { overflow-x:auto; margin:0.55rem 0; }
  .footer { margin-top:2rem; font-size:0.75rem; color:#9ca3af; text-align:center; }
  @media print {
    .topbar { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
    .card { break-inside: avoid; }
  }
</style>
</head>
<body>
  <header class="topbar">
    <div class="brand">MEDVANCE · ${esc(loc.trackLabel || "")}</div>
    <div class="meta">${esc(metaLine)}</div>
    <h1>${esc(u.id)} · ${esc(u.title)}</h1>
    ${goal ? `<div class="goal"><strong>ゴール</strong> ${inlineHtml(goal)}</div>` : ""}
  </header>
  <main class="wrap">
    ${cards}
    <p class="footer">Medvance · ${esc(u.id)} · 教材PDF · 無断転載禁止</p>
  </main>
</body>
</html>`;
}

function chromePdf(htmlPath, pdfPath) {
  execFileSync(
    CHROME,
    [
      "--headless=new",
      "--disable-gpu",
      "--no-pdf-header-footer",
      "--font-render-hinting=none",
      "--run-all-compositor-stages-before-draw",
      "--virtual-time-budget=45000",
      `--print-to-pdf=${path.resolve(pdfPath)}`,
      `file://${path.resolve(htmlPath)}`,
    ],
    { stdio: "pipe", timeout: 120000 },
  );
}

function polishLessonMd(md) {
  return md
    .replace(/Medvance Academy/g, "Medvance")
    .replace(/MEDVANCE ACADEMY/g, "MEDVANCE")
    .replace(/© Medvance preview[^\n]*/g, "© Medvance · 無断転載禁止")
    .replace(/© Medvance elite preview/g, "© Medvance · 無断転載禁止")
    .replace(/本番サイト非掲載の教材ドラフト/g, "無断転載禁止")
    .replace(/— 非本番/g, "· 無断転載禁止");
}

function buildOne(unitId, { skipExistingPdf = false } = {}) {
  const loc = findUnit(unitId);
  if (!loc) {
    console.warn("skip missing", unitId);
    return null;
  }
  if (!fs.existsSync(loc.lessonPath)) {
    console.warn("no lesson md", unitId);
    return null;
  }

  let md = fs.readFileSync(loc.lessonPath, "utf8");
  const polished = polishLessonMd(md);
  if (polished !== md) {
    fs.writeFileSync(loc.lessonPath, polished);
    md = polished;
  }

  const outDir = path.join(MEDIA, unitId);
  fs.mkdirSync(outDir, { recursive: true });

  // Prefer existing premium unit.json path only for content that already is premium-built
  // Always (re)write quality lesson.html from markdown source of truth unless premium lesson exists and is newer?
  // User asked for high quality everywhere — overwrite lesson.html from polished MD.
  const htmlPath = path.join(outDir, "lesson.html");
  const pdfPath = path.join(outDir, "lesson.pdf");

  // If premium unit.json exists, keep using build-premium for those (already higher quality structured)
  const premiumJson = path.join(ROOT, "content/academy/premium", unitId, "unit.json");
  if (fs.existsSync(premiumJson)) {
    console.log(unitId, "has premium unit.json — keep structured assets; refresh brand only");
    // still ensure lesson.html brand if present
    if (fs.existsSync(htmlPath)) {
      let h = fs.readFileSync(htmlPath, "utf8");
      const h2 = h
        .replace(/Medvance Academy/g, "Medvance")
        .replace(/MEDVANCE ACADEMY/g, "MEDVANCE");
      if (h2 !== h) fs.writeFileSync(htmlPath, h2);
    }
  } else {
    const html = lessonHtmlFromMd(loc, md);
    fs.writeFileSync(htmlPath, html);
    console.log("wrote", htmlPath);
  }

  if (skipExistingPdf && fs.existsSync(pdfPath) && fs.statSync(pdfPath).size > 50000) {
    console.log("keep pdf", unitId);
  } else {
    try {
      chromePdf(htmlPath, pdfPath);
      console.log("pdf", unitId, fs.statSync(pdfPath).size);
    } catch (e) {
      console.warn("pdf fail", unitId, e.message);
    }
  }

  // manifest merge
  const manPath = path.join(outDir, "manifest.json");
  let man = {};
  if (fs.existsSync(manPath)) {
    try {
      man = JSON.parse(fs.readFileSync(manPath, "utf8"));
    } catch {
      man = {};
    }
  }
  const files = fs.readdirSync(outDir).filter((f) => !f.startsWith("_") && f !== ".DS_Store");
  man.unit_id = unitId;
  man.brand = "Medvance";
  man.lesson_html = files.includes("lesson.html") ? "lesson.html" : null;
  man.lesson_pdf = files.includes("lesson.pdf") ? "lesson.pdf" : null;
  man.slides_html = files.includes("slides.html") ? "slides.html" : null;
  man.slides_pdf = files.includes("slides.pdf")
    ? "slides.pdf"
    : files.includes("nlm_slides.pdf")
      ? "nlm_slides.pdf"
      : null;
  man.files = files;
  fs.writeFileSync(manPath, JSON.stringify(man, null, 2));
  return man;
}

const args = process.argv.slice(2);
let ids = [];
if (args.includes("--free")) ids = FREE;
else if (args.includes("--all")) ids = listAllUnitIds();
else ids = args.filter((a) => !a.startsWith("--"));

if (!ids.length) {
  console.error("Usage: node scripts/publish-quality-units.mjs --free | --all | ID...");
  process.exit(1);
}

const skipPdf = args.includes("--skip-pdf");
console.log("units", ids.length);
for (const id of ids) {
  console.log("===", id, "===");
  buildOne(id, { skipExistingPdf: skipPdf });
}
console.log("done");
