# Medvance Curriculum Design OS

**目的**: 388単元を雑に量産せず、抜けのない設計 → 単元完成 → メディアの順で整備する。

更新: 2026-07-22

---

## 一方向パイプライン

```
Map（科目Blueprint） → Unit（full本文） → Media（NLM）
```

逆流禁止。設計未確定のまま NLM 量産しない。テンプレ一括で `status: full` にしない。

---

## 完成の定義

### 1. 科目 Blueprint（実装前に必須）

各科目で固定する正本 `docs/curriculum/blueprints/{subjectId}.md`:

1. 章立て・単元DAG（prereq、循環なし）
2. 原子スキル（1ユニット = 1スキル、15–25分）
3. 学習指導要領 × 医学部受験カバレッジ表
4. 到達チェック一覧
5. 問題型カタログ（基礎→発展→難関の接続）
6. 現状 index とのギャップ（追加/削除/分割/統合/順序）

### 2. 単元 Full

| 成果物 | 基準 |
|---|---|
| `lessons/{id}.md` | `quality-gate.mjs` 合格（本文≥3000字、例題2、演習3、落とし穴3、定型排除） |
| `storyboard/{id}.md` | 12ブロック、本文と同一例題 |
| `slides/{id}.md` | 台本対応 |
| `quiz/{id}.json` | 日本語5問、ゴール・手順・落とし穴を測定 |
| index | `status: full`, `quality: reviewed-v3` は **ゲート通過後のみ** |

### 3. メディア

- full かつ gate 合格のみ NLM 投入
- 無料パックは例外運用可

---

## マルチAI 役割

| 役割 | 担当 | やること |
|---|---|---|
| 司令塔 | Grok | 優先順位・統合・ゲート・進捗 |
| 科目アーキテクト | Claude / medvance-kyoumu | Blueprint 草案 |
| 敵対レビュー | Codex / 別Claude | 漏れ・重複・順序・受験妥当性 |
| 単元実装 | Codex / Claude | 承認済みBlueprintに沿った本文 |
| 機械ゲート | `scripts/quality-gate.mjs` | 最低品質の強制 |
| メディア | NLM factory | full のみ |

**同じプロンプトの多数決はしない。** 役割を分け、敵対レビューを必ず挟む。

---

## 1科目フロー

1. `node scripts/curriculum-map-export.mjs --subject {id}` で現状マップ
2. Claude に Blueprint 設計（プロンプト: `docs/curriculum/prompts/architect.md`）
3. Codex に敵対レビュー（`docs/curriculum/prompts/adversary.md`）
4. ギャップ確定 → index の章・順序・prereq 更新
5. 章単位で 3–5 単元 full 化
6. quality-gate → スポットレビュー → status 更新
7. （任意）NLM

---

## 優先科目順

1. math1-exam  
2. mathA-exam / math2-exam  
3. physics / chemistry / biology  
4. english-exam  
5. mathB / math3  
6. interview / essay  
7. 共通テスト JA / SO / IF  
8. advanced → elite（基礎 Blueprint 後）

---

## 禁止

- `perfect-all-curriculum.mjs` による full 一括化（**DEPRECATED**）
- outline のまま NLM 動画を本番配信
- 特定年度の入試問題の捏造
- Blueprint 未承認での単元増減

---

## 関連

- 進捗・ローテ: `docs/curriculum/PROGRESS.md`
- 手渡し: `docs/curriculum/handoffs/`
- 実装プロンプト: `docs/curriculum/prompts/implementer.md`
- ベースライン: `docs/curriculum/BASELINE.md`
- カバレッジ方針: `content/academy/00_TRACK_SYSTEM.md`
- 台本: `content/academy/SHARED_STORYBOARD.md`
- ゲート: `scripts/quality-gate.mjs`
- マップ出力: `scripts/curriculum-map-export.mjs`
