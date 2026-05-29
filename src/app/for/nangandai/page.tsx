import ForPageSchemas from "@/components/ForPageSchemas";
import { forPageMeta } from "@/lib/forPageMeta";
import Link from "next/link";
import type { Metadata } from "next";


const targetUniversities = [
  { name: "東京大学（理科一類・理科二類・理科三類）", level: "最難関" },
  { name: "京都大学（理工学部・医学部など）", level: "最難関" },
  { name: "一橋大学・東京工業大学", level: "難関" },
  { name: "慶應義塾大学（理工・法・経済・医）", level: "難関" },
  { name: "早稲田大学（理工・政経・法など）", level: "難関" },
  { name: "上智大学・東京理科大学", level: "難関" },
  { name: "その他難関国公立大学・私立大学", level: "対応可" },
];

const whyMedvance = [
  {
    num: "01",
    title: "医学部受験で磨いた「本質的な学力」",
    body: "慶應医学部の受験では、英語・数学・理科すべてで最高水準の理解力が要求されます。「暗記で乗り切る学力」ではなく、どんな問題にも対応できる本質的な理解を持った講師が指導します。",
  },
  {
    num: "02",
    title: "完全1対1で志望校の傾向に合わせた指導",
    body: "集団塾と違い、志望校の過去問・出題傾向・採点基準を分析したうえで、その生徒に必要な対策だけを行います。無駄な勉強をなくし、最短で合格水準に引き上げます。",
  },
  {
    num: "03",
    title: "英語・数学・理科は全員最高水準",
    body: "医学部受験の英語・数学は東大・京大・早慶の難易度と同等またはそれ以上です。理科（物理・化学・生物）も高水準。難関大受験で差がつく科目を全員が高いレベルで指導できます。",
  },
  {
    num: "04",
    title: "「なぜ間違えたか」の根本分析",
    body: "答えを教えるだけでなく、「なぜその解法を選んだか」「どこで思考が止まったか」を掘り下げます。同じミスを繰り返さない思考プロセスを身につけることで、初見問題への対応力が上がります。",
  },
];

export const metadata: Metadata = {
  title: "難関大受験（東大・京大・早慶）の家庭教師｜現役医学部生が指導 | Medvance",
  description:
    "東大・京大・早慶・難関国公立大を目指す受験生向けの完全1対1家庭教師。医学部受験を勝ち抜いた現役医学部生が英語・数学・物理・化学を本質から指導。全国オンライン対応。",
  keywords: [
    "難関大受験 家庭教師",
    "東大受験 家庭教師",
    "慶應 家庭教師 難関大",
    "早慶受験 個別指導",
    "難関大 理系 家庭教師",
  ],
  alternates: {
    canonical: "/for/nangandai",
  },
};

export default function NangandaiPage() {
  return (
    <>
      <ForPageSchemas slug="nangandai" />
      <div className="min-h-screen bg-white">

      {/* HERO */}
      <div style={{ backgroundColor: "#0c1a33" }} className="py-24 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: "#c9922a" }}>難関大受験対策</p>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight" style={{ fontFamily: "var(--font-noto-serif)" }}>
            東大・京大・早慶<br />難関大受験を突破する
          </h1>
          <p className="text-base md:text-lg mb-8" style={{ color: "rgba(255,255,255,0.7)" }}>
            現役医学部生が英語・数学・理科を<br />本質から1対1で指導。全国オンライン対応。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-8 py-4 rounded-xl font-bold text-white text-base hover:opacity-90 transition-opacity"
              style={{ backgroundColor: "#c9922a" }}
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
        </div>
      </div>

      {/* LOGIC */}
      <div className="py-16 px-4" style={{ backgroundColor: "#f7f5f0" }}>
        <div className="max-w-3xl mx-auto">
          <div className="p-8 rounded-2xl bg-white" style={{ border: "1px solid #e5e1d8" }}>
            <h2 className="text-lg font-bold mb-4" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>
              なぜ「慶應医学部生」が難関大受験にも対応できるのか
            </h2>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "#3d3d3d" }}>
              慶應義塾大学医学部の入試難易度は、東大理一・理二と同等かそれ以上とされています。英語・数学・物理・化学のすべてで最高水準の学力が要求され、さらに面接・小論文まで課されます。
            </p>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "#3d3d3d" }}>
              つまりMedvanceの講師は全員、難関大受験に必要な学力を自ら証明した人材です。「教科書の内容を教える」レベルではなく、初見の難問でも自力で解く思考力を持っています。
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#3d3d3d" }}>
              その学力を生かして、東大・京大・早慶・難関国公立を目指す受験生にも本質的な指導を提供します。
            </p>
          </div>
        </div>
      </div>

      {/* TARGET UNIVERSITIES */}
      <div className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-2 text-center" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>
            対応している志望校
          </h2>
          <p className="text-sm text-center mb-10" style={{ color: "#6b7280" }}>理系・文系問わず相談可能</p>
          <div className="space-y-3">
            {targetUniversities.map((univ, i) => (
              <div key={i} className="flex items-center justify-between px-6 py-4 rounded-xl" style={{ backgroundColor: "#f7f5f0", border: "1px solid #e5e1d8" }}>
                <span className="text-sm font-medium" style={{ color: "#3d3d3d" }}>{univ.name}</span>
                <span className="text-xs font-bold px-3 py-1 rounded-full flex-shrink-0 ml-4"
                  style={{
                    backgroundColor: univ.level === "最難関" ? "#0c1a33" : univ.level === "難関" ? "#c9922a" : "rgba(0,0,0,0.07)",
                    color: univ.level === "最難関" ? "#c9922a" : univ.level === "難関" ? "#fff" : "#6b7280",
                  }}>
                  {univ.level}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* WHY MEDVANCE */}
      <div className="py-16 px-4" style={{ backgroundColor: "#f7f5f0" }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-2 text-center" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>
            Medvanceが選ばれる4つの理由
          </h2>
          <p className="text-sm text-center mb-10" style={{ color: "#6b7280" }}>
            医学部受験で鍛えた「本物の学力」を難関大受験に
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {whyMedvance.map((item) => (
              <div key={item.num} className="p-6 rounded-2xl bg-white" style={{ border: "1px solid #e5e1d8" }}>
                <p className="font-bold text-sm mb-1" style={{ color: "#c9922a" }}>{item.num}</p>
                <p className="font-bold text-base mb-3" style={{ color: "#0c1a33" }}>{item.title}</p>
                <p className="text-sm leading-relaxed" style={{ color: "#6b7280" }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* SUBJECTS */}
      <div className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-2 text-center" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>
            対応科目
          </h2>
          <p className="text-sm text-center mb-10" style={{ color: "#6b7280" }}>理系科目は全員対応。英語も全員対応。</p>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { subject: "数学（IA・IIB・IIIC）", note: "全員対応。証明・記述・応用まで。" },
              { subject: "英語", note: "全員対応。長文・英作文・和訳まで。" },
              { subject: "物理", note: "全員対応。力学・電磁気・熱・波動。" },
              { subject: "化学", note: "全員対応。理論・無機・有機。" },
              { subject: "生物", note: "全員対応。知識・論述・考察問題。" },
              { subject: "国語・社会", note: "担当講師による（要相談）。" },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4 p-5 rounded-xl" style={{ backgroundColor: "#f7f5f0", border: "1px solid #e5e1d8" }}>
                <span className="flex-shrink-0 text-xs font-bold px-2 py-1 rounded-full mt-0.5 text-white" style={{ backgroundColor: "#0c1a33" }}>科目</span>
                <div>
                  <p className="font-bold text-sm" style={{ color: "#0c1a33" }}>{item.subject}</p>
                  <p className="text-xs mt-1" style={{ color: "#6b7280" }}>{item.note}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* PRICING */}
      <div className="py-16 px-4" style={{ backgroundColor: "#f7f5f0" }}>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-2 text-center" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>料金の目安</h2>
          <p className="text-sm text-center mb-10" style={{ color: "#6b7280" }}>契約縛りなし。無料相談後にご提案します。</p>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              { plan: "科目スポットプラン", freq: "月4〜8回", price: "月額 ¥48,000〜", desc: "1〜2科目に集中。苦手科目の底上げや過去問対策に。" },
              { plan: "本格受験対策プラン", freq: "月10〜14回", price: "月額 ¥110,000〜", desc: "複数科目を並行指導。志望校合格に必要な水準まで引き上げ。", highlight: true },
              { plan: "直前集中プラン", freq: "月16回〜", price: "月額 ¥150,000〜", desc: "入試直前期の仕上げに。弱点の最終修正・実戦演習を集中実施。" },
            ].map((item, i) => (
              <div key={i} className="p-6 rounded-2xl" style={{ backgroundColor: item.highlight ? "#0c1a33" : "white", border: item.highlight ? "none" : "1px solid #e5e1d8" }}>
                <p className="text-xs font-semibold mb-2" style={{ color: "#c9922a" }}>{item.plan}</p>
                <p className="font-bold text-xl mb-1" style={{ color: item.highlight ? "#fff" : "#0c1a33" }}>{item.price}</p>
                <p className="text-xs mb-3" style={{ color: item.highlight ? "rgba(255,255,255,0.6)" : "#6b7280" }}>{item.freq}</p>
                <p className="text-sm leading-relaxed" style={{ color: item.highlight ? "rgba(255,255,255,0.75)" : "#6b7280" }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-8" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>よくある質問</h2>
          <div className="space-y-4">
            {(forPageMeta["nangandai"].faq ?? []).map((faq, i) => (
              <details key={i} className="rounded-xl overflow-hidden" style={{ border: "1px solid #e5e1d8" }}>
                <summary className="flex items-center justify-between px-6 py-5 cursor-pointer font-semibold text-sm select-none list-none bg-white" style={{ color: "#0c1a33" }}>
                  <span>Q. {faq.q}</span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 flex-shrink-0 ml-4" style={{ color: "#c9922a" }}><path strokeLinecap="round" strokeLinejoin="round" d="m19 9-7 7-7-7" /></svg>
                </summary>
                <div className="px-6 pb-5 pt-1 text-sm leading-relaxed" style={{ color: "#4a5568", backgroundColor: "#faf9f6" }}>{faq.a}</div>
              </details>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div style={{ backgroundColor: "#0c1a33" }} className="py-20 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#c9922a" }}>無料相談受付中</p>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-noto-serif)" }}>
            難関大受験の合格を<br />Medvanceと目指す
          </h2>
          <p className="text-sm mb-8" style={{ color: "rgba(255,255,255,0.65)" }}>
            志望校・現在の学力・課題をお聞かせいただければ、<br />最適な指導プランを無料でご提案します。
          </p>
          <Link href="/contact" className="inline-block px-10 py-4 rounded-xl font-bold text-white text-base hover:opacity-90 transition-opacity" style={{ backgroundColor: "#c9922a" }}>
            無料相談を申し込む
          </Link>
          <p className="text-xs mt-4" style={{ color: "rgba(255,255,255,0.4)" }}>相談後の勧誘は一切ありません</p>
        </div>
      </div>
    </div>
    </>
  );
}
