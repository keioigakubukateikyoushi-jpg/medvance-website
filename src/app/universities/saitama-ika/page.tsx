import Link from "next/link";

export const metadata = {
  title: "埼玉医科大学受験対策｜入試傾向・合格戦略 | Medvance",
  description: "埼玉医科大学の入試傾向・科目別対策・合格戦略を現役慶應医学部生が解説。標準〜基礎レベルで地域医療への関心が面接で評価されます。",
};

const subjects = [
  {
    name: "英語",
    level: "★★★☆☆",
    body: "長文読解と文法・語彙問題が出題されます。標準的な難易度で、基礎英語力をしっかり固めれば安定した得点が狙えます。",
    detail: "長文読解2〜3題と文法・語彙・整序問題で構成。医療・科学系テーマが頻出。難問は少なく、基礎〜標準の英語力で対応可能。英単語と文法の基礎を固めた後、長文読解の演習を積み重ねるのが効率的な学習順序。医療関連の英文に触れておくと内容理解がスムーズになる。",
  },
  {
    name: "数学",
    level: "★★★☆☆",
    body: "標準レベルの問題が中心です。微積・確率・数列の典型問題を確実に解ける力が合格の条件です。",
    detail: "大問4〜5題。記述式と選択式が混在。微積分・確率・数列・ベクトルが頻出分野。難問は少ないため、基礎〜標準の典型問題を漏れなく習得することが最優先。計算ミスによる失点が合否に直結するため、日頃から検算を習慣化すること。過去問演習で出題パターンを把握しておこう。",
  },
  {
    name: "物理",
    level: "★★☆☆☆",
    body: "基礎〜標準レベルの問題が中心です。基本公式を正確に理解していれば十分に対応できる難易度です。",
    detail: "力学・電磁気・波動から基礎〜標準レベルの問題が出題される。難問はほとんどなく、教科書の基本事項を丁寧に理解することが最も重要。公式の丸暗記ではなく、現象の仕組みを理解した上で公式を使えるようにすること。標準問題集を1冊仕上げれば十分な対策となる。",
  },
  {
    name: "化学",
    level: "★★☆☆☆",
    body: "基礎〜標準レベルの出題です。理論化学の計算と有機化学の基礎を着実に身につけることが重要です。",
    detail: "理論化学（モル計算・気体・溶液）と有機化学（官能基・基本反応）が中心。難易度は低めで、基礎事項の正確な理解があれば高得点が狙える。無機化学は主要な族の性質と反応を覚えること。計算問題は丁寧な単位管理で確実に得点し、有機化学は基本的な反応パターンを繰り返し練習すること。",
  },
  {
    name: "面接・小論文",
    level: "★★★☆☆",
    body: "地域医療への関心と医師としての志望動機が面接で重視されます。埼玉の地域医療に貢献する意志を伝えることが重要です。",
    detail: "個人面接形式。「なぜ医師を志したか」「埼玉の医療に貢献したいと思うか」「地域医療の現状についてどう思うか」などが問われる。埼玉県の医師不足や地域医療の課題について調べ、自分なりの意見を持っておくこと。小論文は医療・社会問題をテーマに論理的な文章を書く力が求められる。",
  },
];

const strategies = [
  {
    step: "01",
    title: "基礎を完全に固めることを最優先にする",
    body: "埼玉医科大学は全科目で基礎〜標準問題が中心です。教科書レベルの内容を完全に理解し、典型問題を確実に解ける力を最初に身につけましょう。基礎が固まれば、その後の演習で急速に得点力が上がります。",
  },
  {
    step: "02",
    title: "地域医療・埼玉の医療課題を学ぶ",
    body: "埼玉医科大学は地域に根ざした医師の育成を重視しており、面接では地域医療への関心が評価されます。埼玉県の医師不足の状況、地域医療の課題、プライマリケアの重要性などについて学び、自分の言葉で語れるよう準備しましょう。",
  },
  {
    step: "03",
    title: "全科目でバランスよく得点する",
    body: "難問が少ない分、どの科目でも大きく差がつきにくい入試です。1科目で大きく失点することを避け、全科目でバランスよく得点することが合格の条件になります。苦手科目をなくすことを意識して学習計画を立てましょう。",
  },
  {
    step: "04",
    title: "面接の想定質問を念入りに準備する",
    body: "埼玉医科大学の面接では志望動機と地域医療への関心が深く問われます。「なぜ埼玉医科大学か」という問いに対して、大学の特徴（総合病院の充実、地域医療への取り組みなど）と自分の目標を結びつけた回答を準備しましょう。",
  },
];

const faqs = [
  {
    q: "埼玉医科大学の入試難易度はどのくらいですか？",
    a: "私立医学部の中では基礎〜標準レベルです。難問はほとんど出題されないため、基礎を徹底的に固めることが最も効果的な対策です。教科書の内容を完全に理解し、典型問題を確実に解ける力を身につけましょう。",
  },
  {
    q: "埼玉医科大学は地元の受験生が有利ですか？",
    a: "地域医療への関心を持つ受験生を歓迎する傾向がありますが、他県の受験生でも「埼玉の地域医療に貢献したい」という明確な意志と具体的な理由を伝えれば評価されます。大学の特徴や地域医療への取り組みを事前に調べておくことが重要です。",
  },
  {
    q: "埼玉医科大学のキャンパスはどこにありますか？",
    a: "埼玉県毛呂山町に本院があります。豊富な臨床実習環境が特徴で、複数の附属病院を有しています。地域に密着した医師育成を重視しており、卒業後も埼玉で働く医師を多く輩出しています。",
  },
];

export default function SaitamaIkaPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div style={{ backgroundColor: "#0c1a33" }} className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#c9922a" }}>
            大学別対策ガイド
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: "'Noto Serif JP', serif" }}>
            埼玉医科大学<br />入試対策ガイド
          </h1>
          <p className="text-sm mb-6" style={{ color: "rgba(255,255,255,0.65)" }}>
            現役慶應医学部生による入試傾向・合格戦略の完全解説
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <span className="px-4 py-1.5 rounded-full text-xs font-semibold" style={{ backgroundColor: "rgba(201,146,42,0.2)", color: "#c9922a", border: "1px solid rgba(201,146,42,0.4)" }}>
              私立医学部
            </span>
            <span className="px-4 py-1.5 rounded-full text-xs font-semibold" style={{ backgroundColor: "rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.8)", border: "1px solid rgba(255,255,255,0.2)" }}>
              埼玉県
            </span>
          </div>
        </div>
      </div>

      {/* Overview */}
      <div className="py-14 px-4" style={{ backgroundColor: "#f7f5f0" }}>
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: "#c9922a" }}>Overview</p>
          <h2 className="text-2xl font-bold mb-4" style={{ color: "#0c1a33", fontFamily: "'Noto Serif JP', serif" }}>
            埼玉医科大学の特徴
          </h2>
          <p className="text-sm leading-relaxed" style={{ color: "#374151" }}>
            埼玉医科大学は埼玉県毛呂山町に位置し、地域医療への貢献を建学の理念に掲げる医学部です。複数の附属病院を持ち、充実した臨床教育環境が特徴です。入試では英語・数学・理科2科目の筆記試験と面接が課されます。全科目で基礎〜標準レベルの出題が中心のため、基礎の完成度が合否を決めます。面接では地域医療への関心や志望動機が重視されており、埼玉の医療課題に対する理解と関心を示すことが評価につながります。
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
            埼玉医科大学対策の相談はこちら
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
