import Link from "next/link";
import Image from "next/image";
import HeroAnimated from "@/components/HeroAnimated";
import Marquee from "@/components/Marquee";
import FadeIn from "@/components/FadeIn";
import HoverCard from "@/components/HoverCard";
import {
  homeFeaturedColumnArticles,
  resolvedColumnTopicClusters,
} from "@/lib/columnArticles";
import { buildItemListSchema } from "@/lib/seo";

export const metadata = {
  title: "医学部受験専門塾 Medvance｜慶應医学部生が完全1対1・全国オンライン対応",
  description: "現役慶應医学部生による完全1対1の医学部受験専門塾。慶應医学部に受かるには何が必要か、面接対策はいつから始めるべきかまで解説。オンラインで全国どこからでも受講可能。",
  alternates: {
    canonical: "/",
  },
};

/* ── Icon components ────────────────────────── */
const IconPerson = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
  </svg>
);
const IconAcademic = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
  </svg>
);
const IconBook = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
  </svg>
);
const IconClipboard = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25Z" />
  </svg>
);
const IconLightbulb = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
  </svg>
);
const IconGlobe = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253M3 12a8.959 8.959 0 0 0 .284 2.253" />
  </svg>
);

/* ── Data ─────────────────────────────────── */
const features = [
  { icon: <IconPerson />, title: "完全1対1指導", body: "すべての授業が個別の家庭教師スタイル。生徒の理解度や目標に合わせて学習内容・進度をフルカスタマイズします。" },
  { icon: <IconAcademic />, title: "講師は全員・現役慶應医学部生", body: "東大模試上位者・多浪経験者・地方公立出身者など多様な合格経験者から、あなたに最適な講師をマッチングします。" },
  { icon: <IconBook />, title: "医学部に特化した専門対策", body: "英数理に加え、面接・小論文・願書まで、医学部受験に必要なすべてをトータルサポートします。" },
  { icon: <IconClipboard />, title: "オーダーメイド学習計画", body: "学力・志望校・性格・生活スタイルに合わせた最適なスケジュールを1日単位で設計。最短距離で合格を目指します。" },
  { icon: <IconLightbulb />, title: "合格者が実践した「本質的な勉強法」", body: "難関医学部に合格した講師の成功メソッドを、再現可能な形で直接伝授します。" },
  { icon: <IconGlobe />, title: "自宅でもオンラインでも受講可能", body: "対面指導（関東圏）・オンライン指導の両方に対応。全国どこからでも受講できます。" },
];

const strengths = [
  { num: "01", title: "慶應医学部生のみが指導", body: "指導するのは慶應義塾大学医学部の現役学生のみ。実際に難関を突破した経験者が、再現性ある合格戦略を直接伝授します。他塾では決して得られない、リアルな合格者の視点があります。" },
  { num: "02", title: "完全オーダーメイドの学習戦略", body: "学力・志望校・生活スタイルに合わせた専用プランを設計。実績を持つ講師が、あなたの最短ルートを描きます。" },
  { num: "03", title: "医学部受験に完全特化", body: "英数理の学力向上はもちろん、面接・小論文・願書まで一貫サポート。一般予備校では対応できない医学部特有の試験を、専門家が丁寧に指導します。" },
];

const steps = [
  { title: "無料カウンセリング", body: "フォームからご連絡ください。学力・志望校・悩みをヒアリングします。" },
  { title: "最適な講師をご提案", body: "相性・志望校・科目を考慮し、現役慶應医学部生から最適な講師を選定。" },
  { title: "体験指導（60分〜）", body: "担当予定の講師による体験指導を実施。相性を確認したうえで本契約へ。" },
  { title: "本契約・指導スタート", body: "完全1対1の本格指導がスタート。合格まで継続的にサポートします。" },
];

const faqs = [
  { q: "どんな生徒が対象ですか？", a: "現役生・浪人生・再受験生すべてに対応しています。学力や年齢を問わず、医学部合格を目指す方であればどなたでもお申し込みいただけます。" },
  { q: "どんな学力からでも医学部に合格できますか？", a: "現状の学力より、そこからどう伸ばすかの戦略の方が大切です。重要なのは現在の偏差値ではなく、正しい戦略と努力です。まずは無料相談でご状況をお聞かせください。" },
  { q: "料金はどのくらいかかりますか？", a: "指導頻度・内容・期間によって異なるため、無料相談でヒアリングしたうえでご提案しています。まずはお気軽にご連絡ください。" },
  { q: "オンラインでも受講できますか？", a: "はい、全国どこからでもオンラインで受講できます。対面指導（関東圏）とオンライン指導の両方に対応しています。" },
  { q: "体験指導はありますか？", a: "希望があれば、担当予定の講師による体験指導（1回60分〜）を実施しています。相性や指導の質をご確認いただいてから本契約に進めます。" },
  { q: "講師はどのように選ばれますか？", a: "性格・志望校・得意科目・指導スタイルなどを総合的に考慮し、生徒さんに最も合った慶應医学部生をマッチングします。希望があれば事前の面談も可能です。" },
];

const subjects = [
  { label: "英語", badge: "EN", href: "/subjects/english" },
  { label: "数学", badge: "数", href: "/subjects/math" },
  { label: "物理", badge: "物", href: "/subjects/physics" },
  { label: "化学", badge: "化", href: "/subjects/chemistry" },
  { label: "生物", badge: "生", href: "/subjects/biology" },
];

const searchIntentLinks = [
  { label: "慶應医学部に受かるには", href: "/universities/keio", desc: "科目別対策、面接、合格戦略まで" },
  { label: "医学部面接対策はいつから？", href: "/column/mensetu-timing", desc: "学年別の始め方と模擬面接の流れ" },
  { label: "医学部の過去問はいつから？", href: "/column/kakomon-timing", desc: "着手時期、何年分やるか、復習法" },
  { label: "私立医学部の学費を比較したい", href: "/column/gakuhi", desc: "国公立との差や6年間の費用感を整理" },
  { label: "無料相談で今の優先順位を整理したい", href: "/contact?from=home-search-hub", desc: "志望校・現在地・残り期間から、次にやることを30分で整理" },
  { label: "保護者向けの情報を知りたい", href: "/for/parents", desc: "塾選び、費用、サポートの考え方" },
];

const decisionLinks = [
  {
    tag: "相談",
    title: "無料相談で相性を確かめる",
    desc: "今の課題・残り期間・必要なサポートをその場で具体化できます。",
    href: "/contact?from=home-decision-card",
  },
  {
    tag: "料金",
    title: "料金と始め方を見る",
    desc: "週1〜週3の目安、費用感、無料相談で決まることをまとめています。",
    href: "/pricing",
  },
  {
    tag: "保護者",
    title: "保護者向け情報を見る",
    desc: "親が確認したいサポート体制、進捗報告、面談の進め方を整理しています。",
    href: "/for/parents",
  },
];

const homeArticleSchemas = [
  buildItemListSchema(
    "ホームから読める注目コラム",
    "/",
    homeFeaturedColumnArticles.map((article) => ({
      name: article.title,
      url: article.href,
    })),
  ),
];

/* ── Page ─────────────────────────────────── */
export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeArticleSchemas) }}
      />

      {/* ── 1. HERO ───────────────────────────── */}
      <HeroAnimated />

      {/* ── 1.5 LEAD MAGNET BANNER ────────────── */}
      <section style={{ backgroundColor: "#c9922a" }} className="py-4 px-4">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-white">
          <div className="flex items-center gap-3">
            <span className="text-lg flex-shrink-0">📘</span>
            <p className="text-sm font-bold">
              無料相談の特典：<span className="font-extrabold">医学部受験戦略マニュアルをプレゼント</span>
              <span className="hidden sm:inline text-xs font-normal ml-2 opacity-80">— 現役慶應医学部生 監修・6章構成</span>
            </p>
          </div>
          <Link
            href="/contact"
            className="flex-shrink-0 px-5 py-2 rounded-lg font-bold text-sm hover:opacity-90 transition-opacity"
            style={{ backgroundColor: "#fff", color: "#c9922a" }}
          >
            無料相談に申し込む →
          </Link>
        </div>
      </section>

      {/* ── 2. STATS STRIP ────────────────────── */}
      <section className="bg-white py-10 px-4" style={{ borderBottom: "1px solid #e5e1d8" }}>
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { label: "講師が全員", sub: "慶應医学部在籍" },
            { label: "全指導が", sub: "完全1対1制" },
            { label: "オンラインで", sub: "全国どこでも受講可能" },
            { label: "まず", sub: "無料カウンセリング" },
          ].map((s) => (
            <div key={s.sub}>
              <p className="text-lg md:text-xl font-bold mb-0.5" style={{ color: "#c9922a", fontFamily: "'Noto Serif JP', serif" }}>{s.label}</p>
              <p className="text-sm md:text-base font-semibold" style={{ color: "#0c1a33" }}>{s.sub}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── 2.5 SEARCH INTENT HUB ─────────────── */}
      <section className="bg-white py-14 px-4" style={{ borderBottom: "1px solid #e5e1d8" }}>
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <div className="text-center mb-10">
              <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#c9922a" }}>
                Popular Topics
              </p>
              <h2 className="text-2xl md:text-3xl font-bold mb-3" style={{ color: "#0c1a33" }}>
                よく検索される悩みから探す
              </h2>
              <p className="text-sm" style={{ color: "#6b7280" }}>
                アクセス分析で実際に需要が見えたテーマを、すぐ読める形でまとめました。
              </p>
            </div>
          </FadeIn>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {searchIntentLinks.map((item, i) => (
              <FadeIn key={item.href} delay={(i % 3) * 0.07}>
                <Link
                  href={item.href}
                  className="block rounded-2xl p-5 hover:shadow-md transition-shadow"
                  style={{ backgroundColor: "#f7f5f0", border: "1px solid #e5e1d8" }}
                >
                  <p className="text-sm font-bold mb-2" style={{ color: "#0c1a33" }}>{item.label}</p>
                  <p className="text-xs leading-relaxed" style={{ color: "#6b7280" }}>{item.desc}</p>
                  <p className="text-xs font-semibold mt-4" style={{ color: "#c9922a" }}>詳しく見る →</p>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: "#f7f5f0" }} className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <div className="text-center mb-10">
              <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#c9922a" }}>
                Content Hubs
              </p>
              <h2 className="text-2xl md:text-3xl font-bold mb-3" style={{ color: "#0c1a33" }}>
                悩み別にまとめて読める導線
              </h2>
              <p className="text-sm max-w-2xl mx-auto" style={{ color: "#6b7280" }}>
                1記事だけで終わらず、関連テーマまで一気にたどれるようにしました。検索流入からの回遊を強くするための入口です。
              </p>
            </div>
          </FadeIn>
          <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-6">
            <div className="grid sm:grid-cols-2 gap-4">
              {homeFeaturedColumnArticles.map((article, index) => (
                <FadeIn key={article.slug} delay={(index % 3) * 0.06}>
                  <Link
                    href={article.href}
                    className="block rounded-2xl p-5 bg-white hover:shadow-md transition-shadow"
                    style={{ border: "1px solid #e5e1d8" }}
                  >
                    <p className="text-xs font-bold mb-2" style={{ color: "#c9922a" }}>
                      {article.category}
                    </p>
                    <h3 className="text-sm font-bold leading-snug mb-3" style={{ color: "#0c1a33" }}>
                      {article.title}
                    </h3>
                    <p className="text-xs leading-relaxed" style={{ color: "#6b7280" }}>
                      {article.description}
                    </p>
                    <p className="text-xs font-semibold mt-4" style={{ color: "#c9922a" }}>
                      記事を読む →
                    </p>
                  </Link>
                </FadeIn>
              ))}
            </div>

            <div className="space-y-4">
              {resolvedColumnTopicClusters.map((cluster, index) => (
                <FadeIn key={cluster.title} delay={index * 0.08}>
                  <div
                    className="rounded-2xl p-5 bg-white"
                    style={{ border: "1px solid #e5e1d8" }}
                  >
                    <div className="flex items-center justify-between gap-3 mb-3">
                      <h3 className="text-base font-bold" style={{ color: "#0c1a33", fontFamily: "'Noto Serif JP', serif" }}>
                        {cluster.title}
                      </h3>
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
                          className="block rounded-xl px-4 py-3"
                          style={{ backgroundColor: "#f7f5f0", border: "1px solid #e5e1d8" }}
                        >
                          <p className="text-xs font-bold mb-1" style={{ color: "#c9922a" }}>
                            {article.category}
                          </p>
                          <p className="text-sm font-semibold leading-snug" style={{ color: "#0c1a33" }}>
                            {article.title}
                          </p>
                        </Link>
                      ))}
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── MARQUEE ───────────────────────────── */}
      <Marquee />

      {/* ── 3. THREE STRENGTHS ────────────────── */}
      <section style={{ backgroundColor: "#f7f5f0" }} className="py-24 px-4">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <p className="text-xs font-semibold tracking-widest uppercase text-center mb-3" style={{ color: "#c9922a" }}>
              Why Medvance
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-14" style={{ color: "#0c1a33" }}>
              医学部受験専門塾Medvanceが選ばれる3つの理由
            </h2>
          </FadeIn>
          <div className="grid md:grid-cols-3 gap-6">
            {strengths.map((item, i) => (
              <FadeIn key={item.num} delay={i * 0.1}>
                <HoverCard className="bg-white rounded-2xl p-8 shadow-sm h-full" style={{ border: "1px solid #e5e1d8" }}>
                  <p className="text-6xl font-bold mb-4 leading-none" style={{ color: "#0c1a33", opacity: 0.07, fontFamily: "'Noto Serif JP', serif" }}>{item.num}</p>
                  <h3 className="text-base font-bold mb-3" style={{ color: "#0c1a33" }}>{item.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#6b7280" }}>{item.body}</p>
                </HoverCard>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3.8 DECISION HUB ─────────────────── */} 
      <section style={{ backgroundColor: "#f7f5f0", borderTop: "1px solid #e5e1d8", borderBottom: "1px solid #e5e1d8" }} className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <p className="text-xs font-semibold tracking-widest uppercase text-center mb-3" style={{ color: "#c9922a" }}>
              Decision Support
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-3" style={{ color: "#0c1a33" }}>
              比較検討でよく見られるページ
            </h2>
            <p className="text-center text-sm mb-12 max-w-2xl mx-auto" style={{ color: "#6b7280" }}>
              すぐに申し込まない方でも大丈夫です。まずは「信頼できるか」「料金感は合うか」「親として確認すべきことは何か」を整理できる導線を用意しています。
            </p>
          </FadeIn>
          <div className="grid md:grid-cols-3 gap-5 mb-8">
            {decisionLinks.map((item, i) => (
              <FadeIn key={item.href} delay={i * 0.08}>
                <Link
                  href={item.href}
                  className="block h-full rounded-2xl p-6 bg-white hover:shadow-md transition-shadow"
                  style={{ border: "1px solid #e5e1d8" }}
                >
                  <span
                    className="inline-flex items-center rounded-full px-3 py-1 text-xs font-bold mb-4"
                    style={{ backgroundColor: "rgba(201,146,42,0.12)", color: "#c9922a" }}
                  >
                    {item.tag}
                  </span>
                  <p className="font-bold text-base mb-3" style={{ color: "#0c1a33" }}>
                    {item.title}
                  </p>
                  <p className="text-sm leading-relaxed" style={{ color: "#6b7280" }}>
                    {item.desc}
                  </p>
                  <p className="text-xs font-semibold mt-5" style={{ color: "#c9922a" }}>
                    詳しく見る →
                  </p>
                </Link>
              </FadeIn>
            ))}
          </div>
          <FadeIn delay={0.12}>
            <div className="text-center">
              <Link
                href="/contact?from=home-decision-hub"
                className="inline-flex items-center gap-2 px-7 py-3 rounded-lg font-bold text-sm hover:opacity-90 transition-opacity"
                style={{ backgroundColor: "#0c1a33", color: "#fff" }}
              >
                迷っている段階でも無料相談してみる
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── 4. COMPARISON TABLE ───────────────── */}
      <section className="bg-white py-24 px-4">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <p className="text-xs font-semibold tracking-widest uppercase text-center mb-3" style={{ color: "#c9922a" }}>
              Comparison
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-4" style={{ color: "#0c1a33" }}>
              他塾との違い
            </h2>
            <p className="text-center text-sm mb-12" style={{ color: "#6b7280" }}>
              Medvanceが選ばれる理由を、他塾と比較してご確認ください
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse" style={{ minWidth: "600px" }}>
                <thead>
                  <tr>
                    <th
                      className="text-left py-4 px-5 text-sm font-semibold"
                      style={{ color: "#6b7280", borderBottom: "2px solid #e5e1d8", width: "28%" }}
                    >
                      比較項目
                    </th>
                    <th
                      className="py-4 px-5 text-center text-sm font-bold rounded-t-xl"
                      style={{
                        color: "#0c1a33",
                        backgroundColor: "rgba(201,146,42,0.08)",
                        border: "2px solid #c9922a",
                        borderBottom: "none",
                        width: "24%",
                      }}
                    >
                      <span className="block text-base" style={{ color: "#c9922a" }}>Medvance</span>
                      <span className="text-xs font-normal" style={{ color: "#6b7280" }}>医学部受験専門塾</span>
                    </th>
                    <th
                      className="py-4 px-5 text-center text-sm font-bold"
                      style={{ color: "#0c1a33", borderBottom: "2px solid #e5e1d8", width: "24%" }}
                    >
                      大手予備校
                    </th>
                    <th
                      className="py-4 px-5 text-center text-sm font-bold"
                      style={{ color: "#0c1a33", borderBottom: "2px solid #e5e1d8", width: "24%" }}
                    >
                      一般家庭教師
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      item: "講師の質",
                      medvance: "慶應医学部生のみ",
                      yobikou: "様々",
                      kateikyoshi: "学生バイト多数",
                      highlight: true,
                    },
                    {
                      item: "指導スタイル",
                      medvance: "完全1対1",
                      yobikou: "集団授業が中心",
                      kateikyoshi: "1対1だが医学部特化なし",
                      highlight: false,
                    },
                    {
                      item: "医学部特化",
                      medvance: "完全特化",
                      yobikou: "一部コースのみ",
                      kateikyoshi: "非特化",
                      highlight: true,
                    },
                    {
                      item: "面接・小論文対策",
                      medvance: "対応",
                      yobikou: "一部対応",
                      kateikyoshi: "非対応",
                      highlight: false,
                    },
                    {
                      item: "受講エリア",
                      medvance: "全国オンライン対応",
                      yobikou: "通塾が必要",
                      kateikyoshi: "エリア限定が多い",
                      highlight: true,
                    },
                    {
                      item: "料金相談",
                      medvance: "無料カウンセリング",
                      yobikou: "固定コース",
                      kateikyoshi: "様々",
                      highlight: false,
                    },
                  ].map((row, i) => (
                    <tr key={i} style={{ borderBottom: "1px solid #e5e1d8" }}>
                      <td
                        className="py-4 px-5 text-sm font-semibold"
                        style={{ color: "#0c1a33" }}
                      >
                        {row.item}
                      </td>
                      <td
                        className="py-4 px-5 text-center text-sm font-bold"
                        style={{
                          color: "#0c1a33",
                          backgroundColor: row.highlight ? "rgba(201,146,42,0.06)" : "rgba(201,146,42,0.03)",
                          borderLeft: "2px solid #c9922a",
                          borderRight: "2px solid #c9922a",
                        }}
                      >
                        <span className="inline-flex items-center gap-1.5">
                          <span
                            className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                            style={{ backgroundColor: "#c9922a" }}
                          />
                          {row.medvance}
                        </span>
                      </td>
                      <td
                        className="py-4 px-5 text-center text-sm"
                        style={{ color: "#6b7280" }}
                      >
                        {row.yobikou}
                      </td>
                      <td
                        className="py-4 px-5 text-center text-sm"
                        style={{ color: "#6b7280" }}
                      >
                        {row.kateikyoshi}
                      </td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr>
                    <td />
                    <td
                      className="rounded-b-xl"
                      style={{
                        backgroundColor: "rgba(201,146,42,0.05)",
                        border: "2px solid #c9922a",
                        borderTop: "none",
                        height: "12px",
                      }}
                    />
                    <td />
                    <td />
                  </tr>
                </tfoot>
              </table>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── 5. TUTOR STRENGTHS ────────────────── */}
      <section style={{ backgroundColor: "#f7f5f0" }} className="py-24 px-4">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <p className="text-xs font-semibold tracking-widest uppercase text-center mb-3" style={{ color: "#c9922a" }}>
              Tutors
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-4" style={{ color: "#0c1a33" }}>
              講師陣の強み
            </h2>
            <p className="text-center text-sm mb-14 max-w-xl mx-auto" style={{ color: "#6b7280" }}>
              各生徒に最適な講師をマッチング。多様な合格背景を持つ現役慶應医学部生があなたの合格を支えます。
            </p>
          </FadeIn>
          {/* Credential Badge */}
          <FadeIn delay={0.1}>
            <div className="flex justify-center mb-12">
              <div
                className="inline-flex items-center gap-3 px-6 py-3 rounded-full font-bold text-sm"
                style={{
                  backgroundColor: "#0c1a33",
                  color: "#c9922a",
                  border: "1px solid #c9922a",
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 flex-shrink-0">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.745 3.745 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.745 3.745 0 0 1 3.296-1.043A3.745 3.745 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.745 3.745 0 0 1 3.296 1.043 3.745 3.745 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                </svg>
                全講師：慶應義塾大学医学部 現役在籍
              </div>
            </div>
          </FadeIn>
          {/* Tutor profile cards */}
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-5">
            {[
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                  </svg>
                ),
                title: "東大模試 上位経験者",
                desc: "最難関レベルの受験戦略を熟知。論理的な指導が強み。",
              },
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                ),
                title: "一浪での慶應合格",
                desc: "浪人生の気持ちを理解。無駄なく逆転合格したノウハウを伝授。",
              },
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                  </svg>
                ),
                title: "地方公立出身",
                desc: "独学・情報戦を乗り越えた経験を活かし、地方からの挑戦を応援。",
              },
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                  </svg>
                ),
                title: "最適マッチング",
                desc: "生徒の性格・志望校・科目に合わせて最も相性の良い講師を選定。",
              },
            ].map((t, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <HoverCard
                  className="bg-white rounded-2xl p-6 shadow-sm text-center h-full"
                  style={{ border: "1px solid #e5e1d8" }}
                >
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4 text-white"
                    style={{ backgroundColor: "#0c1a33" }}
                  >
                    {t.icon}
                  </div>
                  <p className="font-bold text-sm mb-2" style={{ color: "#0c1a33" }}>{t.title}</p>
                  <p className="text-xs leading-relaxed" style={{ color: "#6b7280" }}>{t.desc}</p>
                </HoverCard>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. ABOUT IMAGE ────────────────────── */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <Image
              src="/images/about.png"
              alt="Medvanceについて"
              width={1200}
              height={675}
              className="w-full h-auto rounded-2xl shadow-sm"
            />
          </FadeIn>
        </div>
      </section>

      {/* ── 7. 6 FEATURES ─────────────────────── */}
      <section style={{ backgroundColor: "#0c1a33" }} className="py-24 px-4">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <p className="text-xs font-semibold tracking-widest uppercase text-center mb-3" style={{ color: "#c9922a" }}>
              Features
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-center text-white mb-14" style={{ fontFamily: "'Noto Serif JP', serif" }}>
              Medvanceの6つの特徴
            </h2>
          </FadeIn>
          <div className="grid md:grid-cols-2 gap-4">
            {features.map((item, i) => (
              <FadeIn key={i} delay={(i % 2) * 0.1}>
                <HoverCard
                  className="flex gap-4 p-6 rounded-xl h-full"
                  style={{ backgroundColor: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}
                >
                  <div
                    className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-white"
                    style={{ backgroundColor: "#c9922a" }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <p className="font-bold text-white text-sm mb-1">{item.title}</p>
                    <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.62)" }}>{item.body}</p>
                  </div>
                </HoverCard>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7.5 ONLINE SECTION ────────────────── */}
      <section className="bg-white py-24 px-4" style={{ borderTop: "1px solid #e5e1d8" }}>
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <p className="text-xs font-semibold tracking-widest uppercase text-center mb-3" style={{ color: "#c9922a" }}>
              Nationwide Online
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-4" style={{ color: "#0c1a33" }}>
              全国どこからでも受講できます
            </h2>
            <p className="text-center text-sm mb-14 max-w-xl mx-auto" style={{ color: "#6b7280" }}>
              北海道から沖縄まで、海外在住の方も対応。ZoomやGoogle Meetを使った完全オンライン指導で、場所の制約は一切ありません。
            </p>
          </FadeIn>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <FadeIn>
              <div className="space-y-5">
                {[
                  { icon: "🗾", title: "日本全国どこでも受講可能", body: "東京・大阪・名古屋はもちろん、地方の方も歓迎。地方公立出身の講師も在籍しているため、地方からの受験事情も深く理解しています。" },
                  { icon: "🌏", title: "海外在住でも受講可能", body: "海外からの帰国後に医学部を目指す方、海外在住のまま準備を進めたい方にも対応。時差に配慮したスケジュール調整も可能です。" },
                  { icon: "💻", title: "画面共有でリアルタイム指導", body: "Zoom・Google Meetで問題を共有しながら指導。ノートや参考書もカメラで見せながら進められるため、対面と変わらない質の指導を提供します。" },
                  { icon: "📱", title: "スマホ・タブレットでも受講OK", body: "PCがなくても受講可能。外出先やスキマ時間にも柔軟に対応できます。" },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 p-5 rounded-xl" style={{ backgroundColor: "#f7f5f0", border: "1px solid #e5e1d8" }}>
                    <span className="text-2xl flex-shrink-0">{item.icon}</span>
                    <div>
                      <p className="font-bold text-sm mb-1" style={{ color: "#0c1a33" }}>{item.title}</p>
                      <p className="text-xs leading-relaxed" style={{ color: "#6b7280" }}>{item.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>
            <FadeIn delay={0.15}>
              <div className="rounded-2xl p-8 text-white" style={{ backgroundColor: "#0c1a33" }}>
                <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: "#c9922a" }}>受講者の地域</p>
                <div className="space-y-3 mb-8">
                  {[
                    "東京・神奈川・埼玉・千葉（関東）",
                    "大阪・兵庫・京都（関西）",
                    "愛知・静岡（東海）",
                    "北海道・東北・北陸",
                    "中国・四国・九州・沖縄",
                    "海外在住の日本人受験生",
                  ].map((region, i) => (
                    <div key={i} className="flex items-center gap-3 text-sm" style={{ color: "rgba(255,255,255,0.75)" }}>
                      <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: "#c9922a" }} />
                      {region}
                    </div>
                  ))}
                </div>
                <Link
                  href="/contact"
                  className="block text-center py-3 rounded-lg font-bold text-sm hover:opacity-90 transition-opacity"
                  style={{ backgroundColor: "#c9922a", color: "#fff" }}
                >
                  オンラインで無料相談する
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── 8. FLOW ───────────────────────────── */}
      <section className="bg-white py-24 px-4">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <p className="text-xs font-semibold tracking-widest uppercase text-center mb-3" style={{ color: "#c9922a" }}>
              Flow
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-3" style={{ color: "#0c1a33" }}>
              お申し込みから指導開始まで
            </h2>
            <p className="text-center text-sm mb-12" style={{ color: "#6b7280" }}>
              無料相談から最短1週間で指導をスタートできます
            </p>
          </FadeIn>
          <div className="grid md:grid-cols-4 gap-6">
            {steps.map((item, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="relative text-center">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4"
                    style={{ backgroundColor: "#0c1a33" }}
                  >
                    {i + 1}
                  </div>
                  {i < steps.length - 1 && (
                    <div
                      className="hidden md:block absolute top-6 left-[calc(50%+24px)] right-0 h-px"
                      style={{ backgroundColor: "#e5e1d8" }}
                    />
                  )}
                  <p className="font-bold text-sm mb-2" style={{ color: "#0c1a33" }}>{item.title}</p>
                  <p className="text-xs leading-relaxed" style={{ color: "#6b7280" }}>{item.body}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── 9. TARGET AUDIENCE ────────────────── */}
      <section style={{ backgroundColor: "#0c1a33" }} className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs font-semibold tracking-widest uppercase text-center mb-3" style={{ color: "#c9922a" }}>
            こんな方へ
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-center text-white mb-12" style={{ fontFamily: "'Noto Serif JP', serif" }}>
            Medvanceはこんな方を応援します
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { label: "浪人生の方", desc: "現役時代の失敗を分析し、正しい戦略で1年以内の合格を目指します", href: "/for/ronin" },
              { label: "再受験生の方", desc: "社会人・大学生からの挑戦も歓迎。柔軟なスケジュールで全力サポート", href: "/for/saijuken" },
              { label: "保護者の方", desc: "毎月の進捗報告・保護者面談で、お子さまの状況を透明にご報告", href: "/for/parents" },
              { label: "慶應医学部を目指す方", desc: "現役慶應医学部生だからこそ語れる、リアルな入試対策", href: "/universities/keio" },
              { label: "私立医学部を目指す方", desc: "慈恵・順天堂・日本医科など、大学別の傾向に合わせた専門対策", href: "/universities/private" },
              { label: "国公立医学部を目指す方", desc: "共通テストから二次試験まで、全科目の完成を目指します", href: "/universities/national" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block p-6 rounded-xl hover:bg-white hover:bg-opacity-10 transition-colors group"
                style={{ backgroundColor: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}
              >
                <p className="font-bold text-white mb-2 group-hover:opacity-100 flex items-center gap-2">
                  {item.label}
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3.5 h-3.5 opacity-50">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                  </svg>
                </p>
                <p className="text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>{item.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── 10. FAQ ────────────────────────────── */}
      <section className="bg-white py-24 px-4">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-semibold tracking-widest uppercase text-center mb-3" style={{ color: "#c9922a" }}>
            FAQ
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-14" style={{ color: "#0c1a33" }}>
            よくあるご質問
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details
                key={i}
                className="rounded-xl overflow-hidden group"
                style={{ border: "1px solid #e5e1d8" }}
              >
                <summary
                  className="flex items-center justify-between px-6 py-5 cursor-pointer font-semibold text-sm select-none list-none"
                  style={{ color: "#0c1a33" }}
                >
                  <span>Q. {faq.q}</span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 flex-shrink-0 ml-4" style={{ color: "#c9922a" }}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="m19 9-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-5 pt-1 text-sm leading-relaxed" style={{ color: "#4a5568", backgroundColor: "#faf9f6" }}>
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── 10.2 PRICING SUMMARY ──────────────── */}
      <section className="bg-white py-16 px-4" style={{ borderTop: "1px solid #e5e1d8" }}>
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn>
            <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#c9922a" }}>Pricing</p>
            <h2 className="text-2xl md:text-3xl font-bold mb-3" style={{ color: "#0c1a33" }}>料金の目安</h2>
            <p className="text-sm mb-8 max-w-xl mx-auto" style={{ color: "#6b7280" }}>
              授業（1コマ80分 15,000円）＋コーチング月20,000円のシンプルな構成です。入塾金は20,000円（初回のみ）。
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="grid grid-cols-3 gap-3 mb-6">
              {[
                { label: "週1回", price: "8万円", note: "月4回＋コーチング", highlight: false },
                { label: "週2回", price: "14万円", note: "月8回＋コーチング", highlight: true },
                { label: "週3回〜", price: "20万円〜", note: "月12回以上（割引あり）", highlight: false },
              ].map((plan, i) => (
                <div
                  key={i}
                  className="p-4 md:p-5 rounded-xl text-center"
                  style={{
                    border: `${plan.highlight ? "2px" : "1px"} solid ${plan.highlight ? "#c9922a" : "#e5e1d8"}`,
                    backgroundColor: plan.highlight ? "rgba(201,146,42,0.05)" : "#faf9f6",
                  }}
                >
                  <p className="text-xs font-semibold mb-1" style={{ color: "#c9922a" }}>{plan.label}</p>
                  <p className="text-xl md:text-2xl font-bold mb-1" style={{ color: "#0c1a33" }}>
                    {plan.price}<span className="text-xs font-normal">/月</span>
                  </p>
                  <p className="text-xs leading-snug" style={{ color: "#6b7280" }}>{plan.note}</p>
                </div>
              ))}
            </div>
            <Link href="/pricing" className="inline-flex items-center gap-1.5 text-sm font-semibold hover:underline" style={{ color: "#c9922a" }}>
              料金の詳細・プラン一覧を見る
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3.5 h-3.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
              </svg>
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* ── 10.5 UNIVERSITY LINKS ──────────────── */}
      <section className="bg-white py-24 px-4" style={{ borderTop: "1px solid #e5e1d8" }}>
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <p className="text-xs font-semibold tracking-widest uppercase text-center mb-3" style={{ color: "#c9922a" }}>
              大学別対策
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-3" style={{ color: "#0c1a33" }}>
              志望校別・入試対策ガイド
            </h2>
            <p className="text-center text-sm mb-12" style={{ color: "#6b7280" }}>
              各大学の出題傾向・合格戦略・科目別対策を現役慶應医学部生が解説
            </p>
          </FadeIn>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mb-6">
            {[
              { name: "慶應義塾大学医学部", badge: "最難関", desc: "思考力・論証力重視。小論文・面接の比重が高い", href: "/universities/keio" },
              { name: "東京慈恵会医科大学", badge: "難関", desc: "英語最難関レベル。慈恵の医師像への理解が重要", href: "/universities/jikei" },
              { name: "順天堂大学医学部", badge: "難関", desc: "バランス型出題。MMI面接方式を採用", href: "/universities/juntendo" },
              { name: "日本医科大学", badge: "難関", desc: "数学・理科の記述難問。面接2回実施", href: "/universities/nippon-medical" },
              { name: "昭和大学医学部", badge: "標準〜難", desc: "基礎の完成度が合否を分ける。正確性重視", href: "/universities/showa" },
              { name: "東京医科大学", badge: "標準〜難", desc: "全科目バランス型。近年は思考力問題が増加", href: "/universities/tokyo-ika" },
            ].map((u, i) => (
              <FadeIn key={i} delay={i * 0.05}>
                <Link
                  href={u.href}
                  className="block p-5 rounded-xl group hover:shadow-md transition-shadow h-full"
                  style={{ border: "1px solid #e5e1d8", backgroundColor: "#faf9f6" }}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-bold px-2 py-0.5 rounded" style={{ backgroundColor: "rgba(201,146,42,0.12)", color: "#c9922a" }}>{u.badge}</span>
                  </div>
                  <p className="font-bold text-sm mb-1.5 group-hover:underline" style={{ color: "#0c1a33" }}>{u.name}</p>
                  <p className="text-xs leading-relaxed" style={{ color: "#6b7280" }}>{u.desc}</p>
                  <p className="text-xs font-semibold mt-3" style={{ color: "#c9922a" }}>対策ガイドを見る →</p>
                </Link>
              </FadeIn>
            ))}
          </div>
          <div className="text-center">
            <Link href="/universities/private" className="text-sm font-semibold hover:underline" style={{ color: "#6b7280" }}>
              その他の私立医学部一覧を見る →
            </Link>
          </div>
        </div>
      </section>

      {/* ── 11. COLUMN PREVIEW ─────────────────── */}
      <section style={{ backgroundColor: "#f7f5f0" }} className="py-24 px-4">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <p className="text-xs font-semibold tracking-widest uppercase text-center mb-3" style={{ color: "#c9922a" }}>
              Column
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-3" style={{ color: "#0c1a33" }}>
              医学部受験コラム
            </h2>
            <p className="text-center text-sm mb-12" style={{ color: "#6b7280" }}>
              現役慶應医学部生が書く、医学部受験のリアルな情報
            </p>
          </FadeIn>
          <div className="grid md:grid-cols-3 gap-5 mb-10">
            {[
              { tag: "勉強法", title: "医学部合格のための正しい勉強法", href: "/column/study-method" },
              { tag: "計画", title: "医学部受験ロードマップ", href: "/column/roadmap" },
              { tag: "合格分析", title: "医学部に受かる人・落ちる人の違い", href: "/column/difference" },
              { tag: "私立vs国公立", title: "私立医学部 vs 国公立医学部", href: "/column/shigaku-vs-kokuritsu" },
              { tag: "面接", title: "医学部面接対策の完全ガイド", href: "/column/mensetu" },
              { tag: "面接時期", title: "医学部面接対策はいつから始めるべきか", href: "/column/mensetu-timing" },
              { tag: "学費", title: "私立・国公立の学費を徹底比較", href: "/column/gakuhi" },
              { tag: "タイミング", title: "医学部受験はいつから始めるべきか", href: "/column/juken-timing" },
              { tag: "過去問", title: "医学部受験の過去問はいつから始めるべきか", href: "/column/kakomon-timing" },
              { tag: "偏差値", title: "偏差値と医学部合格の関係", href: "/column/hensachi" },
              { tag: "再受験", title: "再受験で医学部に合格する方法", href: "/column/saijuken" },
              { tag: "塾選び", title: "医学部専門予備校は高いだけ？費用とサポートを見極めるポイント", href: "/column/medical-yobiko-cost" },
              { tag: "個別設計", title: "医学部受験でオーダーメイドカリキュラムが重要な理由", href: "/column/ordermade-curriculum" },
              { tag: "伴走", title: "医学部受験の塾はサポート体制で選ぶべき理由", href: "/column/support-juku-choice" },
            ].map((col, i) => (
              <FadeIn key={i} delay={(i % 3) * 0.07}>
                <Link
                  href={col.href}
                  className="flex items-start gap-3 p-4 rounded-xl group hover:shadow-sm transition-shadow bg-white"
                  style={{ border: "1px solid #e5e1d8" }}
                >
                  <span
                    className="flex-shrink-0 text-xs font-semibold px-2 py-1 rounded-full mt-0.5"
                    style={{ backgroundColor: "rgba(201,146,42,0.1)", color: "#c9922a" }}
                  >
                    {col.tag}
                  </span>
                  <p className="font-semibold text-sm leading-snug group-hover:underline" style={{ color: "#0c1a33" }}>
                    {col.title}
                  </p>
                </Link>
              </FadeIn>
            ))}
          </div>
          <FadeIn delay={0.15}>
            <div
              className="mt-8 grid lg:grid-cols-[1.3fr_0.7fr] gap-6 rounded-2xl p-6 md:p-8"
              style={{ background: "linear-gradient(135deg, #0c1a33 0%, #17315f 100%)", border: "1px solid rgba(201,146,42,0.25)" }}
            >
              <div>
                <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#c9922a" }}>
                  Recommended
                </p>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3" style={{ fontFamily: "'Noto Serif JP', serif" }}>
                  塾選びで失敗したくない人向けの人気記事をまとめて読めます
                </h3>
                <p className="text-sm leading-relaxed mb-5" style={{ color: "rgba(255,255,255,0.68)" }}>
                  医学部専門予備校の費用感、大手の一律カリキュラムの落とし穴、伴走型サポートの重要性まで、
                  実際に相談でよく聞かれる論点を先に整理できます。
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    { label: "高いだけ？費用とサポート", href: "/column/medical-yobiko-cost" },
                    { label: "オーダーメイド型が伸びる理由", href: "/column/ordermade-curriculum" },
                    { label: "塾はサポート体制で選ぶ", href: "/column/support-juku-choice" },
                    { label: "面接対策はいつ始める？", href: "/column/mensetu-timing" },
                  ].map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="px-4 py-2 rounded-full text-xs font-semibold hover:opacity-90 transition-opacity"
                      style={{ backgroundColor: "rgba(255,255,255,0.1)", color: "#fff", border: "1px solid rgba(255,255,255,0.14)" }}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
              <div className="rounded-2xl p-5 md:p-6 bg-white" style={{ border: "1px solid #e5e1d8" }}>
                <p className="text-xs font-bold tracking-widest uppercase mb-2" style={{ color: "#c9922a" }}>
                  Site Search
                </p>
                <h4 className="text-lg font-bold mb-2" style={{ color: "#0c1a33" }}>
                  大学名やテーマから探す
                </h4>
                <p className="text-sm leading-relaxed mb-4" style={{ color: "#6b7280" }}>
                  慶應、面接、数学、学費、再受験などのキーワードで、コラムも大学別ページもまとめて検索できます。
                </p>
                <form action="/search" className="flex gap-2">
                  <input
                    type="text"
                    name="q"
                    placeholder="例: 慶應 / 面接 / 学費"
                    className="flex-1 rounded-xl px-4 py-3 text-sm"
                    style={{ border: "1px solid #d6d1c7", color: "#0c1a33", backgroundColor: "#fff" }}
                  />
                  <button
                    type="submit"
                    className="rounded-xl px-5 py-3 text-sm font-bold text-white hover:opacity-90 transition-opacity"
                    style={{ backgroundColor: "#0c1a33" }}
                  >
                    検索
                  </button>
                </form>
              </div>
            </div>
          </FadeIn>
          <div className="text-center">
            <Link
              href="/column"
              className="inline-flex items-center gap-2 px-8 py-4 font-bold text-sm rounded-lg hover:opacity-90 transition-opacity"
              style={{ backgroundColor: "#0c1a33", color: "#fff" }}
            >
              コラム一覧をすべて見る
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ── 12. NOTE ──────────────────────────── */}
      <section style={{ backgroundColor: "#f7f5f0" }} className="py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-semibold tracking-widest uppercase text-center mb-3" style={{ color: "#c9922a" }}>
            Note
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-3" style={{ color: "#0c1a33" }}>
            現役慶應医学部生のnoteも更新中
          </h2>
          <p className="text-center text-sm mb-10 max-w-xl mx-auto" style={{ color: "#6b7280" }}>
            「医学部合格者だけが知る戦略」「医学部に受かる人・落ちる人の違い」など、他では読めないリアルな受験情報を公開中です。
          </p>
          <div className="rounded-2xl overflow-hidden shadow-sm mb-8" style={{ border: "1px solid #e5e1d8" }}>
            <Image
              src="/images/note.png"
              alt="note記事"
              width={1280}
              height={819}
              className="w-full h-auto"
            />
          </div>
          <div className="text-center">
            <a
              href="https://note.com/igakubu_juken"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 text-white font-bold text-base rounded-lg shadow-md hover:opacity-90 transition-opacity"
              style={{ backgroundColor: "#0c1a33" }}
            >
              note記事を読む
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* ── 13. SUBJECTS ──────────────────────── */}
      <section className="bg-white py-24 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-3" style={{ color: "#0c1a33" }}>
            各教科の指導方法
          </h2>
          <p className="text-center text-sm mb-12" style={{ color: "#6b7280" }}>
            「ただ教える」だけでなく、つまずきの根本を見抜いてピンポイントに解消します
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {subjects.map((subject) => (
              <Link
                key={subject.href}
                href={subject.href}
                className="flex items-center gap-3 p-5 rounded-xl bg-white hover:shadow-md transition-shadow font-semibold"
                style={{ color: "#0c1a33", border: "1px solid #e5e1d8" }}
              >
                <span
                  className="w-9 h-9 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0"
                  style={{ backgroundColor: "#0c1a33" }}
                >
                  {subject.badge}
                </span>
                <span>{subject.label}</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 ml-auto opacity-30">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── 13.5 MANUAL CTA ───────────────────── */}
      <section style={{ backgroundColor: "#f7f5f0", borderTop: "1px solid #e5e1d8" }} className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <div className="grid md:grid-cols-[1fr_260px] gap-10 items-center p-8 md:p-12 rounded-2xl bg-white" style={{ border: "2px solid #c9922a" }}>
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold mb-4" style={{ backgroundColor: "rgba(201,146,42,0.1)", color: "#c9922a" }}>
                  📘 無料相談の申し込み特典
                </div>
                <h2 className="text-2xl md:text-3xl font-bold mb-3" style={{ color: "#0c1a33", fontFamily: "'Noto Serif JP', serif" }}>
                  医学部受験戦略マニュアル
                </h2>
                <p className="text-sm leading-relaxed mb-4" style={{ color: "#6b7280" }}>
                  科目別攻略法・年間スケジュール・面接対策・難関校攻略まで。<br />
                  現役慶應医学部生が書いた6章構成の合格戦略ガイド。無料相談に申し込むと同時にお届けします。
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {["Chapter 01 入試の全体像", "Chapter 02 科目別攻略法", "Chapter 03 年間スケジュール", "Chapter 04 面接・小論文", "Chapter 05 合格者の共通点", "Chapter 06 難関校別対策"].map((ch) => (
                    <span key={ch} className="text-xs px-2.5 py-1 rounded-full" style={{ backgroundColor: "#f7f5f0", color: "#6b7280", border: "1px solid #e5e1d8" }}>
                      {ch}
                    </span>
                  ))}
                </div>
                <Link
                  href="/contact"
                  className="inline-block px-8 py-4 text-white font-bold text-base rounded-lg shadow-md hover:opacity-90 transition-opacity"
                  style={{ backgroundColor: "#c9922a" }}
                >
                  無料相談に申し込む（マニュアル付き）→
                </Link>
                <p className="text-xs mt-2" style={{ color: "#9ca3af" }}>完全無料・勧誘なし・全国オンライン対応</p>
              </div>
              {/* Book mockup */}
              <div className="hidden md:block flex-shrink-0">
                <div
                  className="rounded-lg overflow-hidden shadow-2xl"
                  style={{
                    background: "linear-gradient(135deg, #0c1a33 0%, #142b57 100%)",
                    transform: "rotateY(-6deg) rotateX(2deg)",
                    transformStyle: "preserve-3d",
                  }}
                >
                  <div style={{ height: "3px", background: "linear-gradient(90deg, #c9922a, #e8b84b, #c9922a)" }} />
                  <div className="p-5">
                    <p className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: "#c9922a" }}>Medvance</p>
                    <p className="text-white font-bold leading-tight mb-0.5" style={{ fontSize: "1rem", fontFamily: "'Noto Serif JP', serif" }}>医学部受験</p>
                    <p className="font-bold leading-tight mb-4" style={{ fontSize: "1rem", fontFamily: "'Noto Serif JP', serif", color: "#e8b84b" }}>戦略マニュアル</p>
                    <div style={{ height: "1px", backgroundColor: "rgba(201,146,42,0.3)", marginBottom: "12px" }} />
                    <div className="space-y-1.5 mb-4">
                      {["医学部入試の全体像", "科目別・最短攻略法", "合格者の年間スケジュール", "面接・小論文の対策", "合格者と不合格者の違い", "難関校別・攻略ポイント"].map((ch, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <span className="text-xs font-bold flex-shrink-0" style={{ color: "#c9922a" }}>{String(i + 1).padStart(2, "0")}</span>
                          <span className="text-xs" style={{ color: "rgba(255,255,255,0.65)" }}>{ch}</span>
                        </div>
                      ))}
                    </div>
                    <p className="text-xs" style={{ color: "rgba(255,255,255,0.35)", borderTop: "1px solid rgba(201,146,42,0.2)", paddingTop: "10px" }}>現役慶應義塾大学医学部生 監修</p>
                  </div>
                  <div style={{ height: "3px", background: "linear-gradient(90deg, #c9922a, #e8b84b, #c9922a)" }} />
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── 14. FINAL CTA ─────────────────────── */}
      <section style={{ backgroundColor: "#0c1a33" }} className="py-28 px-4">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <p className="text-xs font-semibold tracking-widest uppercase text-center mb-4" style={{ color: "#c9922a" }}>
              Free Consultation
            </p>
            <h2 className="text-2xl md:text-4xl font-bold text-white text-center mb-4 leading-snug" style={{ fontFamily: "'Noto Serif JP', serif" }}>
              まず、話してみてください。
            </h2>
            <p className="text-center mb-12" style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.9375rem" }}>
              売り込みは一切しません。30分で、あなたの現状と合格への道筋が見えます。
            </p>

            {/* What you get */}
            <div className="grid sm:grid-cols-3 gap-4 mb-12">
              {[
                { num: "01", title: "現状分析", body: "今の学力・勉強法・使っている時間を整理し、何が足りていないかを明確にします。" },
                { num: "02", title: "合格プランの提示", body: "志望校・残り時間・学力から、最短で合格するための具体的なステップをお伝えします。" },
                { num: "03", title: "正直な判断", body: "Medvanceが合っているかどうかも含め、あなたに本当に必要なことを率直にお話しします。" },
              ].map((item) => (
                <div key={item.num} className="p-6 rounded-xl" style={{ backgroundColor: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.12)" }}>
                  <p className="text-xs font-bold mb-2" style={{ color: "#c9922a" }}>{item.num}</p>
                  <p className="font-bold text-white text-sm mb-2">{item.title}</p>
                  <p className="text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>{item.body}</p>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Link
                href="/contact"
                className="inline-block px-10 py-5 text-white font-bold text-base rounded-lg shadow-lg hover:opacity-90 transition-opacity"
                style={{ backgroundColor: "#c9922a" }}
              >
                無料相談・お問い合わせ（30分）
              </Link>
              <p className="mt-4 text-xs" style={{ color: "rgba(255,255,255,0.35)" }}>
                完全無料・勧誘なし・オンライン対応
              </p>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
