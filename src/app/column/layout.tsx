import Link from "next/link";

export default function ColumnLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div
        style={{ backgroundColor: "#fff8ec", borderBottom: "1px solid rgba(201,146,42,0.35)" }}
        className="py-3 px-4"
      >
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-3 text-center sm:text-left">
          <p className="text-sm font-semibold" style={{ color: "#0c1a33" }}>
            現役慶應医学部生による完全1対1指導。無料相談・お問い合わせを随時受付中。
          </p>
          <Link
            href="/contact"
            className="flex-shrink-0 text-xs font-bold px-5 py-2 rounded-lg text-white hover:opacity-90 transition-opacity whitespace-nowrap"
            style={{ backgroundColor: "#c9922a" }}
          >
            無料相談はこちら →
          </Link>
        </div>
      </div>
      {children}
    </>
  );
}
