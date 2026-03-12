import Link from "next/link";
import Image from "next/image";

const features = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
      </svg>
    ),
    title: "完全1対1指導",
    body: "すべての授業が個別の家庭教師スタイル。生徒の理解度や目標に合わせて、学習内容・進度をフルカスタマイズします。",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
      </svg>
    ),
    title: "講師は全員・現役慶應医学部生",
    body: "厳選された慶應医学部の合格者のみが指導。東大模試上位者・多浪経験者・地方公立出身者など、多様なバックグラウンドを持つ講師陣から最適な人物をマッチングします。",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
      </svg>
    ),
    title: "医学部に特化した専門対策",
    body: "英数理に加え、面接・小論文・願書の書き方まで、医学部受験に必要なすべてをトータルサポート。",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25Z" />
      </svg>
    ),
    title: "オーダーメイド学習計画",
    body: "受験生一人ひとりの学力・志望校・性格・生活スタイルに合わせた最適な学習スケジュールを作成。1か月・1週間・1日単位の計画で最短合格を目指します。",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
      </svg>
    ),
    title: "合格者が実践した「本質的な勉強法」",
    body: "実際に偏差値40台から難関医学部に合格した講師の成功メソッドを、再現可能な形で伝授します。",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
      </svg>
    ),
    title: "自宅でもオンラインでも受講可能",
    body: "対面指導（関東圏）・オンライン指導の両方に対応。全国どこからでも最高レベルの家庭教師指導が受けられます。",
  },
];

const steps = [
  {
    step: "Step 1",
    title: "無料カウンセリングのお申し込み",
    body: "まずは、公式LINEまたは専用フォームからお気軽にご連絡ください。学力状況・志望校・学習環境・現在の悩みなどをヒアリングします。",
  },
  {
    step: "Step 2",
    title: "最適な講師のご提案",
    body: "ヒアリング内容をもとに、性格・志望校・科目の相性まで考慮して、現役慶應医学部生から最適な講師を選定します。講師プロフィールの提示や、事前の面談も可能です。",
  },
  {
    step: "Step 3",
    title: "体験指導（1回60分〜）",
    body: "希望があれば、実際に担当予定の講師による体験指導を実施。相性や指導の質を確認したうえで、本契約に進むことができます。",
  },
  {
    step: "Step 4",
    title: "本契約と指導スタート",
    body: "スケジュールや指導方針をすり合わせたうえで契約を行い、完全1対1の本格指導がスタートします。指導後も継続的に進捗管理・相談対応・保護者報告などを行い、合格までしっかりサポートします。",
  },
];

const testimonials = [
  {
    name: "A.T.さん",
    label: "現役合格・慶應義塾大学医学部",
    quote: "1年で慶應医学部に合格できたのは、オーダーメイドの学習計画があったからだと思います。高2の秋に偏差値40台から始め、本質から理解する勉強法で急激に成績が伸びました。",
  },
  {
    name: "K.M.さん",
    label: "再受験・東京慈恵会医科大学合格",
    quote: "社会人から再受験を決意しましたが、Medvanceでは私のペースに合わせて計画を立ててくれ、面接・小論文対策まで手厚くサポートしてもらいました。",
  },
  {
    name: "S.Y.さん",
    label: "一浪・順天堂大学医学部合格",
    quote: "数学の苦手の原因を根本から分析してくれて、一つひとつ潰していきました。浪人1年で志望校に合格できたのは、講師との二人三脚があったからです。",
  },
];

const subjects = [
  { label: "英語", badge: "EN", href: "/subjects/english" },
  { label: "数学", badge: "数", href: "/subjects/math" },
  { label: "物理", badge: "物", href: "/subjects/physics" },
  { label: "化学", badge: "化", href: "/subjects/chemistry" },
  { label: "生物", badge: "生", href: "/subjects/biology" },
];

export default function Home() {
  return (
    <>
      {/* 1. Hero Section */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1 text-left">
            <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: "#424f8f" }}>
              医学部受験専門塾
            </p>
            <h1 className="text-5xl md:text-6xl font-bold mb-1" style={{ color: "#142b57" }}>
              Medvance
            </h1>
            <p className="text-lg font-medium mb-2" style={{ color: "#142b57" }}>メドバンス</p>
            <p className="text-2xl md:text-3xl font-medium mb-6" style={{ color: "#424f8f" }}>
              １歩先の医学部受験を
            </p>
            <p className="text-base md:text-lg mb-8 leading-relaxed" style={{ color: "#424f8f" }}>
              偏差値40から慶應医学部合格の実績。現役慶應医学部生による完全1対1の医学部受験専門塾です。家庭教師・オンライン対応・再受験生歓迎。
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-4 text-white font-bold text-lg rounded shadow-md hover:opacity-90 transition-opacity"
              style={{ backgroundColor: "#142b57" }}
            >
              無料相談・お問い合わせ
            </Link>
            <p className="mt-3 text-sm" style={{ color: "#424f8f" }}>
              ご依頼・無料相談はフォームから受付中
            </p>
          </div>
          <div className="flex-1 w-full max-w-sm md:max-w-none">
            <Image
              src="/images/hero.png"
              alt="Medvance 医学部受験専門塾"
              width={500}
              height={600}
              className="w-full h-auto rounded-lg object-cover"
            />
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section style={{ backgroundColor: "#142b57" }} className="py-6 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { label: "指導スタイル", value: "完全1対1制" },
            { label: "講師の資格", value: "全員が慶應医学部生" },
            { label: "対応エリア", value: "全国（オンライン）" },
            { label: "初回相談", value: "無料" },
          ].map((stat) => (
            <div key={stat.label} className="text-white">
              <p className="text-xs opacity-60 mb-1">{stat.label}</p>
              <p className="font-bold text-base md:text-lg">{stat.value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 2. About Section */}
      <section className="bg-white py-16 px-4 border-t border-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8" style={{ color: "#142b57" }}>
            Medvanceとは？慶應医学部生による家庭教師型受験塾です
          </h2>
          <div className="mb-10">
            <Image
              src="/images/about.png"
              alt="Medvanceについて"
              width={1200}
              height={675}
              className="w-full h-auto rounded-lg"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
        </div>
      </section>

      {/* 3. Flow Section */}
      <section className="py-16 px-4" style={{ backgroundColor: "#424f8f" }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-white mb-8">
            無料相談、ご応募までの流れ
          </h2>
          <div className="mb-10">
            <Image
              src="/images/flow.jpg"
              alt="ご応募までの流れ"
              width={1440}
              height={517}
              className="w-full h-auto rounded-lg"
            />
          </div>
          <div className="space-y-4">
            {steps.map((item, i) => (
              <div
                key={i}
                className="flex gap-4 rounded-lg p-5"
                style={{ backgroundColor: "rgba(255,255,255,0.1)" }}
              >
                <div className="flex-shrink-0 flex items-start pt-1">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center text-xs font-bold text-white border-2 border-white text-center"
                    style={{ backgroundColor: "#142b57" }}
                  >
                    {item.step.replace("Step ", "S")}<br />{i + 1}
                  </div>
                </div>
                <div className="flex-1">
                  <p className="font-bold text-white text-base mb-1">
                    {item.step}｜{item.title}
                  </p>
                  <p className="text-white text-sm leading-relaxed opacity-90">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Testimonials Preview */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-2" style={{ color: "#142b57" }}>
            合格者の声
          </h2>
          <p className="text-center text-sm mb-10" style={{ color: "#424f8f" }}>
            Medvanceで合格を勝ち取った受験生たちの声をご紹介します。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="p-6 rounded-lg flex flex-col"
                style={{ backgroundColor: "#f9f9f8", border: "1px solid #d1d3ca" }}
              >
                <div className="text-4xl font-serif mb-3 leading-none" style={{ color: "#142b57", opacity: 0.25 }}>"</div>
                <p className="text-sm leading-relaxed flex-1 mb-4" style={{ color: "#424f8f" }}>
                  {t.quote}
                </p>
                <div className="border-t pt-3" style={{ borderColor: "#d1d3ca" }}>
                  <p className="font-bold text-sm" style={{ color: "#142b57" }}>{t.name}</p>
                  <p className="text-xs mt-0.5" style={{ color: "#424f8f" }}>{t.label}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link
              href="/success-stories"
              className="inline-block px-6 py-3 font-semibold rounded border text-sm hover:opacity-80 transition-opacity"
              style={{ color: "#142b57", borderColor: "#142b57" }}
            >
              合格体験記をすべて読む
            </Link>
          </div>
        </div>
      </section>

      {/* 5. CTA Section */}
      <section className="py-16 px-4" style={{ backgroundColor: "#d1d3ca" }}>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-xl md:text-2xl font-semibold mb-2" style={{ color: "#142b57" }}>
            医学部受験専門塾Medvanceでは
          </h2>
          <h2 className="text-2xl md:text-3xl font-bold mb-2" style={{ color: "#142b57" }}>
            慶應義塾大学医学部の現役医学部生が
          </h2>
          <h2 className="text-xl md:text-2xl font-semibold mb-8" style={{ color: "#142b57" }}>
            マンツーマンで合格まで指導します
          </h2>
          <div className="bg-white rounded-lg p-6 md:p-8 shadow-sm">
            <h3 className="text-lg md:text-xl font-bold mb-4" style={{ color: "#142b57" }}>
              医学部合格は「才能」ではなく「戦略」
            </h3>
            <p className="text-sm md:text-base leading-relaxed mb-6" style={{ color: "#424f8f" }}>
              どれだけ努力しても、やり方を間違えると結果は出ません。Medvanceは、合格者が実際に通った&quot;最短合格ルート&quot;を、あなた専用に最適化して提供します。1年で逆転合格を目指すなら──あなたの医学部合格を、私たちが本気でサポートします。
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-4 text-white font-bold text-lg rounded shadow-md hover:opacity-90 transition-opacity"
              style={{ backgroundColor: "#142b57" }}
            >
              無料相談・依頼はこちら
            </Link>
          </div>
        </div>
      </section>

      {/* 6. Note Section */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-xl md:text-2xl font-bold mb-2" style={{ color: "#142b57" }}>
            「どうすれば医学部に合格できるのか」
          </h2>
          <h2 className="text-xl md:text-2xl font-bold mb-8" style={{ color: "#142b57" }}>
            現役慶應医学部生のnoteも更新しています
          </h2>
          <div className="mb-8">
            <Image
              src="/images/note.png"
              alt="note記事"
              width={1280}
              height={819}
              className="w-full h-auto rounded-lg"
            />
          </div>
          <p className="text-sm md:text-base leading-relaxed mb-6" style={{ color: "#424f8f" }}>
            noteでは、「偏差値40から慶應医学部に合格した戦略」「医学部に受かる人・落ちる人の決定的な違い」など、他では読めないリアルで実践的な受験情報を公開中。実際の合格体験記、科目別の勉強法、面接・小論文対策、そして最短で結果を出すスケジュール設計まで──医学部合格のすべてが詰まったnoteです。
          </p>
          <a
            href="https://note.com/igakubu_juken"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 text-white font-bold text-lg rounded shadow-md hover:opacity-90 transition-opacity"
            style={{ backgroundColor: "#142b57" }}
          >
            note記事を読む
          </a>
        </div>
      </section>

      {/* 7. Subjects Section */}
      <section className="py-16 px-4" style={{ backgroundColor: "#d1d3ca" }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center" style={{ color: "#142b57" }}>
            各教科の指導方法
          </h2>
          <p className="text-lg font-medium mb-4 text-center" style={{ color: "#424f8f" }}>
            「わかるまで、分かるように」——一人ひとりに寄り添う、本質的な受験指導
          </p>
          <p className="text-sm md:text-base leading-relaxed text-center mb-10 max-w-2xl mx-auto" style={{ color: "#142b57" }}>
            Medvanceでは、「ただ教える」だけでは終わりません。講師は、生徒が&quot;どこでつまずいているのか&quot;を丁寧に観察し、的確に見抜いたうえで、ピンポイントに解消していきます。
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {subjects.map((subject) => (
              <Link
                key={subject.href}
                href={subject.href}
                className="flex items-center gap-3 p-5 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow font-semibold text-lg"
                style={{ color: "#142b57" }}
              >
                <span
                  className="w-9 h-9 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0"
                  style={{ backgroundColor: "#142b57" }}
                >
                  {subject.badge}
                </span>
                {subject.label}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 ml-auto opacity-40">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
