import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Medvance｜現役慶應医学部生による医学部受験専門塾",
    template: "%s | Medvance",
  },
  description:
    "医学部合格は、戦略で決まる。現役慶應医学部生による完全1対1の医学部受験専門塾Medvance。医学部合格実績多数。家庭教師・オンライン全国対応・浪人生・再受験生歓迎。無料相談受付中。",
  keywords: [
    "医学部受験", "医学部塾", "医学部家庭教師", "医学部個別指導", "慶應医学部",
    "医学部オンライン", "浪人生 医学部", "再受験 医学部", "医学部合格",
    "Medvance", "メドバンス", "医学部専門塾", "慶應医学部生", "医学部対策",
  ],
  openGraph: {
    title: "Medvance｜現役慶應医学部生による医学部受験専門塾",
    description: "医学部合格は、戦略で決まる。慶應医学部生による完全1対1指導。医学部合格実績多数。",
    url: "https://medvance-edu.com",
    siteName: "Medvance",
    locale: "ja_JP",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "Medvance（メドバンス）",
  alternateName: "メドバンス",
  description: "現役慶應義塾大学医学部生による、医学部受験に特化した完全1対1の個別指導塾。医学部合格実績多数。",
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
