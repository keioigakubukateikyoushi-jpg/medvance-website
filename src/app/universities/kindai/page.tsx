import Link from "next/link";

export const metadata = {
  title: "近畿大学医学部受験対策｜入試傾向・合格戦略 | Medvance",
  description: "近畿大学医学部の入試傾向・科目別対策・合格戦略を現役慶應医学部生が解説。近年難化傾向で英語長文読解力が鍵となる対策を詳しく紹介します。",
};

const subjects = [
  {
    name: "英語",
    level: "★★★★☆",
    body: "近畿大学の英語は近年難化傾向にあり、長文読解の難易度と分量が増しています。英語長文を速く正確に読む力が合否を分けます。",
    detail: "長文読解3〜4題と文法・語彙問題で構成。長文の分量が多く、読解スピードが重要。医療・科学・社会問題に関するテーマが頻出。英文和訳・記述式問題も出題されることがある。英検準1級相当の語彙力と、段落ごとに論旨を把握する読解力を身につけることが最重要課題。",
  },
  {
    name: "数学",
    level: "★★★☆☆",
    body: "標準〜やや難レベルの問題が出題されます。微積・確率・ベクトルの典型問題を確実に習得することが重要です。",
    detail: "大問4〜5題。記述式が主体。微積分・確率・ベクトル・数列が頻出分野。近年は問題の難化傾向があるが、基礎〜標準問題が大半を占める。難問より取れる問題を確実に得点する戦略が有効。時間管理を意識した演習で本番の安定感を養おう。",
  },
  {
    name: "物理",
    level: "★★★☆☆",
    body: "力学・電磁気・波動から標準的な問題が出題されます。公式の確実な理解と計算ミスのない答案作成が求められます。",
    detail: "力学・電磁気・波動・熱力学から出題。難問は少なく標準問題中心だが、近年は問題の質が上がっている。物理現象の本質的な理解が必要で、公式の丸暗記では対応できない問題が増えつつある。標準問題集を完璧にした後、過去問で出題傾向を把握すること。",
  },
  {
    name: "化学",
    level: "★★★☆☆",
    body: "有機・無機・理論化学がバランスよく出題されます。有機化学と理論化学の計算問題への対策が特に重要です。",
    detail: "理論化学（平衡・電気化学・溶液）と有機化学（構造決定・反応）が重要分野。有機化学の構造決定は毎年出題されており、論理的に解く訓練が必要。無機化学は族ごとの特徴と反応を確実に押さえること。近年は難化傾向が見られるため、難問演習も取り入れること。",
  },
  {
    name: "面接・小論文",
    level: "★★★☆☆",
    body: "志望動機・医師としての理念・チーム医療の理解が面接で問われます。近畿大学の多様な附属病院を活かした教育への関心を示すと好印象です。",
    detail: "個人面接形式。「なぜ医師になりたいのか」「近畿大学を選んだ理由」「理想の医師像」などが問われる。近畿大学は複数の附属病院を持ち、多様な臨床経験ができる環境が特徴。大学の教育方針を理解した上で志望動機を語ることで説得力が増す。",
  },
];

const strategies = [
  {
    step: "01",
    title: "英語を重点的に強化する",
    body: "近畿大学の英語は近年難化しており、英語力が合否を大きく左右します。長文読解演習を集中的に行い、英検準1級レベルの語彙力と読解力を身につけましょう。英語を得点源にできれば合格が大幅に近づきます。",
  },
  {
    step: "02",
    title: "医療系長文テーマに慣れる",
    body: "近畿大学の英語長文は医療・科学・社会問題に関するテーマが多く出題されます。医療系英語ニュースや英語の科学記事を定期的に読み、内容への慣れを作りましょう。専門用語を知っているだけで読解スピードが大幅に上がります。",
  },
  {
    step: "03",
    title: "数学・理科の標準問題を完璧にする",
    body: "英語の強化と並行して、数学・理科は標準問題を確実に解ける力を身につけましょう。近年難化傾向があるとはいえ、標準問題が大半を占めるため、基礎〜標準の完成が合格の土台となります。難問への対策は標準が完成してから取り組むことが効率的です。",
  },
  {
    step: "04",
    title: "面接で近畿大学の特徴を踏まえた志望動機を語る",
    body: "近畿大学は複数の附属病院を持ち、多様な診療科での臨床経験ができる環境が特徴です。「なぜ近畿大学か」という問いに対して、大学の教育環境や附属病院の充実度と自分の目標を結びつけた具体的な回答を準備しましょう。",
  },
];

const faqs = [
  {
    q: "近畿大学医学部の難易度は最近上がっていますか？",
    a: "はい、特に英語の難化傾向が顕著です。数学・理科も問題の質が上がってきており、以前より高い学力が求められるようになっています。英語を中心に早めから対策を始めることをお勧めします。",
  },
  {
    q: "近畿大学医学部のキャンパスはどこにありますか？",
    a: "大阪府大阪狭山市に医学部キャンパスがあります。近畿大学病院を中心に複数の附属病院での臨床実習が充実しており、多様な医療経験を積める環境です。",
  },
  {
    q: "近畿大学医学部の1次試験合格に必要な得点率はどのくらいですか？",
    a: "年度によって変動しますが、得点率70〜75%程度が目安です。英語が難しいため、英語での失点を最小限に抑えつつ、数学・理科で安定した得点を確保することが重要です。",
  },
];

export default function KindaiPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div style={{ backgroundColor: "#0c1a33" }} className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#c9922a" }}>
            大学別対策ガイド
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: "'Noto Serif JP', serif" }}>
            近畿大学医学部<br />入試対策ガイド
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
            近畿大学医学部の特徴
          </h2>
          <p className="text-sm leading-relaxed" style={{ color: "#374151" }}>
            近畿大学医学部は大阪府大阪狭山市に位置し、近畿大学病院を中心とする充実した附属病院群での臨床教育が特徴の医学部です。近年入試の難易度が上昇しており、特に英語の難化が顕著です。入試では英語・数学・理科2科目の筆記試験と面接が課されます。英語を武器にできる受験生に有利な傾向があり、英語長文読解力の向上が合格への最重要課題です。関西圏の医学部を目指す受験生にとって重要な選択肢の一つです。
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
            近畿大学医学部対策の相談はこちら
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
