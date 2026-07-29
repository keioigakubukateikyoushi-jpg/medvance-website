param(
  [switch]$DryRun,
  [switch]$Generate,
  [string]$LogFile = ""
)

$ErrorActionPreference = "Stop"

[Console]::OutputEncoding = [System.Text.Encoding]::UTF8
$OutputEncoding = [System.Text.Encoding]::UTF8

function Resolve-ToolPath {
  param(
    [string]$Name,
    [string[]]$Fallbacks = @()
  )
  $command = Get-Command $Name -ErrorAction SilentlyContinue
  if ($command -and $command.Source) {
    return $command.Source
  }
  foreach ($candidate in $Fallbacks) {
    if (-not [string]::IsNullOrWhiteSpace($candidate) -and (Test-Path -LiteralPath $candidate)) {
      return $candidate
    }
  }
  throw ("Required command not found: {0}" -f $Name)
}

function Write-RunLog {
  param([string]$Message)
  $line = ("{0} {1}" -f (Get-Date -Format "yyyy-MM-dd HH:mm:ss"), $Message)
  Write-Host $line
}

function Invoke-Step {
  param(
    [string]$Name,
    [string]$FilePath,
    [string[]]$Arguments
  )
  Write-RunLog ("START {0}: {1} {2}" -f $Name, $FilePath, ($Arguments -join " "))
  & $FilePath @Arguments
  $code = if ($LASTEXITCODE -ne $null) { [int]$LASTEXITCODE } else { 0 }
  Write-RunLog ("END {0}: exit={1}" -f $Name, $code)
  if ($code -ne 0) {
    throw ("Step failed: {0} exit={1}" -f $Name, $code)
  }
}

if (-not $DryRun -and -not $Generate) {
  throw "Specify -DryRun or -Generate."
}
if ($DryRun -and $Generate) {
  throw "Specify only one mode."
}

$repo = Split-Path -Parent $PSCommandPath
Set-Location $repo

if ([string]::IsNullOrWhiteSpace($env:USERPROFILE)) {
  $env:USERPROFILE = "C:\Users\Kogoro"
}
if ([string]::IsNullOrWhiteSpace($env:LOCALAPPDATA)) {
  $env:LOCALAPPDATA = Join-Path $env:USERPROFILE "AppData\Local"
}

$logRoot = Join-Path $env:LOCALAPPDATA "MedvanceAcademy\logs"
New-Item -ItemType Directory -Force -Path $logRoot | Out-Null
if ([string]::IsNullOrWhiteSpace($LogFile)) {
  $LogFile = Join-Path $logRoot ("daily-" + (Get-Date -Format "yyyy-MM-dd-HHmmss") + ".log")
}

$lockPath = Join-Path $env:LOCALAPPDATA "MedvanceAcademy\daily.lock"
$lockStream = $null
$transcriptStarted = $false

try {
  $lockDir = Split-Path -Parent $lockPath
  New-Item -ItemType Directory -Force -Path $lockDir | Out-Null
  $lockStream = [System.IO.File]::Open($lockPath, [System.IO.FileMode]::OpenOrCreate, [System.IO.FileAccess]::ReadWrite, [System.IO.FileShare]::None)
  $bytes = [System.Text.Encoding]::UTF8.GetBytes(("pid={0}; started={1:o}" -f $PID, (Get-Date)))
  $lockStream.SetLength(0)
  $lockStream.Write($bytes, 0, $bytes.Length)
  $lockStream.Flush()

  Start-Transcript -Path $LogFile -Append | Out-Null
  $transcriptStarted = $true

  $mode = if ($Generate) { "Generate" } else { "DryRun" }
  Write-RunLog ("Mode={0}" -f $mode)
  Write-RunLog ("Repo={0}" -f $repo)
  Write-RunLog ("PowerShell={0}" -f $PSVersionTable.PSVersion.ToString())

  $npmPath = Resolve-ToolPath "npm.cmd" @("C:\Program Files\nodejs\npm.cmd")
  $nlmPath = Resolve-ToolPath "nlm.exe" @((Join-Path $env:USERPROFILE ".local\bin\nlm.exe"))
  Write-RunLog ("npm={0}" -f $npmPath)
  Write-RunLog ("nlm={0}" -f $nlmPath)

  Invoke-Step "partition" $npmPath @("run", "academy:partition")
  Invoke-Step "generation-manifest" $npmPath @("run", "academy:generation-manifest")
  Invoke-Step "daily-preview" $npmPath @("run", "academy:daily-preview", "--", "--max", "3")
  if ($Generate) {
    Invoke-Step "auth-check" $nlmPath @("login", "--check")
  } else {
    Write-RunLog "DryRun skips auth-check and generation."
  }

  if ($Generate) {
    $env:NLM_DAILY_CONFIRMED = "1"
    $env:NLM_RESEARCH_MODE = "off"
    Invoke-Step "daily-generate" $npmPath @("run", "academy:daily-generate", "--", "--max", "3")
  } else {
    Write-RunLog "DryRun complete; generation not started."
  }

  exit 0
} catch {
  Write-RunLog ("ERROR {0}" -f $_.Exception.Message)
  exit 1
} finally {
  Remove-Item Env:NLM_DAILY_CONFIRMED -ErrorAction SilentlyContinue
  Remove-Item Env:NLM_RESEARCH_MODE -ErrorAction SilentlyContinue
  if ($transcriptStarted) {
    try { Stop-Transcript | Out-Null } catch { }
  }
  if ($lockStream -ne $null) {
    $lockStream.Dispose()
  }
  Remove-Item -LiteralPath $lockPath -ErrorAction SilentlyContinue
}
