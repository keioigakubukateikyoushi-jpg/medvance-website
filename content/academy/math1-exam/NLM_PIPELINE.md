# NotebookLM パイプライン（Medvance 数I）

**全科目共通の最新運用**は親ディレクトリの  
[`../NLM_ATOMIZATION.md`](../NLM_ATOMIZATION.md) と  
`scripts/nlm-unit-factory.mjs` を使う。

## 原則

- **1単元 = 1ノートブック**（細分化）
- **正本** = `lessons/` + `storyboard/` のみ
- **Deep Research** = 用語・定石の裏付けのみ（例題創作禁止）
- レジストリ: `../nlm-registry.json`

## 一括（推奨）

```bash
# 数Iを先頭から5本（Deep Research あり）
node scripts/nlm-unit-factory.mjs --subject math1-exam --limit 5

# 単体
node scripts/nlm-unit-factory.mjs ME-M1-04

# 生成待ち後の再DL
node scripts/nlm-unit-factory.mjs ME-M1-04 --download-only
```

## 配置先

`public/academy/media/{UNIT_ID}/`  
（旧: curriculum/.../media は使わない）

## 注意

- 日次クォータあり。1日数ユニットが現実的
- レート制限時は数分〜翌日に再実行
