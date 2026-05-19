"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { LINE_URL } from "@/lib/links";
import {
  computeDiagnosis,
  gradeLabels,
  targetLabels,
  hensachiLabels,
  commonTestLabels,
  studyHourLabels,
  subjectLabels,
  mentalLabels,
  parentLabels,
  type DiagnosisInput,
  type GradeKey,
  type TargetKey,
  type HensachiKey,
  type CommonTestKey,
  type StudyHourKey,
  type SubjectKey,
  type MentalKey,
  type ParentKey,
} from "@/lib/diagnosis";

type Step = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9; // 0=intro, 1-8=questions, 9=result

const TOTAL_QUESTIONS = 8;
const toStep = (value: number): Step => Math.max(0, Math.min(9, value)) as Step;

export default function DiagnosisClient() {
  const [step, setStep] = useState<Step>(0);
  const [grade, setGrade] = useState<GradeKey | null>(null);
  const [target, setTarget] = useState<TargetKey | null>(null);
  const [hensachi, setHensachi] = useState<HensachiKey | null>(null);
  const [commonTest, setCommonTest] = useState<CommonTestKey | null>(null);
  const [studyHours, setStudyHours] = useState<StudyHourKey | null>(null);
  const [weakSubjects, setWeakSubjects] = useState<SubjectKey[]>([]);
  const [mental, setMental] = useState<MentalKey | null>(null);
  const [parent, setParent] = useState<ParentKey | null>(null);

  const input: DiagnosisInput | null = useMemo(() => {
    if (!grade || !target || !hensachi || !commonTest || !studyHours || !mental || !parent) return null;
    return { grade, target, hensachi, commonTest, studyHours, weakSubjects, mental, parent };
  }, [grade, target, hensachi, commonTest, studyHours, weakSubjects, mental, parent]);

  const result = useMemo(() => (input ? computeDiagnosis(input) : null), [input]);

  const progress = step >= 1 && step <= 8 ? Math.round(((step - 1) / TOTAL_QUESTIONS) * 100) : step >= 9 ? 100 : 0;

  const goNext = () => setStep((s) => toStep(s + 1));
  const goPrev = () => setStep((s) => toStep(s - 1));

  const toggleSubject = (s: SubjectKey) => {
    setWeakSubjects((prev) => (prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s]));
  };

  if (step === 0) {
    return <Intro onStart={() => setStep(1)} />;
  }

  if (step === 9 && result) {
    return <ResultView result={result} input={input!} onRestart={() => setStep(0)} />;
  }

  const canAdvance = (() => {
    switch (step) {
      case 1:
        return !!grade;
      case 2:
        return !!target;
      case 3:
        return !!hensachi;
      case 4:
        return !!commonTest;
      case 5:
        return !!studyHours;
      case 6:
        return true; // weakSubjects can be empty
      case 7:
        return !!mental;
      case 8:
        return !!parent;
      default:
        return false;
    }
  })();

  return (
    <div className="min-h-[calc(100vh-200px)] py-12 px-4" style={{ backgroundColor: "#f7f5f0" }}>
      <div className="max-w-2xl mx-auto">
        {/* Progress */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-3">
            <p className="text-xs font-bold tracking-widest" style={{ color: "#c9922a" }}>
              質問 {step} / {TOTAL_QUESTIONS}
            </p>
            <p className="text-xs font-semibold" style={{ color: "#5f6b7a" }}>
              所要 約3分
            </p>
          </div>
          <div className="h-1.5 w-full rounded-full overflow-hidden" style={{ backgroundColor: "#e5e1d8" }}>
            <div
              className="h-full transition-all duration-500"
              style={{ width: `${progress}%`, backgroundColor: "#c9922a" }}
            />
          </div>
        </div>

        <div className="rounded-2xl bg-white p-7 md:p-10" style={{ border: "1px solid #e5e1d8" }}>
          {step === 1 && (
            <Question
              title="あなたの現在の状況を教えてください"
              subtitle="残り期間と必要な学習量を見積もるために使います"
            >
              <RadioList
                options={(Object.entries(gradeLabels) as [GradeKey, string][]).map(([k, v]) => ({ value: k, label: v }))}
                value={grade}
                onChange={setGrade}
              />
            </Question>
          )}

          {step === 2 && (
            <Question
              title="第一志望のレベル感は？"
              subtitle="まだ決まっていなくても大丈夫です。後から相談で詰められます"
            >
              <RadioList
                options={(Object.entries(targetLabels) as [TargetKey, string][]).map(([k, v]) => ({ value: k, label: v }))}
                value={target}
                onChange={setTarget}
              />
            </Question>
          )}

          {step === 3 && (
            <Question
              title="直近の模試の偏差値（主要科目の平均）"
              subtitle="正確でなくて構いません。だいたいの感覚で選んでください"
            >
              <RadioList
                options={(Object.entries(hensachiLabels) as [HensachiKey, string][]).map(([k, v]) => ({ value: k, label: `偏差値 ${v}` }))}
                value={hensachi}
                onChange={setHensachi}
              />
            </Question>
          )}

          {step === 4 && (
            <Question
              title="共通テスト得点率は？"
              subtitle="高3・浪人生の方のみで構いません。それ以外の方は『まだ受けていない』を選択してください"
            >
              <RadioList
                options={(Object.entries(commonTestLabels) as [CommonTestKey, string][]).map(([k, v]) => ({ value: k, label: v }))}
                value={commonTest}
                onChange={setCommonTest}
              />
            </Question>
          )}

          {step === 5 && (
            <Question
              title="1週間の学習時間（学校・塾の授業時間を除く自習時間）"
              subtitle="盛らず、実態に近いものを選んでください"
            >
              <RadioList
                options={(Object.entries(studyHourLabels) as [StudyHourKey, string][]).map(([k, v]) => ({ value: k, label: v }))}
                value={studyHours}
                onChange={setStudyHours}
              />
            </Question>
          )}

          {step === 6 && (
            <Question title="現時点で苦手な科目は？" subtitle="複数選択可。ひとつもなければ空欄のまま進めます">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {(Object.entries(subjectLabels) as [SubjectKey, string][]).map(([k, v]) => {
                  const selected = weakSubjects.includes(k);
                  return (
                    <button
                      key={k}
                      type="button"
                      onClick={() => toggleSubject(k)}
                      className="rounded-lg px-4 py-3 text-sm font-bold transition-all"
                      style={{
                        backgroundColor: selected ? "#0c1a33" : "#fff",
                        color: selected ? "#fff" : "#0c1a33",
                        border: selected ? "1.5px solid #0c1a33" : "1.5px solid #e5e1d8",
                      }}
                    >
                      {v}
                    </button>
                  );
                })}
              </div>
            </Question>
          )}

          {step === 7 && (
            <Question
              title="『今日／今週、何をすべきか分からない』と感じる頻度は？"
              subtitle="メンタル状態と戦略の解像度を見ています。正直に答えてください"
            >
              <RadioList
                options={(Object.entries(mentalLabels) as [MentalKey, string][]).map(([k, v]) => ({ value: k, label: v }))}
                value={mental}
                onChange={setMental}
              />
            </Question>
          )}

          {step === 8 && (
            <Question
              title="保護者の関与度はどのくらい？"
              subtitle="親子関係は学習効率に直結します。判断材料に使うだけで誰にも共有しません"
            >
              <RadioList
                options={(Object.entries(parentLabels) as [ParentKey, string][]).map(([k, v]) => ({ value: k, label: v }))}
                value={parent}
                onChange={setParent}
              />
            </Question>
          )}

          <div className="mt-8 flex items-center justify-between">
            <button
              type="button"
              onClick={goPrev}
              disabled={step === 1}
              className="text-sm font-bold transition-opacity disabled:opacity-30"
              style={{ color: "#5f6b7a" }}
            >
              ← 戻る
            </button>
            <button
              type="button"
              onClick={goNext}
              disabled={!canAdvance}
              className="rounded-md px-7 py-3 text-sm font-bold text-white transition-opacity disabled:opacity-40"
              style={{ backgroundColor: "#c9922a" }}
            >
              {step === 8 ? "診断結果を見る →" : "次へ →"}
            </button>
          </div>
        </div>

        <p className="mt-6 text-center text-xs leading-relaxed" style={{ color: "#5f6b7a" }}>
          ご回答内容は端末上で計算されます。保存・送信は行いません。<br />
          結果ページから個別レポートをLINE/メールで受け取ることもできます。
        </p>
      </div>
    </div>
  );
}

function Intro({ onStart }: { onStart: () => void }) {
  return (
    <div>
      <section style={{ backgroundColor: "#0c1a33" }} className="px-4 py-20 md:py-28">
        <div className="max-w-3xl mx-auto text-center">
          <p className="mb-4 text-xs font-bold tracking-[0.3em]" style={{ color: "#c9922a" }}>
            MEDVANCE DIAGNOSIS / 完全無料
          </p>
          <h1
            className="mb-6 text-3xl md:text-5xl font-bold leading-tight text-white"
            style={{ fontFamily: "var(--font-noto-serif)" }}
          >
            3分でわかる、<br className="sm:hidden" />医学部合格までの<br className="hidden sm:block" />
            <span style={{ color: "#c9922a" }}>本当の距離。</span>
          </h1>
          <p className="mx-auto mb-10 max-w-2xl text-sm md:text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.7)" }}>
            8つの質問に答えるだけで、現役慶應医学部生の視点から、<br className="hidden md:block" />
            あなたの「合格距離スコア」「優先課題3つ」「最適な学習プラン」を即時に判定します。
          </p>

          <div className="grid sm:grid-cols-3 gap-3 max-w-2xl mx-auto mb-10">
            {[
              { num: "01", label: "8問・約3分" },
              { num: "02", label: "個別レポート即時生成" },
              { num: "03", label: "完全無料・登録不要" },
            ].map((item) => (
              <div
                key={item.num}
                className="rounded-lg px-4 py-4"
                style={{
                  backgroundColor: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.12)",
                }}
              >
                <p className="text-xs font-bold mb-1" style={{ color: "#c9922a" }}>
                  {item.num}
                </p>
                <p className="text-sm font-bold text-white">{item.label}</p>
              </div>
            ))}
          </div>

          <button
            type="button"
            onClick={onStart}
            className="inline-flex items-center gap-2 rounded-lg px-10 py-5 text-base font-bold text-white shadow-xl transition-transform hover:scale-[1.02]"
            style={{ backgroundColor: "#c9922a" }}
          >
            診断を始める
            <span aria-hidden="true">→</span>
          </button>
        </div>
      </section>

      <section className="bg-white py-20 px-4" style={{ borderBottom: "1px solid #e5e1d8" }}>
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-bold tracking-widest text-center mb-3" style={{ color: "#c9922a" }}>
            この診断でわかること
          </p>
          <h2
            className="text-2xl md:text-3xl font-bold text-center mb-12"
            style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}
          >
            合格は、距離を測ることから始まる。
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                num: "01",
                title: "合格距離スコア（0〜100）",
                body: "現状の偏差値・志望校・残り期間・学習時間・メンタル状態を統合した独自スコア。『順調／仕上げ次第／巻き返し可能／抜本的見直し必須』の4段階で現在地を提示します。",
              },
              {
                num: "02",
                title: "優先課題 3つ",
                body: "弱点科目・学習時間不足・戦略の不明瞭さ・保護者関係など、複数の入力からあなただけのボトルネックを抽出。今日から手を付けるべき3項目に絞り込みます。",
              },
              {
                num: "03",
                title: "最適なMedvanceプラン",
                body: "週何回・どの追加サポート・月いくらが現実的か。目安料金とともに4プラン（Light / Core / Core+ / Keio）から最適なものを推薦します。",
              },
            ].map((item) => (
              <div
                key={item.num}
                className="rounded-2xl p-7"
                style={{ backgroundColor: "#f7f5f0", border: "1px solid #e5e1d8" }}
              >
                <p className="mb-3 text-xs font-bold tracking-widest" style={{ color: "#c9922a" }}>
                  {item.num}
                </p>
                <h3 className="mb-3 text-base font-bold" style={{ color: "#0c1a33" }}>
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#5f6b7a" }}>
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4" style={{ backgroundColor: "#f7f5f0" }}>
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-2xl md:text-3xl font-bold mb-10 text-center"
            style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}
          >
            なぜ「距離を測る」ことから始めるのか
          </h2>
          <div className="space-y-5 text-sm md:text-base leading-relaxed" style={{ color: "#3d3d3d" }}>
            <p>
              医学部受験で最も多い失敗は、「努力量が足りない」ことではありません。
              <strong style={{ color: "#0c1a33" }}>『現在地と目標までの距離を、誰も測ってくれていない』</strong>
              ことが原因です。
            </p>
            <p>
              偏差値の数字、模試の判定、合格者の体験記。情報は溢れているのに、自分にとって何をいつまでにやれば届くのかは、誰も教えてくれません。授業を受けても、参考書を解いても、「これで合っているのか」が分からないまま時間だけが過ぎていきます。
            </p>
            <p>
              この診断は、現役慶應医学部生が実際に使っている『合格距離の測り方』を、8つの質問に再構成したものです。
              <strong style={{ color: "#0c1a33" }}>3分後、あなたは『今日から何をすべきか』を持って帰れます。</strong>
            </p>
          </div>

          <div className="mt-12 text-center">
            <button
              type="button"
              onClick={onStart}
              className="inline-flex items-center gap-2 rounded-lg px-10 py-5 text-base font-bold text-white shadow-xl transition-transform hover:scale-[1.02]"
              style={{ backgroundColor: "#c9922a" }}
            >
              診断を始める（無料・3分）
              <span aria-hidden="true">→</span>
            </button>
            <p className="mt-4 text-xs" style={{ color: "#5f6b7a" }}>
              個人情報の入力なし／結果はその場で表示
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

function Question({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h2 className="mb-2 text-xl md:text-2xl font-bold leading-snug" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>
        {title}
      </h2>
      {subtitle && (
        <p className="mb-6 text-xs md:text-sm leading-relaxed" style={{ color: "#5f6b7a" }}>
          {subtitle}
        </p>
      )}
      <div className="mt-5">{children}</div>
    </div>
  );
}

function RadioList<T extends string>({
  options,
  value,
  onChange,
}: {
  options: { value: T; label: string }[];
  value: T | null;
  onChange: (v: T) => void;
}) {
  return (
    <div className="space-y-2">
      {options.map((opt) => {
        const selected = value === opt.value;
        return (
          <button
            key={opt.value}
            type="button"
            onClick={() => onChange(opt.value)}
            className="w-full text-left rounded-lg px-4 py-3.5 text-sm transition-all flex items-center gap-3"
            style={{
              backgroundColor: selected ? "rgba(201,146,42,0.08)" : "#fff",
              border: selected ? "1.5px solid #c9922a" : "1.5px solid #e5e1d8",
              color: selected ? "#0c1a33" : "#3d3d3d",
              fontWeight: selected ? 700 : 500,
            }}
          >
            <span
              className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center"
              style={{
                border: selected ? "2px solid #c9922a" : "2px solid #d8dde6",
                backgroundColor: selected ? "#c9922a" : "transparent",
              }}
            >
              {selected && (
                <span className="w-2 h-2 rounded-full" style={{ backgroundColor: "#fff" }} />
              )}
            </span>
            <span>{opt.label}</span>
          </button>
        );
      })}
    </div>
  );
}

function ResultView({
  result,
  input,
  onRestart,
}: {
  result: ReturnType<typeof computeDiagnosis>;
  input: DiagnosisInput;
  onRestart: () => void;
}) {
  const [reportSent, setReportSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string | null>(null);

  const sendReport = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) {
      setError("お名前とメールアドレスを入力してください");
      return;
    }
    setSending(true);
    setError(null);
    try {
      const summary = [
        `■ 学年・状況: ${gradeLabels[input.grade]}`,
        `■ 第一志望: ${targetLabels[input.target]}`,
        `■ 偏差値: ${hensachiLabels[input.hensachi]}`,
        `■ 共通テスト: ${commonTestLabels[input.commonTest]}`,
        `■ 学習時間/週: ${studyHourLabels[input.studyHours]}`,
        `■ 苦手科目: ${input.weakSubjects.map((s) => subjectLabels[s]).join("・") || "なし"}`,
        `■ メンタル: ${mentalLabels[input.mental]}`,
        `■ 保護者関与: ${parentLabels[input.parent]}`,
        "",
        `▼ 合格距離スコア: ${result.score} / 100（${result.band}）`,
        `▼ 推奨プラン: ${result.recommendedPlan.name}（${result.recommendedPlan.weekly}）`,
        `▼ 月額目安: ¥${result.recommendedPlan.monthlyPriceJpy.toLocaleString()}〜`,
        "",
        "▼ 優先課題:",
        ...result.priorityActions.map((a, i) => `${i + 1}. ${a.title} — ${a.body}`),
      ].join("\n");

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          phone: "",
          status: gradeLabels[input.grade],
          targetType: "医学部受験診断",
          targetName: targetLabels[input.target],
          message: summary,
          source: "diagnosis-result",
        }),
      });
      if (!res.ok) throw new Error("送信に失敗しました");
      setReportSent(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "送信エラーが発生しました");
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="bg-white">
      {/* スコアセクション */}
      <section style={{ backgroundColor: "#0c1a33" }} className="px-4 py-16 md:py-20">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-bold tracking-[0.3em] text-center mb-4" style={{ color: "#c9922a" }}>
            あなたの診断結果
          </p>
          <h1
            className="text-2xl md:text-4xl font-bold text-white text-center mb-12 leading-tight"
            style={{ fontFamily: "var(--font-noto-serif)" }}
          >
            合格距離スコア
          </h1>

          <div className="rounded-2xl p-8 md:p-12 text-center" style={{ backgroundColor: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.14)" }}>
            <div className="flex items-center justify-center gap-4 mb-4">
              <p
                className="font-bold leading-none"
                style={{
                  fontFamily: "var(--font-noto-serif)",
                  fontSize: "clamp(4rem, 12vw, 7rem)",
                  color: result.bandColor,
                }}
              >
                {result.score}
              </p>
              <p className="text-base font-semibold" style={{ color: "rgba(255,255,255,0.5)" }}>
                / 100
              </p>
            </div>
            <p
              className="inline-block px-5 py-2 rounded-full text-sm font-bold mb-6"
              style={{ backgroundColor: result.bandColor, color: "#fff" }}
            >
              {result.band}
            </p>
            <p className="max-w-2xl mx-auto text-sm md:text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.78)" }}>
              {result.bandSummary}
            </p>
          </div>

          {/* 内訳 */}
          <div className="mt-8 grid md:grid-cols-3 gap-4">
            {[
              { label: "残り期間", value: `約${result.remainingMonths}ヶ月` },
              {
                label: "志望校との偏差値差",
                value:
                  result.gapHensachi <= 0
                    ? `+${Math.abs(result.gapHensachi)}（届いている）`
                    : `−${result.gapHensachi}（不足）`,
              },
              { label: "推奨 学習時間/週", value: `${result.weeklyHoursTarget}時間` },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-xl px-5 py-5"
                style={{ backgroundColor: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.12)" }}
              >
                <p className="text-xs font-bold tracking-wider mb-2" style={{ color: "rgba(255,255,255,0.5)" }}>
                  {item.label}
                </p>
                <p className="text-base font-bold text-white">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* シグナル */}
      <section className="py-16 px-4" style={{ backgroundColor: "#f7f5f0" }}>
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl p-7 bg-white" style={{ border: "1px solid #e5e1d8" }}>
            <p className="text-xs font-bold tracking-widest mb-4" style={{ color: "#3a8a4a" }}>
              ✓ ポジティブシグナル
            </p>
            {result.positiveSignals.length === 0 ? (
              <p className="text-sm leading-relaxed" style={{ color: "#5f6b7a" }}>
                現時点で目立ったポジティブ要素は検出されませんでしたが、診断後の3ヶ月で大きく動かせます。
              </p>
            ) : (
              <ul className="space-y-2.5">
                {result.positiveSignals.map((s) => (
                  <li key={s} className="flex items-start gap-2 text-sm leading-relaxed" style={{ color: "#0c1a33" }}>
                    <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "#3a8a4a" }} />
                    {s}
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className="rounded-2xl p-7 bg-white" style={{ border: "1px solid #e5e1d8" }}>
            <p className="text-xs font-bold tracking-widest mb-4" style={{ color: "#b14a3a" }}>
              ⚠ 注意したいシグナル
            </p>
            {result.riskFlags.length === 0 ? (
              <p className="text-sm leading-relaxed" style={{ color: "#5f6b7a" }}>
                現時点で深刻なリスクは検出されていません。今のペースを維持しましょう。
              </p>
            ) : (
              <ul className="space-y-2.5">
                {result.riskFlags.map((s) => (
                  <li key={s} className="flex items-start gap-2 text-sm leading-relaxed" style={{ color: "#0c1a33" }}>
                    <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "#b14a3a" }} />
                    {s}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </section>

      {/* 優先課題 */}
      <section className="py-20 px-4 bg-white" style={{ borderTop: "1px solid #e5e1d8" }}>
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-bold tracking-widest text-center mb-3" style={{ color: "#c9922a" }}>
            あなたの優先課題 TOP 3
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-3" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>
            今日から手を付ける3つ
          </h2>
          <p className="text-sm text-center mb-12" style={{ color: "#5f6b7a" }}>
            これだけは、今週中に着手する価値があります
          </p>

          <div className="space-y-5">
            {result.priorityActions.map((action, i) => (
              <div
                key={i}
                className="rounded-2xl p-7 md:p-8 grid md:grid-cols-[80px_1fr] gap-5"
                style={{ backgroundColor: "#f7f5f0", border: "1px solid #e5e1d8" }}
              >
                <div>
                  <p
                    className="font-bold leading-none"
                    style={{ color: "#c9922a", fontFamily: "var(--font-noto-serif)", fontSize: "2.5rem" }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </p>
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-bold mb-3" style={{ color: "#0c1a33" }}>
                    {action.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#3d3d3d" }}>
                    {action.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 推奨プラン */}
      <section className="py-20 px-4" style={{ backgroundColor: "#0c1a33" }}>
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-bold tracking-widest text-center mb-3" style={{ color: "#c9922a" }}>
            あなたに最適なMedvanceプラン
          </p>
          <h2
            className="text-2xl md:text-3xl font-bold text-center text-white mb-12"
            style={{ fontFamily: "var(--font-noto-serif)" }}
          >
            推奨：{result.recommendedPlan.name}
          </h2>

          <div className="rounded-2xl p-8 md:p-10" style={{ backgroundColor: "rgba(255,255,255,0.06)", border: "1px solid rgba(201,146,42,0.4)" }}>
            <div className="grid md:grid-cols-[1fr_auto] gap-6 items-end mb-8">
              <div>
                <p className="text-xs font-bold tracking-widest mb-2" style={{ color: "#c9922a" }}>
                  推奨頻度
                </p>
                <p className="text-xl md:text-2xl font-bold text-white" style={{ fontFamily: "var(--font-noto-serif)" }}>
                  {result.recommendedPlan.weekly}
                </p>
              </div>
              <div className="text-left md:text-right">
                <p className="text-xs font-bold tracking-widest mb-1" style={{ color: "#c9922a" }}>
                  月額目安
                </p>
                <p className="text-3xl font-bold text-white" style={{ fontFamily: "var(--font-noto-serif)" }}>
                  ¥{result.recommendedPlan.monthlyPriceJpy.toLocaleString()}
                  <span className="text-sm font-normal" style={{ color: "rgba(255,255,255,0.55)" }}>
                    〜 / 月
                  </span>
                </p>
              </div>
            </div>

            <p className="text-sm leading-relaxed mb-6" style={{ color: "rgba(255,255,255,0.78)" }}>
              {result.recommendedPlan.description}
            </p>

            <p className="text-xs font-bold tracking-widest mb-3" style={{ color: "#c9922a" }}>
              含まれる伴走内容
            </p>
            <ul className="space-y-2 mb-8">
              {result.recommendedPlan.addons.map((addon) => (
                <li
                  key={addon}
                  className="flex items-start gap-2 text-sm"
                  style={{ color: "rgba(255,255,255,0.85)" }}
                >
                  <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "#c9922a" }} />
                  {addon}
                </li>
              ))}
            </ul>

            <p className="text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.45)" }}>
              ※ 上記はあくまで診断結果に基づく目安です。実際のプランは無料相談で個別にご提案します。
            </p>
          </div>
        </div>
      </section>

      {/* レポート受け取り or CTA */}
      <section className="py-20 px-4 bg-white" style={{ borderTop: "1px solid #e5e1d8" }}>
        <div className="max-w-3xl mx-auto">
          {reportSent ? (
            <div className="text-center rounded-2xl p-10" style={{ backgroundColor: "#f7f5f0", border: "1px solid #e5e1d8" }}>
              <p className="text-3xl mb-4">✓</p>
              <h3 className="text-xl font-bold mb-3" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>
                診断結果をメールでお送りしました
              </h3>
              <p className="text-sm mb-6" style={{ color: "#5f6b7a" }}>
                2営業日以内に、診断内容をふまえた個別アドバイスもメールでお送りします。
              </p>
              <a
                href={LINE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-lg px-8 py-4 text-white font-bold text-sm hover:opacity-90 transition-opacity"
                style={{ backgroundColor: "#06C755" }}
              >
                LINEで個別相談を受ける
              </a>
            </div>
          ) : (
            <>
              <p className="text-xs font-bold tracking-widest text-center mb-3" style={{ color: "#c9922a" }}>
                次のステップ
              </p>
              <h2
                className="text-2xl md:text-3xl font-bold text-center mb-4"
                style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}
              >
                診断結果と個別アドバイスを<br className="sm:hidden" />受け取る
              </h2>
              <p className="text-center text-sm mb-10" style={{ color: "#5f6b7a" }}>
                診断結果のサマリーをメールでお送りします。<br />
                希望者には、現役慶應医学部生による個別アドバイスを2営業日以内にお返しします。
              </p>

              <form onSubmit={sendReport} className="rounded-2xl p-7 md:p-8 space-y-5" style={{ backgroundColor: "#f7f5f0", border: "1px solid #e5e1d8" }}>
                <div>
                  <label className="block text-xs font-bold tracking-widest mb-2" style={{ color: "#0c1a33" }}>
                    お名前
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="w-full rounded-lg bg-white px-4 py-3 text-sm"
                    style={{ border: "1px solid #d8dde6", color: "#0c1a33" }}
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold tracking-widest mb-2" style={{ color: "#0c1a33" }}>
                    メールアドレス
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full rounded-lg bg-white px-4 py-3 text-sm"
                    style={{ border: "1px solid #d8dde6", color: "#0c1a33" }}
                  />
                </div>
                {error && <p className="text-xs font-bold" style={{ color: "#b14a3a" }}>{error}</p>}
                <button
                  type="submit"
                  disabled={sending}
                  className="w-full rounded-lg px-8 py-4 text-white font-bold text-sm transition-opacity disabled:opacity-50"
                  style={{ backgroundColor: "#c9922a" }}
                >
                  {sending ? "送信中..." : "診断結果を受け取る"}
                </button>
                <p className="text-xs leading-relaxed text-center" style={{ color: "#5f6b7a" }}>
                  送信内容：診断結果サマリー（スコア・推奨プラン・優先課題）<br />
                  ※ 押し売りは一切行いません。返信は希望者のみ
                </p>
              </form>

              <div className="my-10 flex items-center gap-4">
                <div className="flex-1 h-px" style={{ backgroundColor: "#e5e1d8" }} />
                <p className="text-xs font-semibold" style={{ color: "#5f6b7a" }}>
                  または
                </p>
                <div className="flex-1 h-px" style={{ backgroundColor: "#e5e1d8" }} />
              </div>

              <div className="grid sm:grid-cols-2 gap-3">
                <a
                  href={LINE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg px-6 py-4 text-white font-bold text-sm text-center hover:opacity-90 transition-opacity"
                  style={{ backgroundColor: "#06C755" }}
                >
                  LINEで個別相談する
                </a>
                <Link
                  href="/contact?from=diagnosis-result"
                  className="rounded-lg px-6 py-4 font-bold text-sm text-center hover:opacity-90 transition-opacity"
                  style={{ backgroundColor: "#fff", color: "#0c1a33", border: "1.5px solid #0c1a33" }}
                >
                  フォームで詳しく相談
                </Link>
              </div>
            </>
          )}

          <div className="mt-10 text-center">
            <button
              type="button"
              onClick={onRestart}
              className="text-xs font-bold underline transition-opacity hover:opacity-70"
              style={{ color: "#5f6b7a" }}
            >
              もう一度診断する
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
