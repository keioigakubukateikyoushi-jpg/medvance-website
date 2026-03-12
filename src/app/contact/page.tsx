"use client";

import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
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
    <div className="py-16 px-4 min-h-screen bg-white">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center" style={{ color: "#142b57" }}>
          無料相談・指導依頼・お問い合わせ
        </h1>
        <p className="text-base leading-relaxed mb-4 text-center" style={{ color: "#424f8f" }}>
          Medvanceへのご相談・ご依頼はこちらのフォームからお気軽にどうぞ。
          お名前・メールアドレス・ご相談内容をご記入のうえ、送信してください。
          担当者より2営業日以内にご連絡いたします。
        </p>
        <p className="text-sm mb-10 text-center" style={{ color: "#a69891" }}>
          オンライン・対面どちらのご相談も受け付けております。
        </p>

        {submitted ? (
          <div className="p-8 rounded-lg text-center" style={{ backgroundColor: "#d1d3ca" }}>
            <p className="text-xl font-bold mb-2" style={{ color: "#142b57" }}>
              お問い合わせを受け付けました
            </p>
            <p style={{ color: "#424f8f" }}>
              2営業日以内にご連絡いたします。しばらくお待ちください。
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-semibold mb-1" style={{ color: "#142b57" }}>
                お名前{" "}
                <span className="inline-block text-xs text-white px-2 py-0.5 rounded ml-1" style={{ backgroundColor: "#142b57" }}>
                  必須
                </span>
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full border rounded px-4 py-2 text-sm focus:outline-none focus:ring-2"
                style={{ borderColor: "#d1d3ca", color: "#142b57" }}
                placeholder="山田 太郎"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-1" style={{ color: "#142b57" }}>
                メールアドレス{" "}
                <span className="inline-block text-xs text-white px-2 py-0.5 rounded ml-1" style={{ backgroundColor: "#142b57" }}>
                  必須
                </span>
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full border rounded px-4 py-2 text-sm focus:outline-none focus:ring-2"
                style={{ borderColor: "#d1d3ca", color: "#142b57" }}
                placeholder="example@email.com"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-1" style={{ color: "#142b57" }}>
                電話番号（任意）
              </label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full border rounded px-4 py-2 text-sm focus:outline-none focus:ring-2"
                style={{ borderColor: "#d1d3ca", color: "#142b57" }}
                placeholder="090-0000-0000"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-1" style={{ color: "#142b57" }}>
                お問い合わせ内容{" "}
                <span className="inline-block text-xs text-white px-2 py-0.5 rounded ml-1" style={{ backgroundColor: "#142b57" }}>
                  必須
                </span>
              </label>
              <textarea
                required
                rows={6}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full border rounded px-4 py-2 text-sm focus:outline-none focus:ring-2 resize-none"
                style={{ borderColor: "#d1d3ca", color: "#142b57" }}
                placeholder="現在の学力・志望校・ご相談内容などをご記入ください"
              />
            </div>

            {error && (
              <p className="text-red-600 text-sm text-center">{error}</p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 text-white font-bold text-lg rounded shadow-md hover:opacity-90 transition-opacity disabled:opacity-50"
              style={{ backgroundColor: "#142b57" }}
            >
              {loading ? "送信中..." : "送信する"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
