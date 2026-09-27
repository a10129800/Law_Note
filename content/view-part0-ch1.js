/**
 * view-part0-ch1.js
 * 第零篇 第一章 刑法的運作原理 (教材第 2-1 頁)
 */
window.APP_VIEWS = window.APP_VIEWS || {};
window.APP_VIEWS['viewPart0Chapter1'] = window.APP_VIEWS['viewPart0Ch1'] = window.APP_VIEWS['part0Ch1'] = window.APP_VIEWS['part0Chapter1'] = `
        <!-- VIEW 5: 第零篇 第一章 刑法的運作原理 (教材第 2-1 頁) -->
        <div id="viewPart0Chapter1" class="fade-enter hidden space-y-8">
          
          <!-- Breadcrumb & Back -->
          <div class="flex items-center justify-between gap-4 border-b border-slate-100 dark:border-white/[0.06] pb-3">
            <nav class="flex items-center gap-2 text-xs font-medium text-slate-400">
              <button onclick="switchView('part-0')" class="hover:text-blue-500 transition-colors">第零篇 刑法的運作、操作原理與法律效果</button>
              <span>/</span>
              <span class="text-blue-600 dark:text-blue-400 font-bold">第一章 刑法的運作原理</span>
            </nav>
            <button onclick="switchView('part-0')" class="text-xs text-slate-400 hover:text-blue-500 flex items-center gap-1 transition-colors">
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
              </svg>
              <span>返回第零篇導讀</span>
            </button>
          </div>

          <!-- Chapter Header -->
          <div class="space-y-2">
            <div class="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-mono text-xs font-bold">
              <span>第零篇・第一章</span>
              <span class="px-2 py-0.5 rounded-md bg-blue-50 dark:bg-blue-950/40 text-[11px] border border-blue-200 dark:border-blue-900/50">教材第 2-1 頁</span>
            </div>
            <h2 class="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
              第一章 刑法的運作原理
            </h2>
            <p class="text-xs sm:text-sm text-slate-500">
              探討刑法目的（應報與預防）、刑罰手段嚴厲性與謙抑性、四大支柱推導體系，以及第一節法益保護原則之本質
            </p>
          </div>

          <!-- 一、篇章前言：刑法目的、刑罰手段與四大支柱之推導 -->
          <section id="sec-p0ch1-four-pillars" class="space-y-6 pt-2">
            <div class="flex items-center gap-3">
              <span class="w-2 h-6 rounded-full bg-blue-600"></span>
              <h3 class="text-lg sm:text-xl font-black text-slate-900 dark:text-white tracking-tight">
                一、篇章前言：刑法目的、刑罰手段與四大支柱之推導（教材第 2-1 頁）
              </h3>
            </div>

            <div class="p-6 rounded-3xl border border-slate-200 dark:border-white/[0.08] bg-white dark:bg-[#101623] shadow-sm space-y-6">
              
              <!-- 教材原文引用：XMind 心智圖導圖視覺化 -->
              <div class="space-y-4">
                <div class="flex items-center justify-between flex-wrap gap-2">
                  <div class="flex items-center gap-2">
                    <span class="text-xs font-bold text-blue-600 dark:text-blue-400 flex items-center gap-1.5 font-mono">
                      <span>📖</span>
                      <span>教材第 2-1 頁 原文前言體系導圖</span>
                    </span>
                    <span class="text-[10px] font-mono px-2 py-0.5 rounded-full bg-gradient-to-r from-blue-500/10 to-indigo-500/10 text-blue-600 dark:text-blue-400 font-bold border border-blue-500/20">
                      體系心智圖解
                    </span>
                  </div>
                  <button onclick="toggleOriginalQuote()" class="text-[11px] font-medium text-slate-500 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 flex items-center gap-1 transition-colors px-2 py-1 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800">
                    <span id="quoteToggleIcon">📄</span>
                    <span id="quoteToggleText">查看純文字引文</span>
                  </button>
                </div>

                <!-- 隱藏的純文字引文（點擊按鈕可隨時展開） -->
                <div id="originalQuoteContainer" class="hidden">
                  <blockquote class="p-4 rounded-2xl border-l-4 border-blue-500 bg-blue-50/50 dark:bg-blue-950/30 text-xs sm:text-sm text-slate-700 dark:text-slate-200 leading-relaxed italic space-y-2">
                    <p>
                      「刑法的目的除了對過往犯罪加以制裁外（應報思想），更展望未來希望減少犯罪發生（預防思想）。其實無論根據何種思想，刑法的最終目的都是保護「人類極為重要生活利益」，簡稱法益保護。刑法基於法益保護的目的，允許使用較為嚴厲的手段，這種手段就是刑罰。刑罰的嚴厲性可以從法律效果窺見一二，生命的剝奪或自由的喪失，無疑是各種法律之最，然刑罰施加必須與目的追求成正比，若不慎得動用刑罰便應節制，縱使不得不發，也應遵循下列準則：基於應報，刑罰不允許超出行為人的責任範圍，亦即小罪不能大罰；基於預防，刑罰的依據必須明確，不能有任何含糊使人民無所安其手足。」
                    </p>
                    <p>
                      「刑法的目的在保護重要的人類生活利益，即法益保護原則；而刑罰作為手段，必須與所追求的目的成比例，逼不得已才動用刑罰，這是最後手段性原則（—謙抑性思想）。即使動用刑罰，由使人民安措其手足導出罪刑法定原則，再由小罪不能大罰帶出罪責原則。這四大原則呈現出刑法的四大支柱，一切的刑法問題看似棘手了，也必須終歸於這四大支柱。以下分別介紹法益保護原則（第一節）、罪刑法定原則（第二節）以及罪責原則（第三節），至於最後手段性原則與罪刑法定、罪責原則乃互為光影，故一併納入第二、三節中。」
                    </p>
                  </blockquote>
                </div>

                <!-- PDF 心智圖導圖卡片本體 -->
                <div class="rounded-2xl border border-slate-200/90 dark:border-slate-800/80 bg-gradient-to-b from-slate-50/60 to-white dark:from-[#0d131f] dark:to-[#101726] p-4 sm:p-6 shadow-sm space-y-6 overflow-hidden">
                  
                  <!-- 頂部核心命題：大標題 -->
                  <div class="relative p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-blue-50 via-indigo-50/70 to-purple-50/50 dark:from-blue-950/40 dark:via-indigo-950/30 dark:to-purple-950/20 border-2 border-blue-200/90 dark:border-blue-800/60 shadow-xs text-center sm:text-left">
                    <div class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-600 text-white font-mono text-[11px] font-bold mb-2 shadow-xs">
                      <span>⚖️</span>
                      <span>刑法之兩大目的思想起點</span>
                    </div>
                    <h4 class="text-base sm:text-lg font-black text-slate-900 dark:text-white leading-relaxed tracking-wide">
                      「刑法的目的除了對過往犯罪加以制裁外（<span class="text-blue-700 dark:text-blue-300 font-black">應報思想</span>），<br class="hidden sm:inline" />
                      更展望未來希望減少犯罪發生（<span class="text-indigo-700 dark:text-indigo-300 font-black">預防思想</span>）。」
                    </h4>
                  </div>

                  <!-- 心智圖主幹分支區 (原則一 ~ 原則四) -->
                  <div class="space-y-4 relative">

                    <!-- 原則一 -->
                    <div class="flex flex-col sm:flex-row items-start sm:items-center gap-3 group">
                      <div class="flex-shrink-0">
                        <span class="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-gradient-to-r from-rose-500 to-red-600 text-white text-xs font-black shadow-md shadow-rose-500/20 ring-2 ring-rose-300 dark:ring-rose-800 tracking-wider">
                          原則一
                        </span>
                      </div>
                      <div class="flex-1 w-full p-3.5 sm:p-4 rounded-2xl bg-rose-50/90 dark:bg-rose-950/40 border-2 border-l-[6px] border-rose-300 border-l-rose-500 dark:border-rose-800 dark:border-l-rose-500 text-xs sm:text-sm text-slate-800 dark:text-rose-100 font-medium leading-relaxed shadow-sm transition-all hover:shadow-md hover:border-rose-400">
                        其實無論根據何種思想，刑法的最終目的都是保護<span class="font-extrabold text-rose-950 dark:text-rose-100 bg-rose-200/80 dark:bg-rose-900/60 px-2 py-0.5 rounded-md border border-rose-300/80 dark:border-rose-700">「人類極為重要生活利益」</span>，簡稱<span class="inline-flex items-center gap-1 font-black text-white bg-rose-600 dark:bg-rose-600 px-2.5 py-0.5 rounded-lg shadow-xs ml-1">🎯 法益保護</span>。
                      </div>
                    </div>

                    <!-- 原則二 -->
                    <div class="flex flex-col sm:flex-row items-start sm:items-center gap-3 group">
                      <div class="flex-shrink-0">
                        <span class="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs font-black shadow-md shadow-amber-500/20 ring-2 ring-amber-300 dark:ring-amber-800 tracking-wider">
                          原則二
                        </span>
                      </div>
                      <div class="flex-1 w-full p-3.5 sm:p-4 rounded-2xl bg-amber-50/90 dark:bg-amber-950/40 border-2 border-l-[6px] border-amber-300 border-l-amber-500 dark:border-amber-800 dark:border-l-amber-500 text-xs sm:text-sm text-slate-800 dark:text-amber-100 font-medium leading-relaxed shadow-sm transition-all hover:shadow-md hover:border-amber-400">
                        <span class="text-slate-800 dark:text-amber-100 font-medium">刑法基於法益保護的目的，允許使用較為嚴厲的手段，</span><span class="inline-flex items-center gap-1 font-black text-white bg-amber-600 dark:bg-amber-600 px-2.5 py-0.5 rounded-lg shadow-xs ml-1">⚔️ 這種手段就是刑罰</span>。
                      </div>
                    </div>

                    <!-- 原則三 -->
                    <div class="flex flex-col sm:flex-row items-start gap-3 group">
                      <div class="flex-shrink-0 pt-1">
                        <span class="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 text-white text-xs font-black shadow-md shadow-emerald-500/20 ring-2 ring-emerald-300 dark:ring-emerald-800 tracking-wider">
                          原則三
                        </span>
                      </div>
                      
                      <!-- 原則三右側多層展開結構 -->
                      <div class="flex-1 w-full space-y-2.5">
                        <!-- 第一層：嚴厲性 -->
                        <div class="p-3.5 sm:p-4 rounded-2xl bg-emerald-50/90 dark:bg-emerald-950/40 border-2 border-l-[6px] border-emerald-300 border-l-emerald-500 dark:border-emerald-800 dark:border-l-emerald-500 text-xs sm:text-sm text-slate-800 dark:text-emerald-100 font-medium leading-relaxed shadow-sm transition-all hover:shadow-md hover:border-emerald-400">
                          刑罰的嚴厲性可以從法律效果窺見一二，<span class="font-extrabold text-emerald-950 dark:text-emerald-100 bg-emerald-200/80 dark:bg-emerald-900/60 px-2 py-0.5 rounded-md border border-emerald-300/80 dark:border-emerald-700">生命的剝奪或自由的喪失</span>，無疑是各種法律之最，
                        </div>

                        <!-- 第二層：比例與節制 -->
                        <div class="p-3.5 sm:p-4 rounded-2xl bg-emerald-50/90 dark:bg-emerald-950/40 border-2 border-l-[6px] border-emerald-300 border-l-emerald-500 dark:border-emerald-800 dark:border-l-emerald-500 text-xs sm:text-sm text-slate-800 dark:text-emerald-100 font-medium leading-relaxed shadow-sm transition-all hover:shadow-md hover:border-emerald-400">
                          然刑罰施加必須<span class="font-extrabold text-emerald-950 dark:text-emerald-100 bg-emerald-200/80 dark:bg-emerald-900/60 px-2 py-0.5 rounded-md border border-emerald-300/80 dark:border-emerald-700">與目的追求成正比</span>，若不慎得動用刑罰便應節制，縱使不得不發，也應遵循下列準則：
                        </div>

                        <!-- 第三層：應報與預防兩大分支 -->
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1 pl-3 border-l-4 border-emerald-400 dark:border-emerald-600 ml-2">
                          <!-- 基於應報分支 -->
                          <div class="flex items-center gap-2.5 p-3 rounded-xl bg-purple-50/90 dark:bg-purple-950/40 border-2 border-l-4 border-purple-300 border-l-sky-500 dark:border-purple-800 dark:border-l-sky-400 shadow-sm">
                            <span class="px-2.5 py-1 rounded-lg bg-sky-600 text-white font-bold text-xs flex-shrink-0 shadow-xs">
                              基於應報
                            </span>
                            <span class="text-xs sm:text-sm text-purple-950 dark:text-purple-200 font-semibold leading-snug">
                              刑罰不允許超出行為人的責任範圍，亦即<span class="text-rose-700 dark:text-rose-300 font-black bg-rose-100 dark:bg-rose-950/60 px-1.5 py-0.5 rounded">小罪不能大罰</span>；
                            </span>
                          </div>

                          <!-- 基於預防分支 -->
                          <div class="flex items-center gap-2.5 p-3 rounded-xl bg-orange-50/90 dark:bg-orange-950/40 border-2 border-l-4 border-orange-300 border-l-cyan-500 dark:border-orange-800 dark:border-l-cyan-400 shadow-sm">
                            <span class="px-2.5 py-1 rounded-lg bg-cyan-600 text-white font-bold text-xs flex-shrink-0 shadow-xs">
                              基於預防
                            </span>
                            <span class="text-xs sm:text-sm text-amber-950 dark:text-amber-200 font-semibold leading-snug">
                              刑罰的依據必須明確，不能有任何含糊使<span class="text-amber-700 dark:text-amber-300 font-black bg-amber-100 dark:bg-amber-950/60 px-1.5 py-0.5 rounded">人民無所安其手足</span>。
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <!-- 原則四：四大支柱推導虛線框 + 右側終極支柱總結 -->
                    <div class="flex flex-col sm:flex-row items-start gap-3 group pt-1">
                      <div class="flex-shrink-0 pt-2">
                        <span class="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-xs font-black shadow-md shadow-indigo-500/20 ring-2 ring-indigo-300 dark:ring-indigo-800 tracking-wider">
                          原則四
                        </span>
                      </div>

                      <!-- 演繹大外框與右側匯聚膠囊 -->
                      <div class="flex-1 w-full grid grid-cols-1 lg:grid-cols-12 gap-3.5 items-stretch">
                        
                        <!-- 左側 8 欄：虛線框包覆的三段推導 -->
                        <div class="lg:col-span-8 border-2 border-dashed border-indigo-400 dark:border-indigo-500/80 rounded-2xl p-4 bg-indigo-50/70 dark:bg-indigo-950/30 space-y-2.5 relative shadow-xs">
                          <div class="text-[10px] font-mono text-indigo-700 dark:text-indigo-300 font-bold uppercase tracking-wider mb-1 flex items-center gap-1">
                            <span>⚡</span>
                            <span>四大支柱之核心演繹脈絡</span>
                          </div>

                          <!-- 演繹條 1：法益保護原則 -->
                          <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 p-3 rounded-xl bg-white dark:bg-slate-900 border-2 border-emerald-300 dark:border-emerald-700 shadow-xs">
                            <span class="text-xs sm:text-sm text-slate-800 dark:text-slate-200 font-medium">
                              刑法的目的在保護重要的人類生活利益
                            </span>
                            <span class="px-2.5 py-1 rounded-lg bg-emerald-600 text-white font-bold text-xs whitespace-nowrap shadow-xs">
                              即法益保護原則
                            </span>
                          </div>

                          <!-- 演繹條 2：最後手段性原則 -->
                          <div class="p-3 rounded-xl bg-sky-50/90 dark:bg-sky-950/50 border-2 border-l-[6px] border-sky-300 border-l-sky-500 dark:border-sky-800 dark:border-l-sky-400 text-xs sm:text-sm text-slate-800 dark:text-sky-100 font-medium leading-relaxed shadow-xs">
                            而刑罰作為手段，必須與所追求的目的成比例，逼不得已才動用刑罰，這是<span class="font-bold text-sky-800 dark:text-sky-200 bg-sky-200/70 dark:bg-sky-900/60 px-1.5 py-0.5 rounded">最後手段性原則</span>（—謙抑性思想）。
                          </div>

                          <!-- 演繹條 3：罪刑法定與罪責原則 -->
                          <div class="p-3 rounded-xl bg-purple-50/90 dark:bg-purple-950/50 border-2 border-l-[6px] border-purple-300 border-l-purple-500 dark:border-purple-800 dark:border-l-purple-400 text-xs sm:text-sm text-slate-800 dark:text-purple-100 font-medium leading-relaxed shadow-xs">
                            即使動用刑罰，由使人民安措其手足導出<span class="font-bold text-purple-800 dark:text-purple-200 bg-purple-200/70 dark:bg-purple-900/60 px-1.5 py-0.5 rounded mr-1">罪刑法定原則</span>，再由小罪不能大罰帶出<span class="font-bold text-purple-800 dark:text-purple-200 bg-purple-200/70 dark:bg-purple-900/60 px-1.5 py-0.5 rounded">罪責原則</span>。
                          </div>
                        </div>

                        <!-- 右側 4 欄：四大支柱結論（忠實還原 PDF 右側藍色指引氣泡） -->
                        <div class="lg:col-span-4 rounded-2xl bg-gradient-to-br from-blue-600 via-indigo-600 to-indigo-800 text-white p-4 sm:p-5 shadow-lg flex flex-col justify-center relative overflow-hidden border-2 border-blue-400/50">
                          <!-- 裝飾背景光暈 -->
                          <div class="absolute -right-6 -bottom-6 w-24 h-24 bg-white/10 rounded-full blur-xl pointer-events-none"></div>
                          
                          <div class="flex items-center gap-1.5 text-xs font-mono text-sky-100 mb-2 font-bold">
                            <span>🏛️</span>
                            <span>刑法體系終極結論</span>
                          </div>
                          <p class="text-xs sm:text-sm font-bold text-white leading-relaxed tracking-wide">
                            這四大原則呈現出刑法的四大支柱，一切的刑法問題看似棘手了，也必須終歸於這四大支柱。
                          </p>
                        </div>

                      </div>
                    </div>

                  </div>

                  <!-- 底部章節對照與互為光影說明 (PDF 底部對照) -->
                  <div class="pt-4 border-t border-slate-200/80 dark:border-slate-800/80 grid grid-cols-1 lg:grid-cols-12 gap-4 items-start">
                    
                    <!-- 左側介紹與三節按鈕 (7 欄) -->
                    <div class="lg:col-span-7 space-y-2.5">
                      <div class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300 font-bold text-xs">
                        <span>📌</span>
                        <span>以下分別介紹：</span>
                      </div>
                      <div class="grid grid-cols-1 sm:grid-cols-3 gap-2">
                        <button type="button" onclick="switchView('part0-ch1-sec1')" class="p-2.5 rounded-xl bg-rose-50 dark:bg-rose-950/40 border border-rose-300 dark:border-rose-800/60 text-xs font-bold text-rose-900 dark:text-rose-200 text-center hover:shadow-md hover:bg-rose-100 dark:hover:bg-rose-900/60 transition-all flex items-center justify-center cursor-pointer">
                          1. 法益保護原則<br class="hidden sm:inline" />（第一節）
                        </button>
                        <button type="button" onclick="switchView('part0-ch1-sec2')" class="p-2.5 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-300 dark:border-amber-800/60 text-xs font-bold text-amber-900 dark:text-amber-200 text-center hover:shadow-md hover:bg-amber-100 dark:hover:bg-amber-900/60 transition-all flex items-center justify-center cursor-pointer">
                          2. 罪刑法定原則<br class="hidden sm:inline" />（第二節）
                        </button>
                        <button type="button" onclick="switchView('part0-ch1-sec3')" class="p-2.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-800/60 text-xs font-bold text-emerald-900 dark:text-emerald-200 text-center hover:shadow-md hover:bg-emerald-100 dark:hover:bg-emerald-900/60 transition-all flex items-center justify-center cursor-pointer">
                          3. 罪責原則<br class="hidden sm:inline" />（第三節）
                        </button>
                      </div>
                    </div>

                    <!-- 右側互為光影說明 (5 欄) -->
                    <div class="lg:col-span-5 p-3.5 rounded-xl bg-teal-50/90 dark:bg-teal-950/40 border border-teal-200 dark:border-teal-700/60 text-xs sm:text-sm text-teal-950 dark:text-teal-100 flex items-start gap-2.5 shadow-sm">
                      <span class="w-2.5 h-2.5 rounded-full bg-teal-500 animate-pulse mt-1 flex-shrink-0"></span>
                      <p class="leading-relaxed font-medium">
                        至於<span class="font-bold text-teal-700 dark:text-teal-300">最後手段性原則</span>與罪刑法定、罪責原則乃<span class="font-bold text-teal-700 dark:text-teal-300 underline decoration-teal-400 underline-offset-2">互為光影</span>，故一併納入第二、三節中。
                      </p>
                    </div>

                  </div>

                </div>
              </div>

              <!-- 思想對照：應報 vs 預防 -->
              <div class="space-y-3 pt-2">
                <h4 class="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <span class="px-2 py-0.5 rounded-md bg-blue-500/10 text-blue-600 dark:text-blue-400 font-mono text-xs">思想淵源</span>
                  <span>刑法的兩大目的思想與終極交會</span>
                </h4>
                
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <!-- 應報思想 -->
                  <div class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-2">
                    <div class="flex items-center justify-between">
                      <span class="font-bold text-xs text-rose-600 dark:text-rose-400 flex items-center gap-1">
                        <span>⚖️</span>
                        <span>應報思想（Retribution）</span>
                      </span>
                      <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-rose-500/10 text-rose-500 font-bold">回顧過往</span>
                    </div>
                    <div class="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200">
                      對過往已發生之犯罪加以嚴厲制裁
                    </div>
                    <p class="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                      著眼於過去行為之罪責非難，強調惡有惡報、回復受侵害的正義。衍生出「小罪不能大罰，刑罰不得超出行為人責任範圍」之準則。
                    </p>
                  </div>

                  <!-- 預防思想 -->
                  <div class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-2">
                    <div class="flex items-center justify-between">
                      <span class="font-bold text-xs text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                        <span>🔮</span>
                        <span>預防思想（Prevention）</span>
                      </span>
                      <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-500 font-bold">展望未來</span>
                    </div>
                    <div class="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200">
                      展望未來，希望藉由法律威嚇減少犯罪發生
                    </div>
                    <p class="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                      著眼於未來社會秩序之維持（一般預防與特別預防）。衍生出「刑罰依據必須明確，不能有任何含糊，使人民安措其手足」之準則。
                    </p>
                  </div>
                </div>

                <!-- 共同終極目的徽章 -->
                <div class="p-3.5 rounded-2xl bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-purple-500/10 border border-blue-500/20 flex items-center justify-between flex-wrap gap-2 text-xs">
                  <div class="flex items-center gap-2">
                    <span class="text-base">🎯</span>
                    <span class="font-bold text-slate-900 dark:text-white">兩大思想的唯一終極目的：</span>
                    <span class="font-black text-blue-600 dark:text-blue-400">保護「人類極為重要生活利益」（簡稱法益保護）</span>
                  </div>
                  <span class="text-[11px] font-mono text-slate-400">教材第 2-1 頁 核心命題</span>
                </div>
              </div>

              <!-- 刑罰手段之嚴厲性與節制 -->
              <div class="p-4 sm:p-5 rounded-2xl border border-amber-200 dark:border-amber-900/50 bg-amber-50/40 dark:bg-amber-950/20 space-y-3 text-xs">
                <div class="flex items-center gap-2 font-bold text-amber-800 dark:text-amber-300">
                  <span>⚠️</span>
                  <span class="text-sm">刑罰手段之本質：各種法律中最嚴厲之利刃</span>
                </div>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-slate-600 dark:text-slate-300 leading-relaxed">
                  <div class="p-3 rounded-xl bg-white dark:bg-slate-900 border border-amber-200/60 dark:border-amber-900/40 space-y-1">
                    <div class="font-bold text-slate-800 dark:text-slate-200 flex items-center gap-1.5">
                      <span class="w-2 h-2 rounded-full bg-red-500"></span>
                      <span>法律效果之極致性</span>
                    </div>
                    <p class="text-[11.5px] text-slate-500 dark:text-slate-400">
                      刑罰所伴隨的<strong>「生命的剝奪（死刑）」</strong>或<strong>「自由的喪失（無期徒刑、有期徒刑、拘役）」</strong>，無疑是所有法律制裁手段中之最劇烈者。
                    </p>
                  </div>
                  <div class="p-3 rounded-xl bg-white dark:bg-slate-900 border border-amber-200/60 dark:border-amber-900/40 space-y-1">
                    <div class="font-bold text-slate-800 dark:text-slate-200 flex items-center gap-1.5">
                      <span class="w-2 h-2 rounded-full bg-amber-500"></span>
                      <span>比例原則與動用節制</span>
                    </div>
                    <p class="text-[11.5px] text-slate-500 dark:text-slate-400">
                      正因刑罰極度嚴厲，其施加<strong>必須與目的追求成正比</strong>，若不得不動用刑罰便應極力節制，此即<strong>最後手段性原則（謙抑性思想）</strong>之精髓。
                    </p>
                  </div>
                </div>
              </div>

              <!-- 刑法的四大支柱互動視覺看板 -->
              <div class="space-y-4 pt-2">
                <div class="flex items-center justify-between">
                  <h4 class="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    <span class="text-indigo-500">🏛️</span>
                    <span>刑法的四大支柱推導體系（The Four Pillars）</span>
                  </h4>
                  <span class="text-[11px] font-mono text-slate-400">一切刑法難題之終極歸宿</span>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
                  
                  <!-- 支柱 1 -->
                  <div class="p-4 rounded-2xl bg-blue-50/70 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-900/50 space-y-2 relative group hover:border-blue-400 transition-all">
                    <div class="flex items-center justify-between">
                      <span class="px-2 py-0.5 rounded bg-blue-500 text-white font-mono font-bold text-[10px]">支柱 ①</span>
                      <span class="text-slate-400 font-mono text-[10px]">第一節</span>
                    </div>
                    <div class="font-black text-slate-900 dark:text-white text-sm">
                      法益保護原則
                    </div>
                    <div class="text-[11px] font-semibold text-blue-600 dark:text-blue-400">
                      【刑法的目的】
                    </div>
                    <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-[11.5px]">
                      刑法的存在目的在於保護人類重要生活利益。無實質法益受損害或危險，即無動用刑法之正當性。
                    </p>
                  </div>

                  <!-- 支柱 2 -->
                  <div class="p-4 rounded-2xl bg-amber-50/70 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900/50 space-y-2 relative group hover:border-amber-400 transition-all">
                    <div class="flex items-center justify-between">
                      <span class="px-2 py-0.5 rounded bg-amber-500 text-white font-mono font-bold text-[10px]">支柱 ②</span>
                      <span class="text-slate-400 font-mono text-[10px]">互為光影</span>
                    </div>
                    <div class="font-black text-slate-900 dark:text-white text-sm">
                      最後手段性原則
                    </div>
                    <div class="text-[11px] font-semibold text-amber-600 dark:text-amber-400">
                      【手段的節制・謙抑性】
                    </div>
                    <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-[11.5px]">
                      刑罰手段極其嚴厲，必須與目的成比例。民法、行政法等手段足資解決時，逼不得已才動用刑罰。
                    </p>
                  </div>

                  <!-- 支柱 3 -->
                  <div class="p-4 rounded-2xl bg-indigo-50/70 dark:bg-indigo-950/30 border border-indigo-200 dark:border-indigo-900/50 space-y-2 relative group hover:border-indigo-400 transition-all">
                    <div class="flex items-center justify-between">
                      <span class="px-2 py-0.5 rounded bg-indigo-500 text-white font-mono font-bold text-[10px]">支柱 ③</span>
                      <span class="text-slate-400 font-mono text-[10px]">第二節</span>
                    </div>
                    <div class="font-black text-slate-900 dark:text-white text-sm">
                      罪刑法定原則
                    </div>
                    <div class="text-[11px] font-semibold text-indigo-600 dark:text-indigo-400">
                      【使人民安措手足】
                    </div>
                    <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-[11.5px]">
                      由預防思想導出：刑罰的依據必須預先成文且明確，杜絕任何模糊含混，使人民有所依循行止。
                    </p>
                  </div>

                  <!-- 支柱 4 -->
                  <div class="p-4 rounded-2xl bg-rose-50/70 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-900/50 space-y-2 relative group hover:border-rose-400 transition-all">
                    <div class="flex items-center justify-between">
                      <span class="px-2 py-0.5 rounded bg-rose-500 text-white font-mono font-bold text-[10px]">支柱 ④</span>
                      <span class="text-slate-400 font-mono text-[10px]">第三節</span>
                    </div>
                    <div class="font-black text-slate-900 dark:text-white text-sm">
                      罪責原則
                    </div>
                    <div class="text-[11px] font-semibold text-rose-600 dark:text-rose-400">
                      【小罪不能大罰】
                    </div>
                    <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-[11.5px]">
                      由應報思想導出：刑罰之施加絕對不允許超出行為人的責任範圍，無責任即無刑罰，重罪重罰、輕罪輕罰。
                    </p>
                  </div>

                </div>

                <!-- 體系交互備註 -->
                <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-900/40 border border-slate-200/80 dark:border-slate-800 text-[11px] text-slate-500 dark:text-slate-400 flex items-center gap-2">
                  <span>💡</span>
                  <span><strong>教材體系提示：</strong>四大支柱中，「最後手段性原則」與「罪刑法定原則」、「罪責原則」乃互為光影，故教材將最後手段性原則一併納入第二節與第三節中深入探討。</span>
                </div>

              </div>

            </div>
          </section>

          <!-- 二、第一章 子單元與分節研讀導引 -->
          <section id="sec-p0ch1-sub-sections-nav" class="space-y-6 pt-2">
            <div class="flex items-center gap-3">
              <span class="w-2 h-6 rounded-full bg-indigo-600"></span>
              <h3 class="text-lg sm:text-xl font-black text-slate-900 dark:text-white tracking-tight">
                二、本章子目錄與分節研讀導引（教材第 2-1 頁起）
              </h3>
            </div>

            <div class="space-y-4">
              <!-- 第一節 導航卡片 (已完畢) -->
              <div class="p-6 rounded-3xl border border-indigo-500/30 bg-gradient-to-br from-indigo-50/70 via-blue-50/40 to-purple-50/30 dark:from-indigo-950/30 dark:via-blue-950/20 dark:to-purple-950/20 shadow-sm space-y-4 hover:border-indigo-500/60 transition-all">
                <div class="flex items-center justify-between flex-wrap gap-2">
                  <div class="flex items-center gap-2.5">
                    <span class="w-8 h-8 rounded-xl bg-indigo-600 text-white flex items-center justify-center font-bold text-sm shadow-md shadow-indigo-500/30">💎</span>
                    <div>
                      <span class="text-[10px] font-mono uppercase font-bold text-emerald-600 dark:text-emerald-400 block tracking-wider">SECTION 1 • COMPLETED ✓</span>
                      <h4 class="text-base sm:text-lg font-black text-slate-900 dark:text-white">
                        第一節 法益保護原則——何謂法益？
                      </h4>
                    </div>
                  </div>
                  <span class="text-[11px] font-mono px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 font-bold border border-emerald-500/20">
                    教材第 2-1 ～ 2-4 頁 全節完備
                  </span>
                </div>

                <div class="p-3.5 rounded-xl bg-white/80 dark:bg-slate-900/80 border border-indigo-200/60 dark:border-indigo-900/50">
                  <p class="text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-200 leading-relaxed italic">
                    「凡是以法律手段而加以保護之重要生活利益，即稱為法益。」
                  </p>
                  <p class="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    涵蓋法益之核心法定定義、三大本質與源起特徵、雙重機能、二元區分量相異說、三大案例（剪髮案、黑吃黑案、肇逃案）與解題提示方法論。
                  </p>
                </div>

                <div class="flex items-center justify-between pt-1">
                  <span class="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                    <span>📚 刑法四大支柱之第一支柱</span>
                  </span>
                  <button onclick="switchView('part0-ch1-sec1')" class="px-4 py-2 rounded-xl bg-indigo-600/90 hover:bg-indigo-600 text-white text-xs font-bold shadow-md shadow-indigo-500/20 transition-all flex items-center gap-1.5 group hover:-translate-y-0.5">
                    <span>複習 第一節 法益保護原則</span>
                    <span class="group-hover:translate-x-0.5 transition-transform">→</span>
                  </button>
                </div>
              </div>

              <!-- 第二節與第三節 啟用卡片網格 (雙雙完備・點擊立即研讀！) -->
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <!-- 第二節 罪刑法定原則 -->
                <div class="p-5 rounded-3xl border-2 border-blue-500/40 bg-gradient-to-br from-blue-50/90 via-sky-50/50 to-indigo-50/40 dark:from-blue-950/40 dark:via-sky-950/30 dark:to-indigo-950/20 shadow-sm space-y-3.5 hover:border-blue-500 transition-all flex flex-col justify-between">
                  <div class="space-y-2.5">
                    <div class="flex items-center justify-between">
                      <div class="flex items-center gap-2">
                        <span class="w-7 h-7 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold text-xs shadow-sm">📜</span>
                        <span class="text-[10px] font-mono uppercase font-bold text-blue-600 dark:text-blue-400">SECTION 2 • READY TO READ</span>
                      </div>
                      <span class="text-[10px] font-mono px-2 py-0.5 rounded-md bg-blue-500/10 text-blue-600 dark:text-blue-400 font-bold border border-blue-500/20">
                        教材第 2-5 ～ 2-7 頁
                      </span>
                    </div>
                    <h4 class="text-base font-black text-slate-900 dark:text-white">
                      第二節 罪刑法定原則——付出代價的根據何在？
                    </h4>
                    <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                      釋字第 384 號理由書・刑法 § 1・四大派生面向（習慣法禁止、類推適用禁止、明確性原則、溯及既往禁止）與四大經典案例（1-4 至 1-7）及公法憲法對照。
                    </p>
                  </div>
                  <div class="pt-2 border-t border-blue-200/50 dark:border-blue-900/40 flex items-center justify-between">
                    <span class="text-[11px] text-slate-500 dark:text-slate-400">四大支柱之第三支柱</span>
                    <button onclick="switchView('part0-ch1-sec2')" class="px-3.5 py-1.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold shadow-md shadow-blue-500/20 transition-all flex items-center gap-1 group hover:-translate-y-0.5">
                      <span>🚀 研讀 第二節</span>
                      <span class="group-hover:translate-x-0.5 transition-transform">→</span>
                    </button>
                  </div>
                </div>

                <!-- 第三節 罪責原則 -->
                <div class="p-5 rounded-3xl border-2 border-purple-500/40 bg-gradient-to-br from-purple-50/90 via-fuchsia-50/50 to-indigo-50/40 dark:from-purple-950/40 dark:via-fuchsia-950/30 dark:to-indigo-950/20 shadow-sm space-y-3.5 hover:border-purple-500 transition-all flex flex-col justify-between">
                  <div class="space-y-2.5">
                    <div class="flex items-center justify-between">
                      <div class="flex items-center gap-2">
                        <span class="w-7 h-7 rounded-lg bg-purple-600 text-white flex items-center justify-center font-bold text-xs shadow-sm">⚖️</span>
                        <span class="text-[10px] font-mono uppercase font-bold text-purple-600 dark:text-purple-400">SECTION 3 • READY TO READ</span>
                      </div>
                      <span class="text-[10px] font-mono px-2 py-0.5 rounded-md bg-purple-500/10 text-purple-600 dark:text-purple-400 font-bold border border-purple-500/20">
                        教材第 2-7 ～ 2-8 頁
                      </span>
                    </div>
                    <h4 class="text-base font-black text-slate-900 dark:text-white">
                      第三節 罪責原則——付出代價的極限何在？
                    </h4>
                    <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                      釋字第 630 號理由書・雙重核心內涵（無罪責即無刑罰、罪刑相當原則）・案例 1-8（準強盜罪達難以抗拒合憲限縮）・解題提示（有利人民容許例外）・全章四大支柱總結！
                    </p>
                  </div>
                  <div class="pt-2 border-t border-purple-200/50 dark:border-purple-900/40 flex items-center justify-between">
                    <span class="text-[11px] text-slate-500 dark:text-slate-400">四大支柱之第四支柱</span>
                    <button onclick="switchView('part0-ch1-sec3')" class="px-3.5 py-1.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white text-xs font-bold shadow-md shadow-purple-500/20 transition-all flex items-center gap-1 group hover:-translate-y-0.5">
                      <span>🚀 研讀 第三節</span>
                      <span class="group-hover:translate-x-0.5 transition-transform">→</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <!-- Chapter Bottom Pagination: 第零篇第一章底部 -->
          <div class="pt-8 border-t border-slate-200 dark:border-white/[0.08] grid grid-cols-1 sm:grid-cols-2 gap-4">
            <button onclick="switchView('part-0')" class="group p-4 rounded-2xl border border-slate-200 dark:border-white/[0.08] hover:border-indigo-500/40 bg-white dark:bg-[#111726] text-left transition-all hover:-translate-y-0.5 shadow-sm hover:shadow-md flex items-center gap-3">
              <div class="w-9 h-9 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 group-hover:bg-indigo-50 dark:group-hover:bg-indigo-950 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 flex items-center justify-center text-sm font-bold shrink-0 transition-colors">
                ←
              </div>
              <div class="min-w-0">
                <span class="text-[11px] text-slate-400 font-mono block">上一單元</span>
                <span class="text-xs font-bold text-slate-800 dark:text-slate-200 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors truncate block">
                  第零篇 本篇導讀 (第 0-1 頁)
                </span>
              </div>
            </button>

            <button onclick="switchView('part0-ch1-sec1')" class="group p-4 rounded-2xl border border-indigo-500/40 hover:border-indigo-500 bg-gradient-to-br from-indigo-50/50 to-blue-50/30 dark:from-indigo-950/30 dark:to-blue-950/20 text-right transition-all hover:-translate-y-0.5 shadow-sm hover:shadow-md flex items-center justify-between gap-3">
              <div class="min-w-0 text-left">
                <span class="text-[11px] text-indigo-700 dark:text-indigo-400 font-mono block font-bold">下一單元 (第 2-1 頁)</span>
                <span class="text-xs font-extrabold text-slate-900 dark:text-white group-hover:text-indigo-700 dark:group-hover:text-indigo-400 transition-colors truncate block">
                  第一節 法益保護原則——何謂法益？ →
                </span>
              </div>
              <div class="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 to-indigo-600 text-white flex items-center justify-center text-sm font-bold shrink-0 group-hover:scale-105 transition-transform shadow-md shadow-indigo-500/30">
                💎
              </div>
            </button>
          </div>

        </div>
`;

window.toggleOriginalQuote = function() {
  const container = document.getElementById('originalQuoteContainer');
  const text = document.getElementById('quoteToggleText');
  const icon = document.getElementById('quoteToggleIcon');
  if (!container) return;
  if (container.classList.contains('hidden')) {
    container.classList.remove('hidden');
    if (text) text.innerText = '隱藏純文字引文';
    if (icon) icon.innerText = '✕';
  } else {
    container.classList.add('hidden');
    if (text) text.innerText = '查看純文字引文';
    if (icon) icon.innerText = '📄';
  }
};
