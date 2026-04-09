import Image from "next/image";
import Link from "next/link";
import { buildBreadcrumbSchema, buildCollectionPageSchema, buildItemListSchema } from "@/lib/seo";
import { nationalUniversityArticles } from "./data";

export const metadata = {
  title: "国公立大学医学部・防衛医科大学校の対策一覧 | Medvance",
  description:
    "国公立大学医学部と防衛医科大学校の対策ページ一覧です。大学ごとの特徴、学習戦略、面接準備の考え方をまとめています。",

  alternates: {
    canonical: "/universities/national",
  },};

const regionOrder = ["北海道", "東北", "関東", "甲信越", "北陸", "東海", "近畿", "中国", "四国", "九州", "沖縄"];

const nationalPageSchemas = [
  buildCollectionPageSchema(
    "国公立大学医学部・防衛医科大学校の対策一覧",
    "国公立大学医学部と防衛医科大学校の対策ページを地域別に一覧できるページです。",
    "/universities/national",
  ),
  buildBreadcrumbSchema([
    { name: "ホーム", url: "/" },
    { name: "国公立大学医学部・防衛医科大学校の対策一覧", url: "/universities/national" },
  ]),
  buildItemListSchema(
    "国公立大学医学部・防衛医科大学校の対策ページ",
    "/universities/national",
    nationalUniversityArticles.map((entry) => ({
      name: entry.name,
      url: `/universities/national/${entry.slug}`,
    })),
  ),
];

export default function NationalPage() {
  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(nationalPageSchemas) }}
      />
      <div style={{ backgroundColor: "#0c1a33" }} className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#c9922a" }}>
            National University Guide
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-noto-serif)" }}>
            国公立大学医学部・防衛医科大学校の対策一覧
          </h1>
          <p className="text-base max-w-3xl mx-auto" style={{ color: "rgba(255,255,255,0.68)" }}>
            国公立大学医学部は共通テストと二次の総合力が問われます。大学ごとの特徴に合わせて、優先順位を整理しながら対策を進めることが大切です。
          </p>
        </div>
      </div>

      <div className="py-16 px-4" style={{ backgroundColor: "#f7f5f0" }}>
        <div className="max-w-5xl mx-auto">
          <div className="mb-8 overflow-hidden rounded-[32px] bg-white p-3" style={{ border: "1px solid #e5e1d8" }}>
            <Image
              src="/images/generated/national-guide-hero.png"
              alt="日本地図と学習要素をモチーフにした国公立医学部一覧ページのキービジュアル"
              width={1536}
              height={1024}
              className="w-full h-auto rounded-[24px]"
              priority
            />
          </div>
          <div className="grid md:grid-cols-3 gap-6">
          {[ 
            {
              title: "共通テストと二次の配点を先に確認する",
              body: "国公立医学部は大学ごとに配点差が大きく、同じ勉強量でも結果が変わりやすいです。まずは配点と必要得点の整理から入るのがおすすめです。",
            },
            {
              title: "英数理は総合点で安定させる",
              body: "一科目だけ強くても合格しにくいのが国公立医学部です。標準問題を落とさず、弱点を残さない設計が重要になります。",
            },
            {
              title: "面接と志望理由は後回しにしない",
              body: "面接や志望理由は直前に詰め込むと浅くなりやすいです。大学理解や将来像を早めに言葉にしておくと本番で安定します。",
            },
          ].map((item) => (
            <div key={item.title} className="rounded-2xl bg-white p-6" style={{ border: "1px solid #e5e1d8" }}>
              <p className="font-bold text-base mb-3" style={{ color: "#0c1a33" }}>
                {item.title}
              </p>
              <p className="text-sm leading-relaxed" style={{ color: "#6b7280" }}>
                {item.body}
              </p>
            </div>
          ))}
          </div>
        </div>
      </div>

      <div className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
            <div>
              <p className="text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: "#c9922a" }}>
                All Schools
              </p>
              <h2 className="text-2xl md:text-3xl font-bold" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>
                全大学の対策ページ
              </h2>
            </div>
            <form action="/search" className="flex gap-2 w-full md:w-auto md:min-w-[360px]">
              <input
                type="text"
                name="q"
                placeholder="例: 東大 / 筑波 / 防衛医科"
                className="flex-1 rounded-xl px-4 py-3 text-sm"
                style={{ border: "1px solid #d6d1c7", color: "#0c1a33", backgroundColor: "#fff" }}
              />
              <button
                type="submit"
                className="rounded-xl px-5 py-3 text-sm font-bold text-white hover:opacity-90 transition-opacity"
                style={{ backgroundColor: "#0c1a33" }}
              >
                検索
              </button>
            </form>
          </div>

          <div className="space-y-10">
            {regionOrder.map((region) => {
              const schools = nationalUniversityArticles.filter((entry) => entry.region === region);

              if (schools.length === 0) {
                return null;
              }

              return (
                <section key={region}>
                  <div className="flex items-center gap-3 mb-5">
                    <div className="h-px flex-1" style={{ backgroundColor: "#e5e1d8" }} />
                    <h3 className="text-lg font-bold" style={{ color: "#0c1a33" }}>{region}</h3>
                    <div className="h-px flex-1" style={{ backgroundColor: "#e5e1d8" }} />
                  </div>
                  <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
                    {schools.map((entry) => (
                      <Link
                        key={entry.slug}
                        href={`/universities/national/${entry.slug}`}
                        className="rounded-2xl bg-white p-6 hover:shadow-md transition-shadow"
                        style={{ border: "1px solid #e5e1d8" }}
                      >
                        <div className="flex items-center justify-between gap-3 mb-3">
                          <span
                            className="text-xs font-bold px-2.5 py-1 rounded-full"
                            style={{ backgroundColor: "rgba(201,146,42,0.12)", color: "#c9922a" }}
                          >
                            {entry.category}
                          </span>
                          <span className="text-xs" style={{ color: "#9ca3af" }}>{entry.area}</span>
                        </div>
                        <h4 className="font-bold text-base mb-2" style={{ color: "#0c1a33" }}>
                          {entry.name}
                        </h4>
                        <p className="text-sm leading-relaxed mb-3" style={{ color: "#6b7280" }}>
                          {entry.summary}
                        </p>
                        <p className="text-xs font-semibold" style={{ color: "#0c1a33" }}>
                          向いている人:
                        </p>
                        <p className="text-xs leading-relaxed mt-1" style={{ color: "#6b7280" }}>
                          {entry.fit}
                        </p>
                      </Link>
                    ))}
                  </div>
                </section>
              );
            })}
          </div>
        </div>
      </div>

      <div className="py-20 px-4" style={{ backgroundColor: "#0c1a33" }}>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#c9922a" }}>
            Free Consultation
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-noto-serif)" }}>
            国公立志望でも、大学ごとに優先順位はかなり変わります
          </h2>
          <p className="text-sm mb-8" style={{ color: "rgba(255,255,255,0.68)" }}>
            共通テストと二次の配点、得意科目、面接準備まで含めて、あなたに合う受験設計を一緒に整理できます。
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 text-white font-bold text-base rounded-lg shadow-md hover:opacity-90 transition-opacity"
            style={{ backgroundColor: "#c9922a" }}
          >
            無料相談・お問い合わせ
          </Link>
        </div>
      </div>
    </div>
  );
}
