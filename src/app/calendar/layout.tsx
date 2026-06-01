import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "カレンダー",
  alternates: { canonical: "/calendar" },
  robots: { index: false, follow: true },
};

export default function CalendarLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
