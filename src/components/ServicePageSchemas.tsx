import { buildBreadcrumbSchema, buildFaqSchema, buildServiceSchema, siteUrl } from "@/lib/seo";

type FaqItem = { q: string; a: string };

export default function ServicePageSchemas({
  name,
  description,
  slug,
  serviceType,
  breadcrumbLabel,
  faq,
}: {
  name: string;
  description: string;
  slug: string;
  serviceType: string;
  breadcrumbLabel: string;
  faq?: FaqItem[];
}) {
  const path = `/services/${slug}`;
  const url = `${siteUrl}${path}`;
  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    name,
    description,
    url,
    provider: {
      "@type": "EducationalOrganization",
      "@id": `${siteUrl}/#organization`,
      name: "Medvance",
      url: siteUrl,
    },
    inLanguage: "ja-JP",
    educationalLevel: "high school",
    teaches: serviceType,
    courseMode: ["online", "onsite"],
    hasCourseInstance: {
      "@type": "CourseInstance",
      courseMode: "online",
      inLanguage: "ja-JP",
      courseWorkload: "PT1H",
    },
    offers: {
      "@type": "Offer",
      url: `${siteUrl}/contact`,
      availability: "https://schema.org/InStock",
      priceCurrency: "JPY",
      category: "Paid",
    },
  };
  const schemas: object[] = [
    buildServiceSchema(name, description, path, serviceType),
    courseSchema,
    buildBreadcrumbSchema([
      { name: "ホーム", url: "/" },
      { name: "サービス", url: "/services" },
      { name: breadcrumbLabel, url: path },
    ]),
  ];
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
