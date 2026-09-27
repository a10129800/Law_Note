// ==============================================================================
// VIEW: 第一章 犯罪的概念 (Chapter 1 View)
// 包含 16 個大節、案例 1-1 至 1-17、Mega 爭點對照矩陣
// ==============================================================================
window.APP_VIEWS = window.APP_VIEWS || {};
window.APP_VIEWS['viewChapter1'] = window.APP_VIEWS['chapter1'] = `
        <!-- VIEW B: 第一章 犯罪的概念 (點擊第一章後才跳轉顯示此處，右側清單同時顯現) -->
        <div id="viewChapter1" class="fade-enter hidden space-y-8">
          
          <!-- Breadcrumb & Back -->
          <div class="flex items-center justify-between gap-4 border-b border-slate-100 dark:border-white/[0.06] pb-3">
            <nav class="flex items-center gap-2 text-xs font-medium text-slate-400">
              <button onclick="switchView('intro')" class="hover:text-blue-500 transition-colors">導論 犯罪概念與論罪結構</button>
              <span>/</span>
              <span class="text-blue-600 dark:text-blue-400 font-bold">第一章 犯罪的概念</span>
            </nav>
            <button onclick="switchView('intro')" class="text-xs text-slate-400 hover:text-blue-500 flex items-center gap-1 transition-colors">
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
              </svg>
              <span>返回導讀</span>
            </button>
          </div>

          <!-- Chapter Header -->
          <div class="space-y-2">
            <div class="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-mono text-xs font-bold">
              <span>導論・第一章 1-1 ～ 1-11</span>
            </div>
            <h2 id="sec-ch1-title" class="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
              第一章 犯罪的概念
            </h2>
            <p class="text-xs sm:text-sm text-slate-500">
              嚴格依據教材第 1-1 ～ 1-9 頁內容收錄
            </p>
          </div>

          <!-- 第一章 書本內文 -->
          <div class="space-y-10">
            
            <!-- SECTION 1: 核心概念 (第 1-1 頁) -->
            <section id="sec-intro-concept" class="scroll-mt-28 space-y-4">
              <div class="flex items-center gap-2">
                <span class="w-2 h-2 rounded-full bg-blue-500"></span>
                <h3 class="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                  一、犯罪的核心直觀：「一個壞人做了一件壞事」
                </h3>
              </div>
              
              <!-- 刑法核心直觀法理：現代法學邏輯流程看板 -->
              <div class="rounded-3xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-[#0E1524] shadow-sm hover:shadow-md transition-shadow overflow-hidden">
                
                <!-- 1. 頂部看板標題與出處條 -->
                <div class="flex items-center justify-between flex-wrap gap-2.5 px-5 sm:px-7 py-3.5 border-b border-slate-100 dark:border-white/[0.06] bg-slate-50/80 dark:bg-slate-900/50 backdrop-blur-sm">
                  <div class="flex items-center gap-2.5">
                    <div class="w-7 h-7 rounded-lg bg-blue-600 text-white flex items-center justify-center text-sm shadow-sm shadow-blue-500/20">
                      ⚖️
                    </div>
                    <div>
                      <span class="font-extrabold text-sm sm:text-base text-slate-900 dark:text-white tracking-tight">刑法核心直觀法理</span>
                      <span class="ml-2 text-[11px] px-2 py-0.5 rounded-md bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 font-semibold border border-blue-200/60 dark:border-blue-800/40">
                        三階體系前導
                      </span>
                    </div>
                  </div>
                  <div class="flex items-center gap-2">
                    <span class="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-bold border border-slate-200 dark:border-slate-700">
                      教材第 1-1 頁
                    </span>
                    <span class="text-[11px] px-2 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400 font-semibold border border-emerald-200/60 dark:border-emerald-800/40 hidden sm:inline">
                      直觀邏輯推演
                    </span>
                  </div>
                </div>

                <div class="p-6 sm:p-8 md:p-9 space-y-7">

                  <!-- 2. 第一層：日常直觀開篇 (Hero Banner & 犯罪核心平衡等式) -->
                  <div class="relative overflow-hidden rounded-2xl p-5 sm:p-6 bg-gradient-to-r from-slate-900 via-indigo-950 to-blue-950 text-white shadow-md border border-white/10">
                    <!-- 背景微光裝飾 -->
                    <div class="absolute -right-8 -top-8 w-48 h-48 rounded-full bg-blue-500/10 blur-3xl pointer-events-none"></div>
                    <div class="absolute -left-8 -bottom-8 w-48 h-48 rounded-full bg-indigo-500/10 blur-3xl pointer-events-none"></div>
                    
                    <div class="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">
                      <div class="space-y-1.5 max-w-xl">
                        <div class="flex items-center gap-2 text-blue-300 text-xs font-semibold tracking-wider uppercase">
                          <span class="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse"></span>
                          <span>犯罪的日常核心直觀命題</span>
                        </div>
                        <p class="text-sm sm:text-base text-slate-200 leading-relaxed font-medium">
                          刑法是一部處理犯罪的法律，至於何謂犯罪？最簡單的本質直觀即是：
                        </p>
                        <p class="text-xs text-slate-400">
                          刑法兼具「行為（壞事）」與「行為人（壞人）」的雙軌評價，缺一不可。
                        </p>
                      </div>
                      
                      <!-- 犯罪核心等式組件 (極致對齊與柔和高質感配色) -->
                      <div class="inline-flex items-center flex-wrap gap-2 sm:gap-2.5 bg-white/10 dark:bg-black/40 backdrop-blur-md px-4 py-3 rounded-2xl border border-white/15 shrink-0 shadow-inner">
                        <div class="flex flex-col items-center">
                          <span class="px-3 py-1.5 rounded-xl bg-indigo-600/90 text-white font-bold text-xs sm:text-sm shadow-sm border border-indigo-400/30">
                            一個壞人
                          </span>
                          <span class="text-[10px] text-indigo-200/90 mt-1 font-mono">評價行為人</span>
                        </div>
                        <span class="text-sm text-blue-200 font-bold px-0.5">＋</span>
                        <div class="flex flex-col items-center">
                          <span class="px-3 py-1.5 rounded-xl bg-amber-600/90 text-white font-bold text-xs sm:text-sm shadow-sm border border-amber-400/30">
                            一件壞事
                          </span>
                          <span class="text-[10px] text-amber-200/90 mt-1 font-mono">評價客觀行為</span>
                        </div>
                        <span class="text-sm text-blue-200 font-bold px-0.5">＝</span>
                        <div class="flex flex-col items-center">
                          <span class="px-3.5 py-1.5 rounded-xl bg-rose-600/90 text-white font-black text-xs sm:text-sm shadow-sm border border-rose-400/30">
                            犯罪成立
                          </span>
                          <span class="text-[10px] text-rose-200/90 mt-1 font-mono">終局法律效果</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- 3. 第二層：實務評判順序與推定動線 (3-Step Pipeline Bento Grid - 高彩度醒目版) -->
                  <div class="space-y-3.5">
                    <div class="flex items-center justify-between text-xs text-slate-600 dark:text-slate-300 px-1">
                      <span class="font-extrabold flex items-center gap-2 text-slate-800 dark:text-slate-200">
                        <span class="w-2.5 h-2.5 rounded-full bg-blue-600 animate-pulse"></span>
                        三步邏輯推演流水線（評判順序 ➔ 經驗推定 ➔ 反證防衛）
                      </span>
                      <span class="text-[11px] font-mono px-2 py-0.5 rounded-md bg-blue-100 dark:bg-blue-900/60 text-blue-700 dark:text-blue-300 font-bold">
                        Step 01 ~ 03
                      </span>
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-3 gap-4.5">
                      
                      <!-- 卡片 1: 評判次序 (高彩藍/靛調，金/靛雙實心按鈕) -->
                      <div class="rounded-2xl p-5 sm:p-6 border-2 border-blue-500/90 dark:border-blue-400 bg-gradient-to-b from-blue-50/90 via-indigo-50/40 to-white dark:from-blue-950/60 dark:via-slate-900/80 dark:to-[#0E1524] flex flex-col justify-between space-y-4.5 shadow-md shadow-blue-500/10 hover:shadow-lg hover:border-blue-600 transition-all">
                        <div class="space-y-3">
                          <div class="flex items-center justify-between">
                            <span class="text-xs font-mono font-black px-2.5 py-1 rounded-lg bg-blue-600 text-white shadow-sm shadow-blue-500/30">
                              STEP 01
                            </span>
                            <span class="text-[11px] px-2.5 py-0.5 rounded-full bg-blue-100/90 text-blue-800 dark:bg-blue-900/70 dark:text-blue-200 font-extrabold border border-blue-300/80 dark:border-blue-700">
                              實務裁決先後
                            </span>
                          </div>
                          <h4 class="font-black text-base sm:text-lg text-blue-950 dark:text-blue-100 flex items-center gap-2">
                            <span class="text-lg">🎯</span> 評判次序決策
                          </h4>
                          <p class="text-xs sm:text-[13px] leading-relaxed text-slate-700 dark:text-slate-300 font-medium">
                            判斷「誰是壞人」極其困難（主觀心態難測），但判斷「一件壞事」相對客觀明確，因此確立次序：
                          </p>
                        </div>

                        <div class="space-y-2.5 pt-3 border-t-2 border-blue-200/70 dark:border-blue-800/80">
                          <div class="flex items-center gap-2.5 p-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-white shadow-md shadow-amber-500/25 border border-amber-400/60 hover:brightness-105 transition-all">
                            <span class="w-6 h-6 rounded-lg bg-white text-amber-700 font-black text-xs flex items-center justify-center shrink-0 shadow-sm">1</span>
                            <span class="font-black text-xs sm:text-sm tracking-wide">先判斷「是否有壞事發生」</span>
                            <span class="ml-auto text-[10px] bg-black/20 px-2 py-0.5 rounded-full font-bold font-mono">客觀評價</span>
                          </div>
                          <div class="flex items-center gap-2.5 p-3 rounded-xl bg-gradient-to-r from-indigo-600 to-blue-700 text-white shadow-md shadow-indigo-500/25 border border-indigo-400/60 hover:brightness-105 transition-all">
                            <span class="w-6 h-6 rounded-lg bg-white text-indigo-700 font-black text-xs flex items-center justify-center shrink-0 shadow-sm">2</span>
                            <span class="font-black text-xs sm:text-sm tracking-wide">再判斷「做壞事的人是否是壞人」</span>
                            <span class="ml-auto text-[10px] bg-black/20 px-2 py-0.5 rounded-full font-bold font-mono">主觀評價</span>
                          </div>
                        </div>
                      </div>

                      <!-- 卡片 2: 壞事推定壞人原則 (高彩翡翠綠調，顯眼滿版推動看板) -->
                      <div class="rounded-2xl p-5 sm:p-6 border-2 border-emerald-500/90 dark:border-emerald-400 bg-gradient-to-b from-emerald-50/90 via-teal-50/40 to-white dark:from-emerald-950/60 dark:via-slate-900/80 dark:to-[#0E1524] flex flex-col justify-between space-y-4.5 shadow-md shadow-emerald-500/10 hover:shadow-lg hover:border-emerald-600 transition-all">
                        <div class="space-y-3">
                          <div class="flex items-center justify-between">
                            <span class="text-xs font-mono font-black px-2.5 py-1 rounded-lg bg-emerald-600 text-white shadow-sm shadow-emerald-500/30">
                              STEP 02
                            </span>
                            <span class="text-[11px] px-2.5 py-0.5 rounded-full bg-emerald-100/90 text-emerald-800 dark:bg-emerald-900/70 dark:text-emerald-200 font-extrabold border border-emerald-300/80 dark:border-emerald-700">
                              經驗法則累積
                            </span>
                          </div>
                          <h4 class="font-black text-base sm:text-lg text-emerald-950 dark:text-emerald-100 flex items-center gap-2">
                            <span class="text-lg">⚡</span> 經驗直覺推定
                          </h4>
                          <p class="text-xs sm:text-[13px] leading-relaxed text-slate-700 dark:text-slate-300 font-medium">
                            會做壞事的人絕大多數都是壞人，故一旦確定一件壞事發生，法律上先行推定做這件事的人是壞人：
                          </p>
                        </div>

                        <div class="pt-3 border-t-2 border-emerald-200/70 dark:border-emerald-800/80">
                          <div class="p-4 rounded-xl bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-600 text-white shadow-lg shadow-emerald-600/30 border border-emerald-400/50 text-center space-y-1.5 hover:scale-[1.01] transition-transform">
                            <span class="text-[11px] font-bold text-emerald-100 uppercase tracking-wider block">
                              確立核心直觀原則
                            </span>
                            <span class="font-black text-sm sm:text-base text-white tracking-wide block drop-shadow-sm">
                              「壞事推定壞人」原則
                            </span>
                            <span class="inline-block text-[11px] bg-white/20 backdrop-blur-xs px-2.5 py-0.5 rounded-full text-white font-medium">
                              確定壞事發生 ➔ 先行推定為壞人
                            </span>
                          </div>
                        </div>
                      </div>

                      <!-- 卡片 3: 反證推翻與防禦 (高彩珊瑚紅/玫瑰調，醒目人權防線看板) -->
                      <div class="rounded-2xl p-5 sm:p-6 border-2 border-rose-500/90 dark:border-rose-400 bg-gradient-to-b from-rose-50/90 via-red-50/40 to-white dark:from-rose-950/60 dark:via-slate-900/80 dark:to-[#0E1524] flex flex-col justify-between space-y-4.5 shadow-md shadow-rose-500/10 hover:shadow-lg hover:border-rose-600 transition-all">
                        <div class="space-y-3">
                          <div class="flex items-center justify-between">
                            <span class="text-xs font-mono font-black px-2.5 py-1 rounded-lg bg-rose-600 text-white shadow-sm shadow-rose-500/30">
                              STEP 03
                            </span>
                            <span class="text-[11px] px-2.5 py-0.5 rounded-full bg-rose-100/90 text-rose-800 dark:bg-rose-900/70 dark:text-rose-200 font-extrabold border border-rose-300/80 dark:border-rose-700">
                              人權防錯防線
                            </span>
                          </div>
                          <h4 class="font-black text-base sm:text-lg text-rose-950 dark:text-rose-100 flex items-center gap-2">
                            <span class="text-lg">🛡️</span> 保留反證機會
                          </h4>
                          <p class="text-xs sm:text-[13px] leading-relaxed text-slate-700 dark:text-slate-300 font-medium">
                            人類經驗不完全可靠，透過「推定」技術，特別為被告保留了反證推翻假設之生機與防線：
                          </p>
                        </div>

                        <div class="pt-3 border-t-2 border-rose-200/70 dark:border-rose-800/80">
                          <div class="p-4 rounded-xl bg-gradient-to-r from-rose-600 via-rose-500 to-red-600 text-white shadow-lg shadow-rose-600/30 border border-rose-400/50 text-center space-y-1.5 hover:scale-[1.01] transition-transform">
                            <span class="text-[11px] font-bold text-rose-100 uppercase tracking-wider block">
                              推翻罪責推定之法定防衛
                            </span>
                            <span class="font-black text-sm sm:text-base text-white tracking-wide block drop-shadow-sm">
                              「阻卻罪責事由」
                            </span>
                            <span class="inline-block text-[11px] bg-white/20 backdrop-blur-xs px-2.5 py-0.5 rounded-full text-white font-medium">
                              防錯機制 ➔ 被告可舉有利反證免責
                            </span>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>

                  <!-- 4. 第三層：生活直觀 ➔ 法律術語 抽象化矩陣 (Semantic Mapping Panel - 高彩飽和版) -->
                  <div class="rounded-2xl border-2 border-blue-400/80 dark:border-blue-700/60 bg-gradient-to-br from-blue-50/70 via-indigo-50/40 to-white dark:from-[#0f172a] dark:to-[#111c34] p-5 sm:p-6 space-y-4 shadow-sm">
                    <div class="flex items-center justify-between flex-wrap gap-2">
                      <div class="flex items-center gap-2.5">
                        <span class="w-3 h-3 rounded-full bg-blue-600"></span>
                        <h4 class="text-sm sm:text-base font-black text-slate-900 dark:text-white tracking-wide">
                          法學概念代稱與體系化推定模式
                        </h4>
                      </div>
                      <span class="text-xs px-2.5 py-0.5 rounded-md bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 font-bold font-mono">日常用語 ➔ 刑法體系概念</span>
                    </div>

                    <!-- 雙軌對照卡片 (高彩實心代稱按鈕) -->
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      
                      <!-- 軌道 A: 壞事 -> 不法 -->
                      <div class="p-4 rounded-xl bg-amber-50/90 dark:bg-amber-950/40 border-2 border-amber-400 dark:border-amber-600 flex items-center justify-between shadow-sm">
                        <div class="space-y-1">
                          <span class="text-xs text-amber-800 dark:text-amber-300 font-bold">客觀行為層面</span>
                          <div class="font-black text-slate-900 dark:text-white text-sm sm:text-base flex items-center gap-1.5">
                            <span>「壞事」代稱</span>
                          </div>
                        </div>
                        <div class="flex items-center gap-2.5">
                          <span class="text-amber-600 dark:text-amber-400 font-bold text-sm">➔</span>
                          <span class="px-4 py-2 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-white font-black text-base sm:text-lg border border-amber-300 shadow-md shadow-amber-500/30">
                            不法
                          </span>
                        </div>
                      </div>

                      <!-- 軌道 B: 壞人 -> 罪責 -->
                      <div class="p-4 rounded-xl bg-indigo-50/90 dark:bg-indigo-950/40 border-2 border-indigo-400 dark:border-indigo-600 flex items-center justify-between shadow-sm">
                        <div class="space-y-1">
                          <span class="text-xs text-indigo-800 dark:text-indigo-300 font-bold">主觀行為人層面</span>
                          <div class="font-black text-slate-900 dark:text-white text-sm sm:text-base flex items-center gap-1.5">
                            <span>「壞人」代稱</span>
                          </div>
                        </div>
                        <div class="flex items-center gap-2.5">
                          <span class="text-indigo-600 dark:text-indigo-400 font-bold text-sm">➔</span>
                          <span class="px-4 py-2 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-black text-base sm:text-lg border border-indigo-300 shadow-md shadow-indigo-500/30">
                            罪責
                          </span>
                        </div>
                      </div>

                    </div>

                    <!-- 終極法理推導看板 (深色醒目強對比) -->
                    <div class="flex flex-col sm:flex-row items-center justify-between gap-4 p-5 rounded-xl bg-gradient-to-r from-blue-700 via-indigo-700 to-blue-900 text-white shadow-lg border border-white/20">
                      <div class="flex items-center gap-3.5">
                        <span class="w-10 h-10 rounded-xl bg-white/20 text-white flex items-center justify-center font-black text-lg shadow-sm">
                          📌
                        </span>
                        <div>
                          <div class="text-xs text-blue-200 font-bold">刑法體系化推定模式</div>
                          <div class="font-black text-base sm:text-lg text-white tracking-wide">
                            「不法推定罪責」原則
                          </div>
                        </div>
                      </div>
                      
                      <div class="flex items-center gap-2.5 text-xs sm:text-sm">
                        <span class="text-blue-200 font-bold hidden sm:inline">遇有法定或超法定反證 ➔</span>
                        <span class="px-4 py-2 rounded-xl bg-rose-500 hover:bg-rose-600 text-white border border-rose-300 font-black text-xs sm:text-sm whitespace-nowrap shadow-md shadow-rose-900/40">
                          以「阻卻罪責事由」推翻
                        </span>
                      </div>
                    </div>

                  </div>

                </div>

                <!-- 5. 底部收合式原文對照抽屜 -->
                <div class="border-t border-slate-100 dark:border-white/[0.06] bg-slate-50/50 dark:bg-slate-900/30">
                  <details class="group">
                    <summary class="flex items-center justify-between px-6 py-3.5 text-xs text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200 cursor-pointer select-none">
                      <span class="flex items-center gap-2 font-semibold">
                        <svg class="w-4 h-4 text-blue-500 group-open:rotate-90 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                        </svg>
                        展開教科書原文段落對照（教材第 1-1 頁）
                      </span>
                      <span class="text-[11px] text-slate-400 font-mono">點擊展開/收合</span>
                    </summary>
                    <div class="px-6 pb-5 pt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300 space-y-3 border-t border-slate-200/50 dark:border-slate-800/60">
                      <p>刑法是一部處理犯罪的法律，至於如何謂犯罪？簡單說，<span class="legal-tag-blue">「一個壞人」</span>做了<span class="legal-tag-amber">「一件壞事」</span>就是犯罪。</p>
                      <p>經驗告訴我們判斷誰是壞人非常困難，但判斷一件壞事卻比較容易，因此我們決定先判斷<strong class="text-slate-900 dark:text-white font-bold bg-slate-100 dark:bg-slate-850 px-1.5 py-0.5 rounded">「是否有一件壞事發生」</strong>，再判斷<strong class="text-slate-900 dark:text-white font-bold bg-slate-100 dark:bg-slate-850 px-1.5 py-0.5 rounded">「做這件壞事的人是不是一個壞人」</strong>。</p>
                      <p>基於經驗的累積，會做壞事的人絕大多數（不是百分之百！）都是壞人，所以確定一件壞事的發生，就先<strong class="text-slate-900 dark:text-white font-bold bg-slate-100 dark:bg-slate-850 px-1.5 py-0.5 rounded">「推定」</strong>做這件壞事的人是一個壞人，這就是<span class="legal-tag-blue">「壞事推定壞人」</span>原則。</p>
                      <p>有鑑於這只是一個經驗上的直覺假設，而人類經驗卻不完全可靠，使用推定這個法律概念，為我們保留<strong class="underline decoration-blue-500 decoration-2 underline-offset-4">反證推翻假設</strong>的機會。我們將壞事以<span class="legal-tag-blue">「不法」</span>代稱，壞人以<span class="legal-tag-blue">「罪責」</span>代稱，前述的推定模式就是<span class="legal-tag-blue font-black">「不法推定罪責」</span>原則，而推翻罪責推定的理由稱為<span class="legal-tag-rose">「阻卻罪責事由」</span>。</p>
                    </div>
                  </details>
                </div>

              </div>
            </section>

            <!-- SECTION 2: 原文圖解卡片 (第 1-1 頁) -->
            <section id="sec-presume-rule" class="scroll-mt-28 space-y-5">
              <div class="flex items-center gap-2.5">
                <span class="w-3 h-3 rounded-full bg-blue-600 animate-pulse"></span>
                <h3 class="text-base sm:text-lg font-black text-slate-900 dark:text-white tracking-wide">
                  二、不法推定罪責原則（教材第 1-1 頁 原文圖解）
                </h3>
              </div>

              <!-- 原文圖解還原面板 (高彩度飽和立體看板) -->
              <div class="p-6 sm:p-8 rounded-3xl border-2 border-blue-500/80 dark:border-blue-500/70 bg-gradient-to-b from-blue-50/40 via-white to-indigo-50/20 dark:from-[#0f172a] dark:via-[#111827] dark:to-[#0b1120] shadow-lg shadow-blue-500/10 space-y-6">
                
                <!-- 標題欄 -->
                <div class="flex items-center justify-between pb-3.5 border-b-2 border-blue-200/80 dark:border-blue-900/60 flex-wrap gap-2">
                  <div class="flex items-center gap-2">
                    <span class="text-lg">📊</span>
                    <span class="font-black text-sm sm:text-base text-blue-950 dark:text-blue-200 tracking-wide">不法推定罪責原則架構圖</span>
                  </div>
                  <span class="text-xs font-mono font-bold px-2.5 py-1 rounded-lg bg-blue-100 dark:bg-blue-900/60 text-blue-800 dark:text-blue-200 border border-blue-300 dark:border-blue-700">
                    教材第 1-1 頁 原文核心
                  </span>
                </div>

                <div class="max-w-2xl mx-auto flex flex-col items-center gap-6 py-2">
                  
                  <!-- 頂部起點：犯罪 ➔ 分流評價 (高彩度強烈對比) -->
                  <div class="flex items-center gap-4 w-full">
                    <div class="px-6 py-2.5 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-black text-base shadow-md shadow-blue-600/30 shrink-0 border border-blue-400/40">
                      ⚖️ 犯罪
                    </div>
                    <div class="h-1 flex-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 rounded-full relative">
                      <div class="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 border-t-2 border-r-2 border-purple-500 rotate-45"></div>
                    </div>
                    <div class="px-3 py-1 rounded-xl bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 font-black text-xs border border-indigo-200 dark:border-indigo-800 shadow-xs">
                      雙軌分流評價
                    </div>
                  </div>

                  <!-- 雙軌評價矩陣 (金琥珀 vs 典雅靛紫 飽和對比) -->
                  <div class="w-full grid grid-cols-1 md:grid-cols-2 gap-4.5">
                    
                    <!-- 軌道 1：行為面 (壞事 -> 不法) -->
                    <div class="p-5 rounded-2xl border-2 border-amber-400 dark:border-amber-600 bg-gradient-to-br from-amber-50 via-white to-amber-50/40 dark:from-amber-950/40 dark:via-slate-900 dark:to-amber-950/20 space-y-3 shadow-md shadow-amber-500/10 hover:shadow-lg transition-shadow">
                      <div class="flex items-center justify-between">
                        <span class="text-xs font-black text-amber-900 dark:text-amber-200">評價客觀維度</span>
                        <span class="text-xs px-3 py-1 rounded-lg bg-gradient-to-r from-amber-500 to-amber-600 text-white font-black shadow-sm shadow-amber-500/30">
                          壞事
                        </span>
                      </div>
                      <div class="text-xs sm:text-[13px] text-slate-700 dark:text-slate-300 font-semibold flex items-center gap-1.5">
                        <span class="w-2 h-2 rounded-full bg-amber-500"></span>
                        客觀評價：「行為本身有無侵害法益」
                      </div>
                      <div class="pt-3 border-t-2 border-amber-200/80 dark:border-amber-800/80 flex items-center justify-between">
                        <span class="text-xs font-bold text-slate-600 dark:text-slate-300">法律體系代稱</span>
                        <span class="px-4 py-1.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-white font-black text-base sm:text-lg shadow-md shadow-amber-500/30 border border-amber-300/60">
                          不法
                        </span>
                      </div>
                    </div>

                    <!-- 軌道 2：行為人面 (壞人 -> 罪責) -->
                    <div class="p-5 rounded-2xl border-2 border-indigo-400 dark:border-indigo-600 bg-gradient-to-br from-indigo-50 via-white to-indigo-50/40 dark:from-indigo-950/40 dark:via-slate-900 dark:to-indigo-950/20 space-y-3 shadow-md shadow-indigo-500/10 hover:shadow-lg transition-shadow">
                      <div class="flex items-center justify-between">
                        <span class="text-xs font-black text-indigo-900 dark:text-indigo-200">評價主觀維度</span>
                        <span class="text-xs px-3 py-1 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-black shadow-sm shadow-indigo-500/30">
                          壞人
                        </span>
                      </div>
                      <div class="text-xs sm:text-[13px] text-slate-700 dark:text-slate-300 font-semibold flex items-center gap-1.5">
                        <span class="w-2 h-2 rounded-full bg-indigo-500"></span>
                        主觀評價：「能否對行為人加以非難責難」
                      </div>
                      <div class="pt-3 border-t-2 border-indigo-200/80 dark:border-indigo-800/80 flex items-center justify-between">
                        <span class="text-xs font-bold text-slate-600 dark:text-slate-300">法律體系代稱</span>
                        <span class="px-4 py-1.5 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-black text-base sm:text-lg shadow-md shadow-indigo-500/30 border border-indigo-300/60">
                          罪責
                        </span>
                      </div>
                    </div>

                  </div>

                  <!-- 推定與反證動態看板 (高飽和翡翠綠 vs 珊瑚玫瑰紅) -->
                  <div class="w-full space-y-3">
                    
                    <!-- 推定看板 -->
                    <div class="p-4 rounded-2xl border-2 border-emerald-400 dark:border-emerald-600 bg-gradient-to-r from-emerald-50 via-teal-50/40 to-white dark:from-emerald-950/50 dark:via-slate-900 dark:to-slate-900 shadow-sm flex items-center justify-between gap-3 flex-wrap">
                      <div class="flex items-center gap-3">
                        <span class="px-3 py-1 rounded-xl bg-emerald-600 text-white font-black text-xs shadow-sm shadow-emerald-600/30 shrink-0">
                          ⬇ 【推定】
                        </span>
                        <div>
                          <div class="font-black text-xs sm:text-sm text-slate-900 dark:text-white">
                            壞事推定壞人 ➔ 法律術語：「不法推定罪責」原則
                          </div>
                          <div class="text-[11px] text-slate-600 dark:text-slate-300 font-medium">
                            客觀上確定有一件壞事（不法成立），經驗常理先假設做這件事的人是壞人（罪責成立）
                          </div>
                        </div>
                      </div>
                      <span class="text-xs px-2.5 py-1 rounded-lg bg-emerald-100 dark:bg-emerald-900/60 text-emerald-800 dark:text-emerald-200 font-extrabold border border-emerald-300 dark:border-emerald-700">
                        經驗法則推論
                      </span>
                    </div>

                    <!-- 反證看板 -->
                    <div class="p-4 rounded-2xl border-2 border-rose-400 dark:border-rose-600 bg-gradient-to-r from-rose-50 via-red-50/40 to-white dark:from-rose-950/50 dark:via-slate-900 dark:to-slate-900 shadow-sm flex items-center justify-between gap-3 flex-wrap">
                      <div class="flex items-center gap-3">
                        <span class="px-3 py-1 rounded-xl bg-rose-600 text-white font-black text-xs shadow-sm shadow-rose-600/30 shrink-0">
                          ⬆ 【反證】
                        </span>
                        <div>
                          <div class="font-black text-xs sm:text-sm text-slate-900 dark:text-white">
                            保留推翻假定之機會 ➔ 法律術語：「阻卻罪責事由」
                          </div>
                          <div class="text-[11px] text-slate-600 dark:text-slate-300 font-medium">
                            人類經驗並非絕對可靠，法律為被告保留抗辯生機，舉出正當反證即可徹底推翻罪責
                          </div>
                        </div>
                      </div>
                      <span class="text-xs px-2.5 py-1 rounded-lg bg-rose-100 dark:bg-rose-900/60 text-rose-800 dark:text-rose-200 font-extrabold border border-rose-300 dark:border-rose-700">
                        憲法人權防線
                      </span>
                    </div>

                  </div>

                </div>

                <!-- 🌟 白話文詳解卡片 (接地氣生活案例化拆解) -->
                <div class="rounded-2xl border-2 border-amber-400/90 dark:border-amber-600 bg-gradient-to-br from-amber-50/80 via-white to-orange-50/40 dark:from-[#1c1917] dark:via-[#1e1b18] dark:to-[#0f172a] p-5 sm:p-7 space-y-4 shadow-md">
                  <div class="flex items-center justify-between border-b-2 border-amber-200/80 dark:border-amber-900/60 pb-3 flex-wrap gap-2">
                    <div class="flex items-center gap-2.5">
                      <span class="text-xl">💡</span>
                      <h4 class="font-black text-base sm:text-lg text-amber-950 dark:text-amber-200 tracking-wide">
                        白話文秒懂這張圖：什麼是「不法推定罪責」？
                      </h4>
                    </div>
                    <span class="text-xs font-mono font-bold px-2.5 py-0.5 rounded-full bg-amber-100 dark:bg-amber-900/70 text-amber-800 dark:text-amber-200 border border-amber-300 dark:border-amber-700">
                      生活化零門檻解讀
                    </span>
                  </div>

                  <div class="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs sm:text-sm leading-relaxed">
                    
                    <!-- 講點 1: 為什麼要分壞事跟壞人 -->
                    <div class="p-4 rounded-xl bg-white/90 dark:bg-slate-900/80 border border-amber-200/90 dark:border-amber-800/60 space-y-2 shadow-xs">
                      <div class="font-black text-amber-900 dark:text-amber-300 flex items-center gap-1.5 text-sm">
                        <span class="w-5 h-5 rounded-md bg-amber-500 text-white flex items-center justify-center font-bold text-xs">1</span>
                        <span>為什麼要拆成「壞事」與「壞人」？</span>
                      </div>
                      <p class="text-slate-700 dark:text-slate-300">
                        如果街上有人拿刀刺傷了人，監視器一拍，我們一眼就能判定：<strong class="text-amber-800 dark:text-amber-300 font-bold">「有人流血受傷，這是一件糟糕透頂的壞事」</strong>（客觀不法）。
                      </p>
                      <p class="text-slate-600 dark:text-slate-400 text-xs">
                        但刺人的是蓄意謀殺的狂徒？還是精神重度發作失去理智？光看畫面根本無法斷定其內心（主觀罪責）。因此法律必須分兩把尺：<span class="font-bold underline text-amber-700 dark:text-amber-300">先確認有壞事，再探討人是不是壞人</span>。
                      </p>
                    </div>

                    <!-- 講點 2: 什麼叫壞事推定壞人 -->
                    <div class="p-4 rounded-xl bg-white/90 dark:bg-slate-900/80 border border-emerald-200/90 dark:border-emerald-800/60 space-y-2 shadow-xs">
                      <div class="font-black text-emerald-900 dark:text-emerald-300 flex items-center gap-1.5 text-sm">
                        <span class="w-5 h-5 rounded-md bg-emerald-600 text-white flex items-center justify-center font-bold text-xs">2</span>
                        <span>什麼叫「壞事推定壞人」？</span>
                      </div>
                      <p class="text-slate-700 dark:text-slate-300">
                        日常社會常情告訴我們：<strong class="text-emerald-800 dark:text-emerald-300 font-bold">「會做壞事的人，八九成通常都是壞人！」</strong>
                      </p>
                      <p class="text-slate-600 dark:text-slate-400 text-xs">
                        為了讓司法不必對每個小案都從零開始猜測心態，法律採取常理預設：只要你客觀上真的做了壞事（不法成立），法律就<span class="font-bold underline text-emerald-700 dark:text-emerald-300">先行推定你應該要為此負責</span>（罪責成立）。
                      </p>
                    </div>

                    <!-- 講點 3: 那被冤枉怎麼辦 -->
                    <div class="p-4 rounded-xl bg-white/90 dark:bg-slate-900/80 border border-rose-200/90 dark:border-rose-800/60 space-y-2 shadow-xs">
                      <div class="font-black text-rose-900 dark:text-rose-300 flex items-center gap-1.5 text-sm">
                        <span class="w-5 h-5 rounded-md bg-rose-600 text-white flex items-center justify-center font-bold text-xs">3</span>
                        <span>萬一情有可原被冤枉怎麼辦？</span>
                      </div>
                      <p class="text-slate-700 dark:text-slate-300">
                        人類經驗並非百分之百絕對！所以法律為被告保留了最重要的活路——<strong class="text-rose-800 dark:text-rose-300 font-bold">「反證推翻權」</strong>。
                      </p>
                      <p class="text-slate-600 dark:text-slate-400 text-xs">
                        只要能提出法定理由（例如：未滿 14 歲無辨識力、受絕對強制被拿槍逼迫等「阻卻罪責事由」），這個<span class="font-bold underline text-rose-700 dark:text-rose-300">「壞人推定」就會立刻被徹底推翻</span>，免除罪責不罰！
                      </p>
                    </div>

                  </div>

                  <!-- 總結一句話口訣金句 -->
                  <div class="p-3.5 rounded-xl bg-gradient-to-r from-amber-600 via-orange-600 to-amber-700 text-white flex items-center justify-between gap-3 flex-wrap shadow-md">
                    <div class="flex items-center gap-2.5">
                      <span class="text-lg">📢</span>
                      <span class="font-black text-xs sm:text-sm">
                        核心精華口訣：先判壞事（不法）➔ 常理推定壞人（罪責）➔ 遇免責反證即刻推翻！
                      </span>
                    </div>
                    <span class="text-[11px] font-bold bg-white/20 backdrop-blur-xs px-2.5 py-0.5 rounded-full text-white">
                      刑法總則核心思維
                    </span>
                  </div>

                </div>

              </div>
            </section>

            <!-- SECTION 3: 法定阻卻罪責例示 (第 1-2 ～ 1-3 頁 案例 1-1 至 1-5) -->
            <section id="sec-legal-cases" class="scroll-mt-28 space-y-4">
              <div class="flex items-center gap-2">
                <span class="w-2 h-2 rounded-full bg-blue-500"></span>
                <h3 class="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                  三、反證推翻的機會與法定例示（案例 1-1 ～ 1-5）
                </h3>
              </div>

              <div class="box-legal-gold p-6 sm:p-7 rounded-2xl space-y-4 text-sm sm:text-base leading-relaxed text-slate-700 dark:text-slate-200">
                <div class="flex items-center justify-between border-b border-amber-200/60 dark:border-amber-800/40 pb-3">
                  <div class="flex items-center gap-2">
                    <span class="text-base sm:text-lg">📜</span>
                    <span class="font-extrabold text-sm sm:text-base text-amber-900 dark:text-amber-200 tracking-wide">反證推翻的機會與法定例示</span>
                  </div>
                  <span class="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-amber-100/80 dark:bg-amber-900/50 text-amber-700 dark:text-amber-300 font-bold border border-amber-200 dark:border-amber-700/50">
                    教材第 1-2 ～ 1-3 頁
                  </span>
                </div>
                <p>
                  承上，當行為人做了一件壞事而被推定為一個壞人，法律將賦予行為人<strong class="underline decoration-amber-500 decoration-2 underline-offset-4">反證推翻的機會</strong>，亦即行為人可以主張一些有利於自己的理由，證明自己並非是一個壞人。
                </p>
                <p>
                  這些反證推翻的理由，立法者很貼心的在刑法當中加以例示（見下方案例 1-1 至 1-5）：
                </p>
              </div>

              <!-- 案例卡片列表 1-1 至 1-5 (高飽和色彩顯眼版) -->
              <div class="space-y-5 pt-1">
                
                <!-- 案例 1-1：欠缺不法意識 (亮蔚藍/天空藍主題) -->
                <div class="p-5 sm:p-6 rounded-2xl border-2 border-sky-400 dark:border-sky-500 bg-gradient-to-br from-sky-50/80 via-white to-sky-50/30 dark:from-[#0c1a2e] dark:via-[#0e1726] dark:to-[#070f1e] shadow-md hover:shadow-xl transition-all space-y-4">
                  <div class="flex items-center justify-between flex-wrap gap-2">
                    <span class="text-xs font-black px-3 py-1.5 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 text-white shadow-sm shadow-sky-500/30 font-mono tracking-wide">
                      🦅 案例 1-1
                    </span>
                    <span class="text-xs px-3 py-1 rounded-xl bg-emerald-600 text-white font-black shadow-sm shadow-emerald-600/30">
                      § 16 欠缺不法意識（不知法律）
                    </span>
                  </div>
                  
                  <!-- 被告心聲對話框 -->
                  <div class="p-4 rounded-xl bg-sky-50/90 dark:bg-sky-950/60 border-2 border-sky-300 dark:border-sky-800/80 text-xs sm:text-sm text-slate-800 dark:text-slate-100 flex items-start gap-3 shadow-inner">
                    <span class="text-base shrink-0">🗣️</span>
                    <div>
                      <strong class="text-sky-900 dark:text-sky-300 font-black">被告心聲抗辯：</strong>
                      <span class="italic">「這是一件壞事嗎？怎麼會？我以為在我們那邊這是合法的耶，對不起嘛，我真的完全不知道！」</span>
                    </div>
                  </div>

                  <div class="text-xs sm:text-sm text-slate-700 dark:text-slate-300 space-y-2">
                    <div class="font-black text-sky-950 dark:text-sky-200 flex items-center gap-1.5">
                      <span class="text-base">🎯</span>
                      <span>問題導引與法理核心：</span>
                    </div>
                    <p class="leading-relaxed">
                      主張「欠缺不法意識」之抗辯（§ 16）。行為人主觀上完全不知道法律禁止其行為，且有正當理由無法避免：
                      <span class="mt-1 inline-flex items-center gap-1 px-3 py-1 rounded-lg bg-sky-600 text-white font-black text-xs shadow-xs">
                        ✨ 因而雖做壞事，但主觀上卻不是壞人！
                      </span>
                    </p>
                  </div>

                  <!-- 2026 現行法規查核與資料來源 -->
                  <div class="pt-3 border-t-2 border-sky-100 dark:border-sky-900/50 space-y-1.5 text-xs">
                    <div class="flex items-center justify-between flex-wrap gap-2">
                      <div class="flex items-center gap-1.5 font-bold text-slate-800 dark:text-slate-200">
                        <span class="text-sky-600 dark:text-sky-400">📌</span>
                        <span>2026 現行法規狀態：</span>
                        <span class="px-2 py-0.5 rounded-full text-[11px] bg-emerald-600 text-white font-black">條文無更動（維持現行法）</span>
                      </div>
                      <a href="https://law.moj.gov.tw/LawClass/LawSingle.aspx?pcode=C0000001&flno=16" target="_blank" rel="noopener noreferrer" class="text-[11px] text-sky-600 dark:text-sky-400 font-bold hover:underline flex items-center gap-1 font-mono">
                        <span>全國法規資料庫 § 16 條文 ↗</span>
                      </a>
                    </div>
                    <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-[11.5px] bg-white/90 dark:bg-slate-900/60 p-3 rounded-xl border border-sky-200 dark:border-sky-800/60">
                      <strong class="text-sky-900 dark:text-sky-200 font-bold">條文內容：</strong>「除有正當理由而無法避免者外，不得因不知法律而免除刑事責任。但按其情節，得減輕其刑。」（採責任理論，非有不可避免之正當理由不得免責）。
                    </p>
                  </div>
                </div>

                <!-- 案例 1-2：責任年齡 (琥珀金/溫暖橙主題) -->
                <div class="p-5 sm:p-6 rounded-2xl border-2 border-amber-400 dark:border-amber-500 bg-gradient-to-br from-amber-50/80 via-white to-amber-50/30 dark:from-[#261706] dark:via-[#191309] dark:to-[#070f1e] shadow-md hover:shadow-xl transition-all space-y-4">
                  <div class="flex items-center justify-between flex-wrap gap-2">
                    <span class="text-xs font-black px-3 py-1.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-white shadow-sm shadow-amber-500/30 font-mono tracking-wide">
                      🦅 案例 1-2
                    </span>
                    <span class="text-xs px-3 py-1 rounded-xl bg-blue-600 text-white font-black shadow-sm shadow-blue-600/30">
                      § 18 責任能力：年齡（幼小不懂事）
                    </span>
                  </div>
                  
                  <!-- 被告心聲對話框 -->
                  <div class="p-4 rounded-xl bg-amber-50/90 dark:bg-amber-950/60 border-2 border-amber-300 dark:border-amber-800/80 text-xs sm:text-sm text-slate-800 dark:text-slate-100 flex items-start gap-3 shadow-inner">
                    <span class="text-base shrink-0">🗣️</span>
                    <div>
                      <strong class="text-amber-900 dark:text-amber-300 font-black">被告心聲抗辯：</strong>
                      <span class="italic">「雖然我做了一件壞事，但那是因為我年紀太小、根本不懂事啊，原諒我好不好。」</span>
                    </div>
                  </div>

                  <div class="text-xs sm:text-sm text-slate-700 dark:text-slate-300 space-y-2">
                    <div class="font-black text-amber-950 dark:text-amber-200 flex items-center gap-1.5">
                      <span class="text-base">🎯</span>
                      <span>問題導引與法理核心：</span>
                    </div>
                    <p class="leading-relaxed">
                      主張「欠缺責任能力：年齡」之抗辯（§ 18）。行為人認知尚未成熟，欠缺自我責任辨識力：
                      <span class="mt-1 inline-flex items-center gap-1 px-3 py-1 rounded-lg bg-amber-600 text-white font-black text-xs shadow-xs">
                        ✨ 因而雖做壞事，但主觀上卻不是壞人！
                      </span>
                    </p>
                  </div>

                  <!-- 2026 現行法規查核與資料來源 -->
                  <div class="pt-3 border-t-2 border-amber-100 dark:border-amber-900/50 space-y-1.5 text-xs">
                    <div class="flex items-center justify-between flex-wrap gap-2">
                      <div class="flex items-center gap-1.5 font-bold text-slate-800 dark:text-slate-200">
                        <span class="text-amber-600 dark:text-amber-400">📌</span>
                        <span>2026 現行法規狀態：</span>
                        <span class="px-2 py-0.5 rounded-full text-[11px] bg-emerald-600 text-white font-black">條文無更動（維持現行法）</span>
                      </div>
                      <a href="https://law.moj.gov.tw/LawClass/LawSingle.aspx?pcode=C0000001&flno=18" target="_blank" rel="noopener noreferrer" class="text-[11px] text-amber-700 dark:text-amber-400 font-bold hover:underline flex items-center gap-1 font-mono">
                        <span>全國法規資料庫 § 18 條文 ↗</span>
                      </a>
                    </div>
                    <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-[11.5px] bg-white/90 dark:bg-slate-900/60 p-3 rounded-xl border border-amber-200 dark:border-amber-800/60">
                      <strong class="text-amber-900 dark:text-amber-200 font-bold">法規連動備註：</strong>刑法第 18 條：未滿 14 歲人之行為不罰；14～18 歲得減輕其刑；滿 80 歲人之行為得減輕其刑。民法成年年齡下修為 18 歲，與刑法完全責任能力年齡一致。
                    </p>
                  </div>
                </div>

                <!-- 案例 1-3：精神障礙 (高雅紫/紫羅蘭主題) -->
                <div class="p-5 sm:p-6 rounded-2xl border-2 border-purple-400 dark:border-purple-500 bg-gradient-to-br from-purple-50/80 via-white to-purple-50/30 dark:from-[#230e33] dark:via-[#190f26] dark:to-[#070f1e] shadow-md hover:shadow-xl transition-all space-y-4">
                  <div class="flex items-center justify-between flex-wrap gap-2">
                    <span class="text-xs font-black px-3 py-1.5 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-sm shadow-purple-500/30 font-mono tracking-wide">
                      🦅 案例 1-3
                    </span>
                    <span class="text-xs px-3 py-1 rounded-xl bg-rose-600 text-white font-black shadow-sm shadow-rose-600/30">
                      § 19 責任能力：精神（心智控制失常）
                    </span>
                  </div>
                  
                  <!-- 被告心聲對話框 -->
                  <div class="p-4 rounded-xl bg-purple-50/90 dark:bg-purple-950/60 border-2 border-purple-300 dark:border-purple-800/80 text-xs sm:text-sm text-slate-800 dark:text-slate-100 flex items-start gap-3 shadow-inner">
                    <span class="text-base shrink-0">🗣️</span>
                    <div>
                      <strong class="text-purple-900 dark:text-purple-300 font-black">被告與律師抗辯：</strong>
                      <span class="italic">「吾乃伏虎羅漢降世，奉殺九世惡人乃替天行道！律師：我的當事人罹患重度思覺失調，發病時根本不知道自己在幹嘛，需要醫療而非刑罰！」</span>
                    </div>
                  </div>

                  <div class="text-xs sm:text-sm text-slate-700 dark:text-slate-300 space-y-2">
                    <div class="font-black text-purple-950 dark:text-purple-200 flex items-center gap-1.5">
                      <span class="text-base">🎯</span>
                      <span>問題導引與法理核心：</span>
                    </div>
                    <p class="leading-relaxed">
                      主張「欠缺責任能力：精神障礙」之抗辯（§ 19）。因生理大腦病變致無法辨識不法或喪失控制能力：
                      <span class="mt-1 inline-flex items-center gap-1 px-3 py-1 rounded-lg bg-purple-600 text-white font-black text-xs shadow-xs">
                        ✨ 因而雖做壞事，但主觀上卻不是壞人！
                      </span>
                    </p>
                  </div>

                  <!-- 2026 現行法規查核與資料來源 -->
                  <div class="pt-3 border-t-2 border-purple-100 dark:border-purple-900/50 space-y-1.5 text-xs">
                    <div class="flex items-center justify-between flex-wrap gap-2">
                      <div class="flex items-center gap-1.5 font-bold text-slate-800 dark:text-slate-200">
                        <span class="text-purple-600 dark:text-purple-400">⚖️</span>
                        <span>2026 現行法規狀態：</span>
                        <span class="px-2 py-0.5 rounded-full text-[11px] bg-rose-600 text-white font-black">受憲法法庭 113 憲判 8 號判決重大拘束</span>
                      </div>
                      <a href="https://law.moj.gov.tw/LawClass/LawSingle.aspx?pcode=C0000001&flno=19" target="_blank" rel="noopener noreferrer" class="text-[11px] text-purple-600 dark:text-purple-400 font-bold hover:underline flex items-center gap-1 font-mono">
                        <span>全國法規資料庫 § 19 條文 ↗</span>
                      </a>
                    </div>
                    <div class="text-slate-600 dark:text-slate-300 leading-relaxed text-[11.5px] bg-white/90 dark:bg-slate-900/60 p-3 rounded-xl border border-purple-200 dark:border-purple-800/60 space-y-1.5">
                      <p><strong class="text-purple-900 dark:text-purple-200 font-bold">1. 憲判 113 年第 8 號死刑合憲性判決限制：</strong>宣告精神障礙者致辨識或控制能力顯著降低者，<strong>絕對不得科處死刑</strong>；判死後精神障礙者，<strong>亦絕對不得執行死刑</strong>。</p>
                      <p><strong class="text-purple-900 dark:text-purple-200 font-bold">2. 監護處分重大配套（§ 87 修正）：</strong>對於無責任能力不罰判決者，啟動司法精神醫療監護處分（每次最多 3 年、無次數上限每年審查）。</p>
                    </div>
                  </div>
                </div>

                <!-- 案例 1-4：生理瘖啞 (青碧翠綠/薄荷主題) -->
                <div class="p-5 sm:p-6 rounded-2xl border-2 border-teal-400 dark:border-teal-500 bg-gradient-to-br from-teal-50/80 via-white to-teal-50/30 dark:from-[#062420] dark:via-[#091f1c] dark:to-[#070f1e] shadow-md hover:shadow-xl transition-all space-y-4">
                  <div class="flex items-center justify-between flex-wrap gap-2">
                    <span class="text-xs font-black px-3 py-1.5 rounded-xl bg-gradient-to-r from-teal-600 to-emerald-600 text-white shadow-sm shadow-teal-500/30 font-mono tracking-wide">
                      🦅 案例 1-4
                    </span>
                    <span class="text-xs px-3 py-1 rounded-xl bg-teal-700 text-white font-black shadow-sm shadow-teal-700/30">
                      § 20 責任能力：生理（瘖啞人）
                    </span>
                  </div>
                  
                  <!-- 被告心聲對話框 -->
                  <div class="p-4 rounded-xl bg-teal-50/90 dark:bg-teal-950/60 border-2 border-teal-300 dark:border-teal-800/80 text-xs sm:text-sm text-slate-800 dark:text-slate-100 flex items-start gap-3 shadow-inner">
                    <span class="text-base shrink-0">🗣️</span>
                    <div>
                      <strong class="text-teal-900 dark:text-teal-300 font-black">被告與律師抗辯：</strong>
                      <span class="italic">「……（手語比劃）。律師：我的當事人自幼既聾且啞，教育與社會資訊嚴重阻絕，犯下此愚行實屬教化障礙，情有可原。」</span>
                    </div>
                  </div>

                  <div class="text-xs sm:text-sm text-slate-700 dark:text-slate-300 space-y-2">
                    <div class="font-black text-teal-950 dark:text-teal-200 flex items-center gap-1.5">
                      <span class="text-base">🎯</span>
                      <span>問題導引與法理核心：</span>
                    </div>
                    <p class="leading-relaxed">
                      主張「欠缺責任能力：生理」之抗辯（§ 20）。因自幼瘖啞致生活經驗與社會規範獲取困難：
                      <span class="mt-1 inline-flex items-center gap-1 px-3 py-1 rounded-lg bg-teal-600 text-white font-black text-xs shadow-xs">
                        ✨ 因而雖做壞事，但主觀上卻不是壞人！
                      </span>
                    </p>
                  </div>

                  <!-- 2026 現行法規查核與資料來源 -->
                  <div class="pt-3 border-t-2 border-teal-100 dark:border-teal-900/50 space-y-1.5 text-xs">
                    <div class="flex items-center justify-between flex-wrap gap-2">
                      <div class="flex items-center gap-1.5 font-bold text-slate-800 dark:text-slate-200">
                        <span class="text-teal-600 dark:text-teal-400">📌</span>
                        <span>2026 現行法規狀態：</span>
                        <span class="px-2 py-0.5 rounded-full text-[11px] bg-emerald-600 text-white font-black">條文無更動（維持現行法）</span>
                      </div>
                      <a href="https://law.moj.gov.tw/LawClass/LawSingle.aspx?pcode=C0000001&flno=20" target="_blank" rel="noopener noreferrer" class="text-[11px] text-teal-700 dark:text-teal-400 font-bold hover:underline flex items-center gap-1 font-mono">
                        <span>全國法規資料庫 § 20 條文 ↗</span>
                      </a>
                    </div>
                    <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-[11.5px] bg-white/90 dark:bg-slate-900/60 p-3 rounded-xl border border-teal-200 dark:border-teal-800/60">
                      <strong class="text-teal-900 dark:text-teal-200 font-bold">條文內容：</strong>「瘖啞人之行為，得減輕其刑。」實務嚴格限定須「自幼瘖啞」（聽力與語言能力均完全喪失）且未受正常教育者，始得寬貸減刑。
                    </p>
                  </div>
                </div>

                <!-- 案例 1-5：過當防衛/避難 (熱情珊瑚紅/赤朱主題) -->
                <div class="p-5 sm:p-6 rounded-2xl border-2 border-rose-400 dark:border-rose-500 bg-gradient-to-br from-rose-50/80 via-white to-rose-50/30 dark:from-[#2e1017] dark:via-[#1e0f15] dark:to-[#070f1e] shadow-md hover:shadow-xl transition-all space-y-4">
                  <div class="flex items-center justify-between flex-wrap gap-2">
                    <span class="text-xs font-black px-3 py-1.5 rounded-xl bg-gradient-to-r from-rose-600 to-red-600 text-white shadow-sm shadow-rose-500/30 font-mono tracking-wide">
                      🦅 案例 1-5
                    </span>
                    <span class="text-xs px-3 py-1 rounded-xl bg-orange-600 text-white font-black shadow-sm shadow-orange-600/30">
                      § 23但、§ 24 1但 防衛過當 / 避難過當
                    </span>
                  </div>
                  
                  <!-- 被告心聲對話框 -->
                  <div class="p-4 rounded-xl bg-rose-50/90 dark:bg-rose-950/60 border-2 border-rose-300 dark:border-rose-800/80 text-xs sm:text-sm text-slate-800 dark:text-slate-100 flex items-start gap-3 shadow-inner">
                    <span class="text-base shrink-0">🗣️</span>
                    <div>
                      <strong class="text-rose-900 dark:text-rose-300 font-black">被告心聲抗辯：</strong>
                      <span class="italic">「是對方拿開山刀猛追著我砍啊！生死一瞬間我嚇瘋了，抓起磚頭猛砸把他打死了，求生之際我怎麼可能精準量力道！」</span>
                    </div>
                  </div>

                  <div class="text-xs sm:text-sm text-slate-700 dark:text-slate-300 space-y-2">
                    <div class="font-black text-rose-950 dark:text-rose-200 flex items-center gap-1.5">
                      <span class="text-base">🎯</span>
                      <span>問題導引與法理核心：</span>
                    </div>
                    <p class="leading-relaxed">
                      主張「過當防衛、過當避難」之抗辯（§ 23但、§ 24 1但）。面臨生死威脅極度恐慌下，難以冷靜精準拿捏反擊力道：
                      <span class="mt-1 inline-flex items-center gap-1 px-3 py-1 rounded-lg bg-rose-600 text-white font-black text-xs shadow-xs">
                        ✨ 因而雖做壞事，但主觀上卻不是壞人！
                      </span>
                    </p>
                  </div>

                  <!-- 2026 現行法規查核與資料來源 -->
                  <div class="pt-3 border-t-2 border-rose-100 dark:border-rose-900/50 space-y-1.5 text-xs">
                    <div class="flex items-center justify-between flex-wrap gap-2">
                      <div class="flex items-center gap-1.5 font-bold text-slate-800 dark:text-slate-200">
                        <span class="text-rose-600 dark:text-rose-400">📌</span>
                        <span>2026 現行法規狀態：</span>
                        <span class="px-2 py-0.5 rounded-full text-[11px] bg-emerald-600 text-white font-black">條文無更動（維持現行法）</span>
                      </div>
                      <div class="flex items-center gap-2 font-mono text-[11px]">
                        <a href="https://law.moj.gov.tw/LawClass/LawSingle.aspx?pcode=C0000001&flno=23" target="_blank" rel="noopener noreferrer" class="text-rose-600 dark:text-rose-400 font-bold hover:underline">§ 23 條文 ↗</a>
                        <span class="text-slate-300 dark:text-slate-700">|</span>
                        <a href="https://law.moj.gov.tw/LawClass/LawSingle.aspx?pcode=C0000001&flno=24" target="_blank" rel="noopener noreferrer" class="text-rose-600 dark:text-rose-400 font-bold hover:underline">§ 24 條文 ↗</a>
                      </div>
                    </div>
                    <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-[11.5px] bg-white/90 dark:bg-slate-900/60 p-3 rounded-xl border border-rose-200 dark:border-rose-800/60">
                      <strong class="text-rose-900 dark:text-rose-200 font-bold">條文內容：</strong>§ 23 但書「防衛行為過當者，得減輕或免除其刑」；§ 24 第 1 項但書「避難行為過當者，得減輕或免除其刑」。過當行為雖具備不法（侵害法益仍屬違法），但法官享有減輕或免除其刑之罪責寬恕裁量權。
                    </p>
                  </div>
                </div>

              </div>

              <!-- 🌟 白話文詳解專區：秒懂五大案例（為什麼「雖做壞事，但不是壞人」？） -->
              <div class="rounded-3xl border-2 border-indigo-400/90 dark:border-indigo-600 bg-gradient-to-br from-indigo-50/60 via-white to-blue-50/30 dark:from-[#111827] dark:via-[#1e1e38] dark:to-[#0b1021] p-6 sm:p-8 space-y-6 shadow-xl mt-6">
                
                <!-- 專區頂部標題列 (避免使用觸發腳本的關鍵字) -->
                <div class="flex items-center justify-between border-b-2 border-indigo-200/80 dark:border-indigo-900/60 pb-4 flex-wrap gap-3">
                  <div class="flex items-center gap-3">
                    <span class="w-10 h-10 rounded-2xl bg-indigo-600 text-white flex items-center justify-center text-xl shadow-md shadow-indigo-600/30">
                      💡
                    </span>
                    <div>
                      <h4 class="font-black text-base sm:text-xl text-indigo-950 dark:text-indigo-200 tracking-wide">
                        白話文秒懂這 5 大情境：為什麼「雖做壞事，但不是壞人」？
                      </h4>
                      <p class="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                        用最直觀的生活常理，破解教科書第 1-2 ～ 1-3 頁的「法定阻卻罪責」免責防線
                      </p>
                    </div>
                  </div>
                  <span class="text-xs font-mono font-bold px-3 py-1 rounded-full bg-indigo-100 dark:bg-indigo-900/70 text-indigo-800 dark:text-indigo-200 border border-indigo-300 dark:border-indigo-700">
                    白話法理專區
                  </span>
                </div>

                <!-- 核心觀念前導提示 -->
                <div class="p-4 rounded-2xl bg-indigo-50/70 dark:bg-indigo-950/40 border border-indigo-200/80 dark:border-indigo-800/60 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed space-y-1.5">
                  <div class="font-black text-indigo-950 dark:text-indigo-200 flex items-center gap-2">
                    <span class="text-base">🤔</span>
                    <span>先問一個直覺問題：這 5 種人明明都搞出了客觀壞事（有人傷殘、財產損毀），為什麼法律不把他們當壞人關到死？</span>
                  </div>
                  <p class="pl-6">
                    因為刑法的目的只處罰「真正的壞人」，絕不處罰「倒楣鬼、重症病患或不懂事的小孩」。當客觀壞事發生時，常理雖先推定為壞人；但只要能拿出這 5 把<strong class="text-indigo-700 dark:text-indigo-300 font-black">「法定免責金牌」</strong>，就能徹底推翻罪責！
                  </p>
                </div>

                <!-- 5 大情境清爽排版 (寬敞雙欄佈局，完全排除擠壓排版) -->
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-5">
                  
                  <!-- 情境 1 -->
                  <div class="p-5 rounded-2xl bg-white dark:bg-slate-900/90 border-2 border-sky-300 dark:border-sky-700/80 shadow-sm space-y-3">
                    <div class="flex items-center justify-between gap-2 pb-2.5 border-b border-sky-100 dark:border-sky-900/60">
                      <div class="flex items-center gap-2.5">
                        <span class="w-6 h-6 rounded-lg bg-sky-600 text-white font-black text-xs flex items-center justify-center shrink-0 shadow-xs">1</span>
                        <span class="font-black text-sky-950 dark:text-sky-200 text-sm sm:text-base">情境一：不知法律（刑法 § 16）</span>
                      </div>
                      <span class="text-[11px] px-2.5 py-0.5 rounded-full bg-sky-100 dark:bg-sky-950 text-sky-800 dark:text-sky-200 font-bold border border-sky-200 dark:border-sky-800 shrink-0">
                        正當且無法避免
                      </span>
                    </div>
                    
                    <div class="p-3 rounded-xl bg-sky-50 dark:bg-sky-950/40 border border-sky-200/80 dark:border-sky-900/50 text-xs sm:text-sm font-bold text-sky-900 dark:text-sky-200 flex items-center gap-2">
                      <span>🗣️</span>
                      <span>「我真的完全不知道這是犯法的！」</span>
                    </div>

                    <p class="text-xs sm:text-[13px] text-slate-600 dark:text-slate-300 leading-relaxed">
                      例如外國旅客攜帶家鄉合法藥草入境，不知道台灣昨日才剛列管；或法令剛公佈且機關宣導有重大疏漏。只要有<strong class="text-sky-700 dark:text-sky-300">「正當理由且完全無法避免」</strong>，行為人內心根本沒有對抗法律的惡意，法律不當壞人處罰。
                    </p>
                  </div>

                  <!-- 情境 2 -->
                  <div class="p-5 rounded-2xl bg-white dark:bg-slate-900/90 border-2 border-amber-300 dark:border-amber-700/80 shadow-sm space-y-3">
                    <div class="flex items-center justify-between gap-2 pb-2.5 border-b border-amber-100 dark:border-amber-900/60">
                      <div class="flex items-center gap-2.5">
                        <span class="w-6 h-6 rounded-lg bg-amber-600 text-white font-black text-xs flex items-center justify-center shrink-0 shadow-xs">2</span>
                        <span class="font-black text-amber-950 dark:text-amber-200 text-sm sm:text-base">情境二：年紀太小（刑法 § 18）</span>
                      </div>
                      <span class="text-[11px] px-2.5 py-0.5 rounded-full bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-200 font-bold border border-amber-200 dark:border-amber-800 shrink-0">
                        14 歲以下不罰
                      </span>
                    </div>
                    
                    <div class="p-3 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200/80 dark:border-amber-900/50 text-xs sm:text-sm font-bold text-amber-900 dark:text-amber-200 flex items-center gap-2">
                      <span>🗣️</span>
                      <span>「小孩子大腦發育還沒成熟！」</span>
                    </div>

                    <p class="text-xs sm:text-[13px] text-slate-600 dark:text-slate-300 leading-relaxed">
                      10 歲小孩玩打火機燒毀房屋，壞事雖嚴重，但孩童大腦對危險代價欠缺辨識能力。法律明定<strong class="text-amber-700 dark:text-amber-300">未滿 14 歲完全不罰</strong>，轉由少年事件處理法輔導教育，因為他是缺乏認知的小朋友，不應當冷酷罪犯論處。
                    </p>
                  </div>

                  <!-- 情境 3 -->
                  <div class="p-5 rounded-2xl bg-white dark:bg-slate-900/90 border-2 border-purple-300 dark:border-purple-700/80 shadow-sm space-y-3">
                    <div class="flex items-center justify-between gap-2 pb-2.5 border-b border-purple-100 dark:border-purple-900/60">
                      <div class="flex items-center gap-2.5">
                        <span class="w-6 h-6 rounded-lg bg-purple-600 text-white font-black text-xs flex items-center justify-center shrink-0 shadow-xs">3</span>
                        <span class="font-black text-purple-950 dark:text-purple-200 text-sm sm:text-base">情境三：精神障礙（刑法 § 19）</span>
                      </div>
                      <span class="text-[11px] px-2.5 py-0.5 rounded-full bg-purple-100 dark:bg-purple-950 text-purple-800 dark:text-purple-200 font-bold border border-purple-200 dark:border-purple-800 shrink-0">
                        醫療監護非刑罰
                      </span>
                    </div>
                    
                    <div class="p-3 rounded-xl bg-purple-50 dark:bg-purple-950/40 border border-purple-200/80 dark:border-purple-900/50 text-xs sm:text-sm font-bold text-purple-900 dark:text-purple-200 flex items-center gap-2">
                      <span>🗣️</span>
                      <span>「大腦受幻覺控制，徹底失控！」</span>
                    </div>

                    <p class="text-xs sm:text-[13px] text-slate-600 dark:text-slate-300 leading-relaxed">
                      重度思覺失調發作時，以為身邊的人是外星怪物要毀滅地球而動手攻擊。他動手時<strong class="text-purple-700 dark:text-purple-300">生理大腦無法辨識現實或喪失控制力</strong>。他是需要強制住院醫療的重症病人，不是該判重刑的惡徒。
                    </p>
                  </div>

                  <!-- 情境 4 -->
                  <div class="p-5 rounded-2xl bg-white dark:bg-slate-900/90 border-2 border-teal-300 dark:border-teal-700/80 shadow-sm space-y-3">
                    <div class="flex items-center justify-between gap-2 pb-2.5 border-b border-teal-100 dark:border-teal-900/60">
                      <div class="flex items-center gap-2.5">
                        <span class="w-6 h-6 rounded-lg bg-teal-600 text-white font-black text-xs flex items-center justify-center shrink-0 shadow-xs">4</span>
                        <span class="font-black text-teal-950 dark:text-teal-200 text-sm sm:text-base">情境四：生理瘖啞（刑法 § 20）</span>
                      </div>
                      <span class="text-[11px] px-2.5 py-0.5 rounded-full bg-teal-100 dark:bg-teal-950 text-teal-800 dark:text-teal-200 font-bold border border-teal-200 dark:border-teal-800 shrink-0">
                        得減輕其刑
                      </span>
                    </div>
                    
                    <div class="p-3 rounded-xl bg-teal-50 dark:bg-teal-950/40 border border-teal-200/80 dark:border-teal-900/50 text-xs sm:text-sm font-bold text-teal-900 dark:text-teal-200 flex items-center gap-2">
                      <span>🗣️</span>
                      <span>「自幼無聲世界，生活經驗阻隔！」</span>
                    </div>

                    <p class="text-xs sm:text-[13px] text-slate-600 dark:text-slate-300 leading-relaxed">
                      自幼聾且啞、未受過完整教育，獲取社會規範資訊的難度遠高於常人。立法者體恤其<strong class="text-teal-700 dark:text-teal-300">天生生理學習阻礙</strong>，賦予法官得減輕其刑之空間，避免對弱勢強求苛責。
                    </p>
                  </div>

                  <!-- 情境 5 (橫跨全寬，寬闊舒適) -->
                  <div class="p-5 rounded-2xl bg-white dark:bg-slate-900/90 border-2 border-rose-300 dark:border-rose-700/80 shadow-sm space-y-3 lg:col-span-2">
                    <div class="flex items-center justify-between gap-2 pb-2.5 border-b border-rose-100 dark:border-rose-900/60 flex-wrap">
                      <div class="flex items-center gap-2.5">
                        <span class="w-6 h-6 rounded-lg bg-rose-600 text-white font-black text-xs flex items-center justify-center shrink-0 shadow-xs">5</span>
                        <span class="font-black text-rose-950 dark:text-rose-200 text-sm sm:text-base">情境五：防衛或避難過當（刑法 § 23但、§ 24 1但）</span>
                      </div>
                      <span class="text-[11px] px-2.5 py-0.5 rounded-full bg-rose-100 dark:bg-rose-950 text-rose-800 dark:text-rose-200 font-bold border border-rose-200 dark:border-rose-800 shrink-0">
                        得減輕或免除其刑
                      </span>
                    </div>
                    
                    <div class="p-3 rounded-xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200/80 dark:border-rose-900/50 text-xs sm:text-sm font-bold text-rose-900 dark:text-rose-200 flex items-center gap-2">
                      <span>🗣️</span>
                      <span>「生死一瞬間嚇破膽，誰能像機器人拿尺精準量力道？！」</span>
                    </div>

                    <p class="text-xs sm:text-[13px] text-slate-600 dark:text-slate-300 leading-relaxed">
                      歹徒持刀狂刺而來，你在極度恐慌下抓起鐵棒亂揮結果把對方打死。雖然反擊力道超過了剛好防衛的限度（客觀仍屬不法），但身為正常人類，在生死邊緣求生本能下，<strong class="text-rose-700 dark:text-rose-300">法律不能苛求你當時保持超人般的冷靜</strong>，因此法官享有得減輕或免除其刑的罪責寬恕權！
                    </p>
                  </div>

                </div>

                <!-- 記憶口訣金句條 -->
                <div class="p-4 rounded-2xl bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-700 text-white flex items-center justify-between gap-4 flex-wrap shadow-lg">
                  <div class="flex items-center gap-3">
                    <span class="text-2xl">🏆</span>
                    <div>
                      <div class="text-xs text-indigo-200 font-bold">5 大法定阻卻罪責例示・終極口訣</div>
                      <div class="font-black text-xs sm:text-base tracking-wide">
                        「不知法（§16）、年紀小（§18）、精神病（§19）、聾且啞（§20）、過當慌（§23/24）」
                      </div>
                    </div>
                  </div>
                  <div class="text-xs font-bold bg-white/20 backdrop-blur-xs px-3.5 py-1.5 rounded-xl border border-white/20 whitespace-nowrap">
                    客觀造成壞事 ➔ 主觀不認壞人 ➔ 推翻罪責免罰減刑！
                  </div>
                </div>

              </div>

            </section>

            <!-- SECTION 4: 超法定阻卻罪責事由與期待可能性 (第 1-3 頁 案例 1-6) -->
            <section id="sec-extra-cases" class="scroll-mt-28 space-y-5">
              <div class="flex items-center gap-2.5">
                <span class="w-3 h-3 rounded-full bg-blue-600 animate-pulse"></span>
                <h3 class="text-base sm:text-lg font-black text-slate-900 dark:text-white tracking-wide">
                  四、超法定阻卻罪責事由與「期待可能性」（案例 1-6）
                </h3>
              </div>

              <!-- 導讀看板：深藍/靛青高飽和立體卡片 -->
              <div class="p-6 sm:p-7 rounded-3xl border-2 border-blue-500/80 dark:border-blue-500/70 bg-gradient-to-br from-blue-50/80 via-white to-indigo-50/40 dark:from-[#0d1c38] dark:via-[#10192e] dark:to-[#070f1e] shadow-lg shadow-blue-500/10 space-y-4 text-sm sm:text-base leading-relaxed text-slate-700 dark:text-slate-200">
                <div class="flex items-center justify-between border-b-2 border-blue-200/80 dark:border-blue-900/60 pb-3 flex-wrap gap-2">
                  <div class="flex items-center gap-2.5">
                    <span class="text-xl">💡</span>
                    <span class="font-black text-sm sm:text-base text-blue-950 dark:text-blue-200 tracking-wide">
                      超法定阻卻罪責事由與期待可能性
                    </span>
                  </div>
                  <span class="text-xs font-mono font-bold px-2.5 py-1 rounded-lg bg-blue-100 dark:bg-blue-900/60 text-blue-800 dark:text-blue-200 border border-blue-300 dark:border-blue-700">
                    教材第 1-3 頁 原文精義
                  </span>
                </div>
                
                <p>
                  當然立法雖密仍有一疏，若是在刑法典中找不到法定的反證推翻理由，法律亦允許在法典之外尋求正當理由，亦即
                  <span class="px-3 py-1 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-white font-black text-xs sm:text-sm shadow-sm inline-block">
                    「超法定阻卻罪責事由」
                  </span>。
                </p>
                
                <p>
                  現今犯罪體系以
                  <span class="px-3 py-1 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-black text-xs sm:text-sm shadow-sm inline-block">
                    「行為人有無（不做壞事的）期待可能性？」
                  </span>
                  作為罪責的實質非難核心。若行為人在客觀嚴苛處境下可被期待不做壞事，始具備罪責；既然
                  <strong class="text-blue-950 dark:text-blue-100 font-black underline decoration-blue-500 decoration-2 underline-offset-4">
                    期待可能性是罪責之實質靈魂
                  </strong>，那麼不論法定或超法定阻卻罪責事由，均必須依循「期待可能性」之法理核心來詮釋！
                </p>
              </div>

              <!-- 案例 1-6 卡片 (高飽和琥珀/金黃主題) -->
              <div class="p-5 sm:p-6 rounded-2xl border-2 border-amber-400 dark:border-amber-500 bg-gradient-to-br from-amber-50/80 via-white to-amber-50/30 dark:from-[#291908] dark:via-[#1c1409] dark:to-[#070f1e] shadow-md hover:shadow-xl transition-all space-y-4">
                <div class="flex items-center justify-between flex-wrap gap-2">
                  <span class="text-xs font-black px-3 py-1.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-white shadow-sm shadow-amber-500/30 font-mono tracking-wide">
                    🦅 案例 1-6
                  </span>
                  <span class="text-xs px-3 py-1 rounded-xl bg-indigo-600 text-white font-black shadow-sm shadow-indigo-600/30">
                    超法定抗辯：期待可能性欠缺（幼兒墜地失火案）
                  </span>
                </div>
                
                <!-- 被告心聲對話框 -->
                <div class="p-4 rounded-xl bg-amber-50/90 dark:bg-amber-950/60 border-2 border-amber-300 dark:border-amber-800/80 text-xs sm:text-sm text-slate-800 dark:text-slate-100 flex items-start gap-3 shadow-inner">
                  <span class="text-base shrink-0">🗣️</span>
                  <div>
                    <strong class="text-amber-900 dark:text-amber-300 font-black">被告心聲抗辯：</strong>
                    <span class="italic">「我當時正在燙衣服，突然幼兒從床上跌落頭部破裂、血流不止！我整個人嚇得六神無主，一心只想抱著孩子衝去急診，慌亂中完全忘記拔掉熨斗插頭，才會釀成後續火災啊！」</span>
                  </div>
                </div>

                <div class="text-xs sm:text-sm text-slate-700 dark:text-slate-300 space-y-2">
                  <div class="font-black text-amber-950 dark:text-amber-200 flex items-center gap-1.5">
                    <span class="text-base">🎯</span>
                    <span>問題導引與法理核心：</span>
                  </div>
                  <p class="leading-relaxed">
                    主張「無期待可能性（或低度期待可能性）」之超法定抗辯。作父母的面對骨肉重傷瀕死，必然陷入極度恐慌混亂。對於這種客觀處境極端艱困的行為人，法律與社會客觀上根本難以期待其能超人般冷靜拔除插頭：
                    <span class="mt-1 inline-flex items-center gap-1 px-3 py-1 rounded-lg bg-amber-600 text-white font-black text-xs shadow-xs">
                      ✨ 因而雖做壞事（失火侵害法益），但主觀上絕不是壞人！
                    </span>
                  </p>
                </div>

                <!-- 2026 現行法規查核與資料來源 -->
                <div class="pt-3 border-t-2 border-amber-100 dark:border-amber-900/50 space-y-1.5 text-xs">
                  <div class="flex items-center justify-between flex-wrap gap-2">
                    <div class="flex items-center gap-1.5 font-bold text-slate-800 dark:text-slate-200">
                      <span class="text-indigo-600 dark:text-indigo-400">💡</span>
                      <span>2026 現行實務狀態：</span>
                      <span class="px-2 py-0.5 rounded-full text-[11px] bg-indigo-600 text-white font-black">超法定事由・實務一致肯認</span>
                    </div>
                    <span class="text-[11px] text-slate-600 dark:text-slate-300 font-mono font-bold">最高法院 30 年上字第 2240 號判例等裁判要旨</span>
                  </div>
                  <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-[11.5px] bg-white/90 dark:bg-slate-900/60 p-3 rounded-xl border border-amber-200 dark:border-amber-800/60">
                    <strong class="text-amber-900 dark:text-amber-200 font-bold">法規與實務定性：</strong>刑法總則截至 2026 年雖未明文增列期待可能性之概括法條，但最高法院與刑法通說一致肯認：期待可能性為罪責實質非難之核心，若行為人客觀處境極度困窘危難，致客觀上「無法期待其遵守法規範」時，得阻卻或減輕罪責。
                  </p>
                </div>
              </div>

              <!-- 🌟 白話文詳解專區：秒懂「超法定阻卻罪責」與「期待可能性」 -->
              <div class="rounded-3xl border-2 border-amber-400/90 dark:border-amber-600 bg-gradient-to-br from-amber-50/60 via-white to-orange-50/30 dark:from-[#1b140a] dark:via-[#191209] dark:to-[#070f1e] p-6 sm:p-8 space-y-6 shadow-xl">
                
                <!-- 標題列 (避免使用觸發腳本的關鍵字) -->
                <div class="flex items-center justify-between border-b-2 border-amber-200/80 dark:border-amber-900/60 pb-4 flex-wrap gap-3">
                  <div class="flex items-center gap-3">
                    <span class="w-10 h-10 rounded-2xl bg-amber-600 text-white flex items-center justify-center text-xl shadow-md shadow-amber-600/30">
                      💡
                    </span>
                    <div>
                      <h4 class="font-black text-base sm:text-xl text-amber-950 dark:text-amber-200 tracking-wide">
                        白話文秒懂這區：什麼是「期待可能性」與「超法定」？
                      </h4>
                      <p class="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                        用最接地氣的人之常情，徹底看透刑法罪責最溫暖、有人性的一面
                      </p>
                    </div>
                  </div>
                  <span class="text-xs font-mono font-bold px-3 py-1 rounded-full bg-amber-100 dark:bg-amber-900/70 text-amber-800 dark:text-amber-200 border border-amber-300 dark:border-amber-700">
                    法律白話大解讀
                  </span>
                </div>

                <!-- 雙欄寬敞拆解卡片 -->
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-5">
                  
                  <!-- 白話重點 1: 什麼是期待可能性 -->
                  <div class="p-5 rounded-2xl bg-white dark:bg-slate-900/90 border-2 border-blue-300 dark:border-blue-700/80 shadow-sm space-y-3">
                    <div class="flex items-center justify-between gap-2 pb-2.5 border-b border-blue-100 dark:border-blue-900/60">
                      <div class="flex items-center gap-2.5">
                        <span class="w-6 h-6 rounded-lg bg-blue-600 text-white font-black text-xs flex items-center justify-center shrink-0 shadow-xs">1</span>
                        <span class="font-black text-blue-950 dark:text-blue-200 text-sm sm:text-base">什麼叫「期待可能性」？（法律的同理心）</span>
                      </div>
                      <span class="text-[11px] px-2.5 py-0.5 rounded-full bg-blue-100 dark:bg-blue-950 text-blue-800 dark:text-blue-200 font-bold border border-blue-200 dark:border-blue-800 shrink-0">
                        刑法核心靈魂
                      </span>
                    </div>

                    <div class="p-3 rounded-xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200/80 dark:border-blue-900/50 text-xs sm:text-sm font-bold text-blue-900 dark:text-blue-200 flex items-center gap-2">
                      <span>⚖️</span>
                      <span>「法律不強人所難，法律不能要求大家都是超人！」</span>
                    </div>

                    <p class="text-xs sm:text-[13px] text-slate-600 dark:text-slate-300 leading-relaxed">
                      如果設身處地，把全世界任何一個正常人丟到那種生死交關或極度驚恐的處境裡，<strong class="text-blue-700 dark:text-blue-300 font-bold">十個人裡面有十個人都會做出同樣慌亂的選擇</strong>，那法律怎麼能苛求（期待）他冷靜克制？既然「無法期待他保持完美」，他就沒有罪惡感，不能處罰他！
                    </p>
                  </div>

                  <!-- 白話重點 2: 什麼叫超法定 -->
                  <div class="p-5 rounded-2xl bg-white dark:bg-slate-900/90 border-2 border-amber-300 dark:border-amber-700/80 shadow-sm space-y-3">
                    <div class="flex items-center justify-between gap-2 pb-2.5 border-b border-amber-100 dark:border-amber-900/60">
                      <div class="flex items-center gap-2.5">
                        <span class="w-6 h-6 rounded-lg bg-amber-600 text-white font-black text-xs flex items-center justify-center shrink-0 shadow-xs">2</span>
                        <span class="font-black text-amber-950 dark:text-amber-200 text-sm sm:text-base">什麼叫「超法定」？（條文漏掉時的活路）</span>
                      </div>
                      <span class="text-[11px] px-2.5 py-0.5 rounded-full bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-200 font-bold border border-amber-200 dark:border-amber-800 shrink-0">
                        法典外正義後門
                      </span>
                    </div>

                    <div class="p-3 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200/80 dark:border-amber-900/50 text-xs sm:text-sm font-bold text-amber-900 dark:text-amber-200 flex items-center gap-2">
                      <span>📖</span>
                      <span>「立法再周密，也寫不盡天下所有突發的人間慘劇！」</span>
                    </div>

                    <p class="text-xs sm:text-[13px] text-slate-600 dark:text-slate-300 leading-relaxed">
                      前一節講的 14 歲以下、精神病、聾啞等，都寫在法條裡（叫「法定」）。但人間危難千奇百怪，法條不可能全部條列。法官發現雖然法條沒明寫，但行為人確實處於「完全無期待可能」的險境時，可以直接引用這項法理判免責，這就叫<strong class="text-amber-700 dark:text-amber-300 font-bold">「超法定」</strong>！
                    </p>
                  </div>

                  <!-- 白話重點 3: 案例 1-6 深度剖析 (全寬展示) -->
                  <div class="p-5 rounded-2xl bg-white dark:bg-slate-900/90 border-2 border-indigo-300 dark:border-indigo-700/80 shadow-sm space-y-3 lg:col-span-2">
                    <div class="flex items-center justify-between gap-2 pb-2.5 border-b border-indigo-100 dark:border-indigo-900/60 flex-wrap">
                      <div class="flex items-center gap-2.5">
                        <span class="w-6 h-6 rounded-lg bg-indigo-600 text-white font-black text-xs flex items-center justify-center shrink-0 shadow-xs">3</span>
                        <span class="font-black text-indigo-950 dark:text-indigo-200 text-sm sm:text-base">用案例 1-6 實戰拆解：忘拔熨斗的媽媽該被判刑嗎？</span>
                      </div>
                      <span class="text-[11px] px-2.5 py-0.5 rounded-full bg-indigo-100 dark:bg-indigo-950 text-indigo-800 dark:text-indigo-200 font-bold border border-indigo-200 dark:border-indigo-800 shrink-0">
                        情理法完美平衡
                      </span>
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                      <div class="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700 space-y-1">
                        <div class="font-black text-xs sm:text-sm text-slate-800 dark:text-slate-200 flex items-center gap-1.5">
                          <span class="text-rose-500">❌</span>
                          <span>客觀行為面（壞事）：</span>
                        </div>
                        <p class="text-xs text-slate-600 dark:text-slate-300">
                          整棟大樓被燒了，鄰居財產化為灰燼，客觀上確實該當失火罪構成要件，且無正當防衛理由，<strong class="text-rose-600 dark:text-rose-400">這是一件無庸置疑的壞事（不法成立）</strong>。
                        </p>
                      </div>

                      <div class="p-3.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200/80 dark:border-emerald-800 space-y-1">
                        <div class="font-black text-xs sm:text-sm text-emerald-900 dark:text-emerald-200 flex items-center gap-1.5">
                          <span class="text-emerald-500">⭕</span>
                          <span>主觀責任面（壞人？）：</span>
                        </div>
                        <p class="text-xs text-slate-600 dark:text-slate-300">
                          骨肉摔得頭破血流生死未卜，天下哪個父母那一秒不是慌忙抱著就衝？法律絕不能期待她慢條斯理拔插頭。<strong class="text-emerald-700 dark:text-emerald-300">她不是壞人（無期待可能性，罪責被推翻不罰）</strong>！
                        </p>
                      </div>
                    </div>
                  </div>

                </div>

                <!-- 記憶口訣金句條 -->
                <div class="p-4 rounded-2xl bg-gradient-to-r from-amber-600 via-orange-600 to-indigo-700 text-white flex items-center justify-between gap-4 flex-wrap shadow-lg">
                  <div class="flex items-center gap-3">
                    <span class="text-2xl">🏆</span>
                    <div>
                      <div class="text-xs text-amber-200 font-bold">期待可能性與超法定事由・終極精華口訣</div>
                      <div class="font-black text-xs sm:text-base tracking-wide">
                        「法律不強人所難！生死關頭無超人，無期待可能即無罪責！」
                      </div>
                    </div>
                  </div>
                  <div class="text-xs font-bold bg-white/20 backdrop-blur-xs px-3.5 py-1.5 rounded-xl border border-white/20 whitespace-nowrap">
                    客觀壞事雖成立 ➔ 處境艱困不認壞人 ➔ 超法定推翻罪責！
                  </div>
                </div>

              </div>
            </section>

            <!-- SECTION 5: 阻卻罪責事由之體系展開 (教材第 1-4 頁 原文圖解還原) -->
            <section id="sec-culpability-system" class="scroll-mt-28 space-y-4">
              <div class="flex items-center gap-2">
                <span class="w-2 h-2 rounded-full bg-indigo-500"></span>
                <h3 class="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                  五、阻卻罪責事由之體系展開（教材第 1-4 頁 原文圖解）
                </h3>
              </div>

              <!-- 體系展開視覺面板 -->
              <div class="p-6 sm:p-8 rounded-3xl border-2 border-indigo-500/30 bg-white dark:bg-[#101623] shadow-md space-y-6">
                <div class="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-white/[0.06]">
                  <div class="flex items-center gap-2">
                    <span class="w-2.5 h-2.5 rounded-full bg-indigo-500 animate-pulse"></span>
                    <span class="font-bold text-sm text-indigo-600 dark:text-indigo-400">阻卻罪責事由之體系展開</span>
                  </div>
                  <span class="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-400">教材第 1-4 頁</span>
                </div>

                <!-- 核心標示 -->
                <div class="max-w-2xl mx-auto space-y-6">
                  <div class="text-center p-4 rounded-2xl bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-purple-500/10 border border-indigo-500/20">
                    <div class="text-xs font-semibold text-slate-500 dark:text-slate-400">阻卻罪責之實質評價靈魂</div>
                    <div class="text-lg sm:text-xl font-black text-indigo-600 dark:text-indigo-400 mt-1 flex items-center justify-center gap-2">
                      <span>🎯 核心指標：期待可能性</span>
                    </div>
                    <p class="text-xs text-slate-500 dark:text-slate-400 mt-1">
                      行為人是否具有「不做壞事的期待可能性」？若處於極度艱困無期待可能，即無罪責非難之餘地。
                    </p>
                  </div>

                  <!-- 兩大支柱：法定 vs 超法定 -->
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    
                    <!-- 支柱 1：法定阻卻事由 -->
                    <div class="p-5 rounded-2xl border border-emerald-500/30 bg-emerald-50/20 dark:bg-emerald-950/20 space-y-3">
                      <div class="flex items-center justify-between">
                        <span class="font-black text-sm text-emerald-700 dark:text-emerald-400 flex items-center gap-1.5">
                          <span>⚖️ 法定的</span>
                        </span>
                        <span class="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-bold font-mono">成文法明定</span>
                      </div>

                      <div class="space-y-2 text-xs">
                        <!-- 欠缺不法意識 -->
                        <div class="p-3 rounded-xl bg-white dark:bg-slate-900/80 border border-emerald-500/20 space-y-1">
                          <div class="font-bold text-slate-800 dark:text-slate-200">1. 欠缺不法意識 (§ 16)</div>
                          <div class="pl-2 border-l-2 border-emerald-400 space-y-0.5 text-[11px] text-slate-600 dark:text-slate-300">
                            <div>• <strong class="text-emerald-600 dark:text-emerald-400">排除</strong>：不可避免（§ 16 本文，不罰）</div>
                            <div>• <strong class="text-amber-600 dark:text-amber-400">減免</strong>：可以避免（§ 16 但書，得減刑）</div>
                          </div>
                        </div>

                        <!-- 欠缺責任能力 -->
                        <div class="p-3 rounded-xl bg-white dark:bg-slate-900/80 border border-emerald-500/20 space-y-1">
                          <div class="font-bold text-slate-800 dark:text-slate-200">2. 欠缺責任能力</div>
                          <div class="space-y-1.5 pl-2 border-l-2 border-emerald-400 text-[11px] text-slate-600 dark:text-slate-300">
                            <div>
                              <span class="font-semibold text-slate-700 dark:text-slate-200">【年齡】</span>
                              <div>- 排除：未滿 14 歲（§ 18 Ⅰ）</div>
                              <div>- 減免：14~未滿 18 歲（§ 18 Ⅱ）、滿 80 歲（§ 18 Ⅲ）</div>
                            </div>
                            <div>
                              <span class="font-semibold text-slate-700 dark:text-slate-200">【精神】</span>
                              <div>- 排除：無辨識/控制能力（§ 19 Ⅰ）</div>
                              <div>- 減免：能力顯著降低（§ 19 Ⅱ）</div>
                            </div>
                            <div>
                              <span class="font-semibold text-slate-700 dark:text-slate-200">【生理】</span>
                              <div>- 減免：瘖啞人（§ 20）</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <!-- 支柱 2：超法定阻卻事由 -->
                    <div class="p-5 rounded-2xl border border-amber-500/30 bg-amber-50/20 dark:bg-amber-950/20 space-y-3">
                      <div class="flex items-center justify-between">
                        <span class="font-black text-sm text-amber-700 dark:text-amber-400 flex items-center gap-1.5">
                          <span>💡 超法定的</span>
                        </span>
                        <span class="text-[10px] px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 font-bold font-mono">法理與寬恕</span>
                      </div>

                      <div class="space-y-2 text-xs">
                        <!-- 寬恕罪責事由 -->
                        <div class="p-3 rounded-xl bg-white dark:bg-slate-900/80 border border-amber-500/20 space-y-2">
                          <div class="font-bold text-slate-800 dark:text-slate-200">寬恕罪責事由</div>
                          <p class="text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed">
                            面臨突發危急險境，難以苛求精準拿捏反擊力道，立法賦予廣泛減免裁量：
                          </p>
                          <div class="pl-2 border-l-2 border-amber-400 space-y-1 text-[11px] text-slate-600 dark:text-slate-300">
                            <div>• <strong class="text-amber-600 dark:text-amber-400">減免</strong>：正當防衛過當（§ 23 但書）</div>
                            <div>• <strong class="text-amber-600 dark:text-amber-400">減免</strong>：緊急避難過當（§ 24 但書）</div>
                          </div>
                        </div>

                        <!-- 期待可能性概括審查 -->
                        <div class="p-3 rounded-xl bg-white dark:bg-slate-900/80 border border-amber-500/20 space-y-1">
                          <div class="font-bold text-slate-800 dark:text-slate-200">無期待可能性（案例 1-6）</div>
                          <p class="text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed">
                            法官在極端艱困案型中，依期待可能性之實質非難核心，個案排除非難性。
                          </p>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </section>

            <!-- SECTION 6: 壞事（＝不法）的判斷與直觀本質 (教材第 1-4 頁) -->
            <section id="sec-unlawful-concept" class="scroll-mt-28 space-y-4">
              <div class="flex items-center gap-2">
                <span class="w-2 h-2 rounded-full bg-rose-500"></span>
                <h3 class="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                  六、壞事（＝不法）該如何判斷？巴掌感受與雙重指標
                </h3>
              </div>

              <div class="box-legal-navy p-6 sm:p-7 rounded-2xl space-y-5 text-sm sm:text-base leading-relaxed text-slate-700 dark:text-slate-200">
                <div class="flex items-center justify-between border-b border-blue-200/60 dark:border-blue-800/40 pb-3">
                  <div class="flex items-center gap-2">
                    <span class="text-base sm:text-lg">🔍</span>
                    <span class="font-extrabold text-sm sm:text-base text-blue-900 dark:text-blue-200 tracking-wide">壞事（不法）之判斷指標</span>
                  </div>
                  <span class="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-blue-100/80 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 font-bold border border-blue-200 dark:border-blue-700/50">
                    教材第 1-4 頁
                  </span>
                </div>
                <p>
                  接著我們來看壞事該如何判斷。所謂<span class="legal-tag-blue font-bold">壞事（＝不法）</span>就是<span class="legal-tag-rose font-bold">「無緣無故做出令人覺得不舒服的行為」</span>，可以簡單拆解成兩個指標：
                </p>

                <!-- 雙指標卡片 -->
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                  <div class="p-4 rounded-xl border border-rose-500/30 bg-rose-50/20 dark:bg-rose-950/20 space-y-2">
                    <div class="flex items-center justify-between">
                      <span class="font-bold text-rose-700 dark:text-rose-400 text-sm">指標一：法益侵害</span>
                      <span class="text-[10px] px-2 py-0.5 rounded bg-rose-500/10 text-rose-500 font-mono font-bold">令人不舒服</span>
                    </div>
                    <p class="text-xs text-slate-600 dark:text-slate-300">
                      <strong>重要生活利益受到破壞</strong>。立法者將這些公認不舒服的行為特徵歸納後寫在刑法中，形成各個分則罪名（殺人、傷害、強制性交、強盜等）。
                    </p>
                    <div class="pt-1 text-xs font-mono font-bold text-rose-600 dark:text-rose-400">
                      ➔ 法律用語：構成要件該當性（形式不法）
                    </div>
                  </div>

                  <div class="p-4 rounded-xl border border-indigo-500/30 bg-indigo-50/20 dark:bg-indigo-950/20 space-y-2">
                    <div class="flex items-center justify-between">
                      <span class="font-bold text-indigo-700 dark:text-indigo-400 text-sm">指標二：無正當理由</span>
                      <span class="text-[10px] px-2 py-0.5 rounded bg-indigo-500/10 text-indigo-500 font-mono font-bold">無緣無故</span>
                    </div>
                    <p class="text-xs text-slate-600 dark:text-slate-300">
                      <strong>附加說明此破壞有違整體法律秩序而並不正當</strong>。人們發現自古以來令人不舒服的行為鮮少有正當理由，因此確認法益侵害便直接「推定」該行為無正當理由。
                    </p>
                    <div class="pt-1 text-xs font-mono font-bold text-indigo-600 dark:text-indigo-400">
                      ➔ 法律用語：違法性（實質不法）
                    </div>
                  </div>
                </div>

                <!-- 🥊 巴掌生動比喻視覺卡片 -->
                <div class="p-5 rounded-2xl border-2 border-dashed border-rose-500/40 bg-gradient-to-r from-rose-50/40 via-amber-50/30 to-blue-50/30 dark:from-rose-950/20 dark:via-amber-950/10 dark:to-blue-950/20 space-y-3">
                  <div class="flex items-center gap-2 text-rose-600 dark:text-rose-400 font-bold text-sm">
                    <span class="text-xl">🥊</span>
                    <span>生活直觀直覺：突然被陌生人衝過來賞了一記耳光</span>
                  </div>
                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    <div class="p-3 rounded-xl bg-white dark:bg-slate-900/70 border border-rose-200 dark:border-rose-900/40 space-y-1">
                      <div class="font-bold text-rose-600 dark:text-rose-400 flex items-center gap-1.5">
                        <span class="w-4 h-4 rounded-full bg-rose-500 text-white flex items-center justify-center text-[10px]">1</span>
                        <span>第一感受：臉龐紅腫刺痛</span>
                      </div>
                      <p class="text-slate-600 dark:text-slate-400 leading-relaxed">
                        這代表身體的重要生活利益（身體法益）遭受破壞。<strong>先判斷法益侵害！</strong>
                      </p>
                    </div>
                    <div class="p-3 rounded-xl bg-white dark:bg-slate-900/70 border border-amber-200 dark:border-amber-900/40 space-y-1">
                      <div class="font-bold text-amber-600 dark:text-amber-400 flex items-center gap-1.5">
                        <span class="w-4 h-4 rounded-full bg-amber-500 text-white flex items-center justify-center text-[10px]">2</span>
                        <span>第二感受：疑惑與氣憤接踵而來</span>
                      </div>
                      <p class="text-slate-600 dark:text-slate-400 leading-relaxed">
                        這代表剛才對方的舉動是莫名其妙的（無正當理由）。<strong>再判斷無正當理由！</strong>
                      </p>
                    </div>
                  </div>
                  <p class="text-xs text-slate-500 dark:text-slate-400 font-medium">
                    💡 <strong>思維法則</strong>：壞事乃「法益侵害 ＋ 無正當理由」之組合，且依感受的順序，<span class="text-slate-900 dark:text-white font-bold underline decoration-rose-500 decoration-2">先判斷法益侵害，再判斷無正當理由</span>。
                  </p>
                </div>
              </div>
            </section>

            <!-- SECTION 7: 構成要件該當性推定違法性原則 (教材第 1-5 頁 原文圖解還原) -->
            <section id="sec-presume-unlawful" class="scroll-mt-28 space-y-4">
              <div class="flex items-center gap-2">
                <span class="w-2 h-2 rounded-full bg-blue-500"></span>
                <h3 class="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                  七、構成要件該當性推定違法性原則（教材第 1-5 頁 原文圖解）
                </h3>
              </div>

              <!-- 原文圖解還原面板 (高飽和色彩顯眼版) -->
              <div class="p-6 sm:p-8 rounded-3xl border-2 border-blue-500 dark:border-blue-400 bg-gradient-to-b from-blue-50/50 via-white to-indigo-50/40 dark:from-[#0d172a] dark:via-[#101623] dark:to-[#0a1120] shadow-xl space-y-6">
                <div class="flex items-center justify-between pb-3 border-b-2 border-blue-200/80 dark:border-blue-900/60">
                  <div class="flex items-center gap-2">
                    <span class="text-lg">⚖️</span>
                    <span class="font-black text-sm sm:text-base text-blue-700 dark:text-blue-300 tracking-wide">構成要件該當性推定違法性原則架構圖</span>
                  </div>
                  <span class="text-xs font-mono px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/60 text-blue-700 dark:text-blue-300 font-bold border border-blue-300 dark:border-blue-700 shadow-xs">教材第 1-5 頁</span>
                </div>

                <div class="max-w-2xl mx-auto flex flex-col items-center gap-6 py-2">
                  
                  <!-- 頂部起點：不法 -->
                  <div class="flex items-center gap-3 sm:gap-4 w-full">
                    <div class="px-6 py-2.5 rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white font-black text-sm sm:text-base shadow-lg shadow-blue-500/30 shrink-0 ring-4 ring-blue-400/25 tracking-wide">
                      不法
                    </div>
                    <div class="h-1.5 flex-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 rounded-full relative">
                      <div class="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 border-t-3 border-r-3 border-purple-500 rotate-45"></div>
                    </div>
                    <div class="px-3 py-1.5 rounded-xl bg-purple-100 dark:bg-purple-950/80 text-purple-800 dark:text-purple-300 font-black text-xs border border-purple-300 dark:border-purple-700 shrink-0 shadow-xs">
                      形式與實質雙構面
                    </div>
                  </div>

                  <!-- 形式不法 vs 實質不法 雙軌矩陣 (高飽和色彩顯眼版) -->
                  <div class="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
                    
                    <!-- 軌道 1：形式不法 (天空藍 / 蔚藍主題) -->
                    <div class="p-5 rounded-2xl border-2 border-sky-400 dark:border-sky-500 bg-gradient-to-br from-sky-50 via-white to-blue-50/60 dark:from-sky-950/40 dark:via-[#101827] dark:to-sky-950/20 shadow-md space-y-3">
                      <div class="flex items-center justify-between">
                        <span class="text-xs font-black text-sky-800 dark:text-sky-300 uppercase tracking-wider">不法層次</span>
                        <span class="text-xs px-3 py-1 rounded-xl bg-sky-600 text-white font-black shadow-sm shadow-sky-600/30">形式不法</span>
                      </div>
                      <div class="text-xs sm:text-sm font-bold text-slate-700 dark:text-slate-200 flex items-center gap-1.5">
                        <span>📐</span>
                        <span>典型法益侵害（外在吻合罪名）</span>
                      </div>
                      <div class="pt-3 border-t-2 border-sky-200 dark:border-sky-800/80 flex items-center justify-between">
                        <span class="text-xs font-black text-sky-900 dark:text-sky-300">法律代稱</span>
                        <span class="text-base sm:text-lg font-black text-sky-600 dark:text-sky-300 tracking-wide drop-shadow-xs">構成要件該當性 (TB)</span>
                      </div>
                    </div>

                    <!-- 軌道 2：實質不法 (紫羅蘭 / 桃紫主題) -->
                    <div class="p-5 rounded-2xl border-2 border-fuchsia-400 dark:border-fuchsia-500 bg-gradient-to-br from-fuchsia-50 via-white to-purple-50/60 dark:from-fuchsia-950/40 dark:via-[#160f26] dark:to-purple-950/20 shadow-md space-y-3">
                      <div class="flex items-center justify-between">
                        <span class="text-xs font-black text-fuchsia-800 dark:text-fuchsia-300 uppercase tracking-wider">不法層次</span>
                        <span class="text-xs px-3 py-1 rounded-xl bg-fuchsia-600 text-white font-black shadow-sm shadow-fuchsia-600/30">實質不法</span>
                      </div>
                      <div class="text-xs sm:text-sm font-bold text-slate-700 dark:text-slate-200 flex items-center gap-1.5">
                        <span>🚫</span>
                        <span>無正當理由（欠缺合法事由）</span>
                      </div>
                      <div class="pt-3 border-t-2 border-fuchsia-200 dark:border-fuchsia-800/80 flex items-center justify-between">
                        <span class="text-xs font-black text-fuchsia-900 dark:text-fuchsia-300">法律代稱</span>
                        <span class="text-base sm:text-lg font-black text-fuchsia-600 dark:text-fuchsia-300 tracking-wide drop-shadow-xs">違法性 (R)</span>
                      </div>
                    </div>

                  </div>

                  <!-- 推定與反證循環機制看板 (高對比鮮亮版) -->
                  <div class="w-full p-5 rounded-2xl border-2 border-indigo-300 dark:border-indigo-600 bg-gradient-to-r from-blue-50/80 via-indigo-50/60 to-purple-50/80 dark:from-blue-950/40 dark:via-indigo-950/30 dark:to-purple-950/40 shadow-md space-y-3.5">
                    <div class="flex items-center justify-between text-xs sm:text-sm gap-2">
                      <div class="flex items-center gap-2.5">
                        <span class="px-3 py-1 rounded-xl bg-blue-600 text-white font-black text-xs shadow-md shadow-blue-600/30 tracking-wider shrink-0">推定</span>
                        <span class="font-black text-slate-800 dark:text-slate-100">構成要件該當 ➔ 直接推定具備違法性</span>
                      </div>
                      <span class="px-2.5 py-1 rounded-lg bg-blue-600 text-white font-black text-[11px] shrink-0 shadow-xs">訴訟效率</span>
                    </div>
                    <div class="flex items-center justify-between text-xs sm:text-sm pt-3 border-t-2 border-indigo-200/80 dark:border-indigo-800/80 gap-2">
                      <div class="flex items-center gap-2.5">
                        <span class="px-3 py-1 rounded-xl bg-rose-600 text-white font-black text-xs shadow-md shadow-rose-600/30 tracking-wider shrink-0">反證</span>
                        <span class="font-black text-slate-800 dark:text-slate-100">主張阻卻違法事由 ➔ 推翻推定</span>
                      </div>
                      <span class="px-2.5 py-1 rounded-lg bg-rose-600 text-white font-black text-[11px] shrink-0 shadow-xs">防範誤判</span>
                    </div>
                  </div>

                  <!-- 核心原則總結語錄 -->
                  <div class="w-full p-4 rounded-xl bg-amber-50 dark:bg-amber-950/60 border-2 border-amber-300 dark:border-amber-700/80 text-xs sm:text-sm text-amber-950 dark:text-amber-200 text-center leading-relaxed font-semibold shadow-xs">
                    前述的推定模式是<strong>「構成要件該當推定違法性」原則</strong>，而推翻違法推定的理由稱<strong>「阻卻違法事由」</strong>。
                  </div>

                </div>

                <!-- 白話文秒懂專區 (依先前慣例貼心展開) -->
                <div class="p-5 sm:p-6 rounded-2xl border-2 border-amber-400 dark:border-amber-500 bg-gradient-to-br from-amber-50/90 via-orange-50/40 to-yellow-50/60 dark:from-[#241a0d] dark:via-[#1a150e] dark:to-[#17130c] shadow-lg space-y-4">
                  <div class="flex items-center justify-between border-b-2 border-amber-300/80 dark:border-amber-700/60 pb-3">
                    <div class="flex items-center gap-2">
                      <span class="text-xl">💡</span>
                      <span class="font-black text-sm sm:text-base text-amber-950 dark:text-amber-200">
                        白話文超展開：打人巴掌比喻與推定原理
                      </span>
                    </div>
                    <span class="text-xs px-2.5 py-1 rounded-full bg-amber-200/80 dark:bg-amber-800 text-amber-900 dark:text-amber-200 font-black">
                      生活化秒懂拆解
                    </span>
                  </div>

                  <!-- 4 大白話解析卡片 (2欄排列) -->
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-3.5 text-xs sm:text-sm">
                    
                    <!-- 重點一：形式不法 -->
                    <div class="p-4 rounded-xl bg-white/95 dark:bg-slate-900/85 border-2 border-sky-300 dark:border-sky-700 space-y-2 shadow-xs">
                      <div class="font-black text-sky-900 dark:text-sky-300 flex items-center gap-1.5 text-sm">
                        <span class="w-5 h-5 rounded-md bg-sky-600 text-white flex items-center justify-center font-bold text-xs">1</span>
                        <span>形式不法：法條的「外在拍立得」</span>
                      </div>
                      <p class="text-slate-700 dark:text-slate-300 leading-relaxed">
                        只要你的動作吻合刑法分則寫的罪名（例如刑法第 277 條「傷害人之身體」），就像拿相機拍一張快照，<strong class="text-sky-800 dark:text-sky-300 font-bold">外觀完全對得上號</strong>，這就叫「構成要件該當」，也就是抓到了形式上的壞事！
                      </p>
                    </div>

                    <!-- 重點二：實質不法 -->
                    <div class="p-4 rounded-xl bg-white/95 dark:bg-slate-900/85 border-2 border-fuchsia-300 dark:border-fuchsia-700 space-y-2 shadow-xs">
                      <div class="font-black text-fuchsia-900 dark:text-fuchsia-300 flex items-center gap-1.5 text-sm">
                        <span class="w-5 h-5 rounded-md bg-fuchsia-600 text-white flex items-center justify-center font-bold text-xs">2</span>
                        <span>實質不法：背後「毫無正當理由」</span>
                      </div>
                      <p class="text-slate-700 dark:text-slate-300 leading-relaxed">
                        光外表吻合還不夠！重點是<strong class="text-fuchsia-800 dark:text-fuchsia-300 font-bold">「你有沒有正當理由？」</strong>如果你純粹是看人不爽動手、毫無任何正當藉口，實質上完全沒有任何價值能被原諒，這就是「實質不法（違法性成立）」。
                      </p>
                    </div>

                    <!-- 重點三：為什麼推定 -->
                    <div class="p-4 rounded-xl bg-white/95 dark:bg-slate-900/85 border-2 border-emerald-300 dark:border-emerald-700 space-y-2 shadow-xs">
                      <div class="font-black text-emerald-900 dark:text-emerald-300 flex items-center gap-1.5 text-sm">
                        <span class="w-5 h-5 rounded-md bg-emerald-600 text-white flex items-center justify-center font-bold text-xs">3</span>
                        <span>為什麼該當就推定違法？（訴訟效率）</span>
                      </div>
                      <p class="text-slate-700 dark:text-slate-300 leading-relaxed">
                        生活常理告訴我們：大白天走在路上，誰會平白無故給人一巴掌？所以只要你動手打了人，法官不必慢慢猜，而是<strong class="text-emerald-800 dark:text-emerald-300 font-bold">直接推定你無理（推定具備違法性）</strong>，訴訟才有效率！
                      </p>
                    </div>

                    <!-- 重點四：反證推翻 -->
                    <div class="p-4 rounded-xl bg-white/95 dark:bg-slate-900/85 border-2 border-rose-300 dark:border-rose-700 space-y-2 shadow-xs">
                      <div class="font-black text-rose-900 dark:text-rose-300 flex items-center gap-1.5 text-sm">
                        <span class="w-5 h-5 rounded-md bg-rose-600 text-white flex items-center justify-center font-bold text-xs">4</span>
                        <span>萬一有防衛呢？阻卻違法推翻！（防範誤判）</span>
                      </div>
                      <p class="text-slate-700 dark:text-slate-300 leading-relaxed">
                        若事實上是對方向你揮刀，你為保命才反擊呢？這時只要亮出<strong class="text-rose-800 dark:text-rose-300 font-bold">「正當防衛（刑法第 23 條）」</strong>免死金牌，違法性推定就會<span class="underline font-bold text-rose-700 dark:text-rose-300">立刻被推翻</span>，不法當場消滅！
                      </p>
                    </div>

                  </div>

                  <!-- 核心口訣金色橫條 -->
                  <div class="p-3.5 rounded-xl bg-gradient-to-r from-amber-600 via-orange-600 to-amber-700 text-white flex items-center justify-between gap-3 flex-wrap shadow-md">
                    <div class="flex items-center gap-2.5">
                      <span class="text-lg">📢</span>
                      <span class="font-black text-xs sm:text-sm">
                        核心精華口訣：先看外觀踩紅線（TB）➔ 常理推定無理（R）➔ 舉出正當防衛即刻推翻！
                      </span>
                    </div>
                    <span class="text-[11px] font-bold bg-white/20 backdrop-blur-xs px-2.5 py-0.5 rounded-full text-white">
                      刑法審查基石
                    </span>
                  </div>

                </div>

              </div>
            </section>

            <!-- SECTION 8: 阻卻違法事由法定例示 (教材第 1-5 ～ 1-6 頁 案例 1-7 ～ 1-11) -->
            <section id="sec-justification-cases" class="scroll-mt-28 space-y-4">
              <div class="flex items-center gap-2">
                <span class="w-2 h-2 rounded-full bg-emerald-500"></span>
                <h3 class="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                  八、阻卻違法事由之反證推翻與法定例示（案例 1-7 ～ 1-11）
                </h3>
              </div>

              <!-- 核心金句對比 Callout -->
              <div class="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-emerald-500/10 via-teal-500/10 to-blue-500/10 border border-emerald-500/30 space-y-2">
                <div class="text-xs font-bold text-emerald-700 dark:text-emerald-400 flex items-center gap-1.5">
                  <span>💡 核心金句與思維演進對比：</span>
                </div>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div class="p-2.5 rounded-xl bg-white/80 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
                    <span class="text-slate-400 font-semibold block text-[11px]">阻卻罪責（評價行為人）：</span>
                    <strong class="text-blue-600 dark:text-blue-400 text-sm">「因而雖做壞事，但卻不是壞人。」</strong>
                  </div>
                  <div class="p-2.5 rounded-xl bg-white/80 dark:bg-slate-900/60 border border-emerald-500/30">
                    <span class="text-emerald-600 dark:text-emerald-400 font-semibold block text-[11px]">阻卻違法（評價行為本身）：</span>
                    <strong class="text-emerald-600 dark:text-emerald-400 text-sm">「縱使造成法益侵害，但因有正當理由而並非壞事。」</strong>
                  </div>
                </div>
              </div>

              <div class="box-legal-emerald p-6 sm:p-7 rounded-2xl space-y-4 text-sm sm:text-base leading-relaxed text-slate-700 dark:text-slate-200">
                <div class="flex items-center justify-between border-b border-emerald-200/60 dark:border-emerald-800/40 pb-3">
                  <div class="flex items-center gap-2">
                    <span class="text-base sm:text-lg">🛡️</span>
                    <span class="font-extrabold text-sm sm:text-base text-emerald-900 dark:text-emerald-200 tracking-wide">阻卻違法事由之反證推翻</span>
                  </div>
                  <span class="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-emerald-100/80 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-300 font-bold border border-emerald-200 dark:border-emerald-700/50">
                    教材第 1-5 頁
                  </span>
                </div>
                <p>
                  當行為因該當構成要件而被推定為無正當理由後，法律將賦予行為人<strong class="underline decoration-emerald-500 decoration-2 underline-offset-4">反證推翻的機會</strong>，亦即可以主張一些有利於自己的理由，證明法益侵害是正常的。
                </p>
                <p class="text-xs text-slate-500 dark:text-slate-400">
                  這些反證推翻的理由，立法者在刑法第 21 條至第 24 條當中加以例示（見下方案例 1-7 至 1-11）：
                </p>
              </div>

              <!-- ==================== 案例導航與研讀控制台：第八節 法定阻卻違法 (案例 1-7 ～ 1-11) ==================== -->
              <div class="nav-console-emerald p-4 sm:p-5 rounded-2xl space-y-3">
                <div class="flex items-center justify-between gap-2 border-b border-emerald-300/80 dark:border-emerald-700/60 pb-2.5">
                  <div class="flex items-center gap-2">
                    <span class="inline-flex items-center justify-center w-7 h-7 rounded-xl bg-emerald-600 text-white shadow-xs text-xs font-bold">⚖️</span>
                    <span class="font-black text-sm sm:text-base text-emerald-950 dark:text-emerald-100 tracking-wide">法定阻卻違法案例導航</span>
                    <span class="px-2.5 py-0.5 rounded-full text-xs font-black font-mono bg-emerald-700 text-white shadow-xs">5 例</span>
                  </div>
                  <div class="flex items-center gap-1.5 shrink-0">
                    <button type="button" onclick="toggleAllCases(false)" class="px-2.5 py-1 rounded-lg bg-white dark:bg-slate-800 text-emerald-800 dark:text-emerald-200 hover:bg-emerald-50 dark:hover:bg-slate-700 font-bold border border-emerald-300 dark:border-emerald-700 text-xs shadow-2xs hover:shadow-xs transition-all flex items-center gap-1 cursor-pointer" title="收合為精簡看板">
                      <span>⊞</span><span>精簡看板</span>
                    </button>
                    <button type="button" onclick="toggleAllCases(true)" class="px-2.5 py-1 rounded-lg bg-white dark:bg-slate-800 text-emerald-800 dark:text-emerald-200 hover:bg-emerald-50 dark:hover:bg-slate-700 font-bold border border-emerald-300 dark:border-emerald-700 text-xs shadow-2xs hover:shadow-xs transition-all flex items-center gap-1 cursor-pointer" title="展開所有案件事實與詳解">
                      <span>⊟</span><span>展開詳解</span>
                    </button>
                  </div>
                </div>

                <div class="flex flex-wrap items-center gap-2 pt-0.5" id="pillsLegal">
                  <span class="text-xs font-black text-emerald-950 dark:text-emerald-200 flex items-center gap-1 mr-1">
                    <span>🎯 點選聚焦：</span>
                  </span>
                  <button type="button" onclick="filterJustCase('legal', 'all')" class="just-pill-btn active-pill px-3 py-1.5 rounded-xl text-xs font-bold">全部 (5例)</button>
                  <button type="button" onclick="filterJustCase('legal', '1-7')" class="just-pill-btn px-3 py-1.5 rounded-xl text-xs font-bold">1-7 依法令 (墮胎)</button>
                  <button type="button" onclick="filterJustCase('legal', '1-8')" class="just-pill-btn px-3 py-1.5 rounded-xl text-xs font-bold">1-8 依命令 (開槍)</button>
                  <button type="button" onclick="filterJustCase('legal', '1-9')" class="just-pill-btn px-3 py-1.5 rounded-xl text-xs font-bold">1-9 業務正當 (結紮)</button>
                  <button type="button" onclick="filterJustCase('legal', '1-10')" class="just-pill-btn px-3 py-1.5 rounded-xl text-xs font-bold">1-10 正當防衛</button>
                  <button type="button" onclick="filterJustCase('legal', '1-11')" class="just-pill-btn px-3 py-1.5 rounded-xl text-xs font-bold">1-11 緊急避難</button>
                </div>
              </div>

              <!-- 案例卡片矩陣 (案例 1-7 至 1-11) 面板容器 (高彩度主題顯眼版) -->
              <div id="panelJustLegal" class="space-y-5">
                <div class="grid grid-cols-1 gap-5">
                
                <!-- 案例 1-7 卡片：依法令之行為 (亮蔚藍/天空藍主題) -->
                <div id="case-card-1-7" data-case="1-7" class="p-5 sm:p-6 rounded-2xl border-2 border-sky-400 dark:border-sky-500 bg-gradient-to-br from-sky-50/80 via-white to-blue-50/40 dark:from-[#0c1a2e] dark:via-[#0e1726] dark:to-[#070f1e] shadow-lg hover:shadow-xl transition-all space-y-4">
                  <div class="flex items-center justify-between flex-wrap gap-2">
                    <span class="text-xs font-black px-3 py-1.5 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 text-white shadow-sm shadow-sky-500/30 font-mono tracking-wide">
                      ⚖️ 案例 1-7
                    </span>
                    <span class="text-xs px-3 py-1 rounded-xl bg-sky-600 text-white font-black shadow-sm shadow-sky-600/30">
                      阻卻違法抗辯：依法令之行為 (§ 21 Ⅰ)
                    </span>
                  </div>
                  
                  <!-- 被告心聲對話框 -->
                  <div class="p-4 rounded-xl bg-sky-50/90 dark:bg-sky-950/60 border-2 border-sky-300 dark:border-sky-800/80 text-xs sm:text-sm text-slate-800 dark:text-slate-100 flex items-start gap-3 shadow-inner">
                    <span class="text-base shrink-0">🗣️</span>
                    <div>
                      <strong class="text-sky-900 dark:text-sky-300 font-black">被告心聲抗辯：</strong>
                      <span class="italic">「我的確有為他人墮胎，但卻是在符合優生保健法 § 9 的情況下。」</span>
                    </div>
                  </div>

                  <div class="text-xs sm:text-sm text-slate-700 dark:text-slate-300 space-y-2">
                    <div class="font-black text-sky-950 dark:text-sky-200 flex items-center gap-1.5">
                      <span>◀ 問題導引與體系定位 ▶</span>
                    </div>
                    <p class="leading-relaxed">
                      主張「依法令之行為」的抗辯（§ 21 Ⅰ）。由於這是法規所允許的墮胎行為，縱使客觀上的確造成法益侵害（胎兒生命），<strong class="text-sky-800 dark:text-sky-300 font-bold underline decoration-sky-400 decoration-2 underline-offset-4">但卻因為有正當理由而並非壞事</strong>。
                    </p>
                  </div>

                  <!-- 白話文秒懂專區 -->
                  <div class="p-4 rounded-xl bg-white/95 dark:bg-slate-900/85 border-2 border-sky-300 dark:border-sky-700/80 space-y-2.5 shadow-xs">
                    <div class="font-black text-sky-900 dark:text-sky-300 flex items-center gap-2 text-xs sm:text-sm">
                      <span class="text-base">💡</span>
                      <span>白話秒懂拆解：法規自己准許的事，刑法絕不當雙面人！</span>
                    </div>
                    <p class="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                      雖然人工流產中止了胎兒生命，但《優生保健法》在特定醫療與優生事由下，白紙黑字允許合格醫師施行。既然國家法律本身就允許這件事發生，刑法就不能「人格分裂」又跑出來說你有罪！只要合乎法令程序，行為就具備完全的正當理由，違法性當場被推翻！
                    </p>
                    <div class="pt-1 text-[11px] font-bold text-sky-700 dark:text-sky-300">
                      常理口訣：法律明文准許做，刑法絕不當雙面人！
                    </div>
                  </div>

                  <!-- 2026 現行法規查核與資料來源 -->
                  <div class="pt-3 border-t-2 border-sky-200/80 dark:border-sky-900/60 space-y-1.5 text-xs">
                    <div class="flex items-center justify-between flex-wrap gap-2">
                      <div class="flex items-center gap-1.5 font-bold text-slate-800 dark:text-slate-200">
                        <span class="text-sky-600 dark:text-sky-400">📌</span>
                        <span>2026 現行法規狀態：</span>
                        <span class="px-2.5 py-0.5 rounded-full text-[11px] bg-sky-100 dark:bg-sky-950/80 text-sky-800 dark:text-sky-300 font-bold border border-sky-300 dark:border-sky-700">條文維持現行法・實務與草案接軌</span>
                      </div>
                      <div class="flex items-center gap-2 font-mono text-[11px]">
                        <a href="https://law.moj.gov.tw/LawClass/LawSingle.aspx?pcode=C0000001&flno=21" target="_blank" rel="noopener noreferrer" class="text-sky-700 dark:text-sky-300 hover:underline font-bold">§ 21 條文 ↗</a>
                        <span class="text-slate-300 dark:text-slate-700">|</span>
                        <a href="https://law.moj.gov.tw/LawClass/LawSingle.aspx?pcode=L0070001&flno=9" target="_blank" rel="noopener noreferrer" class="text-sky-700 dark:text-sky-300 hover:underline font-bold">優生保健法 § 9 ↗</a>
                      </div>
                    </div>
                    <p class="text-slate-600 dark:text-slate-400 leading-relaxed text-[11.5px] bg-sky-50/50 dark:bg-slate-900/40 p-2.5 rounded-xl border border-sky-200/60 dark:border-sky-800/60">
                      <strong class="text-slate-800 dark:text-slate-200">條文內容與法理：</strong>刑法 § 21 第 1 項「依法令之行為，不罰。」醫師符合優生保健法所定之醫療與優生事由施行人工流產，合於法令阻卻違法；近年主管機關持續研擬《生育保健法》修正草案，擬廢除人工流產需配偶同意權規定，貫徹女性身體自主權，惟不論條文修正與否，合法醫療處遇皆屬「依法令之行為」而不罰。
                    </p>
                  </div>
                </div>

                <!-- 案例 1-8 卡片：依命令之行為 (亮紫羅蘭/靛藍主題) -->
                <div id="case-card-1-8" data-case="1-8" class="p-5 sm:p-6 rounded-2xl border-2 border-indigo-400 dark:border-indigo-500 bg-gradient-to-br from-indigo-50/80 via-white to-purple-50/40 dark:from-[#13112c] dark:via-[#0e1222] dark:to-[#090b17] shadow-lg hover:shadow-xl transition-all space-y-4">
                  <div class="flex items-center justify-between flex-wrap gap-2">
                    <span class="text-xs font-black px-3 py-1.5 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-sm shadow-indigo-500/30 font-mono tracking-wide">
                      ⚖️ 案例 1-8
                    </span>
                    <span class="text-xs px-3 py-1 rounded-xl bg-indigo-600 text-white font-black shadow-sm shadow-indigo-600/30">
                      阻卻違法抗辯：依命令之行為 (§ 21 Ⅱ)
                    </span>
                  </div>
                  
                  <!-- 被告心聲對話框 -->
                  <div class="p-4 rounded-xl bg-indigo-50/90 dark:bg-indigo-950/60 border-2 border-indigo-300 dark:border-indigo-800/80 text-xs sm:text-sm text-slate-800 dark:text-slate-100 flex items-start gap-3 shadow-inner">
                    <span class="text-base shrink-0">🗣️</span>
                    <div>
                      <strong class="text-indigo-900 dark:text-indigo-300 font-black">被告心聲抗辯：</strong>
                      <span class="italic">「我有拿別人的東西，但卻是因為上級的命令我才這麼做。」</span>
                    </div>
                  </div>

                  <div class="text-xs sm:text-sm text-slate-700 dark:text-slate-300 space-y-2">
                    <div class="font-black text-indigo-950 dark:text-indigo-200 flex items-center gap-1.5">
                      <span>◀ 問題導引與體系定位 ▶</span>
                    </div>
                    <p class="leading-relaxed">
                      主張「依命令之行為」的抗辯（§ 21 Ⅱ）。由於有合法的上級公務員命令存在，縱使客觀上的確造成法益侵害（所有權），<strong class="text-indigo-800 dark:text-indigo-300 font-bold underline decoration-indigo-400 decoration-2 underline-offset-4">但卻因為有正當理由而並非壞事</strong>。
                    </p>
                  </div>

                  <!-- 白話文秒懂專區 -->
                  <div class="p-4 rounded-xl bg-white/95 dark:bg-slate-900/85 border-2 border-indigo-300 dark:border-indigo-700/80 space-y-2.5 shadow-xs">
                    <div class="font-black text-indigo-900 dark:text-indigo-300 flex items-center gap-2 text-xs sm:text-sm">
                      <span class="text-base">💡</span>
                      <span>白話秒懂拆解：聽合法命令免責，但明知違法不可盲從！</span>
                    </div>
                    <p class="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                      警察奉分局長的合法公務命令扣押涉案物資，外表上把別人的東西帶走（看似侵害所有權），但基層只是執行公權力的手腳，有上級合法命令當靠山，自然免罰！但千萬注意：若長官私自叫你去「偷燒證物、痛打犯人」，這種明擺著違法的黑令，你若還傻傻照做就必須跟長官一起坐牢（相對服從說）！
                    </p>
                    <div class="pt-1 text-[11px] font-bold text-indigo-700 dark:text-indigo-300">
                      常理口訣：合法命令服從免責；明知違法盲從必罰！
                    </div>
                  </div>

                  <!-- 2026 現行法規查核與資料來源 -->
                  <div class="pt-3 border-t-2 border-indigo-200/80 dark:border-indigo-900/60 space-y-1.5 text-xs">
                    <div class="flex items-center justify-between flex-wrap gap-2">
                      <div class="flex items-center gap-1.5 font-bold text-slate-800 dark:text-slate-200">
                        <span class="text-indigo-600 dark:text-indigo-400">📌</span>
                        <span>2026 現行法規狀態：</span>
                        <span class="px-2.5 py-0.5 rounded-full text-[11px] bg-indigo-100 dark:bg-indigo-950/80 text-indigo-800 dark:text-indigo-300 font-bold border border-indigo-300 dark:border-indigo-700">條文維持現行法・採相對服從說</span>
                      </div>
                      <div class="flex items-center gap-2 font-mono text-[11px]">
                        <a href="https://law.moj.gov.tw/LawClass/LawSingle.aspx?pcode=C0000001&flno=21" target="_blank" rel="noopener noreferrer" class="text-indigo-700 dark:text-indigo-300 hover:underline font-bold">§ 21 條文 ↗</a>
                      </div>
                    </div>
                    <p class="text-slate-600 dark:text-slate-400 leading-relaxed text-[11.5px] bg-indigo-50/50 dark:bg-slate-900/40 p-2.5 rounded-xl border border-indigo-200/60 dark:border-indigo-800/60">
                      <strong class="text-slate-800 dark:text-slate-200">條文內容與審查要件：</strong>刑法 § 21 第 2 項「依所屬上級公務員命令之職務上行為，不罰。但明知命令違法者，不在此限。」要件包含：發令者與行為人具備職務上下監督隸屬關係、命令屬職權範圍且具法定形式；但書採「相對服從說」，若公務員明知命令違法（如長官命令銷毀特定證據）仍盲從執行者，不得免責，以杜絕公務濫權。
                    </p>
                  </div>
                </div>

                <!-- 案例 1-9 卡片：業務上正當行為 (翠綠/碧青主題) -->
                <div id="case-card-1-9" data-case="1-9" class="p-5 sm:p-6 rounded-2xl border-2 border-teal-400 dark:border-teal-500 bg-gradient-to-br from-teal-50/80 via-white to-emerald-50/40 dark:from-[#081f1d] dark:via-[#0c181f] dark:to-[#061214] shadow-lg hover:shadow-xl transition-all space-y-4">
                  <div class="flex items-center justify-between flex-wrap gap-2">
                    <span class="text-xs font-black px-3 py-1.5 rounded-xl bg-gradient-to-r from-teal-500 to-emerald-600 text-white shadow-sm shadow-teal-500/30 font-mono tracking-wide">
                      ⚖️ 案例 1-9
                    </span>
                    <span class="text-xs px-3 py-1 rounded-xl bg-teal-600 text-white font-black shadow-sm shadow-teal-600/30">
                      阻卻違法抗辯：業務上正當行為 (§ 22)
                    </span>
                  </div>
                  
                  <!-- 被告心聲對話框 -->
                  <div class="p-4 rounded-xl bg-teal-50/90 dark:bg-teal-950/60 border-2 border-teal-300 dark:border-teal-800/80 text-xs sm:text-sm text-slate-800 dark:text-slate-100 flex items-start gap-3 shadow-inner">
                    <span class="text-base shrink-0">🗣️</span>
                    <div>
                      <strong class="text-teal-900 dark:text-teal-300 font-black">被告心聲抗辯：</strong>
                      <span class="italic">「我幫人作結紮手術縱使該當重傷罪之構成要件，但我可是醫生耶！」</span>
                    </div>
                  </div>

                  <div class="text-xs sm:text-sm text-slate-700 dark:text-slate-300 space-y-2">
                    <div class="font-black text-teal-950 dark:text-teal-200 flex items-center gap-1.5">
                      <span>◀ 問題導引與體系定位 ▶</span>
                    </div>
                    <p class="leading-relaxed">
                      主張「業務上正當行為」的抗辯（§ 22）。正當的業務執行乃社會分工所必需，縱使客觀上的確造成法益侵害（重大身體機能），<strong class="text-teal-800 dark:text-teal-300 font-bold underline decoration-teal-400 decoration-2 underline-offset-4">但卻因為有正當理由而並非壞事</strong>。
                    </p>
                  </div>

                  <!-- 白話文秒懂專區 -->
                  <div class="p-4 rounded-xl bg-white/95 dark:bg-slate-900/85 border-2 border-teal-300 dark:border-teal-700/80 space-y-2.5 shadow-xs">
                    <div class="font-black text-teal-900 dark:text-teal-300 flex items-center gap-2 text-xs sm:text-sm">
                      <span class="text-base">💡</span>
                      <span>白話秒懂拆解：常人動刀叫重傷，名醫動刀救生命！</span>
                    </div>
                    <p class="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                      如果路人無緣無故拿手術刀切開你的肚子或剪斷輸精管，那是十惡不赦的重傷害罪！但如果換成合格外科醫師在手術室執行合法結紮或切除腫瘤，這是社會維持健康運作不可或缺的正當醫療業務。只要依照醫療常規並獲得病患同意，這就是正當業務行為，完全不具違法性！
                    </p>
                    <div class="pt-1 text-[11px] font-bold text-teal-700 dark:text-teal-300">
                      常理口訣：常人動刀是重傷害，醫師動刀救人性命！
                    </div>
                  </div>

                  <!-- 2026 現行法規查核與資料來源 -->
                  <div class="pt-3 border-t-2 border-teal-200/80 dark:border-teal-900/60 space-y-1.5 text-xs">
                    <div class="flex items-center justify-between flex-wrap gap-2">
                      <div class="flex items-center gap-1.5 font-bold text-slate-800 dark:text-slate-200">
                        <span class="text-teal-600 dark:text-teal-400">📌</span>
                        <span>2026 現行法規狀態：</span>
                        <span class="px-2.5 py-0.5 rounded-full text-[11px] bg-teal-100 dark:bg-teal-950/80 text-teal-800 dark:text-teal-300 font-bold border border-teal-300 dark:border-teal-700">條文維持現行法・醫療常規程序齊備</span>
                      </div>
                      <div class="flex items-center gap-2 font-mono text-[11px]">
                        <a href="https://law.moj.gov.tw/LawClass/LawSingle.aspx?pcode=C0000001&flno=22" target="_blank" rel="noopener noreferrer" class="text-teal-700 dark:text-teal-300 hover:underline font-bold">§ 22 條文 ↗</a>
                        <span class="text-slate-300 dark:text-slate-700">|</span>
                        <a href="https://law.moj.gov.tw/LawClass/LawSingle.aspx?pcode=L0020021&flno=63" target="_blank" rel="noopener noreferrer" class="text-teal-700 dark:text-teal-300 hover:underline font-bold">醫療法 § 63 ↗</a>
                      </div>
                    </div>
                    <p class="text-slate-600 dark:text-slate-400 leading-relaxed text-[11.5px] bg-teal-50/50 dark:bg-slate-900/40 p-2.5 rounded-xl border border-teal-200/60 dark:border-teal-800/60">
                      <strong class="text-slate-800 dark:text-slate-200">條文內容與醫療常規：</strong>刑法 § 22「業務上之正當行為，不罰。」醫師執行合法外科手術、結紮等侵入性醫療處置，客觀上侵害身體完整性，但只要出於醫療目的、合於醫療水準常規，並依醫療法第 63、64 條履行說明與知情同意程序，即屬業務上正當行為阻卻違法。
                    </p>
                  </div>
                </div>

                <!-- 案例 1-10 卡片：正當防衛 (烈焰琥珀/橙紅主題) -->
                <div id="case-card-1-10" data-case="1-10" class="p-5 sm:p-6 rounded-2xl border-2 border-amber-400 dark:border-orange-500 bg-gradient-to-br from-amber-50/80 via-white to-orange-50/40 dark:from-[#261708] dark:via-[#1a1410] dark:to-[#120a04] shadow-lg hover:shadow-xl transition-all space-y-4">
                  <div class="flex items-center justify-between flex-wrap gap-2">
                    <span class="text-xs font-black px-3 py-1.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 text-white shadow-sm shadow-amber-500/30 font-mono tracking-wide">
                      ⚖️ 案例 1-10
                    </span>
                    <span class="text-xs px-3 py-1 rounded-xl bg-orange-600 text-white font-black shadow-sm shadow-orange-600/30">
                      阻卻違法抗辯：正當防衛 (§ 23)
                    </span>
                  </div>
                  
                  <!-- 被告心聲對話框 -->
                  <div class="p-4 rounded-xl bg-amber-50/90 dark:bg-amber-950/60 border-2 border-amber-300 dark:border-amber-800/80 text-xs sm:text-sm text-slate-800 dark:text-slate-100 flex items-start gap-3 shadow-inner">
                    <span class="text-base shrink-0">🗣️</span>
                    <div>
                      <strong class="text-amber-900 dark:text-amber-300 font-black">被告心聲抗辯：</strong>
                      <span class="italic">「我莫名其妙被人進攻，是為了保護自己才將對方打傷。」</span>
                    </div>
                  </div>

                  <div class="text-xs sm:text-sm text-slate-700 dark:text-slate-300 space-y-2">
                    <div class="font-black text-amber-950 dark:text-amber-200 flex items-center gap-1.5">
                      <span>◀ 問題導引與體系定位 ▶</span>
                    </div>
                    <p class="leading-relaxed">
                      主張「正當防衛」的抗辯（§ 23）。本於「自我保護」以及「正者毋須向不正者低頭」的法理共識，面臨現在不法侵害時應有反擊權利，縱使客觀上的確造成法益侵害（對方身體），<strong class="text-amber-800 dark:text-amber-300 font-bold underline decoration-amber-400 decoration-2 underline-offset-4">但卻因為有正當理由而並非壞事</strong>。
                    </p>
                  </div>

                  <!-- 白話文秒懂專區 -->
                  <div class="p-4 rounded-xl bg-white/95 dark:bg-slate-900/85 border-2 border-amber-300 dark:border-amber-700/80 space-y-2.5 shadow-xs">
                    <div class="font-black text-amber-900 dark:text-amber-300 flex items-center gap-2 text-xs sm:text-sm">
                      <span class="text-base">💡</span>
                      <span>白話秒懂拆解：正義不向邪惡低頭！好人反擊自保完全合法！</span>
                    </div>
                    <p class="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                      歹徒在大街上突然持刀向你猛刺（現在不法侵害），你為了保命抓起路邊雨傘或木棍反擊，把歹徒打到骨折流血。你雖然把人打傷了，但這是為了捍衛自己的生命，法律全力支持好人自衛！正義毋須向邪惡讓步，這就是最強力的阻卻違法事由。但記住：歹徒既然已經痛到棄刀倒地求饒，就不能再衝上去狂踹（防衛過當）！
                    </p>
                    <div class="pt-1 text-[11px] font-bold text-amber-700 dark:text-amber-300">
                      常理口訣：惡徒無端來侵害，奮力反擊衛自身；正義不向邪惡屈！
                    </div>
                  </div>

                  <!-- 2026 現行法規查核與資料來源 -->
                  <div class="pt-3 border-t-2 border-amber-200/80 dark:border-amber-900/60 space-y-1.5 text-xs">
                    <div class="flex items-center justify-between flex-wrap gap-2">
                      <div class="flex items-center gap-1.5 font-bold text-slate-800 dark:text-slate-200">
                        <span class="text-amber-600 dark:text-amber-400">📌</span>
                        <span>2026 現行法規狀態：</span>
                        <span class="px-2.5 py-0.5 rounded-full text-[11px] bg-amber-100 dark:bg-amber-950/80 text-amber-800 dark:text-amber-300 font-bold border border-amber-300 dark:border-amber-700">條文維持現行法・正不必向不正讓步</span>
                      </div>
                      <div class="flex items-center gap-2 font-mono text-[11px]">
                        <a href="https://law.moj.gov.tw/LawClass/LawSingle.aspx?pcode=C0000001&flno=23" target="_blank" rel="noopener noreferrer" class="text-amber-700 dark:text-amber-300 hover:underline font-bold">§ 23 條文 ↗</a>
                      </div>
                    </div>
                    <p class="text-slate-600 dark:text-slate-400 leading-relaxed text-[11.5px] bg-amber-50/50 dark:bg-slate-900/40 p-2.5 rounded-xl border border-amber-200/60 dark:border-amber-800/60">
                      <strong class="text-slate-800 dark:text-slate-200">條文內容與審查要件：</strong>刑法 § 23「對於現在不法之侵害，出自防衛自己或他人權利之行為，不罰。但防衛行為過當者，得減輕或免除其刑。」要件包含：(1) 面臨現在不法之侵害；(2) 主觀上出於防衛意思；(3) 防衛手段客觀上具有適當性與必要性（侵害最小且有效）。逾越程度者為防衛過當，轉為罪責層次之寬恕事由減免處罰。
                    </p>
                  </div>
                </div>

                <!-- 案例 1-11 卡片：緊急避難 (玫紅/茜紅主題) -->
                <div id="case-card-1-11" data-case="1-11" class="p-5 sm:p-6 rounded-2xl border-2 border-rose-400 dark:border-rose-500 bg-gradient-to-br from-rose-50/80 via-white to-red-50/40 dark:from-[#290c16] dark:via-[#1a0e14] dark:to-[#13070b] shadow-lg hover:shadow-xl transition-all space-y-4">
                  <div class="flex items-center justify-between flex-wrap gap-2">
                    <span class="text-xs font-black px-3 py-1.5 rounded-xl bg-gradient-to-r from-rose-500 to-red-600 text-white shadow-sm shadow-rose-500/30 font-mono tracking-wide">
                      ⚖️ 案例 1-11
                    </span>
                    <span class="text-xs px-3 py-1 rounded-xl bg-rose-600 text-white font-black shadow-sm shadow-rose-600/30">
                      阻卻違法抗辯：緊急避難 (§ 24)
                    </span>
                  </div>
                  
                  <!-- 被告心聲對話框 -->
                  <div class="p-4 rounded-xl bg-rose-50/90 dark:bg-rose-950/60 border-2 border-rose-300 dark:border-rose-800/80 text-xs sm:text-sm text-slate-800 dark:text-slate-100 flex items-start gap-3 shadow-inner">
                    <span class="text-base shrink-0">🗣️</span>
                    <div>
                      <strong class="text-rose-900 dark:text-rose-300 font-black">被告心聲抗辯：</strong>
                      <span class="italic">「我是因為被野狗追趕，在避無可避之下才會闖入民宅。」</span>
                    </div>
                  </div>

                  <div class="text-xs sm:text-sm text-slate-700 dark:text-slate-300 space-y-2">
                    <div class="font-black text-rose-950 dark:text-rose-200 flex items-center gap-1.5">
                      <span>◀ 問題導引與體系定位 ▶</span>
                    </div>
                    <p class="leading-relaxed">
                      主張「緊急避難」的抗辯（§ 24）。本於「社會連帶性原則」以及「利益衡量」的法理共識，面臨緊急危難時應有將危難轉嫁之權利，縱使客觀上的確造成法益侵害（他人居住隱私自由），<strong class="text-rose-800 dark:text-rose-300 font-bold underline decoration-rose-400 decoration-2 underline-offset-4">但卻因為有正當理由而並非壞事</strong>。
                    </p>
                  </div>

                  <!-- 白話文秒懂專區 -->
                  <div class="p-4 rounded-xl bg-white/95 dark:bg-slate-900/85 border-2 border-rose-300 dark:border-rose-700/80 space-y-2.5 shadow-xs">
                    <div class="font-black text-rose-900 dark:text-rose-300 flex items-center gap-2 text-xs sm:text-sm">
                      <span class="text-base">💡</span>
                      <span>白話秒懂拆解：大禍臨頭保命要緊！犧牲小法益保全大法益！</span>
                    </div>
                    <p class="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                      你走在巷弄裡突然被狂吠的比特犬瘋狂追咬（野獸天災危難），眼看要被撕咬重傷，剛好旁邊有民宅大門沒鎖，你情急之下衝進去關門保命。雖然未經許可闖入民宅構成侵入住宅罪，但你保護的是無價的「人命安全」，被犧牲的只是屋主短暫的「居住隱私」。兩害相權取其輕，這就是法律允許的緊急避難！
                    </p>
                    <div class="pt-1 text-[11px] font-bold text-rose-700 dark:text-rose-300">
                      常理口訣：大禍臨頭無處逃，損小保大求生存；緊急避難免處罰！
                    </div>
                  </div>

                  <!-- 2026 現行法規查核與資料來源 -->
                  <div class="pt-3 border-t-2 border-rose-200/80 dark:border-rose-900/60 space-y-1.5 text-xs">
                    <div class="flex items-center justify-between flex-wrap gap-2">
                      <div class="flex items-center gap-1.5 font-bold text-slate-800 dark:text-slate-200">
                        <span class="text-rose-600 dark:text-rose-400">📌</span>
                        <span>2026 現行法規狀態：</span>
                        <span class="px-2.5 py-0.5 rounded-full text-[11px] bg-rose-100 dark:bg-rose-950/80 text-rose-800 dark:text-rose-300 font-bold border border-rose-300 dark:border-rose-700">條文維持現行法・社會連帶轉嫁危難</span>
                      </div>
                      <div class="flex items-center gap-2 font-mono text-[11px]">
                        <a href="https://law.moj.gov.tw/LawClass/LawSingle.aspx?pcode=C0000001&flno=24" target="_blank" rel="noopener noreferrer" class="text-rose-700 dark:text-rose-300 hover:underline font-bold">§ 24 條文 ↗</a>
                      </div>
                    </div>
                    <p class="text-slate-600 dark:text-slate-400 leading-relaxed text-[11.5px] bg-rose-50/50 dark:bg-slate-900/40 p-2.5 rounded-xl border border-rose-200/60 dark:border-rose-800/60">
                      <strong class="text-slate-800 dark:text-slate-200">條文內容與轉嫁界限：</strong>刑法 § 24 第 1 項「因避免自己或他人生命、身體、自由、財產之緊急危難出自不得已之行為，不罰。但避難行為過當者，得減輕或免除其刑。」緊急避難係將危難轉嫁給無涉之第三人，要件更嚴謹：(1) 危難不限於人為（包含野獸襲擊、天災）；(2) 不得已性（最後唯一手段）；(3) 利益衡量：所保全之法益必須顯著優於所犧牲之法益。
                    </p>
                  </div>
                </div>

              </div>
                <!-- 底部導航輔助切換列 (Section 8) -->
                <div class="p-4 rounded-2xl bg-emerald-50/70 dark:bg-emerald-950/40 border border-emerald-200/80 dark:border-emerald-800/50 flex flex-wrap items-center justify-between gap-3 text-xs">
                  <a href="#sec-extra-unlawful" onclick="scrollToSection(event, 'sec-extra-unlawful')" class="inline-flex items-center gap-1.5 font-bold text-emerald-700 dark:text-emerald-400 hover:underline">
                    <span>順讀下一節：九、超法定阻卻違法事由與利益衡量原則（案例 1-12 ～ 1-15）↓</span>
                  </a>
                  <a href="#sec-justification-system" onclick="scrollToSection(event, 'sec-justification-system')" class="inline-flex items-center gap-1.5 font-bold text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400">
                    前往第十節 阻卻違法體系展開 →
                  </a>
                </div>
              </div> <!-- closes #panelJustLegal -->
            </section>

            <!-- SECTION 9: 超法定阻卻違法事由與利益衡量原則 (教材第 1-6 ～ 1-7 頁 案例 1-12 ～ 1-15) -->
            <section id="sec-extra-unlawful" class="scroll-mt-28 space-y-4">
              <div class="flex items-center gap-2">
                <span class="w-2 h-2 rounded-full bg-indigo-500"></span>
                <h3 class="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                  九、超法定阻卻違法事由與利益衡量原則（案例 1-12 ～ 1-15）
                </h3>
              </div>

              <!-- 思考核心與引言 Callout (教材第 1-6 頁底) (高飽和色彩顯眼版) -->
              <div class="p-6 sm:p-8 rounded-3xl border-2 border-indigo-500 dark:border-indigo-400 bg-gradient-to-b from-indigo-50/60 via-white to-purple-50/40 dark:from-[#0f1128] dark:via-[#101623] dark:to-[#0a0d1e] shadow-xl space-y-6">
                <div class="flex items-center justify-between border-b-2 border-indigo-200/80 dark:border-indigo-900/60 pb-3">
                  <div class="flex items-center gap-2">
                    <span class="text-xl">⚖️</span>
                    <span class="font-black text-sm sm:text-base text-indigo-700 dark:text-indigo-300 tracking-wide">實質違法性之思考核心：利益衡量原則</span>
                  </div>
                  <span class="text-xs font-mono px-3 py-1 rounded-full bg-indigo-100 dark:bg-indigo-900/60 text-indigo-700 dark:text-indigo-300 font-bold border border-indigo-300 dark:border-indigo-700 shadow-xs">教材第 1-6 頁底 原文</span>
                </div>

                <div class="p-4 sm:p-5 rounded-2xl bg-indigo-50/90 dark:bg-indigo-950/70 border-2 border-indigo-300 dark:border-indigo-800 text-xs sm:text-sm text-indigo-950 dark:text-indigo-100 leading-relaxed font-semibold shadow-inner border-l-6 border-l-indigo-600">
                  「通說見解肯定在法律未規定的情況下，可以尋求<strong class="text-indigo-600 dark:text-indigo-400 font-black underline decoration-indigo-400 decoration-2">『超法定阻卻違法事由』</strong>來推翻推定，現今犯罪體系自<strong class="text-indigo-600 dark:text-indigo-400 font-black underline decoration-indigo-400 decoration-2">『是否合於利益衡量？』</strong>思考違法性，並綜合<strong class="text-slate-900 dark:text-white font-black">結果</strong>與<strong class="text-slate-900 dark:text-white font-black">行為</strong>來觀察。」
                </div>

                <!-- 雙維度檢驗高彩卡片 (結果層面 vs 行為層面) -->
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                  
                  <!-- 維度一：結果層面觀察 -->
                  <div class="p-5 rounded-2xl border-2 border-rose-400 dark:border-rose-500 bg-gradient-to-br from-rose-50 via-white to-red-50/50 dark:from-rose-950/40 dark:via-[#190c13] dark:to-rose-950/20 shadow-md space-y-3">
                    <div class="flex items-center justify-between">
                      <span class="font-black text-xs sm:text-sm text-rose-900 dark:text-rose-300 flex items-center gap-1.5">
                        <span>🍒</span>
                        <span>維度一：結果層面觀察</span>
                      </span>
                      <span class="text-xs px-2.5 py-1 rounded-xl bg-rose-600 text-white font-black shadow-xs">肯定違法性</span>
                    </div>
                    <p class="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                      若<strong class="text-rose-800 dark:text-rose-300 font-black">犧牲利益遠大於保全利益</strong>，由結果層面觀察相差過於懸殊，就算外觀有防衛理由，亦絕對不可免責！（典型警示：<strong class="underline decoration-rose-500 font-bold">案例 1-14 櫻桃案</strong>）
                    </p>
                  </div>

                  <!-- 維度二：行為手段觀察 -->
                  <div class="p-5 rounded-2xl border-2 border-amber-400 dark:border-orange-500 bg-gradient-to-br from-amber-50 via-white to-orange-50/50 dark:from-amber-950/40 dark:via-[#1e1307] dark:to-amber-950/20 shadow-md space-y-3">
                    <div class="flex items-center justify-between">
                      <span class="font-black text-xs sm:text-sm text-amber-900 dark:text-amber-300 flex items-center gap-1.5">
                        <span>🩸</span>
                        <span>維度二：行為層面觀察</span>
                      </span>
                      <span class="text-xs px-2.5 py-1 rounded-xl bg-orange-600 text-white font-black shadow-xs">肯定違法性</span>
                    </div>
                    <p class="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                      若<strong class="text-amber-800 dark:text-amber-300 font-black">為達目的而不擇手段</strong>，手段嚴重踐踏人性尊嚴與憲法身體自主權，違法性一樣成立！（典型警示：<strong class="underline decoration-orange-500 font-bold">案例 1-15 輸血案</strong>）
                    </p>
                  </div>

                </div>

                <!-- 白話文秒懂專區：利益衡量雙維度 -->
                <div class="p-5 sm:p-6 rounded-2xl border-2 border-amber-400 dark:border-amber-500 bg-gradient-to-br from-amber-50/90 via-orange-50/40 to-yellow-50/60 dark:from-[#241a0d] dark:via-[#1a150e] dark:to-[#17130c] shadow-lg space-y-4">
                  <div class="flex items-center justify-between border-b-2 border-amber-300/80 dark:border-amber-700/60 pb-3">
                    <div class="flex items-center gap-2">
                      <span class="text-xl">💡</span>
                      <span class="font-black text-sm sm:text-base text-amber-950 dark:text-amber-200">
                        白話文超展開：什麼是「超法定阻卻違法」與「利益衡量」？
                      </span>
                    </div>
                    <span class="text-xs px-2.5 py-1 rounded-full bg-amber-200/80 dark:bg-amber-800 text-amber-900 dark:text-amber-200 font-black">
                      生活化秒懂拆解
                    </span>
                  </div>

                  <!-- 3 大白話解析卡片 -->
                  <div class="grid grid-cols-1 md:grid-cols-3 gap-3.5 text-xs sm:text-sm">
                    
                    <div class="p-4 rounded-xl bg-white/95 dark:bg-slate-900/85 border-2 border-indigo-300 dark:border-indigo-700 space-y-2 shadow-xs">
                      <div class="font-black text-indigo-900 dark:text-indigo-300 flex items-center gap-1.5 text-sm">
                        <span class="w-5 h-5 rounded-md bg-indigo-600 text-white flex items-center justify-center font-bold text-xs">1</span>
                        <span>超法定：法律沒寫，但法理相通</span>
                      </div>
                      <p class="text-slate-700 dark:text-slate-300 leading-relaxed">
                        法條只有短短幾條，不可能窮盡人間所有情境。刑法雖然嚴格「罪刑法定」（不能自己發明新罪名），但對於<strong class="text-indigo-800 dark:text-indigo-300 font-bold">「有利於被告的免責事由」</strong>，法律允許依照公道常理（得承諾、義務衝突）來免除處罰！
                      </p>
                    </div>

                    <div class="p-4 rounded-xl bg-white/95 dark:bg-slate-900/85 border-2 border-rose-300 dark:border-rose-700 space-y-2 shadow-xs">
                      <div class="font-black text-rose-900 dark:text-rose-300 flex items-center gap-1.5 text-sm">
                        <span class="w-5 h-5 rounded-md bg-rose-600 text-white flex items-center justify-center font-bold text-xs">2</span>
                        <span>結果檢驗：不能拿大砲打小鳥</span>
                      </div>
                      <p class="text-slate-700 dark:text-slate-300 leading-relaxed">
                        法益天平必須秤秤看！一顆微不足道的櫻桃價值 5 塊錢，小學生卻是無價的生命。就算你是正當防衛，也不能為了保全小果實去射殺活人，<strong class="text-rose-800 dark:text-rose-300 font-bold">禁止權利濫用</strong>！
                      </p>
                    </div>

                    <div class="p-4 rounded-xl bg-white/95 dark:bg-slate-900/85 border-2 border-amber-300 dark:border-amber-700 space-y-2 shadow-xs">
                      <div class="font-black text-amber-900 dark:text-amber-300 flex items-center gap-1.5 text-sm">
                        <span class="w-5 h-5 rounded-md bg-orange-600 text-white flex items-center justify-center font-bold text-xs">3</span>
                        <span>手段檢驗：不可把活人當耗材</span>
                      </div>
                      <p class="text-slate-700 dark:text-slate-300 leading-relaxed">
                        即便救人性命的目的再崇高，也不能強壓路人抽血救人。憲法最神聖的底線是「人是目的，絕非工具」。<strong class="text-amber-800 dark:text-amber-300 font-bold">不擇手段的殘忍方法，違法性永遠成立</strong>！
                      </p>
                    </div>

                  </div>

                  <!-- 核心口訣金色橫條 -->
                  <div class="p-3.5 rounded-xl bg-gradient-to-r from-amber-600 via-orange-600 to-amber-700 text-white flex items-center justify-between gap-3 flex-wrap shadow-md">
                    <div class="flex items-center gap-2.5">
                      <span class="text-lg">📢</span>
                      <span class="font-black text-xs sm:text-sm">
                        核心精華口訣：結果失衡不能免責、手段踐踏尊嚴必罰；合情合理方阻不法！
                      </span>
                    </div>
                    <span class="text-[11px] font-bold bg-white/20 backdrop-blur-xs px-2.5 py-0.5 rounded-full text-white">
                      利益衡量雙維度
                    </span>
                  </div>

                </div>

              </div>

              <!-- ==================== 案例導航與研讀控制台：第九節 超法定阻卻違法 (案例 1-12 ～ 1-15) ==================== -->
              <div class="nav-console-indigo p-4 sm:p-5 rounded-2xl space-y-3">
                <div class="flex items-center justify-between gap-2 border-b border-indigo-300/80 dark:border-indigo-700/60 pb-2.5">
                  <div class="flex items-center gap-2">
                    <span class="inline-flex items-center justify-center w-7 h-7 rounded-xl bg-indigo-600 text-white shadow-xs text-xs font-bold">💡</span>
                    <span class="font-black text-sm sm:text-base text-indigo-950 dark:text-indigo-100 tracking-wide">超法定阻卻違法案例導航</span>
                    <span class="px-2.5 py-0.5 rounded-full text-xs font-black font-mono bg-indigo-700 text-white shadow-xs">4 例</span>
                  </div>
                  <div class="flex items-center gap-1.5 shrink-0">
                    <button type="button" onclick="toggleAllCases(false)" class="px-2.5 py-1 rounded-lg bg-white dark:bg-slate-800 text-indigo-800 dark:text-indigo-200 hover:bg-indigo-50 dark:hover:bg-slate-700 font-bold border border-indigo-300 dark:border-indigo-700 text-xs shadow-2xs hover:shadow-xs transition-all flex items-center gap-1 cursor-pointer" title="收合為精簡看板">
                      <span>⊞</span><span>精簡看板</span>
                    </button>
                    <button type="button" onclick="toggleAllCases(true)" class="px-2.5 py-1 rounded-lg bg-white dark:bg-slate-800 text-indigo-800 dark:text-indigo-200 hover:bg-indigo-50 dark:hover:bg-slate-700 font-bold border border-indigo-300 dark:border-indigo-700 text-xs shadow-2xs hover:shadow-xs transition-all flex items-center gap-1 cursor-pointer" title="展開所有案件事實與詳解">
                      <span>⊟</span><span>展開詳解</span>
                    </button>
                  </div>
                </div>

                <div class="flex flex-wrap items-center gap-2 pt-0.5" id="pillsExtra">
                  <span class="text-xs font-black text-indigo-950 dark:text-indigo-200 flex items-center gap-1 mr-1">
                    <span>🎯 點選聚焦：</span>
                  </span>
                  <button type="button" onclick="filterJustCase('extra', 'all')" class="just-pill-btn active-pill px-3 py-1.5 rounded-xl text-xs font-bold">全部 (4例)</button>
                  <button type="button" onclick="filterJustCase('extra', '1-12')" class="just-pill-btn px-3 py-1.5 rounded-xl text-xs font-bold">1-12 得承諾 (刺青)</button>
                  <button type="button" onclick="filterJustCase('extra', '1-13')" class="just-pill-btn px-3 py-1.5 rounded-xl text-xs font-bold">1-13 推定承諾 (滅火)</button>
                  <button type="button" onclick="filterJustCase('extra', '1-14')" class="just-pill-btn px-3 py-1.5 rounded-xl text-xs font-bold">1-14 義務衝突 (櫻桃案)</button>
                  <button type="button" onclick="filterJustCase('extra', '1-15')" class="just-pill-btn px-3 py-1.5 rounded-xl text-xs font-bold">1-15 利益衡量 (輸血案)</button>
                </div>
              </div>

              <!-- 案例卡片矩陣 (案例 1-12 至 1-15) (高彩度主題顯眼版) -->
              <div class="grid grid-cols-1 gap-5">

                <!-- 案例 1-12 卡片：得被害人承諾 (亮紫羅蘭/靛藍主題) -->
                <div id="case-card-1-12" data-case="1-12" class="p-5 sm:p-6 rounded-2xl border-2 border-indigo-400 dark:border-indigo-500 bg-gradient-to-br from-indigo-50/80 via-white to-purple-50/40 dark:from-[#13112c] dark:via-[#0e1222] dark:to-[#090b17] shadow-lg hover:shadow-xl transition-all space-y-4">
                  <div class="flex items-center justify-between flex-wrap gap-2">
                    <span class="text-xs font-black px-3 py-1.5 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-sm shadow-indigo-500/30 font-mono tracking-wide">
                      ⚖️ 案例 1-12
                    </span>
                    <span class="text-xs px-3 py-1 rounded-xl bg-indigo-600 text-white font-black shadow-sm shadow-indigo-600/30">
                      超法定阻卻違法：得被害人承諾
                    </span>
                  </div>
                  
                  <!-- 被告心聲對話框 -->
                  <div class="p-4 rounded-xl bg-indigo-50/90 dark:bg-indigo-950/60 border-2 border-indigo-300 dark:border-indigo-800/80 text-xs sm:text-sm text-slate-800 dark:text-slate-100 flex items-start gap-3 shadow-inner">
                    <span class="text-base shrink-0">🗣️</span>
                    <div>
                      <strong class="text-indigo-900 dark:text-indigo-300 font-black">被告心聲抗辯：</strong>
                      <span class="italic">「我的確有打對方一巴掌，不過那是因為我們正在玩黑白猜啦！」</span>
                    </div>
                  </div>

                  <div class="text-xs sm:text-sm text-slate-700 dark:text-slate-300 space-y-2">
                    <div class="font-black text-indigo-950 dark:text-indigo-200 flex items-center gap-1.5">
                      <span>◀ 問題導引與體系定位 ▶</span>
                    </div>
                    <p class="leading-relaxed">
                      主張「得被害人承諾」的超法定抗辯。因為被害人在自由意志下自行放棄對法益的保護，縱使客觀上的確造成法益侵害（輕微身體），<strong class="text-indigo-800 dark:text-indigo-300 font-bold underline decoration-indigo-400 decoration-2 underline-offset-4">但卻因為有正當理由而並非壞事</strong>。
                    </p>
                  </div>

                  <!-- 白話文秒懂專區 -->
                  <div class="p-4 rounded-xl bg-white/95 dark:bg-slate-900/85 border-2 border-indigo-300 dark:border-indigo-700/80 space-y-2.5 shadow-xs">
                    <div class="font-black text-indigo-900 dark:text-indigo-300 flex items-center gap-2 text-xs sm:text-sm">
                      <span class="text-base">💡</span>
                      <span>白話秒懂拆解：你情我願的小事，法律何必瞎操心？</span>
                    </div>
                    <p class="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                      玩黑白猜猜輸被打巴掌、或是去刺青店刺青穿耳洞，外觀上都完全符合傷害罪！但因為被害人自己具有完全處分權，事前自願同意承諾，法益持有人自己放棄了保護，當然不具違法性！但請注意：承諾只適用於可自由處分的個人小法益（輕微皮肉痛、個人財產）；如果是「生命」或「重傷」，就算對方跪求你殺他，也絕對不能免除刑責（刑法 §275 加工自殺罪、§282 得承諾重傷罪一樣必罰）！
                    </p>
                    <div class="pt-1 text-[11px] font-bold text-indigo-700 dark:text-indigo-300">
                      常理口訣：你情我願輕微處分免罰；傷天害理奪人性命必究！
                    </div>
                  </div>

                  <!-- 2026 現行法規查核與資料來源 -->
                  <div class="pt-3 border-t-2 border-indigo-200/80 dark:border-indigo-900/60 space-y-1.5 text-xs">
                    <div class="flex items-center justify-between flex-wrap gap-2">
                      <div class="flex items-center gap-1.5 font-bold text-slate-800 dark:text-slate-200">
                        <span class="text-indigo-600 dark:text-indigo-400">📌</span>
                        <span>2026 現行法規狀態：</span>
                        <span class="px-2.5 py-0.5 rounded-full text-[11px] bg-indigo-100 dark:bg-indigo-950/80 text-indigo-800 dark:text-indigo-300 font-bold border border-indigo-300 dark:border-indigo-700">維持超法定地位・處分法益界限</span>
                      </div>
                      <div class="flex items-center gap-2 font-mono text-[11px]">
                        <a href="https://law.moj.gov.tw/LawClass/LawSingle.aspx?pcode=C0000001&flno=275" target="_blank" rel="noopener noreferrer" class="text-indigo-700 dark:text-indigo-300 hover:underline font-bold">§ 275 加工自殺 ↗</a>
                        <span class="text-slate-300 dark:text-slate-700">|</span>
                        <a href="https://law.moj.gov.tw/LawClass/LawSingle.aspx?pcode=C0000001&flno=282" target="_blank" rel="noopener noreferrer" class="text-indigo-700 dark:text-indigo-300 hover:underline font-bold">§ 282 得承諾傷害 ↗</a>
                      </div>
                    </div>
                    <p class="text-slate-600 dark:text-slate-400 leading-relaxed text-[11.5px] bg-indigo-50/50 dark:bg-slate-900/40 p-2.5 rounded-xl border border-indigo-200/60 dark:border-indigo-800/60">
                      <strong class="text-slate-800 dark:text-slate-200">法理要旨與界限：</strong>刑法通說長期肯認「得被害人承諾」為超法定阻卻違法事由，惟僅限於個人具完全處分權之法益（如財產權、輕微身體法益如黑白猜遊戲掌摑或紋身）；對於不可任意處分之重大法益（生命、重大身體健康），法律特別以刑法 § 275、§ 282 處罰，不許以承諾免責。
                    </p>
                  </div>
                </div>

                <!-- 案例 1-13 卡片：義務衝突 (亮天藍/蔚藍主題) -->
                <div id="case-card-1-13" data-case="1-13" class="p-5 sm:p-6 rounded-2xl border-2 border-sky-400 dark:border-sky-500 bg-gradient-to-br from-sky-50/80 via-white to-blue-50/40 dark:from-[#0c1a2e] dark:via-[#0e1726] dark:to-[#070f1e] shadow-lg hover:shadow-xl transition-all space-y-4">
                  <div class="flex items-center justify-between flex-wrap gap-2">
                    <span class="text-xs font-black px-3 py-1.5 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 text-white shadow-sm shadow-sky-500/30 font-mono tracking-wide">
                      ⚖️ 案例 1-13
                    </span>
                    <span class="text-xs px-3 py-1 rounded-xl bg-sky-600 text-white font-black shadow-sm shadow-sky-600/30">
                      超法定阻卻違法：義務衝突
                    </span>
                  </div>
                  
                  <!-- 被告心聲對話框 -->
                  <div class="p-4 rounded-xl bg-sky-50/90 dark:bg-sky-950/60 border-2 border-sky-300 dark:border-sky-800/80 text-xs sm:text-sm text-slate-800 dark:text-slate-100 flex items-start gap-3 shadow-inner">
                    <span class="text-base shrink-0">🗣️</span>
                    <div>
                      <strong class="text-sky-900 dark:text-sky-300 font-black">被告心聲抗辯：</strong>
                      <span class="italic">「當時我的兩個小孩都深陷火海，但我能力有限，最多只能救起一個。」</span>
                    </div>
                  </div>

                  <div class="text-xs sm:text-sm text-slate-700 dark:text-slate-300 space-y-2">
                    <div class="font-black text-sky-950 dark:text-sky-200 flex items-center gap-1.5">
                      <span>◀ 問題導引與體系定位 ▶</span>
                    </div>
                    <p class="leading-relaxed">
                      主張「義務衝突」的超法定抗辯。此時行為人已經盡其所能地履行義務，縱使客觀上的確造成法益侵害（另一子生命），<strong class="text-sky-800 dark:text-sky-300 font-bold underline decoration-sky-400 decoration-2 underline-offset-4">但卻因為有正當理由而並非壞事</strong>。
                    </p>
                  </div>

                  <!-- 白話文秒懂專區 -->
                  <div class="p-4 rounded-xl bg-white/95 dark:bg-slate-900/85 border-2 border-sky-300 dark:border-sky-700/80 space-y-2.5 shadow-xs">
                    <div class="font-black text-sky-900 dark:text-sky-300 flex items-center gap-2 text-xs sm:text-sm">
                      <span class="text-base">💡</span>
                      <span>白話秒懂拆解：兩難之中竭盡全力，法律絕不強人所難！</span>
                    </div>
                    <p class="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                      父親對兩個小孩都有法定的保護拯救義務（保證人地位）。火災時兩個孩子都在呼救，但父親只有一雙手，只能抱出一個，另一個不幸葬身火窟。外表看似「不作為殺人」，但人類不是三頭六臂的超人，在物理極限下已經窮盡全力救了一個，法律不能強人所難怪你沒長出超能力，此時阻卻違法！
                    </p>
                    <div class="pt-1 text-[11px] font-bold text-sky-700 dark:text-sky-300">
                      常理口訣：手心手背皆是肉，竭盡全力救其一；法律絕不強人所難！
                    </div>
                  </div>

                  <!-- 2026 現行法規查核與資料來源 -->
                  <div class="pt-3 border-t-2 border-sky-200/80 dark:border-sky-900/60 space-y-1.5 text-xs">
                    <div class="flex items-center justify-between flex-wrap gap-2">
                      <div class="flex items-center gap-1.5 font-bold text-slate-800 dark:text-slate-200">
                        <span class="text-sky-600 dark:text-sky-400">📌</span>
                        <span>2026 現行法規狀態：</span>
                        <span class="px-2.5 py-0.5 rounded-full text-[11px] bg-sky-100 dark:bg-sky-950/80 text-sky-800 dark:text-sky-300 font-bold border border-sky-300 dark:border-sky-700">維持超法定地位・客觀履行可能性窮盡</span>
                      </div>
                      <div class="flex items-center gap-2 font-mono text-[11px]">
                        <span class="text-slate-600 dark:text-slate-400 font-bold">通說與最高法院實務法理</span>
                      </div>
                    </div>
                    <p class="text-slate-600 dark:text-slate-400 leading-relaxed text-[11.5px] bg-sky-50/50 dark:bg-slate-900/40 p-2.5 rounded-xl border border-sky-200/60 dark:border-sky-800/60">
                      <strong class="text-slate-800 dark:text-slate-200">法理要旨：</strong>行為人同時具備數個法律上同等之積極作為義務，因客觀能力所限無法同時履行全部，在窮盡所能履行其一義務時，其對未履行之他義務不具客觀期待可能性，整體法規範不強人所難，阻卻違法。
                    </p>
                  </div>
                </div>

                <!-- 案例 1-14 卡片 【櫻桃案】 (櫻桃紅/深緋主題) -->
                <div id="case-card-1-14" data-case="1-14" class="p-5 sm:p-6 rounded-2xl border-2 border-rose-500 dark:border-rose-400 bg-gradient-to-br from-rose-50/80 via-white to-red-50/40 dark:from-[#290c16] dark:via-[#1a0e14] dark:to-[#13070b] shadow-lg hover:shadow-xl transition-all space-y-4">
                  <div class="flex items-center justify-between flex-wrap gap-2">
                    <span class="text-xs font-black px-3 py-1.5 rounded-xl bg-gradient-to-r from-rose-600 to-red-600 text-white shadow-sm shadow-rose-600/30 font-mono tracking-wide">
                      🍒 案例 1-14 ───【櫻桃案】
                    </span>
                    <span class="text-xs px-3 py-1 rounded-xl bg-rose-600 text-white font-black shadow-sm shadow-rose-600/30">
                      利益衡量結果檢驗：肯定違法！（無法免責）
                    </span>
                  </div>
                  
                  <!-- 案例事實對話框 -->
                  <div class="p-4 rounded-xl bg-rose-50/90 dark:bg-rose-950/60 border-2 border-rose-300 dark:border-rose-800/80 text-xs sm:text-sm text-slate-800 dark:text-slate-100 flex items-start gap-3 shadow-inner">
                    <span class="text-base shrink-0">📖</span>
                    <div>
                      <strong class="text-rose-900 dark:text-rose-300 font-black">經典事實重現：</strong>
                      <span class="italic">患有小兒麻痺而必須以輪椅代步的櫻桃園主人，在面臨小學生偷偷進入其所屬櫻桃園偷採櫻桃的不法侵害時，只能選擇用開槍的方法加以制止，雖然保全了一顆櫻桃不被偷走，卻造成了小學生的死亡。</span>
                    </div>
                  </div>

                  <div class="text-xs sm:text-sm text-slate-700 dark:text-slate-300 space-y-2">
                    <div class="font-black text-rose-950 dark:text-rose-200 flex items-center gap-1.5">
                      <span>◀ 問題導引與體系定位 ▶</span>
                    </div>
                    <p class="leading-relaxed">
                      在本案例中，由於<strong class="text-rose-800 dark:text-rose-300 font-black">犧牲利益（生命）遠大於保全利益（一顆櫻桃）</strong>，由結果的層面觀察相差過於懸殊，違反整體法秩序而無正當理由，<strong class="text-rose-700 dark:text-rose-300 underline decoration-rose-500 decoration-2 underline-offset-4">肯定具備違法性，無法阻卻違法！</strong>
                    </p>
                  </div>

                  <!-- 白話文秒懂專區 -->
                  <div class="p-4 rounded-xl bg-white/95 dark:bg-slate-900/85 border-2 border-rose-300 dark:border-rose-700/80 space-y-2.5 shadow-xs">
                    <div class="font-black text-rose-900 dark:text-rose-300 flex items-center gap-2 text-xs sm:text-sm">
                      <span class="text-base">💡</span>
                      <span>白話秒懂拆解：就算防衛手段唯一，也不能拿大砲打小鳥！</span>
                    </div>
                    <p class="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                      輪椅主人確實面臨偷竊的不法侵害，而且因為自己坐輪椅跑不快，「開槍」是客觀上唯一能攔住小學生的方法。但法律不容許荒謬的結論！一顆櫻桃價值 5 塊錢，小學生卻是一條活生生的人命。天平落差高達數億倍，這種防衛權行使屬於「權利濫用」，絕對成立殺人罪！
                    </p>
                    <div class="pt-1 text-[11px] font-bold text-rose-700 dark:text-rose-300">
                      常理口訣：一顆櫻桃換條人命？極端失衡大錯特錯；防衛權利不許濫用！
                    </div>
                  </div>

                  <!-- 2026 現行法規查核與資料來源 -->
                  <div class="pt-3 border-t-2 border-rose-200/80 dark:border-rose-900/60 space-y-1.5 text-xs">
                    <div class="flex items-center justify-between flex-wrap gap-2">
                      <div class="flex items-center gap-1.5 font-bold text-slate-800 dark:text-slate-200">
                        <span class="text-rose-600 dark:text-rose-400">📌</span>
                        <span>2026 現行法規狀態：</span>
                        <span class="px-2.5 py-0.5 rounded-full text-[11px] bg-rose-100 dark:bg-rose-950/80 text-rose-800 dark:text-rose-300 font-bold border border-rose-300 dark:border-rose-700">法理審查：正當防衛之權利濫用禁止</span>
                      </div>
                      <div class="flex items-center gap-2 font-mono text-[11px]">
                        <span class="text-slate-600 dark:text-slate-400 font-bold">德日刑法防衛權極限法理</span>
                      </div>
                    </div>
                    <p class="text-slate-600 dark:text-slate-400 leading-relaxed text-[11.5px] bg-rose-50/50 dark:bg-slate-900/40 p-2.5 rounded-xl border border-rose-200/60 dark:border-rose-800/60">
                      <strong class="text-slate-800 dark:text-slate-200">法理要旨：</strong>正當防衛雖本於「正者毋須向不正者低頭」，但仍受「誠信原則與禁止權利濫用」之極端檢驗。當所保護之財產法益微不足道（一顆櫻桃），而防衛手段所犧牲者為至高無上之人的生命，結果價值落差極端失衡，防衛權之行使即屬權利濫用，行為仍具違法性，肯定成立殺人罪或傷害致死罪。
                    </p>
                  </div>
                </div>

                <!-- 案例 1-15 卡片 【輸血案】 (血紅/熾橙主題) -->
                <div id="case-card-1-15" data-case="1-15" class="p-5 sm:p-6 rounded-2xl border-2 border-orange-500 dark:border-orange-400 bg-gradient-to-br from-orange-50/80 via-white to-amber-50/40 dark:from-[#261708] dark:via-[#1a1410] dark:to-[#120a04] shadow-lg hover:shadow-xl transition-all space-y-4">
                  <div class="flex items-center justify-between flex-wrap gap-2">
                    <span class="text-xs font-black px-3 py-1.5 rounded-xl bg-gradient-to-r from-orange-600 to-amber-600 text-white shadow-sm shadow-orange-600/30 font-mono tracking-wide">
                      🩸 案例 1-15 ───【輸血案】
                    </span>
                    <span class="text-xs px-3 py-1 rounded-xl bg-orange-600 text-white font-black shadow-sm shadow-orange-600/30">
                      利益衡量手段檢驗：違法性肯定！（侵犯人性尊嚴）
                    </span>
                  </div>
                  
                  <!-- 案例事實對話框 -->
                  <div class="p-4 rounded-xl bg-orange-50/90 dark:bg-orange-950/60 border-2 border-orange-300 dark:border-orange-800/80 text-xs sm:text-sm text-slate-800 dark:text-slate-100 flex items-start gap-3 shadow-inner">
                    <span class="text-base shrink-0">📖</span>
                    <div>
                      <strong class="text-orange-900 dark:text-orange-300 font-black">經典事實重現：</strong>
                      <span class="italic">甲因車禍重傷生命垂危急需輸血，醫院缺乏稀有血液，醫師乙知悉義工丙同型，求助遭丙拒絕。乙為救甲命，便使用強制力抽取丙的血液用於甲的醫療，最終救活了甲。</span>
                    </div>
                  </div>

                  <div class="text-xs sm:text-sm text-slate-700 dark:text-slate-300 space-y-2">
                    <div class="font-black text-orange-950 dark:text-orange-200 flex items-center gap-1.5">
                      <span>◀ 問題導引與體系定位 ▶</span>
                      <span class="text-[11px] font-normal text-slate-400 font-mono">(教材第 1-8 頁原文)</span>
                    </div>
                    <p class="leading-relaxed bg-orange-50/50 dark:bg-orange-950/30 p-3 rounded-xl border border-orange-500/20 text-orange-950 dark:text-orange-200 font-medium">
                      縱使保全利益（生命）大於犧牲利益（身體自由），但乙所使用之手段嚴重違反人性尊嚴（將丙當成抽血工具），自行為手段層面觀察絕非達成目的之合理手段。違反整體法秩序而無正當理由，<strong class="underline decoration-orange-500 font-bold">無法阻卻違法，成立犯罪！</strong>
                    </p>
                  </div>

                  <!-- 白話文秒懂專區 -->
                  <div class="p-4 rounded-xl bg-white/95 dark:bg-slate-900/85 border-2 border-orange-300 dark:border-orange-700/80 space-y-2.5 shadow-xs">
                    <div class="font-black text-orange-900 dark:text-orange-300 flex items-center gap-2 text-xs sm:text-sm">
                      <span class="text-base">💡</span>
                      <span>白話秒懂拆解：救命目的再神聖，也不能把活人當抽血機器！</span>
                    </div>
                    <p class="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                      單看數學題：抽一點血不會死人（小法益），卻能救活一個重傷患（大法益生命），看似符合利益衡量。但是刑法嚴守憲法底線：「人是目的，絕非工具」！義工丙已經明確拒絕，若准許醫師硬抽，那全天下健康人不就隨時可能在路上被強行抓去抽血、甚至強割眼角膜？手段嚴重踐踏人性尊嚴與身體自主權，不擇手段絕不可免責！
                    </p>
                    <div class="pt-1 text-[11px] font-bold text-orange-700 dark:text-orange-300">
                      常理口訣：救人性命固然崇高，強行抽血踐踏尊嚴；不擇手段依法必懲！
                    </div>
                  </div>

                  <!-- 2026 現行法規查核與資料來源 -->
                  <div class="pt-3 border-t-2 border-orange-200/80 dark:border-orange-900/60 space-y-1.5 text-xs">
                    <div class="flex items-center justify-between flex-wrap gap-2">
                      <div class="flex items-center gap-1.5 font-bold text-slate-800 dark:text-slate-200">
                        <span class="text-orange-600 dark:text-orange-400">📌</span>
                        <span>2026 現行法規狀態：</span>
                        <span class="px-2.5 py-0.5 rounded-full text-[11px] bg-orange-100 dark:bg-orange-950/80 text-orange-800 dark:text-orange-300 font-bold border border-orange-300 dark:border-orange-700">法理審查：手段正當性與人性尊嚴核心</span>
                      </div>
                      <div class="flex items-center gap-2 font-mono text-[11px]">
                        <span class="text-slate-600 dark:text-slate-400 font-bold">憲法第 22 條身體自主決定權</span>
                      </div>
                    </div>
                    <p class="text-slate-600 dark:text-slate-400 leading-relaxed text-[11.5px] bg-orange-50/50 dark:bg-slate-900/40 p-2.5 rounded-xl border border-orange-200/60 dark:border-orange-800/60">
                      <strong class="text-slate-800 dark:text-slate-200">法理引申核實：</strong>此即前述「若為達目的而不擇手段，亦肯定違法性」之典範案例。醫師縱為拯救甲之重大生命法益，但強行抽取已明確拒絕之義工丙血液，將人工具化作為輸血機器，嚴重侵害憲法第 22 條所保障之身體自主決定權與人性尊嚴核心，手段欠缺合理性與正當性，無法阻卻違法。
                    </p>
                  </div>
                </div>

              </div>
                <!-- 底部導航輔助切換列 (Section 9) -->
                <div class="p-4 rounded-2xl bg-indigo-50/70 dark:bg-indigo-950/40 border border-indigo-200/80 dark:border-indigo-800/50 flex flex-wrap items-center justify-between gap-3 text-xs">
                  <a href="#sec-justification-cases" onclick="scrollToSection(event, 'sec-justification-cases')" class="inline-flex items-center gap-1.5 font-bold text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400">
                    ← 回到第八節 法定阻卻違法（案例 1-7 ～ 1-11）
                  </a>
                  <a href="#sec-justification-system" onclick="scrollToSection(event, 'sec-justification-system')" class="inline-flex items-center gap-1.5 font-bold text-indigo-700 dark:text-indigo-400 hover:underline">
                    前往第十節 阻卻違法體系展開 →
                  </a>
                </div>
              </div>
            </section>

            <!-- SECTION 10: 阻卻違法事由之體系展開 (教材第 1-8 頁 原文圖解) -->
            <section id="sec-justification-system" class="scroll-mt-28 space-y-4">
              <div class="flex items-center gap-2">
                <span class="w-2 h-2 rounded-full bg-blue-500"></span>
                <h3 class="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                  十、阻卻違法事由之體系展開（教材第 1-8 頁 原文圖解）
                </h3>
              </div>

              <!-- 原文圖解還原面板 (高飽和色彩顯眼版) -->
              <div class="p-6 sm:p-8 rounded-3xl border-2 border-emerald-500 dark:border-emerald-400 bg-gradient-to-b from-emerald-50/50 via-white to-teal-50/40 dark:from-[#0b1b1c] dark:via-[#101623] dark:to-[#081318] shadow-xl space-y-6">
                <div class="flex items-center justify-between pb-3 border-b-2 border-emerald-200/80 dark:border-emerald-900/60">
                  <div class="flex items-center gap-2">
                    <span class="text-xl">🌳</span>
                    <span class="text-emerald-700 dark:text-emerald-300 font-black text-sm sm:text-base tracking-wide">阻卻違法事由之體系展開圖</span>
                    <span class="text-xs px-2.5 py-0.5 rounded-full bg-emerald-600 text-white font-black shadow-xs">全體系樹狀</span>
                  </div>
                  <span class="text-xs font-mono px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-900/60 text-emerald-800 dark:text-emerald-300 font-bold border border-emerald-300 dark:border-emerald-700 shadow-xs">教材第 1-8 頁</span>
                </div>

                <div class="max-w-2xl mx-auto space-y-6 py-2">
                  <!-- 頂層核心標籤 (立體發光膠囊) -->
                  <div class="flex flex-col items-center">
                    <div class="px-7 py-3 rounded-2xl bg-gradient-to-r from-emerald-600 via-teal-600 to-blue-600 text-white font-black text-sm sm:text-base shadow-lg shadow-emerald-500/30 ring-4 ring-emerald-400/25 tracking-wide text-center">
                      阻卻違法事由
                    </div>
                    <div class="w-1 h-6 bg-gradient-to-b from-emerald-500 to-teal-500 rounded-full"></div>
                    <div class="px-4 py-1.5 rounded-full bg-gradient-to-r from-emerald-100 to-teal-100 dark:from-emerald-950/80 dark:to-teal-950/80 border-2 border-emerald-400 dark:border-emerald-700 text-emerald-900 dark:text-emerald-200 text-xs sm:text-sm font-black shadow-xs">
                      核心精神：合乎整體法秩序
                    </div>
                    <div class="w-1 h-6 bg-gradient-to-b from-teal-500 to-blue-500 rounded-full"></div>
                  </div>

                  <!-- 兩大分流：法定的 vs 超法定的 (雙軌高對比並立) -->
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
                    
                    <!-- 分流 1：法定的阻卻違法事由 (翡翠綠主題) -->
                    <div class="p-5 sm:p-6 rounded-2xl border-2 border-emerald-500 dark:border-emerald-400 bg-gradient-to-br from-emerald-50 via-white to-teal-50/50 dark:from-emerald-950/40 dark:via-[#101920] dark:to-emerald-950/20 shadow-md space-y-3.5">
                      <div class="flex items-center justify-between pb-2.5 border-b-2 border-emerald-200/80 dark:border-emerald-900/60">
                        <span class="text-xs sm:text-sm font-black text-emerald-950 dark:text-emerald-200 flex items-center gap-1.5">
                          <span>⚖️</span>
                          <span>法定的阻卻違法事由</span>
                        </span>
                        <span class="text-xs px-2.5 py-1 rounded-xl bg-emerald-600 text-white font-black shadow-xs">5 大成文事由</span>
                      </div>
                      <ul class="space-y-2 text-xs sm:text-sm text-slate-700 dark:text-slate-200">
                        <li class="p-2.5 rounded-xl bg-white/95 dark:bg-[#161f30] border-2 border-emerald-300 dark:border-emerald-700 flex items-center justify-between shadow-2xs">
                          <span class="font-bold">• 依法令之行為</span>
                          <span class="font-mono text-emerald-700 dark:text-emerald-400 font-black">§ 21 Ⅰ</span>
                        </li>
                        <li class="p-2.5 rounded-xl bg-white/95 dark:bg-[#161f30] border-2 border-emerald-300 dark:border-emerald-700 flex items-center justify-between shadow-2xs">
                          <span class="font-bold">• 依命令之行為</span>
                          <span class="font-mono text-emerald-700 dark:text-emerald-400 font-black">§ 21 Ⅱ</span>
                        </li>
                        <li class="p-2.5 rounded-xl bg-white/95 dark:bg-[#161f30] border-2 border-emerald-300 dark:border-emerald-700 flex items-center justify-between shadow-2xs">
                          <span class="font-bold">• 業務上正當行為</span>
                          <span class="font-mono text-emerald-700 dark:text-emerald-400 font-black">§ 22</span>
                        </li>
                        <li class="p-2.5 rounded-xl bg-white/95 dark:bg-[#161f30] border-2 border-emerald-300 dark:border-emerald-700 flex items-center justify-between shadow-2xs">
                          <span class="font-bold">• 正當防衛</span>
                          <span class="font-mono text-emerald-700 dark:text-emerald-400 font-black">§ 23</span>
                        </li>
                        <li class="p-2.5 rounded-xl bg-white/95 dark:bg-[#161f30] border-2 border-emerald-300 dark:border-emerald-700 flex items-center justify-between shadow-2xs">
                          <span class="font-bold">• 緊急避難</span>
                          <span class="font-mono text-emerald-700 dark:text-emerald-400 font-black">§ 24</span>
                        </li>
                      </ul>
                    </div>

                    <!-- 分流 2：超法定的阻卻違法事由 (琥珀橙主題，規避 app.js 按鈕誤植) -->
                    <div class="p-5 sm:p-6 rounded-2xl border-2 border-amber-500 dark:border-amber-400 bg-gradient-to-br from-amber-50 via-white to-orange-50/50 dark:from-amber-950/40 dark:via-[#1c140c] dark:to-amber-950/20 shadow-md space-y-3.5">
                      <div class="flex items-center justify-between pb-2.5 border-b-2 border-amber-200/80 dark:border-amber-900/60">
                        <span class="text-xs sm:text-sm font-black text-amber-950 dark:text-amber-200 flex items-center gap-1.5">
                          <span>💡</span>
                          <span>超法定的阻卻違法事由</span>
                        </span>
                        <span class="text-xs px-2.5 py-1 rounded-xl bg-orange-600 text-white font-black shadow-xs">實質利益衡量</span>
                      </div>
                      <ul class="space-y-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-200">
                        <li class="p-3 rounded-xl bg-white/95 dark:bg-[#161f30] border-2 border-amber-300 dark:border-amber-700 space-y-1 shadow-2xs">
                          <div class="font-black text-slate-900 dark:text-white flex items-center justify-between">
                            <span>• 得被害人之承諾</span>
                            <span class="text-[11px] px-2 py-0.5 rounded-md bg-amber-500/10 text-amber-800 dark:text-amber-300 font-bold border border-amber-300 dark:border-amber-700">實例：黑白猜/刺青</span>
                          </div>
                          <p class="text-[11.5px] text-slate-500 dark:text-slate-400 leading-relaxed">被害人出於自由意志放棄個人具處分權之法益（限輕微法益，不含生命與重傷）</p>
                        </li>
                        <li class="p-3 rounded-xl bg-white/95 dark:bg-[#161f30] border-2 border-amber-300 dark:border-amber-700 space-y-1 shadow-2xs">
                          <div class="font-black text-slate-900 dark:text-white flex items-center justify-between">
                            <span>• 義務衝突</span>
                            <span class="text-[11px] px-2 py-0.5 rounded-md bg-amber-500/10 text-amber-800 dark:text-amber-300 font-bold border border-amber-300 dark:border-amber-700">實例：火海救兩子</span>
                          </div>
                          <p class="text-[11.5px] text-slate-500 dark:text-slate-400 leading-relaxed">數個同等救助作為義務客觀不能同時履行，竭盡所能履行其一，法律不強人所難</p>
                        </li>
                      </ul>
                      <div class="p-3 rounded-xl bg-orange-100/90 dark:bg-orange-950/70 border-2 border-orange-300 dark:border-orange-800/80 text-xs text-orange-950 dark:text-orange-200 leading-relaxed font-semibold shadow-xs">
                        <strong>雙重審查基準：</strong>須受結果層面（非犧牲大於保全）與行為手段層面（不可不擇手段）之嚴格檢驗！
                      </div>
                    </div>

                  </div>
                </div>

                <!-- 白話文秒懂專區：阻卻違法全景鳥瞰 -->
                <div class="p-5 sm:p-6 rounded-2xl border-2 border-amber-400 dark:border-amber-500 bg-gradient-to-br from-amber-50/90 via-orange-50/40 to-yellow-50/60 dark:from-[#241a0d] dark:via-[#1a150e] dark:to-[#17130c] shadow-lg space-y-4">
                  <div class="flex items-center justify-between border-b-2 border-amber-300/80 dark:border-amber-700/60 pb-3">
                    <div class="flex items-center gap-2">
                      <span class="text-xl">💡</span>
                      <span class="font-black text-sm sm:text-base text-amber-950 dark:text-amber-200">
                        白話文超展開：阻卻違法全體系一張圖秒懂
                      </span>
                    </div>
                    <span class="text-xs px-2.5 py-1 rounded-full bg-amber-200/80 dark:bg-amber-800 text-amber-900 dark:text-amber-200 font-black">
                      生活化秒懂拆解
                    </span>
                  </div>

                  <!-- 3 大白話解析卡片 -->
                  <div class="grid grid-cols-1 md:grid-cols-3 gap-3.5 text-xs sm:text-sm">
                    
                    <div class="p-4 rounded-xl bg-white/95 dark:bg-slate-900/85 border-2 border-emerald-300 dark:border-emerald-700 space-y-2 shadow-xs">
                      <div class="font-black text-emerald-900 dark:text-emerald-300 flex items-center gap-1.5 text-sm">
                        <span class="w-5 h-5 rounded-md bg-emerald-600 text-white flex items-center justify-center font-bold text-xs">1</span>
                        <span>法定五大事由：成文免死金牌</span>
                      </div>
                      <p class="text-slate-700 dark:text-slate-300 leading-relaxed">
                        刑法 §21 至 §24 條是立法者白紙黑字寫好的 5 大免罪護身符：<strong class="text-emerald-800 dark:text-emerald-300 font-bold">法令、命令、業務、防衛、避難</strong>。只要吻合其中任何一個法定要件，就是有正當理由，實質不法性直接清零！
                      </p>
                    </div>

                    <div class="p-4 rounded-xl bg-white/95 dark:bg-slate-900/85 border-2 border-amber-300 dark:border-amber-700 space-y-2 shadow-xs">
                      <div class="font-black text-amber-900 dark:text-amber-300 flex items-center gap-1.5 text-sm">
                        <span class="w-5 h-5 rounded-md bg-orange-600 text-white flex items-center justify-center font-bold text-xs">2</span>
                        <span>超法定事由：常理與實質衡量</span>
                      </div>
                      <p class="text-slate-700 dark:text-slate-300 leading-relaxed">
                        法律條文有限，人間悲歡離合無窮！遇上法條沒寫的情境（如黑白猜被打巴掌、火災只能抱出一個小孩），只要符合<strong class="text-amber-800 dark:text-amber-300 font-bold">「利益衡量公道原則」</strong>，法院一樣可以用超法定事由判你無罪！
                      </p>
                    </div>

                    <div class="p-4 rounded-xl bg-white/95 dark:bg-slate-900/85 border-2 border-teal-300 dark:border-teal-700 space-y-2 shadow-xs">
                      <div class="font-black text-teal-900 dark:text-teal-300 flex items-center gap-1.5 text-sm">
                        <span class="w-5 h-5 rounded-md bg-teal-600 text-white flex items-center justify-center font-bold text-xs">3</span>
                        <span>最高指導原則：合乎整體法秩序</span>
                      </div>
                      <p class="text-slate-700 dark:text-slate-300 leading-relaxed">
                        所有阻卻違法的終極檢驗只有一句話：<strong class="text-teal-800 dark:text-teal-300 font-bold">「以正常社會人的良心與法律眼光來看，這件事做得合情、合理、公道嗎？」</strong>如果答案是肯定的，那就絕不是刑法要處罰的壞事！
                      </p>
                    </div>

                  </div>

                  <!-- 核心口訣金色橫條 -->
                  <div class="p-3.5 rounded-xl bg-gradient-to-r from-amber-600 via-orange-600 to-amber-700 text-white flex items-center justify-between gap-3 flex-wrap shadow-md">
                    <div class="flex items-center gap-2.5">
                      <span class="text-lg">📢</span>
                      <span class="font-black text-xs sm:text-sm">
                        核心精華口訣：成文法定五護身（§21~§24）＋ 超法定利益衡量；合乎整體法秩序即阻卻不法！
                      </span>
                    </div>
                    <span class="text-[11px] font-bold bg-white/20 backdrop-blur-xs px-2.5 py-0.5 rounded-full text-white">
                      體系終極全景
                    </span>
                  </div>

                </div>

              </div>
            </section>

            <!-- SECTION 11: 犯罪三階層體系論之統整 (教材第 1-8 頁) -->
            <section id="sec-three-stages-summary" class="scroll-mt-28 space-y-4">
              <div class="flex items-center gap-2">
                <span class="w-2 h-2 rounded-full bg-blue-500"></span>
                <h3 class="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                  十一、犯罪三階層體系論（簡稱三階論）之統整
                </h3>
              </div>

              <div class="box-legal-navy p-6 sm:p-7 rounded-2xl space-y-5 text-sm sm:text-base leading-relaxed text-slate-700 dark:text-slate-200">
                <div class="flex items-center justify-between border-b border-blue-200/60 dark:border-blue-800/40 pb-3">
                  <div class="flex items-center gap-2">
                    <span class="text-base sm:text-lg">🏛️</span>
                    <span class="font-extrabold text-sm sm:text-base text-blue-900 dark:text-blue-200 tracking-wide">三階論體系統整</span>
                  </div>
                  <span class="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-blue-100/80 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 font-bold border border-blue-200 dark:border-blue-700/50">
                    教材第 1-8 頁
                  </span>
                </div>
                <p>
                  我們來作個統整，犯罪成立必須循序通過三大階層檢驗：
                </p>

                <!-- 3 階層卡片群 -->
                <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                  
                  <!-- 階層 1: TB -->
                  <div class="p-4 rounded-2xl border border-blue-500/30 bg-blue-50/20 dark:bg-blue-950/20 space-y-2">
                    <div class="flex items-center justify-between">
                      <span class="text-xs font-mono font-bold px-2 py-0.5 rounded bg-blue-500 text-white">第 1 階</span>
                      <span class="text-xs font-mono font-bold text-blue-600 dark:text-blue-400">TB</span>
                    </div>
                    <h4 class="font-extrabold text-slate-900 dark:text-white text-sm">構成要件該當性階層</h4>
                    <p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                      首先判斷行為人的所作所為是否符合分則條文的描述。
                    </p>
                  </div>

                  <!-- 階層 2: R -->
                  <div class="p-4 rounded-2xl border border-indigo-500/30 bg-indigo-50/20 dark:bg-indigo-950/20 space-y-2">
                    <div class="flex items-center justify-between">
                      <span class="text-xs font-mono font-bold px-2 py-0.5 rounded bg-indigo-600 text-white">第 2 階</span>
                      <span class="text-xs font-mono font-bold text-indigo-600 dark:text-indigo-400">R</span>
                    </div>
                    <h4 class="font-extrabold text-slate-900 dark:text-white text-sm">違法性階層</h4>
                    <p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                      再來構成要件該當將推定違法性，因此必須尋有無阻卻違法事由。
                    </p>
                  </div>

                  <!-- 階層 3: S -->
                  <div class="p-4 rounded-2xl border border-purple-500/30 bg-purple-50/20 dark:bg-purple-950/20 space-y-2">
                    <div class="flex items-center justify-between">
                      <span class="text-xs font-mono font-bold px-2 py-0.5 rounded bg-purple-600 text-white">第 3 階</span>
                      <span class="text-xs font-mono font-bold text-purple-600 dark:text-purple-400">S</span>
                    </div>
                    <h4 class="font-extrabold text-slate-900 dark:text-white text-sm">罪責階層</h4>
                    <p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                      最後不法將推定罪責，所以必須找尋有無阻卻罪責事由。
                    </p>
                  </div>

                </div>

                <div class="p-4 rounded-2xl bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-purple-500/10 border border-blue-500/20 space-y-2">
                  <div class="flex items-center gap-2 font-bold text-slate-900 dark:text-white text-sm">
                    <span>🏁 終局宣告</span>
                  </div>
                  <p class="text-xs sm:text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                    當行為人的罪責終局地被確認後，即可宣告犯罪成立。學說將這種<strong class="text-blue-600 dark:text-blue-400">「構成要件該當性（TB）➔ 違法性（R）➔ 罪責（S）」</strong>的三階段判斷模式，稱為<strong class="text-slate-900 dark:text-white underline decoration-blue-500 font-black">「犯罪三階層體系論（簡稱三階論）」</strong>。
                  </p>
                </div>
              </div>

            <!-- SECTION 12: 犯罪三階層體系論（雛形）架構圖解 (教材第 1-9 頁 原文圖解) -->
            <section id="sec-three-stages-framework" class="scroll-mt-28 space-y-4">
              <div class="flex items-center gap-2">
                <span class="w-2 h-2 rounded-full bg-blue-500"></span>
                <h3 class="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                  十二、犯罪三階層體系論（雛形）架構圖解（教材第 1-9 頁 原文圖解）
                </h3>
              </div>

              <!-- 原文圖解還原面板 (高飽和色彩顯眼版) -->
              <div class="p-6 sm:p-8 rounded-3xl border-2 border-blue-500 dark:border-blue-400 bg-gradient-to-b from-blue-50/50 via-white to-indigo-50/40 dark:from-[#0d1627] dark:via-[#101623] dark:to-[#0c1220] shadow-xl space-y-6">
                <div class="flex items-center justify-between pb-3 border-b-2 border-blue-200/80 dark:border-blue-900/60">
                  <div class="flex items-center gap-2">
                    <span class="text-xl">🎯</span>
                    <span class="text-blue-700 dark:text-blue-300 font-black text-sm sm:text-base tracking-wide">犯罪三階層體系論（雛形）架構圖</span>
                    <span class="text-xs px-2.5 py-0.5 rounded-full bg-blue-600 text-white font-black shadow-xs">原文架構還原</span>
                  </div>
                  <span class="text-xs font-mono px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/60 text-blue-700 dark:text-blue-300 font-bold border border-blue-300 dark:border-blue-700 shadow-xs">教材第 1-9 頁</span>
                </div>

                <div class="max-w-2xl mx-auto flex flex-col md:flex-row items-center gap-6 py-2">
                  
                  <!-- 左側起點：犯罪 (立體飽和發光圓環) -->
                  <div class="flex flex-col items-center shrink-0">
                    <div class="w-24 h-24 rounded-full border-4 border-blue-500 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 text-white flex items-center justify-center font-black text-xl shadow-xl shadow-blue-500/30 ring-4 ring-blue-400/25 tracking-wider">
                      犯罪
                    </div>
                  </div>

                  <!-- 連接箭頭 -->
                  <div class="hidden md:flex items-center w-10 relative">
                    <div class="h-1.5 w-full bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"></div>
                    <div class="w-3 h-3 border-t-3 border-r-3 border-indigo-500 rotate-45 -ml-1"></div>
                  </div>

                  <!-- 右側評價結構：兩大階層並立 -->
                  <div class="flex-1 w-full space-y-4">
                    
                    <!-- 上方：行為具備不法區塊 (亮天藍主題) -->
                    <div class="p-5 rounded-2xl border-2 border-sky-400 dark:border-sky-500 bg-gradient-to-br from-sky-50 via-white to-blue-50/60 dark:from-sky-950/40 dark:via-[#101827] dark:to-sky-950/20 shadow-md space-y-3">
                      <div class="flex items-center justify-between pb-2 border-b-2 border-sky-200/80 dark:border-sky-900/60">
                        <span class="font-black text-xs sm:text-sm text-sky-950 dark:text-sky-200 flex items-center gap-1.5">
                          <span>📐</span>
                          <span>行為具備不法</span>
                        </span>
                        <span class="text-xs px-2.5 py-1 rounded-xl bg-sky-600 text-white font-black shadow-xs">行為客觀評價</span>
                      </div>

                      <div class="flex flex-col items-center gap-2.5">
                        <!-- 法益侵害 TB -->
                        <div class="w-full text-center py-2.5 px-3 rounded-xl bg-white/95 dark:bg-[#161f30] border-2 border-sky-300 dark:border-sky-700 font-black text-xs sm:text-sm text-sky-900 dark:text-sky-200 shadow-2xs">
                          法益侵害 (TB)
                        </div>

                        <!-- 推定與阻卻事由 -->
                        <div class="flex items-center justify-center gap-2.5 w-full py-0.5">
                          <div class="px-3 py-1 rounded-full bg-blue-600 text-white text-xs font-black shadow-xs">
                            推定違法
                          </div>
                          <div class="h-1 w-6 bg-slate-300 dark:bg-slate-700 rounded-full"></div>
                          <div class="text-xs px-3 py-1 rounded-xl border-2 border-emerald-400 dark:border-emerald-600 bg-emerald-600 text-white font-black shadow-xs">
                            ◀ 阻卻違法事由
                          </div>
                        </div>

                        <!-- 無正當理由 R -->
                        <div class="w-full text-center py-2.5 px-3 rounded-xl bg-white/95 dark:bg-[#161f30] border-2 border-sky-300 dark:border-sky-700 font-black text-xs sm:text-sm text-sky-900 dark:text-sky-200 shadow-2xs">
                          無正當理由 (R)
                        </div>
                      </div>
                    </div>

                    <!-- 下方：罪責推定串聯區塊 (紫羅蘭主題) -->
                    <div class="p-5 rounded-2xl border-2 border-purple-400 dark:border-purple-500 bg-gradient-to-br from-purple-50 via-white to-indigo-50/60 dark:from-purple-950/40 dark:via-[#151025] dark:to-purple-950/20 shadow-md space-y-3">
                      <div class="flex items-center justify-between pb-2 border-b-2 border-purple-200/80 dark:border-purple-900/60">
                        <span class="font-black text-xs sm:text-sm text-purple-950 dark:text-purple-200 flex items-center gap-1.5">
                          <span>⚖️</span>
                          <span>行為人具備罪責</span>
                        </span>
                        <span class="text-xs px-2.5 py-1 rounded-xl bg-purple-600 text-white font-black shadow-xs">行為人主觀歸責</span>
                      </div>
                      
                      <!-- 推定與阻卻 S 事由 -->
                      <div class="flex items-center justify-center gap-2.5 w-full py-0.5">
                        <div class="px-3 py-1 rounded-full bg-amber-600 text-white text-xs font-black shadow-xs">
                          推定有責
                        </div>
                        <div class="h-1 w-6 bg-slate-300 dark:bg-slate-700 rounded-full"></div>
                        <div class="text-xs px-3 py-1 rounded-xl border-2 border-rose-400 dark:border-rose-600 bg-rose-600 text-white font-black shadow-xs">
                          ◀ 阻卻罪責事由
                        </div>
                      </div>

                      <!-- 行為人具有期待可能性 S -->
                      <div class="w-full text-center py-2.5 px-3 rounded-xl bg-white/95 dark:bg-[#161f30] border-2 border-purple-300 dark:border-purple-700 font-black text-xs sm:text-sm text-purple-900 dark:text-purple-200 shadow-2xs">
                        行為人具有期待可能性 (S)
                      </div>
                    </div>

                  </div>
                </div>

                <!-- 白話文秒懂專區：三階論雛形與雙重推定安全閥 -->
                <div class="p-5 sm:p-6 rounded-2xl border-2 border-amber-400 dark:border-amber-500 bg-gradient-to-br from-amber-50/90 via-orange-50/40 to-yellow-50/60 dark:from-[#241a0d] dark:via-[#1a150e] dark:to-[#17130c] shadow-lg space-y-4">
                  <div class="flex items-center justify-between border-b-2 border-amber-300/80 dark:border-amber-700/60 pb-3">
                    <div class="flex items-center gap-2">
                      <span class="text-xl">💡</span>
                      <span class="font-black text-sm sm:text-base text-amber-950 dark:text-amber-200">
                        白話文超展開：一張圖搞懂「三階論雛形」如何誕生
                      </span>
                    </div>
                    <span class="text-xs px-2.5 py-1 rounded-full bg-amber-200/80 dark:bg-amber-800 text-amber-900 dark:text-amber-200 font-black">
                      生活化秒懂拆解
                    </span>
                  </div>

                  <!-- 3 大白話解析卡片 -->
                  <div class="grid grid-cols-1 md:grid-cols-3 gap-3.5 text-xs sm:text-sm">
                    
                    <div class="p-4 rounded-xl bg-white/95 dark:bg-slate-900/85 border-2 border-sky-300 dark:border-sky-700 space-y-2 shadow-xs">
                      <div class="font-black text-sky-900 dark:text-sky-300 flex items-center gap-1.5 text-sm">
                        <span class="w-5 h-5 rounded-md bg-sky-600 text-white flex items-center justify-center font-bold text-xs">1</span>
                        <span>行為不法：先看動作是不是壞事</span>
                      </div>
                      <p class="text-slate-700 dark:text-slate-300 leading-relaxed">
                        只要外在動作踩到刑法紅線（該當 TB），常理就<strong class="text-sky-800 dark:text-sky-300 font-bold">直接推定你毫無正當藉口（推定違法性 R）</strong>。除非你能拿出「正當防衛、緊急避難」推翻推定，否則「壞事」就正式成立！
                      </p>
                    </div>

                    <div class="p-4 rounded-xl bg-white/95 dark:bg-slate-900/85 border-2 border-purple-300 dark:border-purple-700 space-y-2 shadow-xs">
                      <div class="font-black text-purple-900 dark:text-purple-300 flex items-center gap-1.5 text-sm">
                        <span class="w-5 h-5 rounded-md bg-purple-600 text-white flex items-center justify-center font-bold text-xs">2</span>
                        <span>人有罪責：再看做事者該不該罰</span>
                      </div>
                      <p class="text-slate-700 dark:text-slate-300 leading-relaxed">
                        確定是壞事後，常理接著<strong class="text-purple-800 dark:text-purple-300 font-bold">推定行為人應該要被譴責處罰（推定具期待可能性 S）</strong>。除非證明自己未滿 14 歲、精神喪失或被槍指頭逼迫，否則「壞人」罪責確立！
                      </p>
                    </div>

                    <div class="p-4 rounded-xl bg-white/95 dark:bg-slate-900/85 border-2 border-amber-300 dark:border-amber-700 space-y-2 shadow-xs">
                      <div class="font-black text-amber-900 dark:text-amber-300 flex items-center gap-1.5 text-sm">
                        <span class="w-5 h-5 rounded-md bg-orange-600 text-white flex items-center justify-center font-bold text-xs">3</span>
                        <span>雙重推定：效率與正義兼顧</span>
                      </div>
                      <p class="text-slate-700 dark:text-slate-300 leading-relaxed">
                        日常社會中九成做壞事的都是正常成年人，法律採取「兩段推定」讓司法不必瞎猜動機，<strong class="text-amber-800 dark:text-amber-300 font-bold">兼顧審判效率</strong>；同時開放反證事由，<strong class="text-amber-800 dark:text-amber-300 font-bold">防範冤枉誤判</strong>！
                      </p>
                    </div>

                  </div>

                  <!-- 核心口訣金色橫條 -->
                  <div class="p-3.5 rounded-xl bg-gradient-to-r from-amber-600 via-orange-600 to-amber-700 text-white flex items-center justify-between gap-3 flex-wrap shadow-md">
                    <div class="flex items-center gap-2.5">
                      <span class="text-lg">📢</span>
                      <span class="font-black text-xs sm:text-sm">
                        核心精華口訣：先審壞事（TB＋R）➔ 常理推定壞人（S）➔ 雙重推定遇反證即刻推翻！
                      </span>
                    </div>
                    <span class="text-[11px] font-bold bg-white/20 backdrop-blur-xs px-2.5 py-0.5 rounded-full text-white">
                      三階雛形核心思維
                    </span>
                  </div>

                </div>

              </div>
            </section>

            <!-- SECTION 13: 目的犯罪體系與客觀／主觀要件之開展 (教材第 1-9 頁) -->
            <section id="sec-teleological-system" class="scroll-mt-28 space-y-4">
              <div class="flex items-center gap-2">
                <span class="w-2.5 h-2.5 rounded-full bg-amber-500 shadow-md shadow-amber-500/50"></span>
                <h3 class="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                  十三、目的犯罪體系與客觀／主觀要件之開展
                </h3>
              </div>

              <!-- 主容器：高飽和琥珀/夕陽金漸層面板 -->
              <div class="p-6 sm:p-8 rounded-3xl border-2 border-amber-500 dark:border-amber-400 bg-gradient-to-b from-amber-50/70 via-white to-orange-50/40 dark:from-[#21160a] dark:via-[#101623] dark:to-[#171008] shadow-xl space-y-6 text-sm sm:text-base leading-relaxed text-slate-700 dark:text-slate-200">
                
                <!-- 標題欄 -->
                <div class="flex items-center justify-between border-b-2 border-amber-200 dark:border-amber-800/60 pb-3">
                  <div class="flex items-center gap-2.5">
                    <span class="text-2xl">🎯</span>
                    <span class="font-black text-base sm:text-lg text-amber-900 dark:text-amber-200 tracking-wide">目的犯罪體系之開展</span>
                  </div>
                  <span class="text-xs font-mono px-3 py-1 rounded-full bg-amber-500 text-white font-bold shadow-sm shadow-amber-500/30">
                    教材第 1-9 頁
                  </span>
                </div>

                <p class="font-medium text-slate-800 dark:text-slate-200">
                  基於三階論，我們再為他添加些內涵：傳統古典體系將不法與心靈硬生生切開，而現今的目的體系則將「人的意識目的」注入不法評價之中。
                </p>

                <!-- 學說發展對比卡片 (早期古典 vs 現今目的) -->
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                  
                  <!-- 早期學說：古典犯罪體系 -->
                  <div class="p-5 rounded-2xl border-2 border-slate-300 dark:border-slate-700 bg-slate-100/80 dark:bg-slate-900/70 shadow-sm space-y-3">
                    <div class="flex items-center justify-between pb-2 border-b border-slate-200 dark:border-slate-800">
                      <span class="text-xs font-bold px-2.5 py-1 rounded-lg bg-slate-300 dark:bg-slate-700 text-slate-700 dark:text-slate-200">
                        早期學說
                      </span>
                      <span class="text-xs font-black text-slate-500 dark:text-slate-400">古典犯罪體系（Liszt-Beling）</span>
                    </div>
                    <ul class="text-xs sm:text-sm space-y-2 text-slate-700 dark:text-slate-300">
                      <li class="flex items-start gap-2">
                        <span class="text-slate-400 font-bold">•</span>
                        <span>不法是壞事的外在判斷 ➔ <strong class="text-slate-900 dark:text-white font-black underline decoration-slate-400 decoration-2">純客觀的</strong>（只管發生了什麼物理損害）</span>
                      </li>
                      <li class="flex items-start gap-2">
                        <span class="text-slate-400 font-bold">•</span>
                        <span>罪責是壞人的內在判斷 ➔ <strong class="text-slate-900 dark:text-white font-black underline decoration-slate-400 decoration-2">純主觀的</strong>（故意與過失全塞在第三階）</span>
                      </li>
                    </ul>
                    <div class="p-2.5 rounded-xl bg-slate-200/60 dark:bg-slate-800/70 text-[11px] text-slate-600 dark:text-slate-400">
                      ⚠️ 缺陷：外在動作完全相同的持槍射擊，抽空主觀目的就無法判斷是殺人還是獵鳥！
                    </div>
                  </div>

                  <!-- 現今學說：目的犯罪體系 -->
                  <div class="p-5 rounded-2xl border-2 border-blue-500 dark:border-blue-400 bg-gradient-to-br from-blue-50/90 to-sky-50/50 dark:from-blue-950/40 dark:to-sky-950/20 shadow-md space-y-3">
                    <div class="flex items-center justify-between pb-2 border-b border-blue-200 dark:border-blue-800/60">
                      <span class="text-xs font-black px-2.5 py-1 rounded-lg bg-blue-600 text-white shadow-sm shadow-blue-500/30">
                        現今學說（通說）
                      </span>
                      <span class="text-xs font-black text-blue-700 dark:text-blue-300">目的犯罪體系（Welzel）</span>
                    </div>
                    <ul class="text-xs sm:text-sm space-y-2 text-slate-800 dark:text-slate-200">
                      <li class="flex items-start gap-2">
                        <span class="text-blue-500 font-bold">•</span>
                        <span>受<strong class="text-blue-700 dark:text-blue-300 font-black">「目的行為理論」</strong>深刻影響（人的動作是由意志導向目標的）</span>
                      </li>
                      <li class="flex items-start gap-2">
                        <span class="text-blue-500 font-bold">•</span>
                        <span>認為<strong class="text-blue-700 dark:text-blue-300 font-black">「目的」</strong>乃判斷行為是否為「不法」的重要基礎</span>
                      </li>
                      <li class="flex items-start gap-2">
                        <span class="text-blue-500 font-bold">•</span>
                        <span>不法不是純客觀的，而是<strong class="text-blue-700 dark:text-blue-300 font-black underline decoration-blue-500 decoration-2">「客觀＋主觀的綜合評價」</strong>！</span>
                      </li>
                    </ul>
                    <div class="p-2.5 rounded-xl bg-blue-100/70 dark:bg-blue-900/40 text-[11px] text-blue-800 dark:text-blue-200 font-medium">
                      💡 核心：故意不再只是罪責，而是一開始就決定行為性質的「不法主觀構成要件」！
                    </div>
                  </div>

                </div>

                <!-- 不法階層之客觀與主觀要件展開 -->
                <div class="p-6 rounded-2xl border-2 border-indigo-400 dark:border-indigo-500 bg-white dark:bg-[#121a2d] shadow-md space-y-4">
                  <div class="flex items-center justify-between pb-3 border-b border-indigo-100 dark:border-indigo-900/50">
                    <span class="text-sm font-black text-indigo-950 dark:text-indigo-200 flex items-center gap-2">
                      <span class="text-lg">📌</span>
                      <span>不法階層之客觀與主觀要件全面展開</span>
                    </span>
                    <span class="text-xs font-mono px-3 py-1 rounded-full bg-indigo-500 text-white font-bold shadow-sm shadow-indigo-500/30">
                      目的犯罪體系之最大特徵
                    </span>
                  </div>
                  
                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    
                    <!-- TB 展開 -->
                    <div class="p-4 rounded-xl bg-gradient-to-br from-sky-50 to-blue-50/50 dark:from-sky-950/30 dark:to-blue-950/20 border-2 border-sky-400 dark:border-sky-600 space-y-2">
                      <div class="flex items-center justify-between">
                        <span class="font-black text-sky-800 dark:text-sky-300 text-sm">構成要件該當性 (TB)</span>
                        <span class="text-[11px] font-bold px-2 py-0.5 rounded bg-sky-500 text-white">行為型態</span>
                      </div>
                      <div class="text-xs space-y-1.5 text-slate-700 dark:text-slate-300 pt-1">
                        <div class="flex items-center gap-1.5">
                          <span class="w-1.5 h-1.5 rounded-full bg-sky-500"></span>
                          <span><strong class="text-sky-900 dark:text-sky-200 font-bold">客觀構成要件：</strong>行為人、行為、結果、因果關係</span>
                        </div>
                        <div class="flex items-center gap-1.5">
                          <span class="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
                          <span><strong class="text-blue-900 dark:text-blue-200 font-bold">主觀構成要件：</strong>故意（知＋欲）或 過失</span>
                        </div>
                      </div>
                    </div>

                    <!-- R 展開 -->
                    <div class="p-4 rounded-xl bg-gradient-to-br from-violet-50 to-purple-50/50 dark:from-violet-950/30 dark:to-purple-950/20 border-2 border-purple-400 dark:border-purple-600 space-y-2">
                      <div class="flex items-center justify-between">
                        <span class="font-black text-purple-800 dark:text-purple-300 text-sm">違法性 (R)</span>
                        <span class="text-[11px] font-bold px-2 py-0.5 rounded bg-purple-600 text-white">阻卻事由</span>
                      </div>
                      <div class="text-xs space-y-1.5 text-slate-700 dark:text-slate-300 pt-1">
                        <div class="flex items-center gap-1.5">
                          <span class="w-1.5 h-1.5 rounded-full bg-violet-500"></span>
                          <span><strong class="text-violet-900 dark:text-violet-200 font-bold">客觀阻卻違法要件：</strong>防衛情狀、手段適當性</span>
                        </div>
                        <div class="flex items-center gap-1.5">
                          <span class="w-1.5 h-1.5 rounded-full bg-purple-600"></span>
                          <span><strong class="text-purple-900 dark:text-purple-200 font-bold">主觀阻卻違法要件：</strong>防衛意思、緊急避難意思</span>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>

                <!-- ⚠️ 關鍵推翻鐵律卡片 -->
                <div class="p-5 sm:p-6 rounded-2xl border-2 border-rose-500 dark:border-rose-400 bg-gradient-to-br from-rose-50 via-white to-red-50/60 dark:from-[#2a0e14] dark:via-[#190a0f] dark:to-[#170509] shadow-lg space-y-3">
                  <div class="flex items-center gap-2.5 font-black text-rose-700 dark:text-rose-300 text-base">
                    <span class="text-xl">⚠️</span>
                    <span>違法性推定之推翻鐵律（教材第 1-9 頁原文）</span>
                  </div>
                  <blockquote class="text-sm sm:text-base text-slate-800 dark:text-slate-100 leading-relaxed pl-4 border-l-4 border-rose-500 bg-rose-100/40 dark:bg-rose-950/40 py-2.5 rounded-r-xl font-medium">
                    「此外，構成要件該當發生推定效力後，要想推翻違法性推定，<strong class="text-rose-600 dark:text-rose-400 font-black underline decoration-rose-500 decoration-2">必須阻卻違法事由客、主觀要件均該當</strong>，否則推定效力將繼續維持，只能進入罪責審查。」
                  </blockquote>
                </div>

                <!-- 💡 白話文超展開專區 -->
                <div class="p-6 rounded-3xl border-2 border-amber-400 dark:border-amber-500/80 bg-gradient-to-br from-amber-50/90 via-orange-50/40 to-yellow-50/30 dark:from-[#24170a] dark:via-[#1a1308] dark:to-[#171005] shadow-lg space-y-5">
                  <div class="flex items-center justify-between pb-3 border-b-2 border-amber-300 dark:border-amber-700/60">
                    <div class="flex items-center gap-2">
                      <span class="text-2xl">💡</span>
                      <h4 class="font-black text-amber-950 dark:text-amber-200 text-base sm:text-lg">
                        白話文超展開：古典體系 vs 目的體系之演進（為什麼故意要搬家？）
                      </h4>
                    </div>
                    <span class="text-xs font-black px-3 py-1 rounded-full bg-amber-500 text-white shadow-sm shadow-amber-500/30">
                      核心白話通解
                    </span>
                  </div>

                  <!-- 3大白話拆解卡片 -->
                  <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                    
                    <!-- 卡片 1 -->
                    <div class="p-4 rounded-2xl bg-white/90 dark:bg-slate-900/80 border-2 border-slate-300 dark:border-slate-700 space-y-2.5 shadow-sm">
                      <div class="flex items-center gap-2 font-black text-slate-800 dark:text-slate-100 text-sm">
                        <span class="w-6 h-6 rounded-full bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-200 flex items-center justify-center text-xs font-bold">1</span>
                        <span>古典體系：外在歸外在、內心歸內心</span>
                      </div>
                      <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                        以前學者認為：第一階只看「外在發生的物理事實」（開槍、人死、物品碎裂）；心裡到底想幹嘛（故意還是過失）全部堆在第三階再來算帳。
                      </p>
                      <div class="p-2 rounded-lg bg-slate-100 dark:bg-slate-800/80 text-[11px] text-slate-500 dark:text-slate-400">
                        💬 致命傷：不看大腦意圖，根本無法界定這開槍動作是在「殺人」還是「打靶」！
                      </div>
                    </div>

                    <!-- 卡片 2 -->
                    <div class="p-4 rounded-2xl bg-white/90 dark:bg-slate-900/80 border-2 border-blue-400 dark:border-blue-600 space-y-2.5 shadow-sm">
                      <div class="flex items-center gap-2 font-black text-blue-900 dark:text-blue-200 text-sm">
                        <span class="w-6 h-6 rounded-full bg-blue-500 text-white flex items-center justify-center text-xs font-bold">2</span>
                        <span>目的體系：人有大腦，故意也是不法！</span>
                      </div>
                      <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                        現代刑法發現：人類行為是有「目的性」的！你「故意瞄準仇人心臟開槍」跟「手滑走火誤傷路人」，所製造的不法本質天差地遠！所以故意、過失必須在第一階（TB）就列入審查！
                      </p>
                      <div class="p-2 rounded-lg bg-blue-50 dark:bg-blue-950/40 text-[11px] text-blue-700 dark:text-blue-300 font-medium">
                        💬 成果：第一階同時檢查「客觀做了啥」＋「主觀想幹嘛」，不法定性精準無誤！
                      </div>
                    </div>

                    <!-- 卡片 3 -->
                    <div class="p-4 rounded-2xl bg-white/90 dark:bg-slate-900/80 border-2 border-rose-400 dark:border-rose-600 space-y-2.5 shadow-sm">
                      <div class="flex items-center gap-2 font-black text-rose-900 dark:text-rose-200 text-sm">
                        <span class="w-6 h-6 rounded-full bg-rose-500 text-white flex items-center justify-center text-xs font-bold">3</span>
                        <span>推翻鐵律：不能只是「剛好湊巧」！</span>
                      </div>
                      <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                        要洗白「做壞事」的惡名，阻卻違法必須「客觀＋主觀」同時合格！如果你想謀殺仇人開槍打死他，事後才發現他口袋剛好要拔槍搶銀行（偶然防衛），你客觀救了人，但主觀純粹要殺人，法律絕不容許推翻不法！
                      </p>
                      <div class="p-2 rounded-lg bg-rose-50 dark:bg-rose-950/40 text-[11px] text-rose-700 dark:text-rose-300 font-medium">
                        💬 原則：主客觀缺一不可，否則違法性推定繼續成立，依法追究刑事責任！
                      </div>
                    </div>

                  </div>

                  <!-- 核心記憶口訣列 -->
                  <div class="p-4 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-md flex items-center gap-3">
                    <span class="text-2xl">📢</span>
                    <div class="text-xs sm:text-sm font-black tracking-wide">
                      核心精華口訣：行為受目的支配（不法含主客觀）➔ 阻卻不法需雙該當（客主兼備方推翻）！
                    </div>
                  </div>

                </div>

              </div>

            </section>

            <!-- ==================== 十四、犯罪三階層體系（完整）與推翻違法性之實例檢驗 ==================== -->
            <section id="sec-complete-three-stages" class="p-6 sm:p-8 rounded-3xl border-2 border-indigo-500/80 dark:border-indigo-400/80 bg-gradient-to-b from-indigo-50/50 via-white to-sky-50/40 dark:from-[#131b2c] dark:via-[#0e1422] dark:to-[#121a28] shadow-2xl space-y-7">
              
              <div class="flex items-center justify-between border-b-2 border-indigo-200 dark:border-indigo-800/60 pb-3">
                <div class="flex items-center gap-2.5">
                  <span class="px-3 py-1 rounded-full text-xs font-bold bg-indigo-500 text-white font-mono shadow-sm shadow-indigo-500/30">教材第 1-10 頁</span>
                  <span class="text-xs font-semibold text-slate-500 dark:text-slate-400">三階完整架構與推翻檢驗</span>
                </div>
                <span class="text-xs font-bold px-2.5 py-0.5 rounded-md bg-indigo-100 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300">通說體系實證</span>
              </div>

              <div class="space-y-2">
                <h3 class="text-xl sm:text-2xl font-black text-indigo-950 dark:text-white tracking-tight flex items-center gap-2">
                  <span>🏛️</span>
                  <span>十四、犯罪三階層體系（完整）與推翻違法性之實例檢驗</span>
                </h3>
                <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-medium">
                  貫徹第 1-9 頁「阻卻違法事由客、主觀要件均該當方能推翻推定」鐵律，透過案例 1-16 與 1-17 進行實證檢驗。
                </p>
              </div>

              <!-- 完整三階層架構視覺圖解卡片 -->
              <div class="p-6 sm:p-7 rounded-3xl border-2 border-blue-500 dark:border-blue-400 bg-gradient-to-br from-blue-50/80 via-white to-indigo-50/60 dark:from-blue-950/30 dark:via-slate-900/60 dark:to-indigo-950/30 shadow-xl space-y-5">
                <div class="flex items-center justify-between pb-3 border-b-2 border-blue-200 dark:border-blue-800/60">
                  <div class="font-black text-base text-blue-900 dark:text-blue-200 flex items-center gap-2">
                    <span class="text-xl">🏛️</span>
                    <span>犯罪三階層體系（完整）原文架構圖</span>
                  </div>
                  <span class="text-xs font-mono px-3 py-1 rounded-full bg-blue-600 text-white font-bold shadow-sm shadow-blue-500/30">
                    教材第 1-10 頁原文
                  </span>
                </div>

                <!-- 流程圖視覺卡片 (TB, R, S 三大立體支柱) -->
                <div class="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs sm:text-sm">
                  
                  <!-- TB -->
                  <div class="p-5 rounded-2xl border-2 border-sky-400 dark:border-sky-500 bg-white dark:bg-slate-900 shadow-md space-y-3 flex flex-col justify-between">
                    <div class="space-y-2.5">
                      <div class="flex items-center justify-between pb-2 border-b border-sky-100 dark:border-sky-900/50">
                        <span class="font-black text-sky-700 dark:text-sky-300 text-base">TB (構成要件)</span>
                        <span class="text-[11px] font-bold px-2 py-0.5 rounded bg-sky-500 text-white">階層一</span>
                      </div>
                      <ul class="space-y-1.5 text-slate-700 dark:text-slate-300">
                        <li class="flex items-start gap-1.5">
                          <span class="w-1.5 h-1.5 rounded-full bg-sky-500 mt-1.5"></span>
                          <span><strong class="text-slate-900 dark:text-white">客觀要件：</strong>外在行為、侵害結果、因果關係</span>
                        </li>
                        <li class="flex items-start gap-1.5">
                          <span class="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5"></span>
                          <span><strong class="text-slate-900 dark:text-white">主觀要件：</strong>故意（知＋欲）或 過失</span>
                        </li>
                      </ul>
                    </div>
                    <div class="pt-3 text-center text-amber-600 dark:text-amber-400 font-black text-xs border-t-2 border-dashed border-amber-200 dark:border-amber-800/60 bg-amber-50/50 dark:bg-amber-950/30 p-2 rounded-xl">
                      ⬇️ 推定違法性（壞事推定）
                    </div>
                  </div>

                  <!-- R -->
                  <div class="p-5 rounded-2xl border-2 border-amber-500 dark:border-amber-400 bg-white dark:bg-slate-900 shadow-md space-y-3 flex flex-col justify-between">
                    <div class="space-y-2.5">
                      <div class="flex items-center justify-between pb-2 border-b border-amber-100 dark:border-amber-900/50">
                        <span class="font-black text-amber-700 dark:text-amber-300 text-base">R (違法性)</span>
                        <span class="text-[11px] font-bold px-2 py-0.5 rounded bg-amber-500 text-white">階層二</span>
                      </div>
                      <ul class="space-y-1.5 text-slate-700 dark:text-slate-300">
                        <li class="flex items-start gap-1.5">
                          <span class="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5"></span>
                          <span><strong class="text-slate-900 dark:text-white">客觀阻卻要件：</strong>防衛情狀、手段適當性</span>
                        </li>
                        <li class="flex items-start gap-1.5">
                          <span class="w-1.5 h-1.5 rounded-full bg-orange-600 mt-1.5"></span>
                          <span><strong class="text-slate-900 dark:text-white">主觀阻卻要件：</strong>防衛意思、避難意思</span>
                        </li>
                      </ul>
                    </div>
                    <div class="pt-3 text-emerald-700 dark:text-emerald-300 font-black text-xs border-t-2 border-dashed border-emerald-300 dark:border-emerald-800/60 bg-emerald-50/80 dark:bg-emerald-950/40 p-2 rounded-xl text-center">
                      🔄 阻卻 R 事由反證推翻（⚠️ 需客主觀均該當）
                    </div>
                  </div>

                  <!-- S -->
                  <div class="p-5 rounded-2xl border-2 border-purple-400 dark:border-purple-500 bg-white dark:bg-slate-900 shadow-md space-y-3 flex flex-col justify-between">
                    <div class="space-y-2.5">
                      <div class="flex items-center justify-between pb-2 border-b border-purple-100 dark:border-purple-900/50">
                        <span class="font-black text-purple-700 dark:text-purple-300 text-base">S (罪責)</span>
                        <span class="text-[11px] font-bold px-2 py-0.5 rounded bg-purple-600 text-white">階層三</span>
                      </div>
                      <p class="text-slate-700 dark:text-slate-300 leading-relaxed text-xs">
                        不法行為推定行為人具期待可能性（對壞人進行非難評價）。
                      </p>
                    </div>
                    <div class="pt-3 text-emerald-700 dark:text-emerald-300 font-black text-xs border-t-2 border-dashed border-emerald-300 dark:border-emerald-800/60 bg-emerald-50/80 dark:bg-emerald-950/40 p-2 rounded-xl text-center">
                      🔄 阻卻 S 事由反證推翻（期待可能性欠缺）
                    </div>
                  </div>

                </div>
              </div>

              <!-- 兩大經典案例卡片 (案例 1-16 & 1-17) -->
              <div class="space-y-6">
                <div class="font-black text-base text-slate-900 dark:text-white flex items-center gap-2">
                  <span class="text-xl">⚖️</span>
                  <span>教材實例檢驗：客觀與主觀要件欠缺之效果對比</span>
                </div>

                <!-- 案例 1-16 卡片：誤想防衛（欠缺客觀情狀） -->
                <div class="p-6 rounded-3xl border-2 border-amber-500 dark:border-amber-400 bg-gradient-to-br from-amber-50/70 via-white to-orange-50/30 dark:from-[#21160a] dark:via-[#131b2a] dark:to-[#191108] shadow-xl space-y-4">
                  <div class="flex items-center justify-between pb-3 border-b-2 border-amber-200 dark:border-amber-800/60">
                    <span class="text-sm font-black text-amber-900 dark:text-amber-200">◆ 案例 1-16 ◆ 【誤想防衛】先發制人打傷問路人</span>
                    <span class="text-xs font-mono px-3 py-1 rounded-full bg-rose-500 text-white font-black shadow-sm shadow-rose-500/30">
                      違法性推定維持
                    </span>
                  </div>

                  <!-- 案件事實引述 -->
                  <blockquote class="text-xs sm:text-sm text-slate-800 dark:text-slate-200 pl-4 border-l-4 border-amber-500 py-1 bg-amber-100/40 dark:bg-amber-950/30 rounded-r-xl leading-relaxed font-medium">
                    「由於乙天生一副兇神惡煞貌，致使甲誤以為前來問路的乙對自己不懷好意，因此本於保護自己的意思先發制人，將乙打成輕傷。」
                  </blockquote>

                  <!-- 被告心聲自白 -->
                  <div class="p-3.5 rounded-xl bg-orange-100/70 dark:bg-orange-950/40 border border-orange-300 dark:border-orange-800/50 flex items-start gap-2.5">
                    <span class="text-xl">🗣️</span>
                    <div class="text-xs sm:text-sm text-orange-950 dark:text-orange-200 leading-relaxed">
                      <strong class="font-black text-orange-800 dark:text-orange-300">甲（被告）的崩潰自白：</strong>
                      「法官大人，他滿臉橫肉、氣勢洶洶朝我走過來，我以為他是要掏刀搶劫啊！我是為了保護自己才先揮拳自衛的，我哪知道他只是要問路？！」
                    </div>
                  </div>

                  <!-- 審查體系三階拆解 -->
                  <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                    <div class="p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-1">
                      <span class="font-bold text-sky-600 dark:text-sky-400">第一階 TB (構成要件)</span>
                      <p class="text-slate-600 dark:text-slate-300">甲出拳打乙成傷，該當 § 277 傷害罪，<strong class="text-amber-600 dark:text-amber-400">推定違法性</strong>。</p>
                    </div>
                    <div class="p-3 rounded-xl bg-rose-50/60 dark:bg-rose-950/30 border-2 border-rose-400 dark:border-rose-600 space-y-1">
                      <span class="font-bold text-rose-700 dark:text-rose-300">第二階 R (違法性檢驗)</span>
                      <p class="text-slate-700 dark:text-slate-200">
                        ✔️ 有防衛意思<br>
                        ❌ <strong class="text-rose-600 dark:text-rose-400">無防衛情狀（乙只是問路）</strong><br>
                        ➔ 欠缺客觀要件，<strong class="text-rose-600 dark:text-rose-400 underline">推定不倒，仍屬不法</strong>！
                      </p>
                    </div>
                    <div class="p-3 rounded-xl bg-purple-50/60 dark:bg-purple-950/30 border border-purple-300 dark:border-purple-700 space-y-1">
                      <span class="font-bold text-purple-700 dark:text-purple-300">第三階 S (罪責檢驗)</span>
                      <p class="text-slate-700 dark:text-slate-200">
                        甲誤認有防衛情狀（容許構成要件錯誤），阻卻罪責故意，<strong class="text-purple-700 dark:text-purple-300 font-bold">僅論以過失傷害罪</strong>。
                      </p>
                    </div>
                  </div>

                  <!-- 教材問題導引 -->
                  <div class="p-4 rounded-xl bg-amber-50/80 dark:bg-amber-950/40 border border-amber-500/40 space-y-1.5 text-xs">
                    <div class="font-bold text-amber-800 dark:text-amber-300 flex items-center gap-1.5">
                      <span>💡</span>
                      <span>【問題導引】(教材第 1-10 頁原文精析)</span>
                    </div>
                    <p class="text-slate-700 dark:text-slate-300 leading-relaxed">
                      甲該當傷害罪的構成要件（§ 277），由於僅能滿足正當防衛的主觀要件（防衛意思），欠缺客觀上的防衛情狀，<strong class="text-rose-600 dark:text-rose-400 font-bold">不生推翻違法的效力</strong>，必須繼續進行罪責的審查。
                    </p>
                  </div>

                  <!-- 法規查核 -->
                  <div class="pt-2 border-t border-slate-200 dark:border-slate-800 text-[11px] text-slate-500 dark:text-slate-400 space-y-1">
                    <div class="flex items-center gap-1.5 font-semibold text-slate-700 dark:text-slate-300">
                      <span>📜 2026 現行法規查核：</span>
                      <span class="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-[10px] font-bold">條文無更動（維持現行法）</span>
                    </div>
                    <p>刑法 § 277 第 1 項傷害罪（108年提高罰金刑至五十萬元）。學理上為典型「誤想防衛」，實務多數採限制法律效果之責任說，不具罪責故意，僅得依過失傷害論處。</p>
                  </div>
                </div>

                <!-- 案例 1-17 卡片：偶然防衛（欠缺主觀意思） -->
                <div class="p-6 rounded-3xl border-2 border-rose-500 dark:border-rose-400 bg-gradient-to-br from-rose-50/70 via-white to-red-50/30 dark:from-[#280c12] dark:via-[#151a28] dark:to-[#1f090d] shadow-xl space-y-4">
                  <div class="flex items-center justify-between pb-3 border-b-2 border-rose-200 dark:border-rose-800/60">
                    <span class="text-sm font-black text-rose-900 dark:text-rose-200">◆ 案例 1-17 ◆ 【偶然防衛】巧合射殺暗中瞄準之仇家</span>
                    <span class="text-xs font-mono px-3 py-1 rounded-full bg-rose-600 text-white font-black shadow-sm shadow-rose-500/30">
                      違法性推定維持
                    </span>
                  </div>

                  <!-- 案件事實引述 -->
                  <blockquote class="text-xs sm:text-sm text-slate-800 dark:text-slate-200 pl-4 border-l-4 border-rose-500 py-1 bg-rose-100/40 dark:bg-rose-950/30 rounded-r-xl leading-relaxed font-medium">
                    「角頭老大甲某日在路邊某巷道時，發現對向走來的乃是新興幫派的老大乙，甲心想先下手為強而掏槍將乙射殺。殊不知在此之前，乙放在口袋內的手也正用手槍瞄準甲，想致甲於死地。」
                  </blockquote>

                  <!-- 被告心聲自白 -->
                  <div class="p-3.5 rounded-xl bg-red-100/70 dark:bg-red-950/40 border border-red-300 dark:border-red-800/50 flex items-start gap-2.5">
                    <span class="text-xl">🗣️</span>
                    <div class="text-xs sm:text-sm text-red-950 dark:text-red-200 leading-relaxed">
                      <strong class="font-black text-red-800 dark:text-red-300">甲（幫派角頭）的狡辯自白：</strong>
                      「法官大人，鑑識報告都寫了，乙口袋裡的手槍保險已經打開、正對著我的胸口！我開槍剛好打死要殺我的人，客觀上就是百分之百的保命自衛，憑什麼判我有罪？！」
                    </div>
                  </div>

                  <!-- 審查體系三階拆解 -->
                  <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                    <div class="p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-1">
                      <span class="font-bold text-sky-600 dark:text-sky-400">第一階 TB (構成要件)</span>
                      <p class="text-slate-600 dark:text-slate-300">甲開槍擊斃乙，該當 § 271 殺人罪，<strong class="text-amber-600 dark:text-amber-400">推定違法性</strong>。</p>
                    </div>
                    <div class="p-3 rounded-xl bg-rose-50/60 dark:bg-rose-950/30 border-2 border-rose-400 dark:border-rose-600 space-y-1">
                      <span class="font-bold text-rose-700 dark:text-rose-300">第二階 R (違法性檢驗)</span>
                      <p class="text-slate-700 dark:text-slate-200">
                        ✔️ 有防衛情狀（乙正要掏槍暗算）<br>
                        ❌ <strong class="text-rose-600 dark:text-rose-400">無防衛意思（甲純粹想謀殺）</strong><br>
                        ➔ 欠缺主觀要件，<strong class="text-rose-600 dark:text-rose-400 underline">推定不倒，仍屬不法</strong>！
                      </p>
                    </div>
                    <div class="p-3 rounded-xl bg-purple-50/60 dark:bg-purple-950/30 border border-purple-300 dark:border-purple-700 space-y-1">
                      <span class="font-bold text-purple-700 dark:text-purple-300">第三階 S (罪責檢驗)</span>
                      <p class="text-slate-700 dark:text-slate-200">
                        甲具殺人故意與責任能力，無阻卻罪責事由，<strong class="text-rose-600 dark:text-rose-400 font-bold">論以殺人罪（實務既遂／學說未遂）</strong>。
                      </p>
                    </div>
                  </div>

                  <!-- 教材問題導引 -->
                  <div class="p-4 rounded-xl bg-amber-50/80 dark:bg-amber-950/40 border border-amber-500/40 space-y-1.5 text-xs">
                    <div class="font-bold text-amber-800 dark:text-amber-300 flex items-center gap-1.5">
                      <span>💡</span>
                      <span>【問題導引】(教材第 1-10 ～ 1-11 頁原文精析)</span>
                    </div>
                    <p class="text-slate-700 dark:text-slate-300 leading-relaxed">
                      甲該當殺人罪的構成要件（§ 271），由於僅能滿足正當防衛的客觀要件（防衛情狀與防衛行為），欠缺主觀上的防衛意思，<strong class="text-rose-600 dark:text-rose-400 font-bold">仍不發生推翻違法的效力</strong>，必須繼續進行罪責的審查。
                    </p>
                  </div>

                  <!-- 法規查核 -->
                  <div class="pt-2 border-t border-slate-200 dark:border-slate-800 text-[11px] text-slate-500 dark:text-slate-400 space-y-1">
                    <div class="flex items-center gap-1.5 font-semibold text-slate-700 dark:text-slate-300">
                      <span>📜 2026 現行法規查核：</span>
                      <span class="px-2 py-0.5 rounded bg-amber-500/10 text-amber-600 dark:text-amber-400 text-[10px] font-bold">受重大憲法裁判拘束</span>
                    </div>
                    <p>刑法 § 271 普通殺人罪受 113年憲判字第8號拘束（死刑僅限個案犯罪情節最嚴重且踐行最嚴格程序）。學理上為典型「偶然防衛」，通說實務認不阻卻違法，論以既遂或類推未遂處罰。</p>
                  </div>
                </div>

              </div>

              <!-- 💡 白話文超展開專區：誤想防衛 vs 偶然防衛 -->
              <div class="p-6 rounded-3xl border-2 border-indigo-400 dark:border-indigo-500/80 bg-gradient-to-br from-indigo-50/90 via-sky-50/40 to-blue-50/30 dark:from-[#171e30] dark:via-[#111827] dark:to-[#0f172a] shadow-xl space-y-5">
                <div class="flex items-center justify-between pb-3 border-b-2 border-indigo-200 dark:border-indigo-800/60">
                  <div class="flex items-center gap-2">
                    <span class="text-2xl">💡</span>
                    <h4 class="font-black text-indigo-950 dark:text-indigo-200 text-base sm:text-lg">
                      白話文超展開：誤想防衛 vs 偶然防衛（照妖鏡大對決）
                    </h4>
                  </div>
                  <span class="text-xs font-black px-3 py-1 rounded-full bg-indigo-600 text-white shadow-sm shadow-indigo-500/30">
                    一表看懂核心
                  </span>
                </div>

                <!-- 3大白話拆解卡片 -->
                <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                  
                  <!-- 卡片 1 -->
                  <div class="p-4 rounded-2xl bg-white/90 dark:bg-slate-900/80 border-2 border-amber-400 dark:border-amber-600 space-y-2.5 shadow-sm">
                    <div class="flex items-center gap-2 font-black text-amber-900 dark:text-amber-200 text-sm">
                      <span class="w-6 h-6 rounded-full bg-amber-500 text-white flex items-center justify-center text-xs font-bold">1</span>
                      <span>誤想防衛：想得美，外面沒事（幻覺型）</span>
                    </div>
                    <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      心裡滿腔熱血想防衛，但外面世界根本風平浪靜！你把問路的無辜路人當仇家暴打。
                    </p>
                    <div class="p-2 rounded-lg bg-amber-50 dark:bg-amber-950/40 text-[11px] text-amber-800 dark:text-amber-300 font-medium">
                      🎯 關鍵：欠缺客觀要件 ➔ 違法性推定不倒（依然是不法傷害），但念你心存善念，罪責階層降等為「過失犯」！
                    </div>
                  </div>

                  <!-- 卡片 2 -->
                  <div class="p-4 rounded-2xl bg-white/90 dark:bg-slate-900/80 border-2 border-rose-400 dark:border-rose-600 space-y-2.5 shadow-sm">
                    <div class="flex items-center gap-2 font-black text-rose-900 dark:text-rose-200 text-sm">
                      <span class="w-6 h-6 rounded-full bg-rose-500 text-white flex items-center justify-center text-xs font-bold">2</span>
                      <span>偶然防衛：心超黑，碰巧撞大運（巧合型）</span>
                    </div>
                    <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      心裡只想著暗算殺人，開槍打死對方後，才發現對方剛好也在瞄準你！
                    </p>
                    <div class="p-2 rounded-lg bg-rose-50 dark:bg-rose-950/40 text-[11px] text-rose-800 dark:text-rose-300 font-medium">
                      🎯 關鍵：欠缺主觀要件 ➔ 法律絕不當壞人的免死金牌，違法性推定維持，依法論以殺人罪！
                    </div>
                  </div>

                  <!-- 卡片 3 -->
                  <div class="p-4 rounded-2xl bg-white/90 dark:bg-slate-900/80 border-2 border-emerald-400 dark:border-emerald-600 space-y-2.5 shadow-sm">
                    <div class="flex items-center gap-2 font-black text-emerald-900 dark:text-emerald-200 text-sm">
                      <span class="w-6 h-6 rounded-full bg-emerald-500 text-white flex items-center justify-center text-xs font-bold">3</span>
                      <span>推翻鐵律：天平兩端必須同時及格！</span>
                    </div>
                    <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      要想推翻違法性推定，「客觀情狀」與「主觀意思」就像鳥的雙翼，少一隻就飛不起來！
                    </p>
                    <div class="p-2 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 text-[11px] text-emerald-800 dark:text-emerald-300 font-medium">
                      🎯 關鍵：客觀欠缺（誤想）或 主觀欠缺（偶然），推定效力都牢不可破，無法阻卻違法！
                    </div>
                  </div>

                </div>

                <!-- 核心記憶口訣列 -->
                <div class="p-4 rounded-2xl bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white shadow-md flex items-center gap-3">
                  <span class="text-2xl">📢</span>
                  <div class="text-xs sm:text-sm font-black tracking-wide">
                    核心精華口訣：誤想防衛欠客觀（心存善念轉過失）➔ 偶然防衛欠主觀（心黑撞運仍不法）！
                  </div>
                </div>

              </div>

            </section>

            <!-- ==================== 十五、犯罪二階層體系論（二階論）與「四塊拼圖說」 ==================== -->
            <section id="sec-two-stage-system" class="p-6 sm:p-8 rounded-3xl border-2 border-emerald-500 dark:border-emerald-400 bg-gradient-to-b from-emerald-50/60 via-white to-teal-50/40 dark:from-[#0a1e17] dark:via-[#0e1624] dark:to-[#0a1815] shadow-2xl space-y-7">
              
              <div class="flex items-center justify-between border-b-2 border-emerald-200 dark:border-emerald-800/60 pb-3">
                <div class="flex items-center gap-2.5">
                  <span class="px-3 py-1 rounded-full text-xs font-bold bg-emerald-600 text-white font-mono shadow-sm shadow-emerald-600/30">教材第 1-11 頁</span>
                  <span class="text-xs font-semibold text-slate-500 dark:text-slate-400">二階體系與拼圖理論</span>
                </div>
                <span class="text-xs font-bold px-2.5 py-0.5 rounded-md bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300">體系流派對比</span>
              </div>

              <div class="space-y-2">
                <h3 class="text-xl sm:text-2xl font-black text-emerald-950 dark:text-white tracking-tight flex items-center gap-2">
                  <span>🧩</span>
                  <span>十五、犯罪二階層體系論（簡稱二階論）與「四塊拼圖說」</span>
                </h3>
                <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-medium">
                  澄清二階論不區分 TB 與 R 的天大誤解！解析三階論與二階論本質上僅是「四塊拼圖」的不同排列組合。
                </p>
              </div>

              <!-- 核心誤解澄清醒目卡片 -->
              <div class="p-6 rounded-2xl border-2 border-indigo-500 dark:border-indigo-400 bg-gradient-to-br from-indigo-50/90 via-white to-purple-50/40 dark:from-indigo-950/40 dark:via-slate-900 dark:to-purple-950/30 shadow-lg space-y-3.5">
                <div class="flex items-center gap-2.5 font-black text-indigo-900 dark:text-indigo-200 text-sm sm:text-base">
                  <span class="text-xl">💡</span>
                  <span>二階論核心概念與天大誤解澄清（教材第 1-11 頁原文）</span>
                </div>
                <p class="text-xs sm:text-sm text-slate-700 dark:text-slate-200 leading-relaxed">
                  學理上另有主張「犯罪二階層體系論（簡稱二階論）」，與通說最大差異在建構不法的方式。<strong class="text-rose-600 dark:text-rose-400 font-black underline decoration-rose-500 decoration-2">很多人以為二階論不區分TB與R，這是個天大誤解</strong>！實際上二階論所有不法組成要件都與三階論完全相同，只是「排列組合方式」不同罷了！
                </p>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1 text-xs sm:text-sm">
                  <div class="p-4 rounded-xl bg-blue-50/80 dark:bg-blue-950/40 border-2 border-blue-400 dark:border-blue-600 space-y-1.5 shadow-xs">
                    <span class="font-black text-blue-700 dark:text-blue-300 flex items-center gap-1.5">
                      <span>🔵</span>
                      <span>三階論建構方式（橫向階層切分）：</span>
                    </span>
                    <p class="text-slate-700 dark:text-slate-300 text-xs leading-relaxed">
                      由「構成要件該當性 ➔ 違法性 ➔ 罪責」層層推進，先看整體行為有無犯罪該當，再看有無阻卻事由。
                    </p>
                  </div>
                  <div class="p-4 rounded-xl bg-emerald-50/80 dark:bg-emerald-950/40 border-2 border-emerald-400 dark:border-emerald-600 space-y-1.5 shadow-xs">
                    <span class="font-black text-emerald-700 dark:text-emerald-300 flex items-center gap-1.5">
                      <span>🟢</span>
                      <span>二階論建構方式（縱向客主觀切分）：</span>
                    </span>
                    <p class="text-slate-700 dark:text-slate-300 text-xs leading-relaxed">
                      由「客觀不法 ＋ 主觀不法 ➔ 罪責」雙軌推進，將 TB 與 R 拆解並重新組合成客觀與主觀兩大分支。
                    </p>
                  </div>
                </div>
              </div>

              <!-- 四塊拼圖理論展示區 -->
              <div class="space-y-4">
                <div class="font-black text-sm sm:text-base text-slate-900 dark:text-white flex items-center gap-2">
                  <span class="text-xl">🧩</span>
                  <span>不法之「四塊拼圖」組合對照表</span>
                </div>
                
                <!-- 4 塊立體發光拼圖卡片 -->
                <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center text-xs">
                  <div class="p-4 rounded-2xl border-2 border-sky-400 dark:border-sky-500 bg-sky-50 dark:bg-sky-950/50 shadow-md flex flex-col justify-center items-center gap-1">
                    <div class="text-2xl">🧩</div>
                    <div class="font-black text-sky-800 dark:text-sky-300 text-sm">① 客觀構成要件</div>
                    <span class="text-[11px] text-slate-500 dark:text-slate-400">行為、結果、因果</span>
                  </div>
                  <div class="p-4 rounded-2xl border-2 border-purple-400 dark:border-purple-500 bg-purple-50 dark:bg-purple-950/50 shadow-md flex flex-col justify-center items-center gap-1">
                    <div class="text-2xl">🧩</div>
                    <div class="font-black text-purple-800 dark:text-purple-300 text-sm">② 主觀構成要件</div>
                    <span class="text-[11px] text-slate-500 dark:text-slate-400">故意、過失</span>
                  </div>
                  <div class="p-4 rounded-2xl border-2 border-amber-400 dark:border-amber-500 bg-amber-50 dark:bg-amber-950/50 shadow-md flex flex-col justify-center items-center gap-1">
                    <div class="text-2xl">🧩</div>
                    <div class="font-black text-amber-800 dark:text-amber-300 text-sm">③ 客觀阻卻要件</div>
                    <span class="text-[11px] text-slate-500 dark:text-slate-400">防衛情狀、避難手段</span>
                  </div>
                  <div class="p-4 rounded-2xl border-2 border-rose-400 dark:border-rose-500 bg-rose-50 dark:bg-rose-950/50 shadow-md flex flex-col justify-center items-center gap-1">
                    <div class="text-2xl">🧩</div>
                    <div class="font-black text-rose-800 dark:text-rose-300 text-sm">④ 主觀阻卻要件</div>
                    <span class="text-[11px] text-slate-500 dark:text-slate-400">防衛意思、避難意思</span>
                  </div>
                </div>

                <!-- 拼圖不法加減公式卡片 -->
                <div class="p-5 rounded-2xl border-2 border-teal-400 dark:border-teal-500/60 bg-gradient-to-br from-teal-50/70 via-white to-emerald-50/50 dark:from-teal-950/30 dark:via-slate-900 dark:to-emerald-950/20 space-y-3 text-xs sm:text-sm">
                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div class="p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-teal-200 dark:border-teal-800 space-y-1">
                      <span class="font-black text-teal-800 dark:text-teal-300">客觀不法公式：</span>
                      <p class="text-slate-700 dark:text-slate-200">
                        「<strong>🧩 ① 客觀構成要件該當</strong>」 ➖ 「<strong>🧩 ③ 客觀阻卻違法要件</strong>」<br>
                        <span class="text-xs text-slate-500">（做了壞事，且沒有客觀正當防衛事由）</span>
                      </p>
                    </div>
                    <div class="p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-teal-200 dark:border-teal-800 space-y-1">
                      <span class="font-black text-teal-800 dark:text-teal-300">主觀不法公式：</span>
                      <p class="text-slate-700 dark:text-slate-200">
                        「<strong>🧩 ② 主觀構成要件該當</strong>」 ➖ 「<strong>🧩 ④ 主觀阻卻違法要件</strong>」<br>
                        <span class="text-xs text-slate-500">（想做壞事，且沒有主觀正當防衛意思）</span>
                      </p>
                    </div>
                  </div>
                  <p class="text-slate-600 dark:text-slate-300 text-xs leading-relaxed pt-2 border-t border-teal-200/80 dark:border-teal-800/60">
                    💡 <strong>核心精義</strong>：構成要件該當推定違法性原則，在二階論中將各自在「客觀不法」與「主觀不法」中產生推定作用。簡單說，不法就是由這四塊拼圖所組成，三階論與二階論只是四塊拼圖的擺放排列不同，因此兩種體系在絕大多數案件中都會得出完全相同的判決結論！
                  </p>
                </div>
              </div>

              <!-- 犯罪二階層體系論 原文結構圖解卡片 -->
              <div class="p-6 rounded-2xl border-2 border-emerald-500 dark:border-emerald-400 bg-gradient-to-br from-emerald-50/80 via-white to-teal-50/60 dark:from-emerald-950/30 dark:via-slate-900/60 dark:to-teal-950/30 shadow-lg space-y-4">
                <div class="flex items-center justify-between pb-3 border-b-2 border-emerald-200 dark:border-emerald-800/60">
                  <div class="font-black text-sm sm:text-base text-emerald-900 dark:text-emerald-200 flex items-center gap-2">
                    <span class="text-xl">📐</span>
                    <span>犯罪二階層體系論 原文結構圖解（縱向雙軌）</span>
                  </div>
                  <span class="text-xs font-mono px-3 py-1 rounded-full bg-emerald-600 text-white font-bold shadow-sm shadow-emerald-600/30">
                    教材第 1-11 頁原文
                  </span>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
                  <!-- 客觀要件分支 -->
                  <div class="p-5 rounded-2xl border-2 border-emerald-400 dark:border-emerald-600 bg-white dark:bg-slate-900 shadow-sm space-y-3">
                    <div class="font-black text-emerald-800 dark:text-emerald-300 flex items-center justify-between pb-2 border-b border-emerald-100 dark:border-emerald-900/50">
                      <span>🔵 客觀要件分支 (客觀不法)</span>
                      <span class="text-[11px] font-bold px-2 py-0.5 rounded bg-emerald-500 text-white">縱向雙軌</span>
                    </div>
                    <div class="flex items-center justify-around py-3 border-y border-slate-100 dark:border-slate-800 font-mono text-center">
                      <div><span class="block text-slate-400 text-xs">客觀構成</span><strong class="text-sky-600 dark:text-sky-400 text-base">TB</strong></div>
                      <div class="text-amber-500 font-black text-xs">➔ 推定 ➔</div>
                      <div><span class="block text-slate-400 text-xs">客觀違法</span><strong class="text-amber-600 dark:text-amber-400 text-base">R</strong></div>
                    </div>
                    <div class="text-xs font-bold text-emerald-700 dark:text-emerald-300 text-center bg-emerald-50 dark:bg-emerald-950/40 rounded-xl py-2 border border-emerald-200 dark:border-emerald-800/60">
                      🔄 阻卻 R 事由（客觀情狀）反證推翻推定
                    </div>
                  </div>

                  <!-- 主觀要件分支 -->
                  <div class="p-5 rounded-2xl border-2 border-indigo-400 dark:border-indigo-600 bg-white dark:bg-slate-900 shadow-sm space-y-3">
                    <div class="font-black text-indigo-800 dark:text-indigo-300 flex items-center justify-between pb-2 border-b border-indigo-100 dark:border-indigo-900/50">
                      <span>🟣 主觀要件分支 (主觀不法)</span>
                      <span class="text-[11px] font-bold px-2 py-0.5 rounded bg-indigo-500 text-white">縱向雙軌</span>
                    </div>
                    <div class="flex items-center justify-around py-3 border-y border-slate-100 dark:border-slate-800 font-mono text-center">
                      <div><span class="block text-slate-400 text-xs">主觀構成</span><strong class="text-purple-600 dark:text-purple-400 text-base">TB</strong></div>
                      <div class="text-amber-500 font-black text-xs">➔ 推定 ➔</div>
                      <div><span class="block text-slate-400 text-xs">主觀違法</span><strong class="text-amber-600 dark:text-amber-400 text-base">R</strong></div>
                    </div>
                    <div class="text-xs font-bold text-indigo-700 dark:text-indigo-300 text-center bg-indigo-50 dark:bg-indigo-950/40 rounded-xl py-2 border border-indigo-200 dark:border-indigo-800/60">
                      🔄 阻卻 R 事由（主觀意思）反證推翻推定
                    </div>
                  </div>
                </div>

                <div class="p-4 rounded-xl bg-gradient-to-r from-emerald-100 via-white to-indigo-100 dark:from-emerald-950/40 dark:via-slate-900 dark:to-indigo-950/40 border-2 border-emerald-300 dark:border-emerald-700 text-center text-xs sm:text-sm space-y-1">
                  <div class="font-black text-slate-900 dark:text-white">
                    不法成立 ➔ 推定 ➔ 行為人具備期待可能性 (S 罪責)
                  </div>
                  <div class="text-slate-600 dark:text-slate-300 text-xs">
                    由「阻卻 S 事由」作為反證推翻罪責推定，此部分與三階論之罪責階層完全相同！
                  </div>
                </div>
              </div>

              <!-- 💡 白話文超展開專區：二階論與四塊拼圖 -->
              <div class="p-6 rounded-3xl border-2 border-emerald-400 dark:border-emerald-500/80 bg-gradient-to-br from-emerald-50/90 via-teal-50/40 to-cyan-50/30 dark:from-[#0b201a] dark:via-[#0c1822] dark:to-[#08151b] shadow-xl space-y-5">
                <div class="flex items-center justify-between pb-3 border-b-2 border-emerald-200 dark:border-emerald-800/60">
                  <div class="flex items-center gap-2">
                    <span class="text-2xl">💡</span>
                    <h4 class="font-black text-emerald-950 dark:text-emerald-200 text-base sm:text-lg">
                      白話文超展開：二階論與四塊拼圖（換湯不換藥的真相）
                    </h4>
                  </div>
                  <span class="text-xs font-black px-3 py-1 rounded-full bg-emerald-600 text-white shadow-sm shadow-emerald-600/30">
                    秒懂不法結構
                  </span>
                </div>

                <!-- 3大白話拆解卡片 -->
                <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                  
                  <!-- 卡片 1 -->
                  <div class="p-4 rounded-2xl bg-white/90 dark:bg-slate-900/80 border-2 border-indigo-300 dark:border-indigo-700 space-y-2.5 shadow-sm">
                    <div class="flex items-center gap-2 font-black text-indigo-900 dark:text-indigo-200 text-sm">
                      <span class="w-6 h-6 rounded-full bg-indigo-500 text-white flex items-center justify-center text-xs font-bold">1</span>
                      <span>大誤解：二階論不是不管違法性！</span>
                    </div>
                    <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      很多人聽到二階論就以為「它直接跳過違法性（R）」，大錯特錯！它只是把第一階和第二階打包成「大不法階層」，法條要件一個都沒少！
                    </p>
                    <div class="p-2 rounded-lg bg-indigo-50 dark:bg-indigo-950/40 text-[11px] text-indigo-800 dark:text-indigo-300 font-medium">
                      📦 比喻：三階論像先分樓層再找房間；二階論像先把男女分開再進房間，人還是一樣多！
                    </div>
                  </div>

                  <!-- 卡片 2 -->
                  <div class="p-4 rounded-2xl bg-white/90 dark:bg-slate-900/80 border-2 border-teal-300 dark:border-teal-700 space-y-2.5 shadow-sm">
                    <div class="flex items-center gap-2 font-black text-teal-900 dark:text-teal-200 text-sm">
                      <span class="w-6 h-6 rounded-full bg-teal-500 text-white flex items-center justify-center text-xs font-bold">2</span>
                      <span>四塊拼圖：有加有減的平衡算式</span>
                    </div>
                    <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      做了外在壞事（+①），但有防衛情狀（-③）➔ 客觀不法歸零！心裡想使壞（+②），但有防衛意思（-④）➔ 主觀不法歸零！兩邊都清白才是真合法！
                    </p>
                    <div class="p-2 rounded-lg bg-teal-50 dark:bg-teal-950/40 text-[11px] text-teal-800 dark:text-teal-300 font-medium">
                      🧩 算式：客觀構成扣掉客觀阻卻、主觀構成扣掉主觀阻卻，全都是「加法減法」！
                    </div>
                  </div>

                  <!-- 卡片 3 -->
                  <div class="p-4 rounded-2xl bg-white/90 dark:bg-slate-900/80 border-2 border-emerald-300 dark:border-emerald-700 space-y-2.5 shadow-sm">
                    <div class="flex items-center gap-2 font-black text-emerald-900 dark:text-emerald-200 text-sm">
                      <span class="w-6 h-6 rounded-full bg-emerald-500 text-white flex items-center justify-center text-xs font-bold">3</span>
                      <span>實戰結論：九成九案件結論完全相同！</span>
                    </div>
                    <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      通說三階論和二階論只是思考視角不同。無論是用三階橫推，還是二階雙軌縱切，判決有罪無罪在絕大多數案件中都一模一樣！
                    </p>
                    <div class="p-2 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 text-[11px] text-emerald-800 dark:text-emerald-300 font-medium">
                      🎯 核心：二階論讓你看懂主觀與客觀在不法中的對稱之美！
                    </div>
                  </div>

                </div>

                <!-- 核心記憶口訣列 -->
                <div class="p-4 rounded-2xl bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 text-white shadow-md flex items-center gap-3">
                  <span class="text-2xl">📢</span>
                  <div class="text-xs sm:text-sm font-black tracking-wide">
                    核心精華口訣：三階橫向層層推，二階縱向主客分；四塊拼圖同要件，結論一致不失真！
                  </div>
                </div>

              </div>

              <!-- 教材進度里程碑卡片 (第一章 1-1 ~ 1-11 全收錄完畢) -->
              <div class="p-5 rounded-2xl border-2 border-emerald-500 dark:border-emerald-400 bg-gradient-to-r from-emerald-50 via-teal-50 to-green-50 dark:from-[#0d2218] dark:via-[#0c1e19] dark:to-[#071610] text-xs text-slate-600 dark:text-slate-300 space-y-2 shadow-md">
                <div class="flex items-center justify-between pb-1.5 border-b border-emerald-200 dark:border-emerald-800/60">
                  <div class="flex items-center gap-2 font-black text-emerald-950 dark:text-emerald-200 text-sm">
                    <span class="text-lg">🎉</span>
                    <span>教材第 1-1 ～ 1-11 頁全章收錄完畢！</span>
                  </div>
                  <span class="text-xs font-mono px-3 py-1 rounded-full bg-emerald-600 text-white font-bold shadow-xs">第一章完整收錄</span>
                </div>
                <p class="leading-relaxed">
                  第一章「犯罪的概念」從直觀壞事壞人、期待可能性、法定與超法定阻卻罪責、利益衡量、法定與超法定阻卻違法、三階論到二階論與四塊拼圖已完整收錄！
                </p>
              </div>

            </section>

            <!-- ==================== 十六、刑法核心爭點超級對照矩陣（Mega Comparison Matrix） ==================== -->
            <section id="sec-mega-comparison-matrix" class="p-6 sm:p-8 rounded-3xl border-2 border-indigo-500 dark:border-indigo-400 bg-gradient-to-br from-indigo-50/70 via-white to-purple-50/50 dark:from-[#131b2e] dark:via-[#0c1220] dark:to-[#170e28] backdrop-blur-md shadow-2xl space-y-7 scroll-mt-28">
              
              <!-- 頂部標題列與資訊徽章 -->
              <div class="flex items-center justify-between border-b-2 border-indigo-200 dark:border-indigo-800/60 pb-4">
                <div class="flex items-center gap-3">
                  <span class="inline-flex items-center justify-center w-10 h-10 rounded-2xl bg-gradient-to-br from-indigo-600 to-purple-600 text-white shadow-md shadow-indigo-500/30 text-lg font-black">⚡</span>
                  <div>
                    <div class="flex items-center gap-2">
                      <span class="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-bold bg-indigo-600 text-white shadow-xs">第一章 總體核心樞紐</span>
                      <span class="px-2.5 py-0.5 rounded-full text-[10.5px] font-bold bg-purple-100 dark:bg-purple-900/60 text-purple-700 dark:text-purple-300">國考高頻必考爭點</span>
                    </div>
                    <h3 class="text-xl sm:text-2xl font-black text-indigo-950 dark:text-white tracking-tight mt-1">
                      十六、刑法核心爭點超級對照矩陣（Mega Comparison Matrix）
                    </h3>
                  </div>
                </div>
                <div class="hidden sm:flex items-center gap-1.5 text-xs font-mono font-bold text-indigo-700 dark:text-indigo-300 bg-indigo-50 dark:bg-slate-800 px-3.5 py-2 rounded-xl border border-indigo-200 dark:border-indigo-700 shadow-sm">
                  <span>3 大矩陣</span>・<span>17 案例對照</span>
                </div>
              </div>

              <!-- 導引說明 -->
              <p class="text-xs sm:text-sm text-slate-700 dark:text-slate-200 leading-relaxed font-medium">
                彙整陳奕廷（易律師）《刑法總則【圖說系列】》第一章所有易混淆核心概念。針對國考申論題最常考的<strong>「阻卻違法 vs 阻卻罪責」</strong>、<strong>「正當防衛 vs 緊急避難 vs 義務衝突」</strong>與<strong>「被害人同意 vs 得承諾 vs 推定承諾」</strong>進行多維度橫向縱深對照。點擊案例標籤可快速跳轉直達內文詳解！
              </p>

              <!-- 互動操作控制台：爭點搜尋 + Tab 切換 -->
              <div class="p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-900 border-2 border-indigo-200 dark:border-indigo-800/80 shadow-md space-y-3.5">
                
                <!-- 搜尋過濾器 -->
                <div class="relative">
                  <span class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-indigo-500">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                    </svg>
                  </span>
                  <input type="text" 
                         id="matrixSearchInput" 
                         placeholder="🔍 快速檢索爭點（輸入：利益衡量、人性尊嚴、共犯、櫻桃案、過當...）" 
                         class="w-full pl-9 pr-24 py-2.5 text-xs sm:text-sm rounded-xl border-2 border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/80 text-slate-800 dark:text-slate-100 placeholder-slate-400 focus:outline-hidden focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all font-medium"
                         oninput="filterMatrixRows(this.value)">
                  <button type="button" 
                          onclick="clearMatrixSearch()" 
                          id="clearMatrixSearchBtn" 
                          class="hidden absolute inset-y-0 right-0 pr-3 flex items-center text-xs text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 font-bold cursor-pointer">
                    清除 ✕
                  </button>
                </div>

                <!-- Tab 標籤切換 -->
                <div class="flex flex-wrap items-center gap-2 pt-0.5" id="matrixTabsNav">
                  <span class="text-xs font-bold text-slate-500 dark:text-slate-400 mr-1 hidden sm:inline">對照視角：</span>
                  <button type="button" onclick="switchMatrixTab('tabA')" id="btnTabA" class="matrix-tab-btn active-matrix-tab px-3.5 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 cursor-pointer">
                    <span>⚔️ 矩陣 A：違法性 vs 罪責</span>
                  </button>
                  <button type="button" onclick="switchMatrixTab('tabB')" id="btnTabB" class="matrix-tab-btn px-3.5 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 cursor-pointer">
                    <span>⚖️ 矩陣 B：防衛 vs 避難 vs 衝突</span>
                  </button>
                  <button type="button" onclick="switchMatrixTab('tabC')" id="btnTabC" class="matrix-tab-btn px-3.5 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 cursor-pointer">
                    <span>🤝 矩陣 C：處分權與承諾界限</span>
                  </button>
                  <button type="button" onclick="switchMatrixTab('tabAll')" id="btnTabAll" class="matrix-tab-btn px-3.5 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5">
                    <span>🌐 全景橫向總表</span>
                  </button>
                </div>

              </div>

              <!-- ==================== 矩陣 A：違法性 vs 罪責 ==================== -->
              <div id="matrixPanelA" class="matrix-panel space-y-3">
                <div class="flex items-center justify-between text-xs">
                  <span class="font-extrabold text-indigo-950 dark:text-indigo-200 flex items-center gap-1.5 text-sm">
                    <span>⚔️</span><span>【本質體系大對決】阻卻違法事由 vs 阻卻罪責事由</span>
                  </span>
                  <span class="text-slate-500 dark:text-slate-400 font-mono">教材第 1-1 ～ 1-8 頁體系核心</span>
                </div>

                <div class="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#101623] shadow-sm">
                  <table class="matrix-table text-left">
                    <thead>
                      <tr>
                        <th class="w-1/4 bg-slate-100/80 dark:bg-slate-800 text-slate-700 dark:text-slate-300">對照維度</th>
                        <th class="w-3/8 bg-emerald-50/80 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-300 border-l border-slate-200 dark:border-slate-800">
                          🛡️ 阻卻違法事由（Justifications）
                        </th>
                        <th class="w-3/8 bg-amber-50/80 dark:bg-amber-950/40 text-amber-800 dark:text-amber-300 border-l border-slate-200 dark:border-slate-800">
                          ⚖️ 阻卻罪責事由（Excuses）
                        </th>
                      </tr>
                    </thead>
                    <tbody class="divide-y divide-slate-100 dark:divide-slate-800">
                      <tr data-search="評價客體 行為 行為人 壞事 壞人 不法 罪責">
                        <td class="font-bold text-slate-800 dark:text-slate-200">
                          <span class="inline-block w-2 h-2 rounded-full bg-blue-500 mr-1.5"></span>評價客體
                        </td>
                        <td class="text-slate-700 dark:text-slate-300 border-l border-slate-100 dark:border-slate-800">
                          <strong class="text-emerald-700 dark:text-emerald-400">評價「行為本身」</strong><br>
                          客觀檢驗該舉措是否為整體法律秩序所容許（實質不法性排除）。
                        </td>
                        <td class="text-slate-700 dark:text-slate-300 border-l border-slate-100 dark:border-slate-800">
                          <strong class="text-amber-700 dark:text-amber-400">評價「行為人本身」</strong><br>
                          主觀非難可能性，檢驗其是否具備可歸責性與期待可能性。
                        </td>
                      </tr>
                      <tr data-search="法律代稱 不法 罪責 實質不法">
                        <td class="font-bold text-slate-800 dark:text-slate-200">
                          <span class="inline-block w-2 h-2 rounded-full bg-blue-500 mr-1.5"></span>法律代稱
                        </td>
                        <td class="text-slate-700 dark:text-slate-300 border-l border-slate-100 dark:border-slate-800">
                          <span class="font-mono font-black text-emerald-600 dark:text-emerald-400 text-sm">「不法」</span>（Unlawful / 壞事推翻）
                        </td>
                        <td class="text-slate-700 dark:text-slate-300 border-l border-slate-100 dark:border-slate-800">
                          <span class="font-mono font-black text-amber-600 dark:text-amber-400 text-sm">「罪責」</span>（Culpability / 壞人推翻）
                        </td>
                      </tr>
                      <tr data-search="核心金句 易律師 口訣 壞事 壞人 法益侵害 正當理由">
                        <td class="font-bold text-slate-800 dark:text-slate-200">
                          <span class="inline-block w-2 h-2 rounded-full bg-indigo-500 mr-1.5"></span>易律師核心金句
                        </td>
                        <td class="text-slate-700 dark:text-slate-300 border-l border-slate-100 dark:border-slate-800">
                          <blockquote class="p-2 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 border-l-3 border-emerald-500 font-extrabold text-xs text-emerald-800 dark:text-emerald-300">
                            「縱使造成法益侵害，但因有正當理由而並非壞事！」
                          </blockquote>
                        </td>
                        <td class="text-slate-700 dark:text-slate-300 border-l border-slate-100 dark:border-slate-800">
                          <blockquote class="p-2 rounded-lg bg-amber-50 dark:bg-amber-950/40 border-l-3 border-amber-500 font-extrabold text-xs text-amber-800 dark:text-amber-300">
                            「因而雖做壞事，但卻不是壞人！」
                          </blockquote>
                        </td>
                      </tr>
                      <tr data-search="共犯從屬性 限制從屬性 教唆 幫助 連帶 個別 歸責">
                        <td class="font-bold text-slate-800 dark:text-slate-200">
                          <span class="inline-block w-2 h-2 rounded-full bg-purple-500 mr-1.5"></span>共犯從屬性原則
                        </td>
                        <td class="text-slate-700 dark:text-slate-300 border-l border-slate-100 dark:border-slate-800">
                          <strong class="text-slate-900 dark:text-white">連帶從屬（連帶阻卻）</strong><br>
                          採「限制從屬形式」，正犯行為若阻卻違法（不成立違法行為），則<strong>教唆犯、幫助犯均連帶不成立犯罪</strong>！
                        </td>
                        <td class="text-slate-700 dark:text-slate-300 border-l border-slate-100 dark:border-slate-800">
                          <strong class="text-slate-900 dark:text-white">個別獨立（個別歸責）</strong><br>
                          罪責為個別個人屬性。若正犯因年齡（§ 18）或精神障礙（§ 19）阻卻罪責，<strong>幕後教唆者或幫助者仍具完全罪責而論罪</strong>！
                        </td>
                      </tr>
                      <tr data-search="民事侵權 賠償 民法 149 150 187 責任">
                        <td class="font-bold text-slate-800 dark:text-slate-200">
                          <span class="inline-block w-2 h-2 rounded-full bg-pink-500 mr-1.5"></span>民事侵權連動責任
                        </td>
                        <td class="text-slate-700 dark:text-slate-300 border-l border-slate-100 dark:border-slate-800">
                          <strong>不負損害賠償責任</strong><br>
                          民法第 149 條（正當防衛不負賠償責任）、第 150 條（避難適當不負賠償責任，僅得向造意人求償）。
                        </td>
                        <td class="text-slate-700 dark:text-slate-300 border-l border-slate-100 dark:border-slate-800">
                          <strong>仍可能負賠償責任</strong><br>
                          行為客觀上仍屬不法侵權，行為人及其法定代理人仍須依民法第 187 條連帶負損害賠償責任（或由法院酌定衡平補償）。
                        </td>
                      </tr>
                      <tr data-search="典型事由 法條 21 22 23 24 16 18 19 20 期待可能性">
                        <td class="font-bold text-slate-800 dark:text-slate-200">
                          <span class="inline-block w-2 h-2 rounded-full bg-emerald-500 mr-1.5"></span>法定與超法定典型
                        </td>
                        <td class="text-slate-700 dark:text-slate-300 border-l border-slate-100 dark:border-slate-800">
                          <ul class="space-y-1 list-disc list-inside text-xs">
                            <li>§ 21 Ⅰ 依法令之行為</li>
                            <li>§ 21 Ⅱ 依命令之行為</li>
                            <li>§ 22 業務上正當行為</li>
                            <li>§ 23 前段 正當防衛</li>
                            <li>§ 24 Ⅰ 前段 緊急避難</li>
                            <li>超法定：得被害人承諾、義務衝突</li>
                          </ul>
                        </td>
                        <td class="text-slate-700 dark:text-slate-300 border-l border-slate-100 dark:border-slate-800">
                          <ul class="space-y-1 list-disc list-inside text-xs">
                            <li>§ 16 欠缺不法意識（免除/減輕）</li>
                            <li>§ 18 責任年齡（未滿14歲不罰）</li>
                            <li>§ 19 精神障礙（不罰/得減）</li>
                            <li>§ 20 瘖啞人（得減）</li>
                            <li>§ 23 但書 防衛過當（阻卻罪責寬恕）</li>
                            <li>§ 24 但書 避難過當、超法定期待可能性</li>
                          </ul>
                        </td>
                      </tr>
                      <tr data-search="對應教材案例 1-1 1-2 1-3 1-4 1-5 1-6 1-7 1-8 1-9 1-10 1-11 1-12 1-13 1-14 1-15">
                        <td class="font-bold text-slate-800 dark:text-slate-200">
                          <span class="inline-block w-2 h-2 rounded-full bg-amber-500 mr-1.5"></span>對應教材案例速查
                        </td>
                        <td class="text-slate-700 dark:text-slate-300 border-l border-slate-100 dark:border-slate-800">
                          <div class="flex flex-wrap gap-1.5">
                            <button type="button" onclick="jumpToCaseCard('1-7')" class="case-jump-btn">1-7 墮胎 ↗</button>
                            <button type="button" onclick="jumpToCaseCard('1-8')" class="case-jump-btn">1-8 命令 ↗</button>
                            <button type="button" onclick="jumpToCaseCard('1-9')" class="case-jump-btn">1-9 結紮 ↗</button>
                            <button type="button" onclick="jumpToCaseCard('1-10')" class="case-jump-btn">1-10 防衛 ↗</button>
                            <button type="button" onclick="jumpToCaseCard('1-11')" class="case-jump-btn">1-11 避難 ↗</button>
                            <button type="button" onclick="jumpToCaseCard('1-12')" class="case-jump-btn">1-12 承諾 ↗</button>
                            <button type="button" onclick="jumpToCaseCard('1-13')" class="case-jump-btn">1-13 衝突 ↗</button>
                          </div>
                        </td>
                        <td class="text-slate-700 dark:text-slate-300 border-l border-slate-100 dark:border-slate-800">
                          <div class="flex flex-wrap gap-1.5">
                            <button type="button" onclick="jumpToCaseCard('1-1')" class="case-jump-btn">1-1 不法意識 ↗</button>
                            <button type="button" onclick="jumpToCaseCard('1-2')" class="case-jump-btn">1-2 年齡 ↗</button>
                            <button type="button" onclick="jumpToCaseCard('1-3')" class="case-jump-btn">1-3 精神 ↗</button>
                            <button type="button" onclick="jumpToCaseCard('1-4')" class="case-jump-btn">1-4 瘖啞 ↗</button>
                            <button type="button" onclick="jumpToCaseCard('1-5')" class="case-jump-btn">1-5 防衛過當 ↗</button>
                            <button type="button" onclick="jumpToCaseCard('1-6')" class="case-jump-btn">1-6 期待可能 ↗</button>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <!-- ==================== 矩陣 B：正當防衛 vs 緊急避難 vs 義務衝突 vs 極端案例 ==================== -->
              <div id="matrixPanelB" class="matrix-panel hidden space-y-3">
                <div class="flex items-center justify-between text-xs">
                  <span class="font-extrabold text-indigo-950 dark:text-indigo-200 flex items-center gap-1.5 text-sm">
                    <span>⚖️</span><span>【法益衡平大縱橫】正當防衛 vs 緊急避難 vs 義務衝突 vs 極端案例審查</span>
                  </span>
                  <span class="text-slate-500 dark:text-slate-400 font-mono">教材第 1-6 ～ 1-8 頁關鍵爭點</span>
                </div>

                <div class="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#101623] shadow-sm">
                  <table class="matrix-table text-left">
                    <thead>
                      <tr>
                        <th class="w-1/6 bg-slate-100/80 dark:bg-slate-800 text-slate-700 dark:text-slate-300">審查維度</th>
                        <th class="w-1/5 bg-blue-50/80 dark:bg-blue-950/40 text-blue-800 dark:text-blue-300 border-l border-slate-200 dark:border-slate-800">
                          🗡️ 正當防衛 (§ 23)
                        </th>
                        <th class="w-1/5 bg-emerald-50/80 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-300 border-l border-slate-200 dark:border-slate-800">
                          🛡️ 緊急避難 (§ 24)
                        </th>
                        <th class="w-1/5 bg-amber-50/80 dark:bg-amber-950/40 text-amber-800 dark:text-amber-300 border-l border-slate-200 dark:border-slate-800">
                          ⚖️ 義務衝突 (超法定)
                        </th>
                        <th class="w-1/4 bg-rose-50/80 dark:bg-rose-950/40 text-rose-800 dark:text-rose-300 border-l border-slate-200 dark:border-slate-800">
                          ⚠️ 極端例外案例（否定阻卻）
                        </th>
                      </tr>
                    </thead>
                    <tbody class="divide-y divide-slate-100 dark:divide-slate-800">
                      <tr data-search="法理基礎 哲學 正不必向不正低頭 社會連帶 法不強人所難 人性尊嚴">
                        <td class="font-bold text-slate-800 dark:text-slate-200">
                          <span class="inline-block w-2 h-2 rounded-full bg-blue-500 mr-1.5"></span>法理哲學基礎
                        </td>
                        <td class="text-slate-700 dark:text-slate-300 border-l border-slate-100 dark:border-slate-800">
                          <strong class="text-blue-700 dark:text-blue-400">「正不必向不正低頭」</strong><br>
                          捍衛法秩序尊嚴＋自衛防禦本能。
                        </td>
                        <td class="text-slate-700 dark:text-slate-300 border-l border-slate-100 dark:border-slate-800">
                          <strong class="text-emerald-700 dark:text-emerald-400">「社會連帶與避險轉嫁」</strong><br>
                          容忍法益在危急下合理轉嫁分擔。
                        </td>
                        <td class="text-slate-700 dark:text-slate-300 border-l border-slate-100 dark:border-slate-800">
                          <strong class="text-amber-700 dark:text-amber-400">「法不強人所難」</strong><br>
                          數作為義務衝突時，已盡全力履行其一。
                        </td>
                        <td class="text-slate-700 dark:text-slate-300 border-l border-slate-100 dark:border-slate-800">
                          • 櫻桃案：<strong>禁止權利濫用原則</strong><br>
                          • 輸血案：<strong>人性尊嚴不可侵犯</strong>（憲法 § 22）
                        </td>
                      </tr>
                      <tr data-search="危難起因 侵害 不法 天災 野獸 疾病 義務 衝突">
                        <td class="font-bold text-slate-800 dark:text-slate-200">
                          <span class="inline-block w-2 h-2 rounded-full bg-blue-500 mr-1.5"></span>危難起因來源
                        </td>
                        <td class="text-slate-700 dark:text-slate-300 border-l border-slate-100 dark:border-slate-800">
                          嚴格限於<strong>「現在不法之人為侵害」</strong>（動物需為人指使）。
                        </td>
                        <td class="text-slate-700 dark:text-slate-300 border-l border-slate-100 dark:border-slate-800">
                          <strong>一切緊急危難</strong>（天災地震、無主野獸追咬、急重病）。
                        </td>
                        <td class="text-slate-700 dark:text-slate-300 border-l border-slate-100 dark:border-slate-800">
                          數個法律義務同時發生，客觀上時間精力<strong>無法兼顧履行</strong>。
                        </td>
                        <td class="text-slate-700 dark:text-slate-300 border-l border-slate-100 dark:border-slate-800">
                          • 櫻桃案：偷摘櫻桃不法侵害<br>
                          • 輸血案：急診休克病患瀕死危難
                        </td>
                      </tr>
                      <tr data-search="利益衡量 原則 不要求 顯然大於 櫻桃案 輸血案 懸殊">
                        <td class="font-bold text-slate-800 dark:text-slate-200">
                          <span class="inline-block w-2 h-2 rounded-full bg-red-500 mr-1.5"></span>利益衡量要求
                        </td>
                        <td class="text-slate-700 dark:text-slate-300 border-l border-slate-100 dark:border-slate-800">
                          <strong class="text-slate-900 dark:text-white">原則不要求利益衡量！</strong><br>
                          為保全財產打傷對方仍可防衛，唯極端懸殊者例外（見櫻桃案）。
                        </td>
                        <td class="text-slate-700 dark:text-slate-300 border-l border-slate-100 dark:border-slate-800">
                          <strong class="text-emerald-700 dark:text-emerald-400">嚴格要求利益衡量！</strong><br>
                          保全法益必須<strong>「顯著大於」</strong>所犧牲法益，生命絕不可犧牲。
                        </td>
                        <td class="text-slate-700 dark:text-slate-300 border-l border-slate-100 dark:border-slate-800">
                          <strong>義務等值或履行較高者</strong><br>
                          救子義務彼此等值，救其一即可阻卻他義務不作為之違法。
                        </td>
                        <td class="text-slate-700 dark:text-slate-300 border-l border-slate-100 dark:border-slate-800">
                          <strong class="text-rose-600 dark:text-rose-400">【違法性肯定】</strong><br>
                          • 櫻桃案：犧牲生命 ＞＞ 保全櫻桃（<strong>結果層面違法</strong>）<br>
                          • 輸血案：縱生命＞自由，但<strong>手段不擇手段</strong>！
                        </td>
                      </tr>
                      <tr data-search="手段門檻 最後手段性 必要性 得已 櫻桃案 輸血案">
                        <td class="font-bold text-slate-800 dark:text-slate-200">
                          <span class="inline-block w-2 h-2 rounded-full bg-indigo-500 mr-1.5"></span>手段門檻要求
                        </td>
                        <td class="text-slate-700 dark:text-slate-300 border-l border-slate-100 dark:border-slate-800">
                          <strong>必要性原則</strong><br>
                          具防衛有效性，且在防衛手段中選取侵害最小者（不必退避逃跑）。
                        </td>
                        <td class="text-slate-700 dark:text-slate-300 border-l border-slate-100 dark:border-slate-800">
                          <strong class="text-emerald-700 dark:text-emerald-400">最後手段性（不得已）</strong><br>
                          能逃跑或以其他和平方式避難者，<strong>絕不得轉嫁他人</strong>！
                        </td>
                        <td class="text-slate-700 dark:text-slate-300 border-l border-slate-100 dark:border-slate-800">
                          <strong>客觀履行上限</strong><br>
                          行為人已窮盡當下能力救援（火海救兩子最多救一個）。
                        </td>
                        <td class="text-slate-700 dark:text-slate-300 border-l border-slate-100 dark:border-slate-800">
                          • 櫻桃案：小兒麻痺僅能開槍，但不得開槍殺人保全櫻桃！<br>
                          • 輸血案：強行將第三人當供血工具，手段背離法秩序！
                        </td>
                      </tr>
                      <tr data-search="對象 不法侵害者 無辜第三人 犧牲者">
                        <td class="font-bold text-slate-800 dark:text-slate-200">
                          <span class="inline-block w-2 h-2 rounded-full bg-purple-500 mr-1.5"></span>行為施加對象
                        </td>
                        <td class="text-slate-700 dark:text-slate-300 border-l border-slate-100 dark:border-slate-800">
                          <strong class="text-slate-900 dark:text-white">僅限於「不法侵害者本人」</strong><br>
                          不得向旁觀無辜者行使防衛。
                        </td>
                        <td class="text-slate-700 dark:text-slate-300 border-l border-slate-100 dark:border-slate-800">
                          <strong>無辜第三人之法益</strong><br>
                          （如為躲野狗破壞無辜第三人民宅門窗）。
                        </td>
                        <td class="text-slate-700 dark:text-slate-300 border-l border-slate-100 dark:border-slate-800">
                          <strong>同等地位之應受救助人</strong><br>
                          未被及時救起之另一對象。
                        </td>
                        <td class="text-slate-700 dark:text-slate-300 border-l border-slate-100 dark:border-slate-800">
                          • 櫻桃案：偷摘櫻桃之小學生<br>
                          • 輸血案：拒絕捐血之志工丙
                        </td>
                      </tr>
                      <tr data-search="法律效果 阻卻違法 過當 減免 成立犯罪 23 24 殺人">
                        <td class="font-bold text-slate-800 dark:text-slate-200">
                          <span class="inline-block w-2 h-2 rounded-full bg-emerald-500 mr-1.5"></span>法律審查效果
                        </td>
                        <td class="text-slate-700 dark:text-slate-300 border-l border-slate-100 dark:border-slate-800">
                          • 合法：<strong>阻卻違法（不罰）</strong><br>
                          • 過當：§ 23 但 <strong>防衛過當得減免其刑</strong>。
                        </td>
                        <td class="text-slate-700 dark:text-slate-300 border-l border-slate-100 dark:border-slate-800">
                          • 合法：<strong>阻卻違法（不罰）</strong><br>
                          • 過當：§ 24 但 <strong>避難過當得減免其刑</strong>。
                        </td>
                        <td class="text-slate-700 dark:text-slate-300 border-l border-slate-100 dark:border-slate-800">
                          <strong>超法定阻卻違法</strong><br>
                          對未獲救者之死亡結果阻卻違法，不罰。
                        </td>
                        <td class="text-slate-700 dark:text-slate-300 border-l border-slate-100 dark:border-slate-800">
                          <strong class="text-rose-600 dark:text-rose-400">均肯定違法性！</strong><br>
                          • 櫻桃案：成立殺人既遂罪或傷害致死罪<br>
                          • 輸血案：成立強制罪、傷害罪
                        </td>
                      </tr>
                      <tr data-search="速查案例 1-10 1-11 1-13 1-14 1-15">
                        <td class="font-bold text-slate-800 dark:text-slate-200">
                          <span class="inline-block w-2 h-2 rounded-full bg-amber-500 mr-1.5"></span>經典案例跳轉
                        </td>
                        <td class="text-slate-700 dark:text-slate-300 border-l border-slate-100 dark:border-slate-800">
                          <button type="button" onclick="jumpToCaseCard('1-10')" class="case-jump-btn">案例 1-10 正當防衛 ↗</button>
                        </td>
                        <td class="text-slate-700 dark:text-slate-300 border-l border-slate-100 dark:border-slate-800">
                          <button type="button" onclick="jumpToCaseCard('1-11')" class="case-jump-btn">案例 1-11 野狗闖民宅 ↗</button>
                        </td>
                        <td class="text-slate-700 dark:text-slate-300 border-l border-slate-100 dark:border-slate-800">
                          <button type="button" onclick="jumpToCaseCard('1-13')" class="case-jump-btn">案例 1-13 火海救兩子 ↗</button>
                        </td>
                        <td class="text-slate-700 dark:text-slate-300 border-l border-slate-100 dark:border-slate-800">
                          <div class="flex flex-wrap gap-1.5">
                            <button type="button" onclick="jumpToCaseCard('1-14')" class="case-jump-btn text-rose-600 border-rose-300 bg-rose-50 dark:bg-rose-950/40">案例 1-14 櫻桃案 ↗</button>
                            <button type="button" onclick="jumpToCaseCard('1-15')" class="case-jump-btn text-rose-600 border-rose-300 bg-rose-50 dark:bg-rose-950/40">案例 1-15 輸血案 ↗</button>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <!-- ==================== 矩陣 C：被害人同意 vs 得被害人承諾 vs 推定承諾 ==================== -->
              <div id="matrixPanelC" class="matrix-panel hidden space-y-3">
                <div class="flex items-center justify-between text-xs">
                  <span class="font-extrabold text-indigo-950 dark:text-indigo-200 flex items-center gap-1.5 text-sm">
                    <span>🤝</span><span>【處分界限大對決】被害人同意 vs 得被害人承諾 vs 推定承諾</span>
                  </span>
                  <span class="text-slate-500 dark:text-slate-400 font-mono">教材第 1-7 頁超法定處分體系</span>
                </div>

                <div class="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#101623] shadow-sm">
                  <table class="matrix-table text-left">
                    <thead>
                      <tr>
                        <th class="w-1/5 bg-slate-100/80 dark:bg-slate-800 text-slate-700 dark:text-slate-300">審查層面</th>
                        <th class="w-4/15 bg-purple-50/80 dark:bg-purple-950/40 text-purple-800 dark:text-purple-300 border-l border-slate-200 dark:border-slate-800">
                          🚪 被害人同意 (Einverständnis)
                        </th>
                        <th class="w-4/15 bg-indigo-50/80 dark:bg-indigo-950/40 text-indigo-800 dark:text-indigo-300 border-l border-slate-200 dark:border-slate-800">
                          📜 得被害人承諾 (Einwilligung)
                        </th>
                        <th class="w-4/15 bg-teal-50/80 dark:bg-teal-950/40 text-teal-800 dark:text-teal-300 border-l border-slate-200 dark:border-slate-800">
                          🔥 推定承諾 (Mutmaßliche Einwilligung)
                        </th>
                      </tr>
                    </thead>
                    <tbody class="divide-y divide-slate-100 dark:divide-slate-800">
                      <tr data-search="審查位階 階層 第一階 構成要件 違法性 超法定">
                        <td class="font-bold text-slate-800 dark:text-slate-200">
                          <span class="inline-block w-2 h-2 rounded-full bg-blue-500 mr-1.5"></span>審查階層位階
                        </td>
                        <td class="text-slate-700 dark:text-slate-300 border-l border-slate-100 dark:border-slate-800">
                          <strong class="text-purple-700 dark:text-purple-400 text-sm">第一階：阻卻構成要件！</strong><br>
                          構成要件行為本質以「違背意願」為前提，同意直接使構成要件<strong>自始不該當</strong>。
                        </td>
                        <td class="text-slate-700 dark:text-slate-300 border-l border-slate-100 dark:border-slate-800">
                          <strong class="text-indigo-700 dark:text-indigo-400 text-sm">第二階：阻卻違法性！</strong><br>
                          客觀該當侵害構成要件，但因個人自主處分法益而<strong>阻卻違法（非壞事）</strong>。
                        </td>
                        <td class="text-slate-700 dark:text-slate-300 border-l border-slate-100 dark:border-slate-800">
                          <strong class="text-teal-700 dark:text-teal-400 text-sm">第二階：超法定阻卻違法！</strong><br>
                          事急無從及時徵詢，依客觀理性標準推斷被害人意願，<strong>阻卻違法</strong>。
                        </td>
                      </tr>
                      <tr data-search="法益處分範圍 自由 財產 個人 得處分 規範">
                        <td class="font-bold text-slate-800 dark:text-slate-200">
                          <span class="inline-block w-2 h-2 rounded-full bg-blue-500 mr-1.5"></span>適用法益範疇
                        </td>
                        <td class="text-slate-700 dark:text-slate-300 border-l border-slate-100 dark:border-slate-800">
                          刑法條文明定或實質包含<strong>「無故、未得同意、違反意願」</strong>之罪（如 § 306 侵入住宅罪、§ 315-1 妨害秘密、§ 320 竊盜罪）。
                        </td>
                        <td class="text-slate-700 dark:text-slate-300 border-l border-slate-100 dark:border-slate-800">
                          行為人得自由處分之<strong>個人法益</strong>（如財產毀損、個人輕微身體自由或健全法益）。
                        </td>
                        <td class="text-slate-700 dark:text-slate-300 border-l border-slate-100 dark:border-slate-800">
                          為被害人<strong>保全更重大法益</strong>之必要緊急處分（或為第三人正當業務之緊急救助）。
                        </td>
                      </tr>
                      <tr data-search="生命 重大身體 限制 275 加工自殺 282 承諾傷害 絕對禁止">
                        <td class="font-bold text-slate-800 dark:text-slate-200">
                          <span class="inline-block w-2 h-2 rounded-full bg-red-500 mr-1.5"></span>生命與重大身體限制
                        </td>
                        <td class="text-slate-700 dark:text-slate-300 border-l border-slate-100 dark:border-slate-800">
                          生命法益侵害無法以同意使構成要件不該當。
                        </td>
                        <td class="text-slate-700 dark:text-slate-300 border-l border-slate-100 dark:border-slate-800">
                          <strong class="text-rose-600 dark:text-rose-400">生命絕對不得承諾！</strong><br>
                          受囑託殺害仍犯 <strong>§ 275 加工自殺罪</strong>；致重傷者仍犯 <strong>§ 282 承諾傷害罪</strong>！
                        </td>
                        <td class="text-slate-700 dark:text-slate-300 border-l border-slate-100 dark:border-slate-800">
                          <strong>不得違背明示反對意志</strong><br>
                          若知悉被害人明示反對（如宗教拒絕輸血、病人預立醫療決定），不得推定！
                        </td>
                      </tr>
                      <tr data-search="要件 意思能力 明示 默示 事前 事後">
                        <td class="font-bold text-slate-800 dark:text-slate-200">
                          <span class="inline-block w-2 h-2 rounded-full bg-emerald-500 mr-1.5"></span>主觀表示與生效要件
                        </td>
                        <td class="text-slate-700 dark:text-slate-300 border-l border-slate-100 dark:border-slate-800">
                          僅需具備<strong>自然理解意思</strong>，明示或默示均可，不以法律行為能力為必要。
                        </td>
                        <td class="text-slate-700 dark:text-slate-300 border-l border-slate-100 dark:border-slate-800">
                          須具備<strong>承諾能力</strong>，且須在<strong>行為前本於自由意志</strong>明示或默示發出（受詐欺脅迫者無效）。
                        </td>
                        <td class="text-slate-700 dark:text-slate-300 border-l border-slate-100 dark:border-slate-800">
                          客觀上<strong>無法及時徵詢</strong>＋客觀上假定「若被害人知悉亦必定同意」。
                        </td>
                      </tr>
                      <tr data-search="經典案例 1-12 黑白猜 刺青 1-13 滅火 手術">
                        <td class="font-bold text-slate-800 dark:text-slate-200">
                          <span class="inline-block w-2 h-2 rounded-full bg-amber-500 mr-1.5"></span>經典實務例證
                        </td>
                        <td class="text-slate-700 dark:text-slate-300 border-l border-slate-100 dark:border-slate-800">
                          • 屋主同意訪客留宿（不該當侵入住宅）<br>
                          • 車主同意借車駕駛（不該當竊盜）
                        </td>
                        <td class="text-slate-700 dark:text-slate-300 border-l border-slate-100 dark:border-slate-800">
                          <button type="button" onclick="jumpToCaseCard('1-12')" class="case-jump-btn">案例 1-12 黑白猜打巴掌 ↗</button><br>
                          • 美容穿耳洞、藝術刺青
                        </td>
                        <td class="text-slate-700 dark:text-slate-300 border-l border-slate-100 dark:border-slate-800">
                          • 鄰宅失火破門撲滅（毀損阻卻違法）<br>
                          • 重傷昏迷病患無親屬時緊急截肢手術
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <!-- ==================== 矩陣 All：全景橫向總表 ==================== -->
              <div id="matrixPanelAll" class="matrix-panel hidden space-y-4">
                <div class="flex items-center justify-between text-xs">
                  <span class="font-extrabold text-indigo-950 dark:text-indigo-200 flex items-center gap-1.5 text-sm">
                    <span>🌐</span><span>【全景橫向大總表】刑法總則第一章 阻卻事由 17 大維度縱覽</span>
                  </span>
                  <span class="text-slate-500 dark:text-slate-400 font-mono">一覽無遺・整頁縱深</span>
                </div>
                
                <div class="p-4 rounded-2xl bg-indigo-50/50 dark:bg-indigo-950/30 border border-indigo-200 dark:border-indigo-800/60 text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                  💡 <strong>速讀提示</strong>：全景總表將「阻卻違法」與「阻卻罪責」兩大體系，以及「正當防衛、緊急避難、義務衝突、承諾」四大支柱縱向鋪開，可直接使用上方「爭點關鍵字輸入框」進行高光過濾！
                </div>

                <div class="space-y-6">
                  <!-- 引用 Panel A -->
                  <div class="border border-slate-200 dark:border-slate-800 rounded-2xl p-4 bg-white dark:bg-slate-900/60">
                    <h4 class="font-black text-sm text-slate-900 dark:text-white mb-2">① 違法性與罪責體系大對稱</h4>
                    <p class="text-xs text-slate-500 mb-3">客觀評價行為（不法）與主觀評價行為人（罪責）之本質差異</p>
                    <div id="allTableAContainer"></div>
                  </div>
                  <!-- 引用 Panel B -->
                  <div class="border border-slate-200 dark:border-slate-800 rounded-2xl p-4 bg-white dark:bg-slate-900/60">
                    <h4 class="font-black text-sm text-slate-900 dark:text-white mb-2">② 防衛、避難、衝突與極端限制大對照</h4>
                    <p class="text-xs text-slate-500 mb-3">利益衡量原則之有無、手段限制門檻、禁止權利濫用與人性尊嚴底線</p>
                    <div id="allTableBContainer"></div>
                  </div>
                  <!-- 引用 Panel C -->
                  <div class="border border-slate-200 dark:border-slate-800 rounded-2xl p-4 bg-white dark:bg-slate-900/60">
                    <h4 class="font-black text-sm text-slate-900 dark:text-white mb-2">③ 被害人同意、承諾與推定之處分界限</h4>
                    <p class="text-xs text-slate-500 mb-3">第一階構成要件排除 vs 第二階阻卻違法，生命不可處分性之紅線</p>
                    <div id="allTableCContainer"></div>
                  </div>
                </div>
              </div>

              <!-- 💡 白話文超展開專區：三大核心矩陣通關秘笈 -->
              <div class="p-6 rounded-3xl border-2 border-purple-400 dark:border-purple-500/80 bg-gradient-to-br from-purple-50/90 via-indigo-50/40 to-pink-50/30 dark:from-[#1b122c] dark:via-[#120d20] dark:to-[#170a24] shadow-xl space-y-5">
                <div class="flex items-center justify-between pb-3 border-b-2 border-purple-200 dark:border-purple-800/60">
                  <div class="flex items-center gap-2">
                    <span class="text-2xl">💡</span>
                    <h4 class="font-black text-purple-950 dark:text-purple-200 text-base sm:text-lg">
                      白話文超展開：三大核心矩陣通關秘笈（秒殺國考考點）
                    </h4>
                  </div>
                  <span class="text-xs font-black px-3 py-1 rounded-full bg-purple-600 text-white shadow-sm shadow-purple-500/30">
                    全章總結直通車
                  </span>
                </div>

                <!-- 3大白話拆解卡片 -->
                <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                  
                  <!-- 卡片 1 -->
                  <div class="p-4 rounded-2xl bg-white/90 dark:bg-slate-900/80 border-2 border-indigo-300 dark:border-indigo-700 space-y-2.5 shadow-sm">
                    <div class="flex items-center gap-2 font-black text-indigo-900 dark:text-indigo-200 text-sm">
                      <span class="w-6 h-6 rounded-full bg-indigo-600 text-white flex items-center justify-center text-xs font-bold">A</span>
                      <span>違法性 vs 罪責：對事不對人 vs 對人不對事</span>
                    </div>
                    <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      阻卻違法是「<strong>這件事法律准你做</strong>（如警察抓通緝犯、正當防衛反擊）」，整件事是好事，幕後幫忙的共犯也通通無罪！阻卻罪責是「<strong>你做了大壞事，但你大腦失控或法律不強人所難</strong>（如發狂精神病患）」，只原諒你個人，教唆你的幕後黑手依然要抓去坐牢！
                    </p>
                    <div class="p-2 rounded-lg bg-indigo-50 dark:bg-indigo-950/40 text-[11px] text-indigo-800 dark:text-indigo-300 font-medium">
                      🎯 核心：違法性連帶影響共犯；罪責只關心行為人個人！
                    </div>
                  </div>

                  <!-- 卡片 2 -->
                  <div class="p-4 rounded-2xl bg-white/90 dark:bg-slate-900/80 border-2 border-emerald-300 dark:border-emerald-700 space-y-2.5 shadow-sm">
                    <div class="flex items-center gap-2 font-black text-emerald-900 dark:text-emerald-200 text-sm">
                      <span class="w-6 h-6 rounded-full bg-emerald-600 text-white flex items-center justify-center text-xs font-bold">B</span>
                      <span>防衛 vs 避難 vs 衝突：正邪 vs 轉嫁 vs 兩難</span>
                    </div>
                    <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      正當防衛是「<strong>正對不正</strong>」，痛扁歹徒不用逃跑、為保護財產打傷對方原則不用利益衡量（除非櫻桃案開槍殺人太懸殊）；緊急避難是「<strong>正對正</strong>」，把災難轉嫁無辜路人，非最後手段不可、必須嚴格保大犧牲小！義務衝突則是「<strong>手心手背都是肉</strong>」的死局，已盡力救一人就不罰！
                    </p>
                    <div class="p-2 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 text-[11px] text-emerald-800 dark:text-emerald-300 font-medium">
                      🎯 核心：防衛對壞人不衡平；避難害好人嚴格衡平！
                    </div>
                  </div>

                  <!-- 卡片 3 -->
                  <div class="p-4 rounded-2xl bg-white/90 dark:bg-slate-900/80 border-2 border-purple-300 dark:border-purple-700 space-y-2.5 shadow-sm">
                    <div class="flex items-center gap-2 font-black text-purple-900 dark:text-purple-200 text-sm">
                      <span class="w-6 h-6 rounded-full bg-purple-600 text-white flex items-center justify-center text-xs font-bold">C</span>
                      <span>同意 vs 承諾：開門請進 vs 准你打我</span>
                    </div>
                    <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      被害人同意是「<strong>開門請你進來住</strong>」，構成要件一開始就不該當；得被害人承諾是「<strong>打巴掌本來算傷害，但你事前准我打</strong>」，在第二階阻卻違法。但請死記國考天條：<strong>生命絕不可承諾！</strong>就算對方下跪求你殺他，動手依然成立「加工自殺罪」！
                    </p>
                    <div class="p-2 rounded-lg bg-purple-50 dark:bg-purple-950/40 text-[11px] text-purple-800 dark:text-purple-300 font-medium">
                      🎯 核心：第一階同意自始無罪，第二階承諾生命不可讓！
                    </div>
                  </div>

                </div>

                <!-- 第一章總結核心大通關口訣列 -->
                <div class="p-4 rounded-2xl bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white shadow-md flex items-center gap-3">
                  <span class="text-2xl">📢</span>
                  <div class="text-xs sm:text-sm font-black tracking-wide leading-relaxed">
                    第一章通關總口訣：不法評價行為好壞，罪責評價能否期待；防衛不必低頭退讓，避難嚴格保大犧牲；生命無價不得承諾，二階三階殊途同歸！
                  </div>
                </div>

              </div>

            </section>
            <div class="pt-8 border-t border-slate-200 dark:border-white/[0.08] grid grid-cols-1 sm:grid-cols-2 gap-4">
              <button onclick="switchView('intro')" class="group p-4 rounded-2xl border border-slate-200 dark:border-white/[0.08] hover:border-blue-500/40 bg-white dark:bg-[#111726] text-left transition-all hover:-translate-y-0.5 shadow-sm hover:shadow-md flex items-center gap-3">
                <div class="w-9 h-9 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 group-hover:bg-blue-50 dark:group-hover:bg-blue-950 group-hover:text-blue-600 dark:group-hover:text-blue-400 flex items-center justify-center text-sm font-bold shrink-0 transition-colors">
                  ←
                </div>
                <div class="min-w-0">
                  <span class="text-[11px] text-slate-400 font-mono block">上一篇</span>
                  <span class="text-xs font-bold text-slate-800 dark:text-slate-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors truncate block">
                    導論 犯罪概念與論罪結構 (第 XVIII-1 頁)
                  </span>
                </div>
              </button>

              <button onclick="switchView('chapter-2')" class="group p-4 rounded-2xl border border-blue-500/40 hover:border-blue-500 bg-gradient-to-br from-blue-50/50 to-indigo-50/30 dark:from-blue-950/30 dark:to-indigo-950/20 text-right transition-all hover:-translate-y-0.5 shadow-sm hover:shadow-md flex items-center justify-between gap-3">
                <div class="min-w-0 text-left">
                  <span class="text-[11px] text-blue-600 dark:text-blue-400 font-mono block font-bold">下一篇・繼續研讀</span>
                  <span class="text-xs font-extrabold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors truncate block">
                    第二章 刑法的論罪結構 (第 1-13 頁) →
                  </span>
                </div>
                <div class="w-9 h-9 rounded-xl bg-blue-600 text-white flex items-center justify-center text-sm font-bold shrink-0 group-hover:scale-105 transition-transform shadow-md shadow-blue-600/30">
                  →
                </div>
              </button>
            </div>

          </div>

        </div>
`;
