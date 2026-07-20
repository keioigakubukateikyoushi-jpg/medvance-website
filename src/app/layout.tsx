import type { Metadata } from "next";
import { Suspense } from "react";
import { Noto_Sans_JP, Noto_Serif_JP } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PromoStickyBar from "@/components/PromoStickyBar";
import FloatingCTA from "@/components/FloatingCTA";
import FadeInObserver from "@/components/FadeInObserver";
import AutoBreadcrumb from "@/components/AutoBreadcrumb";
import AttributionCapture from "@/components/AttributionCapture";
import ClarityScript from "@/components/ClarityScript";
import { buildWebSiteSchema, buildOrganizationSchema, siteUrl } from "@/lib/seo";

const notoSans = Noto_Sans_JP({
  weight: ["400", "500", "700"],
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
    default: "Medvance｜現役慶應医学部生の医学部受験専門・完全1対1",
    template: "%s | Medvance",
  },
  verification: {
    google: "k16LIidMUysJ2OAzYQwAjTWN9r6-tx065m8P1alPCQI",
  },
  description:
    "現役慶應医学部生が完全1対1で伴走する医学部受験専門塾Medvance。国公立・私立の出願戦略、予備校併用、週次学習管理、面接・小論文・MMI、保護者共有まで一体設計。全国オンライン対応。無料の合格戦略診断あり。",
  keywords: [
    "医学部受験塾",
    "医学部 浪人",
    "医学部 浪人生",
    "私立医学部 浪人",
    "私立医学部 予備校",
    "私立医学部 個別指導",
    "医学部 出願戦略",
    "医学部 保護者 相談",
    "医学部 予備校併用",
    "集団塾 合わない",
    "医学部 合格戦略診断",
    "国公立医学部 対策",
    "医学部受験",
    "医学部塾",
    "医学部家庭教師",
    "医学部個別指導",
    "慶應医学部",
    "医学部オンライン",
    "浪人生 医学部",
    "再浪人 回避",
    "再受験 医学部",
    "医学部合格",
    "医学部 面接",
    "医学部 MMI",
    "医学部 小論文",
    "医学部 学習管理",
    "医学部 受験校 選び方",
    "Medvance",
    "メドバンス",
    "現役医学部生 指導",
    "個別指導 オンライン",
    "鉄緑会 併用 医学部",
    "駿台 河合塾 併用",
    "医学部予備校 料金比較",
  ],
  openGraph: {
    title: "Medvance｜現役慶應医学部生の医学部受験専門・完全1対1",
    description:
      "国公立・私立医学部の志望校戦略、予備校併用、1対1指導、週次管理、面接小論文まで一体設計。全国オンライン。",
    url: siteUrl,
    siteName: "Medvance 医学部受験塾",
    locale: "ja_JP",
    type: "website",
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Medvance｜現役慶應医学部生の医学部受験専門・完全1対1",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Medvance｜現役慶應医学部生の医学部受験専門・完全1対1",
    description:
      "国公立・私立医学部の志望校戦略、予備校併用、1対1指導、週次管理、面接小論文まで一体設計。",
    images: [`${siteUrl}/og-image.png`],
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
    types: {
      "text/plain": [
        { url: `${siteUrl}/llms.txt`, title: "llms.txt" },
        { url: `${siteUrl}/llms-full.txt`, title: "llms-full" },
      ],
    },
  },
  category: "education",
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
        {/* LLMO: discoverable fact endpoints for generative engines */}
        <link rel="describedby" href="/llms.txt" type="text/plain" />
        <link rel="alternate" type="text/plain" href="/llms.txt" title="llms.txt" />
        <link rel="alternate" type="text/plain" href="/llms-full.txt" title="LLM full facts" />
        <link rel="alternate" href="/for-ai" hrefLang="ja" title="AI fact sheet" />
      </head>
      <body className="antialiased">
        <PromoStickyBar />
        <Header />
        <AutoBreadcrumb />
        <main className="overflow-x-hidden">{children}</main>
        <Footer />
        <FadeInObserver />
        <FloatingCTA />
        <Suspense fallback={null}>
          <AttributionCapture />
        </Suspense>
        <ClarityScript />
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
