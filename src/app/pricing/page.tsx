import Link from "next/link";

export default function PricingPage() {
  return (
    <div className="py-16 px-4 min-h-screen bg-white">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-4" style={{ color: "#142b57" }}>
          料金について
        </h1>
        <p className="text-center mb-12 text-base" style={{ color: "#424f8f" }}>
          Medvanceの指導料金は、生徒さんの状況・ご要望に合わせてご提案しています。
        </p>

        <div className="space-y-6 mb-12">
          <div className="p-6 rounded-lg" style={{ backgroundColor: "#d1d3ca" }}>
            <h2 className="text-xl font-bold mb-4" style={{ color: "#142b57" }}>
              料金のご案内
            </h2>
            <p className="text-base leading-relaxed mb-4" style={{ color: "#142b57" }}>
              Medvanceでは、生徒一人ひとりの状況・志望校・指導頻度・指導内容に応じて、最適な料金プランをご提案しています。
              まずは無料相談にてヒアリングを行い、そのうえで詳細な料金をお伝えしています。
            </p>
            <p className="text-sm" style={{ color: "#424f8f" }}>
              ※料金は相談後にご案内します。まずはお気軽にお問い合わせください。
            </p>
          </div>

          <div className="p-6 rounded-lg" style={{ border: "1px solid #d1d3ca" }}>
            <h2 className="text-xl font-bold mb-4" style={{ color: "#142b57" }}>
              料金に含まれるもの
            </h2>
            <ul className="space-y-3">
              {[
                "完全1対1の個別指導（対面・オンライン）",
                "オーダーメイド学習計画の作成・更新",
                "進捗管理・定期面談",
                "面接・小論文・願書対策",
                "保護者向け定期報告",
                "LINE・メールでの質問対応",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm md:text-base" style={{ color: "#424f8f" }}>
                  <span className="text-green-600 font-bold mt-0.5">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="p-6 rounded-lg" style={{ backgroundColor: "#424f8f" }}>
            <h2 className="text-xl font-bold text-white mb-3">
              まずは無料相談から
            </h2>
            <p className="text-white opacity-90 text-sm leading-relaxed">
              料金や指導内容について、まずは無料相談でお気軽にご確認ください。
              ご状況をヒアリングしたうえで、最適なプランをご提案いたします。
            </p>
          </div>
        </div>

        <div className="text-center">
          <Link
            href="/contact"
            className="inline-block px-8 py-4 text-white font-bold text-lg rounded shadow-md hover:opacity-90 transition-opacity"
            style={{ backgroundColor: "#142b57" }}
          >
            無料相談・お問い合わせはこちら
          </Link>
        </div>
      </div>
    </div>
  );
}
