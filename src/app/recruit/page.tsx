"use client";

import { useState } from "react";

const benefits = [
  {
    label: "時給",
    value: "2,500〜10,000円",
    note: "昇給制度あり。実績・継続年数に応じて昇給します",
  },
  {
    label: "勤務形態",
    value: "完全リモート or 訪問",
    note: "オンライン指導または自宅訪問・カフェ対応。全国どこからでも可",
  },
  {
    label: "勤務時間",
    value: "週1コマ〜",
    note: "授業は1コマ90〜120分。週1〜複数コマまで相談可",
  },
  {
    label: "対象",
    value: "慶應義塾大学医学部在籍",
    note: "学年・学士編入問いません。医学部受験経験者歓迎",
  },
];

const points = [
  {
    icon: "📈",
    title: "昇給制度あり",
    body: "生徒の合格実績・継続年数・評価に応じて時給が上がる仕組みです。長く続けるほど待遇が上がります。",
  },
  {
    icon: "🗓",
    title: "スケジュールは自分で決める",
    body: "試験期間・部活・研究の繁忙期は授業コマ数を減らすことができます。無理なく続けられる働き方を一緒に設計します。",
  },
  {
    icon: "🎯",
    title: "自分の経験が直接活きる",
    body: "医学部受験で培った知識・勉強法・メンタルのノウハウをそのまま伝えることができます。「自分が合格したときのやり方」が最大の武器です。",
  },
  {
    icon: "🤝",
    title: "チームで動ける環境",
    body: "講師同士で情報共有・授業内容の相談ができます。一人で抱え込まず、チームでサポートしながら指導できます。",
  },
];

const requirements = [
  "慶應義塾大学医学部に在籍中であること（学年・学士編入問いません）",
  "週1コマ以上の指導時間を確保できること",
  "生徒の合格に向けて誠実に向き合える方",
  "Zoom・Google Meetを使ったオンライン指導ができること",
];

const faqs = [
  {
    q: "指導経験がなくても応募できますか？",
    a: "はい、問題ありません。指導経験よりも「医学部受験への理解」と「誠実さ」を重視しています。採用後に指導方法のオリエンテーションを行います。",
  },
  {
    q: "時給が2,500円〜10,000円と幅がありますが、どう決まりますか？",
    a: "入塾時は経験・スキルをもとに決定し、その後は継続年数・生徒評価・合格実績に応じて昇給します。長く続けるほど時給が上がる仕組みです。",
  },
  {
    q: "担当できる科目に制限はありますか？",
    a: "英数理のうち得意科目での担当が基本です。複数科目を担当することも可能です。面接時に得意科目をお聞きします。",
  },
  {
    q: "選考の流れを教えてください。",
    a: "①応募フォーム送信 → ②書類確認（3営業日以内に連絡） → ③オンライン面談（30〜45分） → ④採用・指導開始、という流れです。",
  },
  {
    q: "卒業後も続けられますか？",
    a: "現在は慶應義塾大学医学部在籍者を対象としています。卒業後については個別にご相談ください。",
  },
];

export default function RecruitPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    university: "",
    grade: "",
    subjects: "",
    experience: "",
    hoursPerWeek: "",
    motivation: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/recruit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
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

  const field = (
    id: keyof typeof form,
    label: string,
    required = false,
    placeholder = ""
  ) => (
    <div>
      <label className="block text-sm font-semibold mb-1.5" style={{ color: "#0c1a33" }}>
        {label}
        {required && <span className="ml-1.5 text-xs font-bold px-1.5 py-0.5 rounded" style={{ backgroundColor: "#fef2f2", color: "#dc2626" }}>必須</span>}
      </label>
      <input
        type={id === "email" ? "email" : "text"}
        value={form[id]}
        onChange={(e) => setForm({ ...form, [id]: e.target.value })}
        placeholder={placeholder}
        required={required}
        className="w-full rounded-lg px-3 py-2.5 text-sm"
        style={{ border: "1px solid #d1d5db", color: "#1f2937", backgroundColor: "#fff" }}
      />
    </div>
  );

  return (
    <div className="min-h-screen bg-white">

      {/* Hero */}
      <div style={{ backgroundColor: "#0c1a33" }} className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#c9922a" }}>
            Tutor Recruitment
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: "'Noto Serif JP', serif" }}>
            講師募集
          </h1>
          <p className="text-base mb-6" style={{ color: "rgba(255,255,255,0.75)" }}>
            慶應義塾大学医学部在籍の方へ。あなたの合格体験を、次の受験生の力に。
          </p>
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-xl" style={{ backgroundColor: "rgba(201,146,42,0.15)", border: "1px solid rgba(201,146,42,0.4)" }}>
            <span className="text-2xl font-bold" style={{ color: "#c9922a", fontFamily: "'Noto Serif JP', serif" }}>
              時給 2,500〜10,000円
            </span>
            <span className="text-xs font-semibold px-2 py-1 rounded-full" style={{ backgroundColor: "#c9922a", color: "#fff" }}>
              昇給制度あり
            </span>
          </div>
        </div>
      </div>

      {/* 待遇 */}
      <div className="py-14 px-4" style={{ backgroundColor: "#f7f5f0" }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8" style={{ color: "#0c1a33", fontFamily: "'Noto Serif JP', serif" }}>
            待遇・条件
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {benefits.map((b, i) => (
              <div key={i} className="p-5 rounded-xl bg-white" style={{ border: "1px solid #e5e1d8" }}>
                <div className="flex items-start justify-between gap-3 mb-2">
                  <span className="text-xs font-semibold" style={{ color: "#9ca3af" }}>{b.label}</span>
                </div>
                <p className="text-lg font-bold mb-1" style={{ color: "#0c1a33" }}>{b.value}</p>
                <p className="text-xs leading-relaxed" style={{ color: "#6b7280" }}>{b.note}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 特徴 */}
      <div className="py-14 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8" style={{ color: "#0c1a33", fontFamily: "'Noto Serif JP', serif" }}>
            Medvanceで働く特徴
          </h2>
          <div className="grid md:grid-cols-2 gap-5">
            {points.map((p, i) => (
              <div key={i} className="flex gap-4 p-5 rounded-xl" style={{ backgroundColor: "#f7f5f0", border: "1px solid #e5e1d8" }}>
                <span className="text-2xl flex-shrink-0">{p.icon}</span>
                <div>
                  <p className="font-bold text-sm mb-1.5" style={{ color: "#0c1a33" }}>{p.title}</p>
                  <p className="text-sm leading-relaxed" style={{ color: "#6b7280" }}>{p.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 昇給の仕組み */}
      <div className="py-14 px-4" style={{ backgroundColor: "#f7f5f0" }}>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8" style={{ color: "#0c1a33", fontFamily: "'Noto Serif JP', serif" }}>
            昇給の仕組み
          </h2>
          <div className="space-y-3">
            {[
              { range: "2,500〜3,500円", label: "入塾時", desc: "経験・スキルをもとに決定" },
              { range: "3,500〜5,500円", label: "継続・評価UP", desc: "継続年数・生徒評価で昇給" },
              { range: "5,500〜8,000円", label: "合格実績", desc: "担当生徒の合格実績に応じて昇給" },
              { range: "8,000〜10,000円", label: "上位講師", desc: "継続的な実績と高評価で最高水準へ" },
            ].map((s, i) => (
              <div key={i} className="flex items-center gap-4 p-4 rounded-xl bg-white" style={{ border: "1px solid #e5e1d8" }}>
                <div className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-bold" style={{ backgroundColor: "#0c1a33" }}>
                  {i + 1}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 flex-wrap">
                    <span className="font-bold text-sm" style={{ color: "#c9922a" }}>{s.range}円</span>
                    <span className="text-xs font-semibold px-2 py-0.5 rounded-full" style={{ backgroundColor: "#eff6ff", color: "#1d4ed8" }}>{s.label}</span>
                  </div>
                  <p className="text-xs mt-0.5" style={{ color: "#6b7280" }}>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-xs text-center mt-4" style={{ color: "#9ca3af" }}>昇給は定期評価（半年ごと）に基づきます</p>
        </div>
      </div>

      {/* 応募資格 */}
      <div className="py-14 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8" style={{ color: "#0c1a33", fontFamily: "'Noto Serif JP', serif" }}>
            応募資格
          </h2>
          <div className="space-y-3">
            {requirements.map((r, i) => (
              <div key={i} className="flex gap-3 p-4 rounded-xl" style={{ backgroundColor: "#f7f5f0", border: "1px solid #e5e1d8" }}>
                <span className="flex-shrink-0 text-sm font-bold" style={{ color: "#c9922a" }}>✓</span>
                <p className="text-sm leading-relaxed" style={{ color: "#374151" }}>{r}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div className="py-14 px-4" style={{ backgroundColor: "#f7f5f0" }}>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8" style={{ color: "#0c1a33", fontFamily: "'Noto Serif JP', serif" }}>
            よくある質問
          </h2>
          <div className="space-y-4">
            {faqs.map((f, i) => (
              <div key={i} className="p-5 rounded-xl bg-white" style={{ border: "1px solid #e5e1d8" }}>
                <p className="font-bold text-sm mb-2" style={{ color: "#0c1a33" }}>Q. {f.q}</p>
                <p className="text-sm leading-relaxed" style={{ color: "#6b7280" }}>A. {f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 応募フォーム */}
      <div className="py-16 px-4 bg-white" id="form">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-2" style={{ color: "#0c1a33", fontFamily: "'Noto Serif JP', serif" }}>
            応募フォーム
          </h2>
          <p className="text-sm text-center mb-8" style={{ color: "#6b7280" }}>
            フォームを送信後、3営業日以内にご連絡します
          </p>

          {submitted ? (
            <div className="p-8 rounded-2xl text-center" style={{ backgroundColor: "#f0fdf4", border: "2px solid #86efac" }}>
              <p className="text-2xl mb-3">✅</p>
              <p className="font-bold text-lg mb-2" style={{ color: "#16a34a" }}>応募を受け付けました</p>
              <p className="text-sm" style={{ color: "#374151" }}>
                3営業日以内にメールにてご連絡します。<br />
                自動返信メールが届かない場合は迷惑メールフォルダをご確認ください。
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                {field("name", "お名前", true, "山田 太郎")}
                {field("email", "メールアドレス", true, "example@keio.jp")}
              </div>
              {field("phone", "電話番号", false, "090-0000-0000")}
              <div className="grid sm:grid-cols-2 gap-5">
                {field("university", "所属大学・学部", true, "慶應義塾大学医学部")}
                <div>
                  <label className="block text-sm font-semibold mb-1.5" style={{ color: "#0c1a33" }}>
                    学年
                    <span className="ml-1.5 text-xs font-bold px-1.5 py-0.5 rounded" style={{ backgroundColor: "#fef2f2", color: "#dc2626" }}>必須</span>
                  </label>
                  <select
                    value={form.grade}
                    onChange={(e) => setForm({ ...form, grade: e.target.value })}
                    required
                    className="w-full rounded-lg px-3 py-2.5 text-sm"
                    style={{ border: "1px solid #d1d5db", color: form.grade ? "#1f2937" : "#9ca3af", backgroundColor: "#fff" }}
                  >
                    <option value="">選択してください</option>
                    <option>1年</option>
                    <option>2年</option>
                    <option>3年</option>
                    <option>4年</option>
                    <option>5年</option>
                    <option>6年</option>
                    <option>学士編入</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold mb-1.5" style={{ color: "#0c1a33" }}>
                  指導可能科目
                  <span className="ml-1.5 text-xs font-bold px-1.5 py-0.5 rounded" style={{ backgroundColor: "#fef2f2", color: "#dc2626" }}>必須</span>
                </label>
                <div className="flex flex-wrap gap-2">
                  {["英語", "数学", "物理", "化学", "生物", "面接・小論文"].map((s) => (
                    <label key={s} className="flex items-center gap-1.5 cursor-pointer">
                      <input
                        type="checkbox"
                        value={s}
                        checked={form.subjects.includes(s)}
                        onChange={(e) => {
                          const cur = form.subjects ? form.subjects.split("・") : [];
                          const next = e.target.checked ? [...cur, s] : cur.filter((x) => x !== s);
                          setForm({ ...form, subjects: next.join("・") });
                        }}
                        className="rounded"
                      />
                      <span className="text-sm" style={{ color: "#374151" }}>{s}</span>
                    </label>
                  ))}
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold mb-1.5" style={{ color: "#0c1a33" }}>医学部受験経験</label>
                <select
                  value={form.experience}
                  onChange={(e) => setForm({ ...form, experience: e.target.value })}
                  className="w-full rounded-lg px-3 py-2.5 text-sm"
                  style={{ border: "1px solid #d1d5db", color: form.experience ? "#1f2937" : "#9ca3af", backgroundColor: "#fff" }}
                >
                  <option value="">選択してください</option>
                  <option>現役合格</option>
                  <option>1浪合格</option>
                  <option>2浪以上合格</option>
                  <option>学士編入</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold mb-1.5" style={{ color: "#0c1a33" }}>週あたり指導可能時間</label>
                <select
                  value={form.hoursPerWeek}
                  onChange={(e) => setForm({ ...form, hoursPerWeek: e.target.value })}
                  className="w-full rounded-lg px-3 py-2.5 text-sm"
                  style={{ border: "1px solid #d1d5db", color: form.hoursPerWeek ? "#1f2937" : "#9ca3af", backgroundColor: "#fff" }}
                >
                  <option value="">選択してください</option>
                  <option>週1〜2時間</option>
                  <option>週3〜5時間</option>
                  <option>週6〜10時間</option>
                  <option>週10時間以上</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold mb-1.5" style={{ color: "#0c1a33" }}>志望動機・自己PR</label>
                <textarea
                  rows={5}
                  value={form.motivation}
                  onChange={(e) => setForm({ ...form, motivation: e.target.value })}
                  placeholder="Medvanceで講師をしたい理由、自分の強み、受験時の経験など自由にお書きください"
                  className="w-full rounded-lg px-3 py-2.5 text-sm resize-none"
                  style={{ border: "1px solid #d1d5db", color: "#1f2937", backgroundColor: "#fff" }}
                />
              </div>

              {error && (
                <p className="text-sm text-center" style={{ color: "#dc2626" }}>{error}</p>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 rounded-xl text-white font-bold text-base transition-opacity hover:opacity-90 disabled:opacity-50"
                style={{ backgroundColor: "#c9922a" }}
              >
                {loading ? "送信中..." : "応募する"}
              </button>
              <p className="text-xs text-center" style={{ color: "#9ca3af" }}>
                送信後、自動返信メールをお送りします。届かない場合は迷惑メールフォルダをご確認ください。
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
