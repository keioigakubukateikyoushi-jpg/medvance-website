#!/bin/zsh
set -u
cd "$(dirname "$0")"

echo "Medvance Academy NotebookLM 日次生成"
echo "生成可能なPartを1件ずつ処理し、動画・音声・スライドPDF・クイズを作ります。"
echo "外部AI APIは使いません。サイト組み込み・デプロイも実行しません。"
echo "NotebookLMの上限またはエラーを検知した時点で停止します。"
echo
npm run academy:generation-manifest-check
npm run academy:daily-preview
echo
printf "本日のNotebookLM生成枠を使用します。開始しますか？ [y/N] "
read answer
case "$answer" in
  y|Y|yes|YES)
    npm run academy:daily-generate
    ;;
  *)
    echo "キャンセルしました。生成枠は使用していません。"
    ;;
esac
echo
printf "Enterで閉じます。"
read _
