import Link from "next/link";
import Image from "next/image";
import HeroAnimated from "@/components/HeroAnimated";
import Marquee from "@/components/Marquee";
import FadeIn from "@/components/FadeIn";
import HoverCard from "@/components/HoverCard";

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

/* ── Page ─────────────────────────────────── */
export default function Home() {
  return (
    <>
      {/* ── 1. HERO ───────────────────────────── */}
      <HeroAnimated />

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

      {/* ── 3.5 TESTIMONIALS ──────────────────── */}
      <section className="bg-white py-24 px-4">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <p className="text-xs font-semibold tracking-widest uppercase text-center mb-3" style={{ color: "#c9922a" }}>
              Voices
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-4" style={{ color: "#0c1a33" }}>
              受講生の声
            </h2>
            <p className="text-center text-sm mb-14" style={{ color: "#6b7280" }}>
              プライバシー保護のため匿名・一部加工して掲載しています
            </p>
          </FadeIn>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                quote: "偏差値52から始めて、1年で北里大学医学部に合格できました。勉強の「方向性」が全く変わったと感じています。",
                name: "浪人生（1浪）",
                place: "神奈川県",
                result: "北里大学医学部 合格",
              },
              {
                quote: "社会人3年目から再受験を決意。仕事と両立しながら週2回のペースで指導を受け、東京医科大学に合格しました。",
                name: "再受験生・26歳",
                place: "東京都",
                result: "東京医科大学 合格",
              },
              {
                quote: "高3の夏からスタートしましたが、無駄を省いた戦略のおかげで昭和大学医学部に現役合格。相談して本当に良かったです。",
                name: "現役生",
                place: "埼玉県",
                result: "昭和大学医学部 合格",
              },
            ].map((t, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="flex flex-col h-full p-7 rounded-2xl" style={{ backgroundColor: "#f7f5f0", border: "1px solid #e5e1d8" }}>
                  {/* Quote mark */}
                  <span className="text-4xl font-bold leading-none mb-4 block" style={{ color: "#c9922a", fontFamily: "Georgia, serif" }}>"</span>
                  <p className="text-sm leading-relaxed flex-1 mb-6" style={{ color: "#3d3d3d" }}>{t.quote}</p>
                  <div>
                    <div className="h-px mb-4" style={{ backgroundColor: "#e5e1d8" }} />
                    <p className="text-xs font-bold mb-0.5" style={{ color: "#0c1a33" }}>{t.name}・{t.place}</p>
                    <p className="text-xs font-semibold" style={{ color: "#c9922a" }}>{t.result}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
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
                      item: "料金相談",
                      medvance: "無料カウンセリング",
                      yobikou: "固定コース",
                      kateikyoshi: "様々",
                      highlight: true,
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

      {/* ── 11. COLUMN PREVIEW ─────────────────── */}
      <section className="bg-white py-24 px-4">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <p className="text-xs font-semibold tracking-widest uppercase text-center mb-3" style={{ color: "#c9922a" }}>
              Column
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-3" style={{ color: "#0c1a33" }}>
              最新コラム
            </h2>
            <p className="text-center text-sm mb-12" style={{ color: "#6b7280" }}>
              現役慶應医学部生が書く、医学部受験のリアルな情報
            </p>
          </FadeIn>
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {[
              {
                tag: "勉強法",
                title: "医学部合格のための正しい勉強法",
                desc: "科目別の効率的な学習法から、医学部特有の試験対策まで。合格者が実践した再現性ある勉強法を解説します。",
                href: "/column/study-method",
              },
              {
                tag: "計画",
                title: "医学部受験ロードマップ",
                desc: "いつから・何を・どう勉強すべきか。高校生から社会人まで、目標から逆算した受験スケジュールを紹介します。",
                href: "/column/roadmap",
              },
              {
                tag: "合格分析",
                title: "医学部に受かる人・落ちる人の違い",
                desc: "毎年多くの受験生を見てきた慶應医学部生が語る、合格者と不合格者を分ける本当の差とは何か。",
                href: "/column/difference",
              },
            ].map((col, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <HoverCard
                  className="block rounded-2xl overflow-hidden h-full"
                  style={{ border: "1px solid #e5e1d8" }}
                >
                  <a href={col.href} className="block group h-full">
                    {/* Top color bar */}
                    <div className="h-1.5" style={{ backgroundColor: "#c9922a" }} />
                    <div className="p-6">
                      <span
                        className="inline-block text-xs font-semibold px-2.5 py-1 rounded-full mb-4"
                        style={{ backgroundColor: "rgba(201,146,42,0.1)", color: "#c9922a" }}
                      >
                        {col.tag}
                      </span>
                      <h3
                        className="font-bold text-base mb-3 leading-snug group-hover:underline"
                        style={{ color: "#0c1a33", fontFamily: "'Noto Serif JP', serif" }}
                      >
                        {col.title}
                      </h3>
                      <p className="text-xs leading-relaxed" style={{ color: "#6b7280" }}>
                        {col.desc}
                      </p>
                      <div className="flex items-center gap-1 mt-5 text-xs font-semibold" style={{ color: "#c9922a" }}>
                        続きを読む
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-3.5 h-3.5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                        </svg>
                      </div>
                    </div>
                  </a>
                </HoverCard>
              </FadeIn>
            ))}
          </div>
          <div className="text-center">
            <a
              href="/column"
              className="inline-flex items-center gap-2 px-8 py-4 font-bold text-sm rounded-lg hover:opacity-90 transition-opacity"
              style={{ backgroundColor: "#0c1a33", color: "#fff" }}
            >
              コラム一覧を見る
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
              </svg>
            </a>
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
