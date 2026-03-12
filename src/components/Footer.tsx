import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#142b57" }} className="text-white py-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-8">
          <div>
            <div className="text-2xl font-bold mb-1">Medvance</div>
            <p className="text-sm opacity-60">慶應医学部生による医学部受験専門塾</p>
          </div>
          <nav className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
            <Link href="/" className="text-white opacity-80 hover:opacity-100 transition-opacity">
              ホーム
            </Link>
            <Link href="/about" className="text-white opacity-80 hover:opacity-100 transition-opacity">
              Medvanceとは？
            </Link>
            <Link href="/pricing" className="text-white opacity-80 hover:opacity-100 transition-opacity">
              料金について
            </Link>
            <Link href="/success-stories" className="text-white opacity-80 hover:opacity-100 transition-opacity">
              合格体験記
            </Link>
            <Link href="/contact" className="text-white opacity-80 hover:opacity-100 transition-opacity">
              お問い合わせ
            </Link>
            <Link href="/privacy" className="text-white opacity-80 hover:opacity-100 transition-opacity">
              プライバシーポリシー
            </Link>
          </nav>
        </div>
        <div className="border-t border-white border-opacity-10 pt-6 text-center text-sm opacity-50">
          &copy; {new Date().getFullYear()} Medvance. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
