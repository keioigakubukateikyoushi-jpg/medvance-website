import Link from "next/link";
import { getCatalog, listAllFreeUnits } from "@/lib/academy/catalog";
import { isAcademyMember } from "@/lib/academy/access";
import { buildBreadcrumbSchema } from "@/lib/seo";

export const metadata = {
  title: "動画・PDF教材",
  description:
    "Medvanceの動画・PDF教材。教科を選んで単元へ。一部を無料公開。無料以外はMedvance塾生見放題・質問し放題。",
  alternates: { canonical: "/academy" },
};

export default async function AcademyHubPage() {
  const catalog = getCatalog();
  const free = listAllFreeUnits();
  const member = await isAcademyMember();

  const breadcrumb = buildBreadcrumbSchema([
    { name: "ホーム", url: "/" },
    { name: "動画・PDF教材", url: "/academy" },
  ]);

  return (
    <div className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      <div style={{ backgroundColor: "#0c1a33" }} className="py-14 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#c9922a" }}>
            Medvance
          </p>
          <h1
            className="text-3xl md:text-4xl font-bold text-white mb-3"
            style={{ fontFamily: "var(--font-noto-serif)" }}
          >
            動画・PDF教材
          </h1>
          <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.7)" }}>
            講座 → 教科 → 単元の順で。基礎を順に完了すれば、高校の受験範囲を抜けなくマスターできる設計です。
            <br />
            無料お試しは数本のみ。それ以外は
            <strong className="text-white"> Medvance塾生見放題・質問し放題</strong>
            です。
          </p>
          {member && (
            <p className="mt-3 text-xs" style={{ color: "#4ade80" }}>
              塾生アクセス有効 · 全単元見放題・質問し放題
            </p>
          )}
          {!member && (
            <p className="mt-4">
              <Link href="/academy/access" className="text-xs underline underline-offset-2" style={{ color: "rgba(255,255,255,0.6)" }}>
                塾生の方はアクセスコード入力
              </Link>
            </p>
          )}
          <p className="mt-5">
            <Link
              href="/column/academy-mihoudai"
              className="inline-flex items-center gap-1 text-xs font-semibold underline underline-offset-2"
              style={{ color: "#c9922a" }}
            >
              見放題の内容・使い方を記事で読む →
            </Link>
          </p>
        </div>
      </div>

      {/* 1. 教科を選ぶ */}
      <div className="py-14 px-4" style={{ backgroundColor: "#f7f5f0" }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-lg font-bold mb-2" style={{ color: "#0c1a33" }}>
            1. 教科を選ぶ
          </h2>
          <p className="text-sm mb-8" style={{ color: "#6b7280" }}>
            まず講座と教科を選び、その中の単元一覧へ進みます。
          </p>

          <div className="space-y-10">
            {(catalog.tracks || []).map((track) => (
              <section key={track.id}>
                <div className="flex flex-wrap items-baseline gap-2 mb-4">
                  <h3 className="text-base font-bold" style={{ color: "#0c1a33" }}>
                    {track.label}
                  </h3>
                  <p className="text-xs" style={{ color: "#6b7280" }}>
                    {track.description}
                  </p>
                </div>
                <div className="grid sm:grid-cols-2 gap-3">
                  {(track.subjects || []).map((s) => (
                    <Link
                      key={s.id}
                      href={`/academy/subject/${encodeURIComponent(s.id)}`}
                      className="p-5 rounded-2xl bg-white hover:shadow-md transition-shadow"
                      style={{ border: "1px solid #e5e1d8" }}
                    >
                      <p className="font-semibold text-sm mb-1" style={{ color: "#0c1a33" }}>
                        {s.subject}
                      </p>
                      <p className="text-xs" style={{ color: "#6b7280" }}>
                        {s.full_count ?? s.unit_count} 単元
                      </p>
                    </Link>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </div>

      {/* 2. 無料お試し（少数） */}
      <div className="py-14 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-lg font-bold mb-2" style={{ color: "#0c1a33" }}>
            2. 無料で試せる単元
          </h2>
          <p className="text-sm mb-6" style={{ color: "#6b7280" }}>
            雰囲気を確かめるためのお試しです（全{free.length}本）。続きは
            <strong style={{ color: "#0c1a33" }}>Medvance塾生見放題・質問し放題</strong>
            です。
          </p>
          <ul className="space-y-3">
            {free.map(({ unit, subject, subjectId }) => (
              <li key={unit.id}>
                <Link
                  href={`/academy/unit/${unit.id}?subject=${encodeURIComponent(subjectId)}`}
                  className="flex flex-wrap items-center gap-2 p-4 rounded-xl hover:bg-[#f7f5f0] transition-colors"
                  style={{ border: "1px solid #e5e1d8" }}
                >
                  <span
                    className="text-xs font-bold px-2 py-0.5 rounded-full"
                    style={{ background: "#eef8f0", color: "#17633a" }}
                  >
                    無料
                  </span>
                  <span className="text-xs" style={{ color: "#6b7280" }}>
                    {subject}
                  </span>
                  <span className="font-semibold text-sm" style={{ color: "#0c1a33" }}>
                    {unit.id} · {unit.title}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="py-12 px-4" style={{ backgroundColor: "#f7f5f0" }}>
        <div className="max-w-3xl mx-auto p-7 rounded-2xl bg-white" style={{ border: "1px solid #e5e1d8" }}>
          <h2 className="text-base font-bold mb-2" style={{ color: "#0c1a33" }}>
            Medvance塾生見放題・質問し放題
          </h2>
          <p className="text-sm mb-5" style={{ color: "#6b7280" }}>
            無料以外の全単元（動画・PDF・スライド）が見放題。学習中の質問もし放題です。
            授業＋コーチング／特化プラン／コーチング単体などの契約後、事務局からアクセスコードをお渡しします。
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/academy/access"
              className="px-5 py-2.5 rounded-lg text-sm font-semibold text-white"
              style={{ backgroundColor: "#0c1a33" }}
            >
              アクセスコードを入力
            </Link>
            <Link
              href="/pricing"
              className="px-5 py-2.5 rounded-lg text-sm font-semibold"
              style={{ border: "1px solid #e5e1d8", color: "#0c1a33" }}
            >
              料金を見る
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
