import Link from "next/link";

export const metadata = {
  title: "医学部の学費・費用を徹底比較 | Medvance",
  description:
    "国公立・私立医学部の6年間の学費を徹底比較。奨学金・特待生制度や学費以外にかかる費用まで、医学部進学に必要なお金を整理します。",
};

const privateSchoolFees = [
  {
    category: "学費が比較的抑えられた大学",
    schools: [
      {
        name: "防衛医科大学校",
        total: "実質無償（給与支給）",
        annual: "−",
        note: "学生は「防衛省技官」として月給を受け取る。卒業後は自衛隊医官として一定期間勤務が必要。",
      },
      {
        name: "自治医科大学",
        total: "実質ほぼ無償",
        annual: "約200万円（貸与制）",
        note: "卒業後9年間の地域医療勤務で学費が免除される制度。実質的な負担は非常に少ない。",
      },
      {
        name: "産業医科大学",
        total: "約1,500万円",
        annual: "約250万円",
        note: "産業医として一定期間勤務すると学費の一部が免除される制度あり。",
      },
      {
        name: "順天堂大学",
        total: "約2,100万円",
        annual: "約350万円",
        note: "私立上位校の中では学費が低め。教育環境・国試合格率ともに高評価。",
      },
      {
        name: "東京慈恵会医科大学",
        total: "約2,100万円",
        annual: "約350万円",
        note: "都内立地で伝統校。特待生制度あり。",
      },
    ],
  },
  {
    category: "中程度の学費帯",
    schools: [
      {
        name: "昭和大学",
        total: "約2,200万円",
        annual: "約370万円",
        note: "特待生制度が充実。成績上位者は年間数百万円の減額対象になる場合がある。",
      },
      {
        name: "東京医科大学",
        total: "約2,200万円",
        annual: "約370万円",
        note: "都内立地。附属病院での実習環境が整備されている。",
      },
      {
        name: "日本医科大学",
        total: "約2,200万円",
        annual: "約370万円",
        note: "伝統的な私立医大。研究・臨床ともに評価が高い。",
      },
    ],
  },
  {
    category: "学費が高い大学",
    schools: [
      {
        name: "国際医療福祉大学",
        total: "約1,900万円",
        annual: "約310万円",
        note: "比較的新しい医学部だが国試合格率が高い。特待生制度あり。",
      },
      {
        name: "聖マリアンナ医科大学",
        total: "約3,400万円",
        annual: "約560万円",
        note: "6年間の総額は高めだが、奨学金制度が整備されている。",
      },
      {
        name: "北里大学（医学部）",
        total: "約3,600万円",
        annual: "約600万円",
        note: "施設・実習環境が充実。特待生制度あり。",
      },
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
        <div
          className="max-w-3xl mx-auto rounded-2xl p-8 text-center"
          style={{ backgroundColor: "#0c1a33" }}
        >
          <p
            className="text-sm font-semibold tracking-widest uppercase mb-3"
            style={{ color: "#c9922a" }}
          >
            Free Consultation
          </p>
          <h2
            className="text-xl font-bold text-white mb-3"
            style={{ fontFamily: "'Noto Serif JP', serif" }}
          >
            費用・受験校選びの相談もお気軽に
          </h2>
          <p
            className="text-sm mb-6"
            style={{ color: "rgba(255,255,255,0.65)" }}
          >
            学費や奨学金の疑問も含め、医学部進学のご相談に対応します。
          </p>
          <Link
            href="/contact"
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
