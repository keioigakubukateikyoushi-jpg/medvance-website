import Image from "next/image";
import Link from "next/link";
import { getRelatedColumns } from "@/lib/relatedColumns";
import { getColumnThumbnail } from "@/lib/columnThumbnails";

type Props = {
  hub: string;
  heading?: string;
  subheading?: string;
};

export default function RelatedColumns({
  hub,
  heading = "関連コラムで深掘りする",
  subheading = "このページのテーマに関連するコラム記事です。",
}: Props) {
  const articles = getRelatedColumns(hub);
  if (articles.length === 0) return null;

  return (
    <section
      className="py-16 px-4"
      style={{ backgroundColor: "#f7f5f0" }}
      aria-label="関連コラム"
    >
      <div className="max-w-5xl mx-auto">
        <p
          className="text-xs font-semibold tracking-widest uppercase text-center mb-3"
          style={{ color: "#c9922a" }}
        >
          Related Columns
        </p>
        <h2
          className="text-2xl font-bold text-center mb-3"
          style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}
        >
          {heading}
        </h2>
        <p
          className="text-sm text-center mb-10 max-w-2xl mx-auto"
          style={{ color: "#6b7280" }}
        >
          {subheading}
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {articles.map((article) => {
            const thumb = getColumnThumbnail(article.slug, article.category);
            return (
              <Link
                key={article.slug}
                href={`/column/${article.slug}`}
                className="group flex flex-col overflow-hidden rounded-2xl bg-white transition-shadow hover:shadow-md"
                style={{ border: "1px solid #e5e1d8" }}
              >
                {thumb && (
                  <div className="relative aspect-[16/9] bg-[#0c1a33]">
                    <Image
                      src={thumb}
                      alt=""
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover"
                      loading="lazy"
                    />
                    <div
                      aria-hidden
                      className="absolute inset-0"
                      style={{
                        background:
                          "linear-gradient(180deg, rgba(12,26,51,0.05) 0%, rgba(12,26,51,0.45) 100%)",
                      }}
                    />
                  </div>
                )}
                <div className="p-5">
                  <span
                    className="inline-block text-xs font-semibold tracking-wide px-2 py-0.5 rounded-full mb-3"
                    style={{ backgroundColor: "#0c1a33", color: "#c9922a" }}
                  >
                    {article.category}
                  </span>
                  <p
                    className="text-sm font-bold leading-snug mb-2 group-hover:underline"
                    style={{ color: "#0c1a33" }}
                  >
                    {article.title}
                  </p>
                  <p
                    className="text-xs leading-relaxed mb-3"
                    style={{ color: "#6b7280" }}
                  >
                    {article.description}
                  </p>
                  <p
                    className="text-xs font-semibold"
                    style={{ color: "#c9922a" }}
                  >
                    記事を読む →
                  </p>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/column"
            className="inline-block text-sm font-semibold hover:underline"
            style={{ color: "#0c1a33" }}
          >
            コラム一覧をすべて見る →
          </Link>
        </div>
      </div>
    </section>
  );
}
