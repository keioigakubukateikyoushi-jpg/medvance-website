import Link from "next/link";
import ArticleConsultationBox from "@/components/ArticleConsultationBox";
import ColumnCTA from "@/components/ColumnCTA";
import RelatedHubs from "@/components/RelatedHubs";
import type { LongformColumnArticle } from "@/lib/longformColumnArticles";
import {
  buildArticleSchema,
  buildBreadcrumbSchema,
  buildFaqSchema,
} from "@/lib/seo";
import { getColumnMtimeISO } from "@/lib/gitMtime";

function getSectionBackground(background?: "white" | "sand") {
  return background === "sand" ? "#f7f5f0" : "#ffffff";
}

function slugifySection(title: string, index: number) {
  const base = title
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\p{L}\p{N}-]/gu, "")
    .slice(0, 40);
  return `section-${index + 1}${base ? "-" + base : ""}`;
}

function formatReviewDate(iso: string) {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return iso;
  return `${d.getFullYear()}年${d.getMonth() + 1}月${d.getDate()}日`;
}

export default function LongformColumnPage({
  article,
}: {
  article: LongformColumnArticle;
}) {
  // 記事データに記録された dateModified より、ファイルの git 最終更新日のほうが新しければそちらを採用
  const gitModified = getColumnMtimeISO(article.slug);
  const dateModified =
    gitModified && new Date(gitModified) > new Date(article.dateModified)
      ? gitModified
      : article.dateModified;

  const schemas = [
    buildArticleSchema({
      headline: article.title,
      description: article.description,
      path: `/column/${article.slug}`,
      datePublished: article.datePublished,
      dateModified,
      articleSection: article.category,
      keywords: article.keywords,
    }),
    buildBreadcrumbSchema([
      { name: "ホーム", url: "/" },
      { name: "コラム", url: "/column" },
      { name: article.title, url: `/column/${article.slug}` },
    ]),
    buildFaqSchema(article.faqs),
  ];

  const consultationAfterSection = Math.min(
    article.consultationAfterSection ?? 1,
    Math.max(article.sections.length - 1, 0),
  );

  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
      />

      <div style={{ backgroundColor: "#0c1a33" }} className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p
            className="text-xs font-semibold tracking-widest uppercase mb-3"
            style={{ color: "#c9922a" }}
          >
            コラム
          </p>
          <h1
            className="text-3xl md:text-4xl font-bold text-white mb-4"
            style={{ fontFamily: "var(--font-noto-serif)" }}
          >
            {article.title}
          </h1>
          <p
            className="text-base mb-5"
            style={{ color: "rgba(255,255,255,0.68)" }}
          >
            {article.heroSubtitle}
          </p>
          <div
            className="inline-flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs"
            style={{ color: "rgba(255,255,255,0.55)" }}
          >
            <time dateTime={article.datePublished}>
              公開: {formatReviewDate(article.datePublished)}
            </time>
            {article.dateModified !== article.datePublished && (
              <time dateTime={article.dateModified}>
                最終更新: {formatReviewDate(article.dateModified)}
              </time>
            )}
            <span style={{ color: "#c9922a" }}>
              現役慶應医学部生 監修
            </span>
          </div>
        </div>
      </div>

      {article.sections.length > 2 && (
        <div className="py-8 px-4 bg-white">
          <nav
            aria-label="目次"
            className="max-w-3xl mx-auto p-6 rounded-2xl"
            style={{ backgroundColor: "#f7f5f0", border: "1px solid #e5e1d8" }}
          >
            <p
              className="text-xs font-bold tracking-widest uppercase mb-4"
              style={{ color: "#c9922a" }}
            >
              目次
            </p>
            <ol className="space-y-2">
              {article.sections.map((section, i) => (
                <li key={section.title} className="flex gap-3 text-sm">
                  <span
                    className="flex-shrink-0 font-bold"
                    style={{ color: "#c9922a", fontVariantNumeric: "tabular-nums" }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <a
                    href={`#${slugifySection(section.title, i)}`}
                    className="font-semibold hover:underline"
                    style={{ color: "#0c1a33" }}
                  >
                    {section.title}
                  </a>
                </li>
              ))}
              <li className="flex gap-3 text-sm">
                <span
                  className="flex-shrink-0 font-bold"
                  style={{ color: "#c9922a", fontVariantNumeric: "tabular-nums" }}
                >
                  {String(article.sections.length + 1).padStart(2, "0")}
                </span>
                <a
                  href="#faq"
                  className="font-semibold hover:underline"
                  style={{ color: "#0c1a33" }}
                >
                  よくある質問
                </a>
              </li>
            </ol>
          </nav>
        </div>
      )}

      <div className="py-16 px-4" style={{ backgroundColor: "#f7f5f0" }}>
        <div className="max-w-3xl mx-auto">
          <div
            className="p-8 rounded-2xl bg-white"
            style={{ border: "1px solid #e5e1d8" }}
          >
            {article.introParagraphs.map((paragraph) => (
              <p
                key={paragraph}
                className="text-sm leading-relaxed mb-4 last:mb-0"
                style={{ color: "#3d3d3d" }}
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>

      <div className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2
            className="text-2xl font-bold text-center mb-10"
            style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}
          >
            最初に押さえたいポイント
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {article.keyPoints.map((point) => (
              <div
                key={point.title}
                className="p-6 rounded-2xl"
                style={{ backgroundColor: "#f7f5f0", border: "1px solid #e5e1d8" }}
              >
                <p
                  className="font-bold text-base mb-3"
                  style={{ color: "#0c1a33" }}
                >
                  {point.title}
                </p>
                <p className="text-sm leading-relaxed" style={{ color: "#6b7280" }}>
                  {point.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {article.sections.map((section, index) => (
        <div key={section.title}>
          <div
            className="py-16 px-4"
            style={{
              backgroundColor: getSectionBackground(
                section.background ?? (index % 2 === 0 ? "sand" : "white"),
              ),
            }}
          >
            <div className="max-w-4xl mx-auto">
              <h2
                id={slugifySection(section.title, index)}
                className="text-2xl font-bold mb-6 scroll-mt-20"
                style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}
              >
                {section.title}
              </h2>
              {section.intro ? (
                <p
                  className="text-sm leading-relaxed mb-6"
                  style={{ color: "#6b7280" }}
                >
                  {section.intro}
                </p>
              ) : null}

              {section.paragraphs?.map((paragraph) => (
                <p
                  key={paragraph}
                  className="text-sm leading-relaxed mb-4 last:mb-0"
                  style={{ color: "#3d3d3d" }}
                >
                  {paragraph}
                </p>
              ))}

              {section.cards?.length ? (
                <div className="grid md:grid-cols-2 gap-6 mt-8">
                  {section.cards.map((card) => (
                    <div
                      key={card.title}
                      className="p-6 rounded-2xl bg-white"
                      style={{ border: "1px solid #e5e1d8" }}
                    >
                      <p
                        className="font-bold text-base mb-3"
                        style={{ color: "#0c1a33" }}
                      >
                        {card.title}
                      </p>
                      <p
                        className="text-sm leading-relaxed"
                        style={{ color: "#6b7280" }}
                      >
                        {card.body}
                      </p>
                    </div>
                  ))}
                </div>
              ) : null}

              {section.bullets?.length ? (
                <ul
                  className="mt-8 space-y-3 p-6 rounded-2xl"
                  style={{ backgroundColor: "#ffffff", border: "1px solid #e5e1d8" }}
                >
                  {section.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex items-start gap-3 text-sm leading-relaxed"
                      style={{ color: "#3d3d3d" }}
                    >
                      <span style={{ color: "#c9922a" }}>→</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          </div>

          {index === consultationAfterSection ? (
            <div className="py-4 px-4 bg-white">
              <div className="max-w-5xl mx-auto">
                <ArticleConsultationBox
                  title={article.consultation.title}
                  description={article.consultation.description}
                  points={article.consultation.points}
                  source={article.consultation.source}
                />
              </div>
            </div>
          ) : null}
        </div>
      ))}

      <div className="py-16 px-4" style={{ backgroundColor: "#f7f5f0" }}>
        <div className="max-w-3xl mx-auto">
          <h2
            id="faq"
            className="text-2xl font-bold mb-8 scroll-mt-20"
            style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}
          >
            よくある質問
          </h2>
          <div className="space-y-4 mb-12">
            {article.faqs.map((faq, index) => (
              <details
                key={`${faq.q}-${index}`}
                className="rounded-xl overflow-hidden group"
                style={{ border: "1px solid #e5e1d8" }}
              >
                <summary
                  className="flex items-center justify-between px-6 py-5 cursor-pointer font-semibold text-sm select-none list-none bg-white"
                  style={{ color: "#0c1a33" }}
                >
                  <span>Q. {faq.q}</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-4 h-4 flex-shrink-0 ml-4"
                    style={{ color: "#c9922a" }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m19 9-7 7-7-7"
                    />
                  </svg>
                </summary>
                <div
                  className="px-6 pb-5 pt-1 text-sm leading-relaxed"
                  style={{ color: "#4a5568", backgroundColor: "#faf9f6" }}
                >
                  {faq.a}
                </div>
              </details>
            ))}
          </div>

          <h2
            className="text-xl font-bold mb-6"
            style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}
          >
            関連記事
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            {article.relatedArticles.map((relatedArticle) => (
              <Link
                key={relatedArticle.href}
                href={relatedArticle.href}
                className="block p-5 rounded-xl bg-white hover:shadow-md transition-shadow"
                style={{ border: "1px solid #e5e1d8" }}
              >
                <span
                  className="inline-block text-xs font-semibold tracking-wide px-2 py-0.5 rounded-full mb-3"
                  style={{ backgroundColor: "#0c1a33", color: "#c9922a" }}
                >
                  {relatedArticle.label}
                </span>
                <p
                  className="text-sm font-bold leading-snug"
                  style={{ color: "#0c1a33" }}
                >
                  {relatedArticle.title}
                </p>
                <p
                  className="text-xs font-semibold mt-3"
                  style={{ color: "#c9922a" }}
                >
                  記事を読む →
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <RelatedHubs slug={article.slug} />

      <ColumnCTA
        heading={article.cta.heading}
        subtext={article.cta.subtext}
        concerns={article.cta.concerns}
        benefits={article.cta.benefits}
        source={article.cta.source}
      />
    </div>
  );
}
