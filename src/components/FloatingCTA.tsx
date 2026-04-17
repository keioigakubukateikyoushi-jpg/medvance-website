"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function FloatingCTA() {
  const [visible, setVisible] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (pathname === "/contact") return null;

  return (
    <>
      {/* Mobile: full-width bottom bar */}
      <div
        className="lg:hidden fixed bottom-0 left-0 right-0 z-50 transition-transform duration-300"
        style={{
          transform: visible ? "translateY(0)" : "translateY(100%)",
        }}
      >
        <Link
          href="/contact?from=floating-mobile"
          className="flex items-center justify-center gap-2 w-full py-4 text-white font-bold text-base"
          style={{ backgroundColor: "#c9922a" }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 flex-shrink-0">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
          </svg>
          30秒で無料相談に申し込む
        </Link>
      </div>

      {/* Desktop: bottom-right floating card */}
      <div
        className="hidden lg:block fixed bottom-6 right-6 z-50 transition-all duration-300"
        style={{
          transform: visible ? "translateY(0)" : "translateY(120%)",
          opacity: visible ? 1 : 0,
        }}
      >
        <Link
          href="/contact?from=floating-desktop"
          className="flex items-center gap-3 pl-5 pr-6 py-4 rounded-full shadow-2xl hover:shadow-xl transition-shadow group"
          style={{
            backgroundColor: "#c9922a",
            boxShadow: "0 10px 40px -10px rgba(201,146,42,0.6), 0 4px 16px rgba(12,26,51,0.15)",
          }}
        >
          <span
            className="flex items-center justify-center w-10 h-10 rounded-full flex-shrink-0"
            style={{ backgroundColor: "rgba(255,255,255,0.2)" }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="white" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
            </svg>
          </span>
          <div className="text-white leading-tight">
            <div className="text-xs font-semibold tracking-widest uppercase opacity-90">Free / 30min</div>
            <div className="text-sm font-bold whitespace-nowrap">30秒で無料相談に申し込む</div>
          </div>
        </Link>
      </div>
    </>
  );
}
