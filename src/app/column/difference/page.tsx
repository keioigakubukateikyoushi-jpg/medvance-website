import Link from "next/link";

export const metadata = {
  title: "医学部に受かる人・落ちる人の違い｜慶應医学部生が解説 | Medvance",
  description:
    "医学部合格者と不合格者の決定的な違いを現役慶應医学部生が解説。勉強法・メンタル・戦略の違いとは？医学部に受からない人がやりがちなNG行動も紹介。",
};

const winnerTraits = [
  {
    title: "正しい戦略を持っている",
    body: "合格者は「何を・いつまでに・どうやって」仕上げるかという明確な計画を持っています。感覚で勉強するのではなく、合格から逆算した戦略的な学習を行っています。",
  },
  {
    title: "本質から理解しようとする",
    body: "「なぜそうなるか」を理解するまで先に進まない習慣があります。暗記で乗り切ろうとせず、一度理解したことは長期的に定着します。応用問題にも対応できる真の実力が身につきます。",
  },
  {
    title: "メンタルが安定している",
    body: "模試の結果・他人との比較・プレッシャーに振り回されず、自分の学習に集中できます。不安を感じることはあっても、それを行動に変える力を持っています。",
  },
];

const loserPatterns = [
  {
    title: "量をこなすことで満足している",
    body: "「今日も10時間勉強した」という達成感は、成績向上とは直結しません。何をどれだけ理解できたかを確認せず、ただこなすだけの学習を続けていると、いつまでも成績は上がりません。",
  },
  {
    title: "参考書を何冊もやる",
    body: "「新しい参考書にすれば成績が上がる」という幻想を持ちがちです。実際には1冊を完璧に仕上げる方が、5冊を中途半端にやるより効果的です。次の参考書に手を出す前に、今の1冊を完成させましょう。",
  },
  {
    title: "直前まで模試の結果に一喜一憂する",
    body: "模試はあくまで現状把握のためのツールです。C・D判定が続いても、最終的に合格した受験生は数多くいます。模試の結果に感情を揺さぶられ、学習の質が下がることの方がよほど危険です。",
  },
];

export default function DifferencePage() {
  return (
    <div className="min-h-screen bg-white">
      <div style={{ backgroundColor: "#0c1a33" }} className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#c9922a" }}>
            コラム
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: "'Noto Serif JP', serif" }}>
            医学部に受かる人・落ちる人の、決定的な違い。
          </h1>
          <p className="text-base" style={{ color: "rgba(255,255,255,0.65)" }}>
            現役慶應医学部生が、合格者の共通点を解説します
          </p>
        </div>
      </div>

      <div className="py-16 px-4" style={{ backgroundColor: "#f7f5f0" }}>
        <div className="max-w-3xl mx-auto mb-16">
          <div className="p-8 rounded-2xl bg-white" style={{ border: "1px solid #e5e1d8" }}>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "#3d3d3d" }}>
              毎年、同じくらい勉強していたはずなのに、合格する人と落ちる人が出る。その差はどこにあるのか。
            </p>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "#3d3d3d" }}>
              これは運でも才能でもありません。合格した人と落ちた人の間には、明確な「やり方の違い」があります。何時間勉強したかではなく、何を、どう理解したか。模試の結果に何を読み取り、次にどう活かしたか。そこに差があります。
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#3d3d3d" }}>
              このコラムでは、合格者と不合格者の具体的な違いを整理します。「自分はどちら側か」を確認しながら読んでみてください。
            </p>
          </div>
        </div>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-10" style={{ color: "#0c1a33", fontFamily: "'Noto Serif JP', serif" }}>
            医学部合格者の3つの共通点
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {winnerTraits.map((item, i) => (
              <div key={i} className="p-6 rounded-2xl bg-white" style={{ border: "1px solid #e5e1d8" }}>
                <div className="w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold mb-4" style={{ backgroundColor: "#c9922a" }}>
                  {i + 1}
                </div>
                <p className="font-bold text-sm mb-3" style={{ color: "#0c1a33" }}>{item.title}</p>
                <p className="text-sm leading-relaxed" style={{ color: "#6b7280" }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-10" style={{ color: "#0c1a33", fontFamily: "'Noto Serif JP', serif" }}>
            不合格者がやりがちな3つのNG行動
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {loserPatterns.map((item, i) => (
              <div key={i} className="p-6 rounded-2xl" style={{ backgroundColor: "#f7f5f0", border: "1px solid #e5e1d8" }}>
                <p className="font-bold text-sm mb-3" style={{ color: "#0c1a33" }}>NG {i + 1}. {item.title}</p>
                <p className="text-sm leading-relaxed" style={{ color: "#6b7280" }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="py-16 px-4" style={{ backgroundColor: "#f7f5f0" }}>
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-2xl font-bold text-center mb-4" style={{ color: "#0c1a33", fontFamily: "'Noto Serif JP', serif" }}>
            医学部入試特有の難しさ
          </h2>
          <p className="text-center text-sm mb-10 max-w-2xl mx-auto" style={{ color: "#6b7280" }}>
            医学部入試は、他の難関大学とは異なる独特の難しさがあります。同じ「難しい入試」でも、求められる力の種類が違います。
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "学力だけでは受からない",
                body: "慶應や慈恵をはじめ、多くの私立医学部は面接・小論文の配点が高く、学力試験で上位に入っても面接で落とされるケースがあります。「医師になるにふさわしい人間かどうか」を問う姿勢が、他学部の入試と根本的に異なります。",
              },
              {
                title: "試験範囲が広く、科目数が多い",
                body: "英数理の3科目（または4科目）を全て高水準で仕上げなければなりません。どれか一科目が極端に弱いと、得点のバランスが崩れて不合格になります。得意科目で稼ぐ戦略より、弱点を作らない戦略の方が医学部受験では有効です。",
              },
              {
                title: "大学ごとに出題スタイルが全く違う",
                body: "慶應の数学（記述・論証型）と昭和の数学（標準問題中心）では、求められる力が異なります。過去問を分析せずに「医学部対策」を一括でやろうとすると、ズレた準備をしてしまいます。志望校を絞り込んだ対策が必須です。",
              },
            ].map((item, i) => (
              <div key={i} className="p-6 rounded-2xl bg-white" style={{ border: "1px solid #e5e1d8" }}>
                <div className="w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold mb-4" style={{ backgroundColor: "#c9922a" }}>
                  {i + 1}
                </div>
                <p className="font-bold text-sm mb-2" style={{ color: "#0c1a33" }}>{item.title}</p>
                <p className="text-sm leading-relaxed" style={{ color: "#6b7280" }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-6" style={{ color: "#0c1a33", fontFamily: "'Noto Serif JP', serif" }}>
            「才能より戦略」という考え方
          </h2>
          <div className="p-8 rounded-2xl bg-white" style={{ border: "1px solid #e5e1d8" }}>
            <p className="text-sm leading-relaxed" style={{ color: "#3d3d3d" }}>
              医学部に合格した人の多くは「特別な才能を持っていた」わけではありません。正しい戦略を持ち、その戦略に沿って日々の学習を積み重ねた結果として合格を勝ち取っています。逆に言えば、才能がなくても、正しい方法論と継続力があれば医学部合格は十分に可能です。Medvanceでは、慶應医学部に合格した経験をもとに、「誰でも再現できる合格メソッド」を提供しています。まず現状を診断し、あなただけの戦略を一緒に設計しましょう。
            </p>
          </div>
        </div>
      </div>

      <div className="py-20 px-4" style={{ backgroundColor: "#0c1a33" }}>
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-sm font-semibold tracking-widest uppercase mb-3" style={{ color: "#c9922a" }}>Free Consultation</p>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4" style={{ fontFamily: "'Noto Serif JP', serif" }}>
            まずは無料相談から
          </h2>
          <p className="mb-8 text-sm" style={{ color: "rgba(255,255,255,0.65)" }}>
            あなたの学習を診断し、合格者の思考法・戦略をお伝えします。
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 text-white font-bold text-base rounded-lg shadow-md hover:opacity-90 transition-opacity"
            style={{ backgroundColor: "#c9922a" }}
          >
            無料相談・お問い合わせ
          </Link>
        </div>
      </div>
    </div>
  );
}
