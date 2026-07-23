# NLM Wait State（本文完了 → メディア待ち）

更新: 2026-07-23

## 意味

`quality-gate` 合格かつ `status: full` の単元は、**カリキュラム本文の設計・実装が完了**。  
残り作業は NotebookLM による **音声・動画・スライドPDF** の生成・配置・（無料のみ）本番配信。

## 現在の到達

| 対象 | 本文 | メディア | 状態 |
|---|---|---|---|
| **math1-exam 全40単元** | **40/40 gate full** | 生成キュー稼働 | **あとは NLM 待ち** |
| 無料11単元 | full（入口） | slim 配信済み | 本番更新デプロイ可 |
| 他科目 | 入口中心 | 未 | Blueprint → full → NLM |

## 今日の NLM コマンド

```bash
# math1 本文済み単元のメディア量産
NLM_PARALLEL=3 node scripts/nlm-media-parallel-queue.mjs --wave math1-full --no-research

# ログ
tail -f /tmp/nlm-math1-full.log
```

## 無料パック本番

`public/academy/media/<FREE_ID>/{audio.m4a,video.mp4,slides.pdf,quiz.json,lesson.html,manifest.json}`  
→ `vercel --prod --yes`（gitignore 例外 + CDN 解決）

## ルール

- outline / gate 不合格に NLM を回して本番に載せない
- 有料メディアは git に載せずローカル生成 → 後日外部ストレージ
- 無料のみ Vercel static allowlist
