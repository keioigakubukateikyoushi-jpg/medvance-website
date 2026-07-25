#!/usr/bin/env node
/**
 * カリキュラム本文 × NLMメディア の進捗ボードを生成する。
 *
 * Usage:
 *   node scripts/academy-progress-board.mjs
 *   node scripts/academy-progress-board.mjs --json-only
 *
 * 出力:
 *   docs/curriculum/progress/BOARD.md
 *   content/academy/media-inventory.json
 *   content/academy/nlm-queue-next.json  （次に回すべき unit id）
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { createRequire } from "node:module";

const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const CONTENT = path.join(ROOT, "content/academy");
const MEDIA = path.join(ROOT, "public/academy/media");
const OUT_DIR = path.join(ROOT, "docs/curriculum/progress");
const INV_PATH = path.join(CONTENT, "media-inventory.json");
const NEXT_PATH = path.join(CONTENT, "nlm-queue-next.json");

const require = createRequire(import.meta.url);

// Reuse quality-gate standards by spawning node -e is heavy; inline thin audit
function listSubjectDirs() {
  const out = [];
  for (const ent of fs.readdirSync(CONTENT, { withFileTypes: true })) {
    if (!ent.isDirectory() || ent.name.startsWith(".") || ent.name === "premium") continue;
    const idx = path.join(CONTENT, ent.name, "index.json");
    if (fs.existsSync(idx)) out.push(ent.name);
    if (ent.name === "advanced" || ent.name === "elite") {
      for (const sub of fs.readdirSync(path.join(CONTENT, ent.name), { withFileTypes: true })) {
        if (!sub.isDirectory()) continue;
        const p = path.join(CONTENT, ent.name, sub.name, "index.json");
        if (fs.existsSync(p)) out.push(`${ent.name}/${sub.name}`);
      }
    }
  }
  return out.sort();
}

function mediaStatus(unitId) {
  const d = path.join(MEDIA, unitId);
  if (!fs.existsSync(d)) {
    return { audio: false, slides: false, video: false, pack: "none", bytes: 0 };
  }
  const files = fs.readdirSync(d);
  const sizeOf = (pred) => {
    let s = 0;
    for (const f of files) {
      if (!pred(f)) continue;
      try {
        s += fs.statSync(path.join(d, f)).size;
      } catch {
        /* ignore */
      }
    }
    return s;
  };
  const audio =
    files.some((x) => /^(audio|nlm_audio)/.test(x) && /\.(m4a|mp3)$/i.test(x)) &&
    sizeOf((x) => /audio|nlm_audio/.test(x) && /\.(m4a|mp3)$/i.test(x)) > 100_000;
  const slides =
    files.some((x) => /slides\.pdf|nlm_slides/.test(x)) &&
    sizeOf((x) => /slides\.pdf|nlm_slides/.test(x)) > 50_000;
  let video = false;
  let videoBytes = 0;
  for (const n of ["nlm_video.mp4", "video.mp4", "video_nlm.mp4"]) {
    const p = path.join(d, n);
    if (fs.existsSync(p)) {
      const st = fs.statSync(p);
      videoBytes = Math.max(videoBytes, st.size);
      if (st.size > 2_000_000) video = true;
    }
  }
  const bytes = sizeOf(() => true);
  let pack = "none";
  if (audio && slides && video) pack = "complete";
  else if (audio && slides) pack = "audio_slides";
  else if (audio || slides || videoBytes > 0) pack = "partial";
  return { audio, slides, video, pack, bytes, videoBytes };
}

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

function lessonGateLite(subjectId, unit) {
  const mdPath = path.join(CONTENT, subjectId, unit.file || `lessons/${unit.id}.md`);
  if (!fs.existsSync(mdPath)) return { pass: false, chars: 0, fail: ["no_lesson"] };
  const md = fs.readFileSync(mdPath, "utf8");
  const chars = bodyChars(md);
  const fail = [];
  if (chars < 3000) fail.push(`chars ${chars}`);
  if (!/###\s*解答/.test(md)) fail.push("no_solution");
  // 演習 (1)(2)(3)
  const drillSection = md.match(/##\s*演習[\s\S]*?(?=##\s|$)/);
  const drills = drillSection ? (drillSection[0].match(/^\(\d+\)/gm) || []).length : 0;
  if (drills < 3) fail.push(`drills ${drills}`);
  const quizPath = unit.quiz ? path.join(CONTENT, subjectId, unit.quiz) : null;
  if (!quizPath || !fs.existsSync(quizPath)) fail.push("no_quiz");
  else {
    try {
      const q = JSON.parse(fs.readFileSync(quizPath, "utf8"));
      if ((q.questions || []).length < 5) fail.push("quiz_short");
    } catch {
      fail.push("quiz_bad");
    }
  }
  // status:full は信頼しつつ、極端に薄い本文は不合格
  if (unit.status === "full" && chars >= 3000 && !fail.includes("no_lesson") && !fail.includes("no_quiz")) {
    return { pass: true, chars, fail: [], statusFull: true };
  }
  return { pass: fail.length === 0, chars, fail, statusFull: unit.status === "full" };
}

function build() {
  const subjects = listSubjectDirs();
  const units = [];
  for (const sid of subjects) {
    const idx = JSON.parse(fs.readFileSync(path.join(CONTENT, sid, "index.json"), "utf8"));
    for (const u of idx.units || []) {
      const gate = lessonGateLite(sid, u);
      const media = mediaStatus(u.id);
      let phase = "curriculum_blocked";
      if (gate.pass && media.pack === "complete") phase = "ready_integrated";
      else if (gate.pass && media.pack === "audio_slides") phase = "nlm_video_wait";
      else if (gate.pass && media.pack === "partial") phase = "nlm_partial";
      else if (gate.pass) phase = "nlm_wait";
      else if (media.pack !== "none") phase = "media_without_curriculum";
      units.push({
        id: u.id,
        subjectId: sid,
        subject: idx.subject || sid,
        chapter: u.chapter || "",
        title: u.title || "",
        status: u.status || "",
        gatePass: gate.pass,
        gateChars: gate.chars,
        gateFail: gate.fail || [],
        media: media.pack,
        mediaBytes: media.bytes,
        hasVideo: media.video,
        hasAudio: media.audio,
        hasSlides: media.slides,
        phase,
      });
    }
  }

  const bySubject = {};
  const phaseCount = {};
  for (const u of units) {
    bySubject[u.subjectId] ??= {
      subject: u.subject,
      total: 0,
      gate: 0,
      nlm_wait: 0,
      nlm_partial: 0,
      nlm_video_wait: 0,
      ready: 0,
      blocked: 0,
    };
    const s = bySubject[u.subjectId];
    s.total++;
    if (u.gatePass) s.gate++;
    if (u.phase === "nlm_wait") s.nlm_wait++;
    if (u.phase === "nlm_partial") s.nlm_partial++;
    if (u.phase === "nlm_video_wait") s.nlm_video_wait++;
    if (u.phase === "ready_integrated") s.ready++;
    if (u.phase === "curriculum_blocked") s.blocked++;
    phaseCount[u.phase] = (phaseCount[u.phase] || 0) + 1;
  }

  // Next queue: gate pass, not complete media
  // Priority: 英 → 数 → 理 → その他（無料未完は各トラック先頭で優遇）
  const FREE = new Set([
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
  ]);

  /** @param {{ subjectId: string, id: string }} u */
  function trackRank(u) {
    const s = u.subjectId;
    const id = u.id;
    // 英語
    if (
      s === "english-exam" ||
      s === "advanced/english" ||
      s === "elite/english" ||
      /^ME-EN-/.test(id) ||
      /^ADV-EN/.test(id) ||
      /^ELI-E/.test(id)
    ) {
      return 1;
    }
    // 数学
    if (
      /math/i.test(s) ||
      /^ME-M\d/.test(id) ||
      /^ME-MA-/.test(id) ||
      /^ME-MB-/.test(id) ||
      /^ADV-M/.test(id) ||
      /^ELI-M/.test(id)
    ) {
      return 2;
    }
    // 理科
    if (
      s === "physics-exam" ||
      s === "chemistry-exam" ||
      s === "biology-exam" ||
      /^ME-PH-/.test(id) ||
      /^ME-CH-/.test(id) ||
      /^ME-BI-/.test(id)
    ) {
      return 3;
    }
    return 9;
  }

  /** subject order within track */
  function subjectRank(sid) {
    const order = [
      "english-exam",
      "advanced/english",
      "elite/english",
      "math1-exam",
      "mathA-exam",
      "math2-exam",
      "mathB-exam",
      "math3-exam",
      "advanced/math1",
      "advanced/mathA",
      "advanced/math2",
      "elite/math",
      "physics-exam",
      "chemistry-exam",
      "biology-exam",
    ];
    const i = order.indexOf(sid);
    return i === -1 ? 50 : i;
  }

  const nextQueue = units
    .filter((u) => u.gatePass && u.media !== "complete")
    .sort((a, b) => {
      const track = trackRank(a) - trackRank(b);
      if (track) return track;
      const freeA = FREE.has(a.id) ? 0 : 1;
      const freeB = FREE.has(b.id) ? 0 : 1;
      if (freeA !== freeB) return freeA - freeB;
      // 動画待ちを同トラック内で先に
      const phasePri = (p) =>
        p === "nlm_video_wait" ? 0 : p === "nlm_partial" ? 1 : p === "nlm_wait" ? 2 : 3;
      const ph = phasePri(a.phase) - phasePri(b.phase);
      if (ph) return ph;
      const sub = subjectRank(a.subjectId) - subjectRank(b.subjectId);
      if (sub) return sub;
      return a.id.localeCompare(b.id, "en", { numeric: true });
    })
    .map((u) => u.id);

  const inventory = {
    generatedAt: new Date().toISOString(),
    totals: {
      units: units.length,
      gatePass: units.filter((u) => u.gatePass).length,
      mediaComplete: units.filter((u) => u.media === "complete").length,
      nlmWait: units.filter((u) => u.phase === "nlm_wait").length,
      readyIntegrated: units.filter((u) => u.phase === "ready_integrated").length,
      curriculumBlocked: units.filter((u) => u.phase === "curriculum_blocked").length,
    },
    phaseCount,
    bySubject,
    nextQueue,
    units,
  };

  fs.mkdirSync(OUT_DIR, { recursive: true });
  fs.writeFileSync(INV_PATH, JSON.stringify(inventory, null, 2) + "\n");
  fs.writeFileSync(
    NEXT_PATH,
    JSON.stringify(
      {
        generatedAt: inventory.generatedAt,
        count: nextQueue.length,
        ids: nextQueue,
        note: "gate合格かつメディア未完了。nlm-daily-runner / parallel-queue が消費する。",
      },
      null,
      2,
    ) + "\n",
  );

  const lines = [];
  lines.push("# Academy Progress Board");
  lines.push("");
  lines.push(`生成: ${inventory.generatedAt}`);
  lines.push("");
  lines.push("## 全体");
  lines.push("");
  lines.push("| 指標 | 数 |");
  lines.push("|---|---:|");
  lines.push(`| 単元総数 | ${inventory.totals.units} |`);
  lines.push(`| 本文 gate 合格 | ${inventory.totals.gatePass} |`);
  lines.push(`| メディア complete | ${inventory.totals.mediaComplete} |`);
  lines.push(`| **NLM 待ち**（本文OK・メディアなし） | **${inventory.totals.nlmWait}** |`);
  lines.push(`| 本文ブロック（gate未） | ${inventory.totals.curriculumBlocked} |`);
  lines.push(`| 統合可能 ready | ${inventory.totals.readyIntegrated} |`);
  lines.push("");
  lines.push("### フェーズ凡例");
  lines.push("");
  lines.push("| phase | 意味 |");
  lines.push("|---|---|");
  lines.push("| curriculum_blocked | 本文が quality 未達。先にカリキュラム |");
  lines.push("| nlm_wait | 本文OK。音声・動画・スライド未。**NLMキュー対象** |");
  lines.push("| nlm_partial / nlm_video_wait | 一部メディアあり。動画など不足 |");
  lines.push("| ready_integrated | 本文+メディア完了 |");
  lines.push("");
  lines.push("## 科目別");
  lines.push("");
  lines.push("| 科目 | 総数 | gate | NLM待ち | partial | ready | 本文ブロック |");
  lines.push("|---|---:|---:|---:|---:|---:|---:|");
  for (const [sid, s] of Object.entries(bySubject).sort((a, b) => a[0].localeCompare(b[0]))) {
    lines.push(
      `| ${sid} | ${s.total} | ${s.gate} | ${s.nlm_wait} | ${s.nlm_partial + s.nlm_video_wait} | ${s.ready} | ${s.blocked} |`,
    );
  }
  lines.push("");
  lines.push("## 次に NLM へ回すキュー（先頭40）");
  lines.push("");
  for (const id of nextQueue.slice(0, 40)) {
    const u = units.find((x) => x.id === id);
    lines.push(`- \`${id}\` (${u.subjectId}) media=${u.media} phase=${u.phase}`);
  }
  if (nextQueue.length > 40) lines.push(`- … 他 ${nextQueue.length - 40} 件（\`content/academy/nlm-queue-next.json\`）`);
  lines.push("");
  lines.push("## 運用");
  lines.push("");
  lines.push("```bash");
  lines.push("# 進捗更新");
  lines.push("node scripts/academy-progress-board.mjs");
  lines.push("# 日次：上限まで自動生成");
  lines.push("node scripts/nlm-daily-runner.mjs");
  lines.push("# LaunchAgent インストール（Mac）");
  lines.push("bash scripts/install-nlm-daily-launchd.sh");
  lines.push("```");
  lines.push("");
  lines.push("詳細: `docs/curriculum/DAILY_NLM_PIPELINE.md`");
  lines.push("");

  const boardPath = path.join(OUT_DIR, "BOARD.md");
  fs.writeFileSync(boardPath, lines.join("\n") + "\n");
  console.log("wrote", boardPath);
  console.log("wrote", INV_PATH);
  console.log("wrote", NEXT_PATH);
  console.log(
    JSON.stringify(
      {
        totals: inventory.totals,
        nextQueueHead: nextQueue.slice(0, 10),
      },
      null,
      2,
    ),
  );
  return inventory;
}

const jsonOnly = process.argv.includes("--json-only");
const inv = build();
if (jsonOnly) {
  // already wrote files
}
