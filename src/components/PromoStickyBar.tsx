import Link from "next/link";

export default function PromoStickyBar() {
  return (
    <div
      className="sticky top-0 z-[60] flex h-10 items-center px-4"
      style={{ backgroundColor: "#c9922a" }}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-3 text-white">
        <p className="flex min-w-0 items-center gap-1.5 text-xs font-bold">
          <span className="flex-shrink-0 text-sm">📘</span>
          <span className="truncate">
            <span className="hidden sm:inline">無料相談特典：</span>医学部受験戦略マニュアル進呈
          </span>
        </p>
        <Link
          href="/contact?from=sticky-banner"
          className="flex-shrink-0 rounded px-3 py-1 text-xs font-bold whitespace-nowrap transition-opacity hover:opacity-90"
          style={{ backgroundColor: "#fff", color: "#c9922a" }}
        >
          申込 →
        </Link>
      </div>
    </div>
  );
}
