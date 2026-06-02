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
                  className="w-20 h-20 rounded-full overflow-hidden mb-4 border-2 border-white shadow-[0_4px_12px_rgba(12,26,51,0.08)] ring-2 ring-[#c9922a]/30 transition-transform duration-300 group-hover:scale-105"
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
                  className="w-20 h-20 rounded-full mb-4 flex items-center justify-center relative overflow-hidden shadow-[0_8px_20px_rgba(201,146,42,0.15)] border border-[#c9922a]/30"
                  style={{
                    background: "linear-gradient(135deg, #0c1a33 0%, #172a4d 100%)",
                  }}
                >
                  {/* Subtle inner gold glow */}
                  <div className="absolute inset-0.5 rounded-full border border-[#c9922a]/20 pointer-events-none" />
                  
                  {t.slug === "national-medical-director" ? (
                    /* Elegant Medical/Academic Crest */
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} className="w-10 h-10 text-[#c9922a]" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.746 3.746 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                    </svg>
                  ) : (
                    /* Elegant Academic/Shield Crest */
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} className="w-10 h-10 text-[#c9922a]" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                    </svg>
                  )}
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
