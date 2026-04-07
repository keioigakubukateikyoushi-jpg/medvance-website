import type { Metadata } from "next";
import type { ReactNode } from "react";
import { buildBreadcrumbSchema, buildServiceSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "医学部模試判定ツール | Medvance",
  description:
    "模試成績を入力すると、医学部受験に向けた現在地、弱点科目、優先順位付きの学習方針を確認できるMedvanceの無料模試判定ツールです。",
  alternates: {
    canonical: "/services/moshi/tool",
  },
  openGraph: {
    title: "医学部模試判定ツール | Medvance",
    description:
      "模試成績を入力すると、医学部受験に向けた現在地、弱点科目、優先順位付きの学習方針を確認できる無料模試判定ツールです。",
    url: "https://medvance-edu.com/services/moshi/tool",
    siteName: "Medvance",
    locale: "ja_JP",
    type: "website",
    images: ["https://medvance-edu.com/og-image.png"],
  },
};

const moshiToolSchemas = [
  buildBreadcrumbSchema([
    { name: "ホーム", url: "/" },
    { name: "AI模試判定サービス", url: "/services/moshi" },
    { name: "医学部模試判定ツール", url: "/services/moshi/tool" },
  ]),
  buildServiceSchema(
    "医学部模試判定ツール",
    "模試成績を入力すると、医学部受験に向けた現在地、弱点科目、優先順位付きの学習方針を確認できるMedvanceの無料模試判定ツールです。",
    "/services/moshi/tool",
    "医学部模試判定ツール",
  ),
];

export default function MoshiToolLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(moshiToolSchemas) }}
      />
      {children}
    </>
  );
}
