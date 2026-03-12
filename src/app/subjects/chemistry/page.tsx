import Link from "next/link";

export default function ChemistryPage() {
  return (
    <div className="py-16 px-4 min-h-screen bg-white">
      <div className="max-w-4xl mx-auto">
        <h1
          className="text-2xl md:text-3xl font-bold text-center mb-4"
          style={{ color: "#142b57" }}
        >
          【化学】医学部化学の勉強法｜体系的に学ぶ化学の指導方法
        </h1>
        <p className="text-center mb-12 text-sm md:text-base" style={{ color: "#424f8f" }}>
          理論・無機・有機をつなげて理解するMedvanceの化学指導
        </p>

        <div className="space-y-8">
          <div className="p-6 rounded-lg" style={{ backgroundColor: "#d1d3ca" }}>
            <h2 className="text-xl font-bold mb-3" style={{ color: "#142b57" }}>
              医学部化学の特徴
            </h2>
            <p className="text-sm md:text-base leading-relaxed" style={{ color: "#142b57" }}>
              医学部化学では、理論化学・無機化学・有機化学のすべての分野がバランスよく出題されます。
              特に有機化学の比重が高く、構造決定問題や反応機構の理解が重要です。
              また、計算問題の精度と速度が合否を分けることも多いです。
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-4" style={{ color: "#142b57" }}>
              Medvanceの化学指導の特徴
            </h2>
            <ul className="space-y-4">
              {[
                {
                  title: "理論→無機→有機の体系的な学習",
                  body: "化学は各分野が密接につながっています。理論化学の基礎をしっかり固めたうえで、無機・有機の知識を積み上げる順序立てた指導を行います。",
                },
                {
                  title: "有機化学の構造決定対策",
                  body: "医学部頻出の有機化合物の構造決定問題を、論理的に解くプロセスを徹底指導。「なぜこの構造になるのか」を丁寧に説明し、応用力を養います。",
                },
                {
                  title: "計算問題の正確な処理",
                  body: "モル計算・平衡計算・滴定などの計算問題は、正確さとスピードが求められます。解法のパターンを体系的に整理し、確実に得点できる力をつけます。",
                },
                {
                  title: "暗記と理解の最適バランス",
                  body: "化学は暗記と理解の両方が必要な科目です。何を暗記すべきで、何を理解で対応すべきかを明確にし、効率的な学習を実現します。",
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
