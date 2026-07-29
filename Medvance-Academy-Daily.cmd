@echo off
setlocal EnableExtensions EnableDelayedExpansion

set "REPO=C:\Users\Kogoro\AI_WORKSPACE\10_Projects\medvance-website"
if "%USERPROFILE%"=="" set "USERPROFILE=C:\Users\Kogoro"
if "%LOCALAPPDATA%"=="" set "LOCALAPPDATA=%USERPROFILE%\AppData\Local"
set "LOGROOT=%LOCALAPPDATA%\MedvanceAcademy\logs"
if not exist "%LOGROOT%" mkdir "%LOGROOT%" 2>nul

for /f %%I in ('powershell.exe -NoProfile -Command "Get-Date -Format yyyy-MM-dd-HHmmss"') do set "STAMP=%%I"
if "%STAMP%"=="" set "STAMP=unknown"
set "LOGFILE=%LOGROOT%\daily-%STAMP%.log"

if not exist "%LOGROOT%" (
  echo Failed to create log directory: %LOGROOT%
  exit /b 11
)

echo [%DATE% %TIME%] Medvance Academy Daily wrapper started>"%LOGFILE%"
echo Repo=%REPO%>>"%LOGFILE%"
echo Args=%*>>"%LOGFILE%"

set "PS_EXE=%SystemRoot%\System32\WindowsPowerShell\v1.0\powershell.exe"
if exist "%ProgramFiles%\PowerShell\7\pwsh.exe" set "PS_EXE=%ProgramFiles%\PowerShell\7\pwsh.exe"

cd /d "%REPO%"
if errorlevel 1 (
  echo Failed to cd to repo: %REPO%>>"%LOGFILE%"
  exit /b 10
)

"%PS_EXE%" -NoProfile -ExecutionPolicy Bypass -File "%REPO%\Medvance-Academy-Daily.ps1" %* -LogFile "%LOGFILE%" >>"%LOGFILE%" 2>&1
set "RC=%ERRORLEVEL%"
if "%RC%"=="" set "RC=1"
echo [%DATE% %TIME%] Medvance Academy Daily wrapper finished rc=!RC!>>"%LOGFILE%"
exit /b !RC!
