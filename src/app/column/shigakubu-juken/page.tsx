import Link from "next/link";
import ColumnCTA from "@/components/ColumnCTA";
import ColumnArticleSchemas from "@/components/ColumnArticleSchemas";
import { buildHowToSchema } from "@/lib/seo";

const faqItems = [
  {
    q: "歯学部の受験難易度は医学部と比べてどのくらい異なりますか？",
    a: "歯学部は医学部と比較すると偏差値的には広がりがあり、入りやすい大学もありますが、東京科学大学（旧：東京医科歯科大学）や東京歯科大学、昭和大学歯学部などのトップ校は依然として非常に高難度です。また、入試科目に数学IIIを必要としない私立大学があるなど、科目負担の面で医学部と大きく異なるため、戦略的な対策が重要です。",
  },
  {
    q: "国公立と私立の歯学部で学費はどのくらい差がありますか？",
    a: "国公立歯学部の学費は6年間で約350万円（文部科学省基準）と非常に安価ですが、私立歯学部は6年間で約2,500万〜3,500万円の学費がかかります。ただし、私立でも特待生制度（学費全額または一部免除）を設けている大学があり、成績優秀者であれば大幅に負担を減らすことが可能です。",
  },
  {
    q: "歯科医師国家試験の合格率で大学を選ぶべきですか？",
    a: "はい、極めて重要です。歯学部に入学しても、国家試験に合格できなければ歯科医師にはなれません。大学によって国家試験の合格率（新卒・既卒合算）には60%〜90%超と大きな開きがあります。合格実績が高く、留年対策などのサポートが手厚い大学を選ぶことが非常に安全です。",
  },
  {
    q: "推薦入試やAO入試（総合型選抜）の対策はどうすればいいですか？",
    a: "歯学部の推薦・総合型選抜では、評定平均の確保に加えて、面接での「なぜ医師ではなく歯科医師なのか」という明確な動機の提示、および医療系テーマの小論文が課されます。Medvanceでは、自己分析と志望理由書のブラッシュアップ、および小論文の個別添削指導を行い、推薦選抜の合格率を最大化します。",
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
  { href: "/column/igakubu-juku-osusume", title: "医学部・医療系受験の塾・予備校おすすめ比較【2026年版】", label: "塾選び" },
  { href: "/column/study-method", title: "医学部・難関医療系合格のための正しい勉強法", label: "勉強法" },
];

const roadmap = [
  {
    grade: "高校1年生〜2年生",
    icon: "基礎",
    focus: "英数の盤石な土台作り",
    body: "歯学部受験においても、英語と数学の早期完成が勝負を分けます。特に国公立志望は共通テストの負担が大きいため、高2終了時点で英数国は共通テスト同等の得点力が求められます。私立志望も、数IIIが必要ない場合であっても数I・II・A・Bの典型解法を完璧にしておくことで、理科や英語に時間を割く余裕が生まれます。",
    actions: ["英語の基礎長文・必須単語の完全習得", "数学I・II・A・Bの全範囲典型解法の網羅", "学校の定期テストで高評定（推薦・地域枠用）を維持"],
  },
  {
    grade: "高校3年生 春〜夏",
    icon: "応用",
    focus: "理科の完成と英語の速読強化",
    body: "夏休みの終了までに、選択理科（化学・物理・生物から1〜2科目）の教科書・標準問題集レベルを完全に完成させます。英語は長文の読むスピードを測る訓練を開始。多くの私立歯学部では英語が合否の決定打となるため、スピーディーかつ正確に処理できる記述・マーク双方の記述力を養います。",
    actions: ["夏休み終了までに選択理科の基礎〜標準を仕上げる", "英語の長文読解で時間配分を計る実戦演習", "AO・推薦志望者は志望理由書の初稿作成"],
  },
  {
    grade: "高校3年生 秋〜冬",
    icon: "実戦",
    focus: "過去問演習と小論文・面接の並行",
    body: "志望校の過去問（5〜10年分）を徹底的に解き込み、出題傾向（記述量、数学の難易度、英語の文量）を掴みます。これと並行して、面接で必ず問われる「なぜ歯科医師なのか」「どのような医療を行いたいか」の言語化を完了させます。小論文対策は週1〜2本のペースで書き、プロの添削を受けて構成力を整えます。",
    actions: ["志望校の過去問演習と弱点箇所の集中復習", "歯科医療関連のニュース、テーマに沿った小論文添削", "「歯科医師の動機」を一貫して話せる模擬面接練習"],
  },
  {
    grade: "浪人生・再受験生",
    icon: "逆転",
    focus: "前年失敗原因の分析と特定分野の穴埋め",
    body: "「前年と同じ失敗を繰り返さない」ことが最重要。私立歯学部トップ校や国公立を狙う場合、あと数点、十数点の不足がどこから生じたかを精密に特定します。特に計算ミスや長文の時間切れなど、自覚しにくい弱点を1対1指導で洗い出し、夏前までに全範囲の穴を塞ぐ徹底的なスケジュールを構築します。",
    actions: ["前年の入試結果・模試データからの弱点分析", "夏までに数学・理科の未完成分野のゼロ化", "早めの面接・小論文対策着手による二次試験の優位性確保"],
  },
];

const roadmapSchema = buildHowToSchema({
  name: "歯学部受験ロードマップ｜国公立・私立歯学部の合格ロードマップ",
  description: "国公立・私立歯学部の合格に向けて、高1から浪人生までの時期別の具体的なアクションプランを整理したロードマップ。",
  path: "/column/shigakubu-juken",
  steps: roadmap.map((r) => ({
    name: `${r.grade}｜${r.focus}`,
    text: `${r.body} 実践: ${r.actions.join("、")}`,
  })),
});

export const metadata = {
  title: "【歯学部受験】受かるには？難関を突破する合格ロードマップと対策戦略",
  description:
    "国公立・私立歯学部受験の合格ロードマップを解説。偏差値・難易度の比較、6年間の学費や歯科医師国家試験合格率の一覧、一般選抜・推薦（AO）対策からMedvanceの完全1対1指導の強みまで網羅。",
  alternates: {
    canonical: "/column/shigakubu-juken",
  },
};

export default function ShigakubuJukenPage() {
  return (
    <div className="min-h-screen bg-white">
      <ColumnArticleSchemas slug="shigakubu-juken" articleOnly />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([faqSchema, roadmapSchema]) }}
      />
      
      {/* Hero Section */}
      <div style={{ backgroundColor: "#0c1a33" }} className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(#c9922a_1px,transparent_1px)] [background-size:16px_16px]" />
        </div>
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#c9922a" }}>
            歯学部受験 特集
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight" style={{ fontFamily: "var(--font-noto-serif)" }}>
            歯学部受験の合格ロードマップ：<br className="hidden sm:inline" />国公立・私立トップ校対策と戦略的勉強法
          </h1>
          <p className="text-sm md:text-base max-w-2xl mx-auto leading-relaxed" style={{ color: "rgba(255,255,255,0.72)" }}>
            医学部受験とは異なる科目負担、高額な学費と国家試験合格率の関係、そして「歯科医師としての人間性」を問う推薦・二次試験対策まで、合格への最短アプローチを完全解説。
          </p>
        </div>
      </div>

      {/* Intro box */}
      <div className="py-16 px-4" style={{ backgroundColor: "#f7f5f0" }}>
        <div className="max-w-3xl mx-auto">
          <div className="p-8 rounded-2xl bg-white" style={{ border: "1px solid #e5e1d8" }}>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "#3d3d3d" }}>
              歯科医師を目指す「歯学部受験」は、近年、難関国公立や東京歯科大学、昭和大学などのトップ私立校を筆頭に非常に高レベルな争いが続いています。
            </p>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "#3d3d3d" }}>
              一方で、一般の医学部受験と比較すると「数IIIを必要としない入試方式」や「理科1科目での受験」が認められている大学も多く、現在の得意科目の傾向を正確に把握した上で**「戦略的な志望校選定」**を行えば、逆転合格の可能性が非常に高い分野でもあります。
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#3d3d3d" }}>
              本記事では、国公立・私立歯学部の難易度・学費の違い、合格者のスケジュール、面接・小論文でのアピール方法、そして失敗しない予備校・塾選びの基準まで網羅して解説します。
            </p>
          </div>
        </div>
      </div>

      {/* National vs Private comparison */}
      <div className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-10" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>
            国公立歯学部と私立歯学部の決定的な違い
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 rounded-2xl bg-white" style={{ border: "1px solid #e5e1d8", backgroundColor: "#fcfbf9" }}>
              <h3 className="text-lg font-bold mb-3 flex items-center gap-2" style={{ color: "#0c1a33" }}>
                <span className="w-1.5 h-6 inline-block" style={{ backgroundColor: "#c9922a" }} />
                国公立大学歯学部
              </h3>
              <p className="text-sm leading-relaxed text-gray-600 mb-4">
                東京科学大学（旧：東京医科歯科大学）、大阪大学、九州大学など全国に12校あります。学費が6年間で約350万円と極めてリーズナブルであるため、全国の優秀な層が集中します。
              </p>
              <ul className="text-xs space-y-2 text-gray-600 font-medium">
                <li>✔ 共通テストのボーダー目標は75%〜85%以上と非常に高い</li>
                <li>✔ 二次記述試験は英語、数学（数IIIを含む）、理科2科目が基本</li>
                <li>✔ 全教科のバランスの良さと記述論証の完成度が問われる</li>
              </ul>
            </div>
            
            <div className="p-6 rounded-2xl bg-white" style={{ border: "1px solid #e5e1d8", backgroundColor: "#fcfbf9" }}>
              <h3 className="text-lg font-bold mb-3 flex items-center gap-2" style={{ color: "#0c1a33" }}>
                <span className="w-1.5 h-6 inline-block" style={{ backgroundColor: "#0c1a33" }} />
                私立大学歯学部
              </h3>
              <p className="text-sm leading-relaxed text-gray-600 mb-4">
                東京歯科大学、昭和大学、日本大学など全国に17校あります。学費は6年間で2,500万〜3,500万円と高額ですが、入試科目を絞り込んで受験できるメリットがあります。
              </p>
              <ul className="text-xs space-y-2 text-gray-600 font-medium">
                <li>✔ 多くの大学で「英語・数学I/II/A/B・理科1科目」での受験が可能</li>
                <li>✔ 特待生制度（一般上位合格で学費半額・全額免除等）の活用が非常に有効</li>
                <li>✔ 大学ごとに歯科医師国家試験の合格実績に大幅な差がある</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Tuition and State Exam Table */}
      <div className="py-16 px-4" style={{ backgroundColor: "#f7f5f0" }}>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-3" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>
            主要大学の学費と歯科医師国家試験合格率
          </h2>
          <p className="text-xs text-center mb-8 text-gray-500">
            ※国家試験合格率は新卒合格率（各大学公式データ等に基づく参考数値）です。受験年度により変動します。
          </p>
          <div className="rounded-2xl overflow-hidden bg-white shadow-sm" style={{ border: "1px solid #e5e1d8" }}>
            <table className="w-full text-xs md:text-sm text-left">
              <thead>
                <tr style={{ backgroundColor: "#0c1a33" }}>
                  <th className="px-4 py-3 text-white font-semibold">大学名</th>
                  <th className="px-4 py-3 text-center text-white font-semibold">設立区分</th>
                  <th className="px-4 py-3 text-center text-white font-semibold">6年間学費目安</th>
                  <th className="px-4 py-3 text-center text-white font-semibold">新卒国試合格率</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["東京科学大学（旧医科歯科大）", "国立", "約350万円", "90%以上"],
                  ["大阪大学歯学部", "国立", "約350万円", "90%以上"],
                  ["東京歯科大学", "私立", "約3,200万円", "95%以上"],
                  ["昭和大学歯学部", "私立", "約2,700万円", "85%〜90%程度"],
                  ["日本大学歯学部", "私立", "約3,150万円", "80%〜85%程度"],
                  ["大阪歯科大学", "私立", "約3,200万円", "80%〜85%程度"],
                ].map(([name, type, fee, rate], idx) => (
                  <tr key={idx} style={{ backgroundColor: idx % 2 === 0 ? "#fff" : "#fcfbf9", borderColor: "#e5e1d8" }} className="border-b">
                    <td className="px-4 py-3 font-semibold text-gray-800">{name}</td>
                    <td className="px-4 py-3 text-center text-gray-600">{type}</td>
                    <td className="px-4 py-3 text-center font-bold" style={{ color: "#0c1a33" }}>{fee}</td>
                    <td className="px-4 py-3 text-center font-bold" style={{ color: "#c9922a" }}>{rate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 mt-2 text-center">※上記費用には、教材費・同窓会費などの諸会費が別途加算される場合があります。</p>
        </div>
      </div>

      {/* Grade-by-grade roadmap */}
      <div className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-10" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>
            歯学部合格への学年・時期別ロードマップ
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {roadmap.map((item, i) => (
              <div key={i} className="p-6 rounded-2xl bg-white" style={{ border: "1px solid #e5e1d8", backgroundColor: "#f7f5f0" }}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center text-white text-xs font-bold" style={{ backgroundColor: "#c9922a" }}>
                    {item.icon}
                  </div>
                  <div>
                    <p className="font-bold text-sm" style={{ color: "#0c1a33" }}>{item.grade}</p>
                    <p className="text-xs" style={{ color: "#c9922a" }}>{item.focus}</p>
                  </div>
                </div>
                <p className="text-sm leading-relaxed mb-4 text-gray-600">{item.body}</p>
                <ul className="space-y-1">
                  {item.actions.map((action, j) => (
                    <li key={j} className="flex items-start gap-2 text-xs font-semibold" style={{ color: "#0c1a33" }}>
                      <span style={{ color: "#c9922a" }}>→</span>
                      {action}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Common Fallacies */}
      <div className="py-16 px-4 bg-white border-t">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-4" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>
            歯学部受験で多くの受験生が陥る3つの落とし穴
          </h2>
          <p className="text-center text-sm mb-10 text-gray-500 max-w-xl mx-auto">
            医学部受験用の学習プランをそのまま盲目的に流用すると、非効率な結果を招くケースがあります。
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "数学IIIへの過度な執着",
                body: "私立歯学部の多くは「数学I・II・A・B」のみで受験が可能です。医学部受験のコースで言われるがまま数IIIの難問に莫大な時間を投資するより、英数I・IIの完成度を高め、選択理科の記述対策に時間を割り振る方が圧倒的に高得点を稼げます。",
              },
              {
                title: "「なぜ歯科医師か」の動機不足",
                body: "面接官は「医学部に届かなかったから歯学部を受けたのではないか」という点を厳しく見ています。「なぜ医師ではなく歯科医師なのか」「なぜこの大学の歯学部なのか」を一貫した自分の言葉で語れなければ、2次試験で大幅に減点されます。",
              },
              {
                title: "学費だけで大学を選んでしまう",
                body: "「少しでも学費が安いから」という理由だけで国家試験合格率が極端に低い大学に進学すると、高確率で留年や国試浪人を繰り返し、結果的に莫大な追加費用と歳月を無駄にします。合格実績と教育環境を総合的に精査する必要があります。",
              },
            ].map((item, i) => (
              <div key={i} className="p-6 rounded-2xl" style={{ backgroundColor: "#fcfbf9", border: "1px solid #e5e1d8" }}>
                <p className="font-bold text-sm mb-3" style={{ color: "#0c1a33" }}>落とし穴 {i + 1}. {item.title}</p>
                <p className="text-xs md:text-sm leading-relaxed text-gray-500">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Medvance */}
      <div className="py-16 px-4" style={{ backgroundColor: "#f7f5f0" }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-10" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>
            なぜMedvanceが歯学部受験合格に圧倒的に強いか
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "志望校・入試方式に特化した最短プログラム",
                body: "志望する歯学部の受験科目に合わせて、カリキュラムを個別にカスタマイズ。不要な数学IIIなどを除外し、配点割合の大きい英語や理科、記述数学の典型解法に指導リソースを完全集中させます。",
              },
              {
                title: "「歯科医師動機」を極める徹底的な面接添削",
                body: "「医師ではなく歯科医師である理由」を自己分析から徹底的に掘り下げます。医療問題小論文の指導と並行して、面接官を唸らせる圧倒的に説得力ある志望理由書と面接応答を1対1で仕上げます。",
              },
              {
                title: "現役医学部・歯学部合格トップ生のノウハウ",
                body: "東京科学大学（旧：東京医科歯科大）や慶應・慈恵などの難関を突破した超一流の講師陣が指導。実際の入試会場で何点必要か、どの問題が捨て問かなど、体験者ならではのリアルな合格のノウハウを伝授します。",
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
            歯学部受験に関するよくあるご質問
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

      <ColumnCTA
        heading="歯学部受験対策もMedvanceにお任せください"
        subtext="現状の科目ごとの実力や、志望する歯学部（国公立・私立）の特性に合わせた1対1の最短ルート学習戦略を構築。推薦入試の志望理由・面接対策から徹底サポートいたします。"
      />
    </div>
  );
}
