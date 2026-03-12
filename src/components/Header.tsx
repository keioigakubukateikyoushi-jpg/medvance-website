"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

type DropdownItem = { label: string; href: string; desc?: string };

const megaMenus: { label: string; items: DropdownItem[] }[] = [
  {
    label: "対象・志望校",
    items: [
      { label: "浪人生の方", href: "/for/ronin", desc: "浪人生専用の指導・戦略" },
      { label: "再受験生の方", href: "/for/saijuken", desc: "社会人・大学生からの挑戦" },
      { label: "保護者の方", href: "/for/parents", desc: "定期報告・保護者面談あり" },
      { label: "慶應医学部対策", href: "/universities/keio", desc: "現役慶應生が入試を解説" },
      { label: "私立医学部対策", href: "/universities/private", desc: "慈恵・順天堂など大学別" },
      { label: "国公立医学部対策", href: "/universities/national", desc: "共通テスト〜二次まで" },
    ],
  },
  {
    label: "サービス",
    items: [
      { label: "オンライン指導", href: "/services/online", desc: "全国どこからでも受講" },
      { label: "訪問・対面指導", href: "/services/visit", desc: "東京・関東エリア対応" },
      { label: "面接・小論文対策", href: "/services/interview", desc: "医学部特有の対策" },
      { label: "各教科の指導方法", href: "/subjects", desc: "英数理の本質的指導" },
    ],
  },
  {
    label: "コラム",
    items: [
      { label: "医学部合格の勉強法", href: "/column/study-method", desc: "科目別の正しい学習法" },
      { label: "医学部受験ロードマップ", href: "/column/roadmap", desc: "いつから・何をすべきか" },
      { label: "受かる人・落ちる人の違い", href: "/column/difference", desc: "合格者の共通点とは" },
    ],
  },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [openMobileMenu, setOpenMobileMenu] = useState<string | null>(null);

  return (
    <header style={{ backgroundColor: "#0c1a33" }} className="text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-5 py-3.5 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 hover:opacity-85 transition-opacity flex-shrink-0">
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
          <Link href="/success-stories" className="text-white opacity-75 hover:opacity-100 transition-opacity whitespace-nowrap">
            合格体験記
          </Link>

          {/* Mega menu dropdowns */}
          {megaMenus.map((menu) => (
            <div
              key={menu.label}
              className="relative"
              onMouseEnter={() => setOpenDropdown(menu.label)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button className="flex items-center gap-1 text-white opacity-75 hover:opacity-100 transition-opacity whitespace-nowrap">
                {menu.label}
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openDropdown === menu.label && (
                <div
                  className="absolute top-full left-0 mt-2 rounded-xl overflow-hidden shadow-2xl z-50 py-2"
                  style={{ backgroundColor: "#162540", border: "1px solid rgba(255,255,255,0.12)", minWidth: "220px" }}
                >
                  {menu.items.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block px-4 py-2.5 hover:bg-white hover:bg-opacity-10 transition-colors"
                    >
                      <span className="text-white text-sm font-medium block">{item.label}</span>
                      {item.desc && <span className="text-xs block mt-0.5" style={{ color: "rgba(255,255,255,0.45)" }}>{item.desc}</span>}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}

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
        <div style={{ backgroundColor: "#0c1a33", borderTop: "1px solid rgba(255,255,255,0.1)" }} className="lg:hidden px-5 pb-5 pt-2 max-h-[80vh] overflow-y-auto">
          {[
            { label: "ホーム", href: "/" },
            { label: "塾について", href: "/about" },
            { label: "料金", href: "/pricing" },
            { label: "合格体験記", href: "/success-stories" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block py-2.5 text-sm text-white opacity-75 hover:opacity-100 border-b"
              style={{ borderColor: "rgba(255,255,255,0.08)" }}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}

          {megaMenus.map((menu) => (
            <div key={menu.label} className="border-b" style={{ borderColor: "rgba(255,255,255,0.08)" }}>
              <button
                className="w-full flex items-center justify-between py-2.5 text-sm text-white opacity-75"
                onClick={() => setOpenMobileMenu(openMobileMenu === menu.label ? null : menu.label)}
              >
                {menu.label}
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openMobileMenu === menu.label && (
                <div className="ml-3 mb-2 space-y-1">
                  {menu.items.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block py-1.5 text-xs hover:opacity-100"
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
