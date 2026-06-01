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
        errs[k] = "20〜80の偏差値で入力してください";
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
    <div className="min-h-screen" style={{ background: "linear-gradient(135deg, #050a14 0%, #0c1a33 50%, #03060c 100%)", color: "#f3f4f6" }}>
      {/* Hero Header */}
      <div className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#d4af37_1px,transparent_1px)] [background-size:32px_32px] pointer-events-none" />
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 text-xs font-bold shadow-lg" style={{ backgroundColor: "rgba(212,175,55,0.12)", color: "#d4af37", border: "1px solid rgba(212,175,55,0.35)", backdropFilter: "blur(8px)" }}>
            <span>🤖</span>
            <span>現役慶應医学部生 開発AI分析システム</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight" style={{ fontFamily: "var(--font-noto-serif)", textShadow: "0 0 20px rgba(255,255,255,0.05)" }}>
            現役慶應医学部生が開発した<br className="sm:hidden" />
            <span style={{ color: "#d4af37" }}>AI模試偏差値 自動分析ツール</span>
          </h1>
          <p className="text-sm md:text-base max-w-2xl mx-auto leading-relaxed" style={{ color: "rgba(243,244,246,0.8)" }}>
            医学部受験を勝ち抜いた慶應医学部生が、独自の補正・判定ロジックを設計。駿台・河合塾・進研模試などの難易度を自動補正し、科目別6段階バンド評価、おすすめの参考書、志望校との距離を可視化したタイムラインを即座に生成します。
          </p>
        </div>
      </div>

      {/* Form Input Section */}
      <div className="py-12 px-4 relative">
        <div className="max-w-2xl mx-auto">
          <div className="rounded-3xl p-8 backdrop-blur-xl transition-all duration-300" style={{ backgroundColor: "rgba(255, 255, 255, 0.02)", border: "1px solid rgba(255, 255, 255, 0.07)", boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.04)" }}>
            <h2 className="text-xl font-bold mb-8 flex items-center gap-2.5" style={{ color: "#fff", fontFamily: "var(--font-noto-serif)" }}>
              <span className="w-1.5 h-6 rounded-full" style={{ backgroundColor: "#d4af37" }} />
              志望校・模試・現在の偏差値を入力
            </h2>

            {/* Grade */}
            <div className="mb-6">
              <label className="block text-sm font-semibold mb-3 text-gray-300">学年</label>
              <div className="flex flex-wrap gap-2">
                {GRADES.map((g) => (
                  <button
                    key={g.value}
                    onClick={() => setGrade(g.value)}
                    className="px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200"
                    style={{
                      backgroundColor: grade === g.value ? "#d4af37" : "rgba(255, 255, 255, 0.04)",
                      color: grade === g.value ? "#060b13" : "#d1d5db",
                      border: grade === g.value ? "1px solid #d4af37" : "1px solid rgba(255,255,255,0.08)",
                      boxShadow: grade === g.value ? "0 0 15px rgba(212,175,55,0.3)" : "none"
                    }}
                  >
                    {g.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Exam Type */}
            <div className="mb-6">
              <label className="block text-sm font-semibold mb-3 text-gray-300">受験した模試の種類</label>
              <select
                value={examType}
                onChange={(e) => setExamType(e.target.value as ExamType)}
                className="w-full rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#d4af37] focus:border-[#d4af37] transition-all"
                style={{ border: "1px solid rgba(255, 255, 255, 0.1)", color: "#fff", backgroundColor: "#091222" }}
              >
                {EXAM_TYPES.map((e) => (
                  <option key={e.value} value={e.value} style={{ backgroundColor: "#091222" }}>{e.label}</option>
                ))}
              </select>
              {examType && (
                <p className="text-xs mt-2" style={{ color: "rgba(255,255,255,0.4)" }}>💡 {EXAM_INFO[examType].note}</p>
              )}
            </div>

            {/* Science Combo */}
            <div className="mb-6">
              <label className="block text-sm font-semibold mb-3 text-gray-300">理科の選択科目</label>
              <div className="flex flex-wrap gap-2">
                {SCIENCE_COMBOS.map((sc) => (
                  <button
                    key={sc.value}
                    onClick={() => setScienceCombo(sc.value)}
                    className="px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200"
                    style={{
                      backgroundColor: scienceCombo === sc.value ? "#d4af37" : "rgba(255, 255, 255, 0.04)",
                      color: scienceCombo === sc.value ? "#060b13" : "#d1d5db",
                      border: scienceCombo === sc.value ? "1px solid #d4af37" : "1px solid rgba(255,255,255,0.08)",
                      boxShadow: scienceCombo === sc.value ? "0 0 15px rgba(212,175,55,0.3)" : "none"
                    }}
                  >
                    {sc.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Target */}
            <div className="mb-8">
              <label className="block text-sm font-semibold mb-3 text-gray-300">第一志望校</label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {TARGETS.map((t) => (
                  <button
                    key={t.value}
                    onClick={() => setTarget(t.value)}
                    className="px-4 py-3 rounded-xl text-xs font-semibold text-left transition-all duration-200"
                    style={{
                      backgroundColor: target === t.value ? "#d4af37" : "rgba(255, 255, 255, 0.04)",
                      color: target === t.value ? "#060b13" : "#d1d5db",
                      border: target === t.value ? "1px solid #d4af37" : "1px solid rgba(255,255,255,0.08)",
                      boxShadow: target === t.value ? "0 0 15px rgba(212,175,55,0.35)" : "none"
                    }}
                  >
                    {t.label}
                  </button>
                ))}
              </div>
              {target && (
                <p className="text-xs mt-2" style={{ color: "rgba(255,255,255,0.4)" }}>🔍 {TARGET_INFO[target].detail}</p>
              )}
            </div>

            {/* Score Inputs */}
            <div className="mb-8">
              <label className="block text-sm font-semibold mb-4 text-gray-300">
                各科目の偏差値（20〜80）を半角で入力
              </label>
              <div className="grid grid-cols-2 gap-4">
                {(["english", "math", "science1", "science2"] as const).map((key, i) => {
                  const labels = ["英語", "数学", labelOf(s1), labelOf(s2)];
                  return (
                    <div key={key}>
                      <label className="block text-xs font-semibold mb-2 text-gray-400">
                        {labels[i]}
                      </label>
                      <input
                        type="number"
                        min={20}
                        max={80}
                        placeholder="例：58"
                        value={scores[key]}
                        onChange={(e) => setScores({ ...scores, [key]: e.target.value })}
                        className="w-full rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#d4af37] focus:border-[#d4af37] transition-all"
                        style={{
                          border: errors[key] ? "1px solid #ef4444" : "1px solid rgba(255, 255, 255, 0.1)",
                          color: "#fff",
                          backgroundColor: "#091222"
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
              className="w-full py-4 rounded-xl text-[#060b13] font-extrabold text-base transition-all duration-300 hover:scale-[1.01]"
              style={{
                background: "linear-gradient(90deg, #d4af37 0%, #f9e5a2 100%)",
                boxShadow: "0 8px 30px rgba(212,175,55,0.25)"
              }}
            >
              慶應医学部生設計AI分析を実行する（無料）
            </button>
          </div>
        </div>
      </div>

      {/* Result Section */}
      {result && (
        <div id="result-section" className="py-16 px-4 relative">
          <div className="max-w-3xl mx-auto space-y-12">
            
            {/* Header */}
            <div className="text-center">
              <h2 className="text-2xl md:text-4xl font-bold text-white mb-2" style={{ fontFamily: "var(--font-noto-serif)" }}>
                AI精密判定ダッシュボード
              </h2>
              <p className="text-xs text-gray-400">
                本判定は、河合塾全統記述模試の偏差値分布スケールに難易度を正規化（難易度補正）して算出されています。
              </p>
            </div>

            {/* 模試補正解説 */}
            <div className="p-5 rounded-2xl text-sm leading-relaxed backdrop-blur-md" style={{ backgroundColor: "rgba(212, 175, 55, 0.05)", border: "1px solid rgba(212, 175, 55, 0.2)", color: "#f9e5a2" }}>
              <span className="font-bold">⚠️ 模試難易度補正値：</span>
              <span>
                {result.examLabel}は、全統基準比で【{EXAM_INFO[examType].offset > 0 ? `+${EXAM_INFO[examType].offset}` : EXAM_INFO[examType].offset === 0 ? "補正なし" : EXAM_INFO[examType].offset}】の難易度差を補正処理しました。{EXAM_INFO[examType].note}
              </span>
            </div>

            {/* 総合判定カード */}
            <div className="p-8 rounded-3xl backdrop-blur-xl" style={{ backgroundColor: "rgba(255, 255, 255, 0.02)", border: "1px solid rgba(255, 255, 255, 0.08)", boxShadow: "0 20px 40px rgba(0, 0, 0, 0.4)" }}>
              <div className="flex flex-col sm:flex-row items-center gap-6 mb-6">
                <div
                  className="text-3xl font-extrabold w-16 h-16 rounded-full flex items-center justify-center text-white shadow-lg animate-pulse"
                  style={{ backgroundColor: BAND_INFO[result.avgBand].color, boxShadow: `0 0 25px ${BAND_INFO[result.avgBand].color}50` }}
                >
                  {result.avgBand}
                </div>
                <div className="text-center sm:text-left">
                  <p className="text-lg font-bold text-white leading-tight">
                    総合バンド評価：{result.avgBand}　［正規化平均偏差値 {result.avgNorm}］
                  </p>
                  <p className="text-xs font-medium mt-1.5" style={{ color: "#d4af37" }}>
                    判定カテゴリー：{BAND_INFO[result.avgBand].desc} ({BAND_INFO[result.avgBand].range})
                  </p>
                </div>
              </div>
              <p className="text-sm leading-relaxed mb-6 text-gray-300">{result.overallComment}</p>
              
              <div className="p-5 rounded-2xl" style={{ backgroundColor: "rgba(255, 255, 255, 0.03)", border: "1px solid rgba(255, 255, 255, 0.05)" }}>
                <p className="text-xs font-bold text-gray-400 mb-2">
                  📊 志望校（{TARGET_INFO[result.target].label}）合格への距離分析
                </p>
                <p className="text-sm leading-relaxed" style={{ color: "#fff" }}>{result.gapComment}</p>
              </div>
            </div>

            {/* 科目別分析結果 */}
            <div>
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2" style={{ color: "#fff", fontFamily: "var(--font-noto-serif)" }}>
                <span className="w-1.5 h-5 rounded-full" style={{ backgroundColor: "#d4af37" }} />
                科目別 偏差値補正・進捗度
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {result.subjects.map((s) => {
                  const bi = BAND_INFO[s.band];
                  const isWeakest = s.subject === result.weakest;
                  
                  // Visual Progress Bar calculation (deviation range from 35 to 75 represents 100%)
                  const progressPercent = Math.min(100, Math.max(0, ((s.norm - 35) / 40) * 100));

                  return (
                    <div
                      key={s.subject}
                      className="p-6 rounded-2xl backdrop-blur-md transition-all duration-300"
                      style={{
                        backgroundColor: "rgba(255, 255, 255, 0.02)",
                        border: isWeakest ? "1px solid rgba(239, 68, 68, 0.4)" : "1px solid rgba(255, 255, 255, 0.06)",
                        boxShadow: isWeakest ? "0 0 20px rgba(239, 68, 68, 0.05)" : "none"
                      }}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-bold text-sm text-white">{s.label}</span>
                        <div className="flex items-center gap-2">
                          {isWeakest && (
                            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-red-950 text-red-400 border border-red-800">
                              要対策科目
                            </span>
                          )}
                          <span
                            className="text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center text-white"
                            style={{ backgroundColor: bi.color }}
                          >
                            {s.band}
                          </span>
                        </div>
                      </div>
                      
                      <p className="text-[11px]" style={{ color: "rgba(243,244,246,0.5)" }}>
                        入力偏差値 {s.raw} ➡ 補正後 <span className="font-bold text-white">{s.norm}</span>　{bi.desc}
                      </p>

                      {/* glowing visual deviation meter */}
                      <div className="mt-3.5">
                        <div className="flex justify-between text-[9px] text-gray-500 mb-1">
                          <span>偏差値35 (基礎)</span>
                          <span style={{ color: isWeakest ? "#ef4444" : "#d4af37" }}>現在：{s.norm}</span>
                          <span>75 (最難関)</span>
                        </div>
                        <div className="w-full h-1.5 rounded-full overflow-hidden bg-white/5 relative">
                          <div
                            className="h-full rounded-full transition-all duration-1000 ease-out"
                            style={{
                              width: `${progressPercent}%`,
                              background: isWeakest ? "linear-gradient(90deg, #ef4444 0%, #b91c1c 100%)" : "linear-gradient(90deg, #d4af37 0%, #5b21b6 100%)",
                              boxShadow: isWeakest ? "0 0 10px rgba(239,68,68,0.5)" : "0 0 10px rgba(212,175,55,0.4)"
                            }}
                          />
                        </div>
                      </div>

                      <p className="text-xs leading-relaxed text-gray-400 mt-4 pt-3 border-t border-white/[0.04]">
                        {SUBJECT_DATA[s.subject].entries[s.band].comment}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* 優先対策参考書 */}
            {result.weakest && (
              <div>
                <h3 className="text-xl font-bold mb-2 flex items-center gap-2" style={{ color: "#fff", fontFamily: "var(--font-noto-serif)" }}>
                  <span className="w-1.5 h-5 rounded-full" style={{ backgroundColor: "#d4af37" }} />
                  優先対策：{labelOf(result.weakest)} の合格推奨参考書
                </h3>
                <p className="text-xs text-gray-400 mb-6">
                  最もスコアが低く、伸び代の大きい「{labelOf(result.weakest)}」から優先的に着手してください。
                </p>
                {(() => {
                  const entry = SUBJECT_DATA[result.weakest!].entries[result.subjects.find(s => s.subject === result.weakest)!.band];
                  return (
                    <div className="space-y-4">
                      {entry.currentBooks.length > 0 && (
                        <div className="p-6 rounded-2xl backdrop-blur-md" style={{ backgroundColor: "rgba(255, 255, 255, 0.02)", border: "1px solid rgba(255, 255, 255, 0.06)" }}>
                          <p className="text-xs font-bold mb-4 text-[#d4af37] flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37]" />
                            1. 今すぐ完璧にマスターすべき教材
                          </p>
                          <div className="space-y-4">
                            {entry.currentBooks.map((book, i) => (
                              <div key={i} className="flex gap-4">
                                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-white/5 flex items-center justify-center text-xs font-bold text-[#d4af37]" style={{ border: "1px solid rgba(212,175,55,0.2)" }}>{i + 1}</span>
                                <div>
                                  <p className="text-sm font-semibold text-white leading-snug">{book.title}</p>
                                  <p className="text-xs text-gray-400 mt-1 leading-relaxed">{book.note}</p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                      {entry.nextBooks.length > 0 && (
                        <div className="p-6 rounded-2xl backdrop-blur-md" style={{ backgroundColor: "rgba(255, 255, 255, 0.02)", border: "1px solid rgba(255, 255, 255, 0.06)" }}>
                          <p className="text-xs font-bold mb-4 text-blue-400 flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                            2. 基礎習得後にステップアップする発展教材
                          </p>
                          <div className="space-y-4">
                            {entry.nextBooks.map((book, i) => (
                              <div key={i} className="flex gap-4">
                                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-white/5 flex items-center justify-center text-xs font-bold text-blue-400" style={{ border: "1px solid rgba(96,165,250,0.2)" }}>{i + 1}</span>
                                <div>
                                  <p className="text-sm font-semibold text-white leading-snug">{book.title}</p>
                                  <p className="text-xs text-gray-400 mt-1 leading-relaxed">{book.note}</p>
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

            {/* 全科目の参考書 */}
            <div>
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2" style={{ color: "#fff", fontFamily: "var(--font-noto-serif)" }}>
                <span className="w-1.5 h-5 rounded-full" style={{ backgroundColor: "#d4af37" }} />
                全科目の合格推奨参考書・ルート
              </h3>
              <div className="space-y-4">
                {result.subjects.map((s) => {
                  const entry = SUBJECT_DATA[s.subject].entries[s.band];
                  const bi = BAND_INFO[s.band];
                  return (
                    <div key={s.subject} className="rounded-2xl overflow-hidden" style={{ border: "1px solid rgba(255, 255, 255, 0.06)", backgroundColor: "rgba(255, 255, 255, 0.01)" }}>
                      <div className="px-5 py-4.5 flex items-center gap-3" style={{ backgroundColor: "rgba(255, 255, 255, 0.02)", borderBottom: "1px solid rgba(255, 255, 255, 0.06)" }}>
                        <span className="text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center text-white" style={{ backgroundColor: bi.color }}>{s.band}</span>
                        <span className="font-bold text-sm text-white">{s.label}</span>
                        <span className="text-xs text-gray-500">補正後偏差値：{s.norm} ({bi.desc})</span>
                      </div>
                      <div className="p-6 space-y-4">
                        {entry.currentBooks.length > 0 && (
                          <div>
                            <p className="text-[10px] font-bold mb-2 text-[#d4af37] uppercase tracking-wider">▼ 今すぐ取り組む</p>
                            <div className="space-y-2">
                              {entry.currentBooks.map((book, i) => (
                                <div key={i} className="text-xs">
                                  <span className="font-semibold text-white">・ {book.title}</span>
                                  <span className="text-gray-400 ml-2">({book.note})</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                        {entry.nextBooks.length > 0 && (
                          <div>
                            <p className="text-[10px] font-bold mb-2 text-blue-400 uppercase tracking-wider">▼ 次のステップ</p>
                            <div className="space-y-2">
                              {entry.nextBooks.map((book, i) => (
                                <div key={i} className="text-xs">
                                  <span className="font-semibold text-white">・ {book.title}</span>
                                  <span className="text-gray-400 ml-2">({book.note})</span>
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
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2" style={{ color: "#fff", fontFamily: "var(--font-noto-serif)" }}>
                <span className="w-1.5 h-5 rounded-full" style={{ backgroundColor: "#d4af37" }} />
                合格逆算型 学習ロードマップ
              </h3>
              <div className="space-y-4">
                {result.timeline.map((phase, i) => {
                  const priorityColor = phase.priority === "最高" ? { bg: "rgba(239, 68, 68, 0.03)", border: "rgba(239, 68, 68, 0.15)", label: "#ef4444" } :
                    phase.priority === "高" ? { bg: "rgba(245, 158, 11, 0.03)", border: "rgba(245, 158, 11, 0.15)", label: "#f59e0b" } :
                    { bg: "rgba(16, 185, 129, 0.03)", border: "rgba(16, 185, 129, 0.15)", label: "#10b981" };
                  return (
                    <div key={i} className="flex gap-4 p-6 rounded-2xl backdrop-blur-md" style={{ backgroundColor: priorityColor.bg, border: `1px solid ${priorityColor.border}` }}>
                      <div className="flex-shrink-0">
                        <span className="text-[10px] font-extrabold px-2 py-1 rounded-md text-white" style={{ backgroundColor: priorityColor.label }}>
                          優先度：{phase.priority}
                        </span>
                      </div>
                      <div>
                        <p className="text-xs font-bold text-gray-500 mb-1">{phase.period}</p>
                        <p className="font-bold text-sm text-white mb-2 leading-snug">{phase.title}</p>
                        <p className="text-xs md:text-sm leading-relaxed text-gray-400">{phase.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* CTA */}
            <div className="p-8 rounded-3xl text-center relative overflow-hidden backdrop-blur-xl" style={{ backgroundColor: "rgba(255, 255, 255, 0.02)", border: "1px solid rgba(255, 255, 255, 0.08)", boxShadow: "0 25px 50px rgba(0, 0, 0, 0.4)" }}>
              <div className="absolute top-0 right-0 opacity-5 pointer-events-none translate-x-6 -translate-y-6">
                <span className="text-8xl font-black text-white">NEXT</span>
              </div>
              <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: "#d4af37" }}>NEXT STEP</p>
              <h4 className="text-xl md:text-2xl font-bold text-white mb-3" style={{ fontFamily: "var(--font-noto-serif)" }}>
                このAI分析結果をもとに、慶應医学部生と戦略を立てる
              </h4>
              <p className="text-xs max-w-xl mx-auto mb-6 leading-relaxed" style={{ color: "rgba(243,244,246,0.6)" }}>
                AIが出力した学習ルートをベースに、現役慶應医学部生の担当講師が「本当に現在の習慣・時間の使い方で合格まで走り切れるか」をさらに詳しく個別診断します。
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link
                  href="/contact?from=moshi-tool-result-cta"
                  className="inline-flex items-center justify-center rounded-xl px-8 py-3.5 text-[#060b13] font-bold text-sm transition-all hover:scale-[1.02] hover:shadow-[0_0_15px_rgba(212,175,55,0.2)]"
                  style={{ backgroundColor: "#d4af37" }}
                >
                  慶應医学部生との無料合格戦略診断に申し込む →
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Back link */}
      <div className="py-12 px-4 text-center">
        <Link href="/services/moshi" className="text-xs hover:text-[#d4af37] transition-colors" style={{ color: "#9ca3af" }}>
          ← 模試分析サービスページへ戻る
        </Link>
      </div>
    </div>
  );
}
