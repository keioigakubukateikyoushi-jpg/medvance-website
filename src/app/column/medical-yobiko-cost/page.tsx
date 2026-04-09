import Image from "next/image";
import Link from "next/link";
import ColumnCTA from "@/components/ColumnCTA";

export const metadata = {
  title: "医学部専門予備校は高いだけ？費用とサポートを見極めるポイント | Medvance",
  description:
    "医学部専門予備校の学費はなぜ高いのか。本当にサポート体制に見合っているのか。費用対効果で塾を選ぶための判断基準を解説します。",

  alternates: {
    canonical: "/column/medical-yobiko-cost",
  },};

const points = [
  {
    title: "学費が高い理由と、納得できる理由は別",
    body: "医学部専門予備校は、少人数制・医学部向け教材・面接対策などを理由に高額になりやすいです。ただし、価格が高いこと自体が価値ではありません。学費に見合うだけの学習管理や個別最適化があるかを必ず確認する必要があります。",
  },
  {
    title: "高額でもサポートが薄いケースはある",
    body: "校舎のブランドや合格実績が大きくても、実際には授業中心で、質問対応・進捗管理・過去問分析・面接対策が薄いサービスもあります。医学部専門という看板だけで安心しないことが重要です。",
  },
  {
    title: "費用対効果で見るなら、伴走型かどうかが重要",
    body: "授業時間だけでなく、毎週の課題設定、復習の優先順位、模試の振り返りまで見てもらえる塾のほうが、結果として費用対効果が高くなりやすいです。特に医学部受験では、授業外の管理が成績に直結します。",
  },
];

const checklist = [
  "授業以外の質問対応は何回まで可能か",
  "毎週の学習計画は個別に作ってもらえるか",
  "面接・小論文対策が料金内か別料金か",
  "志望校ごとの過去問分析まで見てもらえるか",
  "講師変更や相談がしやすい体制か",
];

const relatedArticles = [
  { href: "/column/support-juku-choice", title: "医学部受験の塾はサポート体制で選ぶべき理由", label: "塾・指導" },
  { href: "/column/ordermade-curriculum", title: "医学部受験でオーダーメイドカリキュラムが重要な理由", label: "塾・指導" },
  { href: "/column/juku-erabi", title: "医学部受験の塾・予備校の選び方", label: "塾・指導" },
];

export default function MedicalYobikoCostPage() {
  return (
    <div className="min-h-screen bg-white">
      <div style={{ backgroundColor: "#0c1a33" }} className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#c9922a" }}>
            コラム
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-noto-serif)" }}>
            医学部専門予備校は高いだけ？
            <br />
            費用とサポートの見極め方
          </h1>
          <p className="text-base" style={{ color: "rgba(255,255,255,0.65)" }}>
            高額な学費に見合う価値があるかを、医学部受験の視点で整理します
          </p>
        </div>
      </div>

      <div className="py-16 px-4" style={{ backgroundColor: "#f7f5f0" }}>
        <div className="max-w-3xl mx-auto">
          <div className="mb-8 overflow-hidden rounded-[28px]" style={{ border: "1px solid #e5e1d8" }}>
            <Image
              src="/images/generated/medical-yobiko-cost-hero.png"
              alt="高額な医学部専門予備校と丁寧なサポート体制を対比したイメージ"
              width={1536}
              height={1024}
              className="w-full h-auto"
              priority
            />
          </div>
          <div className="p-8 rounded-2xl bg-white" style={{ border: "1px solid #e5e1d8" }}>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "#3d3d3d" }}>
              医学部専門予備校は、一般的な予備校に比べて学費が高くなりやすい傾向があります。年間数百万円規模になることもあり、「高いのだからサポートも手厚いはず」と考えたくなります。
            </p>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "#3d3d3d" }}>
              しかし実際には、高額な学費のわりに、日々の学習管理が形式的だったり、面接・小論文が直前対応だったりすることもあります。重要なのは金額そのものではなく、どこまで伴走してくれるかです。
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#3d3d3d" }}>
              このページでは、医学部専門予備校を選ぶときに「高いか安いか」ではなく、「費用に見合うサポートがあるか」で判断するための基準をまとめます。
            </p>
          </div>
        </div>
      </div>

      <div className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-6">
          {points.map((item) => (
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
              src="/images/generated/juku-comparison-infographic.png"
              alt="塾のタイプごとに費用感とサポートの違いを整理した比較図"
              width={1536}
              height={1024}
              className="w-full h-auto rounded-[20px]"
            />
          </div>
          <h2 className="text-2xl font-bold mb-6" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>
            契約前に必ず確認したいこと
          </h2>
          <div className="p-8 rounded-2xl bg-white" style={{ border: "1px solid #e5e1d8" }}>
            <ul className="space-y-3">
              {checklist.map((item) => (
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
              医学部専門予備校は、たしかに情報量や受験ノウハウを持っていることがあります。ただし、費用が高いことと、あなたの成績が伸びることは同義ではありません。
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#3d3d3d" }}>
              本当に見るべきなのは、「あなた専用の学習計画を作ってくれるか」「授業外まで伴走してくれるか」「医学部特有の面接・小論文まで見てもらえるか」です。Medvanceは、そこを重視する人に向いています。
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
        heading="費用だけではなく、伴走してくれる塾を選びたい方へ"
        subtext="Medvanceは、現役医学部生による1対1指導と学習管理をセットで提供しています。無料相談で、あなたに必要なサポート量を一緒に整理できます。"
      />
    </div>
  );
}
