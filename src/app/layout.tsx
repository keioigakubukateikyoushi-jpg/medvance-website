import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import { buildWebSiteSchema, siteUrl } from "@/lib/seo";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Medvance｜現役慶應医学部生による医学部受験専門塾",
    template: "%s | Medvance",
  },
  alternates: {
    canonical: "/",
  },
  other: {
    "google-site-verification": "k16LIidMUysJ2OAzYQwAjTWN9r6-tx065m8P1alPCQI",
  },
  description:
    "医学部合格は、戦略で決まる。現役慶應医学部生による完全1対1の医学部受験専門塾Medvance。家庭教師・オンライン全国対応・浪人生・再受験生歓迎。無料相談受付中。",
  keywords: [
    "医学部受験", "医学部塾", "医学部家庭教師", "医学部個別指導", "慶應医学部",
    "医学部オンライン", "浪人生 医学部", "再受験 医学部", "医学部合格",
    "Medvance", "メドバンス", "医学部専門塾", "慶應医学部生", "医学部対策",
  ],
  openGraph: {
    title: "Medvance｜現役慶應医学部生による医学部受験専門塾",
    description: "医学部合格は、戦略で決まる。現役慶應医学部生による完全1対1指導。全国オンライン対応・無料相談受付中。",
    url: "https://medvance-edu.com",
    siteName: "Medvance",
    locale: "ja_JP",
    type: "website",
    images: [
      {
        url: "https://medvance-edu.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Medvance｜医学部合格は、戦略で決まる。",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Medvance｜現役慶應医学部生による医学部受験専門塾",
    description: "医学部合格は、戦略で決まる。現役慶應医学部生による完全1対1指導。",
    images: ["https://medvance-edu.com/og-image.png"],
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "Medvance（メドバンス）",
  alternateName: "メドバンス",
  description: "現役慶應義塾大学医学部生による、医学部受験に特化した完全1対1の個別指導塾。",
  url: "https://medvance-edu.com",
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer support",
    availableLanguage: "Japanese",
    url: "https://medvance-edu.com/contact",
  },
  areaServed: {
    "@type": "Country",
    name: "Japan",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "医学部受験指導サービス",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "完全1対1医学部受験個別指導" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "オンライン医学部受験指導" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "医学部面接・小論文対策" } },
    ],
  },
};

const schemaGraph = [organizationSchema, buildWebSiteSchema()];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;700&family=Noto+Serif+JP:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaGraph) }}
        />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-VNNSC04YT0" />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-VNNSC04YT0');`,
          }}
        />
      </head>
      <body className="antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingCTA />
      </body>
    </html>
  );
}
