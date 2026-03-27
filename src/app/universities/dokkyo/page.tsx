import Link from "next/link";

export const metadata = {
  title: "獨協医科大学受験対策｜入試傾向・合格戦略 | Medvance",
  description: "獨協医科大学の入試傾向・科目別対策・合格戦略を現役慶應医学部生が解説。標準問題中心で小論文あり。基礎完成が合否を決める戦略を詳しく紹介します。",
};

const subjects = [
  {
    name: "英語",
    level: "★★★☆☆",
    body: "長文読解と文法・語彙問題がバランスよく出題されます。標準的な難易度で、基礎英語力を固めることが最優先です。",
    detail: "長文読解2〜3題と文法・語彙・整序問題で構成。医療・科学系テーマの英文が頻出。難問は少なく、基礎〜標準の英語力があれば対応可能。英単語は標準的な単語帳1冊を完璧にすることを目標に。長文は論旨を正確に把握する練習を積み重ね、文法問題で確実に得点できる状態を作ること。",
  },
  {
    name: "数学",
    level: "★★★☆☆",
    body: "標準レベルの問題が中心です。微積・確率・数列・ベクトルの典型問題を習得することで安定した得点が可能です。",
    detail: "大問4〜5題。記述式メインで途中式の論理的な記述が求められる。微積分・確率・ベクトル・数列が頻出。基礎〜標準問題で着実に得点を積み上げる戦略が有効。難問への対策よりも、典型問題のパターンを完全に習得することが合格への近道。時間配分を意識した過去問演習も重要。",
  },
  {
    name: "物理",
    level: "★★★☆☆",
    body: "力学・電磁気・波動から標準的な問題が出題されます。基本公式の確実な理解と計算の正確性が重要です。",
    detail: "力学（運動方程式・エネルギー保存・運動量）と電磁気（回路・コンデンサ・電磁誘導）が頻出。波動と熱力学も毎年出題される。難問は少ないため、標準問題集を仕上げれば十分対応できる。計算ミスが合否を左右するため、普段から検算を習慣化すること。",
  },
  {
    name: "化学",
    level: "★★★☆☆",
    body: "有機・無機・理論化学がバランスよく出題されます。計算問題の正確性と有機反応の知識が得点につながります。",
    detail: "理論化学（モル計算・気体・溶液・平衡）と有機化学（反応・構造決定）が重要分野。無機化学は族ごとの性質と反応を確実に押さえること。計算問題は単位管理を徹底して失点を防ぐ。有機化学の構造決定は論理的な思考力が必要なため、多くの問題を演習して解法を定着させよう。",
  },
  {
    name: "面接・小論文",
    level: "★★★☆☆",
    body: "小論文と個人面接が課されます。医療への志望動機と社会問題への見解を論理的に述べる力が問われます。",
    detail: "小論文は600〜800字程度で、医療・倫理・社会問題に関するテーマが出題される。面接では「なぜ医師を志したか」「獨協医科大学を選んだ理由」「栃木県の地域医療への関心」などが問われる。地域医療への貢献意識を持っていることを伝えると好印象。小論文は複数回書く練習を積み、指導を受けることで大きく改善する。",
  },
];

const strategies = [
  {
    step: "01",
    title: "全科目の基礎を徹底的に固める",
    body: "獨協医科大学は全科目で標準問題が中心のため、基礎の完成度が合否を決定的に左右します。各科目の基本事項を漏れなく理解し、典型問題を安定して解ける力を最優先で身につけましょう。難問への対策は基礎が完成してから始めるのが正しい順序です。",
  },
  {
    step: "02",
    title: "計算ミスゼロの習慣を作る",
    body: "標準問題が中心の獨協医科大学では、解けるはずの問題でのケアレスミスが合否に直結します。数学・理科の普段の演習から必ず検算する習慣をつけ、本番で安定した答案を作成できるようにしましょう。",
  },
  {
    step: "03",
    title: "小論文対策を夏から始める",
    body: "獨協医科大学では小論文が課されます。医療倫理・社会問題に関する自分の見解を論理的に文章化する力は、短期間では身につきません。高3の夏頃から実際に書く練習を始め、添削指導を繰り返すことで文章の質を高めましょう。",
  },
  {
    step: "04",
    title: "地域医療への関心を面接で伝える",
    body: "獨協医科大学は栃木県壬生町に位置し、地域医療への貢献を重視しています。「なぜ栃木の獨協医科大学なのか」という質問に答えられるよう、地域医療の現状や課題について調べ、自分なりの医師像と結びつけて語れる準備をしましょう。",
  },
];

const faqs = [
  {
    q: "獨協医科大学の入試難易度はどのくらいですか？",
    a: "私立医学部の中では標準的なレベルです。全科目で基礎〜標準問題が中心のため、基礎の完成度を高めることが最も効果的な対策です。難問への対策よりも、解けるはずの問題を確実に得点する安定性が合否を分けます。",
  },
  {
    q: "獨協医科大学の小論文はどのようなテーマが出ますか？",
    a: "医療倫理・社会問題・医師の在り方に関するテーマが頻出です。600〜800字程度で自分の意見を論理的に述べる形式が多いです。日頃から医療ニュースや倫理的な問題について考える習慣をつけ、書く練習を積み重ねることが重要です。",
  },
  {
    q: "獨協医科大学は地元（栃木）の受験生が有利ですか？",
    a: "地域医療への貢献意識を持っていることはプラスに働きます。ただし、他地域の受験生でも「なぜ獨協医科大学で学びたいか」「地域医療にどう貢献したいか」を具体的に語れれば、十分に評価されます。",
  },
];

export default function DokkyoPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div style={{ backgroundColor: "#0c1a33" }} className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#c9922a" }}>
            大学別対策ガイド
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: "'Noto Serif JP', serif" }}>
            獨協医科大学<br />入試対策ガイド
          </h1>
          <p className="text-sm mb-6" style={{ color: "rgba(255,255,255,0.65)" }}>
            現役慶應医学部生による入試傾向・合格戦略の完全解説
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <span className="px-4 py-1.5 rounded-full text-xs font-semibold" style={{ backgroundColor: "rgba(201,146,42,0.2)", color: "#c9922a", border: "1px solid rgba(201,146,42,0.4)" }}>
              私立医学部
            </span>
            <span className="px-4 py-1.5 rounded-full text-xs font-semibold" style={{ backgroundColor: "rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.8)", border: "1px solid rgba(255,255,255,0.2)" }}>
              栃木県
            </span>
          </div>
        </div>
      </div>

      {/* Overview */}
      <div className="py-14 px-4" style={{ backgroundColor: "#f7f5f0" }}>
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: "#c9922a" }}>Overview</p>
          <h2 className="text-2xl font-bold mb-4" style={{ color: "#0c1a33", fontFamily: "'Noto Serif JP', serif" }}>
            獨協医科大学の特徴
          </h2>
          <p className="text-sm leading-relaxed" style={{ color: "#374151" }}>
            獨協医科大学は栃木県下都賀郡壬生町に位置し、1973年の開学以来、地域に根ざした臨床医の育成を重視してきた大学です。入試は英語・数学・理科2科目の筆記試験に加え、小論文と面接が課されます。全科目で標準問題が中心のため、難問より基礎の完成度が合否を決定します。地域医療への貢献意識を持つ受験生を歓迎する大学であり、面接では地域医療への関心や姿勢が問われます。
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
            獨協医科大学対策の相談はこちら
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
