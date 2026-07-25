# 制作優先: 理・数・英（満遍なく）

更新: 2026-07-26

## 方針

1. **トラックの重み**: 理科・数学・英語を最優先（他は後回し）
2. **日内の並べ方**: どれか1教科を最後まで食い尽くさない  
   → **ラウンドロビン**で `理1本 → 数1本 → 英1本 → …` を繰り返す
3. **トラック内の科目順**
   - 理: 物理 → 化学 → 生物
   - 数: 数学I → A → II → B → III → 発展・難関
   - 英: foundation → advanced → elite

## なぜこうするか

- 「理数英の順がいい」→ キューの**枠の取り方**で理を先に差し込む
- 「毎日満遍なく」→ 1日の生成が全部英語、にならないよう交互に並べる

## 実装

| 場所 | 内容 |
|---|---|
| `scripts/academy-progress-board.mjs` | `nextQueue` を RR で生成 |
| `content/academy/nlm-queue-next.json` | 日次ランナーが読む順 |
| `scripts/nlm-daily-runner.mjs` | 上記キューを until-error で消化 |

```bash
node scripts/academy-progress-board.mjs   # キュー更新
node scripts/nlm-daily-runner.mjs         # エラーまで生成
```

## 例（キュー先頭のイメージ）

```
ME-PH-02 → ME-M1-04 → ME-EN-02 → ME-PH-03 → ME-M1-05 → ME-EN-03 → …
```
