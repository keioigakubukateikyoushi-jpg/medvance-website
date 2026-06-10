import Link from "next/link";
import ColumnCTA from "@/components/ColumnCTA";
import ColumnArticleSchemas from "@/components/ColumnArticleSchemas";

const faqItems = [
  {
    q: "医学部の面接対策に家庭教師は効果的ですか？",
    a: "非常に効果的です。面接は「量より質」の練習が重要で、1対1でフィードバックを繰り返す形式が最も効果を発揮します。集団予備校では模擬面接の練習機会が限られますが、家庭教師なら毎回の授業で実践練習とフィードバックを行えます。",
  },
  {
    q: "医学部の小論文は家庭教師に頼めますか？",
    a: "はい、家庭教師での小論文指導は非常に有効です。小論文は「答案を書いて添削を受ける→修正する」というサイクルを繰り返すことで伸びます。集団授業では1回の添削にも時間がかかりますが、家庭教師なら毎回その場でフィードバックを受けられます。",
  },
  {
    q: "面接・小論文の家庭教師はいつから始めるべきですか？",
    a: "遅くとも受験の6〜8ヶ月前（高3の春〜夏）には始めることをお勧めします。自己分析・医療知識・論述の型を習得するには一定の時間が必要です。特に浪人生は早期から取り組むことで、前回の失敗を繰り返さない準備ができます。",
  },
  {
    q: "学科対策と面接・小論文対策を同じ家庭教師にまとめて頼めますか？",
    a: "Medvanceでは1人の担当講師が学科・面接・小論文・願書まですべてを担当します。別々の先生に頼むと志望動機や受験戦略のすり合わせが難しくなるため、一貫して同じ講師が対応する方が圧倒的に有利です。",
  },
  {
    q: "MMI（多面的面接）の対策もできますか？",
    a: "はい、MMI対策も対応しています。ロールプレイ形式の練習や、倫理的判断を問う設問への答え方など、MMIならではの対策を1対1で行います。",
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
  { href: "/column/mensetu", title: "医学部面接対策の完全ガイド", label: "面接対策" },
  { href: "/column/shobun", title: "医学部小論文の書き方・完全対策ガイド", label: "小論文" },
];

const mensetsuPoints = [
  {
    title: "志望動機を深掘りする練習",
    body: "「なぜ医師になりたいか」「なぜこの大学か」という問いは、表面的な答えでは通用しません。家庭教師との対話の中で自己分析を深め、自分の言葉で語れるようになるまで練習を重ねます。",
  },
  {
    title: "医療知識・時事問題への対応力",
    body: "医療倫理・終末期医療・医師不足など、頻出テーマへの理解を深める必要があります。家庭教師は最新の医療ニュースや入試頻出トピックを把握しており、「知識の穴」を個別に補強できます。",
  },
  {
    title: "模擬面接を何度でも繰り返せる",
    body: "面接は場数です。集団授業や予備校では1〜2回しか模擬面接の機会がないことも多いですが、家庭教師なら毎回の授業で実践練習ができます。答え方・態度・声のトーンまで細かくフィードバックを受けられます。",
  },
  {
    title: "MMI・グループ討論への対策",
    body: "近年増加しているMMI（多面的面接）やグループ討論の形式は、特殊な練習が必要です。ロールプレイ形式や複数のシナリオを用意し、1対1で徹底的に対策します。",
  },
];

const shoronbunPoints = [
  {
    title: "論述の「型」を習得する",
    body: "小論文は型（構成の枠組み）を習得することで、初めて安定した答案が書けるようになります。序論・本論・結論の構成、根拠の示し方、反論への対処など、家庭教師が一から丁寧に教えます。",
  },
  {
    title: "頻出テーマを先読みして準備する",
    body: "医療倫理・インフォームドコンセント・超高齢社会・AIと医療など、医学部小論文の頻出テーマは毎年一定のパターンがあります。家庭教師とともに頻出テーマを洗い出し、事前に論点を整理しておくことで本番の対応力が高まります。",
  },
  {
    title: "答案を書いてその場で添削を受ける",
    body: "「書いて終わり」では小論文は伸びません。実際に書いた答案を講師がその場で読み、「なぜこの表現が弱いか」「どう直せばいいか」を具体的に解説するサイクルを繰り返すことで、格段にレベルが上がります。",
  },
  {
    title: "志望校の傾向に合わせて仕上げる",
    body: "慶應・慈恵・順天堂など、大学によって小論文の形式・テーマ傾向・文字数が異なります。志望校の過去問を分析した上で、その大学の傾向に合わせた対策を行います。",
  },
];

export const metadata = {
  title: "医学部の面接・小論文対策に家庭教師が最適な理由",
  description:
    "医学部受験の面接・小論文こそ個別指導が最も効果的です。現役慶應医学部生が模擬面接・小論文添削・MMI対策まで完全1対1で指導。全国オンライン対応・無料相談受付中。",
  keywords: [
    "医学部 面接対策 家庭教師",
    "医学部 小論文 家庭教師",
    "医学部 面接 個別指導",
    "医学部 MMI 対策",
    "医学部受験 面接 小論文",
  ],
  alternates: {
    canonical: "/column/mensetu-shoronbun-kateikyoushi",
  },
};

export default function MensetsuShoronbunKateikyoushiPage() {
  return (
    <div className="min-h-screen bg-white">
      <ColumnArticleSchemas slug="mensetu-shoronbun-kateikyoushi" articleOnly />
      <script type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* HERO */}
      <div style={{ backgroundColor: "#0c1a33" }} className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#c9922a" }}>
            面接・小論文対策
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-noto-serif)" }}>
            医学部の面接・小論文対策に<br />家庭教師が最適な理由
          </h1>
          <p className="text-base" style={{ color: "rgba(255,255,255,0.65)" }}>
            現役慶應医学部生による1対1の個別指導で、学科以外の差を徹底的に埋める
          </p>
        </div>
      </div>

      {/* INTRO */}
      <div className="py-16 px-4" style={{ backgroundColor: "#f7f5f0" }}>
        <div className="max-w-3xl mx-auto">
          <div className="p-8 rounded-2xl bg-white" style={{ border: "1px solid #e5e1d8" }}>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "#3d3d3d" }}>
              医学部入試において、面接・小論文は合否を左右する重要な要素です。特に私立医学部では、学科の点差が僅差になりやすく、面接・小論文の出来が最終的な合否を決めるケースが少なくありません。
            </p>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "#3d3d3d" }}>
              しかし、面接・小論文の対策を「ちゃんとやれた」と言える受験生は少数派です。予備校の集団授業では練習機会が限られ、個別のフィードバックが不十分なまま本番を迎えてしまうケースが多いです。
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#3d3d3d" }}>
              面接・小論文こそ、1対1の家庭教師指導が最も効果を発揮する分野です。このページでは、その理由と具体的な指導内容を解説します。
            </p>
          </div>
        </div>
      </div>

      {/* MENSETU POINTS */}
      <div className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-2 text-center" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>
            面接対策：家庭教師だからできること
          </h2>
          <p className="text-sm text-center mb-10" style={{ color: "#6b7280" }}>
            実際に慶應医学部の面接を突破した講師が、1対1でフィードバック
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {mensetsuPoints.map((item, i) => (
              <div key={i} className="p-6 rounded-2xl" style={{ backgroundColor: "#f7f5f0", border: "1px solid #e5e1d8" }}>
                <p className="font-bold text-sm mb-2" style={{ color: "#c9922a" }}>0{i + 1}</p>
                <p className="font-bold text-base mb-3" style={{ color: "#0c1a33" }}>{item.title}</p>
                <p className="text-sm leading-relaxed" style={{ color: "#6b7280" }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* SHORONBUN POINTS */}
      <div className="py-16 px-4" style={{ backgroundColor: "#f7f5f0" }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-2 text-center" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>
            小論文対策：1対1添削で格段に伸ばす
          </h2>
          <p className="text-sm text-center mb-10" style={{ color: "#6b7280" }}>
            書いて添削を受けるサイクルを何度でも繰り返せるのが家庭教師の強み
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {shoronbunPoints.map((item, i) => (
              <div key={i} className="p-6 rounded-2xl bg-white" style={{ border: "1px solid #e5e1d8" }}>
                <p className="font-bold text-sm mb-2" style={{ color: "#c9922a" }}>0{i + 1}</p>
                <p className="font-bold text-base mb-3" style={{ color: "#0c1a33" }}>{item.title}</p>
                <p className="text-sm leading-relaxed" style={{ color: "#6b7280" }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* MEDVANCE SUPPORT */}
      <div className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-6" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>
            Medvanceの面接・小論文サポート
          </h2>
          <div className="space-y-3 mb-8">
            {[
              { title: "模擬面接（毎回実施可能）", desc: "授業のたびに実践形式の面接練習を行います。録画・振り返りで改善点を明確化。" },
              { title: "小論文の書き方指導＋添削", desc: "論述の型の習得から、志望校の傾向に合わせた仕上げまで。毎回その場で赤入れします。" },
              { title: "MMI・グループ討論対策", desc: "ロールプレイ形式の演習や、倫理的判断を問う問題への対応力を1対1でトレーニング。" },
              { title: "願書・志望理由書の添削", desc: "「なぜ医師か」「なぜこの大学か」を言語化し、書類から面接まで一貫した軸を作ります。" },
              { title: "医療知識・時事問題のインプット", desc: "面接・小論文頻出テーマのインプットを授業内で行います。別途教材不要。" },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 p-4 rounded-xl" style={{ backgroundColor: "#f7f5f0", border: "1px solid #e5e1d8" }}>
                <div className="flex-shrink-0 w-1 rounded-full" style={{ backgroundColor: "#c9922a", minHeight: "40px" }} />
                <div>
                  <p className="font-bold text-sm mb-1" style={{ color: "#0c1a33" }}>{item.title}</p>
                  <p className="text-xs leading-relaxed" style={{ color: "#6b7280" }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="p-6 rounded-2xl" style={{ backgroundColor: "#f7f5f0", border: "1px solid #e5e1d8" }}>
            <p className="text-sm leading-relaxed" style={{ color: "#3d3d3d" }}>
              学科指導と面接・小論文指導を同じ担当講師に任せることで、「志望動機の一貫性」「面接での言葉と小論文の主張のすり合わせ」を一気通貫で仕上げられます。Medvanceは完全1対1のため、あなたの状況に合わせて柔軟に内容を調整できます。
            </p>
          </div>
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
        heading="面接・小論文まで含めた医学部対策はMedvanceにお任せください"
        subtext="現役慶應医学部生が学科から面接・小論文・願書まで一貫サポート。まずは無料相談でお気軽にご相談ください。"
      />
    </div>
  );
}
