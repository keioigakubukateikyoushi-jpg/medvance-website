import type { Metadata } from "next";
import Link from "next/link";
import { siteUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title: "受験・学習コラム",
  description:
    "医学部受験・難関大受験・定期テスト対策・推薦AO入試・慶應内部進学まで、Medvanceの受験・学習コラム一覧。勉強法・面接・小論文・学費・塾選びなど幅広く解説。",
};

const blogSchema = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: "Medvance コラム",
  description: "医学部受験・難関大受験・定期テスト対策・推薦AO入試・慶應内部進学の受験・学習コラム",
  url: `${siteUrl}/column`,
  publisher: {
    "@type": "Organization",
    "@id": `${siteUrl}/#organization`,
    name: "Medvance",
  },
  inLanguage: "ja-JP",
};

export default function ColumnLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />
      {/* Top CTA bar */}
      <div style={{ backgroundColor: "#fff8ec", borderBottom: "2px solid rgba(201,146,42,0.25)" }} className="py-4 px-4">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-col sm:flex-row items-center sm:items-baseline gap-2 text-center sm:text-left">
            <span
              className="text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full flex-shrink-0"
              style={{ backgroundColor: "#c9922a", color: "#fff" }}
            >
              記事読者向け
            </span>
            <div>
              <span className="text-base font-bold" style={{ color: "#0c1a33" }}>
                志望校・学力・残り期間から、次の一手を30分で整理
              </span>
              <span className="text-xs ml-2 hidden sm:inline" style={{ color: "#6b7280" }}>
                — 完全無料 / 勧誘なし / オンライン全国対応 / 戦略マニュアル付き
              </span>
            </div>
          </div>
          <Link
            href="/contact?from=column-top-bar"
            className="flex-shrink-0 text-sm font-bold px-6 py-2.5 rounded-lg text-white hover:opacity-90 transition-opacity whitespace-nowrap shadow-sm"
            style={{ backgroundColor: "#c9922a" }}
          >
            30分無料相談を申し込む
          </Link>
        </div>
      </div>

      {/* column-body wrapper: activates typography CSS in globals.css */}
      <div className="column-body">
        {children}
      </div>
    </>
  );
}
