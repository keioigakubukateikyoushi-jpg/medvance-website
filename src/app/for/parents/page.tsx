import Link from "next/link";

export const metadata = {
  title: "保護者の方へ｜お子さまの医学部合格を一緒に目指します | Medvance",
  description:
    "お子さまの医学部合格を目指す保護者の方へ。Medvanceは現役慶應医学部生による完全1対1指導。定期報告・保護者面談あり。料金・指導内容など、まずは無料相談でご確認ください。",
};

const concerns = [
  {
    title: "「本当に効果があるの？」",
    body: "偏差値40台から慶應医学部合格の実績があります。毎月の進捗報告と定期面談で、成果を可視化します。抽象的な「頑張っています」ではなく、数字で伝えます。",
  },
  {
    title: "「講師は信頼できる人？」",
    body: "全講師が現役慶應義塾大学医学部生。学力だけでなく、人物・指導力も含めて厳選しています。お子さまとの相性も考慮し、最適な講師をマッチングします。",
  },
  {
    title: "「料金が心配」",
    body: "無料相談で状況をヒアリングしたうえで、最適なプランとともに料金をご提案します。まずはお気軽にご相談ください。追加費用が発生する場合も事前にご説明します。",
  },
];

const reasons = [
  {
    title: "毎月の進捗報告",
    body: "保護者の方向けに、毎月の学習状況・成績推移・次月の方針をご報告します。「いま何をしているか」が常に見えるので、安心して任せていただけます。",
  },
  {
    title: "保護者面談の実施",
    body: "定期的に保護者面談を設け、ご不安・ご要望を直接お聞きします。指導方針への反映もスムーズに行います。三者面談形式での実施も可能です。",
  },
  {
    title: "面接・小論文・願書まで一貫サポート",
    body: "学力指導だけでなく、出願書類・面接・小論文まで、医学部合格に必要なすべてを一貫してサポートします。受験期の煩雑な手続きも一緒に進めます。",
  },
];

const faqs = [
  {
    q: "子供との相性が合わなかった場合は？",
    a: "担当講師の変更も可能です。お子さまとの相性を最優先に考え、納得いただけるまで対応します。講師交代のご要望はいつでも遠慮なくお申し付けください。",
  },
  {
    q: "親も面談に参加できますか？",
    a: "はい、保護者様の面談参加は大歓迎です。定期的な三者面談も実施しており、お子さまの状況を一緒に確認していただけます。",
  },
  {
    q: "指導の様子はわかりますか？",
    a: "毎回の授業後に指導内容の報告を行います。また、定期的な進捗レポートをお送りします。学習の進み具合を常に把握できる仕組みを整えています。",
  },
  {
    q: "いつから始めるのがいいですか？",
    a: "早ければ早いほど選択肢が広がります。高1・高2からのご相談も多くいただいています。まずは無料相談でご状況をお聞かせください。",
  },
];

export default function ParentsPage() {
  return (
    <div className="min-h-screen bg-white">
      <div style={{ backgroundColor: "#0c1a33" }} className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#c9922a" }}>
            保護者の方へ
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: "'Noto Serif JP', serif" }}>
            お子さまの医学部合格を、一緒に目指します。
          </h1>
          <p className="text-base" style={{ color: "rgba(255,255,255,0.65)" }}>
            保護者の方の不安に、Medvanceは誠実にお答えします
          </p>
        </div>
      </div>

      <div className="py-16 px-4" style={{ backgroundColor: "#f7f5f0" }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-10" style={{ color: "#0c1a33", fontFamily: "'Noto Serif JP', serif" }}>
            保護者の方からよく聞かれる不安
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {concerns.map((item, i) => (
              <div key={i} className="p-6 rounded-2xl bg-white" style={{ border: "1px solid #e5e1d8" }}>
                <p className="font-bold text-sm mb-3" style={{ color: "#0c1a33" }}>{item.title}</p>
                <p className="text-sm leading-relaxed" style={{ color: "#6b7280" }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-10" style={{ color: "#0c1a33", fontFamily: "'Noto Serif JP', serif" }}>
            Medvanceが選ばれる理由（保護者の視点から）
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {reasons.map((item, i) => (
              <div key={i} className="p-6 rounded-2xl" style={{ backgroundColor: "#f7f5f0", border: "1px solid #e5e1d8" }}>
                <div className="w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold mb-4" style={{ backgroundColor: "#c9922a" }}>
                  {i + 1}
                </div>
                <p className="font-bold text-sm mb-2" style={{ color: "#0c1a33" }}>{item.title}</p>
                <p className="text-sm leading-relaxed" style={{ color: "#6b7280" }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="py-16 px-4" style={{ backgroundColor: "#f7f5f0" }}>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8" style={{ color: "#0c1a33", fontFamily: "'Noto Serif JP', serif" }}>
            よくあるご質問（保護者の方向け）
          </h2>
          <div className="space-y-4">
            {faqs.map((item, i) => (
              <div key={i} className="p-6 rounded-2xl bg-white" style={{ border: "1px solid #e5e1d8" }}>
                <p className="font-bold text-sm mb-2" style={{ color: "#0c1a33" }}>Q. {item.q}</p>
                <p className="text-sm leading-relaxed" style={{ color: "#6b7280" }}>A. {item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="py-20 px-4" style={{ backgroundColor: "#0c1a33" }}>
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-sm font-semibold tracking-widest uppercase mb-3" style={{ color: "#c9922a" }}>Free Consultation</p>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4" style={{ fontFamily: "'Noto Serif JP', serif" }}>
            まずは無料相談から
          </h2>
          <p className="mb-8 text-sm" style={{ color: "rgba(255,255,255,0.65)" }}>
            お子さまの状況をお聞きし、最適なサポートプランをご提案します。
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 text-white font-bold text-base rounded-lg shadow-md hover:opacity-90 transition-opacity"
            style={{ backgroundColor: "#c9922a" }}
          >
            無料相談・お問い合わせ
          </Link>
        </div>
      </div>
    </div>
  );
}
