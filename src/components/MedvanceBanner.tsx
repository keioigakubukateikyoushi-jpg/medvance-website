import Link from "next/link";

export default function MedvanceBanner() {
  return (
    <div className="py-16 px-4" style={{ backgroundColor: "#f7f5f0" }}>
      <div className="max-w-4xl mx-auto">
        <div
          className="relative overflow-hidden rounded-3xl px-8 py-10 md:px-14 md:py-12"
          style={{
            backgroundColor: "#0c1a33",
            border: "1px solid rgba(201,146,42,0.3)",
          }}
        >
          {/* Gold top accent line */}
          <div
            className="absolute top-0 left-0 right-0 h-1"
            style={{ background: "linear-gradient(90deg, transparent, #c9922a, #e8b84b, #c9922a, transparent)" }}
          />

          <div className="relative flex flex-col md:flex-row items-center gap-8 md:gap-12">
            {/* Left: text */}
            <div className="flex-1 text-center md:text-left">
              <p className="text-xs font-bold tracking-widest uppercase mb-2" style={{ color: "#c9922a" }}>
                Medvance — 私立医学部の個別戦略
              </p>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-noto-serif)", lineHeight: "1.4" }}>
                予備校だけでは埋まらない、<br />医学部受験の個別設計に。
              </h2>
              <ul className="space-y-2 mb-0">
                {[
                  "大手予備校の復習管理を補完",
                  "週次学習管理と1対1指導を接続",
                  "私立医学部の出願戦略を設計",
                  "保護者向けの進捗共有に対応",
                  "面接・小論文まで一体管理",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-sm" style={{ color: "rgba(255,255,255,0.85)" }}>
                    <span
                      className="flex-shrink-0 w-4 h-4 rounded-full flex items-center justify-center text-xs font-bold"
                      style={{ backgroundColor: "rgba(201,146,42,0.25)", color: "#c9922a" }}
                    >
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: CTA card */}
            <div
              className="flex-shrink-0 w-full md:w-auto bg-white rounded-2xl px-8 py-7 text-center"
              style={{ minWidth: "220px", boxShadow: "0 8px 32px rgba(0,0,0,0.25)" }}
            >
              <p className="text-xs font-semibold mb-1" style={{ color: "#6b7280" }}>まずはここから</p>
              <p className="text-lg font-bold mb-4" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>
                合格戦略<br />診断
              </p>
              <Link
                href="/contact?from=medvance-banner"
                className="block w-full py-3 px-5 text-white font-bold text-sm rounded-xl text-center hover:opacity-90 transition-opacity mb-3"
                style={{ backgroundColor: "#c9922a" }}
              >
                診断を申し込む
              </Link>
              <Link
                href="/pricing"
                className="block w-full py-2.5 px-5 font-semibold text-sm rounded-xl text-center hover:opacity-80 transition-opacity"
                style={{ backgroundColor: "#f7f5f0", color: "#0c1a33", border: "1px solid #e5e1d8" }}
              >
                料金を見る
              </Link>
              <p className="text-xs mt-3" style={{ color: "#9ca3af" }}>
                返信は通常24時間以内
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
