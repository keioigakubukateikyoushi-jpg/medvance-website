import Link from "next/link";
import ColumnCTA from "@/components/ColumnCTA";
import ColumnArticleSchemas from "@/components/ColumnArticleSchemas";
import { buildHowToSchema } from "@/lib/seo";

const faqItems = [
  {
    q: "看護学部の入試科目は一般的にどのような構成ですか？数学IIIは必要ですか？",
    a: "ほとんどの看護学部で「数学IIIは不要」です。国公立大は共通テスト（5〜6教科）＋2次（英語、数学I・A、理科または国語）が必要ですが、私立大の多くは「英語・数学I・A・理科（生物基礎/化学基礎）または国語」から2〜3科目で受験できます。理科は生物基礎が選択可能であるケースが多く、科目負担を大きく抑えることが可能です。",
  },
  {
    q: "看護学部の二次試験（面接・小論文）の配点や重要性はどのくらいですか？",
    a: "非常に高いです。看護は人命と患者の心に直接寄り添う専門職であるため、筆記試験の点数が合格基準を超えていても、面接で「協調性がない」「適性（倫理観・体力・ストレス耐性）が不足している」と判断されれば不合格になります。小論文でも、近年の医療倫理や患者とのコミュニケーションをテーマにした出題が頻出するため、十分な対策が必要です。",
  },
  {
    q: "国公立と私立の看護学部で4年間の学費はどのくらい異なりますか？",
    a: "国公立看護学部は4年間で約250万円ですが、私立大学は約600万〜800万円（慶應や聖路加国際などは約650万〜700万円）かかります。ただし、多くの病院や地方自治体が「看護師奨学金（卒業後、指定の病院に一定期間勤務することで返済不要になる制度）」を設けており、実質的な自己負担を大幅に削減して進学することが可能です。",
  },
  {
    q: "社会人枠や公募推薦、総合型選抜（旧AO）の対策はどうすればよいですか？",
    a: "看護学部は現役生以外の「社会人受験（再受験）」が非常に多いのも特徴です。社会人枠や各種推薦入試では、国語や英語の基礎テスト、面接、小論文、活動報告書が重視されます。面接で「なぜ今、看護師を目指すのか」「これまでの社会人経験を看護にどう活かせるか」を一貫した論理でアピールする練習が合否を分けます。",
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
  { href: "/column/roadmap", title: "医学部受験ロードマップ｜いつから何をする？学年別の合格戦略", label: "受験戦略" },
  { href: "/column/igakubu-juku-osusume", title: "医学部・医療系受験 of 塾・予備校おすすめ比較【2026年版】", label: "塾選び" },
  { href: "/column/mensetu-shoronbun-kateikyoushi", title: "医学部・理系二次の小論文・面接対策と家庭教師指導の強み", label: "二次対策" },
];

const roadmap = [
  {
    grade: "高校1年生〜2年生",
    icon: "基礎",
    focus: "英語の文法固定と評定平均の最大化",
    body: "看護学部受験においても、最重要かつ配点の高い科目は「英語」です。高2のうちにシステム英単語や速読英単語の基礎をマスターし、英文法を一通り固めます。推薦入試（指定校・公募）を視野に、日頃の定期テスト対策を怠らず、評定平均を3.8〜4.0以上に引き上げておくことで、選択肢が大幅に広がります。",
    actions: ["英単語・基礎英文法の完全習得", "数学I・Aの教科書レベル典型問題の網羅", "学校のテストで高評定を狙い、推薦受験の資格を満たす"],
  },
  {
    grade: "高校3年生 春〜夏",
    icon: "応用",
    focus: "選択科目（国語または生物）の基礎完成と長文速読",
    body: "夏休み終了までに、入試で使う選択科目（国語の現代文、または生物/化学の基礎）を一通り完成させます。特に生物基礎は看護学部受験での選択者が多く、暗記だけで得点源にできるため、夏休みに徹底演習を行います。同時に、英語長文の速読と内容一致問題を速く解くトレーニングを開始します。",
    actions: ["現代文の読解テクニック学習、または生物基礎の全範囲暗記", "英語長文を時間を計って読み進める実戦演習", "推薦志望者は志望理由書（看護への熱意・動機）の構成案作成"],
  },
  {
    grade: "高校3年生 秋〜冬",
    icon: "実戦",
    focus: "志望校別過去問演習と、配点の高い面接・小論文の特訓",
    body: "過去問（5年分）を解き進めつつ、配点比率の高い面接・小論文対策にリソースを割きます。小論文では医療ニュース（少子高齢化、地域医療、終末期ケア、尊厳死など）についての考え方を学び、600〜800字で論理的に書く練習を行います。面接は、自己分析から「志望動機」と「求める看護師像」を明確にします。",
    actions: ["志望校の過去問演習と弱点分野の復習", "看護・医療テーマに沿った小論文の執筆とプロの添削", "「なぜ看護師なのか」「どのような看護を提供したいか」の模擬面接練習"],
  },
  {
    grade: "社会人・再受験生・浪人生",
    icon: "逆転",
    focus: "学力検査の穴埋めと、社会人経験を活かした面接対策",
    body: "社会人入試や一般入試で再受験を狙う場合、現役生よりも厳しい目が向けられることがあります。「なぜ今までの仕事を辞めて看護師を目指すのか」という動機が一過性のものではなく、現実的な覚悟に基づいていることを面接官に納得させる必要があります。1対1指導で面接のアピールストーリーを構築します。",
    actions: ["ブランクのある英語・数学・国語の基礎力を週次テストで復習", "面接で突っ込まれやすい「年齢・経歴・覚悟」への理路整然とした応答構築", "過去問を解き、一般入試で確実に合格ラインを超える安定した得点力の確保"],
  },
];

const roadmapSchema = buildHowToSchema({
  name: "看護学部受験ロードマップ｜国公立・私立看護学部の合格ロードマップ",
  description: "看護学部合格に向けて、高1から浪人生までの時期別の具体的なアクションプランを整理したロードマップ。",
  path: "/column/kangogakubu-juken",
  steps: roadmap.map((r) => ({
    name: `${r.grade}｜${r.focus}`,
    text: `${r.body} 実践: ${r.actions.join("、")}`,
  })),
});

export const metadata = {
  title: "【看護学部受験】受かるには？難関看護の難易度・科目対策と合格ロードマップ | Medvance",
  description:
    "国公立・難関私立看護学部受験の合格ロードマップ。慶應・聖路加などの難易度・学費比較、数学III不要の科目対策、合否を分ける面接（適性アピール）や医療テーマ小論文の記述対策を完全解説。",
  alternates: {
    canonical: "/column/kangogakubu-juken",
  },
};

export default function KangogakubuJukenPage() {
  return (
    <div className="min-h-screen bg-white">
      <ColumnArticleSchemas slug="kangogakubu-juken" articleOnly />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([faqSchema, roadmapSchema]) }}
      />
      
      {/* Hero Section */}
      <div className="relative py-20 px-4 overflow-hidden" style={{ backgroundColor: "#0c1a33" }}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(#c9922a_1px,transparent_1px)] [background-size:16px_16px]"></div>
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span
            className="inline-block text-xs font-bold tracking-widest px-3 py-1 rounded-full mb-4"
            style={{ backgroundColor: "rgba(201,146,42,0.15)", color: "#c9922a" }}
          >
            医療系・他学部対策
          </span>
          <h1
            className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight"
            style={{ fontFamily: "var(--font-noto-serif)" }}
          >
            【看護学部受験】受かるには？<br />難関看護の難易度・科目対策と合格ロードマップ
          </h1>
          <p className="text-sm md:text-base leading-relaxed max-w-2xl mx-auto" style={{ color: "rgba(255,255,255,0.72)" }}>
            慶應看護・聖路加国際などの難関私立や、国公立看護を突破するための偏差値・学費比較、数学III不要の科目対策から、適性をアピールする面接・小論文の記述対策まで徹底解説。
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          
          {/* Section 1: Overview */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6 pb-2 border-b" style={{ color: "#0c1a33", borderColor: "#e5e1d8", fontFamily: "var(--font-noto-serif)" }}>
              看護学部受験の難易度と重要対策科目
            </h2>
            <p className="text-sm md:text-base leading-relaxed text-gray-600 mb-4">
              近年の高度医療化に伴い、大学課程（4年制）で体系的に看護学を修める看護学部の重要性が高まっています。難易度は多様ですが、慶應義塾大学や聖路加国際大学、公立の看護単科大学などのトップ校は偏差値55〜60を超え、確実な科目対策が必要です。
            </p>
            <p className="text-sm md:text-base leading-relaxed text-gray-600 mb-6">
              看護学部は私立大の多くで「数学IIIが不要」であり、「英語・数学I/A・国語（現代文）または理科1科目」という負担の少ない受験が可能です。その代わり、二次試験の「面接」や「小論文」が極めて重視され、ここでのミスマッチ判断が不合格に直結するのが最大の特徴です。
            </p>
          </div>

          {/* Section 2: Data Comparison Table */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6 pb-2 border-b" style={{ color: "#0c1a33", borderColor: "#e5e1d8", fontFamily: "var(--font-noto-serif)" }}>
              主要大学の4年間学費・看護師国家試験合格率比較
            </h2>
            <div className="overflow-x-auto rounded-xl border border-gray-200">
              <table className="w-full text-left border-collapse min-w-[600px]">
                <thead>
                  <tr style={{ backgroundColor: "#0c1a33", color: "#white" }}>
                    <th className="p-4 text-xs md:text-sm font-bold text-white">大学名</th>
                    <th className="p-4 text-xs md:text-sm font-bold text-white">区分</th>
                    <th className="p-4 text-xs md:text-sm font-bold text-white">4年間の総額学費 (目安)</th>
                    <th className="p-4 text-xs md:text-sm font-bold text-white">第113回 合格率</th>
                    <th className="p-4 text-xs md:text-sm font-bold text-white">入試科目の特徴 (私立)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 text-xs md:text-sm text-gray-600">
                  <tr className="hover:bg-gray-50">
                    <td className="p-4 font-bold text-gray-800">国公立大学 (平均)</td>
                    <td className="p-4">国公立</td>
                    <td className="p-4">約 250 万円</td>
                    <td className="p-4 font-semibold text-emerald-600">約 95% 以上</td>
                    <td className="p-4">共通テスト＋2次（英数国面接等）</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="p-4 font-bold text-gray-800">慶應義塾大学 看護医療学部</td>
                    <td className="p-4">私立 (難関)</td>
                    <td className="p-4">約 680 万円</td>
                    <td className="p-4 font-semibold text-emerald-600">97.0%</td>
                    <td className="p-4">英・数(I/A/II/B)・化学・生物から2科目＋小論文</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="p-4 font-bold text-gray-800">聖路加国際大学 看護学部</td>
                    <td className="p-4">私立 (伝統)</td>
                    <td className="p-4">約 650 万円</td>
                    <td className="p-4 font-semibold text-emerald-600">98.2%</td>
                    <td className="p-4">英語、国語(現代文)または数学I・A、面接</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="p-4 font-bold text-gray-800">順天堂大学 医療看護学部</td>
                    <td className="p-4">私立 (総合)</td>
                    <td className="p-4">約 620 万円</td>
                    <td className="p-4 font-semibold text-emerald-600">99.1%</td>
                    <td className="p-4">英語、国語(現代文)または数学I・A、面接</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="p-4 font-bold text-gray-800">昭和大学 保健医療学部 (看護)</td>
                    <td className="p-4">私立 (医療系)</td>
                    <td className="p-4">約 600 万円</td>
                    <td className="p-4">95.4%</td>
                    <td className="p-4">英語、数学I・A、国語または理科1、面接</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-400 mt-2">
              ※学費は目安です。合格率は厚生労働省発表の第113回看護師国家試験（2024年発表）データに基づきます。
            </p>
          </div>

          {/* Section 3: Roadmap (Visual Blocks) */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6 pb-2 border-b" style={{ color: "#0c1a33", borderColor: "#e5e1d8", fontFamily: "var(--font-noto-serif)" }}>
              看護学部合格への学年・時期別ロードマップ
            </h2>
            <div className="space-y-6">
              {roadmap.map((item, index) => (
                <div
                  key={index}
                  className="p-6 rounded-2xl relative overflow-hidden"
                  style={{ backgroundColor: "#fcfbf9", border: "1px solid #e5e1d8" }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span
                      className="text-xs font-bold px-2 py-0.5 rounded"
                      style={{ backgroundColor: "#0c1a33", color: "#c9922a" }}
                    >
                      {item.icon}
                    </span>
                    <h3 className="font-bold text-base md:text-lg" style={{ color: "#0c1a33" }}>
                      {item.grade} ： {item.focus}
                    </h3>
                  </div>
                  <p className="text-xs md:text-sm leading-relaxed text-gray-600 mb-4">{item.body}</p>
                  <div className="bg-white p-4 rounded-xl border border-gray-100">
                    <p className="text-xs font-bold mb-2" style={{ color: "#c9922a" }}>実践アクション：</p>
                    <ul className="list-disc pl-5 space-y-1 text-xs text-gray-500">
                      {item.actions.map((act, i) => (
                        <li key={i}>{act}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section 4: Pitfalls */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6 pb-2 border-b" style={{ color: "#0c1a33", borderColor: "#e5e1d8", fontFamily: "var(--font-noto-serif)" }}>
              看護学部受験で陥りやすい2つの「盲点」
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: "学科の偏差値だけで選んで面接で不合格になる",
                  body: "看護学部入試は、他の理系学部と異なり人間性やコミュニケーション能力を徹底的に精査します。面接で『冷たい印象を受ける』『看護師の仕事の厳しさを理解していない（単なる白衣への憧れ等）』と判断されると、どれだけ学科試験の点数が良くても即不合格になります。徹底した面接ストーリー構築が重要です。",
                },
                {
                  title: "推薦枠（奨学金等含む）を調べずに一般入試だけで勝負する",
                  body: "多くの看護学部では推薦入試での募集枠が非常に多く設定されています。また、自治体や病院が提供する「返済不要の奨学金（指定病院勤務で免除）」の制度は大学ごとに異なるため、事前にこれらを調べて計画に入れることで、経済的かつ確実に合格するチャンスを最大化できます。",
                },
              ].map((item, i) => (
                <div key={i} className="p-6 rounded-2xl" style={{ backgroundColor: "#fcfbf9", border: "1px solid #e5e1d8" }}>
                  <p className="font-bold text-sm mb-3" style={{ color: "#0c1a33" }}>落とし穴 {i + 1}. {item.title}</p>
                  <p className="text-xs md:text-sm leading-relaxed text-gray-500">{item.body}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Why Medvance */}
          <div className="py-16 px-4" style={{ backgroundColor: "#f7f5f0" }}>
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-center mb-10" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>
                なぜMedvanceが看護学部受験に圧倒的に強いか
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    title: "面接官を納得させる圧倒的な志望理由・面接指導",
                    body: "「なぜ看護師なのか」を自己分析から引き出し、論理的に表現するストーリーを構築。また、医療倫理や現場の厳しさに即した実戦的な模擬面接を重ね、自信を持って本番に臨めるようにします。",
                  },
                  {
                    title: "医療現場に精通した講師陣による小論文指導",
                    body: "終末期医療、チーム医療、高齢化社会など、看護・医療系入試の小論文で課される重要トピックについて深い知識をレクチャー。論旨が明確で説得力のある記述方法を個別添削します。",
                  },
                  {
                    title: "現役慶応生・難関大生による完全1対1指導",
                    body: "慶応看護などの難関校を実際に突破した一流講師がパーソナルコーチとして伴走。不要な数II・IIIに時間を使わず、英語・数学I/A・国語・理科の基礎固めを確実にやり抜きます。",
                  },
                ].map((item, i) => (
                  <div key={i} className="p-6 rounded-2xl bg-white" style={{ border: "1px solid #e5e1d8" }}>
                    <div className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold mb-4" style={{ backgroundColor: "#c9922a" }}>
                      {i + 1}
                    </div>
                    <p className="font-bold text-sm mb-2" style={{ color: "#0c1a33" }}>{item.title}</p>
                    <p className="text-xs md:text-sm leading-relaxed text-gray-500">{item.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* FAQ */}
          <div className="py-16 px-4 bg-white">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold text-center mb-8" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>
                看護学部受験に関するよくあるご質問
              </h2>
              <div className="space-y-4 mb-12">
                {faqItems.map((faq, i) => (
                  <details
                    key={i}
                    className="rounded-xl overflow-hidden group"
                    style={{ border: "1px solid #e5e1d8" }}
                  >
                    <summary
                      className="flex items-center justify-between px-6 py-5 cursor-pointer font-semibold text-sm select-none list-none bg-white font-semibold"
                      style={{ color: "#0c1a33" }}
                    >
                      <span>Q. {faq.q}</span>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 flex-shrink-0 ml-4" style={{ color: "#c9922a" }}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="m19 9-7 7-7-7" />
                      </svg>
                    </summary>
                    <div className="px-6 pb-5 pt-1 text-xs md:text-sm leading-relaxed text-gray-500 bg-white" style={{ backgroundColor: "#faf9f6" }}>
                      {faq.a}
                    </div>
                  </details>
                ))}
              </div>

              <h2 className="text-xl font-bold mb-6" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>
                関連記事
              </h2>
              <div className="grid md:grid-cols-3 gap-4">
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
                    <p className="text-xs md:text-sm font-bold leading-snug text-gray-800">
                      {article.title}
                    </p>
                    <p className="text-[11px] font-bold mt-3" style={{ color: "#c9922a" }}>
                      記事を読む →
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>

      <ColumnCTA
        heading="看護学部受験対策もMedvanceにお任せください"
        subtext="数III不要の効率的な科目対策から、他受験生と差をつける実戦的な面接・小論文指導まで。一人ひとりの志望校特性に合わせた完全1対1カリキュラムで合格をサポートします。"
      />
    </div>
  );
}
