import type { Metadata } from "next";
import type { ReactNode } from "react";
import { buildBreadcrumbSchema, buildServiceSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "医学部 合格戦略診断｜国公立・私立医学部の個別戦略",
  description:
    "医学部に何としても入りたい受験生とご家庭へ。予備校利用状況・模試・志望校・学習時間・保護者の投資方針から、国公立・私立医学部合格に向けた勝ち筋を診断します。",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "医学部 合格戦略診断",
    description:
      "予備校併用、集団塾不適合、国公立・私立医学部の志望校選定、科目別優先順位、必要な伴走体制を診断します。",
    url: "https://medvance-edu.com/contact",
    siteName: "Medvance",
    locale: "ja_JP",
    type: "website",
    images: ["https://medvance-edu.com/og-image.png"],
  },
};

const contactSchemas = [
  buildBreadcrumbSchema([
    { name: "ホーム", url: "/" },
    { name: "医学部 合格戦略診断", url: "/contact" },
  ]),
  buildServiceSchema(
    "医学部 合格戦略診断",
    "医学部志望生向けに、予備校併用、集団塾不適合、受験校選定、学習計画、面接・小論文対策、保護者共有の方針を診断するMedvanceの初回診断サービスです。",
    "/contact",
    "医学部 合格戦略診断",
  ),
];

export default function ContactLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchemas) }}
      />
      {children}
    </>
  );
}
