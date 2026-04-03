import Link from "next/link";

export const metadata = {
  title: "兵庫医科大学受験対策｜入試傾向・合格戦略 | Medvance",
  description: "兵庫医科大学の入試傾向・科目別対策・合格戦略を現役慶應医学部生が解説。標準レベルで面接重視の選考スタイルを詳しく紹介します。",

  alternates: {
    canonical: "/universities/hyogo",
  },};

const subjects = [
  {
    name: "英語",
    level: "★★★☆☆",
    body: "長文読解中心の標準的な出題です。医療・科学系テーマへの慣れと、正確な読解力が得点につながります。",
    detail: "長文読解2〜3題と文法・語彙・整序問題で構成。難問は少なく、基礎〜標準の英語力があれば十分対応できる。医療系テーマの英文が頻出のため、関連語彙を事前に学んでおくと読解がスムーズ。時間配分を意識し、長文を確実に読み切る訓練を積もう。",
  },
  {
    name: "数学",
    level: "★★★☆☆",
    body: "標準レベルの問題が中心です。微積・確率・ベクトルの典型問題を確実に習得することが合格の条件です。",
    detail: "大問4〜5題。記述式が主体。微積分・確率・ベクトル・数列が頻出。難問は少ないため、典型問題の完全習得が最優先。計算ミスで失点しないよう、普段から検算を習慣にすること。過去問演習で出題傾向を把握し、本番の時間配分を身につけておこう。",
  },
  {
    name: "物理",
    level: "★★★☆☆",
    body: "力学・電磁気・波動から標準的な問題が出題されます。基本的な公式と解法パターンの習得が求められます。",
    detail: "力学（運動方程式・エネルギー）と電磁気（回路・電磁誘導）が特に頻出。波動と熱力学も毎年出題される。標準問題集を仕上げれば十分対応できる難易度。物理は基本的な現象の理解が土台であり、公式を「使える」レベルまで高めることが重要。",
  },
  {
    name: "化学",
    level: "★★★☆☆",
    body: "有機・無機・理論化学が標準レベルで出題されます。計算問題の正確性と有機反応の知識が得点を左右します。",
    detail: "理論化学（モル・平衡・電気化学）と有機化学（官能基・反応・構造決定）が重要分野。無機化学は族ごとの特徴を確実に押さえること。全体的に標準問題が多いため、丁寧な基礎固めで高得点が狙える。有機化学の構造決定は定期的に演習して解法を定着させよう。",
  },
  {
    name: "面接・小論文",
    level: "★★★★☆",
    body: "兵庫医科大学は面接を非常に重視しており、医師としての姿勢・人間性・コミュニケーション力が総合的に評価されます。",
    detail: "個人面接形式で複数回の面接が課される場合がある。「なぜ医師になりたいのか」「患者と接するうえで大切なことは何か」「兵庫の地域医療についてどう考えるか」などが問われる。単に合格するための回答ではなく、自分の経験と結びついた誠実な言葉で話すことが最も重要。小論文も医療倫理・社会問題をテーマに出題される。",
  },
];

const strategies = [
  {
    step: "01",
    title: "面接対策を最優先で徹底的に行う",
    body: "兵庫医科大学は面接の比重が非常に高い大学です。筆記試験と同じかそれ以上に面接への準備が合否を左右します。なぜ医師になりたいのか、なぜ兵庫医科大学なのかを、自分の体験に根ざした言葉で語れるよう、深く掘り下げた準備をしましょう。",
  },
  {
    step: "02",
    title: "筆記試験の基礎〜標準を確実に仕上げる",
    body: "兵庫医科大学の筆記試験は標準レベル中心のため、基礎の完成度が合否に直結します。各科目で典型問題を漏れなく解ける力を最優先で身につけ、面接対策と並行して学習を進めましょう。",
  },
  {
    step: "03",
    title: "医療倫理と兵庫の地域医療について学ぶ",
    body: "面接では地域医療の現状や医師としての倫理観が問われます。兵庫県の医療課題（医師不足、高齢化社会への対応など）について学び、自分なりの見解を持っておきましょう。医療ニュースを定期的に読む習慣が、面接・小論文両方に有効です。",
  },
  {
    step: "04",
    title: "模擬面接で場数を踏んで自信をつける",
    body: "面接は準備量が直接パフォーマンスに影響します。想定質問への回答を準備するだけでなく、実際に声に出して答える練習を繰り返しましょう。Medvanceでは現役慶應医学部生による模擬面接サポートを提供しており、本番さながらの練習が可能です。",
  },
];

const faqs = [
  {
    q: "兵庫医科大学の面接はどのような形式ですか？",
    a: "個人面接形式で、複数の面接官による質疑応答が行われます。志望動機・医師としての姿勢・地域医療への関心が主なテーマです。面接の比重が高いため、筆記試験対策と並行して早めから準備を始めることを強くお勧めします。",
  },
  {
    q: "兵庫医科大学の入試で筆記試験より面接が重視されるのはなぜですか？",
    a: "兵庫医科大学は患者に寄り添う医師の育成を教育理念としており、医師としての人間性・コミュニケーション力・倫理観を重視しているためです。高い学力があっても面接で十分な評価が得られなければ不合格になる可能性があります。",
  },
  {
    q: "兵庫医科大学の合格に必要な1次試験の得点率はどのくらいですか？",
    a: "得点率65〜70%程度が1次試験の目安とされています。標準問題が中心のため、基礎を固めることで達成可能なラインです。面接での高評価と組み合わせることが合格への鍵です。",
  },
];

export default function HyogoPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div style={{ backgroundColor: "#0c1a33" }} className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#c9922a" }}>
            大学別対策ガイド
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: "'Noto Serif JP', serif" }}>
            兵庫医科大学<br />入試対策ガイド
          </h1>
          <p className="text-sm mb-6" style={{ color: "rgba(255,255,255,0.65)" }}>
            現役慶應医学部生による入試傾向・合格戦略の完全解説
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <span className="px-4 py-1.5 rounded-full text-xs font-semibold" style={{ backgroundColor: "rgba(201,146,42,0.2)", color: "#c9922a", border: "1px solid rgba(201,146,42,0.4)" }}>
              私立医学部
            </span>
            <span className="px-4 py-1.5 rounded-full text-xs font-semibold" style={{ backgroundColor: "rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.8)", border: "1px solid rgba(255,255,255,0.2)" }}>
              兵庫県
            </span>
          </div>
        </div>
      </div>

      {/* Overview */}
      <div className="py-14 px-4" style={{ backgroundColor: "#f7f5f0" }}>
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: "#c9922a" }}>Overview</p>
          <h2 className="text-2xl font-bold mb-4" style={{ color: "#0c1a33", fontFamily: "'Noto Serif JP', serif" }}>
            兵庫医科大学の特徴
          </h2>
          <p className="text-sm leading-relaxed" style={{ color: "#374151" }}>
            兵庫医科大学は兵庫県西宮市に位置し、患者に寄り添う温かな医師の育成を教育理念とする大学です。1972年の開学以来、地域医療への貢献を重視した教育を行っています。入試では筆記試験（英語・数学・理科2科目）と面接が課されますが、特に面接の比重が高く、人物評価が合否を大きく左右します。筆記試験は標準レベル中心のため、面接との両立が合格の条件です。
          </p>
        </div>
      </div>

      {/* Subjects */}
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

      {/* Strategy */}
      <div className="py-14 px-4" style={{ backgroundColor: "#f7f5f0" }}>
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: "#c9922a" }}>Strategy</p>
          <h2 className="text-2xl font-bold mb-8" style={{ color: "#0c1a33", fontFamily: "'Noto Serif JP', serif" }}>合格するための戦略</h2>
          <div className="space-y-5">
            {strategies.map((s) => (
              <div key={s.step} className="flex gap-5 p-6 bg-white rounded-2xl" style={{ border: "1px solid #e5e1d8" }}>
                <div className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm" style={{ backgroundColor: "#0c1a33", color: "#c9922a" }}>
                  {s.step}
                </div>
                <div>
                  <h3 className="font-bold text-sm mb-2" style={{ color: "#0c1a33" }}>{s.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#374151" }}>{s.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ */}
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

      {/* CTA */}
      <div className="py-16 px-4" style={{ backgroundColor: "#0c1a33" }}>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#c9922a" }}>Free Consultation</p>
          <h2 className="text-2xl font-bold text-white mb-3" style={{ fontFamily: "'Noto Serif JP', serif" }}>
            兵庫医科大学対策の相談はこちら
          </h2>
          <p className="text-sm mb-6" style={{ color: "rgba(255,255,255,0.65)" }}>
            現役慶應医学部生が個別に対策をアドバイスします。
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 text-white font-bold text-base rounded-lg hover:opacity-90 transition-opacity"
            style={{ backgroundColor: "#c9922a" }}
          >
            無料相談・お問い合わせ
          </Link>
        </div>
      </div>
    </div>
  );
}
