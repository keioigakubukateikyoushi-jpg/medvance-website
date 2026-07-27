/**
 * Medvance NotebookLM generation profile.
 * Read by the manifest builder and the daily factory.
 * Canon: Part curriculum + canonical lesson/storyboard/slide/quiz sources.
 */

export const PROFILE_VERSION = "medvance-foundation-v1";

export const OUTPUT_PROFILE = Object.freeze({
  video: {
    artifactType: "video",
    format: "explainer",
    style: "whiteboard",
    language: "ja",
    target: "5〜9分を設計容量とし、内容完結を優先",
  },
  audio: {
    artifactType: "audio",
    format: "deep_dive",
    length: "default",
    language: "ja",
  },
  slides: {
    artifactType: "slide_deck",
    format: "detailed_deck",
    length: "default",
    language: "ja",
  },
  quiz: {
    artifactType: "quiz",
    count: 6,
    difficulty: 3,
    language: "ja",
  },
});

const GROUNDING =
  "Use only uploaded sources. Do not invent statistics, quotes, names, or examples not in the sources.";

function context(loc) {
  const u = loc.unit;
  const parent = u.parentUnitId
    ? `親単元 ${u.parentUnitId}「${u.parentTitle}」の Part ${u.part}。`
    : "";
  return [
    `Medvance 基礎講座 ${u.id}「${u.title}」。`,
    parent,
    `科目:${loc.subject}。章:${u.chapter}。到達目標:${u.goal}。`,
    `扱う範囲:${(u.scope_in || [u.goal]).join("、")}。`,
    `扱わない範囲:${(u.scope_out || ["後続Part"]).join("、")}。`,
  ]
    .filter(Boolean)
    .join(" ");
}

export function buildArtifactPrompts(loc) {
  const c = context(loc);
  const common = [
    c,
    "lesson と storyboard が唯一の正本。storyboard の順序を守る。",
    "別Partの内容を先取りせず、このPartの中心技能1つを完結させる。",
    "日本語で、定義・手順・例題・典型誤答・到達確認を具体的に扱う。",
    "台本にない例題、数値、固有名詞、入試年度、統計、引用を作らない。",
    GROUNDING,
  ].join(" ");

  return {
    common,
    video: [
      c,
      "あなたは医学部・難関大受験のプロ講師。Medvanceの板書型授業動画を作る。",
      "lesson と storyboard が唯一の正本で、台本ブロック順を厳守する。",
      "構成は、冒頭の到達目標、正確な定義、番号付き手順、詳解例題1問、典型誤答1つ、自力確認1問、到達チェック。",
      "自己紹介、宣伝、雑談、尺合わせの水増しは禁止。画面文字とナレーションは自然な日本語にする。",
      "5〜9分を設計容量とするが、時間合わせより中心技能の完結を優先し、別概念は次Partへ送る。",
      GROUNDING,
    ].join(" "),
    audio: [
      common,
      "音声は deep_dive。講師と学習者の対話で、なぜその手順になるか、誤答の原因、自己確認の順に説明する。",
      "前置きと雑談を省き、耳だけで式・条件・結論を追えるよう明示する。",
    ].join(" "),
    slides: [
      common,
      "詳細スライド教材を作る。1枚1論点とし、到達目標、定義、手順、例題の途中過程、誤答比較、演習、まとめを順に置く。",
      "式・図・表を優先し、装飾や長文で情報を埋めない。",
    ].join(" "),
    quiz: [
      common,
      "確認クイズを6問作る。用語確認だけに偏らず、手順選択、途中過程、誤答診断、短い適用を含める。",
      "正答と解説は正本の根拠に結びつけ、範囲外の発展問題を入れない。",
    ].join(" "),
  };
}
