#!/usr/bin/env node
/**
 * Medvance × NotebookLM 細分化量産ファクトリ
 *
 * 原則（内容ずれ防止）:
 *  1. 正本 = content/academy/{subject}/lessons + storyboard のみを教材本体とする
 *  2. Deep Research は「教科書用語・定石の裏付け」用。例題の創作禁止
 *  3. Studio の focus は常に台本順・正本優先を明示
 *  4. 1ユニット = 1ノートブック（細分化）
 *
 * Usage:
 *   node scripts/nlm-unit-factory.mjs ME-M1-04 ME-M1-05
 *   node scripts/nlm-unit-factory.mjs --subject math1-exam --limit 3
 *   node scripts/nlm-unit-factory.mjs ME-M1-04 --no-research --audio-only
 *   node scripts/nlm-unit-factory.mjs ME-M1-04 --no-research --video-only --reuse-sources
 *   node scripts/nlm-unit-factory.mjs ME-M1-04 --download-only
 *
 * Env:
 *   NLM_DRY=1  … コマンド表示のみ
 *   NLM_SKIP_VIDEO=1
 *   NLM_SKIP_AUDIO=1
 *   NLM_SKIP_SLIDES=1
 *   NLM_SKIP_QUIZ=1
 *   NLM_RESEARCH_MODE=fast|deep  (default: deep)
 */
import fs from "node:fs";
import path from "node:path";
import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");
const CONTENT = path.join(ROOT, "content/academy");
const MEDIA = path.join(ROOT, "public/academy/media");
const REGISTRY = path.join(CONTENT, "nlm-registry.json");
const DRY = process.env.NLM_DRY === "1";

const args = process.argv.slice(2);
const flags = new Set(args.filter((a) => a.startsWith("--")));
const positional = args.filter((a) => !a.startsWith("--"));

function sh(cmd, opts = {}) {
  console.log(DRY ? `[dry] ${cmd}` : `> ${cmd}`);
  if (DRY) return { status: 0, stdout: "", stderr: "" };
  const r = spawnSync(cmd, {
    shell: true,
    encoding: "utf8",
    maxBuffer: 20 * 1024 * 1024,
    timeout: opts.timeout ?? 600_000,
  });
  if (r.status !== 0) {
    const err = `${r.stdout || ""}\n${r.stderr || ""}`.trim();
    if (err) console.warn(err.slice(-600));
  } else if (r.stdout?.trim()) {
    console.log(r.stdout.trim().slice(0, 400));
  }
  return r;
}

function loadRegistry() {
  if (!fs.existsSync(REGISTRY)) {
    return { version: 1, updated: null, units: {} };
  }
  return JSON.parse(fs.readFileSync(REGISTRY, "utf8"));
}

function saveRegistry(reg) {
  reg.updated = new Date().toISOString();
  if (DRY) {
    console.log("[dry] registry update", REGISTRY);
    return;
  }
  fs.writeFileSync(REGISTRY, JSON.stringify(reg, null, 2));
}

function listSubjectDirs() {
  const out = [];
  for (const name of fs.readdirSync(CONTENT)) {
    const p = path.join(CONTENT, name);
    if (!fs.statSync(p).isDirectory()) continue;
    if (fs.existsSync(path.join(p, "index.json"))) {
      out.push(name);
      continue;
    }
    // advanced/math1, elite/math など
    for (const sub of fs.readdirSync(p)) {
      const sp = path.join(p, sub);
      if (fs.existsSync(path.join(sp, "index.json"))) out.push(path.join(name, sub));
    }
  }
  return out;
}

function findUnit(unitId) {
  for (const dir of listSubjectDirs()) {
    const idxPath = path.join(CONTENT, dir, "index.json");
    if (!fs.existsSync(idxPath)) continue;
    const idx = JSON.parse(fs.readFileSync(idxPath, "utf8"));
    const unit = (idx.units || []).find((u) => u.id === unitId);
    if (unit) {
      return {
        subjectDir: dir,
        subject: idx.subject,
        unit,
        lessonPath: path.join(CONTENT, dir, unit.file),
        storyboardPath: unit.storyboard
          ? path.join(CONTENT, dir, unit.storyboard)
          : null,
        quizPath: unit.quiz ? path.join(CONTENT, dir, unit.quiz) : null,
      };
    }
  }
  return null;
}

function listSubjectUnitIds(subjectDir, limit = Infinity) {
  const idx = JSON.parse(fs.readFileSync(path.join(CONTENT, subjectDir, "index.json"), "utf8"));
  return (idx.units || []).map((u) => u.id).slice(0, limit);
}

/** 正本固定の focus（ずれ防止の核心） */
function focusPrompt(loc) {
  const u = loc.unit;
  return [
    `【Medvance 公式教材・正本厳守】ユニット ${u.id}「${u.title}」。`,
    `科目: ${loc.subject} / 章: ${u.chapter} / ゴール: ${u.goal}`,
    `アップロードされた lesson と storyboard が唯一の正本。`,
    `台本（storyboard）のブロック順を必ず守る。台本にない例題・数値・入試問題を創作しない。`,
    `Deep Research 由来ソースがあっても、定義の言い換え・定石の補強にのみ使い、正本の手順・例題を置き換えない。`,
    `日本語。受験（医学部・難関大）向け。短く明確。`,
    `出力するタイトル・設問・選択肢・ヒント・解説・画面内テキストは、英語を混ぜずすべて自然な日本語にする。`,
    `アップロード済みソースだけを使い、統計・引用・例題を創作しない。`,
  ].join(" ");
}

/**
 * 動画専用・高品質フォーカス（東進級の「授業として見る」密度）
 * - 板書・手順・例題・落とし穴を画面に出す
 * - 雑談・自己紹介・余談を入れない
 */
function videoFocusPrompt(loc) {
  const u = loc.unit;
  return [
    `あなたは医学部・難関大受験のプロ講師。Medvance の授業動画を作る。`,
    `ユニット ${u.id}「${u.title}」。章:${u.chapter}。ゴール:${u.goal}。`,
    `【絶対ルール】lesson と storyboard が唯一の正本。台本のブロック順を守る。`,
    `台本にない例題・数値・入試問題・一般論の脱線を一切入れない。`,
    `【授業の型（必須）】`,
    `1) 冒頭15秒: 今日のゴールを一文で宣言（自己紹介・チャンネル宣伝は禁止）`,
    `2) 定義・用語: 画面にキーワードを大きく出し、口頭は定義を正確に`,
    `3) 核となる手順: 番号付きで1手ずつ。画面に手順を書きながら進める`,
    `4) 例題A: 問題文→方針→計算/答案の骨格→答え。省略しない`,
    `5) 例題B: 受験で差がつくポイントを1つ強調`,
    `6) 落とし穴: よくある減点を1〜2個、なぜダメかを短く`,
    `7) 締め: 到達チェック（何ができれば次か）を箇条書き`,
    `【映像】板書・図解が中心。文字は少なめ・読みやすい日本語のみ。装飾過多禁止。`,
    `【話し方】テンポよく、講師口調。曖昧語（「なんか」「とりあえず」）禁止。`,
    `【言語】ナレーションも画面文字もすべて自然な日本語。英語UI文言禁止。`,
    `Use only uploaded sources. Do not invent statistics, quotes, or examples not in the sources.`,
  ].join(" ");
}

function writeVideoDirectorSource(loc) {
  const u = loc.unit;
  const lesson = fs.existsSync(loc.lessonPath)
    ? fs.readFileSync(loc.lessonPath, "utf8")
    : "";
  // 主要見出しを抜粋して「画コンテ」にする
  const heads = [...lesson.matchAll(/^##\s+(.+)$/gm)].map((m) => m[1].trim()).slice(0, 14);
  const body = [
    `# VIDEO DIRECTOR CARD — ${u.id}`,
    ``,
    `Brand: Medvance（医学部・難関大）`,
    `Unit: ${u.id} ${u.title}`,
    `Chapter: ${u.chapter}`,
    `Goal: ${u.goal}`,
    `Minutes target: ${u.minutes || 12}–${(u.minutes || 12) + 6}`,
    ``,
    `## 画コンテ（この順で画面を進める）`,
    `1. タイトルカード: ${u.id} / ${u.title}`,
    `2. 今日のゴール（1文）`,
    ...heads.map((h, i) => `${i + 3}. ${h}`),
    ``,
    `## 禁止`,
    `- 台本外の例題・入試年度の創作`,
    `- 長い前置き・雑談・自己紹介`,
    `- 英語だけのスライド見出し`,
    ``,
    `## 品質`,
    `- 例題は手順が見える板書`,
    `- 落とし穴は具体的に1〜2個`,
    `- 最後に到達チェック`,
  ].join("\n");
  const out = path.join(MEDIA, u.id, "_video_director.md");
  fs.mkdirSync(path.dirname(out), { recursive: true });
  fs.writeFileSync(out, body, "utf8");
  return out;
}

/** Deep Research 用クエリ（創作を誘発しない） */
function researchQuery(loc) {
  const u = loc.unit;
  return [
    `高校 ${loc.subject} の標準的な教科書範囲における`,
    `「${u.title}」の定義・公式・典型的な注意点`,
    `（一般的な学習指導要領レベルの解説に限定。`,
    `特定年度の入試問題・オリジナル問題の列挙は不要。`,
    `Medvance教材の正本を置き換える内容は不要）`,
  ].join("");
}

function ensureNotebook(reg, unitId, title) {
  if (reg.units[unitId]?.notebook_id) {
    console.log("reuse notebook", unitId, reg.units[unitId].notebook_id);
    return reg.units[unitId].notebook_id;
  }
  const r = sh(`nlm notebook create ${JSON.stringify(title)} --json`);
  let id = null;
  try {
    const j = JSON.parse(r.stdout || "{}");
    id = j.id || j.notebook_id || j.notebook?.id;
  } catch {
    /* parse from text */
    const m = (r.stdout + r.stderr).match(
      /[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/i,
    );
    id = m?.[0];
  }
  if (!id) {
    // fallback list
    const list = sh(`nlm notebook list --json`);
    try {
      const arr = JSON.parse(list.stdout || "[]");
      const hit = arr.find((x) => (x.title || "").includes(unitId));
      id = hit?.id;
    } catch {
      /* */
    }
  }
  if (!id) throw new Error(`failed to create notebook for ${unitId}: ${r.stderr}`);
  reg.units[unitId] = {
    ...(reg.units[unitId] || {}),
    notebook_id: id,
    title,
    created_at: new Date().toISOString(),
  };
  saveRegistry(reg);
  return id;
}

function addCanonicalSources(nb, loc) {
  const files = [loc.lessonPath, loc.storyboardPath].filter(
    (f) => f && fs.existsSync(f),
  );
  for (const f of files) {
    const r = sh(`nlm source add ${nb} --file ${JSON.stringify(f)} --wait`);
    if (r.status !== 0) console.warn("source add warn", f, r.stderr?.slice(-200));
  }
  // alignment note as text source
  const note = [
    `ALIGNMENT LOCK for ${loc.unit.id}`,
    `Goal: ${loc.unit.goal}`,
    `Prereq: ${(loc.unit.prereq || []).join(", ") || "none"}`,
    `Rule: storyboard order is mandatory. No invented exam problems.`,
    `Deep research sources are secondary; lesson+storyboard are primary.`,
  ].join("\n");
  const tmp = path.join(MEDIA, loc.unit.id, "_alignment_lock.txt");
  fs.mkdirSync(path.dirname(tmp), { recursive: true });
  fs.writeFileSync(tmp, note, "utf8");
  sh(`nlm source add ${nb} --file ${JSON.stringify(tmp)} --wait`);
}

function runDeepResearch(nb, loc) {
  const mode = process.env.NLM_RESEARCH_MODE || "deep";
  const q = researchQuery(loc);
  console.log("deep research", mode, q.slice(0, 80) + "…");
  // start
  const start = sh(
    `nlm research start ${JSON.stringify(q)} --notebook-id ${nb} --mode ${mode} --source web --force`,
    { timeout: 120_000 },
  );
  if (start.status !== 0) {
    console.warn("research start failed, continue with canonical only", start.stderr?.slice(-300));
    return false;
  }
  // wait then import (CLI has no --auto-import; import is separate)
  const wait = mode === "deep" ? 900 : 180;
  const st = sh(`nlm research status ${nb} --max-wait ${wait}`, {
    timeout: (wait + 60) * 1000,
  });
  if (st.status !== 0) {
    console.warn("research status incomplete", (st.stdout + st.stderr).slice(-300));
  }
  const imp = sh(`nlm research import ${nb}`, { timeout: 600_000 });
  if (imp.status !== 0) {
    console.warn("research import incomplete", (imp.stdout + imp.stderr).slice(-300));
  }
  return true;
}

function createStudio(nb, focus, kinds) {
  const F = JSON.stringify(focus);
  // note: quiz CLI may not support --language; audio/video/slides do
  if (kinds.audio && process.env.NLM_SKIP_AUDIO !== "1") {
    const r = sh(
      `nlm audio create ${nb} --format deep_dive --length default --language ja --focus ${F} --confirm`,
      { timeout: 120_000 },
    );
    if (r.status !== 0) console.warn("audio create", (r.stdout + r.stderr).slice(-400));
  }
  if (kinds.video && process.env.NLM_SKIP_VIDEO !== "1") {
    // 受験授業向き: explainer + whiteboard を第一選択（板書型）
    // 環境変数で上書き可: NLM_VIDEO_FORMAT / NLM_VIDEO_STYLE
    const vFormat = process.env.NLM_VIDEO_FORMAT || "explainer";
    const vStyle = process.env.NLM_VIDEO_STYLE || "whiteboard";
    const vFocus = JSON.stringify(kinds._videoFocus || focus);
    let r = sh(
      `nlm video create ${nb} --format ${vFormat} --style ${vStyle} --language ja --focus ${vFocus} --confirm`,
      { timeout: 180_000 },
    );
    if (r.status !== 0) {
      console.warn("video retry explainer/classic");
      r = sh(
        `nlm video create ${nb} --format explainer --style classic --language ja --focus ${vFocus} --confirm`,
        { timeout: 180_000 },
      );
    }
    if (r.status !== 0) {
      console.warn("video retry brief/whiteboard");
      r = sh(
        `nlm video create ${nb} --format brief --style whiteboard --language ja --focus ${vFocus} --confirm`,
        { timeout: 180_000 },
      );
      if (r.status !== 0) console.warn("video create", (r.stdout + r.stderr).slice(-400));
    }
  }
  if (kinds.slides && process.env.NLM_SKIP_SLIDES !== "1") {
    const r = sh(
      `nlm slides create ${nb} --format detailed_deck --length default --language ja --focus ${F} --confirm`,
      { timeout: 120_000 },
    );
    if (r.status !== 0) console.warn("slides create", (r.stdout + r.stderr).slice(-400));
  }
  if (kinds.quiz && process.env.NLM_SKIP_QUIZ !== "1") {
    const r = sh(
      `nlm quiz create ${nb} --count 6 --difficulty 3 --focus ${F} --confirm`,
      { timeout: 120_000 },
    );
    if (r.status !== 0) console.warn("quiz create", (r.stdout + r.stderr).slice(-400));
  }
}

/** Studio が completed になるまで待つ（最大 maxWaitSec） */
function waitStudioReady(nb, { maxWaitSec = 900, pollSec = 30, types = null } = {}) {
  if (DRY) return { arts: [], ready: true };
  const deadline = Date.now() + maxWaitSec * 1000;
  const typeSet = types ? new Set(types) : null;
  while (Date.now() < deadline) {
    const r = sh(`nlm studio status ${nb} --json`, { timeout: 120_000 });
    let arts = [];
    try {
      arts = JSON.parse(r.stdout || "[]");
      if (!Array.isArray(arts) && arts.artifacts) arts = arts.artifacts;
    } catch {
      /* keep polling */
    }
    if (Array.isArray(arts) && arts.length) {
      if (typeSet) {
        arts = arts.filter((a) => typeSet.has(String(a.type || a.artifact_type || "")));
      }
      // 同型が複数ある場合は新しいもの優先（先頭が新しい想定、なければ全部）
      const statuses = arts.map((a) => String(a.status || a.state || "unknown").toLowerCase());
      const pending = statuses.filter((s) =>
        /progress|pending|running|generating|in_progress|processing/.test(s),
      );
      // unknown は「生成中の可能性」だが無限待ちしない: completed が1つでもあれば先へ
      const failed = statuses.filter((s) => /fail|error/.test(s));
      const done = statuses.filter((s) => /complete|ready|success|done/.test(s));
      console.log(
        "studio poll",
        arts.map((a) => `${a.type || a.artifact_type}:${a.status || "?"}`).join(", ") || "(no match)",
      );
      if (done.length > 0 && pending.length === 0) {
        return { arts, ready: true };
      }
      if (pending.length === 0 && failed.length === arts.length && arts.length > 0) {
        return { arts, ready: false };
      }
      // video-only: completed が1本あれば unknown 旧ジョブは無視
      if (typeSet && done.length > 0) {
        return { arts, ready: true };
      }
    }
    sleep(pollSec * 1000);
  }
  console.warn("studio wait timeout", nb);
  return { arts: [], ready: false };
}

function downloadArtifacts(
  nb,
  unitId,
  {
    wait = true,
    kinds = { audio: true, video: true, slides: true, quiz: true },
  } = {},
) {
  const out = path.join(MEDIA, unitId);
  fs.mkdirSync(out, { recursive: true });
  if (wait) {
    const types = [];
    if (kinds.video) types.push("video");
    if (kinds.audio) types.push("audio");
    if (kinds.slides) types.push("slide_deck");
    if (kinds.quiz) types.push("quiz");
    waitStudioReady(nb, {
      maxWaitSec: 1200,
      pollSec: 40,
      // 対象タイプだけ待つ（旧ジョブの unknown に捕まらない）
      types: types.length ? types : null,
    });
  }

  const jobs = [];
  if (kinds.audio) {
    jobs.push(["audio", path.join(out, "nlm_audio.m4a")]);
  }
  if (kinds.video) {
    jobs.push(["video", path.join(out, "nlm_video.mp4")]);
  }
  if (kinds.slides) {
    jobs.push(["slide-deck", path.join(out, "slides.pdf")]);
  }
  if (DRY) {
    for (const [type, dest] of jobs) {
      sh(`nlm download ${type} ${nb} --output ${JSON.stringify(dest)}`);
    }
    if (kinds.quiz) {
      const quizOut = path.join(out, "nlm_quiz.json");
      sh(`nlm download quiz ${nb} --output ${JSON.stringify(quizOut)} --format json`);
    }
    return;
  }
  for (const [type, dest] of jobs) {
    // retry download a few times (artifact may still be finishing)
    let ok = false;
    for (let attempt = 1; attempt <= 4; attempt++) {
      const r = sh(`nlm download ${type} ${nb} --output ${JSON.stringify(dest)}`, {
        timeout: 300_000,
      });
      if (r.status === 0 && fs.existsSync(dest) && fs.statSync(dest).size > 1000) {
        console.log("downloaded", dest, fs.statSync(dest).size);
        if (type === "audio") fs.copyFileSync(dest, path.join(out, "audio.m4a"));
        if (type === "video") fs.copyFileSync(dest, path.join(out, "video.mp4"));
        ok = true;
        break;
      }
      console.warn(`download retry ${type} attempt ${attempt}`);
      sleep(45_000);
    }
    if (!ok) console.warn("download fail/skip", type);
  }
  // quiz optional
  if (kinds.quiz) {
    const quizOut = path.join(out, "nlm_quiz.json");
    sh(`nlm download quiz ${nb} --output ${JSON.stringify(quizOut)} --format json 2>/dev/null || true`);
    if (fs.existsSync(quizOut) && fs.statSync(quizOut).size > 20) {
      fs.copyFileSync(quizOut, path.join(out, "quiz.json"));
    }
  }

  // manifest
  const files = fs.readdirSync(out).filter((f) => !f.startsWith("."));
  let previousManifest = {};
  try {
    previousManifest = JSON.parse(
      fs.readFileSync(path.join(out, "manifest.json"), "utf8"),
    );
  } catch {
    /* first generation */
  }
  const man = {
    unit_id: unitId,
    brand: "Medvance",
    source: "notebooklm-unit-factory",
    notebook_id: nb,
    alignment: "lesson+storyboard primary; research secondary",
    files,
    audio: files.includes("audio.m4a") || files.includes("nlm_audio.m4a") ? "audio.m4a" : null,
    video: files.includes("video.mp4") || files.includes("nlm_video.mp4") ? "video.mp4" : null,
    slides_pdf: files.includes("slides.pdf") ? "slides.pdf" : null,
    lesson_pdf: files.includes("lesson.pdf") ? "lesson.pdf" : null,
    updated_at: new Date().toISOString(),
  };
  if (previousManifest.public_urls) man.public_urls = previousManifest.public_urls;
  fs.writeFileSync(path.join(out, "manifest.json"), JSON.stringify(man, null, 2));
}

function sleep(ms) {
  if (DRY) return;
  spawnSync("sleep", [String(Math.ceil(ms / 1000))]);
}

function resolveKinds(options) {
  const only = options.audioOnly
    ? { audio: true, video: false, slides: false, quiz: false }
    : options.videoOnly
      ? { audio: false, video: true, slides: false, quiz: false }
      : { audio: true, video: true, slides: true, quiz: true };

  return {
    audio: only.audio && process.env.NLM_SKIP_AUDIO !== "1",
    video: only.video && process.env.NLM_SKIP_VIDEO !== "1",
    slides: only.slides && process.env.NLM_SKIP_SLIDES !== "1",
    quiz: only.quiz && process.env.NLM_SKIP_QUIZ !== "1",
  };
}

function processUnit(unitId, reg, options) {
  const loc = findUnit(unitId);
  if (!loc) {
    console.warn("unit not found", unitId);
    return;
  }
  if (!fs.existsSync(loc.lessonPath)) {
    console.warn("no lesson", unitId);
    return;
  }

  console.log("\n========", unitId, loc.unit.title, "========");
  const title = `Medvance ${unitId} ${loc.unit.title}`.slice(0, 80);
  const nb = ensureNotebook(reg, unitId, title);
  reg.units[unitId].subject = loc.subject;
  reg.units[unitId].subjectDir = loc.subjectDir;
  saveRegistry(reg);

  const kinds = resolveKinds(options);
  if (kinds.quiz && loc.quizPath && fs.existsSync(loc.quizPath)) {
    kinds.quiz = false;
    console.log("skip NLM quiz: canonical curriculum quiz exists", loc.quizPath);
  }

  if (options.downloadOnly) {
    downloadArtifacts(nb, unitId, { kinds });
    return;
  }

  if (!options.reuseSources) addCanonicalSources(nb, loc);

  // 動画品質用: 画コンテをソースに追加
  if (kinds.video) {
    const directorPath = writeVideoDirectorSource(loc);
    sh(`nlm source add ${nb} --file ${JSON.stringify(directorPath)} --wait`);
  }

  if (!options.noResearch) {
    try {
      runDeepResearch(nb, loc);
      reg.units[unitId].research_at = new Date().toISOString();
      saveRegistry(reg);
    } catch (e) {
      console.warn("research error", e.message);
    }
    sleep(5000);
  }

  const focus = focusPrompt(loc);
  if (kinds.video) {
    kinds._videoFocus = videoFocusPrompt(loc);
  }
  createStudio(nb, focus, kinds);
  reg.units[unitId].studio_requested_at = new Date().toISOString();
  reg.units[unitId].focus = focus.slice(0, 200);
  if (kinds._videoFocus) {
    reg.units[unitId].video_focus = kinds._videoFocus.slice(0, 240);
    reg.units[unitId].video_quality = "hq-whiteboard-v1";
  }
  saveRegistry(reg);

  // 生成完了を待ってからダウンロード（早すぎると失敗する）
  sleep(60_000);
  downloadArtifacts(nb, unitId, { wait: true, kinds });
  reg.units[unitId].last_run_at = new Date().toISOString();
  saveRegistry(reg);

  // rate limit pause between units（動画制限が厳しい）
  const configuredCooldown = Number.parseInt(
    process.env.NLM_UNIT_COOLDOWN_SECONDS || "",
    10,
  );
  const cooldownSeconds = Number.isFinite(configuredCooldown)
    ? configuredCooldown
    : process.env.NLM_SKIP_VIDEO === "1"
      ? 60
      : 180;
  sleep(cooldownSeconds * 1000);
}

function resolveUnitIds() {
  if (flags.has("--subject")) {
    const i = args.indexOf("--subject");
    const subj = args[i + 1];
    let limit = Infinity;
    if (flags.has("--limit")) {
      limit = parseInt(args[args.indexOf("--limit") + 1], 10) || 3;
    }
    return listSubjectUnitIds(subj, limit);
  }
  if (positional.length) return positional;
  // default: 無料入口（NLM 未整備を優先して埋める）
  return [
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
}

function main() {
  const options = {
    noResearch: flags.has("--no-research"),
    downloadOnly: flags.has("--download-only"),
    audioOnly: flags.has("--audio-only"),
    videoOnly: flags.has("--video-only"),
    reuseSources: flags.has("--reuse-sources"),
  };
  if (options.audioOnly && options.videoOnly) {
    throw new Error("--audio-only and --video-only cannot be combined");
  }
  const ids = resolveUnitIds();
  console.log("factory units:", ids.length, ids.join(", "));
  console.log("options", options, "research_mode", process.env.NLM_RESEARCH_MODE || "deep");

  const reg = loadRegistry();
  for (const id of ids) {
    try {
      processUnit(id, reg, options);
    } catch (e) {
      console.error("FAIL", id, e.message);
      // continue next after pause
      sleep(60_000);
    }
  }
  console.log("done. registry →", REGISTRY);
}

main();
