import Link from "next/link";
import ColumnCTA from "@/components/ColumnCTA";
import ColumnArticleSchemas from "@/components/ColumnArticleSchemas";
import ColumnTableOfContents from "@/components/ColumnTableOfContents";
import ArticleConsultationBox from "@/components/ArticleConsultationBox";
import RelatedHubs from "@/components/RelatedHubs";

export const metadata = {
  title: "医学部合格に必要な偏差値は？現実的な目標設定｜Medvance",
  description:
    "医学部合格に必要な偏差値を国公立・私立別に解説。慶應・慈恵・順天堂など主要大学の偏差値目安と、現実的な目標設定の方法。現役慶應医学部生が「偏差値だけで判断しない」受験戦略も紹介。",
  keywords: ["医学部 偏差値", "医学部 偏差値 必要", "私立医学部 偏差値", "医学部 難易度", "医学部合格 偏差値"],

  alternates: {
    canonical: "/column/hensachi",
  },};

const nationalUniversities = [
  { name: "東京大学（理科三類）", deviation: "70〜73以上", note: "日本最難関。共通テスト・二次試験ともに最高水準が求められる。" },
  { name: "京都大学（医学部）", deviation: "68〜72以上", note: "理三に次ぐ難易度。記述力と思考力が特に問われる。" },
  { name: "大阪大学（医学部）", deviation: "67〜70以上", note: "旧帝大の中でも最上位クラス。二次試験の科目に特色あり。" },
  { name: "東北大学・名古屋大学・九州大学（医学部）", deviation: "65〜68", note: "旧帝大クラス。共通テスト85〜88%程度が目安。" },
  { name: "地方国立医学部（全国平均）", deviation: "62〜66", note: "共通テスト82〜87%程度。二次試験の難易度は大学によって差がある。" },
];

const privateUniversities = [
  { name: "慶應義塾大学（医学部）", deviation: "70〜72", note: "私立最難関クラス。数学の記述・英語の長文読解・面接が特に重要。" },
  { name: "東京慈恵会医科大学", deviation: "67〜69", note: "英語が高難易度。速読力と語彙力が問われる独特の出題形式。" },
  { name: "順天堂大学（医学部）", deviation: "66〜68", note: "問題の難易度はやや高め。英語・数学のバランスが重要。" },
  { name: "日本医科大学", deviation: "65〜68", note: "数学の難問が特徴。論述対応力が求められる。" },
  { name: "昭和大学（医学部）", deviation: "62〜65", note: "特待生制度が充実。標準〜やや難しい問題が中心。" },
  { name: "東京医科大学", deviation: "62〜65", note: "オーソドックスな出題傾向。基礎力の完成度が問われる。" },
  { name: "北里大学・聖マリアンナ医科大学など", deviation: "58〜62", note: "私立の中では比較的入りやすいが、基礎力の完成は必須。" },
];

const faqItems = [
  {
    q: "医学部に合格するには偏差値はいくつ必要ですか？",
    a: "大学によって大きく異なります。私立医学部であれば偏差値58〜72程度、国公立医学部は62〜73以上が目安です。ただし偏差値だけで合否は決まらず、志望校の出題傾向への適合度・面接の評価も重要な要素です。",
  },
  {
    q: "偏差値50から医学部合格を目指せますか？",
    a: "可能です。ただし、偏差値50から医学部合格レベルに達するには、正しい戦略と十分な準備期間が必要です。私立医学部の中には偏差値60前後で合格できる大学もあり、2〜3年かけて着実に伸ばすことで十分に射程圏内に入ります。",
  },
  {
    q: "医学部受験で偏差値より大切なことはありますか？",
    a: "あります。特に私立医学部は面接の比重が高く、筆記試験でボーダーライン上でも面接で合否が決まるケースがあります。また、志望校の出題傾向に特化した対策力も重要です。偏差値はあくまで一つの指標に過ぎません。",
  },
  {
    q: "国公立医学部と私立医学部で必要な偏差値は大きく違いますか？",
    a: "国公立医学部は共通テスト（7〜8科目）で85〜90%の得点が必要なため、総合的な偏差値が高くなる傾向があります。一方、私立医学部は3〜4科目に絞れるため、得意科目を軸に対策すれば国公立より戦略的に合格を狙いやすい面もあります。",
  },
  {
    q: "慶應医学部を目指すには何年かかりますか？",
    a: "現状の学力にもよりますが、高1からスタートした場合は現役合格を目指せます。高3からや浪人からの場合でも、正しい戦略と集中した取り組みで1〜2年での合格実績があります。Medvanceでは慶應医学部在籍生が指導するため、リアルな合格戦略を提供できます。",
  },
];

const relatedArticles = [
  { href: "/column/juken-timing", title: "医学部受験はいつから始めるべきか", label: "受験戦略" },
  { href: "/column/private-top5", title: "慶應・慈恵・順天堂など私立医学部トップ5の特徴と対策", label: "大学選び" },
  { href: "/column/shigaku-vs-kokuritsu", title: "私立医学部と国公立医学部、どちらを目指すべきか", label: "大学選び" },
];

const tocItems = [
  { id: "national", label: "国公立医学部の偏差値目安" },
  { id: "private", label: "私立医学部の偏差値目安" },
  { id: "goal-setting", label: "偏差値だけで判断しない——現実的な目標設定のポイント" },
  { id: "faq", label: "よくある質問" },
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

export default function HensachiPage() {
  return (
    <div className="min-h-screen bg-white">
      <ColumnArticleSchemas slug="hensachi" articleOnly />
      <script type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div style={{ backgroundColor: "#0c1a33" }} className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#c9922a" }}>
            コラム
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-noto-serif)" }}>
            医学部合格に必要な偏差値は？<br className="hidden md:block" />現実的な目標設定
          </h1>
          <p className="text-base" style={{ color: "rgba(255,255,255,0.65)" }}>
            国公立・私立別の偏差値目安と「偏差値だけで判断しない」戦略
          </p>
        </div>
      </div>

      <div className="py-16 px-4" style={{ backgroundColor: "#f7f5f0" }}>
        <div className="max-w-3xl mx-auto">
          <div className="p-8 rounded-2xl bg-white mb-8" style={{ border: "1px solid #e5e1d8" }}>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "#3d3d3d" }}>
              「医学部に合格するには偏差値がいくつ必要？」これは受験生や保護者から最もよく聞かれる質問の一つです。
            </p>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "#3d3d3d" }}>
              結論から言うと、目標とする大学によって大きく異なります。また、偏差値はあくまで参考値であり、志望校の出題傾向への適合度・面接対策・時間配分など、偏差値では測れない要素も合否に大きく影響します。
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#3d3d3d" }}>
              このページでは、主な医学部の偏差値目安と、現実的な目標設定の考え方を解説します。
            </p>
          </div>
        </div>
      </div>

      <ColumnTableOfContents items={tocItems} />

      <div className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 id="national" className="text-2xl font-bold mb-4 scroll-mt-20" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>
            国公立医学部の偏差値目安
          </h2>
          <p className="text-sm mb-8" style={{ color: "#6b7280" }}>
            河合塾・駿台の偏差値を参考にした目安です。共通テストの得点率も併せて確認してください。
          </p>
          <div className="space-y-3 mb-6">
            {nationalUniversities.map((uni, i) => (
              <div key={i} className="p-5 rounded-xl" style={{ backgroundColor: "#f7f5f0", border: "1px solid #e5e1d8" }}>
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <p className="font-bold text-sm" style={{ color: "#0c1a33" }}>{uni.name}</p>
                  <span className="text-sm font-bold px-3 py-1 rounded-full text-white" style={{ backgroundColor: "#0c1a33" }}>
                    偏差値 {uni.deviation}
                  </span>
                </div>
                <p className="text-xs leading-relaxed" style={{ color: "#6b7280" }}>{uni.note}</p>
              </div>
            ))}
          </div>
          <p className="text-xs" style={{ color: "#9ca3af" }}>
            上記は概算です。年度・模試によって異なります。最新情報は各予備校の偏差値表でご確認ください。
          </p>
        </div>
      </div>

      <div className="py-16 px-4" style={{ backgroundColor: "#f7f5f0" }}>
        <div className="max-w-4xl mx-auto">
          <h2 id="private" className="text-2xl font-bold mb-4 scroll-mt-20" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>
            私立医学部の偏差値目安
          </h2>
          <p className="text-sm mb-8" style={{ color: "#6b7280" }}>
            私立医学部は3〜4科目で受験できるため、得意科目を伸ばした集中対策が有効です。
          </p>
          <div className="space-y-3 mb-6">
            {privateUniversities.map((uni, i) => (
              <div key={i} className="p-5 rounded-xl bg-white" style={{ border: "1px solid #e5e1d8" }}>
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <p className="font-bold text-sm" style={{ color: "#0c1a33" }}>{uni.name}</p>
                  <span className="text-sm font-bold px-3 py-1 rounded-full text-white" style={{ backgroundColor: "#c9922a" }}>
                    偏差値 {uni.deviation}
                  </span>
                </div>
                <p className="text-xs leading-relaxed" style={{ color: "#6b7280" }}>{uni.note}</p>
              </div>
            ))}
          </div>
          <p className="text-xs" style={{ color: "#9ca3af" }}>
            上記は概算です。年度・模試によって異なります。
          </p>
        </div>
      </div>

      <div className="py-12 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <ArticleConsultationBox
            title="偏差値の数字だけで志望校を決めていませんか？"
            description="同じ偏差値でも、出題傾向との相性、面接配点、必要な科目数で「実際の難しさ」は大きく変わります。Medvanceの無料相談では、現状の学力と志望校の特性を突き合わせて、現実的な目標と戦略を整理します。"
            points={[
              "現在の偏差値から志望校までの距離を、科目ごとに数値化",
              "出題傾向との相性を分析し、第一志望・併願校を一緒に検討",
              "残り期間で何を優先すべきかを具体的に決められる",
            ]}
            source="column-hensachi-mid"
          />
        </div>
      </div>

      <div className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 id="goal-setting" className="text-2xl font-bold mb-6 scroll-mt-20" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>
            偏差値だけで判断しない——現実的な目標設定のポイント
          </h2>
          <div className="space-y-4">
            {[
              {
                title: "志望校の出題傾向との相性を確認する",
                body: "偏差値が同じでも、大学によって出題傾向は全く異なります。慶應は数学の記述力、慈恵は英語の速読力、日医は数学の難問処理力——自分の得意不得意と志望校の傾向が合っているかを確認することが重要です。",
              },
              {
                title: "面接・小論文の配点を必ず確認する",
                body: "多くの私立医学部は面接・小論文の配点が公開されていませんが、実質的に合否を左右するケースがあります。筆記試験で上位に入っても面接で落とされることがあるため、学力対策と並行して人物面の準備も欠かせません。",
              },
              {
                title: "現在の偏差値より「伸び率」で考える",
                body: "今の偏差値が低くても、正しい方法で継続的に学習することで大きく伸びます。医学部合格に向けた学習は、ゴールから逆算して「今何をすべきか」を常に意識することが最も効果的です。",
              },
            ].map((item, i) => (
              <div key={i} className="p-6 rounded-2xl" style={{ backgroundColor: "#f7f5f0", border: "1px solid #e5e1d8" }}>
                <p className="font-bold text-sm mb-3" style={{ color: "#0c1a33" }}>
                  {i + 1}. {item.title}
                </p>
                <p className="text-sm leading-relaxed" style={{ color: "#6b7280" }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="py-16 px-4" style={{ backgroundColor: "#f7f5f0" }}>
        <div className="max-w-3xl mx-auto">
          <h2 id="faq" className="text-2xl font-bold mb-8 scroll-mt-20" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>
            よくある質問
          </h2>
          <div className="space-y-4">
            {faqItems.map((faq, i) => (
              <details
                key={i}
                className="rounded-xl overflow-hidden group"
                style={{ border: "1px solid #e5e1d8" }}
              >
                <summary
                  className="flex items-center justify-between px-6 py-5 cursor-pointer font-semibold text-sm select-none list-none"
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
        </div>
      </div>

      <div className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
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


      <RelatedHubs slug="hensachi" />

      <ColumnCTA
        heading="今の偏差値から合格までの最短ルートを設計します"
        subtext="今の学力を診断し、志望校合格に向けた最短プランをご提案します。"
      />
    </div>
  );
}