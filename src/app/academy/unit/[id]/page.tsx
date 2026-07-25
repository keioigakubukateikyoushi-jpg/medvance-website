import Link from "next/link";
import { notFound } from "next/navigation";
import {
  findUnitLocation,
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
import UnitVideoPlayer from "@/components/academy/UnitVideoPlayer";
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

export default async function AcademyUnitPage({ params, searchParams }: Props) {
  const { id } = await params;
  const sp = await searchParams;
  const tab = sp.tab || "lesson";
  const loc = sp.subject
    ? (() => {
        try {
          const idx = getSubjectIndex(sp.subject!);
          const unit = idx.units.find((u) => u.id === id);
          return unit ? { subjectId: sp.subject!, unit } : findUnitLocation(id);
        } catch {
          return findUnitLocation(id);
        }
      })()
    : findUnitLocation(id);

  if (!loc) notFound();

  const { subjectId, unit } = loc;
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
  let curriculumQuiz: NormalizedQuiz | null = null;
  let extraQuiz: NormalizedQuiz | null = null;
  const media = resolveUnitMedia(id);

  if (allowed) {
    try {
      const md = readLessonMarkdown(subjectId, unit.file);
      html = academyMarkdownToHtml(md);
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

  // 講義動画と短い連動動画が別物なら両方表示
  const showShortVideo = Boolean(
    media.video && media.video !== media.lectureVideo,
  );
  const hasQuiz = Boolean(curriculumQuiz || extraQuiz);

  const baseQ = `subject=${encodeURIComponent(subjectId)}`;
  const downloadName = (suffix: string) => `${id}_${suffix}`;

  return (
    <div className="min-h-screen bg-white">
      <div style={{ backgroundColor: "#0c1a33" }} className="py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs mb-2" style={{ color: "rgba(255,255,255,0.45)" }}>
            {subjectLabel}
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
                PDF・スライド・音声
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

          {allowed && (
            <div className="mt-5 flex flex-wrap gap-2">
              <a
                href={pdfHref}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-bold text-white"
                style={{ backgroundColor: "#c9922a" }}
                download={downloadName("教材.pdf")}
              >
                教材PDF
              </a>
              {media.slidesPdf && (
                <a
                  href={media.slidesPdf}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-bold text-white"
                  style={{ backgroundColor: "#2563eb" }}
                  download={downloadName("スライド.pdf")}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  スライドPDF
                </a>
              )}
            </div>
          )}
        </div>
      </div>

      <div className="py-10 px-4" style={{ backgroundColor: "#f7f5f0" }}>
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
              <div className="flex flex-wrap gap-2">
                {[
                  { key: "lesson", label: "授業本文" },
                  { key: "quiz", label: "確認クイズ" },
                  ...(storyHtml ? [{ key: "story", label: "台本（12ブロック）" }] : []),
                  { key: "media", label: "スライド・音声・動画" },
                ].map((t) => (
                  <Link
                    key={t.key}
                    href={`/academy/unit/${id}?${baseQ}&tab=${t.key}`}
                    className="px-3 py-1.5 rounded-full text-xs font-semibold"
                    style={{
                      backgroundColor: tab === t.key ? "#0c1a33" : "#fff",
                      color: tab === t.key ? "#fff" : "#0c1a33",
                      border: "1px solid #e5e1d8",
                    }}
                  >
                    {t.label}
                  </Link>
                ))}
              </div>

              {(tab === "media" || tab === "lesson") && (
                <section className="p-5 rounded-2xl bg-white space-y-5" style={{ border: "1px solid #e5e1d8" }}>
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h2 className="text-sm font-bold" style={{ color: "#0c1a33" }}>
                      教材・スライド・メディア
                    </h2>
                    <div className="flex flex-wrap gap-3">
                      <a
                        href={pdfHref}
                        className="text-xs font-semibold"
                        style={{ color: "#c9922a" }}
                        download={downloadName("教材.pdf")}
                      >
                        教材PDF
                      </a>
                      {media.slidesPdf && (
                        <a
                          href={media.slidesPdf}
                          className="text-xs font-semibold"
                          style={{ color: "#2563eb" }}
                          download={downloadName("スライド.pdf")}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          スライドPDF
                        </a>
                      )}
                    </div>
                  </div>

                  {/* ダウンロードカード */}
                  <div className="grid sm:grid-cols-2 gap-3">
                    <a
                      href={pdfHref}
                      download={downloadName("教材.pdf")}
                      className="p-4 rounded-xl hover:shadow-sm transition-shadow"
                      style={{ border: "1px solid #e5e1d8", background: "#fffdf8" }}
                    >
                      <p className="text-[10px] font-bold tracking-wider mb-1" style={{ color: "#c9922a" }}>
                        教材PDF
                      </p>
                      <p className="text-sm font-semibold mb-1" style={{ color: "#0c1a33" }}>
                        本文・例題・解答（数式対応）
                      </p>
                      <p className="text-xs" style={{ color: "#6b7280" }}>
                        学習の正本。ダウンロードして復習に使えます。
                      </p>
                    </a>
                    {media.slidesPdf ? (
                      <a
                        href={media.slidesPdf}
                        download={downloadName("スライド.pdf")}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-4 rounded-xl hover:shadow-sm transition-shadow"
                        style={{ border: "1px solid #bfdbfe", background: "#f8fbff" }}
                      >
                        <p className="text-[10px] font-bold tracking-wider mb-1" style={{ color: "#2563eb" }}>
                          スライドPDF
                        </p>
                        <p className="text-sm font-semibold mb-1" style={{ color: "#0c1a33" }}>
                          授業スライド（PDF）
                        </p>
                        <p className="text-xs" style={{ color: "#6b7280" }}>
                          画面共有・印刷用。ここからPDFダウンロードできます。
                        </p>
                      </a>
                    ) : (
                      <div
                        className="p-4 rounded-xl"
                        style={{ border: "1px dashed #e5e1d8", background: "#fafafa" }}
                      >
                        <p className="text-[10px] font-bold tracking-wider mb-1" style={{ color: "#6b7280" }}>
                          スライド
                        </p>
                        <p className="text-sm font-semibold mb-1" style={{ color: "#9ca3af" }}>
                          スライドは準備中です
                        </p>
                        <p className="text-xs" style={{ color: "#9ca3af" }}>
                          授業本文と教材PDFは利用できます。
                        </p>
                      </div>
                    )}
                  </div>

                  {media.audio ? (
                    <div>
                      <p className="text-xs mb-1.5 font-medium text-[#6b7280]">音声</p>
                      {/* preload=none: タブを開いただけでは音声を取りに行かない */}
                      <audio controls className="w-full" src={media.audio} preload="none" />
                    </div>
                  ) : (
                    <div
                      className="p-4 rounded-xl"
                      style={{ border: "1px dashed #e5e1d8", background: "#fafafa" }}
                    >
                      <p className="text-xs font-semibold mb-0.5" style={{ color: "#6b7280" }}>
                        音声
                      </p>
                      <p className="text-sm" style={{ color: "#9ca3af" }}>
                        音声は準備中です
                      </p>
                    </div>
                  )}

                  {media.lectureVideo || media.video ? (
                    <div className="space-y-4">
                      <div>
                        <p className="text-xs mb-1.5 font-medium text-[#6b7280]">動画</p>
                        <UnitVideoPlayer
                          src={(media.lectureVideo || media.video)!}
                          title={`${unit.title} 授業動画`}
                        />
                      </div>
                      {showShortVideo && media.video && media.lectureVideo && (
                        <div>
                          <p className="text-xs mb-1.5 font-medium text-[#6b7280]">動画（要点）</p>
                          <UnitVideoPlayer
                            src={media.video}
                            title={`${unit.title} 要点動画`}
                          />
                        </div>
                      )}
                    </div>
                  ) : (
                    <div
                      className="p-4 rounded-xl"
                      style={{ border: "1px dashed #e5e1d8", background: "#fafafa" }}
                    >
                      <p className="text-xs font-semibold mb-0.5" style={{ color: "#6b7280" }}>
                        動画
                      </p>
                      <p className="text-sm" style={{ color: "#9ca3af" }}>
                        動画は準備中です（YouTube URL 登録後に表示されます）
                      </p>
                    </div>
                  )}
                </section>
              )}

              {(tab === "lesson" || !tab) &&
                (media.lessonHtml ? (
                  <section className="rounded-2xl overflow-hidden bg-white" style={{ border: "1px solid #e5e1d8" }}>
                    <div
                      className="px-4 py-2 text-xs font-semibold flex flex-wrap justify-between gap-2"
                      style={{ background: "#f7f5f0", color: "#0c1a33" }}
                    >
                      <span>授業本文（数式対応）</span>
                      <div className="flex gap-3">
                        <a href={pdfHref} download={downloadName("教材.pdf")} style={{ color: "#c9922a" }}>
                          教材PDF
                        </a>
                        {media.slidesPdf && (
                          <a
                            href={media.slidesPdf}
                            download={downloadName("スライド.pdf")}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ color: "#2563eb" }}
                          >
                            スライドPDF
                          </a>
                        )}
                        <a
                          href={media.lessonHtml}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{ color: "#6b7280" }}
                        >
                          別タブ
                        </a>
                      </div>
                    </div>
                    <iframe
                      title="lesson"
                      src={media.lessonHtml}
                      className="w-full"
                      style={{ height: 900, border: 0 }}
                    />
                  </section>
                ) : (
                  <section
                    className="p-6 md:p-8 rounded-2xl bg-white academy-prose"
                    style={{ border: "1px solid #e5e1d8" }}
                    dangerouslySetInnerHTML={{ __html: html }}
                  />
                ))}

              {tab === "story" && storyHtml && (
                <section
                  className="p-6 md:p-8 rounded-2xl bg-white academy-prose"
                  style={{ border: "1px solid #e5e1d8" }}
                  dangerouslySetInnerHTML={{ __html: storyHtml }}
                />
              )}

              <KatexEnhance />
              <KatexEnhance rootClass="academy-quiz" />

              {tab === "quiz" && (
                <div className="space-y-5">
                  {(extraQuiz || curriculumQuiz) && (
                    <section
                      className="p-6 rounded-2xl bg-white academy-quiz"
                      style={{ border: "1px solid #e5e1d8" }}
                    >
                      <h2 className="text-base font-bold mb-1" style={{ color: "#0c1a33" }}>
                        {extraQuiz?.title || curriculumQuiz?.title || "確認クイズ"}
                      </h2>
                      <p className="text-xs mb-4 text-[#6b7280]">
                        授業後に解いて、前提の穴を確認してください。解答は開いて確認できます。
                      </p>
                      {extraQuiz && <QuizList quiz={extraQuiz} />}
                      {curriculumQuiz && extraQuiz && (
                        <div className="my-6 border-t" style={{ borderColor: "#e5e1d8" }} />
                      )}
                      {curriculumQuiz && extraQuiz && (
                        <h3 className="text-sm font-bold mb-3" style={{ color: "#0c1a33" }}>
                          追加問題
                        </h3>
                      )}
                      {curriculumQuiz && <QuizList quiz={curriculumQuiz} />}
                    </section>
                  )}

                  {!hasQuiz && (
                    <section className="p-6 rounded-2xl bg-white" style={{ border: "1px solid #e5e1d8" }}>
                      <h2 className="text-base font-bold mb-1" style={{ color: "#0c1a33" }}>
                        確認クイズ
                      </h2>
                      <p className="text-sm text-[#6b7280]">このユニットのクイズは準備中です。</p>
                    </section>
                  )}
                </div>
              )}

              <div
                className="p-4 rounded-xl bg-white flex flex-wrap items-center justify-between gap-3"
                style={{ border: "1px solid #e5e1d8" }}
              >
                <p className="text-xs text-[#6b7280]">
                  教材PDF
                  {media.slidesPdf ? "・スライドPDF" : ""}
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
                  {media.slidesPdf && (
                    <a
                      href={media.slidesPdf}
                      className="px-4 py-2 rounded-lg text-xs font-bold text-white"
                      style={{ backgroundColor: "#2563eb" }}
                      download={downloadName("スライド.pdf")}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      スライドPDF
                    </a>
                  )}
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
      `}</style>
    </div>
  );
}
