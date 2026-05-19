const words = [
  "現役慶應医学部生が指導",
  "1対1個別指導",
  "全国オンライン対応",
  "医学部受験専門",
  "フォーム・LINEで相談",
  "面接・小論文対策",
  "志望校別学習計画",
  "浪人・再受験生歓迎",
];

export default function Marquee() {
  const items = [...words, ...words];

  return (
    <div
      className="overflow-hidden py-3"
      style={{ backgroundColor: "#0c1a33", borderTop: "1px solid rgba(255,255,255,0.07)", borderBottom: "1px solid rgba(255,255,255,0.07)" }}
    >
      <div className="flex animate-marquee whitespace-nowrap">
        {items.map((word, i) => (
          <span key={i} className="inline-flex items-center gap-3 mx-4 text-xs tracking-wider flex-shrink-0" style={{ color: "rgba(255,255,255,0.5)" }}>
            <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: "#c9922a" }} />
            {word}
          </span>
        ))}
      </div>
    </div>
  );
}
