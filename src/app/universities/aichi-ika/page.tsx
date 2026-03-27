import Link from "next/link";

export const metadata = {
  title: "愛知医科大学受験対策｜入試傾向・合格戦略 | Medvance",
  description: "愛知医科大学の入試傾向・科目別対策・合格戦略を現役慶應医学部生が解説。標準問題中心で基礎力完成が合否を左右する対策を詳しく紹介します。",
};

const subjects = [
  {
    name: "英語",
    level: "★★★☆☆",
    body: "長文読解と文法・語彙問題が標準的なレベルで出題されます。基礎英語力を確実に固めることが得点の安定につながります。",
    detail: "長文読解2〜3題と文法・語彙・整序問題で構成。医療・科学系テーマが頻出。難問は少なく、基礎〜標準の英語力で安定した得点が可能。英単語と文法の基礎を固めた上で、長文読解の練習を積み重ねることが効率的。医療系英語の語彙に慣れておくと内容理解がスムーズになる。",
  },
  {
    name: "数学",
    level: "★★★☆☆",
    body: "標準レベルの問題が中心です。微積・確率・数列の典型問題を確実に習得することが最も重要です。",
    detail: "大問4〜5題。記述式と選択式が混在。微積分・確率・数列・ベクトルが頻出分野。難問は少ないため、基礎〜標準の典型問題を完全習得することが合格への近道。計算ミスが合否に直結するため、普段から検算を習慣化すること。過去問演習で出題傾向を把握し、得点効率を高めよう。",
  },
  {
    name: "物理",
    level: "★★☆☆☆",
    body: "基礎〜標準レベルの問題が中心です。基本公式を確実に理解し、正確に適用できる力が求められます。",
    detail: "力学・電磁気・波動から基礎〜標準レベルの問題が出題される。難問はほとんどなく、教科書の基本内容を丁寧に理解することが最重要。公式を丸暗記するのではなく、現象の仕組みを理解した上で公式を使えるようにすること。標準問題集を1冊しっかり仕上げれば十分対応できる。",
  },
  {
    name: "化学",
    level: "★★☆☆☆",
    body: "基礎〜標準レベルの出題です。理論化学の計算と有機化学の基礎知識を確実に習得することが重要です。",
    detail: "理論化学（モル計算・気体・溶液）と有機化学（官能基・基本反応）が中心。難易度は低めで、教科書レベルの内容を丁寧に理解すれば高得点が狙える。無機化学は主要な族の性質と反応を覚えておくこと。計算問題は単位管理を徹底して確実に得点する。有機化学は基本的な反応パターンを繰り返し練習しよう。",
  },
  {
    name: "面接・小論文",
    level: "★★★☆☆",
    body: "志望動機・医師としての姿勢・地域医療への関心が面接で問われます。愛知県の医療課題への理解を示すことが有効です。",
    detail: "個人面接形式。「なぜ医師になりたいのか」「愛知医科大学を選んだ理由」「地域医療への関心」などが問われる。愛知医科大学は地域医療への貢献を重視した大学であり、中部圏の医療課題への関心を示すと好印象。小論文は医療・社会問題をテーマに論理的な文章を書く力が求められる。",
  },
];

const strategies = [
  {
    step: "01",
    title: "基礎を徹底的に固めることを最優先にする",
    body: "愛知医科大学は全科目で基礎〜標準問題が中心のため、基礎の完成度が合否を直接決めます。教科書レベルの内容を完全に理解し、典型問題を見た瞬間に解法が浮かぶレベルまで仕上げましょう。難問への対策は基礎が完成してから取り組む順序が正解です。",
  },
  {
    step: "02",
    title: "理科（物理・化学）は基礎問題を確実に得点源にする",
    body: "愛知医科大学の物理・化学は難易度が低めです。この科目で確実に高得点を取ることが合格への大きなアドバンテージになります。基礎問題を見逃すことなく完璧に解ける状態を作り、理科を得点の柱にしましょう。",
  },
  {
    step: "03",
    title: "全科目でバランスよく得点する",
    body: "難問が少ない分、どの科目でも大きく差がつきにくい入試です。1科目での大きな失点が合否を左右します。苦手科目をなくすことを意識して、全科目でバランスよく得点できる状態を目指しましょう。",
  },
  {
    step: "04",
    title: "愛知県の地域医療への関心を面接で伝える",
    body: "愛知医科大学は地域に根ざした医師の育成を重視しています。愛知県の医療課題（高齢化、地域格差など）について調べ、「なぜ愛知医科大学なのか」という問いに具体的に答えられるよう準備しましょう。",
  },
];

const faqs = [
  {
    q: "愛知医科大学の入試難易度はどのくらいですか？",
    a: "私立医学部の中では基礎〜標準レベルで、比較的取り組みやすい難易度です。難問はほとんど出題されないため、教科書レベルの基礎を確実に習得することが最も効果的な対策です。",
  },
  {
    q: "愛知医科大学は愛知県出身でなくても合格できますか？",
    a: "はい、全国から受験生が集まる大学です。ただし、地域医療への関心を示すことは面接でプラスに働きます。愛知の医療状況について少し調べておくことをお勧めします。",
  },
  {
    q: "愛知医科大学に合格するための得点率の目安はどのくらいですか？",
    a: "得点率65〜70%程度が1次試験の目安とされています。基礎問題を確実に得点することで十分達成できるラインです。特に物理・化学は難易度が低いため、高得点を目指せます。",
  },
];

export default function AichiIkaPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div style={{ backgroundColor: "#0c1a33" }} className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#c9922a" }}>
            大学別対策ガイド
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: "'Noto Serif JP', serif" }}>
            愛知医科大学<br />入試対策ガイド
          </h1>
          <p className="text-sm mb-6" style={{ color: "rgba(255,255,255,0.65)" }}>
            現役慶應医学部生による入試傾向・合格戦略の完全解説
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <span className="px-4 py-1.5 rounded-full text-xs font-semibold" style={{ backgroundColor: "rgba(201,146,42,0.2)", color: "#c9922a", border: "1px solid rgba(201,146,42,0.4)" }}>
              私立医学部
            </span>
            <span className="px-4 py-1.5 rounded-full text-xs font-semibold" style={{ backgroundColor: "rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.8)", border: "1px solid rgba(255,255,255,0.2)" }}>
              愛知県
            </span>
          </div>
        </div>
      </div>

      {/* Overview */}
      <div className="py-14 px-4" style={{ backgroundColor: "#f7f5f0" }}>
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: "#c9922a" }}>Overview</p>
          <h2 className="text-2xl font-bold mb-4" style={{ color: "#0c1a33", fontFamily: "'Noto Serif JP', serif" }}>
            愛知医科大学の特徴
          </h2>
          <p className="text-sm leading-relaxed" style={{ color: "#374151" }}>
            愛知医科大学は愛知県長久手市に位置し、中部圏の医療を支える臨床医の育成を目指す大学です。1971年の開学以来、地域医療への貢献を重視した教育を行っています。入試では英語・数学・理科2科目の筆記試験と面接が課されます。全科目で基礎〜標準問題が中心のため、基礎力の完成度が合否を直接決めます。中部圏で医師を目指す受験生にとって重要な選択肢の一つです。
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
            愛知医科大学対策の相談はこちら
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
