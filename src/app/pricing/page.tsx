import Link from "next/link";

const plans = [
  { freq: "月4回",  weekly: "週1回", lessons: 4,  lessonFee: 60000,  coaching: 20000, total: 80000,  discount: 0 },
  { freq: "月8回",  weekly: "週2回", lessons: 8,  lessonFee: 120000, coaching: 20000, total: 140000, discount: 0 },
  { freq: "月12回", weekly: "週3回", lessons: 12, lessonFee: 180000, coaching: 20000, total: 200000, discount: 20000 },
  { freq: "月16回", weekly: "週4回", lessons: 16, lessonFee: 240000, coaching: 20000, total: 260000, discount: 20000 },
  { freq: "月20回", weekly: "週5回", lessons: 20, lessonFee: 300000, coaching: 20000, total: 320000, discount: 20000 },
];

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
            授業＋コーチングで、合格まで徹底的にサポートします。
          </p>
        </div>
      </div>

      <div className="py-20 px-4">
        <div className="max-w-3xl mx-auto space-y-8">

          {/* 基本料金 */}
          <div className="p-8 rounded-2xl" style={{ backgroundColor: "#f7f5f0", border: "1px solid #e5e1d8" }}>
            <h2 className="text-xl font-bold mb-6" style={{ color: "#0c1a33" }}>基本料金</h2>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="p-5 rounded-xl bg-white text-center" style={{ border: "1px solid #e5e1d8" }}>
                <p className="text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: "#c9922a" }}>授業</p>
                <p className="text-3xl font-bold" style={{ color: "#0c1a33" }}>15,000<span className="text-base font-normal">円</span></p>
                <p className="text-xs mt-1" style={{ color: "#6b7280" }}>1コマ80分</p>
              </div>
              <div className="p-5 rounded-xl bg-white text-center" style={{ border: "1px solid #e5e1d8" }}>
                <p className="text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: "#c9922a" }}>入塾金</p>
                <p className="text-3xl font-bold" style={{ color: "#0c1a33" }}>20,000<span className="text-base font-normal">円</span></p>
                <p className="text-xs mt-1" style={{ color: "#6b7280" }}>初回のみ</p>
              </div>
            </div>
            <p className="text-xs leading-relaxed" style={{ color: "#6b7280" }}>
              コーチング（月2万円）は全プランに含まれます。学習計画の作成・進捗管理・相談対応を行います。
            </p>
          </div>

          {/* 月額プラン */}
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold" style={{ color: "#0c1a33" }}>月額プラン（授業＋コーチング）</h2>
              <span className="text-xs font-bold px-3 py-1.5 rounded-full" style={{ backgroundColor: "#fff0d6", color: "#c9922a", border: "1px solid #c9922a" }}>
                期間限定割引実施中
              </span>
            </div>
            <div className="space-y-3">
              {plans.map((plan, i) => {
                const discounted = plan.discount > 0;
                const finalTotal = plan.total - plan.discount;
                return (
                  <div
                    key={i}
                    className="relative rounded-xl overflow-hidden"
                    style={{
                      border: discounted ? "2px solid #c9922a" : "1px solid #e5e1d8",
                      backgroundColor: discounted ? "#fffbf4" : "#fff",
                    }}
                  >
                    {discounted && (
                      <div
                        className="absolute top-0 right-0 text-xs font-bold px-3 py-1 rounded-bl-xl"
                        style={{ backgroundColor: "#c9922a", color: "#fff" }}
                      >
                        今なら2万円引き
                      </div>
                    )}
                    <div className="flex items-center justify-between p-5">
                      <div className="flex items-center gap-4">
                        <div
                          className="w-14 h-14 rounded-full flex items-center justify-center text-white font-bold text-xs flex-shrink-0 text-center leading-tight"
                          style={{ backgroundColor: "#0c1a33" }}
                        >
                          {plan.weekly}
                        </div>
                        <div>
                          <p className="font-bold text-base" style={{ color: "#0c1a33" }}>{plan.freq}</p>
                          <p className="text-xs mt-0.5" style={{ color: "#6b7280" }}>
                            授業{plan.lessons}回（{plan.lessonFee.toLocaleString()}円）＋ コーチング（{plan.coaching.toLocaleString()}円）
                          </p>
                        </div>
                      </div>
                      <div className="text-right flex-shrink-0">
                        {discounted && (
                          <p className="text-sm line-through mb-0.5" style={{ color: "#9ca3af" }}>
                            {plan.total.toLocaleString()}円
                          </p>
                        )}
                        <p className="text-xl font-bold" style={{ color: discounted ? "#c9922a" : "#0c1a33" }}>
                          {finalTotal.toLocaleString()}<span className="text-sm font-normal" style={{ color: "#6b7280" }}>円/月</span>
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
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
              どのプランが合っているかは、無料相談でヒアリングしたうえでご提案します。
              お気軽にお問い合わせください。
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
