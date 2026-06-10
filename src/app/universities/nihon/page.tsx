import UniversityPageSchemas from "@/components/UniversityPageSchemas";
import Link from "next/link";
import UniversityHero from "@/components/UniversityHero";

export const metadata = {
  title: "日本大学医学部受験対策｜入試傾向・合格戦略",
  description: "日本大学医学部の一般選抜N全学統一方式を、2026年度入学者選抜案内ベースで整理。1次試験の理科2科目・英語・数学と、2次試験の数学・英語・面接まで、押さえるべきポイントを解説します。",

  alternates: {
    canonical: "/universities/nihon",
  },};

const subjects = [
  {
    name: "英語（1次試験）",
    level: "★★★☆☆",
    body: "1次試験では60分・100点です。限られた時間で基礎から標準レベルを取り切る安定感が重要です。",
    detail: "2026年度一般選抜N全学統一方式第1期の出題範囲は「英語コミュニケーションI・II・III」「論理・表現I・II・III」です。1次試験では数学・理科と合わせて標準化得点で判定されます。",
  },
  {
    name: "数学（1次試験）",
    level: "★★★☆☆",
    body: "1次試験では60分・100点です。数III・Cまでを短時間で処理するため、典型問題の再現力が重要です。",
    detail: "2026年度一般選抜N全学統一方式第1期の出題範囲は数学I・II・III・A・B・Cで、Aは図形の性質・場合の数と確率、Bは数列、Cはベクトル・平面上の曲線と複素数平面です。1次試験では標準化得点に換算して判定されます。",
  },
  {
    name: "理科（1次試験・2科目選択）",
    level: "★★★★☆",
    body: "1次試験では120分・200点です。物理・化学・生物から2科目を選びます。",
    detail: "2026年度一般選抜N全学統一方式第1期では、「物理基礎・物理」「化学基礎・化学」「生物基礎・生物」から2科目選択です。各60分の計120分で、1次試験の中では最も配点が大きい科目です。",
  },
  {
    name: "数学・英語（2次試験）",
    level: "★★★★☆",
    body: "2次試験では数学60分・60点、英語60分・60点が課されます。1次通過後も学力試験が続く点が特徴です。",
    detail: "2026年度一般選抜N全学統一方式第1期では、2次試験で数学（記述式）60分60点、英語60分60点が実施されます。1次だけで終わる大学ではないため、2次の筆記まで見据えて準備する必要があります。",
  },
  {
    name: "面接",
    level: "★★★☆☆",
    body: "2次試験では約20分・30点の面接があります。学力だけでなく人物面も評価されます。",
    detail: "2026年度一般選抜N全学統一方式第1期では、面接は約20分・30点です。さらに、インターネット出願サイトのマイページに入力した内容が面接時の参考資料として使われます。",
  },
];

const strategies = [
  {
    step: "01",
    title: "1次試験と2次試験を別物として準備する",
    body: "日本大学医学部の一般選抜N方式は、1次試験で理科2科目・英語・数学、2次試験で数学・英語・面接が課されます。1次を通れば終わりではないため、2次の筆記まで含めた年間設計が必要です。",
  },
  {
    step: "02",
    title: "理科2科目200点を落とさない",
    body: "1次試験では理科2科目が200点で最も配点が大きく、合否に直結します。英数だけでなく、理科2科目を秋までに120分通しで回せる状態にすることが重要です。",
  },
  {
    step: "03",
    title: "2次試験の数学・英語を後回しにしない",
    body: "日本大学医学部は2次でも数学60分・英語60分があるため、1次試験向けだけの準備では足りません。1次通過後に慌てないよう、高3秋までに2次の形式にも触れておくべきです。",
  },
  {
    step: "04",
    title: "面接はマイページ入力内容まで含めて整える",
    body: "2026年度案内では、マイページ入力内容が面接時の参考資料として使われます。志望理由や経験の説明が書類と面接でずれないよう、秋までに整理しておくことが重要です。",
  },
  {
    step: "05",
    title: "N方式第1期・第2期の日程差まで見て受験計画を立てる",
    body: "2026年度は第1期が80名、第2期が15名です。まず第1期を軸にしつつ、第2期まで見据えて他大学との日程を整理すると、直前期の判断が安定します。",
  },
];

const faqs = [
  {
    q: "日本大学医学部の難易度はどのくらいですか？",
    a: "私立医学部の中では標準〜やや難のレベルです。基礎から標準問題を確実に解く力があれば十分に合格圏内に入れます。難問への対策よりも基礎固めの完成度を高めることが最も効果的です。",
  },
  {
    q: "日本大学医学部の対策はいつから始めるべきですか？",
    a: "高2の終わりから1次試験科目の基礎を固め、高3夏までに理科2科目を含めて1次試験仕様へ寄せるのが理想です。2次の数学・英語・面接もあるため、秋以降は2次形式にも触れていく必要があります。",
  },
  {
    q: "日本大学医学部の一般選抜に小論文はありますか？",
    a: "2026年度一般選抜N全学統一方式第1期では、小論文はありません。2次試験は数学60分・英語60分・面接約20分です。小論文ありの前提で準備すると優先順位を誤りやすいので注意してください。",
  },
  {
    q: "理科は何科目必要ですか？",
    a: "2026年度一般選抜N全学統一方式第1期では、理科は物理・化学・生物から2科目選択です。『物理または化学から2科目』ではなく、3科目から2つ選ぶ形式です。",
  },
  {
    q: "2次試験では何が課されますか？",
    a: "2026年度一般選抜N全学統一方式第1期では、2次試験で数学60分・60点、英語60分・60点、面接約20分・30点が課されます。1次通過後も筆記試験が続く点が特徴です。",
  },
];

export default function NihonPage() {
  return (
    <>
      <UniversityPageSchemas name="日本大学医学部" slug="nihon" breadcrumbLabel="日本大医学部対策"  faq={faqs} />
          <div className="min-h-screen bg-white">
      {/* Hero */}
      <UniversityHero slug="nihon">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#c9922a" }}>日本大学医学部</p>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-noto-serif)" }}>日本大学医学部合格への最短ルート。</h1>
          <p className="text-base" style={{ color: "rgba(255,255,255,0.65)" }}>現役慶應医学部生が入試傾向と対策を解説</p>
        </div>
      </UniversityHero>

      {/* 入試概要 */}
      <div className="py-16 px-4" style={{ backgroundColor: "#f7f5f0" }}>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-6" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>日本大学医学部の入試概要</h2>
          <div className="p-8 rounded-2xl bg-white" style={{ border: "1px solid #e5e1d8" }}>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "#3d3d3d" }}>
              日本大学医学部は、東京都板橋区に位置する歴史ある私立医学部です。2026年度一般選抜N全学統一方式第1期では、1次試験で理科2科目120分200点、英語60分100点、数学60分100点が課されます。理科は物理・化学・生物から2科目選択です。
            </p>
            <p className="text-sm leading-relaxed mb-6" style={{ color: "#3d3d3d" }}>
              2次試験では、数学60分・60点、英語60分・60点、面接約20分・30点が実施されます。一般選抜で小論文が課されるわけではなく、1次通過後も数学と英語の筆記が続く点が大きな特徴です。
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "募集人員", value: "第1期80名" },
                { label: "1次試験", value: "英・数・理2科目" },
                { label: "2次試験", value: "数・英・面接" },
                { label: "試験日", value: "1次 2/1・2次 2/11" },
              ].map((item) => (
                <div key={item.label} className="text-center p-3 rounded-xl" style={{ backgroundColor: "#f7f5f0", border: "1px solid #e5e1d8" }}>
                  <p className="text-xs mb-1" style={{ color: "#c9922a" }}>{item.label}</p>
                  <p className="font-bold text-sm" style={{ color: "#0c1a33" }}>{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 合格戦略 */}
      <div className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-4" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>日本大学医学部合格のための戦略</h2>
          <div className="space-y-6">
            {strategies.map((item) => (
              <div key={item.step} className="flex gap-5 p-6 rounded-2xl" style={{ backgroundColor: "#f7f5f0", border: "1px solid #e5e1d8" }}>
                <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-white text-xs font-bold" style={{ backgroundColor: "#c9922a" }}>{item.step}</div>
                <div>
                  <p className="font-bold text-base mb-2" style={{ color: "#0c1a33" }}>{item.title}</p>
                  <p className="text-sm leading-relaxed" style={{ color: "#6b7280" }}>{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 科目別対策 */}
      <div className="py-16 px-4" style={{ backgroundColor: "#f7f5f0" }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-10" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>科目別対策のポイント</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {subjects.map((item, i) => (
              <div key={i} className="p-6 rounded-2xl bg-white" style={{ border: "1px solid #e5e1d8" }}>
                <div className="flex items-center justify-between mb-3">
                  <p className="font-bold text-base" style={{ color: "#c9922a" }}>{item.name}</p>
                  <p className="text-xs" style={{ color: "#c9922a" }}>{item.level}</p>
                </div>
                <p className="text-sm leading-relaxed mb-3" style={{ color: "#3d3d3d" }}>{item.body}</p>
                <p className="text-xs leading-relaxed p-3 rounded-lg" style={{ color: "#6b7280", backgroundColor: "#f7f5f0" }}>{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>よくあるご質問</h2>
          <div className="space-y-4">
            {faqs.map((item, i) => (
              <div key={i} className="p-6 rounded-2xl" style={{ backgroundColor: "#f7f5f0", border: "1px solid #e5e1d8" }}>
                <p className="font-bold text-sm mb-2" style={{ color: "#0c1a33" }}>Q. {item.q}</p>
                <p className="text-sm leading-relaxed" style={{ color: "#6b7280" }}>A. {item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="py-20 px-4" style={{ backgroundColor: "#0c1a33" }}>
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-sm font-semibold tracking-widest uppercase mb-3" style={{ color: "#c9922a" }}>Free Consultation</p>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-noto-serif)" }}>まずは無料相談から</h2>
          <p className="mb-8 text-sm" style={{ color: "rgba(255,255,255,0.65)" }}>日本大学医学部合格への道筋を、一緒に考えます。</p>
          <Link href="/contact" className="inline-block px-8 py-4 text-white font-bold text-base rounded-lg shadow-md hover:opacity-90 transition-opacity" style={{ backgroundColor: "#c9922a" }}>
            無料相談・お問い合わせ
          </Link>
        </div>
      </div>
    </div>
    </>
  );
}