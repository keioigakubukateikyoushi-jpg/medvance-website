import Link from "next/link";
import { notFound } from "next/navigation";
import { getCatalog, getSubjectIndex, getSubjectMeta } from "@/lib/academy/catalog";
import { isAcademyMember } from "@/lib/academy/access";
import { resolveUnitMedia } from "@/lib/academy/media";
import { buildBreadcrumbSchema, buildCollectionPageSchema } from "@/lib/seo";
import type { Metadata } from "next";

type Props = {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ chapter?: string }>;
};

function unitMediaFlags(unitId: string) {
  const media = resolveUnitMedia(unitId);
  return {
    pdf: Boolean(media.lessonPdf),
    slides: Boolean(media.slidesPdf),
    audio: Boolean(media.audio),
    video: Boolean(media.lectureVideo || media.video),
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const subjectId = decodeURIComponent(id);
  try {
    const idx = getSubjectIndex(subjectId);
    return {
      title: `${idx.subject}｜動画・PDF教材`,
      description: `${idx.subject}の単元一覧。教材PDF・動画・スライドで学習。`,
      alternates: { canonical: `/academy/subject/${encodeURIComponent(subjectId)}` },
    };
  } catch {
    return { title: "教科｜動画・PDF教材" };
  }
}

export default async function SubjectHubPage({ params, searchParams }: Props) {
  const { id } = await params;
  const subjectId = decodeURIComponent(id);
  const sp = await searchParams;
  const chapter = sp.chapter || "ALL";
  const member = await isAcademyMember();
  const catalog = getCatalog();
  const meta = getSubjectMeta(subjectId);

  let index;
  try {
    index = getSubjectIndex(subjectId);
  } catch {
    notFound();
  }

  const track = catalog.tracks?.find((t) => t.subjects.some((s) => s.id === subjectId));
  const units = (index.units || []).filter((u) => chapter === "ALL" || u.chapter === chapter);
  const freeCount = units.filter((u) => u.free).length;

  // group by chapter for display when ALL
  const chapters = index.chapters?.length ? index.chapters : [...new Set(units.map((u) => u.chapter))];

  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "ホーム", url: "/" },
    { name: "動画・PDF教材", url: "/academy" },
    { name: index.subject, url: `/academy/subject/${subjectId}` },
  ]);
  const collectionSchema = buildCollectionPageSchema(
    `${index.subject}｜動画・PDF教材`,
    `${index.subject}を分野から選び、単元ごとに学べます。`,
    `/academy/subject/${subjectId}`,
  );

  return (
    <div className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }} />
      <div style={{ backgroundColor: "#0c1a33" }} className="py-12 px-4">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: "#c9922a" }}>
            {track?.label || meta?.trackLabel || "教材"}
          </p>
          <h1
            className="text-2xl md:text-3xl font-bold text-white mb-2"
            style={{ fontFamily: "var(--font-noto-serif)" }}
          >
            {index.subject}
          </h1>
          <p className="text-sm" style={{ color: "rgba(255,255,255,0.65)" }}>
            {index.unit_count} 単元
            {freeCount > 0 ? ` · 無料お試し ${freeCount}` : ""}
            {member
              ? " · 塾生：全単元見放題・質問し放題"
              : " · 無料以外は Medvance塾生見放題・質問し放題"}
          </p>
          <div className="mt-5 flex flex-wrap gap-3 text-sm">
            <Link href="/academy" style={{ color: "#e8c56a" }}>
              ← 講座一覧
            </Link>
            {track && (
              <Link href={`/academy?track=${track.id}`} style={{ color: "rgba(255,255,255,0.55)" }}>
                {track.label}
              </Link>
            )}
          </div>
        </div>
      </div>

      <div className="py-8 px-4" style={{ backgroundColor: "#f7f5f0" }}>
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-semibold mb-3" style={{ color: "#6b7280" }}>
            章を選ぶ
          </p>
          <div className="flex flex-wrap gap-2">
            <Link
              href={`/academy/subject/${encodeURIComponent(subjectId)}`}
              className="px-3 py-1.5 rounded-full text-xs font-semibold"
              style={{
                backgroundColor: chapter === "ALL" ? "#0c1a33" : "#fff",
                color: chapter === "ALL" ? "#fff" : "#0c1a33",
                border: "1px solid #e5e1d8",
              }}
            >
              すべて
            </Link>
            {chapters.map((ch) => (
              <Link
                key={ch}
                href={`/academy/subject/${encodeURIComponent(subjectId)}?chapter=${encodeURIComponent(ch)}`}
                className="px-3 py-1.5 rounded-full text-xs font-semibold"
                style={{
                  backgroundColor: chapter === ch ? "#0c1a33" : "#fff",
                  color: chapter === ch ? "#fff" : "#0c1a33",
                  border: "1px solid #e5e1d8",
                }}
              >
                {ch}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="py-10 px-4">
        <div className="max-w-3xl mx-auto space-y-8">
          {chapter === "ALL"
            ? chapters.map((ch) => {
                const chUnits = units.filter((u) => u.chapter === ch);
                if (!chUnits.length) return null;
                return (
                  <section key={ch}>
                    <h2 className="text-sm font-bold mb-3 pb-2" style={{ color: "#0c1a33", borderBottom: "1px solid #e5e1d8" }}>
                      {ch}
                      <span className="ml-2 text-xs font-normal text-[#6b7280]">{chUnits.length}単元</span>
                    </h2>
                    <ul className="space-y-2">
                      {chUnits.map((u) => (
                        <UnitRow key={u.id} unit={u} subjectId={subjectId} member={member} flags={unitMediaFlags(u.id)} />
                      ))}
                    </ul>
                  </section>
                );
              })
            : (
              <ul className="space-y-2">
                {units.map((u) => (
                  <UnitRow key={u.id} unit={u} subjectId={subjectId} member={member} flags={unitMediaFlags(u.id)} />
                ))}
              </ul>
            )}

          {!units.length && (
            <p className="text-sm text-[#6b7280]">この章の単元はありません。</p>
          )}
        </div>
      </div>
    </div>
  );
}

function UnitRow({
  unit,
  subjectId,
  member,
  flags,
}: {
  unit: {
    id: string;
    title: string;
    goal: string;
    minutes: number;
    free?: boolean;
    prereq?: string[];
    status?: string;
  };
  subjectId: string;
  member: boolean;
  flags: { pdf: boolean; slides: boolean; audio: boolean; video: boolean };
}) {
  const locked = !member && !unit.free;
  const draft = unit.status !== "full";
  return (
    <li
      className="p-4 rounded-xl bg-white flex flex-col sm:flex-row sm:items-center gap-3 justify-between"
      style={{ border: "1px solid #e5e1d8", opacity: locked ? 0.92 : 1 }}
    >
      <div className="min-w-0">
        <div className="flex flex-wrap gap-1.5 mb-1.5">
          {draft && (
            <span
              className="text-[10px] font-bold px-2 py-0.5 rounded-full"
              style={{ background: "#f3f4f6", color: "#6b7280" }}
            >
              準備中
            </span>
          )}
          {unit.free ? (
            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full" style={{ background: "#eef8f0", color: "#17633a" }}>
              無料
            </span>
          ) : (
            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full" style={{ background: "#f3f0e8", color: "#8a6a20" }}>
              Medvance塾生見放題・質問し放題
            </span>
          )}
          {flags.video && (
            <span className="text-[10px] px-2 py-0.5 rounded-full" style={{ background: "#f5f3ff", color: "#6d28d9" }}>
              動画
            </span>
          )}
          {flags.audio && (
            <span className="text-[10px] px-2 py-0.5 rounded-full" style={{ background: "#eff6ff", color: "#2563eb" }}>
              音声
            </span>
          )}
          {flags.pdf && (
            <span className="text-[10px] px-2 py-0.5 rounded-full" style={{ background: "#fff7ed", color: "#c9922a" }}>
              PDF
            </span>
          )}
          {flags.slides && (
            <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#f3f4f6] text-[#6b7280]">
              スライド
            </span>
          )}
          <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#f3f4f6] text-[#6b7280]">{unit.minutes}分</span>
        </div>
        <p className="font-semibold text-sm" style={{ color: "#0c1a33" }}>
          {unit.id} · {unit.title}
        </p>
        <p className="text-xs mt-0.5 leading-relaxed" style={{ color: "#6b7280" }}>
          {unit.goal}
        </p>
      </div>
      <div className="shrink-0">
        {locked ? (
          <Link
            href={`/academy/access?next=${encodeURIComponent(`/academy/unit/${unit.id}?subject=${subjectId}`)}`}
            className="inline-block px-4 py-2 rounded-lg text-xs font-semibold text-white"
            style={{ backgroundColor: "#0c1a33" }}
          >
            塾生ログイン
          </Link>
        ) : (
          <Link
            href={`/academy/unit/${unit.id}?subject=${encodeURIComponent(subjectId)}`}
            className="inline-block px-4 py-2 rounded-lg text-xs font-semibold text-white"
            style={{ backgroundColor: "#c9922a" }}
          >
            開く
          </Link>
        )}
      </div>
    </li>
  );
}
