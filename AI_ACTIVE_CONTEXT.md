# 🤖 AI Assistant Work Handover & Context Sync File (AI_ACTIVE_CONTEXT.md)
*This file serves as a standardized bridge to automatically synchronize task progress, next steps, and operational guidelines between **Claude Code**, **Codex**, and **Antigravity**.*

---

## 📌 Project Overview
* **Project Name**: Medvance Website (React / Next.js 16.2.4 with Turbopack)
* **Workspace Location**: `C:\Users\gvect\projects\medvance-website`
* **Production URL**: [https://medvance-edu.com](https://medvance-edu.com)

---

## 🚀 Active Goals & Task Checklist
- [x] **Ginza Office Address Box Placement Refinement**:
  * Moved office boxes cleanly to the very bottom of the text blocks on the Homepage (`src/app/page.tsx`) and the About page (`src/app/about/page.tsx`).
- [x] **Passionate "生まれた理由" Text Revert**:
  * Reverted "Born Story" copies on both pages back to their original elegant, clean phrasing as requested.
- [x] **Building Name & Floor (N&E BLD.6F) Omitting Rule**:
  * Omitted `N&E BLD.6F` on general UI areas (Home page story box, Home page footer HQ box, About page story box) ➔ `〒104-0061 東京都中央区銀座1丁目12番4号`.
  * Kept the full address ONLY on the official page: Specified Transactions Law page (`src/app/tokushoho/page.tsx`).
- [x] **High-Quality Realistic Photograph Enhancements**:
  * Substituted the dark library/study room image with a beautifully bright, natural-light photorealistic Japanese student image (`private_medical_library_japanese_bright`).
  * Overwrote both `private_medical_library_japanese.png` and `private_medical_library.png` with this bright premium realistic asset to automatically update `/for/saijuken` and the ranking columns.
  * Verified that all premium mockups (tutor team, coaching cycle, parents consultation, custom roadmaps) are beautifully and effectively integrated.
- [ ] **Notion Cram School Info Automatic Page Creation**:
  * Created local template file: `C:\Users\gvect\.gemini\antigravity\brain\28dadac1-a2ba-4aa1-a8b2-180a8837121f\scratch\medvance_notion_cram_school_info.md`
  * Created automated script: `scripts/create-notion-page.mjs`
  * *Next Action*: Add Notion credentials to `.env.local` to trigger automated Notion page creation.

---

## 🛠️ Notion Synchronization & Automation
We have two main Notion automations:
1. **Daily GA4/Search Console Sync (`📊 毎日 GA4 → Notion 同期`)**:
   * Script: `scripts/sync-analytics.mjs`
   * Executed via: GitHub Actions (`sync-analytics.yml`) daily at JST 1:00.
   * Connection Health: **100% Active and Success** (validated via command logs).
2. **Cram School Info Uploader**:
   * Script: `scripts/create-notion-page.mjs` (Uses `@notionhq/client` to push latest pricing/class structures to Notion).
   * Env configuration: Needs `NOTION_API_KEY` and `NOTION_PARENT_PAGE_ID` configured in `.env.local` to run.

---

## 📁 Key File Map
* **Homepage**: `src/app/page.tsx`
* **About Page**: `src/app/about/page.tsx`
* **Spec Transactions (特商法)**: `src/app/tokushoho/page.tsx`
* **Notion Daily Sync**: `scripts/sync-analytics.mjs`
* **Notion Page Creator**: `scripts/create-notion-page.mjs`
* **Daily Workflow**: `.github/workflows/sync-analytics.yml`

---

## 📖 Instructions for Next AI Agent (Claude Code / Codex / Antigravity)
When starting a new session or switching tools, please run this instruction:
1. **Read this file (`AI_ACTIVE_CONTEXT.md`)** to get up-to-speed on the current project milestones and local configurations.
2. **Check `.env.local`** to verify credentials.
3. If the user asks to "Run Notion page sync" or "Upload cram school info to Notion", run the script `scripts/create-notion-page.mjs` using Node.js.
