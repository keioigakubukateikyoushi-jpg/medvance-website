import { nationalUniversityArticles } from "../universities/national/data";

export type SearchItem = {
  href: string;
  category: string;
  title: string;
  description: string;
  keywords?: string[];
};

const corePages: SearchItem[] = [
  {
    href: "/",
    category: "トップ",
    title: "Medvance トップページ",
    description: "医学部受験専門塾 Medvance のトップページ。サービス概要、強み、合格実績、無料相談への導線を掲載しています。",
    keywords: ["medvance", "医学部受験", "医学部専門塾", "トップ"],
  },
  {
    href: "/about",
    category: "基本情報",
    title: "Medvance について",
    description: "Medvance の特徴、指導方針、現役医学部生による伴走型サポートについて紹介しています。",
    keywords: ["about", "特徴", "強み", "伴走型", "現役医学部生"],
  },
  {
    href: "/pricing",
    category: "基本情報",
    title: "料金について",
    description: "Medvance の料金体系やプラン内容、受講方法について確認できます。",
    keywords: ["料金", "費用", "学費", "価格", "プラン"],
  },
  {
    href: "/contact",
    category: "基本情報",
    title: "お問い合わせ",
    description: "無料相談やお問い合わせフォームのページです。受験相談や指導相談はこちらから受け付けています。",
    keywords: ["無料相談", "問い合わせ", "相談", "面談"],
  },
];

const audiencePages: SearchItem[] = [
  {
    href: "/for/ronin",
    category: "対象別",
    title: "浪人生向けサポート",
    description: "浪人生向けの学習計画、生活管理、医学部受験での伸ばし方をまとめたページです。",
    keywords: ["浪人", "浪人生", "宅浪"],
  },
  {
    href: "/for/saijuken",
    category: "対象別",
    title: "再受験生向けサポート",
    description: "再受験生向けの時間管理、勉強法、戦略設計について紹介しています。",
    keywords: ["再受験", "社会人", "再受験生"],
  },
  {
    href: "/for/parents",
    category: "対象別",
    title: "保護者向け情報",
    description: "保護者向けに医学部受験の全体像や塾の選び方、サポートの考え方をまとめています。",
    keywords: ["保護者", "親", "家庭"],
  },
];

const servicePages: SearchItem[] = [
  {
    href: "/services/online",
    category: "サービス",
    title: "オンライン指導",
    description: "全国対応のオンライン医学部受験指導。伴走管理や個別サポートについて掲載しています。",
    keywords: ["オンライン", "全国対応", "1対1"],
  },
  {
    href: "/services/visit",
    category: "サービス",
    title: "対面指導",
    description: "対面での医学部受験指導について紹介しています。",
    keywords: ["対面", "訪問", "通塾"],
  },
  {
    href: "/services/interview",
    category: "サービス",
    title: "面接・小論文対策",
    description: "医学部面接や小論文の対策サービス、出願書類のサポート内容を掲載しています。",
    keywords: ["面接", "小論文", "志望理由書", "出願書類"],
  },
];

const subjectPages: SearchItem[] = [
  {
    href: "/subjects",
    category: "教科別",
    title: "教科別対策一覧",
    description: "英語、数学、物理、化学、生物の医学部受験対策をまとめた一覧ページです。",
    keywords: ["教科", "科目", "英語", "数学", "物理", "化学", "生物"],
  },
  {
    href: "/subjects/english",
    category: "教科別",
    title: "英語対策",
    description: "医学部受験に必要な英語の勉強法、読解、英作文、長文対策をまとめています。",
    keywords: ["英語", "長文", "英作文"],
  },
  {
    href: "/subjects/math",
    category: "教科別",
    title: "数学対策",
    description: "医学部数学の勉強法、典型問題、記述対策、時間配分をまとめています。",
    keywords: ["数学", "数III", "記述", "計算"],
  },
  {
    href: "/subjects/physics",
    category: "教科別",
    title: "物理対策",
    description: "医学部物理の勉強法、典型問題、力学や電磁気の対策を掲載しています。",
    keywords: ["物理", "力学", "電磁気"],
  },
  {
    href: "/subjects/chemistry",
    category: "教科別",
    title: "化学対策",
    description: "医学部化学の勉強法、理論・有機・無機の対策をまとめています。",
    keywords: ["化学", "理論化学", "有機化学", "無機化学"],
  },
  {
    href: "/subjects/biology",
    category: "教科別",
    title: "生物対策",
    description: "医学部生物の勉強法、論述、知識整理、頻出テーマの対策を掲載しています。",
    keywords: ["生物", "論述", "遺伝", "代謝"],
  },
];

const columnPages: SearchItem[] = [
  {
    href: "/column",
    category: "コラム",
    title: "コラム一覧",
    description: "医学部受験の勉強法、塾選び、面接、小論文、再受験などのコラム一覧です。",
    keywords: ["コラム", "記事一覧"],
  },
  {
    href: "/column/study-method",
    category: "コラム",
    title: "医学部受験勉強のための正しい勉強法",
    description: "医学部受験で伸びる勉強法や失敗しやすい学習パターンを解説します。",
    keywords: ["勉強法", "学習法"],
  },
  {
    href: "/column/roadmap",
    category: "コラム",
    title: "医学部受験ロードマップ",
    description: "時期ごとにやるべきことを整理した医学部受験のロードマップです。",
    keywords: ["ロードマップ", "年間計画"],
  },
  {
    href: "/column/difference",
    category: "コラム",
    title: "医学部受験に受かる人・落ちる人の違い",
    description: "受かる人と落ちる人の行動や学習姿勢の違いを整理しています。",
    keywords: ["受かる人", "落ちる人"],
  },
  {
    href: "/column/juken-timing",
    category: "コラム",
    title: "医学部受験勉強はいつから始めるべきか",
    description: "現役、高2、高1、浪人生などの時期別に勉強開始の目安を解説します。",
    keywords: ["いつから", "開始時期"],
  },
  {
    href: "/column/kakomon-timing",
    category: "コラム",
    title: "医学部受験の過去問はいつから始めるべきか",
    description: "過去問に触れる時期、本格演習の始め方、何年分やるか、復習法を解説します。",
    keywords: ["過去問", "赤本", "何年分", "復習", "着手時期"],
  },
  {
    href: "/column/hensachi",
    category: "コラム",
    title: "医学部受験に必要な偏差値と現実的な目標設定",
    description: "偏差値の見方や志望校別の目標設定について解説します。",
    keywords: ["偏差値", "目標設定"],
  },
  {
    href: "/column/shigaku-vs-kokuritsu",
    category: "コラム",
    title: "私立医学部と国公立医学部、どちらを選ぶべきか",
    description: "学費、受験科目、難易度の違いを比較して解説します。",
    keywords: ["私立", "国公立", "比較"],
  },
  {
    href: "/column/gakuhi",
    category: "コラム",
    title: "医学部の学費・費用を比較",
    description: "私立医学部と国公立医学部の学費や費用感を比較しています。",
    keywords: ["学費", "費用", "私立医学部"],
  },
  {
    href: "/column/private-top5",
    category: "コラム",
    title: "私立医学部トップ校の特徴と対策",
    description: "慶應、慈恵、順天堂など難関私立医学部の特徴をまとめています。",
    keywords: ["私立医学部", "トップ校", "慶應", "慈恵", "順天堂"],
  },
  {
    href: "/column/keio-guide",
    category: "コラム",
    title: "慶應義塾大学医学部の受験ガイド",
    description: "慶應医学部の入試概要や対策の考え方を解説します。",
    keywords: ["慶應", "慶應医学部"],
  },
  {
    href: "/column/mensetu",
    category: "コラム",
    title: "医学部面接対策ガイド",
    description: "医学部面接で問われることや準備の進め方を解説しています。",
    keywords: ["面接", "MMI"],
  },
  {
    href: "/column/shobun",
    category: "コラム",
    title: "医学部小論文・書類対策ガイド",
    description: "小論文や志望理由書などの書類対策を整理しています。",
    keywords: ["小論文", "書類", "志望理由書"],
  },
  {
    href: "/column/saijuken",
    category: "コラム",
    title: "再受験から医学部合格を目指すガイド",
    description: "社会人や再受験生が医学部合格を目指すための考え方をまとめています。",
    keywords: ["再受験", "社会人"],
  },
  {
    href: "/column/juku-erabi",
    category: "コラム",
    title: "医学部受験の塾・予備校の選び方",
    description: "塾や予備校を選ぶときの判断軸を整理した記事です。",
    keywords: ["塾選び", "予備校選び"],
  },
  {
    href: "/column/support-juku-choice",
    category: "コラム",
    title: "医学部受験の塾はサポート体制で選ぶべき理由",
    description: "高額な医学部専門予備校や大手予備校と比べながら、伴走型サポートの重要性を解説します。",
    keywords: ["サポート体制", "塾選び", "伴走"],
  },
  {
    href: "/column/medical-yobiko-cost",
    category: "コラム",
    title: "医学部専門予備校は高いだけ？費用とサポートを見極めるポイント",
    description: "費用の高さだけでなく、学習管理と個別サポートの質で塾を見極める視点を整理しています。",
    keywords: ["医学部専門予備校", "費用", "サポート"],
  },
  {
    href: "/column/ordermade-curriculum",
    category: "コラム",
    title: "医学部受験でオーダーメイドカリキュラムが重要な理由",
    description: "一律カリキュラムではなく、志望校と現在地に合った学習設計の重要性を解説します。",
    keywords: ["オーダーメイド", "カリキュラム", "個別指導"],
  },
  {
    href: "/column/kateikyoushi",
    category: "コラム",
    title: "医学部受験に家庭教師は効果的か？選び方と活用法",
    description: "家庭教師のメリットや使い方、相性の良い受験生について解説しています。",
    keywords: ["家庭教師", "個別指導"],
  },
];

const universityAliases: Record<string, string[]> = {
  "keio":         ["慶応", "慶応義塾", "けいお", "慶応医学部", "慶應医"],
  "jikei":        ["慈恵", "じけい", "慈恵医大", "東京慈恵", "東慈"],
  "juntendo":     ["順天堂", "順天", "じゅんてんどう"],
  "nippon-medical": ["日医", "にちい", "日本医大", "日医大"],
  "showa":        ["昭和", "しょうわ", "昭和医大"],
  "tokyo-ika":    ["東京医大", "東医", "とうきょういか"],
  "nihon":        ["日大", "にちだい", "日大医"],
  "toho":         ["東邦", "とうほう", "東邦医大"],
  "kyorin":       ["杏林", "きょうりん", "杏林医大"],
  "teikyo":       ["帝京", "ていきょう", "帝京医大"],
  "tokai":        ["東海", "とうかい", "東海医大"],
  "kitasato":     ["北里", "きたさと", "北里医大"],
  "marianna":     ["聖マリ", "マリアンナ", "せいまりあんな"],
  "joshi-ika":    ["女子医大", "東京女子医大", "女子医"],
  "iuhw":         ["国際医療福祉", "国医福", "IUHW"],
  "dokkyo":       ["獨協", "どっきょう", "獨協医大"],
  "saitama-ika":  ["埼玉医大", "さいたまいか"],
  "kansai-ika":   ["関西医大", "かんさいいか"],
  "kindai":       ["近大", "きんだい", "近大医"],
  "osaka-ika":    ["大阪医大", "阪医大", "おおさかいか"],
  "hyogo":        ["兵庫医大", "ひょうごいか"],
  "fujita":       ["藤田", "ふじた", "藤田医大"],
  "aichi-ika":    ["愛知医大", "あいちいか"],
  "kanazawa-ika": ["金沢医大", "かなざわいか"],
  "kurume":       ["久留米", "くるめ", "久留米医大"],
  "fukuoka":      ["福岡医大", "ふくおかいか"],
  "kawasaki-ika": ["川崎医大", "かわさきいか"],
  "iwate":        ["岩手医大", "いわていか"],
  "tohoku-ika":   ["東北医科薬科", "とうほくいか"],
};

const universityDefinitions = [
  ["keio", "慶應義塾大学医学部"],
  ["jikei", "東京慈恵会医科大学"],
  ["juntendo", "順天堂大学医学部"],
  ["nippon-medical", "日本医科大学"],
  ["showa", "昭和大学医学部"],
  ["tokyo-ika", "東京医科大学"],
  ["nihon", "日本大学医学部"],
  ["toho", "東邦大学医学部"],
  ["kyorin", "杏林大学医学部"],
  ["teikyo", "帝京大学医学部"],
  ["tokai", "東海大学医学部"],
  ["kitasato", "北里大学医学部"],
  ["marianna", "聖マリアンナ医科大学"],
  ["joshi-ika", "東京女子医科大学"],
  ["iuhw", "国際医療福祉大学医学部"],
  ["dokkyo", "獨協医科大学"],
  ["saitama-ika", "埼玉医科大学"],
  ["kansai-ika", "関西医科大学"],
  ["kindai", "近畿大学医学部"],
  ["osaka-ika", "大阪医科薬科大学医学部"],
  ["hyogo", "兵庫医科大学"],
  ["fujita", "藤田医科大学"],
  ["aichi-ika", "愛知医科大学"],
  ["kanazawa-ika", "金沢医科大学"],
  ["kurume", "久留米大学医学部"],
  ["fukuoka", "福岡大学医学部"],
  ["kawasaki-ika", "川崎医科大学"],
  ["iwate", "岩手医科大学"],
  ["tohoku-ika", "東北医科薬科大学"],
] as const;

const universityPages: SearchItem[] = [
  {
    href: "/universities/private",
    category: "大学別対策",
    title: "私立医学部一覧",
    description: "私立医学部ごとの入試形式や対策記事をまとめた一覧ページです。",
    keywords: ["私立医学部", "大学別対策"],
  },
  {
    href: "/universities/national",
    category: "大学別対策",
    title: "国公立医学部対策",
    description: "国公立医学部対策の考え方や学習の進め方をまとめています。",
    keywords: ["国公立医学部", "大学別対策"],
  },
  ...nationalUniversityArticles.map((entry) => ({
    href: `/universities/national/${entry.slug}`,
    category: "大学別対策",
    title: `${entry.name} の入試対策`,
    description: `${entry.name}の特徴、学習戦略、面接準備、合格までの進め方をまとめたページです。`,
    keywords: [entry.name, entry.area, entry.region, ...entry.keywords],
  })),
  ...universityDefinitions.map(([slug, name]) => ({
    href: `/universities/${slug}`,
    category: "大学別対策",
    title: `${name} の入試対策`,
    description: `${name} の入試形式、科目、対策方針、面接や小論文のポイントをまとめたページです。`,
    keywords: [
      name, slug, "医学部", "入試", "面接", "小論文", "数学", "英語",
      ...universityAliases[slug as keyof typeof universityAliases] ?? [],
    ],
  })),
];

export const siteSearchItems: SearchItem[] = [
  ...corePages,
  ...audiencePages,
  ...servicePages,
  ...subjectPages,
  ...columnPages,
  ...universityPages,
];

export const suggestedSearchKeywords = [
  "慶應",
  "慈恵",
  "順天堂",
  "日医",
  "昭和",
  "面接",
  "小論文",
  "数学",
  "英語",
  "学費",
  "再受験",
  "浪人",
  "オンライン",
  "塾選び",
  "偏差値",
  "ロードマップ",
];

export function searchSite(query: string) {
  const normalized = query.trim().toLowerCase();
  if (!normalized) return [];

  // スペース区切りで複数ワードのAND検索に対応
  const terms = normalized.split(/[\s　]+/).filter(Boolean);

  return siteSearchItems.filter((item) => {
    const text = [item.title, item.description, item.category, ...(item.keywords ?? [])]
      .join(" ")
      .toLowerCase();
    return terms.every((term) => text.includes(term));
  });
}
