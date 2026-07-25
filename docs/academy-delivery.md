# Medvance サイト配信

作業ブランチで検証し、`master` へ直接 push しない。
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

## 大容量メディアの配信

音声・動画・スライドPDFは `.gitignore` / `.vercelignore` の対象で、ローカル生成物をそのままVercelへ送らない。

### 推奨（動画）: サイト内 mp4 を通常埋め込み

1. NLM で `video.mp4` / `audio.m4a` / `slides.pdf` を生成
2. **無料単元**は gitignore 例外で Vercel 静的配信 → `UnitVideoPlayer` が HTML5 埋め込み
3. 重くしない工夫（プレイヤー側）:
   - クリックするまで `src` を付けない（初期帯域ゼロ）
   - 画面付近まで UI のみ
   - 音声は `preload="none"`
4. **有料単元**の大容量バイナリは git / Vercel に載せない（現状）。本文はコードで見放題、動画はローカル確認 or 後日ストレージ
5. YouTube URL は任意フォールバック（`set-media-youtube.mjs` / `media-youtube.json`）

### 外部ストレージ（任意）

外部ストレージへ配置した後、各ユニットの `public/academy/media/<unit-id>/manifest.json` に公開URLを指定する。

```json
{
  "public_urls": {
    "slides_pdf": "https://media.example.com/ME-PH-01/slides.pdf",
    "audio": "https://media.example.com/ME-PH-01/audio.m4a",
    "lecture_video": "https://www.youtube.com/watch?v=XXXXXXXXXXX",
    "video": "https://youtu.be/XXXXXXXXXXX"
  }
}
```

- 利用できるキー: `lesson_pdf`, `slides_html`, `slides_pdf`, `audio`, `lecture_video`, `video`, `quiz_md`
- URLは `https://` またはサイト内の `/` 始まりだけを受け付ける。
- YouTube / youtu.be / embed / shorts 対応。mp4 直リンクも従来どおり `<video>`。
- NotebookLM再生成時も既存の `public_urls` は保持する。

### クイズの正本

- `content/academy/**/quiz/*.json` の日本語カリキュラムクイズを優先する。
- 正本クイズがあるユニットでは、NotebookLMクイズを生成・表示しない。
- NotebookLMクイズを代替として使う場合は、日本語・正確性・正本整合を校閲してから公開する。

NotebookLMの既存ソースを再利用して動画だけ生成する場合:

```bash
node scripts/nlm-unit-factory.mjs ME-PH-01 --no-research --video-only --reuse-sources
```

## 注意

- サイトにフル認証基盤はない。当面は共有コード＋署名Cookie。
- コード流出時は `ACADEMY_MEMBER_CODES` と `ACADEMY_ACCESS_SECRET` をローテート。
- 特定年度の入試問題の無断転載は行わない。
