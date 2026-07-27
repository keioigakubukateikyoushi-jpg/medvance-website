> これは、Medvance基礎講座を外部AI APIなしで日次生成する運用仕様です。
> 日次生成担当者と常時起動PCが読みます。
> 正本は `part-curriculum.json`、各Partの正本4点、`nlm-generation-manifest.json` です。

# NotebookLM 機械生成ワーカー

PACK_CARD
- 目的: 898 Partの生成判断を事前固定し、毎日のAI相談をなくす
- 対象: 英語・数学・物理・化学・生物の基礎講座
- 日次に使うAI: NotebookLM Studioのみ
- 日次に使わないもの: OpenAI API、Claude API、Gemini API、検索API
- 入力: 品質ゲート合格済みのlesson・storyboard・slides・quiz
- 出力: 動画、音声、スライドPDF、クイズ
- 順番: 英語→数学→理科のラウンドロビン
- 再生成: 自動では行わない
- 組み込み: 後日まとめて実行
- デプロイ: 後日プレビュー確認後に実行

## 一度だけ作る型

`npm run academy:generation-manifest` は、全898 Partについて次を固定JSONへ展開します。

- Part ID、科目、親単元、到達目標、扱う範囲、扱わない範囲
- 正本4点のパスと内容ハッシュ
- 動画・音声・スライド・クイズ別の完成プロンプト
- 出力先、実行コマンド、準備状態

この処理はローカルNode.jsだけで動き、AI APIもネットワークも使いません。正本4点が不足するPartは `blocked_source_authoring` とし、空教材をNotebookLMへ送信しません。

## 毎日の操作

macOSでは `Medvance-Academy-毎日生成.command`、Windowsでは
`Medvance-Academy-毎日生成.ps1` を実行します。最初にプレビューが表示され、確認後だけNotebookLM生成枠を使います。

ワーカーは次の順で動きます。

1. 固定マニフェストが最新か検査する
2. 生成済み4点が揃うPartを除外する
3. 英語・数学・理科を交互に選ぶ
4. NotebookLMを1 Partずつ順番に実行する
5. 上限、429、失敗、不完全パックを検知した時点で停止する
6. 成果物を保存する。サイト組み込みとデプロイは行わない

## 常時起動PC

リポジトリ、Node.js、NotebookLM CLIログインを用意します。APIキーをファイルへ保存する必要はありません。同じリポジトリを2台で同時実行せず、生成担当PCを1台に固定します。

タスクスケジューラを使う場合も、無確認の生成枠消費を避けるため、最初はPowerShellファイルを手動起動してください。安定後は環境変数 `NLM_DAILY_CONFIRMED=1` をそのPCだけに設定して定刻実行できます。

## 正本追加後

正本4点を追加した日は、次の2コマンドだけ実行します。

```bash
npm run academy:partition
npm run academy:generation-manifest
```

これでAIに相談せず、新しいPartが翌日の生成対象に入ります。
