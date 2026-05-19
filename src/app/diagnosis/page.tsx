import type { Metadata } from "next";
import DiagnosisClient from "./DiagnosisClient";

export const metadata: Metadata = {
  title: "3分医学部受験診断",
  description:
    "現状の学年・偏差値・学習時間・志望校から、医学部合格までの距離と次の一手を3分で診断します。",
};

export default function DiagnosisPage() {
  return <DiagnosisClient />;
}
