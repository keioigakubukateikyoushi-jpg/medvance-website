# NLM Wait State（本文完了 → メディア待ち）

更新: 2026-07-25

## 意味

`quality-gate` 合格（または同等の本文品質）の単元は、**カリキュラム本文が完了**。  
残りは NotebookLM による **音声・動画・スライドPDF** の生成と組み込み。

## 日次自動（実装済み）

| もの | パス |
|---|---|
| 進捗ボード | `docs/curriculum/progress/BOARD.md` |
| 次キュー | `content/academy/nlm-queue-next.json` |
| 日次ランナー | `scripts/nlm-daily-runner.mjs` |
| LaunchAgent 導入 | `bash scripts/install-nlm-daily-launchd.sh` |
| 設計説明 | `docs/curriculum/DAILY_NLM_PIPELINE.md` |

毎朝（既定 9:30）その日の上限まで自動生成。rate limit で停止。進捗は BOARD と daily ログで整理。

## 現在の到達（ボード準拠）

| 対象 | 本文 gate | NLM待ち | 状態 |
|---|---|---|---|
| **math1-exam** | **40/40** | 多数 | **日次 NLM で消化可能** |
| 無料11 | 入口 full | メディア本番済 | メンテ時のみ再生成 |
| **他科目** | 入口のみ（全体で block 約326） | 少 | **先にカリキュラム full が必要** |

## ルール

- outline / gate 不合格に NLM を回して本番に載せない
- 有料メディアは git に載せずローカル生成 → 後日外部ストレージ
- 無料のみ Vercel static allowlist
- **全分野カバー** = 各科目 Blueprint → gate full → 日次 NLM の順