"use client";

import { useEffect, useState } from "react";
import { LINE_URL } from "@/lib/links";

type GtagParams = {
  event_category: string;
  event_label: string;
};

type AnalyticsWindow = Window & typeof globalThis & {
  gtag?: (command: "event", action: string, params: GtagParams) => void;
};

type ChoiceFieldErrors = Partial<Record<"privateMedicalPlan" | "parentJoin" | "paidDiagnosisReadiness", string>>;

const initialFormData = {
  name: "",
  email: "",
  phone: "",
  relationship: "",
  status: "",
  examHistory: "",
  thisYearIntent: "",
  privateMedicalPlan: "",
  currentPrepSchool: "",
  strategyNeed: "",
  plannedPrivateSchools: "",
  targetName: "",
  latestScore: "",
  studyHours: "",
  parentJoin: "",
  investmentReadiness: "",
  paidDiagnosisReadiness: "",
  message: "",
  source: "",
  website: "",
};

const quickFields = [
  {
    title: "予備校併用設計",
    body: "大手予備校の授業、復習、個別指導、質問対応を週単位で接続します。",
  },
  {
    title: "集団塾不適合の立て直し",
    body: "本人に合わない環境を続けず、1対1指導と週次管理で体制を組み直します。",
  },
  {
    title: "志望校別の受験戦略",
    body: "国公立・私立それぞれの配点、日程、科目相性、面接小論文まで見ます。",
  },
];

const sideChecks = [
  "医学部・歯学部に何としても入りたい意思がある",
  "国公立・私立を含めて志望校を現実的に設計したい",
  "保護者が初回診断に同席できる",
  "大手予備校の授業外をどう補うか整理したい",
  "集団塾や予備校が合わず、1対1の質を重視したい",
  "料金の安さより、合格可能性に効く指導投資を優先したい",
];

function LineIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 36 36" className={className} aria-hidden="true">
      <path
        fill="currentColor"
        d="M18 3C9.716 3 3 8.476 3 15.224c0 6.03 5.327 11.08 12.525 12.03.487.104 1.15.32 1.318.735.15.377.098.967.049 1.347l-.212 1.276c-.065.377-.302 1.478 1.294.805 1.596-.673 8.618-5.076 11.76-8.691C31.95 20.267 33 17.87 33 15.224 33 8.476 26.284 3 18 3zm-6.18 14.36h-3.4c-.266 0-.483-.217-.483-.484v-5.49c0-.267.217-.484.484-.484.266 0 .483.217.483.484v5.005h2.916c.266 0 .483.216.483.484 0 .267-.217.485-.483.485zm1.935-.484c0 .267-.217.485-.484.485-.267 0-.484-.218-.484-.485v-5.49c0-.267.217-.484.484-.484.267 0 .484.217.484.484v5.49zm6.35 0c0 .208-.133.393-.33.46-.05.015-.102.023-.154.023-.155 0-.3-.07-.393-.191l-2.82-3.86v3.568c0 .267-.217.485-.484.485-.266 0-.482-.218-.482-.485v-5.49c0-.207.132-.392.33-.459.05-.017.103-.024.153-.024.15 0 .297.07.39.192l2.826 3.86v-3.569c0-.267.216-.484.483-.484.267 0 .484.217.484.484v5.49zm3.922-3.228c.267 0 .484.218.484.485 0 .267-.217.485-.484.485h-1.938v.76h1.938c.266 0 .484.217.484.484s-.217.484-.484.484h-2.42c-.266 0-.483-.217-.483-.484v-5.49c0-.267.217-.484.484-.484h2.42c.266 0 .483.217.483.484 0 .268-.217.485-.484.485h-1.938v.76h1.938z"
      />
    </svg>
  );
}

export default function ContactPage() {
  const [formData, setFormData] = useState(initialFormData);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [fieldErrors, setFieldErrors] = useState<ChoiceFieldErrors>({});
  const [renderedAt, setRenderedAt] = useState<number | null>(null);

  useEffect(() => {
    setRenderedAt(Date.now());
    const sourceFromQuery = new URLSearchParams(window.location.search).get("from") ?? "";
    if (!sourceFromQuery) return;

    setFormData((prev) => (
      prev.source ? prev : { ...prev, source: sourceFromQuery }
    ));
  }, []);

  const updateField = (key: keyof typeof initialFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
    if (key === "privateMedicalPlan" || key === "parentJoin" || key === "paidDiagnosisReadiness") {
      setFieldErrors((prev) => ({ ...prev, [key]: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    const nextFieldErrors: ChoiceFieldErrors = {};
    if (!formData.privateMedicalPlan) {
      nextFieldErrors.privateMedicalPlan = "医学部の受験方針を選択してください。";
    }
    if (!formData.parentJoin) {
      nextFieldErrors.parentJoin = "保護者同席の可否を選択してください。";
    }
    if (!formData.paidDiagnosisReadiness) {
      nextFieldErrors.paidDiagnosisReadiness = "診断への参加意思を選択してください。";
    }
    setFieldErrors(nextFieldErrors);
    if (Object.keys(nextFieldErrors).length > 0) {
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, renderedAt }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "送信に失敗しました");
      }

      setSubmitted(true);
      const analyticsWindow = typeof window !== "undefined" ? (window as AnalyticsWindow) : undefined;
      if (analyticsWindow?.gtag) {
        analyticsWindow.gtag("event", "generate_lead", {
          event_category: "contact",
          event_label: "医学部合格戦略診断",
        });
      }
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "エラーが発生しました。しばらく経ってからお試しください。");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <section style={{ backgroundColor: "#0c1a33" }} className="px-4 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-xs font-bold tracking-widest" style={{ color: "#c9922a" }}>
            お申し込み
          </p>
          <h1 className="mb-4 text-3xl font-bold leading-snug text-white md:text-4xl" style={{ fontFamily: "var(--font-noto-serif)" }}>
            医学部・歯学部 合格戦略診断
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.66)" }}>
            予備校の利用状況、集団塾との相性、模試結果、志望校、保護者の投資方針をもとに、国公立・私立の医学部・歯学部合格に向けた受験校選定・科目別優先順位・必要な伴走体制を整理します。
          </p>
          <div className="mx-auto grid max-w-3xl gap-3 sm:grid-cols-3">
            {quickFields.map((item) => (
              <div key={item.title} className="rounded-lg p-4 text-left" style={{ backgroundColor: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)" }}>
                <p className="mb-2 text-sm font-bold text-white">{item.title}</p>
                <p className="text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.62)" }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16" style={{ backgroundColor: "#f7f5f0" }}>
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1fr_380px]">
          <div className="rounded-lg bg-white p-6 md:p-8" style={{ border: "1px solid #e5e1d8" }}>
            {submitted ? (
              <div className="py-12 text-center">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full text-2xl font-bold text-white" style={{ backgroundColor: "#c9922a" }}>
                  ✓
                </div>
                <h2 className="mb-3 text-2xl font-bold" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>
                  合格戦略診断のお申し込みを受け付けました
                </h2>
                <p className="mx-auto mb-8 max-w-md text-sm leading-relaxed" style={{ color: "#5f6b7a" }}>
                  2営業日以内に、診断日程と事前に共有いただきたい資料についてメールでご連絡します。
                </p>
                <a
                  href={LINE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full px-7 py-3 text-sm font-bold text-white transition-opacity hover:opacity-90"
                  style={{ backgroundColor: "#06C755" }}
                >
                  <LineIcon />
                  LINEで追加情報を送る
                </a>
              </div>
            ) : (
              <>
                <h2 className="mb-2 text-xl font-bold" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>
                  診断フォーム
                </h2>
                <p className="mb-6 text-sm leading-relaxed" style={{ color: "#5f6b7a" }}>
                  初回診断を一般論で終わらせないために、予備校利用状況・集団塾との相性・医学部や歯学部受験の方針・保護者同席・投資方針を先に確認します。
                </p>

                {formData.source && (
                  <div className="mb-6 rounded-lg p-4" style={{ backgroundColor: "rgba(201,146,42,0.08)", border: "1px solid rgba(201,146,42,0.25)" }}>
                    <p className="text-xs font-bold" style={{ color: "#c9922a" }}>
                      流入元: {formData.source}
                    </p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div aria-hidden="true" style={{ position: "absolute", left: "-9999px", top: "auto", width: "1px", height: "1px", overflow: "hidden" }}>
                    <label htmlFor="website-url">Website</label>
                    <input
                      id="website-url"
                      type="text"
                      name="website"
                      tabIndex={-1}
                      autoComplete="off"
                      value={formData.website}
                      onChange={(e) => updateField("website", e.target.value)}
                    />
                  </div>

                  <div className="grid gap-5 md:grid-cols-2">
                    <div>
                      <label className="mb-1.5 block text-sm font-semibold" style={{ color: "#0c1a33" }}>
                        お名前 <span className="ml-2 rounded px-2 py-0.5 text-xs text-white" style={{ backgroundColor: "#c9922a" }}>必須</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => updateField("name", e.target.value)}
                        className="w-full rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2"
                        style={{ border: "1px solid #e5e1d8", color: "#0c1a33" }}
                        placeholder="山田 太郎"
                      />
                    </div>

                    <div>
                      <label className="mb-1.5 block text-sm font-semibold" style={{ color: "#0c1a33" }}>
                        メールアドレス <span className="ml-2 rounded px-2 py-0.5 text-xs text-white" style={{ backgroundColor: "#c9922a" }}>必須</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => updateField("email", e.target.value)}
                        className="w-full rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2"
                        style={{ border: "1px solid #e5e1d8", color: "#0c1a33" }}
                        placeholder="example@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid gap-5 md:grid-cols-2">
                    <div>
                      <label className="mb-1.5 block text-sm font-semibold" style={{ color: "#0c1a33" }}>
                        申込者 <span className="ml-2 rounded px-2 py-0.5 text-xs text-white" style={{ backgroundColor: "#c9922a" }}>必須</span>
                      </label>
                      <select
                        required
                        value={formData.relationship}
                        onChange={(e) => updateField("relationship", e.target.value)}
                        className="w-full rounded-lg bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2"
                        style={{ border: "1px solid #e5e1d8", color: formData.relationship ? "#0c1a33" : "#9ca3af" }}
                      >
                        <option value="">選択してください</option>
                        <option value="保護者">保護者</option>
                        <option value="受験生本人">受験生本人</option>
                        <option value="保護者と本人">保護者と本人</option>
                      </select>
                    </div>

                    <div>
                      <label className="mb-1.5 block text-sm font-semibold" style={{ color: "#0c1a33" }}>
                        現在の状況 <span className="ml-2 rounded px-2 py-0.5 text-xs text-white" style={{ backgroundColor: "#c9922a" }}>必須</span>
                      </label>
                      <select
                        required
                        value={formData.status}
                        onChange={(e) => updateField("status", e.target.value)}
                        className="w-full rounded-lg bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2"
                        style={{ border: "1px solid #e5e1d8", color: formData.status ? "#0c1a33" : "#9ca3af" }}
                      >
                        <option value="">選択してください</option>
                        <option value="1浪">1浪</option>
                        <option value="2浪以上">2浪以上</option>
                        <option value="再受験">再受験</option>
                        <option value="高3">高3</option>
                        <option value="高2">高2</option>
                        <option value="その他">その他</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid gap-5 md:grid-cols-2">
                    <div>
                      <label className="mb-1.5 block text-sm font-semibold" style={{ color: "#0c1a33" }}>
                        前年度の受験結果
                      </label>
                      <input
                        type="text"
                        value={formData.examHistory}
                        onChange={(e) => updateField("examHistory", e.target.value)}
                        className="w-full rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2"
                        style={{ border: "1px solid #e5e1d8", color: "#0c1a33" }}
                        placeholder="例: 共通テスト得点、私立6校受験、一次通過2校、補欠1校など"
                      />
                    </div>

                    <div>
                      <label className="mb-1.5 block text-sm font-semibold" style={{ color: "#0c1a33" }}>
                        現在利用している塾・予備校
                      </label>
                      <select
                        value={formData.currentPrepSchool}
                        onChange={(e) => updateField("currentPrepSchool", e.target.value)}
                        className="w-full rounded-lg bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2"
                        style={{ border: "1px solid #e5e1d8", color: formData.currentPrepSchool ? "#0c1a33" : "#9ca3af" }}
                      >
                        <option value="">選択してください</option>
                        <option value="大手予備校">大手予備校</option>
                        <option value="医学部専門予備校">医学部専門予備校</option>
                        <option value="集団塾">集団塾</option>
                        <option value="個別指導">個別指導</option>
                        <option value="学校中心">学校中心</option>
                        <option value="利用なし">利用なし</option>
                        <option value="その他">その他</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid gap-5 md:grid-cols-2">
                    <div>
                      <label className="mb-1.5 block text-sm font-semibold" style={{ color: "#0c1a33" }}>
                        いま一番困っていること
                      </label>
                      <select
                        value={formData.strategyNeed}
                        onChange={(e) => updateField("strategyNeed", e.target.value)}
                        className="w-full rounded-lg bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2"
                        style={{ border: "1px solid #e5e1d8", color: formData.strategyNeed ? "#0c1a33" : "#9ca3af" }}
                      >
                        <option value="">選択してください</option>
                        <option value="予備校の復習管理">予備校の復習管理</option>
                        <option value="質の高い質問対応">質の高い質問対応</option>
                        <option value="集団塾が合わない">集団塾が合わない</option>
                        <option value="弱点科目の個別補強">弱点科目の個別補強</option>
                        <option value="国公立医学部の共通テスト・二次配分">国公立医学部の共通テスト・二次配分</option>
                        <option value="私立医学部の出願校設計">私立医学部の出願校設計</option>
                        <option value="保護者への進捗共有">保護者への進捗共有</option>
                      </select>
                    </div>

                    <div>
                      <label className="mb-1.5 block text-sm font-semibold" style={{ color: "#0c1a33" }}>
                        今年で決める覚悟 <span className="ml-2 rounded px-2 py-0.5 text-xs text-white" style={{ backgroundColor: "#c9922a" }}>必須</span>
                      </label>
                      <select
                        required
                        value={formData.thisYearIntent}
                        onChange={(e) => updateField("thisYearIntent", e.target.value)}
                        className="w-full rounded-lg bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2"
                        style={{ border: "1px solid #e5e1d8", color: formData.thisYearIntent ? "#0c1a33" : "#9ca3af" }}
                      >
                        <option value="">選択してください</option>
                        <option value="今年で必ず医学部・歯学部に入りたい">今年で必ず医学部・歯学部に入りたい</option>
                        <option value="再浪人は避けたい">再浪人は避けたい</option>
                        <option value="状況次第で再浪人も検討">状況次第で再浪人も検討</option>
                        <option value="まだ方針が定まっていない">まだ方針が定まっていない</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-semibold" style={{ color: "#0c1a33" }}>
                      志望学部・受験方針 <span className="ml-2 rounded px-2 py-0.5 text-xs text-white" style={{ backgroundColor: "#c9922a" }}>必須</span>
                    </label>
                    <div className="grid gap-3 grid-cols-2 md:grid-cols-5">
                      {["国公立医学部が第一志望", "私立医学部が第一志望", "国公立・私立併願（医）", "歯学部志望（国公立/私立）", "まだ検討中"].map((value) => (
                        <button
                          key={value}
                          type="button"
                          aria-pressed={formData.privateMedicalPlan === value}
                          onClick={() => updateField("privateMedicalPlan", value)}
                          className="rounded-lg px-4 py-3 text-sm font-bold transition-colors"
                          style={{
                            border: `2px solid ${formData.privateMedicalPlan === value ? "#c9922a" : "#e5e1d8"}`,
                            backgroundColor: formData.privateMedicalPlan === value ? "rgba(201,146,42,0.08)" : "#fff",
                            color: formData.privateMedicalPlan === value ? "#c9922a" : "#5f6b7a",
                          }}
                        >
                          {value}
                        </button>
                      ))}
                    </div>
                    {fieldErrors.privateMedicalPlan && (
                      <p className="mt-2 text-sm text-red-600">{fieldErrors.privateMedicalPlan}</p>
                    )}
                  </div>

                  <div className="grid gap-5 md:grid-cols-2">
                    <div>
                      <label className="mb-1.5 block text-sm font-semibold" style={{ color: "#0c1a33" }}>
                        志望校・候補校
                      </label>
                      <input
                        type="text"
                        value={formData.targetName}
                        onChange={(e) => updateField("targetName", e.target.value)}
                        className="w-full rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2"
                        style={{ border: "1px solid #e5e1d8", color: "#0c1a33" }}
                        placeholder="例: 東大、東京科学大、東京歯科大、昭和歯など"
                      />
                    </div>

                    <div>
                      <label className="mb-1.5 block text-sm font-semibold" style={{ color: "#0c1a33" }}>
                        私立医学部の受験予定校数（予定があれば）
                      </label>
                      <select
                        value={formData.plannedPrivateSchools}
                        onChange={(e) => updateField("plannedPrivateSchools", e.target.value)}
                        className="w-full rounded-lg bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2"
                        style={{ border: "1px solid #e5e1d8", color: formData.plannedPrivateSchools ? "#0c1a33" : "#9ca3af" }}
                      >
                        <option value="">選択してください</option>
                        <option value="0〜1校">0〜1校</option>
                        <option value="2〜4校">2〜4校</option>
                        <option value="5〜8校">5〜8校</option>
                        <option value="9校以上">9校以上</option>
                        <option value="未定">未定</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid gap-5 md:grid-cols-2">
                    <div>
                      <label className="mb-1.5 block text-sm font-semibold" style={{ color: "#0c1a33" }}>
                        直近の模試・偏差値
                      </label>
                      <input
                        type="text"
                        value={formData.latestScore}
                        onChange={(e) => updateField("latestScore", e.target.value)}
                        className="w-full rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2"
                        style={{ border: "1px solid #e5e1d8", color: "#0c1a33" }}
                        placeholder="例: 河合記述 英55 数50 化48 生52"
                      />
                    </div>
                  
                    <div>
                      <label className="mb-1.5 block text-sm font-semibold" style={{ color: "#0c1a33" }}>
                        週あたりの学習時間
                      </label>
                      <select
                        value={formData.studyHours}
                        onChange={(e) => updateField("studyHours", e.target.value)}
                        className="w-full rounded-lg bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2"
                        style={{ border: "1px solid #e5e1d8", color: formData.studyHours ? "#0c1a33" : "#9ca3af" }}
                      >
                        <option value="">選択してください</option>
                        <option value="20〜30時間">20〜30時間</option>
                        <option value="30時間以上">30時間以上</option>
                        <option value="50時間以上">50時間以上</option>
                        <option value="10〜20時間">10〜20時間</option>
                        <option value="10時間未満">10時間未満</option>
                        <option value="これから増やす予定">これから増やす予定</option>
                      </select>
                    </div>

                    <div>
                      <label className="mb-1.5 block text-sm font-semibold" style={{ color: "#0c1a33" }}>
                        年間の指導投資イメージ
                      </label>
                      <select
                        value={formData.investmentReadiness}
                        onChange={(e) => updateField("investmentReadiness", e.target.value)}
                        className="w-full rounded-lg bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2"
                        style={{ border: "1px solid #e5e1d8", color: formData.investmentReadiness ? "#0c1a33" : "#9ca3af" }}
                      >
                        <option value="">選択してください</option>
                        <option value="まず費用感を知りたい">まず費用感を知りたい</option>
                        <option value="年間100万〜300万円">年間100万〜300万円</option>
                        <option value="年間300万〜600万円">年間300万〜600万円</option>
                        <option value="必要なら600万円以上も検討">必要なら600万円以上も検討</option>
                      </select>
                    </div>

                    <div>
                      <label className="mb-1.5 block text-sm font-semibold" style={{ color: "#0c1a33" }}>
                        合格戦略診断への参加意思 <span className="ml-2 rounded px-2 py-0.5 text-xs text-white" style={{ backgroundColor: "#c9922a" }}>必須</span>
                      </label>
                      <select
                        required
                        value={formData.paidDiagnosisReadiness}
                        onChange={(e) => updateField("paidDiagnosisReadiness", e.target.value)}
                        className="w-full rounded-lg bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2"
                        style={{ border: `2px solid ${fieldErrors.paidDiagnosisReadiness ? "#dc2626" : "#e5e1d8"}`, color: formData.paidDiagnosisReadiness ? "#0c1a33" : "#9ca3af" }}
                      >
                        <option value="">選択してください</option>
                        <option value="有料でも参加したい">有料でも参加したい</option>
                        <option value="内容次第で検討したい">内容次第で検討したい</option>
                        <option value="無料相談だけ希望">無料相談だけ希望</option>
                      </select>
                      {fieldErrors.paidDiagnosisReadiness && (
                        <p className="mt-2 text-sm text-red-600">{fieldErrors.paidDiagnosisReadiness}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-semibold" style={{ color: "#0c1a33" }}>
                      初回診断への保護者同席 <span className="ml-2 rounded px-2 py-0.5 text-xs text-white" style={{ backgroundColor: "#c9922a" }}>必須</span>
                    </label>
                    <div className="grid gap-3 md:grid-cols-3">
                      {["同席できる", "日程次第で同席できる", "本人のみ希望"].map((value) => (
                        <button
                          key={value}
                          type="button"
                          aria-pressed={formData.parentJoin === value}
                          onClick={() => updateField("parentJoin", value)}
                          className="rounded-lg px-4 py-3 text-sm font-bold transition-colors"
                          style={{
                            border: `2px solid ${formData.parentJoin === value ? "#c9922a" : "#e5e1d8"}`,
                            backgroundColor: formData.parentJoin === value ? "rgba(201,146,42,0.08)" : "#fff",
                            color: formData.parentJoin === value ? "#c9922a" : "#5f6b7a",
                          }}
                        >
                          {value}
                        </button>
                      ))}
                    </div>
                    {fieldErrors.parentJoin && (
                      <p className="mt-2 text-sm text-red-600">{fieldErrors.parentJoin}</p>
                    )}
                  </div>

                  <div>
                    <label className="mb-1.5 block text-sm font-semibold" style={{ color: "#0c1a33" }}>
                      相談したい内容
                    </label>
                    <textarea
                      rows={5}
                      value={formData.message}
                      onChange={(e) => updateField("message", e.target.value)}
                      className="w-full resize-none rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2"
                      style={{ border: "1px solid #e5e1d8", color: "#0c1a33" }}
                        placeholder="例: 大手予備校に通っていますが復習管理と質問対応が足りず、国公立と私立併願の配分にも不安があります。保護者同席で方針を相談したいです。"
                    />
                  </div>

                  {error && <p className="text-center text-sm text-red-600">{error}</p>}

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full rounded-lg py-4 text-base font-bold text-white shadow-md transition-opacity hover:opacity-90 disabled:opacity-50"
                    style={{ backgroundColor: "#c9922a" }}
                  >
                    {loading ? "送信中..." : "合格戦略診断を申し込む"}
                  </button>
                  <p className="text-center text-xs leading-relaxed" style={{ color: "#9ca3af" }}>
                    送信後2営業日以内にご連絡します。診断前に、可能であれば模試結果・受験予定校・現在利用している塾や予備校の情報共有をお願いする場合があります。
                  </p>
                </form>
              </>
            )}
          </div>

          <aside className="space-y-6">
            <div className="rounded-lg bg-white p-6" style={{ border: "1px solid #e5e1d8" }}>
              <p className="mb-4 text-sm font-bold" style={{ color: "#0c1a33" }}>
                診断に向いているご家庭
              </p>
              <ul className="space-y-3">
                {sideChecks.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-relaxed" style={{ color: "#3d3d3d" }}>
                    <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full text-xs font-bold text-white" style={{ backgroundColor: "#c9922a" }}>
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-lg p-6 text-white" style={{ backgroundColor: "#0c1a33" }}>
              <p className="mb-2 text-sm font-bold" style={{ color: "#c9922a" }}>
                低優先になる相談
              </p>
              <p className="text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.68)" }}>
                第一志望以外の受験校を検討しない、学習時間を増やす意思がない、無料相談だけを希望する、保護者が意思決定に関与しない場合は、Medvanceの伴走と相性が合わない可能性があります。
              </p>
            </div>

            <div className="rounded-lg bg-white p-6" style={{ border: "1px solid #e5e1d8" }}>
              <p className="mb-4 text-sm font-bold" style={{ color: "#0c1a33" }}>
                診断後の流れ
              </p>
              <div className="space-y-4">
                {[
                  { step: "01", title: "日程調整", body: "保護者同席の可否を踏まえてオンライン診断日を設定します。" },
                  { step: "02", title: "60分診断", body: "予備校利用、受験校、科目、学習量、指導投資の優先順位を整理します。" },
                  { step: "03", title: "提案", body: "必要な場合のみ、医学部合格に向けた戦略伴走プログラムをご提案します。" },
                ].map((item) => (
                  <div key={item.step} className="flex gap-3">
                    <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full text-xs font-bold text-white" style={{ backgroundColor: "#0c1a33" }}>
                      {item.step}
                    </span>
                    <div>
                      <p className="text-sm font-bold" style={{ color: "#0c1a33" }}>{item.title}</p>
                      <p className="mt-0.5 text-xs leading-relaxed" style={{ color: "#5f6b7a" }}>{item.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <a
              href={LINE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-lg px-6 py-4 text-sm font-bold text-white transition-opacity hover:opacity-90"
              style={{ backgroundColor: "#06C755" }}
            >
              <LineIcon />
              LINEで先に相談する
            </a>
          </aside>
        </div>
      </section>
    </div>
  );
}
