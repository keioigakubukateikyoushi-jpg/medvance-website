import Link from "next/link";
import type { Metadata } from "next";
import { LINE_URL } from "@/lib/links";
import { buildBreadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "合格実績・指導事例｜現役医学部生による医学部受験塾 Medvance",
  description:
    "Medvance代表が全勝した医学部受験校の一覧、現在指導中の受講生の偏差値推移と目標、そして合格者を積み上げていく方針を公開しています。",
  alternates: {
    canonical: "/success-stories",
  },
};

const successBreadcrumb = buildBreadcrumbSchema([
  { name: "ホーム", url: "/" },
  { name: "合格実績・指導事例", url: "/success-stories" },
]);

const founderSchools = [
  {
    name: "慶應義塾大学医学部",
    note: "代表本人が現役で在籍。入試傾向と当日の解き順まで実体験で語れる。",
  },
  {
    name: "東京医科歯科大学医学部",
    note: "国公立2次の記述対策で必須。理科の処理速度と英語の長文処理を整えた。",
  },
  {
    name: "東京慈恵会医科大学医学部",
    note: "英語が最難関。長文の素早い構造把握と、時間配分の設計が決め手。",
  },
  {
    name: "順天堂大学医学部",
    note: "面接・小論文・MMIを含む総合力。志望理由から練り込んだ。",
  },
  {
    name: "日本医科大学",
    note: "記述難問への対応。捨てる問題と取り切る問題の判断を鍛えた。",
  },
];

const ongoingCases = [
  {
    code: "Case A",
    profile: "現役 高校3年生 / 私立医学部志望",
    start: "高3春 駿台模試 偏差値52",
    current: "高3秋 駿台模試 偏差値61",
    target: "私立医学部 6校受験予定",
    focus: "数IIIの典型抜けと化学の理論計算を週次で潰し、英語長文を時間内に処理できる構成へ。",
  },
  {
    code: "Case B",
    profile: "1浪 / 国公立医学部志望",
    start: "前年共通テスト 760点 / 河合 偏差値58",
    current: "本年 8月共通テスト模試 820点 / 河合 偏差値65",
    target: "地方国公立医学部 + 私立併願2校",
    focus: "共通テスト数学のスピードと、二次記述（生物・化学）の答案構成を分離して指導。",
  },
  {
    code: "Case C",
    profile: "再受験 / 社会人",
    start: "学習再開時 河合 偏差値45相当",
    current: "学習開始6ヶ月後 河合 偏差値55",
    target: "私立医学部 4校 + 共通テスト併用",
    focus: "中学範囲からの再構築と、社会人の限られた学習時間に合わせた優先順位付け。",
  },
];

const policyItems = [
  {
    title: "数字を盛らない",
    body: "Medvanceは2025年立ち上げの新規塾です。代表本人の合格実績以外の合格者数は、まだここに掲載できる段階にありません。",
  },
  {
    title: "現在進行形の指導を公開する",
    body: "今いる受講生の偏差値推移と目標を、本人・保護者の同意を得たうえで匿名・概要のみで公開します。受験当日まで一緒に走っている事実こそ、これからの実績の証です。",
  },
  {
    title: "実績は今後、ここに積み上げます",
    body: "合格発表のたびに、合格者本人の許可を得て大学・コース・指導期間・伸び幅を順次追記していきます。",
  },
];

export default function SuccessStoriesPage() {
  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(successBreadcrumb) }}
      />

      {/* Hero */}
      <section style={{ backgroundColor: "#0c1a33" }} className="px-4 py-20">
        <div className="mx-auto max-w-3xl">
          <p className="mb-3 text-xs font-semibold tracking-widest uppercase" style={{ color: "#c9922a" }}>
            Track Record
          </p>
          <h1
            className="mb-4 text-3xl font-bold leading-snug text-white md:text-4xl"
            style={{ fontFamily: "var(--font-noto-serif)" }}
          >
            合格実績・指導事例
          </h1>
          <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.72)" }}>
            Medvance代表自身の医学部受験全勝の歩みと、現在指導中の受講生の偏差値推移を公開します。
            合格者数を盛らず、今ここで起きていることをそのままお伝えします。
          </p>
        </div>
      </section>

      {/* 代表の合格校 */}
      <section className="bg-white px-4 py-16">
        <div className="mx-auto max-w-4xl">
          <p className="mb-3 text-xs font-semibold tracking-widest" style={{ color: "#c9922a" }}>
            Founder Results
          </p>
          <h2
            className="mb-2 text-2xl font-bold leading-snug md:text-3xl"
            style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}
          >
            代表 医学部受験コーチが合格した医学部
          </h2>
          <p className="mb-8 text-sm leading-relaxed" style={{ color: "#5f6b7a" }}>
            高2春から計画的に対策を積み上げ、代表が本番までに到達した合格校です。受験校すべてに合格しました。
          </p>

          <div className="grid gap-4 md:grid-cols-2">
            {founderSchools.map((school) => (
              <div
                key={school.name}
                className="rounded-xl p-6"
                style={{ backgroundColor: "#f7f5f0", border: "1px solid #e5e1d8" }}
              >
                <h3 className="mb-2 text-base font-bold" style={{ color: "#0c1a33" }}>
                  {school.name}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#3d3d3d" }}>
                  {school.note}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-6">
            <Link
              href="/about/founder?from=success-stories-founder"
              className="inline-flex items-center gap-1 text-sm font-bold"
              style={{ color: "#c9922a" }}
            >
              代表の受験ストーリーと模試推移を見る →
            </Link>
          </div>
        </div>
      </section>

      {/* 受講生事例 */}
      <section className="px-4 py-16" style={{ backgroundColor: "#f7f5f0" }}>
        <div className="mx-auto max-w-4xl">
          <p className="mb-3 text-xs font-semibold tracking-widest" style={{ color: "#c9922a" }}>
            Ongoing Cases
          </p>
          <h2
            className="mb-2 text-2xl font-bold leading-snug md:text-3xl"
            style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}
          >
            指導中の受講生（匿名・概要）
          </h2>
          <p className="mb-8 text-sm leading-relaxed" style={{ color: "#5f6b7a" }}>
            ご本人・保護者の同意のうえで、現在進行形の指導内容を匿名で公開しています。
            個人を特定できる情報は伏せ、偏差値推移と指導の方向性のみ載せています。
          </p>

          <div className="space-y-5">
            {ongoingCases.map((c) => (
              <article
                key={c.code}
                className="rounded-xl bg-white p-6"
                style={{ border: "1px solid #e5e1d8" }}
              >
                <div className="mb-4 flex flex-wrap items-center gap-3">
                  <span
                    className="rounded-full px-3 py-1 text-[11px] font-bold tracking-widest"
                    style={{ backgroundColor: "#0c1a33", color: "#c9922a" }}
                  >
                    {c.code}
                  </span>
                  <p className="text-sm font-semibold" style={{ color: "#0c1a33" }}>
                    {c.profile}
                  </p>
                </div>
                <dl className="grid gap-3 text-sm md:grid-cols-3">
                  <div>
                    <dt className="text-[11px] font-bold tracking-widest" style={{ color: "#9ca3af" }}>
                      指導開始時
                    </dt>
                    <dd className="mt-1 font-semibold" style={{ color: "#3d3d3d" }}>
                      {c.start}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-[11px] font-bold tracking-widest" style={{ color: "#9ca3af" }}>
                      現在地
                    </dt>
                    <dd className="mt-1 font-bold" style={{ color: "#c9922a" }}>
                      {c.current}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-[11px] font-bold tracking-widest" style={{ color: "#9ca3af" }}>
                      目標
                    </dt>
                    <dd className="mt-1 font-semibold" style={{ color: "#3d3d3d" }}>
                      {c.target}
                    </dd>
                  </div>
                </dl>
                <p className="mt-4 rounded-md p-4 text-sm leading-relaxed" style={{ backgroundColor: "#faf9f6", color: "#3d3d3d", border: "1px solid #ebe7dc" }}>
                  <span className="font-bold" style={{ color: "#0c1a33" }}>指導の焦点：</span>
                  {c.focus}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 方針 */}
      <section className="bg-white px-4 py-16">
        <div className="mx-auto max-w-3xl">
          <p className="mb-3 text-xs font-semibold tracking-widest" style={{ color: "#c9922a" }}>
            Editorial Policy
          </p>
          <h2
            className="mb-8 text-2xl font-bold leading-snug md:text-3xl"
            style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}
          >
            実績の出し方についての約束
          </h2>
          <div className="space-y-4">
            {policyItems.map((item, idx) => (
              <div
                key={item.title}
                className="rounded-xl p-6"
                style={{ backgroundColor: "#f7f5f0", border: "1px solid #e5e1d8" }}
              >
                <p className="mb-2 text-xs font-bold tracking-widest" style={{ color: "#c9922a" }}>
                  {String(idx + 1).padStart(2, "0")}
                </p>
                <h3 className="mb-2 text-base font-bold" style={{ color: "#0c1a33" }}>
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#3d3d3d" }}>
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-16" style={{ backgroundColor: "#0c1a33" }}>
        <div className="mx-auto max-w-3xl">
          <h2
            className="mb-4 text-xl font-bold leading-snug text-white md:text-2xl"
            style={{ fontFamily: "var(--font-noto-serif)" }}
          >
            次の受講生事例は、あなたかもしれません。
          </h2>
          <p className="mb-6 text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.72)" }}>
            無料相談で、現在の偏差値・志望校・残り期間をもとに、あなた専用の90日プランをお伝えします。
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href={LINE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center rounded-lg px-6 py-3.5 text-sm font-bold text-white transition-opacity hover:opacity-90 sm:w-auto"
              style={{ backgroundColor: "#06C755" }}
            >
              LINEで30秒・無料相談
            </a>
            <Link
              href="/contact?from=success-stories-cta"
              className="inline-flex w-full items-center justify-center rounded-lg px-6 py-3.5 text-sm font-bold text-white transition-opacity hover:opacity-90 sm:w-auto"
              style={{ backgroundColor: "#c9922a" }}
            >
              フォームで無料戦略相談
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
