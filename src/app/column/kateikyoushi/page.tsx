import Link from "next/link";
import ColumnCTA from "@/components/ColumnCTA";

const faqItems = [
  {
    q: "医学部受験に家庭教師は効果的ですか？",
    a: "非常に効果的です。特に「弱点がはっきりしている」「自分のペースで進めたい」「予備校の集団授業に馴染めない」という受験生に向いています。完全1対1で自分に最適化された指導を受けられるため、同じ時間でも吸収量が大きくなります。",
  },
  {
    q: "医学部受験の家庭教師の相場はいくらですか？",
    a: "講師の学歴・経験によって大きく異なります。医学部在籍・卒業生であれば1コマ（60〜90分）1万〜2万円程度が相場です。週2回の場合、月あたり8〜16万円程度になります。コーチング（学習管理）が含まれるかどうかも費用に影響します。",
  },
  {
    q: "医学部受験の家庭教師はどうやって選べばいいですか？",
    a: "最重要ポイントは「医学部受験を突破した人間かどうか」です。一般的な学習塾講師や大学院生の家庭教師では、医学部特有の面接・小論文・科目別傾向への対応が難しい場合があります。現役医学部生または医学部卒が指導してくれるかを確認しましょう。",
  },
  {
    q: "家庭教師と予備校は併用できますか？",
    a: "むしろ併用が効果的なケースが多いです。予備校の集団授業で知識を広く身につけつつ、家庭教師で弱点を個別に補強するという使い分けをしている受験生は多くいます。ただし費用が増えるため、どちらをメインにするかを明確にしてから始めることをお勧めします。",
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
  { href: "/column/juku-erabi", title: "医学部受験の塾・予備校の選び方", label: "塾選び" },
  { href: "/column/study-method", title: "医学部合格のための正しい勉強法", label: "勉強法" },
  { href: "/column/roadmap", title: "医学部受験ロードマップ：いつから・何をすべきか", label: "受験戦略" },
];

export const metadata = {
  title: "医学部受験に家庭教師は効果的か？選び方と活用法を解説 | Medvance",
  description:
    "医学部受験における家庭教師の効果・選び方・費用相場を解説。現役医学部生による完全1対1指導の特徴と、予備校との組み合わせ方も紹介します。",

  alternates: {
    canonical: "/column/kateikyoushi",
  },};

const advantages = [
  {
    title: "完全に自分のペースで進められる",
    body: "集団授業では「わかった気になって先に進んでしまう」ことがよくあります。家庭教師なら「本当に理解できたか」を確認しながら進められるため、理解の抜けが生じにくい学習ができます。",
  },
  {
    title: "弱点だけに集中できる",
    body: "医学部受験は「全科目バランスよく」より「最も弱い部分を集中して底上げする」戦略が有効なことが多いです。家庭教師なら「今週は化学の有機だけ集中しよう」という細かい調整が可能です。",
  },
  {
    title: "面接・小論文の個別練習ができる",
    body: "医学部の面接・小論文は集団授業では対応しにくい分野です。1対1で模擬面接を繰り返したり、小論文の答案を丁寧に添削・フィードバックしてもらうには家庭教師が最適です。",
  },
  {
    title: "志望校の傾向に絞った指導",
    body: "慶應なら英語の速読、慈恵なら面接の準備、日医なら数学対策——志望校ごとに重点が変わります。家庭教師なら「あなたの志望校に特化した」オーダーメイド指導を受けることができます。",
  },
  {
    title: "スケジュールの柔軟性",
    body: "学校行事・模試・体調によって週の勉強量が変動するのは当然です。家庭教師は予備校と異なり、スケジュール調整が柔軟にできる点も受験生にとって大きなメリットです。",
  },
];

const selectPoints = [
  {
    point: "現役医学部生 or 医学部卒業生かどうか",
    detail: "医学部受験を実際に突破した人間が指導するかどうかは、情報・戦略・面接対策のすべてに影響します。「難関大学院生」や「旧帝大理系卒」の家庭教師は優秀でも、医学部特有の入試に精通していない場合があります。",
  },
  {
    point: "コーチング（学習管理）が含まれているか",
    detail: "週2〜3回の授業で成績が伸びない受験生の多くは、「授業と授業の間の自習の質」が低いことが原因です。何をどのくらい自習すればいいかを指示・管理してくれる家庭教師かどうかを確認しましょう。",
  },
  {
    point: "体験授業・無料相談があるか",
    detail: "家庭教師は「相性」が非常に重要です。どれだけ優秀でも、コミュニケーションが取りにくかったり、指導スタイルが合わない場合は効果が半減します。必ず体験してから判断しましょう。",
  },
  {
    point: "面接・小論文の指導実績があるか",
    detail: "医学部入試では面接が合否を分けることがあります。面接・小論文の指導実績・指導方針について入塾前に確認しておくことが重要です。",
  },
];

export default function KateikyoushiPage() {
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
            医学部受験に家庭教師は効果的か？
          </h1>
          <p className="text-base" style={{ color: "rgba(255,255,255,0.65)" }}>
            選び方・活用法・費用相場を現役慶應医学部生が解説
          </p>
        </div>
      </div>

      <div className="py-16 px-4" style={{ backgroundColor: "#f7f5f0" }}>
        <div className="max-w-3xl mx-auto">
          <div className="p-8 rounded-2xl bg-white mb-8" style={{ border: "1px solid #e5e1d8" }}>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "#3d3d3d" }}>
              医学部受験において「家庭教師」という選択肢は、正しく活用すれば非常に効果的です。大手予備校の集団授業と異なり、あなただけに最適化された指導が受けられるため、限られた時間を最大限に活かせます。
            </p>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "#3d3d3d" }}>
              一方で、「どの家庭教師でもいい」というわけではありません。医学部受験に特化した知識と実績を持つ指導者でなければ、費用に見合った効果が得られないリスクがあります。
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#3d3d3d" }}>
              このページでは、家庭教師を選ぶメリット・選び方のポイント・費用相場を詳しく解説します。
            </p>
          </div>
        </div>
      </div>

      <div className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-10" style={{ color: "#0c1a33", fontFamily: "'Noto Serif JP', serif" }}>
            医学部受験に家庭教師を選ぶ5つのメリット
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {advantages.map((item, i) => (
              <div key={i} className="p-6 rounded-2xl" style={{ backgroundColor: "#f7f5f0", border: "1px solid #e5e1d8" }}>
                <p className="font-bold text-sm mb-3" style={{ color: "#c9922a" }}>0{i + 1}</p>
                <p className="font-bold text-base mb-3" style={{ color: "#0c1a33" }}>{item.title}</p>
                <p className="text-sm leading-relaxed" style={{ color: "#6b7280" }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="py-16 px-4" style={{ backgroundColor: "#f7f5f0" }}>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-4" style={{ color: "#0c1a33", fontFamily: "'Noto Serif JP', serif" }}>
            医学部受験家庭教師を選ぶポイント
          </h2>
          <p className="text-sm mb-8" style={{ color: "#6b7280" }}>
            「誰でも家庭教師ができる」時代だからこそ、選ぶ基準が重要です。以下の4点を必ず確認しましょう。
          </p>
          <div className="space-y-4">
            {selectPoints.map((item, i) => (
              <div key={i} className="p-6 rounded-2xl bg-white" style={{ border: "1px solid #e5e1d8" }}>
                <p className="font-bold text-base mb-2" style={{ color: "#0c1a33" }}>
                  <span style={{ color: "#c9922a" }}>✓ </span>{item.point}
                </p>
                <p className="text-sm leading-relaxed" style={{ color: "#6b7280" }}>{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-6" style={{ color: "#0c1a33", fontFamily: "'Noto Serif JP', serif" }}>
            家庭教師の費用相場
          </h2>
          <div className="space-y-3 mb-8">
            {[
              { label: "大学生（理系）", price: "3,000〜5,000円 / コマ", note: "費用は安いが医学部受験の専門知識が乏しい場合がある。" },
              { label: "大学院生・一般理系卒", price: "5,000〜10,000円 / コマ", note: "学力は高いが医学部特有の入試対策が難しい場合がある。" },
              { label: "現役医学部生", price: "10,000〜20,000円 / コマ", note: "医学部受験の実態を知っている。面接・小論文指導も可能。" },
              { label: "医師・医学部卒", price: "15,000〜30,000円 / コマ", note: "実績と専門知識が最高水準。費用は高め。" },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 p-4 rounded-xl" style={{ backgroundColor: "#f7f5f0", border: "1px solid #e5e1d8" }}>
                <div className="flex-shrink-0 text-xs font-bold pt-0.5" style={{ color: "#0c1a33", minWidth: "140px" }}>{item.label}</div>
                <div>
                  <p className="font-bold text-sm mb-1" style={{ color: "#c9922a" }}>{item.price}</p>
                  <p className="text-xs leading-relaxed" style={{ color: "#6b7280" }}>{item.note}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="p-6 rounded-2xl" style={{ backgroundColor: "#f7f5f0", border: "1px solid #e5e1d8" }}>
            <p className="text-sm leading-relaxed" style={{ color: "#3d3d3d" }}>
              費用だけで選ぶのはリスクがあります。「授業料が安くても成績が伸びなかった」という相談を頻繁に受けます。1コマの費用より「1時間あたりどれだけ成長できるか」を基準に選ぶことが、最終的にコストパフォーマンスを高めることにつながります。
            </p>
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
        heading="Medvanceは現役慶應医学部生による医学部専門の家庭教師サービスです"
        subtext="完全1対1の授業＋コーチングで、あなたの合格を徹底サポート。まずは無料相談でお気軽にご相談ください。"
      />
    </div>
  );
}
