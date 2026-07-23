# Medvance 教材カバレッジ

> **注意（2026-07-22）**: 以前の「全単元 perfect-v1」表記は誤りでした。  
> 骨格（単元分割・パス）は揃っていますが、**品質ゲート合格は 17/388** です。  
> 正本プロセス: [`docs/curriculum/DESIGN_OS.md`](../../docs/curriculum/DESIGN_OS.md)  
> ベースライン: [`docs/curriculum/BASELINE.md`](../../docs/curriculum/BASELINE.md)

## 完成定義（現行）

機械ゲート `scripts/quality-gate.mjs` に加え、Design OS の Blueprint 承認が前提。

1. 標準セクション（ゴール／位置づけ／前提／ポイント／定義／手順／例A・B／演習／落とし穴／到達チェック）
2. 例題解答が手順レベル（水増し1行禁止）
3. 演習は具体小問≥3・解答つき
4. クイズ5問（日本語・合格4）
5. 台本12ブロック・スライド原稿あり
6. `status: full` はゲート通過後のみ

## マップ（骨格）

| 科目 | ID | 単元 | 講座 | 品質現状 |
|------|-----|------|------|----------|
| 高校英語（受験） | english-exam | 30 | 基礎 | 入口のみ full |
| 高校数学I | math1-exam | 40 | 基礎 | **gate 40/40 full · NLM待ち** |
| 高校数学A | mathA-exam | 20 | 基礎 | outline |
| 高校数学II | math2-exam | 22 | 基礎 | outline |
| 高校数学B（受験） | mathB-exam | 14 | 基礎 | outline |
| 高校数学III（受験） | math3-exam | 18 | 基礎 | outline |
| 高校物理（受験） | physics-exam | 26 | 基礎 | 複数 full（相対的に厚い） |
| 高校化学（受験） | chemistry-exam | 27 | 基礎 | 入口のみ |
| 高校生物（受験） | biology-exam | 29 | 基礎 | 入口のみ |
| 医学部面接 | interview-exam | 18 | 基礎 | 入口のみ |
| 医学部小論文 | essay-exam | 18 | 基礎 | 入口のみ |
| 共通テスト国語 | japanese-common-exam | 15 | 共通 | 入口のみ |
| 共通テスト社会 | social-common-exam | 15 | 共通 | 入口のみ |
| 共通テスト情報 | info-common-exam | 12 | 共通 | 入口のみ |
| 高校英語・発展 | advanced/english | 10 | 発展 | outline |
| 高校数学I・発展 | advanced/math1 | 18 | 発展 | 一部 |
| 高校数学II・発展 | advanced/math2 | 14 | 発展 | outline |
| 高校数学A・発展 | advanced/mathA | 12 | 発展 | outline |
| 英語・難関大 | elite/english | 8 | 難関 | outline |
| 数学・難関大（医含む） | elite/math | 24 | 難関 | outline |

**合計骨格: 388 単元**（中身の完成率は BASELINE を参照）

## 無料お試し

ME-M1-01, ME-EN-01, ME-PH-01, ME-CH-01, ME-BI-01, ME-IV-01, ME-ES-01, ME-JA-01, ME-SO-01, ME-IF-01, ADV-M1-06

## 整備方針

1. 科目 Blueprint（他AI設計＋敵対レビュー）  
2. 単元 full 化（章バッチ）  
3. NLM メディア（full のみ）  

更新: 2026-07-22
