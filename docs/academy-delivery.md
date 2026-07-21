# Medvance サイト配信

ブランチ: `feature/academy-library`  
本番デプロイはユーザー承認後。

## 公開方針

| 対象 | アクセス |
|---|---|
| 誰でも | `/academy` の無料ユニット（本文・クイズ・一部メディア） |
| 有料プラン契約者 | アクセスコード入力後、全ユニット見放題 |

### 有料プラン（見放題対象）

- 通常プラン（授業＋コーチング）
- 私立医学部特化プラン
- 医学部受験コーチングプラン（単体）

## URL

- ハブ: `/academy`
- ライブラリ: `/academy/library?track=foundation|advanced|elite`
- ユニット: `/academy/unit/[id]`
- 会員解除: `/academy/access`
- **PDFダウンロード**: `/api/academy/pdf/[id]?subject=...`  
  - 無料ユニット: 誰でも  
  - 会員ユニット: アクセスコード後  
  - 本文＋クイズをA4 PDF化（日本語フォント: システム Arial Unicode または `public/fonts/NotoSansJP-*.ttf`）

## 環境変数

`.env.academy.example` を参照。

```
ACADEMY_ACCESS_SECRET=...
ACADEMY_MEMBER_CODES=code1,code2
```

契約者へのコード配布は LINE / メールで事務局運用。

## コンテンツ更新

```bash
# AI_WORKSPACE の curriculum からテキスト同期（media 除く）
rsync -a --delete \
  --exclude 'media/' --exclude '_nlm/' \
  --exclude '*.m4a' --exclude '*.mp4' --exclude '*.pdf' \
  ~/repos/AI_WORKSPACE/projects/medvance_media_library_2026-07/curriculum/ \
  content/academy/
```

無料サンプルの音声・動画は `public/academy/media/` に手動配置。

## 注意

- サイトにフル認証基盤はない。当面は共有コード＋署名Cookie。
- コード流出時は `ACADEMY_MEMBER_CODES` と `ACADEMY_ACCESS_SECRET` をローテート。
- 特定年度の入試問題の無断転載は行わない。
