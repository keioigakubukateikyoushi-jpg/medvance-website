import { MetadataRoute } from "next";
import { columnArticles } from "@/lib/columnArticles";
import { nationalUniversityArticles } from "./universities/national/data";
import { notices } from "@/lib/notices";

const BASE = "https://medvance-edu.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: BASE, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${BASE}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/recruit`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/pricing`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/download`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/privacy`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE}/cookies`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE}/success-stories`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    // 対象者別
    { url: `${BASE}/for/chugaku`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/for/ko1`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/for/ko2`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/for/ko3`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/for/ronin`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/for/saijuken`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/for/parents`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/for/keio-naibu`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/for/keio-fuzoku`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/for/seiseki-up`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    // サービス別
    { url: `${BASE}/services/online`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/services/visit`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/services/interview`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/services/moshi`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/services/moshi/tool`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    // 大学別
    { url: `${BASE}/universities/private`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/universities/national`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    ...nationalUniversityArticles.map((entry) => ({
      url: `${BASE}/universities/national/${entry.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    { url: `${BASE}/universities/keio`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/universities/jikei`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/universities/juntendo`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/universities/nippon-medical`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/universities/showa`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/universities/tokyo-ika`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/universities/nihon`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/universities/toho`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/universities/kyorin`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/universities/teikyo`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/universities/tokai`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/universities/kitasato`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/universities/marianna`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/universities/joshi-ika`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/universities/iuhw`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/universities/dokkyo`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/universities/saitama-ika`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/universities/kansai-ika`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/universities/kindai`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/universities/osaka-ika`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/universities/hyogo`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/universities/fujita`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/universities/aichi-ika`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/universities/kanazawa-ika`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/universities/kurume`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/universities/fukuoka`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/universities/kawasaki-ika`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/universities/iwate`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/universities/tohoku-ika`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    // コラム
    { url: `${BASE}/column`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    ...columnArticles.map((entry) => ({
      url: `${BASE}/column/${entry.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: entry.featuredOnHome || entry.popular ? 0.8 : 0.7,
    })),
    // お知らせ
    { url: `${BASE}/news`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    ...notices.map((n) => ({
      url: `${BASE}/news/${n.slug}`,
      lastModified: new Date(n.date),
      changeFrequency: "monthly" as const,
      priority: 0.5,
    })),
    // 教科別
    { url: `${BASE}/subjects`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/subjects/english`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/subjects/math`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/subjects/physics`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/subjects/chemistry`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/subjects/biology`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
  ];
}
