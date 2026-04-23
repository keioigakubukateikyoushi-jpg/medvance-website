/**
 * 既存のNotionアクセス解析DBを再同期してPageSpeedの0点を解消する。
 *
 * 動作モード:
 *   1. 自動検出（推奨）:
 *        node scripts/backfill-analytics.mjs
 *      → Notion DBの全レコードの日付を取り込み、各日について --force --no-weekly で再同期
 *   2. 明示範囲:
 *        node scripts/backfill-analytics.mjs --from 2026-03-21 --to 2026-04-22
 *
 * オプション:
 *   --only-zero   PageSpeed_モバイル が 0 または 未設定 のレコードのみ対象
 *   --dry-run     実際には同期せず、対象日の一覧だけ出力
 *
 * 注意:
 *   - PageSpeed Insights は "現在の" サイト性能しか返せないため、過去日付にも
 *     測定当日の値が記録される（これはユーザー承知のうえ）。
 *   - GA4 / Search Console は日付指定で過去データを取得するため正確。
 */

import { spawn } from "node:child_process";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname    = dirname(fileURLToPath(import.meta.url));
const SYNC_SCRIPT  = join(__dirname, "sync-analytics.mjs");
const NOTION_API_KEY     = process.env.NOTION_API_KEY;
const NOTION_DATABASE_ID = process.env.NOTION_DATABASE_ID;

function arg(name) {
  const i = process.argv.indexOf(name);
  return i !== -1 ? process.argv[i + 1] : null;
}
const hasFlag = (name) => process.argv.includes(name);

const fromDate = arg("--from");
const toDate   = arg("--to");
const ONLY_ZERO = hasFlag("--only-zero");
const DRY_RUN   = hasFlag("--dry-run");

if (!NOTION_API_KEY || !NOTION_DATABASE_ID) {
  console.error("❌ NOTION_API_KEY / NOTION_DATABASE_ID が未設定です");
  process.exit(1);
}

const NH = { Authorization: `Bearer ${NOTION_API_KEY}`, "Notion-Version": "2022-06-28", "Content-Type": "application/json" };
async function nFetch(path, method, body) {
  const r = await fetch(`https://api.notion.com/v1${path}`, { method, headers: NH, body: body ? JSON.stringify(body) : undefined });
  const j = await r.json();
  if (j.object === "error") throw new Error(j.message);
  return j;
}

async function queryAllPages() {
  const all = [];
  let cursor = undefined;
  do {
    const res = await nFetch(`/databases/${NOTION_DATABASE_ID}/query`, "POST", {
      page_size: 100,
      start_cursor: cursor,
      sorts: [{ property: "日付", direction: "ascending" }],
    });
    all.push(...(res.results ?? []));
    cursor = res.has_more ? res.next_cursor : undefined;
  } while (cursor);
  return all;
}

function* dateRange(start, end) {
  const d = new Date(start);
  const last = new Date(end);
  if (d > last) throw new Error("from が to より後になっています");
  while (d <= last) {
    yield d.toISOString().slice(0, 10);
    d.setUTCDate(d.getUTCDate() + 1);
  }
}

function runOnce(date) {
  return new Promise((resolve) => {
    const child = spawn("node", [SYNC_SCRIPT, "--date", date, "--force", "--no-weekly"], {
      stdio: ["ignore", "inherit", "inherit"],
      env: process.env,
    });
    child.on("exit", (code) => resolve(code ?? 1));
  });
}

// ── 対象日の決定 ──────────────────────────────────────────────────────────
let targets = [];
if (fromDate && toDate) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(fromDate) || !/^\d{4}-\d{2}-\d{2}$/.test(toDate)) {
    console.error("❌ 日付は YYYY-MM-DD 形式で指定してください");
    process.exit(1);
  }
  targets = [...dateRange(fromDate, toDate)];
  console.log(`📅 指定範囲: ${fromDate} 〜 ${toDate}（${targets.length}日）`);
} else {
  console.log("🔍 Notion DBから既存レコードを取得中...");
  const pages = await queryAllPages();
  const filtered = ONLY_ZERO
    ? pages.filter((p) => {
        const v = p.properties?.["PageSpeed_モバイル"]?.number;
        return v == null || v === 0;
      })
    : pages;
  targets = filtered
    .map((p) => p.properties?.["日付"]?.date?.start)
    .filter(Boolean)
    .sort();
  console.log(`📅 検出: ${pages.length}レコード中 ${targets.length}件を対象${ONLY_ZERO ? "（PageSpeed=0または未設定）" : ""}`);
}

if (targets.length === 0) {
  console.log("✅ 対象日なし。終了します。");
  process.exit(0);
}

console.log(`\n最初: ${targets[0]}　最後: ${targets[targets.length - 1]}`);

if (DRY_RUN) {
  console.log("\n--dry-run モード: 以下の日付を同期対象として検出しました:");
  targets.forEach((d, i) => console.log(`  ${i + 1}. ${d}`));
  process.exit(0);
}

// ── 実行 ──────────────────────────────────────────────────────────────────
const results = [];
for (let i = 0; i < targets.length; i++) {
  const date = targets[i];
  console.log(`\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`);
  console.log(`[${i + 1}/${targets.length}] ${date}`);
  console.log(`━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`);
  const start = Date.now();
  const code  = await runOnce(date);
  const secs  = Math.round((Date.now() - start) / 1000);
  results.push({ date, code, secs });
  if (code !== 0) {
    console.error(`⚠️  ${date} は終了コード ${code} で失敗（続行します）`);
  }
}

console.log(`\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`);
console.log(`📊 バックフィル結果`);
console.log(`━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`);
const ok   = results.filter((r) => r.code === 0);
const fail = results.filter((r) => r.code !== 0);
console.log(`✅ 成功: ${ok.length}日`);
console.log(`❌ 失敗: ${fail.length}日`);
if (fail.length) {
  console.log(`失敗日: ${fail.map((r) => r.date).join(", ")}`);
  process.exit(1);
}
