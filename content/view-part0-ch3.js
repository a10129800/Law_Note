/**
 * view-part0-ch3.js
 * 第零篇 第三章 刑法的法律效果 (教材第 2-25 ～ 2-27 頁)
 * 依據多欄位Note Skill 規範整理：
 * 完整收錄刑罰目的理論（應報、一般預防、特別預防、結合）、雙軌制裁體系要件、三大生動典故、刑罰思考四大步驟原書圖解
 */
window.APP_VIEWS = window.APP_VIEWS || {};
window.APP_VIEWS['viewPart0Chapter3'] = window.APP_VIEWS['viewPart0Ch3'] = window.APP_VIEWS['part0Ch3'] = window.APP_VIEWS['part0Chapter3'] = window.APP_VIEWS['part0-chapter-3'] = `
        <!-- VIEW: 第零篇 第三章 刑法的法律效果 -->
        <div id="viewPart0Chapter3" class="fade-enter hidden space-y-8">
          
          <!-- Breadcrumb & Back -->
          <div class="flex items-center justify-between gap-4 border-b border-slate-100 dark:border-white/[0.06] pb-3">
            <nav class="flex items-center gap-2 text-xs font-medium text-slate-400">
              <button onclick="switchView('part-0')" class="hover:text-blue-500 transition-colors">第零篇 刑法的運作、操作原理與法律效果</button>
              <span>/</span>
              <span class="text-blue-600 dark:text-blue-400 font-bold">第三章 刑法的法律效果</span>
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
              <span>第零篇・第三章</span>
              <span class="px-2 py-0.5 rounded-md bg-blue-50 dark:bg-blue-950/40 text-[11px] border border-blue-200 dark:border-blue-900/50 text-blue-700 dark:text-blue-400">
                教材第 2-25 ～ 2-27 頁
              </span>
              <span class="px-2 py-0.5 rounded-md bg-emerald-50 dark:bg-emerald-950/40 text-[11px] border border-emerald-200 dark:border-emerald-900/50 text-emerald-700 dark:text-emerald-400 font-bold">
                完整收錄
              </span>
            </div>
            <h2 class="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
              第三章 刑法的法律效果
            </h2>
            <p class="text-xs sm:text-sm font-bold text-blue-700 dark:text-blue-300 leading-relaxed">
              刑罰目的理論（應報、一般預防、特別預防、結合）、雙軌制裁體系（TB+R+S vs. TB+R）與刑罰思考四大步驟（法定刑 → 處斷刑 → 宣告刑 → 執行刑）
            </p>
          </div>

          <!-- 第三章 四大子單元旗艦導航卡片 -->
          <div class="p-5 sm:p-6 rounded-3xl border-2 border-indigo-200 dark:border-indigo-800/80 bg-gradient-to-br from-indigo-50/60 via-purple-50/40 to-blue-50/50 dark:from-indigo-950/40 dark:via-purple-950/30 dark:to-blue-950/30 space-y-4 shadow-sm">
            <div class="flex items-center justify-between border-b border-indigo-200/60 dark:border-indigo-800/60 pb-2.5">
              <div class="flex items-center gap-2">
                <span class="text-xl">🧭</span>
                <h3 class="text-sm sm:text-base font-black text-slate-900 dark:text-white">
                  第三章 四大子單元旗艦研讀導航（完整收錄 教材第 2-27 ～ 2-37 頁）
                </h3>
              </div>
              <span class="px-2.5 py-0.5 rounded-full bg-indigo-600 text-white font-mono font-bold text-xs">
                4 SECTIONS COMPLETE
              </span>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
              <button onclick="switchView('part0-ch3-sec1')" class="p-3.5 rounded-2xl bg-white dark:bg-slate-900 border border-indigo-200 dark:border-indigo-800 hover:border-indigo-500 hover:-translate-y-1 transition-all text-left space-y-1.5 shadow-xs cursor-pointer group">
                <span class="px-2 py-0.5 rounded bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 font-mono font-bold text-[10px]">第一節 • P. 2-27～2-29</span>
                <h4 class="font-black text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400">刑罰種類・法定刑</h4>
                <p class="text-[11px] text-slate-500">完全性法條構造、主刑三種、從刑與沒收新制。</p>
              </button>

              <button onclick="switchView('part0-ch3-sec2')" class="p-3.5 rounded-2xl bg-white dark:bg-slate-900 border border-indigo-200 dark:border-indigo-800 hover:border-indigo-500 hover:-translate-y-1 transition-all text-left space-y-1.5 shadow-xs cursor-pointer group">
                <span class="px-2 py-0.5 rounded bg-purple-100 dark:bg-purple-950 text-purple-700 dark:text-purple-300 font-mono font-bold text-[10px]">第二節 • P. 2-29～2-31</span>
                <h4 class="font-black text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400">刑罰調整・處斷刑</h4>
                <p class="text-[11px] text-slate-500">先加後減法則、累犯加重與釋字 775、自首減輕。</p>
              </button>

              <button onclick="switchView('part0-ch3-sec3')" class="p-3.5 rounded-2xl bg-white dark:bg-slate-900 border border-indigo-200 dark:border-indigo-800 hover:border-indigo-500 hover:-translate-y-1 transition-all text-left space-y-1.5 shadow-xs cursor-pointer group">
                <span class="px-2 py-0.5 rounded bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 font-mono font-bold text-[10px]">第三節 • P. 2-31～2-32</span>
                <h4 class="font-black text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400">刑罰量定・宣告刑</h4>
                <p class="text-[11px] text-slate-500">罪刑相當原則、§ 57 量刑十款、§ 59 情堪憫恕酌減。</p>
              </button>

              <button onclick="switchView('part0-ch3-sec4')" class="p-3.5 rounded-2xl bg-white dark:bg-slate-900 border border-indigo-200 dark:border-indigo-800 hover:border-indigo-500 hover:-translate-y-1 transition-all text-left space-y-1.5 shadow-xs cursor-pointer group">
                <span class="px-2 py-0.5 rounded bg-amber-100 dark:bg-amber-950 text-amber-700 dark:text-amber-300 font-mono font-bold text-[10px]">第四節 • P. 2-32～2-37</span>
                <h4 class="font-black text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400">刑罰執行・執行刑</h4>
                <p class="text-[11px] text-slate-500">案例 3-1 四階推導、易刑處分、緩刑、假釋與時效。</p>
              </button>
            </div>
          </div>

          <!-- ==================== 一、導論：為何提前探討刑法的法律效果？ ==================== -->
          <section id="sec-p0ch3-intro" class="space-y-5 pt-2">
            <div class="flex items-center justify-between border-b border-slate-100 dark:border-white/[0.06] pb-2">
              <div class="flex items-center gap-3">
                <span class="w-2 h-6 rounded-full bg-blue-600"></span>
                <h3 class="text-lg sm:text-xl font-black text-slate-900 dark:text-white tracking-tight">
                  一、犯罪成立後的最終考驗：手段與目的之比例關係
                </h3>
              </div>
              <span class="text-[11px] font-mono px-2 py-0.5 rounded bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400 font-bold">
                教材第 2-25 頁
              </span>
            </div>

            <!-- 天藍色概念焦點框 (Focus Box) -->
            <div class="box-legal-navy p-6 sm:p-7 rounded-3xl space-y-4">
              <div class="flex items-center gap-2 text-base font-bold text-[#032034] dark:text-white">
                <span class="text-xl">👶</span>
                <h4>拒絕「玩扮家家酒」式的刑法學習</h4>
              </div>

              <blockquote class="border-l-4 border-[#0284c7] pl-4 py-1 text-xs sm:text-sm text-[#0c4a6e] dark:text-sky-100 leading-relaxed italic space-y-1.5">
                <p>
                  「正式進入刑法學習之前，我們先來談談犯罪成立後的法律效果，如果不能對法律效果有初步理解，那麼大言不慚地說『某某人會成立本罪！』就猶如小孩子在玩扮家家酒般，距離現實非常遙遠，當然也沒辦法體會手段（刑罰）與目的（法益保護原則）之間的比例關係。」
                </p>
              </blockquote>

              <div class="p-4 rounded-2xl bg-white/90 dark:bg-slate-900/80 border border-sky-200 dark:border-sky-800 text-xs text-slate-700 dark:text-slate-300 leading-relaxed space-y-1.5">
                <div class="font-bold text-sky-900 dark:text-sky-200 flex items-center gap-1.5">
                  <span>⚖️</span>
                  <span>核心啟示：比例原則（Verhältnismäßigkeitsgrundsatz）的真實錨定</span>
                </div>
                <p>
                  刑法不是單純玩弄法律構成要件的文字遊戲，發動國家最嚴厲的刑罰權（剝奪生命、自由或財產），必須無時無刻檢視：<strong>採取的手段（刑罰）是否與欲達成的法益保護目的合乎比例？</strong>
                </p>
              </div>
            </div>

            <!-- 作者叮嚀 1: 刑罰理論的學習心態與投報率 -->
            <div id="sec-p0ch3-author-advice-1" class="p-5 sm:p-6 rounded-3xl bg-amber-50/70 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900/50 space-y-3">
              <div class="flex items-center justify-between border-b border-amber-200/60 dark:border-amber-900/50 pb-2">
                <div class="flex items-center gap-2 text-amber-900 dark:text-amber-200 font-bold text-sm">
                  <span class="text-lg">📢</span>
                  <span>【作者叮嚀】為何將「刑罰理論」拉到全書最前頭？</span>
                </div>
                <span class="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-amber-200/60 dark:bg-amber-900 text-amber-800 dark:text-amber-300">
                  作者心聲・投報率分析
                </span>
              </div>
              <p class="text-xs sm:text-sm text-amber-900/90 dark:text-amber-200/90 leading-relaxed">
                這部分涉及到「刑罰理論」，多數書籍都是放在最後一個篇章說明，除了內容較枯燥乏味外，<strong>考試的投資報酬率也極低</strong>。筆者將刑罰理論拉到前頭來，是要讓大家知道<strong>往後的種種討論都是通往這個最終效果</strong>，理解我們究竟要付出什麼代價後，才能更審慎地研究法學問題，期待我們共勉之。<br>
                <span class="text-amber-700 dark:text-amber-400 font-semibold block pt-1">
                  💡（第一次接觸刑法的同學們可以輕鬆愉快地翻閱本章，看不懂也沒關係，只要看過去有個印象就足夠了！）
                </span>
              </p>
            </div>
          </section>

          <!-- ==================== 二、刑罰目的理論之二元面向與三大核心學說 ==================== -->
          <section id="sec-p0ch3-theories" class="space-y-6 pt-2">
            <div class="flex items-center justify-between border-b border-slate-100 dark:border-white/[0.06] pb-2">
              <div class="flex items-center gap-3">
                <span class="w-2 h-6 rounded-full bg-indigo-600"></span>
                <h3 class="text-lg sm:text-xl font-black text-slate-900 dark:text-white tracking-tight">
                  二、刑罰目的理論的兩大面向（教材第 2-25 ～ 2-26 頁）
                </h3>
              </div>
              <span class="text-[11px] font-mono px-2 py-0.5 rounded bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 font-bold">
                法益保護的兩大向度
              </span>
            </div>

            <!-- 🐣 刑罰目的理論小白秒懂專區 -->
            <div class="rounded-2xl border-2 border-amber-300 dark:border-amber-700/80 bg-gradient-to-br from-amber-50/90 via-orange-50/60 to-yellow-50/70 dark:from-amber-950/40 dark:via-orange-950/30 dark:to-yellow-950/30 p-5 space-y-4 shadow-sm">
              <div class="flex items-center gap-2.5 border-b border-amber-200 dark:border-amber-800/60 pb-3">
                <span class="text-2xl animate-bounce">🐣</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-amber-950 dark:text-amber-200">
                    【小白秒懂專區】刑罰目的理論：國家為什麼要把犯人關起來？
                  </h4>
                  <p class="text-xs text-amber-800 dark:text-amber-300 font-medium">
                    三大白話派別：以牙還牙（應報）、殺雞儆猴（一般預防）、愛的教育（特別預防）！
                  </p>
                </div>
              </div>

              <div class="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs sm:text-sm">
                <div class="p-3.5 rounded-xl bg-white/95 dark:bg-slate-900/90 border border-amber-200 dark:border-amber-800/60 space-y-1.5 shadow-xs">
                  <span class="text-rose-700 dark:text-rose-400 font-black block flex items-center gap-1.5">
                    <span class="w-5 h-5 rounded-full bg-rose-100 dark:bg-rose-950 text-rose-800 dark:text-rose-200 flex items-center justify-center text-xs font-bold">1</span>
                    <span>應報理論（看著過去）</span>
                  </span>
                  <p class="text-xs text-slate-700 dark:text-slate-200 leading-relaxed font-normal">
                    <strong>「善有善報、惡有惡報！」</strong> 你偷多少錢、打斷人家幾根骨頭，國家就給你對等的痛苦（以眼還眼）。最大優點是<strong>嚴格限制處罰上限</strong>，不能因為想嚇阻別人就判太重！
                  </p>
                </div>

                <div class="p-3.5 rounded-xl bg-white/95 dark:bg-slate-900/90 border border-amber-200 dark:border-amber-800/60 space-y-1.5 shadow-xs">
                  <span class="text-blue-700 dark:text-blue-400 font-black block flex items-center gap-1.5">
                    <span class="w-5 h-5 rounded-full bg-blue-100 dark:bg-blue-950 text-blue-800 dark:text-blue-200 flex items-center justify-center text-xs font-bold">2</span>
                    <span>一般預防（威嚇大眾）</span>
                  </span>
                  <p class="text-xs text-slate-700 dark:text-slate-200 leading-relaxed font-normal">
                    <strong>「殺雞儆猴給猴子看！」</strong> 處罰這隻雞，不是只針對雞，而是要讓台下圍觀的全國老百姓心生畏懼，不敢去模仿犯罪。缺點是容易走向「越判越殘忍」的重刑化泥淖。
                  </p>
                </div>

                <div class="p-3.5 rounded-xl bg-white/95 dark:bg-slate-900/90 border border-amber-200 dark:border-amber-800/60 space-y-1.5 shadow-xs">
                  <span class="text-indigo-700 dark:text-indigo-400 font-black block flex items-center gap-1.5">
                    <span class="w-5 h-5 rounded-full bg-indigo-100 dark:bg-indigo-950 text-indigo-800 dark:text-indigo-200 flex items-center justify-center text-xs font-bold">3</span>
                    <span>特別預防（矯治犯人）</span>
                  </span>
                  <p class="text-xs text-slate-700 dark:text-slate-200 leading-relaxed font-normal">
                    <strong>「治病救人、重新做人！」</strong> 把犯人送去職訓、戒毒、心理輔導，除去犯罪因子。缺點是如果犯人一直學不乖，照這理論豈不是要<strong>無限期關到死為止</strong>？
                  </p>
                </div>
              </div>
            </div>

            <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              刑罰是以<strong>法益保護作為終極目標</strong>，不過對於這個目標卻有不同的理解方向（學理上稱為「<strong>刑罰目的理論</strong>」），大致上有兩個基本面向：
            </p>

            <!-- 面向 1 vs 面向 2 雙核心網格 -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
              
              <!-- 1. 應報理論卡片 -->
              <div class="p-6 rounded-3xl bg-slate-50 dark:bg-slate-900/60 border-2 border-rose-500/40 space-y-4 flex flex-col justify-between">
                <div class="space-y-3">
                  <div class="flex items-center justify-between">
                    <span class="px-2.5 py-0.5 rounded-full bg-rose-100 dark:bg-rose-950 text-rose-800 dark:text-rose-300 font-mono font-bold text-[11px]">
                      懲罰過去的侵害
                    </span>
                    <span class="text-xs font-bold text-rose-600 dark:text-rose-400 font-mono">RETRIBUTION</span>
                  </div>

                  <h4 class="text-base sm:text-lg font-black text-slate-900 dark:text-white flex items-center gap-2">
                    <span>⚔️</span>
                    <span>一、應報理論（絕對理論）</span>
                  </h4>

                  <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    源自於原始社會中「<strong>以眼還眼、以牙還牙</strong>」的同態復仇思想。近代應報理論認為刑事制裁乃是<strong>公正地應報犯罪</strong>，藉以撫平犯罪所引起的損害與社會創傷。
                  </p>
                </div>

                <div class="space-y-2 pt-3 border-t border-rose-200/50 dark:border-rose-900/40 text-xs">
                  <div class="p-2.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300">
                    <strong>✅ 優點：</strong>設定國家發動刑罰權的嚴格界限，<strong>刑罰絕對不能超過行為人所製造的危害</strong>（罪刑相當）。
                  </div>
                  <div class="p-2.5 rounded-xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-800 text-rose-800 dark:text-rose-300">
                    <strong>❌ 缺點：</strong>無助於犯人受刑後脫離犯罪、重返社會，單純受苦反而更增添日後之再犯率。
                  </div>
                </div>
              </div>

              <!-- 2. 預防理論卡片 -->
              <div class="p-6 rounded-3xl bg-slate-50 dark:bg-slate-900/60 border-2 border-blue-500/40 space-y-4 flex flex-col justify-between">
                <div class="space-y-3">
                  <div class="flex items-center justify-between">
                    <span class="px-2.5 py-0.5 rounded-full bg-blue-100 dark:bg-blue-950 text-blue-800 dark:text-blue-300 font-mono font-bold text-[11px]">
                      預防未來的侵害
                    </span>
                    <span class="text-xs font-bold text-blue-600 dark:text-blue-400 font-mono">PREVENTION</span>
                  </div>

                  <h4 class="text-base sm:text-lg font-black text-slate-900 dark:text-white flex items-center gap-2">
                    <span>🛡️</span>
                    <span>二、預防理論（相對理論）</span>
                  </h4>

                  <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    認為刑罰的存在應該是<strong>針對尚未發生的犯罪</strong>，亦即「預防犯罪行為的再次發生」。依據訴求對象不同，再細分為兩大流派：
                  </p>
                </div>

                <!-- 內部一般 vs 特別次網格 -->
                <div class="space-y-2 pt-3 border-t border-blue-200/50 dark:border-blue-900/40 text-xs">
                  <div class="p-3 rounded-2xl bg-white dark:bg-slate-800 border border-blue-200 dark:border-blue-700/60 space-y-1">
                    <div class="font-bold text-blue-700 dark:text-blue-300 flex items-center gap-1.5">
                      <span>👥 (一) 一般預防理論（General Prevention）</span>
                    </div>
                    <p class="text-[11.5px] text-slate-600 dark:text-slate-300 leading-relaxed">
                      藉刑罰痛苦性<strong>威嚇社會一般大眾</strong>以嚇阻犯罪。優點是維持大眾秩序；缺點是背離犯罪學（犯人多自認不會被抓），且易產生「<strong>刑罰越殘酷越好</strong>」之偏差。
                    </p>
                  </div>

                  <div class="p-3 rounded-2xl bg-white dark:bg-slate-800 border border-indigo-200 dark:border-indigo-700/60 space-y-1">
                    <div class="font-bold text-indigo-700 dark:text-indigo-300 flex items-center gap-1.5">
                      <span>👤 (二) 特別預防理論（Special Prevention）</span>
                    </div>
                    <p class="text-[11.5px] text-slate-600 dark:text-slate-300 leading-relaxed">
                      目的在<strong>矯治犯罪人本身</strong>、除去犯罪因子，使其能回歸社會。優點是有助再社會化；缺點是若有再犯風險，貫徹本說將得出<strong>無限期關押處罰</strong>的極端結論。
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </section>

          <!-- ==================== 三、現代通說：結合理論與雙軌制裁體系 ==================== -->
          <section id="sec-p0ch3-combination" class="space-y-6 pt-2">
            <div class="flex items-center justify-between border-b border-slate-100 dark:border-white/[0.06] pb-2">
              <div class="flex items-center gap-3">
                <span class="w-2 h-6 rounded-full bg-emerald-600"></span>
                <h3 class="text-lg sm:text-xl font-black text-slate-900 dark:text-white tracking-tight">
                  三、現代通說：結合理論與「刑罰／保安處分」雙軌體系
                </h3>
              </div>
              <span class="text-[11px] font-mono px-2 py-0.5 rounded bg-emerald-50 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 font-bold">
                教材第 2-26 頁
              </span>
            </div>

            <!-- 結合理論展開說明卡 -->
            <div class="p-6 sm:p-7 rounded-3xl bg-gradient-to-br from-emerald-50/60 via-teal-50/40 to-blue-50/40 dark:from-emerald-950/30 dark:via-teal-950/20 dark:to-blue-950/20 border-2 border-emerald-200 dark:border-emerald-800/80 border-l-[8px] border-l-emerald-600 shadow-md space-y-5">
              <div class="flex items-center justify-between border-b border-emerald-200/60 dark:border-emerald-800/60 pb-3">
                <div class="flex items-center gap-2">
                  <span class="text-xl">🧬</span>
                  <div>
                    <span class="text-[11px] font-mono font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider block">
                      COMBINATION THEORY & DUAL SYSTEM
                    </span>
                    <h4 class="text-base sm:text-lg font-black text-slate-900 dark:text-white">
                      結合理論（Vereinigungstheorie / 折衷理論）
                    </h4>
                  </div>
                </div>
                <span class="px-2.5 py-1 rounded-full bg-emerald-600 text-white font-mono font-bold text-xs shadow-xs">
                  我國刑法通說與實務立場
                </span>
              </div>

              <!-- 🐣 雙軌制裁體系小白秒懂專區 -->
              <div class="rounded-2xl border-2 border-amber-300 dark:border-amber-700/80 bg-gradient-to-br from-amber-50/90 via-orange-50/60 to-yellow-50/70 dark:from-amber-950/40 dark:via-orange-950/30 dark:to-yellow-950/30 p-5 space-y-4 shadow-sm">
                <div class="flex items-center gap-2.5 border-b border-amber-200 dark:border-amber-800/60 pb-3">
                  <span class="text-2xl animate-bounce">🐣</span>
                  <div>
                    <h4 class="text-sm sm:text-base font-black text-amber-950 dark:text-amber-200">
                      【小白秒懂專區】雙軌制裁體系：刑罰 vs 保安處分差在哪？
                    </h4>
                    <p class="text-xs text-amber-800 dark:text-amber-300 font-medium">
                      發動門檻大不同：刑罰要過三關（TB+R+S），保安處分只要壞事成立（TB+R）就能啟動！
                    </p>
                  </div>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs sm:text-sm">
                  <div class="p-3.5 rounded-xl bg-white/95 dark:bg-slate-900/90 border border-amber-200 dark:border-amber-800/60 space-y-1.5 shadow-xs">
                    <span class="text-indigo-700 dark:text-indigo-400 font-black block flex items-center gap-1.5">
                      <span class="w-5 h-5 rounded-full bg-indigo-100 dark:bg-indigo-950 text-indigo-800 dark:text-indigo-200 flex items-center justify-center text-xs font-bold">1</span>
                      <span>刑罰（針對罪人發動懲戒）</span>
                    </span>
                    <p class="text-xs text-slate-700 dark:text-slate-200 leading-relaxed font-normal">
                      <strong>必須滿足三階層（TB + R + S）！</strong> 只有具備構成要件、違法性且「有罪責（有責任能力、懂事）」的人，才能課予刑罰。如果精神崩潰無法辨識行為（§ 19 Ⅰ），就不能判刑！
                    </p>
                  </div>

                  <div class="p-3.5 rounded-xl bg-white/95 dark:bg-slate-900/90 border border-amber-200 dark:border-amber-800/60 space-y-1.5 shadow-xs">
                    <span class="text-emerald-700 dark:text-emerald-400 font-black block flex items-center gap-1.5">
                      <span class="w-5 h-5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-200 flex items-center justify-center text-xs font-bold">2</span>
                      <span>保安處分（針對危險進行防衛）</span>
                    </span>
                    <p class="text-xs text-slate-700 dark:text-slate-200 leading-relaxed font-normal">
                      <strong>只要具備不法（TB + R）即可！</strong> 保安處分不是在「懲罰過去」，而是在「防禦未來危害」。就算精神障礙不罰，但因有再傷人危險，法院仍可判入相當處所<strong>施以監護（強制就醫）</strong>！
                    </p>
                  </div>

                  <div class="p-3.5 rounded-xl bg-white/95 dark:bg-slate-900/90 border border-amber-200 dark:border-amber-800/60 space-y-1.5 shadow-xs">
                    <span class="text-amber-700 dark:text-amber-300 font-black block flex items-center gap-1.5">
                      <span class="w-5 h-5 rounded-full bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-200 flex items-center justify-center text-xs font-bold">3</span>
                      <span>兩軌可以雙管齊下</span>
                    </span>
                    <p class="text-xs text-slate-700 dark:text-slate-200 leading-relaxed font-normal">
                      刑罰與保安處分不是「二選一」！一個人吸毒犯罪，法院可以判他坐牢（刑罰），同時宣告他在刑前或刑後送戒癮機構（保安處分・禁戒），兩者<strong>完全可以並行適用</strong>！
                    </p>
                  </div>
                </div>
              </div>

              <p class="text-xs sm:text-sm text-slate-700 dark:text-slate-200 leading-relaxed">
                有鑑於單一理論均有無法突破的極限，現代學說多採取「<strong>結合理論</strong>」，試圖結合各說之優點並補正其缺失：
              </p>

              <!-- 三大理論合體公式圖解 -->
              <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
                <div class="p-3.5 rounded-2xl bg-white/90 dark:bg-slate-900/80 border border-rose-200 dark:border-rose-900/60 space-y-1">
                  <span class="text-[11px] font-mono font-bold text-rose-600 dark:text-rose-400 block">① 劃定上限（取自應報）</span>
                  <div class="text-xs font-bold text-slate-900 dark:text-white">以製造危害為上限</div>
                  <p class="text-[11px] text-slate-500">刑罰絕不能超越行為人的不法罪責程度。</p>
                </div>

                <div class="p-3.5 rounded-2xl bg-white/90 dark:bg-slate-900/80 border border-blue-200 dark:border-blue-900/60 space-y-1">
                  <span class="text-[11px] font-mono font-bold text-blue-600 dark:text-blue-400 block">② 社會威嚇（取自一般預防）</span>
                  <div class="text-xs font-bold text-slate-900 dark:text-white">維護法秩序威信</div>
                  <p class="text-[11px] text-slate-500">在上限範圍內，適度考量防範大眾仿效效應。</p>
                </div>

                <div class="p-3.5 rounded-2xl bg-white/90 dark:bg-slate-900/80 border border-indigo-200 dark:border-indigo-900/60 space-y-1">
                  <span class="text-[11px] font-mono font-bold text-indigo-600 dark:text-indigo-400 block">③ 再社會化（取自特別預防）</span>
                  <div class="text-xs font-bold text-slate-900 dark:text-white">矯治受刑人犯罪因子</div>
                  <p class="text-[11px] text-slate-500">使其出獄後能夠重新融入社會、不再犯罪。</p>
                </div>
              </div>
            </div>

            <!-- 刑罰 vs. 保安處分 雙軌制裁體系深度對比卡 -->
            <div class="p-6 rounded-3xl bg-slate-50 dark:bg-slate-900/60 border-2 border-indigo-500/40 space-y-4">
              <div class="flex items-center gap-2">
                <span class="text-xl">🛤️</span>
                <h4 class="text-base sm:text-lg font-black text-slate-900 dark:text-white">
                  我國「刑罰」與「保安處分」之雙軌制裁體系
                </h4>
              </div>

              <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                我國刑法採取結合理論，因而發展出「<strong>刑罰</strong>」與「<strong>保安處分</strong>」之雙軌制裁體系。兩者在發動要件與本質目的上有著重大且關鍵的界線：
              </p>

              <div class="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <!-- 刑罰 -->
                <div class="p-4 rounded-2xl bg-white dark:bg-slate-800 border-2 border-indigo-500/50 space-y-2">
                  <div class="flex items-center justify-between">
                    <span class="text-xs font-bold text-indigo-700 dark:text-indigo-300 font-mono">TRACK 1 • 刑罰</span>
                    <span class="px-2 py-0.5 rounded bg-indigo-100 dark:bg-indigo-950 text-indigo-800 dark:text-indigo-300 font-mono text-[10px] font-bold">
                      追究過去責任
                    </span>
                  </div>
                  <div class="text-sm font-bold text-slate-900 dark:text-white">必須成立犯罪（TB + R + S）</div>
                  <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    必須具備<strong>構成要件該當性（TB）+ 違法性（R）+ 罪責（S）</strong>，三階層完全成立始得發動。無罪責即無刑罰（罪責原則）。
                  </p>
                </div>

                <!-- 保安處分 -->
                <div class="p-4 rounded-2xl bg-white dark:bg-slate-800 border-2 border-emerald-500/50 space-y-2">
                  <div class="flex items-center justify-between">
                    <span class="text-xs font-bold text-emerald-700 dark:text-emerald-300 font-mono">TRACK 2 • 保安處分</span>
                    <span class="px-2 py-0.5 rounded bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 font-mono text-[10px] font-bold">
                      著眼未來防衛
                    </span>
                  </div>
                  <div class="text-sm font-bold text-slate-900 dark:text-white">具備不法（TB + R）即可發動！</div>
                  <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    <strong>只要具備不法（TB + R）便可發動</strong>！因為保安處分<strong>不在制裁，而是在於矯治與防衛社會</strong>（例如精神障礙者 § 19 Ⅰ 阻卻罪責不罰，但仍得依 § 87 施以監護處分）。
                  </p>
                </div>
              </div>

              <div class="p-3.5 rounded-xl bg-indigo-50/80 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-800 text-xs text-indigo-900 dark:text-indigo-200 flex items-center justify-between">
                <span>⚡ <strong>並行制度：</strong>刑罰與保安處分並非互斥關係，現代刑法下<strong>二者當然可以並行適用</strong>（如執行徒刑後併受禁戒或強制治療）。</span>
              </div>
            </div>
          </section>

          <!-- ==================== 四、作者叮嚀：三大刑罰理論歷史生動典故 ==================== -->
          <section id="sec-p0ch3-author-stories" class="space-y-6 pt-2">
            <div class="flex items-center justify-between border-b border-slate-100 dark:border-white/[0.06] pb-2">
              <div class="flex items-center gap-3">
                <span class="w-2 h-6 rounded-full bg-amber-500"></span>
                <h3 class="text-lg sm:text-xl font-black text-slate-900 dark:text-white tracking-tight">
                  四、作者叮嚀：三大刑罰理論的歷史與影劇生動典故
                </h3>
              </div>
              <span class="text-[11px] font-mono px-2 py-0.5 rounded bg-amber-50 dark:bg-amber-950 text-amber-600 dark:text-amber-400 font-bold">
                教材第 2-26 頁
              </span>
            </div>

            <!-- 三大生動歷史故事卡 -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
              
              <!-- 典故 1: 漢摩拉比法典 -->
              <div class="p-5 rounded-3xl bg-white dark:bg-slate-900 border-2 border-rose-300 dark:border-rose-900/60 shadow-sm space-y-3 flex flex-col justify-between">
                <div class="space-y-2.5">
                  <div class="flex items-center justify-between">
                    <span class="text-xs font-mono font-bold text-rose-600 dark:text-rose-400 flex items-center gap-1">
                      <span>📜</span>
                      <span>應報理論典範</span>
                    </span>
                    <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-rose-50 dark:bg-rose-950 text-rose-600 dark:text-rose-400 font-bold">
                      古巴比倫
                    </span>
                  </div>
                  <h4 class="text-sm sm:text-base font-bold text-slate-900 dark:text-white">
                    漢摩拉比法典（Code of Hammurabi）
                  </h4>
                  <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    巴比倫人所遵從的漢摩拉比法典，就是通篇充滿應報思想的最佳典範（以牙還牙、以眼還眼）。
                  </p>
                  <div class="p-3 rounded-2xl bg-rose-50/60 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-900 text-xs text-rose-900 dark:text-rose-200 leading-relaxed">
                    <strong>💡 超先進立法：</strong>不過法典<strong>第 23 條規定了國家賠償的無過失責任</strong>（若抓不到強盜犯，地方長官必須如實賠償被害人損失），在古代實屬驚人的先進立法！
                  </div>
                </div>
              </div>

              <!-- 典故 2: 孫武練娘子軍 -->
              <div class="p-5 rounded-3xl bg-white dark:bg-slate-900 border-2 border-blue-300 dark:border-blue-900/60 shadow-sm space-y-3 flex flex-col justify-between">
                <div class="space-y-2.5">
                  <div class="flex items-center justify-between">
                    <span class="text-xs font-mono font-bold text-blue-600 dark:text-blue-400 flex items-center gap-1">
                      <span>⚔️</span>
                      <span>一般預防典範</span>
                    </span>
                    <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400 font-bold">
                      春秋戰國
                    </span>
                  </div>
                  <h4 class="text-sm sm:text-base font-bold text-slate-900 dark:text-white">
                    兵聖孫武斬愛妾練娘子軍
                  </h4>
                  <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    兵聖孫武為吳王闔閭訓練娘子軍，嬪妃們嘻笑怠慢，孫武當場<strong>將帶頭嘻笑的愛妾隊長斬首立威</strong>。
                  </p>
                  <div class="p-3 rounded-2xl bg-blue-50/60 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-900 text-xs text-blue-900 dark:text-blue-200 leading-relaxed">
                    <strong>⚠️ 殺雞儆猴的代價：</strong>使眾娘子們嚇得肝膽俱裂而莫敢不從，雖然立馬見效（威嚇嚇阻），但「實在太過分了（竟然斬正妹……）」，正是刑罰過度殘酷之寫照。
                  </div>
                </div>
              </div>

              <!-- 典故 3: 開膛手傑克與腦前葉切開術 -->
              <div class="p-5 rounded-3xl bg-white dark:bg-slate-900 border-2 border-indigo-300 dark:border-indigo-900/60 shadow-sm space-y-3 flex flex-col justify-between">
                <div class="space-y-2.5">
                  <div class="flex items-center justify-between">
                    <span class="text-xs font-mono font-bold text-indigo-600 dark:text-indigo-400 flex items-center gap-1">
                      <span>🧠</span>
                      <span>特別預防典範</span>
                    </span>
                    <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 font-bold">
                      近代醫療矯治
                    </span>
                  </div>
                  <h4 class="text-sm sm:text-base font-bold text-slate-900 dark:text-white">
                    電影《開膛手傑克》腦前葉切開術
                  </h4>
                  <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    兇手殺了這麼多人，最後卻沒有受到刑罰處罰，而是送往醫院進行所謂的「<strong>腦前葉切開術（Lobotomy）</strong>」。
                  </p>
                  <div class="p-3 rounded-2xl bg-indigo-50/60 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-900 text-xs text-indigo-900 dark:text-indigo-200 leading-relaxed">
                    <strong>🏥 現代保安處分前身：</strong>這在當時被視為「對犯罪者的醫療治療」，以除去犯罪因子，概念正相當於現代的<strong>保安處分</strong>（非制裁，而重矯治！）。
                  </div>
                </div>
              </div>

            </div>
          </section>

          <!-- ==================== 五、原書架構圖解：刑罰理論的思考步驟 ==================== -->
          <section id="sec-p0ch3-steps-diagram" class="space-y-6 pt-2">
            <div class="flex items-center justify-between border-b border-slate-100 dark:border-white/[0.06] pb-2">
              <div class="flex items-center gap-3">
                <span class="w-2 h-6 rounded-full bg-purple-600"></span>
                <h3 class="text-lg sm:text-xl font-black text-slate-900 dark:text-white tracking-tight">
                  五、原書架構圖解：刑罰理論的思考四大步驟
                </h3>
              </div>
              <span class="text-[11px] font-mono px-2 py-0.5 rounded bg-purple-50 dark:bg-purple-950 text-purple-600 dark:text-purple-400 font-bold">
                教材第 2-27 頁 原書圖解
              </span>
            </div>

            <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              刑罰的產生過程可拆解成四大步驟，分別是「<strong>找尋基本範圍</strong>」、「<strong>調整處斷範圍</strong>」、「<strong>範圍內選定刑罰</strong>」以及「<strong>執行刑罰</strong>」，這四大步驟同時與<strong>法定刑、處斷刑、宣告刑與執行刑</strong>息息相關：
            </p>

            <!-- 🐣 刑罰思考四大步驟小白秒懂專區 -->
            <div class="rounded-2xl border-2 border-amber-300 dark:border-amber-700/80 bg-gradient-to-br from-amber-50/90 via-orange-50/60 to-yellow-50/70 dark:from-amber-950/40 dark:via-orange-950/30 dark:to-yellow-950/30 p-5 space-y-4 shadow-sm">
              <div class="flex items-center gap-2.5 border-b border-amber-200 dark:border-amber-800/60 pb-3">
                <span class="text-2xl animate-bounce">🐣</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-amber-950 dark:text-amber-200">
                    【小白秒懂專區】刑罰思考四大步驟：法官怎麼決定把你關幾年？
                  </h4>
                  <p class="text-xs text-amber-800 dark:text-amber-300 font-medium">
                    超生動大賣場購物比喻：標籤定價 ➔ 折扣加價 ➔ 結帳發票 ➔ 掏錢付款！
                  </p>
                </div>
              </div>

              <div class="grid grid-cols-1 md:grid-cols-4 gap-3 text-xs sm:text-sm">
                <div class="p-3.5 rounded-xl bg-white/95 dark:bg-slate-900/90 border border-amber-200 dark:border-amber-800/60 space-y-1.5 shadow-xs">
                  <span class="text-blue-700 dark:text-blue-400 font-black block flex items-center gap-1.5">
                    <span class="w-5 h-5 rounded-full bg-blue-100 dark:bg-blue-950 text-blue-800 dark:text-blue-200 flex items-center justify-center text-xs font-bold">1</span>
                    <span>法定刑（架上原價）</span>
                  </span>
                  <p class="text-xs text-slate-700 dark:text-slate-200 leading-relaxed font-normal">
                    <strong>法律條文寫的死範圍！</strong> 就像大賣場商品標籤：「殺人者，處死刑、無期徒刑或十年以上有期徒刑」。這是所有思考的原始起點。
                  </p>
                </div>

                <div class="p-3.5 rounded-xl bg-white/95 dark:bg-slate-900/90 border border-amber-200 dark:border-amber-800/60 space-y-1.5 shadow-xs">
                  <span class="text-purple-700 dark:text-purple-400 font-black block flex items-center gap-1.5">
                    <span class="w-5 h-5 rounded-full bg-purple-100 dark:bg-purple-950 text-purple-800 dark:text-purple-200 flex items-center justify-center text-xs font-bold">2</span>
                    <span>處斷刑（折扣或加價）</span>
                  </span>
                  <p class="text-xs text-slate-700 dark:text-slate-200 leading-relaxed font-normal">
                    <strong>加減刑後的全新範圍！</strong> 如果是累犯要加價（加重本刑至 1/2），如果有自首要打折（得減輕其刑）。加加減減後算出一個新的「浮動區間」。
                  </p>
                </div>

                <div class="p-3.5 rounded-xl bg-white/95 dark:bg-slate-900/90 border border-amber-200 dark:border-amber-800/60 space-y-1.5 shadow-xs">
                  <span class="text-emerald-700 dark:text-emerald-400 font-black block flex items-center gap-1.5">
                    <span class="w-5 h-5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-200 flex items-center justify-center text-xs font-bold">3</span>
                    <span>宣告刑（結帳發票定案）</span>
                  </span>
                  <p class="text-xs text-slate-700 dark:text-slate-200 leading-relaxed font-normal">
                    <strong>法官挑選出具體數字！</strong> 法官在處斷刑範圍內，依 § 57 審酌犯人動機、態度，敲下法槌：「判處有期徒刑 12 年」！這就是印在判決主文上的宣告刑。
                  </p>
                </div>

                <div class="p-3.5 rounded-xl bg-white/95 dark:bg-slate-900/90 border border-amber-200 dark:border-amber-800/60 space-y-1.5 shadow-xs">
                  <span class="text-amber-700 dark:text-amber-300 font-black block flex items-center gap-1.5">
                    <span class="w-5 h-5 rounded-full bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-200 flex items-center justify-center text-xs font-bold">4</span>
                    <span>執行刑（真正從錢包掏錢）</span>
                  </span>
                  <p class="text-xs text-slate-700 dark:text-slate-200 leading-relaxed font-normal">
                    <strong>最後實際怎麼執行！</strong> 如果犯好幾條罪（數罪併罰定執行刑），或者能不能易科罰金一天一千塊、能不能宣告緩刑不必進去關。
                  </p>
                </div>
              </div>
            </div>

            <!-- 刑罰四大步驟流程展示卡 (原書圖說復刻) -->
            <div class="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#111726] border-2 border-purple-200 dark:border-purple-800/80 border-l-[8px] border-l-purple-600 shadow-md space-y-6 zoomable-diagram" data-zoom-title="刑罰理論的思考步驟架構圖" data-zoom-page="教材第 2-27 頁">
              <div class="flex items-center justify-between border-b border-purple-100 dark:border-purple-900/50 pb-3">
                <div class="flex items-center gap-2">
                  <span class="text-xl">📊</span>
                  <h4 class="text-base sm:text-lg font-black text-slate-900 dark:text-white">
                    刑罰理論的思考步驟（原書架構圖）
                  </h4>
                </div>
                <span class="text-xs font-mono font-bold text-purple-600 dark:text-purple-400">
                  量定刑罰 ➔ 執行刑罰
                </span>
              </div>

              <!-- 兩大核心階段容器：量定刑罰 vs 執行刑罰 -->
              <div class="grid grid-cols-1 lg:grid-cols-4 gap-4">
                
                <!-- 階段 1: 量定刑罰（佔 3 欄） -->
                <div class="lg:col-span-3 p-5 rounded-2xl bg-purple-50/50 dark:bg-purple-950/20 border-2 border-purple-300 dark:border-purple-800 space-y-4">
                  <div class="flex items-center justify-between border-b border-purple-200 dark:border-purple-800/80 pb-2">
                    <span class="text-xs font-bold text-purple-800 dark:text-purple-300 font-mono flex items-center gap-1.5">
                      <span class="w-2.5 h-2.5 rounded-full bg-purple-600"></span>
                      <span>第一大階段：量定刑罰（司法審判核心）</span>
                    </span>
                    <span class="text-[11px] font-mono text-purple-500 font-bold">步驟 1 ～ 3</span>
                  </div>

                  <!-- 確定範圍 vs 選定刑罰 -->
                  <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    
                    <!-- 子容器 A: 確定範圍 (2 欄) -->
                    <div class="sm:col-span-2 p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-purple-200 dark:border-purple-800/60 space-y-2.5">
                      <div class="text-xs font-bold text-slate-800 dark:text-slate-200 flex items-center justify-between">
                        <span>【確定範圍】</span>
                        <span class="text-[10px] text-purple-600 font-mono">STEP 1 ➔ 2</span>
                      </div>
                      
                      <div class="grid grid-cols-2 gap-2">
                        <!-- 步驟 1: 基本範圍 -->
                        <div class="p-2.5 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-center space-y-1">
                          <span class="text-[10px] font-mono text-slate-400 block font-bold">步驟 ① 找尋基本範圍</span>
                          <span class="text-xs font-bold text-purple-700 dark:text-purple-300 block">法定刑</span>
                          <span class="text-[10px] text-slate-500 block">分則條文法定範圍（如 10年以上有期徒刑）</span>
                        </div>

                        <!-- 步驟 2: 調整範圍 -->
                        <div class="p-2.5 rounded-lg bg-purple-100/60 dark:bg-purple-900/40 border border-purple-300 dark:border-purple-700 text-center space-y-1">
                          <span class="text-[10px] font-mono text-purple-600 dark:text-purple-400 block font-bold">步驟 ② 調整處斷範圍</span>
                          <span class="text-xs font-bold text-purple-700 dark:text-purple-300 block">處斷刑</span>
                          <span class="text-[10px] text-slate-500 block">累犯加重、自首減輕後之新刑度範圍</span>
                        </div>
                      </div>
                    </div>

                    <!-- 子容器 B: 選定刑罰 (1 欄) -->
                    <div class="p-3.5 rounded-xl bg-purple-600 text-white flex flex-col justify-between space-y-2 text-center shadow-md shadow-purple-600/25">
                      <span class="text-[10px] font-mono text-purple-200 font-bold block">步驟 ③ 範圍內選定刑罰</span>
                      <div class="space-y-0.5">
                        <span class="text-sm font-black block">宣告刑</span>
                        <span class="text-[10px] text-purple-200 block">法官於處斷刑範圍內量定之確定點（如判處有期徒刑 12 年）</span>
                      </div>
                      <span class="text-[9px] font-mono bg-purple-700/80 py-0.5 px-1.5 rounded">判決主文宣告</span>
                    </div>

                  </div>
                </div>

                <!-- 階段 2: 執行刑罰（佔 1 欄） -->
                <div class="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border-2 border-slate-300 dark:border-slate-700 flex flex-col justify-between space-y-3 text-center">
                  <div class="border-b border-slate-200 dark:border-slate-800 pb-2">
                    <span class="text-xs font-bold text-slate-700 dark:text-slate-300 font-mono flex items-center justify-center gap-1">
                      <span class="w-2.5 h-2.5 rounded-full bg-slate-500"></span>
                      <span>第二大階段：執行</span>
                    </span>
                    <span class="text-[10px] font-mono text-slate-400 block pt-0.5 font-bold">步驟 ④</span>
                  </div>

                  <div class="space-y-1">
                    <span class="text-[11px] font-mono text-slate-400 block">步驟 ④ 執行刑罰</span>
                    <span class="text-base font-black text-slate-900 dark:text-white block">執行刑</span>
                    <p class="text-[10.5px] text-slate-500 leading-tight">
                      數罪併罰定應執行刑（§ 51）、易科罰金、緩刑或入監實質服刑。
                    </p>
                  </div>

                  <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold">
                    檢察官指揮執行
                  </span>
                </div>

              </div>

              <!-- 四大概念精華比對表 -->
              <div class="grid grid-cols-1 sm:grid-cols-4 gap-2 pt-2 text-xs">
                <div class="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                  <span class="font-bold text-slate-900 dark:text-white block">1. 法定刑</span>
                  <span class="text-slate-500 text-[11px]">立法院立法明定於刑法各分則條文之刑罰抽象範圍。</span>
                </div>
                <div class="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                  <span class="font-bold text-slate-900 dark:text-white block">2. 處斷刑</span>
                  <span class="text-slate-500 text-[11px]">依總則法定加重（如累犯）或減輕事由（如未遂、自首）調整後之範圍。</span>
                </div>
                <div class="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                  <span class="font-bold text-slate-900 dark:text-white block">3. 宣告刑</span>
                  <span class="text-slate-500 text-[11px]">法官依 § 57 量刑基準，在處斷刑內挑選出的一個具體刑期並於主文宣告。</span>
                </div>
                <div class="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                  <span class="font-bold text-slate-900 dark:text-white block">4. 執行刑</span>
                  <span class="text-slate-500 text-[11px]">數罪宣告刑合併定執行刑，或宣告刑最後移送檢察官具體落實執行的狀態。</span>
                </div>
              </div>
            </div>
          </section>

          <!-- ==================== Chapter Bottom Pagination: 第三章底部雙向導航 ==================== -->
          <div class="pt-8 border-t border-slate-200 dark:border-white/[0.08] grid grid-cols-1 sm:grid-cols-2 gap-4">
            <button onclick="switchView('part0-ch2-sec2')" class="group p-4 rounded-2xl border border-slate-200 dark:border-white/[0.08] hover:border-indigo-500/40 bg-white dark:bg-[#111726] text-left transition-all hover:-translate-y-0.5 shadow-sm hover:shadow-md flex items-center gap-3 cursor-pointer">
              <div class="w-9 h-9 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 group-hover:bg-indigo-50 dark:group-hover:bg-indigo-950 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 flex items-center justify-center text-sm font-bold shrink-0 transition-colors">
                ←
              </div>
              <div class="min-w-0">
                <span class="text-[11px] text-slate-400 font-mono block">上一單元 (教材第 2-14 ～ 2-24 頁)</span>
                <span class="text-xs font-bold text-slate-800 dark:text-slate-200 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors truncate block">
                  第二章 第二節 刑法之解釋方法
                </span>
              </div>
            </button>

            <button onclick="switchView('part0-ch3-sec1')" class="group p-4 rounded-2xl border border-indigo-500/40 hover:border-indigo-500 bg-gradient-to-br from-indigo-50/50 to-blue-50/30 dark:from-indigo-950/30 dark:to-blue-950/20 text-right transition-all hover:-translate-y-0.5 shadow-sm hover:shadow-md flex items-center justify-between gap-3 cursor-pointer">
              <div class="min-w-0 text-left">
                <span class="text-[11px] text-indigo-700 dark:text-indigo-400 font-mono block font-bold">下一單元・進入第一節</span>
                <span class="text-xs font-extrabold text-slate-900 dark:text-white group-hover:text-indigo-700 dark:group-hover:text-indigo-400 transition-colors truncate block">
                  第一節 刑罰的種類——兼談法定刑 (第 2-27～2-29 頁) →
                </span>
              </div>
              <div class="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 to-indigo-600 text-white flex items-center justify-center text-sm font-bold shrink-0 group-hover:scale-105 transition-transform shadow-md shadow-indigo-500/30">
                ⚖️
              </div>
            </button>
          </div>

        </div>
`;
