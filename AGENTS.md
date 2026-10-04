# 專案代理人工作與排版行為規則 (AGENTS.md)

本檔案為《圖說刑法總則【圖說系列】知識庫閱覽器》專案的**唯一最高核心行為憲法**。所有 AI Agent 在讀取、重構、新增章節或修訂前端程式碼時，必須無條件遵循本規範。

---

## 1. 導航欄獨立滾動與小節預設收合規範 (Navigation Standards)

- **左側導航欄獨立滾動**：
  - 桌面版 `<aside>` 必須限制高度並啟用細滾動條：
    ```html
    <aside class="hidden lg:block lg:col-span-3 xl:col-span-2 sticky top-20 max-h-[calc(100vh-6rem)] overflow-y-auto custom-scrollbar space-y-4 pr-1 no-print">
    ```
  - **嚴禁未設最大高度**導致側邊欄延伸溢出視窗底部、切斷「第零篇」或頭像卡片。
  - `.custom-scrollbar` 必須兼顧 WebKit 與 Firefox：
    ```css
    .custom-scrollbar {
      scrollbar-width: thin;
      scrollbar-color: rgba(148, 163, 184, 0.4) transparent;
    }
    .custom-scrollbar::-webkit-scrollbar {
      width: 5px;
    }
    ```
- **章節細項清單預設收合**：
  - 桌面與行動端所有 `<details>` 小節清單**嚴禁帶有 `open` 屬性**，一律預設為收合狀態。
  - 僅在讀者點擊 summary 時才手動展開，以保持左側樹狀目錄緊湊整潔。

---

## 2. 教材原型復刻純粹性原則 (Textbook Replica Standard)

- **1:1 原書復刻**：
  - 當使用者要求根據照片製作教材前言/導讀/書頁 DEMO 時，中欄必須 1:1 還原原書排版（圓圈徽章、粗襯線體大標題、手繪風底線飾條、忠實原文無錯字）。
- **移除右側欄與 AI 規範污染**：
  - 單頁書本復刻 DEMO 嚴禁附加右側現代筆記欄。
  - 嚴格移除任何 AI 自創之「規範查核」、「小白大翻譯」、「元資料警示」等標籤，保持書籍本身沈浸式典雅質感。

---

## 3. 嚴格書本依據與錯字嚴防 (Textbook Fidelity)

- **禁止自行腦補**：未收到課本原文前，嚴禁自行由外部資料庫或 AI 記憶拼湊學說或案例。
- **逐字精確核對**：原文一律逐字忠實呈現，並嚴格核對形近字（例如「慎思慎刑」，非「謹思慎刑」）。

---

## 4. 案例研習「五位一體法學劇院」標準規範 (Case Study Standard)

每個實戰案例（如案例 1-1、1-2、1-3 及未來章節案例）必須一律採用五位一體架構：

1. **⚔️ 原被告/檢控辯護法庭正面言詞辯論（法庭對決區域）**：
   - 雙方律師具體交鋒（如**辯護人金毛大律師** vs **公訴檢察官赤狐女律師**）。
   - 包含辯論情境標籤、代表學說之攻防論述、法庭交鋒對決感。
2. **🐾 柴柴法學教授 • 白話生活大解碼**：
   - 嚴禁大段文字密集黏連，必須**分段清晰、適度留白**。
   - 重點文字一律採用**純紅底線**（見第 6 點），嚴禁使用刺眼全紅字。
3. **⚖️ 金毛大律師 • 法庭攻防點評**：
   - 法庭實戰必勝防線與訴訟抗辯策略。
4. **🛡️ 德牧法規巡查官 • 法規雷達查核**：
   - 嚴格實體法檢索與【裁判要旨查核】（如傷害罪限生理機能障害；強剪毛髮或熟睡強暴移送強制罪警示）。
5. **👨‍⚖️ 邊牧首席審判長 • 終審裁決一槌定音（講結論的吉祥物）**：
   - 深色星空金邊高質感卡片，標籤 `#法槌一敲誰與爭鋒`。
   - 包含 `🔨 【實體法定讞】` 與 `💡 國考答題定錨`。
   - **必備「📅 2026 最新法條動態備註」**：明確標明所涉法條至 2026 年有無修正更動、新舊法差異與考生作答警示。

---

## 5. 排版禁止並排原則（Strict Vertical Stacking）

- **金毛點評與德牧雷達嚴禁橫向並排**：
  - 嚴禁使用 `grid-cols-2` 兩格併排！
  - 一律使用**單欄垂直上下堆疊**（`space-y-3`），確保字體舒適、行距充裕且在所有螢幕尺寸均擁有最佳閱讀體驗。

---

## 6. 重點視覺「純紅底線」規範（No Aggressive Red Text）

- **重點標記統一語法**：
  ```html
  <span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">重點內容</span>
  ```
- **嚴禁刺眼全紅字**：禁止使用 `text-red-500` 等全紅文字，文字本體維持深色主體，僅以紅色底線提升典雅與可讀性。

---

## 7. 思維心智導圖「就地展開・零跳動」規範 (In-Place Tip Modal)

- 點擊心智導圖各節點右側灰色 `(Q)` 按鈕時，考點錦囊必須直接於**畫布下方原位就地展開**，嚴禁引發頁面滾動跳轉或畫面抖動。

---

## 8. 犬系法學四大天王導師席標準配置與肖像比例 (The Four Mentors & Portraits)

- 側邊欄與各章節導師欄位統一配置四大天王：
  1. **柴柴法學教授**（Prof. Shiba）：基礎法理、學說體系、生活白話解碼。  
     頭像特寫標準：`style="object-position: center 20%; transform: scale(1.38);"`
  2. **金毛首席辯護大律師**（Counselor Golden）：法庭攻防策略、罪與非罪抗辯。  
     頭像特寫標準：`style="object-position: center 20%; transform: scale(1.35);"`
  3. **德牧法規巡查官**（Inspector Shepherd）：法規雷達、最新修法與裁判要旨查核。  
     頭像特寫標準：`style="object-position: center 15%; transform: scale(1.4);"`
  4. **邊牧首席審判長**（Chief Judge Collie）：終審裁定、國考答題定錨、2026 最新法條動態備註。  
     頭像特寫標準：`style="object-position: center 25%; transform: scale(1.35);"`
  - **公訴檢察官赤狐女律師**（Prosecutor Fox）：法庭言詞對決控方代表。  
    頭像特寫標準：`style="object-position: center 20%; transform: scale(1.35);"`

---

## 9. 視覺色彩與邊框規範 (Visual Palette Standard)

- **8px 實心側邊色軸**：
  - 🚨 **玫瑰紅危險邊框**（`#e11d48` / `border-l-rose-500`）：違法高風險、處罰要件。
  - 🌿 **翡翠綠合法邊框**（`#059669` / `border-l-emerald-600`）：阻卻違法、合法過關、免責事由。
  - 🔷 **天藍法理邊框**（`#2563eb` / `border-l-blue-600`）：客觀構成要件、通說體系。
  - 🟪 **深紫爭議邊框**（`#7c3aed` / `border-l-purple-600`）：實務與學說激烈爭議、修法前沿。

---

## 10. DOM 標籤平衡與零 CORS 本機秒開鐵律 (DOM Integrity & Zero-CORS)

- **最外層容器嚴格 3 個一級子節點**：
  - `.app-layout-container` 內必須且僅能有 3 個一級子節點：`aside#sidebar`（左）、`main`（中）、`aside#rightTocAside`（右）。
  - 嚴禁案例卡片結尾遺漏或多寫 `</div>`，防止右側目錄掉落至頁尾。
- **Zero-CORS 本機秒開相容**：
  - 嚴禁在未配置本機伺服器時使用 `fetch()` 讀取外部 json 或 html。全站使用標準 `<script src="...">` 掛載與全域物件註冊，保證 `file:///` 本地雙擊秒開。

---

## 11. 專案技能操作指引

具體實現代碼範本、流程圖製作規範與 DOM 模板，請參見：
- 唯一專案開發技能：[多欄位Note-Skill](file:///.agents/skills/多欄位Note%20Skill/SKILL.md)
