import { MetadataRoute } from "next";
import path from "node:path";
import { columnArticles } from "@/lib/columnArticles";
import { nationalUniversityArticles } from "./universities/national/data";
import { notices } from "@/lib/notices";
import { getGitMtimeDate } from "@/lib/gitMtime";

const BASE = "https://medvance-edu.com";

const gitMtime = getGitMtimeDate;

const columnMtime = (slug: string) =>
  gitMtime(path.join("src", "app", "column", slug, "page.tsx"), "2026-03-28");
const nationalMtime = () =>
  gitMtime(path.join("src", "app", "universities", "national", "[slug]", "page.tsx"), "2026-03-28");
const universityMtime = (slug: string) =>
  gitMtime(path.join("src", "app", "universities", slug, "page.tsx"), "2026-03-28");
const forMtime = (slug: string) =>
  gitMtime(path.join("src", "app", "for", slug, "page.tsx"), "2026-03-28");
const serviceMtime = (slug: string) =>
  gitMtime(path.join("src", "app", "services", slug, "page.tsx"), "2026-03-28");
const subjectMtime = (slug: string) =>
  gitMtime(path.join("src", "app", "subjects", slug, "page.tsx"), "2026-03-28");
const pageMtime = (segment: string) =>
  gitMtime(path.join("src", "app", segment, "page.tsx"), "2026-04-20");

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: BASE, lastModified: pageMtime(""), changeFrequency: "weekly", priority: 1.0 },
    { url: `${BASE}/about`, lastModified: pageMtime("about"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/tutors`, lastModified: pageMtime("tutors"), changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE}/igakubu-kateikyoushi`, lastModified: pageMtime("igakubu-kateikyoushi"), changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/keio-medical-kateikyoushi`, lastModified: pageMtime("keio-medical-kateikyoushi"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/keio-medical-tutor`, lastModified: pageMtime("keio-medical-tutor"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/recruit`, lastModified: pageMtime("recruit"), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/pricing`, lastModified: pageMtime("pricing"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/private-medical-strategy`, lastModified: pageMtime("private-medical-strategy"), changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/contact`, lastModified: pageMtime("contact"), changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/line`, lastModified: pageMtime("line"), changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/privacy`, lastModified: pageMtime("privacy"), changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE}/terms`, lastModified: pageMtime("terms"), changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE}/tokushoho`, lastModified: pageMtime("tokushoho"), changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE}/cookies`, lastModified: pageMtime("cookies"), changeFrequency: "yearly", priority: 0.3 },
    // 対象者別
    { url: `${BASE}/for/chugaku`, lastModified: forMtime("chugaku"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/for/ko1`, lastModified: forMtime("ko1"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/for/ko2`, lastModified: forMtime("ko2"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/for/ko3`, lastModified: forMtime("ko3"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/for/ronin`, lastModified: forMtime("ronin"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/for/prep-school-plus`, lastModified: forMtime("prep-school-plus"), changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/for/not-group-school`, lastModified: forMtime("not-group-school"), changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/for/saijuken`, lastModified: forMtime("saijuken"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/for/parents`, lastModified: forMtime("parents"), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/for/keio-naibu`, lastModified: forMtime("keio-naibu"), changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/for/keio-naibu-heigan`, lastModified: forMtime("keio-naibu-heigan"), changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/for/keio-fuzoku`, lastModified: forMtime("keio-fuzoku"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/for/seiseki-up`, lastModified: forMtime("seiseki-up"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/for/naibu-seiseki`, lastModified: forMtime("naibu-seiseki"), changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/for/nangandai`, lastModified: forMtime("nangandai"), changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/for/suisen-ao`, lastModified: forMtime("suisen-ao"), changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/for/international`, lastModified: forMtime("international"), changeFrequency: "monthly", priority: 0.9 },
    // サービス別
    { url: `${BASE}/services/online`, lastModified: serviceMtime("online"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/services/visit`, lastModified: serviceMtime("visit"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/services/interview`, lastModified: serviceMtime("interview"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/services/moshi`, lastModified: serviceMtime("moshi"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/services/moshi/tool`, lastModified: gitMtime("src/app/services/moshi/tool/page.tsx", "2026-03-28"), changeFrequency: "monthly", priority: 0.7 },
    // 大学別
    { url: `${BASE}/universities/private`, lastModified: gitMtime("src/app/universities/private/page.tsx", "2026-03-28"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/universities/national`, lastModified: gitMtime("src/app/universities/national/page.tsx", "2026-03-28"), changeFrequency: "monthly", priority: 0.8 },
    ...nationalUniversityArticles.map((entry) => ({
      url: `${BASE}/universities/national/${entry.slug}`,
      lastModified: nationalMtime(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    { url: `${BASE}/universities/keio`, lastModified: universityMtime("keio"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/universities/jikei`, lastModified: universityMtime("jikei"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/universities/juntendo`, lastModified: universityMtime("juntendo"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/universities/nippon-medical`, lastModified: universityMtime("nippon-medical"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/universities/showa`, lastModified: universityMtime("showa"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/universities/tokyo-ika`, lastModified: universityMtime("tokyo-ika"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/universities/nihon`, lastModified: universityMtime("nihon"), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/universities/toho`, lastModified: universityMtime("toho"), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/universities/kyorin`, lastModified: universityMtime("kyorin"), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/universities/teikyo`, lastModified: universityMtime("teikyo"), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/universities/tokai`, lastModified: universityMtime("tokai"), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/universities/kitasato`, lastModified: universityMtime("kitasato"), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/universities/marianna`, lastModified: universityMtime("marianna"), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/universities/joshi-ika`, lastModified: universityMtime("joshi-ika"), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/universities/iuhw`, lastModified: universityMtime("iuhw"), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/universities/dokkyo`, lastModified: universityMtime("dokkyo"), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/universities/saitama-ika`, lastModified: universityMtime("saitama-ika"), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/universities/kansai-ika`, lastModified: universityMtime("kansai-ika"), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/universities/kindai`, lastModified: universityMtime("kindai"), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/universities/osaka-ika`, lastModified: universityMtime("osaka-ika"), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/universities/hyogo`, lastModified: universityMtime("hyogo"), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/universities/fujita`, lastModified: universityMtime("fujita"), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/universities/aichi-ika`, lastModified: universityMtime("aichi-ika"), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/universities/kanazawa-ika`, lastModified: universityMtime("kanazawa-ika"), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/universities/kurume`, lastModified: universityMtime("kurume"), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/universities/fukuoka`, lastModified: universityMtime("fukuoka"), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/universities/kawasaki-ika`, lastModified: universityMtime("kawasaki-ika"), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/universities/iwate`, lastModified: universityMtime("iwate"), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/universities/tohoku-ika`, lastModified: universityMtime("tohoku-ika"), changeFrequency: "monthly", priority: 0.7 },
    // コラム
    { url: `${BASE}/column`, lastModified: pageMtime("column"), changeFrequency: "weekly", priority: 0.9 },
    ...columnArticles.map((entry) => ({
      url: `${BASE}/column/${entry.slug}`,
      lastModified: columnMtime(entry.slug),
      changeFrequency: "monthly" as const,
      priority: entry.featuredOnHome || entry.popular ? 0.8 : 0.7,
    })),
    // お知らせ
    { url: `${BASE}/news`, lastModified: pageMtime("news"), changeFrequency: "weekly", priority: 0.7 },
    ...notices.map((n) => ({
      url: `${BASE}/news/${n.slug}`,
      lastModified: new Date(n.date),
      changeFrequency: "monthly" as const,
      priority: 0.5,
    })),
    // 教科別
    { url: `${BASE}/subjects`, lastModified: pageMtime("subjects"), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/subjects/english`, lastModified: subjectMtime("english"), changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/subjects/math`, lastModified: subjectMtime("math"), changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/subjects/physics`, lastModified: subjectMtime("physics"), changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/subjects/chemistry`, lastModified: subjectMtime("chemistry"), changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/subjects/biology`, lastModified: subjectMtime("biology"), changeFrequency: "monthly", priority: 0.6 },
  ];
}
