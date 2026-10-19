/**
 * view-part1-ch1.js
 * 第一篇 第一章 刑法意義的行為（教材第 3-1 ～ 3-5 頁 全章完結旗艦版）
 * 嚴格遵循 AGENTS.md 最高行為憲法規範：
 * 1. 逐字精準核對課本原文（第 3-1 ～ 3-5 頁 零錯字、零腦補）
 * 2. 案例 1-1 ～ 1-8 嚴格落實「五位一體法學劇院」標準
 * 3. 嚴格單欄垂直上下堆疊排版（Strict Vertical Stacking）
 * 4. 重點文字採用「純紅底線」規範（No Aggressive Red Text）
 * 5. 行為階層三步思考流程圖（確認 ➔ 過濾 ➔ 分類）高質感 SVG 呈現
 * 6. 犬系四大天王導師法定圖片比例與 2026 最新法條動態定錨
 */

window.APP_VIEWS = window.APP_VIEWS || {};
window.APP_VIEWS['viewPart1Chapter1'] = window.APP_VIEWS['viewPart1Ch1'] = window.APP_VIEWS['part1Ch1'] = window.APP_VIEWS['part1Chapter1'] = window.APP_VIEWS['part1-ch1'] = `
        <!-- VIEW: 第一篇 第一章 刑法意義的行為 (教材第 3-1 ～ 3-5 頁) -->
        <div id="viewPart1Chapter1" class="fade-enter hidden space-y-8">
          
          <!-- 麵包屑導航 -->
          <div class="flex items-center justify-between gap-4 border-b border-slate-200/80 dark:border-white/10 pb-3">
            <nav class="flex items-center gap-2 text-xs font-medium text-slate-500 dark:text-slate-400 flex-wrap">
              <button onclick="switchView('part1')" class="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">第一篇</button>
              <span>/</span>
              <span class="text-blue-600 dark:text-blue-400 font-bold">第一章 刑法意義的行為</span>
            </nav>
            <button onclick="switchView('part1')" class="text-xs text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 flex items-center gap-1 transition-colors shrink-0 font-bold cursor-pointer">
              <span>← 返回第一篇導讀</span>
            </button>
          </div>

          <!-- 章節大標題 Banner -->
          <div class="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-blue-700 via-indigo-700 to-slate-900 text-white shadow-lg space-y-3 relative overflow-hidden border border-blue-400/40">
            <div class="absolute -right-8 -bottom-8 w-48 h-48 bg-white/10 rounded-full blur-2xl pointer-events-none"></div>
            
            <div class="flex items-center gap-2 text-xs font-mono text-blue-200 font-bold uppercase tracking-wider">
              <span>PART 1 • CHAPTER 1</span>
              <span>•</span>
              <span class="px-2 py-0.5 rounded-full bg-white/20 text-white text-[11px]">教材第 3-1 ～ 3-5 頁 全章完結</span>
            </div>

            <h2 class="text-2xl sm:text-3xl md:text-4xl font-serif font-black tracking-tight text-white leading-tight">
              第一章 刑法意義的行為
            </h2>

            <p class="text-sm sm:text-base text-blue-100 leading-relaxed font-serif pt-1 max-w-3xl">
              開啟三階論（TB ➔ R ➔ S）檢驗的前提階層！掌握三大核心功能：<span class="underline decoration-amber-300 decoration-2 underline-offset-4 font-bold text-white">過濾功能</span>（排除非行為）、<span class="underline decoration-amber-300 decoration-2 underline-offset-4 font-bold text-white">分類功能</span>（作為 vs 不作為風險理論）與<span class="underline decoration-amber-300 decoration-2 underline-offset-4 font-bold text-white">確認功能</span>（特定行為時點），貫通八大經典實戰案例。
            </p>
          </div>

          <!-- ==================== 一、三階論前提與三大功能核心總覽 (教材第 3-1 頁) ==================== -->
          <section id="sec-p1ch1-intro" class="space-y-6 pt-2">
            <div class="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3">
              <div class="flex items-center gap-3">
                <span class="w-2.5 h-6 rounded-full bg-blue-600"></span>
                <h3 class="text-lg sm:text-xl font-black text-slate-900 dark:text-white tracking-tight">
                  一、三階論的前提檢驗與行為階層三大功能（教材第 3-1 頁）
                </h3>
              </div>
              <span class="text-xs font-mono font-bold px-2.5 py-1 rounded-lg bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-800">
                p. 3-1 原文
              </span>
            </div>

            <!-- 原文書本忠實精讀卡片 -->
            <div class="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#121827] border border-slate-200/90 dark:border-white/10 shadow-sm space-y-5">
              <div class="flex items-center gap-2 text-xs font-mono text-blue-600 dark:text-blue-400 font-bold uppercase tracking-wider">
                <span>📖 教材原文精讀</span>
                <span>•</span>
                <span>三階論前提門檻</span>
              </div>
              <blockquote class="font-serif text-base sm:text-lg text-slate-800 dark:text-slate-200 leading-relaxed pl-4 border-l-4 border-blue-600 text-justify">
                通說採取的「三階論」以「<strong class="text-blue-600 dark:text-blue-400 font-mono">TB ➔ R ➔ S</strong>」為內容，但還必須通過一個前提階層的檢驗——<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">刑法意義的行為</span>。該階層除了肩負剔除無討論實益的<strong class="text-indigo-600 dark:text-indigo-400">過濾功能</strong>外（排除非刑法上意義的行為），更有行為形式的初步<strong class="text-emerald-600 dark:text-emerald-400">分類功能</strong>（先行區分作為與不作為，以利後續討論），以及確定討論時點的<strong class="text-amber-600 dark:text-amber-400">確認功能</strong>（特定所欲討論的行為，才不會有所失焦或評價不足）。
              </blockquote>

              <!-- 三大功能極簡對比卡片網格 -->
              <div class="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                <!-- 1. 過濾功能 -->
                <div class="p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-indigo-50/70 to-slate-50 dark:from-indigo-950/30 dark:to-slate-900 border-2 border-indigo-200 dark:border-indigo-800/60 border-l-[6px] border-l-indigo-600 shadow-xs space-y-2">
                  <div class="flex items-center justify-between">
                    <span class="text-xs font-mono font-black px-2 py-0.5 rounded bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200">功能 ①</span>
                    <span class="text-lg">🛡️</span>
                  </div>
                  <h4 class="font-black text-base text-slate-900 dark:text-white">過濾功能 (Filtering)</h4>
                  <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-serif leading-relaxed">
                    剔除無討論實益者，<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">排除非刑法上意義的行為</span>，自始不入三階論。
                  </p>
                </div>

                <!-- 2. 分類功能 -->
                <div class="p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-emerald-50/70 to-slate-50 dark:from-emerald-950/30 dark:to-slate-900 border-2 border-emerald-200 dark:border-emerald-800/60 border-l-[6px] border-l-emerald-600 shadow-xs space-y-2">
                  <div class="flex items-center justify-between">
                    <span class="text-xs font-mono font-black px-2 py-0.5 rounded bg-emerald-100 dark:bg-emerald-900 text-emerald-800 dark:text-emerald-200">功能 ②</span>
                    <span class="text-lg">⚖️</span>
                  </div>
                  <h4 class="font-black text-base text-slate-900 dark:text-white">分類功能 (Classifying)</h4>
                  <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-serif leading-relaxed">
                    以<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">風險理論</span>為準，精準區分<strong class="text-emerald-700 dark:text-emerald-300">作為</strong>（創造/加速風險）與<strong class="text-emerald-700 dark:text-emerald-300">不作為</strong>（不排除既存風險）。
                  </p>
                </div>

                <!-- 3. 確認功能 -->
                <div class="p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-amber-50/70 to-slate-50 dark:from-amber-950/30 dark:to-slate-900 border-2 border-amber-200 dark:border-amber-800/60 border-l-[6px] border-l-amber-600 shadow-xs space-y-2">
                  <div class="flex items-center justify-between">
                    <span class="text-xs font-mono font-black px-2 py-0.5 rounded bg-amber-100 dark:bg-amber-900 text-amber-900 dark:text-amber-200">功能 ③</span>
                    <span class="text-lg">🎯</span>
                  </div>
                  <h4 class="font-black text-base text-slate-900 dark:text-white">確認功能 (Identifying)</h4>
                  <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-serif leading-relaxed">
                    特定討論時點，鎖定所欲評價的具體行為，避免失焦或評價不足。<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">成罪時點不只一個</span>！
                  </p>
                </div>
              </div>
            </div>
          </section>

          <!-- ==================== 二、過濾功能：社會行為論與非行為五大態樣 (教材第 3-1 頁) ==================== -->
          <section id="sec-p1ch1-filter" class="space-y-6">
            <div class="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3">
              <div class="flex items-center gap-3">
                <span class="w-2.5 h-6 rounded-full bg-indigo-600"></span>
                <h3 class="text-lg sm:text-xl font-black text-slate-900 dark:text-white tracking-tight">
                  二、過濾功能：社會行為論與「非刑法上行為」五大典型排除（教材第 3-1 頁）
                </h3>
              </div>
              <span class="text-xs font-mono font-bold px-2.5 py-1 rounded-lg bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-800">
                p. 3-1 原文
              </span>
            </div>

            <div class="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#121827] border border-slate-200/90 dark:border-white/10 shadow-sm space-y-6">
              <!-- 核心定義卡片 -->
              <div class="p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-indigo-50/80 via-blue-50/40 to-slate-50 dark:from-[#0d1527] dark:via-[#161d31] dark:to-[#0f172a] border-2 border-indigo-300 dark:border-indigo-700/80 border-l-[8px] border-l-indigo-600 space-y-3">
                <div class="flex items-center gap-2">
                  <span class="text-xs font-mono font-black px-2.5 py-0.5 rounded-full bg-indigo-600 text-white">通說理論</span>
                  <h4 class="font-black text-base sm:text-lg text-indigo-950 dark:text-indigo-100">
                    社會行為論（Soziale Handlungslehre）
                  </h4>
                </div>
                <blockquote class="font-serif text-slate-800 dark:text-slate-200 text-sm sm:text-base leading-relaxed pl-3 border-l-2 border-indigo-500">
                  「刑法意義的行為指<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">出於意思所主宰支配的人類行止</span>，且此行止必須引致外界發生具有刑法重要性之後果。」
                </blockquote>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs">
                  <div class="p-3 rounded-xl bg-white dark:bg-slate-900 border border-indigo-200 dark:border-indigo-800/60">
                    <span class="font-bold text-indigo-700 dark:text-indigo-300">① 內在主觀要件：</span>
                    <p class="text-slate-700 dark:text-slate-300 mt-1">須有人類意思主宰支配的可能性（意思支配性）。</p>
                  </div>
                  <div class="p-3 rounded-xl bg-white dark:bg-slate-900 border border-indigo-200 dark:border-indigo-800/60">
                    <span class="font-bold text-indigo-700 dark:text-indigo-300">② 外在客觀要件：</span>
                    <p class="text-slate-700 dark:text-slate-300 mt-1">具有社會重要性（影響人際社會共同生活）。</p>
                  </div>
                </div>
              </div>

              <!-- 排除法：非刑法意義的行為五大典型情況（超清晰警示牌） -->
              <div class="space-y-3">
                <div class="flex items-center justify-between">
                  <h4 class="font-black text-sm sm:text-base text-slate-900 dark:text-white flex items-center gap-2">
                    <span class="text-rose-500">🚫</span>
                    <span>筆者建議：記住「非刑法上行為」情況，用排除法最快！</span>
                  </h4>
                  <span class="text-xs text-slate-400 font-mono">五大非行為典型</span>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-xs">
                  <!-- 1. 反射動作 -->
                  <div class="p-4 rounded-xl bg-rose-50/70 dark:bg-rose-950/30 border-2 border-rose-300 dark:border-rose-800/60 space-y-1">
                    <div class="font-black text-rose-900 dark:text-rose-200 text-sm flex items-center gap-1.5">
                      <span class="w-2 h-2 rounded-full bg-rose-500"></span>
                      <span>① 反射動作</span>
                    </div>
                    <p class="text-slate-700 dark:text-slate-300 font-serif leading-relaxed">
                      神經衝動未經大腦意識即行反射（如膝跳反射、觸電縮手誤傷人），無意思支配可能。
                    </p>
                  </div>

                  <!-- 2. 直接（絕對）強制 -->
                  <div class="p-4 rounded-xl bg-rose-50/70 dark:bg-rose-950/30 border-2 border-rose-300 dark:border-rose-800/60 space-y-1">
                    <div class="font-black text-rose-900 dark:text-rose-200 text-sm flex items-center gap-1.5">
                      <span class="w-2 h-2 rounded-full bg-rose-500"></span>
                      <span>② 直接（＝絕對）強制</span>
                    </div>
                    <p class="text-slate-700 dark:text-slate-300 font-serif leading-relaxed">
                      身體完全淪為物理機械工具（如被彪形大漢抓住手強按引爆鈕），純外力抗拒不能。
                    </p>
                  </div>

                  <!-- 3. 睡眠或無意識 -->
                  <div class="p-4 rounded-xl bg-rose-50/70 dark:bg-rose-950/30 border-2 border-rose-300 dark:border-rose-800/60 space-y-1">
                    <div class="font-black text-rose-900 dark:text-rose-200 text-sm flex items-center gap-1.5">
                      <span class="w-2 h-2 rounded-full bg-rose-500"></span>
                      <span>③ 睡眠或無意識之行止</span>
                    </div>
                    <p class="text-slate-700 dark:text-slate-300 font-serif leading-relaxed">
                      夢遊、沉睡翻身壓死嬰兒、嚴重昏迷狀態下之肉體動態，大腦完全失去意識主宰。
                    </p>
                  </div>

                  <!-- 4. 因病抽搐 -->
                  <div class="p-4 rounded-xl bg-rose-50/70 dark:bg-rose-950/30 border-2 border-rose-300 dark:border-rose-800/60 space-y-1">
                    <div class="font-black text-rose-900 dark:text-rose-200 text-sm flex items-center gap-1.5">
                      <span class="w-2 h-2 rounded-full bg-rose-500"></span>
                      <span>④ 因病抽搐</span>
                    </div>
                    <p class="text-slate-700 dark:text-slate-300 font-serif leading-relaxed">
                      癲癇大發作、中風肌痙攣抽動導致碰翻茶壺燙傷旁人，屬病理痙攣而非行為。
                    </p>
                  </div>

                  <!-- 5. 欠缺行動可能性之靜止 -->
                  <div class="p-4 rounded-xl bg-rose-50/70 dark:bg-rose-950/30 border-2 border-rose-300 dark:border-rose-800/60 space-y-1 sm:col-span-2 lg:col-span-2">
                    <div class="font-black text-rose-900 dark:text-rose-200 text-sm flex items-center gap-1.5">
                      <span class="w-2 h-2 rounded-full bg-rose-500"></span>
                      <span>⑤ 欠缺行動可能性之靜止</span>
                    </div>
                    <p class="text-slate-700 dark:text-slate-300 font-serif leading-relaxed">
                      身陷手銬腳鐐或被反鎖密室之母親，客觀上絕無可能破門救火，其「不救助」因欠缺物理行動可能性，不具刑法意義。
                    </p>
                  </div>
                </div>
              </div>

              <!-- 🐾 柴柴法學教授 • 白話生活大解碼 -->
              <div class="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-amber-500/15 via-orange-500/5 to-transparent border-2 border-amber-300 dark:border-amber-700/70 flex items-start gap-3.5 shadow-xs">
                <div class="w-12 h-12 rounded-2xl overflow-hidden shrink-0 border-2 border-amber-400 shadow-sm bg-amber-100 dark:bg-amber-950">
                  <img src="images/shiba_law_professor.jpg" alt="柴柴法學教授" class="w-full h-full object-cover" style="object-position: center 20%; transform: scale(1.38);">
                </div>
                <div class="flex-1 space-y-1.5 font-serif">
                  <div class="flex items-center gap-2 flex-wrap">
                    <span class="font-black text-amber-950 dark:text-amber-200 text-sm sm:text-base">🐾 柴柴法學教授 • 白話生活大解碼</span>
                    <span class="text-[11px] px-2 py-0.5 rounded-full bg-amber-200 dark:bg-amber-900/80 text-amber-950 dark:text-amber-100 font-mono font-bold">#大腦沒開機不算行為</span>
                  </div>
                  <p class="text-xs sm:text-sm text-slate-800 dark:text-slate-200 leading-relaxed">
                    「汪！刑法不是大自然物理學，<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">刑法只審判出於人類心智操控的舉動</span>！如果被雷劈倒壓死人、夢遊踢破玻璃、被壯漢抓著手指強蓋指印，肉體只是單純的『物理撞球』，大腦意志根本沒插電！這種情形第一步就當場過濾踢出，連後面的一階構成要件都不用看！」
                  </p>
                </div>
              </div>
            </div>
          </section>

          <!-- ==================== 三、分類功能：風險理論與作為／不作為 (教材第 3-1 ～ 3-3 頁) ==================== -->
          <section id="sec-p1ch1-classify" class="space-y-6">
            <div class="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3">
              <div class="flex items-center gap-3">
                <span class="w-2.5 h-6 rounded-full bg-emerald-600"></span>
                <h3 class="text-lg sm:text-xl font-black text-slate-900 dark:text-white tracking-tight">
                  三、分類功能：風險理論（創造/加速風險 vs 不排除既存風險）（教材第 3-1 頁）
                </h3>
              </div>
              <span class="text-xs font-mono font-bold px-2.5 py-1 rounded-lg bg-emerald-50 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800">
                p. 3-1 原文
              </span>
            </div>

            <div class="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#121827] border border-slate-200/90 dark:border-white/10 shadow-sm space-y-6">
              <blockquote class="font-serif text-base sm:text-lg text-slate-800 dark:text-slate-200 leading-relaxed pl-4 border-l-4 border-emerald-600">
                行為可分「<strong class="text-emerald-600 dark:text-emerald-400">作為</strong>」或「<strong class="text-indigo-600 dark:text-indigo-400">不作為</strong>」，通常積極舉動就是作為，消極放任就是不作為。不過學理提出<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">風險理論</span>作更縝密的判準，主張<strong class="text-emerald-700 dark:text-emerald-300">作為是創造風險或加速風險</strong>，<strong class="text-indigo-700 dark:text-indigo-300">不作為是不排除既存風險</strong>。
              </blockquote>

              <!-- 風險理論雙核心對比天秤 -->
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
                <!-- 作為 -->
                <div class="p-5 rounded-2xl bg-emerald-50/70 dark:bg-emerald-950/30 border-2 border-emerald-300 dark:border-emerald-700/80 border-l-[8px] border-l-emerald-600 space-y-2">
                  <div class="flex items-center justify-between">
                    <span class="font-black text-emerald-950 dark:text-emerald-200 text-sm sm:text-base flex items-center gap-1.5">
                      <span>⚡</span>
                      <span>作 為 (Action)</span>
                    </span>
                    <span class="font-mono text-[11px] px-2 py-0.5 rounded bg-emerald-200 dark:bg-emerald-900 text-emerald-950 dark:text-emerald-100 font-bold">積極干預</span>
                  </div>
                  <div class="font-serif text-slate-800 dark:text-slate-200 leading-relaxed space-y-1">
                    <p>• <strong>創造風險</strong>：無中生有引發外界危害（如推人、開槍、下毒）。</p>
                    <p>• <strong>加速風險</strong>：使原本緩慢的危險加速惡化實現（如注射催化劑）。</p>
                  </div>
                </div>

                <!-- 不作為 -->
                <div class="p-5 rounded-2xl bg-indigo-50/70 dark:bg-indigo-950/30 border-2 border-indigo-300 dark:border-indigo-700/80 border-l-[8px] border-l-indigo-600 space-y-2">
                  <div class="flex items-center justify-between">
                    <span class="font-black text-indigo-950 dark:text-indigo-200 text-sm sm:text-base flex items-center gap-1.5">
                      <span>⏳</span>
                      <span>不 作 為 (Omission)</span>
                    </span>
                    <span class="font-mono text-[11px] px-2 py-0.5 rounded bg-indigo-200 dark:bg-indigo-900 text-indigo-950 dark:text-indigo-100 font-bold">消極任憑</span>
                  </div>
                  <div class="font-serif text-slate-800 dark:text-slate-200 leading-relaxed space-y-1">
                    <p>• <strong>不排除既存風險</strong>：放任已然存在的危險自然發展致生侵害（如見溺水不救、收回未抓牢的繩索、未施打血清）。</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- ==================== 案例研習 1-1：救生繩索收回案（五位一體法學劇院） ==================== -->
            <div id="sec-p1ch1-case11" class="rounded-3xl border-2 border-blue-300 dark:border-blue-800/80 bg-white dark:bg-[#121827] shadow-md overflow-hidden p-6 sm:p-8 space-y-6">
              
              <!-- 案例標頭 -->
              <div class="flex items-center justify-between flex-wrap gap-2 border-b border-slate-200 dark:border-slate-800 pb-3">
                <div class="flex items-center gap-2.5">
                  <span class="text-2xl">⚖️</span>
                  <div>
                    <span class="text-xs font-mono font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">CASE 1-1 • RISK THEORY</span>
                    <h4 class="text-lg sm:text-xl font-black text-slate-900 dark:text-white">
                      案例 1-1：救生繩索案（鬆手讓乙摔死 vs 未抓前收回繩索）
                    </h4>
                  </div>
                </div>
                <span class="text-xs font-mono font-bold px-2.5 py-1 rounded-full bg-blue-100 dark:bg-blue-950 text-blue-800 dark:text-blue-300 border border-blue-300 dark:border-blue-800">
                  教材第 3-2 頁
                </span>
              </div>

              <!-- 案情事實對照框 -->
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div class="p-4 rounded-2xl bg-rose-50/60 dark:bg-rose-950/20 border-2 border-rose-300 dark:border-rose-800/60 space-y-2">
                  <span class="px-2 py-0.5 rounded bg-rose-600 text-white text-xs font-bold font-mono">情境 (一)</span>
                  <p class="font-serif text-xs sm:text-sm text-slate-800 dark:text-slate-200 leading-relaxed">
                    甲放下救生繩索給跌入深谷的乙，<strong>乙抓住繩索往上爬行</strong>，當乙快爬上時甲發現乙是自己的仇人，<strong>逕鬆手讓乙摔死</strong>。
                  </p>
                  <div class="text-xs font-mono font-bold text-rose-700 dark:text-rose-300 pt-1">
                    ➔ 評價結論：【作 為】（創造新的墜落摔死風險）
                  </div>
                </div>

                <div class="p-4 rounded-2xl bg-indigo-50/60 dark:bg-indigo-950/20 border-2 border-indigo-300 dark:border-indigo-800/60 space-y-2">
                  <span class="px-2 py-0.5 rounded bg-indigo-600 text-white text-xs font-bold font-mono">情境 (二)</span>
                  <p class="font-serif text-xs sm:text-sm text-slate-800 dark:text-slate-200 leading-relaxed">
                    甲放下救生繩索給跌入深谷的乙，<strong>但在乙未抓到繩索之前</strong>，甲發現乙是自己的仇人，於是<strong>立刻收回繩索</strong>，使乙無援而亡。
                  </p>
                  <div class="text-xs font-mono font-bold text-indigo-700 dark:text-indigo-300 pt-1">
                    ➔ 評價結論：【不 作 為】（不排除既存受困深谷之風險）
                  </div>
                </div>
              </div>

              <!-- ⚔️ 控辯對決：赤狐檢察官 vs 金毛大律師 -->
              <div class="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-rose-500/10 via-amber-500/5 to-blue-500/10 border border-slate-200 dark:border-slate-800 space-y-4">
                <div class="text-xs font-mono font-bold text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                  <span>⚔️</span><span>法庭正面交鋒：作為與不作為的攻防防線</span>
                </div>
                
                <!-- 赤狐檢察官 -->
                <div class="flex items-start gap-3">
                  <div class="w-10 h-10 rounded-xl overflow-hidden shrink-0 border border-rose-400 bg-rose-100">
                    <img src="images/prosecutor_fox.jpg" alt="公訴檢察官赤狐女律師" class="w-full h-full object-cover" style="object-position: center 20%; transform: scale(1.35);">
                  </div>
                  <div class="flex-1 text-xs sm:text-sm">
                    <div class="font-black text-rose-950 dark:text-rose-200">公訴檢察官赤狐女律師：</div>
                    <p class="text-slate-800 dark:text-slate-200 font-serif mt-0.5">
                      「情境(二)被告甲同樣手動把繩索『拉上來』，這是一個大動作的積極物理舉動，怎麼能說不是作為？檢方主張甲收回繩索積極剝奪被害人求生機會，應論以故意殺人作為犯！」
                    </p>
                  </div>
                </div>

                <!-- 金毛大律師 -->
                <div class="flex items-start gap-3">
                  <div class="w-10 h-10 rounded-xl overflow-hidden shrink-0 border border-amber-400 bg-amber-100">
                    <img src="images/golden_case_attorney.jpg" alt="金毛辯護大律師" class="w-full h-full object-cover" style="object-position: center 20%; transform: scale(1.35);">
                  </div>
                  <div class="flex-1 text-xs sm:text-sm">
                    <div class="font-black text-amber-950 dark:text-amber-200">金毛首席辯護大律師：</div>
                    <p class="text-slate-800 dark:text-slate-200 font-serif mt-0.5">
                      「反對！檢察官犯了『以物理動靜取代法律評價』的直覺錯誤！依據風險理論，乙在谷底是既有的瀕死危險；乙尚未接觸繩索，甲收繩只是『中止救助』，並未比『從未放繩』更惡化危險，實質乃不排除既存風險的不作為，若無保證人地位絕不成立犯罪！」
                    </p>
                  </div>
                </div>
              </div>

              <!-- 🐾 柴柴法學教授 • 白話生活大解碼 -->
              <div class="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-amber-500/15 via-orange-500/5 to-transparent border-2 border-amber-300 dark:border-amber-700/70 flex items-start gap-3.5 shadow-xs">
                <div class="w-12 h-12 rounded-2xl overflow-hidden shrink-0 border-2 border-amber-400 shadow-sm bg-amber-100 dark:bg-amber-950">
                  <img src="images/shiba_law_professor.jpg" alt="柴柴法學教授" class="w-full h-full object-cover" style="object-position: center 20%; transform: scale(1.38);">
                </div>
                <div class="flex-1 space-y-1.5 font-serif">
                  <div class="flex items-center gap-2 flex-wrap">
                    <span class="font-black text-amber-950 dark:text-amber-200 text-sm sm:text-base">🐾 柴柴法學教授 • 白話生活大解碼</span>
                    <span class="text-[11px] px-2 py-0.5 rounded-full bg-amber-200 dark:bg-amber-900/80 text-amber-950 dark:text-amber-100 font-mono font-bold">#吊在半空鬆手 vs 根本沒抓到</span>
                  </div>
                  <p class="text-xs sm:text-sm text-slate-800 dark:text-slate-200 leading-relaxed">
                    「同學們仔細比較這兩口氣：情境(一)乙已經抓著繩子爬到半空中，這時乙的命全繫在繩子上，你一鬆手，是『<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">把一個原本有支撐的人摔落懸崖</span>』，這叫創造嶄新致死風險（作為）！但情境(二)乙根本連繩毛都沒摸到，他本來就躺在谷底等死，你收回繩子頂多是『路過不救』，危險本來就在那裡（不作為）！」
                  </p>
                </div>
              </div>

              <!-- 嚴格垂直上下堆疊：金毛攻防點評 ➔ 德牧法規雷達 ➔ 邊牧終審裁決 -->
              <div class="space-y-3">
                <!-- ⚖️ 金毛大律師 • 法庭攻防點評 -->
                <div class="p-4 rounded-xl bg-amber-50/80 dark:bg-amber-950/20 border-2 border-amber-300 dark:border-amber-800/60 border-l-[6px] border-l-amber-500 flex items-start gap-3">
                  <div class="w-10 h-10 rounded-xl overflow-hidden shrink-0 border border-amber-400 bg-amber-100">
                    <img src="images/golden_case_attorney.jpg" alt="金毛辯護大律師" class="w-full h-full object-cover" style="object-position: center 20%; transform: scale(1.35);">
                  </div>
                  <div class="flex-1 space-y-1 text-xs sm:text-sm font-serif">
                    <div class="font-black text-amber-950 dark:text-amber-200">⚖️ 金毛大律師 • 法庭實戰必勝防線</div>
                    <p class="text-slate-800 dark:text-slate-200 leading-relaxed">
                      遇到檢方指控「收繩有積極動作所以是作為」時，務必以《刑法》第 15 條抗辯：物理外觀之積極手勢不能等同於實體法之「作為」！情境(二)甲純屬不作為，且甲非生身父母或救生員，不具保證人義務，依法逕為無罪抗辯！
                    </p>
                  </div>
                </div>

                <!-- 🛡️ 德牧法規巡查官 • 法規雷達查核 -->
                <div class="p-4 rounded-xl bg-blue-50/80 dark:bg-blue-950/20 border-2 border-blue-300 dark:border-blue-800/60 border-l-[6px] border-l-blue-600 flex items-start gap-3">
                  <div class="w-10 h-10 rounded-xl overflow-hidden shrink-0 border border-blue-400 bg-blue-100">
                    <img src="images/shepherd_law_inspector.jpg" alt="德牧法規巡查官" class="w-full h-full object-cover" style="object-position: center 15%; transform: scale(1.4);">
                  </div>
                  <div class="flex-1 space-y-1 text-xs sm:text-sm font-serif">
                    <div class="font-black text-blue-950 dark:text-blue-200 flex items-center gap-1.5">
                      <span>🛡️ 德牧法規巡查官 • 法規雷達查核</span>
                      <span class="text-[11px] px-2 py-0.2 rounded bg-blue-200 dark:bg-blue-900 text-blue-900 dark:text-blue-100 font-mono">§ 15 不純正不作為犯</span>
                    </div>
                    <p class="text-slate-800 dark:text-slate-200 leading-relaxed font-sans">
                      <strong>【裁判要旨查核】</strong>依刑法第 15 條第 1 項，對於犯罪結果負有防止義務者始得論以不作為犯。情境(一)甲已著手實行積極殺人之作為，成立第 271 條第 1 項普通殺人既遂罪；情境(二)甲無保證人地位，不成立不作為殺人罪，亦不成立遺棄罪。
                    </p>
                  </div>
                </div>

                <!-- 👨‍⚖️ 邊牧首席審判長 • 終審裁決一槌定音 -->
                <div class="p-5 rounded-2xl bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white border-2 border-amber-400/80 shadow-lg space-y-3">
                  <div class="flex items-center justify-between border-b border-white/10 pb-2">
                    <div class="flex items-center gap-2.5">
                      <div class="w-9 h-9 rounded-xl overflow-hidden shrink-0 border-2 border-amber-300 bg-slate-800">
                        <img src="images/border_collie_chief_judge.jpg" alt="邊牧首席審判長" class="w-full h-full object-cover" style="object-position: center 25%; transform: scale(1.35);">
                      </div>
                      <div>
                        <span class="font-black text-sm sm:text-base text-amber-300">👨‍⚖️ 邊牧首席審判長 • 終審裁決一槌定音</span>
                        <span class="block text-[10px] font-mono text-slate-300 tracking-wider">#法槌一敲誰與爭鋒</span>
                      </div>
                    </div>
                    <span class="text-xs font-mono font-bold px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-400/30">定讞判決</span>
                  </div>

                  <div class="space-y-2 text-xs sm:text-sm font-serif text-slate-200">
                    <p>
                      🔨 <strong>【實體法定讞】</strong>情境(一)成立刑法第 271 條第 1 項殺人既遂罪（作為犯）；情境(二)不成立犯罪。
                    </p>
                    <p class="text-amber-200/90 font-mono">
                      💡 <strong>國考答題定錨</strong>：國考論述務必先寫「風險理論」定義，再以「被害人生命法益危險是否已由行為人獨佔支配」作為作為與不作為之分水嶺！
                    </p>
                    <div class="p-2.5 rounded-lg bg-white/5 border border-white/10 text-[11px] text-slate-300">
                      📅 <strong>2026 最新法條動態備註</strong>：刑法第 15 條（不作為犯）與第 271 條（殺人罪）至 2026 年維持現行法，實務通說對救助中斷之作為/不作為定性穩定受風險理論拘束。
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- ==================== 案例研習 1-2：蛇毒血清案（五位一體法學劇院） ==================== -->
            <div id="sec-p1ch1-case12" class="rounded-3xl border-2 border-emerald-300 dark:border-emerald-800/80 bg-white dark:bg-[#121827] shadow-md overflow-hidden p-6 sm:p-8 space-y-6">
              
              <div class="flex items-center justify-between flex-wrap gap-2 border-b border-slate-200 dark:border-slate-800 pb-3">
                <div class="flex items-center gap-2.5">
                  <span class="text-2xl">🐍</span>
                  <div>
                    <span class="text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">CASE 1-2 • RISK ACCELERATION</span>
                    <h4 class="text-lg sm:text-xl font-black text-slate-900 dark:text-white">
                      案例 1-2：蛇毒血清案（注射黑寡婦解毒劑 vs 龜殼花毒催化劑）
                    </h4>
                  </div>
                </div>
                <span class="text-xs font-mono font-bold px-2.5 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800">
                  教材第 3-2 頁
                </span>
              </div>

              <div class="p-4 sm:p-5 rounded-2xl bg-amber-50/60 dark:bg-amber-950/20 border-2 border-amber-300 dark:border-amber-800/60 font-serif text-slate-800 dark:text-slate-200 text-xs sm:text-sm leading-relaxed">
                <strong>【案件事實】</strong>醫生甲明知病患乙被龜殼花咬傷，卻未幫乙施打龜殼花的血清，反而注射黑寡婦的解毒劑。倘若甲所注射的也不是黑寡婦解毒劑，而是龜殼花毒的催化劑，乙因而一命嗚呼，評價上有無不同？
              </div>

              <!-- 🐾 柴柴法學教授 • 白話生活大解碼 -->
              <div class="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-amber-500/15 via-orange-500/5 to-transparent border-2 border-amber-300 dark:border-amber-700/70 flex items-start gap-3.5 shadow-xs">
                <div class="w-12 h-12 rounded-2xl overflow-hidden shrink-0 border-2 border-amber-400 shadow-sm bg-amber-100 dark:bg-amber-950">
                  <img src="images/shiba_law_professor.jpg" alt="柴柴法學教授" class="w-full h-full object-cover" style="object-position: center 20%; transform: scale(1.38);">
                </div>
                <div class="flex-1 space-y-1.5 font-serif">
                  <div class="flex items-center gap-2 flex-wrap">
                    <span class="font-black text-amber-950 dark:text-amber-200 text-sm sm:text-base">🐾 柴柴法學教授 • 白話生活大解碼</span>
                    <span class="text-[11px] px-2 py-0.5 rounded-full bg-amber-200 dark:bg-amber-900/80 text-amber-950 dark:text-amber-100 font-mono font-bold">#沒打對血清 vs 加速踩油門</span>
                  </div>
                  <p class="text-xs sm:text-sm text-slate-800 dark:text-slate-200 leading-relaxed">
                    「注射黑寡婦解毒劑雖然扎了一針，但在評價上，對龜殼花毒根本起不了作用，等於『<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">沒排除乙體內既存的毒發風險</span>』，屬於<strong>不作為</strong>（但因甲是醫生有醫療契約保證人義務，成立不作為殺人）！可是如果你打的是『催化劑』，等於在毒素火苗上澆汽油，<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">積極加速風險實現</span>，當場質變為<strong>作為犯</strong>！」
                  </p>
                </div>
              </div>

              <!-- 嚴格垂直上下堆疊 -->
              <div class="space-y-3">
                <!-- ⚖️ 金毛大律師 • 法庭攻防點評 -->
                <div class="p-4 rounded-xl bg-amber-50/80 dark:bg-amber-950/20 border-2 border-amber-300 dark:border-amber-800/60 border-l-[6px] border-l-amber-500 flex items-start gap-3">
                  <div class="w-10 h-10 rounded-xl overflow-hidden shrink-0 border border-amber-400 bg-amber-100">
                    <img src="images/golden_case_attorney.jpg" alt="金毛辯護大律師" class="w-full h-full object-cover" style="object-position: center 20%; transform: scale(1.35);">
                  </div>
                  <div class="flex-1 space-y-1 text-xs sm:text-sm font-serif">
                    <div class="font-black text-amber-950 dark:text-amber-200">⚖️ 金毛大律師 • 訴訟要領</div>
                    <p class="text-slate-800 dark:text-slate-200 leading-relaxed">
                      若論不作為犯，辯護人切入點在於「醫師法或醫療契約之保證人義務實質範圍」，以及「若及時施打龜殼花血清是否確能百分之百挽救生命（假定因果關係與結果迴避可能性）」。
                    </p>
                  </div>
                </div>

                <!-- 🛡️ 德牧法規巡查官 • 法規雷達查核 -->
                <div class="p-4 rounded-xl bg-blue-50/80 dark:bg-blue-950/20 border-2 border-blue-300 dark:border-blue-800/60 border-l-[6px] border-l-blue-600 flex items-start gap-3">
                  <div class="w-10 h-10 rounded-xl overflow-hidden shrink-0 border border-blue-400 bg-blue-100">
                    <img src="images/shepherd_law_inspector.jpg" alt="德牧法規巡查官" class="w-full h-full object-cover" style="object-position: center 15%; transform: scale(1.4);">
                  </div>
                  <div class="flex-1 space-y-1 text-xs sm:text-sm font-serif">
                    <div class="font-black text-blue-950 dark:text-blue-200">🛡️ 德牧法規巡查官 • 法規雷達</div>
                    <p class="text-slate-800 dark:text-slate-200 leading-relaxed font-sans">
                      <strong>【裁判要旨查核】</strong>醫師對於急迫求診病患負有法令與業務上保證人義務（醫療法第 60 條）。打催化劑屬普通殺人既遂罪（作為）；打無效解毒劑屬不純正不作為犯之殺人既遂罪（§ 15 Ⅰ + § 271 Ⅰ）。
                    </p>
                  </div>
                </div>

                <!-- 👨‍⚖️ 邊牧首席審判長 • 終審裁決一槌定音 -->
                <div class="p-5 rounded-2xl bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white border-2 border-amber-400/80 shadow-lg space-y-2">
                  <div class="flex items-center justify-between border-b border-white/10 pb-2">
                    <div class="flex items-center gap-2">
                      <span class="text-amber-300 font-black text-sm">👨‍⚖️ 邊牧首席審判長 • 終審裁定</span>
                      <span class="text-[10px] font-mono text-slate-300">#法槌一敲誰與爭鋒</span>
                    </div>
                    <span class="text-xs text-amber-400 font-bold">作為 vs 不作為殊途同歸</span>
                  </div>
                  <p class="text-xs sm:text-sm font-serif text-slate-200">
                    🔨 <strong>【定讞結論】</strong>注射黑寡婦解毒劑為「不作為」，注射催化劑為「作為」，二者皆成立殺人既遂罪。
                  </p>
                  <div class="text-[11px] font-mono text-amber-200/90 pt-1">
                    📅 <strong>2026 最新法條動態備註</strong>：醫療法第 60 條強制救治義務與刑法第 15 條義務連動體系現行完備有效。
                  </div>
                </div>
              </div>
            </div>

            <!-- ==================== 案例研習 1-3：泳池打昏救生員案（扣緊對象重要原則） ==================== -->
            <div id="sec-p1ch1-case13" class="rounded-3xl border-2 border-indigo-300 dark:border-indigo-800/80 bg-white dark:bg-[#121827] shadow-md overflow-hidden p-6 sm:p-8 space-y-6">
              
              <div class="flex items-center justify-between flex-wrap gap-2 border-b border-slate-200 dark:border-slate-800 pb-3">
                <div class="flex items-center gap-2.5">
                  <span class="text-2xl">🏊</span>
                  <div>
                    <span class="text-xs font-mono font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">CASE 1-3 • RELATIVE TARGETS</span>
                    <h4 class="text-lg sm:text-xl font-black text-slate-900 dark:text-white">
                      案例 1-3：泳池溺水與打昏救生員案（作為與不作為必須扣緊討論對象！）
                    </h4>
                  </div>
                </div>
                <span class="text-xs font-mono font-bold px-2.5 py-1 rounded-full bg-indigo-100 dark:bg-indigo-950 text-indigo-800 dark:text-indigo-300 border border-indigo-300 dark:border-indigo-800">
                  教材第 3-2 頁
                </span>
              </div>

              <div class="p-4 sm:p-5 rounded-2xl bg-indigo-50/60 dark:bg-indigo-950/20 border-2 border-indigo-300 dark:border-indigo-800/60 font-serif text-slate-800 dark:text-slate-200 text-xs sm:text-sm leading-relaxed">
                <strong>【案件事實】</strong>甲見其妻乙於游泳池內溺水呼救，卻因夫妻間早已失和而不願施加援手；此外甲更打昏泳池救生員丙，阻止丙下水救援，最終導致乙溺斃。
              </div>

              <!-- 雙視角神解析卡片（對乙 vs 對丙） -->
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div class="p-4 rounded-xl bg-indigo-100/50 dark:bg-indigo-950/30 border-2 border-indigo-400 space-y-1 text-xs">
                  <span class="px-2 py-0.5 rounded bg-indigo-600 text-white font-bold font-mono">對象一：對其妻乙之死亡</span>
                  <p class="font-serif text-slate-800 dark:text-slate-200 pt-1 leading-relaxed">
                    甲打昏救生員阻止施救，對乙而言，乃是<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">不排除既存之溺斃風險</span>，實質屬於<strong>【不 作 為】</strong>！
                  </p>
                </div>
                <div class="p-4 rounded-xl bg-emerald-100/50 dark:bg-emerald-950/30 border-2 border-emerald-400 space-y-1 text-xs">
                  <span class="px-2 py-0.5 rounded bg-emerald-700 text-white font-bold font-mono">對象二：對救生員丙之受傷</span>
                  <p class="font-serif text-slate-800 dark:text-slate-200 pt-1 leading-relaxed">
                    甲以拳頭重擊丙致昏厥，對丙而言，乃是無中生有<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">創造身體受害風險</span>，毫無疑問屬於<strong>【作 為】</strong>！
                  </p>
                </div>
              </div>

              <!-- 🐾 柴柴法學教授 • 白話生活大解碼 -->
              <div class="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-amber-500/15 via-orange-500/5 to-transparent border-2 border-amber-300 dark:border-amber-700/70 flex items-start gap-3.5 shadow-xs">
                <div class="w-12 h-12 rounded-2xl overflow-hidden shrink-0 border-2 border-amber-400 shadow-sm bg-amber-100 dark:bg-amber-950">
                  <img src="images/shiba_law_professor.jpg" alt="柴柴法學教授" class="w-full h-full object-cover" style="object-position: center 20%; transform: scale(1.38);">
                </div>
                <div class="flex-1 space-y-1.5 font-serif">
                  <div class="flex items-center gap-2 flex-wrap">
                    <span class="font-black text-amber-950 dark:text-amber-200 text-sm sm:text-base">🐾 柴柴法學教授 • 書本精髓大叮嚀</span>
                    <span class="text-[11px] px-2 py-0.5 rounded-full bg-rose-200 dark:bg-rose-900/80 text-rose-950 dark:text-rose-100 font-mono font-bold">#對象不同性質完全顛倒</span>
                  </div>
                  <p class="text-xs sm:text-sm text-slate-800 dark:text-slate-200 leading-relaxed">
                    「課本特別加粗強調：<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">千萬不能混淆的是，作為與不作為必須扣緊討論對象</span>！同一個打人的動作，不能含糊籠統說『甲是作為還是不作為』，你必須問：『<strong>是對誰而言？</strong>』對被你打的人是創造風險的作為；對正在溺水等救生員去救的老婆而言，是不排除危險的不作為！」
                  </p>
                </div>
              </div>

              <!-- 嚴格垂直上下堆疊 -->
              <div class="space-y-3">
                <!-- 🛡️ 德牧法規巡查官 • 法規雷達查核 -->
                <div class="p-4 rounded-xl bg-blue-50/80 dark:bg-blue-950/20 border-2 border-blue-300 dark:border-blue-800/60 border-l-[6px] border-l-blue-600 flex items-start gap-3">
                  <div class="w-10 h-10 rounded-xl overflow-hidden shrink-0 border border-blue-400 bg-blue-100">
                    <img src="images/shepherd_law_inspector.jpg" alt="德牧法規巡查官" class="w-full h-full object-cover" style="object-position: center 15%; transform: scale(1.4);">
                  </div>
                  <div class="flex-1 space-y-1 text-xs sm:text-sm font-serif">
                    <div class="font-black text-blue-950 dark:text-blue-200">🛡️ 德牧法規巡查官 • 保證人地位核查</div>
                    <p class="text-slate-800 dark:text-slate-200 leading-relaxed font-sans">
                      <strong>【裁判要旨查核】</strong>民法第 1116 條之 1 夫妻互負同居扶養義務，屬刑法第 15 條密切生活關係之保證人。甲不救妻成立不作為殺人罪；甲打昏丙另成立第 277 條第 1 項傷害罪（作為犯），兩罪數罪併罰。
                    </p>
                  </div>
                </div>

                <!-- 👨‍⚖️ 邊牧首席審判長 • 終審裁決一槌定音 -->
                <div class="p-5 rounded-2xl bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white border-2 border-amber-400/80 shadow-lg space-y-2">
                  <div class="flex items-center justify-between border-b border-white/10 pb-2">
                    <span class="text-amber-300 font-black text-sm">👨‍⚖️ 邊牧首席審判長 • 終審裁決</span>
                    <span class="text-xs text-amber-400 font-bold">雙重罪名定讞</span>
                  </div>
                  <p class="text-xs sm:text-sm font-serif text-slate-200">
                    🔨 <strong>【定讞結論】</strong>甲對丙成立傷害罪（作為）；甲對乙成立不作為殺人罪。二罪犯意各別、行為互殊，分論併罰！
                  </p>
                </div>
              </div>
            </div>
          </section>

          <!-- ==================== 四、確認功能：特定行為時點與系列案例 (教材第 3-3 ～ 3-4 頁) ==================== -->
          <section id="sec-p1ch1-confirm" class="space-y-6">
            <div class="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3">
              <div class="flex items-center gap-3">
                <span class="w-2.5 h-6 rounded-full bg-amber-600"></span>
                <h3 class="text-lg sm:text-xl font-black text-slate-900 dark:text-white tracking-tight">
                  四、確認功能：特定所欲討論的行為時點（教材第 3-3 頁）
                </h3>
              </div>
              <span class="text-xs font-mono font-bold px-2.5 py-1 rounded-lg bg-amber-50 dark:bg-amber-950 text-amber-600 dark:text-amber-400 border border-amber-200 dark:border-amber-800">
                p. 3-3 原文
              </span>
            </div>

            <div class="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#121827] border border-slate-200/90 dark:border-white/10 shadow-sm space-y-4">
              <blockquote class="font-serif text-base sm:text-lg text-slate-800 dark:text-slate-200 leading-relaxed pl-4 border-l-4 border-amber-600">
                <span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">確認哪個動作是所欲討論的行為</span>，這在一個案例中具備多重行為方式時更顯實益。
              </blockquote>
              <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-serif">
                一個犯罪案件通常包含連續的動靜過程，不同時點分別具備作為或不作為的性質，必須逐一拆解確認：
              </p>
            </div>

            <!-- 案例 1-4 ～ 1-7 四大確認時點案例群 -->
            <div class="space-y-4">
              <!-- 案例 1-4 染菌皮革案 -->
              <div id="sec-p1ch1-case14" class="p-5 sm:p-6 rounded-2xl bg-white dark:bg-[#121827] border-2 border-slate-300 dark:border-slate-800 space-y-3 shadow-xs">
                <div class="flex items-center justify-between flex-wrap gap-2 border-b border-slate-200 dark:border-slate-800 pb-2">
                  <div class="font-black text-sm sm:text-base text-slate-900 dark:text-white flex items-center gap-2">
                    <span class="w-2.5 h-2.5 rounded-full bg-amber-500"></span>
                    <span>案例 1-4：染菌山羊毛皮革案（未消毒 vs 交付加工）</span>
                  </div>
                  <span class="text-xs font-mono text-slate-500">教材第 3-3 頁</span>
                </div>
                <p class="font-serif text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                  工廠主人甲將未經消毒的皮革交給工廠女工乙加工，然而依據法律規定，該原料應先經過消毒程序始可交付，事後乙果然因為該皮革而染菌身亡。
                </p>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs pt-1">
                  <div class="p-3 rounded-xl bg-indigo-50/70 dark:bg-indigo-950/30 border border-indigo-200 dark:border-indigo-800">
                    <strong class="text-indigo-800 dark:text-indigo-300">時點 ① 未消毒皮革時：</strong>
                    <p class="text-slate-600 dark:text-slate-300 mt-0.5">未排除既存風險的【不作為】。</p>
                  </div>
                  <div class="p-3 rounded-xl bg-emerald-50/70 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800">
                    <strong class="text-emerald-800 dark:text-emerald-300">時點 ② 交付皮革給女工時：</strong>
                    <p class="text-slate-600 dark:text-slate-300 mt-0.5">主動將毒物推入他人領域，為創造風險的【作為】。</p>
                  </div>
                </div>
              </div>

              <!-- 案例 1-5 夜間未開頭燈案 -->
              <div id="sec-p1ch1-case15" class="p-5 sm:p-6 rounded-2xl bg-white dark:bg-[#121827] border-2 border-slate-300 dark:border-slate-800 space-y-3 shadow-xs">
                <div class="flex items-center justify-between flex-wrap gap-2 border-b border-slate-200 dark:border-slate-800 pb-2">
                  <div class="font-black text-sm sm:text-base text-slate-900 dark:text-white flex items-center gap-2">
                    <span class="w-2.5 h-2.5 rounded-full bg-amber-500"></span>
                    <span>案例 1-5：夜間未開頭燈撞人案（駕車 vs 未開燈）</span>
                  </div>
                  <span class="text-xs font-mono text-slate-500">教材第 3-3 頁</span>
                </div>
                <p class="font-serif text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                  甲夜間駕車卻未開啟機車頭燈，因未看清路況而撞傷路人。
                </p>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs pt-1">
                  <div class="p-3 rounded-xl bg-emerald-50/70 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800">
                    <strong class="text-emerald-800 dark:text-emerald-300">駕車操縱車輛之行為：</strong>
                    <p class="text-slate-600 dark:text-slate-300 mt-0.5">操控危險機械行駛於道路，乃創造風險的【作為】。</p>
                  </div>
                  <div class="p-3 rounded-xl bg-indigo-50/70 dark:bg-indigo-950/30 border border-indigo-200 dark:border-indigo-800">
                    <strong class="text-indigo-800 dark:text-indigo-300">未開啟大燈照明之行為：</strong>
                    <p class="text-slate-600 dark:text-slate-300 mt-0.5">未消除夜間視線不佳風險，乃不排除既存風險的【不作為】。</p>
                  </div>
                </div>
              </div>

              <!-- 案例 1-6 故意推人落水案 -->
              <div id="sec-p1ch1-case16" class="p-5 sm:p-6 rounded-2xl bg-white dark:bg-[#121827] border-2 border-slate-300 dark:border-slate-800 space-y-3 shadow-xs">
                <div class="flex items-center justify-between flex-wrap gap-2 border-b border-slate-200 dark:border-slate-800 pb-2">
                  <div class="font-black text-sm sm:text-base text-slate-900 dark:text-white flex items-center gap-2">
                    <span class="w-2.5 h-2.5 rounded-full bg-rose-500"></span>
                    <span>案例 1-6：故意推人落水不救案（推乙入水 vs 岸上袖手旁觀）</span>
                  </div>
                  <span class="text-xs font-mono text-slate-500">教材第 3-3 頁</span>
                </div>
                <p class="font-serif text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                  甲故意將不會游泳的乙推落湖中，乙高聲呼救，甲不為所動導致乙溺斃。
                </p>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs pt-1">
                  <div class="p-3 rounded-xl bg-emerald-50/70 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800">
                    <strong class="text-emerald-800 dark:text-emerald-300">時點 ① 甲伸手推乙入湖之行為：</strong>
                    <p class="text-slate-600 dark:text-slate-300 mt-0.5">乃創造落水致死風險的【作為】。</p>
                  </div>
                  <div class="p-3 rounded-xl bg-indigo-50/70 dark:bg-indigo-950/30 border border-indigo-200 dark:border-indigo-800">
                    <strong class="text-indigo-800 dark:text-indigo-300">時點 ② 甲見乙呼救不予救助之行為：</strong>
                    <p class="text-slate-600 dark:text-slate-300 mt-0.5">乃不排除既存溺斃風險的【不作為】。</p>
                  </div>
                </div>
              </div>

              <!-- 案例 1-7 過失推人落水案 -->
              <div id="sec-p1ch1-case17" class="p-5 sm:p-6 rounded-2xl bg-white dark:bg-[#121827] border-2 border-slate-300 dark:border-slate-800 space-y-3 shadow-xs">
                <div class="flex items-center justify-between flex-wrap gap-2 border-b border-slate-200 dark:border-slate-800 pb-2">
                  <div class="font-black text-sm sm:text-base text-slate-900 dark:text-white flex items-center gap-2">
                    <span class="w-2.5 h-2.5 rounded-full bg-rose-500"></span>
                    <span>案例 1-7：過失推人落水不救案（過失推落 vs 岸上見死不救）</span>
                  </div>
                  <span class="text-xs font-mono text-slate-500">教材第 3-3 ～ 3-4 頁</span>
                </div>
                <p class="font-serif text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                  甲過失將不會游泳的乙推落湖中，乙高聲呼救，甲則不為所動致乙最終溺斃。
                </p>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs pt-1">
                  <div class="p-3 rounded-xl bg-emerald-50/70 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800">
                    <strong class="text-emerald-800 dark:text-emerald-300">時點 ① 甲過失推乙入湖之行為：</strong>
                    <p class="text-slate-600 dark:text-slate-300 mt-0.5">乃創造風險的【作為】。</p>
                  </div>
                  <div class="p-3 rounded-xl bg-indigo-50/70 dark:bg-indigo-950/30 border border-indigo-200 dark:border-indigo-800">
                    <strong class="text-indigo-800 dark:text-indigo-300">時點 ② 甲不救助乙之行為：</strong>
                    <p class="text-slate-600 dark:text-slate-300 mt-0.5">乃不排除既存風險的【不作為】（甲有危險前行為保證人地位，結論同上）。</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <!-- ==================== 五、【作者叮嚀】時點多元與競合理論 (教材第 3-4 頁) ==================== -->
          <section id="sec-p1ch1-author-memo" class="space-y-6">
            <div class="flex items-center justify-between border-b border-amber-200/80 dark:border-amber-900/60 pb-3">
              <div class="flex items-center gap-3">
                <span class="w-2.5 h-6 rounded-full bg-amber-500"></span>
                <h3 class="text-lg sm:text-xl font-black text-slate-900 dark:text-white tracking-tight flex items-center gap-2">
                  <span>💡</span>
                  <span>五、【作者叮嚀】時點多元性與切莫混淆犯罪理論與競合理論（教材第 3-4 頁）</span>
                </h3>
              </div>
              <span class="text-xs font-mono font-bold px-2.5 py-1 rounded-lg bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300 border border-amber-300 dark:border-amber-800">
                p. 3-4 原文
              </span>
            </div>

            <div class="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-amber-50/80 via-white to-orange-50/30 dark:from-[#21160c] dark:via-[#161d2d] dark:to-[#0f172a] border-2 border-amber-300 dark:border-amber-600/80 shadow-md space-y-5">
              
              <div class="flex items-center gap-2 text-xs font-mono text-amber-800 dark:text-amber-300 font-bold uppercase tracking-wider">
                <span>📝 原書作者叮嚀全文</span>
                <span>•</span>
                <span>刑法體系分工奧義</span>
              </div>

              <blockquote class="font-serif text-slate-800 dark:text-slate-200 text-sm sm:text-base leading-relaxed pl-4 border-l-4 border-amber-500 text-justify space-y-3">
                <p>
                  由確認功能可以看出，不同時點的作為與不作為各自都有判斷犯罪成立與否的可能性與必要性，因此導出一個很重要的觀念：<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">判斷犯罪成立的時點永遠不會只有一個</span>！
                </p>
                <p>
                  或許有人會提出以下質疑：若兩個時點分別成立作為犯與不作為犯，不會有重複評價的問題嗎？筆者要提醒的是，可別忘記在犯罪理論外還有<strong class="text-blue-600 dark:text-blue-400">競合理論專門處理重複評價的問題</strong>，透過競合理論最終僅論作為犯，<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">切莫本末倒置地認為既然競合理論最終僅論作為犯，那何必討論不作為</span>！這種錯誤見解將招來「<strong class="text-rose-600 dark:text-rose-400">混淆犯罪理論與競合理論</strong>」的批評。
                </p>
              </blockquote>

              <!-- 體系對照圖解卡 -->
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                <div class="p-4 rounded-xl bg-white dark:bg-slate-900 border border-amber-200 dark:border-slate-800 space-y-1.5">
                  <div class="font-black text-blue-700 dark:text-blue-400 text-xs sm:text-sm flex items-center gap-1.5">
                    <span>1️⃣ 犯罪成立理論（階段一）</span>
                  </div>
                  <p class="text-xs text-slate-600 dark:text-slate-300 font-serif leading-relaxed">
                    負責「<strong>窮盡評價</strong>」！每個行為時點（時點一作為、時點二不作為）都必須逐一審查其是否成罪，決不能擅自預設跳過。
                  </p>
                </div>
                <div class="p-4 rounded-xl bg-white dark:bg-slate-900 border border-amber-200 dark:border-slate-800 space-y-1.5">
                  <div class="font-black text-indigo-700 dark:text-indigo-400 text-xs sm:text-sm flex items-center gap-1.5">
                    <span>2️⃣ 罪數競合理論（階段二）</span>
                  </div>
                  <p class="text-xs text-slate-600 dark:text-slate-300 font-serif leading-relaxed">
                    負責「<strong>禁止重複評價</strong>」！當作為犯與不作為犯競合時，依不真正競合（吸收關係或法條競合）最終論以作為犯處斷。
                  </p>
                </div>
              </div>
            </div>
          </section>

          <!-- ==================== 六、【解題提示】與思考順序流程圖 (教材第 3-4 ～ 3-5 頁) ==================== -->
          <section id="sec-p1ch1-tips-flowchart" class="space-y-6">
            <div class="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3">
              <div class="flex items-center gap-3">
                <span class="w-2.5 h-6 rounded-full bg-blue-600"></span>
                <h3 class="text-lg sm:text-xl font-black text-slate-900 dark:text-white tracking-tight">
                  六、【解題提示】刑法意義行為之思考順序流程圖（教材第 3-4 ～ 3-5 頁）
                </h3>
              </div>
              <span class="text-xs font-mono font-bold px-2.5 py-1 rounded-lg bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-800">
                p. 3-4 ~ 3-5 原文
              </span>
            </div>

            <!-- 原書解題提示條列 -->
            <div class="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#121827] border border-slate-200/90 dark:border-white/10 shadow-sm space-y-4">
              <div class="font-black text-base text-slate-900 dark:text-white flex items-center gap-2">
                <span>📖</span>
                <span>筆者將刑法意義行為的思考順序統整如下：</span>
              </div>

              <div class="space-y-3 text-xs sm:text-sm font-serif">
                <div class="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                  <strong class="text-amber-700 dark:text-amber-400">(一) 確認所欲討論的行為為何？</strong>
                  <p class="text-slate-700 dark:text-slate-300 mt-1">
                    ➔ <strong>確認功能</strong>：判斷犯罪成立的時點永遠不會只有一個，當有多數時點成罪可能性時，每個時點都必須詳細檢驗。因此「同一案例中」可能會有作為與不作為的並存現象。
                  </p>
                </div>

                <div class="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                  <strong class="text-indigo-700 dark:text-indigo-400">(二) 該行為是否具備刑法上的意義？</strong>
                  <p class="text-slate-700 dark:text-slate-300 mt-1">
                    ➔ <strong>過濾功能</strong>：反射動作、直接強制、睡眠或無意識中之行止、因病抽搐、欠缺行動可能性之靜止，都必須核對排除。
                  </p>
                </div>

                <div class="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                  <strong class="text-emerald-700 dark:text-emerald-400">(三) 該行為是作為還是不作為？</strong>
                  <p class="text-slate-700 dark:text-slate-300 mt-1">
                    ➔ <strong>分類功能</strong>：操作風險理論，創造或加速風險實現為作為，不排除既存風險屬不作為。
                  </p>
                </div>
              </div>
            </div>

            <!-- 原書教材第 3-5 頁「行為階層的思考順序」高質感 SVG 流程圖 -->
            <div class="p-6 sm:p-8 rounded-3xl bg-slate-50 dark:bg-[#0c121e] border-2 border-slate-300 dark:border-slate-800 space-y-4">
              <div class="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3">
                <div class="flex items-center gap-2">
                  <span class="text-lg">🗺️</span>
                  <span class="font-black text-sm sm:text-base text-slate-900 dark:text-white">
                    行為階層的思考順序（教材第 3-5 頁 原書圖解標準復刻）
                  </span>
                </div>
                <span class="text-xs font-mono text-slate-400">CONFIRM ➔ FILTER ➔ CLASSIFY</span>
              </div>

              <div class="overflow-x-auto custom-scrollbar py-4 flex justify-center">
                <svg viewBox="0 0 760 160" class="w-full max-w-[760px] h-auto select-none font-sans" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <marker id="flowArrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                      <path d="M 0 1 L 10 5 L 0 9 z" fill="#64748b" />
                    </marker>
                  </defs>

                  <!-- 步驟 1：確認 -->
                  <rect x="20" y="25" width="200" height="110" rx="16" class="fill-amber-50 dark:fill-amber-950/40 stroke-amber-400 dark:stroke-amber-600" stroke-width="2.5" />
                  <rect x="70" y="10" width="100" height="30" rx="8" class="fill-amber-500 text-white" />
                  <text x="120" y="30" text-anchor="middle" fill="#ffffff" font-size="13" font-weight="900">確　認</text>
                  <text x="120" y="75" text-anchor="middle" class="fill-slate-800 dark:fill-slate-100 font-serif font-bold" font-size="14">找出所欲討論</text>
                  <text x="120" y="102" text-anchor="middle" class="fill-amber-800 dark:fill-amber-300 font-serif font-black" font-size="14">的行為時點</text>

                  <!-- 箭頭 1 -->
                  <line x1="225" y1="80" x2="275" y2="80" stroke="#64748b" stroke-width="3" marker-end="url(#flowArrow)" />

                  <!-- 步驟 2：過濾 -->
                  <rect x="280" y="25" width="200" height="110" rx="16" class="fill-indigo-50 dark:fill-indigo-950/40 stroke-indigo-400 dark:stroke-indigo-600" stroke-width="2.5" />
                  <rect x="330" y="10" width="100" height="30" rx="8" class="fill-indigo-600 text-white" />
                  <text x="380" y="30" text-anchor="middle" fill="#ffffff" font-size="13" font-weight="900">過　濾</text>
                  <text x="380" y="75" text-anchor="middle" class="fill-slate-800 dark:fill-slate-100 font-serif font-bold" font-size="14">排除非刑法意</text>
                  <text x="380" y="102" text-anchor="middle" class="fill-indigo-800 dark:fill-indigo-300 font-serif font-black" font-size="14">義的行為</text>

                  <!-- 箭頭 2 -->
                  <line x1="485" y1="80" x2="535" y2="80" stroke="#64748b" stroke-width="3" marker-end="url(#flowArrow)" />

                  <!-- 步驟 3：分類 -->
                  <rect x="540" y="25" width="200" height="110" rx="16" class="fill-emerald-50 dark:fill-emerald-950/40 stroke-emerald-400 dark:stroke-emerald-600" stroke-width="2.5" />
                  <rect x="590" y="10" width="100" height="30" rx="8" class="fill-emerald-600 text-white" />
                  <text x="640" y="30" text-anchor="middle" fill="#ffffff" font-size="13" font-weight="900">分　類</text>
                  <text x="640" y="70" text-anchor="middle" class="fill-slate-800 dark:fill-slate-100 font-serif font-bold" font-size="13">區分作為與不作為</text>
                  <text x="640" y="94" text-anchor="middle" class="fill-slate-600 dark:fill-slate-300 font-serif" font-size="12">以利後續構成</text>
                  <text x="640" y="116" text-anchor="middle" class="fill-emerald-800 dark:fill-emerald-300 font-serif font-black" font-size="12">要件的討論</text>
                </svg>
              </div>
            </div>
          </section>

          <!-- ==================== 七、案例 1-8【醫師隱瞞審要案】壓軸大案全示範 (教材第 3-5 頁) ==================== -->
          <section id="sec-p1ch1-case18" class="space-y-6">
            <div class="flex items-center justify-between border-b border-rose-300 dark:border-rose-900/60 pb-3">
              <div class="flex items-center gap-3">
                <span class="w-2.5 h-6 rounded-full bg-rose-600"></span>
                <h3 class="text-lg sm:text-xl font-black text-slate-900 dark:text-white tracking-tight flex items-center gap-2">
                  <span>🏥</span>
                  <span>七、案例 1-8：【醫師隱瞞審要案】行為階層思考流程全示範（教材第 3-5 頁）</span>
                </h3>
              </div>
              <span class="text-xs font-mono font-bold px-2.5 py-1 rounded-lg bg-rose-50 dark:bg-rose-950 text-rose-700 dark:text-rose-300 border border-rose-300 dark:border-rose-800">
                p. 3-5 壓軸大案
              </span>
            </div>

            <div class="rounded-3xl border-2 border-rose-300 dark:border-rose-800/80 bg-white dark:bg-[#121827] shadow-md overflow-hidden p-6 sm:p-8 space-y-6">
              
              <!-- 案件事實全文（逐字忠實呈現） -->
              <div class="p-5 rounded-2xl bg-rose-50/60 dark:bg-rose-950/20 border-2 border-rose-300 dark:border-rose-800/60 font-serif text-slate-800 dark:text-slate-200 text-xs sm:text-sm leading-relaxed space-y-2">
                <div class="flex items-center justify-between border-b border-rose-200 dark:border-rose-800/60 pb-2">
                  <span class="font-black text-rose-950 dark:text-rose-200 text-sm">【案例 1-8 原案事實】</span>
                  <span class="font-mono text-xs text-rose-600 dark:text-rose-400">陳奕廷律師編著 p. 3-5</span>
                </div>
                <p class="indent-6 text-justify">
                  甲為某綜合醫院家庭醫學科主任，與其妻妹乙發生戀情，瞞著妻丙將乙金屋藏嬌，某日丙因頸部有硬塊到醫院向甲求診，甲懷疑丙罹患淋巴癌，陪同丙至另一較大型醫院一般外科求診，聯絡資料填寫乙之住址、電話，切片結果證實丙罹患淋巴癌，甲攔截外科醫師回診通知，甲並且告訴丙已打電話查問切片結果，其頸部硬塊為良性淋巴瘤，過些日子可能會自動消失，不必擔心，並邀丙出國旅遊三個星期，回國途中丙深感不適，返家後再度掛號求診，始知淋巴癌已轉為鼻咽癌，緊急安排開刀和化療，丙於二個月後病逝。
                </p>
              </div>

              <!-- 思考順序三步拆解（確認 ➔ 過濾 ➔ 分類） -->
              <div class="space-y-3 font-serif">
                <div class="flex items-center gap-2 text-xs font-mono font-bold text-slate-500">
                  <span>🔍</span><span>本案例就「刑法意義行為」思考如下：</span>
                </div>

                <div class="p-4 rounded-xl bg-amber-50/70 dark:bg-amber-950/30 border border-amber-300 dark:border-amber-700/60 space-y-1">
                  <div class="font-black text-amber-900 dark:text-amber-200 text-xs sm:text-sm flex items-center gap-1.5">
                    <span>(一) 確認：</span>
                  </div>
                  <p class="text-xs sm:text-sm text-slate-800 dark:text-slate-200 leading-relaxed">
                    有三個可能的討論時點，分別是：<br>
                    <strong>時點 ①</strong> 甲沒有為丙診療。<br>
                    <strong>時點 ②</strong> 甲攔截外科醫師回診診療報告。<br>
                    <strong>時點 ③</strong> 甲不對丙告知真正的診療結果（謊稱良性並邀其出國延誤就醫）。
                  </p>
                </div>

                <div class="p-4 rounded-xl bg-indigo-50/70 dark:bg-indigo-950/30 border border-indigo-300 dark:border-indigo-700/60 space-y-1">
                  <div class="font-black text-indigo-900 dark:text-indigo-200 text-xs sm:text-sm flex items-center gap-1.5">
                    <span>(二) 過濾：</span>
                  </div>
                  <p class="text-xs sm:text-sm text-slate-800 dark:text-slate-200 leading-relaxed">
                    全部都是在人類大腦意思支配下所為，引致外界具刑法重要性之後果，<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">全部都是刑法意義的行為</span>！
                  </p>
                </div>

                <div class="p-4 rounded-xl bg-emerald-50/70 dark:bg-emerald-950/30 border border-emerald-300 dark:border-emerald-700/60 space-y-2">
                  <div class="font-black text-emerald-900 dark:text-emerald-200 text-xs sm:text-sm flex items-center gap-1.5">
                    <span>(三) 分類（操作風險理論）：</span>
                  </div>
                  <div class="space-y-1.5 text-xs sm:text-sm text-slate-800 dark:text-slate-200">
                    <p>• <strong>時點 ① 甲沒有為丙診療</strong>：對丙而言乃未排除既存風險，故屬【<strong>不作為</strong>】。</p>
                    <p>• <strong>時點 ② 甲攔截診療報告</strong>：對丙而言乃未排除既存風險，故亦屬【<strong>不作為</strong>】。</p>
                    <p>• <strong>時點 ③ 甲不對丙告知真正診療結果（詐稱良性、邀約出國）</strong>：對丙而言乃<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">創造延誤就醫之嶄新風險</span>，故屬【<strong>作為</strong>】！</p>
                  </div>
                </div>
              </div>

              <!-- 🐾 柴柴法學教授 • 終極白話拆解 -->
              <div class="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-amber-500/15 via-orange-500/5 to-transparent border-2 border-amber-300 dark:border-amber-700/70 flex items-start gap-3.5 shadow-xs">
                <div class="w-12 h-12 rounded-2xl overflow-hidden shrink-0 border-2 border-amber-400 shadow-sm bg-amber-100 dark:bg-amber-950">
                  <img src="images/shiba_law_professor.jpg" alt="柴柴法學教授" class="w-full h-full object-cover" style="object-position: center 20%; transform: scale(1.38);">
                </div>
                <div class="flex-1 space-y-1.5 font-serif">
                  <div class="flex items-center gap-2 flex-wrap">
                    <span class="font-black text-amber-950 dark:text-amber-200 text-sm sm:text-base">🐾 柴柴法學教授 • 國考解題破局點</span>
                    <span class="text-[11px] px-2 py-0.5 rounded-full bg-amber-200 dark:bg-amber-900/80 text-amber-950 dark:text-amber-100 font-mono font-bold">#謊稱良性是創造延誤風險</span>
                  </div>
                  <p class="text-xs sm:text-sm text-slate-800 dark:text-slate-200 leading-relaxed">
                    「很多考生在時點 ③ 會摔進陷阱，以為甲『不告知』有三個字叫『不告知』就是不作為？大錯特錯！甲是透過『<strong>欺瞞、謊稱良性、積極哄騙出國旅遊</strong>』的手段，主動麻痺被害人的警覺心，阻斷丙自行求醫的一切可能！這在風險理論上叫做『<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">積極創造並維持延誤就醫之死亡風險</span>』，百分之百是<strong>作為犯</strong>！」
                  </p>
                </div>
              </div>

              <!-- 嚴格垂直上下堆疊 -->
              <div class="space-y-3">
                <!-- ⚖️ 金毛大律師 • 法庭攻防點評 -->
                <div class="p-4 rounded-xl bg-amber-50/80 dark:bg-amber-950/20 border-2 border-amber-300 dark:border-amber-800/60 border-l-[6px] border-l-amber-500 flex items-start gap-3">
                  <div class="w-10 h-10 rounded-xl overflow-hidden shrink-0 border border-amber-400 bg-amber-100">
                    <img src="images/golden_case_attorney.jpg" alt="金毛辯護大律師" class="w-full h-full object-cover" style="object-position: center 20%; transform: scale(1.35);">
                  </div>
                  <div class="flex-1 space-y-1 text-xs sm:text-sm font-serif">
                    <div class="font-black text-amber-950 dark:text-amber-200">⚖️ 金毛大律師 • 答題競合要領</div>
                    <p class="text-slate-800 dark:text-slate-200 leading-relaxed">
                      答題時務必展現『前言叮嚀』的深厚功力：時點 ① ② 成立不作為殺人犯，時點 ③ 成立作為殺人犯。在犯罪理論窮盡三時點審查後，於競合理論處明言『不作為為作為所吸收，最終僅論以刑法第 271 條第 1 項殺人既遂罪之作為犯』，保證閱卷老師擊節讚賞！
                    </p>
                  </div>
                </div>

                <!-- 🛡️ 德牧法規巡查官 • 法規雷達查核 -->
                <div class="p-4 rounded-xl bg-blue-50/80 dark:bg-blue-950/20 border-2 border-blue-300 dark:border-blue-800/60 border-l-[6px] border-l-blue-600 flex items-start gap-3">
                  <div class="w-10 h-10 rounded-xl overflow-hidden shrink-0 border border-blue-400 bg-blue-100">
                    <img src="images/shepherd_law_inspector.jpg" alt="德牧法規巡查官" class="w-full h-full object-cover" style="object-position: center 15%; transform: scale(1.4);">
                  </div>
                  <div class="flex-1 space-y-1 text-xs sm:text-sm font-serif">
                    <div class="font-black text-blue-950 dark:text-blue-200">🛡️ 德牧法規巡查官 • 因果關係實務查核</div>
                    <p class="text-slate-800 dark:text-slate-200 leading-relaxed font-sans">
                      <strong>【裁判要旨查核】</strong>依最高法院見解，行為人之欺瞞行為若阻斷病患獲得即時救治之機會，致病情惡化死亡，其作為與死亡結果間具備相當因果關係與客觀歸責。
                    </p>
                  </div>
                </div>

                <!-- 👨‍⚖️ 邊牧首席審判長 • 終審裁決一槌定音 -->
                <div class="p-5 rounded-2xl bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white border-2 border-amber-400/80 shadow-lg space-y-3">
                  <div class="flex items-center justify-between border-b border-white/10 pb-2">
                    <span class="text-amber-300 font-black text-sm">👨‍⚖️ 邊牧首席審判長 • 終審判決定讞</span>
                    <span class="text-xs text-amber-400 font-bold">全章圓滿定錨</span>
                  </div>
                  <p class="text-xs sm:text-sm font-serif text-slate-200 leading-relaxed">
                    🔨 <strong>【定讞結論】</strong>甲以欺罔手段阻礙就醫致妻身亡，成立刑法第 271 條第 1 項殺人既遂罪（作為犯）。
                  </p>
                  <div class="p-2.5 rounded-lg bg-white/5 border border-white/10 text-[11px] text-slate-300">
                    📅 <strong>2026 最新法條動態備註</strong>：刑法第 271 條殺人罪與第 15 條不作為犯體系於 2026 年維持有效，行為階層之確認、過濾、分類三部曲為國考必考之帝王思維模型。
                  </div>
                </div>
              </div>
            </div>
          </section>

          <!-- 底部單元導航條 -->
          <div class="flex items-center justify-between p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-blue-50/80 via-white to-indigo-50/80 dark:from-[#121827] dark:to-[#162035] border border-blue-200/80 dark:border-blue-900/40 shadow-xs flex-wrap gap-3">
            <button onclick="switchView('part1')" class="px-4 py-2 rounded-xl bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 font-bold text-xs flex items-center gap-1.5 border border-slate-200 dark:border-slate-700 cursor-pointer">
              <span>← 返回第一篇導讀</span>
            </button>
            <div class="flex items-center gap-2 flex-wrap">
              <button onclick="switchView('cover')" class="px-4 py-2 rounded-xl bg-amber-50 dark:bg-amber-950/40 text-amber-800 dark:text-amber-200 hover:bg-amber-100 dark:hover:bg-amber-900/50 font-bold text-xs flex items-center gap-1.5 border border-amber-300 dark:border-amber-700/60 cursor-pointer">
                <span>🏠 書籍首頁</span>
              </button>
              <button onclick="exportMarkdown()" class="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs flex items-center gap-1.5 transition-all shadow-xs cursor-pointer">
                <span>📄 下載第一章完整筆記</span>
              </button>
            </div>
          </div>

        </div> <!-- 閉合 #viewPart1Chapter1 -->
`;
