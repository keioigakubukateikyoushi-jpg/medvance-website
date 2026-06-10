import Link from "next/link";
import ColumnCTA from "@/components/ColumnCTA";
import ColumnArticleSchemas from "@/components/ColumnArticleSchemas";
import { buildHowToSchema } from "@/lib/seo";

const faqItems = [
  {
    q: "獣医学部の受験難易度は医学部と比べてどのくらい難しいですか？",
    a: "獣医学部は全国にわずか17校しかなく、定員が非常に少ないため（合計で約1,000人程度）、私立でも難易度は医学部中堅〜下位校に匹敵するか、それ以上の激戦になります。特に私立の日本獣医生命科学大学や麻布大学などの難関校は、偏差値60を超え、倍率も10倍〜20倍に達することが珍しくありません。国公立大は共通テストで8割以上の得点率が必須となる超難関です。",
  },
  {
    q: "私立獣医学部6年間の学費と、特待生制度について教えてください。",
    a: "私立獣医学部（6年制）の学費は6年間で約1,300万〜1,500万円です。国公立の約350万円と比べると高額ですが、私立医学部の約2,000万〜4,500万円に比べれば抑えられています。大学によっては一般入試の成績優秀者を対象に、初年度または6年間の学費を大幅に減免する特待生制度を設けています。",
  },
  {
    q: "獣医学部の入試科目の特徴は？数学IIIは必要ですか？",
    a: "国公立大学は2次試験で数学IIIを必須とすることが多いですが、私立獣医学部の多くは一般選抜で「数学I・II・A・B（数学IIIなし）」で受験可能です。理科は化学または生物から1科目選択が一般的です。科目の負担は少ないため、英語・数学I/II/A/B・理科1科目を徹底的かつ高精度に仕上げる必要があります。",
  },
  {
    q: "面接や小論文で問われる「獣医学特有のテーマ」とは何ですか？",
    a: "獣医学部の小論文や面接では、「動物愛護・福祉」「動物実験への考え方」「人獣共通感染症（ズーノーシス）」「ワンヘルス（人の健康、動物の健康、環境の健全性は一つという考え方）」など、獣医師としての社会的責任や倫理観を問うテーマが頻出します。単なる『動物が好きだから』という理由だけでは不合格になるため、専門知識に基づく論理的思考が必要です。",
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
  { href: "/column/mensetu-shoronbun-kateikyoushi", title: "医学部・理系二次の小論文・面接対策と家庭教師指導の強み", label: "二次対策" },
];

const roadmap = [
  {
    grade: "高校1年生〜2年生",
    icon: "基礎",
    focus: "英語・数学の基礎徹底と評定平均のキープ",
    body: "獣医学部受験は枠が小さいため、推薦入試（学校推薦型・総合型）の活用が非常に有効です。高1から高い評定平均（4.3以上目安）を維持し、英語と数学I・II・A・Bの教科書・基礎問題集レベルを完璧に仕上げましょう。英語は高2終了までに英検2級〜準1級を取得しておくと有利になります。",
    actions: ["学校の全教科の評定で高評価を狙い、推薦枠を意識する", "英単語・英文法の完全定着と、数学I・A・II・Bの典型解法の習得", "動物関連のニュースや生命倫理に関わる書籍を読み、視野を広げる"],
  },
  {
    grade: "高校3年生 春〜夏",
    icon: "応用",
    focus: "理科1科目（化学または生物）の完成と記述力向上",
    body: "私立は理科1科目ですが、難易度が高くミスが許されません。化学または生物を選択し、夏休み終了までに重要問題集レベルの典型例題を完璧に自力で解けるように仕上げます。数学は苦手分野の穴埋めを徹底。推薦入試の出願に向けて、志望理由書の自己分析を開始します。",
    actions: ["選択理科の基本〜標準レベルの徹底演習と暗記", "英語の長文読解で読むスピードを測定・強化", "推薦選抜に向けた志望理由書の下書きと担当講師による添削"],
  },
  {
    grade: "高校3年生 秋〜冬",
    icon: "実戦",
    focus: "徹底的な過去問演習と獣医医療小論文・面接対策",
    body: "過去問（5〜10年分）をやり込み、志望校特有の傾向（例えば日本獣医生命科学大の記述量、麻布大の応用計算など）を掴みます。これと並行して、面接・小論文対策として、動物倫理、感染症、獣医師の役割（伴侶動物・産業動物・公衆衛生）についての知識を整理し、模擬面接を重ねます。",
    actions: ["志望校の過去問演習と、時間内に解き切る時間配分演習", "「ワンヘルス」「人獣共通感染症」等の重要テーマに関する小論文の個別添削", "「なぜ獣医師なのか」について論理的かつ熱意を持って答える模擬面接"],
  },
  {
    grade: "浪人生・再受験生",
    icon: "逆転",
    focus: "苦手単元のゼロ化と1点の取りこぼしも防ぐ高精度化",
    body: "獣医学部は数点の差で合否が分かれる激戦です。前年度に届かなかった要因を徹底的に洗い出し、特に記述式テストでの途中過程の書き方、ケアレスミスの撲滅、計算速度の向上を図ります。個別指導による完全1対1の学習管理で、毎週の到達度チェックを繰り返し、上位合格圏への学力を築きます。",
    actions: ["前年度入試の不合格原因分析と苦手単元の完全補強", "標準〜発展レベルの問題を初見で正確に解き切る計算力トレーニング", "高い難度の私立・国公立過去問を用いた本番同様の演習"],
  },
];

const roadmapSchema = buildHowToSchema({
  name: "獣医学部受験ロードマップ｜国公立・私立獣医学部の合格ロードマップ",
  description: "獣医学部合格に向けて、高1から浪人生までの時期別の具体的なアクションプランを整理したロードマップ。",
  path: "/column/juigakubu-juken",
  steps: roadmap.map((r) => ({
    name: `${r.grade}｜${r.focus}`,
    text: `${r.body} 実践: ${r.actions.join("、")}`,
  })),
});

export const metadata = {
  title: "【獣医学部受験】受かるには？国公立・私立17校の難易度と合格ロードマップ",
  description:
    "全国17校のみの超激戦区・獣医学部受験を突破する合格戦略。麻布・日本獣医生命科学・北里など私立6校と国公立の偏差値・倍率・学費比較、数学III不要の科目対策、動物倫理を問う面接・小論文対策を解説。",
  alternates: {
    canonical: "/column/juigakubu-juken",
  },
};

export default function JuigakubuJukenPage() {
  return (
    <div className="min-h-screen bg-white">
      <ColumnArticleSchemas slug="juigakubu-juken" articleOnly />
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
            【獣医学部受験】受かるには？<br />国公立・私立17校の難易度比較と合格ロードマップ
          </h1>
          <p className="text-sm md:text-base leading-relaxed max-w-2xl mx-auto" style={{ color: "rgba(255,255,255,0.72)" }}>
            全国で17大学しか設置されていない超狭き門・獣医学部。日本獣医生命科学・麻布・北里などの私立大学や国公立大学を突破するための偏差値・学費比較、数学III不要の科目攻略法から、人獣共通感染症などの倫理二次の記述対策まで徹底解説。
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          
          {/* Section 1: Overview */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6 pb-2 border-b" style={{ color: "#0c1a33", borderColor: "#e5e1d8", fontFamily: "var(--font-noto-serif)" }}>
              獣医学部受験の現状と超高難度の理由
            </h2>
            <p className="text-sm md:text-base leading-relaxed text-gray-600 mb-4">
              獣医師養成課程（6年制）を持つ大学は、全国で国公立11校、私立6校の計17校しかありません。1学年の総定員数は約1,000名強と、医学部の約9,400名と比べて約10分の1の規模です。
            </p>
            <p className="text-sm md:text-base leading-relaxed text-gray-600 mb-6">
              この極端な定員の少なさにより、獣医学部受験の倍率は一般的に10倍〜20倍を超え、私立難関校の偏差値は医学部中堅・下位校に迫る極めて激しい競争状態が続いています。合格するためには、基礎科目の完璧な得点力はもちろん、二次試験の面接・小論文における獣医師としての「倫理観・専門理解」が不可欠です。
            </p>
          </div>

          {/* Section 2: Data Comparison Table */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6 pb-2 border-b" style={{ color: "#0c1a33", borderColor: "#e5e1d8", fontFamily: "var(--font-noto-serif)" }}>
              全国の私立獣医学部6校の学費・獣医師国家試験合格率一覧
            </h2>
            <div className="overflow-x-auto rounded-xl border border-gray-200">
              <table className="w-full text-left border-collapse min-w-[600px]">
                <thead>
                  <tr style={{ backgroundColor: "#0c1a33", color: "#white" }}>
                    <th className="p-4 text-xs md:text-sm font-bold text-white">大学名</th>
                    <th className="p-4 text-xs md:text-sm font-bold text-white">区分</th>
                    <th className="p-4 text-xs md:text-sm font-bold text-white">6年間の総額学費 (目安)</th>
                    <th className="p-4 text-xs md:text-sm font-bold text-white">第75回 新卒合格率</th>
                    <th className="p-4 text-xs md:text-sm font-bold text-white">入試の特徴（一般）</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 text-xs md:text-sm text-gray-600">
                  <tr className="hover:bg-gray-50">
                    <td className="p-4 font-bold text-gray-800">国公立大学 (11校平均)</td>
                    <td className="p-4">国公立</td>
                    <td className="p-4">約 350 万円</td>
                    <td className="p-4 font-semibold text-emerald-600">約 93.0%</td>
                    <td className="p-4">共通テスト＋2次（英数理）</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="p-4 font-bold text-gray-800">日本獣医生命科学大学 獣医学部</td>
                    <td className="p-4">私立</td>
                    <td className="p-4">約 1,490 万円</td>
                    <td className="p-4 font-semibold text-emerald-600">96.8%</td>
                    <td className="p-4">英語、数学(IIIなし)、理科1</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="p-4 font-bold text-gray-800">麻布大学 獣医学部</td>
                    <td className="p-4">私立</td>
                    <td className="p-4">約 1,380 万円</td>
                    <td className="p-4">89.4%</td>
                    <td className="p-4">英語、数学(IIIなし)、理科1</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="p-4 font-bold text-gray-800">北里大学 獣医学部</td>
                    <td className="p-4">私立</td>
                    <td className="p-4">約 1,420 万円</td>
                    <td className="p-4">88.5%</td>
                    <td className="p-4">英語、数学(IIIなし)、理科1</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="p-4 font-bold text-gray-800">日本大学 生物資源科学部 (獣医)</td>
                    <td className="p-4">私立</td>
                    <td className="p-4">約 1,400 万円</td>
                    <td className="p-4 font-semibold text-emerald-600">91.3%</td>
                    <td className="p-4">英語、数学(IIIなし)、理科1</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="p-4 font-bold text-gray-800">酪農学園大学 獣医学群</td>
                    <td className="p-4">私立</td>
                    <td className="p-4">約 1,350 万円</td>
                    <td className="p-4">85.0%</td>
                    <td className="p-4">英語、数学(IIIなし)、理科1</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="p-4 font-bold text-gray-800">岡山理科大学 獣医学部</td>
                    <td className="p-4">私立</td>
                    <td className="p-4">約 1,300 万円</td>
                    <td className="p-4">86.2%</td>
                    <td className="p-4">英語、数学(IIIなし)、理科1</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-400 mt-2">
              ※学費は目安です。合格率は農林水産省発表の第75回獣医師国家試験（2024年発表）の新卒合格率データに基づきます。
            </p>
          </div>

          {/* Section 3: Roadmap (Visual Blocks) */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6 pb-2 border-b" style={{ color: "#0c1a33", borderColor: "#e5e1d8", fontFamily: "var(--font-noto-serif)" }}>
              獣医学部合格への学年・時期別ロードマップ
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
              獣医学部受験の注意すべき2つの「盲点」
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: "私立一般入試の「超高倍率」とケアレスミスの致命傷",
                  body: "私立獣医は定員が各校80〜120名程度と極端に少なく、そこに全国から数千人の受験生が殺到するため、倍率が15倍を超えることも珍しくありません。合格最低点が高くなる傾向があり、基礎的な計算ミスや単語の記述ミス1つが即不合格に直結します。高精度な答案作成能力が求められます。",
                },
                {
                  title: "志望動機の「ペット愛」アピールだけでは落とされる",
                  body: "面接や小論文で最も多い失敗が「犬や猫が好きだから助けたい」という情緒的アピールのみで終始することです。現代の獣医師は、産業動物（牛・豚など）の安定供給や、人獣共通感染症の水際対策、公衆衛生の守護者としての役割も持ちます。広い職能の理解を示さなければ、二次試験で高い評価は得られません。",
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
                なぜMedvanceが獣医学部受験に圧倒的に強いか
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    title: "1点の失点も許さない記述・計算プロセス指導",
                    body: "超高倍率の獣医学部受験を勝ち抜くため、完全1対1の個別指導で「なぜ間違えたか」「どうすれば防げたか」の分析を徹底。自己流の甘い自己採点を排し、合格最低点を確実に超える答案記述力を養います。",
                  },
                  {
                    title: "動物倫理・ワンヘルスに即した小論文・面接指導",
                    body: "伴侶動物、産業動物、公衆衛生、野生動物など多岐にわたる獣医の役割を理解し、「ワンヘルス」や「感染症対策」などの頻出テーマに対応できる論理的小論文の書き方、面接応答をプロがマンツーマンで添削します。",
                  },
                  {
                    title: "推薦枠（公募・指定校・AO）を活かす評定・出願対策",
                    body: "全体の枠が極小だからこそ、推薦枠の活用は必須。高1〜高2段階での徹底的な学校別評定対策と、他受験生と明確な差別化を図る志望理由書作成、化学・生物の基礎学力テスト対策を完全伴走します。",
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
                獣医学部受験に関するよくあるご質問
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
        heading="獣医学部受験対策もMedvanceにお任せください"
        subtext="定員の少ない超激戦区だからこそ、志望大学の出願方式に特化した戦略的1対1カリキュラムが必要です。私立・国公立対策から、推薦・小論文・面接指導まで完全並行でサポートいたします。"
      />
    </div>
  );
}
