import Link from "next/link";
import ColumnCTA from "@/components/ColumnCTA";
import ColumnArticleSchemas from "@/components/ColumnArticleSchemas";
import ColumnJsonLd from "@/components/ColumnJsonLd";

const faqItems = [
  {
    q: "慶應義塾大学への内部進学率はどのくらいですか？",
    a: "慶應附属校全体の内部進学率は97%以上と非常に高いです。ただし「どの学部に進めるか」は成績によって決まります。特に医学部・法学部など人気学部への進学枠は限られており、高い評定が必要です。",
  },
  {
    q: "慶應の内部進学はいつ成績が使われますか？",
    a: "高校1年生〜3年生の定期試験の成績・評定が使われます。学校によって仕組みに違いはありますが、原則として高校3年間の累積成績が判断基準になります。高1から評定を意識して動くことが重要です。",
  },
  {
    q: "慶應附属校から医学部への内部進学は難しいですか？",
    a: "非常に難しいです。慶應医学部への内部進学枠は各附属校で数名程度と非常に限られており、校内トップクラスの成績が必要です。評定だけでなく、志望理由書・面談などの選考も課されます。",
  },
  {
    q: "慶應内部進学で希望学部に進めなかった場合はどうなりますか？",
    a: "第二志望学部に進むか、外部受験（他大学・一般受験）を選ぶことになります。万が一のリスクに備えて、内部進学対策と並行して学科力を高めておくことが大切です。",
  },
  {
    q: "評定を上げるためにどんな対策が効果的ですか？",
    a: "①定期試験の出題傾向を把握して優先順位をつける、②授業の理解度を毎週確認して穴を作らない、③試験2〜3週間前から集中対策期に入る——この3点が基本です。家庭教師を活用することで、慶應のカリキュラムに沿った個別最適な対策が可能になります。",
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
  { href: "/column/keio-naibu-seiseki", title: "慶應附属校の成績を上げて医学部内部進学へ", label: "成績向上" },
  { href: "/column/keio-fuzoku-kateikyoushi", title: "慶應附属校の家庭教師おすすめの選び方", label: "家庭教師" },
];

const gakubuData = [
  { gakubu: "医学部", nanido: "最難関", note: "各附属校から数名程度。評定最上位＋選考（志望理由書・面談）が必要。" },
  { gakubu: "法学部", nanido: "難", note: "人気学部のため競争率が高い。評定上位が求められる。" },
  { gakubu: "経済学部", nanido: "やや難", note: "安定した人気。評定中〜上位層が対象。" },
  { gakubu: "理工学部", nanido: "標準", note: "理系志望者向け。医学部の次に競争が高い。" },
  { gakubu: "商学部・文学部・社会学部など", nanido: "標準〜やや易", note: "定員が多めで比較的進みやすいが、油断は禁物。" },
];

export const metadata = {
  title: "慶應内部進学の仕組みと評定の上げ方を徹底解説",
  description:
    "慶應義塾大学への内部進学の仕組み・評定基準・学部別難易度を解説。医学部をはじめ希望学部への進学枠を確保するための成績対策を現役慶應医学部生が指導します。",
  keywords: [
    "慶應 内部進学 仕組み",
    "慶應義塾 内部進学 評定",
    "慶應 内部進学 成績",
    "慶應附属校 内部進学 方法",
    "慶應 内部進学 医学部",
  ],
  alternates: { canonical: "/column/keio-naibu-shikumi" },
};

export default function KeioNaibuShikumiPage() {
  return (
    <div className="min-h-screen bg-white">
      <ColumnJsonLd
        title="慶應義塾の内部進学の仕組みを解説｜評定・選考・医学部進学枠"
        description="慶應附属校から慶應義塾大学医学部へ内部進学するための仕組みを解説。評定の算出方法、選考の流れ、医学部の難しさ、成績を上げる実践戦略まで。"
        slug="keio-naibu-shikumi"
        category="受験情報"
        keywords={["慶應 内部進学 仕組み", "慶應義塾 内部進学 評定", "慶應附属校 医学部 内部進学"]}
      />
      <ColumnArticleSchemas slug="keio-naibu-shikumi" articleOnly />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div style={{ backgroundColor: "#0c1a33" }} className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#c9922a" }}>慶應内部進学</p>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-noto-serif)" }}>
            慶應内部進学の仕組みと<br />評定の上げ方を徹底解説
          </h1>
          <p className="text-base" style={{ color: "rgba(255,255,255,0.65)" }}>
            医学部をはじめ希望学部への進学枠を確保するために知っておくべきこと
          </p>
        </div>
      </div>

      {/* INTRO */}
      <div className="py-16 px-4" style={{ backgroundColor: "#f7f5f0" }}>
        <div className="max-w-3xl mx-auto">
          <div className="p-8 rounded-2xl bg-white" style={{ border: "1px solid #e5e1d8" }}>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "#3d3d3d" }}>
              慶應義塾の附属校から慶應義塾大学に内部進学できる割合は97%以上。一見「ほぼ全員が進学できる」ように見えますが、問題は<strong>「どの学部に進めるか」</strong>です。
            </p>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "#3d3d3d" }}>
              医学部・法学部など人気学部への進学枠は限られており、校内の成績上位者から順に希望学部に振り分けられます。特に医学部への内部進学は、各附属校でも数名程度という超狭き門です。
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#3d3d3d" }}>
              このページでは、内部進学の仕組み・評定の決まり方・学部別の難易度・成績を上げるための具体的な対策を解説します。
            </p>
          </div>
        </div>
      </div>

      {/* HOW IT WORKS */}
      <div className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-2 text-center" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>
            慶應内部進学の仕組み
          </h2>
          <p className="text-sm text-center mb-10" style={{ color: "#6b7280" }}>
            高1〜高3の成績が、進む学部を決める
          </p>
          <div className="space-y-4">
            {[
              { step: "01", title: "高1〜高3の定期試験・評定が蓄積される", body: "内部進学の判定には高校3年間の成績が使われます。高1の段階から評定を意識して積み上げることが重要。「高3だけ頑張ればいい」という考えは危険です。" },
              { step: "02", title: "実力テストや課外活動も加味される", body: "学校によっては定期試験の評定だけでなく、校内の実力テスト・部活動の実績・出席状況なども評価されます。総合的な姿勢が問われます。" },
              { step: "03", title: "成績順に希望学部へ配置", body: "成績上位者から順に希望の学部に振り分けられます。人気学部（医学部・法学部）は競争率が高く、校内トップクラスの成績がなければ第一志望に進めないことがあります。" },
              { step: "04", title: "医学部は選考（志望理由書・面談）が加わる", body: "特に医学部への内部進学は、評定に加えて志望理由書・面談などの特別選考が課されます。成績を確保した上で、選考の準備も早期から行う必要があります。" },
            ].map((item) => (
              <div key={item.step} className="flex gap-5 p-6 rounded-2xl" style={{ backgroundColor: "#f7f5f0", border: "1px solid #e5e1d8" }}>
                <div className="text-2xl font-bold flex-shrink-0 w-10" style={{ color: "#c9922a", fontFamily: "var(--font-noto-serif)" }}>{item.step}</div>
                <div>
                  <p className="font-bold text-base mb-2" style={{ color: "#0c1a33" }}>{item.title}</p>
                  <p className="text-sm leading-relaxed" style={{ color: "#6b7280" }}>{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* DIFFICULTY TABLE */}
      <div className="py-16 px-4" style={{ backgroundColor: "#f7f5f0" }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-2 text-center" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>
            学部別・内部進学の難易度
          </h2>
          <p className="text-sm text-center mb-10" style={{ color: "#6b7280" }}>
            医学部が最難関。志望学部によって求められる評定水準が大きく異なる
          </p>
          <div className="rounded-2xl overflow-hidden" style={{ border: "1px solid #e5e1d8" }}>
            <table className="w-full text-sm">
              <thead>
                <tr style={{ backgroundColor: "#0c1a33" }}>
                  <th className="px-4 py-3 text-left font-semibold text-white">学部</th>
                  <th className="px-4 py-3 text-left font-semibold" style={{ color: "#c9922a" }}>難易度</th>
                  <th className="px-4 py-3 text-left font-semibold text-white">特記事項</th>
                </tr>
              </thead>
              <tbody>
                {gakubuData.map((row, i) => (
                  <tr key={i} style={{ backgroundColor: i % 2 === 0 ? "#fff" : "#faf9f6", borderTop: "1px solid #e5e1d8" }}>
                    <td className="px-4 py-4 font-semibold text-xs" style={{ color: "#0c1a33" }}>{row.gakubu}</td>
                    <td className="px-4 py-4 text-xs font-bold" style={{ color: row.nanido === "最難関" ? "#c9922a" : "#0c1a33" }}>{row.nanido}</td>
                    <td className="px-4 py-4 text-xs leading-relaxed" style={{ color: "#6b7280" }}>{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* WHAT TO DO */}
      <div className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-2 text-center" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>
            評定を上げるための実践対策
          </h2>
          <p className="text-sm text-center mb-10" style={{ color: "#6b7280" }}>
            感覚で動くのではなく、数値と計画で評定を設計する
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: "目標評定を数値で設定する", body: "「なんとなく頑張る」ではなく「医学部進学枠に必要な評定は〇〇、今は△△、あと□□点上げればいい」と数値で管理します。科目ごとの目標を設定し、逆算して対策を立てます。" },
              { title: "定期試験の出題傾向を把握する", body: "慶應附属校の試験は学校独自の傾向があります。過去問・先輩の情報をもとに「どこが出やすいか」を絞り込み、試験前に最も効率よく点数を積み上げます。" },
              { title: "苦手科目を放置しない", body: "内部進学では全科目の評定平均が使われます。得意科目で高得点を取るよりも、苦手科目の底上げが全体平均に大きく影響します。定期的に苦手科目の点数を確認しましょう。" },
              { title: "試験前の2〜3週間を集中期にする", body: "通常の学習ペースを維持しながら、試験前の2〜3週間は集中対策モードに切り替えます。家庭教師を活用する場合、この時期に授業頻度を増やすのが効果的です。" },
              { title: "医学部志望の場合は選考準備も早期から", body: "志望理由書・面談が課される医学部選考は、成績だけでは不十分です。「なぜ医師になりたいか」「慶應医学部で何を学びたいか」を早期から言語化し、選考本番で本質を語れる状態を作ります。" },
              { title: "万が一に備えて一般受験の学科力も維持する", body: "内部進学がうまくいかなかった場合のリスクヘッジとして、一般受験にも対応できる学科力を保ちます。内部進学対策と一般受験対策を並行することで、どちらに転んでも対応できます。" },
            ].map((item, i) => (
              <div key={i} className="p-6 rounded-2xl" style={{ backgroundColor: "#f7f5f0", border: "1px solid #e5e1d8" }}>
                <p className="font-bold text-base mb-3" style={{ color: "#0c1a33" }}>
                  <span style={{ color: "#c9922a" }}>— </span>{item.title}
                </p>
                <p className="text-sm leading-relaxed" style={{ color: "#6b7280" }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* MEDVANCE */}
      <div className="py-16 px-4" style={{ backgroundColor: "#f7f5f0" }}>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-6" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>
            Medvanceが慶應内部進学対策に選ばれる理由
          </h2>
          <div className="space-y-3">
            {[
              { title: "全講師が現役慶應医学部生", body: "同じ慶應を歩んだ先輩として、カリキュラム・試験傾向・内部進学の実態を熟知しています。" },
              { title: "評定を数値で管理・設計", body: "目標評定の設定から科目別の対策優先順位まで、感覚ではなく数値で管理します。" },
              { title: "医学部選考（志望理由書・面談）まで対応", body: "他の家庭教師サービスでは対応しにくい選考準備を、慶應医学部生が1対1で仕上げます。" },
              { title: "万が一の一般受験も並行サポート", body: "内部進学対策をメインにしつつ、学科力も上げることで外部受験にも対応できる力を養います。" },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 p-4 rounded-xl bg-white" style={{ border: "1px solid #e5e1d8" }}>
                <div className="flex-shrink-0 w-1 rounded-full" style={{ backgroundColor: "#c9922a", minHeight: "40px" }} />
                <div>
                  <p className="font-bold text-sm mb-1" style={{ color: "#0c1a33" }}>{item.title}</p>
                  <p className="text-xs leading-relaxed" style={{ color: "#6b7280" }}>{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div className="py-16 px-4 bg-white">
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
        heading="慶應内部進学の対策、Medvanceで始めませんか"
        subtext="現役慶應医学部生が評定管理から選考準備まで完全1対1でサポート。まずは無料相談でお気軽にご相談ください。"
      />
    </div>
  );
}
