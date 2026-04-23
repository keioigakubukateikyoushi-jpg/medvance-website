import type { ReactNode } from "react";

type Props = {
  title: string;
  eyebrow?: string;
  intro?: ReactNode;
  children: ReactNode;
  lastUpdated?: string;
};

export default function LegalLayout({ title, eyebrow = "Legal", intro, children, lastUpdated }: Props) {
  return (
    <div className="min-h-screen bg-white">
      <div style={{ backgroundColor: "#0c1a33" }} className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p
            className="text-xs font-semibold tracking-widest uppercase mb-3"
            style={{ color: "#c9922a" }}
          >
            {eyebrow}
          </p>
          <h1
            className="text-3xl md:text-4xl font-bold text-white mb-4"
            style={{ fontFamily: "var(--font-noto-serif)" }}
          >
            {title}
          </h1>
          {intro ? (
            <p className="text-base" style={{ color: "rgba(255,255,255,0.65)" }}>
              {intro}
            </p>
          ) : null}
        </div>
      </div>

      <section className="py-16 md:py-20 px-4" style={{ backgroundColor: "#ffffff" }}>
        <article className="max-w-3xl mx-auto legal-body" style={{ color: "#424f8f" }}>
          {children}
          {lastUpdated ? (
            <p className="mt-12 pt-6 text-sm" style={{ borderTop: "1px solid #e5e7eb", color: "#6b7280" }}>
              {lastUpdated}
            </p>
          ) : null}
        </article>
      </section>
    </div>
  );
}
