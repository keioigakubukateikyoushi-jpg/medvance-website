import fs from "node:fs";
import path from "node:path";
import type {
  AcademyCatalog,
  AcademySubjectIndex,
  AcademyUnit,
  CatalogSubject,
  PartCurriculum,
} from "./types";
import { isFreeUnit } from "./freeUnits";

const CONTENT_ROOT = path.join(process.cwd(), "content", "academy");
const PART_CURRICULUM_PATH = path.join(CONTENT_ROOT, "part-curriculum.json");

function readJson<T>(filePath: string): T {
  return JSON.parse(fs.readFileSync(filePath, "utf8")) as T;
}

export function getCatalog(): AcademyCatalog {
  const catalogPath = path.join(CONTENT_ROOT, "catalog.json");
  return readJson<AcademyCatalog>(catalogPath);
}

export function getPartCurriculum(): PartCurriculum | null {
  try {
    if (!fs.existsSync(PART_CURRICULUM_PATH)) return null;
    return readJson<PartCurriculum>(PART_CURRICULUM_PATH);
  } catch {
    return null;
  }
}

export function getPartCurriculumSubject(subjectId: string) {
  return getPartCurriculum()?.subjects[subjectId] || null;
}

export function resolveSubjectDir(subjectId: string): string {
  // subjectId: "math1-exam" | "advanced/math1" | "elite/math"
  return path.join(CONTENT_ROOT, subjectId);
}

export function getSubjectIndex(subjectId: string): AcademySubjectIndex {
  const idxPath = path.join(resolveSubjectDir(subjectId), "index.json");
  const idx = readJson<AcademySubjectIndex>(idxPath);
  idx.units = idx.units.map((u) => ({
    ...u,
    free: isFreeUnit(u.id),
    prereq: u.prereq || [],
  }));
  return idx;
}

function prereqList(value: string | string[] | undefined): string[] {
  if (Array.isArray(value)) return value.filter(Boolean);
  return value ? [value] : [];
}

/** Convert the Part curriculum's canonical source metadata into a unit route. */
function findPlannedPart(subjectId: string, unitId: string): AcademyUnit | null {
  const subject = getPartCurriculumSubject(subjectId);
  if (!subject) return null;
  for (const parent of subject.units) {
    const part = parent.parts.find((candidate) => candidate.id === unitId);
    if (!part) continue;
    const canonical = part.canonical;
    return {
      id: part.id,
      chapter: parent.chapter,
      title: part.title,
      minutes: part.minutes || 7,
      goal: part.goal,
      prereq: prereqList(part.prereq || parent.prereq),
      status: part.status || part.readiness?.status || "source-authoring-required",
      // part-curriculum は file ではなく canonical.{lesson,storyboard,slides,quiz}
      file: part.file || canonical?.lesson || `lessons/${part.id}.md`,
      storyboard: part.storyboard || canonical?.storyboard || `storyboard/${part.id}.md`,
      slides: part.slides || canonical?.slides || `slides/${part.id}.md`,
      quiz: part.quiz || canonical?.quiz || `quiz/${part.id}.json`,
      free: isFreeUnit(parent.id),
    };
  }
  return null;
}

export function findUnitLocation(unitId: string): { subjectId: string; unit: AcademyUnit } | null {
  const catalog = getCatalog();
  for (const s of catalog.subjects) {
    try {
      const idx = getSubjectIndex(s.id);
      const unit = idx.units.find((u) => u.id === unitId);
      if (unit) return { subjectId: s.id, unit };
      for (const parent of idx.units) {
        const part = parent.parts?.find((candidate) => candidate.id === unitId);
        if (part) {
          return {
            subjectId: s.id,
            unit: {
              ...part,
              chapter: parent.chapter,
              prereq: part.prereq || [],
              free: isFreeUnit(parent.id),
            },
          };
        }
      }
    } catch {
      // skip missing
    }
  }
  for (const subjectId of Object.keys(getPartCurriculum()?.subjects || {})) {
    const unit = findPlannedPart(subjectId, unitId);
    if (unit) return { subjectId, unit };
  }
  return null;
}

export function findSubjectUnit(subjectId: string, unitId: string): AcademyUnit | null {
  try {
    const idx = getSubjectIndex(subjectId);
    const unit = idx.units.find((candidate) => candidate.id === unitId);
    if (unit) return unit;
    for (const parent of idx.units) {
      const part = parent.parts?.find((candidate) => candidate.id === unitId);
      if (part) {
        return {
          ...part,
          chapter: parent.chapter,
          prereq: part.prereq || [],
          free: isFreeUnit(parent.id),
        };
      }
    }
  } catch {
    // A subject can be Part-curriculum-only while its legacy index remains
    // intentionally sparse.
  }
  return findPlannedPart(subjectId, unitId);
}

export function findPartContext(subjectId: string, partId: string) {
  try {
    const idx = getSubjectIndex(subjectId);
    for (const parent of idx.units) {
      const parts = parent.parts || [];
      const partIndex = parts.findIndex((part) => part.id === partId);
      if (partIndex >= 0) {
        return {
          parent,
          part: parts[partIndex],
          previous: parts[partIndex - 1] || null,
          next: parts[partIndex + 1] || null,
        };
      }
    }
  } catch {
    // Fall through to the Part curriculum below.
  }
  const planned = getPartCurriculumSubject(subjectId);
  if (planned) {
    for (const parent of planned.units) {
      const partIndex = parent.parts.findIndex((part) => part.id === partId);
      if (partIndex >= 0) {
        return {
          parent,
          part: parent.parts[partIndex],
          previous: parent.parts[partIndex - 1] || null,
          next: parent.parts[partIndex + 1] || null,
        };
      }
    }
  }
  return null;
}

export function readLessonMarkdown(subjectId: string, relFile: string): string {
  const full = path.join(resolveSubjectDir(subjectId), relFile);
  return fs.readFileSync(full, "utf8");
}

export function readQuizJson(subjectId: string, relFile: string): unknown {
  const full = path.join(resolveSubjectDir(subjectId), relFile);
  return readJson(full);
}

export function listAllFreeUnits(): { subjectId: string; unit: AcademyUnit; subject: string }[] {
  const catalog = getCatalog();
  const out: { subjectId: string; unit: AcademyUnit; subject: string }[] = [];
  for (const s of catalog.subjects) {
    try {
      const idx = getSubjectIndex(s.id);
      for (const u of idx.units) {
        if (isFreeUnit(u.id)) out.push({ subjectId: s.id, unit: u, subject: s.subject });
      }
    } catch {
      /* skip */
    }
  }
  return out;
}

export function getSubjectMeta(subjectId: string): CatalogSubject | undefined {
  return getCatalog().subjects.find((s) => s.id === subjectId);
}
