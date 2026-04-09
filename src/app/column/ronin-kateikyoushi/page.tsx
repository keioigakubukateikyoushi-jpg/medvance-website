import Link from "next/link";
import ColumnCTA from "@/components/ColumnCTA";

const faqItems = [
  {
    q: "医学部浪人生に家庭教師は必要ですか？",
    a: "浪人生こそ家庭教師が最も効果を発揮するタイミングです。「なぜ落ちたか」の分析が正確でなければ、同じ失敗を繰り返します。家庭教師なら前回の失敗原因を個別に分析し、今年の合格に向けた最短戦略を立て直すことができます。",
  },
  {
    q: "医学部浪人中に家庭教師と予備校を併用できますか？",
    a: "できます。多くの浪人生が予備校の集団授業で知識を体系的に学びながら、家庭教師で弱点補強・面接対策・志望校別の個別戦略を補う形で併用しています。",
  },
  {
    q: "医学部浪人1年目と2年目以降で家庭教師の使い方は変わりますか？",
    a: "変わります。1年目は「前回の失敗分析と戦略再設計」から始め、弱点科目の底上げを優先します。2年目以降は「なぜまた落ちたか」をより深く掘り下げ、学力以外の要因（面接・小論文・精神面）にもフォーカスする場合が多いです。",
  },
  {
    q: "浪人生向けの家庭教師の料金はいくらですか？",
    a: "週1回コースであれば月8万円程度〜が相場です。浪人生は週2〜3回の頻度で受ける方も多く、月14〜20万円台になるケースもあります。Medvanceでは全コースにコーチングが含まれているため、別途管理費用は発生しません。",
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
  { href: "/column/ronin-april-plan", title: "医学部受験の浪人生が4月にやるべきこと", label: "浪人" },
  { href: "/for/ronin", title: "浪人生向け指導プラン", label: "浪人向け" },
];

const roninProblems = [
  {
    title: "「なぜ落ちたか」の分析が不正確",
    body: "「勉強時間が足りなかった」「メンタルが弱かった」といった表面的な分析では今年も同じ結果になります。科目別の点数分析・試験中の時間配分・面接の出来まで、落ちた本当の原因を一緒に解明することが浪人の出発点です。",
  },
  {
    title: "弱点科目が特定できていない",
    body: "同じ勉強量でも「どこに集中するか」で結果が大きく変わります。家庭教師が前年の模試・入試結果を分析し、最も伸びしろのある科目・分野を特定した上で、今年の学習計画を設計します。",
  },
  {
    title: "面接・小論文で毎年落とされている",
    body: "複数回浪人している受験生の中には「学力は十分なのに面接で落ちる」ケースが少なくありません。家庭教師なら模擬面接を繰り返し、「なぜ面接で落とされているか」を具体的に改善できます。",
  },
  {
    title: "メンタル・自己管理が崩れる",
    body: "浪人生は孤独な環境で長期戦を戦います。担当講師が毎週の進捗を確認し、メンタルが落ちた時にも対応できる伴走型のサポートは、予備校の集団指導では得られません。",
  },
];

const roninPoints = [
  {
    num: "01",
    title: "前回の失敗分析からスタート",
    body: "前年の模試・入試結果・面接評価を共有していただき、「なぜ落ちたか」を徹底分析。今年こそ合格するための戦略を最初に設計します。",
  },
  {
    num: "02",
    title: "弱点に絞った個別カリキュラム",
    body: "全科目を均等にやり直す必要はありません。前年の結果を踏まえ「今年最も伸ばすべき科目・分野」に絞って集中指導します。",
  },
  {
    num: "03",
    title: "面接・小論文を早期から仕上げる",
    body: "浪人生は「また落ちたら」というプレッシャーがあります。学科と並行して面接・小論文の準備を4月から始め、直前に焦らない体制を作ります。",
  },
  {
    num: "04",
    title: "毎日の学習管理で孤独な浪人を支える",
    body: "LINEでの毎日の進捗確認・24時間の質問対応。浪人中の精神的な浮き沈みにも対応しながら、合格まで走り切れるようサポートします。",
  },
];

export const metadata = {
  title: "医学部浪人生に家庭教師が最適な理由｜失敗分析から合格へ | Medvance",
  description:
    "医学部浪人生こそ家庭教師が最も効果を発揮します。前回の失敗原因の分析・弱点特定・面接対策まで、現役慶應医学部生が完全1対1でサポート。全国オンライン対応。",
  keywords: [
    "医学部 浪人 家庭教師",
    "医学部受験 浪人生 個別指導",
    "医学部浪人 家庭教師 おすすめ",
    "浪人 医学部 再受験 家庭教師",
  ],
  alternates: {
    canonical: "/column/ronin-kateikyoushi",
  },
};

export default function RoninKateikyoushiPage() {
  return (
    <div className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div style={{ backgroundColor: "#0c1a33" }} className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#c9922a" }}>浪人生向け</p>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-noto-serif)" }}>
            医学部浪人生に家庭教師が最適な理由
          </h1>
          <p className="text-base" style={{ color: "rgba(255,255,255,0.65)" }}>
            前回の失敗を分析し、今年こそ合格する戦略を現役慶應医学部生が設計する
          </p>
        </div>
      </div>

      <div className="py-16 px-4" style={{ backgroundColor: "#f7f5f0" }}>
        <div className="max-w-3xl mx-auto">
          <div className="p-8 rounded-2xl bg-white" style={{ border: "1px solid #e5e1d8" }}>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "#3d3d3d" }}>
              医学部の浪人生が家庭教師を選ぶ理由は明確です——「同じ失敗を繰り返したくない」からです。
            </p>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "#3d3d3d" }}>
              予備校のカリキュラムは全員同じです。「なぜ前回落ちたか」の分析も、「自分の弱点に特化した指導」も、集団授業では得られません。家庭教師が最も威力を発揮するのは、実は浪人生においてです。
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#3d3d3d" }}>
              Medvanceでは多浪経験者・地方出身者など多様な合格経験を持つ講師が在籍しており、あなたの状況に最も近い「リアルな合格者」の知恵を直接借りることができます。
            </p>
          </div>
        </div>
      </div>

      <div className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-2 text-center" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>
            浪人生が家庭教師なしでは解決しにくい4つの問題
          </h2>
          <p className="text-sm text-center mb-10" style={{ color: "#6b7280" }}>
            これらが放置されたまま浪人しても、結果は変わりません
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {roninProblems.map((item, i) => (
              <div key={i} className="p-6 rounded-2xl" style={{ backgroundColor: "#f7f5f0", border: "1px solid #e5e1d8" }}>
                <p className="font-bold text-sm mb-1" style={{ color: "#c9922a" }}>問題 0{i + 1}</p>
                <p className="font-bold text-base mb-3" style={{ color: "#0c1a33" }}>{item.title}</p>
                <p className="text-sm leading-relaxed" style={{ color: "#6b7280" }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="py-16 px-4" style={{ backgroundColor: "#f7f5f0" }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-2 text-center" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>
            Medvanceが浪人生に提供する4つのサポート
          </h2>
          <p className="text-sm text-center mb-10" style={{ color: "#6b7280" }}>
            「今年こそ合格する」ための戦略を最初に設計します
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {roninPoints.map((item) => (
              <div key={item.num} className="p-6 rounded-2xl bg-white" style={{ border: "1px solid #e5e1d8" }}>
                <p className="font-bold text-sm mb-2" style={{ color: "#c9922a" }}>{item.num}</p>
                <p className="font-bold text-base mb-3" style={{ color: "#0c1a33" }}>{item.title}</p>
                <p className="text-sm leading-relaxed" style={{ color: "#6b7280" }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-6" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>
            浪人生からの相談でよく聞く声
          </h2>
          <div className="space-y-4">
            {[
              { voice: "「予備校の授業は受けているが、弱点がいつまでも残る。何が足りないのか分からない。」" },
              { voice: "「昨年は学力は十分と思っていたが、面接で落とされた。面接の何が悪かったのか、誰にも教えてもらえなかった。」" },
              { voice: "「自分ひとりで計画を立てると、いつも崩れる。管理してくれる人が必要。」" },
              { voice: "「地方に住んでいるので、いい先生に出会えない。慶應に受かった人の話を直接聞きたい。」" },
            ].map((item, i) => (
              <div key={i} className="p-5 rounded-xl" style={{ backgroundColor: "#f7f5f0", border: "1px solid #e5e1d8", borderLeft: "3px solid #c9922a" }}>
                <p className="text-sm leading-relaxed italic" style={{ color: "#3d3d3d" }}>{item.voice}</p>
              </div>
            ))}
          </div>
          <p className="text-sm leading-relaxed mt-6" style={{ color: "#6b7280" }}>
            これらすべての悩みに、Medvanceは完全1対1で個別に対応します。まずは<Link href="/contact" style={{ color: "#c9922a" }} className="underline">無料相談</Link>で現状をお聞かせください。
          </p>
        </div>
      </div>

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
        heading="浪人生の方、まず失敗の原因を一緒に分析します"
        subtext="現役慶應医学部生が前回の入試結果を分析し、今年合格するための戦略を設計します。無料相談受付中。"
      />
    </div>
  );
}
