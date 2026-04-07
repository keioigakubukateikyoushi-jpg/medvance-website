import type { Metadata } from "next";
import type { ReactNode } from "react";
import { buildBreadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "講師採用 | Medvance",
  description:
    "Medvanceの医学部受験指導講師の採用ページです。医学部生を中心に、担当可能科目や指導経験を活かして受験生を支える講師を募集しています。",
  alternates: {
    canonical: "/recruit",
  },
  openGraph: {
    title: "講師採用 | Medvance",
    description:
      "Medvanceの医学部受験指導講師の採用ページです。担当可能科目や指導経験を活かして受験生を支える講師を募集しています。",
    url: "https://medvance-edu.com/recruit",
    siteName: "Medvance",
    locale: "ja_JP",
    type: "website",
    images: ["https://medvance-edu.com/og-image.png"],
  },
};

const recruitSchema = buildBreadcrumbSchema([
  { name: "ホーム", url: "/" },
  { name: "講師採用", url: "/recruit" },
]);

export default function RecruitLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(recruitSchema) }}
      />
      {children}
    </>
  );
}
