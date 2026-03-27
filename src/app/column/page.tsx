"use client";

import Link from "next/link";
import { useState } from "react";

const articles = [
  {
    slug: "study-method",
    category: "勉強法",
    title: "医学部合格のための正しい勉強法",
    description: "科目別の具体的な学習アプローチとよくある失敗パターンを解説。量より質を重視した学習設計で成績を伸ばす方法。",
    popular: true,
  },
  {
    slug: "roadmap",
    category: "受験戦略",
    title: "医学部受験ロードマップ",
    description: "現役合格から再受験まで、時期別にやるべきことを整理。いつ・何を・どの順番で進めるかを明確にするためのガイド。",
    popular: true,
  },
  {
    slug: "difference",
    category: "受験戦略",
    title: "医学部に受かる人・落ちる人の違い",
    description: "合格者と不合格者を分けるのは才能ではなく戦略の差。現場で見えた「差がつくポイント」を具体的に解説。",
    popular: true,
  },
  {
    slug: "juken-timing",
    category: "受験戦略",
    title: "医学部受験はいつから始めるべきか",
    description: "高1・高2・高3・浪人・再受験それぞれの最適なスタート時期と準備内容を解説。「何年生から始めれば間に合う？」という疑問に完全回答。",
    popular: false,
  },
  {
    slug: "hensachi",
    category: "受験情報",
    title: "医学部合格に必要な偏差値は？現実的な目標設定",
    description: "国公立・私立医学部の偏差値目安を大学別に整理。偏差値だけで判断しない受験戦略と現実的な目標設定の考え方を解説。",
    popular: false,
  },
  {
    slug: "shigaku-vs-kokuritsu",
    category: "大学選び",
    title: "私立医学部と国公立医学部、どちらを目指すべきか",
    description: "学費・難易度・環境の違いを徹底比較。自分のタイプ別に「どちらを選ぶべきか」のアドバイスをまとめました。",
    popular: false,
  },
  {
    slug: "gakuhi",
    category: "大学選び",
    title: "医学部の学費・費用を徹底比較",
    description: "国公立と私立の学費差から奨学金・特待生制度まで網羅。6年間でいくらかかるかを大学別に整理しています。",
    popular: false,
  },
  {
    slug: "private-top5",
    category: "大学選び",
    title: "慶應・慈恵・順天堂など私立医学部トップ5の特徴と対策",
    description: "慶應義塾・東京慈恵会・順天堂・日本医科・昭和大学の入試傾向・特色・合格戦略を現役慶應医学部生が徹底解説。",
    popular: false,
  },
  {
    slug: "keio-guide",
    category: "大学選び",
    title: "慶應義塾大学医学部の入試完全ガイド",
    description: "慶應医学部の科目別入試傾向・倍率・面接の実態・合格戦略を現役在籍生が解説。慶應受験を目指す方必見の完全ガイド。",
    popular: false,
  },
  {
    slug: "mensetu",
    category: "入試対策",
    title: "医学部面接対策の完全ガイド",
    description: "よく聞かれる質問と回答例、MMI対策、面接で落とされるパターンまで。配点の高い面接で差をつける準備法。",
    popular: true,
  },
  {
    slug: "shobun",
    category: "入試対策",
    title: "医学部小論文の書き方・完全対策ガイド",
    description: "頻出テーマ（生命倫理・医療制度・AI医療）と合格答案の書き方を解説。構成の型・NGパターン・対策スケジュールまで網羅。",
    popular: false,
  },
  {
    slug: "saijuken",
    category: "再受験",
    title: "社会人・大学生からの医学部再受験ガイド",
    description: "医学部再受験のリアルな現状・合格者の共通点・勉強計画の設計まで。社会人経験を面接の強みに変える方法も解説。",
    popular: false,
  },
  {
    slug: "juku-erabi",
    category: "塾・指導",
    title: "医学部受験の塾・予備校の選び方",
    description: "大手予備校・個別指導・医学部専門塾・家庭教師の特徴を徹底比較。失敗しない塾選びの5つの判断基準と失敗パターンを解説。",
    popular: false,
  },
  {
    slug: "kateikyoushi",
    category: "塾・指導",
    title: "医学部受験に家庭教師は効果的か？選び方と活用法",
    description: "医学部受験における家庭教師の5つのメリット・選び方のポイント・費用相場を解説。現役医学部生による1対1指導の特徴も紹介。",
    popular: false,
  },
];

const categories = ["すべて", "受験戦略", "勉強法", "大学選び", "入試対策", "再受験", "塾・指導", "受験情報"];

const categoryColors: Record<string, string> = {
  受験戦略: "#3b6cb7",
  勉強法: "#2a9d5c",
  大学選び: "#7c5cbf",
  入試対策: "#c9922a",
  再受験: "#d05050",
  "塾・指導": "#4a9ab5",
  受験情報: "#6b7280",
};

export default function ColumnIndexPage() {
  const [activeCategory, setActiveCategory] = useState("すべて");

  const filtered = activeCategory === "すべて"
    ? articles
    : articles.filter((a) => a.category === activeCategory);

  const popular = articles.filter((a) => a.popular);

  return (
    <div className="min-h-screen bg-white">

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
            全{articles.length}記事
          </div>
        </div>
      </div>

      {/* Popular picks */}
      <div className="py-12 px-4" style={{ backgroundColor: "#f7f5f0", borderBottom: "1px solid #e5e1d8" }}>
        <div className="max-w-5xl mx-auto">
          <p className="text-xs font-bold tracking-widest uppercase mb-5" style={{ color: "#c9922a" }}>よく読まれている記事</p>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-3">
            {popular.map((a) => (
              <Link
                key={a.slug}
                href={`/column/${a.slug}`}
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

      {/* Filter + Articles */}
      <div className="py-14 px-4 bg-white">
        <div className="max-w-5xl mx-auto">

          {/* Category tabs */}
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map((cat) => (
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
                    {articles.filter((a) => a.category === cat).length}
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
                key={article.slug}
                href={`/column/${article.slug}`}
                className="flex gap-5 p-6 rounded-2xl bg-white hover:shadow-md transition-shadow group"
                style={{ border: "1px solid #e5e1d8" }}
              >
                {/* Index number */}
                <div
                  className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm"
                  style={{ backgroundColor: "#f7f5f0", color: "#0c1a33" }}
                >
                  {String(articles.indexOf(article) + 1).padStart(2, "0")}
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
