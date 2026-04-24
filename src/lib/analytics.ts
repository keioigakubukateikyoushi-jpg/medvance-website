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
  const g = window.gtag;
  if (typeof g === "function") {
    g("event", name, params);
    return;
  }
  // gtag.js がまだロードされていない場合は dataLayer に直接積む（読み込み後に拾われる）
  window.dataLayer = window.dataLayer ?? [];
  window.dataLayer.push({ event: name, ...params });
}
