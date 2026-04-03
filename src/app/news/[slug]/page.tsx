import Link from "next/link";
import { notFound } from "next/navigation";
import { notices } from "@/lib/notices";

export function generateStaticParams() {
  return notices.map((n) => ({ slug: n.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const notice = notices.find((n) => n.slug === slug);
  if (!notice) return {};
  return {
    title: `${notice.title} | Medvance`,
    description: notice.body.replace(/\n/g, " ").slice(0, 120),
  };
}

const categoryColor: Record<string, { bg: string; text: string }> = {
  重要:         { bg: "#fef2f2", text: "#dc2626" },
  サービス情報: { bg: "#eff6ff", text: "#1d4ed8" },
  キャンペーン: { bg: "#fffbeb", text: "#d97706" },
  お知らせ:     { bg: "#f0fdf4", text: "#16a34a" },
};

function formatDate(d: string) {
  const [y, m, day] = d.split("-");
  return `${y}年${Number(m)}月${Number(day)}日`;
}

export default async function NoticeDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const notice = notices.find((n) => n.slug === slug);
  if (!notice) notFound();

  const c = categoryColor[notice.category] ?? categoryColor["お知らせ"];

  return (
    <div className="min-h-screen bg-white">
      <div style={{ backgroundColor: "#0c1a33" }} className="py-14 px-4">
        <div className="max-w-3xl mx-auto">
          <Link href="/news" className="text-xs hover:opacity-80 mb-6 inline-block" style={{ color: "rgba(255,255,255,0.5)" }}>
            ← お知らせ一覧
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-medium" style={{ color: "rgba(255,255,255,0.45)" }}>
              {formatDate(notice.date)}
            </span>
            <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full" style={{ backgroundColor: c.bg, color: c.text }}>
              {notice.category}
            </span>
          </div>
          <h1 className="text-2xl md:text-3xl font-bold text-white leading-snug" style={{ fontFamily: "'Noto Serif JP', serif" }}>
            {notice.title}
          </h1>
        </div>
      </div>

      <div className="py-12 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="prose-custom">
            {notice.body.split("\n").map((line, i) =>
              line === "" ? (
                <div key={i} className="h-4" />
              ) : (
                <p key={i} className="text-sm leading-relaxed mb-0" style={{ color: "#374151" }}>
                  {line}
                </p>
              )
            )}
          </div>

          <div className="mt-12 pt-8 flex flex-col sm:flex-row gap-3" style={{ borderTop: "1px solid #e5e1d8" }}>
            <Link
              href="/contact"
              className="inline-block px-6 py-3 text-white font-bold text-sm rounded-lg hover:opacity-90 transition-opacity text-center"
              style={{ backgroundColor: "#c9922a" }}
            >
              無料相談・お問い合わせ
            </Link>
            <Link
              href="/news"
              className="inline-block px-6 py-3 font-bold text-sm rounded-lg hover:opacity-80 transition-opacity text-center"
              style={{ backgroundColor: "#f7f5f0", color: "#0c1a33", border: "1px solid #e5e1d8" }}
            >
              お知らせ一覧へ戻る
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
