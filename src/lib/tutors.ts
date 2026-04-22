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

export const tutors: Tutor[] = [];

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
