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

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    status: "",
    targetType: "",
    targetName: "",
    message: "",
    source: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    const sourceFromQuery = new URLSearchParams(window.location.search).get("from") ?? "";
    if (!sourceFromQuery) return;

    setFormData((prev) => (
      prev.source ? prev : { ...prev, source: sourceFromQuery }
    ));
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
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
          event_label: "無料相談申し込み",
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

      {/* ── Hero ─────────────────────────────── */}
      <div style={{ backgroundColor: "#0c1a33" }} className="py-20 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#c9922a" }}>
            Free Consultation
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-noto-serif)" }}>
            まず、話してみてください。
          </h1>
          <p className="text-sm mb-8" style={{ color: "rgba(255,255,255,0.65)" }}>
            売り込みは一切しません。あなたの状況をお聞きして、正直にお答えします。
          </p>
          {/* 特典バナー */}
          <div className="mb-6 mx-auto max-w-sm rounded-xl px-5 py-3" style={{ backgroundColor: "rgba(201,146,42,0.15)", border: "1px solid rgba(201,146,42,0.4)" }}>
            <p className="text-xs font-bold text-center" style={{ color: "#c9922a" }}>
              📘 申し込み特典：医学部受験戦略マニュアルを同時にお届けします
            </p>
          </div>
          {/* LINE Quick CTA */}
          <div className="mb-6 flex justify-center">
            <a
              href={LINE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-3 rounded-full font-bold text-sm shadow-lg hover:opacity-90 transition-opacity text-white"
              style={{ backgroundColor: "#06C755" }}
            >
              <svg viewBox="0 0 36 36" className="w-5 h-5" aria-hidden="true">
                <path fill="currentColor" d="M18 3C9.716 3 3 8.476 3 15.224c0 6.03 5.327 11.08 12.525 12.03.487.104 1.15.32 1.318.735.15.377.098.967.049 1.347l-.212 1.276c-.065.377-.302 1.478 1.294.805 1.596-.673 8.618-5.076 11.76-8.691C31.95 20.267 33 17.87 33 15.224 33 8.476 26.284 3 18 3zm-6.18 14.36h-3.4c-.266 0-.483-.217-.483-.484v-5.49c0-.267.217-.484.484-.484.266 0 .483.217.483.484v5.005h2.916c.266 0 .483.216.483.484 0 .267-.217.485-.483.485zm1.935-.484c0 .267-.217.485-.484.485-.267 0-.484-.218-.484-.485v-5.49c0-.267.217-.484.484-.484.267 0 .484.217.484.484v5.49zm6.35 0c0 .208-.133.393-.33.46-.05.015-.102.023-.154.023-.155 0-.3-.07-.393-.191l-2.82-3.86v3.568c0 .267-.217.485-.484.485-.266 0-.482-.218-.482-.485v-5.49c0-.207.132-.392.33-.459.05-.017.103-.024.153-.024.15 0 .297.07.39.192l2.826 3.86v-3.569c0-.267.216-.484.483-.484.267 0 .484.217.484.484v5.49zm3.922-3.228c.267 0 .484.218.484.485 0 .267-.217.485-.484.485h-1.938v.76h1.938c.266 0 .484.217.484.484s-.217.484-.484.484h-2.42c-.266 0-.483-.217-.483-.484v-5.49c0-.267.217-.484.484-.484h2.42c.266 0 .483.217.483.484 0 .268-.217.485-.484.485h-1.938v.76h1.938z" />
              </svg>
              LINEですぐ無料相談
              <span className="text-[10px] font-normal opacity-80 ml-1">/ 最短即日返信</span>
            </a>
          </div>
          <p className="text-xs mb-6" style={{ color: "rgba(255,255,255,0.55)" }}>
            ↓ フォーム派の方はこちら
          </p>

          {/* 3つの保証 */}
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { icon: "✓", text: "完全無料" },
              { icon: "✓", text: "勧誘・押し売りなし" },
              { icon: "✓", text: "全国オンライン対応" },
              { icon: "✓", text: "2営業日以内に返信" },
            ].map((item) => (
              <span
                key={item.text}
                className="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full font-semibold"
                style={{ backgroundColor: "rgba(201,146,42,0.15)", color: "#c9922a", border: "1px solid rgba(201,146,42,0.3)" }}
              >
                {item.icon} {item.text}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ── Main Content ─────────────────────── */}
      <div className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-[1fr_380px] gap-12 items-start">

            {/* ── Form ───────────────────────── */}
            <div>
              {submitted ? (
                <div className="text-center py-16">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl"
                    style={{ backgroundColor: "rgba(201,146,42,0.1)", border: "2px solid #c9922a" }}
                  >
                    ✓
                  </div>
                  <h2 className="text-2xl font-bold mb-3" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>
                    お問い合わせを受け付けました
                  </h2>
                  <p className="text-sm mb-8" style={{ color: "#6b7280" }}>
                    2営業日以内に、ご登録のメールアドレスへご連絡いたします。
                  </p>
                  <a
                    href={LINE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mb-8 inline-flex items-center justify-center rounded-full px-7 py-3 text-sm font-bold text-white hover:opacity-90 transition-opacity"
                    style={{ backgroundColor: "#06C755" }}
                  >
                    LINEで追加質問する
                  </a>
                  {/* 次のステップ */}
                  <div className="text-left max-w-sm mx-auto space-y-4">
                    <p className="text-xs font-bold tracking-wide uppercase mb-3" style={{ color: "#c9922a" }}>次のステップ</p>
                    {[
                      { step: "01", text: "担当者からメールでご連絡します（2営業日以内）" },
                      { step: "02", text: "日程調整の後、ZoomまたはGoogle Meetで30分の無料相談" },
                      { step: "03", text: "相談内容をもとに、合格プランをご提案します" },
                    ].map((item) => (
                      <div key={item.step} className="flex gap-3 text-sm" style={{ color: "#3d3d3d" }}>
                        <span className="flex-shrink-0 font-bold text-xs mt-0.5" style={{ color: "#c9922a" }}>{item.step}</span>
                        {item.text}
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <>
                  <h2 className="text-xl font-bold mb-2" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>
                    無料相談フォーム
                  </h2>
                  <p className="text-sm mb-2" style={{ color: "#6b7280" }}>
                    まずはお名前とメールだけで大丈夫です。30秒で完了します。
                  </p>
                  <p className="text-xs mb-8" style={{ color: "#9ca3af" }}>
                    詳細は折りたたみ欄で、必要な方だけ入力できます。
                  </p>

                  <div className="rounded-2xl p-5 mb-6" style={{ backgroundColor: "#f7f5f0", border: "1px solid #e5e1d8" }}>
                    <p className="text-sm font-bold mb-3" style={{ color: "#0c1a33" }}>
                      相談で分かる3つのこと
                    </p>
                    <div className="grid gap-2">
                      {[
                        "今の学力から志望校までの最短ルート",
                        "今日から変えるべき学習習慣の優先順位",
                        "Medvanceで伴走した場合の具体的な進め方",
                      ].map((item) => (
                        <div key={item} className="flex items-start gap-2 text-sm" style={{ color: "#3d3d3d" }}>
                          <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full text-xs font-bold text-white" style={{ backgroundColor: "#c9922a" }}>
                            ✓
                          </span>
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {formData.source && (
                    <div className="rounded-xl p-4 mb-6" style={{ backgroundColor: "rgba(201,146,42,0.08)", border: "1px solid rgba(201,146,42,0.25)" }}>
                      <p className="text-xs font-semibold mb-1" style={{ color: "#c9922a" }}>
                        記事ページからのご相談として受け付けます
                      </p>
                      <p className="text-xs leading-relaxed" style={{ color: "#6b7280" }}>
                        読んで気になった内容があれば、そのままご相談内容に書いていただければ大丈夫です。志望校・現状・悩みに合わせて具体的にお答えします。
                      </p>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-5">
                    {/* お名前 */}
                    <div>
                      <label className="block text-sm font-semibold mb-1.5" style={{ color: "#0c1a33" }}>
                        お名前
                        <span className="inline-block text-xs text-white px-2 py-0.5 rounded ml-2" style={{ backgroundColor: "#c9922a" }}>
                          必須
                        </span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2"
                        style={{ border: "1px solid #e5e1d8", color: "#0c1a33", focusRingColor: "#c9922a" } as React.CSSProperties}
                        placeholder="山田 太郎"
                      />
                    </div>

                    {/* メール */}
                    <div>
                      <label className="block text-sm font-semibold mb-1.5" style={{ color: "#0c1a33" }}>
                        メールアドレス
                        <span className="inline-block text-xs text-white px-2 py-0.5 rounded ml-2" style={{ backgroundColor: "#c9922a" }}>
                          必須
                        </span>
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2"
                        style={{ border: "1px solid #e5e1d8", color: "#0c1a33" }}
                        placeholder="example@email.com"
                      />
                    </div>

                    {/* 詳細情報（折りたたみ） */}
                    <div className="pt-1">
                      <button
                        type="button"
                        onClick={() => setShowDetails(!showDetails)}
                        className="flex items-center gap-2 text-sm font-semibold hover:underline"
                        style={{ color: "#c9922a" }}
                        aria-expanded={showDetails}
                      >
                        <span>{showDetails ? "−" : "+"}</span>
                        事前に詳細を伝える（任意・相談がスムーズになります）
                      </button>
                    </div>

                    {showDetails && (
                      <div className="space-y-5 pt-1">
                        {/* 学年・状況 */}
                        <div>
                          <label className="block text-sm font-semibold mb-1.5" style={{ color: "#0c1a33" }}>
                            現在の状況
                          </label>
                          <select
                            value={formData.status}
                            onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                            className="w-full rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 bg-white"
                            style={{ border: "1px solid #e5e1d8", color: formData.status ? "#0c1a33" : "#9ca3af" }}
                          >
                            <option value="">選択してください</option>
                            <option value="現役高校生（高3）">現役高校生（高3）</option>
                            <option value="現役高校生（高2）">現役高校生（高2）</option>
                            <option value="現役高校生（高1）">現役高校生（高1）</option>
                            <option value="浪人生（1浪）">浪人生（1浪）</option>
                            <option value="浪人生（多浪）">浪人生（多浪）</option>
                            <option value="再受験生（大学生・社会人）">再受験生（大学生・社会人）</option>
                            <option value="保護者として相談したい">保護者として相談したい</option>
                            <option value="中学生">中学生</option>
                            <option value="小学生">小学生</option>
                            <option value="その他">その他</option>
                          </select>
                        </div>

                        {/* 志望校 */}
                        <div>
                          <label className="block text-sm font-semibold mb-2" style={{ color: "#0c1a33" }}>
                            志望校
                          </label>
                          <div className="flex gap-3 mb-2">
                            {[
                              { value: "国立", label: "国立" },
                              { value: "私立", label: "私立" },
                            ].map((opt) => (
                              <button
                                key={opt.value}
                                type="button"
                                onClick={() => setFormData({ ...formData, targetType: formData.targetType === opt.value ? "" : opt.value })}
                                className="flex-1 py-2.5 rounded-lg text-sm font-semibold transition-colors"
                                style={{
                                  border: `2px solid ${formData.targetType === opt.value ? "#c9922a" : "#e5e1d8"}`,
                                  backgroundColor: formData.targetType === opt.value ? "rgba(201,146,42,0.08)" : "#fff",
                                  color: formData.targetType === opt.value ? "#c9922a" : "#6b7280",
                                }}
                              >
                                {opt.label}
                              </button>
                            ))}
                          </div>
                          <input
                            type="text"
                            value={formData.targetName}
                            onChange={(e) => setFormData({ ...formData, targetName: e.target.value })}
                            className="w-full rounded-lg px-4 py-3 text-sm focus:outline-none"
                            style={{ border: "1px solid #e5e1d8", color: "#0c1a33" }}
                            placeholder="具体的な志望校名（例：慶應義塾大学医学部）"
                          />
                        </div>

                        {/* 電話 */}
                        <div>
                          <label className="block text-sm font-semibold mb-1.5" style={{ color: "#0c1a33" }}>
                            電話番号
                          </label>
                          <input
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            className="w-full rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2"
                            style={{ border: "1px solid #e5e1d8", color: "#0c1a33" }}
                            placeholder="090-0000-0000"
                          />
                        </div>

                        {/* メッセージ */}
                        <div>
                          <label className="block text-sm font-semibold mb-1.5" style={{ color: "#0c1a33" }}>
                            ご相談内容
                          </label>
                          <textarea
                            rows={4}
                            value={formData.message}
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            className="w-full rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 resize-none"
                            style={{ border: "1px solid #e5e1d8", color: "#0c1a33" }}
                            placeholder="例：現在偏差値55で慶應医学部を目指しています。何から始めればいいか相談したいです。"
                          />
                          <p className="text-xs mt-1.5" style={{ color: "#9ca3af" }}>
                            「まだ何も決まっていない」「とりあえず話だけ聞きたい」でも大丈夫です。
                          </p>
                        </div>
                      </div>
                    )}

                    {error && (
                      <p className="text-red-600 text-sm text-center">{error}</p>
                    )}

                    <div className="rounded-xl p-4" style={{ backgroundColor: "rgba(201,146,42,0.08)", border: "1px solid rgba(201,146,42,0.25)" }}>
                      <p className="text-xs text-center font-semibold mb-1" style={{ color: "#c9922a" }}>📘 申し込みと同時に、医学部受験戦略マニュアルをお届けします（無料）</p>
                      <p className="text-xs text-center" style={{ color: "#6b7280" }}>相談前に読んでおくと、より具体的な話ができます</p>
                    </div>
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full py-4 text-white font-bold text-base rounded-lg shadow-md hover:opacity-90 transition-opacity disabled:opacity-50"
                      style={{ backgroundColor: "#c9922a" }}
                    >
                      {loading ? "送信中..." : "無料相談を申し込む（完全無料）"}
                    </button>
                    <p className="text-xs text-center" style={{ color: "#9ca3af" }}>
                      送信後2営業日以内にメールでご連絡します。勧誘は一切行いません。
                    </p>
                  </form>
                </>
              )}
            </div>

            {/* ── Sidebar ─────────────────────── */}
            <div className="space-y-6">

              {/* こんな相談でも大丈夫 */}
              <div className="rounded-2xl p-6" style={{ backgroundColor: "#f7f5f0", border: "1px solid #e5e1d8" }}>
                <p className="font-bold text-sm mb-4" style={{ color: "#0c1a33" }}>こんな相談でも大丈夫です</p>
                <ul className="space-y-2.5">
                  {[
                    "偏差値40台から医学部を目指したい",
                    "何から始めればいいかわからない",
                    "今の勉強法が正しいか不安",
                    "浪人して合格できるか心配",
                    "社会人から再受験を考えている",
                    "地方に住んでいて塾に通えない",
                    "費用のことを知りたい",
                    "まず話だけ聞いてみたい",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm" style={{ color: "#3d3d3d" }}>
                      <span className="flex-shrink-0 w-4 h-4 rounded-full flex items-center justify-center text-white text-xs mt-0.5" style={{ backgroundColor: "#c9922a" }}>✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* 相談後の流れ */}
              <div className="rounded-2xl p-6" style={{ border: "1px solid #e5e1d8" }}>
                <p className="font-bold text-sm mb-4" style={{ color: "#0c1a33" }}>相談後の流れ</p>
                <div className="space-y-4">
                  {[
                    { step: "01", title: "メールでご連絡", body: "2営業日以内に担当者よりご連絡します。" },
                    { step: "02", title: "日程調整", body: "ご都合の良い日時にZoom・Google Meetで30分の無料相談を設定します。" },
                    { step: "03", title: "無料相談（30分）", body: "現状ヒアリング・合格プランの提案・疑問へのお答えを行います。" },
                    { step: "04", title: "体験指導または本契約", body: "相談後にご検討いただけます。急かすことは一切ありません。" },
                  ].map((item, i) => (
                    <div key={i} className="flex gap-3">
                      <div
                        className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-white text-xs font-bold"
                        style={{ backgroundColor: "#0c1a33" }}
                      >
                        {i + 1}
                      </div>
                      <div>
                        <p className="font-bold text-sm" style={{ color: "#0c1a33" }}>{item.title}</p>
                        <p className="text-xs leading-relaxed mt-0.5" style={{ color: "#6b7280" }}>{item.body}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* マニュアル特典ビジュアル */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-2 h-2 rounded-full" style={{ backgroundColor: "#c9922a" }} />
                  <p className="text-xs font-bold tracking-widest uppercase" style={{ color: "#c9922a" }}>申し込み特典</p>
                </div>
                {/* Book mockup */}
                <div className="relative" style={{ perspective: "800px" }}>
                  <div
                    className="rounded-lg overflow-hidden shadow-xl"
                    style={{
                      background: "linear-gradient(135deg, #0c1a33 0%, #142b57 100%)",
                      border: "1px solid rgba(201,146,42,0.3)",
                      transform: "rotateY(-4deg)",
                      transformStyle: "preserve-3d",
                    }}
                  >
                    {/* Gold spine accent */}
                    <div style={{ height: "3px", background: "linear-gradient(90deg, #c9922a, #e8b84b, #c9922a)" }} />
                    <div className="p-6">
                      {/* Label */}
                      <p className="text-xs font-bold tracking-widest uppercase mb-5" style={{ color: "#c9922a", letterSpacing: "0.2em" }}>Medvance</p>
                      {/* Title */}
                      <h3 className="text-white font-bold leading-tight mb-1" style={{ fontSize: "1.2rem", fontFamily: "var(--font-noto-serif)" }}>
                        医学部受験
                      </h3>
                      <h3 className="font-bold leading-tight mb-5" style={{ fontSize: "1.2rem", fontFamily: "var(--font-noto-serif)", color: "#e8b84b" }}>
                        戦略マニュアル
                      </h3>
                      {/* Divider */}
                      <div style={{ height: "1px", backgroundColor: "rgba(201,146,42,0.3)", marginBottom: "16px" }} />
                      {/* Chapter list */}
                      <div className="space-y-2 mb-6">
                        {[
                          "医学部入試の全体像",
                          "科目別・最短攻略法",
                          "合格者の年間スケジュール",
                          "面接・小論文の対策",
                          "合格者と不合格者の違い",
                          "難関校別・攻略ポイント",
                        ].map((ch, i) => (
                          <div key={i} className="flex items-center gap-2.5">
                            <span className="text-xs font-bold flex-shrink-0" style={{ color: "#c9922a", fontVariantNumeric: "tabular-nums" }}>
                              {String(i + 1).padStart(2, "0")}
                            </span>
                            <span className="text-xs" style={{ color: "rgba(255,255,255,0.7)" }}>{ch}</span>
                          </div>
                        ))}
                      </div>
                      {/* Footer */}
                      <div style={{ borderTop: "1px solid rgba(201,146,42,0.25)", paddingTop: "12px" }}>
                        <p className="text-xs" style={{ color: "rgba(255,255,255,0.45)" }}>現役慶應義塾大学医学部生 監修</p>
                      </div>
                    </div>
                    {/* Bottom gold bar */}
                    <div style={{ height: "4px", background: "linear-gradient(90deg, #c9922a, #e8b84b, #c9922a)" }} />
                  </div>
                  {/* Shadow under book */}
                  <div
                    className="absolute inset-x-4 -bottom-2 h-4 rounded-full blur-md"
                    style={{ backgroundColor: "rgba(12,26,51,0.4)", zIndex: -1 }}
                  />
                </div>
                <div className="mt-4 text-center rounded-xl py-3 px-4" style={{ backgroundColor: "rgba(201,146,42,0.08)", border: "1px solid rgba(201,146,42,0.25)" }}>
                  <p className="text-xs font-semibold" style={{ color: "#c9922a" }}>無料相談に申し込むと同時に受け取れます</p>
                </div>
              </div>

              {/* オンライン対応 */}
              <div className="rounded-2xl p-6 text-white" style={{ backgroundColor: "#0c1a33" }}>
                <p className="font-bold text-sm mb-2" style={{ color: "#c9922a" }}>全国オンライン対応</p>
                <p className="text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.7)" }}>
                  北海道から沖縄まで、海外在住の方も受講可能です。Zoomを使った指導のため、場所の制約はありません。
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
