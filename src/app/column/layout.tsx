import Link from "next/link";

export default function ColumnLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* Top CTA bar */}
      <div style={{ backgroundColor: "#fff8ec", borderBottom: "2px solid rgba(201,146,42,0.25)" }} className="py-4 px-4">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-col sm:flex-row items-center sm:items-baseline gap-2 text-center sm:text-left">
            <span
              className="text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full flex-shrink-0"
              style={{ backgroundColor: "#c9922a", color: "#fff" }}
            >
              無料相談受付中
            </span>
            <div>
              <span className="text-base font-bold" style={{ color: "#0c1a33" }}>
                現役慶應医学部生による完全1対1指導
              </span>
              <span className="text-xs ml-2 hidden sm:inline" style={{ color: "#6b7280" }}>
                — 学習計画・授業・コーチングを一括サポート
              </span>
            </div>
          </div>
          <Link
            href="/contact"
            className="flex-shrink-0 text-sm font-bold px-6 py-2.5 rounded-lg text-white hover:opacity-90 transition-opacity whitespace-nowrap shadow-sm"
            style={{ backgroundColor: "#c9922a" }}
          >
            無料相談・お問い合わせ
          </Link>
        </div>
      </div>

      {/* column-body wrapper: activates typography CSS in globals.css */}
      <div className="column-body">
        {children}
      </div>
    </>
  );
}
