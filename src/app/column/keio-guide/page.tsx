import Link from "next/link";
import ColumnCTA from "@/components/ColumnCTA";
import ColumnArticleSchemas from "@/components/ColumnArticleSchemas";

export const metadata = {
  title: "慶應義塾大学医学部の入試完全ガイド｜現役生が解説 | Medvance",
  description:
    "慶應義塾大学医学部の入試科目・出題傾向・面接・倍率・合格戦略を現役慶應医学部生が徹底解説。慶應医学部受験を考えている方必見の完全ガイド。",
  keywords: ["慶應医学部 入試", "慶應医学部 受験", "慶應義塾大学 医学部 対策", "慶應医学部 難易度", "慶應医学部 倍率"],

  alternates: {
    canonical: "/column/keio-guide",
  },};

const subjects = [
  {
    name: "数学",
    weight: "高",
    detail: "記述・論証型の難問が出題される。公式の適用ではなく「なぜそうなるか」を答案に記述する力が問われる。大問4題構成が多く、証明問題・場合分け・不等式・確率など幅広い範囲から出題。",
    strategy: "チャート式（青）を1冊完全に仕上げた後、東大・慶應の過去問で記述答案の作成に慣れる。答案の論理展開を数学的に正確に記述する訓練が必須。",
  },
  {
    name: "英語",
    weight: "高",
    detail: "医療・科学系の高難度長文が複数題出題される。語彙レベルが高く、専門語彙を含む文章を正確に読む力が問われる。英文和訳・内容説明・英作文などが含まれる。",
    strategy: "毎日長文を読む習慣を作り、医療・科学系英語に慣れる。単語帳は最上位レベルまで仕上げる。英作文は早めから添削を受けて精度を高める。",
  },
  {
    name: "理科",
    weight: "中〜高",
    detail: "物理・化学から2科目選択（生物選択は不可）。物理は記述問題を含む標準〜難度の問題。化学は理論・有機・無機を幅広くカバーした標準〜やや難の問題が出題される。",
    strategy: "物理は現象理解を優先し、記述での説明力を養う。化学は有機の反応機構の理解を深め、構造決定問題に対応できるレベルまで仕上げる。",
  },
  {
    name: "面接・小論文",
    weight: "高",
    detail: "1次試験通過後に実施。個人面接と小論文の両方が課される。医師としての適性・志望動機・医療問題への意見などが問われる。配点は非公表だが合否に大きく影響する。",
    strategy: "志望動機・医師像・医療問題（AI、働き方改革、高齢化など）についての自分の意見を整理。模擬面接を繰り返し、自分の言葉で自然に話せる状態を作る。",
  },
];

const selectionProcess = [
  {
    step: "1次試験",
    content: "数学・英語・理科（2科目）の筆記試験。高い記述力と読解力が問われる。",
    note: "毎年3,000〜4,000人程度が受験し、1次合格者は300〜400人程度。",
  },
  {
    step: "2次試験",
    content: "小論文と個人面接。1次合格者の中から最終合格者を選考。",
    note: "最終合格者は110〜120名程度。1次通過後の倍率は3〜4倍程度。",
  },
];

const faqItems = [
  {
    q: "慶應医学部の倍率はどのくらいですか？",
    a: "年度によって異なりますが、1次試験の倍率は25〜35倍程度、最終倍率は30〜40倍程度です。ただし、上位受験者が複数の私立医学部を併願するため、実質競争率はやや低いとも言えます。",
  },
  {
    q: "慶應医学部に合格するには何が最も重要ですか？",
    a: "数学の記述力と英語の読解力が最も重要です。慶應の数学は「答えを出す」だけでなく「論理的に証明・説明する」記述力が問われます。また、2次試験の面接・小論文でいかに説得力ある姿を示せるかも合否を分けます。",
  },
  {
    q: "慶應医学部は浪人・再受験生でも合格できますか？",
    a: "合格しています。現役生との学力差が縮まる浪人・再受験生も毎年合格しています。ただし、慶應の場合は年齢に対してやや慎重な選考をするという情報もあるため、面接での志望動機の説得力が特に重要です。",
  },
  {
    q: "慶應医学部の1次試験に向けた参考書は何がおすすめですか？",
    a: "数学は青チャートを完成させた後、東大の過去問で記述答案作成を練習することをお勧めします。英語は上級単語帳と医療系長文の多読が有効です。化学は重要問題集を丁寧に仕上げてください。Medvanceでは慶應医学部在籍生が個別に教材選定のアドバイスも行っています。",
  },
  {
    q: "慶應医学部の面接ではどんなことを聞かれますか？",
    a: "典型的な質問として「なぜ医師を目指したか」「なぜ慶應なのか」「医療問題で関心があることは何か」「自己PR」などが挙げられます。また、近年はAI医療・高齢化社会・医師の働き方改革などの時事問題への意見を問われるケースも増えています。",
  },
];

const relatedArticles = [
  { href: "/column/private-top5", title: "慶應・慈恵・順天堂など私立医学部トップ5の特徴と対策", label: "大学別対策" },
  { href: "/column/mensetu", title: "医学部面接対策の完全ガイド", label: "面接対策" },
  { href: "/column/hensachi", title: "医学部合格に必要な偏差値は？", label: "受験情報" },
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

export default function KeioGuidePage() {
  return (
    <div className="min-h-screen bg-white">
      <ColumnArticleSchemas slug="keio-guide" articleOnly />
      <script type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div style={{ backgroundColor: "#0c1a33" }} className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#c9922a" }}>
            コラム
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-noto-serif)" }}>
            慶應義塾大学医学部<br className="hidden md:block" />入試完全ガイド
          </h1>
          <p className="text-base" style={{ color: "rgba(255,255,255,0.65)" }}>
            現役慶應医学部生が、科目別傾向・面接・合格戦略を徹底解説
          </p>
        </div>
      </div>

      <div className="py-16 px-4" style={{ backgroundColor: "#f7f5f0" }}>
        <div className="max-w-3xl mx-auto">
          <div className="p-8 rounded-2xl bg-white mb-8" style={{ border: "1px solid #e5e1d8" }}>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "#3d3d3d" }}>
              慶應義塾大学医学部は、日本最難関の私立医学部のひとつです。毎年数千人が受験し、合格できるのは100名あまり。高い学力と面接での人物評価の両方が求められる、非常に特徴的な入試形式です。
            </p>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "#3d3d3d" }}>
              このページでは、慶應医学部に在籍する現役学生の視点から、入試の実態・科目別傾向・合格に向けた具体的な対策を詳しく解説します。
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {[
              { label: "偏差値目安", value: "70〜72" },
              { label: "6年間学費", value: "約2,200万円" },
              { label: "定員", value: "約110名" },
              { label: "所在地", value: "東京都新宿区" },
            ].map((item, i) => (
              <div key={i} className="p-4 rounded-xl bg-white text-center" style={{ border: "1px solid #e5e1d8" }}>
                <p className="text-xs mb-1" style={{ color: "#9ca3af" }}>{item.label}</p>
                <p className="font-bold text-sm" style={{ color: "#0c1a33" }}>{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-10" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>
            科目別入試傾向と対策
          </h2>
          <div className="space-y-6">
            {subjects.map((subject, i) => (
              <div key={i} className="rounded-2xl overflow-hidden" style={{ border: "1px solid #e5e1d8" }}>
                <div className="px-6 py-4 flex items-center justify-between" style={{ backgroundColor: "#f7f5f0" }}>
                  <p className="font-bold text-base" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>{subject.name}</p>
                  <span
                    className="text-xs font-bold px-3 py-1 rounded-full text-white"
                    style={{ backgroundColor: subject.weight === "高" ? "#c9922a" : "#0c1a33" }}
                  >
                    重要度：{subject.weight}
                  </span>
                </div>
                <div className="px-6 py-5 bg-white grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs font-semibold mb-2" style={{ color: "#c9922a" }}>出題傾向</p>
                    <p className="text-sm leading-relaxed" style={{ color: "#6b7280" }}>{subject.detail}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold mb-2" style={{ color: "#0c1a33" }}>対策のポイント</p>
                    <p className="text-sm leading-relaxed" style={{ color: "#3d3d3d" }}>{subject.strategy}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="py-16 px-4" style={{ backgroundColor: "#f7f5f0" }}>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-8" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>
            選考フロー
          </h2>
          <div className="space-y-4">
            {selectionProcess.map((item, i) => (
              <div key={i} className="flex gap-4 p-5 rounded-xl bg-white" style={{ border: "1px solid #e5e1d8" }}>
                <div
                  className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm"
                  style={{ backgroundColor: "#c9922a" }}
                >
                  {i + 1}
                </div>
                <div>
                  <p className="font-bold text-sm mb-1" style={{ color: "#0c1a33" }}>{item.step}</p>
                  <p className="text-sm mb-2" style={{ color: "#3d3d3d" }}>{item.content}</p>
                  <p className="text-xs" style={{ color: "#9ca3af" }}>{item.note}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-6" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>
            現役慶應医学部生からのアドバイス
          </h2>
          <div className="p-8 rounded-2xl" style={{ backgroundColor: "#f7f5f0", border: "1px solid #e5e1d8" }}>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "#3d3d3d" }}>
              慶應医学部の入試で特徴的なのは、「答えを出す力」だけでなく「考えを説明する力」が問われることです。数学は計算して答えを出せば良いのではなく、その解法の論理展開を答案として書ける必要があります。
            </p>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "#3d3d3d" }}>
              また、2次試験の面接では「なぜ慶應なのか」という問いに具体的に答えられるかどうかが重要です。大学の研究内容・教育方針・附属病院の特色を事前に調べた上で、自身の志望動機と結びつけて語れる準備をしてください。
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#3d3d3d" }}>
              Medvanceでは、実際に慶應医学部に在籍する学生が指導するため、「リアルな合格者の勉強法」と「面接で何が見られているか」を直接伝えることができます。
            </p>
          </div>
        </div>
      </div>

      <div className="py-16 px-4" style={{ backgroundColor: "#f7f5f0" }}>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-8" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>
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


      <ColumnCTA
        heading="慶應医学部への最短ルートを一緒に設計します"
        subtext="現役慶應医学部生が、入試のリアルな視点から合格戦略を提案します。"
      />
    </div>
  );
}