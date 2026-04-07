"use client";

import Link from "next/link";
import { useState } from "react";
import {
  columnArticlesWithHref,
  columnCategories,
  resolvedColumnTopicClusters,
} from "@/lib/columnArticles";
import { buildBreadcrumbSchema, buildCollectionPageSchema, buildItemListSchema } from "@/lib/seo";

// 大学別対策ページ（/universities/配下）
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

export default function ColumnIndexPage() {
  const [activeCategory, setActiveCategory] = useState("すべて");

  const filtered = activeCategory === "すべて"
    ? allArticles
    : allArticles.filter((a) => a.category === activeCategory);

  const popular = allArticles.filter((a) => a.popular);

  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(columnIndexSchemas) }}
      />

      {/* Hero */}
      <div style={{ backgroundColor: "#0c1a33" }} className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#c9922a" }}>
            Column
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: "'Noto Serif JP', serif" }}>
            医学部受験コラム
          </h1>
          <p className="text-sm mb-6" style={{ color: "rgba(255,255,255,0.65)" }}>
            現役慶應医学部生が、受験に本当に役立つ情報を解説します
          </p>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold" style={{ backgroundColor: "rgba(201,146,42,0.2)", color: "#c9922a", border: "1px solid rgba(201,146,42,0.4)" }}>
            全{allArticles.length}記事
          </div>
        </div>
      </div>

      {/* Popular picks */}
      <div className="py-12 px-4" style={{ backgroundColor: "#f7f5f0", borderBottom: "1px solid #e5e1d8" }}>
        <div className="max-w-5xl mx-auto">
          <div className="mb-8 rounded-2xl bg-white p-5 md:p-6" style={{ border: "1px solid #e5e1d8" }}>
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-xs font-bold tracking-widest uppercase mb-2" style={{ color: "#c9922a" }}>
                  Search
                </p>
                <h2 className="text-lg font-bold mb-2" style={{ color: "#0c1a33", fontFamily: "'Noto Serif JP', serif" }}>
                  記事をキーワードで検索
                </h2>
                <p className="text-sm" style={{ color: "#6b7280" }}>
                  学費、面接、再受験、塾選びなど、気になるテーマから記事を探せます。
                </p>
              </div>
              <form action="/search" className="flex w-full max-w-xl gap-2">
                <input
                  type="text"
                  name="q"
                  placeholder="例: 医学部専門予備校 / 面接 / 慶應"
                  className="flex-1 rounded-xl px-4 py-3 text-sm"
                  style={{ border: "1px solid #d6d1c7", color: "#0c1a33", backgroundColor: "#fff" }}
                />
                <button
                  type="submit"
                  className="rounded-xl px-5 py-3 text-sm font-bold text-white transition-opacity hover:opacity-90"
                  style={{ backgroundColor: "#0c1a33" }}
                >
                  検索する
                </button>
              </form>
            </div>
          </div>
          <p className="text-xs font-bold tracking-widest uppercase mb-5" style={{ color: "#c9922a" }}>よく読まれている記事</p>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-3">
            {popular.map((a) => (
              <Link
                key={a.slug}
                href={a.href}
                className="flex items-start gap-3 p-4 rounded-xl bg-white hover:shadow-md transition-shadow group"
                style={{ border: "1px solid #e5e1d8" }}
              >
                <span
                  className="flex-shrink-0 text-xs font-bold px-2 py-0.5 rounded mt-0.5"
                  style={{ backgroundColor: categoryColors[a.category] ? `${categoryColors[a.category]}22` : "rgba(201,146,42,0.1)", color: categoryColors[a.category] ?? "#c9922a" }}
                >
                  {a.category}
                </span>
                <p className="text-sm font-semibold leading-snug group-hover:underline" style={{ color: "#0c1a33" }}>
                  {a.title}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="py-12 px-4 bg-white" style={{ borderBottom: "1px solid #e5e1d8" }}>
        <div className="max-w-5xl mx-auto">
          <p className="text-xs font-bold tracking-widest uppercase mb-5" style={{ color: "#c9922a" }}>
            Search Intent Hubs
          </p>
          <div className="grid md:grid-cols-3 gap-5">
            {resolvedColumnTopicClusters.map((cluster) => (
              <div
                key={cluster.title}
                className="rounded-2xl p-6"
                style={{ backgroundColor: "#f7f5f0", border: "1px solid #e5e1d8" }}
              >
                <div className="flex items-center justify-between gap-3 mb-3">
                  <h2 className="text-lg font-bold" style={{ color: "#0c1a33", fontFamily: "'Noto Serif JP', serif" }}>
                    {cluster.title}
                  </h2>
                  <Link
                    href={`/search?q=${encodeURIComponent(cluster.searchKeyword)}`}
                    className="text-xs font-semibold whitespace-nowrap"
                    style={{ color: "#c9922a" }}
                  >
                    まとめて探す →
                  </Link>
                </div>
                <p className="text-sm leading-relaxed mb-4" style={{ color: "#6b7280" }}>
                  {cluster.description}
                </p>
                <div className="space-y-3">
                  {cluster.articles.map((article) => (
                    <Link
                      key={article.slug}
                      href={article.href}
                      className="block rounded-xl bg-white p-4 hover:shadow-sm transition-shadow"
                      style={{ border: "1px solid #e5e1d8" }}
                    >
                      <p className="text-xs font-bold mb-2" style={{ color: categoryColors[article.category] ?? "#c9922a" }}>
                        {article.category}
                      </p>
                      <p className="text-sm font-semibold leading-snug" style={{ color: "#0c1a33" }}>
                        {article.title}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Filter + Articles */}
      <div className="py-14 px-4 bg-white">
        <div className="max-w-5xl mx-auto">

          {/* Category tabs */}
          <div className="flex flex-wrap gap-2 mb-10">
            {columnCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className="px-4 py-2 rounded-full text-sm font-semibold transition-colors"
                style={{
                  backgroundColor: activeCategory === cat ? "#0c1a33" : "#f7f5f0",
                  color: activeCategory === cat ? "#fff" : "#6b7280",
                  border: `1px solid ${activeCategory === cat ? "#0c1a33" : "#e5e1d8"}`,
                }}
              >
                {cat}
                {cat !== "すべて" && (
                  <span className="ml-1.5 text-xs opacity-60">
                    {allArticles.filter((a) => a.category === cat).length}
                  </span>
                )}
              </button>
            ))}
          </div>

          {/* Article count */}
          <p className="text-xs mb-6" style={{ color: "#9ca3af" }}>
            {filtered.length}件の記事
          </p>

          {/* Grid */}
          <div className="grid md:grid-cols-2 gap-5">
            {filtered.map((article, i) => (
              <Link
                key={`${article.category}-${article.slug}`}
                href={article.href}
                className="flex gap-5 p-6 rounded-2xl bg-white hover:shadow-md transition-shadow group"
                style={{ border: "1px solid #e5e1d8" }}
              >
                {/* Index number */}
                <div
                  className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm"
                  style={{ backgroundColor: "#f7f5f0", color: "#0c1a33" }}
                >
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-2 mb-2">
                    <span
                      className="text-xs font-bold px-2.5 py-0.5 rounded-full"
                      style={{
                        backgroundColor: categoryColors[article.category] ? `${categoryColors[article.category]}18` : "rgba(201,146,42,0.1)",
                        color: categoryColors[article.category] ?? "#c9922a",
                      }}
                    >
                      {article.category}
                    </span>
                    {article.popular && (
                      <span className="text-xs font-bold px-2 py-0.5 rounded-full" style={{ backgroundColor: "rgba(201,146,42,0.12)", color: "#c9922a" }}>
                        人気
                      </span>
                    )}
                  </div>
                  <h2 className="font-bold text-sm leading-snug mb-2 group-hover:underline" style={{ color: "#0c1a33" }}>
                    {article.title}
                  </h2>
                  <p className="text-xs leading-relaxed line-clamp-2" style={{ color: "#6b7280" }}>
                    {article.description}
                  </p>
                  <p className="text-xs font-semibold mt-3" style={{ color: "#c9922a" }}>
                    記事を読む →
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* note導線 */}
      <div className="py-10 px-4 bg-white" style={{ borderTop: "1px solid #e5e1d8" }}>
        <div className="max-w-3xl mx-auto">
          <a
            href="https://note.com/igakubu_juken"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between gap-4 p-5 rounded-2xl hover:shadow-md transition-shadow group"
            style={{ backgroundColor: "#f7f5f0", border: "1px solid #e5e1d8" }}
          >
            <div className="flex items-center gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold text-sm" style={{ backgroundColor: "#41c9b4" }}>
                n
              </div>
              <div>
                <p className="text-xs font-semibold mb-0.5" style={{ color: "#6b7280" }}>note でも発信中</p>
                <p className="text-sm font-bold" style={{ color: "#0c1a33" }}>医学部受験の情報をnoteでも読む</p>
              </div>
            </div>
            <span className="text-sm font-semibold flex-shrink-0 group-hover:underline" style={{ color: "#41c9b4" }}>読む →</span>
          </a>
        </div>
      </div>

      {/* CTA */}
      <div className="py-16 px-4" style={{ backgroundColor: "#f7f5f0" }}>
        <div className="max-w-3xl mx-auto rounded-2xl p-8 text-center" style={{ backgroundColor: "#0c1a33" }}>
          <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#c9922a" }}>
            Free Consultation
          </p>
          <h2 className="text-xl font-bold text-white mb-3" style={{ fontFamily: "'Noto Serif JP', serif" }}>
            疑問点は無料相談でお気軽にどうぞ
          </h2>
          <p className="text-sm mb-6" style={{ color: "rgba(255,255,255,0.65)" }}>
            コラムの内容や受験戦略について、個別にご相談いただけます。
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 text-white font-bold text-base rounded-lg shadow-md hover:opacity-90 transition-opacity"
            style={{ backgroundColor: "#c9922a" }}
          >
            無料相談・お問い合わせ
          </Link>
        </div>
      </div>
    </div>
  );
}
