import type { Metadata } from "next";
import Link from "next/link";
import { siteUrl } from "@/lib/seo";
import { columnArticles } from "@/lib/columnArticles";
import { LINE_URL } from "@/lib/links";

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
          <div className="flex-shrink-0 flex items-center gap-2">
            <Link
              href="/contact?from=column-top-bar"
              className="inline-flex text-sm font-bold px-4 py-2.5 rounded-lg text-white hover:opacity-90 transition-opacity whitespace-nowrap shadow-sm"
              style={{ backgroundColor: "#c9922a" }}
            >
              フォーム相談
            </Link>
            <a
              href={LINE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-bold px-4 py-2.5 rounded-lg text-white hover:opacity-90 transition-opacity whitespace-nowrap shadow-sm"
              style={{ backgroundColor: "#06C755" }}
            >
              <svg viewBox="0 0 36 36" className="w-4 h-4" aria-hidden="true">
                <path fill="currentColor" d="M18 3C9.716 3 3 8.476 3 15.224c0 6.03 5.327 11.08 12.525 12.03.487.104 1.15.32 1.318.735.15.377.098.967.049 1.347l-.212 1.276c-.065.377-.302 1.478 1.294.805 1.596-.673 8.618-5.076 11.76-8.691C31.95 20.267 33 17.87 33 15.224 33 8.476 26.284 3 18 3zm-6.18 14.36h-3.4c-.266 0-.483-.217-.483-.484v-5.49c0-.267.217-.484.484-.484.266 0 .483.217.483.484v5.005h2.916c.266 0 .483.216.483.484 0 .267-.217.485-.483.485zm1.935-.484c0 .267-.217.485-.484.485-.267 0-.484-.218-.484-.485v-5.49c0-.267.217-.484.484-.484.267 0 .484.217.484.484v5.49zm6.35 0c0 .208-.133.393-.33.46-.05.015-.102.023-.154.023-.155 0-.3-.07-.393-.191l-2.82-3.86v3.568c0 .267-.217.485-.484.485-.266 0-.482-.218-.482-.485v-5.49c0-.207.132-.392.33-.459.05-.017.103-.024.153-.024.15 0 .297.07.39.192l2.826 3.86v-3.569c0-.267.216-.484.483-.484.267 0 .484.217.484.484v5.49zm3.922-3.228c.267 0 .484.218.484.485 0 .267-.217.485-.484.485h-1.938v.76h1.938c.266 0 .484.217.484.484s-.217.484-.484.484h-2.42c-.266 0-.483-.217-.483-.484v-5.49c0-.267.217-.484.484-.484h2.42c.266 0 .483.217.483.484 0 .268-.217.485-.484.485h-1.938v.76h1.938z" />
              </svg>
              LINE相談
            </a>
          </div>
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
