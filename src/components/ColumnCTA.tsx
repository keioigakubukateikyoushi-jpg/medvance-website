import Link from "next/link";

interface ColumnCTAProps {
  heading?: string;
  subtext?: string;
  source?: string;
  concerns?: string[];
  benefits?: string[];
  ctaLabel?: string;
}

const defaultConcerns = [
  "今の勉強の優先順位が合っているか不安",
  "志望校に対して、どこから手を付けるべきかわからない",
  "独学では学習計画や面接対策まで回し切れない",
];

const defaultBenefits = [
  "現状の学力と志望校をもとに、次の一手を言語化",
  "いつまでに何を終えるかを逆算した学習計画を整理",
  "面接・小論文・併願校まで含めた受験戦略を相談可能",
];

export default function ColumnCTA({
  heading = "記事を読んだあとに、次の一手まで整理したい方へ",
  subtext = "Medvanceは現役慶應医学部生による完全1対1の伴走型指導です。学力・志望校・残り期間に合わせて、勉強計画から面接や小論文まで一貫してサポートします。",
  source,
  concerns = defaultConcerns,
  benefits = defaultBenefits,
  ctaLabel = "30分無料相談を申し込む",
}: ColumnCTAProps) {
  const contactHref = source ? `/contact?from=${encodeURIComponent(source)}` : "/contact";

  return (
    <div className="py-16 px-4" style={{ backgroundColor: "#0c1a33" }}>
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#c9922a" }}>
            About Medvance
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4" style={{ fontFamily: "'Noto Serif JP', serif" }}>
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
              こんな状態なら、無料相談が向いています
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
            "完全1対1の学習伴走",
            "慶應医学部生による個別設計",
            "オンライン全国対応",
            "面接・小論文まで一貫対応",
            "勧誘なしの無料相談",
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
                <p className="text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: "#c9922a" }}>
                  Search More
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
            30分オンライン相談 / 完全無料 / 勧誘なし / 申し込み特典として医学部受験戦略マニュアルをお届けします
          </p>
        </div>
      </div>
    </div>
  );
}
