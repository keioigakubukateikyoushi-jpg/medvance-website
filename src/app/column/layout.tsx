import type { Metadata } from "next";
import Link from "next/link";
import { siteUrl } from "@/lib/seo";
import { columnArticles } from "@/lib/columnArticles";

export const metadata: Metadata = {
  title: "医学部受験コラム｜合格戦略・勉強法・学費・面接対策まとめ",
  description:
    "医学部受験の勉強法・合格戦略・学費・過去問・面接・小論文・推薦AO対策を現役慶應医学部生が解説。浪人・再受験・内部進学・大学別対策まで網羅。",
  alternates: { canonical: "/column" },
  openGraph: {
    title: "医学部受験コラム | Medvance",
    description: "医学部受験の勉強法・合格戦略・学費・過去問・面接・推薦AO対策を現役慶應医学部生が解説。",
    url: "/column",
    type: "website",
  },
};

const popularArticles = columnArticles
  .filter((a) => a.popular)
  .slice(0, 6);

const blogSchema = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: "Medvance コラム",
  description:
    "医学部受験・難関大受験・定期テスト対策・推薦AO入試・慶應内部進学の受験・学習コラム",
  url: `${siteUrl}/column`,
  publisher: {
    "@type": "Organization",
    "@id": `${siteUrl}/#organization`,
    name: "Medvance",
  },
  inLanguage: "ja-JP",
};

export default function ColumnLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />

      {/* Top CTA bar */}
      <div
        style={{
          backgroundColor: "#fff8ec",
          borderBottom: "2px solid rgba(201,146,42,0.25)",
        }}
        className="py-4 px-4"
      >
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
              <span
                className="text-xs ml-2 hidden sm:inline"
                style={{ color: "#6b7280" }}
              >
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

      {/* column-body wrapper */}
      <div className="column-body">{children}</div>

      {/* Popular articles internal linking */}
      <nav aria-label="人気コラム記事" className="py-12 px-4" style={{ backgroundColor: "#f7f5f0", borderTop: "1px solid #e5e1d8" }}>
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-bold tracking-widest uppercase mb-5" style={{ color: "#c9922a" }}>
            よく読まれているコラム
          </p>
          <div className="grid sm:grid-cols-2 gap-3">
            {popularArticles.map((article) => (
              <Link
                key={article.slug}
                href={`/column/${article.slug}`}
                className="flex items-center gap-3 p-3 rounded-xl bg-white hover:shadow-sm transition-shadow"
                style={{ border: "1px solid #e5e1d8" }}
              >
                <span
                  className="flex-shrink-0 text-xs font-semibold px-2 py-0.5 rounded-full"
                  style={{ backgroundColor: "rgba(201,146,42,0.1)", color: "#c9922a" }}
                >
                  {article.category}
                </span>
                <span className="text-sm font-semibold leading-snug" style={{ color: "#0c1a33" }}>
                  {article.title}
                </span>
              </Link>
            ))}
          </div>
          <div className="mt-5 text-center">
            <Link
              href="/column"
              className="text-sm font-semibold hover:underline"
              style={{ color: "#c9922a" }}
            >
              コラム一覧をすべて見る →
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
