import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookieポリシー",
  description: "Medvanceにおける Cookie の利用方針について。アクセス解析、サイト改善、サービス最適化のためにCookieを使用しています。",
  alternates: { canonical: "/cookies" },
  robots: { index: true, follow: true },
};

export default function CookiesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
