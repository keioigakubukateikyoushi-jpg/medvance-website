import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#0c1a33" }} className="text-white pt-14 pb-8">
      <div className="max-w-7xl mx-auto px-5">
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-10 mb-12 pb-12" style={{ borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
          {/* Brand */}
          <div className="sm:col-span-2 md:col-span-1">
            <p className="text-xl font-bold mb-2" style={{ fontFamily: "'Noto Serif JP', serif" }}>Medvance</p>
            <p className="text-xs mb-5 leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>
              現役慶應義塾大学医学部生による<br />医学部受験専門塾
            </p>
            <Link
              href="/contact"
              className="inline-block px-5 py-2.5 text-white font-semibold rounded-lg text-sm hover:opacity-90 transition-opacity"
              style={{ backgroundColor: "#c9922a" }}
            >
              無料相談はこちら
            </Link>
          </div>

          {/* 対象・志望校 */}
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: "rgba(255,255,255,0.4)" }}>対象者</p>
            <nav className="space-y-2 text-sm mb-5">
              {[
                { label: "中学生の方", href: "/for/chugaku" },
                { label: "高校1年生の方", href: "/for/ko1" },
                { label: "高校2年生の方", href: "/for/ko2" },
                { label: "高校3年生の方", href: "/for/ko3" },
                { label: "浪人生の方", href: "/for/ronin" },
                { label: "再受験生の方", href: "/for/saijuken" },
                { label: "保護者の方", href: "/for/parents" },
              ].map((l) => (
                <Link key={l.href} href={l.href} className="block hover:opacity-100 transition-opacity" style={{ color: "rgba(255,255,255,0.58)" }}>
                  {l.label}
                </Link>
              ))}
            </nav>
            <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: "rgba(255,255,255,0.4)" }}>大学別対策</p>
            <nav className="space-y-2 text-sm">
              {[
                { label: "慶應義塾大学医学部", href: "/universities/keio" },
                { label: "東京慈恵会医科大学", href: "/universities/jikei" },
                { label: "順天堂大学医学部", href: "/universities/juntendo" },
                { label: "日本医科大学", href: "/universities/nippon-medical" },
                { label: "昭和大学医学部", href: "/universities/showa" },
                { label: "東京医科大学", href: "/universities/tokyo-ika" },
                { label: "私立医学部（一覧）", href: "/universities/private" },
                { label: "国公立医学部対策", href: "/universities/national" },
              ].map((l) => (
                <Link key={l.href} href={l.href} className="block hover:opacity-100 transition-opacity" style={{ color: "rgba(255,255,255,0.58)" }}>
                  {l.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* サービス */}
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: "rgba(255,255,255,0.4)" }}>サービス</p>
            <nav className="space-y-2 text-sm">
              {[
                { label: "オンライン指導", href: "/services/online" },
                { label: "訪問・対面指導", href: "/services/visit" },
                { label: "面接・小論文対策", href: "/services/interview" },
                { label: "AI模試分析（無料）", href: "/services/moshi" },
                { label: "料金について", href: "/pricing" },
                { label: "お知らせ", href: "/news" },
                { label: "お問い合わせ", href: "/contact" },
              ].map((l) => (
                <Link key={l.href} href={l.href} className="block hover:opacity-100 transition-opacity" style={{ color: "rgba(255,255,255,0.58)" }}>
                  {l.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* コラム */}
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: "rgba(255,255,255,0.4)" }}>コラム</p>
            <nav className="space-y-2 text-sm mb-6">
              {[
                { label: "コラム一覧", href: "/column" },
                { label: "医学部合格の勉強法", href: "/column/study-method" },
                { label: "医学部受験ロードマップ", href: "/column/roadmap" },
                { label: "受かる人・落ちる人の違い", href: "/column/difference" },
                { label: "私立 vs 国公立", href: "/column/shigaku-vs-kokuritsu" },
                { label: "医学部面接対策", href: "/column/mensetu" },
                { label: "面接対策はいつから？", href: "/column/mensetu-timing" },
                { label: "医学部の学費比較", href: "/column/gakuhi" },
                { label: "過去問はいつから？", href: "/column/kakomon-timing" },
              ].map((l) => (
                <Link key={l.href} href={l.href} className="block hover:opacity-100 transition-opacity" style={{ color: "rgba(255,255,255,0.58)" }}>
                  {l.label}
                </Link>
              ))}
            </nav>
            <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: "rgba(255,255,255,0.4)" }}>各教科の指導</p>
            <nav className="space-y-2 text-sm">
              {[
                { label: "英語", href: "/subjects/english" },
                { label: "数学", href: "/subjects/math" },
                { label: "物理", href: "/subjects/physics" },
                { label: "化学", href: "/subjects/chemistry" },
                { label: "生物", href: "/subjects/biology" },
              ].map((l) => (
                <Link key={l.href} href={l.href} className="block hover:opacity-100 transition-opacity" style={{ color: "rgba(255,255,255,0.58)" }}>
                  {l.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs" style={{ color: "rgba(255,255,255,0.32)" }}>
          <p>&copy; {new Date().getFullYear()} Medvance. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <a
              href="https://note.com/igakubu_juken"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:opacity-80 transition-opacity"
              style={{ color: "rgba(255,255,255,0.45)" }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8zm-1-13v6l5-3-5-3z"/>
              </svg>
              note
            </a>
            <nav className="flex gap-5">
              <Link href="/privacy" className="hover:opacity-80 transition-opacity">プライバシーポリシー</Link>
              <Link href="/cookies" className="hover:opacity-80 transition-opacity">Cookie設定</Link>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}
