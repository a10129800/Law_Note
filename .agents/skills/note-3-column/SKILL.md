---
name: note-3-column
description: >-
  Creates and maintains modern, high-aesthetic 3-column technical documentation and knowledge base web applications (Pagefy, Mintlify, Stripe Docs, Nextra style). Use this skill whenever the user asks to build, generate, or redesign technical notes, documentation websites, or study guides featuring a left navigation sidebar, center content reader, right dynamic scrollspy table of contents, Cmd+K search modal, dark/light theme, and interactive architecture visualizers.
---

# Note 3 Column - 現代三欄式技術文檔與知識庫 Skill

本 Skill 定義了建立頂級現代技術文檔與知識庫網站（對標 **Pagefy.io / Mintlify / Stripe Docs / Nextra**）的標準架構、元件庫與最佳實踐。

---

## 📐 核心架構：三欄式文檔系統 (3-Column Layout)

當使用者需要製作技術文檔、學習筆記或系統設計知識庫時，必須遵循以下三欄式標準佈局：

```
+-------------------------------------------------------------------------------+
| Header: Brand Logo | [Ctrl+K] Search Trigger | Dark/Light Mode Toggle | GitHub |
+-------------------------------------------------------------------------------+
| Left Sidebar (280-320px)   | Center Main Reader (Flexible)  | Right TOC (240-280px)   |
|                            |                                |                         |
| - Filter Chapters Input    | - Breadcrumb Navigation        | - "On this page"        |
| - Volume / Category Trees  | - Title, Tags & Read Time      | - Scrollspy Indicator   |
| - Collapsible Sections     | - Interactive Visualizer       | - Smooth Scroll Links   |
| - Badges (Core/Hot/New)    | - Deep-dive Sections (H2/H3)   | - Copy Link / Share     |
| - Completion Checkmarks    | - Callout Alerts (Note/Tip)    | - Scroll to Top         |
|                            | - CodeBlocks with Copy Button  |                         |
|                            | - Comparison Tables            |                         |
|                            | - Chapter Bottom Pagination    |                         |
+----------------------------+--------------------------------+-------------------------+
```

---

## 🎨 設計系統規範 (Design Tokens)

必須遵循極致科技感的現代 UI 設計：

1. **色彩配色 (Color Palette)**：
   - **深色模式背景 (預設)**：`#0B0F17` (Obsidian Deep Dark)。
   - **深色表面卡片 (Surface)**：`#101623` 或 `#131926`，搭配細緻邊框 `border-slate-800` (`rgba(255, 255, 255, 0.08)`)。
   - **淺色模式背景**：`#F8FAFC`，表面卡片 `#FFFFFF`，邊框 `border-slate-200`。
   - **主強調色 (Brand)**：Electric Indigo (`#6366F1`) / Violet (`#8B5CF6`)。
   - **語義輔助色**：
     - Success / Core：Emerald (`#10B981`)
     - Warning / Popular：Amber (`#F59E0B`)
     - Critical / Error：Rose (`#F43F5E`)
     - Info / Async：Sky (`#0EA5E9`)
2. **字體 (Typography)**：
   - 內文：`Inter`, `-apple-system`, `sans-serif`。
   - 代碼：`JetBrains Mono`, `Fira Code`, `monospace`。
3. **細節與微互動 (Micro-interactions)**：
   - 發光陰影 (`glow-brand: 0 0 25px -5px rgba(99, 102, 241, 0.3)`)。
   - 精緻自訂捲軸 (`::-webkit-scrollbar` 寬度 6px，圓角膠囊造型)。
   - 代碼塊頂部加入 Mac 視窗風格的三色圓點（紅/黃/綠）與即時複製回饋。

---

## 🛠️ 必備元件清單 (Component Checklist)

建立文檔頁面時，必須包含下列元件：

1. **`Header`**：
   - Logo 品牌圖標帶漸層背景與 Hover 縮放動畫。
   - 全域搜尋框按鈕（顯示 `Ctrl + K` 快捷鍵提示）。
   - 主題切換器（Sun/Moon 圖標切換 `dark` class 與 `localStorage`）。
2. **`Sidebar`**：
   - 即時關鍵字過濾搜尋框 (`sidebarFilterInput`)。
   - 分組折疊目錄（Volume / Category）。
   - 活躍篇章高亮（左側邊框強調色與半透明背景）。
   - 手機版抽屜式滑出選單（帶半透明 Backdrop 點擊關閉）。
3. **`TableOfContents` (TOC)**：
   - 滾動監聽（Scrollspy）：動態計算當前可見之 `h2`/`h3` 標題並高亮右側對應錨點。
   - 點擊平滑滾動（Smooth Scroll）。
   - 快捷功能：「複製頁面連結」、「回到頂部」。
4. **`InteractiveScalingSim` / `InteractiveVisualizer` (亮點功能)**：
   - 步進式或滑桿互動控制台。
   - 即時架構圖動態點亮對應節點。
5. **`Callout`**：
   - 提供 `note`、`tip`、`warning`、`important` 樣式。
6. **`CodeBlock`**：
   - 包含語言標籤、檔案名稱、語法背景與一鍵複製（Copy to Clipboard）。
7. **`SearchModal`**：
   - 全域快捷鍵 `Ctrl+K` 或 `⌘K` 喚醒。
   - 支援鍵盤上下鍵導航 (`↑` `↓`)、`Enter` 選取跳轉、`ESC` 退出。
8. **`ChapterPagination`**：
   - 篇章底部卡片式「上一篇」與「下一篇」導航。

---

## 🚀 交付與生成標準流程

當使用者要求使用此 Skill 產出文檔或筆記頁面時，請執行：

1. **確立章節資料結構**：
   - 規劃大綱章節清單。
   - 提取各節之 `id` 供 TOC Scrollspy 綁定。
2. **產生雙重交付成果**：
   - **標準工程版**：Next.js 14+ (App Router) 模組化組件。
   - **即開即用版 (`preview.html` / `note_3column.html`)**：零環境依賴的單檔 HTML，整合 Tailwind CDN、SVG 圖標、Scrollspy、搜尋彈窗與深淺主題，確保使用者雙擊即可驗收。
3. **驗證清單**：
   - [ ] 深色/淺色模式切換是否無閃爍？
   - [ ] 滾動頁面時，右側 TOC 是否精確跟隨標題切換？
   - [ ] 點擊 `Ctrl+K` 是否能喚出搜尋彈窗？
   - [ ] 代碼塊的複製按鈕是否正常運作？
   - [ ] 手機尺寸下左側目錄是否能收合至漢堡選單？
