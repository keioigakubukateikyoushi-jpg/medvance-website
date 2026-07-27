# Medvance unattended NotebookLM daily worker for Windows Task Scheduler.
# Read by NucBox_G10; it calls NotebookLM only, never external AI APIs.
# Canon: content/academy/nlm-generation-manifest.json.
$ErrorActionPreference = "Stop"
Set-Location $PSScriptRoot

$logRoot = Join-Path $env:LOCALAPPDATA "MedvanceAcademy\logs"
New-Item -ItemType Directory -Force -Path $logRoot | Out-Null
$logFile = Join-Path $logRoot ("daily-" + (Get-Date -Format "yyyy-MM-dd-HHmmss") + ".log")

Start-Transcript -Path $logFile
try {
  npm run academy:generation-manifest-check
  if ($LASTEXITCODE -ne 0) { throw "固定マニフェストが古いため停止しました。" }

  npm run academy:daily-preview
  if ($LASTEXITCODE -ne 0) { throw "日次キュー確認に失敗しました。" }

  $env:NLM_DAILY_CONFIRMED = "1"
  npm run academy:daily-generate
  if ($LASTEXITCODE -ne 0) { throw "NotebookLM日次生成がエラー終了しました。" }
} finally {
  Remove-Item Env:NLM_DAILY_CONFIRMED -ErrorAction SilentlyContinue
  Stop-Transcript
}
