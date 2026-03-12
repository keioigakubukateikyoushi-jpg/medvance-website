import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="py-16 px-4 min-h-screen bg-white">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-4" style={{ color: "#142b57" }}>
          Medvanceとは？
        </h1>
        <p className="text-xl text-center mb-12 font-medium" style={{ color: "#424f8f" }}>
          慶應医学部生による家庭教師型受験塾
        </p>

        <div className="mb-12 p-6 rounded-lg" style={{ backgroundColor: "#d1d3ca" }}>
          <p className="text-base md:text-lg leading-relaxed" style={{ color: "#142b57" }}>
            Medvanceは、現役慶應義塾大学医学部生が立ち上げた、医学部受験に特化した完全個別指導塾です。
            「偏差値40から慶應医学部合格」という実績をもとに、再現性のある合格メソッドを一人ひとりにオーダーメイドで提供します。
          </p>
        </div>

        <h2 className="text-2xl font-bold mb-8" style={{ color: "#142b57" }}>
          Medvanceの6つの特徴
        </h2>

        <ul className="space-y-6 mb-12">
          {[
            {
              icon: "🎓",
              title: "【完全1対1指導】",
              body: "すべての授業が個別の家庭教師スタイル。生徒の理解度や目標に合わせて、学習内容・進度をフルカスタマイズします。授業の内容も進度も、すべて生徒中心で決まります。",
            },
            {
              icon: "🧑‍🏫",
              title: "【講師は全員・現役慶應医学部生】",
              body: "指導にあたるのは、厳選された慶應医学部の合格者のみ。東大模試上位者・多浪経験者・地方公立出身者など、多様なバックグラウンドを持つ講師陣の中から、生徒に最も合った人物をマッチングし、派遣します。",
            },
            {
              icon: "📚",
              title: "【医学部に特化した専門対策】",
              body: "英数理に加え、面接・小論文・願書の書き方まで、医学部受験に必要なすべてをトータルサポート。一般的な予備校では対応できない医学部特有の対策も、専門知識を持つ講師が的確に指導します。",
            },
            {
              icon: "🧠",
              title: "【オーダーメイド学習計画】",
              body: "受験生一人ひとりの現在の学力・志望校・性格・生活スタイルに合わせて、最適な学習スケジュールと指導方針を完全オーダーメイドで作成。1か月・1週間・1日単位での学習計画により、最短距離で合格を目指します。",
            },
            {
              icon: "💡",
              title: "【合格者が実践した「本質的な勉強法」】",
              body: "本質を捉えて効率よく得点力を伸ばす──実際に偏差値40台から難関医学部に合格した講師の成功メソッドを再現可能な形で伝授します。「なぜその解法なのか」「どう思考すればいいのか」を徹底的に教えます。",
            },
            {
              icon: "🏠",
              title: "【自宅でもオンラインでも受講可能】",
              body: "対面指導（関東圏）・オンライン指導の両方に対応。場所を選ばず、全国どこからでも最高レベルの家庭教師指導が受けられます。再受験生・現役生問わずご利用いただけます。",
            },
          ].map((item, i) => (
            <li
              key={i}
              className="flex gap-4 p-5 rounded-lg"
              style={{ backgroundColor: "#f9f9f8", border: "1px solid #d1d3ca" }}
            >
              <span className="text-2xl flex-shrink-0">{item.icon}</span>
              <div>
                <p className="font-bold text-base md:text-lg mb-1" style={{ color: "#142b57" }}>
                  {item.title}
                </p>
                <p className="text-sm md:text-base leading-relaxed" style={{ color: "#424f8f" }}>
                  {item.body}
                </p>
              </div>
            </li>
          ))}
        </ul>

        <div className="text-center">
          <Link
            href="/contact"
            className="inline-block px-8 py-4 text-white font-bold text-lg rounded shadow-md hover:opacity-90 transition-opacity"
            style={{ backgroundColor: "#142b57" }}
          >
            無料相談・お問い合わせはこちら
          </Link>
        </div>
      </div>
    </div>
  );
}
