import { buildArticleSchema, buildBreadcrumbSchema, SITE_MODIFIED } from "@/lib/seo";

type Props = {
  title: string;
  description: string;
  slug: string;
  category: string;
  keywords?: string[];
  datePublished?: string;
  dateModified?: string;
};

/**
 * Injects Article + BreadcrumbList JSON-LD for column pages.
 * Add alongside any existing FAQPage script tags.
 */
export default function ColumnJsonLd({
  title,
  description,
  slug,
  category,
  keywords = [],
  datePublished = "2025-01-01",
  dateModified = SITE_MODIFIED,
}: Props) {
  const path = `/column/${slug}`;
  const articleSchema = buildArticleSchema({
    headline: title,
    description,
    path,
    datePublished,
    dateModified,
    articleSection: category,
    keywords,
  });
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "ホーム", url: "/" },
    { name: "コラム一覧", url: "/column" },
    { name: title, url: path },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
}
