import Link from "next/link";
import UniversityHero from "@/components/UniversityHero";
export const metadata = { title: "東北医科薬科大学受験対策｜入試傾向・合格戦略 | Medvance", description: "東北医科薬科大学医学部の入試傾向・科目別対策・合格戦略を現役慶應医学部生が解説。2016年新設の東北の私立医学部への合格ガイド。", 
  alternates: {
    canonical: "/universities/tohoku-ika",
  },};
const subjects = [
  { name: "英語", level: "★★★☆☆", body: "長文読解を中心に標準〜やや難レベルの出題。語彙力と読解スピードが合否を分けます。", detail: "長文読解2〜3題＋文法・語彙問題の構成。医療・科学系テーマが頻出。標準語彙の定着と読解スピードの向上が優先課題。新設校だが入試問題の質は高く、油断できない。" },
  { name: "数学", level: "★★★☆☆", body: "標準〜やや難レベルの問題が中心。頻出分野をしっかり対策することで安定した得点が狙えます。", detail: "大問4〜5題。微積分・確率・数列が頻出。基礎〜標準問題を確実に解く力が合格の条件。難問より解法の安定性と計算精度を重視した演習が有効。" },
  { name: "物理", level: "★★★☆☆", body: "力学・電磁気を中心に標準的な出題。基本概念の正確な理解が安定した得点につながります。", detail: "力学・電磁気・波動・熱力学から出題。難問はほとんどなく、基本公式の正確な適用と計算力が問われる。物理全体を満遍なく対策することが重要。" },
  { name: "化学", level: "★★★☆☆", body: "有機・無機・理論化学がバランスよく出題。基礎知識の定着と計算問題の精度が合否を分けます。", detail: "全分野から出題。標準問題が中心で、化学全体の基礎を固めることが有効。計算問題の正確性と有機化学の構造理解が特に重要。" },
  { name: "面接・小論文", level: "★★★★☆", body: "面接・小論文の比重が高い選考スタイル。東北の医療人材育成という建学理念への共感が重視されます。", detail: "東北医科薬科大学の建学理念（東北の医療人材育成）への理解と共感が面接で問われる。地域医療課題・東北の医療事情への見識を深めた準備が必須。小論文は医療倫理・地域医療テーマが中心。" },
];
const strategies = [
  { step: "01", title: "全科目の基礎〜標準を均等に仕上げる", body: "標準〜やや難レベルが中心のため、全科目で標準問題を安定して解ける力をつけることが合格の条件。特定科目に偏った学習ではなく、英語・数学・理科2科目すべてをバランスよく仕上げる。" },
  { step: "02", title: "建学理念への理解と面接準備を早めに着手", body: "東北の医療人材育成という建学理念を深く理解し、面接でその理念への共感と自分の志望動機を結びつけて語れるよう準備する。東北地方の医療課題（過疎地・高齢化・震災後の医療体制）への理解が差をつける。" },
  { step: "03", title: "小論文の構成力と医療倫理への知識を養う", body: "地域医療・医療倫理テーマへの対応力を養う。構成の型（序論・本論・結論）を身につけた上で、医療ニュースや東北の医療事情を日頃から追い、引き出しを増やす。" },
  { step: "04", title: "過去問を活用した出題傾向の把握", body: "2016年新設の大学のため過去問数は少ないが、既存の問題をすべて分析して出題傾向を把握する。類似する私立医学部の過去問も活用し、本番形式に慣れた演習を積む。" },
];
const faqs = [
  { q: "新設の医学部ですが、教育環境は整っていますか？", a: "東北医科薬科大学は2016年の新設ですが、既存の薬学部・東北大学病院との連携体制が整っています。臨床実習は東北大学病院など複数の附属・連携病院で行われます。" },
  { q: "東北医科薬科大学の入試難易度はどのくらいですか？", a: "標準〜やや難レベルで、私立医学部の中では中程度に位置します。ただし面接・小論文の比重が高く、学力だけでなく東北の地域医療への関心・理解が合否を左右します。" },
  { q: "東北以外から受験する場合のアドバイスはありますか？", a: "全国から受験可能ですが、東北の地域医療への貢献を明確に語れることが重要です。地域医療課題への関心と具体的な志望理由を準備しておくことが、面接突破の鍵になります。" },
];
export default function TohokuIkaPage() {
  return (
    <div className="min-h-screen bg-white">
      <UniversityHero slug="tohoku-ika">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#c9922a" }}>大学別対策ガイド</p>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-noto-serif)" }}>東北医科薬科大学<br />入試対策ガイド</h1>
          <p className="text-sm mb-6" style={{ color: "rgba(255,255,255,0.65)" }}>現役慶應医学部生による入試傾向・合格戦略の完全解説</p>
          <div className="flex flex-wrap justify-center gap-3">
            <span className="px-4 py-1.5 rounded-full text-xs font-semibold" style={{ backgroundColor: "rgba(201,146,42,0.2)", color: "#c9922a", border: "1px solid rgba(201,146,42,0.4)" }}>私立医学部</span>
            <span className="px-4 py-1.5 rounded-full text-xs font-semibold" style={{ backgroundColor: "rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.8)", border: "1px solid rgba(255,255,255,0.2)" }}>宮城県</span>
          </div>
        </div>
      </UniversityHero>
      <div className="py-14 px-4" style={{ backgroundColor: "#f7f5f0" }}>
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: "#c9922a" }}>Overview</p>
          <h2 className="text-2xl font-bold mb-4" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>東北医科薬科大学の特徴</h2>
          <p className="text-sm leading-relaxed" style={{ color: "#374151" }}>東北医科薬科大学医学部は2016年に新設された医学部で、東北地方の医療人材育成を使命としています。入試は標準〜やや難レベルで、学力とともに地域医療への貢献意識が強く問われます。面接・小論文の比重が高く、東北の医療課題への理解と建学理念への共感が合否を大きく左右します。</p>
        </div>
      </div>
      <div className="py-14 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: "#c9922a" }}>Subject Analysis</p>
          <h2 className="text-2xl font-bold mb-8" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>科目別出題傾向</h2>
          <div className="space-y-6">
            {subjects.map((s) => (
              <div key={s.name} className="p-6 rounded-2xl" style={{ border: "1px solid #e5e1d8" }}>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-bold text-base" style={{ color: "#0c1a33" }}>{s.name}</h3>
                  <span className="text-sm" style={{ color: "#c9922a" }}>{s.level}</span>
                </div>
                <p className="text-sm mb-2" style={{ color: "#374151" }}>{s.body}</p>
                <p className="text-xs leading-relaxed" style={{ color: "#6b7280" }}>{s.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="py-14 px-4" style={{ backgroundColor: "#f7f5f0" }}>
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: "#c9922a" }}>Strategy</p>
          <h2 className="text-2xl font-bold mb-8" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>合格するための戦略</h2>
          <div className="space-y-5">
            {strategies.map((s) => (
              <div key={s.step} className="flex gap-5 p-6 bg-white rounded-2xl" style={{ border: "1px solid #e5e1d8" }}>
                <div className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm" style={{ backgroundColor: "#0c1a33", color: "#c9922a" }}>{s.step}</div>
                <div>
                  <h3 className="font-bold text-sm mb-2" style={{ color: "#0c1a33" }}>{s.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#374151" }}>{s.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="py-14 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: "#c9922a" }}>FAQ</p>
          <h2 className="text-2xl font-bold mb-8" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>よくある質問</h2>
          <div className="space-y-5">
            {faqs.map((f, i) => (
              <div key={i} className="p-6 rounded-2xl" style={{ border: "1px solid #e5e1d8" }}>
                <p className="font-bold text-sm mb-2" style={{ color: "#0c1a33" }}>Q. {f.q}</p>
                <p className="text-sm leading-relaxed" style={{ color: "#374151" }}>A. {f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="py-16 px-4" style={{ backgroundColor: "#0c1a33" }}>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#c9922a" }}>Free Consultation</p>
          <h2 className="text-2xl font-bold text-white mb-3" style={{ fontFamily: "var(--font-noto-serif)" }}>東北医科薬科大学対策の相談はこちら</h2>
          <p className="text-sm mb-6" style={{ color: "rgba(255,255,255,0.65)" }}>現役慶應医学部生が個別に対策をアドバイスします。</p>
          <Link href="/contact" className="inline-block px-8 py-4 text-white font-bold text-base rounded-lg hover:opacity-90 transition-opacity" style={{ backgroundColor: "#c9922a" }}>無料相談・お問い合わせ</Link>
        </div>
      </div>
    </div>
  );
}
