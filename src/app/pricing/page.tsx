import Link from "next/link";
import { buildBreadcrumbSchema, buildFaqSchema, siteUrl } from "@/lib/seo";

export const metadata = {
  title: "医学部受験専門塾Medvanceの料金｜週1〜週5のプラン目安と始め方",
  description:
    "Medvanceの料金ページです。授業料、コーチング料、入塾金、週1〜週5の月額プラン目安、無料相談で決まることまでまとめています。",

  alternates: {
    canonical: "/pricing",
  },};

const plans = [
  { freq: "月4回", weekly: "週1回", lessons: 4, lessonFee: 60000, coaching: 20000, total: 80000, discount: 0 },
  { freq: "月8回", weekly: "週2回", lessons: 8, lessonFee: 120000, coaching: 20000, total: 140000, discount: 0 },
  { freq: "月12回", weekly: "週3回", lessons: 12, lessonFee: 180000, coaching: 20000, total: 200000, discount: 20000 },
  { freq: "月16回", weekly: "週4回", lessons: 16, lessonFee: 240000, coaching: 20000, total: 260000, discount: 20000 },
  { freq: "月20回", weekly: "週5回", lessons: 20, lessonFee: 300000, coaching: 20000, total: 320000, discount: 20000 },
];

const included = [
  "完全1対1の個別指導（対面・オンライン）",
  "オーダーメイド学習計画の作成・更新",
  "進捗管理・定期面談",
  "面接・小論文・願書対策",
  "保護者向け定期報告",
  "LINE・メールでの質問対応",
];

const fitGuides = [
  {
    title: "まず戦略を整えたい方",
    label: "月4回 / 週1回",
    body:
      "学校や仕事と両立しながら、まず勉強の軸と優先順位を整えたい方向けです。授業で弱点を補強しつつ、コーチングで日々の進め方を管理します。",
  },
  {
    title: "最も相談が多い開始パターン",
    label: "月8回 / 週2回",
    body:
      "高3・浪人・再受験の初期相談で最もイメージしやすい頻度です。学習内容の改善と演習量の確保を両立しやすく、標準的な立ち上がり方として使いやすい構成です。",
  },
  {
    title: "短期間で追い上げたい方",
    label: "月12回以上 / 週3回〜",
    body:
      "秋以降の追い上げや、科目数が多い受験生向けです。授業回数を増やしながら、面接・小論文も含めて密度高く進めたい場合に向いています。",
  },
];

const pricingFaqs = [
  {
    q: "どのプランから始める人が多いですか？",
    a: "もっとも相談が多いのは週2回です。ただし、現役生でまず勉強の軸を整えたい方は週1回、秋以降に追い上げたい方は週3回以上から始めるケースもあります。無料相談で、現状と残り期間に合わせて整理します。",
  },
  {
    q: "料金を見るときに何を重視すべきですか？",
    a: "授業回数だけでなく、学習計画・進捗管理・面接や小論文まで含めてどこまで伴走してもらえるかを見るのが重要です。医学部受験は授業だけで完結しないため、設計と管理の比重が大きくなります。",
  },
  {
    q: "無料相談ではどこまで決まりますか？",
    a: "志望校、現在地、使える時間、優先すべき科目、開始プランの目安まで整理できます。すぐ契約する必要はなく、相談内容をもとに持ち帰って検討していただけます。",
  },
];

const pricingUrl = `${siteUrl}/pricing`;

const offerCatalogSchema = {
  "@context": "https://schema.org",
  "@type": "OfferCatalog",
  name: "Medvance 月額プラン一覧",
  url: pricingUrl,
  itemListElement: plans.map((p, i) => ({
    "@type": "Offer",
    "@id": `${pricingUrl}#plan-${p.lessons}`,
    position: i + 1,
    name: `${p.weekly}プラン（月${p.lessons}回）`,
    description: `授業${p.lessons}回／月（1回あたり ¥${p.lessonFee / p.lessons}）と学習コーチング ¥${p.coaching}／月のセット。${p.discount > 0 ? `セット割 ¥${p.discount} 適用後の月額。` : ""}`,
    price: p.total,
    priceCurrency: "JPY",
    priceSpecification: {
      "@type": "UnitPriceSpecification",
      price: p.total,
      priceCurrency: "JPY",
      unitText: "MONTH",
      referenceQuantity: {
        "@type": "QuantitativeValue",
        value: p.lessons,
        unitText: "授業回",
      },
    },
    availability: "https://schema.org/InStock",
    category: "Subscription",
    seller: {
      "@type": "EducationalOrganization",
      "@id": `${siteUrl}/#organization`,
      name: "Medvance",
    },
    itemOffered: {
      "@type": "Service",
      name: "完全1対1の医学部受験個別指導",
      serviceType: "医学部受験個別指導",
      provider: {
        "@type": "EducationalOrganization",
        "@id": `${siteUrl}/#organization`,
      },
    },
    url: `${pricingUrl}#plan-${p.lessons}`,
  })),
};

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: "ホーム", url: "/" },
  { name: "コース・料金", url: "/pricing" },
]);

const pricingFaqSchema = buildFaqSchema(pricingFaqs);

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([offerCatalogSchema, breadcrumbSchema, pricingFaqSchema]),
        }}
      />
      <div style={{ backgroundColor: "#0c1a33" }} className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-noto-serif)" }}>
            料金について
          </h1>
          <p className="text-base" style={{ color: "rgba(255,255,255,0.65)" }}>
            授業だけでなく、学習計画と進捗管理まで含めて合格まで伴走します。
          </p>
        </div>
      </div>

      <div className="py-20 px-4" style={{ backgroundColor: "#f7f5f0" }}>
        <div className="max-w-3xl mx-auto">
          <div className="p-8 rounded-2xl bg-white" style={{ border: "1px solid #e5e1d8" }}>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "#3d3d3d" }}>
              塾選びでは、料金そのものより「その料金で何が含まれているか」を整理することが大切です。医学部受験は授業だけで完結せず、学習計画、進捗管理、面接・小論文、出願まで含めて全体設計が必要になります。
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#3d3d3d" }}>
              Medvanceでは、授業とコーチングを分けて考えず、合格まで必要なサポートを一つの流れとして提供しています。まずは費用感と、どのくらいの頻度から始めるのが現実的かを確認してみてください。
            </p>
          </div>
        </div>
      </div>

      <div className="py-20 px-4 bg-white">
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="p-8 rounded-2xl" style={{ backgroundColor: "#f7f5f0", border: "1px solid #e5e1d8" }}>
            <h2 className="text-xl font-bold mb-6" style={{ color: "#0c1a33" }}>基本料金</h2>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="p-5 rounded-xl bg-white text-center" style={{ border: "1px solid #e5e1d8" }}>
                <p className="text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: "#c9922a" }}>授業</p>
                <p className="text-3xl font-bold" style={{ color: "#0c1a33" }}>15,000<span className="text-base font-normal">円</span></p>
                <p className="text-xs mt-1" style={{ color: "#6b7280" }}>1コマ80分</p>
              </div>
              <div className="p-5 rounded-xl bg-white text-center" style={{ border: "1px solid #e5e1d8" }}>
                <p className="text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: "#c9922a" }}>入塾金</p>
                <p className="text-3xl font-bold" style={{ color: "#0c1a33" }}>20,000<span className="text-base font-normal">円</span></p>
                <p className="text-xs mt-1" style={{ color: "#6b7280" }}>初回のみ</p>
              </div>
            </div>
            <p className="text-xs leading-relaxed" style={{ color: "#6b7280" }}>
              コーチング（月2万円）は全プランに含まれます。学習計画の作成・進捗管理・相談対応を行います。
            </p>
          </div>

          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold" style={{ color: "#0c1a33" }}>月額プラン（授業＋コーチング）</h2>
              <span className="text-xs font-bold px-3 py-1.5 rounded-full" style={{ backgroundColor: "#fff0d6", color: "#c9922a", border: "1px solid #c9922a" }}>
                期間限定割引実施中
              </span>
            </div>
            <div className="space-y-3">
              {plans.map((plan, i) => {
                const discounted = plan.discount > 0;
                const finalTotal = plan.total - plan.discount;
                return (
                  <div
                    key={i}
                    className="relative rounded-xl overflow-hidden"
                    style={{
                      border: discounted ? "2px solid #c9922a" : "1px solid #e5e1d8",
                      backgroundColor: discounted ? "#fffbf4" : "#fff",
                    }}
                  >
                    {discounted && (
                      <div
                        className="absolute top-0 right-0 text-xs font-bold px-3 py-1 rounded-bl-xl"
                        style={{ backgroundColor: "#c9922a", color: "#fff" }}
                      >
                        今なら2万円引き
                      </div>
                    )}
                    <div className="flex items-center justify-between p-5">
                      <div className="flex items-center gap-4">
                        <div
                          className="w-14 h-14 rounded-full flex items-center justify-center text-white font-bold text-xs flex-shrink-0 text-center leading-tight"
                          style={{ backgroundColor: "#0c1a33" }}
                        >
                          {plan.weekly}
                        </div>
                        <div>
                          <p className="font-bold text-base" style={{ color: "#0c1a33" }}>{plan.freq}</p>
                          <p className="text-xs mt-0.5" style={{ color: "#6b7280" }}>
                            授業{plan.lessons}回（{plan.lessonFee.toLocaleString()}円）＋ コーチング（{plan.coaching.toLocaleString()}円）
                          </p>
                        </div>
                      </div>
                      <div className="text-right flex-shrink-0">
                        {discounted && (
                          <p className="text-sm line-through mb-0.5" style={{ color: "#9ca3af" }}>
                            {plan.total.toLocaleString()}円
                          </p>
                        )}
                        <p className="text-xl font-bold" style={{ color: discounted ? "#c9922a" : "#0c1a33" }}>
                          {finalTotal.toLocaleString()}<span className="text-sm font-normal" style={{ color: "#6b7280" }}>円/月</span>
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="py-20 px-4" style={{ backgroundColor: "#f7f5f0" }}>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-4" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>
            どのくらいの頻度から始めるべきか
          </h2>
          <p className="text-center text-sm mb-12 max-w-2xl mx-auto" style={{ color: "#6b7280" }}>
            ここに正解はありません。大切なのは、学力・志望校・残り期間に対して現実的な頻度を選ぶことです。
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {fitGuides.map((item) => (
              <div key={item.title} className="rounded-2xl p-6 bg-white" style={{ border: "1px solid #e5e1d8" }}>
                <p className="text-xs font-bold tracking-widest uppercase mb-2" style={{ color: "#c9922a" }}>
                  {item.label}
                </p>
                <p className="font-bold text-base mb-3" style={{ color: "#0c1a33" }}>
                  {item.title}
                </p>
                <p className="text-sm leading-relaxed" style={{ color: "#6b7280" }}>
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="py-20 px-4 bg-white">
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="p-8 rounded-2xl" style={{ border: "1px solid #e5e1d8" }}>
            <h2 className="text-xl font-bold mb-6" style={{ color: "#0c1a33" }}>料金に含まれるもの</h2>
            <ul className="space-y-3">
              {included.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm" style={{ color: "#3d3d3d" }}>
                  <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ backgroundColor: "#0c1a33" }}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-3 h-3 text-white">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="p-8 rounded-2xl" style={{ backgroundColor: "#f7f5f0", border: "1px solid #e5e1d8" }}>
            <h2 className="text-xl font-bold mb-6" style={{ color: "#0c1a33" }}>無料相談で決まること</h2>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { title: "現状の整理", body: "志望校、学力、残り期間、使える時間を整理します。" },
                { title: "優先順位の明確化", body: "何を先に改善すべきかを具体的に言語化します。" },
                { title: "開始プランの目安", body: "週1〜週3のどこから始めるのが現実的か見えてきます。" },
              ].map((item) => (
                <div key={item.title} className="rounded-xl p-5 bg-white" style={{ border: "1px solid #e5e1d8" }}>
                  <p className="font-bold text-sm mb-2" style={{ color: "#0c1a33" }}>
                    {item.title}
                  </p>
                  <p className="text-sm leading-relaxed" style={{ color: "#6b7280" }}>
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-bold" style={{ color: "#0c1a33" }}>料金に関するよくある質問</h2>
            {pricingFaqs.map((item) => (
              <div key={item.q} className="rounded-2xl p-6" style={{ backgroundColor: "#f7f5f0", border: "1px solid #e5e1d8" }}>
                <p className="font-bold text-sm mb-2" style={{ color: "#0c1a33" }}>Q. {item.q}</p>
                <p className="text-sm leading-relaxed" style={{ color: "#6b7280" }}>A. {item.a}</p>
              </div>
            ))}
          </div>

          <div className="p-8 rounded-2xl text-center" style={{ backgroundColor: "#0c1a33" }}>
            <h2 className="text-xl font-bold text-white mb-3" style={{ fontFamily: "var(--font-noto-serif)" }}>
              まずは無料相談から
            </h2>
            <p className="text-sm leading-relaxed mb-8" style={{ color: "rgba(255,255,255,0.68)" }}>
              どのプランが合っているかは、無料相談でヒアリングしたうえでご提案します。すぐに契約を決める必要はありません。
            </p>
            <Link
              href="/contact?from=pricing-page"
              className="inline-block px-8 py-4 text-white font-bold text-base rounded-lg hover:opacity-90 transition-opacity"
              style={{ backgroundColor: "#c9922a" }}
            >
              無料相談・お問い合わせ
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
