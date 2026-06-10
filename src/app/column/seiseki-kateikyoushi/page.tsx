import Link from "next/link";
import ColumnCTA from "@/components/ColumnCTA";
import ColumnArticleSchemas from "@/components/ColumnArticleSchemas";
import ColumnJsonLd from "@/components/ColumnJsonLd";

const faqItems = [
  {
    q: "学校の成績向上に家庭教師と塾、どちらが効果的ですか？",
    a: "学校の定期テスト対策・内申点向上が目的であれば、家庭教師の方が効果的なケースが多いです。塾は集団授業が中心で学校の試験範囲に合わせた指導が難しい一方、家庭教師は学校の教科書・プリントに完全に対応した個別指導ができます。「学校の授業の補完」という目的では家庭教師が最適です。",
  },
  {
    q: "定期テスト前だけの利用はできますか？",
    a: "はい、テスト前の短期集中指導のみのご利用も可能です。試験2〜3週間前から始めるテスト前集中プランをご用意しています。ただし、年間を通じた継続指導の方が評定が安定しやすいため、状況に応じてご提案します。",
  },
  {
    q: "複数の科目を同時に依頼できますか？",
    a: "はい、複数科目の指導が可能です。1名の担当講師が複数科目を担当することも、科目ごとに別の講師を設定することもできます。成績全体のバランスを見ながら対応します。",
  },
  {
    q: "成績が上がる保証はありますか？",
    a: "成績の変化は生徒の学習量・理解度・元の学力状況に依存するため、特定の結果を保証することは難しいです。ただし、定期テスト対策を継続することで1〜2学期以内に評定改善が見られるケースが多く、「どこが出るか」を絞った対策で得点率が上がりやすいという実績があります。",
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
  { href: "/column/teiki-test-kateikyoushi", title: "定期テスト対策に家庭教師が最も効果的な理由", label: "定期テスト対策" },
  { href: "/for/seiseki-up", title: "学校の成績を上げたい方へ｜Medvanceの指導内容", label: "成績向上サービス" },
  { href: "/column/juku-erabi", title: "医学部受験の塾・予備校の選び方", label: "塾選び" },
];

const comparison = [
  { item: "学校の試験範囲への対応", tutoring: "◎ 完全対応", juku: "△ 難しい", eizo: "× 対応不可" },
  { item: "つまずきへの即時対応", tutoring: "◎ リアルタイム", juku: "△ 質問しにくい", eizo: "× できない" },
  { item: "指導内容の柔軟な変更", tutoring: "◎ いつでも変更可", juku: "× カリキュラム固定", eizo: "△ 限定的" },
  { item: "テスト前の集中対応", tutoring: "◎ 頻度を上げられる", juku: "△ コマ数固定", eizo: "△ 自己管理次第" },
  { item: "月あたりの費用感", tutoring: "中〜高", juku: "中", eizo: "低" },
  { item: "モチベーション管理", tutoring: "◎ 担当者が伴走", juku: "△ 個人差あり", eizo: "× 自主性任せ" },
];

export const metadata = {
  title: "学校の成績を上げるための家庭教師の選び方｜中学・高校生向け",
  description:
    "学校の成績向上・定期テスト対策・内申点アップに家庭教師が効果的な理由を解説。塾・映像授業との違い、家庭教師の選び方、現役慶應医学部生によるMedvanceの指導内容を紹介。",
  keywords: [
    "学校の成績 上げる 家庭教師",
    "定期テスト対策 家庭教師",
    "内申点 上げる 家庭教師",
    "中学生 成績 家庭教師",
    "高校生 成績向上 個別指導",
  ],
  alternates: {
    canonical: "/column/seiseki-kateikyoushi",
  },
};

export default function SeisekiKateikyoushiPage() {
  return (
    <div className="min-h-screen bg-white">
      <ColumnJsonLd
        title="学校の成績を上げるための家庭教師の選び方"
        description="学校の成績向上・定期テスト対策・内申点アップに家庭教師が効果的な理由を解説。塾・映像授業との違い、選び方のポイントを紹介。"
        slug="seiseki-kateikyoushi"
        category="塾・指導"
        keywords={["学校の成績 上げる 家庭教師", "定期テスト対策 家庭教師", "内申点 上げる 家庭教師"]}
      />
      <ColumnArticleSchemas slug="seiseki-kateikyoushi" articleOnly />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div style={{ backgroundColor: "#0c1a33" }} className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#c9922a" }}>成績向上・家庭教師</p>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-noto-serif)" }}>
            学校の成績を上げるための<br />家庭教師の選び方
          </h1>
          <p className="text-base" style={{ color: "rgba(255,255,255,0.65)" }}>
            塾・映像授業との違いと、定期テスト・内申点向上に最適な指導の選び方
          </p>
        </div>
      </div>

      {/* INTRO */}
      <div className="py-16 px-4" style={{ backgroundColor: "#f7f5f0" }}>
        <div className="max-w-3xl mx-auto">
          <div className="p-8 rounded-2xl bg-white" style={{ border: "1px solid #e5e1d8" }}>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "#3d3d3d" }}>
              「定期テストで点が上がらない」「内申点をもっと上げたいのに方法がわからない」という悩みを持つ中学生・高校生は多くいます。大手塾に通っているのに成績が伸びない、映像授業を見ているけれど身についている気がしない——そのような声はよく聞かれます。
            </p>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "#3d3d3d" }}>
              学校の成績向上に最も効果的な手段の一つが、完全1対1の個別指導（家庭教師）です。特に定期テスト対策では、「学校の授業・試験範囲に合わせた指導」ができるかどうかが得点を大きく左右します。
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#3d3d3d" }}>
              このページでは、学校の成績向上のために家庭教師を選ぶ際のポイントと、Medvanceの指導の特徴を解説します。
            </p>
          </div>
        </div>
      </div>

      {/* WHY TUTORING */}
      <div className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-2 text-center" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>
            学校の成績向上に家庭教師が効果的な3つの理由
          </h2>
          <p className="text-sm text-center mb-10" style={{ color: "#6b7280" }}>
            集団塾・映像授業では対応できない「学校ごとの個別対応」
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                num: "01",
                title: "学校の教科書・プリントに完全対応",
                body: "定期テストに出るのは学校の授業内容。市販の参考書中心の塾では試験範囲からズレた対策になりがちですが、家庭教師は学校の教材そのものを使って指導できます。",
              },
              {
                num: "02",
                title: "「わかったつもり」をその場でなくせる",
                body: "集団授業や映像授業では「なんとなく理解した」まま進んでしまいます。1対1の指導では理解度をリアルタイムで確認し、つまずきをその場で解消できます。",
              },
              {
                num: "03",
                title: "テスト前に集中対策できる",
                body: "定期テストの2〜3週間前から指導頻度を上げ、出題されやすい範囲に絞って集中対策できます。「どこを優先するか」という作戦を立てて臨むことで得点率が上がります。",
              },
            ].map((item) => (
              <div key={item.num} className="p-6 rounded-2xl" style={{ backgroundColor: "#f7f5f0", border: "1px solid #e5e1d8" }}>
                <p className="font-bold text-sm mb-2" style={{ color: "#c9922a" }}>{item.num}</p>
                <p className="font-bold text-base mb-3" style={{ color: "#0c1a33" }}>{item.title}</p>
                <p className="text-sm leading-relaxed" style={{ color: "#6b7280" }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* COMPARISON TABLE */}
      <div className="py-16 px-4" style={{ backgroundColor: "#f7f5f0" }}>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-2 text-center" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>
            家庭教師 vs 塾 vs 映像授業
          </h2>
          <p className="text-sm text-center mb-10" style={{ color: "#6b7280" }}>
            学校の成績向上という目的で比較する
          </p>
          <div className="rounded-2xl overflow-hidden" style={{ border: "1px solid #e5e1d8" }}>
            <table className="w-full text-sm">
              <thead>
                <tr style={{ backgroundColor: "#0c1a33" }}>
                  <th className="px-5 py-4 text-left text-white font-semibold">比較項目</th>
                  <th className="px-5 py-4 text-center font-bold" style={{ color: "#c9922a" }}>家庭教師</th>
                  <th className="px-5 py-4 text-center text-white font-semibold opacity-70">集団塾</th>
                  <th className="px-5 py-4 text-center text-white font-semibold opacity-70">映像授業</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map(({ item, tutoring, juku, eizo }, i) => (
                  <tr key={i} style={{ backgroundColor: i % 2 === 0 ? "#fff" : "#f7f5f0" }}>
                    <td className="px-5 py-4 font-medium" style={{ color: "#3d3d3d" }}>{item}</td>
                    <td className="px-5 py-4 text-center font-semibold" style={{ color: "#c9922a" }}>{tutoring}</td>
                    <td className="px-5 py-4 text-center" style={{ color: "#6b7280" }}>{juku}</td>
                    <td className="px-5 py-4 text-center" style={{ color: "#6b7280" }}>{eizo}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* SELECTION POINTS */}
      <div className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-6" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>
            家庭教師を選ぶ際の3つのポイント
          </h2>
          <div className="space-y-4">
            {[
              {
                title: "① 学校の教材・試験範囲に対応できるか",
                body: "家庭教師選びで最も重要なのは、学校ごとの授業・試験に対応できるかどうかです。「自分の学校の定期テストに合わせた対策ができますか？」と事前に確認しましょう。",
              },
              {
                title: "② 生徒との相性・コミュニケーション力",
                body: "1対1指導の効果は講師との相性に大きく依存します。初回授業（体験）で「わかりやすいか」「質問しやすいか」を確認することが大切です。",
              },
              {
                title: "③ 指導実績・担当講師の学力",
                body: "高校生の難関科目を指導するには、講師自身の学力が重要です。大学名・学部、指導経験年数を確認し、科目の専門性が高い講師を選びましょう。",
              },
            ].map((item, i) => (
              <div key={i} className="p-6 rounded-2xl" style={{ backgroundColor: "#f7f5f0", border: "1px solid #e5e1d8" }}>
                <p className="font-bold text-base mb-2" style={{ color: "#0c1a33" }}>{item.title}</p>
                <p className="text-sm leading-relaxed" style={{ color: "#6b7280" }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div className="py-16 px-4" style={{ backgroundColor: "#f7f5f0" }}>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-8" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>よくある質問</h2>
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
        heading="学校の成績向上・定期テスト対策はMedvanceへ"
        subtext="現役慶應医学部生が学校の教材に合わせた完全1対1指導を提供。まずは無料相談でお気軽にご相談ください。"
      />
    </div>
  );
}
