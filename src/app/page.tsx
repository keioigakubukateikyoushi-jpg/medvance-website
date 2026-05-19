import Link from "next/link";
import Image from "next/image";
import HeroAnimated from "@/components/HeroAnimated";
import Marquee from "@/components/Marquee";
import FadeIn from "@/components/FadeIn";
import HoverCard from "@/components/HoverCard";
import TestimonialsSection from "@/components/TestimonialsSection";
import LineButton from "@/components/LineButton";
import { LINE_URL } from "@/lib/links";
import {
  homeFeaturedColumnArticles,
  resolvedColumnTopicClusters,
} from "@/lib/columnArticles";
import { getColumnThumbnail } from "@/lib/columnThumbnails";
import { buildItemListSchema, buildFaqSchema, buildSpeakableSchema } from "@/lib/seo";

export const metadata = {
  title: "医学部受験専門塾 Medvance｜慶應医学部生が1対1で指導",
  description: "慶應医学部生が担当する医学部受験専門の1対1個別指導。英語・数学・理科の授業、週ごとの課題管理、保護者共有、面接・小論文までオンラインで相談できます。",
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
  { icon: <IconPerson />, title: "授業は1対1", body: "毎回同じ講師が担当。分からない問題を、その場で止めて聞けます。" },
  { icon: <IconAcademic />, title: "慶應医学部生が担当", body: "受験を経験した講師が、科目の進め方から本番前の過ごし方まで話します。" },
  { icon: <IconBook />, title: "医学部受験だけに絞る", body: "英語・数学・理科に加え、小論文・面接・MMI・出願書類まで扱います。" },
  { icon: <IconClipboard />, title: "週ごとに課題を出す", body: "問題集、復習範囲、次の模試までの目標点を、志望校から決めます。" },
  { icon: <IconLightbulb />, title: "合格者のやり方を聞ける", body: "何をいつ解いたか、どこで伸びたか。講師自身の経験もそのまま話します。" },
  { icon: <IconGlobe />, title: "オンライン・対面", body: "全国オンライン対応。関東圏は自宅・カフェ・学習スペースでの対面も相談できます。" },
];

const strengths = [
  { num: "01", title: "講師は慶應医学部の現役生", body: "科目別の時間配分、直前期の過ごし方、本番で焦った時の立て直しまで、受験した本人として話せます。" },
  { num: "02", title: "1週間の課題まで決める", body: "使う問題集、解く範囲、復習日、模試までの目標点を決めます。遅れた時は、次の週に組み直します。" },
  { num: "03", title: "医学部受験に絞って見る", body: "英語・数学・理科だけでなく、小論文・面接・MMI・出願書類まで同じ流れで見ます。" },
];

const steps = [
  { title: "学習相談", body: "フォームから、学年・志望校・模試結果・使用教材をお送りください。" },
  { title: "担当講師の候補を案内", body: "科目、志望校、質問のしやすさを見て、担当候補を出します。" },
  { title: "体験指導（60分〜）", body: "担当予定の講師で体験できます。合うかどうかを見てください。" },
  { title: "本契約・指導開始", body: "授業、宿題、質問、模試の見直しを続けていきます。" },
];

const faqs = [
  { q: "どんな生徒が対象ですか？", a: "現役生・浪人生・再受験生が対象です。中学生、高1・高2からの相談も受けています。" },
  { q: "どんな学力からでも医学部に合格できますか？", a: "現在の偏差値よりも、ここから残り何ヶ月でどれだけ積み上げられるかが大切です。高3春に偏差値50台から1年で私立医学部に合格した事例、浪人1年で国公立医学部に届いた事例もあります。まずは残り期間、科目ごとの点数、志望校を確認します。" },
  { q: "料金はどのくらいかかりますか？", a: "授業回数と科目数で変わります。相談時に、月額の目安まで出します。" },
  { q: "受講場所はどこになりますか？", a: "オンラインが中心です。関東圏では、自宅・カフェ・学習スペースでの対面も相談できます。" },
  { q: "体験指導はありますか？", a: "あります。担当予定の講師で体験し、合うかどうかを見てから決められます。" },
  { q: "講師はどのように選ばれますか？", a: "志望校、科目、性格、質問のしやすさを見て、担当候補を出します。希望があれば事前に面談できます。" },
];

const subjects = [
  { label: "英語", badge: "EN", href: "/subjects/english" },
  { label: "数学", badge: "数", href: "/subjects/math" },
  { label: "物理", badge: "物", href: "/subjects/physics" },
  { label: "化学", badge: "化", href: "/subjects/chemistry" },
  { label: "生物", badge: "生", href: "/subjects/biology" },
];

const decisionLinks = [
  {
    tag: "相談",
    title: "フォームで無料相談",
    desc: "学年・志望校・模試結果・使っている教材を送れます。受講科目と回数の目安を相談できます。",
    href: "/contact?from=home-decision-card",
  },
  {
    tag: "料金",
    title: "料金と始め方を見る",
    desc: "週1回・週2回・週3回の費用目安と、契約までの流れをまとめています。",
    href: "/pricing",
  },
  {
    tag: "保護者",
    title: "保護者向け情報を見る",
    desc: "月々の費用、保護者面談、成績報告、講師変更についてまとめています。",
    href: "/for/parents",
  },
];

const serviceOverviewItems = [
  {
    label: "01",
    title: "入試科目と出題傾向から決める",
    body: "慶應・慈恵・順天堂など、大学ごとの科目、過去問の時期、面接・小論文の有無を見て進めます。",
  },
  {
    label: "02",
    title: "授業で扱う問題を絞る",
    body: "英語・数学・理科を中心に、今の点数に直結しやすい単元から扱います。必要に応じて教材も見直します。",
  },
  {
    label: "03",
    title: "自習範囲と復習日まで残す",
    body: "次回までに解く範囲、復習する日、質問する問題を毎回決めます。授業時間だけで終わらせません。",
  },
];

const topServiceItems = [
  {
    label: "01",
    title: "慶應医学部生の1対1授業",
    body: "医学部受験を経験した講師が、英語・数学・理科を中心に、答案の作り方や解き直しまで確認します。",
  },
  {
    label: "02",
    title: "週ごとの課題管理",
    body: "授業で扱う問題、自習で進める範囲、復習日を毎週決めます。遅れた週は、次の週に組み直します。",
  },
  {
    label: "03",
    title: "保護者への進捗共有",
    body: "学習状況、次にやること、受験校や科目の見直しを必要に応じて共有します。",
  },
  {
    label: "04",
    title: "面接・小論文・MMIも相談",
    body: "志望理由、医師像、小論文テーマ、MMIなど、必要な大学に合わせて準備します。",
  },
];

const teachingSystemItems = [
  {
    title: "担当講師の選定",
    body: "科目、志望校、質問のしやすさを見て、担当候補を案内します。",
  },
  {
    title: "体験指導",
    body: "担当予定の講師で受けられます。説明の合う・合わないを先に確認できます。",
  },
  {
    title: "授業外の質問",
    body: "宿題で止まったところは、次回授業の内容に入れます。",
  },
  {
    title: "保護者共有",
    body: "授業の進み具合や次にやることを、保護者の方にも共有できます。",
  },
];

const lpAudienceItems = [
  "慶應・難関私立医学部を目指す現役生",
  "医学部予備校の費用や通塾に迷っているご家庭",
  "浪人・再受験で学習計画を立て直したい方",
  "推薦・総合型、面接・小論文まで見ておきたい方",
];

const lpConsultationItems = [
  { title: "受験校の候補", body: "成績、地域、学費、入試科目を見ながら相談できます。" },
  { title: "受講科目と回数", body: "英語・数学・理科のどこを授業で扱うか、週何回がよいかを相談できます。" },
  { title: "面接・小論文の開始時期", body: "必要な大学と、準備を始める時期を確認できます。" },
  { title: "医学部受験マニュアル", body: "希望者には、科目別の進め方や面接・小論文の始め方をまとめた資料を案内します。" },
];

const serviceScopeItems = [
  "英語・数学・理科の個別指導",
  "週ごとの課題設定",
  "面接・小論文・MMIの準備",
  "出願校・併願校の相談",
  "教材選定と週間学習計画",
  "模試結果の見直し",
  "保護者への状況共有",
];

const consultationNotes = [
  {
    title: "模試結果",
    body: "科目別の点数、判定、残り期間を見て、先に直す科目を相談します。",
  },
  {
    title: "使用教材",
    body: "学校・予備校の進度、参考書、過去問の進み具合を確認します。",
  },
  {
    title: "受講回数",
    body: "週1回から複数回まで、科目数と残り期間に合わせて目安を出します。",
  },
  {
    title: "面接・小論文",
    body: "志望校に応じて、一般入試以外の準備時期も確認します。",
  },
];

const weeklyReviewItems = [
  { title: "点数を見る", body: "模試や小テストの結果を科目別に見る" },
  { title: "課題を決める", body: "次回までに進める範囲と復習内容を指定" },
  { title: "授業を変える", body: "理解度に応じて扱う単元や教材を変更" },
  { title: "保護者に共有", body: "学習状況と次にやることを共有" },
];

const supportFlow = [
  {
    label: "授業前",
    title: "今週の範囲を決める",
    body: "学校・予備校の進度も見ながら、無理のない量にします。",
  },
  {
    label: "授業中",
    title: "つまずいた原因を見る",
    body: "計算ミス、知識不足、方針の立て方を分けて扱います。",
  },
  {
    label: "授業後",
    title: "復習内容を残す",
    body: "次回までに解き直す問題と、質問する内容を決めます。",
  },
  {
    label: "月ごと",
    title: "保護者にも共有",
    body: "進捗、課題、次にやることを面談や報告で共有します。",
  },
];

const earlyMethodItems = [
  {
    label: "01",
    title: "志望校・科目を整理",
    body: "地域、学費、入試科目、面接・小論文の有無を見て、受験校の候補を広げすぎないようにします。",
  },
  {
    label: "02",
    title: "授業で扱う内容を決める",
    body: "英語・数学・理科の中で、今の点数に影響している単元を優先します。",
  },
  {
    label: "03",
    title: "次の1週間を決める",
    body: "授業で解く問題、自習で進める範囲、復習日、質問する問題を分けて残します。",
  },
  {
    label: "04",
    title: "必要に応じて家庭にも共有",
    body: "進捗、課題、次にやることを保護者にも共有し、科目や回数の見直しにつなげます。",
  },
];

const comparisonItems = [
  {
    title: "一般的な個別指導で起きやすいこと",
    points: [
      "授業中の解説で終わり、自習範囲が曖昧になる",
      "受験校や面接・小論文の相談が別扱いになる",
      "保護者が進捗を把握しにくい",
    ],
  },
  {
    title: "Medvanceで見ること",
    points: [
      "授業内容と自習課題を同じ流れで決める",
      "志望校、科目、推薦・面接小論までまとめて相談する",
      "必要に応じて保護者にも進捗と次の方針を共有する",
    ],
  },
];

const subjectReviewItems = [
  { subject: "英語", body: "長文量、語彙、文法、和訳・英作文のどこを優先するか" },
  { subject: "数学", body: "典型問題の抜け、計算速度、記述で落としている点" },
  { subject: "理科", body: "知識の穴、計算処理、医学部で差がつく単元" },
  { subject: "面接・小論文", body: "志望理由、医師像、大学別に問われやすいテーマ" },
];

const homeVisuals = {
  consultation: {
    src: "/images/generated/medvance-strategy-session.webp",
    alt: "模試結果と志望校を見ながら学習内容を決める図",
    caption: "初回相談では、志望校・模試結果・教材を見ながら、先に手を付ける科目を決めます。",
  },
  weeklyPlan: {
    src: "/images/generated/medvance-weekly-plan-diagram.webp",
    alt: "週単位で学習計画を調整する図",
    caption: "授業内容、課題、質問対応、保護者共有を週ごとに見直します。",
  },
  support: {
    src: "/images/generated/medvance-support-diagram.webp",
    alt: "医学部受験の授業と学習管理を示す図",
    caption: "授業、学習計画、質問、保護者共有を分けずに扱います。",
  },
  subjectStrategy: {
    src: "/images/generated/medvance-subject-strategy-chart.webp",
    alt: "英語・数学・理科と面接小論文の対策内容を示す図",
    caption: "科目別の穴を見える形にして、先に直す場所を決めます。",
  },
  tutorTeam: {
    src: "/images/japan-medical-exam-desk.webp",
    alt: "日本の医学部受験に向けた教材と模試資料のイメージ",
    caption: "模試結果、教材、志望校の出題傾向を見ながら、今やることを決めます。",
  },
};

const homeSchemas = [
  buildItemListSchema(
    "ホームから読める注目コラム",
    "/",
    homeFeaturedColumnArticles.map((article) => ({
      name: article.title,
      url: article.href,
    })),
  ),
  buildFaqSchema(faqs),
  buildSpeakableSchema("/"),
];

function HomeVisual({
  src,
  alt,
  caption,
  variant = "light",
}: {
  src: string;
  alt: string;
  caption: string;
  variant?: "light" | "dark";
}) {
  const isDark = variant === "dark";

  return (
    <figure
      className="overflow-hidden rounded-lg"
      style={{
        backgroundColor: isDark ? "rgba(255,255,255,0.04)" : "#f7f5f0",
        border: isDark ? "1px solid rgba(255,255,255,0.1)" : "1px solid #e5e1d8",
      }}
    >
      <Image
        src={src}
        alt={alt}
        width={1600}
        height={900}
        sizes="(max-width: 768px) 100vw, 720px"
        className="h-auto w-full"
        loading="lazy"
      />
      <figcaption
        className="px-4 pb-4 text-xs leading-relaxed"
        style={{ color: isDark ? "rgba(255,255,255,0.5)" : "#6b7280" }}
      >
        {caption}
      </figcaption>
    </figure>
  );
}

/* ── Page ─────────────────────────────────── */
export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeSchemas) }}
      />

      {/* ── 1. HERO ───────────────────────────── */}
      <HeroAnimated />

      {/* ── 1B. WHAT YOU GET FROM A FREE CONSULTATION ─── */}
      <section className="bg-white px-4 py-12" style={{ borderBottom: "1px solid #dfe6ef" }}>
        <div className="mx-auto max-w-6xl">
          <div className="mb-6 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="mb-2 text-xs font-semibold tracking-widest" style={{ color: "#c9922a" }}>
                Free Consultation
              </p>
              <h2 className="text-xl font-bold leading-snug md:text-2xl" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>
                無料相談（30分）で分かる3つのこと
              </h2>
            </div>
            <p className="max-w-md text-xs leading-relaxed" style={{ color: "#5f6b7a" }}>
              強引な勧誘は一切ありません。Medvanceが合わないご家庭にはその場で他塾も提案します。
            </p>
          </div>
          <div className="grid gap-3 md:grid-cols-3">
            {[
              {
                num: "01",
                title: "現状の偏差値と志望校との距離",
                body: "模試結果、得意・苦手科目、残り期間から、いま何点足りないかを一緒に整理します。",
              },
              {
                num: "02",
                title: "あなただけの90日プラン",
                body: "次の3ヶ月で何をどの順に解くべきか、慶應医を全勝した代表の視点で具体策を出します。",
              },
              {
                num: "03",
                title: "Medvanceが本当に合うかの率直な判定",
                body: "ご家庭の状況、性格、講師との相性まで含めて、合う・合わないを率直にお伝えします。",
              },
            ].map((item) => (
              <div
                key={item.num}
                className="rounded-lg p-5"
                style={{ backgroundColor: "#f6f8fb", border: "1px solid #dfe6ef" }}
              >
                <p className="mb-3 text-sm font-bold" style={{ color: "#c9922a", fontFamily: "var(--font-noto-serif)" }}>
                  {item.num}
                </p>
                <h3 className="mb-2 text-sm font-bold leading-snug" style={{ color: "#0c1a33" }}>
                  {item.title}
                </h3>
                <p className="text-xs leading-relaxed" style={{ color: "#5f6b7a" }}>
                  {item.body}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href="/contact?from=home-consultation-cards"
              className="inline-flex items-center justify-center rounded-md px-6 py-3 text-sm font-bold text-white transition-opacity hover:opacity-90"
              style={{ backgroundColor: "#c9922a" }}
            >
              フォームで無料相談
            </Link>
            <a
              href={LINE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-md px-6 py-3 text-sm font-bold text-white transition-opacity hover:opacity-90"
              style={{ backgroundColor: "#06C755" }}
            >
              LINEで無料相談
            </a>
            <Link
              href="/download"
              className="inline-flex items-center justify-center rounded-md px-6 py-3 text-sm font-bold transition-opacity hover:opacity-90"
              style={{ border: "1px solid rgba(201,146,42,0.35)", color: "#0c1a33", backgroundColor: "rgba(201,146,42,0.08)" }}
            >
              医学部受験マニュアルを見る
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-16 md:py-20" style={{ borderBottom: "1px solid #dfe6ef" }}>
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <FadeIn>
            <div className="lg:sticky lg:top-28">
              <p className="mb-3 text-xs font-semibold tracking-widest" style={{ color: "#c9922a" }}>
                Medvanceとは
              </p>
              <h2 className="mb-5 text-2xl font-bold leading-snug md:text-4xl" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>
                授業だけで終わらせない、医学部受験の個別指導。
              </h2>
              <p className="max-w-xl text-sm leading-relaxed" style={{ color: "#5f6b7a" }}>
                Medvanceは、慶應医学部生が1対1で授業を行い、週ごとの課題設定と進捗共有まで扱うオンライン個別指導です。志望校、模試結果、使用教材を見て、受講科目と自習内容を決めます。
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/contact?from=home-service-intro"
                  className="inline-flex items-center justify-center rounded-md px-6 py-3 text-sm font-bold text-white transition-opacity hover:opacity-90"
                  style={{ backgroundColor: "#c9922a" }}
                >
                  フォームで無料相談
                </Link>
                <LineButton label="LINEで無料相談" size="lg" className="!rounded-md !py-3 !px-6" />
              </div>
            </div>
          </FadeIn>

          <div className="divide-y" style={{ borderColor: "#dfe6ef" }}>
            {topServiceItems.map((item, index) => (
              <FadeIn key={item.title} delay={index * 0.05}>
                <div className="grid gap-4 py-6 sm:grid-cols-[72px_1fr]">
                  <p className="text-sm font-bold" style={{ color: "#c9922a", fontFamily: "var(--font-noto-serif)" }}>
                    {item.label}
                  </p>
                  <div>
                    <h3 className="mb-2 text-lg font-bold" style={{ color: "#0c1a33" }}>
                      {item.title}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: "#5f6b7a" }}>
                      {item.body}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: "#0c1a33" }} className="px-4 py-16">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <FadeIn>
            <div>
              <p className="mb-3 text-xs font-semibold tracking-widest" style={{ color: "#c9922a" }}>
                よくある相談
              </p>
              <h2 className="mb-4 text-2xl font-bold leading-snug text-white md:text-3xl" style={{ fontFamily: "var(--font-noto-serif)" }}>
                相談が多いのは、この4つです。
              </h2>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.62)" }}>
                学力だけでなく、受験校、費用、通塾の負担、推薦・面接小論までまとめて相談したいご家庭が多いです。
              </p>
            </div>
          </FadeIn>

          <div className="grid gap-3 sm:grid-cols-2">
            {lpAudienceItems.map((item, index) => (
              <FadeIn key={item} delay={index * 0.05}>
                <div className="flex min-h-[72px] items-center gap-3 rounded-md px-4 py-4" style={{ backgroundColor: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}>
                  <span className="text-sm font-bold" style={{ color: "#c9922a" }}>
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.78)" }}>
                    {item}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 px-4" style={{ borderBottom: "1px solid #dfe6ef" }}>
        <div className="mx-auto max-w-6xl">
          <FadeIn>
            <div className="mb-10 grid gap-6 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
              <div>
                <p className="mb-3 text-xs font-semibold tracking-widest" style={{ color: "#c9922a" }}>
                  指導の流れ
                </p>
                <h2 className="text-2xl font-bold leading-snug md:text-4xl" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>
                  授業で解いた問題を、次の1週間につなげる。
                </h2>
              </div>
              <p className="max-w-2xl text-sm leading-relaxed lg:ml-auto" style={{ color: "#5f6b7a" }}>
                医学部受験は、授業時間だけでは進みません。授業で扱う問題、自習で進める範囲、保護者への共有を分けずに見ます。
              </p>
            </div>
          </FadeIn>

          <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
            <FadeIn>
              <HomeVisual {...homeVisuals.support} />
            </FadeIn>
            <div className="divide-y" style={{ borderColor: "#dfe6ef" }}>
              {earlyMethodItems.map((item, index) => (
                <FadeIn key={item.label} delay={index * 0.05}>
                  <div className="grid gap-4 py-5 sm:grid-cols-[58px_1fr]">
                    <p className="text-sm font-bold" style={{ color: "#c9922a", fontFamily: "var(--font-noto-serif)" }}>
                      {item.label}
                    </p>
                    <div>
                      <h3 className="mb-2 text-base font-bold" style={{ color: "#0c1a33" }}>
                        {item.title}
                      </h3>
                      <p className="text-sm leading-relaxed" style={{ color: "#5f6b7a" }}>
                        {item.body}
                      </p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {comparisonItems.map((group, index) => (
              <FadeIn key={group.title} delay={index * 0.08}>
                <div
                  className="h-full rounded-lg p-6"
                  style={{
                    backgroundColor: index === 0 ? "#f6f8fb" : "#0c1a33",
                    border: index === 0 ? "1px solid #dfe6ef" : "1px solid rgba(201,146,42,0.28)",
                  }}
                >
                  <h3
                    className="mb-4 text-base font-bold"
                    style={{ color: index === 0 ? "#0c1a33" : "#ffffff" }}
                  >
                    {group.title}
                  </h3>
                  <div className="space-y-3">
                    {group.points.map((point) => (
                      <div key={point} className="flex gap-3">
                        <span
                          className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full"
                          style={{ backgroundColor: index === 0 ? "#8b96a8" : "#c9922a" }}
                        />
                        <p
                          className="text-sm leading-relaxed"
                          style={{ color: index === 0 ? "#5f6b7a" : "rgba(255,255,255,0.72)" }}
                        >
                          {point}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: "#f6f8fb" }} className="py-24 px-4">
        <div className="mx-auto max-w-6xl">
          <FadeIn>
            <div className="grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-start">
              <div>
                <p className="mb-3 text-xs font-semibold tracking-widest" style={{ color: "#c9922a" }}>
                  指導内容
                </p>
                <h2 className="mb-5 text-2xl font-bold leading-snug md:text-4xl" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>
                  科目指導と受験管理を同じ流れで見ます。
                </h2>
                <p className="max-w-2xl text-sm leading-relaxed" style={{ color: "#5f6b7a" }}>
                  医学部入試で必要になる内容を、志望校に合わせて扱います。授業後に進める範囲と復習日も残します。
                </p>
                <div className="mt-8 divide-y" style={{ borderColor: "#dfe6ef" }}>
                  {serviceOverviewItems.map((item) => (
                    <div key={item.label} className="grid grid-cols-[48px_1fr] gap-4 py-5">
                      <p className="text-sm font-bold" style={{ color: "#c9922a", fontFamily: "var(--font-noto-serif)" }}>
                        {item.label}
                      </p>
                      <div>
                        <h3 className="mb-2 text-base font-bold" style={{ color: "#0c1a33" }}>{item.title}</h3>
                        <p className="text-sm leading-relaxed" style={{ color: "#5f6b7a" }}>{item.body}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  <Link
                    href="/contact?from=home-service-overview"
                    className="inline-flex items-center justify-center rounded-md px-6 py-3 text-sm font-bold text-white transition-opacity hover:opacity-90"
                    style={{ backgroundColor: "#c9922a" }}
                  >
                    フォームで無料相談
                  </Link>
                  <Link
                    href="/pricing"
                    className="inline-flex items-center justify-center rounded-md px-6 py-3 text-sm font-bold transition-opacity hover:opacity-90"
                    style={{ backgroundColor: "#ffffff", color: "#0c1a33", border: "1px solid #dfe6ef" }}
                  >
                    料金と始め方を見る
                  </Link>
                </div>
              </div>

              <div className="space-y-5">
                <HomeVisual {...homeVisuals.tutorTeam} />
                <div className="rounded-lg bg-white p-6" style={{ border: "1px solid #dfe6ef" }}>
                  <p className="mb-4 text-xs font-semibold tracking-widest" style={{ color: "#c9922a" }}>
                    対応内容
                  </p>
                  <div className="grid gap-x-6 gap-y-3 sm:grid-cols-2">
                    {serviceScopeItems.map((item) => (
                      <div key={item} className="flex items-center gap-3 border-b pb-3" style={{ borderColor: "#edf1f5" }}>
                        <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full" style={{ backgroundColor: "#c9922a" }} />
                        <p className="text-sm font-semibold" style={{ color: "#0c1a33" }}>{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="bg-white py-20 px-4" style={{ borderTop: "1px solid #dfe6ef", borderBottom: "1px solid #dfe6ef" }}>
        <div className="mx-auto max-w-6xl">
          <FadeIn>
            <div className="mb-10 grid gap-6 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
              <div>
                <p className="mb-3 text-xs font-semibold tracking-widest" style={{ color: "#c9922a" }}>
                  講師・指導体制
                </p>
                <h2 className="text-2xl font-bold leading-snug md:text-4xl" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>
                  講師との相性を見てから、入会できます。
                </h2>
              </div>
              <p className="max-w-2xl text-sm leading-relaxed lg:ml-auto" style={{ color: "#5f6b7a" }}>
                担当予定の講師で体験指導を受けられます。合わないと感じた場合は、無理に進める必要はありません。
              </p>
            </div>
          </FadeIn>

          <div className="grid gap-10 lg:grid-cols-[1fr_0.95fr]">
            <div className="grid gap-3 sm:grid-cols-2">
              {teachingSystemItems.map((item, index) => (
                <FadeIn key={item.title} delay={index * 0.05}>
                  <div className="h-full rounded-lg bg-white p-5" style={{ border: "1px solid #dfe6ef" }}>
                    <p className="mb-3 text-xs font-bold" style={{ color: "#c9922a" }}>
                      {String(index + 1).padStart(2, "0")}
                    </p>
                    <h3 className="mb-2 text-base font-bold" style={{ color: "#0c1a33" }}>
                      {item.title}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: "#5f6b7a" }}>
                      {item.body}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>

            <FadeIn delay={0.12}>
              <div className="rounded-lg p-6 md:p-7" style={{ backgroundColor: "#f6f8fb", border: "1px solid #dfe6ef" }}>
                <p className="mb-4 text-sm font-bold" style={{ color: "#0c1a33" }}>
                  相談から指導開始まで
                </p>
                <div className="space-y-4">
                  {steps.map((item, index) => (
                    <div key={item.title} className="grid grid-cols-[34px_1fr] gap-3">
                      <span className="flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold text-white" style={{ backgroundColor: "#0c1a33" }}>
                        {index + 1}
                      </span>
                      <div>
                        <p className="text-sm font-bold" style={{ color: "#0c1a33" }}>{item.title}</p>
                        <p className="mt-1 text-xs leading-relaxed" style={{ color: "#5f6b7a" }}>{item.body}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: "#0c1a33" }} className="py-16 px-4">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <FadeIn>
            <div>
              <p className="mb-3 text-xs font-semibold tracking-widest" style={{ color: "#c9922a" }}>
                無料相談
              </p>
              <h2 className="mb-4 text-2xl font-bold leading-snug text-white md:text-3xl" style={{ fontFamily: "var(--font-noto-serif)" }}>
                相談で確認できること
              </h2>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.62)" }}>
                学年、志望校、模試結果、使用教材をもとに、受講科目と回数の目安を相談できます。
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/contact?from=home-trust-entry"
                  className="inline-flex items-center justify-center rounded-md px-6 py-3 text-sm font-bold text-white transition-opacity hover:opacity-90"
                  style={{ backgroundColor: "#c9922a" }}
                >
                  フォームで無料相談
                </Link>
                <LineButton label="LINEで無料相談" size="lg" className="!rounded-md !py-3 !px-6" />
              </div>
            </div>
          </FadeIn>
          <div className="grid gap-3 sm:grid-cols-2">
            {lpConsultationItems.map((item, index) => (
              <FadeIn key={item.title} delay={index * 0.05}>
                <div className="flex min-h-[88px] items-start gap-3 rounded-md px-4 py-4" style={{ backgroundColor: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}>
                  <span className="mt-0.5 text-sm font-bold" style={{ color: "#c9922a" }}>
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <p className="mb-1 text-sm font-bold text-white">{item.title}</p>
                    <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.7)" }}>
                      {item.body}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── 2.6 CONSULTATION NOTES ────────────── */}
      <section className="bg-white py-20 px-4" style={{ borderBottom: "1px solid #e5e1d8" }}>
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-10 items-start">
            <FadeIn>
              <div className="max-w-lg">
                <p className="text-xs font-semibold tracking-widest mb-3" style={{ color: "#c9922a" }}>
                  初回相談の内容
                </p>
                <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>
                  模試結果や教材があれば相談できます。
                </h2>
                <p className="text-sm leading-relaxed mb-6" style={{ color: "#6b7280" }}>
                  学校や予備校の進度、使っている問題集、過去問の状況を確認します。資料がそろっていない場合も相談できます。
                </p>
                <Link
                  href="/contact?from=home-consultation-notes"
                  className="inline-flex items-center gap-2 rounded-md px-5 py-3 text-sm font-bold text-white hover:opacity-90 transition-opacity"
                  style={{ backgroundColor: "#0c1a33" }}
                >
                  フォームで無料相談
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                  </svg>
                </Link>
                <div className="mt-8">
                  <HomeVisual {...homeVisuals.consultation} />
                </div>
              </div>
            </FadeIn>
            <div className="space-y-3">
              {consultationNotes.map((item, index) => (
                <FadeIn key={item.title} delay={index * 0.07}>
                  <div
                    className="grid sm:grid-cols-[56px_1fr] gap-4 rounded-lg bg-white p-5"
                    style={{ border: "1px solid #e5e1d8" }}
                  >
                    <p className="text-sm font-bold" style={{ color: "#c9922a", fontFamily: "var(--font-noto-serif)" }}>
                      {String(index + 1).padStart(2, "0")}
                    </p>
                    <div>
                      <h3 className="text-base font-bold mb-2" style={{ color: "#0c1a33" }}>
                        {item.title}
                      </h3>
                      <p className="text-sm leading-relaxed" style={{ color: "#6b7280" }}>
                        {item.body}
                      </p>
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
            
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-14" style={{ color: "#0c1a33" }}>
              Medvanceで大事にしていること
            </h2>
          </FadeIn>
          <div className="grid md:grid-cols-3 gap-6">
            {strengths.map((item, i) => (
              <FadeIn key={item.num} delay={i * 0.1}>
                <HoverCard className="bg-white rounded-lg p-8 shadow-sm h-full" style={{ border: "1px solid #e5e1d8" }}>
                  <p className="text-6xl font-bold mb-4 leading-none" style={{ color: "#0c1a33", opacity: 0.07, fontFamily: "var(--font-noto-serif)" }}>{item.num}</p>
                  <h3 className="text-base font-bold mb-3" style={{ color: "#0c1a33" }}>{item.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#6b7280" }}>{item.body}</p>
                </HoverCard>
              </FadeIn>
            ))}
          </div>
          <FadeIn delay={0.18}>
            <div
              className="mt-10 rounded-lg bg-white p-6 md:p-8"
              style={{ border: "1px solid #e5e1d8" }}
            >
              <div className="grid lg:grid-cols-[0.92fr_1.08fr] gap-7 items-start">
                <div>
                  <p className="text-xs font-bold tracking-widest mb-3" style={{ color: "#c9922a" }}>
                    指導開始後の管理
                  </p>
                  <h3 className="text-xl md:text-2xl font-bold mb-4" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>
                    予定どおり進まない前提で、毎週見直します。
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#6b7280" }}>
                    医学部受験では、計画どおりに進まない週もあります。だから授業、宿題、模試結果を見て、次の1週間を組み直します。
                  </p>
                  <div className="mt-6">
                    <HomeVisual {...homeVisuals.weeklyPlan} />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-3">
                  {weeklyReviewItems.map((item) => (
                    <div
                      key={item.title}
                      className="rounded-md p-4"
                      style={{ backgroundColor: "#f7f5f0", border: "1px solid #e5e1d8" }}
                    >
                      <p className="text-sm font-bold mb-1" style={{ color: "#0c1a33" }}>
                        {item.title}
                      </p>
                      <p className="text-xs leading-relaxed" style={{ color: "#6b7280" }}>
                        {item.body}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── 3.8 DECISION HUB ─────────────────── */} 
      <section style={{ backgroundColor: "#f7f5f0", borderTop: "1px solid #e5e1d8", borderBottom: "1px solid #e5e1d8" }} className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-3" style={{ color: "#0c1a33" }}>
              先に見ておきたい方へ
            </h2>
            <p className="text-center text-sm mb-12 max-w-2xl mx-auto" style={{ color: "#6b7280" }}>
              料金、始め方、保護者向けの情報をまとめています。相談前に見ておきたい方はこちらからどうぞ。
            </p>
          </FadeIn>
          <div className="grid md:grid-cols-3 gap-5 mb-8">
            {decisionLinks.map((item, i) => (
              <FadeIn key={item.href} delay={i * 0.08}>
                <Link
                  href={item.href}
                  className="block h-full rounded-lg p-6 bg-white hover:shadow-md transition-shadow"
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
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                href="/contact?from=home-decision-hub"
                className="inline-flex items-center gap-2 px-7 py-3 rounded-lg font-bold text-sm hover:opacity-90 transition-opacity"
                style={{ backgroundColor: "#0c1a33", color: "#fff" }}
              >
                フォームで無料相談
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
              </Link>
              <LineButton label="LINEで無料相談" size="lg" className="!px-7 !py-3" />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── 4. COMPARISON TABLE ───────────────── */}
      <section className="bg-white py-24 px-4">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-4" style={{ color: "#0c1a33" }}>
              塾・予備校・家庭教師を比べるときの見方
            </h2>
            <p className="text-center text-sm mb-12" style={{ color: "#6b7280" }}>
              どれが良いかは、学年・科目数・家庭の状況で変わります。見るべき点だけ先に整理します。
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse" style={{ minWidth: "760px" }}>
                <thead>
                  <tr>
                    <th
                      className="text-left py-4 px-4 text-sm font-semibold"
                      style={{ color: "#6b7280", borderBottom: "2px solid #e5e1d8", width: "20%" }}
                    >
                      比較項目
                    </th>
                    <th
                      className="py-4 px-4 text-center text-sm font-bold rounded-t-xl"
                      style={{
                        color: "#0c1a33",
                        backgroundColor: "rgba(201,146,42,0.08)",
                        border: "2px solid #c9922a",
                        borderBottom: "none",
                        width: "20%",
                      }}
                    >
                      <span className="block text-base" style={{ color: "#c9922a" }}>Medvance</span>
                      <span className="text-xs font-normal" style={{ color: "#6b7280" }}>医学部受験専門塾</span>
                    </th>
                    <th
                      className="py-4 px-4 text-center text-sm font-bold"
                      style={{ color: "#0c1a33", borderBottom: "2px solid #e5e1d8", width: "20%" }}
                    >
                      医学部専門予備校
                    </th>
                    <th
                      className="py-4 px-4 text-center text-sm font-bold"
                      style={{ color: "#0c1a33", borderBottom: "2px solid #e5e1d8", width: "20%" }}
                    >
                      大手予備校
                    </th>
                    <th
                      className="py-4 px-4 text-center text-sm font-bold"
                      style={{ color: "#0c1a33", borderBottom: "2px solid #e5e1d8", width: "20%" }}
                    >
                      一般家庭教師
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      item: "講師",
                      medvance: "慶應医学部生が担当候補",
                      igaku: "プロ講師・チューター",
                      yobikou: "校舎や講座で異なる",
                      kateikyoshi: "講師により異なる",
                      highlight: true,
                    },
                    {
                      item: "指導スタイル",
                      medvance: "1対1",
                      igaku: "少人数〜1対1",
                      yobikou: "集団授業が中心",
                      kateikyoshi: "1対1が中心",
                      highlight: false,
                    },
                    {
                      item: "受験情報",
                      medvance: "志望校・科目・面接まで相談",
                      igaku: "医学部情報が豊富",
                      yobikou: "コースにより異なる",
                      kateikyoshi: "講師により異なる",
                      highlight: true,
                    },
                    {
                      item: "学習管理",
                      medvance: "週ごとの課題まで設定",
                      igaku: "校舎・担任制で管理",
                      yobikou: "本人管理が多い",
                      kateikyoshi: "家庭との相談次第",
                      highlight: false,
                    },
                    {
                      item: "受講エリア",
                      medvance: "全国オンライン対応",
                      igaku: "校舎中心・一部オンライン",
                      yobikou: "校舎中心",
                      kateikyoshi: "地域やオンライン対応次第",
                      highlight: true,
                    },
                    {
                      item: "費用の考え方",
                      medvance: "科目数・回数で調整",
                      igaku: "年間費用が大きくなりやすい",
                      yobikou: "講座数で変わる",
                      kateikyoshi: "時給・回数で変わる",
                      highlight: false,
                    },
                  ].map((row, i) => (
                    <tr key={i} style={{ borderBottom: "1px solid #e5e1d8" }}>
                      <td
                        className="py-4 px-4 text-sm font-semibold"
                        style={{ color: "#0c1a33" }}
                      >
                        {row.item}
                      </td>
                      <td
                        className="py-4 px-4 text-center text-sm font-bold"
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
                        className="py-4 px-4 text-center text-sm"
                        style={{ color: "#6b7280" }}
                      >
                        {row.igaku}
                      </td>
                      <td
                        className="py-4 px-4 text-center text-sm"
                        style={{ color: "#6b7280" }}
                      >
                        {row.yobikou}
                      </td>
                      <td
                        className="py-4 px-4 text-center text-sm"
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
            
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-4" style={{ color: "#0c1a33" }}>
              現役慶應医学部生が1対1で指導する強み
            </h2>
            <p className="text-center text-sm mb-14 max-w-xl mx-auto" style={{ color: "#6b7280" }}>
              科目、志望校、質問のしやすさを見て担当候補を出します。希望があれば、入会前に面談できます。
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
                title: "難関校の受験経験",
                desc: "問題の優先順位、時間配分、記述の直し方まで扱います。",
              },
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                ),
                title: "浪人経験のある講師",
                desc: "生活リズムや復習の戻し方まで、本人の経験をもとに話せます。",
              },
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                  </svg>
                ),
                title: "地方公立出身の講師",
                desc: "学校の進度や情報量の差を前提に、教材と相談先を決めます。",
              },
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                  </svg>
                ),
                title: "担当講師の相性",
                desc: "質問しやすいか、説明が合うかを見てから始められます。",
              },
            ].map((t, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <HoverCard
                  className="bg-white rounded-lg p-6 shadow-sm text-center h-full"
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
            <HomeVisual {...homeVisuals.tutorTeam} />
          </FadeIn>
        </div>
      </section>

      {/* ── 7. 6 FEATURES ─────────────────────── */}
      <section style={{ backgroundColor: "#0c1a33" }} className="py-24 px-4">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            
            <h2 className="text-2xl md:text-3xl font-bold text-center text-white mb-14" style={{ fontFamily: "var(--font-noto-serif)" }}>
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

      {/* ── 7.3 SUPPORT CONTENT ───────────────── */}
      <section className="bg-white py-20 px-4" style={{ borderTop: "1px solid #e5e1d8" }}>
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-3" style={{ color: "#0c1a33" }}>
              授業以外の勉強も見ます
            </h2>
            <p className="text-center text-sm mb-12 max-w-xl mx-auto" style={{ color: "#6b7280" }}>
              授業で扱った問題、次の宿題、模試の見直しまで一つの流れで進めます。
            </p>
          </FadeIn>
          <FadeIn delay={0.06}>
            <div className="mx-auto mb-10 max-w-4xl">
              <HomeVisual {...homeVisuals.support} />
            </div>
          </FadeIn>
          <FadeIn delay={0.08}>
            <div className="grid md:grid-cols-4 gap-3 mb-10">
              {supportFlow.map((item) => (
                <div
                  key={item.label}
                  className="rounded-lg bg-white p-5"
                  style={{ border: "1px solid #e5e1d8" }}
                >
                  <p className="text-xs font-bold mb-3" style={{ color: "#c9922a" }}>
                    {item.label}
                  </p>
                  <h3 className="text-sm font-bold mb-2" style={{ color: "#0c1a33" }}>
                    {item.title}
                  </h3>
                  <p className="text-xs leading-relaxed" style={{ color: "#6b7280" }}>
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </FadeIn>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                step: "01",
                title: "年・月・週・1日単位の学習計画",
                body: "試験日から考えて年間計画を立て、月・週・1日の単位まで分けます。「今日何をするか」が分かる状態にします。",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
                  </svg>
                ),
              },
              {
                step: "02",
                title: "毎日の学習管理とフィードバック",
                body: "宿題の進み具合や質問を見て、授業内容を変えます。一人で止まったままにしません。",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
                  </svg>
                ),
              },
              {
                step: "03",
                title: "保護者を交えた学習報告面談",
                body: "保護者の方にも、学習状況と次にやることを共有できます。費用や受験校の相談もできます。",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
                  </svg>
                ),
              },
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div
                  className="rounded-2xl p-7 h-full"
                  style={{ backgroundColor: "#f7f5f0", border: "1px solid #e5e1d8" }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: "#0c1a33", color: "#c9922a" }}
                    >
                      {item.icon}
                    </div>
                    <span className="text-xs font-bold tracking-widest" style={{ color: "rgba(12,26,51,0.25)" }}>
                      {item.step}
                    </span>
                  </div>
                  <h3 className="font-bold text-base mb-3" style={{ color: "#0c1a33" }}>{item.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#6b7280" }}>{item.body}</p>
                </div>
              </FadeIn>
            ))}
          </div>
          <FadeIn delay={0.15}>
            <div
              className="mt-6 flex flex-col sm:flex-row items-center gap-5 rounded-2xl px-7 py-6"
              style={{ backgroundColor: "#0c1a33", border: "1px solid rgba(201,146,42,0.22)" }}
            >
              <div
                className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center"
                style={{ backgroundColor: "rgba(201,146,42,0.18)", color: "#c9922a" }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
              </div>
              <div className="flex-1 text-center sm:text-left">
                <p className="text-xs font-bold tracking-widest mb-1" style={{ color: "#c9922a" }}>授業外の質問</p>
                <p className="font-bold text-white text-base mb-1">授業外の質問も見ます</p>
                <p className="text-sm" style={{ color: "rgba(255,255,255,0.65)" }}>
                  宿題で詰まった問題は、次回授業で扱います。質問が多い単元は、予定を変えて戻ります。
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── 7.5 ONLINE SECTION ────────────────── */}
      <section className="bg-white py-24 px-4" style={{ borderTop: "1px solid #e5e1d8" }}>
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-4" style={{ color: "#0c1a33" }}>
              全国どこからでも受講できます
            </h2>
            <p className="text-center text-sm mb-14 max-w-xl mx-auto" style={{ color: "#6b7280" }}>
              ZoomやGoogle Meetを使います。通塾が難しい方も、自宅から受講できます。
            </p>
          </FadeIn>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <FadeIn>
              <div className="space-y-5">
                {[
                  { icon: "全国", title: "日本全国どこでも受講可能", body: "東京・大阪・名古屋だけでなく、地方の方も受講できます。学校の進度も前提にします。" },
                  { icon: "海外", title: "海外在住でも受講可能", body: "帰国後に医学部を目指す方、海外から準備したい方も相談できます。" },
                  { icon: "共有", title: "画面共有で指導", body: "Zoom・Google Meetで問題を共有します。ノートや参考書も画面越しに見られます。" },
                  { icon: "端末", title: "スマホ・タブレットでも受講可能", body: "PCがない場合も相談できます。授業内容に合わせて受講方法を決めます。" },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 p-5 rounded-xl" style={{ backgroundColor: "#f7f5f0", border: "1px solid #e5e1d8" }}>
                    <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md text-xs font-bold text-white" style={{ backgroundColor: "#0c1a33" }}>{item.icon}</span>
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
                <div className="flex flex-col sm:flex-row gap-2">
                  <Link
                    href="/contact"
                    className="flex-1 block text-center py-3 rounded-lg font-bold text-sm hover:opacity-90 transition-opacity"
                    style={{ backgroundColor: "#c9922a", color: "#fff" }}
                  >
                    フォームで無料相談
                  </Link>
                  <LineButton label="LINEで無料相談" size="lg" className="!py-3" />
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── 8. FLOW ───────────────────────────── */}
      <section className="bg-white py-24 px-4">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-3" style={{ color: "#0c1a33" }}>
              お申し込みから指導開始まで
            </h2>
            <p className="text-center text-sm mb-12" style={{ color: "#6b7280" }}>
              担当予定の講師で体験してから決められます
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
          <h2 className="text-2xl md:text-3xl font-bold text-center text-white mb-12" style={{ fontFamily: "var(--font-noto-serif)" }}>
            Medvanceはこんな方に向いています
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { label: "浪人生の方", desc: "現役時代の失敗を分析し、1年で必要な学習量を決めます", href: "/for/ronin" },
              { label: "再受験生の方", desc: "社会人・大学生からの挑戦も、予定に合わせて相談できます", href: "/for/saijuken" },
              { label: "保護者の方", desc: "毎月の進捗報告・保護者面談で、状況と今後の予定を共有します", href: "/for/parents" },
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

      {/* ── 9.5 TESTIMONIALS (data-driven, hidden until filled) ── */}
      <TestimonialsSection />

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
              各大学の出題傾向、科目別対策、面接・小論文の準備を現役慶應医学部生が解説
            </p>
          </FadeIn>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mb-6">
            {[
              { name: "慶應義塾大学医学部", badge: "最難関", desc: "思考力・論証力重視。小論文・面接の比重が高い", href: "/universities/keio" },
              { name: "東京慈恵会医科大学", badge: "難関", desc: "英語最難関レベル。慈恵の医師像への理解が重要", href: "/universities/jikei" },
              { name: "順天堂大学医学部", badge: "難関", desc: "一般選抜A方式は小論文と約20分の面接まで含めて対策", href: "/universities/juntendo" },
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
            
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-3" style={{ color: "#0c1a33" }}>
              医学部受験コラム
            </h2>
            <p className="text-center text-sm mb-12" style={{ color: "#6b7280" }}>
              現役慶應医学部生が書く、医学部受験のリアルな情報
            </p>
          </FadeIn>
          <div className="grid lg:grid-cols-[1fr_1fr] gap-6 mb-8">
            <FadeIn>
              <div className="rounded-2xl bg-white p-6" style={{ border: "1px solid #e5e1d8" }}>
                <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#c9922a" }}>
                  相談前に読める記事
                </p>
                <h3 className="text-lg font-bold mb-3" style={{ color: "#0c1a33" }}>
                  相談前に読んでおくと選びやすい記事
                </h3>
                <div className="space-y-3">
                  {homeFeaturedColumnArticles.slice(0, 4).map((article) => {
                    const thumb = getColumnThumbnail(article.slug, article.category);
                    return (
                      <Link
                        key={article.slug}
                        href={article.href}
                        className="group flex overflow-hidden rounded-xl transition-shadow hover:shadow-sm"
                        style={{ backgroundColor: "#f7f5f0", border: "1px solid #e5e1d8" }}
                      >
                        {thumb && (
                          <div className="relative w-24 flex-shrink-0 bg-[#0c1a33]">
                            <Image
                              src={thumb}
                              alt=""
                              fill
                              sizes="96px"
                              className="object-cover"
                              loading="lazy"
                            />
                            <div
                              aria-hidden
                              className="absolute inset-0"
                              style={{ background: "linear-gradient(180deg, rgba(12,26,51,0.1) 0%, rgba(12,26,51,0.4) 100%)" }}
                            />
                          </div>
                        )}
                        <div className="flex-1 min-w-0 px-4 py-3">
                          <p className="text-xs font-bold mb-1" style={{ color: "#c9922a" }}>
                            {article.category}
                          </p>
                          <p className="text-sm font-semibold leading-snug group-hover:underline" style={{ color: "#0c1a33" }}>
                            {article.title}
                          </p>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </FadeIn>

            <div className="space-y-4">
              {resolvedColumnTopicClusters.map((cluster, index) => (
                <FadeIn key={cluster.title} delay={index * 0.08}>
                  <div className="rounded-2xl bg-white p-5" style={{ border: "1px solid #e5e1d8" }}>
                    <div className="flex items-center justify-between gap-3 mb-2">
                      <h3 className="text-base font-bold" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>
                        {cluster.title}
                      </h3>
                      <Link
                        href={`/search?q=${encodeURIComponent(cluster.searchKeyword)}`}
                        className="text-xs font-semibold whitespace-nowrap"
                        style={{ color: "#c9922a" }}
                      >
                        まとめて探す
                      </Link>
                    </div>
                    <p className="text-sm leading-relaxed mb-3" style={{ color: "#6b7280" }}>
                      {cluster.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {cluster.articles.slice(0, 3).map((article) => (
                        <Link
                          key={article.slug}
                          href={article.href}
                          className="rounded-full px-3 py-2 text-xs font-semibold"
                          style={{ backgroundColor: "#f7f5f0", color: "#0c1a33", border: "1px solid #e5e1d8" }}
                        >
                          {article.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-5 mb-10">
            {[
              { tag: "勉強法", title: "医学部合格のための正しい勉強法", href: "/column/study-method" },
              { tag: "計画", title: "医学部受験ロードマップ", href: "/column/roadmap" },
              { tag: "合格分析", title: "医学部に受かる人・落ちる人の違い", href: "/column/difference" },
              { tag: "私立vs国公立", title: "私立医学部 vs 国公立医学部", href: "/column/shigaku-vs-kokuritsu" },
              { tag: "面接", title: "医学部面接対策の流れ", href: "/column/mensetu" },
              { tag: "面接時期", title: "医学部面接対策はいつから始めるべきか", href: "/column/mensetu-timing" },
              { tag: "学費", title: "私立・国公立の学費を比べる", href: "/column/gakuhi" },
              { tag: "タイミング", title: "医学部受験はいつから始めるべきか", href: "/column/juken-timing" },
              { tag: "過去問", title: "医学部受験の過去問はいつから始めるべきか", href: "/column/kakomon-timing" },
              { tag: "偏差値", title: "偏差値と医学部合格の関係", href: "/column/hensachi" },
              { tag: "再受験", title: "再受験で医学部に合格する方法", href: "/column/saijuken" },
              { tag: "塾選び", title: "医学部専門予備校の費用と面倒見を見る", href: "/column/medical-yobiko-cost" },
              { tag: "個別指導", title: "医学部受験で個別カリキュラムが必要な理由", href: "/column/ordermade-curriculum" },
              { tag: "面倒見", title: "医学部受験の塾は面倒見で選ぶ", href: "/column/support-juku-choice" },
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
              style={{ backgroundColor: "#0c1a33", border: "1px solid rgba(201,146,42,0.18)" }}
            >
              <div>
                
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3" style={{ fontFamily: "var(--font-noto-serif)" }}>
                  塾・予備校を比較検討している方へ
                </h3>
                <p className="text-sm leading-relaxed mb-5" style={{ color: "rgba(255,255,255,0.68)" }}>
                  塾選びで悩む方がよく見る内容です。先に読んでおくと、比較しやすくなります。
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    { label: "費用と面倒見を見る", href: "/column/medical-yobiko-cost" },
                    { label: "個別カリキュラムを見る", href: "/column/ordermade-curriculum" },
                    { label: "塾の面倒見を見る", href: "/column/support-juku-choice" },
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
                <p className="text-xs font-bold tracking-widest uppercase mb-2" style={{ color: "#c9922a" }}>記事を検索</p>
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

      {/* ── 13. SUBJECTS ──────────────────────── */}
      <section className="bg-white py-24 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-3" style={{ color: "#0c1a33" }}>
            各教科の指導方法
          </h2>
          <p className="text-center text-sm mb-10 max-w-2xl mx-auto" style={{ color: "#6b7280" }}>
            どの科目も同じ量を進めるのではなく、志望校の配点と現在地から、先に直す場所を決めます。
          </p>
          <FadeIn delay={0.08}>
            <div className="grid lg:grid-cols-[1fr_1fr] gap-8 items-center mb-10">
              <div className="grid sm:grid-cols-2 gap-3">
                {subjectReviewItems.map((item) => (
                  <div
                    key={item.subject}
                    className="rounded-lg p-5"
                    style={{ backgroundColor: "#f7f5f0", border: "1px solid #e5e1d8" }}
                  >
                    <p className="text-sm font-bold mb-2" style={{ color: "#0c1a33" }}>
                      {item.subject}
                    </p>
                    <p className="text-xs leading-relaxed" style={{ color: "#6b7280" }}>
                      {item.body}
                    </p>
                  </div>
                ))}
              </div>
              <HomeVisual {...homeVisuals.subjectStrategy} />
            </div>
          </FadeIn>
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
                  医学部受験マニュアル配布中
                </div>
                <h2 className="text-2xl md:text-3xl font-bold mb-3" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>
                  医学部受験マニュアル
                </h2>
                <p className="text-sm leading-relaxed mb-4" style={{ color: "#6b7280" }}>
                  科目別の勉強法、年間スケジュール、面接・小論文の始め方をまとめています。<br />
                  フォームまたはLINEから受け取れます。
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {["Chapter 01 入試の全体像", "Chapter 02 科目別の勉強法", "Chapter 03 年間スケジュール", "Chapter 04 面接・小論文", "Chapter 05 合格者の勉強例", "Chapter 06 難関校の見方"].map((ch) => (
                    <span key={ch} className="text-xs px-2.5 py-1 rounded-full" style={{ backgroundColor: "#f7f5f0", color: "#6b7280", border: "1px solid #e5e1d8" }}>
                      {ch}
                    </span>
                  ))}
                </div>
                <div className="flex flex-col sm:flex-row gap-2">
                  <Link
                    href="/contact"
                    className="inline-block px-8 py-4 text-white font-bold text-base rounded-lg shadow-md hover:opacity-90 transition-opacity"
                    style={{ backgroundColor: "#c9922a" }}
                  >
                    フォームで受け取る →
                  </Link>
                  <LineButton label="LINEで無料相談" size="lg" className="!py-4 !px-6 shadow-md" />
                </div>
                <p className="text-xs mt-2" style={{ color: "#9ca3af" }}>フォーム / LINE / 全国オンライン対応</p>
              </div>
              {/* Book mockup */}
              <div className="hidden md:block flex-shrink-0">
                <div
                  className="rounded-lg overflow-hidden shadow-2xl"
                  style={{
                    backgroundColor: "#0c1a33",
                    transform: "rotateY(-6deg) rotateX(2deg)",
                    transformStyle: "preserve-3d",
                  }}
                >
                  <div style={{ height: "3px", background: "linear-gradient(90deg, #c9922a, #e8b84b, #c9922a)" }} />
                  <div className="p-5">
                    <p className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: "#c9922a" }}>Medvance</p>
                    <p className="text-white font-bold leading-tight mb-0.5" style={{ fontSize: "1rem", fontFamily: "var(--font-noto-serif)" }}>医学部受験</p>
                    <p className="font-bold leading-tight mb-4" style={{ fontSize: "1rem", fontFamily: "var(--font-noto-serif)", color: "#e8b84b" }}>受験マニュアル</p>
                    <div style={{ height: "1px", backgroundColor: "rgba(201,146,42,0.3)", marginBottom: "12px" }} />
                    <div className="space-y-1.5 mb-4">
                      {["医学部入試の全体像", "科目別の進め方", "合格者の年間スケジュール", "面接・小論文の対策", "合格者の勉強例", "難関校の見方"].map((ch, i) => (
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

      {/* ── 13.8 RECRUIT ──────────────────────── */}
      <section className="py-20 px-4" style={{ backgroundColor: "#f7f5f0", borderTop: "1px solid #e5e1d8" }}>
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <div className="rounded-2xl overflow-hidden" style={{ border: "1px solid #e5e1d8" }}>
              <div className="grid md:grid-cols-2">
                {/* Left */}
                <div className="p-8 md:p-10" style={{ backgroundColor: "#0c1a33" }}>
                  <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#c9922a" }}>講師募集</p>
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-snug" style={{ fontFamily: "var(--font-noto-serif)" }}>
                    慶應医学部生の方、<br />講師として働きませんか？
                  </h2>
                  <p className="text-sm mb-6" style={{ color: "rgba(255,255,255,0.65)" }}>
                    あなたの合格体験・勉強法を、次の受験生の力に変えられる仕事です。
                  </p>
                  <div className="inline-block px-5 py-3 rounded-xl mb-6" style={{ backgroundColor: "rgba(201,146,42,0.15)", border: "1px solid rgba(201,146,42,0.35)" }}>
                    <p className="text-xs font-semibold mb-0.5" style={{ color: "rgba(255,255,255,0.5)" }}>時給</p>
                    <p className="text-2xl font-bold" style={{ color: "#c9922a", fontFamily: "var(--font-noto-serif)" }}>
                      3,000〜10,000円
                    </p>
                    <p className="text-xs mt-0.5" style={{ color: "rgba(255,255,255,0.5)" }}>昇給制度あり</p>
                  </div>
                  <div>
                    <Link
                      href="/recruit"
                      className="inline-block px-6 py-3 text-white font-bold text-sm rounded-lg hover:opacity-90 transition-opacity"
                      style={{ backgroundColor: "#c9922a" }}
                    >
                      講師募集の詳細を見る →
                    </Link>
                  </div>
                </div>
                {/* Right */}
                <div className="p-8 md:p-10 bg-white">
                  
                  <div className="space-y-4">
                    {[
                      { icon: "昇給", title: "実績に応じて昇給", desc: "継続年数・生徒評価・合格実績を見て時給を見直します" },
                      { icon: "時間", title: "スケジュール調整可", desc: "試験・研究の繁忙期はコマ数を調整できます" },
                      { icon: "遠隔", title: "リモート勤務可", desc: "オンライン指導で全国どこからでも勤務できます" },
                      { icon: "経験", title: "受験経験を生かせる", desc: "医学部受験の体験談・勉強法を生徒に伝える仕事です" },
                    ].map((item) => (
                      <div key={item.title} className="flex gap-3">
                        <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-md text-[11px] font-bold text-white" style={{ backgroundColor: "#0c1a33" }}>{item.icon}</span>
                        <div>
                          <p className="text-sm font-bold" style={{ color: "#0c1a33" }}>{item.title}</p>
                          <p className="text-xs" style={{ color: "#6b7280" }}>{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
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
            <p className="text-xs font-semibold tracking-widest uppercase text-center mb-4" style={{ color: "#c9922a" }}>相談・資料</p>
            <h2 className="text-2xl md:text-4xl font-bold text-white text-center mb-4 leading-snug" style={{ fontFamily: "var(--font-noto-serif)" }}>
              志望校・学年・模試結果を送れます。
            </h2>
            <p className="text-center mb-12" style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.9375rem" }}>
              フォームまたはLINEで相談できます。受講科目、授業回数、医学部受験マニュアルについて案内します。
            </p>

            {/* What you get */}
            <div className="grid sm:grid-cols-3 gap-4 mb-12">
              {[
                { num: "01", title: "学習状況", body: "模試結果、使用教材、学習時間を確認します。" },
                { num: "02", title: "受講内容", body: "受講科目、授業回数、面接・小論文対策の有無を相談できます。" },
                { num: "03", title: "マニュアル配布", body: "希望者には、医学部受験マニュアルをお送りします。" },
              ].map((item) => (
                <div key={item.num} className="p-6 rounded-xl" style={{ backgroundColor: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.12)" }}>
                  <p className="text-xs font-bold mb-2" style={{ color: "#c9922a" }}>{item.num}</p>
                  <p className="font-bold text-white text-sm mb-2">{item.title}</p>
                  <p className="text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>{item.body}</p>
                </div>
              ))}
            </div>

            <div className="text-center">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <Link
                  href="/contact"
                  className="inline-block px-10 py-5 text-white font-bold text-base rounded-lg shadow-lg hover:opacity-90 transition-opacity"
                  style={{ backgroundColor: "#c9922a" }}
                >
                  フォームで無料相談
                </Link>
                <LineButton label="LINEで無料相談" size="lg" className="!py-5 !px-8 shadow-lg" />
              </div>
              <p className="mt-4 text-xs" style={{ color: "rgba(255,255,255,0.35)" }}>
                フォーム / LINEで無料相談 / 医学部受験マニュアル配布中
              </p>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
