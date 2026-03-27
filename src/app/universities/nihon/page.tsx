import Link from "next/link";

export const metadata = {
  title: "日本大学医学部受験対策｜入試傾向・合格戦略 | Medvance",
  description: "日本大学医学部の入試傾向・科目別対策・合格戦略を現役慶應医学部生が解説。基礎から標準問題を確実に取る戦略を詳しく紹介します。",
};

const subjects = [
  {
    name: "英語",
    level: "★★★☆☆",
    body: "長文読解と文法・語彙問題がバランスよく出題されます。標準的な難易度で、基礎力をしっかり固めれば高得点が狙えます。",
    detail: "長文読解2〜3題＋文法・語彙・整序問題の構成。医療・科学系テーマが頻出。読解速度より正確性が重要で、1文1文を丁寧に読む力が求められる。単語力と文法知識を標準レベルまで引き上げることが優先課題。",
  },
  {
    name: "数学",
    level: "★★★☆☆",
    body: "標準〜やや難レベルの問題が中心。微積・確率・数列など頻出分野を中心に対策することで安定した得点が可能です。",
    detail: "大問4〜5題。記述式と選択式が混在。微積分・確率・数列・ベクトルが頻出。難問より基本〜標準問題を確実に解く力が合否を決める。時間配分を意識した演習が重要。",
  },
  {
    name: "物理",
    level: "★★★☆☆",
    body: "力学・電磁気を中心に標準的な問題が出題されます。公式の正確な理解と計算力が重要です。",
    detail: "力学・電磁気・波動・熱力学から出題。難問は少なく、基本公式の正確な適用が求められる。計算ミスで大きく失点するリスクがあるため、検算の習慣をつけること。",
  },
  {
    name: "化学",
    level: "★★★☆☆",
    body: "有機・無機・理論化学がバランスよく出題。計算問題の正確性が合否を分けます。",
    detail: "有機化学の構造決定と計算問題が頻出。標準レベルの問題が多いため、確実に解ける問題を落とさない姿勢が重要。モル計算・気体・平衡などの理論化学をしっかり固めること。",
  },
  {
    name: "小論文",
    level: "★★☆☆☆",
    body: "医療・生命倫理に関するテーマが出題されます。論理的な構成で自分の意見を述べる力が求められます。",
    detail: "600字程度の論述形式。医療問題・社会問題に関するテーマが多い。極端な意見より、多面的な視点から考察した上での結論が評価される。医療ニュースの日頃からのインプットが有効。",
  },
  {
    name: "面接",
    level: "★★★☆☆",
    body: "志望動機・医師としての姿勢・社会問題への意見が問われます。誠実に自分の言葉で答えることが重要です。",
    detail: "個人面接形式。「なぜ医師になりたいのか」「日本大学を選んだ理由」「医療の課題についてどう考えるか」などが問われる。準備なしでは答えに詰まる質問が多いため、事前に十分な練習が必要。",
  },
];

const strategies = [
  {
    step: "01",
    title: "基礎〜標準問題を確実に仕上げる",
    body: "日本大学医学部は基礎から標準レベルの問題が中心です。難問を解く力よりも、出題された問題を確実に得点する安定性が合否を分けます。まず各科目の基礎を徹底的に固め、典型問題を漏れなく対処できる状態を作りましょう。",
  },
  {
    step: "02",
    title: "英語の語彙・文法力を標準レベルまで引き上げる",
    body: "日本大学の英語は文法・語彙問題の比重が高めです。長文読解だけでなく、文法問題でも確実に点を取ることが重要。標準的な単語帳と文法書を1冊ずつ完璧にすることから始めましょう。",
  },
  {
    step: "03",
    title: "理科の計算ミスをゼロにする",
    body: "標準レベルの問題が多い日本大学では、解けるはずの問題を計算ミスで落とすことが致命的です。普段の演習から必ず検算する習慣をつけ、本番でもミスをしない安定した答案作成力を養いましょう。",
  },
  {
    step: "04",
    title: "面接・小論文対策を秋から開始する",
    body: "日本大学の2次試験では面接と小論文が課されます。医師を目指す動機や社会問題への自分なりの見解を、言語化して伝える練習を早めに始めましょう。模擬面接を繰り返すことで本番での安定したパフォーマンスにつながります。",
  },
  {
    step: "05",
    title: "過去問で出題パターンを把握する",
    body: "日本大学医学部の過去問は、出題分野や問題形式に一定の傾向があります。過去5〜10年分を分析し、頻出分野への準備を優先することで効率よく得点力を高めることができます。",
  },
];

const faqs = [
  {
    q: "日本大学医学部の難易度はどのくらいですか？",
    a: "私立医学部の中では標準〜やや難のレベルです。基礎から標準問題を確実に解く力があれば十分に合格圏内に入れます。難問への対策よりも基礎固めの完成度を高めることが最も効果的です。",
  },
  {
    q: "日本大学医学部の対策はいつから始めるべきですか？",
    a: "高2の終わりから基礎固めを始め、高3の春から応用問題に取り組むのが理想的です。ただし現時点の学力によってプランは変わりますので、まず無料相談でご確認ください。",
  },
  {
    q: "小論文の対策はどうすればいいですか？",
    a: "医療・社会問題に関するニュースや書籍を定期的に読み、自分の意見をノートに書き留める習慣をつけましょう。実際に書く練習は高3の夏頃から始めるのが目安です。",
  },
  {
    q: "理科は物理・化学どちらを選ぶべきですか？",
    a: "どちらを選んでも対策のアプローチは変わりません。得意な科目、あるいはすでに勉強が進んでいる科目を選ぶことをお勧めします。Medvanceではどちらの科目にも対応した指導が可能です。",
  },
  {
    q: "日本大学医学部に合格するための最低点はどのくらいですか？",
    a: "年度によって変動しますが、1次試験の得点率は70〜75%程度が合格ラインの目安です。基礎〜標準問題を確実に取ることで達成できるレベルです。",
  },
];

export default function NihonPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div style={{ backgroundColor: "#0c1a33" }} className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#c9922a" }}>日本大学医学部</p>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: "'Noto Serif JP', serif" }}>日本大学医学部合格への最短ルート。</h1>
          <p className="text-base" style={{ color: "rgba(255,255,255,0.65)" }}>現役慶應医学部生が入試傾向と対策を解説</p>
        </div>
      </div>

      {/* 入試概要 */}
      <div className="py-16 px-4" style={{ backgroundColor: "#f7f5f0" }}>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-6" style={{ color: "#0c1a33", fontFamily: "'Noto Serif JP', serif" }}>日本大学医学部の入試概要</h2>
          <div className="p-8 rounded-2xl bg-white" style={{ border: "1px solid #e5e1d8" }}>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "#3d3d3d" }}>
              日本大学医学部は、東京都板橋区に位置する歴史ある私立医学部です。一般選抜では英語・数学・理科2科目（物理または化学から2科目）の筆記試験に加え、小論文と面接が課されます。出題難易度は標準〜やや難で、基礎から標準問題を確実に得点する力が問われます。
            </p>
            <p className="text-sm leading-relaxed mb-6" style={{ color: "#3d3d3d" }}>
              募集人員は約120名と私立医学部の中では比較的多く、全体的にバランスのよい出題スタイルが特徴です。各科目で極端な苦手分野を作らず、総合力で勝負できる受験生が有利です。
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "募集人員", value: "約120名" },
                { label: "競争倍率", value: "4〜6倍" },
                { label: "1次試験", value: "英・数・理2科目" },
                { label: "2次試験", value: "小論文・面接" },
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
          <h2 className="text-2xl font-bold text-center mb-4" style={{ color: "#0c1a33", fontFamily: "'Noto Serif JP', serif" }}>日本大学医学部合格のための戦略</h2>
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
          <p className="mb-8 text-sm" style={{ color: "rgba(255,255,255,0.65)" }}>日本大学医学部合格への道筋を、一緒に考えます。</p>
          <Link href="/contact" className="inline-block px-8 py-4 text-white font-bold text-base rounded-lg shadow-md hover:opacity-90 transition-opacity" style={{ backgroundColor: "#c9922a" }}>
            無料相談・お問い合わせ
          </Link>
        </div>
      </div>
    </div>
  );
}
