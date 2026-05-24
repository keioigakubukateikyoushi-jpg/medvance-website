import type { Metadata } from "next";
import { Noto_Sans_JP, Noto_Serif_JP } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PromoStickyBar from "@/components/PromoStickyBar";
import FloatingCTA from "@/components/FloatingCTA";
import FadeInObserver from "@/components/FadeInObserver";
import AutoBreadcrumb from "@/components/AutoBreadcrumb";
import { buildWebSiteSchema, buildOrganizationSchema, siteUrl } from "@/lib/seo";

const notoSans = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-noto-sans",
  display: "swap",
  preload: false,
  fallback: [
    "Hiragino Sans",
    "Hiragino Kaku Gothic ProN",
    "Yu Gothic",
    "YuGothic",
    "Meiryo",
    "sans-serif",
  ],
  adjustFontFallback: false,
});

const notoSerif = Noto_Serif_JP({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-noto-serif",
  display: "swap",
  preload: false,
  fallback: [
    "Hiragino Mincho ProN",
    "Yu Mincho",
    "YuMincho",
    "MS PMincho",
    "Georgia",
    "serif",
  ],
  adjustFontFallback: false,
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Medvance｜医学部受験の戦略伴走",
    template: "%s | Medvance",
  },
  verification: {
    google: "k16LIidMUysJ2OAzYQwAjTWN9r6-tx065m8P1alPCQI",
  },
  description:
    "医学部に何としてでも合格したい受験生とご家庭へ。Medvanceは国公立・私立医学部の受験校選定、大手予備校併用、1対1指導、学習管理、面接小論文、保護者共有まで一体で設計する医学部受験専門塾です。",
  keywords: [
    "医学部 浪人", "医学部 浪人生", "私立医学部 浪人", "私立医学部 予備校", "私立医学部 個別指導", "医学部 出願戦略", "医学部 保護者 相談",
    "医学部 予備校併用", "集団塾 合わない", "医学部 合格戦略診断", "国公立医学部 対策",
    "医学部受験", "医学部塾", "医学部家庭教師", "医学部個別指導", "慶應医学部",
    "医学部オンライン", "浪人生 医学部", "再浪人 回避", "再受験 医学部", "医学部合格",
    "医学部 面接 小論文", "医学部 学習管理", "医学部 受験校 選び方",
    "Medvance", "メドバンス", "現役医学部生 指導", "個別指導 オンライン",
  ],
  openGraph: {
    title: "Medvance｜医学部受験の戦略伴走",
    description: "医学部に何としてでも合格したいご家庭へ。国公立・私立医学部の志望校戦略、予備校併用、1対1指導、週次管理、保護者共有まで一体で設計します。",
    url: "https://medvance-edu.com",
    siteName: "Medvance",
    locale: "ja_JP",
    type: "website",
    images: [
      {
        url: "https://medvance-edu.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Medvance｜医学部受験の戦略伴走",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Medvance｜医学部受験の戦略伴走",
    description: "医学部に何としてでも合格したいご家庭へ。国公立・私立医学部の志望校戦略、予備校併用、1対1指導、週次管理、保護者共有まで一体で設計します。",
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
    languages: {
      "ja-JP": siteUrl,
      "x-default": siteUrl,
    },
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
    <html lang="ja" className={`${notoSans.variable} ${notoSerif.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaGraph) }}
        />
        <link rel="icon" href="/favicon.png" type="image/png" />
        <meta name="format-detection" content="telephone=no" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
      </head>
      <body className="antialiased">
        <PromoStickyBar />
        <Header />
        <AutoBreadcrumb />
        <main>{children}</main>
        <Footer />
        <FadeInObserver />
        <FloatingCTA />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-VNNSC04YT0"
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}window.gtag=gtag;gtag('js',new Date());gtag('config','G-VNNSC04YT0',{send_page_view:true});`}
        </Script>
      </body>
    </html>
  );
}
