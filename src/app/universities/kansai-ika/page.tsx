import Link from "next/link";

export const metadata = {
  title: "関西医科大学受験対策｜入試傾向・合格戦略 | Medvance",
  description: "関西医科大学の入試傾向・科目別対策・合格戦略を現役慶應医学部生が解説。関西圏難関で英語読解力が特に重要な対策を詳しく紹介します。",
};

const subjects = [
  {
    name: "英語",
    level: "★★★★☆",
    body: "関西医科大学の英語は難易度が高く、長文読解の質・量ともに高いレベルが求められます。医療・科学系英文の読解力が合否を大きく左右します。",
    detail: "長文読解3〜4題と文法・語彙問題で構成。長文の分量が多く、読解スピードが重要。医療・生命科学・社会問題に関する英文が頻出で、英文和訳や記述式問題も含まれる。英検準1級相当の語彙力と、複雑な構造の文章を正確に読む力が必要。英語を得点源にできるかどうかが関西医科大学合格の鍵。",
  },
  {
    name: "数学",
    level: "★★★☆☆",
    body: "標準〜やや難レベルの問題が出題されます。微積・確率・ベクトルを中心に典型問題の習得が重要です。",
    detail: "大問4〜5題の記述式。微積分・確率・ベクトル・数列が頻出。英語が難しい分、数学での安定した得点が合格に不可欠。基礎〜標準問題を確実に解いた後、やや難の問題にも対応できる応用力を養うこと。時間配分を意識した本番形式の演習を繰り返すことで安定感が増す。",
  },
  {
    name: "物理",
    level: "★★★☆☆",
    body: "力学・電磁気・波動から標準的な問題が出題されます。基本的な現象理解と計算力が求められます。",
    detail: "力学（運動量・エネルギー）と電磁気（電場・磁場・回路）が特に頻出。波動と熱力学も毎年出題される。標準問題を確実に解ける力があれば十分対応できる。英語が難関のため、物理は標準問題で確実に得点し、英語の努力を支える科目として位置づけること。",
  },
  {
    name: "化学",
    level: "★★★☆☆",
    body: "有機・無機・理論化学がバランスよく出題されます。有機化学の構造決定と理論化学の計算問題が合否を分けます。",
    detail: "理論化学（平衡・電気化学・気体）と有機化学（構造決定・反応経路）が重要分野。有機化学の構造決定は難易度がやや高く、論理的な思考力が必要。無機化学は各族の特徴と反応を確実に押さえること。計算問題は丁寧な単位管理と検算で確実に得点する。",
  },
  {
    name: "面接・小論文",
    level: "★★★☆☆",
    body: "志望動機・医師としての理念・医療倫理に関する面接が実施されます。関西医科大学の教育方針への理解を示すことが重要です。",
    detail: "個人面接形式。「医師を志した理由」「関西医科大学を選んだ理由」「チーム医療における医師の役割」などが問われる。関西医科大学は研究と臨床のバランスを重視しており、研究への関心や探究心を示すと評価される。面接では落ち着いて自分の言葉で話せるよう練習を積むこと。",
  },
];

const strategies = [
  {
    step: "01",
    title: "英語を最優先で難関レベルまで引き上げる",
    body: "関西医科大学の最大の特徴は英語の難しさです。英検準1級〜1級レベルの語彙力と、複雑な長文を速く正確に読む力が必要です。英語の学習に最も多くの時間を投入し、他の受験生に差をつけることが合格への最短ルートです。",
  },
  {
    step: "02",
    title: "医療系英文の読解演習を積む",
    body: "関西医科大学の英語長文は医療・生命科学系のテーマが多く出題されます。標準的な英語長文演習に加え、医療系英語教材や英語の医療ニュース（BBC Health、Science Dailyなど）を定期的に読む習慣をつけましょう。専門用語への慣れが読解スピードを大幅に上げます。",
  },
  {
    step: "03",
    title: "数学・理科で確実に得点できる安定性を作る",
    body: "英語が難しい関西医科大学では、数学・理科での安定した得点が合格の土台になります。各科目で標準問題を確実に解ける力を身につけ、英語での苦戦を他科目でカバーできる状態を作っておきましょう。",
  },
  {
    step: "04",
    title: "関西医科大学の研究・教育内容を把握して面接に備える",
    body: "関西医科大学は研究と臨床のバランスを重視する教育で知られています。面接では大学の特徴への理解と志望動機の説得力が求められます。大学のウェブサイトや研究内容を調べ、「なぜ関西医科大学なのか」を具体的に語れるよう準備しましょう。",
  },
];

const faqs = [
  {
    q: "関西医科大学の英語はどのくらい難しいですか？",
    a: "私立医学部の中でも難易度の高い英語が出題されます。英検準1級相当の語彙力と、長めの医療系英文を素早く正確に読む力が必要です。英語を得点源にできるかどうかが合否を大きく左右するため、英語に最も多く時間を投資することをお勧めします。",
  },
  {
    q: "関西医科大学は関西以外からの受験生も多いですか？",
    a: "はい、関西圏の難関私立医学部として全国から受験生が集まります。関西に縁がなくても、大学の教育内容や研究への関心を面接でしっかり伝えれば問題ありません。",
  },
  {
    q: "関西医科大学の合格に必要な1次試験の得点率はどのくらいですか？",
    a: "年度によって変動しますが、得点率70〜75%程度が目安です。英語が難しい分、他科目での取りこぼしを最小限にすることが重要です。",
  },
];

export default function KansaiIkaPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div style={{ backgroundColor: "#0c1a33" }} className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#c9922a" }}>
            大学別対策ガイド
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: "'Noto Serif JP', serif" }}>
            関西医科大学<br />入試対策ガイド
          </h1>
          <p className="text-sm mb-6" style={{ color: "rgba(255,255,255,0.65)" }}>
            現役慶應医学部生による入試傾向・合格戦略の完全解説
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <span className="px-4 py-1.5 rounded-full text-xs font-semibold" style={{ backgroundColor: "rgba(201,146,42,0.2)", color: "#c9922a", border: "1px solid rgba(201,146,42,0.4)" }}>
              私立医学部
            </span>
            <span className="px-4 py-1.5 rounded-full text-xs font-semibold" style={{ backgroundColor: "rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.8)", border: "1px solid rgba(255,255,255,0.2)" }}>
              大阪府
            </span>
          </div>
        </div>
      </div>

      {/* Overview */}
      <div className="py-14 px-4" style={{ backgroundColor: "#f7f5f0" }}>
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: "#c9922a" }}>Overview</p>
          <h2 className="text-2xl font-bold mb-4" style={{ color: "#0c1a33", fontFamily: "'Noto Serif JP', serif" }}>
            関西医科大学の特徴
          </h2>
          <p className="text-sm leading-relaxed" style={{ color: "#374151" }}>
            関西医科大学は大阪府枚方市に位置する関西圏を代表する私立医学部です。1928年創立の歴史ある大学で、高度な研究と充実した臨床教育で知られています。入試では英語の難易度が特に高く、英語力が合否を決定的に左右します。数学・理科は標準レベルが中心ですが、英語での勝負となる関西医科大学では、英語を武器にできる受験生が有利です。関西圏の難関私立医学部を目指す受験生にとって、重要な目標校の一つです。
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
            関西医科大学対策の相談はこちら
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
