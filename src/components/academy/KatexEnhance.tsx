"use client";

import { useEffect } from "react";

/**
 * Renders $...$ / $$...$$ inside .academy-prose after HTML is injected.
 * Uses site-local KaTeX under /academy/vendor/katex.
 */
export default function KatexEnhance({ rootClass = "academy-prose" }: { rootClass?: string }) {
  useEffect(() => {
    let cancelled = false;

    async function run() {
      // ensure CSS
      if (!document.querySelector('link[data-mv-katex]')) {
        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = "/academy/vendor/katex/katex.min.css";
        link.setAttribute("data-mv-katex", "1");
        document.head.appendChild(link);
      }

      // load scripts once
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const w = window as any;
      if (!w.renderMathInElement) {
        await loadScript("/academy/vendor/katex/katex.min.js");
        await loadScript("/academy/vendor/katex/contrib/auto-render.min.js");
      }
      if (cancelled || !w.renderMathInElement) return;

      document.querySelectorAll(`.${rootClass}`).forEach((el) => {
        try {
          w.renderMathInElement(el, {
            delimiters: [
              { left: "$$", right: "$$", display: true },
              { left: "$", right: "$", display: false },
            ],
            throwOnError: false,
            strict: "ignore",
          });
        } catch {
          /* ignore */
        }
      });
    }

    run();
    return () => {
      cancelled = true;
    };
  }, [rootClass]);

  return null;
}

function loadScript(src: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const existing = document.querySelector(`script[src="${src}"]`);
    if (existing) {
      resolve();
      return;
    }
    const s = document.createElement("script");
    s.src = src;
    s.async = true;
    s.onload = () => resolve();
    s.onerror = () => reject(new Error(`failed ${src}`));
    document.head.appendChild(s);
  });
}
