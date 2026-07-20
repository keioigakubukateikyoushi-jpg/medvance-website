/**
 * Medvance GA4 + Search Console + PageSpeed → Notion 日次同期（詳細版）
 *
 * 機能:
 *   1. 日次アクセスログDB に全データを保存（原本）
 *   2. 毎日: デイリーレポートページを自動作成（詳細付き）
 *   3. 日曜日: 週次レポートページを自動作成（7日間集計）
 *
 * 詳細ディメンション（匿名集計のみ・個人特定なし）:
 *   - ページ TOP20 / 都道府県 TOP10 / 市区町村 TOP10
 *   - ページ×地域 / 流入元×ランディング
 *   - ブラウザ / 時間帯 / generate_lead・cta_click イベント
 *
 * 環境変数:
 *   GA4_PROPERTY_ID, GA4_SERVICE_ACCOUNT, SC_SITE_URL,
 *   NOTION_API_KEY, NOTION_DATABASE_ID,
 *   NOTION_DAILY_PAGE_ID, NOTION_WEEKLY_PAGE_ID (optional),
 *   PAGESPEED_API_KEY (optional)
 *
 * 実行例:
 *   node scripts/sync-analytics.mjs
 *   node scripts/sync-analytics.mjs --date 2026-03-26
 *   node scripts/sync-analytics.mjs --date 2026-07-19 --force
 */

import { BetaAnalyticsDataClient } from "@google-analytics/data";
import { google } from "googleapis";

// ── 環境変数 ─────────────────────────────────────────────────────────────
const GA4_PROPERTY_ID       = process.env.GA4_PROPERTY_ID;
const NOTION_DATABASE_ID    = process.env.NOTION_DATABASE_ID;
const NOTION_API_KEY        = process.env.NOTION_API_KEY;
const NOTION_DAILY_PAGE_ID  = process.env.NOTION_DAILY_PAGE_ID  || "336791ed-0116-813a-9933-e375c6ad34f0";
const NOTION_WEEKLY_PAGE_ID = process.env.NOTION_WEEKLY_PAGE_ID || "336791ed-0116-8100-a336-f4eac2a2a4ff";
const DEFAULT_SC_SITE_URL   = "https://medvance-edu.com/";
const SC_SITE_URL           = process.env.SC_SITE_URL   || DEFAULT_SC_SITE_URL;
const PAGESPEED_URL         = process.env.PAGESPEED_URL || "https://medvance-edu.com/";

if (!GA4_PROPERTY_ID || !NOTION_DATABASE_ID || !NOTION_API_KEY || !process.env.GA4_SERVICE_ACCOUNT) {
  console.error("❌ 環境変数が不足しています:");
  if (!GA4_PROPERTY_ID)                 console.error("   - GA4_PROPERTY_ID");
  if (!process.env.GA4_SERVICE_ACCOUNT) console.error("   - GA4_SERVICE_ACCOUNT");
  if (!NOTION_API_KEY)                  console.error("   - NOTION_API_KEY");
  if (!NOTION_DATABASE_ID)              console.error("   - NOTION_DATABASE_ID");
  process.exit(1);
}

// ── 日付 / フラグ ────────────────────────────────────────────────────────
function resolveTargetDate() {
  const idx = process.argv.indexOf("--date");
  if (idx !== -1 && process.argv[idx + 1]) return process.argv[idx + 1];
  const d = new Date();
  d.setDate(d.getDate() - 1);
  return d.toISOString().slice(0, 10);
}
const targetDate = resolveTargetDate();
const FORCE      = process.argv.includes("--force");
const NO_WEEKLY  = process.argv.includes("--no-weekly");
const prevDate   = (() => { const d = new Date(targetDate); d.setDate(d.getDate() - 1); return d.toISOString().slice(0, 10); })();
console.log(`📅 取得日: ${targetDate}`);

// ── helpers ──────────────────────────────────────────────────────────────
const pathLabel = (p) => {
  const s = (p ?? "").trim();
  return s && s !== "(not set)" ? s : "(not set)";
};

const clip = (s, max = 1900) => {
  const t = String(s ?? "");
  return t.length > max ? `${t.slice(0, max - 1)}…` : t;
};

const rt = (s) => [{ type: "text", text: { content: clip(s) } }];

function formatRanked(items, empty = "（データなし）") {
  if (!items?.length) return empty;
  return items.map((line, i) => `${i + 1}. ${line}`).join("\n");
}

async function safeGa4(label, fn, fallback) {
  try {
    return await fn();
  } catch (err) {
    console.warn(`  ⚠️  GA4[${label}]: ${(err?.message ?? String(err)).slice(0, 120)}`);
    return fallback;
  }
}

// ── GA4 クライアント ──────────────────────────────────────────────────────
const credentials = JSON.parse(process.env.GA4_SERVICE_ACCOUNT);
const ga4 = new BetaAnalyticsDataClient({ credentials });
const prop = `properties/${GA4_PROPERTY_ID}`;

// ─── GA4: 基本指標 ────────────────────────────────────────────────────────
async function fetchGA4(s, e) {
  const [res] = await ga4.runReport({
    property: prop,
    dateRanges: [{ startDate: s, endDate: e }],
    metrics: [
      { name: "screenPageViews" }, { name: "totalUsers" }, { name: "newUsers" },
      { name: "sessions" }, { name: "bounceRate" }, { name: "averageSessionDuration" },
    ],
  });
  const v  = res.rows?.[0]?.metricValues ?? [];
  const uu = parseInt(v[1]?.value ?? "0");
  const nu = parseInt(v[2]?.value ?? "0");
  return {
    pv: parseInt(v[0]?.value ?? "0"), uu, newUsers: nu,
    newUserRate:   uu > 0 ? parseFloat((nu / uu * 100).toFixed(1)) : 0,
    sessions:      parseInt(v[3]?.value ?? "0"),
    bounceRate:    parseFloat((parseFloat(v[4]?.value ?? "0") * 100).toFixed(1)),
    avgSessionSec: parseInt(parseFloat(v[5]?.value ?? "0").toFixed(0)),
  };
}

// ─── GA4: チャネル別流入 ───────────────────────────────────────────────────
async function fetchChannels(s, e) {
  const [res] = await ga4.runReport({
    property: prop,
    dateRanges: [{ startDate: s, endDate: e }],
    metrics: [{ name: "sessions" }],
    dimensions: [{ name: "sessionDefaultChannelGroup" }],
  });
  let organic = 0, direct = 0, social = 0, referral = 0, paid = 0, other = 0;
  const breakdown = [];
  for (const row of res.rows ?? []) {
    const ch  = row.dimensionValues?.[0]?.value ?? "(other)";
    const val = parseInt(row.metricValues?.[0]?.value ?? "0");
    breakdown.push(`${ch}: ${val}`);
    const low = ch.toLowerCase();
    if (low.includes("organic")) organic += val;
    else if (low.includes("direct")) direct += val;
    else if (low.includes("social")) social += val;
    else if (low.includes("referral")) referral += val;
    else if (low.includes("paid") || low.includes("cpc") || low.includes("display")) paid += val;
    else other += val;
  }
  return { organic, direct, social, referral, paid, other, breakdownText: formatRanked(breakdown) };
}

// ─── GA4: TOP pages ───────────────────────────────────────────────────────
async function fetchTopPages(s, e, limit = 20) {
  const [res] = await ga4.runReport({
    property: prop,
    dateRanges: [{ startDate: s, endDate: e }],
    metrics: [
      { name: "screenPageViews" },
      { name: "totalUsers" },
      { name: "averageSessionDuration" },
      { name: "bounceRate" },
    ],
    dimensions: [{ name: "pagePath" }],
    orderBys: [{ metric: { metricName: "screenPageViews" }, desc: true }],
    limit,
  });
  return (res.rows ?? []).map((r) => {
    const path = pathLabel(r.dimensionValues?.[0]?.value);
    const pv = parseInt(r.metricValues?.[0]?.value ?? "0");
    const users = parseInt(r.metricValues?.[1]?.value ?? "0");
    const avgSec = parseInt(parseFloat(r.metricValues?.[2]?.value ?? "0").toFixed(0));
    const bounce = parseFloat((parseFloat(r.metricValues?.[3]?.value ?? "0") * 100).toFixed(0));
    return { path, pv, users, avgSec, bounce };
  });
}

function topPagesText(pages) {
  if (!pages.length) return "（データなし）";
  return pages
    .map((p, i) => `${i + 1}. ${p.path}  ${p.pv}PV / ${p.users}UU / 滞在${p.avgSec}s / 直帰${p.bounce}%`)
    .join("\n");
}

// ─── GA4: /contact PV ─────────────────────────────────────────────────────
async function fetchContactPV(s, e) {
  const [res] = await ga4.runReport({
    property: prop,
    dateRanges: [{ startDate: s, endDate: e }],
    metrics: [{ name: "screenPageViews" }],
    dimensions: [{ name: "pagePath" }],
    dimensionFilter: { filter: { fieldName: "pagePath", stringFilter: { matchType: "BEGINS_WITH", value: "/contact" } } },
  });
  return (res.rows ?? []).reduce((sum, r) => sum + parseInt(r.metricValues?.[0]?.value ?? "0"), 0);
}

// ─── GA4: event count ─────────────────────────────────────────────────────
async function fetchEventCount(s, e, eventName) {
  const [res] = await ga4.runReport({
    property: prop,
    dateRanges: [{ startDate: s, endDate: e }],
    metrics: [{ name: "eventCount" }],
    dimensions: [{ name: "eventName" }],
    dimensionFilter: {
      filter: { fieldName: "eventName", stringFilter: { matchType: "EXACT", value: eventName } },
    },
  });
  return parseInt(res.rows?.[0]?.metricValues?.[0]?.value ?? "0");
}

// ─── GA4: デバイス比率 ─────────────────────────────────────────────────────
async function fetchDevices(s, e) {
  const [res] = await ga4.runReport({
    property: prop,
    dateRanges: [{ startDate: s, endDate: e }],
    metrics: [{ name: "sessions" }],
    dimensions: [{ name: "deviceCategory" }],
  });
  let mobile = 0, desktop = 0, tablet = 0, total = 0;
  for (const row of res.rows ?? []) {
    const dev = (row.dimensionValues?.[0]?.value ?? "").toLowerCase();
    const val = parseInt(row.metricValues?.[0]?.value ?? "0");
    total += val;
    if (dev === "mobile") mobile += val;
    else if (dev === "desktop") desktop += val;
    else if (dev === "tablet") tablet += val;
  }
  const pct = (n) => total > 0 ? parseFloat((n / total * 100).toFixed(1)) : 0;
  return { mobile: pct(mobile), desktop: pct(desktop), tablet: pct(tablet) };
}

// ─── GA4: 都道府県 / 市区町村 ─────────────────────────────────────────────
async function fetchRegions(s, e, limit = 10) {
  const [res] = await ga4.runReport({
    property: prop,
    dateRanges: [{ startDate: s, endDate: e }],
    metrics: [{ name: "sessions" }, { name: "totalUsers" }],
    dimensions: [{ name: "region" }],
    orderBys: [{ metric: { metricName: "sessions" }, desc: true }],
    limit,
  });
  const items = (res.rows ?? []).map((r) => {
    const name = pathLabel(r.dimensionValues?.[0]?.value);
    const sessions = r.metricValues?.[0]?.value ?? "0";
    const users = r.metricValues?.[1]?.value ?? "0";
    return `${name}（${sessions}セッション / ${users}UU）`;
  });
  return formatRanked(items);
}

async function fetchCities(s, e, limit = 10) {
  const [res] = await ga4.runReport({
    property: prop,
    dateRanges: [{ startDate: s, endDate: e }],
    metrics: [{ name: "sessions" }, { name: "totalUsers" }],
    dimensions: [{ name: "city" }, { name: "region" }],
    orderBys: [{ metric: { metricName: "sessions" }, desc: true }],
    limit,
  });
  const items = (res.rows ?? []).map((r) => {
    const city = pathLabel(r.dimensionValues?.[0]?.value);
    const region = pathLabel(r.dimensionValues?.[1]?.value);
    const sessions = r.metricValues?.[0]?.value ?? "0";
    const users = r.metricValues?.[1]?.value ?? "0";
    return `${city} / ${region}（${sessions}セッション / ${users}UU）`;
  });
  return formatRanked(items);
}

// ─── GA4: ページ × 地域 ───────────────────────────────────────────────────
async function fetchPageRegion(s, e, limit = 15) {
  const [res] = await ga4.runReport({
    property: prop,
    dateRanges: [{ startDate: s, endDate: e }],
    metrics: [{ name: "sessions" }, { name: "screenPageViews" }],
    dimensions: [{ name: "pagePath" }, { name: "region" }],
    orderBys: [{ metric: { metricName: "sessions" }, desc: true }],
    limit,
  });
  const items = (res.rows ?? []).map((r) => {
    const page = pathLabel(r.dimensionValues?.[0]?.value);
    const region = pathLabel(r.dimensionValues?.[1]?.value);
    const sessions = r.metricValues?.[0]?.value ?? "0";
    const pv = r.metricValues?.[1]?.value ?? "0";
    return `${page} × ${region}（${sessions}セッション / ${pv}PV）`;
  });
  return formatRanked(items);
}

// ─── GA4: 流入元 × ランディング ───────────────────────────────────────────
async function fetchSourceLanding(s, e, limit = 15) {
  const [res] = await ga4.runReport({
    property: prop,
    dateRanges: [{ startDate: s, endDate: e }],
    metrics: [{ name: "sessions" }, { name: "bounceRate" }],
    dimensions: [{ name: "sessionSource" }, { name: "landingPage" }],
    orderBys: [{ metric: { metricName: "sessions" }, desc: true }],
    limit,
  });
  const items = (res.rows ?? []).map((r) => {
    const source = pathLabel(r.dimensionValues?.[0]?.value);
    const lp = pathLabel(r.dimensionValues?.[1]?.value);
    const sessions = r.metricValues?.[0]?.value ?? "0";
    const bounce = parseFloat((parseFloat(r.metricValues?.[1]?.value ?? "0") * 100).toFixed(0));
    return `${source} → ${lp}（${sessions}セッション / 直帰${bounce}%）`;
  });
  return formatRanked(items);
}

// ─── GA4: 流入元URL TOP ──────────────────────────────────────────────────
async function fetchReferrals(s, e) {
  const [res] = await ga4.runReport({
    property: prop,
    dateRanges: [{ startDate: s, endDate: e }],
    metrics: [{ name: "sessions" }],
    dimensions: [{ name: "sessionSource" }],
    orderBys: [{ metric: { metricName: "sessions" }, desc: true }],
    limit: 15,
  });
  const rows = (res.rows ?? []).filter((r) => {
    const src = r.dimensionValues?.[0]?.value ?? "";
    return src !== "(direct)" && src !== "google" && src !== "(not set)";
  }).slice(0, 10);
  if (!rows.length) return "（Referralなし）";
  return rows
    .map((r, i) => `${i + 1}. ${pathLabel(r.dimensionValues?.[0]?.value)}（${r.metricValues?.[0]?.value}件）`)
    .join("\n");
}

// ─── GA4: ランディング / 離脱 ─────────────────────────────────────────────
async function fetchLandingPages(s, e, limit = 10) {
  const [res] = await ga4.runReport({
    property: prop,
    dateRanges: [{ startDate: s, endDate: e }],
    metrics: [{ name: "sessions" }, { name: "bounceRate" }],
    dimensions: [{ name: "landingPage" }],
    orderBys: [{ metric: { metricName: "sessions" }, desc: true }],
    limit,
  });
  const items = (res.rows ?? []).map((r) => {
    const lp = pathLabel(r.dimensionValues?.[0]?.value);
    const sessions = r.metricValues?.[0]?.value ?? "0";
    const bounce = parseFloat((parseFloat(r.metricValues?.[1]?.value ?? "0") * 100).toFixed(0));
    return `${lp}（${sessions}件 / 直帰${bounce}%）`;
  });
  return formatRanked(items);
}

async function fetchExitPages(s, e) {
  const [res] = await ga4.runReport({
    property: prop,
    dateRanges: [{ startDate: s, endDate: e }],
    metrics: [{ name: "bounceRate" }, { name: "sessions" }],
    dimensions: [{ name: "pagePath" }],
    orderBys: [{ metric: { metricName: "bounceRate" }, desc: true }],
    limit: 10,
    metricFilter: { filter: { fieldName: "sessions", numericFilter: { operation: "GREATER_THAN", value: { int64Value: "1" } } } },
  });
  if (!res.rows?.length) return "（データなし）";
  return (res.rows ?? [])
    .map((r, i) => {
      const rate = parseFloat((parseFloat(r.metricValues?.[0]?.value ?? "0") * 100).toFixed(0));
      const sessions = r.metricValues?.[1]?.value ?? "0";
      return `${i + 1}. ${pathLabel(r.dimensionValues?.[0]?.value)}（直帰${rate}% / ${sessions}セッション）`;
    })
    .join("\n");
}

// ─── GA4: ブラウザ / 時間帯 ───────────────────────────────────────────────
async function fetchBrowsers(s, e, limit = 8) {
  const [res] = await ga4.runReport({
    property: prop,
    dateRanges: [{ startDate: s, endDate: e }],
    metrics: [{ name: "sessions" }],
    dimensions: [{ name: "browser" }],
    orderBys: [{ metric: { metricName: "sessions" }, desc: true }],
    limit,
  });
  const items = (res.rows ?? []).map((r) =>
    `${pathLabel(r.dimensionValues?.[0]?.value)}（${r.metricValues?.[0]?.value}）`
  );
  return formatRanked(items);
}

async function fetchHourly(s, e) {
  const [res] = await ga4.runReport({
    property: prop,
    dateRanges: [{ startDate: s, endDate: e }],
    metrics: [{ name: "sessions" }],
    dimensions: [{ name: "hour" }],
    orderBys: [{ dimension: { dimensionName: "hour" }, desc: false }],
    limit: 24,
  });
  const byHour = new Map();
  for (const row of res.rows ?? []) {
    const h = parseInt(row.dimensionValues?.[0]?.value ?? "0", 10);
    const v = parseInt(row.metricValues?.[0]?.value ?? "0", 10);
    byHour.set(h, v);
  }
  const max = Math.max(1, ...byHour.values());
  const lines = [];
  for (let h = 0; h < 24; h++) {
    const v = byHour.get(h) ?? 0;
    if (v === 0) continue;
    const bar = "█".repeat(Math.max(1, Math.round((v / max) * 10)));
    lines.push(`${String(h).padStart(2, "0")}時  ${bar}  ${v}`);
  }
  return lines.length ? lines.join("\n") : "（データなし）";
}

// ─── Search Console ────────────────────────────────────────────────────────
const scAuth = new google.auth.GoogleAuth({ credentials, scopes: ["https://www.googleapis.com/auth/webmasters.readonly"] });

function minusDays(date, days) {
  const d = new Date(date);
  d.setUTCDate(d.getUTCDate() - days);
  return d.toISOString().slice(0, 10);
}

async function resolveSearchConsoleSiteUrl(sc, date) {
  const sitesRes = await sc.sites.list();
  const accessibleSites = (sitesRes.data.siteEntry ?? [])
    .map((site) => site.siteUrl)
    .filter(Boolean);
  const candidates = [
    SC_SITE_URL,
    DEFAULT_SC_SITE_URL,
    "https://www.medvance-edu.com/",
    "sc-domain:medvance-edu.com",
    ...accessibleSites.filter((site) => site.includes("medvance")),
  ];
  const uniqueCandidates = [...new Set(candidates.filter(Boolean))];
  const startDate = minusDays(date, 6);
  let firstAccessibleSiteUrl = null;

  for (const siteUrl of uniqueCandidates) {
    try {
      const res = await sc.searchanalytics.query({
        siteUrl,
        requestBody: {
          startDate,
          endDate: date,
          dimensions: ["date"],
          rowLimit: 7,
        },
      });
      firstAccessibleSiteUrl ??= siteUrl;
      const totals = (res.data.rows ?? []).reduce(
        (acc, row) => ({
          clicks: acc.clicks + (row.clicks ?? 0),
          impressions: acc.impressions + (row.impressions ?? 0),
        }),
        { clicks: 0, impressions: 0 },
      );
      if (totals.impressions > 0 || totals.clicks > 0) {
        if (siteUrl !== SC_SITE_URL) console.log(`  Search Console site auto-selected: ${siteUrl}`);
        return siteUrl;
      }
    } catch (err) {
      const message = err?.message ?? String(err);
      console.warn(`  Search Console candidate skipped (${siteUrl}): ${message.slice(0, 80)}`);
    }
  }

  if (firstAccessibleSiteUrl) {
    if (firstAccessibleSiteUrl !== SC_SITE_URL) {
      console.log(`  Search Console site auto-selected despite zero recent rows: ${firstAccessibleSiteUrl}`);
    }
    return firstAccessibleSiteUrl;
  }

  console.warn("  Search Console: no candidate was queryable; using configured site URL.");
  return SC_SITE_URL;
}

async function fetchSearchConsole(date) {
  try {
    const sc = google.searchconsole({ version: "v1", auth: await scAuth.getClient() });
    const siteUrl = await resolveSearchConsoleSiteUrl(sc, date);
    let row;
    let kwRows = [];
    let pageRows = [];
    let scDate = date;
    for (const lag of [2, 3]) {
      scDate = minusDays(date, lag);
      const [summaryRes, kwRes, pageRes] = await Promise.all([
        sc.searchanalytics.query({ siteUrl, requestBody: { startDate: scDate, endDate: scDate } }),
        sc.searchanalytics.query({ siteUrl, requestBody: { startDate: scDate, endDate: scDate, dimensions: ["query"], rowLimit: 10 } }),
        sc.searchanalytics.query({ siteUrl, requestBody: { startDate: scDate, endDate: scDate, dimensions: ["page"], rowLimit: 10 } }),
      ]);
      row = summaryRes.data.rows?.[0];
      kwRows = kwRes.data.rows ?? [];
      pageRows = pageRes.data.rows ?? [];
      if (row) break;
    }
    const topKw = kwRows
      .map((r, i) => `${i + 1}. ${r.keys[0]}  ${r.clicks}クリック / 表示${r.impressions} / ${parseFloat(r.position.toFixed(1))}位`)
      .join("\n");
    const topPages = pageRows
      .map((r, i) => {
        const url = r.keys[0] ?? "";
        const path = url.replace(/^https?:\/\/[^/]+/, "") || "/";
        return `${i + 1}. ${path}  ${r.clicks}クリック / 表示${r.impressions} / ${parseFloat(r.position.toFixed(1))}位`;
      })
      .join("\n");
    return {
      scDate,
      impressions: row?.impressions ?? 0,
      clicks:      row?.clicks ?? 0,
      ctr:         parseFloat(((row?.ctr ?? 0) * 100).toFixed(2)),
      position:    parseFloat((row?.position ?? 0).toFixed(1)),
      topKw:       topKw ? `（${scDate}分）\n${topKw}` : "（データなし）",
      topPages:    topPages ? `（${scDate}分）\n${topPages}` : "（データなし）",
      indexCount:  kwRows.length,
    };
  } catch (err) {
    console.warn("  ⚠️  Search Console:", err.message.slice(0, 80));
    return { impressions: 0, clicks: 0, ctr: 0, position: 0, topKw: "（権限未付与）", topPages: "（権限未付与）", indexCount: 0 };
  }
}

// ─── PageSpeed Insights ────────────────────────────────────────────────────
const PSI_TIMEOUT_MS = 120_000;
const PSI_MAX_ATTEMPTS = 3;

const psiAuth = new google.auth.GoogleAuth({
  credentials,
  scopes: ["https://www.googleapis.com/auth/openid"],
});

async function psiAccessToken() {
  try {
    const client = await psiAuth.getClient();
    const token  = await client.getAccessToken();
    return typeof token === "string" ? token : token?.token ?? null;
  } catch {
    return null;
  }
}

function buildPsiUrl(strategy, apiKey) {
  const params = new URLSearchParams({
    url: PAGESPEED_URL,
    strategy,
    category: "performance",
  });
  if (apiKey) params.set("key", apiKey);
  return `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?${params.toString()}`;
}

async function callPSI(strategy, { apiKey, bearerToken }) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), PSI_TIMEOUT_MS);
  try {
    const headers = { "Accept": "application/json" };
    if (bearerToken) headers["Authorization"] = `Bearer ${bearerToken}`;
    const res = await fetch(buildPsiUrl(strategy, apiKey), { headers, signal: controller.signal });
    const body = await res.json();
    if (!res.ok || body.error) {
      const code = body.error?.code ?? res.status;
      const msg  = body.error?.message ?? `HTTP ${res.status}`;
      throw new Error(`[${code}] ${msg}`);
    }
    const score = body.lighthouseResult?.categories?.performance?.score;
    if (score == null) throw new Error("lighthouseResult.performance.score が取得できませんでした");
    return Math.round(score * 100);
  } finally {
    clearTimeout(timer);
  }
}

async function fetchScoreWithRetry(strategy, auth) {
  let lastErr = null;
  for (let attempt = 1; attempt <= PSI_MAX_ATTEMPTS; attempt++) {
    try {
      return await callPSI(strategy, auth);
    } catch (err) {
      lastErr = err;
      const msg = err?.message ?? String(err);
      const retriable = /\[5\d\d\]|\[429\]|AbortError|network|fetch failed/i.test(msg);
      console.warn(`  ⚠️  PageSpeed[${strategy}] attempt ${attempt}/${PSI_MAX_ATTEMPTS}: ${msg.slice(0, 140)}`);
      if (!retriable || attempt === PSI_MAX_ATTEMPTS) break;
      await new Promise((r) => setTimeout(r, 2000 * attempt));
    }
  }
  throw lastErr ?? new Error("PageSpeed Insights 取得失敗");
}

async function fetchPageSpeed() {
  const apiKey      = process.env.PAGESPEED_API_KEY || null;
  const bearerToken = apiKey ? null : await psiAccessToken();
  const auth        = { apiKey, bearerToken };

  if (apiKey)         console.log("  🔑 PSI: API key を使用");
  else if (bearerToken) console.log("  🔑 PSI: サービスアカウントOAuthトークンを使用");
  else                console.log("  ⚠️  PSI: 認証なし（匿名クォータのため失敗の可能性大）");

  const result = { mobile: null, desktop: null, error: null };
  try {
    const [mobile, desktop] = await Promise.all([
      fetchScoreWithRetry("mobile",  auth).catch((e) => { result.error = (result.error ? result.error + " / " : "") + `mobile: ${e.message}`;  return null; }),
      fetchScoreWithRetry("desktop", auth).catch((e) => { result.error = (result.error ? result.error + " / " : "") + `desktop: ${e.message}`; return null; }),
    ]);
    result.mobile  = mobile;
    result.desktop = desktop;
  } catch (err) {
    result.error = err.message;
  }
  return result;
}

// ─── Notion ────────────────────────────────────────────────────────────────
const NH = { "Authorization": `Bearer ${NOTION_API_KEY}`, "Notion-Version": "2022-06-28", "Content-Type": "application/json" };
const nFetch = (path, method, body) =>
  fetch(`https://api.notion.com/v1${path}`, { method, headers: NH, body: body ? JSON.stringify(body) : undefined })
    .then(r => r.json()).then(j => { if (j.object === "error") throw new Error(j.message); return j; });

async function ensureNotionProperties() {
  const desired = {
    "リード数": { number: { format: "number" } },
    "CTAクリック数": { number: { format: "number" } },
    "市区町村TOP": { rich_text: {} },
    "ページ×地域": { rich_text: {} },
    "流入×LP": { rich_text: {} },
    "ブラウザTOP": { rich_text: {} },
    "時間帯": { rich_text: {} },
    "SC上位ページ": { rich_text: {} },
    "チャネル内訳": { rich_text: {} },
  };
  try {
    const db = await nFetch(`/databases/${NOTION_DATABASE_ID}`, "GET");
    const existing = db.properties ?? {};
    const toAdd = {};
    for (const [name, schema] of Object.entries(desired)) {
      if (!existing[name]) toAdd[name] = schema;
    }
    if (Object.keys(toAdd).length === 0) {
      console.log("  📐 Notion DB: 追加プロパティなし（既存）");
      return;
    }
    await nFetch(`/databases/${NOTION_DATABASE_ID}`, "PATCH", { properties: toAdd });
    console.log(`  📐 Notion DB プロパティ追加: ${Object.keys(toAdd).join(", ")}`);
  } catch (err) {
    console.warn(`  ⚠️  Notion schema update skipped: ${(err?.message ?? String(err)).slice(0, 120)}`);
  }
}

async function checkDuplicate(date) {
  const res = await nFetch(`/databases/${NOTION_DATABASE_ID}/query`, "POST", { filter: { property: "日付", date: { equals: date } } });
  return res.results.length > 0;
}

async function archiveExistingRecords(date) {
  const res = await nFetch(`/databases/${NOTION_DATABASE_ID}/query`, "POST", { filter: { property: "日付", date: { equals: date } } });
  for (const page of res.results ?? []) {
    await nFetch(`/pages/${page.id}`, "PATCH", { archived: true });
    console.log(`  🗑️  アーカイブ: ${page.id.slice(0, 8)}… (${date})`);
  }
  return res.results?.length ?? 0;
}

// ─── Notion: 日次アクセスログDB に保存（原本） ─────────────────────────────
async function postToNotion(data) {
  const {
    date, today, prev, channels, topPages, contactPV, devices, regions, cities,
    pageRegion, sourceLanding, referrals, landingPages, exitPages, browsers,
    hourly, leads, ctaClicks, sc, pageSpeed,
  } = data;

  const pct      = (a, b) => b > 0 ? parseFloat(((a - b) / b * 100).toFixed(1)) : 0;
  const pvChange = pct(today.pv, prev.pv);
  const uuChange = pct(today.uu, prev.uu);
  const sign     = (v) => (v >= 0 ? `+${v}%` : `${v}%`);

  const psFmt = (v) => (v == null ? "—" : v);
  const psMemo = pageSpeed.error
    ? `PageSpeed 測定失敗(${pageSpeed.error.slice(0, 60)})`
    : `PageSpeed MB:${psFmt(pageSpeed.mobile)} PC:${psFmt(pageSpeed.desktop)}`;

  const memo = [
    `PV ${sign(pvChange)}`,
    `新規 ${today.newUserRate}%`,
    `Organic ${channels.organic}`,
    `モバイル ${devices.mobile}%`,
    `リード ${leads}`,
    `CTA ${ctaClicks}`,
    `SC ${sc.clicks}クリック / ${sc.position}位`,
    psMemo,
  ].join(" | ");

  const properties = {
    "Name":                    { title: [{ type: "text", text: { content: date } }] },
    "日付":                    { date: { start: date } },
    "PV（ページビュー）":       { number: today.pv },
    "UU（ユニークユーザー）":   { number: today.uu },
    "新規ユーザー数":           { number: today.newUsers },
    "新規ユーザー率(%)":        { number: today.newUserRate },
    "セッション数":             { number: today.sessions },
    "直帰率(%)":               { number: today.bounceRate },
    "平均セッション時間(秒)":   { number: today.avgSessionSec },
    "Organic流入":             { number: channels.organic },
    "Direct流入":              { number: channels.direct },
    "Social流入":              { number: channels.social },
    "コンタクトページPV":       { number: contactPV },
    "前日比PV(%)":             { number: pvChange },
    "前日比UU(%)":             { number: uuChange },
    "モバイル比率(%)":         { number: devices.mobile },
    "PC比率(%)":               { number: devices.desktop },
    "SC表示回数":              { number: sc.impressions },
    "SCクリック数":            { number: sc.clicks },
    "SC_CTR(%)":              { number: sc.ctr },
    "SC平均掲載順位":          { number: sc.position },
    "PageSpeed_モバイル":      { number: pageSpeed.mobile  ?? null },
    "PageSpeed_PC":           { number: pageSpeed.desktop ?? null },
    "リード数":                { number: leads },
    "CTAクリック数":           { number: ctaClicks },
    "TOP5ページ":              { rich_text: rt(topPagesText(topPages)) },
    "SC上位キーワード":         { rich_text: rt(sc.topKw) },
    "SC上位ページ":            { rich_text: rt(sc.topPages) },
    "上位都道府県":             { rich_text: rt(regions) },
    "市区町村TOP":             { rich_text: rt(cities) },
    "ページ×地域":             { rich_text: rt(pageRegion) },
    "流入×LP":                { rich_text: rt(sourceLanding) },
    "流入元TOP3":              { rich_text: rt(referrals) },
    "ランディングページTOP3":   { rich_text: rt(landingPages) },
    "離脱ページTOP3":          { rich_text: rt(exitPages) },
    "ブラウザTOP":             { rich_text: rt(browsers) },
    "時間帯":                  { rich_text: rt(hourly) },
    "チャネル内訳":             { rich_text: rt(channels.breakdownText) },
    "メモ":                    { rich_text: rt(memo) },
  };

  await nFetch("/pages", "POST", {
    parent: { database_id: NOTION_DATABASE_ID },
    properties,
  });
}

function codeBlock(content) {
  return {
    type: "code",
    code: {
      language: "plain text",
      caption: [],
      rich_text: rt(content || "（データなし）"),
    },
  };
}

function h2(text) {
  return { type: "heading_2", heading_2: { is_toggleable: false, color: "default", rich_text: [{ type: "text", text: { content: text } }] } };
}

function h3(text) {
  return { type: "heading_3", heading_3: { rich_text: [{ type: "text", text: { content: text } }] } };
}

// ─── Notion: デイリーレポートページ作成 ───────────────────────────────────
async function createDailyPage(data) {
  const {
    date, today, prev, channels, topPages, contactPV, devices, regions, cities,
    pageRegion, sourceLanding, referrals, landingPages, exitPages, browsers,
    hourly, leads, ctaClicks, sc, pageSpeed,
  } = data;

  const pvChange = prev.pv > 0 ? parseFloat(((today.pv - prev.pv) / prev.pv * 100).toFixed(1)) : 0;
  const sign     = (v) => (v >= 0 ? `+${v}%` : `${v}%`);
  const [mm, dd] = [date.slice(5, 7), date.slice(8, 10)];

  const pvIcon  = pvChange >= 10 ? "🟢" : pvChange >= 0 ? "🟡" : "🔴";
  const scIcon  = sc.clicks > 0 ? "🟢" : sc.impressions > 0 ? "🟡" : "⚪";
  const psIcon  = pageSpeed.mobile == null ? "⚪" : pageSpeed.mobile >= 70 ? "🟢" : pageSpeed.mobile >= 50 ? "🟡" : "🔴";
  const psText  = pageSpeed.error
    ? `測定失敗: ${pageSpeed.error.slice(0, 140)}`
    : `モバイル  ${pageSpeed.mobile ?? "—"}点　PC  ${pageSpeed.desktop ?? "—"}点`;
  const psColor = pageSpeed.mobile == null
    ? "gray_background"
    : pageSpeed.mobile >= 70 ? "green_background"
    : pageSpeed.mobile >= 50 ? "yellow_background"
    : "red_background";
  const cvIcon  = contactPV > 0 || leads > 0 ? "🟢" : "⚪";

  const blocks = [
    {
      type: "callout",
      callout: {
        icon: { type: "emoji", emoji: "📅" },
        color: "gray_background",
        rich_text: [{ type: "text", text: { content: `集計日: ${date}　自動取得: GA4 + Search Console + PageSpeed（詳細ディメンション）` } }],
      },
    },
    { type: "divider", divider: {} },

    h2("⚡ 今日のKPI"),
    {
      type: "callout",
      callout: {
        icon: { type: "emoji", emoji: pvIcon },
        color: pvChange >= 0 ? "blue_background" : "red_background",
        rich_text: [{ type: "text", text: { content: `PV  ${today.pv}  （前日比 ${sign(pvChange)}  /  前日 ${prev.pv}PV）` } }],
      },
    },
    {
      type: "callout",
      callout: {
        icon: { type: "emoji", emoji: "👤" },
        color: "green_background",
        rich_text: [{ type: "text", text: { content: `ユニークユーザー  ${today.uu} 人　新規 ${today.newUsers} 人（新規率 ${today.newUserRate}%）` } }],
      },
    },
    {
      type: "callout",
      callout: {
        icon: { type: "emoji", emoji: "🔍" },
        color: "purple_background",
        rich_text: [{ type: "text", text: { content: `流入  Organic ${channels.organic}　Direct ${channels.direct}　Social ${channels.social}　Referral ${channels.referral}　Paid ${channels.paid}` } }],
      },
    },
    {
      type: "callout",
      callout: {
        icon: { type: "emoji", emoji: "📊" },
        color: "gray_background",
        rich_text: [{ type: "text", text: { content: `セッション ${today.sessions}　直帰率 ${today.bounceRate}%　平均滞在 ${today.avgSessionSec}秒` } }],
      },
    },
    {
      type: "callout",
      callout: {
        icon: { type: "emoji", emoji: cvIcon },
        color: (contactPV > 0 || leads > 0) ? "yellow_background" : "gray_background",
        rich_text: [{ type: "text", text: { content: `Contact PV ${contactPV}　generate_lead ${leads}　cta_click ${ctaClicks}　スマホ ${devices.mobile}%  PC ${devices.desktop}%` } }],
      },
    },

    h2("🔍 Search Console"),
    { type: "divider", divider: {} },
    {
      type: "callout",
      callout: {
        icon: { type: "emoji", emoji: scIcon },
        color: sc.clicks > 0 ? "green_background" : "gray_background",
        rich_text: [{ type: "text", text: { content: `表示 ${sc.impressions}回　クリック ${sc.clicks}回　CTR ${sc.ctr}%　平均順位 ${sc.position}位` } }],
      },
    },
    h3("上位キーワード"),
    codeBlock(sc.topKw),
    h3("検索経由の上位ページ"),
    codeBlock(sc.topPages),

    h2("📄 ページ詳細"),
    { type: "divider", divider: {} },
    h3("TOPページ（最大20）"),
    codeBlock(topPagesText(topPages)),
    h3("ランディングページ"),
    codeBlock(landingPages),
    h3("高直帰ページ"),
    codeBlock(exitPages),
    h3("流入元 × ランディング"),
    codeBlock(sourceLanding),

    h2("📍 地域・端末・時間帯"),
    { type: "divider", divider: {} },
    h3("都道府県 TOP"),
    codeBlock(regions),
    h3("市区町村 TOP"),
    codeBlock(cities),
    h3("ページ × 地域"),
    codeBlock(pageRegion),
    h3("デバイス / ブラウザ / 流入元"),
    codeBlock(`デバイス\nスマホ ${devices.mobile}% / PC ${devices.desktop}% / タブレット ${devices.tablet}%\n\nブラウザ\n${browsers}\n\n流入元\n${referrals}\n\nチャネル内訳\n${channels.breakdownText}`),
    h3("時間帯（セッション）"),
    codeBlock(hourly),

    h2("⚡ PageSpeed Insights"),
    { type: "divider", divider: {} },
    {
      type: "callout",
      callout: {
        icon: { type: "emoji", emoji: psIcon },
        color: psColor,
        rich_text: [{ type: "text", text: { content: psText } }],
      },
    },
  ];

  // Notion create page accepts max 100 children
  const children = blocks.slice(0, 100);

  await nFetch("/pages", "POST", {
    parent: { page_id: NOTION_DAILY_PAGE_ID },
    icon: { type: "emoji", emoji: "📊" },
    properties: {
      title: { title: [{ type: "text", text: { content: `📊 ${mm}/${dd} デイリーレポート` } }] },
    },
    children,
  });

  console.log(`  📊 デイリーページ作成: ${mm}/${dd}`);
}

// ─── Notion DB から指定期間のデータを取得 ─────────────────────────────────
async function fetchRangeFromDB(startDate, endDate) {
  const res = await nFetch(`/databases/${NOTION_DATABASE_ID}/query`, "POST", {
    filter: {
      and: [
        { property: "日付", date: { on_or_after: startDate } },
        { property: "日付", date: { on_or_before: endDate } },
      ],
    },
    sorts: [{ property: "日付", direction: "ascending" }],
    page_size: 20,
  });
  return res.results ?? [];
}

function numProp(page, name) { return page.properties?.[name]?.number ?? 0; }
function dateProp(page)      { return page.properties?.["日付"]?.date?.start ?? ""; }

// ─── Notion: 週次レポートページ作成 ───────────────────────────────────────
async function createWeeklyPage(sunday) {
  const end   = new Date(sunday);
  const start = new Date(sunday);
  start.setDate(end.getDate() - 6);
  const startDate = start.toISOString().slice(0, 10);
  const endDate   = end.toISOString().slice(0, 10);

  const rows = await fetchRangeFromDB(startDate, endDate);
  if (rows.length === 0) {
    console.log("  ⚠️  週次: DBにデータなし。スキップ");
    return;
  }

  let totalPV = 0, totalUU = 0, totalOrganic = 0, totalDirect = 0, totalSocial = 0;
  let totalContact = 0, totalImpressions = 0, totalClicks = 0, totalMobilePct = 0;
  let totalLeads = 0, totalCta = 0;
  const pvByDay = [];

  for (const row of rows) {
    const pv = numProp(row, "PV（ページビュー）");
    totalPV          += pv;
    totalUU          += numProp(row, "UU（ユニークユーザー）");
    totalOrganic     += numProp(row, "Organic流入");
    totalDirect      += numProp(row, "Direct流入");
    totalSocial      += numProp(row, "Social流入");
    totalContact     += numProp(row, "コンタクトページPV");
    totalImpressions += numProp(row, "SC表示回数");
    totalClicks      += numProp(row, "SCクリック数");
    totalMobilePct   += numProp(row, "モバイル比率(%)");
    totalLeads       += numProp(row, "リード数");
    totalCta         += numProp(row, "CTAクリック数");
    pvByDay.push({ date: dateProp(row), pv });
  }

  const n = rows.length;
  const avgPV     = Math.round(totalPV / n);
  const avgMobile = (totalMobilePct / n).toFixed(1);
  const weekCTR   = totalImpressions > 0 ? (totalClicks / totalImpressions * 100).toFixed(2) : "0.00";
  const maxPV     = Math.max(...pvByDay.map(d => d.pv), 1);

  const chart = pvByDay.map(d => {
    const [m, day] = [d.date.slice(5, 7), d.date.slice(8, 10)];
    const bar = "█".repeat(Math.round(d.pv / maxPV * 10)).padEnd(10, "░");
    return `${m}/${day}  ${bar}  ${d.pv}PV`;
  }).join("\n");

  const [sm, sd] = [startDate.slice(5, 7), startDate.slice(8, 10)];
  const [em, ed] = [endDate.slice(5, 7), endDate.slice(8, 10)];
  const today    = new Date().toISOString().slice(0, 10);

  const blocks = [
    {
      type: "callout",
      callout: {
        icon: { type: "emoji", emoji: "📅" },
        color: "gray_background",
        rich_text: [{ type: "text", text: { content: `集計期間: ${startDate} 〜 ${endDate}（${n}日間）　最終更新: ${today}` } }],
      },
    },
    { type: "divider", divider: {} },
    h2("⚡ 週間KPI"),
    {
      type: "callout",
      callout: {
        icon: { type: "emoji", emoji: "📄" },
        color: "blue_background",
        rich_text: [{ type: "text", text: { content: `総PV  ${totalPV}  （1日平均 ${avgPV}PV）` } }],
      },
    },
    {
      type: "callout",
      callout: {
        icon: { type: "emoji", emoji: "👤" },
        color: "green_background",
        rich_text: [{ type: "text", text: { content: `総ユニークユーザー  ${totalUU} 人` } }],
      },
    },
    {
      type: "callout",
      callout: {
        icon: { type: "emoji", emoji: "🔍" },
        color: "purple_background",
        rich_text: [{ type: "text", text: { content: `Organic ${totalOrganic}　Direct ${totalDirect}　Social ${totalSocial}` } }],
      },
    },
    {
      type: "callout",
      callout: {
        icon: { type: "emoji", emoji: "📞" },
        color: (totalContact > 0 || totalLeads > 0) ? "yellow_background" : "gray_background",
        rich_text: [{ type: "text", text: { content: `Contact PV ${totalContact}　リード ${totalLeads}　CTA ${totalCta}　SC表示 ${totalImpressions}　SCクリック ${totalClicks}　CTR ${weekCTR}%` } }],
      },
    },
    {
      type: "callout",
      callout: {
        icon: { type: "emoji", emoji: "📱" },
        color: "gray_background",
        rich_text: [{ type: "text", text: { content: `平均モバイル率  ${avgMobile}%` } }],
      },
    },
    h2(`📊 日次PVトレンド（${sm}/${sd}〜${em}/${ed}）`),
    { type: "divider", divider: {} },
    codeBlock(chart),
    h2("🚀 来週の改善アクション"),
    { type: "divider", divider: {} },
    { type: "to_do", to_do: { checked: false, color: "default", rich_text: [{ type: "text", text: { content: "Search Console で順位変動を確認する" } }] } },
    { type: "to_do", to_do: { checked: false, color: "default", rich_text: [{ type: "text", text: { content: "Contact PV・generate_lead が少ない場合はCTAを見直す" } }] } },
    { type: "to_do", to_do: { checked: false, color: "default", rich_text: [{ type: "text", text: { content: "直帰率が高いページのコンテンツを改善する" } }] } },
    { type: "to_do", to_do: { checked: false, color: "default", rich_text: [{ type: "text", text: { content: "ページ×地域・流入×LP で伸びている導線を増やす" } }] } },
    { type: "to_do", to_do: { checked: false, color: "default", rich_text: [{ type: "text", text: { content: "PageSpeedスコアが低ければ画像最適化を確認する" } }] } },
  ];

  await nFetch("/pages", "POST", {
    parent: { page_id: NOTION_WEEKLY_PAGE_ID },
    icon: { type: "emoji", emoji: "📈" },
    properties: {
      title: { title: [{ type: "text", text: { content: `📈 週次レポート ${sm}/${sd}〜${em}/${ed}` } }] },
    },
    children: blocks.slice(0, 100),
  });

  console.log(`  📈 週次ページ作成: ${sm}/${sd}〜${em}/${ed}`);
}

// ─── メイン ────────────────────────────────────────────────────────────────
async function main() {
  console.log("📐 Notion DB スキーマ確認...");
  await ensureNotionProperties();

  if (FORCE) {
    console.log(`♻️  --force 指定: 既存レコードをアーカイブして再作成します`);
    await archiveExistingRecords(targetDate);
  } else if (await checkDuplicate(targetDate)) {
    console.log(`⚠️  ${targetDate} はすでに存在します。スキップします。`);
    return;
  }

  console.log("📊 GA4 取得中...");
  const [
    today, prev, channels, topPages, contactPV, devices, regions, cities,
    pageRegion, sourceLanding, referrals, landingPages, exitPages, browsers,
    hourly, leads, ctaClicks,
  ] = await Promise.all([
    fetchGA4(targetDate, targetDate),
    fetchGA4(prevDate, prevDate),
    safeGa4("channels", () => fetchChannels(targetDate, targetDate), { organic: 0, direct: 0, social: 0, referral: 0, paid: 0, other: 0, breakdownText: "（取得失敗）" }),
    safeGa4("topPages", () => fetchTopPages(targetDate, targetDate, 20), []),
    safeGa4("contactPV", () => fetchContactPV(targetDate, targetDate), 0),
    safeGa4("devices", () => fetchDevices(targetDate, targetDate), { mobile: 0, desktop: 0, tablet: 0 }),
    safeGa4("regions", () => fetchRegions(targetDate, targetDate, 10), "（取得失敗）"),
    safeGa4("cities", () => fetchCities(targetDate, targetDate, 10), "（取得失敗）"),
    safeGa4("pageRegion", () => fetchPageRegion(targetDate, targetDate, 15), "（取得失敗）"),
    safeGa4("sourceLanding", () => fetchSourceLanding(targetDate, targetDate, 15), "（取得失敗）"),
    safeGa4("referrals", () => fetchReferrals(targetDate, targetDate), "（取得失敗）"),
    safeGa4("landingPages", () => fetchLandingPages(targetDate, targetDate, 10), "（取得失敗）"),
    safeGa4("exitPages", () => fetchExitPages(targetDate, targetDate), "（取得失敗）"),
    safeGa4("browsers", () => fetchBrowsers(targetDate, targetDate), "（取得失敗）"),
    safeGa4("hourly", () => fetchHourly(targetDate, targetDate), "（取得失敗）"),
    safeGa4("generate_lead", () => fetchEventCount(targetDate, targetDate, "generate_lead"), 0),
    safeGa4("cta_click", () => fetchEventCount(targetDate, targetDate, "cta_click"), 0),
  ]);

  console.log("🔍 Search Console 取得中...");
  const sc = await fetchSearchConsole(targetDate);

  console.log("⚡ PageSpeed 取得中...");
  const pageSpeed = await fetchPageSpeed();

  const pvChange = prev.pv > 0 ? parseFloat(((today.pv - prev.pv) / prev.pv * 100).toFixed(1)) : 0;
  const sign     = (v) => (v >= 0 ? `+${v}%` : `${v}%`);

  console.log(`\n  ── GA4 ──`);
  console.log(`  PV: ${today.pv} (${sign(pvChange)}) | UU: ${today.uu} | 新規: ${today.newUsers} (${today.newUserRate}%)`);
  console.log(`  直帰率: ${today.bounceRate}% | 滞在: ${today.avgSessionSec}秒`);
  console.log(`  Organic: ${channels.organic} | Direct: ${channels.direct} | Social: ${channels.social} | Referral: ${channels.referral}`);
  console.log(`  モバイル: ${devices.mobile}% | PC: ${devices.desktop}%`);
  console.log(`  リード(generate_lead): ${leads} | CTA: ${ctaClicks} | /contact: ${contactPV}PV`);
  console.log(`  地域: ${regions.replace(/\n/g, " / ").slice(0, 160)}`);
  console.log(`  市区町村: ${cities.replace(/\n/g, " / ").slice(0, 160)}`);
  console.log(`  ページ×地域: ${pageRegion.replace(/\n/g, " / ").slice(0, 160)}`);
  console.log(`  流入×LP: ${sourceLanding.replace(/\n/g, " / ").slice(0, 160)}`);
  console.log(`  TOPページ数: ${topPages.length}`);
  console.log(`\n  ── Search Console ──`);
  console.log(`  表示: ${sc.impressions} | クリック: ${sc.clicks} | CTR: ${sc.ctr}% | 順位: ${sc.position}位`);
  console.log(`\n  ── PageSpeed ──`);
  if (pageSpeed.error) {
    console.log(`  ❌ 測定失敗: ${pageSpeed.error}`);
  } else {
    console.log(`  モバイル: ${pageSpeed.mobile ?? "—"}点 | PC: ${pageSpeed.desktop ?? "—"}点`);
  }

  const data = {
    date: targetDate, today, prev, channels, topPages, contactPV, devices,
    regions, cities, pageRegion, sourceLanding, referrals, landingPages,
    exitPages, browsers, hourly, leads, ctaClicks, sc, pageSpeed,
  };

  console.log("\n📝 [1/3] 日次DBに保存中...");
  await postToNotion(data);
  console.log(`  ✅ DB保存完了`);

  console.log("📝 [2/3] デイリーレポートページ作成中...");
  await createDailyPage(data);

  const dayOfWeek = new Date(targetDate).getDay();
  if (NO_WEEKLY) {
    console.log("📝 [3/3] 週次レポートはスキップ（--no-weekly）");
  } else if (dayOfWeek === 0) {
    console.log("📝 [3/3] 週次レポートページ作成中（日曜日）...");
    await createWeeklyPage(targetDate);
  } else {
    console.log(`📝 [3/3] 週次レポートはスキップ（日曜日のみ作成 / 今日は${["日","月","火","水","木","金","土"][dayOfWeek]}曜日）`);
  }

  console.log(`\n✅ ${targetDate} すべて完了`);
}

main().catch(err => { console.error("❌", err.message); process.exit(1); });
