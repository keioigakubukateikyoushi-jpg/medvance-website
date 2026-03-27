/**
 * Notion データベース初期セットアップ
 * 初回1回だけ実行してください。
 *
 * 実行:
 *   NOTION_API_KEY=xxx NOTION_PARENT_PAGE_ID=xxx node scripts/setup-notion-db.mjs
 *
 * 成功すると DATABASE_ID が表示されます。
 * → .env.local と GitHub Secrets に NOTION_DATABASE_ID として設定してください。
 */

import { Client } from "@notionhq/client";

const notion = new Client({ auth: process.env.NOTION_API_KEY });
const PARENT_PAGE_ID = process.env.NOTION_PARENT_PAGE_ID || "32d791ed-0116-804f-8b02-fd60cf7bffcc";

async function createDatabase() {
  console.log("📋 Notionデータベースを作成中...");

  const db = await notion.databases.create({
    parent: { type: "page_id", page_id: PARENT_PAGE_ID },
    title: [{ type: "text", text: { content: "📈 日次アクセスログ" } }],
    icon: { type: "emoji", emoji: "📈" },
    properties: {
      // タイトル列（Notionの必須）
      "日付": { title: {} },
      "PV（ページビュー）": { number: { format: "number" } },
      "UU（ユニークユーザー）": { number: { format: "number" } },
      "セッション数": { number: { format: "number" } },
      "直帰率(%)": { number: { format: "number" } },
      "平均セッション時間(秒)": { number: { format: "number" } },
      "Organic流入": { number: { format: "number" } },
      "Direct流入": { number: { format: "number" } },
      "Social流入": { number: { format: "number" } },
      "コンタクトページPV": { number: { format: "number" } },
      "前日比PV(%)": { number: { format: "number" } },
      "前日比UU(%)": { number: { format: "number" } },
      "TOP5ページ": { rich_text: {} },
      "メモ": { rich_text: {} },
    },
  });

  console.log("✅ データベース作成完了！");
  console.log("");
  console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
  console.log(`  NOTION_DATABASE_ID = ${db.id}`);
  console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
  console.log("");
  console.log("次のステップ:");
  console.log("1. 上記の NOTION_DATABASE_ID を .env.local に追記");
  console.log("2. GitHubリポジトリの Settings > Secrets に NOTION_DATABASE_ID を追加");
}

createDatabase().catch((err) => {
  console.error("❌ エラー:", err.message);
  process.exit(1);
});
