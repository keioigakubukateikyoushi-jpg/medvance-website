"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useRef } from "react";
import { usePathname, useRouter } from "next/navigation";

type DropdownItem = { label: string; href: string; desc?: string };

const megaMenus: { label: string; items: DropdownItem[] }[] = [
  {
    label: "対象・志望校",
    items: [
      { label: "中学生の方", href: "/for/chugaku", desc: "医学部への道筋を今から設計" },
      { label: "高校1年生の方", href: "/for/ko1", desc: "早期スタートで圧倒的有利に" },
      { label: "高校2年生の方", href: "/for/ko2", desc: "部活と両立・高3に備える" },
      { label: "高校3年生の方", href: "/for/ko3", desc: "現役合格への最短戦略" },
      { label: "浪人生の方", href: "/for/ronin", desc: "浪人生専用の指導・戦略" },
      { label: "再受験生の方", href: "/for/saijuken", desc: "社会人・大学生からの挑戦" },
      { label: "保護者の方", href: "/for/parents", desc: "定期報告・保護者面談あり" },
      { label: "慶應義塾大学医学部", href: "/universities/keio", desc: "現役慶應生が入試を解説" },
      { label: "東京慈恵会医科大学", href: "/universities/jikei", desc: "英語最難関・慈恵の医師像" },
      { label: "順天堂大学医学部", href: "/universities/juntendo", desc: "バランス型・MMI面接対策" },
      { label: "日本医科大学", href: "/universities/nippon-medical", desc: "記述難問・2回面接対策" },
      { label: "昭和大学医学部", href: "/universities/showa", desc: "基礎完成・正確性重視" },
      { label: "東京医科大学", href: "/universities/tokyo-ika", desc: "標準問題・思考力重視" },
      { label: "私立医学部（一覧）", href: "/universities/private", desc: "各大学の傾向まとめ" },
      { label: "国公立医学部対策", href: "/universities/national", desc: "共通テスト〜二次まで" },
    ],
  },
  {
    label: "サービス",
    items: [
      { label: "オンライン指導", href: "/services/online", desc: "全国どこからでも受講" },
      { label: "訪問・対面指導", href: "/services/visit", desc: "東京・関東エリア対応" },
      { label: "面接・小論文対策", href: "/services/interview", desc: "医学部特有の対策" },
      { label: "AI模試分析（無料）", href: "/services/moshi", desc: "AIが偏差値から学習ルートを即時生成" },
      { label: "各教科の指導方法", href: "/subjects", desc: "英数理の本質的指導" },
    ],
  },
  {
    label: "コラム",
    items: [
      { label: "コラム一覧", href: "/column", desc: "医学部受験コラムをすべて見る" },
      { label: "医学部合格の勉強法", href: "/column/study-method", desc: "科目別の正しい学習法" },
      { label: "医学部受験ロードマップ", href: "/column/roadmap", desc: "いつから・何をすべきか" },
      { label: "受かる人・落ちる人の違い", href: "/column/difference", desc: "合格者の共通点とは" },
      { label: "私立 vs 国公立", href: "/column/shigaku-vs-kokuritsu", desc: "どちらを選ぶべきか" },
      { label: "医学部面接対策", href: "/column/mensetu", desc: "面接で差をつけるポイント" },
      { label: "面接対策はいつから？", href: "/column/mensetu-timing", desc: "始め方と模擬面接の流れ" },
      { label: "医学部の学費比較", href: "/column/gakuhi", desc: "私立・国公立の費用を比較" },
      { label: "受験スタート時期", href: "/column/juken-timing", desc: "いつから始めるべきか" },
      { label: "過去問はいつから？", href: "/column/kakomon-timing", desc: "着手時期と復習の回し方" },
      { label: "偏差値と医学部合格", href: "/column/hensachi", desc: "偏差値の考え方と目標値" },
      { label: "再受験で合格する方法", href: "/column/saijuken", desc: "社会人・大学生からの挑戦" },
      { label: "慶應医学部ガイド", href: "/column/keio-guide", desc: "慶應医学部のすべてを解説" },
      { label: "塾・予備校の選び方", href: "/column/juku-erabi", desc: "失敗しない塾選びのポイント" },
    ],
  },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [openMobileMenu, setOpenMobileMenu] = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pathname = usePathname();
  const router = useRouter();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const q = (new FormData(e.currentTarget).get("q") as string ?? "").trim();
    if (q) router.push(`/search?q=${encodeURIComponent(q)}`);
  };

  const handleMobileSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const q = (new FormData(e.currentTarget).get("q") as string ?? "").trim();
    setMenuOpen(false);
    if (q) router.push(`/search?q=${encodeURIComponent(q)}`);
  };

  const handleLogoClick = (e: React.MouseEvent) => {
    if (pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleEnter = (label: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenDropdown(label);
  };

  const handleLeave = () => {
    closeTimer.current = setTimeout(() => setOpenDropdown(null), 120);
  };

  return (
    <header style={{ backgroundColor: "#0c1a33" }} className="text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-5 py-3.5 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" onClick={handleLogoClick} className="flex items-center gap-2.5 hover:opacity-85 transition-opacity flex-shrink-0">
          <Image src="/images/logo.png" alt="Medvance" width={56} height={32} className="object-contain" />
          <span className="text-white font-semibold text-xs hidden sm:block opacity-70 leading-tight">
            慶應医学部生による<br />医学部受験専門塾
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-5 text-sm">
          <Link href="/about" className="text-white opacity-75 hover:opacity-100 transition-opacity whitespace-nowrap">
            塾について
          </Link>
          <Link href="/pricing" className="text-white opacity-75 hover:opacity-100 transition-opacity whitespace-nowrap">
            料金
          </Link>
          {/* Dropdowns — button + menu share the same hover zone */}
          {megaMenus.map((menu) => (
            <div
              key={menu.label}
              className="relative"
              onMouseEnter={() => handleEnter(menu.label)}
              onMouseLeave={handleLeave}
            >
              <button className="flex items-center gap-1 text-white opacity-75 hover:opacity-100 transition-opacity whitespace-nowrap py-4">
                {menu.label}
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Invisible bridge fills the gap between button and dropdown */}
              {openDropdown === menu.label && (
                <div className="absolute top-full left-0 w-full h-2 bg-transparent" />
              )}

              <div
                className="absolute left-0 rounded-xl overflow-hidden shadow-2xl z-50 py-2 transition-all duration-100"
                style={{
                  backgroundColor: "#162540",
                  border: "1px solid rgba(255,255,255,0.12)",
                  minWidth: "220px",
                  top: "calc(100% + 4px)",
                  opacity: openDropdown === menu.label ? 1 : 0,
                  pointerEvents: openDropdown === menu.label ? "auto" : "none",
                  transform: openDropdown === menu.label ? "translateY(0)" : "translateY(-4px)",
                }}
              >
                {menu.items.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block px-4 py-3 hover:bg-white hover:bg-opacity-10 transition-colors"
                    onClick={() => setOpenDropdown(null)}
                  >
                    <span className="text-white text-sm font-medium block">{item.label}</span>
                    {item.desc && (
                      <span className="text-xs block mt-0.5" style={{ color: "rgba(255,255,255,0.45)" }}>
                        {item.desc}
                      </span>
                    )}
                  </Link>
                ))}
              </div>
            </div>
          ))}

          <form onSubmit={handleSearch} className="ml-2 hidden lg:flex items-center gap-2">
            <input
              type="text"
              name="q"
              placeholder="サイト内検索"
              className="w-44 rounded-lg px-3 py-2 text-xs"
              style={{ backgroundColor: "rgba(255,255,255,0.12)", color: "#fff", border: "1px solid rgba(255,255,255,0.16)" }}
            />
            <button
              type="submit"
              className="rounded-lg px-3 py-2 text-xs font-bold text-white transition-opacity hover:opacity-90"
              style={{ backgroundColor: "rgba(201,146,42,0.95)" }}
            >
              検索
            </button>
          </form>

          <Link
            href="/contact"
            className="ml-1 px-5 py-2.5 text-white font-bold rounded-lg text-sm whitespace-nowrap hover:opacity-90 transition-opacity"
            style={{ backgroundColor: "#c9922a" }}
          >
            無料相談
          </Link>
        </nav>

        {/* Mobile menu button */}
        <button
          className="lg:hidden text-white p-2 rounded-lg hover:bg-white hover:bg-opacity-10 transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="メニュー"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          style={{ backgroundColor: "#0c1a33", borderTop: "1px solid rgba(255,255,255,0.1)" }}
          className="lg:hidden px-5 pb-5 pt-2 max-h-[80vh] overflow-y-auto"
        >
          <form onSubmit={handleMobileSearch} className="mb-4 mt-2 flex items-center gap-2">
            <input
              type="text"
              name="q"
              placeholder="サイト内検索"
              className="flex-1 rounded-lg px-4 py-3 text-sm"
              style={{ backgroundColor: "rgba(255,255,255,0.12)", color: "#fff", border: "1px solid rgba(255,255,255,0.16)" }}
            />
            <button
              type="submit"
              className="rounded-lg px-4 py-3 text-sm font-bold text-white"
              style={{ backgroundColor: "#c9922a" }}
            >
              検索
            </button>
          </form>

          {[
            { label: "ホーム", href: "/" },
            { label: "塾について", href: "/about" },
            { label: "料金", href: "/pricing" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block py-3 text-sm text-white opacity-75 hover:opacity-100 border-b"
              style={{ borderColor: "rgba(255,255,255,0.08)" }}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}

          {megaMenus.map((menu) => (
            <div key={menu.label} className="border-b" style={{ borderColor: "rgba(255,255,255,0.08)" }}>
              <button
                className="w-full flex items-center justify-between py-3 text-sm text-white opacity-75"
                onClick={() => setOpenMobileMenu(openMobileMenu === menu.label ? null : menu.label)}
              >
                {menu.label}
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openMobileMenu === menu.label && (
                <div className="ml-3 mb-3 space-y-1">
                  {menu.items.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block py-2 text-xs hover:opacity-100"
                      style={{ color: "rgba(255,255,255,0.6)" }}
                      onClick={() => setMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}

          <Link
            href="/contact"
            className="block mt-4 px-5 py-3 text-white font-bold rounded-lg text-sm text-center hover:opacity-90 transition-opacity"
            style={{ backgroundColor: "#c9922a" }}
            onClick={() => setMenuOpen(false)}
          >
            無料相談・お問い合わせ
          </Link>
        </div>
      )}
    </header>
  );
}
