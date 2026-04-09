import { headers } from "next/headers";
import type { Metadata } from "next";
import Link from "next/link";
import { columnArticles } from "@/lib/columnArticles";
import {
  buildArticleSchema,
  buildBreadcrumbSchema,
  siteUrl,
  SITE_MODIFIED,
} from "@/lib/seo";

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

// generateMetadata: inject per-article OG image via /api/og
export async function generateMetadata(): Promise<Metadata> {
  const headersList = await headers();
  const pathname = headersList.get("x-pathname") || "";
  const slug = pathname.replace(/^\/column\//, "").split("/")[0];
  const article = columnArticles.find((a) => a.slug === slug);

  if (!article || !slug) {
    return {
      title: "受験・学習コラム",
      description:
        "医学部受験・難関大受験・定期テスト対策・推薦AO入試・慶應内部進学まで、Medvanceの受験・学習コラム一覧。",
    };
  }

  const ogImageUrl = `${siteUrl}/api/og?title=${encodeURIComponent(article.title)}&cat=${encodeURIComponent(article.category)}`;

  return {
    openGraph: {
      title: article.title,
      description: article.description,
      url: `${siteUrl}/column/${slug}`,
      siteName: "Medvance",
      locale: "ja_JP",
      type: "article",
      images: [{ url: ogImageUrl, width: 1200, height: 630, alt: article.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.description,
      images: [ogImageUrl],
    },
  };
}

export default async function ColumnLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const headersList = await headers();
  const pathname = headersList.get("x-pathname") || "";
  const slug = pathname.replace(/^\/column\//, "").split("/")[0];
  const article = columnArticles.find((a) => a.slug === slug);

  // Build per-article schemas for all column pages automatically
  const articleSchemas: object[] = [];
  if (article && slug) {
    const path = `/column/${slug}`;
    articleSchemas.push(
      buildArticleSchema({
        headline: article.title,
        description: article.description,
        path,
        dateModified: SITE_MODIFIED,
        articleSection: article.category,
        keywords: article.keywords,
      })
    );
    articleSchemas.push(
      buildBreadcrumbSchema([
        { name: "ホーム", url: "/" },
        { name: "コラム一覧", url: "/column" },
        { name: article.title, url: path },
      ])
    );
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />
      {articleSchemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

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
    </>
  );
}
