import Link from "next/link";

const features = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
      </svg>
    ),
    title: "完全1対1指導",
    body: "すべての授業が個別の家庭教師スタイル。生徒の理解度や目標に合わせて、学習内容・進度をフルカスタマイズします。授業の内容も進度も、すべて生徒中心で決まります。",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
      </svg>
    ),
    title: "講師は全員・現役慶應医学部生",
    body: "指導にあたるのは、厳選された慶應医学部の合格者のみ。東大模試上位者・多浪経験者・地方公立出身者など、多様なバックグラウンドを持つ講師陣の中から、生徒に最も合った人物をマッチングし、派遣します。",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
      </svg>
    ),
    title: "医学部に特化した専門対策",
    body: "英数理に加え、面接・小論文・願書の書き方まで、医学部受験に必要なすべてをトータルサポート。一般的な予備校では対応できない医学部特有の対策も、専門知識を持つ講師が的確に指導します。",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25Z" />
      </svg>
    ),
    title: "オーダーメイド学習計画",
    body: "受験生一人ひとりの現在の学力・志望校・性格・生活スタイルに合わせて、最適な学習スケジュールと指導方針を完全オーダーメイドで作成。1か月・1週間・1日単位での学習計画により、最短距離で合格を目指します。",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
      </svg>
    ),
    title: "合格者が実践した「本質的な勉強法」",
    body: "本質を捉えて効率よく得点力を伸ばす──実際に偏差値40台から難関医学部に合格した講師の成功メソッドを再現可能な形で伝授します。「なぜその解法なのか」「どう思考すればいいのか」を徹底的に教えます。",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
      </svg>
    ),
    title: "自宅でもオンラインでも受講可能",
    body: "対面指導（関東圏）・オンライン指導の両方に対応。場所を選ばず、全国どこからでも最高レベルの家庭教師指導が受けられます。再受験生・現役生問わずご利用いただけます。",
  },
];

export default function AboutPage() {
  return (
    <div className="py-16 px-4 min-h-screen bg-white">
      <div className="max-w-4xl mx-auto">
        <p className="text-xs font-semibold tracking-widest uppercase text-center mb-3" style={{ color: "#424f8f" }}>
          医学部受験専門塾
        </p>
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-3" style={{ color: "#142b57" }}>
          Medvanceとは？
        </h1>
        <p className="text-xl text-center mb-12 font-medium" style={{ color: "#424f8f" }}>
          慶應医学部生による家庭教師型受験塾
        </p>

        <div className="mb-12 p-6 rounded-lg" style={{ backgroundColor: "#f9f9f8", border: "1px solid #d1d3ca" }}>
          <p className="text-base md:text-lg leading-relaxed" style={{ color: "#142b57" }}>
            Medvanceは、現役慶應義塾大学医学部生が立ち上げた、医学部受験に特化した完全個別指導塾です。
            「偏差値40から慶應医学部合格」という実績をもとに、再現性のある合格メソッドを一人ひとりにオーダーメイドで提供します。
          </p>
        </div>

        <h2 className="text-2xl font-bold mb-8" style={{ color: "#142b57" }}>
          Medvanceの6つの特徴
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
          {features.map((item, i) => (
            <div
              key={i}
              className="flex gap-4 p-5 rounded-lg"
              style={{ backgroundColor: "#f9f9f8", border: "1px solid #d1d3ca" }}
            >
              <div
                className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-white"
                style={{ backgroundColor: "#142b57" }}
              >
                {item.icon}
              </div>
              <div>
                <p className="font-bold text-base mb-1" style={{ color: "#142b57" }}>
                  {item.title}
                </p>
                <p className="text-sm leading-relaxed" style={{ color: "#424f8f" }}>
                  {item.body}
                </p>
              </div>
            </div>
          ))}
        </div>

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
