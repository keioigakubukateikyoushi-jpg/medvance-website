import Link from "next/link";
import ColumnCTA from "@/components/ColumnCTA";
import { buildColumnPageSchemas } from "@/lib/seo";

const faqItems = [
  {
    q: "医学部浪人は何年目まで合格できますか？",
    a: "合格者の大多数は1〜3浪以内です。4浪以上になると年齢差別が懸念される私立医学部も一部あります。ただし「何浪まで」より「なぜ合格できていないかを正確に把握できているか」の方が重要で、原因が特定できて戦略を変えられれば4浪・5浪でも合格します。",
  },
  {
    q: "医学部の浪人生は何割いますか？",
    a: "私立医学部では入学者の半数以上が浪人生という大学も珍しくありません。国公立医学部では現役〜2浪が多いですが、私立では3〜4浪での合格者も一定数います。「浪人＝不利」ではなく、いかに戦略的に準備できるかが問われます。",
  },
  {
    q: "医学部を何浪もしてしまう原因は何ですか？",
    a: "最多は「勉強法・戦略の間違いに気づかないまま続ける」パターンです。毎年同じ予備校・同じ勉強法で結果が変わらない場合は、根本的な学習アプローチを変える必要があります。また「志望校の選定ミス」「面接対策の不足」も長浪化の原因となります。",
  },
  {
    q: "浪人して医学部の勉強を続けるメンタルの保ち方は？",
    a: "定期的な目標設定（模試ごとの数値目標）と、小さな成功体験の積み重ねが効果的です。孤独な浪人生活では伴走者の存在が精神的な安定に大きく影響します。信頼できる指導者・講師との対話が、メンタル維持と客観的な学習評価に役立ちます。",
  },
];

const schemas = buildColumnPageSchemas({
  title: "医学部は何浪まで大丈夫？浪人回数と合格の関係を解説",
  description: "医学部受験における浪人の現実と、何浪まで挑戦すべきかの判断基準を整理。長浪化する原因と対策も解説します。",
  slug: "nani-nuro",
  category: "受験戦略",
  keywords: ["医学部 何浪", "医学部 浪人 何年", "医学部 浪人 合格率", "医学部 多浪"],
  faqItems,
});

export const metadata = {
  title: "医学部は何浪まで大丈夫？浪人回数と合格の関係を解説",
  description:
    "医学部受験で何浪まで挑戦すべきか。長浪化の原因・私立医学部の年齢制限・浪人中の戦略転換のタイミングまで、現役慶應医学部生の視点で解説します。",
  alternates: { canonical: "/column/nani-nuro" },
};

const ronin_data = [
  { label: "現役", percent: "約30%", note: "私立医学部合格者に占める現役生の割合。国公立は現役比率が高め。" },
  { label: "1浪", percent: "約35%", note: "最も多い層。基礎固めが完成し、1年で結果を出す受験生が多い。" },
  { label: "2浪", percent: "約20%", note: "戦略の見直しと精神的タフネスが問われる。予備校を変える人も多い。" },
  { label: "3浪以上", percent: "約15%", note: "私立医学部では一定数が合格。根本的な学習アプローチの転換が鍵。" },
];

const reasons = [
  {
    title: "勉強法・戦略が間違ったまま",
    body: "最も多いパターン。毎年同じ予備校・同じやり方で同じような結果が続くのは、学習アプローチ自体に問題がある可能性が高い。集団授業で「わかった気」になるが、実際には使える知識になっていない状態が続く。",
  },
  {
    title: "志望校の設定ミス",
    body: "実力より高い大学だけを受験し続け、現実的な合格可能性を無視している。「今の実力で届く大学」と「第一志望」のバランスをとった受験校設計が必要。1校合格実績を作ることで翌年の戦略が変わる。",
  },
  {
    title: "面接・小論文対策の手薄さ",
    body: "学科試験は1次を通過できるのに面接で落ちるパターン。医学部の面接では志望動機の深さ・医師としての適性が厳しく問われる。対策なしで何度受けても通過率が上がりにくい。",
  },
  {
    title: "精神的な消耗・孤立",
    body: "浪人が長期化するほど精神的なプレッシャーが増す。「今年もダメかもしれない」という不安が集中力を削ぐ。客観的な伴走者（信頼できる指導者）なしに孤独に続けることの限界。",
  },
];

const relatedArticles = [
  { href: "/column/ronin-kateikyoushi", title: "医学部浪人生に家庭教師はおすすめか", label: "塾・指導" },
  { href: "/column/saijuken", title: "再受験で医学部に合格する方法", label: "再受験" },
  { href: "/column/juku-erabi", title: "医学部塾・予備校の選び方", label: "塾・指導" },
  { href: "/column/study-method", title: "医学部合格のための正しい勉強法", label: "勉強法" },
];

export default function NaniNuroPage() {
  return (
    <>
      {schemas.map((s, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
      ))}
      <div className="min-h-screen bg-white">
        <div style={{ backgroundColor: "#0c1a33" }} className="py-20 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#c9922a" }}>受験戦略</p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-noto-serif)" }}>
              医学部は何浪まで大丈夫？浪人回数と合格の関係を解説
            </h1>
            <p className="text-sm" style={{ color: "rgba(255,255,255,0.65)" }}>
              長浪化する原因と、今すぐ戦略を変えるべき判断基準を整理します
            </p>
          </div>
        </div>

        <div className="py-12 px-4 bg-white">
          <div className="max-w-3xl mx-auto column-body">
            <p>
              「医学部受験、何浪まで続けていいのか」という問いは、浪人生にとって非常に重くのしかかります。
              答えは一概には言えませんが、現場での経験から言えることを整理します。
            </p>
            <p>
              重要なのは「何浪目か」よりも「なぜ合格できていないか」を正確に把握できているかどうかです。
              原因が特定でき、戦略を根本から変えられる状況であれば、3浪・4浪でも十分な合格可能性があります。
            </p>
          </div>
        </div>

        {/* 浪人割合データ */}
        <div className="py-12 px-4" style={{ backgroundColor: "#f7f5f0" }}>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-6" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>
              私立医学部合格者に占める浪人の割合
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {ronin_data.map((d) => (
                <div key={d.label} className="p-5 rounded-2xl bg-white" style={{ border: "1px solid #e5e1d8" }}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-bold" style={{ color: "#0c1a33" }}>{d.label}</span>
                    <span className="text-2xl font-bold" style={{ color: "#c9922a" }}>{d.percent}</span>
                  </div>
                  <p className="text-xs leading-relaxed" style={{ color: "#6b7280" }}>{d.note}</p>
                </div>
              ))}
            </div>
            <p className="text-xs mt-4" style={{ color: "#9ca3af" }}>※上記は私立医学部全体の概算傾向。大学・年度により異なる。</p>
          </div>
        </div>

        {/* 長浪化の原因 */}
        <div className="py-12 px-4 bg-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-8" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>
              長浪化してしまう4つの原因
            </h2>
            <div className="space-y-5">
              {reasons.map((r, i) => (
                <div key={i} className="flex gap-5 p-6 rounded-2xl" style={{ backgroundColor: "#f7f5f0", border: "1px solid #e5e1d8" }}>
                  <span className="text-xl font-bold flex-shrink-0" style={{ color: "#c9922a" }}>0{i + 1}</span>
                  <div>
                    <p className="font-bold mb-2" style={{ color: "#0c1a33" }}>{r.title}</p>
                    <p className="text-sm leading-relaxed" style={{ color: "#3d3d3d" }}>{r.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 戦略転換のタイミング */}
        <div className="py-12 px-4" style={{ backgroundColor: "#f7f5f0" }}>
          <div className="max-w-3xl mx-auto column-body">
            <h2>「戦略を変える」べき3つのサイン</h2>
            <div className="space-y-4 mt-6">
              {[
                { sign: "2年連続で同じ大学の1次を通過できない", action: "勉強法・教材・指導スタイルを根本から見直す" },
                { sign: "1次は通るが2次（面接）で毎回落ちる", action: "面接・小論文対策を本格化する。複数回の模擬面接が必須" },
                { sign: "模試の偏差値が2年以上横ばい", action: "科目ごとの原因分析と、インプット方法の見直しが急務" },
              ].map((item, i) => (
                <div key={i} className="p-5 rounded-2xl bg-white" style={{ border: "1px solid #e5e1d8" }}>
                  <p className="text-sm font-bold mb-2" style={{ color: "#c9922a" }}>サイン{i + 1}: {item.sign}</p>
                  <p className="text-sm" style={{ color: "#3d3d3d" }}>対応策: {item.action}</p>
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
          heading="何浪しても変わらない場合、戦略を一緒に見直しましょう"
          subtext="現役慶應医学部生が、今の学習法・志望校・面接対策を整理して次の一手を提案します。"
          source="column-nani-nuro"
        />
      </div>
    </>
  );
}
