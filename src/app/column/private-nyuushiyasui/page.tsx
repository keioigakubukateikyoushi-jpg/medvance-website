import Link from "next/link";
import ColumnCTA from "@/components/ColumnCTA";
import { buildColumnPageSchemas } from "@/lib/seo";

const faqItems = [
  {
    q: "私立医学部の中で偏差値が低い大学はどこですか？",
    a: "河合塾・駿台の偏差値ランキングでは、東北医科薬科大学・北里大学・聖マリアンナ医科大学・川崎医科大学・帝京大学などが私立医学部の中では相対的に入りやすいとされています。ただし「私立医学部の中で」の話であり、いずれも偏差値60前後以上が目標水準です。",
  },
  {
    q: "入りやすい私立医学部に入るデメリットはありますか？",
    a: "国家試験合格率・立地・学費・病院実習の環境などで差があります。大学選びは難易度だけでなく、国試合格率・学費・卒後のキャリアも含めて比較することが重要です。入りやすいからといって一概に「悪い大学」ではなく、自分の状況に合った選択かどうかを考えましょう。",
  },
  {
    q: "私立医学部は何校受けるのが一般的ですか？",
    a: "一般的には5〜10校が目安です。私立医学部は1月下旬〜2月にかけて試験が集中するため、日程が重ならない範囲で複数受験します。合格可能性と志望度のバランスを考えながら、第一志望・相性校・安全校を組み合わせた受験戦略が重要です。",
  },
  {
    q: "私立医学部と国公立医学部、どちらを目指すべきか迷っています。",
    a: "学力・経済状況・残り受験期間によります。国公立は学費が約350万円と安いが難易度が高く、科目数も多い。私立は難易度は相対的に低いが学費が高額（約2,000〜4,500万円）。現役生・浪人1年目は国公立を視野に、複数浪人している場合は私立に絞るという選択もあります。まず自分の状況を踏まえて戦略を立てることが大切です。",
  },
];

const schemas = buildColumnPageSchemas({
  title: "私立医学部の入りやすい大学・偏差値が低い学校を徹底解説",
  description: "私立医学部の中で偏差値が比較的低く入りやすい大学を比較・解説。学費・国試合格率・試験の特徴まで含めて整理します。",
  slug: "private-nyuushiyasui",
  category: "大学選び",
  keywords: ["私立医学部 入りやすい", "私立医学部 偏差値低い", "私立医学部 難易度"],
  faqItems,
});

export const metadata = {
  title: "私立医学部の入りやすい大学・偏差値が低い学校を徹底解説 | Medvance",
  description:
    "私立医学部の中で偏差値が比較的低く入りやすい大学を比較。東北医科薬科大・北里・帝京・聖マリアンナなど各校の特徴・学費・国試合格率を解説します。",
  alternates: { canonical: "/column/private-nyuushiyasui" },
};

const schools = [
  {
    rank: "A",
    label: "比較的入りやすい",
    items: [
      {
        name: "東北医科薬科大学医学部",
        hensachi: "62〜65",
        gakuhi: "約2,300万円",
        kokusen: "91.0%",
        features: "2016年開設の新設医大。科目は英・数・理2科目。比較的標準的な問題が多く、基礎力完成で対応できる。地域枠（宮城・岩手）あり。",
      },
      {
        name: "北里大学医学部",
        hensachi: "63〜66",
        gakuhi: "約2,500万円",
        kokusen: "89.5%",
        features: "神奈川県相模原市。英・数・理2科目の標準的な試験。小問形式が多く、解ける問題を確実に取る戦略が有効。附属病院が充実。",
      },
      {
        name: "聖マリアンナ医科大学",
        hensachi: "62〜65",
        gakuhi: "約3,200万円",
        kokusen: "88.7%",
        features: "川崎市。特定の価値観（カトリック精神）に基づく教育。面接のウェイトが比較的高い。学費がやや高めだが難易度は私立の中では低め。",
      },
      {
        name: "帝京大学医学部",
        hensachi: "60〜64",
        gakuhi: "約3,500万円",
        kokusen: "86.3%",
        features: "独自の4教科入試（英・数・国語・理1科目）。国語が課されるのが特徴。国語が得意な受験生には向いている。受験者数が多く、倍率が高い年もある。",
      },
    ],
  },
  {
    rank: "B",
    label: "中程度の難易度",
    items: [
      {
        name: "昭和大学医学部",
        hensachi: "65〜68",
        gakuhi: "約2,600万円",
        kokusen: "91.4%",
        features: "東京・品川区。問題は標準的で基礎の完成度が問われる。1次試験は選択式が中心。国試合格率が高く、教育の質が安定している。",
      },
      {
        name: "東京医科大学",
        hensachi: "65〜68",
        gakuhi: "約2,000万円",
        kokusen: "90.2%",
        features: "新宿区。私立の中では学費が比較的安い。入試は思考力重視の傾向。選択問題と記述問題が混在。立地のよさと学費のバランスが高評価。",
      },
      {
        name: "東海大学医学部",
        hensachi: "63〜67",
        gakuhi: "約2,500万円",
        kokusen: "87.6%",
        features: "神奈川県伊勢原市（キャンパス）。英・数・理2科目。比較的解きやすい問題構成で、時間配分さえ守れば得点しやすい。",
      },
    ],
  },
];

const relatedArticles = [
  { href: "/column/gakuhi", title: "医学部の学費・費用を徹底比較", label: "大学選び" },
  { href: "/column/shigaku-vs-kokuritsu", title: "私立医学部と国公立医学部、どちらを目指すべきか", label: "受験戦略" },
  { href: "/column/hensachi", title: "医学部合格に必要な偏差値は？現実的な目標設定", label: "受験情報" },
  { href: "/column/private-top5", title: "私立医学部トップ5の特徴と対策", label: "大学選び" },
];

export default function PrivateNyuushiyasuiPage() {
  return (
    <>
      {schemas.map((s, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
      ))}
      <div className="min-h-screen bg-white">
        {/* Hero */}
        <div style={{ backgroundColor: "#0c1a33" }} className="py-20 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#c9922a" }}>大学選び</p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-noto-serif)" }}>
              私立医学部の入りやすい大学・偏差値が低い学校を徹底解説
            </h1>
            <p className="text-sm" style={{ color: "rgba(255,255,255,0.65)" }}>
              難易度・学費・国試合格率・試験の特徴まで比較して、受験校選びの判断材料を整理します
            </p>
          </div>
        </div>

        {/* Lead */}
        <div className="py-12 px-4 bg-white">
          <div className="max-w-3xl mx-auto column-body">
            <p>
              「私立医学部の中でどこが入りやすいのか」は、受験生にとって最も重要な情報の一つです。ただし「入りやすい＝レベルが低い」という単純な話ではなく、
              試験形式・学費・国家試験合格率・立地など複数の軸で比較する必要があります。
            </p>
            <p>
              このページでは、私立医学部の中で偏差値が比較的低め・入りやすいとされる大学を整理し、それぞれの特徴と対策のポイントを解説します。
              受験校選びの参考にしてください。
            </p>
            <div className="rounded-2xl p-6 my-6" style={{ backgroundColor: "#fff8ec", border: "1px solid rgba(201,146,42,0.3)" }}>
              <p className="text-sm font-bold mb-2" style={{ color: "#c9922a" }}>前提として確認しておくこと</p>
              <p className="text-sm leading-relaxed" style={{ color: "#3d3d3d" }}>
                「私立医学部の中で入りやすい」と言っても、全国の難関大学・学部と比較すれば依然として高い水準が要求されます。
                目安として偏差値60〜68程度が求められるため、基礎力の完成が絶対条件です。
                「どこでもいいから入りたい」ではなく、「自分の実力と戦略に合った大学を選ぶ」という発想が重要です。
              </p>
            </div>
          </div>
        </div>

        {/* 比較表 */}
        {schools.map((group) => (
          <div key={group.rank} className="py-12 px-4" style={{ backgroundColor: group.rank === "A" ? "#f7f5f0" : "#ffffff" }}>
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-3 mb-8">
                <span
                  className="text-xs font-bold px-3 py-1 rounded-full"
                  style={{ backgroundColor: "#c9922a", color: "#fff" }}
                >
                  {group.label}
                </span>
                <h2 className="text-2xl font-bold" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>
                  {group.rank === "A" ? "比較的入りやすい私立医学部" : "中程度の難易度・コスパが高い私立医学部"}
                </h2>
              </div>
              <div className="space-y-5">
                {group.items.map((school) => (
                  <div
                    key={school.name}
                    className="rounded-2xl p-6 bg-white"
                    style={{ border: "1px solid #e5e1d8" }}
                  >
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                      <h3 className="text-lg font-bold" style={{ color: "#0c1a33" }}>{school.name}</h3>
                      <div className="flex flex-wrap gap-3 text-xs">
                        <span className="px-3 py-1 rounded-full font-semibold" style={{ backgroundColor: "#f7f5f0", color: "#0c1a33" }}>
                          偏差値 {school.hensachi}
                        </span>
                        <span className="px-3 py-1 rounded-full font-semibold" style={{ backgroundColor: "#fff8ec", color: "#c9922a" }}>
                          学費 {school.gakuhi}
                        </span>
                        <span className="px-3 py-1 rounded-full font-semibold" style={{ backgroundColor: "#f0fdf4", color: "#166534" }}>
                          国試合格率 {school.kokusen}
                        </span>
                      </div>
                    </div>
                    <p className="text-sm leading-relaxed" style={{ color: "#3d3d3d" }}>{school.features}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}

        {/* 選び方の視点 */}
        <div className="py-14 px-4" style={{ backgroundColor: "#f7f5f0" }}>
          <div className="max-w-3xl mx-auto column-body">
            <h2>入りやすい大学を選ぶ際に見るべき5つの視点</h2>
            <div className="space-y-5 mt-6">
              {[
                { num: "01", title: "国家試験合格率", body: "医師になるためには医師国家試験に合格する必要があります。大学の教育力・学習サポート体制の目安として、国試の合格率（特に新卒の合格率）を確認しましょう。85%以上が一つの目安です。" },
                { num: "02", title: "6年間の総学費", body: "私立医学部は約1,900万〜4,700万円と幅広い。「入りやすい」大学がすべて安いわけではなく、帝京・聖マリアンナは難易度は低めでも学費は高め。費用と難易度を両立した選択が重要です。" },
                { num: "03", title: "試験形式との相性", body: "帝京は国語が課される4科目入試、他は英・数・理2科目が標準。国語が得意か、理科2科目が得意かによって相性が変わります。問題の難易度と自分の得意科目を照合して選びましょう。" },
                { num: "04", title: "面接・小論文のウェイト", body: "大学によって面接や小論文の比重は大きく異なります。学力試験だけでなく、人物評価を重視する大学では面接・小論文対策も重要な差別化要因になります。" },
                { num: "05", title: "立地・病院実習環境", body: "6年間通うキャンパスの立地、附属病院の規模・実績は医師としての基礎を形成する重要な要素です。入学しやすさだけでなく、卒業後のキャリアも含めて検討しましょう。" },
              ].map((item) => (
                <div key={item.num} className="flex gap-5 p-5 rounded-2xl bg-white" style={{ border: "1px solid #e5e1d8" }}>
                  <span className="text-2xl font-bold flex-shrink-0" style={{ color: "#c9922a" }}>{item.num}</span>
                  <div>
                    <p className="font-bold text-sm mb-2" style={{ color: "#0c1a33" }}>{item.title}</p>
                    <p className="text-sm leading-relaxed" style={{ color: "#3d3d3d" }}>{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="py-14 px-4 bg-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-8" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>よくある質問</h2>
            <div className="space-y-4">
              {faqItems.map((faq, i) => (
                <details key={i} className="rounded-xl overflow-hidden" style={{ border: "1px solid #e5e1d8" }}>
                  <summary className="flex items-center justify-between px-6 py-5 cursor-pointer font-semibold text-sm select-none list-none bg-white" style={{ color: "#0c1a33" }}>
                    <span>Q. {faq.q}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 flex-shrink-0 ml-4" style={{ color: "#c9922a" }}><path strokeLinecap="round" strokeLinejoin="round" d="m19 9-7 7-7-7" /></svg>
                  </summary>
                  <div className="px-6 pb-5 pt-1 text-sm leading-relaxed" style={{ color: "#4a5568", backgroundColor: "#faf9f6" }}>{faq.a}</div>
                </details>
              ))}
            </div>

            <h2 className="text-xl font-bold mb-6 mt-12" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>関連記事</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {relatedArticles.map((article) => (
                <Link key={article.href} href={article.href} className="block p-5 rounded-xl bg-white hover:shadow-md transition-shadow" style={{ border: "1px solid #e5e1d8" }}>
                  <span className="inline-block text-xs font-semibold tracking-wide px-2 py-0.5 rounded-full mb-3" style={{ backgroundColor: "#0c1a33", color: "#c9922a" }}>{article.label}</span>
                  <p className="text-sm font-bold leading-snug" style={{ color: "#0c1a33" }}>{article.title}</p>
                  <p className="text-xs font-semibold mt-3" style={{ color: "#c9922a" }}>記事を読む →</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
        <ColumnCTA
          heading="志望校選びから一緒に考えます"
          subtext="どの大学を目指すべきか、自分の学力と残り期間から最適な受験戦略を30分で整理します。"
          source="column-private-nyuushiyasui"
        />
      </div>
    </>
  );
}
