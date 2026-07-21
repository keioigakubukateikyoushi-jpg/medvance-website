import { NextResponse } from "next/server";
import {
  findUnitLocation,
  getSubjectMeta,
  getSubjectIndex,
  readLessonMarkdown,
  readQuizJson,
} from "@/lib/academy/catalog";
import { canViewUnit, isAcademyMember } from "@/lib/academy/access";
import { buildUnitPdf, type QuizForPdf } from "@/lib/academy/pdf";

type Ctx = { params: Promise<{ id: string }> };

export async function GET(req: Request, ctx: Ctx) {
  const { id } = await ctx.params;
  const url = new URL(req.url);
  const subjectQ = url.searchParams.get("subject") || undefined;

  let subjectId: string;
  let unit;
  if (subjectQ) {
    try {
      const idx = getSubjectIndex(subjectQ);
      const u = idx.units.find((x) => x.id === id);
      if (!u) {
        const loc = findUnitLocation(id);
        if (!loc) return NextResponse.json({ error: "unit not found" }, { status: 404 });
        subjectId = loc.subjectId;
        unit = loc.unit;
      } else {
        subjectId = subjectQ;
        unit = u;
      }
    } catch {
      const loc = findUnitLocation(id);
      if (!loc) return NextResponse.json({ error: "unit not found" }, { status: 404 });
      subjectId = loc.subjectId;
      unit = loc.unit;
    }
  } else {
    const loc = findUnitLocation(id);
    if (!loc) return NextResponse.json({ error: "unit not found" }, { status: 404 });
    subjectId = loc.subjectId;
    unit = loc.unit;
  }

  const member = await isAcademyMember();
  if (!canViewUnit(id, member)) {
    return NextResponse.json(
      { error: "この教材のPDFはMedvance塾生見放題・質問し放題です。/academy/access でアクセスコードを入力してください。" },
      { status: 403 },
    );
  }

  let lessonMd = "";
  try {
    lessonMd = readLessonMarkdown(subjectId, unit.file);
  } catch {
    return NextResponse.json({ error: "lesson body missing" }, { status: 500 });
  }

  let quiz: QuizForPdf | null = null;
  if (unit.quiz) {
    try {
      quiz = readQuizJson(subjectId, unit.quiz) as QuizForPdf;
    } catch {
      quiz = null;
    }
  }

  const meta = getSubjectMeta(subjectId);
  const idx = getSubjectIndex(subjectId);
  const buf = await buildUnitPdf({
    unit,
    subjectLabel: meta?.subject || idx.subject || subjectId,
    trackLabel: idx.trackLabel || meta?.trackLabel || "Medvance",
    lessonMd,
    quiz,
  });

  const filename = `${id}_${unit.title.replace(/[\\/:*?"<>|]/g, "_").slice(0, 40)}.pdf`;
  return new NextResponse(new Uint8Array(buf), {
    status: 200,
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": `attachment; filename*=UTF-8''${encodeURIComponent(filename)}`,
      "Cache-Control": "private, max-age=300",
    },
  });
}
