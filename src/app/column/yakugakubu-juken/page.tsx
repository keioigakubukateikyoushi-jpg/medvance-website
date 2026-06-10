import Link from "next/link";
import ColumnCTA from "@/components/ColumnCTA";
import ColumnArticleSchemas from "@/components/ColumnArticleSchemas";
import { buildHowToSchema } from "@/lib/seo";

const faqItems = [
  {
    q: "薬学部の受験科目は医学部と比べてどう違いますか？",
    a: "国公立薬学部は共通テスト＋2次記述（英・数III含む・理科）が必要ですが、私立薬学部の多くは「数学IIIを必要としない」「理科は化学のみ、または化学・生物から1科目選択」といった軽量化された受験方式が主流です。数学IIIを回避できるため、英語と化学の2科目を早期に完成させることが短期合格の鍵となります。",
  },
  {
    q: "私立薬学部の6年間の学費はどのくらいですか？特待生制度はありますか？",
    a: "私立薬学部（6年制）の学費は6年間で約1,100万〜1,400万円が相場です。国公立の約350万円と比べると高額ですが、多くの私立薬学部（慶應、北里、東京理科、星薬科など）では、一般入試の上位合格者を対象に学費の全額または一部を免除する「特待生（奨学金）制度」を設けており、これを狙う対策も有効です。",
  },
  {
    q: "薬剤師国家試験の合格率は大学によってどのくらい異なりますか？",
    a: "新卒合格率で85%〜95%を超える大学がある一方、一部の大学では合格率が60%台に低迷しているケースがあります。また、見かけ上の合格率を上げるために「卒業留年」を多く出して国家試験の受験者数を絞り込んでいる大学もあるため、入学難易度だけでなく「ストレート合格率（留年せずに国家試験に合格する割合）」を確認して志望校を選ぶべきです。",
  },
  {
    q: "推薦入試や総合型選抜（旧AO）の対策は何をすべきですか？",
    a: "指定校推薦や公募推薦では、評定平均（一般的に4.0以上が目安）の確保と、化学の基礎学力テスト、小論文、面接が課されます。特に面接では「なぜ調剤薬局やドラッグストアではなく、研究者（または臨床薬剤師）を目指すのか」といった明確な職能理解とキャリアビジョンが重視されます。",
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
  { href: "/column/chemistry-study-method", title: "医学部・難関理系受験の化学勉強法｜基礎から合格レベルへの対策", label: "化学対策" },
];

const roadmap = [
  {
    grade: "高校1年生〜2年生",
    icon: "基礎",
    focus: "英語の早期完成と化学の基礎習得",
    body: "薬学部受験において、配点・重要度ともに最も高いのが「英語」と「化学」です。高2のうちに英語の文法・単語を固め、化学の「理論化学」の基本計算（物質量、酸塩基、酸化還元）を完全にマスターしておくことで、高3での演習効率が劇的に高まります。数学は数I・II・A・Bの典型問題を網羅しましょう。",
    actions: ["システム英単語などの単語帳を1冊マスター", "セミナー化学などの学校配布問題集の基本例題を解けるようにする", "学校の評定平均で4.2以上をキープ（推薦志望の場合）"],
  },
  {
    grade: "高校3年生 春〜夏",
    icon: "応用",
    focus: "有機化学・無機化学の徹底暗記と問題演習",
    body: "多くの薬学部入試において「有機化学」は非常に大きな配点を占めます。夏休みが終わるまでに、有機化学の構造決定（異性体や元素分析）や主要な反応経路を完璧に頭に叩き込みましょう。同時に、英語は長文の精読から速読へと移行し、共通テストレベルの文章をスムーズに読めるように訓練します。",
    actions: ["夏休み中に有機化学の全反応・重要物質を暗記", "重要問題集などのA問題を全範囲1周し、苦手分野を克服", "推薦・総合型選抜の志望理由書の骨子作成を開始"],
  },
  {
    grade: "高校3年生 秋〜冬",
    icon: "実戦",
    focus: "大学別過去問演習と時間配分の最適化",
    body: "志望校の過去問演習（最低5年分）を開始します。慶應薬は記述量が多く高難度、東京理科薬は計算量が多いなど、大学ごとの特色に合わせた戦い方を身につけます。面接がある推薦選抜志望者は、面接で必ず問われる「チーム医療における薬剤師の役割」などの医療倫理・職能理解を深める面接練習を行います。",
    actions: ["志望校の過去問演習と弱点分野のピンポイント復習", "化学の構造決定問題のスピードアップ演習", "医療・科学テーマの小論文記述練習と個別添削"],
  },
  {
    grade: "浪人生・再受験生",
    icon: "逆転",
    focus: "弱点科目の完全払拭と特待生合格への引き上げ",
    body: "私立薬学部の特待生枠（学費免除）を狙う場合、合格最低点ではなく「上位5%以内」の得点が求められます。そのためには弱点分野を一切残さない徹底した学習管理が必要です。化学の計算ミス防止、英語の文法問題での取りこぼしゼロなど、1対1指導で計算プロセスや論理構成を徹底的にチェックします。",
    actions: ["昨年度の不合格要因分析と化学未完成分野のゼロ化", "特待生枠獲得を見据えた過去問での合格最低点＋15%目標の演習", "週次テストによる計算力と記述精度の客観的測定"],
  },
];

const roadmapSchema = buildHowToSchema({
  name: "薬学部受験ロードマップ｜国公立・私立薬学部の合格ロードマップ",
  description: "薬学部合格に向けて、高1から浪人生までの時期別の具体的なアクションプランを整理したロードマップ。",
  path: "/column/yakugakubu-juken",
  steps: roadmap.map((r) => ({
    name: `${r.grade}｜${r.focus}`,
    text: `${r.body} 実践: ${r.actions.join("、")}`,
  })),
});

export const metadata = {
  title: "【薬学部受験】受かるには？私立・国公立薬学部の難易度・学費と合格ロードマップ",
  description:
    "国公立・私立薬学部（6年制）の合格ロードマップ。慶應・北里・東京理科などの難易度・偏差値・学費・薬剤師国試合格率の比較、数学IIIを必要としない私立の科目戦略から推薦・小論文対策まで完全解説。",
  alternates: {
    canonical: "/column/yakugakubu-juken",
  },
};

export default function YakugakubuJukenPage() {
  return (
    <div className="min-h-screen bg-white">
      <ColumnArticleSchemas slug="yakugakubu-juken" articleOnly />
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
            【薬学部受験】受かるには？<br />私立・国公立薬学部の合格ロードマップと対策戦略
          </h1>
          <p className="text-sm md:text-base leading-relaxed max-w-2xl mx-auto" style={{ color: "rgba(255,255,255,0.72)" }}>
            慶應薬・北里薬・東京理科薬などの難関私立から国公立まで、薬学部に現役・逆転合格するためのロードマップ。学費比較や国家試験合格率、数学III不要の科目攻略法を徹底解説。
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          
          {/* Section 1: Overview */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6 pb-2 border-b" style={{ color: "#0c1a33", borderColor: "#e5e1d8", fontFamily: "var(--font-noto-serif)" }}>
              薬学部受験の現状と難易度
            </h2>
            <p className="text-sm md:text-base leading-relaxed text-gray-600 mb-4">
              薬学部は、薬剤師国家試験の受験資格が得られる「6年制（臨床系薬学科）」と、創薬・製薬研究を目指す「4年制（創薬科学科）」に分かれています。受験生の多くは薬剤師を目指す6年制課程を選択します。
            </p>
            <p className="text-sm md:text-base leading-relaxed text-gray-600 mb-6">
              私立薬学部受験は、医学部受験に比べて「数学IIIが不要であること」「理科が1科目で済むこと」が多く、科目の負担が少ないため、早期に対策を絞り込めば大幅な逆転合格が可能です。しかし、慶應義塾大学や東京理科大学などの難関校は依然として偏差値60を超え、非常に高い競争率を誇ります。
            </p>
          </div>

          {/* Section 2: Data Comparison Table */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6 pb-2 border-b" style={{ color: "#0c1a33", borderColor: "#e5e1d8", fontFamily: "var(--font-noto-serif)" }}>
              主要大学の6年間学費・薬剤師国家試験新卒合格率比較
            </h2>
            <div className="overflow-x-auto rounded-xl border border-gray-200">
              <table className="w-full text-left border-collapse min-w-[600px]">
                <thead>
                  <tr style={{ backgroundColor: "#0c1a33", color: "#white" }}>
                    <th className="p-4 text-xs md:text-sm font-bold text-white">大学名</th>
                    <th className="p-4 text-xs md:text-sm font-bold text-white">区分</th>
                    <th className="p-4 text-xs md:text-sm font-bold text-white">6年間の総額学費 (目安)</th>
                    <th className="p-4 text-xs md:text-sm font-bold text-white">第109回 新卒合格率</th>
                    <th className="p-4 text-xs md:text-sm font-bold text-white">入試科目の特徴 (私立)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 text-xs md:text-sm text-gray-600">
                  <tr className="hover:bg-gray-50">
                    <td className="p-4 font-bold text-gray-800">国公立大学 (平均)</td>
                    <td className="p-4">国公立</td>
                    <td className="p-4">約 350 万円</td>
                    <td className="p-4 font-semibold text-emerald-600">約 90.0%</td>
                    <td className="p-4">共通テスト＋2次（英数理）</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="p-4 font-bold text-gray-800">慶應義塾大学 薬学部</td>
                    <td className="p-4">私立 (難関)</td>
                    <td className="p-4">約 1,410 万円</td>
                    <td className="p-4 font-semibold text-emerald-600">92.5%</td>
                    <td className="p-4">英語、数学(IIIなし)、化学</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="p-4 font-bold text-gray-800">東京理科大学 薬学部</td>
                    <td className="p-4">私立 (難関)</td>
                    <td className="p-4">約 1,180 万円</td>
                    <td className="p-4 font-semibold text-emerald-600">94.1%</td>
                    <td className="p-4">英語、数学(IIIなし)、化学</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="p-4 font-bold text-gray-800">北里大学 薬学部</td>
                    <td className="p-4">私立 (伝統)</td>
                    <td className="p-4">約 1,220 万円</td>
                    <td className="p-4">87.4%</td>
                    <td className="p-4">英語、数学(IIIなし)、化学</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="p-4 font-bold text-gray-800">星薬科大学 薬学部</td>
                    <td className="p-4">私立 (単科)</td>
                    <td className="p-4">約 1,200 万円</td>
                    <td className="p-4">89.2%</td>
                    <td className="p-4">英語、数学(IIIなし)、化学</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="p-4 font-bold text-gray-800">昭和大学 薬学部</td>
                    <td className="p-4">私立 (総合)</td>
                    <td className="p-4">約 1,190 万円</td>
                    <td className="p-4">88.0%</td>
                    <td className="p-4">英・数(IIIなし)・理(化/生)から選択</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-400 mt-2">
              ※学費は募集要項改定などにより変動する場合があります。国家試験合格率は厚生労働省発表の第109回薬剤師国家試験データに基づく新卒合格率です。
            </p>
          </div>

          {/* Section 3: Roadmap (Visual Blocks) */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6 pb-2 border-b" style={{ color: "#0c1a33", borderColor: "#e5e1d8", fontFamily: "var(--font-noto-serif)" }}>
              薬学部合格への学年・時期別ロードマップ
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
              薬学部選びの2つの「落とし穴」
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: "見かけ上の「国家試験合格率」に騙される",
                  body: "一部の私立大学では、薬剤師国家試験の合格率を高く見せるため、模擬試験の点数が足りない学生を大量に卒業延期（留年）させて受験人数をコントロールしています。真の教育力を測るには、6年間で留年せずに国家試験を通る「ストレート合格率」を見る必要があります。",
                },
                {
                  title: "不要な科目に学習時間を奪われる",
                  body: "私立薬学部の9割以上は数学IIIを課しません。それにもかかわらず、学校の授業に合わせて数学IIIや不要な物理の勉強に時間を取られ、英語と化学の基礎演習が手遅れになるケースが多発しています。入試方式を見極めた科目の絞り込みが最重要です。",
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
                なぜMedvanceが薬学部合格に圧倒的に強いか
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    title: "英語・化学に特化した超高密度カリキュラム",
                    body: "配点比率の高い英語と化学にリソースの8割を傾斜配分。数学IIIを完全に排除し、限られた時間の中で合格点を叩き出す「配点特化型」の指導プログラムを一人ひとりに作成します。",
                  },
                  {
                    title: "プロによる推薦入試・志望理由書の個別指導",
                    body: "薬学部は指定校推薦や公募推薦の枠が多く、ここを勝ち取ることが合格への近道です。「なぜ薬学なのか」「将来どんな薬剤師になりたいか」を論理的かつ情熱的に話せるように面接練習・志望理由書を仕上げます。",
                  },
                  {
                    title: "難関大学在籍の一流講師による1対1徹底指導",
                    body: "慶応薬や東京科学大、東大理三といった超難関校を突破した現役生・プロ講師が伴走。化学の複雑な構造決定や、薬学部特有の文章読解問題での「点数の稼ぎ方」を直接伝授します。",
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
                薬学部受験に関するよくあるご質問
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
        heading="薬学部受験対策もMedvanceにお任せください"
        subtext="現在の志望校や教科ごとの習熟度に合わせて、無駄のない1対1カリキュラムを作成。数学III不要の軽量ルートから、推薦入試の小論文・面接指導まで完全サポートいたします。"
      />
    </div>
  );
}
