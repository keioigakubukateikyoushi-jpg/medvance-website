import Link from "next/link";

export const metadata = {
  title: "東邦大学医学部受験対策｜入試傾向・合格戦略 | Medvance",
  description: "東邦大学医学部の入試傾向・科目別対策・合格戦略を現役慶應医学部生が解説。英語長文対策と計算ミスゼロの戦略を詳しく紹介します。",
};

const subjects = [
  {
    name: "英語",
    level: "★★★☆☆",
    body: "長文の文量が多く、読解スピードが合否を分けます。医療・科学系テーマの英文に慣れておくことが重要です。",
    detail: "長文読解2〜3題を中心に、文法・語彙問題が出題される。1問あたりの文量が多めで時間的なプレッシャーがある。速読力と正確な読解力を同時に養う必要がある。医療系英単語の習得が有効。",
  },
  {
    name: "数学",
    level: "★★★☆☆",
    body: "標準レベルの問題が中心。微積・確率・数列・ベクトルを中心に対策すれば安定した得点が見込めます。",
    detail: "大問4〜5題構成。記述式。頻出分野は微積分・確率・数列。標準問題の解法パターンを体系的に身につけることが先決。計算ミスが命取りになるため、検算の徹底が重要。",
  },
  {
    name: "物理",
    level: "★★★☆☆",
    body: "力学・電磁気を中心に標準的な問題が出題されます。基本法則の正確な理解と計算処理能力が求められます。",
    detail: "力学・電磁気・波動・熱力学から幅広く出題。難問は少ないが、計算量が多い問題もある。公式の意味を理解した上で正確に適用する力が必要。過去問演習で問題形式に慣れること。",
  },
  {
    name: "化学",
    level: "★★★☆☆",
    body: "有機・無機・理論化学がバランスよく出題されます。計算問題での正確性が合否に直結します。",
    detail: "理論・有機・無機化学がバランスよく出題。計算問題の比率が高く、モル計算・平衡・酸塩基を確実に処理できるかが重要。有機化学は構造決定問題の練習を繰り返すこと。",
  },
  {
    name: "面接",
    level: "★★★☆☆",
    body: "志望動機・医師としての姿勢・社会問題への意見が問われます。自分の言葉で誠実に答える準備が必要です。",
    detail: "個人面接形式。「なぜ医師になりたいか」「東邦大学を選んだ理由」「医療の現状についてどう思うか」などが問われる。答えを丸暗記するのではなく、自分の考えを整理した上で自然に話せるよう練習が必要。",
  },
  {
    name: "総合対策",
    level: "★★★☆☆",
    body: "全科目でバランスよく得点できる力が求められます。苦手科目を作らないことが合格への近道です。",
    detail: "東邦大学は全科目で標準的な問題が出題されるため、特定科目に集中して対策するより全科目をバランスよく仕上げる戦略が有効。英語の長文量に対応できる読解力を優先的に養うこと。",
  },
];

const strategies = [
  {
    step: "01",
    title: "英語の読解スピードを高める",
    body: "東邦大学の英語は長文の文量が多く、読み切れずに時間切れになる受験生が多くいます。毎日長文を時間計測しながら読む習慣をつけ、医療・科学系の英文に慣れておきましょう。1分80〜100語の読解速度を目標に設定することをお勧めします。",
  },
  {
    step: "02",
    title: "計算ミスをゼロにする習慣を作る",
    body: "東邦大学の数学・化学では計算問題でのミスが命取りになります。普段の演習から必ず検算する習慣をつけ、試験本番でも落ち着いて処理できる安定性を養いましょう。計算ミスはトレーニングで確実に減らせます。",
  },
  {
    step: "03",
    title: "標準問題の解法パターンを完全習得する",
    body: "東邦大学は標準レベルの問題が中心です。各科目の典型問題の解法パターンを体系的に習得し、素早く正確に対処できる状態を作ることが最も効率的な対策です。難問対策より基礎の完成度を優先しましょう。",
  },
  {
    step: "04",
    title: "面接は自分の言葉で話せるよう準備する",
    body: "東邦大学の面接では、志望動機や医師としての考えを自分の言葉で伝える力が問われます。答えを丸暗記するのではなく、自分の経験や考えをもとに自然に話せるよう、事前に何度も練習しておきましょう。",
  },
];

const faqs = [
  {
    q: "東邦大学医学部の難易度はどのくらいですか？",
    a: "私立医学部の中では標準レベルです。英語の長文量が多い点が特徴ですが、難問は少なく、基礎〜標準問題を確実に解ける力があれば合格圏内に入れます。",
  },
  {
    q: "東邦大学医学部の英語対策で特に重要なことは何ですか？",
    a: "読解スピードと正確性の両立が最も重要です。長文の文量が多いため、速読力を高めながら内容を正確に把握する訓練を積んでください。医療系の英単語も並行して習得しましょう。",
  },
  {
    q: "東邦大学医学部に合格するための目標得点率はどのくらいですか？",
    a: "1次試験の得点率70〜75%程度が合格ラインの目安です。計算ミスや凡ミスをなくし、基礎〜標準問題を確実に得点することで達成できるレベルです。",
  },
  {
    q: "東邦大学医学部の面接はどのような形式ですか？",
    a: "個人面接形式が一般的です。志望動機・大学選択の理由・医師を目指す動機・社会問題への意見などが問われます。準備なしでは答えに詰まる場面があるため、事前に十分な練習が必要です。",
  },
];

export default function TohoPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div style={{ backgroundColor: "#0c1a33" }} className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#c9922a" }}>東邦大学医学部</p>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: "'Noto Serif JP', serif" }}>東邦大学医学部合格への最短ルート。</h1>
          <p className="text-base" style={{ color: "rgba(255,255,255,0.65)" }}>現役慶應医学部生が入試傾向と対策を解説</p>
        </div>
      </div>

      {/* 入試概要 */}
      <div className="py-16 px-4" style={{ backgroundColor: "#f7f5f0" }}>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-6" style={{ color: "#0c1a33", fontFamily: "'Noto Serif JP', serif" }}>東邦大学医学部の入試概要</h2>
          <div className="p-8 rounded-2xl bg-white" style={{ border: "1px solid #e5e1d8" }}>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "#3d3d3d" }}>
              東邦大学医学部は東京都大田区大森西に位置し、一般入試の2次試験も大森キャンパスで実施されます。一般選抜では英語・数学・理科2科目の筆記試験と面接が課されます。英語は長文の文量が多めであることが特徴で、読解スピードが重要なポイントです。
            </p>
            <p className="text-sm leading-relaxed mb-6" style={{ color: "#3d3d3d" }}>
              問題全体の難易度は標準レベルで、計算問題での正確性が合否を分ける傾向があります。基礎から標準問題を確実に得点する力を養いながら、英語の読解力を重点的に強化する戦略が有効です。
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "募集人員", value: "約70名" },
                { label: "競争倍率", value: "年度で変動" },
                { label: "1次試験", value: "英・数・理2科目" },
                { label: "2次試験", value: "面接" },
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
          <h2 className="text-2xl font-bold text-center mb-4" style={{ color: "#0c1a33", fontFamily: "'Noto Serif JP', serif" }}>東邦大学医学部合格のための戦略</h2>
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
          <p className="mb-8 text-sm" style={{ color: "rgba(255,255,255,0.65)" }}>東邦大学医学部合格への道筋を、一緒に考えます。</p>
          <Link href="/contact" className="inline-block px-8 py-4 text-white font-bold text-base rounded-lg shadow-md hover:opacity-90 transition-opacity" style={{ backgroundColor: "#c9922a" }}>
            無料相談・お問い合わせ
          </Link>
        </div>
      </div>
    </div>
  );
}
