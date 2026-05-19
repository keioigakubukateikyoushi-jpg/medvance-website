import { columnArticles } from "@/lib/columnArticles";
import { nationalUniversityArticles } from "@/app/universities/national/data";
import { notices } from "@/lib/notices";
import { forPageMeta } from "@/lib/forPageMeta";

const PRIVATE_UNIVERSITY_LABELS: Record<string, string> = {
  keio: "慶應義塾大学医学部",
  jikei: "東京慈恵会医科大学",
  juntendo: "順天堂大学医学部",
  "nippon-medical": "日本医科大学",
  showa: "昭和大学医学部",
  "tokyo-ika": "東京医科大学",
  nihon: "日本大学医学部",
  toho: "東邦大学医学部",
  kyorin: "杏林大学医学部",
  teikyo: "帝京大学医学部",
  tokai: "東海大学医学部",
  kitasato: "北里大学医学部",
  marianna: "聖マリアンナ医科大学",
  "joshi-ika": "東京女子医科大学",
  iuhw: "国際医療福祉大学医学部",
  dokkyo: "獨協医科大学",
  "saitama-ika": "埼玉医科大学",
  "kansai-ika": "関西医科大学",
  kindai: "近畿大学医学部",
  "osaka-ika": "大阪医科薬科大学",
  hyogo: "兵庫医科大学",
  fujita: "藤田医科大学",
  "aichi-ika": "愛知医科大学",
  "kanazawa-ika": "金沢医科大学",
  kurume: "久留米大学医学部",
  fukuoka: "福岡大学医学部",
  "kawasaki-ika": "川崎医科大学",
  iwate: "岩手医科大学",
  "tohoku-ika": "東北医科薬科大学",
};

const SUBJECT_LABELS: Record<string, string> = {
  english: "英語",
  math: "数学",
  physics: "物理",
  chemistry: "化学",
  biology: "生物",
};

const FOR_LABELS: Record<string, string> = Object.fromEntries(
  Object.entries(forPageMeta).map(([slug, meta]) => [slug, meta.label])
);

const TOP_LEVEL_LABELS: Record<string, string> = {
  column: "コラム",
  universities: "大学別対策",
  services: "サービス",
  for: "対象者別",
  subjects: "教科別対策",
  about: "運営会社",
  tutors: "家庭教師一覧",
  recruit: "講師募集",
  pricing: "料金",
  contact: "お問い合わせ",
  privacy: "プライバシーポリシー",
  cookies: "Cookieポリシー",
  terms: "利用規約",
  tokushoho: "特定商取引法表記",
  news: "お知らせ",
  line: "LINE相談",
  search: "検索結果",
};

const SERVICE_LABELS: Record<string, string> = {
  online: "オンライン指導",
  visit: "訪問指導",
  interview: "面接対策",
  moshi: "模試分析",
  tool: "模試分析ツール",
};

const UNIVERSITIES_INDEX_LABELS: Record<string, string> = {
  national: "国公立医学部",
  private: "私立医学部",
};

/**
 * パンくずのパスセグメントから表示ラベルへの解決。
 * 第2引数 prevSegments で文脈に応じた解決を行う（例: column の最後は記事タイトル、universities/national の最後は大学名 など）。
 */
export function resolveBreadcrumbLabel(
  segment: string,
  prevSegments: string[]
): string {
  const decoded = decodeURIComponent(segment);

  // 階層別解決
  if (prevSegments[0] === "column" && prevSegments.length === 1) {
    const article = columnArticles.find((a) => a.slug === decoded);
    if (article) return article.title;
  }

  if (prevSegments[0] === "universities") {
    if (prevSegments.length === 1) {
      if (UNIVERSITIES_INDEX_LABELS[decoded]) return UNIVERSITIES_INDEX_LABELS[decoded];
      if (PRIVATE_UNIVERSITY_LABELS[decoded]) return PRIVATE_UNIVERSITY_LABELS[decoded];
    }
    if (prevSegments[1] === "national" && prevSegments.length === 2) {
      const u = nationalUniversityArticles.find((a) => a.slug === decoded);
      if (u) return u.name;
    }
  }

  if (prevSegments[0] === "for" && prevSegments.length === 1) {
    if (FOR_LABELS[decoded]) return FOR_LABELS[decoded];
  }

  if (prevSegments[0] === "services" && prevSegments.length >= 1) {
    if (SERVICE_LABELS[decoded]) return SERVICE_LABELS[decoded];
  }

  if (prevSegments[0] === "subjects" && prevSegments.length === 1) {
    if (SUBJECT_LABELS[decoded]) return SUBJECT_LABELS[decoded];
  }

  if (prevSegments[0] === "news" && prevSegments.length === 1) {
    const n = notices.find((notice) => notice.slug === decoded);
    if (n) return n.title;
  }

  // top level
  if (prevSegments.length === 0) {
    if (TOP_LEVEL_LABELS[decoded]) return TOP_LEVEL_LABELS[decoded];
  }

  // フォールバック: ハイフン区切りのケバブをスペース区切りに
  return decoded.replace(/-/g, " ");
}
