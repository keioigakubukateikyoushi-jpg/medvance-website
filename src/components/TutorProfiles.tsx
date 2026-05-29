import Image from "next/image";
import { buildPersonSchemas, getApprovedTutors } from "@/lib/tutors";

export default function TutorProfiles() {
  const tutors = getApprovedTutors();
  if (tutors.length === 0) return null;

  const schemas = buildPersonSchemas(tutors);

  return (
    <section className="py-16 px-4 bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
      />
      <div className="max-w-5xl mx-auto">
        <p
          className="text-xs font-bold tracking-widest mb-3 text-center"
          style={{ color: "#c9922a" }}
        >
          講師紹介
        </p>
        <h2
          className="text-2xl md:text-3xl font-bold text-center mb-10"
          style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}
        >
          指導する講師陣
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {tutors.map((t) => (
            <article
              key={t.slug}
              id={`tutor-${t.slug}`}
              className="p-6 rounded-2xl"
              style={{ backgroundColor: "#f7f5f0", border: "1px solid #e5e1d8" }}
            >
              {t.photoUrl ? (
                <div
                  className="w-20 h-20 rounded-full overflow-hidden mb-4"
                  style={{ backgroundColor: "#e5e1d8" }}
                >
                  <Image
                    src={t.photoUrl}
                    alt={t.name}
                    width={160}
                    height={160}
                    className="w-full h-full object-cover"
                  />
                </div>
              ) : (
                <div
                  className="w-20 h-20 rounded-full mb-4 flex items-center justify-center text-2xl font-bold"
                  style={{ backgroundColor: "#0c1a33", color: "#c9922a" }}
                >
                  {t.name.slice(0, 1)}
                </div>
              )}
              <p className="text-base font-bold mb-1" style={{ color: "#0c1a33" }}>
                {t.name}
              </p>
              <p className="text-xs mb-3" style={{ color: "#6b7280" }}>
                {t.university} {t.faculty} {t.grade}
              </p>
              <p
                className="text-xs leading-relaxed mb-4"
                style={{ color: "#3d3d3d" }}
              >
                {t.background}
              </p>
              <div className="flex flex-wrap gap-1.5 mb-4">
                {t.specialties.map((s) => (
                  <span
                    key={s}
                    className="text-[11px] px-2 py-0.5 rounded-full"
                    style={{
                      backgroundColor: "rgba(201,146,42,0.1)",
                      color: "#c9922a",
                    }}
                  >
                    {s}
                  </span>
                ))}
              </div>
              <p
                className="text-xs leading-relaxed italic pt-3"
                style={{ color: "#6b7280", borderTop: "1px solid #e5e1d8" }}
              >
                「{t.message}」
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
