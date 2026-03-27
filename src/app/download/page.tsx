"use client";

import { useState } from "react";
import Link from "next/link";

const chapters = [
  { num: "01", title: "医学部入試の全体像" },
  { num: "02", title: "科目別・最短攻略法" },
  { num: "03", title: "合格者の年間スケジュール" },
  { num: "04", title: "面接・小論文の対策" },
  { num: "05", title: "合格者と不合格者の5つの違い" },
  { num: "06", title: "難関校別・攻略ポイント" },
];

export default function DownloadPage() {
  const [formData, setFormData] = useState({ name: "", email: "", status: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/download", {
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
      setError(err instanceof Error ? err.message : "エラーが発生しました");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-white">
        <div style={{ backgroundColor: "#0c1a33" }} className="py-20 px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl" style={{ backgroundColor: "rgba(201,146,42,0.2)", border: "2px solid #c9922a" }}>
              ✓
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-3" style={{ fontFamily: "'Noto Serif JP', serif" }}>
              マニュアルを送りました
            </h1>
            <p className="text-sm" style={{ color: "rgba(255,255,255,0.65)" }}>
              ご登録のメールアドレスに送付しました。ご確認ください。
            </p>
          </div>
        </div>

        <div className="py-16 px-4">
          <div className="max-w-2xl mx-auto">
            {/* 次のステップ */}
            <div className="text-center mb-12">
              <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#c9922a" }}>Next Step</p>
              <h2 className="text-2xl font-bold mb-4" style={{ color: "#0c1a33", fontFamily: "'Noto Serif JP', serif" }}>
                マニュアルを読んだら、無料相談へ
              </h2>
              <p className="text-sm leading-relaxed mb-8" style={{ color: "#6b7280" }}>
                マニュアルは「全体像を知る」ための資料です。<br />
                あなたの状況・志望校に合わせた具体的な戦略は、無料相談でお伝えします。
              </p>
              <Link
                href="/contact"
                className="inline-block px-10 py-4 text-white font-bold text-base rounded-lg shadow-md hover:opacity-90 transition-opacity"
                style={{ backgroundColor: "#c9922a" }}
              >
                無料相談を申し込む（30分）
              </Link>
              <p className="mt-3 text-xs" style={{ color: "#9ca3af" }}>完全無料・勧誘なし・全国オンライン対応</p>
            </div>

            {/* 相談で何がわかるか */}
            <div className="rounded-2xl p-8" style={{ backgroundColor: "#f7f5f0", border: "1px solid #e5e1d8" }}>
              <p className="font-bold text-sm mb-5" style={{ color: "#0c1a33" }}>無料相談（30分）でわかること</p>
              <div className="space-y-3">
                {[
                  "今の学力から合格に必要なこと",
                  "志望校別の対策ポイント",
                  "何から手をつければいいか",
                  "Medvanceが自分に合っているか",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm" style={{ color: "#3d3d3d" }}>
                    <span className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-white text-xs font-bold" style={{ backgroundColor: "#c9922a" }}>{i + 1}</span>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">

      {/* Hero */}
      <div style={{ backgroundColor: "#0c1a33" }} className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold mb-6" style={{ backgroundColor: "rgba(201,146,42,0.2)", color: "#c9922a", border: "1px solid rgba(201,146,42,0.4)" }}>
            📘 無料配布中
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: "'Noto Serif JP', serif" }}>
            医学部受験戦略マニュアル
          </h1>
          <p className="text-sm" style={{ color: "rgba(255,255,255,0.6)" }}>
            現役慶應医学部生 監修｜全6章
          </p>
        </div>
      </div>

      {/* Form + Contents */}
      <div className="py-16 px-4" style={{ backgroundColor: "#f7f5f0" }}>
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-[1fr_340px] gap-10 items-start">

            {/* 目次 */}
            <div>
              <p className="text-xs font-semibold tracking-widest uppercase mb-5" style={{ color: "#c9922a" }}>Contents</p>
              <div className="space-y-3">
                {chapters.map((ch) => (
                  <div key={ch.num} className="flex items-center gap-4 p-4 rounded-xl bg-white" style={{ border: "1px solid #e5e1d8" }}>
                    <span className="text-xs font-bold flex-shrink-0" style={{ color: "#c9922a" }}>Ch.{ch.num}</span>
                    <span className="font-semibold text-sm" style={{ color: "#0c1a33" }}>{ch.title}</span>
                  </div>
                ))}
              </div>
              <p className="text-xs mt-5" style={{ color: "#9ca3af" }}>
                ※ マニュアルは「全体像を把握する」ための資料です。<br />
                あなたの状況に合わせた具体的なアドバイスは、無料相談でお伝えします。
              </p>
            </div>

            {/* フォーム */}
            <div className="md:sticky md:top-8">
              <div className="rounded-2xl p-7 bg-white shadow-md" style={{ border: "2px solid #c9922a" }}>
                <p className="font-bold text-center text-base mb-1" style={{ color: "#0c1a33" }}>無料で受け取る</p>
                <p className="text-xs text-center mb-5" style={{ color: "#6b7280" }}>メールアドレスを登録してすぐ受け取れます</p>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold mb-1.5" style={{ color: "#0c1a33" }}>
                      お名前 <span className="text-white text-xs px-1.5 py-0.5 rounded ml-1" style={{ backgroundColor: "#c9922a" }}>必須</span>
                    </label>
                    <input
                      type="text" required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full rounded-lg px-3 py-2.5 text-sm focus:outline-none"
                      style={{ border: "1px solid #e5e1d8", color: "#0c1a33" }}
                      placeholder="山田 太郎"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold mb-1.5" style={{ color: "#0c1a33" }}>
                      メールアドレス <span className="text-white text-xs px-1.5 py-0.5 rounded ml-1" style={{ backgroundColor: "#c9922a" }}>必須</span>
                    </label>
                    <input
                      type="email" required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full rounded-lg px-3 py-2.5 text-sm focus:outline-none"
                      style={{ border: "1px solid #e5e1d8", color: "#0c1a33" }}
                      placeholder="example@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold mb-1.5" style={{ color: "#0c1a33" }}>
                      現在の状況 <span className="text-white text-xs px-1.5 py-0.5 rounded ml-1" style={{ backgroundColor: "#c9922a" }}>必須</span>
                    </label>
                    <select
                      required
                      value={formData.status}
                      onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                      className="w-full rounded-lg px-3 py-2.5 text-sm focus:outline-none bg-white"
                      style={{ border: "1px solid #e5e1d8", color: formData.status ? "#0c1a33" : "#9ca3af" }}
                    >
                      <option value="" disabled>選択してください</option>
                      <option value="現役高校生（高1・高2）">現役高校生（高1・高2）</option>
                      <option value="現役高校生（高3）">現役高校生（高3）</option>
                      <option value="浪人生">浪人生</option>
                      <option value="再受験生（社会人・大学生）">再受験生（社会人・大学生）</option>
                      <option value="保護者">保護者</option>
                    </select>
                  </div>
                  {error && <p className="text-red-600 text-xs">{error}</p>}
                  <button
                    type="submit" disabled={loading}
                    className="w-full py-3.5 text-white font-bold text-sm rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50"
                    style={{ backgroundColor: "#c9922a" }}
                  >
                    {loading ? "送信中..." : "無料でマニュアルを受け取る"}
                  </button>
                  <p className="text-xs text-center" style={{ color: "#9ca3af" }}>
                    勧誘・営業メールは一切送りません
                  </p>
                </form>
              </div>

              <div className="mt-4 p-4 rounded-xl text-center" style={{ backgroundColor: "#f7f5f0", border: "1px solid #e5e1d8" }}>
                <p className="text-xs mb-1.5" style={{ color: "#6b7280" }}>もっと詳しく相談したい方は</p>
                <Link href="/contact" className="text-sm font-bold hover:underline" style={{ color: "#c9922a" }}>
                  無料相談（30分）を申し込む →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
