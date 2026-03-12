import { MetadataRoute } from "next";

const BASE = "https://medvance-edu.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: BASE, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${BASE}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/pricing`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/success-stories`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    // 対象者別
    { url: `${BASE}/for/ronin`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/for/saijuken`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/for/parents`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    // サービス別
    { url: `${BASE}/services/online`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/services/visit`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/services/interview`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    // 大学別
    { url: `${BASE}/universities/keio`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/universities/private`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/universities/national`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    // コラム
    { url: `${BASE}/column/study-method`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/column/roadmap`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/column/difference`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    // 教科別
    { url: `${BASE}/subjects`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/subjects/english`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/subjects/math`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/subjects/physics`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/subjects/chemistry`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/subjects/biology`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
  ];
}
