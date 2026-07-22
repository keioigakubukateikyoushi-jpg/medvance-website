# Curriculum Quality Baseline

計測日: **2026-07-22**  
計測: `node scripts/quality-gate.mjs`

## 要約

| 項目 | 値 |
|---|---|
| カタログ単元 | 388 |
| quality-gate 合格 | **17 / 388** |
| 平均本文実質字数 | **約 775 字**（基準 3000） |
| 旧ラベル「perfect-v1」 | **無効**（骨格のみ揃った状態を誤称していた） |

## 科目別（合格 / 総数 · 平均字数）

| 科目 | 合格/総 | 平均字数 |
|---|---:|---:|
| english-exam | 1/30 | 717 |
| math1-exam | 1/38 | 872 |
| mathA-exam | 0/20 | 684 |
| math2-exam | 0/22 | 638 |
| mathB-exam | 0/14 | 510 |
| math3-exam | 0/18 | 507 |
| physics-exam | 7/26 | 1423 |
| chemistry-exam | 1/27 | 652 |
| biology-exam | 1/29 | 642 |
| interview-exam | 1/18 | 689 |
| essay-exam | 1/18 | 686 |
| japanese-common-exam | 1/15 | 978 |
| social-common-exam | 1/15 | 954 |
| info-common-exam | 1/12 | 1082 |
| advanced/english | 0/10 | 655 |
| advanced/math1 | 1/18 | 845 |
| advanced/math2 | 0/14 | 700 |
| advanced/mathA | 0/12 | 655 |
| elite/english | 0/8 | 672 |
| elite/math | 0/24 | 718 |

## 解釈

- **骨格（章・ID・prereq・ファイルパス）は揃っている**
- **中身は入口ユニット中心。outline はテンプレ shell**
- 以降の進捗は **quality-gate 合格数** と **Blueprint 承認科目数** で測る（ラベルの full 自称は使わない）

## 再計測

```bash
node scripts/quality-gate.mjs
node scripts/curriculum-map-export.mjs --all
```
