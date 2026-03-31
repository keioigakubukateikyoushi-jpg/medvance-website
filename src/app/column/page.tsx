"use client";

import Link from "next/link";
import { useState } from "react";

// 大学別対策ページ（/universities/配下）
const universityArticles: { slug: string; href: string; category: string; title: string; description: string; popular: boolean }[] = [
  { slug: "keio", href: "/universities/keio", category: "大学別対策", title: "慶應義塾大学医学部 入試対策ガイド", description: "思考力・論証力重視の英数理。小論文・面接の比重が高く、医師としての人間性が問われる最難関私立医学部の完全攻略ガイド。", popular: true },
  { slug: "jikei", href: "/universities/jikei", category: "大学別対策", title: "東京慈恵会医科大学 入試対策ガイド", description: "英語が私立医学部最難関レベル。医学系長文読解と英作文の対策が合否を分ける。「慈恵の医師像」を深く理解した面接準備が必須。", popular: true },
  { slug: "juntendo", href: "/universities/juntendo", category: "大学別対策", title: "順天堂大学医学部 入試対策ガイド", description: "バランス型の出題で基礎力の完成度が問われる。MMI面接方式を採用しており、全科目を均等に仕上げる戦略が有効。", popular: true },
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
    slug: "mensetu-timing",
    category: "受験戦略",
    title: "医学部面接対策はいつから始めるべきか",
    description: "高1・高2・高3・浪人別に、面接対策の始め方と仕上げ方を整理。自己分析、大学研究、模擬面接の進め方まで解説。",
    popular: false,
  },
  {
    slug: "kakomon-timing",
    category: "受験戦略",
    title: "医学部受験の過去問はいつから始めるべきか",
    description: "高1・高2・高3・浪人それぞれの着手時期、何年分やるか、復習の回し方まで整理。過去問を点数確認で終わらせないための実践ガイド。",
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
    slug: "support-juku-choice",
    category: "塾・指導",
    title: "医学部受験の塾はサポート体制で選ぶべき理由",
    description: "医学部専門予備校の高額な学費、大手予備校の一律カリキュラム、オーダーメイド指導の強みを比較。伴走型サポートの重要性を解説します。",
    popular: false,
  },
  {
    slug: "medical-yobiko-cost",
    category: "塾・指導",
    title: "医学部専門予備校は高いだけ？費用とサポートを見極めるポイント",
    description: "高額な医学部専門予備校でも、伴走や質問対応が弱いケースはあります。費用の高さではなく、学習管理と個別サポートの質で塾を見極める視点を整理します。",
    popular: false,
  },
  {
    slug: "ordermade-curriculum",
    category: "塾・指導",
    title: "医学部受験でオーダーメイドカリキュラムが重要な理由",
    description: "全員同じ大手カリキュラムでは伸びにくい受験生もいます。志望校、現在地、苦手、残り期間に応じて学習設計を変える重要性を解説します。",
    popular: true,
  },
  {
    slug: "kateikyoushi",
    category: "塾・指導",
    title: "医学部受験に家庭教師は効果的か？選び方と活用法",
    description: "医学部受験における家庭教師の5つのメリット・選び方のポイント・費用相場を解説。現役医学部生による1対1指導の特徴も紹介。",
    popular: false,
  },
];

const categories = ["すべて", "大学別対策", "受験戦略", "勉強法", "大学選び", "入試対策", "再受験", "塾・指導", "受験情報"];

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
  ...articles.map((a) => ({ ...a, href: `/column/${a.slug}` })),
];

export default function ColumnIndexPage() {
  const [activeCategory, setActiveCategory] = useState("すべて");

  const filtered = activeCategory === "すべて"
    ? allArticles
    : allArticles.filter((a) => a.category === activeCategory);

  const popular = allArticles.filter((a) => a.popular);

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
