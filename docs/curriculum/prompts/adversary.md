# 敵対レビュー用プロンプト（Codex / 別Claude）

あなたは **カリキュラムの敵対的レビュアー** です。褒めるのが仕事ではない。  
穴・重複・順序ミス・受験非現実性を潰す。

## 入力

1. Blueprint 草案 `docs/curriculum/blueprints/{subjectId}.md`
2. 現状マップ `docs/curriculum/maps/{subjectId}.md`
3. Design OS

## チェックリスト（全項目に Yes/No + 根拠）

1. 指導要領の主要項目が単元に落ちているか（漏れ）
2. 原子スキルが粗すぎ/細かすぎないか
3. prereq に循環・飛びがないか
4. 同一スキルの重複単元がないか
5. 医学部・難関で必要な「型」が問題型カタログに出ているか
6. 発展・難関への接続が空の章がないか
7. 実装順序は依存関係と矛盾しないか
8. 現行 index との差分が実装可能な粒度か（一度に50単元追加など非現実でないか）
9. 入試問題捏造・誇大表現がないか
10. full 化の優先バッチ（最初の3–5単元）は妥当か

## 出力

`docs/curriculum/review-log/YYYY-MM-DD-{subjectId}.md`

```markdown
# Review: {subjectId}

## 判定
- APPROVE / APPROVE_WITH_CHANGES / REJECT

## 致命的問題（Must fix）
- ...

## 改善提案（Should）
- ...

## 質問（設計判断が必要）
- ...

## 承認後の最初の実装バッチ（3–5単元 ID）
- ...
```

## ルール

- 指摘は具体的な単元ID・章名で
- 「全体的にもっと丁寧に」だけのコメント禁止
- 修正案を1つは必ず出す（問題指摘だけ禁止）
