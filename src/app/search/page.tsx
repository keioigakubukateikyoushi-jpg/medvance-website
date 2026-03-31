import Link from "next/link";

type SearchItem = {
  href: string;
  category: string;
  title: string;
  description: string;
};

const articles: SearchItem[] = [
  { href: "/column/study-method", category: "勉強法", title: "医学部合格のための正しい勉強法", description: "科目別の具体的な学習アプローチとよくある失敗パターンを解説。量より質を重視した学習設計で成績を伸ばす方法。" },
  { href: "/column/roadmap", category: "受験戦略", title: "医学部受験ロードマップ", description: "現役合格から再受験まで、時期別にやるべきことを整理。いつ・何を・どの順番で進めるかを明確にするためのガイド。" },
  { href: "/column/difference", category: "受験戦略", title: "医学部に受かる人・落ちる人の違い", description: "合格者と不合格者を分けるのは才能ではなく戦略の差。現場で見えた差がつくポイントを具体的に解説。" },
  { href: "/column/juken-timing", category: "受験戦略", title: "医学部受験はいつから始めるべきか", description: "高1・高2・高3・浪人・再受験それぞれの最適なスタート時期と準備内容を解説。" },
  { href: "/column/hensachi", category: "受験情報", title: "医学部合格に必要な偏差値は？現実的な目標設定", description: "国公立・私立医学部の偏差値目安を大学別に整理。偏差値だけで判断しない受験戦略も解説。" },
  { href: "/column/shigaku-vs-kokuritsu", category: "大学選び", title: "私立医学部と国公立医学部、どちらを目指すべきか", description: "学費・難易度・環境の違いを徹底比較。自分のタイプ別にどちらを選ぶべきかを整理。" },
  { href: "/column/gakuhi", category: "大学選び", title: "医学部の学費・費用を徹底比較", description: "国公立と私立の学費差から奨学金・特待生制度まで網羅。6年間でいくらかかるかを大学別に整理。" },
  { href: "/column/private-top5", category: "大学選び", title: "慶應・慈恵・順天堂など私立医学部トップ5の特徴と対策", description: "私立医学部トップ校の入試傾向・特色・合格戦略を現役慶應医学部生が解説。" },
  { href: "/column/keio-guide", category: "大学選び", title: "慶應義塾大学医学部の入試完全ガイド", description: "慶應医学部の科目別入試傾向・倍率・面接の実態・合格戦略を解説。" },
  { href: "/column/mensetu", category: "入試対策", title: "医学部面接対策の完全ガイド", description: "よく聞かれる質問と回答例、MMI対策、面接で落とされるパターンまで網羅。" },
  { href: "/column/shobun", category: "入試対策", title: "医学部小論文の書き方・完全対策ガイド", description: "頻出テーマと合格答案の書き方を解説。構成の型・NGパターン・対策スケジュールまで網羅。" },
  { href: "/column/saijuken", category: "再受験", title: "社会人・大学生からの医学部再受験ガイド", description: "医学部再受験のリアルな現状・合格者の共通点・勉強計画の設計まで整理。" },
  { href: "/column/juku-erabi", category: "塾・指導", title: "医学部受験の塾・予備校の選び方", description: "大手予備校・個別指導・医学部専門塾・家庭教師の特徴を徹底比較。失敗しない塾選びの判断基準を解説。" },
  { href: "/column/support-juku-choice", category: "塾・指導", title: "医学部受験の塾はサポート体制で選ぶべき理由", description: "医学部専門予備校の高額な学費、大手予備校の一律カリキュラム、オーダーメイド指導の強みを比較。" },
  { href: "/column/medical-yobiko-cost", category: "塾・指導", title: "医学部専門予備校は高いだけ？費用とサポートを見極めるポイント", description: "医学部専門予備校の学費はなぜ高いのか。本当にサポート体制に見合っているのかを整理。" },
  { href: "/column/ordermade-curriculum", category: "塾・指導", title: "医学部受験でオーダーメイドカリキュラムが重要な理由", description: "全員同じカリキュラムより、志望校・苦手科目・生活リズムに合わせた個別設計のほうが伸びやすい理由を解説。" },
  { href: "/column/kateikyoushi", category: "塾・指導", title: "医学部受験に家庭教師は効果的か？選び方と活用法", description: "医学部受験における家庭教師のメリット・選び方のポイント・費用相場を解説。" },
];

export const metadata = {
  title: "記事検索 | Medvance",
  description: "Medvanceサイト内の記事をキーワードで検索できます。医学部受験の勉強法、塾選び、面接対策などをすばやく探せます。",
};

export default async function SearchPage({
  searchParams,
}: {
  searchParams?: Promise<{ q?: string }>;
}) {
  const params = (await searchParams) ?? {};
  const rawQuery = params.q ?? "";
  const query = rawQuery.trim();
  const normalized = query.toLowerCase();

  const results = !query
    ? []
    : articles.filter((item) =>
        [item.title, item.description, item.category]
          .join(" ")
          .toLowerCase()
          .includes(normalized)
      );

  return (
    <div className="min-h-screen bg-white">
      <div style={{ backgroundColor: "#0c1a33" }} className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#c9922a" }}>
            Search
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: "'Noto Serif JP', serif" }}>
            記事検索
          </h1>
          <p className="text-sm mb-8" style={{ color: "rgba(255,255,255,0.65)" }}>
            勉強法、塾選び、面接、小論文など、気になるテーマを検索できます
          </p>
          <form action="/search" className="max-w-2xl mx-auto flex flex-col sm:flex-row gap-3">
            <input
              type="text"
              name="q"
              defaultValue={query}
              placeholder="例：塾選び、面接、慶應、学費"
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
                検索したいキーワードを入力してください。
              </p>
              <div className="flex flex-wrap gap-2">
                {["塾選び", "面接", "小論文", "学費", "勉強法", "再受験"].map((keyword) => (
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
                    一致する記事が見つかりませんでした。別の言い回しや、短いキーワードでも試してみてください。
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
