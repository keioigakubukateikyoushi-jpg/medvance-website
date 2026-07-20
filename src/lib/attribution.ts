/**
 * First-touch attribution (landing / UTM / referrer).
 * Anonymous only — never stores name/email/phone.
 */

export type Attribution = {
  landingPath: string;
  landingUrl: string;
  referrer: string;
  utm_source: string;
  utm_medium: string;
  utm_campaign: string;
  utm_content: string;
  utm_term: string;
  gclid: string;
  firstTouchAt: string;
  lastPath: string;
};

const STORAGE_KEY = "mv_attr_v1";

const emptyAttribution = (): Attribution => ({
  landingPath: "",
  landingUrl: "",
  referrer: "",
  utm_source: "",
  utm_medium: "",
  utm_campaign: "",
  utm_content: "",
  utm_term: "",
  gclid: "",
  firstTouchAt: "",
  lastPath: "",
});

function readStored(): Attribution | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(STORAGE_KEY) ?? sessionStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as Partial<Attribution>;
    return { ...emptyAttribution(), ...parsed };
  } catch {
    return null;
  }
}

function writeStored(attr: Attribution): void {
  if (typeof window === "undefined") return;
  try {
    const json = JSON.stringify(attr);
    localStorage.setItem(STORAGE_KEY, json);
    sessionStorage.setItem(STORAGE_KEY, json);
  } catch {
    // private mode / quota — ignore
  }
}

function pick(params: URLSearchParams, key: string): string {
  return (params.get(key) ?? "").trim();
}

/** Capture first-touch landing + UTM; refresh lastPath every page. */
export function captureAttribution(): Attribution {
  if (typeof window === "undefined") return emptyAttribution();

  const params = new URLSearchParams(window.location.search);
  const pathWithQuery = `${window.location.pathname}${window.location.search}`;
  const existing = readStored();
  const now = new Date().toISOString();

  if (!existing?.landingPath) {
    const created: Attribution = {
      landingPath: pathWithQuery || "/",
      landingUrl: window.location.href,
      referrer: document.referrer || "",
      utm_source: pick(params, "utm_source"),
      utm_medium: pick(params, "utm_medium"),
      utm_campaign: pick(params, "utm_campaign"),
      utm_content: pick(params, "utm_content"),
      utm_term: pick(params, "utm_term"),
      gclid: pick(params, "gclid"),
      firstTouchAt: now,
      lastPath: pathWithQuery || "/",
    };
    writeStored(created);
    return created;
  }

  // Keep first-touch; fill UTM only if previously empty and present now
  const next: Attribution = {
    ...existing,
    lastPath: pathWithQuery || existing.lastPath,
    utm_source: existing.utm_source || pick(params, "utm_source"),
    utm_medium: existing.utm_medium || pick(params, "utm_medium"),
    utm_campaign: existing.utm_campaign || pick(params, "utm_campaign"),
    utm_content: existing.utm_content || pick(params, "utm_content"),
    utm_term: existing.utm_term || pick(params, "utm_term"),
    gclid: existing.gclid || pick(params, "gclid"),
  };
  writeStored(next);
  return next;
}

export function getAttribution(): Attribution {
  return readStored() ?? emptyAttribution();
}

/** Compact string for email / CRM (no PII). */
export function formatAttributionForEmail(attr: Attribution): string {
  const lines = [
    `初回LP: ${attr.landingPath || "不明"}`,
    `最終ページ: ${attr.lastPath || "不明"}`,
    `リファラ: ${attr.referrer || "なし"}`,
    `utm_source: ${attr.utm_source || "—"}`,
    `utm_medium: ${attr.utm_medium || "—"}`,
    `utm_campaign: ${attr.utm_campaign || "—"}`,
    `utm_content: ${attr.utm_content || "—"}`,
    `utm_term: ${attr.utm_term || "—"}`,
    `gclid: ${attr.gclid ? "あり" : "なし"}`,
    `初回接触: ${attr.firstTouchAt || "—"}`,
  ];
  return lines.join("\n");
}
