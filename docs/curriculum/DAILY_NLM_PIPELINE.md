# 日次 NLM 自動生成パイプライン

**できる。** ただし前提は「本文が quality-gate を通っていること」。  
本文が薄い科目は **NLM より先にカリキュラム full 化** が必要（math1 は 40/40 で NLM 待ち状態）。

---

## 全体像

```
カリキュラム full (quality-gate)
        ↓
academy-progress-board  … 進捗の棚卸し
        ↓
nlm-queue-next.json     … 次に回す ID 一覧
        ↓
nlm-daily-runner        … その日の上限まで自動生成
        ↓
rate limit で停止 / 日次ログ
        ↓
BOARD.md で「どこまで作れたか」を確認 → 組み込み
```

---

## コマンド

```bash
cd ~/repos/medvance-website

# 1) 進捗の棚卸し（BOARD + inventory + next queue）
node scripts/academy-progress-board.mjs

# 2) 今日の上限まで NLM（ドライラン）
node scripts/nlm-daily-runner.mjs --dry-run

# 3) 本番実行（例: 1日10単元・並列2）
NLM_DAILY_MAX_UNITS=10 NLM_PARALLEL=2 node scripts/nlm-daily-runner.mjs

# 4) 毎朝自動（LaunchAgent）
bash scripts/install-nlm-daily-launchd.sh
# 時刻変更例: NLM_DAILY_HOUR=8 NLM_DAILY_MINUTE=0 bash scripts/install-nlm-daily-launchd.sh
```

---

## 進捗の見方（整理）

| ファイル | 内容 |
|---|---|
| `docs/curriculum/progress/BOARD.md` | 科目別の gate / NLM待ち / ready |
| `content/academy/media-inventory.json` | 全単元の phase 詳細 |
| `content/academy/nlm-queue-next.json` | **次に NLM へ回す ID 順** |
| `content/academy/nlm-daily-state.json` | 日別の試行・成功・rate limit |
| `docs/curriculum/progress/daily/YYYY-MM-DD.md` | その日の実行ログ |

### phase の意味

| phase | 意味 | 次のアクション |
|---|---|---|
| `curriculum_blocked` | 本文未達 | カリキュラム執筆 |
| `nlm_wait` | 本文OK・メディアなし | **日次 NLM 対象** |
| `nlm_partial` / `nlm_video_wait` | 一部のみ | 動画など不足分を再生成 |
| `ready_integrated` | 本文+メディア完了 | 無料ならデプロイ可 / 有料は配信設計 |

---

## 日次上限の考え方

NotebookLM に公式の「今日の残り N」API が無いため:

- **NLM_DAILY_MAX_UNITS**（既定 10）で1日の最大単元数を切る
- `RESOURCE_EXHAUSTED` / rate limit を検知したら **その日は打ち切り**
- 状態は `nlm-daily-state.json` に残り、同じ日の再実行は予算を消費済みとして抑制

上限が余っている日は `nlm-daily-runner` を手動でもう一度（または MAX を上げて）実行可能。

---

## 全分野カバーとの関係

| レイヤ | 状態の測り方 | 担当 |
|---|---|---|
| 設計 Blueprint | `docs/curriculum/blueprints/` | 他AI設計+敵対レビュー |
| 本文 full | quality-gate + BOARD の gate 列 | 実装AI / 一括+gate |
| メディア | BOARD の NLM待ち / ready | **日次ランナー** |
| 本番組み込み | 無料 slim デプロイ / 有料ストレージ | 司令塔 |

**math1**: 本文完了 → 日次 NLM で消化可能。  
**他科目**: まだ `curriculum_blocked` が多い → 先に Blueprint → full が必要。

---

## LaunchAgent

- Label: `com.kogoro.medvance-nlm-daily`
- 既定: 毎日 9:30（ローカル時刻）
- ログ: `~/Library/Logs/medvance/`
- 解除: `launchctl bootout gui/$(id -u)/com.kogoro.medvance-nlm-daily`

PC がスリープ中は走らない。Mac を起きている時間帯に合わせるか、電源接続+自動起動を推奨。

---

## 組み込み（デプロイ）

- **無料単元**: メディア完成後、allowlist の slim を `vercel --prod`
- **有料単元**: git にバイナリを載せない。外部ストレージ or ローカルのみ（方針別紙）

日次ランナーは生成まで。本番デプロイは成功パックを確認してから（自動デプロイは任意で後付け可）。
