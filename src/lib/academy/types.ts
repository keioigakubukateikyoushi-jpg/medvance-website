export type AcademyTrackId = "foundation" | "advanced" | "elite";

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
