import Link from "next/link";
import ColumnCTA from "@/components/ColumnCTA";

export const metadata = {
  title: "医学部受験はいつから始めるべきか｜現役慶應医学部生が解説 | Medvance",
  description:
    "医学部受験はいつから始めるべきか？高1・高2・高3・浪人・再受験生それぞれの最適なスタート時期と準備内容を現役慶應医学部生が解説。「何年生から始めれば間に合う？」という疑問に完全回答します。",
  keywords: ["医学部受験 いつから", "医学部 何年生から", "医学部受験 スタート", "医学部 高1から", "医学部 高2から"],
};

const timingData = [
  {
    grade: "高校1年生",
    icon: "高1",
    verdict: "理想的なスタート",
    color: "#c9922a",
    body: "高1からのスタートは、医学部合格において最もアドバンテージが高い時期です。英語と数学の基礎を2〜3年かけてじっくり固める時間があるため、急いで詰め込む必要がありません。この時期は「量より理解の深さ」を優先し、本質的な学力を積み上げましょう。",
    actions: [
      "英語：文法・語彙の体系的な習得（毎日継続が鍵）",
      "数学：概念理解を最優先。なぜその公式が成り立つかを理解する",
      "定期テストで安定した成績を維持する習慣づくり",
      "志望校の過去問を一度眺めて「ゴール」のイメージをつかむ",
    ],
  },
  {
    grade: "高校2年生",
    icon: "高2",
    verdict: "十分間に合う",
    color: "#c9922a",
    body: "高2からでも十分に医学部合格を狙えます。ただし、高3でゼロから理科を始めると手遅れになりやすいため、高2の間に英語・数学・理科の基礎を固めることが優先事項です。夏休みを活用して集中的に取り組むと、高3以降が楽になります。",
    actions: [
      "英語・数学：基礎から応用への橋渡しを意識した学習",
      "物理・化学（または生物）の基礎固めを高2中に完了させる",
      "高2秋〜冬：志望校を仮決定し、必要な科目・難易度を把握",
      "高2終わりまでに英語・数学の土台を完成させることが理想",
    ],
  },
  {
    grade: "高校3年生",
    icon: "高3",
    verdict: "戦略次第で逆転可能",
    color: "#6b7280",
    body: "高3からのスタートは時間が限られていますが、正しい戦略と優先順位の徹底で合格を目指せます。「全部やろうとしない」ことが重要。科目を絞り、志望校に合わせた的確な対策に集中することで、短期間での成績向上が可能です。",
    actions: [
      "最初の1ヶ月：現状の学力を正確に把握し、弱点を洗い出す",
      "私立医学部を軸に志望校を絞り込み、科目負担を最小化",
      "夏休みは理科の集中強化に充てる（1日の半分以上を理科に）",
      "秋以降は過去問演習と弱点補強を繰り返す",
    ],
  },
  {
    grade: "浪人・再受験",
    icon: "浪人",
    verdict: "リセットして戦略を立て直す",
    color: "#0c1a33",
    body: "浪人・再受験の場合は「同じことをもう一度やらない」ことが最重要です。なぜ去年不合格だったかを徹底的に分析し、その原因を根本から解消する計画を立てることで、1年以内の合格が十分に可能です。",
    actions: [
      "4月：前回の入試・模試結果を分析し、失敗原因を特定",
      "弱点科目・分野を根本から解消するスケジュールを設計",
      "5月頃から志望校の過去問に着手し、ゴールを常に意識",
      "面接・小論文対策は秋以降に並行して進める",
    ],
  },
];

const faqItems = [
  {
    q: "医学部受験は何年生から始めれば間に合いますか？",
    a: "理想は高1からですが、高3からでも戦略次第で合格は十分に可能です。ただし、高3から始める場合は志望校の絞り込みと科目の優先順位設定が不可欠です。「いつから始めるか」より「正しい方法で始めるか」の方が重要です。",
  },
  {
    q: "中学生から医学部受験の準備を始めた方がいいですか？",
    a: "中学生では受験対策より「英数の基礎力」「読書習慣」「勉強の習慣化」に集中することをお勧めします。中学段階で英語と数学の土台を固めておくと、高校での医学部対策がスムーズに進みます。焦って難しいことをやる必要はありません。",
  },
  {
    q: "高3の夏から始めても医学部に合格できますか？",
    a: "不可能ではありませんが、非常に難しいです。高3夏からの場合は、私立医学部に絞った科目選択と、徹底した優先順位の設定が必要です。Medvanceでは現状を診断した上で、残り時間で最大限の成果を出すプランを設計します。",
  },
  {
    q: "社会人・大学生から医学部を目指すのは遅すぎますか？",
    a: "遅くはありません。再受験生の合格者は毎年多数います。社会人経験がある分、面接での説得力が増すケースもあります。学習計画の設計と科目の効率的な仕上げが重要で、Medvanceでは再受験生への専門的なサポートを行っています。",
  },
  {
    q: "高1・高2から始める場合、予備校と個別指導どちらがいいですか？",
    a: "高1・高2の段階では、大人数での授業より個別指導の方が「理解の深さ」を確認しながら進められるためお勧めです。特に数学や物理は概念の理解が重要なため、わからない点をその場で解消できる環境が大切です。",
  },
];

const relatedArticles = [
  { href: "/column/roadmap", title: "医学部受験ロードマップ：いつから・何をすべきか", label: "受験戦略" },
  { href: "/column/kakomon-timing", title: "医学部受験の過去問はいつから始めるべきか", label: "受験戦略" },
  { href: "/column/study-method", title: "医学部合格のための正しい勉強法", label: "勉強法" },
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

export default function JukenTimingPage() {
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
            医学部受験はいつから始めるべきか
          </h1>
          <p className="text-base" style={{ color: "rgba(255,255,255,0.65)" }}>
            高1・高2・高3・浪人・再受験——それぞれの最適なスタート時期を解説
          </p>
        </div>
      </div>

      <div className="py-16 px-4" style={{ backgroundColor: "#f7f5f0" }}>
        <div className="max-w-3xl mx-auto">
          <div className="p-8 rounded-2xl bg-white mb-8" style={{ border: "1px solid #e5e1d8" }}>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "#3d3d3d" }}>
              「医学部受験はいつから始めればいいですか？」——これは最もよく聞かれる相談の一つです。答えは一つではなく、現在の学年・学力・志望校によって異なります。
            </p>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "#3d3d3d" }}>
              ただし、一つだけ確実に言えることがあります。それは「今すぐ始めることが最善」ということです。どの学年から始めても、正しい戦略と方法論があれば医学部合格は十分に可能です。
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#3d3d3d" }}>
              このページでは、各学年・状況別の最適なスタート方法と、よくある「タイミングの失敗」を解説します。
            </p>
          </div>
        </div>
      </div>

      <div className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-10" style={{ color: "#0c1a33", fontFamily: "'Noto Serif JP', serif" }}>
            学年・状況別スタートガイド
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {timingData.map((item, i) => (
              <div key={i} className="p-6 rounded-2xl bg-white" style={{ border: "1px solid #e5e1d8" }}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center text-white text-xs font-bold" style={{ backgroundColor: item.color }}>
                    {item.icon}
                  </div>
                  <div>
                    <p className="font-bold text-sm" style={{ color: "#0c1a33" }}>{item.grade}</p>
                    <p className="text-xs font-semibold" style={{ color: item.color }}>{item.verdict}</p>
                  </div>
                </div>
                <p className="text-sm leading-relaxed mb-4" style={{ color: "#6b7280" }}>{item.body}</p>
                <ul className="space-y-1">
                  {item.actions.map((action, j) => (
                    <li key={j} className="flex items-start gap-2 text-xs" style={{ color: "#3d3d3d" }}>
                      <span style={{ color: "#c9922a" }}>→</span>
                      {action}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="py-16 px-4" style={{ backgroundColor: "#f7f5f0" }}>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-6" style={{ color: "#0c1a33", fontFamily: "'Noto Serif JP', serif" }}>
            「早く始めれば合格できる」は半分正解
          </h2>
          <div className="p-8 rounded-2xl bg-white" style={{ border: "1px solid #e5e1d8" }}>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "#3d3d3d" }}>
              医学部受験において「早期スタート＝有利」は概ね正しいですが、それだけが全てではありません。高1から始めても「ただ時間を費やしただけ」になってしまうケースも少なくありません。
            </p>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "#3d3d3d" }}>
              重要なのは「開始時期」と「学習の質」の両立です。どの時期からスタートしても、「何を理解し、何を定着させたか」を常に確認しながら進めることが合格への近道です。
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#3d3d3d" }}>
              Medvanceでは、現在の学年・学力・残り時間を正確に把握した上で、最短合格ルートを個別に設計します。「今からでは遅い」と諦める前に、まずは無料相談でご状況をお聞かせください。
            </p>
          </div>
        </div>
      </div>

      <div className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-8" style={{ color: "#0c1a33", fontFamily: "'Noto Serif JP', serif" }}>
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
                  className="flex items-center justify-between px-6 py-5 cursor-pointer font-semibold text-sm select-none list-none"
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

      <div className="py-16 px-4" style={{ backgroundColor: "#f7f5f0" }}>
        <div className="max-w-3xl mx-auto">
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
        heading="「今からでは遅い？」そう思ったらまず相談を"
        subtext="現在の状況を診断し、残り時間で最大限の結果を出すプランを設計します。"
      />
    </div>
  );
}
