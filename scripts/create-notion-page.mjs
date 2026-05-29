import { Client } from "@notionhq/client";
import fs from "fs";
import path from "path";

// ── 環境変数 ─────────────────────────────────────────────────────────────
const NOTION_API_KEY = process.env.NOTION_API_KEY;
const NOTION_PARENT_PAGE_ID = process.env.NOTION_PARENT_PAGE_ID || "32d791ed-0116-804f-8b02-fd60cf7bffcc"; // medvance parent page or dashboard

if (!NOTION_API_KEY) {
  console.error("❌ エラー: NOTION_API_KEY が環境変数に設定されていません。");
  console.error("実行方法: NOTION_API_KEY=secret_xxx [NOTION_PARENT_PAGE_ID=page_id] node scripts/create-notion-page.mjs");
  process.exit(1);
}

const notion = new Client({ auth: NOTION_API_KEY });

async function createNotionPage() {
  console.log("🚀 Notionに『Medvance 塾情報一元管理』ページを作成中...");

  try {
    const page = await notion.pages.create({
      parent: { type: "page_id", page_id: NOTION_PARENT_PAGE_ID },
      properties: {
        title: [
          {
            text: {
              content: "📈 Medvance 塾情報一元管理データベース"
            }
          }
        ]
      },
      icon: {
        type: "emoji",
        emoji: "📈"
      },
      children: [
        {
          object: "block",
          type: "heading_1",
          heading_1: {
            rich_text: [{ text: { content: "📈 Medvance 塾情報一元管理データベース" } }]
          }
        },
        {
          object: "block",
          type: "heading_2",
          heading_2: {
            rich_text: [{ text: { content: "📌 基本情報 (Basic Info)" } }]
          }
        },
        {
          object: "block",
          type: "bulleted_list_item",
          bulleted_list_item: {
            rich_text: [
              { text: { content: "塾名: ", bold: true } },
              { text: { content: "Medvance (メドヴァンス)" } }
            ]
          }
        },
        {
          object: "block",
          type: "bulleted_list_item",
          bulleted_list_item: {
            rich_text: [
              { text: { content: "指導形態: ", bold: true } },
              { text: { content: "完全個別指導（家庭教師型・訪問対面個別指導・全国オンライン個別指導）" } }
            ]
          }
        },
        {
          object: "block",
          type: "bulleted_list_item",
          bulleted_list_item: {
            rich_text: [
              { text: { content: "対象: ", bold: true } },
              { text: { content: "医学部受験生（現役生・既卒生・再受験生）、慶應義塾一貫校内部進学生、難関大受験生" } }
            ]
          }
        },
        {
          object: "block",
          type: "bulleted_list_item",
          bulleted_list_item: {
            rich_text: [
              { text: { content: "理念: ", bold: true } },
              { text: { content: "才能ではなく、合格者だからこそ確立できた再現性の高い戦略と学習管理で、医学部「全勝合格」を勝ち取る。" } }
            ]
          }
        },
        {
          object: "block",
          type: "heading_2",
          heading_2: {
            rich_text: [{ text: { content: "🏢 本部（銀座オフィス）情報" } }]
          }
        },
        {
          object: "block",
          type: "bulleted_list_item",
          bulleted_list_item: {
            rich_text: [
              { text: { content: "管理本部名: ", bold: true } },
              { text: { content: "Medvance 本部（銀座オフィス）" } }
            ]
          }
        },
        {
          object: "block",
          type: "bulleted_list_item",
          bulleted_list_item: {
            rich_text: [
              { text: { content: "所在地: ", bold: true } },
              { text: { content: "〒104-0061 東京都中央区銀座1丁目12番4号" } }
            ]
          }
        },
        {
          object: "block",
          type: "callout",
          callout: {
            rich_text: [
              { text: { content: "⚠️ 表記のルール:\n", bold: true, color: "red" } },
              { text: { content: "1. 一般公開ページ表示 (Home, About, フッター等): ビル名・階数を省略し「〒104-0061 東京都中央区銀座1丁目12番4号」とする。\n" } },
              { text: { content: "2. 特商法・法的な公式ページのみ: ビル名・階数を含み「〒104-0061 東京都中央区銀座1丁目12番4号 N&E BLD.6F」とする。" } }
            ],
            icon: { type: "emoji", emoji: "📢" },
            color: "yellow_background"
          }
        },
        {
          object: "block",
          type: "heading_2",
          heading_2: {
            rich_text: [{ text: { content: "💰 料金プラン体系 (Pricing Plans)" } }]
          }
        },
        {
          object: "block",
          type: "bulleted_list_item",
          bulleted_list_item: {
            rich_text: [
              { text: { content: "入塾金: ", bold: true } },
              { text: { content: "20,000円（初回のみ）" } }
            ]
          }
        },
        {
          object: "block",
          type: "bulleted_list_item",
          bulleted_list_item: {
            rich_text: [
              { text: { content: "授業料: ", bold: true } },
              { text: { content: "1コマ45分 7,500円（1回90分授業の実質単価は15,000円）" } }
            ]
          }
        },
        {
          object: "block",
          type: "bulleted_list_item",
          bulleted_list_item: {
            rich_text: [
              { text: { content: "コーチング料: ", bold: true } },
              { text: { content: "20,000円 / 月（通常パッケージに自動付帯。コーチング単体の場合は50,000円/月）" } }
            ]
          }
        },
        {
          object: "block",
          type: "paragraph",
          paragraph: {
            rich_text: [{ text: { content: "📊 【通常月額プランパッケージ一覧】" } }]
          }
        },
        {
          object: "block",
          type: "bulleted_list_item",
          bulleted_list_item: {
            rich_text: [
              { text: { content: "週1回プラン: ", bold: true } },
              { text: { content: "月額 80,000円 (90分×月4回授業＋コーチング込)" } }
            ]
          }
        },
        {
          object: "block",
          type: "bulleted_list_item",
          bulleted_list_item: {
            rich_text: [
              { text: { content: "週2回プラン: ", bold: true } },
              { text: { content: "月額 140,000円 (90分×月8回授業＋コーチング込)" } }
            ]
          }
        },
        {
          object: "block",
          type: "bulleted_list_item",
          bulleted_list_item: {
            rich_text: [
              { text: { content: "週3回プラン: ", bold: true } },
              { text: { content: "月額 200,000円 (90分×月12回授業＋コーチング込) ※入塾3ヶ月間は割引で 180,000円/月" } }
            ]
          }
        },
        {
          object: "block",
          type: "bulleted_list_item",
          bulleted_list_item: {
            rich_text: [
              { text: { content: "週4回プラン: ", bold: true } },
              { text: { content: "月額 260,000円 (90分×月16回授業＋コーチング込) ※入塾3ヶ月間は割引で 240,000円/月" } }
            ]
          }
        },
        {
          object: "block",
          type: "heading_2",
          heading_2: {
            rich_text: [{ text: { content: "🎓 講師・指導品質基準 (Quality)" } }]
          }
        },
        {
          object: "block",
          type: "bulleted_list_item",
          bulleted_list_item: {
            rich_text: [
              { text: { content: "講師要件: ", bold: true } },
              { text: { content: "全員が慶應義塾大学医学部生をはじめとする現役医学部生。学力、指導適性、人物面を厳格面接。" } }
            ]
          }
        },
        {
          object: "block",
          type: "bulleted_list_item",
          bulleted_list_item: {
            rich_text: [
              { text: { content: "コラム執筆・監修: ", bold: true } },
              { text: { content: "すべてのコラムや対策情報は、現役医学部生自身が執筆・監修。" } }
            ]
          }
        },
        {
          object: "block",
          type: "heading_2",
          heading_2: {
            rich_text: [{ text: { content: "🛠️ サポート体制・機能 (Support)" } }]
          }
        },
        {
          object: "block",
          type: "bulleted_list_item",
          bulleted_list_item: {
            rich_text: [
              { text: { content: "個別ロードマップ作成: ", bold: true } },
              { text: { content: "志望校合格に向け、1日単位の全学習タスク計画を作成し進捗管理。" } }
            ]
          }
        },
        {
          object: "block",
          type: "bulleted_list_item",
          bulleted_list_item: {
            rich_text: [
              { text: { content: "LINE質問箱: ", bold: true } },
              { text: { content: "LINEを通じて質問可能。専任講師が順次回答（24時間いつでも送信可能）。" } }
            ]
          }
        }
      ]
    });

    console.log("✅ Notionページの作成に成功しました！");
    console.log(`🔗 ページURL: ${page.url}`);
  } catch (error) {
    console.error("❌ Notionページの作成に失敗しました:", error.message);
  }
}

createNotionPage();
