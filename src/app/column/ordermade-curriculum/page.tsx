import Image from "next/image";
import Link from "next/link";
import ColumnCTA from "@/components/ColumnCTA";
import ColumnArticleSchemas from "@/components/ColumnArticleSchemas";

export const metadata = {
  title: "医学部受験でオーダーメイドカリキュラムが重要な理由",
  description:
    "医学部受験では全員同じカリキュラムより、志望校・苦手科目・生活リズムに合わせた個別設計のほうが伸びやすい理由を解説します。",

  alternates: {
    canonical: "/column/ordermade-curriculum",
  },};

const sections = [
  {
    title: "医学部受験は、全員が違うゲームをしている",
    body: "国公立志望か私立志望か、英語型か理科型か、現役か浪人かで、最適な勉強の順番は大きく変わります。同じ医学部受験でも、必要な配点戦略と優先順位は人によってまったく違います。",
  },
  {
    title: "一律カリキュラムは無駄が出やすい",
    body: "大手予備校のカリキュラムは多くの受験生向けに作られているため、すでにできる単元を何度も受けたり、本当は先に補強すべき苦手科目が後回しになったりしやすいです。医学部受験ではこのロスが致命傷になりやすいです。",
  },
  {
    title: "オーダーメイドだと、伸びる場所に時間を使える",
    body: "いまの偏差値、志望校、過去問との相性に合わせて内容を変えられると、必要な単元にだけ集中できます。英語を維持しながら理科を上げる、面接を早めに始めるなど、合格に直結する打ち手を優先できます。",
  },
];

const examples = [
  "英語は十分取れるので、物理と化学に時間を厚く配分する",
  "国公立志望なので共通テスト比率を高める",
  "私立専願なので小論文・面接を夏から並行する",
  "浪人生なので、朝から夜までの学習設計を週単位で管理する",
];

const relatedArticles = [
  { href: "/column/support-juku-choice", title: "医学部受験の塾はサポート体制で選ぶべき理由", label: "塾・指導" },
  { href: "/column/medical-yobiko-cost", title: "医学部専門予備校は高いだけ？費用とサポートの見極め方", label: "塾・指導" },
  { href: "/column/study-method", title: "医学部合格のための正しい勉強法", label: "勉強法" },
];

export default function OrdermadeCurriculumPage() {
  return (
    <div className="min-h-screen bg-white">
      <ColumnArticleSchemas slug="ordermade-curriculum" />
      <div style={{ backgroundColor: "#0c1a33" }} className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#c9922a" }}>
            コラム
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-noto-serif)" }}>
            医学部受験で
            <br />
            オーダーメイドカリキュラムが重要な理由
          </h1>
          <p className="text-base" style={{ color: "rgba(255,255,255,0.65)" }}>
            全員同じ進度より、あなた専用の設計のほうが伸びやすい
          </p>
        </div>
      </div>

      <div className="py-16 px-4" style={{ backgroundColor: "#f7f5f0" }}>
        <div className="max-w-3xl mx-auto">
          <div className="mb-8 overflow-hidden rounded-[28px] bg-white p-3" style={{ border: "1px solid #e5e1d8" }}>
            <Image
              src="/images/generated/ordermade-roadmap-infographic.webp"
              alt="医学部受験に向けたオーダーメイド学習ロードマップのイメージ図"
              width={1400}
              height={933}
              sizes="(max-width: 768px) 100vw, 768px"
              className="w-full h-auto rounded-[20px]"
              priority
              fetchPriority="high"
            />
          </div>
          <div className="p-8 rounded-2xl bg-white" style={{ border: "1px solid #e5e1d8" }}>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "#3d3d3d" }}>
              医学部受験で成績が伸びる人は、たくさん授業を受けている人とは限りません。伸びる人は、自分に必要なことだけを、正しい順番でやっています。
            </p>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "#3d3d3d" }}>
              そのためには、全員同じカリキュラムよりも、志望校・現在地・生活スタイルに合わせたオーダーメイドの設計のほうが有利です。医学部受験は配点や出題形式の差が大きく、個別最適化の価値がとても高いからです。
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#3d3d3d" }}>
              このページでは、一律カリキュラムでは伸びづらい理由と、オーダーメイド型の強みを整理します。
            </p>
          </div>
        </div>
      </div>

      <div className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-6">
          {sections.map((item) => (
            <div key={item.title} className="p-6 rounded-2xl" style={{ backgroundColor: "#f7f5f0", border: "1px solid #e5e1d8" }}>
              <p className="font-bold text-base mb-3" style={{ color: "#0c1a33" }}>{item.title}</p>
              <p className="text-sm leading-relaxed" style={{ color: "#6b7280" }}>{item.body}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="py-16 px-4" style={{ backgroundColor: "#f7f5f0" }}>
        <div className="max-w-3xl mx-auto">
          <div className="mb-8 overflow-hidden rounded-[28px] bg-white p-3" style={{ border: "1px solid #e5e1d8" }}>
            <Image
              src="/images/generated/ordermade-roadmap-infographic.webp"
              alt="課題発見から復習までを可視化した個別最適カリキュラムの図解"
              width={1400}
              height={933}
              sizes="(max-width: 768px) 100vw, 768px"
              className="w-full h-auto rounded-[20px]"
              loading="lazy"
            />
          </div>
          <h2 className="text-2xl font-bold mb-6" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>
            こんな調整ができると強い
          </h2>
          <div className="p-8 rounded-2xl bg-white" style={{ border: "1px solid #e5e1d8" }}>
            <ul className="space-y-3">
              {examples.map((item) => (
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
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-6" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>
            結論
          </h2>
          <div className="p-8 rounded-2xl" style={{ backgroundColor: "#f7f5f0", border: "1px solid #e5e1d8" }}>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "#3d3d3d" }}>
              医学部受験では、「全員同じ内容を、同じ順番で、同じ量だけやる」やり方では、どうしても伸び方に無駄が出ます。
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#3d3d3d" }}>
              だからこそ、志望校と現在地に合わせて日々の課題を調整できるオーダーメイド型の塾や指導のほうが、結果的に伸びやすいです。Medvanceはそこを重視して設計しています。
            </p>
          </div>
        </div>
      </div>

      <div className="py-16 px-4" style={{ backgroundColor: "#f7f5f0" }}>
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
              </Link>
            ))}
          </div>
        </div>
      </div>

      <ColumnCTA
        heading="自分専用のカリキュラムで医学部受験を進めたい方へ"
        subtext="Medvanceは現役医学部生が1対1で学習計画を設計し、日々の勉強まで伴走します。無料相談で、あなたに必要な優先順位を整理できます。"
      />
    </div>
  );
}
