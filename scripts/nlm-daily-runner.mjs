#!/usr/bin/env node
/**
 * 日次 NLM メディア生成ランナー
 *
 * 方針（デフォルト）:
 *   **エラー（rate limit / quota）が出るまで回す** ＝ その日の実用限界まで使う
 *   固定「1日10本」で止めない。
 *
 * - 進捗ボード更新 → gate合格・メディア未完を優先キュー化
 * - 1〜数本ずつ生成し、RESOURCE_EXHAUSTED / rate limit で当日終了
 * - 暴走防止の安全上限のみ（既定 80 単元/日、通常は error で先に止まる）
 * - 日次ログ + state で「どこまで作れたか」を残す
 *
 * Usage:
 *   node scripts/nlm-daily-runner.mjs              # until-error（推奨）
 *   node scripts/nlm-daily-runner.mjs --dry-run
 *   node scripts/nlm-daily-runner.mjs --max 5      # 強制キャップ（テスト用）
 *   NLM_PARALLEL=2 node scripts/nlm-daily-runner.mjs
 *   NLM_DAILY_MODE=capped NLM_DAILY_MAX_UNITS=10 …  # 旧: 本数上限モード
 *
 * LaunchAgent: scripts/install-nlm-daily-launchd.sh
 */
import { spawn, spawnSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const CONTENT = path.join(ROOT, "content/academy");
const PROGRESS_DIR = path.join(ROOT, "docs/curriculum/progress");
const DAILY_DIR = path.join(PROGRESS_DIR, "daily");
const STATE_PATH = path.join(CONTENT, "nlm-daily-state.json");
const NEXT_PATH = path.join(CONTENT, "nlm-queue-next.json");
const LOG = process.env.NLM_DAILY_LOG || "/tmp/nlm-daily-runner.log";

const args = process.argv.slice(2);
const DRY = args.includes("--dry-run");
const maxIdx = args.indexOf("--max");

/** until-error（既定）| capped（本数で止める） */
const MODE = (
  process.env.NLM_DAILY_MODE ||
  (maxIdx >= 0 ? "capped" : "until-error")
).toLowerCase();

/** capped 時の上限 / until-error 時は safety のみ */
const MAX_UNITS = Math.max(
  1,
  parseInt(
    maxIdx >= 0 ? args[maxIdx + 1] : process.env.NLM_DAILY_MAX_UNITS || "10",
    10,
  ) || 10,
);

/** 暴走防止（error 検知漏れ対策）。通常は rate limit の方が先に来る */
const SAFETY_MAX = Math.max(
  MAX_UNITS,
  parseInt(process.env.NLM_DAILY_SAFETY_MAX || "80", 10) || 80,
);

const PARALLEL = Math.max(1, parseInt(process.env.NLM_PARALLEL || "2", 10) || 2);
const CHUNK = Math.max(1, Math.min(PARALLEL, parseInt(process.env.NLM_DAILY_CHUNK || String(PARALLEL), 10) || PARALLEL));
const CHUNK_PAUSE_MS = Math.max(0, parseInt(process.env.NLM_DAILY_CHUNK_PAUSE_MS || "12000", 10) || 12_000);

const RATE_RE =
  /rate limit|RESOURCE_EXHAUSTED|Rate limited|quota|failed to create notebook|RESOURCE_EXHAUSTED|429|too many requests/i;

function log(...parts) {
  const line = `[${new Date().toISOString()}] ${parts.join(" ")}`;
  console.log(line);
  fs.appendFileSync(LOG, line + "\n");
}

function todayKey(d = new Date()) {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Tokyo",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(d);
}

function loadState() {
  if (!fs.existsSync(STATE_PATH)) return { version: 2, days: {}, lastRun: null };
  return JSON.parse(fs.readFileSync(STATE_PATH, "utf8"));
}

function saveState(state) {
  state.updated = new Date().toISOString();
  fs.writeFileSync(STATE_PATH, JSON.stringify(state, null, 2) + "\n");
}

function refreshBoard() {
  log("refresh progress board");
  const r = spawnSync("node", [path.join(ROOT, "scripts/academy-progress-board.mjs")], {
    cwd: ROOT,
    encoding: "utf8",
  });
  if (r.stdout) process.stdout.write(r.stdout);
  if (r.status !== 0) {
    log("board failed", r.stderr || "");
    throw new Error("academy-progress-board failed");
  }
}

function loadNextIds() {
  if (!fs.existsSync(NEXT_PATH)) refreshBoard();
  const q = JSON.parse(fs.readFileSync(NEXT_PATH, "utf8"));
  return q.ids || [];
}

function isRateLimitedOutput(out) {
  return RATE_RE.test(out || "");
}

function runQueue(ids) {
  if (!ids.length) {
    return Promise.resolve({ ok: 0, fail: 0, limited: false, results: [], out: "" });
  }
  const listFile = path.join("/tmp", `nlm-daily-ids-${Date.now()}.txt`);
  fs.writeFileSync(listFile, ids.join("\n") + "\n");
  log("run chunk", ids.join(","));

  return new Promise((resolve) => {
    const child = spawn(
      "node",
      [
        path.join(ROOT, "scripts/nlm-media-parallel-queue.mjs"),
        "--from-file",
        listFile,
        "--no-research",
        "--reuse-sources",
      ],
      {
        cwd: ROOT,
        env: {
          ...process.env,
          NLM_PARALLEL: String(PARALLEL),
          NLM_STAGGER_MS: process.env.NLM_STAGGER_MS || "8000",
          // until-error では長いクールダウンで枠を温存しつつ打ち切り判定を早く
          NLM_LIMIT_COOLDOWN_MS: process.env.NLM_LIMIT_COOLDOWN_MS || "60000",
          NLM_MEDIA_LOG: process.env.NLM_MEDIA_LOG || "/tmp/nlm-media-daily-child.log",
          NLM_VIDEO_FORMAT: process.env.NLM_VIDEO_FORMAT || "explainer",
          NLM_VIDEO_STYLE: process.env.NLM_VIDEO_STYLE || "whiteboard",
        },
        stdio: ["ignore", "pipe", "pipe"],
      },
    );
    let out = "";
    const onData = (buf) => {
      const t = buf.toString();
      out += t;
      process.stdout.write(t);
      fs.appendFileSync(LOG, t);
    };
    child.stdout.on("data", onData);
    child.stderr.on("data", onData);
    child.on("close", (code) => {
      const limited = isRateLimitedOutput(out);
      const ends = [...out.matchAll(/END (\S+) code=(\d+) (\S+)( RATE_LIMIT)?/g)];
      let ok = 0;
      let fail = 0;
      const results = [];
      for (const m of ends) {
        const rec = {
          id: m[1],
          code: Number(m[2]),
          status: m[3],
          limited: Boolean(m[4]) || limited,
        };
        results.push(rec);
        if (rec.status === "pack_ok") ok++;
        else fail++;
      }
      if (!ends.length) {
        if (limited) fail = ids.length;
        else if (code === 0) ok = ids.length;
        else fail = ids.length;
      }
      log(
        "chunk done",
        `code=${code}`,
        `ok=${ok}`,
        `fail=${fail}`,
        limited ? "RATE_LIMIT_OR_QUOTA" : "",
      );
      resolve({ ok, fail, limited, code, results, out });
    });
  });
}

function writeDailyReport(day, payload) {
  fs.mkdirSync(DAILY_DIR, { recursive: true });
  const p = path.join(DAILY_DIR, `${day}.md`);
  const lines = [
    `# NLM Daily ${day}`,
    "",
    `- mode: **${payload.mode}**（until-error = エラーまで回す）`,
    `- started: ${payload.started}`,
    `- finished: ${payload.finished}`,
    `- safetyMax: ${payload.safetyMax}`,
    `- hardMax: ${payload.hardMax ?? "—"}`,
    `- parallel: ${payload.parallel}`,
    `- attempted: ${(payload.attempted || []).join(", ") || "—"}`,
    `- ok: ${payload.ok}`,
    `- fail: ${payload.fail}`,
    `- stoppedReason: ${payload.stoppedReason || "—"}`,
    `- rateLimited: ${payload.rateLimited}`,
    `- dryRun: ${payload.dryRun}`,
    "",
    "## Results",
    "",
  ];
  for (const r of payload.results || []) {
    lines.push(
      `- \`${r.id}\` ${r.status || ""} code=${r.code}${r.limited ? " RATE_LIMIT" : ""}`,
    );
  }
  lines.push("");
  lines.push("## Totals after run");
  lines.push("");
  lines.push("```json");
  lines.push(JSON.stringify(payload.totalsAfter || {}, null, 2));
  lines.push("```");
  lines.push("");
  fs.writeFileSync(p, lines.join("\n") + "\n");
  log("wrote", p);
  return p;
}

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

async function main() {
  fs.appendFileSync(LOG, `\n==== daily runner ${new Date().toISOString()} mode=${MODE} ====\n`);
  const day = todayKey();
  const state = loadState();
  state.days[day] ??= {
    date: day,
    attempted: [],
    ok: [],
    fail: [],
    rateLimited: false,
    runs: 0,
  };
  const dayState = state.days[day];
  const started = new Date().toISOString();

  // すでに本日 rate limit 済み → 再実行で枠を焼かない（明示 --force-retry で解除可）
  if (dayState.rateLimited && !args.includes("--force-retry") && !DRY) {
    log("already rate-limited today — stop (use --force-retry to probe again)");
    refreshBoard();
    const inv = JSON.parse(fs.readFileSync(path.join(CONTENT, "media-inventory.json"), "utf8"));
    writeDailyReport(day, {
      started,
      finished: new Date().toISOString(),
      mode: MODE,
      safetyMax: SAFETY_MAX,
      hardMax: MODE === "capped" ? MAX_UNITS : null,
      parallel: PARALLEL,
      attempted: [],
      ok: 0,
      fail: 0,
      rateLimited: true,
      dryRun: false,
      stoppedReason: "already_rate_limited_today",
      results: [],
      totalsAfter: inv.totals,
    });
    return;
  }

  refreshBoard();

  const already = new Set(dayState.attempted || []);
  const hardCap = MODE === "capped" ? MAX_UNITS : SAFETY_MAX;
  const doneCount = (dayState.ok?.length || 0) + (dayState.fail?.length || 0);
  let remainingCap = Math.max(0, hardCap - doneCount);

  log(
    "day",
    day,
    "mode",
    MODE,
    "remainingCap",
    remainingCap,
    MODE === "until-error" ? "(safety only; stop on error)" : "(hard max)",
    "dry",
    DRY,
  );

  if (remainingCap <= 0) {
    log("safety/hard cap already used today");
    refreshBoard();
    const inv = JSON.parse(fs.readFileSync(path.join(CONTENT, "media-inventory.json"), "utf8"));
    writeDailyReport(day, {
      started,
      finished: new Date().toISOString(),
      mode: MODE,
      safetyMax: SAFETY_MAX,
      hardMax: MODE === "capped" ? MAX_UNITS : null,
      parallel: PARALLEL,
      attempted: [],
      ok: 0,
      fail: 0,
      rateLimited: dayState.rateLimited,
      dryRun: DRY,
      stoppedReason: "cap_exhausted",
      results: [],
      totalsAfter: inv.totals,
    });
    return;
  }

  let queue = loadNextIds().filter((id) => !already.has(id));
  if (DRY) {
    const preview = queue.slice(0, Math.min(remainingCap, MODE === "capped" ? MAX_UNITS : 30));
    log(
      "DRY RUN until-error would keep going past preview; first batch:",
      preview.join(", ") || "(none)",
    );
    log("queue remaining after filter:", queue.length);
    writeDailyReport(day, {
      started,
      finished: new Date().toISOString(),
      mode: MODE,
      safetyMax: SAFETY_MAX,
      hardMax: MODE === "capped" ? MAX_UNITS : null,
      parallel: PARALLEL,
      attempted: preview,
      ok: 0,
      fail: 0,
      rateLimited: false,
      dryRun: true,
      stoppedReason: "dry_run",
      results: preview.map((id) => ({ id, status: "dry", code: 0 })),
      totalsAfter: JSON.parse(fs.readFileSync(path.join(CONTENT, "media-inventory.json"), "utf8"))
        .totals,
    });
    return;
  }

  if (!queue.length) {
    log("queue empty — need more curriculum full units");
    writeDailyReport(day, {
      started,
      finished: new Date().toISOString(),
      mode: MODE,
      safetyMax: SAFETY_MAX,
      hardMax: MODE === "capped" ? MAX_UNITS : null,
      parallel: PARALLEL,
      attempted: [],
      ok: 0,
      fail: 0,
      rateLimited: false,
      dryRun: false,
      stoppedReason: "empty_queue",
      results: [],
      totalsAfter: JSON.parse(fs.readFileSync(path.join(CONTENT, "media-inventory.json"), "utf8"))
        .totals,
    });
    return;
  }

  let ok = 0;
  let fail = 0;
  let rateLimited = false;
  let stoppedReason = "completed_queue";
  const allResults = [];
  const attempted = [];
  let consecutiveNonLimitFails = 0;

  while (queue.length > 0 && remainingCap > 0) {
    const chunk = queue.slice(0, Math.min(CHUNK, remainingCap));
    queue = queue.slice(chunk.length);

    const res = await runQueue(chunk);
    attempted.push(...chunk);
    dayState.attempted = [...new Set([...(dayState.attempted || []), ...chunk])];
    remainingCap -= chunk.length;
    ok += res.ok;
    fail += res.fail;
    allResults.push(...(res.results || []));

    for (const r of res.results || []) {
      if (r.status === "pack_ok") {
        dayState.ok = [...new Set([...(dayState.ok || []), r.id])];
        consecutiveNonLimitFails = 0;
      } else {
        dayState.fail = [...new Set([...(dayState.fail || []), r.id])];
      }
    }

    if (res.limited) {
      rateLimited = true;
      dayState.rateLimited = true;
      dayState.rateLimitHits = (dayState.rateLimitHits || 0) + 1;
      stoppedReason = "rate_limit_or_quota";
      log("STOP: rate limit / quota — 今日の限界とみなして終了");
      break;
    }

    // 連続で pack 失敗が続き、かつ出力に limit が無い場合も打ち切り（無限リトライ防止）
    if (res.fail > 0 && res.ok === 0) {
      consecutiveNonLimitFails++;
      if (consecutiveNonLimitFails >= 3) {
        stoppedReason = "consecutive_failures";
        log("STOP: 3 consecutive chunks failed without pack_ok (not necessarily quota)");
        break;
      }
    } else if (res.ok > 0) {
      consecutiveNonLimitFails = 0;
    }

    if (remainingCap <= 0) {
      stoppedReason = MODE === "capped" ? "hard_max" : "safety_max";
      log("STOP:", stoppedReason);
      break;
    }

    // キュー再読込（途中で別プロセスが完了させている場合）
    if (queue.length < CHUNK) {
      refreshBoard();
      const again = new Set(dayState.attempted || []);
      queue = loadNextIds().filter((id) => !again.has(id));
      if (!queue.length && !rateLimited) {
        stoppedReason = "completed_queue";
        log("queue drained");
        break;
      }
    }

    if (queue.length > 0 && CHUNK_PAUSE_MS > 0) {
      await sleep(CHUNK_PAUSE_MS);
    }
  }

  dayState.runs = (dayState.runs || 0) + 1;
  dayState.lastFinished = new Date().toISOString();
  dayState.stoppedReason = stoppedReason;
  state.lastRun = dayState.lastFinished;
  saveState(state);

  refreshBoard();
  const inv = JSON.parse(fs.readFileSync(path.join(CONTENT, "media-inventory.json"), "utf8"));
  writeDailyReport(day, {
    started,
    finished: new Date().toISOString(),
    mode: MODE,
    safetyMax: SAFETY_MAX,
    hardMax: MODE === "capped" ? MAX_UNITS : null,
    parallel: PARALLEL,
    attempted,
    ok,
    fail,
    rateLimited,
    dryRun: false,
    stoppedReason,
    results: allResults,
    totalsAfter: inv.totals,
  });

  const board = path.join(PROGRESS_DIR, "BOARD.md");
  if (fs.existsSync(board)) {
    fs.copyFileSync(board, path.join(DAILY_DIR, `${day}-board.md`));
  }

  log(
    "daily summary",
    JSON.stringify({ day, mode: MODE, ok, fail, rateLimited, stoppedReason, totals: inv.totals }),
  );
}

main().catch((e) => {
  console.error(e);
  fs.appendFileSync(LOG, String(e) + "\n" + (e.stack || "") + "\n");
  process.exit(1);
});
