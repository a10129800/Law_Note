/**
 * view-part0-ch2-sec1.js
 * 第零篇 第二章 第一節 刑法的適用效力 (教材第 2-9 ～ 2-10 頁)
 * 涵蓋適用效力三大先天限制、從舊從輕原則（§ 2）、案例 2-1 繼續犯之行為時審查、
 * 案例 2-2 限時法之追溯效力爭議（76年第12次刑庭決議）、保安處分之時間效力，
 * 以及地的適用效力開篇：屬地原則（§ 3 + § 4）
 */
window.APP_VIEWS = window.APP_VIEWS || {};
window.APP_VIEWS['viewPart0Ch2Sec1'] = window.APP_VIEWS['part0Ch2Sec1'] = window.APP_VIEWS['part0-ch2-sec1'] = `
        <!-- VIEW 10: 第零篇 第二章 第一節 刑法的適用效力 (教材第 2-9 ～ 2-10 頁) -->
        <div id="viewPart0Ch2Sec1" class="fade-enter hidden space-y-8">
          
          <!-- Breadcrumb & Back -->
          <div class="flex items-center justify-between gap-4 border-b border-slate-100 dark:border-white/[0.06] pb-3">
            <nav class="flex items-center gap-2 text-xs font-medium text-slate-400">
              <button onclick="switchView('part-0')" class="hover:text-blue-500 transition-colors">第零篇 刑法的運作、操作原理與法律效果</button>
              <span>/</span>
              <button onclick="switchView('part0-chapter-2')" class="hover:text-indigo-500 transition-colors">第二章 刑法的操作原理</button>
              <span>/</span>
              <span class="text-indigo-600 dark:text-indigo-400 font-bold">第一節 刑法的適用效力</span>
            </nav>
            <button onclick="switchView('part0-chapter-2')" class="text-xs text-slate-400 hover:text-indigo-500 flex items-center gap-1 transition-colors shrink-0">
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
              </svg>
              <span>返回第二章總覽</span>
            </button>
          </div>

          <!-- Section Header -->
          <div class="space-y-2">
            <div class="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-mono text-xs font-bold">
              <span>第零篇 第二章・第一節</span>
              <span class="px-2 py-0.5 rounded-md bg-indigo-50 dark:bg-indigo-950/40 text-[11px] border border-indigo-200 dark:border-indigo-900/50">
                教材第 2-9 ～ 2-14 頁 原文精確收錄（第一節全節完結）
              </span>
            </div>
            <h2 class="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
              第一節 刑法的適用效力
            </h2>
            <p class="text-xs sm:text-sm text-slate-500">
              探討刑法適用效力之三大先天限制（時、地、人）：從舊從輕原則（§ 2）、繼續犯、限時法追溯力、保安處分雙軌制；地的主要基準屬地原則（§ 3+§ 4）、輔助基準（§ 5～§ 8）、案例 2-6、廣大興案、外國裁判複動原則（§ 9）；人的適用效力（總統刑事豁免權、民代言論免責權、外交豁免權）與審查解題提示
            </p>
          </div>

          <!-- 一、刑法適用效力之三大先天限制（教材第 2-9 頁原文前言） -->
          <section id="sec-p0ch2-sec1-three-dimensions" class="space-y-6 pt-2">
            <div class="flex items-center gap-3">
              <span class="w-2 h-6 rounded-full bg-indigo-600"></span>
              <h3 class="text-lg sm:text-xl font-black text-slate-900 dark:text-white tracking-tight">
                一、刑法適用效力之三大先天限制（教材第 2-9 頁）
              </h3>
            </div>

            <div class="p-6 rounded-3xl border border-slate-200 dark:border-white/[0.08] bg-white dark:bg-[#101623] shadow-sm space-y-5">
              <div class="flex items-center justify-between">
                <span class="text-xs font-bold text-indigo-600 dark:text-indigo-400 flex items-center gap-1.5 font-mono">
                  <span>📖</span>
                  <span>教材第 2-9 頁 原文引言</span>
                </span>
                <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 font-bold">
                  原文忠實收錄
                </span>
              </div>

              <blockquote class="p-4 rounded-2xl border-l-4 border-indigo-500 bg-indigo-50/50 dark:bg-indigo-950/30 text-xs sm:text-sm text-slate-700 dark:text-slate-200 leading-relaxed italic">
                「我國刑法並非無遠弗屆地適用，而是有時間範圍、空間範圍與人別範圍的先天限制。以下就區分『時的適用效力』、『地的適用效力』與『人的適用效力』三個面向論述之。」
              </blockquote>

              <!-- 三大面向架構卡片網格 -->
              <div class="grid grid-cols-1 md:grid-cols-3 gap-3.5 pt-2">
                <div class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-2">
                  <div class="flex items-center justify-between">
                    <span class="text-xs font-mono font-bold text-blue-600 dark:text-blue-400">DIMENSION 1</span>
                    <span class="text-base">⏳</span>
                  </div>
                  <h4 class="text-sm font-bold text-slate-900 dark:text-white">時的適用效力</h4>
                  <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    時間範圍限制。以行為時為基準，原則禁止溯及既往，例外容許從舊從輕原則（刑法 § 2）。
                  </p>
                </div>

                <div class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-2">
                  <div class="flex items-center justify-between">
                    <span class="text-xs font-mono font-bold text-purple-600 dark:text-purple-400">DIMENSION 2</span>
                    <span class="text-base">🌐</span>
                  </div>
                  <h4 class="text-sm font-bold text-slate-900 dark:text-white">地的適用效力</h4>
                  <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    空間範圍限制。國民主權之空間界限，包含屬地原則、隔地犯、屬人原則、保護原則與世界原則（刑法 § 3～§ 8）。
                  </p>
                </div>

                <div class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-2">
                  <div class="flex items-center justify-between">
                    <span class="text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400">DIMENSION 3</span>
                    <span class="text-base">👤</span>
                  </div>
                  <h4 class="text-sm font-bold text-slate-900 dark:text-white">人的適用效力</h4>
                  <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    人別範圍限制。原則平等適用於所有人，例外基於憲法或國際法享有豁免特權（如總統刑事豁免權、立委言論免責權、外交代表豁免）。
                  </p>
                </div>
              </div>

              <!-- 🐣 【超亮眼白話文專區】適用效力三大限制小白秒懂專區 -->
              <div class="rounded-2xl p-5 sm:p-6 bg-gradient-to-br from-amber-50 via-orange-50/80 to-yellow-100 dark:from-[#2a1c0c] dark:via-[#221608] dark:to-[#171005] border-2 border-amber-400 dark:border-amber-500 border-l-[8px] border-l-amber-500 shadow-md shadow-amber-500/10 space-y-4">
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
                        法官想抓誰就抓誰？為什麼刑法還要先審時、地、人？
                      </h4>
                    </div>
                  </div>
                  <span class="text-xs font-bold text-amber-800 dark:text-amber-300 bg-amber-100 dark:bg-amber-900/60 px-2.5 py-1 rounded-lg border border-amber-300 dark:border-amber-700">
                    🛡️ 刑罰權的合法邊界
                  </span>
                </div>

                <div class="p-3.5 sm:p-4 rounded-xl bg-white dark:bg-slate-900 border-2 border-amber-300 dark:border-amber-600 shadow-xs">
                  <div class="text-[11px] font-black text-amber-600 dark:text-amber-400 uppercase tracking-wider mb-1">
                    📢 一句話大白話翻譯
                  </div>
                  <p class="text-sm sm:text-base font-black text-slate-900 dark:text-white leading-relaxed">
                    👉「<span class="text-amber-600 dark:text-amber-400 underline decoration-amber-400 underline-offset-4">刑法不是無所不能的神燈精靈！</span>時間沒到不能罰（時）、國境之外管不到（地）、遇到元首民代豁免要先踩煞車（人）！」
                  </p>
                </div>

                <div class="p-4 rounded-xl bg-amber-100/60 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800/60 space-y-2 text-xs sm:text-[13px] text-slate-800 dark:text-slate-200 leading-relaxed">
                  <div class="font-black text-amber-900 dark:text-amber-200 flex items-center gap-1.5 text-sm">
                    <span>🎮</span>
                    <span>生活超有感比喻：手機遊戲的「伺服器連線與遊玩權限」</span>
                  </div>
                  <p>
                    想像你玩線上遊戲：<strong>時的效力</strong>就像遊戲改版，官方不能拿「明天才上線的新規則」回頭沒收你上星期的裝備；<strong>地的效力</strong>就像你在美服開外掛，台服官方沒辦法直接跨海封你帳號（除非你炸了台服主機）；<strong>人的效力</strong>就像遊戲 GM 享有特殊除錯豁免權，不能照一般玩家檢舉程序隨便抓！
                  </p>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs">
                  <div class="p-3.5 rounded-xl bg-white dark:bg-slate-900 border-2 border-blue-300 dark:border-blue-700 space-y-1">
                    <span class="font-black text-blue-800 dark:text-blue-300 block">時之限制（時間）</span>
                    <span class="text-slate-700 dark:text-slate-200 font-medium">行為時必須有法，禁止事後算帳；從舊從輕原則保障人民信賴。</span>
                  </div>
                  <div class="p-3.5 rounded-xl bg-white dark:bg-slate-900 border-2 border-purple-300 dark:border-purple-700 space-y-1">
                    <span class="font-black text-purple-800 dark:text-purple-300 block">地之限制（空間）</span>
                    <span class="text-slate-700 dark:text-slate-200 font-medium">以台灣國境與本國船艦為原則，境外侵害本國法益例外管轄。</span>
                  </div>
                  <div class="p-3.5 rounded-xl bg-white dark:bg-slate-900 border-2 border-emerald-300 dark:border-emerald-700 space-y-1">
                    <span class="font-black text-emerald-800 dark:text-emerald-300 block">人之限制（身分）</span>
                    <span class="text-slate-700 dark:text-slate-200 font-medium">法律面前人人平等，但憲法特設總統暫時豁免與民代言論免責。</span>
                  </div>
                </div>
              </div>

            </div>
          </section>

          <!-- 二、時的適用效力：從舊從輕原則（§ 2） -->
          <section id="sec-p0ch2-sec1-retroactive-principle" class="space-y-6 pt-2">
            <div class="flex items-center gap-3">
              <span class="w-2 h-6 rounded-full bg-blue-600"></span>
              <h3 class="text-lg sm:text-xl font-black text-slate-900 dark:text-white tracking-tight">
                二、時的適用效力：從舊從輕原則（§ 2）
              </h3>
            </div>

            <!-- 天藍色概念焦點框 (Focus Box) -->
            <div class="box-legal-navy p-6 sm:p-8 rounded-3xl space-y-5">
              <div class="flex items-center justify-between border-b border-sky-300/40 dark:border-sky-700/40 pb-3">
                <div class="flex items-center gap-2">
                  <span class="text-xl">⚖️</span>
                  <h4 class="text-base sm:text-lg font-black text-[#032034] dark:text-white">
                    從舊從輕原則之雙重架構（刑法第 2 條第 1 項）
                  </h4>
                </div>
                <button type="button" class="statute-popover-trigger px-2.5 py-0.5 rounded-full bg-white dark:bg-slate-800 text-[#0369a1] dark:text-sky-300 text-xs font-mono font-bold border border-sky-300 dark:border-sky-600 shadow-xs cursor-pointer hover:scale-105 transition-all" data-statute="2">
                  刑法 § 2 條文快顯 ↗
                </button>
              </div>

              <!-- 教材原文解析 -->
              <div class="space-y-4 text-xs sm:text-sm text-[#0c4a6e] dark:text-sky-100 leading-relaxed">
                <p>
                  依據<span class="font-bold underline decoration-sky-400">法不溯及既往原則</span>，刑事處罰必須<span class="font-bold bg-white dark:bg-slate-800 text-[#0369a1] dark:text-sky-300 px-2 py-0.5 rounded border border-sky-300 shadow-2xs">「行為時」</span>有所規定，因此原則上應適用行為時之法律，就算嗣後法律發生變動亦同。
                </p>
                <p>
                  此外，罪刑法定原則容許對人民有利的溯及，倘若行為後之法律變更<span class="font-bold underline decoration-emerald-400">有利於行為人者</span>，例外適用有利於行為人之法律。
                </p>
              </div>

              <!-- 原則 vs 例外 對比結構卡片 -->
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <!-- 原則：從舊原則 -->
                <div class="p-4 rounded-2xl bg-white/95 dark:bg-slate-900/90 border-2 border-blue-400/50 shadow-sm space-y-2">
                  <div class="flex items-center justify-between">
                    <span class="px-2 py-0.5 rounded text-[11px] font-bold bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 border border-blue-300">
                      原則：從舊（適用行為時法）
                    </span>
                    <span class="text-[11px] font-mono font-bold text-slate-500">§ 2 Ⅰ 本文</span>
                  </div>
                  <blockquote class="text-xs font-semibold text-slate-800 dark:text-slate-200 border-l-3 border-blue-500 pl-2.5 py-0.5">
                    「行為後法律有變更者，適用行為時之法律。」
                  </blockquote>
                  <p class="text-[11.5px] text-slate-500 dark:text-slate-400">
                    貫徹法安定性與信賴保護，人民僅能依行為當下已知之法律安措手足。
                  </p>
                </div>

                <!-- 例外：從輕原則 -->
                <div class="p-4 rounded-2xl bg-white/95 dark:bg-slate-900/90 border-2 border-emerald-400/50 shadow-sm space-y-2">
                  <div class="flex items-center justify-between">
                    <span class="px-2 py-0.5 rounded text-[11px] font-bold bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 border border-emerald-300">
                      例外：從輕（最有利於行為人）
                    </span>
                    <span class="text-[11px] font-mono font-bold text-slate-500">§ 2 Ⅰ 但書</span>
                  </div>
                  <blockquote class="text-xs font-semibold text-slate-800 dark:text-slate-200 border-l-3 border-emerald-500 pl-2.5 py-0.5">
                    「但行為後之法律有利於行為人者，適用最有利於行為人之法律。」
                  </blockquote>
                  <p class="text-[11.5px] text-slate-500 dark:text-slate-400">
                    刑法目的在防衛人權，有利人民之回溯完全合法容許，小罪不予過度苛責。
                  </p>
                </div>
              </div>

              <!-- 🐣 【超亮眼白話文專區】從舊從輕原則小白秒懂專區 -->
              <div class="rounded-2xl p-5 sm:p-6 bg-gradient-to-br from-amber-50 via-orange-50/80 to-yellow-100 dark:from-[#2a1c0c] dark:via-[#221608] dark:to-[#171005] border-2 border-amber-400 dark:border-amber-500 border-l-[8px] border-l-amber-500 shadow-md shadow-amber-500/10 space-y-4">
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
                        犯罪後法律變嚴或變鬆，法官到底該拿哪一版法律判我？
                      </h4>
                    </div>
                  </div>
                  <span class="text-xs font-bold text-amber-800 dark:text-amber-300 bg-amber-100 dark:bg-amber-900/60 px-2.5 py-1 rounded-lg border border-amber-300 dark:border-amber-700">
                    🎯 刑法 § 2 Ⅰ
                  </span>
                </div>

                <div class="p-3.5 sm:p-4 rounded-xl bg-white dark:bg-slate-900 border-2 border-amber-300 dark:border-amber-600 shadow-xs">
                  <div class="text-[11px] font-black text-amber-600 dark:text-amber-400 uppercase tracking-wider mb-1">
                    📢 一句話大白話翻譯
                  </div>
                  <p class="text-sm sm:text-base font-black text-slate-900 dark:text-white leading-relaxed">
                    👉「<span class="text-amber-600 dark:text-amber-400 underline decoration-amber-400 underline-offset-4">原則用犯案那一天的舊法；但如果新法變輕了，國家就大方送你大紅包（用最輕的新法）！</span>」
                  </p>
                </div>

                <div class="p-4 rounded-xl bg-amber-100/60 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800/60 space-y-2 text-xs sm:text-[13px] text-slate-800 dark:text-slate-200 leading-relaxed">
                  <div class="font-black text-amber-900 dark:text-amber-200 flex items-center gap-1.5 text-sm">
                    <span>🍽️</span>
                    <span>生活超有感比喻：吃到飽餐廳結帳時菜單改版怎麼算？</span>
                  </div>
                  <p>
                    想像你走進一家吃到飽餐廳，進門時門口看板寫「每人 500 元」。你吃飽要結帳時，店家突然把招牌換成「每人 800 元」，要求你付 800。你一定大罵黑心：我進門時是 500 啊！這就是<strong>「原則從舊」</strong>。<br>
                    但如果結帳時店家推出全新週年慶「全館半價只要 300 元」，老闆笑瞇瞇說：「我們剛改版，算你 300 優惠價就好！」你一定開心接受。這就是<strong>「例外從輕」</strong>！對人民有利的，刑法全面歡迎！
                  </p>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
                  <div class="p-3.5 rounded-xl bg-white dark:bg-slate-900 border-2 border-blue-300 dark:border-blue-700 space-y-1">
                    <span class="font-black text-blue-800 dark:text-blue-300 block">原則：從舊（§ 2 Ⅰ 本文）</span>
                    <span class="text-slate-700 dark:text-slate-200 font-medium">新法變重或新增處罰時，一律依照行為時的舊法，絕不加重人民負擔。</span>
                  </div>
                  <div class="p-3.5 rounded-xl bg-white dark:bg-slate-900 border-2 border-emerald-300 dark:border-emerald-700 space-y-1">
                    <span class="font-black text-emerald-800 dark:text-emerald-300 block">例外：從輕（§ 2 Ⅰ 但書）</span>
                    <span class="text-slate-700 dark:text-slate-200 font-medium">新法廢除處罰或減輕刑度時，適用最有利的新法，貫徹人權保障。</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <!-- 三、案例 2-1：拘禁跨越修法案（教材第 2-9 ～ 2-10 頁） -->
          <section id="sec-p0ch2-sec1-case-2-1" class="space-y-6 pt-2">
            <div class="flex items-center gap-3">
              <span class="w-2 h-6 rounded-full bg-indigo-600"></span>
              <h3 class="text-lg sm:text-xl font-black text-slate-900 dark:text-white tracking-tight">
                三、案例 2-1：拘禁跨越修法案與「行為時」之精準認定（教材第 2-9 ～ 2-10 頁）
              </h3>
            </div>

            <!-- 案例卡片 2-1 -->
            <div id="case-card-2-1" data-case="2-1" class="rounded-3xl border-2 border-indigo-500/40 bg-white dark:bg-[#111726] shadow-md overflow-hidden transition-all duration-300">
              
              <!-- 案例標頭 -->
              <div class="p-5 sm:p-6 bg-gradient-to-r from-indigo-50/80 via-blue-50/50 to-transparent dark:from-indigo-950/40 dark:via-blue-950/20 border-b border-slate-100 dark:border-white/[0.08] flex flex-wrap items-center justify-between gap-3">
                <div class="flex items-center gap-2.5">
                  <span class="w-8 h-8 rounded-xl bg-indigo-600 text-white font-black text-sm flex items-center justify-center shadow-md shadow-indigo-600/30">
                    2-1
                  </span>
                  <div>
                    <div class="flex items-center gap-2">
                      <span class="text-xs font-mono font-bold text-indigo-600 dark:text-indigo-400">CASE 2-1 • 經典國考爭點</span>
                      <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 font-bold">教材第 2-9 ~ 2-10 頁</span>
                    </div>
                    <h4 class="text-base sm:text-lg font-black text-slate-900 dark:text-white">
                      拘禁跨越新舊法案——繼續犯之「行為時」認定
                    </h4>
                  </div>
                </div>

                <div class="flex items-center gap-2">
                  <button type="button" class="statute-popover-trigger px-2.5 py-1 rounded-xl bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-semibold border border-slate-200 dark:border-slate-700 shadow-2xs hover:text-indigo-600 transition-colors cursor-pointer" data-statute="302">
                    📜 刑法 § 302 私行拘禁
                  </button>
                  <button type="button" onclick="copyCaseNote('case-2-1', this)" class="case-copy-btn px-3 py-1 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold shadow-md shadow-indigo-600/20 transition-all flex items-center gap-1.5 cursor-pointer">
                    <span>📋</span>
                    <span>複製筆記</span>
                  </button>
                </div>
              </div>

              <!-- 案例內容主體 -->
              <div class="p-6 sm:p-8 space-y-6">
                
                <!-- 案件事實 (Fact Box) -->
                <div class="p-4 sm:p-5 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-2.5">
                  <div class="flex items-center gap-2 text-xs font-bold text-slate-800 dark:text-slate-200">
                    <span class="text-base">📌</span>
                    <span>教材原文案件事實（第 2-9 頁）：</span>
                  </div>
                  <blockquote class="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed italic border-l-3 border-indigo-400 pl-3">
                    甲在民國 99 年 1 月 1 日將乙拘禁在其別墅，剝奪其行動自由，僅給予少量的食物和水。警察於民國 100 年 2 月 1 日破案，救出驚恐未定的乙。這中間立法院於民國 100 年 1 月 10 日修正刑法 § 302 私行拘禁罪，將其法定刑從 5 年以下有期徒刑變更為 10 年以下有期徒刑。法院依照新法判處甲 9 年有期徒刑，甲抗辯法院適用新法違反法律不溯及既往原則、刑法 § 2 Ⅰ 從舊從輕原則，是否有理由？
                  </blockquote>
                </div>

                <!-- 作者權威問題導引 (教材第 2-10 頁 原文金句) -->
                <div class="p-4 sm:p-5 rounded-2xl bg-blue-50/70 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800 space-y-2">
                  <div class="flex items-center gap-2 text-xs font-bold text-blue-800 dark:text-blue-300">
                    <span>◀ 問題導引 ▶</span>
                    <span class="text-[10px] font-mono px-1.5 py-0.5 rounded bg-blue-500/10 text-blue-600 dark:text-blue-400 font-bold">教材第 2-10 頁 原文分析</span>
                  </div>
                  <blockquote class="text-xs sm:text-sm text-slate-800 dark:text-slate-200 leading-relaxed italic border-l-3 border-blue-500 pl-3">
                    「請注意，§ 2 限於『行為後』法律變更者，方有從舊從輕原則之適用，若是『行為時』法律有變更者，則與 § 2 無關。雖然一般犯罪鮮少在行為時發生法律變更，但甲所犯的私行拘禁罪即屬特例，該罪是行為具有持續性的繼續犯，自 99 年 1 月 1 日起至 100 年 2 月 1 日止，均為私行拘禁行為。故 100 年 1 月 10 日的法律變更是行為當中的法律變更，從而無 § 2 適用的餘地，甲的抗辯無理由。」
                  </blockquote>
                </div>

                <!-- 時間軸視覺化推導 (Timeline Box) -->
                <div class="p-4 sm:p-5 rounded-2xl bg-indigo-50/40 dark:bg-indigo-950/20 border border-indigo-200/80 dark:border-indigo-900/40 space-y-3">
                  <span class="text-xs font-mono font-bold text-indigo-700 dark:text-indigo-300 uppercase tracking-wider block">
                    ⏱️ 行為進行與法律變更時間軸：
                  </span>
                  <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                    <div class="p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-1">
                      <span class="text-[10px] font-mono text-slate-400 block">99.01.01（著手拘禁）</span>
                      <span class="font-bold text-slate-800 dark:text-slate-200 block">舊法施行中</span>
                      <span class="text-[11px] text-slate-500">法定刑：5 年以下</span>
                    </div>
                    <div class="p-3 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-300 dark:border-amber-800 space-y-1">
                      <span class="text-[10px] font-mono text-amber-600 dark:text-amber-400 block font-bold">100.01.10（立法院修法）</span>
                      <span class="font-bold text-amber-800 dark:text-amber-300 block">新法施行（刑度加重）</span>
                      <span class="text-[11px] text-amber-700 dark:text-amber-400 font-bold">法定刑變更為：10 年以下</span>
                    </div>
                    <div class="p-3 rounded-xl bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-300 dark:border-indigo-800 space-y-1">
                      <span class="text-[10px] font-mono text-indigo-600 dark:text-indigo-400 block font-bold">100.02.01（警方破案救出）</span>
                      <span class="font-bold text-indigo-800 dark:text-indigo-300 block">犯罪行為終了日 ⭐</span>
                      <span class="text-[11px] text-indigo-600 dark:text-indigo-300 font-bold">行為終了時已屬新法時代！</span>
                    </div>
                  </div>
                </div>

                <!-- 階層審查與核心爭點透視 (Legal Analysis) -->
                <div class="space-y-4">
                  <h5 class="text-sm font-black text-slate-900 dark:text-white flex items-center gap-2">
                    <span class="w-1.5 h-4 bg-indigo-600 rounded-full"></span>
                    <span>法理精析：繼續犯（Dauerdelikt）之行為時認定</span>
                  </h5>

                  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
                    <!-- 爭點 1 -->
                    <div class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-2">
                      <span class="text-xs font-bold text-indigo-600 dark:text-indigo-400 block">
                        1. 繼續犯 vs 狀態犯之區別
                      </span>
                      <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                        刑法第 302 條私行拘禁罪為典型之<span class="font-bold text-indigo-600 dark:text-indigo-400">「繼續犯」</span>。行為人剝奪被害人行動自由之違法狀態與構成要件行為，從 99.01.01 起至 100.02.01 破案止，始終處於不間斷之實行狀態中。
                      </p>
                    </div>

                    <!-- 爭點 2 -->
                    <div class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-2">
                      <span class="text-xs font-bold text-indigo-600 dark:text-indigo-400 block">
                        2. 犯罪行為終了時點之確定
                      </span>
                      <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                        繼續犯之犯罪行為，並非在「著手之初」即告結束，而是在<span class="font-bold text-indigo-600 dark:text-indigo-400">「違法狀態終止時（破案之日）」</span>始告完成！因此甲的犯罪行為是在民國 100 年 2 月 1 日才實行終了。
                      </p>
                    </div>
                  </div>

                  <!-- 最終審查結論卡片 -->
                  <div class="p-4 sm:p-5 rounded-2xl bg-emerald-50/60 dark:bg-emerald-950/30 border border-emerald-300 dark:border-emerald-800 space-y-2">
                    <div class="flex items-center gap-2 text-xs font-bold text-emerald-800 dark:text-emerald-300">
                      <span>⚖️ 審查結論：甲之抗辯為【無理由】</span>
                    </div>
                    <p class="text-xs sm:text-sm text-emerald-900 dark:text-emerald-200 leading-relaxed">
                      本案法律修正發生在甲犯罪行為繼續進行中，甲的行為終了時法律已經完成修正施行。因此，法院適用新法處罰甲，乃是適用甲<span class="font-bold underline decoration-emerald-500">「行為終了時之法律（即行為時法）」</span>，並非「行為後法律有變更」！既係適用行為時法，自無適用刑法第 2 條第 1 項從舊從輕原則比較新舊法之餘地，亦未違反法不溯及既往原則，法院判處甲 9 年有期徒刑合法無訛。
                    </p>
                  </div>
                </div>

                <!-- 2026 現行法規查核區塊 (Statutory Currency Box) -->
                <div class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 space-y-2.5 text-xs">
                  <div class="flex items-center justify-between border-b border-slate-200/80 dark:border-slate-800 pb-1.5">
                    <span class="font-bold text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
                      <span>📌</span>
                      <span>【2026 現行法規查核狀態】</span>
                    </span>
                    <span class="px-2 py-0.5 rounded bg-emerald-50 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 font-mono font-bold text-[10px]">
                      現行法一致核對
                    </span>
                  </div>
                  <div class="space-y-1.5 text-slate-600 dark:text-slate-300 leading-relaxed text-[11.5px]">
                    <div>
                      • <strong class="text-slate-800 dark:text-slate-200">刑法第 2 條第 1 項（從舊從輕原則）</strong>：自 94 年 2 月 2 日修正公布、95 年 7 月 1 日施行至今文字維持現行法，確立「從舊為原則、從輕為例外」之體系。
                    </div>
                    <div>
                      • <strong class="text-slate-800 dark:text-slate-200">刑法第 302 條（私行拘禁罪）</strong>：民國 108 年 5 月 29 日修正公布調高罰金刑；民國 112 年 5 月 31 日增訂第 302 條之 1（加重剝奪行動自由罪，如三人以上共同犯之、拘禁七日以上等，處一年以上七年以下有期徒刑；因而致人於死者處無期徒刑或十年以上有期徒刑），嚴懲求職詐騙拘禁犯罪。
                    </div>
                    <div>
                      • <strong class="text-slate-800 dark:text-slate-200">實務判例要旨</strong>：最高法院 89 年台上字第 5235 號判決：「繼續犯在行為繼續進行中，法律有變更者，因其行為終了在新法施行之後，應逕行適用新法，無刑法第二條第一項但書之適用。」
                    </div>
                  </div>
                  <div class="pt-1 flex items-center justify-between text-[11px] text-slate-400">
                    <span>資料來源：全國法規資料庫、司法院裁判書系統</span>
                    <span class="font-mono">P. 2-9 ~ 2-10 核對完畢</span>
                  </div>
                </div>

                <!-- 🐣 【超亮眼白話文專區】案例 2-1 繼續犯小白秒懂專區 -->
                <div class="rounded-2xl p-5 sm:p-6 bg-gradient-to-br from-amber-50 via-orange-50/80 to-yellow-100 dark:from-[#2a1c0c] dark:via-[#221608] dark:to-[#171005] border-2 border-amber-400 dark:border-amber-500 border-l-[8px] border-l-amber-500 shadow-md shadow-amber-500/10 space-y-4">
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
                          把人關了一年中間法律加重，小偷大喊「我抓人那天很輕」能脫罪嗎？
                        </h4>
                      </div>
                    </div>
                    <span class="text-xs font-bold text-amber-800 dark:text-amber-300 bg-amber-100 dark:bg-amber-900/60 px-2.5 py-1 rounded-lg border border-amber-300 dark:border-amber-700">
                      🎯 繼續犯行為時
                    </span>
                  </div>

                  <div class="p-3.5 sm:p-4 rounded-xl bg-white dark:bg-slate-900 border-2 border-amber-300 dark:border-amber-600 shadow-xs">
                    <div class="text-[11px] font-black text-amber-600 dark:text-amber-400 uppercase tracking-wider mb-1">
                      📢 一句話大白話翻譯
                    </div>
                    <p class="text-sm sm:text-base font-black text-slate-900 dark:text-white leading-relaxed">
                      👉「<span class="text-amber-600 dark:text-amber-400 underline decoration-amber-400 underline-offset-4">關著不放的每一秒都在犯罪！</span>只要你到新法生效後還繼續關著人不放，就叫做『在新法生效時犯罪』，一律適用加重後的新法！」
                    </p>
                  </div>

                  <div class="p-4 rounded-xl bg-amber-100/60 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800/60 space-y-2 text-xs sm:text-[13px] text-slate-800 dark:text-slate-200 leading-relaxed">
                    <div class="font-black text-amber-900 dark:text-amber-200 flex items-center gap-1.5 text-sm">
                      <span>🚗</span>
                      <span>生活超有感比喻：租車超時不還，中間租車公司宣佈調漲租金</span>
                    </div>
                    <p>
                      想像你租了一台車原本每天 1,000 元，你合約到期故意不還一直開。開到第 20 天，租車公司公告「違法占用車輛每天罰款調高為 3,000 元」。你繼續霸占開到第 30 天才被警察抓到。你不能跟老闆說「我第 1 天霸占時罰款只有 1,000 元，所以後面 10 天也只能罰 1,000」！因為你在新規定公佈後，<strong>每天都還在霸占車輛</strong>，新法生效時你正在犯法，當然適用新規定！
                    </p>
                  </div>

                  <div class="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs">
                    <div class="p-3.5 rounded-xl bg-white dark:bg-slate-900 border-2 border-indigo-300 dark:border-indigo-700 space-y-1">
                      <span class="font-black text-indigo-800 dark:text-indigo-300 block">口訣 ㈠：繼續犯不停歇</span>
                      <span class="text-slate-700 dark:text-slate-200 font-medium">私行拘禁是違法狀態持續進行，行為尚未終了。</span>
                    </div>
                    <div class="p-3.5 rounded-xl bg-white dark:bg-slate-900 border-2 border-purple-300 dark:border-purple-700 space-y-1">
                      <span class="font-black text-purple-800 dark:text-purple-300 block">口訣 ㈡：跨越修法非事後</span>
                      <span class="text-slate-700 dark:text-slate-200 font-medium">修法發生在犯罪進行中，屬於「行為時變更」而非「行為後」。</span>
                    </div>
                    <div class="p-3.5 rounded-xl bg-white dark:bg-slate-900 border-2 border-emerald-300 dark:border-emerald-700 space-y-1">
                      <span class="font-black text-emerald-800 dark:text-emerald-300 block">口訣 ㈢：直接適用新法</span>
                      <span class="text-slate-700 dark:text-slate-200 font-medium">以行為終了時之新法為行為時法，無 § 2 從舊從輕適用！</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </section>

          <!-- 四、案例 2-2：限時法之追溯效力案（教材第 2-10 頁 原文案例） -->
          <section id="sec-p0ch2-sec1-case-2-2" class="space-y-6 pt-2">
            <div class="flex items-center gap-3">
              <span class="w-2 h-6 rounded-full bg-indigo-600"></span>
              <h3 class="text-lg sm:text-xl font-black text-slate-900 dark:text-white tracking-tight">
                四、案例 2-2：限時法之追溯效力案（教材第 2-10 頁）
              </h3>
            </div>

            <!-- 案例卡片 2-2 -->
            <div id="case-card-2-2" data-case="2-2" class="rounded-3xl border-2 border-purple-500/40 bg-white dark:bg-[#111726] shadow-md overflow-hidden transition-all duration-300">
              
              <!-- 案例標頭 -->
              <div class="p-5 sm:p-6 bg-gradient-to-r from-purple-50/80 via-indigo-50/50 to-transparent dark:from-purple-950/40 dark:via-indigo-950/20 border-b border-slate-100 dark:border-white/[0.08] flex flex-wrap items-center justify-between gap-3">
                <div class="flex items-center gap-2.5">
                  <span class="w-8 h-8 rounded-xl bg-purple-600 text-white font-black text-sm flex items-center justify-center shadow-md shadow-purple-600/30">
                    2-2
                  </span>
                  <div>
                    <div class="flex items-center gap-2">
                      <span class="text-xs font-mono font-bold text-purple-600 dark:text-purple-400">CASE 2-2 • 國考爭點里程碑</span>
                      <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-purple-500/10 text-purple-600 dark:text-purple-400 font-bold">教材第 2-10 頁</span>
                    </div>
                    <h4 class="text-base sm:text-lg font-black text-slate-900 dark:text-white">
                      限時法之追溯效力——非常時期法律失效後之審判
                    </h4>
                  </div>
                </div>

                <div class="flex items-center gap-2">
                  <button type="button" class="statute-popover-trigger px-2.5 py-1 rounded-xl bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-semibold border border-slate-200 dark:border-slate-700 shadow-2xs hover:text-purple-600 transition-colors cursor-pointer" data-statute="2">
                    📜 刑法 § 2 從舊從輕
                  </button>
                  <button type="button" onclick="copyCaseNote('case-2-2', this)" class="case-copy-btn px-3 py-1 rounded-xl bg-purple-600 hover:bg-purple-700 text-white text-xs font-bold shadow-md shadow-purple-600/20 transition-all flex items-center gap-1.5 cursor-pointer">
                    <span>📋</span>
                    <span>複製筆記</span>
                  </button>
                </div>
              </div>

              <!-- 案例內容主體 -->
              <div class="p-6 sm:p-8 space-y-6">
                
                <!-- 案件事實 (Fact Box) -->
                <div class="p-4 sm:p-5 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-2.5">
                  <div class="flex items-center gap-2 text-xs font-bold text-slate-800 dark:text-slate-200">
                    <span class="text-base">📌</span>
                    <span>教材原文案件事實（第 2-10 頁）：</span>
                  </div>
                  <blockquote class="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed italic border-l-3 border-purple-500 pl-3">
                    甲在動員戡亂時期觸犯「動員戡亂時期國家安全法」之規定，而於動員戡亂時期結束後始受審判，試問法官可否適用動員戡亂時期國家安全法論罪科刑？
                  </blockquote>
                </div>

                <!-- 作者權威問題導引 (教材第 2-10 頁 原文引述) -->
                <div class="p-4 sm:p-5 rounded-2xl bg-purple-50/70 dark:bg-purple-950/40 border border-purple-200 dark:border-purple-800 space-y-2">
                  <div class="flex items-center gap-2 text-xs font-bold text-purple-800 dark:text-purple-300">
                    <span>◀ 問題導引 ▶</span>
                    <span class="text-[10px] font-mono px-1.5 py-0.5 rounded bg-purple-500/10 text-purple-600 dark:text-purple-400 font-bold">教材第 2-10 頁 原文定義</span>
                  </div>
                  <blockquote class="text-xs sm:text-sm text-slate-800 dark:text-slate-200 leading-relaxed italic border-l-3 border-purple-500 pl-3">
                    「所謂限時法指基於一定之需要，自始規定僅於特定期間內生效之法律，如題述之動員戡亂時期國家安全法，便只適用於動員戡亂時期，超過適用期間，該法自動失效。限時法是否適用 § 2，否定說認為限時法之變更並非刑事政策在評價上有所轉變，而是基於立法理由的消失而來，故不宜依從舊從輕原則解除處罰。肯定說（76年第12次刑庭總會決議）認為否定說將造成刑罰權的擴張，在未就限時法設有一般性規定之前，仍應適用從舊從輕原則，以免違反罪刑法定原則。」
                  </blockquote>
                </div>

                <!-- 兩大學說深度對照矩陣 -->
                <div class="space-y-3">
                  <h5 class="text-sm font-black text-slate-900 dark:text-white flex items-center gap-2">
                    <span class="w-1.5 h-4 bg-purple-600 rounded-full"></span>
                    <span>限時法是否適用刑法第 2 條從舊從輕原則？學說與實務大對抗</span>
                  </h5>

                  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <!-- ① 否定說 -->
                    <div class="p-5 rounded-2xl bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-800 space-y-3">
                      <div class="flex items-center justify-between">
                        <span class="px-2.5 py-0.5 rounded-lg text-xs font-bold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-300">
                          ① 否定說（限時法追溯力肯定說）
                        </span>
                        <span class="text-[11px] font-mono text-slate-400">學者少數說</span>
                      </div>
                      <div class="space-y-2 text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                        <div>
                          • <strong class="text-slate-800 dark:text-slate-200">法理基礎</strong>：限時法之失效，並非立法者在實質刑事政策評價上「不再認為該行為可罰」，純粹是因特定非常情勢或立法理由之消失。
                        </div>
                        <div>
                          • <strong class="text-slate-800 dark:text-slate-200">弊端防範</strong>：若適用從舊從輕原則免罰，可能誘使人民在限時法屆滿前肆意犯法，或於案發後惡意拖延訴訟直至法律失效以求脫罪，嚴重削弱限時法預防犯罪之嚴肅威嚇功能。
                        </div>
                        <div>
                          • <strong class="text-slate-800 dark:text-slate-200">結論</strong>：即使法律失效，仍應依行為時之限時法追溯處罰。
                        </div>
                      </div>
                    </div>

                    <!-- ② 肯定說 (實務通說 ⭐) -->
                    <div class="p-5 rounded-2xl bg-purple-50/60 dark:bg-purple-950/30 border-2 border-purple-400/80 shadow-sm space-y-3">
                      <div class="flex items-center justify-between">
                        <span class="px-2.5 py-0.5 rounded-lg text-xs font-bold bg-purple-600 text-white shadow-xs">
                          ② 肯定說（最高法院 76 年決議 ⭐）
                        </span>
                        <span class="text-[11px] font-mono font-bold text-purple-600 dark:text-purple-400">司法實務通說</span>
                      </div>
                      <div class="space-y-2 text-xs text-slate-700 dark:text-slate-200 leading-relaxed">
                        <div>
                          • <strong class="text-purple-900 dark:text-purple-300">嚴守罪刑法定</strong>：否定說在欠缺形式法律明文除外規定的情況下逕行剝奪人民從舊從輕保障，實質上將造成國家刑罰權的非法擴張。
                        </div>
                        <div>
                          • <strong class="text-purple-900 dark:text-purple-300">立法權未設除外前不可造法</strong>：外國立法例（如德、日）多於總則明定限時法之追溯效力，我國刑法總則既無一般性除外明文，法院即應嚴格恪守刑法第 2 條第 1 項！
                        </div>
                        <div>
                          • <strong class="text-purple-900 dark:text-purple-300">本案結論</strong>：限時法失效後，行為後法律既已廢止刑罰，依從輕原則（§ 2 Ⅰ 但書）應諭知**免訴判決**，法官**不得**再適用該法論罪科刑！
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- 2026 現行法規查核區塊 (Statutory Currency Box) -->
                <div class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 space-y-2.5 text-xs">
                  <div class="flex items-center justify-between border-b border-slate-200/80 dark:border-slate-800 pb-1.5">
                    <span class="font-bold text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
                      <span>📌</span>
                      <span>【2026 權威判例與特別法發展查核】</span>
                    </span>
                    <span class="px-2 py-0.5 rounded bg-purple-50 dark:bg-purple-950 text-purple-600 dark:text-purple-400 font-mono font-bold text-[10px]">
                      實務核心見解
                    </span>
                  </div>
                  <div class="space-y-1.5 text-slate-600 dark:text-slate-300 leading-relaxed text-[11.5px]">
                    <div>
                      • <strong class="text-slate-800 dark:text-slate-200">最高法院 76 年度第 12 次刑事庭會議決議</strong>：我國刑法對限時法並無特別規定，限時法滿期失效，該法之刑罰規定既已廢止，自屬法律變更，應依刑法第 2 條第 1 項但書適用最有利於行為人之法律（諭知免訴）。
                    </div>
                    <div>
                      • <strong class="text-slate-800 dark:text-slate-200">現代特別條例對照（嚴重特殊傳染性肺炎防治特別條例）</strong>：該條例施行期間至民國 112 年 6 月 30 日止，期滿後自動失效。實務上凡於期間內犯罪而於失效後始起訴或裁判者，因該法無明文排除刑法第 2 條，同依肯定說意旨處理。
                    </div>
                  </div>
                  <div class="pt-1 flex items-center justify-between text-[11px] text-slate-400">
                    <span>資料來源：司法院刑事庭會議決議彙編、立法院法律系統</span>
                    <span class="font-mono">P. 2-10 核對完畢</span>
                  </div>
                </div>

                <!-- 🐣 【超亮眼白話文專區】案例 2-2 限時法小白秒懂專區 -->
                <div class="rounded-2xl p-5 sm:p-6 bg-gradient-to-br from-amber-50 via-orange-50/80 to-yellow-100 dark:from-[#2a1c0c] dark:via-[#221608] dark:to-[#171005] border-2 border-amber-400 dark:border-amber-500 border-l-[8px] border-l-amber-500 shadow-md shadow-amber-500/10 space-y-4">
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
                          防颱條例過期後，還能回頭抓颱風天哄抬菜價的菜販嗎？
                        </h4>
                      </div>
                    </div>
                    <span class="text-xs font-bold text-amber-800 dark:text-amber-300 bg-amber-100 dark:bg-amber-900/60 px-2.5 py-1 rounded-lg border border-amber-300 dark:border-amber-700">
                      🎯 限時法之追溯力
                    </span>
                  </div>

                  <div class="p-3.5 sm:p-4 rounded-xl bg-white dark:bg-slate-900 border-2 border-amber-300 dark:border-amber-600 shadow-xs">
                    <div class="text-[11px] font-black text-amber-600 dark:text-amber-400 uppercase tracking-wider mb-1">
                      📢 一句話大白話翻譯
                    </div>
                    <p class="text-sm sm:text-base font-black text-slate-900 dark:text-white leading-relaxed">
                      👉「<span class="text-amber-600 dark:text-amber-400 underline decoration-amber-400 underline-offset-4">最高法院 76 年決議採嚴格罪刑法定：限時法過期失效算『法律廢止』，依從輕原則一律判免訴，不能事後秋後算帳！</span>」
                    </p>
                  </div>

                  <div class="p-4 rounded-xl bg-amber-100/60 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800/60 space-y-2 text-xs sm:text-[13px] text-slate-800 dark:text-slate-200 leading-relaxed">
                    <div class="font-black text-amber-900 dark:text-amber-200 flex items-center gap-1.5 text-sm">
                      <span>⏰</span>
                      <span>生活超有感比喻：限時搶購活動結束後，主辦單位能回頭補收差價嗎？</span>
                    </div>
                    <p>
                      想像特別條例就像「限定 3 天的快閃活動」。法條自始就寫明「期間屆滿自動失效」。最高法院認為，刑法沒有像德國刑法明文規定「限時法失效後仍得追訴」，既然台灣刑法沒開這個後門，法律失效就等同廢止刑罰，法官就必須依法判決<strong>免訴</strong>，不能靠法官自己擴張刑罰權硬抓！
                    </p>
                  </div>

                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
                    <div class="p-3.5 rounded-xl bg-white dark:bg-slate-900 border-2 border-purple-300 dark:border-purple-700 space-y-1">
                      <span class="font-black text-purple-800 dark:text-purple-300 block">實務通說（76 年決議 ⭐）</span>
                      <span class="text-slate-700 dark:text-slate-200 font-medium">限時法失效屬法律廢止，適用 § 2 Ⅰ 但書從輕免訴，嚴守罪刑法定。</span>
                    </div>
                    <div class="p-3.5 rounded-xl bg-white dark:bg-slate-900 border-2 border-slate-300 dark:border-slate-700 space-y-1">
                      <span class="font-black text-slate-800 dark:text-slate-200 block">學說少數說（追溯力肯定說）</span>
                      <span class="text-slate-700 dark:text-slate-200 font-medium">認為失效只是情勢變更而非政策免罰，主張應追溯處罰以杜絕投機。</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </section>

          <!-- 五、(二) 保安處分之時間效力（教材第 2-10 頁 原文規範） -->
          <section id="sec-p0ch2-sec1-security-measures" class="space-y-6 pt-2">
            <div class="flex items-center gap-3">
              <span class="w-2 h-6 rounded-full bg-emerald-600"></span>
              <h3 class="text-lg sm:text-xl font-black text-slate-900 dark:text-white tracking-tight">
                五、保安處分之時間效力（教材第 2-10 頁）
              </h3>
            </div>

            <div class="p-6 rounded-3xl border border-slate-200 dark:border-white/[0.08] bg-white dark:bg-[#101623] shadow-sm space-y-5">
              <div class="flex items-center justify-between">
                <span class="text-xs font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5 font-mono">
                  <span>📖</span>
                  <span>教材第 2-10 頁 (二) 保安處分原文</span>
                </span>
                <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-bold">
                  雙軌區分原則
                </span>
              </div>

              <blockquote class="p-4 rounded-2xl border-l-4 border-emerald-500 bg-emerald-50/50 dark:bg-emerald-950/30 text-xs sm:text-sm text-slate-700 dark:text-slate-200 leading-relaxed italic">
                「保安處分可以區分為『拘束人身自由（如監護、強制治療）』與『非拘束人身自由（如保護管束、驅逐出境）』兩種類型，由於拘束人身自由之保安處分已經與刑罰相去不遠，亦有從舊從輕原則之適用。至於非拘束人身自由之保安處分，則依據 § 2 Ⅱ 適用裁判時之法律。」
              </blockquote>

              <!-- 保安處分雙軌對比卡片 -->
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <!-- 類型 A：拘束人身自由 -->
                <div class="p-5 rounded-2xl bg-amber-50/50 dark:bg-amber-950/20 border-2 border-amber-300 dark:border-amber-800 space-y-3">
                  <div class="flex items-center justify-between">
                    <span class="px-2.5 py-0.5 rounded-lg text-xs font-bold bg-amber-500 text-white">
                      類型 A：拘束人身自由之保安處分
                    </span>
                    <span class="text-xs font-mono font-bold text-amber-700 dark:text-amber-400">適用 § 2 Ⅰ</span>
                  </div>
                  <div class="space-y-1.5 text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                    <div>
                      • <strong class="text-slate-900 dark:text-white">典型樣態</strong>：刑法 § 87 監護處分、§ 91-1 強制治療等。
                    </div>
                    <div>
                      • <strong class="text-slate-900 dark:text-white">適用法則</strong>：<strong class="text-amber-700 dark:text-amber-400">從舊從輕原則</strong>（行為時法為原則，最有利於行為人為例外）。
                    </div>
                    <div>
                      • <strong class="text-slate-900 dark:text-white">憲法理由</strong>：司法院釋字第 471 號、第 799 號解釋強調，人身自由為一切基本權之基石，拘束自由之保安處分實質嚴苛度等同刑罰，受罪刑法定嚴格防線拘束。
                    </div>
                  </div>
                </div>

                <!-- 類型 B：非拘束人身自由 -->
                <div class="p-5 rounded-2xl bg-blue-50/50 dark:bg-blue-950/20 border-2 border-blue-300 dark:border-blue-800 space-y-3">
                  <div class="flex items-center justify-between">
                    <span class="px-2.5 py-0.5 rounded-lg text-xs font-bold bg-blue-600 text-white">
                      類型 B：非拘束人身自由之保安處分
                    </span>
                    <span class="text-xs font-mono font-bold text-blue-700 dark:text-blue-400">適用 § 2 Ⅱ</span>
                  </div>
                  <div class="space-y-1.5 text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                    <div>
                      • <strong class="text-slate-900 dark:text-white">典型樣態</strong>：保護管束（§ 92）、驅逐出境（§ 95）、付保護管束之宣告等。
                    </div>
                    <div>
                      • <strong class="text-slate-900 dark:text-white">適用法則</strong>：<strong class="text-blue-700 dark:text-blue-400">裁判時法（從新原則）</strong>。
                    </div>
                    <div>
                      • <strong class="text-slate-900 dark:text-white">立法意旨</strong>：刑法第 2 條第 2 項明定：「非拘束人身自由之保安處分適用裁判時之法律。」著眼於改善預防之教育矯治目的，採取最新之社會防衛處遇手段。
                    </div>
                  </div>
                </div>
              </div>

              <!-- 🐣 【超亮眼白話文專區】保安處分雙軌制小白秒懂專區 -->
              <div class="rounded-2xl p-5 sm:p-6 bg-gradient-to-br from-amber-50 via-orange-50/80 to-yellow-100 dark:from-[#2a1c0c] dark:via-[#221608] dark:to-[#171005] border-2 border-amber-400 dark:border-amber-500 border-l-[8px] border-l-amber-500 shadow-md shadow-amber-500/10 space-y-4">
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
                        送去精神病院治療叫「保安處分」，到底算不算刑罰？修法改版怎麼算？
                      </h4>
                    </div>
                  </div>
                  <span class="text-xs font-bold text-amber-800 dark:text-amber-300 bg-amber-100 dark:bg-amber-900/60 px-2.5 py-1 rounded-lg border border-amber-300 dark:border-amber-700">
                    🎯 保安處分雙軌制
                  </span>
                </div>

                <div class="p-3.5 sm:p-4 rounded-xl bg-white dark:bg-slate-900 border-2 border-amber-300 dark:border-amber-600 shadow-xs">
                  <div class="text-[11px] font-black text-amber-600 dark:text-amber-400 uppercase tracking-wider mb-1">
                    📢 一句話大白話翻譯
                  </div>
                  <p class="text-sm sm:text-base font-black text-slate-900 dark:text-white leading-relaxed">
                    👉「<span class="text-amber-600 dark:text-amber-400 underline decoration-amber-400 underline-offset-4">只要把你關起來限制自由的，名字叫得再好聽都等同坐牢，必須從舊從輕！</span>沒把你關起來的（保護管束），才能直接用最新規定！」
                  </p>
                </div>

                <div class="p-4 rounded-xl bg-amber-100/60 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800/60 space-y-2 text-xs sm:text-[13px] text-slate-800 dark:text-slate-200 leading-relaxed">
                  <div class="font-black text-amber-900 dark:text-amber-200 flex items-center gap-1.5 text-sm">
                    <span>🏥</span>
                    <span>生活超有感比喻：【強制居家隔離 14 天 vs 定期回傳體溫】</span>
                  </div>
                  <p>
                    把你強制鎖在隔離所 14 天（拘束自由），不管名目叫「醫療」還是「處罰」，你的人身自由就是被剝奪了！大法官釋字 799 號說這實質上跟刑罰沒兩樣，所以<strong>修法加長天數絕對不能隨意溯及適用（從舊從輕）</strong>。<br>
                    但如果只是要求你「每週去找觀護人報到聊天、回傳體溫」（保護管束，非拘束自由），這是為了最新醫療與社會防衛，所以<strong>直接適用裁判當下最新的規定（從新原則）</strong>！
                  </p>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
                  <div class="p-3.5 rounded-xl bg-white dark:bg-slate-900 border-2 border-amber-300 dark:border-amber-700 space-y-1">
                    <span class="font-black text-amber-800 dark:text-amber-300 block">拘束人身自由（監護、強制治療）</span>
                    <span class="text-slate-700 dark:text-slate-200 font-medium">適用 § 2 Ⅰ 從舊從輕原則，等同刑罰嚴格防線，保障人身自由。</span>
                  </div>
                  <div class="p-3.5 rounded-xl bg-white dark:bg-slate-900 border-2 border-blue-300 dark:border-blue-700 space-y-1">
                    <span class="font-black text-blue-800 dark:text-blue-300 block">非拘束人身自由（保護管束、驅逐出境）</span>
                    <span class="text-slate-700 dark:text-slate-200 font-medium">適用 § 2 Ⅱ 裁判時之法律（從新原則），著眼於最新矯治預防需要。</span>
                  </div>
                </div>
              </div>
          </section>

          <!-- 六、地的適用效力：屬地原則三大支柱（教材第 2-10 ～ 2-11 頁） -->
          <section id="sec-p0ch2-sec1-spatial-scope" class="space-y-6 pt-2">
            <div class="flex items-center gap-3">
              <span class="w-2 h-6 rounded-full bg-purple-600"></span>
              <h3 class="text-lg sm:text-xl font-black text-slate-900 dark:text-white tracking-tight">
                六、地的適用效力：四大原則與屬地基準三大支柱（教材第 2-10 ～ 2-11 頁）
              </h3>
            </div>

            <!-- 天藍色概念焦點框 (Focus Box) -->
            <div class="box-legal-navy p-6 sm:p-8 rounded-3xl space-y-6">
              <div class="flex items-center justify-between border-b border-sky-300/40 dark:border-sky-700/40 pb-3">
                <div class="flex items-center gap-2">
                  <span class="text-xl">🌐</span>
                  <h4 class="text-base sm:text-lg font-black text-[#032034] dark:text-white">
                    (一) 主要基準 ➔ 屬地原則（刑法 § 3 ＋ § 4）
                  </h4>
                </div>
                <div class="flex items-center gap-2">
                  <button type="button" class="statute-popover-trigger px-2.5 py-0.5 rounded-full bg-white dark:bg-slate-800 text-[#0369a1] dark:text-sky-300 text-xs font-mono font-bold border border-sky-300 dark:border-sky-600 shadow-xs cursor-pointer hover:scale-105 transition-all" data-statute="3">
                    刑法 § 3 條文快顯 ↗
                  </button>
                  <button type="button" class="statute-popover-trigger px-2.5 py-0.5 rounded-full bg-white dark:bg-slate-800 text-[#0369a1] dark:text-sky-300 text-xs font-mono font-bold border border-sky-300 dark:border-sky-600 shadow-xs cursor-pointer hover:scale-105 transition-all" data-statute="4">
                    刑法 § 4 條文快顯 ↗
                  </button>
                </div>
              </div>

              <!-- 空間效力四大支柱橫向預覽 -->
              <div class="grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-xs">
                <div class="p-3 rounded-xl bg-white/90 dark:bg-slate-900/90 border border-sky-300 dark:border-sky-700 text-center space-y-1 shadow-xs">
                  <span class="font-bold text-[#0369a1] dark:text-sky-300 block">① 屬地原則 ⭐</span>
                  <span class="text-[11px] text-slate-500">刑法 § 3、§ 4</span>
                  <span class="text-[10px] text-sky-600 dark:text-sky-400 font-bold block">主要核心基準</span>
                </div>
                <div class="p-3 rounded-xl bg-white/60 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 text-center space-y-1">
                  <span class="font-bold text-slate-800 dark:text-slate-200 block">② 屬人原則</span>
                  <span class="text-[11px] text-slate-500">刑法 § 6、§ 7</span>
                  <span class="text-[10px] text-slate-400 block">國籍連結補充</span>
                </div>
                <div class="p-3 rounded-xl bg-white/60 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 text-center space-y-1">
                  <span class="font-bold text-slate-800 dark:text-slate-200 block">③ 保護原則</span>
                  <span class="text-[11px] text-slate-500">刑法 § 5、§ 8</span>
                  <span class="text-[10px] text-slate-400 block">國家法益維護</span>
                </div>
                <div class="p-3 rounded-xl bg-white/60 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 text-center space-y-1">
                  <span class="font-bold text-slate-800 dark:text-slate-200 block">④ 世界原則</span>
                  <span class="text-[11px] text-slate-500">刑法 § 5 各款</span>
                  <span class="text-[10px] text-slate-400 block">國際犯罪共懲</span>
                </div>
              </div>

              <!-- 教材第 2-11 頁 原文規範展開：屬地原則三大支柱 -->
              <div class="space-y-3 pt-1">
                <span class="text-xs font-mono font-bold text-[#0369a1] dark:text-sky-300 uppercase tracking-wider block">
                  📖 教材第 2-11 頁 原文規範：屬地原則之三大審查層次
                </span>

                <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <!-- 1. 核心 -->
                  <div class="p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-900/90 border-2 border-sky-300/80 dark:border-sky-700/80 space-y-2 shadow-xs">
                    <div class="flex items-center justify-between">
                      <span class="px-2 py-0.5 rounded text-[11px] font-bold bg-sky-100 dark:bg-sky-950 text-[#0369a1] dark:text-sky-300 border border-sky-300">
                        1. 核心：天然領域
                      </span>
                      <span class="text-[11px] font-mono font-bold text-slate-400">§ 3 前段</span>
                    </div>
                    <blockquote class="text-xs text-slate-700 dark:text-slate-200 leading-relaxed italic border-l-3 border-[#0369a1] pl-2.5">
                      「國家刑罰權及於任何發生於該國領域內的犯罪行為，包括領土、領海以及領空。」
                    </blockquote>
                    <p class="text-[11.5px] text-slate-500 dark:text-slate-400">
                      主權天然管轄範圍。不問行為人或被害人之國籍，凡在中華民國領土、領海（12浬）及領空內犯罪者一律適用。
                    </p>
                  </div>

                  <!-- 2. 擴張 -->
                  <div class="p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-900/90 border-2 border-indigo-300/80 dark:border-indigo-700/80 space-y-2 shadow-xs">
                    <div class="flex items-center justify-between">
                      <span class="px-2 py-0.5 rounded text-[11px] font-bold bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 border border-indigo-300">
                        2. 擴張：浮動領土
                      </span>
                      <span class="text-[11px] font-mono font-bold text-slate-400">§ 3 但書</span>
                    </div>
                    <blockquote class="text-xs text-slate-700 dark:text-slate-200 leading-relaxed italic border-l-3 border-indigo-500 pl-2.5">
                      「領域外的船艦或航空器屬於浮動領土。」
                    </blockquote>
                    <p class="text-[11.5px] text-slate-500 dark:text-slate-400">
                      航行於我國領域外公海或外國上空之本國籍船艦與民用/軍用航空器，法律擬制為我國領域，保護我國載具內部之法律秩序。
                    </p>
                  </div>

                  <!-- 3. 隔地 -->
                  <div class="p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-900/90 border-2 border-purple-300/80 dark:border-purple-700/80 space-y-2 shadow-xs">
                    <div class="flex items-center justify-between">
                      <span class="px-2 py-0.5 rounded text-[11px] font-bold bg-purple-100 dark:bg-purple-950 text-purple-700 dark:text-purple-300 border border-purple-300">
                        3. 隔地：隔地犯
                      </span>
                      <span class="text-[11px] font-mono font-bold text-slate-400">§ 4 擇一原則</span>
                    </div>
                    <blockquote class="text-xs text-slate-700 dark:text-slate-200 leading-relaxed italic border-l-3 border-purple-500 pl-2.5">
                      「只要犯罪之行為或結果，其中之一在我國領域內，即適用我國刑法。」
                    </blockquote>
                    <div class="text-[11px] text-slate-500 dark:text-slate-400 space-y-1">
                      <div>• <strong class="text-slate-700 dark:text-slate-300">未遂犯</strong>：指預期結果發生地。</div>
                      <div>• <strong class="text-slate-700 dark:text-slate-300">共同正犯</strong>：包含其他共同正犯行為地。</div>
                      <div>• <strong class="text-slate-700 dark:text-slate-300">共犯（教唆/幫助）</strong>：指正犯行為地。</div>
                    </div>
                  </div>
                </div>

                <!-- 🐣 【超亮眼白話文專區】地的適用效力與屬地原則小白秒懂專區 -->
                <div class="rounded-2xl p-5 sm:p-6 bg-gradient-to-br from-amber-50 via-orange-50/80 to-yellow-100 dark:from-[#2a1c0c] dark:via-[#221608] dark:to-[#171005] border-2 border-amber-400 dark:border-amber-500 border-l-[8px] border-l-amber-500 shadow-md shadow-amber-500/10 space-y-4">
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
                          在公海客輪、外國飛機上犯罪，台灣警察管得著嗎？
                        </h4>
                      </div>
                    </div>
                    <span class="text-xs font-bold text-amber-800 dark:text-amber-300 bg-amber-100 dark:bg-amber-900/60 px-2.5 py-1 rounded-lg border border-amber-300 dark:border-amber-700">
                      🎯 刑法 § 3 ＋ § 4
                    </span>
                  </div>

                  <div class="p-3.5 sm:p-4 rounded-xl bg-white dark:bg-slate-900 border-2 border-amber-300 dark:border-amber-600 shadow-xs">
                    <div class="text-[11px] font-black text-amber-600 dark:text-amber-400 uppercase tracking-wider mb-1">
                      📢 一句話大白話翻譯
                    </div>
                    <p class="text-sm sm:text-base font-black text-slate-900 dark:text-white leading-relaxed">
                      👉「<span class="text-amber-600 dark:text-amber-400 underline decoration-amber-400 underline-offset-4">人在台灣境內一律管；腳踩在台灣船艦飛機上算踩在台灣土地上；跨境犯罪只要行為或結果有一頭沾到台灣，通通算台灣管！</span>」
                    </p>
                  </div>

                  <div class="p-4 rounded-xl bg-amber-100/60 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800/60 space-y-2 text-xs sm:text-[13px] text-slate-800 dark:text-slate-200 leading-relaxed">
                    <div class="font-black text-amber-900 dark:text-amber-200 flex items-center gap-1.5 text-sm">
                      <span>🎯</span>
                      <span>生活超有感比喻：【隔壁鄰居站在陽台射彈弓砸破你家電視】</span>
                    </div>
                    <p>
                      如果隔壁鄰居站在他家陽台拉彈弓，石頭穿過窗戶把你客廳的大電視砸個粉碎（隔地犯）。雖然動手發射人在隔壁，但<strong>被砸碎的結果發生在你家客廳</strong>！你難道不能叫台灣警察抓他嗎？刑法第 4 條就是這個道理：「行為或結果只要有一頭沾到台灣，台灣就有權管！」
                    </p>
                  </div>

                  <div class="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs">
                    <div class="p-3.5 rounded-xl bg-white dark:bg-slate-900 border-2 border-blue-300 dark:border-blue-700 space-y-1">
                      <span class="font-black text-blue-800 dark:text-blue-300 block">領土原則（§ 3 前段）</span>
                      <span class="text-slate-700 dark:text-slate-200 font-medium">台灣本島、附屬島嶼、領海（12浬）及領空，任何人犯法皆適用。</span>
                    </div>
                    <div class="p-3.5 rounded-xl bg-white dark:bg-slate-900 border-2 border-indigo-300 dark:border-indigo-700 space-y-1">
                      <span class="font-black text-indigo-800 dark:text-indigo-300 block">浮動領土（§ 3 但書）</span>
                      <span class="text-slate-700 dark:text-slate-200 font-medium">掛中華民國國旗的船艦與航空器，不論在公海或外國領空均視為我國領域。</span>
                    </div>
                    <div class="p-3.5 rounded-xl bg-white dark:bg-slate-900 border-2 border-purple-300 dark:border-purple-700 space-y-1">
                      <span class="font-black text-purple-800 dark:text-purple-300 block">隔地犯擇一（§ 4）</span>
                      <span class="text-slate-700 dark:text-slate-200 font-medium">犯罪行為地或結果地任一部分在境內，我國即享有完整司法審判管轄權。</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </section>

          <!-- 七、案例 2-3：跨境電信詐騙案（教材第 2-11 頁 原文案例） -->
          <section id="sec-p0ch2-sec1-case-2-3" class="space-y-6 pt-2">
            <div class="flex items-center gap-3">
              <span class="w-2 h-6 rounded-full bg-blue-600"></span>
              <h3 class="text-lg sm:text-xl font-black text-slate-900 dark:text-white tracking-tight">
                七、案例 2-3：跨境電信詐騙案與隔地犯之管轄（教材第 2-11 頁）
              </h3>
            </div>

            <!-- 案例卡片 2-3 -->
            <div id="case-card-2-3" data-case="2-3" class="rounded-3xl border-2 border-blue-500/40 bg-white dark:bg-[#111726] shadow-md overflow-hidden transition-all duration-300">
              
              <!-- 案例標頭 -->
              <div class="p-5 sm:p-6 bg-gradient-to-r from-blue-50/80 via-sky-50/50 to-transparent dark:from-blue-950/40 dark:via-sky-950/20 border-b border-slate-100 dark:border-white/[0.08] flex flex-wrap items-center justify-between gap-3">
                <div class="flex items-center gap-2.5">
                  <span class="w-8 h-8 rounded-xl bg-blue-600 text-white font-black text-sm flex items-center justify-center shadow-md shadow-blue-600/30">
                    2-3
                  </span>
                  <div>
                    <div class="flex items-center gap-2">
                      <span class="text-xs font-mono font-bold text-blue-600 dark:text-blue-400">CASE 2-3 • 現代高頻國考熱點</span>
                      <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-500/10 text-blue-600 dark:text-blue-400 font-bold">教材第 2-11 頁</span>
                    </div>
                    <h4 class="text-base sm:text-lg font-black text-slate-900 dark:text-white">
                      跨境電信詐騙案——隔地犯結果地之管轄認定
                    </h4>
                  </div>
                </div>

                <div class="flex items-center gap-2">
                  <button type="button" class="statute-popover-trigger px-2.5 py-1 rounded-xl bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-semibold border border-slate-200 dark:border-slate-700 shadow-2xs hover:text-blue-600 transition-colors cursor-pointer" data-statute="4">
                    📜 刑法 § 4 隔地犯
                  </button>
                  <button type="button" onclick="copyCaseNote('case-2-3', this)" class="case-copy-btn px-3 py-1 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold shadow-md shadow-blue-600/20 transition-all flex items-center gap-1.5 cursor-pointer">
                    <span>📋</span>
                    <span>複製筆記</span>
                  </button>
                </div>
              </div>

              <!-- 案例內容主體 -->
              <div class="p-6 sm:p-8 space-y-6">
                
                <!-- 案件事實 (Fact Box) -->
                <div class="p-4 sm:p-5 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-2.5">
                  <div class="flex items-center gap-2 text-xs font-bold text-slate-800 dark:text-slate-200">
                    <span class="text-base">📌</span>
                    <span>教材原文案件事實（第 2-11 頁）：</span>
                  </div>
                  <blockquote class="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed italic border-l-3 border-blue-500 pl-3">
                    詐騙集團總部設在菲律賓，利用電話騙在台灣的受害人匯款，是否適用我國刑法？
                  </blockquote>
                </div>

                <!-- 作者權威問題導引 (教材第 2-11 頁 原文解析) -->
                <div class="p-4 sm:p-5 rounded-2xl bg-blue-50/70 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800 space-y-2">
                  <div class="flex items-center gap-2 text-xs font-bold text-blue-800 dark:text-blue-300">
                    <span>◀ 問題導引 ▶</span>
                    <span class="text-[10px] font-mono px-1.5 py-0.5 rounded bg-blue-500/10 text-blue-600 dark:text-blue-400 font-bold">教材第 2-11 頁 原文定性</span>
                  </div>
                  <blockquote class="text-xs sm:text-sm text-slate-800 dark:text-slate-200 leading-relaxed italic border-l-3 border-blue-500 pl-3">
                    「此為典型的『隔地犯』，按 § 4 之規定，結果地在台灣而適用我國刑法。」
                  </blockquote>
                </div>

                <!-- 跨境隔地犯結構推導卡片 -->
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
                  <div class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-2">
                    <div class="flex items-center justify-between">
                      <span class="font-bold text-slate-800 dark:text-slate-200">行為地（菲律賓機房）</span>
                      <span class="px-2 py-0.5 rounded bg-slate-200 dark:bg-slate-800 text-[10px] font-mono">國外</span>
                    </div>
                    <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                      詐騙集團首腦及話務機房位於菲律賓，透過境外電信網路向台灣發送詐騙話術。行為實行地雖在境外，但構成要件行為之效力直接射向我國。
                    </p>
                  </div>

                  <div class="p-4 rounded-2xl bg-emerald-50/60 dark:bg-emerald-950/30 border border-emerald-300 dark:border-emerald-800 space-y-2">
                    <div class="flex items-center justify-between">
                      <span class="font-bold text-emerald-800 dark:text-emerald-300">結果地（台灣受害人匯款）</span>
                      <span class="px-2 py-0.5 rounded bg-emerald-100 dark:bg-emerald-900 text-emerald-700 dark:text-emerald-300 text-[10px] font-mono font-bold">境內 ⭐</span>
                    </div>
                    <p class="text-xs text-emerald-900 dark:text-emerald-200 leading-relaxed">
                      被害人在台灣接聽電話、陷於錯誤並操作 ATM 或網路銀行匯出款項，財產法益損害結果發生於台灣。按 § 4「結果在國內」，直接成立我國管轄！
                    </p>
                  </div>
                </div>

                <!-- 2026 現行法規查核區塊 -->
                <div class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 space-y-2.5 text-xs">
                  <div class="flex items-center justify-between border-b border-slate-200/80 dark:border-slate-800 pb-1.5">
                    <span class="font-bold text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
                      <span>📌</span>
                      <span>【2026 現行法規查核狀態】</span>
                    </span>
                    <span class="px-2 py-0.5 rounded bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400 font-mono font-bold text-[10px]">
                      實務防詐重罪
                    </span>
                  </div>
                  <div class="space-y-1.5 text-slate-600 dark:text-slate-300 leading-relaxed text-[11.5px]">
                    <div>
                      • <strong class="text-slate-800 dark:text-slate-200">刑法第 4 條（隔地犯）</strong>：採行為地與結果地擇一主義，凡犯罪之實行行為或構成要件結果之一部在國內，我國即享有完整刑事管轄權。
                    </div>
                    <div>
                      • <strong class="text-slate-800 dark:text-slate-200">刑法第 339 條之 4（加重詐欺罪）</strong>：犯詐欺罪而有「三人以上共同犯之」、「冒用政府機關或公務員名義」、「以廣播電視、電子通訊、網際網路等傳播工具」者，處一年以上七年以下有期徒刑，得併科一百萬元以下罰金。
                    </div>
                    <div>
                      • <strong class="text-slate-800 dark:text-slate-200">打詐專法配套</strong>：配合《詐欺犯罪危害防制條例》，境外機房成員跨境犯加重詐欺，我國檢警得透過國際司法互助追訴並依我國刑法論罪科刑。
                    </div>
                  </div>
                  <div class="pt-1 flex items-center justify-between text-[11px] text-slate-400">
                    <span>資料來源：全國法規資料庫、刑事警察局防詐法制彙編</span>
                    <span class="font-mono">P. 2-11 案例 2-3 核對完畢</span>
                  </div>
                </div>

              </div>
            </div>
          </section>

          <!-- 八、案例 2-4：我國人駐外使領館內犯罪案（教材第 2-11 頁 原文案例） -->
          <section id="sec-p0ch2-sec1-case-2-4" class="space-y-6 pt-2">
            <div class="flex items-center gap-3">
              <span class="w-2 h-6 rounded-full bg-amber-600"></span>
              <h3 class="text-lg sm:text-xl font-black text-slate-900 dark:text-white tracking-tight">
                八、案例 2-4：我國人駐外使領館內犯罪案（教材第 2-11 頁）
              </h3>
            </div>

            <!-- 案例卡片 2-4 -->
            <div id="case-card-2-4" data-case="2-4" class="rounded-3xl border-2 border-amber-500/40 bg-white dark:bg-[#111726] shadow-md overflow-hidden transition-all duration-300">
              
              <!-- 案例標頭 -->
              <div class="p-5 sm:p-6 bg-gradient-to-r from-amber-50/80 via-orange-50/50 to-transparent dark:from-amber-950/40 dark:via-orange-950/20 border-b border-slate-100 dark:border-white/[0.08] flex flex-wrap items-center justify-between gap-3">
                <div class="flex items-center gap-2.5">
                  <span class="w-8 h-8 rounded-xl bg-amber-600 text-white font-black text-sm flex items-center justify-center shadow-md shadow-amber-600/30">
                    2-4
                  </span>
                  <div>
                    <div class="flex items-center gap-2">
                      <span class="text-xs font-mono font-bold text-amber-600 dark:text-amber-400">CASE 2-4 • 國際法與刑法交錯</span>
                      <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-500/10 text-amber-600 dark:text-amber-400 font-bold">教材第 2-11 頁</span>
                    </div>
                    <h4 class="text-base sm:text-lg font-black text-slate-900 dark:text-white">
                      我國人駐外使領館內犯罪——領域擬制與管轄權放棄慣例
                    </h4>
                  </div>
                </div>

                <div class="flex items-center gap-2">
                  <button type="button" class="statute-popover-trigger px-2.5 py-1 rounded-xl bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-semibold border border-slate-200 dark:border-slate-700 shadow-2xs hover:text-amber-600 transition-colors cursor-pointer" data-statute="3">
                    📜 刑法 § 3 屬地原則
                  </button>
                  <button type="button" onclick="copyCaseNote('case-2-4', this)" class="case-copy-btn px-3 py-1 rounded-xl bg-amber-600 hover:bg-amber-700 text-white text-xs font-bold shadow-md shadow-amber-600/20 transition-all flex items-center gap-1.5 cursor-pointer">
                    <span>📋</span>
                    <span>複製筆記</span>
                  </button>
                </div>
              </div>

              <!-- 案例內容主體 -->
              <div class="p-6 sm:p-8 space-y-6">
                
                <!-- 案件事實 (Fact Box) -->
                <div class="p-4 sm:p-5 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-2.5">
                  <div class="flex items-center gap-2 text-xs font-bold text-slate-800 dark:text-slate-200">
                    <span class="text-base">📌</span>
                    <span>教材原文案件事實（第 2-11 頁）：</span>
                  </div>
                  <blockquote class="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed italic border-l-3 border-amber-500 pl-3">
                    我國人甲在我國駐外國之使領館內犯罪，是否為在我國領域內犯罪？
                  </blockquote>
                </div>

                <!-- 作者權威問題導引 (教材第 2-11 頁 原文引述) -->
                <div class="p-4 sm:p-5 rounded-2xl bg-amber-50/70 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 space-y-2">
                  <div class="flex items-center gap-2 text-xs font-bold text-amber-800 dark:text-amber-300">
                    <span>◀ 問題導引 ▶</span>
                    <span class="text-[10px] font-mono px-1.5 py-0.5 rounded bg-amber-500/10 text-amber-600 dark:text-amber-400 font-bold">教材第 2-11 頁 國際法慣例認定</span>
                  </div>
                  <blockquote class="text-xs sm:text-sm text-slate-800 dark:text-slate-200 leading-relaxed italic border-l-3 border-amber-500 pl-3">
                    「此時借助國際法上的慣例，以駐在國是否同意放棄其管轄權為斷。若有明顯事證足認該駐在國已同意放棄其管轄權，自得以在我國領域內犯罪論。」
                  </blockquote>
                </div>

                <!-- 深入解讀：使領館之法律地位辨析 -->
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
                  <div class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-2">
                    <span class="text-xs font-bold text-amber-700 dark:text-amber-400 block">
                      ⚠️ 直覺誤區：使領館是浮動領土嗎？
                    </span>
                    <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                      **不是！** 使領館所在之土地依然屬於駐在國領土。在國際法上，使領館享有的「館舍不可侵犯權」屬於外交豁免特權，並非使領館成為派遣國之天然領土，亦非刑法第 3 條但書之「浮動領土（僅限船艦航空器）」。
                    </p>
                  </div>

                  <div class="p-4 rounded-2xl bg-amber-50/60 dark:bg-amber-950/30 border border-amber-300 dark:border-amber-800 space-y-2">
                    <span class="text-xs font-bold text-amber-800 dark:text-amber-300 block">
                      💡 核心審查標準：駐在國是否放棄管轄權
                    </span>
                    <p class="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                      依國際法慣例，若駐在國基於兩國外交約定、司法互助或默示表明不予行使刑事管轄權（放棄管轄權），我國法院始能將其擬制為**「在我國領域內犯罪論」**，依屬地原則適用我國刑法。
                    </p>
                  </div>
                </div>

                <!-- 2026 現行法規查核區塊 -->
                <div class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 space-y-2.5 text-xs">
                  <div class="flex items-center justify-between border-b border-slate-200/80 dark:border-slate-800 pb-1.5">
                    <span class="font-bold text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
                      <span>📌</span>
                      <span>【2026 國際法與條約查核狀態】</span>
                    </span>
                    <span class="px-2 py-0.5 rounded bg-amber-50 dark:bg-amber-950 text-amber-600 dark:text-amber-400 font-mono font-bold text-[10px]">
                      國際法慣例
                    </span>
                  </div>
                  <div class="space-y-1.5 text-slate-600 dark:text-slate-300 leading-relaxed text-[11.5px]">
                    <div>
                      • <strong class="text-slate-800 dark:text-slate-200">維也納外交關係公約（VCDR）第 22 條</strong>：使館館舍不可侵犯，但館舍不可侵犯並不等同於「領土主權轉移」。若館內發生刑事犯罪，駐在國原則上仍保有屬地管轄權，僅因外交豁免難以強制進入。
                    </div>
                    <div>
                      • <strong class="text-slate-800 dark:text-slate-200">後續補充依據（屬人原則 § 7）</strong>：若駐在國未放棄管轄權因而無法以「領域內」論處，檢察官仍可依刑法第 7 條（國民在領域外犯最輕本刑三年以上有期徒刑之重罪）行使追訴權。
                    </div>
                  </div>
                  <div class="pt-1 flex items-center justify-between text-[11px] text-slate-400">
                    <span>資料來源：外交部條約法律司、國際公法判例選輯</span>
                    <span class="font-mono">P. 2-11 案例 2-4 核對完畢</span>
                  </div>
                </div>

              </div>
            </div>
          </section>

          <!-- 九、案例 2-5：大陸地區犯罪之刑法適用案（教材第 2-11 頁 原文案例） -->
          <section id="sec-p0ch2-sec1-case-2-5" class="space-y-6 pt-2">
            <div class="flex items-center gap-3">
              <span class="w-2 h-6 rounded-full bg-emerald-600"></span>
              <h3 class="text-lg sm:text-xl font-black text-slate-900 dark:text-white tracking-tight">
                九、案例 2-5：大陸地區犯罪之刑法適用案（教材第 2-11 頁）
              </h3>
            </div>

            <!-- 案例卡片 2-5 -->
            <div id="case-card-2-5" data-case="2-5" class="rounded-3xl border-2 border-emerald-500/40 bg-white dark:bg-[#111726] shadow-md overflow-hidden transition-all duration-300">
              
              <!-- 案例標頭 -->
              <div class="p-5 sm:p-6 bg-gradient-to-r from-emerald-50/80 via-teal-50/50 to-transparent dark:from-emerald-950/40 dark:via-teal-950/20 border-b border-slate-100 dark:border-white/[0.08] flex flex-wrap items-center justify-between gap-3">
                <div class="flex items-center gap-2.5">
                  <span class="w-8 h-8 rounded-xl bg-emerald-600 text-white font-black text-sm flex items-center justify-center shadow-md shadow-emerald-600/30">
                    2-5
                  </span>
                  <div>
                    <div class="flex items-center gap-2">
                      <span class="text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400">CASE 2-5 • 最高法院權威判決</span>
                      <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-bold">教材第 2-11 頁</span>
                    </div>
                    <h4 class="text-base sm:text-lg font-black text-slate-900 dark:text-white">
                      大陸地區犯罪——特殊之國內關係與屬地管轄
                    </h4>
                  </div>
                </div>

                <div class="flex items-center gap-2">
                  <button type="button" class="statute-popover-trigger px-2.5 py-1 rounded-xl bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-semibold border border-slate-200 dark:border-slate-700 shadow-2xs hover:text-emerald-600 transition-colors cursor-pointer" data-statute="3">
                    📜 刑法 § 3 屬地原則
                  </button>
                  <button type="button" onclick="copyCaseNote('case-2-5', this)" class="case-copy-btn px-3 py-1 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold shadow-md shadow-emerald-600/20 transition-all flex items-center gap-1.5 cursor-pointer">
                    <span>📋</span>
                    <span>複製筆記</span>
                  </button>
                </div>
              </div>

              <!-- 案例內容主體 -->
              <div class="p-6 sm:p-8 space-y-6">
                
                <!-- 案件事實 (Fact Box) -->
                <div class="p-4 sm:p-5 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-2.5">
                  <div class="flex items-center gap-2 text-xs font-bold text-slate-800 dark:text-slate-200">
                    <span class="text-base">📌</span>
                    <span>教材原文案件事實（第 2-11 頁）：</span>
                  </div>
                  <blockquote class="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed italic border-l-3 border-emerald-500 pl-3">
                    大陸地區犯罪是否亦有我國刑法的適用？
                  </blockquote>
                </div>

                <!-- 作者權威問題導引 (教材第 2-11 頁 原文解析) -->
                <div class="p-4 sm:p-5 rounded-2xl bg-emerald-50/70 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 space-y-2">
                  <div class="flex items-center gap-2 text-xs font-bold text-emerald-800 dark:text-emerald-300">
                    <span>◀ 問題導引 ▶</span>
                    <span class="text-[10px] font-mono px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-bold">最高法院 90 年台上字第 4247 號判決</span>
                  </div>
                  <blockquote class="text-xs sm:text-sm text-slate-800 dark:text-slate-200 leading-relaxed italic border-l-3 border-emerald-500 pl-3">
                    「實務見解（90台上4247）採取『特殊之國內關係』。認為臺灣地區與大陸地區人民關係條例 § 2 規定：『大陸地區：指臺灣地區以外之中華民國領土。』已明示大陸地區仍屬我中華民國之領土，從而在大陸地區犯罪，仍屬在中華民國領域內犯罪。」
                  </blockquote>
                </div>

                <!-- 權威法理拆解架構 -->
                <div class="space-y-3">
                  <h5 class="text-sm font-black text-slate-900 dark:text-white flex items-center gap-2">
                    <span class="w-1.5 h-4 bg-emerald-600 rounded-full"></span>
                    <span>司法實務「特殊之國內關係」三段論推導</span>
                  </h5>

                  <div class="grid grid-cols-1 md:grid-cols-3 gap-3.5 text-xs sm:text-sm">
                    <div class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-1.5">
                      <span class="text-xs font-bold text-slate-800 dark:text-slate-200 block">第一步：大前提</span>
                      <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                        兩岸人民關係條例第 2 條明文定義：大陸地區指臺灣地區以外之「中華民國領土」。
                      </p>
                    </div>

                    <div class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-1.5">
                      <span class="text-xs font-bold text-slate-800 dark:text-slate-200 block">第二步：小前提</span>
                      <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                        行為人無論係本國人或外國人，在大陸地區所犯之犯罪行為，客觀上均發生於我國領土範圍內。
                      </p>
                    </div>

                    <div class="p-4 rounded-2xl bg-emerald-50/60 dark:bg-emerald-950/30 border border-emerald-300 dark:border-emerald-800 space-y-1.5">
                      <span class="text-xs font-bold text-emerald-800 dark:text-emerald-300 block">第三步：結論 ⭐</span>
                      <p class="text-xs text-emerald-900 dark:text-emerald-200 leading-relaxed font-bold">
                        在大陸地區犯罪，直接依刑法第 3 條「屬地原則（領域內犯罪）」適用我國刑法論處！
                      </p>
                    </div>
                  </div>
                </div>

                <!-- 2026 現行法規查核區塊 -->
                <div class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 space-y-2.5 text-xs">
                  <div class="flex items-center justify-between border-b border-slate-200/80 dark:border-slate-800 pb-1.5">
                    <span class="font-bold text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
                      <span>📌</span>
                      <span>【2026 現行法規查核與救濟制度】</span>
                    </span>
                    <span class="px-2 py-0.5 rounded bg-emerald-50 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 font-mono font-bold text-[10px]">
                      兩岸條例配套
                    </span>
                  </div>
                  <div class="space-y-1.5 text-slate-600 dark:text-slate-300 leading-relaxed text-[11.5px]">
                    <div>
                      • <strong class="text-slate-800 dark:text-slate-200">最高法院 90 年度台上字第 4247 號判決</strong>：「臺灣地區與大陸地區人民關係條例第二條第二款所稱之大陸地區，亦為我中華民國之領土，在該地區犯罪，應受我國法律之處罰。」
                    </div>
                    <div>
                      • <strong class="text-slate-800 dark:text-slate-200">兩岸條例第 75 條（免除或折抵刑期）</strong>：「在臺灣地區以外之中華民國領土（即大陸地區）或大陸船舶、航空器內，犯一個罪，並在該地區已受裁判執行者，在臺灣地區得免其刑之全部或一部之執行。」此項特別規定可化解「在大陸已被判刑關押，回台又被依刑法重複處罰」之雙重處罰不人道爭議。
                    </div>
                  </div>
                  <div class="pt-1 flex items-center justify-between text-[11px] text-slate-400">
                    <span>資料來源：司法院裁判書系統、臺灣地區與大陸地區人民關係條例</span>
                    <span class="font-mono">P. 2-11 案例 2-5 核對完畢</span>
                  </div>
                </div>

              </div>
            </div>
          </section>

          <!-- 十、地的適用效力：(二) 輔助基準（屬人、保護、世界原則，教材第 2-12 頁） -->
          <section id="sec-p0ch2-sec1-auxiliary-scope" class="space-y-6 pt-2">
            <div class="flex items-center gap-3">
              <span class="w-2 h-6 rounded-full bg-indigo-600"></span>
              <h3 class="text-lg sm:text-xl font-black text-slate-900 dark:text-white tracking-tight">
                十、地的適用效力：(二) 輔助基準（屬人、保護、世界原則）
              </h3>
            </div>

            <!-- 天藍色概念焦點框 (Focus Box) -->
            <div class="box-legal-navy p-6 sm:p-8 rounded-3xl space-y-6">
              <div class="flex items-center justify-between border-b border-sky-300/40 dark:border-sky-700/40 pb-3">
                <div class="flex items-center gap-2">
                  <span class="text-xl">🌐</span>
                  <h4 class="text-base sm:text-lg font-black text-[#032034] dark:text-white">
                    地的適用效力輔助基準體系（教材第 2-12 頁）
                  </h4>
                </div>
                <span class="px-2.5 py-0.5 rounded-full bg-white dark:bg-slate-800 text-[#0369a1] dark:text-sky-300 text-xs font-mono font-bold border border-sky-300 dark:border-sky-600 shadow-xs">
                  AUXILIARY CRITERIA
                </span>
              </div>

              <blockquote class="border-l-4 border-[#0284c7] pl-4 py-1 text-xs sm:text-sm text-[#0c4a6e] dark:text-sky-100 leading-relaxed italic space-y-1">
                <p>
                  「(二) 輔助基準：包含屬人原則、保護原則與世界原則。分別基於國民守法義務、公務員忠誠義務、國家保護人民責任、國家自我防衛及國際世界共通價值，延伸國家刑罰權於境外。」—— 陳奕廷《刑法總則【圖說系列】》第 2-12 頁
                </p>
              </blockquote>

              <!-- 輔助基準三大支柱網格 -->
              <div class="grid grid-cols-1 md:grid-cols-3 gap-4 pt-1">
                
                <!-- 1. 屬人原則 -->
                <div class="p-5 rounded-2xl bg-white/95 dark:bg-slate-900/90 border border-sky-200 dark:border-sky-800 space-y-3.5 shadow-xs">
                  <div class="flex items-center justify-between">
                    <span class="px-2 py-0.5 rounded bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 font-mono font-bold text-[11px] border border-blue-200 dark:border-blue-800">
                      § 6 + § 7
                    </span>
                    <span class="text-xs font-bold text-slate-500">處罰自己人</span>
                  </div>
                  <div>
                    <h5 class="text-sm font-black text-slate-900 dark:text-white flex items-center gap-1.5">
                      <span>👤</span>
                      <span>1. 屬人原則</span>
                    </h5>
                    <p class="text-[11px] text-blue-600 dark:text-blue-400 font-medium mt-0.5">
                      國民一般守法義務 ＋ 公務員特殊忠誠義務
                    </p>
                  </div>
                  <ul class="text-xs text-slate-600 dark:text-slate-300 space-y-2 leading-relaxed">
                    <li class="flex items-start gap-1.5">
                      <span class="text-blue-500 font-bold shrink-0">•</span>
                      <span><strong>核心</strong>：國家刑罰權適用於在國外的我國人民。</span>
                    </li>
                    <li class="flex items-start gap-1.5">
                      <span class="text-blue-500 font-bold shrink-0">•</span>
                      <span><strong>國民境外犯重罪（§ 7）</strong>：犯最輕本刑 3 年以上有期徒刑之重罪。<strong>惟犯罪地法律不罰者，不在此限</strong>（雙重犯罪原則）。</span>
                    </li>
                    <li class="flex items-start gap-1.5">
                      <span class="text-blue-500 font-bold shrink-0">•</span>
                      <span><strong>公務員境外特定罪（§ 6）</strong>：犯特定公職瀆職、脫逃、偽造文書、侵占等罪。</span>
                    </li>
                  </ul>
                  <div class="pt-2 border-t border-slate-100 dark:border-slate-800 flex justify-end">
                    <button type="button" class="statute-popover-trigger text-[11px] text-blue-600 dark:text-blue-400 hover:underline font-semibold flex items-center gap-1 cursor-pointer" data-statute="7">
                      <span>查看 § 7 條文</span>
                      <span>→</span>
                    </button>
                  </div>
                </div>

                <!-- 2. 保護原則 -->
                <div class="p-5 rounded-2xl bg-white/95 dark:bg-slate-900/90 border border-sky-200 dark:border-sky-800 space-y-3.5 shadow-xs">
                  <div class="flex items-center justify-between">
                    <span class="px-2 py-0.5 rounded bg-purple-50 dark:bg-purple-950/60 text-purple-700 dark:text-purple-300 font-mono font-bold text-[11px] border border-purple-200 dark:border-purple-800">
                      § 8 / § 5
                    </span>
                    <span class="text-xs font-bold text-slate-500">處罰外國人 / 任何人</span>
                  </div>
                  <div>
                    <h5 class="text-sm font-black text-slate-900 dark:text-white flex items-center gap-1.5">
                      <span>🛡️</span>
                      <span>2 & 3. 保護原則</span>
                    </h5>
                    <p class="text-[11px] text-purple-600 dark:text-purple-400 font-medium mt-0.5">
                      國家保護人民客觀義務 ＋ 國家自我保護
                    </p>
                  </div>
                  <ul class="text-xs text-slate-600 dark:text-slate-300 space-y-2 leading-relaxed">
                    <li class="flex items-start gap-1.5">
                      <span class="text-purple-500 font-bold shrink-0">•</span>
                      <span><strong>處罰外國人（§ 8）</strong>：在國外對我國人犯最輕本刑 3 年以上重罪。惟犯罪地不罰者不在此限。</span>
                    </li>
                    <li class="flex items-start gap-1.5">
                      <span class="text-purple-500 font-bold shrink-0">•</span>
                      <span><strong>國家自我保護（§ 5 ①②③⑤⑥⑦）</strong>：處罰任何人於國外侵害本國重大法益（內亂、外患、妨害公務、偽幣、本國有價證券、公文書公印文）。</span>
                    </li>
                    <li class="flex items-start gap-1.5">
                      <span class="text-purple-500 font-bold shrink-0">•</span>
                      <span><strong>限本國法益（72台上5872例）</strong>：§ 5 僅保護本國法益，不包含外國有價證券！</span>
                    </li>
                  </ul>
                  <div class="pt-2 border-t border-slate-100 dark:border-slate-800 flex justify-end">
                    <button type="button" class="statute-popover-trigger text-[11px] text-purple-600 dark:text-purple-400 hover:underline font-semibold flex items-center gap-1 cursor-pointer" data-statute="5">
                      <span>查看 § 5 條文</span>
                      <span>→</span>
                    </button>
                  </div>
                </div>

                <!-- 3. 世界原則 -->
                <div class="p-5 rounded-2xl bg-white/95 dark:bg-slate-900/90 border border-sky-200 dark:border-sky-800 space-y-3.5 shadow-xs">
                  <div class="flex items-center justify-between">
                    <span class="px-2 py-0.5 rounded bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 font-mono font-bold text-[11px] border border-emerald-200 dark:border-emerald-800">
                      § 5 ④⑧⑨⑩
                    </span>
                    <span class="text-xs font-bold text-slate-500">處罰任何人（公敵）</span>
                  </div>
                  <div>
                    <h5 class="text-sm font-black text-slate-900 dark:text-white flex items-center gap-1.5">
                      <span>🌍</span>
                      <span>4. 世界原則</span>
                    </h5>
                    <p class="text-[11px] text-emerald-600 dark:text-emerald-400 font-medium mt-0.5">
                      基於世界共通性犯罪（國際社會公敵）
                    </p>
                  </div>
                  <ul class="text-xs text-slate-600 dark:text-slate-300 space-y-2 leading-relaxed">
                    <li class="flex items-start gap-1.5">
                      <span class="text-emerald-500 font-bold shrink-0">•</span>
                      <span><strong>核心</strong>：國家刑罰權適用於侵害跨國界共通價值之犯罪。</span>
                    </li>
                    <li class="flex items-start gap-1.5">
                      <span class="text-emerald-500 font-bold shrink-0">•</span>
                      <span><strong>法條列舉罪名</strong>：涉及安毒（§ 5 ④）、毒品（§ 5 ⑧）、劫奴或買賣人口（§ 5 ⑨）、海盜罪（§ 5 ⑩）。</span>
                    </li>
                    <li class="flex items-start gap-1.5">
                      <span class="text-emerald-500 font-bold shrink-0">•</span>
                      <span><strong>重要增訂（105 年）</strong>：刑法 § 5 增訂第 11 款加重詐欺罪（§ 339-4），將跨境電信機房詐欺納入世界原則管轄！</span>
                    </li>
                  </ul>
                  <div class="pt-2 border-t border-slate-100 dark:border-slate-800 flex justify-end">
                    <button type="button" class="statute-popover-trigger text-[11px] text-emerald-600 dark:text-emerald-400 hover:underline font-semibold flex items-center gap-1 cursor-pointer" data-statute="5">
                      <span>查看 § 5 罪名</span>
                      <span>→</span>
                    </button>
                  </div>
                </div>

              </div>
            </div>
          </section>

          <!-- 十一、案例 2-6：我國人境外偽造外國股票案（教材第 2-12 頁 原文案例） -->
          <section id="sec-p0ch2-sec1-case-2-6" class="space-y-6 pt-2">
            <div class="flex items-center gap-3">
              <span class="w-2 h-6 rounded-full bg-indigo-600"></span>
              <h3 class="text-lg sm:text-xl font-black text-slate-900 dark:text-white tracking-tight">
                十一、案例 2-6：我國人境外偽造外國股票案（教材第 2-12 頁）
              </h3>
            </div>

            <!-- 案例卡片 2-6 -->
            <div id="case-card-2-6" data-case="2-6" class="rounded-3xl border-2 border-indigo-500/40 bg-white dark:bg-[#111726] shadow-md overflow-hidden transition-all duration-300">
              
              <!-- 案例標頭 -->
              <div class="p-5 sm:p-6 bg-gradient-to-r from-indigo-50/80 via-blue-50/50 to-transparent dark:from-indigo-950/40 dark:via-blue-950/20 border-b border-slate-100 dark:border-white/[0.08] flex flex-wrap items-center justify-between gap-3">
                <div class="flex items-center gap-2.5">
                  <span class="w-8 h-8 rounded-xl bg-indigo-600 text-white font-black text-sm flex items-center justify-center shadow-md shadow-indigo-600/30">
                    2-6
                  </span>
                  <div>
                    <div class="flex items-center gap-2">
                      <span class="text-xs font-mono font-bold text-indigo-600 dark:text-indigo-400">CASE 2-6 • 最高法院 72 年台上字第 5872 號判例</span>
                      <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 font-bold">教材第 2-12 頁</span>
                    </div>
                    <h4 class="text-base sm:text-lg font-black text-slate-900 dark:text-white">
                      境外偽造外國公司股票——保護原則之本國法益界限
                    </h4>
                  </div>
                </div>

                <div class="flex items-center gap-2">
                  <button type="button" class="statute-popover-trigger px-2.5 py-1 rounded-xl bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-semibold border border-slate-200 dark:border-slate-700 shadow-2xs hover:text-indigo-600 transition-colors cursor-pointer" data-statute="5">
                    📜 刑法 § 5 第 6 款
                  </button>
                  <button type="button" class="statute-popover-trigger px-2.5 py-1 rounded-xl bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-semibold border border-slate-200 dark:border-slate-700 shadow-2xs hover:text-indigo-600 transition-colors cursor-pointer" data-statute="7">
                    📜 刑法 § 7
                  </button>
                  <button type="button" class="statute-popover-trigger px-2.5 py-1 rounded-xl bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-semibold border border-slate-200 dark:border-slate-700 shadow-2xs hover:text-indigo-600 transition-colors cursor-pointer" data-statute="201">
                    📜 刑法 § 201
                  </button>
                  <button type="button" onclick="copyCaseNote('case-2-6', this)" class="case-copy-btn px-3 py-1 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold shadow-md shadow-indigo-600/20 transition-all flex items-center gap-1.5 cursor-pointer">
                    <span>📋</span>
                    <span>複製筆記</span>
                  </button>
                </div>
              </div>

              <!-- 案例內容主體 -->
              <div class="p-6 sm:p-8 space-y-6">
                
                <!-- 案件事實 (Fact Box) -->
                <div class="p-4 sm:p-5 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-2.5">
                  <div class="flex items-center gap-2 text-xs font-bold text-slate-800 dark:text-slate-200">
                    <span class="text-base">📌</span>
                    <span>教材原文案件事實（第 2-12 頁）：</span>
                  </div>
                  <blockquote class="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed italic border-l-3 border-indigo-500 pl-3">
                    我國國民甲在美國偽造德國公司股票而成立偽造有價證券罪，是否有我國刑法的適用？
                  </blockquote>
                </div>

                <!-- 作者權威問題導引 (教材第 2-12 頁 原文解析) -->
                <div class="p-4 sm:p-5 rounded-2xl bg-indigo-50/70 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-800 space-y-2">
                  <div class="flex items-center gap-2 text-xs font-bold text-indigo-800 dark:text-indigo-300">
                    <span>◀ 問題導引 ▶</span>
                    <span class="text-[10px] font-mono px-1.5 py-0.5 rounded bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 font-bold">最高法院 72 年台上字第 5872 號判例</span>
                  </div>
                  <blockquote class="text-xs sm:text-sm text-slate-800 dark:text-slate-200 leading-relaxed italic border-l-3 border-indigo-500 pl-3">
                    「§ 5 採取的保護原則意在保護本國法益，因此本條所謂偽造有價證券當指我國的有價證券，不包括外國有價證券在內（72台上5872例）。」
                  </blockquote>
                </div>

                <!-- 權威階層三階段管轄檢驗 -->
                <div class="space-y-3">
                  <h5 class="text-sm font-black text-slate-900 dark:text-white flex items-center gap-2">
                    <span class="w-1.5 h-4 bg-indigo-600 rounded-full"></span>
                    <span>案例 2-6 管轄權三大審查層次推導</span>
                  </h5>

                  <div class="grid grid-cols-1 md:grid-cols-3 gap-3.5 text-xs sm:text-sm">
                    <!-- 第一步：屬地原則審查 -->
                    <div class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-1.5">
                      <div class="flex items-center justify-between">
                        <span class="text-xs font-bold text-slate-800 dark:text-slate-200">第 1 階：主要基準</span>
                        <span class="text-[10px] font-mono text-red-500 font-bold">❌ 排除</span>
                      </div>
                      <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                        甲在美國偽造（行為地在國外），德國公司股票在國外發行流通（法益受侵害結果地亦在國外），無從適用刑法第 3 條或第 4 條之屬地原則。
                      </p>
                    </div>

                    <!-- 第二步：保護原則審查 -->
                    <div class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-1.5">
                      <div class="flex items-center justify-between">
                        <span class="text-xs font-bold text-slate-800 dark:text-slate-200">第 2 階：保護原則 § 5</span>
                        <span class="text-[10px] font-mono text-red-500 font-bold">❌ 排除</span>
                      </div>
                      <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                        § 5 意在保護本國法益。依 72 台上 5872 號判例，§ 5 第 6 款偽造有價證券僅限我國有價證券，不包含外國有價證券，無法依第 5 條擴張管轄。
                      </p>
                    </div>

                    <!-- 第三步：屬人原則審查 -->
                    <div class="p-4 rounded-2xl bg-indigo-50/60 dark:bg-indigo-950/30 border border-indigo-300 dark:border-indigo-800 space-y-1.5">
                      <div class="flex items-center justify-between">
                        <span class="text-xs font-bold text-indigo-800 dark:text-indigo-300">第 3 階：屬人原則 § 7</span>
                        <span class="text-[10px] font-mono text-red-500 font-bold">❌ 排除</span>
                      </div>
                      <p class="text-xs text-indigo-900 dark:text-indigo-200 leading-relaxed">
                        判例闡明：刑法第 201 條限於「在國內有流通性」之有價證券。外國股票在國內無流通性，根本不該當我國 § 201，自亦無從適用 § 7！
                      </p>
                    </div>
                  </div>

                  <!-- 最終結論卡片 -->
                  <div class="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-300 dark:border-emerald-800 text-xs sm:text-sm">
                    <div class="flex items-center gap-2 text-emerald-800 dark:text-emerald-300 font-bold">
                      <span>⚖️</span>
                      <span>最終管轄審查結論：</span>
                    </div>
                    <p class="text-xs text-emerald-900 dark:text-emerald-200 mt-1 font-semibold leading-relaxed">
                      本案無論主要基準（屬地原則）或輔助基準（保護原則、屬人原則）均無適用餘地，甲之行為<strong>無我國刑法的適用</strong>！
                    </p>
                  </div>
                </div>

                <!-- 2026 現行法規與權威判例查核區塊 -->
                <div class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 space-y-2.5 text-xs">
                  <div class="flex items-center justify-between border-b border-slate-200/80 dark:border-slate-800 pb-1.5">
                    <span class="font-bold text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
                      <span>📌</span>
                      <span>【2026 最高法院判例與條文狀態查核】</span>
                    </span>
                    <span class="px-2 py-0.5 rounded bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 font-mono font-bold text-[10px]">
                      72 台上 5872 判例
                    </span>
                  </div>
                  <div class="space-y-1.5 text-slate-600 dark:text-slate-300 leading-relaxed text-[11.5px]">
                    <div>
                      • <strong class="text-slate-800 dark:text-slate-200">最高法院 72 年台上字第 5872 號判例全文要旨</strong>：「刑法第二百零一條第一項所謂之有價證券，係指在國內有流通性之有價證券而言，外國公司股票在國內並無流通性者，非本條所指之有價證券。又刑法第五條第六款所稱犯第二百零一條之偽造有價證券罪，係指本國之有價證券而言，外國之有價證券並不包括在內。」
                    </div>
                    <div>
                      • <strong class="text-slate-800 dark:text-slate-200">刑法第 5 條第 6 款（保護原則）</strong>：條文文字維持現行法。保護之客體嚴格限於本國法益，不包含外國有價證券。
                    </div>
                    <div>
                      • <strong class="text-slate-800 dark:text-slate-200">刑法第 7 條（國民國外重罪）</strong>：條文文字維持現行法。適用前提須行為人該當我國刑法分則之重罪構成要件；若不該當分則罪名，無從依第 7 條處罰。
                    </div>
                  </div>
                  <div class="pt-1 flex items-center justify-between text-[11px] text-slate-400">
                    <span>資料來源：司法院裁判書系統、最高法院判例要旨</span>
                    <span class="font-mono">P. 2-12 案例 2-6 核對完畢</span>
                  </div>
                </div>

              </div>
            </div>
          </section>

          <!-- 十二、解題提示：地的適用效力嚴格審查順序（教材第 2-12 頁 原文精華） -->
          <section id="sec-p0ch2-sec1-geographic-order" class="space-y-6 pt-2">
            <div class="flex items-center gap-3">
              <span class="w-2 h-6 rounded-full bg-indigo-600"></span>
              <h3 class="text-lg sm:text-xl font-black text-slate-900 dark:text-white tracking-tight">
                十二、解題提示：地的適用效力嚴格審查順序（教材第 2-12 頁）
              </h3>
            </div>

            <!-- 解題提示卡片 (Takeaway Box) -->
            <div class="p-6 sm:p-8 rounded-3xl border-2 border-indigo-500/40 bg-white dark:bg-[#101623] shadow-sm space-y-6">
              <div class="flex items-center justify-between border-b border-slate-100 dark:border-white/[0.08] pb-3">
                <div class="flex items-center gap-2">
                  <span class="text-xl">📖</span>
                  <h4 class="text-base sm:text-lg font-black text-slate-900 dark:text-white">
                    教材原文解題提示：主要基準優先與輔助基準補充性
                  </h4>
                </div>
                <span class="px-2.5 py-0.5 rounded-full bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 text-xs font-mono font-bold border border-indigo-200 dark:border-indigo-800">
                  METHODOLOGY
                </span>
              </div>

              <!-- 原文金句引用 -->
              <blockquote class="p-4 rounded-2xl border-l-4 border-indigo-600 bg-indigo-50/50 dark:bg-indigo-950/30 text-xs sm:text-sm text-slate-800 dark:text-slate-200 leading-relaxed font-semibold italic">
                「請注意，地的適用效力有嚴格的審查順序，必須優先檢驗主要基準，當無從適用主要基準時，方能思考輔助基準。簡言之，輔助基準僅有補充性地位，不能凌駕主要基準之上。」
              </blockquote>

              <!-- 嚴格審查順序流程圖 (Mermaid Architecture) -->
              <div class="space-y-3">
                <h5 class="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider flex items-center gap-1.5 font-mono">
                  <span>🧭</span>
                  <span>地的適用效力審查思維流程圖</span>
                </h5>

                <div class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
                  <div class="grid grid-cols-1 md:grid-cols-4 gap-3 text-center">
                    <div class="p-3.5 rounded-xl bg-blue-50 dark:bg-blue-950/50 border-2 border-blue-500 text-left space-y-1">
                      <span class="text-[10px] font-mono font-bold text-blue-600 dark:text-blue-400 block">STEP 1 • 主要基準優先</span>
                      <h6 class="text-xs font-black text-slate-900 dark:text-white">屬地原則 (§ 3 + § 4)</h6>
                      <p class="text-[11px] text-slate-600 dark:text-slate-300">
                        檢驗天然領域、浮動領土或隔地犯（行為或結果擇一在國內）。若該當即適用！
                      </p>
                    </div>

                    <div class="p-3.5 rounded-xl bg-purple-50 dark:bg-purple-950/50 border border-purple-300 dark:border-purple-800 text-left space-y-1">
                      <span class="text-[10px] font-mono font-bold text-purple-600 dark:text-purple-400 block">STEP 2 • 輔助基準一</span>
                      <h6 class="text-xs font-black text-slate-900 dark:text-white">屬人原則 (§ 6 + § 7)</h6>
                      <p class="text-[11px] text-slate-600 dark:text-slate-300">
                        處罰自己人：我國公務員國外特定罪（§ 6）或國民國外犯 3 年以上重罪（§ 7）。
                      </p>
                    </div>

                    <div class="p-3.5 rounded-xl bg-amber-50 dark:bg-amber-950/50 border border-amber-300 dark:border-amber-800 text-left space-y-1">
                      <span class="text-[10px] font-mono font-bold text-amber-600 dark:text-amber-400 block">STEP 3 • 輔助基準二</span>
                      <h6 class="text-xs font-black text-slate-900 dark:text-white">保護原則 (§ 8 + § 5)</h6>
                      <p class="text-[11px] text-slate-600 dark:text-slate-300">
                        處罰侵害國民（§ 8）或處罰任何人侵害國家重大法益（§ 5 ①②③⑤⑥⑦）。
                      </p>
                    </div>

                    <div class="p-3.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-300 dark:border-emerald-800 text-left space-y-1">
                      <span class="text-[10px] font-mono font-bold text-emerald-600 dark:text-emerald-400 block">STEP 4 • 輔助基準三</span>
                      <h6 class="text-xs font-black text-slate-900 dark:text-white">世界原則 (§ 5 ④⑧⑨⑩)</h6>
                      <p class="text-[11px] text-slate-600 dark:text-slate-300">
                        國際共通公敵犯罪：毒品、劫奴、海盜、跨境加重電信詐欺（第 11 款）。
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <!-- 四大原則全景橫向超級對照表格 -->
              <div class="space-y-3">
                <h5 class="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider flex items-center gap-1.5 font-mono">
                  <span>📊</span>
                  <span>刑法空間效力四大原則完整橫向對照表</span>
                </h5>

                <div class="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-800">
                  <table class="w-full text-left text-xs text-slate-600 dark:text-slate-300">
                    <thead class="bg-slate-50 dark:bg-slate-900/80 text-slate-800 dark:text-slate-200 text-[11px] font-black border-b border-slate-200 dark:border-slate-800">
                      <tr>
                        <th class="p-3">適用原則</th>
                        <th class="p-3">位階分類</th>
                        <th class="p-3">法條依據</th>
                        <th class="p-3">適用主體</th>
                        <th class="p-3">法理基礎</th>
                        <th class="p-3">雙重犯罪限制</th>
                        <th class="p-3">典型代表案</th>
                      </tr>
                    </thead>
                    <tbody class="divide-y divide-slate-100 dark:divide-slate-800">
                      <tr class="hover:bg-slate-50/50 dark:hover:bg-slate-900/40">
                        <td class="p-3 font-bold text-blue-600 dark:text-blue-400">屬地原則</td>
                        <td class="p-3"><span class="px-2 py-0.5 rounded bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 font-bold">主要基準</span></td>
                        <td class="p-3 font-mono">§ 3 + § 4</td>
                        <td class="p-3">任何人（不分國籍）</td>
                        <td class="p-3">國民主權之空間界限</td>
                        <td class="p-3 text-slate-400">無（直接管轄）</td>
                        <td class="p-3">案例 2-3（隔地犯詐騙）</td>
                      </tr>
                      <tr class="hover:bg-slate-50/50 dark:hover:bg-slate-900/40">
                        <td class="p-3 font-bold text-purple-600 dark:text-purple-400">屬人原則</td>
                        <td class="p-3"><span class="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold">輔助基準</span></td>
                        <td class="p-3 font-mono">§ 6 + § 7</td>
                        <td class="p-3">我國國民、我國公務員</td>
                        <td class="p-3">國民守法義務＋特殊忠誠</td>
                        <td class="p-3 font-semibold text-amber-600 dark:text-amber-400">有（§ 7 犯罪地不罰免罰）</td>
                        <td class="p-3">國民境外犯 3 年以上重罪</td>
                      </tr>
                      <tr class="hover:bg-slate-50/50 dark:hover:bg-slate-900/40">
                        <td class="p-3 font-bold text-amber-600 dark:text-amber-400">保護原則</td>
                        <td class="p-3"><span class="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold">輔助基準</span></td>
                        <td class="p-3 font-mono">§ 5 ①②③⑤⑥⑦ / § 8</td>
                        <td class="p-3">外國人、任何人</td>
                        <td class="p-3">國家自我防衛＋保護國民責任</td>
                        <td class="p-3 font-semibold text-slate-500">§ 8 有；§ 5 無</td>
                        <td class="p-3">案例 2-6（限本國法益）</td>
                      </tr>
                      <tr class="hover:bg-slate-50/50 dark:hover:bg-slate-900/40">
                        <td class="p-3 font-bold text-emerald-600 dark:text-emerald-400">世界原則</td>
                        <td class="p-3"><span class="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold">輔助基準</span></td>
                        <td class="p-3 font-mono">§ 5 ④⑧⑨⑩⑪</td>
                        <td class="p-3">任何人（國際公敵）</td>
                        <td class="p-3">跨國共通價值與國際公義</td>
                        <td class="p-3 text-slate-400">無（公敵全球共懲）</td>
                        <td class="p-3">境外電信機房加重詐欺</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <!-- 廣大興案實例剖析（教材第 2-13 頁 原文案例） -->
              <div class="p-5 sm:p-6 rounded-2xl bg-amber-50/70 dark:bg-amber-950/30 border border-amber-300 dark:border-amber-800 space-y-3.5">
                <div class="flex items-center justify-between">
                  <div class="flex items-center gap-2">
                    <span class="text-base">🚢</span>
                    <h5 class="text-sm font-black text-amber-900 dark:text-amber-200">
                      實例剖析：台菲漁業爭議（廣大興案）——主要基準優先性之嚴格檢驗
                    </h5>
                  </div>
                  <div class="flex items-center gap-2">
                    <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-500/10 text-amber-700 dark:text-amber-300 font-bold">
                      教材第 2-13 頁
                    </span>
                    <button type="button" onclick="copyCaseNote('guangdaxing', this)" class="px-2.5 py-1 rounded-lg bg-amber-100 dark:bg-amber-900/60 hover:bg-amber-200 dark:hover:bg-amber-800 text-amber-800 dark:text-amber-200 text-xs font-bold transition-all shadow-xs flex items-center gap-1 cursor-pointer" title="複製 Anki/Notion 格式案例筆記">
                      <span>📋</span>
                      <span>複製筆記</span>
                    </button>
                  </div>
                </div>

                <blockquote class="p-3.5 rounded-xl border-l-4 border-amber-600 bg-white/80 dark:bg-slate-900/80 text-xs sm:text-sm text-slate-800 dark:text-slate-200 leading-relaxed italic">
                  「以去年鬧得沸沸揚揚的『台菲漁業爭議（廣大興案）』為例，懸掛我國國旗的廣大興號，在公海上遭到菲律賓海巡人員持續槍擊，中華民國籍船長洪石成不幸中彈身亡，我國刑法得否適用呢？雖由 § 8 似乎立馬得出『肯定』的答案，卻犯了跳躍思考的大錯！因為就殺人罪而言，殺人行為地乃菲律賓船艦，死亡結果地則是我國船艦，按 § 4 陽地犯罪得適用我國刑法。當依據屬地原則（主要基準）就能得出結論時，便無保護原則（輔助基準）的出場機會了¹。」
                </blockquote>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1 text-xs">
                  <div class="p-3.5 rounded-xl bg-white/90 dark:bg-slate-900/90 border border-red-200 dark:border-red-900/50 space-y-1">
                    <span class="font-bold text-red-600 dark:text-red-400 flex items-center gap-1">
                      <span>⚠️</span>
                      <span>常見跳躍思考大錯（直覺誤區）</span>
                    </span>
                    <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-[11.5px]">
                      直覺看到「菲律賓人（外國人）在公海殺死台灣船長洪石成（我國人）」，便直接跳躍套用刑法 § 8（保護原則：外國人對我國人犯重罪）。此思維忽略了審查順序，混淆了管轄位階！
                    </p>
                  </div>

                  <div class="p-3.5 rounded-xl bg-white/90 dark:bg-slate-900/90 border border-emerald-200 dark:border-emerald-900/50 space-y-1">
                    <span class="font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                      <span>✅</span>
                      <span>嚴謹順序推導（正解）</span>
                    </span>
                    <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-[11.5px]">
                      廣大興號懸掛我國國旗，屬刑法 § 3 但書之浮動領土！洪石成中彈身亡之結果發生於我國船艦上，依 <strong>刑法 § 4 隔地犯</strong>，直接依 <strong>主要基準（屬地原則）</strong> 適用我國刑法，保護原則根本無須出場！
                    </p>
                  </div>
                </div>

                <div class="text-[11px] text-slate-500 dark:text-slate-400 flex items-center gap-1 pt-1 border-t border-amber-200/60 dark:border-amber-900/40">
                  <span>📖 註 1：</span>
                  <span>就此爭議，請詳見薛智仁，從台菲漁業爭議看公海上武裝衝突的刑事管轄權問題，臺灣法學 227，P. 34 以下。</span>
                  <span class="text-slate-400">（編按：原書文字作「陽地犯罪」，實指「隔地犯」）</span>
                </div>
              </div>

              <!-- (三) 外國裁判之效力➔複動原則（刑法 § 9，教材第 2-13 頁） -->
              <div class="p-6 sm:p-7 rounded-3xl border-2 border-indigo-200 dark:border-indigo-800/80 border-l-[8px] border-l-indigo-600 bg-white dark:bg-[#111726] shadow-md space-y-5">
                <div class="flex items-center justify-between border-b border-indigo-100 dark:border-indigo-900/50 pb-3">
                  <div class="flex items-center gap-2">
                    <span class="text-xl">⚖️</span>
                    <div>
                      <span class="text-[11px] font-mono font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider block">
                        FOREIGN JUDGMENT・ARTICLE 9
                      </span>
                      <h5 class="text-base sm:text-lg font-black text-slate-900 dark:text-white">
                        (三) 外國裁判之效力 ➔ 複動原則（刑法 § 9）
                      </h5>
                    </div>
                  </div>
                  <button type="button" class="statute-popover-trigger px-3 py-1 rounded-xl bg-indigo-50 dark:bg-indigo-950/80 text-indigo-600 dark:text-indigo-300 text-xs font-bold border border-indigo-200 dark:border-indigo-800 hover:bg-indigo-100 cursor-pointer transition-all shadow-xs" data-statute="9">
                    📜 刑法 § 9 條文
                  </button>
                </div>

                <!-- 🐣 外國裁判複動原則小白秒懂專區 -->
                <div class="rounded-2xl border-2 border-amber-300 dark:border-amber-700/80 bg-gradient-to-br from-amber-50/90 via-orange-50/60 to-yellow-50/70 dark:from-amber-950/40 dark:via-orange-950/30 dark:to-yellow-950/30 p-5 space-y-4 shadow-sm">
                  <div class="flex items-center gap-2.5 border-b border-amber-200 dark:border-amber-800/60 pb-3">
                    <span class="text-2xl animate-bounce">🐣</span>
                    <div>
                      <h4 class="text-sm sm:text-base font-black text-amber-950 dark:text-amber-200">
                        【小白秒懂專區】外國裁判複動原則（§ 9）：在國外坐過牢，回台灣還算嗎？
                      </h4>
                      <p class="text-xs text-amber-800 dark:text-amber-300 font-medium">
                        三大白話拆解：主權獨立不能被外國牽著走，但人道上不能把人剝兩層皮！
                      </p>
                    </div>
                  </div>

                  <div class="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs sm:text-sm">
                    <div class="p-3.5 rounded-xl bg-white/95 dark:bg-slate-900/90 border border-amber-200 dark:border-amber-800/60 space-y-1.5 shadow-xs">
                      <span class="text-amber-700 dark:text-amber-300 font-black block flex items-center gap-1.5">
                        <span class="w-5 h-5 rounded-full bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-200 flex items-center justify-center text-xs font-bold">1</span>
                        <span>外國法院判的不能約束台灣</span>
                      </span>
                      <p class="text-xs text-slate-700 dark:text-slate-200 leading-relaxed font-normal">
                        台灣是獨立主權國家，外國法院判決在台灣<strong>不發生「一事不再理」的消極效力</strong>。只要台灣刑法管得到，回國後檢察官與法院<strong>仍得依本法再處斷</strong>！
                      </p>
                    </div>

                    <div class="p-3.5 rounded-xl bg-white/95 dark:bg-slate-900/90 border border-amber-200 dark:border-amber-800/60 space-y-1.5 shadow-xs">
                      <span class="text-amber-700 dark:text-amber-300 font-black block flex items-center gap-1.5">
                        <span class="w-5 h-5 rounded-full bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-200 flex items-center justify-center text-xs font-bold">2</span>
                        <span>坐過的牢可以拿來折抵</span>
                      </span>
                      <p class="text-xs text-slate-700 dark:text-slate-200 leading-relaxed font-normal">
                        如果被告在外國<strong>已經實際蹲過苦牢</strong>（受刑之全部或一部執行），基於人道與過苛禁止，法官<strong>得免其刑之全部或一部執行</strong>，不會白白被關兩次！
                      </p>
                    </div>

                    <div class="p-3.5 rounded-xl bg-white/95 dark:bg-slate-900/90 border border-amber-200 dark:border-amber-800/60 space-y-1.5 shadow-xs">
                      <span class="text-amber-700 dark:text-amber-300 font-black block flex items-center gap-1.5">
                        <span class="w-5 h-5 rounded-full bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-200 flex items-center justify-center text-xs font-bold">3</span>
                        <span>關鍵字考點：「得免」非「應免」</span>
                      </span>
                      <p class="text-xs text-slate-700 dark:text-slate-200 leading-relaxed font-normal">
                        國考選擇題超愛考：條文是<strong>「得免」</strong>（法官有裁量權，看外國關多久、犯罪多嚴重決定要不要抵），絕對<strong>不是「應免」</strong>（非強制）！
                      </p>
                    </div>
                  </div>
                </div>

                <blockquote class="p-3.5 rounded-xl border-l-4 border-indigo-500 bg-slate-50 dark:bg-slate-900/80 text-xs sm:text-sm text-slate-800 dark:text-slate-200 leading-relaxed font-mono">
                  <strong>刑法第 9 條 原文規範：</strong><br>
                  「同一行為雖經外國確定裁判，仍得依本法處斷。但在外國已受刑之全部或一部執行者，得免其刑之全部或一部之執行。」
                </blockquote>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs sm:text-sm">
                  <div class="p-4 rounded-xl bg-indigo-50/50 dark:bg-slate-900/90 border border-indigo-200 dark:border-indigo-800/60 space-y-1.5">
                    <div class="flex items-center justify-between">
                      <span class="font-bold text-slate-900 dark:text-white flex items-center gap-1">
                        <span>1. 經外國確定裁判 ➔ 仍得依本法處斷</span>
                      </span>
                      <span class="px-2 py-0.5 rounded bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 font-mono font-bold text-[10px]">
                        主權獨立性
                      </span>
                    </div>
                    <p class="text-xs text-slate-700 dark:text-slate-200 leading-relaxed">
                      <strong>仍得依本法處斷！</strong> 國家刑罰權基於主權獨立性，不受外國法院裁判之拘束，外國裁判在我國不生「一事不再理」之直接拘束力。
                    </p>
                  </div>

                  <div class="p-4 rounded-xl bg-emerald-50/50 dark:bg-slate-900/90 border border-emerald-200 dark:border-emerald-800/60 space-y-1.5">
                    <div class="flex items-center justify-between">
                      <span class="font-bold text-slate-900 dark:text-white flex items-center gap-1">
                        <span>2. 在外國已受刑之執行 ➔ 得免其刑之執行</span>
                      </span>
                      <span class="px-2 py-0.5 rounded bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 font-mono font-bold text-[10px]">
                        人道裁量折抵
                      </span>
                    </div>
                    <p class="text-xs text-slate-700 dark:text-slate-200 leading-relaxed">
                      <strong>得免其刑之全部或一部之執行！</strong> 基於憲法比例原則與人道避免過苛，在外國已受刑之全部或一部執行者，法院得自由裁量予以免除或折抵。
                    </p>
                  </div>
                </div>
              </div>

              <!-- 【表 1】地的適用效力思考順序（教材第 2-13 頁 原文圖表） -->
              <div class="space-y-3 pt-2">
                <div class="flex items-center justify-between">
                  <h5 class="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider flex items-center gap-1.5 font-mono">
                    <span>🧭</span>
                    <span>【表 1】地的適用效力思考順序（教材第 2-13 頁 原文體系全景圖）</span>
                  </h5>
                  <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 font-bold">
                    教材第 2-13 頁
                  </span>
                </div>

                <!-- 流程圖表呈現 -->
                <div class="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-4">
                  <!-- 階層 1: 主要基準 -->
                  <div class="p-4 rounded-xl bg-white dark:bg-slate-900 border-2 border-blue-500 shadow-xs flex flex-col md:flex-row items-center justify-between gap-3">
                    <div class="flex items-center gap-3">
                      <span class="w-16 text-center py-1 rounded bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 font-mono font-bold text-xs">
                        § 3 + § 4
                      </span>
                      <div>
                        <span class="text-xs font-bold text-blue-600 dark:text-blue-400 font-mono">主要基準：國內犯罪</span>
                        <div class="text-sm font-black text-slate-900 dark:text-white flex items-center gap-2">
                          <span class="px-2 py-0.5 rounded bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 text-xs font-bold">屬地原則</span>
                          <span>犯罪發生在我國領域之內</span>
                        </div>
                      </div>
                    </div>
                    <div class="flex items-center gap-2 shrink-0">
                      <span class="px-3 py-1 rounded-lg bg-emerald-600 text-white font-bold text-xs flex items-center gap-1 shadow-sm">
                        <span>是 ➔</span>
                        <span>適用我國刑法</span>
                      </span>
                    </div>
                  </div>

                  <!-- 箭頭向下 -->
                  <div class="flex justify-center -my-2">
                    <span class="text-xs font-bold text-slate-400 font-mono bg-slate-100 dark:bg-slate-800 px-3 py-0.5 rounded-full border border-slate-200 dark:border-slate-700">
                      ↓ 否
                    </span>
                  </div>

                  <!-- 輔助基準區塊 -->
                  <div class="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
                    <div class="text-xs font-mono font-bold text-purple-600 dark:text-purple-400 border-b border-slate-100 dark:border-slate-800 pb-2">
                      輔助基準：國外犯罪
                    </div>

                    <!-- 1. § 5 -->
                    <div class="flex flex-col sm:flex-row items-center justify-between gap-2 p-2.5 rounded-lg bg-slate-50 dark:bg-slate-800/50">
                      <div class="flex items-center gap-2.5">
                        <span class="w-12 text-center py-0.5 rounded bg-purple-100 dark:bg-purple-950 text-purple-700 dark:text-purple-300 font-mono font-bold text-xs">§ 5</span>
                        <span class="text-xs font-bold text-slate-800 dark:text-slate-200">保護原則 ＋ 世界原則</span>
                        <span class="text-xs text-slate-500">我國重大法益 ＋ 世界共通價值</span>
                      </div>
                      <span class="text-xs font-bold text-emerald-600 dark:text-emerald-400">是 ➔ 適用我國刑法</span>
                    </div>

                    <!-- 否 ↓ -->
                    <div class="flex justify-center -my-1">
                      <span class="text-[10px] text-slate-400 font-mono font-bold">↓ 否</span>
                    </div>

                    <!-- 2. § 6 -->
                    <div class="flex flex-col sm:flex-row items-center justify-between gap-2 p-2.5 rounded-lg bg-slate-50 dark:bg-slate-800/50">
                      <div class="flex items-center gap-2.5">
                        <span class="w-12 text-center py-0.5 rounded bg-purple-100 dark:bg-purple-950 text-purple-700 dark:text-purple-300 font-mono font-bold text-xs">§ 6</span>
                        <span class="text-xs font-bold text-slate-800 dark:text-slate-200">屬人原則</span>
                        <span class="text-xs text-slate-500">我國公務員犯特定之罪</span>
                      </div>
                      <span class="text-xs font-bold text-emerald-600 dark:text-emerald-400">是 ➔ 適用我國刑法</span>
                    </div>

                    <!-- 否 ↓ -->
                    <div class="flex justify-center -my-1">
                      <span class="text-[10px] text-slate-400 font-mono font-bold">↓ 否</span>
                    </div>

                    <!-- 3. § 7 -->
                    <div class="flex flex-col sm:flex-row items-center justify-between gap-2 p-2.5 rounded-lg bg-slate-50 dark:bg-slate-800/50">
                      <div class="flex items-center gap-2.5">
                        <span class="w-12 text-center py-0.5 rounded bg-purple-100 dark:bg-purple-950 text-purple-700 dark:text-purple-300 font-mono font-bold text-xs">§ 7</span>
                        <span class="text-xs font-bold text-slate-800 dark:text-slate-200">屬人原則</span>
                        <span class="text-xs text-slate-500">我國國民犯特定之罪</span>
                      </div>
                      <span class="text-xs font-bold text-emerald-600 dark:text-emerald-400">是 ➔ 適用我國刑法</span>
                    </div>

                    <!-- 否 ↓ -->
                    <div class="flex justify-center -my-1">
                      <span class="text-[10px] text-slate-400 font-mono font-bold">↓ 否</span>
                    </div>

                    <!-- 4. § 8 -->
                    <div class="flex flex-col sm:flex-row items-center justify-between gap-2 p-2.5 rounded-lg bg-slate-50 dark:bg-slate-800/50">
                      <div class="flex items-center gap-2.5">
                        <span class="w-12 text-center py-0.5 rounded bg-purple-100 dark:bg-purple-950 text-purple-700 dark:text-purple-300 font-mono font-bold text-xs">§ 8</span>
                        <span class="text-xs font-bold text-slate-800 dark:text-slate-200">保護原則</span>
                        <span class="text-xs text-slate-500">外國人對我國國民犯特定之罪</span>
                      </div>
                      <span class="text-xs font-bold text-emerald-600 dark:text-emerald-400">是 ➔ 適用我國刑法</span>
                    </div>
                  </div>

                  <!-- 箭頭向下 -->
                  <div class="flex justify-center -my-2">
                    <span class="text-xs font-bold text-slate-400 font-mono bg-slate-100 dark:bg-slate-800 px-3 py-0.5 rounded-full border border-slate-200 dark:border-slate-700">
                      ↓ 否
                    </span>
                  </div>

                  <!-- 最終不適用 -->
                  <div class="flex justify-center">
                    <span class="px-5 py-2 rounded-xl bg-red-100 dark:bg-red-950/80 text-red-700 dark:text-red-300 font-black text-xs border border-red-200 dark:border-red-800 flex items-center gap-1.5 shadow-xs">
                      <span>❌ 不適用我國刑法</span>
                    </span>
                  </div>
                </div>
              </div>

            </div>
          </section>

          <!-- 十三、三、人的適用效力（教材第 2-14 頁 原文規範） -->
          <section id="sec-p0ch2-sec1-personal-scope" class="space-y-6 pt-2">
            <div class="flex items-center gap-3">
              <span class="w-2 h-6 rounded-full bg-indigo-600"></span>
              <h3 class="text-lg sm:text-xl font-black text-slate-900 dark:text-white tracking-tight">
                十三、三、人的適用效力（教材第 2-14 頁）
              </h3>
            </div>

            <!-- 天藍色概念焦點框 (Focus Box) -->
            <div class="box-legal-navy p-6 sm:p-8 rounded-3xl space-y-6">
              <div class="flex items-center justify-between border-b border-sky-300/40 dark:border-sky-700/40 pb-3">
                <div class="flex items-center gap-2">
                  <span class="text-xl">👤</span>
                  <h4 class="text-base sm:text-lg font-black text-[#032034] dark:text-white">
                    三、人的適用效力（教材第 2-14 頁 原文體系）
                  </h4>
                </div>
                <span class="px-2.5 py-0.5 rounded-full bg-white dark:bg-slate-800 text-[#0369a1] dark:text-sky-300 text-xs font-mono font-bold border border-sky-300 dark:border-sky-600 shadow-xs">
                  教材第 2-14 頁
                </span>
              </div>

              <!-- 🐣 人的適用效力小白秒懂專區 -->
              <div class="rounded-2xl border-2 border-amber-300 dark:border-amber-700/80 bg-gradient-to-br from-amber-50/90 via-orange-50/60 to-yellow-50/70 dark:from-amber-950/40 dark:via-orange-950/30 dark:to-yellow-950/30 p-5 space-y-4 shadow-sm">
                <div class="flex items-center gap-2.5 border-b border-amber-200 dark:border-amber-800/60 pb-3">
                  <span class="text-2xl animate-bounce">🐣</span>
                  <div>
                    <h4 class="text-sm sm:text-base font-black text-amber-950 dark:text-amber-200">
                      【小白秒懂專區】人的適用效力：誰有法律金鐘罩？總統與立委的差別是什麼？
                    </h4>
                    <p class="text-xs text-amber-800 dark:text-amber-300 font-medium">
                      三大白話口訣：總統只是「按暫停」，立委是「終身免死金牌（但打架不算）」！
                    </p>
                  </div>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs sm:text-sm">
                  <div class="p-3.5 rounded-xl bg-white/95 dark:bg-slate-900/90 border border-amber-200 dark:border-amber-800/60 space-y-1.5 shadow-xs">
                    <span class="text-amber-700 dark:text-amber-300 font-black block flex items-center gap-1.5">
                      <span class="w-5 h-5 rounded-full bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-200 flex items-center justify-center text-xs font-bold">1</span>
                      <span>總統刑事豁免權（憲法 § 52）</span>
                    </span>
                    <p class="text-xs text-slate-700 dark:text-slate-200 leading-relaxed font-normal">
                      <strong>只是暫停鍵（訴訟障礙）！</strong> 總統任期內除了犯「內亂、外患罪」以外不能抓他起訴。但<strong>犯罪依然成立</strong>！等卸任或被罷免解職的那一秒鐘開始，檢察官就可以立刻起訴究辦（釋 627 號：任內仍可扣押保全證據）！
                    </p>
                  </div>

                  <div class="p-3.5 rounded-xl bg-white/95 dark:bg-slate-900/90 border border-amber-200 dark:border-amber-800/60 space-y-1.5 shadow-xs">
                    <span class="text-amber-700 dark:text-amber-300 font-black block flex items-center gap-1.5">
                      <span class="w-5 h-5 rounded-full bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-200 flex items-center justify-center text-xs font-bold">2</span>
                      <span>立委言論免責權（憲法 § 73）</span>
                    </span>
                    <p class="text-xs text-slate-700 dark:text-slate-200 leading-relaxed font-normal">
                      <strong>真正的終身免死金牌（實體免責）！</strong> 立委在立法院內的發言與表決，對院外永久不負民刑事責任。即使卸任後，也不能因為當年在議事堂上的質詢發言而被秋後算帳！
                    </p>
                  </div>

                  <div class="p-3.5 rounded-xl bg-white/95 dark:bg-slate-900/90 border border-amber-200 dark:border-amber-800/60 space-y-1.5 shadow-xs">
                    <span class="text-amber-700 dark:text-amber-300 font-black block flex items-center gap-1.5">
                      <span class="w-5 h-5 rounded-full bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-200 flex items-center justify-center text-xs font-bold">3</span>
                      <span>考點陷阱：打架踹門完全不算免責！</span>
                    </span>
                    <p class="text-xs text-slate-700 dark:text-slate-200 leading-relaxed font-normal">
                      依<strong>釋字第 435 號</strong>解釋，免責只限於「言論」與議事職權行為；如果在立法院打群架、潑水、砸破桌椅、打傷其他立委，這屬於<strong>蓄意肢體暴力，完全不享免責權</strong>，一律成立傷害與毀損罪！
                    </p>
                  </div>
                </div>
              </div>

              <!-- 人的效力三大支柱網格 -->
              <div class="grid grid-cols-1 md:grid-cols-3 gap-4 pt-1">
                
                <!-- (一) 總統刑事豁免權 -->
                <div class="p-5 rounded-2xl bg-white/95 dark:bg-slate-900/90 border border-sky-200 dark:border-sky-800 space-y-3.5 shadow-xs">
                  <div class="flex items-center justify-between">
                    <span class="px-2 py-0.5 rounded bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 font-mono font-bold text-[11px] border border-blue-200 dark:border-blue-800">
                      憲法 § 52・釋627號
                    </span>
                    <span class="text-xs font-bold text-amber-600 dark:text-amber-400">訴訟障礙事由</span>
                  </div>
                  <div>
                    <h5 class="text-sm font-black text-slate-900 dark:text-white flex items-center gap-1.5">
                      <span>🎖️</span>
                      <span>(一) 總統 ➔ 刑事豁免權</span>
                    </h5>
                    <p class="text-[11px] text-blue-600 dark:text-blue-400 font-medium mt-0.5">
                      程序法上的訴訟障礙（未排除犯罪成立）
                    </p>
                  </div>
                  <ul class="text-xs text-slate-600 dark:text-slate-300 space-y-2 leading-relaxed">
                    <li class="flex items-start gap-1.5">
                      <span class="text-blue-500 font-bold shrink-0">•</span>
                      <span><strong>1. 性質</strong>：<strong>限縮性、暫時性</strong> 的訴訟障礙事由。</span>
                    </li>
                    <li class="flex items-start gap-1.5">
                      <span class="text-blue-500 font-bold shrink-0">•</span>
                      <span><strong>2. 限縮性</strong>：總統除犯 <strong>內亂罪、外患罪</strong> 外，不受刑事上之訴追。</span>
                    </li>
                    <li class="flex items-start gap-1.5">
                      <span class="text-blue-500 font-bold shrink-0">•</span>
                      <span><strong>3. 暫時性</strong>：總統 <strong>非經罷免、解職</strong>，不受刑事上之訴追（卸任或解職後仍得起訴追究！）。</span>
                    </li>
                  </ul>
                  <div class="pt-2 border-t border-slate-100 dark:border-slate-800 flex justify-end gap-2">
                    <button type="button" class="statute-popover-trigger text-[11px] text-blue-600 dark:text-blue-400 hover:underline font-semibold cursor-pointer" data-statute="const-52">
                      📜 憲法 § 52
                    </button>
                    <button type="button" class="statute-popover-trigger text-[11px] text-blue-600 dark:text-blue-400 hover:underline font-semibold cursor-pointer" data-statute="627">
                      🔍 釋字第 627 號
                    </button>
                  </div>
                </div>

                <!-- (二) 民代言論免責權 -->
                <div class="p-5 rounded-2xl bg-white/95 dark:bg-slate-900/90 border border-sky-200 dark:border-sky-800 space-y-3.5 shadow-xs">
                  <div class="flex items-center justify-between">
                    <span class="px-2 py-0.5 rounded bg-purple-50 dark:bg-purple-950/60 text-purple-700 dark:text-purple-300 font-mono font-bold text-[11px] border border-purple-200 dark:border-purple-800">
                      憲法 § 73・釋165/435
                    </span>
                    <span class="text-xs font-bold text-purple-600 dark:text-purple-400">實體法免責權</span>
                  </div>
                  <div>
                    <h5 class="text-sm font-black text-slate-900 dark:text-white flex items-center gap-1.5">
                      <span>🏛️</span>
                      <span>(二) 民代 ➔ 言論免責權</span>
                    </h5>
                    <p class="text-[11px] text-purple-600 dark:text-purple-400 font-medium mt-0.5">
                      自始性的個人排除刑罰事由（實體免責）
                    </p>
                  </div>
                  <ul class="text-xs text-slate-600 dark:text-slate-300 space-y-2 leading-relaxed">
                    <li class="flex items-start gap-1.5">
                      <span class="text-purple-500 font-bold shrink-0">•</span>
                      <span><strong>1. 性質</strong>：<strong>自始性的個人排除刑罰事由</strong>。</span>
                    </li>
                    <li class="flex items-start gap-1.5">
                      <span class="text-purple-500 font-bold shrink-0">•</span>
                      <span><strong>2. 釋字 165 號</strong>：主體包含 <strong>中央民代（立委）</strong> 以及 <strong>地方民代（議員）</strong>。</span>
                    </li>
                    <li class="flex items-start gap-1.5">
                      <span class="text-purple-500 font-bold shrink-0">•</span>
                      <span><strong>3. 釋字 435 號</strong>：保障範圍作最大程度界定（院會或委員會發言、質詢、提案、表決、協商、公聽會）。<strong>越此範圍與行使職權無關之行為（諸如蓄意之肢體動作侵害法益者），不在保障之列！</strong></span>
                    </li>
                  </ul>
                  <div class="pt-2 border-t border-slate-100 dark:border-slate-800 flex justify-end gap-2">
                    <button type="button" class="statute-popover-trigger text-[11px] text-purple-600 dark:text-purple-400 hover:underline font-semibold cursor-pointer" data-statute="const-73">
                      📜 憲法 § 73
                    </button>
                    <button type="button" class="statute-popover-trigger text-[11px] text-purple-600 dark:text-purple-400 hover:underline font-semibold cursor-pointer" data-statute="435">
                      🔍 釋字第 435 號
                    </button>
                  </div>
                </div>

                <!-- (三) 外交豁免權 -->
                <div class="p-5 rounded-2xl bg-white/95 dark:bg-slate-900/90 border border-sky-200 dark:border-sky-800 space-y-3.5 shadow-xs">
                  <div class="flex items-center justify-between">
                    <span class="px-2 py-0.5 rounded bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 font-mono font-bold text-[11px] border border-emerald-200 dark:border-emerald-800">
                      國際法外交慣例
                    </span>
                    <span class="text-xs font-bold text-emerald-600 dark:text-emerald-400">國際法豁免</span>
                  </div>
                  <div>
                    <h5 class="text-sm font-black text-slate-900 dark:text-white flex items-center gap-1.5">
                      <span>🌐</span>
                      <span>(三) 外交豁免權</span>
                    </h5>
                    <p class="text-[11px] text-emerald-600 dark:text-emerald-400 font-medium mt-0.5">
                      外國元首、使節、經許可駐軍之豁免
                    </p>
                  </div>
                  <ul class="text-xs text-slate-600 dark:text-slate-300 space-y-2 leading-relaxed">
                    <li class="flex items-start gap-1.5">
                      <span class="text-emerald-500 font-bold shrink-0">•</span>
                      <span><strong>適用對象</strong>：外國元首、大使、公使、領事、外交使節、經許可駐軍之外國軍隊。</span>
                    </li>
                    <li class="flex items-start gap-1.5">
                      <span class="text-emerald-500 font-bold shrink-0">•</span>
                      <span><strong>法源依據</strong>：維也納外交關係公約與國際法外交慣例。</span>
                    </li>
                    <li class="flex items-start gap-1.5">
                      <span class="text-emerald-500 font-bold shrink-0">•</span>
                      <span><strong>處理方式</strong>：不受我國刑事管轄審判，通常依外交途徑宣告為不受歡迎人物（Persona non grata）驅逐出境或由派遣國自行處置。</span>
                    </li>
                  </ul>
                  <div class="pt-2 border-t border-slate-100 dark:border-slate-800 flex justify-end">
                    <span class="text-[11px] text-slate-400 font-mono">維也納公約 VCDR</span>
                  </div>
                </div>

              </div>

              <!-- 📖 解題提示（教材第 2-14 頁 原文精華） -->
              <div class="p-5 sm:p-6 rounded-2xl bg-white dark:bg-slate-900/80 border-2 border-sky-300 dark:border-sky-700 space-y-3.5">
                <div class="flex items-center justify-between border-b border-sky-100 dark:border-sky-900 pb-2">
                  <div class="flex items-center gap-2">
                    <span class="text-base">📖</span>
                    <h5 class="text-sm font-black text-[#032034] dark:text-white">
                      解題提示：訴訟障礙事由 vs 實體免責權之本質區辨
                    </h5>
                  </div>
                  <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-sky-100 dark:bg-sky-950 text-[#0369a1] dark:text-sky-300 font-bold">
                    教材第 2-14 頁 原文精華
                  </span>
                </div>

                <blockquote class="p-3.5 rounded-xl border-l-4 border-[#0284c7] bg-sky-50/50 dark:bg-sky-950/40 text-xs sm:text-sm text-[#0c4a6e] dark:text-sky-100 leading-relaxed font-semibold italic">
                  「請注意，總統的刑事豁免權乃程序法上的『訴訟障礙事由』，並未排除犯罪之成立與刑罰之適用；民代的言論免責權乃實體法上的『免責權』，可以排除犯罪成立或阻卻刑罰的發動。兩者性質差異甚大，讀者請切勿混淆。」
                </blockquote>

                <!-- 雙軌對照表格 -->
                <div class="overflow-x-auto rounded-xl border border-sky-200 dark:border-sky-800 pt-1">
                  <table class="w-full text-left text-xs text-slate-600 dark:text-slate-300">
                    <thead class="bg-sky-100/70 dark:bg-sky-950/70 text-[#032034] dark:text-white text-[11px] font-black border-b border-sky-200 dark:border-sky-800">
                      <tr>
                        <th class="p-2.5">比較面向</th>
                        <th class="p-2.5">總統刑事豁免權（憲法 § 52）</th>
                        <th class="p-2.5">民代言論免責權（憲法 § 73）</th>
                      </tr>
                    </thead>
                    <tbody class="divide-y divide-sky-100 dark:divide-sky-900/50">
                      <tr>
                        <td class="p-2.5 font-bold text-slate-800 dark:text-slate-200">法律性質</td>
                        <td class="p-2.5 text-blue-700 dark:text-blue-300 font-bold">程序法 ➔「訴訟障礙事由」</td>
                        <td class="p-2.5 text-purple-700 dark:text-purple-300 font-bold">實體法 ➔「自始排除刑罰事由（免責權）」</td>
                      </tr>
                      <tr>
                        <td class="p-2.5 font-bold text-slate-800 dark:text-slate-200">犯罪成立與否</td>
                        <td class="p-2.5 text-amber-700 dark:text-amber-300 font-semibold">行為仍成立犯罪，具備不法與罪責！</td>
                        <td class="p-2.5 text-emerald-700 dark:text-emerald-300 font-semibold">自始排除犯罪成立或阻卻刑罰發動！</td>
                      </tr>
                      <tr>
                        <td class="p-2.5 font-bold text-slate-800 dark:text-slate-200">時間存續效力</td>
                        <td class="p-2.5"><strong>暫時性</strong>：卸任或經罷免解職後，即得訴追追究！</td>
                        <td class="p-2.5"><strong>永久性</strong>：任期內合法行使職權之言論，卸任後終身免責！</td>
                      </tr>
                      <tr>
                        <td class="p-2.5 font-bold text-slate-800 dark:text-slate-200">偵查證據保全</td>
                        <td class="p-2.5">依釋字 627 號：任內檢察官仍得進行必要之證據保全</td>
                        <td class="p-2.5">既屬實體免責，檢察官不得進行刑事偵查訴追</td>
                      </tr>
                      <tr>
                        <td class="p-2.5 font-bold text-slate-800 dark:text-slate-200">行為態樣邊界</td>
                        <td class="p-2.5">除內亂、外患罪外，所有刑事犯罪暫不受訴追</td>
                        <td class="p-2.5">限於議事職權關聯言論；<strong>蓄意肢體衝突暴力除外</strong></td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <!-- 2026 現行法規查核區塊 -->
                <div class="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-1.5 text-xs">
                  <div class="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-1">
                    <span class="font-bold text-slate-700 dark:text-slate-300 flex items-center gap-1.5 text-[11.5px]">
                      <span>📌</span>
                      <span>【2026 現行法規與憲法判決查核狀態】</span>
                    </span>
                    <span class="px-2 py-0.5 rounded bg-emerald-50 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 font-mono font-bold text-[10px]">
                      憲法法庭裁判拘束
                    </span>
                  </div>
                  <div class="space-y-1 text-slate-600 dark:text-slate-300 text-[11px] leading-relaxed">
                    <div>• <strong>中華民國憲法第 52 條、第 73 條</strong>：憲法本文條文有效施行。</div>
                    <div>• <strong>司法院釋字第 627 號解釋</strong>：總統刑事豁免權為程序性訴訟障礙，兼顧元首尊嚴與國家安定，卸任後追訴權時效起算。</div>
                    <div>• <strong>司法院釋字第 435 號解釋</strong>：立委言論免責權不包含肢體暴力，打架或砸毀公物等毀損、傷害罪行不受憲法保障。</div>
                  </div>
                </div>

              </div>

            </div>
          </section>

          <!-- 十四、第一節全節完結里程碑卡片 (Milestone Callout) -->
          <div class="p-6 sm:p-8 rounded-3xl border-2 border-indigo-500/50 bg-gradient-to-br from-indigo-50/70 via-blue-50/40 to-purple-50/50 dark:from-indigo-950/50 dark:via-blue-950/30 dark:to-purple-950/40 space-y-4 shadow-sm text-center sm:text-left">
            <div class="flex flex-col sm:flex-row items-center justify-between gap-3">
              <div class="space-y-1">
                <span class="text-xs font-mono font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider block">
                  CHAPTER 2 SECTION 1 COMPLETED • PAGES 2-9 TO 2-14 FULLY ARCHIVED
                </span>
                <h4 class="text-base sm:text-lg font-black text-slate-900 dark:text-white">
                  🎉 第一節【刑法的適用效力】全節完整收錄完畢！
                </h4>
              </div>
              <span class="px-3 py-1 rounded-xl bg-gradient-to-r from-indigo-600 to-blue-600 text-white text-xs font-bold shrink-0 shadow-md shadow-indigo-600/30">
                第一節全節完結 (P. 2-9 ～ 2-14)
              </span>
            </div>
            <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              第一節已全面收錄刑法適用效力之三大先天限制：
              <br>• <strong>時的適用效力（P. 2-9～2-10）</strong>：從舊從輕原則（§ 2）、案例 2-1（繼續犯）、案例 2-2（限時法 76 年決議）、保安處分雙軌制。
              <br>• <strong>地的適用效力（P. 2-10～2-13）</strong>：屬地主要基準（§ 3+§ 4）、案例 2-3（隔地犯詐騙）、案例 2-4（使領館慣例）、案例 2-5（大陸地區犯罪）、輔助基準三大原則（屬人 § 6+§ 7、保護 § 5+§ 8、世界 § 5）、案例 2-6（偽造外國股票案 72 年判例）、廣大興案、複動原則（§ 9）與【表 1】思考順序。
              <br>• <strong>人的適用效力（P. 2-14）</strong>：總統刑事豁免權（憲法 § 52、釋 627）、民代言論免責權（憲法 § 73、釋 165/435）、外交豁免權與訴訟障礙事由 vs 實體免責權解題提示。
            </p>
            <div class="pt-2 flex flex-wrap items-center justify-between gap-2 border-t border-indigo-200/60 dark:border-indigo-800/60 text-xs">
              <span class="text-slate-700 dark:text-slate-300 font-medium">
                👉 下一單元：<strong>第二節 刑法之解釋方法</strong>（教材第 2-15～2-24 頁，四大解釋方法、案例 2-7、公務員/重傷/性交法定定義）
              </span>
              <button onclick="switchView('part0-ch2-sec2')" class="text-indigo-600 dark:text-indigo-400 font-bold hover:underline cursor-pointer flex items-center gap-1">
                <span>前往第二節內文</span>
                <span>→</span>
              </button>
            </div>
          </div>

          <!-- Chapter Bottom Pagination: 第一節底部 -->
          <div class="pt-6 border-t border-slate-200 dark:border-white/[0.08] grid grid-cols-1 sm:grid-cols-2 gap-4">
            <button onclick="switchView('part0-chapter-2')" class="group p-4 rounded-2xl border border-slate-200 dark:border-white/[0.08] hover:border-indigo-500/40 bg-white dark:bg-[#111726] text-left transition-all hover:-translate-y-0.5 shadow-sm hover:shadow-md flex items-center gap-3">
              <div class="w-9 h-9 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 group-hover:bg-indigo-50 dark:group-hover:bg-indigo-950 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 flex items-center justify-center text-sm font-bold shrink-0 transition-colors">
                ←
              </div>
              <div class="min-w-0">
                <span class="text-[11px] text-slate-400 font-mono block">上一單元</span>
                <span class="text-xs font-bold text-slate-800 dark:text-slate-200 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors truncate block">
                  第二章 刑法的操作原理 (章節總覽)
                </span>
              </div>
            </button>

            <button onclick="switchView('part0-ch2-sec2')" class="group p-4 rounded-2xl border border-indigo-500/40 hover:border-indigo-500 bg-gradient-to-br from-indigo-50/50 to-blue-50/30 dark:from-indigo-950/30 dark:to-blue-950/20 text-right transition-all hover:-translate-y-0.5 shadow-sm hover:shadow-md flex items-center justify-between gap-3">
              <div class="min-w-0 text-left">
                <span class="text-[11px] text-indigo-700 dark:text-indigo-400 font-mono block font-bold">下一單元 (P. 2-15～2-24)</span>
                <span class="text-xs font-extrabold text-slate-900 dark:text-white group-hover:text-indigo-700 dark:group-hover:text-indigo-400 transition-colors truncate block">
                  第二節 刑法之解釋方法 →
                </span>
              </div>
              <div class="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-600 to-blue-600 text-white flex items-center justify-center text-sm font-bold shrink-0 group-hover:scale-105 transition-transform shadow-md shadow-indigo-600/30">
                →
              </div>
            </button>
          </div>

        </div>
`;
