import Link from "next/link";
import ColumnCTA from "@/components/ColumnCTA";

const faqItems = [
  {
    q: "医学部小論文の対策はいつから始めればいいですか？",
    a: "遅くとも本番の3ヶ月前には始めることをお勧めします。ただし基本的な「書き方の型」を知るだけなら1〜2ヶ月でも習得可能です。問題は「型を知る」だけでは合格答案が書けない点です。テーマ知識（生命倫理・医療制度・AI医療など）を蓄積するには、継続的な読書・情報収集が必要なため、できれば受験の半年前から準備を始めると理想的です。",
  },
  {
    q: "医学部小論文でよく出るテーマは何ですか？",
    a: "主なテーマは①医師の使命・医療倫理、②生命倫理（安楽死・臓器移植・出生前診断など）、③医療制度・社会保障、④AI・テクノロジーと医療、⑤地域医療・医師不足、⑥コミュニケーション能力・患者との関係、⑦医師のワークライフバランス などです。時事問題（コロナ後の医療体制など）が出ることもあります。",
  },
  {
    q: "医学部小論文で字数はどれくらい書けばいいですか？",
    a: "指定字数の90%以上を埋めることが基本です。800字指定なら720字以上、1000字指定なら900字以上を目安にしましょう。ただし「字数を埋めるために無関係な内容を加える」のは逆効果です。論旨を明確に保ちながら規定字数に近づけることが重要です。",
  },
  {
    q: "医学部小論文の点数配分はどのくらいですか？",
    a: "大学によって異なりますが、一般的に面接と小論文の合計で全体の10〜30%程度を占める大学が多いです。慶應義塾大学医学部では小論文の配点が高く、合否に直結することがあります。筆記試験が通過ラインを超えた後に差をつける要素として非常に重要です。",
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
  { href: "/column/mensetu", title: "医学部面接対策の完全ガイド", label: "面接対策" },
  { href: "/column/difference", title: "医学部に受かる人・落ちる人の違い", label: "合格分析" },
  { href: "/column/keio-guide", title: "慶應義塾大学医学部の入試完全ガイド", label: "大学別対策" },
];

export const metadata = {
  title: "医学部小論文の書き方・完全対策ガイド｜頻出テーマと合格答案の作り方 | Medvance",
  description:
    "医学部小論文の頻出テーマ・書き方の型・採点基準・対策スケジュールを現役慶應医学部生が解説。生命倫理・医療制度など頻出テーマへの対応法も詳しく紹介します。",

  alternates: {
    canonical: "/column/shobun",
  },};

const themes = [
  {
    category: "医師の使命・医療倫理",
    examples: ["医師として大切にしたいこと", "医師と患者の関係性", "インフォームドコンセントについて"],
    tip: "「医師になりたい理由」と連動させると一貫した答案が書きやすい。実体験や志望動機と絡めて論じることが多い。",
  },
  {
    category: "生命倫理",
    examples: ["安楽死・尊厳死について", "臓器移植の倫理", "出生前診断・遺伝子検査の問題"],
    tip: "「賛成・反対」の二項対立で終わらず、「誰がどんな状況で苦しんでいるか」という視点を入れると深みが出る。",
  },
  {
    category: "医療制度・社会保障",
    examples: ["日本の医療費問題", "地域医療の課題", "医師の働き方改革"],
    tip: "現状・課題・対策の3段構成で書くと整理しやすい。日本の制度についての基礎知識が必要。",
  },
  {
    category: "AI・テクノロジーと医療",
    examples: ["AIと医師の役割分担", "電子カルテ・遠隔医療の可能性", "ゲノム医療の未来"],
    tip: "「AIが医師を代替できるか」という問いは頻出。テクノロジーの限界と医師にしかできないことを対比させると論点が明確になる。",
  },
];

const writingSteps = [
  {
    step: "01",
    title: "問いを正確に把握する（2〜3分）",
    body: "何を問われているのかを明確にします。「あなたの意見を述べよ」なのか、「問題点を挙げ解決策を論じよ」なのかによって構成が変わります。読み飛ばして書き始めるのが最大の失敗パターン。",
  },
  {
    step: "02",
    title: "構成メモを書く（5分）",
    body: "いきなり本文を書き始めず、「序論・本論・結論で何を書くか」を3〜5行でメモします。このメモの質が答案の質を決めます。",
  },
  {
    step: "03",
    title: "序論（200字程度）",
    body: "問いに対する自分の主張・立場を明確に示します。「〜と私は考える」「〜という観点から論じる」という形で、読者（採点者）に「この答案は何を論じるか」を伝えます。",
  },
  {
    step: "04",
    title: "本論（800字中500〜600字）",
    body: "主張の根拠を2〜3つ挙げて展開します。「理由1：〜、理由2：〜」のように番号を振ると読みやすい。具体的な事例・データ・実体験を入れると説得力が増します。",
  },
  {
    step: "05",
    title: "結論（100〜150字）",
    body: "序論の主張を言い換えながら、「医師として自分はどう行動するか」という形で締めると医学部小論文らしい結びになります。",
  },
];

const ngPoints = [
  {
    ng: "「私も医師の家族に助けられました」だけで終わる",
    why: "感情論・経験談だけでは論文になりません。「体験→考察→主張」の流れが必要。",
  },
  {
    ng: "「〜だと思います」「〜かもしれません」ばかり",
    why: "論文は断言が基本。「〜である」「〜と考えられる」という表現を使う。",
  },
  {
    ng: "字数が余っているから例を増やす",
    why: "論旨と無関係な例を加えると論点がぼやけます。字数が余るなら本論の根拠を深掘りする。",
  },
  {
    ng: "テーマを表面的になぞるだけ",
    why: "「安楽死には賛否両論あります」という当たり前の内容だけでは評価されません。自分の視点・立場を明確に出すことが重要。",
  },
];

export default function ShobunPage() {
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
            医学部小論文の書き方・完全対策ガイド
          </h1>
          <p className="text-base" style={{ color: "rgba(255,255,255,0.65)" }}>
            頻出テーマ・構成の型・採点基準を現役慶應医学部生が解説
          </p>
        </div>
      </div>

      <div className="py-16 px-4" style={{ backgroundColor: "#f7f5f0" }}>
        <div className="max-w-3xl mx-auto">
          <div className="p-8 rounded-2xl bg-white mb-8" style={{ border: "1px solid #e5e1d8" }}>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "#3d3d3d" }}>
              医学部小論文は「文章を書く練習をすれば受かる」ほど単純ではありません。出題されるテーマには一定の傾向があり、どのテーマが来ても対応できる「知識の土台」と「論述の型」を両方持っていることが合格への条件です。
            </p>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "#3d3d3d" }}>
              慶應義塾大学医学部をはじめ、私立医学部上位校では小論文・面接が合否に直結することがあります。筆記試験で通過ラインを超えても、小論文・面接で落とされるケースは珍しくありません。
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#3d3d3d" }}>
              このページでは、頻出テーマの傾向・答案の書き方・よくあるNGパターンを解説します。
            </p>
          </div>
        </div>
      </div>

      <div className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-10" style={{ color: "#0c1a33", fontFamily: "'Noto Serif JP', serif" }}>
            医学部小論文の頻出テーマ
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {themes.map((item, i) => (
              <div key={i} className="p-6 rounded-2xl" style={{ backgroundColor: "#f7f5f0", border: "1px solid #e5e1d8" }}>
                <p className="font-bold text-base mb-3" style={{ color: "#c9922a" }}>{item.category}</p>
                <div className="mb-3">
                  <p className="text-xs font-semibold mb-2" style={{ color: "#0c1a33" }}>出題例</p>
                  <ul className="space-y-1">
                    {item.examples.map((ex, j) => (
                      <li key={j} className="text-xs flex gap-2" style={{ color: "#3d3d3d" }}>
                        <span style={{ color: "#c9922a" }}>→</span>{ex}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="pt-3" style={{ borderTop: "1px solid #e5e1d8" }}>
                  <p className="text-xs leading-relaxed" style={{ color: "#6b7280" }}>
                    <span className="font-semibold" style={{ color: "#0c1a33" }}>対策のコツ：</span>{item.tip}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="py-16 px-4" style={{ backgroundColor: "#f7f5f0" }}>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-4" style={{ color: "#0c1a33", fontFamily: "'Noto Serif JP', serif" }}>
            合格答案の書き方：5ステップ
          </h2>
          <p className="text-sm mb-10" style={{ color: "#6b7280" }}>
            800字の小論文を例に、時間配分と構成を解説します。
          </p>
          <div className="space-y-4">
            {writingSteps.map((item, i) => (
              <div key={i} className="flex gap-4 p-6 rounded-2xl bg-white" style={{ border: "1px solid #e5e1d8" }}>
                <span className="text-2xl font-bold flex-shrink-0" style={{ color: "#c9922a" }}>{item.step}</span>
                <div>
                  <p className="font-bold text-base mb-2" style={{ color: "#0c1a33" }}>{item.title}</p>
                  <p className="text-sm leading-relaxed" style={{ color: "#6b7280" }}>{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-10" style={{ color: "#0c1a33", fontFamily: "'Noto Serif JP', serif" }}>
            採点者が気にするNGパターン
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {ngPoints.map((item, i) => (
              <div key={i} className="p-6 rounded-2xl" style={{ backgroundColor: "#f7f5f0", border: "1px solid #e5e1d8" }}>
                <p className="font-bold text-sm mb-2" style={{ color: "#0c1a33" }}>
                  <span style={{ color: "#e53e3e" }}>✗ </span>{item.ng}
                </p>
                <p className="text-sm leading-relaxed" style={{ color: "#6b7280" }}>{item.why}</p>
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
        heading="小論文・面接の個別指導もMedvanceにお任せください"
        subtext="現役慶應医学部生が答案の添削から模擬面接まで徹底サポート。筆記試験後の差をつける二次対策もお任せください。"
      />
    </div>
  );
}
