import fs from "node:fs";
import path from "node:path";

const MEDIA_ROOT = path.join(process.cwd(), "public", "academy", "media");

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

/**
 * public/academy/media/{unitId}/ 配下のアセットを解決する。
 * 教材PDF・スライドPDF・音声・動画・クイズ（複数ファイル名を吸収）。
 */
export function resolveUnitMedia(unitId: string): UnitMediaAssets {
  const dir = path.join(MEDIA_ROOT, unitId);
  if (!fs.existsSync(dir)) {
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

  const lessonPdf = firstExisting(dir, unitId, ["lesson.pdf"]);
  const lessonHtml = firstExisting(dir, unitId, ["lesson.html"]);
  const slidesHtml = firstExisting(dir, unitId, ["slides.html"]);

  // スライドPDF（公開名 slides.pdf を優先。内部名 nlm_* も解決）
  const slidesPdf = firstExisting(dir, unitId, [
    "slides.pdf",
    "nlm_slides.pdf",
    "slides_nlm.pdf",
  ]);

  // 音声: 講義音声を優先
  const audio = firstExisting(dir, unitId, [
    "audio.m4a",
    "audio.mp3",
    "nlm_audio.m4a",
    "audio_nlm.m4a",
    "audio_unit.m4a",
  ]);

  // 長めの講義動画（nlm / video_nlm）と、短い連動動画（video.mp4）
  const lectureVideo = firstExisting(dir, unitId, [
    "lecture.mp4",
    "nlm_video.mp4",
    "video_nlm.mp4",
  ]);
  const video = firstExisting(dir, unitId, ["video.mp4"]);

  const quizJsonPath = firstExistingPath(dir, ["quiz.json", "nlm_quiz.json"]);
  const quizMd = firstExisting(dir, unitId, ["quiz.md", "nlm_quiz.md"]);

  const hasExtendedMedia = Boolean(
    slidesPdf || audio || lectureVideo || video || slidesHtml || quizJsonPath || quizMd,
  );
  const hasAnyMedia = Boolean(lessonPdf || lessonHtml || hasExtendedMedia);

  return {
    unitId,
    lessonPdf,
    lessonHtml,
    slidesHtml,
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
