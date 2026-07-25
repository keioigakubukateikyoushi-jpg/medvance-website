#!/usr/bin/env node
/**
 * 日次 NLM メディア生成ランナー
 *
 * - 進捗ボードを更新
 * - gate 合格かつメディア未完了の単元を優先キューから取得
 * - 1日の上限（ユニット数）まで parallel-queue / factory を回す
 * - rate limit を検知したらその日は打ち切り
 * - 日次ログと state を残し、組み込み可能な進捗を可視化
 *
 * Usage:
 *   node scripts/nlm-daily-runner.mjs
 *   NLM_DAILY_MAX_UNITS=8 NLM_PARALLEL=2 node scripts/nlm-daily-runner.mjs
 *   node scripts/nlm-daily-runner.mjs --dry-run
 *   node scripts/nlm-daily-runner.mjs --max 5
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
const MAX_UNITS = Math.max(
  1,
  parseInt(
    maxIdx >= 0 ? args[maxIdx + 1] : process.env.NLM_DAILY_MAX_UNITS || "10",
    10,
  ) || 10,
);
const PARALLEL = Math.max(1, parseInt(process.env.NLM_PARALLEL || "2", 10) || 2);
const STOP_AFTER_RATE_LIMITS = Math.max(
  1,
  parseInt(process.env.NLM_DAILY_STOP_RATE_HITS || "2", 10) || 2,
);

function log(...parts) {
  const line = `[${new Date().toISOString()}] ${parts.join(" ")}`;
  console.log(line);
  fs.appendFileSync(LOG, line + "\n");
}

function todayKey(d = new Date()) {
  // JST date string
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Tokyo",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(d);
}

function loadState() {
  if (!fs.existsSync(STATE_PATH)) {
    return { version: 1, days: {}, lastRun: null };
  }
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

function nextIds(limit) {
  if (!fs.existsSync(NEXT_PATH)) refreshBoard();
  const q = JSON.parse(fs.readFileSync(NEXT_PATH, "utf8"));
  return (q.ids || []).slice(0, limit);
}

function runQueue(ids) {
  if (!ids.length) {
    log("no jobs");
    return { ok: 0, fail: 0, limited: false, results: [] };
  }
  const listFile = path.join("/tmp", `nlm-daily-ids-${Date.now()}.txt`);
  fs.writeFileSync(listFile, ids.join("\n") + "\n");
  log("run parallel queue", ids.join(","));

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
          NLM_LIMIT_COOLDOWN_MS: process.env.NLM_LIMIT_COOLDOWN_MS || "300000",
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
      const limited = /rate limit|RESOURCE_EXHAUSTED|Rate limited|quota/i.test(out);
      const ends = [...out.matchAll(/END (\S+) code=(\d+) (\S+)( RATE_LIMIT)?/g)];
      let ok = 0;
      let fail = 0;
      const results = [];
      for (const m of ends) {
        const rec = {
          id: m[1],
          code: Number(m[2]),
          status: m[3],
          limited: Boolean(m[4]),
        };
        results.push(rec);
        if (rec.status === "pack_ok") ok++;
        else fail++;
      }
      // fallback count
      if (!ends.length) {
        if (code === 0) ok = ids.length;
        else fail = ids.length;
      }
      log("queue done", `code=${code}`, `ok=${ok}`, `fail=${fail}`, limited ? "RATE_LIMIT" : "");
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
    `- started: ${payload.started}`,
    `- finished: ${payload.finished}`,
    `- maxUnits: ${payload.maxUnits}`,
    `- parallel: ${payload.parallel}`,
    `- attempted: ${(payload.attempted || []).join(", ") || "—"}`,
    `- ok: ${payload.ok}`,
    `- fail: ${payload.fail}`,
    `- rateLimited: ${payload.rateLimited}`,
    `- dryRun: ${payload.dryRun}`,
    "",
    "## Results",
    "",
  ];
  for (const r of payload.results || []) {
    lines.push(`- \`${r.id}\` ${r.status || ""} code=${r.code}${r.limited ? " RATE_LIMIT" : ""}`);
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

async function main() {
  fs.appendFileSync(LOG, `\n==== daily runner ${new Date().toISOString()} ====\n`);
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
  refreshBoard();

  const already = new Set(dayState.attempted || []);
  const remainingBudget = Math.max(0, MAX_UNITS - (dayState.ok?.length || 0));
  // also count attempts that failed hard toward budget lightly: use max of ok+fail
  const used = (dayState.ok?.length || 0) + Math.floor((dayState.fail?.length || 0) / 2);
  const budget = Math.max(0, MAX_UNITS - used);

  log("day", day, "budget", budget, "max", MAX_UNITS, "dry", DRY);

  if (budget <= 0) {
    log("daily budget exhausted — skip generation");
    refreshBoard();
    const inv = JSON.parse(fs.readFileSync(path.join(CONTENT, "media-inventory.json"), "utf8"));
    writeDailyReport(day, {
      started,
      finished: new Date().toISOString(),
      maxUnits: MAX_UNITS,
      parallel: PARALLEL,
      attempted: [],
      ok: 0,
      fail: 0,
      rateLimited: dayState.rateLimited,
      dryRun: DRY,
      results: [],
      totalsAfter: inv.totals,
      note: "budget_exhausted",
    });
    return;
  }

  let ids = nextIds(budget * 2).filter((id) => !already.has(id)).slice(0, budget);
  // If rate limited earlier today, only allow 1 retry unit
  if (dayState.rateLimited) {
    ids = ids.slice(0, 1);
    log("previous rate limit today → only 1 unit");
  }

  if (DRY) {
    log("DRY RUN would process", ids.join(", ") || "(none)");
    writeDailyReport(day, {
      started,
      finished: new Date().toISOString(),
      maxUnits: MAX_UNITS,
      parallel: PARALLEL,
      attempted: ids,
      ok: 0,
      fail: 0,
      rateLimited: false,
      dryRun: true,
      results: ids.map((id) => ({ id, status: "dry", code: 0 })),
      totalsAfter: JSON.parse(fs.readFileSync(path.join(CONTENT, "media-inventory.json"), "utf8"))
        .totals,
    });
    return;
  }

  if (!ids.length) {
    log("queue empty — curriculum may be blocking (need more full lessons)");
    writeDailyReport(day, {
      started,
      finished: new Date().toISOString(),
      maxUnits: MAX_UNITS,
      parallel: PARALLEL,
      attempted: [],
      ok: 0,
      fail: 0,
      rateLimited: false,
      dryRun: false,
      results: [],
      totalsAfter: JSON.parse(fs.readFileSync(path.join(CONTENT, "media-inventory.json"), "utf8"))
        .totals,
      note: "empty_queue",
    });
    return;
  }

  // Process in small chunks so we can stop on rate limit mid-day
  const chunkSize = Math.min(PARALLEL, 3);
  let ok = 0;
  let fail = 0;
  let rateLimited = false;
  const allResults = [];
  const attempted = [];

  for (let i = 0; i < ids.length; ) {
    if (rateLimited) break;
    const chunk = ids.slice(i, i + chunkSize);
    i += chunk.length;
    const res = await runQueue(chunk);
    attempted.push(...chunk);
    dayState.attempted = [...new Set([...(dayState.attempted || []), ...chunk])];
    ok += res.ok;
    fail += res.fail;
    allResults.push(...(res.results || []));
    for (const r of res.results || []) {
      if (r.status === "pack_ok") dayState.ok = [...new Set([...(dayState.ok || []), r.id])];
      else dayState.fail = [...new Set([...(dayState.fail || []), r.id])];
    }
    if (res.limited) {
      rateLimited = true;
      dayState.rateLimited = true;
      dayState.rateLimitHits = (dayState.rateLimitHits || 0) + 1;
      log("stopping for today due to rate limit");
      break;
    }
    // brief pause between chunks
    if (i < ids.length) {
      await new Promise((r) => setTimeout(r, 15_000));
    }
  }

  dayState.runs = (dayState.runs || 0) + 1;
  dayState.lastFinished = new Date().toISOString();
  state.lastRun = dayState.lastFinished;
  saveState(state);

  refreshBoard();
  const inv = JSON.parse(fs.readFileSync(path.join(CONTENT, "media-inventory.json"), "utf8"));
  writeDailyReport(day, {
    started,
    finished: new Date().toISOString(),
    maxUnits: MAX_UNITS,
    parallel: PARALLEL,
    attempted,
    ok,
    fail,
    rateLimited,
    dryRun: false,
    results: allResults,
    totalsAfter: inv.totals,
  });

  // Copy board snapshot into daily folder
  const board = path.join(PROGRESS_DIR, "BOARD.md");
  if (fs.existsSync(board)) {
    fs.copyFileSync(board, path.join(DAILY_DIR, `${day}-board.md`));
  }

  log("daily summary", JSON.stringify({ day, ok, fail, rateLimited, totals: inv.totals }));
}

main().catch((e) => {
  console.error(e);
  fs.appendFileSync(LOG, String(e) + "\n");
  process.exit(1);
});
