> これは、NucBoxで生成したNotebookLM成果物をMacへ回収し、まとめて公開する手順です。
> 生成担当とサイト公開担当が読みます。
> 正本はOneDrive回収パック、media-quality-gate、作業ブランチのPreviewです。

# NucBox生成 → 回収 → 組み込み → デプロイ

## 役割分担

- NucBox: NotebookLM生成とOneDrive回収パック作成だけ
- Mac: 回収、品質検査、サイト組み込み、Preview、ユーザー確認、本番デプロイ
- 日次処理ではOpenAI・Claude・Gemini等のAPIを使わない
- `ai-sensei-sora` の成果物、notebook、ブランドを混ぜない

## NucBox側

日次生成はWindowsタスクスケジューラから
`Medvance-Academy-自動生成.ps1` を実行します。生成後、必要な日に
`Medvance-Academy-回収パック作成.ps1` を手動実行します。

回収先:

```text
C:\Users\Kogoro\OneDrive\Videos\Medvance_Academy_NLM\outbox\<batch-id>
```

各PartはNotebookLM由来の次の5ファイルだけを回収します。

- `nlm_video.mp4`
- `nlm_audio.m4a`
- `slides.pdf`
- `nlm_quiz.json`
- `manifest.json`

## Mac側の回収

OneDrive同期完了後、`_batch.json` のPart IDとコミットを確認します。各Partを
`public/academy/media/<Part ID>/` へコピーします。既存ファイルがある場合は上書きせず、差分を確認します。

## 組み込み前ゲート

回収したPart IDだけを指定します。

```bash
node scripts/media-quality-gate.mjs ME-XX-00-P00
node scripts/media-quality-gate.mjs ME-XX-00-P00 --write
node scripts/nlm-integrate-ready.mjs
npm run academy:generation-manifest
npm run academy:curriculum-audit
npm run build
```

不合格Partは公開せず、`media-approved.json` に追加しません。動画の長さだけでは再生成せず、正本一致、NotebookLM provenance、内容完結を優先します。

## デプロイ

必ず `codex/` 作業ブランチでPreviewを作り、PC・スマホで動画、音声、PDF、クイズ、前後Part移動を確認します。ユーザー確認後だけ本番へ昇格します。`master`へ直接pushせず、本番デプロイは週1回までにまとめます。
