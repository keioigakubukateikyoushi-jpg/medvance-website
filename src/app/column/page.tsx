"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import {
  columnArticlesWithHref,
  columnCategories,
  resolvedColumnTopicClusters,
} from "@/lib/columnArticles";
import { getColumnThumbnail } from "@/lib/columnThumbnails";
import { getUniversityImage } from "@/lib/universityImages";
import { buildBreadcrumbSchema, buildCollectionPageSchema, buildItemListSchema } from "@/lib/seo";

function getArticleThumbnail(article: { slug: string; category: string }): string | null {
  if (article.category === "大学別対策") {
    const img = getUniversityImage(article.slug);
    return img?.src ?? null;
  }
  return getColumnThumbnail(article.slug, article.category);
}

const universityArticles: { slug: string; href: string; category: string; title: string; description: string; popular: boolean }[] = [
  { slug: "keio", href: "/universities/keio", category: "大学別対策", title: "慶應義塾大学医学部 入試対策ガイド", description: "思考力・論証力重視の英数理。小論文・面接の比重が高く、医師としての人間性が問われる最難関私立医学部の完全攻略ガイド。", popular: true },
  { slug: "jikei", href: "/universities/jikei", category: "大学別対策", title: "東京慈恵会医科大学 入試対策ガイド", description: "英語が私立医学部最難関レベル。医学系長文読解と英作文の対策が合否を分ける。「慈恵の医師像」を深く理解した面接準備が必須。", popular: true },
  { slug: "juntendo", href: "/universities/juntendo", category: "大学別対策", title: "順天堂大学医学部 入試対策ガイド", description: "一般選抜A方式では小論文を一次日に実施し、二次で面接を行う。配点と時間割を踏まえた総合対策が必要。", popular: true },
  { slug: "nippon-medical", href: "/universities/nippon-medical", category: "大学別対策", title: "日本医科大学 入試対策ガイド", description: "数学・理科の記述難問が特徴。解法の論理性が評価される。面接が2回実施される独自の選考フローへの対策が重要。", popular: false },
  { slug: "showa", href: "/universities/showa", category: "大学別対策", title: "昭和大学医学部 入試対策ガイド", description: "基礎力を重視した出題スタイル。受験者数が多く、基礎問題での取りこぼしが命取り。正確性とスピードを徹底的に鍛える。", popular: false },
  { slug: "tokyo-ika", href: "/universities/tokyo-ika", category: "大学別対策", title: "東京医科大学 入試対策ガイド", description: "英語・数学・理科2科目のバランス型出題。標準〜やや難の問題が中心で、近年は思考力を問う問題が増加している。", popular: false },
  { slug: "nihon", href: "/universities/nihon", category: "大学別対策", title: "日本大学医学部 入試対策ガイド", description: "標準〜やや難のバランス型出題。全科目で基礎〜標準問題を確実に取ることが合格への最短ルート。", popular: false },
  { slug: "toho", href: "/universities/toho", category: "大学別対策", title: "東邦大学医学部 入試対策ガイド", description: "英語の長文量が多く読解スピードが鍵。計算問題でのミスが合否を分ける。全体的に標準レベルで安定した実力が求められる。", popular: false },
  { slug: "kyorin", href: "/universities/kyorin", category: "大学別対策", title: "杏林大学医学部 入試対策ガイド", description: "比較的取り組みやすい問題構成。基礎の完成が最重要で、標準問題を確実に解く力が合否を決める。", popular: false },
  { slug: "teikyo", href: "/universities/teikyo", category: "大学別対策", title: "帝京大学医学部 入試対策ガイド", description: "マークシート中心の出題。典型問題が多く、スピードと正確性の両立が求められる実践的な対策が有効。", popular: false },
  { slug: "tokai", href: "/universities/tokai", category: "大学別対策", title: "東海大学医学部 入試対策ガイド", description: "英語の長文読解と数学の計算力が重要。標準レベルの問題が中心で、全科目バランスよく仕上げることが合格の鍵。", popular: false },
  { slug: "kitasato", href: "/universities/kitasato", category: "大学別対策", title: "北里大学医学部 入試対策ガイド", description: "理科の難易度がやや高い。基礎を固めた上で理科を重点強化することで合格ラインに届く。面接も重要視される。", popular: false },
  { slug: "marianna", href: "/universities/marianna", category: "大学別対策", title: "聖マリアンナ医科大学 入試対策ガイド", description: "建学精神に基づいた面接が特徴。ボランティア経験や医療への動機が重視される。学力は標準〜やや難のレベル。", popular: false },
  { slug: "joshi-ika", href: "/universities/joshi-ika", category: "大学別対策", title: "東京女子医科大学 入試対策ガイド", description: "女子医学部唯一の専門校。面接では女性医師としての覚悟と将来像を問われる。基礎力重視の出題スタイル。", popular: false },
  { slug: "iuhw", href: "/universities/iuhw", category: "大学別対策", title: "国際医療福祉大学医学部 入試対策ガイド", description: "英語重視のグローバル教育が特徴。英語力が特に重要で、英語長文・英作文への十分な対策が必須。", popular: false },
  { slug: "dokkyo", href: "/universities/dokkyo", category: "大学別対策", title: "獨協医科大学 入試対策ガイド", description: "英語・数学の基礎固めが合否を分ける。標準問題中心の出題で小論文も課される。バランスのよい学習計画が有効。", popular: false },
  { slug: "saitama-ika", href: "/universities/saitama-ika", category: "大学別対策", title: "埼玉医科大学 入試対策ガイド", description: "標準レベルの出題が中心。基礎を丁寧に固めることで安定した得点が可能。面接では地域医療への関心が評価される。", popular: false },
  { slug: "kansai-ika", href: "/universities/kansai-ika", category: "大学別対策", title: "関西医科大学 入試対策ガイド", description: "関西圏の難関私立医学部。英語の読解力が特に重要。標準〜やや難の問題で、全科目のバランスが求められる。", popular: false },
  { slug: "kindai", href: "/universities/kindai", category: "大学別対策", title: "近畿大学医学部 入試対策ガイド", description: "近年難化傾向あり。英語の長文読解力が鍵。標準〜やや難の問題が中心で、関西圏の受験生に人気の医学部。", popular: false },
  { slug: "osaka-ika", href: "/universities/osaka-ika", category: "大学別対策", title: "大阪医科薬科大学 入試対策ガイド", description: "関西圏の名門。全体的に難易度が高く、英数理でそれぞれ高いレベルの実力が求められる。", popular: false },
  { slug: "hyogo", href: "/universities/hyogo", category: "大学別対策", title: "兵庫医科大学 入試対策ガイド", description: "標準レベルの出題。全科目バランスよく仕上げることが合格への近道。面接重視の選考スタイルが特徴。", popular: false },
  { slug: "fujita", href: "/universities/fujita", category: "大学別対策", title: "藤田医科大学 入試対策ガイド", description: "中部圏最大規模の医学部。比較的取り組みやすい問題が多く、基礎〜標準力の完成が合格の条件。", popular: false },
  { slug: "aichi-ika", href: "/universities/aichi-ika", category: "大学別対策", title: "愛知医科大学 入試対策ガイド", description: "中部圏の私立医学部。標準問題中心の出題で、基礎力の完成度が合否を直接左右する。", popular: false },
  { slug: "kanazawa-ika", href: "/universities/kanazawa-ika", category: "大学別対策", title: "金沢医科大学 入試対策ガイド", description: "北陸唯一の私立医学部。標準レベルの問題が中心で、理科のバランスよい対策が重要。", popular: false },
  { slug: "kurume", href: "/universities/kurume", category: "大学別対策", title: "久留米大学医学部 入試対策ガイド", description: "九州圏の私立医学部。英語の読解力と理科の基礎が合否を分ける。標準問題を確実に取る実力が必要。", popular: false },
  { slug: "fukuoka", href: "/universities/fukuoka", category: "大学別対策", title: "福岡大学医学部 入試対策ガイド", description: "九州圏。全科目バランス型の出題が特徴。標準問題で失点しない完成度の高い学力が求められる。", popular: false },
  { slug: "kawasaki-ika", href: "/universities/kawasaki-ika", category: "大学別対策", title: "川崎医科大学 入試対策ガイド", description: "岡山県の私立医学部。合格難易度は比較的低め。ただし学費が高水準のため、費用面も含めた計画的な受験戦略が必要。", popular: false },
  { slug: "iwate", href: "/universities/iwate", category: "大学別対策", title: "岩手医科大学 入試対策ガイド", description: "東北地方の私立医学部。標準問題中心。地元出身者への配慮もある地域密着型の医学部で、地域医療への志望動機が重視される。", popular: false },
  { slug: "tohoku-ika", href: "/universities/tohoku-ika", category: "大学別対策", title: "東北医科薬科大学 入試対策ガイド", description: "2016年新設の医学部。東北の医療人材育成を目的とした建学理念を持つ。標準〜やや難の出題で、英数理の基礎力が重要。", popular: false },
];

const categoryColors: Record<string, string> = {
  大学別対策: "#0c6e4f",
  受験戦略: "#3b6cb7",
  勉強法: "#2a9d5c",
  大学選び: "#7c5cbf",
  入試対策: "#c9922a",
  再受験: "#d05050",
  "塾・指導": "#4a9ab5",
  受験情報: "#6b7280",
};

const allArticles = [
  ...universityArticles.map((a) => ({ ...a, href: a.href })),
  ...columnArticlesWithHref,
];

const PAGE_SIZE = 12; // 3カラム × 4行

const columnIndexSchemas = [
  buildCollectionPageSchema(
    "医学部受験コラム一覧",
    "医学部受験の勉強法、面接、小論文、学費、塾選び、再受験まで横断して探せるコラム一覧です。",
    "/column",
  ),
  buildBreadcrumbSchema([
    { name: "ホーム", url: "/" },
    { name: "医学部受験コラム一覧", url: "/column" },
  ]),
  buildItemListSchema(
    "医学部受験コラム一覧",
    "/column",
    columnArticlesWithHref.map((article) => ({ name: article.title, url: article.href })),
  ),
];

// medionスタイル: ダークブラウン代わりにmedvanceネイビー、グレーは#b5b5b5
const COLOR_BADGE = "#0c1a33";
const COLOR_GREY = "#b5b5b5";
const COLOR_TEXT = "#222222";
const COLOR_BORDER = "#d9d9d9";

export default function ColumnIndexPage() {
  const [activeCategory, setActiveCategory] = useState("すべて");
  const [page, setPage] = useState(1);

  const filtered = useMemo(
    () =>
      activeCategory === "すべて"
        ? allArticles
        : allArticles.filter((a) => a.category === activeCategory),
    [activeCategory],
  );

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const currentPage = Math.min(page, totalPages);
  const paginated = filtered.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE);

  const popularTop5 = allArticles.filter((a) => a.popular).slice(0, 5);
  const recentArticles = allArticles.slice(0, 5);

  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    for (const a of allArticles) {
      counts[a.category] = (counts[a.category] ?? 0) + 1;
    }
    return counts;
  }, []);

  const handleCategoryChange = (cat: string) => {
    setActiveCategory(cat);
    setPage(1);
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handlePageChange = (next: number) => {
    setPage(next);
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div className="bg-white min-h-screen" style={{ fontFamily: "var(--font-noto-serif)" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(columnIndexSchemas) }}
      />

      <main className="mx-auto" style={{ maxWidth: 1000, padding: "30px 20px 50px" }}>
        <div className="flex flex-col lg:flex-row gap-8">
          {/* メインカラム */}
          <section className="flex-1 min-w-0">
            {/* ヘッダー: タイトル + 金線アクセント + サブテキスト */}
            <header className="mb-8">
              <div className="flex items-baseline gap-3 mb-2">
                <h2
                  className="text-3xl md:text-[32px]"
                  style={{ color: COLOR_TEXT, fontWeight: 900 }}
                >
                  コラム
                </h2>
                <p
                  className="text-xs tracking-widest uppercase"
                  style={{ color: "#c9922a", letterSpacing: "0.15em" }}
                >
                  COLUMN
                </p>
                <span className="text-xs ml-auto" style={{ color: COLOR_GREY }}>
                  全{allArticles.length}記事
                </span>
              </div>
              <div
                style={{
                  height: 3,
                  width: 56,
                  backgroundColor: "#c9922a",
                  marginBottom: 12,
                }}
              />
              <p className="text-sm" style={{ color: "#555", lineHeight: 1.7 }}>
                医学部受験の勉強法・面接・小論文・学費・塾選びまで、現役慶應医学部生が解説。
              </p>
            </header>

            {/* ピックアップ記事 (Top3を大きめに) */}
            {activeCategory === "すべて" && currentPage === 1 && (
              <section className="mb-10">
                <div className="flex items-center gap-2 mb-4">
                  <span
                    style={{
                      display: "inline-block",
                      width: 4,
                      height: 16,
                      backgroundColor: "#c9922a",
                    }}
                  />
                  <h3 className="text-base font-bold" style={{ color: COLOR_TEXT }}>
                    ピックアップ
                  </h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                  {popularTop5.slice(0, 3).map((a) => {
                    const thumb = getArticleThumbnail(a);
                    const catColor = categoryColors[a.category] ?? COLOR_BADGE;
                    return (
                      <article key={`pickup-${a.slug}`}>
                        <Link href={a.href} className="block group">
                          <figure className="relative m-0 overflow-hidden">
                            {thumb ? (
                              <div className="relative w-full" style={{ aspectRatio: "334/188" }}>
                                <Image
                                  src={thumb}
                                  alt=""
                                  fill
                                  sizes="(max-width: 768px) 100vw, 334px"
                                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                                  loading="lazy"
                                />
                              </div>
                            ) : (
                              <div className="w-full bg-gray-200" style={{ aspectRatio: "334/188" }} />
                            )}
                            <span
                              className="absolute font-medium"
                              style={{
                                top: 0,
                                right: 0,
                                background: catColor,
                                color: "#fff",
                                padding: "0px 10px",
                                fontSize: 12,
                                borderRadius: 2,
                              }}
                            >
                              {a.category}
                            </span>
                            <span
                              className="absolute font-bold"
                              style={{
                                top: 8,
                                left: 8,
                                background: "#c9922a",
                                color: "#fff",
                                padding: "2px 8px",
                                fontSize: 11,
                                borderRadius: 2,
                                letterSpacing: "0.1em",
                              }}
                            >
                              PICK UP
                            </span>
                          </figure>
                          <h2
                            className="mt-2.5 leading-snug group-hover:opacity-60 transition-opacity"
                            style={{ fontSize: 15, fontWeight: 700, color: COLOR_TEXT }}
                          >
                            {a.title}
                          </h2>
                        </Link>
                      </article>
                    );
                  })}
                </div>
              </section>
            )}

            {/* セクション見出し: 全記事 */}
            <div className="flex items-center gap-2 mb-4 mt-2">
              <span
                style={{
                  display: "inline-block",
                  width: 4,
                  height: 16,
                  backgroundColor: COLOR_BADGE,
                }}
              />
              <h3 className="text-base font-bold" style={{ color: COLOR_TEXT }}>
                {activeCategory === "すべて" ? "新着・全記事" : activeCategory}
              </h3>
            </div>

            {/* カテゴリタブ */}
            <div className="mb-6 -mx-1 overflow-x-auto">
              <div className="flex flex-nowrap gap-1.5 px-1 pb-1">
                {columnCategories.map((cat) => {
                  const isActive = activeCategory === cat;
                  const count = cat === "すべて" ? allArticles.length : categoryCounts[cat] ?? 0;
                  return (
                    <button
                      key={cat}
                      onClick={() => handleCategoryChange(cat)}
                      className="px-3 py-1.5 text-xs whitespace-nowrap transition-colors"
                      style={{
                        backgroundColor: isActive ? COLOR_BADGE : "#fff",
                        color: isActive ? "#fff" : COLOR_TEXT,
                        border: `1px solid ${isActive ? COLOR_BADGE : COLOR_BORDER}`,
                        borderRadius: 3,
                        fontWeight: 600,
                      }}
                    >
                      {cat}
                      <span className="ml-1 text-[10px] opacity-60">({count})</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 記事一覧 (#article_list_large 相当: 3カラム gap 24px、各カード 334px) */}
            <div
              id="article_list_large"
              className="grid gap-6"
              style={{
                gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
                justifyContent: "flex-start",
              }}
            >
              {paginated.map((article) => {
                const thumb = getArticleThumbnail(article);
                const catColor = categoryColors[article.category] ?? COLOR_BADGE;
                return (
                  <article key={`${article.category}-${article.slug}`} className="block">
                    <Link href={article.href} className="block group">
                      <figure className="relative m-0 overflow-hidden">
                        {thumb ? (
                          <div className="relative w-full" style={{ aspectRatio: "334/188" }}>
                            <Image
                              src={thumb}
                              alt=""
                              fill
                              sizes="(max-width: 768px) 100vw, 334px"
                              className="object-cover transition-transform duration-500 group-hover:scale-105"
                              loading="lazy"
                            />
                          </div>
                        ) : (
                          <div className="w-full bg-gray-200" style={{ aspectRatio: "334/188" }} />
                        )}
                        {/* カテゴリバッジ (右上、カテゴリ別カラー) */}
                        <span
                          className="column-badge absolute font-medium"
                          style={{
                            top: 0,
                            right: 0,
                            background: catColor,
                            color: "#fff",
                            padding: "0px 10px",
                            fontSize: 13,
                            borderRadius: 2,
                          }}
                        >
                          {article.category}
                        </span>
                        {article.popular && (
                          <span
                            className="absolute font-bold"
                            style={{
                              top: 8,
                              left: 8,
                              background: "#c9922a",
                              color: "#fff",
                              padding: "1px 6px",
                              fontSize: 10,
                              borderRadius: 2,
                              letterSpacing: "0.05em",
                            }}
                          >
                            ★ 人気
                          </span>
                        )}
                      </figure>
                      <div className="mt-3">
                        <h2
                          className="leading-snug group-hover:opacity-50 transition-opacity"
                          style={{ fontSize: 17, fontWeight: 700, color: COLOR_TEXT }}
                        >
                          {article.title}
                        </h2>
                        <p
                          className="mt-2 text-sm leading-relaxed line-clamp-3"
                          style={{ color: "#444" }}
                        >
                          {article.description.length > 70
                            ? article.description.slice(0, 70) + "……"
                            : article.description}
                          <span
                            className="readmore inline ml-1"
                            style={{ color: COLOR_GREY }}
                          >
                            続きを読む
                          </span>
                        </p>
                        <div
                          className="addtional-info mt-3 flex justify-between items-center"
                          style={{ color: COLOR_GREY, fontSize: 12 }}
                        >
                          <span style={{ color: catColor, fontWeight: 600, fontSize: 11 }}>
                            ▸ {article.category}
                          </span>
                          <span
                            className="readmore"
                            style={{ color: "#c9922a", fontSize: 11, fontWeight: 600 }}
                          >
                            続きを読む →
                          </span>
                        </div>
                      </div>
                    </Link>
                  </article>
                );
              })}
            </div>

            {/* ページネーション */}
            {totalPages > 1 && (
              <nav
                aria-label="ページネーション"
                className="mt-12 flex items-center justify-center gap-1.5 flex-wrap"
              >
                <span className="text-sm mr-3" style={{ color: COLOR_GREY }}>
                  ページ {currentPage} / {totalPages}
                </span>
                {currentPage > 1 && (
                  <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    className="px-3 py-2 text-sm transition-colors"
                    style={{
                      border: `1px solid ${COLOR_BORDER}`,
                      backgroundColor: "#fff",
                      color: COLOR_TEXT,
                      borderRadius: 2,
                    }}
                  >
                    « 前へ
                  </button>
                )}
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => {
                  const isActive = p === currentPage;
                  const showEdge = p === 1 || p === totalPages;
                  const showNear = Math.abs(p - currentPage) <= 1;
                  if (!showEdge && !showNear) {
                    if (p === 2 || p === totalPages - 1) {
                      return (
                        <span key={p} className="px-1 text-sm" style={{ color: COLOR_GREY }}>
                          …
                        </span>
                      );
                    }
                    return null;
                  }
                  return (
                    <button
                      key={p}
                      onClick={() => handlePageChange(p)}
                      className="min-w-[36px] px-2.5 py-2 text-sm transition-colors"
                      style={{
                        backgroundColor: isActive ? COLOR_BADGE : "#fff",
                        color: isActive ? "#fff" : COLOR_TEXT,
                        border: `1px solid ${isActive ? COLOR_BADGE : COLOR_BORDER}`,
                        borderRadius: 2,
                        fontWeight: isActive ? 700 : 400,
                      }}
                    >
                      {p}
                    </button>
                  );
                })}
                {currentPage < totalPages && (
                  <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    className="px-3 py-2 text-sm transition-colors"
                    style={{
                      border: `1px solid ${COLOR_BORDER}`,
                      backgroundColor: "#fff",
                      color: COLOR_TEXT,
                      borderRadius: 2,
                    }}
                  >
                    次へ »
                  </button>
                )}
                {currentPage < totalPages - 1 && (
                  <button
                    onClick={() => handlePageChange(totalPages)}
                    className="px-3 py-2 text-sm transition-colors"
                    style={{
                      border: `1px solid ${COLOR_BORDER}`,
                      backgroundColor: "#fff",
                      color: COLOR_TEXT,
                      borderRadius: 2,
                    }}
                  >
                    最後 »
                  </button>
                )}
              </nav>
            )}
          </section>

          {/* サイドバー (#side_widget aside 相当: 230px幅) */}
          <aside
            id="side_widget"
            className="w-full lg:w-[230px] flex-shrink-0"
            style={{ paddingTop: 0 }}
          >
            <div className="lg:pt-[88px]">
              {/* 人気記事TOP5 */}
              <section className="mb-8">
                <h2
                  className="font-semibold pb-2 mb-3"
                  style={{
                    fontSize: 16,
                    color: COLOR_TEXT,
                    borderTop: `1px solid ${COLOR_BORDER}`,
                    paddingTop: 10,
                    fontWeight: 600,
                  }}
                >
                  人気記事TOP5
                </h2>
                <ul className="space-y-0">
                  {popularTop5.map((a, idx) => {
                    const thumb = getArticleThumbnail(a);
                    return (
                      <li
                        key={a.slug}
                        className="article-list"
                        style={{
                          fontSize: 12,
                          lineHeight: 1.5,
                          marginTop: 10,
                          paddingTop: 10,
                          borderTop: idx === 0 ? "none" : `1px dashed ${COLOR_BORDER}`,
                        }}
                      >
                        <Link href={a.href} className="article-link block hover:opacity-50 transition-opacity">
                          <article className="flex justify-between gap-2.5">
                            <div className="relative flex-shrink-0" style={{ width: 60, height: 60 }}>
                              {thumb && (
                                <Image
                                  src={thumb}
                                  alt=""
                                  fill
                                  sizes="60px"
                                  className="object-cover"
                                  loading="lazy"
                                />
                              )}
                              <span
                                className="absolute"
                                style={{
                                  background: COLOR_BADGE,
                                  color: "#fff",
                                  fontSize: 13,
                                  fontWeight: 500,
                                  padding: "2px 5px",
                                  left: 0,
                                  top: 0,
                                }}
                              >
                                {idx + 1}
                              </span>
                            </div>
                            <div className="flex-1 min-w-0">
                              <p
                                className="title font-semibold leading-tight line-clamp-3"
                                style={{ color: COLOR_TEXT, fontWeight: 600 }}
                              >
                                {a.title}
                              </p>
                              <span
                                className="date block mt-1"
                                style={{ color: COLOR_GREY, fontSize: 12 }}
                              >
                                {a.popular ? "人気記事" : a.category}
                              </span>
                            </div>
                          </article>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </section>

              {/* カテゴリー */}
              <section className="mb-8">
                <h2
                  className="font-semibold pb-2 mb-3"
                  style={{
                    fontSize: 16,
                    color: COLOR_TEXT,
                    borderTop: `1px solid ${COLOR_BORDER}`,
                    paddingTop: 10,
                    fontWeight: 600,
                  }}
                >
                  カテゴリー
                </h2>
                <ul>
                  {columnCategories
                    .filter((c) => c !== "すべて")
                    .map((cat) => {
                      const count = categoryCounts[cat] ?? 0;
                      if (count === 0) return null;
                      return (
                        <li
                          key={cat}
                          style={{
                            fontSize: 13,
                            position: "relative",
                            marginTop: 5,
                            display: "block",
                          }}
                        >
                          <button
                            onClick={() => handleCategoryChange(cat)}
                            className="block w-full text-left py-1 hover:opacity-50 transition-opacity"
                            style={{ fontSize: 13, fontWeight: 600, color: COLOR_TEXT }}
                          >
                            <span style={{ marginRight: 6 }}>›</span>
                            {cat} ({count})
                          </button>
                        </li>
                      );
                    })}
                </ul>
              </section>

              {/* 最近の記事 */}
              <section className="mb-8">
                <h2
                  className="font-semibold pb-2 mb-3"
                  style={{
                    fontSize: 16,
                    color: COLOR_TEXT,
                    borderTop: `1px solid ${COLOR_BORDER}`,
                    paddingTop: 10,
                    fontWeight: 600,
                  }}
                >
                  最近の記事
                </h2>
                <ul>
                  {recentArticles.map((a, idx) => (
                    <li
                      key={a.slug}
                      className="article-list"
                      style={{
                        fontSize: 12,
                        lineHeight: 1.5,
                        marginTop: 10,
                        paddingTop: 10,
                        borderTop: idx === 0 ? "none" : `1px dashed ${COLOR_BORDER}`,
                      }}
                    >
                      <Link
                        href={a.href}
                        className="article-link block hover:opacity-50 transition-opacity"
                        style={{ fontWeight: 600 }}
                      >
                        <article>
                          <p
                            className="title leading-tight line-clamp-2"
                            style={{ color: COLOR_TEXT, fontWeight: 600, fontSize: 13 }}
                          >
                            {a.title}
                          </p>
                          <span
                            className="date block mt-1"
                            style={{ color: COLOR_GREY, fontSize: 12 }}
                          >
                            {a.category}
                          </span>
                        </article>
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>

              {/* テーマから探す（medionのアーカイブ枠相当）*/}
              <section className="mb-12">
                <h2
                  className="font-semibold pb-2 mb-3"
                  style={{
                    fontSize: 16,
                    color: COLOR_TEXT,
                    borderTop: `1px solid ${COLOR_BORDER}`,
                    paddingTop: 10,
                    fontWeight: 600,
                  }}
                >
                  テーマから探す
                </h2>
                {resolvedColumnTopicClusters.slice(0, 6).map((cluster) => (
                  <details
                    key={cluster.title}
                    className=""
                    style={{ borderTop: "none" }}
                  >
                    <summary
                      className="cursor-pointer py-1.5 hover:opacity-50 transition-opacity"
                      style={{ fontSize: 14, fontWeight: 400, color: COLOR_TEXT, paddingLeft: 15, position: "relative" }}
                    >
                      <span
                        style={{
                          position: "absolute",
                          left: 0,
                          top: "50%",
                          transform: "translateY(-50%)",
                          fontSize: 12,
                          color: COLOR_GREY,
                        }}
                      >
                        ›
                      </span>
                      {cluster.title}
                    </summary>
                    <ul className="pl-4 pb-2">
                      {cluster.articles.map((a) => (
                        <li
                          key={a.slug}
                          className="ml-2.5 mb-1.5 inline-block"
                          style={{ display: "block", marginBottom: 6 }}
                        >
                          <Link
                            href={a.href}
                            className="hover:opacity-50 transition-opacity"
                            style={{ fontSize: 13, fontWeight: 400, color: COLOR_TEXT }}
                          >
                            ・{a.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </details>
                ))}
              </section>

              {/* 無料相談CTA (medvanceらしさ) */}
              <section className="mb-8">
                <div
                  className="text-center"
                  style={{
                    backgroundColor: COLOR_BADGE,
                    padding: "20px 16px",
                    backgroundImage:
                      "linear-gradient(135deg, #0c1a33 0%, #1a3055 100%)",
                  }}
                >
                  <p
                    className="text-[10px] tracking-widest uppercase mb-1.5"
                    style={{ color: "#c9922a", letterSpacing: "0.18em", fontWeight: 600 }}
                  >
                    FREE CONSULTATION
                  </p>
                  <p
                    className="text-sm font-bold text-white mb-3 leading-snug"
                    style={{ fontFamily: "var(--font-noto-serif)" }}
                  >
                    医学部受験の悩みを
                    <br />
                    無料で個別相談
                  </p>
                  <div
                    style={{
                      height: 1,
                      width: 32,
                      backgroundColor: "#c9922a",
                      margin: "0 auto 12px",
                    }}
                  />
                  <Link
                    href="/contact?from=column-sidebar"
                    className="block w-full px-3 py-2.5 text-white text-xs font-bold hover:opacity-90 transition-opacity"
                    style={{
                      backgroundColor: "#c9922a",
                      letterSpacing: "0.05em",
                    }}
                  >
                    お問い合わせ →
                  </Link>
                </div>
              </section>

              {/* note リンク */}
              <section className="mb-8">
                <a
                  href="https://note.com/igakubu_juken"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 hover:opacity-70 transition-opacity"
                  style={{ border: `1px solid ${COLOR_BORDER}` }}
                >
                  <div
                    className="flex-shrink-0 flex items-center justify-center text-white font-bold"
                    style={{
                      backgroundColor: "#41c9b4",
                      width: 32,
                      height: 32,
                      fontSize: 13,
                    }}
                  >
                    n
                  </div>
                  <div className="flex-1 min-w-0">
                    <p
                      className="font-semibold mb-0.5"
                      style={{ color: COLOR_GREY, fontSize: 10 }}
                    >
                      note でも発信中
                    </p>
                    <p
                      className="font-bold"
                      style={{ color: COLOR_TEXT, fontSize: 12 }}
                    >
                      noteで読む →
                    </p>
                  </div>
                </a>
              </section>
            </div>
          </aside>
        </div>
      </main>

      {/* パンくず (medionの #pankuzu に相当) */}
      <nav
        id="pankuzu"
        className="mx-auto"
        style={{
          maxWidth: 1000,
          padding: "0 20px 30px",
          fontSize: 12,
          color: COLOR_GREY,
        }}
      >
        <ul className="flex flex-wrap items-center gap-1">
          <li>
            <Link href="/" className="hover:underline">
              トップ
            </Link>
          </li>
          <li>&nbsp;&gt;&nbsp;</li>
          <li style={{ color: COLOR_TEXT }}>コラム</li>
        </ul>
      </nav>
    </div>
  );
}
