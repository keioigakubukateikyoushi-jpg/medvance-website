import { buildBreadcrumbSchema, buildFaqSchema, siteUrl } from "@/lib/seo";

type FaqItem = { q: string; a: string };

export default function UniversityPageSchemas({
  name,
  slug,
  breadcrumbLabel,
  parentSlug,
  parentLabel,
  faq,
}: {
  name: string;
  slug: string;
  breadcrumbLabel: string;
  parentSlug?: string;
  parentLabel?: string;
  faq?: FaqItem[];
}) {
  const path = parentSlug ? `/universities/${parentSlug}/${slug}` : `/universities/${slug}`;

  const breadcrumb = buildBreadcrumbSchema([
    { name: "ホーム", url: "/" },
    ...(parentLabel && parentSlug
      ? [{ name: parentLabel, url: `/universities/${parentSlug}` }]
      : []),
    { name: breadcrumbLabel, url: path },
  ]);

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${name}対策 個別指導`,
    description: `${name}の入試対策を現役慶應医学部生が完全1対1で指導。`,
    url: `${siteUrl}${path}`,
    serviceType: "医学部受験個別指導",
    provider: {
      "@type": "EducationalOrganization",
      "@id": `${siteUrl}/#organization`,
      name: "Medvance",
    },
    areaServed: { "@type": "Country", name: "Japan" },
  };

  const schemas: object[] = [breadcrumb, serviceSchema];
  if (faq && faq.length > 0) schemas.push(buildFaqSchema(faq));

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
