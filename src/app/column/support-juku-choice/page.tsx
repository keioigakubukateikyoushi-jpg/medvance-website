import Image from "next/image";
import Link from "next/link";
import ColumnCTA from "@/components/ColumnCTA";

const faqItems = [
  {
    q: "医学部受験の塾は何を基準に選ぶべきですか？",
    a: "最優先はサポート体制です。授業の分かりやすさだけでなく、学習計画の作成、日々の進捗管理、質問対応、面接・小論文対策まで一貫して見てもらえるかを確認してください。医学部受験では「授業外の設計」が合否を大きく左右します。",
  },
  {
    q: "医学部専門予備校ならどこでも安心ですか？",
    a: "必ずしもそうではありません。医学部専門を掲げていても、学費が高い一方で日々の学習管理や個別の弱点分析が薄いケースがあります。看板よりも、実際にどこまで伴走してもらえるかを確認することが重要です。",
  },
  {
    q: "大手予備校のカリキュラムは医学部受験に向いていませんか？",
    a: "大手予備校にも良さはありますが、多くの受験生が同じ進度・同じ教材で進むため、医学部受験で必要な個別最適化が不足しやすいです。苦手科目や志望校の傾向が明確な受験生ほど、オーダーメイド型のほうが伸びやすい傾向があります。",
  },
  {
    q: "Medvanceはどんな人に向いていますか？",
    a: "自分専用の学習計画が欲しい人、集団授業では質問しづらい人、面接や小論文まで含めて一貫サポートを受けたい人に向いています。現役医学部生と1対1で進めるため、志望校や現在地に応じた柔軟な対策が可能です。",
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

const reasons = [
  {
    num: "01",
    title: "医学部受験は「授業外」の差が大きい",
    body: "医学部受験では、どの参考書をいつまでに終えるか、模試の復習をどう回すか、志望校ごとの形式差にどう合わせるかまで設計しないと成績が伸び切りません。授業だけではなく、授業外の管理まで含めてサポートしてくれる塾のほうが結果につながりやすいです。",
  },
  {
    num: "02",
    title: "高額な医学部専門予備校でも、サポートが薄いことがある",
    body: "医学部専門予備校は学費が高くなりやすい一方で、実際には質問対応が遅い、進捗管理が形式的、面接対策が直前だけ、というケースもあります。名称や価格で判断するのではなく、「毎週どこまで見てもらえるのか」を具体的に確認することが大切です。",
  },
  {
    num: "03",
    title: "大手は一律カリキュラムになりやすい",
    body: "大手予備校は仕組みが整っている反面、多くの受験生が同じカリキュラムで進みます。医学部受験では、英語は強いが理科が弱い、国公立と私立で配点戦略が違う、といった個別事情が大きいため、一律進行ではロスが出やすいです。",
  },
  {
    num: "04",
    title: "オーダーメイドのほうが伸びやすい",
    body: "合格しやすいのは、いまの偏差値・苦手分野・志望校に合わせて学習内容を調整できる塾です。今必要なことに集中できるので、無駄な演習や不要な講座が減り、短期間でも伸びやすくなります。",
  },
];

const checkpoints = [
  "毎週の学習計画を個別に作ってくれるか",
  "質問対応の速さと回数制限の有無",
  "模試・過去問の復習まで管理してくれるか",
  "面接・小論文を早期から見てもらえるか",
  "志望校別に教材や課題を変えてくれるか",
  "無料相談で現状分析までしてくれるか",
];

const medvancePoints = [
  {
    title: "現役医学部生が1対1で伴走",
    body: "実際に医学部受験を突破した現役医学部生が、授業だけでなく勉強の進め方まで細かく見ます。机上の理論ではなく、受かるための現実的な優先順位で学習を進められます。",
  },
  {
    title: "オーダーメイドカリキュラム",
    body: "全員同じ進度ではなく、志望校・科目バランス・生活リズムに合わせて学習計画を調整します。苦手科目の底上げと得意科目の伸ばし方を同時に設計できるのが強みです。",
  },
  {
    title: "面接・小論文まで一貫対応",
    body: "筆記だけでなく、面接・小論文・志望理由書まで一貫して対応します。医学部受験で最後に差がつく部分まで含めて見てもらえるため、直前で慌てにくくなります。",
  },
];

const relatedArticles = [
  { href: "/column/juku-erabi", title: "医学部受験の塾・予備校の選び方", label: "塾・指導" },
  { href: "/column/kateikyoushi", title: "医学部受験に家庭教師は効果的か？", label: "塾・指導" },
  { href: "/column/roadmap", title: "医学部受験ロードマップ", label: "受験戦略" },
];

export const metadata = {
  title: "医学部受験の塾はサポート体制で選ぶべき理由 | Medvance",
  description:
    "医学部専門予備校の高額な学費、大手予備校の一律カリキュラム、そしてオーダーメイド指導の強みを比較。医学部受験で本当に伸びやすい塾の選び方を解説します。",

  alternates: {
    canonical: "/column/support-juku-choice",
  },};

export default function SupportJukuChoicePage() {
  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div style={{ backgroundColor: "#0c1a33" }} className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#c9922a" }}>
            コラム
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: "'Noto Serif JP', serif" }}>
            医学部受験の塾は
            <br />
            サポート体制で選ぶべき
          </h1>
          <p className="text-base" style={{ color: "rgba(255,255,255,0.65)" }}>
            高額さや知名度より、どこまで伴走してもらえるかが重要です
          </p>
        </div>
      </div>

      <div className="py-16 px-4" style={{ backgroundColor: "#f7f5f0" }}>
        <div className="max-w-3xl mx-auto">
          <div className="mb-8 overflow-hidden rounded-[28px]" style={{ border: "1px solid #e5e1d8" }}>
            <Image
              src="/images/generated/support-juku-hero.png"
              alt="医学部受験で自分に合う塾を比較しながら進路を考える受験生のイメージ"
              width={1536}
              height={1024}
              className="w-full h-auto"
              priority
            />
          </div>
          <div className="p-8 rounded-2xl bg-white" style={{ border: "1px solid #e5e1d8" }}>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "#3d3d3d" }}>
              医学部受験で塾を選ぶとき、授業の分かりやすさや合格実績だけを見て決めてしまう人は少なくありません。しかし実際には、
              成績を伸ばすうえで大事なのは「授業そのもの」よりも、「授業外をどこまで支えてくれるか」です。
            </p>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "#3d3d3d" }}>
              医学部専門予備校は学費が高いことが多いですが、そのわりに日々の学習管理や質問対応が薄いケースもあります。逆に大手予備校は仕組みが整っている反面、全員が同じカリキュラムで進みやすく、個別最適化が不足しがちです。
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#3d3d3d" }}>
              だからこそ、医学部受験では「オーダーメイドのカリキュラム」と「伴走型のサポート」がある塾を選ぶほうが、結果的に伸びやすいと考えています。
            </p>
          </div>
        </div>
      </div>

      <div className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-10" style={{ color: "#0c1a33", fontFamily: "'Noto Serif JP', serif" }}>
            なぜサポート体制が重要なのか
          </h2>
          <div className="space-y-4">
            {reasons.map((item) => (
              <div key={item.num} className="p-6 rounded-2xl" style={{ backgroundColor: "#f7f5f0", border: "1px solid #e5e1d8" }}>
                <div className="flex items-start gap-4">
                  <span className="text-2xl font-bold flex-shrink-0" style={{ color: "#c9922a" }}>{item.num}</span>
                  <div>
                    <p className="font-bold text-base mb-2" style={{ color: "#0c1a33" }}>{item.title}</p>
                    <p className="text-sm leading-relaxed" style={{ color: "#6b7280" }}>{item.body}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="py-16 px-4" style={{ backgroundColor: "#f7f5f0" }}>
        <div className="max-w-3xl mx-auto">
          <div className="mb-8 overflow-hidden rounded-[28px] bg-white p-3" style={{ border: "1px solid #e5e1d8" }}>
            <Image
              src="/images/generated/juku-comparison-infographic.png"
              alt="大手予備校、医学部専門予備校、オーダーメイド指導の違いを視覚化した比較図"
              width={1536}
              height={1024}
              className="w-full h-auto rounded-[20px]"
            />
          </div>
          <h2 className="text-2xl font-bold mb-6" style={{ color: "#0c1a33", fontFamily: "'Noto Serif JP', serif" }}>
            入塾前に確認すべきチェックリスト
          </h2>
          <div className="p-8 rounded-2xl bg-white" style={{ border: "1px solid #e5e1d8" }}>
            <ul className="space-y-3">
              {checkpoints.map((item) => (
                <li key={item} className="flex gap-3 text-sm" style={{ color: "#3d3d3d" }}>
                  <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full mt-2" style={{ backgroundColor: "#c9922a" }} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-10" style={{ color: "#0c1a33", fontFamily: "'Noto Serif JP', serif" }}>
            Medvanceをおすすめする理由
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {medvancePoints.map((item) => (
              <div key={item.title} className="p-6 rounded-2xl" style={{ backgroundColor: "#f7f5f0", border: "1px solid #e5e1d8" }}>
                <p className="font-bold text-base mb-3" style={{ color: "#0c1a33" }}>{item.title}</p>
                <p className="text-sm leading-relaxed" style={{ color: "#6b7280" }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="py-16 px-4" style={{ backgroundColor: "#f7f5f0" }}>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-8" style={{ color: "#0c1a33", fontFamily: "'Noto Serif JP', serif" }}>
            よくある質問
          </h2>
          <div className="space-y-4 mb-12">
            {faqItems.map((faq, i) => (
              <details
                key={i}
                className="rounded-xl overflow-hidden"
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
        heading="サポート体制まで見て塾を選ぶなら、Medvanceがおすすめです"
        subtext="現役医学部生による1対1指導とオーダーメイド学習計画で、医学部受験を最後まで伴走します。まずは無料相談で現状を整理しましょう。"
      />
    </div>
  );
}
