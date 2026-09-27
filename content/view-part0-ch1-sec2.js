/**
 * view-part0-ch1-sec2.js
 * 第零篇 第一章 第二節 罪刑法定原則——付出代價的根據何在？ (教材第 2-5 ~ 2-7 頁)
 */
window.APP_VIEWS = window.APP_VIEWS || {};
window.APP_VIEWS['viewPart0Ch1Sec2'] = window.APP_VIEWS['part0Ch1Sec2'] = `
        <!-- VIEW 7: 第零篇 第一章・第二節 罪刑法定原則——付出代價的根據何在？ (教材第 2-5 ~ 2-7 頁) -->
        <div id="viewPart0Ch1Sec2" class="fade-enter hidden space-y-8">
          
          <!-- Breadcrumb & Back -->
          <div class="flex items-center justify-between gap-4 border-b border-slate-100 dark:border-white/[0.06] pb-3">
            <nav class="flex items-center gap-2 text-xs font-medium text-slate-400 flex-wrap">
              <button onclick="switchView('part-0')" class="hover:text-indigo-500 transition-colors">第零篇</button>
              <span>/</span>
              <button onclick="switchView('part0-chapter-1')" class="hover:text-indigo-500 transition-colors">第一章 刑法的運作原理</button>
              <span>/</span>
              <span class="text-indigo-600 dark:text-indigo-400 font-bold">第二節 罪刑法定原則</span>
            </nav>
            <button onclick="switchView('part0-chapter-1')" class="text-xs text-slate-400 hover:text-indigo-500 flex items-center gap-1 transition-colors shrink-0">
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
              </svg>
              <span>返回第一章總覽</span>
            </button>
          </div>

          <!-- Section Header -->
          <div class="space-y-2">
            <div class="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-mono text-xs font-bold">
              <span>第零篇・第一章・第二節</span>
              <span class="px-2 py-0.5 rounded-md bg-indigo-50 dark:bg-indigo-950/40 text-[11px] border border-indigo-200 dark:border-indigo-900/50">教材第 2-5 ～ 2-7 頁 原文體系</span>
            </div>
            <h2 class="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
              第二節 罪刑法定原則——付出代價的根據何在？
            </h2>
            <p class="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
              行為之處罰，以行為時之法律有明文規定者為限（付出代價之根據）。深入剖析習慣法禁止、類推適用禁止、罪刑明確性與溯及既往禁止四大面向、成文法主義、文義極限與憲法法治國對照
            </p>
          </div>

          <!-- 一、罪刑法定原則核心定義與法源依據 -->
          <section id="sec-p0ch1-sec2-def" class="space-y-6 pt-2">
            <div class="flex items-center gap-3">
              <span class="w-2 h-6 rounded-full bg-blue-600"></span>
              <h3 class="text-lg sm:text-xl font-black text-slate-900 dark:text-white tracking-tight">
                一、罪刑法定原則之核心法定定義與憲法法源（教材第 2-5 頁）
              </h3>
            </div>

            <div class="p-6 rounded-3xl border border-slate-200 dark:border-white/[0.08] bg-white dark:bg-[#101623] shadow-sm space-y-6">
              <!-- 核心法定定義與釋字 384 金句卡片 (升級高飽和鮮明天藍色塊美學 + 實心色軸) -->
              <div class="p-6 rounded-2xl bg-gradient-to-br from-sky-100 via-blue-50 to-indigo-100 dark:from-[#082f49] dark:via-[#0c4a6e]/70 dark:to-[#0f172a] border-2 border-sky-400 dark:border-sky-500/80 border-l-[8px] border-l-blue-600 dark:border-l-sky-400 shadow-lg shadow-sky-500/15 space-y-5">
                
                <!-- 標頭列：法規名稱與顯眼高彩度實心徽章 -->
                <div class="flex items-center justify-between flex-wrap gap-2">
                  <div class="flex items-center gap-2.5">
                    <span class="text-2xl drop-shadow-sm">📜</span>
                    <div>
                      <span class="font-black text-sm sm:text-base text-blue-950 dark:text-sky-100 tracking-wide">
                        罪刑法定原則
                      </span>
                      <span class="block text-[11px] font-mono font-bold text-blue-700 dark:text-sky-300 tracking-wider">
                        NULLUM CRIMEN, NULLA POENA SINE LEGE
                      </span>
                    </div>
                  </div>
                  <div class="flex items-center gap-2">
                    <span data-statute="1" class="text-xs font-mono font-black px-3 py-1 rounded-lg bg-blue-600 hover:bg-blue-700 text-white shadow-sm border border-blue-400 cursor-pointer transition-all hover:scale-105 active:scale-95 flex items-center gap-1" title="點擊檢視刑法第1條全文">
                      <span>§</span> 刑法第 1 條
                    </span>
                    <span data-statute="384" class="text-xs font-mono font-black px-3 py-1 rounded-lg bg-amber-500 hover:bg-amber-600 text-white shadow-sm border border-amber-300 cursor-pointer transition-all hover:scale-105 active:scale-95 flex items-center gap-1" title="點擊檢視釋字第384號全文">
                      <span>⚖️</span> 釋字第 384 號
                    </span>
                  </div>
                </div>

                <!-- 刑法第 1 條前段明文：高對比純白卡片 + 亮藍左導引線 -->
                <div class="p-4 sm:p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-blue-400/80 dark:border-blue-700/80 border-l-4 border-l-blue-600 shadow-md space-y-2">
                  <div class="flex items-center justify-between text-xs font-mono border-b border-blue-100 dark:border-slate-800 pb-2">
                    <span class="font-bold text-blue-800 dark:text-blue-300 flex items-center gap-1.5">
                      <span class="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
                      刑法第 1 條前段明文
                    </span>
                    <span class="px-2 py-0.5 rounded bg-blue-100 dark:bg-blue-900/60 text-blue-800 dark:text-blue-200 font-bold text-[11px]">
                      ★ 刑法大憲章・帝王核心原則
                    </span>
                  </div>
                  <p class="text-base sm:text-lg md:text-xl font-black text-blue-950 dark:text-blue-50 leading-relaxed font-serif tracking-wide py-1">
                    「行為之處罰，以行為時之法律有明文規定者為限。」
                  </p>
                </div>

                <!-- 釋字 384 號理由書摘錄：飽滿鮮明暖金橙黃卡片 -->
                <div class="p-4 sm:p-5 rounded-xl bg-gradient-to-r from-amber-100 via-amber-50 to-yellow-50 dark:from-amber-950/70 dark:via-amber-900/40 dark:to-slate-900 border-2 border-amber-400 dark:border-amber-500/80 border-l-4 border-l-amber-600 shadow-sm space-y-2 text-xs sm:text-[13px]">
                  <div class="flex items-center justify-between font-bold text-amber-900 dark:text-amber-200 border-b border-amber-200/80 dark:border-amber-800/60 pb-1.5">
                    <span class="flex items-center gap-1.5 text-xs sm:text-sm">
                      <span class="text-base">⚖️</span>
                      <span>司法院釋字第 384 號解釋理由書（憲法法源依據）</span>
                    </span>
                    <span class="font-mono text-[11px] px-2 py-0.5 rounded bg-amber-200/80 dark:bg-amber-800/60 text-amber-950 dark:text-amber-100 font-bold">
                      憲法第 8 條 正當法律程序
                    </span>
                  </div>
                  <blockquote class="italic text-amber-950 dark:text-amber-100 leading-relaxed pl-3 border-l-2 border-amber-500 font-serif text-xs sm:text-sm font-medium">
                    「實質正當之法律程序，包括罪刑法定主義之要求。非經立法院通過、總統公布之法律明文規定，不得以習慣法創設罪刑，亦不得超越法條文義而類推適用，始符憲法保障人身自由之本旨。」
                  </blockquote>
                </div>

                <!-- 學理價值說明 -->
                <p class="text-xs sm:text-sm text-blue-950 dark:text-slate-200 leading-relaxed font-medium bg-white/70 dark:bg-slate-900/50 p-3.5 rounded-xl border border-blue-200/60 dark:border-blue-900/40">
                  罪刑法定原則被譽為<strong>「刑法的大憲章」</strong>。其核心價值在於<strong>節制國家權力任意發動、保障人民行為自由與預測可能性</strong>。國家欲使人民付出代價（發動刑罰制裁），必須以事前制定且明確的法律為唯一根據。
                </p>

                <!-- 🐣 【超亮眼白話文專區】讓不懂法的小白也能 30 秒秒懂 -->
                <div class="rounded-2xl p-5 sm:p-6 bg-gradient-to-br from-amber-50 via-orange-50/80 to-yellow-100 dark:from-[#2a1c0c] dark:via-[#221608] dark:to-[#171005] border-2 border-amber-400 dark:border-amber-500 border-l-[8px] border-l-amber-500 shadow-md shadow-amber-500/10 space-y-4">
                  
                  <!-- 小白專區 Header -->
                  <div class="flex items-center justify-between flex-wrap gap-2 border-b border-amber-200 dark:border-amber-800/80 pb-3">
                    <div class="flex items-center gap-2">
                      <span class="text-2xl animate-bounce">🐣</span>
                      <div>
                        <div class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-white text-[11px] font-black shadow-xs">
                          <span>💡 零基礎秒懂專區</span>
                          <span>•</span>
                          <span>白話文大翻譯</span>
                        </div>
                        <h4 class="text-base sm:text-lg font-black text-amber-950 dark:text-amber-100 pt-0.5">
                          法條文縐縐在共三小？30 秒白話搞懂「罪刑法定原則」！
                        </h4>
                      </div>
                    </div>
                    <span class="text-xs font-bold text-amber-800 dark:text-amber-300 bg-amber-100 dark:bg-amber-900/60 px-2.5 py-1 rounded-lg border border-amber-300 dark:border-amber-700">
                      🛡️ 人民的防身護身符
                    </span>
                  </div>

                  <!-- 一句話白話金句 -->
                  <div class="p-3.5 sm:p-4 rounded-xl bg-white dark:bg-slate-900 border-2 border-amber-300 dark:border-amber-600 shadow-xs">
                    <div class="text-[11px] font-black text-amber-600 dark:text-amber-400 uppercase tracking-wider mb-1">
                      📢 一句話大白話翻譯
                    </div>
                    <p class="text-sm sm:text-base font-black text-slate-900 dark:text-white leading-relaxed">
                      👉「<span class="text-amber-600 dark:text-amber-400 underline decoration-amber-400 underline-offset-4">沒先講好的遊戲規矩，不能事後找我算帳！</span>法律沒白紙黑字寫是犯罪，政府跟法官就絕對不能抓我去關！」
                    </p>
                  </div>

                  <!-- 趣味日常比喻：大富翁桌遊 -->
                  <div class="p-4 rounded-xl bg-amber-100/60 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800/60 space-y-2 text-xs sm:text-[13px] text-slate-800 dark:text-slate-200 leading-relaxed">
                    <div class="font-black text-amber-900 dark:text-amber-200 flex items-center gap-1.5 text-sm">
                      <span>🎲</span>
                      <span>生活超有感比喻：如果玩大富翁沒有規則書？</span>
                    </div>
                    <p>
                      想像你跟朋友玩大富翁，你剛擲出骰子，朋友突然大喊：「<strong>你剛才丟骰子的姿勢太囂張了，按我家規矩要罰你五千塊！</strong>」你一定會當場翻桌大罵：「<strong>神經病喔！遊戲規則書裡哪裡有寫？！</strong>」
                    </p>
                    <p class="text-amber-950 dark:text-amber-100 font-bold bg-white/80 dark:bg-slate-900/60 p-2.5 rounded-lg border border-amber-300/60">
                      💡 <strong>刑法就是國家跟人民的「遊戲規則書」！</strong>國家有警察、手銬、監獄，公權力超級可怕！如果沒有罪刑法定原則，政府看誰不爽就可以隨便編一個理由抓你去關。這條原則不是在袒護壞人，而是在保護全體老百姓「連呼吸都不用害怕犯法」！
                    </p>
                  </div>

                  <!-- 小白必懂三大白話禁令 -->
                  <div class="space-y-2">
                    <div class="text-xs font-black text-amber-950 dark:text-amber-200 flex items-center gap-1">
                      <span>⚡</span>
                      <span>白話拆解：這條原則對國家下的「三大絕對死命令」</span>
                    </div>
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-2.5 text-xs">
                      
                      <!-- 禁令 1 -->
                      <div class="p-3.5 rounded-xl bg-white dark:bg-slate-900 border-2 border-blue-200 dark:border-blue-900/60 shadow-xs space-y-1">
                        <div class="font-black text-blue-700 dark:text-blue-400 flex items-center gap-1 text-[12px]">
                          <span>🚫</span>
                          <span>① 不能看你不爽就編罪</span>
                        </div>
                        <div class="text-[11px] text-slate-500 font-mono font-bold">（習慣法之禁止）</div>
                        <p class="text-slate-700 dark:text-slate-300 leading-relaxed text-[11.5px] pt-1">
                          ❌ 不能說：「大家都覺得你這樣做很沒水準，判你有罪！」<br>
                          ⭕ <strong>必須立法院白紙黑字寫好才算數！</strong>
                        </p>
                      </div>

                      <!-- 禁令 2 -->
                      <div class="p-3.5 rounded-xl bg-white dark:bg-slate-900 border-2 border-indigo-200 dark:border-indigo-900/60 shadow-xs space-y-1">
                        <div class="font-black text-indigo-700 dark:text-indigo-400 flex items-center gap-1 text-[12px]">
                          <span>🚫</span>
                          <span>② 不能腦補硬扯抓人</span>
                        </div>
                        <div class="text-[11px] text-slate-500 font-mono font-bold">（類推適用之禁止）</div>
                        <p class="text-slate-700 dark:text-slate-300 leading-relaxed text-[11.5px] pt-1">
                          ❌ 不能說：「法律寫偷汽車有罪，你偷滑板車差不多啦，順便一起關！」<br>
                          ⭕ <strong>字面沒寫的，法官絕不能自己腦補擴大抓人！</strong>
                        </p>
                      </div>

                      <!-- 禁令 3 -->
                      <div class="p-3.5 rounded-xl bg-white dark:bg-slate-900 border-2 border-amber-200 dark:border-amber-900/60 shadow-xs space-y-1">
                        <div class="font-black text-amber-700 dark:text-amber-400 flex items-center gap-1 text-[12px]">
                          <span>🚫</span>
                          <span>③ 不能搭時光機罰過去</span>
                        </div>
                        <div class="text-[11px] text-slate-500 font-mono font-bold">（溯及既往之禁止）</div>
                        <p class="text-slate-700 dark:text-slate-300 leading-relaxed text-[11.5px] pt-1">
                          ❌ 不能說：「今天剛立新法說不能吃炸雞，你昨天吃炸雞被我拍到，罰五萬！」<br>
                          ⭕ <strong>只能罰立法以後的事，不能翻舊帳！</strong>
                        </p>
                      </div>

                    </div>
                  </div>

                  <!-- 小白速記口訣 Bar -->
                  <div class="flex items-center justify-between flex-wrap gap-2 pt-1 text-[11.5px] font-bold text-amber-900 dark:text-amber-200 bg-amber-200/50 dark:bg-amber-900/40 p-2.5 rounded-lg border border-amber-300/80 dark:border-amber-700/60">
                    <span class="flex items-center gap-1">
                      <span>🎯</span>
                      <span>小白秒記口訣：</span>
                      <span class="text-red-600 dark:text-red-400 font-black">事前講好</span>、
                      <span class="text-blue-600 dark:text-blue-400 font-black">寫得清楚</span>、
                      <span class="text-amber-600 dark:text-amber-400 font-black">不翻舊帳</span>、
                      <span class="text-emerald-600 dark:text-emerald-400 font-black">不准腦補</span>！
                    </span>
                    <span class="text-[10px] text-amber-800 dark:text-amber-300 font-mono font-bold">NULLUM CRIMEN SINE LEGE</span>
                  </div>

                </div>

              </div>

              <!-- 原文圖解還原：四大面向架構圖 (高飽和鮮明質感升級) -->
              <div class="space-y-3 pt-2">
                <div class="flex items-center justify-between">
                  <h4 class="text-sm sm:text-base font-black text-slate-900 dark:text-white flex items-center gap-2">
                    <span class="text-blue-600 text-lg">🗺️</span>
                    <span>罪刑法定原則之四大面向派生子原則（教材第 2-5 頁 原文圖解）</span>
                  </h4>
                  <span class="text-xs font-mono font-bold text-blue-600 dark:text-blue-400 px-2 py-0.5 rounded bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-900">四大派生面向</span>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-xs">
                  <!-- 面向 1 -->
                  <div class="p-4 rounded-2xl bg-gradient-to-br from-blue-100/90 via-sky-50 to-blue-50/60 dark:from-[#0c2d48] dark:to-[#091e30] border-2 border-blue-400 dark:border-blue-500/80 border-l-4 border-l-blue-600 shadow-sm space-y-2">
                    <div class="flex items-center justify-between">
                      <span class="font-black text-blue-950 dark:text-blue-100 flex items-center gap-1.5 text-sm">
                        <span class="w-6 h-6 rounded-lg bg-blue-600 text-white flex items-center justify-center font-mono font-black text-xs shadow-xs">1</span>
                        <span>習慣法之禁止</span>
                      </span>
                      <span class="text-[10px] text-blue-700 dark:text-blue-300 font-mono font-bold px-2 py-0.5 rounded bg-white/80 dark:bg-slate-900/60 border border-blue-200">成文法主義</span>
                    </div>
                    <p class="text-slate-700 dark:text-slate-200 leading-relaxed text-[11.5px]">
                      刑罰法律必須由立法院通過、總統公布之<strong>形式法律</strong>定之，不得逕以社會習慣或倫理直接作為論罪科刑之法源。
                    </p>
                    <div class="text-[10.5px] font-bold text-blue-800 dark:text-blue-300 bg-white/60 dark:bg-slate-900/40 px-2 py-1 rounded border border-blue-200/60">
                      🗣️ 小白白話：民間習俗、道德觀再怎麼生氣，沒寫成法律就不能抓人！
                    </div>
                  </div>

                  <!-- 面向 2 -->
                  <div class="p-4 rounded-2xl bg-gradient-to-br from-indigo-100/90 via-purple-50 to-indigo-50/60 dark:from-[#211a45] dark:to-[#161230] border-2 border-indigo-400 dark:border-indigo-500/80 border-l-4 border-l-indigo-600 shadow-sm space-y-2">
                    <div class="flex items-center justify-between">
                      <span class="font-black text-indigo-950 dark:text-indigo-100 flex items-center gap-1.5 text-sm">
                        <span class="w-6 h-6 rounded-lg bg-indigo-600 text-white flex items-center justify-center font-mono font-black text-xs shadow-xs">2</span>
                        <span>類推適用之禁止</span>
                      </span>
                      <span class="text-[10px] text-indigo-700 dark:text-indigo-300 font-mono font-bold px-2 py-0.5 rounded bg-white/80 dark:bg-slate-900/60 border border-indigo-200">文義最大射程</span>
                    </div>
                    <p class="text-slate-700 dark:text-slate-200 leading-relaxed text-[11.5px]">
                      法無明文不為罪。條文可能文義為刑罰射程極限，絕對嚴禁超出文義而類推適用不利於行為人之處罰。
                    </p>
                    <div class="text-[10.5px] font-bold text-indigo-800 dark:text-indigo-300 bg-white/60 dark:bg-slate-900/40 px-2 py-1 rounded border border-indigo-200/60">
                      🗣️ 小白白話：法條文字到哪就是極限，法官不能自己發明「差不多條款」！
                    </div>
                  </div>

                  <!-- 面向 3 -->
                  <div class="p-4 rounded-2xl bg-gradient-to-br from-amber-100/90 via-yellow-50 to-amber-50/60 dark:from-[#36270e] dark:to-[#221808] border-2 border-amber-400 dark:border-amber-500/80 border-l-4 border-l-amber-600 shadow-sm space-y-2">
                    <div class="flex items-center justify-between">
                      <span class="font-black text-amber-950 dark:text-amber-100 flex items-center gap-1.5 text-sm">
                        <span class="w-6 h-6 rounded-lg bg-amber-600 text-white flex items-center justify-center font-mono font-black text-xs shadow-xs">3</span>
                        <span>罪刑明確性原則</span>
                      </span>
                      <span class="text-[10px] text-amber-700 dark:text-amber-300 font-mono font-bold px-2 py-0.5 rounded bg-white/80 dark:bg-slate-900/60 border border-amber-200">可預見性</span>
                    </div>
                    <p class="text-slate-700 dark:text-slate-200 leading-relaxed text-[11.5px]">
                      犯罪要件與法律效果均須清楚具體，一般理性人民得有預見可能性（構成要件明確性＋法律效果明確性）。
                    </p>
                    <div class="text-[10.5px] font-bold text-amber-800 dark:text-amber-300 bg-white/60 dark:bg-slate-900/40 px-2 py-1 rounded border border-amber-200/60">
                      🗣️ 小白白話：什麼叫犯罪、會被關幾年都要講清楚，不能寫模糊話！
                    </div>
                  </div>

                  <!-- 面向 4 -->
                  <div class="p-4 rounded-2xl bg-gradient-to-br from-rose-100/90 via-pink-50 to-rose-50/60 dark:from-[#3a151f] dark:to-[#240c13] border-2 border-rose-400 dark:border-rose-500/80 border-l-4 border-l-rose-600 shadow-sm space-y-2">
                    <div class="flex items-center justify-between">
                      <span class="font-black text-rose-950 dark:text-rose-100 flex items-center gap-1.5 text-sm">
                        <span class="w-6 h-6 rounded-lg bg-rose-600 text-white flex items-center justify-center font-mono font-black text-xs shadow-xs">4</span>
                        <span>溯及既往之禁止</span>
                      </span>
                      <span class="text-[10px] text-rose-700 dark:text-rose-300 font-mono font-bold px-2 py-0.5 rounded bg-white/80 dark:bg-slate-900/60 border border-rose-200">法安定性</span>
                    </div>
                    <p class="text-slate-700 dark:text-slate-200 leading-relaxed text-[11.5px]">
                      行為時法律無明文者不罰。國家制定新法時，不得將效力溯及於制定前已發生之行為，以保障人民信賴利益。
                    </p>
                    <div class="text-[10.5px] font-bold text-rose-800 dark:text-rose-300 bg-white/60 dark:bg-slate-900/40 px-2 py-1 rounded border border-rose-200/60">
                      🗣️ 小白白話：法律不能搭時光機，絕對不能拿今天的規定去罰昨天的人！
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </section>

          <!-- 二、面向一：習慣法之禁止（案例 1-4） -->
          <section id="sec-p0ch1-sec2-sub1-custom" class="space-y-6 pt-2">
            <div class="flex items-center gap-3">
              <span class="w-2 h-6 rounded-full bg-blue-600"></span>
              <h3 class="text-lg sm:text-xl font-black text-slate-900 dark:text-white tracking-tight">
                二、面向一：習慣法之禁止（教材第 2-5 頁）
              </h3>
            </div>

            <div class="p-6 rounded-3xl border border-slate-200 dark:border-white/[0.08] bg-white dark:bg-[#101623] shadow-sm space-y-6">
              
              <!-- 引言導讀焦點框：飽滿鮮明湛藍漸層 + 8px 實心色軸 -->
              <div class="p-5 rounded-2xl bg-gradient-to-br from-blue-100/90 via-sky-50 to-indigo-100/70 dark:from-[#0c2d48] dark:via-[#091e30] dark:to-[#0f172a] border-2 border-blue-400 dark:border-blue-500/80 border-l-[8px] border-l-blue-600 dark:border-l-blue-400 shadow-md shadow-blue-500/10 space-y-2">
                <div class="flex items-center justify-between">
                  <span class="text-xs font-mono font-black uppercase tracking-wider text-blue-800 dark:text-blue-300 flex items-center gap-1.5">
                    <span>📜</span>
                    <span>成文法主義核心要求（Formelle Gesetzesbindung）</span>
                  </span>
                  <span class="text-[11px] font-bold px-2 py-0.5 rounded bg-blue-600 text-white shadow-xs">
                    形式法律保留
                  </span>
                </div>
                <p class="text-xs sm:text-sm text-blue-950 dark:text-slate-200 leading-relaxed font-medium">
                  刑罰制裁剝奪人民之自由、財產甚至生命，其成立與法律效果<strong>必須由形式意義之成文法律（立法院三讀通過、總統公布）明文規定</strong>。任何民間習慣、倫理道德、不成文法規或未明文化的法理，均<strong>絕對不得</strong>直接作為論罪科刑的根據。
                </p>
              </div>

              <!-- 案例 1-4 卡片 (升級高飽和鮮明質感 + 8px 脊柱導引軸) -->
              <div id="case-card-0-1-4" data-case="0-1-4" class="case-card p-5 sm:p-6 rounded-2xl border-2 border-blue-400 dark:border-blue-500/80 border-l-[8px] border-l-blue-600 bg-gradient-to-br from-blue-50/90 via-sky-50/50 to-indigo-50/60 dark:from-[#091b29] dark:to-[#0d1424] shadow-md shadow-blue-500/10 space-y-5 transition-all">
                
                <!-- 標頭列：實心高彩度徽章與標題 -->
                <div class="flex items-center justify-between border-b border-blue-200/80 dark:border-blue-800/60 pb-3 flex-wrap gap-2">
                  <div class="flex items-center gap-2.5">
                    <span class="px-3 py-1 rounded-lg bg-blue-600 text-white font-mono text-xs font-black shadow-xs">
                      案例 1-4
                    </span>
                    <h4 class="text-sm sm:text-base font-black text-slate-900 dark:text-white">
                      原因自由行為與習慣法禁止之檢驗（教材第 2-5 頁）
                    </h4>
                  </div>
                  <div class="flex items-center gap-2">
                    <span data-statute="19-3" class="text-xs font-mono font-black px-3 py-1 rounded-lg bg-blue-700 hover:bg-blue-800 text-white shadow-xs border border-blue-400 cursor-pointer transition-all hover:scale-105 active:scale-95 flex items-center gap-1" title="點擊檢視刑法第19條第3項全文">
                      <span>§</span> 19 Ⅲ 明文化
                    </span>
                    <button type="button" onclick="copyCaseNote('0-1-4')" class="copy-case-btn text-xs px-3 py-1 rounded-lg bg-white dark:bg-slate-800 border-2 border-slate-300 dark:border-slate-700 text-slate-800 dark:text-slate-100 hover:text-blue-600 font-bold shadow-xs transition-all flex items-center gap-1.5 cursor-pointer hover:border-blue-400">
                      <span>📋</span><span>複製爭點筆記</span>
                    </button>
                  </div>
                </div>

                <!-- 案件事實背景：高對比純白卡片 + 亮藍導引邊條 -->
                <div class="p-4 rounded-xl bg-white dark:bg-slate-900 border-2 border-blue-300 dark:border-blue-800 border-l-4 border-l-blue-600 shadow-xs text-xs sm:text-[13px] text-slate-800 dark:text-slate-100 leading-relaxed space-y-1.5">
                  <div class="font-black text-blue-900 dark:text-blue-300 flex items-center gap-1.5 text-xs sm:text-sm">
                    <span>📌</span>
                    <span>案件事實背景：行兇前猛灌烈酒壯膽案</span>
                  </div>
                  <p>
                    甲在動手行兇殺人前，自知若保持清醒可能會膽怯心軟，於是故意狂飲烈酒以壯膽，使其於行兇實行階段陷入精神障礙心智缺陷狀態（不能辨識違法或欠缺依辨識而行為之能力）。甲於法庭抗辯：刑法在早期並未明文處罰「原因自由行為」，司法機關不能依習慣法或刑法法理直接定罪！
                  </p>
                </div>

                <!-- 深度爭點與解析：鮮明高彩度雙欄對比 (紅 vs 綠) -->
                <div class="grid grid-cols-1 md:grid-cols-2 gap-3.5 text-xs sm:text-[12.5px]">
                  
                  <!-- 修法前爭議 (紅) -->
                  <div class="p-4 rounded-xl bg-gradient-to-br from-rose-100/90 via-pink-50 to-rose-50 dark:from-[#331118] dark:to-[#200b0f] border-2 border-rose-400 dark:border-rose-600 border-l-4 border-l-rose-600 shadow-xs space-y-2">
                    <span class="font-black text-rose-900 dark:text-rose-200 flex items-center gap-1.5 text-xs sm:text-sm">
                      <span class="text-base">⚠️</span>
                      <span>修法前爭議：習慣法之疑慮（法官自造法理）</span>
                    </span>
                    <p class="text-rose-950 dark:text-rose-100 leading-relaxed font-medium">
                      早期刑法第 19 條僅規定精神障礙者不罰或減刑，並無明文排除自陷精神障礙之情形。實務逕引「原因自由行為」之法理予以論罪，屢遭學界批評牴觸<strong>習慣法之禁止</strong>與<strong>成文法律保留原則</strong>。
                    </p>
                    <div class="text-[11px] font-bold text-rose-800 dark:text-rose-300 bg-white/70 dark:bg-slate-900/60 p-2 rounded-lg border border-rose-300 dark:border-rose-800">
                      ❌ 痛點：法條沒寫不能罰，法官自己搬德國法理判有罪，違反形式成文法主義！
                    </div>
                  </div>

                  <!-- 修法後解法 (綠) -->
                  <div class="p-4 rounded-xl bg-gradient-to-br from-emerald-100/90 via-teal-50 to-emerald-50 dark:from-[#0d2a1f] dark:to-[#071a13] border-2 border-emerald-400 dark:border-emerald-600 border-l-4 border-l-emerald-600 shadow-xs space-y-2">
                    <span class="font-black text-emerald-900 dark:text-emerald-200 flex items-center gap-1.5 text-xs sm:text-sm">
                      <span class="text-base">✓</span>
                      <span>修法後解法：成文法明文化（立法補破網）</span>
                    </span>
                    <p class="text-emerald-950 dark:text-emerald-100 leading-relaxed font-medium">
                      立法院於民國 94 年修正刑法，正式增訂<strong>第 19 條第 3 項</strong>：「前二項規定，於因故意或過失自行招致者，不適用之。」將法理明文化為成文法律，徹底完足罪刑法定原則之形式依據。
                    </p>
                    <div class="text-[11px] font-bold text-emerald-800 dark:text-emerald-300 bg-white/70 dark:bg-slate-900/60 p-2 rounded-lg border border-emerald-300 dark:border-emerald-800">
                      ⭕ 完美解法：立法院白紙黑字增訂第 19 條第 3 項，從此抓人 100% 合憲合法！
                    </div>
                  </div>

                </div>

                <!-- 🐣 【超亮眼白話文專區】案例 1-4 小白秒懂專區 -->
                <div class="rounded-2xl p-5 sm:p-6 bg-gradient-to-br from-amber-50 via-orange-50/80 to-yellow-100 dark:from-[#2a1c0c] dark:via-[#221608] dark:to-[#171005] border-2 border-amber-400 dark:border-amber-500 border-l-[8px] border-l-amber-500 shadow-md shadow-amber-500/10 space-y-4">
                  
                  <!-- 小白專區 Header -->
                  <div class="flex items-center justify-between flex-wrap gap-2 border-b border-amber-200 dark:border-amber-800/80 pb-3">
                    <div class="flex items-center gap-2">
                      <span class="text-2xl animate-bounce">🐣</span>
                      <div>
                        <div class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-white text-[11px] font-black shadow-xs">
                          <span>💡 零基礎秒懂專區</span>
                          <span>•</span>
                          <span>白話文大翻譯</span>
                        </div>
                        <h4 class="text-base sm:text-lg font-black text-amber-950 dark:text-amber-100 pt-0.5">
                          到底在講啥？30 秒白話搞懂「習慣法之禁止」與「裝瘋殺人案」！
                        </h4>
                      </div>
                    </div>
                    <span class="text-xs font-bold text-amber-800 dark:text-amber-300 bg-amber-100 dark:bg-amber-900/60 px-2.5 py-1 rounded-lg border border-amber-300 dark:border-amber-700">
                      🛡️ 防止私刑獵巫
                    </span>
                  </div>

                  <!-- 一句話白話金句 -->
                  <div class="p-3.5 sm:p-4 rounded-xl bg-white dark:bg-slate-900 border-2 border-amber-300 dark:border-amber-600 shadow-xs">
                    <div class="text-[11px] font-black text-amber-600 dark:text-amber-400 uppercase tracking-wider mb-1">
                      📢 一句話大白話翻譯
                    </div>
                    <p class="text-sm sm:text-base font-black text-slate-900 dark:text-white leading-relaxed">
                      👉「<span class="text-amber-600 dark:text-amber-400 underline decoration-amber-400 underline-offset-4">道德歸道德，習俗歸習俗！</span>就算全村 99% 的人都覺得你缺德該死，只要立法院沒白紙黑字寫進刑法，警察跟法官就絕對不能抓你去坐牢！」
                    </p>
                  </div>

                  <!-- 趣味日常比喻：宗祠長老浸豬籠 vs 現代法律 -->
                  <div class="p-4 rounded-xl bg-amber-100/60 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800/60 space-y-2 text-xs sm:text-[13px] text-slate-800 dark:text-slate-200 leading-relaxed">
                    <div class="font-black text-amber-900 dark:text-amber-200 flex items-center gap-1.5 text-sm">
                      <span>🛖</span>
                      <span>生活超有感比喻：如果允許「習慣法定罪」，會有多可怕？</span>
                    </div>
                    <p>
                      想像在古代某個偏僻村落，全村長老在宗祠宣判：「<strong>按我們村子三百年的家規習慣，不孝順父母、頂撞長輩的逆子，就要抓去浸豬籠淹死！</strong>」你聽了肯定嚇死：「<strong>神經病喔！國家的法律哪一條寫頂撞長輩要判死刑？！</strong>」
                    </p>
                    <p class="text-amber-950 dark:text-amber-100 font-bold bg-white/80 dark:bg-slate-900/60 p-2.5 rounded-lg border border-amber-300/60">
                      💡 <strong>這就是為什麼刑法絕對嚴禁「習慣法」！</strong>如果不禁止，哪天地方勢力或社會輿論看你不順眼，隨便搬出一條「民間習俗」或「傳統美德」就能判你有罪，現代社會瞬間倒退回中世紀燒女巫的獵巫時代！
                    </p>
                  </div>

                  <!-- 案例 1-4 小白大白話拆解：借酒裝瘋殺人算盤 -->
                  <div class="space-y-2">
                    <div class="text-xs font-black text-amber-950 dark:text-amber-200 flex items-center gap-1">
                      <span>🍺</span>
                      <span>小白白話解析：案例 1-4 的「借酒壯膽殺人案」到底在吵什麼？</span>
                    </div>
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-2.5 text-xs">
                      
                      <!-- 步驟 1 -->
                      <div class="p-3.5 rounded-xl bg-white dark:bg-slate-900 border-2 border-amber-200 dark:border-amber-800/60 shadow-xs space-y-1">
                        <div class="font-black text-rose-600 dark:text-rose-400 flex items-center gap-1 text-[12px]">
                          <span>😈</span>
                          <span>① 嫌犯的賤招</span>
                        </div>
                        <div class="text-[11px] text-slate-500 font-mono font-bold">（鑽法律漏洞）</div>
                        <p class="text-slate-700 dark:text-slate-300 leading-relaxed text-[11.5px] pt-1">
                          法條寫「瘋子砍人不罰」，嫌犯動手前故意灌醉自己：「我動手時是無意識的瘋子，你們不能罰我！」
                        </p>
                      </div>

                      <!-- 步驟 2 -->
                      <div class="p-3.5 rounded-xl bg-white dark:bg-slate-900 border-2 border-indigo-200 dark:border-indigo-900/60 shadow-xs space-y-1">
                        <div class="font-black text-indigo-600 dark:text-indigo-400 flex items-center gap-1 text-[12px]">
                          <span>⚖️</span>
                          <span>② 以前法官為何挨罵？</span>
                        </div>
                        <div class="text-[11px] text-slate-500 font-mono font-bold">（違背成文法主義）</div>
                        <p class="text-slate-700 dark:text-slate-300 leading-relaxed text-[11.5px] pt-1">
                          法官硬用法理判嫌犯有罪。學者痛批：「法條沒寫你就不能自己腦補發明規定，這是破壞成文法！」
                        </p>
                      </div>

                      <!-- 步驟 3 -->
                      <div class="p-3.5 rounded-xl bg-white dark:bg-slate-900 border-2 border-emerald-200 dark:border-emerald-900/60 shadow-xs space-y-1">
                        <div class="font-black text-emerald-600 dark:text-emerald-400 flex items-center gap-1 text-[12px]">
                          <span>📜</span>
                          <span>③ 立法院神補刀修法</span>
                        </div>
                        <div class="text-[11px] text-slate-500 font-mono font-bold">（增訂 § 19 Ⅲ 明文）</div>
                        <p class="text-slate-700 dark:text-slate-300 leading-relaxed text-[11.5px] pt-1">
                          立院在法條補上「<strong>自己搞瘋自己的不准免罰</strong>」！從此白紙黑字，抓人 100% 站得住腳！
                        </p>
                      </div>

                    </div>
                  </div>

                  <!-- 小白速記口訣 Bar -->
                  <div class="flex items-center justify-between flex-wrap gap-2 pt-1 text-[11.5px] font-bold text-amber-900 dark:text-amber-200 bg-amber-200/50 dark:bg-amber-900/40 p-2.5 rounded-lg border border-amber-300/80 dark:border-amber-700/60">
                    <span class="flex items-center gap-1">
                      <span>🎯</span>
                      <span>小白秒記口訣：</span>
                      <span class="text-red-600 dark:text-red-400 font-black">壞習慣不能當法律</span>、
                      <span class="text-blue-600 dark:text-blue-400 font-black">自陷發瘋絕不免刑</span>、
                      <span class="text-emerald-600 dark:text-emerald-400 font-black">立法院先寫好才算數</span>！
                    </span>
                    <span class="text-[10px] text-amber-800 dark:text-amber-300 font-mono font-bold">NULLA POENA SINE LEGE SCRIPTA</span>
                  </div>

                </div>

              </div>

            </div>
          </section>

          <!-- 三、面向二：類推適用之禁止（案例 1-5） -->
          <section id="sec-p0ch1-sec2-sub2-analogy" class="space-y-6 pt-2">
            <div class="flex items-center gap-3">
              <span class="w-2 h-6 rounded-full bg-indigo-600"></span>
              <h3 class="text-lg sm:text-xl font-black text-slate-900 dark:text-white tracking-tight">
                三、面向二：類推適用之禁止（教材第 2-5 ～ 2-6 頁）
              </h3>
            </div>

            <div class="p-6 rounded-3xl border border-slate-200 dark:border-white/[0.08] bg-white dark:bg-[#101623] shadow-sm space-y-6">
              
              <!-- 引言導讀焦點框：飽滿鮮明靛紫漸層 + 8px 實心色軸 -->
              <div class="p-5 rounded-2xl bg-gradient-to-br from-indigo-100/90 via-purple-50 to-indigo-50/70 dark:from-[#1e1b4b] dark:via-[#131138] dark:to-[#0f172a] border-2 border-indigo-400 dark:border-indigo-500/80 border-l-[8px] border-l-indigo-600 dark:border-l-indigo-400 shadow-md shadow-indigo-500/10 space-y-2">
                <div class="flex items-center justify-between flex-wrap gap-2">
                  <span class="text-xs font-mono font-black uppercase tracking-wider text-indigo-900 dark:text-indigo-200 flex items-center gap-1.5">
                    <span>⚖️</span>
                    <span>條文可能文義：刑罰擴張的最遠射程（Analogieverbot）</span>
                  </span>
                  <span class="text-[11px] font-bold px-2.5 py-0.5 rounded bg-indigo-600 text-white shadow-xs">
                    嚴禁不利類推
                  </span>
                </div>
                <p class="text-xs sm:text-sm text-indigo-950 dark:text-slate-200 leading-relaxed font-medium">
                  所謂類推適用，指法律對於系爭案件未有明文規定，而比附援引性質相似案件之法律條文予以適用。在民事法領域為填補法律漏洞所許，但在<strong>刑法領域絕對嚴格禁止不利於行為人之類推適用</strong>！法官解釋刑法時，<strong>「條文可能之字面文義」是刑法擴張解釋的最大極限</strong>，一旦超越文字文義範疇，即屬違法之類推適用。
                </p>
              </div>

              <!-- 案例 1-5 卡片 (升級高飽和鮮明質感 + 8px 脊柱導引軸) -->
              <div id="case-card-0-1-5" data-case="0-1-5" class="case-card p-5 sm:p-6 rounded-2xl border-2 border-indigo-400 dark:border-indigo-500/80 border-l-[8px] border-l-indigo-600 bg-gradient-to-br from-indigo-50/90 via-purple-50/40 to-slate-50/60 dark:from-[#131138] dark:to-[#0d1424] shadow-md shadow-indigo-500/10 space-y-5 transition-all">
                
                <!-- 標頭列：實心高彩度徽章與標題 -->
                <div class="flex items-center justify-between border-b border-indigo-200/80 dark:border-indigo-800/60 pb-3 flex-wrap gap-2">
                  <div class="flex items-center gap-2.5">
                    <span class="px-3 py-1 rounded-lg bg-indigo-600 text-white font-mono text-xs font-black shadow-xs">
                      案例 1-5
                    </span>
                    <h4 class="text-sm sm:text-base font-black text-slate-900 dark:text-white">
                      竊電擬制 vs 偷接第四台影音訊號禁止類推適用（教材第 2-5 ～ 2-6 頁）
                    </h4>
                  </div>
                  <div class="flex items-center gap-2">
                    <span data-statute="323" class="text-xs font-mono font-black px-3 py-1 rounded-lg bg-indigo-700 hover:bg-indigo-800 text-white shadow-xs border border-indigo-400 cursor-pointer transition-all hover:scale-105 active:scale-95 flex items-center gap-1" title="點擊檢視刑法第323條全文">
                      <span>§</span> 323 能量擬制
                    </span>
                    <button type="button" onclick="copyCaseNote('0-1-5')" class="copy-case-btn text-xs px-3 py-1 rounded-lg bg-white dark:bg-slate-800 border-2 border-slate-300 dark:border-slate-700 text-slate-800 dark:text-slate-100 hover:text-indigo-600 font-bold shadow-xs transition-all flex items-center gap-1.5 cursor-pointer hover:border-indigo-400">
                      <span>📋</span><span>複製爭點筆記</span>
                    </button>
                  </div>
                </div>

                <!-- 案件事實背景：高對比純白卡片 + 亮藍導引邊條 -->
                <div class="p-4 rounded-xl bg-white dark:bg-slate-900 border-2 border-indigo-300 dark:border-indigo-800 border-l-4 border-l-indigo-600 shadow-xs text-xs sm:text-[13px] text-slate-800 dark:text-slate-100 leading-relaxed space-y-1.5">
                  <div class="font-black text-indigo-900 dark:text-indigo-300 flex items-center gap-1.5 text-xs sm:text-sm">
                    <span>📌</span>
                    <span>案件事實背景：爬電線桿私接第四台線路案</span>
                  </div>
                  <p>
                    甲為了免費收看電視節目，未經第四台有線電視業者同意，擅自爬上電線桿以同軸電纜線私接業者的傳輸線路，將第四台之影像與聲音訊號引導至自家電視機免費觀賞。檢察官依刑法第 320 條普通竊盜罪及第 323 條準動產起訴。
                  </p>
                </div>

                <!-- 深度法理分析與裁判對照：鮮明高彩度雙欄對比 + 綠底裁判結論 -->
                <div class="p-4 sm:p-5 rounded-xl bg-white dark:bg-slate-900/90 border-2 border-indigo-200 dark:border-indigo-900/70 shadow-xs space-y-3">
                  <div class="flex items-center justify-between font-black text-slate-900 dark:text-slate-100 border-b border-indigo-100 dark:border-indigo-800/60 pb-2 flex-wrap gap-2">
                    <span class="flex items-center gap-1.5 text-xs sm:text-sm">
                      <span>🏛️</span>
                      <span>臺灣高等法院 97 年度上易字第 648 號刑事判決要旨</span>
                    </span>
                    <span class="text-xs px-2.5 py-0.5 rounded-md bg-indigo-100 dark:bg-indigo-900/60 text-indigo-800 dark:text-indigo-200 font-mono font-bold border border-indigo-300 dark:border-indigo-700">
                      ★ 類推禁止標竿判決
                    </span>
                  </div>
                  
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-3.5 pt-1 text-xs sm:text-[12.5px]">
                    <!-- ① 能量定義 (藍) -->
                    <div class="p-3.5 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50/60 dark:from-slate-800 dark:to-slate-850 border-2 border-blue-300 dark:border-blue-700 border-l-4 border-l-blue-600 shadow-xs space-y-1.5">
                      <div class="font-black text-blue-900 dark:text-blue-300 flex items-center gap-1 text-xs sm:text-[13px]">
                        <span>⚡</span>
                        <span>① 刑法 § 323 之「能量」法定定義</span>
                      </div>
                      <p class="text-slate-700 dark:text-slate-300 text-[11.5px] leading-relaxed">
                        刑法 § 323 規定「電能、熱能及其他能量，關於本章之罪，以動產論。」此處之能量，係指具備<strong>獨立物理效用與經濟價值之物質能量</strong>（如電力、瓦斯、熱能）。
                      </p>
                    </div>

                    <!-- ② 訊號非能量 (紅) -->
                    <div class="p-3.5 rounded-xl bg-gradient-to-br from-rose-50 to-pink-50/60 dark:from-slate-800 dark:to-slate-850 border-2 border-rose-300 dark:border-rose-700 border-l-4 border-l-rose-600 shadow-xs space-y-1.5">
                      <div class="font-black text-rose-900 dark:text-rose-300 flex items-center gap-1 text-xs sm:text-[13px]">
                        <span>📡</span>
                        <span>② 有線電視「訊號」絕非物理能量</span>
                      </div>
                      <p class="text-slate-700 dark:text-slate-300 text-[11.5px] leading-relaxed">
                        有線電視傳輸之光電訊號，僅係<strong>聲音與影像資訊之載體</strong>，並非獨立物理能量。若將影音訊號擴張解釋為刑法 § 323 之能量，已超越文字可能文義，屬於<strong>違法的不利類推適用</strong>！
                      </p>
                    </div>
                  </div>

                  <!-- 判決結論 (翡翠綠高飽和結語框) -->
                  <div class="p-3 sm:p-3.5 rounded-xl bg-gradient-to-r from-emerald-100 via-teal-50 to-emerald-50 dark:from-[#0d2a1f] dark:to-[#071a13] border-2 border-emerald-400 dark:border-emerald-600 border-l-4 border-l-emerald-600 shadow-xs text-xs sm:text-[12.5px] text-emerald-950 dark:text-emerald-100 font-bold space-y-1">
                    <div class="flex items-center gap-1.5 text-emerald-800 dark:text-emerald-300 font-black">
                      <span>✓</span>
                      <span>判決結果：法官堅守類推禁止，判決無罪！</span>
                    </div>
                    <p class="font-medium text-emerald-900 dark:text-emerald-200 text-[11.5px] leading-relaxed">
                      法官認定甲之行為<strong>於刑法竊盜罪不成立犯罪（判決無罪）</strong>！立法院事後為保護業者，乃於《有線廣播電視法》第 74 條另行制定民事損害賠償與特定處罰規範以填補法律漏洞。
                    </p>
                  </div>
                </div>

                <!-- 🐣 【超亮眼白話文專區】案例 1-5 小白秒懂專區 -->
                <div class="rounded-2xl p-5 sm:p-6 bg-gradient-to-br from-amber-50 via-orange-50/80 to-yellow-100 dark:from-[#2a1c0c] dark:via-[#221608] dark:to-[#171005] border-2 border-amber-400 dark:border-amber-500 border-l-[8px] border-l-amber-500 shadow-md shadow-amber-500/10 space-y-4">
                  
                  <!-- 小白專區 Header -->
                  <div class="flex items-center justify-between flex-wrap gap-2 border-b border-amber-200 dark:border-amber-800/80 pb-3">
                    <div class="flex items-center gap-2">
                      <span class="text-2xl animate-bounce">🐣</span>
                      <div>
                        <div class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-white text-[11px] font-black shadow-xs">
                          <span>💡 零基礎秒懂專區</span>
                          <span>•</span>
                          <span>白話文大翻譯</span>
                        </div>
                        <h4 class="text-base sm:text-lg font-black text-amber-950 dark:text-amber-100 pt-0.5">
                          到底在講啥？30 秒白話搞懂「偷接第四台為什麼不算偷竊」與「類推禁止」！
                        </h4>
                      </div>
                    </div>
                    <span class="text-xs font-bold text-amber-800 dark:text-amber-300 bg-amber-100 dark:bg-amber-900/60 px-2.5 py-1 rounded-lg border border-amber-300 dark:border-amber-700">
                      🛡️ 字面文義是最大極限
                    </span>
                  </div>

                  <!-- 一句話白話金句 -->
                  <div class="p-3.5 sm:p-4 rounded-xl bg-white dark:bg-slate-900 border-2 border-amber-300 dark:border-amber-600 shadow-xs">
                    <div class="text-[11px] font-black text-amber-600 dark:text-amber-400 uppercase tracking-wider mb-1">
                      📢 一句話大白話翻譯
                    </div>
                    <p class="text-sm sm:text-base font-black text-slate-900 dark:text-white leading-relaxed">
                      👉「<span class="text-amber-600 dark:text-amber-400 underline decoration-amber-400 underline-offset-4">長得很像不等於就是它！</span>法律只寫偷『電』算偷竊，法官就不能自己腦補硬拗說『偷看電視訊號跟偷電差不多，所以也要抓去關』！」
                    </p>
                  </div>

                  <!-- 趣味日常比喻：偷飲料 vs 偷漢堡 -->
                  <div class="p-4 rounded-xl bg-amber-100/60 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800/60 space-y-2 text-xs sm:text-[13px] text-slate-800 dark:text-slate-200 leading-relaxed">
                    <div class="font-black text-amber-900 dark:text-amber-200 flex items-center gap-1.5 text-sm">
                      <span>🍔</span>
                      <span>生活超有感比喻：店長硬拗「漢堡就是飲料」？</span>
                    </div>
                    <p>
                      想像某家餐廳門口掛著告示：「<strong>偷拿本店可樂、雪碧等飲料者，送警法辦坐牢！</strong>」結果有個客人順手牽羊拿走了一顆漢堡，店長氣瘋大罵：「<strong>漢堡跟可樂都是食物，吃下去都會飽，性质差不多，所以我拿飲料這條把你送去坐牢！</strong>」
                    </p>
                    <p>
                      你聽了肯定覺得店長瘋了：「<strong>差超級多好不好！漢堡又不是液體飲料，菜單沒寫偷漢堡要坐牢，你憑什麼硬塞？</strong>」
                    </p>
                    <p class="text-amber-950 dark:text-amber-100 font-bold bg-white/80 dark:bg-slate-900/60 p-2.5 rounded-lg border border-amber-300/60">
                      💡 <strong>這就是刑法的「禁止類推適用」！</strong>民事賠錢可以比照辦理（類推），但刑法會把老百姓抓去坐牢，法律寫什麼就是什麼。如果允許法官看兩件事很像就隨便套用條文，法官就等於凌駕立法院自己發明法律！
                    </p>
                  </div>

                  <!-- 案例 1-5 小白大白話拆解：偷接第四台案件 3 步驟 -->
                  <div class="space-y-2">
                    <div class="text-xs font-black text-amber-950 dark:text-amber-200 flex items-center gap-1">
                      <span>📺</span>
                      <span>小白白話解析：案例 1-5 的「偷接第四台案」法官為什麼判無罪？</span>
                    </div>
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-2.5 text-xs">
                      
                      <!-- 步驟 1 -->
                      <div class="p-3.5 rounded-xl bg-white dark:bg-slate-900 border-2 border-amber-200 dark:border-amber-800/60 shadow-xs space-y-1">
                        <div class="font-black text-rose-600 dark:text-rose-400 flex items-center gap-1 text-[12px]">
                          <span>🔌</span>
                          <span>① 檢察官的硬拗</span>
                        </div>
                        <div class="text-[11px] text-slate-500 font-mono font-bold">（硬扯訊號是能量）</div>
                        <p class="text-slate-700 dark:text-slate-300 leading-relaxed text-[11.5px] pt-1">
                          法條只寫偷「<strong>電能、熱能等能量</strong>」算動產竊盜。檢察官硬把第四台的「電視影音訊號」拗成也是一種能量！
                        </p>
                      </div>

                      <!-- 步驟 2 -->
                      <div class="p-3.5 rounded-xl bg-white dark:bg-slate-900 border-2 border-indigo-200 dark:border-indigo-900/60 shadow-xs space-y-1">
                        <div class="font-black text-indigo-600 dark:text-indigo-400 flex items-center gap-1 text-[12px]">
                          <span>👨‍⚖️</span>
                          <span>② 高院法官霸氣打臉</span>
                        </div>
                        <div class="text-[11px] text-slate-500 font-mono font-bold">（字面文義是極限）</div>
                        <p class="text-slate-700 dark:text-slate-300 leading-relaxed text-[11.5px] pt-1">
                          法官：「訊號是聲音跟影像傳播，根本不是電能！照你這樣凹，那我偷聽隔壁說話、偷看隔壁螢幕不都算偷竊？<strong>不准違法類推！</strong>」
                        </p>
                      </div>

                      <!-- 步驟 3 -->
                      <div class="p-3.5 rounded-xl bg-white dark:bg-slate-900 border-2 border-emerald-200 dark:border-emerald-900/60 shadow-xs space-y-1">
                        <div class="font-black text-emerald-600 dark:text-emerald-400 flex items-center gap-1 text-[12px]">
                          <span>⚖️</span>
                          <span>③ 判決無罪＋另立專法</span>
                        </div>
                        <div class="text-[11px] text-slate-500 font-mono font-bold">（立院補破網填漏洞）</div>
                        <p class="text-slate-700 dark:text-slate-300 leading-relaxed text-[11.5px] pt-1">
                          偷看電視雖然不道德，但<strong>刑法沒寫就是無罪</strong>！立法院事後在《有線廣播電視法》另外立專法處理，這才是法治精神！
                        </p>
                      </div>

                    </div>
                  </div>

                  <!-- 小白速記口訣 Bar -->
                  <div class="flex items-center justify-between flex-wrap gap-2 pt-1 text-[11.5px] font-bold text-amber-900 dark:text-amber-200 bg-amber-200/50 dark:bg-amber-900/40 p-2.5 rounded-lg border border-amber-300/80 dark:border-amber-700/60">
                    <span class="flex items-center gap-1">
                      <span>🎯</span>
                      <span>小白秒記口訣：</span>
                      <span class="text-indigo-600 dark:text-indigo-400 font-black">字面文義是極限</span>、
                      <span class="text-rose-600 dark:text-rose-400 font-black">不能看像就硬判</span>、
                      <span class="text-emerald-600 dark:text-emerald-400 font-black">偷電不等於偷訊號</span>！
                    </span>
                    <span class="text-[10px] text-amber-800 dark:text-amber-300 font-mono font-bold">ANALOGIEVERBOT IN BONAM PARTEM</span>
                  </div>

                </div>

              </div>
            </div>
          </section>

          <!-- 四、面向三：罪刑明確性原則（案例 1-6） -->
          <section id="sec-p0ch1-sec2-sub3-clarity" class="space-y-6 pt-2">
            <div class="flex items-center gap-3">
              <span class="w-2 h-6 rounded-full bg-amber-600"></span>
              <h3 class="text-lg sm:text-xl font-black text-slate-900 dark:text-white tracking-tight">
                四、面向三：罪刑明確性原則（教材第 2-6 頁）
              </h3>
            </div>

            <div class="p-6 rounded-3xl border border-slate-200 dark:border-white/[0.08] bg-white dark:bg-[#101623] shadow-sm space-y-6">
              
              <!-- 引言導讀焦點框：飽滿鮮明暖金橙黃漸層 + 8px 實心色軸 -->
              <div class="p-5 rounded-2xl bg-gradient-to-br from-amber-100/90 via-orange-50 to-amber-50/70 dark:from-[#331e08] dark:via-[#241505] dark:to-[#0f172a] border-2 border-amber-400 dark:border-amber-500/80 border-l-[8px] border-l-amber-600 dark:border-l-amber-400 shadow-md shadow-amber-500/10 space-y-2">
                <div class="flex items-center justify-between flex-wrap gap-2">
                  <span class="text-xs font-mono font-black uppercase tracking-wider text-amber-900 dark:text-amber-200 flex items-center gap-1.5">
                    <span>🔍</span>
                    <span>罪刑明確性：拒絕模糊曖昧法規（Bestimmtheitsgebot）</span>
                  </span>
                  <span class="text-[11px] font-bold px-2.5 py-0.5 rounded bg-amber-600 text-white shadow-xs">
                    雙軌明確性審查
                  </span>
                </div>
                <p class="text-xs sm:text-sm text-amber-950 dark:text-slate-200 leading-relaxed font-medium">
                  法律不能含混曖昧。罪刑明確性原則要求國家在制定刑罰時，無論是<strong>「犯罪之構成要件（犯什麼罪）」</strong>或是<strong>「相應之法律效果（會被關幾年）」</strong>，均必須具備足夠的明確性與客觀標準，使一般理性人民得有預見可能性，並受司法機關嚴謹審查。
                </p>
              </div>

              <!-- 雙軌明確性對照網格 (升級高飽和實心色塊) -->
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                
                <!-- ① 構成要件明確性 -->
                <div class="p-4 rounded-2xl bg-gradient-to-br from-amber-50 to-orange-50/60 dark:from-slate-850 dark:to-slate-900 border-2 border-amber-300 dark:border-amber-700/80 border-l-4 border-l-amber-600 shadow-xs space-y-2">
                  <div class="flex items-center justify-between font-black text-amber-950 dark:text-amber-200">
                    <span class="flex items-center gap-1.5 text-xs sm:text-[13px]">
                      <span>📝</span>
                      <span>① 構成要件之明確性</span>
                    </span>
                    <span class="text-[10px] font-mono font-bold text-amber-800 dark:text-amber-300 bg-amber-100 dark:bg-amber-900/60 px-2 py-0.5 rounded border border-amber-300">行為預見</span>
                  </div>
                  <p class="text-slate-700 dark:text-slate-200 leading-relaxed text-[11.5px]">
                    禁止使用過度空泛或曖昧不明之文字（如戒嚴時期「行為不檢者處刑」）。法律條文之規定必須使一般理性人民能夠理解其行為界限，清楚知悉何種行為為法律所嚴格禁止。
                  </p>
                </div>

                <!-- ② 法律效果明確性 -->
                <div class="p-4 rounded-2xl bg-gradient-to-br from-orange-50 to-amber-50/60 dark:from-slate-850 dark:to-slate-900 border-2 border-orange-300 dark:border-orange-700/80 border-l-4 border-l-orange-600 shadow-xs space-y-2">
                  <div class="flex items-center justify-between font-black text-orange-950 dark:text-orange-200">
                    <span class="flex items-center gap-1.5 text-xs sm:text-[13px]">
                      <span>⏳</span>
                      <span>② 法律效果之明確性</span>
                    </span>
                    <span class="text-[10px] font-mono font-bold text-orange-800 dark:text-orange-300 bg-orange-100 dark:bg-orange-900/60 px-2 py-0.5 rounded border border-orange-300">刑度界限</span>
                  </div>
                  <p class="text-slate-700 dark:text-slate-200 leading-relaxed text-[11.5px]">
                    嚴格禁止規定絕對不定期刑。立法者必須清楚規定刑罰種類（死刑、無期徒刑、有期徒刑、罰金）以及具體的法定刑幅度，使人民明確知悉觸法將付出之具體代價。
                  </p>
                </div>

              </div>

              <!-- 案例 1-6 卡片 (升級高飽和鮮明質感 + 8px 脊柱導引軸) -->
              <div id="case-card-0-1-6" data-case="0-1-6" class="case-card p-5 sm:p-6 rounded-2xl border-2 border-amber-400 dark:border-amber-500/80 border-l-[8px] border-l-amber-600 bg-gradient-to-br from-amber-50/90 via-orange-50/40 to-slate-50/60 dark:from-[#241505] dark:to-[#0d1424] shadow-md shadow-amber-500/10 space-y-5 transition-all">
                
                <!-- 標頭列：實心高彩度徽章與標題 -->
                <div class="flex items-center justify-between border-b border-amber-200/80 dark:border-amber-800/60 pb-3 flex-wrap gap-2">
                  <div class="flex items-center gap-2.5">
                    <span class="px-3 py-1 rounded-lg bg-amber-600 text-white font-mono text-xs font-black shadow-xs">
                      案例 1-6
                    </span>
                    <h4 class="text-sm sm:text-base font-black text-slate-900 dark:text-white">
                      法律效果明確性：絕對不定期刑違憲 vs 相對不定期刑合憲（教材第 2-6 頁）
                    </h4>
                  </div>
                  <div class="flex items-center gap-2">
                    <span class="text-xs font-mono font-black px-2.5 py-1 rounded-lg bg-amber-700 text-white shadow-xs border border-amber-400">
                      釋字 471 理由書
                    </span>
                    <button type="button" onclick="copyCaseNote('0-1-6')" class="copy-case-btn text-xs px-3 py-1 rounded-lg bg-white dark:bg-slate-800 border-2 border-slate-300 dark:border-slate-700 text-slate-800 dark:text-slate-100 hover:text-amber-600 font-bold shadow-xs transition-all flex items-center gap-1.5 cursor-pointer hover:border-amber-400">
                      <span>📋</span><span>複製爭點筆記</span>
                    </button>
                  </div>
                </div>

                <!-- 深度爭點與對照：鮮明高彩度雙欄對比 (紅 vs 綠) -->
                <div class="grid grid-cols-1 md:grid-cols-2 gap-3.5 text-xs sm:text-[12.5px]">
                  
                  <!-- 絕對不定期刑 (紅) -->
                  <div class="p-4 rounded-xl bg-gradient-to-br from-rose-100/90 via-pink-50 to-rose-50 dark:from-[#331118] dark:to-[#200b0f] border-2 border-rose-400 dark:border-rose-600 border-l-4 border-l-rose-600 shadow-xs space-y-2">
                    <span class="font-black text-rose-900 dark:text-rose-200 flex items-center gap-1.5 text-xs sm:text-sm">
                      <span class="text-base">✕</span>
                      <span>絕對不定期刑（違憲・嚴格禁止！）</span>
                    </span>
                    <p class="text-rose-950 dark:text-rose-100 leading-relaxed font-medium">
                      例如法律條文若規定：「犯本罪者，處有期徒刑，<strong>直到改過自新為止</strong>。」行為人完全無法預見自身將被剝奪人身自由多久，刑罰效果全由行政或行刑機關恣意決定。
                    </p>
                    <div class="text-[11px] font-bold text-rose-800 dark:text-rose-300 bg-white/70 dark:bg-slate-900/60 p-2 rounded-lg border border-rose-300 dark:border-rose-800">
                      ❌ 痛點：改過自新全憑典獄長心情決定，形同國家任意無限期拘禁，嚴重違憲無效！
                    </div>
                  </div>

                  <!-- 相對不定期刑 (綠) -->
                  <div class="p-4 rounded-xl bg-gradient-to-br from-emerald-100/90 via-teal-50 to-emerald-50 dark:from-[#0d2a1f] dark:to-[#071a13] border-2 border-emerald-400 dark:border-emerald-600 border-l-4 border-l-emerald-600 shadow-xs space-y-2">
                    <span class="font-black text-emerald-900 dark:text-emerald-200 flex items-center gap-1.5 text-xs sm:text-sm">
                      <span class="text-base">✓</span>
                      <span>相對不定期刑（合憲・常態裁量）</span>
                    </span>
                    <p class="text-emerald-950 dark:text-emerald-100 leading-relaxed font-medium">
                      例如刑法各分則條文規定：「處<strong>五年以上十二年以下</strong>有期徒刑。」此種訂出明確法定刑上限與下限，賦予法官依個案情狀（§ 57）裁量之空間。
                    </p>
                    <div class="text-[11px] font-bold text-emerald-800 dark:text-emerald-300 bg-white/70 dark:bg-slate-900/60 p-2 rounded-lg border border-emerald-300 dark:border-emerald-800">
                      ⭕ 完美平衡：立法者訂出明確天花板與地板，法官在範圍內量刑，兼具明確性與個案正義！
                    </div>
                  </div>

                </div>

                <!-- 🐣 【超亮眼白話文專區】案例 1-6 小白秒懂專區 -->
                <div class="rounded-2xl p-5 sm:p-6 bg-gradient-to-br from-amber-50 via-orange-50/80 to-yellow-100 dark:from-[#2a1c0c] dark:via-[#221608] dark:to-[#171005] border-2 border-amber-400 dark:border-amber-500 border-l-[8px] border-l-amber-500 shadow-md shadow-amber-500/10 space-y-4">
                  
                  <!-- 小白專區 Header -->
                  <div class="flex items-center justify-between flex-wrap gap-2 border-b border-amber-200 dark:border-amber-800/80 pb-3">
                    <div class="flex items-center gap-2">
                      <span class="text-2xl animate-bounce">🐣</span>
                      <div>
                        <div class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-white text-[11px] font-black shadow-xs">
                          <span>💡 零基礎秒懂專區</span>
                          <span>•</span>
                          <span>白話文大翻譯</span>
                        </div>
                        <h4 class="text-base sm:text-lg font-black text-amber-950 dark:text-amber-100 pt-0.5">
                          到底在講啥？30 秒白話搞懂「罪刑明確性」與「到底要關幾年」！
                        </h4>
                      </div>
                    </div>
                    <span class="text-xs font-bold text-amber-800 dark:text-amber-300 bg-amber-100 dark:bg-amber-900/60 px-2.5 py-1 rounded-lg border border-amber-300 dark:border-amber-700">
                      🛡️ 拒絕模糊口袋罪
                    </span>
                  </div>

                  <!-- 一句話白話金句 -->
                  <div class="p-3.5 sm:p-4 rounded-xl bg-white dark:bg-slate-900 border-2 border-amber-300 dark:border-amber-600 shadow-xs">
                    <div class="text-[11px] font-black text-amber-600 dark:text-amber-400 uppercase tracking-wider mb-1">
                      📢 一句話大白話翻譯
                    </div>
                    <p class="text-sm sm:text-base font-black text-slate-900 dark:text-white leading-relaxed">
                      👉「<span class="text-amber-600 dark:text-amber-400 underline decoration-amber-400 underline-offset-4">說清楚講明白，別給老子打啞謎！</span>做什麼事算犯法要寫得清清楚楚；會被關多久要給出數字範圍，不能讓政府看心情隨便決定！」
                    </p>
                  </div>

                  <!-- 趣味日常比喻：學校機車校規比喻 -->
                  <div class="p-4 rounded-xl bg-amber-100/60 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800/60 space-y-2 text-xs sm:text-[13px] text-slate-800 dark:text-slate-200 leading-relaxed">
                    <div class="font-black text-amber-900 dark:text-amber-200 flex items-center gap-1.5 text-sm">
                      <span>🏫</span>
                      <span>生活超有感比喻：學校機車校規到底想怎樣？</span>
                    </div>
                    <p>
                      想像你讀的學校校規寫著：「<strong>學生在校若『表現不良』，罰留校勞動服務，直到『學務主任滿意為止』！</strong>」
                    </p>
                    <p>
                      你聽了肯定氣到摔筆：「<strong>神經病喔！什麼叫表現不良？走路太快算不算？到底要掃幾天廁所？如果主任看我不爽，豈不是要掃到畢業？！</strong>」
                    </p>
                    <p class="text-amber-950 dark:text-amber-100 font-bold bg-white/80 dark:bg-slate-900/60 p-2.5 rounded-lg border border-amber-300/60">
                      💡 <strong>這就是「罪刑明確性」！</strong>如果法律條文寫得模模糊糊，政府警察就可以把看不順眼的人全扣上「行為不檢」的大帽子抓去關。所以法律規定必須清晰具體，刑期更要有「天花板」跟「地板」，人民心裡才能踏實！
                    </p>
                  </div>

                  <!-- 案例 1-6 小白大白話拆解：不定期刑對照 -->
                  <div class="space-y-2">
                    <div class="text-xs font-black text-amber-950 dark:text-amber-200 flex items-center gap-1">
                      <span>⚖️</span>
                      <span>小白白話解析：案例 1-6 的「關到改過自新」為什麼會違憲？</span>
                    </div>
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-2.5 text-xs">
                      
                      <!-- 步驟 1 -->
                      <div class="p-3.5 rounded-xl bg-white dark:bg-slate-900 border-2 border-amber-200 dark:border-amber-800/60 shadow-xs space-y-1">
                        <div class="font-black text-rose-600 dark:text-rose-400 flex items-center gap-1 text-[12px]">
                          <span>🕳️</span>
                          <span>① 絕對不定期刑（違憲黑牢）</span>
                        </div>
                        <div class="text-[11px] text-slate-500 font-mono font-bold">（判你關到改過自新）</div>
                        <p class="text-slate-700 dark:text-slate-300 leading-relaxed text-[11.5px] pt-1">
                          「關到改過自新為止」根本是無限期黑牢！什麼時候算改過全看典獄長心情，等於任由國家綁架人民！
                        </p>
                      </div>

                      <!-- 步驟 2 -->
                      <div class="p-3.5 rounded-xl bg-white dark:bg-slate-900 border-2 border-indigo-200 dark:border-indigo-900/60 shadow-xs space-y-1">
                        <div class="font-black text-indigo-600 dark:text-indigo-400 flex items-center gap-1 text-[12px]">
                          <span>📏</span>
                          <span>② 相對不定期刑（合憲常態）</span>
                        </div>
                        <div class="text-[11px] text-slate-500 font-mono font-bold">（關 5 年以上 12 年以下）</div>
                        <p class="text-slate-700 dark:text-slate-300 leading-relaxed text-[11.5px] pt-1">
                          地板是 5 年，天花板是 12 年！法官不能判少於 5 年也不能判超過 12 年，有明確框框人民才能預期。
                        </p>
                      </div>

                      <!-- 步驟 3 -->
                      <div class="p-3.5 rounded-xl bg-white dark:bg-slate-900 border-2 border-emerald-200 dark:border-emerald-900/60 shadow-xs space-y-1">
                        <div class="font-black text-emerald-600 dark:text-emerald-400 flex items-center gap-1 text-[12px]">
                          <span>🛡️</span>
                          <span>③ 守護人權的最強防線</span>
                        </div>
                        <div class="text-[11px] text-slate-500 font-mono font-bold">（消滅模糊口袋罪）</div>
                        <p class="text-slate-700 dark:text-slate-300 leading-relaxed text-[11.5px] pt-1">
                          法律條文越清楚，政府越沒辦法搞文字獄！明確性就是擋在獨裁公權力前面最強硬的人權防護網！
                        </p>
                      </div>

                    </div>
                  </div>

                  <!-- 小白速記口訣 Bar -->
                  <div class="flex items-center justify-between flex-wrap gap-2 pt-1 text-[11.5px] font-bold text-amber-900 dark:text-amber-200 bg-amber-200/50 dark:bg-amber-900/40 p-2.5 rounded-lg border border-amber-300/80 dark:border-amber-700/60">
                    <span class="flex items-center gap-1">
                      <span>🎯</span>
                      <span>小白秒記口訣：</span>
                      <span class="text-amber-600 dark:text-amber-400 font-black">構成要件講清楚</span>、
                      <span class="text-orange-600 dark:text-orange-400 font-black">刑期範圍訂明白</span>、
                      <span class="text-rose-600 dark:text-rose-400 font-black">改過自新不能判</span>！
                    </span>
                    <span class="text-[10px] text-amber-800 dark:text-amber-300 font-mono font-bold">BESTIMMTHEITSGEBOT</span>
                  </div>

                </div>

              </div>
            </div>
          </section>

          <!-- 五、面向四：溯及既往之禁止（案例 1-7） -->
          <section id="sec-p0ch1-sec2-sub4-retroactive" class="space-y-6 pt-2">
            <div class="flex items-center gap-3">
              <span class="w-2 h-6 rounded-full bg-rose-600"></span>
              <h3 class="text-lg sm:text-xl font-black text-slate-900 dark:text-white tracking-tight">
                五、面向四：溯及既往之禁止（教材第 2-6 ～ 2-7 頁）
              </h3>
            </div>

            <div class="p-6 rounded-3xl border border-slate-200 dark:border-white/[0.08] bg-white dark:bg-[#101623] shadow-sm space-y-6">
              
              <!-- 引言導讀焦點框：飽滿鮮明玫瑰磚紅漸層 + 8px 實心色軸 -->
              <div class="p-5 rounded-2xl bg-gradient-to-br from-rose-100/90 via-pink-50 to-rose-50/70 dark:from-[#3a151f] dark:via-[#250d14] dark:to-[#0f172a] border-2 border-rose-400 dark:border-rose-500/80 border-l-[8px] border-l-rose-600 dark:border-l-rose-400 shadow-md shadow-rose-500/10 space-y-2">
                <div class="flex items-center justify-between flex-wrap gap-2">
                  <span class="text-xs font-mono font-black uppercase tracking-wider text-rose-900 dark:text-rose-200 flex items-center gap-1.5">
                    <span>⏳</span>
                    <span>法不溯及既往：法律不准搭時光機（Rückwirkungsverbot）</span>
                  </span>
                  <span class="text-[11px] font-bold px-2.5 py-0.5 rounded bg-rose-600 text-white shadow-xs">
                    信賴保護與法安定性
                  </span>
                </div>
                <p class="text-xs sm:text-sm text-rose-950 dark:text-slate-200 leading-relaxed font-medium">
                  刑法第 1 條揭櫫「行為之處罰，以<strong>行為時</strong>之法律有明文規定者為限」。國家所制定之刑罰新規範，<strong>絕對不得溯及處罰公布施行前人民已從事之行為</strong>。否則人民將無從根據現有法律安排生活，法安定性與信賴保護原則將蕩然無存！
                </p>
              </div>

              <!-- 案例 1-7 卡片 (升級高飽和鮮明質感 + 8px 脊柱導引軸) -->
              <div id="case-card-0-1-7" data-case="0-1-7" class="case-card p-5 sm:p-6 rounded-2xl border-2 border-rose-400 dark:border-rose-500/80 border-l-[8px] border-l-rose-600 bg-gradient-to-br from-rose-50/90 via-pink-50/40 to-slate-50/60 dark:from-[#250d14] dark:to-[#0d1424] shadow-md shadow-rose-500/10 space-y-5 transition-all">
                
                <!-- 標頭列：實心高彩度徽章與標題 -->
                <div class="flex items-center justify-between border-b border-rose-200/80 dark:border-rose-800/60 pb-3 flex-wrap gap-2">
                  <div class="flex items-center gap-2.5">
                    <span class="px-3 py-1 rounded-lg bg-rose-600 text-white font-mono text-xs font-black shadow-xs">
                      案例 1-7
                    </span>
                    <h4 class="text-sm sm:text-base font-black text-slate-900 dark:text-white">
                      小三條款溯及生效之違法檢驗（教材第 2-6 ～ 2-7 頁）
                    </h4>
                  </div>
                  <div class="flex items-center gap-2">
                    <span class="text-xs font-mono font-black px-2.5 py-1 rounded-lg bg-rose-700 text-white shadow-xs border border-rose-400">
                      § 1 行為時法原則
                    </span>
                    <button type="button" onclick="copyCaseNote('0-1-7')" class="copy-case-btn text-xs px-3 py-1 rounded-lg bg-white dark:bg-slate-800 border-2 border-slate-300 dark:border-slate-700 text-slate-800 dark:text-slate-100 hover:text-rose-600 font-bold shadow-xs transition-all flex items-center gap-1.5 cursor-pointer hover:border-rose-400">
                      <span>📋</span><span>複製爭點筆記</span>
                    </button>
                  </div>
                </div>

                <!-- 案件事實背景：高對比純白卡片 + 亮紅導引邊條 -->
                <div class="p-4 rounded-xl bg-white dark:bg-slate-900 border-2 border-rose-300 dark:border-rose-800 border-l-4 border-l-rose-600 shadow-xs text-xs sm:text-[13px] text-slate-800 dark:text-slate-100 leading-relaxed space-y-1.5">
                  <div class="font-black text-rose-900 dark:text-rose-300 flex items-center gap-1.5 text-xs sm:text-sm">
                    <span>📌</span>
                    <span>案件事實背景：立法院神速修法重懲包養小三案</span>
                  </div>
                  <p>
                    公務員甲長期在婚外包養小三。政府為了端正公務紀律，於某年 1 月 1 日經立法院修法增訂「公務員婚外情重懲條例」，明定公務員婚外情處三年有期徒刑；且法案條文末竟附帶規定<strong>「本法自前一年 7 月 1 日起溯及生效」</strong>。檢察官乃依該法追訴甲前一年下半年的包養行為。
                  </p>
                </div>

                <!-- 深度爭點與對照：鮮明高彩度雙欄對比 (紅 vs 綠) -->
                <div class="grid grid-cols-1 md:grid-cols-2 gap-3.5 text-xs sm:text-[12.5px]">
                  
                  <!-- 違憲分析 (紅) -->
                  <div class="p-4 rounded-xl bg-gradient-to-br from-rose-100/90 via-pink-50 to-rose-50 dark:from-[#331118] dark:to-[#200b0f] border-2 border-rose-400 dark:border-rose-600 border-l-4 border-l-rose-600 shadow-xs space-y-2">
                    <span class="font-black text-rose-900 dark:text-rose-200 flex items-center gap-1.5 text-xs sm:text-sm">
                      <span class="text-base">⚠️</span>
                      <span>違憲審查：突襲性立法侵害信賴保護</span>
                    </span>
                    <p class="text-rose-950 dark:text-rose-100 leading-relaxed font-medium">
                      甲於前一年 7 至 12 月從事包養時，法律並無刑事處罰規定。甲基於行為時之法律秩序安排生活，享有憲法所保障之信賴利益。新法於 1 月 1 日立法時將刑罰溯及既往發動，公然牴觸憲法罪刑法定原則。
                    </p>
                    <div class="text-[11px] font-bold text-rose-800 dark:text-rose-300 bg-white/70 dark:bg-slate-900/60 p-2 rounded-lg border border-rose-300 dark:border-rose-800">
                      ❌ 痛點：搭時光機秋後算帳，人民無法預測自己今天的合法行為明天會不會變成死罪！
                    </div>
                  </div>

                  <!-- 裁判效果 (綠) -->
                  <div class="p-4 rounded-xl bg-gradient-to-br from-emerald-100/90 via-teal-50 to-emerald-50 dark:from-[#0d2a1f] dark:to-[#071a13] border-2 border-emerald-400 dark:border-emerald-600 border-l-4 border-l-emerald-600 shadow-xs space-y-2">
                    <span class="font-black text-emerald-900 dark:text-emerald-200 flex items-center gap-1.5 text-xs sm:text-sm">
                      <span class="text-base">✓</span>
                      <span>法律效果：溯及條款違憲，對甲絕對不生效力！</span>
                    </span>
                    <p class="text-emerald-950 dark:text-emerald-100 leading-relaxed font-medium">
                      法院審理時，應認定立法者增訂之「溯及生效條款」違反憲法第 8 條人身自由保障與罪刑法定原則而<strong>違憲無效</strong>。法官必須拒絕適用溯及條款，<strong>判決甲過去之行為無罪！</strong>
                    </p>
                    <div class="text-[11px] font-bold text-emerald-800 dark:text-emerald-300 bg-white/70 dark:bg-slate-900/60 p-2 rounded-lg border border-emerald-300 dark:border-emerald-800">
                      ⭕ 裁判結論：違憲溯及條款無效，甲之包養行為適用行為時法，獲判無罪！
                    </div>
                  </div>

                </div>

                <!-- 🐣 【超亮眼白話文專區】案例 1-7 小白秒懂專區 -->
                <div class="rounded-2xl p-5 sm:p-6 bg-gradient-to-br from-amber-50 via-orange-50/80 to-yellow-100 dark:from-[#2a1c0c] dark:via-[#221608] dark:to-[#171005] border-2 border-amber-400 dark:border-amber-500 border-l-[8px] border-l-amber-500 shadow-md shadow-amber-500/10 space-y-4">
                  
                  <!-- 小白專區 Header -->
                  <div class="flex items-center justify-between flex-wrap gap-2 border-b border-amber-200 dark:border-amber-800/80 pb-3">
                    <div class="flex items-center gap-2">
                      <span class="text-2xl animate-bounce">🐣</span>
                      <div>
                        <div class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-white text-[11px] font-black shadow-xs">
                          <span>💡 零基礎秒懂專區</span>
                          <span>•</span>
                          <span>白話文大翻譯</span>
                        </div>
                        <h4 class="text-base sm:text-lg font-black text-amber-950 dark:text-amber-100 pt-0.5">
                          到底在講啥？30 秒白話搞懂「法律不准搭時光機」與「秋後算帳」！
                        </h4>
                      </div>
                    </div>
                    <span class="text-xs font-bold text-amber-800 dark:text-amber-300 bg-amber-100 dark:bg-amber-900/60 px-2.5 py-1 rounded-lg border border-amber-300 dark:border-amber-700">
                      🛡️ 嚴禁秋後算帳
                    </span>
                  </div>

                  <!-- 一句話白話金句 -->
                  <div class="p-3.5 sm:p-4 rounded-xl bg-white dark:bg-slate-900 border-2 border-amber-300 dark:border-amber-600 shadow-xs">
                    <div class="text-[11px] font-black text-amber-600 dark:text-amber-400 uppercase tracking-wider mb-1">
                      📢 一句話大白話翻譯
                    </div>
                    <p class="text-sm sm:text-base font-black text-slate-900 dark:text-white leading-relaxed">
                      👉「<span class="text-amber-600 dark:text-amber-400 underline decoration-amber-400 underline-offset-4">昨天的我不歸今天的法律管！</span>今天新立的法律，絕對不能坐時光機回去抓昨天的我來坐牢！」
                    </p>
                  </div>

                  <!-- 趣味日常比喻：遊戲官方改版封號比喻 -->
                  <div class="p-4 rounded-xl bg-amber-100/60 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800/60 space-y-2 text-xs sm:text-[13px] text-slate-800 dark:text-slate-200 leading-relaxed">
                    <div class="font-black text-amber-900 dark:text-amber-200 flex items-center gap-1.5 text-sm">
                      <span>🕹️</span>
                      <span>生活超有感比喻：遊戲官方突襲改規矩回頭封號？</span>
                    </div>
                    <p>
                      想像你昨天玩線上遊戲，乖乖照著當時的規則刷副本升級。結果官方今天突然發公告：「<strong>本遊戲即日起嚴禁刷該副本！而且溯及既往處罰：『昨天所有刷過的人，一律封號＋刪角色！』</strong>」
                    </p>
                    <p>
                      你聽了肯定氣到砸鍵盤：「<strong>腦殘官方喔！昨天遊戲規則又沒寫不行，今天改版就算了，憑什麼回頭封我昨天的帳號？！</strong>」
                    </p>
                    <p class="text-amber-950 dark:text-amber-100 font-bold bg-white/80 dark:bg-slate-900/60 p-2.5 rounded-lg border border-amber-300/60">
                      💡 <strong>這就是「法不溯及既往原則」！</strong>昨天的老百姓只能照昨天的法律過日子。如果政府可以今天立一條法、回頭去抓十年前的人，那每個人出門都會嚇破膽：「天曉得明天會不會立一個新法把我昨天的行為判死刑」？整個國家就沒有任何安全感了！
                    </p>
                  </div>

                  <!-- 案例 1-7 小白大白話拆解：小三條款 3 步驟 -->
                  <div class="space-y-2">
                    <div class="text-xs font-black text-amber-950 dark:text-amber-200 flex items-center gap-1">
                      <span>💔</span>
                      <span>小白白話解析：案例 1-7 的「包養小三條款」為什麼抓不了甲？</span>
                    </div>
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-2.5 text-xs">
                      
                      <!-- 步驟 1 -->
                      <div class="p-3.5 rounded-xl bg-white dark:bg-slate-900 border-2 border-amber-200 dark:border-amber-800/60 shadow-xs space-y-1">
                        <div class="font-black text-indigo-600 dark:text-indigo-400 flex items-center gap-1 text-[12px]">
                          <span>🕺</span>
                          <span>① 做事時根本沒這條罪</span>
                        </div>
                        <div class="text-[11px] text-slate-500 font-mono font-bold">（依當時法律生活）</div>
                        <p class="text-slate-700 dark:text-slate-300 leading-relaxed text-[11.5px] pt-1">
                          甲包養小三時，雖然道德上有瑕疵，但當時刑法「根本沒這條罪」，法律上不是犯罪！
                        </p>
                      </div>

                      <!-- 步驟 2 -->
                      <div class="p-3.5 rounded-xl bg-white dark:bg-slate-900 border-2 border-rose-200 dark:border-rose-900/60 shadow-xs space-y-1">
                        <div class="font-black text-rose-600 dark:text-rose-400 flex items-center gap-1 text-[12px]">
                          <span>🚀</span>
                          <span>② 立法院開時光機耍賴</span>
                        </div>
                        <div class="text-[11px] text-slate-500 font-mono font-bold">（立法惡霸秋後算帳）</div>
                        <p class="text-slate-700 dark:text-slate-300 leading-relaxed text-[11.5px] pt-1">
                          政府 1 月立新法，文末竟寫「溯及去年 7 月生效」！這就是典型的開時光機整人！
                        </p>
                      </div>

                      <!-- 步驟 3 -->
                      <div class="p-3.5 rounded-xl bg-white dark:bg-slate-900 border-2 border-emerald-200 dark:border-emerald-900/60 shadow-xs space-y-1">
                        <div class="font-black text-emerald-600 dark:text-emerald-400 flex items-center gap-1 text-[12px]">
                          <span>⚖️</span>
                          <span>③ 法官打臉判決無罪</span>
                        </div>
                        <div class="text-[11px] text-slate-500 font-mono font-bold">（溯及條款宣告違憲）</div>
                        <p class="text-slate-700 dark:text-slate-300 leading-relaxed text-[11.5px] pt-1">
                          法官拒絕替違憲惡法背書！直接宣告溯及條款無效，判決甲在修法前的行為<strong>無罪</strong>！
                        </p>
                      </div>

                    </div>
                  </div>

                  <!-- 小白速記口訣 Bar -->
                  <div class="flex items-center justify-between flex-wrap gap-2 pt-1 text-[11.5px] font-bold text-amber-900 dark:text-amber-200 bg-amber-200/50 dark:bg-amber-900/40 p-2.5 rounded-lg border border-amber-300/80 dark:border-amber-700/60">
                    <span class="flex items-center gap-1">
                      <span>🎯</span>
                      <span>小白秒記口訣：</span>
                      <span class="text-rose-600 dark:text-rose-400 font-black">今天立法管今天</span>、
                      <span class="text-indigo-600 dark:text-indigo-400 font-black">時光倒流絕不准</span>、
                      <span class="text-emerald-600 dark:text-emerald-400 font-black">秋後算帳算違憲</span>！
                    </span>
                    <span class="text-[10px] text-amber-800 dark:text-amber-300 font-mono font-bold">RÜCKWIRKUNGSVERBOT</span>
                  </div>

                </div>

              </div>
            </div>
          </section>

          <!-- 六、作者叮嚀：罪刑法定原則與公法概念對照卡 -->
          <section id="sec-p0ch1-sec2-author-memo" class="space-y-6 pt-2">
            <div class="flex items-center gap-3">
              <span class="w-2 h-6 rounded-full bg-amber-600"></span>
              <h3 class="text-lg sm:text-xl font-black text-slate-900 dark:text-white tracking-tight">
                六、作者叮嚀：罪刑法定原則與公法（憲法）概念深度對照（教材第 2-7 頁）
              </h3>
            </div>

            <div class="p-6 rounded-3xl border-2 border-amber-400 dark:border-amber-500/80 border-l-[8px] border-l-amber-600 bg-gradient-to-br from-amber-50/90 via-orange-50/40 to-yellow-50/60 dark:from-[#2e1d08] dark:via-[#1f1406] dark:to-[#0f172a] shadow-md shadow-amber-500/10 space-y-5">
              <div class="flex items-center justify-between border-b border-amber-200/80 dark:border-amber-800/60 pb-3 flex-wrap gap-2">
                <div class="flex items-center gap-2.5">
                  <span class="text-2xl animate-pulse">💡</span>
                  <h4 class="font-black text-sm sm:text-base text-amber-950 dark:text-amber-100">
                    陳奕廷（易律師）考前叮嚀：刑法與公法法治國原則的完全映射
                  </h4>
                </div>
                <span class="text-xs font-mono px-3 py-1 rounded-lg bg-amber-600 text-white font-black shadow-xs">
                  教材第 2-7 頁 考點叮嚀
                </span>
              </div>

              <p class="text-xs sm:text-sm text-amber-950 dark:text-slate-200 leading-relaxed font-medium bg-white/70 dark:bg-slate-900/60 p-3.5 rounded-xl border border-amber-200/70 dark:border-amber-900/50">
                罪刑法定原則並非刑法所獨創之孤立概念，其背後本質即為<strong>憲法法治國原則（Rechtsstaatsprinzip）</strong>在刑法領域的具體投射。考生若能同時掌握其在公法上的對應概念，對於申論題之論述縱深極有裨益：
              </p>

              <!-- 公法刑法四大對照卡片 (升級鮮明雙色實心色標) -->
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-xs">
                
                <!-- ① 習慣法之禁止 -->
                <div class="p-4 rounded-2xl bg-white dark:bg-slate-900 border-2 border-blue-300 dark:border-blue-800 border-l-4 border-l-blue-600 space-y-2 shadow-xs">
                  <div class="flex items-center justify-between font-black">
                    <span class="text-blue-800 dark:text-blue-300 text-xs sm:text-[13px] flex items-center gap-1">
                      <span>①</span> 習慣法之禁止
                    </span>
                    <span class="text-[10px] font-mono font-bold text-blue-700 bg-blue-100 dark:bg-blue-900/60 px-2 py-0.5 rounded">對應公法 ➔</span>
                  </div>
                  <div class="p-2 rounded-lg bg-blue-50 dark:bg-blue-950/60 text-blue-900 dark:text-blue-200 font-black text-[12px] border border-blue-200 dark:border-blue-800">
                    🏛️ 憲法之「絕對法律保留原則」
                  </div>
                  <p class="text-slate-600 dark:text-slate-300 text-[11.5px] leading-relaxed">
                    剝奪人身自由之最嚴重干預，必須由國會制定之形式法律直接明定，不得授權行政命令，更不可由習慣法補充。
                  </p>
                </div>

                <!-- ② 類推適用之禁止 -->
                <div class="p-4 rounded-2xl bg-white dark:bg-slate-900 border-2 border-indigo-300 dark:border-indigo-800 border-l-4 border-l-indigo-600 space-y-2 shadow-xs">
                  <div class="flex items-center justify-between font-black">
                    <span class="text-indigo-800 dark:text-indigo-300 text-xs sm:text-[13px] flex items-center gap-1">
                      <span>②</span> 類推適用之禁止
                    </span>
                    <span class="text-[10px] font-mono font-bold text-indigo-700 bg-indigo-100 dark:bg-indigo-900/60 px-2 py-0.5 rounded">對應公法 ➔</span>
                  </div>
                  <div class="p-2 rounded-lg bg-indigo-50 dark:bg-indigo-950/60 text-indigo-900 dark:text-indigo-200 font-black text-[12px] border border-indigo-200 dark:border-indigo-800">
                    ⚖️ 憲法第 80 條「法官依據法律獨立審判」
                  </div>
                  <p class="text-slate-600 dark:text-slate-300 text-[11.5px] leading-relaxed">
                    司法權不得逾越立法權之文字界限擅自創設刑罰，確保國家權力分立與司法謙抑。
                  </p>
                </div>

                <!-- ③ 罪刑明確性原則 -->
                <div class="p-4 rounded-2xl bg-white dark:bg-slate-900 border-2 border-amber-300 dark:border-amber-800 border-l-4 border-l-amber-600 space-y-2 shadow-xs">
                  <div class="flex items-center justify-between font-black">
                    <span class="text-amber-800 dark:text-amber-300 text-xs sm:text-[13px] flex items-center gap-1">
                      <span>③</span> 罪刑明確性原則
                    </span>
                    <span class="text-[10px] font-mono font-bold text-amber-700 bg-amber-100 dark:bg-amber-900/60 px-2 py-0.5 rounded">對應公法 ➔</span>
                  </div>
                  <div class="p-2 rounded-lg bg-amber-50 dark:bg-amber-950/60 text-amber-900 dark:text-amber-200 font-black text-[12px] border border-amber-200 dark:border-amber-800">
                    📜 憲法之「法律明確性原則」
                  </div>
                  <p class="text-slate-600 dark:text-slate-300 text-[11.5px] leading-relaxed">
                    法治國之基本要求：受規範者可預見、可理解，且得由司法審查機關確認解釋（釋字第 432、521 號）。
                  </p>
                </div>

                <!-- ④ 溯及既往之禁止 -->
                <div class="p-4 rounded-2xl bg-white dark:bg-slate-900 border-2 border-rose-300 dark:border-rose-800 border-l-4 border-l-rose-600 space-y-2 shadow-xs">
                  <div class="flex items-center justify-between font-black">
                    <span class="text-rose-800 dark:text-rose-300 text-xs sm:text-[13px] flex items-center gap-1">
                      <span>④</span> 溯及既往之禁止
                    </span>
                    <span class="text-[10px] font-mono font-bold text-rose-700 bg-rose-100 dark:bg-rose-900/60 px-2 py-0.5 rounded">對應公法 ➔</span>
                  </div>
                  <div class="p-2 rounded-lg bg-rose-50 dark:bg-rose-950/60 text-rose-900 dark:text-rose-200 font-black text-[12px] border border-rose-200 dark:border-rose-800">
                    🛡️ 憲法之「法安定性與信賴保護原則」
                  </div>
                  <p class="text-slate-800 dark:text-slate-200 font-medium text-[11.5px] leading-relaxed">
                    人民對國家既有法秩序之合法信賴受憲法保障，國家不得恣意制定真正溯及既往法規損害人民利益（釋字第 574、717 號）。
                  </p>
                </div>

              </div>

              <!-- 🐣 【超亮眼白話文專區】公法對照小白秒懂專區 -->
              <div class="rounded-2xl p-5 sm:p-6 bg-gradient-to-br from-amber-50 via-orange-50/80 to-yellow-100 dark:from-[#2a1c0c] dark:via-[#221608] dark:to-[#171005] border-2 border-amber-400 dark:border-amber-500 border-l-[8px] border-l-amber-500 shadow-md shadow-amber-500/10 space-y-4">
                
                <!-- 小白專區 Header -->
                <div class="flex items-center justify-between flex-wrap gap-2 border-b border-amber-200 dark:border-amber-800/80 pb-3">
                  <div class="flex items-center gap-2">
                    <span class="text-2xl animate-bounce">🐣</span>
                    <div>
                      <div class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-white text-[11px] font-black shadow-xs">
                        <span>💡 零基礎秒懂專區</span>
                        <span>•</span>
                        <span>白話文大翻譯</span>
                      </div>
                      <h4 class="text-base sm:text-lg font-black text-amber-950 dark:text-amber-100 pt-0.5">
                        刑法老師為什麼一直扯憲法？公法跟刑法到底是什麼關係？
                      </h4>
                    </div>
                  </div>
                  <span class="text-xs font-bold text-amber-800 dark:text-amber-300 bg-amber-100 dark:bg-amber-900/60 px-2.5 py-1 rounded-lg border border-amber-300 dark:border-amber-700">
                    🎯 公法刑法雙刀流
                  </span>
                </div>

                <!-- 一句話白話金句 -->
                <div class="p-3.5 sm:p-4 rounded-xl bg-white dark:bg-slate-900 border-2 border-amber-300 dark:border-amber-600 shadow-xs">
                  <div class="text-[11px] font-black text-amber-600 dark:text-amber-400 uppercase tracking-wider mb-1">
                    📢 一句話大白話翻譯
                  </div>
                  <p class="text-sm sm:text-base font-black text-slate-900 dark:text-white leading-relaxed">
                    👉「<span class="text-amber-600 dark:text-amber-400 underline decoration-amber-400 underline-offset-4">憲法是設計藍圖，刑法是防暴特警！</span>憲法規定的『法律保留、法官獨立審判、明確性、信賴保護』，換上刑法警裝就是四大派生原則！」
                  </p>
                </div>

                <!-- 趣味日常比喻：同一家公司的母法與實施守則 -->
                <div class="p-4 rounded-xl bg-amber-100/60 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800/60 space-y-2 text-xs sm:text-[13px] text-slate-800 dark:text-slate-200 leading-relaxed">
                  <div class="font-black text-amber-900 dark:text-amber-200 flex items-center gap-1.5 text-sm">
                    <span>🏢</span>
                    <span>生活超有感比喻：總公司的「最高管理章程」vs 前線保全的「實戰手冊」</span>
                  </div>
                  <p class="text-slate-800 dark:text-slate-200 font-medium">
                    想像總公司董事會訂立了《最高員工權益保護章程》（憲法），規定：「任何部門不能任意剋扣員工薪水，規矩必須事前明定、條文要清晰，不得秋後算帳。」而刑法就像公司負責開除犯錯員工的「人事稽核與法務部門」，必須 100% 遵照董事會憲章辦事！
                  </p>
                  <p class="text-amber-950 dark:text-amber-100 font-bold bg-white/80 dark:bg-slate-900/60 p-2.5 rounded-lg border border-amber-300/60">
                    💡 <strong>寫考試申論題拿高分的神技！</strong>很多人考刑法只會死背「刑法第 1 條」，但高分群考生會在開頭補上一句：「本原則係源自憲法第 8 條正當法律程序與法治國原則之實質投射！」閱卷老師看到立刻眼睛一亮，直接給頂標分數！
                  </p>
                </div>

                <!-- 四大對應速記卡 -->
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 text-xs">
                  <div class="p-3 rounded-xl bg-white dark:bg-slate-900 border-2 border-blue-300 dark:border-blue-700 space-y-1">
                    <span class="font-black text-blue-800 dark:text-blue-300 block">① 習慣法禁止</span>
                    <span class="text-slate-700 dark:text-slate-200 font-medium">➔ 映射公法：<strong>絕對法律保留</strong>（立法院成文法才准剝奪自由）</span>
                  </div>
                  <div class="p-3 rounded-xl bg-white dark:bg-slate-900 border-2 border-indigo-300 dark:border-indigo-700 space-y-1">
                    <span class="font-black text-indigo-800 dark:text-indigo-300 block">② 類推適用禁止</span>
                    <span class="text-slate-700 dark:text-slate-200 font-medium">➔ 映射公法：<strong>法官依法律獨立審判</strong>（文字邊界即權限邊界）</span>
                  </div>
                  <div class="p-3 rounded-xl bg-white dark:bg-slate-900 border-2 border-amber-300 dark:border-amber-700 space-y-1">
                    <span class="font-black text-amber-800 dark:text-amber-300 block">③ 罪刑明確性</span>
                    <span class="text-slate-700 dark:text-slate-200 font-medium">➔ 映射公法：<strong>法律明確性原則</strong>（可理解、可預見、可司法審查）</span>
                  </div>
                  <div class="p-3 rounded-xl bg-white dark:bg-slate-900 border-2 border-rose-300 dark:border-rose-700 space-y-1">
                    <span class="font-black text-rose-800 dark:text-rose-300 block">④ 溯及既往禁止</span>
                    <span class="text-slate-700 dark:text-slate-200 font-medium">➔ 映射公法：<strong>法安定性與信賴保護</strong>（禁止搭時光機翻舊帳）</span>
                  </div>
                </div>

              </div>

            </div>
          </section>

          <!-- Section Bottom Pagination: 第二節底部 -->
          <div class="pt-8 border-t border-slate-200 dark:border-white/[0.08] grid grid-cols-1 sm:grid-cols-2 gap-4">
            <button onclick="switchView('part0-ch1-sec1')" class="group p-4 rounded-2xl border border-slate-200 dark:border-white/[0.08] hover:border-blue-500/40 bg-white dark:bg-[#111726] text-left transition-all hover:-translate-y-0.5 shadow-sm hover:shadow-md flex items-center gap-3">
              <div class="w-9 h-9 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 group-hover:bg-blue-50 dark:group-hover:bg-blue-950 group-hover:text-blue-600 dark:group-hover:text-blue-400 flex items-center justify-center text-sm font-bold shrink-0 transition-colors">
                ←
              </div>
              <div class="min-w-0">
                <span class="text-[11px] text-slate-400 font-mono block">上一單元 (第 2-1 頁)</span>
                <span class="text-xs font-bold text-slate-800 dark:text-slate-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors truncate block">
                  第一節 法益保護原則——何謂法益？
                </span>
              </div>
            </button>

            <button onclick="switchView('part0-ch1-sec3')" class="group p-4 rounded-2xl border border-purple-500/40 hover:border-purple-500 bg-gradient-to-br from-purple-50/50 to-indigo-50/30 dark:from-purple-950/30 dark:to-indigo-950/20 text-right transition-all hover:-translate-y-0.5 shadow-sm hover:shadow-md flex items-center justify-between gap-3">
              <div class="min-w-0 text-left">
                <span class="text-[11px] text-purple-700 dark:text-purple-400 font-mono block font-bold">下一單元 (第 2-7 頁)</span>
                <span class="text-xs font-extrabold text-slate-900 dark:text-white group-hover:text-purple-700 dark:group-hover:text-purple-400 transition-colors truncate block">
                  第三節 罪責原則——付出代價的極限何在？ →
                </span>
              </div>
              <div class="w-9 h-9 rounded-xl bg-gradient-to-br from-purple-500 to-indigo-600 text-white flex items-center justify-center text-sm font-bold shrink-0 group-hover:scale-105 transition-transform shadow-md shadow-purple-500/30">
                ⚖️
              </div>
            </button>
          </div>

        </div>
`;
