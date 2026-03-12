import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#142b57" }} className="text-white py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-xl font-bold">Medvance</div>
          <nav className="flex flex-wrap items-center gap-4 text-sm">
            <Link href="/about" className="text-white hover:opacity-75 transition-opacity">
              概要
            </Link>
            <span className="text-white opacity-40">|</span>
            <Link href="/privacy" className="text-white hover:opacity-75 transition-opacity">
              プライバシーポリシー
            </Link>
            <span className="text-white opacity-40">|</span>
            <Link href="/cookies" className="text-white hover:opacity-75 transition-opacity">
              Cookie設定
            </Link>
          </nav>
        </div>
        <div className="mt-6 text-center text-sm opacity-60">
          &copy; {new Date().getFullYear()} Medvance. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
