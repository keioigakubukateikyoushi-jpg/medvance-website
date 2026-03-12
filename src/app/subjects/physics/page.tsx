import Link from "next/link";

export default function PhysicsPage() {
  return (
    <div className="py-16 px-4 min-h-screen bg-white">
      <div className="max-w-4xl mx-auto">
        <h1
          className="text-2xl md:text-3xl font-bold text-center mb-4"
          style={{ color: "#142b57" }}
        >
          【物理】医学部物理の勉強法｜原理原則から理解する物理指導
        </h1>
        <p className="text-center mb-12 text-sm md:text-base" style={{ color: "#424f8f" }}>
          公式暗記を超えた、本質的な理解を育てるMedvanceの物理指導
        </p>

        <div className="space-y-8">
          <div className="p-6 rounded-lg" style={{ backgroundColor: "#d1d3ca" }}>
            <h2 className="text-xl font-bold mb-3" style={{ color: "#142b57" }}>
              医学部物理の特徴
            </h2>
            <p className="text-sm md:text-base leading-relaxed" style={{ color: "#142b57" }}>
              医学部の物理は、力学・電磁気・波動・熱力学を中心に出題され、複数分野を組み合わせた融合問題が多く見られます。
              公式を丸暗記するだけでは太刀打ちできず、現象を物理的に正確にイメージし、式に落とし込む力が必要です。
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-4" style={{ color: "#142b57" }}>
              Medvanceの物理指導の特徴
            </h2>
            <ul className="space-y-4">
              {[
                {
                  title: "現象のイメージから公式へ",
                  body: "「なぜこの公式が成り立つのか」を現象レベルから説明します。丸暗記をせず、物理現象を正確にイメージできる力を養うことで、応用問題にも対応できます。",
                },
                {
                  title: "図解と数式の連携指導",
                  body: "物理は図を描いて考えることが極めて重要です。図と数式を連動させながら解く習慣をつけ、複雑な問題でもスムーズに解答できる力を育てます。",
                },
                {
                  title: "頻出分野の徹底対策",
                  body: "医学部入試で特に重要な力学・電磁気・波動の分野を重点的に指導。過去問分析をもとに、志望校の出題傾向に合わせた効率的な学習計画を立てます。",
                },
                {
                  title: "計算力と速度の向上",
                  body: "物理では正確な計算と処理速度が問われます。計算ミスを減らし、試験時間内に完答できるよう、演習を通じてスピードと正確性を鍛えます。",
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
