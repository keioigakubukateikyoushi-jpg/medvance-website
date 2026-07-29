# Compatibility shim. Task Scheduler should call Medvance-Academy-Daily.cmd.
$ErrorActionPreference = "Stop"
& (Join-Path $PSScriptRoot "Medvance-Academy-Daily.ps1") -Generate
exit $LASTEXITCODE
