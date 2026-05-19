type TocItem = {
  id: string;
  label: string;
};

export default function ColumnTableOfContents({ items }: { items: TocItem[] }) {
  if (items.length < 2) return null;

  return (
    <div className="py-8 px-4 bg-white">
      <nav
        aria-label="目次"
        className="max-w-3xl mx-auto p-6 rounded-2xl"
        style={{ backgroundColor: "#f7f5f0", border: "1px solid #e5e1d8" }}
      >
        <p
          className="text-xs font-bold tracking-widest uppercase mb-4"
          style={{ color: "#c9922a" }}
        >
          目次
        </p>
        <ol className="space-y-2">
          {items.map((item, i) => (
            <li key={item.id} className="flex gap-3 text-sm">
              <span
                className="flex-shrink-0 font-bold"
                style={{ color: "#c9922a", fontVariantNumeric: "tabular-nums" }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <a
                href={`#${item.id}`}
                className="font-semibold hover:underline"
                style={{ color: "#0c1a33" }}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ol>
      </nav>
    </div>
  );
}
