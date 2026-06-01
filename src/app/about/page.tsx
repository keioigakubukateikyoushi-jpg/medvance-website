import Link from "next/link";
import Image from "next/image";
import { buildBreadcrumbSchema } from "@/lib/seo";
import TutorProfiles from "@/components/TutorProfiles";
import ScientificMethod from "@/components/ScientificMethod";

export const metadata = {
  title: "Medvanceについて | 現役医学部生による医学部受験専門塾",
  description:
    "Medvanceの設立の経緯、指導方針、講師陣、医学部受験に特化したサポート体制を紹介するページです。現役医学部生による1対1指導の特徴を確認できます。",
  alternates: {
    canonical: "/about",
  },
};

const aboutSchema = buildBreadcrumbSchema([
  { name: "ホーム", url: "/" },
  { name: "Medvanceについて", url: "/about" },
]);

const features = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
      </svg>
    ),
    title: "完全1対1指導",
    body: "すべての授業が個別の家庭教師スタイル。生徒の理解度や目標に合わせて、学習内容・進度をフルカスタマイズします。授業の内容も進度も、すべて生徒中心で決まります。",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
      </svg>
    ),
    title: "講師は全員・現役医学部生",
    body: "指導にあたるのは、厳選された医学部の現役在籍生のみ。東大模試上位者・多浪経験者・地方公立出身者など多様な講師陣から、生徒に最も合った人物をマッチングします。",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
      </svg>
    ),
    title: "医学部に特化した専門対策",
    body: "英数理に加え、面接・小論文・願書の書き方まで、医学部受験に必要なすべてをトータルサポート。一般的な予備校では対応できない医学部特有の対策も的確に指導します。",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25Z" />
      </svg>
    ),
    title: "オーダーメイド学習計画",
    body: "受験生一人ひとりの学力・志望校・性格・生活スタイルに合わせて、最適な学習スケジュールを完全オーダーメイドで作成。1か月・1週間・1日単位の計画で最短合格を目指します。",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
      </svg>
    ),
    title: "合格者が実践した「本質的な勉強法」",
    body: "本質を捉えて効率よく得点力を伸ばす──実際に難関医学部に合格した講師の成功メソッドを、再現可能な形で伝授します。",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253M3 12a8.959 8.959 0 0 0 .284 2.253" />
      </svg>
    ),
    title: "自宅でもオンラインでも受講可能",
    body: "対面指導（関東圏）・オンライン指導の両方に対応。全国どこからでも最高レベルの家庭教師指導が受けられます。再受験生・現役生問わずご利用いただけます。",
  },
];

const foundingTimeline = [
  {
    phase: "原点",
    title: "代表自身の医学部受験",
    body: "Medvance代表は、現役の慶應義塾大学医学部生。自らの医学部入試で、受験したすべての医学部に合格しました。",
  },
  {
    phase: "気づき",
    title: "合否を分けたのは戦略だった",
    body: "全勝を引き寄せたのは生まれ持った才能ではなく、正しい順序で組み立てた受験戦略と、再現性のある勉強スタイルでした。",
  },
  {
    phase: "課題",
    title: "閉ざされた医学部受験情報",
    body: "一方で、医学部受験の確かな情報や戦略はほとんどオープンになっておらず、本当に必要としている受験生に届いていない現実がありました。",
  },
  {
    phase: "決意",
    title: "確実な戦略を、すべての受験生へ",
    body: "医学部に合格した人だからこそ語れる確実な戦略を、医学部を志すすべての受験生に届けたい。その思いが設立の原動力になりました。",
  },
  {
    phase: "設立",
    title: "Medvance 設立",
    body: "現役医学部生が一人ひとりに戦略を伝える医学部受験専門塾「Medvance」を設立しました。",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
      />
      {/* Page Header */}
      <div style={{ backgroundColor: "#0c1a33" }} className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-semibold tracking-widest mb-3" style={{ color: "#c9922a" }}>塾について</p>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-noto-serif)" }}>
            Medvanceとは？
          </h1>
          <p className="text-base" style={{ color: "rgba(255,255,255,0.65)" }}>
            現役医学部生による家庭教師型受験塾
          </p>
        </div>
      </div>

      {/* 設立の経緯（Medvanceとは？＋生まれた理由）*/}
      <div className="py-16 px-4 pb-8">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-bold tracking-widest mb-3" style={{ color: "#c9922a" }}>
            OUR STORY
          </p>
          <h2
            className="text-2xl md:text-3xl font-bold mb-6 leading-snug"
            style={{ color: "#000", fontFamily: "var(--font-noto-serif)" }}
          >
            すべては医学部「全勝合格」の実体験から。<br className="hidden md:block" />Medvanceが生まれた理由
          </h2>
          <div className="mb-10 md:grid md:grid-cols-[1fr_320px] md:gap-10 md:items-start">
            <div className="space-y-4 text-sm md:text-base leading-relaxed" style={{ color: "#3d3d3d" }}>
              <p>
                Medvanceの原点は、代表自身の医学部受験にあります。現役の慶應義塾大学医学部生である代表は、自らの医学部入試で、受験したすべての医学部に合格しました。
              </p>
              <p>
                その全勝を支えたのは、特別な才能ではありませんでした。何を・いつ・どの順番で進めるかという<strong style={{ color: "#0c1a33" }}>受験戦略</strong>と、合格者だからこそ確立できた<strong style={{ color: "#0c1a33" }}>勉強スタイル</strong>──Medvanceは、この実体験そのものから生まれています。
              </p>
              <p>
                ただ、医学部受験の確かな情報や戦略は、いまだ十分にオープンになっておらず、本当に必要としている受験生に届いていません。だからこそ、医学部に合格した人による確実な戦略を、医学部を志すすべての受験生に届けたい──その思いから、現役医学部生が教える医学部受験塾「Medvance」を設立しました。
              </p>
              <div className="pt-4">
                <div className="p-4 rounded-xl border text-xs" style={{ backgroundColor: "#f7f5f0", borderColor: "#e5e1d8", color: "#5f6b7a" }}>
                  <strong style={{ color: "#0c1a33" }}>管理本部（銀座オフィス）所在地:</strong><br />
                  〒104-0061 東京都中央区銀座1丁目12番4号<br />
                  <span style={{ fontSize: "10px", color: "#8fa0b5" }}>※こちらは管理本部オフィスのため、常設校舎としての対面授業等は行っておりません（指導はオンラインおよび各所での個別指導となります）。</span>
                </div>
              </div>
            </div>
            <figure className="mx-auto mt-8 max-w-[300px] md:mx-0 md:mt-0 md:max-w-none">
              <div className="relative overflow-hidden rounded-[24px] md:rounded-[32px] shadow-[0_20px_50px_rgba(12,26,51,0.12)] border border-white/40 ring-1 ring-[#c9922a]/10 group">
                <div className="absolute inset-0 bg-amber-100/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none duration-500 z-10" />
                <Image
                  src="/images/founder.webp"
                  alt="Medvance代表（慶應義塾大学医学部 在籍）"
                  width={640}
                  height={800}
                  className="h-auto w-full transition-transform duration-700 group-hover:scale-[1.03]"
                />
              </div>
              <figcaption className="mt-4 text-center text-xs md:text-left" style={{ color: "#6b7280" }}>
                <span className="text-[11px] font-bold tracking-wider" style={{ color: "#c9922a" }}>MEDVANCE 代表</span>
                <span className="block mt-0.5 font-bold animate-pulse" style={{ color: "#0c1a33" }}>慶應義塾大学医学部 在籍</span>
              </figcaption>
            </figure>
          </div>

          {/* フェーズ年表 */}
          <div>
            {foundingTimeline.map((item, idx) => (
              <div key={item.phase} className="flex gap-4">
                {/* Rail */}
                <div className="flex w-14 flex-shrink-0 flex-col items-center">
                  <span
                    className="w-full rounded-md py-1 text-center text-xs font-bold text-white"
                    style={{ backgroundColor: "#c9922a" }}
                  >
                    {item.phase}
                  </span>
                  {idx < foundingTimeline.length - 1 && (
                    <span className="my-1 w-px flex-1" style={{ backgroundColor: "#e5e1d8" }} />
                  )}
                </div>
                {/* Content */}
                <div className={idx < foundingTimeline.length - 1 ? "flex-1 pb-5" : "flex-1"}>
                  <div
                    className="rounded-xl p-5"
                    style={{ backgroundColor: "#f7f5f0", border: "1px solid #e5e1d8" }}
                  >
                    <p className="mb-1 text-sm font-bold" style={{ color: "#0c1a33" }}>
                      {item.title}
                    </p>
                    <p className="text-sm leading-relaxed" style={{ color: "#3d3d3d" }}>
                      {item.body}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <Link
              href="/about/founder?from=about-story"
              className="text-sm font-bold underline-offset-4 hover:underline"
              style={{ color: "#c9922a" }}
            >
              代表メッセージを読む →
            </Link>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="py-8 px-4 pb-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-10 text-center" style={{ color: "#0c1a33" }}>
            Medvanceの6つの特徴
          </h2>
          <div className="grid md:grid-cols-2 gap-4 mb-16">
            {features.map((item, i) => (
              <div
                key={i}
                className="flex gap-4 p-6 rounded-xl"
                style={{ backgroundColor: "#f7f5f0", border: "1px solid #e5e1d8" }}
              >
                <div
                  className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-white"
                  style={{ backgroundColor: "#0c1a33" }}
                >
                  {item.icon}
                </div>
                <div>
                  <p className="font-bold text-sm mb-1" style={{ color: "#0c1a33" }}>{item.title}</p>
                  <p className="text-sm leading-relaxed" style={{ color: "#6b7280" }}>{item.body}</p>
                </div>
              </div>
            ))}
          </div>

          {/* 講師紹介（データ登録後に表示） */}
        </div>
      </div>

      <TutorProfiles />

      {/* Inspirational Academic Image Banner */}
      <div className="py-6 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="relative overflow-hidden rounded-[24px] md:rounded-[32px] shadow-[0_20px_50px_rgba(12,26,51,0.12)] border border-white/40 ring-1 ring-[#c9922a]/10 group">
            <div className="absolute inset-0 bg-amber-100/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none duration-500 z-10" />
            <Image
              src="/images/generated/japanese_student_library_bright.png"
              alt="光溢れるモダンな医学部図書館で勉学に励む学生"
              width={1600}
              height={900}
              className="w-full h-[320px] object-cover transition-transform duration-700 group-hover:scale-[1.02]"
            />
            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/60 to-transparent p-6 text-white text-left z-20">
              <p className="text-xs font-bold tracking-widest text-[#c9922a] uppercase mb-1">Aspirational Environment</p>
              <h3 className="text-lg md:text-xl font-bold" style={{ fontFamily: "var(--font-noto-serif)" }}>知性を磨き、医学の未来を切り拓く場所</h3>
            </div>
          </div>
        </div>
      </div>

      {/* 脳科学エビデンスに基づく学習メソッド */}
      <ScientificMethod />

      <div className="py-8 px-4 pb-24">
        <div className="max-w-4xl mx-auto">
          {/* 指導品質基準 */}
          <div className="mb-16 p-8 rounded-2xl" style={{ backgroundColor: "#0c1a33" }}>
            <p className="text-xs font-bold tracking-widest mb-4" style={{ color: "#c9922a" }}>
              指導品質
            </p>
            <h2 className="text-xl md:text-2xl font-bold text-white mb-6" style={{ fontFamily: "var(--font-noto-serif)" }}>
              講師・指導品質の基準
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                {
                  title: "講師要件",
                  body: "講師は全員、医学部に在籍している現役学生。採用時に学力・指導適性・人物面を面接し、採用後も継続的に指導品質を確認しています。",
                },
                {
                  title: "指導内容の透明性",
                  body: "指導内容・進捗・課題は毎回記録し、保護者・生徒と共有。曖昧な精神論ではなく、具体的な学習計画と成果指標で進めます。",
                },
                {
                  title: "情報の正確性",
                  body: "入試情報・大学別傾向は公式発表・最新の入試要項に基づき定期的に更新。推測や伝聞に依存しない情報提供を徹底しています。",
                },
                {
                  title: "勧誘方針",
                  body: "無料相談での過度な勧誘・強引な契約誘導は一切行いません。ご家庭の状況と合わない場合は他塾や予備校をご提案することもあります。",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="p-5 rounded-xl"
                  style={{ backgroundColor: "rgba(255,255,255,0.05)", border: "1px solid rgba(201,146,42,0.25)" }}
                >
                  <p className="font-bold text-sm mb-2" style={{ color: "#c9922a" }}>
                    {item.title}
                  </p>
                  <p className="text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.75)" }}>
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* 編集・監修方針 */}
          <div className="mb-16 p-8 rounded-2xl" style={{ backgroundColor: "#f7f5f0", border: "1px solid #e5e1d8" }}>
            <p className="text-xs font-bold tracking-widest mb-3" style={{ color: "#c9922a" }}>
              編集方針
            </p>
            <h2 className="text-xl md:text-2xl font-bold mb-4" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>
              コラム・情報の編集方針
            </h2>
            <div className="space-y-4 text-sm leading-relaxed" style={{ color: "#3d3d3d" }}>
              <p>
                当サイトに掲載する受験情報・勉強法・大学別対策は、すべて<strong style={{ color: "#0c1a33" }}>現役医学部生による執筆・監修</strong>を経て公開しています。大学入試要項・偏差値・配点など公開情報は、毎年の募集要項発表に合わせて定期的に更新しています。
              </p>
              <p>
                記事内で紹介する勉強法・対策は、執筆者自身または近しい合格者の経験に基づくものであり、すべての受験生に当てはまる唯一の正解ではありません。個別の状況については、無料相談でお気軽にご相談ください。
              </p>
              <p>
                誤った情報・古い情報を発見された場合は、お問い合わせフォームよりご連絡ください。確認のうえ速やかに修正・更新いたします。
              </p>
            </div>
          </div>

          <div className="text-center">
            <Link
              href="/contact?from=about-bottom"
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
