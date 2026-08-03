"use client";

import { useEffect } from "react";

/** 旧 ?tab= や hash 指定時に該当セクションへスクロール */
export default function ScrollToSection({ sectionId }: { sectionId: string | null }) {
  useEffect(() => {
    const id = sectionId || (typeof window !== "undefined" ? window.location.hash.replace(/^#/, "") : "");
    if (!id) return;
    const go = () => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    };
    // レイアウト確定後にスクロール
    const t = window.setTimeout(go, 80);
    return () => window.clearTimeout(t);
  }, [sectionId]);

  return null;
}
