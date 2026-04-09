import Link from "next/link";
import ColumnCTA from "@/components/ColumnCTA";
import ColumnJsonLd from "@/components/ColumnJsonLd";

const faqItems = [
  {
    q: "慶應附属校専門の家庭教師はどこで見つかりますか？",
    a: "慶應附属校のカリキュラムを実際に経験した家庭教師を探す場合、一般的な家庭教師紹介サービスでは対応が難しいことがあります。Medvanceは現役慶應医学部生が指導するため、附属校のカリキュラムや定期試験の傾向を熟知しています。まずは無料相談でご相談ください。",
  },
  {
    q: "慶應附属校の定期試験対策に家庭教師は必要ですか？",
    a: "必須ではありませんが、慶應附属校の試験は独自カリキュラムに基づいており、一般的な市販教材や予備校では対応しにくい場合があります。特に内部進学で医学部を目指す方や、成績を安定させたい方には、学校内部を知る家庭教師の個別指導が非常に効果的です。",
  },
  {
    q: "中学校（普通部・中等部）から始めた方が良いですか？",
    a: "早期スタートは大きなアドバンテージになります。中学での成績が内部進学の評定に使われる場合もあり、何より高校進学後の基礎力が大きく変わります。医学部内部進学を目標とする場合、中学生から対策を始めることを強くお勧めします。",
  },
  {
    q: "医学部以外の学部への内部進学サポートも対応していますか？",
    a: "Medvanceは医学部受験・医学部内部進学に特化したサービスです。医学部以外の学部への内部進学については、まずはご相談ください。定期試験対策・評定向上の指導自体は他学部志望の方にも対応可能な場合があります。",
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
  { href: "/column/keio-naibu-shikumi", title: "慶應義塾の内部進学の仕組みを解説｜評定・選考・医学部進学枠", label: "内部進学の仕組み" },
  { href: "/column/keio-naibu-seiseki", title: "慶應附属校の成績を上げて医学部内部進学へ｜科目別対策", label: "成績対策" },
  { href: "/column/keio-naibu-kateikyoushi", title: "慶應医学部への内部進学に家庭教師が最適な理由", label: "家庭教師" },
];

const affiliatedSchools = [
  {
    school: "慶應義塾高校",
    location: "東京都港区",
    notes: "男子校。医学部内部進学の主要ルート。理系科目の評定が特に重視される。",
  },
  {
    school: "慶應義塾女子高校",
    location: "東京都港区",
    notes: "女子校。医学部志望の女子生徒に実績あり。定期試験の難易度が高め。",
  },
  {
    school: "慶應義塾志木高校",
    location: "埼玉県志木市",
    notes: "男子校。自由な校風で自主性が問われる。評定管理に計画性が必要。",
  },
  {
    school: "慶應義塾湘南藤沢高等部（SFC）",
    location: "神奈川県藤沢市",
    notes: "男女共学。特色あるカリキュラム。医学部進学には高い評定水準が必要。",
  },
  {
    school: "慶應義塾普通部",
    location: "神奈川県横浜市",
    notes: "中学校。医学部内部進学を目指す場合、中学段階からの評定が重要になる。",
  },
  {
    school: "慶應義塾中等部",
    location: "東京都港区",
    notes: "中学校（男女）。早期スタートで高校進学後の基礎力が大きく変わる。",
  },
];

const serviceFeatures = [
  {
    title: "学校の教科書・プリントに完全対応",
    body: "慶應附属校は独自教材を使うことが多く、市販の参考書だけでは試験対策が不十分です。現役慶應医学部生が実際に使用した教材・傾向を熟知しており、学校の授業内容に沿った指導が可能です。",
  },
  {
    title: "定期試験前の集中対策",
    body: "試験の2〜3週間前から指導頻度を上げ、出題範囲に絞ったピンポイント対策を実施。「何を優先して覚えるか」「どこで点を稼ぐか」を先輩目線でアドバイスします。",
  },
  {
    title: "評定の見える化と管理",
    body: "各科目の現在の評定と目標値を整理し、内部進学に必要な水準への道筋を一緒に設計します。苦手科目を放置しないよう、定期的な評定チェックと修正を行います。",
  },
  {
    title: "医学部内部進学の選考対策まで対応",
    body: "評定向上だけでなく、医学部進学に必要な志望動機の整理・面接対策まで一貫してサポート。「医学部を目指す理由」を言語化し、選考に向けた準備を進めます。",
  },
];

export const metadata = {
  title: "慶應附属校の家庭教師おすすめ｜定期試験対策・評定向上・内部進学 | Medvance",
  description:
    "慶應附属校（義塾高校・女子高・志木・SFC・普通部・中等部）の家庭教師を探している方へ。定期試験対策・評定向上・医学部内部進学サポートまで現役慶應医学部生が完全1対1で指導。全国オンライン対応。",
  keywords: [
    "慶應附属校 家庭教師 おすすめ",
    "慶應義塾高校 家庭教師",
    "慶應 内部進学 家庭教師",
    "慶應附属校 定期試験 対策",
    "慶應 評定 上げる 家庭教師",
  ],
  alternates: {
    canonical: "/column/keio-fuzoku-kateikyoushi",
  },
};

export default function KeioFuzokuKateikyoushiPage() {
  return (
    <div className="min-h-screen bg-white">
      <ColumnJsonLd
        title="慶應附属校の家庭教師おすすめ｜定期試験対策・評定向上"
        description="慶應附属校（義塾高校・女子高・志木・SFC・普通部・中等部）の家庭教師を比較。定期試験対策・評定向上・内部進学サポートまで現役慶應医学部生が対応。"
        slug="keio-fuzoku-kateikyoushi"
        category="塾・指導"
        keywords={["慶應附属校 家庭教師 おすすめ", "慶應義塾高校 家庭教師", "慶應 内部進学 家庭教師"]}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div style={{ backgroundColor: "#0c1a33" }} className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#c9922a" }}>慶應附属校 家庭教師</p>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: "'Noto Serif JP', serif" }}>
            慶應附属校の家庭教師おすすめ<br />定期試験・評定向上・内部進学
          </h1>
          <p className="text-base" style={{ color: "rgba(255,255,255,0.65)" }}>
            慶應のカリキュラムを知り尽くした現役医学部生が、附属校生の成績向上を完全サポート
          </p>
        </div>
      </div>

      {/* INTRO */}
      <div className="py-16 px-4" style={{ backgroundColor: "#f7f5f0" }}>
        <div className="max-w-3xl mx-auto">
          <div className="p-8 rounded-2xl bg-white" style={{ border: "1px solid #e5e1d8" }}>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "#3d3d3d" }}>
              慶應義塾の附属校（高校・中学）は、独自のカリキュラムと高難度の定期試験が特徴です。一般的な家庭教師サービスや予備校では「学校の授業に合った対策」が難しいことが多く、結果として成績が伸びにくいケースが見られます。
            </p>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "#3d3d3d" }}>
              Medvanceでは、慶應義塾大学医学部の現役在籍生が指導を担当。慶應附属校の出身者も多く在籍しており、学校ごとの試験傾向・授業スタイル・評定の出し方を熟知しています。
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#3d3d3d" }}>
              定期試験対策から評定管理、医学部内部進学の選考対策まで、附属校生の目標に合わせた個別指導を提供します。
            </p>
          </div>
        </div>
      </div>

      {/* SUPPORTED SCHOOLS */}
      <div className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-2 text-center" style={{ color: "#0c1a33", fontFamily: "'Noto Serif JP', serif" }}>
            対応している慶應附属校
          </h2>
          <p className="text-sm text-center mb-10" style={{ color: "#6b7280" }}>
            各附属校の特徴に合わせた個別指導を提供します
          </p>
          <div className="grid md:grid-cols-2 gap-5">
            {affiliatedSchools.map((item, i) => (
              <div key={i} className="p-6 rounded-2xl" style={{ backgroundColor: "#f7f5f0", border: "1px solid #e5e1d8" }}>
                <p className="font-bold text-base mb-1" style={{ color: "#0c1a33" }}>{item.school}</p>
                <p className="text-xs mb-3" style={{ color: "#c9922a" }}>{item.location}</p>
                <p className="text-sm leading-relaxed" style={{ color: "#6b7280" }}>{item.notes}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* WHY MEDVANCE */}
      <div className="py-16 px-4" style={{ backgroundColor: "#f7f5f0" }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-2 text-center" style={{ color: "#0c1a33", fontFamily: "'Noto Serif JP', serif" }}>
            Medvanceが慶應附属校生に選ばれる理由
          </h2>
          <p className="text-sm text-center mb-10" style={{ color: "#6b7280" }}>
            附属校専門塾との違い、一般家庭教師との違い
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {serviceFeatures.map((item, i) => (
              <div key={i} className="p-6 rounded-2xl bg-white" style={{ border: "1px solid #e5e1d8" }}>
                <div className="flex items-center gap-2 mb-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white" style={{ backgroundColor: "#c9922a" }}>
                    {i + 1}
                  </span>
                  <p className="font-bold text-sm" style={{ color: "#0c1a33" }}>{item.title}</p>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: "#6b7280" }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* COMPARISON TABLE */}
      <div className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-2 text-center" style={{ color: "#0c1a33", fontFamily: "'Noto Serif JP', serif" }}>
            サービス比較
          </h2>
          <p className="text-sm text-center mb-10" style={{ color: "#6b7280" }}>
            慶應附属校向け指導サービスの主な違い
          </p>
          <div className="rounded-2xl overflow-hidden" style={{ border: "1px solid #e5e1d8" }}>
            <table className="w-full text-sm">
              <thead>
                <tr style={{ backgroundColor: "#0c1a33" }}>
                  <th className="px-5 py-4 text-left text-white font-semibold">比較項目</th>
                  <th className="px-5 py-4 text-center font-bold" style={{ color: "#c9922a" }}>Medvance</th>
                  <th className="px-5 py-4 text-center text-white font-semibold opacity-70">附属校特化型</th>
                  <th className="px-5 py-4 text-center text-white font-semibold opacity-70">一般家庭教師</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["附属校カリキュラム対応", "◎ 慶應出身者が指導", "◎ 対応", "△ 対応困難"],
                  ["医学部内部進学サポート", "◎ 選考対策まで対応", "△ 学科のみ", "× 非対応"],
                  ["面接・志望動機対策", "◎ 完全対応", "× 非対応", "× 非対応"],
                  ["指導者の属性", "現役慶應医学部生", "学生〜社会人", "大学生〜院生"],
                  ["全国オンライン対応", "◎ 全国対応", "△ 限定的", "◎ 対応"],
                  ["料金の透明性", "◎ 明確", "△ 不明瞭", "◎ 明確"],
                ].map(([item, medvance, special, general], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : ""} style={{ backgroundColor: i % 2 !== 0 ? "#f7f5f0" : undefined }}>
                    <td className="px-5 py-4 font-medium" style={{ color: "#3d3d3d" }}>{item}</td>
                    <td className="px-5 py-4 text-center font-semibold" style={{ color: "#c9922a" }}>{medvance}</td>
                    <td className="px-5 py-4 text-center" style={{ color: "#6b7280" }}>{special}</td>
                    <td className="px-5 py-4 text-center" style={{ color: "#6b7280" }}>{general}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs mt-3 text-center" style={{ color: "#9ca3af" }}>
            ※ 「附属校特化型」には OLAX など慶應附属校専門の家庭教師サービスを含みます。
          </p>
        </div>
      </div>

      {/* PRICING */}
      <div className="py-16 px-4" style={{ backgroundColor: "#f7f5f0" }}>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-2 text-center" style={{ color: "#0c1a33", fontFamily: "'Noto Serif JP', serif" }}>
            料金の目安
          </h2>
          <p className="text-sm text-center mb-10" style={{ color: "#6b7280" }}>
            契約縛りなし。無料相談後、ご希望に合わせてプランをご提案します
          </p>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              {
                plan: "定期試験対策プラン",
                freq: "月4〜8回",
                price: "月額 ¥48,000〜",
                desc: "定期試験前に集中指導。試験日程に合わせてコマ数を調整できます。",
              },
              {
                plan: "評定向上プラン",
                freq: "月8〜12回",
                price: "月額 ¥96,000〜",
                desc: "年間を通じて継続的に評定を管理。週次で進捗を確認します。",
                highlight: true,
              },
              {
                plan: "内部進学完全対策",
                freq: "月12回〜",
                price: "月額 ¥130,000〜",
                desc: "評定管理に加え、志望動機の整理・選考対策・面接練習まで対応。",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl"
                style={{
                  backgroundColor: item.highlight ? "#0c1a33" : "white",
                  border: item.highlight ? "none" : "1px solid #e5e1d8",
                }}
              >
                <p className="text-xs font-semibold mb-2" style={{ color: item.highlight ? "#c9922a" : "#c9922a" }}>{item.plan}</p>
                <p className="font-bold text-xl mb-1" style={{ color: item.highlight ? "#fff" : "#0c1a33" }}>{item.price}</p>
                <p className="text-xs mb-3" style={{ color: item.highlight ? "rgba(255,255,255,0.6)" : "#6b7280" }}>{item.freq}</p>
                <p className="text-sm leading-relaxed" style={{ color: item.highlight ? "rgba(255,255,255,0.75)" : "#6b7280" }}>{item.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-center mt-6" style={{ color: "#9ca3af" }}>
            ※ 上記は目安です。指導頻度・志望目標・現在の成績状況によって最適なプランをご提案します。
          </p>
        </div>
      </div>

      {/* FAQ */}
      <div className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-8" style={{ color: "#0c1a33", fontFamily: "'Noto Serif JP', serif" }}>よくある質問</h2>
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
        heading="慶應附属校の定期試験対策・内部進学はMedvanceへ"
        subtext="慶應のカリキュラムを知り尽くした現役医学部生が、評定向上から内部進学選考まで完全1対1でサポートします。"
      />
    </div>
  );
}
