import Link from "next/link";

export const metadata = {
  title: "医学部合格体験記｜現役・浪人・再受験の成功事例 | Medvance",
  description:
    "Medvanceの医学部合格体験記を掲載。現役合格、一浪、再受験それぞれの成功事例から、出発点・変化のきっかけ・合格までの流れを確認できます。",
};

const stories = [
  {
    name: "A.T.さん",
    label: "現役合格・慶應義塾大学医学部",
    type: "現役生",
    before: "勉強法の軸が固まり切らず、何を優先すべきか迷いがあった。",
    support: "「本質から理解する勉強法」とオーダーメイドの学習計画で、日々の勉強の方向性を明確化。",
    result: "1年で慶應義塾大学医学部に現役合格。",
    quote:
      "Medvanceの講師に出会い、「本質から理解する勉強法」を教わってから成績が急激に伸びました。1年で慶應医学部に合格できたのは、オーダーメイドの学習計画があったからだと思います。",
    relatedHref: "/universities/keio",
    relatedLabel: "慶應医学部の対策を見る",
  },
  {
    name: "K.M.さん",
    label: "再受験・東京慈恵会医科大学合格",
    type: "再受験",
    before: "社会人から再受験を決意したが、どう勉強すればいいかわからず不安だった。",
    support: "毎週のスケジュール設計と、面接・小論文まで含めた一貫サポートで、仕事との両立を成立させた。",
    result: "再受験で東京慈恵会医科大学に合格。",
    quote:
      "社会人から再受験を決意しましたが、どう勉強すればいいかわからず不安でした。Medvanceでは私のペースに合わせて計画を立ててくれ、面接・小論文対策まで手厚くサポートしてもらいました。念願の医学部に合格できて本当に感謝しています。",
    relatedHref: "/for/saijuken",
    relatedLabel: "再受験生向けページを見る",
  },
  {
    name: "S.Y.さん",
    label: "一浪・順天堂大学医学部合格",
    type: "浪人生",
    before: "独学で勉強しても伸びず、自分のどこが悪いのか言語化できていなかった。",
    support: "つまずきの原因を講師が言語化し、勉強の仕方そのものを根本から修正。浪人経験のある講師が伴走。",
    result: "一浪で順天堂大学医学部に合格。",
    quote:
      "現役時代は独学で何とかしようとしていましたが、どれだけ時間を使っても成績が伸びず、気づいたら受験が終わっていました。Medvanceで初めて、自分の学習のどこに問題があるかを言語化してもらい、勉強の仕方が根本から変わりました。講師の先生が同じ浪人経験を持っているので、焦りや不安を話せる存在でもありました。一浪で順天堂大学医学部に合格できたのは、Medvanceなしでは考えられません。",
    relatedHref: "/for/ronin",
    relatedLabel: "浪人生向けページを見る",
  },
];

const commonPoints = [
  {
    title: "出発点の診断が早い",
    body:
      "合格した受験生ほど、「今の自分に何が足りないか」を早い段階で具体化しています。闇雲に量をこなすより、弱点の特定が先です。",
  },
  {
    title: "学習計画が週単位で回っている",
    body:
      "やる気に依存せず、1週間単位で優先順位が整理されている状態を作れた人ほど伸びています。計画の粒度が細かいほど、迷いが減ります。",
  },
  {
    title: "学科以外も後回しにしない",
    body:
      "面接・小論文・出願書類まで含めて早めに準備した人は、直前期に余裕が残りやすくなります。医学部受験は総合戦です。",
  },
];

const nextPaths = [
  {
    title: "浪人生の事例をもっと見る",
    desc: "一浪での立て直し方、1年間の進め方、焦りへの対処まで整理しています。",
    href: "/for/ronin",
  },
  {
    title: "再受験生の事例をもっと見る",
    desc: "社会人・大学生からの挑戦で重要な計画設計と面接準備をまとめています。",
    href: "/for/saijuken",
  },
  {
    title: "料金と始め方を確認する",
    desc: "週1〜週3の目安、費用感、無料相談で決まることを確認できます。",
    href: "/pricing",
  },
];

export default function SuccessStoriesPage() {
  return (
    <div className="min-h-screen bg-white">
      <div style={{ backgroundColor: "#0c1a33" }} className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#c9922a" }}>Success Stories</p>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: "'Noto Serif JP', serif" }}>
            合格体験記
          </h1>
          <p className="text-base" style={{ color: "rgba(255,255,255,0.65)" }}>
            出発点が違っても、戦略が変わると合格までの距離は縮まります。
          </p>
        </div>
      </div>

      <div className="py-16 px-4" style={{ backgroundColor: "#f7f5f0" }}>
        <div className="max-w-3xl mx-auto">
          <div className="p-8 rounded-2xl bg-white" style={{ border: "1px solid #e5e1d8" }}>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "#3d3d3d" }}>
              塾選びで最も不安なのは、「本当に自分のケースでも伸びるのか」が見えないことだと思います。Medvanceでは、現役生・浪人生・再受験生それぞれで、どこに悩みがあり、何を変えたことで合格に近づいたのかがわかるように事例を整理しています。
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#3d3d3d" }}>
              匿名掲載ですが、受験タイプごとの出発点と変化の流れがわかるようにまとめています。自分に近いケースから読んでみてください。
            </p>
          </div>
        </div>
      </div>

      <div className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto space-y-8 mb-16">
          {stories.map((story) => (
            <div
              key={story.name}
              className="rounded-[28px] p-8 md:p-10"
              style={{ backgroundColor: "#f7f5f0", border: "1px solid #e5e1d8" }}
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-6">
                <div>
                  <span
                    className="inline-flex items-center rounded-full px-3 py-1 text-xs font-bold mb-4"
                    style={{ backgroundColor: "rgba(201,146,42,0.12)", color: "#c9922a" }}
                  >
                    {story.type}
                  </span>
                  <h2 className="text-2xl font-bold mb-2" style={{ color: "#0c1a33", fontFamily: "'Noto Serif JP', serif" }}>
                    {story.label}
                  </h2>
                  <p className="text-sm font-semibold" style={{ color: "#6b7280" }}>
                    {story.name}
                  </p>
                </div>
                <Link
                  href={story.relatedHref}
                  className="inline-flex items-center gap-2 rounded-lg px-5 py-3 text-sm font-bold hover:opacity-90 transition-opacity"
                  style={{ backgroundColor: "#0c1a33", color: "#fff" }}
                >
                  {story.relatedLabel}
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                  </svg>
                </Link>
              </div>

              <div className="grid md:grid-cols-3 gap-4 mb-8">
                {[
                  { label: "出発点", text: story.before },
                  { label: "変化のきっかけ", text: story.support },
                  { label: "結果", text: story.result },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl p-5 bg-white"
                    style={{ border: "1px solid #e5e1d8" }}
                  >
                    <p className="text-xs font-bold tracking-widest uppercase mb-2" style={{ color: "#c9922a" }}>
                      {item.label}
                    </p>
                    <p className="text-sm leading-relaxed" style={{ color: "#3d3d3d" }}>
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>

              <div className="rounded-2xl p-6 bg-white" style={{ border: "1px solid #e5e1d8" }}>
                <span className="text-4xl font-bold leading-none mb-4 block" style={{ color: "#c9922a", fontFamily: "Georgia, serif" }}>
                  &ldquo;
                </span>
                <p className="text-sm leading-relaxed" style={{ color: "#3d3d3d" }}>
                  {story.quote}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="py-20 px-4" style={{ backgroundColor: "#f7f5f0" }}>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-4" style={{ color: "#0c1a33", fontFamily: "'Noto Serif JP', serif" }}>
            合格者に共通する3つの変化
          </h2>
          <p className="text-center text-sm mb-12 max-w-2xl mx-auto" style={{ color: "#6b7280" }}>
            合格体験記を並べてみると、出発点は違っても、伸び始める前に共通して起きている変化があります。
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {commonPoints.map((item, i) => (
              <div
                key={item.title}
                className="rounded-2xl p-6 bg-white"
                style={{ border: "1px solid #e5e1d8" }}
              >
                <div className="w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold mb-4" style={{ backgroundColor: "#0c1a33" }}>
                  {i + 1}
                </div>
                <p className="font-bold text-base mb-3" style={{ color: "#0c1a33" }}>
                  {item.title}
                </p>
                <p className="text-sm leading-relaxed" style={{ color: "#6b7280" }}>
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-4" style={{ color: "#0c1a33", fontFamily: "'Noto Serif JP', serif" }}>
            次に見ると判断しやすいページ
          </h2>
          <p className="text-center text-sm mb-12 max-w-2xl mx-auto" style={{ color: "#6b7280" }}>
            自分に近い受験タイプや、料金・始め方の確認まで、そのまま続けて見られるようにしています。
          </p>
          <div className="grid md:grid-cols-3 gap-5">
            {nextPaths.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block rounded-2xl p-6 hover:shadow-md transition-shadow"
                style={{ backgroundColor: "#f7f5f0", border: "1px solid #e5e1d8" }}
              >
                <p className="font-bold text-base mb-3" style={{ color: "#0c1a33" }}>
                  {item.title}
                </p>
                <p className="text-sm leading-relaxed" style={{ color: "#6b7280" }}>
                  {item.desc}
                </p>
                <p className="text-xs font-semibold mt-5" style={{ color: "#c9922a" }}>
                  詳しく見る →
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="py-20 px-4" style={{ backgroundColor: "#0c1a33" }}>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#c9922a" }}>
            Free Consultation
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4" style={{ fontFamily: "'Noto Serif JP', serif" }}>
            次は、あなたのケースに引き直して整理できます
          </h2>
          <p className="mb-8 text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.68)" }}>
            合格体験記を読んで近いケースが見つかったら、次は「自分なら何を優先すべきか」を整理する段階です。無料相談では、志望校・現在地・残り期間に合わせて、具体的な進め方をお話しします。
          </p>
          <Link
            href="/contact?from=success-stories-page"
            className="inline-block px-8 py-4 text-white font-bold text-base rounded-lg shadow-md hover:opacity-90 transition-opacity"
            style={{ backgroundColor: "#c9922a" }}
          >
            無料相談・お問い合わせ
          </Link>
        </div>
      </div>
    </div>
  );
}
