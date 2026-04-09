import Link from "next/link";
import ColumnCTA from "@/components/ColumnCTA";

const faqItems = [
  {
    q: "医学部受験の家庭教師はいくらかかりますか？",
    a: "講師の属性によって異なります。現役医学部生の場合、1コマ（80〜90分）1万〜2万円が相場で、月4回（週1）で4〜8万円程度です。コーチング・学習管理が含まれるサービスは月8〜15万円になることがほとんどです。",
  },
  {
    q: "安い医学部家庭教師と高い家庭教師の違いは何ですか？",
    a: "最大の違いは「指導者の質」と「サポート範囲」です。安い家庭教師は一般理系の大学生が多く、医学部特有の面接・小論文対策ができないことがほとんどです。高い家庭教師は現役医学部生または医学部卒で、学科以外の対策や学習管理まで含まれることが多いです。",
  },
  {
    q: "医学部家庭教師の費用は予備校と比べてどうですか？",
    a: "医学部専門予備校は年間200〜500万円かかるケースもあります。一方、家庭教師（週1回コース）は月8〜15万円、年間では96〜180万円程度です。予備校との併用でも、合計費用が予備校単体より低く抑えられるケースもあります。",
  },
  {
    q: "Medvanceの料金はいくらですか？",
    a: "週1回コース月8万円（月4回80分授業＋コーチング込み）、週2回コース月14万円、週3回以上月20万円〜です。入塾金は初回2万円のみです。コーチング・学習管理・面接小論文対策が別途料金なしで含まれています。",
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
  { href: "/column/kateikyoushi", title: "医学部受験に家庭教師は効果的か？選び方と活用法", label: "家庭教師" },
  { href: "/pricing", title: "Medvanceの料金と始め方", label: "料金" },
  { href: "/column/igakubu-kateikyoushi-hikaku", title: "医学部受験の家庭教師を比較して選ぶ方法", label: "比較" },
];

export const metadata = {
  title: "医学部受験の家庭教師料金・費用相場【2026年版】 | Medvance",
  description:
    "医学部受験向け家庭教師の料金・費用相場を解説。講師の属性別（大学生・医学部生・プロ）の相場比較、予備校との費用比較、コスパの見方まで詳しく解説します。",
  keywords: [
    "医学部 家庭教師 料金",
    "医学部受験 家庭教師 費用",
    "医学部 家庭教師 相場",
    "医学部 個別指導 料金",
    "医学部 家庭教師 いくら",
  ],
  alternates: {
    canonical: "/column/igakubu-kateikyoushi-ryokin",
  },
};

export default function IgakubuKateikyoushiRyokinPage() {
  return (
    <div className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div style={{ backgroundColor: "#0c1a33" }} className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#c9922a" }}>料金・費用</p>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-noto-serif)" }}>
            医学部受験の家庭教師<br />料金・費用相場【2026年版】
          </h1>
          <p className="text-base" style={{ color: "rgba(255,255,255,0.65)" }}>
            講師の属性別・サービス形態別に正しい相場を解説
          </p>
        </div>
      </div>

      <div className="py-16 px-4" style={{ backgroundColor: "#f7f5f0" }}>
        <div className="max-w-3xl mx-auto">
          <div className="p-8 rounded-2xl bg-white" style={{ border: "1px solid #e5e1d8" }}>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "#3d3d3d" }}>
              「医学部受験の家庭教師はいくらかかる？」これは受験生・保護者からもっとも多く聞かれる質問のひとつです。料金は講師の属性・サービスの内容・指導頻度によって大きく異なります。
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#3d3d3d" }}>
              「安ければいい」とも「高ければいい」とも言えません。費用に対してどれだけ成績が伸びるか——コストパフォーマンスで選ぶことが大切です。
            </p>
          </div>
        </div>
      </div>

      {/* PRICE TABLE */}
      <div className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-2 text-center" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>
            講師の属性別・料金相場
          </h2>
          <p className="text-sm text-center mb-10" style={{ color: "#6b7280" }}>
            1コマ＝80〜90分で計算。月4回（週1）の場合の目安。
          </p>
          <div className="rounded-2xl overflow-hidden" style={{ border: "1px solid #e5e1d8" }}>
            <table className="w-full text-sm">
              <thead>
                <tr style={{ backgroundColor: "#0c1a33" }}>
                  <th className="px-4 py-3 text-left font-semibold text-white">講師の属性</th>
                  <th className="px-4 py-3 text-left font-semibold" style={{ color: "#c9922a" }}>1コマ相場</th>
                  <th className="px-4 py-3 text-left font-semibold text-white">月額目安（週1）</th>
                  <th className="px-4 py-3 text-left font-semibold text-white">注意点</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { type: "一般大学生（理系）", perUnit: "3,000〜5,000円", monthly: "1.2〜2万円", note: "医学部特有の対策が難しい" },
                  { type: "大学院生・一般理系卒", perUnit: "5,000〜1万円", monthly: "2〜4万円", note: "面接・小論文対応に限界がある" },
                  { type: "現役医学部生（一般）", perUnit: "8,000〜1.5万円", monthly: "3.2〜6万円", note: "所属大学・学年で差がある" },
                  { type: "現役慶應医学部生（Medvance）", perUnit: "1.5〜2万円", monthly: "8万円〜（コーチング込み）", note: "面接・小論文・学習管理まで込み" },
                  { type: "医師・医学部卒", perUnit: "2〜3万円", monthly: "8〜12万円", note: "最新の入試情報はやや古い場合も" },
                ].map((row, i) => (
                  <tr key={i} style={{ backgroundColor: i % 2 === 0 ? "#fff" : "#faf9f6", borderTop: "1px solid #e5e1d8" }}>
                    <td className="px-4 py-4 font-semibold text-xs" style={{ color: "#0c1a33" }}>{row.type}</td>
                    <td className="px-4 py-4 text-xs font-bold" style={{ color: "#c9922a" }}>{row.perUnit}</td>
                    <td className="px-4 py-4 text-xs" style={{ color: "#0c1a33" }}>{row.monthly}</td>
                    <td className="px-4 py-4 text-xs" style={{ color: "#6b7280" }}>{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* VS YOBIKO */}
      <div className="py-16 px-4" style={{ backgroundColor: "#f7f5f0" }}>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-6" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>
            家庭教師 vs 予備校：費用対効果の比較
          </h2>
          <div className="rounded-2xl overflow-hidden mb-8" style={{ border: "1px solid #e5e1d8" }}>
            <table className="w-full text-sm">
              <thead>
                <tr style={{ backgroundColor: "#0c1a33" }}>
                  <th className="px-4 py-3 text-left font-semibold text-white">サービス形態</th>
                  <th className="px-4 py-3 text-left font-semibold" style={{ color: "#c9922a" }}>年間費用目安</th>
                  <th className="px-4 py-3 text-left font-semibold text-white">個別対応</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { type: "医学部専門予備校（フルコース）", cost: "200〜500万円", custom: "集団授業中心" },
                  { type: "大手予備校（医学部コース）", cost: "100〜200万円", custom: "ほぼ集団授業" },
                  { type: "Medvance（週1回）", cost: "約100万円（授業+コーチング込み）", custom: "完全1対1" },
                  { type: "Medvance（週2回）", cost: "約170万円（授業+コーチング込み）", custom: "完全1対1" },
                ].map((row, i) => (
                  <tr key={i} style={{ backgroundColor: i % 2 === 0 ? "#fff" : "#faf9f6", borderTop: "1px solid #e5e1d8" }}>
                    <td className="px-4 py-4 font-semibold text-xs" style={{ color: "#0c1a33" }}>{row.type}</td>
                    <td className="px-4 py-4 text-xs font-bold" style={{ color: "#c9922a" }}>{row.cost}</td>
                    <td className="px-4 py-4 text-xs" style={{ color: "#6b7280" }}>{row.custom}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="p-6 rounded-2xl" style={{ backgroundColor: "#f7f5f0", border: "1px solid #e5e1d8" }}>
            <p className="text-sm leading-relaxed" style={{ color: "#3d3d3d" }}>
              費用だけを比べると「予備校の方が安い」ケースもあります。しかし、予備校の集団授業では「自分の弱点だけに集中する」「面接を何度でも練習する」という個別対応はできません。合格率とその後の費用負担（浪人の追加費用など）まで考えると、個別指導の費用対効果は非常に高いと言えます。
            </p>
          </div>
        </div>
      </div>

      {/* MEDVANCE PRICE */}
      <div className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-6" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>
            Medvanceの料金プラン
          </h2>
          <div className="space-y-3 mb-6">
            {[
              { label: "週1回コース", price: "月8万円", detail: "月4回授業（80分）＋コーチング。入塾金2万円（初回のみ）。" },
              { label: "週2回コース", price: "月14万円", detail: "月8回授業（80分）＋コーチング。" },
              { label: "週3回以上", price: "月20万円〜", detail: "月12回以上。直前期・浪人生の短期集中向け。" },
            ].map((item, i) => (
              <div key={i} className="p-5 rounded-xl" style={{ backgroundColor: "#f7f5f0", border: "1px solid #e5e1d8" }}>
                <div className="flex items-center justify-between mb-2">
                  <p className="font-bold text-sm" style={{ color: "#0c1a33" }}>{item.label}</p>
                  <p className="font-bold text-base" style={{ color: "#c9922a" }}>{item.price}</p>
                </div>
                <p className="text-xs leading-relaxed" style={{ color: "#6b7280" }}>{item.detail}</p>
              </div>
            ))}
          </div>
          <div className="p-5 rounded-xl" style={{ backgroundColor: "#0c1a33" }}>
            <p className="text-sm font-semibold text-white mb-2">全コース共通で含まれるもの</p>
            <ul className="space-y-1">
              {["面接・小論文・願書の個別指導", "毎日の学習管理・進捗確認", "24時間LINEでの質問対応", "保護者への定期報告"].map((item) => (
                <li key={item} className="text-xs flex items-center gap-2" style={{ color: "rgba(255,255,255,0.8)" }}>
                  <span style={{ color: "#c9922a" }}>✓</span>{item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

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
        heading="まずは無料相談で、あなたに最適なプランをご提案します"
        subtext="週1回・週2回・短期集中など、状況に合わせた料金プランをご用意しています。相談は無料です。"
      />
    </div>
  );
}
