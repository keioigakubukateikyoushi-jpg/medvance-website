import { buildForPageSchemas } from "@/lib/forPageMeta";

export default function ForPageSchemas({ slug }: { slug: string }) {
  const schemas = buildForPageSchemas(slug);
  if (schemas.length === 0) return null;
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
