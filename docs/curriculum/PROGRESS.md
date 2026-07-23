# Curriculum Collaboration Progress

更新: **2026-07-23**  
司令塔: **Grok**（本文量産はしない。仕様・統合・ゲート）

**Obsidian ハブ（AI切替の入口）**:  
`AI_MEMORY/02_Projects/Medvance_Academy_Curriculum.md`  
（OneDrive: `ドキュメント/AI_MEMORY/02_Projects/Medvance_Academy_Curriculum.md`）

## ルール

1. **一人のAIが全388単元を急いで書かない**
2. 役割は固定: 設計 / 敵対レビュー / 実装 / 統合ゲート
3. `status: full` は `quality-gate` 通過 + 統合ゲート後のみ
4. 手渡しは必ず `docs/curriculum/handoffs/` 経由

## 役割ローテーション

| 番 | 役割 | 担当 | 状態 |
|---|---|---|---|
| 0 | Design OS 立ち上げ | Grok | **完了** |
| 1 | math1 Blueprint 設計 | medvance-kyoumu (Claude系) | **完了** |
| 2 | math1 Blueprint 敵対レビュー | general-purpose | **完了** (Must fix 反映済) |
| 3 | **Batch1 実装仕様・手渡し** | **Grok（いまここ）** | **完了 → 実装AI待ち** |
| 4 | Batch1 本文・台本・クイズ実装 | Claude or Codex | **次** |
| 5 | Batch1 敵対レビュー | 実装と別のAI | 待ち |
| 6 | 統合・gate・index 更新 | Grok | 待ち |
| 7 | Batch2 以降… | 同上ローテ | 待ち |

## math1-exam

| 項目 | 内容 |
|---|---|
| Blueprint | `docs/curriculum/blueprints/math1-exam.md`（45単元設計・承認反映済） |
| レビュー | `docs/curriculum/review-log/2026-07-22-math1-exam.md` |
| マップ | `docs/curriculum/maps/math1-exam.md` |
| Batch1 | ME-M1-02, 03, 04, 05 |
| 手渡し | `docs/curriculum/handoffs/2026-07-23-math1-batch1.md` |
| 金標準 | `content/academy/math1-exam/lessons/ME-M1-01.md`（gate ✓） |

## 現在の依頼（次のAIへ）

**実装AI（Claude または Codex）へ:**

1. 読む: `docs/curriculum/handoffs/2026-07-23-math1-batch1.md`
2. 読む: `docs/curriculum/prompts/implementer.md`
3. 金標準を模して **1単元ずつ** 書く（一気に雑書き禁止）
4. 書き終わったら gate: `node scripts/quality-gate.mjs ME-M1-02` 等
5. 完了報告を handoff に追記 → Grok が統合

## 凍結中

- outline への NLM 量産（full 後）
- `perfect-all-curriculum.mjs`
- math1 以外の科目の本文（Blueprint 未承認）
