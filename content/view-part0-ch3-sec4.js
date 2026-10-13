// =========================================================================
// 《圖說刑法總則【圖說系列】知識庫閱覽器》視圖模組 (view-part0-ch3-sec4.js)
// 第零篇 刑法的運作原理・第三章 刑法的法律效果
// 第四節 刑罰的執行——兼談執行刑（教材第 2-33 ～ 2-37 頁 全節完結）
// 遵循 AGENTS.md 憲法：Zero-CORS 本機秒開、單欄垂直堆疊、純紅底線重點、犬系四大天王法學劇院
// =========================================================================

window.APP_VIEWS = window.APP_VIEWS || {};

window.APP_VIEWS['viewPart0Ch3Sec4'] = `
        <div id="viewPart0Ch3Sec4" class="fade-enter space-y-8 max-w-4xl mx-auto pb-16">

          <!-- 頂部導航麵包屑 -->
          <nav aria-label="Breadcrumb" class="text-xs font-mono text-slate-500 dark:text-slate-400 flex items-center gap-2">
            <span class="hover:text-rose-600 cursor-pointer" onclick="switchView('part0')">第零篇 刑法的運作原理</span>
            <span>/</span>
            <span class="hover:text-rose-600 cursor-pointer" onclick="switchView('part0-ch3')">第三章 刑法的法律效果</span>
            <span>/</span>
            <span class="text-rose-600 dark:text-rose-400 font-bold">第四節 刑罰的執行——兼談執行刑</span>
          </nav>

          <!-- 節大標題與規格卡片 (教材 1:1 復刻風格) -->
          <header class="relative p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-rose-50/70 via-white to-amber-50/40 dark:from-slate-900 dark:via-slate-900/90 dark:to-rose-950/20 border border-rose-200/60 dark:border-rose-900/40 shadow-sm">
            <div class="flex flex-wrap items-center justify-between gap-3 mb-4">
              <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-rose-100/80 dark:bg-rose-950/60 text-rose-800 dark:text-rose-300 border border-rose-200/60 dark:border-rose-800/40">
                <span class="w-2 h-2 rounded-full bg-rose-500 animate-pulse"></span>
                <span>教材第 2-33 ～ 2-37 頁（本章最終節完結）</span>
              </div>
              <div class="flex items-center gap-2">
                <span class="text-xs font-mono text-slate-500 dark:text-slate-400">P. 2-33 ~ 2-37</span>
                <span class="px-2 py-0.5 text-[11px] font-mono rounded bg-slate-200/60 dark:bg-slate-800 text-slate-700 dark:text-slate-300">§ 41～§ 93</span>
              </div>
            </div>

            <div class="space-y-2">
              <div class="inline-block px-2.5 py-1 text-xs font-mono font-bold rounded-md bg-rose-500 text-white shadow-xs">
                第四節
              </div>
              <h1 class="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight font-serif">
                刑罰的執行——兼談執行刑
              </h1>
              <p class="text-sm sm:text-base text-slate-600 dark:text-slate-300 font-serif leading-relaxed pt-1">
                走向刑事司法實現的終點站：從宣告刑到具體落實，剖析易刑處分、數罪併罰、緩刑、假釋與時效之完整制度體系。
              </p>
            </div>
          </header>

          <!-- 前言導讀：宣告刑與執行刑的落差 -->
          <section id="sec-p0ch3-sec4-intro" class="p-6 sm:p-7 rounded-2xl bg-white dark:bg-[#111726] border-l-8 border-l-rose-500 border border-slate-200 dark:border-white/[0.08] shadow-sm space-y-4">
            <div class="flex items-center gap-2.5">
              <span class="text-xl">🚪</span>
              <h2 class="text-lg font-bold text-slate-900 dark:text-white">
                執行刑概念：宣告多少就執行多少嗎？
              </h2>
            </div>
            <div class="space-y-3 font-serif text-sm sm:text-base leading-relaxed text-slate-700 dark:text-slate-300">
              <p>
                行為人實際上要被執行的刑罰稱作<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">執行刑</span>。
              </p>
              <p>
                一般說來，宣告刑與執行刑應該是等同的，亦即宣告多少當然就必須執行多少。但在遇到<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">易刑處分</span>或<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">實質競合</span>時，宣告刑不一定會等同於執行刑。
              </p>
              <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-2">
                <span class="text-xs font-mono font-bold text-rose-600 dark:text-rose-400 block">📌 執行刑與宣告刑分歧之兩大成因</span>
                <ul class="list-disc list-inside space-y-1 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                  <li><span class="font-bold">易刑處分</span>：共有<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">易科罰金</span>、<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">易服勞役</span>、<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">易以訓誡</span>以及<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">易服社會勞動</span>四種形態。</li>
                  <li><span class="font-bold">實質競合</span>：數罪併罰定應執行刑（刑法 § 51）。</li>
                </ul>
              </div>
            </div>
          </section>

          <!-- 案例 3-1：刑罰四階段思考全流程示範 -->
          <section id="sec-p0ch3-sec4-case-3-1" class="p-6 sm:p-7 rounded-2xl bg-white dark:bg-[#111726] border-l-8 border-l-blue-600 border border-slate-200 dark:border-white/[0.08] shadow-sm space-y-5">
            <div class="flex items-center justify-between flex-wrap gap-2">
              <div class="flex items-center gap-2.5">
                <span class="text-xl">🔍</span>
                <h3 class="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                  案例 3-1：刑罰四階段思考全流程實戰測驗（教材第 2-33 頁）
                </h3>
              </div>
              <span class="text-xs font-mono px-2.5 py-1 rounded bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300 border border-blue-200/60 dark:border-blue-800/40">
                經典整合案例
              </span>
            </div>

            <!-- 案例事實卡片 -->
            <div class="p-4 rounded-xl bg-blue-50/40 dark:bg-blue-950/20 border border-blue-200/60 dark:border-blue-900/40 space-y-2">
              <span class="text-xs font-mono font-bold text-blue-800 dark:text-blue-300">【案例事實】</span>
              <p class="font-serif text-sm sm:text-base leading-relaxed text-slate-800 dark:text-slate-200 font-medium">
                甲因犯強制性交罪而入監服刑 5 年，出獄 3 年後又犯毀損文書罪（§ 352）。試問就甲所犯毀損文書罪其<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">法定刑</span>、<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">處斷刑</span>、<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">宣告刑</span>與<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">執行刑</span>各自可能為何？
              </p>
            </div>

            <!-- 問題導引與四階段詳細拆解 -->
            <div class="space-y-3 font-serif text-xs sm:text-sm text-slate-700 dark:text-slate-300">
              <span class="text-xs font-mono font-bold text-slate-500 dark:text-slate-400 block mb-2">◀ 問題導引 ＆ 四階段計算示範 ▶</span>
              
              <div class="space-y-2.5">
                <div class="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800">
                  <span class="font-bold text-slate-900 dark:text-white block mb-1">㈠ 法定刑</span>
                  <p>
                    毀損文書罪之法定刑為「<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">3 年以下有期徒刑、拘役或 1 萬元以下罰金</span>」。要稍微注意的是，有期徒刑的最低下限是 2 個月以上，拘役的最高上限是 60 日。
                  </p>
                </div>

                <div class="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800">
                  <span class="font-bold text-slate-900 dark:text-white block mb-1">㈡ 處斷刑</span>
                  <p>
                    甲前受徒刑執行完畢後 5 年以內故意再犯有期徒刑以上之罪，符合累犯加重要件，加重本刑至二分之一，處斷刑成為「<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">3 個月以上（最低下限也要一起變化）4.5 年以下有期徒刑、90 日拘役或 1.5 萬元以下罰金</span>」。
                  </p>
                </div>

                <div class="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800">
                  <span class="font-bold text-slate-900 dark:text-white block mb-1">㈢ 宣告刑</span>
                  <p>
                    法官得在處斷刑的範圍內為宣告，倘若犯罪情節極其輕微，法官得以「<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">5 個月有期徒刑</span>」作為宣告刑。
                  </p>
                </div>

                <div class="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800">
                  <span class="font-bold text-slate-900 dark:text-white block mb-1">㈣ 執行刑</span>
                  <p>
                    倘若判決主文上有「得以新台幣 1000 元折算 1 日易科罰金」之記載，甲聲請易科罰金通過檢察官之同意，那麼執行刑是「<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">新台幣 150,000 元整</span>」（5 個月以 150 日計 × 1,000 元）。
                  </p>
                </div>
              </div>
            </div>
          </section>

          <!-- 一、易刑處分體系（易科罰金、易服勞役、訓誡、社勞） -->
          <section id="sec-p0ch3-sec4-commutation" class="p-6 sm:p-7 rounded-2xl bg-white dark:bg-[#111726] border-l-8 border-l-amber-500 border border-slate-200 dark:border-white/[0.08] shadow-sm space-y-5">
            <div class="flex items-center justify-between flex-wrap gap-2">
              <div class="flex items-center gap-2.5">
                <span class="text-xl">💰</span>
                <h2 class="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                  一、易科罰金與易刑處分體系（§ 41～§ 43）
                </h2>
              </div>
              <span class="text-xs font-mono px-2.5 py-1 rounded bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-300 border border-amber-200/60 dark:border-amber-800/40">
                避免短期自由刑流弊
              </span>
            </div>

            <!-- 易科罰金之精神與操作機制 -->
            <div class="space-y-3 font-serif text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              <div class="p-4 rounded-xl bg-amber-50/30 dark:bg-amber-950/20 border border-amber-200/50 dark:border-amber-900/30 space-y-2">
                <span class="font-bold text-amber-900 dark:text-amber-200 block text-sm">💡 制度宗旨：為何要准許易科罰金？</span>
                <p>
                  為了<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">避免短期自由刑的流弊</span>（簡單說，短暫的坐牢不僅無法收到使行為人改過向善的成效，甚至讓行為人進去牢裡跟凶惡的人犯學習新技能升等，而且又讓行為人與社會脫節，弊大於利），對於宣告自由刑之判決者，改以罰金代替有期徒刑或拘役的易刑處分。
                </p>
                <p class="text-xs text-slate-500 dark:text-slate-400 pt-1">
                  ⚠️ <span class="font-bold">操作方式</span>：由<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">法官在判決主文中授權檢察官裁量之</span>。法官宣告「得以新台幣一千元折算一日易科罰金」，僅是開啟易科罰金的可能性；至於執行階段允不允許，則由執行檢察官依法認定。
                </p>
              </div>

              <!-- 易科罰金三大要件 -->
              <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
                <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800">
                  <span class="font-bold text-slate-900 dark:text-white block text-xs mb-1">㈠ 法定刑要件</span>
                  <p class="text-xs">
                    犯最重本刑為 <span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">5 年以下有期徒刑</span>以下之刑之罪。
                  </p>
                </div>
                <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800">
                  <span class="font-bold text-slate-900 dark:text-white block text-xs mb-1">㈡ 宣告刑要件</span>
                  <p class="text-xs">
                    受 <span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">6 月以下有期徒刑或拘役</span>之宣告者。
                  </p>
                </div>
                <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800">
                  <span class="font-bold text-slate-900 dark:text-white block text-xs mb-1">㈢ 消極要件</span>
                  <p class="text-xs">
                    確因不執行所宣告之刑，<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">難收矯正之效，或難以維持法秩序者</span>，不得易科。
                  </p>
                </div>
              </div>

              <!-- 案例 3-2：數罪併罰易科罰金難題與釋字 662 號 -->
              <div class="mt-4 p-4 rounded-xl bg-white dark:bg-[#111726] border-2 border-amber-300 dark:border-amber-700/60 shadow-xs space-y-3">
                <div class="flex items-center justify-between">
                  <span class="font-bold text-slate-900 dark:text-white text-sm">⚖️ 案例 3-2：數罪併罰定執行刑超過 6 月可否易科罰金？（教材第 2-34 頁）</span>
                  <span class="text-xs font-mono text-amber-600 dark:text-amber-400">司法院釋字第 662 號</span>
                </div>
                <p class="text-xs sm:text-sm font-medium text-slate-800 dark:text-slate-200">
                  甲數行為犯竊盜罪（判 4 月）與傷害罪（判 4 月），兩罪均得易科罰金。兩罪依 § 51 實質競合後定應執行刑 7 個月，法院可否定易科罰金之折算標準？
                </p>
                <div class="space-y-2 text-xs text-slate-600 dark:text-slate-300">
                  <p>
                    • <span class="font-bold text-slate-800 dark:text-slate-200">舊實務否定說</span>：認為執行刑超過 6 個月已非短期自由刑，不符宣告刑要件，不准易科罰金。<br>
                    • <span class="font-bold text-amber-700 dark:text-amber-400">★ 大法官釋字第 662 號 ＆ 現行刑法 § 41 Ⅷ（肯定說）</span>：行為人各罪既然原本都不用坐牢，實質競合不過是合併處罰的技術規定，不能因此剝奪受刑人易科罰金之利益！故<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">只要各罪宣告均未逾 6 月，縱定應執行刑超過 6 月，仍得易科罰金</span>！
                  </p>
                </div>
              </div>

              <!-- 其他易刑處分簡要導讀 -->
              <div class="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-2">
                <div class="p-3 rounded-lg bg-slate-50 dark:bg-slate-900/30 border border-slate-200 dark:border-slate-800">
                  <span class="font-bold text-xs text-slate-900 dark:text-slate-200 block mb-0.5">二、易服勞役（§ 42）</span>
                  <p class="text-[11px] text-slate-500 dark:text-slate-400">
                    防止罰金無力完納之無酬勞務替代措施。
                  </p>
                </div>
                <div class="p-3 rounded-lg bg-slate-50 dark:bg-slate-900/30 border border-slate-200 dark:border-slate-800">
                  <span class="font-bold text-xs text-slate-900 dark:text-slate-200 block mb-0.5">三、易以訓誡（§ 43）</span>
                  <p class="text-[11px] text-slate-500 dark:text-slate-400">
                    拘役或罰金宣告，動機在公益或道德上顯可宥恕者，口頭告誡即可。
                  </p>
                </div>
                <div class="p-3 rounded-lg bg-slate-50 dark:bg-slate-900/30 border border-slate-200 dark:border-slate-800">
                  <span class="font-bold text-xs text-slate-900 dark:text-slate-200 block mb-0.5">四、易服社會勞動（§ 41、42-1）</span>
                  <p class="text-[11px] text-slate-500 dark:text-slate-400">
                    促進再社會化並彌補貧富不公（同樣適用釋字 662 號肯定意旨）。
                  </p>
                </div>
              </div>
            </div>
          </section>

          <!-- 二、暫緩刑罰執行：緩刑制度（§ 74～§ 76） -->
          <section id="sec-p0ch3-sec4-probation" class="p-6 sm:p-7 rounded-2xl bg-white dark:bg-[#111726] border-l-8 border-l-emerald-600 border border-slate-200 dark:border-white/[0.08] shadow-sm space-y-5">
            <div class="flex items-center justify-between flex-wrap gap-2">
              <div class="flex items-center gap-2.5">
                <span class="text-xl">🌿</span>
                <h2 class="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                  二、緩刑制度——暫緩刑之執行（§ 74～§ 76）
                </h2>
              </div>
              <span class="text-xs font-mono px-2.5 py-1 rounded bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border border-emerald-200/60 dark:border-emerald-800/40">
                法院專屬職權
              </span>
            </div>

            <div class="space-y-3 font-serif text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              <p>
                緩刑指暫緩刑之執行，專屬法院之職權，於有罪判決主文中諭知。滿足要件後，得宣告 <span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">2 年以上 5 年以下</span> 緩刑（§ 74 Ⅰ），效力<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">僅及於主刑，不及於從刑與保安處分</span>（§ 74 Ⅴ）。
              </p>

              <!-- 緩刑三大要件 -->
              <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div class="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800">
                  <span class="font-bold text-emerald-800 dark:text-emerald-300 block mb-1">㈠ 宣告刑要件</span>
                  <p class="text-xs">
                    受 <span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">2 年以下有期徒刑、拘役或罰金</span>之宣告。數罪併罰所定執行刑超過 2 年者不得宣告緩刑！（注意：此點與易科罰金不同！）
                  </p>
                </div>
                <div class="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800">
                  <span class="font-bold text-emerald-800 dark:text-emerald-300 block mb-1">㈡ 消極前科要件</span>
                  <p class="text-xs">
                    未曾因故意犯罪受有期徒刑以上刑之宣告；或前因故意犯罪受宣告，執行完畢後 <span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">5 年以內未曾因故意犯罪</span>受有期徒刑以上刑之宣告者。
                  </p>
                </div>
                <div class="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800">
                  <span class="font-bold text-emerald-800 dark:text-emerald-300 block mb-1">㈢ 積極審酌要件</span>
                  <p class="text-xs">
                    認以<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">暫不執行為適當者</span>。受比例原則與平等原則拘束，得命其履行附帶負擔（賠償、公益金、勞動）。
                  </p>
                </div>
              </div>

              <!-- 緩刑效果與撤銷 -->
              <div class="p-3.5 rounded-xl bg-emerald-50/40 dark:bg-emerald-950/20 border border-emerald-200/50 dark:border-emerald-900/30">
                <span class="font-bold text-emerald-900 dark:text-emerald-200 block text-xs mb-1">✨ 緩刑期滿 vs 撤銷效果</span>
                <p class="text-xs">
                  • 緩刑期滿而未經撤銷者，其刑之宣告失其效力（§ 76），<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">視為自始未受刑之宣告</span>。<br>
                  • 若故意更犯罪遭撤銷（§ 75、75-1），則回復原宣告刑繼續執行！
                </p>
              </div>

              <!-- 案例 3-3：緩刑期滿後判決撤銷爭議與 § 76 但書 -->
              <div class="p-4 rounded-xl bg-white dark:bg-[#111726] border-2 border-emerald-300 dark:border-emerald-700/60 space-y-2">
                <span class="font-bold text-slate-900 dark:text-white text-sm block">⚖️ 案例 3-3：緩刑期滿後方判處徒刑，應否撤銷緩刑？（教材第 2-35 頁）</span>
                <p class="text-xs sm:text-sm font-medium text-slate-800 dark:text-slate-200">
                  甲緩刑期間內故意犯罪，訴訟拖延至「緩刑期滿後」法院才判決有罪確定，能否撤銷前案之緩刑？
                </p>
                <div class="p-2.5 rounded-lg bg-slate-50 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 text-xs">
                  <span class="font-bold text-emerald-700 dark:text-emerald-400">🛡️ 刑法 § 76 但書之重大防脫法例外：</span><br>
                  原則上期滿宣告失其效力即無法撤銷；但刑法 § 76 但書明文：「<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">依第 75 條第 2 項、第 75-1 條第 2 項撤銷緩刑宣告者，不在此限</span>」。其目的正是為了避免被告藉故拖延訴訟企圖保全緩刑，縱使期滿，只要依法提出撤銷，原宣告刑便不失其效力，仍可繼續執行！
                </div>
              </div>
            </div>
          </section>

          <!-- 三、刑罰執行中途釋放：假釋制度（§ 77～§ 79） -->
          <section id="sec-p0ch3-sec4-parole" class="p-6 sm:p-7 rounded-2xl bg-white dark:bg-[#111726] border-l-8 border-l-purple-600 border border-slate-200 dark:border-white/[0.08] shadow-sm space-y-5">
            <div class="flex items-center justify-between flex-wrap gap-2">
              <div class="flex items-center gap-2.5">
                <span class="text-xl">🕊️</span>
                <h2 class="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                  三、假釋制度——附條件提前釋放受刑人（§ 77～§ 79）
                </h2>
              </div>
              <span class="text-xs font-mono px-2.5 py-1 rounded bg-purple-50 dark:bg-purple-950/40 text-purple-700 dark:text-purple-300 border border-purple-200/60 dark:border-purple-800/40">
                行政寬恕措施
              </span>
            </div>

            <div class="space-y-3 font-serif text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              <p>
                假釋是一種附條件提前釋放受刑人之措施。作者直指：本質為促進復歸社會之例外手段，實務上卻因欠缺「法官保留原則」、由行政機關（法務部）全權決定，容易淪為解決監獄人滿為患之鴕鳥政策。假釋出獄者須付<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">保護管束</span>（§ 93 Ⅱ）。
              </p>

              <!-- 假釋要件盤點 -->
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div class="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 space-y-1">
                  <span class="font-bold text-purple-800 dark:text-purple-300 block text-xs">㈠ 基本門檻要件（§ 77 Ⅰ）</span>
                  <p class="text-xs">
                    • 無期徒刑逾 <span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">25 年</span>。<br>
                    • 有期徒刑逾 <span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">二分之一</span>。<br>
                    • 累犯逾 <span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">三分之二</span>。<br>
                    • 積極要件：有<span class="font-bold">悛（ㄑㄩㄢ）悔實據</span>。
                  </p>
                </div>
                <div class="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 space-y-1">
                  <span class="font-bold text-purple-800 dark:text-purple-300 block text-xs">㈡ 消極不得假釋要件（§ 77 Ⅱ）</span>
                  <p class="text-xs">
                    1. 有期徒刑執行未滿 6 個月者。<br>
                    2. 犯最輕本刑 5 年以上之累犯，5 年內再犯最輕本刑 5 年以上之罪者（<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">三犯重罪排除假釋</span>）。<br>
                    3. 性侵害犯罪輔導治療後，再犯危險未顯著降低者。
                  </p>
                </div>
              </div>

              <!-- 假釋期滿與撤銷 -->
              <div class="p-3 rounded-xl bg-purple-50/30 dark:bg-purple-950/20 border border-purple-200/50 dark:border-purple-900/30 text-xs">
                • <span class="font-bold">期滿效果</span>：除假釋經撤銷者外，其未執行之刑，<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">以已執行論</span>（§ 79）。<br>
                • <span class="font-bold">撤銷假釋（§ 78）</span>：故意更犯罪受有期徒刑以上宣告者撤銷之，入監執行餘刑。期滿逾 3 年者不得撤銷以維安定。
              </div>

              <!-- 案例 3-4：假釋駁回之司法救濟管道與釋字 691 號 -->
              <div class="p-4 rounded-xl bg-white dark:bg-[#111726] border-2 border-purple-300 dark:border-purple-700/60 space-y-2">
                <span class="font-bold text-slate-900 dark:text-white text-sm block">⚖️ 案例 3-4：受刑人不服不予假釋決定，有何救濟管道？（教材第 2-36 頁）</span>
                <p class="text-xs sm:text-sm font-medium text-slate-800 dark:text-slate-200">
                  甲服刑逾 1/2 依法報請假釋遭法務部駁回，受刑人甲該如何尋求司法救濟？
                </p>
                <div class="p-2.5 rounded-lg bg-slate-50 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 text-xs">
                  <span class="font-bold text-purple-700 dark:text-purple-400">★ 司法院釋字第 691 號解釋（憲法訴願重大里程碑）：</span><br>
                  過往監獄行刑法僅有典獄長申訴途徑。釋字第 691 號明確宣告：受刑人不服不予假釋之行政決定者，在相關立法通盤考量制定之前，<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">得向行政法院提起救濟</span>！此號解釋徹底打破「特別權力關係」，直接催生了現行監獄行刑法完備之法院救濟專章。
                </div>
              </div>
            </div>
          </section>

          <!-- 四、刑法的時效：追訴權與行刑權（§ 80～§ 85） -->
          <section id="sec-p0ch3-sec4-limitation" class="p-6 sm:p-7 rounded-2xl bg-white dark:bg-[#111726] border-l-8 border-l-sky-600 border border-slate-200 dark:border-white/[0.08] shadow-sm space-y-4">
            <div class="flex items-center gap-2.5">
              <span class="text-xl">⏳</span>
              <h2 class="text-lg font-bold text-slate-900 dark:text-white">
                四、刑法中的兩大時效體系（教材第 2-37 頁）
              </h2>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 font-serif text-xs sm:text-sm leading-relaxed text-slate-700 dark:text-slate-300">
              <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 space-y-2">
                <span class="font-bold text-sky-700 dark:text-sky-300 block text-sm">㈠ 追訴權時效（§ 80）</span>
                <p>
                  • <span class="font-bold">起算點</span>：<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">狀態犯</span>自犯罪成立之日起算；<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">繼續犯</span>自行為終了之日起算（§ 80 Ⅱ）。<br>
                  • <span class="font-bold">罹於時效之法律效果</span>：<br>
                  　- 尚未起訴 ➔ 檢察官應為<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">不起訴處分</span>（刑訴 § 252 ②）。<br>
                  　- 已經起訴 ➔ 法院應為<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">免訴判決</span>（刑訴 § 302 ②）。
                </p>
              </div>

              <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 space-y-2">
                <span class="font-bold text-sky-700 dark:text-sky-300 block text-sm">㈡ 行刑權時效（§ 84）</span>
                <p>
                  • <span class="font-bold">概念</span>：判決確定後，國家落實執行刑罰的法定期間。<br>
                  • <span class="font-bold">法律效果</span>：罹於行刑權時效期間者，<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">行刑權消滅</span>，該有罪裁判即<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">不得再行執行</span>。
                </p>
              </div>
            </div>
          </section>

          <!-- 五、犬系四大天王法學劇院：五位一體深度演繹 -->
          <section id="sec-p0ch3-sec4-theatre" class="space-y-4">
            <div class="flex items-center gap-2">
              <span class="text-xl">🎭</span>
              <h3 class="text-lg font-black text-slate-900 dark:text-white">
                犬系法學四大天王導師席 • 刑罰執行終局實戰點評
              </h3>
            </div>

            <!-- 單欄垂直堆疊 (遵循嚴禁並排原則) -->
            <div class="space-y-3">

              <!-- 🐾 柴柴法學教授 • 白話生活大解碼 -->
              <div class="p-5 sm:p-6 rounded-2xl bg-white dark:bg-[#111726] border-l-8 border-l-amber-500 border border-slate-200 dark:border-white/[0.08] shadow-sm space-y-3">
                <div class="flex items-center justify-between">
                  <div class="flex items-center gap-3">
                    <div class="w-12 h-12 rounded-xl overflow-hidden border-2 border-amber-400 shadow-md shrink-0">
                      <img src="images/shiba_law_professor.jpg" alt="柴柴法學教授" class="w-full h-full object-cover" style="object-position: center 20%; transform: scale(1.38);"/>
                    </div>
                    <div>
                      <h4 class="font-black text-slate-900 dark:text-white text-sm sm:text-base">
                        🐾 柴柴法學教授 • 白話生活大解碼
                      </h4>
                      <span class="text-xs font-mono text-amber-600 dark:text-amber-400">PROF. SHIBA · #短刑流弊與入獄進修班</span>
                    </div>
                  </div>
                  <span class="text-xs font-mono px-2.5 py-1 rounded bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-300 border border-amber-200/60 dark:border-amber-900/40">
                    生活白話
                  </span>
                </div>

                <div class="font-serif text-xs sm:text-[13.5px] leading-relaxed text-slate-700 dark:text-slate-300 space-y-2">
                  <p>
                    為什麼法律要搞這麼多「易科罰金、緩刑、假釋」的退路呢？
                  </p>
                  <p>
                    大家設想：一個年輕人犯了小罪被判 3 個月，如果真的抓去監獄關，幾十天時間根本來不及矯治，反而跟重刑犯同寢室「拜師學藝升等技能」，出獄後身上帶了前科標籤又找不到工作，這就是著名的<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">短期自由刑流弊</span>！
                  </p>
                  <p>
                    所以現代刑法用「易科罰金」、「社區勞動」或「緩刑觀察期」給予自新機會。而如果數罪併罰定應執行刑超過 6 個月，大法官在釋字 662 號帥氣定調：<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">原本每一科都是小罪，合在一起不能突然把人家關起來！</span>只要各罪都沒超過半年，依然可以繳錢易科罰金！
                  </p>
                </div>
              </div>

              <!-- ⚖️ 金毛大律師 • 法庭攻防點評 -->
              <div class="p-5 sm:p-6 rounded-2xl bg-white dark:bg-[#111726] border-l-8 border-l-yellow-500 border border-slate-200 dark:border-white/[0.08] shadow-sm space-y-3">
                <div class="flex items-center justify-between">
                  <div class="flex items-center gap-3">
                    <div class="w-12 h-12 rounded-xl overflow-hidden border-2 border-yellow-400 shadow-md shrink-0">
                      <img src="images/golden_case_attorney.jpg" alt="金毛首席辯護律師" class="w-full h-full object-cover" style="object-position: center 20%; transform: scale(1.35);"/>
                    </div>
                    <div>
                      <h4 class="font-black text-slate-900 dark:text-white text-sm sm:text-base">
                        ⚖️ 金毛大律師 • 法庭攻防點評
                      </h4>
                      <span class="text-xs font-mono text-yellow-600 dark:text-yellow-400">COUNSELOR GOLDEN · #檢察官裁量與異議權</span>
                    </div>
                  </div>
                  <span class="text-xs font-mono px-2.5 py-1 rounded bg-yellow-50 dark:bg-yellow-950/40 text-yellow-700 dark:text-yellow-300 border border-yellow-200/60 dark:border-yellow-800/40">
                    訴訟策略
                  </span>
                </div>

                <div class="font-serif text-xs sm:text-[13.5px] leading-relaxed text-slate-700 dark:text-slate-300 space-y-2">
                  <p>
                    各位辯護律師請注意執行階段的「最後一哩路」！
                  </p>
                  <p>
                    判決主文寫「得易科罰金」不等於就高枕無憂。有些執行檢察官會以 § 41 第 1 項但書「難收矯正之效」拒絕受刑人繳罰金，直接發監執行。此時辯護人千萬不能認輸，必須立刻依<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">刑事訴訟法 § 484 向宣告判決之法院聲明異議</span>，主張檢察官裁量濫用且違反比例原則！
                  </p>
                  <p>
                    此外在爭取緩刑時，牢記消極條件「前故意罪執行完畢 5 年內未曾受有期徒刑宣告」，若前案是拘役或罰金，或者過失犯罪，完全不影響緩刑資格，務必強力向法官爭取！
                  </p>
                </div>
              </div>

              <!-- 🛡️ 德牧法規巡查官 • 法規雷達查核 -->
              <div class="p-5 sm:p-6 rounded-2xl bg-white dark:bg-[#111726] border-l-8 border-l-blue-600 border border-slate-200 dark:border-white/[0.08] shadow-sm space-y-3">
                <div class="flex items-center justify-between">
                  <div class="flex items-center gap-3">
                    <div class="w-12 h-12 rounded-xl overflow-hidden border-2 border-blue-500 shadow-md shrink-0">
                      <img src="images/shepherd_law_inspector.jpg" alt="德牧法規巡查官" class="w-full h-full object-cover" style="object-position: center 15%; transform: scale(1.4);"/>
                    </div>
                    <div>
                      <h4 class="font-black text-slate-900 dark:text-white text-sm sm:text-base">
                        🛡️ 德牧法規巡查官 • 法規雷達查核
                      </h4>
                      <span class="text-xs font-mono text-blue-600 dark:text-blue-400">INSPECTOR SHEPHERD · #釋字796與最新修法動態</span>
                    </div>
                  </div>
                  <span class="text-xs font-mono px-2.5 py-1 rounded bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300 border border-blue-200/60 dark:border-blue-800/40">
                    裁判雷達
                  </span>
                </div>

                <div class="font-serif text-xs sm:text-[13.5px] leading-relaxed text-slate-700 dark:text-slate-300 space-y-2">
                  <div class="p-3 rounded-lg bg-blue-50/50 dark:bg-blue-950/30 border border-blue-200/50 dark:border-blue-900/30">
                    <span class="font-bold text-blue-800 dark:text-blue-300 block mb-1">【重磅釋字：司法院釋字第 796 號解釋（§ 78 假釋撤銷合憲限縮）】</span>
                    <p class="text-xs">
                      舊刑法 § 78 規定假釋中受有期徒刑宣告者「一律撤銷假釋」，導致許多受刑人因犯微罪（如被判拘役或幾月緩刑）就必須回監服完無期徒刑餘刑，被釋字 796 號宣告違憲！現行法已全面修正為：受 6 月以下有期徒刑之宣告者，法官或檢察官得審酌情節「非一律撤銷」，具備個案彈性！
                    </p>
                  </div>
                  <div class="p-3 rounded-lg bg-slate-50 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800">
                    <span class="font-bold text-slate-800 dark:text-slate-200 block mb-1">【要件對比陷阱：易科罰金 vs 緩刑】</span>
                    <p class="text-xs text-slate-600 dark:text-slate-400">
                      國考最愛考對比：數罪併罰定應執行刑超過 6 個月，各罪得易科者「仍得易科」（§ 41 Ⅷ）；但若數罪併罰定應執行刑超過 2 年，「絕對不得宣告緩刑」（§ 74 Ⅰ 嚴格以執行刑為準）！兩者切勿混淆！
                    </p>
                  </div>
                </div>
              </div>

              <!-- 👨‍⚖️ 邊牧首席審判長 • 終審裁決一槌定音 -->
              <div class="p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-slate-900 via-slate-800 to-amber-950 text-white border-2 border-amber-400/60 shadow-xl space-y-3">
                <div class="flex items-center justify-between">
                  <div class="flex items-center gap-3">
                    <div class="w-12 h-12 rounded-xl overflow-hidden border-2 border-amber-400 shadow-md shrink-0">
                      <img src="images/border_collie_chief_judge.jpg" alt="邊牧首席審判長" class="w-full h-full object-cover" style="object-position: center 25%; transform: scale(1.35);"/>
                    </div>
                    <div>
                      <h4 class="font-black text-amber-200 text-sm sm:text-base">
                        👨‍⚖️ 邊牧首席審判長 • 終審裁決一槌定音
                      </h4>
                      <span class="text-xs font-mono text-amber-400">CHIEF JUDGE COLLIE · #法槌一敲誰與爭鋒</span>
                    </div>
                  </div>
                  <span class="text-xs font-mono px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-400/40">
                    國考定錨
                  </span>
                </div>

                <div class="space-y-3 font-serif text-xs sm:text-[13.5px] leading-relaxed text-slate-200">
                  <div class="p-3.5 rounded-xl bg-white/5 border border-white/10 space-y-1">
                    <span class="font-bold text-amber-300 block">🔨 【實體法定讞】</span>
                    <p>
                      1. 執行刑為落實刑事制裁之最終端，因易刑處分與數罪併罰與宣告刑產生落差。<br>
                      2. 易科罰金受 6 月以下宣告刑＋最重本刑 5 年以下要件拘束；數罪併罰各罪得易科者，合併逾 6 月仍得易科（釋字 662 號）。<br>
                      3. 緩刑以宣告刑（或執行刑）2 年以下為限，消極前科 5 年為界；期滿未撤銷視為自始未受刑之宣告（§ 76 但書防脫法條款）。<br>
                      4. 假釋不服得提行政救濟（釋字 691 號）；撤銷假釋依釋字 796 號意旨已排除一律撤銷。<br>
                      5. 追訴權時效（狀態犯成立時 vs 繼續犯終了時起算），罹於時效分別為不起訴處分與免訴判決。
                    </p>
                  </div>

                  <div class="p-3.5 rounded-xl bg-sky-500/10 border border-sky-400/30 space-y-1">
                    <span class="font-bold text-sky-300 block">💡 國考答題定錨口訣</span>
                    <p class="font-mono text-sky-200">
                      「執行實踐防短弊，易科六月本刑五；併罰逾六仍得易，緩刑兩年看刑罰；期滿未撤自始無，假釋救濟六九一；狀態成立繼續終，時效罹於免起訴！」
                    </p>
                  </div>

                  <div class="p-3.5 rounded-xl bg-amber-500/10 border border-amber-400/30 space-y-1">
                    <span class="font-bold text-amber-300 block">📅 2026 最新法條動態備註</span>
                    <p class="text-xs text-amber-200/90 leading-relaxed">
                      第三章全章四大思考階段（法定刑 ➔ 處斷刑 ➔ 宣告刑 ➔ 執行刑）至此圓滿完結！考生須特別留意釋字 775 號（累犯不加重）、釋字 812 號（廢止強制工作）、釋字 662 號（數罪易科）、釋字 796 號（假釋得不撤銷）與釋字 691 號（假釋行政訴訟救濟）等憲法判決與解釋之鏈結，此為國考閱卷核心定錨點！
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </section>

          <!-- 底部導航分頁 -->
          <div class="pt-6 border-t border-slate-200 dark:border-white/[0.08] grid grid-cols-1 sm:grid-cols-2 gap-4">
            <button onclick="switchView('part0-ch3-sec3')" class="group p-4 rounded-2xl border border-slate-200 dark:border-white/[0.08] hover:border-rose-500/40 bg-white dark:bg-[#111726] text-left transition-all hover:-translate-y-0.5 shadow-sm hover:shadow-md flex items-center gap-3 cursor-pointer">
              <div class="w-9 h-9 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 group-hover:bg-rose-50 dark:group-hover:bg-rose-950 group-hover:text-rose-600 dark:group-hover:text-rose-400 flex items-center justify-center text-sm font-bold shrink-0 transition-colors">
                ←
              </div>
              <div class="min-w-0">
                <span class="text-[11px] text-slate-400 font-mono block">上一單元 (第 2-31 ~ 2-32 頁)</span>
                <span class="text-xs font-bold text-slate-800 dark:text-slate-200 group-hover:text-rose-600 dark:group-hover:text-rose-400 transition-colors truncate block">
                  第三節 刑罰的量定——兼談宣告刑
                </span>
              </div>
            </button>

            <button onclick="switchView('part0-ch3')" class="group p-4 rounded-2xl border border-rose-500/40 hover:border-rose-500 bg-gradient-to-br from-rose-50/50 to-amber-50/30 dark:from-rose-950/30 dark:to-amber-950/20 text-right transition-all hover:-translate-y-0.5 shadow-sm hover:shadow-md flex items-center justify-between gap-3 cursor-pointer">
              <div class="min-w-0 text-left">
                <span class="text-[11px] text-rose-700 dark:text-rose-400 font-mono block font-bold">第三章全章圓滿完結</span>
                <span class="text-xs font-extrabold text-slate-900 dark:text-white group-hover:text-rose-700 dark:group-hover:text-rose-400 transition-colors truncate block">
                  返回第三章 刑法的法律效果 總覽 →
                </span>
              </div>
              <div class="w-9 h-9 rounded-xl bg-gradient-to-br from-rose-500 to-rose-600 text-white flex items-center justify-center text-sm font-bold shrink-0 group-hover:scale-105 transition-transform shadow-md shadow-rose-500/30">
                🎉
              </div>
            </button>
          </div>

        </div>
`;
