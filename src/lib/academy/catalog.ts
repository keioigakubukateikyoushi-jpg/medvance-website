import fs from "node:fs";
import path from "node:path";
import type { AcademyCatalog, AcademySubjectIndex, AcademyUnit, CatalogSubject } from "./types";
import { isFreeUnit } from "./freeUnits";

const CONTENT_ROOT = path.join(process.cwd(), "content", "academy");

function readJson<T>(filePath: string): T {
  return JSON.parse(fs.readFileSync(filePath, "utf8")) as T;
}

export function getCatalog(): AcademyCatalog {
  const catalogPath = path.join(CONTENT_ROOT, "catalog.json");
  return readJson<AcademyCatalog>(catalogPath);
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

export function findUnitLocation(unitId: string): { subjectId: string; unit: AcademyUnit } | null {
  const catalog = getCatalog();
  for (const s of catalog.subjects) {
    try {
      const idx = getSubjectIndex(s.id);
      const unit = idx.units.find((u) => u.id === unitId);
      if (unit) return { subjectId: s.id, unit };
    } catch {
      // skip missing
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
