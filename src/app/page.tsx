import Link from "next/link";
import Image from "next/image";

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
  { icon: <IconLightbulb />, title: "合格者が実践した「本質的な勉強法」", body: "偏差値40台から難関医学部に合格した講師の成功メソッドを、再現可能な形で直接伝授します。" },
  { icon: <IconGlobe />, title: "自宅でもオンラインでも受講可能", body: "対面指導（関東圏）・オンライン指導の両方に対応。全国どこからでも受講できます。" },
];

const strengths = [
  { num: "01", title: "慶應医学部生のみが指導", body: "指導するのは慶應義塾大学医学部の現役学生のみ。実際に難関を突破した経験者が、再現性ある合格戦略を直接伝授します。他塾では決して得られない、リアルな合格者の視点があります。" },
  { num: "02", title: "完全オーダーメイドの学習戦略", body: "学力・志望校・生活スタイルに合わせた専用プランを設計。「偏差値40から慶應医学部合格」の実績を持つ講師が、あなたの最短ルートを描きます。" },
  { num: "03", title: "医学部受験に完全特化", body: "英数理の学力向上はもちろん、面接・小論文・願書まで一貫サポート。一般予備校では対応できない医学部特有の試験を、専門家が丁寧に指導します。" },
];

const steps = [
  { title: "無料カウンセリング", body: "フォームからご連絡ください。学力・志望校・悩みをヒアリングします。" },
  { title: "最適な講師をご提案", body: "相性・志望校・科目を考慮し、現役慶應医学部生から最適な講師を選定。" },
  { title: "体験指導（60分〜）", body: "担当予定の講師による体験指導を実施。相性を確認したうえで本契約へ。" },
  { title: "本契約・指導スタート", body: "完全1対1の本格指導がスタート。合格まで継続的にサポートします。" },
];

const testimonials = [
  { name: "A.T.さん", label: "現役合格・慶應義塾大学医学部", quote: "高2の秋、偏差値40台から始めました。本質から理解する勉強法を教わってから成績が急激に伸び、1年で慶應医学部に合格できました。" },
  { name: "K.M.さん", label: "再受験・東京慈恵会医科大学合格", quote: "社会人からの再受験で不安でしたが、私のペースに合わせた計画と面接対策まで手厚くサポートしてもらい、念願の医学部に合格できました。" },
  { name: "S.Y.さん", label: "一浪・順天堂大学医学部合格", quote: "数学の苦手の根本原因を分析し、一つひとつ潰してもらいました。浪人1年で志望校に合格できたのは講師との二人三脚があったからです。" },
];

const faqs = [
  { q: "どんな生徒が対象ですか？", a: "現役生・浪人生・再受験生すべてに対応しています。学力や年齢を問わず、医学部合格を目指す方であればどなたでもお申し込みいただけます。" },
  { q: "本当に偏差値40から合格できますか？", a: "実際に偏差値40台から慶應医学部に合格した講師が在籍しています。重要なのは現在の偏差値ではなく、正しい戦略と努力です。まずは無料相談でご状況をお聞かせください。" },
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
      <section style={{ backgroundColor: "#0c1a33" }} className="relative overflow-hidden">
        {/* Desktop: full-height split layout */}
        <div className="grid md:grid-cols-[55%_45%]" style={{ minHeight: "100svh" }}>

          {/* Left: text panel */}
          <div className="flex flex-col justify-center py-28 px-8 sm:px-12 lg:px-16 xl:px-20 relative z-10">
            {/* Gold accent line */}
            <div className="w-10 h-0.5 mb-8" style={{ backgroundColor: "#c9922a" }} />

            {/* Badge */}
            <div
              className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 rounded-full text-xs tracking-widest w-fit"
              style={{ backgroundColor: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.14)", color: "rgba(255,255,255,0.6)" }}
            >
              医学部受験専門塾 Medvance
            </div>

            {/* Headline */}
            <h1
              className="font-bold text-white leading-tight mb-6"
              style={{ fontFamily: "'Noto Serif JP', serif", fontSize: "clamp(2rem, 4vw, 3.75rem)" }}
            >
              偏差値40から<br />
              <span style={{ color: "#c9922a" }}>慶應医学部合格</span><br />
              の実績
            </h1>

            {/* Sub */}
            <p className="text-base md:text-lg leading-relaxed mb-10" style={{ color: "rgba(255,255,255,0.68)", maxWidth: "440px" }}>
              現役慶應医学部生だけが教える、完全1対1の医学部受験専門塾。あなた専用の合格戦略で、最短ルートを走ります。
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Link
                href="/contact"
                className="inline-block px-8 py-4 font-bold text-base rounded-lg text-white shadow-lg hover:opacity-90 transition-opacity text-center"
                style={{ backgroundColor: "#c9922a" }}
              >
                無料相談・お問い合わせ
              </Link>
              <Link
                href="/about"
                className="inline-block px-8 py-4 font-semibold text-base rounded-lg text-white transition-colors text-center"
                style={{ border: "1px solid rgba(255,255,255,0.28)" }}
              >
                Medvanceとは？
              </Link>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              {["慶應義塾大学医学部在籍", "完全1対1制", "全国対応（オンライン）"].map((badge) => (
                <span key={badge} className="text-xs flex items-center gap-1.5" style={{ color: "rgba(255,255,255,0.42)" }}>
                  <span className="w-1.5 h-1.5 rounded-full inline-block flex-shrink-0" style={{ backgroundColor: "#c9922a" }} />
                  {badge}
                </span>
              ))}
            </div>
          </div>

          {/* Right: hero image fills full panel — desktop only */}
          <div className="hidden md:block relative">
            <Image
              src="/images/hero.png"
              alt="Medvance 医学部受験専門塾"
              fill
              className="object-cover object-center"
              priority
            />
            {/* Gradient: left edge bleeds into dark panel */}
            <div
              className="absolute inset-y-0 left-0 pointer-events-none"
              style={{ width: "220px", background: "linear-gradient(to right, #0c1a33, transparent)" }}
            />
          </div>
        </div>

        {/* Mobile: image below text */}
        <div className="md:hidden px-6 pb-14">
          <div className="relative rounded-2xl overflow-hidden" style={{ height: "300px" }}>
            <Image
              src="/images/hero.png"
              alt="Medvance 医学部受験専門塾"
              fill
              className="object-cover object-top"
              priority
            />
            {/* Top fade into dark background */}
            <div
              className="absolute inset-x-0 top-0 pointer-events-none"
              style={{ height: "80px", background: "linear-gradient(to bottom, #0c1a33, transparent)" }}
            />
          </div>
        </div>

        {/* Scroll indicator — desktop */}
        <div className="hidden md:flex flex-col items-center gap-2 absolute bottom-8 left-1/2 -translate-x-1/2 pointer-events-none">
          <span className="text-xs tracking-widest" style={{ color: "rgba(255,255,255,0.25)" }}>scroll</span>
          <div className="w-px h-10" style={{ background: "linear-gradient(to bottom, rgba(255,255,255,0.25), transparent)" }} />
        </div>
      </section>

      {/* ── 2. RESULTS STRIP ──────────────────── */}
      <section className="bg-white py-10 px-4" style={{ borderBottom: "1px solid #e5e1d8" }}>
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { num: "偏差値40台", label: "からの慶應医学部合格実績" },
            { num: "完全1対1", label: "全授業が個別指導" },
            { num: "全員が", label: "現役慶應医学部生" },
            { num: "無料", label: "初回相談・カウンセリング" },
          ].map((s) => (
            <div key={s.label}>
              <p className="text-xl md:text-2xl font-bold mb-1" style={{ color: "#0c1a33", fontFamily: "'Noto Serif JP', serif" }}>{s.num}</p>
              <p className="text-xs md:text-sm" style={{ color: "#6b7280" }}>{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── 3. THREE STRENGTHS ────────────────── */}
      <section style={{ backgroundColor: "#f7f5f0" }} className="py-24 px-4">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs font-semibold tracking-widest uppercase text-center mb-3" style={{ color: "#c9922a" }}>
            Why Medvance
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-14" style={{ color: "#0c1a33" }}>
            Medvanceが選ばれる3つの理由
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {strengths.map((item) => (
              <div key={item.num} className="bg-white rounded-2xl p-8 shadow-sm" style={{ border: "1px solid #e5e1d8" }}>
                <p className="text-6xl font-bold mb-4 leading-none" style={{ color: "#0c1a33", opacity: 0.07, fontFamily: "'Noto Serif JP', serif" }}>{item.num}</p>
                <h3 className="text-base font-bold mb-3" style={{ color: "#0c1a33" }}>{item.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#6b7280" }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. ABOUT IMAGE ────────────────────── */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <Image
            src="/images/about.png"
            alt="Medvanceについて"
            width={1200}
            height={675}
            className="w-full h-auto rounded-2xl shadow-sm"
          />
        </div>
      </section>

      {/* ── 5. 6 FEATURES ─────────────────────── */}
      <section style={{ backgroundColor: "#0c1a33" }} className="py-24 px-4">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs font-semibold tracking-widest uppercase text-center mb-3" style={{ color: "#c9922a" }}>
            Features
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-center text-white mb-14" style={{ fontFamily: "'Noto Serif JP', serif" }}>
            Medvanceの6つの特徴
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {features.map((item, i) => (
              <div
                key={i}
                className="flex gap-4 p-6 rounded-xl"
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. FLOW ───────────────────────────── */}
      <section className="bg-white py-24 px-4">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs font-semibold tracking-widest uppercase text-center mb-3" style={{ color: "#c9922a" }}>
            Flow
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-3" style={{ color: "#0c1a33" }}>
            お申し込みから指導開始まで
          </h2>
          <p className="text-center text-sm mb-12" style={{ color: "#6b7280" }}>
            無料相談から最短1週間で指導をスタートできます
          </p>
          <div className="mb-12">
            <Image src="/images/flow.jpg" alt="ご応募までの流れ" width={1440} height={517} className="w-full h-auto rounded-2xl" />
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {steps.map((item, i) => (
              <div key={i} className="relative text-center">
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
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. TESTIMONIALS ───────────────────── */}
      <section style={{ backgroundColor: "#f7f5f0" }} className="py-24 px-4">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs font-semibold tracking-widest uppercase text-center mb-3" style={{ color: "#c9922a" }}>
            Success Stories
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-14" style={{ color: "#0c1a33" }}>
            合格者の声
          </h2>
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-7 flex flex-col shadow-sm"
                style={{ border: "1px solid #e5e1d8" }}
              >
                <div className="text-5xl leading-none mb-4" style={{ color: "#c9922a", opacity: 0.3, fontFamily: "Georgia, serif" }}>&ldquo;</div>
                <p className="text-sm leading-relaxed flex-1 mb-6" style={{ color: "#4a5568" }}>{t.quote}</p>
                <div className="flex items-center gap-3 pt-4" style={{ borderTop: "1px solid #e5e1d8" }}>
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0"
                    style={{ backgroundColor: "#0c1a33" }}
                  >
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-sm" style={{ color: "#0c1a33" }}>{t.name}</p>
                    <p className="text-xs mt-0.5" style={{ color: "#6b7280" }}>{t.label}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link
              href="/success-stories"
              className="inline-flex items-center gap-2 px-6 py-3 font-semibold rounded-lg text-sm hover:opacity-80 transition-opacity"
              style={{ color: "#0c1a33", border: "1px solid #0c1a33" }}
            >
              合格体験記をすべて読む
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ── 8. FAQ ────────────────────────────── */}
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

      {/* ── 9. NOTE ───────────────────────────── */}
      <section style={{ backgroundColor: "#f7f5f0" }} className="py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-semibold tracking-widest uppercase text-center mb-3" style={{ color: "#c9922a" }}>
            Note
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-3" style={{ color: "#0c1a33" }}>
            現役慶應医学部生のnoteも更新中
          </h2>
          <p className="text-center text-sm mb-10 max-w-xl mx-auto" style={{ color: "#6b7280" }}>
            「偏差値40から慶應医学部に合格した戦略」「医学部に受かる人・落ちる人の違い」など、他では読めないリアルな受験情報を公開中です。
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

      {/* ── 10. SUBJECTS ──────────────────────── */}
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

      {/* ── 11. FINAL CTA ─────────────────────── */}
      <section style={{ backgroundColor: "#0c1a33" }} className="py-28 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-5 leading-snug" style={{ fontFamily: "'Noto Serif JP', serif" }}>
            医学部合格は<span style={{ color: "#c9922a" }}>「才能」ではなく「戦略」</span>
          </h2>
          <p className="text-base leading-relaxed mb-10" style={{ color: "rgba(255,255,255,0.68)" }}>
            どれだけ努力しても、やり方を間違えると結果は出ません。合格者が実際に通った最短ルートを、あなた専用に最適化して提供します。まずは無料相談から、一歩を踏み出してください。
          </p>
          <Link
            href="/contact"
            className="inline-block px-10 py-5 text-white font-bold text-lg rounded-lg shadow-lg hover:opacity-90 transition-opacity"
            style={{ backgroundColor: "#c9922a" }}
          >
            無料相談・お問い合わせ
          </Link>
          <p className="mt-4 text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>
            ご依頼・無料相談はフォームから受付中
          </p>
        </div>
      </section>
    </>
  );
}
