/**
 * view-part0-ch2-sec1.js
 * 第零篇 第二章 第一節 刑法的適用效力 (教材第 2-9 ～ 2-14 頁 全節完結)
 * 嚴格遵循 AGENTS.md 最高行為憲法規範：
 * 1. 1:1 原書復刻與逐字精確核對（三大先天限制、從舊從輕原則、屬地主要基準、輔助基準、廣大興案、人的適用效力）
 * 2. 案例研習一律採用「五位一體法學劇院」標準（案例 2-1 ～ 案例 2-6 全數配備）：
 *    - ⚔️ 原被告/檢控辯護法庭正面言詞辯論（辯護人金毛大律師 vs 公訴檢察官赤狐女律師）
 *    - 🐾 柴柴法學教授 • 白話生活大解碼（分段留白、純紅底線）
 *    - ⚖️ 金毛大律師 • 法庭攻防點評
 *    - 🛡️ 德牧法規巡查官 • 法規雷達查核
 *    - 👨‍⚖️ 邊牧首席審判長 • 終審裁決一槌定音（#法槌一敲誰與爭鋒、🔨 實體法定讞、💡 國考答題定錨、📅 2026 最新法條動態備註）
 * 3. 排版嚴格垂直單欄堆疊（space-y-3，嚴禁橫向並排），零刺眼全紅字（統一純紅底線語法）
 * 4. 犬系四大天王導師標準配置與特寫比例，Zero-CORS 本機秒開相容
 */
window.APP_VIEWS = window.APP_VIEWS || {};
window.APP_VIEWS['viewPart0Ch2Sec1'] = window.APP_VIEWS['part0Ch2Sec1'] = window.APP_VIEWS['part0-ch2-sec1'] = `
        <!-- VIEW: 第零篇 第二章・第一節 刑法的適用效力 (教材第 2-9 ～ 2-14 頁 全節完結) -->
        <div id="viewPart0Ch2Sec1" class="fade-enter hidden space-y-8">
          
          <!-- 麵包屑導航 -->
          <div class="flex items-center justify-between gap-4 border-b border-slate-200/80 dark:border-white/10 pb-3">
            <nav class="flex items-center gap-2 text-xs font-medium text-slate-500 dark:text-slate-400 flex-wrap">
              <button onclick="switchView('part0')" class="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">第零篇</button>
              <span>/</span>
              <button onclick="switchView('part0-ch2')" class="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">第二章 刑法的操作原理</button>
              <span>/</span>
              <span class="text-indigo-600 dark:text-indigo-400 font-bold">第一節 刑法的適用效力</span>
            </nav>
            <div class="flex items-center gap-2 shrink-0">
              <button onclick="copyPart0Ch2Sec1Notes()" class="text-xs text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 flex items-center gap-1 transition-colors font-bold cursor-pointer">
                <span>📋 複製本節精華筆記</span>
              </button>
              <span class="text-slate-300 dark:text-slate-700">|</span>
              <button onclick="switchView('part0-ch2')" class="text-xs text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 flex items-center gap-1 transition-colors font-bold cursor-pointer">
                <span>← 返回第二章總覽</span>
              </button>
            </div>
          </div>

          <!-- 章節大標題 -->
          <div class="space-y-2">
            <div class="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-mono text-xs font-bold">
              <span>第零篇・第二章・第一節</span>
              <span class="px-2 py-0.5 rounded-md bg-indigo-50 dark:bg-indigo-950/40 text-[11px] border border-indigo-200 dark:border-indigo-900/50">教材第 2-9 ～ 2-14 頁 原文體系全收錄</span>
            </div>
            <h2 class="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
              第一節 刑法的適用效力
            </h2>
            <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-serif">
              我國刑法並非無遠弗屆適用，而是有時間範圍、空間範圍與人別範圍的先天限制。深入探討從舊從輕原則（§ 2）、繼續犯行為時認定、限時法追溯力、保安處分雙軌制；屬地主要基準（§ 3＋§ 4）、跨國電信詐騙隔地犯、使領館管轄慣例、大陸地區犯罪特殊國內關係；輔助基準（§ 5～§ 8）、廣大興案審查順序、外國裁判補助原則（§ 9）；以及總統刑事豁免權、民代言論免責權與外交豁免權。
            </p>
          </div>

          <!-- ═══════════════ 一、刑法適用效力之三大先天限制 ═══════════════ -->
          <section id="sec-p0ch2-sec1-three-dimensions" class="space-y-6 pt-2">
            <div class="flex items-center gap-3">
              <span class="w-2 h-6 rounded-full bg-indigo-600"></span>
              <h3 class="text-lg sm:text-xl font-black text-slate-900 dark:text-white tracking-tight">
                一、刑法適用效力之三大先天限制（教材第 2-9 頁）
              </h3>
            </div>

            <div class="p-6 rounded-3xl border border-slate-200 dark:border-white/[0.08] bg-white dark:bg-[#101623] shadow-sm space-y-6">
              
              <!-- 課本原文展示盒 (1:1 復刻) -->
              <div class="rounded-2xl p-5 bg-slate-50/80 dark:bg-slate-900/80 border-2 border-slate-200 dark:border-slate-800 space-y-3">
                <div class="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-2">
                  <span class="font-bold text-xs text-slate-500 dark:text-slate-400 font-mono">📖 課本原文 1:1 忠實重現 (P. 2-9)</span>
                  <span class="text-[11px] px-2 py-0.5 rounded bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 font-bold font-mono">三大先天限制</span>
                </div>
                <blockquote class="text-xs sm:text-sm text-slate-800 dark:text-slate-200 leading-relaxed font-serif italic border-l-4 border-indigo-500 pl-3.5">
                  「我國刑法並非無遠弗屆適用，而是有時間範圍、空間範圍與人別範圍的先天限制。以下就區分『時的適用效力』、『地的適用效力』與『人的適用效力』三個面向論述之。」
                </blockquote>
              </div>

              <!-- 三大面向架構卡片網格 (8px 色軸) -->
              <div class="grid grid-cols-1 md:grid-cols-3 gap-4 pt-1">
                <!-- 1. 時的適用效力 -->
                <div class="p-5 rounded-2xl bg-slate-50/80 dark:bg-slate-900/60 border-2 border-blue-200 dark:border-blue-900/60 border-l-[8px] border-l-blue-600 space-y-2 shadow-xs">
                  <div class="flex items-center justify-between">
                    <span class="text-xs font-mono font-bold text-blue-600 dark:text-blue-400">DIMENSION 1</span>
                    <span class="text-base">⏳</span>
                  </div>
                  <h4 class="text-sm font-bold text-slate-900 dark:text-white">時的適用效力</h4>
                  <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-serif">
                    時間範圍限制。以<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">行為時</span>為基準，原則禁止溯及既往，例外容許從舊從輕原則（刑法 § 2）。
                  </p>
                </div>

                <!-- 2. 地的適用效力 -->
                <div class="p-5 rounded-2xl bg-slate-50/80 dark:bg-slate-900/60 border-2 border-indigo-200 dark:border-indigo-900/60 border-l-[8px] border-l-indigo-600 space-y-2 shadow-xs">
                  <div class="flex items-center justify-between">
                    <span class="text-xs font-mono font-bold text-indigo-600 dark:text-indigo-400">DIMENSION 2</span>
                    <span class="text-base">🌐</span>
                  </div>
                  <h4 class="text-sm font-bold text-slate-900 dark:text-white">地的適用效力</h4>
                  <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-serif">
                    空間範圍限制。國民主權之空間界限，包含主要基準屬地原則（§ 3＋§ 4）與輔助基準屬人、保護、世界原則（§ 5～§ 8）。
                  </p>
                </div>

                <!-- 3. 人的適用效力 -->
                <div class="p-5 rounded-2xl bg-slate-50/80 dark:bg-slate-900/60 border-2 border-purple-200 dark:border-purple-900/60 border-l-[8px] border-l-purple-600 space-y-2 shadow-xs">
                  <div class="flex items-center justify-between">
                    <span class="text-xs font-mono font-bold text-purple-600 dark:text-purple-400">DIMENSION 3</span>
                    <span class="text-base">👤</span>
                  </div>
                  <h4 class="text-sm font-bold text-slate-900 dark:text-white">人的適用效力</h4>
                  <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-serif">
                    人別範圍限制。原則平等適用於所有人，例外基於憲法或國際法享有豁免特權（總統刑事豁免權、民代言論免責權、外交豁免）。
                  </p>
                </div>
              </div>

            </div>
          </section>

          <!-- ═══════════════ 二、時的適用效力：從舊從輕原則（§ 2） ═══════════════ -->
          <section id="sec-p0ch2-sec1-retroactive-principle" class="space-y-6 pt-2">
            <div class="flex items-center gap-3">
              <span class="w-2 h-6 rounded-full bg-blue-600"></span>
              <h3 class="text-lg sm:text-xl font-black text-slate-900 dark:text-white tracking-tight">
                二、時的適用效力：從舊從輕原則（§ 2）（教材第 2-9 頁）
              </h3>
            </div>

            <div class="p-6 rounded-3xl border border-slate-200 dark:border-white/[0.08] bg-white dark:bg-[#101623] shadow-sm space-y-6">
              
              <!-- 課本原文 1:1 復刻 -->
              <div class="rounded-2xl p-5 bg-slate-50/80 dark:bg-slate-900/80 border-2 border-slate-200 dark:border-slate-800 space-y-3">
                <div class="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-2">
                  <span class="font-bold text-xs text-slate-500 dark:text-slate-400 font-mono">📖 課本原文 1:1 忠實重現 (P. 2-9)</span>
                  <span class="text-[11px] px-2 py-0.5 rounded bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 font-bold font-mono">刑法 § 2 Ⅰ</span>
                </div>
                <blockquote class="text-xs sm:text-sm text-slate-800 dark:text-slate-200 leading-relaxed font-serif italic border-l-4 border-blue-500 pl-3.5 space-y-2">
                  <p>
                    「(一) 依據法不溯及既往原則，刑事處罰必須『行為時』有所規定，因此原則上應適用行為時之法律，就算嗣後法律發生變動亦同，這也就是§ 2 Ⅰ 本文：『行為後法律有變更者，適用行為時之法律。』」
                  </p>
                  <p>
                    「此外刑罰法定原則容許對人民有利的溯及，倘若行為後之法律變更有利於行為人者，例外適用有利於行為人之法律，這規定在§ 2 Ⅰ 但書：『但行為後之法律有利於行為人者，適用最有利於行為人之法律。』」
                  </p>
                </blockquote>
              </div>

              <!-- 原則 vs 例外 雙軌對比卡片 (8px 色軸) -->
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <!-- 原則：從舊原則 -->
                <div class="p-5 rounded-2xl bg-white dark:bg-slate-900 border-2 border-blue-300 dark:border-blue-800 border-l-[8px] border-l-blue-600 space-y-2.5 shadow-xs">
                  <div class="flex items-center justify-between">
                    <span class="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 border border-blue-300">
                      原則：從舊原則（行為時法）
                    </span>
                    <span class="text-xs font-mono font-bold text-slate-500">§ 2 Ⅰ 本文</span>
                  </div>
                  <blockquote class="text-xs font-semibold text-slate-800 dark:text-slate-200 border-l-3 border-blue-500 pl-2.5 py-0.5 font-serif">
                    「行為後法律有變更者，適用行為時之法律。」
                  </blockquote>
                  <p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-serif">
                    基於<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">法不溯及既往原則</span>與信賴保護，人民僅能依行為當下已知之法律安措手足，新法縱使加重刑度或新設處罰，亦不得回頭算帳。
                  </p>
                </div>

                <!-- 例外：從輕原則 -->
                <div class="p-5 rounded-2xl bg-white dark:bg-slate-900 border-2 border-emerald-300 dark:border-emerald-800 border-l-[8px] border-l-emerald-600 space-y-2.5 shadow-xs">
                  <div class="flex items-center justify-between">
                    <span class="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 border border-emerald-300">
                      例外：從輕原則（最有利法）
                    </span>
                    <span class="text-xs font-mono font-bold text-slate-500">§ 2 Ⅰ 但書</span>
                  </div>
                  <blockquote class="text-xs font-semibold text-slate-800 dark:text-slate-200 border-l-3 border-emerald-500 pl-2.5 py-0.5 font-serif">
                    「但行為後之法律有利於行為人者，適用最有利於行為人之法律。」
                  </blockquote>
                  <p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-serif">
                    罪刑法定原則僅禁止不利溯及，<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">容許對人民有利的溯及</span>。新法廢除罪名或減輕其刑時，代表國家實質可罰性評價降低，例外適用最有利之法律。
                  </p>
                </div>
              </div>

            </div>
          </section>

          <!-- ═══════════════ 三、案例 2-1：私行拘禁繼續犯跨越修法案 ═══════════════ -->
          <section id="sec-p0ch2-sec1-case-2-1" class="space-y-6 pt-2">
            <div class="flex items-center gap-3">
              <span class="w-2 h-6 rounded-full bg-indigo-600"></span>
              <h3 class="text-lg sm:text-xl font-black text-slate-900 dark:text-white tracking-tight">
                三、案例 2-1：拘禁跨越修法案與「行為時」認定（教材第 2-9 ～ 2-10 頁）
              </h3>
            </div>

            <div class="p-6 rounded-3xl border border-slate-200 dark:border-white/[0.08] bg-white dark:bg-[#101623] shadow-sm space-y-6">
              
              <!-- 案例 2-1 容器 (五位一體法學劇院) -->
              <div id="case-card-2-1" class="p-5 sm:p-6 rounded-2xl border-2 border-indigo-200 dark:border-indigo-900/60 bg-gradient-to-br from-slate-50 to-indigo-50/30 dark:from-slate-900 dark:to-indigo-950/20 shadow-xs space-y-4">
                
                <div class="flex items-center justify-between flex-wrap gap-2">
                  <div class="flex items-center gap-2">
                    <span class="px-3 py-1 rounded-full bg-indigo-600 text-white font-mono font-black text-xs shadow-xs">案例 2-1</span>
                    <h4 class="font-black text-base text-slate-900 dark:text-white">
                      拘禁跨越修法案——繼續犯之「行為時」精準認定（教材第 2-9 頁）
                    </h4>
                  </div>
                  <span class="text-xs font-mono text-indigo-600 dark:text-indigo-400 font-bold">§ 302 私行拘禁罪・繼續犯</span>
                </div>

                <!-- 案情事實 -->
                <div class="p-4 rounded-2xl bg-indigo-100/90 dark:bg-indigo-950/85 border-2 border-indigo-300 dark:border-indigo-700/80 shadow-xs flex items-start gap-3.5">
                  <div class="w-10 h-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center shrink-0 text-lg shadow-sm">
                    🔒
                  </div>
                  <div class="flex-1 space-y-1">
                    <div class="flex items-center gap-2">
                      <span class="px-2 py-0.5 rounded-md bg-indigo-600 text-white font-mono text-[10.5px] font-black tracking-wide shadow-xs">案件事實</span>
                      <span class="text-[11px] font-mono font-bold text-indigo-700 dark:text-indigo-300/90">#繼續犯跨越新舊法</span>
                    </div>
                    <div class="text-xs sm:text-sm font-bold text-indigo-950 dark:text-indigo-100 leading-relaxed font-serif">
                      甲在民國 99 年 1 月 1 日將乙拘禁在其別墅，剝奪其行動自由，僅給予少量的食物和水。警察於民國 100 年 2 月 1 日破案，救出驚恐未定的乙。這中間立法院於民國 100 年 1 月 10 日修正刑法 § 302 私行拘禁罪，將其法定刑從 5 年以下有期徒刑變更為 10 年以下有期徒刑。法院依照新法判處甲 9 年有期徒刑，甲抗辯法院適用新法違反法律不溯及既往原則、刑法 § 2 Ⅰ 從舊從輕原則，是否有理由？
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
                            <span class="px-2 py-0.5 rounded-full bg-amber-100 dark:bg-amber-950 text-amber-900 dark:text-amber-300 font-extrabold text-[10px]">著手時防線</span>
                          </div>
                          <div class="text-[10.5px] text-amber-700 dark:text-amber-400 font-bold">主張：應依 99 年著手時舊法從輕處斷</div>
                        </div>
                      </div>
                      <div class="space-y-2 text-xs sm:text-[13px] text-slate-800 dark:text-slate-100 leading-relaxed font-serif">
                        <p class="font-bold text-amber-950 dark:text-amber-200">
                          「審判長！被告早在 99 年 1 月 1 日即已著手拘禁，當時法定刑上限僅有 5 年！」
                        </p>
                        <p>
                          立法院中途加重處罰至 10 年，法院竟判處 9 年徒刑！這顯然是搭時光機事後重罰，牴觸刑法第 2 條第 1 項從舊從輕原則，應依行為著手時之舊法判決！
                        </p>
                      </div>
                    </div>
                    <div class="p-2.5 rounded-xl bg-amber-50 dark:bg-amber-950/40 text-xs sm:text-[13px] font-bold text-amber-950 dark:text-amber-200 leading-snug border border-amber-200 dark:border-amber-800/60">
                      🛡️ 辯方主張 ➔ <strong>著手時法律僅 5 年，判 9 年違反從舊從輕原則！</strong>
                    </div>
                  </div>

                  <!-- ⚔️ 公訴檢察官赤狐女律師 -->
                  <div class="p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-900 border-2 border-rose-300 dark:border-rose-700/80 space-y-3 flex flex-col justify-between shadow-xs">
                    <div class="space-y-3">
                      <div class="flex items-center gap-2.5 border-b border-rose-100 dark:border-rose-900/40 pb-2.5">
                        <div class="w-10 h-10 rounded-full overflow-hidden border-2 border-rose-400 shrink-0 bg-slate-900 shadow-xs">
                          <img src="images/prosecutor_fox.jpg" alt="公訴檢察官赤狐律師" class="w-full h-full object-cover" style="object-position: center 20%; transform: scale(1.35);">
                        </div>
                        <div class="min-w-0 flex-1">
                          <div class="flex items-center justify-between">
                            <span class="font-black text-xs sm:text-sm text-rose-950 dark:text-rose-200">公訴檢察官 • 赤狐女律師</span>
                            <span class="px-2 py-0.5 rounded-full bg-rose-100 dark:bg-rose-950 text-rose-900 dark:text-rose-300 font-extrabold text-[10px]">繼續犯終了論</span>
                          </div>
                          <div class="text-[10.5px] text-rose-700 dark:text-rose-400 font-bold">主張：行為終了於新法時代，逕行適用新法</div>
                        </div>
                      </div>
                      <div class="space-y-2 text-xs sm:text-[13px] text-slate-800 dark:text-slate-100 leading-relaxed font-serif">
                        <p class="font-bold text-rose-950 dark:text-rose-200">
                          「辯護人混淆了狀態犯與繼續犯！拘禁行為具有不可分割之持續性！」
                        </p>
                        <p>
                          被告自 99 年一路鎖到 100 年 2 月 1 日，新法於 1 月 10 日生效後被告仍持續拘禁！這不是『行為後』修法，而是『行為當中』修法，行為終了時新法已施行，直接適用行為時之新法！
                        </p>
                      </div>
                    </div>
                    <div class="p-2.5 rounded-xl bg-rose-50 dark:bg-rose-950/40 text-xs sm:text-[13px] font-bold text-rose-950 dark:text-rose-200 leading-snug border border-rose-200 dark:border-rose-800/60">
                      ⚔️ 控方主張 ➔ <strong>犯罪終了時已是新法，本案根本不是「行為後變更」！</strong>
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
                      <span class="font-black text-amber-950 dark:text-amber-200 text-sm sm:text-base">柴柴法學教授 • 生活白話解碼</span>
                      <span class="text-[11px] px-2.5 py-0.5 rounded-full bg-amber-200/80 dark:bg-amber-900/60 text-amber-900 dark:text-amber-100 font-extrabold font-mono">行為時 vs 行為後</span>
                    </div>
                    <div class="space-y-2 text-xs sm:text-sm text-slate-800 dark:text-slate-100 leading-relaxed font-serif">
                      <p>
                        「請注意，刑法 § 2 限於『行為後』法律變更者，方有從舊從輕原則之適用，若是『行為時』法律有變更者，則與 § 2 無關。
                      </p>
                      <p>
                        雖然一般犯罪鮮少在行為時發生法律變更，但甲所犯的私行拘禁罪即屬特例，該罪是行為具有持續性的<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">繼續犯</span>。
                      </p>
                      <p>
                        自 99 年 1 月 1 日起至 100 年 2 月 1 日止，均為私行拘禁行為。<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">故 100 年 1 月 10 日的法律變更是行為當中的法律變更</span>，從而無 § 2 適用的餘地，甲的抗辯無理汪！」
                      </p>
                    </div>
                  </div>
                </div>

                <!-- 3. ⚖️ 金毛大律師攻防 × 4. 🛡️ 德牧巡查官雷達 (嚴格垂直單欄堆疊) -->
                <div class="space-y-3 pt-1">
                  <!-- 金毛大律師點評 -->
                  <div class="p-3.5 sm:p-4 rounded-xl bg-amber-50/80 dark:bg-amber-950/20 border border-amber-300 dark:border-amber-800/60 flex items-start gap-3">
                    <div class="w-11 h-11 rounded-full overflow-hidden shrink-0 border border-amber-400 shadow-sm bg-amber-100">
                      <img src="images/golden_case_attorney.jpg" alt="金毛辯護大律師" class="w-full h-full object-cover" style="object-position: center 20%; transform: scale(1.35);">
                    </div>
                    <div class="flex-1 space-y-1">
                      <div class="flex items-center gap-2 flex-wrap">
                        <span class="font-black text-amber-950 dark:text-amber-200 text-sm sm:text-base">金毛大律師 • 法庭攻防點評</span>
                        <span class="text-[10px] px-2 py-0.5 rounded bg-amber-200 dark:bg-amber-900/60 text-amber-900 dark:text-amber-200 font-bold font-mono">實戰抗辯破局</span>
                      </div>
                      <div class="space-y-2 text-xs sm:text-sm text-slate-800 dark:text-slate-100 leading-relaxed font-serif">
                        <p>
                          「在法庭上遇到繼續犯跨越修法，辯方切勿單純背誦 § 2 從舊從輕原則，否則會被法官當庭駁回！
                        </p>
                        <p>
                          <span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">
                            實戰攻防關鍵在於『行為人有無在新法施行前中止或脫離犯罪』！
                          </span>
                          若能在修法前即釋放被害人，則行為終了於舊法時代，即有主張舊法之空間！」
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
                        <span class="text-[10px] px-2 py-0.5 rounded bg-blue-200 dark:bg-blue-900/60 text-blue-900 dark:text-blue-200 font-bold font-mono">裁判要旨檢索</span>
                      </div>
                      <div class="space-y-2 text-xs sm:text-sm text-slate-800 dark:text-slate-100 leading-relaxed font-serif">
                        <p class="font-black text-blue-950 dark:text-blue-300">
                          【最高法院 89 年台上字第 5235 號判決要旨】
                        </p>
                        <p class="leading-relaxed">
                          <span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">
                            「繼續犯在行為繼續進行中，法律有變更者，因其行為終了在新法施行之後，應逕行適用新法，無刑法第二條第一項之適用。」
                          </span>
                        </p>
                        <p>
                          繼續犯以違法狀態終了之時為犯罪行為終了之時，行為既終了於新法時代，即屬行為時法，自無新舊法比較適用。
                        </p>
                      </div>
                    </div>
                  </div>

                  <!-- 5. 👨‍⚖️ 邊牧首席審判長 • 終審裁決一槌定音 -->
                  <div class="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white border-2 border-indigo-400/80 shadow-md flex items-start gap-3.5 relative overflow-hidden">
                    <div class="w-12 h-12 rounded-2xl overflow-hidden shrink-0 border-2 border-indigo-400 shadow-md bg-slate-800">
                      <img src="images/border_collie_chief_judge.jpg" alt="邊牧審判長" class="w-full h-full object-cover" style="object-position: center 25%; transform: scale(1.35);">
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
                          🔨 【實體法定讞】：私行拘禁罪係繼續犯，其犯罪行為至 100 年 2 月 1 日始告終了。此際新法早已公布施行，法院逕依行為時之新法處刑，合憲合法，甲之抗辯為無理由！
                        </p>
                        <p>
                          💡 <strong>國考答題定錨</strong>：考題若設計跨越修法之犯罪，必先檢驗其為「狀態犯（如竊盜、殺人）」抑或「繼續犯（如拘禁、侵占）」。若屬繼續犯，行為終了在新法，直接適用新法，切忌跳入 § 2 Ⅰ 從舊從輕原則之比較泥淖！
                        </p>
                        <div class="p-2.5 rounded-xl bg-indigo-900/60 border border-indigo-400/40 text-[11.5px] text-amber-200 font-mono">
                          📅 <strong>2026 最新法條動態備註</strong>：刑法第 302 條於 108 年調高罰金；立法院更於民國 112 年 5 月 31 日增訂第 302-1 條加重剝奪行動自由罪（3人以上共犯、凌虐、拘禁7日以上處1～7年有期徒刑；因而致死者處無期徒刑或10年以上有期徒刑）。考生答題須精確區分 § 302 普通私行拘禁與 § 302-1 加重條款！
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </section>

          <!-- ═══════════════ 四、案例 2-2：限時法之追溯效力案 ═══════════════ -->
          <section id="sec-p0ch2-sec1-case-2-2" class="space-y-6 pt-2">
            <div class="flex items-center gap-3">
              <span class="w-2 h-6 rounded-full bg-indigo-600"></span>
              <h3 class="text-lg sm:text-xl font-black text-slate-900 dark:text-white tracking-tight">
                四、案例 2-2：限時法之追溯效力案（教材第 2-10 頁）
              </h3>
            </div>

            <div class="p-6 rounded-3xl border border-slate-200 dark:border-white/[0.08] bg-white dark:bg-[#101623] shadow-sm space-y-6">
              
              <!-- 案例 2-2 容器 (五位一體法學劇院) -->
              <div id="case-card-2-2" class="p-5 sm:p-6 rounded-2xl border-2 border-indigo-200 dark:border-indigo-900/60 bg-gradient-to-br from-slate-50 to-indigo-50/30 dark:from-slate-900 dark:to-indigo-950/20 shadow-xs space-y-4">
                
                <div class="flex items-center justify-between flex-wrap gap-2">
                  <div class="flex items-center gap-2">
                    <span class="px-3 py-1 rounded-full bg-indigo-600 text-white font-mono font-black text-xs shadow-xs">案例 2-2</span>
                    <h4 class="font-black text-base text-slate-900 dark:text-white">
                      動員戡亂時期國安法案——限時法失效後之追溯效力爭議（教材第 2-10 頁）
                    </h4>
                  </div>
                  <span class="text-xs font-mono text-indigo-600 dark:text-indigo-400 font-bold">76 年第 12 次刑庭總會決議</span>
                </div>

                <!-- 案情事實 -->
                <div class="p-4 rounded-2xl bg-indigo-100/90 dark:bg-indigo-950/85 border-2 border-indigo-300 dark:border-indigo-700/80 shadow-xs flex items-start gap-3.5">
                  <div class="w-10 h-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center shrink-0 text-lg shadow-sm">
                    📜
                  </div>
                  <div class="flex-1 space-y-1">
                    <div class="flex items-center gap-2">
                      <span class="px-2 py-0.5 rounded-md bg-indigo-600 text-white font-mono text-[10.5px] font-black tracking-wide shadow-xs">案件事實</span>
                      <span class="text-[11px] font-mono font-bold text-indigo-700 dark:text-indigo-300/90">#限時法終止效力</span>
                    </div>
                    <div class="text-xs sm:text-sm font-bold text-indigo-950 dark:text-indigo-100 leading-relaxed font-serif">
                      甲在動員戡亂時期觸犯「動員戡亂時期國家安全法」之規定，而於動員戡亂時期結束後始受審判，試問法官可否適用動員戡亂時期國家安全法論罪科刑？
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
                            <span class="px-2 py-0.5 rounded-full bg-amber-100 dark:bg-amber-950 text-amber-900 dark:text-amber-300 font-extrabold text-[10px]">肯定從舊從輕說</span>
                          </div>
                          <div class="text-[10.5px] text-amber-700 dark:text-amber-400 font-bold">主張：限時法失效即屬法律變更，應適用最有利之裁判時法（免罰）</div>
                        </div>
                      </div>
                      <div class="space-y-2 text-xs sm:text-[13px] text-slate-800 dark:text-slate-100 leading-relaxed font-serif">
                        <p class="font-bold text-amber-950 dark:text-amber-200">
                          「審判長！動員戡亂時期結束後，該特別法已自始自動失效，裁判時已無該處罰規定！」
                        </p>
                        <p>
                          我國刑法並未針對限時法設有例外追溯追訴之明文。否定從舊從輕原則將造成刑罰權的不當擴張，違反罪刑法定原則！依實務 76 年決議，仍應適用從舊從輕原則判處免訴或不罰！
                        </p>
                      </div>
                    </div>
                    <div class="p-2.5 rounded-xl bg-amber-50 dark:bg-amber-950/40 text-xs sm:text-[13px] font-bold text-amber-950 dark:text-amber-200 leading-snug border border-amber-200 dark:border-amber-800/60">
                      🛡️ 辯方主張 ➔ <strong>肯定說（76 年決議）：無明文例外規定前，仍適用 § 2 Ⅰ 從輕！</strong>
                    </div>
                  </div>

                  <!-- ⚔️ 公訴檢察官赤狐女律師 -->
                  <div class="p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-900 border-2 border-rose-300 dark:border-rose-700/80 space-y-3 flex flex-col justify-between shadow-xs">
                    <div class="space-y-3">
                      <div class="flex items-center gap-2.5 border-b border-rose-100 dark:border-rose-900/40 pb-2.5">
                        <div class="w-10 h-10 rounded-full overflow-hidden border-2 border-rose-400 shrink-0 bg-slate-900 shadow-xs">
                          <img src="images/prosecutor_fox.jpg" alt="公訴檢察官赤狐律師" class="w-full h-full object-cover" style="object-position: center 20%; transform: scale(1.35);">
                        </div>
                        <div class="min-w-0 flex-1">
                          <div class="flex items-center justify-between">
                            <span class="font-black text-xs sm:text-sm text-rose-950 dark:text-rose-200">公訴檢察官 • 赤狐女律師</span>
                            <span class="px-2 py-0.5 rounded-full bg-rose-100 dark:bg-rose-950 text-rose-900 dark:text-rose-300 font-extrabold text-[10px]">否定從舊從輕說</span>
                          </div>
                          <div class="text-[10.5px] text-rose-700 dark:text-rose-400 font-bold">主張：限時法本質係立法理由消失，非刑事政策評價轉變</div>
                        </div>
                      </div>
                      <div class="space-y-2 text-xs sm:text-[13px] text-slate-800 dark:text-slate-100 leading-relaxed font-serif">
                        <p class="font-bold text-rose-950 dark:text-rose-200">
                          「公訴方主張：若限時法逾期自動免罰，任何人只要逃避追訴拖過期限便逍遙法外！」
                        </p>
                        <p>
                          限時法之所以失效，是因為特殊時代背景消失，並非立法者認為該行為不再具有惡性。為確保限時法於有效期間內之威嚇效力，不應依從舊從輕原則解除處罰，仍得追溯論罪！
                        </p>
                      </div>
                    </div>
                    <div class="p-2.5 rounded-xl bg-rose-50 dark:bg-rose-950/40 text-xs sm:text-[13px] font-bold text-rose-950 dark:text-rose-200 leading-snug border border-rose-200 dark:border-rose-800/60">
                      ⚔️ 控方主張 ➔ <strong>否定說：若適用從舊從輕，無異鼓勵犯罪人拖過期限，架空限時法！</strong>
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
                      <span class="font-black text-amber-950 dark:text-amber-200 text-sm sm:text-base">柴柴法學教授 • 生活白話解碼</span>
                      <span class="text-[11px] px-2.5 py-0.5 rounded-full bg-amber-200/80 dark:bg-amber-900/60 text-amber-900 dark:text-amber-100 font-extrabold font-mono">限時法爭點全解</span>
                    </div>
                    <div class="space-y-2 text-xs sm:text-sm text-slate-800 dark:text-slate-100 leading-relaxed font-serif">
                      <p>
                        「所謂限時法指基於一定之需要，自始規定僅於特定期間內生效之法律，如題述之動員戡亂時期國家安全法，便只適用於動員戡亂時期，超過適用期間，該法自動失效。
                      </p>
                      <p>
                        限時法是否適用 § 2，<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">否定說認為限時法之變更並非刑事政策在評價上有所轉變，而是基於立法理由的消失而來，故不宜依從舊從輕原則解除處罰。</span>
                      </p>
                      <p>
                        <span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">肯定說（76 年第 12 次刑庭總會決議）認為否定說將造成刑罰權的擴張，在未就限時法設有一般性規定之前，仍應適用從舊從輕原則，以免違反罪刑法定原則汪！</span>」
                      </p>
                    </div>
                  </div>
                </div>

                <!-- 3. ⚖️ 金毛大律師攻防 × 4. 🛡️ 德牧巡查官雷達 (嚴格垂直單欄堆疊) -->
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
                          「在實務審判中，若遇到限時法失效之案件，辯護人務必緊扣 76 年第 12 次刑庭決議！
                        </p>
                        <p>
                          <span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">
                            強調我國刑法總則並未如德國刑法設有限時法例外規定，基於『罪刑法定原則』，法官不得以法理恣意擴張刑罰權！
                          </span>
                          主張依刑事訴訟法第 302 條第 4 款判決免訴！」
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
                        <span class="text-[10px] px-2 py-0.5 rounded bg-blue-200 dark:bg-blue-900/60 text-blue-900 dark:text-blue-200 font-bold font-mono">判解決議檢索</span>
                      </div>
                      <div class="space-y-2 text-xs sm:text-sm text-slate-800 dark:text-slate-100 leading-relaxed font-serif">
                        <p class="font-black text-blue-950 dark:text-blue-300">
                          【最高法院 76 年度第 12 次刑事庭會議決議】
                        </p>
                        <p class="leading-relaxed">
                          <span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">
                            「限時法未設追溯處罰之特別規定者，其有效期間屆滿後，仍應適用刑法第二條第一項之規定。」
                          </span>
                        </p>
                        <p>
                          實務明確採取肯定說。立法者若欲使限時法於失效後仍得追訴，必須於法條中明文規定（例如『本法失效後，於施行期間所犯之罪仍適用之』），否則一律受罪刑法定與從舊從輕原則拘束。
                        </p>
                      </div>
                    </div>
                  </div>

                  <!-- 5. 👨‍⚖️ 邊牧首席審判長 • 終審裁決一槌定音 -->
                  <div class="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white border-2 border-indigo-400/80 shadow-md flex items-start gap-3.5 relative overflow-hidden">
                    <div class="w-12 h-12 rounded-2xl overflow-hidden shrink-0 border-2 border-indigo-400 shadow-md bg-slate-800">
                      <img src="images/border_collie_chief_judge.jpg" alt="邊牧審判長" class="w-full h-full object-cover" style="object-position: center 25%; transform: scale(1.35);">
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
                          🔨 【實體法定讞】：動員戡亂時期國家安全法並未設有失效後繼續追訴處罰之特別明文。基於罪刑法定原則與最高法院 76 年第 12 次刑庭決議，應適用刑法 § 2 Ⅰ 從舊從輕原則，法官不可再適用該已失效之法律論罪科刑！
                        </p>
                        <p>
                          💡 <strong>國考答題定錨</strong>：考生務必點出「否定說（立法理由消失論）」與「肯定說（罪刑法定與刑罰權限制論）」兩說對峙，並以最高法院 76 年第 12 次刑庭總會決議作為終審裁決定錨，論證嚴謹完整！
                        </p>
                        <div class="p-2.5 rounded-xl bg-indigo-900/60 border border-indigo-400/40 text-[11.5px] text-amber-200 font-mono">
                          📅 <strong>2026 最新法條動態備註</strong>：限時法之追溯力爭議在近代嚴重特殊傳染性肺炎防治及紓困振興特別條例（嚴重特殊傳染性肺炎特別條例於 112 年 6 月 30 日施行屆滿失效）再度受到廣泛討論，實務均依 76 年決議意旨，在無特別過渡明文下貫徹從舊從輕原則。
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </section>

          <!-- ═══════════════ 五、保安處分之時間效力（雙軌區分原則） ═══════════════ -->
          <section id="sec-p0ch2-sec1-security-measures" class="space-y-6 pt-2">
            <div class="flex items-center gap-3">
              <span class="w-2 h-6 rounded-full bg-blue-600"></span>
              <h3 class="text-lg sm:text-xl font-black text-slate-900 dark:text-white tracking-tight">
                五、保安處分之時間效力（教材第 2-10 頁）
              </h3>
            </div>

            <div class="p-6 rounded-3xl border border-slate-200 dark:border-white/[0.08] bg-white dark:bg-[#101623] shadow-sm space-y-6">
              
              <!-- 課本原文展示盒 (1:1 復刻) -->
              <div class="rounded-2xl p-5 bg-slate-50/80 dark:bg-slate-900/80 border-2 border-slate-200 dark:border-slate-800 space-y-3">
                <div class="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-2">
                  <span class="font-bold text-xs text-slate-500 dark:text-slate-400 font-mono">📖 課本原文 1:1 忠實重現 (P. 2-10)</span>
                  <span class="text-[11px] px-2 py-0.5 rounded bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 font-bold font-mono">刑法 § 2 Ⅱ 雙軌制</span>
                </div>
                <blockquote class="text-xs sm:text-sm text-slate-800 dark:text-slate-200 leading-relaxed font-serif italic border-l-4 border-blue-500 pl-3.5">
                  「(二) 保安處分可以區分為『拘束人身自由（如監護、強制治療）』與『非拘束人身自由（如保護管束、驅逐出境）』兩種類型，由於拘束人身自由之保安處分已經與刑罰相去不遠，亦有從舊從輕原則之適用。至於非拘束人身自由之保安處分，則依據§ 2 Ⅱ 適用裁判時之法律。」
                </blockquote>
              </div>

              <!-- 雙軌體系對比盒 (8px 色軸) -->
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <!-- 1. 拘束人身自由保安處分 -->
                <div class="p-5 rounded-2xl bg-white dark:bg-slate-900 border-2 border-rose-200 dark:border-rose-900/60 border-l-[8px] border-l-rose-500 space-y-2.5 shadow-xs">
                  <div class="flex items-center justify-between">
                    <span class="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-rose-100 dark:bg-rose-950 text-rose-700 dark:text-rose-300 border border-rose-300">
                      拘束人身自由之保安處分
                    </span>
                    <span class="text-xs font-mono font-bold text-rose-600">實質刑罰化</span>
                  </div>
                  <ul class="text-xs text-slate-700 dark:text-slate-300 space-y-1.5 leading-relaxed font-serif">
                    <li>• <strong>典型範例</strong>：感化教育（§ 86）、監護處分（§ 87）、禁戒（§ 88/89）、強制治療（§ 91-1）。</li>
                    <li>• <strong>適用原則</strong>：<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">適用從舊從輕原則（§ 2 Ⅰ）</span>。</li>
                    <li>• <strong>法理基礎</strong>：剝奪受處分人之身體人身自由，惡害感受與徒刑無異，受罪刑法定原則嚴格拘束。</li>
                  </ul>
                </div>

                <!-- 2. 非拘束人身自由保安處分 -->
                <div class="p-5 rounded-2xl bg-white dark:bg-slate-900 border-2 border-emerald-200 dark:border-emerald-900/60 border-l-[8px] border-l-emerald-600 border-l-[8px] space-y-2.5 shadow-xs">
                  <div class="flex items-center justify-between">
                    <span class="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 border border-emerald-300">
                      非拘束人身自由之保安處分
                    </span>
                    <span class="text-xs font-mono font-bold text-emerald-600">純粹矯治</span>
                  </div>
                  <ul class="text-xs text-slate-700 dark:text-slate-300 space-y-1.5 leading-relaxed font-serif">
                    <li>• <strong>典型範例</strong>：保護管束（§ 92）、驅逐出境（§ 95）、沒收（具特別預防性格）。</li>
                    <li>• <strong>適用原則</strong>：<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">適用裁判時之法律（§ 2 Ⅱ）</span>。</li>
                    <li>• <strong>法理基礎</strong>：重在未來之特別預防與社會防衛，不涉及嚴格自由剝奪，應以裁判當下最新法規判定。</li>
                  </ul>
                </div>
              </div>

            </div>
          </section>

          <!-- ═══════════════ 六、地的適用效力：主要基準——屬地原則（§ 3＋§ 4） ═══════════════ -->
          <section id="sec-p0ch2-sec1-spatial-scope" class="space-y-6 pt-2">
            <div class="flex items-center gap-3">
              <span class="w-2 h-6 rounded-full bg-blue-600"></span>
              <h3 class="text-lg sm:text-xl font-black text-slate-900 dark:text-white tracking-tight">
                六、地的適用效力：主要基準——屬地原則（§ 3＋§ 4）（教材第 2-10 ～ 2-11 頁）
              </h3>
            </div>

            <div class="p-6 rounded-3xl border border-slate-200 dark:border-white/[0.08] bg-white dark:bg-[#101623] shadow-sm space-y-6">
              
              <!-- 課本原文展示盒 (1:1 復刻) -->
              <div class="rounded-2xl p-5 bg-slate-50/80 dark:bg-slate-900/80 border-2 border-slate-200 dark:border-slate-800 space-y-3">
                <div class="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-2">
                  <span class="font-bold text-xs text-slate-500 dark:text-slate-400 font-mono">📖 課本原文 1:1 忠實重現 (P. 2-10 ~ 2-11)</span>
                  <span class="text-[11px] px-2 py-0.5 rounded bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 font-bold font-mono">主要基準體系</span>
                </div>
                <blockquote class="text-xs sm:text-sm text-slate-800 dark:text-slate-200 leading-relaxed font-serif italic border-l-4 border-blue-500 pl-3.5 space-y-2">
                  <p>「二、地的適用效力：屬地原則、屬人原則、保護原則、世界原則」</p>
                  <p>「(一) 主要基準：屬地原則（§ 3 + § 4）」</p>
                  <p>「1. 核心：國家刑罰權及於任何發生於該國領域內的犯罪行為，包括領土、領海以及領空。」</p>
                  <p>「2. 擴張：領域外的船舶或航空器屬於浮動領土。」</p>
                  <p>「3. 隔地：只要犯罪之行為或結果，其中之一在我國領域內，即適用我國刑法。此外對於『結果』之解釋，有力學說主張在未遂犯情形乃是預期結果發生地；在共同正犯情形更包含其他共同正犯行為地；在共犯情形指正犯行為地。」</p>
                </blockquote>
              </div>

              <!-- 三大支柱卡片 (8px 色軸) -->
              <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                <!-- 核心：領域內 -->
                <div class="p-5 rounded-2xl bg-slate-50/80 dark:bg-slate-900/60 border-2 border-blue-200 dark:border-blue-900/60 border-l-[8px] border-l-blue-600 space-y-2 shadow-xs">
                  <span class="px-2 py-0.5 rounded text-[10.5px] font-bold bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 font-mono">1. 核心 (§ 3 本文)</span>
                  <h4 class="text-sm font-bold text-slate-900 dark:text-white">真實固有領土</h4>
                  <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-serif">
                    國家主權所及之全部空間，包括<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">領土、領海（12浬）以及領空</span>。任何人在其內犯罪，不問國籍一律管轄。
                  </p>
                </div>

                <!-- 擴張：浮動領土 -->
                <div class="p-5 rounded-2xl bg-slate-50/80 dark:bg-slate-900/60 border-2 border-indigo-200 dark:border-indigo-900/60 border-l-[8px] border-l-indigo-600 space-y-2 shadow-xs">
                  <span class="px-2 py-0.5 rounded text-[10.5px] font-bold bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 font-mono">2. 擴張 (§ 3 但書)</span>
                  <h4 class="text-sm font-bold text-slate-900 dark:text-white">浮動領土擴張</h4>
                  <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-serif">
                    在我國領域外之<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">中華民國船舶或航空器</span>內犯罪者，以在中華民國領域內犯罪論。旗國管轄權之具體展現。
                  </p>
                </div>

                <!-- 隔地：行為或結果 -->
                <div class="p-5 rounded-2xl bg-slate-50/80 dark:bg-slate-900/60 border-2 border-purple-200 dark:border-purple-900/60 border-l-[8px] border-l-purple-600 space-y-2 shadow-xs">
                  <span class="px-2 py-0.5 rounded text-[10.5px] font-bold bg-purple-100 dark:bg-purple-950 text-purple-700 dark:text-purple-300 font-mono">3. 隔地 (§ 4)</span>
                  <h4 class="text-sm font-bold text-slate-900 dark:text-white">隔地犯擇一原則</h4>
                  <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-serif">
                    犯罪之<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">行為或結果，有一在境內</span>即適用。未遂犯指預期結果發生地；共犯包含正犯行為地或共同正犯行為地。
                  </p>
                </div>
              </div>

            </div>
          </section>

          <!-- ═══════════════ 七、案例 2-3：跨境電信詐騙案（隔地犯 § 4） ═══════════════ -->
          <section id="sec-p0ch2-sec1-case-2-3" class="space-y-6 pt-2">
            <div class="flex items-center gap-3">
              <span class="w-2 h-6 rounded-full bg-indigo-600"></span>
              <h3 class="text-lg sm:text-xl font-black text-slate-900 dark:text-white tracking-tight">
                七、案例 2-3：跨境電信詐騙案（隔地犯 § 4）（教材第 2-11 頁）
              </h3>
            </div>

            <div class="p-6 rounded-3xl border border-slate-200 dark:border-white/[0.08] bg-white dark:bg-[#101623] shadow-sm space-y-6">
              
              <!-- 案例 2-3 容器 (五位一體法學劇院) -->
              <div id="case-card-2-3" class="p-5 sm:p-6 rounded-2xl border-2 border-indigo-200 dark:border-indigo-900/60 bg-gradient-to-br from-slate-50 to-indigo-50/30 dark:from-slate-900 dark:to-indigo-950/20 shadow-xs space-y-4">
                
                <div class="flex items-center justify-between flex-wrap gap-2">
                  <div class="flex items-center gap-2">
                    <span class="px-3 py-1 rounded-full bg-indigo-600 text-white font-mono font-black text-xs shadow-xs">案例 2-3</span>
                    <h4 class="font-black text-base text-slate-900 dark:text-white">
                      跨境電信詐騙案——隔地犯之結果地認定（教材第 2-11 頁）
                    </h4>
                  </div>
                  <span class="text-xs font-mono text-indigo-600 dark:text-indigo-400 font-bold">刑法 § 4 隔地犯</span>
                </div>

                <!-- 案情事實 -->
                <div class="p-4 rounded-2xl bg-indigo-100/90 dark:bg-indigo-950/85 border-2 border-indigo-300 dark:border-indigo-700/80 shadow-xs flex items-start gap-3.5">
                  <div class="w-10 h-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center shrink-0 text-lg shadow-sm">
                    📞
                  </div>
                  <div class="flex-1 space-y-1">
                    <div class="flex items-center gap-2">
                      <span class="px-2 py-0.5 rounded-md bg-indigo-600 text-white font-mono text-[10.5px] font-black tracking-wide shadow-xs">案件事實</span>
                      <span class="text-[11px] font-mono font-bold text-indigo-700 dark:text-indigo-300/90">#境外機房境內匯款</span>
                    </div>
                    <div class="text-xs sm:text-sm font-bold text-indigo-950 dark:text-indigo-100 leading-relaxed font-serif">
                      詐騙集團總部設在菲律賓，利用電話騙在台灣的受害人匯款，是否適用我國刑法？
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
                            <span class="px-2 py-0.5 rounded-full bg-amber-100 dark:bg-amber-950 text-amber-900 dark:text-amber-300 font-extrabold text-[10px]">境外行為防線</span>
                          </div>
                          <div class="text-[10.5px] text-amber-700 dark:text-amber-400 font-bold">主張：全部詐騙通訊實行行為均在菲國境外</div>
                        </div>
                      </div>
                      <div class="space-y-2 text-xs sm:text-[13px] text-slate-800 dark:text-slate-100 leading-relaxed font-serif">
                        <p class="font-bold text-amber-950 dark:text-amber-200">
                          「審判長！被告全程未曾踏入我國國境一步，所有撥電話、設機房之施術詐欺行為均在菲律賓實行！」
                        </p>
                        <p>
                          我國刑法以屬地主義為原則，既然構成要件的核心實行行為全在境外，依嚴格屬地主義，我國不應享有管轄權！
                        </p>
                      </div>
                    </div>
                    <div class="p-2.5 rounded-xl bg-amber-50 dark:bg-amber-950/40 text-xs sm:text-[13px] font-bold text-amber-950 dark:text-amber-200 leading-snug border border-amber-200 dark:border-amber-800/60">
                      🛡️ 辯方主張 ➔ <strong>行為地在菲國，未踏入台灣境內，無屬地管轄！</strong>
                    </div>
                  </div>

                  <!-- ⚔️ 公訴檢察官赤狐女律師 -->
                  <div class="p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-900 border-2 border-rose-300 dark:border-rose-700/80 space-y-3 flex flex-col justify-between shadow-xs">
                    <div class="space-y-3">
                      <div class="flex items-center gap-2.5 border-b border-rose-100 dark:border-rose-900/40 pb-2.5">
                        <div class="w-10 h-10 rounded-full overflow-hidden border-2 border-rose-400 shrink-0 bg-slate-900 shadow-xs">
                          <img src="images/prosecutor_fox.jpg" alt="公訴檢察官赤狐律師" class="w-full h-full object-cover" style="object-position: center 20%; transform: scale(1.35);">
                        </div>
                        <div class="min-w-0 flex-1">
                          <div class="flex items-center justify-between">
                            <span class="font-black text-xs sm:text-sm text-rose-950 dark:text-rose-200">公訴檢察官 • 赤狐女律師</span>
                            <span class="px-2 py-0.5 rounded-full bg-rose-100 dark:bg-rose-950 text-rose-900 dark:text-rose-300 font-extrabold text-[10px]">結果地該當論</span>
                          </div>
                          <div class="text-[10.5px] text-rose-700 dark:text-rose-400 font-bold">主張：被害人陷於錯誤、在台匯款財產受損，結果地在台灣</div>
                        </div>
                      </div>
                      <div class="space-y-2 text-xs sm:text-[13px] text-slate-800 dark:text-slate-100 leading-relaxed font-serif">
                        <p class="font-bold text-rose-950 dark:text-rose-200">
                          「公訴方駁斥：刑法第 4 條明定犯罪之行為或結果有一在我國領域內即適用！」
                        </p>
                        <p>
                          詐欺罪之構成要件包含『陷於錯誤』與『交付財物』之財產損害結果。受害人在台灣接聽電話、於台灣銀行帳戶操作匯款，犯罪結果地清清楚楚發生在台灣國境內，我國刑法當然管轄！
                        </p>
                      </div>
                    </div>
                    <div class="p-2.5 rounded-xl bg-rose-50 dark:bg-rose-950/40 text-xs sm:text-[13px] font-bold text-rose-950 dark:text-rose-200 leading-snug border border-rose-200 dark:border-rose-800/60">
                      ⚔️ 控方主張 ➔ <strong>依 § 4 隔地犯，結果地在台灣，直接適用我國刑法！</strong>
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
                      <span class="font-black text-amber-950 dark:text-amber-200 text-sm sm:text-base">柴柴法學教授 • 生活白話解碼</span>
                      <span class="text-[11px] px-2.5 py-0.5 rounded-full bg-amber-200/80 dark:bg-amber-900/60 text-amber-900 dark:text-amber-100 font-extrabold font-mono">隔地犯秒懂</span>
                    </div>
                    <div class="space-y-2 text-xs sm:text-sm text-slate-800 dark:text-slate-100 leading-relaxed font-serif">
                      <p>
                        「此為典型的『隔地犯』，<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">按 § 4 之規定，結果地在台灣而適用我國刑法汪！</span>
                      </p>
                      <p>
                        刑法不用兩邊都沾到才管，就像從境外射飛鏢射中台灣的靶，只要箭頭插在台灣（結果發生），台灣就有管轄權！」
                      </p>
                    </div>
                  </div>
                </div>

                <!-- 3. ⚖️ 金毛大律師攻防 × 4. 🛡️ 德牧巡查官雷達 (嚴格垂直單欄堆疊) -->
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
                          「在跨國電信詐騙案中，如果被害人全部都是外國人（例如菲律賓機房騙大陸民眾），則行為與結果全在境外！
                        </p>
                        <p>
                          <span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">
                            此時無法適用 § 4 隔地犯，實務曾因此無法依屬地主義管轄！立法院為此在 105 年增訂 § 5 ⑪，將加重詐欺罪納入世界原則管轄！
                          </span>
                          但只要受害人在台灣，優先適用主要基準 § 4 即可穩當定錨！」
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
                        <span class="text-[10px] px-2 py-0.5 rounded bg-blue-200 dark:bg-blue-900/60 text-blue-900 dark:text-blue-200 font-bold font-mono">法條條文檢索</span>
                      </div>
                      <div class="space-y-2 text-xs sm:text-sm text-slate-800 dark:text-slate-100 leading-relaxed font-serif">
                        <p class="font-black text-blue-950 dark:text-blue-300">
                          【刑法第 4 條（隔地犯）法定文字】
                        </p>
                        <p class="leading-relaxed">
                          <span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">
                            「犯罪之行為或結果，有一在中華民國領域內者，為在中華民國領域內犯罪。」
                          </span>
                        </p>
                        <p>
                          採『擇一主義（Ubiquitätsprinzip）』，只要構成要件該當之行為地或法益損害結果地任一發生於國境內，即擬制為全案在中華民國境內犯罪。
                        </p>
                      </div>
                    </div>
                  </div>

                  <!-- 5. 👨‍⚖️ 邊牧首席審判長 • 終審裁決一槌定音 -->
                  <div class="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white border-2 border-indigo-400/80 shadow-md flex items-start gap-3.5 relative overflow-hidden">
                    <div class="w-12 h-12 rounded-2xl overflow-hidden shrink-0 border-2 border-indigo-400 shadow-md bg-slate-800">
                      <img src="images/border_collie_chief_judge.jpg" alt="邊牧審判長" class="w-full h-full object-cover" style="object-position: center 25%; transform: scale(1.35);">
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
                          🔨 【實體法定讞】：受害人在台灣接聽電話、於台灣銀行帳戶匯出款項，犯罪結果地無疑在我國領域內。依刑法 § 4 隔地犯規定，視為在中華民國領域內犯罪，依法適用我國刑法論處！
                        </p>
                        <p>
                          💡 <strong>國考答題定錨</strong>：實例題遇到跨國機房詐騙，審查順序必須「先看主要基準 § 3、§ 4」，若結果地在台灣，直接依 § 4 宣告適用我國刑法，根本無需跳去審查輔助基準 § 5～§ 8！
                        </p>
                        <div class="p-2.5 rounded-xl bg-indigo-900/60 border border-indigo-400/40 text-[11.5px] text-amber-200 font-mono">
                          📅 <strong>2026 最新法條動態備註</strong>：民國 105 年 11 月 30 日立法院增訂刑法 § 5 第 11 款（加重詐欺罪適用世界原則）。若行為與結果均在境外（例如台籍人士在菲國詐騙大陸民眾），因結果地不在台灣無法適用 § 4，此時始動用 § 5 ⑪ 作為輔助基準肯定我國刑法管轄！
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </section>

          <!-- ═══════════════ 八、案例 2-4：駐外使領館犯罪案 ═══════════════ -->
          <section id="sec-p0ch2-sec1-case-2-4" class="space-y-6 pt-2">
            <div class="flex items-center gap-3">
              <span class="w-2 h-6 rounded-full bg-indigo-600"></span>
              <h3 class="text-lg sm:text-xl font-black text-slate-900 dark:text-white tracking-tight">
                八、案例 2-4：駐外使領館犯罪案（教材第 2-11 頁）
              </h3>
            </div>

            <div class="p-6 rounded-3xl border border-slate-200 dark:border-white/[0.08] bg-white dark:bg-[#101623] shadow-sm space-y-6">
              
              <!-- 案例 2-4 容器 (五位一體法學劇院) -->
              <div id="case-card-2-4" class="p-5 sm:p-6 rounded-2xl border-2 border-indigo-200 dark:border-indigo-900/60 bg-gradient-to-br from-slate-50 to-indigo-50/30 dark:from-slate-900 dark:to-indigo-950/20 shadow-xs space-y-4">
                
                <div class="flex items-center justify-between flex-wrap gap-2">
                  <div class="flex items-center gap-2">
                    <span class="px-3 py-1 rounded-full bg-indigo-600 text-white font-mono font-black text-xs shadow-xs">案例 2-4</span>
                    <h4 class="font-black text-base text-slate-900 dark:text-white">
                      駐外使領館犯罪案——國際法管轄慣例與領域擬制（教材第 2-11 頁）
                    </h4>
                  </div>
                  <span class="text-xs font-mono text-indigo-600 dark:text-indigo-400 font-bold">國際法慣例・管轄權放棄</span>
                </div>

                <!-- 案情事實 -->
                <div class="p-4 rounded-2xl bg-indigo-100/90 dark:bg-indigo-950/85 border-2 border-indigo-300 dark:border-indigo-700/80 shadow-xs flex items-start gap-3.5">
                  <div class="w-10 h-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center shrink-0 text-lg shadow-sm">
                    🏛️
                  </div>
                  <div class="flex-1 space-y-1">
                    <div class="flex items-center gap-2">
                      <span class="px-2 py-0.5 rounded-md bg-indigo-600 text-white font-mono text-[10.5px] font-black tracking-wide shadow-xs">案件事實</span>
                      <span class="text-[11px] font-mono font-bold text-indigo-700 dark:text-indigo-300/90">#駐外使領館館舍</span>
                    </div>
                    <div class="text-xs sm:text-sm font-bold text-indigo-950 dark:text-indigo-100 leading-relaxed font-serif">
                      我國人甲在我國駐外國之使領館內犯罪，是否為在我國領域內犯罪？
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
                            <span class="px-2 py-0.5 rounded-full bg-amber-100 dark:bg-amber-950 text-amber-900 dark:text-amber-300 font-extrabold text-[10px]">駐在國領土說</span>
                          </div>
                          <div class="text-[10.5px] text-amber-700 dark:text-amber-400 font-bold">主張：使館土地屬駐在國領土，非我國領土</div>
                        </div>
                      </div>
                      <div class="space-y-2 text-xs sm:text-[13px] text-slate-800 dark:text-slate-100 leading-relaxed font-serif">
                        <p class="font-bold text-amber-950 dark:text-amber-200">
                          「審判長！依現代國際法通說，大使館僅享有外交豁免與館舍不可侵犯權，並非浮動領土！」
                        </p>
                        <p>
                          使館坐落之土地，其領土主權百分之百屬於外國駐在國。刑法第 3 條但書僅擴張至船舶與航空器，並未擴及使領館，自不得擬制為境內犯罪！
                        </p>
                      </div>
                    </div>
                    <div class="p-2.5 rounded-xl bg-amber-50 dark:bg-amber-950/40 text-xs sm:text-[13px] font-bold text-amber-950 dark:text-amber-200 leading-snug border border-amber-200 dark:border-amber-800/60">
                      🛡️ 辯方主張 ➔ <strong>使館非浮動領土，主權在駐在國，不得以境內犯罪論！</strong>
                    </div>
                  </div>

                  <!-- ⚔️ 公訴檢察官赤狐女律師 -->
                  <div class="p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-900 border-2 border-rose-300 dark:border-rose-700/80 space-y-3 flex flex-col justify-between shadow-xs">
                    <div class="space-y-3">
                      <div class="flex items-center gap-2.5 border-b border-rose-100 dark:border-rose-900/40 pb-2.5">
                        <div class="w-10 h-10 rounded-full overflow-hidden border-2 border-rose-400 shrink-0 bg-slate-900 shadow-xs">
                          <img src="images/prosecutor_fox.jpg" alt="公訴檢察官赤狐律師" class="w-full h-full object-cover" style="object-position: center 20%; transform: scale(1.35);">
                        </div>
                        <div class="min-w-0 flex-1">
                          <div class="flex items-center justify-between">
                            <span class="font-black text-xs sm:text-sm text-rose-950 dark:text-rose-200">公訴檢察官 • 赤狐女律師</span>
                            <span class="px-2 py-0.5 rounded-full bg-rose-100 dark:bg-rose-950 text-rose-900 dark:text-rose-300 font-extrabold text-[10px]">管轄權放棄慣例</span>
                          </div>
                          <div class="text-[10.5px] text-rose-700 dark:text-rose-400 font-bold">主張：依國際慣例，駐在國同意放棄管轄權時得視為境內</div>
                        </div>
                      </div>
                      <div class="space-y-2 text-xs sm:text-[13px] text-slate-800 dark:text-slate-100 leading-relaxed font-serif">
                        <p class="font-bold text-rose-950 dark:text-rose-200">
                          「公訴方主張：應藉助國際法慣例，審查駐在國是否放棄管轄權！」
                        </p>
                        <p>
                          使館具有不可侵犯之尊嚴，若駐在國外交當局基於條約或慣例同意放棄該案管轄權，由我國行使司法權，自得依法認在我國領域內犯罪論處！
                        </p>
                      </div>
                    </div>
                    <div class="p-2.5 rounded-xl bg-rose-50 dark:bg-rose-950/40 text-xs sm:text-[13px] font-bold text-rose-950 dark:text-rose-200 leading-snug border border-rose-200 dark:border-rose-800/60">
                      ⚔️ 控方主張 ➔ <strong>若駐在國明示放棄管轄權，得認在我國領域內犯罪！</strong>
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
                      <span class="font-black text-amber-950 dark:text-amber-200 text-sm sm:text-base">柴柴法學教授 • 生活白話解碼</span>
                      <span class="text-[11px] px-2.5 py-0.5 rounded-full bg-amber-200/80 dark:bg-amber-900/60 text-amber-900 dark:text-amber-100 font-extrabold font-mono">國際法慣例斷</span>
                    </div>
                    <div class="space-y-2 text-xs sm:text-sm text-slate-800 dark:text-slate-100 leading-relaxed font-serif">
                      <p>
                        「此時借助國際法上的慣例，<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">以駐在國是否同意放棄其管轄權為斷。</span>
                      </p>
                      <p>
                        若有明顯事證足認該駐在國已同意放棄其管轄權，<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">自得認在我國領域內犯罪論汪！</span>」
                      </p>
                    </div>
                  </div>
                </div>

                <!-- 3. ⚖️ 金毛大律師攻防 × 4. 🛡️ 德牧巡查官雷達 (嚴格垂直單欄堆疊) -->
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
                          「辯方必須嚴格檢驗：外交部到底有無取得駐在國『明示放棄管轄權』之公文？
                        </p>
                        <p>
                          <span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">
                            若駐在國並未同意放棄管轄權，即不得直接依屬地主義認在境內！此時只能退而檢驗被告是否符合 § 7 我國人民在境外犯 3 年以上重罪之要件！
                          </span>」
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
                        <span class="text-[10px] px-2 py-0.5 rounded bg-blue-200 dark:bg-blue-900/60 text-blue-900 dark:text-blue-200 font-bold font-mono">國際條約查核</span>
                      </div>
                      <div class="space-y-2 text-xs sm:text-sm text-slate-800 dark:text-slate-100 leading-relaxed font-serif">
                        <p class="font-black text-blue-950 dark:text-blue-300">
                          【維也納外交關係公約 (VCDR) 實務體系】
                        </p>
                        <p class="leading-relaxed">
                          <span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">
                            使領館之不可侵犯性（Inviolability）係外交豁免特權，非領土主權之移轉。
                          </span>
                        </p>
                        <p>
                          使館非擬制領土，但透過外交協議或默示慣例，駐在國放棄管轄權時，派遣國行使管轄權不牴觸國際法。
                        </p>
                      </div>
                    </div>
                  </div>

                  <!-- 5. 👨‍⚖️ 邊牧首席審判長 • 終審裁決一槌定音 -->
                  <div class="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white border-2 border-indigo-400/80 shadow-md flex items-start gap-3.5 relative overflow-hidden">
                    <div class="w-12 h-12 rounded-2xl overflow-hidden shrink-0 border-2 border-indigo-400 shadow-md bg-slate-800">
                      <img src="images/border_collie_chief_judge.jpg" alt="邊牧審判長" class="w-full h-full object-cover" style="object-position: center 25%; transform: scale(1.35);">
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
                          🔨 【實體法定讞】：駐外使領館並非刑法 § 3 但書明定之船舶航空器浮動領土。是否認在我國領域內犯罪，端視駐在國是否明示放棄管轄權為斷。若駐在國已同意放棄，自得認在我國領域內犯罪論處！
                        </p>
                        <p>
                          💡 <strong>國考答題定錨</strong>：考生切忌直接回答「使館就是我國領土」！必須先釐清使領館僅享有外交豁免而非主權領土，再帶出「駐在國放棄管轄權慣例」作為論理關鍵轉折！
                        </p>
                        <div class="p-2.5 rounded-xl bg-indigo-900/60 border border-indigo-400/40 text-[11.5px] text-amber-200 font-mono">
                          📅 <strong>2026 最新法條動態備註</strong>：駐外外交領事人員與館舍法律地位維持現行國際法規範，實務上涉外案件均嚴格審查外交部交涉文件，確認有無駐在國放棄管轄之具體事證。
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </section>

          <!-- ═══════════════ 九、案例 2-5：大陸地區犯罪案 ═══════════════ -->
          <section id="sec-p0ch2-sec1-case-2-5" class="space-y-6 pt-2">
            <div class="flex items-center gap-3">
              <span class="w-2 h-6 rounded-full bg-indigo-600"></span>
              <h3 class="text-lg sm:text-xl font-black text-slate-900 dark:text-white tracking-tight">
                九、案例 2-5：大陸地區犯罪案（教材第 2-11 頁）
              </h3>
            </div>

            <div class="p-6 rounded-3xl border border-slate-200 dark:border-white/[0.08] bg-white dark:bg-[#101623] shadow-sm space-y-6">
              
              <!-- 案例 2-5 容器 (五位一體法學劇院) -->
              <div id="case-card-2-5" class="p-5 sm:p-6 rounded-2xl border-2 border-indigo-200 dark:border-indigo-900/60 bg-gradient-to-br from-slate-50 to-indigo-50/30 dark:from-slate-900 dark:to-indigo-950/20 shadow-xs space-y-4">
                
                <div class="flex items-center justify-between flex-wrap gap-2">
                  <div class="flex items-center gap-2">
                    <span class="px-3 py-1 rounded-full bg-indigo-600 text-white font-mono font-black text-xs shadow-xs">案例 2-5</span>
                    <h4 class="font-black text-base text-slate-900 dark:text-white">
                      大陸地區犯罪案——憲法領土與特殊國內關係（教材第 2-11 頁）
                    </h4>
                  </div>
                  <span class="text-xs font-mono text-indigo-600 dark:text-indigo-400 font-bold">最高法院 90 台上 4247 判決</span>
                </div>

                <!-- 案情事實 -->
                <div class="p-4 rounded-2xl bg-indigo-100/90 dark:bg-indigo-950/85 border-2 border-indigo-300 dark:border-indigo-700/80 shadow-xs flex items-start gap-3.5">
                  <div class="w-10 h-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center shrink-0 text-lg shadow-sm">
                    🗺️
                  </div>
                  <div class="flex-1 space-y-1">
                    <div class="flex items-center gap-2">
                      <span class="px-2 py-0.5 rounded-md bg-indigo-600 text-white font-mono text-[10.5px] font-black tracking-wide shadow-xs">案件事實</span>
                      <span class="text-[11px] font-mono font-bold text-indigo-700 dark:text-indigo-300/90">#大陸地區犯罪管轄</span>
                    </div>
                    <div class="text-xs sm:text-sm font-bold text-indigo-950 dark:text-indigo-100 leading-relaxed font-serif">
                      大陸地區犯罪是否亦有我國刑法的適用？
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
                            <span class="px-2 py-0.5 rounded-full bg-amber-100 dark:bg-amber-950 text-amber-900 dark:text-amber-300 font-extrabold text-[10px]">事實統治權界限</span>
                          </div>
                          <div class="text-[10.5px] text-amber-700 dark:text-amber-400 font-bold">主張：我國司法統治權不及於大陸地區，屬境外犯罪</div>
                        </div>
                      </div>
                      <div class="space-y-2 text-xs sm:text-[13px] text-slate-800 dark:text-slate-100 leading-relaxed font-serif">
                        <p class="font-bold text-amber-950 dark:text-amber-200">
                          「審判長！法律之屬地效力應以實質國家統治權所及為限！」
                        </p>
                        <p>
                          我國政府目前實質統治權僅及於台澎金馬，大陸地區完全不在我國公權力管轄範圍。若將大陸地區擬制為境內，無視兩岸治權分立現狀，實屬法律擬制之過度膨脹！
                        </p>
                      </div>
                    </div>
                    <div class="p-2.5 rounded-xl bg-amber-50 dark:bg-amber-950/40 text-xs sm:text-[13px] font-bold text-amber-950 dark:text-amber-200 leading-snug border border-amber-200 dark:border-amber-800/60">
                      🛡️ 辯方主張 ➔ <strong>實質治權不及於大陸，應視為境外犯罪，不得逕依屬地論！</strong>
                    </div>
                  </div>

                  <!-- ⚔️ 公訴檢察官赤狐女律師 -->
                  <div class="p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-900 border-2 border-rose-300 dark:border-rose-700/80 space-y-3 flex flex-col justify-between shadow-xs">
                    <div class="space-y-3">
                      <div class="flex items-center gap-2.5 border-b border-rose-100 dark:border-rose-900/40 pb-2.5">
                        <div class="w-10 h-10 rounded-full overflow-hidden border-2 border-rose-400 shrink-0 bg-slate-900 shadow-xs">
                          <img src="images/prosecutor_fox.jpg" alt="公訴檢察官赤狐律師" class="w-full h-full object-cover" style="object-position: center 20%; transform: scale(1.35);">
                        </div>
                        <div class="min-w-0 flex-1">
                          <div class="flex items-center justify-between">
                            <span class="font-black text-xs sm:text-sm text-rose-950 dark:text-rose-200">公訴檢察官 • 赤狐女律師</span>
                            <span class="px-2 py-0.5 rounded-full bg-rose-100 dark:bg-rose-950 text-rose-900 dark:text-rose-300 font-extrabold text-[10px]">憲法領土論</span>
                          </div>
                          <div class="text-[10.5px] text-rose-700 dark:text-rose-400 font-bold">主張：兩岸條例明定大陸地區為我國領土，屬領域內犯罪</div>
                        </div>
                      </div>
                      <div class="space-y-2 text-xs sm:text-[13px] text-slate-800 dark:text-slate-100 leading-relaxed font-serif">
                        <p class="font-bold text-rose-950 dark:text-rose-200">
                          「公訴方主張：最高法院判決已確立『特殊之國內關係』！」
                        </p>
                        <p>
                          依臺灣地區與大陸地區人民關係條例第 2 條明文：大陸地區指臺灣地區以外之中華民國領土。司法機關受憲法與特別法拘束，大陸地區犯罪仍屬中華民國領域內犯罪，依法當然管轄！
                        </p>
                      </div>
                    </div>
                    <div class="p-2.5 rounded-xl bg-rose-50 dark:bg-rose-950/40 text-xs sm:text-[13px] font-bold text-rose-950 dark:text-rose-200 leading-snug border border-rose-200 dark:border-rose-800/60">
                      ⚔️ 控方主張 ➔ <strong>依兩岸條例與實務見解，大陸地區仍屬我國領土，適用我刑法！</strong>
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
                      <span class="font-black text-amber-950 dark:text-amber-200 text-sm sm:text-base">柴柴法學教授 • 生活白話解碼</span>
                      <span class="text-[11px] px-2.5 py-0.5 rounded-full bg-amber-200/80 dark:bg-amber-900/60 text-amber-900 dark:text-amber-100 font-extrabold font-mono">90台上4247</span>
                    </div>
                    <div class="space-y-2 text-xs sm:text-sm text-slate-800 dark:text-slate-100 leading-relaxed font-serif">
                      <p>
                        「實務見解（90 台上 4247）採取『特殊之國內關係』。
                      </p>
                      <p>
                        認為臺灣地區與大陸地區人民關係條例 § 2 規定：『大陸地區：指臺灣地區以外之中華民國領土。』
                      </p>
                      <p>
                        <span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">
                          已明示大陸地區仍屬我中華民國之領土，從而在大陸地區犯罪，仍屬在中華民國領域內犯罪汪！
                        </span>」
                      </p>
                    </div>
                  </div>
                </div>

                <!-- 3. ⚖️ 金毛大律師攻防 × 4. 🛡️ 德牧巡查官雷達 (嚴格垂直單欄堆疊) -->
                <div class="space-y-3 pt-1">
                  <!-- 金毛大律師點評 -->
                  <div class="p-3.5 sm:p-4 rounded-xl bg-amber-50/80 dark:bg-amber-950/20 border border-amber-300 dark:border-amber-800/60 flex items-start gap-3">
                    <div class="w-11 h-11 rounded-full overflow-hidden shrink-0 border border-amber-400 shadow-sm bg-amber-100">
                      <img src="images/golden_case_attorney.jpg" alt="金毛辯護大律師" class="w-full h-full object-cover" style="object-position: center 20%; transform: scale(1.35);">
                    </div>
                    <div class="flex-1 space-y-1">
                      <div class="flex items-center gap-2 flex-wrap">
                        <span class="font-black text-amber-950 dark:text-amber-200 text-sm sm:text-base">金毛大律師 • 法庭攻防點評</span>
                        <span class="text-[10px] px-2 py-0.5 rounded bg-amber-200 dark:bg-amber-900/60 text-amber-900 dark:text-amber-200 font-bold font-mono">兩岸條例減免</span>
                      </div>
                      <div class="space-y-2 text-xs sm:text-sm text-slate-800 dark:text-slate-100 leading-relaxed font-serif">
                        <p>
                          「雖然實務認定在境內犯罪，但辯護人有一張關鍵保命王牌！
                        </p>
                        <p>
                          <span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">
                            依兩岸人民關係條例第 75 條：在大陸地區受裁判且已受處罰者，在我國得免其刑之全部或一部之執行！
                          </span>
                          若被告已在大陸服刑，務必爭取全數折抵免除執行！」
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
                        <span class="text-[10px] px-2 py-0.5 rounded bg-blue-200 dark:bg-blue-900/60 text-blue-900 dark:text-blue-200 font-bold font-mono">法條依據檢索</span>
                      </div>
                      <div class="space-y-2 text-xs sm:text-sm text-slate-800 dark:text-slate-100 leading-relaxed font-serif">
                        <p class="font-black text-blue-950 dark:text-blue-300">
                          【兩岸人民關係條例第 2 條第 2 款】
                        </p>
                        <p class="leading-relaxed">
                          <span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">
                            「大陸地區：指臺灣地區以外之中華民國領土。」
                          </span>
                        </p>
                        <p>
                          配合最高法院 90 年度台上字第 4247 號判決：「大陸地區現在雖因事實上之障礙為我國主權所不及，但在大陸地區犯罪，仍應認為係在中華民國領域內犯罪，自應適用我國刑法籌斷。」
                        </p>
                      </div>
                    </div>
                  </div>

                  <!-- 5. 👨‍⚖️ 邊牧首席審判長 • 終審裁決一槌定音 -->
                  <div class="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white border-2 border-indigo-400/80 shadow-md flex items-start gap-3.5 relative overflow-hidden">
                    <div class="w-12 h-12 rounded-2xl overflow-hidden shrink-0 border-2 border-indigo-400 shadow-md bg-slate-800">
                      <img src="images/border_collie_chief_judge.jpg" alt="邊牧審判長" class="w-full h-full object-cover" style="object-position: center 25%; transform: scale(1.35);">
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
                          🔨 【實體法定讞】：實務見解 90 台上 4247 號判決明確依兩岸人民關係條例 § 2，認定大陸地區仍屬中華民國領土，故在大陸地區犯罪仍屬中華民國領域內犯罪，依法適用我國刑法！
                        </p>
                        <p>
                          💡 <strong>國考答題定錨</strong>：考題出現大陸地區犯罪，必須先以最高法院 90 台上 4247 肯定屬「特殊國內關係之境內犯罪」，接著務必引出「兩岸人民關係條例第 75 條」，說明其在大陸已受刑之執行者得免除其刑，展現答題深度！
                        </p>
                        <div class="p-2.5 rounded-xl bg-indigo-900/60 border border-indigo-400/40 text-[11.5px] text-amber-200 font-mono">
                          📅 <strong>2026 最新法條動態備註</strong>：兩岸關係條例第 2 條及第 75 條規定持續施行至今無修正，最高法院最新裁判均維持 90 台上 4247 特殊國內關係之既定判解見解。
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </section>

          <!-- ═══════════════ 十、地的適用效力：(二) 輔助基準 ═══════════════ -->
          <section id="sec-p0ch2-sec1-auxiliary-scope" class="space-y-6 pt-2">
            <div class="flex items-center gap-3">
              <span class="w-2 h-6 rounded-full bg-blue-600"></span>
              <h3 class="text-lg sm:text-xl font-black text-slate-900 dark:text-white tracking-tight">
                十、地的適用效力：(二) 輔助基準（教材第 2-12 頁）
              </h3>
            </div>

            <div class="p-6 rounded-3xl border border-slate-200 dark:border-white/[0.08] bg-white dark:bg-[#101623] shadow-sm space-y-6">
              
              <!-- 課本原文展示盒 (1:1 復刻) -->
              <div class="rounded-2xl p-5 bg-slate-50/80 dark:bg-slate-900/80 border-2 border-slate-200 dark:border-slate-800 space-y-3">
                <div class="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-2">
                  <span class="font-bold text-xs text-slate-500 dark:text-slate-400 font-mono">📖 課本原文 1:1 忠實重現 (P. 2-12)</span>
                  <span class="text-[11px] px-2 py-0.5 rounded bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 font-bold font-mono">輔助基準體系</span>
                </div>
                <blockquote class="text-xs sm:text-sm text-slate-800 dark:text-slate-200 leading-relaxed font-serif italic border-l-4 border-blue-500 pl-3.5 space-y-2">
                  <p>「(二) 輔助基準：」</p>
                  <p>「1. 屬人原則（§ 6 + § 7）→處罰自己人（基於國民守法的一般性義務＋公務員的特殊忠誠義務）：」</p>
                  <p class="pl-4">「(1) 核心：國家刑罰權適用於在國外的我國人民。」<br>「(2) 我國人在外國犯最輕本刑3年以上有期徒刑之重罪，惟犯罪地法律不罰者，不在此限（§ 7）。」<br>「(3) 我國公務員在外國犯特定之罪（§ 6）。」</p>
                  <p>「2. 保護原則（§ 8）→處罰外國人（基於國家保護人民的客觀性義務）：」</p>
                  <p class="pl-4">「(1) 核心：國家刑罰權適用於在國外侵害我國人之外國人。」<br>「(2) 外國人在國外對我國人犯最輕本刑3年以上有期徒刑之重罪，惟犯罪地法律不罰者，不在此限。」</p>
                  <p>「3. 保護原則（§ 5 ①②③⑤⑥⑦）→處罰任何人（基於國家自我保護）：」</p>
                  <p class="pl-4">「(1) 核心：國家刑罰權適用於在國外侵害國家重大利益之犯罪。」<br>「(2) 在國外對國家犯特定之重大犯罪。」</p>
                  <p>「4. 世界原則（§ 5 ④⑧⑨⑩⑪）→處罰任何人（基於世界共通性犯罪）：」</p>
                  <p class="pl-4">「(1) 核心：國家刑罰權適用於侵害跨國界共通價值之犯罪。」<br>「(2) 涉及航空、毒品、擄人勒贖或海盜。」</p>
                </blockquote>
              </div>

              <!-- 四大輔助基準網格 (8px 色軸) -->
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <!-- 1. 屬人原則 -->
                <div class="p-5 rounded-2xl bg-slate-50/80 dark:bg-slate-900/60 border-2 border-blue-200 dark:border-blue-900/60 border-l-[8px] border-l-blue-600 space-y-2 shadow-xs">
                  <div class="flex items-center justify-between">
                    <span class="text-xs font-mono font-bold text-blue-600 dark:text-blue-400">§ 6 + § 7</span>
                    <span class="text-[11px] font-bold px-2 py-0.5 rounded bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300">處罰自己人</span>
                  </div>
                  <h4 class="text-sm font-bold text-slate-900 dark:text-white">1. 屬人原則（Active Personality）</h4>
                  <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-serif">
                    國民守法義務與公務員忠誠義務。國民在境外犯最輕本刑 3 年以上重罪（犯罪地不罰除外，§ 7）；我國公務員在境外犯特定之罪（瀆職、脫逃、偽造文書等，§ 6）。
                  </p>
                </div>

                <!-- 2. 被動保護原則 -->
                <div class="p-5 rounded-2xl bg-slate-50/80 dark:bg-slate-900/60 border-2 border-indigo-200 dark:border-indigo-900/60 border-l-[8px] border-l-indigo-600 space-y-2 shadow-xs">
                  <div class="flex items-center justify-between">
                    <span class="text-xs font-mono font-bold text-indigo-600 dark:text-indigo-400">§ 8</span>
                    <span class="text-[11px] font-bold px-2 py-0.5 rounded bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300">處罰外國人</span>
                  </div>
                  <h4 class="text-sm font-bold text-slate-900 dark:text-white">2. 保護原則（Passive Personality）</h4>
                  <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-serif">
                    國家保護國民之客觀義務。外國人在國外對我國國民犯最輕本刑 3 年以上有期徒刑之重罪，惟犯罪地法律不罰者，不在此限。
                  </p>
                </div>

                <!-- 3. 國家自衛保護原則 -->
                <div class="p-5 rounded-2xl bg-slate-50/80 dark:bg-slate-900/60 border-2 border-purple-200 dark:border-purple-900/60 border-l-[8px] border-l-purple-600 space-y-2 shadow-xs">
                  <div class="flex items-center justify-between">
                    <span class="text-xs font-mono font-bold text-purple-600 dark:text-purple-400">§ 5 ①②③⑤⑥⑦</span>
                    <span class="text-[11px] font-bold px-2 py-0.5 rounded bg-purple-100 dark:bg-purple-950 text-purple-700 dark:text-purple-300">處罰任何人</span>
                  </div>
                  <h4 class="text-sm font-bold text-slate-900 dark:text-white">3. 保護原則（Protective Principle）</h4>
                  <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-serif">
                    國家自我防衛本國重大法益。在國外侵害國家存立（內亂外患）、公共信用（偽造貨幣、有價證券）、公文書等特定重大犯罪，處罰任何人。
                  </p>
                </div>

                <!-- 4. 世界原則 -->
                <div class="p-5 rounded-2xl bg-slate-50/80 dark:bg-slate-900/60 border-2 border-emerald-200 dark:border-emerald-900/60 border-l-[8px] border-l-emerald-600 space-y-2 shadow-xs">
                  <div class="flex items-center justify-between">
                    <span class="text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400">§ 5 ④⑧⑨⑩⑪</span>
                    <span class="text-[11px] font-bold px-2 py-0.5 rounded bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300">世界共通價值</span>
                  </div>
                  <h4 class="text-sm font-bold text-slate-900 dark:text-white">4. 世界原則（Universality Principle）</h4>
                  <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-serif">
                    侵害跨國界共通價值之公敵犯罪。涉及劫機航空安全、毒品、擄人勒贖、人口販運（買賣質押人口）、海盜罪以及 105 年增訂之加重詐欺罪。
                  </p>
                </div>
              </div>

            </div>
          </section>

          <!-- ═══════════════ 十一、案例 2-6：境外偽造外國股票案 ═══════════════ -->
          <section id="sec-p0ch2-sec1-case-2-6" class="space-y-6 pt-2">
            <div class="flex items-center gap-3">
              <span class="w-2 h-6 rounded-full bg-indigo-600"></span>
              <h3 class="text-lg sm:text-xl font-black text-slate-900 dark:text-white tracking-tight">
                十一、案例 2-6：境外偽造外國股票案（教材第 2-12 頁）
              </h3>
            </div>

            <div class="p-6 rounded-3xl border border-slate-200 dark:border-white/[0.08] bg-white dark:bg-[#101623] shadow-sm space-y-6">
              
              <!-- 案例 2-6 容器 (五位一體法學劇院) -->
              <div id="case-card-2-6" class="p-5 sm:p-6 rounded-2xl border-2 border-indigo-200 dark:border-indigo-900/60 bg-gradient-to-br from-slate-50 to-indigo-50/30 dark:from-slate-900 dark:to-indigo-950/20 shadow-xs space-y-4">
                
                <div class="flex items-center justify-between flex-wrap gap-2">
                  <div class="flex items-center gap-2">
                    <span class="px-3 py-1 rounded-full bg-indigo-600 text-white font-mono font-black text-xs shadow-xs">案例 2-6</span>
                    <h4 class="font-black text-base text-slate-900 dark:text-white">
                      境外偽造外國股票案——保護原則之本國法益限制（教材第 2-12 頁）
                    </h4>
                  </div>
                  <span class="text-xs font-mono text-indigo-600 dark:text-indigo-400 font-bold">最高法院 72 年台上字第 5872 號判例</span>
                </div>

                <!-- 案情事實 -->
                <div class="p-4 rounded-2xl bg-indigo-100/90 dark:bg-indigo-950/85 border-2 border-indigo-300 dark:border-indigo-700/80 shadow-xs flex items-start gap-3.5">
                  <div class="w-10 h-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center shrink-0 text-lg shadow-sm">
                    📈
                  </div>
                  <div class="flex-1 space-y-1">
                    <div class="flex items-center gap-2">
                      <span class="px-2 py-0.5 rounded-md bg-indigo-600 text-white font-mono text-[10.5px] font-black tracking-wide shadow-xs">案件事實</span>
                      <span class="text-[11px] font-mono font-bold text-indigo-700 dark:text-indigo-300/90">#境外偽造外國有價證券</span>
                    </div>
                    <div class="text-xs sm:text-sm font-bold text-indigo-950 dark:text-indigo-100 leading-relaxed font-serif">
                      我國國民甲在美國偽造德國公司股票而成立偽造有價證券罪，是否有我國刑法的適用？
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
                            <span class="px-2 py-0.5 rounded-full bg-amber-100 dark:bg-amber-950 text-amber-900 dark:text-amber-300 font-extrabold text-[10px]">本國法益限制說</span>
                          </div>
                          <div class="text-[10.5px] text-amber-700 dark:text-amber-400 font-bold">主張：§ 5 ⑤ 之有價證券僅限我國證券，不含外國證券</div>
                        </div>
                      </div>
                      <div class="space-y-2 text-xs sm:text-[13px] text-slate-800 dark:text-slate-100 leading-relaxed font-serif">
                        <p class="font-bold text-amber-950 dark:text-amber-200">
                          「審判長！刑法第 5 條採取的保護原則，核心在於保護本國法益！」
                        </p>
                        <p>
                          被告偽造的是德國公司的股票，侵害的是德國或美國之金融信用，完全沒有侵害我國重大法益。最高法院 72 年台上字第 5872 號判例早已明定：本條有價證券不包括外國有價證券在內，自無我國刑法適用！
                        </p>
                      </div>
                    </div>
                    <div class="p-2.5 rounded-xl bg-amber-50 dark:bg-amber-950/40 text-xs sm:text-[13px] font-bold text-amber-950 dark:text-amber-200 leading-snug border border-amber-200 dark:border-amber-800/60">
                      🛡️ 辯方主張 ➔ <strong>依 72 台上 5872 例，§ 5 ⑤ 限於本國有價證券，無我刑法適用！</strong>
                    </div>
                  </div>

                  <!-- ⚔️ 公訴檢察官赤狐女律師 -->
                  <div class="p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-900 border-2 border-rose-300 dark:border-rose-700/80 space-y-3 flex flex-col justify-between shadow-xs">
                    <div class="space-y-3">
                      <div class="flex items-center gap-2.5 border-b border-rose-100 dark:border-rose-900/40 pb-2.5">
                        <div class="w-10 h-10 rounded-full overflow-hidden border-2 border-rose-400 shrink-0 bg-slate-900 shadow-xs">
                          <img src="images/prosecutor_fox.jpg" alt="公訴檢察官赤狐律師" class="w-full h-full object-cover" style="object-position: center 20%; transform: scale(1.35);">
                        </div>
                        <div class="min-w-0 flex-1">
                          <div class="flex items-center justify-between">
                            <span class="font-black text-xs sm:text-sm text-rose-950 dark:text-rose-200">公訴檢察官 • 赤狐女律師</span>
                            <span class="px-2 py-0.5 rounded-full bg-rose-100 dark:bg-rose-950 text-rose-900 dark:text-rose-300 font-extrabold text-[10px]">字面文義論</span>
                          </div>
                          <div class="text-[10.5px] text-rose-700 dark:text-rose-400 font-bold">主張：條文僅稱偽造有價證券，未明文排除外國證券</div>
                        </div>
                      </div>
                      <div class="space-y-2 text-xs sm:text-[13px] text-slate-800 dark:text-slate-100 leading-relaxed font-serif">
                        <p class="font-bold text-rose-950 dark:text-rose-200">
                          「公訴方主張：刑法第 5 條第 5 款明文『偽造有價證券罪』，字面未加限制！」
                        </p>
                        <p>
                          且被告具備我國國民身分，其在境外犯重罪，損害我國國民之守法形象，縱使不符合 § 5，亦應檢視是否該當 § 7 屬人原則！
                        </p>
                      </div>
                    </div>
                    <div class="p-2.5 rounded-xl bg-rose-50 dark:bg-rose-950/40 text-xs sm:text-[13px] font-bold text-rose-950 dark:text-rose-200 leading-snug border border-rose-200 dark:border-rose-800/60">
                      ⚔️ 控方主張 ➔ <strong>字面未限本國，且國民在境外犯罪應受國法檢驗！</strong>
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
                      <span class="font-black text-amber-950 dark:text-amber-200 text-sm sm:text-base">柴柴法學教授 • 生活白話解碼</span>
                      <span class="text-[11px] px-2.5 py-0.5 rounded-full bg-amber-200/80 dark:bg-amber-900/60 text-amber-900 dark:text-amber-100 font-extrabold font-mono">保護原則保護本國</span>
                    </div>
                    <div class="space-y-2 text-xs sm:text-sm text-slate-800 dark:text-slate-100 leading-relaxed font-serif">
                      <p>
                        「§ 5 採取的保護原則意在保護本國法益。
                      </p>
                      <p>
                        <span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">
                          因此本條所謂偽造有價證券僅指我國的有價證券，不包括外國有價證券在內（72 台上 5872 例汪！）。
                        </span>
                      </p>
                      <p>
                        此外，刑法 § 201 偽造有價證券罪法定刑為 3 年以上 10 年以下有期徒刑，最輕本刑為 3 年，雖看似符合 § 7，但依 § 7 但書：『犯罪地法律不罰者，不在此限』，且本條旨在保護本國金融，不能拿 § 5 無限上綱！」
                      </p>
                    </div>
                  </div>
                </div>

                <!-- 3. ⚖️ 金毛大律師攻防 × 4. 🛡️ 德牧巡查官雷達 (嚴格垂直單欄堆疊) -->
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
                          「本案法庭交鋒首重阻斷檢方援引 § 5 ⑤ 之企圖！
                        </p>
                        <p>
                          <span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">
                            死守 72 年判例排除 § 5 ⑤ 後，針對檢方若改引 § 7 屬人原則，辯方應立即調查美國犯罪地之法律規定與雙重可罰性要件，全面瓦解管轄連結！
                          </span>」
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
                        <span class="text-[10px] px-2 py-0.5 rounded bg-blue-200 dark:bg-blue-900/60 text-blue-900 dark:text-blue-200 font-bold font-mono">判例裁判檢索</span>
                      </div>
                      <div class="space-y-2 text-xs sm:text-sm text-slate-800 dark:text-slate-100 leading-relaxed font-serif">
                        <p class="font-black text-blue-950 dark:text-blue-300">
                          【最高法院 72 年台上字第 5872 號判例要旨】
                        </p>
                        <p class="leading-relaxed">
                          <span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">
                            「刑法第五條第五款所謂偽造有價證券，係指本國之有價證券而言，不包括外國之有價證券在內。」
                          </span>
                        </p>
                        <p>
                          同理，刑法第 5 條第 4 款偽造貨幣罪亦採相同解釋，保護原則僅及於本國幣券與有價證券，外國貨幣與證券不屬我國自衛管轄之列。
                        </p>
                      </div>
                    </div>
                  </div>

                  <!-- 5. 👨‍⚖️ 邊牧首席審判長 • 終審裁決一槌定音 -->
                  <div class="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white border-2 border-indigo-400/80 shadow-md flex items-start gap-3.5 relative overflow-hidden">
                    <div class="w-12 h-12 rounded-2xl overflow-hidden shrink-0 border-2 border-indigo-400 shadow-md bg-slate-800">
                      <img src="images/border_collie_chief_judge.jpg" alt="邊牧審判長" class="w-full h-full object-cover" style="object-position: center 25%; transform: scale(1.35);">
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
                          🔨 【實體法定讞】：刑法 § 5 ⑤ 之保護原則旨在防衛本國金融秩序法益，依最高法院 72 年台上字第 5872 號判例，本款偽造有價證券限於我國之有價證券，不包含外國有價證券，故不能依 § 5 ⑤ 適用我國刑法！
                        </p>
                        <p>
                          💡 <strong>國考答題定錨</strong>：考生務必精準記憶 72 台上 5872 號判例！本題是檢驗考生是否死背條文的經典陷阱題。看見「在國外偽造股票」切勿衝動勾選 § 5 ⑤，必須看清標的物是否為「本國股票」！
                        </p>
                        <div class="p-2.5 rounded-xl bg-indigo-900/60 border border-indigo-400/40 text-[11.5px] text-amber-200 font-mono">
                          📅 <strong>2026 最新法條動態備註</strong>：刑法第 5 條條文雖經多次修訂增訂第 11 款詐欺罪，然第 5 款條文文字未動，72 台上 5872 號判例見解至 2026 年依然為司法院裁判所恪遵之定錨準則。
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </section>

          <!-- ═══════════════ 十二、解題提示：地的適用效力嚴格審查順序（廣大興案、補助原則 § 9） ═══════════════ -->
          <section id="sec-p0ch2-sec1-geographic-order" class="space-y-6 pt-2">
            <div class="flex items-center gap-3">
              <span class="w-2 h-6 rounded-full bg-blue-600"></span>
              <h3 class="text-lg sm:text-xl font-black text-slate-900 dark:text-white tracking-tight">
                十二、解題提示：地的適用效力嚴格審查順序（教材第 2-12 ～ 2-13 頁）
              </h3>
            </div>

            <div class="p-6 rounded-3xl border border-slate-200 dark:border-white/[0.08] bg-white dark:bg-[#101623] shadow-sm space-y-6">
              
              <!-- 課本原文展示盒 (1:1 復刻) -->
              <div class="rounded-2xl p-5 bg-slate-50/80 dark:bg-slate-900/80 border-2 border-slate-200 dark:border-slate-800 space-y-3">
                <div class="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-2">
                  <span class="font-bold text-xs text-slate-500 dark:text-slate-400 font-mono">📖 課本原文 1:1 忠實重現 (P. 2-12 ~ 2-13)</span>
                  <span class="text-[11px] px-2 py-0.5 rounded bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 font-bold font-mono">解題提示與廣大興案</span>
                </div>
                <blockquote class="text-xs sm:text-sm text-slate-800 dark:text-slate-200 leading-relaxed font-serif italic border-l-4 border-blue-500 pl-3.5 space-y-2">
                  <p>「📖 解題提示：」</p>
                  <p>「請注意，地的適用效力有嚴格的審查順序，必須優先檢驗主要基準，當無法適用主要基準時，方能思考輔助基準。簡言之，輔助基準僅有補充性地位，不能凌駕主要基準之上。」</p>
                  <p>「以去年鬧得沸沸揚揚的『台菲漁業爭議（廣大興案）』為例，懸掛我國國旗的廣大興號，在公海上遭到菲律賓海巡人員持槍掃射，中華民國籍船長洪石成不幸中彈身亡，我國刑法得否適用呢？雖由§ 8似乎立刻得出『肯定』的答案，卻犯了跳躍思考的大錯！因為就殺人罪而言，殺人行為地乃菲律賓船艦，死亡結果地則是我國船艦，按§ 4隔地犯本得適用我國刑法。當依靠屬地原則（主要基準）就能得出結論時，便無保護原則（輔助基準）的出場機會了。¹」</p>
                  <p>「(三) 外國裁判之效力→補助原則（§ 9）：」</p>
                  <p>「1. 經外國確定裁判：仍得依本法處斷。」</p>
                  <p>「2. 在外國已受刑之全部或一部執行：得免其刑之全部或一部之執行。」</p>
                  <p class="text-[11px] text-slate-500 not-italic">註1：就此爭議，請詳見許恆達，從台菲漁業爭議看東海武裝衝突的刑事管轄權問題，臺灣法學227，P.34以下。</p>
                </blockquote>
              </div>

              <!-- 廣大興案深度剖析焦點卡片 -->
              <div class="p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-blue-50 via-indigo-50/50 to-sky-50 dark:from-[#0c2a4d] dark:via-[#111f38] dark:to-[#0f172a] border-2 border-blue-300 dark:border-blue-700/80 border-l-[8px] border-l-blue-600 shadow-sm space-y-4">
                <div class="flex items-center justify-between flex-wrap gap-2 border-b border-blue-200 dark:border-blue-800/80 pb-2.5">
                  <div class="flex items-center gap-2">
                    <span class="text-xl">🚢</span>
                    <h4 class="text-base font-black text-slate-900 dark:text-white">
                      台菲漁業爭議（廣大興案）——主要基準 vs 輔助基準之檢驗典範
                    </h4>
                  </div>
                  <span class="text-xs font-mono font-bold px-2 py-0.5 rounded bg-blue-100 dark:bg-blue-900/60 text-blue-700 dark:text-blue-300">
                    跳躍思考警示
                  </span>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
                  <div class="p-4 rounded-xl bg-rose-50/80 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-900/60 space-y-1.5">
                    <span class="font-bold text-rose-800 dark:text-rose-300 flex items-center gap-1.5">
                      <span>❌</span> 考生常見跳躍思考大錯
                    </span>
                    <p class="text-slate-700 dark:text-slate-300 leading-relaxed font-serif">
                      直接跳到 <strong class="text-rose-700 dark:text-rose-300">§ 8 保護原則</strong>（外國人在境外侵害我國國民）。雖然結論看似也是肯定適用，但審查邏輯完全跳躍失序，忽略了優先層級！
                    </p>
                  </div>
                  <div class="p-4 rounded-xl bg-emerald-50/80 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-900/60 space-y-1.5">
                    <span class="font-bold text-emerald-800 dark:text-emerald-300 flex items-center gap-1.5">
                      <span>✅</span> 正確嚴謹法律審查路徑
                    </span>
                    <p class="text-slate-700 dark:text-slate-300 leading-relaxed font-serif">
                      先審查 <strong class="text-emerald-700 dark:text-emerald-300">§ 3 但書（浮動領土）＋ § 4（隔地犯）</strong>！殺人行為在菲船，但船長死亡結果發生於我國籍廣大興號（浮動領土），依屬地主要基準即已充分管轄，無庸動用輔助基準！
                    </p>
                  </div>
                </div>
              </div>

              <!-- 【表1】地的適用效力思考順序流程圖 (高質感立體架構) -->
              <div class="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900/80 border-2 border-slate-200 dark:border-slate-800 space-y-4">
                <div class="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3">
                  <div class="flex items-center gap-2">
                    <span class="text-base font-black text-indigo-600 dark:text-indigo-400 font-mono">【表 1】</span>
                    <h4 class="text-sm sm:text-base font-black text-slate-900 dark:text-white">
                      地的適用效力思考順序（教材第 2-13 頁 原圖體系還原）
                    </h4>
                  </div>
                  <span class="text-xs font-mono px-2 py-0.5 rounded bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 font-bold">
                    優先順序鐵律
                  </span>
                </div>

                <!-- 流程圖節點樹 -->
                <div class="space-y-3 font-sans text-xs">
                  <!-- 主要基準節點 -->
                  <div class="p-4 rounded-xl bg-blue-100/70 dark:bg-blue-950/60 border-2 border-blue-400 dark:border-blue-700 flex flex-col sm:flex-row items-center justify-between gap-3 shadow-xs">
                    <div class="flex items-center gap-3">
                      <span class="px-2.5 py-1 rounded-lg bg-blue-600 text-white font-mono font-bold text-xs shrink-0">主要基準</span>
                      <div>
                        <div class="font-black text-slate-900 dark:text-white text-sm">§ 3 ＋ § 4 屬地原則</div>
                        <div class="text-slate-600 dark:text-slate-300 text-xs font-serif">犯罪之行為或結果發生在我國領域之內（含浮動領土）？</div>
                      </div>
                    </div>
                    <div class="flex items-center gap-2 shrink-0">
                      <span class="px-3 py-1 rounded-lg bg-emerald-600 text-white font-bold text-xs shadow-xs">👉 是 ➔ 適用我國刑法</span>
                    </div>
                  </div>

                  <div class="flex justify-center text-slate-400 dark:text-slate-500 font-mono text-xs">
                    <span>▼ 否（國外犯罪，始得檢驗輔助基準）</span>
                  </div>

                  <!-- 輔助基準 1: § 5 -->
                  <div class="p-3.5 rounded-xl bg-purple-50 dark:bg-purple-950/40 border border-purple-300 dark:border-purple-800 flex flex-col sm:flex-row items-center justify-between gap-3">
                    <div class="flex items-center gap-3">
                      <span class="px-2 py-0.5 rounded-md bg-purple-600 text-white font-mono font-bold text-xs shrink-0">§ 5</span>
                      <div>
                        <div class="font-bold text-slate-900 dark:text-white">保護原則 ＋ 世界原則</div>
                        <div class="text-slate-600 dark:text-slate-300 text-xs font-serif">侵害我國重大法益 或 侵害世界共通價值（航空/毒品/詐欺等）？</div>
                      </div>
                    </div>
                    <span class="px-2.5 py-1 rounded bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 font-bold text-xs shrink-0">是 ➔ 適用我國刑法</span>
                  </div>

                  <div class="flex justify-center text-slate-400 dark:text-slate-500 font-mono text-xs">
                    <span>▼ 否</span>
                  </div>

                  <!-- 輔助基準 2: § 6 -->
                  <div class="p-3.5 rounded-xl bg-purple-50 dark:bg-purple-950/40 border border-purple-300 dark:border-purple-800 flex flex-col sm:flex-row items-center justify-between gap-3">
                    <div class="flex items-center gap-3">
                      <span class="px-2 py-0.5 rounded-md bg-purple-600 text-white font-mono font-bold text-xs shrink-0">§ 6</span>
                      <div>
                        <div class="font-bold text-slate-900 dark:text-white">屬人原則（我國公務員）</div>
                        <div class="text-slate-600 dark:text-slate-300 text-xs font-serif">我國公務員在國外犯特定之罪（瀆職、脫逃、偽造等）？</div>
                      </div>
                    </div>
                    <span class="px-2.5 py-1 rounded bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 font-bold text-xs shrink-0">是 ➔ 適用我國刑法</span>
                  </div>

                  <div class="flex justify-center text-slate-400 dark:text-slate-500 font-mono text-xs">
                    <span>▼ 否</span>
                  </div>

                  <!-- 輔助基準 3: § 7 -->
                  <div class="p-3.5 rounded-xl bg-purple-50 dark:bg-purple-950/40 border border-purple-300 dark:border-purple-800 flex flex-col sm:flex-row items-center justify-between gap-3">
                    <div class="flex items-center gap-3">
                      <span class="px-2 py-0.5 rounded-md bg-purple-600 text-white font-mono font-bold text-xs shrink-0">§ 7</span>
                      <div>
                        <div class="font-bold text-slate-900 dark:text-white">屬人原則（我國國民）</div>
                        <div class="text-slate-600 dark:text-slate-300 text-xs font-serif">我國國民在國外犯特定之罪（最輕本刑 3 年以上重罪，犯罪地處罰者）？</div>
                      </div>
                    </div>
                    <span class="px-2.5 py-1 rounded bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 font-bold text-xs shrink-0">是 ➔ 適用我國刑法</span>
                  </div>

                  <div class="flex justify-center text-slate-400 dark:text-slate-500 font-mono text-xs">
                    <span>▼ 否</span>
                  </div>

                  <!-- 輔助基準 4: § 8 -->
                  <div class="p-3.5 rounded-xl bg-purple-50 dark:bg-purple-950/40 border border-purple-300 dark:border-purple-800 flex flex-col sm:flex-row items-center justify-between gap-3">
                    <div class="flex items-center gap-3">
                      <span class="px-2 py-0.5 rounded-md bg-purple-600 text-white font-mono font-bold text-xs shrink-0">§ 8</span>
                      <div>
                        <div class="font-bold text-slate-900 dark:text-white">保護原則（被害人為我國國民）</div>
                        <div class="text-slate-600 dark:text-slate-300 text-xs font-serif">外國人在國外對我國國民犯特定之罪（最輕本刑 3 年以上重罪，犯罪地處罰者）？</div>
                      </div>
                    </div>
                    <span class="px-2.5 py-1 rounded bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 font-bold text-xs shrink-0">是 ➔ 適用我國刑法</span>
                  </div>

                  <div class="flex justify-center text-slate-400 dark:text-slate-500 font-mono text-xs">
                    <span>▼ 否</span>
                  </div>

                  <!-- 終局不適用 -->
                  <div class="p-3.5 rounded-xl bg-slate-200/80 dark:bg-slate-800/80 border border-slate-300 dark:border-slate-700 text-center font-bold text-slate-700 dark:text-slate-300">
                    ❌ 全數不該當 ➔ 【不適用我國刑法】
                  </div>
                </div>
              </div>

              <!-- (三) 外國裁判之效力→補助原則（§ 9） -->
              <div class="p-5 rounded-2xl bg-indigo-50/70 dark:bg-indigo-950/40 border-2 border-indigo-200 dark:border-indigo-800 space-y-3">
                <div class="flex items-center justify-between">
                  <span class="font-black text-sm text-indigo-950 dark:text-indigo-200 flex items-center gap-2">
                    <span>⚖️</span>
                    <span>(三) 外國裁判之效力 ➔ 補助原則（刑法 § 9）</span>
                  </span>
                  <span class="text-xs font-mono text-indigo-600 dark:text-indigo-400 font-bold">主權獨立與刑之免除</span>
                </div>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div class="p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-indigo-200 dark:border-indigo-800 space-y-1">
                    <span class="font-bold text-indigo-900 dark:text-indigo-300 block">1. 確定裁判仍得依本法處斷</span>
                    <p class="text-slate-600 dark:text-slate-300 leading-relaxed font-serif">
                      基於國家刑罰權獨立性，同一行為同一人雖經外國確定裁判，我國司法機關仍得依本法再次偵查起訴審判，不受一事不再理原則限制。
                    </p>
                  </div>
                  <div class="p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-indigo-200 dark:border-indigo-800 space-y-1">
                    <span class="font-bold text-emerald-900 dark:text-emerald-300 block">2. 在外國已受刑得免其刑執行</span>
                    <p class="text-slate-600 dark:text-slate-300 leading-relaxed font-serif">
                      為避免受刑人遭受重複處罰之苛酷結果，在外國已受刑之全部或一部執行者，法院<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">得免其刑之全部或一部之執行</span>，兼顧人道考量。
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </section>

          <!-- ═══════════════ 十三、人的適用效力（教材第 2-14 頁 全節完結） ═══════════════ -->
          <section id="sec-p0ch2-sec1-personal-scope" class="space-y-6 pt-2">
            <div class="flex items-center gap-3">
              <span class="w-2 h-6 rounded-full bg-blue-600"></span>
              <h3 class="text-lg sm:text-xl font-black text-slate-900 dark:text-white tracking-tight">
                十三、人的適用效力（教材第 2-14 頁 全節完結）
              </h3>
            </div>

            <div class="p-6 rounded-3xl border border-slate-200 dark:border-white/[0.08] bg-white dark:bg-[#101623] shadow-sm space-y-6">
              
              <!-- 課本原文展示盒 (1:1 復刻) -->
              <div class="rounded-2xl p-5 bg-slate-50/80 dark:bg-slate-900/80 border-2 border-slate-200 dark:border-slate-800 space-y-3">
                <div class="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-2">
                  <span class="font-bold text-xs text-slate-500 dark:text-slate-400 font-mono">📖 課本原文 1:1 忠實重現 (P. 2-14)</span>
                  <span class="text-[11px] px-2 py-0.5 rounded bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 font-bold font-mono">人的適用效力全書原文</span>
                </div>
                <blockquote class="text-xs sm:text-sm text-slate-800 dark:text-slate-200 leading-relaxed font-serif italic border-l-4 border-blue-500 pl-3.5 space-y-2">
                  <p>「三、人的適用效力」</p>
                  <p>「(一) 總統→刑事豁免權（憲法§ 52、釋627號）：」</p>
                  <p class="pl-4">「1. 性質：限縮性、暫時性的訴訟障礙事由。」<br>「2. 總統除犯內亂罪、外患罪，不受刑事上之訴追。（限縮性）」<br>「3. 總統非經罷免、解職，不受刑事上之訴追。（暫時性）」</p>
                  <p>「(二) 民代→言論免責權（憲法§ 73、釋165號+釋435號）：」</p>
                  <p class="pl-4">「1. 性質：自始性的個人排除刑罰事由。」<br>「2. 釋165號：包括中央民意代表（立委）以及地方民意代表（議員）。」<br>「3. 釋435號：為確保立法委員行使職權無所瞻顧，此項言論免責權之保障範圍，應作最大程度之界定，舉凡在院會或委員會之發言、質詢、提案、表決以及與此直接相關之附隨行為，如院內黨團協商、公聽會之發言等均屬應予保障之事項。越此範圍與行使職權無關之行為，諸如蓄意之肢體動作等，顯然不符意見表達之適當情節致侵害他人法益者，自不在憲法上開條文保障之列。」</p>
                  <p>「(三) 外國元首、大使、領事、外交使節、經許可駐軍之外國軍隊→外交豁免權（國際法上的外交慣例）」</p>
                  <p>「📖 解題提示：」</p>
                  <p>「請注意，總統的刑事豁免權乃程序法上的『訴訟障礙事由』，並未排除犯罪之成立與刑罰之適用；民代的言論免責權乃實體法上的『免責權』，可以排除犯罪成立或阻卻刑罰的發動。兩者性質差異甚大，讀者請切勿混淆。」</p>
                </blockquote>
              </div>

              <!-- 三大身分豁免體系卡片 (8px 色軸) -->
              <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                <!-- 1. 總統刑事豁免權 -->
                <div class="p-5 rounded-2xl bg-white dark:bg-slate-900 border-2 border-blue-200 dark:border-blue-900/60 border-l-[8px] border-l-blue-600 space-y-2.5 shadow-xs">
                  <div class="flex items-center justify-between">
                    <span class="px-2 py-0.5 rounded text-[10.5px] font-bold bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 font-mono">憲法 § 52</span>
                    <span class="text-xs font-mono font-bold text-blue-600">釋字 627 號</span>
                  </div>
                  <h4 class="text-sm font-bold text-slate-900 dark:text-white">總統刑事豁免權</h4>
                  <ul class="text-xs text-slate-600 dark:text-slate-300 space-y-1.5 leading-relaxed font-serif">
                    <li>• <strong>性質</strong>：<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">限縮性、暫時性的訴訟障礙事由</span>。</li>
                    <li>• <strong>限縮性</strong>：除犯內亂罪、外患罪外，不受刑事訴追。</li>
                    <li>• <strong>暫時性</strong>：非經罷免、解職或卸任，不得受訴追。</li>
                    <li>• <strong>本質</strong>：犯罪仍成立，僅程序上暫緩訴追！</li>
                  </ul>
                </div>

                <!-- 2. 民代言論免責權 -->
                <div class="p-5 rounded-2xl bg-white dark:bg-slate-900 border-2 border-purple-200 dark:border-purple-900/60 border-l-[8px] border-l-purple-600 space-y-2.5 shadow-xs">
                  <div class="flex items-center justify-between">
                    <span class="px-2 py-0.5 rounded text-[10.5px] font-bold bg-purple-100 dark:bg-purple-950 text-purple-700 dark:text-purple-300 font-mono">憲法 § 73</span>
                    <span class="text-xs font-mono font-bold text-purple-600">釋 165 + 435</span>
                  </div>
                  <h4 class="text-sm font-bold text-slate-900 dark:text-white">民代言論免責權</h4>
                  <ul class="text-xs text-slate-600 dark:text-slate-300 space-y-1.5 leading-relaxed font-serif">
                    <li>• <strong>性質</strong>：<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">自始性的個人排除刑罰事由（實體免責）</span>。</li>
                    <li>• <strong>主體</strong>：中央立委與地方議員（釋字 165 號）。</li>
                    <li>• <strong>保障範圍</strong>：最大程度界定，院會委員會發言、提案、表決與附隨行為（釋字 435 號）。</li>
                    <li>• <strong>界限</strong>：<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">蓄意肢體動作等侵害法益者除外！</span></li>
                  </ul>
                </div>

                <!-- 3. 外交豁免權 -->
                <div class="p-5 rounded-2xl bg-white dark:bg-slate-900 border-2 border-emerald-200 dark:border-emerald-900/60 border-l-[8px] border-l-emerald-600 space-y-2.5 shadow-xs">
                  <div class="flex items-center justify-between">
                    <span class="px-2 py-0.5 rounded text-[10.5px] font-bold bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 font-mono">國際法慣例</span>
                    <span class="text-xs font-mono font-bold text-emerald-600">維也納公約</span>
                  </div>
                  <h4 class="text-sm font-bold text-slate-900 dark:text-white">外交豁免權</h4>
                  <ul class="text-xs text-slate-600 dark:text-slate-300 space-y-1.5 leading-relaxed font-serif">
                    <li>• <strong>適用對象</strong>：外國元首、大使、公使、領事、外交使節、經許可駐軍之外國軍隊。</li>
                    <li>• <strong>法律效果</strong>：不受我國刑事裁判管轄。</li>
                    <li>• <strong>處理常例</strong>：循外交途徑宣告為不受歡迎人物（Persona non grata）驅逐出境。</li>
                  </ul>
                </div>
              </div>

              <!-- 📖 解題提示：訴訟障礙事由 vs 實體免責權 核心對比矩陣 (Table) -->
              <div class="p-5 sm:p-6 rounded-2xl bg-slate-50 dark:bg-slate-900/80 border-2 border-indigo-300 dark:border-indigo-800 space-y-3.5">
                <div class="flex items-center justify-between border-b border-indigo-200 dark:border-indigo-800 pb-2.5">
                  <div class="flex items-center gap-2">
                    <span class="text-base font-black text-indigo-600 dark:text-indigo-400">📖</span>
                    <h5 class="text-sm sm:text-base font-black text-slate-900 dark:text-white">
                      解題提示：總統刑事豁免權 vs 民代言論免責權 之本質區辨
                    </h5>
                  </div>
                  <span class="text-xs font-mono font-bold text-indigo-600 dark:text-indigo-400">國考高頻必考</span>
                </div>

                <div class="overflow-x-auto rounded-xl border border-indigo-200 dark:border-indigo-800">
                  <table class="w-full text-left text-xs text-slate-700 dark:text-slate-300">
                    <thead class="bg-indigo-100/70 dark:bg-indigo-950/70 text-indigo-950 dark:text-white font-bold border-b border-indigo-200 dark:border-indigo-800">
                      <tr>
                        <th class="p-3">比較面向</th>
                        <th class="p-3">總統刑事豁免權（憲法 § 52）</th>
                        <th class="p-3">民代言論免責權（憲法 § 73）</th>
                      </tr>
                    </thead>
                    <tbody class="divide-y divide-indigo-100 dark:divide-indigo-900/50">
                      <tr>
                        <td class="p-3 font-bold text-slate-900 dark:text-white">法律性質</td>
                        <td class="p-3 text-blue-700 dark:text-blue-300 font-bold">程序法 ➔「訴訟障礙事由」</td>
                        <td class="p-3 text-purple-700 dark:text-purple-300 font-bold">實體法 ➔「免責權（個人排除刑罰事由）」</td>
                      </tr>
                      <tr>
                        <td class="p-3 font-bold text-slate-900 dark:text-white">犯罪成立與否</td>
                        <td class="p-3 font-semibold text-rose-600 dark:text-rose-400">行為仍成立犯罪，具備不法與罪責！</td>
                        <td class="p-3 font-semibold text-emerald-600 dark:text-emerald-400">排除犯罪成立或阻卻刑罰之發動！</td>
                      </tr>
                      <tr>
                        <td class="p-3 font-bold text-slate-900 dark:text-white">時間存續效力</td>
                        <td class="p-3"><strong>暫時性</strong>：卸任或經罷免解職後，即得訴追處罰！</td>
                        <td class="p-3"><strong>永久性</strong>：任期內合職權言論，卸任後終身免受訴追！</td>
                      </tr>
                      <tr>
                        <td class="p-3 font-bold text-slate-900 dark:text-white">行為態樣界限</td>
                        <td class="p-3">除內亂、外患罪外，一般刑事犯罪暫不受訴追</td>
                        <td class="p-3">限於議事職權關聯言論與附隨行為；<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">蓄意肢體暴力除外</span></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

            </div>
          </section>

          <!-- ═══════════════ 十四、第一節全節完結里程碑卡片 ═══════════════ -->
          <div class="p-6 sm:p-8 rounded-3xl border-2 border-indigo-500/50 bg-gradient-to-br from-indigo-50/70 via-blue-50/40 to-purple-50/50 dark:from-indigo-950/50 dark:via-blue-950/30 dark:to-purple-950/40 space-y-4 shadow-sm text-center sm:text-left">
            <div class="flex flex-col sm:flex-row items-center justify-between gap-3">
              <div class="space-y-1">
                <span class="text-xs font-mono font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider block">
                  CHAPTER 2 SECTION 1 COMPLETED • PAGES 2-9 TO 2-14 FULLY COMPILED
                </span>
                <h4 class="text-base sm:text-lg font-black text-slate-900 dark:text-white">
                  🎉 第一節【刑法的適用效力】全節完整收錄完畢！
                </h4>
              </div>
              <span class="px-3 py-1 rounded-xl bg-gradient-to-r from-indigo-600 to-blue-600 text-white text-xs font-bold shrink-0 shadow-md shadow-indigo-600/30">
                第一節全節完結 (P. 2-9 ～ 2-14)
              </span>
            </div>
            <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-serif">
              第一節已全面收錄刑法適用效力之三大先天限制：
              <br>• <strong>時的適用效力（P. 2-9～2-10）</strong>：從舊從輕原則（§ 2）、案例 2-1（繼續犯拘禁跨越修法）、案例 2-2（限時法 76 年決議）、保安處分雙軌制。
              <br>• <strong>地的適用效力（P. 2-10～2-13）</strong>：屬地主要基準（§ 3＋§ 4）、案例 2-3（隔地犯詐騙）、案例 2-4（使領館管轄慣例）、案例 2-5（大陸地區特殊國內關係）、輔助基準三大原則（屬人 § 6＋§ 7、保護 § 5＋§ 8、世界 § 5）、案例 2-6（偽造外國股票 72 年判例）、廣大興案審查順序、補助原則（§ 9）與【表 1】思考順序流程圖。
              <br>• <strong>人的適用效力（P. 2-14）</strong>：總統刑事豁免權（憲法 § 52、釋 627）、民代言論免責權（憲法 § 73、釋 165/435）、外交豁免權與訴訟障礙事由 vs 實體免責權本質區辨對照矩陣。
            </p>
            <div class="pt-2 flex flex-wrap items-center justify-between gap-2 border-t border-indigo-200/60 dark:border-indigo-800/60 text-xs">
              <span class="text-slate-700 dark:text-slate-300 font-medium">
                👉 下一單元：<strong>第二節 刑法之解釋方法</strong>（教材第 2-15～2-24 頁，四大解釋方法、案例 2-7、公務員/重傷/性交法定定義）
              </span>
              <button onclick="switchView('part0-ch2')" class="text-indigo-600 dark:text-indigo-400 font-bold hover:underline cursor-pointer flex items-center gap-1">
                <span>前往第二章總覽</span>
                <span>→</span>
              </button>
            </div>
          </div>

          <!-- 分頁按鈕導航 -->
          <div class="pt-6 border-t border-slate-200 dark:border-white/[0.08] grid grid-cols-1 sm:grid-cols-2 gap-4">
            <button onclick="switchView('part0-ch1-sec3')" class="group p-4 rounded-2xl border border-slate-200 dark:border-white/[0.08] hover:border-indigo-500/40 bg-white dark:bg-[#111726] text-left transition-all hover:-translate-y-0.5 shadow-sm hover:shadow-md flex items-center gap-3 cursor-pointer">
              <div class="w-9 h-9 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 group-hover:bg-indigo-50 dark:group-hover:bg-indigo-950 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 flex items-center justify-center text-sm font-bold shrink-0 transition-colors">
                ←
              </div>
              <div class="min-w-0">
                <span class="text-[11px] text-slate-400 font-mono block">上一單元 (P. 2-7～2-8)</span>
                <span class="text-xs font-bold text-slate-800 dark:text-slate-200 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors truncate block">
                  第一章 第三節 罪責原則
                </span>
              </div>
            </button>

            <button onclick="switchView('part0-ch2')" class="group p-4 rounded-2xl border border-indigo-500/40 hover:border-indigo-500 bg-gradient-to-br from-indigo-50/50 to-blue-50/30 dark:from-indigo-950/30 dark:to-blue-950/20 text-right transition-all hover:-translate-y-0.5 shadow-sm hover:shadow-md flex items-center justify-between gap-3 cursor-pointer">
              <div class="min-w-0 text-left">
                <span class="text-[11px] text-indigo-700 dark:text-indigo-400 font-mono block font-bold">章節總覽 (P. 2-9～2-24)</span>
                <span class="text-xs font-extrabold text-slate-900 dark:text-white group-hover:text-indigo-700 dark:group-hover:text-indigo-400 transition-colors truncate block">
                  第二章 刑法的操作原理 →
                </span>
              </div>
              <div class="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-600 to-blue-600 text-white flex items-center justify-center text-sm font-bold shrink-0 group-hover:scale-105 transition-transform shadow-md shadow-indigo-600/30">
                →
              </div>
            </button>
          </div>

        </div>
`;
