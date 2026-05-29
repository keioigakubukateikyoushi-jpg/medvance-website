import Link from "next/link";
import ColumnCTA from "@/components/ColumnCTA";
import ColumnArticleSchemas from "@/components/ColumnArticleSchemas";

const faqItems = [
  {
    q: "医学部受験の家庭教師と予備校、どちらが合格率が高いですか？",
    a: "一概にどちらが上とは言えませんが、「自分の弱点を個別に補強したい」「面接・小論文まで一括でみてほしい」受験生には家庭教師の方が向いています。予備校は体系的なカリキュラムが強み。多くの合格者は両方を併用しています。",
  },
  {
    q: "医学部受験の家庭教師を比較するときの最重要ポイントは何ですか？",
    a: "最重要は「指導者が医学部を実際に突破しているか」です。次に「面接・小論文まで対応しているか」「コーチング（学習管理）が含まれているか」を確認してください。料金の安さで選ぶと、医学部特有の対策が不十分で失敗するリスクがあります。",
  },
  {
    q: "Medvanceは他の医学部家庭教師サービスと何が違いますか？",
    a: "Medvanceは全講師が現役慶應医学部生で統一されている点が最大の特徴です。学科指導だけでなく面接・小論文・願書まで同じ講師が一貫して担当します。また、24時間質問対応・毎日の学習管理など、授業外のサポートが充実しています。",
  },
  {
    q: "医学部家庭教師の料金相場はいくらですか？",
    a: "現役医学部生の場合、1コマ（45分）7,500円（1回の授業90分 = 15,000円）が指導料の基準になります。Medvanceでは、授業料に加えて15分単位の学習計画管理などを行うコーチング（月額20,000円）を組み合わせたシンプルな構成になっており、週1回コース（月4回授業＋コーチング）で月額8万円、週2回コース（月8回授業＋コーチング）で月額14万円から受講いただけます。",
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
  { href: "/column/kateikyoushi", title: "医学部受験に家庭教師は効果的か？選び方と活用法", label: "家庭教師" },
  { href: "/column/keio-kateikyoushi", title: "慶應医学部の家庭教師｜現役慶應医学部生が1対1で指導", label: "慶應医学部" },
  { href: "/column/juku-erabi", title: "医学部受験の塾・予備校の選び方", label: "塾選び" },
];

const comparisonData = [
  {
    category: "指導者の質",
    medvance: "全員が現役慶應医学部生（統一基準）",
    others: "医学部生〜大学院生まで様々。所属大学・学年が混在することも",
    winner: "medvance",
  },
  {
    category: "面接・小論文対応",
    medvance: "毎回の授業で対応可能。模擬面接・添削・願書まで",
    others: "学科専門で面接・小論文は別途オプションのところが多い",
    winner: "medvance",
  },
  {
    category: "学習管理（コーチング）",
    medvance: "毎日の学習進捗管理・24時間質問対応込み",
    others: "授業だけのサービスが多く、授業外は自己管理",
    winner: "medvance",
  },
  {
    category: "対応地域",
    medvance: "全国オンライン対応＋関東圏対面",
    others: "対面専門（地方不可）か、逆にオンラインのみ",
    winner: "medvance",
  },
  {
    category: "料金透明性",
    medvance: "料金表を公開（週1回月8万円）",
    others: "「無料相談後にご提案」で非公開のサービスが多い",
    winner: "medvance",
  },
  {
    category: "慶應以外の医学部対応",
    medvance: "全国私立・国公立医学部に対応",
    others: "慶應附属校専門・特定大学のみのサービスもあり",
    winner: "medvance",
  },
];

const checkPoints = [
  {
    no: "01",
    title: "指導者は医学部を実際に突破した人間か",
    detail: "「難関理系卒業生」でも医学部入試の特性（面接・小論文・科目傾向）を熟知していない場合があります。現役医学部生または医学部卒が指導するサービスを選ぶことが大前提です。",
  },
  {
    no: "02",
    title: "面接・小論文・願書まで一貫して対応できるか",
    detail: "学科だけで合否が決まらないのが医学部入試の特徴。面接・小論文まで同じ先生が一貫して見てくれるかを必ず確認しましょう。別々の先生に頼むと「軸がバラバラ」になるリスクがあります。",
  },
  {
    no: "03",
    title: "授業外の学習管理があるか",
    detail: "週2〜3回の授業だけで成績は伸びません。「授業と授業の間の自習の質」が成否を分けます。毎日の学習計画・進捗管理・質問対応が含まれているかを確認してください。",
  },
  {
    no: "04",
    title: "体験指導または無料相談があるか",
    detail: "相性が非常に重要な家庭教師において、体験なしで契約するのはリスクが高いです。無料相談・体験授業を実施しているサービスを選びましょう。",
  },
  {
    no: "05",
    title: "志望校以外の併願校にも対応できるか",
    detail: "医学部受験は複数校受験が基本です。第一志望だけでなく、慈恵・順天堂・昭和など併願校の傾向にも対応できる講師かどうかを確認しましょう。",
  },
];

export const metadata = {
  title: "医学部受験の家庭教師を比較・選び方まとめ【2026年版】 | Medvance",
  description:
    "医学部受験向け家庭教師サービスを徹底比較。指導者の質・面接小論文対応・コーチング・料金で選ぶポイントを解説。現役慶應医学部生による完全1対1指導のMedvanceが選ばれる理由。",
  keywords: [
    "医学部受験 家庭教師 比較",
    "医学部 家庭教師 おすすめ",
    "医学部 家庭教師 選び方",
    "医学部受験 個別指導 比較",
    "医学部 家庭教師 ランキング",
  ],
  alternates: {
    canonical: "/column/igakubu-kateikyoushi-hikaku",
  },
};

export default function IgakubuKateikyoushiHikakuPage() {
  return (
    <div className="min-h-screen bg-white">
      <ColumnArticleSchemas slug="igakubu-kateikyoushi-hikaku" articleOnly />
      <script type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* HERO */}
      <div style={{ backgroundColor: "#0c1a33" }} className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#c9922a" }}>
            比較・選び方
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-noto-serif)" }}>
            医学部受験の家庭教師を比較して選ぶ方法
          </h1>
          <p className="text-base" style={{ color: "rgba(255,255,255,0.65)" }}>
            指導者の質・面接対応・料金・コーチングで正しく見極める
          </p>
        </div>
      </div>

      {/* INTRO */}
      <div className="py-16 px-4" style={{ backgroundColor: "#f7f5f0" }}>
        <div className="max-w-3xl mx-auto">
          <div className="p-8 rounded-2xl bg-white" style={{ border: "1px solid #e5e1d8" }}>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "#3d3d3d" }}>
              医学部受験の家庭教師サービスは、近年急増しています。「現役医学部生」「1対1指導」「合格保証」などをうたうサービスが乱立する中、どう選べばいいか迷う受験生・保護者は多いです。
            </p>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "#3d3d3d" }}>
              本記事では、医学部受験に特化した家庭教師サービスを選ぶための5つのチェックポイントと、サービスごとの特性の違いを解説します。
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#3d3d3d" }}>
              「料金が安いから」「有名だから」ではなく、あなたの志望校・現在地・弱点に合ったサービスを選ぶことが、最短で合格するための第一歩です。
            </p>
          </div>
        </div>
      </div>

      {/* CHECK POINTS */}
      <div className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-2 text-center" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>
            家庭教師サービスを選ぶ5つのチェックポイント
          </h2>
          <p className="text-sm text-center mb-10" style={{ color: "#6b7280" }}>
            この順番で確認すれば、後悔しない選択ができます
          </p>
          <div className="space-y-4">
            {checkPoints.map((item) => (
              <div key={item.no} className="p-6 rounded-2xl flex gap-5" style={{ backgroundColor: "#f7f5f0", border: "1px solid #e5e1d8" }}>
                <div className="text-2xl font-bold flex-shrink-0 w-10" style={{ color: "#c9922a", fontFamily: "var(--font-noto-serif)" }}>{item.no}</div>
                <div>
                  <p className="font-bold text-base mb-2" style={{ color: "#0c1a33" }}>{item.title}</p>
                  <p className="text-sm leading-relaxed" style={{ color: "#6b7280" }}>{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* COMPARISON TABLE */}
      <div className="py-16 px-4" style={{ backgroundColor: "#f7f5f0" }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-2 text-center" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>
            Medvanceと一般的な医学部家庭教師サービスの比較
          </h2>
          <p className="text-sm text-center mb-10" style={{ color: "#6b7280" }}>
            各項目を公平な視点で整理しました
          </p>
          <div className="rounded-2xl overflow-hidden" style={{ border: "1px solid #e5e1d8" }}>
            <table className="w-full text-sm">
              <thead>
                <tr style={{ backgroundColor: "#0c1a33" }}>
                  <th className="px-4 py-3 text-left font-semibold text-white">比較項目</th>
                  <th className="px-4 py-3 text-left font-semibold" style={{ color: "#c9922a" }}>Medvance</th>
                  <th className="px-4 py-3 text-left font-semibold text-white">一般的なサービス</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, i) => (
                  <tr key={i} style={{ backgroundColor: i % 2 === 0 ? "#fff" : "#faf9f6", borderTop: "1px solid #e5e1d8" }}>
                    <td className="px-4 py-4 font-semibold text-xs" style={{ color: "#0c1a33" }}>{row.category}</td>
                    <td className="px-4 py-4 text-xs leading-relaxed" style={{ color: "#0c1a33" }}>
                      <span className="inline-block mr-1" style={{ color: "#c9922a" }}>✓</span>{row.medvance}
                    </td>
                    <td className="px-4 py-4 text-xs leading-relaxed" style={{ color: "#6b7280" }}>{row.others}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* TYPES OF SERVICES */}
      <div className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-6" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>
            医学部家庭教師サービスの種類と特徴
          </h2>
          <div className="space-y-4">
            {[
              {
                type: "現役医学部生専門型（例：Medvance）",
                strong: "実際の合格者から最新の入試情報を得られる。面接・小論文まで対応できる。コーチング込みのサービスが多い。",
                weak: "講師数が限られることがある。費用は中〜高め。",
              },
              {
                type: "大手家庭教師会（例：東大家庭教師友の会）",
                strong: "講師数が多く、科目・地域を問わずマッチングしやすい。ブランド知名度が高い。",
                weak: "医学部専門の知識は講師によってばらつきがある。面接・小論文まで一貫して対応できるかは不明確。",
              },
              {
                type: "医学部専門塾の個別コース",
                strong: "医学部受験のカリキュラムが整備されている。合格実績が豊富。",
                weak: "費用が高額になりやすい。完全1対1ではなく少人数の場合も。",
              },
              {
                type: "個人契約型（マッチングサイト経由）",
                strong: "費用が比較的安い。好みの講師を直接選べる。",
                weak: "品質管理がされていない。トラブル時のサポートなし。コーチングなし。",
              },
              {
                type: "慶應系列校特化型サービス",
                strong: "慶應系列校からの内部進学推薦枠対策に特化している点。",
                weak: "対象生徒が慶應系列生のみに限定されやすく、他大学医学部や外部一般受験の広範な対策ノウハウが薄い。模擬面接・小論文の総合対策が不明確。",
              },
            ].map((item, i) => (
              <div key={i} className="p-6 rounded-2xl" style={{ backgroundColor: "#f7f5f0", border: "1px solid #e5e1d8" }}>
                <p className="font-bold text-sm mb-3" style={{ color: "#0c1a33" }}>{item.type}</p>
                <div className="space-y-2">
                  <div className="flex gap-2">
                    <span className="text-xs font-semibold flex-shrink-0" style={{ color: "#c9922a" }}>強み</span>
                    <p className="text-xs leading-relaxed" style={{ color: "#4a5568" }}>{item.strong}</p>
                  </div>
                  <div className="flex gap-2">
                    <span className="text-xs font-semibold flex-shrink-0" style={{ color: "#6b7280" }}>弱み</span>
                    <p className="text-xs leading-relaxed" style={{ color: "#6b7280" }}>{item.weak}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div className="py-16 px-4" style={{ backgroundColor: "#f7f5f0" }}>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-8" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>よくある質問</h2>
          <div className="space-y-4 mb-12">
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
          <h2 className="text-xl font-bold mb-6" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>関連記事</h2>
          <div className="grid md:grid-cols-3 gap-4">
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
        heading="Medvanceは医学部受験に特化した完全1対1指導の家庭教師サービスです"
        subtext="全講師が現役慶應医学部生。学科から面接・小論文まで一貫サポート。まずは無料相談でお気軽にご相談ください。"
      />
    </div>
  );
}
