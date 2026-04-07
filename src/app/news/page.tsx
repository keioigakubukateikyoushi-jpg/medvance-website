import Link from "next/link";
import { notices } from "@/lib/notices";
import { buildBreadcrumbSchema, buildCollectionPageSchema, buildItemListSchema } from "@/lib/seo";

export const metadata = {
  title: "お知らせ一覧 | Medvance",
  description: "Medvanceからのお知らせ・サービス情報・キャンペーン情報の一覧です。",

  alternates: {
    canonical: "/news",
  },};

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

export default function NewsPage() {
  const sorted = [...notices].sort((a, b) => b.date.localeCompare(a.date));
  const newsPageSchemas = [
    buildCollectionPageSchema(
      "お知らせ一覧",
      "Medvanceからのお知らせ・サービス情報・キャンペーン情報の一覧です。",
      "/news",
    ),
    buildBreadcrumbSchema([
      { name: "ホーム", url: "/" },
      { name: "お知らせ一覧", url: "/news" },
    ]),
    buildItemListSchema(
      "お知らせ一覧",
      "/news",
      sorted.map((notice) => ({ name: notice.title, url: `/news/${notice.slug}` })),
    ),
  ];

  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(newsPageSchemas) }}
      />
      <div style={{ backgroundColor: "#0c1a33" }} className="py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#c9922a" }}>News</p>
          <h1 className="text-3xl font-bold text-white" style={{ fontFamily: "'Noto Serif JP', serif" }}>
            お知らせ
          </h1>
        </div>
      </div>

      <div className="py-14 px-4">
        <div className="max-w-3xl mx-auto space-y-3">
          {sorted.map((n) => {
            const c = categoryColor[n.category] ?? categoryColor["お知らせ"];
            return (
              <Link
                key={n.slug}
                href={`/news/${n.slug}`}
                className="flex flex-col sm:flex-row sm:items-center gap-3 p-5 rounded-xl hover:shadow-sm transition-shadow group"
                style={{ backgroundColor: "#f7f5f0", border: "1px solid #e5e1d8" }}
              >
                <span className="flex-shrink-0 text-xs font-medium" style={{ color: "#9ca3af", minWidth: "90px" }}>
                  {formatDate(n.date)}
                </span>
                <span
                  className="flex-shrink-0 text-xs font-semibold px-2 py-0.5 rounded-full"
                  style={{ backgroundColor: c.bg, color: c.text }}
                >
                  {n.category}
                </span>
                <span className="text-sm font-medium group-hover:underline" style={{ color: "#0c1a33" }}>
                  {n.title}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
