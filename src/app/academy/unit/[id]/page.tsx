import Link from "next/link";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import {
  findUnitLocation,
  findSubjectUnit,
  findPartContext,
  getSubjectIndex,
  readLessonMarkdown,
  readQuizJson,
} from "@/lib/academy/catalog";
import { canViewUnit, isAcademyMember } from "@/lib/academy/access";
import { academyMarkdownToHtml } from "@/lib/academy/markdown";
import { isFreeUnit } from "@/lib/academy/freeUnits";
import {
  normalizeQuiz,
  readNlmQuizJson,
  resolveUnitMedia,
  type NormalizedQuiz,
  type NormalizedQuizQuestion,
} from "@/lib/academy/media";
import KatexEnhance from "@/components/academy/KatexEnhance";
import ScrollToSection from "@/components/academy/ScrollToSection";
import UnitVideoPlayer from "@/components/academy/UnitVideoPlayer";
import { isYoutubeMediaUrl } from "@/lib/academy/media";
import { buildBreadcrumbSchema, buildVideoObjectSchema } from "@/lib/seo";
import type { Metadata } from "next";

type Props = {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ subject?: string; tab?: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const loc = findUnitLocation(id);
  const title = loc ? loc.unit.title : "教材";
  return {
    title,
    description: loc?.unit.goal || "Medvanceの体系教材",
    robots: isFreeUnit(id) ? { index: true, follow: true } : { index: false, follow: true },
  };
}

function QuizList({ quiz }: { quiz: NormalizedQuiz }) {
  return (
    <ol className="space-y-5 list-decimal pl-5">
      {quiz.questions.map((q: NormalizedQuizQuestion, i: number) => (
        <li key={q.id || i} className="text-sm" style={{ color: "#3d3d3d" }}>
          <p className="font-medium mb-1.5 leading-relaxed">{q.prompt}</p>
          {q.hint && (
            <p className="text-xs mb-2" style={{ color: "#9ca3af" }}>
              ヒント: {q.hint}
            </p>
          )}
          {q.choices && q.choices.length > 0 && (
            <ul className="list-none pl-0 space-y-1 mb-2">
              {q.choices.map((c, j) => (
                <li
                  key={`${q.id}-${j}`}
                  className="px-3 py-2 rounded-lg text-[#4b5563]"
                  style={{ background: "#f7f5f0", border: "1px solid #e5e1d8" }}
                >
                  <span className="font-semibold text-[#0c1a33] mr-2">
                    {String.fromCharCode(65 + j)}.
                  </span>
                  {c.text}
                </li>
              ))}
            </ul>
          )}
          {(q.answer || q.explain) && (
            <details className="mt-1">
              <summary className="text-xs font-semibold cursor-pointer" style={{ color: "#c9922a" }}>
                解答を見る
              </summary>
              <p className="text-xs mt-1.5 leading-relaxed" style={{ color: "#17633a" }}>
                {q.answer}
                {q.explain ? ` — ${q.explain}` : ""}
              </p>
            </details>
          )}
        </li>
      ))}
    </ol>
  );
}

/** 本文Markdownから「この回のポイント」箇条書きを抽出 */
function extractLessonPoints(md: string): string[] {
  if (!md) return [];
  const lines = md.split(/\r?\n/);
  const points: string[] = [];
  let inPoints = false;
  for (const line of lines) {
    const heading = line.match(/^#{2,3}\s*(.+)$/);
    if (heading) {
      const title = heading[1].trim();
      if (/この回のポイント|ポイント|到達|今日のゴール/.test(title)) {
        inPoints = true;
        continue;
      }
      if (inPoints && points.length > 0) break;
      if (inPoints && !/ポイント|ゴール|到達/.test(title)) break;
      continue;
    }
    if (!inPoints) continue;
    const bullet = line.match(/^\s*[-*・]\s+(.+)$/);
    if (bullet) {
      const text = bullet[1]
        .replace(/\*\*(.+?)\*\*/g, "$1")
        .replace(/`([^`]+)`/g, "$1")
        .trim();
      if (text) points.push(text);
      if (points.length >= 6) break;
    } else if (line.trim() === "" && points.length > 0) {
      // keep scanning through blank lines inside the section
      continue;
    } else if (line.trim() && points.length > 0 && !line.startsWith(" ")) {
      // non-bullet content after points → end
      if (!/^[-*・]/.test(line.trim())) break;
    }
  }
  return points;
}

type JumpItem = {
  id: string;
  label: string;
  available: boolean;
  tone: "primary" | "ready" | "muted";
};

function SectionCard({
  id,
  eyebrow,
  title,
  children,
  action,
}: {
  id: string;
  eyebrow: string;
  title: string;
  children: ReactNode;
  action?: ReactNode;
}) {
  return (
    <section
      id={id}
      className="scroll-mt-24 p-5 md:p-6 rounded-2xl bg-white space-y-4"
      style={{ border: "1px solid #e5e1d8" }}
    >
      <div className="flex flex-wrap items-start justify-between gap-2">
        <div>
          <p className="text-[10px] font-bold tracking-wider mb-1" style={{ color: "#c9922a" }}>
            {eyebrow}
          </p>
          <h2 className="text-base font-bold" style={{ color: "#0c1a33" }}>
            {title}
          </h2>
        </div>
        {action}
      </div>
      {children}
    </section>
  );
}

function EmptySlot({ label, hint }: { label: string; hint: string }) {
  return (
    <div className="p-4 rounded-xl" style={{ border: "1px dashed #e5e1d8", background: "#fafafa" }}>
      <p className="text-xs font-semibold mb-0.5" style={{ color: "#6b7280" }}>
        {label}
      </p>
      <p className="text-sm" style={{ color: "#9ca3af" }}>
        {hint}
      </p>
    </div>
  );
}

export default async function AcademyUnitPage({ params, searchParams }: Props) {
  const { id } = await params;
  const sp = await searchParams;
  // 旧タブURL互換: ?tab=quiz → #quiz などへ誘導するためのヒント
  const legacyTab = sp.tab;
  const loc = sp.subject
    ? (() => {
        const unit = findSubjectUnit(sp.subject!, id);
        return unit ? { subjectId: sp.subject!, unit } : findUnitLocation(id);
      })()
    : findUnitLocation(id);

  if (!loc) notFound();

  const { subjectId, unit } = loc;
  const partContext = findPartContext(subjectId, id);
  const member = await isAcademyMember();
  const allowed = canViewUnit(id, member);
  const free = isFreeUnit(id);
  let subjectLabel = subjectId;
  try {
    subjectLabel = getSubjectIndex(subjectId).subject;
  } catch {
    /* keep */
  }

  let html = "";
  let storyHtml = "";
  let rawLessonMd = "";
  let curriculumQuiz: NormalizedQuiz | null = null;
  let extraQuiz: NormalizedQuiz | null = null;
  const media = resolveUnitMedia(id);

  if (allowed) {
    try {
      rawLessonMd = readLessonMarkdown(subjectId, unit.file);
      html = academyMarkdownToHtml(rawLessonMd);
    } catch {
      html = "<p>教材本文を読み込めませんでした。</p>";
    }
    if (unit.storyboard) {
      try {
        const sb = readLessonMarkdown(subjectId, unit.storyboard);
        storyHtml = academyMarkdownToHtml(sb);
      } catch {
        storyHtml = "";
      }
    }
    if (unit.quiz) {
      try {
        curriculumQuiz = normalizeQuiz(readQuizJson(subjectId, unit.quiz), "curriculum");
      } catch {
        curriculumQuiz = null;
      }
    }
    // 正本クイズがある場合は、未校閲のNLM生成クイズを重ねて表示しない。
    if (!curriculumQuiz && media.quizJsonPath) {
      try {
        extraQuiz = normalizeQuiz(readNlmQuizJson(media.quizJsonPath), "extra");
      } catch {
        extraQuiz = null;
      }
    }
  }

  const pdfHref = media.lessonPdf
    ? media.lessonPdf
    : `/api/academy/pdf/${encodeURIComponent(id)}?subject=${encodeURIComponent(subjectId)}`;

  const showShortVideo = Boolean(media.video && media.video !== media.lectureVideo);
  const hasVideo = Boolean(media.lectureVideo || media.video);
  const hasAudio = Boolean(media.audio);
  const hasSlides = Boolean(media.slidesPdf);
  const hasQuiz = Boolean(curriculumQuiz || extraQuiz);
  const lessonPoints = extractLessonPoints(rawLessonMd);
  const downloadName = (suffix: string) => `${id}_${suffix}`;

  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "ホーム", url: "/" },
    { name: "動画・PDF教材", url: "/academy" },
    { name: subjectLabel, url: `/academy/subject/${subjectId}` },
    { name: unit.title, url: `/academy/unit/${id}` },
  ]);
  const videoSrc = media.lectureVideo || media.video;
  const videoSchema = hasVideo && videoSrc
    ? buildVideoObjectSchema({
        name: `${unit.title}｜${subjectLabel}`,
        description: unit.goal,
        path: `/academy/unit/${id}`,
        contentUrl: videoSrc,
        isYoutube: isYoutubeMediaUrl(videoSrc),
      })
    : null;

  const jumps: JumpItem[] = [
    { id: "video", label: "動画", available: hasVideo, tone: hasVideo ? "ready" : "muted" },
    { id: "slides", label: "スライドPDF", available: hasSlides, tone: hasSlides ? "ready" : "muted" },
    { id: "lesson-pdf", label: "教材PDF", available: true, tone: "ready" },
    { id: "audio", label: "音声", available: hasAudio, tone: hasAudio ? "ready" : "muted" },
    { id: "points", label: "ポイント", available: true, tone: "primary" },
    { id: "quiz", label: "クイズ", available: hasQuiz, tone: hasQuiz ? "ready" : "muted" },
    { id: "lesson", label: "授業本文", available: Boolean(html || media.lessonHtml), tone: "primary" },
  ];

  // 旧タブリンク互換のスクロール先
  const focusId =
    legacyTab === "quiz"
      ? "quiz"
      : legacyTab === "story"
        ? "story"
        : legacyTab === "media"
          ? "video"
          : legacyTab === "lesson"
            ? "lesson"
            : null;

  return (
    <div className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {videoSchema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(videoSchema) }} />
      )}
      <ScrollToSection sectionId={focusId} />

      {/* ヘッダー */}
      <div style={{ backgroundColor: "#0c1a33" }} className="py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs mb-2" style={{ color: "rgba(255,255,255,0.45)" }}>
            {subjectLabel}
            {partContext ? ` · ${partContext.parent.title} · Part ${partContext.part.part}` : ""}
          </p>
          <div className="flex flex-wrap gap-2 mb-3">
            {free ? (
              <span
                className="text-[10px] font-bold px-2 py-0.5 rounded-full"
                style={{ background: "#14352a", color: "#4ade80" }}
              >
                無料公開
              </span>
            ) : (
              <span
                className="text-[10px] font-bold px-2 py-0.5 rounded-full"
                style={{ background: "#3a2a14", color: "#e8c56a" }}
              >
                Medvance塾生見放題・質問し放題
              </span>
            )}
            {media.hasExtendedMedia && (
              <span
                className="text-[10px] font-bold px-2 py-0.5 rounded-full"
                style={{ background: "#1e3a5f", color: "#93c5fd" }}
              >
                動画・PDF・音声あり
              </span>
            )}
            <span className="text-[10px] px-2 py-0.5 rounded-full text-white/70 border border-white/20">
              {unit.minutes}分
            </span>
            <span className="text-[10px] px-2 py-0.5 rounded-full text-white/70 border border-white/20">
              {unit.chapter}
            </span>
          </div>
          <h1
            className="text-xl md:text-2xl font-bold text-white mb-2"
            style={{ fontFamily: "var(--font-noto-serif)" }}
          >
            {unit.id} · {unit.title}
          </h1>
          <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.75)" }}>
            {unit.goal}
          </p>
          {unit.prereq?.length > 0 && (
            <p className="text-xs mt-3" style={{ color: "#e8c56a" }}>
              前提:{" "}
              {unit.prereq.map((p, i) => (
                <span key={p}>
                  {i > 0 && ", "}
                  <Link href={`/academy/unit/${p}`} className="underline underline-offset-2">
                    {p}
                  </Link>
                </span>
              ))}
            </p>
          )}
        </div>
      </div>

      <div className="py-8 px-4" style={{ backgroundColor: "#f7f5f0" }}>
        <div className="max-w-3xl mx-auto space-y-6">
          {!allowed ? (
            <div className="p-8 rounded-2xl bg-white text-center" style={{ border: "1px solid #e5e1d8" }}>
              <p className="font-bold text-lg mb-2" style={{ color: "#0c1a33" }}>
                Medvance塾生見放題・質問し放題
              </p>
              <p className="text-sm mb-6 leading-relaxed" style={{ color: "#6b7280" }}>
                この教材は塾生向けです。動画・PDF・スライドを見放題、学習中の質問もし放題です。
                授業＋コーチング／特化プラン／コーチング単体などの契約後、アクセスコードで開放されます。
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                <Link
                  href={`/academy/access?next=${encodeURIComponent(`/academy/unit/${id}?subject=${subjectId}`)}`}
                  className="px-5 py-2.5 rounded-lg text-sm font-semibold text-white"
                  style={{ backgroundColor: "#0c1a33" }}
                >
                  アクセスコードを入力
                </Link>
                <Link
                  href="/pricing"
                  className="px-5 py-2.5 rounded-lg text-sm font-semibold"
                  style={{ border: "1px solid #e5e1d8", color: "#0c1a33" }}
                >
                  料金を見る
                </Link>
                <Link href="/academy" className="px-5 py-2.5 rounded-lg text-sm font-semibold" style={{ color: "#c9922a" }}>
                  無料教材一覧
                </Link>
              </div>
            </div>
          ) : (
            <>
              {/* 学習メニュー（スクロールジャンプ・中身は隠さない） */}
              <nav
                aria-label="この授業の学習メニュー"
                className="sticky top-0 z-20 -mx-1 px-1 py-3"
                style={{ background: "rgba(247,245,240,0.92)", backdropFilter: "blur(8px)" }}
              >
                <p className="text-[10px] font-bold tracking-wider mb-2 px-1" style={{ color: "#9ca3af" }}>
                  このページの中身（押すと該当箇所へ）
                </p>
                <div className="flex flex-wrap gap-2">
                  {jumps.map((j) => (
                    <a
                      key={j.id}
                      href={`#${j.id}`}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold transition-opacity hover:opacity-90"
                      style={{
                        backgroundColor:
                          j.tone === "muted" ? "#fff" : j.tone === "primary" ? "#0c1a33" : "#fff",
                        color: j.tone === "primary" ? "#fff" : j.tone === "ready" ? "#0c1a33" : "#9ca3af",
                        border:
                          j.tone === "primary"
                            ? "1px solid #0c1a33"
                            : j.tone === "ready"
                              ? "1px solid #c9922a"
                              : "1px dashed #d1d5db",
                      }}
                    >
                      {j.available && j.tone !== "primary" && (
                        <span
                          className="inline-block w-1.5 h-1.5 rounded-full"
                          style={{ background: "#c9922a" }}
                          aria-hidden
                        />
                      )}
                      {j.label}
                      {!j.available && j.tone === "muted" ? "（準備中）" : ""}
                    </a>
                  ))}
                </div>
              </nav>

              {/* 1. 動画 */}
              <SectionCard id="video" eyebrow="STEP 1" title="動画で理解する">
                {hasVideo ? (
                  <div className="space-y-4">
                    <UnitVideoPlayer
                      src={(media.lectureVideo || media.video)!}
                      title={`${unit.title} 授業動画`}
                    />
                    {showShortVideo && media.video && media.lectureVideo && (
                      <div>
                        <p className="text-xs mb-1.5 font-medium text-[#6b7280]">動画（要点）</p>
                        <UnitVideoPlayer src={media.video} title={`${unit.title} 要点動画`} />
                      </div>
                    )}
                    <p className="text-xs" style={{ color: "#6b7280" }}>
                      クリックで再生。下のスライドPDF・教材PDFと合わせて復習できます。
                    </p>
                  </div>
                ) : (
                  <EmptySlot label="動画" hint="動画は準備中です。教材PDFと授業本文から学習を始めてください。" />
                )}
              </SectionCard>

              {/* 2. スライドPDF + 教材PDF */}
              <div className="grid sm:grid-cols-2 gap-4">
                <section
                  id="slides"
                  className="scroll-mt-24 p-5 rounded-2xl bg-white space-y-3"
                  style={{ border: "1px solid #e5e1d8" }}
                >
                  <p className="text-[10px] font-bold tracking-wider" style={{ color: "#2563eb" }}>
                    STEP 2 · スライド
                  </p>
                  <h2 className="text-sm font-bold" style={{ color: "#0c1a33" }}>
                    スライドPDF
                  </h2>
                  {hasSlides ? (
                    <>
                      <p className="text-xs leading-relaxed" style={{ color: "#6b7280" }}>
                        授業スライド。画面共有・印刷・手元確認用です。
                      </p>
                      <a
                        href={media.slidesPdf!}
                        download={downloadName("スライド.pdf")}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center w-full px-4 py-2.5 rounded-lg text-xs font-bold text-white"
                        style={{ backgroundColor: "#2563eb" }}
                      >
                        スライドPDFを開く
                      </a>
                    </>
                  ) : (
                    <EmptySlot label="スライドPDF" hint="スライドは準備中です。" />
                  )}
                </section>

                <section
                  id="lesson-pdf"
                  className="scroll-mt-24 p-5 rounded-2xl bg-white space-y-3"
                  style={{ border: "1px solid #e5e1d8" }}
                >
                  <p className="text-[10px] font-bold tracking-wider" style={{ color: "#c9922a" }}>
                    STEP 3 · 教材
                  </p>
                  <h2 className="text-sm font-bold" style={{ color: "#0c1a33" }}>
                    教材PDF（本文）
                  </h2>
                  <p className="text-xs leading-relaxed" style={{ color: "#6b7280" }}>
                    例題・解答つきの学習正本。ダウンロードして復習に使えます。
                  </p>
                  <a
                    href={pdfHref}
                    download={downloadName("教材.pdf")}
                    className="inline-flex items-center justify-center w-full px-4 py-2.5 rounded-lg text-xs font-bold text-white"
                    style={{ backgroundColor: "#c9922a" }}
                  >
                    教材PDFをダウンロード
                  </a>
                </section>
              </div>

              {/* 3. 音声 */}
              <SectionCard id="audio" eyebrow="STEP 4" title="音声で聞く">
                {hasAudio ? (
                  <div>
                    <p className="text-xs mb-2" style={{ color: "#6b7280" }}>
                      移動中や画面を見られないとき用。再生するまで読み込みません。
                    </p>
                    <audio controls className="w-full" src={media.audio!} preload="none" />
                  </div>
                ) : (
                  <EmptySlot label="音声" hint="音声は準備中です。" />
                )}
              </SectionCard>

              {/* 4. ポイント */}
              <SectionCard id="points" eyebrow="STEP 5" title="このPartのポイント">
                <div
                  className="p-4 rounded-xl"
                  style={{ background: "#fffdf8", borderLeft: "3px solid #c9922a" }}
                >
                  <p className="text-xs font-bold mb-1" style={{ color: "#c9922a" }}>
                    到達ゴール
                  </p>
                  <p className="text-sm font-medium leading-relaxed" style={{ color: "#0c1a33" }}>
                    {unit.goal}
                  </p>
                </div>
                {lessonPoints.length > 0 ? (
                  <ul className="space-y-2">
                    {lessonPoints.map((p, i) => (
                      <li
                        key={i}
                        className="flex gap-2 text-sm leading-relaxed"
                        style={{ color: "#3d3d3d" }}
                      >
                        <span
                          className="shrink-0 mt-0.5 w-5 h-5 rounded-full text-[10px] font-bold flex items-center justify-center text-white"
                          style={{ background: "#0c1a33" }}
                        >
                          {i + 1}
                        </span>
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-sm" style={{ color: "#6b7280" }}>
                    上のゴールを意識して、動画・教材PDFで手順を再現してください。
                  </p>
                )}
                <p className="text-xs" style={{ color: "#9ca3af" }}>
                  目安 {unit.minutes}分 · 章: {unit.chapter}
                </p>
              </SectionCard>

              {/* 5. クイズ */}
              <SectionCard
                id="quiz"
                eyebrow="STEP 6"
                title={extraQuiz?.title || curriculumQuiz?.title || "確認クイズ"}
              >
                {hasQuiz ? (
                  <div className="space-y-5 academy-quiz">
                    <p className="text-xs" style={{ color: "#6b7280" }}>
                      授業後に解いて、前提の穴を確認してください。解答は開いて確認できます。
                    </p>
                    {extraQuiz && <QuizList quiz={extraQuiz} />}
                    {curriculumQuiz && extraQuiz && (
                      <div className="my-2 border-t" style={{ borderColor: "#e5e1d8" }} />
                    )}
                    {curriculumQuiz && extraQuiz && (
                      <h3 className="text-sm font-bold" style={{ color: "#0c1a33" }}>
                        追加問題
                      </h3>
                    )}
                    {curriculumQuiz && <QuizList quiz={curriculumQuiz} />}
                  </div>
                ) : (
                  <EmptySlot label="確認クイズ" hint="このユニットのクイズは準備中です。" />
                )}
              </SectionCard>

              {/* 6. 授業本文 */}
              <SectionCard
                id="lesson"
                eyebrow="STEP 7"
                title="授業本文"
                action={
                  <div className="flex flex-wrap gap-3 text-xs font-semibold">
                    <a href={pdfHref} download={downloadName("教材.pdf")} style={{ color: "#c9922a" }}>
                      教材PDF
                    </a>
                    {hasSlides && (
                      <a
                        href={media.slidesPdf!}
                        download={downloadName("スライド.pdf")}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: "#2563eb" }}
                      >
                        スライドPDF
                      </a>
                    )}
                    {media.lessonHtml && (
                      <a href={media.lessonHtml} target="_blank" rel="noopener noreferrer" style={{ color: "#6b7280" }}>
                        別タブ
                      </a>
                    )}
                  </div>
                }
              >
                {media.lessonHtml ? (
                  <iframe
                    title="lesson"
                    src={media.lessonHtml}
                    className="w-full rounded-xl"
                    style={{ height: 900, border: "1px solid #e5e1d8" }}
                  />
                ) : (
                  <div
                    className="academy-prose -mx-1"
                    dangerouslySetInnerHTML={{ __html: html }}
                  />
                )}
              </SectionCard>

              {/* 台本は補助（講師・再学習用）— 折りたたみ */}
              {storyHtml && (
                <details
                  id="story"
                  className="scroll-mt-24 p-5 rounded-2xl bg-white"
                  style={{ border: "1px solid #e5e1d8" }}
                >
                  <summary className="cursor-pointer list-none">
                    <div className="flex items-center justify-between gap-2">
                      <div>
                        <p className="text-[10px] font-bold tracking-wider mb-1" style={{ color: "#9ca3af" }}>
                          補助
                        </p>
                        <h2 className="text-sm font-bold" style={{ color: "#0c1a33" }}>
                          台本（12ブロック）を見る
                        </h2>
                      </div>
                      <span className="text-xs font-semibold" style={{ color: "#c9922a" }}>
                        開く
                      </span>
                    </div>
                  </summary>
                  <div
                    className="mt-4 pt-4 academy-prose border-t"
                    style={{ borderColor: "#e5e1d8" }}
                    dangerouslySetInnerHTML={{ __html: storyHtml }}
                  />
                </details>
              )}

              <KatexEnhance />
              <KatexEnhance rootClass="academy-quiz" />

              {/* 下部CTA */}
              <div
                className="p-4 rounded-xl bg-white flex flex-wrap items-center justify-between gap-3"
                style={{ border: "1px solid #e5e1d8" }}
              >
                <p className="text-xs text-[#6b7280]">
                  教材PDF
                  {hasSlides ? "・スライドPDF" : ""}
                  をダウンロードして復習できます。
                </p>
                <div className="flex flex-wrap gap-2">
                  <a
                    href={pdfHref}
                    className="px-4 py-2 rounded-lg text-xs font-bold text-white"
                    style={{ backgroundColor: "#0c1a33" }}
                    download={downloadName("教材.pdf")}
                  >
                    教材PDF
                  </a>
                  {hasSlides && (
                    <a
                      href={media.slidesPdf!}
                      className="px-4 py-2 rounded-lg text-xs font-bold text-white"
                      style={{ backgroundColor: "#2563eb" }}
                      download={downloadName("スライド.pdf")}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      スライドPDF
                    </a>
                  )}
                  <a
                    href="#quiz"
                    className="px-4 py-2 rounded-lg text-xs font-bold"
                    style={{ border: "1px solid #e5e1d8", color: "#0c1a33" }}
                  >
                    クイズへ
                  </a>
                </div>
              </div>
            </>
          )}

          <div className="flex flex-wrap gap-4 text-sm">
            <Link href={`/academy/subject/${encodeURIComponent(subjectId)}`} style={{ color: "#c9922a" }}>
              ← {subjectLabel}
            </Link>
            <Link href="/academy" style={{ color: "#6b7280" }}>
              教科一覧
            </Link>
            {!member && (
              <Link href="/academy/access" style={{ color: "#0c1a33" }}>
                塾生ログイン
              </Link>
            )}
          </div>

          {partContext && (
            <nav aria-label="Part授業の前後移動" className="grid sm:grid-cols-2 gap-3">
              {partContext.previous ? (
                <Link
                  href={`/academy/unit/${partContext.previous.id}?subject=${encodeURIComponent(subjectId)}`}
                  className="p-4 rounded-xl bg-white hover:shadow-sm transition-shadow"
                  style={{ border: "1px solid #e5e1d8", color: "#0c1a33" }}
                >
                  <span className="block text-[10px] text-[#6b7280] mb-1">← 前のPart</span>
                  <span className="block text-sm font-semibold">
                    Part {partContext.previous.part} · {partContext.previous.title}
                  </span>
                </Link>
              ) : (
                <Link
                  href={`/academy/subject/${encodeURIComponent(subjectId)}?chapter=${encodeURIComponent(unit.chapter)}`}
                  className="p-4 rounded-xl bg-white"
                  style={{ border: "1px solid #e5e1d8", color: "#0c1a33" }}
                >
                  <span className="block text-[10px] text-[#6b7280] mb-1">← 分野一覧へ</span>
                  <span className="block text-sm font-semibold">{partContext.parent.title}</span>
                </Link>
              )}
              {partContext.next ? (
                <Link
                  href={`/academy/unit/${partContext.next.id}?subject=${encodeURIComponent(subjectId)}`}
                  className="p-4 rounded-xl bg-white hover:shadow-sm transition-shadow sm:text-right"
                  style={{ border: "1px solid #e5e1d8", color: "#0c1a33" }}
                >
                  <span className="block text-[10px] text-[#6b7280] mb-1">次のPart →</span>
                  <span className="block text-sm font-semibold">
                    Part {partContext.next.part} · {partContext.next.title}
                  </span>
                </Link>
              ) : (
                <Link
                  href={`/academy/subject/${encodeURIComponent(subjectId)}?chapter=${encodeURIComponent(unit.chapter)}`}
                  className="p-4 rounded-xl bg-white sm:text-right"
                  style={{ border: "1px solid #e5e1d8", color: "#0c1a33" }}
                >
                  <span className="block text-[10px] text-[#6b7280] mb-1">分野を完了</span>
                  <span className="block text-sm font-semibold">分野一覧へ戻る →</span>
                </Link>
              )}
            </nav>
          )}
        </div>
      </div>

      <style>{`
        .academy-prose h1 { font-size: 1.2rem; font-weight: 700; color: #0c1a33; margin: 0 0 0.75rem; }
        .academy-prose h2 { font-size: 1.05rem; font-weight: 700; color: #0c1a33; margin: 1.35rem 0 0.55rem; border-bottom: 1px solid #e5e1d8; padding-bottom: 0.35rem; }
        .academy-prose h3 { font-size: 0.95rem; font-weight: 600; color: #374151; margin: 1rem 0 0.35rem; }
        .academy-prose p { font-size: 0.94rem; line-height: 1.85; color: #3d3d3d; margin: 0.5rem 0; }
        .academy-prose .academy-kicker { font-size: 0.8rem; color: #9ca3af; margin-bottom: 0.75rem; }
        .academy-prose .academy-goal { background: #f7f5f0; border-left: 3px solid #c9922a; padding: 0.7rem 0.95rem; border-radius: 0 10px 10px 0; }
        .academy-prose .academy-meta { font-size: 0.85rem; color: #6b7280; }
        .academy-prose ul, .academy-prose ol { margin: 0.5rem 0 0.5rem 1.2rem; font-size: 0.94rem; color: #3d3d3d; }
        .academy-prose li { margin: 0.32rem 0; line-height: 1.75; }
        .academy-prose code { background: #f3f4f6; padding: 0.1rem 0.35rem; border-radius: 4px; font-size: 0.85em; }
        .academy-prose .academy-id { font-family: ui-monospace, monospace; font-size: 0.85em; color: #0c1a33; background: #eef2ff; padding: 0.05rem 0.3rem; border-radius: 4px; }
        .academy-prose hr { border: 0; border-top: 1px solid #e5e1d8; margin: 1.25rem 0; }
        .academy-prose .katex-display { margin: 0.75rem 0; overflow-x: auto; }
        details > summary::-webkit-details-marker { display: none; }
      `}</style>
    </div>
  );
}
