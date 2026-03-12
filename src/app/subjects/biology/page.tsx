import Link from "next/link";

export default function BiologyPage() {
  return (
    <div className="py-16 px-4 min-h-screen bg-white">
      <div className="max-w-4xl mx-auto">
        <h1
          className="text-2xl md:text-3xl font-bold text-center mb-4"
          style={{ color: "#142b57" }}
        >
          【生物】医学部生物の勉強法｜医学部生物に特化した指導
        </h1>
        <p className="text-center mb-12 text-sm md:text-base" style={{ color: "#424f8f" }}>
          考察問題・論述問題まで対応するMedvanceの生物指導
        </p>

        <div className="space-y-8">
          <div className="p-6 rounded-lg" style={{ backgroundColor: "#d1d3ca" }}>
            <h2 className="text-xl font-bold mb-3" style={{ color: "#142b57" }}>
              医学部生物の特徴
            </h2>
            <p className="text-sm md:text-base leading-relaxed" style={{ color: "#142b57" }}>
              医学部の生物は、分子生物学・遺伝・細胞・免疫・神経などの分野が頻出で、単純な知識問題だけでなく、
              実験考察問題・論述問題が多く出題されます。知識の深さと、それを論理的に表現する力の両方が必要です。
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-4" style={{ color: "#142b57" }}>
              Medvanceの生物指導の特徴
            </h2>
            <ul className="space-y-4">
              {[
                {
                  title: "知識の体系化と深化",
                  body: "暗記量が多い生物ですが、ただ覚えるのではなく、各分野の知識を「なぜそうなるか」というメカニズムから理解することで、記憶の定着と応用力を両立します。",
                },
                {
                  title: "実験考察問題の対策",
                  body: "医学部生物の最大の特徴である実験考察問題は、未知のデータや実験設定に対して論理的に答える力が必要です。問題の読み方・考え方のフレームワークを指導します。",
                },
                {
                  title: "論述・記述力の強化",
                  body: "生物の論述問題では、正確な語句を用いて簡潔に説明する力が求められます。模範解答の丸暗記ではなく、自分の言葉で正確に表現できる力を養います。",
                },
                {
                  title: "分子生物学・免疫の重点対策",
                  body: "医学部特有の出題分野として、分子生物学（DNA複製・転写・翻訳）と免疫は特に重要です。これらを深く・正確に理解するための徹底指導を行います。",
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
