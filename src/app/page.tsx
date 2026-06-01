import Link from "next/link";
import Image from "next/image";
import HeroAnimated from "@/components/HeroAnimated";
import Marquee from "@/components/Marquee";
import FadeIn from "@/components/FadeIn";
import HoverCard from "@/components/HoverCard";
import LineButton from "@/components/LineButton";
import PentagonMethod from "@/components/PentagonMethod";
import ScientificCTABanner from "@/components/ScientificCTABanner";
import {
  homeFeaturedColumnArticles,
  resolvedColumnTopicClusters,
} from "@/lib/columnArticles";
import { getColumnThumbnail } from "@/lib/columnThumbnails";
import { buildItemListSchema, buildFaqSchema, buildSpeakableSchema } from "@/lib/seo";

export const metadata = {
  title: "医学部受験専門塾 Medvance｜慶應医学部生が完全1対1・全国オンライン対応",
  description: "現役慶應医学部生による完全1対1の医学部受験専門塾・家庭教師型指導。慶應医学部に受かるには何が必要か、面接対策はいつから始めるべきかまで解説。オンラインで全国どこからでも受講可能。",
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
  { icon: <IconPerson />, title: "完全1対1指導", body: "集団授業・映像授業は一切なし。担当講師が毎回の授業を直接指導し、理解度に応じて進度を調整します。" },
  { icon: <IconAcademic />, title: "講師は全員、現役慶應医学部生", body: "東大模試上位経験者、多浪から合格した講師、地方公立出身者など、タイプの異なる講師の中から生徒に合う1人をマッチングします。" },
  { icon: <IconBook />, title: "医学部入試に限定した指導", body: "英数理に加え、小論文・面接・MMI・出願書類まで、同じ担当講師が見ます。医学部以外の受験指導は行いません。" },
  { icon: <IconClipboard />, title: "週単位で組む学習計画", body: "使う問題集、1週間のノルマ、模試ごとの目標点を志望校から逆算して決めます。計画は毎週見直します。" },
  { icon: <IconLightbulb />, title: "合格者本人の勉強法を伝える", body: "どの時期に何を解き、どこでつまずき、どう乗り越えたか。合格者が自分の経験として答えられる形で指導します。" },
  { icon: <IconGlobe />, title: "オンライン・対面の両対応", body: "全国どこからでもオンラインで受講可能。関東圏であれば対面指導（自宅・カフェ・学習スペース）にも対応します。" },
];

const strengths = [
  { num: "01", title: "講師は全員、慶應医学部の現役生", body: "自分が1〜2年前に実際に受けた試験について、科目別の時間配分や当日の緊張への対処まで、経験として話せる講師だけが指導します。合格者の思考プロセスを、大学受験産業を通さず直接生徒に伝える形です。" },
  { num: "02", title: "1日単位の学習計画を組む", body: "使う問題集、どの範囲をいつまでに終わらせるか、模試ごとの目標点まで、志望校から逆算して決めます。毎週の進捗を確認し、遅れが出た時点で計画を組み直します。" },
  { num: "03", title: "医学部受験のための指導に限定", body: "英数理だけでなく、小論文・面接・MMI・出願書類まで、同じ担当講師が見ます。大学別の傾向（例：慶應の理科2科目、慈恵の英語、MMI導入校）まで踏まえた指導が可能です。" },
];

const steps = [
  { title: "無料カウンセリング", body: "フォームからご連絡ください。学力・志望校・悩みをヒアリングします。" },
  { title: "最適な講師をご提案", body: "相性・志望校・科目を考慮し、現役慶應医学部生から最適な講師を選定。" },
  { title: "体験授業（90分）", body: "担当予定の講師による90分の体験授業を実施。相性を確認したうえで本契約へ。" },
  { title: "本契約・指導スタート", body: "完全1対1の本格指導がスタート。合格まで継続的にサポートします。" },
];

const faqs = [
  { q: "どんな生徒が対象ですか？", a: "現役生・浪人生・再受験生すべてに対応しています。学力や年齢を問わず、医学部合格を目指す方であればどなたでもお申し込みいただけます。" },
  { q: "どんな学力からでも医学部に合格できますか？", a: "現在の偏差値よりも、そこから残り何ヶ月でどれだけ積み上げられるかで決まります。高3春に偏差値50台から1年で私立医学部に合格した事例、浪人1年で国公立医学部に届いた事例もあります。無料相談で残り期間と志望校の距離を確認してから判断してください。" },
  { q: "料金はどのくらいかかりますか？", a: "授業は1コマ45分 7,500円（1回の授業90分 = 15,000円）＋コーチング月20,000円のシンプルな構成です。週1回コース［月4回（8コマ）］で月額8万円、週2回コース［月8回（16コマ）］で月額14万円、週3回〜コース［月12回（24コマ）以上］で月額20万円〜（割引あり）となります。入塾金は初回のみ2万円です。" },
  { q: "受講場所はどこになりますか？", a: "オンライン・自宅訪問（関東圏）・カフェ・レンタル学習スペースなど、ご希望の場所に対応しています。オンラインなら全国どこからでも受講可能です。" },
  { q: "体験授業はありますか？", a: "希望があれば、担当予定の講師による体験授業（1回90分）を実施しています。相性や指導の質をご確認いただいてから本契約に進めます。" },
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
  { label: "医学部受験の家庭教師を探したい", href: "/igakubu-kateikyoushi", desc: "現役医学部生の1対1指導、オンライン・訪問、料金、保護者共有まで" },
  { label: "慶應医学部に受かるには", href: "/universities/keio", desc: "科目別配点、小論文、面接、出願戦略まで" },
  { label: "MMI面接の対策方法を知りたい", href: "/column/mmi-taisaku", desc: "頻出テーマ、大学別傾向、練習の始め方" },
  { label: "医学部受験は夏から間に合う？", href: "/column/natsu-manikiai", desc: "高3・浪人生それぞれの夏以降の使い方" },
  { label: "私立医学部の学費を比較したい", href: "/column/gakuhi", desc: "私立30校・国公立との6年間総額の比較" },
  { label: "無料相談で受験戦略を立てたい", href: "/contact?from=home-search-hub", desc: "志望校・現在地・残り期間から、30分で次の一手をお伝えします" },
  { label: "保護者向けの情報を知りたい", href: "/for/parents", desc: "費用、保護者面談、成績報告、講師変更制度" },
];

const decisionLinks = [
  {
    tag: "相談",
    title: "無料相談で相性を確かめる",
    desc: "現在の学力、志望校、残り期間から、次にやるべきことをその場でお伝えします。",
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
    desc: "月々の費用、月1回の保護者面談、成績報告、講師の変更制度まで解説します。",
    href: "/for/parents",
  },
];

const idealForItems = [
  "医学部受験に詳しい家庭教師を探しているが、誰に任せるべきか判断できない",
  "予備校に通っているのに、模試の偏差値が半年変わっていない",
  "英数理のどこを先に仕上げるべきか、自分で判断できない",
  "面接・小論文・出願書類をどう準備するか決まっていない",
  "今のやり方で志望校に届くのか、正直に判断してほしい",
];

const consultationBenefits = [
  "現在の学力と志望校の差を、科目別に数値で整理します",
  "この1週間・1ヶ月で優先すべき科目と問題集を具体的に提案します",
  "授業頻度・担当講師・面接対策・出願まで、何をどう進めるか説明します",
];

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

/* ── Local-rewrite carry-over data ─────────── */
const serviceItems = [
  { title: "1対1個別指導", body: "英語、数学、物理、化学、生物を、医学部受験の得点に直結する形で指導します。" },
  { title: "週次学習計画", body: "授業、自習、復習、確認テスト、過去問演習を1週間単位で具体化します。" },
  { title: "模試・答案分析", body: "偏差値だけでなく、失点単元、答案の癖、時間配分から次の打ち手を決めます。" },
  { title: "国公立医学部対策", body: "共通テストと二次試験の配点を軸に、科目ごとの優先順位を調整します。" },
  { title: "私立医学部対策", body: "大学別の出題傾向、科目相性、日程、面接小論文まで含めて受験校を組みます。" },
  { title: "保護者共有", body: "進捗、課題、志望校判断、指導投資の優先順位を保護者にも共有します。" },
];

const strategyItems = [
  { label: "国公立", title: "国公立医学部", body: "共通テストの得点設計、二次試験の記述力、面接対策まで。科目数が多い国公立医学部では、捨てる範囲と伸ばす範囲の判断が重要です。", href: "/universities/national?from=home-strategy" },
  { label: "私立", title: "私立医学部", body: "大学ごとの科目相性、日程、学費、面接小論文、補欠可能性まで。複数校受験を前提に、受験校ポートフォリオを設計します。", href: "/private-medical-strategy?from=home-strategy" },
  { label: "予備校と併用", title: "予備校併用", body: "大手予備校の授業を否定せず、授業後の復習、質問対応、志望校別演習、保護者共有を補完します。", href: "/for/prep-school-plus?from=home-strategy" },
];

const differenceItems = [
  { title: "大手予備校", points: ["講義と教材は強いが、授業後の復習は本人任せになりやすい", "国公立・私立の個別出願戦略まで細かく見えにくい", "保護者が日々の実行状況を把握しづらい"] },
  { title: "一般的な個別指導", points: ["分からない問題の解説で終わりやすい", "受験校設計、模試分析、保護者共有が分断されやすい", "医学部特有の面接小論文まで一体管理しづらい"] },
  { title: "Medvance", points: ["医学部合格から逆算して、授業・自習・復習日を毎週設計する", "国公立・私立の志望校別に、科目配分と出願戦略を調整する", "保護者に進捗・課題・次の判断材料を共有する"] },
];

const flowItemsLocal = [
  { step: "01", title: "現状入力", body: "学年、模試結果、現在の塾・予備校、志望校、学習時間、保護者同席可否を確認します。" },
  { step: "02", title: "合格戦略診断", body: "国公立・私立の志望に合わせて、科目別優先順位と必要な指導体制を整理します。" },
  { step: "03", title: "プラン提案", body: "1対1指導の科目、頻度、週次管理、面接小論文、保護者共有の範囲を決めます。" },
  { step: "04", title: "伴走開始", body: "毎週の学習計画、個別指導、模試分析、志望校戦略の更新を継続します。" },
];

const faqItemsLocal = [
  { q: "国公立医学部にも対応していますか？", a: "します。共通テスト・二次試験の配点比率、科目ごとの演習量配分、面接傾向まで、志望校に合わせて設計します。" },
  { q: "私立医学部の複数校受験も相談できますか？", a: "できます。出願スケジュール、科目相性、面接負荷のバランスを踏まえ、合格可能性の高い受験校を一緒に選びます。" },
  { q: "大手予備校に通いながら受講できますか？", a: "問題ありません。週次の復習状況を確認しながら、弱点補強・志望校別演習・質問対応を担います。" },
  { q: "保護者も面談に参加できますか？", a: "推奨しています。受験校の選定・学費・追加投資の判断は保護者と一緒に行う方が適切なため、初回から同席をお願いしています。" },
];

function SectionHeading({
  eyebrow,
  title,
  body,
  align = "center",
}: {
  eyebrow: string;
  title: string;
  body?: string;
  align?: "center" | "left";
}) {
  return (
    <div className={align === "center" ? "mx-auto mb-10 max-w-3xl text-center" : "mb-8 max-w-2xl"}>
      <p className="mb-3 text-xs font-bold tracking-widest" style={{ color: "#c9922a" }}>
        {eyebrow}
      </p>
      <h2
        className="text-2xl font-bold leading-snug md:text-3xl"
        style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}
      >
        {title}
      </h2>
      {body && (
        <p className="mt-4 text-sm leading-relaxed" style={{ color: "#5f6b7a" }}>
          {body}
        </p>
      )}
    </div>
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

      {/* ── 2. STATS STRIP ────────────────────── */}
      <section className="bg-white py-10 px-4" style={{ borderBottom: "1px solid #e5e1d8" }}>
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { label: "完全1対1指導", sub: "集団授業は一切なし" },
            { label: "現役慶應医学部生", sub: "100%現役在籍が指導" },
            { label: "全国オンライン対応", sub: "海外からも受講可" },
            { label: "30分・無料診断", sub: "勧誘なし" },
          ].map((s) => (
            <div key={s.sub}>
              <p className="text-lg md:text-xl font-bold mb-0.5" style={{ color: "#c9922a", fontFamily: "var(--font-noto-serif)" }}>{s.label}</p>
              <p className="text-sm md:text-base font-semibold" style={{ color: "#0c1a33" }}>{s.sub}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── 2.1 PAIN POINTS SECTION (🤖 ULTRA-PREMIUM CRAFTED MARKETING COMPONENT) ── */}
      <section className="relative overflow-hidden bg-[#faf9f6] py-24 px-4 border-b" style={{ borderColor: "#e5e1d8" }}>
        {/* Decorative Grid Mesh & Light Effects */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: "radial-gradient(#0c1a33 1px, transparent 1px)", backgroundSize: "20px 20px" }} />
        <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-amber-100/30 blur-[120px] pointer-events-none" />
        <div className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full bg-blue-100/30 blur-[120px] pointer-events-none" />

        <div className="relative mx-auto max-w-6xl z-10">
          {/* Header */}
          <div className="mb-20 text-center">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full mb-4 text-xs font-bold uppercase tracking-widest" style={{ backgroundColor: "rgba(201,146,42,0.08)", color: "#c9922a", border: "1px solid rgba(201,146,42,0.2)" }}>
              <span>PAIN & EMPATHY</span>
            </div>
            <h2 
              className="text-3xl md:text-5xl font-bold mb-5 tracking-tight"
              style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)", fontSize: "2.5rem" }}
            >
              こんなお悩みありませんか？
            </h2>
            <div className="w-12 h-1 bg-[#c9922a] mx-auto mb-5 rounded-full" />
            <p className="text-sm md:text-base font-semibold leading-relaxed" style={{ color: "#5f6b7a" }}>
              医学部受験を勝ち抜いた勉強のプロフェッショナルが、お子様の日々の葛藤に徹底的に寄り添います
            </p>
          </div>

          {/* Interactive Layout */}
          <div className="relative mx-auto max-w-5.5xl">
            
            {/* DESKTOP LAYOUT (Highly crafted grid with surrounding visual connectors) */}
            <div className="hidden lg:grid grid-cols-[1.1fr_0.8fr_1.1fr] gap-6 items-center relative">
              
              {/* Left Column (Cards 1 & 3) */}
              <div className="space-y-8 relative z-20">
                {/* Card 1 */}
                <div className="group p-6 bg-white/90 backdrop-blur-md rounded-2xl border transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_-15px_rgba(12,26,51,0.08)]" style={{ borderColor: "#e5e1d8" }}>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-2xl flex items-center justify-center bg-sky-50 text-sky-600 border border-sky-100 transition-colors group-hover:bg-[#0c1a33] group-hover:text-white group-hover:border-[#0c1a33]">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
                      </svg>
                    </div>
                    <div className="text-left">
                      <span className="block text-[10px] font-bold tracking-widest mb-1.5" style={{ color: "#c9922a" }}>CASE 01 / 成績と偏差値</span>
                      <h3 className="font-bold text-base mb-1" style={{ color: "#0c1a33" }}>いい成績を取って医学部へ進学したい</h3>
                      <p className="text-xs text-gray-500 font-semibold mb-3">努力が空回りしていませんか？</p>
                      <p className="text-[12px] leading-relaxed text-gray-400">
                        「勉強時間は長いのに偏差値が頭打ちになっている」「今の計画のままで本当に合格圏に届くのか不安」という焦りに、確実な合格マップを設計します。
                      </p>
                    </div>
                  </div>
                </div>

                {/* Card 3 */}
                <div className="group p-6 bg-white/90 backdrop-blur-md rounded-2xl border transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_-15px_rgba(12,26,51,0.08)]" style={{ borderColor: "#e5e1d8" }}>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-2xl flex items-center justify-center bg-indigo-50 text-indigo-600 border border-indigo-100 transition-colors group-hover:bg-[#0c1a33] group-hover:text-white group-hover:border-[#0c1a33]">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" />
                      </svg>
                    </div>
                    <div className="text-left">
                      <span className="block text-[10px] font-bold tracking-widest mb-1.5" style={{ color: "#c9922a" }}>CASE 03 / 内部進学・附属校</span>
                      <h3 className="font-bold text-base mb-1" style={{ color: "#0c1a33" }}>内部での進級をサポートしてほしい</h3>
                      <p className="text-xs text-gray-500 font-semibold mb-3">独自の推薦枠を確実に勝ち取るために</p>
                      <p className="text-[12px] leading-relaxed text-gray-400">
                        「医学部推薦枠の評定基準が高く、日々の小テスト対策に追われている」「定期試験の傾向が特殊すぎる」という附属校生に、各校の過去データから徹底対策。
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Center Column (Worried Family circular photo with premium styling) */}
              <div className="relative flex flex-col items-center justify-center z-10 py-12">
                {/* Glowing neon background circles */}
                <div className="absolute w-72 h-72 rounded-full border border-dashed animate-spin-slow opacity-25 pointer-events-none -z-10" style={{ borderColor: "#c9922a", animationDuration: "40s" }} />
                <div className="absolute w-80 h-80 rounded-full border border-[#e5e1d8] opacity-20 pointer-events-none -z-10" />
                
                {/* Soft backdrop glow */}
                <div className="absolute inset-0 bg-radial-gradient from-amber-100/60 via-transparent to-transparent blur-2xl -z-20 pointer-events-none scale-125" />
                
                {/* Main circular frame */}
                <div className="relative p-2.5 rounded-full bg-white border border-[#e5e1d8] shadow-2xl">
                  <div className="w-[240px] h-[240px] overflow-hidden rounded-full border-4" style={{ borderColor: "#faf9f6" }}>
                    <img 
                      src="/images/generated/japanese_family_worried.png" 
                      alt="医学部受験の進路や学習量について相談している日本人の親子"
                      className="w-full h-full object-cover scale-[1.05]"
                    />
                  </div>
                  {/* Small floating badge overlay */}
                  <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-4.5 py-1.5 rounded-full bg-[#0c1a33] text-white text-[11px] font-bold shadow-md border" style={{ borderColor: "#c9922a", whiteSpace: "nowrap" }}>
                    <span>医学部受験における家庭の葛藤</span>
                  </div>
                </div>
              </div>

              {/* Right Column (Cards 2 & 4) */}
              <div className="space-y-8 relative z-20">
                {/* Card 2 */}
                <div className="group p-6 bg-white/90 backdrop-blur-md rounded-2xl border transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_-15px_rgba(12,26,51,0.08)]" style={{ borderColor: "#e5e1d8" }}>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-2xl flex items-center justify-center bg-blue-50 text-blue-600 border border-blue-100 transition-colors group-hover:bg-[#0c1a33] group-hover:text-white group-hover:border-[#0c1a33]">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                      </svg>
                    </div>
                    <div className="text-left">
                      <span className="block text-[10px] font-bold tracking-widest mb-1.5" style={{ color: "#c9922a" }}>CASE 02 / 指導者の質</span>
                      <h3 className="font-bold text-base mb-1" style={{ color: "#0c1a33" }}>日本トップレベルの講師に指導されたい</h3>
                      <p className="text-xs text-gray-500 font-semibold mb-3">誰に教わるかで結果は変わります</p>
                      <p className="text-[12px] leading-relaxed text-gray-400">
                        「質問ブースの行列で貴重な自習時間が潰れている」「本物の合格者の思考プロセスを直接学びたい」という声に応え、現役慶應医学部生が完全1対1で伴走します。
                      </p>
                    </div>
                  </div>
                </div>

                {/* Card 4 */}
                <div className="group p-6 bg-white/90 backdrop-blur-md rounded-2xl border transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_-15px_rgba(12,26,51,0.08)]" style={{ borderColor: "#e5e1d8" }}>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-2xl flex items-center justify-center bg-emerald-50 text-emerald-600 border border-emerald-100 transition-colors group-hover:bg-[#0c1a33] group-hover:text-white group-hover:border-[#0c1a33]">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.109A12.018 12.018 0 0 1 12 21.25c-1.11 0-2.18-.15-3.2-.435v-.109m0-1.58c0-1.113-.285-2.16-.786-3.07M9 17.613a4.125 4.125 0 1 1 7.533-2.493M9 17.613v-.003c0-1.113-.285-2.16-.786-3.07M9 17.613v.109A12.018 12.018 0 0 1 6 21.25c-1.11 0-2.18-.15-3.2-.435v-.109m0-1.58c0-1.113-.285-2.16-.786-3.07m0 0a2.184 2.184 0 0 1 .284-1.253M9 11.25a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
                      </svg>
                    </div>
                    <div className="text-left">
                      <span className="block text-[10px] font-bold tracking-widest mb-1.5" style={{ color: "#c9922a" }}>CASE 04 / モチベーション</span>
                      <h3 className="font-bold text-base mb-1" style={{ color: "#0c1a33" }}>息子や娘のロールモデルが欲しい</h3>
                      <p className="text-xs text-gray-500 font-semibold mb-3">親の言葉より、憧れの先輩の背中</p>
                      <p className="text-[12px] leading-relaxed text-gray-400">
                        「親が言うと反発するが、憧れの現役慶應医学部生の言葉なら素直に聞き入れる」。モチベーションを高め、主体的に机に向かう自立性を引き出します。
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* MOBILE & TABLET LAYOUT (Sleek stack layout) */}
            <div className="lg:hidden flex flex-col items-center gap-8">
              {/* Centered worried family image */}
              <div className="relative">
                {/* Glowing neon bg */}
                <div className="absolute inset-0 bg-radial-gradient from-amber-100/50 to-transparent blur-xl -z-10 scale-110 pointer-events-none" />
                <div className="p-1.5 rounded-full bg-white border border-[#e5e1d8] shadow-lg">
                  <div className="w-[180px] h-[180px] overflow-hidden rounded-full border-2" style={{ borderColor: "#faf9f6" }}>
                    <img 
                      src="/images/generated/japanese_family_worried.png" 
                      alt="医学部受験の進路や計画について少し悩んでいる日本人のご家族"
                      className="w-full h-full object-cover scale-105"
                    />
                  </div>
                </div>
              </div>

              {/* Cards Grid */}
              <div className="grid gap-6 sm:grid-cols-2 w-full max-w-2xl">
                {/* Card 1 */}
                <div className="p-6 bg-white rounded-2xl border" style={{ borderColor: "#e5e1d8" }}>
                  <div className="flex gap-4 items-start text-left">
                    <div className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center bg-sky-50 text-sky-600 border border-sky-100">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
                      </svg>
                    </div>
                    <div>
                      <span className="block text-[9px] font-bold tracking-widest mb-1" style={{ color: "#c9922a" }}>CASE 01 / 成績と偏差値</span>
                      <h3 className="font-bold text-sm mb-1.5" style={{ color: "#0c1a33" }}>いい成績を取って医学部へ進学したい</h3>
                      <p className="text-[12px] leading-relaxed text-gray-500">「勉強時間は長いのに偏差値が伸びない」「今の計画で医学部に届くのか不安」という焦りに、確実な合格プランを設計します。</p>
                    </div>
                  </div>
                </div>

                {/* Card 2 */}
                <div className="p-6 bg-white rounded-2xl border" style={{ borderColor: "#e5e1d8" }}>
                  <div className="flex gap-4 items-start text-left">
                    <div className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center bg-blue-50 text-blue-600 border border-blue-100">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                      </svg>
                    </div>
                    <div>
                      <span className="block text-[9px] font-bold tracking-widest mb-1" style={{ color: "#c9922a" }}>CASE 02 / 指導者の質</span>
                      <h3 className="font-bold text-sm mb-1.5" style={{ color: "#0c1a33" }}>日本トップレベルの講師に指導されたい</h3>
                      <p className="text-[12px] leading-relaxed text-gray-500">「質問ブースの行列で貴重な自習時間が潰れている」「本物の合格者の思考プロセスに直接学びたい」という声に応え、現役慶應医学部生が伴走します。</p>
                    </div>
                  </div>
                </div>

                {/* Card 3 */}
                <div className="p-6 bg-white rounded-2xl border" style={{ borderColor: "#e5e1d8" }}>
                  <div className="flex gap-4 items-start text-left">
                    <div className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center bg-indigo-50 text-indigo-600 border border-indigo-100">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" />
                      </svg>
                    </div>
                    <div>
                      <span className="block text-[9px] font-bold tracking-widest mb-1" style={{ color: "#c9922a" }}>CASE 03 / 内部進学・附属校</span>
                      <h3 className="font-bold text-sm mb-1.5" style={{ color: "#0c1a33" }}>内部での進級をサポートしてほしい</h3>
                      <p className="text-[12px] leading-relaxed text-gray-500">「医学部推薦枠の評定基準が高く、日々のテスト対策に焦っている」「定期試験の傾向が特殊すぎる」という附属校生に、各校の過去データから徹底対策。</p>
                    </div>
                  </div>
                </div>

                {/* Card 4 */}
                <div className="p-6 bg-white rounded-2xl border" style={{ borderColor: "#e5e1d8" }}>
                  <div className="flex gap-4 items-start text-left">
                    <div className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center bg-emerald-50 text-emerald-600 border border-emerald-100">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.109A12.018 12.018 0 0 1 12 21.25c-1.11 0-2.18-.15-3.2-.435v-.109m0-1.58c0-1.113-.285-2.16-.786-3.07M9 17.613a4.125 4.125 0 1 1 7.533-2.493M9 17.613v-.003c0-1.113-.285-2.16-.786-3.07M9 17.613v.109A12.018 12.018 0 0 1 6 21.25c-1.11 0-2.18-.15-3.2-.435v-.109m0-1.58c0-1.113-.285-2.16-.786-3.07m0 0a2.184 2.184 0 0 1 .284-1.253M9 11.25a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
                      </svg>
                    </div>
                    <div>
                      <span className="block text-[9px] font-bold tracking-widest mb-1" style={{ color: "#c9922a" }}>CASE 04 / モチベーション</span>
                      <h3 className="font-bold text-sm mb-1.5" style={{ color: "#0c1a33" }}>息子や娘のロールモデルが欲しい</h3>
                      <p className="text-[12px] leading-relaxed text-gray-500">「親が言っても反発するが、現役慶應医学部生の言葉なら素直に聞く」。受験生の志を高め、自律的な学習姿勢を引き出します。</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Support Banner (Premium Glassmorphic Dashboard block) */}
            <div className="mt-16 p-8 md:p-10 rounded-3xl text-left shadow-xl border relative overflow-hidden bg-gradient-to-br from-[#060b13] via-[#0c1a33] to-[#04080f]" style={{ borderColor: "rgba(201,146,42,0.2)" }}>
              <div className="absolute inset-0 opacity-[0.04] pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />
              <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center justify-between">
                <div className="max-w-2xl text-left">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-4 text-[10px] font-bold uppercase tracking-wider text-amber-400" style={{ backgroundColor: "rgba(201,146,42,0.15)", border: "1px solid rgba(201,146,42,0.3)" }}>
                    <span>💡 無料・医学部合格戦略診断</span>
                  </div>
                  <h4 className="text-xl md:text-2xl font-bold text-white mb-3" style={{ fontFamily: "var(--font-noto-serif)" }}>
                    どんな小さなお悩みでも構いません。<br className="hidden sm:block" />
                    ご家庭の現在のボトルネックを客観的に特定します。
                  </h4>
                  <p className="text-xs md:text-sm text-gray-300 leading-relaxed">
                    現在の模試偏差値、志望大学の候補、勉強の習慣をお伺いし、合格に必要なロードマップと15分単位の計画の作り方をその場でお伝えします。無理な勧誘は一切ありません。
                  </p>
                </div>
                
                <div className="flex-shrink-0 w-full md:w-auto">
                  <Link 
                    href="/contact?from=home-pain-banner" 
                    className="w-full md:w-auto inline-flex items-center justify-center rounded-xl px-8 py-4.5 text-sm font-bold tracking-wide shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_25px_rgba(201,146,42,0.35)]"
                    style={{ backgroundColor: "#c9922a", color: "#060b13" }}
                  >
                    合格戦略診断を申し込む（無料） →
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
      {/* ── 2.2 FOUNDER STORY ─────────────────── */}
      <section className="bg-white py-24 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid items-center gap-12 lg:grid-cols-[0.82fr_1.18fr]">
            <FadeIn>
              <figure className="mx-auto w-full max-w-[340px] lg:mx-0">
                <div className="relative">
                  <span
                    aria-hidden
                    className="absolute -bottom-3 -right-3 hidden h-full w-full rounded-2xl lg:block"
                    style={{ border: "1px solid #c9922a" }}
                  />
                  <div
                    className="relative overflow-hidden rounded-2xl"
                    style={{ border: "1px solid #e5e1d8", boxShadow: "0 18px 40px -22px rgba(12,26,51,0.45)" }}
                  >
                    <Image
                      src="/images/founder-formal.webp"
                      alt="Medvance代表（慶應義塾大学医学部 在籍）"
                      width={720}
                      height={900}
                      className="h-auto w-full"
                    />
                  </div>
                </div>
                <figcaption className="mt-4 text-center lg:text-left">
                  <span className="text-xs font-bold tracking-widest" style={{ color: "#c9922a" }}>
                    MEDVANCE 代表
                  </span>
                  <span className="mt-1 block text-sm font-bold" style={{ color: "#0c1a33" }}>
                    慶應義塾大学医学部 在籍
                  </span>
                </figcaption>
              </figure>
            </FadeIn>
            <FadeIn delay={0.08}>
              <div>
                <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#c9922a" }}>
                  Our Story
                </p>
                <h2 className="text-2xl md:text-3xl font-bold mb-5" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>
                  Medvanceが生まれた理由
                </h2>
                <div className="space-y-4 text-sm md:text-base leading-relaxed" style={{ color: "#6b7280" }}>
                  <p>
                    Medvanceは、現役の慶應義塾大学医学部生である代表が立ち上げた医学部受験専門塾です。代表自身、自らの医学部入試で、受験したすべての医学部に合格しました。
                  </p>
                  <p>
                    合否を分けたのは、生まれ持った才能ではありませんでした。何を・いつ・どの順番で進めるかという<strong style={{ color: "#0c1a33" }}>受験戦略</strong>と、合格者だからこそ確立できた<strong style={{ color: "#0c1a33" }}>勉強法</strong>。Medvanceは、この実体験そのものから生まれています。
                  </p>
                  <p>
                    一方で、医学部受験の確かな情報や戦略は、いまだ十分にオープンになっていません。医学部に合格した人による再現性のある戦略を、医学部を志すすべての受験生へ届けたい——その想いから、現役医学部生が教える医学部受験塾Medvanceは生まれました。
                  </p>
                   <div className="pt-2">
                    <div className="p-3.5 rounded-xl border text-xs" style={{ backgroundColor: "#f7f5f0", borderColor: "#e5e1d8", color: "#5f6b7a" }}>
                      <strong style={{ color: "#0c1a33" }}>管理本部（銀座オフィス）所在地:</strong><br />
                      〒104-0061 東京都中央区銀座1丁目12番4号<br />
                      <span style={{ fontSize: "10px", color: "#8fa0b5" }}>※こちらは管理本部オフィスのため、常設校舎としての対面授業等は行っておりません（指導はオンラインおよび各所での個別指導となります）。</span>
                    </div>
                  </div>
                </div>
                <Link
                  href="/about?from=home-story"
                  className="mt-7 inline-flex items-center gap-2 rounded-lg px-7 py-3.5 text-sm font-bold text-white transition-opacity hover:opacity-90"
                  style={{ backgroundColor: "#0c1a33" }}
                >
                  Medvanceとは？
                  <span aria-hidden>→</span>
                </Link>
              </div>
            </FadeIn>
          </div>
          <div className="mt-14 grid gap-4 sm:grid-cols-3">
            {[
              { k: "原点", v: "現役の慶應義塾大学医学部生が設立" },
              { k: "実績", v: "受験したすべての医学部に全勝合格" },
              { k: "信念", v: "才能ではなく、再現できる戦略と勉強法" },
            ].map((item, index) => (
              <FadeIn key={item.k} delay={index * 0.05}>
                <div className="h-full rounded-2xl p-6" style={{ backgroundColor: "#f7f5f0", border: "1px solid #e5e1d8" }}>
                  <p className="mb-2 text-xs font-bold tracking-widest" style={{ color: "#c9922a" }}>
                    {item.k}
                  </p>
                  <p className="text-sm font-bold leading-relaxed" style={{ color: "#0c1a33" }}>
                    {item.v}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── 2.3 MEDVANCE STUDY METHOD (Medvance式勉強法) ─────────── */}
      <PentagonMethod />

      {/* ── 2.4 SCIENTIFIC METHOD CTA BANNER ──────────────────── */}
      <ScientificCTABanner />

      {/* ── 2.5 SEARCH INTENT HUB ─────────────── */}
      <section style={{ backgroundColor: "#f7f5f0" }} className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <div className="text-center mb-10">
              
              <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>
                慶應医学部に合格した現役生が、直接指導します
              </h2>
              <p className="text-sm max-w-3xl mx-auto leading-relaxed" style={{ color: "#6b7280" }}>
                英語・数学・理科の指導だけでなく、小論文・面接・出願書類まで、医学部入試で必要なものをすべて1人の担当講師が見ます。
                受験本番で何が問われるかを知っている慶應医学部の現役生が、あなたの志望校と現在地に合わせた学習計画を組みます。
              </p>
            </div>
          </FadeIn>
          <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-6">
            <FadeIn>
              <div className="rounded-2xl bg-white p-7 md:p-8 h-full" style={{ border: "1px solid #e5e1d8" }}>
                <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#c9922a" }}>こんな受験生へ</p>
                <h3 className="text-xl font-bold mb-4" style={{ color: "#0c1a33" }}>
                  こんな受験生によく選ばれています
                </h3>
                <div className="space-y-3">
                  {idealForItems.map((item, index) => (
                    <div key={item} className="flex items-start gap-3">
                      <span
                        className="mt-0.5 inline-flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full text-xs font-bold"
                        style={{ backgroundColor: "rgba(201,146,42,0.12)", color: "#c9922a" }}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <p className="text-sm leading-relaxed" style={{ color: "#4b5563" }}>
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.08}>
              <div
                className="rounded-2xl p-7 md:p-8 h-full"
                style={{ backgroundColor: "#0c1a33", border: "1px solid rgba(201,146,42,0.18)" }}
              >
                <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#c9922a" }}>無料相談</p>
                <h3 className="text-xl font-bold text-white mb-4">
                  無料相談で分かること
                </h3>
                <div className="space-y-3 mb-6">
                  {consultationBenefits.map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <span
                        className="mt-0.5 inline-flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full text-xs font-bold"
                        style={{ backgroundColor: "rgba(201,146,42,0.16)", color: "#c9922a" }}
                      >
                        ✓
                      </span>
                      <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.76)" }}>
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    href="/contact?from=home-trust-entry"
                    className="inline-flex items-center justify-center px-6 py-3 rounded-xl font-bold text-sm hover:opacity-90 transition-opacity"
                    style={{ backgroundColor: "#c9922a", color: "#fff" }}
                  >
                    無料相談で話してみる
                  </Link>
                  <LineButton label="LINEで相談" size="lg" className="!rounded-xl !py-3 !px-6" />
                  <Link
                    href="/pricing"
                    className="inline-flex items-center justify-center px-6 py-3 rounded-xl font-bold text-sm hover:opacity-90 transition-opacity"
                    style={{ backgroundColor: "rgba(255,255,255,0.1)", color: "#fff", border: "1px solid rgba(255,255,255,0.18)" }}
                  >
                    料金を見る
                  </Link>
                </div>
                <p className="text-xs mt-4" style={{ color: "rgba(255,255,255,0.42)" }}>
                  入会を前提にした営業は行いません。相談のみで終わって問題ありません。
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="bg-white py-14 px-4" style={{ borderBottom: "1px solid #e5e1d8" }}>
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <div className="text-center mb-10">
              <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#c9922a" }}>よくある検索</p>
              <h2 className="text-2xl md:text-3xl font-bold mb-3" style={{ color: "#0c1a33" }}>
                よく検索される悩みから探す
              </h2>
              <p className="text-sm" style={{ color: "#6b7280" }}>
                医学部受験を考える方がよく調べるテーマを、すぐ読める形でまとめました。
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


      {/* ── MARQUEE ───────────────────────────── */}
      <Marquee />

      {/* ── 3. THREE STRENGTHS ────────────────── */}
      <section style={{ backgroundColor: "#f7f5f0" }} className="py-24 px-4">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-14" style={{ color: "#0c1a33" }}>
              医学部受験専門塾Medvanceが選ばれる3つの理由
            </h2>
          </FadeIn>
          <div className="grid md:grid-cols-3 gap-6">
            {strengths.map((item, i) => (
              <FadeIn key={item.num} delay={i * 0.1}>
                <HoverCard className="bg-white rounded-2xl p-8 shadow-sm h-full" style={{ border: "1px solid #e5e1d8" }}>
                  <p className="text-6xl font-bold mb-4 leading-none" style={{ color: "#0c1a33", opacity: 0.07, fontFamily: "var(--font-noto-serif)" }}>{item.num}</p>
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
            
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-3" style={{ color: "#0c1a33" }}>
              比較検討でよく見られるページ
            </h2>
            <p className="text-center text-sm mb-12 max-w-2xl mx-auto" style={{ color: "#6b7280" }}>
              申し込み前に、塾の雰囲気・料金・指導方針を確認いただけます。保護者の方は、費用と指導体制のページからご覧ください。
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
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
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
              <LineButton label="LINEで相談する" size="lg" className="!px-7 !py-3" />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── 4. COMPARISON TABLE ───────────────── */}
      <section className="bg-white py-24 px-4">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-4" style={{ color: "#0c1a33" }}>
              医学部塾・予備校・家庭教師の違いを比較
            </h2>
            <p className="text-center text-sm mb-12" style={{ color: "#6b7280" }}>
              Medvanceが選ばれる理由を、他塾と比較してご確認ください
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
                      item: "講師の質",
                      medvance: "慶應医学部生のみ",
                      igaku: "専任講師（受験経験者）",
                      yobikou: "様々",
                      kateikyoshi: "学生バイト多数",
                      highlight: true,
                    },
                    {
                      item: "指導スタイル",
                      medvance: "完全1対1",
                      igaku: "少人数〜1対1",
                      yobikou: "集団授業が中心",
                      kateikyoshi: "1対1だが医学部特化なし",
                      highlight: false,
                    },
                    {
                      item: "医学部特化",
                      medvance: "完全特化",
                      igaku: "特化",
                      yobikou: "一部コースのみ",
                      kateikyoshi: "非特化",
                      highlight: true,
                    },
                    {
                      item: "面接・小論文対策",
                      medvance: "対応",
                      igaku: "対応",
                      yobikou: "一部対応",
                      kateikyoshi: "非対応",
                      highlight: false,
                    },
                    {
                      item: "受講エリア",
                      medvance: "全国オンライン対応",
                      igaku: "通塾が必要（大都市中心）",
                      yobikou: "通塾が必要",
                      kateikyoshi: "エリア限定が多い",
                      highlight: true,
                    },
                    {
                      item: "料金目安",
                      medvance: "8万円〜/月",
                      igaku: "年間400〜1000万円",
                      yobikou: "年間50〜150万円",
                      kateikyoshi: "様々",
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

      {/* ── 4.3 STRATEGY (local) ───────────────── */}
      <section className="bg-white py-20 px-4">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="志望校別戦略"
            title="国公立医学部も、私立医学部も、戦い方が違います。"
            body="同じ医学部受験でも、共通テスト重視、二次記述重視、私立大学別対策では、必要な学習設計が変わります。"
          />
          <div className="grid gap-5 md:grid-cols-3">
            {strategyItems.map((item) => (
              <FadeIn key={item.title}>
                <Link
                  href={item.href}
                  className="flex h-full flex-col rounded-lg p-6 transition-opacity hover:opacity-90"
                  style={{ backgroundColor: "#0c1a33", border: "1px solid rgba(255,255,255,0.12)" }}
                >
                  <p className="mb-3 text-xs font-bold tracking-widest" style={{ color: "#c9922a" }}>{item.label}</p>
                  <p className="mb-3 text-lg font-bold text-white">{item.title}</p>
                  <p className="mb-6 flex-1 text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.68)" }}>{item.body}</p>
                  <span className="text-xs font-bold" style={{ color: "#c9922a" }}>対策を見る →</span>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4.6 DIFFERENCE (local) ─────────────── */}
      <section className="px-4 py-20" style={{ backgroundColor: "#0c1a33" }}>
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 max-w-3xl">
            <p className="mb-3 text-xs font-bold tracking-widest" style={{ color: "#c9922a" }}>他との違い</p>
            <h2 className="text-2xl font-bold leading-snug text-white md:text-3xl" style={{ fontFamily: "var(--font-noto-serif)" }}>
              授業だけで終わらせず、医学部合格から逆算します。
            </h2>
            <p className="mt-4 text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.66)" }}>
              Medvanceは、大手予備校や学校の授業を否定する塾ではありません。足りない復習管理、個別補強、志望校別戦略を補う塾です。
            </p>
          </div>
          <div className="grid gap-5 lg:grid-cols-3">
            {differenceItems.map((item) => (
              <FadeIn key={item.title}>
                <div className="h-full rounded-lg p-6" style={{ backgroundColor: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)" }}>
                  <p className="mb-5 text-lg font-bold text-white">{item.title}</p>
                  <ul className="space-y-3">
                    {item.points.map((point) => (
                      <li key={point} className="flex gap-3 text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.7)" }}>
                        <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full" style={{ backgroundColor: "#c9922a" }} />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4.7 FLOW (moved up) ──────────────────── */}
      <section className="bg-white py-24 px-4">
        <div className="max-w-5xl mx-auto">
          <FadeIn>

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

      {/* ── 4.8 ONLINE SECTION (moved up) ─────────── */}
      <section className="bg-white py-24 px-4" style={{ borderTop: "1px solid #e5e1d8" }}>
        <div className="max-w-5xl mx-auto">
          <FadeIn>

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
                <div className="flex flex-col sm:flex-row gap-2">
                  <Link
                    href="/contact"
                    className="flex-1 block text-center py-3 rounded-lg font-bold text-sm hover:opacity-90 transition-opacity"
                    style={{ backgroundColor: "#c9922a", color: "#fff" }}
                  >
                    オンラインで無料相談する
                  </Link>
                  <LineButton label="LINE" size="lg" className="!py-3 sm:!w-28" />
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── 5. TUTOR STRENGTHS ────────────────── */}
      <section style={{ backgroundColor: "#f7f5f0" }} className="py-24 px-4">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-4" style={{ color: "#0c1a33" }}>
              同じ医学部合格でも、辿った道はそれぞれ違います。
            </h2>
            <p className="text-center text-sm mb-14 max-w-2xl mx-auto" style={{ color: "#6b7280" }}>
              現役・浪人・地方公立・最難関突破——タイプの異なる現役慶應医学部生が在籍。生徒の性格・志望校・得意科目を踏まえ、最も相性の合う一人をマッチングします。事前面談で相性確認も可能です。
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

      {/* ── 7.15 SERVICES (local) ──────────────── */}
      <section className="px-4 py-20" style={{ backgroundColor: "#f7f5f0" }}>
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="指導の内容"
            title="医学部受験塾として提供すること"
            body="問題を教えるだけではなく、志望校を起点に、毎週の実行量と受験判断まで管理します。"
          />
          <div className="grid gap-4 md:grid-cols-3">
            {serviceItems.map((item, index) => (
              <FadeIn key={item.title} delay={index * 0.04}>
                <div className="h-full rounded-lg bg-white p-6" style={{ border: "1px solid #e5e1d8" }}>
                  <p className="mb-3 text-base font-bold" style={{ color: "#0c1a33" }}>{item.title}</p>
                  <p className="text-sm leading-relaxed" style={{ color: "#5f6b7a" }}>{item.body}</p>
                </div>
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
              医学部受験の個別サポート体制
            </h2>
            <p className="text-center text-sm mb-12 max-w-xl mx-auto" style={{ color: "#6b7280" }}>
              授業だけで終わらない。学習計画の設計から毎日の進捗管理、保護者への報告まで一貫して行います。
            </p>
          </FadeIn>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                step: "01",
                title: "年・月・週・1日単位の学習計画",
                body: "試験日から逆算した年間計画を設計し、月・週・1日の単位に落とし込みます。「今日何をすべきか」が常に明確な状態をつくります。",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
                  </svg>
                ),
              },
              {
                step: "02",
                title: "毎日の学習管理とフィードバック",
                body: "学習記録を毎日確認し、進捗・理解度・つまずきに応じてその日のうちにフィードバックを返します。一人で抱え込まずに進められます。",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
                  </svg>
                ),
              },
              {
                step: "03",
                title: "保護者を交えた学習報告面談",
                body: "定期的に保護者も含めた面談を実施。学習状況・志望校への進捗・今後の方針を丁寧にご報告します。家族全体で受験を支える体制をつくります。",
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
                <p className="text-xs font-bold tracking-widest uppercase mb-1" style={{ color: "#c9922a" }}>質問サポート</p>
                <p className="font-bold text-white text-base mb-1">現役医学生がLINEで速やかに質問に対応</p>
                <p className="text-sm" style={{ color: "rgba(255,255,255,0.65)" }}>
                  授業外でも疑問が生じたらLINEでいつでも質問を送信可能。わからないことを速やかに解消し、翌日の学習に持ち越さない仕組みです（専任講師が順次丁寧に回答いたします）。
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── 7.4 PARENTS (local) ────────────────── */}
      <section className="px-4 py-20" style={{ backgroundColor: "#f7f5f0" }}>
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <FadeIn>
            <div className="overflow-hidden rounded-lg" style={{ border: "1px solid #e5e1d8" }}>
              <Image
                src="/images/generated/medvance-strategy-session.webp"
                alt="医学部受験の志望校と学習計画を整理する面談イメージ"
                width={1600}
                height={900}
                className="h-auto w-full"
              />
            </div>
          </FadeIn>
          <FadeIn delay={0.08}>
            <div>
              <SectionHeading
                align="left"
                eyebrow="保護者の方へ"
                title="保護者にも、受験判断に必要な情報を共有します。"
                body="医学部受験は、学力だけでなく家庭の判断が多い受験です。志望校、受験料、学費、追加指導、浪人可否。Medvanceは、その判断材料を保護者にも届く形で整理します。"
              />
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/for/parents?from=home-parent"
                  className="inline-flex items-center justify-center rounded-lg px-6 py-3 text-sm font-bold text-white transition-opacity hover:opacity-90"
                  style={{ backgroundColor: "#0c1a33" }}
                >
                  保護者向けページを見る
                </Link>
                <Link
                  href="/contact?from=home-parent"
                  className="inline-flex items-center justify-center rounded-lg px-6 py-3 text-sm font-bold transition-opacity hover:opacity-90"
                  style={{ color: "#0c1a33", border: "1px solid #d6d1c7" }}
                >
                  保護者同席で相談する
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── 8.5 DIAGNOSIS FLOW (local) ─────────── */}
      <section className="bg-white px-4 py-20">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <FadeIn>
            <div>
              <SectionHeading
                align="left"
                eyebrow="診断の流れ"
                title="まずは、医学部合格に向けた戦略診断から。"
                body="初回診断では、模試結果、志望校、現在の塾・予備校、学習時間、保護者の方針を確認し、必要な指導体制を整理します。"
              />
              <div className="flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/contact?from=home-diagnosis"
                  className="inline-flex items-center justify-center rounded-lg px-7 py-4 text-sm font-bold text-white transition-opacity hover:opacity-90"
                  style={{ backgroundColor: "#c9922a" }}
                >
                  合格戦略診断を申し込む
                </Link>
                <Link
                  href="/pricing?from=home-diagnosis"
                  className="inline-flex items-center justify-center rounded-lg px-7 py-4 text-sm font-bold transition-opacity hover:opacity-90"
                  style={{ color: "#0c1a33", border: "1px solid #d6d1c7" }}
                >
                  料金を見る
                </Link>
              </div>
            </div>
          </FadeIn>
          <div className="grid gap-4">
            {flowItemsLocal.map((item, index) => (
              <FadeIn key={item.step} delay={index * 0.05}>
                <div className="flex gap-4 rounded-lg p-5" style={{ backgroundColor: "#f7f5f0", border: "1px solid #e5e1d8" }}>
                  <span className="mt-0.5 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full text-xs font-bold text-white" style={{ backgroundColor: "#0c1a33" }}>
                    {item.step}
                  </span>
                  <div>
                    <p className="mb-1 text-sm font-bold" style={{ color: "#0c1a33" }}>{item.title}</p>
                    <p className="text-sm leading-relaxed" style={{ color: "#5f6b7a" }}>{item.body}</p>
                  </div>
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
            Medvanceはこんな方を応援します
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { label: "浪人生の方", desc: "現役時代の失敗を分析し、正しい戦略で1年以内の合格を目指します", href: "/for/ronin" },
              { label: "再受験生の方", desc: "社会人・大学生からの挑戦も歓迎。柔軟なスケジュールで全力サポート", href: "/for/saijuken" },
              { label: "慶應内部推薦を目指す方", desc: "塾高・志木・女子・SFC等の評定を上げ、医学部進学枠を死守します", href: "/for/keio-naibu" },
              { label: "内部進学＆外部受験 併願の方", desc: "系列校内の推薦枠確保と、万が一に備えた国公立・私立医学部一般受験を両立", href: "/for/keio-naibu-heigan" },
              { label: "慶應医学部（一般）を目指す方", desc: "現役慶應医学部生だからこそ語れる、超難関一般入試のリアル対策", href: "/universities/keio" },
              { label: "私立医学部を目指す方", desc: "慈恵・順天堂・日本医科など、大学別の傾向に合わせた専門対策", href: "/universities/private" },
              { label: "国公立医学部を目指す方", desc: "共通テストから二次試験まで、全科目の完成を目指します", href: "/universities/national" },
              { label: "家庭教師を探すご家庭", desc: "医学部受験に特化した1対1指導、オンライン・訪問指導、料金目安を確認できます", href: "/igakubu-kateikyoushi" },
              { label: "保護者の方", desc: "毎月の進捗報告・保護者面談で、お子さまの状況を透明にご報告", href: "/for/parents" },
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

      {/* ── 10.1 FAQ ADDITIONAL (local) ────────── */}
      <section className="bg-white px-4 py-16" style={{ borderTop: "1px solid #e5e1d8" }}>
        <div className="mx-auto max-w-3xl">
          <SectionHeading eyebrow="補足FAQ" title="相談前に確認されることが多い質問" />
          <div className="space-y-4">
            {faqItemsLocal.map((item) => (
              <FadeIn key={item.q}>
                <div className="rounded-lg p-6" style={{ backgroundColor: "#f7f5f0", border: "1px solid #e5e1d8" }}>
                  <p className="mb-2 text-sm font-bold" style={{ color: "#0c1a33" }}>Q. {item.q}</p>
                  <p className="text-sm leading-relaxed" style={{ color: "#5f6b7a" }}>A. {item.a}</p>
                </div>
              </FadeIn>
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
              授業は<span className="font-bold" style={{ color: "#0c1a33" }}>1コマ45分 7,500円</span>
              <span className="ml-1 text-xs">（1回の授業90分）</span>
              ＋コーチング月20,000円のシンプルな構成です。入塾金は20,000円（初回のみ）。
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="grid grid-cols-3 gap-3 mb-6">
              {[
                { label: "月4回（8コマ）", price: "8万円", note: "週1回 ＋ コーチング", highlight: false },
                { label: "月8回（16コマ）", price: "14万円", note: "週2回 ＋ コーチング", highlight: true },
                { label: "月12回（24コマ）〜", price: "20万円〜", note: "週3回〜 ＋ コーチング（割引あり）", highlight: false },
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
                  相談前に確認できる記事
                </p>
                <h3 className="text-lg font-bold mb-3" style={{ color: "#0c1a33" }}>
                  相談前に読んでおくと判断しやすい記事
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
              style={{ backgroundColor: "#0c1a33", border: "1px solid rgba(201,146,42,0.18)" }}
            >
              <div>
                
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3" style={{ fontFamily: "var(--font-noto-serif)" }}>
                  塾・予備校を比較検討している方へ
                </h3>
                <p className="text-sm leading-relaxed mb-5" style={{ color: "rgba(255,255,255,0.68)" }}>
                  塾選びで悩んでいる方がよく相談される論点を先に読んでおくと、比較や判断がしやすくなります。
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
                <h2 className="text-2xl md:text-3xl font-bold mb-3" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>
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
                <div className="flex flex-col sm:flex-row gap-2">
                  <Link
                    href="/contact"
                    className="inline-block px-8 py-4 text-white font-bold text-base rounded-lg shadow-md hover:opacity-90 transition-opacity"
                    style={{ backgroundColor: "#c9922a" }}
                  >
                    無料相談に申し込む（マニュアル付き）→
                  </Link>
                  <LineButton label="LINEで相談" size="lg" className="!py-4 !px-6 shadow-md" />
                </div>
                <p className="text-xs mt-2" style={{ color: "#9ca3af" }}>完全無料・勧誘なし・全国オンライン対応</p>
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
                    <p className="font-bold leading-tight mb-4" style={{ fontSize: "1rem", fontFamily: "var(--font-noto-serif)", color: "#e8b84b" }}>戦略マニュアル</p>
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
                      { icon: "📈", title: "実績に応じて昇給", desc: "継続年数・生徒評価・合格実績で時給アップ" },
                      { icon: "🗓", title: "スケジュール自由", desc: "試験・研究の繁忙期はコマ数を調整できます" },
                      { icon: "💻", title: "完全リモートOK", desc: "オンライン指導で全国どこからでも勤務可" },
                      { icon: "🎯", title: "経験が武器になる", desc: "医学部受験の体験談・勉強法をそのまま伝授" },
                    ].map((item) => (
                      <div key={item.title} className="flex gap-3">
                        <span className="text-xl flex-shrink-0">{item.icon}</span>
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

      {/* ── INTERACTIVE AI TOOL BANNER (Tier 4) ── */}
      <section className="px-4 py-16 bg-[#faf9f6] border-t border-b" style={{ borderColor: "#e5e1d8" }}>
        <div className="mx-auto max-w-4xl">
          <div className="relative overflow-hidden rounded-3xl p-8 md:p-12 text-white shadow-xl bg-gradient-to-br from-[#060b13] via-[#0c1a33] to-[#04080f]" style={{ border: "1px solid rgba(212, 175, 55, 0.25)" }}>
            <div className="absolute top-0 right-0 opacity-10 pointer-events-none translate-x-12 -translate-y-12 select-none">
              <span className="text-9xl font-extrabold text-amber-400 font-serif">AI</span>
            </div>
            
            <div className="relative z-10 max-w-2xl text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full mb-6 text-xs font-bold" style={{ backgroundColor: "rgba(212,175,55,0.15)", color: "#d4af37", border: "1px solid rgba(212,175,55,0.4)", backdropFilter: "blur(8px)" }}>
                <span>🤖</span>
                <span>現役慶應医学部生開発システム</span>
              </div>
              
              <h3 className="text-2xl md:text-4xl font-bold mb-4 leading-tight" style={{ fontFamily: "var(--font-noto-serif)", color: "#fff" }}>
                模試偏差値から合格ルートを10秒分析<br />
                <span style={{ color: "#d4af37" }}>AI模試偏差値 自動分析ツール</span>
              </h3>
              
              <p className="text-xs md:text-sm leading-relaxed mb-8" style={{ color: "rgba(255,255,255,0.76)" }}>
                医学部受験を勝ち抜いた慶應医学部生が、独自の偏差値補正・判定ロジックを設計。駿台・河合塾・進研模試などの難易度を補正し、科目別6段階バンド評価、おすすめの参考書、志望校との距離を可視化したタイムラインを即座に生成します。
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/services/moshi/tool?from=home-moshi-tool-cta" className="inline-flex items-center justify-center rounded-xl px-8 py-4 text-sm font-bold transition-all hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(212,175,55,0.3)]" style={{ backgroundColor: "#d4af37", color: "#060b13" }}>
                  AI分析ツールを使ってみる（無料） →
                </Link>
                <Link href="/services/moshi" className="inline-flex items-center justify-center rounded-xl px-8 py-4 text-sm font-bold text-white transition-opacity hover:opacity-90 border border-white/20">
                  模試分析サービスの詳細を見る
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 13.9 FINAL CTA (local) ─────────────── */}
      <section className="px-4 py-24" style={{ backgroundColor: "#0c1a33" }}>
        <div className="mx-auto max-w-4xl text-center">
          <FadeIn>
            <p className="mb-4 text-xs font-bold tracking-widest" style={{ color: "#c9922a" }}>まずは現在地の確認から</p>
            <h2 className="mb-4 text-2xl font-bold leading-snug text-white md:text-4xl" style={{ fontFamily: "var(--font-noto-serif)" }}>
              医学部合格に向けて、まず現在地と戦略を整理しましょう。
            </h2>
            <p className="mx-auto mb-10 max-w-2xl text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.66)" }}>
              国公立・私立、現役・浪人、予備校併用の有無を問わず、志望校から必要な学習体制を設計します。
            </p>
            <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="/contact?from=home-final-local"
                className="inline-flex w-full items-center justify-center rounded-lg px-9 py-4 text-sm font-bold text-white transition-opacity hover:opacity-90 sm:w-auto"
                style={{ backgroundColor: "#c9922a" }}
              >
                合格戦略診断を申し込む
              </Link>
              <LineButton label="LINEで相談する" size="lg" className="!w-full !px-8 !py-4 sm:!w-auto" />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── 14. FINAL CTA ─────────────────────── */}
      <section style={{ backgroundColor: "#0c1a33" }} className="py-28 px-4">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <p className="text-xs font-semibold tracking-widest uppercase text-center mb-4" style={{ color: "#c9922a" }}>無料相談</p>
            <h2 className="text-2xl md:text-4xl font-bold text-white text-center mb-4 leading-snug" style={{ fontFamily: "var(--font-noto-serif)" }}>
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
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <Link
                  href="/contact"
                  className="inline-block px-10 py-5 text-white font-bold text-base rounded-lg shadow-lg hover:opacity-90 transition-opacity"
                  style={{ backgroundColor: "#c9922a" }}
                >
                  無料相談・お問い合わせ（30分）
                </Link>
                <LineButton label="LINEで相談する" size="lg" className="!py-5 !px-8 shadow-lg" />
              </div>
              <p className="mt-4 text-xs" style={{ color: "rgba(255,255,255,0.35)" }}>
                完全無料・勧誘なし・オンライン対応
              </p>
            </div>

            {/* Headquarters Office Info */}
            <div className="mt-16 pt-8 border-t max-w-xl mx-auto text-center" style={{ borderColor: "rgba(255,255,255,0.1)" }}>
              <p className="text-xs font-semibold tracking-widest uppercase mb-1" style={{ color: "#c9922a" }}>HEADQUARTERS</p>
              <p className="font-bold text-white text-sm mb-1">Medvance 本部（銀座オフィス）</p>
              <p className="text-xs" style={{ color: "rgba(255,255,255,0.5)" }}>
                〒104-0061 東京都中央区銀座1丁目12番4号
              </p>
              <p className="text-[10px] mt-1.5 leading-relaxed" style={{ color: "rgba(255,255,255,0.3)" }}>
                ※こちらは管理本部オフィスのため、常設校舎としての対面授業等は行っておりません（指導は全国オンラインおよび各所での対面個別指導となります）。
              </p>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
