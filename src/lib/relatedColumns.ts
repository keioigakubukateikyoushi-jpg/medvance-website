import { columnArticles, type ColumnArticle } from "./columnArticles";

/**
 * 各ハブ（/for/*, /subjects, /subjects/*）に紐づける関連コラムslug。
 * ハブ→コラム の一方向で定義し、逆引き（コラム→ハブ）は buildReverseIndex で自動生成する。
 */
export const relatedColumnsByHub: Record<string, string[]> = {
  // 対象別
  "for/chugaku": ["roadmap", "juken-timing", "study-method", "difference"],
  "for/ko1": ["roadmap", "juken-timing", "study-method", "difference", "mensetu-timing"],
  "for/ko2": ["roadmap", "juken-timing", "study-method", "kakomon-timing", "difference"],
  "for/ko3": [
    "new-high3-april-plan",
    "april-year-plan",
    "kakomon-timing",
    "natsu-manikiai",
    "moshi-katsuyo",
    "difference",
  ],
  "for/ronin": [
    "ronin-april-plan",
    "ronin-kateikyoushi",
    "natsu-manikiai",
    "moshi-katsuyo",
    "kakomon-timing",
  ],
  "for/saijuken": ["saijuken", "junrejo-goukaku", "dokugaku-genkai", "juku-erabi"],
  "for/parents": [
    "gakuhi",
    "juku-erabi",
    "medical-yobiko-cost",
    "support-juku-choice",
    "difference",
  ],
  "for/keio-naibu": [
    "keio-naibu-shikumi",
    "keio-naibu-seiseki",
    "keio-naibu-kateikyoushi",
    "keio-guide",
  ],
  "for/keio-fuzoku": [
    "keio-fuzoku-kateikyoushi",
    "keio-naibu-shikumi",
    "keio-naibu-seiseki",
    "teiki-test-kateikyoushi",
  ],
  "for/seiseki-up": [
    "seiseki-kateikyoushi",
    "teiki-test-kateikyoushi",
    "kateikyoushi",
    "suisen-ao-taisaku",
  ],
  "for/nangandai": ["nangandai-kateikyoushi", "kateikyoushi", "study-method", "difference"],
  "for/suisen-ao": [
    "suisen-ao-taisaku",
    "mensetu",
    "shoronbun-taisaku",
    "shiboriyusho-writing",
    "mmi-taisaku",
    "mensetu-shoronbun-kateikyoushi",
  ],

  // 科目別
  subjects: [
    "study-method",
    "english-study-method",
    "math-study-method",
    "chemistry-study-method",
    "physics-study-method",
    "biology-study-method",
  ],
  "subjects/english": ["english-study-method", "study-method", "kakomon-timing"],
  "subjects/math": ["math-study-method", "study-method", "kakomon-timing"],
  "subjects/physics": ["physics-study-method", "study-method"],
  "subjects/biology": ["biology-study-method", "study-method"],
  "subjects/chemistry": ["chemistry-study-method", "study-method"],
};

export type HubInfo = {
  hub: string;
  href: string;
  label: string;
};

/**
 * ハブキーから表示用メタ情報を生成。
 */
export const hubMeta: Record<string, { label: string }> = {
  "for/chugaku": { label: "中学生の方へ" },
  "for/ko1": { label: "高校1年生の方へ" },
  "for/ko2": { label: "高校2年生の方へ" },
  "for/ko3": { label: "高校3年生の方へ" },
  "for/ronin": { label: "浪人生の方へ" },
  "for/saijuken": { label: "再受験生の方へ" },
  "for/parents": { label: "保護者の方へ" },
  "for/keio-naibu": { label: "慶應内部進学を目指す方へ" },
  "for/keio-fuzoku": { label: "慶應附属校生の方へ" },
  "for/seiseki-up": { label: "学校の成績を上げたい方へ" },
  "for/nangandai": { label: "難関大受験を目指す方へ" },
  "for/suisen-ao": { label: "推薦・AO入試を目指す方へ" },
  subjects: { label: "各教科の指導方法" },
  "subjects/english": { label: "英語指導" },
  "subjects/math": { label: "数学指導" },
  "subjects/physics": { label: "物理指導" },
  "subjects/biology": { label: "生物指導" },
  "subjects/chemistry": { label: "化学指導" },
};

/**
 * ハブに紐づいた ColumnArticle を順序付きで返す（存在しない slug はスキップ）。
 */
export function getRelatedColumns(hub: string): ColumnArticle[] {
  const slugs = relatedColumnsByHub[hub] ?? [];
  const bySlug = new Map(columnArticles.map((a) => [a.slug, a]));
  return slugs.map((s) => bySlug.get(s)).filter((a): a is ColumnArticle => Boolean(a));
}

/**
 * コラム slug から、そのコラムが紐づくハブ一覧を返す（逆引き）。
 * コラムページに「このコラムが属するハブ」リンクを置くために使う。
 */
export function getHubsForColumn(slug: string): HubInfo[] {
  const hits: HubInfo[] = [];
  for (const [hub, slugs] of Object.entries(relatedColumnsByHub)) {
    if (slugs.includes(slug)) {
      hits.push({
        hub,
        href: `/${hub}`,
        label: hubMeta[hub]?.label ?? hub,
      });
    }
  }
  return hits;
}
