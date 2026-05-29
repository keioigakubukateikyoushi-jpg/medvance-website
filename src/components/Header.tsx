"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useRef } from "react";
import { usePathname, useRouter } from "next/navigation";
import { LINE_URL } from "@/lib/links";

type DropdownItem = { label: string; href: string; desc?: string };

const megaMenus: { label: string; items: DropdownItem[] }[] = [
  {
    label: "対象から探す",
    items: [
      { label: "高校1年生の方", href: "/for/ko1", desc: "早めに科目の土台をつくる" },
      { label: "高校2年生の方", href: "/for/ko2", desc: "部活と両立・高3に備える" },
      { label: "高校3年生の方", href: "/for/ko3", desc: "残り期間から計画する" },
      { label: "医学部浪人生の方", href: "/for/ronin", desc: "今年で決める私立医学部戦略" },
      { label: "大手予備校と併用したい方", href: "/for/prep-school-plus", desc: "授業・復習・出願戦略を補完" },
      { label: "集団塾が合わない方", href: "/for/not-group-school", desc: "1対1指導と週次管理で立て直す" },
      { label: "私立医学部受験戦略", href: "/private-medical-strategy", desc: "出願校・学費・週次管理を設計" },
      { label: "再受験生の方", href: "/for/saijuken", desc: "社会人・大学生からの挑戦" },
      { label: "保護者の方", href: "/for/parents", desc: "定期報告・保護者面談あり" },
      { label: "対象者ページ一覧を見る →", href: "/for", desc: "中学生・慶應内部進学なども含めて探す" },
    ],
  },
  {
    label: "大学別対策",
    items: [
      { label: "慶應義塾大学医学部", href: "/universities/keio", desc: "入試傾向と対策を解説" },
      { label: "東京慈恵会医科大学", href: "/universities/jikei", desc: "英語最難関・慈恵の医師像" },
      { label: "順天堂大学医学部", href: "/universities/juntendo", desc: "バランス型・MMI面接対策" },
      { label: "日本医科大学", href: "/universities/nippon-medical", desc: "記述難問・2回面接対策" },
      { label: "昭和大学医学部", href: "/universities/showa", desc: "基礎完成・正確性重視" },
      { label: "東京医科大学", href: "/universities/tokyo-ika", desc: "標準問題・思考力重視" },
      { label: "入試日程カレンダー 📅", href: "/calendar", desc: "私立1次・2次・国公立の試験日と重複確認" },
      { label: "私立医学部大学別一覧 →", href: "/universities/private", desc: "私立医学部の対策をまとめて確認" },
      { label: "国公立医学部対策 →", href: "/universities/national", desc: "共通テスト〜二次まで" },
    ],
  },
  {
    label: "サービス",
    items: [
      { label: "オンライン指導", href: "/services/online", desc: "全国どこからでも受講" },
      { label: "訪問・対面指導", href: "/services/visit", desc: "東京・関東エリア対応" },
      { label: "医学部 合格戦略診断", href: "/contact?from=nav-service-diagnosis", desc: "国公立・私立の志望校戦略を診断" },
      { label: "面接・小論文対策", href: "/services/interview", desc: "医学部特有の対策" },
      { label: "模試分析（無料）", href: "/services/moshi", desc: "偏差値と科目別結果から学習計画を作成" },
      { label: "家庭教師一覧", href: "/tutors", desc: "講師を科目・エリアから探す" },
      { label: "講師募集", href: "/recruit", desc: "Medvance講師として応募する" },
      { label: "各教科の指導方法", href: "/subjects", desc: "英数理の進め方" },
    ],
  },
  {
    label: "コラム",
    items: [
      { label: "コラム一覧を見る →", href: "/column", desc: "医学部受験コラムをすべて見る" },
      { label: "医学部合格の勉強法", href: "/column/study-method", desc: "科目別の正しい学習法" },
      { label: "医学部受験ロードマップ", href: "/column/roadmap", desc: "いつから・何をすべきか" },
      { label: "受かる人・落ちる人の違い", href: "/column/difference", desc: "合格者の共通点とは" },
      { label: "私立 vs 国公立", href: "/column/shigaku-vs-kokuritsu", desc: "どちらを選ぶべきか" },
      { label: "医学部面接対策", href: "/column/mensetu", desc: "面接で差をつけるポイント" },
      { label: "医学部の学費比較", href: "/column/gakuhi", desc: "私立・国公立の費用を比較" },
      { label: "塾・予備校の選び方", href: "/column/juku-erabi", desc: "失敗しない塾選びのポイント" },
      { label: "慶應医学部ガイド", href: "/column/keio-guide", desc: "慶應医学部の入試情報を解説" },
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
    <header style={{ backgroundColor: "#0c1a33" }} className="text-white sticky top-10 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-5 py-3.5 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" onClick={handleLogoClick} className="flex items-center gap-2.5 hover:opacity-85 transition-opacity flex-shrink-0">
          <Image
            src="/images/logo-medvance-mark.webp"
            alt="Medvance"
            width={56}
            height={56}
            priority
            className="h-11 w-11 rounded-md bg-white object-contain p-0.5 shadow-sm"
          />
          <span className="text-white font-semibold text-xs hidden sm:block opacity-70 leading-tight">
            医学部受験専門塾<br />Medvance
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-4 text-sm">
          <Link href="/about" className="text-white opacity-75 hover:opacity-100 transition-opacity whitespace-nowrap">
            塾について
          </Link>
          <Link href="/science" className="text-white opacity-75 hover:opacity-100 transition-opacity whitespace-nowrap">
            脳科学メソッド
          </Link>
          <Link href="/pricing" className="text-white opacity-75 hover:opacity-100 transition-opacity whitespace-nowrap">
            料金
          </Link>
          <Link href="/news" className="text-white opacity-75 hover:opacity-100 transition-opacity whitespace-nowrap">
            お知らせ
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

          <form onSubmit={handleSearch} className="ml-1 hidden xl:flex items-center gap-2">
            <input
              type="text"
              name="q"
              placeholder="サイト内検索"
              className="w-36 rounded-lg px-3 py-2 text-xs"
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
            href="/contact?from=header"
            className="ml-1 px-5 py-2.5 text-white font-bold rounded-lg text-sm whitespace-nowrap hover:opacity-90 transition-opacity"
            style={{ backgroundColor: "#c9922a" }}
          >
            戦略診断
          </Link>
          <a
            href={LINE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2.5 text-white font-bold rounded-lg text-sm whitespace-nowrap hover:opacity-90 transition-opacity"
            style={{ backgroundColor: "#06C755" }}
            aria-label="LINEで相談"
          >
            <svg viewBox="0 0 36 36" className="w-4 h-4" aria-hidden="true">
              <path fill="currentColor" d="M18 3C9.716 3 3 8.476 3 15.224c0 6.03 5.327 11.08 12.525 12.03.487.104 1.15.32 1.318.735.15.377.098.967.049 1.347l-.212 1.276c-.065.377-.302 1.478 1.294.805 1.596-.673 8.618-5.076 11.76-8.691C31.95 20.267 33 17.87 33 15.224 33 8.476 26.284 3 18 3zm-6.18 14.36h-3.4c-.266 0-.483-.217-.483-.484v-5.49c0-.267.217-.484.484-.484.266 0 .483.217.483.484v5.005h2.916c.266 0 .483.216.483.484 0 .267-.217.485-.483.485zm1.935-.484c0 .267-.217.485-.484.485-.267 0-.484-.218-.484-.485v-5.49c0-.267.217-.484.484-.484.267 0 .484.217.484.484v5.49zm6.35 0c0 .208-.133.393-.33.46-.05.015-.102.023-.154.023-.155 0-.3-.07-.393-.191l-2.82-3.86v3.568c0 .267-.217.485-.484.485-.266 0-.482-.218-.482-.485v-5.49c0-.207.132-.392.33-.459.05-.017.103-.024.153-.024.15 0 .297.07.39.192l2.826 3.86v-3.569c0-.267.216-.484.483-.484.267 0 .484.217.484.484v5.49zm3.922-3.228c.267 0 .484.218.484.485 0 .267-.217.485-.484.485h-1.938v.76h1.938c.266 0 .484.217.484.484s-.217.484-.484.484h-2.42c-.266 0-.483-.217-.483-.484v-5.49c0-.267.217-.484.484-.484h2.42c.266 0 .483.217.483.484 0 .268-.217.485-.484.485h-1.938v.76h1.938z" />
            </svg>
            LINE
          </a>
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
            { label: "脳科学メソッド", href: "/science" },
            { label: "料金", href: "/pricing" },
            { label: "お知らせ", href: "/news" },
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

          <div className="mt-4 grid grid-cols-2 gap-2">
            <Link
              href="/contact?from=mobile-header"
              className="px-4 py-3 text-white font-bold rounded-lg text-sm text-center hover:opacity-90 transition-opacity"
            style={{ backgroundColor: "#c9922a" }}
            onClick={() => setMenuOpen(false)}
          >
              戦略診断
            </Link>
            <a
              href={LINE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 px-4 py-3 text-white font-bold rounded-lg text-sm text-center hover:opacity-90 transition-opacity"
              style={{ backgroundColor: "#06C755" }}
              onClick={() => setMenuOpen(false)}
            >
              <svg viewBox="0 0 36 36" className="w-4 h-4" aria-hidden="true">
                <path fill="currentColor" d="M18 3C9.716 3 3 8.476 3 15.224c0 6.03 5.327 11.08 12.525 12.03.487.104 1.15.32 1.318.735.15.377.098.967.049 1.347l-.212 1.276c-.065.377-.302 1.478 1.294.805 1.596-.673 8.618-5.076 11.76-8.691C31.95 20.267 33 17.87 33 15.224 33 8.476 26.284 3 18 3zm-6.18 14.36h-3.4c-.266 0-.483-.217-.483-.484v-5.49c0-.267.217-.484.484-.484.266 0 .483.217.483.484v5.005h2.916c.266 0 .483.216.483.484 0 .267-.217.485-.483.485zm1.935-.484c0 .267-.217.485-.484.485-.267 0-.484-.218-.484-.485v-5.49c0-.267.217-.484.484-.484.267 0 .484.217.484.484v5.49zm6.35 0c0 .208-.133.393-.33.46-.05.015-.102.023-.154.023-.155 0-.3-.07-.393-.191l-2.82-3.86v3.568c0 .267-.217.485-.484.485-.266 0-.482-.218-.482-.485v-5.49c0-.207.132-.392.33-.459.05-.017.103-.024.153-.024.15 0 .297.07.39.192l2.826 3.86v-3.569c0-.267.216-.484.483-.484.267 0 .484.217.484.484v5.49zm3.922-3.228c.267 0 .484.218.484.485 0 .267-.217.485-.484.485h-1.938v.76h1.938c.266 0 .484.217.484.484s-.217.484-.484.484h-2.42c-.266 0-.483-.217-.483-.484v-5.49c0-.267.217-.484.484-.484h2.42c.266 0 .483.217.483.484 0 .268-.217.485-.484.485h-1.938v.76h1.938z" />
              </svg>
              LINE
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
