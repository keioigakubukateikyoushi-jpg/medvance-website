import ForPageSchemas from "@/components/ForPageSchemas";
import { forPageMeta } from "@/lib/forPageMeta";
import Link from "next/link";
import type { Metadata } from "next";

const GOLD = "#c9922a";
const NAVY = "#0c1a33";
const CREAM = "#f7f5f0";
const BORDER = "#e5e1d8";

const concerns = [
  "進級が危うい／赤点・追試が続いている",
  "定期テストで思うように点が取れない",
  "宿題・課題・レポートが回らず溜まっている",
  "特定の科目だけ大きく点を落としている",
  "集団塾だと自分の学校の試験範囲に対応してもらえない",
  "内部進学に必要な評定（GPA）を維持したい",
  "「わからないところ」が自分でも分からない",
  "親が勉強を見るのはもう限界に来ている",
];

// 集団塾・映像授業では難しい理由（比較）
const compare = [
  {
    axis: "試験範囲・教材",
    group: "市販教材・共通カリキュラムで進むため、学校独自のプリントや課題には対応しきれない。",
    medvance: "生徒の学校の試験範囲・配布プリント・提出物そのものを教材にして対策する。",
  },
  {
    axis: "宿題・レポート",
    group: "授業の進行が優先で、日々の提出物の管理までは踏み込めない。",
    medvance: "宿題・課題・レポートの期限と進捗を一緒に管理し、書き方から伴走する。",
  },
  {
    axis: "つまずきの発見",
    group: "一斉指導のため「どこで止まっているか」が見えにくく、置いていかれやすい。",
    medvance: "完全1対1で手元・思考を確認し、つまずきの根本をその場で特定する。",
  },
  {
    axis: "ゴール設定",
    group: "全体の進度に合わせるため、一人の進級・評定を保証するものではない。",
    medvance: "進級基準・評定から逆算し、「自分で点が取れる」状態をゴールにする。",
  },
];

const pillars = [
  {
    num: "01",
    title: "宿題・課題・レポートの徹底伴走",
    body: "溜まりがちな提出物を一緒に棚卸しし、期限と優先順位を可視化。レポートは「何を・どう書けば評価されるか」から指導します。提出物の取りこぼしは評定・進級に直結するため、期限内提出の習慣そのものを作ります。",
  },
  {
    num: "02",
    title: "教科ごとのピンポイント対策",
    body: "学校の試験範囲・独自教材・採点基準に同調した、その子・その学校だけの対策。集団塾では物理的に不可能な「あなたの学校の次のテスト」への最適化を、完全1対1だからこそ実現します。",
  },
  {
    num: "03",
    title: "「わからない」を発見し、可視化する",
    body: "本人も気づいていないつまずきを、対話と手元の確認から特定。「わかったつもり」を一つずつ潰し、どこが弱点で何を直せば点になるのかを明確にします。保護者にも進捗を共有します。",
  },
  {
    num: "04",
    title: "自分で定期テストの点が取れるまで",
    body: "教えて終わりにしません。発見→理解→自力で解けるか確認、を毎回繰り返し、テスト本番で自分の力で得点できる状態へ。指導がなくても回る学習習慣の定着までサポートします。",
  },
];

const steps = [
  { step: "STEP 1", title: "無料相談（30分）", body: "現在の成績・進級状況・つまずいている科目・学校のカリキュラムをヒアリング。最優先で立て直す科目と提出物を整理します。" },
  { step: "STEP 2", title: "学校カリキュラムの把握", body: "試験範囲・配布プリント・提出物・採点傾向を共有いただき、その学校・その子専用の対策プランを設計します。" },
  { step: "STEP 3", title: "わからない箇所の発見と立て直し", body: "完全1対1の指導でつまずきの根本を特定し、基礎から再構築。宿題・レポートの伴走も同時にスタートします。" },
  { step: "STEP 4", title: "テスト前の集中対策", body: "定期テスト2〜3週間前から頻度を上げ、出題範囲に絞ったピンポイント対策。赤点回避から得点アップまで引き上げます。" },
  { step: "STEP 5", title: "自走できる状態へ", body: "自力で解ける範囲を一つずつ広げ、テストで再現できる学習習慣を定着。長期的に成績と進級が安定する状態を目指します。" },
];

const subjects = [
  { name: "英語", point: "文法・語彙・長文・英作文を学校の教材と試験形式に合わせて対策。" },
  { name: "数学", point: "計算から記述・証明まで、学校の問題集に沿って基礎→応用の順で定着。" },
  { name: "理科", point: "物理・化学・生物。実験レポート対策や計算問題の解き方まで丁寧に。" },
  { name: "国語", point: "現代文・古文・漢文を学校教材に合わせ、記述の書き方まで指導。" },
  { name: "社会", point: "暗記の効率化と論述対策。定期試験の出題パターンを得点に直結させる。" },
];

export const metadata: Metadata = {
  title: "附属校・中高一貫校の内部生へ｜成績向上・留年回避・進級サポート | Medvance",
  description:
    "附属校・中高一貫校の内部生向け完全1対1個別指導。宿題・課題・レポートの徹底伴走、学校ごとの試験範囲に同調した教科別ピンポイント対策、わからないところの発見から自分で定期テストの点が取れるまで。留年回避・進級・内部進学を現役医学部生がサポート。",
  keywords: [
    "附属校 内部生 家庭教師",
    "中高一貫校 成績 上げる",
    "留年 回避 家庭教師",
    "進級 個別指導",
    "内部進学 評定 上げる",
    "定期テスト 学校別 対策",
    "宿題 レポート 伴走 個別指導",
  ],
  alternates: {
    canonical: "/for/naibu-seiseki",
  },
};

export default function NaibuSeisekiPage() {
  return (
    <>
      <ForPageSchemas slug="naibu-seiseki" />
      <div className="min-h-screen bg-white">

        {/* HERO */}
        <div style={{ backgroundColor: NAVY }} className="py-24 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: GOLD }}>
              附属校・中高一貫校 内部生サポート
            </p>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight" style={{ fontFamily: "var(--font-noto-serif)" }}>
              内部の成績を、<br />確実に立て直す。
            </h1>
            <p className="text-base md:text-lg mb-8" style={{ color: "rgba(255,255,255,0.7)" }}>
              留年回避・評定維持・内部進学まで。<br />
              宿題から定期テストまで、現役医学部生が完全1対1で徹底伴走します。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="px-8 py-4 rounded-xl font-bold text-white text-base hover:opacity-90 transition-opacity"
                style={{ backgroundColor: GOLD }}
              >
                無料相談を申し込む
              </Link>
              <Link
                href="/pricing"
                className="px-8 py-4 rounded-xl font-bold text-base hover:opacity-90 transition-opacity"
                style={{ backgroundColor: "rgba(255,255,255,0.1)", color: "#fff", border: "1px solid rgba(255,255,255,0.3)" }}
              >
                料金を確認する
              </Link>
            </div>
            <p className="text-xs mt-6" style={{ color: "rgba(255,255,255,0.45)" }}>
              ※ 医学部志望に限らず、成績・進級にお悩みのご家庭を広くサポートします。
            </p>
          </div>
        </div>

        {/* WHO IS THIS FOR */}
        <div className="py-16 px-4" style={{ backgroundColor: CREAM }}>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-2 text-center" style={{ color: NAVY, fontFamily: "var(--font-noto-serif)" }}>
              こんなお悩みはありませんか
            </h2>
            <p className="text-sm text-center mb-10" style={{ color: "#6b7280" }}>
              一つでも当てはまれば、Medvanceがお力になれます
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {concerns.map((item, i) => (
                <div key={i} className="flex items-start gap-3 px-5 py-4 rounded-xl bg-white" style={{ border: `1px solid ${BORDER}` }}>
                  <span className="flex-shrink-0 text-base" style={{ color: GOLD }}>✓</span>
                  <p className="text-sm" style={{ color: "#3d3d3d" }}>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* WHY GROUP SCHOOLS CAN'T (compare) */}
        <div className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-2 text-center" style={{ color: NAVY, fontFamily: "var(--font-noto-serif)" }}>
              なぜ集団塾では難しいのか
            </h2>
            <p className="text-sm text-center mb-10" style={{ color: "#6b7280" }}>
              内部生の成績は「あなたの学校のテスト」で決まります
            </p>
            <div className="space-y-3">
              {/* header row (desktop) */}
              <div className="hidden md:grid grid-cols-[140px_1fr_1fr] gap-4 px-5">
                <span />
                <span className="text-xs font-bold tracking-wide text-center" style={{ color: "#9ca3af" }}>集団塾・映像授業</span>
                <span className="text-xs font-bold tracking-wide text-center" style={{ color: GOLD }}>Medvance（完全1対1）</span>
              </div>
              {compare.map((row, i) => (
                <div key={i} className="grid md:grid-cols-[140px_1fr_1fr] gap-3 md:gap-4 p-5 rounded-2xl" style={{ backgroundColor: CREAM, border: `1px solid ${BORDER}` }}>
                  <div className="flex items-center">
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-bold text-white" style={{ backgroundColor: NAVY }}>{row.axis}</span>
                  </div>
                  <div className="rounded-xl bg-white p-4" style={{ border: `1px solid ${BORDER}` }}>
                    <p className="md:hidden text-[10px] font-bold mb-1" style={{ color: "#9ca3af" }}>集団塾・映像授業</p>
                    <p className="text-sm leading-relaxed" style={{ color: "#6b7280" }}>{row.group}</p>
                  </div>
                  <div className="rounded-xl p-4" style={{ backgroundColor: "#fffdf7", border: `1px solid ${GOLD}55` }}>
                    <p className="md:hidden text-[10px] font-bold mb-1" style={{ color: GOLD }}>Medvance</p>
                    <p className="text-sm leading-relaxed font-medium" style={{ color: NAVY }}>{row.medvance}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 4 PILLARS */}
        <div className="py-16 px-4" style={{ backgroundColor: CREAM }}>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-2 text-center" style={{ color: NAVY, fontFamily: "var(--font-noto-serif)" }}>
              Medvanceの内部生サポート
            </h2>
            <p className="text-sm text-center mb-10" style={{ color: "#6b7280" }}>
              「教えて終わり」にしない、4つの徹底
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {pillars.map((item) => (
                <div key={item.num} className="p-6 rounded-2xl bg-white" style={{ border: `1px solid ${BORDER}` }}>
                  <p className="font-bold text-sm mb-1" style={{ color: GOLD, fontFamily: "var(--font-noto-serif)" }}>{item.num}</p>
                  <p className="font-bold text-base mb-3" style={{ color: NAVY }}>{item.title}</p>
                  <p className="text-sm leading-relaxed" style={{ color: "#6b7280" }}>{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* JOURNEY: わからない → 自力で得点 */}
        <div className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-2 text-center" style={{ color: NAVY, fontFamily: "var(--font-noto-serif)" }}>
              「わからない」から「自分で点が取れる」へ
            </h2>
            <p className="text-sm text-center mb-12" style={{ color: "#6b7280" }}>
              毎回の指導で、この流れを繰り返します
            </p>
            <div className="grid md:grid-cols-3 gap-5">
              {[
                { k: "発見", t: "わからないを特定", b: "本人も気づいていないつまずきを、対話と手元の確認から見つけ出します。" },
                { k: "理解", t: "根本から解消", b: "暗記でごまかさず、なぜそうなるのかを腹落ちするまで1対1で解きほぐします。" },
                { k: "再現", t: "自力で得点", b: "自分で解けるかを確認し、テスト本番で再現できる状態まで仕上げます。" },
              ].map((s, i) => (
                <div key={i} className="relative p-6 rounded-2xl text-center" style={{ backgroundColor: CREAM, border: `1px solid ${BORDER}` }}>
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-full text-sm font-bold text-white mb-4" style={{ backgroundColor: NAVY, fontFamily: "var(--font-noto-serif)" }}>
                    {i + 1}
                  </span>
                  <p className="text-xs font-bold tracking-widest mb-1" style={{ color: GOLD }}>{s.k}</p>
                  <p className="font-bold text-base mb-2" style={{ color: NAVY }}>{s.t}</p>
                  <p className="text-sm leading-relaxed" style={{ color: "#6b7280" }}>{s.b}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RYUNEN / PROMOTION SUPPORT */}
        <div className="py-16 px-4" style={{ backgroundColor: NAVY }}>
          <div className="max-w-3xl mx-auto">
            <p className="text-xs font-semibold tracking-widest uppercase mb-3 text-center" style={{ color: GOLD }}>
              留年回避・進級サポート
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 text-center" style={{ fontFamily: "var(--font-noto-serif)" }}>
              「進級できるか不安」から、立て直す
            </h2>
            <p className="text-sm text-center mb-10" style={{ color: "rgba(255,255,255,0.65)" }}>
              進級基準から逆算し、最低ラインの確保を最優先で設計します
            </p>
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                { t: "進級基準から逆算", b: "「何が足りないと留年か」を学校基準で整理し、守るべき科目と点数を明確化。" },
                { t: "提出物の取りこぼし防止", b: "赤点と並ぶ留年要因が未提出。期限を一緒に管理し、確実に出し切ります。" },
                { t: "テスト前の集中投下", b: "テスト2〜3週間前に頻度を上げ、危険科目を優先して赤点ラインを越えます。" },
              ].map((c, i) => (
                <div key={i} className="rounded-2xl p-6" style={{ backgroundColor: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.12)" }}>
                  <p className="font-bold text-sm mb-2 text-white">{c.t}</p>
                  <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.6)" }}>{c.b}</p>
                </div>
              ))}
            </div>
            <p className="text-xs text-center mt-8" style={{ color: "rgba(255,255,255,0.45)" }}>
              ※ 進級・成績は学校の基準により異なります。状況を伺ったうえで最適な立て直しプランをご提案します。
            </p>
          </div>
        </div>

        {/* SUBJECTS */}
        <div className="py-16 px-4 bg-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-2 text-center" style={{ color: NAVY, fontFamily: "var(--font-noto-serif)" }}>
              対応科目
            </h2>
            <p className="text-sm text-center mb-10" style={{ color: "#6b7280" }}>
              全科目に対応。苦手な1科目からでも受講できます
            </p>
            <div className="space-y-4">
              {subjects.map((item, i) => (
                <div key={i} className="flex items-start gap-5 p-5 rounded-2xl" style={{ backgroundColor: CREAM, border: `1px solid ${BORDER}` }}>
                  <div className="flex-shrink-0 w-16 text-center">
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-bold text-white" style={{ backgroundColor: NAVY }}>{item.name}</span>
                  </div>
                  <p className="text-sm leading-relaxed" style={{ color: "#6b7280" }}>{item.point}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* HOW IT WORKS */}
        <div className="py-16 px-4" style={{ backgroundColor: CREAM }}>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-2 text-center" style={{ color: NAVY, fontFamily: "var(--font-noto-serif)" }}>
              指導の進め方
            </h2>
            <p className="text-sm text-center mb-10" style={{ color: "#6b7280" }}>無料相談から指導開始まで最短1週間</p>
            <div className="space-y-4">
              {steps.map((item, i) => (
                <div key={i} className="flex gap-5 p-6 rounded-2xl bg-white" style={{ border: `1px solid ${BORDER}` }}>
                  <div className="flex-shrink-0">
                    <span className="inline-block text-xs font-bold px-2 py-1 rounded-full" style={{ backgroundColor: NAVY, color: GOLD }}>{item.step}</span>
                  </div>
                  <div>
                    <p className="font-bold text-sm mb-1" style={{ color: NAVY }}>{item.title}</p>
                    <p className="text-sm leading-relaxed" style={{ color: "#6b7280" }}>{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* PRICING */}
        <div className="py-16 px-4 bg-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-2 text-center" style={{ color: NAVY, fontFamily: "var(--font-noto-serif)" }}>
              料金の目安
            </h2>
            <p className="text-sm text-center mb-10" style={{ color: "#6b7280" }}>
              1科目からOK。無料相談後に最適なプランをご提案します
            </p>
            <div className="grid md:grid-cols-3 gap-5">
              {[
                { plan: "進級・赤点対策プラン", freq: "月4〜6回", price: "月額 ¥38,000〜", desc: "危険科目と提出物に集中。まずは進級ラインの確保を最優先します。" },
                { plan: "成績継続プラン", freq: "月8〜10回", price: "月額 ¥76,000〜", desc: "毎週の伴走で評定・成績を安定的に底上げ。内部進学にも備えます。", highlight: true },
                { plan: "複数科目強化プラン", freq: "月12回〜", price: "月額 ¥110,000〜", desc: "2〜3科目を並行指導。全体の評定の底上げを狙います。" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="p-6 rounded-2xl"
                  style={{ backgroundColor: (item as { highlight?: boolean }).highlight ? NAVY : "white", border: (item as { highlight?: boolean }).highlight ? "none" : `1px solid ${BORDER}` }}
                >
                  <p className="text-xs font-semibold mb-2" style={{ color: GOLD }}>{item.plan}</p>
                  <p className="font-bold text-xl mb-1" style={{ color: (item as { highlight?: boolean }).highlight ? "#fff" : NAVY }}>{item.price}</p>
                  <p className="text-xs mb-3" style={{ color: (item as { highlight?: boolean }).highlight ? "rgba(255,255,255,0.6)" : "#6b7280" }}>{item.freq}</p>
                  <p className="text-sm leading-relaxed" style={{ color: (item as { highlight?: boolean }).highlight ? "rgba(255,255,255,0.75)" : "#6b7280" }}>{item.desc}</p>
                </div>
              ))}
            </div>
            <p className="text-xs text-center mt-6" style={{ color: "#9ca3af" }}>
              ※ 上記は目安です。学年・科目数・状況によって最適なプランをご提案します。
            </p>
          </div>
        </div>

        {/* RELATED + FAQ */}
        <div className="py-16 px-4" style={{ backgroundColor: CREAM }}>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-xl font-bold mb-8 text-center" style={{ color: NAVY }}>関連ページ</h2>
            <div className="grid md:grid-cols-3 gap-4 mb-14">
              {[
                { href: "/for/seiseki-up?from=naibu-seiseki", title: "学校の成績を上げたい方へ", label: "成績向上" },
                { href: "/for/keio-naibu?from=naibu-seiseki", title: "慶應内部進学を目指す方へ", label: "内部進学" },
                { href: "/for/not-group-school?from=naibu-seiseki", title: "集団塾が合わない方へ", label: "個別指導" },
              ].map((article) => (
                <Link key={article.href} href={article.href} className="block p-5 rounded-xl bg-white hover:shadow-md transition-shadow" style={{ border: `1px solid ${BORDER}` }}>
                  <span className="inline-block text-xs font-semibold tracking-wide px-2 py-0.5 rounded-full mb-3" style={{ backgroundColor: NAVY, color: GOLD }}>{article.label}</span>
                  <p className="text-sm font-bold leading-snug" style={{ color: NAVY }}>{article.title}</p>
                  <p className="text-xs font-semibold mt-3" style={{ color: GOLD }}>詳しく見る →</p>
                </Link>
              ))}
            </div>

            <h2 className="text-2xl font-bold mb-8 text-center" style={{ color: NAVY, fontFamily: "var(--font-noto-serif)" }}>よくある質問</h2>
            <div className="space-y-4">
              {(forPageMeta["naibu-seiseki"].faq ?? []).map((faq, i) => (
                <details key={i} className="rounded-xl overflow-hidden" style={{ border: `1px solid ${BORDER}` }}>
                  <summary className="flex items-center justify-between px-6 py-5 cursor-pointer font-semibold text-sm select-none list-none bg-white" style={{ color: NAVY }}>
                    <span>Q. {faq.q}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 flex-shrink-0 ml-4" style={{ color: GOLD }}><path strokeLinecap="round" strokeLinejoin="round" d="m19 9-7 7-7-7" /></svg>
                  </summary>
                  <div className="px-6 pb-5 pt-1 text-sm leading-relaxed" style={{ color: "#4a5568", backgroundColor: "#faf9f6" }}>{faq.a}</div>
                </details>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div style={{ backgroundColor: NAVY }} className="py-20 px-4">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: GOLD }}>無料相談受付中</p>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-noto-serif)" }}>
              内部の成績・進級のお悩みは<br />Medvanceにお任せください
            </h2>
            <p className="text-sm mb-8" style={{ color: "rgba(255,255,255,0.65)" }}>
              現在の状況・つまずいている科目・学校のカリキュラムをお聞かせいただければ、<br />最適な立て直しプランを無料でご提案します。
            </p>
            <Link
              href="/contact"
              className="inline-block px-10 py-4 rounded-xl font-bold text-white text-base hover:opacity-90 transition-opacity"
              style={{ backgroundColor: GOLD }}
            >
              無料相談を申し込む
            </Link>
            <p className="text-xs mt-4" style={{ color: "rgba(255,255,255,0.4)" }}>
              相談後の勧誘は一切ありません
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
