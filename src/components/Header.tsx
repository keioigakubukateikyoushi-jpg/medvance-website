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
  { label: "塾について", href: "/about" },
  { label: "料金", href: "/pricing" },
  { label: "合格体験記", href: "/success-stories" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [subjectsOpen, setSubjectsOpen] = useState(false);

  return (
    <header style={{ backgroundColor: "#0c1a33" }} className="text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-5 py-3.5 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 hover:opacity-85 transition-opacity flex-shrink-0">
          <Image src="/images/logo.png" alt="Medvance" width={56} height={32} className="object-contain" />
          <span className="text-white font-semibold text-xs hidden sm:block opacity-70 leading-tight max-w-[160px]">
            慶應医学部生による<br />医学部受験専門塾
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6 text-sm">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-white opacity-75 hover:opacity-100 transition-opacity whitespace-nowrap"
            >
              {link.label}
            </Link>
          ))}

          {/* Subjects dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setSubjectsOpen(true)}
            onMouseLeave={() => setSubjectsOpen(false)}
          >
            <button className="flex items-center gap-1 text-white opacity-75 hover:opacity-100 transition-opacity whitespace-nowrap">
              各教科の指導
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {subjectsOpen && (
              <div
                className="absolute top-full left-0 mt-2 rounded-xl overflow-hidden shadow-xl z-50 min-w-32 py-1"
                style={{ backgroundColor: "#162540", border: "1px solid rgba(255,255,255,0.12)" }}
              >
                {subjects.map((s) => (
                  <Link
                    key={s.href}
                    href={s.href}
                    className="block px-4 py-2.5 text-white opacity-75 hover:opacity-100 hover:bg-white hover:bg-opacity-10 transition-colors text-sm"
                  >
                    {s.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            href="/contact"
            className="ml-2 px-5 py-2.5 text-white font-bold rounded-lg text-sm whitespace-nowrap hover:opacity-90 transition-opacity"
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
        <div style={{ backgroundColor: "#0c1a33", borderTop: "1px solid rgba(255,255,255,0.1)" }} className="lg:hidden px-5 pb-5 pt-2">
          <Link href="/" className="block py-2.5 text-sm text-white opacity-75 hover:opacity-100 border-b" style={{ borderColor: "rgba(255,255,255,0.08)" }} onClick={() => setMenuOpen(false)}>
            ホーム
          </Link>
          {navLinks.map((link) => (
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
          <div className="py-2.5 border-b" style={{ borderColor: "rgba(255,255,255,0.08)" }}>
            <button
              className="text-sm text-white opacity-75 flex items-center gap-1 w-full justify-between"
              onClick={() => setSubjectsOpen(!subjectsOpen)}
            >
              各教科の指導
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {subjectsOpen && (
              <div className="mt-2 ml-3 space-y-1">
                {subjects.map((s) => (
                  <Link
                    key={s.href}
                    href={s.href}
                    className="block py-1.5 text-sm text-white opacity-65 hover:opacity-100"
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
