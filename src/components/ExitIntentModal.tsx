"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const STORAGE_KEY = "medvance-exit-intent-shown";

export default function ExitIntentModal() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (pathname === "/contact") return;
    if (typeof window === "undefined") return;

    try {
      if (sessionStorage.getItem(STORAGE_KEY)) return;
    } catch {
      return;
    }

    let timeOnPage = Date.now();
    const MIN_DWELL_MS = 8000;

    const trigger = () => {
      if (Date.now() - timeOnPage < MIN_DWELL_MS) return;
      try {
        sessionStorage.setItem(STORAGE_KEY, "1");
      } catch {}
      setOpen(true);
    };

    // Desktop: exit intent via mouse leaving top of viewport
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) trigger();
    };

    // Mobile: scroll depth trigger (50% scroll + back to top motion)
    let maxScroll = 0;
    let scrolledDown = false;
    const handleScroll = () => {
      const y = window.scrollY;
      const max = document.body.scrollHeight - window.innerHeight;
      if (max > 0 && y / max > 0.6) scrolledDown = true;
      if (scrolledDown && y < maxScroll - 200) trigger();
      if (y > maxScroll) maxScroll = y;
    };

    document.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      document.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pathname]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      style={{ backgroundColor: "rgba(12,26,51,0.75)" }}
      onClick={() => setOpen(false)}
    >
      <div
        className="relative max-w-md w-full rounded-2xl overflow-hidden shadow-2xl"
        style={{ backgroundColor: "#fff" }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={() => setOpen(false)}
          aria-label="閉じる"
          className="absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center hover:bg-gray-100 text-lg"
          style={{ color: "#6b7280" }}
        >
          ×
        </button>

        <div
          className="px-6 py-5 text-center"
          style={{
            background: "linear-gradient(135deg, #0c1a33 0%, #142b57 100%)",
          }}
        >
          <p
            className="text-xs font-bold tracking-widest uppercase mb-1"
            style={{ color: "#c9922a" }}
          >
            Free Gift
          </p>
          <h2
            className="text-lg font-bold text-white leading-tight"
            style={{ fontFamily: "var(--font-noto-serif)" }}
          >
            お帰りの前に、
            <br />
            医学部受験戦略マニュアルをお渡しします
          </h2>
        </div>

        <div className="p-6">
          <p className="text-sm mb-5 leading-relaxed" style={{ color: "#3d3d3d" }}>
            現役慶應医学部生が監修した6章構成の受験戦略マニュアル。
            <strong>無料相談の申し込みで、即日お送りします。</strong>
          </p>
          <ul className="space-y-2 mb-6 text-sm" style={{ color: "#3d3d3d" }}>
            {[
              "医学部入試の全体像と最新傾向",
              "科目別・最短攻略法",
              "合格者の年間スケジュール実例",
              "面接・小論文で減点されるポイント",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span
                  className="flex-shrink-0 w-4 h-4 rounded-full flex items-center justify-center text-white text-[10px] mt-0.5"
                  style={{ backgroundColor: "#c9922a" }}
                >
                  ✓
                </span>
                {item}
              </li>
            ))}
          </ul>

          <Link
            href="/contact?from=exit-intent"
            className="block w-full py-3 rounded-lg text-white font-bold text-center shadow-md hover:opacity-90 transition-opacity"
            style={{ backgroundColor: "#c9922a" }}
            onClick={() => setOpen(false)}
          >
            無料でマニュアルを受け取る
          </Link>
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="w-full mt-3 text-xs hover:underline"
            style={{ color: "#9ca3af" }}
          >
            今はいい（閉じる）
          </button>
        </div>
      </div>
    </div>
  );
}
