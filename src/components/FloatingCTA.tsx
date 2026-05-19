"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { LINE_URL } from "@/lib/links";

const LINE_GREEN = "#06C755";

function LineIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 36 36" className={className} aria-hidden="true">
      <path
        fill="currentColor"
        d="M18 3C9.716 3 3 8.476 3 15.224c0 6.03 5.327 11.08 12.525 12.03.487.104 1.15.32 1.318.735.15.377.098.967.049 1.347l-.212 1.276c-.065.377-.302 1.478 1.294.805 1.596-.673 8.618-5.076 11.76-8.691C31.95 20.267 33 17.87 33 15.224 33 8.476 26.284 3 18 3zm-6.18 14.36h-3.4c-.266 0-.483-.217-.483-.484v-5.49c0-.267.217-.484.484-.484.266 0 .483.217.483.484v5.005h2.916c.266 0 .483.216.483.484 0 .267-.217.485-.483.485zm1.935-.484c0 .267-.217.485-.484.485-.267 0-.484-.218-.484-.485v-5.49c0-.267.217-.484.484-.484.267 0 .484.217.484.484v5.49zm6.35 0c0 .208-.133.393-.33.46-.05.015-.102.023-.154.023-.155 0-.3-.07-.393-.191l-2.82-3.86v3.568c0 .267-.217.485-.484.485-.266 0-.482-.218-.482-.485v-5.49c0-.207.132-.392.33-.459.05-.017.103-.024.153-.024.15 0 .297.07.39.192l2.826 3.86v-3.569c0-.267.216-.484.483-.484.267 0 .484.217.484.484v5.49zm3.922-3.228c.267 0 .484.218.484.485 0 .267-.217.485-.484.485h-1.938v.76h1.938c.266 0 .484.217.484.484s-.217.484-.484.484h-2.42c-.266 0-.483-.217-.483-.484v-5.49c0-.267.217-.484.484-.484h2.42c.266 0 .483.217.483.484 0 .268-.217.485-.484.485h-1.938v.76h1.938z"
      />
    </svg>
  );
}

export default function FloatingCTA() {
  const [visible, setVisible] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const threshold = window.innerWidth < 1024 ? window.innerHeight * 0.7 : 320;
      setVisible(window.scrollY > threshold);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  if (pathname === "/contact") return null;

  return (
    <>
      {/* Mobile: split bottom bar (form + LINE) */}
      <div
        className="lg:hidden fixed bottom-0 left-0 right-0 z-50 flex transition-transform duration-300"
        style={{
          transform: visible ? "translateY(0)" : "translateY(100%)",
          paddingBottom: "env(safe-area-inset-bottom)",
        }}
      >
        <Link
          href="/contact?from=floating-mobile"
          className="flex-1 flex items-center justify-center gap-2 py-3.5 text-white font-bold text-sm"
          style={{ backgroundColor: "#c9922a" }}
          aria-label="フォームで無料相談"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 flex-shrink-0">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
          </svg>
          フォームで相談
        </Link>
        <a
          href={LINE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 py-3.5 text-white font-bold text-sm"
          style={{ backgroundColor: LINE_GREEN }}
          aria-label="LINEで無料相談"
        >
          <LineIcon />
          LINEで無料相談
        </a>
      </div>

      {/* Desktop: stacked floating buttons (form on top, LINE on right/below) */}
      <div
        className="hidden lg:flex fixed bottom-6 right-6 z-50 flex-col gap-3 transition-all duration-300"
        style={{
          transform: visible ? "translateY(0)" : "translateY(120%)",
          opacity: visible ? 1 : 0,
        }}
      >
        <Link
          href="/contact?from=floating-desktop"
          className="flex items-center gap-3 pl-5 pr-6 py-3.5 rounded-full shadow-xl hover:shadow-lg transition-shadow text-white"
          style={{
            backgroundColor: "#c9922a",
            boxShadow: "0 10px 30px -10px rgba(201,146,42,0.55), 0 4px 12px rgba(12,26,51,0.12)",
          }}
        >
          <span
            className="flex items-center justify-center w-9 h-9 rounded-full flex-shrink-0"
            style={{ backgroundColor: "rgba(255,255,255,0.2)" }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="white" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
            </svg>
          </span>
          <div className="leading-tight">
            <div className="text-[10px] font-semibold tracking-widest opacity-90">フォーム</div>
            <div className="text-sm font-bold whitespace-nowrap">フォームで相談</div>
          </div>
        </Link>
        <a
          href={LINE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 pl-5 pr-6 py-3.5 rounded-full shadow-2xl hover:shadow-xl transition-shadow text-white"
          style={{
            backgroundColor: LINE_GREEN,
            boxShadow: "0 10px 30px -10px rgba(6,199,85,0.55), 0 4px 12px rgba(0,0,0,0.1)",
          }}
        >
          <LineIcon className="w-6 h-6" />
          <div className="leading-tight">
            <div className="text-[10px] font-semibold tracking-widest opacity-90">LINE</div>
            <div className="text-sm font-bold whitespace-nowrap">LINEで無料相談</div>
          </div>
        </a>
      </div>
    </>
  );
}
