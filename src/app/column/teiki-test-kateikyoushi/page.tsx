import Link from "next/link";
import ColumnCTA from "@/components/ColumnCTA";

const faqItems = [
  {
    q: "定期テスト対策はいつから始めれば良いですか？",
    a: "理想は試験の3週間前から始めることです。1週間前では範囲が広すぎて対策しきれないことが多く、2週間前でもギリギリです。3週間あれば「範囲の整理→基礎固め→演習→直前チェック」という流れができます。Medvanceでは試験日程を事前に把握し、逆算してスケジュールを設計します。",
  },
  {
    q: "学校によって試験範囲・難易度が違いますが対応できますか？",
    a: "はい、対応できます。Medvanceの指導は学校の教科書・配布プリント・副教材をベースに行います。学校ごとの試験スタイル（選択問題中心か記述中心かなど）も考慮して対策を組み立てます。",
  },
  {
    q: "テスト前だけの短期指導は可能ですか？",
    a: "はい、テスト前の集中期間だけのご利用も承っています。ただし、年間を通じて継続的に指導する方が成績の安定につながります。まずはテスト前の短期から始めて、継続するかどうか判断していただくことも可能です。",
  },
  {
    q: "全科目対応してもらえますか？",
    a: "英語・数学・理科（物理・化学・生物）・国語・社会の主要5科目に対応しています。苦手1科目から始めることも、複数科目を並行して対策することも可能です。どの科目から始めるべきかは無料相談でアドバイスします。",
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
  { href: "/column/seiseki-kateikyoushi", title: "学校の成績を上げるための家庭教師の選び方", label: "成績向上" },
  { href: "/for/seiseki-up", title: "学校の成績を上げたい方へ｜Medvanceの指導内容", label: "成績向上サービス" },
  { href: "/column/igakubu-kateikyoushi-hikaku", title: "医学部受験の家庭教師を比較・選び方まとめ", label: "家庭教師比較" },
];

const testStrategies = [
  {
    phase: "3週間前",
    title: "範囲の整理と優先順位づけ",
    body: "試験範囲全体を把握し、「確実に出る・点になる」箇所を先に特定します。全部を均等にやろうとせず、得点につながる優先度の高い単元から着手します。",
  },
  {
    phase: "2週間前",
    title: "基礎固め・穴の洗い出し",
    body: "優先単元の基礎的な問題を確実に解けるようにします。「わかったつもり」になっている箇所を発見し、理解を確実にする段階です。",
  },
  {
    phase: "1週間前",
    title: "演習・アウトプット強化",
    body: "学校の過去問・練習問題・予想問題を使って、制限時間内に解く練習をします。ミスしやすいパターンを把握し、本番で繰り返さないよう対策します。",
  },
  {
    phase: "直前3日",
    title: "弱点の最終確認",
    body: "これまでの指導で明らかになった弱点を集中的に確認します。新しいことに手を出すよりも、「解けるはずの問題を確実に解く」状態を作ることが優先です。",
  },
];

export const metadata = {
  title: "定期テスト対策に家庭教師が最も効果的な理由｜中学・高校生向け | Medvance",
  description:
    "定期テスト対策に家庭教師を使うべき理由を解説。学校ごとの試験範囲への対応、テスト前の集中指導スケジュール、塾との違いまで。現役慶應医学部生による完全1対1指導のMedvanceが選ばれる理由。",
  keywords: [
    "定期テスト対策 家庭教師",
    "定期試験 家庭教師 おすすめ",
    "中学 定期テスト 家庭教師",
    "高校 定期試験 個別指導",
    "内申点 定期テスト",
  ],
  alternates: {
    canonical: "/column/teiki-test-kateikyoushi",
  },
};

export default function TeikiTestKateikyoushiPage() {
  return (
    <div className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div style={{ backgroundColor: "#0c1a33" }} className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#c9922a" }}>定期テスト対策</p>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: "'Noto Serif JP', serif" }}>
            定期テスト対策に<br />家庭教師が最も効果的な理由
          </h1>
          <p className="text-base" style={{ color: "rgba(255,255,255,0.65)" }}>
            「学校の試験で点が取れない」を解決するための個別指導アプローチ
          </p>
        </div>
      </div>

      {/* INTRO */}
      <div className="py-16 px-4" style={{ backgroundColor: "#f7f5f0" }}>
        <div className="max-w-3xl mx-auto">
          <div className="p-8 rounded-2xl bg-white" style={{ border: "1px solid #e5e1d8" }}>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "#3d3d3d" }}>
              「毎日勉強しているのに定期テストの点が上がらない」「塾に通っているのに成績に反映されない」——この悩みの多くは、勉強の量ではなく方向性の問題です。
            </p>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "#3d3d3d" }}>
              定期テストに出るのは「学校の授業で扱った内容」です。集団塾や映像授業は体系的な学習には優れていますが、各学校の教科書・プリント・試験スタイルに合わせた対策は苦手です。
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#3d3d3d" }}>
              一方、家庭教師は学校の教材をベースに、その生徒の理解度に合わせてリアルタイムで指導を調整できます。定期テスト対策という目的においては、家庭教師が最も効果を発揮します。
            </p>
          </div>
        </div>
      </div>

      {/* TEST STRATEGY */}
      <div className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-2 text-center" style={{ color: "#0c1a33", fontFamily: "'Noto Serif JP', serif" }}>
            定期テスト対策の4段階スケジュール
          </h2>
          <p className="text-sm text-center mb-10" style={{ color: "#6b7280" }}>
            「3週間前から逆算する」が成績を上げる基本
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {testStrategies.map((item, i) => (
              <div key={i} className="p-6 rounded-2xl" style={{ backgroundColor: "#f7f5f0", border: "1px solid #e5e1d8" }}>
                <div className="flex items-center gap-3 mb-3">
                  <span className="inline-block text-xs font-bold px-3 py-1 rounded-full" style={{ backgroundColor: "#0c1a33", color: "#c9922a" }}>{item.phase}</span>
                  <p className="font-bold text-sm" style={{ color: "#0c1a33" }}>{item.title}</p>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: "#6b7280" }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* WHY SUBJECTS FAIL */}
      <div className="py-16 px-4" style={{ backgroundColor: "#f7f5f0" }}>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-6" style={{ color: "#0c1a33", fontFamily: "'Noto Serif JP', serif" }}>
            「成績が上がらない」3つの原因
          </h2>
          <div className="space-y-4">
            {[
              {
                cause: "原因1",
                title: "「わかったつもり」で演習が足りない",
                body: "授業や解説を聞いてわかった気がしても、自分で解けるようになっていないことがほとんどです。家庭教師では生徒が実際に問題を解くのを見ながら、理解の確認と修正をリアルタイムで行います。",
              },
              {
                cause: "原因2",
                title: "試験範囲の全体像を把握していない",
                body: "試験1週間前になって範囲の広さに気づき、焦って全部をやろうとして失敗するパターンが多いです。3週間前から範囲を整理し、優先順位をつけることで限られた時間を最大活用できます。",
              },
              {
                cause: "原因3",
                title: "苦手科目を後回しにしている",
                body: "得意科目だけ勉強して苦手科目を避けると、評定平均は上がりません。家庭教師は苦手科目のどこがわからないかを特定し、着実に底上げします。",
              },
            ].map((item, i) => (
              <div key={i} className="p-6 rounded-2xl bg-white" style={{ border: "1px solid #e5e1d8" }}>
                <p className="text-xs font-bold mb-1" style={{ color: "#c9922a" }}>{item.cause}</p>
                <p className="font-bold text-base mb-2" style={{ color: "#0c1a33" }}>{item.title}</p>
                <p className="text-sm leading-relaxed" style={{ color: "#6b7280" }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* MEDVANCE APPROACH */}
      <div className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-6" style={{ color: "#0c1a33", fontFamily: "'Noto Serif JP', serif" }}>
            MedvanceのテストB対策アプローチ
          </h2>
          <div className="p-6 rounded-2xl" style={{ backgroundColor: "#f7f5f0", border: "1px solid #e5e1d8" }}>
            <ul className="space-y-4">
              {[
                "学校の教科書・プリント・副教材を使って試験範囲を整理する",
                "「確実に出る・点になる」箇所を先輩目線で絞り込む",
                "理解度を確認しながら、わからない箇所をその場で解消する",
                "試験前2〜3週間は指導頻度を上げて集中対策モードに切り替える",
                "直前には弱点の最終確認と「解ける問題を確実に取る」練習を行う",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm" style={{ color: "#3d3d3d" }}>
                  <span className="flex-shrink-0 font-bold mt-0.5" style={{ color: "#c9922a" }}>✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div className="py-16 px-4" style={{ backgroundColor: "#f7f5f0" }}>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-8" style={{ color: "#0c1a33", fontFamily: "'Noto Serif JP', serif" }}>よくある質問</h2>
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
        heading="定期テスト対策・成績向上はMedvanceへ"
        subtext="学校の教材に合わせた完全1対1指導で、テストの点数・評定を確実に上げます。まずは無料相談でご相談ください。"
      />
    </div>
  );
}
