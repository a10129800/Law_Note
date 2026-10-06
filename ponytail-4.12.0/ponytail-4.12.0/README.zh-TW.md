# Ponytail (馬尾) v4.12.0
> **專為 AI 代理人設計的「懶惰資深工程師模式」 (Lazy Senior Dev Mode for AI Agents)**  
> *「他什麼都沒說。他只寫了一行。程式跑通了。」*  
> *The best code is the code you never wrote.（最好的代碼，就是你從未寫下的代碼。）*

---

## 📌 什麼是 Ponytail？

你一定在公司看過這種人：留著俐落長馬尾、戴著橢圓形無框眼鏡，待在公司的資歷比 Git 版本控制系統還要久。你拿著寫了五十行、架構花俏的程式碼向他請教，他默默看了一眼，一句廢話都沒說，隨手用一行代碼替換掉，整套系統就順暢上線了。

**Ponytail 就是將這位「懶惰但極其精準」的傳奇資深架構師，植入到你的 AI Agent 核心大腦中。**

當前的 AI 寫程式工具（如 Claude Code, Codex, Devin, Cursor, Windsurf, Copilot 等）普遍存在一個致命痛點：**過度工程與無效代碼膨脹 (Over-engineering & Code Bloat)**。
- 只要跟 AI 要一個日期選擇器，它就自動安裝大型套件（如 `flatpickr`）、建立包裝組件、引入獨立 CSS，甚至開始跟你討論時區轉換...
- **有了 Ponytail**：它直接使用瀏覽器原生能力：
  ```html
  <!-- ponytail: browser has one -->
  <input type="date">
  ```

---

## 🚀 核心實測效益 (Agentic Benchmark)

Ponytail 的成效不是空泛口號，而是建立在**真實無頭 Claude Code 會話**、編輯真實開源全端專案（FastAPI + React 模板）的 12 個真實任務實測數據（Haiku 4.5 模型，n=4 重複驗證）：

| 評測指標 (vs 原生無外掛基準線) | Ponytail 表現 | 效益說明 |
| :--- | :---: | :--- |
| 📉 **代碼變更量 (LOC)** | **-54%** | 平均減少超過一半的冗餘代碼；在過度設計重災區（如表單元件）最高減少 **-94%** |
| 🪙 **Token 消耗總量** | **-22%** | 大幅縮減上下文與生成長度 |
| 💰 **API 呼叫成本** | **-20%** | 顯著降低大模型推理成本 |
| ⚡ **任務完成時間** | **-27%** | 減少廢話與無謂生成，響應速度大幅提升 |
| 🛡️ **安全與邊界防禦** | **100% 通過** | 絕不因簡化而閹割輸入校驗、邊界檢查或安全防護（對抗測試全數過關） |

---

## 🪜 決策階梯 (The Ladder：7 階極簡過濾網)

在寫下任何一行代碼前，AI Agent 必須依序檢驗以下 7 個階梯，**停留在第一個可行的階梯上直接交付**：

```
1. 這真的需要存在嗎？      ➔ 不需要：直接跳過（遵循 YAGNI 原則）
2. 當前代碼庫已經有了嗎？    ➔ 有：就地複用現有 helper/函數/型別，嚴禁重複造輪子
3. 標準函式庫 (Stdlib) 能搞定嗎？ ➔ 能：優先使用標準庫，不加依賴
4. 原生平台特性涵蓋了嗎？    ➔ 能：原生 HTML/CSS/Web API 優於任何外部 JS 庫
5. 現有已安裝依賴能解決嗎？   ➔ 能：直接使用，絕不為幾行功能引入全新 npm 套件
6. 能不能一行搞定？         ➔ 能：直接一行解決
7. 只有前面都不成立時：      ➔ 撰寫能運作的「最精簡極限代碼」
```

> ⚠️ **重要原則：**  
> 決策階梯是在**完全理解任務與真實調用路徑之後**才執行，而不是用來逃避閱讀代碼。  
> **資深工程師的懶惰是解決方案極簡，而非理解偷懶。修復 Bug 時直擊根本原因 (Root Cause)，而非打地鼠式修補表象。**

---

## 🎚️ 三大強度等級 (Intensity Levels)

| 等級 | 觸發指令 | 適用場景與行為模式 |
| :---: | :--- | :--- |
| **`lite`** | `/ponytail lite` | **輕量模式**：允許適度的防禦性包裝、常規輔助函式，保持適度可讀性，刪除明顯臆測。 |
| **`full`** | `/ponytail full` | **標準模式 (預設)**：標準資深架構師。嚴格執行階梯原則，無情刪除單一實作的介面、單一產品的工廠、非必要的設定檔。 |
| **`ultra`** | `/ponytail ultra` | **極限模式**：當前代碼庫已被過度工程嚴重荼毒時啟用。極致追求一行解法與平台原生能力，刪除所有不必要的檔案與抽象層。 |

---

## 🛠️ 指令工具箱 (Commands)

適用於支援 Skill/Plugin 機制的環境（Claude Code, Codex, Devin, OpenCode, Qoder 等）：

| 指令 | 說明 |
| :--- | :--- |
| `/ponytail [lite \| full \| ultra \| off]` | 切換執行強度或關閉。不帶參數時回報當前運作模式。 |
| `/ponytail-review` | 審查當前 Git Diff 的過度設計，直接回傳一份**刪除清單 (Delete-list)**。 |
| `/ponytail-audit` | 對整個專案代碼庫進行過度工程大盤點，揪出虛胖模組。 |
| `/ponytail-debt` | 收集代碼中的 `ponytail:` 簡化標記，建立技術債追蹤清冊，避免「以後再改」變成「永遠不改」。 |
| `/ponytail-gain` | 顯示實測效益儀表板（減少代碼量、節省成本與速度提升數據）。 |
| `/ponytail-help` | 快速顯示指令操作手冊。 |

---

## 🌐 支援平台與適配器 (Works with 20+ Agents)

Ponytail 具備極高的跨平台移植性：

1. **Claude Code**：
   ```bash
   /plugin marketplace add DietrichGebert/ponytail
   /plugin install ponytail@ponytail
   ```
2. **Codex**：
   ```bash
   codex plugin marketplace add DietrichGebert/ponytail
   codex plugin add ponytail@ponytail
   ```
3. **Cursor**：
   - 複製 `.cursor/rules/ponytail.mdc` 到專案，或透過 `scripts/cursor-hooks.js` 啟用 hooks。
4. **Antigravity / Windsurf / Cline / OpenCode / Qoder / Copilot**：
   - 將 `skills/ponytail/SKILL.md` 放入 `.agents/skills/ponytail/` 或載入 `AGENTS.md` 規則即可全局生效。

---

## 💡 平台原生替代對照範例 (Platform-Native)

| 傳統 AI 常見繁瑣操作 | Ponytail 原生極簡解法 |
| :--- | :--- |
| 安裝 `flatpickr` / 日期選擇器庫 | `<input type="date">` |
| 安裝 `query-string` / `qs` 套件 | `new URLSearchParams(location.search)` |
| 撰寫 80 行 JS 實現手風琴摺疊 (Accordion) | `<details><summary>標題</summary>內容</details>` |
| 引入 Modal 彈窗庫與 Portal 渲染 | `<dialog>` + `dialog.showModal()` |
| 撰寫 JS 監聽計算響應式視窗字體 | CSS `font-size: clamp(1rem, 2.5vw, 2rem)` |
| 安裝 `clsx` / `classnames` 拼接樣式 | 原生模板字符串：`[clsA, clsB].filter(Boolean).join(' ')` |
| 安裝 `lodash.debounce` 防抖 | 原生 5 行計時器函式，或利用 Web API |

---

## ❓ 常見問題 (FAQ)

**Q：它可以跟 Caveman（野人模式）一起使用嗎？**  
**A：** 完全可以，而且強烈推薦！Caveman 壓縮的是 AI 說話的「文字廢話」，Ponytail 壓縮的是 AI 產生的「代碼廢話」。兩者各司其職、天衣無縫。

**Q：如果我真的需要那 120 行的複雜快取類別怎麼辦？**  
**A：** 你不需要。但如果你堅持，他還是會幫你寫——慢慢地、精確地寫，一邊默默看著你。

**Q：刪除那麼多代碼，專案還能擴展 (Scale) 嗎？**  
**A：** **你從未寫下的代碼，擁有無限的擴展性。** 零錯誤、零漏洞 (CVE)、百分之百正常運作時間 (100% Uptime)。

---

## 📄 授權條款

採用 **[MIT License](LICENSE)** —— 能夠正常運作的最短開源授權。
