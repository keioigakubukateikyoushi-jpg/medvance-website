import Link from "next/link";

export const metadata = {
  title: "帝京大学医学部受験対策｜入試傾向・合格戦略 | Medvance",
  description: "帝京大学医学部の入試傾向・科目別対策・合格戦略を現役慶應医学部生が解説。マークシート中心の試験で速度と正確性を高める戦略を紹介します。",
};

const subjects = [
  {
    name: "英語",
    level: "★★★☆☆",
    body: "マークシート形式で文法・語彙・長文読解が出題されます。正確さよりも処理スピードが求められます。",
    detail: "マーク式が中心で、文法・語彙・長文読解がバランスよく出題。時間内に全問処理できるスピードが重要。標準的な単語帳と文法書を1冊ずつ完璧にした上で、時間を計りながら問題演習を繰り返すことが有効。",
  },
  {
    name: "数学",
    level: "★★★☆☆",
    body: "典型問題が中心のマーク式試験。解法パターンの習得と処理速度の両立が合否を分けます。",
    detail: "マーク式。微積分・確率・数列・ベクトルの典型問題が頻出。難問より典型問題の解法を素早く正確に適用する力が重要。時間を計った演習で処理スピードを高めること。",
  },
  {
    name: "物理",
    level: "★★★☆☆",
    body: "典型的な物理問題がマーク式で出題されます。基本法則を正確に理解し、素早く処理する力が必要です。",
    detail: "力学・電磁気・波動・熱力学から出題。マーク式なので途中の思考過程より最終的な数値が重要。基本公式を素早く適用できるよう、反復演習を積むこと。計算ミスに注意。",
  },
  {
    name: "化学",
    level: "★★★☆☆",
    body: "マーク式で有機・無機・理論化学が出題されます。典型問題の解法を素早く処理する力が鍵です。",
    detail: "有機・無機・理論化学の典型問題がマーク式で出題。構造決定・モル計算・酸塩基反応などを素早く処理できるよう練習が必要。難問は少なく、典型問題の解法を体系的に習得することが優先。",
  },
  {
    name: "総合対策",
    level: "★★★☆☆",
    body: "マーク式中心の試験では、全問処理できるスピードと正確性の両立が最も重要な課題です。",
    detail: "帝京大学はマークシート方式のため、時間内に全問題を処理できるスピードが合否に直結する。日頃から時間を計って演習し、本番のペースに慣れておくことが不可欠。",
  },
  {
    name: "面接なし",
    level: "★☆☆☆☆",
    body: "帝京大学医学部は1次・2次ともに筆記試験のみで面接はありません。学力勝負の試験です。",
    detail: "面接がないため、純粋な学力勝負となる。マーク式試験で高得点を取れる力を全科目で養うことに集中できる。他の大学との受験並行がしやすい点もメリット。",
  },
];

const strategies = [
  {
    step: "01",
    title: "マーク式に特化した演習を積む",
    body: "帝京大学の入試はマークシート中心です。記述式と異なり、解法の論証より最終答えの正確さが問われます。マーク式の問題集を使い、時間を計りながら演習する習慣をつけましょう。",
  },
  {
    step: "02",
    title: "処理スピードを高める訓練をする",
    body: "マーク式試験では制限時間内に全問処理できるかどうかが合否を大きく左右します。普段の演習から時間を計り、時間切れで未解答が出ないようにペース配分を練習しましょう。",
  },
  {
    step: "03",
    title: "典型問題の解法パターンを完全習得する",
    body: "帝京大学は典型問題の比率が高いため、各科目の頻出問題を素早く正確に解ける状態を作ることが最も効率的な対策です。難問集より標準問題集を繰り返し解く方が合格に直結します。",
  },
  {
    step: "04",
    title: "他の私立医学部と併願しやすい試験形式を活用する",
    body: "帝京大学はマーク式試験のみで面接がないため、他の私立医学部との受験スケジュールを組みやすいです。効率的な受験戦略として、複数校受験の中に組み込む受験生も多くいます。",
  },
];

const faqs = [
  {
    q: "帝京大学医学部の難易度はどのくらいですか？",
    a: "私立医学部の中では標準レベルです。マークシート中心のため記述力より処理スピードが重要です。典型問題を素早く正確に解ける力を養えば合格圏内に入れます。",
  },
  {
    q: "帝京大学医学部に面接はありますか？",
    a: "帝京大学医学部の一般選抜では面接はなく、筆記試験のみとなっています。学力勝負の試験形式です。",
  },
  {
    q: "帝京大学医学部はマーク式のみですか？",
    a: "一般選抜はマークシート式が中心です。記述式と異なり途中の論証は不要で、最終的な答えの正確さが評価されます。",
  },
  {
    q: "帝京大学医学部の合格に必要な得点率はどのくらいですか？",
    a: "おおよそ70〜75%の得点率が合格ラインの目安です。典型問題を取りこぼさないことで達成できるレベルです。",
  },
];

export default function TeikyoPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div style={{ backgroundColor: "#0c1a33" }} className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#c9922a" }}>帝京大学医学部</p>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: "'Noto Serif JP', serif" }}>帝京大学医学部合格への最短ルート。</h1>
          <p className="text-base" style={{ color: "rgba(255,255,255,0.65)" }}>現役慶應医学部生が入試傾向と対策を解説</p>
        </div>
      </div>

      {/* 入試概要 */}
      <div className="py-16 px-4" style={{ backgroundColor: "#f7f5f0" }}>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-6" style={{ color: "#0c1a33", fontFamily: "'Noto Serif JP', serif" }}>帝京大学医学部の入試概要</h2>
          <div className="p-8 rounded-2xl bg-white" style={{ border: "1px solid #e5e1d8" }}>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "#3d3d3d" }}>
              帝京大学医学部は、東京都板橋区に位置する私立医学部です。一般選抜の特徴はマークシート方式が中心であること。英語・数学・理科2科目の筆記試験が課されますが、面接は実施されません。
            </p>
            <p className="text-sm leading-relaxed mb-6" style={{ color: "#3d3d3d" }}>
              典型問題が多く、処理スピードと正確性が合否を左右します。難問への対策より、頻出の典型問題を素早く正確に解ける力を養うことが最も効率的な合格戦略です。
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "募集人員", value: "約107名" },
                { label: "競争倍率", value: "4〜6倍" },
                { label: "1次試験", value: "英・数・理2科目" },
                { label: "試験形式", value: "マーク式中心" },
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
          <h2 className="text-2xl font-bold text-center mb-4" style={{ color: "#0c1a33", fontFamily: "'Noto Serif JP', serif" }}>帝京大学医学部合格のための戦略</h2>
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
          <h2 className="text-2xl font-bold text-center mb-10" style={{ color: "#0c1a33", fontFamily: "'Noto Serif JP', serif" }}>科目別対策のポイント</h2>
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
          <h2 className="text-2xl font-bold text-center mb-8" style={{ color: "#0c1a33", fontFamily: "'Noto Serif JP', serif" }}>よくあるご質問</h2>
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
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4" style={{ fontFamily: "'Noto Serif JP', serif" }}>まずは無料相談から</h2>
          <p className="mb-8 text-sm" style={{ color: "rgba(255,255,255,0.65)" }}>帝京大学医学部合格への道筋を、一緒に考えます。</p>
          <Link href="/contact" className="inline-block px-8 py-4 text-white font-bold text-base rounded-lg shadow-md hover:opacity-90 transition-opacity" style={{ backgroundColor: "#c9922a" }}>
            無料相談・お問い合わせ
          </Link>
        </div>
      </div>
    </div>
  );
}
