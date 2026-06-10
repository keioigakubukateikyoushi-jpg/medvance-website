import Link from "next/link";
import ColumnCTA from "@/components/ColumnCTA";
import ColumnArticleSchemas from "@/components/ColumnArticleSchemas";

const faqItems = [
  {
    q: "慶應医学部に合格するために家庭教師は必要ですか？",
    a: "必ずしも必須ではありませんが、慶應医学部は全国でも最難関の私立医学部のひとつです。英語・数学・理科の高水準な学力に加え、面接・小論文でも合否が分かれます。集団予備校では対応しきれない個別最適な指導が必要な受験生には、家庭教師が非常に有効です。",
  },
  {
    q: "慶應医学部受験に強い家庭教師の選び方は？",
    a: "最重要ポイントは「慶應医学部を実際に突破した人間が指導するかどうか」です。慶應医学部は英語の長文量・数学の記述難度・面接の独自性など、他大学と異なる特徴があります。在籍している現役慶應医学部生が指導する塾・サービスを選ぶことで、最新の入試情報と合格者の実体験に基づいた指導を受けられます。",
  },
  {
    q: "慶應医学部の家庭教師はいくらかかりますか？",
    a: "現役慶應医学部生による指導の場合、1コマ（45分）7,500円（1回の授業90分 = 15,000円）が指導料の基準になります。Medvanceでは、授業料に加えて15分単位の学習計画管理などを行うコーチング（月額20,000円）を組み合わせたシンプルな構成となっています。具体的には、週1回コース（月4回（8コマ）＋コーチング）で月額8万円、週2回コース（月8回（16コマ）＋コーチング）で月額14万円から受講いただけます。",
  },
  {
    q: "慶應医学部の面接・小論文は家庭教師で対策できますか？",
    a: "できます。むしろ面接・小論文こそ個別指導が最も効果を発揮する分野です。模擬面接・小論文の添削・志望理由書の仕上げを、慶應医学部の面接を実際に経験した講師が1対1で指導するため、予備校の集団授業では得られない実践的な対策ができます。",
  },
  {
    q: "慶應医学部受験の浪人生でも家庭教師に対応していますか？",
    a: "はい、Medvanceでは浪人生・再受験生を積極的に受け入れています。浪人経験のある講師も在籍しており、「なぜ前回落ちたか」を分析した上で、次回の合格に向けた戦略を設計します。",
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
  { href: "/column/kateikyoushi", title: "医学部受験に家庭教師は効果的か？選び方と活用法", label: "家庭教師" },
  { href: "/universities/keio", title: "慶應義塾大学医学部の入試完全ガイド", label: "慶應医学部" },
  { href: "/column/mensetu", title: "医学部面接対策の完全ガイド", label: "面接対策" },
];

const keioFeatures = [
  {
    title: "英語：長文量が私立トップクラス",
    body: "慶應医学部の英語は読解量が多く、速読・精読の両立が必要です。単語・文法の基礎を固めた上で、医学系テーマの英文に慣れる訓練が欠かせません。家庭教師なら「あなたの読むスピードと理解度」に合わせた演習設計ができます。",
  },
  {
    title: "数学：記述力と応用力が問われる",
    body: "慶應医学部の数学は難度が高く、答えだけでなく論理的な記述が求められます。「どこで減点されているか」を講師がリアルタイムで指摘し、記述の精度を上げていく個別指導が合否を分けます。",
  },
  {
    title: "化学・物理：標準〜やや難レベルを確実に",
    body: "他の難関医学部と比べると理科はやや解きやすい年度もありますが、基礎の抜けを一切許さない難問も混在します。苦手分野を放置すると大きな失点につながるため、個別に弱点を埋める指導が重要です。",
  },
  {
    title: "面接：医師としての適性・志望動機を深掘り",
    body: "慶應医学部の面接は、単なる自己紹介ではなく「なぜ医師になりたいのか」「慶應でなければならない理由」を深く掘り下げる形式です。自己分析・医療知識・慶應独自の教育方針の理解まで、1対1で仕上げていく必要があります。",
  },
  {
    title: "小論文：社会的・医療的テーマへの対応力",
    body: "医療倫理・社会問題・研究分野のテーマが頻出です。漠然とした「良い文章を書く練習」ではなく、論理展開の型を習得し、慶應の採点基準に合わせた答案を作れるように指導します。",
  },
];

const whyMedvance = [
  {
    num: "01",
    title: "指導するのは現役慶應医学部生のみ",
    body: "Medvanceの講師は全員、現在慶應義塾大学医学部に在籍する現役学生です。「今年どんな問題が出たか」「面接でどう答えたか」という最新の生きた情報を持っています。慶應医学部専門サービスとして、慶應に特化した受験知識を直接伝授します。",
  },
  {
    num: "02",
    title: "面接・小論文・願書まで一貫して対応",
    body: "慶應医学部の合否は、学科だけで決まりません。面接・小論文も含めた総合力が問われます。Medvanceでは学科指導から面接練習・小論文添削・願書添削まで、ひとりの担当講師が一貫して対応します。",
  },
  {
    num: "03",
    title: "全国オンライン対応・柔軟なスケジュール",
    body: "地方在住の方でも、部活や学校行事が忙しい方でも、週1回から始められます。オンライン授業に加え、関東圏では対面指導にも対応しています。",
  },
  {
    num: "04",
    title: "医学部入試全般に対応（慶應だけではない）",
    body: "慶應を第一志望にしながら、慈恵・順天堂・日医・昭和などを併願する受験生がほとんどです。Medvanceでは第一志望の慶應対策を軸に、併願校の傾向も含めた戦略的な受験計画を設計します。",
  },
];

export const metadata = {
  title: "慶應医学部の家庭教師｜現役慶應医学部生が1対1で指導",
  description:
    "慶應医学部受験に特化した家庭教師サービス。現役慶應医学部生が英語・数学・理科の学科対策から面接・小論文まで完全1対1で指導。全国オンライン対応・無料相談受付中。",
  keywords: [
    "慶應医学部 家庭教師",
    "慶應医学部 個別指導",
    "慶應医学部 面接対策",
    "慶應医学部 浪人",
    "医学部受験 家庭教師",
  ],
  alternates: {
    canonical: "/column/keio-kateikyoushi",
  },
};

export default function KeioKateikyoushiPage() {
  return (
    <div className="min-h-screen bg-white">
      <ColumnArticleSchemas slug="keio-kateikyoushi" articleOnly />
      <script type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* HERO */}
      <div style={{ backgroundColor: "#0c1a33" }} className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#c9922a" }}>
            慶應医学部受験
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-noto-serif)" }}>
            慶應医学部の家庭教師
          </h1>
          <p className="text-base" style={{ color: "rgba(255,255,255,0.65)" }}>
            現役慶應医学部生が、学科から面接・小論文まで完全1対1で指導
          </p>
        </div>
      </div>

      {/* INTRO */}
      <div className="py-16 px-4" style={{ backgroundColor: "#f7f5f0" }}>
        <div className="max-w-3xl mx-auto">
          <div className="p-8 rounded-2xl bg-white mb-8" style={{ border: "1px solid #e5e1d8" }}>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "#3d3d3d" }}>
              慶應義塾大学医学部は、私立医学部の中でも最難関のひとつです。英語・数学・理科の高水準な学力に加え、面接と小論文でも合否が分かれる総合戦です。
            </p>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "#3d3d3d" }}>
              「どんな家庭教師に頼めばいいか」「慶應に合格した講師に教わりたい」——そう考えている受験生・保護者の方に向けて、慶應医学部受験の特性と、Medvanceが提供する指導内容を解説します。
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#3d3d3d" }}>
              Medvanceの講師は全員、現役の慶應義塾大学医学部在籍者です。実際に慶應医学部の試験を突破した経験を持つ指導者から、再現性ある合格戦略を直接学べます。
            </p>
          </div>
        </div>
      </div>

      {/* KEIO SUBJECT FEATURES */}
      <div className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-4" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>
            慶應医学部の入試の特徴と家庭教師指導のポイント
          </h2>
          <p className="text-sm text-center mb-10" style={{ color: "#6b7280" }}>
            科目ごとの傾向を理解し、1対1で最短ルートを設計します
          </p>
          <div className="space-y-4">
            {keioFeatures.map((item, i) => (
              <div key={i} className="p-6 rounded-2xl" style={{ backgroundColor: "#f7f5f0", border: "1px solid #e5e1d8" }}>
                <p className="font-bold text-base mb-2" style={{ color: "#0c1a33" }}>
                  <span style={{ color: "#c9922a" }}>— </span>{item.title}
                </p>
                <p className="text-sm leading-relaxed" style={{ color: "#6b7280" }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* WHY MEDVANCE */}
      <div className="py-16 px-4" style={{ backgroundColor: "#f7f5f0" }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-10" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>
            Medvanceが他サービスと異なる4つの理由
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {whyMedvance.map((item, i) => (
              <div key={i} className="p-6 rounded-2xl bg-white" style={{ border: "1px solid #e5e1d8" }}>
                <p className="font-bold text-sm mb-2" style={{ color: "#c9922a" }}>{item.num}</p>
                <p className="font-bold text-base mb-3" style={{ color: "#0c1a33" }}>{item.title}</p>
                <p className="text-sm leading-relaxed" style={{ color: "#6b7280" }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* PRICE */}
      <div className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-6" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>
            料金と指導コース
          </h2>
          <div className="space-y-3 mb-8">
            {[
              { label: "週1回コース", price: "月8万円", note: "月4回（8コマ）の授業（1回90分）＋コーチング込み。入塾金2万円（初回のみ）。" },
              { label: "週2回コース", price: "月14万円", note: "月8回（16コマ）の授業（1回90分）＋コーチング込み。受験本番に向けて強化したい方向け。" },
              { label: "週3回〜コース", price: "月20万円〜", note: "月12回（24コマ）〜の授業（1回90分・セット割引適用）＋コーチング込み。直前期や浪人生・再受験生向け。" },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 p-4 rounded-xl" style={{ backgroundColor: "#f7f5f0", border: "1px solid #e5e1d8" }}>
                <div className="flex-shrink-0 text-xs font-bold pt-0.5" style={{ color: "#0c1a33", minWidth: "120px" }}>{item.label}</div>
                <div>
                  <p className="font-bold text-sm mb-1" style={{ color: "#c9922a" }}>{item.price}</p>
                  <p className="text-xs leading-relaxed" style={{ color: "#6b7280" }}>{item.note}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-sm leading-relaxed" style={{ color: "#6b7280" }}>
            まずは<Link href="/contact" style={{ color: "#c9922a" }} className="underline">無料相談</Link>でご状況をお伝えください。志望校・現在の学力・残り期間をヒアリングし、最適なコースをご提案します。
          </p>
        </div>
      </div>

      {/* FAQ */}
      <div className="py-16 px-4" style={{ backgroundColor: "#f7f5f0" }}>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-8" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>
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

      <ColumnCTA
        heading="慶應医学部合格を目指すなら、まずMedvanceに相談してください"
        subtext="現役慶應医学部生による完全1対1の指導。学科から面接・小論文まで一貫サポート。全国オンライン対応・無料相談受付中。"
      />
    </div>
  );
}
