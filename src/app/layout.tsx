import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import { buildWebSiteSchema, buildOrganizationSchema, siteUrl } from "@/lib/seo";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Medvance｜現役慶應医学部生による完全1対1個別指導",
    template: "%s | Medvance",
  },
  verification: {
    google: "k16LIidMUysJ2OAzYQwAjTWN9r6-tx065m8P1alPCQI",
  },
  description:
    "現役慶應義塾大学医学部生による完全1対1の個別指導塾Medvance。医学部受験・難関大受験・学校の成績向上・推薦AO入試・慶應内部進学まで全国オンライン対応。無料相談受付中。",
  keywords: [
    "医学部受験", "医学部塾", "医学部家庭教師", "医学部個別指導", "慶應医学部",
    "医学部オンライン", "浪人生 医学部", "再受験 医学部", "医学部合格",
    "難関大受験 家庭教師", "東大受験 個別指導", "早慶受験 家庭教師",
    "定期テスト対策 家庭教師", "学校の成績 上げる 家庭教師", "内申点 家庭教師",
    "推薦入試 面接 家庭教師", "AO入試 志望理由書", "総合型選抜 対策",
    "慶應附属校 内部進学", "慶應内部進学 成績",
    "Medvance", "メドバンス", "慶應医学部生", "個別指導 オンライン",
  ],
  openGraph: {
    title: "Medvance｜現役慶應医学部生による完全1対1個別指導",
    description: "医学部受験・難関大受験・定期テスト対策・推薦AO入試まで。現役慶應医学部生が完全1対1で指導。全国オンライン対応・無料相談受付中。",
    url: "https://medvance-edu.com",
    siteName: "Medvance",
    locale: "ja_JP",
    type: "website",
    images: [
      {
        url: "https://medvance-edu.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Medvance｜現役慶應医学部生による完全1対1個別指導",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Medvance｜現役慶應医学部生による完全1対1個別指導",
    description: "医学部受験・難関大受験・定期テスト対策・推薦AO入試。現役慶應医学部生が全国オンラインで1対1指導。",
    images: ["https://medvance-edu.com/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
};

const schemaGraph = {
  "@context": "https://schema.org",
  "@graph": [buildOrganizationSchema(), buildWebSiteSchema()],
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaGraph) }}
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta name="format-detection" content="telephone=no" />
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
