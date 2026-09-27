/**
 * view-part0-ch3-sec4.js
 * 第零篇 第三章 第四節 刑罰的執行——兼談執行刑 (教材第 2-32 ～ 2-37 頁)
 * 依據多欄位Note Skill 規範：
 * 完整收錄執行刑本質、案例 3-1 四階推導、
 * 易刑處分四大形態（易科罰金§41、案例 3-2 釋字662、易服勞役§42、易以訓誡§43、易服社會勞動）、
 * 緩刑制度（要件、負擔、撤銷、案例 3-3 §76但書）、
 * 假釋制度（要件、撤銷、案例 3-4 釋字691行政救濟）與統整矩陣
 * 升級至 Image 2 頂級旗艦標準：具備三個「🐣 小白秒懂專區」、厚左邊框、高對比標籤與層次卡片
 */
window.APP_VIEWS = window.APP_VIEWS || {};
window.APP_VIEWS['viewPart0Ch3Sec4'] = window.APP_VIEWS['part0Ch3Sec4'] = window.APP_VIEWS['part0-ch3-sec4'] = `
        <!-- VIEW: 第零篇 第三章 第四節 刑罰的執行——兼談執行刑 -->
        <div id="viewPart0Ch3Sec4" class="fade-enter hidden space-y-8">
          
          <!-- Breadcrumb & Back -->
          <div class="flex items-center justify-between gap-4 border-b border-slate-100 dark:border-white/[0.06] pb-3">
            <nav class="flex items-center gap-2 text-xs font-medium text-slate-400">
              <button onclick="switchView('part-0')" class="hover:text-blue-500 transition-colors">第零篇</button>
              <span>/</span>
              <button onclick="switchView('part0-chapter-3')" class="hover:text-indigo-500 transition-colors">第三章 刑法的法律效果</button>
              <span>/</span>
              <span class="text-indigo-600 dark:text-indigo-400 font-bold">第四節 刑罰的執行——兼談執行刑</span>
            </nav>
            <button onclick="switchView('part0-ch3-sec3')" class="text-xs text-slate-400 hover:text-indigo-500 flex items-center gap-1 transition-colors cursor-pointer">
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
              </svg>
              <span>返回第三節 刑罰量定</span>
            </button>
          </div>

          <!-- Section Header Banner -->
          <div class="space-y-3">
            <div class="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-mono text-xs font-bold">
              <span>第零篇・第三章・第四節</span>
              <span class="px-2.5 py-0.5 rounded-full bg-indigo-50 dark:bg-indigo-950/60 text-[11px] border border-indigo-200 dark:border-indigo-900/50 text-indigo-700 dark:text-indigo-300">
                教材第 2-32 ～ 2-37 頁
              </span>
              <span class="px-2.5 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-[11px] border border-emerald-200 dark:border-emerald-900/50 text-emerald-700 dark:text-emerald-300 font-bold">
                全章完結・執行實務
              </span>
            </div>
            <h2 class="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
              第四節 刑罰的執行——兼談執行刑
            </h2>
            <ul class="text-xs sm:text-sm font-bold text-blue-700 dark:text-blue-300 space-y-1.5 leading-relaxed pt-1">
              <li class="flex items-center gap-2">
                <span class="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400 shrink-0"></span>
                <span>宣告刑與執行刑落差、案例 3-1 四階推導</span>
              </li>
              <li class="flex items-center gap-2">
                <span class="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400 shrink-0"></span>
                <span>易刑處分四大形態（易科罰金與釋字 662 號）</span>
              </li>
              <li class="flex items-center gap-2">
                <span class="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400 shrink-0"></span>
                <span>暫緩執行之寬典（緩刑制度與 § 76 但書）</span>
              </li>
              <li class="flex items-center gap-2">
                <span class="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400 shrink-0"></span>
                <span>提前釋放之寬恕（假釋制度與釋字 691 號訴訟救濟）</span>
              </li>
              <li class="flex items-center gap-2">
                <span class="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400 shrink-0"></span>
                <span>刑法時效雙軌（追訴權時效 vs 行刑權時效）</span>
              </li>
            </ul>
          </div>

          <!-- ==================== 一、執行刑之概念與案例 3-1 四階演練 ==================== -->
          <section id="sec-p0ch3-sec4-concept" class="space-y-5 pt-2">
            <div class="flex items-center justify-between border-b border-slate-100 dark:border-white/[0.06] pb-2">
              <div class="flex items-center gap-3">
                <span class="w-2 h-6 rounded-full bg-indigo-600"></span>
                <h3 class="text-lg sm:text-xl font-black text-slate-900 dark:text-white tracking-tight">
                  一、執行刑之概念與宣告刑落差（教材第 2-32 頁）
                </h3>
              </div>
              <span class="text-[11px] font-mono px-2 py-0.5 rounded bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 font-bold">
                宣告刑 ➔ 執行刑
              </span>
            </div>

            <!-- 天藍色概念焦點框 (Focus Box) -->
            <div class="p-6 sm:p-7 rounded-3xl bg-slate-50 dark:bg-slate-900/80 border-2 border-l-[8px] border-sky-500 space-y-4 shadow-sm">
              <div class="flex items-center justify-between border-b border-sky-200 dark:border-sky-800 pb-2">
                <h4 class="text-base font-black text-slate-900 dark:text-white flex items-center gap-2">
                  <span>🏛️</span>
                  <span>執行刑之本質：行為人實際上要被執行的刑罰</span>
                </h4>
                <span class="text-xs font-mono font-bold px-2 py-0.5 rounded bg-white dark:bg-slate-800 text-[#0369a1] dark:text-sky-300 border border-sky-300 dark:border-sky-600">
                  EXECUTION OF PENALTY
                </span>
              </div>

              <blockquote class="border-l-4 border-[#0284c7] pl-4 py-1 text-xs sm:text-sm text-[#0c4a6e] dark:text-sky-100 leading-relaxed italic space-y-1">
                <p>
                  「行為人實際上要被執行的刑罰稱作執行刑，一般說來，宣告刑與執行刑應該是等同的，亦即宣告多少當然就必須執行多少，但在遇到易刑處分或實質競合時，宣告刑不一定會等同於執行刑。」
                </p>
              </blockquote>

              <div class="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1 text-xs">
                <div class="p-4 rounded-2xl bg-white dark:bg-slate-950 border border-sky-200 dark:border-sky-800 space-y-2">
                  <span class="font-bold text-sky-900 dark:text-sky-200 flex items-center gap-1.5">
                    <span>⚡</span>
                    <span>1. 宣告刑 ≠ 執行刑之兩大核心原因</span>
                  </span>
                  <ul class="space-y-1.5 text-[11.5px] text-slate-600 dark:text-slate-300 list-disc pl-4">
                    <li><strong>易刑處分：</strong>判處自由刑（如徒刑 5 個月），經准予易科罰金，轉變為執行罰金 15 萬元。</li>
                    <li><strong>實質競合數罪併罰（§ 51）：</strong>宣告多數有期徒刑，依 § 51 ⑤ 吸收限制加重定應執行刑，執行刑低於各宣告刑之總和。</li>
                  </ul>
                </div>

                <div class="p-4 rounded-2xl bg-white dark:bg-slate-950 border border-indigo-200 dark:border-indigo-800 space-y-2">
                  <span class="font-bold text-indigo-900 dark:text-indigo-200 flex items-center gap-1.5">
                    <span>🕊️</span>
                    <span>2. 刑罰執行之彈性調節制度</span>
                  </span>
                  <ul class="space-y-1.5 text-[11.5px] text-slate-600 dark:text-slate-300 list-disc pl-4">
                    <li><strong>暫緩執行（緩刑）：</strong>有罪但暫緩刑之執行，考驗期滿未撤銷視為自始未受刑之宣告。</li>
                    <li><strong>提前釋放（假釋）：</strong>服刑達一定門檻且有悛悔實據，提早附條件釋放回歸社會。</li>
                  </ul>
                </div>
              </div>
            </div>

            <!-- ==================== 案例 3-1 完整四階演練 ==================== -->
            <div id="case-card-3-1" class="p-6 rounded-3xl bg-slate-50 dark:bg-slate-900/60 border-2 border-l-[8px] border-indigo-500 space-y-4 shadow-sm">
              <div class="flex items-center justify-between border-b border-indigo-200 dark:border-indigo-900/60 pb-2">
                <div class="flex items-center gap-2">
                  <span class="px-2.5 py-0.5 rounded-full bg-indigo-600 text-white font-mono font-bold text-xs">
                    案例 3-1
                  </span>
                  <h4 class="text-sm sm:text-base font-black text-slate-900 dark:text-white">
                    強制性交前科再犯毀損文書案（教材第 2-32 ～ 2-33 頁）
                  </h4>
                </div>
                <span class="text-xs font-mono text-indigo-600 dark:text-indigo-400 font-bold">
                  四階演練
                </span>
              </div>

              <!-- 案情描述 -->
              <div class="p-3.5 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-xs sm:text-[13px] text-slate-700 dark:text-slate-300 leading-relaxed font-serif">
                甲因犯強制性交罪而入監服刑 5 年，出獄 3 年後又犯毀損文書罪（§ 352）。試問就甲所犯毀損文書罪其<strong>法定刑、處斷刑、宣告刑與執行刑</strong>各自可能為何？
              </div>

              <!-- 問題導引四階推導 -->
              <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs pt-1">
                
                <!-- 1. 法定刑 -->
                <div class="p-3.5 rounded-2xl bg-white dark:bg-slate-800 border-2 border-slate-300 dark:border-slate-700 space-y-1.5">
                  <span class="text-[10px] font-mono font-bold text-slate-500 dark:text-slate-400 block">① 找尋基本範圍</span>
                  <div class="font-extrabold text-slate-900 dark:text-white text-sm">法定刑（§ 352）</div>
                  <p class="text-[11.5px] text-slate-600 dark:text-slate-300 leading-relaxed">
                    <strong>3 年以下有期徒刑、拘役或 1 萬元以下罰金。</strong><br>
                    <span class="text-slate-500 text-[10.5px]">※ 徒刑下限為 2 月以上；拘役上限為 60 日。</span>
                  </p>
                </div>

                <!-- 2. 處斷刑 -->
                <div class="p-3.5 rounded-2xl bg-white dark:bg-slate-800 border-2 border-indigo-400 dark:border-indigo-600 space-y-1.5">
                  <span class="text-[10px] font-mono font-bold text-indigo-600 dark:text-indigo-400 block">② 調整處斷範圍</span>
                  <div class="font-extrabold text-indigo-700 dark:text-indigo-300 text-sm">處斷刑（累犯加重）</div>
                  <p class="text-[11.5px] text-slate-600 dark:text-slate-300 leading-relaxed">
                    徒刑執行完畢 5 年內故意再犯，成立<strong>累犯（§ 47 Ⅰ）加重本刑至 1/2</strong>：<br>
                    <strong>3 個月以上 4.5 年以下徒刑、90 日拘役或 1.5 萬元以下罰金。</strong>
                  </p>
                </div>

                <!-- 3. 宣告刑 -->
                <div class="p-3.5 rounded-2xl bg-white dark:bg-slate-800 border-2 border-purple-400 dark:border-purple-600 space-y-1.5">
                  <span class="text-[10px] font-mono font-bold text-purple-600 dark:text-purple-400 block">③ 具體量定宣告</span>
                  <div class="font-extrabold text-purple-700 dark:text-purple-300 text-sm">宣告刑（法官裁量）</div>
                  <p class="text-[11.5px] text-slate-600 dark:text-slate-300 leading-relaxed">
                    法官於處斷刑範圍內審酌情節極其輕微，量定並於主文宣告：<br>
                    <strong>處有期徒刑 5 個月。</strong>
                  </p>
                </div>

                <!-- 4. 執行刑 -->
                <div class="p-3.5 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border-2 border-emerald-500 space-y-1.5">
                  <span class="text-[10px] font-mono font-bold text-emerald-600 dark:text-emerald-400 block">④ 最終落實服刑</span>
                  <div class="font-extrabold text-emerald-800 dark:text-emerald-200 text-sm">執行刑（易科罰金）</div>
                  <p class="text-[11.5px] text-slate-700 dark:text-slate-300 leading-relaxed">
                    主文諭知「如易科罰金以 1000 元折算 1 日」，經檢察官同意聲請，實際執行刑為：<br>
                    <strong>新台幣 150,000 元整。</strong>
                  </p>
                </div>

              </div>
            </div>
          </section>

          <!-- ==================== 二、易刑處分四大形態與案例 3-2 ==================== -->
          <section id="sec-p0ch3-sec4-substitute" class="space-y-6 pt-2">
            <div class="flex items-center justify-between border-b border-slate-100 dark:border-white/[0.06] pb-2">
              <div class="flex items-center gap-3">
                <span class="w-2 h-6 rounded-full bg-blue-600"></span>
                <h3 class="text-lg sm:text-xl font-black text-slate-900 dark:text-white tracking-tight">
                  二、易刑處分四大形態（教材第 2-33 ～ 2-34 頁）
                </h3>
              </div>
              <span class="text-[11px] font-mono px-2 py-0.5 rounded bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400 font-bold">
                § 41 ～ § 43
              </span>
            </div>

            <!-- 1. 易科罰金 (§ 41) 展開 -->
            <div class="p-5 rounded-3xl bg-white dark:bg-slate-900 border-2 border-l-[8px] border-blue-500 space-y-4 shadow-xs">
              <div class="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-2">
                <div class="flex items-center gap-2">
                  <span class="text-lg">💰</span>
                  <h4 class="text-base font-black text-slate-900 dark:text-white">
                    (一) 易科罰金（§ 41）——避免短期自由刑之流弊
                  </h4>
                </div>
                <span class="text-xs font-mono font-bold text-blue-600">§ 41</span>
              </div>

              <!-- 短期自由刑流弊說明卡 -->
              <div class="p-3.5 rounded-2xl bg-amber-50/80 dark:bg-amber-950/40 border border-amber-300 dark:border-amber-800 text-xs text-amber-950 dark:text-amber-200 leading-relaxed">
                <strong>💡 短期自由刑之流弊：</strong>短暫入監不僅無法收到矯治成效，反而使行為人在監獄中結識惡徒、「進修犯罪技能升等」，且使行為人與正常社會嚴重脫節，弊大於利。故改以金錢代替短期監禁。
              </div>

              <!-- 兩階段運作機制說明 -->
              <div class="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-xs text-slate-700 dark:text-slate-300 space-y-1.5">
                <div class="font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                  <span>⚖️</span>
                  <span>操作方式：法官判決主文授權 ➔ 執行檢察官實質裁量</span>
                </div>
                <p class="text-[11.5px] leading-relaxed">
                  法官在判決主文宣告：「處有期徒刑五個月，得以新台幣一千元折算一日易科罰金。」法官只是<strong>開啟易科罰金的可能性</strong>；到了執行階段允不允許易科罰金，則由<strong>檢察官實質認定裁量</strong>。
                </p>
              </div>

              <!-- 三大審查要件 -->
              <div class="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs pt-1">
                <div class="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 space-y-1">
                  <span class="font-bold text-blue-600 dark:text-blue-400 block">1. 法定刑要件</span>
                  <p class="text-[11px] text-slate-600 dark:text-slate-300">犯<strong>最重本刑為 5 年以下有期徒刑以下</strong>之罪。</p>
                </div>
                <div class="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 space-y-1">
                  <span class="font-bold text-blue-600 dark:text-blue-400 block">2. 宣告刑要件</span>
                  <p class="text-[11px] text-slate-600 dark:text-slate-300">受<strong>6 個月以下有期徒刑或拘役</strong>之宣告者。</p>
                </div>
                <div class="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 space-y-1">
                  <span class="font-bold text-rose-600 dark:text-rose-400 block">3. 消極要件（檢察官把關）</span>
                  <p class="text-[11px] text-slate-600 dark:text-slate-300">確因不執行所宣告之刑，<strong>難收矯正之效或難以維持法秩序</strong>者，不得易科。</p>
                </div>
              </div>

              <!-- ==================== 案例 3-2 數罪併罰定執行刑超過 6 個月得否易科罰金？ ==================== -->
              <div id="case-card-3-2" class="p-4 sm:p-5 rounded-2xl bg-indigo-50/70 dark:bg-indigo-950/40 border-2 border-indigo-400/60 space-y-3">
                <div class="flex items-center justify-between border-b border-indigo-200 dark:border-indigo-800 pb-2">
                  <div class="flex items-center gap-2">
                    <span class="px-2 py-0.5 rounded-full bg-indigo-600 text-white font-mono font-bold text-xs">
                      案例 3-2
                    </span>
                    <h5 class="text-sm font-bold text-slate-900 dark:text-white">
                      數罪併罰定執行刑超過 6 個月，可否易科罰金？（教材第 2-33 ～ 2-34 頁）
                    </h5>
                  </div>
                  <span class="text-[11px] font-mono text-indigo-700 dark:text-indigo-300 font-bold">
                    § 41 Ⅷ・釋字 662 號
                  </span>
                </div>

                <div class="p-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-serif text-slate-700 dark:text-slate-300 leading-relaxed">
                  甲數行為犯竊盜罪（§ 320）與傷害罪（§ 277），竊盜判 4 個月有期徒刑，傷害判 4 個月有期徒刑。兩罪依 § 51 實質競合後合併定執行刑 7 個月有期徒刑。試問法院可否定易科罰金之標準？
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                  <div class="p-3 rounded-xl bg-white/80 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-1">
                    <span class="font-bold text-slate-500 block">昔日爭議：不允許易科罰金說</span>
                    <p class="text-[11px] text-slate-600 dark:text-slate-400 leading-relaxed">
                      既然合併後的執行刑已達 7 個月，已超出 6 個月短期自由刑範圍，便有入監教化必要，故不准易科罰金。
                    </p>
                  </div>
                  <div class="p-3 rounded-xl bg-emerald-100/90 dark:bg-emerald-950/70 border-2 border-emerald-500 space-y-1">
                    <span class="font-bold text-emerald-800 dark:text-emerald-300 block flex items-center gap-1">
                      <span>⭐</span>
                      <span>現代通說與修法：允許易科罰金（§ 41 Ⅷ、釋字第 662 號）</span>
                    </span>
                    <p class="text-[11px] text-slate-800 dark:text-slate-200 leading-relaxed font-medium">
                      各罪單獨宣告均未逾 6 個月，行為人本無入監之必要。數罪併罰僅是訴訟技術合併，絕不能剝奪其易科罰金之權益！<strong>縱使合併定執行刑超過 6 個月，依法仍准予易科罰金！</strong>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <!-- 其他三大易刑處分展示 -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
              
              <!-- 易服勞役 (§ 42) -->
              <div class="p-4 rounded-2xl bg-white dark:bg-slate-900 border-2 border-l-[8px] border-slate-400 space-y-2 shadow-xs">
                <div class="flex items-center justify-between">
                  <span class="font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                    <span>🔨</span>
                    <span>(二) 易服勞役（§ 42）</span>
                  </span>
                  <span class="font-mono text-[10px] px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 font-bold">§ 42</span>
                </div>
                <p class="text-[11.5px] text-slate-600 dark:text-slate-300 leading-relaxed">
                  防止被判處罰金刑之行為人<strong>無力完納罰金</strong>時，以無酬之勞務替代的權宜措施（折算標準為 1000 元至 3000 元折算 1 日，最長不逾 1 年）。
                </p>
              </div>

              <!-- 易以訓誡 (§ 43) -->
              <div class="p-4 rounded-2xl bg-white dark:bg-slate-900 border-2 border-l-[8px] border-slate-400 space-y-2 shadow-xs">
                <div class="flex items-center justify-between">
                  <span class="font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                    <span>🗣️</span>
                    <span>(三) 易以訓誡（§ 43）</span>
                  </span>
                  <span class="font-mono text-[10px] px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 font-bold">§ 43</span>
                </div>
                <p class="text-[11.5px] text-slate-600 dark:text-slate-300 leading-relaxed">
                  受拘役或罰金之宣告，其犯罪動機在<strong>公益或道德上顯可憫恕</strong>的話，可以「叫過來罵一罵就好了」，操作方式與結構和易科罰金完全相同。
                </p>
              </div>

              <!-- 易服社會勞動 (§ 41 + § 42-1) -->
              <div class="p-4 rounded-2xl bg-white dark:bg-slate-900 border-2 border-l-[8px] border-slate-400 space-y-2 shadow-xs">
                <div class="flex items-center justify-between">
                  <span class="font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                    <span>🤝</span>
                    <span>(四) 易服社會勞動</span>
                  </span>
                  <span class="font-mono text-[10px] px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 font-bold">§ 41、§ 42-1</span>
                </div>
                <p class="text-[11.5px] text-slate-600 dark:text-slate-300 leading-relaxed">
                  考量監獄資源分配與再社會化，更可以彌補易科罰金「有錢人不用坐牢」之不公。數罪併罰定執行刑超過 6 個月者，亦可比照案例 3-2 易服社會勞動。
                </p>
              </div>

            </div>

            <!-- 🐣 小白秒懂專區：易刑處分四大形態 -->
            <div class="p-5 sm:p-6 rounded-3xl bg-blue-500/10 border-2 border-l-[8px] border-blue-500 space-y-4">
              <div class="flex items-center justify-between border-b border-blue-500/20 pb-2">
                <span class="font-extrabold text-blue-700 dark:text-blue-300 text-sm sm:text-base flex items-center gap-2">
                  <span class="animate-bounce">🐣</span> 小白秒懂專區：易刑處分四大形態
                </span>
                <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-500/20 text-blue-800 dark:text-blue-200 font-bold">
                  COMMUTATION OF PENALTY
                </span>
              </div>
              <p class="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                坐牢幾個月不僅教化效果差，還可能在牢裡學壞。刑法設計了「易刑處分」來替代短期監禁：
              </p>
              <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div class="p-3.5 rounded-2xl bg-white dark:bg-slate-900 border border-blue-200 dark:border-blue-900/60 space-y-1.5">
                  <div class="font-bold text-blue-600 dark:text-blue-400 text-xs flex items-center gap-1.5">
                    <span>1️⃣</span> 易科罰金三大關卡
                  </div>
                  <p class="text-[11.5px] text-slate-600 dark:text-slate-300 leading-relaxed">
                    法條最重5年以下罪、法官宣告6個月以下徒刑、1000~3000元折算1日。法官在判決主文開門，但最後准不准繳錢是<strong>檢察官實質把關</strong>！
                  </p>
                </div>
                <div class="p-3.5 rounded-2xl bg-white dark:bg-slate-900 border border-blue-200 dark:border-blue-900/60 space-y-1.5">
                  <div class="font-bold text-blue-600 dark:text-blue-400 text-xs flex items-center gap-1.5">
                    <span>2️⃣</span> 數罪合併破6個月還能繳錢嗎？
                  </div>
                  <p class="text-[11.5px] text-slate-600 dark:text-slate-300 leading-relaxed">
                    <strong>可以！</strong>大法官釋字 662 號與修法保障：各罪本來都能易科罰金，合併定執行刑就算變成 7 個月，<strong>依法依然准許易科罰金</strong>！
                  </p>
                </div>
                <div class="p-3.5 rounded-2xl bg-white dark:bg-slate-900 border border-blue-200 dark:border-blue-900/60 space-y-1.5">
                  <div class="font-bold text-blue-600 dark:text-blue-400 text-xs flex items-center gap-1.5">
                    <span>3️⃣</span> 沒錢繳罰金怎麼辦？
                  </div>
                  <p class="text-[11.5px] text-slate-600 dark:text-slate-300 leading-relaxed">
                    沒錢繳罰金可以「易服勞役」在監獄做工折抵；或是聲請「易服社會勞動」去掃街當志工，避免「有錢免關、沒錢坐牢」的不公現象。
                  </p>
                </div>
              </div>
            </div>
          </section>

          <!-- ==================== 三、暫緩刑罰執行之寬典：緩刑體系 ==================== -->
          <section id="sec-p0ch3-sec4-probation" class="space-y-6 pt-2">
            <div class="flex items-center justify-between border-b border-slate-100 dark:border-white/[0.06] pb-2">
              <div class="flex items-center gap-3">
                <span class="w-2 h-6 rounded-full bg-emerald-600"></span>
                <h3 class="text-lg sm:text-xl font-black text-slate-900 dark:text-white tracking-tight">
                  三、暫緩刑罰執行之寬典：緩刑制度（教材第 2-34 ～ 2-35 頁）
                </h3>
              </div>
              <span class="text-[11px] font-mono px-2 py-0.5 rounded bg-emerald-50 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 font-bold">
                § 74 ～ § 76
              </span>
            </div>

            <!-- 緩刑基本概念與宣告要件 -->
            <div class="p-5 rounded-3xl bg-slate-50 dark:bg-slate-900/60 border-2 border-l-[8px] border-emerald-500 space-y-3">
              <div class="flex items-center justify-between border-b border-emerald-200 dark:border-emerald-800 pb-2">
                <span class="font-bold text-slate-900 dark:text-white text-sm flex items-center gap-1.5">
                  <span>🌱</span>
                  <span>緩刑之宣告：專屬法院職權諭知（宣告 2 年以上 5 年以下）</span>
                </span>
                <span class="text-xs font-mono font-bold text-emerald-600">§ 74 Ⅰ</span>
              </div>
              <p class="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                指<strong>暫緩刑罰之執行</strong>。是否宣告緩刑乃<strong>專屬本案審判法院之職權</strong>，由法院一併在有罪判決主文中宣告。緩刑效力<strong>僅及於主刑，而不及於從刑與保安處分（§ 74 Ⅴ）</strong>。
              </p>
            </div>

            <!-- 緩刑三大審查要件 -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
              
              <!-- 宣告刑要件 -->
              <div class="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
                <span class="font-bold text-emerald-700 dark:text-emerald-400 block">1. 宣告刑要件（嚴格門檻）</span>
                <p class="text-[11.5px] text-slate-600 dark:text-slate-300 leading-relaxed">
                  受<strong>2 年以下有期徒刑、拘役或罰金</strong>之宣告。
                </p>
                <div class="p-2 rounded-xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-900 text-[10.5px] text-rose-900 dark:text-rose-200">
                  <strong>⚠️ 重大區別（與易刑處分不同！）：</strong>數罪併罰定應執行刑<strong>超過 2 年者，即絕對不得宣告緩刑</strong>！
                </div>
              </div>

              <!-- 消極要件 -->
              <div class="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
                <span class="font-bold text-blue-700 dark:text-blue-400 block">2. 消極要件（無徒刑前科）</span>
                <ul class="text-[11px] text-slate-600 dark:text-slate-300 space-y-1 list-disc pl-4">
                  <li>未曾因故意犯罪受有期徒刑以上刑之宣告者。</li>
                  <li>前因故意犯罪受徒刑宣告，執行完畢或赦免後，<strong>5 年以內未曾因故意犯罪受徒刑宣告者</strong>。</li>
                </ul>
              </div>

              <!-- 積極要件 -->
              <div class="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
                <span class="font-bold text-purple-700 dark:text-purple-400 block">3. 積極要件（暫不執行為當）</span>
                <p class="text-[11.5px] text-slate-600 dark:text-slate-300 leading-relaxed">
                  法院認以<strong>暫不執行為適當者</strong>。須受比例原則與平等原則等一般法律原則支配，並可依 § 74 Ⅱ 命行為人履行各項負擔（如賠償、公益捐款、社勞等）。
                </p>
              </div>

            </div>

            <!-- 緩刑期滿效果與案例 3-3 -->
            <div id="case-card-3-3" class="p-5 rounded-2xl bg-emerald-50/70 dark:bg-emerald-950/40 border-2 border-l-[8px] border-emerald-500 space-y-3">
              <div class="flex items-center justify-between border-b border-emerald-200 dark:border-emerald-800 pb-2">
                <div class="flex items-center gap-2">
                  <span class="px-2.5 py-0.5 rounded-full bg-emerald-600 text-white font-mono font-bold text-xs">
                    案例 3-3
                  </span>
                  <h4 class="text-sm sm:text-base font-black text-slate-900 dark:text-white">
                    緩刑期滿後方判處徒刑，應否撤銷緩刑？（教材第 2-35 頁）
                  </h4>
                </div>
                <span class="text-xs font-mono font-bold text-emerald-700 dark:text-emerald-300">
                  § 76 但書例外
                </span>
              </div>

              <div class="p-3 rounded-xl bg-white dark:bg-slate-800 text-xs font-serif text-slate-700 dark:text-slate-300 leading-relaxed">
                甲前因犯竊盜罪經判徒刑 1 年，緩刑 3 年。在緩刑期內，又另起意和已婚女子相姦同居並誘其脫離家庭。倘本案於上述<strong>緩刑期滿後方才判處徒刑</strong>，應否撤銷其緩刑？
              </div>

              <!-- 問題導引 -->
              <div class="p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-emerald-300 dark:border-emerald-800 text-xs space-y-2">
                <div class="font-bold text-emerald-800 dark:text-emerald-200 flex items-center gap-1.5">
                  <span>⭐</span>
                  <span>刑法第 76 條但書之重大例外：防堵藉故拖延訴訟之脫法目的</span>
                </div>
                <p class="text-[11.5px] text-slate-700 dark:text-slate-300 leading-relaxed">
                  原則上依 § 76 前段，緩刑期滿未經撤銷者「其刑之宣告失其效力」，視為自始未受宣告。但若犯罪人藉故拖延審判直到緩刑期滿，將徹底瓦解法秩序！<br>
                  故 <strong>§ 76 但書明定例外</strong>：凡符合 § 75 Ⅱ、§ 75-1 Ⅱ 撤銷緩刑規定者，<strong>縱使判決確定時已緩刑期滿，依然可以合法撤銷緩刑，原宣告刑不失效力，仍可繼續執行！</strong>
                </p>
              </div>
            </div>

            <!-- 🐣 小白秒懂專區：緩刑制度（§ 74）留校察看 -->
            <div class="p-5 sm:p-6 rounded-3xl bg-emerald-500/10 border-2 border-l-[8px] border-emerald-500 space-y-4">
              <div class="flex items-center justify-between border-b border-emerald-500/20 pb-2">
                <span class="font-extrabold text-emerald-700 dark:text-emerald-300 text-sm sm:text-base flex items-center gap-2">
                  <span class="animate-bounce">🐣</span> 小白秒懂專區：緩刑制度（§ 74）——司法的留校察看
                </span>
                <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-800 dark:text-emerald-200 font-bold">
                  PROBATION SYSTEM
                </span>
              </div>
              <p class="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                緩刑就像是法院給你的「免死金牌＋留校察看」，暫時不用進去坐牢，但背後有很嚴格的規則：
              </p>
              <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div class="p-3.5 rounded-2xl bg-white dark:bg-slate-900 border border-emerald-200 dark:border-emerald-900/60 space-y-1.5">
                  <div class="font-bold text-emerald-600 dark:text-emerald-400 text-xs flex items-center gap-1.5">
                    <span>1️⃣</span> 誰有資格拿到緩刑？
                  </div>
                  <p class="text-[11.5px] text-slate-600 dark:text-slate-300 leading-relaxed">
                    宣告刑必須在<strong>2年以下徒刑、拘役或罰金</strong>，而且5年內沒有故意犯罪受徒刑宣告。注意：如果多罪合併定執行刑<strong>超過2年，絕對拿不到緩刑</strong>！
                  </p>
                </div>
                <div class="p-3.5 rounded-2xl bg-white dark:bg-slate-900 border border-emerald-200 dark:border-emerald-900/60 space-y-1.5">
                  <div class="font-bold text-emerald-600 dark:text-emerald-400 text-xs flex items-center gap-1.5">
                    <span>2️⃣</span> 期滿未撤銷＝前科神隱！
                  </div>
                  <p class="text-[11.5px] text-slate-600 dark:text-slate-300 leading-relaxed">
                    緩刑考驗期為 2～5 年。只要在考驗期間乖乖遵守規定沒被撤銷，期滿後<strong>「刑之宣告失其效力」</strong>，法律上視為從沒受過刑之宣告！
                  </p>
                </div>
                <div class="p-3.5 rounded-2xl bg-white dark:bg-slate-900 border border-emerald-200 dark:border-emerald-900/60 space-y-1.5">
                  <div class="font-bold text-emerald-600 dark:text-emerald-400 text-xs flex items-center gap-1.5">
                    <span>3️⃣</span> § 76 但書：別妄想拖延戰術！
                  </div>
                  <p class="text-[11.5px] text-slate-600 dark:text-slate-300 leading-relaxed">
                    在緩刑期間故意犯罪，以為一直上訴拖到緩刑期滿就沒事？§ 76 但書明定：就算確定判決是在期滿後才下來，<strong>一樣撤銷緩刑抓去關</strong>！
                  </p>
                </div>
              </div>
            </div>
          </section>

          <!-- ==================== 四、行刑階段提前釋放之寬恕：假釋體系 ==================== -->
          <section id="sec-p0ch3-sec4-parole" class="space-y-6 pt-2">
            <div class="flex items-center justify-between border-b border-slate-100 dark:border-white/[0.06] pb-2">
              <div class="flex items-center gap-3">
                <span class="w-2 h-6 rounded-full bg-purple-600"></span>
                <h3 class="text-lg sm:text-xl font-black text-slate-900 dark:text-white tracking-tight">
                  四、提前回歸社會之寬恕：假釋制度（教材第 2-35 ～ 2-36 頁）
                </h3>
              </div>
              <span class="text-[11px] font-mono px-2 py-0.5 rounded bg-purple-50 dark:bg-purple-950 text-purple-600 dark:text-purple-400 font-bold">
                § 77 ～ § 79
              </span>
            </div>

            <!-- 假釋本質與實務弊端剖析 -->
            <div class="p-5 rounded-3xl bg-white dark:bg-slate-900 border-2 border-l-[8px] border-purple-500 space-y-3">
              <div class="flex items-center justify-between border-b border-purple-200 dark:border-purple-800 pb-2">
                <h4 class="text-sm sm:text-base font-black text-slate-900 dark:text-white flex items-center gap-2">
                  <span>🚪</span>
                  <span>假釋本質與實務弊端剖析</span>
                </h4>
                <span class="text-xs font-mono font-bold text-purple-600">行政機關裁量</span>
              </div>
              <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                假釋是一種<strong>附條件提前釋放受徒刑執行之人</strong>的行刑措施。本質是促使其提早回歸社會，然而我國實務卻常淪為「解決監獄人滿為患」的鴕鳥政策。癥結點在於我國假釋<strong>欠缺法官保留原則</strong>，全由行政機關（監獄報請法務部）審查，造成浮濫假釋與極高回籠率。
              </p>
              <div class="p-2.5 rounded-xl bg-purple-50 dark:bg-purple-950/40 border border-purple-200 dark:border-purple-800 text-[11px] text-purple-950 dark:text-purple-200">
                <strong>📌 保護管束拘束（§ 93 Ⅱ）：</strong>假釋出獄者，在假釋期間一律依法<strong>交付保護管束</strong>。
              </div>
            </div>

            <!-- 假釋三大要件體系卡 -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
              
              <!-- 基本要件 -->
              <div class="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
                <span class="font-bold text-purple-700 dark:text-purple-400 block">1. 基本要件（執行法定期間 § 77 Ⅰ）</span>
                <ul class="text-[11px] text-slate-600 dark:text-slate-300 space-y-1 list-disc pl-4">
                  <li><strong>無期徒刑：</strong>執行逾 25 年。</li>
                  <li><strong>有期徒刑：</strong>執行逾二分之一。</li>
                  <li><strong>累犯：</strong>執行逾三分之二。</li>
                </ul>
              </div>

              <!-- 消極要件 -->
              <div class="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
                <span class="font-bold text-rose-700 dark:text-rose-400 block">2. 消極要件（§ 77 Ⅱ 排除假釋）</span>
                <ul class="text-[10.5px] text-slate-600 dark:text-slate-300 space-y-1 list-disc pl-3.5">
                  <li>徒刑執行<strong>未滿 6 個月者</strong>。</li>
                  <li>最輕本刑 5 年以上徒刑累犯，於 5 年內再犯最輕本刑 5 年以上之罪者（三振條款）。</li>
                  <li>性侵害犯罪（§ 91-1）受輔導治療評估其再犯危險未顯著降低者。</li>
                </ul>
              </div>

              <!-- 積極要件與效果 -->
              <div class="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
                <span class="font-bold text-emerald-700 dark:text-emerald-400 block">3. 積極要件與效果（§ 78、§ 79）</span>
                <p class="text-[11px] text-slate-600 dark:text-slate-300 leading-relaxed">
                  必須<strong>「有悛（ㄑㄩㄢ）悔實據」</strong>。<br>
                  假釋中故意更犯罪判徒刑確定得撤銷假釋入監執行餘刑（滿3年者不得撤銷）；未經撤銷者，<strong>未執行之刑以已執行論（§ 79）</strong>。
                </p>
              </div>

            </div>

            <!-- ==================== 案例 3-4 假釋被駁回有何救濟管道？ ==================== -->
            <div id="case-card-3-4" class="p-5 rounded-2xl bg-purple-50/70 dark:bg-purple-950/40 border-2 border-l-[8px] border-purple-500 space-y-3">
              <div class="flex items-center justify-between border-b border-purple-200 dark:border-purple-800 pb-2">
                <div class="flex items-center gap-2">
                  <span class="px-2.5 py-0.5 rounded-full bg-purple-600 text-white font-mono font-bold text-xs">
                    案例 3-4
                  </span>
                  <h4 class="text-sm sm:text-base font-black text-slate-900 dark:text-white">
                    假釋遭法務部駁回，有何救濟管道？（教材第 2-36 頁）
                  </h4>
                </div>
                <span class="text-xs font-mono font-bold text-purple-700 dark:text-purple-300">
                  釋字第 691 號解釋
                </span>
              </div>

              <div class="p-3 rounded-xl bg-white dark:bg-slate-800 text-xs font-serif text-slate-700 dark:text-slate-300 leading-relaxed">
                甲服刑已經超過了二分之一，依法報請法務部准予假釋，惟法務部予以駁回，試問甲有何救濟管道？
              </div>

              <!-- 問題導引 -->
              <div class="p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-purple-300 dark:border-purple-800 text-xs space-y-2">
                <div class="font-bold text-purple-900 dark:text-purple-200 flex items-center gap-1.5">
                  <span>🏛️</span>
                  <span>司法院釋字第 691 號解釋：落實憲法第 16 條訴訟權保障</span>
                </div>
                <p class="text-[11.5px] text-slate-700 dark:text-slate-300 leading-relaxed">
                  除了監獄行刑法規定之內部申訴管道外，<strong>司法院釋字第 691 號解釋宣告</strong>：在相關法律通盤檢討修正之前，受刑人不服行政機關不予假釋之決定，<strong>得依法向行政法院提起行政爭訟（撤銷訴訟）尋求司法救濟！</strong>
                </p>
              </div>
            </div>

            <!-- 🐣 小白秒懂專區：假釋制度（§ 77）提前回歸社會 -->
            <div class="p-5 sm:p-6 rounded-3xl bg-purple-500/10 border-2 border-l-[8px] border-purple-500 space-y-4">
              <div class="flex items-center justify-between border-b border-purple-500/20 pb-2">
                <span class="font-extrabold text-purple-700 dark:text-purple-300 text-sm sm:text-base flex items-center gap-2">
                  <span class="animate-bounce">🐣</span> 小白秒懂專區：假釋制度（§ 77）——提前回歸社會的鑰匙
                </span>
                <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-purple-500/20 text-purple-800 dark:text-purple-200 font-bold">
                  PAROLE SYSTEM
                </span>
              </div>
              <p class="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                假釋是受刑人在監獄表現優良、重返社會的機會，但並不是刑期自動打折：
              </p>
              <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div class="p-3.5 rounded-2xl bg-white dark:bg-slate-900 border border-purple-200 dark:border-purple-900/60 space-y-1.5">
                  <div class="font-bold text-purple-600 dark:text-purple-400 text-xs flex items-center gap-1.5">
                    <span>1️⃣</span> 坐多久才能申請假釋？
                  </div>
                  <p class="text-[11.5px] text-slate-600 dark:text-slate-300 leading-relaxed">
                    一般有期徒刑坐滿 <strong>1/2</strong>、累犯坐滿 <strong>2/3</strong>、無期徒刑坐滿 <strong>25年</strong>，且必須「有悛悔實據」由監獄提報法務部審核。
                  </p>
                </div>
                <div class="p-3.5 rounded-2xl bg-white dark:bg-slate-900 border border-purple-200 dark:border-purple-900/60 space-y-1.5">
                  <div class="font-bold text-purple-600 dark:text-purple-400 text-xs flex items-center gap-1.5">
                    <span>2️⃣</span> 假釋出獄就算自由人了嗎？
                  </div>
                  <p class="text-[11.5px] text-slate-600 dark:text-slate-300 leading-relaxed">
                    <strong>還沒！</strong>假釋期間必須強制交付保護管束。如果在假釋期內又故意犯罪被判刑，假釋會被撤銷，剩下的殘刑必須全部回監獄補坐完！
                  </p>
                </div>
                <div class="p-3.5 rounded-2xl bg-white dark:bg-slate-900 border border-purple-200 dark:border-purple-900/60 space-y-1.5">
                  <div class="font-bold text-purple-600 dark:text-purple-400 text-xs flex items-center gap-1.5">
                    <span>3️⃣</span> 法務部不准假釋能打官司嗎？
                  </div>
                  <p class="text-[11.5px] text-slate-600 dark:text-slate-300 leading-relaxed">
                    <strong>可以！</strong>司法院釋字第 691 號解釋明文保障：受刑人不服行政機關不予假釋之決定，可以向<strong>行政法院提起行政訴訟</strong>尋求救濟！
                  </p>
                </div>
              </div>
            </div>
          </section>

          <!-- ==================== 五、易刑處分 vs 緩刑 vs 假釋 總整矩陣 ==================== -->
          <section id="sec-p0ch3-sec4-summary-matrix" class="space-y-4 pt-2">
            <div class="flex items-center justify-between border-b border-slate-100 dark:border-white/[0.06] pb-2">
              <div class="flex items-center gap-3">
                <span class="w-2 h-6 rounded-full bg-indigo-600"></span>
                <h3 class="text-base sm:text-lg font-black text-slate-900 dark:text-white tracking-tight">
                  五、刑罰執行三大調節制度全方位對比總表
                </h3>
              </div>
              <span class="text-[11px] font-mono px-2 py-0.5 rounded bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 font-bold">
                全章精華
              </span>
            </div>

            <div class="overflow-x-auto rounded-2xl border-2 border-slate-200 dark:border-slate-800">
              <table class="w-full text-left text-xs border-collapse">
                <thead>
                  <tr class="bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-200 font-bold border-b border-slate-200 dark:border-slate-700">
                    <th class="p-3">制度名稱</th>
                    <th class="p-3">法律依據</th>
                    <th class="p-3">決定機關</th>
                    <th class="p-3">核心門檻與對象</th>
                    <th class="p-3">制度法律效果</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-slate-100 dark:divide-slate-800 text-slate-600 dark:text-slate-300">
                  <tr class="hover:bg-slate-50 dark:hover:bg-slate-800/40">
                    <td class="p-3 font-bold text-blue-600 dark:text-blue-400">易科罰金</td>
                    <td class="p-3 font-mono">§ 41</td>
                    <td class="p-3">法官諭知開啟 ➔ 檢察官執行准駁</td>
                    <td class="p-3">最重 5 年以下之罪，宣告 6 個月以下徒刑/拘役</td>
                    <td class="p-3">以金錢繳納代替自由刑入監，免除坐牢</td>
                  </tr>
                  <tr class="hover:bg-slate-50 dark:hover:bg-slate-800/40">
                    <td class="p-3 font-bold text-emerald-600 dark:text-emerald-400">緩刑制度</td>
                    <td class="p-3 font-mono">§ 74 ～ § 76</td>
                    <td class="p-3">法院判決專屬職權宣告</td>
                    <td class="p-3">宣告刑 2 年以下（併罰執行刑逾 2 年即不得緩刑）</td>
                    <td class="p-3">暫緩執行 2～5 年，期滿未撤銷視為自始未受宣告</td>
                  </tr>
                  <tr class="hover:bg-slate-50 dark:hover:bg-slate-800/40">
                    <td class="p-3 font-bold text-purple-600 dark:text-purple-400">假釋制度</td>
                    <td class="p-3 font-mono">§ 77 ～ § 79</td>
                    <td class="p-3">行政機關（監獄報請法務部核准）</td>
                    <td class="p-3">有期逾 1/2、累犯逾 2/3、無期逾 25 年且有悛悔實據</td>
                    <td class="p-3">附條件提前出獄受保護管束，期滿未撤銷以已執行論</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <!-- ==================== 6. 刑法中的時效制度：追訴權時效 vs 行刑權時效 ==================== -->
          <section id="sec-p0ch3-sec4-statute-of-limitations" class="p-6 rounded-3xl border-2 border-l-[8px] border-amber-500 bg-white/95 dark:bg-[#111726]/95 shadow-md space-y-6">
            <div class="flex items-center justify-between pb-3 border-b border-amber-200 dark:border-amber-900/60">
              <div class="flex items-center gap-2">
                <span class="text-xl">⏳</span>
                <h3 class="text-base sm:text-lg font-black text-slate-900 dark:text-white tracking-tight">
                  六、刑法中的時效制度：追訴權時效 vs 行刑權時效
                </h3>
              </div>
              <span class="text-[11px] font-mono px-2 py-0.5 rounded bg-amber-50 dark:bg-amber-950 text-amber-700 dark:text-amber-400 font-bold border border-amber-300 dark:border-amber-800">
                教材第 2-37 頁
              </span>
            </div>

            <!-- 醒目重點引導盒 -->
            <div class="p-4 rounded-2xl bg-amber-500/10 dark:bg-amber-950/40 border border-amber-500/30 text-xs sm:text-sm text-slate-700 dark:text-slate-300 space-y-2">
              <div class="font-extrabold text-amber-800 dark:text-amber-300 flex items-center gap-1.5 text-sm">
                <span>📌</span>
                <span>時效制度雙軌架構：追訴權時效（起訴審判前）與 行刑權時效（判決確定後）</span>
              </div>
              <p class="leading-relaxed">
                刑法中的時效旨在落實<strong>法安定性原則</strong>、避免年代久遠<strong>證據滅失</strong>，並肯認行為人若經過長期法秩序考驗未再犯罪，國家刑罰權便<strong>不再具有實質追訴與執行的必要性</strong>。
              </p>
            </div>

            <!-- 時效雙軌核心展開卡片 -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              
              <!-- Card 1: 追訴權時效 -->
              <div class="p-5 rounded-2xl border-2 border-indigo-300 dark:border-indigo-800 bg-slate-50/70 dark:bg-slate-900/50 space-y-3">
                <div class="flex items-center justify-between">
                  <div class="flex items-center gap-2">
                    <span class="w-2.5 h-2.5 rounded-full bg-indigo-500"></span>
                    <h4 class="font-extrabold text-slate-900 dark:text-white text-sm">
                      (一) 追訴權時效（刑法 § 80 ～ § 83）
                    </h4>
                  </div>
                  <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 font-bold">
                    判決確定前
                  </span>
                </div>

                <div class="space-y-2.5 text-xs text-slate-600 dark:text-slate-300">
                  <div class="p-3 rounded-xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 space-y-1.5">
                    <div class="font-bold text-indigo-700 dark:text-indigo-400">1. 時效起算點雙軌判準（§ 80 Ⅱ）</div>
                    <ul class="list-disc pl-4 space-y-1 leading-relaxed text-slate-700 dark:text-slate-300">
                      <li>
                        <strong>狀態犯</strong>：自<strong>「犯罪成立之日」</strong>起算（如殺人罪被害人死亡時、竊盜罪取得財物持有時）。
                      </li>
                      <li>
                        <strong>繼續犯</strong>：自<strong>「行為終了之日」</strong>起算（如私行拘禁罪釋放被害人、終止拘束行動自由狀態之時）。
                      </li>
                    </ul>
                  </div>

                  <div class="p-3 rounded-xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 space-y-1.5">
                    <div class="font-bold text-indigo-700 dark:text-indigo-400">2. 罹於時效之訴訟法雙階效果</div>
                    <p class="leading-relaxed">犯罪一旦罹於追訴權時效，國家追訴權即歸於消滅：</p>
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1 font-sans">
                      <div class="p-2 rounded-lg bg-indigo-50/70 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-900/60">
                        <span class="block text-[11px] font-bold text-indigo-800 dark:text-indigo-300">尚未起訴（偵查中）</span>
                        <span class="text-xs font-extrabold text-slate-900 dark:text-white">檢察官應為「不起訴處分」</span>
                        <span class="block text-[10px] text-slate-400 font-mono">刑事訴訟法 § 252 第 2 款</span>
                      </div>
                      <div class="p-2 rounded-lg bg-blue-50/70 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-900/60">
                        <span class="block text-[11px] font-bold text-blue-800 dark:text-blue-300">已經起訴（審判中）</span>
                        <span class="text-xs font-extrabold text-slate-900 dark:text-white">法院應為「免訴判決」</span>
                        <span class="block text-[10px] text-slate-400 font-mono">刑事訴訟法 § 302 第 2 款（形式裁判）</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Card 2: 行刑權時效 -->
              <div class="p-5 rounded-2xl border-2 border-emerald-300 dark:border-emerald-800 bg-slate-50/70 dark:bg-slate-900/50 space-y-3">
                <div class="flex items-center justify-between">
                  <div class="flex items-center gap-2">
                    <span class="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                    <h4 class="font-extrabold text-slate-900 dark:text-white text-sm">
                      (二) 行刑權時效（刑法 § 84 ～ § 85）
                    </h4>
                  </div>
                  <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 font-bold">
                    判決確定後
                  </span>
                </div>

                <div class="space-y-2.5 text-xs text-slate-600 dark:text-slate-300">
                  <div class="p-3 rounded-xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 space-y-1.5">
                    <div class="font-bold text-emerald-700 dark:text-emerald-400">1. 時效起算點與法定期間</div>
                    <p class="leading-relaxed">
                      行刑權時效自<strong>「裁判確定之日」</strong>起算。依刑法 § 84 依宣告之主刑輕重（死刑/無期徒刑/長期徒刑/短期刑）分別設有 40 年至 5 年不等之行刑權期間。
                    </p>
                  </div>

                  <div class="p-3 rounded-xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 space-y-1.5">
                    <div class="font-bold text-emerald-700 dark:text-emerald-400">2. 罹於行刑權時效之法律效果</div>
                    <div class="p-2.5 rounded-lg bg-emerald-50/80 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-900/60">
                      <div class="text-xs font-extrabold text-emerald-900 dark:text-emerald-200">
                        「行刑權消滅，裁判即不得再執行！」
                      </div>
                      <p class="text-[11px] text-slate-600 dark:text-slate-300 mt-1">
                        受刑人因通緝或逃匿致行刑權時效完成者，國家即喪失實施刑罰之權限，縱嗣後逮捕，亦不得再將受刑人送監服刑或強制執行。
                      </p>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            <!-- 時效制度對比總結表格 -->
            <div class="overflow-x-auto rounded-2xl border-2 border-slate-200 dark:border-slate-800">
              <table class="w-full text-left text-xs border-collapse">
                <thead>
                  <tr class="bg-amber-100/70 dark:bg-amber-950/60 text-slate-800 dark:text-slate-200 font-bold border-b border-amber-200 dark:border-amber-900">
                    <th class="p-3">時效制度</th>
                    <th class="p-3">法律依據</th>
                    <th class="p-3">起算時點</th>
                    <th class="p-3">偵查中效果（未起訴）</th>
                    <th class="p-3">審判中效果（已起訴）</th>
                    <th class="p-3">判決確定後效果</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-slate-100 dark:divide-slate-800 text-slate-600 dark:text-slate-300">
                  <tr class="hover:bg-slate-50 dark:hover:bg-slate-800/40">
                    <td class="p-3 font-bold text-indigo-600 dark:text-indigo-400">追訴權時效</td>
                    <td class="p-3 font-mono font-bold">§ 80 ～ § 83</td>
                    <td class="p-3"><strong>狀態犯</strong>：犯罪成立時<br><strong>繼續犯</strong>：行為終了時</td>
                    <td class="p-3 font-bold text-emerald-600 dark:text-emerald-400">不起訴處分<br><span class="text-[10px] text-slate-400 font-mono">刑訴 § 252 ②</span></td>
                    <td class="p-3 font-bold text-blue-600 dark:text-blue-400">免訴判決<br><span class="text-[10px] text-slate-400 font-mono">刑訴 § 302 ②</span></td>
                    <td class="p-3 text-slate-400">不適用（判決已確定）</td>
                  </tr>
                  <tr class="hover:bg-slate-50 dark:hover:bg-slate-800/40">
                    <td class="p-3 font-bold text-emerald-600 dark:text-emerald-400">行刑權時效</td>
                    <td class="p-3 font-mono font-bold">§ 84 ～ § 85</td>
                    <td class="p-3"><strong>裁判確定之日</strong></td>
                    <td class="p-3 text-slate-400">尚未發生裁判</td>
                    <td class="p-3 text-slate-400">尚未確定判決</td>
                    <td class="p-3 font-bold text-rose-600 dark:text-rose-400"><strong>行刑權消滅</strong><br>裁判不得再執行（§ 84 Ⅰ）</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <!-- ==================== Chapter Bottom Pagination: 第四節底部導航 ==================== -->
          <div class="pt-8 border-t border-slate-200 dark:border-white/[0.08] grid grid-cols-1 sm:grid-cols-2 gap-4">
            <button onclick="switchView('part0-ch3-sec3')" class="group p-4 rounded-2xl border border-slate-200 dark:border-white/[0.08] hover:border-indigo-500/40 bg-white dark:bg-[#111726] text-left transition-all hover:-translate-y-0.5 shadow-sm hover:shadow-md flex items-center gap-3 cursor-pointer">
              <div class="w-9 h-9 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 group-hover:bg-indigo-50 dark:group-hover:bg-indigo-950 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 flex items-center justify-center text-sm font-bold shrink-0 transition-colors">
                ←
              </div>
              <div class="min-w-0">
                <span class="text-[11px] text-slate-400 font-mono block">上一單元 (教材第 2-31 ～ 2-32 頁)</span>
                <span class="text-xs font-bold text-slate-800 dark:text-slate-200 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors truncate block">
                  第三節 刑罰的量定——兼談宣告刑
                </span>
              </div>
            </button>

            <button onclick="switchView('part-0')" class="group p-4 rounded-2xl border border-blue-500/40 hover:border-blue-500 bg-gradient-to-br from-blue-50/50 to-indigo-50/30 dark:from-blue-950/30 dark:to-indigo-950/20 text-right transition-all hover:-translate-y-0.5 shadow-sm hover:shadow-md flex items-center justify-between gap-3 cursor-pointer">
              <div class="min-w-0 text-left">
                <span class="text-[11px] text-blue-700 dark:text-blue-400 font-mono block font-bold">第零篇總結</span>
                <span class="text-xs font-extrabold text-slate-900 dark:text-white group-hover:text-blue-700 dark:group-hover:text-blue-400 transition-colors truncate block">
                  返回 第零篇 導讀總覽 →
                </span>
              </div>
              <div class="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white flex items-center justify-center text-sm font-bold shrink-0 group-hover:scale-105 transition-transform shadow-md shadow-blue-500/30">
                📖
              </div>
            </button>
          </div>

        </div>
`;
