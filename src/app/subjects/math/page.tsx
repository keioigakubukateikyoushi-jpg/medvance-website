import Link from "next/link";

export default function MathPage() {
  return (
    <div className="py-16 px-4 min-h-screen bg-white">
      <div className="max-w-4xl mx-auto">
        <h1
          className="text-2xl md:text-3xl font-bold text-center mb-4"
          style={{ color: "#142b57" }}
        >
          【数学】医学部数学の勉強法｜思考力を育てる本質的な数学指導
        </h1>
        <p className="text-center mb-12 text-sm md:text-base" style={{ color: "#424f8f" }}>
          解法暗記に頼らない、真の数学力を養うMedvanceの数学指導
        </p>

        <div className="space-y-8">
          <div className="p-6 rounded-lg" style={{ backgroundColor: "#d1d3ca" }}>
            <h2 className="text-xl font-bold mb-3" style={{ color: "#142b57" }}>
              医学部数学の特徴
            </h2>
            <p className="text-sm md:text-base leading-relaxed" style={{ color: "#142b57" }}>
              医学部の数学は、難関大学レベルの問題が多く、単なる解法暗記では対応できません。
              数学的思考力と論理的な記述力が問われます。慶應・東京慈恵会・順天堂など難関医学部では、
              複合問題・証明問題・融合問題が頻出し、深い理解が必要とされます。
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-4" style={{ color: "#142b57" }}>
              Medvanceの数学指導の特徴
            </h2>
            <ul className="space-y-4">
              {[
                {
                  title: "「なぜ」から始める問題解決",
                  body: "解法を「覚える」のではなく、「なぜその方針が正しいのか」を理解することに重点を置きます。初見問題でも自力で考えられる数学力を育てます。",
                },
                {
                  title: "弱点の根本診断と克服",
                  body: "「計算ミスが多い」「証明が書けない」など、表面的な問題の裏にある根本原因を診断し、ピンポイントで解消します。",
                },
                {
                  title: "論述・記述力の強化",
                  body: "医学部では記述式問題が多く、途中過程も採点されます。「正しく考えて、正しく書く」力を段階的に養います。",
                },
                {
                  title: "志望校別の対策",
                  body: "志望校の過去問分析をもとに、頻出分野・出題傾向に合わせた戦略的な対策を行います。無駄な勉強を省き、得点につながる学習に集中します。",
                },
              ].map((item, i) => (
                <li
                  key={i}
                  className="p-5 rounded-lg"
                  style={{ backgroundColor: "#f9f9f8", border: "1px solid #d1d3ca" }}
                >
                  <p className="font-bold mb-2" style={{ color: "#142b57" }}>
                    {item.title}
                  </p>
                  <p className="text-sm leading-relaxed" style={{ color: "#424f8f" }}>
                    {item.body}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/subjects"
            className="px-6 py-3 rounded font-semibold text-center hover:opacity-80 transition-opacity"
            style={{ border: "2px solid #142b57", color: "#142b57" }}
          >
            ← 各教科一覧に戻る
          </Link>
          <Link
            href="/contact"
            className="px-6 py-3 rounded font-semibold text-white text-center hover:opacity-90 transition-opacity"
            style={{ backgroundColor: "#142b57" }}
          >
            無料相談・お問い合わせはこちら
          </Link>
        </div>
      </div>
    </div>
  );
}
