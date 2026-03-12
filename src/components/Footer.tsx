import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#0c1a33" }} className="text-white pt-14 pb-8">
      <div className="max-w-7xl mx-auto px-5">
        <div className="grid md:grid-cols-3 gap-10 mb-12 pb-12" style={{ borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
          {/* Brand */}
          <div>
            <p className="text-xl font-bold mb-2" style={{ fontFamily: "'Noto Serif JP', serif" }}>Medvance</p>
            <p className="text-sm mb-4" style={{ color: "rgba(255,255,255,0.5)" }}>慶應医学部生による医学部受験専門塾</p>
            <Link
              href="/contact"
              className="inline-block px-5 py-2.5 text-white font-semibold rounded-lg text-sm hover:opacity-90 transition-opacity"
              style={{ backgroundColor: "#c9922a" }}
            >
              無料相談はこちら
            </Link>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: "rgba(255,255,255,0.4)" }}>Pages</p>
            <nav className="space-y-2.5 text-sm">
              {[
                { label: "ホーム", href: "/" },
                { label: "Medvanceとは？", href: "/about" },
                { label: "料金について", href: "/pricing" },
                { label: "合格体験記", href: "/success-stories" },
                { label: "お問い合わせ", href: "/contact" },
              ].map((link) => (
                <Link key={link.href} href={link.href} className="block hover:opacity-100 transition-opacity" style={{ color: "rgba(255,255,255,0.6)" }}>
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Subjects */}
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: "rgba(255,255,255,0.4)" }}>各教科の指導</p>
            <nav className="space-y-2.5 text-sm">
              {[
                { label: "英語", href: "/subjects/english" },
                { label: "数学", href: "/subjects/math" },
                { label: "物理", href: "/subjects/physics" },
                { label: "化学", href: "/subjects/chemistry" },
                { label: "生物", href: "/subjects/biology" },
              ].map((link) => (
                <Link key={link.href} href={link.href} className="block hover:opacity-100 transition-opacity" style={{ color: "rgba(255,255,255,0.6)" }}>
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs" style={{ color: "rgba(255,255,255,0.35)" }}>
          <p>&copy; {new Date().getFullYear()} Medvance. All rights reserved.</p>
          <nav className="flex gap-5">
            <Link href="/privacy" className="hover:opacity-80 transition-opacity">プライバシーポリシー</Link>
            <Link href="/cookies" className="hover:opacity-80 transition-opacity">Cookie設定</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
