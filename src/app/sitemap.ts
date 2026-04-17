import { MetadataRoute } from "next";
import { columnArticles } from "@/lib/columnArticles";
import { nationalUniversityArticles } from "./universities/national/data";
import { notices } from "@/lib/notices";

const BASE = "https://medvance-edu.com";

// 実際のコンテンツ更新日を使用（デプロイ日ではなく）
const D = (s: string) => new Date(s);

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: BASE, lastModified: D("2026-04-16"), changeFrequency: "weekly", priority: 1.0 },
    { url: `${BASE}/about`, lastModified: D("2026-03-21"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/recruit`, lastModified: D("2026-03-21"), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/pricing`, lastModified: D("2026-04-01"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/contact`, lastModified: D("2026-03-21"), changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/privacy`, lastModified: D("2026-03-21"), changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE}/cookies`, lastModified: D("2026-03-21"), changeFrequency: "yearly", priority: 0.3 },
    // 対象者別
    { url: `${BASE}/for/chugaku`, lastModified: D("2026-03-28"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/for/ko1`, lastModified: D("2026-03-28"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/for/ko2`, lastModified: D("2026-03-28"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/for/ko3`, lastModified: D("2026-03-28"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/for/ronin`, lastModified: D("2026-03-28"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/for/saijuken`, lastModified: D("2026-03-28"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/for/parents`, lastModified: D("2026-03-28"), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/for/keio-naibu`, lastModified: D("2026-03-28"), changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/for/keio-fuzoku`, lastModified: D("2026-03-28"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/for/seiseki-up`, lastModified: D("2026-03-28"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/for/nangandai`, lastModified: D("2026-03-28"), changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/for/suisen-ao`, lastModified: D("2026-03-28"), changeFrequency: "monthly", priority: 0.9 },
    // サービス別
    { url: `${BASE}/services/online`, lastModified: D("2026-03-28"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/services/visit`, lastModified: D("2026-03-28"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/services/interview`, lastModified: D("2026-03-28"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/services/moshi`, lastModified: D("2026-03-28"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/services/moshi/tool`, lastModified: D("2026-03-28"), changeFrequency: "monthly", priority: 0.7 },
    // 大学別
    { url: `${BASE}/universities/private`, lastModified: D("2026-03-28"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/universities/national`, lastModified: D("2026-03-28"), changeFrequency: "monthly", priority: 0.8 },
    ...nationalUniversityArticles.map((entry) => ({
      url: `${BASE}/universities/national/${entry.slug}`,
      lastModified: D("2026-03-28"),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    { url: `${BASE}/universities/keio`, lastModified: D("2026-03-28"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/universities/jikei`, lastModified: D("2026-03-28"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/universities/juntendo`, lastModified: D("2026-03-28"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/universities/nippon-medical`, lastModified: D("2026-03-28"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/universities/showa`, lastModified: D("2026-03-28"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/universities/tokyo-ika`, lastModified: D("2026-03-28"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/universities/nihon`, lastModified: D("2026-03-28"), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/universities/toho`, lastModified: D("2026-03-28"), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/universities/kyorin`, lastModified: D("2026-03-28"), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/universities/teikyo`, lastModified: D("2026-03-28"), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/universities/tokai`, lastModified: D("2026-03-28"), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/universities/kitasato`, lastModified: D("2026-03-28"), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/universities/marianna`, lastModified: D("2026-03-28"), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/universities/joshi-ika`, lastModified: D("2026-03-28"), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/universities/iuhw`, lastModified: D("2026-03-28"), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/universities/dokkyo`, lastModified: D("2026-03-28"), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/universities/saitama-ika`, lastModified: D("2026-03-28"), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/universities/kansai-ika`, lastModified: D("2026-03-28"), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/universities/kindai`, lastModified: D("2026-03-28"), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/universities/osaka-ika`, lastModified: D("2026-03-28"), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/universities/hyogo`, lastModified: D("2026-03-28"), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/universities/fujita`, lastModified: D("2026-03-28"), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/universities/aichi-ika`, lastModified: D("2026-03-28"), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/universities/kanazawa-ika`, lastModified: D("2026-03-28"), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/universities/kurume`, lastModified: D("2026-03-28"), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/universities/fukuoka`, lastModified: D("2026-03-28"), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/universities/kawasaki-ika`, lastModified: D("2026-03-28"), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/universities/iwate`, lastModified: D("2026-03-28"), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/universities/tohoku-ika`, lastModified: D("2026-03-28"), changeFrequency: "monthly", priority: 0.7 },
    // コラム
    { url: `${BASE}/column`, lastModified: D("2026-03-28"), changeFrequency: "weekly", priority: 0.9 },
    ...columnArticles.map((entry) => ({
      url: `${BASE}/column/${entry.slug}`,
      lastModified: D("2026-03-28"),
      changeFrequency: "monthly" as const,
      priority: entry.featuredOnHome || entry.popular ? 0.8 : 0.7,
    })),
    // お知らせ
    { url: `${BASE}/news`, lastModified: D("2026-03-28"), changeFrequency: "weekly", priority: 0.7 },
    ...notices.map((n) => ({
      url: `${BASE}/news/${n.slug}`,
      lastModified: new Date(n.date),
      changeFrequency: "monthly" as const,
      priority: 0.5,
    })),
    // 教科別
    { url: `${BASE}/subjects`, lastModified: D("2026-03-28"), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/subjects/english`, lastModified: D("2026-03-28"), changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/subjects/math`, lastModified: D("2026-03-28"), changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/subjects/physics`, lastModified: D("2026-03-28"), changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/subjects/chemistry`, lastModified: D("2026-03-28"), changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/subjects/biology`, lastModified: D("2026-03-28"), changeFrequency: "monthly", priority: 0.6 },
  ];
}
