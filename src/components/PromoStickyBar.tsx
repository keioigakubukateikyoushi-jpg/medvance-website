import Link from "next/link";

/**
 * 上部の告知バー。
 * 文字色は白ではなく濃紺。金地(#c9922a)に白だとコントラスト比 2.75:1 で
 * WCAG AA(4.5:1) を大きく下回り読みにくいため。濃紺なら 6.3:1 で基準を満たす。
 * 文言はスマホだけ短いものに差し替える（truncate で途中で切れて意味が通らなくなるのを防ぐ）。
 */
export default function PromoStickyBar() {
  return (
    <div
      className="sticky top-0 z-[60] flex h-10 items-center px-4"
      style={{ backgroundColor: "#c9922a", borderBottom: "1px solid rgba(12,26,51,0.18)" }}
    >
      <div
        className="mx-auto flex w-full max-w-7xl items-center justify-between gap-3"
        style={{ color: "#0c1a33" }}
      >
        <p className="flex min-w-0 items-center text-xs font-bold">
          {/* スマホ: 短く言い切って切れないようにする */}
          <span className="sm:hidden">無料相談で「医学部受験バイブル」進呈</span>
          {/* PC: フル文言 */}
          <span className="hidden sm:inline">
            今なら無料相談特典で「医学部受験バイブル」プレゼント
          </span>
        </p>
        <Link
          href="/contact?from=sticky-banner"
          className="flex-shrink-0 rounded px-3 py-1 text-xs font-bold whitespace-nowrap transition-opacity hover:opacity-85"
          style={{ backgroundColor: "#0c1a33", color: "#ffffff" }}
        >
          申込 →
        </Link>
      </div>
    </div>
  );
}
