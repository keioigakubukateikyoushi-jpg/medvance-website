import Link from "next/link";
import {
  testimonials,
  buildReviewSchemas,
  type Testimonial,
} from "@/lib/testimonials";

type Props = {
  /** 表示する声。省略時は掲載中の全件。 */
  items?: Testimonial[];
  eyebrow?: string;
  heading?: string;
  lead?: string;
  /** セクション背景色。 */
  background?: string;
  /** Review 構造化データを出力するか（1ページにつき1箇所だけ true にする）。 */
  includeSchema?: boolean;
  /** 全件ページへの導線を出すか。 */
  showAllLink?: boolean;
  /** 同意・削除依頼についての注記を出すか。 */
  showConsentNote?: boolean;
};

export default function TestimonialsSection({
  items = testimonials,
  eyebrow = "Voices",
  heading = "受講生・保護者の声",
  lead = "実際に受講している方から届いた言葉を、ご本人・保護者の同意を得て匿名で掲載しています。氏名・学校名などの個人情報は伏せ、いただいた内容に成果の表現を足さずそのまま載せています。",
  background = "#f7f5f0",
  includeSchema = true,
  showAllLink = false,
  showConsentNote = false,
}: Props) {
  if (items.length === 0) return null;

  return (
    <section className="px-4 py-16" style={{ backgroundColor: background }}>
      {includeSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(buildReviewSchemas()),
          }}
        />
      )}
      <div className="mx-auto max-w-4xl">
        <p
          className="mb-3 text-xs font-semibold tracking-widest"
          style={{ color: "#c9922a" }}
        >
          {eyebrow}
        </p>
        <h2
          className="mb-2 text-2xl font-bold leading-snug md:text-3xl"
          style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}
        >
          {heading}
        </h2>
        <p className="mb-8 text-sm leading-relaxed" style={{ color: "#5f6b7a" }}>
          {lead}
        </p>

        <div className="grid gap-5 md:grid-cols-2">
          {items.map((t) => (
            <figure
              key={t.slug}
              className="flex flex-col rounded-xl bg-white p-6"
              style={{ border: "1px solid #e5e1d8" }}
            >
              <p
                className="mb-3 text-xs font-bold tracking-widest"
                style={{ color: "#c9922a" }}
              >
                {t.headline}
              </p>
              <blockquote
                className="flex-1 text-sm leading-relaxed"
                style={{ color: "#3d3d3d" }}
              >
                <span
                  aria-hidden="true"
                  className="mr-1 align-[-0.15em] text-xl leading-none"
                  style={{ color: "#c9922a", opacity: 0.5 }}
                >
                  “
                </span>
                {t.body}
              </blockquote>
              <figcaption
                className="mt-4 pt-3 text-xs font-semibold"
                style={{ borderTop: "1px solid #e5e1d8", color: "#0c1a33" }}
              >
                {t.author}
              </figcaption>
            </figure>
          ))}
        </div>

        {showAllLink && (
          <div className="mt-6">
            <Link
              href="/success-stories?from=home-testimonials#voices"
              className="inline-flex items-center gap-1 text-sm font-bold"
              style={{ color: "#c9922a" }}
            >
              受講生・保護者の声をすべて見る →
            </Link>
          </div>
        )}

        {showConsentNote && (
          <p
            className="mt-6 text-xs leading-relaxed"
            style={{ color: "#6b7280" }}
          >
            掲載はご本人・保護者の同意にもとづくものです。掲載内容の修正・削除のご依頼は
            <Link
              href="/contact?from=testimonials-consent"
              className="underline underline-offset-2"
              style={{ color: "#5f6b7a" }}
            >
              お問い合わせフォーム
            </Link>
            から承ります。
          </p>
        )}
      </div>
    </section>
  );
}
