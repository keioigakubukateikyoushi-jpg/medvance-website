import Link from "next/link";

interface ArticleConsultationBoxProps {
  eyebrow?: string;
  title: string;
  description: string;
  points: string[];
  ctaLabel?: string;
  source?: string;
}

export default function ArticleConsultationBox({
  eyebrow = "無料相談で整理できること",
  title,
  description,
  points,
  ctaLabel = "30分無料相談を申し込む",
  source,
}: ArticleConsultationBoxProps) {
  const contactHref = source ? `/contact?from=${encodeURIComponent(source)}` : "/contact";

  return (
    <div className="rounded-[28px] p-8 md:p-10" style={{ backgroundColor: "#0c1a33", border: "1px solid rgba(201,146,42,0.28)" }}>
      <div className="max-w-3xl mx-auto">
        <p className="text-xs font-semibold tracking-[0.28em] uppercase mb-3" style={{ color: "#c9922a" }}>
          {eyebrow}
        </p>
        <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white" style={{ fontFamily: "var(--font-noto-serif)" }}>
          {title}
        </h3>
        <p className="text-sm leading-relaxed mb-6" style={{ color: "rgba(255,255,255,0.72)" }}>
          {description}
        </p>

        <div className="grid md:grid-cols-2 gap-4 mb-6">
          {points.map((point) => (
            <div
              key={point}
              className="flex items-start gap-3 rounded-2xl px-4 py-4"
              style={{ backgroundColor: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)" }}
            >
              <span
                className="mt-0.5 inline-flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full text-xs font-bold"
                style={{ backgroundColor: "rgba(201,146,42,0.16)", color: "#c9922a" }}
              >
                ✓
              </span>
              <p className="text-sm leading-relaxed" style={{ color: "#f7f5f0" }}>
                {point}
              </p>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="flex flex-wrap gap-2 text-xs font-semibold">
            {["完全無料", "30分オンライン", "勧誘なし", "戦略マニュアル付き"].map((item) => (
              <span
                key={item}
                className="rounded-full px-3 py-1.5"
                style={{ backgroundColor: "rgba(201,146,42,0.15)", color: "#c9922a", border: "1px solid rgba(201,146,42,0.32)" }}
              >
                {item}
              </span>
            ))}
          </div>

          <Link
            href={contactHref}
            className="inline-flex items-center justify-center rounded-xl px-6 py-3 text-sm font-bold text-white hover:opacity-90 transition-opacity"
            style={{ backgroundColor: "#c9922a" }}
          >
            {ctaLabel}
          </Link>
        </div>
      </div>
    </div>
  );
}
