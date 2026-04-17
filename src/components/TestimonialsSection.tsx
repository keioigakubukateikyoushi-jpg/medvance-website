import { testimonials, buildReviewSchemas } from "@/lib/testimonials";

export default function TestimonialsSection() {
  if (testimonials.length === 0) return null;

  const schemas = buildReviewSchemas();

  return (
    <section className="py-16 px-4" style={{ backgroundColor: "#f7f5f0" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
      />
      <div className="max-w-5xl mx-auto">
        <p
          className="text-xs font-bold tracking-widest uppercase mb-3 text-center"
          style={{ color: "#c9922a" }}
        >
          Testimonials
        </p>
        <h2
          className="text-2xl md:text-3xl font-bold text-center mb-10"
          style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}
        >
          実際に受講した方の声
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <article
              key={t.slug}
              className="p-6 rounded-2xl bg-white flex flex-col"
              style={{ border: "1px solid #e5e1d8" }}
            >
              <div
                aria-label={`評価 ${t.rating} / 5`}
                className="flex gap-0.5 mb-3"
                style={{ color: "#c9922a" }}
              >
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} style={{ opacity: i < t.rating ? 1 : 0.25 }}>
                    ★
                  </span>
                ))}
              </div>
              <p
                className="font-bold text-sm mb-2"
                style={{ color: "#0c1a33" }}
              >
                {t.headline}
              </p>
              <p
                className="text-sm leading-relaxed flex-1 mb-4"
                style={{ color: "#3d3d3d" }}
              >
                {t.body}
              </p>
              <div className="pt-3" style={{ borderTop: "1px solid #e5e1d8" }}>
                <p className="text-xs font-semibold" style={{ color: "#0c1a33" }}>
                  {t.author}
                </p>
                <p className="text-xs" style={{ color: "#6b7280" }}>
                  {t.authorRole}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
