import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import {
  buildTutorDirectorySchemas,
  getApprovedTutors,
  getTutorDirectory,
  getTutorRankScore,
  normalizeTutorSort,
  tutorAreas,
  tutorFormats,
  tutorSortOptions,
  tutorSubjects,
  type Tutor,
} from "@/lib/tutors";

export const metadata: Metadata = {
  title: "家庭教師一覧 | Medvance",
  description:
    "Medvanceに掲載されている医学部受験向け家庭教師を、大学・科目・対応エリア・指導形式から探せます。掲載順の基準も公開しています。",
  alternates: {
    canonical: "/tutors",
  },
};

type TutorSearchParams = {
  q?: string;
  area?: string;
  subject?: string;
  format?: string;
  sort?: string;
};

type TutorFormat = NonNullable<Tutor["formats"]>[number];

function yen(value?: number) {
  return value ? `${value.toLocaleString("ja-JP")}円 / 30分` : "個別相談";
}

function formatLabel(value: TutorFormat) {
  return tutorFormats.find((item) => item.value === value)?.label ?? value;
}

function activeParam(value?: string) {
  return value && value.trim().length > 0 ? value.trim() : "";
}

export default async function TutorsPage({
  searchParams,
}: {
  searchParams?: Promise<TutorSearchParams>;
}) {
  const params = (await searchParams) ?? {};
  const q = activeParam(params.q);
  const area = activeParam(params.area);
  const subject = activeParam(params.subject);
  const format = activeParam(params.format);
  const sort = normalizeTutorSort(params.sort);
  const approvedTutors = getApprovedTutors();
  const results = getTutorDirectory({ q, area, subject, format, sort });
  const schemas = buildTutorDirectorySchemas(results);
  const hasFilters = Boolean(q || area || subject || format || sort !== "recommended");

  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
      />

      <section style={{ backgroundColor: "#0c1a33" }} className="px-4 py-20">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest" style={{ color: "#c9922a" }}>
              Tutor Directory
            </p>
            <h1
              className="mb-5 text-3xl font-bold leading-tight text-white md:text-5xl"
              style={{ fontFamily: "var(--font-noto-serif)" }}
            >
              Medvance家庭教師一覧
            </h1>
            <p className="max-w-2xl text-sm leading-relaxed md:text-base" style={{ color: "rgba(255,255,255,0.72)" }}>
              医学部受験・内部進学・学校成績対策に強い講師を、科目、大学、対応エリア、指導形式から探せる公開ディレクトリです。
              掲載順は本人確認、プロフィールの充実度、指導実績、意味のある情報更新をもとに決めます。
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact?from=tutors-hero"
                className="inline-flex items-center justify-center rounded-lg px-6 py-3 text-sm font-bold text-white transition-opacity hover:opacity-90"
                style={{ backgroundColor: "#c9922a" }}
              >
                相性のよい講師を相談する
              </Link>
              <Link
                href="/recruit?from=tutors-hero"
                className="inline-flex items-center justify-center rounded-lg px-6 py-3 text-sm font-bold transition-opacity hover:opacity-90"
                style={{ backgroundColor: "rgba(255,255,255,0.1)", color: "#fff", border: "1px solid rgba(255,255,255,0.18)" }}
              >
                講師として掲載申請する
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3">
            {[
              { label: "公開講師", value: `${approvedTutors.length}名` },
              { label: "検索結果", value: `${results.length}名` },
              { label: "掲載順", value: tutorSortOptions.find((item) => item.value === sort)?.label ?? "おすすめ順" },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-lg p-4 text-center"
                style={{ backgroundColor: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.14)" }}
              >
                <p className="mb-1 text-[11px] font-semibold" style={{ color: "rgba(255,255,255,0.5)" }}>
                  {item.label}
                </p>
                <p className="text-base font-bold text-white md:text-lg">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-10" style={{ backgroundColor: "#f7f5f0", borderBottom: "1px solid #e5e1d8" }}>
        <form action="/tutors" className="mx-auto grid max-w-6xl gap-3 md:grid-cols-[1.3fr_repeat(4,1fr)_auto]">
          <input
            type="search"
            name="q"
            defaultValue={q}
            placeholder="大学名・科目・指導内容で検索"
            className="rounded-lg px-4 py-3 text-sm"
            style={{ border: "1px solid #d6d1c7", color: "#0c1a33", backgroundColor: "#fff" }}
          />
          <select
            name="area"
            defaultValue={area}
            className="rounded-lg px-3 py-3 text-sm"
            style={{ border: "1px solid #d6d1c7", color: "#0c1a33", backgroundColor: "#fff" }}
          >
            <option value="">全エリア</option>
            {tutorAreas.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
          <select
            name="subject"
            defaultValue={subject}
            className="rounded-lg px-3 py-3 text-sm"
            style={{ border: "1px solid #d6d1c7", color: "#0c1a33", backgroundColor: "#fff" }}
          >
            <option value="">全科目</option>
            {tutorSubjects.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
          <select
            name="format"
            defaultValue={format}
            className="rounded-lg px-3 py-3 text-sm"
            style={{ border: "1px solid #d6d1c7", color: "#0c1a33", backgroundColor: "#fff" }}
          >
            <option value="">指導形式</option>
            {tutorFormats.map((item) => (
              <option key={item.value} value={item.value}>
                {item.label}
              </option>
            ))}
          </select>
          <select
            name="sort"
            defaultValue={sort}
            className="rounded-lg px-3 py-3 text-sm"
            style={{ border: "1px solid #d6d1c7", color: "#0c1a33", backgroundColor: "#fff" }}
          >
            {tutorSortOptions.map((item) => (
              <option key={item.value} value={item.value}>
                {item.label}
              </option>
            ))}
          </select>
          <button
            type="submit"
            className="rounded-lg px-6 py-3 text-sm font-bold text-white transition-opacity hover:opacity-90"
            style={{ backgroundColor: "#0c1a33" }}
          >
            絞り込む
          </button>
        </form>
        {hasFilters && (
          <div className="mx-auto mt-4 max-w-6xl">
            <Link href="/tutors" className="text-xs font-semibold underline" style={{ color: "#6b7280" }}>
              条件をリセット
            </Link>
          </div>
        )}
      </section>

      <section className="px-4 py-14">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1fr_320px]">
          <div>
            {approvedTutors.length === 0 ? (
              <div className="rounded-xl p-8" style={{ backgroundColor: "#f7f5f0", border: "1px solid #e5e1d8" }}>
                <p className="mb-2 text-xs font-bold uppercase tracking-widest" style={{ color: "#c9922a" }}>
                  Preparing
                </p>
                <h2 className="mb-3 text-xl font-bold" style={{ color: "#0c1a33" }}>
                  承認済みの公開講師はまだ登録されていません
                </h2>
                <p className="mb-6 text-sm leading-relaxed" style={{ color: "#4b5563" }}>
                  講師本人の同意、所属確認、掲載内容の確認が完了したプロフィールから順次公開します。
                  先に講師候補を探したい場合は、無料相談で志望校・科目・希望時間帯をお伝えください。
                </p>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <Link
                    href="/contact?from=tutors-empty"
                    className="inline-flex items-center justify-center rounded-lg px-5 py-3 text-sm font-bold text-white"
                    style={{ backgroundColor: "#c9922a" }}
                  >
                    講師候補を相談する
                  </Link>
                  <Link
                    href="/recruit?from=tutors-empty"
                    className="inline-flex items-center justify-center rounded-lg px-5 py-3 text-sm font-bold"
                    style={{ color: "#0c1a33", border: "1px solid #d6d1c7", backgroundColor: "#fff" }}
                  >
                    講師募集を見る
                  </Link>
                </div>
              </div>
            ) : results.length === 0 ? (
              <div className="rounded-xl p-8" style={{ backgroundColor: "#f7f5f0", border: "1px solid #e5e1d8" }}>
                <h2 className="mb-3 text-xl font-bold" style={{ color: "#0c1a33" }}>
                  条件に合う講師が見つかりませんでした
                </h2>
                <p className="mb-6 text-sm leading-relaxed" style={{ color: "#4b5563" }}>
                  条件を減らすか、無料相談で希望条件をお伝えください。非公開の候補も含めて確認します。
                </p>
                <Link href="/tutors" className="text-sm font-bold underline" style={{ color: "#c9922a" }}>
                  条件をリセットする
                </Link>
              </div>
            ) : (
              <div className="space-y-5">
                {results.map((tutor, index) => (
                  <article
                    key={tutor.slug}
                    id={`tutor-${tutor.slug}`}
                    className="grid gap-5 rounded-xl p-5 md:grid-cols-[112px_1fr_180px]"
                    style={{ border: "1px solid #e5e1d8", backgroundColor: "#fff" }}
                  >
                    <div>
                      {tutor.photoUrl ? (
                        <div className="h-24 w-24 overflow-hidden rounded-lg" style={{ backgroundColor: "#f7f5f0" }}>
                          <Image
                            src={tutor.photoUrl}
                            alt={tutor.name}
                            width={192}
                            height={192}
                            className="h-full w-full object-cover"
                          />
                        </div>
                      ) : (
                        <div
                          className="flex h-24 w-24 items-center justify-center rounded-lg text-2xl font-bold"
                          style={{ backgroundColor: "#0c1a33", color: "#c9922a" }}
                        >
                          {tutor.name.slice(0, 1)}
                        </div>
                      )}
                    </div>

                    <div>
                      <div className="mb-2 flex flex-wrap items-center gap-2">
                        <span className="rounded-full px-2.5 py-1 text-[11px] font-bold" style={{ backgroundColor: "#f7f5f0", color: "#c9922a" }}>
                          No.{String(index + 1).padStart(2, "0")}
                        </span>
                        {tutor.verifiedAt && (
                          <span className="rounded-full px-2.5 py-1 text-[11px] font-bold" style={{ backgroundColor: "#ecfdf5", color: "#047857" }}>
                            本人確認済み
                          </span>
                        )}
                      </div>
                      <h2 className="mb-1 text-lg font-bold" style={{ color: "#0c1a33" }}>
                        {tutor.name}
                      </h2>
                      <p className="mb-3 text-sm" style={{ color: "#6b7280" }}>
                        {tutor.university} {tutor.faculty} {tutor.grade}
                      </p>
                      <p className="mb-4 text-sm leading-relaxed" style={{ color: "#374151" }}>
                        {tutor.background}
                      </p>
                      <div className="mb-4 flex flex-wrap gap-1.5">
                        {tutor.specialties.map((item) => (
                          <span key={item} className="rounded-full px-2.5 py-1 text-[11px]" style={{ backgroundColor: "rgba(12,26,51,0.06)", color: "#0c1a33" }}>
                            {item}
                          </span>
                        ))}
                      </div>
                      <p className="text-sm leading-relaxed" style={{ color: "#6b7280" }}>
                        {tutor.message}
                      </p>
                    </div>

                    <aside className="rounded-lg p-4" style={{ backgroundColor: "#f7f5f0" }}>
                      <p className="mb-1 text-[11px] font-bold uppercase tracking-widest" style={{ color: "#9ca3af" }}>
                        Lesson Fee
                      </p>
                      <p className="mb-3 text-lg font-bold" style={{ color: "#0c1a33" }}>
                        {yen(tutor.regularRateYen)}
                      </p>
                      {tutor.trialRateYen && (
                        <p className="mb-3 text-xs" style={{ color: "#6b7280" }}>
                          体験: {yen(tutor.trialRateYen)}
                        </p>
                      )}
                      <dl className="space-y-2 text-xs" style={{ color: "#4b5563" }}>
                        <div>
                          <dt className="font-bold" style={{ color: "#0c1a33" }}>形式</dt>
                          <dd>{tutor.formats?.map(formatLabel).join(" / ") || "相談可"}</dd>
                        </div>
                        <div>
                          <dt className="font-bold" style={{ color: "#0c1a33" }}>エリア</dt>
                          <dd>{tutor.areas?.join(" / ") || "相談可"}</dd>
                        </div>
                        <div>
                          <dt className="font-bold" style={{ color: "#0c1a33" }}>科目</dt>
                          <dd>{tutor.subjects?.join(" / ") || "相談可"}</dd>
                        </div>
                      </dl>
                      <Link
                        href={`/contact?from=tutor-${encodeURIComponent(tutor.slug)}`}
                        className="mt-4 inline-flex w-full items-center justify-center rounded-lg px-4 py-3 text-sm font-bold text-white"
                        style={{ backgroundColor: "#c9922a" }}
                      >
                        この講師を相談
                      </Link>
                      <p className="mt-3 text-[11px]" style={{ color: "#9ca3af" }}>
                        表示スコア: {Math.round(getTutorRankScore(tutor))}
                      </p>
                    </aside>
                  </article>
                ))}
              </div>
            )}
          </div>

          <aside className="space-y-5">
            <section className="rounded-xl p-6" style={{ backgroundColor: "#0c1a33" }}>
              <p className="mb-2 text-xs font-bold uppercase tracking-widest" style={{ color: "#c9922a" }}>
                Ranking Policy
              </p>
              <h2 className="mb-4 text-lg font-bold text-white">掲載順のルール</h2>
              <div className="space-y-3">
                {[
                  ["本人確認", "所属・連絡先・掲載同意が確認できている講師を優先"],
                  ["プロフィール充実度", "科目、エリア、料金、指導方針が明確な講師を優先"],
                  ["指導実績", "授業数や継続状況など、実際の支援実績を反映"],
                  ["意味のある更新", "料金・対応科目・空き枠など、利用者に必要な更新を反映"],
                ].map(([title, body]) => (
                  <div key={title}>
                    <p className="text-sm font-bold" style={{ color: "#fff" }}>{title}</p>
                    <p className="text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.62)" }}>{body}</p>
                  </div>
                ))}
              </div>
              <p className="mt-5 text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.48)" }}>
                単なるログイン頻度や意味のないプロフィール変更だけで順位を上げる設計にはしていません。
              </p>
            </section>

            <section className="rounded-xl p-6" style={{ backgroundColor: "#f7f5f0", border: "1px solid #e5e1d8" }}>
              <h2 className="mb-3 text-lg font-bold" style={{ color: "#0c1a33" }}>
                迷ったら無料相談へ
              </h2>
              <p className="mb-5 text-sm leading-relaxed" style={{ color: "#4b5563" }}>
                志望校、現在の成績、苦手科目、希望時間帯をもとに、公開講師と非公開候補の両方から相性を確認します。
              </p>
              <Link
                href="/contact?from=tutors-sidebar"
                className="inline-flex w-full items-center justify-center rounded-lg px-5 py-3 text-sm font-bold text-white"
                style={{ backgroundColor: "#c9922a" }}
              >
                無料相談に進む
              </Link>
            </section>
          </aside>
        </div>
      </section>
    </div>
  );
}
