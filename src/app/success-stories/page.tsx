import Link from "next/link";

const stories = [
  {
    name: "A.T.さん",
    label: "現役合格・慶應義塾大学医学部",
    quote:
      "高2の秋から始めた時点では偏差値40台でした。Medvanceの講師に出会い、「本質から理解する勉強法」を教わってから成績が急激に伸びました。1年で慶應医学部に合格できたのは、オーダーメイドの学習計画があったからだと思います。",
  },
  {
    name: "K.M.さん",
    label: "再受験・東京慈恵会医科大学合格",
    quote:
      "社会人から再受験を決意しましたが、どう勉強すればいいかわからず不安でした。Medvanceでは私のペースに合わせて計画を立ててくれ、面接・小論文対策まで手厚くサポートしてもらいました。念願の医学部に合格できて本当に感謝しています。",
  },
  {
    name: "S.Y.さん",
    label: "一浪・順天堂大学医学部合格",
    quote:
      "現役時代は数学が特に苦手で、模試でも点が取れませんでした。Medvanceの講師が「なぜつまずくのか」を根本から分析してくれて、苦手の原因を一つひとつ潰していきました。浪人1年で志望校に合格できたのは、講師との二人三脚があったからです。",
  },
];

export default function SuccessStoriesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Page Header */}
      <div style={{ backgroundColor: "#0c1a33" }} className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#c9922a" }}>Success Stories</p>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: "'Noto Serif JP', serif" }}>
            合格体験記
          </h1>
          <p className="text-base" style={{ color: "rgba(255,255,255,0.65)" }}>
            Medvanceで合格を勝ち取った受験生たちの声をご紹介します。
          </p>
        </div>
      </div>

      {/* Stories */}
      <div className="py-20 px-4">
        <div className="max-w-3xl mx-auto space-y-8 mb-16">
          {stories.map((story, i) => (
            <div
              key={i}
              className="rounded-2xl p-8"
              style={{ backgroundColor: "#f7f5f0", border: "1px solid #e5e1d8" }}
            >
              <div className="text-6xl leading-none mb-4" style={{ color: "#c9922a", opacity: 0.25, fontFamily: "Georgia, serif" }}>&ldquo;</div>
              <p className="text-base leading-relaxed mb-8" style={{ color: "#3d3d3d" }}>
                {story.quote}
              </p>
              <div className="flex items-center gap-3 pt-6" style={{ borderTop: "1px solid #e5e1d8" }}>
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0"
                  style={{ backgroundColor: "#0c1a33" }}
                >
                  {story.name.charAt(0)}
                </div>
                <div>
                  <p className="font-bold text-sm" style={{ color: "#0c1a33" }}>{story.name}</p>
                  <p className="text-xs mt-0.5" style={{ color: "#6b7280" }}>{story.label}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="max-w-3xl mx-auto">
          <div
            className="p-10 rounded-2xl text-center"
            style={{ backgroundColor: "#0c1a33" }}
          >
            <h2 className="text-xl md:text-2xl font-bold text-white mb-4" style={{ fontFamily: "'Noto Serif JP', serif" }}>
              あなたも合格体験記の主役になりませんか？
            </h2>
            <p className="mb-8 text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.68)" }}>
              Medvanceでは、今この瞬間も多くの受験生が最短合格を目指して取り組んでいます。
              まずは無料相談から、あなたの可能性を確認してみてください。
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
    </div>
  );
}
