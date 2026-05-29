import Link from "next/link";
import ColumnCTA from "@/components/ColumnCTA";
import ColumnArticleSchemas from "@/components/ColumnArticleSchemas";

const faqItems = [
  {
    q: "特待生制度を利用するにはどのくらいの成績（偏差値）が必要ですか？",
    a: "一般的に、私立医学部の上位校や中堅校で特待生に選定されるためには、一次・二次入試の総合得点で『受験者の上位1%〜3%以内（河合塾偏差値で67〜72以上）』に達する必要があります。ミスが1問も許されない極めて高度な標準問題スピード処理能力、あるいは圧倒的な記述力が必要です。",
  },
  {
    q: "地域枠の修学資金（奨学金）制度は特待生制度とどう異なりますか？",
    a: "特待生制度は『入試成績優秀者』に対して大学が独自に学費を減免するものであり、将来の勤務地拘束などはありません。一方、地域枠（修学資金）は都道府県が学費を貸与する代わりに、『卒業後に指定された地域・病院で一定期間（通常9年間）医師として勤務する』義務（義務年数）が発生します。",
  },
  {
    q: "返還不要の奨学金が充実している大学はどこですか？",
    a: "国際医療福祉大学（医学部特待奨学生制度で最大1,400万円給付）、順天堂大学（東京都地域枠や特待枠で最大2,080万円免除）、日本医科大学、慶應義塾大学（起業家・研究医支援奨学金など）が代表的です。これらの大学では、返還不要の給付型支援が非常に手厚く用意されています。",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

const relatedArticles = [
  { href: "/column/gakuhi", title: "医学部の学費・費用を徹底比較：国公立と私立の比較", label: "大学選び" },
  { href: "/column/private-top5", title: "慶應・慈恵・順天堂など私立医学部トップ5の特徴と対策", label: "大学選び" },
  { href: "/universities/private", title: "私立医学部受験の合格戦略・受験校選定・対策大学一覧", label: "サービス案内" },
];

export const metadata = {
  title: "私立医学部の特待生・奨学金制度をフル活用して学費を2,000万円台に抑える戦略 | Medvance",
  description:
    "「私立は高くて受けられない」と諦めていませんか？順天堂、国際医療福祉、慈恵、日医などの特待生制度（最大2,000万円超減免）や都道府県地域枠の上手な活用法と、目標スコア・出願戦略を現役慶應医学部生が徹底解説。",
  alternates: {
    canonical: "/column/private-medical-scholarship",
  },
};

export default function PrivateMedicalScholarshipPage() {
  return (
    <div className="min-h-screen bg-white">
      <ColumnArticleSchemas slug="private-medical-scholarship" articleOnly />
      <script type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([faqSchema]) }}
      />
      
      {/* Header section */}
      <div style={{ backgroundColor: "#0c1a33" }} className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#c9922a" }}>
            大学選び・受験ファイナンス戦略
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-noto-serif)", lineHeight: 1.3 }}>
            私立医学部の特待生・奨学金制度をフル活用して学費を2,000万円台に抑える戦略
          </h1>
          <p className="text-sm md:text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.72)" }}>
            国公立医学部とほぼ同等の負担で私立に通う方法。最大2,000万円超の学費免除を獲得するための得点戦略。
          </p>
        </div>
      </div>

      {/* Intro section */}
      <div className="py-16 px-4" style={{ backgroundColor: "#f7f5f0" }}>
        <div className="max-w-3xl mx-auto">
          <div className="p-8 rounded-2xl bg-white mb-8 shadow-xs" style={{ border: "1px solid #e5e1d8" }}>
            <p className="text-sm leading-relaxed mb-4 text-gray-700">
              「私立医学部は6年間の学費が3,000万〜4,500万円かかるから、家計的に受験すらできない」——そう言って最初から志望校を国公立だけに絞り込み、厳しい戦いに追い込まれているご家庭が非常に多いのが現状です。
            </p>
            <p className="text-sm leading-relaxed mb-4 text-gray-700">
              しかし、近年の私立医学部は優秀な受験生を国公立から囲い込むために、**驚くほど大規模な「特待生減免」や「給付型奨学金（返還不要）」、そして「地域枠修学資金」を充実させています。** 
            </p>
            <p className="text-sm leading-relaxed text-gray-700 font-semibold" style={{ color: "#c9922a" }}>
              これらを賢く組み合わせて出願することで、実質的な自己負担を国公立医学部（6年間で約350万円）に極限まで近づけたり、2,000万円台に抑えたりして合格を勝ち取ることが十分に可能です。そのための具体的な獲得スキームと得点戦略を解説します。
            </p>
          </div>
          
          <h2 className="text-2xl font-bold mb-6" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>
            代表的な私立医学部「特待生・奨学金」一覧と実質負担
          </h2>
          <div className="overflow-x-auto rounded-2xl bg-white p-4 md:p-6 mb-10 shadow-xs border" style={{ borderColor: "#e5e1d8" }}>
            <table className="w-full min-w-[700px] border-collapse text-left text-xs md:text-sm">
              <thead>
                <tr className="border-b" style={{ borderColor: "#e5e1d8" }}>
                  <th className="py-3 px-4 font-bold" style={{ color: "#0c1a33" }}>大学名</th>
                  <th className="py-3 px-4 font-bold text-gray-500">主な制度内容</th>
                  <th className="py-3 px-4 font-bold text-gray-500">減免・給付額</th>
                  <th className="py-3 px-4 font-bold" style={{ color: "#c9922a" }}>6年間の実質負担額</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr>
                  <td className="py-4 px-4 font-bold">順天堂大学</td>
                  <td className="py-4 px-4">一般選抜S方式特待生・東京都地域枠</td>
                  <td className="py-4 px-4">最大 2,080万円免除（S方式）</td>
                  <td className="py-4 px-4 font-bold" style={{ color: "#c9922a" }}>約 200万〜1,000万円台</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-bold">国際医療福祉大学</td>
                  <td className="py-4 px-4">医学部特待奨学生制度（上位50名）</td>
                  <td className="py-4 px-4">最大 1,400万円給付（返還不要）</td>
                  <td className="py-4 px-4 font-bold" style={{ color: "#c9922a" }}>約 510万円 （国公立と同水準）</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-bold">東京慈恵会医科大学</td>
                  <td className="py-4 px-4">慈恵大学修学資金（成績優秀者貸与）</td>
                  <td className="py-4 px-4">授業料全額相当を貸与（返還免除あり）</td>
                  <td className="py-4 px-4 font-bold" style={{ color: "#c9922a" }}>約 1,000万〜1,500万円台</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-bold">日本医科大学</td>
                  <td className="py-4 px-4">特待生制度（入試成績上位者）</td>
                  <td className="py-4 px-4">最大 400万〜800万円免除</td>
                  <td className="py-4 px-4 font-bold" style={{ color: "#c9922a" }}>約 1,400万〜2,000万円台</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-bold">慶應義塾大学</td>
                  <td className="py-4 px-4">研究医支援・起業家奨学金など</td>
                  <td className="py-4 px-4">年間 100万〜200万円給付</td>
                  <td className="py-4 px-4 font-bold" style={{ color: "#c9922a" }}>約 1,000万〜1,600万円台</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Strategic points */}
      <div className="py-20 px-4 bg-white border-t border-b" style={{ borderColor: "#e5e1d8" }}>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>
            私立特待・減免を『確実に獲得する』ための3大受験戦略
          </h2>
          
          <div className="space-y-8">
            <div className="p-6 rounded-2xl bg-[#f7f5f0]" style={{ border: "1px solid #e5e1d8" }}>
              <h3 className="font-bold text-base mb-3" style={{ color: "#0c1a33" }}>1. 共通テスト利用・併用入試のフル活用</h3>
              <p className="text-xs md:text-sm leading-relaxed text-gray-600 mb-4">
                一般入試だけでなく、共通テスト利用入試（あるいは共通テスト併用入試）の方が、各大学で募集される「特待生枠」が広く設定されているケースが多いです。国公立本命の受験生であれば、共通テストで88%以上のハイスコアを取り切ることで、一次・二次の学力負担を大幅に抑えて特待合格をかっさらっていくことが可能です。
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#f7f5f0]" style={{ border: "1px solid #e5e1d8" }}>
              <h3 className="font-bold text-base mb-3" style={{ color: "#0c1a33" }}>2. 標準問題でのイージーミス（ケアレスミス）の完全撲滅</h3>
              <p className="text-xs md:text-sm leading-relaxed text-gray-600 mb-4">
                特待合格のために最難関の難問を解ける必要はありません（それは慶應などの一部最上位に限られます）。順天堂や昭和大などの特待枠を勝ち取るために必要なのは、**「配点された標準〜やや難問題をイージーミスなく100%取り切る正確性」**です。Medvanceでは、確認テストでの目標得点率を95%以上に設定し、計算ミスの癖を毎週厳格に洗い出す指導を行います。
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#f7f5f0]" style={{ border: "1px solid #e5e1d8" }}>
              <h3 className="font-bold text-base mb-3" style={{ color: "#0c1a33" }}>3. 二次試験（面接・小論文）での最高評価の獲得</h3>
              <p className="text-xs md:text-sm leading-relaxed text-gray-600 mb-4">
                特待の最終ジャッジには、一次試験の学科成績だけでなく、二次試験（面接での医師適性、志望理由書の論理性、小論文の出来栄え）が大きく影響します。学科でボーダー線上であっても、面接での受け答えが「将来の特待生にふさわしい」と採点官に評価されれば、一気に特待合格へスライドします。現役慶應医学部生による本気の面接・志望理由添削がここで決定的な差を生み出します。
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Accordion Section */}
      <div className="py-16 px-4" style={{ backgroundColor: "#f7f5f0" }}>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-8" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>
            奨学金・特待生制度に関するよくある質問
          </h2>
          <div className="space-y-4 mb-12">
            {faqItems.map((faq, i) => (
              <details
                key={i}
                className="rounded-xl overflow-hidden group"
                style={{ border: "1px solid #e5e1d8" }}
              >
                <summary
                  className="flex items-center justify-between px-6 py-5 cursor-pointer font-semibold text-sm select-none list-none bg-white"
                  style={{ color: "#0c1a33" }}
                >
                  <span>Q. {faq.q}</span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 flex-shrink-0 ml-4" style={{ color: "#c9922a" }}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="m19 9-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-5 pt-1 text-sm leading-relaxed" style={{ color: "#4a5568", backgroundColor: "#faf9f6" }}>
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
          
          <h2 className="text-xl font-bold mb-6" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>
            関連記事
          </h2>
          <div className="grid md:grid-cols-3 gap-4 mb-12">
            {relatedArticles.map((article) => (
              <Link
                key={article.href}
                href={article.href}
                className="block p-5 rounded-xl bg-white hover:shadow-md transition-shadow"
                style={{ border: "1px solid #e5e1d8" }}
              >
                <span
                  className="inline-block text-xs font-semibold tracking-wide px-2 py-0.5 rounded-full mb-3"
                  style={{ backgroundColor: "#0c1a33", color: "#c9922a" }}
                >
                  {article.label}
                </span>
                <p className="text-sm font-bold leading-snug" style={{ color: "#0c1a33" }}>
                  {article.title}
                </p>
                <p className="text-xs font-semibold mt-3" style={{ color: "#c9922a" }}>
                  記事を読む →
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <ColumnCTA
        heading="私立医学部で『特待・減免』を掴み取るための出願ポートフォリオを作りませんか？"
        subtext="現在模試の偏差値、得意・不得意科目、およびご家庭の許容できる年間・総額学費の基準をお知らせください。最短かつ最も家計負担を抑える『特待勝ち抜けルート』を完全個別提案いたします。"
      />
    </div>
  );
}
