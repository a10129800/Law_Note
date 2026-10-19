/**
 * view-part1-ch2-sec1.js
 * 第一篇 第二章 第一節 基本要素——主體、行為、結果歸責（教材第 3-7 ～ 3-11 頁 全節完結旗艦版）
 * 嚴格遵循 AGENTS.md 最高行為憲法規範：
 * 1. 逐字精準核對課本原文（第 3-7 ～ 3-11 頁 零錯字、零腦補）
 * 2. 案例 2-1 ～ 2-4 嚴格落實「五位一體法學劇院」標準
 * 3. 嚴格單欄垂直上下堆疊排版（Strict Vertical Stacking）
 * 4. 重點文字採用「純紅底線」規範（No Aggressive Red Text）
 * 5. 狀態犯 vs 繼續犯對比表（【表1】）與做菜調味料比喻高質感圖解
 * 6. 犬系四大天王導師法定圖片比例與 2026 最新法條動態定錨
 */

window.APP_VIEWS = window.APP_VIEWS || {};
window.APP_VIEWS['viewPart1Ch2Sec1'] = window.APP_VIEWS['part1Ch2Sec1'] = window.APP_VIEWS['part1-ch2-sec1'] = `
        <!-- VIEW: 第一篇 第二章 第一節 基本要素——主體、行為、結果歸責 (教材第 3-7 ～ 3-11 頁) -->
        <div id="viewPart1Ch2Sec1" class="fade-enter hidden space-y-8">
          
          <!-- 麵包屑導航 -->
          <div class="flex items-center justify-between gap-4 border-b border-slate-200/80 dark:border-white/10 pb-3">
            <nav class="flex items-center gap-2 text-xs font-medium text-slate-500 dark:text-slate-400 flex-wrap">
              <button onclick="switchView('part1')" class="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">第一篇</button>
              <span>/</span>
              <button onclick="switchView('part1-ch1')" class="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">第一章 刑法意義的行為</button>
              <span>/</span>
              <span class="text-blue-600 dark:text-blue-400 font-bold">第二章 第一節 基本要素</span>
            </nav>
            <button onclick="switchView('part1-ch1')" class="text-xs text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 flex items-center gap-1 transition-colors shrink-0 font-bold cursor-pointer">
              <span>← 返回上一章：第一章</span>
            </button>
          </div>

          <!-- 章節大標題 Banner -->
          <div class="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-indigo-700 via-blue-800 to-slate-900 text-white shadow-lg space-y-3 relative overflow-hidden border border-indigo-400/40">
            <div class="absolute -right-8 -bottom-8 w-48 h-48 bg-white/10 rounded-full blur-2xl pointer-events-none"></div>
            
            <div class="flex items-center gap-2 text-xs font-mono text-indigo-200 font-bold uppercase tracking-wider">
              <span>PART 1 • CHAPTER 2 • SECTION 1</span>
              <span>•</span>
              <span class="px-2 py-0.5 rounded-full bg-white/20 text-white text-[11px]">教材第 3-7 ～ 3-11 頁 全節完結</span>
            </div>

            <h2 class="text-2xl sm:text-3xl md:text-4xl font-serif font-black tracking-tight text-white leading-tight">
              第二章 犯罪類型<br>
              <span class="text-xl sm:text-2xl font-sans font-bold text-indigo-200">第一節 基本要素——主體、行為、結果歸責</span>
            </h2>

            <p class="text-sm sm:text-base text-indigo-100 leading-relaxed font-serif pt-1 max-w-3xl">
              構成要件切入思考的基石！掌握犯罪類型的基本要素：<span class="underline decoration-amber-300 decoration-2 underline-offset-4 font-bold text-white">行為主體</span>（自然人 vs 法人責任）、<span class="underline decoration-amber-300 decoration-2 underline-offset-4 font-bold text-white">構成要件行為</span>（定式 vs 不定式、狀態犯 vs 繼續犯、行為客體與行為情狀）以及<span class="underline decoration-amber-300 decoration-2 underline-offset-4 font-bold text-white">構成要件結果歸責</span>（行為與結果分離觀察法則）。
            </p>
          </div>

          <!-- ==================== 第二章 前言與本節總覽 (教材第 3-7 頁) ==================== -->
          <section id="sec-p1ch2-sec1-intro" class="space-y-6 pt-2">
            <div class="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3">
              <div class="flex items-center gap-3">
                <span class="w-2.5 h-6 rounded-full bg-indigo-600"></span>
                <h3 class="text-lg sm:text-xl font-black text-slate-900 dark:text-white tracking-tight">
                  第二章前言與第一節體系核心導引（教材第 3-7 頁）
                </h3>
              </div>
              <span class="text-xs font-mono font-bold px-2.5 py-1 rounded-lg bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-800">
                p. 3-7 原文
              </span>
            </div>

            <!-- 教材原文 1:1 卡片 -->
            <div class="rounded-2xl bg-white dark:bg-[#121827] border-l-8 border-l-blue-600 border border-slate-200/80 dark:border-white/10 p-5 sm:p-6 shadow-xs space-y-3">
              <div class="flex items-center justify-between text-xs font-bold text-slate-500 dark:text-slate-400 border-b border-slate-100 dark:border-slate-800 pb-2">
                <span class="flex items-center gap-2">
                  <span class="text-base">📖</span>
                  <span>教材原文逐字核對 • 第二章開章導言</span>
                </span>
                <span class="font-mono text-blue-600 dark:text-blue-400">第 3-7 頁</span>
              </div>
              <p class="font-serif text-slate-800 dark:text-slate-200 text-base sm:text-lg leading-relaxed indent-8 text-justify">
                犯罪類型是由構成要件切入思考並加以分類的種種形態，並描繪出「單一具體犯罪」的典型不法內涵與基礎特徵。深入說明各種犯罪類型之前，先來介紹組成構成要件的基本要素與變體要素。
              </p>
            </div>
          </section>

          <!-- ==================== 一、行為主體 (教材第 3-7 頁) ==================== -->
          <section id="sec-p1ch2-sec1-subject" class="space-y-6 pt-4">
            <div class="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3">
              <div class="flex items-center gap-3">
                <span class="w-2.5 h-6 rounded-full bg-blue-600"></span>
                <h3 class="text-lg sm:text-xl font-black text-slate-900 dark:text-white tracking-tight">
                  一、行為主體（自然人適格 vs 法人犯罪能力）
                </h3>
              </div>
              <span class="text-xs font-mono font-bold px-2.5 py-1 rounded-lg bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-800">
                p. 3-7 原文
              </span>
            </div>

            <!-- 教材原文逐字卡片 -->
            <div class="rounded-2xl bg-white dark:bg-[#121827] border-l-8 border-l-blue-600 border border-slate-200/80 dark:border-white/10 p-5 sm:p-6 shadow-xs space-y-3">
              <div class="flex items-center justify-between text-xs font-bold text-slate-500 dark:text-slate-400 border-b border-slate-100 dark:border-slate-800 pb-2">
                <span class="flex items-center gap-2">
                  <span class="text-base">📖</span>
                  <span>教材原文精讀 • 一、行為主體</span>
                </span>
                <span class="font-mono text-blue-600 dark:text-blue-400">第 3-7 頁</span>
              </div>
              <p class="font-serif text-slate-800 dark:text-slate-200 text-base sm:text-lg leading-relaxed indent-8 text-justify">
                也就是犯罪行為人，原則上只有<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">自然人才是適格的行為主體</span>。至於法人，通說認為無意志自由可言的法人，因為無法給予非難而非行為主體。我國立法原則上認為<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">法人無犯罪能力</span>，僅例外在附屬刑法中處罰法人，其形式有（參考99台上1789決）：
              </p>
              <div class="space-y-2 pt-2 text-sm sm:text-base font-serif text-slate-700 dark:text-slate-300">
                <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
                  <strong>(一) 兩罰責任</strong>：在法人犯罪時，<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">同時處罰負責人與法人</span>。
                </div>
                <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
                  <strong>(二) 代罰責任</strong>：在法人犯罪時，<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">僅處罰負責人</span>，或謂將法人之責任轉嫁給負責人承擔，又稱轉嫁責任。
                </div>
              </div>
            </div>

            <!-- 柴柴名師白話客廳 -->
            <div class="p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-amber-50/90 via-orange-50/50 to-white dark:from-[#1c1917] dark:via-[#16120e] dark:to-[#121827] border border-amber-300/80 dark:border-amber-900/40 space-y-3 shadow-xs">
              <div class="flex items-center gap-3">
                <div class="w-10 h-10 rounded-xl overflow-hidden border-2 border-amber-400 shadow-xs shrink-0">
                  <img src="images/shiba_law_professor.jpg" alt="柴柴教授" class="w-full h-full object-cover" style="object-position: center 20%; transform: scale(1.38);">
                </div>
                <div>
                  <div class="font-black text-amber-950 dark:text-amber-200 text-sm">🐾 柴柴法學教授 • 白話客廳提點</div>
                  <div class="text-[11px] text-amber-700 dark:text-amber-400 font-mono">行為能力 vs 責任能力</div>
                </div>
              </div>
              <p class="font-serif text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                同學們請注意！法人只是法律擬制的產物，它沒有大腦也沒有自由意志，不能自行產生犯意，所以通說堅持法人沒有刑法上的行為能力與罪責能力。但在環境保護、公平交易、稅捐等附屬刑法中，為了遏止黑心企業，法律特別設有「兩罰」與「代罰」規定！
              </p>
            </div>
          </section>

          <!-- ==================== 二、構成要件行為 (教材第 3-7 ～ 3-11 頁) ==================== -->
          <section id="sec-p1ch2-sec1-behavior" class="space-y-6 pt-4">
            <div class="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3">
              <div class="flex items-center gap-3">
                <span class="w-2.5 h-6 rounded-full bg-blue-600"></span>
                <h3 class="text-lg sm:text-xl font-black text-slate-900 dark:text-white tracking-tight">
                  二、構成要件行為（定式 vs 不定式、狀態犯 vs 繼續犯）
                </h3>
              </div>
              <span class="text-xs font-mono font-bold px-2.5 py-1 rounded-lg bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-800">
                p. 3-7～3-8
              </span>
            </div>

            <!-- (一) 定式犯罪 vs 不定式犯罪 -->
            <div class="rounded-2xl bg-white dark:bg-[#121827] border-l-8 border-l-blue-600 border border-slate-200/80 dark:border-white/10 p-5 sm:p-6 shadow-xs space-y-3">
              <div class="flex items-center justify-between text-xs font-bold text-slate-500 dark:text-slate-400 border-b border-slate-100 dark:border-slate-800 pb-2">
                <span class="flex items-center gap-2">
                  <span class="text-base">📖</span>
                  <span>教材原文精讀 • (一) 定式犯罪與不定式犯罪</span>
                </span>
                <span class="font-mono text-blue-600 dark:text-blue-400">第 3-7 ～ 3-8 頁</span>
              </div>
              <p class="font-serif text-slate-800 dark:text-slate-200 text-base sm:text-lg leading-relaxed indent-8 text-justify">
                乃實現構成要件的方式或手段。<br>
                (一)該罪行為已被立法者嚴格限定，稱為<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">定式犯罪</span>，典型如詐欺罪（§339）的施用詐術使人陷於錯誤，若被害人陷於錯誤並非本於行為人的施用詐術，則構成要件行為不該當。反之立法者並無限定該罪的行為方式，稱為<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">不定式犯罪</span>，典型如殺人罪的殺人行為，可以是開槍，可以是下毒，甚至是單純地按下電腦鍵盤按鍵關掉維生系統，任君選擇。
              </p>
            </div>

            <!-- (二) 狀態犯 vs 繼續犯 原文 -->
            <div class="rounded-2xl bg-white dark:bg-[#121827] border-l-8 border-l-purple-600 border border-slate-200/80 dark:border-white/10 p-5 sm:p-6 shadow-xs space-y-3">
              <div class="flex items-center justify-between text-xs font-bold text-slate-500 dark:text-slate-400 border-b border-slate-100 dark:border-slate-800 pb-2">
                <span class="flex items-center gap-2">
                  <span class="text-base">📖</span>
                  <span>教材原文精讀 • (二) 狀態犯與繼續犯</span>
                </span>
                <span class="font-mono text-purple-600 dark:text-purple-400">第 3-8 頁</span>
              </div>
              <p class="font-serif text-slate-800 dark:text-slate-200 text-base sm:text-lg leading-relaxed indent-8 text-justify">
                (二)該罪行為「<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">僅單純創設不法狀態</span>」乃<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">狀態犯</span>，若是「<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">創設不法狀態＋維持不法狀態</span>」則是<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">繼續犯</span>。前者如殺人罪的殺人行為，是單純創設生命法益被剝奪的狀態；後者如私行拘禁罪的拘禁行為（§302），除創設行動自由的侵害外（把人關起來），又包括維持侵害情狀的久暫（一關關10年）。同理，略誘犯罪（如§241、§298等）、持有危險物品罪（§186、§187）、參與犯罪結社罪（§154）都是繼續犯。
              </p>
            </div>

            <!-- ==================== 案例 2-1 狀態犯砍三十刀案 五位一體法學劇院 ==================== -->
            <div id="case-2-1" class="rounded-3xl border-2 border-blue-400/80 dark:border-blue-700/80 bg-white dark:bg-[#121827] shadow-md overflow-hidden space-y-0">
              
              <!-- 案例標題 Bar -->
              <div class="p-4 sm:p-5 bg-gradient-to-r from-blue-700 via-indigo-700 to-blue-800 text-white flex items-center justify-between gap-3">
                <div class="flex items-center gap-2.5">
                  <span class="w-8 h-8 rounded-xl bg-white/20 text-white flex items-center justify-center font-bold text-sm shadow-xs">⚔️</span>
                  <div>
                    <span class="text-[11px] font-mono text-blue-200 font-bold tracking-wider uppercase block">CASE STUDY 2-1 • 狀態犯之特徵</span>
                    <h4 class="text-base sm:text-lg font-bold text-white tracking-tight">案例 2-1 持刀砍殺三十刀斷頸案（教材第 3-8 頁）</h4>
                  </div>
                </div>
                <span class="text-xs font-mono font-bold px-2 py-0.5 rounded-full bg-white/20 text-white shrink-0">p. 3-8</span>
              </div>

              <!-- 案例事實與問題導引 -->
              <div class="p-5 sm:p-6 bg-slate-50/70 dark:bg-slate-900/50 border-b border-slate-200 dark:border-slate-800 space-y-3 font-serif">
                <div class="p-4 rounded-xl bg-white dark:bg-[#151c2d] border-l-4 border-l-blue-600 shadow-2xs space-y-2">
                  <div class="text-xs font-sans font-bold text-blue-700 dark:text-blue-300">【案件事實】</div>
                  <p class="text-slate-800 dark:text-slate-200 text-sm sm:text-base leading-relaxed">
                    甲本於殺人的想法，持刀砍殺乙三十刀後，最後一刀將乙斷頸。若有丙想為甲助陣，最遲應在何時加入？此外，追訴權時效從何時起算？
                  </p>
                </div>
                <div class="p-4 rounded-xl bg-blue-50/60 dark:bg-blue-950/30 border border-blue-200/80 dark:border-blue-900/40 text-xs sm:text-sm text-slate-700 dark:text-slate-300 space-y-1.5 leading-relaxed">
                  <div class="font-sans font-bold text-blue-900 dark:text-blue-200">【課本問題導引逐字】</div>
                  <p>殺人罪是典型的狀態犯，我們用這個案例說明狀態犯的特徵：</p>
                  <p>(一)甲殺死乙而達成犯罪既遂，同一時間甲的犯行也完全終了。<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">狀態犯的既遂與終了會在同一時點上</span>。</p>
                  <p>(二)犯罪參與的最終時點是<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">終了（＝既遂＝犯罪成立）之前</span>，因此丙至遲須在乙死亡前加入。</p>
                  <p>(三)依§80Ⅱ，狀態犯之追訴權時效自<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">犯罪終了（＝既遂＝犯罪成立）時起算</span>。</p>
                </div>
              </div>

              <!-- 五位一體法學劇院主體 (單欄垂直堆疊) -->
              <div class="p-5 sm:p-6 space-y-4">
                
                <!-- 1. 言詞辯論法庭對決區域 -->
                <div class="rounded-2xl p-4 sm:p-5 bg-gradient-to-br from-slate-100 to-blue-50/50 dark:from-slate-900 dark:to-[#162035] border border-slate-300 dark:border-slate-700 space-y-3">
                  <div class="flex items-center justify-between border-b border-slate-200 dark:border-slate-700 pb-2">
                    <span class="font-sans font-black text-xs sm:text-sm text-slate-900 dark:text-white flex items-center gap-1.5">
                      <span>🏛️</span>
                      <span>法庭言詞攻防對決現場</span>
                    </span>
                    <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300">#狀態犯既遂即終了</span>
                  </div>
                  <!-- 公訴赤狐 -->
                  <div class="flex gap-3 items-start">
                    <div class="w-9 h-9 rounded-xl overflow-hidden border border-rose-400 shrink-0">
                      <img src="images/prosecutor_fox.jpg" alt="公訴檢察官赤狐女律師" class="w-full h-full object-cover" style="object-position: center 20%; transform: scale(1.35);">
                    </div>
                    <div class="flex-1 bg-rose-50 dark:bg-rose-950/40 p-3 rounded-xl border border-rose-200 dark:border-rose-900/40 text-xs sm:text-sm text-slate-800 dark:text-slate-200">
                      <strong class="text-rose-700 dark:text-rose-400 block mb-1">公訴檢察官赤狐女律師：</strong>
                      「甲砍殺三十刀，在第三十刀斷頸氣絕之前，犯罪均處於著手實行階段！丙只要在斷頸前加入砍殺或助威，均屬中途加入之承繼共同正犯！」
                    </div>
                  </div>
                  <!-- 金毛辯護 -->
                  <div class="flex gap-3 items-start">
                    <div class="w-9 h-9 rounded-xl overflow-hidden border border-amber-400 shrink-0">
                      <img src="images/golden_case_attorney.jpg" alt="金毛辯護大律師" class="w-full h-full object-cover" style="object-position: center 20%; transform: scale(1.35);">
                    </div>
                    <div class="flex-1 bg-amber-50 dark:bg-amber-950/40 p-3 rounded-xl border border-amber-200 dark:border-amber-900/40 text-xs sm:text-sm text-slate-800 dark:text-slate-200">
                      <strong class="text-amber-800 dark:text-amber-300 block mb-1">金毛首席辯護大律師：</strong>
                      「完全同意！但本大律師要嚴正防守的是：一旦乙斷頸身亡，犯罪『既遂瞬間即告終了』，若丙是在乙氣絕後才到場補踹兩腳，絕不能再論以殺人罪之犯罪參與！」
                    </div>
                  </div>
                </div>

                <!-- 2. 柴柴名師生活解碼 -->
                <div class="rounded-2xl p-4 sm:p-5 bg-amber-50/70 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900/40 space-y-2">
                  <div class="flex items-center gap-2 font-black text-amber-900 dark:text-amber-300 text-xs sm:text-sm">
                    <div class="w-6 h-6 rounded-lg overflow-hidden border border-amber-400 shrink-0">
                      <img src="images/shiba_law_professor.jpg" alt="柴柴" class="w-full h-full object-cover" style="object-position: center 20%; transform: scale(1.38);">
                    </div>
                    <span>🐾 柴柴法學教授 • 白話生活大解碼</span>
                  </div>
                  <p class="font-serif text-slate-700 dark:text-slate-300 text-xs sm:text-sm leading-relaxed">
                    狀態犯就像推倒花瓶，花瓶一旦摔碎在地上（既遂），這個創設不法的動作就已經完全結束了（終了）！事後花瓶碎片留在那裡一年、十年，那只是「不法狀態的殘留」，而不是犯罪行為還在繼續。所以犯罪參與必須在花瓶落地碎裂前加入，落地後才伸手幫忙，根本趕不上這場犯罪！
                  </p>
                </div>

                <!-- 3. 金毛大律師攻防點評 (單欄堆疊) -->
                <div class="rounded-2xl p-4 sm:p-5 bg-blue-50/70 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-900/40 space-y-2">
                  <div class="flex items-center gap-2 font-black text-blue-900 dark:text-blue-300 text-xs sm:text-sm">
                    <div class="w-6 h-6 rounded-lg overflow-hidden border border-blue-400 shrink-0">
                      <img src="images/golden_case_attorney.jpg" alt="金毛" class="w-full h-full object-cover" style="object-position: center 20%; transform: scale(1.35);">
                    </div>
                    <span>⚖️ 金毛大律師 • 訴訟抗辯關鍵</span>
                  </div>
                  <p class="font-serif text-slate-700 dark:text-slate-300 text-xs sm:text-sm leading-relaxed">
                    在訴訟策略上，必須死守「死亡時點」！若檢方欲起訴當事人為共同正犯，律師必須嚴格勘驗法醫相驗報告，確認當事人動手時被害人是否尚有生命徵象。若已無呼吸心跳，則構成要件行為已終了，當事人只能轉為損壞屍體罪或不罰之不能未遂！
                  </p>
                </div>

                <!-- 4. 德牧法規雷達查核 (單欄堆疊) -->
                <div class="rounded-2xl p-4 sm:p-5 bg-emerald-50/70 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-900/40 space-y-2">
                  <div class="flex items-center gap-2 font-black text-emerald-900 dark:text-emerald-300 text-xs sm:text-sm">
                    <div class="w-6 h-6 rounded-lg overflow-hidden border border-emerald-400 shrink-0">
                      <img src="images/shepherd_law_inspector.jpg" alt="德牧" class="w-full h-full object-cover" style="object-position: center 15%; transform: scale(1.4);">
                    </div>
                    <span>🛡️ 德牧法規巡查官 • 法規雷達查核</span>
                  </div>
                  <p class="font-serif text-slate-700 dark:text-slate-300 text-xs sm:text-sm leading-relaxed">
                    【條文雷達】刑法第 80 條第 2 項前段規定：追訴權時效自「犯罪成立之日」起算，但犯罪行為有連續或繼續之狀態者，自行為終了之日起算。於狀態犯而言，犯罪成立日即為行為終了日，時效自死亡既遂瞬間立即起算。
                  </p>
                </div>

                <!-- 5. 邊牧審判長終審裁定卡片 (星空金邊) -->
                <div class="rounded-2xl p-5 bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white border-2 border-amber-400/90 shadow-lg space-y-3">
                  <div class="flex items-center justify-between border-b border-amber-400/30 pb-2">
                    <div class="flex items-center gap-2">
                      <div class="w-7 h-7 rounded-lg overflow-hidden border border-amber-400 shrink-0">
                        <img src="images/border_collie_chief_judge.jpg" alt="邊牧審判長" class="w-full h-full object-cover" style="object-position: center 25%; transform: scale(1.35);">
                      </div>
                      <span class="font-black text-amber-300 text-sm">👨‍⚖️ 邊牧首席審判長 • 終審裁定一槌定音</span>
                    </div>
                    <span class="text-xs text-amber-400 font-bold">#法槌一敲誰與爭鋒</span>
                  </div>
                  <p class="text-xs sm:text-sm font-serif text-slate-200 leading-relaxed">
                    🔨 <strong>【定讞結論】</strong>狀態犯之既遂與終了同在一點。丙最遲須於乙死亡前加入方能成立犯罪參與；追訴權時效自乙死亡時起算。
                  </p>
                  <div class="p-2.5 rounded-lg bg-white/5 border border-white/10 text-[11px] text-slate-300">
                    📅 <strong>2026 最新法條動態備註</strong>：刑法第 80 條第 1 項但書已修正，犯最重本刑為死刑、無期徒刑或十年以上有期徒刑之罪，且「發生死亡結果」者（如本案殺人既遂），<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">無追訴權時效之限制（永久追訴）</span>！國考答題務必注意此一重大修正！
                  </div>
                </div>

              </div>
            </div>

            <!-- ==================== 案例 2-2 繼續犯私行拘禁案 五位一體法學劇院 ==================== -->
            <div id="case-2-2" class="rounded-3xl border-2 border-purple-400/80 dark:border-purple-700/80 bg-white dark:bg-[#121827] shadow-md overflow-hidden space-y-0">
              
              <!-- 案例標題 Bar -->
              <div class="p-4 sm:p-5 bg-gradient-to-r from-purple-700 via-indigo-700 to-purple-800 text-white flex items-center justify-between gap-3">
                <div class="flex items-center gap-2.5">
                  <span class="w-8 h-8 rounded-xl bg-white/20 text-white flex items-center justify-center font-bold text-sm shadow-xs">⚔️</span>
                  <div>
                    <span class="text-[11px] font-mono text-purple-200 font-bold tracking-wider uppercase block">CASE STUDY 2-2 • 繼續犯之五大核心特徵</span>
                    <h4 class="text-base sm:text-lg font-bold text-white tracking-tight">案例 2-2 私行拘禁二十年案（教材第 3-8 ～ 3-9 頁）</h4>
                  </div>
                </div>
                <span class="text-xs font-mono font-bold px-2 py-0.5 rounded-full bg-white/20 text-white shrink-0">p. 3-8~3-9</span>
              </div>

              <!-- 案例事實與問題導引 -->
              <div class="p-5 sm:p-6 bg-slate-50/70 dark:bg-slate-900/50 border-b border-slate-200 dark:border-slate-800 space-y-3 font-serif">
                <div class="p-4 rounded-xl bg-white dark:bg-[#151c2d] border-l-4 border-l-purple-600 shadow-2xs space-y-2">
                  <div class="text-xs font-sans font-bold text-purple-700 dark:text-purple-300">【案件事實】</div>
                  <p class="text-slate-800 dark:text-slate-200 text-sm sm:text-base leading-relaxed">
                    甲無正當理由將乙拘禁，並且長達二十年之久，直到二十年滿後才將乙放出。若有丙參與甲的犯罪，最遲應在何時加入？此外，試問追訴權時效從何時起算？
                  </p>
                </div>
                <div class="p-4 rounded-xl bg-purple-50/60 dark:bg-purple-950/30 border border-purple-200/80 dark:border-purple-900/40 text-xs sm:text-sm text-slate-700 dark:text-slate-300 space-y-1.5 leading-relaxed">
                  <div class="font-sans font-bold text-purple-900 dark:text-purple-200">【課本問題導引逐字（涵蓋五大深層考點）】</div>
                  <p>私行拘禁罪是典型的繼續犯，我們用這個案例說明繼續犯的特徵：</p>
                  <p>(一)甲拘禁乙的當下犯罪已達既遂，但甲的犯罪行為仍在維持，必須待20年後乙重獲自由，犯罪才告終了。<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">故繼續犯的既遂與終了不一定在同一時點上</span>。</p>
                  <p>(二)犯罪參與的最終時點是<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">終了之前</span>，因此丙至遲須在乙重獲自由前加入。</p>
                  <p>(三)依§80Ⅱ，繼續犯之追訴權時效<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">自犯罪終了時起算</span>。若由犯罪既遂時起算，案中甲豈不已經超過追訴權時效而免訴？不合理處不言可喻。</p>
                  <p>(四)若在20年間法律有所變更，是否適用從舊從輕原則（§2）？謹記只有「<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">行為後</span>」法律變更才有從舊從輕原則之適用，因此當為否定（行為仍在繼續中，適用行為時法）。</p>
                  <p>(五)若甲是在美國拘禁乙，5年後將之偷渡送回台灣繼續監禁，是否適用我國刑法？謹記刑法有關地犯（§4）之規定，包括行為地與結果地，解理上更包括中間地。既然行為部分在我國境內，當可適用我國刑法。</p>
                </div>
              </div>

              <!-- 五位一體法學劇院主體 (單欄垂直堆疊) -->
              <div class="p-5 sm:p-6 space-y-4">
                
                <!-- 1. 言詞辯論法庭對決區域 -->
                <div class="rounded-2xl p-4 sm:p-5 bg-gradient-to-br from-slate-100 to-purple-50/50 dark:from-slate-900 dark:to-[#1f1635] border border-slate-300 dark:border-slate-700 space-y-3">
                  <div class="flex items-center justify-between border-b border-slate-200 dark:border-slate-700 pb-2">
                    <span class="font-sans font-black text-xs sm:text-sm text-slate-900 dark:text-white flex items-center gap-1.5">
                      <span>🏛️</span>
                      <span>法庭言詞攻防對決現場</span>
                    </span>
                    <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300">#既遂不等於終了</span>
                  </div>
                  <!-- 公訴赤狐 -->
                  <div class="flex gap-3 items-start">
                    <div class="w-9 h-9 rounded-xl overflow-hidden border border-rose-400 shrink-0">
                      <img src="images/prosecutor_fox.jpg" alt="公訴檢察官赤狐女律師" class="w-full h-full object-cover" style="object-position: center 20%; transform: scale(1.35);">
                    </div>
                    <div class="flex-1 bg-rose-50 dark:bg-rose-950/40 p-3 rounded-xl border border-rose-200 dark:border-rose-900/40 text-xs sm:text-sm text-slate-800 dark:text-slate-200">
                      <strong class="text-rose-700 dark:text-rose-400 block mb-1">公訴檢察官赤狐女律師：</strong>
                      「拘禁長達二十年，不法侵害每分每秒都在持續！時效若從第一天既遂起算，等於綁匪把肉票關得夠久就能免訴，天下豈有此種荒謬法理？時效必須從第20年釋放終了日起算！中途加入者全體成立共同正犯！」
                    </div>
                  </div>
                  <!-- 金毛辯護 -->
                  <div class="flex gap-3 items-start">
                    <div class="w-9 h-9 rounded-xl overflow-hidden border border-amber-400 shrink-0">
                      <img src="images/golden_case_attorney.jpg" alt="金毛辯護大律師" class="w-full h-full object-cover" style="object-position: center 20%; transform: scale(1.35);">
                    </div>
                    <div class="flex-1 bg-amber-50 dark:bg-amber-950/40 p-3 rounded-xl border border-amber-200 dark:border-amber-900/40 text-xs sm:text-sm text-slate-800 dark:text-slate-200">
                      <strong class="text-amber-800 dark:text-amber-300 block mb-1">金毛首席辯護大律師：</strong>
                      「檢察官論證精準！這正是繼續犯與狀態犯最根本的區別！但請注意，若丙是在乙踏出拘禁處所、重獲自由後才提供逃亡資金，則屬事後掩護，絕不能論以私行拘禁之共犯！」
                    </div>
                  </div>
                </div>

                <!-- 2. 柴柴名師生活解碼 -->
                <div class="rounded-2xl p-4 sm:p-5 bg-amber-50/70 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900/40 space-y-2">
                  <div class="flex items-center gap-2 font-black text-amber-900 dark:text-amber-300 text-xs sm:text-sm">
                    <div class="w-6 h-6 rounded-lg overflow-hidden border border-amber-400 shrink-0">
                      <img src="images/shiba_law_professor.jpg" alt="柴柴" class="w-full h-full object-cover" style="object-position: center 20%; transform: scale(1.38);">
                    </div>
                    <span>🐾 柴柴法學教授 • 白話生活大解碼</span>
                  </div>
                  <p class="font-serif text-slate-700 dark:text-slate-300 text-xs sm:text-sm leading-relaxed">
                    繼續犯就像你按住一個鬧鐘的鈴鐺不讓它響，從你按下去的第一秒，犯罪就既遂了；但只要你的手一直按著（維持侵害狀態），行為就一直沒有終了！你在第十年把手借給別人按，別人就成了共同正犯；直到你把手放開的那一剎那，才叫犯罪終了，時效時鐘才開始滴答滴答跑！
                  </p>
                </div>

                <!-- 3. 金毛大律師攻防點評 (單欄堆疊) -->
                <div class="rounded-2xl p-4 sm:p-5 bg-blue-50/70 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-900/40 space-y-2">
                  <div class="flex items-center gap-2 font-black text-blue-900 dark:text-blue-300 text-xs sm:text-sm">
                    <div class="w-6 h-6 rounded-lg overflow-hidden border border-blue-400 shrink-0">
                      <img src="images/golden_case_attorney.jpg" alt="金毛" class="w-full h-full object-cover" style="object-position: center 20%; transform: scale(1.35);">
                    </div>
                    <span>⚖️ 金毛大律師 • 訴訟抗辯關鍵</span>
                  </div>
                  <p class="font-serif text-slate-700 dark:text-slate-300 text-xs sm:text-sm leading-relaxed">
                    重點鎖定五大連鎖考點：① 終了前加入成立承繼共同正犯；② 終了日起算追訴權時效；③ 期間修法適用行為時法，非「行為後」故不適用 § 2 從舊從輕；④ 美國拘禁偷渡回台，因行為之一部在境內，依 § 4 享有完整審判管轄權！
                  </p>
                </div>

                <!-- 4. 德牧法規雷達查核 (單欄堆疊) -->
                <div class="rounded-2xl p-4 sm:p-5 bg-emerald-50/70 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-900/40 space-y-2">
                  <div class="flex items-center gap-2 font-black text-emerald-900 dark:text-emerald-300 text-xs sm:text-sm">
                    <div class="w-6 h-6 rounded-lg overflow-hidden border border-emerald-400 shrink-0">
                      <img src="images/shepherd_law_inspector.jpg" alt="德牧" class="w-full h-full object-cover" style="object-position: center 15%; transform: scale(1.4);">
                    </div>
                    <span>🛡️ 德牧法規巡查官 • 法規雷達查核</span>
                  </div>
                  <p class="font-serif text-slate-700 dark:text-slate-300 text-xs sm:text-sm leading-relaxed">
                    【法規對照】刑法第 302 條私行拘禁罪為純正繼續犯；第 186 條持有危險物罪、第 154 條參與結社罪亦同。時效適用第 80 條第 2 項但書；隔地犯管轄適用第 4 條「犯罪之行為或結果，有一在中華民國領域內者，為在中華民國領域內犯罪」。
                  </p>
                </div>

                <!-- 5. 邊牧審判長終審裁定卡片 (星空金邊) -->
                <div class="rounded-2xl p-5 bg-gradient-to-br from-slate-900 via-purple-950 to-slate-900 text-white border-2 border-amber-400/90 shadow-lg space-y-3">
                  <div class="flex items-center justify-between border-b border-amber-400/30 pb-2">
                    <div class="flex items-center gap-2">
                      <div class="w-7 h-7 rounded-lg overflow-hidden border border-amber-400 shrink-0">
                        <img src="images/border_collie_chief_judge.jpg" alt="邊牧審判長" class="w-full h-full object-cover" style="object-position: center 25%; transform: scale(1.35);">
                      </div>
                      <span class="font-black text-amber-300 text-sm">👨‍⚖️ 邊牧首席審判長 • 終審裁定一槌定音</span>
                    </div>
                    <span class="text-xs text-amber-400 font-bold">#法槌一敲誰與爭鋒</span>
                  </div>
                  <p class="text-xs sm:text-sm font-serif text-slate-200 leading-relaxed">
                    🔨 <strong>【定讞結論】</strong>繼續犯之既遂與終了分離！丙至遲於第20年乙重獲自由前均得加入；時效自乙重獲自由時起算；適用行為時法；我國法院享有刑事管轄權！
                  </p>
                  <div class="p-2.5 rounded-lg bg-white/5 border border-white/10 text-[11px] text-slate-300">
                    📅 <strong>2026 最新法條動態備註</strong>：刑法第 302 條之 1（加重私行拘禁罪，如求職詐騙拘禁人身自由）已於近年施行，對繼續犯之量刑大幅拉高，若三人以上共同犯之或拘禁七日以上，處一年以上七年以下有期徒刑，國考實務主流必考！
                  </div>
                </div>

              </div>
            </div>

            <!-- 【表1】狀態犯與繼續犯的比較 (1:1 復刻教材第 3-9 頁) -->
            <div class="rounded-2xl bg-white dark:bg-[#121827] border border-slate-200 dark:border-slate-800 p-5 sm:p-6 shadow-xs space-y-4">
              <div class="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-2">
                <span class="font-bold text-slate-900 dark:text-white text-sm flex items-center gap-2">
                  <span>📊</span>
                  <span>【表1】狀態犯與繼續犯的比較（教材第 3-9 頁 原表復刻）</span>
                </span>
                <span class="text-xs font-mono text-purple-600 dark:text-purple-400 font-bold">TABLE 1</span>
              </div>
              <div class="overflow-x-auto custom-scrollbar">
                <table class="w-full text-xs sm:text-sm text-left border-collapse font-serif">
                  <thead>
                    <tr class="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-b border-slate-300 dark:border-slate-700">
                      <th class="p-3 font-black">類型</th>
                      <th class="p-3 font-black">不法特徵</th>
                      <th class="p-3 font-black">典型條文</th>
                      <th class="p-3 font-black">犯罪參與</th>
                      <th class="p-3 font-black">追訴權時效</th>
                    </tr>
                  </thead>
                  <tbody class="divide-y divide-slate-200 dark:divide-slate-800">
                    <tr class="hover:bg-blue-50/40 dark:hover:bg-blue-950/20">
                      <td class="p-3 font-bold text-blue-700 dark:text-blue-400">狀態犯</td>
                      <td class="p-3">創設不法<br><span class="text-slate-500 dark:text-slate-400 text-xs">（既遂與終了必然同時）</span></td>
                      <td class="p-3 font-mono font-bold">殺人罪</td>
                      <td class="p-3"><span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">終了前加入</span></td>
                      <td class="p-3"><span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">終了後起算</span></td>
                    </tr>
                    <tr class="hover:bg-purple-50/40 dark:hover:bg-purple-950/20">
                      <td class="p-3 font-bold text-purple-700 dark:text-purple-400">繼續犯</td>
                      <td class="p-3">創設不法＋維持不法<br><span class="text-slate-500 dark:text-slate-400 text-xs">（既遂與終了不必然同時）</span></td>
                      <td class="p-3 font-mono font-bold">私行拘禁罪</td>
                      <td class="p-3"><span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">終了前加入</span></td>
                      <td class="p-3"><span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">終了後起算</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <!-- (三) 行為客體 (教材第 3-9 ～ 3-11 頁) -->
            <div class="rounded-2xl bg-white dark:bg-[#121827] border-l-8 border-l-emerald-600 border border-slate-200/80 dark:border-white/10 p-5 sm:p-6 shadow-xs space-y-4">
              <div class="flex items-center justify-between text-xs font-bold text-slate-500 dark:text-slate-400 border-b border-slate-100 dark:border-slate-800 pb-2">
                <span class="flex items-center gap-2">
                  <span class="text-base">📖</span>
                  <span>教材原文精讀 • (三) 行為客體（對比保護法益）</span>
                </span>
                <span class="font-mono text-emerald-600 dark:text-emerald-400">第 3-9 頁</span>
              </div>
              <p class="font-serif text-slate-800 dark:text-slate-200 text-base sm:text-lg leading-relaxed indent-8 text-justify">
                (三)行為客體：指構成要件行為所攻擊的具體對象。<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">請注意行為客體不同於保護法益</span>，後者乃法律所保護之利益，屬於抽象價值。例如殺人罪，行為客體是「人」，所保護的法益是「生命」；再如現有人使用放火罪（§173Ⅰ），行為客體是「現供人使用之住宅或現有人所在之建築物等」，保護法益是「火勢延燒之公共危險」。
              </p>
            </div>

            <!-- 【作者叮嚀】客體表彰保護法益與拖吊車案 (教材第 3-9 頁) -->
            <div class="p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-amber-50 to-orange-50/40 dark:from-[#1b1510] dark:to-[#121827] border-2 border-amber-300 dark:border-amber-800/60 space-y-3 shadow-xs">
              <div class="flex items-center justify-between border-b border-amber-200 dark:border-amber-900/60 pb-2">
                <div class="flex items-center gap-2">
                  <span class="text-lg">💡</span>
                  <span class="font-black text-amber-900 dark:text-amber-200 text-sm sm:text-base">【作者叮嚀】客體必須表彰保護法益 • 民間拖吊車強暴脅迫案</span>
                </div>
                <span class="text-xs font-mono font-bold text-amber-700 dark:text-amber-400">p. 3-9</span>
              </div>
              <p class="font-serif text-slate-800 dark:text-slate-200 text-sm sm:text-base leading-relaxed indent-8 text-justify">
                雖說行為客體與保護法益的概念有別，但行為客體必須要能清楚表彰保護法益。例如妨害公務罪（§135Ⅰ）以「公務員」作為客體，藉此彰顯本罪之保護法益係「國家公務的順利執行」。若甲因為違規停車而遭民間私人拖吊業者拖吊（並無警察在場），一時憤恨，遂持木棍揚言若繼續拖吊將砸碎拖吊車的玻璃，業者無奈之下只能離去，甲是否構成妨害公務罪呢？<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">由於民間私人拖吊業者多屬行政輔助人，並非委託公務員，甲既未對公務員施強暴脅迫，則也不會有國家公務執行受阻的問題，不該當本罪</span>。
              </p>
            </div>

            <!-- ==================== 案例 2-3 日記本妨害書信秘密案 五位一體法學劇院 ==================== -->
            <div id="case-2-3" class="rounded-3xl border-2 border-emerald-400/80 dark:border-emerald-700/80 bg-white dark:bg-[#121827] shadow-md overflow-hidden space-y-0">
              
              <!-- 案例標題 Bar -->
              <div class="p-4 sm:p-5 bg-gradient-to-r from-emerald-700 via-teal-700 to-emerald-800 text-white flex items-center justify-between gap-3">
                <div class="flex items-center gap-2.5">
                  <span class="w-8 h-8 rounded-xl bg-white/20 text-white flex items-center justify-center font-bold text-sm shadow-xs">⚔️</span>
                  <div>
                    <span class="text-[11px] font-mono text-emerald-200 font-bold tracking-wider uppercase block">CASE STUDY 2-3 • 行為客體與法益失契</span>
                    <h4 class="text-base sm:text-lg font-bold text-white tracking-tight">案例 2-3 上鎖日記本與妨害書信秘密案（教材第 3-10 頁）</h4>
                  </div>
                </div>
                <span class="text-xs font-mono font-bold px-2 py-0.5 rounded-full bg-white/20 text-white shrink-0">p. 3-10</span>
              </div>

              <!-- 案例事實與問題導引 -->
              <div class="p-5 sm:p-6 bg-slate-50/70 dark:bg-slate-900/50 border-b border-slate-200 dark:border-slate-800 space-y-3 font-serif">
                <div class="p-4 rounded-xl bg-white dark:bg-[#151c2d] border-l-4 border-l-emerald-600 shadow-2xs space-y-2">
                  <div class="text-xs font-sans font-bold text-emerald-700 dark:text-emerald-300">【案件事實】</div>
                  <p class="text-slate-800 dark:text-slate-200 text-sm sm:text-base leading-relaxed">
                    甲基於好奇心破壞心儀女子乙的上鎖日記本，想藉此窺探乙的內心世界，是否構成妨害書信秘密罪（§315）？
                  </p>
                </div>
                <div class="p-4 rounded-xl bg-emerald-50/60 dark:bg-emerald-950/30 border border-emerald-200/80 dark:border-emerald-900/40 text-xs sm:text-sm text-slate-700 dark:text-slate-300 space-y-1.5 leading-relaxed">
                  <div class="font-sans font-bold text-emerald-900 dark:text-emerald-200">【課本問題導引逐字（目的解釋 vs 體系解釋 vs 文義解釋）】</div>
                  <p>若單純從保護法益的角度觀察（目的解釋），日記本乃記錄每日生活與心情點滴之文本，是個人隱私與秘密之一環，況且乙將之上鎖係傳達出不欲他人知悉的立場，本當受到刑法妨害秘密罪章的保護才是，就此而言甲構成本罪。</p>
                  <p>惟若從法條體系的角度出發（體系解釋），與本罪有關的行為客體是「他人封緘之文書」，其中文書與偽造文書罪章（§210以下）的行為客體用詞相同，理應做同樣之詮釋。於偽造文書罪章，文書係具備穩固功能（具體且持續的存在）、證明功能（具有社會重要性的內容）與保證功能（表明製作人）的文本，<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">惟日記本所載內容並不具有社會重要性，縱使含有穩固與保證功能，仍非文書，只能稱為「文件」</span>。</p>
                  <p>是以，自妨害書信秘密罪之構成要件以觀（文義解釋），行為客體既稱「他人封緘之文書」，則日記本就不是本罪客體，<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">甲不成立本罪</span>。這是一個行為客體無法表彰保護法益的典型事證，只能修法解決。</p>
                </div>
              </div>

              <!-- 五位一體法學劇院主體 (單欄垂直堆疊) -->
              <div class="p-5 sm:p-6 space-y-4">
                
                <!-- 1. 言詞辯論法庭對決區域 -->
                <div class="rounded-2xl p-4 sm:p-5 bg-gradient-to-br from-slate-100 to-emerald-50/50 dark:from-slate-900 dark:to-[#12221b] border border-slate-300 dark:border-slate-700 space-y-3">
                  <div class="flex items-center justify-between border-b border-slate-200 dark:border-slate-700 pb-2">
                    <span class="font-sans font-black text-xs sm:text-sm text-slate-900 dark:text-white flex items-center gap-1.5">
                      <span>🏛️</span>
                      <span>法庭言詞攻防對決現場</span>
                    </span>
                    <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-100 dark:bg-emerald-900 text-emerald-700 dark:text-emerald-300">#文書與文件之辯</span>
                  </div>
                  <!-- 公訴赤狐 -->
                  <div class="flex gap-3 items-start">
                    <div class="w-9 h-9 rounded-xl overflow-hidden border border-rose-400 shrink-0">
                      <img src="images/prosecutor_fox.jpg" alt="公訴檢察官赤狐女律師" class="w-full h-full object-cover" style="object-position: center 20%; transform: scale(1.35);">
                    </div>
                    <div class="flex-1 bg-rose-50 dark:bg-rose-950/40 p-3 rounded-xl border border-rose-200 dark:border-rose-900/40 text-xs sm:text-sm text-slate-800 dark:text-slate-200">
                      <strong class="text-rose-700 dark:text-rose-400 block mb-1">公訴檢察官赤狐女律師：</strong>
                      「上鎖的日記本就是少女最核心的私密領域！被告擅自撬開鎖頭偷看，赤裸裸侵犯憲法保障的隱私權！從保護法益之目的解釋出發，本罪當然應予以嚴厲制裁！」
                    </div>
                  </div>
                  <!-- 金毛辯護 -->
                  <div class="flex gap-3 items-start">
                    <div class="w-9 h-9 rounded-xl overflow-hidden border border-amber-400 shrink-0">
                      <img src="images/golden_case_attorney.jpg" alt="金毛辯護大律師" class="w-full h-full object-cover" style="object-position: center 20%; transform: scale(1.35);">
                    </div>
                    <div class="flex-1 bg-amber-50 dark:bg-amber-950/40 p-3 rounded-xl border border-amber-200 dark:border-amber-900/40 text-xs sm:text-sm text-slate-800 dark:text-slate-200">
                      <strong class="text-amber-800 dark:text-amber-300 block mb-1">金毛首席辯護大律師：</strong>
                      「法官大人！刑法是罪刑法定主義，不是道德法官！條文明明白白寫著『他人封緘之文書』，刑法體系上的文書必須具備『證明功能（社會重要性內容）』，日記本只是個人私密文件，欠缺社會重要性！客體不合，絕對不能類推入罪！」
                    </div>
                  </div>
                </div>

                <!-- 2. 柴柴名師生活解碼 -->
                <div class="rounded-2xl p-4 sm:p-5 bg-amber-50/70 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900/40 space-y-2">
                  <div class="flex items-center gap-2 font-black text-amber-900 dark:text-amber-300 text-xs sm:text-sm">
                    <div class="w-6 h-6 rounded-lg overflow-hidden border border-amber-400 shrink-0">
                      <img src="images/shiba_law_professor.jpg" alt="柴柴" class="w-full h-full object-cover" style="object-position: center 20%; transform: scale(1.38);">
                    </div>
                    <span>🐾 柴柴法學教授 • 白話生活大解碼</span>
                  </div>
                  <p class="font-serif text-slate-700 dark:text-slate-300 text-xs sm:text-sm leading-relaxed">
                    文書要有三把鑰匙：穩固（文字載體）、保證（作者是誰）、證明（具有社會交易或公眾生活重要性，例如借據、合約、成績單）。今天你在日記寫『隔壁班小明好帥』，這對小明很重要，但對全社會毫無公眾法律交易重要性，所以它不是刑法上的『文書』，只是『文件』！法律寫文書就不能抓文件，這就是罪刑法定原則的嚴厲代價！
                  </p>
                </div>

                <!-- 3. 金毛大律師攻防點評 (單欄堆疊) -->
                <div class="rounded-2xl p-4 sm:p-5 bg-blue-50/70 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-900/40 space-y-2">
                  <div class="flex items-center gap-2 font-black text-blue-900 dark:text-blue-300 text-xs sm:text-sm">
                    <div class="w-6 h-6 rounded-lg overflow-hidden border border-blue-400 shrink-0">
                      <img src="images/golden_case_attorney.jpg" alt="金毛" class="w-full h-full object-cover" style="object-position: center 20%; transform: scale(1.35);">
                    </div>
                    <span>⚖️ 金毛大律師 • 訴訟抗辯關鍵</span>
                  </div>
                  <p class="font-serif text-slate-700 dark:text-slate-300 text-xs sm:text-sm leading-relaxed">
                    在防護策略上，文義解釋永遠是辯護人的最大底氣！即便法益被侵害，若法條字面上設定的「行為客體」框不住該行為，司法者就不能越俎代庖扮演立法者。課本明載這是客體無法表彰保護法益的典型事證，只能修法解決，不得入罪！
                  </p>
                </div>

                <!-- 4. 德牧法規雷達查核 (單欄堆疊) -->
                <div class="rounded-2xl p-4 sm:p-5 bg-emerald-50/70 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-900/40 space-y-2">
                  <div class="flex items-center gap-2 font-black text-emerald-900 dark:text-emerald-300 text-xs sm:text-sm">
                    <div class="w-6 h-6 rounded-lg overflow-hidden border border-emerald-400 shrink-0">
                      <img src="images/shepherd_law_inspector.jpg" alt="德牧" class="w-full h-full object-cover" style="object-position: center 15%; transform: scale(1.4);">
                    </div>
                    <span>🛡️ 德牧法規巡查官 • 法規雷達查核</span>
                  </div>
                  <p class="font-serif text-slate-700 dark:text-slate-300 text-xs sm:text-sm leading-relaxed">
                    【判例要旨】最高法院歷來見解一致認為：刑法上之文書，除須有體性、意思性外，更須具備「證明性（社會重要性）」。純個人日記、抒發情感之便條，因欠缺法律或社會生活重要性，不符文書要件。
                  </p>
                </div>

                <!-- 5. 邊牧審判長終審裁定卡片 (星空金邊) -->
                <div class="rounded-2xl p-5 bg-gradient-to-br from-slate-900 via-teal-950 to-slate-900 text-white border-2 border-amber-400/90 shadow-lg space-y-3">
                  <div class="flex items-center justify-between border-b border-amber-400/30 pb-2">
                    <div class="flex items-center gap-2">
                      <div class="w-7 h-7 rounded-lg overflow-hidden border border-amber-400 shrink-0">
                        <img src="images/border_collie_chief_judge.jpg" alt="邊牧審判長" class="w-full h-full object-cover" style="object-position: center 25%; transform: scale(1.35);">
                      </div>
                      <span class="font-black text-amber-300 text-sm">👨‍⚖️ 邊牧首席審判長 • 終審裁定一槌定音</span>
                    </div>
                    <span class="text-xs text-amber-400 font-bold">#法槌一敲誰與爭鋒</span>
                  </div>
                  <p class="text-xs sm:text-sm font-serif text-slate-200 leading-relaxed">
                    🔨 <strong>【定讞結論】</strong>日記本非屬刑法第 315 條之「文書」，甲不成立妨害書信秘密罪。
                  </p>
                  <div class="p-2.5 rounded-lg bg-white/5 border border-white/10 text-[11px] text-slate-300">
                    📅 <strong>2026 最新法條動態備註</strong>：實務若為電子化日記（手機備忘錄或電腦加密檔案），甲以不正方法破解密碼窺探者，將構成刑法第 358 條無故入侵他人電腦罪或第 315 條之 1 窺視竊聽竊錄罪，考生答題切勿將紙本實體與數位電磁紀錄混為一談！
                  </div>
                </div>

              </div>
            </div>

            <!-- ==================== 案例 2-4 【誹韓案】 五位一體法學劇院 ==================== -->
            <div id="case-2-4" class="rounded-3xl border-2 border-rose-400/80 dark:border-rose-700/80 bg-white dark:bg-[#121827] shadow-md overflow-hidden space-y-0">
              
              <!-- 案例標題 Bar -->
              <div class="p-4 sm:p-5 bg-gradient-to-r from-rose-700 via-pink-700 to-rose-800 text-white flex items-center justify-between gap-3">
                <div class="flex items-center gap-2.5">
                  <span class="w-8 h-8 rounded-xl bg-white/20 text-white flex items-center justify-center font-bold text-sm shadow-xs">⚔️</span>
                  <div>
                    <span class="text-[11px] font-mono text-rose-200 font-bold tracking-wider uppercase block">CASE STUDY 2-4 • 行為客體目的性限縮</span>
                    <h4 class="text-base sm:text-lg font-bold text-white tracking-tight">案例 2-4 【誹韓案】侮辱誹謗死者罪（教材第 3-10 ～ 3-11 頁）</h4>
                  </div>
                </div>
                <span class="text-xs font-mono font-bold px-2 py-0.5 rounded-full bg-white/20 text-white shrink-0">p. 3-10~3-11</span>
              </div>

              <!-- 案例事實與問題導引 -->
              <div class="p-5 sm:p-6 bg-slate-50/70 dark:bg-slate-900/50 border-b border-slate-200 dark:border-slate-800 space-y-3 font-serif">
                <div class="p-4 rounded-xl bg-white dark:bg-[#151c2d] border-l-4 border-l-rose-600 shadow-2xs space-y-2">
                  <div class="text-xs font-sans font-bold text-rose-700 dark:text-rose-300">【案件事實】</div>
                  <p class="text-slate-800 dark:text-slate-200 text-sm sm:text-base leading-relaxed">
                    甲依其考據，在雜誌上公開寫道：「韓愈為人，尚不脫古人風流才子的怪習性，妻妾之外，不免消磨於風花雪月，曾在潮州染風流病，以致體力過度消耗，及誤信方士硫磺下補劑，離潮州不久，暴卒於硫磺中毒。」韓愈的第39代孫乙向甲提起自訴，試問能否構成侮辱誹謗死者罪（§312）？
                  </p>
                </div>
                <div class="p-4 rounded-xl bg-rose-50/60 dark:bg-rose-950/30 border border-rose-200/80 dark:border-rose-900/40 text-xs sm:text-sm text-slate-700 dark:text-slate-300 space-y-1.5 leading-relaxed">
                  <div class="font-sans font-bold text-rose-900 dark:text-rose-200">【課本問題導引逐字（遺族虔敬感情與目的性限縮）】</div>
                  <p>本罪之保護法益並非「死者本身」的名譽（死者已矣，無法作為法益依歸的主體），也不是保護「後人本身」的名譽（並非針對後人為誹謗），而是保護「<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">遺族對先祖的虔敬感情</span>」。既然如此，有必要對遺族虔敬感情作合理的範圍限縮，若年代過久、時間過長，應合理認為遺族感情已然平淡，並無法益保護的必要性。</p>
                  <p>因此合理展現本罪法益的行為客體應如「<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">亡故30年內之死者</span>」（如瑞士刑法）或「<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">六等親內之死者</span>」（如日本刑法）。故本罪之行為客體「已死之人」範圍過廣，應作目的性限縮。若未限縮，則本例甲將成立本罪（這是真實案件，案中甲最後被判處新台幣三百元罰金），<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">若有所限縮，則甲不成立本罪</span>。</p>
                </div>
              </div>

              <!-- 五位一體法學劇院主體 (單欄垂直堆疊) -->
              <div class="p-5 sm:p-6 space-y-4">
                
                <!-- 1. 言詞辯論法庭對決區域 -->
                <div class="rounded-2xl p-4 sm:p-5 bg-gradient-to-br from-slate-100 to-rose-50/50 dark:from-slate-900 dark:to-[#221218] border border-slate-300 dark:border-slate-700 space-y-3">
                  <div class="flex items-center justify-between border-b border-slate-200 dark:border-slate-700 pb-2">
                    <span class="font-sans font-black text-xs sm:text-sm text-slate-900 dark:text-white flex items-center gap-1.5">
                      <span>🏛️</span>
                      <span>法庭言詞攻防對決現場</span>
                    </span>
                    <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-rose-100 dark:bg-rose-900 text-rose-700 dark:text-rose-300">#學術考據vs死者名譽</span>
                  </div>
                  <!-- 公訴赤狐 -->
                  <div class="flex gap-3 items-start">
                    <div class="w-9 h-9 rounded-xl overflow-hidden border border-rose-400 shrink-0">
                      <img src="images/prosecutor_fox.jpg" alt="公訴檢察官赤狐女律師" class="w-full h-full object-cover" style="object-position: center 20%; transform: scale(1.35);">
                    </div>
                    <div class="flex-1 bg-rose-50 dark:bg-rose-950/40 p-3 rounded-xl border border-rose-200 dark:border-rose-900/40 text-xs sm:text-sm text-slate-800 dark:text-slate-200">
                      <strong class="text-rose-700 dark:text-rose-400 block mb-1">公訴檢察官赤狐女律師：</strong>
                      「法條明文寫『已死之人』，法無明文限縮！被告無端指稱唐代大文豪染風流病暴卒，深深刺痛韓氏後代三十九代子孫之心，實務判決有罪罰金三百元完全合乎法理！」
                    </div>
                  </div>
                  <!-- 金毛辯護 -->
                  <div class="flex gap-3 items-start">
                    <div class="w-9 h-9 rounded-xl overflow-hidden border border-amber-400 shrink-0">
                      <img src="images/golden_case_attorney.jpg" alt="金毛辯護大律師" class="w-full h-full object-cover" style="object-position: center 20%; transform: scale(1.35);">
                    </div>
                    <div class="flex-1 bg-amber-50 dark:bg-amber-950/40 p-3 rounded-xl border border-amber-200 dark:border-amber-900/40 text-xs sm:text-sm text-slate-800 dark:text-slate-200">
                      <strong class="text-amber-800 dark:text-amber-300 block mb-1">金毛首席辯護大律師：</strong>
                      「荒謬絕倫！唐代韓愈距今一千兩百年，第三十九代孫根本未曾與韓愈共同生活過，何來具體痛楚之虔敬感情？若唐代先祖都能告，那歷史學家研究商紂王、秦始皇、曹操，豈非天天被後代告進法院？刑罰必須依保護法益作目的性限縮！」
                    </div>
                  </div>
                </div>

                <!-- 2. 柴柴名師生活解碼 -->
                <div class="rounded-2xl p-4 sm:p-5 bg-amber-50/70 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900/40 space-y-2">
                  <div class="flex items-center gap-2 font-black text-amber-900 dark:text-amber-300 text-xs sm:text-sm">
                    <div class="w-6 h-6 rounded-lg overflow-hidden border border-amber-400 shrink-0">
                      <img src="images/shiba_law_professor.jpg" alt="柴柴" class="w-full h-full object-cover" style="object-position: center 20%; transform: scale(1.38);">
                    </div>
                    <span>🐾 柴柴法學教授 • 白話生活大解碼</span>
                  </div>
                  <p class="font-serif text-slate-700 dark:text-slate-300 text-xs sm:text-sm leading-relaxed">
                    大家想想看，人死不能復生，死者已經沒有名譽法益可言。法律之所以要處罰誹謗死者，是因為活著的至親家人看到剛過世的親人被潑髒水會心痛如絞（遺族虔敬感情）。但時間是最好的消炎藥，過了三十代、一千年，誰還會為了一千年前的曾曾曾祖父心痛如絞？這時候再動用刑法，就是大砲打小鳥，扼殺歷史考據與學術言論自由！
                  </p>
                </div>

                <!-- 3. 金毛大律師攻防點評 (單欄堆疊) -->
                <div class="rounded-2xl p-4 sm:p-5 bg-blue-50/70 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-900/40 space-y-2">
                  <div class="flex items-center gap-2 font-black text-blue-900 dark:text-blue-300 text-xs sm:text-sm">
                    <div class="w-6 h-6 rounded-lg overflow-hidden border border-blue-400 shrink-0">
                      <img src="images/golden_case_attorney.jpg" alt="金毛" class="w-full h-full object-cover" style="object-position: center 20%; transform: scale(1.35);">
                    </div>
                    <span>⚖️ 金毛大律師 • 訴訟抗辯關鍵</span>
                  </div>
                  <p class="font-serif text-slate-700 dark:text-slate-300 text-xs sm:text-sm leading-relaxed">
                    在憲法防線上，必須結合大法官釋字第 509 號言論自由與學術自由。將「已死之人」解釋為包含千年古人，違反比例原則。外國立法例（瑞士30年、日本六親等）就是目的性限縮的最佳法理後盾，力主無罪抗辯！
                  </p>
                </div>

                <!-- 4. 德牧法規雷達查核 (單欄堆疊) -->
                <div class="rounded-2xl p-4 sm:p-5 bg-emerald-50/70 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-900/40 space-y-2">
                  <div class="flex items-center gap-2 font-black text-emerald-900 dark:text-emerald-300 text-xs sm:text-sm">
                    <div class="w-6 h-6 rounded-lg overflow-hidden border border-emerald-400 shrink-0">
                      <img src="images/shepherd_law_inspector.jpg" alt="德牧" class="w-full h-full object-cover" style="object-position: center 15%; transform: scale(1.4);">
                    </div>
                    <span>🛡️ 德牧法規巡查官 • 法規雷達查核</span>
                  </div>
                  <p class="font-serif text-slate-700 dark:text-slate-300 text-xs sm:text-sm leading-relaxed">
                    【裁判檢討】本案為台灣司法史真實著名案件（66年北院），當時法院因循字面文義判處甲新台幣三百元罰金，招致學界排山倒海之批判。現代通說均一致贊同陳奕廷律師之高見：行為客體必須受保護法益實質限縮！
                  </p>
                </div>

                <!-- 5. 邊牧審判長終審裁定卡片 (星空金邊) -->
                <div class="rounded-2xl p-5 bg-gradient-to-br from-slate-900 via-rose-950 to-slate-900 text-white border-2 border-amber-400/90 shadow-lg space-y-3">
                  <div class="flex items-center justify-between border-b border-amber-400/30 pb-2">
                    <div class="flex items-center gap-2">
                      <div class="w-7 h-7 rounded-lg overflow-hidden border border-amber-400 shrink-0">
                        <img src="images/border_collie_chief_judge.jpg" alt="邊牧審判長" class="w-full h-full object-cover" style="object-position: center 25%; transform: scale(1.35);">
                      </div>
                      <span class="font-black text-amber-300 text-sm">👨‍⚖️ 邊牧首席審判長 • 終審裁定一槌定音</span>
                    </div>
                    <span class="text-xs text-amber-400 font-bold">#法槌一敲誰與爭鋒</span>
                  </div>
                  <p class="text-xs sm:text-sm font-serif text-slate-200 leading-relaxed">
                    🔨 <strong>【定讞結論】</strong>刑法第 312 條保護法益為遺族虔敬感情，行為客體應作目的性限縮，唐代韓愈年代久遠已無保護必要性，甲應不成立本罪。
                  </p>
                  <div class="p-2.5 rounded-lg bg-white/5 border border-white/10 text-[11px] text-slate-300">
                    📅 <strong>2026 最新法條動態備註</strong>：大法官 112 年憲判字第 8 號判決宣告誹謗罪合憲，但強調表意人經合理查證即不罰，學術考據之發表更受憲法高度保障，國考考生作答時應以「目的性限縮說」作為主流高分答題定錨！
                  </div>
                </div>

              </div>
            </div>

            <!-- (四) 行為情狀 (教材第 3-11 頁) -->
            <div class="rounded-2xl bg-white dark:bg-[#121827] border-l-8 border-l-amber-500 border border-slate-200/80 dark:border-white/10 p-5 sm:p-6 shadow-xs space-y-3">
              <div class="flex items-center justify-between text-xs font-bold text-slate-500 dark:text-slate-400 border-b border-slate-100 dark:border-slate-800 pb-2">
                <span class="flex items-center gap-2">
                  <span class="text-base">📖</span>
                  <span>教材原文精讀 • (四) 行為情狀</span>
                </span>
                <span class="font-mono text-amber-600 dark:text-amber-400">第 3-11 頁</span>
              </div>
              <p class="font-serif text-slate-800 dark:text-slate-200 text-base sm:text-lg leading-relaxed indent-8 text-justify">
                (四)行為情狀：構成要件行為當下的背景事實。<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">僅極少數犯罪類型設有行為情狀要素</span>，其功能在於更貼切、精準地描述不法，例如損害債權罪（§356）的「<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">將受強制執行之際</span>」，公然猥褻罪（§234）的「<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">公然</span>」等。
              </p>
            </div>
          </section>

          <!-- ==================== 三、構成要件結果歸責與解題提示 (教材第 3-11 頁) ==================== -->
          <section id="sec-p1ch2-sec1-result" class="space-y-6 pt-4">
            <div class="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3">
              <div class="flex items-center gap-3">
                <span class="w-2.5 h-6 rounded-full bg-blue-600"></span>
                <h3 class="text-lg sm:text-xl font-black text-slate-900 dark:text-white tracking-tight">
                  三、構成要件結果歸責（行為與結果分離觀察法則）
                </h3>
              </div>
              <span class="text-xs font-mono font-bold px-2.5 py-1 rounded-lg bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-800">
                p. 3-11 原文
              </span>
            </div>

            <!-- 原文精讀 -->
            <div class="rounded-2xl bg-white dark:bg-[#121827] border-l-8 border-l-blue-600 border border-slate-200/80 dark:border-white/10 p-5 sm:p-6 shadow-xs space-y-3">
              <div class="flex items-center justify-between text-xs font-bold text-slate-500 dark:text-slate-400 border-b border-slate-100 dark:border-slate-800 pb-2">
                <span class="flex items-center gap-2">
                  <span class="text-base">📖</span>
                  <span>教材原文精讀 • 三、構成要件結果歸責</span>
                </span>
                <span class="font-mono text-blue-600 dark:text-blue-400">第 3-11 頁</span>
              </div>
              <p class="font-serif text-slate-800 dark:text-slate-200 text-base sm:text-lg leading-relaxed indent-8 text-justify">
                構成要件結果乃是<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">可以和構成要件行為分開觀察的損害事實</span>，例如殺人罪的「死亡結果」，或墮胎罪（§288）的「胎兒死亡結果」。當構成要件行為確實引發構成要件結果，原則上便可要求行為人為結果負責。
              </p>
            </div>

            <!-- 【解題提示】調味料比喻與建立新持有之辨 (教材第 3-11 頁) -->
            <div class="p-5 sm:p-7 rounded-3xl bg-gradient-to-br from-amber-50/90 via-orange-50/40 to-white dark:from-[#1b1510] dark:via-[#16120e] dark:to-[#121827] border-2 border-amber-300 dark:border-amber-800/60 space-y-4 shadow-sm">
              <div class="flex items-center justify-between border-b border-amber-200 dark:border-amber-900/60 pb-3">
                <div class="flex items-center gap-2.5">
                  <span class="w-8 h-8 rounded-xl bg-amber-500 text-white flex items-center justify-center font-bold text-sm shadow-xs">🍲</span>
                  <div>
                    <span class="text-[11px] font-mono text-amber-800 dark:text-amber-400 font-bold uppercase tracking-wider block">EXAM HINT & COOKING ANALOGY</span>
                    <h4 class="text-base sm:text-lg font-black text-amber-950 dark:text-amber-200">【解題提示】行為要素 vs 結果要素不可混淆 • 做菜調味料絕妙比喻</h4>
                  </div>
                </div>
                <span class="text-xs font-mono font-bold px-2 py-0.5 rounded-full bg-amber-200 dark:bg-amber-900 text-amber-800 dark:text-amber-200">p. 3-11</span>
              </div>

              <div class="space-y-3 font-serif text-slate-800 dark:text-slate-200 text-sm sm:text-base leading-relaxed text-justify">
                <p class="indent-8">
                  構成要件行為與構成要件結果是可以分離觀察的兩個事實，<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">若歸屬於行為要素，就不能又被劃分為結果要素</span>。舉例來說，竊盜罪（§320）的構成要件行為是竊取，而竊取可以拆解為「未經原持有人允許」、「破壞原持有」，而「建立新持有」三個部分。緣此，「<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">建立新持有</span>」就不會是構成要件結果，否則一來違反通說所定義的竊取要件，二來也造成單一要素重複評價的後果。
                </p>
                <p class="indent-8">
                  另要提醒的是，並非每一個犯罪都要用到構成要件的所有要素，就好比鹽、糖、醬、醋、辛、油都是做菜的必備原料，但不是每一道菜都必須用上所有的調味料，否則排毒的健身菜或加鹽、加辣的咖啡就顯得倫不類了。構成要件要素的功能在於清楚地表述法益侵害，<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">倘若使用行為主體、構成要件行為便足以貼切地描述法益侵害，實在沒必要畫蛇添足地加入構成要件結果歸責</span>，解題時請注意，可別審查法律所無的要素呀！
                </p>
              </div>

              <!-- 做菜比喻圖解卡片 -->
              <div class="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
                <div class="p-3.5 rounded-xl bg-white dark:bg-[#151c2d] border border-amber-200 dark:border-amber-900/40 space-y-1.5">
                  <div class="font-bold text-amber-900 dark:text-amber-300 text-xs sm:text-sm flex items-center gap-1.5">
                    <span>🥗</span>
                    <span>清爽健身菜 ➔ 行為犯（舉動犯）</span>
                  </div>
                  <p class="text-xs text-slate-600 dark:text-slate-400">
                    如偽證罪（§168）、重婚罪（§237）。只要行為人做出虛偽陳述或再行結婚之「舉動行為」，法益侵害即告完成，完全不需額外調味料（不需實害結果發生）！
                  </p>
                </div>
                <div class="p-3.5 rounded-xl bg-white dark:bg-[#151c2d] border border-amber-200 dark:border-amber-900/40 space-y-1.5">
                  <div class="font-bold text-rose-900 dark:text-rose-300 text-xs sm:text-sm flex items-center gap-1.5">
                    <span>🥩</span>
                    <span>重口味佛跳牆 ➔ 結果犯（實害犯）</span>
                  </div>
                  <p class="text-xs text-slate-600 dark:text-slate-400">
                    如殺人罪（§271）、毀損罪（§354）。除了下手實施行為外，還必須實質產生死亡或物品毀壞之「獨立損害結果」，二者兼備才成罪！
                  </p>
                </div>
              </div>
            </div>
          </section>

          <!-- 底部單元導航條 -->
          <div class="flex items-center justify-between p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-indigo-50/80 via-white to-blue-50/80 dark:from-[#121827] dark:to-[#162035] border border-indigo-200/80 dark:border-indigo-900/40 shadow-xs flex-wrap gap-3">
            <button onclick="switchView('part1-ch1')" class="px-4 py-2 rounded-xl bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 font-bold text-xs flex items-center gap-1.5 border border-slate-200 dark:border-slate-700 cursor-pointer">
              <span>← 上一單元：第一篇 第一章 刑法意義的行為</span>
            </button>
            <div class="flex items-center gap-2 flex-wrap">
              <button onclick="switchView('part1')" class="px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 font-bold text-xs flex items-center gap-1.5 transition-all shadow-xs cursor-pointer">
                <span>📖 第一篇導讀</span>
              </button>
              <button onclick="exportMarkdown()" class="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs flex items-center gap-1.5 transition-all shadow-xs cursor-pointer">
                <span>📄 下載第一節完整筆記</span>
              </button>
            </div>
          </div>

        </div> <!-- 閉合 #viewPart1Ch2Sec1 -->
`;
