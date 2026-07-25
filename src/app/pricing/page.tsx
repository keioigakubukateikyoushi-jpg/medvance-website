import Link from "next/link";
import { buildBreadcrumbSchema, buildFaqSchema, siteUrl } from "@/lib/seo";
import Image from "next/image";

export const metadata = {
  title: "医学部受験専門塾Medvanceの料金｜全プラン動画使い放題・質問し放題",
  description:
    "Medvanceの料金。全プランで動画使い放題・質問し放題（追加料金なし）。授業料・コーチング料・入塾金、週1〜週5の月額プラン目安、無料相談で決まることまでまとめています。",
  alternates: {
    canonical: "/pricing",
  },
};

const basicPlans = [
  { freq: "月4回（8コマ）", weekly: "週1回", lessons: 4, lessonFee: 60000, coaching: 20000, total: 80000, discount: 0 },
  { freq: "月8回（16コマ）", weekly: "週2回", lessons: 8, lessonFee: 120000, coaching: 20000, total: 140000, discount: 0 },
  { freq: "月12回（24コマ）", weekly: "週3回", lessons: 12, lessonFee: 180000, coaching: 20000, total: 200000, discount: 20000 },
  { freq: "月16回（32コマ）", weekly: "週4回", lessons: 16, lessonFee: 240000, coaching: 20000, total: 260000, discount: 20000 },
  { freq: "月20回（40コマ）", weekly: "週5回", lessons: 20, lessonFee: 300000, coaching: 20000, total: 320000, discount: 20000 },
];

const specializedPlans = [
  { freq: "月4回（8コマ）", weekly: "週1回", lessons: 4, lessonFee: 90000, coaching: 30000, total: 120000, discount: 0 },
  { freq: "月8回（16コマ）", weekly: "週2回", lessons: 8, lessonFee: 180000, coaching: 30000, total: 210000, discount: 0 },
  { freq: "月12回（24コマ）", weekly: "週3回", lessons: 12, lessonFee: 270000, coaching: 30000, total: 300000, discount: 30000 },
  { freq: "月16回（32コマ）", weekly: "週4回", lessons: 16, lessonFee: 360000, coaching: 30000, total: 390000, discount: 30000 },
  { freq: "月20回（40コマ）", weekly: "週5回", lessons: 20, lessonFee: 450000, coaching: 30000, total: 480000, discount: 30000 },
];

/** 全プラン共通の目玉特典（料金ページで最優先表示） */
const unlimitedBenefits = [
  {
    title: "動画使い放題",
    short: "使い放題",
    body: "授業動画・解説動画を契約中いつでも何回でも視聴。教科横断の単元教材も追加料金なし。",
    detail: "動画・PDF・スライド",
  },
  {
    title: "質問し放題",
    short: "質問し放題",
    body: "学習中の疑問をLINE・メールで随時質問。わからないまま放置しない仕組みです。",
    detail: "学習の疑問を随時",
  },
];

const included = [
  "完全1対1の個別指導（対面・オンライン）※コーチング単体を除く",
  "オーダーメイド学習計画の作成・更新",
  "進捗管理・定期面談",
  "面接・小論文・願書対策",
  "保護者向け定期報告",
  "LINE・メールでの質問対応",
];

const fitGuides = [
  {
    title: "まず学習の軸を整えたい方",
    label: "月4回（8コマ） / 週1回",
    body:
      "学校の授業や他の集団予備校と両立しながら、まず正しい勉強の方向性と優先順位を整えたい方向けです。授業で弱点を補強しつつ、計画を管理します。",
  },
  {
    title: "最も相談・開始が多い標準パターン",
    label: "月8回（16コマ）〜月12回（24コマ） / 週2回・週3回",
    body:
      "高3生、浪人生、再受験生の初期相談で最も選ばれる標準的な頻度です。学習内容の改善、複数科目の弱点補強、演習量の確保を最もバランスよく両立できます。",
  },
  {
    title: "短期間で一気に追い上げたい方",
    label: "月16回（32コマ）〜月20回（40コマ） / 週4回・週5回",
    body:
      "秋以降の直前期の追い上げや、科目数が多く一気にライバルを追い抜きたい方向けの集中指導です。授業回数を増やし、面接・小論文まで徹底管理します。",
  },
];

const pricingFaqs = [
  {
    q: "なぜ「15分単位の学習計画」を立てるのですか？",
    a: "医学部受験生の一日は分刻みです。1時間や2時間という大雑把な計画では、『何から始めようか』と迷う間に時間が過ぎてしまいます。Medvanceでは、通学電車の中、食事前後のスキマ時間、お風呂前の15分まで徹底的に可視化し、『今この15分でやるべきページ』をミリ単位で指定することで、勉強の着手ハードルを極限まで下げて習慣化させます。",
  },
  {
    q: "「1コマ45分・1回90分指導で2コマ分」とはどういう仕組みですか？",
    a: "一般的な80分や90分の一括指導では、解説を聞くだけで授業時間が終わってしまいがちです。Medvanceでは、人間の集中力サイクルに適した45分を1コマと定義し、1回の指導を90分（2コマ分）として実施します。前半45分で『プロ講師による徹底解説・インプット』を行い、後半45分で『その場での完全再現・アウトプット演習・答案添削』を行うことで、授業内の定着度を極限まで引き上げます。",
  },
  {
    q: "どのプランから始める人が多いですか？",
    a: "最もご相談・開始パターンとして多いのは週2回・週3回です。ただし、他塾との併用でまずペースを整えたい方は週1回、秋以降の直前期に一気にスパートをかけたい方は週4回・週5回の集中プランから選ばれるケースもあります。無料相談で、現状の学力と残り期間から最適な頻度をご提案します。",
  },
  {
    q: "「セット割引」や「特化パッケージ割引」はずっと適用されますか？",
    a: "各種割引は、入塾から最初の3ヶ月間のみ適用されます。4ヶ月目以降は通常月額料金（割引前価格）でのご案内となります。初期の学習ペース確立や、短期集中でのスムーズなスタートをサポートするための割引となっております。",
  },
  {
    q: "料金を見るときに何を重視すべきですか？",
    a: "授業回数だけでなく、学習計画・進捗管理・面接や小論文まで含めてどこまで伴走してもらえるかを見るのが重要です。医学部受験は授業だけで完結しないため、設計と管理の比重が大きくなります。",
  },
  {
    q: "無料相談ではどこまで決まりますか？",
    a: "志望校、現在地、使える時間、優先すべき科目、開始プランの目安まで整理できます。すぐ契約する必要はなく、相談内容をもとに持ち帰って検討していただけます。",
  },
  {
    q: "動画・PDF教材はどのプランで使えますか？",
    a: "Medvance塾生は動画・PDF教材の使い放題・質問し放題です（通常の授業＋コーチング、私立医学部特化、コーチング単体など）。一部ユニットは未契約でも無料公開しています。契約後にアクセスコードをお渡しします。",
  },
];

const pricingUrl = `${siteUrl}/pricing`;

const offerCatalogSchema = {
  "@context": "https://schema.org",
  "@type": "OfferCatalog",
  name: "Medvance 月額プラン一覧",
  url: pricingUrl,
  itemListElement: [
    ...basicPlans.map((p, i) => ({
      "@type": "Offer",
      "@id": `${pricingUrl}#basic-plan-${p.lessons}`,
      position: i + 1,
      name: `通常月額プラン${p.weekly}（月${p.lessons}回）`,
      description: `完全1対1個別指導${p.lessons}回／月と学習コーチングのセット。${p.discount > 0 ? "最初の3ヶ月間はセット割引が適用されます。" : ""}`,
      price: p.total - p.discount,
      priceCurrency: "JPY",
      availability: "https://schema.org/InStock",
      category: "Subscription",
      seller: { "@type": "EducationalOrganization", "@id": `${siteUrl}/#organization`, name: "Medvance" },
    })),
    ...specializedPlans.map((p, i) => ({
      "@type": "Offer",
      "@id": `${pricingUrl}#specialized-plan-${p.lessons}`,
      position: basicPlans.length + i + 1,
      name: `私立医学部完全特化プラン${p.weekly}（月${p.lessons}回）`,
      description: `私立医学部特化1対1指導${p.lessons}回／月と、独自テキスト・予想問題・特化講師（合格実績あり）を含む完全特化プログラム。${p.discount > 0 ? "最初の3ヶ月間は特化パッケージ割引が適用されます。" : ""}`,
      price: p.total - p.discount,
      priceCurrency: "JPY",
      availability: "https://schema.org/InStock",
      category: "Subscription",
      seller: { "@type": "EducationalOrganization", "@id": `${siteUrl}/#organization`, name: "Medvance" },
    })),
    {
      "@type": "Offer",
      "@id": `${pricingUrl}#coaching-only-plan`,
      position: basicPlans.length + specializedPlans.length + 1,
      name: "医学部受験コーチングプラン（単体）",
      description: "授業なし・コーチングに特化し、医学部情報、受験・出願戦略、勉強計画、進捗管理、LINEでの質問対応、面接・小論文添削まで徹底サポートする単体プラン。",
      price: 50000,
      priceCurrency: "JPY",
      availability: "https://schema.org/InStock",
      category: "Subscription",
      seller: { "@type": "EducationalOrganization", "@id": `${siteUrl}/#organization`, name: "Medvance" },
    }
  ]
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
      {/* Hero：料金より先に「使い放題・質問し放題」を大きく */}
      <div style={{ backgroundColor: "#0c1a33" }} className="pt-16 pb-10 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[11px] md:text-xs font-bold tracking-[0.2em] uppercase mb-4" style={{ color: "#e8c56a" }}>
            全プラン共通 · 追加料金なし
          </p>
          <h1 className="text-3xl md:text-5xl font-black text-white mb-3 leading-tight" style={{ fontFamily: "var(--font-noto-serif)" }}>
            動画使い放題
            <span className="mx-2 md:mx-3" style={{ color: "#e8c56a" }}>·</span>
            質問し放題
          </h1>
          <p className="text-base md:text-lg font-semibold mb-2" style={{ color: "rgba(255,255,255,0.85)" }}>
            Medvance塾生なら、月額に含まれます
          </p>
          <p className="text-sm mb-8 max-w-xl mx-auto" style={{ color: "rgba(255,255,255,0.55)" }}>
            授業プラン・特化プラン・コーチング単体、どれを選んでも同じ。料金ページの数字の前に、まずここを確認してください。
          </p>

          <div className="grid sm:grid-cols-2 gap-3 md:gap-4 max-w-2xl mx-auto text-left">
            {unlimitedBenefits.map((b) => (
              <div
                key={b.title}
                className="rounded-2xl p-5 md:p-6"
                style={{
                  background: "linear-gradient(145deg, #c9922a 0%, #e3b763 55%, #f0d48a 100%)",
                  boxShadow: "0 10px 28px rgba(201,146,42,0.35)",
                }}
              >
                <p className="text-[10px] font-bold tracking-widest uppercase mb-1" style={{ color: "rgba(12,26,51,0.55)" }}>
                  全プラン込み
                </p>
                <p className="text-2xl md:text-3xl font-black leading-none mb-2" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>
                  {b.title}
                </p>
                <p className="text-xs md:text-sm font-medium leading-relaxed" style={{ color: "rgba(12,26,51,0.78)" }}>
                  {b.body}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-6 text-xs">
            <Link href="/academy" className="font-bold underline underline-offset-4" style={{ color: "#e8c56a" }}>
              動画・PDF教材の内容を見る →
            </Link>
          </p>
        </div>
      </div>

      {/* 料金表の直前にもう一度、帯で断言 */}
      <div
        className="px-4 py-3 text-center border-y"
        style={{
          backgroundColor: "#fff8e8",
          borderColor: "rgba(201,146,42,0.35)",
        }}
      >
        <p className="text-sm md:text-base font-black tracking-wide" style={{ color: "#0c1a33" }}>
          <span style={{ color: "#c9922a" }}>全プラン共通</span>
          <span className="mx-2 opacity-30">|</span>
          動画使い放題
          <span className="mx-1.5" style={{ color: "#c9922a" }}>·</span>
          質問し放題
          <span className="mx-2 opacity-30">|</span>
          <span className="font-bold" style={{ color: "#6b7280" }}>追加料金なし</span>
        </p>
      </div>

      <div className="py-10 px-4" style={{ backgroundColor: "#f7f5f0" }}>
        <div className="max-w-3xl mx-auto">
          <div className="p-6 md:p-8 rounded-2xl bg-white" style={{ border: "1px solid #e5e1d8" }}>
            <p className="text-sm leading-relaxed mb-3" style={{ color: "#3d3d3d" }}>
              料金は「授業回数」だけを見るのではなく、<strong style={{ color: "#0c1a33" }}>動画使い放題・質問し放題が月額に含まれるか</strong>を先に確認するのがおすすめです。Medvanceは全プランで両方込みです。
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#3d3d3d" }}>
              そのうえで、学習計画・進捗管理・面接・小論文・出願まで含めた伴走が月額に入ります。通常プランに加え、私立医学部完全特化プランもご用意しています。
            </p>
          </div>
        </div>
      </div>

      <div className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto space-y-12">
          
          {/* 基本料金（コマ単価・入塾金） */}
          <div className="p-8 rounded-2xl" style={{ backgroundColor: "#f7f5f0", border: "1px solid #e5e1d8" }}>
            <h2 className="text-xl font-bold mb-6" style={{ color: "#0c1a33" }}>基本料金・指導単位の設計</h2>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="p-5 rounded-xl bg-white text-center" style={{ border: "1px solid #e5e1d8" }}>
                <p className="text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: "#c9922a" }}>授業単価</p>
                <p className="text-xl md:text-2xl font-extrabold tracking-tight flex items-baseline justify-center gap-1.5 flex-wrap" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-sans)" }}>
                  <span>1コマ45分 7,500円</span>
                  <span className="text-xs font-semibold text-[#6b7280]">（1回の授業90分）</span>
                </p>
              </div>
              <div className="p-5 rounded-xl bg-white text-center" style={{ border: "1px solid #e5e1d8" }}>
                <p className="text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: "#c9922a" }}>入塾金</p>
                <p className="text-2xl md:text-3xl font-extrabold tracking-tight" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-sans)" }}>
                  <span className="text-sm font-semibold mr-0.5">¥</span>20,000<span className="text-xs font-normal text-[#6b7280] ml-1"></span>
                </p>
                <p className="text-xs mt-1" style={{ color: "#6b7280" }}>初回のみ</p>
              </div>
            </div>
            <p className="text-xs leading-relaxed" style={{ color: "#6b7280" }}>
              ※通常指導は「前半45分（理解・解説）＋後半45分（完全再現アウトプット演習）」の計90分（2コマ分＝15,000円）で行います。コーチング（月2万円）には、分刻みのスキマ時間を完全活用する「15分単位のオーダーメイド学習計画の作成」が含まれます。
            </p>
          </div>

          {/* プラン1：通常月額プラン */}
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b-2 pb-4" style={{ borderColor: "#0c1a33" }}>
              <div>
                <span className="text-xs font-bold text-white px-2.5 py-1 rounded mb-2 inline-block" style={{ backgroundColor: "#0c1a33" }}>
                  STANDARD
                </span>
                <h2 className="text-2xl font-bold" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>
                  通常月額プラン（授業＋コーチング）
                </h2>
              </div>
              <span className="text-xs font-bold px-3 py-1.5 rounded-full w-fit" style={{ backgroundColor: "#fff0d6", color: "#c9922a", border: "1px solid #c9922a" }}>
                入塾から3ヶ月間・2万円引き実施中
              </span>
            </div>
            {/* プラン直下の特典バー（一目でわかる） */}
            <div
              className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 rounded-xl px-4 py-3.5"
              style={{ backgroundColor: "#0c1a33", border: "2px solid #c9922a" }}
            >
              <p className="text-sm md:text-base font-black text-white">
                <span style={{ color: "#e8c56a" }}>このプランに含まれる</span>
                <span className="mx-2 opacity-40">—</span>
                動画使い放題 · 質問し放題
              </p>
              <span className="text-[11px] font-bold px-2.5 py-1 rounded w-fit" style={{ backgroundColor: "#c9922a", color: "#0c1a33" }}>
                追加料金なし
              </span>
            </div>
            <p className="text-sm" style={{ color: "#5f6b7a" }}>
              現役慶應医学部生などの一流講師が完全1対1で「90分（45分×2コマ＝インプット＋完全再現アウトプット）」指導を行い、週次の学習計画（15分単位）によってスキマ時間まで徹底的に管理する標準パッケージです。
            </p>
            <div className="space-y-3">
              {basicPlans.map((plan, i) => {
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
                        className="absolute top-0 right-0 text-[10px] font-bold px-2.5 py-0.5 rounded-bl-xl"
                        style={{ backgroundColor: "#c9922a", color: "#fff" }}
                      >
                        セット割引（入塾から3ヶ月間）
                      </div>
                    )}
                    <div className="flex items-center justify-between p-5">
                      <div className="flex items-center gap-4">
                        <div
                          className="w-14 h-14 rounded-full flex flex-col items-center justify-center text-white font-bold text-[10px] flex-shrink-0 text-center leading-tight"
                          style={{ backgroundColor: "#0c1a33" }}
                        >
                          <span>{plan.weekly}</span>
                          <span className="text-[8px] opacity-80">月{plan.lessons}回</span>
                        </div>
                        <div>
                          <p className="font-bold text-sm md:text-base" style={{ color: "#0c1a33" }}>{plan.freq}（1回90分/2コマ分 × 月{plan.lessons}回）</p>
                          <p className="text-[11px] md:text-xs mt-0.5" style={{ color: "#6b7280" }}>
                            指導月{plan.lessons * 2}コマ分（{plan.lessonFee.toLocaleString()}円）＋ コーチング・15分単位計画（{plan.coaching.toLocaleString()}円）
                          </p>
                        </div>
                      </div>
                      <div className="text-right flex-shrink-0">
                        {discounted && (
                          <p className="text-[10px] line-through mb-0.5" style={{ color: "#9ca3af" }}>
                            ¥{plan.total.toLocaleString()}
                          </p>
                        )}
                        <p className="text-lg md:text-2xl font-extrabold tracking-tight" style={{ color: discounted ? "#c9922a" : "#0c1a33", fontFamily: "var(--font-noto-sans)" }}>
                          <span className="text-xs md:text-sm font-semibold mr-0.5">¥</span>{finalTotal.toLocaleString()}<span className="text-[10px] md:text-xs font-normal text-[#6b7280] ml-0.5">/ 月</span>
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* プラン1.5：医学部受験コーチングプラン（単体） */}
          <div
            className="space-y-6 p-6 md:p-8 rounded-3xl relative overflow-hidden transition-all duration-500 hover:shadow-xl border"
            style={{
              borderColor: "#cbd5e1",
              background: "linear-gradient(135deg, #ffffff 0%, #f8fafc 60%, #f1f5f9 100%)",
              boxShadow: "0 10px 30px -10px rgba(148, 163, 184, 0.15)",
            }}
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b pb-4" style={{ borderColor: "#e2e8f0" }}>
              <div>
                <span className="text-[10px] font-bold text-slate-700 px-3 py-1 rounded-full mb-2 inline-block tracking-widest uppercase" style={{ backgroundColor: "#e2e8f0" }}>
                  COACHING ONLY
                </span>
                <h2 className="text-2xl font-bold" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>
                  医学部受験コーチングプラン（単体）
                </h2>
                <p className="text-xs mt-1" style={{ color: "#64748b" }}>
                  授業なし・コーチングに特化し、合格のための戦略と進捗管理を徹底サポート
                </p>
              </div>
              <div className="text-right flex-shrink-0">
                <p className="text-2xl md:text-3xl font-black tracking-tight" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-sans)" }}>
                  <span className="text-xs md:text-base font-bold mr-0.5">¥</span>50,000<span className="text-[10px] md:text-xs font-normal text-[#64748b] ml-1">/ 月 (税込)</span>
                </p>
              </div>
            </div>

            <div
              className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 rounded-xl px-4 py-3.5"
              style={{ backgroundColor: "#0c1a33", border: "2px solid #c9922a" }}
            >
              <p className="text-sm md:text-base font-black text-white">
                <span style={{ color: "#e8c56a" }}>このプランに含まれる</span>
                <span className="mx-2 opacity-40">—</span>
                動画使い放題 · 質問し放題
              </p>
              <span className="text-[11px] font-bold px-2.5 py-1 rounded w-fit" style={{ backgroundColor: "#c9922a", color: "#0c1a33" }}>
                追加料金なし
              </span>
            </div>
            
            <p className="text-sm" style={{ color: "#475569" }}>
              「個別指導の授業は必要ないが、プロによる学習管理や志望校選定の戦略だけを指導してほしい」「すでに他の予備校に通っているが、自学自習のペースメイクや出願戦略だけ医学部専門のプロに頼りたい」という方向けの単体プランです。
            </p>

            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <div className="p-4 rounded-xl bg-white border" style={{ borderColor: "#e2e8f0" }}>
                <p className="font-bold text-sm mb-2 flex items-center gap-2" style={{ color: "#0c1a33" }}>
                  <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "#475569" }}></span>
                  徹底した学習管理と戦略立案
                </p>
                <ul className="space-y-1.5 text-xs" style={{ color: "#64748b" }}>
                  <li>・医学部受験情報・出願戦略の立案</li>
                  <li>・週次のオーダーメイド勉強計画の作成</li>
                  <li>・毎日の学習進捗管理・自習時間の徹底管理</li>
                  <li>・週1回（50分）の対面・オンライン面談</li>
                </ul>
              </div>
              <div className="p-4 rounded-xl bg-white border" style={{ borderColor: "#e2e8f0" }}>
                <p className="font-bold text-sm mb-2 flex items-center gap-2" style={{ color: "#0c1a33" }}>
                  <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "#475569" }}></span>
                  質問対応・願書面接サポート
                </p>
                <ul className="space-y-1.5 text-xs" style={{ color: "#64748b" }}>
                  <li>・LINEやメールでの質問・相談対応（順次速やかに回答）</li>
                  <li>・志望理由書の添削・願書作成サポート</li>
                  <li>・面接対策・小論文の書き方添削指導</li>
                  <li>・動画・PDF教材の使い放題・質問し放題（Medvance塾生）</li>
                  <li>※こちらのプランには1対1個別授業は含まれません</li>
                </ul>
              </div>
            </div>

            <p className="text-xs" style={{ color: "#94a3b8" }}>
              ※通常月額プラン（STANDARD）および私立医学部完全特化プラン（PREMIUM SPECIAL）には、上記のコーチングプランと同等以上の内容がすべて標準で含まれています（動画・PDF教材の使い放題・質問し放題含む）。授業と併せて受講される場合は、パッケージとしてよりお得な料金設計となっています。
            </p>
          </div>

          {/* プラン2：私立医学部完全特化プラン */}
          <div
            className="space-y-8 p-6 md:p-10 rounded-3xl relative overflow-hidden transition-all duration-500 hover:shadow-2xl"
            style={{
              border: "2px solid #c9922a",
              background: "linear-gradient(135deg, #ffffff 0%, #fefcf3 40%, #faf3df 80%, #f4e7c4 100%)",
              boxShadow: "0 25px 60px -15px rgba(201,146,42,0.3)",
              outline: "1px solid rgba(201, 146, 42, 0.25)",
              outlineOffset: "4px",
            }}
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b pb-6" style={{ borderColor: "rgba(201,146,42,0.3)" }}>
              <div>
                <span
                  className="text-[10px] font-bold text-white px-3 py-1 rounded-full mb-3 inline-block tracking-widest shadow-sm uppercase"
                  style={{ background: "linear-gradient(135deg, #c9922a 0%, #e3b763 100%)" }}
                >
                  PREMIUM SPECIAL
                </span>
                <h2
                  className="text-2xl md:text-3xl font-extrabold leading-tight"
                  style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}
                >
                  私立医学部完全特化プラン
                </h2>
                <p className="text-xs mt-1 font-medium" style={{ color: "#c9922a" }}>
                  私立医学部受験の最高峰。合格を掴み取るための極限特化プログラム。
                </p>
              </div>
              <span
                className="text-xs font-bold px-4 py-2.5 rounded-full w-fit shadow-xs border text-center"
                style={{
                  color: "#c9922a",
                  borderColor: "#c9922a",
                  backgroundColor: "rgba(255, 255, 255, 0.85)",
                  backdropFilter: "blur(4px)",
                }}
              >
                <i className="fas fa-crown mr-1.5"></i> 独自テキスト ＋ 予想問題 ＋ 特化講師
              </span>
            </div>

            <div
              className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 rounded-xl px-4 py-3.5"
              style={{ backgroundColor: "#0c1a33", border: "2px solid #c9922a" }}
            >
              <p className="text-sm md:text-base font-black text-white">
                <span style={{ color: "#e8c56a" }}>このプランに含まれる</span>
                <span className="mx-2 opacity-40">—</span>
                動画使い放題 · 質問し放題
              </p>
              <span className="text-[11px] font-bold px-2.5 py-1 rounded w-fit" style={{ backgroundColor: "#c9922a", color: "#0c1a33" }}>
                追加料金なし
              </span>
            </div>

            <div className="space-y-5">
              {/* Premium Special Package Visual Banner */}
              <div className="mb-6 overflow-hidden rounded-2xl border bg-white" style={{ borderColor: "rgba(201,146,42,0.18)" }}>
                <Image 
                  src="/images/generated/medvance_premium_special_package.png" 
                  alt="私立医学部完全特化プランの特大教材・模試・特化サポート一式" 
                  className="w-full h-auto object-cover max-h-[360px]"
                  width={1024}
                  height={1024}
                  sizes="(min-width: 1024px) 900px, 100vw"
                />
              </div>
              <p className="text-sm font-semibold leading-relaxed" style={{ color: "#0c1a33" }}>
                志望校の私立医学部合格可能性を極限まで引き上げる特化パッケージです。通常プランに以下が追加され、第一志望校合格に必要な対策をすべてカバーします：
              </p>
              <div className="grid md:grid-cols-3 gap-5">
                <div
                  className="p-5 rounded-2xl bg-white/95 shadow-xs border transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                  style={{ borderColor: "rgba(201,146,42,0.2)" }}
                >
                  <div className="w-9 h-9 rounded-full flex items-center justify-center text-white mb-3 shadow-xs" style={{ background: "linear-gradient(135deg, #c9922a 0%, #e3b763 100%)" }}>
                    <i className="fas fa-book-open text-xs"></i>
                  </div>
                  <p className="font-bold text-sm mb-1.5" style={{ color: "#0c1a33" }}>私立医学部独自テキスト</p>
                  <p className="text-xs leading-relaxed" style={{ color: "#5f6b7a" }}>頻出パターンや合否を分ける難問、大学別の特徴を徹底的に分析し凝縮したオリジナル特化教材。</p>
                </div>
                <div
                  className="p-5 rounded-2xl bg-white/95 shadow-xs border transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                  style={{ borderColor: "rgba(201,146,42,0.2)" }}
                >
                  <div className="w-9 h-9 rounded-full flex items-center justify-center text-white mb-3 shadow-xs" style={{ background: "linear-gradient(135deg, #c9922a 0%, #e3b763 100%)" }}>
                    <i className="fas fa-pen-nib text-xs"></i>
                  </div>
                  <p className="font-bold text-sm mb-1.5" style={{ color: "#0c1a33" }}>大学別予想問題集</p>
                  <p className="text-xs leading-relaxed" style={{ color: "#5f6b7a" }}>出題傾向、配点、時間配分をそっくりそのまま完全再現した、本番で差がつく medvance 独自の模試問題。</p>
                </div>
                <div
                  className="p-5 rounded-2xl bg-white/95 shadow-xs border transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                  style={{ borderColor: "rgba(201,146,42,0.2)" }}
                >
                  <div className="w-9 h-9 rounded-full flex items-center justify-center text-white mb-3 shadow-xs" style={{ background: "linear-gradient(135deg, #c9922a 0%, #e3b763 100%)" }}>
                    <i className="fas fa-award text-xs"></i>
                  </div>
                  <p className="font-bold text-sm mb-1.5" style={{ color: "#0c1a33" }}>私立医学部特化講師</p>
                  <p className="text-xs leading-relaxed" style={{ color: "#5f6b7a" }}>指導において実際に私立医学部の合格者を輩出した、確固たる実績と実力を持つ精鋭プロフェッショナル講師。</p>
                </div>
              </div>
            </div>

            <div className="space-y-3.5 mt-8">
              {specializedPlans.map((plan, i) => {
                const discounted = plan.discount > 0;
                const finalTotal = plan.total - plan.discount;
                return (
                  <div
                    key={i}
                    className="relative rounded-2xl overflow-hidden bg-white/95 transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 border"
                    style={{
                      borderColor: "rgba(201,146,42,0.18)",
                    }}
                  >
                    {discounted && (
                      <div
                        className="absolute top-0 right-0 text-[8px] font-bold px-3 py-0.5 text-white tracking-wider rounded-bl-xl shadow-xs"
                        style={{ background: "linear-gradient(135deg, #c9922a 0%, #dfab4c 100%)" }}
                      >
                        特化割引（入塾から3ヶ月間）
                      </div>
                    )}
                    <div className="flex items-center justify-between p-5">
                      <div className="flex items-center gap-4">
                        <div
                          className="w-14 h-14 rounded-full flex flex-col items-center justify-center text-white font-extrabold text-[10px] flex-shrink-0 text-center leading-none border-2 shadow-xs"
                          style={{
                            background: "linear-gradient(135deg, #0c1a33 0%, #1e3a6c 100%)",
                            borderColor: "#c9922a",
                          }}
                        >
                          <span className="text-[8px] font-normal opacity-85 mb-0.5">WEEKLY</span>
                          <span>{plan.weekly}</span>
                          <span className="text-[8px] opacity-80">月{plan.lessons}回</span>
                        </div>
                        <div>
                          <p className="font-bold text-sm md:text-base" style={{ color: "#0c1a33" }}>{plan.freq}（1回90分/2コマ分 × 月{plan.lessons}回）</p>
                          <p className="text-[11px] md:text-xs mt-0.5" style={{ color: "#6b7280" }}>
                            特化指導月{plan.lessons * 2}コマ分（{plan.lessonFee.toLocaleString()}円）＋ コーチング・15分単位計画・特化教材（{plan.coaching.toLocaleString()}円）
                          </p>
                        </div>
                      </div>
                      <div className="text-right flex-shrink-0">
                        {discounted && (
                          <p className="text-[10px] line-through mb-0.5 opacity-80" style={{ color: "#cba063" }}>
                            ¥{plan.total.toLocaleString()}
                          </p>
                        )}
                        <p className="text-lg md:text-3xl font-black tracking-tight" style={{ color: "#c9922a", fontFamily: "var(--font-noto-sans)" }}>
                          <span className="text-xs md:text-base font-bold mr-0.5">¥</span>{finalTotal.toLocaleString()}<span className="text-[10px] md:text-xs font-normal text-[#8a7a5f] ml-1">/ 月 (税込)</span>
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* 注記 */}
          <div className="text-xs md:text-sm leading-relaxed p-5 rounded-2xl" style={{ backgroundColor: "#f7f5f0", border: "1px solid #e5e1d8", color: "#4b5563" }}>
            <p className="font-semibold mb-1" style={{ color: "#0c1a33" }}>割引の適用期間について：</p>
            <p>
              ※通常月額プランの「セット割引」および私立医学部完全特化プランの「特化パッケージ割引」は、入塾から最初の3ヶ月間のみ適用されます。4ヶ月目以降は通常月額料金（割引前価格）でのご案内となります。
            </p>
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
            <h2 className="text-xl font-bold mb-2" style={{ color: "#0c1a33" }}>料金に含まれるもの</h2>
            <p className="text-sm mb-6" style={{ color: "#6b7280" }}>
              まず確認してほしい2つ。いずれも<strong style={{ color: "#0c1a33" }}>全プラン共通・追加料金なし</strong>です。
            </p>

            {/* 目玉2点をカードで大きく */}
            <div className="grid sm:grid-cols-2 gap-3 mb-8">
              {unlimitedBenefits.map((b) => (
                <div
                  key={b.title}
                  className="rounded-2xl p-5 relative overflow-hidden"
                  style={{
                    backgroundColor: "#0c1a33",
                    border: "2px solid #c9922a",
                  }}
                >
                  <span
                    className="absolute top-3 right-3 text-[10px] font-bold px-2 py-0.5 rounded"
                    style={{ backgroundColor: "#c9922a", color: "#0c1a33" }}
                  >
                    全プラン
                  </span>
                  <p className="text-2xl font-black mb-2" style={{ color: "#e8c56a", fontFamily: "var(--font-noto-serif)" }}>
                    {b.title}
                  </p>
                  <p className="text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.75)" }}>
                    {b.body}
                  </p>
                </div>
              ))}
            </div>

            <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: "#c9922a" }}>
              その他の標準サポート
            </p>
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
            <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: "#e8c56a" }}>
              全プラン · 動画使い放題 · 質問し放題
            </p>
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
