import Link from "next/link";
import ColumnCTA from "@/components/ColumnCTA";
import ColumnArticleSchemas from "@/components/ColumnArticleSchemas";

const faqItems = [
  {
    q: "医学部の推薦入試や総合型選抜を狙う場合、評定平均はどのくらい必要ですか？",
    a: "国公立医学部や多くの私立医学部で出願要件となるのは「4.3以上」または「4.0以上」が一般的ですが、実際の合格ラインは事実上「4.5〜5.0」に近い極めて高い水準での勝負になります。ただし、一部の総合型選抜（AO入試）では評定制限がない代わりに、高度な小論文や面接（MMI）、卓越した活動実績が課されます。",
  },
  {
    q: "推薦入試の対策はいつから始めるべきですか？",
    a: "評定平均向上のための定期テスト対策は高1・高2から不可欠ですが、志望理由書の作成、小論文・面接対策などの推薦個別対策は、遅くとも高3の春（4〜5月）には本格始動すべきです。夏以降は一般入試の過去問演習や主要科目の最終仕上げに追われるため、時間のかかる出願書類作成を春のうちに先行させておくことが合格のセオリーです。",
  },
  {
    q: "推薦・総合型選抜の対策をすると、一般入試の勉強がおろそかになりませんか？",
    a: "ダラダラと時間をかけすぎると破綻します。Medvanceでは、一般入試に向けた「15分単位の勉強計画」の中に、推薦用の書類作成や小論文を『1日45分〜1時間のみの固定タスク』として組み込みます。これにより、一般学科試験の勉強量を90%以上維持したまま、最高品質の推薦対策を両立させます。",
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
  { href: "/column/shiboriyusho-writing", title: "医学部志望理由書の書き方：薄い動機で終わらせない構成とコツ", label: "入試対策" },
  { href: "/column/shoronbun-taisaku", title: "医学部の小論文対策・書き方・頻出テーマを徹底解説", label: "入試対策" },
  { href: "/column/mmi-timing", title: "医学部MMI対策はいつから始めるべきか：MMIの始め方・特徴", label: "入試対策" },
];

export const metadata = {
  title: "医学部推薦入試（学校推薦型・総合型選抜）の合格戦略と対策スケジュール",
  description:
    "評定平均の目安から、志望理由書・活動報告書、小論文、面接（通常・MMI形式）の具体的な準備方法まで徹底解説。定員が増加する医学部推薦入試・総合型選抜を現役慶應医学部生が解き明かします。",
  alternates: {
    canonical: "/column/suisen-sogotai-strategy",
  },
};

export default function SuisenSogotaiStrategyPage() {
  return (
    <div className="min-h-screen bg-white">
      <ColumnArticleSchemas slug="suisen-sogotai-strategy" articleOnly />
      <script type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([faqSchema]) }}
      />
      
      {/* Header section */}
      <div style={{ backgroundColor: "#0c1a33" }} className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#c9922a" }}>
            入試対策・推薦AO選抜
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-noto-serif)", lineHeight: 1.3 }}>
            医学部推薦入試（学校推薦型・総合型選抜）の合格戦略と対策スケジュール
          </h1>
          <p className="text-sm md:text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.72)" }}>
            定員拡大中の推薦・総合型選抜。一般学科対策を犠牲にせず、評定・書類・小論文・MMI面接を完全掌握する「両立型」逆算ロードマップ。
          </p>
        </div>
      </div>

      {/* Intro section */}
      <div className="py-16 px-4" style={{ backgroundColor: "#f7f5f0" }}>
        <div className="max-w-3xl mx-auto">
          <div className="p-8 rounded-2xl bg-white mb-8 shadow-xs" style={{ border: "1px solid #e5e1d8" }}>
            <p className="text-sm leading-relaxed mb-4 text-gray-700">
              近年、日本の医学部入試において大きな変化が起きています。それは**「推薦入試（学校推薦型選抜）」や「AO入試（総合型選抜）」の定員枠の大幅な拡大**です。国公立・私立を問わず、多くの大学が優秀な医師候補を早期に確保するため、これらの特別選抜に力を入れています。
            </p>
            <p className="text-sm leading-relaxed mb-4 text-gray-700">
              一般入試での一発勝負に比べてチャンスが1回増えるため、医学部志望生にとって挑戦しない手はありません。しかし、「一般入試の勉強だけで手一杯で書類を作る時間がない」「評定平均は足りているが、小論文やMMI面接の対策方法が全く分からない」と二の足を踏む受験生が後を絶ちません。
            </p>
            <p className="text-sm leading-relaxed text-gray-700 font-semibold" style={{ color: "#c9922a" }}>
              本記事では、一般入試の学科対策を完全に維持しながら、推薦・総合型選抜で圧倒的な合格答案・面接力を磨き上げる「時間逆算型ハイブリッド合格戦略」を詳細に解説します。
            </p>
          </div>
          
          <h2 className="text-2xl font-bold mb-6" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>
            医学部推薦・総合型選抜で突破すべき「4つの壁」
          </h2>
          <p className="text-sm leading-relaxed mb-8 text-gray-700">
            推薦・総合型選抜の合格を勝ち取るためには、学科試験の学力以外に以下の4つの要素で高得点を叩き出す必要があります。
          </p>
          <div className="space-y-4 mb-10">
            {[
              {
                title: "1. 高い次元での争いとなる『評定平均の壁』",
                body: "出願要件が「4.3以上」であっても、実際の合格者は「4.8〜5.0」などオール5に近い評定平均を携えて出願してきます。高1からすべての定期テストを完璧に解く「計画自習」のルーティンがそのベースとなります。",
              },
              {
                title: "2. 医師志望動機の強さを問う『出願書類（志望理由書）の壁』",
                body: "「人の役に立ちたい」「親が医師だから」といった借り物の志望動機は一瞬で見抜かれます。自身の具体的な体験、その大学の教育方針（地域枠や研究医育成など）に対する深い理解と将来像が完全に一致した『物語（ストーリー）』が必要です。",
              },
              {
                title: "3. 医療倫理や論理的思考力を試す『小論文の壁』",
                body: "「安楽死の是非」「AIと医師の協調」「超高齢化社会と地域医療」など、医学部特有の難解なテーマに対して、制限時間内に論理矛盾のない美しい構成の小論文を書き上げるトレーニングが必須です。",
              },
              {
                title: "4. コミュニケーション能力を多角的に測る『MMI（複数ミニ面接）の壁』",
                body: "多くの大学で採用が進むMMI（Multiple Mini Interview）では、複数の部屋を移動し、倫理的な課題や患者対応のロールプレイングなどに対して瞬発的に高い共感力と倫理性を備えた回答を行う、極めて難度の高い面接が課されます。",
              },
            ].map((reason, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-white" style={{ border: "1px solid #e5e1d8" }}>
                <h3 className="font-bold text-base mb-3" style={{ color: "#0c1a33" }}>{reason.title}</h3>
                <p className="text-xs md:text-sm leading-relaxed text-gray-600">{reason.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recommended Timeline */}
      <div className="py-20 px-4 bg-white border-t border-b" style={{ borderColor: "#e5e1d8" }}>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>
            【時期別】推薦・総合型選抜 合格逆算スケジュール
          </h2>
          <p className="text-sm leading-relaxed mb-8 text-center text-gray-700">
            一般学科の勉強時間を圧迫しないために、各フェーズでやるべきことを明確に切り分ける必要があります。
          </p>
          
          <div className="space-y-6">
            {[
              {
                phase: "高1〜高3 1学期",
                title: "評定平均の死守と「医師志望動機」の材料集め",
                desc: "定期テスト対策に特化した15分計画を回し、評定平均を極限まで引き上げます。同時に、病院見学やボランティア、医療系の読書を通じて、志望理由書のフックとなる独自の体験をストックします。",
              },
              {
                phase: "高3 春（4月〜6月）",
                title: "志望理由書の第一稿作成と「小論文の基礎」習得",
                desc: "夏前の比較的余裕がある時期に、志望理由書の構成と執筆を完了させます。小論文の「書き方の型」と「主要な医療時事知識」のインプットもこの3ヶ月で並行して消化します。",
              },
              {
                phase: "高3 夏（7月〜8月）",
                title: "一般学科対策に9割集中 ＋ 週1回の推薦演習",
                desc: "夏休みは一般入試の勝敗を分ける天王山です。ここでは一般対策に90%以上のエネルギーを注ぐため、推薦対策は「週に1回、小論文を1本書いて添削に出す」のみのルーティンに抑え、学習効率の破綻を防ぎます。",
              },
              {
                phase: "高3 秋（9月〜11月）",
                title: "志望校別過去問 ＋ 徹底的な「MMI・通常面接」模擬",
                desc: "出願書類を提出し、本格的な面接対策に入ります。Medvanceの現役医学部生ネットワークをフル活用し、志望大学の実際のMMI・通常面接の形式に合わせたマンツーマン模擬練習を毎週繰り返し、即答力を極限まで高めます。",
              },
            ].map((step, idx) => (
              <div key={idx} className="flex flex-col md:flex-row gap-4 p-6 rounded-2xl" style={{ backgroundColor: "#f7f5f0", border: "1px solid #e5e1d8" }}>
                <div className="flex-shrink-0 md:w-44 text-xs font-bold pt-1 uppercase" style={{ color: "#c9922a" }}>{step.phase}</div>
                <div>
                  <h3 className="font-bold text-base mb-2" style={{ color: "#0c1a33" }}>{step.title}</h3>
                  <p className="text-xs md:text-sm leading-relaxed text-gray-600">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Medvance Feature for Recommendation */}
      <div className="py-16 px-4 bg-[#f7f5f0]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-center" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>
            Medvanceの「推薦・総合型選抜」合格プログラム
          </h2>
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {[
              {
                title: "✍️ 現役医学部生による書類・小論文添削",
                body: "数多くの推薦合格者を輩出してきた慶應医学部を中心とする精鋭講師陣が、あなたの志望理由書や小論文を白紙段階から徹底添削。大学側の意図に刺さる「唯一無二の答案」へとブラッシュアップします。",
              },
              {
                title: "🗣️ 志望大学特化型の実践MMI模擬面接",
                body: "各大学の推薦形式（MMIの部屋数、時間、質問内容）を熟知した講師による、本番さながらのロールプレイ練習。患者・面接官役を交えた多角的なフィードバックにより、本番で絶対に焦らない面接力を培います。",
              },
            ].map((item, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-white" style={{ border: "1px solid #e5e1d8" }}>
                <p className="font-bold text-base mb-3" style={{ color: "#0c1a33" }}>{item.title}</p>
                <p className="text-xs leading-relaxed text-gray-600">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ Accordion Section */}
      <div className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-8" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>
            医学部推薦・総合型選抜に関するよくある質問
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
          <div className="grid md:grid-cols-3 gap-4 mb-12">
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
        heading="あなたの評定や現在地をもとに、推薦入試の合格ロードマップを作りませんか？"
        subtext="現在の高校の評定平均、活動実績、志望大学、一般学科の学習進捗などをお知らせください。一般入試の対策を崩さずに、推薦・総合型選抜を最も高い合格率で突破するためのオーダーメイド戦略を無料立案いたします。"
      />
    </div>
  );
}
