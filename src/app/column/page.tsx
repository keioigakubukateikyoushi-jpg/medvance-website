import Link from "next/link";

export const metadata = {
  title: "医学部受験コラム | Medvance",
  description:
    "現役慶應医学部生による医学部受験コラム。勉強法・ロードマップ・面接対策・学費比較など、受験に役立つ情報を詳しく解説します。",
};

const articles = [
  {
    slug: "study-method",
    label: "勉強法",
    title: "医学部合格のための正しい勉強法",
    description:
      "科目別の具体的な学習アプローチとよくある失敗パターンを解説。量より質を重視した学習設計で成績を伸ばす方法。",
  },
  {
    slug: "roadmap",
    label: "受験戦略",
    title: "医学部受験ロードマップ",
    description:
      "現役合格から再受験まで、時期別にやるべきことを整理。いつ・何を・どの順番で進めるかを明確にするためのガイド。",
  },
  {
    slug: "difference",
    label: "合格分析",
    title: "医学部に受かる人・落ちる人の違い",
    description:
      "合格者と不合格者を分けるのは才能ではなく戦略の差。現場で見えた「差がつくポイント」を具体的に解説。",
  },
  {
    slug: "shigaku-vs-kokuritsu",
    label: "大学選び",
    title: "私立医学部と国公立医学部、どちらを目指すべきか",
    description:
      "学費・難易度・環境の違いを徹底比較。自分のタイプ別に「どちらを選ぶべきか」のアドバイスをまとめました。",
  },
  {
    slug: "mensetu",
    label: "面接対策",
    title: "医学部面接対策の完全ガイド",
    description:
      "よく聞かれる質問と回答例、MMI対策、面接で落とされるパターンまで。配点の高い面接で差をつける準備法。",
  },
  {
    slug: "gakuhi",
    label: "費用・学費",
    title: "医学部の学費・費用を徹底比較",
    description:
      "国公立と私立の学費差から奨学金・特待生制度まで網羅。6年間でいくらかかるかを大学別に整理しています。",
  },
  {
    slug: "juken-timing",
    label: "受験戦略",
    title: "医学部受験はいつから始めるべきか",
    description:
      "高1・高2・高3・浪人・再受験それぞれの最適なスタート時期と準備内容を解説。「何年生から始めれば間に合う？」という疑問に完全回答します。",
  },
  {
    slug: "hensachi",
    label: "受験情報",
    title: "医学部合格に必要な偏差値は？現実的な目標設定",
    description:
      "国公立・私立医学部の偏差値目安を大学別に整理。「偏差値だけで判断しない」受験戦略と現実的な目標設定の考え方を解説します。",
  },
  {
    slug: "saijuken",
    label: "再受験",
    title: "社会人・大学生からの医学部再受験ガイド",
    description:
      "医学部再受験のリアルな現状・合格者の共通点・勉強計画の設計まで。社会人経験を面接の強みに変える方法も解説。",
  },
  {
    slug: "private-top5",
    label: "大学選び",
    title: "慶應・慈恵・順天堂など私立医学部トップ5の特徴と対策",
    description:
      "慶應義塾・東京慈恵会・順天堂・日本医科・昭和大学の入試傾向・特色・合格戦略を現役慶應医学部生が徹底解説。",
  },
  {
    slug: "keio-guide",
    label: "大学別対策",
    title: "慶應義塾大学医学部の入試完全ガイド",
    description:
      "慶應医学部の科目別入試傾向・倍率・面接の実態・合格戦略を現役在籍生が解説。慶應受験を目指す方必見の完全ガイド。",
  },
  {
    slug: "juku-erabi",
    label: "塾選び",
    title: "医学部受験の塾・予備校の選び方",
    description:
      "大手予備校・個別指導・医学部専門塾・家庭教師の特徴を徹底比較。失敗しない塾選びの5つの判断基準と、よくある選び方の失敗パターンを解説します。",
  },
  {
    slug: "kateikyoushi",
    label: "家庭教師",
    title: "医学部受験に家庭教師は効果的か？選び方と活用法",
    description:
      "医学部受験における家庭教師の5つのメリット・選び方のポイント・費用相場を解説。現役医学部生による1対1指導の特徴と予備校との組み合わせ方も紹介。",
  },
  {
    slug: "shobun",
    label: "小論文対策",
    title: "医学部小論文の書き方・完全対策ガイド",
    description:
      "頻出テーマ（生命倫理・医療制度・AI医療）と合格答案の書き方を解説。構成の型・NGパターン・対策スケジュールまで、小論文対策のすべてをまとめました。",
  },
];

export default function ColumnIndexPage() {
  return (
    <div className="min-h-screen bg-white">
      <div style={{ backgroundColor: "#0c1a33" }} className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p
            className="text-xs font-semibold tracking-widest uppercase mb-3"
            style={{ color: "#c9922a" }}
          >
            Column
          </p>
          <h1
            className="text-3xl md:text-4xl font-bold text-white mb-4"
            style={{ fontFamily: "'Noto Serif JP', serif" }}
          >
            医学部受験コラム
          </h1>
          <p className="text-base" style={{ color: "rgba(255,255,255,0.65)" }}>
            現役慶應医学部生が、受験に本当に役立つ情報を解説します
          </p>
        </div>
      </div>

      <div className="py-16 px-4" style={{ backgroundColor: "#f7f5f0" }}>
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {articles.map((article) => (
              <Link
                key={article.slug}
                href={`/column/${article.slug}`}
                className="block p-6 rounded-2xl bg-white hover:shadow-md transition-shadow"
                style={{ border: "1px solid #e5e1d8" }}
              >
                <span
                  className="inline-block text-xs font-semibold tracking-wide px-3 py-1 rounded-full mb-4"
                  style={{ backgroundColor: "#0c1a33", color: "#c9922a" }}
                >
                  {article.label}
                </span>
                <h2
                  className="text-base font-bold mb-3 leading-snug"
                  style={{ color: "#0c1a33", fontFamily: "'Noto Serif JP', serif" }}
                >
                  {article.title}
                </h2>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "#6b7280" }}
                >
                  {article.description}
                </p>
                <p
                  className="text-xs font-semibold mt-4"
                  style={{ color: "#c9922a" }}
                >
                  記事を読む →
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="py-16 px-4" style={{ backgroundColor: "#f7f5f0" }}>
        <div
          className="max-w-3xl mx-auto rounded-2xl p-8 text-center"
          style={{ backgroundColor: "#0c1a33" }}
        >
          <p
            className="text-sm font-semibold tracking-widest uppercase mb-3"
            style={{ color: "#c9922a" }}
          >
            Free Consultation
          </p>
          <h2
            className="text-xl font-bold text-white mb-3"
            style={{ fontFamily: "'Noto Serif JP', serif" }}
          >
            疑問点は無料相談でお気軽にどうぞ
          </h2>
          <p className="text-sm mb-6" style={{ color: "rgba(255,255,255,0.65)" }}>
            コラムの内容や受験戦略について、個別にご相談いただけます。
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
