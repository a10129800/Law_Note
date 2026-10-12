/**
 * view-part0-ch3.js
 * 第零篇 第三章 刑法的法律效果（教材第 2-25 ～ 2-27 頁 前言與體系總覽）
 * 遵循 AGENTS.md 最高行為憲法規範：1:1 原文忠實無錯字、作者叮嚀純粹復刻、五大思考步驟圖解、純紅底線
 */
window.APP_VIEWS = window.APP_VIEWS || {};
window.APP_VIEWS['viewPart0Chapter3'] = window.APP_VIEWS['viewPart0Ch3'] = window.APP_VIEWS['part0Ch3'] = window.APP_VIEWS['part0Chapter3'] = window.APP_VIEWS['part0-ch3'] = window.APP_VIEWS['part0-chapter-3'] = `
        <!-- VIEW: 第零篇 第三章 刑法的法律效果 (教材第 2-25 ～ 2-27 頁 前言與體系總覽) -->
        <div id="viewPart0Chapter3" class="fade-enter hidden space-y-8">
          
          <!-- 頂部麵包屑導航與快速返回 -->
          <div class="flex items-center justify-between gap-4 border-b border-slate-200/80 dark:border-white/10 pb-3">
            <nav class="flex items-center gap-2 text-xs font-medium text-slate-500 dark:text-slate-400 flex-wrap">
              <button onclick="switchView('part0')" class="hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer">第零篇</button>
              <span>/</span>
              <span class="text-rose-600 dark:text-rose-400 font-bold">第三章 刑法的法律效果</span>
            </nav>
            <div class="flex items-center gap-2">
              <button onclick="switchView('part0-ch2')" class="text-xs text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 flex items-center gap-1 transition-colors shrink-0 font-medium cursor-pointer">
                <span>← 上一章：第二章 刑法的操作原理</span>
              </button>
              <button onclick="switchView('part0')" class="text-xs text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 flex items-center gap-1 transition-colors shrink-0 font-bold cursor-pointer">
                <span>← 返回第零篇導讀</span>
              </button>
            </div>
          </div>

          <!-- 章節大標題 (1:1 復刻原書圓圈倒三角章節抬頭風格) -->
          <div class="space-y-3">
            <div class="flex items-center gap-2 text-rose-600 dark:text-rose-400 font-mono text-xs font-bold">
              <span>第零篇・第三章</span>
              <span class="px-2 py-0.5 rounded-md bg-rose-50 dark:bg-rose-950/40 text-[11px] border border-rose-200 dark:border-rose-900/50">
                教材第 2-25 ～ 2-27 頁 原文前言全收錄
              </span>
            </div>

            <!-- 原書風格章節標頭 -->
            <div class="relative pt-2 pb-1">
              <div class="inline-flex flex-col items-center">
                <span class="font-serif font-black text-xl sm:text-2xl text-slate-900 dark:text-white tracking-widest border-b-2 border-slate-800 dark:border-slate-200 pb-1 px-4">
                  第 三 章
                </span>
                <span class="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-slate-800 dark:border-t-slate-200 mt-0.5"></span>
              </div>
              <h2 class="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 dark:text-white tracking-tight mt-3">
                刑法的法律效果
              </h2>
            </div>
            
            <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-serif leading-relaxed">
              犯罪成立後的實體制裁效果：手段（刑罰）與目的（法益保護）之比例關係、兩大面向三大刑罰理論，以及量定與執行四大思考步驟。
            </p>
          </div>

          <!-- ══════════════════════════════════════════════════════════ -->
          <!-- 一、章前導讀：犯罪成立後的代價與比例原則 (第 2-25 頁) -->
          <!-- ══════════════════════════════════════════════════════════ -->
          <section id="sec-p0ch3-preface" class="space-y-6 pt-2">
            <div class="flex items-center gap-3">
              <span class="w-2 h-6 rounded-full bg-rose-600"></span>
              <h3 class="text-lg sm:text-xl font-black text-slate-900 dark:text-white tracking-tight">
                一、章前導讀：犯罪成立後的法律效果與思考起點（教材第 2-25 頁）
              </h3>
            </div>

            <div class="p-6 rounded-3xl border border-slate-200 dark:border-white/[0.08] bg-white dark:bg-[#101623] shadow-sm space-y-6">
              
              <!-- 旗艦卡片：前言核心原文 -->
              <div class="p-6 rounded-2xl bg-gradient-to-br from-rose-50 via-amber-50/40 to-slate-50 dark:from-[#2e0b16] dark:via-[#1e1424] dark:to-[#0f172a] border-2 border-rose-300 dark:border-rose-500/80 border-l-[8px] border-l-rose-600 dark:border-l-rose-400 shadow-sm space-y-4">
                <div class="flex items-center justify-between flex-wrap gap-2">
                  <div class="flex items-center gap-2.5">
                    <span class="text-2xl">⚖️</span>
                    <div>
                      <span class="font-black text-sm sm:text-base text-rose-950 dark:text-rose-100">
                        法律效果的實質意義：手段與目的之間的比例關係
                      </span>
                      <span class="block text-[11px] font-mono font-bold text-rose-600 dark:text-rose-400 tracking-wider">
                        LEGAL CONSEQUENCES OF CRIME · PROPORTIONALITY
                      </span>
                    </div>
                  </div>
                  <span class="text-xs font-mono font-bold px-3 py-1 rounded-lg bg-rose-600 text-white shadow-xs">
                    教材第 2-25 頁
                  </span>
                </div>

                <!-- 1:1 原文呈現區 -->
                <div class="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-rose-200 dark:border-rose-900/60 shadow-xs">
                  <p class="font-serif text-sm sm:text-[15px] text-slate-800 dark:text-slate-200 leading-loose text-justify tracking-wide">
                    正式進入刑法學習之前，我們再來談談<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">犯罪成立後的法律效果</span>，如果不能對法律效果有初步理解，那麼大言不慚地說「某某人會成立本罪！」就猶如小孩子在玩扮家家酒般，距離現實非常遙遠，當然也沒辦法體會<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">手段（刑罰）與目的（法益保護原則）之間的比例關係</span>。
                  </p>
                </div>
              </div>

              <!-- 【作者叮嚀】第一則 (教材第 2-25 頁 1:1 原書手繪風框框復刻) -->
              <div class="relative p-6 sm:p-7 rounded-2xl border-2 border-slate-700 dark:border-slate-400 bg-amber-50/50 dark:bg-[#1a1714] space-y-3 shadow-xs">
                <!-- 手繪風作者叮嚀圖示徽章 -->
                <div class="flex items-center gap-2.5 pb-2 border-b border-dashed border-slate-300 dark:border-slate-700">
                  <div class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800 text-white dark:bg-slate-200 dark:text-slate-900 shadow-2xs">
                    <span class="text-sm">✍️</span>
                    <span class="font-serif font-black text-xs sm:text-sm tracking-wider">作 者 叮 嚀</span>
                  </div>
                  <span class="text-xs font-mono text-slate-500 dark:text-slate-400">EXPERT TIPS • 刑罰理論挪移前置的初心</span>
                </div>

                <!-- 作者叮嚀原文 -->
                <div class="font-serif text-xs sm:text-[14px] text-slate-800 dark:text-slate-200 leading-relaxed space-y-2 text-justify">
                  <p>
                    這部分涉及到「刑罰理論」，多數書籍都是放在最後一個篇章說明，除了內容較枯燥乏味外，考試的投資報酬率也極低。筆者將刑罰理論拉到前頭來，是要讓大家知道往後的種種討論都是通往這個最終效果，<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">理解我們究竟要付出什麼代價後，才能更審慎地研究法學問題</span>，期待我們共勉之。
                  </p>
                  <p class="text-slate-600 dark:text-slate-400 text-xs italic">
                    （第一次接觸刑法的同學們可以輕鬆愉快地翻閱本章，看不懂也沒關係，只要看過去有個印象就足夠了）
                  </p>
                </div>

                <div class="pt-2 flex justify-end text-[11px] font-mono text-slate-400">
                  <span>高點文化 • 陳奕廷律師編著（教材第 2-25 頁）</span>
                </div>
              </div>

            </div>
          </section>

          <!-- ══════════════════════════════════════════════════════════ -->
          <!-- 二、刑罰目的理論體系：兩大面向三大理論 (第 2-25～2-26 頁) -->
          <!-- ══════════════════════════════════════════════════════════ -->
          <section id="sec-p0ch3-theories" class="space-y-6 pt-2">
            <div class="flex items-center gap-3">
              <span class="w-2 h-6 rounded-full bg-indigo-600"></span>
              <h3 class="text-lg sm:text-xl font-black text-slate-900 dark:text-white tracking-tight">
                二、刑罰目的理論體系：懲罰過去 vs 預防未來（教材第 2-25 ～ 2-26 頁）
              </h3>
            </div>

            <div class="p-6 rounded-3xl border border-slate-200 dark:border-white/[0.08] bg-white dark:bg-[#101623] shadow-sm space-y-6">
              
              <!-- 前提導引金句卡片 -->
              <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-800 text-xs sm:text-sm font-serif text-slate-800 dark:text-slate-200 leading-relaxed">
                刑罰是以<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">法益保護作為終極目標</span>，不過對於這個目標卻有不同理解（學理上稱為刑罰目的理論），大致上有兩個面向：
              </div>

              <!-- 面向一：應報理論 (Strict Vertical Stacking) -->
              <div class="p-6 rounded-2xl bg-white dark:bg-slate-900 border-2 border-rose-300 dark:border-rose-900/60 border-l-[8px] border-l-rose-600 shadow-xs space-y-4">
                <div class="flex items-center justify-between flex-wrap gap-2">
                  <div class="flex items-center gap-2">
                    <span class="w-7 h-7 rounded-lg bg-rose-600 text-white flex items-center justify-center font-bold text-sm">一</span>
                    <h4 class="text-base sm:text-lg font-black text-slate-900 dark:text-white">
                      懲罰過去的法益侵害行為 ➔ 應報理論
                    </h4>
                  </div>
                  <span class="text-xs font-mono font-bold px-2.5 py-0.5 rounded bg-rose-100 dark:bg-rose-950 text-rose-700 dark:text-rose-300">
                    RETRIBUTIVE THEORY • 回溯過去
                  </span>
                </div>

                <div class="font-serif text-xs sm:text-[13.5px] text-slate-700 dark:text-slate-300 leading-relaxed space-y-2">
                  <p>
                    源自於原始社會中<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">「以眼還眼、以牙還牙」</span>的復仇思想，近代應報理論認為刑事制裁乃是公正地應報犯罪，藉以撫平犯罪所引起的損害。
                  </p>
                </div>

                <!-- 優缺點對照拆解卡片 (垂直堆疊，不擠壓) -->
                <div class="space-y-2.5 pt-1">
                  <div class="p-3.5 rounded-xl bg-emerald-50/80 dark:bg-emerald-950/30 border border-emerald-300 dark:border-emerald-800 text-xs leading-relaxed">
                    <span class="font-black text-emerald-800 dark:text-emerald-300 flex items-center gap-1.5 mb-1">
                      <span>🌿</span>
                      <span>本說優點：設定國家發動刑罰權的界限</span>
                    </span>
                    <p class="text-slate-700 dark:text-slate-300 font-serif">
                      刑罰不能超過行為人所製造的侵害，具備嚴格的罪責上限防線。
                    </p>
                  </div>

                  <div class="p-3.5 rounded-xl bg-rose-50/80 dark:bg-rose-950/30 border border-rose-300 dark:border-rose-800 text-xs leading-relaxed">
                    <span class="font-black text-rose-800 dark:text-rose-300 flex items-center gap-1.5 mb-1">
                      <span>🚨</span>
                      <span>本說缺點：無助於犯人脫離犯罪</span>
                    </span>
                    <p class="text-slate-700 dark:text-slate-300 font-serif">
                      無助於犯人受刑後脫離犯罪，更增添再犯率。
                    </p>
                  </div>
                </div>
              </div>

              <!-- 面向二：預防理論 (Strict Vertical Stacking) -->
              <div class="p-6 rounded-2xl bg-white dark:bg-slate-900 border-2 border-blue-300 dark:border-blue-900/60 border-l-[8px] border-l-blue-600 shadow-xs space-y-4">
                <div class="flex items-center justify-between flex-wrap gap-2">
                  <div class="flex items-center gap-2">
                    <span class="w-7 h-7 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold text-sm">二</span>
                    <h4 class="text-base sm:text-lg font-black text-slate-900 dark:text-white">
                      預防未來的法益侵害行為 ➔ 預防理論
                    </h4>
                  </div>
                  <span class="text-xs font-mono font-bold px-2.5 py-0.5 rounded bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300">
                    PREVENTIVE THEORY • 展望未來
                  </span>
                </div>

                <div class="font-serif text-xs sm:text-[13.5px] text-slate-700 dark:text-slate-300 leading-relaxed">
                  <p>
                    認為刑罰的存在應該是針對尚未發生的犯罪，亦即預防犯罪行為的再次發生，又可再依不同訴求對象分成兩種：
                  </p>
                </div>

                <!-- (一) 一般預防理論 -->
                <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-800 space-y-3">
                  <div class="flex items-center justify-between flex-wrap gap-2">
                    <span class="font-bold text-slate-900 dark:text-white text-xs sm:text-sm flex items-center gap-1.5">
                      <span class="w-5 h-5 rounded-md bg-blue-500 text-white flex items-center justify-center font-bold text-[11px]">1</span>
                      <span>(一) 一般預防理論（訴求對象：一般大眾）</span>
                    </span>
                    <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300">威嚇潛在犯罪者</span>
                  </div>
                  <p class="font-serif text-xs leading-relaxed text-slate-700 dark:text-slate-300">
                    藉由刑事制裁的痛苦性，可以威嚇一般大眾，從而產生嚇阻犯罪的預防功能。
                  </p>
                  <div class="space-y-2 text-xs">
                    <div class="p-2.5 rounded-lg bg-emerald-50/70 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-800">
                      <strong class="text-emerald-800 dark:text-emerald-300">優點：</strong>從社會大眾的角度切入，得以維護社會秩序。
                    </div>
                    <div class="p-2.5 rounded-lg bg-rose-50/70 dark:bg-rose-950/20 border border-rose-200 dark:border-rose-800">
                      <strong class="text-rose-800 dark:text-rose-300">缺點：</strong>與犯罪學理論相背離，因為多數犯人都是因為覺得自己不會被抓才去犯罪，而不會計算刑罰的受害，且將產生「刑罰越殘酷越好」的偏差觀念。
                    </div>
                  </div>
                </div>

                <!-- (二) 特別預防理論 -->
                <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-800 space-y-3">
                  <div class="flex items-center justify-between flex-wrap gap-2">
                    <span class="font-bold text-slate-900 dark:text-white text-xs sm:text-sm flex items-center gap-1.5">
                      <span class="w-5 h-5 rounded-md bg-indigo-500 text-white flex items-center justify-center font-bold text-[11px]">2</span>
                      <span>(二) 特別預防理論（訴求對象：具體犯罪人）</span>
                    </span>
                    <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300">矯治個別受刑人</span>
                  </div>
                  <p class="font-serif text-xs leading-relaxed text-slate-700 dark:text-slate-300">
                    認為刑罰的目的在於矯治犯罪人，希望藉此除去行為人的犯罪因子，使其能夠適應於社會而不再犯罪，發展出<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">「刑罰」與「保安處分」的雙軌體系</span>。
                  </p>
                  <div class="space-y-2 text-xs">
                    <div class="p-2.5 rounded-lg bg-emerald-50/70 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-800">
                      <strong class="text-emerald-800 dark:text-emerald-300">優點：</strong>有助於社會化與防範再犯。
                    </div>
                    <div class="p-2.5 rounded-lg bg-rose-50/70 dark:bg-rose-950/20 border border-rose-200 dark:border-rose-800">
                      <strong class="text-rose-800 dark:text-rose-300">缺點：</strong>行為人若有再犯風險時，貫徹本說將得出無限期刑罰的結論。
                    </div>
                  </div>
                </div>

              </div>

              <!-- 現代通說：結合理論與我國雙軌制裁體系 (教材第 2-26 頁) -->
              <div class="p-6 rounded-2xl bg-gradient-to-br from-purple-50 via-indigo-50/50 to-slate-50 dark:from-[#211138] dark:via-[#16122d] dark:to-[#0f172a] border-2 border-purple-400 dark:border-purple-600 border-l-[8px] border-l-purple-600 shadow-md space-y-4">
                <div class="flex items-center justify-between flex-wrap gap-2">
                  <div class="flex items-center gap-2">
                    <span class="text-2xl">🏛️</span>
                    <div>
                      <h4 class="text-base sm:text-lg font-black text-purple-950 dark:text-purple-100">
                        現代學說通說：結合理論（我國刑法所採）
                      </h4>
                      <span class="block text-[11px] font-mono text-purple-700 dark:text-purple-300 font-bold">
                        COMBINATION THEORY · DUAL-TRACK SANCTION SYSTEM
                      </span>
                    </div>
                  </div>
                  <span class="text-xs font-mono font-bold px-3 py-1 rounded-lg bg-purple-600 text-white shadow-xs">
                    我國現行體制
                  </span>
                </div>

                <div class="p-4 rounded-xl bg-white dark:bg-slate-900 border border-purple-200 dark:border-purple-900/60 font-serif text-xs sm:text-[13.5px] text-slate-800 dark:text-slate-200 leading-relaxed space-y-3">
                  <p>
                    有鑑於每一個理論均有無法突破的缺點，現代學說多採取<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">「結合理論」</span>，試圖結合各說之優點並補正其缺失。
                  </p>
                  <p class="pl-3 border-l-4 border-purple-500">
                    本說以<strong>行為人所製造的侵害為上限（取自應報理論）</strong>，而在此範圍內考量<strong>社會威嚇（取自一般預防理論）</strong>與<strong>再社會化（取自特別預防理論）</strong>。
                  </p>
                  <p>
                    我國刑法採取結合理論，因而有<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">「刑罰」與「保安處分」的雙軌制裁體系</span>。
                  </p>
                </div>

                <!-- 刑罰 vs 保安處分 發動門檻對比卡片 (重點法理拆解) -->
                <div class="p-4 rounded-xl bg-purple-100/60 dark:bg-purple-950/40 border-2 border-purple-300 dark:border-purple-800 space-y-3">
                  <span class="text-xs font-mono font-bold text-purple-900 dark:text-purple-200 flex items-center gap-1.5">
                    <span>💡</span>
                    <span>附帶一提：刑罰與保安處分之發動門檻與並行原則（極重要國考考點）</span>
                  </span>
                  
                  <div class="space-y-2 text-xs font-serif">
                    <div class="p-3 rounded-lg bg-white dark:bg-slate-900 border border-purple-200 dark:border-purple-900/50 flex items-start gap-2">
                      <span class="font-bold text-rose-600 dark:text-rose-400 shrink-0">⚖️ 刑罰發動：</span>
                      <span class="text-slate-800 dark:text-slate-200">
                        必須<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">成立犯罪（TB ＋ R ＋ S）</span>才能發動刑罰。
                      </span>
                    </div>
                    <div class="p-3 rounded-lg bg-white dark:bg-slate-900 border border-purple-200 dark:border-purple-900/50 flex items-start gap-2">
                      <span class="font-bold text-emerald-600 dark:text-emerald-400 shrink-0">🛡️ 保安處分：</span>
                      <span class="text-slate-800 dark:text-slate-200">
                        只要<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">具備不法（TB ＋ R）</span>便可發動，因為保安處分不在制裁，而是在於矯治。
                      </span>
                    </div>
                    <div class="p-2.5 rounded-lg bg-blue-50/70 dark:bg-blue-950/30 text-blue-900 dark:text-blue-200 text-[11.5px] font-medium">
                      ★ 當然，<strong>刑罰與保安處分可以並行</strong>。
                    </div>
                  </div>
                </div>

              </div>

              <!-- 【作者叮嚀】第二則 (教材第 2-26 頁 歷史故事與電影生動比喻) -->
              <div class="relative p-6 sm:p-7 rounded-2xl border-2 border-slate-700 dark:border-slate-400 bg-amber-50/50 dark:bg-[#1a1714] space-y-4 shadow-xs">
                <div class="flex items-center gap-2.5 pb-2 border-b border-dashed border-slate-300 dark:border-slate-700">
                  <div class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800 text-white dark:bg-slate-200 dark:text-slate-900 shadow-2xs">
                    <span class="text-sm">✍️</span>
                    <span class="font-serif font-black text-xs sm:text-sm tracking-wider">作 者 叮 嚀</span>
                  </div>
                  <span class="text-xs font-mono text-slate-500 dark:text-slate-400">HISTORICAL PARALLELS • 三大理論生活實例比喻</span>
                </div>

                <div class="font-serif text-xs sm:text-[14px] text-slate-800 dark:text-slate-200 leading-relaxed space-y-3 text-justify">
                  <p>
                    我們可以找幾個例子來說明前述的數個刑罰理論，例如巴比倫人所遵從的<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">漢摩拉比法典</span>，就是通篇充滿應報思想的最佳典範（不過其中第23條規定了國家賠償的無過失責任，算是非常先進的立法）。
                  </p>
                  <p>
                    至於一般預防理論可以聯想到兵家孫武為吳王闔閭訓練宮女的故事，孫武將搞笑的嬪妃<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">斬首立威</span>，使眾娘子們嚇得肝膽俱裂而莫敢不從，雖然立馬見效，卻也實在太過分了（竟然斬正妹……）。
                  </p>
                  <p>
                    特別預防理論則是想到在「開膛手傑克」的電影中，兇手雖然殺了這麼多人，最後卻沒有受到刑罰的處罰，反而是<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">送往醫院進行前額葉切開術</span>，這在當時被視為是對犯罪者的治療，相當於現下的保安處分（這應該不算雷文吧？！）。
                  </p>
                </div>

                <div class="pt-2 flex justify-end text-[11px] font-mono text-slate-400">
                  <span>高點文化 • 陳奕廷律師編著（教材第 2-26 頁）</span>
                </div>
              </div>

            </div>
          </section>

          <!-- ══════════════════════════════════════════════════════════ -->
          <!-- 三、刑罰理論的思考步驟：四大步驟與階層圖解 (第 2-27 頁) -->
          <!-- ══════════════════════════════════════════════════════════ -->
          <section id="sec-p0ch3-steps" class="space-y-6 pt-2">
            <div class="flex items-center gap-3">
              <span class="w-2 h-6 rounded-full bg-blue-600"></span>
              <h3 class="text-lg sm:text-xl font-black text-slate-900 dark:text-white tracking-tight">
                三、刑罰理論的思考步驟：四大步驟與原書圖解（教材第 2-27 頁）
              </h3>
            </div>

            <div class="p-6 rounded-3xl border border-slate-200 dark:border-white/[0.08] bg-white dark:bg-[#101623] shadow-sm space-y-6">
              
              <!-- 四大步驟文字導讀卡片 -->
              <div class="p-5 rounded-2xl bg-white dark:bg-slate-900 border-2 border-blue-200 dark:border-blue-900/60 shadow-xs space-y-3 font-serif text-xs sm:text-[14px] leading-relaxed text-slate-800 dark:text-slate-200">
                <p>
                  刑罰的產生過程可拆解成四大步驟，分別是<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">「搜尋基本範圍」</span>、<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">「調整處斷範圍」</span>、<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">「範圍內選定刑罰」</span>以及<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">「執行刑罰」</span>，這四大步驟同時與<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">法定刑、處斷刑、宣告刑與執行刑</span>息息相關。以下將按此順序介紹刑罰理論之內容。
                </p>
              </div>

              <!-- 1:1 復刻原書思考步驟圖解卡片 (純粹教科書幾何框架版) -->
              <div class="p-6 sm:p-8 rounded-2xl bg-slate-50/80 dark:bg-slate-900/60 border-2 border-slate-300 dark:border-slate-700 shadow-sm space-y-4">
                
                <div class="flex items-center justify-between pb-2 border-b border-slate-200 dark:border-slate-800">
                  <span class="font-serif font-black text-sm sm:text-base text-slate-900 dark:text-white underline decoration-slate-400 decoration-2 underline-offset-4">
                    刑罰理論的思考步驟
                  </span>
                  <span class="text-[11px] font-mono text-slate-400">教材第 2-27 頁 原書圖解復刻</span>
                </div>

                <!-- 流程圖外容器 (支援手機響應式滑動與零截斷) -->
                <div class="overflow-x-auto custom-scrollbar pt-2 pb-2">
                  <div class="min-w-[620px] p-4 bg-white dark:bg-slate-850 rounded-xl border border-slate-300 dark:border-slate-700">
                    
                    <!-- 原書幾何嵌套框圖：量定刑罰 (左大框) ➔ 執行刑罰 (右框) -->
                    <div class="flex items-stretch gap-4">
                      
                      <!-- 左大框：量定刑罰 -->
                      <div class="flex-1 border-2 border-slate-800 dark:border-slate-300 rounded-lg p-3 space-y-3 bg-white dark:bg-slate-900">
                        <div class="text-center font-serif font-black text-sm sm:text-base text-slate-900 dark:text-white py-1 border-b-2 border-slate-800 dark:border-slate-300">
                          量定刑罰
                        </div>

                        <!-- 量定刑罰內部：確定範圍 ➔ 選定刑罰 (宣告刑) -->
                        <div class="flex items-stretch gap-3 pt-1">
                          
                          <!-- 確定範圍 (左子框) -->
                          <div class="flex-1 border border-slate-600 dark:border-slate-400 rounded p-2 space-y-2 bg-slate-50 dark:bg-slate-800/50">
                            <div class="text-center font-serif font-bold text-xs sm:text-sm text-slate-800 dark:text-slate-100 pb-1 border-b border-slate-400">
                              確定範圍
                            </div>

                            <!-- 確定範圍內部：基本範圍 ➔ 調整範圍 -->
                            <div class="flex items-center gap-1.5 pt-1 text-xs font-serif">
                              <!-- 基本範圍 (法定刑) -->
                              <div class="flex-1 border border-slate-400 dark:border-slate-500 p-2 text-center rounded bg-white dark:bg-slate-900">
                                <div class="font-bold text-slate-900 dark:text-white">基本範圍</div>
                                <div class="text-[11px] text-slate-500 dark:text-slate-400 font-mono">（法定刑）</div>
                              </div>

                              <!-- 中間白色箭頭符號 -->
                              <div class="shrink-0 text-slate-500 font-bold px-0.5">➔</div>

                              <!-- 調整範圍 (處斷刑) -->
                              <div class="flex-1 border border-slate-400 dark:border-slate-500 p-2 text-center rounded bg-white dark:bg-slate-900">
                                <div class="font-bold text-slate-900 dark:text-white">調整範圍</div>
                                <div class="text-[11px] text-slate-500 dark:text-slate-400 font-mono">（處斷刑）</div>
                              </div>
                            </div>
                          </div>

                          <!-- 向右選定刑罰之寬箭頭 -->
                          <div class="flex items-center justify-center text-slate-600 dark:text-slate-300 font-bold px-1 text-base">
                            ➔
                          </div>

                          <!-- 選定刑罰 (宣告刑) -->
                          <div class="w-32 border border-slate-600 dark:border-slate-400 rounded p-2 flex flex-col justify-center items-center text-center bg-slate-50 dark:bg-slate-800/50 font-serif">
                            <div class="font-bold text-xs sm:text-sm text-slate-900 dark:text-white">選定刑罰</div>
                            <div class="text-[11px] text-slate-500 dark:text-slate-400 font-mono">（宣告刑）</div>
                          </div>

                        </div>
                      </div>

                      <!-- 向右執行刑罰之寬箭頭 -->
                      <div class="flex items-center justify-center text-slate-800 dark:text-slate-200 font-black px-1 text-xl">
                        ➔
                      </div>

                      <!-- 右框：執行刑罰 (執行刑) -->
                      <div class="w-36 border-2 border-slate-800 dark:border-slate-300 rounded-lg p-3 flex flex-col justify-center items-center text-center bg-slate-100 dark:bg-slate-800 font-serif shadow-2xs">
                        <div class="font-serif font-black text-sm sm:text-base text-slate-900 dark:text-white">
                          執行刑罰
                        </div>
                        <div class="text-xs text-slate-600 dark:text-slate-300 font-mono font-bold mt-1">
                          （執行刑）
                        </div>
                      </div>

                    </div>

                  </div>
                </div>

                <!-- 思考四階說明條目 -->
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 pt-2 text-xs">
                  <div class="p-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 space-y-1">
                    <span class="font-bold text-blue-600 dark:text-blue-400 font-mono">STEP 1 • 基本範圍</span>
                    <p class="text-slate-700 dark:text-slate-300 font-serif text-[11.5px]">
                      <strong>法定刑</strong>：分則各罪條文預先明定的抽象刑度區間（如普通殺人罪之死刑、無期徒刑或十年以上有期徒刑）。
                    </p>
                  </div>
                  <div class="p-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 space-y-1">
                    <span class="font-bold text-indigo-600 dark:text-indigo-400 font-mono">STEP 2 • 調整範圍</span>
                    <p class="text-slate-700 dark:text-slate-300 font-serif text-[11.5px]">
                      <strong>處斷刑</strong>：依總則加重（如累犯）或減輕（如未遂、自首、防衛過當）事由，擴張或限縮後的具體量刑區間。
                    </p>
                  </div>
                  <div class="p-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 space-y-1">
                    <span class="font-bold text-purple-600 dark:text-purple-400 font-mono">STEP 3 • 選定刑罰</span>
                    <p class="text-slate-700 dark:text-slate-300 font-serif text-[11.5px]">
                      <strong>宣告刑</strong>：法官審酌刑法 § 57 等量刑情狀後，於處斷刑範圍內於判決主文正式宣告之具體點數（如處有期徒刑二年）。
                    </p>
                  </div>
                  <div class="p-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 space-y-1">
                    <span class="font-bold text-emerald-600 dark:text-emerald-400 font-mono">STEP 4 • 執行刑罰</span>
                    <p class="text-slate-700 dark:text-slate-300 font-serif text-[11.5px]">
                      <strong>執行刑</strong>：涉及數罪併罰定應執行刑（§ 51）、緩刑、易科罰金或假釋等，檢察官指揮執行之最終實現刑度。
                    </p>
                  </div>
                </div>

              </div>

              <!-- 第一節已就緒導航卡片 -->
              <div class="p-5 rounded-2xl border-2 border-rose-300 dark:border-rose-800 bg-rose-50/50 dark:bg-rose-950/20 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div class="space-y-1 text-left">
                  <div class="flex items-center gap-2">
                    <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                    <span class="text-xs font-mono font-bold text-rose-700 dark:text-rose-400">SECTION 1 • READY</span>
                    <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-rose-200/60 dark:bg-rose-900/50 text-rose-800 dark:text-rose-200 font-bold">教材第 2-27 ～ 2-29 頁</span>
                  </div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900 dark:text-white">
                    第一節 刑罰的種類——兼談法定刑
                  </h4>
                  <p class="text-xs text-slate-600 dark:text-slate-400 font-serif">
                    主刑三大類（死刑、自由刑、罰金刑）、從刑（褫奪公權與沒收專章變革）、複數主刑選科與併科四模式。
                  </p>
                </div>
                <button onclick="switchView('part0-ch3-sec1')" class="px-5 py-2.5 rounded-xl bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold shadow-md shadow-rose-600/20 transition-all flex items-center gap-1.5 shrink-0 hover:scale-105 active:scale-95 cursor-pointer">
                  <span>🚀 進入第一節研讀</span>
                  <span>→</span>
                </button>
              </div>

            </div>
          </section>

          <!-- 底部導航分頁 -->
          <div class="pt-6 border-t border-slate-200 dark:border-white/[0.08] grid grid-cols-1 sm:grid-cols-2 gap-4">
            <button onclick="switchView('part0-ch2')" class="group p-4 rounded-2xl border border-slate-200 dark:border-white/[0.08] hover:border-indigo-500/40 bg-white dark:bg-[#111726] text-left transition-all hover:-translate-y-0.5 shadow-sm hover:shadow-md flex items-center gap-3 cursor-pointer">
              <div class="w-9 h-9 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 group-hover:bg-indigo-50 dark:group-hover:bg-indigo-950 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 flex items-center justify-center text-sm font-bold shrink-0 transition-colors">
                ←
              </div>
              <div class="min-w-0">
                <span class="text-[11px] text-slate-400 font-mono block">上一單元 (第 2-9 ~ 2-24 頁)</span>
                <span class="text-xs font-bold text-slate-800 dark:text-slate-200 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors truncate block">
                  第二章 刑法的操作原理
                </span>
              </div>
            </button>

            <button onclick="switchView('part0-ch3-sec1')" class="group p-4 rounded-2xl border border-rose-500/40 hover:border-rose-500 bg-gradient-to-br from-rose-50/50 to-amber-50/30 dark:from-rose-950/30 dark:to-amber-950/20 text-right transition-all hover:-translate-y-0.5 shadow-sm hover:shadow-md flex items-center justify-between gap-3 cursor-pointer">
              <div class="min-w-0 text-left">
                <span class="text-[11px] text-rose-700 dark:text-rose-400 font-mono block font-bold">進入本章第一節 (第 2-27 頁)</span>
                <span class="text-xs font-extrabold text-slate-900 dark:text-white group-hover:text-rose-700 dark:group-hover:text-rose-400 transition-colors truncate block">
                  第一節 刑罰的種類——兼談法定刑 →
                </span>
              </div>
              <div class="w-9 h-9 rounded-xl bg-gradient-to-br from-rose-500 to-rose-600 text-white flex items-center justify-center text-sm font-bold shrink-0 group-hover:scale-105 transition-transform shadow-md shadow-rose-500/30">
                🚀
              </div>
            </button>
          </div>

        </div>
`;
