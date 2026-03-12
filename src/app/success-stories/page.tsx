import Link from "next/link";

export default function SuccessStoriesPage() {
  return (
    <div className="py-16 px-4 min-h-screen bg-white">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-4" style={{ color: "#142b57" }}>
          合格体験記
        </h1>
        <p className="text-center mb-12 text-base" style={{ color: "#424f8f" }}>
          Medvanceで合格を勝ち取った受験生たちの声をご紹介します。
        </p>

        <div className="space-y-8 mb-12">
          {[
            {
              name: "A.T.さん（現役合格・慶應義塾大学医学部）",
              bg: "#424f8f",
              text: "white",
              quote:
                "高2の秋から始めた時点では偏差値40台でした。Medvanceの講師に出会い、「本質から理解する勉強法」を教わってから成績が急激に伸びました。1年で慶應医学部に合格できたのは、オーダーメイドの学習計画があったからだと思います。",
            },
            {
              name: "K.M.さん（再受験・東京慈恵会医科大学合格）",
              bg: "#d1d3ca",
              text: "#142b57",
              quote:
                "社会人から再受験を決意しましたが、どう勉強すればいいかわからず不安でした。Medvanceでは私のペースに合わせて計画を立ててくれ、面接・小論文対策まで手厚くサポートしてもらいました。念願の医学部に合格できて本当に感謝しています。",
            },
            {
              name: "S.Y.さん（一浪・順天堂大学医学部合格）",
              bg: "#f9f9f8",
              text: "#142b57",
              quote:
                "現役時代は数学が特に苦手で、模試でも点が取れませんでした。Medvanceの講師が「なぜつまずくのか」を根本から分析してくれて、苦手の原因を一つひとつ潰していきました。浪人1年で志望校に合格できたのは、講師との二人三脚があったからです。",
            },
          ].map((story, i) => (
            <div
              key={i}
              className="p-6 rounded-lg"
              style={{
                backgroundColor: story.bg,
                border: story.bg === "#f9f9f8" ? "1px solid #d1d3ca" : "none",
              }}
            >
              <p
                className="font-bold text-lg mb-3"
                style={{ color: story.text === "white" ? "white" : story.text }}
              >
                {story.name}
              </p>
              <p
                className="text-sm md:text-base leading-relaxed"
                style={{ color: story.text === "white" ? "rgba(255,255,255,0.9)" : "#424f8f" }}
              >
                &quot;{story.quote}&quot;
              </p>
            </div>
          ))}
        </div>

        <div
          className="p-8 rounded-lg text-center mb-8"
          style={{ backgroundColor: "#142b57" }}
        >
          <h2 className="text-xl md:text-2xl font-bold text-white mb-4">
            あなたも合格体験記の主役になりませんか？
          </h2>
          <p className="text-white opacity-90 mb-6 text-sm leading-relaxed">
            Medvanceでは、今この瞬間も多くの受験生が最短合格を目指して取り組んでいます。
            まずは無料相談から、あなたの可能性を確認してみてください。
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 text-white font-bold text-lg rounded shadow-md hover:opacity-90 transition-opacity"
            style={{ backgroundColor: "#424f8f", border: "1px solid rgba(255,255,255,0.4)" }}
          >
            無料相談・お問い合わせはこちら
          </Link>
        </div>
      </div>
    </div>
  );
}
