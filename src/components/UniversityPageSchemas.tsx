import { buildBreadcrumbSchema, buildFaqSchema, siteUrl } from "@/lib/seo";

type FaqItem = { q: string; a: string };

export default function UniversityPageSchemas({
  name,
  slug,
  breadcrumbLabel,
  parentSlug,
  parentLabel,
  faq,
  alternateNames,
  universityDescription,
  area,
}: {
  name: string;
  slug: string;
  breadcrumbLabel: string;
  parentSlug?: string;
  parentLabel?: string;
  faq?: FaqItem[];
  alternateNames?: string[];
  universityDescription?: string;
  area?: string;
}) {
  const path = parentSlug ? `/universities/${parentSlug}/${slug}` : `/universities/${slug}`;
  const universityId = `${siteUrl}${path}#university`;

  const breadcrumb = buildBreadcrumbSchema([
    { name: "ホーム", url: "/" },
    ...(parentLabel && parentSlug
      ? [{ name: parentLabel, url: `/universities/${parentSlug}` }]
      : []),
    { name: breadcrumbLabel, url: path },
  ]);

  const collegeSchema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "CollegeOrUniversity",
    "@id": universityId,
    name,
    url: `${siteUrl}${path}`,
  };
  if (alternateNames && alternateNames.length > 0) {
    collegeSchema.alternateName = alternateNames;
  }
  if (universityDescription) {
    collegeSchema.description = universityDescription;
  }
  if (area) {
    collegeSchema.address = {
      "@type": "PostalAddress",
      addressCountry: "JP",
      addressRegion: area,
    };
  }

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${name}対策 個別指導`,
    description: `${name}の入試対策を現役慶應医学部生が1対1で指導。`,
    url: `${siteUrl}${path}`,
    serviceType: "医学部受験個別指導",
    provider: {
      "@type": "EducationalOrganization",
      "@id": `${siteUrl}/#organization`,
      name: "Medvance",
    },
    about: { "@id": universityId },
    areaServed: { "@type": "Country", name: "Japan" },
  };

  const schemas: object[] = [breadcrumb, collegeSchema, serviceSchema];
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
