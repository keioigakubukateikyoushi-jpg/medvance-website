import { buildBreadcrumbSchema, buildFaqSchema, buildServiceSchema } from "@/lib/seo";

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
  const schemas: object[] = [
    buildServiceSchema(name, description, path, serviceType),
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
