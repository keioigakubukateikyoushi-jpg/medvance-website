import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ページが見つかりません",
  description: "お探しのページは見つかりませんでした。トップページや主要ページからお探しください。",
  robots: { index: false, follow: true },
};

const popularLinks = [
  { href: "/", label: "トップページ" },
  { href: "/pricing", label: "コース・料金" },
  { href: "/tutors", label: "講師一覧" },
  { href: "/column", label: "コラム一覧" },
  { href: "/contact", label: "無料相談" },
];

const popularColumns = [
  { href: "/column/study-method", label: "医学部合格のための正しい勉強法" },
  { href: "/column/roadmap", label: "医学部受験ロードマップ" },
  { href: "/column/juken-timing", label: "医学部受験はいつから始めるべきか" },
  { href: "/column/difference", label: "医学部に受かる人・落ちる人の違い" },
];

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white">
      <section style={{ backgroundColor: "#0c1a33" }} className="px-4 py-20">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#c9922a" }}>
            404 Not Found
          </p>
          <h1
            className="text-3xl md:text-4xl font-bold text-white mb-4"
            style={{ fontFamily: "var(--font-noto-serif)" }}
          >
            ページが見つかりませんでした
          </h1>
          <p className="text-base mb-2" style={{ color: "rgba(255,255,255,0.65)" }}>
            お探しのページは移動・削除されたか、URLが変更された可能性があります。
          </p>
          <p className="text-sm" style={{ color: "rgba(255,255,255,0.5)" }}>
            下記の主要ページからお探しください。
          </p>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-lg font-bold mb-5"
            style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}
          >
            主要ページ
          </h2>
          <div className="flex flex-wrap gap-2 mb-12">
            {popularLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="inline-flex items-center text-sm font-semibold px-4 py-2 rounded-full transition-colors hover:opacity-80"
                style={{
                  backgroundColor: "#f7f5f0",
                  border: "1px solid #e5e1d8",
                  color: "#0c1a33",
                }}
              >
                {link.label} →
              </Link>
            ))}
          </div>

          <h2
            className="text-lg font-bold mb-5"
            style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}
          >
            よく読まれているコラム
          </h2>
          <ul className="space-y-3">
            {popularColumns.map((col) => (
              <li key={col.href}>
                <Link
                  href={col.href}
                  className="block p-4 rounded-xl transition-shadow hover:shadow-md"
                  style={{ backgroundColor: "#f7f5f0", border: "1px solid #e5e1d8" }}
                >
                  <p className="text-sm font-semibold" style={{ color: "#0c1a33" }}>
                    {col.label}
                  </p>
                  <p className="text-xs mt-1" style={{ color: "#c9922a" }}>
                    記事を読む →
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-16 px-4" style={{ backgroundColor: "#0c1a33" }}>
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-sm font-semibold tracking-widest uppercase mb-3" style={{ color: "#c9922a" }}>
            無料相談
          </p>
          <h2
            className="text-2xl font-bold text-white mb-4"
            style={{ fontFamily: "var(--font-noto-serif)" }}
          >
            お探しの情報が見つからない場合は
          </h2>
          <p className="mb-8 text-sm" style={{ color: "rgba(255,255,255,0.65)" }}>
            無料相談で、現状や志望校に合わせて直接ご案内します。
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 text-white font-bold text-base rounded-lg shadow-md hover:opacity-90 transition-opacity"
            style={{ backgroundColor: "#c9922a" }}
          >
            無料相談・お問い合わせ
          </Link>
        </div>
      </section>
    </div>
  );
}
