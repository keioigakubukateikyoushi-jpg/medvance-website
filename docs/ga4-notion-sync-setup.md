# GA4 → Notion 日次同期 セットアップ手順

`.github/workflows/sync-analytics.yml` は毎日 JST 1:00 に GA4 / Search Console / PageSpeed のデータを Notion DB へ同期するワークフロー。GitHub Secrets が揃っていない間は skip 状態で動かない。本書はその Secrets を 1 回だけ登録して稼働させる手順。

## 詳細ディメンション（2026-07-20〜）

日次同期は次も取得して Notion に保存する（すべて**匿名集計**。個人特定はしない）。

| 項目 | 内容 |
|------|------|
| ページ | TOP20（PV/UU/滞在/直帰） |
| 地域 | 都道府県 TOP10、市区町村 TOP10 |
| クロス | ページ×地域、流入元×ランディング |
| イベント | `generate_lead`、`cta_click` |
| その他 | ブラウザ、時間帯、SC上位KW/ページ、チャネル内訳 |

サイト側（別デプロイ）:

- 初回ランディング / UTM / リファラを localStorage に保持し、問い合わせメールへ付与
- Floating CTA の `cta_click` を GA4 へ送信
- Microsoft Clarity は `NEXT_PUBLIC_CLARITY_ID` を Vercel に設定したときのみ有効

## 前提

- GitHub repo: `keioigakubukateikyoushi-jpg/medvance-website`
- Notion 同期先 DB は既存（`scripts/sync-analytics.mjs` 内の固定 ID 参照）
- `gh` CLI が手元で `gh auth status` 通る状態（`keioigakubukateikyoushi-jpg` アカウントで login 済み）

## 1. GCP サービスアカウントを作る

1. GCP コンソール → 任意のプロジェクト（無ければ `medvance-analytics` 等で新規）
2. IAM と管理 → サービスアカウント → 「サービスアカウントを作成」
   - 名前: `ga4-notion-sync`
   - ロール: 何も付けない（GA4 側で権限付与するため）
3. 作成後、対象 SA の「キー」タブ → 「鍵を追加」 → JSON でダウンロード
4. ダウンロードした JSON ファイルの **メールアドレス**（`client_email` 欄）をコピー

## 2. GA4 プロパティで権限を付与

1. [GA4](https://analytics.google.com/) → 対象プロパティ（medvance-edu.com）
2. 管理 → プロパティ → プロパティのアクセス管理
3. 右上 `+` → ユーザーを追加
   - メール: 1. でコピーした `client_email`
   - 役割: **閲覧者**
4. 同画面の URL から末尾の数字（プロパティ ID, 9 桁前後）をメモ

## 3. GitHub Secrets を登録

ローカルから 1 行コマンドで登録できる（`gh` が認証済みなら）。

```powershell
$repo = "keioigakubukateikyoushi-jpg/medvance-website"

# GA4 プロパティ ID（数字のみ。例: 529372555）
gh secret set GA4_PROPERTY_ID --repo $repo --body "529372555"

# サービスアカウント JSON（ファイルから直接読ませる）
gh secret set GA4_SERVICE_ACCOUNT --repo $repo < "C:\path\to\ga4-notion-sync-xxxx.json"

# Search Console
gh secret set SC_SITE_URL --repo $repo --body "https://medvance-edu.com/"

# Notion
gh secret set NOTION_API_KEY --repo $repo --body "secret_xxx..."
gh secret set NOTION_DATABASE_ID --repo $repo --body "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"

# 任意（PageSpeed の API quota 上げたいとき）
gh secret set PAGESPEED_API_KEY --repo $repo --body "AIza..."
```

> NOTE: `GA4_SERVICE_ACCOUNT` は JSON 全文を 1 行で渡す必要がある。`gh secret set ... < file` で stdin から流し込めば改行は自動処理される。

> NOTE: Search Console を SA で読みたい場合は、[Search Console](https://search.google.com/search-console/users) → 設定 → ユーザーと権限 で SA メールに「制限付き」以上の権限を別途付与する。権限が無くても workflow 自体は動く（`check-sc-health.mjs` が `continue-on-error`）。

## 4. 動作確認

```powershell
# 手動で 1 回実行（昨日分）
gh workflow run sync-analytics.yml --repo keioigakubukateikyoushi-jpg/medvance-website

# ログを見る
gh run list --workflow sync-analytics.yml --repo keioigakubukateikyoushi-jpg/medvance-website --limit 1
gh run view --log --repo keioigakubukateikyoushi-jpg/medvance-website
```

成功すると Notion 側の日次アクセスログ DB に当該日の行が 1 件追加される。

### レポートは「ページの子ページ」ではなく DB（リンク集）

以前は親ページ配下に `📊 MM/DD デイリーレポート` を子ページとして積み上げていた。  
現在は次の **データベース形式** にする:

| DB | 置き場所 | 1行の意味 |
|----|----------|-----------|
| **📊 デイリーレポート** | `NOTION_DAILY_PAGE_ID` ページ内（自動作成可） | その日の詳細レポート（本文付き） |
| **📈 週次レポート** | `NOTION_WEEKLY_PAGE_ID` ページ内（自動作成可） | その週の週次レポート |
| **日次アクセスログ** | `NOTION_DATABASE_ID` | 数値原本 + レポートへの URL |

同期のたびに:

1. **デイリーレポートDB** に行を追加（表形式のリンク集）
2. **日次アクセスログ** の「デイリーレポート」URL 列にその行の URL を保存
3. レポート行の「アクセスログ」URL 列に逆リンク
4. 日曜は **週次レポートDB** にも同様

親ページを開くと「子ページ一覧」ではなく **データベース表** が見える。  
任意で GitHub Secrets に固定 ID を置ける:

- `NOTION_DAILY_REPORTS_DB_ID`
- `NOTION_WEEKLY_REPORTS_DB_ID`

### 過去の子ページをDBへ移行（本文そのまま）

以前親ページの下に溜まったレポート子ページは、次で **DB行へ移動**できる（本文ブロックは変更しない）。

```bash
# dry-run
gh workflow run migrate-reports-to-db.yml -f dry_run=true --repo keioigakubukateikyoushi-jpg/medvance-website

# 本番移行
gh workflow run migrate-reports-to-db.yml -f dry_run=false --repo keioigakubukateikyoushi-jpg/medvance-website
```

スクリプト: `scripts/migrate-reports-to-db.mjs`

### ぱっと見（KPI + グラフ）

- **デイリーレポート**の本文は先頭が「今日のKPI」ボード（PV/UU/Contact/Organic/SC + 7日スパークライン）
- DBの行タイトルも `📊 MM/DD  PV6 UU6 -83.8%` 形式で一覧から数値が見える
- 親ページ直下に **`📈 アクセス推移（ぱっと見）`** を毎日更新（直近30日の棒グラフ: PV/UU/Organic/Contact/SC）

## トラブルシュート

- `Skipping GA4→Notion sync because required secrets are missing: ...` の warning が残る
  - 上記 4 つの必須 Secret（`GA4_PROPERTY_ID`/`GA4_SERVICE_ACCOUNT`/`NOTION_API_KEY`/`NOTION_DATABASE_ID`）が登録できているか `gh secret list --repo ...` で確認
- `403 Permission denied` (GA4 側)
  - SA メールの GA4 プロパティへの「閲覧者」権限が抜けている
- `unauthorized_client` (Notion 側)
  - Notion Integration が対象 DB に共有されていない（DB の右上「・・・」→ コネクトを追加）
