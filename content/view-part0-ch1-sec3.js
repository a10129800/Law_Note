/**
 * view-part0-ch1-sec3.js
 * 第零篇 第一章 第三節 罪責原則——付出代價的極限何在？ (教材第 2-7 ~ 2-8 頁)
 * 圖二標準規範 (SECTION_DESIGN_GUIDE_IMAGE2.md) 旗艦視覺重構版
 */
window.APP_VIEWS = window.APP_VIEWS || {};
window.APP_VIEWS['viewPart0Ch1Sec3'] = window.APP_VIEWS['part0Ch1Sec3'] = `
        <!-- VIEW 8: 第零篇 第一章・第三節 罪責原則——付出代價的極限何在？ (教材第 2-7 ~ 2-8 頁) -->
        <div id="viewPart0Ch1Sec3" class="fade-enter hidden space-y-8">
          
          <!-- Breadcrumb & Back -->
          <div class="flex items-center justify-between gap-4 border-b border-slate-100 dark:border-white/[0.06] pb-3">
            <nav class="flex items-center gap-2 text-xs font-medium text-slate-400 flex-wrap">
              <button onclick="switchView('part-0')" class="hover:text-purple-500 transition-colors">第零篇</button>
              <span>/</span>
              <button onclick="switchView('part0-chapter-1')" class="hover:text-purple-500 transition-colors">第一章 刑法的運作原理</button>
              <span>/</span>
              <span class="text-purple-600 dark:text-purple-400 font-bold">第三節 罪責原則</span>
            </nav>
            <button onclick="switchView('part0-chapter-1')" class="text-xs text-slate-400 hover:text-purple-500 flex items-center gap-1 transition-colors shrink-0">
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
              </svg>
              <span>返回第一章總覽</span>
            </button>
          </div>

          <!-- Section Header -->
          <div class="space-y-2">
            <div class="flex items-center gap-2 text-purple-600 dark:text-purple-400 font-mono text-xs font-bold">
              <span>第零篇・第一章・第三節</span>
              <span class="px-2 py-0.5 rounded-md bg-purple-50 dark:bg-purple-950/40 text-[11px] border border-purple-200 dark:border-purple-900/50">教材第 2-7 ～ 2-8 頁 原文體系</span>
            </div>
            <h2 class="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
              第三節 罪責原則——付出代價的極限何在？
            </h2>
            <p class="text-xs sm:text-sm text-slate-800 dark:text-slate-200 font-medium leading-relaxed">
              刑罰以個人責任為前提。深入解析無罪責即無刑罰原則、罪刑相當原則、準強盜罪難以抗拒合憲限縮（釋字第 630 號），以及節制刑罰本質下有利人民之容許例外
            </p>
          </div>

          <!-- 一、罪責原則核心定義與憲法基石 -->
          <section id="sec-p0ch1-sec3-def" class="space-y-6 pt-2">
            <div class="flex items-center gap-3">
              <span class="w-2 h-6 rounded-full bg-purple-600"></span>
              <h3 class="text-lg sm:text-xl font-black text-slate-900 dark:text-white tracking-tight">
                一、罪責原則之核心法定定義與憲法基石（教材第 2-7 頁）
              </h3>
            </div>

            <div class="p-6 rounded-3xl border border-slate-200 dark:border-white/[0.08] bg-white dark:bg-[#101623] shadow-sm space-y-6">
              
              <!-- 旗艦卡片 1：罪責原則核心憲法位階 -->
              <div class="p-6 rounded-2xl bg-gradient-to-br from-purple-100 via-fuchsia-50 to-indigo-100 dark:from-[#2e1065] dark:via-[#1e1b4b] dark:to-[#0f172a] border-2 border-purple-400 dark:border-purple-500/80 border-l-[8px] border-l-purple-600 dark:border-l-purple-400 shadow-lg shadow-purple-500/15 space-y-5">
                
                <!-- 標頭列 -->
                <div class="flex items-center justify-between flex-wrap gap-2">
                  <div class="flex items-center gap-2.5">
                    <span class="text-2xl drop-shadow-sm">⚖️</span>
                    <div>
                      <span class="font-black text-sm sm:text-base text-purple-950 dark:text-purple-100 tracking-wide">
                        罪責原則（Schuldprinzip）
                      </span>
                      <span class="block text-[11px] font-mono font-bold text-purple-700 dark:text-purple-300 tracking-wider">
                        NULLA POENA SINE CULPA · PROPORTIONALITAS
                      </span>
                    </div>
                  </div>
                  <div class="flex items-center gap-2">
                    <span data-statute="630" class="text-xs font-mono font-black px-3 py-1 rounded-lg bg-purple-600 hover:bg-purple-700 text-white shadow-sm border border-purple-400 cursor-pointer transition-all hover:scale-105 active:scale-95 flex items-center gap-1" title="點擊檢視釋字第630號全文">
                      <span>⚖️</span> 釋字第 630 號
                    </span>
                    <span class="text-xs font-mono font-black px-3 py-1 rounded-lg bg-indigo-600 text-white shadow-sm border border-indigo-400">
                      教材第 2-7 頁
                    </span>
                  </div>
                </div>

                <!-- 釋字 630 號理由書核心金句：高對比純白卡片 + 亮紫導引線 -->
                <div class="p-4 sm:p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-purple-400/80 dark:border-purple-700/80 border-l-4 border-l-purple-600 shadow-md space-y-2">
                  <div class="flex items-center justify-between text-xs font-mono border-b border-purple-100 dark:border-slate-800 pb-2">
                    <span class="font-bold text-purple-800 dark:text-purple-300 flex items-center gap-1.5">
                      <span class="w-2 h-2 rounded-full bg-purple-600 animate-pulse"></span>
                      司法院釋字第 630 號解釋理由書權威揭櫫
                    </span>
                    <span class="px-2 py-0.5 rounded bg-purple-100 dark:bg-purple-900/60 text-purple-800 dark:text-purple-200 font-bold text-[11px]">
                      ★ 憲法法治國原則・代價極限
                    </span>
                  </div>
                  <p class="text-base sm:text-lg md:text-xl font-black text-purple-950 dark:text-purple-50 leading-relaxed font-serif tracking-wide py-1">
                    「刑罰以個人責任為前提，無責任即無刑罰；且刑罰之嚴苛程度，應與行為人責任之程度相當。」
                  </p>
                </div>

                <!-- 學理價值說明 -->
                <p class="text-xs sm:text-sm text-slate-800 dark:text-slate-200 leading-relaxed font-medium bg-white/70 dark:bg-slate-900/50 p-3.5 rounded-xl border border-purple-200/60 dark:border-purple-900/40">
                  罪責原則由<strong>應報思想</strong>導出，並與憲法法治國原則、第 8 條人身自由保障及第 23 條比例原則緊密相連。其揭示了國家刑罰權行使的<strong>絕對道德底線與代價極限</strong>——不能讓人民承擔超過其責任的過苛刑罰。
                </p>

                <!-- 🐣 【超亮眼白話文專區】罪責原則小白秒懂專區 -->
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
                          做錯事到底憑什麼抓我去關？30 秒白話搞懂「罪責原則」！
                        </h4>
                      </div>
                    </div>
                    <span class="text-xs font-bold text-amber-800 dark:text-amber-300 bg-amber-100 dark:bg-amber-900/60 px-2.5 py-1 rounded-lg border border-amber-300 dark:border-amber-700">
                      🛡️ 刑罰的良心天花板
                    </span>
                  </div>

                  <!-- 一句話白話金句 -->
                  <div class="p-3.5 sm:p-4 rounded-xl bg-white dark:bg-slate-900 border-2 border-amber-300 dark:border-amber-600 shadow-xs">
                    <div class="text-[11px] font-black text-amber-600 dark:text-amber-400 uppercase tracking-wider mb-1">
                      📢 一句話大白話翻譯
                    </div>
                    <p class="text-sm sm:text-base font-black text-slate-900 dark:text-white leading-relaxed">
                      👉「<span class="text-amber-600 dark:text-amber-400 underline decoration-amber-400 underline-offset-4">該罰多少就罰多少，絕不准拿大砲打小鳥！</span>有過錯才能罰；犯小錯絕不能判重刑，這就是國家行使公權力時的煞車皮！」
                    </p>
                  </div>

                  <!-- 趣味日常比喻：打碎碗盤比喻 -->
                  <div class="p-4 rounded-xl bg-amber-100/60 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800/60 space-y-2 text-xs sm:text-[13px] text-slate-800 dark:text-slate-200 leading-relaxed">
                    <div class="font-black text-amber-900 dark:text-amber-200 flex items-center gap-1.5 text-sm">
                      <span>🍽️</span>
                      <span>生活超有感比喻：洗碗不小心手滑打碎碗，爸媽把你逐出家門？</span>
                    </div>
                    <p>
                      想像你今天乖乖幫家裡洗碗，泡沫太滑不小心打破一隻瓷碗。如果爸媽衝過來把你痛扁一頓、沒收所有零用錢、甚至大吼要把你「逐出家門斷絕關係」，你一定會覺得爸媽瘋了：「<strong>我又不是故意砸碗！頂多賠個碗公錢，憑什麼下重手把我逐出家門？！</strong>」
                    </p>
                    <p class="text-amber-950 dark:text-amber-100 font-bold bg-white/80 dark:bg-slate-900/60 p-2.5 rounded-lg border border-amber-300/60">
                      💡 <strong>這就是「罪責原則」的真諦！</strong>刑法是國家最可怕的公權力屠刀，不能因為有人打破碗，國家就拿死刑、無期徒刑去砍人。犯多大的錯，就只能負多大的責任，不能讓人民為無辜或微不足道的事付出沉重代價！
                    </p>
                  </div>

                  <!-- 3 步驟檢驗卡 -->
                  <div class="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs">
                    <div class="p-3.5 rounded-xl bg-white dark:bg-slate-900 border-2 border-purple-300 dark:border-purple-700 space-y-1">
                      <span class="font-black text-purple-800 dark:text-purple-300 block">第 1 步：有責任才罰</span>
                      <span class="text-slate-700 dark:text-slate-200 font-medium">沒有故意、沒有過失、或根本無法期待遵法者，國家不准動用刑罰。</span>
                    </div>
                    <div class="p-3.5 rounded-xl bg-white dark:bg-slate-900 border-2 border-indigo-300 dark:border-indigo-700 space-y-1">
                      <span class="font-black text-indigo-800 dark:text-indigo-300 block">第 2 步：刑度相稱合比例</span>
                      <span class="text-slate-700 dark:text-slate-200 font-medium">小罪不能大罰，重罪不能輕罰。刑罰嚴苛程度必須與犯罪可責性相當。</span>
                    </div>
                    <div class="p-3.5 rounded-xl bg-white dark:bg-slate-900 border-2 border-emerald-300 dark:border-emerald-700 space-y-1">
                      <span class="font-black text-emerald-800 dark:text-emerald-300 block">第 3 步：良心煞車皮</span>
                      <span class="text-slate-700 dark:text-slate-200 font-medium">阻卻罪責（未滿14歲、精神障礙、禁止錯誤）全面出罪，保全人性尊嚴。</span>
                    </div>
                  </div>

                </div>

              </div>

            </div>
          </section>

          <!-- 二、罪責原則之雙重核心內涵 -->
          <section id="sec-p0ch1-sec3-dual-aspects" class="space-y-6 pt-2">
            <div class="flex items-center gap-3">
              <span class="w-2 h-6 rounded-full bg-purple-600"></span>
              <h3 class="text-lg sm:text-xl font-black text-slate-900 dark:text-white tracking-tight">
                二、罪責原則之雙重核心內涵（教材第 2-7 頁 原文圖解）
              </h3>
            </div>

            <div class="p-6 rounded-3xl border border-slate-200 dark:border-white/[0.08] bg-white dark:bg-[#101623] shadow-sm space-y-6">
              
              <!-- 雙重內涵對照網格 -->
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <!-- 內涵 1 -->
                <div class="p-5 rounded-2xl bg-gradient-to-br from-purple-100/90 via-fuchsia-50 to-purple-50/60 dark:from-[#2e1065] dark:to-[#1e1b4b] border-2 border-purple-400 dark:border-purple-500/80 border-l-4 border-l-purple-600 shadow-md space-y-2.5">
                  <div class="flex items-center justify-between">
                    <span class="font-black text-purple-950 dark:text-purple-100 flex items-center gap-1.5 text-sm sm:text-base">
                      <span class="w-6 h-6 rounded-lg bg-purple-600 text-white flex items-center justify-center font-mono font-black text-xs shadow-xs">①</span>
                      <span>無罪責即無刑罰原則</span>
                    </span>
                    <span class="text-[10px] text-purple-700 dark:text-purple-300 font-mono font-bold px-2 py-0.5 rounded bg-white/80 dark:bg-slate-900/60 border border-purple-200">Nulla poena sine culpa</span>
                  </div>
                  <p class="text-slate-800 dark:text-slate-200 leading-relaxed font-medium text-xs sm:text-[12.5px]">
                    刑罰之成立必須以個人具備非難責任為前提。若行為人欠缺期待可能性（超法定阻卻罪責）、具法定阻卻罪責事由（§ 18 未滿 14 歲、§ 19 精神障礙、§ 16 不可避免之禁止錯誤），<strong>國家絕對不得予以科處任何刑罰</strong>。
                  </p>
                  <div class="text-[11px] font-bold text-purple-900 dark:text-purple-200 bg-white/70 dark:bg-slate-900/60 p-2 rounded-lg border border-purple-300 dark:border-purple-800">
                    💡 核心精神：不能苛責沒有過失或心智缺陷的人，無責任就不能用刑法硬抓！
                  </div>
                </div>

                <!-- 內涵 2 -->
                <div class="p-5 rounded-2xl bg-gradient-to-br from-indigo-100/90 via-blue-50 to-indigo-50/60 dark:from-[#1e1b4b] dark:to-[#0f172a] border-2 border-indigo-400 dark:border-indigo-500/80 border-l-4 border-l-indigo-600 shadow-md space-y-2.5">
                  <div class="flex items-center justify-between">
                    <span class="font-black text-indigo-950 dark:text-indigo-100 flex items-center gap-1.5 text-sm sm:text-base">
                      <span class="w-6 h-6 rounded-lg bg-indigo-600 text-white flex items-center justify-center font-mono font-black text-xs shadow-xs">②</span>
                      <span>罪刑相當原則（比例原則）</span>
                    </span>
                    <span class="text-[10px] text-indigo-700 dark:text-indigo-300 font-mono font-bold px-2 py-0.5 rounded bg-white/80 dark:bg-slate-900/60 border border-indigo-200">Proportionality</span>
                  </div>
                  <p class="text-slate-800 dark:text-slate-200 leading-relaxed font-medium text-xs sm:text-[12.5px]">
                    刑罰之嚴苛程度必須與行為人的不法內涵及可責性相稱。易律師考前口訣：<strong>「小罪不能大罰，重罪不能輕罰」</strong>。刑度必須合乎比例原則，嚴格禁止過苛處罰與手段目的失衡。
                  </p>
                  <div class="text-[11px] font-bold text-indigo-900 dark:text-indigo-200 bg-white/70 dark:bg-slate-900/60 p-2 rounded-lg border border-indigo-300 dark:border-indigo-800">
                    💡 核心精神：判刑要像精密儀器秤重，偷一顆糖不能判十年，殺人不能罰兩千！
                  </div>
                </div>
              </div>

              <!-- 🐣 【超亮眼白話文專區】雙重內涵小白秒懂專區 -->
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
                        精神病患砍人判無罪、偷麵包被判十年，為什麼全民會氣炸？
                      </h4>
                    </div>
                  </div>
                  <span class="text-xs font-bold text-amber-800 dark:text-amber-300 bg-amber-100 dark:bg-amber-900/60 px-2.5 py-1 rounded-lg border border-amber-300 dark:border-amber-700">
                    🎯 雙軌煞車機制
                  </span>
                </div>

                <!-- 一句話白話金句 -->
                <div class="p-3.5 sm:p-4 rounded-xl bg-white dark:bg-slate-900 border-2 border-amber-300 dark:border-amber-600 shadow-xs">
                  <div class="text-[11px] font-black text-amber-600 dark:text-amber-400 uppercase tracking-wider mb-1">
                    📢 一句話大白話翻譯
                  </div>
                  <p class="text-sm sm:text-base font-black text-slate-900 dark:text-white leading-relaxed">
                    👉「<span class="text-amber-600 dark:text-amber-400 underline decoration-amber-400 underline-offset-4">無責任不罰是理智，小罪不重罰是比例！</span>刑法不是發洩仇恨的絞肉機，而是精確衡量責任的道德天平！」
                  </p>
                </div>

                <!-- 生活比喻對照 -->
                <div class="p-4 rounded-xl bg-amber-100/60 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800/60 space-y-2 text-xs sm:text-[13px] text-slate-800 dark:text-slate-200 leading-relaxed">
                  <div class="font-black text-amber-900 dark:text-amber-200 flex items-center gap-1.5 text-sm">
                    <span>⚖️</span>
                    <span>生活超有感比喻：【精準的天平秤重：10 克的偷竊不能壓上 100 噸的鐵砧】</span>
                  </div>
                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                    <div class="p-3 rounded-xl bg-white dark:bg-slate-900 border-2 border-purple-300 dark:border-purple-700 shadow-2xs space-y-1">
                      <span class="font-black text-purple-900 dark:text-purple-200 block text-xs sm:text-[13px]">① 無罪責不罰（發病中之人）：</span>
                      <p class="text-slate-800 dark:text-slate-200 text-xs font-medium leading-relaxed">
                        心智完全喪失、分不清現實的人動手，就像失控的天災巨石滾落。刑法處罰是為了「譴責道德惡意」，對沒有辨識能力的人懲罰毫無意義，應該送醫療監護而非監獄！
                      </p>
                    </div>
                    <div class="p-3 rounded-xl bg-white dark:bg-slate-900 border-2 border-indigo-300 dark:border-indigo-700 shadow-2xs space-y-1">
                      <span class="font-black text-indigo-900 dark:text-indigo-200 block text-xs sm:text-[13px]">② 罪刑相當（處罰與行為相稱）：</span>
                      <p class="text-slate-800 dark:text-slate-200 text-xs font-medium leading-relaxed">
                        偷一顆茶葉蛋判五年，跟持槍搶銀行判五年，如果都處以同樣刑度，就完全失去差別警惕效果。小罪大罰既不人道，更會逼小偷鋌而走險去殺人滅口！
                      </p>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </section>

          <!-- 三、實例演練【案例 1-8】：準強盜罪與罪刑相當性（釋字第 630 號） -->
          <section id="sec-p0ch1-sec3-case-1-8" class="space-y-6 pt-2">
            <div class="flex items-center gap-3">
              <span class="w-2 h-6 rounded-full bg-indigo-600"></span>
              <h3 class="text-lg sm:text-xl font-black text-slate-900 dark:text-white tracking-tight">
                三、實例演練【案例 1-8】：準強盜罪與罪刑相當性（教材第 2-7 ～ 2-8 頁）
              </h3>
            </div>

            <div class="p-6 rounded-3xl border border-slate-200 dark:border-white/[0.08] bg-white dark:bg-[#101623] shadow-sm space-y-6">
              
              <!-- 案例 1-8 旗艦卡片 -->
              <div id="case-card-0-1-8" data-case="0-1-8" class="case-card p-6 rounded-2xl border-2 border-indigo-400 dark:border-indigo-500/80 border-l-[8px] border-l-indigo-600 dark:border-l-indigo-400 bg-gradient-to-br from-indigo-50/90 via-purple-50/40 to-slate-50/60 dark:from-[#131138] dark:to-[#0d1424] shadow-md shadow-indigo-500/10 space-y-5 transition-all">
                
                <!-- 標頭列 -->
                <div class="flex items-center justify-between border-b border-indigo-200/80 dark:border-indigo-800/60 pb-3 flex-wrap gap-2">
                  <div class="flex items-center gap-2.5">
                    <span class="px-3 py-1 rounded-lg bg-indigo-600 text-white font-mono text-xs font-black shadow-xs">
                      案例 1-8
                    </span>
                    <h4 class="text-sm sm:text-base font-black text-slate-900 dark:text-white">
                      準強盜罪強暴脅迫之合憲性限縮——釋字第 630 號（教材第 2-7 ～ 2-8 頁）
                    </h4>
                  </div>
                  <div class="flex items-center gap-2">
                    <span data-statute="329" class="text-xs font-mono font-black px-3 py-1 rounded-lg bg-indigo-700 hover:bg-indigo-800 text-white shadow-xs border border-indigo-400 cursor-pointer transition-all hover:scale-105 active:scale-95 flex items-center gap-1" title="點擊檢視刑法第329條全文">
                      <span>§</span> 329 準強盜罪
                    </span>
                    <span data-statute="630" class="text-xs font-mono font-black px-3 py-1 rounded-lg bg-purple-700 hover:bg-purple-800 text-white shadow-xs border border-purple-400 cursor-pointer transition-all hover:scale-105 active:scale-95 flex items-center gap-1" title="點擊檢視釋字第630號全文">
                      <span>⚖️</span> 釋字 630 號
                    </span>
                    <button type="button" onclick="copyCaseNote('0-1-8')" class="copy-case-btn text-xs px-3 py-1 rounded-lg bg-white dark:bg-slate-800 border-2 border-slate-300 dark:border-slate-700 text-slate-800 dark:text-slate-100 hover:text-indigo-600 font-bold shadow-xs transition-all flex items-center gap-1.5 cursor-pointer hover:border-indigo-400">
                      <span>📋</span><span>複製爭點筆記</span>
                    </button>
                  </div>
                </div>

                <!-- 案件事實背景：高對比純白卡片 + 亮藍導引邊條 -->
                <div class="p-4 rounded-xl bg-white dark:bg-slate-900 border-2 border-indigo-300 dark:border-indigo-800 border-l-4 border-l-indigo-600 shadow-xs text-xs sm:text-[13px] text-slate-800 dark:text-slate-100 leading-relaxed space-y-1.5">
                  <div class="font-black text-indigo-900 dark:text-indigo-300 flex items-center gap-1.5 text-xs sm:text-sm">
                    <span>📌</span>
                    <span>案件事實背景：路邊牽走腳踏車被抓衣領隨手輕推案</span>
                  </div>
                  <p>
                    竊賊甲在路邊行竊乙的腳踏車得手，牽車欲離去時被失主乙發現。乙衝上前伸手抓住甲的衣領大喊抓賊。甲為了掙脫脫身，隨手「輕推」了乙一下，乙腳步踉蹌但未跌倒亦未受傷，甲趁隙騎車離去。檢察官依刑法第 329 條準強盜罪起訴（以強盜論，法定刑為五年以上有期徒刑）。
                  </p>
                </div>

                <!-- 深度爭點與違憲疑慮分析 (紅 vs 綠) -->
                <div class="grid grid-cols-1 md:grid-cols-2 gap-3.5 text-xs sm:text-[12.5px]">
                  
                  <!-- 違憲失衡疑慮 (紅) -->
                  <div class="p-4 rounded-xl bg-gradient-to-br from-rose-100/90 via-pink-50 to-rose-50 dark:from-[#331118] dark:to-[#200b0f] border-2 border-rose-400 dark:border-rose-600 border-l-4 border-l-rose-600 shadow-xs space-y-2">
                    <span class="font-black text-rose-900 dark:text-rose-200 flex items-center gap-1.5 text-xs sm:text-sm">
                      <span class="text-base">⚠️</span>
                      <span>舊法字面爭點：小罪大罰、輕重失衡</span>
                    </span>
                    <p class="text-rose-950 dark:text-rose-100 leading-relaxed font-medium">
                      刑法 § 328 普通強盜罪手段必須達<strong>「至使不能抗拒」</strong>；但 § 329 字面上卻只寫「當場施以強暴脅迫」。若小偷僅輕推一下、甩開手脫身，就被直接依強盜罪論處<strong>五年以上有期徒刑</strong>，輕重嚴重失衡，嚴重牴觸罪刑相當原則！
                    </p>
                    <div class="text-[11px] font-bold text-rose-800 dark:text-rose-300 bg-white/70 dark:bg-slate-900/60 p-2 rounded-lg border border-rose-300 dark:border-rose-800">
                      ❌ 痛點：隨手推一下等同拿槍抵頭搶劫？小偷甩手脫身就要關五年以上，違反比例原則！
                    </div>
                  </div>

                  <!-- 釋字 630 號關鍵解方 (綠) -->
                  <div class="p-4 rounded-xl bg-gradient-to-br from-emerald-100/90 via-teal-50 to-emerald-50 dark:from-[#0d2a1f] dark:to-[#071a13] border-2 border-emerald-400 dark:border-emerald-600 border-l-4 border-l-emerald-600 shadow-xs space-y-2">
                    <span class="font-black text-emerald-900 dark:text-emerald-200 flex items-center gap-1.5 text-xs sm:text-sm">
                      <span class="text-base">✓</span>
                      <span>釋字第 630 號：合憲性限縮解釋</span>
                    </span>
                    <p class="text-emerald-950 dark:text-emerald-100 leading-relaxed font-medium">
                      大法官宣告：準強盜罪之強暴、脅迫手段，在客觀上必須<strong>「達於使人難以抗拒之程度」</strong>，使其不法內涵與可責性實質等同於強盜罪，始得「以強盜論」！如此方能符合憲法第 23 條比例原則與罪刑相當原則。
                    </p>
                    <div class="text-[11px] font-bold text-emerald-800 dark:text-emerald-300 bg-white/70 dark:bg-slate-900/60 p-2 rounded-lg border border-emerald-300 dark:border-emerald-800">
                      ⭕ 裁判結論：甲隨手輕推客觀上未達「難以抗拒」，不成立準強盜罪！僅成立普通竊盜罪！
                    </div>
                  </div>

                </div>

                <!-- 深度對照矩陣表格 -->
                <div class="space-y-2 pt-1">
                  <div class="text-xs font-black text-slate-800 dark:text-slate-200 flex items-center gap-1.5">
                    <span>📊</span>
                    <span>強盜罪 vs 舊準強盜罪字面 vs 釋字 630 號合憲限縮三向對照矩陣</span>
                  </div>
                  <div class="overflow-x-auto rounded-2xl border-2 border-slate-300 dark:border-slate-700 shadow-sm">
                    <table class="w-full text-left text-xs border-collapse min-w-[620px]">
                      <thead>
                        <tr class="bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white border-b-2 border-slate-300 dark:border-slate-700">
                          <th class="py-2.5 px-3 font-black w-1/5">比較項目</th>
                          <th class="py-2.5 px-3 font-black w-4/15 text-indigo-700 dark:text-indigo-300">① 普通強盜罪（§ 328）</th>
                          <th class="py-2.5 px-3 font-black w-4/15 text-rose-700 dark:text-rose-300">② 舊法準強盜字面（§ 329）</th>
                          <th class="py-2.5 px-3 font-black w-4/15 text-emerald-700 dark:text-emerald-300 bg-emerald-500/10">③ 釋字 630 合憲限縮 ⭐</th>
                        </tr>
                      </thead>
                      <tbody class="divide-y divide-slate-200 dark:divide-slate-800 text-[11.5px] text-slate-800 dark:text-slate-200">
                        <tr>
                          <td class="py-2.5 px-3 font-black bg-slate-50 dark:bg-slate-900">行為時手段門檻</td>
                          <td class="py-2.5 px-3 font-medium">至使不能抗拒（壓制意思自由）</td>
                          <td class="py-2.5 px-3 font-medium text-rose-600">任何強暴脅迫（推一下亦包含）</td>
                          <td class="py-2.5 px-3 font-black text-emerald-900 dark:text-emerald-300 bg-emerald-500/10">客觀上達「難以抗拒之程度」</td>
                        </tr>
                        <tr>
                          <td class="py-2.5 px-3 font-black bg-slate-50 dark:bg-slate-900">法定刑罰幅度</td>
                          <td class="py-2.5 px-3 font-medium">五年以上有期徒刑</td>
                          <td class="py-2.5 px-3 font-medium text-rose-600">以強盜論（五年以上有期徒刑）</td>
                          <td class="py-2.5 px-3 font-black text-emerald-900 dark:text-emerald-300 bg-emerald-500/10">五年以上（實質可責性相稱）</td>
                        </tr>
                        <tr>
                          <td class="py-2.5 px-3 font-black bg-slate-50 dark:bg-slate-900">案例甲輕推一下</td>
                          <td class="py-2.5 px-3 font-bold text-slate-500">不適用（非以強暴手段取財）</td>
                          <td class="py-2.5 px-3 font-bold text-rose-600">❌ 該當準強盜（關 5 年起跳！）</td>
                          <td class="py-2.5 px-3 font-black text-emerald-700 dark:text-emerald-400 bg-emerald-500/10">⭕ 不成立準強盜（未達難以抗拒）</td>
                        </tr>
                        <tr>
                          <td class="py-2.5 px-3 font-black bg-slate-50 dark:bg-slate-900">憲法合憲性評價</td>
                          <td class="py-2.5 px-3 font-bold text-emerald-600">合憲</td>
                          <td class="py-2.5 px-3 font-bold text-rose-600">違憲失衡（小罪大罰）</td>
                          <td class="py-2.5 px-3 font-black text-emerald-700 dark:text-emerald-400 bg-emerald-500/10">合憲性限縮保障人身自由</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <!-- 🐣 【超亮眼白話文專區】案例 1-8 小白秒懂專區 -->
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
                          小偷被失主抓衣領隨手推開，直接當強盜判 5 年起跳合不合理？
                        </h4>
                      </div>
                    </div>
                    <span class="text-xs font-bold text-amber-800 dark:text-amber-300 bg-amber-100 dark:bg-amber-900/60 px-2.5 py-1 rounded-lg border border-amber-300 dark:border-amber-700">
                      🎯 準強盜合憲限縮
                    </span>
                  </div>

                  <!-- 一句話白話金句 -->
                  <div class="p-3.5 sm:p-4 rounded-xl bg-white dark:bg-slate-900 border-2 border-amber-300 dark:border-amber-600 shadow-xs">
                    <div class="text-[11px] font-black text-amber-600 dark:text-amber-400 uppercase tracking-wider mb-1">
                      📢 一句話大白話翻譯
                    </div>
                    <p class="text-sm sm:text-base font-black text-slate-900 dark:text-white leading-relaxed">
                      👉「<span class="text-amber-600 dark:text-amber-400 underline decoration-amber-400 underline-offset-4">拿西瓜刀架在脖子上才叫強盜，甩開抓衣領的手只是脫身！</span>拿判強盜的重刑去罰輕推，就是典型的小罪大罰！大法官設下『難以抗拒』門檻才合憲！」
                    </p>
                  </div>

                  <!-- 趣味日常比喻 -->
                  <div class="p-4 rounded-xl bg-amber-100/60 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800/60 space-y-2 text-xs sm:text-[13px] text-slate-800 dark:text-slate-200 leading-relaxed">
                    <div class="font-black text-amber-900 dark:text-amber-200 flex items-center gap-1.5 text-sm">
                      <span>🥊</span>
                      <span>生活超有感比喻：【拿槍抵頭搶劫 vs 被抓衣領掙脫推一下】</span>
                    </div>
                    <p class="text-slate-800 dark:text-slate-200 font-medium">
                      想像強盜罪是「拿西瓜刀指著你的頭叫你把錢交出來」，被害人完全嚇傻無法反抗；而準強盜罪是「小偷偷了腳踏車想溜，失主抓著衣角，小偷輕輕推開失主逃跑」。如果法官說：「你推了失主一下，這叫強暴脅迫，所以你等同拿西瓜刀搶劫，判你關五年起跳！」這不是荒謬至極嗎？
                    </p>
                    <p class="text-amber-950 dark:text-amber-100 font-bold bg-white/80 dark:bg-slate-900/60 p-2.5 rounded-lg border border-amber-300/60">
                      💡 <strong>大法官釋字第 630 號的英明決定！</strong>大法官說：不能照字面亂抓！小偷動手動腳，必須激烈到「讓對方根本沒辦法反抗（難以抗拒）」的程度，才可以算強盜！隨手推一下頂多算普通偷竊，絕不能重判五年！
                    </p>
                  </div>

                  <!-- 3 步驟口訣卡 -->
                  <div class="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs">
                    <div class="p-3.5 rounded-xl bg-white dark:bg-slate-900 border-2 border-indigo-300 dark:border-indigo-700 space-y-1">
                      <span class="font-black text-indigo-800 dark:text-indigo-300 block">口訣 ㈠：輕推非強盜</span>
                      <span class="text-slate-700 dark:text-slate-200 font-medium">甩手掙脫、輕推一下未達「難以抗拒」，不成立刑法 § 329 準強盜罪。</span>
                    </div>
                    <div class="p-3.5 rounded-xl bg-white dark:bg-slate-900 border-2 border-purple-300 dark:border-purple-700 space-y-1">
                      <span class="font-black text-purple-800 dark:text-purple-300 block">口訣 ㈡：難以抗拒才算</span>
                      <span class="text-slate-700 dark:text-slate-200 font-medium">釋字 630 號合憲限縮，手段強度必須與普通強盜之壓制反抗相當。</span>
                    </div>
                    <div class="p-3.5 rounded-xl bg-white dark:bg-slate-900 border-2 border-emerald-300 dark:border-emerald-700 space-y-1">
                      <span class="font-black text-emerald-800 dark:text-emerald-300 block">口訣 ㈢：普通竊盜論處</span>
                      <span class="text-slate-700 dark:text-slate-200 font-medium">未達準強盜門檻者，回歸 § 320 普通竊盜罪論處，符合罪刑相當！</span>
                    </div>
                  </div>

                </div>

              </div>
            </div>
          </section>

          <!-- 四、解題提示：節制刑罰發動之本質——有利於人民者皆容許！ -->
          <section id="sec-p0ch1-sec3-tips-favor" class="space-y-6 pt-2">
            <div class="flex items-center gap-3">
              <span class="w-2 h-6 rounded-full bg-amber-500"></span>
              <h3 class="text-lg sm:text-xl font-black text-slate-900 dark:text-white tracking-tight">
                四、解題提示：節制刑罰發動之本質——有利於人民者皆容許！（教材第 2-8 頁）
              </h3>
            </div>

            <div class="p-6 rounded-3xl border border-slate-200 dark:border-white/[0.08] bg-white dark:bg-[#101623] shadow-sm space-y-6">
              
              <!-- 旗艦卡片 4：解題提示方法論 -->
              <div class="p-6 rounded-2xl bg-gradient-to-br from-amber-100 via-orange-50 to-indigo-100 dark:from-[#451a03]/70 dark:via-[#1e1b4b]/60 dark:to-[#0f172a] border-2 border-amber-400 dark:border-amber-500/80 border-l-[8px] border-l-amber-600 dark:border-l-amber-400 shadow-lg shadow-amber-500/15 space-y-5">
                
                <div class="flex items-center justify-between flex-wrap gap-2">
                  <div class="flex items-center gap-2.5">
                    <span class="text-2xl drop-shadow-sm">💡</span>
                    <div>
                      <span class="font-black text-sm sm:text-base text-amber-950 dark:text-amber-100 tracking-wide">
                        陳奕廷（易律師）解題提示：刑法法理的終極心法
                      </span>
                      <span class="block text-[11px] font-mono font-bold text-amber-700 dark:text-amber-300 tracking-wider uppercase">
                        FAVORABILIA AMPLIANDA, ODIOSA RESTRINGENDA
                      </span>
                    </div>
                  </div>
                  <div class="flex items-center gap-2">
                    <span class="text-xs font-mono font-black px-3 py-1 rounded-lg bg-amber-600 text-white shadow-sm border border-amber-400">
                      教材第 2-8 頁 解題提示
                    </span>
                    <span class="text-xs font-mono font-black px-3 py-1 rounded-lg bg-emerald-600 text-white shadow-sm border border-emerald-400">
                      終極破題鑰匙
                    </span>
                  </div>
                </div>

                <!-- 教材原文原汁原味重現卡 -->
                <div class="p-4 sm:p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-amber-400/80 dark:border-amber-700/80 border-l-4 border-l-amber-600 shadow-md space-y-2">
                  <div class="flex items-center justify-between text-xs font-mono border-b border-amber-100 dark:border-slate-800 pb-2">
                    <span class="font-bold text-amber-800 dark:text-amber-300 flex items-center gap-1.5">
                      <span class="w-2 h-2 rounded-full bg-amber-600 animate-pulse"></span>
                      破題關鍵解惑
                    </span>
                    <span class="px-2 py-0.5 rounded bg-amber-100 dark:bg-amber-900/60 text-amber-800 dark:text-amber-200 font-bold text-[11px]">
                      ★ 超法定事由之合憲性
                    </span>
                  </div>
                  <p class="text-xs sm:text-sm md:text-base font-black text-slate-900 dark:text-slate-100 leading-relaxed font-serif tracking-wide py-1">
                    「許多初學者常困惑：刑法不是明定『罪刑法定』、『禁止習慣法』、『禁止類推適用』嗎？那為什麼刑法上還會承認<span class="text-amber-700 dark:text-amber-300 underline decoration-amber-400 underline-offset-4 font-black">『超法定阻卻違法事由（如被害人承諾）』與『超法定阻卻罪責事由（如期待可能性欠缺）』</span>呢？這難道沒有違反罪刑法定原則嗎？<br>
                    核心破題關鍵：<strong>刑法規範的本質在於『節制國家刑罰權』</strong>！如果個案處理的結果是<strong>對人民有利（出罪、阻卻不法、阻卻罪責、免除刑罰）</strong>，那麼根本就不存在任何『防範國家侵害人民』的理由！」
                  </p>
                </div>

                <!-- 有利 vs 不利 絕對雙向對照矩陣 -->
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  
                  <!-- 不利於人民 (紅) -->
                  <div class="p-4 rounded-xl bg-gradient-to-br from-rose-100/90 via-pink-50 to-rose-50 dark:from-[#331118] dark:to-[#200b0f] border-2 border-rose-400 dark:border-rose-600 border-l-4 border-l-rose-600 shadow-xs space-y-2">
                    <div class="flex items-center justify-between font-black text-rose-900 dark:text-rose-200">
                      <span class="flex items-center gap-1.5 text-sm">
                        <span>🚫</span><span>若個案結果「不利於人民」</span>
                      </span>
                      <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-rose-600 text-white font-bold">絕對嚴格禁止</span>
                    </div>
                    <ul class="space-y-1.5 text-rose-950 dark:text-rose-100 text-[11.5px] leading-relaxed list-disc list-inside font-medium">
                      <li>禁止以習慣法創設罪名或加重刑罰</li>
                      <li>禁止不利於行為人之類推適用</li>
                      <li>禁止不具明確性之模糊條文規定</li>
                      <li>禁止不利於行為人之溯及既往處罰</li>
                    </ul>
                    <div class="text-[11px] text-rose-800 dark:text-rose-300 font-bold pt-1 border-t border-rose-200 dark:border-rose-800">
                      ➔ 恪遵罪刑法定原則，全面封堵國家濫權可能！
                    </div>
                  </div>

                  <!-- 有利於人民 (綠) -->
                  <div class="p-4 rounded-xl bg-gradient-to-br from-emerald-100/90 via-teal-50 to-emerald-50 dark:from-[#0d2a1f] dark:to-[#071a13] border-2 border-emerald-400 dark:border-emerald-600 border-l-4 border-l-emerald-600 shadow-xs space-y-2">
                    <div class="flex items-center justify-between font-black text-emerald-900 dark:text-emerald-200">
                      <span class="flex items-center gap-1.5 text-sm">
                        <span>✓</span><span>若個案結果「有利於人民」</span>
                      </span>
                      <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-600 text-white font-bold">全面容許肯定</span>
                    </div>
                    <ul class="space-y-1.5 text-emerald-950 dark:text-emerald-100 text-[11.5px] leading-relaxed list-disc list-inside font-medium">
                      <li><strong>容許有利之法理與習慣法</strong>：創設超法定阻卻違法與罪責事由</li>
                      <li><strong>容許有利之類推適用</strong>：如類推正當防衛、緊急避難規定出罪</li>
                      <li><strong>容許有利之溯及既往</strong>：刑法 § 2 Ⅰ 但書「從舊從輕原則」</li>
                      <li><strong>容許有利之合憲限縮</strong>：如釋字 630 號限縮強暴脅迫要件</li>
                    </ul>
                    <div class="text-[11px] text-emerald-800 dark:text-emerald-300 font-bold pt-1 border-t border-emerald-200 dark:border-emerald-800">
                      ➔ 人權保障至上，無節制國家刑罰發動之必要！
                    </div>
                  </div>

                </div>

              </div>

              <!-- 🐣 【超亮眼白話文專區】解題提示小白秒懂專區 -->
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
                        法條明明寫禁止類推、禁止習慣法，為什麼「幫被告脫罪」就可以類推？
                      </h4>
                    </div>
                  </div>
                  <span class="text-xs font-bold text-amber-800 dark:text-amber-300 bg-amber-100 dark:bg-amber-900/60 px-2.5 py-1 rounded-lg border border-amber-300 dark:border-amber-700">
                    🎯 單向防盜門原理
                  </span>
                </div>

                <!-- 一句話白話金句 -->
                <div class="p-3.5 sm:p-4 rounded-xl bg-white dark:bg-slate-900 border-2 border-amber-300 dark:border-amber-600 shadow-xs">
                  <div class="text-[11px] font-black text-amber-600 dark:text-amber-400 uppercase tracking-wider mb-1">
                    📢 一句話大白話翻譯
                  </div>
                  <p class="text-sm sm:text-base font-black text-slate-900 dark:text-white leading-relaxed">
                    👉「<span class="text-amber-600 dark:text-amber-400 underline decoration-amber-400 underline-offset-4">刑法的大門是『單向逃生門』：只擋國家進來抓人，不擋人民向外逃生！</span>所有嚴格禁令都是為了管住國家的手，只要是對人民有利的，通通綠燈放行！」
                  </p>
                </div>

                <!-- 趣味日常比喻 -->
                <div class="p-4 rounded-xl bg-amber-100/60 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800/60 space-y-2 text-xs sm:text-[13px] text-slate-800 dark:text-slate-200 leading-relaxed">
                  <div class="font-black text-amber-900 dark:text-amber-200 flex items-center gap-1.5 text-sm">
                    <span>🚪</span>
                    <span>生活超有感比喻：【銀行金庫的單向防盜門】</span>
                  </div>
                  <p class="text-slate-800 dark:text-slate-200 font-medium">
                    想像刑法的各項禁令（禁止類推、禁止習慣法、禁止溯及既往）就像銀行金庫的「厚重防盜門」，它是專門設計用來<strong>「防止外面的人（國家公權力）隨便闖進來搶走人民的自由財產」</strong>。但如果裡面的人遇到火災要逃生，這扇門當然可以隨時推開！你不能跟逃生的人說：「不行！這扇門是防盜門，規定不能隨便開，你給我留在裡面被燒！」這不是本末倒置嗎？
                  </p>
                  <p class="text-amber-950 dark:text-amber-100 font-bold bg-white/80 dark:bg-slate-900/60 p-2.5 rounded-lg border border-amber-300/60">
                    💡 <strong>解題永遠不敗的心法！</strong>只要看到任何刑法問題，先問結果是「把人民送進監獄」還是「幫人民脫罪」？送進監獄的，一律從嚴審查、絕對禁止；幫人民脫罪的，全面容許！
                  </p>
                </div>

                <!-- 3 步驟口訣卡 -->
                <div class="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs">
                  <div class="p-3.5 rounded-xl bg-white dark:bg-slate-900 border-2 border-rose-300 dark:border-rose-700 space-y-1">
                    <span class="font-black text-rose-800 dark:text-rose-300 block">口訣 ㈠：不利皆禁止</span>
                    <span class="text-slate-700 dark:text-slate-200 font-medium">凡是增加人民刑責、創設新罪名、不利類推或溯及者，絕對違憲禁止！</span>
                  </div>
                  <div class="p-3.5 rounded-xl bg-white dark:bg-slate-900 border-2 border-emerald-300 dark:border-emerald-700 space-y-1">
                    <span class="font-black text-emerald-800 dark:text-emerald-300 block">口訣 ㈡：有利皆容許</span>
                    <span class="text-slate-700 dark:text-slate-200 font-medium">凡是出罪、阻卻不法、阻卻罪責、減輕免除刑責者，法理習慣皆可適用！</span>
                  </div>
                  <div class="p-3.5 rounded-xl bg-white dark:bg-slate-900 border-2 border-amber-300 dark:border-amber-700 space-y-1">
                    <span class="font-black text-amber-800 dark:text-amber-300 block">口訣 ㈢：單向保護原則</span>
                    <span class="text-slate-700 dark:text-slate-200 font-medium">刑法本質是防止國家侵害人民，而不是國家保護自己的武器！</span>
                  </div>
                </div>

              </div>

            </div>
          </section>

          <!-- 五、第一章 刑法運作四大支柱全景整合對照與全章完結 -->
          <section id="sec-p0ch1-sec3-chapter1-summary" class="space-y-6 pt-2">
            <div class="flex items-center gap-3">
              <span class="w-2 h-6 rounded-full bg-indigo-600"></span>
              <h3 class="text-lg sm:text-xl font-black text-slate-900 dark:text-white tracking-tight">
                五、第一章 刑法運作四大支柱全景整合對照與全章完結（教材第 2-1 ～ 2-8 頁）
              </h3>
            </div>

            <div class="p-6 rounded-3xl border border-slate-200 dark:border-white/[0.08] bg-white dark:bg-[#101623] shadow-sm space-y-6">
              
              <div class="space-y-2">
                <h4 class="text-sm sm:text-base font-black text-slate-900 dark:text-white flex items-center gap-2">
                  <span class="text-indigo-600 text-lg">🏛️</span>
                  <span>刑法四大支柱體系總覽（陳奕廷易律師精闢歸納）</span>
                </h4>
                <p class="text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-medium leading-relaxed">
                  至此，教材第零篇第一章【刑法的運作原理】三大節四大支柱全數完備！掌握這四根大柱子，就掌握了整個刑法哲學的骨架：
                </p>
              </div>

              <!-- 四大支柱全景表格 (高對比實心邊框) -->
              <div class="overflow-x-auto rounded-2xl border-2 border-slate-300 dark:border-slate-700 bg-white dark:bg-[#101623] shadow-sm">
                <table class="w-full text-left border-collapse text-xs">
                  <thead>
                    <tr class="bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white border-b-2 border-slate-300 dark:border-slate-700 font-black">
                      <th class="p-3 w-1/5">支柱名稱</th>
                      <th class="p-3 border-l-2 border-slate-200 dark:border-slate-700 w-1/5">核心提問</th>
                      <th class="p-3 border-l-2 border-slate-200 dark:border-slate-700 w-1/5">思想淵源</th>
                      <th class="p-3 border-l-2 border-slate-200 dark:border-slate-700 w-2/5">核心法律要求與規範功能</th>
                    </tr>
                  </thead>
                  <tbody class="divide-y-2 divide-slate-200 dark:divide-slate-800 text-slate-800 dark:text-slate-200 font-medium text-[11.5px]">
                    <tr class="hover:bg-slate-50 dark:hover:bg-slate-850/50">
                      <td class="p-3 font-black text-indigo-700 dark:text-indigo-400 whitespace-nowrap bg-indigo-50/50 dark:bg-indigo-950/20">
                        ① 法益保護原則
                      </td>
                      <td class="p-3 border-l-2 border-slate-200 dark:border-slate-800 font-black text-slate-900 dark:text-white">
                        刑法的目的何在？
                      </td>
                      <td class="p-3 border-l-2 border-slate-200 dark:border-slate-800">
                        生活利益保全
                      </td>
                      <td class="p-3 border-l-2 border-slate-200 dark:border-slate-800 leading-relaxed">
                        保護重要生活利益（生命、身體、自由、財產、社會、國家）；具積極保護與消極界限機能；為構成要件解釋指導原則。
                      </td>
                    </tr>
                    <tr class="hover:bg-slate-50 dark:hover:bg-slate-850/50">
                      <td class="p-3 font-black text-blue-700 dark:text-blue-400 whitespace-nowrap bg-blue-50/50 dark:bg-blue-950/20">
                        ② 最後手段性原則
                      </td>
                      <td class="p-3 border-l-2 border-slate-200 dark:border-slate-800 font-black text-slate-900 dark:text-white">
                        刑法在何種情況下發動？
                      </td>
                      <td class="p-3 border-l-2 border-slate-200 dark:border-slate-800">
                        刑罰謙抑思想
                      </td>
                      <td class="p-3 border-l-2 border-slate-200 dark:border-slate-800 leading-relaxed">
                        刑罰為最嚴厲制裁手段，動用成本極高。非民事、行政手段不能達成目的時，始得以刑罰作為最後防線（Ultima Ratio）。
                      </td>
                    </tr>
                    <tr class="hover:bg-slate-50 dark:hover:bg-slate-850/50">
                      <td class="p-3 font-black text-amber-700 dark:text-amber-400 whitespace-nowrap bg-amber-50/50 dark:bg-amber-950/20">
                        ③ 罪刑法定原則
                      </td>
                      <td class="p-3 border-l-2 border-slate-200 dark:border-slate-800 font-black text-slate-900 dark:text-white">
                        付出代價的根據何在？
                      </td>
                      <td class="p-3 border-l-2 border-slate-200 dark:border-slate-800">
                        預防思想（人民安措手足）
                      </td>
                      <td class="p-3 border-l-2 border-slate-200 dark:border-slate-800 leading-relaxed">
                        刑法 § 1・釋字 384。習慣法禁止、類推適用禁止、明確性原則、溯及既往禁止。保障人民預見性與人權。
                      </td>
                    </tr>
                    <tr class="hover:bg-slate-50 dark:hover:bg-slate-850/50">
                      <td class="p-3 font-black text-purple-700 dark:text-purple-400 whitespace-nowrap bg-purple-50/50 dark:bg-purple-950/20">
                        ④ 罪責原則
                      </td>
                      <td class="p-3 border-l-2 border-slate-200 dark:border-slate-800 font-black text-slate-900 dark:text-white">
                        付出代價的極限何在？
                      </td>
                      <td class="p-3 border-l-2 border-slate-200 dark:border-slate-800">
                        應報思想（小罪不能大罰）
                      </td>
                      <td class="p-3 border-l-2 border-slate-200 dark:border-slate-800 leading-relaxed">
                        釋字 630。無罪責即無刑罰；罪刑相當原則。準強盜罪合憲限縮。有利人民之類推、溯及與法理全面容許。
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <!-- 全章完結里程碑慶祝卡片 (高飽和鮮明質感) -->
              <div class="p-6 rounded-2xl bg-gradient-to-r from-emerald-100 via-teal-50 to-indigo-100 dark:from-[#064e3b]/80 dark:via-[#0f172a] dark:to-[#1e1b4b]/70 border-2 border-emerald-400 dark:border-emerald-500 flex items-center justify-between flex-wrap gap-4 shadow-md">
                <div class="flex items-center gap-3.5">
                  <span class="text-3xl sm:text-4xl drop-shadow-sm">🎉</span>
                  <div class="space-y-1">
                    <div class="flex items-center gap-2">
                      <span class="text-xs font-mono font-black px-2.5 py-0.5 rounded-full bg-emerald-600 text-white shadow-xs">MILESTONE ACHIEVED</span>
                      <span class="text-xs text-emerald-800 dark:text-emerald-300 font-bold">教材第 2-1 ～ 2-8 頁 全章完結</span>
                    </div>
                    <h4 class="text-base sm:text-lg font-black text-emerald-950 dark:text-emerald-100 mt-1">
                      恭喜！第零篇 第一章【刑法的運作原理】全數研讀完畢！
                    </h4>
                    <p class="text-xs text-slate-700 dark:text-slate-300 font-medium leading-relaxed">
                      涵蓋第一節法益保護原則（P. 2-1~2-4）、第二節罪刑法定原則（P. 2-5~2-7）、第三節罪責原則（P. 2-7~2-8），共 8 大經典案例深度解構、公法對照、釋字 630 合憲限縮與解題心法全部收錄，並配備「🐣 小白秒懂專區」！
                    </p>
                  </div>
                </div>
                <div class="flex items-center gap-2">
                  <button onclick="switchView('home')" class="px-4 py-2 rounded-xl bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-900 dark:text-slate-100 border-2 border-slate-300 dark:border-slate-700 text-xs font-black shadow-sm transition-all hover:scale-105 active:scale-95">
                    🏠 回書籍主頁
                  </button>
                  <button onclick="switchView('part0-chapter-1')" class="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-black shadow-md shadow-emerald-500/25 border border-emerald-400 transition-all hover:scale-105 active:scale-95">
                    📑 第一章總覽
                  </button>
                </div>
              </div>

            </div>
          </section>

          <!-- Section Bottom Pagination: 第三節底部 (第一章全章完結) -->
          <div class="pt-8 border-t border-slate-200 dark:border-white/[0.08] grid grid-cols-1 sm:grid-cols-2 gap-4">
            <button onclick="switchView('part0-ch1-sec2')" class="group p-4 rounded-2xl border border-slate-200 dark:border-white/[0.08] hover:border-purple-500/40 bg-white dark:bg-[#111726] text-left transition-all hover:-translate-y-0.5 shadow-sm hover:shadow-md flex items-center gap-3">
              <div class="w-9 h-9 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 group-hover:bg-purple-50 dark:group-hover:bg-purple-950 group-hover:text-purple-600 dark:group-hover:text-purple-400 flex items-center justify-center text-sm font-bold shrink-0 transition-colors">
                ←
              </div>
              <div class="min-w-0">
                <span class="text-[11px] text-slate-400 font-mono block">上一單元 (第 2-5 頁)</span>
                <span class="text-xs font-bold text-slate-800 dark:text-slate-200 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors truncate block">
                  第二節 罪刑法定原則——付出代價的根據何在？
                </span>
              </div>
            </button>

            <button onclick="switchView('part0-chapter-2')" class="group p-4 rounded-2xl border border-indigo-500/40 hover:border-indigo-500 bg-gradient-to-br from-indigo-50/50 to-blue-50/30 dark:from-indigo-950/30 dark:to-blue-950/20 text-right transition-all hover:-translate-y-0.5 shadow-sm hover:shadow-md flex items-center justify-between gap-3">
              <div class="min-w-0 text-left">
                <span class="text-[11px] text-indigo-700 dark:text-indigo-400 font-mono block font-bold">下一單元・進入第二章</span>
                <span class="text-xs font-extrabold text-slate-900 dark:text-white group-hover:text-indigo-700 dark:group-hover:text-indigo-400 transition-colors truncate block">
                  第二章 刑法的操作原理 (插槽) →
                </span>
              </div>
              <div class="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 to-indigo-600 text-white flex items-center justify-center text-sm font-bold shrink-0 group-hover:scale-105 transition-transform shadow-md shadow-indigo-500/30">
                →
              </div>
            </button>
          </div>

        </div>
`;
