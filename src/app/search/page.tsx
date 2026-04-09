import Link from "next/link";
import { searchSite, suggestedSearchKeywords } from "./search-data";

export const metadata = {
  title: "サイト内検索 | Medvance",
  description:
    "Medvance サイト内の大学別対策、コラム、料金、教科別対策、サービス情報をキーワードで検索できます。",
  alternates: {
    canonical: "/search",
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default async function SearchPage({
  searchParams,
}: {
  searchParams?: Promise<{ q?: string }>;
}) {
  const params = (await searchParams) ?? {};
  const query = (params.q ?? "").trim();
  const results = searchSite(query);

  return (
    <div className="min-h-screen bg-white">
      <div style={{ backgroundColor: "#0c1a33" }} className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#c9922a" }}>
            Search
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-noto-serif)" }}>
            サイト内検索
          </h1>
          <p className="text-sm mb-8" style={{ color: "rgba(255,255,255,0.65)" }}>
            大学別対策、コラム、料金、教科別対策、サービスページまでまとめて検索できます。
          </p>
          <form action="/search" className="max-w-2xl mx-auto flex flex-col sm:flex-row gap-3">
            <input
              type="text"
              name="q"
              defaultValue={query}
              placeholder="例: 慶應 / 面接 / 医学部専門予備校 / 数学"
              className="flex-1 px-5 py-4 rounded-xl text-sm"
              style={{ backgroundColor: "#fff", color: "#0c1a33", border: "1px solid #e5e1d8" }}
            />
            <button
              type="submit"
              className="px-6 py-4 rounded-xl text-sm font-bold text-white"
              style={{ backgroundColor: "#c9922a" }}
            >
              検索する
            </button>
          </form>
        </div>
      </div>

      <div className="py-14 px-4" style={{ backgroundColor: "#f7f5f0" }}>
        <div className="max-w-5xl mx-auto">
          {!query && (
            <div className="p-8 rounded-2xl bg-white" style={{ border: "1px solid #e5e1d8" }}>
              <p className="text-sm mb-4" style={{ color: "#3d3d3d" }}>
                気になるキーワードからページを探せます。
              </p>
              <div className="flex flex-wrap gap-2">
                {suggestedSearchKeywords.map((keyword) => (
                  <Link
                    key={keyword}
                    href={`/search?q=${encodeURIComponent(keyword)}`}
                    className="px-4 py-2 rounded-full text-xs font-semibold"
                    style={{ backgroundColor: "rgba(12,26,51,0.06)", color: "#0c1a33", border: "1px solid #e5e1d8" }}
                  >
                    {keyword}
                  </Link>
                ))}
              </div>
            </div>
          )}

          {!!query && (
            <>
              <p className="text-sm mb-6" style={{ color: "#6b7280" }}>
                「{query}」の検索結果: {results.length}件
              </p>
              <div className="grid md:grid-cols-2 gap-5">
                {results.map((item, i) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="flex gap-5 p-6 rounded-2xl bg-white hover:shadow-md transition-shadow"
                    style={{ border: "1px solid #e5e1d8" }}
                  >
                    <div
                      className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm"
                      style={{ backgroundColor: "#f7f5f0", color: "#0c1a33" }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <div>
                      <p className="text-xs font-bold mb-2" style={{ color: "#c9922a" }}>{item.category}</p>
                      <h2 className="font-bold text-sm mb-2" style={{ color: "#0c1a33" }}>{item.title}</h2>
                      <p className="text-xs leading-relaxed" style={{ color: "#6b7280" }}>{item.description}</p>
                    </div>
                  </Link>
                ))}
              </div>
              {results.length === 0 && (
                <div className="mt-8 p-8 rounded-2xl bg-white" style={{ border: "1px solid #e5e1d8" }}>
                  <p className="text-sm" style={{ color: "#3d3d3d" }}>
                    一致するページが見つかりませんでした。大学名、教科名、記事テーマなど別のキーワードでも試してみてください。
                  </p>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
