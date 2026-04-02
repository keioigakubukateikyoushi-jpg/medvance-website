"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ExamType,
  Subject,
  Grade,
  TargetType,
  ScienceCombo,
  EXAM_INFO,
  BAND_INFO,
  TARGET_INFO,
  SUBJECT_DATA,
  OVERALL_COMMENTS,
  getBand,
  normalize,
  getGapComment,
  generateTimeline,
  Band,
} from "@/lib/moshi-data";

const GRADES: { value: Grade; label: string }[] = [
  { value: "chu", label: "中学生" },
  { value: "ko1", label: "高校1年生" },
  { value: "ko2", label: "高校2年生" },
  { value: "ko3", label: "高校3年生" },
  { value: "ronin", label: "浪人生" },
];

const EXAM_TYPES: { value: ExamType; label: string }[] = Object.entries(EXAM_INFO).map(
  ([value, info]) => ({ value: value as ExamType, label: info.label })
);

const TARGETS: { value: TargetType; label: string }[] = Object.entries(TARGET_INFO).map(
  ([value, info]) => ({ value: value as TargetType, label: info.label })
);

const SCIENCE_COMBOS: { value: ScienceCombo; label: string }[] = [
  { value: "phys_chem", label: "物理・化学" },
  { value: "chem_bio", label: "化学・生物" },
  { value: "phys_bio", label: "物理・生物" },
];

type ScoreInputs = {
  english: string;
  math: string;
  science1: string;
  science2: string;
};

type Result = {
  examLabel: string;
  examNote: string;
  subjects: {
    subject: Subject;
    label: string;
    raw: number;
    norm: number;
    band: Band;
  }[];
  avgNorm: number;
  avgBand: Band;
  overallComment: string;
  gapComment: string;
  timeline: ReturnType<typeof generateTimeline>;
  weakest: Subject | null;
  target: TargetType;
  grade: Grade;
};

function getSubjectsFromCombo(combo: ScienceCombo): [Subject, Subject] {
  if (combo === "phys_chem") return ["physics", "chemistry"];
  if (combo === "chem_bio") return ["chemistry", "biology"];
  return ["physics", "biology"];
}

export default function MoshiToolPage() {
  const [grade, setGrade] = useState<Grade>("ko3");
  const [examType, setExamType] = useState<ExamType>("kawaijuku_kijutsu");
  const [scienceCombo, setScienceCombo] = useState<ScienceCombo>("phys_chem");
  const [target, setTarget] = useState<TargetType>("upper_private");
  const [scores, setScores] = useState<ScoreInputs>({ english: "", math: "", science1: "", science2: "" });
  const [result, setResult] = useState<Result | null>(null);
  const [errors, setErrors] = useState<Partial<ScoreInputs>>({});

  const [s1, s2] = getSubjectsFromCombo(scienceCombo);

  const validate = (): boolean => {
    const errs: Partial<ScoreInputs> = {};
    (["english", "math", "science1", "science2"] as const).forEach((k) => {
      const v = Number(scores[k]);
      if (!scores[k] || isNaN(v) || v < 20 || v > 80) {
        errs[k] = "20〜80で入力してください";
      }
    });
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleAnalyze = () => {
    if (!validate()) return;

    const rawEn = Number(scores.english);
    const rawMath = Number(scores.math);
    const rawS1 = Number(scores.science1);
    const rawS2 = Number(scores.science2);

    const normEn = normalize(rawEn, examType);
    const normMath = normalize(rawMath, examType);
    const normS1 = normalize(rawS1, examType);
    const normS2 = normalize(rawS2, examType);

    const subjectResults: Result["subjects"] = [
      { subject: "english", label: SUBJECT_DATA.english.label, raw: rawEn, norm: normEn, band: getBand(normEn) },
      { subject: "math", label: SUBJECT_DATA.math.label, raw: rawMath, norm: normMath, band: getBand(normMath) },
      { subject: s1, label: SUBJECT_DATA[s1].label, raw: rawS1, norm: normS1, band: getBand(normS1) },
      { subject: s2, label: SUBJECT_DATA[s2].label, raw: rawS2, norm: normS2, band: getBand(normS2) },
    ];

    const avgNorm = Math.round((normEn + normMath + normS1 + normS2) / 4 * 10) / 10;
    const avgBand = getBand(avgNorm);

    const bandRank: Record<Band, number> = { E: 0, D: 1, C: 2, B: 3, A: 4, S: 5 };
    const weakest = subjectResults.reduce((a, b) =>
      bandRank[a.band] <= bandRank[b.band] ? a : b
    );

    const timeline = generateTimeline(grade, avgBand, target, weakest.subject);

    setResult({
      examLabel: EXAM_INFO[examType].label,
      examNote: EXAM_INFO[examType].note,
      subjects: subjectResults,
      avgNorm,
      avgBand,
      overallComment: OVERALL_COMMENTS[avgBand],
      gapComment: getGapComment(avgBand, target),
      timeline,
      weakest: weakest.subject,
      target,
      grade,
    });

    setTimeout(() => {
      document.getElementById("result-section")?.scrollIntoView({ behavior: "smooth" });
    }, 50);
  };

  const labelOf = (s: Subject) => SUBJECT_DATA[s].label;

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div style={{ backgroundColor: "#0c1a33" }} className="py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-4 text-xs font-semibold" style={{ backgroundColor: "rgba(201,146,42,0.15)", color: "#c9922a", border: "1px solid rgba(201,146,42,0.4)" }}>
            <span>🤖</span>
            <span>AI Mock Exam Analysis Tool</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: "'Noto Serif JP', serif" }}>
            AI模試偏差値 自動分析ツール
          </h1>
          <p className="text-sm mb-2" style={{ color: "rgba(255,255,255,0.8)" }}>
            偏差値を入力するだけで、AIが学習ルートを即時生成します
          </p>
          <p className="text-xs" style={{ color: "rgba(255,255,255,0.45)" }}>
            模試の難易度補正・6段階バンド評価・参考書レコメンド・タイムライン設計まで自動。無料・登録不要。
          </p>
        </div>
      </div>

      {/* Form */}
      <div className="py-12 px-4" style={{ backgroundColor: "#f7f5f0" }}>
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-2xl p-8" style={{ border: "1px solid #e5e1d8" }}>
            <h2 className="text-lg font-bold mb-6" style={{ color: "#0c1a33", fontFamily: "'Noto Serif JP', serif" }}>
              情報を入力する
            </h2>

            {/* Grade */}
            <div className="mb-5">
              <label className="block text-sm font-semibold mb-2" style={{ color: "#0c1a33" }}>学年</label>
              <div className="flex flex-wrap gap-2">
                {GRADES.map((g) => (
                  <button
                    key={g.value}
                    onClick={() => setGrade(g.value)}
                    className="px-4 py-2 rounded-lg text-sm font-medium transition-all"
                    style={{
                      backgroundColor: grade === g.value ? "#0c1a33" : "#f7f5f0",
                      color: grade === g.value ? "#fff" : "#4b5563",
                      border: grade === g.value ? "2px solid #0c1a33" : "2px solid #e5e1d8",
                    }}
                  >
                    {g.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Exam Type */}
            <div className="mb-5">
              <label className="block text-sm font-semibold mb-2" style={{ color: "#0c1a33" }}>受験した模試</label>
              <select
                value={examType}
                onChange={(e) => setExamType(e.target.value as ExamType)}
                className="w-full rounded-lg px-3 py-2.5 text-sm"
                style={{ border: "1px solid #d1d5db", color: "#1f2937", backgroundColor: "#fff" }}
              >
                {EXAM_TYPES.map((e) => (
                  <option key={e.value} value={e.value}>{e.label}</option>
                ))}
              </select>
              {examType && (
                <p className="text-xs mt-1.5" style={{ color: "#9ca3af" }}>{EXAM_INFO[examType].note}</p>
              )}
            </div>

            {/* Science Combo */}
            <div className="mb-5">
              <label className="block text-sm font-semibold mb-2" style={{ color: "#0c1a33" }}>理科の選択科目</label>
              <div className="flex flex-wrap gap-2">
                {SCIENCE_COMBOS.map((sc) => (
                  <button
                    key={sc.value}
                    onClick={() => setScienceCombo(sc.value)}
                    className="px-4 py-2 rounded-lg text-sm font-medium transition-all"
                    style={{
                      backgroundColor: scienceCombo === sc.value ? "#0c1a33" : "#f7f5f0",
                      color: scienceCombo === sc.value ? "#fff" : "#4b5563",
                      border: scienceCombo === sc.value ? "2px solid #0c1a33" : "2px solid #e5e1d8",
                    }}
                  >
                    {sc.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Target */}
            <div className="mb-6">
              <label className="block text-sm font-semibold mb-2" style={{ color: "#0c1a33" }}>志望校の種類</label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {TARGETS.map((t) => (
                  <button
                    key={t.value}
                    onClick={() => setTarget(t.value)}
                    className="px-4 py-3 rounded-lg text-sm font-medium text-left transition-all"
                    style={{
                      backgroundColor: target === t.value ? "#0c1a33" : "#f7f5f0",
                      color: target === t.value ? "#fff" : "#4b5563",
                      border: target === t.value ? "2px solid #0c1a33" : "2px solid #e5e1d8",
                    }}
                  >
                    {t.label}
                  </button>
                ))}
              </div>
              {target && (
                <p className="text-xs mt-1.5" style={{ color: "#9ca3af" }}>{TARGET_INFO[target].detail}</p>
              )}
            </div>

            {/* Score Inputs */}
            <div className="mb-6">
              <label className="block text-sm font-semibold mb-3" style={{ color: "#0c1a33" }}>
                各科目の偏差値（20〜80）
              </label>
              <div className="grid grid-cols-2 gap-4">
                {(["english", "math", "science1", "science2"] as const).map((key, i) => {
                  const labels = ["英語", "数学", labelOf(s1), labelOf(s2)];
                  return (
                    <div key={key}>
                      <label className="block text-xs font-medium mb-1.5" style={{ color: "#6b7280" }}>
                        {labels[i]}
                      </label>
                      <input
                        type="number"
                        min={20}
                        max={80}
                        placeholder="例：57"
                        value={scores[key]}
                        onChange={(e) => setScores({ ...scores, [key]: e.target.value })}
                        className="w-full rounded-lg px-3 py-2.5 text-sm"
                        style={{
                          border: errors[key] ? "1px solid #ef4444" : "1px solid #d1d5db",
                          color: "#1f2937",
                        }}
                      />
                      {errors[key] && (
                        <p className="text-xs mt-1" style={{ color: "#ef4444" }}>{errors[key]}</p>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            <button
              onClick={handleAnalyze}
              className="w-full py-4 rounded-xl text-white font-bold text-base transition-opacity hover:opacity-90"
              style={{ backgroundColor: "#c9922a" }}
            >
              分析する
            </button>
          </div>
        </div>
      </div>

      {/* Result */}
      {result && (
        <div id="result-section" className="py-12 px-4 bg-white">
          <div className="max-w-3xl mx-auto space-y-8">

            {/* 模試補正の説明 */}
            <div className="p-4 rounded-xl text-sm" style={{ backgroundColor: "#fffbeb", border: "1px solid #fcd34d" }}>
              <span className="font-semibold" style={{ color: "#92400e" }}>補正について：</span>
              <span style={{ color: "#78350f" }}>
                {result.examLabel}は河合塾全統記述模試比で{EXAM_INFO[examType].offset > 0 ? `+${EXAM_INFO[examType].offset}` : EXAM_INFO[examType].offset === 0 ? "補正なし（基準模試）" : EXAM_INFO[examType].offset}の補正を適用しています。{EXAM_INFO[examType].note}
              </span>
            </div>

            {/* 科目別バンド */}
            <div>
              <h2 className="text-xl font-bold mb-5" style={{ color: "#0c1a33", fontFamily: "'Noto Serif JP', serif" }}>
                科目別分析結果
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {result.subjects.map((s) => {
                  const bi = BAND_INFO[s.band];
                  const isWeakest = s.subject === result.weakest;
                  return (
                    <div
                      key={s.subject}
                      className="p-5 rounded-xl"
                      style={{ backgroundColor: bi.bg, border: `2px solid ${isWeakest ? "#f87171" : bi.border}` }}
                    >
                      <div className="flex items-center justify-between mb-3">
                        <span className="font-bold text-sm" style={{ color: "#1f2937" }}>{s.label}</span>
                        <div className="flex items-center gap-2">
                          {isWeakest && (
                            <span className="text-xs font-bold px-2 py-0.5 rounded-full" style={{ backgroundColor: "#fee2e2", color: "#dc2626" }}>
                              最弱点
                            </span>
                          )}
                          <span
                            className="text-lg font-bold w-8 h-8 rounded-full flex items-center justify-center"
                            style={{ backgroundColor: bi.color, color: "#fff" }}
                          >
                            {s.band}
                          </span>
                        </div>
                      </div>
                      <p className="text-xs mb-2" style={{ color: "#6b7280" }}>
                        入力偏差値 {s.raw} → 補正後 <span className="font-bold" style={{ color: "#1f2937" }}>{s.norm}</span>　{bi.desc}（{bi.range}）
                      </p>
                      <p className="text-sm leading-relaxed" style={{ color: "#374151" }}>
                        {SUBJECT_DATA[s.subject].entries[s.band].comment}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* 総合評価 */}
            <div className="p-6 rounded-2xl" style={{ backgroundColor: BAND_INFO[result.avgBand].bg, border: `2px solid ${BAND_INFO[result.avgBand].border}` }}>
              <div className="flex items-center gap-3 mb-4">
                <span
                  className="text-2xl font-bold w-12 h-12 rounded-full flex items-center justify-center text-white"
                  style={{ backgroundColor: BAND_INFO[result.avgBand].color }}
                >
                  {result.avgBand}
                </span>
                <div>
                  <p className="font-bold" style={{ color: "#0c1a33" }}>総合バンド {result.avgBand}　補正後平均偏差値 {result.avgNorm}</p>
                  <p className="text-xs" style={{ color: "#6b7280" }}>{BAND_INFO[result.avgBand].desc}</p>
                </div>
              </div>
              <p className="text-sm leading-relaxed mb-4" style={{ color: "#374151" }}>{result.overallComment}</p>
              <div className="p-4 rounded-xl" style={{ backgroundColor: "rgba(0,0,0,0.04)" }}>
                <p className="text-xs font-semibold mb-1" style={{ color: "#6b7280" }}>
                  志望校（{TARGET_INFO[result.target].label}）との差分
                </p>
                <p className="text-sm leading-relaxed" style={{ color: "#1f2937" }}>{result.gapComment}</p>
              </div>
            </div>

            {/* 優先対策科目の参考書 */}
            {result.weakest && (
              <div>
                <h2 className="text-xl font-bold mb-2" style={{ color: "#0c1a33", fontFamily: "'Noto Serif JP', serif" }}>
                  優先対策：{labelOf(result.weakest)}の学習ルート
                </h2>
                <p className="text-sm mb-5" style={{ color: "#6b7280" }}>
                  最も偏差値が低い{labelOf(result.weakest)}の参考書・問題集を優先的にご紹介します
                </p>
                {(() => {
                  const entry = SUBJECT_DATA[result.weakest!].entries[result.subjects.find(s => s.subject === result.weakest)!.band];
                  return (
                    <div className="space-y-4">
                      {entry.currentBooks.length > 0 && (
                        <div className="p-5 rounded-xl" style={{ backgroundColor: "#f7f5f0", border: "1px solid #e5e1d8" }}>
                          <p className="text-xs font-bold mb-3" style={{ color: "#c9922a" }}>今すぐ取り組む参考書</p>
                          <div className="space-y-3">
                            {entry.currentBooks.map((book, i) => (
                              <div key={i} className="flex gap-3">
                                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-white flex items-center justify-center text-xs font-bold" style={{ color: "#0c1a33", border: "1px solid #d1d5db" }}>{i + 1}</span>
                                <div>
                                  <p className="text-sm font-semibold" style={{ color: "#1f2937" }}>{book.title}</p>
                                  <p className="text-xs" style={{ color: "#9ca3af" }}>{book.note}</p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                      {entry.nextBooks.length > 0 && (
                        <div className="p-5 rounded-xl" style={{ backgroundColor: "#eff6ff", border: "1px solid #93c5fd" }}>
                          <p className="text-xs font-bold mb-3" style={{ color: "#1d4ed8" }}>次のステップの参考書</p>
                          <div className="space-y-3">
                            {entry.nextBooks.map((book, i) => (
                              <div key={i} className="flex gap-3">
                                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-white flex items-center justify-center text-xs font-bold" style={{ color: "#1d4ed8", border: "1px solid #93c5fd" }}>{i + 1}</span>
                                <div>
                                  <p className="text-sm font-semibold" style={{ color: "#1e3a8a" }}>{book.title}</p>
                                  <p className="text-xs" style={{ color: "#6b7280" }}>{book.note}</p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })()}
              </div>
            )}

            {/* 全科目の参考書（折りたたみ表示用に簡易表示） */}
            <div>
              <h2 className="text-xl font-bold mb-5" style={{ color: "#0c1a33", fontFamily: "'Noto Serif JP', serif" }}>
                全科目の学習ルート
              </h2>
              <div className="space-y-4">
                {result.subjects.map((s) => {
                  const entry = SUBJECT_DATA[s.subject].entries[s.band];
                  const bi = BAND_INFO[s.band];
                  return (
                    <div key={s.subject} className="rounded-xl overflow-hidden" style={{ border: "1px solid #e5e1d8" }}>
                      <div className="px-5 py-3 flex items-center gap-3" style={{ backgroundColor: "#f7f5f0" }}>
                        <span className="text-sm font-bold w-6 h-6 rounded-full flex items-center justify-center text-white text-xs" style={{ backgroundColor: bi.color }}>{s.band}</span>
                        <span className="font-semibold text-sm" style={{ color: "#0c1a33" }}>{s.label}</span>
                        <span className="text-xs" style={{ color: "#9ca3af" }}>補正偏差値 {s.norm}</span>
                      </div>
                      <div className="p-5 bg-white">
                        {entry.currentBooks.length > 0 && (
                          <div className="mb-3">
                            <p className="text-xs font-bold mb-2" style={{ color: "#c9922a" }}>今すぐ取り組む</p>
                            <div className="space-y-1.5">
                              {entry.currentBooks.map((book, i) => (
                                <div key={i}>
                                  <span className="text-sm font-medium" style={{ color: "#1f2937" }}>{book.title}</span>
                                  <span className="text-xs ml-2" style={{ color: "#9ca3af" }}>{book.note}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                        {entry.nextBooks.length > 0 && (
                          <div>
                            <p className="text-xs font-bold mb-2" style={{ color: "#1d4ed8" }}>次のステップ</p>
                            <div className="space-y-1.5">
                              {entry.nextBooks.map((book, i) => (
                                <div key={i}>
                                  <span className="text-sm font-medium" style={{ color: "#1e3a8a" }}>{book.title}</span>
                                  <span className="text-xs ml-2" style={{ color: "#9ca3af" }}>{book.note}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* タイムライン */}
            <div>
              <h2 className="text-xl font-bold mb-5" style={{ color: "#0c1a33", fontFamily: "'Noto Serif JP', serif" }}>
                学習タイムライン
              </h2>
              <div className="space-y-4">
                {result.timeline.map((phase, i) => {
                  const priorityColor = phase.priority === "最高" ? { bg: "#fef2f2", border: "#fca5a5", label: "#dc2626" } :
                    phase.priority === "高" ? { bg: "#fffbeb", border: "#fcd34d", label: "#d97706" } :
                    { bg: "#f0fdf4", border: "#86efac", label: "#16a34a" };
                  return (
                    <div key={i} className="flex gap-4 p-5 rounded-xl" style={{ backgroundColor: priorityColor.bg, border: `1px solid ${priorityColor.border}` }}>
                      <div className="flex-shrink-0">
                        <span className="text-xs font-bold px-2 py-1 rounded-full" style={{ backgroundColor: priorityColor.label, color: "#fff" }}>
                          {phase.priority}
                        </span>
                      </div>
                      <div>
                        <p className="text-xs font-semibold mb-1" style={{ color: "#6b7280" }}>{phase.period}</p>
                        <p className="font-bold text-sm mb-2" style={{ color: "#1f2937" }}>{phase.title}</p>
                        <p className="text-sm leading-relaxed" style={{ color: "#374151" }}>{phase.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* CTA */}
            <div className="p-8 rounded-2xl text-center" style={{ backgroundColor: "#0c1a33" }}>
              <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#c9922a" }}>Next Step</p>
              <p className="text-lg font-bold text-white mb-3" style={{ fontFamily: "'Noto Serif JP', serif" }}>
                この分析結果を持って、無料相談へ
              </p>
              <p className="text-sm mb-6" style={{ color: "rgba(255,255,255,0.65)" }}>
                ツールが出した学習ルートをベースに、現役慶應医学部生の講師があなたの状況に合わせてさらに詳しく分析します。
              </p>
              <Link
                href="/contact"
                className="inline-block px-8 py-3.5 text-white font-bold text-sm rounded-lg hover:opacity-90 transition-opacity"
                style={{ backgroundColor: "#c9922a" }}
              >
                無料相談・お問い合わせ
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Back link */}
      <div className="py-8 px-4 text-center" style={{ backgroundColor: "#f7f5f0" }}>
        <Link href="/services/moshi" className="text-sm hover:opacity-80" style={{ color: "#6b7280" }}>
          ← 模試分析サービスページへ戻る
        </Link>
      </div>
    </div>
  );
}
