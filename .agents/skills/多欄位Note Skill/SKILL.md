---
name: 多欄位Note-Skill
description: >-
  多欄位Note Skill：嚴格依據書本內容整理筆記，建置現代高質感多欄位漸進閱讀器。
  包含書籍主頁（書本資訊卡片、3D 封面圖與精選插圖展示）、本篇導論與巢狀章節閱讀（點選章節前隱藏其餘內容與右側清單，點選章節後跳轉內文並吸頂顯現右側小節清單）。
  適用於法律筆記、教科書導讀、技術文檔與各類學術知識庫之系統化建置。
---

# 多欄位Note Skill (教材依據型多欄位漸進閱讀器規範)

本 Skill 專門用於指導 Agent 遵循**「嚴格依據書本內容整理，絕不自行查找腦補」**的核心原則，建置具備現代高質感（Pagefy / Mintlify / Stripe Docs 風格）的多欄位筆記閱覽器。系統包含**「書籍主頁（展示書本資訊、封面與插圖）」**、**「本篇導論」**與**「章節內文」**，並完整實踐**「漸進式揭露（Progressive Disclosure）」**的互動體驗。

---

## 核心工作法則 (Core Principles)

### 1. 嚴格書本依據原則 (Strict Textbook Fidelity)
- **禁止自行查找或預填學說**：嚴禁在未收到使用者提供的課本內文前，依據外部資料庫或 AI 自身記憶預先撰寫或腦補學說內容。
- **逐字逐頁精確核對**：收錄之導讀、引言、定義與案例必須標註教材頁碼（例如：第 XVIII-1 頁、第 1-1 頁），原文忠實呈現。
- **插槽保留機制**：若使用者尚未提供某一章節內文，應在中欄保留優雅的「待填入插槽卡片」，絕不隨意填充假資料。

### 2. 書籍主頁與書本資訊／圖片展示規範 (Book Home & Media Showcase Standard)
每一套知識庫或筆記閱覽器，皆必須在左側目錄頂端設有專屬的**「🏠 書籍主頁 (Home)」**，集中呈現書籍基本資料與視覺形象：
- **書本中繼資料 (Book Metadata) 標準欄位**（以實例《刑法總則【圖說系列】》為基準）：
  1. **書名**：`刑法總則【圖說系列】`
  2. **副標題／外文名**：`Strafrecht`
  3. **作者／編著者**：`陳奕廷(易律師) 編著`
  4. **系列別**：`律師／司法三等／法研所`
  5. **出版社**：`高點 (高點法學系列)`
  6. **出版日期**：`2022／10／31`
  7. **國際標準書號 (ISBN)**：`9786263342880`
  8. **書號／代碼**：`L602210`
  9. **三大編排特色標語**：
     - `概念圖示・清晰易懂`
     - `重點彙整・深入淺出`
     - `例題研究・必勝關鍵`
- **書籍圖片與視覺展示 (Book Artwork & Illustrations)**：
  1. **立體質感書封 (3D Perspective Cover)**：
     - 書封外觀採用具備立體景深（`perspective: 1200px`、深層陰影）、微光澤邊框與書脊光澤之展示容器。
     - **自訂圖片插槽**：預設使用 `<img>` 標籤載入本機或上傳圖片（如使用者上傳之實體書封）。
     - **優雅降級佔位 (Graceful Fallback)**：當實體圖片檔案載入中或無法載入時，自動展示高質感之「CSS 漸層立體擬真書封」，帶有燙金標題、版次徽章與裝訂折痕陰影。
  2. **核心架構插圖與圖解藝廊 (Book Illustrations Grid)**：
     - 在主頁下方設有「書籍核心圖解與架構預覽」區塊，放置書中重點圖解（如圖 1-1、圖 1-2），點擊可直接跳轉至對應章節錨點。

### 3. 漸進式閱讀與三態視圖控制原則 (Progressive Disclosure)
閱覽器採用三態式視圖切換機制：

```text
狀態 0: 書籍主頁 (Home)    --> 狀態 1: 本篇導論 (Intro)    --> 狀態 2: 章節內文 (Chapter 1, 2...)
[中欄: 書籍資訊 + 封面插圖]    [中欄: 僅顯示本篇導讀原文]      [中欄: 章節內文與圖解詳解]
[右側 TOC: 完全隱藏]           [右側 TOC: 完全隱藏]            [右側 TOC: 吸頂顯現，跟隨高亮]
```

- **【狀態 0 - 書籍主頁 (`home`)】**：
  - **左側選單**：高亮「🏠 書籍主頁」（柔和淺藍底、深藍字）。
  - **中欄閱讀區**：展示書籍資訊看板、3D 封面圖、特色亮點與快速進入按鈕（「🚀 開始閱讀第一章」、「📖 查看本篇導論」）。
  - **右側清單**：**完全隱藏**，維持極簡專注的主頁視覺。
- **【狀態 1 - 本篇導論 (`intro`)】**：
  - **左側選單**：高亮「📖 導論 篇名」。
  - **中欄閱讀區**：**僅顯示導論／本篇導讀原文**，不出現其餘章節或未解鎖內容，維持無干擾的極簡閱讀環境。
  - **右側清單**：**完全隱藏**，避免讀者在未進入內文時看到空白或過早的章節目錄。
- **【狀態 2 - 點按章節（如「第一章 犯罪的概念」）後】**：
  - **左側選單**：高亮對應章節名稱。
  - **中欄閱讀區**：平滑切換至章節內文，頂部具備麵包屑導航與「← 返回主頁」、「← 返回導讀」連結。
  - **右側清單**：**同步顯現**（在桌面端右側展開章節 TOC 清單，支援平滑滾動至各段落錨點與回到頂部）。
- **【點按「返回導讀」或「返回主頁」】**：
  - 頁面即刻回退至對應視圖，右側清單再次自動隱藏。

### 4. 左側目錄階層樹與子目錄樣式規範 (Sidebar Hierarchical Tree & Sub-Directory Standard)
為了清楚呈現教科書或技術文檔「篇章 ➔ 巢狀子章節」的隸屬關係，左側目錄選單必須符合現代文檔庫（Mintlify / Stripe Docs 風格）之階層樹狀規範：
- **父層單元（Parent Unit / Preface / Part）**：
  - 例如「導論 犯罪概念與論罪結構」，字體採用較大粗體（`text-[14px]` 或 `text-[14.5px]`、`font-bold`），搭配單元圖示（如 `📖` 或 `📂`），作為目錄分組大綱。
- **子章節／子項目（Sub-Chapters / Nested Items）**：
  - 例如「第一章 犯罪的概念」、「第二章 刑法的論罪結構」：
  - **字體縮小**：字級一律縮小為 **`text-[13px]`**（精緻小巧，與父層形成明確主從視覺差）。
  - **縱向樹狀分支引導線 (Tree Line)**：子目錄容器外圍必須加上 **`ml-4 pl-3 border-l-2 border-slate-200 dark:border-slate-800/80`**，形成清晰的分支導引線。
  - **子節點指示圓點 (Item Dot Indicator)**：每個子章節按鈕前端必須配置微型圓點指示符號（如 `w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-slate-700 group-hover:bg-blue-500`），選中或懸停時連動發光高亮。
  - **緊湊微邊距**：邊距調整為 `py-1.5 px-2.5 rounded-lg`，避免按鈕尺寸過大而喧賓奪主，維持極簡專注的子目錄質感。

### 5. 現行法規核對與出處標註原則 (Statutory Currency & Official Sourcing)
- **實質查核現行法規**：當使用者要求查找現行法規有無更動時，必須實際查核全國法規資料庫、立法院法律系統與重大憲法法庭判決。
- **卡片下方標準化備註**：在每個案例或法條卡片下方，必須增設專屬「法規查核區塊」：
  1. **現行狀態徽章**：明確標註「條文無更動（維持現行法）」或「條文文字未動・受憲法裁判重大拘束」或具體修正內容。
  2. **條文精準內容**：摘錄現行法規核心文字與法理要旨。
  3. **周邊連動修正與司法判決**：補充民法成年年齡下修、保安處分修正（如刑法 § 87）、憲法法庭裁判（如 113 年憲判字第 8 號）等重大實務進展。
  4. **權威官方出處**：直接附上全國法規資料庫、憲法法庭或立法院官方連結。

### 6. DOM 結構閉合完整性與視圖容器獨立性原則 (HTML Tag Integrity & Blank Screen Prevention)
- **嚴防未配對或多餘閉合標籤（Stray Closing Tag Trap）**：
  - 嚴禁在案例或段落卡片結尾遺留多餘的 `</div>`！
  - 一旦內文中出現多餘的 `</div>`，瀏覽器會提前閉合中央 `<main>` 與最外層三欄網格容器 `.app-layout-container`。
  - **災難後果**：右側清單 `#rightTocAside` 會被踢出三欄網格容器外，淪為頁面底部的普通全寬區塊，導致右側清單「掉落至頁面下方或左下角橫向展開，無法吸頂跟隨」。
  - **結構鐵律**：`.app-layout-container` 內部**必須且只能**存在 3 個一級子節點：
    - 節點 1：`aside#sidebar`（左側目錄）
    - 節點 2：`main`（中央主閱讀區）
    - 節點 3：`aside#rightTocAside`（右側章節清單）
- **小節內部標籤配對自檢（Section & Card Tag Balance Check）**：
  - 教材各小節常包含豐富的案例、三階拆解、法條對比表格與邏輯推導卡片，HTML 巢狀深度常達 4～6 層（如 `<section> > div.p-6 > div.space-y-6 > div.grid > div.p-5`）。
  - **鐵律**：在結束該小節並開始下一個 `<section>` 之前，必須精確核對並閉合所有開啟的內部 `<div>` 以及外層 `<section>`。
  - **「內文沒東西 / 黑畫面」之致命根因警示**：
    - 若某一小節（如 Section 5）結尾少寫了 `</div>` 與 `</section>`，瀏覽器解析引擎**不會拋出報錯**，而是會自動將後續的小節甚至後續篇章的獨立視圖（如 `#viewChapter2`、`#viewPart0` 等）全部當作該未閉合段落的內部子元素！
    - **災難後果**：當讀者切換章節時，JavaScript 執行 `viewChapter2.classList.add('hidden')`，由於後續視圖被誤解析在內部，其父層受 `display: none` 影響，**連帶使子視圖全數隱藏，造成中央主閱讀區一片漆黑、完全無內容顯示（「內文沒東西？」）**！
  - **防範檢查規程**：
    1. 每個 `<section>` 必須有且僅有 1 個對應的 `</section>`，且該節內部的所有卡片容器必須在 `</section>` 前全數閉合。
    2. 新增或修訂任何章節段落後，必須確認所有 `<div id="viewXXX">` 彼此為 `<main>` 的平級兄弟節點（Direct Siblings），絕不允許相互巢狀包覆。

### 7. 母篇章（Part / Division）與「本篇導讀 (Conducted Read)」標準規範 (Conducted Read Standard Specification)
教科書除全書開篇「導論」外，通常依體系劃分為若干母篇章（例如「第零篇 刑法的運作、操作原理與法律效果」、「第一篇 犯罪論」等）。每篇在進入具體分章前，均設有「本篇導讀」：
- **左側目錄之母篇章與導讀子項目**：
  - **母篇章標題按鈕**（如 `navBtnPart0`）：採用較大粗體（`text-[14px]`、`font-bold`），點擊可直接跳轉該篇導讀。
  - **本篇導讀子按鈕**（如 `navBtnPart0Intro`）：縮排收納於子樹狀引導線內（`ml-4 pl-3 border-l-2`），字級 `text-[13px]`，配置子節點微型圓點指示符，名稱統一定為 **`本篇導讀 (Conducted read)`**。
- **中央主閱讀區之「本篇導讀」專用視圖容器規範**：
  - **視圖容器命名**：`#viewIntro`（導論）、`#viewPart0`（第零篇）、`#viewPart1`（第一篇）等。
  - **上方專業徽章**：必須置放微型等寬英文徽章 **`PREFACE • CONDUCTED READ`**（`text-xs font-mono text-blue-600 dark:text-blue-400 font-bold uppercase tracking-wider`）。
  - **篇章大標題**：採用醒目大字（`h2`，`text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight`）。
  - **本篇導讀原文卡片 (Conducted Read Card)**：
    - 容器外框：`p-6 sm:p-8 rounded-3xl border-2 border-blue-500/30 bg-white dark:bg-[#101623] shadow-sm space-y-4`。
    - 卡片頂部欄：包含 `📖 本篇導讀 (Conducted Read)`（`text-base sm:text-lg font-bold`）與精確教材頁碼標籤（如 `第 0-1 頁`、`第 XVIII-1 頁`，樣式：`text-[10px] font-mono px-2 py-0.5 rounded bg-blue-500/10 text-blue-500 dark:text-blue-400 font-bold`）。
    - 原文引用區：使用 `blockquote` 搭配左側粗邊線（`border-l-4 border-blue-500 pl-4 py-1 text-sm sm:text-base text-slate-700 dark:text-slate-200 leading-relaxed italic`），完整忠實呈現作者課本原文，嚴禁任意刪減或自撰。
- **沉浸導讀原則（導讀狀態右側 TOC 隱藏）**：
  - 在所有「本篇導讀」狀態下（如 `#intro`, `#part-0` 等），**右側 TOC 清單必須嚴格隱藏（`display: none !important`）**，避免讀者在未正式進入章節內文前看到零散或空白的小節目錄，維持最高專注度的導讀體驗。
  - 唯有讀者點擊第一章、第二章等具體子章節時，右側清單才動態吸頂顯現。

### 8. 旗艦核心原則卡片與小白白話文排版規範（圖二標準規範 - Image 2 Standard）
教材各章節之核心法定定義、帝王法條（如刑法第 1 條罪刑法定原則、第 12 條故意既遂原則）、深奧學理或重大爭點，必須嚴格遵循「圖二」旗艦級視覺排版規範，包含**「外層大容器」**、**「旗艦核心原則天藍卡片」**與**「🐣 小白秒懂專區」**雙核心架構：

#### (1) 視覺階層架構規範
- **外層大卡片容器（Outer Card Wrapper）**：
  - 統一採用 `p-6 rounded-3xl border border-slate-200 dark:border-white/[0.08] bg-white dark:bg-[#101623] shadow-sm space-y-6`，作為標準三欄閱覽器的大白底基底。
- **核心原則旗艦天藍大卡（Flagship Principle Banner Card）**：
  - **飽滿漸層與立體主軸**：`p-6 rounded-2xl bg-gradient-to-br from-sky-100 via-blue-50 to-indigo-100 dark:from-[#082f49] dark:via-[#0c4a6e]/70 dark:to-[#0f172a] border-2 border-sky-400 dark:border-sky-500/80 border-l-[8px] border-l-blue-600 dark:border-l-sky-400 shadow-lg shadow-sky-500/15 space-y-5`。
  - **標頭列（Header Row）**：左側包含主題圖示（`📜`）、中文粗體大標題與德/英/拉丁文等寬副標（`text-[11px] font-mono font-bold tracking-wider uppercase`）；右側配置可點擊的原地法條膠囊（`data-statute="XX"`，藍色實心底）與原則金徽章（`bg-amber-500`）。
  - **核心明文卡（Core Text Card）**：純白高對比底色（`bg-white dark:bg-slate-900 border-2 border-blue-400/80 border-l-4 border-l-blue-600 shadow-md`），配置**動態呼吸訊號燈**（`w-2 h-2 rounded-full bg-blue-600 animate-pulse`）與法條金句明文。
  - **歷史與教義暖金卡（Doctrine Amber Card）**：暖金橙黃漸層（`bg-gradient-to-r from-amber-100 via-amber-50 to-yellow-50 dark:from-amber-950/70 border-2 border-amber-400 border-l-4 border-l-amber-600`）搭配 `blockquote` 與 **2~6 格典型範例卡網格**（如英美法重罪 6 格典型犯罪卡：謀殺、強制性交、強盜、夜間侵入住宅、惡意傷害、放火）。
  - **體系分野對照卡（Bipolar Dual Cards）**：藍色系（客觀該當性・既遂・外在事實）vs 紫色系（主觀該當性・故意・內心惡念）雙欄卡片。
- **🐣 小白秒懂專區・白話文大翻譯（Beginner Translation Section）**：
  - **底色與立體主軸**：`rounded-2xl p-5 sm:p-6 bg-gradient-to-br from-amber-50 via-orange-50/80 to-yellow-100 dark:from-[#2a1c0c] border-2 border-amber-400 dark:border-amber-500 border-l-[8px] border-l-amber-500 shadow-md shadow-amber-500/10 space-y-4`。
  - **標頭列**：彈跳小雞動畫（`🐣 animate-bounce`）搭配「💡 零基礎秒懂專區 • 白話文大翻譯」漸層徽章與痛點問句。
  - **一句話大白話翻譯金句框**：純白高對比框 + 粗體螢光底線（`underline decoration-amber-400`）。
  - **趣味日常比喻**：例如打靶瞄準與正中紅心、點餐、開車等貼近日常生活的生動情境。
  - **小白必懂雙門檻白話拆解**：將冷硬法條轉譯為「壞事真的做成了」與「心裡清清楚楚就是要幹」兩大白話要件。

#### (2) 完整 HTML 程式碼標準模板
```html
<div class="p-6 rounded-3xl border border-slate-200 dark:border-white/[0.08] bg-white dark:bg-[#101623] shadow-sm space-y-6">
  
  <!-- 1. 核心原則旗艦天藍導航大卡 -->
  <div class="p-6 rounded-2xl bg-gradient-to-br from-sky-100 via-blue-50 to-indigo-100 dark:from-[#082f49] dark:via-[#0c4a6e]/70 dark:to-[#0f172a] border-2 border-sky-400 dark:border-sky-500/80 border-l-[8px] border-l-blue-600 dark:border-l-sky-400 shadow-lg shadow-sky-500/15 space-y-5">
    
    <!-- 標頭列 -->
    <div class="flex items-center justify-between flex-wrap gap-2">
      <div class="flex items-center gap-2.5">
        <span class="text-2xl drop-shadow-sm">📜</span>
        <div>
          <span class="font-black text-sm sm:text-base text-blue-950 dark:text-sky-100 tracking-wide">原則／概念核心名稱</span>
          <span class="block text-[11px] font-mono font-bold text-blue-700 dark:text-sky-300 tracking-wider uppercase">LATIN / GERMAN SUBTITLE</span>
        </div>
      </div>
      <div class="flex items-center gap-2">
        <span data-statute="條號" class="text-xs font-mono font-black px-3 py-1 rounded-lg bg-blue-600 hover:bg-blue-700 text-white shadow-sm border border-blue-400 cursor-pointer transition-all hover:scale-105 active:scale-95 flex items-center gap-1">
          <span>§</span> 刑法第 XX 條
        </span>
        <span class="text-xs font-mono font-black px-3 py-1 rounded-lg bg-amber-500 text-white shadow-sm border border-amber-300 flex items-center gap-1">
          <span>⚖️</span> 核心原則
        </span>
      </div>
    </div>

    <!-- 核心明文卡片 + 呼吸燈 -->
    <div class="p-4 sm:p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-blue-400/80 dark:border-blue-700/80 border-l-4 border-l-blue-600 shadow-md space-y-2">
      <div class="flex items-center justify-between text-xs font-mono border-b border-blue-100 dark:border-slate-800 pb-2">
        <span class="font-bold text-blue-800 dark:text-blue-300 flex items-center gap-1.5">
          <span class="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
          核心立法處罰原則
        </span>
        <span class="px-2 py-0.5 rounded bg-blue-100 dark:bg-blue-900/60 text-blue-800 dark:text-blue-200 font-bold text-[11px]">★ 刑法典原型</span>
      </div>
      <p class="text-base sm:text-lg md:text-xl font-black text-blue-950 dark:text-blue-50 leading-relaxed font-serif tracking-wide py-1">
        「核心法定原則引言明文」
      </p>
    </div>

    <!-- 歷史教義暖金卡 + 典型範例格 -->
    <div class="p-4 sm:p-5 rounded-xl bg-gradient-to-r from-amber-100 via-amber-50 to-yellow-50 dark:from-amber-950/70 border-2 border-amber-400 dark:border-amber-500/80 border-l-4 border-l-amber-600 shadow-sm space-y-3 text-xs sm:text-[13px]">
      <div class="flex items-center justify-between font-bold text-amber-900 dark:text-amber-200 border-b border-amber-200/80 pb-1.5">
        <span class="flex items-center gap-1.5"><span>🏛️</span><span>構成要件本質／學理源起</span></span>
        <span class="font-mono text-[11px] px-2 py-0.5 rounded bg-amber-200/80 text-amber-950 font-bold">歷史典型</span>
      </div>
      <blockquote class="italic text-amber-950 dark:text-amber-100 leading-relaxed pl-3 border-l-2 border-amber-500 font-serif">
        「課本原文論述或重要釋字理由書摘錄」
      </blockquote>
      <!-- 典型範例格（超高對比極清灰色卡片） -->
      <div class="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-1 text-xs">
        <div class="p-3 rounded-xl bg-slate-100 hover:bg-slate-200/80 dark:bg-slate-800/90 dark:hover:bg-slate-750 border-2 border-slate-300 dark:border-slate-600 hover:border-slate-400 dark:hover:border-slate-500 text-center shadow-xs transition-all">
          <span class="block text-red-600 dark:text-red-400 font-black text-sm mb-1.5 tracking-tight">典型罪名 1 (例如：謀殺)</span>
          <span class="inline-block text-xs text-slate-800 dark:text-slate-100 font-bold px-2 py-0.5 rounded-md bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-600 shadow-2xs">核心侵害重點</span>
        </div>
        <!-- ... 其餘典型格 (皆採 bg-slate-100, border-2 border-slate-300, 粗黑字體與白底清晰膠囊) -->
      </div>
    </div>

    <!-- 雙欄體系對照卡 -->
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
      <div class="p-3.5 rounded-xl bg-white dark:bg-slate-900 border-2 border-blue-400/80 border-l-4 border-l-blue-600 shadow-xs space-y-1.5">
        <div class="text-xs font-bold text-blue-800 dark:text-blue-300 flex items-center justify-between">
          <span>🔵 客觀該當性</span>
          <span class="font-extrabold text-blue-700 text-[11px] px-2 py-0.5 bg-blue-50 rounded-md">既遂</span>
        </div>
        <p class="text-xs sm:text-sm text-slate-800 dark:text-slate-100 font-medium leading-relaxed pt-0.5">
          外在世界實行了構成要件該當行為，且<span class="font-bold text-blue-800 dark:text-blue-200 bg-blue-50 dark:bg-blue-950/80 px-1 py-0.5 rounded border border-blue-200">法益侵害結果完全發生</span><span class="text-rose-600 font-bold ml-1">（例如人死亡）</span>。
        </p>
      </div>
      <div class="p-3.5 rounded-xl bg-white dark:bg-slate-900 border-2 border-indigo-400/80 border-l-4 border-l-indigo-600 shadow-xs space-y-1.5">
        <div class="text-xs font-bold text-indigo-800 dark:text-indigo-300 flex items-center justify-between">
          <span>🟣 主觀該當性</span>
          <span class="font-extrabold text-indigo-700 text-[11px] px-2 py-0.5 bg-indigo-50 rounded-md">故意</span>
        </div>
        <p class="text-xs sm:text-sm text-slate-800 dark:text-slate-100 font-medium leading-relaxed pt-0.5">
          行為人內心<span class="font-bold text-indigo-900 dark:text-indigo-200 bg-indigo-50 dark:bg-indigo-950/80 px-1 py-0.5 rounded border border-indigo-200">明知並有意使其發生</span><span class="font-mono font-bold text-indigo-700">（刑法第 13 條第 1 項）</span>，具備<span class="font-bold text-purple-700 bg-purple-50 px-1 py-0.5 rounded border border-purple-200">實質主觀惡性</span>。
        </p>
      </div>
    </div>

  </div>

  <!-- 2. 🐣 小白秒懂專區・白話文大翻譯 -->
  <div class="rounded-2xl p-5 sm:p-6 bg-gradient-to-br from-amber-50 via-orange-50/80 to-yellow-100 dark:from-[#2a1c0c] border-2 border-amber-400 dark:border-amber-500 border-l-[8px] border-l-amber-500 shadow-md shadow-amber-500/10 space-y-4">
    <div class="flex items-center justify-between flex-wrap gap-2 border-b border-amber-200 pb-3">
      <div class="flex items-center gap-2">
        <span class="text-2xl animate-bounce">🐣</span>
        <div>
          <div class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-white text-[11px] font-black shadow-xs">
            <span>💡 零基礎秒懂專區</span><span>•</span><span>白話文大翻譯</span>
          </div>
          <h4 class="text-base sm:text-lg font-black text-amber-950 dark:text-amber-100 pt-0.5">到底什麼是...？</h4>
        </div>
      </div>
    </div>
    <!-- 一句話白話金句 + 生活日常比喻 + 雙門檻拆解 -->
  </div>

</div>
```


### 9. UTF-8 檔案編碼防護與母本同步安全原則 (UTF-8 Integrity & Master Sync Principle)
- **純 UTF-8 無 BOM 鐵律（Anti-Mojibake Shield）**：
  - 專案內所有 HTML、Markdown、JS、CSS 檔案必須始終保持標準 UTF-8 編碼。
  - 嚴防在 Windows 繁體中文環境下因 ANSI / Big5 (CP950) 判定衝突導致繁體中文字元裂解為菱形問號（`` Mojibake）。
- **雙重母本備援與安全同步架構（Master Sync Architecture）**：
  - 系統必須維護一組乾淨、無損的母本檔案（如 `visual.html` 為乾淨 UTF-8 母本）。
  - 所有建置與自動推送批次檔（如 `copy_cover_and_push.bat`）**同步方向必須嚴格鎖定由乾淨母本向目標檔覆蓋**（即 `copy /y visual.html index.html`），嚴禁未經編碼驗證之暫存檔逆向覆蓋母本。
  - 專案根目錄必須常備一鍵還原批次檔 `restore_index.bat`，若瀏覽器出現編碼暫態異常，讀者可雙擊一鍵無損秒級還原。

### 10. 法條原地指引卡片與零干擾防截斷規範 (Unobtrusive Statute Popover & Anti-Truncation Standard)
法條原地懸浮預覽旨在為讀者提供即時法理對照，但絕不能犧牲閱讀的流暢與版面的乾淨。必須嚴格恪守以下準則：
- **禁止正文貪婪掃描與底線雜訊污染（Zero Prose Clutter Principle）**：
  - 嚴禁用正則表達式遍歷內文所有 `span, a, strong, div` 節點自動套用虛線底線！這會使引言、標題、正文充滿突兀的點狀下劃線，破壞整齊度與排版美感。
  - **精準綁定鐵律**：事件監聽僅能鎖定「專屬案例卡片標頭膠囊徽章（如 `data-statute="刑法第16條"`）」或法規出處按鈕，維持內文閱讀區 100% 純淨無雜訊。
- **懸停防誤觸延遲機制（Desktop Hover Debounce）**：
  - 桌面端懸停觸發必須加入 **200~260ms** 的防誤觸計時器（`hoverTimer`）。
  - 當滑鼠只是快速劃過頁面時，卡片絕不突兀閃爍跳出；唯有讀者目光停留並刻意懸停時，才優雅淡入。
- **雙端響應式分流（Mobile Bottom Sheet vs. Desktop Floating Card）**：
  - **桌面端（`>= 768px`）**：採絕對定位懸浮卡片，最大寬度擴增至 **`max-w-[27rem]`（432px）**，確保長法條標題與階層徽章能從容舒展，不顯擁擠。
  - **行動端（`< 768px`）**：嚴禁在手機中央彈出懸浮窗！必須全面轉為標準的**「底部滑出抽屜式面板（Bottom Sheet）」**（`fixed inset-x-0 bottom-0`），配合全螢幕半透明毛玻璃遮罩（`backdrop-blur-sm bg-black/50`）與顯眼的專屬 `✕` 關閉按鈕，點擊遮罩或按鈕即刻向下滑出收起。
- **雙層頂部標頭與徹底防截斷規範（Two-Tier Anti-Truncation Standard）**：
  - 針對長法條名稱（如《刑法第 16 條【禁止錯誤／違法性錯誤】》），**嚴禁在單一行內擠入「圖示 + 標籤 + 標題 + 關閉按鈕」並施加 `truncate` 導致字尾被「...」無情裁切**！
  - **標準雙層版面結構**：
    - **第 1 層（輔助分類與操作列）**：左側放置法規圖示（`📜`）與彩色階層審查徽章（如 `罪責階段審查`）；右側放置顯眼的關閉按鈕（`✕`）。
    - **第 2 層（完整法定標題列）**：獨立成專屬整行，寬度滿版（`w-full`），標題標籤使用 **`h4.break-words.leading-snug`**，**絕對禁止使用 `truncate`**！確保長法條標題在手機與電腦端 100% 完整無漏展示。

### 11. 全域極速智慧搜尋系統規範 (Global Fast Search Standard - Ctrl+K)
知識庫文檔龐大時，必須為讀者提供秒級直達的智慧檢索中心：
- **全域快捷鍵召喚（Shortcut Binding）**：全域監聽 `Ctrl + K` 與 `Cmd + K`，亦在頂部導航列常駐搜尋入口按鈕，點擊即喚醒毛玻璃全螢幕搜尋浮層（Search Modal）。
- **四象限即時分類過濾膠囊（Filter Pills）**：
  - 搜尋列下方提供微型分類過濾標籤：`全部`、`⚖️ 案例`、`📜 法條`、`💡 核心學說`。
  - 支援點擊即時重篩，亦支援關鍵字模糊加權比對（標題、副標、關鍵爭點與法條條號）。
- **全鍵盤無障礙導航（Keyboard Accessibility）**：
  - 支援 `↑` / `↓` 鍵上下巡覽搜尋結果項目，被選中項目高亮凸顯；按下 `Enter` 鍵直接跳轉。
  - 按下 `Escape` 鍵或點擊遮罩即刻平滑關閉。
- **搜尋目標脈衝光暈導引（Search Target Pulse Glow）**：
  - 跳轉至目標案例或小節卡片時，系統自動將該卡片平滑滾動至螢幕正中央（`scrollIntoView({ behavior: 'smooth', block: 'center' })`）。
  - 目標元素自動注入專屬脈衝光暈 class（`.search-target-highlight`），觸發持續 **2.5 秒**的呼吸動態微光（外發光天藍色光暈與微浮放效果），讓讀者在滿版文字中瞬間鎖定答案，隨後光暈優雅自然消退。

### 12. 案例爭點一鍵導出與雙鏈筆記格式規範 (One-Click Note Export & Anki/Notion Formatting)
教科書的案例與爭點是考生與法律學習者的核心記憶資產，必須支援一鍵轉換為個人筆記：
- **案例標頭專屬動作鈕**：在每個案例卡片右上角配置低調精緻的「`📋 複製筆記`」操作按鈕。
- **標準化 Markdown 雙鏈筆記排版**：導出格式必須兼顧 Anki 卡片正面/背面、Notion 雙欄與 Obsidian 雙鏈語法：
  - `# ⚖️ 【案例 1-1】案例名稱`
  - `> 📖 出處：陳奕廷《刑法總則【圖說系列】》第 X-X 頁`
  - `## 📌 案件事實`：摘錄精簡事實。
  - `## 🔍 階層審查與核心爭點`：條列構成要件、違法性、罪責各階段審查結論。
  - `## 💡 考點速記口訣`：記憶公式與關鍵法理推導。
  - `## 📜 關聯法條`：列出關聯條號（如 `[[刑法第16條]]`）。
- **即時微互動反饋（Micro-Feedback）**：
  - 點擊後剪貼簿複製成功，按鈕文字與圖示暫態切換為「`✓ 已複製`」並變換亮色。
  - 同步於頁面右下角彈出精緻微型 Toast 提示通知（「已複製案例爭點筆記至剪貼簿」），維持 3 秒後平滑淡出。

### 13. 深層研讀進度可視化與章節分頁規範 (Reading Progress & Pagination Standard)
針對長篇學術知識庫，消除讀者進度迷失感並提供體系化沉浸導引：
- **頂部黏性進度微流光（2.5px Sticky Progress Bar）**：
  - 緊貼於頂部導航列下沿，高度為極細緻之 `2.5px`。
  - 隨頁面垂直滾動距離即時計算讀取百分比，採用柔和漸層（如天藍至青藍），微光流動，絕不阻擋任何文字點擊。
- **右下角懸浮環形進度回到頂部按鈕（Circular Progress FAB）**：
  - 右下角常駐 48x48px 晶體圓形按鈕，內嵌 SVG 環形進度軌道（直徑 40px，圓周長精確定為 `125.66px`）。
  - 當滾動深度小於 300px 時優雅隱藏；超過 300px 時平滑縮放浮現。
  - 平時以動態圓弧勾勒當前篇章研讀百分比，滑鼠懸停時中心箭頭平滑漸變為「數字百分比（如 `78%`）」，點擊後平滑滾動回頂。
- **章節底端雙向導航分頁卡片（Two-Way Pagination Cards）**：
  - 在所有主閱讀視圖（書籍主頁、導論、第一章、第二章）正文最底端，固定配置寬版雙向分頁導航卡片。
  - 左側為「← 上一單元」、右側為「下一單元 →」，內含單元識別微標籤、單元大標題與互動懸停位移動畫，引導讀者循序漸進完成整部知識庫之體系化研讀。

### 14. 案例導航控制台高彩度高對比與存在感規範 (Vibrant High-Contrast Case Navigator Console Standard)
教科書案例眾多時，章節上方常需配置專屬的「案例導航與研讀控制台」。為了徹底杜絕「底色過淡、邊框太細，容易被誤認為空白或忽略」的反饋，必須遵循以下高彩度存在感規範：
- **拒絕死白與低對比淡漸層（Anti-Washed-Out Principle）**：
  - 嚴禁使用如 `from-slate-100 to-indigo-50/60` 等在淺色螢幕上趨近於純白（`#f8fafc`）的低對比漸層！這會使控制台喪失實體卡片感，淪為難以辨識的灰白邊線。
  - **飽和雙色階漸層**：
    - 法定阻卻違法（翡翠綠）：`linear-gradient(135deg, #dcfce7 0%, #ecfdf5 45%, #d1fae5 100%) !important;`
    - 超法定阻卻違法（皇家靛藍）：`linear-gradient(135deg, #e0e7ff 0%, #eef2ff 45%, #ede9fe 100%) !important;`
    - 阻卻罪責（琥珀金）：`linear-gradient(135deg, #fef3c7 0%, #fffbeb 45%, #fde68a 100%) !important;`
- **8px 實心立體側邊色軸與飽和全不透明邊框（Accent Spine Bar & Solid Border）**：
  - 外圍配置 **`2.5px solid`** 對應主題色之全不透明邊框（如翡翠綠 `#059669`、皇家靛藍 `#4f46e5`）。
  - 左側必須加入 **`8px solid` 實心醒目主軸（Spine Bar）**（如 `#047857`、`#4338ca`），使讀者滾動至該節時視覺焦點瞬間被錨定。
  - 搭配對應色系發光微陰影（如 `box-shadow: 0 10px 25px -4px rgba(79, 70, 229, 0.22)`），使卡片立體浮起。
- **高對比純白底實體按鈕與極深啟用膠囊（Tactile Pill Controls）**：
  - **未啟用膠囊按鈕**：一律採用純白高對比底色（`#ffffff`）、深色粗體字（`#0f172a`）、`1.5px solid #94a3b8` 實體邊框與微陰影，不再灰淡模糊。
  - **啟用中膠囊按鈕（Active）**：切換為深濃漸層（如深翡翠 `#047857 ~ #065f46`、深皇家靛藍 `#4338ca ~ #3730a3`），字體為純白極粗體，搭配該色系專屬光暈陰影。
- **高彩度實心標題徽章（Solid Badge Icons）**：
  - 標題字體升級為 `font-black`，主題圖示（`⚖️ / 💡`）改以實心高彩度底色（`bg-emerald-600` / `bg-indigo-600`）搭配白字，案例數量徽章採用高飽和深色白字（`bg-emerald-700` / `bg-indigo-700`），視覺階層分明。

### 15. 案例卡片 DOM 平級性與手風琴折疊看板規範 (Case Card Sibling Integrity & Accordion System)
- **嚴防案例標籤未閉合導致 DOM 巢狀污染（Case Card Nesting Trap）**：
  - 每一張案例卡片（如 `#case-card-1-7`）必須各自嚴格閉合其末端 `</div>`！
  - **致命陷阱警示**：若案例 1-7 少了一個 `</div>`，瀏覽器會將後續的 1-8 至 1-11 全數解析為 1-7 的子節點。當使用者點擊「1-8」膠囊時，JS 為 1-7 加上 `hidden` 類別，**將導致子節點 1-8 至 1-11 全數連帶消失（「除了 1-7 其他打開都沒有案例內容？」）**！
  - **結構鐵律**：所有案例卡片必須是其父容器（如 `#panelJustLegal` 或網格容器）的直接同級兄弟節點（Direct Siblings）。
- **單卡手風琴平滑折疊（Single Card Accordion）**：
  - 每張案例卡片標頭右側配置動態 chevron 箭頭（`▼ / ▲`）。
  - 點擊標頭任一處（自動排除內部「複製筆記」按鈕與法規超連結），卡片平滑折疊。
  - 收合後高度縮減 75%，並以單行淡雅提示呈現爭點事實摘要，方便考生一眼快速縱覽全貌。
- **章節一鍵批次切換（Batch Dashboard Toggles）**：
  - 導航控制台右側常駐控制器列：`[ ⊞ 精簡看板 ]` 與 `[ ⊟ 展開詳解 ]`，點擊即批次切換當前章節全數案例。

### 16. 徹底廢除「🔍 點擊放大檢視」懸浮標籤干擾與純淨閱讀規範 (Zero Lightbox Hover Interference & Anti-Clutter Standard)
- **禁止在卡片右上角自動疊加「🔍 點擊放大檢視」懸浮標籤**：
  - 卡片右上角是法條條號按鈕（如 `§ 刑法第 1 條`）、筆記複製按鈕（`📋 複製筆記`）、法源出處徽章與折疊箭頭的核心互動操作區。
  - **嚴禁使用腳本遍歷卡片動態注入 `.zoomable-badge`**！懸浮標籤會直接蓋在右上角的重要按鈕上方，造成讀者點擊法條或複製時誤觸放大燈箱，且滑鼠劃過時突兀跳動，嚴重破壞閱讀沉浸感與版面美觀。
- **全面停用自動掃描與 CSS 強制防護**：
  - 核心控制器 `setupZoomableDiagrams` 必須全面清空並自動移除所有殘留標籤：`document.querySelectorAll('.zoomable-badge').forEach(el => el.remove())`，卡片游標恢復標準 `default`。
  - CSS 必須常駐強制隱藏保護：`.zoomable-badge { display: none !important; opacity: 0 !important; pointer-events: none !important; }`。
  - 確保所有卡片右上角的法規按鈕、複製按鈕均能 100% 完整裸露、自由點擊無任何阻礙。

### 17. 刑法核心爭點超級對照矩陣規範 (Mega Comparison Matrix Standard - Direction 6)
作為教科書第一章（或核心篇章）的壓軸總結樞紐，必須在篇末配置超級對照矩陣：
- **章節大總結樞紐定位**：
  - 接續於末尾章節（如第十五節二階論）之後，標記為專屬大章節（例如「十六、刑法核心爭點超級對照矩陣」），並在右側 TOC 與全域搜尋中登錄獨立錨點 `#sec-mega-comparison-matrix`。
- **三大深度對照矩陣維度**：
  1. **矩陣 A：【阻卻違法】 vs 【阻卻罪責】（本質體系大對決）**：橫向比對評價客體（行為客觀 vs 行為人主觀）、法律代稱（不法 vs 罪責）、核心金句口訣（非壞事 vs 非壞人）、共犯限制從屬性（連帶從屬 vs 個別獨立）、民事侵權連動賠償（民法 § 149/150 免責 vs 民法 § 187 仍須賠償）。
  2. **矩陣 B：【正當防衛】 vs 【緊急避難】 vs 【義務衝突】 vs 【極端例外案例】（法益衡平大縱橫）**：縱深剖析法理基礎、危難起因、**利益衡量原則之有無與嚴格度（防衛原則不衡量 vs 避難嚴格衡量 vs 櫻桃案禁止權利濫用 vs 輸血案人性尊嚴底線）**與手段門檻。
  3. **矩陣 C：【被害人同意】 vs 【得被害人承諾】 vs 【推定承諾】（處分界限大對決）**：釐清審查階層（第一階阻卻構成要件 vs 第二階阻卻違法 vs 超法定）、適用法益範疇、**生命與重大身體之絕對禁止承諾紅線（§ 275 加工自殺、§ 282 承諾傷害）**。
  4. **全景總覽模式（Mega Unified View）**：支援一鍵展開三大表格，供全螢幕垂直滾動複習。
- **即時爭點關鍵字檢索過濾（Matrix Live Filter）**：
  - 矩陣上方常駐快速搜尋輸入框，鍵入「利益衡量」、「人性尊嚴」、「共犯」、「櫻桃案」等字眼，表格即時高亮並篩選符合列。
- **案例卡片一鍵跳轉與發光波紋（Pulse Focus）**：
  - 點擊表格內任意案例跳轉按鈕（如 `1-10 防衛 ↗`、`1-14 櫻桃案 ↗`），自動解除篩選隱藏、展開手風琴、平滑滾動定位，並觸發 **紫藍色立體發光波紋動畫（`.card-pulse-target`）**，讓讀者瞬間鎖定目標卡片！

### 18. 篇、章、節三層樹狀目錄結構與子目錄獨立閱讀視圖規範 (Three-Tier Part-Chapter-Section Hierarchy & Sub-Directory Reader Specification)
教科書、法學體系書或大型技術手冊通常遵循「篇 (Part / Division)」➔「章 (Chapter)」➔「節 (Section)」的三層結構（例如：第零篇 ➔ 第一章 刑法的運作原理 ➔ 第一節 法益保護原則）。為了維護嚴謹的認知層次，必須恪守三層階層樹與視圖解耦準則：

- **左側目錄樹階層結構 (Sidebar Three-Tier Tree Structure)**：
  - **嚴禁扁平化並列**：嚴禁將「節」與「章」或「篇」作為同級平級按鈕直接並列，這會破壞知識結構的主從關係，導致目錄混亂失序。
  - **第三層縮排子目錄容器 (`#partXChYSubTree`)**：
    - 在父章節按鈕（如 `navBtnPart0Ch1`）正下方，必須建立專屬縮排引導線容器：`div#partXChYSubTree.ml-3.5.pl-2.5.border-l-2.border-slate-200.dark:border-slate-800`。
    - **子節按鈕視覺微化**：字級縮為 `text-[12.5px]` 或 `text-[13px]`，邊距更為緊湊（`py-1 px-2 rounded-lg`），前端配置精緻圖示（如 `💎` 或微型圓點指示符），形成明確的樹狀分支視覺。
  - **手機端抽屜鏡像縮排 (Mobile Drawer Parity)**：
    - 手機端抽屜選單必須 1:1 鏡像此三層結構，採用縮排邊線容器（`ml-4 pl-3 border-l-2 border-slate-200 dark:border-slate-800`），杜絕雙端結構脫節。

- **章節與小節之視圖解耦 (View Decoupling & Sub-Unit Navigation)**：
  - **父章節視圖 (`viewPartXChapterY`)**：
    - 聚焦於該章之「篇章前言」、全章核心指導思想（如刑法目的：應報思想 vs. 預防思想）與宏觀架構推導（如四大支柱推導體系）。
    - 章末必須配置**「本章子目錄與分節研讀導引 (Sub-Sections Navigation)」**：
      - 設置精美子單元導航卡片（標註 `SECTION 1 • READY TO READ`、`SECTION 2 • COMING SOON` 等狀態徽章）。
      - 提供鮮明的進入按鈕（如 `🚀 開始研讀 第一節 法益保護原則 →`），點擊直接呼叫 `switchView('partX-chY-secZ')` 平滑切換至子節視圖。
  - **子節獨立視圖 (`viewPartXChYSecZ`)**：
    - 每一「節」必須擁有獨立的視圖容器 `<div id="viewPartXChYSecZ" class="fade-enter hidden space-y-8">`，嚴禁將數萬字的小節內文硬塞在父章節底部無限堆疊。
    - **動態頂部麵包屑 (Breadcrumb Navigation)**：
      - 頂端配置清晰麵包屑導航：`第零篇 / 第一章 刑法的運作原理 / 第一節 法益保護原則`，並於右上角常駐「← 返回第一章總覽」快捷按鈕。
    - **核心定義金句與法理展開**：
      - 專屬原文定義金句卡片（如「凡是以法律手段而加以保護之重要生活利益，即稱為法益」）、實質先在性分析與機能界限對照。
    - **篇章進度待續提示卡 (Progress & Scope Callout)**：
      - 若該節僅收錄部分教材頁碼（如第 2-1 頁），末端必須配置典雅的虛線進度卡，明確註明「教材第 2-1 頁已收錄完畢，後續內容待後續教材頁面提供後即時增補」，給予讀者明確的進度心理預期。

- **全套 JavaScript 配套相容規範 (Full-Stack JS Wiring Standard)**：
  - **`TOC_CONFIG` 對象化目錄**：為子節建立專屬清單物件（如 `TOC_CONFIG['part0-ch1-sec1']`），切換至該節時右側目錄自動切換為該節內部小標題（如 `#sec-p0ch1-sec1-def`）。
  - **`switchView()` 視圖切換**：正確顯隱各視圖容器，套用子節按鈕高亮樣式（`ACTIVE_CLASS`），即時更新頂部動態徽章（如 `currentChapterBadge.textContent = '第零篇 第一章・第一節'`）與 `document.title`。
  - **`scrollToSection()` 錨點前綴分流**：判斷錨點前綴（如 `sec-p0ch1-sec1-`），若當前處於其他視圖，自動優先呼叫 `switchView('part0-ch1-sec1', false)` 開啟第一節，再平滑滾動至目標元素。
  - **`handleHashRouting()` 智慧路由**：支援 `#part0-ch1-sec1` 以及 `#sec-p0ch1-sec1-*` 深層網址直達。
  - **`SEARCH_DATABASE` 全域檢索登錄**：登錄獨立概念卡（如 `concept-legal-interest`），關聯 `view: 'part0-ch1-sec1'`，支援 `Ctrl+K` 搜尋直達定位。

- **母本、發布檔與 Markdown 三方同步規範 (Master-Publish-Markdown Triple Sync)**：
  - 當完成三層目錄重構與內文收錄時，必須同時同步更新：
    1. [visual.html](file:///c:/Users/mice/.gemini/antigravity-ide/scratch/criminal-law-notes/visual.html)（母本）
    2. [index.html](file:///c:/Users/mice/.gemini/antigravity-ide/scratch/criminal-law-notes/index.html)（發布檔，維持 100% 位元組對齊）
    3. [CRIMINAL_LAW_NOTES.md](file:///c:/Users/mice/.gemini/antigravity-ide/scratch/criminal-law-notes/CRIMINAL_LAW_NOTES.md)（課本研讀大綱）
  - 確保三者在章節層次、標題命名、法規文字與定義原文上 100% 絕對一致。

### 19. 🐣 小白秒懂・白話文翻譯專區與生活情境比喻規範 (Novice-Friendly Plain Language Guide Standard)
法律學說、司法院釋字與法條文義極為冷硬晦澀（例如：「行為之處罰以行為時之法律有明文規定者為限」、「實質正當法律程序」、「法律保留最高體現」）。為了讓完全沒有法律背景的小白讀者也能無痛理解，在重大帝王原則（如罪刑法定原則、罪責原則、法益保護原則）或複雜法理推導卡片內部，**必須增設專屬「🐣 小白秒懂・白話文翻譯專區」**：
- **高彩度親和視覺設計 (Vibrant Warm Aesthetic)**：
  - 外觀採用飽滿溫暖的高彩度暖陽金橙色漸層（`bg-gradient-to-br from-amber-50 via-orange-50/80 to-yellow-100 dark:from-[#2a1c0c] dark:via-[#221608] dark:to-[#171005]`），外圍配置 2px 琥珀邊框（`border-2 border-amber-400 dark:border-amber-500`）。
  - 左側必須配置自信醒目的 **`border-l-[8px] border-l-amber-500` 實心脊柱色軸** 與柔和立體陰影。
  - 標頭配置專屬彈跳圖示與徽章（`🐣 💡 零基礎秒懂專區 • 白話文大翻譯`）以及親切大標題（如「法條文縐縐在共三小？30 秒白話搞懂！」）。
- **標準四必備核心結構 (Four Mandatory Components)**：
  1. **📢 一句話大白話翻譯 (One-Liner Plain Translation)**：
     - 用最接地氣的日常白話直擊核心本質：
       > 👉「**沒先講好的遊戲規矩，不能事後找我算帳！法律沒白紙黑字寫是犯罪，政府跟法官就絕對不能抓我去關！**」
  2. **🎲 趣味日常情境比喻（生活小白劇場 / Everyday Analogy）**：
     - 運用貼近生活直覺的強烈比喻（如「大富翁桌遊規則書比喻」）：
       > 「就像跟朋友玩大富翁，朋友不能因為你擲骰子的姿勢太囂張，就突然加一條新規矩罰你五千塊！——刑法就是全體國民與國家的『遊戲規則書』。政府有警察、手銬與監獄，若無此原則約束，政府看誰不爽就能抓誰，明天穿拖鞋出門都可能被抓去關！這條原則不是在袒護壞人，而是在保護全體老百姓不用每天提心吊膽怕呼吸也犯法！」
  3. **⚡ 小白必懂三大白話禁令／三不原則 (Three Plain-Language Commands)**：
     - 以 ❌「絕對不行」與 ⭕「必須遵守」形成強烈視覺對比，將抽象法理翻譯為白話命令：
       - **① 不能看你不爽就編罪（習慣法之禁止）**：
         - ❌ 不能說：「大家都覺得你這樣做很沒道德，判你有罪！」
         - ⭕ **必須由立法院白紙黑字寫進法律才算數！**
       - **② 不能腦補硬扯抓人（類推適用之禁止）**：
         - ❌ 不能說：「法律寫偷汽車有罪，你偷滑板車差不多啦，順便一起關！」
         - ⭕ **字面沒寫的，法官絕對不能自己腦補擴大抓人！**
       - **③ 不能搭時光機罰過去（溯及既往之禁止）**：
         - ❌ 不能說：「今天剛立新法說不能吃炸雞，你昨天吃炸雞被我拍到，罰五萬！」
         - ⭕ **只能罰立法以後的事，絕不准翻舊帳！**
  4. **🎯 小白秒記口訣 Bar (Catchy Mnemonic Pill Bar)**：
     - 提煉押韻好記的 16 字精華口訣（例如：「**事前講好**、**寫得清楚**、**不翻舊帳**、**不准腦補**！」）。
- **全域檢索深度聯網 (Global Ctrl+K Integration)**：
  - 必須在 `data/search-db.js` 中登錄專屬項目（如 `concept-nulla-poena-novice`），收錄「小白秒懂」、「白話文」、「大富翁」、「白話翻譯」等生活化關鍵字，讓讀者無論輸入學術術語或通俗白話均能直達定位。

### 20. 顏色現眼搶眼與高飽和高對比存在感規範 (Vibrant Eye-Catching & High-Contrast Standard)
為了徹底杜絕「底色過淡、邊框太細、缺乏實體存在感」的視覺疲勞問題，核心閱讀卡片與法規控制項必須遵循高彩度高對比美學：
- **徹底告別死白、灰白與淡無存在感的洗白漸層 (Anti-Washed-Out Aesthetic)**：
  - 核心概念焦點框（Focus Box）、法規框、案例大卡片嚴禁使用在螢幕上幾乎看不見的微弱灰白漸層（如 `from-blue-50/20`）。
  - 主卡片底色全面升級為飽滿溫潤的飽和天藍漸層（`from-sky-100 via-blue-50 to-indigo-100`，暗夜為晶體夜幕藍 `from-[#082f49] to-[#0f172a]`），外框配置 2px 實體天藍邊框與 **`border-l-[8px] border-l-blue-600` 實心脊柱色軸**，搭配發光微陰影。
- **高飽和實心純色法條徽章 (Solid Color High-Contrast Badges)**：
  - 核心法條與釋字標籤（如 `§ 刑法第 1 條`、`⚖️ 釋字第 384 號`）全面採用**高飽和實心純色底＋純白加粗字體**（如實心皇家藍 `bg-blue-600`、實心暖金橙 `bg-amber-500`），字體 `font-black`，搭配懸停微浮放大（`hover:scale-105`），醒目立體，杜絕淡色模糊。
- **條文卡片與釋字卡片階層對照**：
  - **刑法條文明文**：高對比純白卡片（暗夜墨藍）＋亮藍左導引條（`border-l-4 border-l-blue-600`）＋加粗大字體（`text-lg font-black`）＋「★ 刑法大憲章・帝王核心原則」微標籤。
  - **司法院釋字／憲法判決**：飽滿暖金黃卡片（`bg-amber-100`）＋琥珀金導引條（`border-l-4 border-l-amber-600`）＋深褐色文字，對比強烈，字字清晰。
- **派生子原則高彩度四色分流**：
  - 四大派生子原則分別配置湛藍（面向 1）、皇家靛藍（面向 2）、暖金琥珀（面向 3）、珊瑚玫瑰紅（面向 4），並附帶「🗣️ 小白白話」標籤，視覺豐富生動。

### 21. 案例研習五位一體法學劇院與排版設計規範 (Five-in-One Courtroom Theater Standard)
所有實務與學說案例（如案例 1-1、1-2、1-3 及後續所有章節案例）必須一律採用五位一體模組化推進：
1. **⚔️ 原被告/檢控辯護法庭正面言詞辯論（法庭對決區域）**：
   - 雙方律師（如辯護人金毛大律師 vs 公訴檢察官赤狐女律師）展開具體法庭攻防論述，不限於犬系，展示各自學說主張與結論標籤。
2. **🐾 柴柴法學教授 • 白話生活大解碼**：
   - 嚴禁大段文字密集黏連，必須**分段清晰、適度留白**。
   - 重點文字嚴格採用**純紅底線**（`<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">`），嚴禁刺眼全紅文字！
3. **⚖️ 金毛大律師 • 法庭攻防點評**：
   - 法庭實戰必勝防線與訴訟抗辯策略。
4. **🛡️ 德牧法規巡查官 • 法規雷達查核**：
   - 實體法檢索與【裁判要旨查核】（如傷害罪限生理機能障害；強暴脅迫移送強制罪警示），同樣使用紅底線強調。
5. **👨‍⚖️ 邊牧首席審判長 • 終審裁決一槌定音（講結論的吉祥物）**：
   - 深色星空金邊高質感卡片，標籤 `#法槌一敲誰與爭鋒`。
   - 包含 `🔨 【實體法定讞】` 與 `💡 國考答題定錨`。
   - **必備「📅 2026 最新法條動態備註」**：明確標明所涉法條至 2026 年有無修正更動、新舊法差異與考生作答警示。
6. **嚴禁橫向並排原則（Strict Vertical Stacking）**：
   - 金毛點評與德牧雷達嚴格禁止使用 `grid-cols-2` 併排兩格，一律採**單欄垂直上下堆疊**（`space-y-3`）。
7. **思維心智導圖「就地展開・零跳動」規範**：
   - 點擊心智導圖各節點右側灰色 `(Q)` 按鈕時，考點錦囊必須直接於畫布下方原位就地展開，嚴禁引發頁面滾動跳轉或畫面抖動。
8. **犬系法學四大天王導師席標準配置**：
   - 柴柴法學教授、金毛首席辯護大律師、德牧法規巡查官、邊牧首席審判長四大天王陣容齊全。

---

## 標準版面架構 (Layout Architecture)

採用現代響應式三欄結構：

```text
+-----------------------------------------------------------------------------------+
| 頂部導航列 (Sticky Header) : 標題 + 視圖動態徽章 (Badge) + 深淺主題切換 (Sticky)   |
+---------------------+---------------------------------------+---------------------+
| 左側目錄 (Sidebar)  | 中央主閱讀區 (Center Reader)          | 右側章節 (TOC)      |
| [260px, Sticky]     | [minmax(0, 1fr), 自適應擴展]           | [280px, Sticky]     |
|                     |                                       |                     |
| 🏠 書籍主頁 (Home)  | 【視圖 0 - 書籍主頁】                 | 【狀態 0 & 1】      |
| 📖 導論 犯罪概念... | 《刑法總則【圖說系列】》資訊 + 3D書封 | 【完全隱藏】        |
|   第一章 犯罪概念   | ------------------------------------- | ------------------- |
|   第二章 論罪結構   | 【視圖 1 - 本篇導論】                 | 【狀態 2 - 章節】   |
| (選中時淺藍底藍字)  | 僅顯示導讀卡片，無其餘干擾。          | 📌 第一章 章節清單  |
|                     | ------------------------------------- |  - 一、核心概念     |
|                     | 【視圖 2 - 第一章內文】               |  - 二、不法推定罪責 |
|                     | 麵包屑導航 + 第一章內文與原文圖解     |  - ... (共八小節)   |
|                     |                                       |  - 回到頂部 / 複製  |
+---------------------+---------------------------------------+---------------------+
```

---

## 關鍵技術實作指引 (Implementation Guide)

### 1. 三欄網格佈局與吸頂防落規範 (CSS Grid & Sticky Locking)

容器必須採用嚴格的 CSS Grid，並設定適當的軌道與間距：

```css
/* 三欄容器：外層容器不可加 align-items: start，讓各欄軌道拉伸至與中央等高 */
.app-layout-container {
  display: grid !important;
  grid-template-columns: 260px minmax(0, 1fr) 280px !important;
  gap: 1.5rem !important;
  width: 100% !important;
  max-width: 92rem !important;
  margin-left: auto !important;
  margin-right: auto !important;
  padding: 1.5rem 1rem !important;
  box-sizing: border-box !important;
}

/* 1. 左側目錄：鎖定第 1 欄，頂部吸頂 */
#sidebar {
  grid-column: 1 !important;
  grid-row: 1 !important;
  position: sticky !important;
  top: 5rem !important;
  align-self: start !important;
  max-height: calc(100vh - 6.5rem) !important;
  overflow-y: auto !important;
}

/* 2. 中央主閱讀區：鎖定第 2 欄 */
main {
  grid-column: 2 !important;
  grid-row: 1 !important;
  min-width: 0 !important;
  width: 100% !important;
}

/* 3. 右側章節清單：嚴格鎖定第 3 欄，吸頂在右上角 */
#rightTocAside {
  grid-column: 3 !important;
  grid-row: 1 !important;
  display: none; /* 預設在 home 與 intro 狀態下隱藏 */
  position: sticky !important;
  top: 5rem !important;
  align-self: start !important;
  width: 280px !important;
  min-width: 280px !important;
  max-width: 280px !important;
  max-height: calc(100vh - 6.5rem) !important;
  overflow-y: auto !important;
  z-index: 30 !important;
}

/* 進入章節狀態時在寬螢幕顯示右側清單 */
body.in-chapter #rightTocAside {
  display: block !important;
  animation: fadeIn 0.25s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(6px); }
  to { opacity: 1; transform: translateY(0); }
}
```

### 2. 書籍主頁 (Book Home) 結構與 3D 書封卡片實例

```html
<!-- 中央主閱讀區內：書籍主頁 (View Home) -->
<div id="viewHome" class="space-y-8">
  <!-- 書籍資訊看板 Hero Card -->
  <div class="relative overflow-hidden rounded-3xl border border-slate-200 dark:border-white/[0.08] bg-white/95 dark:bg-[#111726]/95 p-6 sm:p-8 backdrop-blur shadow-sm">
    <div class="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
      
      <!-- 左側：立體書籍封面展示區 -->
      <div class="md:col-span-5 flex justify-center">
        <div class="perspective-[1200px] py-2">
          <!-- 3D 書封容器 -->
          <div class="relative w-56 h-80 rounded-2xl overflow-hidden shadow-2xl transition-all duration-400 hover:scale-105 border border-white/20 bg-slate-900">
            <!-- 實體圖片插槽 -->
            <img id="bookCoverImg" 
                 src="./book-cover.png" 
                 alt="刑法總則【圖說系列】封面" 
                 onerror="this.style.display='none'; document.getElementById('bookCoverFallback').style.display='flex';" 
                 class="w-full h-full object-cover object-top">
            
            <!-- 優雅降級 Fallback 擬真書封 -->
            <div id="bookCoverFallback" class="hidden absolute inset-0 w-full h-full bg-gradient-to-br from-slate-900 via-blue-950 to-amber-950 p-5 flex flex-col justify-between text-white border border-white/20">
              <div class="flex items-center justify-between">
                <span class="px-2 py-0.5 rounded bg-amber-400/20 text-amber-300 text-[10px] font-bold border border-amber-400/40">圖說系列</span>
                <span class="text-[10px] text-white/70 font-mono">律師・司三・法研</span>
              </div>
              <div class="space-y-1.5 my-auto text-center">
                <div class="text-[10px] font-bold uppercase tracking-wider text-amber-300">高點法學</div>
                <h3 class="text-2xl font-black tracking-tight text-white">刑法總則</h3>
                <p class="text-xs text-blue-300 font-serif italic">Strafrecht</p>
                <div class="h-0.5 w-10 bg-amber-400 rounded-full mx-auto my-1"></div>
                <p class="text-[10px] text-white/80">概念圖示・清晰易懂<br>重點彙整・深入淺出<br>例題研究・必勝關鍵</p>
              </div>
              <div class="flex items-center justify-between text-[11px] text-white/80 pt-3 border-t border-white/15">
                <span class="font-bold text-white">陳奕廷(易律師) 編著</span>
                <span class="text-[10px] text-amber-300 font-bold">高點文化</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 右側：書籍詳細規格與資訊 -->
      <div class="md:col-span-7 space-y-4">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 text-xs font-semibold border border-blue-200 dark:border-blue-800/50">
          <span>📚 高點法學圖說系列</span>
          <span class="w-1 h-1 rounded-full bg-blue-500"></span>
          <span>國考權威用書</span>
        </div>
        <h1 class="text-2xl sm:text-3xl font-black tracking-tight text-slate-900 dark:text-white">
          刑法總則【圖說系列】
        </h1>
        <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
          本書專為法律國考與學術深造打造，以清晰的概念圖示化繁為簡，貫穿「不法推定罪責」與三階層論罪體系。緊扣重要學說爭點與司法實務見解，協助考生奠定最堅實的刑法總則思維。
        </p>

        <!-- 書籍規格清單 -->
        <div class="grid grid-cols-2 gap-2.5 pt-1 text-xs">
          <div class="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-800">
            <span class="text-slate-400 block text-[10px] font-semibold">作者 / 編著</span>
            <span class="font-bold text-slate-800 dark:text-slate-200">陳奕廷 (易律師) 編著</span>
          </div>
          <div class="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-800">
            <span class="text-slate-400 block text-[10px] font-semibold">出版社 / 體系</span>
            <span class="font-bold text-slate-800 dark:text-slate-200">高點 (高點法學系列)</span>
          </div>
          <div class="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-800">
            <span class="text-slate-400 block text-[10px] font-semibold">出版日期 / 書號代碼</span>
            <span class="font-bold text-slate-800 dark:text-slate-200">2022／10／31 (L602210)</span>
          </div>
          <div class="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-800">
            <span class="text-slate-400 block text-[10px] font-semibold">國際標準書號 (ISBN)</span>
            <span class="font-mono font-bold text-slate-800 dark:text-slate-200">9786263342880</span>
          </div>
        </div>

        <!-- 快速行動 CTA 按鈕 -->
        <div class="flex flex-wrap gap-3 pt-2">
          <button onclick="switchView('chapter-1')" class="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold shadow-lg shadow-blue-500/20 transition-all">
            🚀 開始閱讀第一章
          </button>
          <button onclick="switchView('intro')" class="px-5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-xs font-semibold transition-all">
            📖 閱讀本篇導論
          </button>
        </div>
      </div>
    </div>
  </div>
</div>
```

### 3. 本篇導讀 (Conducted Read) 視圖標準範本 (HTML Template)

```html
<!-- 中央主閱讀區內：母篇章本篇導讀視圖 (View Conducted Read) -->
<div id="viewPart0" class="fade-enter hidden space-y-6">
  
  <!-- 頂部精緻英文識別徽章與大標題 -->
  <div class="space-y-1.5">
    <span class="text-xs font-mono text-blue-600 dark:text-blue-400 font-bold uppercase tracking-wider">
      PREFACE • CONDUCTED READ
    </span>
    <h2 class="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
      第零篇 刑法的運作、操作原理與法律效果
    </h2>
  </div>

  <!-- 本篇導讀卡片 (教材原文卡片) -->
  <div class="p-6 sm:p-8 rounded-3xl border-2 border-blue-500/30 bg-white dark:bg-[#101623] shadow-sm space-y-4">
    <div class="flex items-center justify-between border-b border-slate-100 dark:border-white/[0.06] pb-3">
      <div class="flex items-center gap-2">
        <span class="text-xl">📖</span>
        <h3 class="text-base sm:text-lg font-bold text-slate-900 dark:text-white">本篇導讀 (Conducted Read)</h3>
      </div>
      <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-500/10 text-blue-500 dark:text-blue-400 font-bold">
        第 0-1 頁
      </span>
    </div>

    <!-- 忠實引述課本原文 -->
    <blockquote class="text-sm sm:text-base text-slate-700 dark:text-slate-200 leading-relaxed italic border-l-4 border-blue-500 pl-4 py-1">
      「本篇是正式踏入刑法學習前的暖身，介紹影響刑法運作的四大支柱，以及刑法操作的前理解（諸如刑法的適用效力、解釋方法）。至於刑法的法律效果，這個通常被教科書或參考書放在最尾巴說明的刑罰理論，筆者挪移到本篇提前整理，旨在提醒大家「謹思慎刑」的核心理念，也與刑法最後手段性原則接軌。」
    </blockquote>
  </div>

</div>
```

### 4. 多篇章視圖切換 (switchView) 與 Hash 路由規範

```javascript
function switchView(viewName, shouldScrollTop = true) {
  clearNavStyles();

  // 1. 隱藏所有視圖（確保各容器互斥）
  if (viewHome) viewHome.classList.add('hidden');
  if (viewIntro) viewIntro.classList.add('hidden');
  if (viewChapter1) viewChapter1.classList.add('hidden');
  if (viewChapter2) viewChapter2.classList.add('hidden');
  if (viewPart0) viewPart0.classList.add('hidden');

  // 2. 依據視圖名稱精確呈現，並控制右側 TOC 之顯隱
  if (viewName === 'home') {
    if (viewHome) viewHome.classList.remove('hidden');
    if (rightTocAside) rightTocAside.style.setProperty('display', 'none', 'important');
    currentChapterBadge.textContent = '書籍主頁';
  } else if (viewName === 'part-0') {
    if (viewPart0) viewPart0.classList.remove('hidden');
    // 導讀狀態嚴格隱藏右側 TOC
    if (rightTocAside) rightTocAside.style.setProperty('display', 'none', 'important');
    if (navBtnPart0) navBtnPart0.classList.add('text-blue-600', 'dark:text-blue-400');
    if (navBtnPart0Intro) navBtnPart0Intro.classList.add(...ACTIVE_CLASS);
    currentChapterBadge.textContent = '第零篇';
  } else if (viewName === 'chapter-1' || viewName === 'chapter-2') {
    const targetChapter = viewName === 'chapter-1' ? viewChapter1 : viewChapter2;
    if (targetChapter) targetChapter.classList.remove('hidden');
    // 進入實質章節，顯現右側吸頂 TOC
    document.body.classList.add('in-chapter');
    if (rightTocAside) rightTocAside.style.setProperty('display', 'block', 'important');
    renderToc(viewName);
  }
}
```

### 5. 概念焦點框 (Focus Box) CSS 與 HTML 標準範本

```css
/* 概念焦點框核心樣式 (明亮天藍實體色塊 / 暗夜夜幕晶體藍) */
.box-legal-navy {
  background: linear-gradient(135deg, #BAE6FD 0%, #7DD3FC 100%) !important;
  border: 2px solid #38BDF8 !important;
  border-left: 6px solid #0284C7 !important;
  box-shadow: 0 4px 18px -2px rgba(2, 132, 199, 0.18) !important;
}
.box-legal-navy p {
  color: #0c4a6e !important; /* 深海軍藍：高對比極致舒適易讀 */
}
.box-legal-navy strong {
  color: #032034 !important; /* 墨黑深藍強調 */
}

/* 框內純白襯底彩色膠囊標籤 */
.box-legal-navy .legal-tag-blue {
  background: #ffffff !important;
  color: #0369a1 !important;
  border: 1.5px solid #0284c7 !important;
  font-weight: 800 !important;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08) !important;
}
.box-legal-navy .legal-tag-amber {
  background: #ffffff !important;
  color: #b45309 !important;
  border: 1.5px solid #d97706 !important;
  font-weight: 800 !important;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08) !important;
}
.box-legal-navy .legal-tag-rose {
  background: #ffffff !important;
  color: #be123c !important;
  border: 1.5px solid #e11d48 !important;
  font-weight: 800 !important;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08) !important;
}

/* 暗夜模式對應 */
.dark .box-legal-navy {
  background: linear-gradient(135deg, rgba(8, 47, 73, 0.88) 0%, rgba(12, 74, 110, 0.78) 100%) !important;
  border: 2px solid rgba(56, 189, 248, 0.55) !important;
  border-left: 6px solid #38BDF8 !important;
  box-shadow: 0 4px 18px -2px rgba(0, 0, 0, 0.35) !important;
}
.dark .box-legal-navy p {
  color: #e0f2fe !important;
}
.dark .box-legal-navy strong {
  color: #ffffff !important;
}
.dark .box-legal-navy .legal-tag-blue {
  background: rgba(3, 105, 161, 0.45) !important;
  color: #7dd3fc !important;
  border: 1.5px solid #38bdf8 !important;
  font-weight: 800 !important;
}
.dark .box-legal-navy .legal-tag-amber {
  background: rgba(180, 83, 9, 0.4) !important;
  color: #fde047 !important;
  border: 1.5px solid #f59e0b !important;
  font-weight: 800 !important;
}
.dark .box-legal-navy .legal-tag-rose {
  background: rgba(190, 18, 60, 0.4) !important;
  color: #fda4af !important;
  border: 1.5px solid #f43f5e !important;
  font-weight: 800 !important;
}
```

```html
<!-- HTML 範例結構 -->
<div class="box-legal-navy p-6 sm:p-7 rounded-2xl space-y-4 text-sm sm:text-base leading-relaxed">
  <p>
    刑法是一部處理犯罪的法律，至於如何謂犯罪？簡單說，<span class="legal-tag-blue">「一個壞人」</span>做了<span class="legal-tag-amber">「一件壞事」</span>就是犯罪。
  </p>
  <p>
    ...這就是<span class="legal-tag-blue">「壞事推定壞人」</span>原則，而推翻罪責推定的理由稱為<span class="legal-tag-rose">「阻卻罪責事由」</span>。
  </p>
</div>
```

### 6. 法條懸浮卡片雙層標頭與響應式抽屜面板範本 (Statute Popover Template)

```html
<!-- 法條原地指引懸浮卡片 (桌面絕對定位 / 行動端底部滑出面板) -->
<div id="statutePopover" class="hidden fixed z-50 transition-all duration-200" style="display: none;">
  <!-- 行動端毛玻璃背景遮罩 (Backdrop) -->
  <div id="statutePopoverBackdrop" class="md:hidden fixed inset-0 bg-black/50 backdrop-blur-sm -z-10"></div>

  <!-- 卡片主體容器 (桌面寬度 max-w-[27rem]，行動端 bottom sheet) -->
  <div class="w-full md:max-w-[27rem] rounded-t-3xl md:rounded-2xl border border-slate-200/80 dark:border-slate-700/80 bg-white/95 dark:bg-[#0f172a]/95 backdrop-blur-md shadow-2xl p-5 space-y-3.5">
    
    <!-- 雙層標頭 - 第 1 層：分類圖示、階層徽章與顯眼關閉按鈕 -->
    <div class="flex items-center justify-between gap-2">
      <div class="flex items-center gap-2 min-w-0">
        <span class="text-base shrink-0">📜</span>
        <span id="statuteStageBadge" class="text-[11px] font-bold px-2 py-0.5 rounded-full bg-blue-50 dark:bg-blue-900/40 text-blue-600 dark:text-blue-300 border border-blue-200 dark:border-blue-700/50">
          罪責階段審查
        </span>
      </div>
      <button onclick="hideStatutePopover()" class="w-7 h-7 rounded-full flex items-center justify-center text-slate-400 hover:text-slate-700 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-base font-bold" title="關閉">
        ✕
      </button>
    </div>

    <!-- 雙層標頭 - 第 2 層：完整法定標題 (break-words，絕無 truncate 裁切！) -->
    <div class="w-full">
      <h4 id="statuteTitle" class="text-sm sm:text-base font-black text-slate-900 dark:text-white break-words leading-snug">
        刑法第 16 條【禁止錯誤／違法性錯誤】
      </h4>
    </div>

    <!-- 條文內文摘錄 -->
    <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-800">
      <p id="statuteBody" class="text-xs text-slate-700 dark:text-slate-200 leading-relaxed font-sans"></p>
    </div>

    <!-- 教科書審查要點 -->
    <div class="space-y-1">
      <span class="text-[10px] font-bold text-slate-400 uppercase tracking-wider">💡 國考審查要點</span>
      <p id="statuteNote" class="text-xs text-blue-700 dark:text-blue-300 leading-relaxed bg-blue-50/60 dark:bg-blue-950/40 p-2.5 rounded-lg border border-blue-100 dark:border-blue-900/40"></p>
    </div>
  </div>
</div>
```

```javascript
// 桌面端 260ms 防誤觸延遲邏輯範本
let statuteHoverTimer = null;

function bindStatuteBadge(element, statuteKey) {
  element.addEventListener('mouseenter', (e) => {
    clearTimeout(statuteHoverTimer);
    statuteHoverTimer = setTimeout(() => {
      showStatutePopover(statuteKey, element);
    }, 260); // 260ms 防劃過誤觸
  });
  element.addEventListener('mouseleave', () => {
    clearTimeout(statuteHoverTimer);
  });
}
```

### 7. 環形滾動進度回到頂部按鈕 (Circular Progress FAB) 範本

```html
<!-- 48x48px 懸浮環形按鈕 (周長 125.66 = 2 * PI * 20) -->
<button id="btnScrollTop" onclick="window.scrollTo({ top: 0, behavior: 'smooth' })" 
        class="fixed bottom-6 right-6 z-40 w-12 h-12 rounded-full bg-white/90 dark:bg-slate-900/90 backdrop-blur border border-slate-200 dark:border-slate-700 shadow-xl flex items-center justify-center transition-all duration-300 opacity-0 pointer-events-none group">
  <!-- SVG 圓弧進度軌道 -->
  <svg class="w-12 h-12 -rotate-90 pointer-events-none" viewBox="0 0 48 48">
    <circle cx="24" cy="24" r="20" stroke="currentColor" stroke-width="2.5" class="text-slate-200 dark:text-slate-800 fill-none" />
    <circle id="scrollTopProgressCircle" cx="24" cy="24" r="20" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" 
            class="text-blue-600 dark:text-blue-400 fill-none transition-all duration-75" 
            stroke-dasharray="125.66" stroke-dashoffset="125.66" />
  </svg>
  <!-- 中心箭頭 (懸停時轉為百分比數字) -->
  <div class="absolute inset-0 flex items-center justify-center pointer-events-none">
    <span id="scrollTopIcon" class="text-slate-700 dark:text-slate-200 text-sm font-bold group-hover:opacity-0 transition-opacity">↑</span>
    <span id="scrollTopPercent" class="text-[10px] font-mono font-bold text-blue-600 dark:text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity">0%</span>
  </div>
</button>
```

```javascript
window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const progress = docHeight > 0 ? Math.min(1, Math.max(0, scrollTop / docHeight)) : 0;
  
  // 更新周長 offset
  const circumference = 125.66;
  const offset = circumference - (progress * circumference);
  const circle = document.getElementById('scrollTopProgressCircle');
  if (circle) circle.style.strokeDashoffset = offset;

  // 浮現控制 (>300px)
  const btn = document.getElementById('btnScrollTop');
  if (btn) {
    if (scrollTop > 300) {
      btn.classList.remove('opacity-0', 'pointer-events-none');
      btn.classList.add('opacity-100');
    } else {
      btn.classList.add('opacity-0', 'pointer-events-none');
      btn.classList.remove('opacity-100');
    }
  }
  const percentText = document.getElementById('scrollTopPercent');
  if (percentText) percentText.textContent = `${Math.round(progress * 100)}%`;
});
```

### 8. 全域搜尋目標脈衝光暈動畫 (Search Target Pulse Glow)

```css
/* 搜尋導航跳轉目標呼吸脈衝高亮 */
@keyframes searchTargetPulse {
  0% {
    box-shadow: 0 0 0 0 rgba(56, 189, 248, 0.7);
    transform: scale(1);
  }
  50% {
    box-shadow: 0 0 0 8px rgba(56, 189, 248, 0.25);
    transform: scale(1.01);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(56, 189, 248, 0);
    transform: scale(1);
  }
}
.search-target-highlight {
  animation: searchTargetPulse 1.25s ease-in-out 2 !important;
  border-color: #0284c7 !important;
}
```

### 9. 案例筆記 Markdown 雙鏈結構格式化器 (Case Note Formatter)

```javascript
function formatCaseNoteMarkdown(caseData) {
  return `# ⚖️ 【${caseData.id}】${caseData.title}
> 📖 出處：陳奕廷《刑法總則【圖說系列】》第 ${caseData.page} 頁

## 📌 案件事實
${caseData.facts}

## 🔍 階層審查與核心爭點
- **構成要件**：${caseData.tbReview || '該當'}
- **違法性**：${caseData.rwReview || '不具阻卻違法事由'}
- **罪責階層**：${caseData.guiltReview}

## 💡 考點速記口訣
${caseData.keyTips}

## 📜 關聯法條
${caseData.relatedStatutes.map(s => `[[${s}]]`).join(' ')}
`;
}
```

### 10. 高彩度案例導航控制台樣式 (Vibrant Case Navigator Console CSS)

```css
/* 案例導航控制台專屬鮮明樣式 (高對比、8px側軸、拒絕死白) */
.nav-console-emerald {
  background: linear-gradient(135deg, #dcfce7 0%, #ecfdf5 45%, #d1fae5 100%) !important;
  border: 2.5px solid #059669 !important;
  border-left: 8px solid #047857 !important;
  box-shadow: 0 10px 25px -4px rgba(5, 150, 105, 0.22), 0 3px 8px rgba(0, 0, 0, 0.05) !important;
}
.dark .nav-console-emerald {
  background: linear-gradient(135deg, rgba(6, 78, 59, 0.55) 0%, rgba(15, 23, 42, 0.95) 55%, rgba(6, 44, 32, 0.6) 100%) !important;
  border: 2.5px solid #10b981 !important;
  border-left: 8px solid #34d399 !important;
  box-shadow: 0 10px 28px -4px rgba(0, 0, 0, 0.5), 0 0 16px rgba(16, 185, 129, 0.2) !important;
}

.nav-console-indigo {
  background: linear-gradient(135deg, #e0e7ff 0%, #eef2ff 45%, #ede9fe 100%) !important;
  border: 2.5px solid #4f46e5 !important;
  border-left: 8px solid #4338ca !important;
  box-shadow: 0 10px 25px -4px rgba(79, 70, 229, 0.22), 0 3px 8px rgba(0, 0, 0, 0.05) !important;
}
.dark .nav-console-indigo {
  background: linear-gradient(135deg, rgba(49, 46, 129, 0.55) 0%, rgba(15, 23, 42, 0.95) 55%, rgba(67, 56, 202, 0.45) 100%) !important;
  border: 2.5px solid #6366f1 !important;
  border-left: 8px solid #818cf8 !important;
  box-shadow: 0 10px 28px -4px rgba(0, 0, 0, 0.5), 0 0 16px rgba(99, 102, 241, 0.2) !important;
}

.just-pill-btn {
  cursor: pointer;
  border: 1.5px solid #94a3b8;
  background-color: #ffffff;
  color: #0f172a;
  font-weight: 700;
  transition: all 0.15s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
}
.just-pill-btn.active-pill {
  font-weight: 800 !important;
  transform: translateY(-1px);
}
#pillsLegal .just-pill-btn.active-pill {
  background: linear-gradient(135deg, #047857 0%, #065f46 100%) !important;
  border-color: #064e3b !important;
  color: #ffffff !important;
  box-shadow: 0 4px 14px rgba(4, 120, 87, 0.45) !important;
}
#pillsExtra .just-pill-btn.active-pill {
  background: linear-gradient(135deg, #4338ca 0%, #3730a3 100%) !important;
  border-color: #312e81 !important;
  color: #ffffff !important;
  box-shadow: 0 4px 14px rgba(67, 56, 202, 0.45) !important;
}
```

### 11. 案例卡片手風琴折疊核心邏輯 (Case Accordion Engine JS)

```javascript
function toggleCaseCard(card) {
  if (!card) return;
  const isCollapsed = card.classList.toggle('case-collapsed');
  const btn = card.querySelector('.case-accordion-btn svg');
  if (btn) btn.style.transform = isCollapsed ? 'rotate(-90deg)' : 'rotate(0deg)';
}

function toggleAllCases(expand) {
  const allCards = document.querySelectorAll('.case-card');
  allCards.forEach(card => {
    if (expand) {
      card.classList.remove('case-collapsed');
    } else {
      card.classList.add('case-collapsed');
    }
    const btn = card.querySelector('.case-accordion-btn svg');
    if (btn) btn.style.transform = expand ? 'rotate(0deg)' : 'rotate(-90deg)';
  });
}
```

### 12. 爭點核心矩陣對照表控制器 (Mega Comparison Matrix Controller JS)

```javascript
function switchMatrixTab(tabKey) {
  const panels = {
    'tabA': document.getElementById('matrixPanelA'),
    'tabB': document.getElementById('matrixPanelB'),
    'tabC': document.getElementById('matrixPanelC'),
    'tabAll': document.getElementById('matrixPanelAll')
  };
  const buttons = {
    'tabA': document.getElementById('btnTabA'),
    'tabB': document.getElementById('btnTabB'),
    'tabC': document.getElementById('btnTabC'),
    'tabAll': document.getElementById('btnTabAll')
  };

  Object.keys(panels).forEach(key => {
    if (panels[key]) panels[key].classList.add('hidden');
    if (buttons[key]) buttons[key].classList.remove('active-matrix-tab');
  });

  if (panels[tabKey]) {
    panels[tabKey].classList.remove('hidden');
    panels[tabKey].classList.add('fade-enter');
  }
  if (buttons[tabKey]) buttons[tabKey].classList.add('active-matrix-tab');
}

function filterMatrixRows(query) {
  const q = (query || '').trim().toLowerCase();
  const allRows = document.querySelectorAll('#sec-mega-comparison-matrix tbody tr');
  allRows.forEach(row => {
    if (!q) { row.style.display = ''; return; }
    const searchKeywords = (row.getAttribute('data-search') || '').toLowerCase();
    const isMatch = searchKeywords.includes(q) || row.textContent.toLowerCase().includes(q);
    row.style.display = isMatch ? '' : 'none';
  });
}

function jumpToCaseCard(caseId) {
  if (viewChapter1.classList.contains('hidden')) switchView('chapter-1', false);
  if (['1-7', '1-8', '1-9', '1-10', '1-11'].includes(caseId)) filterJustCase('legal', caseId);
  else if (['1-12', '1-13', '1-14', '1-15'].includes(caseId)) filterJustCase('extra', caseId);

  const targetEl = document.getElementById(`case-card-${caseId}`);
  if (targetEl) {
    if (targetEl.classList.contains('case-collapsed')) toggleCaseCard(targetEl);
    const offset = targetEl.getBoundingClientRect().top + window.pageYOffset - 90;
    window.scrollTo({ top: offset, behavior: 'smooth' });
    targetEl.classList.remove('card-pulse-target');
    void targetEl.offsetWidth;
    targetEl.classList.add('card-pulse-target');
    showToast(`🎯 已定位至 案例 ${caseId}`, '⚖️');
  }
}
```

### 13. 篇、章、節三層子目錄與獨立視圖切換實作 (Three-Tier Sub-Directory & Independent View Implementation)

#### (1) 左側側邊欄樹狀引導線容器 (HTML)
```html
<!-- 父章節：第一章 刑法的運作原理 -->
<button id="navBtnPart0Ch1" onclick="switchView('part0-chapter-1')" class="group flex items-center justify-between w-full px-2.5 py-1.5 rounded-lg text-xs font-medium text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-100/60 dark:hover:bg-slate-800/40 transition-all text-left">
  <div class="flex items-center gap-2 min-w-0">
    <span class="w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-slate-700 group-hover:bg-blue-500"></span>
    <span class="truncate">第一章 刑法的運作原理</span>
  </div>
</button>

<!-- 第三層子目錄樹狀引導線容器 -->
<div id="part0Ch1SubTree" class="ml-3.5 pl-2.5 border-l-2 border-slate-200 dark:border-slate-800/80 space-y-1 mt-0.5 mb-1.5">
  <button id="navBtnPart0Ch1Sec1" onclick="switchView('part0-ch1-sec1')" class="group flex items-center justify-between w-full px-2 py-1 rounded-lg text-[12.5px] font-medium text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-slate-100/60 dark:hover:bg-slate-800/40 transition-all text-left">
    <div class="flex items-center gap-1.5 min-w-0">
      <span class="text-xs">💎</span>
      <span class="truncate">第一節 法益保護原則</span>
    </div>
    <span class="text-[10px] font-mono px-1 rounded bg-indigo-500/10 text-indigo-500">2-1頁</span>
  </button>
</div>
```

#### (2) 主閱讀區子單元入口卡片與子節獨立視圖 (HTML)
```html
<!-- 父章節末尾：子單元入口導航卡片 (viewPart0Chapter1) -->
<div class="p-6 rounded-3xl border-2 border-indigo-500/40 bg-gradient-to-br from-indigo-50/90 via-blue-50/50 to-purple-50/40 dark:from-indigo-950/40 space-y-4">
  <div class="flex items-center gap-2.5">
    <span class="w-8 h-8 rounded-xl bg-indigo-600 text-white flex items-center justify-center font-bold text-sm">💎</span>
    <div>
      <span class="text-[10px] font-mono uppercase font-bold text-indigo-600 dark:text-indigo-400 block tracking-wider">SECTION 1 • READY TO READ</span>
      <h4 class="text-base sm:text-lg font-black text-slate-900 dark:text-white">第一節 法益保護原則——何謂法益？</h4>
    </div>
  </div>
  <button onclick="switchView('part0-ch1-sec1')" class="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600 text-white font-bold text-xs hover:bg-indigo-700 shadow-md transition-all">
    <span>🚀 開始研讀 第一節 法益保護原則</span>
    <span>→</span>
  </button>
</div>

<!-- 子節獨立視圖 (viewPart0Ch1Sec1) -->
<div id="viewPart0Ch1Sec1" class="fade-enter hidden space-y-8">
  <!-- 麵包屑導航與返回按鈕 -->
  <div class="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-white/[0.06]">
    <nav class="flex items-center gap-2 text-xs font-medium text-slate-400">
      <button onclick="switchView('part-0')">第零篇</button>
      <span>/</span>
      <button onclick="switchView('part0-chapter-1')">第一章 刑法的運作原理</button>
      <span>/</span>
      <span class="text-indigo-600 dark:text-indigo-400 font-bold">第一節 法益保護原則</span>
    </nav>
    <button onclick="switchView('part0-chapter-1')" class="text-xs text-slate-400 hover:text-indigo-500 flex items-center gap-1">
      ← 返回第一章總覽
    </button>
  </div>
  <!-- 內文核心段落... -->
</div>
```

#### (3) 核心控制邏輯與路由配對 (JavaScript)
```javascript
// 1. TOC_CONFIG 登錄子節專屬目錄
TOC_CONFIG['part0-ch1-sec1'] = {
  badge: '教材第 2-1 頁',
  title: '📌 第一節 法益保護原則 清單',
  items: [
    { id: 'sec-p0ch1-sec1-def', label: '一、法益核心法定定義' },
    { id: 'sec-p0ch1-sec1-nature', label: '二、法益三大本質與源起特徵' },
    { id: 'sec-p0ch1-sec1-func', label: '三、法益之雙重機能與界限' }
  ]
};

// 2. scrollToSection 支援子節前綴自動視圖切換
function scrollToSection(e, targetId) {
  if (e) e.preventDefault();
  if (targetId.startsWith('sec-p0ch1-sec1-')) {
    if (viewPart0Ch1Sec1.classList.contains('hidden')) switchView('part0-ch1-sec1', false);
  } else if (targetId.startsWith('sec-p0ch1-')) {
    if (viewPart0Chapter1.classList.contains('hidden')) switchView('part0-chapter-1', false);
  }
  // ... 平滑滾動至目標元素
}

// 3. handleHashRouting 支援深層直達
if (hash.startsWith('#sec-p0ch1-sec1-')) {
  switchView('part0-ch1-sec1', false);
  setTimeout(() => { scrollToSection(null, hash.substring(1)); }, 50);
} else if (hash === '#part0-ch1-sec1') {
  switchView('part0-ch1-sec1', true);
}
```

### 14. 圖二標準規範：旗艦核心原則卡片與小白白話文排版規範 (Image 2 Design Standard)

> 詳細完整模板與 CSS Token 清單請參見：[SECTION_DESIGN_GUIDE_IMAGE2.md](file:///c:/Users/mice/Desktop/law-note-main/law-note-main/SECTION_DESIGN_GUIDE_IMAGE2.md)

當建立或重構各章節的核心法律原則、帝王法條或重大爭點時，必須嚴格依照「圖二」（如 `part0-ch1-sec2` 罪刑法定原則 / `chapter-2` 構成要件與故意既遂原則）的雙核心卡片體系進行編排：

1. **核心原則旗艦天藍卡片 (`border-l-[8px] border-l-blue-600`)**：
   - **底色與漸層**：`bg-gradient-to-br from-sky-100 via-blue-50 to-indigo-100 dark:from-[#082f49] dark:via-[#0c4a6e]/70 dark:to-[#0f172a]`。
   - **標頭**：中文大標題 + 拉丁文/德文學術等寬副標 + 右側可點擊法規膠囊（`data-statute="XX"`）與核心原則金徽章。
   - **核心明文卡**：純白高對比卡片 + 動態呼吸訊號燈（`w-2 h-2 rounded-full bg-blue-600 animate-pulse`）+ 核心引言金句。
   - **歷史與教義暖金卡**：`bg-gradient-to-r from-amber-100 via-amber-50 to-yellow-50` + 2~6 格典型範例卡。
   - **體系對照卡**：客觀該當性（既遂・外在事實）vs 主觀該當性（故意・內心惡念）雙欄卡片。

2. **🐣 小白秒懂專區・白話文大翻譯 (`border-l-[8px] border-l-amber-500`)**：
   - **底色與邊界**：暖金橙黃漸層（`from-amber-50 via-orange-50/80 to-yellow-100`），左側 8px 實心琥珀色軸。
   - **彈跳微符號**：`🐣 animate-bounce` 搭配「💡 零基礎秒懂專區 • 白話文大翻譯」漸層膠囊標籤。
   - **一句話大白話翻譯**：高對比純白底框 + 粗體螢光底線。
   - **日常超有感比喻**：例如打靶瞄準與中靶、開車、點餐，以最通俗生動的情境拆解主觀意圖與客觀現實。
   - **小白必懂雙門檻白話拆解**：將冷硬法條轉譯為「壞事真的做成了」與「心裡清清楚楚就是要幹」兩大白話要件。

3. **內容保留鐵律**：
   - 擴充「小白專區」時，**嚴禁刪除**原教材的學理、法條文字或 6 格典型要件，兩者需垂直巢狀共存。

### 15. 左側導航欄獨立滾動與自適應高度規範 (Sidebar Independent Scrolling & Max-Height Standard)
左側目錄 `<aside>` 在桌面版必須具備**獨立滾動能力**，嚴禁高度失控或將底部元素截斷：
- **容器樣式鐵律**：
  `<aside class="hidden lg:block lg:col-span-3 xl:col-span-2 sticky top-20 max-h-[calc(100vh-6rem)] overflow-y-auto custom-scrollbar space-y-4 pr-1 no-print">`
- **核心設計目標**：
  1. `sticky top-20`：頂部距離頂部導航列維持 5rem（80px）吸頂。
  2. `max-h-[calc(100vh-6rem)]`：限定側邊欄最大高度為視窗高度減去邊距，保證其底部絕不會超出瀏覽器可視區域。
  3. `overflow-y-auto custom-scrollbar pr-1`：當目錄內容眾多（如母篇、各章節陸續收錄）、使用者在筆電較小螢幕閱覽、或是小節展開時，側邊欄會自動平滑垂直滾動，讀者永遠能滾動至最底部點擊「第零篇」或檢視柴犬助教卡片。
- **細滾動條樣式**：
  同時兼顧 WebKit (`::-webkit-scrollbar { width: 5px; }`) 與 Firefox (`scrollbar-width: thin; scrollbar-color: rgba(...) transparent;`)。

### 16. 章節小節清單預設收合規範 (Sub-Section Lists Default Collapsed Standard)
為了維護左側目錄樹狀結構的緊湊性與乾淨視野，章節底下的細項小節清單（`<details>` 摺疊盒）：
- **預設一律為收合狀態（嚴禁添加 `open` 屬性）**：
  - 桌面版側邊欄（`<aside>`）：`<details class="group bg-blue-50/40 ...">`（不帶 `open`）。
  - 手機導航抽屜（`#mobileNavDrawer`）：`<details class="group bg-blue-50/40 ...">`（不帶 `open`）。
- **使用者自主展開**：預設僅露出章節名稱（如「第一章 犯罪的概念」）與小節清單摘要按鈕（如 `📑 1-1～1-11 小節清單 ▼`）。讀者點擊展開後才會呈現各小節快速錨點，隨時可再次點擊折疊收合。

### 17. 原書實體復刻純粹性原則 (Pure Textbook Replica Standard)
當任務為還原教材前言、篇章導讀或特定書頁 DEMO 時：
- **中欄 1:1 典雅復刻**：
  1. 完整呈現母篇圓圈徽章（如 `第 零 篇` 圓形印記）。
  2. 莊嚴典雅粗襯線標題（`Noto Serif TC` / `font-black text-slate-900`）。
  3. 復古手繪風裝飾底線（如 `本篇導讀` + 手寫斜體 `Conducted read`）。
  4. 忠實原文逐字核對（例如「慎思慎刑」，嚴禁出現錯別字或形近字）。
- **嚴禁多餘側欄與 AI 元規範污染**：
  - **右側現代筆記欄／延伸欄位**：在純書頁 DEMO 或導讀中**嚴禁出現**，維持單一書頁極簡專注。
  - **嚴格移除 AI 自創之規範與說明標籤**：嚴禁添加未經要求的小白翻譯框、查核雷達、AI 規範警示標籤，保持書籍本身的高質感與學術純粹性。

---

## 驗收檢查清單 (Quality Checklist)

- [ ] **導航欄獨立滾動檢驗**：左側 `<aside>` 是否配置 `max-h-[calc(100vh-6rem)] overflow-y-auto custom-scrollbar pr-1`？在低高度視窗或展開多小節時，導航欄是否能獨立平滑滾動，杜絕下方項目（如第零篇、柴犬頭像）被裁切？
- [ ] **小節清單預設收合檢驗**：桌面側邊欄與手機抽屜之 `<details>` 是否**均無 `open` 屬性**，預設保持緊湊收合狀態？
- [ ] **純教材復刻無污染檢驗**：教材導讀/書頁 DEMO 是否已移除右側筆記欄與所有 AI 元規範標籤，呈現 1:1 純淨書頁質感？
- [ ] **書籍主頁展示**：點擊「🏠 書籍主頁」時，是否正確顯示書籍資訊看板、規格清單（書名、作者、出版社、出版日期、ISBN）與特色摘要？
- [ ] **書本圖片與 Fallback**：封面展示區是否正確載入書本封面圖片？在未提供圖片時，優雅的立體漸層書封 Fallback 是否正常呈現？
- [ ] **精選圖解藝廊**：主頁下方是否設有書籍核心圖解卡片預覽區？
- [ ] **三態與多篇章視圖切換**：`home`（主頁）、`intro`（導論）、各篇導讀（如 `part-0`）與章節（`chapter-1`, `chapter-2`）切換是否完全互斥且無任何黑底白畫面？
- [ ] **本篇導讀標準卡片**：各篇導讀視圖是否具備 `PREFACE • CONDUCTED READ` 徽章、篇章大標題、頁碼徽章與帶左邊框之 `blockquote` 原文？
- [ ] **三層樹狀目錄縮排**：側邊欄「章」下方是否有專屬縮排引導線容器（`ml-3.5 pl-2.5 border-l-2`）收納「節」作為子目錄？手機抽屜是否 1:1 鏡像縮排，杜絕扁平混淆？
- [ ] **章節與小節視圖解耦**：點選「章」是否展示篇章前言與宏觀推導，並於章末提供「子單元導航入口卡片」？點選「節」是否流暢切換至獨立子節視圖？
- [ ] **動態麵包屑導航與返回**：子節獨立視圖頂端是否配置完整麵包屑（篇 / 章 / 節）與「← 返回第一章總覽」按鈕？
- [ ] **右側 TOC 與全域路由支援**：切換至子節時，右側 TOC 是否動態更新為該節小標題清單？`#part0-ch1-sec1` 與內部錨點是否支援網址深層直達與 `Ctrl+K` 搜尋直達？
- [ ] **母本、發布檔與 Markdown 三方同步**：`visual.html`、`index.html` 與 `CRIMINAL_LAW_NOTES.md` 在章節層次、標題名稱、原文定義上是否 100% 絕對一致？
- [ ] **右側 TOC 顯隱**：在「書籍主頁」與「各篇本篇導讀」狀態下，右側章節清單是否**嚴格完全隱藏**？進入第一章或第二章時是否**立即顯現並固定吸頂於右上角**？
- [ ] **吸頂防落檢驗**：滾動至頁面最底端時，右側清單是否**絕無掉落至頁面下方或左下角滿版**？
- [ ] **概念焦點框底色辨識度**：核心直觀引言與焦點框框是否採用專屬天藍實體漸層色塊（`#BAE6FD ~ #7DD3FC`），邊界清晰醒目，絕非融入背景的死白淡漸層？
- [ ] **案例導航控制台高對比**：控制台是否具備 **8px 實心側邊色軸**（翠綠 `#047857`、靛藍 `#4338ca`）、**2.5px 全不透明飽和邊框**與純白高對比按鈕？絕非低彩度灰白邊線！
- [ ] **案例卡片平級性與無污染**：每個 `#case-card-X-X` 是否各自完全閉合且為容器平級兄弟節點，絕無因標籤遺漏導致後續卡片淪為前案子節點（DOM 污染防護）？
- [ ] **案例手風琴與看板切換**：單卡標頭點擊是否平滑折疊？頂部 `[ ⊞ 精簡看板 ]` 與 `[ ⊟ 展開詳解 ]` 是否能一鍵整章批次切換？
- [ ] **核心圖解無損燈箱放大鏡**：圖卡懸停是否出現 `🔍 點擊放大檢視`？燈箱是否支援 50%～250% 滾輪縮放、拖曳漫遊與 Esc 退出？
- [ ] **超級對照矩陣 (第十六節)**：第一章末尾是否收錄十六節「⚡ 刑法核心爭點超級對照矩陣」？三大 Tab 切換、爭點即時檢索過濾與案例跳轉脈衝波紋（`card-pulse-target`）是否靈敏順暢？
- [ ] **檔案編碼純 UTF-8 完整性**：頁面標題、左側選單與中央內文繁體中文字元是否 100% 正確呈現，絕無任何菱形問號編碼損壞？
- [ ] **母本安全同步方向**：自動構建或推送批次檔（如 `copy_cover_and_push.bat`）是否嚴格鎖定由乾淨母本（`visual.html`）覆蓋目標檔（`index.html`），避免暫存檔案逆向破壞母本？
- [ ] **全域智慧搜尋 (Ctrl+K)**：按下 `Ctrl+K` 或點擊導航搜尋鈕是否順利呼出全螢幕搜尋浮層？跳轉後目標卡片是否居中並觸發脈衝光暈高亮？
- [ ] **案例爭點一鍵導出筆記**：點擊「📋 複製筆記」後是否生成規範的 Markdown 內容並彈出微型 Toast 通知？
- [ ] **模組化掛載名稱雙向相容**：視圖檔案（`content/*.js`）是否宣告雙向別名（全稱與簡寫），控制器 `mountAllViews()` 是否具備動態保底遍歷與 DOM 重新綁定（`refreshViewElements()`），杜絕內文空白？
- [ ] **變數宣告頂置與全域控制器導出 (TDZ 防護)**：控制器 `app.js` 中的 DOM 快取變數與樣式常數是否 100% 置於腳本最頂端宣告？核心互動函式（如 `switchView`, `toggleTheme`）是否顯式掛載至 `window`，並在切換前調用 JIT 自癒刷新，杜絕 TDZ `ReferenceError` 與按鈕失靈？
- [ ] **全景流程圖與白話專區標準**：依據 [`NOTE_READER_SPECIFICATION.md`](../../NOTE_READER_SPECIFICATION.md) 規範，流程圖需為靜態圖檔禁止拖曳、字體清晰大於 14.5px，圖下附專屬「白話文速讀專區」，杜絕零碎重複卡片！




