import { columnArticles } from "@/lib/columnArticles";
import { buildColumnPageSchemas } from "@/lib/seo";

export default function ColumnArticleSchemas({ slug }: { slug: string }) {
  const entry = columnArticles.find((a) => a.slug === slug);
  if (!entry) return null;

  const schemas = buildColumnPageSchemas({
    title: entry.title,
    description: entry.description,
    slug: entry.slug,
    category: entry.category,
    keywords: entry.keywords,
    faqItems: entry.faq,
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
