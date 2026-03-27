import Link from "next/link";

export const metadata = {
  title: "聖マリアンナ医科大学受験対策｜入試傾向・合格戦略 | Medvance",
  description: "聖マリアンナ医科大学の入試傾向・科目別対策・合格戦略を現役慶應医学部生が解説。キリスト教建学精神に基づく面接重視の選考を徹底解説します。",
};

const subjects = [
  {
    name: "英語",
    level: "★★★☆☆",
    body: "長文読解を中心に文法・語彙問題が出題されます。標準的な難易度で、基礎力があれば安定した得点が可能です。",
    detail: "長文読解2〜3題が主体。医療・倫理系テーマが頻出で、キリスト教的な人間観に関わる文章が出題されることもある。文法問題は標準レベル。英単語の基礎〜標準をしっかり身につけ、長文の論旨を正確に把握する読解力を鍛えることが重要。時間内に全問解き切るペース配分も意識すること。",
  },
  {
    name: "数学",
    level: "★★★☆☆",
    body: "標準レベルの問題が中心で、微積・確率・三角関数から頻出です。典型問題の習得が得点の安定につながります。",
    detail: "大問4〜5題構成。記述式問題では途中式の論理的な記述が求められる。微積分・確率・三角関数・ベクトルを重点的に対策すること。難問は少ないため、基本〜標準レベルを確実に解ける力が合否を分ける。過去問演習で出題パターンを把握し、取れる問題を確実に得点する意識を持とう。",
  },
  {
    name: "物理",
    level: "★★★☆☆",
    body: "力学・電磁気・波動から標準的な問題が出題されます。公式の正確な理解と計算の丁寧さが求められます。",
    detail: "力学（運動方程式・エネルギー保存）と電磁気（コンデンサ・回路）が頻出。波動・熱力学も毎年出題される。難問は少なく、標準問題集を完璧にすれば高得点が狙える。計算ミスが失点につながりやすいため、普段から検算を習慣化すること。物理の本質的な理解を重視した学習を心がけよう。",
  },
  {
    name: "化学",
    level: "★★★☆☆",
    body: "有機・無機・理論化学が均等に出題されます。計算問題の正確性と有機反応の知識が得点に直結します。",
    detail: "理論化学（モル計算・気体・平衡・電気分解）と有機化学（官能基・反応・構造決定）が特に重要。無機化学は各族の反応と特性を確実に押さえておくこと。計算問題は単位換算から丁寧に行い、ケアレスミスを防ぐ。有機化学の構造決定は毎年出題されるため、典型問題のパターンを繰り返し練習すること。",
  },
  {
    name: "面接・小論文",
    level: "★★★★☆",
    body: "聖マリアンナ医科大学は建学精神（キリスト教的人間愛）に基づく面接を重視します。医師としての使命感や倫理観が深く問われます。",
    detail: "面接では「なぜ医師になりたいのか」に加え、「生命の尊厳」「患者への奉仕」「チーム医療における役割」などキリスト教的価値観に関連した質問が多い。ボランティア経験や医療体験など、具体的なエピソードを準備しておくことが重要。小論文は医療倫理・社会問題に関するテーマで、論理的に自分の意見を述べる練習が必要。",
  },
];

const strategies = [
  {
    step: "01",
    title: "面接対策を特に念入りに行う",
    body: "聖マリアンナ医科大学は面接の比重が非常に高い大学です。単に「医師になりたい」という気持ちを伝えるだけでなく、建学精神であるキリスト教的な人間愛や奉仕の精神とどのように共鳴しているかを、自分の言葉で具体的に語れるよう準備しましょう。",
  },
  {
    step: "02",
    title: "ボランティア・医療体験のエピソードを整理する",
    body: "面接でボランティア活動や病院見学などの具体的な体験を問われることがあります。何を経験したか、そこから何を学んだかを明確に語れるよう、自身の体験を振り返って言語化しておきましょう。体験がまだない方は、今からでも積極的に行動することをお勧めします。",
  },
  {
    step: "03",
    title: "英語・数学・理科の基礎を確実に固める",
    body: "筆記試験は標準レベル中心のため、基礎〜標準問題を確実に得点できる力が合格の土台になります。各科目の基本事項を漏れなく習得し、典型問題を見た瞬間に解法が浮かぶレベルまで仕上げましょう。難問への過度な対策よりも基礎の完成度を高めることが合格への近道です。",
  },
  {
    step: "04",
    title: "医療倫理・小論文の知識を積み上げる",
    body: "聖マリアンナ医科大学の小論文・面接では医療倫理や生命の尊厳に関するテーマが頻出です。インフォームドコンセント、安楽死、再生医療といった医療倫理の基本テーマについて、自分の意見と根拠を論理的に述べられるよう準備しましょう。",
  },
];

const faqs = [
  {
    q: "聖マリアンナ医科大学の面接はどのような形式ですか？",
    a: "個人面接形式で、複数の面接官による質問が行われます。志望動機・医師としての理念・医療倫理に関する質問が中心で、建学精神であるキリスト教的な人間愛や奉仕の精神との関連を問われることがあります。事前に自分の医師像を深く掘り下げて準備することが重要です。",
  },
  {
    q: "キリスト教信者でなくても合格できますか？",
    a: "はい、信者でなくても合格できます。大切なのは建学精神への共感と理解です。「人の命を大切にする」「患者に寄り添う医療」という価値観を自分なりの言葉で語れるかどうかが評価のポイントです。",
  },
  {
    q: "聖マリアンナ医科大学の学費はどのくらいですか？",
    a: "6年間の総学費は約2,000万円前後とされています（年度によって変動）。私立医学部の中では標準的な水準です。奨学金制度も用意されていますので、入学後の活用も検討してみてください。",
  },
];

export default function MariannaPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div style={{ backgroundColor: "#0c1a33" }} className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#c9922a" }}>
            大学別対策ガイド
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: "'Noto Serif JP', serif" }}>
            聖マリアンナ医科大学<br />入試対策ガイド
          </h1>
          <p className="text-sm mb-6" style={{ color: "rgba(255,255,255,0.65)" }}>
            現役慶應医学部生による入試傾向・合格戦略の完全解説
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <span className="px-4 py-1.5 rounded-full text-xs font-semibold" style={{ backgroundColor: "rgba(201,146,42,0.2)", color: "#c9922a", border: "1px solid rgba(201,146,42,0.4)" }}>
              私立医学部
            </span>
            <span className="px-4 py-1.5 rounded-full text-xs font-semibold" style={{ backgroundColor: "rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.8)", border: "1px solid rgba(255,255,255,0.2)" }}>
              神奈川県
            </span>
          </div>
        </div>
      </div>

      {/* Overview */}
      <div className="py-14 px-4" style={{ backgroundColor: "#f7f5f0" }}>
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: "#c9922a" }}>Overview</p>
          <h2 className="text-2xl font-bold mb-4" style={{ color: "#0c1a33", fontFamily: "'Noto Serif JP', serif" }}>
            聖マリアンナ医科大学の特徴
          </h2>
          <p className="text-sm leading-relaxed" style={{ color: "#374151" }}>
            聖マリアンナ医科大学は神奈川県川崎市に位置するキリスト教精神（カトリック）に基づく医科大学です。「生命の尊厳」と「人間愛」を基本とする教育理念のもと、患者に寄り添う医師の育成を重視しています。入試では筆記試験（英語・数学・理科2科目）に加え、面接の比重が非常に高く、医師としての姿勢や倫理観が厳しく評価されます。ボランティア経験や医療体験などの具体的なエピソードを持ち、建学精神への共感を自分の言葉で語れる受験生が有利です。
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
            聖マリアンナ医科大学対策の相談はこちら
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
