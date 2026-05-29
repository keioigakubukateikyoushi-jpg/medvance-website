import Link from "next/link";

export default function PromoStickyBar() {
  return (
    <div
      className="sticky top-0 z-[60] flex h-10 items-center px-4"
      style={{ backgroundColor: "#c9922a", borderBottom: "1px solid rgba(255,255,255,0.15)" }}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-3 text-white">
        <p
          className="flex min-w-0 items-center gap-2 text-xs font-bold"
          style={{ fontFamily: "var(--font-noto-serif)", letterSpacing: "0.06em", textShadow: "0 1px 2px rgba(0,0,0,0.12)" }}
        >
          <span className="flex-shrink-0 text-sm animate-pulse">🎁</span>
          <span className="truncate">
            今なら無料相談特典で<span style={{ color: "#fffeb3" }}>医学部受験バイブル</span>プレゼント
          </span>
        </p>
        <Link
          href="/contact?from=sticky-banner"
          className="flex-shrink-0 rounded px-3 py-1 text-xs font-bold whitespace-nowrap transition-all duration-200 hover:scale-105 hover:shadow-md"
          style={{ backgroundColor: "#fff", color: "#c9922a", letterSpacing: "0.02em" }}
        >
          申込 →
        </Link>
      </div>
    </div>
  );
}
