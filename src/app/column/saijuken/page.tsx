import Link from "next/link";
import ColumnCTA from "@/components/ColumnCTA";

export const metadata = {
  title: "社会人・大学生からの医学部再受験ガイド｜Medvance",
  description:
    "医学部再受験を考えている社会人・大学生向けの完全ガイド。再受験のリアルな現状、合格者の共通点、年齢制限の実態、勉強スケジュールの設計まで現役慶應医学部生が解説。",
  keywords: ["医学部 再受験", "医学部 社会人", "医学部 再受験 難しい", "社会人 医学部 合格", "医学部 再受験 勉強法"],

  alternates: {
    canonical: "/column/saijuken",
  },};

const realities = [
  {
    title: "再受験生は毎年相当数が合格している",
    body: "「再受験は不利」というイメージがありますが、実際には私立医学部を中心に再受験生の合格者は毎年多数います。特に東京慈恵会医科大学・順天堂大学・昭和大学などは再受験生に比較的寛容とされています。重要なのは「いつ挑戦したか」より「どう戦略を立てたか」です。",
  },
  {
    title: "年齢制限は原則ないが、大学によって慎重な姿勢の差がある",
    body: "医学部入試に法的な年齢制限はありません。ただし、大学によっては年齢を考慮した採点が行われているとされるケースもあります。志望校選びの際は、過去の合格者データや在籍生の年齢構成を事前に確認することが賢明です。",
  },
  {
    title: "社会人経験は面接での強みになり得る",
    body: "再受験生が現役生と比べて有利な点の一つが面接です。社会人・大学生としての経験——患者との関わり・研究経験・職場での困難を乗り越えた経験——は、「なぜ医師を目指すか」という問いへの説得力ある回答の素材になります。",
  },
];

const studyPlan = [
  {
    phase: "準備期間（0〜3ヶ月）",
    title: "現状把握と計画設計",
    body: "高校の教科書・参考書を引っ張り出し、各科目の現在の実力を確認します。模擬試験（河合塾・駿台など）を受けて現在の偏差値を把握。志望校の過去問にも一度目を通し、必要な学力レベルを具体的にイメージします。",
    actions: ["全科目の現状確認（模試受験）", "志望校を2〜3校に絞り込む", "1日の勉強可能時間を正確に把握", "参考書・教材選定"],
  },
  {
    phase: "基礎固め期（3〜8ヶ月）",
    title: "各科目の基礎を完成させる",
    body: "社会人の場合、学習から離れている期間が長いほど基礎に戻る必要があります。特に数学・物理・化学は高校レベルの基礎から丁寧にやり直すことが重要です。英語は単語・文法よりも読解力の維持・向上を優先します。",
    actions: ["数学：チャート式（青）を1冊完成", "英語：長文読解を毎日継続", "理科：教科書レベルの概念理解を徹底", "週次で進捗確認・計画修正"],
  },
  {
    phase: "応用・過去問期（8〜12ヶ月）",
    title: "志望校に特化した対策",
    body: "基礎が固まったら志望校の過去問演習に集中します。各大学の出題傾向に合わせた対策——記述式対策・英語速読訓練・数学難問演習——を行い、本番での得点力を磨きます。面接・小論文対策もこの時期に並行して進めます。",
    actions: ["志望校の過去問5年分を解く", "弱点分野の集中補強", "面接：志望動機・医療知識のインプット", "小論文：テーマ別の練習"],
  },
];

const faqItems = [
  {
    q: "社会人から医学部を目指すのは現実的ですか？",
    a: "現実的です。毎年、社会人・大学生からの再受験合格者は多数います。ただし、学習時間の確保と正しい戦略が必要です。仕事をしながらの受験と、仕事を辞めて専念するケースでは必要な準備期間が異なります。現状を踏まえた計画設計が最初のステップです。",
  },
  {
    q: "再受験に有利な医学部はありますか？",
    a: "私立医学部の中では、東京慈恵会医科大学・順天堂大学・昭和大学・国際医療福祉大学などが再受験生に比較的寛容とされています。ただし公式に再受験歓迎を表明している大学は限られるため、過去の合格者データや受験経験者の情報を参考にすることが大切です。",
  },
  {
    q: "再受験と現役受験では必要な勉強時間に差がありますか？",
    a: "大きな差はありませんが、学習ブランクが長い場合は基礎固めの期間が余分にかかる傾向があります。目安として、試験まで1年以上ある場合は毎日3〜5時間の学習で十分な場合もあります。大切なのは総時間より、質の高い学習の継続です。",
  },
  {
    q: "再受験で合格した人の共通点は何ですか？",
    a: "合格した再受験生の共通点として、明確な「医師を目指す理由」があること、計画的に弱点を解消したこと、面接対策を早期から始めたこと、が挙げられます。特に面接での説得力は再受験生の強みになるため、早い段階から自己分析を深めることが重要です。",
  },
  {
    q: "再受験生向けの塾・家庭教師は必要ですか？",
    a: "特に基礎から学び直す場合や、独学では勉強の方向性が定まりにくい場合には、専門的なサポートが効果的です。Medvanceでは現役慶應医学部生が再受験生の状況に合わせた個別プランを設計し、学習の方向性から面接対策まで一貫してサポートしています。",
  },
];

const relatedArticles = [
  { href: "/column/juken-timing", title: "医学部受験はいつから始めるべきか", label: "受験戦略" },
  { href: "/column/mensetu", title: "医学部面接対策の完全ガイド", label: "面接対策" },
  { href: "/column/difference", title: "医学部に受かる人・落ちる人の違い", label: "合格分析" },
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

export default function SaijukenPage() {
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
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-noto-serif)" }}>
            社会人・大学生からの<br className="hidden md:block" />医学部再受験ガイド
          </h1>
          <p className="text-base" style={{ color: "rgba(255,255,255,0.65)" }}>
            再受験のリアル・合格戦略・勉強法を現役慶應医学部生が解説
          </p>
        </div>
      </div>

      <div className="py-16 px-4" style={{ backgroundColor: "#f7f5f0" }}>
        <div className="max-w-3xl mx-auto">
          <div className="p-8 rounded-2xl bg-white mb-8" style={{ border: "1px solid #e5e1d8" }}>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "#3d3d3d" }}>
              「医師になりたい」という夢を、社会人になってから、あるいは別の大学に進学してから持つ人は少なくありません。医学部再受験は確かに挑戦的ですが、正しい戦略と準備があれば十分に実現可能です。
            </p>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "#3d3d3d" }}>
              このページでは、再受験のリアルな現状・よくある勘違い・合格するための勉強計画を解説します。「今からでは遅い」という不安を、具体的な行動計画に変えるヒントにしてください。
            </p>
          </div>
        </div>
      </div>

      <div className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-10" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>
            医学部再受験のリアル
          </h2>
          <div className="space-y-6">
            {realities.map((item, i) => (
              <div key={i} className="p-6 rounded-2xl" style={{ backgroundColor: "#f7f5f0", border: "1px solid #e5e1d8" }}>
                <p className="font-bold text-base mb-3" style={{ color: "#0c1a33" }}>
                  {i + 1}. {item.title}
                </p>
                <p className="text-sm leading-relaxed" style={{ color: "#6b7280" }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="py-16 px-4" style={{ backgroundColor: "#f7f5f0" }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-4" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>
            再受験生のための学習ロードマップ
          </h2>
          <p className="text-sm text-center mb-10 max-w-2xl mx-auto" style={{ color: "#6b7280" }}>
            試験まで約1年を想定した標準的なプランです。残り時間に応じてフェーズを調整してください。
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {studyPlan.map((phase, i) => (
              <div key={i} className="p-6 rounded-2xl bg-white" style={{ border: "1px solid #e5e1d8" }}>
                <p className="text-xs font-semibold tracking-wide mb-2" style={{ color: "#c9922a" }}>{phase.phase}</p>
                <p className="font-bold text-base mb-3" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>{phase.title}</p>
                <p className="text-sm leading-relaxed mb-4" style={{ color: "#6b7280" }}>{phase.body}</p>
                <ul className="space-y-1">
                  {phase.actions.map((action, j) => (
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
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-6" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>
            再受験生の面接対策：社会人経験を強みに変える
          </h2>
          <div className="p-8 rounded-2xl" style={{ backgroundColor: "#f7f5f0", border: "1px solid #e5e1d8" }}>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "#3d3d3d" }}>
              再受験生が最も差をつけられるのが面接です。現役生が「医師になりたい」という漠然とした理由しか語れない場面で、社会人経験者は具体的なエピソードと深みのある動機を示せます。
            </p>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "#3d3d3d" }}>
              例えば、企業での勤務中に医療が必要な場面を目の当たりにした経験、家族の闘病を支えた経験、医療系の仕事で医師の役割を近くで見た経験——これらは面接で強力な説得材料になります。
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#3d3d3d" }}>
              「なぜ医師でなければならないか」「なぜ今挑戦するのか」——この2点を自分の言葉で明確に語れるように、早期から自己分析を始めましょう。
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
        heading="再受験の戦略を、現役慶應医学部生と一緒に設計しましょう"
        subtext="社会人・大学生からの医学部挑戦を、完全1対1で徹底サポートします。"
      />
    </div>
  );
}