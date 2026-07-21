import { redirect } from "next/navigation";
import { getCatalog } from "@/lib/academy/catalog";
import type { AcademyTrackId } from "@/lib/academy/types";

/**
 * 旧URL互換: /academy/library?track=&subject=
 * → 教科ハブ /academy/subject/[id] へ転送
 */
type Props = { searchParams: Promise<{ track?: string; subject?: string; chapter?: string }> };

export default async function AcademyLibraryRedirect({ searchParams }: Props) {
  const sp = await searchParams;
  const catalog = getCatalog();
  const trackId = (sp.track as AcademyTrackId) || "foundation";
  const track = catalog.tracks?.find((t) => t.id === trackId) || catalog.tracks?.[0];
  const subjectId = sp.subject || track?.subjects?.[0]?.id || "math1-exam";
  const q = sp.chapter && sp.chapter !== "ALL" ? `?chapter=${encodeURIComponent(sp.chapter)}` : "";
  redirect(`/academy/subject/${encodeURIComponent(subjectId)}${q}`);
}
