"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { LINE_URL } from "@/lib/links";

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

          <a
            href={LINE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full py-3 rounded-lg text-white font-bold text-center shadow-md hover:opacity-90 transition-opacity mb-2"
            style={{ backgroundColor: "#06C755" }}
            onClick={() => setOpen(false)}
          >
            <svg viewBox="0 0 36 36" className="w-4 h-4" aria-hidden="true">
              <path fill="currentColor" d="M18 3C9.716 3 3 8.476 3 15.224c0 6.03 5.327 11.08 12.525 12.03.487.104 1.15.32 1.318.735.15.377.098.967.049 1.347l-.212 1.276c-.065.377-.302 1.478 1.294.805 1.596-.673 8.618-5.076 11.76-8.691C31.95 20.267 33 17.87 33 15.224 33 8.476 26.284 3 18 3zm-6.18 14.36h-3.4c-.266 0-.483-.217-.483-.484v-5.49c0-.267.217-.484.484-.484.266 0 .483.217.483.484v5.005h2.916c.266 0 .483.216.483.484 0 .267-.217.485-.483.485zm1.935-.484c0 .267-.217.485-.484.485-.267 0-.484-.218-.484-.485v-5.49c0-.267.217-.484.484-.484.267 0 .484.217.484.484v5.49zm6.35 0c0 .208-.133.393-.33.46-.05.015-.102.023-.154.023-.155 0-.3-.07-.393-.191l-2.82-3.86v3.568c0 .267-.217.485-.484.485-.266 0-.482-.218-.482-.485v-5.49c0-.207.132-.392.33-.459.05-.017.103-.024.153-.024.15 0 .297.07.39.192l2.826 3.86v-3.569c0-.267.216-.484.483-.484.267 0 .484.217.484.484v5.49zm3.922-3.228c.267 0 .484.218.484.485 0 .267-.217.485-.484.485h-1.938v.76h1.938c.266 0 .484.217.484.484s-.217.484-.484.484h-2.42c-.266 0-.483-.217-.483-.484v-5.49c0-.267.217-.484.484-.484h2.42c.266 0 .483.217.483.484 0 .268-.217.485-.484.485h-1.938v.76h1.938z" />
            </svg>
            LINEですぐ相談する
          </a>
          <Link
            href="/contact?from=exit-intent"
            className="block w-full py-3 rounded-lg text-white font-bold text-center shadow-md hover:opacity-90 transition-opacity"
            style={{ backgroundColor: "#c9922a" }}
            onClick={() => setOpen(false)}
          >
            フォームでマニュアルを受け取る
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
