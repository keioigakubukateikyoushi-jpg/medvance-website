/**
 * 既存の「親ページ配下の子ページ」レポートを、データベース行へ移す（本文は変更しない）
 *
 * - デイリー: NOTION_DAILY_PAGE_ID 直下の child_page → 📊 デイリーレポート DB
 * - 週次:     NOTION_WEEKLY_PAGE_ID 直下の child_page → 📈 週次レポート DB
 * - ページ本文(blocks)は触らない。parent と DB プロパティだけ更新
 * - 既に DB 配下の行はスキップ
 *
 * 環境変数:
 *   NOTION_API_KEY (必須)
 *   NOTION_DAILY_PAGE_ID / NOTION_WEEKLY_PAGE_ID (optional, defaults same as sync)
 *   NOTION_DAILY_REPORTS_DB_ID / NOTION_WEEKLY_REPORTS_DB_ID (optional)
 *
 * 実行:
 *   node scripts/migrate-reports-to-db.mjs
 *   node scripts/migrate-reports-to-db.mjs --dry-run
 */

const NOTION_API_KEY = process.env.NOTION_API_KEY;
const NOTION_DAILY_PAGE_ID  = process.env.NOTION_DAILY_PAGE_ID  || "336791ed-0116-813a-9933-e375c6ad34f0";
const NOTION_WEEKLY_PAGE_ID = process.env.NOTION_WEEKLY_PAGE_ID || "336791ed-0116-8100-a336-f4eac2a2a4ff";
let NOTION_DAILY_REPORTS_DB_ID  = process.env.NOTION_DAILY_REPORTS_DB_ID  || "";
let NOTION_WEEKLY_REPORTS_DB_ID = process.env.NOTION_WEEKLY_REPORTS_DB_ID || "";

const DRY_RUN = process.argv.includes("--dry-run");
const SLEEP_MS = 350;

if (!NOTION_API_KEY) {
  console.error("❌ NOTION_API_KEY が未設定です");
  process.exit(1);
}

const NH = {
  Authorization: `Bearer ${NOTION_API_KEY}`,
  "Notion-Version": "2022-06-28",
  "Content-Type": "application/json",
};

const nFetch = (path, method, body) =>
  fetch(`https://api.notion.com/v1${path}`, {
    method,
    headers: NH,
    body: body ? JSON.stringify(body) : undefined,
  })
    .then((r) => r.json())
    .then((j) => {
      if (j.object === "error") throw new Error(j.message);
      return j;
    });

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function listAllChildren(blockId) {
  const out = [];
  let cursor;
  do {
    const qs = new URLSearchParams({ page_size: "100" });
    if (cursor) qs.set("start_cursor", cursor);
    const res = await nFetch(`/blocks/${blockId}/children?${qs}`, "GET");
    out.push(...(res.results ?? []));
    cursor = res.has_more ? res.next_cursor : undefined;
  } while (cursor);
  return out;
}

async function findChildDatabase(parentPageId, needle) {
  const children = await listAllChildren(parentPageId);
  for (const block of children) {
    if (block.type !== "child_database") continue;
    const title = block.child_database?.title ?? "";
    if (title.includes(needle)) return block.id;
  }
  return null;
}

async function ensureDbProperties(databaseId, desired, label) {
  const db = await nFetch(`/databases/${databaseId}`, "GET");
  const existing = db.properties ?? {};
  const toAdd = {};
  for (const [name, schema] of Object.entries(desired)) {
    if (!existing[name]) toAdd[name] = schema;
  }
  if (Object.keys(toAdd).length === 0) {
    console.log(`  📐 ${label}: OK`);
    return;
  }
  if (DRY_RUN) {
    console.log(`  📐 ${label} (dry-run) 追加予定: ${Object.keys(toAdd).join(", ")}`);
    return;
  }
  await nFetch(`/databases/${databaseId}`, "PATCH", { properties: toAdd });
  console.log(`  📐 ${label} プロパティ追加: ${Object.keys(toAdd).join(", ")}`);
}

/** Resolve actual property names/ids from a database schema. */
async function loadDbSchema(databaseId) {
  const db = await nFetch(`/databases/${databaseId}`, "GET");
  const props = db.properties ?? {};
  const byType = {};
  let titleProp = null;
  let titlePropId = null;
  for (const [name, def] of Object.entries(props)) {
    const t = def?.type;
    if (!t) continue;
    if (!byType[t]) byType[t] = [];
    byType[t].push(name);
    if (t === "title") {
      titleProp = name;
      titlePropId = def.id ?? "title";
    }
  }
  console.log(
    `  🔑 DB ${databaseId.slice(0, 8)}… title列="${titleProp}" (id=${titlePropId}) props=[${Object.keys(props).join(", ")}]`,
  );
  return { props, byType, titleProp, titlePropId };
}

let DAILY_SCHEMA = null;
let WEEKLY_SCHEMA = null;

async function ensureReportDatabases() {
  const dailyProps = {
    // title は既存の title 列を使う（Name と限らない）
    日付: { date: {} },
    PV: { number: { format: "number" } },
    UU: { number: { format: "number" } },
    セッション: { number: { format: "number" } },
    リード: { number: { format: "number" } },
    "Contact PV": { number: { format: "number" } },
    SCクリック: { number: { format: "number" } },
    "前日比PV(%)": { number: { format: "number" } },
    アクセスログ: { url: {} },
    メモ: { rich_text: {} },
  };
  const weeklyProps = {
    期間開始: { date: {} },
    期間終了: { date: {} },
    総PV: { number: { format: "number" } },
    総UU: { number: { format: "number" } },
    リード: { number: { format: "number" } },
    SCクリック: { number: { format: "number" } },
    メモ: { rich_text: {} },
  };

  if (!NOTION_DAILY_REPORTS_DB_ID) {
    const found = await findChildDatabase(NOTION_DAILY_PAGE_ID, "デイリーレポート");
    if (!found) throw new Error("デイリーレポートDBが見つかりません。先に sync-analytics を1回実行してください。");
    NOTION_DAILY_REPORTS_DB_ID = found;
  }
  console.log(`📚 デイリーレポートDB: ${NOTION_DAILY_REPORTS_DB_ID}`);
  await ensureDbProperties(NOTION_DAILY_REPORTS_DB_ID, dailyProps, "デイリーレポートDB");
  DAILY_SCHEMA = await loadDbSchema(NOTION_DAILY_REPORTS_DB_ID);
  if (!DAILY_SCHEMA.titleProp) throw new Error("デイリーレポートDBに title 列がありません");

  if (!NOTION_WEEKLY_REPORTS_DB_ID) {
    const found = await findChildDatabase(NOTION_WEEKLY_PAGE_ID, "週次レポート");
    if (!found) throw new Error("週次レポートDBが見つかりません。先に sync-analytics を1回実行してください。");
    NOTION_WEEKLY_REPORTS_DB_ID = found;
  }
  console.log(`📚 週次レポートDB: ${NOTION_WEEKLY_REPORTS_DB_ID}`);
  await ensureDbProperties(NOTION_WEEKLY_REPORTS_DB_ID, weeklyProps, "週次レポートDB");
  WEEKLY_SCHEMA = await loadDbSchema(NOTION_WEEKLY_REPORTS_DB_ID);
  if (!WEEKLY_SCHEMA.titleProp) throw new Error("週次レポートDBに title 列がありません");
}

function yearFromIso(iso) {
  if (!iso) return String(new Date().getFullYear());
  return iso.slice(0, 4);
}

/** Parse MM/DD from titles like "📊 07/19 デイリーレポート" */
function parseDailyDate(title, createdTime) {
  const m = String(title).match(/(\d{1,2})\s*\/\s*(\d{1,2})/);
  if (!m) return createdTime ? createdTime.slice(0, 10) : null;
  const y = yearFromIso(createdTime);
  const mm = m[1].padStart(2, "0");
  const dd = m[2].padStart(2, "0");
  return `${y}-${mm}-${dd}`;
}

/** Parse "07/13〜07/19" style ranges */
function parseWeeklyRange(title, createdTime) {
  const m = String(title).match(
    /(\d{1,2})\s*\/\s*(\d{1,2})\s*[〜~\-–—]\s*(\d{1,2})\s*\/\s*(\d{1,2})/,
  );
  if (!m) {
    const d = createdTime ? createdTime.slice(0, 10) : null;
    return { start: d, end: d };
  }
  const y = yearFromIso(createdTime);
  const start = `${y}-${m[1].padStart(2, "0")}-${m[2].padStart(2, "0")}`;
  const end = `${y}-${m[3].padStart(2, "0")}-${m[4].padStart(2, "0")}`;
  return { start, end };
}

function isWeeklyTitle(title) {
  return /週次|weekly/i.test(title) || /[〜~]\s*\d{1,2}\s*\/\s*\d{1,2}/.test(title);
}

function isDailyTitle(title) {
  if (isWeeklyTitle(title)) return false;
  return /デイリー|daily|レポート/i.test(title) || /\d{1,2}\s*\/\s*\d{1,2}/.test(title);
}

async function getPage(pageId) {
  return nFetch(`/pages/${pageId}`, "GET");
}

function pageTitle(page, fallback = "") {
  const props = page.properties ?? {};
  for (const key of Object.keys(props)) {
    const p = props[key];
    if (p?.type === "title") {
      const t = (p.title ?? []).map((x) => x.plain_text ?? "").join("");
      if (t) return t;
    }
  }
  return fallback;
}

/**
 * Move page into database without touching body blocks.
 * Notion can reject combined parent+title updates, so:
 *   1) parent only
 *   2) then non-title properties
 *   3) then title via property id / name fallbacks
 */
async function movePageToDatabase(pageId, databaseId, { title, titleKeys, extraProps }, label) {
  if (DRY_RUN) {
    console.log(`  [dry-run] ${label}`);
    return { ok: true, dryRun: true };
  }
  try {
    // 1) parent only (preserves body blocks)
    await nFetch(`/pages/${pageId}`, "PATCH", {
      parent: { type: "database_id", database_id: databaseId },
    });
    await sleep(200);

    // 2) non-title properties (date etc.)
    if (extraProps && Object.keys(extraProps).length > 0) {
      try {
        await nFetch(`/pages/${pageId}`, "PATCH", { properties: extraProps });
      } catch (err) {
        console.warn(`  ⚠️  プロパティ一部失敗 (${label}): ${err.message}`);
      }
      await sleep(200);
    }

    // 3) title — try each key (name / id / "title")
    if (title) {
      const titleValue = {
        title: [{ type: "text", text: { content: String(title).slice(0, 2000) } }],
      };
      const keys = [...new Set((titleKeys ?? []).filter(Boolean))];
      let titled = false;
      let lastErr = null;
      for (const key of keys) {
        try {
          await nFetch(`/pages/${pageId}`, "PATCH", {
            properties: { [key]: titleValue },
          });
          titled = true;
          break;
        } catch (err) {
          lastErr = err;
        }
      }
      if (!titled && lastErr) {
        console.warn(`  ⚠️  タイトル更新スキップ (${label}): ${lastErr.message}`);
      }
    }

    console.log(`  ✅ ${label}`);
    return { ok: true };
  } catch (err) {
    console.error(`  ❌ ${label}: ${err.message}`);
    return { ok: false, error: err.message };
  }
}

async function migrateChildren(parentPageId, kind) {
  console.log(`\n📂 ${kind === "daily" ? "デイリー" : "週次"}親ページの子を走査: ${parentPageId}`);
  const children = await listAllChildren(parentPageId);
  const pages = children.filter((b) => b.type === "child_page");
  const dbs = children.filter((b) => b.type === "child_database");
  console.log(`  child_page=${pages.length} / child_database=${dbs.length}`);

  let moved = 0;
  let skipped = 0;
  let failed = 0;

  for (const block of pages) {
    const blockTitle = block.child_page?.title ?? "(無題)";
    const pageId = block.id;

    // Skip non-report looking pages (safety)
    if (kind === "daily" && !isDailyTitle(blockTitle) && !isWeeklyTitle(blockTitle)) {
      // still migrate if it looks like a date report; otherwise skip unknown
      if (!/\d{1,2}\s*\/\s*\d{1,2}/.test(blockTitle)) {
        console.log(`  ⏭️  スキップ(対象外): ${blockTitle}`);
        skipped++;
        continue;
      }
    }

    await sleep(SLEEP_MS);
    let page;
    try {
      page = await getPage(pageId);
    } catch (err) {
      console.error(`  ❌ 取得失敗 ${blockTitle}: ${err.message}`);
      failed++;
      continue;
    }

    if (page.archived) {
      console.log(`  ⏭️  アーカイブ済み: ${blockTitle}`);
      skipped++;
      continue;
    }

    // Already in a database?
    if (page.parent?.type === "database_id") {
      const already =
        page.parent.database_id === NOTION_DAILY_REPORTS_DB_ID ||
        page.parent.database_id === NOTION_WEEKLY_REPORTS_DB_ID;
      console.log(`  ⏭️  既にDB配下: ${blockTitle}${already ? "" : ` (other ${page.parent.database_id})`}`);
      skipped++;
      continue;
    }

    const title = pageTitle(page, blockTitle);
    const created = page.created_time;

    // Route by title (weekly pages might live under daily parent historically)
    const treatAsWeekly = kind === "weekly" || isWeeklyTitle(title);

    if (treatAsWeekly) {
      const { start, end } = parseWeeklyRange(title, created);
      const extraProps = {};
      if (start && WEEKLY_SCHEMA.props["期間開始"]) extraProps["期間開始"] = { date: { start } };
      if (end && WEEKLY_SCHEMA.props["期間終了"]) extraProps["期間終了"] = { date: { start: end } };

      const r = await movePageToDatabase(
        pageId,
        NOTION_WEEKLY_REPORTS_DB_ID,
        {
          title,
          titleKeys: [WEEKLY_SCHEMA.titlePropId, WEEKLY_SCHEMA.titleProp, "title", "Name"],
          extraProps,
        },
        `週次「${title}」→ DB`,
      );
      if (r.ok) moved++;
      else failed++;
    } else {
      const date = parseDailyDate(title, created);
      const extraProps = {};
      if (date && DAILY_SCHEMA.props["日付"]) extraProps["日付"] = { date: { start: date } };

      const r = await movePageToDatabase(
        pageId,
        NOTION_DAILY_REPORTS_DB_ID,
        {
          title,
          titleKeys: [DAILY_SCHEMA.titlePropId, DAILY_SCHEMA.titleProp, "title", "Name"],
          extraProps,
        },
        `デイリー「${title}」→ DB`,
      );
      if (r.ok) moved++;
      else failed++;
    }

    await sleep(SLEEP_MS);
  }

  return { moved, skipped, failed, total: pages.length };
}

async function main() {
  console.log(DRY_RUN ? "🧪 DRY-RUN（移動しません）" : "🚚 本番移行: 子ページ → レポートDB");
  console.log("   本文ブロックは変更しません（parent / プロパティのみ）\n");

  await ensureReportDatabases();

  const daily = await migrateChildren(NOTION_DAILY_PAGE_ID, "daily");
  const weekly = await migrateChildren(NOTION_WEEKLY_PAGE_ID, "weekly");

  console.log("\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
  console.log(`デイリー親: moved=${daily.moved} skipped=${daily.skipped} failed=${daily.failed} (pages=${daily.total})`);
  console.log(`週次親:     moved=${weekly.moved} skipped=${weekly.skipped} failed=${weekly.failed} (pages=${weekly.total})`);
  console.log(`合計 moved: ${daily.moved + weekly.moved}`);
  if (DRY_RUN) console.log("（dry-run のため実際の移動はしていません）");
  console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━");

  if (daily.failed + weekly.failed > 0) process.exit(1);
}

main().catch((err) => {
  console.error("❌", err.message);
  process.exit(1);
});
