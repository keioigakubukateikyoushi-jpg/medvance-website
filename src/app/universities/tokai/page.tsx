import Link from "next/link";

export const metadata = {
  title: "東海大学医学部受験対策｜入試傾向・合格戦略 | Medvance",
  description: "東海大学医学部の入試傾向・科目別対策・合格戦略を現役慶應医学部生が解説。英語長文と数学計算力を軸にした合格戦略を紹介します。",
};

const subjects = [
  {
    name: "英語",
    level: "★★★☆☆",
    body: "長文読解が中心で、医療・科学系テーマが頻出。読解スピードと正確さのバランスが重要です。",
    detail: "長文読解2〜3題が中心。文量がやや多めで、時間配分の管理が重要。医療・生命科学テーマの長文に慣れておくと有利。文法・語彙問題も出題されるため、基礎の語彙力と文法力を固めること。",
  },
  {
    name: "数学",
    level: "★★★☆☆",
    body: "標準レベルの計算問題が中心。計算力と処理スピードが合否を分けます。",
    detail: "大問4〜5題。微積分・確率・数列が頻出。計算量が多い問題もあり、計算処理能力が重要。ミスなく素早く計算できる力を日頃の演習で養うこと。難問より標準問題を確実に解くことを優先。",
  },
  {
    name: "物理",
    level: "★★★☆☆",
    body: "力学・電磁気を中心に標準的な問題が出題されます。基礎法則の正確な理解が重要です。",
    detail: "力学・電磁気・波動・熱力学から出題。基本公式の正確な理解と適用力が問われる。計算問題では処理ミスに注意。典型問題の解法パターンを体系的に習得することが合格の近道。",
  },
  {
    name: "化学",
    level: "★★★☆☆",
    body: "有機・無機・理論化学がバランスよく出題。計算の正確性が重要なポイントです。",
    detail: "有機・無機・理論化学から出題。モル計算・平衡・有機化合物の構造決定が頻出。標準的な難易度のため、典型問題を確実に解ける力が合格ラインに到達するための基礎となる。",
  },
  {
    name: "面接",
    level: "★★★☆☆",
    body: "志望動機・医師を目指す動機・医療問題への見解が問われます。自分の言葉で話せる準備が必要です。",
    detail: "個人面接形式。「なぜ医師になりたいか」「東海大学を選んだ理由」「地域医療についてどう考えるか」などが一般的な質問。東海大学は地域医療に力を入れているため、地域医療への関心を示すことが評価される場合がある。",
  },
  {
    name: "総合対策",
    level: "★★★☆☆",
    body: "英語の長文力と数学の計算力を優先的に伸ばしながら、理科も標準レベルまで仕上げる総合戦略が有効です。",
    detail: "全科目標準レベルの出題。英語の長文読解力と数学の計算力が特に重要。理科は基礎〜標準問題を確実に押さえること。バランスよく全科目を仕上げることが合格への近道。",
  },
];

const strategies = [
  {
    step: "01",
    title: "英語の長文読解力を重点的に強化する",
    body: "東海大学の英語は長文の文量が多く、読解スピードと正確さの両立が求められます。医療・科学系の英文に慣れながら、毎日長文を時間計測して読む習慣をつけましょう。",
  },
  {
    step: "02",
    title: "数学の計算力を徹底的に鍛える",
    body: "東海大学の数学は計算量が多い問題が出題されます。計算ミスをゼロにしながら素早く処理できる力を養うことが合否を分けます。毎日の計算練習を欠かさず行いましょう。",
  },
  {
    step: "03",
    title: "理科は標準問題の解法パターンを習得する",
    body: "東海大学の理科は標準レベルの問題が中心です。典型問題の解法パターンを体系的に習得し、確実に得点できる状態を作ることが最も効率的な対策です。",
  },
  {
    step: "04",
    title: "地域医療への理解を深めて面接に備える",
    body: "東海大学は地域医療の担い手育成に力を入れています。面接では地域医療や医師不足問題への意見が問われることがあります。医療ニュースを定期的にチェックし、自分なりの意見を持っておきましょう。",
  },
];

const faqs = [
  {
    q: "東海大学医学部の難易度はどのくらいですか？",
    a: "私立医学部の中では標準レベルです。英語の長文量と数学の計算量がやや多めですが、基礎〜標準問題を確実に解ける力があれば合格圏内に入れます。",
  },
  {
    q: "東海大学医学部の英語で特に重要なことは何ですか？",
    a: "長文読解のスピードと正確さの両立が最も重要です。医療・科学系テーマの英文に慣れておくことも有効です。毎日時間計測しながら長文を読む習慣をつけましょう。",
  },
  {
    q: "東海大学医学部の面接ではどのような質問がされますか？",
    a: "志望動機・医師を目指す理由・医療問題への意見などが問われます。東海大学は地域医療に力を入れているため、地域医療への関心を示せると有利な場合があります。",
  },
  {
    q: "東海大学医学部の対策はいつから始めるべきですか？",
    a: "高2から基礎固めを始め、高3春から標準問題演習に移行するのが理想的です。英語の長文読解は特に早めに着手することをお勧めします。",
  },
];

export default function TokaiPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div style={{ backgroundColor: "#0c1a33" }} className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#c9922a" }}>東海大学医学部</p>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: "'Noto Serif JP', serif" }}>東海大学医学部合格への最短ルート。</h1>
          <p className="text-base" style={{ color: "rgba(255,255,255,0.65)" }}>現役慶應医学部生が入試傾向と対策を解説</p>
        </div>
      </div>

      {/* 入試概要 */}
      <div className="py-16 px-4" style={{ backgroundColor: "#f7f5f0" }}>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-6" style={{ color: "#0c1a33", fontFamily: "'Noto Serif JP', serif" }}>東海大学医学部の入試概要</h2>
          <div className="p-8 rounded-2xl bg-white" style={{ border: "1px solid #e5e1d8" }}>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "#3d3d3d" }}>
              東海大学医学部は、神奈川県伊勢原市に位置する私立医学部です。一般選抜では英語・数学・理科2科目の筆記試験と面接が課されます。英語は長文の文量が多く、数学は計算力が問われる問題が特徴的です。
            </p>
            <p className="text-sm leading-relaxed mb-6" style={{ color: "#3d3d3d" }}>
              全体的に標準レベルの出題で、英語の長文読解力と数学の計算力を優先的に鍛えながら、理科も標準問題を確実に押さえる総合戦略が有効です。
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "募集人員", value: "約100名" },
                { label: "競争倍率", value: "4〜6倍" },
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
          <h2 className="text-2xl font-bold text-center mb-4" style={{ color: "#0c1a33", fontFamily: "'Noto Serif JP', serif" }}>東海大学医学部合格のための戦略</h2>
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
          <p className="mb-8 text-sm" style={{ color: "rgba(255,255,255,0.65)" }}>東海大学医学部合格への道筋を、一緒に考えます。</p>
          <Link href="/contact" className="inline-block px-8 py-4 text-white font-bold text-base rounded-lg shadow-md hover:opacity-90 transition-opacity" style={{ backgroundColor: "#c9922a" }}>
            無料相談・お問い合わせ
          </Link>
        </div>
      </div>
    </div>
  );
}
