"use client";

import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    status: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

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
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: "'Noto Serif JP', serif" }}>
            まず、話してみてください。
          </h1>
          <p className="text-sm mb-8" style={{ color: "rgba(255,255,255,0.65)" }}>
            売り込みは一切しません。あなたの状況をお聞きして、正直にお答えします。
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
                  <h2 className="text-2xl font-bold mb-3" style={{ color: "#0c1a33", fontFamily: "'Noto Serif JP', serif" }}>
                    お問い合わせを受け付けました
                  </h2>
                  <p className="text-sm mb-8" style={{ color: "#6b7280" }}>
                    2営業日以内に、ご登録のメールアドレスへご連絡いたします。
                  </p>
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
                  <h2 className="text-xl font-bold mb-2" style={{ color: "#0c1a33", fontFamily: "'Noto Serif JP', serif" }}>
                    無料相談フォーム
                  </h2>
                  <p className="text-sm mb-8" style={{ color: "#6b7280" }}>
                    どんな内容でも大丈夫です。「まだ迷っている」「学力が心配」でも構いません。
                  </p>

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

                    {/* 学年・状況 */}
                    <div>
                      <label className="block text-sm font-semibold mb-1.5" style={{ color: "#0c1a33" }}>
                        現在の状況
                        <span className="inline-block text-xs text-white px-2 py-0.5 rounded ml-2" style={{ backgroundColor: "#c9922a" }}>
                          必須
                        </span>
                      </label>
                      <select
                        required
                        value={formData.status}
                        onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                        className="w-full rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 bg-white"
                        style={{ border: "1px solid #e5e1d8", color: formData.status ? "#0c1a33" : "#9ca3af" }}
                      >
                        <option value="" disabled>選択してください</option>
                        <option value="現役高校生（高1）">現役高校生（高1）</option>
                        <option value="現役高校生（高2）">現役高校生（高2）</option>
                        <option value="現役高校生（高3）">現役高校生（高3）</option>
                        <option value="浪人生（1浪）">浪人生（1浪）</option>
                        <option value="浪人生（多浪）">浪人生（多浪）</option>
                        <option value="再受験生（大学生・社会人）">再受験生（大学生・社会人）</option>
                        <option value="保護者として相談したい">保護者として相談したい</option>
                        <option value="その他">その他</option>
                      </select>
                    </div>

                    {/* 電話 */}
                    <div>
                      <label className="block text-sm font-semibold mb-1.5" style={{ color: "#0c1a33" }}>
                        電話番号
                        <span className="inline-block text-xs ml-2" style={{ color: "#9ca3af" }}>任意</span>
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
                        <span className="inline-block text-xs text-white px-2 py-0.5 rounded ml-2" style={{ backgroundColor: "#c9922a" }}>
                          必須
                        </span>
                      </label>
                      <textarea
                        required
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 resize-none"
                        style={{ border: "1px solid #e5e1d8", color: "#0c1a33" }}
                        placeholder="例：高2です。現在偏差値55で慶應医学部を目指しています。何から始めればいいか相談したいです。"
                      />
                      <p className="text-xs mt-1.5" style={{ color: "#9ca3af" }}>
                        志望校・現在の学力・悩みなど、何でも書いてください。「まだ決まっていない」でも大丈夫です。
                      </p>
                    </div>

                    {error && (
                      <p className="text-red-600 text-sm text-center">{error}</p>
                    )}

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
