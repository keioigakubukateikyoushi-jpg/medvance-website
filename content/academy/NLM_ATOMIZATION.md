# NotebookLM 細分化・網羅・Deep Research 運用

## 目的

Medvance の高校教材を **1単元 = 1ノートブック** に細分化し、

- **網羅的**: 基礎講座の全単元をカバー
- **体系的**: 教科ハブ → 章 → 単元の前提チェーン
- **ずれない**: lesson + storyboard を正本に固定

に動画・音声・スライド・クイズを載せる。

## 内容ずれ防止ルール（必須）

| 優先度 | ソース | 用途 |
|--------|--------|------|
| **1 正本** | `lessons/{ID}.md` + `storyboard/{ID}.md` | 手順・例題・ゴール・順序 |
| **2 ロック** | `_alignment_lock.txt` | 正本厳守の短い宣言 |
| **3 補助** | Deep Research の Web ソース | 教科書レベルの用語・定石の裏付けのみ |

**禁止**: Research 結果から新しい入試問題・数値例・手順を Studio に持ち込ませること。  
**Studio focus 定型**: 「台本順厳守・台本外の例題禁止・正本を置き換えない・Use only uploaded sources」

## Deep Research の使い方

```text
目的: 定義・公式・注意点の「標準的な教科書説明」の補強
モード: deep（重要単元） / fast（反復単元）
クエリ: 特定年度の入試問題は不要、一般的な学習指導要領レベルに限定
```

Research は **正本アップロード後** に実行。生成時 focus で正本優先を再宣言する。

## 1ユニットの生成フロー

```
1. notebook create  "Medvance {UNIT_ID} {title}"
2. source add lesson.md --wait
3. source add storyboard.md --wait
4. source add alignment_lock.txt --wait
5. research start (deep|fast) → status --auto-import
6. audio / video / slides / quiz  create （focus = 正本厳守プロンプト）
7. download → public/academy/media/{UNIT_ID}/
8. nlm-registry.json に notebook_id を記録
```

## コマンド

```bash
# 数単元（Deep Research あり）
node scripts/nlm-unit-factory.mjs ME-M1-04 ME-M1-05 ME-M1-06

# 科目から先頭 N 本
node scripts/nlm-unit-factory.mjs --subject math1-exam --limit 5

# 生成済みノートから再DLのみ
node scripts/nlm-unit-factory.mjs ME-M1-04 --download-only

# Research なし（正本のみ・速い）
node scripts/nlm-unit-factory.mjs ME-M1-04 --no-research

# 音声だけ（レート制限時）
node scripts/nlm-unit-factory.mjs ME-M1-04 --audio-only

# ドライラン
NLM_DRY=1 node scripts/nlm-unit-factory.mjs ME-M1-04
```

## レート制限

NotebookLM は **短時間連打制限** と **日次に近いクォータ** がある。  
推奨: **1日あたり数ユニット**（音声+動画+スライド）。  
失敗時は 2–10 分空けて `--download-only` または再 create。

## レジストリ

`content/academy/nlm-registry.json`

```json
{
  "units": {
    "ME-M1-04": {
      "notebook_id": "uuid",
      "title": "...",
      "research_at": "...",
      "studio_requested_at": "..."
    }
  }
}
```

## 網羅の進め方（推奨順）

1. 無料入口（ME-M1-01, ME-EN-01, ME-PH-01, ME-CH-01, ME-BI-01）  
2. 数学I を全単元（前提チェーンの幹）  
3. 数学A → II → B → III  
4. 英語 → 物理 → 化学 → 生物  
5. 発展・難関は問題型ノート（別 focus）

## サイトへの反映

ダウンロード先:

- `nlm_audio.m4a` / `audio.m4a`
- `nlm_video.mp4` / `video.mp4`
- `slides.pdf`
- `nlm_quiz.json` / `quiz.json`

単元ページは存在するメディアを表示し、無いものは「準備中です」。
