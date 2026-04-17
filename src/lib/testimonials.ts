import { siteUrl } from "./seo";

export type Testimonial = {
  slug: string;
  author: string;
  authorRole: string;
  rating: 1 | 2 | 3 | 4 | 5;
  headline: string;
  body: string;
  datePublished: string;
};

export const testimonials: Testimonial[] = [];

export function buildReviewSchemas() {
  if (testimonials.length === 0) return [];

  const reviews = testimonials.map((t) => ({
    "@context": "https://schema.org",
    "@type": "Review",
    "@id": `${siteUrl}/#review-${t.slug}`,
    itemReviewed: {
      "@type": "EducationalOrganization",
      "@id": `${siteUrl}/#organization`,
    },
    reviewRating: {
      "@type": "Rating",
      ratingValue: t.rating.toString(),
      bestRating: "5",
      worstRating: "1",
    },
    author: {
      "@type": "Person",
      name: t.author,
    },
    name: t.headline,
    reviewBody: t.body,
    datePublished: t.datePublished,
  }));

  const ratingValues = testimonials.map((t) => t.rating);
  const avg = ratingValues.reduce((a, b) => a + b, 0) / ratingValues.length;

  const aggregate = {
    "@context": "https://schema.org",
    "@type": "AggregateRating",
    "@id": `${siteUrl}/#aggregate-rating`,
    itemReviewed: {
      "@type": "EducationalOrganization",
      "@id": `${siteUrl}/#organization`,
    },
    ratingValue: avg.toFixed(1),
    bestRating: "5",
    worstRating: "1",
    ratingCount: testimonials.length.toString(),
    reviewCount: testimonials.length.toString(),
  };

  return [...reviews, aggregate];
}
