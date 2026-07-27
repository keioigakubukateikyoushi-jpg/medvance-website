# Medvance NotebookLM daily generator for an always-on Windows PC.
# Read by the operator; no OpenAI/Claude API is called.
# Canon: content/academy/nlm-generation-manifest.json.
$ErrorActionPreference = "Stop"
Set-Location $PSScriptRoot

Write-Host "Medvance Academy NotebookLM 日次生成"
Write-Host "外部AI APIは使わず、固定マニフェストを上から順に処理します。"
Write-Host "サイト組み込み・デプロイは実行しません。"
npm run academy:generation-manifest-check
if ($LASTEXITCODE -ne 0) { throw "固定マニフェストが古いため停止しました。" }
npm run academy:daily-preview

$answer = Read-Host "本日のNotebookLM生成枠を使用しますか？ [y/N]"
if ($answer -match "^(y|yes)$") {
  npm run academy:daily-generate
} else {
  Write-Host "キャンセルしました。生成枠は使用していません。"
}
