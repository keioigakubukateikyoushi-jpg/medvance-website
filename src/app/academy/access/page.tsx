"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { FormEvent, Suspense, useState } from "react";

function AccessForm() {
  const router = useRouter();
  const sp = useSearchParams();
  const next = sp.get("next") || "/academy/library";
  const [code, setCode] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/academy/access", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code }),
      });
      const data = (await res.json()) as { ok?: boolean; error?: string };
      if (!res.ok || !data.ok) {
        setError(data.error || "認証に失敗しました");
        setLoading(false);
        return;
      }
      router.push(next);
      router.refresh();
    } catch {
      setError("通信エラーが発生しました");
      setLoading(false);
    }
  }

  async function logout() {
    await fetch("/api/academy/access", { method: "DELETE" });
    router.refresh();
  }

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={onSubmit} className="p-8 rounded-2xl bg-white space-y-4" style={{ border: "1px solid #e5e1d8" }}>
        <div>
          <label className="block text-xs font-semibold mb-1.5" style={{ color: "#6b7280" }}>
            アクセスコード
          </label>
          <input
            type="text"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            placeholder="例: MEDVANCE-XXXX"
            className="w-full px-3 py-2.5 rounded-lg text-sm"
            style={{ border: "1px solid #e5e1d8", color: "#0c1a33" }}
            autoComplete="off"
            required
          />
        </div>
        {error && (
          <p className="text-sm" style={{ color: "#b91c1c" }}>
            {error}
          </p>
        )}
        <button
          type="submit"
          disabled={loading}
          className="w-full py-2.5 rounded-lg text-sm font-semibold text-white disabled:opacity-60"
          style={{ backgroundColor: "#0c1a33" }}
        >
          {loading ? "確認中…" : "塾生アクセスを有効にする"}
        </button>
        <p className="text-xs leading-relaxed" style={{ color: "#6b7280" }}>
          Medvance塾生見放題・質問し放題用のコードです。授業＋コーチング／特化プラン／コーチング単体などの契約後に事務局からお渡しします。
          ブラウザに保存され、同じ端末では再入力不要です。
        </p>
      </form>
      <div className="mt-4 flex flex-wrap gap-3 justify-center text-sm">
        <Link href="/academy" style={{ color: "#c9922a" }}>
          教材トップ
        </Link>
        <Link href="/pricing" style={{ color: "#6b7280" }}>
          料金
        </Link>
        <button type="button" onClick={logout} className="text-[#6b7280] underline">
          ログアウト
        </button>
      </div>
    </div>
  );
}

export default function AcademyAccessPage() {
  return (
    <div className="min-h-screen bg-white">
      <div style={{ backgroundColor: "#0c1a33" }} className="py-14 px-4">
        <div className="max-w-xl mx-auto text-center">
          <h1 className="text-2xl md:text-3xl font-bold text-white mb-2" style={{ fontFamily: "var(--font-noto-serif)" }}>
            塾生アクセス
          </h1>
          <p className="text-sm" style={{ color: "rgba(255,255,255,0.65)" }}>
            Medvance塾生見放題・質問し放題
          </p>
        </div>
      </div>
      <div className="py-12 px-4" style={{ backgroundColor: "#f7f5f0" }}>
        <Suspense fallback={<p className="text-center text-sm text-[#6b7280]">読み込み中…</p>}>
          <AccessForm />
        </Suspense>
      </div>
    </div>
  );
}
