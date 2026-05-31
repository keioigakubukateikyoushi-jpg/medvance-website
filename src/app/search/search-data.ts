import { columnArticles } from "@/lib/columnArticles";
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
    description: "国公立・私立医学部合格に向けた志望校戦略・学習管理・個別指導・保護者共有を行うMedvanceのトップページです。",
    keywords: ["medvance", "医学部受験", "医学部専門塾", "国公立医学部", "私立医学部", "トップ"],
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
    href: "/private-medical-strategy",
    category: "私立医学部",
    title: "私立医学部受験戦略",
    description: "私立医学部に何としてでも合格したいご家庭向けに、受験校ポートフォリオ、出願戦略、週次自習管理、保護者共有をまとめたページです。",
    keywords: ["私立医学部", "受験校選定", "出願戦略", "医学部予備校", "保護者", "浪人生", "大手予備校併用"],
  },
  {
    href: "/contact",
    category: "基本情報",
    title: "医学部 合格戦略診断",
    description: "予備校利用状況・集団塾との相性・模試結果・志望校・学習時間・保護者の方針から、医学部合格の勝ち筋を診断するフォームです。",
    keywords: ["合格戦略診断", "問い合わせ", "医学部受験", "国公立医学部", "私立医学部", "予備校併用", "集団塾", "保護者相談"],
  },
];

const audiencePages: SearchItem[] = [
  {
    href: "/for/ronin",
    category: "対象別",
    title: "医学部浪人生向けサポート",
    description: "医学部浪人生向けに、前年度の失敗分析、私立医学部の受験校設計、週次学習管理をまとめたページです。",
    keywords: ["浪人", "浪人生", "医学部浪人", "宅浪", "再浪人"],
  },
  {
    href: "/for/prep-school-plus",
    category: "対象別",
    title: "大手予備校と併用したい医学部志望生向け",
    description: "大手予備校の授業を活かしながら、復習管理、質問対応、弱点補強、私立医学部の出願戦略、保護者共有を補うページです。",
    keywords: ["大手予備校", "予備校併用", "医学部予備校", "復習管理", "質問対応", "私立医学部"],
  },
  {
    href: "/for/not-group-school",
    category: "対象別",
    title: "集団塾が合わない医学部志望生向け",
    description: "集団塾や予備校が合わない医学部志望生に、1対1指導、週次学習管理、出願戦略、保護者共有を提案するページです。",
    keywords: ["集団塾が合わない", "個別指導", "1対1", "医学部受験", "私立医学部", "保護者"],
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
    description: "私立医学部合格に向けて、保護者が判断すべき受験校・学習管理・費用感をまとめています。",
    keywords: ["保護者", "親", "家庭", "私立医学部"],
  },
  {
    href: "/for/keio-naibu",
    category: "対象別",
    title: "慶應内部進学・医学部推薦対策",
    description: "慶應系列校から医学部への内部推薦推薦枠を勝ち取るための定期試験・評定対策と小論文・面接指導をまとめたページです。",
    keywords: ["慶應", "内部進学", "評定平均", "塾高", "女子高", "志木", "SFC"],
  },
  {
    href: "/for/keio-fuzoku",
    category: "対象別",
    title: "慶應附属校生向け成績向上サポート",
    description: "慶應附属各校の独自カリキュラムに沿った定期試験対策と評定向上指導をまとめたページです。",
    keywords: ["慶應附属校", "定期試験", "内申点", "義塾高校", "普通部", "中等部"],
  },
  {
    href: "/for/keio-naibu-heigan",
    category: "対象別",
    title: "慶應内部推薦＆外部一般受験ダブル対策",
    description: "系列校内の推薦枠確保と、万が一に備えた国公立・私立医学部一般受験のダブル対策を両立させるページです。",
    keywords: ["内部進学", "外部受験", "併願", "ダブル対策", "リスクヘッジ"],
  },
];

const servicePages: SearchItem[] = [
  {
    href: "/igakubu-kateikyoushi",
    category: "家庭教師",
    title: "医学部受験の家庭教師",
    description: "医学部受験の家庭教師を探しているご家庭向けに、現役慶應医学部生の完全1対1指導、週次学習管理、面接小論文、保護者共有をまとめたページです。",
    keywords: ["医学部 家庭教師", "医学部受験 家庭教師", "医学部専門 家庭教師", "オンライン家庭教師", "訪問指導", "慶應医学部生"],
  },
  {
    href: "/keio-medical-kateikyoushi",
    category: "家庭教師",
    title: "慶應医学部生による家庭教師型指導塾",
    description: "慶應医学部受験に向けて、現役慶應医学部生が英数理、面接、小論文、願書まで1対1で指導するページです。",
    keywords: ["慶應医学部 家庭教師", "慶應医学部生 家庭教師", "慶應医学部 対策", "医学部受験 家庭教師"],
  },
  {
    href: "/keio-medical-tutor",
    category: "家庭教師",
    title: "慶應医学部受験・内部推薦特化の家庭教師",
    description: "慶應医学部の一般受験と慶應系列校からの内部推薦対策を、家庭教師型の1対1指導で支えるページです。",
    keywords: ["慶應医学部 家庭教師", "慶應 内部推薦 家庭教師", "塾高 医学部 推薦", "慶應系列校 家庭教師"],
  },
  {
    href: "/tutors",
    category: "家庭教師",
    title: "Medvance 家庭教師一覧",
    description: "医学部受験向け家庭教師を、大学・科目・対応エリア・指導形式から探せる公開一覧です。",
    keywords: ["家庭教師", "講師一覧", "医学部受験", "オンライン", "対面", "料金", "講師検索"],
  },
  {
    href: "/recruit",
    category: "講師募集",
    title: "Medvance 講師募集",
    description: "医学部受験、内部進学、学校成績対策を支えるMedvance講師の募集ページです。",
    keywords: ["講師募集", "採用", "家庭教師募集", "医学部生", "講師応募", "オンライン指導"],
  },
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
  ...columnArticles.map((article) => ({
    href: `/column/${article.slug}`,
    category: "コラム",
    title: article.title,
    description: article.description,
    keywords: article.keywords,
  })),
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
    title: "私立医学部大学別対策一覧",
    description: "私立医学部ごとの入試形式や大学別対策記事をまとめた一覧ページです。",
    keywords: ["私立医学部", "大学別対策", "大学一覧"],
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
  "4月",
  "新高3",
  "年間計画",
  "慶應",
  "慈恵",
  "順天堂",
  "日医",
  "昭和",
  "面接",
  "過去問",
  "小論文",
  "数学",
  "英語",
  "学費",
  "予備校併用",
  "集団塾",
  "合格戦略診断",
  "再受験",
  "浪人",
  "オンライン",
  "家庭教師",
  "講師募集",
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
