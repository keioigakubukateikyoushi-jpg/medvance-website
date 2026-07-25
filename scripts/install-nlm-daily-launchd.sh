#!/usr/bin/env bash
# Install macOS LaunchAgent: daily NLM media generation (JST morning)
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
LABEL="com.kogoro.medvance-nlm-daily"
PLIST="$HOME/Library/LaunchAgents/${LABEL}.plist"
NODE="$(command -v node)"
LOG_DIR="$HOME/Library/Logs/medvance"
mkdir -p "$LOG_DIR" "$HOME/Library/LaunchAgents"

# Default: every day 09:30 JST — LaunchAgent uses local timezone
cat >"$PLIST" <<EOF
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
  <key>Label</key>
  <string>${LABEL}</string>
  <key>ProgramArguments</key>
  <array>
    <string>${NODE}</string>
    <string>${ROOT}/scripts/nlm-daily-runner.mjs</string>
  </array>
  <key>WorkingDirectory</key>
  <string>${ROOT}</string>
  <key>EnvironmentVariables</key>
  <dict>
    <key>PATH</key>
    <string>/opt/homebrew/bin:/usr/local/bin:/usr/bin:/bin:${HOME}/.local/bin</string>
    <key>NLM_DAILY_MAX_UNITS</key>
    <string>${NLM_DAILY_MAX_UNITS:-10}</string>
    <key>NLM_PARALLEL</key>
    <string>${NLM_PARALLEL:-2}</string>
    <key>NLM_DAILY_LOG</key>
    <string>${LOG_DIR}/nlm-daily-runner.log</string>
    <key>NLM_MEDIA_LOG</key>
    <string>${LOG_DIR}/nlm-media-daily-child.log</string>
    <key>HOME</key>
    <string>${HOME}</string>
  </dict>
  <key>StartCalendarInterval</key>
  <dict>
    <key>Hour</key>
    <integer>${NLM_DAILY_HOUR:-9}</integer>
    <key>Minute</key>
    <integer>${NLM_DAILY_MINUTE:-30}</integer>
  </dict>
  <key>StandardOutPath</key>
  <string>${LOG_DIR}/nlm-daily.stdout.log</string>
  <key>StandardErrorPath</key>
  <string>${LOG_DIR}/nlm-daily.stderr.log</string>
  <key>RunAtLoad</key>
  <false/>
</dict>
</plist>
EOF

launchctl bootout "gui/$(id -u)/${LABEL}" 2>/dev/null || true
launchctl bootstrap "gui/$(id -u)" "$PLIST"
launchctl enable "gui/$(id -u)/${LABEL}" 2>/dev/null || true
echo "Installed ${PLIST}"
echo "Schedule: daily ${NLM_DAILY_HOUR:-9}:${NLM_DAILY_MINUTE:-30} local time"
echo "Max units/day: ${NLM_DAILY_MAX_UNITS:-10}  parallel: ${NLM_PARALLEL:-2}"
echo "Logs: ${LOG_DIR}/"
echo "Manual run: node ${ROOT}/scripts/nlm-daily-runner.mjs"
echo "Dry run:    node ${ROOT}/scripts/nlm-daily-runner.mjs --dry-run"
echo "Unload:     launchctl bootout gui/$(id -u)/${LABEL}"
