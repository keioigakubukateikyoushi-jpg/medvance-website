export type ColumnCategory =
  | "勉強法"
  | "受験戦略"
  | "大学選び"
  | "入試対策"
  | "再受験"
  | "塾・指導"
  | "受験情報";

export type ColumnArticle = {
  slug: string;
  category: ColumnCategory;
  title: string;
  description: string;
  keywords: string[];
  popular: boolean;
  featuredOnHome?: boolean;
};

export const columnArticles: ColumnArticle[] = [
  {
    slug: "study-method",
    category: "勉強法",
    title: "医学部合格のための正しい勉強法",
    description: "科目別の具体的な学習アプローチとよくある失敗パターンを解説。量より質を重視した学習設計で成績を伸ばす方法。",
    keywords: ["勉強法", "学習法", "医学部 勉強法"],
    popular: true,
  },
  {
    slug: "roadmap",
    category: "受験戦略",
    title: "医学部受験ロードマップ",
    description: "現役合格から再受験まで、時期別にやるべきことを整理。いつ・何を・どの順番で進めるかを明確にするためのガイド。",
    keywords: ["ロードマップ", "年間計画", "受験戦略"],
    popular: true,
  },
  {
    slug: "difference",
    category: "受験戦略",
    title: "医学部に受かる人・落ちる人の違い",
    description: "合格者と不合格者を分けるのは才能ではなく戦略の差。現場で見えた「差がつくポイント」を具体的に解説。",
    keywords: ["受かる人", "落ちる人", "医学部 戦略"],
    popular: true,
  },
  {
    slug: "juken-timing",
    category: "受験戦略",
    title: "医学部受験はいつから始めるべきか",
    description: "高1・高2・高3・浪人・再受験それぞれの最適なスタート時期と準備内容を解説。「何年生から始めれば間に合う？」という疑問に完全回答。",
    keywords: ["いつから", "開始時期", "高1", "高2", "高3", "浪人"],
    popular: false,
    featuredOnHome: true,
  },
  {
    slug: "mensetu-timing",
    category: "受験戦略",
    title: "医学部面接対策はいつから始めるべきか",
    description: "高1・高2・高3・浪人・再受験それぞれの始め方、自己分析・医療知識・模擬面接の進め方、大学ごとの面接形式の違いまで解説。",
    keywords: ["面接対策", "面接 いつから", "MMI", "模擬面接", "医師志望理由"],
    popular: false,
    featuredOnHome: true,
  },
  {
    slug: "kakomon-timing",
    category: "受験戦略",
    title: "医学部受験の過去問はいつから始めるべきか",
    description: "高1・高2・高3・浪人それぞれの着手時期、何年分やるか、復習の回し方まで整理。過去問を点数確認で終わらせないための実践ガイド。",
    keywords: ["過去問", "赤本", "何年分", "復習", "着手時期"],
    popular: false,
    featuredOnHome: true,
  },
  {
    slug: "hensachi",
    category: "受験情報",
    title: "医学部合格に必要な偏差値は？現実的な目標設定",
    description: "国公立・私立医学部の偏差値目安を大学別に整理。偏差値だけで判断しない受験戦略と現実的な目標設定の考え方を解説。",
    keywords: ["偏差値", "目標設定", "医学部 偏差値"],
    popular: false,
  },
  {
    slug: "shigaku-vs-kokuritsu",
    category: "大学選び",
    title: "私立医学部と国公立医学部、どちらを目指すべきか",
    description: "学費・難易度・環境の違いを徹底比較。自分のタイプ別に「どちらを選ぶべきか」のアドバイスをまとめました。",
    keywords: ["私立", "国公立", "比較", "大学選び"],
    popular: false,
  },
  {
    slug: "gakuhi",
    category: "大学選び",
    title: "医学部の学費・費用を徹底比較",
    description: "国公立と私立の学費差から奨学金・特待生制度まで網羅。6年間でいくらかかるかを大学別に整理しています。",
    keywords: ["学費", "費用", "私立医学部", "国公立"],
    popular: false,
    featuredOnHome: true,
  },
  {
    slug: "private-top5",
    category: "大学選び",
    title: "慶應・慈恵・順天堂など私立医学部トップ5の特徴と対策",
    description: "慶應義塾・東京慈恵会・順天堂・日本医科・昭和大学の入試傾向・特色・合格戦略を現役慶應医学部生が徹底解説。",
    keywords: ["私立医学部", "トップ校", "慶應", "慈恵", "順天堂"],
    popular: false,
  },
  {
    slug: "keio-guide",
    category: "大学選び",
    title: "慶應義塾大学医学部の入試完全ガイド",
    description: "慶應医学部の科目別入試傾向・倍率・面接の実態・合格戦略を現役在籍生が解説。慶應受験を目指す方必見の完全ガイド。",
    keywords: ["慶應", "慶應医学部", "入試ガイド"],
    popular: false,
  },
  {
    slug: "mensetu",
    category: "入試対策",
    title: "医学部面接対策の完全ガイド",
    description: "よく聞かれる質問と回答例、MMI対策、面接で落とされるパターンまで。配点の高い面接で差をつける準備法。",
    keywords: ["面接", "MMI", "面接対策"],
    popular: true,
  },
  {
    slug: "shobun",
    category: "入試対策",
    title: "医学部小論文の書き方・完全対策ガイド",
    description: "頻出テーマと合格答案の書き方を解説。構成の型・NGパターン・対策スケジュールまで網羅。",
    keywords: ["小論文", "書類", "志望理由書"],
    popular: false,
  },
  {
    slug: "saijuken",
    category: "再受験",
    title: "社会人・大学生からの医学部再受験ガイド",
    description: "医学部再受験のリアルな現状・合格者の共通点・勉強計画の設計まで。社会人経験を面接の強みに変える方法も解説。",
    keywords: ["再受験", "社会人", "大学生"],
    popular: false,
  },
  {
    slug: "juku-erabi",
    category: "塾・指導",
    title: "医学部受験の塾・予備校の選び方",
    description: "大手予備校・個別指導・医学部専門塾・家庭教師の特徴を徹底比較。失敗しない塾選びの判断基準を解説。",
    keywords: ["塾選び", "予備校選び", "医学部専門塾"],
    popular: false,
    featuredOnHome: true,
  },
  {
    slug: "support-juku-choice",
    category: "塾・指導",
    title: "医学部受験の塾はサポート体制で選ぶべき理由",
    description: "医学部専門予備校の高額な学費、大手予備校の一律カリキュラム、オーダーメイド指導の強みを比較。伴走型サポートの重要性を解説します。",
    keywords: ["サポート体制", "塾選び", "伴走"],
    popular: false,
  },
  {
    slug: "medical-yobiko-cost",
    category: "塾・指導",
    title: "医学部専門予備校は高いだけ？費用とサポートを見極めるポイント",
    description: "費用の高さではなく、学習管理と個別サポートの質で塾を見極める視点を整理します。",
    keywords: ["医学部専門予備校", "費用", "サポート"],
    popular: false,
  },
  {
    slug: "ordermade-curriculum",
    category: "塾・指導",
    title: "医学部受験でオーダーメイドカリキュラムが重要な理由",
    description: "全員同じカリキュラムでは伸びにくい受験生もいます。志望校、現在地、苦手、残り期間に応じて学習設計を変える重要性を解説します。",
    keywords: ["オーダーメイド", "カリキュラム", "個別指導"],
    popular: true,
    featuredOnHome: true,
  },
  {
    slug: "kateikyoushi",
    category: "塾・指導",
    title: "医学部受験に家庭教師は効果的か？選び方と活用法",
    description: "医学部受験における家庭教師のメリット・選び方・費用相場を解説。現役医学部生による1対1指導の特徴も紹介。",
    keywords: ["家庭教師", "個別指導", "活用法"],
    popular: false,
  },
];

export const columnCategories = [
  "すべて",
  "大学別対策",
  "受験戦略",
  "勉強法",
  "大学選び",
  "入試対策",
  "再受験",
  "塾・指導",
  "受験情報",
] as const;

export const columnArticlesWithHref = columnArticles.map((article) => ({
  ...article,
  href: `/column/${article.slug}`,
}));

export const homeFeaturedColumnArticles = columnArticlesWithHref.filter((article) => article.featuredOnHome);

const columnArticleMap = new Map(columnArticlesWithHref.map((article) => [article.slug, article]));

export const columnTopicClusters = [
  {
    title: "いつから始めるかで迷う人へ",
    description: "受験全体、面接、過去問の着手時期をまとめて追える入口です。",
    searchKeyword: "いつから",
    articleSlugs: ["juken-timing", "mensetu-timing", "kakomon-timing"],
  },
  {
    title: "学費と大学選びを比較したい人へ",
    description: "費用感、私立と国公立の違い、上位校の特色まで比較できます。",
    searchKeyword: "学費",
    articleSlugs: ["gakuhi", "shigaku-vs-kokuritsu", "private-top5"],
  },
  {
    title: "塾選びで失敗したくない人へ",
    description: "塾の比較軸、サポート体制、オーダーメイド指導の価値を整理できます。",
    searchKeyword: "塾選び",
    articleSlugs: ["juku-erabi", "support-juku-choice", "ordermade-curriculum"],
  },
] as const;

export const resolvedColumnTopicClusters = columnTopicClusters.map((cluster) => ({
  ...cluster,
  articles: cluster.articleSlugs
    .map((slug) => columnArticleMap.get(slug))
    .filter((article): article is (typeof columnArticlesWithHref)[number] => Boolean(article)),
}));
