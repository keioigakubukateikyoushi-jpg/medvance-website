export const siteUrl = "https://medvance-edu.com";

// Published date for all content (static for now, used in Article schema)
export const SITE_PUBLISHED = "2024-04-01";
export const SITE_MODIFIED = "2026-07-12";

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
    alternateName: ["メドバンス", "Medvance", "メドバンス医学部受験専門塾"],
    description: "医学部合格に向けて、国公立・私立医学部の志望校戦略、大手予備校併用、集団塾が合わない方の完全1対1個別指導、受験校選定、15分単位の学習管理（コーチング）、面接・小論文・願書対策、保護者様への進捗共有まで一体で設計する医学部受験専門塾。現役慶應医学部生が指導を担当し、全国オンラインおよび関東圏対面派遣に対応。",
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
    knowsLanguage: ["ja", "ja-JP"],
    sameAs: [
      "https://note.com/igakubu_juken",
      "https://lin.ee/Wwn1jaL",
    ],
    brand: {
      "@type": "Brand",
      "name": "Medvance"
    },
    address: {
      "@type": "PostalAddress",
      "postalCode": "104-0061",
      "addressCountry": "JP",
      "addressRegion": "東京都",
      "addressLocality": "中央区",
      "streetAddress": "銀座1丁目12番4号 N&E BLD.6F"
    },
    founder: {
      "@type": "Person",
      "name": "現役慶應医学部生代表"
    },
    priceRange: "¥80,000 - ¥320,000 / month",
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      availableLanguage: ["Japanese", "ja"],
      url: `${siteUrl}/contact`,
      email: "support@medvance-edu.com"
    },
    areaServed: [
      { "@type": "Country", name: "Japan" },
      { "@type": "AdministrativeArea", name: "東京都" },
      { "@type": "AdministrativeArea", name: "関東地方" },
    ],
    knowsAbout: [
      "医学部受験",
      "医学部入試",
      "私立医学部受験",
      "国公立医学部受験",
      "大手予備校併用",
      "医学部浪人生",
      "再浪人回避",
      "医学部出願戦略",
      "医学部学習管理",
      "医学部受験家庭教師",
      "慶應義塾大学医学部",
      "小論文対策",
      "医学部面接",
      "医学部MMI",
      "志望理由書",
      "オンライン個別指導",
      "15分単位の学習計画",
      "合格戦略診断",
      "附属校・中高一貫校の内部生サポート",
      "定期テスト対策・評定（GPA）向上",
      "留年回避・進級サポート",
      "慶應附属校の内部進学対策",
      "対面・家庭教師型指導（東京）",
      "医学部浪人",
      "私立医学部併願",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Medvance 料金プラン・指導コース",
      itemListElement: [
        {
          "@type": "Offer",
          "name": "通常月額プラン［月4回（8コマ）/ 週1回］",
          "price": 80000,
          "priceCurrency": "JPY",
          "description": "授業料（60,000円）＋コーチング料（20,000円）の標準プラン。1コマ45分 7,500円（1回の授業は90分 = 15,000円）換算。"
        },
        {
          "@type": "Offer",
          "name": "通常月額プラン［月8回（16コマ）/ 週2回］",
          "price": 140000,
          "priceCurrency": "JPY",
          "description": "授業料（120,000円）＋コーチング料（20,000円）の推奨プラン。1コマ45分 7,500円（1回の授業は90分 = 15,000円）換算。"
        },
        {
          "@type": "Offer",
          "name": "通常月額プラン［月12回（24コマ）/ 週3回］",
          "price": 200000,
          "priceCurrency": "JPY",
          "description": "授業料（180,000円）＋コーチング料（20,000円）の短期集中プラン（セット割引適用価格）。1コマ45分 7,500円（1回の授業は90分 = 15,000円）換算。"
        },
        {
          "@type": "Offer",
          "name": "通常月額プラン［月16回（32コマ）/ 週4回］",
          "price": 260000,
          "priceCurrency": "JPY",
          "description": "授業料（240,000円）＋コーチング料（20,000円）の超集中プラン（セット割引適用価格）。1コマ45分 7,500円（1回の授業は90分 = 15,000円）換算。"
        },
        {
          "@type": "Offer",
          "name": "通常月額プラン［月20回（40コマ）/ 週5回］",
          "price": 320000,
          "priceCurrency": "JPY",
          "description": "授業料（300,000円）＋コーチング料（20,000円）の極限集中プラン（セット割引適用価格）。1コマ45分 7,500円（1回の授業は90分 = 15,000円）換算。"
        },
        {
          "@type": "Offer",
          "name": "入塾金（初回のみ）",
          "price": 20000,
          "priceCurrency": "JPY",
          "description": "初回入塾時のみ発生する一回限りの費用。"
        },
        {
          "@type": "Offer",
          "name": "コーチング料（月額）",
          "price": 20000,
          "priceCurrency": "JPY",
          "description": "15分単位の計画作成、毎日の学習進捗管理、LINEでの24時間質問対応、保護者様への進捗共有。"
        }
      ]
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
      "@type": "Person",
      name: "現役慶應医学部生（メドバンス監修）",
      jobTitle: "メドバンス監修代表",
      worksFor: {
        "@type": "EducationalOrganization",
        "@id": `${siteUrl}/#organization`,
        name: "Medvance",
      },
      alumniOf: {
        "@type": "EducationalOrganization",
        name: "慶應義塾大学医学部",
      },
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
