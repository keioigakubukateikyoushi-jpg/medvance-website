import Link from "next/link";
import ColumnCTA from "@/components/ColumnCTA";

const faqItems = [
  {
    q: "医学部専門の塾と一般予備校、どちらが良いですか？",
    a: "目的と現在の学力によります。一般予備校は体系的なカリキュラムと集団授業が強みですが、医学部特有の面接・小論文対策は手薄です。医学部専門塾は傾向分析に強い一方、費用が非常に高額になりがちです。完全1対1の個別指導塾（家庭教師型）は、学校の成績状況・志望校・弱点に合わせた指導ができ、面接・小論文まで対応できる点で医学部受験に最適です。",
  },
  {
    q: "医学部受験の塾はいつから通い始めるべきですか？",
    a: "早ければ早いほど有利ですが、高1から本格的に医学部を目指す場合は高1から、現役高3・浪人生は今すぐ始めることが重要です。塾選びより「今の自分の弱点を知る」ことが先決なので、まず無料相談でプロに分析してもらうことをお勧めします。",
  },
  {
    q: "予備校と個別指導塾を併用することはできますか？",
    a: "はい、多くの受験生が併用しています。予備校で体系的な学科知識を学びながら、個別指導で弱点を集中的に補強・志望校対策をするという組み合わせは非常に効果的です。Medvanceも予備校との併用を歓迎しています。",
  },
  {
    q: "費用が高い塾=良い塾ですか？",
    a: "費用と合格実績は必ずしも比例しません。重要なのは「自分の現状に合った指導が受けられるか」「面接・小論文まで対応しているか」「担当講師の質は十分か」です。費用の高さより指導の内容・質で選ぶことを強くお勧めします。",
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
  { href: "/column/juku-erabi", title: "医学部受験の塾・予備校の選び方", label: "塾選び" },
  { href: "/column/igakubu-kateikyoushi-hikaku", title: "医学部受験の家庭教師を比較・選び方まとめ", label: "家庭教師比較" },
  { href: "/column/igakubu-kateikyoushi-ryokin", title: "医学部受験の家庭教師料金・費用相場", label: "料金・費用" },
];

const jukuTypes = [
  {
    type: "大手予備校（河合塾・駿台・代ゼミなど）",
    pros: ["体系的なカリキュラム", "模試の充実", "自習室・施設が整っている", "費用が比較的抑えられる"],
    cons: ["集団授業で個別対応は限定的", "医学部面接・小論文対策が弱い", "弱点に合わせた指導ができない", "医学部専門の情報が少ない"],
    best: "基礎固め〜標準レベルの学力底上げ段階",
  },
  {
    type: "医学部専門予備校（メディカル系）",
    pros: ["医学部受験に特化した情報・対策", "面接・小論文対応あり", "合格実績・データが豊富"],
    cons: ["費用が非常に高額（年間200〜500万円）", "集団授業が中心で個別対応は限定的", "特定の大学・パターンに偏りやすい"],
    best: "費用を問わず医学部情報・面接対策を重視する場合",
  },
  {
    type: "完全1対1個別指導・家庭教師型",
    pros: ["弱点・志望校に完全特化した指導", "面接・小論文まで1人で対応", "スケジュールが柔軟", "コストパフォーマンスが高い"],
    cons: ["自習環境・模試は自分で用意する必要あり", "講師の質にばらつきがある（選び方が重要）"],
    best: "弱点が明確・志望校が決まっている受験生",
    recommended: true,
  },
  {
    type: "映像授業（スタディサプリなど）",
    pros: ["低コスト", "いつでも好きな時間に視聴できる", "有名講師の授業が受けられる"],
    cons: ["アウトプット・フィードバックがゼロ", "自己管理が完全に必要", "医学部対策には対応していない"],
    best: "補助教材・基礎確認として",
  },
];

export const metadata = {
  title: "医学部受験の塾・予備校おすすめ比較【2026年版】選び方の基準を解説 | Medvance",
  description:
    "医学部受験の塾・予備校を徹底比較。大手予備校・医学部専門予備校・個別指導・映像授業の違い、費用相場、選び方の基準を解説。現役慶應医学部生による完全1対1指導のMedvanceが選ばれる理由も紹介。",
  keywords: [
    "医学部 塾 おすすめ",
    "医学部 予備校 おすすめ",
    "医学部受験 塾 比較",
    "医学部専門予備校",
    "医学部受験 塾 選び方",
  ],
  alternates: {
    canonical: "/column/igakubu-juku-osusume",
  },
};

export default function IgakubuJukuOsusumeePage() {
  return (
    <div className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div style={{ backgroundColor: "#0c1a33" }} className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#c9922a" }}>医学部 塾・予備校 比較</p>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-noto-serif)" }}>
            医学部受験の塾・予備校<br />おすすめ比較【2026年版】
          </h1>
          <p className="text-base" style={{ color: "rgba(255,255,255,0.65)" }}>
            大手予備校・医学部専門塾・個別指導・映像授業を徹底比較。失敗しない選び方の基準
          </p>
        </div>
      </div>

      {/* INTRO */}
      <div className="py-16 px-4" style={{ backgroundColor: "#f7f5f0" }}>
        <div className="max-w-3xl mx-auto">
          <div className="p-8 rounded-2xl bg-white" style={{ border: "1px solid #e5e1d8" }}>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "#3d3d3d" }}>
              医学部受験に向けて塾・予備校を探すと、大手予備校・医学部専門予備校・個別指導・オンライン家庭教師と多くの選択肢があり、どれを選べばいいか迷う方も多いでしょう。
            </p>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "#3d3d3d" }}>
              結論から言えば、「自分の現在の学力・弱点・志望校・残り期間」に合った塾を選ぶことが最も重要です。費用が高い塾が必ずしも合格率が高いわけではなく、自分に合った指導形式かどうかが成否を分けます。
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#3d3d3d" }}>
              このページでは、医学部受験の塾・予備校の種類と特徴を比較し、あなたに最適な選択をするための基準を解説します。
            </p>
          </div>
        </div>
      </div>

      {/* JUKU TYPES */}
      <div className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-2 text-center" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>
            塾・指導形式の種類と特徴比較
          </h2>
          <p className="text-sm text-center mb-10" style={{ color: "#6b7280" }}>
            どの形式があなたに合っているかを確認する
          </p>
          <div className="space-y-6">
            {jukuTypes.map((juku, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl"
                style={{
                  backgroundColor: juku.recommended ? "#0c1a33" : "#f7f5f0",
                  border: juku.recommended ? "none" : "1px solid #e5e1d8",
                }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <p className="font-bold text-base" style={{ color: juku.recommended ? "#c9922a" : "#0c1a33" }}>
                    {juku.type}
                  </p>
                  {juku.recommended && (
                    <span className="text-xs font-bold px-3 py-1 rounded-full" style={{ backgroundColor: "#c9922a", color: "#fff" }}>
                      Medvanceはこの形式
                    </span>
                  )}
                </div>
                <div className="grid md:grid-cols-3 gap-4 mb-4">
                  <div>
                    <p className="text-xs font-bold mb-2" style={{ color: juku.recommended ? "rgba(255,255,255,0.5)" : "#6b7280" }}>メリット</p>
                    <ul className="space-y-1">
                      {juku.pros.map((p, j) => (
                        <li key={j} className="flex items-start gap-2 text-xs" style={{ color: juku.recommended ? "rgba(255,255,255,0.85)" : "#3d3d3d" }}>
                          <span style={{ color: "#c9922a" }}>✓</span>{p}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-xs font-bold mb-2" style={{ color: juku.recommended ? "rgba(255,255,255,0.5)" : "#6b7280" }}>デメリット</p>
                    <ul className="space-y-1">
                      {juku.cons.map((c, j) => (
                        <li key={j} className="flex items-start gap-2 text-xs" style={{ color: juku.recommended ? "rgba(255,255,255,0.65)" : "#6b7280" }}>
                          <span>△</span>{c}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-xs font-bold mb-2" style={{ color: juku.recommended ? "rgba(255,255,255,0.5)" : "#6b7280" }}>こんな人に向く</p>
                    <p className="text-xs" style={{ color: juku.recommended ? "rgba(255,255,255,0.85)" : "#3d3d3d" }}>{juku.best}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* COST COMPARISON */}
      <div className="py-16 px-4" style={{ backgroundColor: "#f7f5f0" }}>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-2 text-center" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>
            費用相場の比較
          </h2>
          <p className="text-sm text-center mb-10" style={{ color: "#6b7280" }}>年間費用の目安（1人あたり）</p>
          <div className="rounded-2xl overflow-hidden" style={{ border: "1px solid #e5e1d8" }}>
            <table className="w-full text-sm">
              <thead>
                <tr style={{ backgroundColor: "#0c1a33" }}>
                  <th className="px-5 py-4 text-left text-white font-semibold">指導形式</th>
                  <th className="px-5 py-4 text-center text-white font-semibold">年間費用目安</th>
                  <th className="px-5 py-4 text-center text-white font-semibold">面接・小論文</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["大手予備校（通年）", "50〜120万円", "△ 別途費用"],
                  ["医学部専門予備校", "200〜500万円以上", "◎ 対応"],
                  ["完全1対1個別指導（Medvance）", "60〜180万円", "◎ 込み対応"],
                  ["映像授業のみ", "5〜20万円", "× 非対応"],
                ].map(([type, cost, interview], i) => (
                  <tr key={i} style={{ backgroundColor: i % 2 === 0 ? "#fff" : "#f7f5f0" }}>
                    <td className="px-5 py-4 font-medium" style={{ color: "#3d3d3d" }}>{type}</td>
                    <td className="px-5 py-4 text-center font-semibold" style={{ color: "#0c1a33" }}>{cost}</td>
                    <td className="px-5 py-4 text-center" style={{ color: "#6b7280" }}>{interview}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs mt-3 text-center" style={{ color: "#9ca3af" }}>※目安です。受講コマ数・科目数により大きく変動します。</p>
        </div>
      </div>

      {/* SELECTION CRITERIA */}
      <div className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-6" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>
            失敗しない塾選びの5つの基準
          </h2>
          <div className="space-y-4">
            {[
              { num: "01", title: "面接・小論文対策に対応しているか", body: "医学部入試では面接・小論文が合否を大きく左右します。学科対策しかできない塾では、選考の後半で差をつけられません。面接・小論文まで一貫して対応できる塾を選びましょう。" },
              { num: "02", title: "担当講師の医学部受験経験があるか", body: "医学部受験は一般大学受験と出題傾向が異なります。医学部合格者が直接指導するのか、それとも一般の学生講師なのかを事前に確認してください。" },
              { num: "03", title: "自分の弱点に合わせた指導ができるか", body: "全員同じカリキュラムの集団授業では、「自分の弱点だけを集中的に潰す」ことができません。志望校・弱点科目に応じたカスタマイズ指導が受けられるかを確認しましょう。" },
              { num: "04", title: "費用に見合った指導が受けられるか", body: "費用が高い塾が必ずしも合格率が高いわけではありません。単価あたりの指導時間・担当講師の質・対応サービスの範囲を比較して、コストパフォーマンスを評価しましょう。" },
              { num: "05", title: "合格後も相談できる継続性があるか", body: "受験は長期戦です。途中で担当講師が変わったり、進捗報告がなかったりする塾では戦略の修正が遅れます。保護者報告・定期面談・LINEでの随時相談ができる塾が理想です。" },
            ].map((item) => (
              <div key={item.num} className="p-6 rounded-2xl" style={{ backgroundColor: "#f7f5f0", border: "1px solid #e5e1d8" }}>
                <p className="font-bold text-xs mb-1" style={{ color: "#c9922a" }}>{item.num}</p>
                <p className="font-bold text-base mb-2" style={{ color: "#0c1a33" }}>{item.title}</p>
                <p className="text-sm leading-relaxed" style={{ color: "#6b7280" }}>{item.body}</p>
              </div>
            ))}
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
        heading="医学部受験対策はMedvanceへ"
        subtext="現役慶應医学部生による完全1対1指導。学科対策から面接・小論文まで一貫してサポート。費用・指導内容について無料相談でご確認ください。"
      />
    </div>
  );
}
