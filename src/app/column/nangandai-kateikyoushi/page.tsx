import Link from "next/link";
import ColumnCTA from "@/components/ColumnCTA";
import ColumnArticleSchemas from "@/components/ColumnArticleSchemas";
import ColumnJsonLd from "@/components/ColumnJsonLd";

const faqItems = [
  {
    q: "東大・京大志望でも慶應医学部生に指導してもらえますか？",
    a: "はい、対応できます。慶應医学部の入試難易度は東大理一・理二と同等かそれ以上で、英語・数学・物理・化学のすべてで最高水準の学力が求められます。Medvanceの講師は全員、その学力を自ら証明した人材です。東大・京大合格経験者も在籍しています。",
  },
  {
    q: "文系の難関大（法・経済・商など）も対応していますか？",
    a: "英語は全員対応しています。数学（文系）も対応可能です。国語・社会については担当講師によって異なりますので、無料相談でご確認ください。SFC・AO入試については志望理由書・面接・小論文の指導が可能です。",
  },
  {
    q: "浪人生にも対応していますか？",
    a: "はい、浪人生も歓迎しています。前年の失敗原因の分析から始め、弱点特定・志望校別対策・メンタル管理まで対応します。予備校との併用も可能です。",
  },
  {
    q: "どのくらいの頻度で受講するのが効果的ですか？",
    a: "志望校・現在の学力・残り期間によって異なります。一般的には週2〜3回（月8〜12回）の指導が成績向上の効果を実感しやすいです。まずは無料相談でご相談ください。",
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
  { href: "/for/nangandai", title: "難関大受験（東大・京大・早慶）の家庭教師", label: "難関大受験" },
  { href: "/column/igakubu-kateikyoushi-hikaku", title: "医学部受験の家庭教師を比較・選び方まとめ", label: "家庭教師比較" },
  { href: "/column/seiseki-kateikyoushi", title: "学校の成績を上げるための家庭教師の選び方", label: "成績向上" },
];

export const metadata = {
  title: "難関大受験（東大・京大・早慶）に家庭教師が効果的な理由 | Medvance",
  description:
    "難関大受験（東大・京大・早慶・難関国公立）に家庭教師が効果的な理由と選び方を解説。慶應義塾大学医学部生が数学・英語・理科を本質から1対1で指導するMedvanceの特徴も紹介。",
  keywords: [
    "難関大受験 家庭教師",
    "東大受験 個別指導",
    "早慶 家庭教師 おすすめ",
    "難関大 理系 個別指導",
    "難関大受験 家庭教師 選び方",
  ],
  alternates: {
    canonical: "/column/nangandai-kateikyoushi",
  },
};

export default function NangandaiKateikyoushiPage() {
  return (
    <div className="min-h-screen bg-white">
      <ColumnJsonLd
        title="難関大受験（東大・京大・早慶）に家庭教師が効果的な理由"
        description="難関大受験に家庭教師が有効な理由と選び方を解説。慶應義塾大学医学部生が数学・英語・理科を本質から1対1で指導。全国オンライン対応。"
        slug="nangandai-kateikyoushi"
        category="塾・指導"
        keywords={["難関大受験 家庭教師", "東大受験 個別指導", "早慶 家庭教師 おすすめ"]}
      />
      <ColumnArticleSchemas slug="nangandai-kateikyoushi" articleOnly />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div style={{ backgroundColor: "#0c1a33" }} className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#c9922a" }}>難関大受験・家庭教師</p>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-noto-serif)" }}>
            難関大受験（東大・京大・早慶）に<br />家庭教師が効果的な理由
          </h1>
          <p className="text-base" style={{ color: "rgba(255,255,255,0.65)" }}>
            集団塾・映像授業では届かない「本質的な学力」の伸ばし方
          </p>
        </div>
      </div>

      <div className="py-16 px-4" style={{ backgroundColor: "#f7f5f0" }}>
        <div className="max-w-3xl mx-auto">
          <div className="p-8 rounded-2xl bg-white" style={{ border: "1px solid #e5e1d8" }}>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "#3d3d3d" }}>
              難関大受験において、大手予備校や映像授業だけでは「あと一歩が届かない」という壁にぶつかる受験生が多くいます。授業を受けてもわかった気がするのに、模試では点が取れない——この状況は、アウトプット不足と個別フィードバックのなさから生まれることがほとんどです。
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#3d3d3d" }}>
              難関大受験の突破には「初見の問題を自力で解く思考力」が必要です。これは集団授業で受け身に学ぶだけでは身につきません。1対1の対話形式で「なぜこの解法を選ぶのか」「どう考えたか」を問われ続けることで初めて本質的な理解が根付きます。
            </p>
          </div>
        </div>
      </div>

      {/* WHY TUTORING FOR NANGANDAI */}
      <div className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-2 text-center" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>
            難関大受験に家庭教師が有効な3つの場面
          </h2>
          <p className="text-sm text-center mb-10" style={{ color: "#6b7280" }}>
            予備校との組み合わせで最大効果を発揮する
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                num: "01",
                title: "「わかったつもり」を潰す",
                body: "授業を聞いてわかった気になっていても、自力で解けるかどうかは別問題です。家庭教師では生徒が実際に解くプロセスをリアルタイムで確認し、思考の穴をその場で修正します。",
              },
              {
                num: "02",
                title: "志望校の傾向に特化した対策",
                body: "東大・京大・早慶はそれぞれ出題の癖が全く異なります。どの大学の過去問をどう分析し、何を優先して対策するかを講師と一緒に設計することで、無駄な勉強をなくせます。",
              },
              {
                num: "03",
                title: "浪人・直前期の弱点集中対策",
                body: "残り期間が短い場合ほど、弱点を絞って集中的に潰すことが重要です。家庭教師は「今この時期に何を優先すべきか」をリアルタイムで判断しながら指導を調整できます。",
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

      {/* WHAT TO LOOK FOR */}
      <div className="py-16 px-4" style={{ backgroundColor: "#f7f5f0" }}>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-6" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>
            難関大受験向け家庭教師の選び方
          </h2>
          <div className="space-y-4">
            {[
              {
                title: "① 講師自身の出身大学・学部を確認する",
                body: "難関大受験を指導するには、講師自身がその難易度を経験していることが重要です。「難関大合格者が指導する」と「それ以外の大学生が指導する」では、問題の本質的な教え方が根本的に異なります。",
              },
              {
                title: "② 志望校の過去問を解いたことがあるかを確認する",
                body: "東大・京大・早慶はそれぞれ出題傾向が全く異なります。担当講師がその大学の過去問を実際に解いた経験があるかを確認しましょう。自分が志望する大学を「知っている」講師を選ぶことが大切です。",
              },
              {
                title: "③ 答えを教えるだけでなく「思考プロセス」を指導してくれるか",
                body: "難関大入試では初見問題への対応力が問われます。「この問題の答えはこう」という指導ではなく、「どう考えるべきか」「なぜその方針を選ぶか」を教えてくれる講師を選びましょう。",
              },
            ].map((item, i) => (
              <div key={i} className="p-6 rounded-2xl bg-white" style={{ border: "1px solid #e5e1d8" }}>
                <p className="font-bold text-base mb-2" style={{ color: "#0c1a33" }}>{item.title}</p>
                <p className="text-sm leading-relaxed" style={{ color: "#6b7280" }}>{item.body}</p>
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
        heading="難関大受験対策はMedvanceへ"
        subtext="東大・京大・早慶など難関大を目指す受験生に、現役慶應医学部生が本質的な学力を1対1で指導します。まずは無料相談でご相談ください。"
      />
    </div>
  );
}
