/**
 * view-part1-ch3.js
 * 第一篇 第三章 論罪類型（開章前言與體系總覽）
 * 嚴格遵循 AGENTS.md 最高行為憲法規範：
 * 1. 逐字精準核對課本原文（零錯字、零腦補、1:1 原書排版復刻）
 * 2. 嚴格單欄垂直上下堆疊排版（Strict Vertical Stacking，嚴禁橫向並排）
 * 3. 重點文字採用「純紅底線」規範（No Aggressive Red Text）
 * 4. 復刻原書倒三角章節抬頭風格與三大核心論罪類型圖解
 * 5. 犬系法學四大天王「論罪類型開章導讀客廳」深度解碼與 2026 最新法條動態定錨
 * 6. Zero-CORS 本機秒開相容架構
 */

window.APP_VIEWS = window.APP_VIEWS || {};
window.APP_VIEWS['viewPart1Chapter3'] = window.APP_VIEWS['viewPart1Ch3'] = window.APP_VIEWS['part1Ch3'] = window.APP_VIEWS['part1Chapter3'] = window.APP_VIEWS['part1-ch3'] = `
        <!-- VIEW: 第一篇 第三章 論罪類型 (開章前言與體系總覽) -->
        <div id="viewPart1Chapter3" class="fade-enter hidden space-y-8">
          
          <!-- 頂部麵包屑導航與快速返回 -->
          <div class="flex items-center justify-between gap-4 border-b border-slate-200/80 dark:border-white/10 pb-3">
            <nav class="flex items-center gap-2 text-xs font-medium text-slate-500 dark:text-slate-400 flex-wrap">
              <button onclick="switchView('part1')" class="hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer">第一篇</button>
              <span>/</span>
              <button onclick="switchView('part1-ch2-sec4')" class="hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer">第二章 犯罪類型</button>
              <span>/</span>
              <span class="text-blue-600 dark:text-blue-400 font-bold">第三章 論罪類型</span>
            </nav>
            <div class="flex items-center gap-2">
              <button onclick="switchView('part1-ch2-sec4')" class="text-xs text-slate-500 dark:text-slate-400 hover:text-amber-600 dark:hover:text-amber-400 flex items-center gap-1 transition-colors shrink-0 font-medium cursor-pointer">
                <span>← 上一節：第二章第四節 一般犯與身分犯</span>
              </button>
              <button onclick="switchView('part1')" class="text-xs text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 flex items-center gap-1 transition-colors shrink-0 font-bold cursor-pointer">
                <span>← 返回第一篇導讀</span>
              </button>
            </div>
          </div>

          <!-- 章節大標題 (1:1 復刻原書倒三角章節抬頭風格) -->
          <div class="space-y-3">
            <div class="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-mono text-xs font-bold">
              <span>第一篇・第三章</span>
              <span class="px-2 py-0.5 rounded-md bg-blue-50 dark:bg-blue-950/40 text-[11px] border border-blue-200 dark:border-blue-900/50">
                開章前言原文收錄
              </span>
            </div>

            <!-- 原書風格章節標頭（粗襯線體大標題＋手繪風底線倒三角飾條） -->
            <div class="relative pt-2 pb-1">
              <div class="inline-flex flex-col items-center">
                <span class="font-serif font-black text-xl sm:text-2xl text-slate-900 dark:text-white tracking-widest border-b-2 border-slate-800 dark:border-slate-200 pb-1 px-4">
                  第 三 章
                </span>
                <span class="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-slate-800 dark:border-t-slate-200 mt-0.5"></span>
              </div>
              <h2 class="text-2xl sm:text-3xl md:text-4xl font-serif font-black text-slate-900 dark:text-white tracking-tight mt-3">
                論罪類型
              </h2>
            </div>
            
            <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-serif leading-relaxed max-w-3xl">
              掌握單一具體犯罪被論處的實質態樣：從構成要件該當性的判斷原理出發，解構故意既遂犯、未遂犯與過失犯三大國考命題核心！
            </p>
          </div>

          <!-- ══════════════════════════════════════════════════════════ -->
          <!-- 一、章前導言：論罪類型核心定義 (課本 1:1 原文精讀) -->
          <!-- ══════════════════════════════════════════════════════════ -->
          <section id="sec-p1ch3-preface" class="space-y-6 pt-2">
            <div class="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3">
              <div class="flex items-center gap-3">
                <span class="w-2.5 h-6 rounded-full bg-blue-600"></span>
                <h3 class="text-lg sm:text-xl font-black text-slate-900 dark:text-white tracking-tight">
                  一、章前導言：論罪類型的核心定義與學習藍圖
                </h3>
              </div>
              <span class="text-xs font-mono font-bold px-2.5 py-1 rounded-lg bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-800">
                課本原文 1:1
              </span>
            </div>

            <div class="p-6 rounded-3xl border border-slate-200 dark:border-white/[0.08] bg-white dark:bg-[#101623] shadow-sm space-y-6">
              
              <!-- 旗艦卡片：前言核心原文 -->
              <div class="p-6 rounded-2xl bg-gradient-to-br from-blue-50 via-indigo-50/40 to-slate-50 dark:from-[#0a192f] dark:via-[#101c36] dark:to-[#0f172a] border-2 border-blue-300 dark:border-blue-500/80 border-l-[8px] border-l-blue-600 dark:border-l-blue-400 shadow-sm space-y-4">
                <div class="flex items-center justify-between flex-wrap gap-2">
                  <div class="flex items-center gap-2.5">
                    <span class="text-2xl">📜</span>
                    <div>
                      <span class="font-black text-sm sm:text-base text-blue-950 dark:text-blue-100">
                        論罪類型（Types of Offenses Charged）
                      </span>
                      <span class="block text-[11px] font-mono font-bold text-blue-600 dark:text-blue-400 tracking-wider">
                        CRIMINAL IMPUTATION & OFFENSE MODES
                      </span>
                    </div>
                  </div>
                  <span class="text-xs font-mono font-bold px-3 py-1 rounded-lg bg-blue-600 text-white shadow-xs">
                    開章原文
                  </span>
                </div>

                <!-- 1:1 原文呈現區（嚴格遵循 AGENTS.md 純紅底線重點標記） -->
                <div class="p-5 sm:p-6 rounded-xl bg-white dark:bg-slate-900 border-2 border-blue-200 dark:border-blue-900/60 shadow-xs">
                  <p class="font-serif text-base sm:text-lg text-slate-800 dark:text-slate-200 leading-loose text-justify tracking-wide indent-8">
                    論罪類型就是<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">單一具體犯罪可能被論處的態樣</span>，諸如<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">故意既遂犯、未遂犯與過失犯</span>，雖說還有其他類型，但考題幾乎都圍繞在這三種打轉。以下先介紹<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">構成要件該當性的判斷原理</span>，再簡介<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">各種論罪類型的結構</span>。
                  </p>
                </div>
              </div>

              <!-- 兩大核心維度對比：犯罪類型 vs 論罪類型 -->
              <div class="p-5 sm:p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/80 space-y-4">
                <div class="flex items-center gap-2">
                  <span class="text-xl">⚖️</span>
                  <h4 class="font-black text-base text-slate-900 dark:text-white">
                    體系定位對決：犯罪類型（第二章）vs 論罪類型（第三章）
                  </h4>
                </div>
                
                <div class="space-y-3 font-serif text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                  <div class="p-3.5 rounded-xl bg-white dark:bg-slate-900 border-l-4 border-l-indigo-600 border border-slate-200 dark:border-slate-700">
                    <span class="font-bold text-indigo-700 dark:text-indigo-400">📁 第二章【犯罪類型】（行為本身的本質特徵）</span>：
                    <p class="mt-1 text-slate-600 dark:text-slate-300">
                      針對「單一具體犯罪」之特徵與內涵作歸納整理。例如探討殺人罪（§ 271）本身屬於<strong>一般犯、狀態犯、結果犯、實害犯</strong>。
                    </p>
                  </div>
                  <div class="p-3.5 rounded-xl bg-white dark:bg-slate-900 border-l-4 border-l-blue-600 border border-slate-200 dark:border-slate-700">
                    <span class="font-bold text-blue-700 dark:text-blue-400">🎯 第三章【論罪類型】（法官如何論處該行為）</span>：
                    <p class="mt-1 text-slate-600 dark:text-slate-300">
                      就單一具體犯罪在個案中被<strong>「該當論處的形式」</strong>作分類。例如同一個殺人罪，行為人最終在裁判上究竟被論以<strong>故意既遂犯</strong>、<strong>未遂犯</strong>，抑或是<strong>過失犯</strong>。
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </section>

          <!-- ══════════════════════════════════════════════════════════ -->
          <!-- 二、三大核心論罪類型體系結構全景 (SVG 高質感架構圖) -->
          <!-- ══════════════════════════════════════════════════════════ -->
          <section id="sec-p1ch3-three-types" class="space-y-6 pt-2">
            <div class="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3">
              <div class="flex items-center gap-3">
                <span class="w-2.5 h-6 rounded-full bg-indigo-600"></span>
                <h3 class="text-lg sm:text-xl font-black text-slate-900 dark:text-white tracking-tight">
                  二、國考三大核心論罪態樣全景架構
                </h3>
              </div>
              <span class="text-xs font-mono font-bold px-2.5 py-1 rounded-lg bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-800">
                體系樞紐
              </span>
            </div>

            <div class="p-6 rounded-3xl border border-slate-200 dark:border-white/[0.08] bg-white dark:bg-[#101623] shadow-sm space-y-6">
              
              <!-- 核心 SVG 架構全景圖 -->
              <div class="p-4 sm:p-6 rounded-2xl bg-gradient-to-b from-slate-50 to-indigo-50/30 dark:from-[#0d1424] dark:to-[#111a30] border border-slate-200 dark:border-slate-800 overflow-x-auto custom-scrollbar">
                <svg viewBox="0 0 840 280" class="w-full min-w-[720px] max-w-[840px] mx-auto block" style="font-family: inherit;">
                  <defs>
                    <linearGradient id="gradP1C3Core" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stop-color="#2563eb" />
                      <stop offset="100%" stop-color="#1d4ed8" />
                    </linearGradient>
                    <linearGradient id="gradP1C3A" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stop-color="#3b82f6" />
                      <stop offset="100%" stop-color="#1d4ed8" />
                    </linearGradient>
                    <linearGradient id="gradP1C3B" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stop-color="#8b5cf6" />
                      <stop offset="100%" stop-color="#6d28d9" />
                    </linearGradient>
                    <linearGradient id="gradP1C3C" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stop-color="#f59e0b" />
                      <stop offset="100%" stop-color="#d97706" />
                    </linearGradient>
                    <filter id="shadowP1C3" x="-10%" y="-10%" width="120%" height="120%">
                      <feDropShadow dx="0" dy="3" stdDeviation="3" flood-opacity="0.15" />
                    </filter>
                  </defs>

                  <!-- 頂層總核心節點：論罪類型 -->
                  <g filter="url(#shadowP1C3)">
                    <rect x="290" y="20" width="260" height="60" rx="16" fill="url(#gradP1C3Core)" stroke="#60a5fa" stroke-width="2" />
                    <text x="420" y="47" text-anchor="middle" fill="#ffffff" font-size="16" font-weight="900" letter-spacing="1">論 罪 類 型</text>
                    <text x="420" y="66" text-anchor="middle" fill="#bfdbfe" font-size="11" font-family="monospace">單一具體犯罪可能被論處的態樣</text>
                  </g>

                  <!-- 分流連接引導線 -->
                  <path d="M 420 80 L 420 115 M 160 115 L 680 115 M 160 115 L 160 145 M 420 115 L 420 145 M 680 115 L 680 145" fill="none" stroke="#94a3b8" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />

                  <!-- 子節點 1：故意既遂犯 (主幹基準) -->
                  <g filter="url(#shadowP1C3)">
                    <rect x="50" y="145" width="220" height="115" rx="14" fill="#ffffff" class="dark:fill-slate-900" stroke="#3b82f6" stroke-width="2.5" />
                    <rect x="50" y="145" width="220" height="34" rx="14" fill="url(#gradP1C3A)" />
                    <text x="160" y="168" text-anchor="middle" fill="#ffffff" font-size="14" font-weight="900">① 故意既遂犯</text>
                    <text x="160" y="200" text-anchor="middle" fill="#1e3a8a" class="dark:fill-blue-300" font-size="12" font-weight="700">【刑法分則之原則藍本】</text>
                    <text x="160" y="222" text-anchor="middle" fill="#64748b" class="dark:fill-slate-400" font-size="11">§ 12 Ⅰ 處罰以故意為原則</text>
                    <text x="160" y="242" text-anchor="middle" fill="#64748b" class="dark:fill-slate-400" font-size="11">行為實行＋結果發生＋因果歸責</text>
                  </g>

                  <!-- 子節點 2：未遂犯 (行為終了/未終了) -->
                  <g filter="url(#shadowP1C3)">
                    <rect x="310" y="145" width="220" height="115" rx="14" fill="#ffffff" class="dark:fill-slate-900" stroke="#8b5cf6" stroke-width="2.5" />
                    <rect x="310" y="145" width="220" height="34" rx="14" fill="url(#gradP1C3B)" />
                    <text x="420" y="168" text-anchor="middle" fill="#ffffff" font-size="14" font-weight="900">② 未遂犯</text>
                    <text x="420" y="200" text-anchor="middle" fill="#5b21b6" class="dark:fill-purple-300" font-size="12" font-weight="700">【著手實行而未生結果】</text>
                    <text x="420" y="222" text-anchor="middle" fill="#64748b" class="dark:fill-slate-400" font-size="11">§ 25 處罰以有特別規定為限</text>
                    <text x="420" y="242" text-anchor="middle" fill="#64748b" class="dark:fill-slate-400" font-size="11">主觀具故意＋客觀已著手</text>
                  </g>

                  <!-- 子節點 3：過失犯 (無故意但有注意義務) -->
                  <g filter="url(#shadowP1C3)">
                    <rect x="570" y="145" width="220" height="115" rx="14" fill="#ffffff" class="dark:fill-slate-900" stroke="#f59e0b" stroke-width="2.5" />
                    <rect x="570" y="145" width="220" height="34" rx="14" fill="url(#gradP1C3C)" />
                    <text x="680" y="168" text-anchor="middle" fill="#ffffff" font-size="14" font-weight="900">③ 過失犯</text>
                    <text x="680" y="200" text-anchor="middle" fill="#92400e" class="dark:fill-amber-300" font-size="12" font-weight="700">【應注意、能注意而不注意】</text>
                    <text x="680" y="222" text-anchor="middle" fill="#64748b" class="dark:fill-slate-400" font-size="11">§ 12 Ⅱ 特別規定始處罰</text>
                    <text x="680" y="242" text-anchor="middle" fill="#64748b" class="dark:fill-slate-400" font-size="11">§ 14 無認識／有認識過失</text>
                  </g>
                </svg>
              </div>

              <!-- 三大論罪類型單欄垂直堆疊卡片（嚴格遵循 AGENTS.md 單欄排版規範） -->
              <div class="space-y-4 pt-2">
                <!-- 故意既遂犯 -->
                <div class="p-5 rounded-2xl bg-blue-50/70 dark:bg-blue-950/30 border-2 border-blue-200 dark:border-blue-800/60 border-l-[6px] border-l-blue-600 space-y-2">
                  <div class="flex items-center justify-between">
                    <span class="text-xs font-mono font-black px-2.5 py-0.5 rounded bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200">
                      論罪態樣 ① • 分則原型
                    </span>
                    <span class="text-xs font-mono font-bold text-blue-600 dark:text-blue-400">刑法 § 12 Ⅰ</span>
                  </div>
                  <h4 class="font-black text-base text-slate-900 dark:text-white">
                    故意既遂犯：刑法處罰之核心出發點
                  </h4>
                  <p class="text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-serif leading-relaxed">
                    刑法分則所有條文，均是以<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">故意既遂犯</span>為藍本而制定！行為人主觀上具備構成要件故意（知與欲，§ 13），客觀上著手實行行為並完整發生侵害結果，且結果歸責於行為人。
                  </p>
                </div>

                <!-- 未遂犯 -->
                <div class="p-5 rounded-2xl bg-purple-50/70 dark:bg-purple-950/30 border-2 border-purple-200 dark:border-purple-800/60 border-l-[6px] border-l-purple-600 space-y-2">
                  <div class="flex items-center justify-between">
                    <span class="text-xs font-mono font-black px-2.5 py-0.5 rounded bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200">
                      論罪態樣 ② • 刑罰前置
                    </span>
                    <span class="text-xs font-mono font-bold text-purple-600 dark:text-purple-400">刑法 § 25</span>
                  </div>
                  <h4 class="font-black text-base text-slate-900 dark:text-white">
                    未遂犯：著手實行而未發生結果之例外處罰
                  </h4>
                  <p class="text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-serif leading-relaxed">
                    已著手於犯罪行為之實行而不遂者，為未遂犯。<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">未遂犯之處罰，以有特別規定者為限</span>。其核心爭點在於「著手時點」之判定（主客觀混合說）以及中止未遂、不能未遂之責任寬恕。
                  </p>
                </div>

                <!-- 過失犯 -->
                <div class="p-5 rounded-2xl bg-amber-50/70 dark:bg-amber-950/30 border-2 border-amber-200 dark:border-amber-800/60 border-l-[6px] border-l-amber-600 space-y-2">
                  <div class="flex items-center justify-between">
                    <span class="text-xs font-mono font-black px-2.5 py-0.5 rounded bg-amber-100 dark:bg-amber-900 text-amber-800 dark:text-amber-200">
                      論罪態樣 ③ • 注意義務違反
                    </span>
                    <span class="text-xs font-mono font-bold text-amber-600 dark:text-amber-400">刑法 § 12 Ⅱ、§ 14</span>
                  </div>
                  <h4 class="font-black text-base text-slate-900 dark:text-white">
                    過失犯：欠缺主觀惡意但違反客觀注意義務
                  </h4>
                  <p class="text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-serif leading-relaxed">
                    <span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">過失行為之處罰，以有特別規定者為限</span>。行為人按其情節應注意並能注意而不注意（無認識之過失），或雖預見其能發生而確信其不發生（有認識之過失）。
                  </p>
                </div>
              </div>

            </div>
          </section>

          <!-- ══════════════════════════════════════════════════════════ -->
          <!-- 三、本章研讀路徑與待增補章節插槽 (遵循 Skill 待填入插槽規範) -->
          <!-- ══════════════════════════════════════════════════════════ -->
          <section id="sec-p1ch3-roadmap" class="space-y-6 pt-2">
            <div class="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3">
              <div class="flex items-center gap-3">
                <span class="w-2.5 h-6 rounded-full bg-slate-600"></span>
                <h3 class="text-lg sm:text-xl font-black text-slate-900 dark:text-white tracking-tight">
                  三、第三章後續研讀路徑與章節插槽
                </h3>
              </div>
              <span class="text-xs font-mono font-bold px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                後續分節預告
              </span>
            </div>

            <div class="p-6 rounded-3xl border border-slate-200 dark:border-white/[0.08] bg-white dark:bg-[#101623] shadow-sm space-y-4">
              <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-serif leading-relaxed">
                依據課本開章導言，本章後續將依序開展兩大核心主題：
              </p>

              <!-- 單元進度卡片 1：構成要件該當性判斷原理 (已完結實裝) -->
              <div class="p-5 rounded-2xl border-2 border-blue-400 dark:border-blue-600 bg-blue-50/70 dark:bg-blue-950/40 space-y-3 shadow-xs">
                <div class="flex items-center justify-between flex-wrap gap-2">
                  <div class="flex items-center gap-2">
                    <span class="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                    <span class="font-black text-sm text-blue-950 dark:text-blue-100">第一節 • 構成要件該當性的判斷原理</span>
                  </div>
                  <span class="text-[11px] font-mono font-bold px-2 py-0.5 rounded bg-emerald-100 dark:bg-emerald-900 text-emerald-800 dark:text-emerald-200">
                    教材第 3-19 ～ 3-22 頁 全節完結
                  </span>
                </div>
                <p class="text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-serif leading-relaxed">
                  掌握三階論檢驗的三大步驟、標準同一性與先客後主檢驗順序、四大排列組合，以及案例 3-1（萬聖節傑森案）與案例 3-2（彩虹獵場射殺登山客案）。
                </p>
                <div class="pt-1">
                  <button onclick="switchView('part1-ch3-sec1')" class="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs flex items-center gap-1.5 shadow-sm transition-all cursor-pointer">
                    <span>🚀 開始研讀 第一節 構成要件該當性的判斷原理 →</span>
                  </button>
                </div>
              </div>

              <!-- 單元進度卡片 2：各種論罪類型的結構 -->
              <div class="p-5 rounded-2xl border-2 border-dashed border-indigo-300 dark:border-indigo-800 bg-indigo-50/30 dark:bg-indigo-950/20 space-y-2">
                <div class="flex items-center justify-between">
                  <div class="flex items-center gap-2">
                    <span class="w-2.5 h-2.5 rounded-full bg-indigo-500 animate-pulse"></span>
                    <span class="font-black text-sm text-indigo-900 dark:text-indigo-300">第二部分 • 各種論罪類型的結構詳解</span>
                  </div>
                  <span class="text-[11px] font-mono font-bold px-2 py-0.5 rounded bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300">
                    即將增補 (COMING SOON)
                  </span>
                </div>
                <p class="text-xs text-slate-600 dark:text-slate-400 font-serif">
                  故意既遂犯、未遂犯（障礙未遂、中止未遂、不能未遂）與過失犯（注意義務、預見可能性）之具體三階審查階層結構與爭點案例。
                </p>
              </div>
            </div>
          </section>

          <!-- ══════════════════════════════════════════════════════════ -->
          <!-- 四、犬系法學四大天王導師席：論罪類型開章法學研討客廳 -->
          <!-- ══════════════════════════════════════════════════════════ -->
          <section id="sec-p1ch3-mentors" class="space-y-6 pt-2">
            <div class="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3">
              <div class="flex items-center gap-3">
                <span class="w-2.5 h-6 rounded-full bg-amber-600"></span>
                <h3 class="text-lg sm:text-xl font-black text-slate-900 dark:text-white tracking-tight">
                  四、犬系法學四大天王 • 論罪類型開章法學客廳
                </h3>
              </div>
              <span class="text-xs font-mono font-bold px-2.5 py-1 rounded-lg bg-amber-50 dark:bg-amber-950 text-amber-600 dark:text-amber-400 border border-amber-200 dark:border-amber-800">
                名師深度點評
              </span>
            </div>

            <!-- 四大名師單欄垂直堆疊（嚴格遵循 AGENTS.md 規範） -->
            <div class="p-6 rounded-3xl border border-slate-200 dark:border-white/[0.08] bg-white dark:bg-[#101623] shadow-sm space-y-4">
              
              <!-- 1. 🐾 柴柴法學教授 • 白話生活大解碼 -->
              <div class="rounded-2xl p-4 sm:p-5 bg-gradient-to-br from-amber-50 to-orange-50/40 dark:from-amber-950/20 dark:to-slate-900 border border-amber-200 dark:border-amber-800/60 space-y-2">
                <div class="flex items-center gap-2 font-black text-amber-900 dark:text-amber-300 text-xs sm:text-sm">
                  <div class="w-6 h-6 rounded-lg overflow-hidden border border-amber-400 shrink-0">
                    <img src="images/shiba_law_professor.jpg" alt="柴柴" class="w-full h-full object-cover" style="object-position: center 20%; transform: scale(1.38);">
                  </div>
                  <span>🐾 柴柴法學教授 • 白話生活大解碼</span>
                </div>
                <p class="font-serif text-slate-700 dark:text-slate-300 text-xs sm:text-sm leading-relaxed">
                  「很多同學分不清楚<strong>『犯罪類型』</strong>跟<strong>『論罪類型』</strong>差在哪裡！柴柴打個比方：『牛肉麵』這道菜本身有牛肉、牛筋、大碗、小碗（這叫犯罪類型，在描繪菜色的本質與特徵）；但你走進餐廳點餐時，廚師到底有沒有把這碗麵煮好端上桌？是<strong>完整煮好端出（既遂）</strong>、還是<strong>瓦斯跳掉煮到一半沒熟（未遂）</strong>、抑或是<strong>手滑把整鍋湯灑了（過失）</strong>？這就是『論罪類型』！刑法分則千百條，論罪形式逃不出這三種態樣！」
                </p>
              </div>

              <!-- 2. ⚖️ 金毛大律師 • 法庭攻防點評 -->
              <div class="rounded-2xl p-4 sm:p-5 bg-gradient-to-br from-rose-50 to-pink-50/40 dark:from-rose-950/20 dark:to-slate-900 border border-rose-200 dark:border-rose-800/60 space-y-2">
                <div class="flex items-center gap-2 font-black text-rose-900 dark:text-rose-300 text-xs sm:text-sm">
                  <div class="w-6 h-6 rounded-lg overflow-hidden border border-rose-400 shrink-0">
                    <img src="images/golden_case_attorney.jpg" alt="金毛" class="w-full h-full object-cover" style="object-position: center 20%; transform: scale(1.35);">
                  </div>
                  <span>⚖️ 金毛大律師 • 法庭實戰攻防破局點</span>
                </div>
                <p class="font-serif text-slate-700 dark:text-slate-300 text-xs sm:text-sm leading-relaxed">
                  「在刑案辯護中，檢察官永遠是用『故意既遂』的高規格起訴被告！辯護律師的第一道防線就是<strong>『打掉故意』</strong>：力爭被告僅屬過失（若該罪無過失處罰明文則直接爭取無罪判決！）；若故意無法撼動，第二道防線就是<strong>『退守未遂』</strong>：主張侵害結果尚未發生，爭取刑法第 25 條第 2 項『得按既遂犯之刑減輕之』！因此熟透故意、未遂與過失之要件界線，乃法庭攻防之命脈！」
                </p>
              </div>

              <!-- 3. 🛡️ 德牧法規巡查官 • 法規雷達查核 -->
              <div class="rounded-2xl p-4 sm:p-5 bg-blue-50/70 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-900/40 space-y-2">
                <div class="flex items-center gap-2 font-black text-blue-900 dark:text-blue-300 text-xs sm:text-sm">
                  <div class="w-6 h-6 rounded-lg overflow-hidden border border-blue-400 shrink-0">
                    <img src="images/shepherd_law_inspector.jpg" alt="德牧" class="w-full h-full object-cover" style="object-position: center 15%; transform: scale(1.4);">
                  </div>
                  <span>🛡️ 德牧法規巡查官 • 法規雷達查核</span>
                </div>
                <div class="font-serif text-slate-700 dark:text-slate-300 text-xs sm:text-sm space-y-1">
                  <div>🔍 <strong>【實體法依據與規範查核】</strong></div>
                  <ul class="list-disc pl-5 space-y-0.5">
                    <li><strong>刑法 § 12 第 1 項（故意原則）</strong>：「行為非出於故意或過失者，不罰。過失行為之處罰，以有特別規定者為限。」處罰故意為通則。</li>
                    <li><strong>刑法 § 12 第 2 項（過失例外）</strong>：刑法分則若未明定處罰過失（如毀損罪 § 354 無過失犯），過失行為絕對不罰！</li>
                    <li><strong>刑法 § 25 第 2 項（未遂處罰限制）</strong>：「未遂犯之處罰，以有特別規定者為限，並得按既遂犯之刑減輕之。」分則未設未遂規定者（如公然侮辱罪 § 309），未遂不罰！</li>
                  </ul>
                </div>
              </div>

              <!-- 4. 👨‍⚖️ 邊牧首席審判長 • 終審裁決一槌定音 -->
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
                  <p>🔨 <strong>【實體法定讞與國考答題定錨】</strong></p>
                  <p>國考作答時，審查順序必須恪守體系：</p>
                  <p>① <strong>先檢驗「故意既遂犯」</strong>：若客觀結果發生且因果歸責無疑，主觀具故意，即宣告既遂。</p>
                  <p>② <strong>若結果未發生或因果中斷</strong>：轉向檢驗「故意未遂犯」（先查分則有無處罰未遂，次查是否已達著手）。</p>
                  <p>③ <strong>若主觀欠缺故意</strong>：退回檢驗「過失犯」（先查分則有無過失明文，次查客觀注意義務違反與客觀預見可能性）。</p>
                </div>
                <div class="p-2.5 rounded-lg bg-white/5 border border-white/10 text-[11px] text-slate-300">
                  📅 <strong>2026 最新法條動態備註</strong>：刑法第 12 條故意過失原則及第 25 條未遂犯通則至 2026 年文字維持穩定有效；司法官及律師考試中，針對「著手」之認定實務近年更趨向結合實質法益危險之主客觀混合說，考生論述時應特別注意！
                </div>
              </div>

            </div>
          </section>

          <!-- 章節尾聲導航 -->
          <div class="pt-6 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between gap-4">
            <button onclick="switchView('part1-ch2-sec4')" class="px-4 py-2 rounded-xl bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 font-bold text-xs flex items-center gap-1.5 border border-slate-200 dark:border-slate-700 cursor-pointer">
              <span>← 上一節：第二章 第四節 一般犯與身分犯</span>
            </button>
            <button onclick="alert('第三章開章前言收錄完畢！第一節 構成要件該當性判斷原理 待後續教材頁面解鎖中！')" class="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs flex items-center gap-1.5 shadow-sm cursor-pointer">
              <span>下一節：敬請期待 🎉</span>
            </button>
          </div>

        </div>
`;
