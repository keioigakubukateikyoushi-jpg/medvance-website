import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "特定商取引法に基づく表記｜Medvance",
  description:
    "Medvanceの特定商取引法に基づく表記。事業者情報、サービス内容、料金、支払い方法、キャンセル・返金に関する取り扱いを記載しています。",
  alternates: { canonical: "/tokushoho" },
  robots: { index: true, follow: true },
};

export default function TokushohoLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
