# Copies newly completed NotebookLM Part packs into the shared OneDrive outbox.
# Read by NucBox_G10 after daily generation; it never deploys or calls AI.
# Canon: public/academy/media Part directories and their manifests.
$ErrorActionPreference = "Stop"
Set-Location $PSScriptRoot

$mediaRoot = Join-Path $PSScriptRoot "public\academy\media"
$outboxRoot = if ($env:MEDVANCE_TRANSFER_OUTBOX) {
  $env:MEDVANCE_TRANSFER_OUTBOX
} else {
  Join-Path $env:OneDriveConsumer "Videos\Medvance_Academy_NLM\outbox"
}
$stateRoot = Join-Path $env:LOCALAPPDATA "MedvanceAcademy"
$stateFile = Join-Path $stateRoot "exported-parts.json"
New-Item -ItemType Directory -Force -Path $stateRoot, $outboxRoot | Out-Null

$exported = @{}
if (Test-Path $stateFile) {
  $saved = Get-Content $stateFile -Raw | ConvertFrom-Json
  foreach ($id in $saved.exported) { $exported[$id] = $true }
}

$required = @("nlm_video.mp4", "nlm_audio.m4a", "slides.pdf", "nlm_quiz.json", "manifest.json")
$ready = Get-ChildItem $mediaRoot -Directory | Where-Object {
  $dir = $_.FullName
  $_.Name -match "-P\d+$" -and
  ($required | Where-Object { -not (Test-Path (Join-Path $dir $_)) }).Count -eq 0 -and
  -not $exported.ContainsKey($_.Name)
}

if ($ready.Count -eq 0) {
  Write-Host "No new complete packs."
  exit 0
}

$batchId = Get-Date -Format "yyyyMMdd-HHmmss"
$batchRoot = Join-Path $outboxRoot $batchId
New-Item -ItemType Directory -Force -Path $batchRoot | Out-Null
$files = @("nlm_video.mp4", "nlm_audio.m4a", "slides.pdf", "nlm_quiz.json", "manifest.json")

foreach ($part in $ready) {
  $destination = Join-Path $batchRoot $part.Name
  New-Item -ItemType Directory -Force -Path $destination | Out-Null
  foreach ($file in $files) {
    Copy-Item (Join-Path $part.FullName $file) (Join-Path $destination $file)
  }
  $exported[$part.Name] = $true
}

$commit = (git rev-parse HEAD).Trim()
$batch = @{
  version = 1
  batchId = $batchId
  createdAt = (Get-Date).ToUniversalTime().ToString("o")
  sourceHost = $env:COMPUTERNAME
  sourceCommit = $commit
  parts = @($ready | ForEach-Object { $_.Name })
}
$batch | ConvertTo-Json -Depth 5 | Set-Content (Join-Path $batchRoot "_batch.json") -Encoding UTF8
@{ exported = @($exported.Keys | Sort-Object) } |
  ConvertTo-Json -Depth 3 |
  Set-Content $stateFile -Encoding UTF8

Write-Host "Recovery pack created:" $batchRoot
Write-Host "Part count:" $ready.Count
