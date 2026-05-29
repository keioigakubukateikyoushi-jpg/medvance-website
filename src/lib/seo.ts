export const siteUrl = "https://medvance-edu.com";

// Published date for all content (static for now, used in Article schema)
export const SITE_PUBLISHED = "2024-04-01";
export const SITE_MODIFIED = "2026-04-24";

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
    description: "医学部合格に向けて、国公立・私立医学部の志望校戦略、大手予備校併用、集団塾が合わない方の1対1指導、受験校選定、週次学習管理、面接小論文、保護者共有まで一体で設計する医学部受験専門塾。全国オンライン対応。",
    url: siteUrl,
    logo: {
      "@type": "ImageObject",
      url: `${siteUrl}/images/logo.png`,
      width: 512,
      height: 512,
    },
    image: `${siteUrl}/og-image.png`,
    foundingDate: "2024-04-01",
    slogan: "医学部合格に本気で向き合うご家庭の戦略伴走",
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
      "私立医学部受験",
      "大手予備校併用",
      "医学部浪人生",
      "再浪人回避",
      "医学部出願戦略",
      "医学部学習管理",
      "慶應義塾大学医学部",
      "小論文対策",
      "医学部面接",
      "オンライン個別指導",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "医学部受験向け個別戦略サービス",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "医学部 合格戦略診断" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "予備校併用 戦略伴走プログラム" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "医学部受験 個別指導" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "医学部 面接・小論文対策" } },
      ],
    },
  };
}

export function buildSpeakableSchema(path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    url: buildAbsoluteUrl(path),
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["h1", "h2", "p"],
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

type HowToStep = { name: string; text: string };

export function buildHowToSchema({
  name,
  description,
  path,
  steps,
  totalTime,
}: {
  name: string;
  description: string;
  path: string;
  steps: HowToStep[];
  totalTime?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name,
    description,
    url: `${siteUrl}${path}`,
    ...(totalTime ? { totalTime } : {}),
    step: steps.map((s, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: s.name,
      text: s.text,
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
  datePublished,
  dateModified,
}: {
  title: string;
  description: string;
  slug: string;
  category: string;
  keywords?: string[];
  faqItems?: FaqSchemaInput[];
  datePublished?: string;
  dateModified?: string;
}) {
  const path = `/column/${slug}`;
  const schemas: object[] = [
    buildArticleSchema({
      headline: title,
      description,
      path,
      articleSection: category,
      keywords,
      datePublished,
      dateModified,
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
