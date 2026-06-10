import Link from "next/link";
import ColumnCTA from "@/components/ColumnCTA";
import ColumnArticleSchemas from "@/components/ColumnArticleSchemas";

export const metadata = {
  title: "私立医学部トップ5（慶應・慈恵・順大・日医・昭和）の入試傾向と合格戦略",
  description:
    "私立医学部最難関上位5校（慶應義塾・東京慈恵会・順天堂・日本医科・昭和大学）の偏差値・学費・入試問題の傾向を比較し、合格へ直結する科目別対策ロードマップを現役慶應医学部生が徹底解説します。",
  keywords: ["私立医学部 おすすめ", "私立医学部 トップ", "慶應医学部 対策", "慈恵医科大学 対策", "順天堂医学部 対策"],

  alternates: {
    canonical: "/column/private-top5",
  },};

const topSchools = [
  {
    rank: "01",
    name: "慶應義塾大学医学部",
    location: "東京都新宿区",
    tuition: "約2,200万円（6年間）",
    deviation: "70〜72",
    features: [
      "日本最難関の私立医学部のひとつ",
      "数学は記述式・証明が中心",
      "英語は高難度の長文読解",
      "面接・小論文の比重も高い",
    ],
    examStyle: "数学は論証・記述型の難問が特徴。「なぜそうなるか」を記述で説明する力が問われる。英語は医療・科学系の高難度長文。理科（物理・化学）は標準〜やや難。面接は個人面接と小論文を含む二段階選考。",
    strategy: "数学の記述力を高めることが最優先。公式の丸暗記ではなく論理展開を言語化する練習が必要。英語は速読と正確な読解の両立が鍵。面接では「なぜ慶應なのか」を具体的に答えられるよう大学研究を徹底する。",
  },
  {
    rank: "02",
    name: "東京慈恵会医科大学",
    location: "東京都港区",
    tuition: "約2,100万円（6年間）",
    deviation: "67〜69",
    features: [
      "英語が最難関レベルの私立医大",
      "長文の量と質が他大と一線を画す",
      "数学は標準〜やや難",
      "再受験生にも比較的寛容な傾向",
    ],
    examStyle: "英語は最大の難所。1000語超の長文複数題を限られた時間で正確に読む速読力が問われる。語彙力も高いレベルが要求される。数学は標準問題が中心だが時間管理が重要。理科は基礎〜標準。面接は個人面接。",
    strategy: "英語力の強化が最優先。毎日長文読解を継続し、速読と正確な理解を両立させる。英単語は医学・科学系の専門語彙まで拡張する。数学・理科は基礎を確実に固め、英語に十分な時間を使える状態を作る。",
  },
  {
    rank: "03",
    name: "順天堂大学医学部",
    location: "東京都文京区",
    tuition: "約2,100万円（6年間）",
    deviation: "66〜68",
    features: [
      "スポーツ医学・臨床医学で高い評価",
      "英語・数学ともに標準〜やや難",
      "国試合格率が安定して高い",
      "都内立地で実習環境が充実",
    ],
    examStyle: "英語は長文読解中心で医療系テーマが多い。数学は標準問題から応用まで幅広い。理科（物理・化学）は計算問題が多い。面接は個人面接で志望動機を中心に聞かれる傾向がある。",
    strategy: "全科目をバランスよく仕上げることが基本戦略。英語は長文の読解速度と正確性を高める。数学は計算力と応用問題への対応力を磨く。面接では順天堂の特色（スポーツ医学・地域医療貢献など）と自身の志望理由を結びつける準備をする。",
  },
  {
    rank: "04",
    name: "日本医科大学",
    location: "東京都文京区",
    tuition: "約2,200万円（6年間）",
    deviation: "65〜68",
    features: [
      "私立医大の中で最古の歴史を誇る",
      "数学の難問が特徴的",
      "英語は長文読解・英作文が出題",
      "研究・臨床ともに実績豊富",
    ],
    examStyle: "数学が最大の特徴で、難問・論証問題が出題される。思考力が問われる設問が多く、単なる計算ではなく問題解決の発想が必要。英語は長文読解と英作文の両方が出題される。面接は個人面接。",
    strategy: "数学の難問対策に早めに取り組む。標準問題を解けるだけでなく、難問に対する思考アプローチを磨くことが重要。英語は長文読解に加えて英作文の練習を早期から始める。理科は標準問題を確実に解ける状態を作る。",
  },
  {
    rank: "05",
    name: "昭和大学医学部",
    location: "東京都品川区",
    tuition: "約2,200万円（6年間）",
    deviation: "62〜65",
    features: [
      "特待生制度が非常に充実",
      "成績上位者は学費が大幅に減額",
      "問題の難易度は標準〜やや難",
      "附属病院が充実、実習環境が良好",
    ],
    examStyle: "数学・英語・理科ともに標準〜やや難のオーソドックスな出題。基礎力の完成度が問われる。特待生制度があるため、成績上位を目指す戦略も有効。面接は個人面接で志望動機と医師としての考え方を中心に確認される。",
    strategy: "全科目の基礎を確実に固めることが最優先。標準問題を確実に解ける実力があれば十分に合格圏内。特待生を狙うなら各科目で高得点を取れる精度を追求する。面接は志望動機と医師像を具体的に語れるよう準備する。",
  },
];

const faqItems = [
  {
    q: "私立医学部の中でどこがおすすめですか？",
    a: "「おすすめ」は学力・志望・経済状況によって異なります。偏差値が高くても自分の得意科目と出題傾向が合っていなければ合格は難しくなります。まず各大学の入試科目・傾向・学費・立地を確認し、自分の状況に合った大学を選ぶことが重要です。",
  },
  {
    q: "慶應医学部と慈恵医科大学ではどちらが難しいですか？",
    a: "総合的な難易度は慶應がやや上とされますが、科目ごとの比較では異なります。英語の難度は慈恵がトップクラスで、数学の記述難度は慶應が際立っています。自分の得意科目次第でどちらが有利かが変わるため、過去問を解いて相性を確認することをお勧めします。",
  },
  {
    q: "私立医学部上位5校を全部受験することは可能ですか？",
    a: "可能ですが、各大学の試験日程・科目傾向が異なるため、全て対策するのは体力・時間的に大変です。まず第一志望を明確にし、その傾向に特化した対策を軸に置いた上で、傾向が近い大学を併願するのが効率的な戦略です。",
  },
  {
    q: "特待生制度がある私立医学部はどこですか？",
    a: "昭和大学・日本医科大学・東邦大学・帝京大学など多くの私立医大が特待生制度を設けています。成績上位者は年間数十万〜数百万円の学費減額が受けられます。受験校を選ぶ際に特待生制度の条件を確認しておくことをお勧めします。",
  },
];

const relatedArticles = [
  { href: "/column/keio-guide", title: "慶應義塾大学医学部の入試完全ガイド", label: "大学別対策" },
  { href: "/column/hensachi", title: "医学部合格に必要な偏差値は？現実的な目標設定", label: "受験情報" },
  { href: "/column/gakuhi", title: "医学部の学費・費用を徹底比較", label: "費用・学費" },
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

export default function PrivateTop5Page() {
  return (
    <div className="min-h-screen bg-white">
      <ColumnArticleSchemas slug="private-top5" articleOnly />
      <script type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div style={{ backgroundColor: "#0c1a33" }} className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#c9922a" }}>
            コラム
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-noto-serif)" }}>
            慶應・慈恵・順天堂など<br className="hidden md:block" />私立医学部トップ5の特徴と対策
          </h1>
          <p className="text-base" style={{ color: "rgba(255,255,255,0.65)" }}>
            各大学の入試傾向・特色・合格戦略を現役慶應医学部生が徹底解説
          </p>
        </div>
      </div>

      <div className="py-16 px-4" style={{ backgroundColor: "#f7f5f0" }}>
        <div className="max-w-3xl mx-auto">
          <div className="p-8 rounded-2xl bg-white mb-8" style={{ border: "1px solid #e5e1d8" }}>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "#3d3d3d" }}>
              私立医学部は大学ごとに入試の傾向・難易度・求める学生像が全く異なります。「医学部対策」と一括でやろうとすると、志望校とズレた準備になってしまいがちです。
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#3d3d3d" }}>
              このページでは、慶應義塾・東京慈恵会・順天堂・日本医科・昭和大学の私立医学部上位5校について、各大学の特徴・入試傾向・合格に向けた具体的な対策を解説します。
            </p>
          </div>
        </div>
      </div>

      <div className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto space-y-12">
          {topSchools.map((school, i) => (
            <div key={i} className="rounded-2xl overflow-hidden" style={{ border: "1px solid #e5e1d8" }}>
              <div className="px-8 py-6" style={{ backgroundColor: "#0c1a33" }}>
                <div className="flex items-center gap-4">
                  <span className="text-5xl font-bold leading-none" style={{ color: "rgba(255,255,255,0.1)", fontFamily: "var(--font-noto-serif)" }}>
                    {school.rank}
                  </span>
                  <div>
                    <h2 className="text-xl font-bold text-white" style={{ fontFamily: "var(--font-noto-serif)" }}>
                      {school.name}
                    </h2>
                    <div className="flex flex-wrap gap-x-4 gap-y-1 mt-1">
                      <span className="text-xs" style={{ color: "rgba(255,255,255,0.55)" }}>{school.location}</span>
                      <span className="text-xs" style={{ color: "#c9922a" }}>偏差値 {school.deviation}</span>
                      <span className="text-xs" style={{ color: "rgba(255,255,255,0.55)" }}>学費 {school.tuition}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6 md:p-8" style={{ backgroundColor: "#f7f5f0" }}>
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <p className="text-xs font-semibold tracking-wide mb-3" style={{ color: "#c9922a" }}>この大学の特徴</p>
                    <ul className="space-y-2">
                      {school.features.map((f, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm" style={{ color: "#3d3d3d" }}>
                          <span className="flex-shrink-0 mt-0.5" style={{ color: "#c9922a" }}>→</span>
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-xs font-semibold tracking-wide mb-3" style={{ color: "#c9922a" }}>入試の特徴</p>
                    <p className="text-sm leading-relaxed" style={{ color: "#6b7280" }}>{school.examStyle}</p>
                  </div>
                </div>
                <div className="p-5 rounded-xl bg-white" style={{ border: "1px solid #e5e1d8" }}>
                  <p className="text-xs font-semibold tracking-wide mb-2" style={{ color: "#0c1a33" }}>合格への戦略</p>
                  <p className="text-sm leading-relaxed" style={{ color: "#3d3d3d" }}>{school.strategy}</p>
                </div>
              </div>
            </div>
          ))}
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
        heading="志望校別の対策を完全1対1で設計します"
        subtext="現役慶應医学部生が、あなたの志望校に特化した合格戦略を提案します。"
      />
    </div>
  );
}