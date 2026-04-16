import Link from "next/link";
import ColumnCTA from "@/components/ColumnCTA";
import { buildColumnPageSchemas } from "@/lib/seo";

const faqItems = [
  {
    q: "医学部の小論文対策はいつから始めればいいですか？",
    a: "学科試験が安定してきた秋（10〜11月）から本格始動するのが一般的です。ただし「医師を志望する理由」「医療倫理に対する自分の意見」などの基本的な問いは、高2〜高3の早い段階から日常的に考えておくことが重要です。準備期間の目安は2〜3ヶ月です。",
  },
  {
    q: "医学部の小論文に独特のテーマはありますか？",
    a: "医療倫理（安楽死・臓器移植・延命治療）、医師不足・地域医療、AIと医師の役割、高齢化社会の医療、インフォームドコンセント、医師のワークライフバランスなどが頻出テーマです。自分なりの意見と根拠を持っておくことが大切です。",
  },
  {
    q: "小論文が苦手でも医学部に合格できますか？",
    a: "可能です。小論文は才能ではなく「型（構成）を覚える＋テーマ知識を積む」ことで確実に改善できます。複数回の添削を受けることで、自分の論理の弱点を把握し修正できます。苦手意識がある方こそ早めに対策を始めることをおすすめします。",
  },
  {
    q: "医学部の小論文で評価されるポイントは何ですか？",
    a: "①論理的な構成（問いに対して明確な答えと根拠がある）②テーマへの理解度（医療・社会問題を正しく把握している）③適切な文量と表現（指定字数に対して過不足なく、読みやすい文体）——の3点が中心です。独創的な意見より、論理的な説得力が求められます。",
  },
];

const schemas = buildColumnPageSchemas({
  title: "医学部の小論文対策・書き方・頻出テーマを徹底解説",
  description: "医学部入試の小論文対策を、書き方の基本から頻出テーマ・評価基準まで解説。合格答案に必要な3要素と練習方法を具体的に紹介します。",
  slug: "shoronbun-taisaku",
  category: "入試対策",
  keywords: ["医学部 小論文", "医学部 小論文 対策", "医学部 小論文 書き方", "医学部 小論文 テーマ"],
  faqItems,
});

export const metadata = {
  title: "医学部の小論文対策・書き方・頻出テーマを徹底解説 | Medvance",
  description:
    "医学部入試の小論文対策。合格に必要な3つの要素・書き方の型・頻出テーマ（医療倫理・地域医療・AI）と練習法を現役慶應医学部生が解説します。",
  alternates: { canonical: "/column/shoronbun-taisaku" },
};

const themes = [
  {
    category: "医療倫理",
    examples: ["安楽死・尊厳死の是非", "臓器移植と倫理", "延命治療の判断基準", "インフォームドコンセント"],
    advice: "単純な賛否より「どのような条件のもとで」「誰の視点から」を明確にした上で論じることが重要。",
  },
  {
    category: "医療制度・社会問題",
    examples: ["医師不足・地域医療格差", "高齢化社会と医療費", "医師のワークライフバランス", "かかりつけ医制度"],
    advice: "現状の課題を正確に把握した上で、自分が医師としてどう関わるかまで論じると評価が高い。",
  },
  {
    category: "医療とテクノロジー",
    examples: ["AIと医師の役割分担", "電子カルテ・遠隔医療", "ゲノム医療の可能性と課題", "医療データの活用と個人情報"],
    advice: "AIを「脅威」か「ツール」かという二項対立より、共存の具体的なビジョンを示す方が評価される。",
  },
  {
    category: "医師としての心構え",
    examples: ["医師に求められる資質", "コミュニケーション能力の重要性", "専門医か総合医か", "医師の倫理的ジレンマ"],
    advice: "「なぜ自分が医師を目指すか」と連動させて論じることで、面接との一貫性も生まれる。",
  },
];

const writingSteps = [
  { step: "01", title: "設問を正確に読む（2〜3分）", body: "「論じよ」「述べよ」「考察せよ」など指示語によって求められる内容が異なる。また字数制限・課題文の有無を確認する。" },
  { step: "02", title: "メモ・骨子づくり（5分）", body: "書き始める前に結論・根拠・具体例を箇条書きにする。この骨子があれば、書きながら迷うことがなくなる。" },
  { step: "03", title: "序論：問いと立場を明示（全体の10〜15%）", body: "「〜について、私は〇〇と考える」と最初に結論の方向性を示す。読み手（採点者）が何を読むか分かる状態にする。" },
  { step: "04", title: "本論：根拠と具体例（全体の70〜75%）", body: "「なぜそう考えるか」の根拠を2〜3点挙げる。抽象的な主張だけでなく、具体的な事例・データ・体験を盛り込む。" },
  { step: "05", title: "結論：主張の再提示＋展望（全体の10〜15%）", body: "序論で述べた立場を言い換えて再確認し、医師としての志望と結びつけてまとめると一貫性が生まれる。" },
];

const relatedArticles = [
  { href: "/column/mensetu", title: "医学部面接対策の完全ガイド", label: "入試対策" },
  { href: "/column/mensetu-timing", title: "面接対策はいつから始めるべきか", label: "入試対策" },
  { href: "/column/shiboriyusho-writing", title: "志望理由書の書き方と注意点", label: "入試対策" },
  { href: "/column/mensetu-shoronbun-kateikyoushi", title: "面接・小論文対策に家庭教師は必要か", label: "塾・指導" },
];

export default function ShoronbunTaisakuPage() {
  return (
    <>
      {schemas.map((s, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
      ))}
      <div className="min-h-screen bg-white">
        <div style={{ backgroundColor: "#0c1a33" }} className="py-20 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#c9922a" }}>入試対策</p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-noto-serif)" }}>
              医学部の小論文対策・書き方・頻出テーマを徹底解説
            </h1>
            <p className="text-sm" style={{ color: "rgba(255,255,255,0.65)" }}>
              合格答案に必要な3要素・書き方の型・頻出テーマ別の対策法を解説します
            </p>
          </div>
        </div>

        <div className="py-12 px-4 bg-white">
          <div className="max-w-3xl mx-auto column-body">
            <p>
              医学部入試の小論文は、学科試験とは異なる力が問われます。「どんな意見を持っているか」より「その意見を論理的に構成して伝えられるか」が評価の核心です。
            </p>
            <p>
              小論文が苦手な受験生の多くは、「型（構成）を知らないまま書き始める」「医療・社会問題の知識が不足している」「添削を受けずに独学している」という3つの問題を抱えています。このページでは、これらを解決する対策法を解説します。
            </p>
            <div className="rounded-2xl p-5 my-6" style={{ backgroundColor: "#fff8ec", border: "1px solid rgba(201,146,42,0.3)" }}>
              <p className="text-sm font-bold mb-1" style={{ color: "#c9922a" }}>医学部小論文で評価される3要素</p>
              <ul className="text-sm space-y-1 mt-2" style={{ color: "#3d3d3d" }}>
                <li>① 論理的な構成（序論・本論・結論の流れが明確）</li>
                <li>② テーマへの理解度（医療・社会問題を正確に把握している）</li>
                <li>③ 適切な文量と表現（読みやすく、字数内に収まっている）</li>
              </ul>
            </div>
          </div>
        </div>

        {/* 書き方ステップ */}
        <div className="py-12 px-4" style={{ backgroundColor: "#f7f5f0" }}>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-8" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>
              小論文の書き方：5つのステップ
            </h2>
            <div className="space-y-4">
              {writingSteps.map((step) => (
                <div key={step.step} className="flex gap-5 p-6 rounded-2xl bg-white" style={{ border: "1px solid #e5e1d8" }}>
                  <span className="text-2xl font-bold flex-shrink-0" style={{ color: "#c9922a" }}>{step.step}</span>
                  <div>
                    <p className="font-bold mb-2" style={{ color: "#0c1a33" }}>{step.title}</p>
                    <p className="text-sm leading-relaxed" style={{ color: "#3d3d3d" }}>{step.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 頻出テーマ */}
        <div className="py-12 px-4 bg-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-8" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>
              頻出テーマ別の対策ポイント
            </h2>
            <div className="space-y-6">
              {themes.map((theme) => (
                <div key={theme.category} className="rounded-2xl overflow-hidden" style={{ border: "1px solid #e5e1d8" }}>
                  <div className="px-6 py-4" style={{ backgroundColor: "#0c1a33" }}>
                    <h3 className="font-bold text-white">{theme.category}</h3>
                  </div>
                  <div className="px-6 py-5">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {theme.examples.map((ex) => (
                        <span key={ex} className="text-xs px-3 py-1 rounded-full font-medium" style={{ backgroundColor: "#f7f5f0", color: "#0c1a33", border: "1px solid #e5e1d8" }}>
                          {ex}
                        </span>
                      ))}
                    </div>
                    <p className="text-sm leading-relaxed" style={{ color: "#3d3d3d" }}>
                      <span className="font-semibold" style={{ color: "#c9922a" }}>対策のポイント：</span>{theme.advice}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 練習法 */}
        <div className="py-12 px-4" style={{ backgroundColor: "#f7f5f0" }}>
          <div className="max-w-3xl mx-auto column-body">
            <h2>効果的な小論文練習の3ステップ</h2>
            <div className="space-y-5 mt-6">
              {[
                { title: "STEP1: 骨子のみを書く練習", body: "最初から完全な文章を書くのではなく、「結論・根拠①・根拠②・具体例・結論の言い換え」の箇条書きを繰り返す。構成力を鍛える最速の方法。" },
                { title: "STEP2: 時間を計って書く", body: "実際の試験は60〜90分で800〜1,200字程度が多い。毎回タイマーをセットして本番と同じ条件で練習することで、配分感覚を身につける。" },
                { title: "STEP3: 必ず添削を受ける", body: "自己採点では自分の論理の穴に気づけない。信頼できる指導者に添削を依頼し、「論理が飛躍している箇所」「テーマ理解の誤り」を指摘してもらうことが上達への近道。" },
              ].map((item, i) => (
                <div key={i} className="p-6 rounded-2xl bg-white" style={{ border: "1px solid #e5e1d8" }}>
                  <p className="font-bold mb-2" style={{ color: "#c9922a" }}>{item.title}</p>
                  <p className="text-sm leading-relaxed" style={{ color: "#3d3d3d" }}>{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="py-14 px-4 bg-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-8" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>よくある質問</h2>
            <div className="space-y-4">
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
            <h2 className="text-xl font-bold mb-6 mt-12" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>関連記事</h2>
            <div className="grid md:grid-cols-2 gap-4">
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
          heading="小論文・面接の1対1添削もMedvanceにお任せください"
          subtext="現役慶應医学部生が、小論文の構成から医療倫理の考え方まで完全1対1で指導します。"
          source="column-shoronbun-taisaku"
        />
      </div>
    </>
  );
}
