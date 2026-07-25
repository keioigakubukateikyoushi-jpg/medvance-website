# Academy Progress Board

生成: 2026-07-25T02:29:04.773Z

## 全体

| 指標 | 数 |
|---|---:|
| 単元総数 | 390 |
| 本文 gate 合格 | 56 |
| メディア complete | 14 |
| **NLM 待ち**（本文OK・メディアなし） | **39** |
| 本文ブロック（gate未） | 326 |
| 統合可能 ready | 14 |

### フェーズ凡例

| phase | 意味 |
|---|---|
| curriculum_blocked | 本文が quality 未達。先にカリキュラム |
| nlm_wait | 本文OK。音声・動画・スライド未。**NLMキュー対象** |
| nlm_partial / nlm_video_wait | 一部メディアあり。動画など不足 |
| ready_integrated | 本文+メディア完了 |

## 科目別

| 科目 | 総数 | gate | NLM待ち | partial | ready | 本文ブロック |
|---|---:|---:|---:|---:|---:|---:|
| advanced/english | 10 | 0 | 0 | 0 | 0 | 10 |
| advanced/math1 | 18 | 1 | 0 | 0 | 1 | 17 |
| advanced/math2 | 14 | 0 | 0 | 0 | 0 | 14 |
| advanced/mathA | 12 | 0 | 0 | 0 | 0 | 12 |
| biology-exam | 29 | 1 | 0 | 0 | 1 | 27 |
| chemistry-exam | 27 | 1 | 0 | 0 | 1 | 24 |
| elite/english | 8 | 0 | 0 | 0 | 0 | 8 |
| elite/math | 24 | 0 | 0 | 0 | 0 | 24 |
| english-exam | 30 | 1 | 0 | 0 | 1 | 27 |
| essay-exam | 18 | 1 | 0 | 0 | 1 | 16 |
| info-common-exam | 12 | 1 | 0 | 0 | 1 | 11 |
| interview-exam | 18 | 1 | 0 | 0 | 1 | 17 |
| japanese-common-exam | 15 | 1 | 0 | 0 | 1 | 12 |
| math1-exam | 40 | 40 | 35 | 1 | 4 | 0 |
| math2-exam | 22 | 0 | 0 | 0 | 0 | 22 |
| math3-exam | 18 | 0 | 0 | 0 | 0 | 18 |
| mathA-exam | 20 | 0 | 0 | 0 | 0 | 20 |
| mathB-exam | 14 | 0 | 0 | 0 | 0 | 14 |
| physics-exam | 26 | 7 | 4 | 2 | 1 | 19 |
| social-common-exam | 15 | 1 | 0 | 0 | 1 | 14 |

## 次に NLM へ回すキュー（先頭40）

- `ME-M1-04` (math1-exam) media=audio_slides phase=nlm_video_wait
- `ME-M1-05` (math1-exam) media=none phase=nlm_wait
- `ME-M1-06` (math1-exam) media=none phase=nlm_wait
- `ME-M1-07` (math1-exam) media=none phase=nlm_wait
- `ME-M1-08` (math1-exam) media=none phase=nlm_wait
- `ME-M1-09` (math1-exam) media=none phase=nlm_wait
- `ME-M1-10` (math1-exam) media=none phase=nlm_wait
- `ME-M1-11` (math1-exam) media=none phase=nlm_wait
- `ME-M1-12` (math1-exam) media=none phase=nlm_wait
- `ME-M1-13` (math1-exam) media=none phase=nlm_wait
- `ME-M1-14` (math1-exam) media=none phase=nlm_wait
- `ME-M1-16` (math1-exam) media=none phase=nlm_wait
- `ME-M1-17` (math1-exam) media=none phase=nlm_wait
- `ME-M1-18` (math1-exam) media=none phase=nlm_wait
- `ME-M1-19` (math1-exam) media=none phase=nlm_wait
- `ME-M1-20` (math1-exam) media=none phase=nlm_wait
- `ME-M1-21` (math1-exam) media=none phase=nlm_wait
- `ME-M1-22` (math1-exam) media=none phase=nlm_wait
- `ME-M1-23` (math1-exam) media=none phase=nlm_wait
- `ME-M1-24` (math1-exam) media=none phase=nlm_wait
- `ME-M1-25` (math1-exam) media=none phase=nlm_wait
- `ME-M1-26` (math1-exam) media=none phase=nlm_wait
- `ME-M1-27` (math1-exam) media=none phase=nlm_wait
- `ME-M1-28` (math1-exam) media=none phase=nlm_wait
- `ME-M1-29` (math1-exam) media=none phase=nlm_wait
- `ME-M1-30` (math1-exam) media=none phase=nlm_wait
- `ME-M1-31` (math1-exam) media=none phase=nlm_wait
- `ME-M1-32` (math1-exam) media=none phase=nlm_wait
- `ME-M1-33` (math1-exam) media=none phase=nlm_wait
- `ME-M1-34` (math1-exam) media=none phase=nlm_wait
- `ME-M1-35` (math1-exam) media=none phase=nlm_wait
- `ME-M1-36` (math1-exam) media=none phase=nlm_wait
- `ME-M1-37` (math1-exam) media=none phase=nlm_wait
- `ME-M1-38` (math1-exam) media=none phase=nlm_wait
- `ME-M1-39` (math1-exam) media=none phase=nlm_wait
- `ME-M1-40` (math1-exam) media=none phase=nlm_wait
- `ME-PH-02` (physics-exam) media=audio_slides phase=nlm_video_wait
- `ME-PH-03` (physics-exam) media=audio_slides phase=nlm_video_wait
- `ME-PH-04` (physics-exam) media=none phase=nlm_wait
- `ME-PH-05` (physics-exam) media=none phase=nlm_wait
- … 他 2 件（`content/academy/nlm-queue-next.json`）

## 運用

```bash
# 進捗更新
node scripts/academy-progress-board.mjs
# 日次：上限まで自動生成
node scripts/nlm-daily-runner.mjs
# LaunchAgent インストール（Mac）
bash scripts/install-nlm-daily-launchd.sh
```

詳細: `docs/curriculum/DAILY_NLM_PIPELINE.md`

