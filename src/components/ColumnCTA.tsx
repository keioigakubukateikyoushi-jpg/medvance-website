import Link from "next/link";
import { LINE_URL } from "@/lib/links";

interface ColumnCTAProps {
  heading?: string;
  subtext?: string;
  source?: string;
  concerns?: string[];
  benefits?: string[];
  ctaLabel?: string;
}

const defaultConcerns = [
  "私立医学部の受験校をどう組むべきか相談したい",
  "大手予備校と個別管理の使い分けを決めたい",
  "集団塾が合わず、1対1で立て直したい",
  "保護者にも見える形で進捗を管理したい",
];

const defaultBenefits = [
  "前年度の不合格原因を科目・生活・出願に分けて整理する",
  "模試結果と志望校をもとに受験校候補を整理する",
  "科目別にどこへ指導時間を投じるか確認する",
];

export default function ColumnCTA({
  heading = "私立医学部に向けた学習投資の戦略を診断できます",
  subtext = "Medvanceは、予備校併用・1対1指導・受験校選定・週次学習管理・保護者共有まで一体で設計する戦略伴走型の医学部受験専門塾です。",
  source,
  concerns = defaultConcerns,
  benefits = defaultBenefits,
  ctaLabel = "合格戦略診断を申し込む",
}: ColumnCTAProps) {
  const contactHref = source ? `/contact?from=${encodeURIComponent(source)}` : "/contact";

  return (
    <div className="py-16 px-4" style={{ backgroundColor: "#0c1a33" }}>
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-xs font-semibold tracking-widest mb-3" style={{ color: "#c9922a" }}>
            Medvanceについて
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-noto-serif)" }}>
            {heading}
          </h2>
          <p className="text-sm leading-relaxed max-w-2xl mx-auto" style={{ color: "rgba(255,255,255,0.72)" }}>
            {subtext}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-5 mb-8">
          <div
            className="rounded-[24px] p-6"
            style={{ backgroundColor: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.12)" }}
          >
            <p className="text-sm font-bold mb-4" style={{ color: "#ffffff" }}>
              こういう相談が多いです
            </p>
            <div className="space-y-3">
              {concerns.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <span
                    className="mt-0.5 inline-flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full text-xs font-bold"
                    style={{ backgroundColor: "rgba(201,146,42,0.16)", color: "#c9922a" }}
                  >
                    ?
                  </span>
                  <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.74)" }}>
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div
            className="rounded-[24px] p-6"
            style={{ backgroundColor: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.12)" }}
          >
            <p className="text-sm font-bold mb-4" style={{ color: "#ffffff" }}>
              相談後に持ち帰れること
            </p>
            <div className="space-y-3">
              {benefits.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <span
                    className="mt-0.5 inline-flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full text-xs font-bold"
                    style={{ backgroundColor: "rgba(201,146,42,0.16)", color: "#c9922a" }}
                  >
                    ✓
                  </span>
                  <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.74)" }}>
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {[
            "予備校併用設計",
            "集団塾不適合の立て直し",
            "現役医学部生による戦略伴走",
            "オンライン全国対応",
            "面接・小論文まで一体管理",
            "保護者共有に対応",
          ].map((feat) => (
            <span
              key={feat}
              className="text-xs font-semibold px-4 py-2 rounded-full"
              style={{ backgroundColor: "rgba(201,146,42,0.15)", color: "#c9922a", border: "1px solid rgba(201,146,42,0.4)" }}
            >
              {feat}
            </span>
          ))}
        </div>

        <div className="grid gap-4">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={LINE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-white font-bold text-base rounded-lg text-center hover:opacity-90 transition-opacity"
              style={{ backgroundColor: "#06C755" }}
            >
              <svg viewBox="0 0 36 36" className="h-5 w-5" aria-hidden="true">
                <path
                  fill="currentColor"
                  d="M18 3C9.716 3 3 8.476 3 15.224c0 6.03 5.327 11.08 12.525 12.03.487.104 1.15.32 1.318.735.15.377.098.967.049 1.347l-.212 1.276c-.065.377-.302 1.478 1.294.805 1.596-.673 8.618-5.076 11.76-8.691C31.95 20.267 33 17.87 33 15.224 33 8.476 26.284 3 18 3zm-6.18 14.36h-3.4c-.266 0-.483-.217-.483-.484v-5.49c0-.267.217-.484.484-.484.266 0 .483.217.483.484v5.005h2.916c.266 0 .483.216.483.484 0 .267-.217.485-.483.485zm1.935-.484c0 .267-.217.485-.484.485-.267 0-.484-.218-.484-.485v-5.49c0-.267.217-.484.484-.484.267 0 .484.217.484.484v5.49zm6.35 0c0 .208-.133.393-.33.46-.05.015-.102.023-.154.023-.155 0-.3-.07-.393-.191l-2.82-3.86v3.568c0 .267-.217.485-.484.485-.266 0-.482-.218-.482-.485v-5.49c0-.207.132-.392.33-.459.05-.017.103-.024.153-.024.15 0 .297.07.39.192l2.826 3.86v-3.569c0-.267.216-.484.483-.484.267 0 .484.217.484.484v5.49zm3.922-3.228c.267 0 .484.218.484.485 0 .267-.217.485-.484.485h-1.938v.76h1.938c.266 0 .484.217.484.484s-.217.484-.484.484h-2.42c-.266 0-.483-.217-.483-.484v-5.49c0-.267.217-.484.484-.484h2.42c.266 0 .483.217.483.484 0 .268-.217.485-.484.485h-1.938v.76h1.938z"
                />
              </svg>
              LINEで相談
            </a>
            <Link
              href={contactHref}
              className="inline-flex items-center justify-center px-8 py-4 text-white font-bold text-base rounded-lg text-center hover:opacity-90 transition-opacity"
              style={{ backgroundColor: "#c9922a" }}
            >
              {ctaLabel}
            </Link>
            <Link
              href="/pricing"
              className="inline-flex items-center justify-center px-8 py-4 font-bold text-base rounded-lg text-center hover:opacity-90 transition-opacity"
              style={{ backgroundColor: "rgba(255,255,255,0.12)", color: "#fff", border: "1px solid rgba(255,255,255,0.25)" }}
            >
              料金・プランを見る
            </Link>
          </div>

          <div
            className="rounded-2xl p-5 md:p-6"
            style={{ backgroundColor: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)" }}
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <p className="text-xs font-semibold tracking-widest mb-2" style={{ color: "#c9922a" }}>
                  関連ページを探す
                </p>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.68)" }}>
                  大学名、面接、数学、学費、再受験などのテーマから、次に読むべきページをサイト内検索で探せます。
                </p>
              </div>
              <form action="/search" className="flex w-full max-w-xl gap-2">
                <input
                  type="text"
                  name="q"
                  placeholder="例: 慶應 / 面接 / 学費 / 数学"
                  className="flex-1 rounded-xl px-4 py-3 text-sm"
                  style={{ border: "1px solid rgba(255,255,255,0.18)", color: "#fff", backgroundColor: "rgba(255,255,255,0.08)" }}
                />
                <button
                  type="submit"
                  className="rounded-xl px-5 py-3 text-sm font-bold text-white hover:opacity-90 transition-opacity"
                  style={{ backgroundColor: "#c9922a" }}
                >
                  検索する
                </button>
              </form>
            </div>
          </div>

          <p className="text-center text-xs" style={{ color: "rgba(255,255,255,0.52)" }}>
            合格戦略診断 / LINE相談 / 私立医学部の受験校設計
          </p>
        </div>
      </div>
    </div>
  );
}
