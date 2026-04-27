import Link from "next/link";
import { getHubsForColumn } from "@/lib/relatedColumns";

export default function RelatedHubs({ slug }: { slug: string }) {
  const hubs = getHubsForColumn(slug);
  if (hubs.length === 0) return null;

  return (
    <section
      className="py-12 px-4 bg-white"
      aria-label="このコラムに関連する対象者・科目ページ"
    >
      <div className="max-w-3xl mx-auto">
        <h2
          className="text-lg font-bold mb-4"
          style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}
        >
          このコラムに関連するページ
        </h2>
        <p className="text-xs mb-5" style={{ color: "#6b7280" }}>
          特定の対象者・科目に絞った指導内容はこちらから。
        </p>
        <div className="flex flex-wrap gap-2">
          {hubs.map((hub) => (
            <Link
              key={hub.hub}
              href={hub.href}
              className="inline-flex items-center text-sm font-semibold px-4 py-2 rounded-full transition-colors hover:opacity-80"
              style={{
                backgroundColor: "#f7f5f0",
                border: "1px solid #e5e1d8",
                color: "#0c1a33",
              }}
            >
              {hub.label} →
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
