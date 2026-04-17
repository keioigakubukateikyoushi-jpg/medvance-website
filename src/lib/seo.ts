export const siteUrl = "https://medvance-edu.com";

// Published date for all content (static for now, used in Article schema)
export const SITE_PUBLISHED = "2024-04-01";
export const SITE_MODIFIED = "2026-04-14";

type SchemaListItem = {
  name: string;
  url: string;
};

type ArticleSchemaInput = {
  headline: string;
  description: string;
  path: string;
  datePublished?: string;
  dateModified?: string;
  articleSection: string;
  keywords?: string[];
};

type FaqSchemaInput = {
  q: string;
  a: string;
};

export function buildAbsoluteUrl(path: string) {
  return path.startsWith("http") ? path : new URL(path, siteUrl).toString();
}

export function buildWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Medvance",
    alternateName: "メドバンス",
    url: siteUrl,
    inLanguage: "ja-JP",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${siteUrl}/search?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

export function buildOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "@id": `${siteUrl}/#organization`,
    name: "Medvance（メドバンス）",
    alternateName: ["メドバンス", "Medvance"],
    description: "現役慶應義塾大学医学部生による完全1対1の個別指導塾。医学部受験・難関大受験・学校の成績向上・推薦AO入試対策まで幅広く対応。全国オンライン。",
    url: siteUrl,
    logo: {
      "@type": "ImageObject",
      url: `${siteUrl}/images/logo.png`,
      width: 512,
      height: 512,
    },
    image: `${siteUrl}/og-image.png`,
    foundingDate: "2024-04-01",
    slogan: "現役慶應医学部生による完全1対1指導",
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      availableLanguage: ["Japanese", "ja"],
      url: `${siteUrl}/contact`,
    },
    areaServed: {
      "@type": "Country",
      name: "Japan",
    },
    knowsAbout: [
      "医学部受験",
      "医学部入試",
      "難関大学受験",
      "慶應義塾大学医学部",
      "推薦入試",
      "AO入試",
      "総合型選抜",
      "小論文対策",
      "医学部面接",
      "学校成績対策",
      "内部進学",
      "オンライン個別指導",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "個別指導サービス",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "医学部受験 個別指導" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "難関大受験 個別指導" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "学校の成績向上・定期テスト対策" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "推薦・AO入試 面接・小論文対策" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "慶應附属校 内部進学対策" } },
      ],
    },
  };
}

export function buildBreadcrumbSchema(items: SchemaListItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: buildAbsoluteUrl(item.url),
    })),
  };
}

export function buildItemListSchema(name: string, path: string, items: SchemaListItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name,
    url: buildAbsoluteUrl(path),
    numberOfItems: items.length,
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: buildAbsoluteUrl(item.url),
      name: item.name,
    })),
  };
}

export function buildCollectionPageSchema(name: string, description: string, path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name,
    description,
    url: buildAbsoluteUrl(path),
    inLanguage: "ja-JP",
    isPartOf: buildAbsoluteUrl("/"),
  };
}

export function buildArticleSchema({
  headline,
  description,
  path,
  datePublished = SITE_PUBLISHED,
  dateModified = SITE_MODIFIED,
  articleSection,
  keywords = [],
}: ArticleSchemaInput) {
  const url = buildAbsoluteUrl(path);

  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${url}#article`,
    headline,
    description,
    url,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    inLanguage: "ja-JP",
    articleSection,
    datePublished,
    dateModified,
    keywords: keywords.join(", "),
    author: {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "Medvance編集部",
    },
    publisher: {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "Medvance",
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/images/logo.png`,
      },
    },
    image: {
      "@type": "ImageObject",
      url: `${siteUrl}/og-image.png`,
      width: 1200,
      height: 630,
    },
  };
}

export function buildServiceSchema(name: string, description: string, path: string, serviceType: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url: buildAbsoluteUrl(path),
    serviceType,
    provider: {
      "@type": "EducationalOrganization",
      "@id": `${siteUrl}/#organization`,
      name: "Medvance",
      url: siteUrl,
    },
    areaServed: {
      "@type": "Country",
      name: "Japan",
    },
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      priceCurrency: "JPY",
      url: `${siteUrl}/contact`,
    },
  };
}

export function buildFaqSchema(items: FaqSchemaInput[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };
}

// Convenience: article page full schema graph (Article + Breadcrumb + FAQ)
export function buildColumnPageSchemas({
  title,
  description,
  slug,
  category,
  keywords,
  faqItems,
}: {
  title: string;
  description: string;
  slug: string;
  category: string;
  keywords?: string[];
  faqItems?: FaqSchemaInput[];
}) {
  const path = `/column/${slug}`;
  const schemas: object[] = [
    buildArticleSchema({
      headline: title,
      description,
      path,
      articleSection: category,
      keywords,
    }),
    buildBreadcrumbSchema([
      { name: "ホーム", url: "/" },
      { name: "コラム一覧", url: "/column" },
      { name: title, url: path },
    ]),
  ];
  if (faqItems && faqItems.length > 0) {
    schemas.push(buildFaqSchema(faqItems));
  }
  return schemas;
}

// For/ page schema (Service + Breadcrumb)
export function buildForPageSchemas({
  name,
  description,
  slug,
  serviceType,
  breadcrumbLabel,
}: {
  name: string;
  description: string;
  slug: string;
  serviceType: string;
  breadcrumbLabel: string;
}) {
  const path = `/for/${slug}`;
  return [
    buildServiceSchema(name, description, path, serviceType),
    buildBreadcrumbSchema([
      { name: "ホーム", url: "/" },
      { name: breadcrumbLabel, url: path },
    ]),
  ];
}
