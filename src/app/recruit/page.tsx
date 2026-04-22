"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const offerCards = [
  {
    label: "業務内容",
    value: "医学部受験・内部進学の個別指導",
    note: "英語、数学、理科、面接、小論文、学校成績対策など。得意領域から担当できます。",
  },
  {
    label: "報酬目安",
    value: "時給3,000円スタート / 昇給で10,000円まで",
    note: "担当内容、実績、継続年数、生徒評価に応じて段階的に昇給します。",
  },
  {
    label: "勤務形式",
    value: "オンライン中心・対面も相談可",
    note: "Zoom、Google Meetなどを利用。関東圏は対面指導の相談もあります。",
  },
  {
    label: "掲載制度",
    value: "承認後に講師一覧へ掲載",
    note: "本人確認、所属確認、掲載内容の確認が完了した講師から公開します。",
  },
];

const strengths = [
  {
    title: "経験をそのまま価値にできる",
    body: "医学部受験、内部進学、推薦・AO、面接、小論文で実際に悩んだ経験は、受験生にとって強い支援になります。",
  },
  {
    title: "指導だけで終わらない",
    body: "授業内容だけでなく、学習計画、復習の進め方、模試後の修正まで含めて生徒を支えます。",
  },
  {
    title: "講師プロフィールを育てられる",
    body: "承認済み講師は公開一覧に掲載できます。科目、料金、対応エリア、指導方針を明確にして問い合わせにつなげます。",
  },
  {
    title: "無理な稼働を前提にしない",
    body: "試験、実習、研究、部活と両立できるよう、担当数と時間帯を事前にすり合わせます。",
  },
];

const requirements = [
  "医学部受験、難関大受験、内部進学、学校成績対策のいずれかで強みを説明できる方",
  "生徒と保護者に対して、誠実に進捗共有できる方",
  "オンライン指導に必要な通信環境と基本的なPC操作がある方",
  "本人確認、所属確認、プロフィール確認に協力できる方",
];

const flow = [
  ["01", "応募フォーム送信", "所属、担当可能科目、稼働時間、指導経験を確認します。"],
  ["02", "書類確認", "本人確認、在籍・卒業情報、指導可能領域を確認します。"],
  ["03", "オンライン面談", "指導方針、得意領域、担当可能な生徒像をすり合わせます。"],
  ["04", "登録・掲載準備", "承認後、希望者は講師一覧に掲載するプロフィールを作成します。"],
];

const faqs = [
  {
    q: "指導経験がなくても応募できますか？",
    a: "応募できます。採用時は指導経験よりも、受験経験を言語化できること、誠実に伴走できることを重視します。",
  },
  {
    q: "医学部生以外でも応募できますか？",
    a: "医学部受験、難関大受験、内部進学、学校成績対策で明確な強みがあれば応募できます。担当可否は個別に判断します。",
  },
  {
    q: "講師一覧への掲載は必須ですか？",
    a: "必須ではありません。公開掲載を希望する場合のみ、本人確認と掲載内容の確認後に公開します。",
  },
  {
    q: "どのくらい稼働する必要がありますか？",
    a: "週1コマから相談できます。試験期間や実習期間は事前に調整します。",
  },
];

const subjectOptions = ["英語", "数学", "物理", "化学", "生物", "面接", "小論文", "学校成績", "推薦・AO"];

type RecruitForm = {
  name: string;
  email: string;
  phone: string;
  university: string;
  grade: string;
  subjects: string;
  experience: string;
  hoursPerWeek: string;
  preferredFormat: string;
  availableArea: string;
  profilePublish: string;
  teachingStyle: string;
  motivation: string;
};

const initialForm: RecruitForm = {
  name: "",
  email: "",
  phone: "",
  university: "",
  grade: "",
  subjects: "",
  experience: "",
  hoursPerWeek: "",
  preferredFormat: "",
  availableArea: "",
  profilePublish: "",
  teachingStyle: "",
  motivation: "",
};

function RequiredBadge() {
  return (
    <span className="ml-2 rounded px-1.5 py-0.5 text-[11px] font-bold" style={{ backgroundColor: "#fef2f2", color: "#dc2626" }}>
      必須
    </span>
  );
}

export default function RecruitPage() {
  const [form, setForm] = useState<RecruitForm>(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const setField = (key: keyof RecruitForm, value: string) => {
    setForm((current) => ({ ...current, [key]: value }));
  };

  const toggleSubject = (subject: string, checked: boolean) => {
    const current = form.subjects ? form.subjects.split(" / ") : [];
    const next = checked ? [...current, subject] : current.filter((item) => item !== subject);
    setField("subjects", next.join(" / "));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!form.subjects) {
      setError("担当可能科目を1つ以上選択してください。");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/recruit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        const data = await response.json().catch(() => ({}));
        throw new Error(data.error || "送信に失敗しました。時間をおいて再度お試しください。");
      }

      setSubmitted(true);
      setForm(initialForm);
    } catch (err) {
      setError(err instanceof Error ? err.message : "送信に失敗しました。");
    } finally {
      setLoading(false);
    }
  };

  const inputClass = "w-full rounded-lg px-3 py-3 text-sm";
  const inputStyle = { border: "1px solid #d1d5db", color: "#111827", backgroundColor: "#fff" };

  return (
    <div className="min-h-screen bg-white">
      <section className="relative min-h-[620px] overflow-hidden px-4 py-20 md:py-28">
        <Image
          src="/images/hero.webp"
          alt="講師が受験生に個別指導している様子"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(90deg, rgba(12,26,51,0.92) 0%, rgba(12,26,51,0.76) 42%, rgba(12,26,51,0.25) 100%)" }} />
        <div className="relative mx-auto flex min-h-[460px] max-w-6xl items-center">
          <div className="max-w-2xl">
            <p className="mb-4 text-xs font-bold uppercase tracking-widest" style={{ color: "#c9922a" }}>
              Instructor Recruitment
            </p>
            <h1 className="mb-5 text-3xl font-bold leading-tight text-white md:text-5xl" style={{ fontFamily: "var(--font-noto-serif)" }}>
              医学部受験の経験を、次の受験生の力に。
            </h1>
            <p className="mb-8 text-sm leading-relaxed md:text-base" style={{ color: "rgba(255,255,255,0.76)" }}>
              Medvanceでは、医学部受験・内部進学・学校成績対策を支える講師を募集しています。
              得意科目や受験経験を活かし、生徒一人ひとりの学習計画と実行を支える仕事です。
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href="#form"
                className="inline-flex items-center justify-center rounded-lg px-7 py-4 text-sm font-bold text-white transition-opacity hover:opacity-90"
                style={{ backgroundColor: "#c9922a" }}
              >
                応募フォームへ進む
              </a>
              <Link
                href="/tutors"
                className="inline-flex items-center justify-center rounded-lg px-7 py-4 text-sm font-bold transition-opacity hover:opacity-90"
                style={{ color: "#fff", border: "1px solid rgba(255,255,255,0.32)", backgroundColor: "rgba(255,255,255,0.08)" }}
              >
                講師一覧を見る
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-12" style={{ backgroundColor: "#f7f5f0", borderBottom: "1px solid #e5e1d8" }}>
        <div className="mx-auto grid max-w-6xl gap-4 md:grid-cols-4">
          {offerCards.map((item) => (
            <div key={item.label} className="rounded-lg bg-white p-5" style={{ border: "1px solid #e5e1d8" }}>
              <p className="mb-2 text-xs font-bold uppercase tracking-widest" style={{ color: "#9ca3af" }}>
                {item.label}
              </p>
              <p className="mb-2 text-base font-bold" style={{ color: "#0c1a33" }}>
                {item.value}
              </p>
              <p className="text-xs leading-relaxed" style={{ color: "#6b7280" }}>
                {item.note}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 max-w-3xl">
            <p className="mb-3 text-xs font-bold uppercase tracking-widest" style={{ color: "#c9922a" }}>
              Why Medvance
            </p>
            <h2 className="mb-3 text-2xl font-bold md:text-3xl" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>
              ただ教えるだけではなく、合格までの進め方を支える講師を募集します。
            </h2>
            <p className="text-sm leading-relaxed" style={{ color: "#6b7280" }}>
              Medvanceの講師には、問題の解説力だけでなく、生徒が次に何をすべきかを整理する力を求めています。
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {strengths.map((item, index) => (
              <article key={item.title} className="rounded-xl p-6" style={{ backgroundColor: "#f7f5f0", border: "1px solid #e5e1d8" }}>
                <p className="mb-3 text-sm font-bold" style={{ color: "#c9922a" }}>
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mb-2 text-base font-bold" style={{ color: "#0c1a33" }}>
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#6b7280" }}>
                  {item.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-20" style={{ backgroundColor: "#0c1a33" }}>
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-widest" style={{ color: "#c9922a" }}>
              Requirements
            </p>
            <h2 className="mb-4 text-2xl font-bold text-white md:text-3xl" style={{ fontFamily: "var(--font-noto-serif)" }}>
              応募条件
            </h2>
            <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>
              所属大学名だけでは判断しません。生徒に対して、どの領域で何を支援できるかを重視します。
            </p>
          </div>
          <div className="space-y-3">
            {requirements.map((item) => (
              <div key={item} className="rounded-lg p-4" style={{ backgroundColor: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.12)" }}>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.82)" }}>
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-20" style={{ backgroundColor: "#f7f5f0" }}>
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 text-center">
            <p className="mb-3 text-xs font-bold uppercase tracking-widest" style={{ color: "#c9922a" }}>
              Process
            </p>
            <h2 className="text-2xl font-bold md:text-3xl" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>
              応募から掲載・指導開始まで
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-4">
            {flow.map(([num, title, body]) => (
              <div key={num} className="rounded-xl bg-white p-5" style={{ border: "1px solid #e5e1d8" }}>
                <p className="mb-4 text-sm font-bold" style={{ color: "#c9922a" }}>
                  {num}
                </p>
                <h3 className="mb-2 text-base font-bold" style={{ color: "#0c1a33" }}>
                  {title}
                </h3>
                <p className="text-xs leading-relaxed" style={{ color: "#6b7280" }}>
                  {body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="form" className="px-4 py-20">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-widest" style={{ color: "#c9922a" }}>
              Apply
            </p>
            <h2 className="mb-4 text-2xl font-bold md:text-3xl" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>
              講師応募フォーム
            </h2>
            <p className="mb-6 text-sm leading-relaxed" style={{ color: "#6b7280" }}>
              送信後、内容を確認したうえで通常3営業日以内にご連絡します。公開プロフィールの掲載は、採用後に希望者のみ進めます。
            </p>
            <div className="rounded-xl p-5" style={{ backgroundColor: "#f7f5f0", border: "1px solid #e5e1d8" }}>
              <h3 className="mb-3 text-sm font-bold" style={{ color: "#0c1a33" }}>
                入力前に確認すること
              </h3>
              <div className="space-y-2 text-sm leading-relaxed" style={{ color: "#6b7280" }}>
                <p>担当できる科目と学年を具体的に書くと、面談が早く進みます。</p>
                <p>公開掲載を希望する場合は、掲載名や顔写真の扱いも面談で確認します。</p>
              </div>
            </div>
          </div>

          <div className="rounded-xl p-6 md:p-8" style={{ backgroundColor: "#fff", border: "1px solid #e5e1d8" }}>
            {submitted ? (
              <div className="rounded-xl p-8 text-center" style={{ backgroundColor: "#f0fdf4", border: "1px solid #86efac" }}>
                <h3 className="mb-2 text-xl font-bold" style={{ color: "#166534" }}>
                  応募を受け付けました
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#374151" }}>
                  入力内容を確認し、通常3営業日以内にメールでご連絡します。
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="block text-sm font-semibold" style={{ color: "#0c1a33" }}>
                    氏名
                    <RequiredBadge />
                    <input
                      type="text"
                      value={form.name}
                      onChange={(event) => setField("name", event.target.value)}
                      required
                      className={`${inputClass} mt-1.5`}
                      style={inputStyle}
                      placeholder="山田 太郎"
                    />
                  </label>
                  <label className="block text-sm font-semibold" style={{ color: "#0c1a33" }}>
                    メールアドレス
                    <RequiredBadge />
                    <input
                      type="email"
                      value={form.email}
                      onChange={(event) => setField("email", event.target.value)}
                      required
                      className={`${inputClass} mt-1.5`}
                      style={inputStyle}
                      placeholder="example@university.ac.jp"
                    />
                  </label>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="block text-sm font-semibold" style={{ color: "#0c1a33" }}>
                    電話番号
                    <input
                      type="text"
                      value={form.phone}
                      onChange={(event) => setField("phone", event.target.value)}
                      className={`${inputClass} mt-1.5`}
                      style={inputStyle}
                      placeholder="090-0000-0000"
                    />
                  </label>
                  <label className="block text-sm font-semibold" style={{ color: "#0c1a33" }}>
                    所属・学年
                    <RequiredBadge />
                    <input
                      type="text"
                      value={form.university}
                      onChange={(event) => setField("university", event.target.value)}
                      required
                      className={`${inputClass} mt-1.5`}
                      style={inputStyle}
                      placeholder="慶應義塾大学 医学部 3年"
                    />
                  </label>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="block text-sm font-semibold" style={{ color: "#0c1a33" }}>
                    学年・卒業区分
                    <select
                      value={form.grade}
                      onChange={(event) => setField("grade", event.target.value)}
                      className={`${inputClass} mt-1.5`}
                      style={inputStyle}
                    >
                      <option value="">選択してください</option>
                      <option>1年</option>
                      <option>2年</option>
                      <option>3年</option>
                      <option>4年</option>
                      <option>5年</option>
                      <option>6年</option>
                      <option>大学院・既卒</option>
                      <option>その他</option>
                    </select>
                  </label>
                  <label className="block text-sm font-semibold" style={{ color: "#0c1a33" }}>
                    週あたり稼働目安
                    <select
                      value={form.hoursPerWeek}
                      onChange={(event) => setField("hoursPerWeek", event.target.value)}
                      className={`${inputClass} mt-1.5`}
                      style={inputStyle}
                    >
                      <option value="">選択してください</option>
                      <option>週1から2時間</option>
                      <option>週3から5時間</option>
                      <option>週6から10時間</option>
                      <option>週10時間以上</option>
                    </select>
                  </label>
                </div>

                <div>
                  <p className="mb-2 text-sm font-semibold" style={{ color: "#0c1a33" }}>
                    担当可能科目
                    <RequiredBadge />
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {subjectOptions.map((subject) => (
                      <label key={subject} className="inline-flex cursor-pointer items-center gap-2 rounded-full px-3 py-2 text-sm" style={{ border: "1px solid #d1d5db", color: "#374151" }}>
                        <input
                          type="checkbox"
                          value={subject}
                          checked={form.subjects.split(" / ").includes(subject)}
                          onChange={(event) => toggleSubject(subject, event.target.checked)}
                          className="h-4 w-4"
                        />
                        {subject}
                      </label>
                    ))}
                  </div>
                  <input type="hidden" name="subjects" value={form.subjects} required />
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="block text-sm font-semibold" style={{ color: "#0c1a33" }}>
                    指導経験・受験経験
                    <select
                      value={form.experience}
                      onChange={(event) => setField("experience", event.target.value)}
                      className={`${inputClass} mt-1.5`}
                      style={inputStyle}
                    >
                      <option value="">選択してください</option>
                      <option>現役合格</option>
                      <option>浪人経験あり</option>
                      <option>指導経験あり</option>
                      <option>合格実績あり</option>
                      <option>その他</option>
                    </select>
                  </label>
                  <label className="block text-sm font-semibold" style={{ color: "#0c1a33" }}>
                    希望する指導形式
                    <select
                      value={form.preferredFormat}
                      onChange={(event) => setField("preferredFormat", event.target.value)}
                      className={`${inputClass} mt-1.5`}
                      style={inputStyle}
                    >
                      <option value="">選択してください</option>
                      <option>オンラインのみ</option>
                      <option>対面も可能</option>
                      <option>どちらでも可能</option>
                    </select>
                  </label>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="block text-sm font-semibold" style={{ color: "#0c1a33" }}>
                    対応可能エリア
                    <input
                      type="text"
                      value={form.availableArea}
                      onChange={(event) => setField("availableArea", event.target.value)}
                      className={`${inputClass} mt-1.5`}
                      style={inputStyle}
                      placeholder="オンライン、東京都、神奈川県など"
                    />
                  </label>
                  <label className="block text-sm font-semibold" style={{ color: "#0c1a33" }}>
                    講師一覧への掲載希望
                    <select
                      value={form.profilePublish}
                      onChange={(event) => setField("profilePublish", event.target.value)}
                      className={`${inputClass} mt-1.5`}
                      style={inputStyle}
                    >
                      <option value="">選択してください</option>
                      <option>希望する</option>
                      <option>相談して決めたい</option>
                      <option>現時点では希望しない</option>
                    </select>
                  </label>
                </div>

                <label className="block text-sm font-semibold" style={{ color: "#0c1a33" }}>
                  指導スタイル・得意な支援
                  <textarea
                    rows={4}
                    value={form.teachingStyle}
                    onChange={(event) => setField("teachingStyle", event.target.value)}
                    className={`${inputClass} mt-1.5 resize-none`}
                    style={inputStyle}
                    placeholder="例: 数学の記述答案添削、面接対策、定期テスト前の計画管理など"
                  />
                </label>

                <label className="block text-sm font-semibold" style={{ color: "#0c1a33" }}>
                  応募理由・自己PR
                  <RequiredBadge />
                  <textarea
                    rows={5}
                    value={form.motivation}
                    onChange={(event) => setField("motivation", event.target.value)}
                    required
                    className={`${inputClass} mt-1.5 resize-none`}
                    style={inputStyle}
                    placeholder="受験経験、指導経験、生徒に提供できる価値を自由に書いてください"
                  />
                </label>

                {error && (
                  <p className="rounded-lg px-4 py-3 text-sm" style={{ color: "#b91c1c", backgroundColor: "#fef2f2" }}>
                    {error}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full rounded-xl px-6 py-4 text-base font-bold text-white transition-opacity hover:opacity-90 disabled:opacity-50"
                  style={{ backgroundColor: "#c9922a" }}
                >
                  {loading ? "送信中..." : "講師として応募する"}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <section className="px-4 pb-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-8 text-center text-2xl font-bold" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>
            よくある質問
          </h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <details key={faq.q} className="rounded-xl bg-white" style={{ border: "1px solid #e5e1d8" }}>
                <summary className="cursor-pointer px-5 py-4 text-sm font-bold" style={{ color: "#0c1a33" }}>
                  {faq.q}
                </summary>
                <p className="px-5 pb-5 text-sm leading-relaxed" style={{ color: "#6b7280" }}>
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
