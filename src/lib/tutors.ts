import { siteUrl } from "./seo";

export type Tutor = {
  slug: string;
  name: string;
  role: string;
  university: string;
  faculty: string;
  grade: string;
  background: string;
  specialties: string[];
  message: string;
  photoUrl?: string;
  status?: "draft" | "approved" | "hidden";
  areas?: string[];
  subjects?: string[];
  formats?: ("online" | "visit")[];
  targetStudents?: string[];
  regularRateYen?: number;
  trialRateYen?: number;
  responseNote?: string;
  lessonCount?: number;
  verifiedAt?: string;
  joinedAt?: string;
  updatedAt?: string;
  lastActiveAt?: string;
  featuredScore?: number;
};

export const tutors: Tutor[] = [
  {
    slug: "national-medical-director",
    name: "国立医学部統括長",
    role: "国公立大学医学部・難関大受験指導 統括責任者",
    university: "東京医科歯科大学",
    faculty: "医学部",
    grade: "出身",
    background: "国公立医学部に現役合格後、長年にわたり難関大・医学部受験生の個別指導および学習戦略ロードマップ設計を指揮。各大学の配点比率・記述採点基準に同調したピンポイント対策と、15分単位の復習サイクル指導に定評があります。",
    specialties: ["国公立二次対策", "過去問分析", "学習進捗管理"],
    message: "国公立合格に必要なのは『完璧な自己分析』と『得点配分に特化した記述力』です。最短距離の学習戦略で伴走します。",
    status: "approved",
    areas: ["オンライン", "全国"],
    subjects: ["数学", "英語", "物理", "化学", "生物"],
    formats: ["online"],
    regularRateYen: 7500,
    trialRateYen: 5000,
    lessonCount: 42,
    verifiedAt: "2026-04-01",
    joinedAt: "2026-03-01",
    updatedAt: "2026-05-30"
  },
  {
    slug: "keio-internal-director",
    name: "慶應内部進学統括長",
    role: "慶應義塾大学附属校・内部進学・医学部推薦 統括責任者",
    university: "慶應義塾大学",
    faculty: "医学部",
    grade: "出身",
    background: "慶應義塾大学医学部出身。塾高・女子高・志木・SFCなどの慶應附属校の評定（GPA）管理、学校別テスト傾向、そして医学部内部推薦の選考基準に精通。進級・評定維持から医学部推薦獲得までを成功に導いてきました。",
    specialties: ["慶應内部進学対策", "評定管理", "学校別定期試験対策"],
    message: "附属校独自のカリキュラムと採点傾向を熟知しているからこそ、無駄のない評定アップが可能です。医学部推薦まで徹底サポートします。",
    status: "approved",
    areas: ["オンライン", "東京都", "全国"],
    subjects: ["数学", "英語", "物理", "化学", "学校成績"],
    formats: ["online", "visit"],
    regularRateYen: 7500,
    trialRateYen: 5000,
    lessonCount: 50,
    verifiedAt: "2026-04-01",
    joinedAt: "2026-03-01",
    updatedAt: "2026-05-30"
  }
];

export const tutorAreas = [
  "オンライン",
  "東京都",
  "神奈川県",
  "千葉県",
  "埼玉県",
  "全国",
];

export const tutorSubjects = [
  "英語",
  "数学",
  "物理",
  "化学",
  "生物",
  "面接",
  "小論文",
  "学校成績",
  "推薦・AO",
];

export const tutorFormats = [
  { value: "online", label: "オンライン" },
  { value: "visit", label: "対面" },
] as const;

export const tutorSortOptions = [
  { value: "recommended", label: "おすすめ順" },
  { value: "updated", label: "情報更新順" },
  { value: "newest", label: "新着順" },
  { value: "price-low", label: "料金が安い順" },
  { value: "price-high", label: "料金が高い順" },
] as const;

export type TutorSort = (typeof tutorSortOptions)[number]["value"];

export type TutorDirectoryFilters = {
  q?: string;
  area?: string;
  subject?: string;
  format?: string;
  sort?: string;
};

export function getApprovedTutors() {
  return tutors.filter((t) => t.status === "approved");
}

export function normalizeTutorSort(value?: string): TutorSort {
  return tutorSortOptions.some((option) => option.value === value)
    ? (value as TutorSort)
    : "recommended";
}

function dateValue(value?: string) {
  return value ? new Date(value).getTime() || 0 : 0;
}

function hasValue(value: unknown) {
  return Array.isArray(value) ? value.length > 0 : Boolean(value);
}

export function getTutorRankScore(tutor: Tutor) {
  const profileFields = [
    tutor.name,
    tutor.university,
    tutor.faculty,
    tutor.grade,
    tutor.background,
    tutor.message,
    tutor.specialties,
    tutor.areas,
    tutor.subjects,
    tutor.formats,
    tutor.regularRateYen,
    tutor.responseNote,
  ];

  const completeness = profileFields.filter(hasValue).length * 5;
  const verification = tutor.verifiedAt ? 30 : 0;
  const teachingRecord = Math.min(tutor.lessonCount ?? 0, 30);
  const recentUpdate = Math.min(
    Math.max((dateValue(tutor.updatedAt) - dateValue(tutor.joinedAt)) / 86_400_000, 0),
    20,
  );

  return completeness + verification + teachingRecord + recentUpdate + (tutor.featuredScore ?? 0);
}

function matchesQuery(tutor: Tutor, q: string) {
  if (!q) return true;
  const haystack = [
    tutor.name,
    tutor.role,
    tutor.university,
    tutor.faculty,
    tutor.grade,
    tutor.background,
    tutor.message,
    ...(tutor.specialties ?? []),
    ...(tutor.areas ?? []),
    ...(tutor.subjects ?? []),
    ...(tutor.targetStudents ?? []),
  ]
    .join(" ")
    .toLowerCase();

  return q
    .toLowerCase()
    .split(/[\s\u3000]+/)
    .filter(Boolean)
    .every((term) => haystack.includes(term));
}

export function getTutorDirectory(filters: TutorDirectoryFilters = {}) {
  const q = (filters.q ?? "").trim();
  const area = (filters.area ?? "").trim();
  const subject = (filters.subject ?? "").trim();
  const format = (filters.format ?? "").trim();
  const sort = normalizeTutorSort(filters.sort);

  const filtered = getApprovedTutors().filter((tutor) => {
    const areaMatch = !area || tutor.areas?.includes(area);
    const subjectMatch = !subject || tutor.subjects?.includes(subject);
    const formatMatch = !format || tutor.formats?.includes(format as "online" | "visit");
    return areaMatch && subjectMatch && formatMatch && matchesQuery(tutor, q);
  });

  return filtered.sort((a, b) => {
    if (sort === "updated") return dateValue(b.updatedAt) - dateValue(a.updatedAt);
    if (sort === "newest") return dateValue(b.joinedAt) - dateValue(a.joinedAt);
    if (sort === "price-low") return (a.regularRateYen ?? Infinity) - (b.regularRateYen ?? Infinity);
    if (sort === "price-high") return (b.regularRateYen ?? -Infinity) - (a.regularRateYen ?? -Infinity);

    return getTutorRankScore(b) - getTutorRankScore(a);
  });
}

export function buildPersonSchemas(tutorList: Tutor[] = getApprovedTutors(), basePath = "/about") {
  return tutorList.map((t) => ({
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${siteUrl}${basePath}#tutor-${t.slug}`,
    name: t.name,
    jobTitle: t.role,
    description: t.background,
    knowsAbout: t.specialties,
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: t.university,
    },
    worksFor: {
      "@type": "EducationalOrganization",
      "@id": `${siteUrl}/#organization`,
    },
    ...(t.photoUrl ? { image: `${siteUrl}${t.photoUrl}` } : {}),
  }));
}

export function buildTutorDirectorySchemas(tutorList: Tutor[]) {
  return [
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: "Medvance 家庭教師一覧",
      description: "Medvanceに掲載されている医学部受験向け家庭教師の一覧です。",
      url: `${siteUrl}/tutors`,
      inLanguage: "ja-JP",
      isPartOf: siteUrl,
    },
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: "Medvance 家庭教師一覧",
      url: `${siteUrl}/tutors`,
      numberOfItems: tutorList.length,
      itemListElement: tutorList.map((tutor, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: `${siteUrl}/tutors#tutor-${tutor.slug}`,
        name: tutor.name,
      })),
    },
    ...buildPersonSchemas(tutorList, "/tutors"),
  ];
}
