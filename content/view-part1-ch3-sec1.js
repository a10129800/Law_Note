/**
 * view-part1-ch3-sec1.js
 * 第一篇 第三章 第一節 構成要件該當性的判斷原理（教材第 3-19 ～ 3-22 頁 全節完結旗艦版）
 * 嚴格遵循 AGENTS.md 最高行為憲法規範：
 * 1. 逐字精準核對課本原文（第 3-19 ～ 3-22 頁 零錯字、零腦補）
 * 2. 案例 3-1、案例 3-2 嚴格落實「五位一體法學劇院」標準（赤狐檢察官 vs 金毛大律師正面言詞對決）
 * 3. 嚴格單欄垂直上下堆疊排版（Strict Vertical Stacking，嚴禁橫向並排）
 * 4. 重點文字採用「純紅底線」規範（No Aggressive Red Text）
 * 5. 復刻原書 p. 3-20「構成要件該當性的架構與檢驗順序」高質感 SVG 流程圖
 * 6. 犬系四大天王導師席法定圖檔比例、法規雷達查核與 2026 最新法條動態定錨
 * 7. Zero-CORS 本機秒開相容架構
 */

window.APP_VIEWS = window.APP_VIEWS || {};
window.APP_VIEWS['viewPart1Ch3Sec1'] = window.APP_VIEWS['part1Ch3Sec1'] = window.APP_VIEWS['part1-ch3-sec1'] = `
        <!-- VIEW: 第一篇 第三章 第一節 構成要件該當性的判斷原理 (教材第 3-19 ～ 3-22 頁) -->
        <div id="viewPart1Ch3Sec1" class="fade-enter hidden space-y-8">
          
          <!-- 頂部麵包屑導航與快速返回 -->
          <div class="flex items-center justify-between gap-4 border-b border-slate-200/80 dark:border-white/10 pb-3">
            <nav class="flex items-center gap-2 text-xs font-medium text-slate-500 dark:text-slate-400 flex-wrap">
              <button onclick="switchView('part1')" class="hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer">第一篇</button>
              <span>/</span>
              <button onclick="switchView('part1-ch3')" class="hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer">第三章 論罪類型</button>
              <span>/</span>
              <span class="text-blue-600 dark:text-blue-400 font-bold">第一節 構成要件該當性的判斷原理</span>
            </nav>
            <div class="flex items-center gap-2">
              <button onclick="switchView('part1-ch3')" class="text-xs text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 flex items-center gap-1 transition-colors shrink-0 font-bold cursor-pointer">
                <span>← 返回第三章總覽</span>
              </button>
            </div>
          </div>

          <!-- 章節大標題 Banner -->
          <div class="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-blue-700 via-indigo-800 to-slate-900 text-white shadow-lg space-y-3 relative overflow-hidden border border-blue-400/40">
            <div class="absolute -right-8 -bottom-8 w-48 h-48 bg-white/10 rounded-full blur-2xl pointer-events-none"></div>
            
            <div class="flex items-center gap-2 text-xs font-mono text-blue-200 font-bold uppercase tracking-wider">
              <span>PART 1 • CHAPTER 3 • SECTION 1</span>
              <span>•</span>
              <span class="px-2 py-0.5 rounded-full bg-white/20 text-white text-[11px]">教材第 3-19 ～ 3-22 頁 全節完結</span>
            </div>

            <h2 class="text-2xl sm:text-3xl md:text-4xl font-serif font-black tracking-tight text-white leading-tight">
              第一節 構成要件該當性的判斷原理
            </h2>

            <p class="text-sm sm:text-base text-blue-100 leading-relaxed font-serif pt-1 max-w-3xl">
              確立審查起點的核心準則！掌握<span class="underline decoration-amber-300 decoration-2 underline-offset-4 font-bold text-white">標準同一性</span>與<span class="underline decoration-amber-300 decoration-2 underline-offset-4 font-bold text-white">先客觀後主觀</span>檢驗順序，透析四大排列組合與經典案例 3-1、3-2！
            </p>
          </div>

          <!-- ==================== 一、三階論構成要件階層與三大檢驗步驟 (教材第 3-19 頁) ==================== -->
          <section id="sec-p1ch3-sec1-three-steps" class="space-y-6 pt-2">
            <div class="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3">
              <div class="flex items-center gap-3">
                <span class="w-2.5 h-6 rounded-full bg-blue-600"></span>
                <h3 class="text-lg sm:text-xl font-black text-slate-900 dark:text-white tracking-tight">
                  一、構成要件該當性檢驗的三大步驟（教材第 3-19 頁）
                </h3>
              </div>
              <span class="text-xs font-mono font-bold px-2.5 py-1 rounded-lg bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-800">
                p. 3-19 原文
              </span>
            </div>

            <!-- 原文書本忠實精讀卡片 -->
            <div class="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#121827] border border-slate-200/90 dark:border-white/10 shadow-sm space-y-5">
              <div class="flex items-center gap-2 text-xs font-mono text-blue-600 dark:text-blue-400 font-bold uppercase tracking-wider">
                <span>📖 教材原文精讀</span>
                <span>•</span>
                <span>構成要件該當性檢驗</span>
              </div>
              
              <blockquote class="font-serif text-base sm:text-lg text-slate-800 dark:text-slate-200 leading-relaxed pl-4 border-l-4 border-blue-600 text-justify">
                立足於通說採取的三階論，構成要件階層分<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">「客觀構成要件」</span>與<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">「主觀構成要件」</span>兩部分，我們必須分別審查這兩部分是否符合所有構成要件要素，若然，則構成要件<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">「該當」</span>。這個判斷過程稱為<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">「構成要件該當性的檢驗」</span>，檢驗步驟有三：
              </blockquote>

              <!-- 三大檢驗步驟單欄垂直堆疊清單 -->
              <div class="space-y-3 pt-2">
                <div class="p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-indigo-50/70 to-slate-50 dark:from-indigo-950/30 dark:to-slate-900 border-2 border-indigo-200 dark:border-indigo-800/60 border-l-[6px] border-l-indigo-600 shadow-xs space-y-1">
                  <div class="flex items-center justify-between">
                    <span class="text-xs font-mono font-black px-2 py-0.5 rounded bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200">步驟 一</span>
                    <span class="text-xs font-bold text-indigo-600 dark:text-indigo-400">確立標準</span>
                  </div>
                  <h4 class="font-black text-base text-slate-900 dark:text-white">
                    確認所要檢討的構成要件 ➔ 找出所有的構成要件要素
                  </h4>
                  <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-serif">
                    鎖定特定刑法分則條文（如普通殺人罪 § 271），完整拆解出行為主體、構成要件行為、結果歸責與主觀要素。
                  </p>
                </div>

                <div class="p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-blue-50/70 to-slate-50 dark:from-blue-950/30 dark:to-slate-900 border-2 border-blue-200 dark:border-blue-800/60 border-l-[6px] border-l-blue-600 shadow-xs space-y-1">
                  <div class="flex items-center justify-between">
                    <span class="text-xs font-mono font-black px-2 py-0.5 rounded bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200">步驟 二</span>
                    <span class="text-xs font-bold text-blue-600 dark:text-blue-400">客觀比對</span>
                  </div>
                  <h4 class="font-black text-base text-slate-900 dark:text-white">
                    審查實際上「已發生的客觀事實」是否滿足所有構成要件要素 ➔ 客觀構成要件該當性的檢驗
                  </h4>
                  <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-serif">
                    檢驗外在現實世界中發生的事實，是否完全符合條文的客觀描述。
                  </p>
                </div>

                <div class="p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-purple-50/70 to-slate-50 dark:from-purple-950/30 dark:to-slate-900 border-2 border-purple-200 dark:border-purple-800/60 border-l-[6px] border-l-purple-600 shadow-xs space-y-1">
                  <div class="flex items-center justify-between">
                    <span class="text-xs font-mono font-black px-2 py-0.5 rounded bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200">步驟 三</span>
                    <span class="text-xs font-bold text-purple-600 dark:text-purple-400">主觀比對</span>
                  </div>
                  <h4 class="font-black text-base text-slate-900 dark:text-white">
                    審查行為人「行為時的主觀想法」是否滿足所有構成要件要素 ➔ 主觀構成要件該當性的檢驗
                  </h4>
                  <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-serif">
                    探求行為人內心世界在行為當下的認知（知）與意欲（欲），是否包含全部客觀要素。
                  </p>
                </div>
              </div>

            </div>
          </section>

          <!-- ==================== 二、檢驗架構流程圖與兩大核心重點 (教材第 3-20 頁) ==================== -->
          <section id="sec-p1ch3-sec1-framework" class="space-y-6 pt-2">
            <div class="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3">
              <div class="flex items-center gap-3">
                <span class="w-2.5 h-6 rounded-full bg-indigo-600"></span>
                <h3 class="text-lg sm:text-xl font-black text-slate-900 dark:text-white tracking-tight">
                  二、構成要件該當性的架構與檢驗順序（教材第 3-20 頁）
                </h3>
              </div>
              <span class="text-xs font-mono font-bold px-2.5 py-1 rounded-lg bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-800">
                p. 3-20 原書圖解復刻
              </span>
            </div>

            <div class="p-6 rounded-3xl border border-slate-200 dark:border-white/[0.08] bg-white dark:bg-[#101623] shadow-sm space-y-6">
              
              <!-- 復刻原書 p. 3-20 檢驗架構 SVG 圖 -->
              <div class="p-4 sm:p-6 rounded-2xl bg-gradient-to-b from-slate-50 to-indigo-50/30 dark:from-[#0d1424] dark:to-[#111a30] border border-slate-200 dark:border-slate-800 overflow-x-auto custom-scrollbar">
                <svg viewBox="0 0 780 420" class="w-full min-w-[680px] max-w-[780px] mx-auto block" style="font-family: inherit;">
                  <defs>
                    <linearGradient id="svgGradBlue" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stop-color="#3b82f6" />
                      <stop offset="100%" stop-color="#1d4ed8" />
                    </linearGradient>
                    <linearGradient id="svgGradPurple" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stop-color="#8b5cf6" />
                      <stop offset="100%" stop-color="#6d28d9" />
                    </linearGradient>
                    <linearGradient id="svgGradGray" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stop-color="#f8fafc" />
                      <stop offset="100%" stop-color="#e2e8f0" />
                    </linearGradient>
                    <filter id="svgShadow" x="-10%" y="-10%" width="120%" height="120%">
                      <feDropShadow dx="0" dy="2" stdDeviation="3" flood-opacity="0.12" />
                    </filter>
                  </defs>

                  <!-- 頂部橢圓：客觀事實 -->
                  <g filter="url(#svgShadow)">
                    <ellipse cx="260" cy="55" rx="110" ry="32" fill="#ffffff" class="dark:fill-slate-900" stroke="#3b82f6" stroke-width="2.5" />
                    <text x="260" y="61" text-anchor="middle" fill="#1e3a8a" class="dark:fill-blue-200" font-size="16" font-weight="900">客 觀 事 實</text>
                  </g>

                  <!-- 客觀檢驗箭頭向下 -->
                  <path d="M 260 88 L 260 140" fill="none" stroke="#3b82f6" stroke-width="2.5" stroke-linecap="round" />
                  <polygon points="260,148 254,136 266,136" fill="#3b82f6" />

                  <!-- 客觀構成要件該當性標籤 (右上) -->
                  <g filter="url(#svgShadow)">
                    <rect x="440" y="35" width="130" height="42" rx="10" fill="#eff6ff" class="dark:fill-blue-950" stroke="#3b82f6" stroke-width="2" />
                    <text x="505" y="61" text-anchor="middle" fill="#1d4ed8" class="dark:fill-blue-300" font-size="12" font-weight="900">客觀構成要件該當性</text>
                    <!-- 羅馬數字 II -->
                    <circle cx="595" cy="56" r="14" fill="#ffffff" class="dark:fill-slate-900" stroke="#3b82f6" stroke-width="2" />
                    <text x="595" y="61" text-anchor="middle" fill="#1d4ed8" class="dark:fill-blue-300" font-size="12" font-weight="900">II</text>
                  </g>
                  <path d="M 372 55 L 438 55" fill="none" stroke="#94a3b8" stroke-dasharray="3,3" stroke-width="2" />

                  <!-- 中間樞紐：三大要件核心容器 (法條標準) -->
                  <g filter="url(#svgShadow)">
                    <rect x="120" y="150" width="280" height="110" rx="16" fill="#ffffff" class="dark:fill-slate-900" stroke="#475569" stroke-width="2" />
                    
                    <!-- 行為主體 -->
                    <rect x="135" y="165" width="75" height="80" rx="10" fill="#f1f5f9" class="dark:fill-slate-800" stroke="#cbd5e1" stroke-width="1.5" />
                    <text x="172" y="200" text-anchor="middle" fill="#0f172a" class="dark:fill-white" font-size="13" font-weight="800">行為</text>
                    <text x="172" y="220" text-anchor="middle" fill="#0f172a" class="dark:fill-white" font-size="13" font-weight="800">主體</text>

                    <!-- 構成要件行為 -->
                    <rect x="222" y="165" width="75" height="80" rx="10" fill="#f1f5f9" class="dark:fill-slate-800" stroke="#cbd5e1" stroke-width="1.5" />
                    <text x="259" y="195" text-anchor="middle" fill="#0f172a" class="dark:fill-white" font-size="12" font-weight="800">構成要件</text>
                    <text x="259" y="215" text-anchor="middle" fill="#0f172a" class="dark:fill-white" font-size="12" font-weight="800">行為</text>

                    <!-- 構成要件結果歸責 -->
                    <rect x="310" y="165" width="75" height="80" rx="10" fill="#f1f5f9" class="dark:fill-slate-800" stroke="#cbd5e1" stroke-width="1.5" />
                    <text x="347" y="190" text-anchor="middle" fill="#0f172a" class="dark:fill-white" font-size="11" font-weight="800">構成要件</text>
                    <text x="347" y="208" text-anchor="middle" fill="#0f172a" class="dark:fill-white" font-size="11" font-weight="800">結果</text>
                    <text x="347" y="226" text-anchor="middle" fill="#0f172a" class="dark:fill-white" font-size="11" font-weight="800">歸責</text>
                  </g>

                  <!-- 右側樞紐：找出判斷標準 (I) -->
                  <g filter="url(#svgShadow)">
                    <rect x="440" y="184" width="130" height="42" rx="10" fill="#f8fafc" class="dark:fill-slate-800" stroke="#475569" stroke-width="2" />
                    <text x="505" y="210" text-anchor="middle" fill="#334155" class="dark:fill-slate-200" font-size="13" font-weight="900">找出判斷標準</text>
                    <!-- 羅馬數字 I -->
                    <circle cx="595" cy="205" r="14" fill="#ffffff" class="dark:fill-slate-900" stroke="#475569" stroke-width="2" />
                    <text x="595" y="210" text-anchor="middle" fill="#334155" class="dark:fill-slate-200" font-size="12" font-weight="900">I</text>
                  </g>
                  <path d="M 402 205 L 438 205" fill="none" stroke="#475569" stroke-width="2" />

                  <!-- 主觀檢驗箭頭向上 -->
                  <path d="M 260 322 L 260 270" fill="none" stroke="#8b5cf6" stroke-width="2.5" stroke-linecap="round" />
                  <polygon points="260,262 254,274 266,274" fill="#8b5cf6" />

                  <!-- 底部橢圓：主觀想法 -->
                  <g filter="url(#svgShadow)">
                    <ellipse cx="260" cy="355" rx="110" ry="32" fill="#ffffff" class="dark:fill-slate-900" stroke="#8b5cf6" stroke-width="2.5" />
                    <text x="260" y="361" text-anchor="middle" fill="#5b21b6" class="dark:fill-purple-200" font-size="16" font-weight="900">主 觀 想 法</text>
                  </g>

                  <!-- 主觀構成要件該當性標籤 (右下) -->
                  <g filter="url(#svgShadow)">
                    <rect x="440" y="335" width="130" height="42" rx="10" fill="#faf5ff" class="dark:fill-purple-950" stroke="#8b5cf6" stroke-width="2" />
                    <text x="505" y="361" text-anchor="middle" fill="#7c3aed" class="dark:fill-purple-300" font-size="12" font-weight="900">主觀構成要件該當性</text>
                    <!-- 羅馬數字 III -->
                    <circle cx="595" cy="356" r="14" fill="#ffffff" class="dark:fill-slate-900" stroke="#8b5cf6" stroke-width="2" />
                    <text x="595" y="361" text-anchor="middle" fill="#7c3aed" class="dark:fill-purple-300" font-size="12" font-weight="900">III</text>
                  </g>
                  <path d="M 372 355 L 438 355" fill="none" stroke="#94a3b8" stroke-dasharray="3,3" stroke-width="2" />

                  <!-- 側邊標記：先客觀後主觀流向 -->
                  <path d="M 640 56 L 660 56 L 660 356 L 640 356" fill="none" stroke="#cbd5e1" stroke-width="2" stroke-dasharray="4,4" />
                  <text x="675" y="210" fill="#64748b" font-size="11" font-weight="700" style="writing-mode: vertical-rl;">先客觀後主觀（答題效率）</text>
                </svg>
              </div>

              <!-- 兩大核心重點卡片（原書第 3-20 頁原文逐字呈現） -->
              <div class="space-y-4 pt-1">
                <!-- 重點一：標準同一性 -->
                <div class="p-5 rounded-2xl bg-gradient-to-br from-amber-50 to-orange-50/50 dark:from-amber-950/20 dark:to-slate-900 border-2 border-amber-300 dark:border-amber-800/60 border-l-[6px] border-l-amber-500 shadow-xs space-y-2">
                  <div class="flex items-center gap-2">
                    <span class="text-xs font-mono font-black px-2 py-0.5 rounded bg-amber-100 dark:bg-amber-900 text-amber-900 dark:text-amber-200">
                      核心重點 ①
                    </span>
                    <h4 class="font-black text-base text-amber-950 dark:text-amber-200">
                      標準同一性：判準絕不隨事實或想法變形
                    </h4>
                  </div>
                  <p class="font-serif text-sm text-slate-700 dark:text-slate-300 leading-relaxed text-justify">
                    構成要件該當性具有<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">「標準同一性」</span>，無論客觀抑或主觀構成要件，<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">其該當的標準都是位於中間的條文</span>，這個標準不會因為對照到客觀事實或主觀想法而有改變。
                  </p>
                </div>

                <!-- 重點二：先客觀後主觀 -->
                <div class="p-5 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50/50 dark:from-blue-950/20 dark:to-slate-900 border-2 border-blue-300 dark:border-blue-800/60 border-l-[6px] border-l-blue-600 shadow-xs space-y-2">
                  <div class="flex items-center gap-2">
                    <span class="text-xs font-mono font-black px-2 py-0.5 rounded bg-blue-100 dark:bg-blue-900 text-blue-900 dark:text-blue-200">
                      核心重點 ②
                    </span>
                    <h4 class="font-black text-base text-blue-950 dark:text-blue-200">
                      檢驗順序採「先客觀後主觀」：追求答題最高效率
                    </h4>
                  </div>
                  <p class="font-serif text-sm text-slate-700 dark:text-slate-300 leading-relaxed text-justify">
                    檢驗順序習慣上採取<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">「先客觀後主觀」</span>的流程，這其實沒有什麼理論上的必然，只跟答題效率有關。詳言之，既然客觀與主觀構成要件的判準完全相同，那答題時就沒必要重複書寫，鑑於<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">客觀事實較主觀想法具體明確，又方便對所有的構成要件詳加討論</span>，因此選擇以客觀構成要件為審查的起頭。
                  </p>
                </div>
              </div>

            </div>
          </section>

          <!-- ==================== 三、找出標準與該當判斷四組合 (教材第 3-20 ～ 3-21 頁) ==================== -->
          <section id="sec-p1ch3-sec1-find-standards" class="space-y-6 pt-2">
            <div class="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3">
              <div class="flex items-center gap-3">
                <span class="w-2.5 h-6 rounded-full bg-emerald-600"></span>
                <h3 class="text-lg sm:text-xl font-black text-slate-900 dark:text-white tracking-tight">
                  三、確立標準與該當判斷的四大排列組合（教材第 3-20 ～ 3-21 頁）
                </h3>
              </div>
              <span class="text-xs font-mono font-bold px-2.5 py-1 rounded-lg bg-emerald-50 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800">
                操作雙層次
              </span>
            </div>

            <div class="p-6 rounded-3xl border border-slate-200 dark:border-white/[0.08] bg-white dark:bg-[#101623] shadow-sm space-y-6">
              
              <!-- 層次一：找出標準 -->
              <div class="space-y-3">
                <h4 class="font-black text-base text-slate-900 dark:text-white flex items-center gap-2">
                  <span class="w-6 h-6 rounded-lg bg-emerald-600 text-white flex items-center justify-center text-xs">一</span>
                  <span>找出標準：鎖定罪名與微調五大要素</span>
                </h4>
                <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 font-serif text-xs sm:text-sm text-slate-700 dark:text-slate-300 space-y-2">
                  <p><strong>(一) 行為人所犯涉及哪個犯罪構成要件？</strong><br>在此直接找尋可能成立的分則犯罪，諸如殺人罪、傷害罪、妨害秘密罪、竊盜罪、聚眾不解散罪等等。</p>
                  <p><strong>(二) 該犯罪構成要件的內容為何？</strong><br>請分析條文當中的構成要件要素，切記遇到不純正不作為犯時，五大要素必須相對應地微調。</p>
                </div>
              </div>

              <!-- 層次二：該當判斷 -->
              <div class="space-y-3 pt-2">
                <h4 class="font-black text-base text-slate-900 dark:text-white flex items-center gap-2">
                  <span class="w-6 h-6 rounded-lg bg-indigo-600 text-white flex items-center justify-center text-xs">二</span>
                  <span>該當判斷：法學術語替換與四種排列組合</span>
                </h4>
                
                <!-- 術語替換公式框 -->
                <div class="p-4 rounded-xl bg-indigo-50/70 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-800 font-serif text-xs sm:text-sm text-slate-700 dark:text-slate-300 space-y-1.5 leading-relaxed">
                  <p>所謂該當，就是被檢驗的客體（已發生的客觀事實或行為時的主觀想法）符合構成要件的描述，否則就是未該當，結論上只有「該當、未該當」之別。以法學術語替換：</p>
                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1 font-mono font-bold text-xs">
                    <div class="p-2.5 rounded-lg bg-white dark:bg-slate-900 border border-indigo-200 text-blue-700 dark:text-blue-300">
                      • 客觀構成要件該當 ➔ <span class="underline decoration-red-500 decoration-2 font-black">「既遂」</span><br>
                      • 客觀未該當 ➔ <span class="text-rose-600">「非既遂」</span>
                    </div>
                    <div class="p-2.5 rounded-lg bg-white dark:bg-slate-900 border border-indigo-200 text-purple-700 dark:text-purple-300">
                      • 主觀構成要件該當 ➔ <span class="underline decoration-red-500 decoration-2 font-black">「故意」</span><br>
                      • 主觀未該當 ➔ <span class="text-rose-600">「非故意」</span>
                    </div>
                  </div>
                </div>

                <!-- 四大排列組合（嚴格單欄垂直堆疊） -->
                <div class="space-y-2.5 pt-2 font-serif text-xs sm:text-sm">
                  <!-- 組合 I -->
                  <div class="p-3.5 rounded-xl bg-blue-50/70 dark:bg-blue-950/30 border-l-4 border-l-blue-600 border border-blue-200 dark:border-blue-900/40 flex items-start gap-3">
                    <span class="font-mono font-black text-xs px-2 py-0.5 rounded bg-blue-600 text-white shrink-0 mt-0.5">組合 Ⅰ</span>
                    <div>
                      <span class="font-bold text-blue-900 dark:text-blue-200">【客觀該當 ＋ 主觀該當】</span>
                      <p class="text-slate-600 dark:text-slate-300 mt-0.5">
                        ➔ 可能成立<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">故意既遂犯</span>，乃刑法處罰的原則。
                      </p>
                    </div>
                  </div>

                  <!-- 組合 II -->
                  <div class="p-3.5 rounded-xl bg-purple-50/70 dark:bg-purple-950/30 border-l-4 border-l-purple-600 border border-purple-200 dark:border-purple-900/40 flex items-start gap-3">
                    <span class="font-mono font-black text-xs px-2 py-0.5 rounded bg-purple-600 text-white shrink-0 mt-0.5">組合 Ⅱ</span>
                    <div>
                      <span class="font-bold text-purple-900 dark:text-purple-200">【客觀不該當 ＋ 主觀該當】</span>
                      <p class="text-slate-600 dark:text-slate-300 mt-0.5">
                        ➔ 不成立故意既遂犯，但可以審查是否成立<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">未遂犯</span>（客觀上有無著手），乃刑法處罰的例外。
                      </p>
                    </div>
                  </div>

                  <!-- 組合 III -->
                  <div class="p-3.5 rounded-xl bg-amber-50/70 dark:bg-amber-950/30 border-l-4 border-l-amber-600 border border-amber-200 dark:border-amber-900/40 flex items-start gap-3">
                    <span class="font-mono font-black text-xs px-2 py-0.5 rounded bg-amber-600 text-white shrink-0 mt-0.5">組合 Ⅲ</span>
                    <div>
                      <span class="font-bold text-amber-900 dark:text-amber-200">【客觀該當 ＋ 主觀不該當】</span>
                      <p class="text-slate-600 dark:text-slate-300 mt-0.5">
                        ➔ 不成立故意既遂犯，但可以審查是否成立<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">過失犯</span>（主觀上有無預見可能性），乃刑法處罰的例外。
                      </p>
                    </div>
                  </div>

                  <!-- 組合 IV -->
                  <div class="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/50 border-l-4 border-l-slate-500 border border-slate-200 dark:border-slate-700 flex items-start gap-3">
                    <span class="font-mono font-black text-xs px-2 py-0.5 rounded bg-slate-600 text-white shrink-0 mt-0.5">組合 Ⅳ</span>
                    <div>
                      <span class="font-bold text-slate-800 dark:text-slate-200">【客觀不該當 ＋ 主觀不該當】</span>
                      <p class="text-slate-600 dark:text-slate-300 mt-0.5">
                        ➔ <span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">根本不成立犯罪</span>。
                      </p>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </section>

          <!-- ==================== 四、經典實戰案例研習：五位一體法學劇院 ==================== -->
          <section id="sec-p1ch3-sec1-cases" class="space-y-6 pt-2">
            <div class="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3">
              <div class="flex items-center gap-3">
                <span class="w-2.5 h-6 rounded-full bg-rose-600"></span>
                <h3 class="text-lg sm:text-xl font-black text-slate-900 dark:text-white tracking-tight">
                  四、五位一體法學劇院：實戰案例研習 3-1 ＆ 3-2
                </h3>
              </div>
              <span class="text-xs font-mono font-bold px-2.5 py-1 rounded-lg bg-rose-50 dark:bg-rose-950 text-rose-600 dark:text-rose-400 border border-rose-200 dark:border-rose-800">
                案例 3-1 ～ 3-2
              </span>
            </div>

            <div class="p-6 rounded-3xl border border-slate-200 dark:border-white/[0.08] bg-white dark:bg-[#101623] shadow-sm space-y-8">
              
              <!-- ════════════════ 案例 3-1 ════════════════ -->
              <div id="case-3-1" class="rounded-2xl border-2 border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 shadow-sm overflow-hidden space-y-4">
                <!-- 標頭列 -->
                <div class="bg-gradient-to-r from-rose-500/15 via-rose-500/5 to-transparent px-5 py-3 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between flex-wrap gap-2">
                  <div class="flex items-center gap-2">
                    <span class="w-3 h-3 rounded-full bg-rose-500"></span>
                    <span class="font-black text-rose-900 dark:text-rose-300 text-base sm:text-lg">【案例 3-1】萬聖節傑森嚇死室友案</span>
                  </div>
                  <span class="text-xs font-mono font-bold px-2.5 py-1 rounded-full bg-rose-100 dark:bg-rose-900 text-rose-800 dark:text-rose-200 border border-rose-300">
                    教材第 3-21 ～ 3-22 頁
                  </span>
                </div>

                <div class="p-5 sm:p-6 space-y-4 font-serif">
                  <!-- 課本案件事實 -->
                  <div class="rounded-xl bg-slate-50 dark:bg-slate-800/60 p-4 border-l-4 border-slate-600 text-slate-800 dark:text-slate-200 text-sm sm:text-base leading-relaxed text-justify">
                    <strong>📌 案件事實：</strong>甲趁著萬聖節將自己變裝一番，打扮成殺人魔傑森並躲在宿舍房間內，想要等室友乙回來後來個驚喜。孰料乙回房後實在過於驚嚇，竟然引發心臟衰竭而死亡。
                  </div>

                  <!-- 課本問題導引 -->
                  <div class="rounded-xl bg-blue-50/50 dark:bg-blue-950/20 p-4 border-l-4 border-blue-500 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed text-justify">
                    <strong>◀ 問題導引 ▶</strong> 先提醒大家一件事，若實際上所發生的客觀事實與行為人主觀上的想法一致，基於標準同一性，要嘛兩者都該當、要嘛兩者都不該當，不可能有一個該當、一個不該當的情形發生，除非你採取的標準會變形。本例中甲客觀上並無殺人行為，客觀構成要件不該當而非既遂；同時甲主觀上的想法與客觀事實相同（知道自己沒有殺人行為），故主觀構成要件不該當而非故意。
                  </div>

                  <!-- 五位一體法學劇院標準展開 -->
                  <!-- 1. ⚔️ 原被告/檢控辯護法庭正面言詞辯論 -->
                  <div class="rounded-2xl p-4 sm:p-5 bg-gradient-to-br from-rose-50/70 to-slate-50 dark:from-rose-950/30 dark:to-slate-900 border border-rose-200 dark:border-rose-900/50 space-y-3">
                    <div class="flex items-center gap-2 text-xs font-black text-rose-900 dark:text-rose-300">
                      <span>⚔️</span><span>法庭正面交鋒對決</span>
                    </div>
                    <!-- 控方：赤狐女律師 -->
                    <div class="flex items-start gap-3 p-3 rounded-xl bg-white dark:bg-slate-800/80 border border-rose-200 dark:border-rose-800/60">
                      <div class="w-10 h-10 rounded-full overflow-hidden shrink-0 border border-rose-400">
                        <img src="images/prosecutor_fox.jpg" alt="赤狐檢察官" class="w-full h-full object-cover" style="object-position: center 20%; transform: scale(1.35);">
                      </div>
                      <div class="flex-1 text-xs sm:text-sm">
                        <span class="font-black text-rose-800 dark:text-rose-300">公訴檢察官赤狐女律師：</span>
                        <p class="mt-0.5 text-slate-700 dark:text-slate-300">
                          「被告甲戴殺人魔面具躲藏突襲，直接誘發被害人心臟衰竭死亡！縱使不成立故意殺人既遂，亦製造不容許之驚嚇風險，應以過失致死罪或傷害致死罪究辦！」
                        </p>
                      </div>
                    </div>
                    <!-- 辯方：金毛大律師 -->
                    <div class="flex items-start gap-3 p-3 rounded-xl bg-white dark:bg-slate-800/80 border border-amber-200 dark:border-amber-800/60">
                      <div class="w-10 h-10 rounded-full overflow-hidden shrink-0 border border-amber-400">
                        <img src="images/golden_case_attorney.jpg" alt="金毛辯護大律師" class="w-full h-full object-cover" style="object-position: center 20%; transform: scale(1.35);">
                      </div>
                      <div class="flex-1 text-xs sm:text-sm">
                        <span class="font-black text-amber-800 dark:text-amber-300">辯護人金毛大律師：</span>
                        <p class="mt-0.5 text-slate-700 dark:text-slate-300">
                          「萬聖節扮裝乃社交常態容許之娛樂行為！甲客觀上自始無任何刑法意義之殺人或傷害著手，主觀上更無殺人故意。依標準同一性，客觀不該當、主觀亦不該當，殺人罪全然無由成立！」
                        </p>
                      </div>
                    </div>
                  </div>

                  <!-- 2. 🐾 柴柴法學教授 • 白話生活大解碼 -->
                  <div class="p-4 sm:p-5 rounded-xl bg-gradient-to-r from-amber-500/15 via-orange-500/5 to-transparent border-2 border-amber-300 dark:border-amber-700/70 flex items-start gap-3.5 shadow-xs">
                    <div class="w-11 h-11 rounded-full overflow-hidden shrink-0 border-2 border-amber-400 shadow-sm bg-amber-100">
                      <img src="images/shiba_law_professor.jpg" alt="柴柴" class="w-full h-full object-cover" style="object-position: center 20%; transform: scale(1.38);">
                    </div>
                    <div class="flex-1 space-y-1">
                      <div class="font-black text-amber-950 dark:text-amber-200 text-sm">🐾 柴柴法學教授 • 白話生活大解碼</div>
                      <p class="text-xs sm:text-sm text-slate-800 dark:text-slate-200 leading-relaxed text-justify">
                        「同學們請特別注意這句話：<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">客觀事實與主觀想法一致時，標準同一性決定了結論必然對稱！</span>甲以為自己在惡作劇（主觀無殺人想法），客觀上也只是站在門後大叫（客觀無殺人行為）。你拿『殺人罪』這個量尺去量，客觀量出來是不該當（非既遂），主觀量出來也是不該當（非故意），這就是組合 Ⅳ 的典型代表！」
                      </p>
                    </div>
                  </div>

                  <!-- 3. ⚖️ 金毛大律師 • 法庭攻防點評 -->
                  <div class="p-3.5 sm:p-4 rounded-xl bg-amber-50/80 dark:bg-amber-950/20 border border-amber-300 dark:border-amber-800/60 flex items-start gap-3">
                    <div class="w-10 h-10 rounded-full overflow-hidden shrink-0 border border-amber-400">
                      <img src="images/golden_case_attorney.jpg" alt="金毛" class="w-full h-full object-cover" style="object-position: center 20%; transform: scale(1.35);">
                    </div>
                    <div class="flex-1 text-xs sm:text-sm">
                      <span class="font-black text-amber-950 dark:text-amber-200">⚖️ 金毛大律師 • 法庭攻防點評</span>
                      <p class="mt-1 text-slate-700 dark:text-slate-300">
                        法庭上律師必須死守「殺人罪自始無著手」的鐵律！萬聖節惡作劇若室友身亡，檢方極可能轉向起訴刑法第 276 條過失致死罪；辯方此時的第二道防線是「欠缺預見可能性」——常人根本無法預見室友有潛在宿疾，力爭完全無罪判決！
                      </p>
                    </div>
                  </div>

                  <!-- 4. 🛡️ 德牧法規巡查官 • 法規雷達查核 -->
                  <div class="p-3.5 sm:p-4 rounded-xl bg-blue-50/80 dark:bg-blue-950/20 border border-blue-300 dark:border-blue-800/60 flex items-start gap-3">
                    <div class="w-10 h-10 rounded-full overflow-hidden shrink-0 border border-blue-400">
                      <img src="images/shepherd_law_inspector.jpg" alt="德牧" class="w-full h-full object-cover" style="object-position: center 15%; transform: scale(1.4);">
                    </div>
                    <div class="flex-1 text-xs sm:text-sm">
                      <span class="font-black text-blue-950 dark:text-blue-200">🛡️ 德牧法規巡查官 • 法規雷達查核</span>
                      <div class="mt-1 text-slate-700 dark:text-slate-300 space-y-1">
                        <div>🔍 <strong>【實體法檢索與裁判要旨】</strong></div>
                        <ul class="list-disc pl-5 space-y-0.5">
                          <li><strong>刑法 § 271 Ⅰ（殺人既遂罪）</strong>：客觀構成要件不該當（無殺人行為），主觀構成要件不該當（無殺人故意）。</li>
                          <li><strong>刑法 § 276（過失致死罪）</strong>：本罪成罪與否，取決於行為人對被害人特殊體質在客觀上有無預見可能性。若無特殊病史告知，實務多認阻卻客觀歸責。</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <!-- 5. 👨‍⚖️ 邊牧首席審判長 • 終審裁決一槌定音 -->
                  <div class="rounded-2xl p-4 sm:p-5 bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white border-2 border-amber-400/80 shadow-md space-y-2.5">
                    <div class="flex items-center justify-between border-b border-white/10 pb-2">
                      <div class="flex items-center gap-2 font-black text-amber-300 text-xs sm:text-sm">
                        <div class="w-6 h-6 rounded-lg overflow-hidden border border-amber-400 shrink-0">
                          <img src="images/border_collie_chief_judge.jpg" alt="邊牧" class="w-full h-full object-cover" style="object-position: center 25%; transform: scale(1.35);">
                        </div>
                        <span>👨‍⚖️ 邊牧首席審判長 • 終審裁決一槌定音</span>
                      </div>
                      <span class="text-xs text-amber-400 font-bold">#法槌一敲誰與爭鋒</span>
                    </div>
                    <div class="text-xs sm:text-sm font-serif text-slate-200 leading-relaxed space-y-1.5">
                      <p>🔨 <strong>【實體法定讞】</strong>甲就殺人罪部分，客觀與主觀構成要件均不該當（非既遂亦非故意），殺人罪不成立！</p>
                      <p>💡 <strong>【國考答題定錨】</strong>遇到本題，切莫因有人死亡就直接跳進故意殺人或傷害致死審查；必須先從殺人罪構成要件該當性著手，點出甲客觀上無殺害行為、主觀上無殺害故意，俐落排除殺人罪！</p>
                    </div>
                    <div class="p-2.5 rounded-lg bg-white/5 border border-white/10 text-[11px] text-slate-300">
                      📅 <strong>2026 最新法條動態備註</strong>：過失致死罪（刑法 § 276）自民國 108 年修正後，已正式刪除業務過失致死之規定，全面回歸單一過失致死罪名，最高處五年有期徒刑。
                    </div>
                  </div>

                </div>
              </div>

              <!-- ════════════════ 案例 3-2 ════════════════ -->
              <div id="case-3-2" class="rounded-2xl border-2 border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 shadow-sm overflow-hidden space-y-4">
                <!-- 標頭列 -->
                <div class="bg-gradient-to-r from-amber-500/15 via-amber-500/5 to-transparent px-5 py-3 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between flex-wrap gap-2">
                  <div class="flex items-center gap-2">
                    <span class="w-3 h-3 rounded-full bg-amber-500"></span>
                    <span class="font-black text-amber-900 dark:text-amber-300 text-base sm:text-lg">【案例 3-2】彩虹獵場射殺探照燈登山客案</span>
                  </div>
                  <span class="text-xs font-mono font-bold px-2.5 py-1 rounded-full bg-amber-100 dark:bg-amber-900 text-amber-800 dark:text-amber-200 border border-amber-300">
                    教材第 3-22 頁
                  </span>
                </div>

                <div class="p-5 sm:p-6 space-y-4 font-serif">
                  <!-- 課本案件事實 -->
                  <div class="rounded-xl bg-slate-50 dark:bg-slate-800/60 p-4 border-l-4 border-slate-600 text-slate-800 dark:text-slate-200 text-sm sm:text-base leading-relaxed text-justify">
                    <strong>📌 案件事實：</strong>甲在彩虹獵場中合法狩獵時，見到有隻野狼在夜中眼睛閃閃發光，甲見狀旋即開槍獵殺，孰料走近後才發現殺死的是一個戴著微型探照燈的登山客乙。
                  </div>

                  <!-- 課本問題導引 -->
                  <div class="rounded-xl bg-blue-50/50 dark:bg-blue-950/20 p-4 border-l-4 border-blue-500 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed text-justify">
                    <strong>◀ 問題導引 ▶</strong> 就殺人罪的法條而言，客觀上甲確實殺死一個人而該當，但甲主觀上卻不知道自己正在殺人而不該當。基於標準同一性，作為判斷標準的「殺人罪法條」從頭到尾都沒有改變，之所以會得出「客觀該當＋主觀不該當」的結論，是因為客觀事實（殺死一個人）與主觀想法（獵殺一匹狼）自始不一致的關係。
                  </div>

                  <!-- 五位一體法學劇院標準展開 -->
                  <!-- 1. ⚔️ 原被告/檢控辯護法庭正面言詞辯論 -->
                  <div class="rounded-2xl p-4 sm:p-5 bg-gradient-to-br from-amber-50/70 to-slate-50 dark:from-amber-950/30 dark:to-slate-900 border border-amber-200 dark:border-amber-900/50 space-y-3">
                    <div class="flex items-center gap-2 text-xs font-black text-amber-900 dark:text-amber-300">
                      <span>⚔️</span><span>法庭正面交鋒對決</span>
                    </div>
                    <!-- 控方：赤狐女律師 -->
                    <div class="flex items-start gap-3 p-3 rounded-xl bg-white dark:bg-slate-800/80 border border-rose-200 dark:border-rose-800/60">
                      <div class="w-10 h-10 rounded-full overflow-hidden shrink-0 border border-rose-400">
                        <img src="images/prosecutor_fox.jpg" alt="赤狐檢察官" class="w-full h-full object-cover" style="object-position: center 20%; transform: scale(1.35);">
                      </div>
                      <div class="flex-1 text-xs sm:text-sm">
                        <span class="font-black text-rose-800 dark:text-rose-300">公訴檢察官赤狐女律師：</span>
                        <p class="mt-0.5 text-slate-700 dark:text-slate-300">
                          「被告開真槍射擊導致活生生的人當場斃命！客觀殺人既遂已板上釘釘，在夜間未查明目標便扣板機，縱無直接故意亦有未必故意，至少成立過失致死罪！」
                        </p>
                      </div>
                    </div>
                    <!-- 辯方：金毛大律師 -->
                    <div class="flex items-start gap-3 p-3 rounded-xl bg-white dark:bg-slate-800/80 border border-amber-200 dark:border-amber-800/60">
                      <div class="w-10 h-10 rounded-full overflow-hidden shrink-0 border border-amber-400">
                        <img src="images/golden_case_attorney.jpg" alt="金毛辯護大律師" class="w-full h-full object-cover" style="object-position: center 20%; transform: scale(1.35);">
                      </div>
                      <div class="flex-1 text-xs sm:text-sm">
                        <span class="font-black text-amber-800 dark:text-amber-300">辯護人金毛大律師：</span>
                        <p class="mt-0.5 text-slate-700 dark:text-slate-300">
                          「被告身處合法獵場，主觀上唯一目標是『獵殺野狼』，對『殺死人類』自始欠缺認識！依刑法第 16 條及構成要件錯誤法理，主觀殺人故意阻卻，絕不構成故意殺人罪！」
                        </p>
                      </div>
                    </div>
                  </div>

                  <!-- 2. 🐾 柴柴法學教授 • 白話生活大解碼 -->
                  <div class="p-4 sm:p-5 rounded-xl bg-gradient-to-r from-amber-500/15 via-orange-500/5 to-transparent border-2 border-amber-300 dark:border-amber-700/70 flex items-start gap-3.5 shadow-xs">
                    <div class="w-11 h-11 rounded-full overflow-hidden shrink-0 border-2 border-amber-400 shadow-sm bg-amber-100">
                      <img src="images/shiba_law_professor.jpg" alt="柴柴" class="w-full h-full object-cover" style="object-position: center 20%; transform: scale(1.38);">
                    </div>
                    <div class="flex-1 space-y-1">
                      <div class="font-black text-amber-950 dark:text-amber-200 text-sm">🐾 柴柴法學教授 • 白話生活大解碼</div>
                      <p class="text-xs sm:text-sm text-slate-800 dark:text-slate-200 leading-relaxed text-justify">
                        「這就是考卷上最迷人的<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">『客觀有幹成、心裡不知道』</span>（組合 Ⅲ）！判斷標準自始至終都是刑法第 271 條殺人罪，標準沒有變形。客觀上看，子彈打進人體人死掉，確實是『客觀該當（既遂）』；但主觀上看，甲腦子裡想的是射狼，根本沒有『明知並有意殺死人』，所以『主觀不該當（非故意）』。這就是刑法上極為關鍵的<strong>客觀構成要件要素錯誤（白話：誤把人當狼）</strong>！」
                      </p>
                    </div>
                  </div>

                  <!-- 3. ⚖️ 金毛大律師 • 法庭攻防點評 -->
                  <div class="p-3.5 sm:p-4 rounded-xl bg-amber-50/80 dark:bg-amber-950/20 border border-amber-300 dark:border-amber-800/60 flex items-start gap-3">
                    <div class="w-10 h-10 rounded-full overflow-hidden shrink-0 border border-amber-400">
                      <img src="images/golden_case_attorney.jpg" alt="金毛" class="w-full h-full object-cover" style="object-position: center 20%; transform: scale(1.35);">
                    </div>
                    <div class="flex-1 text-xs sm:text-sm">
                      <span class="font-black text-amber-950 dark:text-amber-200">⚖️ 金毛大律師 • 法庭攻防點評</span>
                      <p class="mt-1 text-slate-700 dark:text-slate-300">
                        遇到「客觀該當＋主觀不該當」，大律師第一步先斬斷「故意殺人罪」（刑期十年起跳至死刑），直接使被告脫離重罪苦海；第二步再針對檢察官追加的過失致死罪（§ 276），檢驗甲在合法夜獵場域是否有確認目標的反覆注意義務，為當事人爭取最佳緩刑或輕判利益！
                      </p>
                    </div>
                  </div>

                  <!-- 4. 🛡️ 德牧法規巡查官 • 法規雷達查核 -->
                  <div class="p-3.5 sm:p-4 rounded-xl bg-blue-50/80 dark:bg-blue-950/20 border border-blue-300 dark:border-blue-800/60 flex items-start gap-3">
                    <div class="w-10 h-10 rounded-full overflow-hidden shrink-0 border border-blue-400">
                      <img src="images/shepherd_law_inspector.jpg" alt="德牧" class="w-full h-full object-cover" style="object-position: center 15%; transform: scale(1.4);">
                    </div>
                    <div class="flex-1 text-xs sm:text-sm">
                      <span class="font-black text-blue-950 dark:text-blue-200">🛡️ 德牧法規巡查官 • 法規雷達查核</span>
                      <div class="mt-1 text-slate-700 dark:text-slate-300 space-y-1">
                        <div>🔍 <strong>【實體法檢索與裁判要旨】</strong></div>
                        <ul class="list-disc pl-5 space-y-0.5">
                          <li><strong>刑法 § 13（故意）</strong>：行為人對於構成犯罪之事實，明知並有意使其發生者，為故意。欠缺認識者，阻卻故意。</li>
                          <li><strong>刑法 § 14 Ⅰ（過失）</strong>：行為人雖非故意，但按其情節應注意，並能注意，而不注意者，為過失。</li>
                          <li><strong>最高法院 92 年台上字第 442 號判決</strong>：行為人誤認被害人為野獸而開槍射殺，阻卻殺人故意，僅得依過失致人於死罪論處。</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <!-- 5. 👨‍⚖️ 邊牧首席審判長 • 終審裁決一槌定音 -->
                  <div class="rounded-2xl p-4 sm:p-5 bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white border-2 border-amber-400/80 shadow-md space-y-2.5">
                    <div class="flex items-center justify-between border-b border-white/10 pb-2">
                      <div class="flex items-center gap-2 font-black text-amber-300 text-xs sm:text-sm">
                        <div class="w-6 h-6 rounded-lg overflow-hidden border border-amber-400 shrink-0">
                          <img src="images/border_collie_chief_judge.jpg" alt="邊牧" class="w-full h-full object-cover" style="object-position: center 25%; transform: scale(1.35);">
                        </div>
                        <span>👨‍⚖️ 邊牧首席審判長 • 終審裁決一槌定音</span>
                      </div>
                      <span class="text-xs text-amber-400 font-bold">#法槌一敲誰與爭鋒</span>
                    </div>
                    <div class="text-xs sm:text-sm font-serif text-slate-200 leading-relaxed space-y-1.5">
                      <p>🔨 <strong>【實體法定讞】</strong>甲客觀該當殺人罪，主觀欠缺殺人故意（阻卻故意），不成立故意殺人罪；轉而成立刑法第 276 條過失致人於死罪！</p>
                      <p>💡 <strong>【國考答題定錨】</strong>此乃「構成要件客體錯誤（誤人為獸）」經典考型！作答公式：先論故意殺人罪（客觀該當、主觀阻卻故意不成立），次論過失致死罪（具客觀預見可能性成立過失致死罪）。</p>
                    </div>
                    <div class="p-2.5 rounded-lg bg-white/5 border border-white/10 text-[11px] text-slate-300">
                      📅 <strong>2026 最新法條動態備註</strong>：原住民野生動物保育法與槍砲彈藥刀械管制條例經 110 年司法院釋字第 803 號解釋後，針對合法自製獵槍狩獵之規範已大幅修正，然「誤擊人類」於刑法評價上依舊穩健回歸過失致死罪之檢驗。
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </section>

          <!-- 章節尾聲導航 -->
          <div class="pt-6 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between gap-4">
            <button onclick="switchView('part1-ch3')" class="px-4 py-2 rounded-xl bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 font-bold text-xs flex items-center gap-1.5 border border-slate-200 dark:border-slate-700 cursor-pointer">
              <span>← 返回第三章總覽</span>
            </button>
            <button onclick="switchView('part1-ch3-sec2')" class="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs flex items-center gap-1.5 shadow-sm cursor-pointer">
              <span>進入 第二節 各種論罪類型簡介 →</span>
            </button>
          </div>

        </div>
`;
