import Link from "next/link";
export const metadata = { title: "川崎医科大学受験対策｜入試傾向・合格戦略 | Medvance", description: "川崎医科大学の入試傾向・科目別対策・合格戦略を現役慶應医学部生が解説。岡山県の私立医学部合格への完全ガイド。", 
  alternates: {
    canonical: "/universities/kawasaki-ika",
  },};
const subjects = [
  { name: "英語", level: "★★☆☆☆", body: "標準〜基礎レベルの出題で、基本的な英語力があれば対応できます。語彙と文法の基礎固めが優先課題です。", detail: "長文読解1〜2題＋文法・語彙問題の構成。難易度は私立医学部の中では比較的取り組みやすい。基礎単語・熟語の定着と文法の正確な理解が合格への最短ルート。" },
  { name: "数学", level: "★★☆☆☆", body: "基礎〜標準レベルの問題が中心。頻出分野の解法を確実に習得することで高得点が狙えます。", detail: "大問4題程度。微積分・確率・数列が頻出。難問は少なく、教科書〜標準問題集レベルの問題を確実に解く力が求められる。計算ミスを防ぐ正確性の訓練が重要。" },
  { name: "物理", level: "★★☆☆☆", body: "力学・電磁気を中心に基礎〜標準レベルの出題。基本公式の正確な理解があれば対応できます。", detail: "力学・電磁気・波動から出題。難問はほとんどなく、基本公式の適用と計算力が問われる。物理の基礎を丁寧に確認し、標準問題集を中心に演習を積むことが有効。" },
  { name: "化学", level: "★★☆☆☆", body: "有機・無機・理論化学がバランスよく出題。基礎知識の定着で十分対応できるレベルです。", detail: "全分野から出題。難問はほとんどなく、基礎知識の正確な定着が合格条件。化学全体を満遍なく学習し、苦手分野を残さないことが合格への近道。" },
  { name: "面接", level: "★★★☆☆", body: "個人面接が実施されます。医師としての志望動機と誠実さが評価されます。", detail: "個人面接では志望動機・医師への動機・倫理的問題への見解が問われる。学費の高さについての質問が来ることもあるため、費用面も含めた明確な受験動機を準備しておくことが重要。" },
];
const strategies = [
  { step: "01", title: "全科目の基礎を完璧に仕上げる", body: "難易度が比較的低めのため、基礎問題での失点が命取りになる。英語・数学・理科2科目すべてで基礎の抜けをなくし、教科書レベルは完璧に解けるようにする。" },
  { step: "02", title: "計算ミスゼロの精度を徹底的に養う", body: "標準問題が中心だからこそ、ケアレスミスが合否を分ける。数学・化学・物理では検算の習慣をつけ、本番で確実に得点できる精度を養う演習を繰り返す。" },
  { step: "03", title: "受験動機・学費面の説明を明確に準備する", body: "川崎医科大学は学費が高水準のため、面接で「なぜこの大学を選んだか」「費用の準備はできているか」という質問が来ることがある。家庭の方針も含め、明確かつ誠実に答えられるよう準備する。" },
  { step: "04", title: "志望校の優先度と費用面を慎重に検討する", body: "学費が高水準であることを踏まえ、他の受験校との優先度を家族と話し合っておく。合格後の進学判断を事前に決めておくことで、本番期間中の精神的余裕が生まれる。" },
];
const faqs = [
  { q: "川崎医科大学の学費はどのくらいですか？", a: "6年間の総額は私立医学部の中でも高水準とされています。ただし奨学金・特待生制度も設けられているため、詳細は大学の公式情報をご確認ください。" },
  { q: "合格するために必要な偏差値はどのくらいですか？", a: "私立医学部の中では比較的入りやすいとされていますが、基礎の完成度は必須です。偏差値55〜60程度が目安ですが、基礎の抜けがある状態では合格できません。" },
  { q: "岡山県の大学ですが、全国から受験できますか？", a: "全国から受験可能です。ただし進学する場合は岡山での生活になるため、生活環境や費用面も含めた計画が必要です。" },
];
export default function KawasakiIkaPage() {
  return (
    <div className="min-h-screen bg-white">
      <div style={{ backgroundColor: "#0c1a33" }} className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#c9922a" }}>大学別対策ガイド</p>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: "'Noto Serif JP', serif" }}>川崎医科大学<br />入試対策ガイド</h1>
          <p className="text-sm mb-6" style={{ color: "rgba(255,255,255,0.65)" }}>現役慶應医学部生による入試傾向・合格戦略の完全解説</p>
          <div className="flex flex-wrap justify-center gap-3">
            <span className="px-4 py-1.5 rounded-full text-xs font-semibold" style={{ backgroundColor: "rgba(201,146,42,0.2)", color: "#c9922a", border: "1px solid rgba(201,146,42,0.4)" }}>私立医学部</span>
            <span className="px-4 py-1.5 rounded-full text-xs font-semibold" style={{ backgroundColor: "rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.8)", border: "1px solid rgba(255,255,255,0.2)" }}>岡山県</span>
          </div>
        </div>
      </div>
      <div className="py-14 px-4" style={{ backgroundColor: "#f7f5f0" }}>
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: "#c9922a" }}>Overview</p>
          <h2 className="text-2xl font-bold mb-4" style={{ color: "#0c1a33", fontFamily: "'Noto Serif JP', serif" }}>川崎医科大学の特徴</h2>
          <p className="text-sm leading-relaxed" style={{ color: "#374151" }}>川崎医科大学は岡山県倉敷市に位置する私立医学部です。入試難易度は私立医学部の中では比較的低めで、基礎〜標準の学力を確実に固めることが合格の条件です。学費は高水準であることが知られており、費用面も含めた計画的な受験戦略が重要。附属病院は国内最大規模の臨床実習環境を持ちます。</p>
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
          <h2 className="text-2xl font-bold text-white mb-3" style={{ fontFamily: "'Noto Serif JP', serif" }}>川崎医科大学対策の相談はこちら</h2>
          <p className="text-sm mb-6" style={{ color: "rgba(255,255,255,0.65)" }}>現役慶應医学部生が個別に対策をアドバイスします。</p>
          <Link href="/contact" className="inline-block px-8 py-4 text-white font-bold text-base rounded-lg hover:opacity-90 transition-opacity" style={{ backgroundColor: "#c9922a" }}>無料相談・お問い合わせ</Link>
        </div>
      </div>
    </div>
  );
}
