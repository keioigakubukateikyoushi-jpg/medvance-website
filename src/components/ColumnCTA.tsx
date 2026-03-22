import Link from "next/link";

interface ColumnCTAProps {
  heading?: string;
  subtext?: string;
}

export default function ColumnCTA({
  heading = "この記事を読んで、Medvanceが気になった方へ",
  subtext = "現役慶應医学部生による完全1対1指導。学習計画の設計から面接対策まで、あなたの合格を徹底的にサポートします。",
}: ColumnCTAProps) {
  return (
    <div className="py-16 px-4" style={{ backgroundColor: "#0c1a33" }}>
      <div className="max-w-3xl mx-auto">
        {/* Medvance intro */}
        <div className="text-center mb-10">
          <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#c9922a" }}>
            About Medvance
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4" style={{ fontFamily: "'Noto Serif JP', serif" }}>
            {heading}
          </h2>
          <p className="text-sm leading-relaxed max-w-xl mx-auto" style={{ color: "rgba(255,255,255,0.68)" }}>
            {subtext}
          </p>
        </div>

        {/* Feature pills */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {[
            "現役慶應医学部生が直接指導",
            "完全1対1の個別授業",
            "全国オンライン対応",
            "コーチング込みの月額制",
            "無料相談随時受付",
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

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-block px-8 py-4 font-bold text-base rounded-lg text-center hover:opacity-90 transition-opacity"
            style={{ backgroundColor: "rgba(255,255,255,0.12)", color: "#fff", border: "1px solid rgba(255,255,255,0.25)" }}
          >
            Medvanceのサービスを詳しく見る
          </Link>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 text-white font-bold text-base rounded-lg text-center hover:opacity-90 transition-opacity"
            style={{ backgroundColor: "#c9922a" }}
          >
            無料相談・お問い合わせ
          </Link>
        </div>
      </div>
    </div>
  );
}
