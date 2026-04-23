# Medvance Access Growth Diagnosis - 2026-04-23

## Sources

- Notion: `直近アクセス分析 & 修正戦略（2026-04-20〜04-23）`
- Notion: `Medvance サイト修復仕様書｜Claude Code / Codex 実行スペック（2026-04-20）`
- Notion: `直近アクセス詳細解析 & 修正案リサーチ（2026-04-13〜04-19）`
- Local repo: `projects/medvance-website`

## Current Diagnosis

The access problem is not a single content-volume issue. The main constraints are:

- Search Console has reported zero impressions/clicks since 2026-04-01, so SEO feedback is effectively unavailable.
- The homepage is a high-share landing page, but the first view previously used abstract copy and sent the secondary CTA to `/about` instead of a lower-friction contact path.
- Referral traffic depends heavily on note.com, while social and organic discovery are weak.
- Contact and article CTA paths existed, but LINE was not consistently available at article mid/footer decision points.
- Old-domain redirects existed for `www.medvance-edu.com` only; `medvance.website` was not covered in the repo.

GitHub Actions is not failing: the 2026-04-23 manual run succeeded and reported GA4 + PageSpeed normally, but Search Console still returned `0` impressions and `0` clicks. That narrows the issue away from a broken workflow and toward Search Console property selection, ownership, service-account permission, sitemap/indexing state, or a genuinely empty property.

Live old-domain check on 2026-04-23:

- `https://medvance.website/pricing` returns `301` to `https://www.medvance.website/pricing`.
- `https://www.medvance.website/pricing` returns `403 Forbidden` from Cloudflare.
- This means code-level redirects help only after the old host reaches the Next/Vercel app. Cloudflare/DNS must also be corrected.

## Changes Made

- Rebuilt the hero copy around concrete proof: `偏差値40→慶應医全勝`, `完全1対1`, and weekly strategy review.
- Added hero CTAs for free strategy diagnosis and LINE questions.
- Added audience split links for high-school seniors, repeat applicants, and parents directly in the first view.
- Added old-domain redirects for `medvance.website` and `www.medvance.website` in both `next.config.ts` and middleware.
- Added `scripts/check-sc-health.mjs` and `npm run sc:health` to diagnose Search Console property, service-account access, and zero-row results.
- Added a non-blocking Search Console health check to the daily analytics workflow.
- Added LINE CTAs to shared article CTA components and a LINE follow-up path after contact submission.
- Added a "相談で分かる3つのこと" block above the contact form.

## Manual Checks Still Required

- In Search Console, verify ownership for `medvance-edu.com` and confirm the service account has access.
- Submit `https://medvance-edu.com/sitemap.xml` again.
- Run URL inspection for `https://medvance-edu.com/`.
- Confirm `medvance.website` is attached to the same Vercel/hosting project or configured at DNS/Cloudflare to redirect to `https://medvance-edu.com`.
- Run `npm run sc:health` with production secrets available.

## Expected Impact

- Homepage visitors should understand the offer, proof, and next action without scrolling.
- LINE becomes the lower-friction conversion path across the top page, floating CTA, article bodies, article footers, and contact completion.
- Search Console failures should surface as operational warnings instead of silently looking like zero SEO demand.
