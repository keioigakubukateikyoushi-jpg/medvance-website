import Link from "next/link";
import ColumnCTA from "@/components/ColumnCTA";
import ColumnJsonLd from "@/components/ColumnJsonLd";

const faqItems = [
  {
    q: "推薦・AO入試対策はいつから始めるべきですか？",
    a: "高校3年生の4〜5月が理想的なスタートです。志望理由書の提出締め切りは9〜10月に集中することが多く、自己分析→書類作成→添削→面接練習というプロセスには最低3〜4ヶ月かかります。夏休みに完成度を上げるためにも、早期スタートが有利です。",
  },
  {
    q: "一般入試と推薦・AO入試を並行して準備できますか？",
    a: "はい、多くの受験生が並行しています。ただし、AO対策（自己分析・書類作成・面接練習）と一般入試対策（学科試験）はアプローチが全く異なります。スケジュール管理と優先順位の設計が重要になるため、Medvanceでは個別に計画を設計します。",
  },
  {
    q: "どんな学部のAO・推薦入試にも対応していますか？",
    a: "医療系・理系・文系・芸術系など、幅広い学部のAO・推薦入試に対応しています。ただし学部によって試験内容（プレゼン・実技など）が異なるため、事前にご相談ください。面接・小論文・志望理由書の指導は学部を問わず対応しています。",
  },
  {
    q: "志望理由書が書けない・何を書けばいいかわからない場合はどうすればいいですか？",
    a: "よくあるお悩みです。Medvanceでは志望理由書を書く前に、まず自己分析の時間を設けます。「なぜこの大学・学部か」「自分の経験・強みは何か」「将来何をしたいか」を対話形式で掘り起こし、書くべき内容を整理してから執筆に入ります。",
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
  { href: "/for/suisen-ao", title: "推薦・AO入試対策｜Medvanceの指導内容", label: "AO・推薦対策" },
  { href: "/column/mensetu", title: "医学部面接対策の完全ガイド", label: "面接対策" },
  { href: "/column/mensetu-shoronbun-kateikyoushi", title: "面接・小論文対策に家庭教師が最適な理由", label: "面接・小論文" },
];

const timeline = [
  { month: "4〜5月", task: "自己分析・軸の言語化", detail: "「なぜその大学・学部か」「自分の強みは何か」を深掘り。志望理由の核をつくる。" },
  { month: "6〜7月", task: "志望理由書・書類の初稿", detail: "自己分析をもとに志望理由書・自己推薦書の初稿を作成。講師のフィードバックで複数回改訂。" },
  { month: "夏休み", task: "書類の完成・面接準備開始", detail: "書類を最終仕上げしながら、模擬面接を開始。想定質問へのアンサーを磨く。" },
  { month: "9〜10月", task: "書類提出・面接直前対策", detail: "提出後は本番を想定した集中模擬面接。小論文試験がある場合は時間内作成練習も。" },
];

export const metadata = {
  title: "推薦・AO入試対策の完全ガイド｜志望理由書・面接・小論文 | Medvance",
  description:
    "推薦・総合型選抜（AO入試）の対策方法を解説。志望理由書の書き方・面接準備・小論文対策・スケジュール設計まで。現役慶應医学部生による個別指導で志望校合格を目指す。",
  keywords: [
    "推薦入試 対策 家庭教師",
    "AO入試 志望理由書 書き方",
    "総合型選抜 面接 対策",
    "推薦入試 いつから",
    "AO入試 小論文 対策",
  ],
  alternates: {
    canonical: "/column/suisen-ao-taisaku",
  },
};

export default function SuisenAoTaisakuPage() {
  return (
    <div className="min-h-screen bg-white">
      <ColumnJsonLd
        title="推薦・AO入試対策の完全ガイド｜志望理由書・面接・小論文"
        description="推薦・総合型選抜（AO入試）の対策方法を解説。志望理由書の書き方・面接準備・小論文対策・スケジュール設計まで。現役慶應医学部生による個別指導。"
        slug="suisen-ao-taisaku"
        category="入試対策"
        keywords={["推薦入試 対策 家庭教師", "AO入試 志望理由書 書き方", "総合型選抜 面接 対策"]}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div style={{ backgroundColor: "#0c1a33" }} className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#c9922a" }}>推薦・AO入試対策</p>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: "'Noto Serif JP', serif" }}>
            推薦・AO入試対策の完全ガイド<br />志望理由書・面接・小論文
          </h1>
          <p className="text-base" style={{ color: "rgba(255,255,255,0.65)" }}>
            何をいつから準備するか。スケジュールと対策の全体像を整理する
          </p>
        </div>
      </div>

      {/* INTRO */}
      <div className="py-16 px-4" style={{ backgroundColor: "#f7f5f0" }}>
        <div className="max-w-3xl mx-auto">
          <div className="p-8 rounded-2xl bg-white" style={{ border: "1px solid #e5e1d8" }}>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "#3d3d3d" }}>
              推薦・総合型選抜（AO入試）は、一般入試とは全く異なる準備が必要です。学科試験ではなく「あなた自身」を問われる入試であり、志望理由書・面接・小論文という形で「なぜこの大学か」「何をしたいか」「どんな人物か」を総合的に評価されます。
            </p>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "#3d3d3d" }}>
              難しいのは「答えが一つではない」こと。自己分析の深さと、それを言語化する力が直接結果に影響します。一人で準備するよりも、対話形式で深掘りしながら準備した方が圧倒的に完成度が上がります。
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#3d3d3d" }}>
              Medvanceでは、医学部入試で面接・小論文対策を徹底的に行った現役慶應医学部生が、推薦・AO入試の準備を完全1対1でサポートします。
            </p>
          </div>
        </div>
      </div>

      {/* TIMELINE */}
      <div className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-2 text-center" style={{ color: "#0c1a33", fontFamily: "'Noto Serif JP', serif" }}>
            推薦・AO入試対策のスケジュール
          </h2>
          <p className="text-sm text-center mb-10" style={{ color: "#6b7280" }}>
            書類締め切りから逆算して4〜5ヶ月前に着手する
          </p>
          <div className="space-y-4">
            {timeline.map((item, i) => (
              <div key={i} className="flex gap-5 p-6 rounded-2xl" style={{ backgroundColor: "#f7f5f0", border: "1px solid #e5e1d8" }}>
                <div className="flex-shrink-0 w-20">
                  <span className="inline-block text-xs font-bold px-2 py-1 rounded-full text-center w-full" style={{ backgroundColor: "#0c1a33", color: "#c9922a" }}>{item.month}</span>
                </div>
                <div>
                  <p className="font-bold text-sm mb-1" style={{ color: "#0c1a33" }}>{item.task}</p>
                  <p className="text-sm leading-relaxed" style={{ color: "#6b7280" }}>{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* THREE PILLARS */}
      <div className="py-16 px-4" style={{ backgroundColor: "#f7f5f0" }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-2 text-center" style={{ color: "#0c1a33", fontFamily: "'Noto Serif JP', serif" }}>
            合否を分ける3つの要素
          </h2>
          <p className="text-sm text-center mb-10" style={{ color: "#6b7280" }}>書類・面接・小論文それぞれの対策ポイント</p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "志望理由書",
                points: [
                  "「なぜこの大学・学部か」に明確な答えがあるか",
                  "自分の経験・強みと志望動機がつながっているか",
                  "将来の具体的なビジョンが示されているか",
                  "読みやすく論理的な構成になっているか",
                ],
              },
              {
                title: "面接",
                points: [
                  "志望理由書の深掘り質問に答えられるか",
                  "自分の考えを自分の言葉で話せるか",
                  "圧迫・想定外の質問にも落ち着いて対応できるか",
                  "姿勢・話し方・表情に誠実さが表れているか",
                ],
              },
              {
                title: "小論文",
                points: [
                  "問われていることに正確に答えているか",
                  "自分の主張が論理的に展開されているか",
                  "反論を想定した議論ができているか",
                  "制限時間内に完成した文章が書けるか",
                ],
              },
            ].map((pillar, i) => (
              <div key={i} className="p-6 rounded-2xl bg-white" style={{ border: "1px solid #e5e1d8" }}>
                <p className="font-bold text-base mb-4 pb-3" style={{ color: "#0c1a33", borderBottom: "2px solid #c9922a" }}>{pillar.title}</p>
                <ul className="space-y-2">
                  {pillar.points.map((point, j) => (
                    <li key={j} className="flex items-start gap-2 text-xs" style={{ color: "#6b7280" }}>
                      <span className="flex-shrink-0 font-bold mt-0.5" style={{ color: "#c9922a" }}>✓</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div className="py-16 px-4 bg-white">
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
        heading="推薦・AO入試の準備はMedvanceへ"
        subtext="志望理由書の作成から模擬面接・小論文対策まで、現役慶應医学部生が完全1対1でサポート。まずは無料相談でご相談ください。"
      />
    </div>
  );
}
