import fs from "node:fs";
import path from "node:path";
import { isFreeUnit } from "./freeUnits";

const MEDIA_ROOT = path.join(process.cwd(), "public", "academy", "media");
const YOUTUBE_REGISTRY = path.join(process.cwd(), "content", "academy", "media-youtube.json");
const MEDIA_READY_PATH = path.join(process.cwd(), "content", "academy", "media-ready.json");
const MEDIA_APPROVED_PATH = path.join(process.cwd(), "content", "academy", "media-approved.json");
const MEDIA_BLOCKED_PATH = path.join(process.cwd(), "content", "academy", "media-blocked.json");
const DAILY_RELEASE_PATH = path.join(process.cwd(), "content", "academy", "media-release-20260731.json");

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

type YoutubeRegistryEntry = {
  video?: string;
  lecture_video?: string;
};

type YoutubeRegistry = {
  version?: number;
  updated?: string;
  units?: Record<string, YoutubeRegistryEntry>;
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

/** YouTube 視聴URL / embed / ID から判定（UI 側でも利用可） */
export function isYoutubeMediaUrl(value: string | null | undefined): boolean {
  if (!value) return false;
  const v = value.trim();
  if (/^[\w-]{11}$/.test(v)) return true;
  try {
    const u = new URL(v);
    const host = u.hostname.replace(/^www\./, "");
    return (
      host === "youtu.be" ||
      host === "youtube.com" ||
      host === "m.youtube.com" ||
      host === "music.youtube.com" ||
      host === "youtube-nocookie.com"
    );
  } catch {
    return false;
  }
}

function readYoutubeRegistry(): Record<string, YoutubeRegistryEntry> {
  try {
    if (!fs.existsSync(YOUTUBE_REGISTRY)) return {};
    const raw = JSON.parse(fs.readFileSync(YOUTUBE_REGISTRY, "utf8")) as YoutubeRegistry;
    return raw.units || {};
  } catch {
    return {};
  }
}

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
 * Static CDN packs (free + media-ready complete).
 * `outputFileTracingExcludes` keeps `public/academy/media/**` out of the
 * serverless filesystem, so `fs.existsSync` fails in production even when
 * `/academy/media/...` URLs return 200. Resolve by known delivery names.
 */
function staticCdnAssets(
  unitId: string,
  opts: { audio?: boolean; video?: boolean; slides?: boolean; videoFile?: string } = {},
): UnitMediaAssets {
  const wantAudio = opts.audio !== false;
  const wantVideo = opts.video !== false;
  const wantSlides = opts.slides !== false;
  // Daily NotebookLM media packs do not publish lesson.html. Returning a
  // guessed CDN path makes the lesson iframe render a visible 404; the unit
  // page should instead render the canonical lesson Markdown.
  const lessonHtml = null;
  const slidesPdf = wantSlides ? publicUrl(unitId, "slides.pdf") : null;
  const audio = wantAudio ? publicUrl(unitId, "audio.m4a") : null;
  const video = wantVideo ? publicUrl(unitId, opts.videoFile || "video.mp4") : null;

  return {
    unitId,
    lessonPdf: null,
    lessonHtml,
    slidesHtml: null,
    slidesPdf,
    audio,
    lectureVideo: video,
    video,
    quizJsonPath: null,
    quizMd: null,
    hasAnyMedia: Boolean(lessonHtml || slidesPdf || audio || video),
    hasExtendedMedia: Boolean(slidesPdf || audio || video),
  };
}

/** @deprecated use staticCdnAssets */
function freeCdnAssets(unitId: string): UnitMediaAssets {
  return staticCdnAssets(unitId);
}

type ReadyFlags = { audio?: boolean; video?: boolean; slides?: boolean };
type DailyReleaseFlags = ReadyFlags & { quiz?: boolean };

export type ReleasedMediaFlags = DailyReleaseFlags;

type ApprovedFlags = Omit<ReadyFlags, "video"> & { video?: string; duration_seconds?: number };
type BlockedFlags = { video?: boolean; reason?: string };

/** 品質判定は nlm_video.mp4 を正本とし、CDNには同一内容の配信名 video.mp4 を載せる。 */
function deliveryVideoFile(approved: ApprovedFlags): string | undefined {
  return approved.video === "nlm_video.mp4" ? "video.mp4" : approved.video;
}

function readMediaReady(): {
  complete: Record<string, ReadyFlags>;
  partial: Record<string, ReadyFlags>;
} {
  try {
    if (!fs.existsSync(MEDIA_READY_PATH)) return { complete: {}, partial: {} };
    const raw = JSON.parse(fs.readFileSync(MEDIA_READY_PATH, "utf8")) as {
      complete?: Record<string, ReadyFlags>;
      partial?: Record<string, ReadyFlags>;
    };
    return { complete: raw.complete || {}, partial: raw.partial || {} };
  } catch {
    return { complete: {}, partial: {} };
  }
}

/** Explicit, date-scoped public release register for a completed daily batch. */
function readDailyRelease(): Record<string, DailyReleaseFlags> {
  try {
    if (!fs.existsSync(DAILY_RELEASE_PATH)) return {};
    return (JSON.parse(fs.readFileSync(DAILY_RELEASE_PATH, "utf8")) as {
      units?: Record<string, DailyReleaseFlags>;
    }).units || {};
  } catch {
    return {};
  }
}

/** Public-release registry entries, kept in registry order (oldest to newest). */
export function listReleasedMedia(): Array<{
  unitId: string;
  flags: ReleasedMediaFlags;
}> {
  return Object.entries(readDailyRelease()).map(([unitId, flags]) => ({
    unitId,
    flags,
  }));
}

/** Release authority for audio/video/slides.  A file existing is not approval. */
function readApprovedMedia(): Record<string, ApprovedFlags> {
  try {
    if (!fs.existsSync(MEDIA_APPROVED_PATH)) return {};
    return (JSON.parse(fs.readFileSync(MEDIA_APPROVED_PATH, "utf8")) as { approved?: Record<string, ApprovedFlags> }).approved || {};
  } catch {
    return {};
  }
}

function readBlockedMedia(): Record<string, BlockedFlags> {
  try {
    if (!fs.existsSync(MEDIA_BLOCKED_PATH)) return {};
    const raw = JSON.parse(fs.readFileSync(MEDIA_BLOCKED_PATH, "utf8")) as {
      units?: Record<string, BlockedFlags>;
    };
    return raw.units || {};
  } catch {
    return {};
  }
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
 * 動画はサイト内 mp4（通常埋め込み）を本線。remote URL はフォールバック。
 */
export function resolveUnitMedia(unitId: string): UnitMediaAssets {
  const dir = path.join(MEDIA_ROOT, unitId);
  const onDisk = fs.existsSync(dir);
  const ytReg = readYoutubeRegistry()[unitId] || {};
  const publicUrls = onDisk ? readPublicUrls(dir) : {};
  const approved = readApprovedMedia()[unitId];
  const released = readDailyRelease()[unitId];
  const videoBlocked = readBlockedMedia()[unitId]?.video === true;

  const remoteLecture =
    safePublicMediaUrl(publicUrls.lecture_video) ||
    safePublicMediaUrl(ytReg.lecture_video) ||
    null;
  const remoteVideo =
    safePublicMediaUrl(publicUrls.video) || safePublicMediaUrl(ytReg.video) || null;

  // 日付限定の公開レジストリは品質承認と別枠。serverless でもローカルでも優先する。
  if (released) {
    const pack = staticCdnAssets(unitId, {
      audio: Boolean(released.audio),
      video: !videoBlocked && Boolean(released.video),
      slides: Boolean(released.slides),
    });
    // ローカルに実ファイルがあれば quiz パスを優先、なければ CDN 想定パス
    const quizJsonPath = onDisk
      ? firstExistingPath(dir, ["quiz.json", "nlm_quiz.json"])
      : released.quiz
        ? path.join(MEDIA_ROOT, unitId, "quiz.json")
        : null;
    return {
      ...pack,
      quizJsonPath,
      hasAnyMedia: pack.hasAnyMedia || Boolean(quizJsonPath),
      hasExtendedMedia: pack.hasExtendedMedia || Boolean(quizJsonPath),
    };
  }

  // 本番（serverless に media バイナリが無い）: 静的 CDN の固定パスで解決
  // ※ ファイル自体はデプロイ済みでも fs.existsSync は false になる
  if (!onDisk) {
    const ready = readMediaReady();
    if (approved && (isFreeUnit(unitId) || ready.complete[unitId])) {
      const flags = approved;
      return staticCdnAssets(unitId, {
        audio: flags.audio !== false,
        video: !videoBlocked && Boolean(flags.video),
        slides: flags.slides !== false,
        videoFile: deliveryVideoFile(flags),
      });
    }
    if (approved && ready.partial[unitId]) {
      const flags = approved;
      return staticCdnAssets(unitId, {
        audio: Boolean(flags.audio),
        video: !videoBlocked && Boolean(flags.video),
        slides: Boolean(flags.slides),
        videoFile: deliveryVideoFile(flags),
      });
    }
    if (!videoBlocked && (remoteLecture || remoteVideo)) {
      const v = remoteVideo || remoteLecture;
      return {
        ...emptyAssets(unitId),
        lectureVideo: v,
        video: v,
        hasAnyMedia: true,
        hasExtendedMedia: true,
      };
    }
    return emptyAssets(unitId);
  }

  const lessonPdf =
    safePublicMediaUrl(publicUrls.lesson_pdf) || firstExisting(dir, unitId, ["lesson.pdf"]);
  let lessonHtml = firstExisting(dir, unitId, ["lesson.html"]);
  // slides.html（ブラウザデッキ）は配信しない。slides.pdf のみ。

  // スライドPDF（公開名 slides.pdf を優先。内部名 nlm_* も解決）
  let slidesPdf = approved
    ? safePublicMediaUrl(publicUrls.slides_pdf) || firstExisting(dir, unitId, ["slides.pdf", "nlm_slides.pdf", "slides_nlm.pdf"])
    : null;

  // 音声: 講義音声を優先
  let audio = approved
    ? safePublicMediaUrl(publicUrls.audio) || firstExisting(dir, unitId, [
      "audio.m4a",
      "audio.mp3",
      "nlm_audio.m4a",
      "audio_nlm.m4a",
      "audio_unit.m4a",
    ])
    : null;

  // 動画: サイト内 mp4 本線（配信名 video.mp4 優先）→ remote フォールバック
  const localMp4 = approved?.video === "nlm_video.mp4"
    ? firstExisting(dir, unitId, ["nlm_video.mp4"])
    : null;
  let video = videoBlocked
    ? null
    : localMp4 || (approved ? remoteVideo || remoteLecture : null);
  // 二重表示しないよう lecture は video と同じ主ソースに揃える
  let lectureVideo = video;

  const quizJsonPath = firstExistingPath(dir, ["quiz.json", "nlm_quiz.json"]);
  const quizMd =
    safePublicMediaUrl(publicUrls.quiz_md) ||
    firstExisting(dir, unitId, ["quiz.md", "nlm_quiz.md"]);

  // Vercel: ディレクトリや manifest だけ残り、mp4 が serverless FS に無いことが多い
  // → media-ready / 無料枠は CDN 固定パスで埋める
  const ready = readMediaReady();
  const readyFlags = ready.complete[unitId] || ready.partial[unitId];
  if (approved && (isFreeUnit(unitId) || readyFlags)) {
    const cdn = staticCdnAssets(unitId, {
      audio: approved.audio !== false,
      video: !videoBlocked && Boolean(approved.video),
      slides: approved.slides !== false,
      videoFile: deliveryVideoFile(approved),
    });
    // free complete always has full pack
    if (isFreeUnit(unitId) || ready.complete[unitId]) {
      const full = staticCdnAssets(unitId, {
        audio: approved.audio !== false,
        video: !videoBlocked && Boolean(approved.video),
        slides: approved.slides !== false,
        videoFile: deliveryVideoFile(approved),
      });
      lessonHtml = lessonHtml || full.lessonHtml;
      slidesPdf = slidesPdf || full.slidesPdf;
      audio = audio || full.audio;
      if (!video) {
        video = full.video;
        lectureVideo = full.video;
      }
    } else {
      lessonHtml = lessonHtml || cdn.lessonHtml;
      slidesPdf = slidesPdf || cdn.slidesPdf;
      audio = audio || cdn.audio;
      if (!video && cdn.video) {
        video = cdn.video;
        lectureVideo = cdn.video;
      }
    }
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
