import fs from "node:fs";
import path from "node:path";
import { isFreeUnit } from "./freeUnits";

const MEDIA_ROOT = path.join(process.cwd(), "public", "academy", "media");

type UnitMediaPublicUrls = {
  lesson_pdf?: string;
  slides_html?: string;
  slides_pdf?: string;
  audio?: string;
  lecture_video?: string;
  video?: string;
  quiz_md?: string;
};

type UnitMediaManifest = {
  public_urls?: UnitMediaPublicUrls;
};

export type UnitMediaAssets = {
  unitId: string;
  /** 教材PDF（本文・数式対応） */
  lessonPdf: string | null;
  /** 数式対応 lesson HTML */
  lessonHtml: string | null;
  /** スライド HTML（ブラウザ視聴） */
  slidesHtml: string | null;
  /** スライドPDF（ダウンロード用） */
  slidesPdf: string | null;
  /** 音声講義 */
  audio: string | null;
  /** 動画（補助・講義） */
  lectureVideo: string | null;
  /** 動画（数式スライド連動など短いもの） */
  video: string | null;
  /** クイズ JSON の絶対パス（公開URLではない） */
  quizJsonPath: string | null;
  /** クイズ Markdown の公開URL */
  quizMd: string | null;
  hasAnyMedia: boolean;
  /** スライドPDF・音声・動画など拡張メディアあり */
  hasExtendedMedia: boolean;
};

function publicUrl(unitId: string, file: string): string {
  return `/academy/media/${unitId}/${file}`;
}

function firstExisting(dir: string, unitId: string, names: string[]): string | null {
  for (const name of names) {
    if (fs.existsSync(path.join(dir, name))) return publicUrl(unitId, name);
  }
  return null;
}

function firstExistingPath(dir: string, names: string[]): string | null {
  for (const name of names) {
    const full = path.join(dir, name);
    if (fs.existsSync(full)) return full;
  }
  return null;
}

function safePublicMediaUrl(value: unknown): string | null {
  if (typeof value !== "string") return null;
  const url = value.trim();
  if (url.startsWith("/") || url.startsWith("https://")) return url;
  return null;
}

function readPublicUrls(dir: string): UnitMediaPublicUrls {
  try {
    const manifest = JSON.parse(
      fs.readFileSync(path.join(dir, "manifest.json"), "utf8"),
    ) as UnitMediaManifest;
    return manifest.public_urls || {};
  } catch {
    return {};
  }
}

/**
 * Free sample packs are published to the Vercel static CDN, but
 * `outputFileTracingExcludes` keeps `public/academy/media/**` out of the
 * serverless filesystem. `fs.existsSync` therefore fails in production even
 * when `/academy/media/...` URLs return 200. Use known delivery names for free units.
 */
function freeCdnAssets(unitId: string): UnitMediaAssets {
  const lessonHtml = publicUrl(unitId, "lesson.html");
  const slidesPdf = publicUrl(unitId, "slides.pdf");
  const audio = publicUrl(unitId, "audio.m4a");
  const video = publicUrl(unitId, "video.mp4");

  return {
    unitId,
    lessonPdf: null,
    lessonHtml,
    // ブラウザ用 slides.html はUIから廃止（PDFを正とする）
    slidesHtml: null,
    slidesPdf,
    audio,
    lectureVideo: null,
    video,
    // quiz.json は Serverless に無い。カリキュラム正本クイズ（content/）を使う。
    quizJsonPath: null,
    quizMd: null,
    hasAnyMedia: true,
    hasExtendedMedia: true,
  };
}

function emptyAssets(unitId: string): UnitMediaAssets {
  return {
    unitId,
    lessonPdf: null,
    lessonHtml: null,
    slidesHtml: null,
    slidesPdf: null,
    audio: null,
    lectureVideo: null,
    video: null,
    quizJsonPath: null,
    quizMd: null,
    hasAnyMedia: false,
    hasExtendedMedia: false,
  };
}

/**
 * public/academy/media/{unitId}/ 配下のアセットを解決する。
 * 教材PDF・スライドPDF・音声・動画・クイズ（複数ファイル名を吸収）。
 * 本番では無料パックを CDN URL で解決する（関数内に media バイナリが無いため）。
 */
export function resolveUnitMedia(unitId: string): UnitMediaAssets {
  const dir = path.join(MEDIA_ROOT, unitId);
  const onDisk = fs.existsSync(dir);

  // ローカル/ディスク無しの本番: 無料パックは CDN 固定名で公開済み
  if (!onDisk) {
    return isFreeUnit(unitId) ? freeCdnAssets(unitId) : emptyAssets(unitId);
  }

  const publicUrls = readPublicUrls(dir);
  let lessonPdf =
    safePublicMediaUrl(publicUrls.lesson_pdf) || firstExisting(dir, unitId, ["lesson.pdf"]);
  let lessonHtml = firstExisting(dir, unitId, ["lesson.html"]);
  // slides.html（ブラウザデッキ）は配信しない。slides.pdf のみ。

  // スライドPDF（公開名 slides.pdf を優先。内部名 nlm_* も解決）
  let slidesPdf =
    safePublicMediaUrl(publicUrls.slides_pdf) ||
    firstExisting(dir, unitId, ["slides.pdf", "nlm_slides.pdf", "slides_nlm.pdf"]);

  // 音声: 講義音声を優先
  let audio =
    safePublicMediaUrl(publicUrls.audio) ||
    firstExisting(dir, unitId, [
      "audio.m4a",
      "audio.mp3",
      "nlm_audio.m4a",
      "audio_nlm.m4a",
      "audio_unit.m4a",
    ]);

  // 長めの講義動画（nlm / video_nlm）と、短い連動動画（video.mp4）
  let lectureVideo =
    safePublicMediaUrl(publicUrls.lecture_video) ||
    firstExisting(dir, unitId, ["lecture.mp4", "nlm_video.mp4", "video_nlm.mp4"]);
  let video =
    safePublicMediaUrl(publicUrls.video) || firstExisting(dir, unitId, ["video.mp4"]);

  const quizJsonPath = firstExistingPath(dir, ["quiz.json", "nlm_quiz.json"]);
  let quizMd =
    safePublicMediaUrl(publicUrls.quiz_md) ||
    firstExisting(dir, unitId, ["quiz.md", "nlm_quiz.md"]);

  // ディスク上の public/ が一部欠けているケース（Vercel で小ファイルだけ残る等）でも
  // 無料パックは CDN 配信名で埋める
  if (isFreeUnit(unitId)) {
    const cdn = freeCdnAssets(unitId);
    lessonHtml = lessonHtml || cdn.lessonHtml;
    slidesPdf = slidesPdf || cdn.slidesPdf;
    audio = audio || cdn.audio;
    video = video || cdn.video;
  }

  const hasExtendedMedia = Boolean(
    slidesPdf || audio || lectureVideo || video || quizJsonPath || quizMd,
  );
  const hasAnyMedia = Boolean(lessonPdf || lessonHtml || hasExtendedMedia);

  return {
    unitId,
    lessonPdf,
    lessonHtml,
    slidesHtml: null,
    slidesPdf,
    audio,
    lectureVideo,
    video,
    quizJsonPath,
    quizMd,
    hasAnyMedia,
    hasExtendedMedia,
  };
}

/** クイズ JSON（カリキュラム / 拡張）の正規化 */
export type NormalizedQuizQuestion = {
  id: string;
  prompt: string;
  choices?: { text: string; isCorrect?: boolean }[];
  answer?: string;
  explain?: string;
  hint?: string;
};

export type NormalizedQuiz = {
  title?: string;
  source: "curriculum" | "extra";
  questions: NormalizedQuizQuestion[];
};

type LooseQuizQ = {
  id?: string;
  type?: string;
  prompt?: string;
  question?: string;
  choices?: string[];
  answer?: string;
  explain?: string;
  hint?: string;
  answerOptions?: { text?: string; isCorrect?: boolean; rationale?: string }[];
};

/**
 * カリキュラム / 拡張クイズ JSON を同一形式に正規化。
 */
export function normalizeQuiz(
  raw: unknown,
  source: "curriculum" | "extra",
): NormalizedQuiz | null {
  if (!raw || typeof raw !== "object") return null;
  const obj = raw as { title?: string; questions?: LooseQuizQ[] };
  if (!Array.isArray(obj.questions) || obj.questions.length === 0) return null;

  const questions: NormalizedQuizQuestion[] = obj.questions.map((q, i) => {
    const prompt = q.prompt || q.question || `問${i + 1}`;
    if (q.answerOptions && q.answerOptions.length > 0) {
      const choices = q.answerOptions.map((o) => ({
        text: o.text || "",
        isCorrect: Boolean(o.isCorrect),
      }));
      const correct = q.answerOptions.find((o) => o.isCorrect);
      return {
        id: q.id || `q${i + 1}`,
        prompt,
        choices,
        answer: correct?.text,
        explain: correct?.rationale || q.explain,
        hint: q.hint,
      };
    }
    return {
      id: q.id || `q${i + 1}`,
      prompt,
      choices: q.choices?.map((c) => ({ text: c })),
      answer: q.answer,
      explain: q.explain,
      hint: q.hint,
    };
  });

  return {
    title: obj.title,
    source,
    questions,
  };
}

export function readNlmQuizJson(jsonPath: string): unknown {
  return JSON.parse(fs.readFileSync(jsonPath, "utf8"));
}
