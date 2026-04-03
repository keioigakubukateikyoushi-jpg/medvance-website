import Link from "next/link";
import ColumnCTA from "@/components/ColumnCTA";

const faqItems = [
  {
    q: "私立医学部の学費は6年間でいくらかかりますか？",
    a: "大学によって大きく異なります。国際医療福祉大学・順天堂大学・東京慈恵会医科大学などは約1,900〜2,100万円と比較的安く、帝京大学・聖マリアンナ・北里大学など高い大学では3,200〜3,600万円、川崎医科大学は約4,700万円に達します。国公立医学部は約350万円（6年間）と大きな差があります。",
  },
  {
    q: "医学部の学費を奨学金で賄えますか？",
    a: "一部は賄えますが、私立医学部の高額学費を全て奨学金で補うのは難しい場合がほとんどです。JASSO奨学金・大学独自の特待生制度・地域枠の活用を組み合わせることが現実的な方法です。特に特待生制度は入試の成績次第で年間数百万円の減額になる場合があります。",
  },
  {
    q: "医学部の地域枠はどんな制度ですか？",
    a: "卒業後に一定期間（多くは9年間）特定の都道府県内の指定病院で勤務することを条件に、学費の全額または一部が免除される制度です。経済的負担を大幅に軽減できる一方、卒後の勤務先に制約が生じるため、医師としてのキャリアプランと合わせて検討する必要があります。",
  },
  {
    q: "国公立医学部と私立医学部の学費差は結局いくらですか？",
    a: "6年間で比較すると、国公立が約350万円に対し、私立（平均的な大学）は約2,500〜3,000万円程度です。差額は2,000〜2,700万円程度になります。ただし私立でも特待生・地域枠・奨学金を活用することで実質的な差を縮めることは可能です。",
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
  { href: "/column/shigaku-vs-kokuritsu", title: "私立医学部と国公立医学部、どちらを目指すべきか", label: "大学選び" },
  { href: "/column/private-top5", title: "慶應・慈恵・順天堂など私立医学部トップ5の特徴と対策", label: "大学選び" },
  { href: "/column/hensachi", title: "医学部合格に必要な偏差値は？現実的な目標設定", label: "受験情報" },
];

export const metadata = {
  title: "医学部の学費・費用を徹底比較 | Medvance",
  description:
    "国公立・私立医学部の6年間の学費を徹底比較。奨学金・特待生制度や学費以外にかかる費用まで、医学部進学に必要なお金を整理します。",

  alternates: {
    canonical: "/column/gakuhi",
  },};

const privateSchoolFees = [
  {
    category: "ほぼ無償",
    schools: [
      { name: "防衛医科大学校", total: "実質無償（給与支給）", note: "在学中は月給が支給される。卒業後は自衛隊医官として一定期間の勤務義務あり。" },
      { name: "自治医科大学", total: "実質ほぼ無償", note: "6年間の学費は貸与制（約2,200万円）。卒業後9年間の地域医療勤務で全額免除。" },
      { name: "産業医科大学", total: "約1,500万円", note: "卒業後に産業医として一定期間勤務すると学費の一部が免除される制度あり。" },
    ],
  },
  {
    category: "学費が抑えられた大学",
    schools: [
      { name: "国際医療福祉大学", total: "約1,900万円", note: "2017年開設と比較的新しいが国試合格率が高い。私立全体でも最安水準。特待生制度あり。" },
      { name: "慶應義塾大学", total: "約2,100万円", note: "私立トップの難関校ながら学費は低水準。" },
      { name: "順天堂大学", total: "約2,100万円", note: "私立上位校の中でも学費は低め。教育環境・国試合格率ともに高評価。" },
      { name: "東京慈恵会医科大学", total: "約2,100万円", note: "都内立地の伝統校。特待生制度あり。" },
      { name: "杏林大学", total: "約2,200万円", note: "三鷹市立地。標準〜やや難レベルの出題で、基礎力の完成が合格の鍵。" },
      { name: "昭和大学", total: "約2,200万円", note: "特待生制度が充実。成績上位者は年間数百万円の減額対象になる場合がある。" },
    ],
  },
  {
    category: "中程度",
    schools: [
      { name: "日本医科大学", total: "約2,300万円", note: "伝統的な私立医大。記述問題が難しく、論理的思考力が求められる。" },
      { name: "東京医科大学", total: "約2,300万円", note: "都内立地。附属病院での実習環境が整備されている。" },
      { name: "藤田医科大学", total: "約2,300万円", note: "中部圏最大規模の医学部。比較的取り組みやすい問題構成。" },
      { name: "東邦大学", total: "約2,450万円", note: "都内に複数の附属病院を持ち、実習環境が充実。" },
      { name: "日本大学", total: "約2,500万円", note: "基礎〜標準問題が中心。スピードと正確性が求められる。" },
      { name: "東北医科薬科大学", total: "約2,500万円", note: "2016年新設。東北地方の医師人材育成を目的とした医学部。" },
      { name: "関西医科大学", total: "約2,600万円", note: "関西圏の有力私立。英語の読解力が特に重要。" },
      { name: "福岡大学", total: "約2,600万円", note: "九州圏。全科目バランス型の出題で失点しない完成度が求められる。" },
      { name: "大阪医科薬科大学", total: "約2,700万円", note: "関西圏の名門。英数理でそれぞれ高いレベルの実力が必要。" },
      { name: "兵庫医科大学", total: "約2,700万円", note: "標準レベルの出題。面接重視の選考スタイルが特徴。" },
      { name: "東海大学", total: "約2,700万円", note: "英語の長文読解と数学の計算力が重要。全科目バランスよく仕上げることが鍵。" },
      { name: "埼玉医科大学", total: "約2,700万円", note: "標準問題中心。地域医療への関心が面接で評価される。" },
      { name: "獨協医科大学", total: "約2,800万円", note: "英語・数学の基礎固めが合否を分ける。小論文も課される。" },
      { name: "愛知医科大学", total: "約2,800万円", note: "中部圏の私立医学部。基礎力の完成度が合否を直接左右する。" },
      { name: "金沢医科大学", total: "約2,800万円", note: "北陸唯一の私立医学部。標準レベルの問題が中心。" },
      { name: "近畿大学", total: "約2,800万円", note: "関西圏の有力私立医学部。近年難化傾向にある。" },
      { name: "久留米大学", total: "約2,900万円", note: "九州圏の私立医学部。英語の読解力と理科の基礎が合否を分ける。" },
    ],
  },
  {
    category: "高額",
    schools: [
      { name: "岩手医科大学", total: "約3,000万円", note: "東北地方の私立医学部。地域医療への志望動機が重視される。" },
      { name: "帝京大学", total: "約3,200万円", note: "マークシート中心の出題で受験しやすい一方、学費は高め。" },
      { name: "聖マリアンナ医科大学", total: "約3,400万円", note: "建学精神に基づいた面接が特徴。奨学金制度が整備されている。" },
      { name: "北里大学", total: "約3,600万円", note: "施設・実習環境が充実。特待生制度あり。" },
      { name: "東京女子医科大学", total: "約4,600万円", note: "女子医学部唯一の専門校。近年の大幅値上げで私立最高水準の学費に。" },
      { name: "川崎医科大学", total: "約4,700万円", note: "私立医学部の中で最も高額な部類。地域医療への貢献を重視した教育方針。" },
    ],
  },
];

const scholarships = [
  {
    name: "大学独自の特待生制度",
    body: "多くの私立医大が成績優秀者向けの特待生制度を設けており、入学試験の成績上位者は年間数十万〜数百万円の学費減額が受けられます。受験前に各大学の制度を確認しておきましょう。",
  },
  {
    name: "日本学生支援機構（JASSO）奨学金",
    body: "医学部生も利用可能。第一種（無利子）・第二種（有利子）があり、月額3〜12万円程度を借りることができます。ただし返還が必要なため、長期的な計画が重要です。",
  },
  {
    name: "地域枠・都道府県奨学金",
    body: "地方の医師不足解消を目的とした制度。一定期間（多くは9年間）その都道府県内の指定病院に勤務することで、奨学金が返還免除になります。卒業後の勤務先に制限はありますが、学費負担を大幅に減らせます。",
  },
  {
    name: "民間奨学金・財団奨学金",
    body: "各種財団が医学生向けの奨学金を提供しています。給付型（返還不要）のものもあり、積極的に活用したい制度です。大学の奨学金室や財団のウェブサイトで情報を収集しましょう。",
  },
];

const otherCosts = [
  { label: "受験費用", amount: "30万〜80万円", note: "受験料（1校3万〜5万円）＋宿泊交通費。複数校受験なら高額になる。" },
  { label: "予備校・塾代", amount: "100万〜300万円/年", note: "大手予備校の医学部コースは年間100万円超が多い。複数年になると大きな出費に。" },
  { label: "教科書・白衣・実験器具", amount: "50万〜100万円", note: "入学後に必要な医学書は1冊数千円〜数万円。総額では相当な金額になる。" },
  { label: "実習費・国家試験対策", amount: "50万〜100万円", note: "臨床実習・国家試験対策の予備校費用など、6年次にかかる費用。" },
  { label: "生活費（一人暮らしの場合）", amount: "100万〜150万円/年", note: "家賃・食費・交通費など。地方と都市圏で大きく異なる。" },
];

export default function GakuhiPage() {
  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div style={{ backgroundColor: "#0c1a33" }} className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p
            className="text-xs font-semibold tracking-widest uppercase mb-3"
            style={{ color: "#c9922a" }}
          >
            コラム
          </p>
          <h1
            className="text-3xl md:text-4xl font-bold text-white mb-4"
            style={{ fontFamily: "'Noto Serif JP', serif" }}
          >
            医学部の学費・費用を徹底比較
          </h1>
          <p className="text-base" style={{ color: "rgba(255,255,255,0.65)" }}>
            国公立・私立の差から奨学金制度まで、進学前に知っておくべきお金の話
          </p>
        </div>
      </div>

      <div className="py-16 px-4" style={{ backgroundColor: "#f7f5f0" }}>
        <div className="max-w-3xl mx-auto">
          <div
            className="p-8 rounded-2xl bg-white mb-8"
            style={{ border: "1px solid #e5e1d8" }}
          >
            <p
              className="text-sm leading-relaxed mb-4"
              style={{ color: "#3d3d3d" }}
            >
              医学部は他の学部と比べて学費が高額です。特に私立医学部は6年間で2,000万〜4,000万円以上かかることもあり、進学を検討するうえで費用の把握は欠かせません。
            </p>
            <p
              className="text-sm leading-relaxed mb-4"
              style={{ color: "#3d3d3d" }}
            >
              一方で、奨学金・特待生制度・地域枠などをうまく活用することで、実質的な負担を大幅に下げることができます。
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#3d3d3d" }}>
              このページでは、国公立・私立それぞれの学費の実態と、費用負担を軽減するための制度をまとめて解説します。
            </p>
          </div>
        </div>
      </div>

      <div className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-2xl font-bold mb-6"
            style={{ color: "#0c1a33", fontFamily: "'Noto Serif JP', serif" }}
          >
            国公立医学部の学費
          </h2>
          <div
            className="p-8 rounded-2xl"
            style={{ backgroundColor: "#f7f5f0", border: "1px solid #e5e1d8" }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div
                className="text-center px-6 py-4 rounded-xl"
                style={{ backgroundColor: "#0c1a33" }}
              >
                <p className="text-xs text-white mb-1">6年間合計</p>
                <p
                  className="text-2xl font-bold"
                  style={{ color: "#c9922a" }}
                >
                  約350万円
                </p>
              </div>
              <div>
                <p className="text-sm font-semibold mb-1" style={{ color: "#0c1a33" }}>
                  年間授業料：約53万円
                </p>
                <p className="text-xs" style={{ color: "#6b7280" }}>
                  国立大学の授業料は文部科学省の標準額として年間535,800円が設定されており、ほぼすべての国立大学が同額です。
                </p>
              </div>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: "#3d3d3d" }}>
              入学金（28万円程度）を含めても6年間の総額は約350万円。私立と比べると圧倒的に低コストで医師になれるため、国公立医学部は医師を目指す受験生にとって最も経済的な選択肢です。ただし入試難易度が高く、共通テストで85〜90%以上の得点が求められるのが一般的です。
            </p>
          </div>
        </div>
      </div>

      <div className="py-16 px-4" style={{ backgroundColor: "#f7f5f0" }}>
        <div className="max-w-4xl mx-auto">
          <h2
            className="text-2xl font-bold mb-4"
            style={{ color: "#0c1a33", fontFamily: "'Noto Serif JP', serif" }}
          >
            私立医学部の学費比較
          </h2>
          <p className="text-sm mb-10" style={{ color: "#6b7280" }}>
            6年間の総額（授業料・施設費・実習費などを含む概算）。年度によって変更される場合があります。
          </p>
          <div className="space-y-10">
            {privateSchoolFees.map((category, ci) => (
              <div key={ci}>
                <p
                  className="text-sm font-semibold mb-4 pb-2"
                  style={{ color: "#c9922a", borderBottom: "1px solid #e5e1d8" }}
                >
                  {category.category}
                </p>
                <div className="space-y-3">
                  {category.schools.map((school, si) => (
                    <div
                      key={si}
                      className="p-5 rounded-xl bg-white"
                      style={{ border: "1px solid #e5e1d8" }}
                    >
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                        <p
                          className="font-bold text-sm"
                          style={{ color: "#0c1a33" }}
                        >
                          {school.name}
                        </p>
                        <div className="text-right">
                          <span
                            className="text-xs font-semibold"
                            style={{ color: "#9ca3af" }}
                          >
                            6年間合計
                          </span>
                          <span
                            className="ml-2 font-bold text-base"
                            style={{ color: "#c9922a" }}
                          >
                            {school.total}
                          </span>
                        </div>
                      </div>
                      <p className="text-xs leading-relaxed" style={{ color: "#6b7280" }}>
                        {school.note}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <p className="text-xs mt-6 text-center" style={{ color: "#9ca3af" }}>
            上記は概算です。最新の学費情報は各大学の公式サイトまたは募集要項でご確認ください。
          </p>
        </div>
      </div>

      <div className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2
            className="text-2xl font-bold text-center mb-10"
            style={{ color: "#0c1a33", fontFamily: "'Noto Serif JP', serif" }}
          >
            学費を減らす：奨学金・特待生制度
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {scholarships.map((item, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl"
                style={{ backgroundColor: "#f7f5f0", border: "1px solid #e5e1d8" }}
              >
                <p
                  className="font-bold text-sm mb-3"
                  style={{ color: "#0c1a33" }}
                >
                  {item.name}
                </p>
                <p className="text-sm leading-relaxed" style={{ color: "#6b7280" }}>
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="py-16 px-4" style={{ backgroundColor: "#f7f5f0" }}>
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-2xl font-bold mb-4"
            style={{ color: "#0c1a33", fontFamily: "'Noto Serif JP', serif" }}
          >
            学費以外にかかる費用
          </h2>
          <p className="text-sm mb-8" style={{ color: "#6b7280" }}>
            授業料だけが医学部の費用ではありません。受験〜卒業まで、思いのほか多くの出費があります。
          </p>
          <div className="space-y-3">
            {otherCosts.map((item, i) => (
              <div
                key={i}
                className="flex gap-4 p-4 rounded-xl bg-white"
                style={{ border: "1px solid #e5e1d8" }}
              >
                <div
                  className="flex-shrink-0 text-xs font-bold pt-0.5"
                  style={{ color: "#c9922a", minWidth: "110px" }}
                >
                  {item.label}
                </div>
                <div>
                  <p
                    className="font-bold text-sm mb-1"
                    style={{ color: "#0c1a33" }}
                  >
                    {item.amount}
                  </p>
                  <p
                    className="text-xs leading-relaxed"
                    style={{ color: "#6b7280" }}
                  >
                    {item.note}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-2xl font-bold mb-6"
            style={{ color: "#0c1a33", fontFamily: "'Noto Serif JP', serif" }}
          >
            費用を踏まえた大学選びの考え方
          </h2>
          <div
            className="p-8 rounded-2xl"
            style={{ backgroundColor: "#f7f5f0", border: "1px solid #e5e1d8" }}
          >
            <p
              className="text-sm leading-relaxed mb-4"
              style={{ color: "#3d3d3d" }}
            >
              学費は受験校選びの重要な要素ですが、「安いから国公立一択」「高くても都内の私立に行きたい」どちらも正解になりえます。大切なのは、費用の現実を家族とオープンに話し合い、奨学金・特待生制度・地域枠なども含めた総合的な判断をすることです。
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#3d3d3d" }}>
              Medvanceでは費用面の相談も含め、受験校選びのアドバイスをしています。「学費の不安があって志望校が決まらない」という状況でもお気軽にご相談ください。
            </p>
          </div>
        </div>
      </div>

      <div className="py-16 px-4" style={{ backgroundColor: "#f7f5f0" }}>
        <div className="max-w-3xl mx-auto mb-12">
          <h2 className="text-2xl font-bold mb-8" style={{ color: "#0c1a33", fontFamily: "'Noto Serif JP', serif" }}>
            よくある質問
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
          <h2 className="text-xl font-bold mb-6" style={{ color: "#0c1a33", fontFamily: "'Noto Serif JP', serif" }}>
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
        heading="費用面の相談もMedvanceにお任せください"
        subtext="学費・奨学金・受験校選びの悩みも含め、医学部合格への道を一緒に考えます。"
      />
    </div>
  );
}
