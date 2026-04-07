import type { Metadata } from "next";
import type { ReactNode } from "react";
import { buildBreadcrumbSchema, buildServiceSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "無料相談・お問い合わせ | Medvance",
  description:
    "医学部受験の学習計画、志望校戦略、面接・小論文対策まで相談できるMedvanceの無料相談フォームです。オンライン全国対応で受験生・保護者の相談を受け付けています。",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "無料相談・お問い合わせ | Medvance",
    description:
      "医学部受験の学習計画、志望校戦略、面接・小論文対策まで相談できる無料相談フォームです。",
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
    { name: "無料相談・お問い合わせ", url: "/contact" },
  ]),
  buildServiceSchema(
    "医学部受験の無料相談",
    "医学部受験の学習計画、志望校戦略、面接・小論文対策を相談できるMedvanceの無料相談サービスです。",
    "/contact",
    "医学部受験の無料相談",
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
