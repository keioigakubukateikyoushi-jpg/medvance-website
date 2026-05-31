import Image from "next/image";
import Link from "next/link";
import LineButton from "@/components/LineButton";
import TutorProfiles from "@/components/TutorProfiles";
import {
  buildBreadcrumbSchema,
  buildFaqSchema,
  buildItemListSchema,
  buildServiceSchema,
  buildSpeakableSchema,
  siteUrl,
} from "@/lib/seo";

export const metadata = {
  title: "医学部受験の家庭教師｜現役慶應医学部生の完全1対1指導 | Medvance",
  description:
    "医学部受験の家庭教師を探しているご家庭へ。Medvanceは現役慶應医学部生が完全1対1で、英語・数学・理科・面接小論文・週次学習管理・保護者共有まで伴走します。オンライン全国対応、関東圏は訪問指導も相談可能。",
  keywords: [
    "医学部 家庭教師",
    "医学部受験 家庭教師",
    "医学部専門 家庭教師",
    "医学部 オンライン家庭教師",
    "私立医学部 家庭教師",
    "慶應医学部生 家庭教師",
    "医学部受験 個別指導",
  ],
  alternates: {
    canonical: "/igakubu-kateikyoushi",
  },
};

const NAVY = "#0c1a33";
const GOLD = "#c9922a";
const CREAM = "#f7f5f0";

const heroBadges = [
  "現役慶應医学部生が担当",
  "完全1対1の家庭教師型指導",
  "オンライン全国対応",
  "関東圏は訪問指導も相談可",
  "面接・小論文・願書まで対応",
];

const concerns = [
  {
    title: "予備校に通っているのに、弱点が埋まらない",
    body: "授業を増やす前に、どの科目・単元・復習工程が詰まっているのかを分解し、家庭教師の時間を最も効果が出る場所に使います。",
  },
  {
    title: "医学部に詳しい講師を家庭で探しきれない",
    body: "一般的な家庭教師では、医学部特有の面接・小論文・併願校設計まで見られないことがあります。Medvanceは医学部受験に限定して指導します。",
  },
  {
    title: "子どもの学習状況が見えず、費用判断が難しい",
    body: "毎週の計画、授業内容、次の課題を保護者にも共有します。曖昧な「頑張っています」ではなく、判断できる材料に変えます。",
  },
];

const supportItems = [
  {
    label: "英語・数学・理科",
    title: "得点源にすべき科目を1対1で補強",
    body: "医学部入試で差がつく英数理を、志望校と現在地から逆算して指導します。解説を聞くだけではなく、答案作成のプロセスまで確認します。",
  },
  {
    label: "学習管理",
    title: "授業外の自習まで週単位で設計",
    body: "使う教材、復習日、確認テスト、過去問の時期を具体化します。家庭教師の授業を孤立させず、1週間の学習に接続します。",
  },
  {
    label: "面接・小論文",
    title: "医学部特有の二次試験まで一体で対策",
    body: "面接回答、小論文テーマ、志望理由書を早めに整えます。学科と二次対策の担当が分断されないように進めます。",
  },
  {
    label: "保護者共有",
    title: "家庭の意思決定に必要な情報を共有",
    body: "料金、指導頻度、受験校、進捗、残り期間の優先順位を共有し、保護者同席の戦略診断にも対応します。",
  },
];

const comparisonRows = [
  ["講師", "登録制の大学生・社会人が中心", "専任講師または集団授業講師", "現役慶應医学部生を中心に医学部受験経験者が担当"],
  ["指導範囲", "学校補習や質問対応が中心になりやすい", "カリキュラムは強いが個別最適は薄くなりやすい", "英数理、面接小論文、願書、週次管理まで一体対応"],
  ["自習管理", "授業後の管理は講師個人に依存", "予備校の課題量に本人が追われやすい", "教材・復習日・確認テストを週単位で設計"],
  ["保護者報告", "簡単な授業報告のみのことが多い", "学期面談や成績表が中心", "進捗、課題、受験校方針を家庭に共有"],
  ["向いている家庭", "学校補習を安く始めたい家庭", "体系的な授業量を確保したい家庭", "医学部合格に必要な弱点補強と戦略管理を任せたい家庭"],
];

const pricingCards = [
  { title: "週1回コース", count: "月4回", price: "月額8万円", body: "苦手科目の補強、予備校併用、面接小論文の追加対策に。" },
  { title: "週2回コース", count: "月8回", price: "月額14万円", body: "英数の2科目補強、理科の演習管理、週次の自習管理を厚くしたい方に。" },
  { title: "週3回〜コース", count: "月12回以上", price: "月額20万円〜", body: "浪人生、再受験生、全科目の立て直し、直前期の集中対策に。" },
];

const fitItems = [
  "医学部受験に詳しい家庭教師を探している",
  "大手予備校と併用しながら、弱点補強だけ個別に任せたい",
  "オンラインで全国から医学部生講師の指導を受けたい",
  "関東圏で訪問指導や対面指導も検討している",
  "保護者にも進捗と方針を共有してほしい",
  "面接・小論文・出願書類まで同じ軸で見てほしい",
];

const relatedLinks = [
  { title: "医学部受験の家庭教師を比較・選び方まとめ", href: "/column/igakubu-kateikyoushi-hikaku", label: "比較" },
  { title: "医学部受験のオンライン家庭教師", href: "/column/igakubu-kateikyoushi-online", label: "オンライン" },
  { title: "医学部受験の家庭教師料金・費用相場", href: "/column/igakubu-kateikyoushi-ryokin", label: "料金" },
  { title: "大手予備校と併用したい方へ", href: "/for/prep-school-plus", label: "併用" },
];

const faqs = [
  {
    q: "医学部受験の家庭教師はいつから始めるべきですか？",
    a: "高1・高2なら英数の土台作り、高3・浪人生なら弱点補強と過去問戦略に使うのが効果的です。残り期間が短いほど、最初に科目別の優先順位を整理してから始めることをおすすめします。",
  },
  {
    q: "オンライン家庭教師でも医学部受験に対応できますか？",
    a: "対応できます。画面共有や答案添削を使えば、英数理の解答プロセス、小論文、面接練習まで実施できます。地方在住でも慶應医学部生の指導を受けられる点が強みです。",
  },
  {
    q: "関東圏で訪問指導はできますか？",
    a: "東京・神奈川・千葉・埼玉など関東圏では、講師の空き状況とエリアに応じて訪問・対面指導も相談可能です。オンラインとの併用もできます。",
  },
  {
    q: "家庭教師だけで医学部受験は完結しますか？",
    a: "生徒の現在地によります。Medvanceでは、予備校を否定せず、必要に応じて大手予備校や学校教材も活用します。家庭教師の時間は、弱点補強・答案添削・学習管理・二次試験対策に集中させます。",
  },
  {
    q: "料金はどのくらいですか？",
    a: "授業は1コマ45分7,500円、1回90分で15,000円です。これにコーチング月20,000円を組み合わせ、週1回は月額8万円、週2回は月額14万円、週3回以上は月額20万円からです。入塾金は初回のみ20,000円です。",
  },
];

const schemas = [
  buildServiceSchema(
    "医学部受験の家庭教師",
    "医学部受験の家庭教師を探しているご家庭向けに、現役慶應医学部生が完全1対1指導、週次学習管理、面接小論文、保護者共有まで行うサービスです。",
    "/igakubu-kateikyoushi",
    "医学部受験家庭教師・オンライン個別指導",
  ),
  {
    "@context": "https://schema.org",
    "@type": "Course",
    name: "医学部受験 家庭教師型1対1指導",
    description: "現役医学部生による医学部受験向け家庭教師型の完全1対1指導。",
    url: `${siteUrl}/igakubu-kateikyoushi`,
    provider: {
      "@type": "EducationalOrganization",
      "@id": `${siteUrl}/#organization`,
      name: "Medvance",
      url: siteUrl,
    },
    inLanguage: "ja-JP",
    educationalLevel: "high school",
    teaches: ["医学部受験", "英語", "数学", "物理", "化学", "生物", "面接", "小論文"],
    courseMode: ["online", "onsite"],
    offers: {
      "@type": "Offer",
      url: `${siteUrl}/contact`,
      availability: "https://schema.org/InStock",
      priceCurrency: "JPY",
      category: "Paid",
    },
  },
  buildBreadcrumbSchema([
    { name: "ホーム", url: "/" },
    { name: "医学部受験の家庭教師", url: "/igakubu-kateikyoushi" },
  ]),
  buildItemListSchema(
    "医学部受験家庭教師で確認すべき項目",
    "/igakubu-kateikyoushi",
    supportItems.map((item) => ({ name: item.title, url: "/igakubu-kateikyoushi" })),
  ),
  buildFaqSchema(faqs),
  buildSpeakableSchema("/igakubu-kateikyoushi"),
];

export default function IgakubuKateikyoushiPage() {
  return (
    <div className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }} />

      <section className="relative overflow-hidden px-4 py-20 text-white md:py-24" style={{ backgroundColor: NAVY }}>
        <Image
          src="/images/hero-japan-tutoring.webp"
          alt="医学部受験の家庭教師が受験生に1対1で指導するイメージ"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-40"
        />
        <div className="absolute inset-0 bg-[#0c1a33]/70" />
        <div className="relative z-10 mx-auto max-w-6xl">
          <p className="mb-4 text-xs font-bold tracking-widest" style={{ color: GOLD }}>
            医学部受験の家庭教師
          </p>
          <h1
            className="mb-5 max-w-4xl text-3xl font-bold leading-snug md:text-5xl"
            style={{ fontFamily: "var(--font-noto-serif)" }}
          >
            医学部受験の家庭教師を探しているご家庭へ。
          </h1>
          <p className="max-w-3xl text-sm leading-relaxed md:text-base" style={{ color: "rgba(255,255,255,0.76)" }}>
            Medvanceは、現役慶應医学部生による完全1対1の家庭教師型指導です。
            英語・数学・理科の弱点補強から、面接・小論文・週次学習管理・保護者共有まで、医学部合格から逆算して伴走します。
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact?from=igakubu-kateikyoushi-hero"
              className="inline-flex items-center justify-center rounded-lg px-8 py-4 text-sm font-bold text-white transition-opacity hover:opacity-90"
              style={{ backgroundColor: GOLD }}
            >
              家庭教師の無料相談をする
            </Link>
            <LineButton label="LINEで家庭教師を相談" size="lg" className="!px-8 !py-4" />
          </div>
          <div className="mt-9 grid gap-2 sm:grid-cols-2 lg:grid-cols-5">
            {heroBadges.map((badge) => (
              <div
                key={badge}
                className="rounded-lg px-4 py-3 text-xs font-bold"
                style={{ backgroundColor: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.16)" }}
              >
                {badge}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16" style={{ backgroundColor: CREAM }}>
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 max-w-3xl">
            <p className="mb-3 text-xs font-bold tracking-widest" style={{ color: GOLD }}>
              家庭教師探しの不安
            </p>
            <h2 className="text-2xl font-bold leading-snug md:text-3xl" style={{ color: NAVY, fontFamily: "var(--font-noto-serif)" }}>
              医学部受験では、ただ相性のよい先生を探すだけでは足りません。
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {concerns.map((item) => (
              <div key={item.title} className="rounded-lg bg-white p-6" style={{ border: "1px solid #e5e1d8" }}>
                <h3 className="mb-3 text-base font-bold" style={{ color: NAVY }}>{item.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#5f6b7a" }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-16">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="mb-3 text-xs font-bold tracking-widest" style={{ color: GOLD }}>
              Medvanceの家庭教師型指導
            </p>
            <h2 className="mb-4 text-2xl font-bold leading-snug md:text-3xl" style={{ color: NAVY, fontFamily: "var(--font-noto-serif)" }}>
              授業時間だけでなく、医学部合格までの道筋を設計します。
            </h2>
            <p className="mb-6 text-sm leading-relaxed" style={{ color: "#5f6b7a" }}>
              医学部受験では、何を習うかと同じくらい、どの順番で、どの大学に向けて、どの頻度で復習するかが重要です。
              Medvanceは家庭教師の個別性に、受験戦略と学習管理を組み合わせます。
            </p>
            <div className="overflow-hidden rounded-lg" style={{ border: "1px solid #e5e1d8" }}>
              <Image
                src="/images/generated/medvance-tutor-team.webp"
                alt="Medvanceの医学部受験家庭教師チーム"
                width={1600}
                height={900}
                className="h-auto w-full"
              />
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {supportItems.map((item) => (
              <div key={item.title} className="rounded-lg p-5" style={{ backgroundColor: CREAM, border: "1px solid #e5e1d8" }}>
                <p className="mb-3 text-xs font-bold tracking-widest" style={{ color: GOLD }}>{item.label}</p>
                <h3 className="mb-2 text-sm font-bold" style={{ color: NAVY }}>{item.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#5f6b7a" }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16" style={{ backgroundColor: NAVY }}>
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 max-w-3xl">
            <p className="mb-3 text-xs font-bold tracking-widest" style={{ color: GOLD }}>
              比較
            </p>
            <h2 className="text-2xl font-bold leading-snug text-white md:text-3xl" style={{ fontFamily: "var(--font-noto-serif)" }}>
              一般的な家庭教師、医学部専門予備校、Medvanceの違い
            </h2>
          </div>
          <div className="overflow-x-auto rounded-lg" style={{ border: "1px solid rgba(255,255,255,0.16)" }}>
            <table className="w-full min-w-[760px] border-collapse text-sm">
              <thead style={{ backgroundColor: "rgba(255,255,255,0.08)" }}>
                <tr>
                  {["比較軸", "一般的な家庭教師", "医学部専門予備校", "Medvance"].map((head) => (
                    <th key={head} className="px-5 py-4 text-left font-bold text-white" style={{ borderBottom: "1px solid rgba(255,255,255,0.16)" }}>
                      {head}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => (
                  <tr key={row[0]}>
                    {row.map((cell, index) => (
                      <td
                        key={cell}
                        className="px-5 py-4 align-top leading-relaxed"
                        style={{
                          color: index === 0 ? "#fff" : "rgba(255,255,255,0.68)",
                          borderBottom: "1px solid rgba(255,255,255,0.1)",
                          fontWeight: index === 0 || index === 3 ? 700 : 400,
                          backgroundColor: index === 3 ? "rgba(201,146,42,0.08)" : "transparent",
                        }}
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="px-4 py-16" style={{ backgroundColor: CREAM }}>
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 text-center">
            <p className="mb-3 text-xs font-bold tracking-widest" style={{ color: GOLD }}>
              料金
            </p>
            <h2 className="text-2xl font-bold md:text-3xl" style={{ color: NAVY, fontFamily: "var(--font-noto-serif)" }}>
              家庭教師型指導の料金目安
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed" style={{ color: "#5f6b7a" }}>
              授業は1コマ45分7,500円、1回90分15,000円です。コーチング月20,000円を組み合わせ、学習管理まで含めて設計します。
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {pricingCards.map((item, index) => (
              <div
                key={item.title}
                className="rounded-lg bg-white p-6"
                style={{ border: index === 1 ? `2px solid ${GOLD}` : "1px solid #e5e1d8" }}
              >
                <p className="mb-2 text-xs font-bold tracking-widest" style={{ color: GOLD }}>{item.count}</p>
                <h3 className="mb-2 text-lg font-bold" style={{ color: NAVY }}>{item.title}</h3>
                <p className="mb-4 text-2xl font-bold" style={{ color: NAVY, fontFamily: "var(--font-noto-serif)" }}>{item.price}</p>
                <p className="text-sm leading-relaxed" style={{ color: "#5f6b7a" }}>{item.body}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href="/pricing?from=igakubu-kateikyoushi-pricing" className="inline-flex items-center justify-center rounded-lg px-7 py-4 text-sm font-bold text-white transition-opacity hover:opacity-90" style={{ backgroundColor: NAVY }}>
              料金ページで詳しく見る
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-16">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="mb-3 text-xs font-bold tracking-widest" style={{ color: GOLD }}>
              こんなご家庭に
            </p>
            <h2 className="mb-4 text-2xl font-bold leading-snug md:text-3xl" style={{ color: NAVY, fontFamily: "var(--font-noto-serif)" }}>
              家庭教師を、医学部受験の戦略パートナーとして使いたい方へ。
            </h2>
            <p className="text-sm leading-relaxed" style={{ color: "#5f6b7a" }}>
              講師を探すだけでなく、受験校、科目優先順位、毎週の実行量まで整理したいご家庭に向いています。
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {fitItems.map((item, index) => (
              <div key={item} className="flex items-start gap-3 rounded-lg p-4" style={{ backgroundColor: CREAM, border: "1px solid #e5e1d8" }}>
                <span className="mt-0.5 text-xs font-bold" style={{ color: GOLD }}>{String(index + 1).padStart(2, "0")}</span>
                <p className="text-sm font-bold leading-relaxed" style={{ color: NAVY }}>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TutorProfiles />

      <section className="px-4 py-16" style={{ backgroundColor: CREAM }}>
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 max-w-3xl">
            <p className="mb-3 text-xs font-bold tracking-widest" style={{ color: GOLD }}>
              あわせて読む
            </p>
            <h2 className="text-2xl font-bold leading-snug md:text-3xl" style={{ color: NAVY, fontFamily: "var(--font-noto-serif)" }}>
              家庭教師を比較検討する前に確認したいページ
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-4">
            {relatedLinks.map((item) => (
              <Link key={item.href} href={`${item.href}?from=igakubu-kateikyoushi-related`} className="block rounded-lg bg-white p-5 transition-opacity hover:opacity-90" style={{ border: "1px solid #e5e1d8" }}>
                <span className="mb-3 inline-flex rounded-full px-3 py-1 text-xs font-bold" style={{ backgroundColor: "rgba(201,146,42,0.12)", color: GOLD }}>
                  {item.label}
                </span>
                <p className="text-sm font-bold leading-relaxed" style={{ color: NAVY }}>{item.title}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-16">
        <div className="mx-auto max-w-3xl">
          <p className="mb-3 text-center text-xs font-bold tracking-widest" style={{ color: GOLD }}>
            FAQ
          </p>
          <h2 className="mb-10 text-center text-2xl font-bold md:text-3xl" style={{ color: NAVY, fontFamily: "var(--font-noto-serif)" }}>
            医学部家庭教師についてよくある質問
          </h2>
          <div className="space-y-4">
            {faqs.map((item) => (
              <div key={item.q} className="rounded-lg p-6" style={{ backgroundColor: CREAM, border: "1px solid #e5e1d8" }}>
                <p className="mb-2 text-sm font-bold" style={{ color: NAVY }}>Q. {item.q}</p>
                <p className="text-sm leading-relaxed" style={{ color: "#5f6b7a" }}>A. {item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-24 text-center" style={{ backgroundColor: NAVY }}>
        <div className="mx-auto max-w-4xl">
          <p className="mb-4 text-xs font-bold tracking-widest" style={{ color: GOLD }}>
            無料相談
          </p>
          <h2 className="mb-4 text-2xl font-bold leading-snug text-white md:text-4xl" style={{ fontFamily: "var(--font-noto-serif)" }}>
            ご家庭に合う医学部家庭教師の使い方を、まず整理します。
          </h2>
          <p className="mx-auto mb-10 max-w-2xl text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.68)" }}>
            志望校、現在の成績、予備校利用状況、保護者の方針を確認し、週何回・どの科目・どの形式で始めるべきかをご提案します。
          </p>
          <div className="flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="/contact?from=igakubu-kateikyoushi-final" className="inline-flex items-center justify-center rounded-lg px-9 py-4 text-sm font-bold text-white transition-opacity hover:opacity-90" style={{ backgroundColor: GOLD }}>
              家庭教師の無料相談を申し込む
            </Link>
            <Link href="/tutors?from=igakubu-kateikyoushi-final" className="inline-flex items-center justify-center rounded-lg px-9 py-4 text-sm font-bold text-white transition-opacity hover:opacity-90" style={{ border: "1px solid rgba(255,255,255,0.28)" }}>
              家庭教師一覧を見る
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
