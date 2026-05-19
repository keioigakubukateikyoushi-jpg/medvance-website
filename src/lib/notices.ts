export type NoticeCategory = "お知らせ" | "サービス情報" | "キャンペーン" | "重要";

export type Notice = {
  slug: string;
  category: NoticeCategory;
  title: string;
  date: string; // YYYY-MM-DD
  body: string; // 短い本文。\n で改行。
  important?: boolean;
};

export const notices: Notice[] = [
  {
    slug: "ai-moshi-tool-launch",
    category: "サービス情報",
    title: "模試分析ツールを公開しました（無料・登録不要）",
    date: "2026-04-03",
    body: "偏差値を入力すると、科目別の現在地、弱点、参考書、学習タイムラインを整理できる「模試分析ツール」を公開しました。\n\n駿台・河合塾・進研・東進など主要模試の難易度補正に対応。無料・登録不要でご利用いただけます。",
    important: true,
  },
  {
    slug: "spring-2026-enrollment",
    category: "お知らせ",
    title: "2026年度春期生の受け付けを開始しました",
    date: "2026-04-01",
    body: "2026年度の新規生徒の受け付けを開始しました。高校1年生・2年生・3年生・浪人生を問わず受け付けております。\n\nまずは無料相談からお気軽にご連絡ください。定員に達し次第、受け付けを終了させていただく場合があります。",
  },
  {
    slug: "free-consultation-campaign",
    category: "キャンペーン",
    title: "無料相談の特典：医学部受験戦略マニュアルをプレゼント",
    date: "2026-03-15",
    body: "現在、無料相談にお申し込みいただいた方全員に「医学部受験戦略マニュアル（現役慶應医学部生監修・6章構成）」をPDFでプレゼントしています。\n\n志望校の選び方・学年別の学習戦略・面接対策の始め方まで網羅した内容です。ぜひご活用ください。",
  },
];
