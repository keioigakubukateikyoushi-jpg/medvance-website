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
const BACKFILL_DATES = process.argv.includes("--backfill-dates");
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
  const idByName = {};
  let titleProp = null;
  let titlePropId = null;
  for (const [name, def] of Object.entries(props)) {
    const t = def?.type;
    if (!t) continue;
    idByName[name] = def.id ?? name;
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
  return { props, byType, titleProp, titlePropId, idByName };
}

/** Prefer property id keys when PATCHing (more reliable after parent move). */
function propsWithIds(schema, namedProps) {
  const out = {};
  for (const [name, value] of Object.entries(namedProps)) {
    if (!schema.props[name]) continue;
    const key = schema.idByName?.[name] || name;
    out[key] = value;
  }
  return out;
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

const SKIP_BLOCK_TYPES = new Set([
  "unsupported",
  "child_page",
  "child_database",
  "external_object_instance_page",
]);

/** Drop nulls / empty optionals that Notion rejects on create (e.g. icon: null). */
function scrubForCreate(value) {
  if (Array.isArray(value)) {
    return value.map(scrubForCreate).filter((v) => v !== undefined);
  }
  if (value && typeof value === "object") {
    const out = {};
    for (const [k, v] of Object.entries(value)) {
      if (v === null || v === undefined) continue;
      // Notion create rejects these read-only / empty fields
      if (["id", "created_time", "last_edited_time", "created_by", "last_edited_by", "has_children", "archived", "parent", "object"].includes(k)) {
        continue;
      }
      const cleaned = scrubForCreate(v);
      if (cleaned === undefined) continue;
      if (typeof cleaned === "object" && !Array.isArray(cleaned) && Object.keys(cleaned).length === 0 && k !== "divider") {
        // keep empty text structures carefully; skip truly empty junk
        if (k === "text" || k === "rich_text" || k === "caption" || k === "annotations") {
          out[k] = cleaned;
        }
        continue;
      }
      out[k] = cleaned;
    }
    return out;
  }
  return value;
}

/** Clone block tree for create/append (strip read-only fields). Content preserved. */
function sanitizeBlock(block) {
  if (!block?.type || SKIP_BLOCK_TYPES.has(block.type)) return null;
  const type = block.type;
  const raw = block[type];
  if (!raw || typeof raw !== "object") return null;
  // shallow clone type payload without nested children (added separately)
  const payload = { ...raw };
  delete payload.children;
  // callout/paragraph often return icon:null — strip nulls
  const scrubbed = scrubForCreate(payload);
  if (!scrubbed || typeof scrubbed !== "object") return null;
  return { type, [type]: scrubbed };
}

async function fetchBlocksForClone(blockId, depth = 0) {
  if (depth > 5) return [];
  const children = await listAllChildren(blockId);
  const out = [];
  for (const block of children) {
    const clean = sanitizeBlock(block);
    if (!clean) continue;
    if (block.has_children && !SKIP_BLOCK_TYPES.has(block.type)) {
      await sleep(120);
      try {
        const nested = await fetchBlocksForClone(block.id, depth + 1);
        if (nested.length) clean[block.type] = { ...clean[block.type], children: nested };
      } catch {
        // nested fetch optional
      }
    }
    out.push(clean);
  }
  return out;
}

async function appendBlocks(pageId, blocks) {
  // Notion: max 100 children per request
  for (let i = 0; i < blocks.length; i += 100) {
    const chunk = blocks.slice(i, i + 100);
    await nFetch(`/blocks/${pageId}/children`, "PATCH", { children: chunk });
    await sleep(250);
  }
}

/**
 * Put a report into the DB as a row.
 * Strategy:
 *   A) Try real parent move (same page id, body intact)
 *   B) If not actually in DB, clone body into a new DB row and archive the old page
 *      (old page content is not edited; new row gets the same blocks)
 */
async function movePageToDatabase(pageId, databaseId, { title, titleKeys, extraProps, schema }, label) {
  if (DRY_RUN) {
    console.log(`  [dry-run] ${label}`);
    return { ok: true, dryRun: true };
  }

  const titleValue = {
    title: [{ type: "text", text: { content: String(title || "レポート").slice(0, 2000) } }],
  };
  const titleKeysTry = [...new Set((titleKeys ?? ["title", "Name"]).filter(Boolean))];

  // --- A) try in-place parent move ---
  try {
    const propsA = { ...(extraProps || {}) };
    // include title if we can
    if (titleKeysTry[0]) propsA[titleKeysTry[0]] = titleValue;

    await nFetch(`/pages/${pageId}`, "PATCH", {
      parent: { type: "database_id", database_id: databaseId },
      properties: propsA,
    });
    await sleep(200);
    const after = await getPage(pageId);
    if (after.parent?.type === "database_id" && after.parent.database_id?.replace(/-/g, "") === databaseId.replace(/-/g, "")) {
      console.log(`  ✅ ${label} (move)`);
      return { ok: true, mode: "move" };
    }
    console.warn(`  ⚠️  move未反映 → clone に切替: ${title}`);
  } catch (err) {
    console.warn(`  ⚠️  move失敗 → clone に切替: ${err.message}`);
  }

  // --- B) clone into new DB row (body copy, then archive original) ---
  try {
    await sleep(200);
    const bodyBlocks = await fetchBlocksForClone(pageId);
    const properties = { ...(extraProps || {}) };
    // set title via real title column name
    const tKey = schema?.titleProp || titleKeysTry[0] || "Name";
    properties[tKey] = titleValue;

    // create with first 100 blocks
    const first = bodyBlocks.slice(0, 100);
    const rest = bodyBlocks.slice(100);
    const created = await nFetch("/pages", "POST", {
      parent: { database_id: databaseId },
      icon: { type: "emoji", emoji: label.includes("週次") ? "📈" : "📊" },
      properties,
      children: first,
    });
    if (rest.length) await appendBlocks(created.id, rest);

    // archive original (content untouched; just hidden from parent list)
    try {
      await nFetch(`/pages/${pageId}`, "PATCH", { archived: true });
    } catch (err) {
      console.warn(`  ⚠️  元ページのアーカイブ失敗: ${err.message}`);
    }

    console.log(`  ✅ ${label} (clone ${bodyBlocks.length} blocks → ${created.id.slice(0, 8)}…)`);
    return { ok: true, mode: "clone", newId: created.id };
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
          titleKeys: [WEEKLY_SCHEMA.titleProp, WEEKLY_SCHEMA.titlePropId, "title", "Name"],
          extraProps,
          schema: WEEKLY_SCHEMA,
        },
        `週次「${title}」→ DB`,
      );
      if (r.ok) moved++;
      else failed++;
    } else {
      const date = parseDailyDate(title, created);
      const named = {};
      if (date && DAILY_SCHEMA.props["日付"]) named["日付"] = { date: { start: date } };
      // use property NAMES for create (clone path); ids often break create
      const extraProps = {};
      for (const [k, v] of Object.entries(named)) {
        if (DAILY_SCHEMA.props[k]) extraProps[k] = v;
      }

      const r = await movePageToDatabase(
        pageId,
        NOTION_DAILY_REPORTS_DB_ID,
        {
          title,
          titleKeys: [DAILY_SCHEMA.titleProp, DAILY_SCHEMA.titlePropId, "title", "Name"],
          extraProps,
          schema: DAILY_SCHEMA,
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

async function queryAllDbPages(databaseId) {
  const out = [];
  let cursor;
  do {
    const body = { page_size: 100 };
    if (cursor) body.start_cursor = cursor;
    const res = await nFetch(`/databases/${databaseId}/query`, "POST", body);
    out.push(...(res.results ?? []));
    cursor = res.has_more ? res.next_cursor : undefined;
  } while (cursor);
  return out;
}

/** Fill 日付 / 期間 from title for rows already in report DBs (body untouched). */
async function backfillDates() {
  console.log("\n📅 DB行の日付プロパティをタイトルから埋める（本文は変更しない）");
  let ok = 0;
  let fail = 0;

  const dailies = await queryAllDbPages(NOTION_DAILY_REPORTS_DB_ID);
  console.log(`  デイリー行: ${dailies.length}`);
  for (const page of dailies) {
    if (page.archived) continue;
    const title = pageTitle(page, "");
    const date = parseDailyDate(title, page.created_time);
    if (!date) continue;
    const props = propsWithIds(DAILY_SCHEMA, { 日付: { date: { start: date } } });
    if (!Object.keys(props).length) continue;
    try {
      if (!DRY_RUN) await nFetch(`/pages/${page.id}`, "PATCH", { properties: props });
      ok++;
      if (ok % 20 === 0) console.log(`  … daily dates ${ok}`);
    } catch (err) {
      fail++;
      console.warn(`  ⚠️  daily date fail ${title}: ${err.message}`);
    }
    await sleep(SLEEP_MS);
  }

  const weeklies = await queryAllDbPages(NOTION_WEEKLY_REPORTS_DB_ID);
  console.log(`  週次行: ${weeklies.length}`);
  for (const page of weeklies) {
    if (page.archived) continue;
    const title = pageTitle(page, "");
    const { start, end } = parseWeeklyRange(title, page.created_time);
    const named = {};
    if (start) named["期間開始"] = { date: { start } };
    if (end) named["期間終了"] = { date: { start: end } };
    const props = propsWithIds(WEEKLY_SCHEMA, named);
    if (!Object.keys(props).length) continue;
    try {
      if (!DRY_RUN) await nFetch(`/pages/${page.id}`, "PATCH", { properties: props });
      ok++;
    } catch (err) {
      fail++;
      console.warn(`  ⚠️  weekly date fail ${title}: ${err.message}`);
    }
    await sleep(SLEEP_MS);
  }

  console.log(`  日付埋込: ok=${ok} fail=${fail}`);
  return { ok, fail };
}

async function main() {
  console.log(DRY_RUN ? "🧪 DRY-RUN（変更しません）" : BACKFILL_DATES ? "📅 日付backfill" : "🚚 本番移行: 子ページ → レポートDB");
  console.log("   本文ブロックは変更しません（parent / プロパティのみ）\n");

  await ensureReportDatabases();

  if (BACKFILL_DATES) {
    const r = await backfillDates();
    if (r.fail > 0) process.exit(1);
    return;
  }

  const daily = await migrateChildren(NOTION_DAILY_PAGE_ID, "daily");
  const weekly = await migrateChildren(NOTION_WEEKLY_PAGE_ID, "weekly");

  // 移動直後に日付も可能な範囲で埋める
  await backfillDates();

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
