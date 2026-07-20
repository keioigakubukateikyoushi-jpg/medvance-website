type GtagParams = Record<string, string | number | boolean | null | undefined>;

type GtagFn = (
  command: "event" | "config" | "set" | "js" | "consent",
  target: string | Date,
  params?: GtagParams,
) => void;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: GtagFn;
  }
}

export function track(name: string, params: GtagParams = {}): void {
  if (typeof window === "undefined") return;

  // Strip empty strings / undefined so GA4 does not get noise
  const clean: GtagParams = {};
  for (const [k, v] of Object.entries(params)) {
    if (v === undefined || v === null || v === "") continue;
    // Never send obvious PII keys
    if (/email|phone|name|address/i.test(k)) continue;
    clean[k] = v;
  }

  const g = window.gtag;
  if (typeof g === "function") {
    g("event", name, clean);
    return;
  }
  // gtag.js がまだロードされていない場合は dataLayer に直接積む（読み込み後に拾われる）
  window.dataLayer = window.dataLayer ?? [];
  window.dataLayer.push({ event: name, ...clean });
}

export function trackCtaClick(ctaId: string, extra: GtagParams = {}): void {
  const pagePath =
    typeof window !== "undefined"
      ? `${window.location.pathname}${window.location.search}`
      : "";
  track("cta_click", {
    cta_id: ctaId,
    page_path: pagePath,
    ...extra,
  });
}

export function trackGenerateLead(extra: GtagParams = {}): void {
  track("generate_lead", {
    event_category: "contact",
    event_label: "医学部合格戦略診断",
    ...extra,
  });
}
