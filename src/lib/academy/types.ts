export type AcademyTrackId = "foundation" | "advanced" | "elite";

export type AcademyPart = {
  id: string;
  part: number;
  title: string;
  minutes: number;
  goal: string;
  prereq?: string[];
  status: string;
  file: string;
  storyboard?: string;
  slides?: string;
  quiz?: string;
  quality?: string;
};

export type PlannedAcademyPart = {
  id: string;
  part: number;
  title: string;
  minutes?: number;
  goal: string;
  prereq?: string | string[];
  scope_in?: string[];
  scope_out?: string[];
  readiness?: {
    status?: string;
    missing?: string[];
    failures?: string[];
  };
  status?: string;
  file?: string;
  storyboard?: string;
  slides?: string;
  quiz?: string;
  /** part-curriculum.json の正本パス（file 未設定時に使う） */
  canonical?: {
    lesson?: string;
    storyboard?: string;
    slides?: string;
    quiz?: string;
  };
};

export type PlannedAcademyUnit = {
  id: string;
  chapter: string;
  title: string;
  prereq?: string | string[];
  assessment?: string;
  parts: PlannedAcademyPart[];
};

export type PartCurriculum = {
  version: number;
  generatedAt: string;
  summary: Record<string, { units: number; parts: number }>;
  totals: {
    subjects: number;
    units: number;
    parts: number;
    generationReady: number;
  };
  subjects: Record<
    string,
    {
      blueprint: string;
      unitCount: number;
      partCount: number;
      units: PlannedAcademyUnit[];
    }
  >;
};

export type AcademyUnit = {
  id: string;
  chapter: string;
  title: string;
  minutes: number;
  goal: string;
  prereq: string[];
  status: string;
  file: string;
  storyboard?: string;
  slides?: string;
  quiz?: string;
  free?: boolean;
  /** 1単元を複数の10〜15分教材へ分ける。存在する場合、メディアと教材の完成判定はPart単位。 */
  parts?: AcademyPart[];
};

export type AcademySubjectIndex = {
  subject: string;
  track?: string;
  trackLabel?: string;
  brand?: string;
  unit_count: number;
  full_count: number;
  outline_count?: number;
  chapters: string[];
  units: AcademyUnit[];
  design?: string;
};

export type CatalogSubject = {
  id: string;
  path: string;
  subject: string;
  unit_count: number;
  full_count: number;
  outline_count?: number;
  trackLabel?: string;
};

export type CatalogTrack = {
  id: AcademyTrackId;
  label: string;
  description?: string;
  subjects: CatalogSubject[];
};

export type AcademyCatalog = {
  brand: string;
  system?: string;
  totals?: Record<string, number>;
  tracks: CatalogTrack[];
  subjects: CatalogSubject[];
};
