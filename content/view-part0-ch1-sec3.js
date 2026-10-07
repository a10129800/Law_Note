/**
 * view-part0-ch1-sec3.js
 * 第零篇 第一章 第三節 罪責原則——付出代價的極限何在？ (教材第 2-7 ~ 2-8 頁)
 * 完全遵循 AGENTS.md「五位一體法學劇院」最高行為憲法規範：
 * 1. ⚔️ 原被告/檢控辯護法庭正面言詞辯論（金毛大律師 vs 赤狐女律師）
 * 2. 🐾 柴柴法學教授 • 白話生活大解碼（分段留白、純紅底線、生活比喻）
 * 3. ⚖️ 金毛大律師 • 法庭攻防點評（實戰抗辯戰術）
 * 4. 🛡️ 德牧法規巡查官 • 法規雷達查核（實體法檢索與裁判要旨）
 * 5. 👨‍⚖️ 邊牧首席審判長 • 終審裁決一槌定音（#法槌一敲誰與爭鋒、實體法定讞、國考定錨、📅 2026 最新法條動態備註：112憲判19號）
 * 排版：嚴格垂直單欄堆疊（space-y-3，嚴禁橫向並排），零刺眼全紅字。
 */
window.APP_VIEWS = window.APP_VIEWS || {};
window.APP_VIEWS['viewPart0Ch1Sec3'] = window.APP_VIEWS['part0Ch1Sec3'] = `
        <!-- VIEW: 第零篇 第一章・第三節 罪責原則——付出代價的極限何在？ (教材第 2-7 ~ 2-8 頁) -->
        <div id="viewPart0Ch1Sec3" class="fade-enter hidden space-y-8">
          
          <!-- 麵包屑導航 -->
          <div class="flex items-center justify-between gap-4 border-b border-slate-200/80 dark:border-white/10 pb-3">
            <nav class="flex items-center gap-2 text-xs font-medium text-slate-500 dark:text-slate-400 flex-wrap">
              <button onclick="switchView('part0')" class="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">第零篇</button>
              <span>/</span>
              <button onclick="switchView('part0-ch1')" class="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">第一章 刑法的運作原理</button>
              <span>/</span>
              <span class="text-blue-600 dark:text-blue-400 font-bold">第三節 罪責原則</span>
            </nav>
            <button onclick="switchView('part0-ch1')" class="text-xs text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 flex items-center gap-1 transition-colors shrink-0 font-bold">
              <span>← 返回第一章總覽</span>
            </button>
          </div>

          <!-- 章節大標題 -->
          <div class="space-y-2">
            <div class="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-mono text-xs font-bold">
              <span>第零篇・第一章・第三節</span>
              <span class="px-2 py-0.5 rounded-md bg-blue-50 dark:bg-blue-950/40 text-[11px] border border-blue-200 dark:border-blue-900/50">教材第 2-7 ～ 2-8 頁 原文體系</span>
            </div>
            <h2 class="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
              第三節 罪責原則——付出代價的極限何在？
            </h2>
            <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-serif">
              「刑事處罰必須以行為人具有罪責為限，並與其罪責相當。」剖析無罪責即無刑罰、罪刑相當原則、準強盜罪合憲性限縮（釋字第 630 號）以及 112 憲判 19 最新重大憲政轉折。
            </p>
          </div>

          <!-- ═══════════════ 一、罪責原則核心定義與雙重支柱 ═══════════════ -->
          <section id="sec-p0ch1-sec3-def" class="space-y-6 pt-2">
            <div class="flex items-center gap-3">
              <span class="w-2 h-6 rounded-full bg-blue-600"></span>
              <h3 class="text-lg sm:text-xl font-black text-slate-900 dark:text-white tracking-tight">
                一、罪責原則核心定義與雙重支柱（教材第 2-7 頁 原文精讀）
              </h3>
            </div>

            <div class="p-6 rounded-3xl border border-slate-200 dark:border-white/[0.08] bg-white dark:bg-[#101623] shadow-sm space-y-6">
              
              <!-- 課本原文展示盒 (1:1 復刻) -->
              <div class="rounded-2xl p-5 bg-slate-50/80 dark:bg-slate-900/80 border-2 border-slate-200 dark:border-slate-800 space-y-3">
                <div class="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-2">
                  <span class="font-bold text-xs text-slate-500 dark:text-slate-400 font-mono">📖 課本原文 1:1 忠實重現 (P. 2-7)</span>
                  <span class="text-[11px] px-2 py-0.5 rounded bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 font-bold font-mono">釋630號解釋理由書揭櫫</span>
                </div>
                <div class="space-y-2 text-sm sm:text-base leading-relaxed text-slate-800 dark:text-slate-200 font-serif">
                  <p>
                    <span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">罪責原則是指刑事處罰必須以行為人具有罪責為限，並與其罪責相當</span>（釋630號解釋理由書揭櫫，同時也是最後手段性原則的體現）。
                  </p>
                  <p>
                    首先刑事處罰必須以行為人具有罪責為限，罪責作為犯罪成立要件，但又同時限定刑罰之發動，此稱<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">無罪責即無刑罰原則</span>。
                  </p>
                  <p>
                    再者刑事處罰必須與行為所具有的罪責相當，亦即在個案中所施加的刑罰不得超過罪責之範圍，學理上稱<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">罪刑相當原則</span>。
                  </p>
                </div>
              </div>

              <!-- 小白秒懂專區 -->
              <div class="rounded-2xl p-5 bg-amber-50/70 dark:bg-[#1a1612] border-2 border-amber-300 dark:border-amber-800/60 border-l-[8px] border-l-amber-500 shadow-xs space-y-3 text-xs sm:text-sm">
                <div class="flex items-center gap-2 border-b border-amber-200 dark:border-amber-900/40 pb-2">
                  <span class="text-xl">🐣</span>
                  <span class="font-black text-amber-950 dark:text-amber-200 text-sm">小白秒懂專區 • 30 秒白話搞懂「罪責原則」</span>
                </div>
                <p class="text-slate-700 dark:text-slate-300 leading-relaxed font-serif">
                  想像你走路不小心絆倒，撞碎了路邊小吃攤一隻 20 元的塑膠碗。攤販老闆跳出來大吼：「你損害了我的財產！我要把你關進大牢判 10 年，外加罰款五百萬！」你一定會大罵神經病——因為「懲罰的份量與你的過錯根本不相當」！
                </p>
                <p class="text-slate-800 dark:text-slate-200 font-bold bg-white/70 dark:bg-black/20 p-2.5 rounded-xl border border-amber-200 dark:border-amber-800/40 font-serif">
                  💡 罪責原則就是法治國的「防過度索賠安全閥」！<br>
                  ① <span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">沒犯錯、無可非難 ➔ 絕對不能罰</span>（無罪責即無刑罰）；<br>
                  ② <span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">犯多少錯 ➔ 只能罰多少</span>，施加的刑罰絕對不能超越其罪責的極限（罪刑相當原則）！
                </p>
              </div>

              <!-- 雙重支柱體系圖解 -->
              <div class="space-y-3 pt-2">
                <div class="flex items-center justify-between">
                  <h4 class="text-sm sm:text-base font-black text-slate-900 dark:text-white flex items-center gap-2">
                    <span class="text-blue-600 text-lg">⚖️</span>
                    <span>罪責原則之雙重核心支柱（教材第 2-7 頁 體系圖解）</span>
                  </h4>
                  <span class="text-xs font-mono font-bold text-blue-600 dark:text-blue-400 px-2 py-0.5 rounded bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-900">二大支柱</span>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-xs">
                  <!-- 支柱 1 -->
                  <div class="p-4 rounded-2xl bg-blue-50/70 dark:bg-slate-900 border-2 border-blue-200 dark:border-blue-800 border-l-[6px] border-l-blue-600 shadow-xs space-y-1.5">
                    <div class="flex items-center justify-between">
                      <span class="font-black text-blue-950 dark:text-blue-100 flex items-center gap-1.5 text-sm">
                        <span class="w-5 h-5 rounded bg-blue-600 text-white flex items-center justify-center font-mono font-bold text-xs">1</span>
                        <span>無罪責即無刑罰原則</span>
                      </span>
                      <span class="text-[10px] text-blue-700 dark:text-blue-300 font-mono font-bold px-1.5 py-0.5 rounded bg-blue-100 dark:bg-blue-900/60">發動門檻限制</span>
                    </div>
                    <p class="text-slate-700 dark:text-slate-300 leading-relaxed text-[11.5px] font-serif">
                      罪責作為<strong>犯罪成立的三階核心要件之一</strong>。行為人若欠缺罪責（如未滿 14 歲無責任能力、精神障礙致不能辨識、正當防衛無期待可能性等），刑罰權<strong>自始不得發動</strong>。
                    </p>
                  </div>

                  <!-- 支柱 2 -->
                  <div class="p-4 rounded-2xl bg-indigo-50/70 dark:bg-slate-900 border-2 border-indigo-200 dark:border-indigo-800 border-l-[6px] border-l-indigo-600 shadow-xs space-y-1.5">
                    <div class="flex items-center justify-between">
                      <span class="font-black text-indigo-950 dark:text-indigo-100 flex items-center gap-1.5 text-sm">
                        <span class="w-5 h-5 rounded bg-indigo-600 text-white flex items-center justify-center font-mono font-bold text-xs">2</span>
                        <span>罪刑相當原則</span>
                      </span>
                      <span class="text-[10px] text-indigo-700 dark:text-indigo-300 font-mono font-bold px-1.5 py-0.5 rounded bg-indigo-100 dark:bg-indigo-900/60">刑度份量上限</span>
                    </div>
                    <p class="text-slate-700 dark:text-slate-300 leading-relaxed text-[11.5px] font-serif">
                      在具體個案中所施加的刑罰，<strong>不得超過行為人實質罪責之範圍</strong>。刑罰份量必須與其不法與罪責程度相稱，為憲法第 23 條比例原則與刑法最後手段性之嚴格體現。
                    </p>
                  </div>
                </div>

              </div>

            </div>
          </section>

          <!-- ═══════════════ 二、實戰案例 1-8：五位一體法學劇院 ═══════════════ -->
          <section id="sec-p0ch1-sec3-case1-8" class="space-y-6 pt-2">
            <div class="flex items-center gap-3">
              <span class="w-2 h-6 rounded-full bg-blue-600"></span>
              <h3 class="text-lg sm:text-xl font-black text-slate-900 dark:text-white tracking-tight">
                二、實戰案例 1-8 研習：準強盜罪之強暴脅迫程度（教材第 2-7～2-8 頁）
              </h3>
            </div>

            <div class="p-6 rounded-3xl border border-slate-200 dark:border-white/[0.08] bg-white dark:bg-[#101623] shadow-sm space-y-6">
              
              <!-- 案例 1-8 容器 (五位一體法學劇院) -->
              <div id="case-card-0-1-8" class="p-5 sm:p-6 rounded-2xl border-2 border-blue-200 dark:border-blue-900/60 bg-gradient-to-br from-slate-50 to-blue-50/30 dark:from-slate-900 dark:to-blue-950/20 shadow-xs space-y-4">
                
                <div class="flex items-center justify-between flex-wrap gap-2">
                  <div class="flex items-center gap-2">
                    <span class="px-3 py-1 rounded-full bg-blue-600 text-white font-mono font-black text-xs shadow-xs">案例 1-8</span>
                    <h4 class="font-black text-base text-slate-900 dark:text-white">
                      準強盜罪（§ 329）之強暴脅迫是否須達「至使不能抗拒」？
                    </h4>
                  </div>
                  <span class="text-xs font-mono text-blue-600 dark:text-blue-400 font-bold">合憲性限縮解釋與罪刑相當</span>
                </div>

                <!-- 課本案件事實框 (1:1 復刻) -->
                <div class="p-4 rounded-2xl bg-blue-100/90 dark:bg-blue-950/85 border-2 border-blue-300 dark:border-blue-700/80 shadow-xs flex items-start gap-3.5">
                  <div class="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center shrink-0 text-lg shadow-sm">
                    ⚖️
                  </div>
                  <div class="flex-1 space-y-1">
                    <div class="flex items-center gap-2">
                      <span class="px-2 py-0.5 rounded-md bg-blue-600 text-white font-mono text-[10.5px] font-black tracking-wide shadow-xs">案件事實</span>
                      <span class="text-[11px] font-mono font-bold text-blue-700 dark:text-blue-300/90">#教材第 2-7 頁 原文命題</span>
                    </div>
                    <div class="space-y-1.5 text-xs sm:text-sm font-bold text-blue-950 dark:text-blue-100 leading-relaxed font-serif">
                      <p>
                        刑法上準強盜罪（§ 329）是否必須達到強暴、脅迫「至使不能抗拒」之程度？
                      </p>
                      <p class="text-xs text-blue-800 dark:text-blue-300 font-normal">
                        竊盜犯行竊得手後被失主發現，為求脫免逮捕或防護贓物，當場伸手推了失主一把或輕微拉扯，是否即應「以強盜論」，逕行適用刑法第 328 條處以 5 年以上有期徒刑重刑？
                      </p>
                    </div>
                  </div>
                </div>

                <!-- 1. ⚔️ 原被告/檢控辯護法庭正面言詞辯論 -->
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <!-- 🛡️ 辯護人金毛大律師 -->
                  <div class="p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-900 border-2 border-amber-300 dark:border-amber-700/80 space-y-3 flex flex-col justify-between shadow-xs">
                    <div class="space-y-3">
                      <div class="flex items-center gap-2.5 border-b border-amber-100 dark:border-amber-900/40 pb-2.5">
                        <div class="w-10 h-10 rounded-full overflow-hidden border-2 border-amber-400 shrink-0 bg-slate-900 shadow-xs">
                          <img src="images/golden_case_attorney.jpg" alt="金毛辯護律師" class="w-full h-full object-cover" style="object-position: center 20%; transform: scale(1.35);">
                        </div>
                        <div class="min-w-0 flex-1">
                          <div class="flex items-center justify-between">
                            <span class="font-black text-xs sm:text-sm text-amber-950 dark:text-amber-200">辯護人 • 金毛大律師</span>
                            <span class="px-2 py-0.5 rounded-full bg-amber-100 dark:bg-amber-950 text-amber-900 dark:text-amber-300 font-extrabold text-[10px]">罪刑相當防線</span>
                          </div>
                          <div class="text-[10.5px] text-amber-700 dark:text-amber-400 font-bold">主張：強暴脅迫須達使人難以抗拒</div>
                        </div>
                      </div>
                      <div class="space-y-2 text-xs sm:text-[13px] text-slate-800 dark:text-slate-100 leading-relaxed font-serif">
                        <p class="font-bold text-amber-950 dark:text-amber-200">
                          「審判長！刑法第 329 條之法定刑直接擬制為強盜罪——處 5 年以上有期徒刑！」
                        </p>
                        <p>
                          強盜罪之所以重判 5 年起跳，是因為行為人施用強暴脅迫至使被害人不能抗拒，嚴重壓制自由！如果竊賊只是逃跑時隨手推開追捕者，力道微弱根本未達壓制自由程度，公訴人卻要論以強盜重罪，這無異於『輕罪重罰』，公然踩碎憲法比例原則與罪刑相當原則！強暴脅迫必須合憲限縮達到使人難以抗拒，方得論罪！
                        </p>
                      </div>
                    </div>
                    <div class="p-2.5 rounded-xl bg-amber-50 dark:bg-amber-950/40 text-xs sm:text-[13px] font-bold text-amber-950 dark:text-amber-200 leading-snug border border-amber-200 dark:border-amber-800/60">
                      ⚖️ 罪刑相當要求 ➔ <strong>輕微推擠絕不得擬制為 5 年起跳強盜重罪！</strong>
                    </div>
                  </div>

                  <!-- ⚔️ 公訴檢察官赤狐女律師 -->
                  <div class="p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-900 border-2 border-rose-300 dark:border-rose-700/80 space-y-3 flex flex-col justify-between shadow-xs">
                    <div class="space-y-3">
                      <div class="flex items-center gap-2.5 border-b border-rose-100 dark:border-rose-900/40 pb-2.5">
                        <div class="w-10 h-10 rounded-full overflow-hidden border-2 border-rose-400 shrink-0 bg-slate-900 shadow-xs">
                          <img src="file:///C:/Users/mice/.gemini/antigravity-ide/brain/f1b4b667-641e-4f46-960f-5319e24f9e51/prosecutor_fox_1791095870366.jpg" alt="公訴檢察官赤狐律師" class="w-full h-full object-cover" style="object-position: center 20%; transform: scale(1.35);" onerror="this.src='images/prosecutor_fox.jpg'">
                        </div>
                        <div class="min-w-0 flex-1">
                          <div class="flex items-center justify-between">
                            <span class="font-black text-xs sm:text-sm text-rose-950 dark:text-rose-200">公訴檢察官 • 赤狐女律師</span>
                            <span class="px-2 py-0.5 rounded-full bg-rose-100 dark:bg-rose-950 text-rose-900 dark:text-rose-300 font-extrabold text-[10px]">文義文面追訴</span>
                          </div>
                          <div class="text-[10.5px] text-rose-700 dark:text-rose-400 font-bold">主張：法條明文無「不能抗拒」要件</div>
                        </div>
                      </div>
                      <div class="space-y-2 text-xs sm:text-[13px] text-slate-800 dark:text-slate-100 leading-relaxed font-serif">
                        <p class="font-bold text-rose-950 dark:text-rose-200">
                          「公訴方嚴正指出：刑法第 329 條法條文義極為明確！」
                        </p>
                        <p>
                          條文明明白白規定『當場施以強暴脅迫者，以強盜論』，立法者刻意沒有加上『至使不能抗拒』！行為人竊盜行徑敗露，為了保全贓物或逃脫竟公然動手施暴，已將單純財產犯升級為侵害人身安全之複合犯罪，自應承擔以強盜論處之後果，法律豈容辯護人擅自添加法律所無之限制？
                        </p>
                      </div>
                    </div>
                    <div class="p-2.5 rounded-xl bg-rose-50 dark:bg-rose-950/40 text-xs sm:text-[13px] font-bold text-rose-950 dark:text-rose-200 leading-snug border border-rose-200 dark:border-rose-800/60">
                      🚨 法條文義無此限 ➔ <strong>行竊後施加強暴即具升級處罰惡性！</strong>
                    </div>
                  </div>
                </div>

                <!-- 2. 🐾 柴柴法學教授 • 白話生活大解碼 -->
                <div class="p-4 sm:p-4.5 rounded-xl bg-amber-500/10 border-2 border-amber-300 dark:border-amber-700/70 flex items-start gap-3.5 shadow-xs">
                  <div class="w-11 h-11 rounded-full overflow-hidden shrink-0 border-2 border-amber-400 shadow-sm bg-amber-100">
                    <img src="images/shiba_law_professor.jpg" alt="柴柴法學教授" class="w-full h-full object-cover" style="object-position: center 20%; transform: scale(1.38);">
                  </div>
                  <div class="flex-1 space-y-1">
                    <div class="flex items-center gap-2 flex-wrap">
                      <span class="font-black text-amber-950 dark:text-amber-200 text-sm sm:text-base">柴柴法學教授 • 白話生活大解碼</span>
                      <span class="text-[11px] px-2.5 py-0.5 rounded-full bg-amber-200/80 dark:bg-amber-900/60 text-amber-900 dark:text-amber-100 font-extrabold font-mono">合憲限縮之術</span>
                    </div>
                    <div class="space-y-2 text-xs sm:text-sm text-slate-800 dark:text-slate-100 leading-relaxed font-serif">
                      <p>
                        「小偷如果偷了超商一顆麵包，被店長抓住衣角，小偷轉身甩開手把店長推倒在地上逃走，這樣到底算不算『強盜』？<br>
                        如果算強盜，法官一判就是五年以上！搶銀行的重刑犯判五年，偷麵包推人一把也判五年，這在法理上就叫做『罪刑不相當』汪！
                      </p>
                      <p class="leading-relaxed">
                        <span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">
                          大法官釋字第 630 號因此施展『合憲性限縮解釋』：
                        </span>
                      </p>
                      <p>
                        法條雖然只寫強暴脅迫，但為了符合『罪刑相當原則』，<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">該強暴脅迫的強度，必須達到『使人難以抗拒』的程度</span>，才得以強盜論！若只是輕微掙脫、一般肢體推擠，絕對不能以強盜罪相繩汪！」
                      </p>
                    </div>
                  </div>
                </div>

                <!-- 3. ⚖️ 金毛大律師攻防 × 4. 🛡️ 德牧巡查官雷達 (垂直堆疊・不併排) -->
                <div class="space-y-3 pt-1">
                  <!-- 金毛大律師點評 -->
                  <div class="p-3.5 sm:p-4 rounded-xl bg-amber-50/80 dark:bg-amber-950/20 border border-amber-300 dark:border-amber-800/60 flex items-start gap-3">
                    <div class="w-11 h-11 rounded-full overflow-hidden shrink-0 border border-amber-400 shadow-sm bg-amber-100">
                      <img src="images/golden_case_attorney.jpg" alt="金毛辯護大律師" class="w-full h-full object-cover" style="object-position: center 20%; transform: scale(1.35);">
                    </div>
                    <div class="flex-1 space-y-1">
                      <div class="flex items-center gap-2 flex-wrap">
                        <span class="font-black text-amber-950 dark:text-amber-200 text-sm sm:text-base">金毛大律師 • 法庭攻防點評</span>
                        <span class="text-[10px] px-2 py-0.5 rounded bg-amber-200 dark:bg-amber-900/60 text-amber-900 dark:text-amber-200 font-bold font-mono">實戰抗辯戰術</span>
                      </div>
                      <div class="space-y-2 text-xs sm:text-sm text-slate-800 dark:text-slate-100 leading-relaxed font-serif">
                        <p>
                          「在法庭上遇到檢方起訴 § 329 準強盜罪，辯護大律師的<strong>第一決勝防線</strong>就是『強暴脅迫之強度』！
                        </p>
                        <p>
                          <span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">
                            極力向法官證明被告僅係防禦性掙脫、推阻，被害人並未喪失意思決定自由，未達使人難以抗拒！<br>
                            一旦成功瓦解『難以抗拒』門檻，即可將 5 年以上重罪擊落，退回竊盜罪（§ 320）與普通傷害罪（§ 277）之數罪併罰，大幅爭取易科罰金或緩刑空間！
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>

                  <!-- 德牧巡查官雷達 -->
                  <div class="p-3.5 sm:p-4 rounded-xl bg-blue-50/80 dark:bg-blue-950/20 border border-blue-300 dark:border-blue-800/60 flex items-start gap-3">
                    <div class="w-11 h-11 rounded-full overflow-hidden shrink-0 border border-blue-400 shadow-sm bg-blue-100">
                      <img src="images/shepherd_law_inspector.jpg" alt="德牧法規巡查官" class="w-full h-full object-cover" style="object-position: center 15%; transform: scale(1.4);">
                    </div>
                    <div class="flex-1 space-y-1">
                      <div class="flex items-center gap-2 flex-wrap">
                        <span class="font-black text-blue-950 dark:text-blue-200 text-sm sm:text-base">德牧巡查官 • 法規雷達查核</span>
                        <span class="text-[10px] px-2 py-0.5 rounded bg-blue-200 dark:bg-blue-900/60 text-blue-900 dark:text-blue-200 font-bold font-mono">裁判要旨溯源</span>
                      </div>
                      <div class="space-y-2 text-xs sm:text-sm text-slate-800 dark:text-slate-100 leading-relaxed font-serif">
                        <p class="font-black text-blue-950 dark:text-blue-300">
                          【司法院釋字第 630 號解釋理由書重點要旨】
                        </p>
                        <p class="leading-relaxed">
                          <span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">
                            「擬該規定（按：指§ 329之規定）擬制為強盜罪之強暴、脅迫構成要件行為，乃指達於使人難以抗拒之程度者而言，是與強盜罪同其法定刑，尚未逾越罪刑相當原則，與憲法第二十三條比例原則之意旨並無不符。」
                          </span>
                        </p>
                        <p>
                          大法官明確宣示：刑罰目的在保護法益，但手段不得過苛。唯有將強暴脅迫限縮為達「使人難以抗拒」，方符罪刑相當原則之憲政底線。
                        </p>
                      </div>
                    </div>
                  </div>

                  <!-- 5. 👨‍⚖️ 邊牧首席審判長 • 終審裁決一槌定音 -->
                  <div class="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white border-2 border-indigo-400/80 shadow-md flex items-start gap-3.5 relative overflow-hidden">
                    <div class="w-12 h-12 rounded-2xl overflow-hidden shrink-0 border-2 border-indigo-400 shadow-md bg-slate-800">
                      <img src="file:///C:/Users/mice/.gemini/antigravity-ide/brain/f1b4b667-641e-4f46-960f-5319e24f9e51/border_collie_judge_1791095556108.jpg" alt="邊牧審判長" class="w-full h-full object-cover" style="object-position: center 25%; transform: scale(1.35);" onerror="this.src='images/border_collie_chief_judge.jpg'">
                    </div>
                    <div class="flex-1 space-y-2 relative z-10">
                      <div class="flex items-center justify-between flex-wrap gap-2">
                        <div class="flex items-center gap-2">
                          <span class="font-black text-amber-300 text-sm sm:text-base flex items-center gap-1.5">
                            <span>👨‍⚖️</span> 邊牧審判長 • 終審裁決一槌定音
                          </span>
                          <span class="text-[10.5px] px-2.5 py-0.5 rounded-full bg-amber-400/20 text-amber-300 font-extrabold border border-amber-400/40 font-mono">
                            終審定讞
                          </span>
                        </div>
                        <span class="text-xs font-mono font-bold text-indigo-300/90">#法槌一敲誰與爭鋒</span>
                      </div>
                      <div class="space-y-2 text-xs sm:text-sm text-slate-100 leading-relaxed font-serif">
                        <p class="font-bold text-amber-200">
                          🔨 【實體法定讞】：刑法第 329 條準強盜罪之強暴脅迫，必須達於「使人難以抗拒」之程度；若未達此程度，不得擬制為強盜罪，僅能依具體行為論以竊盜與妨害自由/傷害罪數罪併罰！
                        </p>
                        <p>
                          💡 <strong>國考答題定錨</strong>：<br>
                          ① 答題開標先立論：引出<strong>罪責原則</strong>與<strong>罪刑相當原則</strong>；<br>
                          ② 指出普通強盜罪法定刑 5 年起跳，準強盜直接擬制同其法定刑；<br>
                          ③ 依釋字第 630 號理由書合憲限縮，行為強度須達使被害人難以抗拒；<br>
                          ④ 涵攝個案：若僅為輕微甩手、推擠脫身，未達難以抗拒，不成立準強盜罪，論以竊盜與普通傷害罪。
                        </p>
                        
                        <!-- 📅 2026 最新法條動態備註 (極致震撼必考點) -->
                        <div class="p-3 rounded-xl bg-indigo-900/80 border-2 border-amber-400/60 text-xs text-amber-200 space-y-1.5 font-mono">
                          <div class="flex items-center gap-2 font-bold text-amber-300 text-sm">
                            <span>📅</span> 2026 最新法條與憲政動態備註【極重磅考點】
                          </div>
                          <p class="text-slate-200 leading-relaxed font-serif">
                            🔥 <strong>憲法法庭 112 年憲判字第 19 號判決（112.11.24 宣告）</strong>：<br>
                            大法官更進一步宣告：刑法第 329 條後段關於強暴、脅迫以強盜論處部分，<strong>不論行為人施用強暴脅迫之情節輕重，一律擬制以強盜論處，致罪刑不相當，逾越達成防護財產與人身安全目的所必要之程度，牴觸憲法第 23 條比例原則，至遲於判決公告屆滿 2 年時（114 年 11 月 24 日）失其效力！</strong><br>
                            👉 <strong>至 2026 年（民國 115 年）</strong>：原刑法 § 329 條準強盜擬制條文已屆期失效！考生作答時，除應詳述「釋字第 630 號（合憲限縮）」外，若能進一步點出「112 憲判 19（違憲定期失效）」之最新憲政演進，必得閱卷委員頂標評價！
                          </p>
                        </div>

                      </div>
                    </div>
                  </div>

                </div>

              </div>

            </div>
          </section>

          <!-- ═══════════════ 三、解題提示延伸深讀：有利於人民之類推與超法規事由 ═══════════════ -->
          <section id="sec-p0ch1-sec3-favorable" class="space-y-6 pt-2">
            <div class="flex items-center gap-3">
              <span class="w-2 h-6 rounded-full bg-emerald-600"></span>
              <h3 class="text-lg sm:text-xl font-black text-slate-900 dark:text-white tracking-tight">
                三、解題提示延伸深讀：有利於人民之類推與超法規事由（教材第 2-8 頁）
              </h3>
            </div>

            <div class="p-6 rounded-3xl border border-slate-200 dark:border-white/[0.08] bg-white dark:bg-[#101623] shadow-sm space-y-6">
              
              <!-- 課本解題提示展示盒 (1:1 復刻) -->
              <div class="rounded-2xl p-5 bg-emerald-50/70 dark:bg-emerald-950/20 border-2 border-emerald-300 dark:border-emerald-800/60 border-l-[8px] border-l-emerald-600 space-y-3">
                <div class="flex items-center justify-between border-b border-emerald-200 dark:border-emerald-900/40 pb-2">
                  <span class="font-bold text-xs text-emerald-900 dark:text-emerald-300 font-mono">📖 課本【解題提示】1:1 忠實重現 (P. 2-8)</span>
                  <span class="text-[11px] px-2 py-0.5 rounded bg-emerald-100 dark:bg-emerald-900 text-emerald-800 dark:text-emerald-200 font-bold font-mono">節制刑罰發動之本質</span>
                </div>
                <div class="space-y-2 text-sm sm:text-base leading-relaxed text-slate-800 dark:text-slate-200 font-serif">
                  <p>
                    <span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">罪刑法定原則與罪責原則都是節制刑罰發動的原理原則</span>，目的在在執行法益保護時不過度地侵犯人民權利，而有其功能上的考量。
                  </p>
                  <p>
                    倘若在個案操作中的結果係對人民有利，那便不存在節制的理由，<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">因此條文設計與解釋上，容許對人民有利的類推、溯及或援用</span>（例如前述的超法規阻卻違法、罪責事由）。
                  </p>
                </div>
              </div>

              <!-- 深度法理剖析矩陣 -->
              <div class="space-y-3">
                <h4 class="text-sm sm:text-base font-black text-slate-900 dark:text-white flex items-center gap-2">
                  <span class="text-emerald-600 text-lg">💡</span>
                  <span>為什麼「有利於人民」就不需要節制？——刑罰法理深度拆解</span>
                </h4>

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border-2 border-rose-300 dark:border-rose-800 space-y-2">
                    <span class="font-black text-rose-700 dark:text-rose-300 text-sm flex items-center gap-1.5">
                      <span>🚫</span> 對人民不利者 ➔ 絕對嚴格禁止
                    </span>
                    <ul class="space-y-1.5 text-slate-700 dark:text-slate-300 font-serif list-disc list-inside leading-relaxed text-[11.5px]">
                      <li><strong>不利類推禁止</strong>：文義極限之外不得比附援引創設處罰。</li>
                      <li><strong>不利溯及既往禁止</strong>：不得搭乘時光機事後算帳。</li>
                      <li><strong>目的</strong>：防止國家刑罰權濫用，保護人民意思自由與法安定性。</li>
                    </ul>
                  </div>

                  <div class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border-2 border-emerald-300 dark:border-emerald-800 space-y-2">
                    <span class="font-black text-emerald-700 dark:text-emerald-300 text-sm flex items-center gap-1.5">
                      <span>✅</span> 對人民有利者 ➔ 法律全面容許
                    </span>
                    <ul class="space-y-1.5 text-slate-700 dark:text-slate-300 font-serif list-disc list-inside leading-relaxed text-[11.5px]">
                      <li><strong>有利類推容許</strong>：類推適用減輕或免除刑罰之法規。</li>
                      <li><strong>有利溯及容許</strong>：刑法第 2 條第 1 項但書「從舊從輕原則」。</li>
                      <li><strong>超法規事由</strong>：得援用超法規阻卻違法事由（如被害人承諾、推定的承諾）、超法規阻卻罪責事由（如不可避之違法性錯誤）。</li>
                    </ul>
                  </div>
                </div>

              </div>

            </div>
          </section>

          <!-- ═══════════════ 第三節 底部操作與單元分頁條 ═══════════════ -->
          <div class="w-full max-w-4xl mx-auto flex items-center justify-between p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-blue-50/80 via-white to-indigo-50/80 dark:from-[#121827] dark:to-[#162035] border border-blue-200/80 dark:border-blue-900/40 shadow-xs flex-wrap gap-3">
            <div class="flex items-center gap-2 flex-wrap">
              <button onclick="switchView('part0-ch1-sec2')" class="px-4 py-2 rounded-xl bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 font-bold text-xs flex items-center gap-1.5 border border-slate-200 dark:border-slate-700 cursor-pointer">
                <span>← 上一單元：第二節 罪刑法定原則 (2-5~2-7)</span>
              </button>
              <button onclick="copyPart0Ch1Sec3Notes()" class="px-3.5 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 font-bold text-xs flex items-center gap-1.5 cursor-pointer">
                <span>📋 複製第三節精華筆記</span>
              </button>
            </div>
            <div class="flex items-center gap-2 flex-wrap">
              <button onclick="switchView('cover')" class="px-4 py-2 rounded-xl bg-amber-50 dark:bg-amber-950/40 text-amber-800 dark:text-amber-200 hover:bg-amber-100 dark:hover:bg-amber-900/50 font-bold text-xs flex items-center gap-1.5 border border-amber-300 dark:border-amber-700/60 cursor-pointer">
                <span>🏠 返回首頁</span>
              </button>
              <button onclick="switchView('part0-ch1')" class="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs flex items-center gap-1.5 transition-all shadow-xs cursor-pointer">
                <span>返回第一章總覽 (2-1) →</span>
              </button>
            </div>
          </div>

        </div>
`;

// 複製第三節筆記金句
function copyPart0Ch1Sec3Notes() {
  const notes = "【刑法總則 • 第三節 罪責原則精華摘要】\\n" +
    "1. 核心定義：刑事處罰必須以行為人具有罪責為限，並與其罪責相當（釋630號解釋理由書揭櫫）。\\n" +
    "2. 雙重支柱：\\n" +
    "   - 無罪責即無刑罰原則：罪責為成立要件，限制刑罰之發動。\\n" +
    "   - 罪刑相當原則：施加之刑罰不得超過罪責之範圍，體現最後手段性原則。\\n" +
    "3. 案例 1-8 準強盜罪（§ 329）：\\n" +
    "   - 釋字第 630 號合憲限縮：強暴脅迫須達「使人難以抗拒」之程度，方符罪刑相當原則！\\n" +
    "   - 2026 最新法制動態：憲法法庭 112 憲判 19 宣告 § 329 後段違憲並於 114 年 11 月 24 日定期失效！\\n" +
    "4. 解題提示：罪刑法定與罪責原則皆為「節制刑罰發動」，因此對人民有利之類推、溯及、超法規阻卻違法與罪責事由，法所容許！";
  if (navigator.clipboard) {
    navigator.clipboard.writeText(notes).then(() => {
      alert("✨ 已複製第三節精華筆記至剪貼簿！");
    });
  } else {
    alert("✨ 已複製第三節精華筆記！");
  }
}
