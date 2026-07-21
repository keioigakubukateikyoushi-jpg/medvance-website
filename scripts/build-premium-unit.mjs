#!/usr/bin/env node
/**
 * Premium unit builder: unit.json → lesson HTML, slides HTML, PDF, video
 * PDF / slides / video share the same 12-block storyboard + math.
 *
 * Usage:
 *   node scripts/build-premium-unit.mjs ME-M1-15
 *   node scripts/build-premium-unit.mjs --all
 */
import fs from "node:fs";
import path from "node:path";
import { execFileSync, spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");
const PREMIUM = path.join(ROOT, "content/academy/premium");
const CHROME =
  process.env.CHROME_PATH ||
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";

function esc(s) {
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

/** Light markdown-ish to HTML; keep $...$ and $$...$$ for KaTeX */
function richText(s) {
  return esc(s)
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/\n/g, "<br/>");
}

/** Strip one layer of $ / $$ so we never emit $$$...$$$ (KaTeX 文字化けの主因) */
function stripMathDelims(s) {
  let t = String(s).trim();
  if (/^\$\$[\s\S]*\$\$$/.test(t)) t = t.slice(2, -2).trim();
  else if (/^\$[^$]*\$$/.test(t)) t = t.slice(1, -1).trim();
  return t;
}

function hasJapanese(s) {
  return /[\u3040-\u30ff\u3400-\u9fff]/.test(s);
}

function mathBlocks(mathArr) {
  if (!mathArr?.length) return "";
  return mathArr
    .map((m) => `<div class="math-block">$$${stripMathDelims(m)}$$</div>`)
    .join("\n");
}

/**
 * 公式ボックス: 日本語混じりはインライン $...$ のまま auto-render。
 * 純LaTeXのみ display math。外側を $$ で二重ラップしない。
 */
function formulaBoxHtml(formulaBox) {
  return (formulaBox || [])
    .map((f) => {
      const m = String(f).match(/^(.+?)[：:]\s*([\s\S]+)$/);
      const label = m ? m[1].trim() : "";
      const body = m ? m[2].trim() : String(f).trim();
      const labelHtml = label ? `<span class="flab">${esc(label)}</span>` : "";

      // 日本語や複数の $ を含む → 本文として richText（インライン数式）
      if (hasJapanese(body) || (body.match(/\$/g) || []).length >= 2) {
        return `<div class="formula-row">${labelHtml}<div class="formula-body">${richText(body)}</div></div>`;
      }

      const pure = stripMathDelims(body);
      // ほぼプレーン日本語のみ
      if (!/[=\\^_{}]/.test(pure) && hasJapanese(pure)) {
        return `<div class="formula-row">${labelHtml}<div class="formula-body">${richText(pure)}</div></div>`;
      }
      return `<div class="formula-row">${labelHtml}<div class="math-block">$$${pure}$$</div></div>`;
    })
    .join("\n");
}

/** KaTeX を body 末尾で同期実行（Chrome print-to-pdf で defer だと数式が生のまま残る） */
function katexBootScripts(relPrefix = "../../vendor/katex") {
  return `
<link rel="stylesheet" href="${relPrefix}/katex.min.css"/>
<script src="${relPrefix}/katex.min.js"></script>
<script src="${relPrefix}/contrib/auto-render.min.js"></script>
<script>
  (function () {
    function run() {
      if (typeof renderMathInElement !== "function") return;
      try {
        renderMathInElement(document.body, {
          delimiters: [
            { left: "$$", right: "$$", display: true },
            { left: "$", right: "$", display: false }
          ],
          throwOnError: false,
          strict: "ignore",
          trust: false
        });
      } catch (e) { console.warn("katex", e); }
      document.documentElement.setAttribute("data-katex-done", "1");
    }
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", run);
    } else {
      run();
    }
  })();
</script>`;
}

function lessonHtml(u) {
  const examples = u.examples
    .map((ex) => {
      const steps = ex.steps.map((s) => `<li>${richText(s)}</li>`).join("\n");
      return `
      <section class="card">
        <h2>${esc(ex.label)}</h2>
        <div class="problem"><p>${richText(ex.problem)}</p></div>
        <h3>解答の流れ</h3>
        <ol class="steps">${steps}</ol>
        <div class="answer"><strong>答え</strong> ${richText(ex.answer)}</div>
      </section>`;
    })
    .join("\n");

  const formulaHtml = formulaBoxHtml(u.formulaBox);
  const traps = (u.traps || []).map((t) => `<li>${richText(t)}</li>`).join("\n");
  const points = (u.points || []).map((p) => `<li>${richText(p)}</li>`).join("\n");
  const proc = (u.procedure || []).map((p, i) => `<li><span class="num">${i + 1}</span> ${richText(p)}</li>`).join("\n");

  return `<!DOCTYPE html>
<html lang="ja">
<head>
<meta charset="utf-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1"/>
<title>${esc(u.id)} ${esc(u.title)} | Medvance</title>
${katexBootScripts("../../vendor/katex")}
<style>
  :root { --navy:#0c1a33; --gold:#c9922a; --bg:#f7f5f0; --ink:#1f2937; --muted:#6b7280; }
  * { box-sizing: border-box; }
  body { margin:0; font-family: "Hiragino Sans", "Hiragino Kaku Gothic ProN", "Noto Sans JP", "Segoe UI", sans-serif; color:var(--ink); background:#fff; line-height:1.75; }
  .formula-body { font-size:0.98rem; padding:0.45rem 0.2rem; }
  .formula-body .katex { font-size:1.05em; }
  .topbar { background:var(--navy); color:#fff; padding:1.75rem 1.25rem 1.5rem; }
  .topbar .brand { color:var(--gold); font-size:0.75rem; letter-spacing:0.12em; font-weight:700; }
  .topbar h1 { margin:0.4rem 0 0.35rem; font-size:1.45rem; font-weight:800; line-height:1.35; }
  .topbar .meta { font-size:0.85rem; opacity:0.75; }
  .goal { background:rgba(201,146,42,0.15); border-left:3px solid var(--gold); padding:0.65rem 0.9rem; margin-top:0.9rem; border-radius:0 8px 8px 0; font-size:0.95rem; }
  .wrap { max-width:720px; margin:0 auto; padding:1.25rem 1.1rem 3rem; }
  .card { background:#fff; border:1px solid #e5e1d8; border-radius:14px; padding:1.15rem 1.2rem; margin:1rem 0; }
  h2 { margin:0 0 0.6rem; font-size:1.05rem; color:var(--navy); border-bottom:1px solid #e5e1d8; padding-bottom:0.35rem; }
  h3 { margin:0.8rem 0 0.35rem; font-size:0.95rem; color:#374151; }
  .problem { background:var(--bg); border-radius:10px; padding:0.85rem 1rem; margin:0.5rem 0; }
  .steps { margin:0.4rem 0 0.4rem 1.1rem; }
  .steps li { margin:0.35rem 0; }
  .answer { margin-top:0.75rem; padding:0.7rem 0.9rem; background:#eef8f0; border-radius:10px; color:#14532d; font-size:0.92rem; }
  .math-block { overflow-x:auto; margin:0.65rem 0; padding:0.55rem 0.4rem; background:#f8fafc; border-radius:8px; text-align:center; }
  .formula-row { margin:0.55rem 0; }
  .flab { display:block; font-size:0.8rem; color:var(--muted); margin-bottom:0.2rem; }
  .traps { color:#7f1d1d; }
  .proc-list { list-style:none; padding:0; margin:0; }
  .proc-list li { display:flex; gap:0.6rem; margin:0.45rem 0; align-items:flex-start; }
  .proc-list .num { flex-shrink:0; width:1.4rem; height:1.4rem; border-radius:999px; background:var(--navy); color:#fff; font-size:0.75rem; font-weight:700; display:inline-flex; align-items:center; justify-content:center; margin-top:0.15rem; }
  .footer { margin-top:2rem; font-size:0.75rem; color:#9ca3af; text-align:center; }
  @media print {
    .topbar { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
    .card { break-inside: avoid; }
    body { background:#fff; }
  }
</style>
</head>
<body>
  <header class="topbar">
    <div class="brand">MEDVANCE · ${esc(u.track)}</div>
    <div class="meta">${esc(u.subject)} · ${esc(u.chapter)} · 約${u.minutes}分</div>
    <h1>${esc(u.id)} · ${esc(u.title)}</h1>
    <div class="goal"><strong>ゴール</strong> ${richText(u.goal)}</div>
  </header>
  <main class="wrap">
    <section class="card">
      <h2>受験での位置づけ</h2>
      <p>${richText(u.examWhy)}</p>
    </section>
    <section class="card">
      <h2>この回のポイント</h2>
      <ul>${points}</ul>
    </section>
    <section class="card">
      <h2>定義 · ${esc(u.definition.name)}</h2>
      <p>${richText(u.definition.body)}</p>
    </section>
    <section class="card">
      <h2>公式ボックス</h2>
      ${formulaHtml}
    </section>
    <section class="card">
      <h2>核となる手順</h2>
      <ol class="proc-list">${proc}</ol>
    </section>
    ${examples}
    <section class="card traps">
      <h2>落とし穴（減点パターン）</h2>
      <ul>${traps}</ul>
    </section>
    <p class="footer">Medvance · ${esc(u.id)} · 本文・スライド・PDF・動画は同一台本 · 無断転載禁止</p>
  </main>
</body>
</html>`;
}

function slidesHtml(u) {
  const slides = u.slides || [];
  const panels = slides
    .map((s, i) => {
      const math = mathBlocks(s.math || []);
      return `
    <section class="slide${i === 0 ? " on" : ""}" data-i="${i}">
      <div class="slide-top">
        <span class="idx">${i + 1} / ${slides.length}</span>
        <span class="uid">${esc(u.id)}</span>
      </div>
      <h2>${esc(s.title)}</h2>
      <p class="screen">${richText(s.screen)}</p>
      ${math}
      <p class="narr"><strong>ナレーション</strong> ${esc(s.narration)}</p>
    </section>`;
    })
    .join("\n");

  const narrJson = JSON.stringify(slides.map((s) => s.narration));

  return `<!DOCTYPE html>
<html lang="ja">
<head>
<meta charset="utf-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1"/>
<title>${esc(u.id)} スライド | Medvance</title>
${katexBootScripts("../../vendor/katex")}
<style>
  :root { --navy:#0c1a33; --gold:#c9922a; }
  * { box-sizing:border-box; }
  body { margin:0; font-family:"Hiragino Sans","Hiragino Kaku Gothic ProN","Noto Sans JP",sans-serif; background:#0b1220; color:#e8eef8; }
  .bar { display:flex; gap:0.5rem; align-items:center; padding:0.7rem 1rem; background:#121a2b; border-bottom:1px solid #2a3a55; position:sticky; top:0; z-index:10; }
  button { background:#3d8bfd; color:#fff; border:0; border-radius:8px; padding:0.45rem 0.85rem; font:inherit; cursor:pointer; font-weight:600; }
  button.ghost { background:#24324a; }
  button.gold { background:var(--gold); color:#0c1a33; }
  .meta { margin-left:auto; font-size:0.8rem; color:#9aadc7; }
  .stage { max-width:900px; margin:0 auto; padding:1rem; min-height:70vh; }
  .slide { display:none; background:linear-gradient(160deg,#162033,#0f172a); border:1px solid #2a3a55; border-radius:18px; padding:1.5rem 1.6rem 1.4rem; min-height:520px; }
  .slide.on { display:block; animation: fade .25s ease; }
  @keyframes fade { from{opacity:0; transform:translateY(4px)} to{opacity:1; transform:none} }
  .slide-top { display:flex; justify-content:space-between; color:#5eead4; font-size:0.8rem; font-weight:700; margin-bottom:0.6rem; }
  .slide h2 { margin:0 0 0.5rem; font-size:1.35rem; color:#fff; }
  .screen { color:#cbd5e1; font-size:1rem; margin:0.3rem 0 0.8rem; }
  .math-block { background:rgba(255,255,255,0.04); border:1px solid #334155; border-radius:12px; padding:0.9rem; margin:0.75rem 0; text-align:center; color:#f8fafc; overflow-x:auto; }
  .math-block .katex { font-size:1.25em; }
  .narr { margin-top:1.1rem; padding-top:0.85rem; border-top:1px solid #334155; color:#94a3b8; font-size:0.92rem; line-height:1.7; }
  .narr strong { color:var(--gold); display:block; font-size:0.75rem; margin-bottom:0.25rem; letter-spacing:0.06em; }
  @media print {
    body { background:#fff; color:#000; }
    .bar { display:none; }
    .slide { display:block !important; break-after:page; min-height:auto; background:#fff; border:1px solid #ddd; color:#000; }
    .screen,.narr { color:#333; }
  }
</style>
</head>
<body>
  <div class="bar">
    <button type="button" id="prev">← 前</button>
    <button type="button" id="next">次 →</button>
    <button type="button" class="ghost" id="play">自動再生</button>
    <button type="button" class="gold" id="print">PDF用に印刷</button>
    <span class="meta">${esc(u.id)} · 台本連動 ${slides.length}枚</span>
  </div>
  <div class="stage" id="stage">${panels}</div>
  <script>
    const slides = [...document.querySelectorAll('.slide')];
    const narr = ${narrJson};
    let i = 0, timer = null;
    function show(n) {
      i = (n + slides.length) % slides.length;
      slides.forEach((s, j) => s.classList.toggle('on', j === i));
    }
    document.getElementById('prev').onclick = () => show(i - 1);
    document.getElementById('next').onclick = () => show(i + 1);
    document.getElementById('play').onclick = () => {
      if (timer) { clearInterval(timer); timer = null; document.getElementById('play').textContent = '自動再生'; return; }
      document.getElementById('play').textContent = '停止';
      timer = setInterval(() => show(i + 1), 12000);
    };
    document.getElementById('print').onclick = () => window.print();
    document.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowRight' || e.key === ' ') { e.preventDefault(); show(i + 1); }
      if (e.key === 'ArrowLeft') show(i - 1);
    });
    show(0);
    // capture mode: ?slide=N shows only that slide full page
    const m = location.search.match(/[?&]slide=(\\d+)/);
    if (m) {
      const n = Math.max(0, Math.min(slides.length - 1, parseInt(m[1], 10)));
      document.querySelector('.bar').style.display = 'none';
      show(n);
      document.body.style.background = '#0b1220';
    }
  </script>
</body>
</html>`;
}

function chromePdf(htmlPath, pdfPath) {
  const absHtml = path.resolve(htmlPath);
  const absPdf = path.resolve(pdfPath);
  // file:// + 同期KaTeX。virtual-time を長めにして数式描画後に印刷。
  execFileSync(
    CHROME,
    [
      "--headless=new",
      "--disable-gpu",
      "--no-pdf-header-footer",
      "--font-render-hinting=none",
      "--run-all-compositor-stages-before-draw",
      "--virtual-time-budget=45000",
      "--print-to-pdf-no-header",
      `--print-to-pdf=${absPdf}`,
      `file://${absHtml}`,
    ],
    { stdio: "pipe", timeout: 120000 },
  );
}

function chromeShot(url, pngPath) {
  execFileSync(
    CHROME,
    [
      "--headless=new",
      "--disable-gpu",
      `--screenshot=${path.resolve(pngPath)}`,
      "--window-size=1280,720",
      "--default-background-color=0b1220",
      "--hide-scrollbars",
      "--virtual-time-budget=8000",
      url,
    ],
    { stdio: "pipe", timeout: 30000 },
  );
}

function buildVideo(u, outDir, slidesHtmlPath) {
  const framesDir = path.join(outDir, "_frames");
  fs.mkdirSync(framesDir, { recursive: true });
  const n = (u.slides || []).length;
  const frameFiles = [];
  for (let i = 0; i < n; i++) {
    const png = path.join(framesDir, `f${String(i).padStart(3, "0")}.png`);
    const url = `file://${path.resolve(slidesHtmlPath)}?slide=${i}`;
    try {
      chromeShot(url, png);
      // wait for katex - virtual-time-budget should help
      if (fs.existsSync(png) && fs.statSync(png).size > 1000) frameFiles.push(png);
    } catch (e) {
      console.warn("shot failed", i, e.message);
    }
  }
  if (frameFiles.length < 2) {
    console.warn("Not enough frames for video");
    return null;
  }
  // 12s per slide for ~ formula reading time
  const listFile = path.join(framesDir, "list.txt");
  const lines = frameFiles.flatMap((f) => [`file '${f.replace(/'/g, "'\\''")}'`, "duration 12"]);
  // last frame needs a file entry without duration for ffmpeg concat demuxer
  lines.push(`file '${frameFiles[frameFiles.length - 1].replace(/'/g, "'\\''")}'`);
  fs.writeFileSync(listFile, lines.join("\n"));
  const mp4 = path.join(outDir, "video.mp4");
  const r = spawnSync(
    "ffmpeg",
    ["-y", "-f", "concat", "-safe", "0", "-i", listFile, "-vsync", "vfr", "-pix_fmt", "yuv420p", "-vf", "fps=1,scale=1280:720:force_original_aspect_ratio=decrease,pad=1280:720:(ow-iw)/2:(oh-ih)/2", mp4],
    { encoding: "utf8" },
  );
  if (r.status !== 0) {
    console.warn("ffmpeg failed", r.stderr?.slice(-400));
    // simpler fallback
    spawnSync(
      "ffmpeg",
      ["-y", "-framerate", "1/12", "-i", path.join(framesDir, "f%03d.png"), "-c:v", "libx264", "-pix_fmt", "yuv420p", "-r", "30", mp4],
      { encoding: "utf8" },
    );
  }
  return fs.existsSync(mp4) ? mp4 : null;
}

function buildUnit(id) {
  const unitPath = path.join(PREMIUM, id, "unit.json");
  if (!fs.existsSync(unitPath)) throw new Error(`missing ${unitPath}`);
  const u = JSON.parse(fs.readFileSync(unitPath, "utf8"));
  const outDir = path.join(ROOT, "public/academy/media", id);
  fs.mkdirSync(outDir, { recursive: true });

  const lessonPath = path.join(outDir, "lesson.html");
  const slidesPath = path.join(outDir, "slides.html");
  const pdfPath = path.join(outDir, "lesson.pdf");

  fs.writeFileSync(lessonPath, lessonHtml(u));
  fs.writeFileSync(slidesPath, slidesHtml(u));
  console.log("wrote", lessonPath);
  console.log("wrote", slidesPath);

  // Also write markdown lesson into content for site text fallback
  const md = premiumToMarkdown(u);
  const subjectDir = id.startsWith("ADV-M1")
    ? "advanced/math1"
    : id.startsWith("ADV-M2")
      ? "advanced/math2"
      : id.startsWith("ADV-MA")
        ? "advanced/mathA"
        : id.startsWith("ELI-M")
          ? "elite/math"
          : id.startsWith("ME-M2")
            ? "math2-exam"
            : id.startsWith("ME-MA")
              ? "mathA-exam"
              : id.startsWith("ME-EN")
                ? "english-exam"
                : "math1-exam";
  const lessonMdPath = path.join(ROOT, "content/academy", subjectDir, "lessons", `${id}.md`);
  if (fs.existsSync(path.dirname(lessonMdPath))) {
    fs.writeFileSync(lessonMdPath, md);
    console.log("updated", lessonMdPath);
  }
  const sbPath = path.join(ROOT, "content/academy", subjectDir, "storyboard", `${id}.md`);
  if (fs.existsSync(path.dirname(sbPath))) {
    fs.writeFileSync(sbPath, premiumToStoryboard(u));
    console.log("updated", sbPath);
  }

  try {
    chromePdf(lessonPath, pdfPath);
    console.log("pdf", pdfPath, fs.statSync(pdfPath).size);
  } catch (e) {
    console.warn("pdf failed", e.message);
  }

  if (process.env.SKIP_VIDEO === "1") {
    console.log("skip video (SKIP_VIDEO=1)");
  } else {
    try {
      const vid = buildVideo(u, outDir, slidesPath);
      if (vid) console.log("video", vid, fs.statSync(vid).size);
    } catch (e) {
      console.warn("video failed", e.message);
    }
  }

  // manifest for site
  const man = {
    unit_id: id,
    premium: true,
    title: u.title,
    minutes: u.minutes,
    lesson_html: `lesson.html`,
    slides_html: `slides.html`,
    pdf: fs.existsSync(pdfPath) ? `lesson.pdf` : null,
    video: fs.existsSync(path.join(outDir, "video.mp4")) ? `video.mp4` : null,
    audio: fs.existsSync(path.join(outDir, "audio.m4a")) ? `audio.m4a` : null,
  };
  fs.writeFileSync(path.join(outDir, "manifest.json"), JSON.stringify(man, null, 2));
  return man;
}

function premiumToMarkdown(u) {
  const lines = [
    `# ${u.id} ${u.title}`,
    "",
    `- ブランド: **Medvance**`,
    `- 科目: ${u.subject}`,
    `- 章: ${u.chapter}`,
    `- 目安: **${u.minutes}分**`,
    `- 前提: ${(u.prereq || []).join(", ") || "なし"}`,
    `- 次: ${u.next || ""}`,
    "",
    "## 今日のゴール",
    u.goal,
    "",
    "## 受験での位置づけ",
    u.examWhy,
    "",
    "## この回のポイント",
    ...(u.points || []).map((p) => `- ${p}`),
    "",
    `## 定義 · ${u.definition.name}`,
    u.definition.body,
    "",
    "## 公式ボックス",
    ...(u.formulaBox || []).map((f) => `- ${f}`),
    "",
    "## 核となる手順",
    ...(u.procedure || []).map((p, i) => `${i + 1}. ${p}`),
    "",
  ];
  for (const ex of u.examples || []) {
    lines.push(`## ${ex.label}`, ex.problem, "", "### 解答", ...(ex.steps || []).map((s) => `- ${s}`), "", `**答え** ${ex.answer}`, "");
  }
  lines.push("## 落とし穴", ...(u.traps || []).map((t) => `- ${t}`), "", `## 次へ`, u.next || "", "");
  return lines.join("\n");
}

function premiumToStoryboard(u) {
  const lines = [`# 台本 ${u.id} ${u.title}`, `- ${u.minutes}分 / ${(u.slides || []).length}ブロック`, `- PDF・動画・音声は同一順番`, ""];
  (u.slides || []).forEach((s, i) => {
    lines.push(`## ブロック${i + 1} ${s.title}`, `- 画面: ${s.screen}`, ...(s.math || []).map((m) => `- 数式: $${m}$`), `- セリフ: ${s.narration}`, "");
  });
  return lines.join("\n");
}

const args = process.argv.slice(2);
const ids = args.includes("--all")
  ? fs.readdirSync(PREMIUM).filter((d) => fs.existsSync(path.join(PREMIUM, d, "unit.json")))
  : args.filter((a) => !a.startsWith("-"));

if (!ids.length) {
  console.error("Usage: node scripts/build-premium-unit.mjs ME-M1-15");
  process.exit(1);
}
for (const id of ids) {
  console.log("=== build", id, "===");
  buildUnit(id);
}
console.log("done");
