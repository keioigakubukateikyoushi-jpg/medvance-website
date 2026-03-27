import Link from "next/link";
export const metadata = { title: "福岡大学医学部受験対策｜入試傾向・合格戦略 | Medvance", description: "福岡大学医学部の入試傾向・科目別対策・合格戦略を現役慶應医学部生が解説。九州圏の私立医学部合格への完全ガイド。" };
const subjects = [
  { name: "英語", level: "★★★☆☆", body: "長文読解と文法・語彙問題がバランスよく出題。標準的な難易度で、全体的な英語力が問われます。", detail: "長文読解2〜3題＋文法・語彙・整序問題の構成。医療・科学系テーマが頻出。標準語彙の定着と読解スピードの向上が合格への鍵。" },
  { name: "数学", level: "★★★☆☆", body: "標準レベルの問題が中心。頻出分野をしっかり押さえることで安定した得点が狙えます。", detail: "大問4〜5題。微積分・確率・数列が頻出。基礎〜標準問題を確実に解く力が求められる。難問よりも解法の安定性と計算精度が重要。" },
  { name: "物理", level: "★★★☆☆", body: "力学・電磁気を中心に標準的な出題。基本概念の正確な理解が安定した得点につながります。", detail: "力学・電磁気・波動から出題。難問は少なく、基本公式の正確な適用が求められる。計算ミスを防ぐ演習と時間管理が重要。" },
  { name: "化学", level: "★★★☆☆", body: "有機・無機・理論化学がバランスよく出題。基礎知識の確実な定着が合否を分けます。", detail: "全分野から均等に出題。標準問題が中心で、化学全体の基礎を満遍なく固めることが有効。計算問題の正確性も重要。" },
  { name: "面接・小論文", level: "★★★☆☆", body: "個人面接と小論文が実施されます。医師としての志望動機と社会への関心が評価されます。", detail: "個人面接では志望動機・医師への動機・社会問題への見解が問われる。小論文は医療倫理・社会問題系テーマが多く、論理的な構成と自分の意見を明確に述べる力が必要。" },
];
const strategies = [
  { step: "01", title: "全科目の基礎〜標準を均等に仕上げる", body: "全科目バランス型の出題のため、特定科目に偏った対策は危険。英語・数学・理科2科目すべてで標準問題レベルまで安定して解ける力をつけることが合格の条件。" },
  { step: "02", title: "標準問題での取りこぼしをゼロにする", body: "難問は少ないため、基礎〜標準問題での失点が合否を直接左右する。各科目で「確実に取れる問題」を増やす演習を繰り返し、本番でのミスを最小限に抑える。" },
  { step: "03", title: "過去問を活用した出題傾向の把握", body: "福岡大学の出題形式・頻出分野を過去問から把握し、効率的な対策を立てる。特に英語の長文形式と数学の頻出単元は早めに確認し、重点的に演習する。" },
  { step: "04", title: "面接・小論文の準備を計画的に進める", body: "医療系ニュースへの関心を日頃から持ち、面接で自分の意見を述べられるよう準備する。小論文は構成の型を身につけた上で、医療倫理テーマへの引き出しを増やす。" },
];
const faqs = [
  { q: "福岡大学医学部の合格に必要な偏差値はどのくらいですか？", a: "一般的に偏差値60〜65程度が目安とされています。標準〜やや難の問題が中心のため、全科目で安定した基礎力を持つことが重要です。" },
  { q: "九州以外から受験する場合のアドバイスはありますか？", a: "全国から受験者が集まる大学です。面接では特に地域限定の話題が出るわけではありませんが、医師としての志望動機をしっかり準備することが大切です。" },
  { q: "私立医学部の中での福岡大学の位置づけは？", a: "九州圏の私立医学部の中で標準的な難易度に位置します。全科目バランスよく仕上げた受験生が合格しやすい傾向があり、特定科目が突出していても他で崩れると厳しいです。" },
];
export default function FukuokaPage() {
  return (
    <div className="min-h-screen bg-white">
      <div style={{ backgroundColor: "#0c1a33" }} className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#c9922a" }}>大学別対策ガイド</p>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: "'Noto Serif JP', serif" }}>福岡大学医学部<br />入試対策ガイド</h1>
          <p className="text-sm mb-6" style={{ color: "rgba(255,255,255,0.65)" }}>現役慶應医学部生による入試傾向・合格戦略の完全解説</p>
          <div className="flex flex-wrap justify-center gap-3">
            <span className="px-4 py-1.5 rounded-full text-xs font-semibold" style={{ backgroundColor: "rgba(201,146,42,0.2)", color: "#c9922a", border: "1px solid rgba(201,146,42,0.4)" }}>私立医学部</span>
            <span className="px-4 py-1.5 rounded-full text-xs font-semibold" style={{ backgroundColor: "rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.8)", border: "1px solid rgba(255,255,255,0.2)" }}>福岡県</span>
          </div>
        </div>
      </div>
      <div className="py-14 px-4" style={{ backgroundColor: "#f7f5f0" }}>
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: "#c9922a" }}>Overview</p>
          <h2 className="text-2xl font-bold mb-4" style={{ color: "#0c1a33", fontFamily: "'Noto Serif JP', serif" }}>福岡大学医学部の特徴</h2>
          <p className="text-sm leading-relaxed" style={{ color: "#374151" }}>福岡大学医学部は九州圏の私立医学部として、全科目バランス型の出題が特徴です。難問は少なく、標準問題での取りこぼしをなくすことが合格の条件。附属病院の充実した臨床環境が整っており、実践的な医療教育が受けられます。</p>
        </div>
      </div>
      <div className="py-14 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: "#c9922a" }}>Subject Analysis</p>
          <h2 className="text-2xl font-bold mb-8" style={{ color: "#0c1a33", fontFamily: "'Noto Serif JP', serif" }}>科目別出題傾向</h2>
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
          <h2 className="text-2xl font-bold mb-8" style={{ color: "#0c1a33", fontFamily: "'Noto Serif JP', serif" }}>合格するための戦略</h2>
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
          <h2 className="text-2xl font-bold mb-8" style={{ color: "#0c1a33", fontFamily: "'Noto Serif JP', serif" }}>よくある質問</h2>
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
          <h2 className="text-2xl font-bold text-white mb-3" style={{ fontFamily: "'Noto Serif JP', serif" }}>福岡大学医学部対策の相談はこちら</h2>
          <p className="text-sm mb-6" style={{ color: "rgba(255,255,255,0.65)" }}>現役慶應医学部生が個別に対策をアドバイスします。</p>
          <Link href="/contact" className="inline-block px-8 py-4 text-white font-bold text-base rounded-lg hover:opacity-90 transition-opacity" style={{ backgroundColor: "#c9922a" }}>無料相談・お問い合わせ</Link>
        </div>
      </div>
    </div>
  );
}
