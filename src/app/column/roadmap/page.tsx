import Link from "next/link";
import ColumnCTA from "@/components/ColumnCTA";
import ColumnArticleSchemas from "@/components/ColumnArticleSchemas";
import { buildHowToSchema } from "@/lib/seo";

const faqItems = [
  {
    q: "医学部受験のロードマップはいつから計画すべきですか？",
    a: "できるだけ早い段階で計画を立てることをお勧めします。理想は高1〜高2ですが、高3・浪人からでも計画を立てることで成果が大きく変わります。まず現状の学力と志望校を把握し、合格までの逆算スケジュールを作ることが最初のステップです。",
  },
  {
    q: "医学部受験で浪人するとどのくらい不利になりますか？",
    a: "浪人そのものは不利ではありません。多くの医学部では浪人生の合格者が現役生より多い年もあります。ただし「同じことをもう一回やる」だけでは成績は伸びません。前年の失敗原因を分析し、戦略を根本から見直すことが浪人成功の鍵です。",
  },
  {
    q: "高3の春から医学部対策を始めて現役合格できますか？",
    a: "可能ですが、志望校の選択と優先順位の徹底が必要です。特に私立医学部に絞り、科目負担を最小化した上で集中対策を行うことで、高3春スタートでも合格した生徒がいます。ただし計画設計の精度が非常に重要です。",
  },
  {
    q: "医学部受験のロードマップで最も重要なポイントは何ですか？",
    a: "「夏までに全科目の基礎を完成させること」が最重要です。秋以降に基礎が固まっていないと、過去問演習に移れず時間切れになります。特に理科は高3夏が最終期限だと意識して、計画を組みましょう。",
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
  { href: "/column/juken-timing", title: "医学部受験はいつから始めるべきか", label: "受験戦略" },
  { href: "/column/kakomon-timing", title: "医学部受験の過去問はいつから始めるべきか", label: "受験戦略" },
  { href: "/column/study-method", title: "医学部合格のための正しい勉強法", label: "勉強法" },
];

export const metadata = {
  title: "【医学部受験ロードマップ】いつから何をする？学年・時期別の合格戦略 | Medvance",
  description:
    "現役慶應医学生が教える医学部合格ロードマップ。高1・高2からの英語・数学の先取り、高3夏の理科完成、秋からの過去問＆面接・小論文対策、さらに浪人生・再受験生の逆転合格に向けた月別アクションプランを完全解説。",

  alternates: {
    canonical: "/column/roadmap",
  },
};

const roadmap = [
  {
    grade: "高校1年生",
    icon: "高1",
    focus: "基礎力の構築",
    body: "英語と数学の基礎を徹底的に固める時期。この時期にしっかりした土台を作ることが、高3・浪人期の伸びに直結します。医学部を目指すなら、英語は文法・語彙から丁寧に、数学は「なぜそうなるか」を理解しながら進めましょう。定期テストで手を抜かず、学校の授業を最大限に活用することが大切です。",
    actions: ["英語の文法・語彙の体系的習得", "数学の概念理解を最優先に", "定期テストで確実に点数を取る習慣"],
  },
  {
    grade: "高校2年生",
    icon: "高2",
    focus: "主要科目の完成",
    body: "英語・数学・理科の本格的な受験勉強を開始する時期。高2の終わりまでに英数の基礎を完成させることが理想です。理科（物理・化学または生物）もこの時期から本格的に取り組み始めます。高3になってから理科ゼロスタートでは間に合わないことが多いため、高2のうちに基礎を固めておきましょう。",
    actions: ["英語・数学の応用問題演習開始", "物理・化学（または生物）の基礎固め", "志望校の過去問に初めて目を通す"],
  },
  {
    grade: "高校3年生",
    icon: "高3",
    focus: "仕上げと過去問演習",
    body: "いよいよ本番の年。夏までに全科目の基礎を完成させ、秋以降は過去問演習と弱点補強を繰り返します。共通テスト対策（国公立志望の場合）も夏以降に本格化。面接・小論文の準備も10〜11月には始めましょう。直前期は新しいことに手を出さず、これまでの学習を確認・定着させることに集中します。",
    actions: ["夏までに全科目の基礎完成", "秋から過去問演習を本格化", "10〜11月に面接・小論文対策開始"],
  },
  {
    grade: "浪人・再受験",
    icon: "浪人",
    focus: "戦略的な1年間の設計",
    body: "現役時の反省を踏まえた、より戦略的な学習が必要です。「同じ勉強を繰り返さない」ことが最重要。なぜ去年不合格だったかを分析し、弱点を根本から解消する計画を立てます。予備校に通う場合でも、講師との1対1の補完的な指導を組み合わせることで、より効果的な学習が可能です。",
    actions: ["現役時の失敗原因の徹底分析", "弱点を根本から解消する計画設計", "5月頃から志望校の過去問に着手"],
  },
];

const ngActions = [
  {
    title: "「まだ早い」と後回しにする",
    body: "「高3になってから本気を出す」という考えは非常に危険です。医学部受験は準備期間が長いほど有利。早期スタートが合格確率を大きく高めます。",
  },
  {
    title: "計画なしに勉強を始める",
    body: "やみくもに勉強時間を積み重ねても成績は伸びません。現状の学力を把握し、合格までの道筋を逆算した計画を立ててから学習を始めることが重要です。",
  },
  {
    title: "模試の結果に一喜一憂する",
    body: "模試は現状把握のツールであり、合否の判定ではありません。判定が悪くても、それを次の学習改善のヒントとして使えれば十分。感情的になる必要はありません。",
  },
];

const howToSchema = buildHowToSchema({
  name: "医学部受験ロードマップ｜学年別の進め方",
  description: "高1・高2・高3・浪人/再受験それぞれの段階で、医学部合格に向けてやるべきことを学年別に整理した受験ロードマップ。",
  path: "/column/roadmap",
  steps: roadmap.map((r) => ({
    name: `${r.grade}｜${r.focus}`,
    text: `${r.body} 実践: ${r.actions.join("、")}`,
  })),
});

export default function RoadmapPage() {
  return (
    <div className="min-h-screen bg-white">
      <ColumnArticleSchemas slug="roadmap" articleOnly />
      <script type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([faqSchema, howToSchema]) }}
      />
      <div style={{ backgroundColor: "#0c1a33" }} className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#c9922a" }}>
            コラム
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-noto-serif)" }}>
            医学部受験ロードマップ：いつから・何をすべきか
          </h1>
          <p className="text-base" style={{ color: "rgba(255,255,255,0.65)" }}>
            現役慶應医学部生が、合格への道筋を解説します
          </p>
        </div>
      </div>

      <div className="py-16 px-4" style={{ backgroundColor: "#f7f5f0" }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-10" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>
            学年別ロードマップ
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {roadmap.map((item, i) => (
              <div key={i} className="p-6 rounded-2xl bg-white" style={{ border: "1px solid #e5e1d8" }}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center text-white text-xs font-bold" style={{ backgroundColor: "#c9922a" }}>
                    {item.icon}
                  </div>
                  <div>
                    <p className="font-bold text-sm" style={{ color: "#0c1a33" }}>{item.grade}</p>
                    <p className="text-xs" style={{ color: "#c9922a" }}>{item.focus}</p>
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

      <div className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-4" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>
            高3生：何月までに何を終わらせるべきか
          </h2>
          <p className="text-center text-sm mb-10 max-w-2xl mx-auto" style={{ color: "#6b7280" }}>
            高3の1年間は「あっという間」です。漠然と過ごすと9月に「まだ基礎が終わっていない」という事態になりがちです。月ごとの目標を意識して進めましょう。
          </p>
          <div className="space-y-3 mb-16">
            {[
              { month: "4月", goal: "現状の学力を正確に把握", detail: "模試を受けて弱点を洗い出す。志望校を仮決定し、合格に必要な学力とのギャップを確認。勉強の優先順位を決める時期。" },
              { month: "5月〜6月", goal: "英語・数学の基礎固め完成", detail: "英文法と数学の公式・定理の理解を徹底。「なんとなく解ける」状態から「根拠をもって解ける」状態に引き上げることが目標。" },
              { month: "7月〜8月", goal: "理科の基礎を完成・全科目応用開始", detail: "夏は理科に集中投資するチャンス。物理・化学（または生物）の基礎を仕上げ、英語・数学は応用問題演習へ移行。1日8〜10時間の本格的な勉強時間を確保する。" },
              { month: "9月〜10月", goal: "志望校の過去問を開始", detail: "秋模試で志望校の判定を確認しながら、過去問演習を開始。「本番で何が出るか」の感覚をつかむことが優先。弱点が見えたら即補強。" },
              { month: "11月〜12月", goal: "面接・小論文の対策を本格化", detail: "面接は「ぶっつけ本番」が最も危険なパターン。11月には模擬面接を始め、自分の言葉で答える練習を積む。小論文も志望校の過去テーマを分析して練習。" },
              { month: "1月", goal: "直前期：新しいことはしない", detail: "これまでの復習と定着確認に集中。新参考書・新範囲への手出しは厳禁。睡眠・体調管理を最優先し、本番当日のパフォーマンスを最大化することだけを考える。" },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 p-5 rounded-xl bg-white" style={{ border: "1px solid #e5e1d8" }}>
                <div className="flex-shrink-0">
                  <span className="text-xs font-bold px-3 py-1 rounded-full text-white inline-block" style={{ backgroundColor: "#c9922a", minWidth: "60px", textAlign: "center" }}>{item.month}</span>
                </div>
                <div>
                  <p className="font-bold text-sm mb-1" style={{ color: "#0c1a33" }}>{item.goal}</p>
                  <p className="text-xs leading-relaxed" style={{ color: "#6b7280" }}>{item.detail}</p>
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-center mb-4" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>
            浪人生のロードマップ
          </h2>
          <p className="text-center text-sm mb-10 max-w-2xl mx-auto" style={{ color: "#6b7280" }}>
            浪人は「高3をもう一回やる」ではありません。なぜ去年落ちたかを分析し、同じ失敗を繰り返さない1年を設計することが最も重要です。
          </p>
          <div className="space-y-3 mb-16">
            {[
              { month: "4月", goal: "去年の失敗を徹底分析", detail: "どの科目・どの問題形式で点が取れなかったかを過去の模試・入試結果から整理。「感覚的に苦手」ではなく、データをもとに弱点を特定する。この分析が浪人1年の学習の方向性を決める。" },
              { month: "5月〜7月", goal: "弱点の根本解消に集中", detail: "基礎に戻ることを恐れない。「わかっているつもり」の概念ほど危ない。授業のわかりやすさより、自分が本当に理解できているかの確認を最優先にする。" },
              { month: "8月〜9月", goal: "模試を活用した実戦力強化", detail: "夏の記述模試・マーク模試を通じて、本番形式での弱点を再確認。模試は「受けっぱなし」が最もムダ。翌日に必ず復習し、次の学習テーマを更新する。" },
              { month: "10月〜11月", goal: "志望校の過去問を徹底的にやり込む", detail: "各大学の出題傾向に合わせた対策に集中する時期。慶應なら論述、慈恵なら英語速読、日医なら数学難問対策——志望校別に学習の色を変える。面接・小論文も並行して進める。" },
              { month: "12月〜1月", goal: "直前期：仕上げと確認", detail: "やってきたことを信じる時期。不安から新しい参考書に手を出すのは厳禁。弱点の最終確認と、本番シミュレーション（時間配分の確認等）に集中する。睡眠を削らない。" },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 p-5 rounded-xl" style={{ backgroundColor: "#f7f5f0", border: "1px solid #e5e1d8" }}>
                <div className="flex-shrink-0">
                  <span className="text-xs font-bold px-3 py-1 rounded-full text-white inline-block" style={{ backgroundColor: "#0c1a33", minWidth: "60px", textAlign: "center" }}>{item.month}</span>
                </div>
                <div>
                  <p className="font-bold text-sm mb-1" style={{ color: "#0c1a33" }}>{item.goal}</p>
                  <p className="text-xs leading-relaxed" style={{ color: "#6b7280" }}>{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="py-16 px-4" style={{ backgroundColor: "#f7f5f0" }}>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-6" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>
            「いつから始めれば間に合う？」への回答
          </h2>
          <div className="p-8 rounded-2xl" style={{ backgroundColor: "#f7f5f0", border: "1px solid #e5e1d8" }}>
            <p className="text-sm leading-relaxed" style={{ color: "#3d3d3d" }}>
              結論から言えば、「今すぐ始めること」が最善です。高1でも高3でも、あるいは浪人・再受験生であっても、スタートは早ければ早いほど選択肢が広がります。ただし、スタート時期によって必要な戦略は変わります。高3の秋から始めた場合でも、適切な戦略と集中した取り組みで合格を勝ち取ったケースがあります。まず現状を把握し、合格までに必要なことを逆算することが重要です。「間に合うかどうか」はMedvanceの無料相談でお答えします。
            </p>
          </div>
        </div>
      </div>

      <div className="py-16 px-4" style={{ backgroundColor: "#f7f5f0" }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-10" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>
            やってはいけないNG行動
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {ngActions.map((item, i) => (
              <div key={i} className="p-6 rounded-2xl bg-white" style={{ border: "1px solid #e5e1d8" }}>
                <p className="font-bold text-sm mb-3" style={{ color: "#0c1a33" }}>NG {i + 1}. {item.title}</p>
                <p className="text-sm leading-relaxed" style={{ color: "#6b7280" }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="py-16 px-4" style={{ backgroundColor: "#f7f5f0" }}>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-8" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>
            よくある質問
          </h2>
          <div className="space-y-4 mb-12">
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
        heading="あなた専用のロードマップを、一緒に設計します"
        subtext="現状の学力・志望校・スケジュールをヒアリングして、合格までの最短ルートを一緒に描きます。"
      />
    </div>
  );
}
