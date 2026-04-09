import Link from "next/link";
import ColumnCTA from "@/components/ColumnCTA";

const faqItems = [
  {
    q: "慶應附属校で成績を上げるにはどうすればいいですか？",
    a: "慶應附属校の定期試験は学校独自のカリキュラムに基づいており、外部教材だけでは対応しにくいことがあります。最も効果的なのは、①試験範囲の優先順位をつけて集中的に対策する、②授業の理解度を毎週確認して穴をなくす、③試験前の2〜3週間を集中指導期に設定する、という3点です。",
  },
  {
    q: "慶應附属校の評定はどう決まりますか？",
    a: "学校・科目によって異なりますが、定期試験の点数が評定の大部分を占めます。一部の科目では授業態度・提出物・小テストも含まれます。内部進学では学期ごとの評定の積み重ねが選考に使われるため、高1・高2の段階から継続的に成績を管理することが重要です。",
  },
  {
    q: "苦手科目があっても内部進学で医学部に行けますか？",
    a: "可能ですが、苦手科目を放置すると全体の評定平均が下がります。内部進学では全科目のバランスが求められるケースが多いです。早期に苦手科目を特定し、家庭教師で集中的に底上げすることで、苦手を克服した合格者も多くいます。",
  },
  {
    q: "中学生から内部進学の対策を始めるべきですか？",
    a: "慶應普通部・中等部にいる中学生は、早期から始めることで大きく有利になります。中学での成績が直接内部進学の評価に使われる場合もあり、何より高校に上がったときの基礎学力が圧倒的に異なります。",
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
  { href: "/for/keio-naibu", title: "慶應内部進学で医学部へ｜Medvanceの指導内容", label: "内部進学対策" },
  { href: "/column/keio-naibu-kateikyoushi", title: "慶應医学部への内部進学に家庭教師が最適な理由", label: "家庭教師" },
  { href: "/column/keio-kateikyoushi", title: "慶應医学部の家庭教師", label: "慶應医学部" },
];

const subjectStrategies = [
  {
    subject: "英語",
    strategy: "慶應附属校の英語は独自教材を使うことが多く、文法・語彙の習得と読解速度の両立が求められます。定期試験の出題パターンを把握し、授業の予習・復習を徹底することで評定を安定させます。",
  },
  {
    subject: "数学",
    strategy: "内申に大きく影響する科目。証明問題・記述問題など、解き方だけでなく書き方も評価されます。試験前に典型問題を確実に解ける状態に仕上げ、応用問題への対応力も培います。",
  },
  {
    subject: "理科（物理・化学・生物）",
    strategy: "医学部志望として理科の評定は特に重要。実験レポートが評価に含まれる場合もあるため、概念理解と計算力を並行して高めます。特に化学・生物は暗記と理解のバランスが鍵です。",
  },
  {
    subject: "国語・社会",
    strategy: "評定の足を引っ張りやすい科目。全体平均を上げるためには、得意科目だけでなく苦手科目のフォローが必要です。試験前の重点対策で確実に点数を確保します。",
  },
];

export const metadata = {
  title: "慶應附属校の成績を上げて医学部内部進学へ｜科目別対策 | Medvance",
  description:
    "慶應附属校の定期試験・成績向上のための対策を解説。評定の上げ方、科目別の勉強法、内部進学選考への備えを現役慶應医学部生が指導。全国オンライン対応。",
  keywords: [
    "慶應義塾 内部進学 成績",
    "慶應附属校 成績 上げる",
    "慶應高校 内部進学 対策",
    "慶應 評定 上げる 家庭教師",
    "慶應義塾高校 定期試験 対策",
  ],
  alternates: {
    canonical: "/column/keio-naibu-seiseki",
  },
};

export default function KeioNaibuSeisekiPage() {
  return (
    <div className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div style={{ backgroundColor: "#0c1a33" }} className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#c9922a" }}>慶應附属校 成績対策</p>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-noto-serif)" }}>
            慶應附属校の成績を上げて<br />医学部内部進学へ
          </h1>
          <p className="text-base" style={{ color: "rgba(255,255,255,0.65)" }}>
            評定を確実に積み上げ、医学部進学枠を掴むための科目別戦略
          </p>
        </div>
      </div>

      <div className="py-16 px-4" style={{ backgroundColor: "#f7f5f0" }}>
        <div className="max-w-3xl mx-auto">
          <div className="p-8 rounded-2xl bg-white" style={{ border: "1px solid #e5e1d8" }}>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "#3d3d3d" }}>
              慶應義塾大学医学部への内部進学枠は毎年非常に限られています。附属校内で医学部を目指す生徒が競い合う中で勝ち残るには、「評定を継続的に高く保つ」という戦略が不可欠です。
            </p>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "#3d3d3d" }}>
              しかし、慶應附属校のカリキュラムは独自性が高く、外部の予備校や一般的な家庭教師では学校の授業・試験傾向に合わせた指導が難しいことがあります。
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#3d3d3d" }}>
              Medvanceでは、同じ慶應のカリキュラムを経験した現役医学部生が、科目別の定期試験対策から評定管理まで完全1対1で指導します。
            </p>
          </div>
        </div>
      </div>

      {/* TIPS TO RAISE GRADES */}
      <div className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-2 text-center" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>
            慶應附属校で評定を上げる3つの原則
          </h2>
          <p className="text-sm text-center mb-10" style={{ color: "#6b7280" }}>
            「なんとなく勉強する」から「評定を設計する」に切り替える
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                num: "01",
                title: "試験範囲の優先順位を決める",
                body: "すべてを均等にやろうとすると時間が足りません。「どこが出やすいか」「どこで点を確保するか」を先輩の視点から絞り込み、試験前の時間を最大限に活かします。",
              },
              {
                num: "02",
                title: "授業の理解度を毎週確認する",
                body: "定期試験の失敗の多くは、授業で「わかったつもり」になっていた箇所です。週ごとに授業内容の理解度を確認し、穴を積み上げないサイクルを作ります。",
              },
              {
                num: "03",
                title: "試験2〜3週間前から集中指導",
                body: "試験直前の集中が評定を大きく左右します。通常授業で基礎を固めながら、試験前には頻度を増やしてピンポイント対策。評定は計画的に作り出せます。",
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

      {/* SUBJECT STRATEGIES */}
      <div className="py-16 px-4" style={{ backgroundColor: "#f7f5f0" }}>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-6" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>
            科目別・評定向上戦略
          </h2>
          <div className="space-y-4">
            {subjectStrategies.map((item, i) => (
              <div key={i} className="p-6 rounded-2xl bg-white" style={{ border: "1px solid #e5e1d8" }}>
                <p className="font-bold text-base mb-2" style={{ color: "#0c1a33" }}>
                  <span style={{ color: "#c9922a" }}>— </span>{item.subject}
                </p>
                <p className="text-sm leading-relaxed" style={{ color: "#6b7280" }}>{item.strategy}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CHECKLIST */}
      <div className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-6" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>
            内部進学対策チェックリスト
          </h2>
          <div className="p-6 rounded-2xl" style={{ backgroundColor: "#f7f5f0", border: "1px solid #e5e1d8" }}>
            <ul className="space-y-3">
              {[
                "各科目の現在の評定・点数を把握している",
                "医学部進学枠に必要な評定水準を確認している",
                "定期試験の日程・範囲を事前に把握して計画を立てている",
                "苦手科目を放置せず、定期的に対策している",
                "志望動機・医師を目指す理由を自分の言葉で語れる",
                "万が一のために一般受験の準備も考えている",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm" style={{ color: "#3d3d3d" }}>
                  <span className="flex-shrink-0 w-5 h-5 rounded border-2 mt-0.5" style={{ borderColor: "#c9922a" }} />
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-xs mt-4" style={{ color: "#9ca3af" }}>
              チェックが全部つかない項目は、Medvanceの無料相談で一緒に整理しましょう。
            </p>
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
        heading="慶應附属校の成績向上・内部進学対策はMedvanceへ"
        subtext="評定管理から選考準備まで、現役慶應医学部生が一貫サポート。まずは無料相談でお気軽にご相談ください。"
      />
    </div>
  );
}
