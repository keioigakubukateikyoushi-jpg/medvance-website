/**
 * Search Console health check for Medvance.
 *
 * Usage:
 *   node scripts/check-sc-health.mjs
 *   node scripts/check-sc-health.mjs --days 14
 *
 * Required env:
 *   GA4_SERVICE_ACCOUNT or GOOGLE_SERVICE_ACCOUNT_JSON
 *
 * Optional env:
 *   SC_SITE_URL (defaults to https://medvance-edu.com/)
 */

import { google } from "googleapis";

const DEFAULT_SITE_URL = "https://medvance-edu.com/";

function arg(name, fallback) {
  const i = process.argv.indexOf(name);
  return i !== -1 && process.argv[i + 1] ? process.argv[i + 1] : fallback;
}

function isoDate(date) {
  return date.toISOString().slice(0, 10);
}

function parseCredentials() {
  const raw = process.env.GA4_SERVICE_ACCOUNT || process.env.GOOGLE_SERVICE_ACCOUNT_JSON;
  if (!raw) {
    throw new Error("GA4_SERVICE_ACCOUNT or GOOGLE_SERVICE_ACCOUNT_JSON is not set");
  }
  return JSON.parse(raw);
}

async function main() {
  const days = Number(arg("--days", "7"));
  const end = arg("--end", isoDate(new Date()));
  const endDate = new Date(end);
  const startDate = new Date(endDate);
  startDate.setUTCDate(startDate.getUTCDate() - Math.max(days - 1, 1));

  const auth = new google.auth.GoogleAuth({
    credentials: parseCredentials(),
    scopes: ["https://www.googleapis.com/auth/webmasters.readonly"],
  });
  const sc = google.searchconsole({ version: "v1", auth });

  const sitesRes = await sc.sites.list();
  const accessibleSites = (sitesRes.data.siteEntry ?? [])
    .map((site) => site.siteUrl)
    .filter(Boolean);

  const configuredSite = process.env.SC_SITE_URL || DEFAULT_SITE_URL;
  const candidates = [
    configuredSite,
    DEFAULT_SITE_URL,
    "https://www.medvance-edu.com/",
    "sc-domain:medvance-edu.com",
    ...accessibleSites.filter((site) => site.includes("medvance")),
  ];
  const uniqueCandidates = [...new Set(candidates)];

  console.log(`Search Console health check: ${isoDate(startDate)} to ${end}`);
  console.log(`Accessible medvance properties: ${accessibleSites.filter((site) => site.includes("medvance")).join(", ") || "none"}`);

  const results = [];
  for (const siteUrl of uniqueCandidates) {
    try {
      const res = await sc.searchanalytics.query({
        siteUrl,
        requestBody: {
          startDate: isoDate(startDate),
          endDate: end,
          dimensions: ["date"],
          rowLimit: days,
        },
      });
      const rows = res.data.rows ?? [];
      const totals = rows.reduce(
        (acc, row) => ({
          clicks: acc.clicks + (row.clicks ?? 0),
          impressions: acc.impressions + (row.impressions ?? 0),
        }),
        { clicks: 0, impressions: 0 },
      );
      results.push({ siteUrl, rows, totals });
      console.log(`OK ${siteUrl}: rows=${rows.length}, impressions=${totals.impressions}, clicks=${totals.clicks}`);
      if (rows.length) {
        console.log(JSON.stringify(rows, null, 2));
        return;
      }
    } catch (err) {
      console.log(`NG ${siteUrl}: ${err?.message ?? String(err)}`);
    }
  }

  const best = results.find((result) => result.totals.impressions > 0 || result.totals.clicks > 0);
  if (best) {
    console.log(JSON.stringify(best.rows, null, 2));
    return;
  }

  throw new Error("Search Console returned zero rows for all Medvance property candidates. Check ownership, service-account access, sitemap submission, and SC_SITE_URL.");
}

main().catch((err) => {
  console.error(`SC health check failed: ${err.message}`);
  process.exit(1);
});
