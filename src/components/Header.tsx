"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const subjects = [
  { label: "英語", href: "/subjects/english" },
  { label: "数学", href: "/subjects/math" },
  { label: "物理", href: "/subjects/physics" },
  { label: "化学", href: "/subjects/chemistry" },
  { label: "生物", href: "/subjects/biology" },
];

const navLinks = [
  { label: "ホーム", href: "/" },
  { label: "無料相談・指導依頼・お問い合わせ", href: "/contact" },
  { label: "料金について", href: "/pricing" },
  { label: "Medvanceとは？", href: "/about" },
  { label: "合格体験記", href: "/success-stories" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [subjectsOpen, setSubjectsOpen] = useState(false);

  return (
    <header style={{ backgroundColor: "#142b57" }} className="text-white sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 hover:opacity-90">
          <Image src="/images/logo.png" alt="Medvance" width={60} height={34} className="object-contain" />
          <span className="text-white font-bold text-sm hidden sm:block">慶應医学部生が教える医学部受験専門塾</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-4 text-sm">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-white hover:opacity-75 transition-opacity whitespace-nowrap"
            >
              {link.label}
            </Link>
          ))}

          {/* Subjects dropdown */}
          <div className="relative">
            <button
              className="text-white hover:opacity-75 transition-opacity flex items-center gap-1 whitespace-nowrap"
              onMouseEnter={() => setSubjectsOpen(true)}
              onMouseLeave={() => setSubjectsOpen(false)}
            >
              各教科の指導方法・勉強方法
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {subjectsOpen && (
              <div
                className="absolute top-full left-0 mt-1 shadow-lg z-50 min-w-36"
                style={{ backgroundColor: "#142b57", border: "1px solid rgba(255,255,255,0.2)" }}
                onMouseEnter={() => setSubjectsOpen(true)}
                onMouseLeave={() => setSubjectsOpen(false)}
              >
                {subjects.map((s) => (
                  <Link
                    key={s.href}
                    href={s.href}
                    className="block px-4 py-2 text-white hover:bg-white hover:text-blue-900 transition-colors text-sm"
                  >
                    {s.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            href="/contact"
            className="ml-2 px-4 py-2 text-white font-semibold rounded text-sm whitespace-nowrap transition-opacity hover:opacity-80"
            style={{ backgroundColor: "#424f8f", border: "1px solid rgba(255,255,255,0.4)" }}
          >
            お問い合わせ・無料相談はこちらから
          </Link>
        </nav>

        {/* Mobile menu button */}
        <button
          className="lg:hidden text-white p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="メニュー"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
        <div style={{ backgroundColor: "#142b57", borderTop: "1px solid rgba(255,255,255,0.2)" }} className="lg:hidden px-4 pb-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block py-2 text-white hover:opacity-75 text-sm border-b border-white border-opacity-10"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="py-2 border-b border-white border-opacity-10">
            <button
              className="text-white text-sm flex items-center gap-1 w-full justify-between"
              onClick={() => setSubjectsOpen(!subjectsOpen)}
            >
              各教科の指導方法・勉強方法
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {subjectsOpen && (
              <div className="mt-2 ml-4">
                {subjects.map((s) => (
                  <Link
                    key={s.href}
                    href={s.href}
                    className="block py-1 text-white hover:opacity-75 text-sm"
                    onClick={() => { setMenuOpen(false); setSubjectsOpen(false); }}
                  >
                    {s.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
          <Link
            href="/contact"
            className="block mt-3 px-4 py-2 text-white font-semibold rounded text-sm text-center"
            style={{ backgroundColor: "#424f8f" }}
            onClick={() => setMenuOpen(false)}
          >
            お問い合わせ・無料相談はこちらから
          </Link>
        </div>
      )}
    </header>
  );
}
