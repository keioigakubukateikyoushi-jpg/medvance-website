export const siteUrl = "https://medvance-edu.com";

type SchemaListItem = {
  name: string;
  url: string;
};

type ArticleSchemaInput = {
  headline: string;
  description: string;
  path: string;
  datePublished: string;
  dateModified: string;
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
      target: `${siteUrl}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string",
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
  datePublished,
  dateModified,
  articleSection,
  keywords = [],
}: ArticleSchemaInput) {
  const url = buildAbsoluteUrl(path);

  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline,
    description,
    url,
    mainEntityOfPage: url,
    inLanguage: "ja-JP",
    articleSection,
    datePublished,
    dateModified,
    keywords,
    author: {
      "@type": "Organization",
      name: "Medvance編集部",
    },
    publisher: {
      "@type": "Organization",
      name: "Medvance",
      logo: {
        "@type": "ImageObject",
        url: buildAbsoluteUrl("/og-image.png"),
      },
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
      name: "Medvance",
      url: siteUrl,
    },
    areaServed: {
      "@type": "Country",
      name: "Japan",
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
