import { columnArticles } from "@/lib/columnArticles";
import { buildColumnPageSchemas } from "@/lib/seo";

export default function ColumnArticleSchemas({
  slug,
  articleOnly = false,
}: {
  slug: string;
  /** 既存ページに別途 FAQ schema が手書きされている場合は true にして重複を避ける */
  articleOnly?: boolean;
}) {
  const entry = columnArticles.find((a) => a.slug === slug);
  if (!entry) return null;

  const schemas = buildColumnPageSchemas({
    title: entry.title,
    description: entry.description,
    slug: entry.slug,
    category: entry.category,
    keywords: entry.keywords,
    faqItems: articleOnly ? undefined : entry.faq,
  });

  return (
    <>
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}
