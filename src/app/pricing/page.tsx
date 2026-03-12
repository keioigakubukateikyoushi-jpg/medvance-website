import Link from "next/link";

const included = [
  "完全1対1の個別指導（対面・オンライン）",
  "オーダーメイド学習計画の作成・更新",
  "進捗管理・定期面談",
  "面接・小論文・願書対策",
  "保護者向け定期報告",
  "LINE・メールでの質問対応",
];

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Page Header */}
      <div style={{ backgroundColor: "#0c1a33" }} className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#c9922a" }}>Pricing</p>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: "'Noto Serif JP', serif" }}>
            料金について
          </h1>
          <p className="text-base" style={{ color: "rgba(255,255,255,0.65)" }}>
            生徒さんの状況・ご要望に合わせてご提案しています。
          </p>
        </div>
      </div>

      <div className="py-20 px-4">
        <div className="max-w-3xl mx-auto space-y-6">

          {/* Pricing Info */}
          <div className="p-8 rounded-2xl" style={{ backgroundColor: "#f7f5f0", border: "1px solid #e5e1d8" }}>
            <h2 className="text-xl font-bold mb-4" style={{ color: "#0c1a33" }}>料金のご案内</h2>
            <p className="text-base leading-relaxed mb-4" style={{ color: "#3d3d3d" }}>
              Medvanceでは、生徒一人ひとりの状況・志望校・指導頻度・指導内容に応じて、最適な料金プランをご提案しています。
              まずは無料相談にてヒアリングを行い、そのうえで詳細な料金をお伝えしています。
            </p>
            <p className="text-sm" style={{ color: "#6b7280" }}>
              料金は相談後にご案内します。まずはお気軽にお問い合わせください。
            </p>
          </div>

          {/* What's included */}
          <div className="p-8 rounded-2xl bg-white" style={{ border: "1px solid #e5e1d8" }}>
            <h2 className="text-xl font-bold mb-6" style={{ color: "#0c1a33" }}>料金に含まれるもの</h2>
            <ul className="space-y-3">
              {included.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm" style={{ color: "#3d3d3d" }}>
                  <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ backgroundColor: "#0c1a33" }}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-3 h-3 text-white">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Free Consultation */}
          <div className="p-8 rounded-2xl text-center" style={{ backgroundColor: "#0c1a33" }}>
            <h2 className="text-xl font-bold text-white mb-3" style={{ fontFamily: "'Noto Serif JP', serif" }}>
              まずは無料相談から
            </h2>
            <p className="text-sm leading-relaxed mb-8" style={{ color: "rgba(255,255,255,0.68)" }}>
              料金や指導内容について、まずは無料相談でお気軽にご確認ください。
              ご状況をヒアリングしたうえで、最適なプランをご提案いたします。
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-4 text-white font-bold text-base rounded-lg hover:opacity-90 transition-opacity"
              style={{ backgroundColor: "#c9922a" }}
            >
              無料相談・お問い合わせ
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
