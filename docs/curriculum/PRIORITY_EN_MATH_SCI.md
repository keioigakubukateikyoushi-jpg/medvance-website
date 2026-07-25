# 制作優先順: 英 → 数 → 理

更新: 2026-07-26

## 順序

1. **英語** `english-exam`（→ advanced/elite english）
2. **数学** `math1` → `mathA` → `math2` → `mathB` → `math3` → advanced/elite math
3. **理科** `physics` → `chemistry` → `biology`

NLM 日次キュー（`nlm-queue-next.json`）も同じトラック優先でソートする。

## 本文ゲート状況（目標）

| 科目 | 目標 |
|---|---|
| english-exam | 30/30 full |
| math1-exam | 40/40 full |
| physics / chemistry / biology | 各科目 full |

## 運用

```bash
node scripts/academy-progress-board.mjs   # 進捗
node scripts/nlm-daily-runner.mjs         # エラーまで NLM（英数理順）
```
