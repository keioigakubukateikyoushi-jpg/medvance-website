# Academy 本番デプロイとロールバック

## ロールバック用タグ

| タグ | 意味 |
|------|------|
| `pre-academy-prod` | Academy 投入 **直前** の `master`（戻す先） |
| `academy-prod-v1` | Academy 初回本番デプロイ時点 |

## すぐ戻す（推奨順）

### A. Vercel の直前デプロイに戻す（最速・Gitはそのまま）

1. https://vercel.com で `medvance-website` を開く  
2. **Deployments** → Academy 投入 **前** の Production を選ぶ  
3. **⋯ → Promote to Production**

または CLI:

```bash
cd ~/repos/medvance-website
vercel ls medvance-website
# 戻したい deployment URL を確認して
vercel promote <deployment-url> --scope keioigakubukateikyoushi-3136s-projects
```

### B. Git を Academy 前に戻して再デプロイ

```bash
cd ~/repos/medvance-website
git fetch origin
git checkout master
git pull origin master

# 作業用ブランチに退避してから戻す（履歴を壊さない）
git switch -c rollback/pre-academy
git reset --hard pre-academy-prod
git push -u origin rollback/pre-academy

# master を戻す場合（チーム合意のうえ）
git checkout master
git reset --hard pre-academy-prod
git push origin master --force-with-lease
vercel --prod --yes
```

`--force-with-lease` は共有 `master` を書き換えるので、他に作業中の人がいないときだけ。

### C. コミットだけ打ち消す（履歴を残す）

```bash
git checkout master
git revert --no-commit academy-prod-v1 ^pre-academy-prod
git commit -m "revert: roll back Academy production launch"
git push origin master
```

## 再デプロイ（Academy を戻す）

```bash
git checkout master
git reset --hard academy-prod-v1   # または main の最新
git push origin master --force-with-lease   # 必要な場合のみ
vercel --prod --yes
```

## 環境変数（本番）

| 変数 | 用途 |
|------|------|
| `ACADEMY_ACCESS_SECRET` | 会員Cookie署名 |
| `ACADEMY_MEMBER_CODES` | カンマ区切りアクセスコード |

変更後は再デプロイ不要な場合もあるが、署名秘密を変えると既存Cookieは無効になる。

## 大容量メディア方針

- `lesson.pdf` / 音声 / 動画は git 非管理（`.gitignore`）
- 本文PDFは `/api/academy/pdf/[id]` が Markdown から生成
- ローカル高品質PDFは `node scripts/publish-quality-units.mjs` で再生成
