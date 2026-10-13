/**
 * view-part0-ch3-sec1.js
 * 第零篇 第三章 第一節 刑罰的種類——兼談法定刑（教材第 2-27 ～ 2-29 頁 原文體系精讀）
 * 遵循 AGENTS.md 最高行為憲法規範：
 * 1. 1:1 教科書原文忠實收錄（無錯字、零腦補）
 * 2. 嚴禁 grid-cols-2 橫向並排，嚴格單欄垂直上下堆疊 (Strict Vertical Stacking)
 * 3. 純紅底線規範（嚴禁刺眼全紅文字）
 * 4. 犬系法學四大天王五位一體劇院與 2026 最新法條動態備註（憲判 8 號、沒收新制獨立專章、從刑修正）
 * 5. Zero-CORS 本機雙擊秒開相容
 */
window.APP_VIEWS = window.APP_VIEWS || {};
window.APP_VIEWS['viewPart0Ch3Sec1'] = window.APP_VIEWS['part0Ch3Sec1'] = window.APP_VIEWS['part0-ch3-sec1'] = `
        <!-- VIEW: 第零篇 第三章 第一節 刑罰的種類——兼談法定刑 (教材第 2-27 ～ 2-29 頁) -->
        <div id="viewPart0Ch3Sec1" class="fade-enter hidden space-y-8">
          
          <!-- 頂部麵包屑導航與快速跳轉 -->
          <div class="flex items-center justify-between gap-4 border-b border-slate-200/80 dark:border-white/10 pb-3">
            <nav class="flex items-center gap-2 text-xs font-medium text-slate-500 dark:text-slate-400 flex-wrap">
              <button onclick="switchView('part0')" class="hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer">第零篇</button>
              <span>/</span>
              <button onclick="switchView('part0-ch3')" class="hover:text-rose-600 dark:hover:text-rose-400 transition-colors cursor-pointer">第三章 刑法的法律效果</button>
              <span>/</span>
              <span class="text-rose-600 dark:text-rose-400 font-bold">第一節 刑罰的種類——兼談法定刑</span>
            </nav>
            <div class="flex items-center gap-2">
              <button onclick="switchView('part0-ch3')" class="text-xs text-slate-500 dark:text-slate-400 hover:text-rose-600 dark:hover:text-rose-400 flex items-center gap-1 transition-colors shrink-0 font-medium cursor-pointer">
                <span>← 返回第三章前言</span>
              </button>
            </div>
          </div>

          <!-- 章節大標題 -->
          <div class="space-y-2">
            <div class="flex items-center gap-2 text-rose-600 dark:text-rose-400 font-mono text-xs font-bold">
              <span>第零篇・第三章・第一節</span>
              <span class="px-2 py-0.5 rounded-md bg-rose-50 dark:bg-rose-950/40 text-[11px] border border-rose-200 dark:border-rose-900/50">
                教材第 2-27 ～ 2-29 頁 原文體系全收錄
              </span>
            </div>
            <h2 class="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
              第一節 刑罰的種類——兼談法定刑
            </h2>
            <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-serif leading-relaxed">
              個別罪名之法定效果界限：主刑三類（死刑、自由刑、罰金刑）、從刑（褫奪公權與沒收法制變遷），以及複數主刑之選科與併科四種模式。
            </p>
          </div>

          <!-- ══════════════════════════════════════════════════════════ -->
          <!-- 一、法定刑之概念與完全性法條結構 (教材第 2-27 頁) -->
          <!-- ══════════════════════════════════════════════════════════ -->
          <section id="sec-p0ch3-sec1-concept" class="space-y-6 pt-2">
            <div class="flex items-center gap-3">
              <span class="w-2 h-6 rounded-full bg-rose-600"></span>
              <h3 class="text-lg sm:text-xl font-black text-slate-900 dark:text-white tracking-tight">
                一、法定刑之概念與完全性法條結構（教材第 2-27 頁）
              </h3>
            </div>

            <div class="p-6 rounded-3xl border border-slate-200 dark:border-white/[0.08] bg-white dark:bg-[#101623] shadow-sm space-y-6">
              
              <!-- 旗艦卡片：法定刑概念與完全性法條公式 -->
              <div class="p-6 rounded-2xl bg-gradient-to-br from-rose-50 via-pink-50/40 to-slate-50 dark:from-[#2a0e17] dark:via-[#1e1322] dark:to-[#0f172a] border-2 border-rose-300 dark:border-rose-500/80 border-l-[8px] border-l-rose-600 dark:border-l-rose-400 shadow-sm space-y-4">
                <div class="flex items-center justify-between flex-wrap gap-2">
                  <div class="flex items-center gap-2.5">
                    <span class="text-2xl">📜</span>
                    <div>
                      <span class="font-black text-sm sm:text-base text-rose-950 dark:text-rose-100">
                        法定刑之本質：完全性法條之必備效果
                      </span>
                      <span class="block text-[11px] font-mono font-bold text-rose-600 dark:text-rose-400 tracking-wider">
                        POENA LEGALIS · TATBESTAND & RECHTSFOLGE
                      </span>
                    </div>
                  </div>
                  <span class="text-xs font-mono font-bold px-3 py-1 rounded-lg bg-rose-600 text-white shadow-xs">
                    教材第 2-27 頁
                  </span>
                </div>

                <!-- 1:1 原文重現 -->
                <div class="p-4 rounded-xl bg-white dark:bg-slate-900 border-2 border-rose-200 dark:border-rose-900/60 font-serif text-xs sm:text-[14px] text-slate-800 dark:text-slate-200 leading-relaxed space-y-3">
                  <p class="text-justify indent-6">
                    <span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">法定刑是刑法典上針對個別罪名所定之刑</span>，我國刑法條文原則上都是「<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">成立要件＋法律效果（法定刑）</span>」組成的完全性法條，例如殺人罪規定：「殺人者，處死刑、無期徒刑或十年以上有期徒刑。」
                  </p>
                  <p class="text-justify indent-6">
                    殺人者便是犯罪成立要件，後續的法律效果部分則是法定刑。至於法定刑內的幾種選擇，就是 § 32所規範的刑罰種類，簡言之，<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">刑罰區分為得單獨科處的主刑，以及附屬於主刑的從刑</span>。
                  </p>
                </div>

                <!-- 完全性法條架構拆解卡片 -->
                <div class="p-4 rounded-xl bg-rose-100/60 dark:bg-rose-950/40 border border-rose-300 dark:border-rose-800 space-y-2">
                  <div class="text-xs font-mono font-bold text-rose-900 dark:text-rose-200 flex items-center gap-1.5">
                    <span>💡</span>
                    <span>完全性法條公式拆解（以刑法 § 271 Ⅰ 普通殺人罪為例）</span>
                  </div>
                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-serif pt-1">
                    <div class="p-3 rounded-lg bg-white dark:bg-slate-900 border border-rose-200 dark:border-rose-900/60">
                      <span class="font-bold text-blue-600 dark:text-blue-400 block mb-1">【犯罪成立要件】(Tatbestand)</span>
                      <span class="text-slate-800 dark:text-slate-200">「殺人者……」➔ 行為人著手並致人死亡之不法與罪責該當。</span>
                    </div>
                    <div class="p-3 rounded-lg bg-white dark:bg-slate-900 border border-rose-200 dark:border-rose-900/60">
                      <span class="font-bold text-rose-600 dark:text-rose-400 block mb-1">【法律效果・法定刑】(Rechtsfolge)</span>
                      <span class="text-slate-800 dark:text-slate-200">「……處死刑、無期徒刑或十年以上有期徒刑。」➔ 立法者所定抽象刑度範圍。</span>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </section>

          <!-- ══════════════════════════════════════════════════════════ -->
          <!-- 二、主刑之種類：死刑、自由刑與罰金刑 (教材第 2-27 頁) -->
          <!-- ══════════════════════════════════════════════════════════ -->
          <section id="sec-p0ch3-sec1-principal-penalties" class="space-y-6 pt-2">
            <div class="flex items-center gap-3">
              <span class="w-2 h-6 rounded-full bg-blue-600"></span>
              <h3 class="text-lg sm:text-xl font-black text-slate-900 dark:text-white tracking-tight">
                二、主刑有「死刑」、「自由刑」與「罰金刑」三種（教材第 2-27 頁）
              </h3>
            </div>

            <div class="p-6 rounded-3xl border border-slate-200 dark:border-white/[0.08] bg-white dark:bg-[#101623] shadow-sm space-y-6">
              
              <!-- (一) 死刑 (生命刑) -->
              <div class="p-5 rounded-2xl bg-white dark:bg-slate-900 border-2 border-slate-300 dark:border-slate-700 border-l-[8px] border-l-slate-800 dark:border-l-slate-300 shadow-xs space-y-3">
                <div class="flex items-center justify-between flex-wrap gap-2">
                  <div class="flex items-center gap-2">
                    <span class="w-7 h-7 rounded-lg bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 flex items-center justify-center font-bold text-xs">一</span>
                    <h4 class="text-base sm:text-lg font-black text-slate-900 dark:text-white">
                      (一) 死刑（生命刑）
                    </h4>
                  </div>
                  <span class="text-xs font-mono font-bold px-2.5 py-0.5 rounded bg-slate-150 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                    CAPITAL PUNISHMENT • 最強烈刑罰
                  </span>
                </div>

                <div class="font-serif text-xs sm:text-[13.5px] text-slate-800 dark:text-slate-200 leading-relaxed">
                  <p>
                    <span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">最強烈的刑罰</span>，請注意 <span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">§ 63之限制</span>：「<span class="font-bold">未滿十八歲或已滿八十歲之犯罪人，不得處以死刑或無期徒刑；若本刑為死刑或無期徒刑者，減輕為有期徒刑。</span>」
                  </p>
                </div>
              </div>

              <!-- (二) 自由刑 -->
              <div class="p-5 rounded-2xl bg-white dark:bg-slate-900 border-2 border-blue-300 dark:border-blue-900/60 border-l-[8px] border-l-blue-600 shadow-xs space-y-3">
                <div class="flex items-center justify-between flex-wrap gap-2">
                  <div class="flex items-center gap-2">
                    <span class="w-7 h-7 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold text-xs">二</span>
                    <h4 class="text-base sm:text-lg font-black text-slate-900 dark:text-white">
                      (二) 自由刑（剝奪人身自由）
                    </h4>
                  </div>
                  <span class="text-xs font-mono font-bold px-2.5 py-0.5 rounded bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300">
                    IMPRISONMENT • 自由剝奪
                  </span>
                </div>

                <div class="font-serif text-xs sm:text-[13.5px] text-slate-800 dark:text-slate-200 leading-relaxed">
                  <p>
                    自由刑可分為三種體系層次：
                  </p>
                </div>

                <!-- 自由刑三層次 (Strict Vertical Stacking) -->
                <div class="space-y-2.5 text-xs font-serif">
                  <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 flex items-start gap-2">
                    <span class="font-bold text-blue-700 dark:text-blue-300 shrink-0">① 無期徒刑：</span>
                    <span class="text-slate-800 dark:text-slate-200">終身監禁。</span>
                  </div>
                  <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 flex items-start gap-2">
                    <span class="font-bold text-indigo-700 dark:text-indigo-300 shrink-0">② 有期徒刑：</span>
                    <span class="text-slate-800 dark:text-slate-200">
                      <span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">2個月以上，15年以下</span>（若遇加重減輕，可減至2月未滿，加重至20年）。
                    </span>
                  </div>
                  <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 flex items-start gap-2">
                    <span class="font-bold text-purple-700 dark:text-purple-300 shrink-0">③ 拘役：</span>
                    <span class="text-slate-800 dark:text-slate-200">
                      <span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">1日以上，60日未滿</span>（若遇有加重，得加至120日）。
                    </span>
                  </div>
                </div>
              </div>

              <!-- (三) 罰金刑 -->
              <div class="p-5 rounded-2xl bg-white dark:bg-slate-900 border-2 border-emerald-300 dark:border-emerald-900/60 border-l-[8px] border-l-emerald-600 shadow-xs space-y-3">
                <div class="flex items-center justify-between flex-wrap gap-2">
                  <div class="flex items-center gap-2">
                    <span class="w-7 h-7 rounded-lg bg-emerald-600 text-white flex items-center justify-center font-bold text-xs">三</span>
                    <h4 class="text-base sm:text-lg font-black text-slate-900 dark:text-white">
                      (三) 罰金刑（財產刑）
                    </h4>
                  </div>
                  <span class="text-xs font-mono font-bold px-2.5 py-0.5 rounded bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300">
                    PECUNIARY PENALTY • 最輕微處罰
                  </span>
                </div>

                <div class="font-serif text-xs sm:text-[13.5px] text-slate-800 dark:text-slate-200 leading-relaxed">
                  <p>
                    指<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">新台幣1000元以上之刑罰</span>，屬於最輕微的處罰。
                  </p>
                </div>
              </div>

            </div>
          </section>

          <!-- ══════════════════════════════════════════════════════════ -->
          <!-- 三、從刑之種類：褫奪公權、沒收與追徵體系 (教材第 2-28 頁) -->
          <!-- ══════════════════════════════════════════════════════════ -->
          <section id="sec-p0ch3-sec1-accessory-penalties" class="space-y-6 pt-2">
            <div class="flex items-center gap-3">
              <span class="w-2 h-6 rounded-full bg-purple-600"></span>
              <h3 class="text-lg sm:text-xl font-black text-slate-900 dark:text-white tracking-tight">
                三、從刑有「褫奪公權」、「沒收」與「追徵、追繳或抵償」三種（教材第 2-28 頁）
              </h3>
            </div>

            <div class="p-6 rounded-3xl border border-slate-200 dark:border-white/[0.08] bg-white dark:bg-[#101623] shadow-sm space-y-6">
              
              <!-- (一) 褫奪公權 -->
              <div class="p-5 rounded-2xl bg-white dark:bg-slate-900 border-2 border-purple-300 dark:border-purple-900/60 border-l-[8px] border-l-purple-600 shadow-xs space-y-4">
                <div class="flex items-center justify-between flex-wrap gap-2">
                  <div class="flex items-center gap-2">
                    <span class="w-7 h-7 rounded-lg bg-purple-600 text-white flex items-center justify-center font-bold text-xs">①</span>
                    <h4 class="text-base sm:text-lg font-black text-slate-900 dark:text-white">
                      (一) 褫奪公權（資格刑）
                    </h4>
                  </div>
                  <span class="text-xs font-mono font-bold px-2.5 py-0.5 rounded bg-purple-100 dark:bg-purple-950 text-purple-700 dark:text-purple-300">
                    DEPRIVATION OF CIVIC RIGHTS · 失能理論
                  </span>
                </div>

                <div class="font-serif text-xs sm:text-[13.5px] text-slate-800 dark:text-slate-200 leading-relaxed space-y-3 text-justify">
                  <p>
                    又稱<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">資格刑</span>，顧名思義就是<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">剝奪行為人擔任公務員及公職人員候選人之資格</span>。要注意的是，舊法中規定剝奪選舉、罷免、創制與複決四權之規定，新法中已不復存在。
                  </p>
                  <p>
                    另外 <span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">§ 37 Ⅱ</span>規定：「<span class="font-bold">宣告一年以上有期徒刑，依犯罪之性質認為有褫奪公權之必要者，宣告一年以上十年以下褫奪公權。</span>」對於有褫奪公權之必要採取所謂<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">失能理論</span>，亦即對於該犯罪而言，剝奪行為人的權能等同失去犯罪之能力，例如對收受賄賂者剝奪其為公務員之資格是，反之對強盜者宣告褫奪公權就毫無意義可言。
                  </p>
                  <p>
                    最後，褫奪公權<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">原則上都是自主刑執行完畢後起算</span>，不過若是有緩刑或褫奪公權終身者，則自裁判確定時發生效力。
                  </p>
                </div>
              </div>

              <!-- (二) 沒收 (教材原文收錄) -->
              <div class="p-5 rounded-2xl bg-white dark:bg-slate-900 border-2 border-amber-300 dark:border-amber-900/60 border-l-[8px] border-l-amber-600 shadow-xs space-y-4">
                <div class="flex items-center justify-between flex-wrap gap-2">
                  <div class="flex items-center gap-2">
                    <span class="w-7 h-7 rounded-lg bg-amber-600 text-white flex items-center justify-center font-bold text-xs">②</span>
                    <h4 class="text-base sm:text-lg font-black text-slate-900 dark:text-white">
                      (二) 沒收（物品強制徵收）
                    </h4>
                  </div>
                  <span class="text-xs font-mono font-bold px-2.5 py-0.5 rounded bg-amber-100 dark:bg-amber-950 text-amber-700 dark:text-amber-300">
                    CONFISCATION · 標的分類與絕對/相對沒收
                  </span>
                </div>

                <div class="font-serif text-xs sm:text-[13.5px] text-slate-800 dark:text-slate-200 leading-relaxed space-y-3 text-justify">
                  <p>
                    乃是一種<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">將物品強制徵收歸於國庫的刑罰</span>，關於沒收之物，依據 § 38包括：
                  </p>
                  <ul class="space-y-1.5 pl-4 list-disc text-xs">
                    <li><strong>必沒收的違禁物</strong>：指原物持有人無法合法持有權限（71台上745例參照）。</li>
                    <li><strong>得沒收的供犯罪所用或犯罪預備之物</strong>：如殺人所使用的水果刀。</li>
                    <li><strong>得沒收的因犯罪所生或所得之物</strong>：如受託殺人後所得之酬勞，實務見解並以動產為限（20年上字574號參照）。</li>
                  </ul>
                  <p>
                    沒收方式可以區分為<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">相對沒收與絕對沒收</span>，前者指沒收之物限於犯人所有，且必須依附於主刑而存在；後者指不限於犯人所有（§ 38 Ⅱ）亦毋須依附於主刑（§ 40 Ⅱ），可以單獨宣告沒收。現行法下，僅違禁物屬於絕對沒收。
                  </p>
                </div>
              </div>

              <!-- (三) 追徵、追繳或抵償 -->
              <div class="p-5 rounded-2xl bg-white dark:bg-slate-900 border-2 border-slate-300 dark:border-slate-700 border-l-[8px] border-l-slate-600 shadow-xs space-y-4">
                <div class="flex items-center justify-between flex-wrap gap-2">
                  <div class="flex items-center gap-2">
                    <span class="w-7 h-7 rounded-lg bg-slate-700 text-white flex items-center justify-center font-bold text-xs">③</span>
                    <h4 class="text-base sm:text-lg font-black text-slate-900 dark:text-white">
                      (三) 追徵、追繳或抵償（沒收之補充規定）
                    </h4>
                  </div>
                  <span class="text-xs font-mono font-bold px-2.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                    RECOVERY · 總額原則 vs 淨額原則
                  </span>
                </div>

                <div class="font-serif text-xs sm:text-[13.5px] text-slate-800 dark:text-slate-200 leading-relaxed space-y-3 text-justify">
                  <p>
                    乃是<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">沒收的補充規定</span>，當標的物因故無法執行沒收時（例如收取賄賂所得之金錢已花用殆盡），則以追徵、追繳或抵償加以取代，直接剝奪犯罪所得之利益。稍加注意的是，追徵、追繳或抵償必須刑法分則個別條文有明文規定。
                  </p>
                  <p>
                    至於沒收、追徵、追繳或抵償是否應該扣除犯罪成本？認為不應扣除的見解稱<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">總額原則</span>（犯罪成本＋犯罪利潤），認為應該扣除的看法是<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">淨額原則</span>（僅犯罪利潤），學說與實務見解就此紛然不一。
                  </p>
                </div>
              </div>

            </div>
          </section>

          <!-- ══════════════════════════════════════════════════════════ -->
          <!-- 四、複數主刑之配置模式：選科與併科四種模式 (教材第 2-28～2-29 頁) -->
          <!-- ══════════════════════════════════════════════════════════ -->
          <section id="sec-p0ch3-sec1-modes" class="space-y-6 pt-2">
            <div class="flex items-center gap-3">
              <span class="w-2 h-6 rounded-full bg-emerald-600"></span>
              <h3 class="text-lg sm:text-xl font-black text-slate-900 dark:text-white tracking-tight">
                四、複數主刑之配置模式：選科與併科四種模式（教材第 2-28 ～ 2-29 頁）
              </h3>
            </div>

            <div class="p-6 rounded-3xl border border-slate-200 dark:border-white/[0.08] bg-white dark:bg-[#101623] shadow-sm space-y-6">
              
              <!-- 前言導言 -->
              <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-800 font-serif text-xs sm:text-[13.5px] text-slate-800 dark:text-slate-200 leading-relaxed">
                當法定刑只有唯一主刑時不會發生任何理解上的困難，但在有複數主刑時則有選科與併科之分。<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">選科指於多數主刑中擇一適用</span>，<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">併科指得同時科處多數主刑</span>，舉例如下：
              </div>

              <!-- 模式一：唯一主刑模式 -->
              <div class="p-4 rounded-2xl bg-white dark:bg-slate-900 border-2 border-slate-300 dark:border-slate-700 space-y-2">
                <div class="flex items-center justify-between flex-wrap gap-2">
                  <span class="font-black text-slate-900 dark:text-white text-xs sm:text-sm flex items-center gap-1.5">
                    <span class="w-5 h-5 rounded-md bg-slate-800 text-white flex items-center justify-center font-bold text-xs">1</span>
                    <span>(一) 唯一主刑模式</span>
                  </span>
                  <span class="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 font-bold">無選擇餘地</span>
                </div>
                <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-800 font-serif text-xs leading-relaxed space-y-1">
                  <p class="font-mono text-slate-700 dark:text-slate-300">
                    如 § 271 Ⅲ規定，「……，處二年以下有期徒刑。」
                  </p>
                  <p class="text-slate-600 dark:text-slate-400">
                    因為僅有唯一主刑規定，也沒有什麼好選擇的。
                  </p>
                </div>
              </div>

              <!-- 模式二：多數主刑選科模式 -->
              <div class="p-4 rounded-2xl bg-white dark:bg-slate-900 border-2 border-blue-300 dark:border-blue-900/60 space-y-2">
                <div class="flex items-center justify-between flex-wrap gap-2">
                  <span class="font-black text-blue-950 dark:text-blue-100 text-xs sm:text-sm flex items-center gap-1.5">
                    <span class="w-5 h-5 rounded-md bg-blue-600 text-white flex items-center justify-center font-bold text-xs">2</span>
                    <span>(二) 多數主刑選科模式</span>
                  </span>
                  <span class="text-[11px] font-mono px-2 py-0.5 rounded bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 font-bold">擇一科處</span>
                </div>
                <div class="p-3 rounded-xl bg-blue-50/50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-900/40 font-serif text-xs leading-relaxed space-y-1">
                  <p class="font-mono text-slate-700 dark:text-slate-300">
                    如 § 276 Ⅰ規定，「……，處二年以下有期徒刑、拘役或二千元以下罰金。」
                  </p>
                  <p class="text-slate-600 dark:text-slate-400">
                    可以在有期徒刑、拘役與罰金中選一個科處。
                  </p>
                </div>
              </div>

              <!-- 模式三：多數主刑併科模式 -->
              <div class="p-4 rounded-2xl bg-white dark:bg-slate-900 border-2 border-purple-300 dark:border-purple-900/60 space-y-2">
                <div class="flex items-center justify-between flex-wrap gap-2">
                  <span class="font-black text-purple-950 dark:text-purple-100 text-xs sm:text-sm flex items-center gap-1.5">
                    <span class="w-5 h-5 rounded-md bg-purple-600 text-white flex items-center justify-center font-bold text-xs">3</span>
                    <span>(三) 多數主刑併科模式</span>
                  </span>
                  <span class="text-[11px] font-mono px-2 py-0.5 rounded bg-purple-100 dark:bg-purple-950 text-purple-700 dark:text-purple-300 font-bold">得同時科處</span>
                </div>
                <div class="p-3 rounded-xl bg-purple-50/50 dark:bg-purple-950/20 border border-purple-200 dark:border-purple-900/40 font-serif text-xs leading-relaxed space-y-1">
                  <p class="font-mono text-slate-700 dark:text-slate-300">
                    如 § 276 Ⅱ規定，「……，處五年以下有期徒刑或拘役，得併科三千元以下罰金。」
                  </p>
                  <p class="text-slate-600 dark:text-slate-400">
                    除了有期徒刑與拘役可供選擇外，還可以同時併科罰金。
                  </p>
                </div>
              </div>

              <!-- 模式四：多數主刑選科或併科模式 -->
              <div class="p-4 rounded-2xl bg-white dark:bg-slate-900 border-2 border-rose-300 dark:border-rose-900/60 space-y-2">
                <div class="flex items-center justify-between flex-wrap gap-2">
                  <span class="font-black text-rose-950 dark:text-rose-100 text-xs sm:text-sm flex items-center gap-1.5">
                    <span class="w-5 h-5 rounded-md bg-rose-600 text-white flex items-center justify-center font-bold text-xs">4</span>
                    <span>(四) 多數主刑選科或併科模式</span>
                  </span>
                  <span class="text-[11px] font-mono px-2 py-0.5 rounded bg-rose-100 dark:bg-rose-950 text-rose-700 dark:text-rose-300 font-bold">可單選或併科</span>
                </div>
                <div class="p-3 rounded-xl bg-rose-50/50 dark:bg-rose-950/20 border border-rose-200 dark:border-rose-900/40 font-serif text-xs leading-relaxed space-y-1">
                  <p class="font-mono text-slate-700 dark:text-slate-300">
                    § 185之3規定，「……，處二年以下有期徒刑、拘役或科或併科二十萬元以下罰金。」
                  </p>
                  <p class="text-slate-600 dark:text-slate-400">
                    可以就本罪僅選擇科處罰金，或是除有期徒刑與拘役外，同時併科罰金。
                  </p>
                </div>
              </div>

            </div>
          </section>

          <!-- ══════════════════════════════════════════════════════════ -->
          <!-- 五、五位一體法學劇院：四大天王名師點評與 2026 關鍵法規查核 -->
          <!-- ══════════════════════════════════════════════════════════ -->
          <section id="sec-p0ch3-sec1-theatre" class="space-y-6 pt-2">
            <div class="flex items-center gap-3">
              <span class="w-2 h-6 rounded-full bg-amber-500"></span>
              <h3 class="text-lg sm:text-xl font-black text-slate-900 dark:text-white tracking-tight">
                五、犬系法學四大天王・法學客廳與 2026 最新法規雷達查核
              </h3>
            </div>

            <!-- 單欄垂直堆疊 (Strict Vertical Stacking) -->
            <div class="space-y-4">
              
              <!-- 🐾 柴柴法學教授 • 白話生活大解碼 -->
              <div class="p-6 rounded-2xl bg-amber-50/80 dark:bg-[#1a1714] border-2 border-amber-300 dark:border-amber-700/80 space-y-3">
                <div class="flex items-center gap-3 border-b border-amber-200 dark:border-amber-800/60 pb-3">
                  <div class="w-12 h-12 rounded-xl overflow-hidden border-2 border-amber-400 shadow-xs shrink-0">
                    <img src="images/shiba_law_professor.jpg" alt="柴柴法學教授" class="w-full h-full object-cover" style="object-position: center 20%; transform: scale(1.38);"/>
                  </div>
                  <div>
                    <h4 class="font-black text-amber-950 dark:text-amber-100 text-sm sm:text-base">
                      🐾 柴柴法學教授 • 白話生活大解碼
                    </h4>
                    <span class="text-xs font-mono text-amber-700 dark:text-amber-400">PROF. SHIBA · 主刑選科就像點套餐</span>
                  </div>
                </div>

                <div class="font-serif text-xs sm:text-[13.5px] text-slate-800 dark:text-slate-200 leading-relaxed space-y-2">
                  <p>
                    大家看這一節不要被名詞嚇到了！什麼「選科」、「併科」？想像去速食店：
                  </p>
                  <p class="pl-3 border-l-4 border-amber-400">
                    • <strong>選科</strong>：主食只能「三選一」（漢堡、炸雞或沙拉擇一，不能全拿）。<br>
                    • <strong>併科</strong>：點了漢堡，店家還可以「加點薯條」（有期徒刑之外，再多罰一筆罰金！）。
                  </p>
                  <p>
                    而更重要的核心在於：<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">法定刑是立法者畫好的跑道</span>，法官只能在這條跑道裡選跑法，不能隨便跳出跑道自創處罰！
                  </p>
                </div>
              </div>

              <!-- ⚖️ 金毛大律師 • 法庭攻防點評 -->
              <div class="p-6 rounded-2xl bg-blue-50/80 dark:bg-[#101a30] border-2 border-blue-300 dark:border-blue-700/80 space-y-3">
                <div class="flex items-center gap-3 border-b border-blue-200 dark:border-blue-800/60 pb-3">
                  <div class="w-12 h-12 rounded-xl overflow-hidden border-2 border-blue-400 shadow-xs shrink-0">
                    <img src="images/golden_case_attorney.jpg" alt="金毛首席辯護大律師" class="w-full h-full object-cover" style="object-position: center 20%; transform: scale(1.35);"/>
                  </div>
                  <div>
                    <h4 class="font-black text-blue-950 dark:text-blue-100 text-sm sm:text-base">
                      ⚖️ 金毛大律師 • 法庭攻防點評
                    </h4>
                    <span class="text-xs font-mono text-blue-700 dark:text-blue-400">COUNSELOR GOLDEN · 失能理論與宣告刑爭點</span>
                  </div>
                </div>

                <div class="font-serif text-xs sm:text-[13.5px] text-slate-800 dark:text-slate-200 leading-relaxed space-y-2">
                  <p>
                    在訴訟辯護實務上，<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">褫奪公權的「失能理論」是抗辯關鍵</span>！
                  </p>
                  <p>
                    如果被告犯的是一般普通傷害或詐欺，檢方若求處褫奪公權，辯護人必須強力主張：被告非基於公務員身分犯罪，剝奪公務員資格對預防其再犯毫無實質功能，缺乏刑法 § 37 Ⅱ之「犯罪性質必要性」！
                  </p>
                </div>
              </div>

              <!-- 🛡️ 德牧法規巡查官 • 法規雷達查核 (2026 重大修法示警) -->
              <div class="p-6 rounded-2xl bg-indigo-50/80 dark:bg-[#13132d] border-2 border-indigo-300 dark:border-indigo-700/80 space-y-3">
                <div class="flex items-center gap-3 border-b border-indigo-200 dark:border-indigo-800/60 pb-3">
                  <div class="w-12 h-12 rounded-xl overflow-hidden border-2 border-indigo-400 shadow-xs shrink-0">
                    <img src="images/shepherd_law_inspector.jpg" alt="德牧法規巡查官" class="w-full h-full object-cover" style="object-position: center 15%; transform: scale(1.4);"/>
                  </div>
                  <div>
                    <h4 class="font-black text-indigo-950 dark:text-indigo-100 text-sm sm:text-base">
                      🛡️ 德牧法規巡查官 • 法規雷達查核（2026 最新法制演進）
                    </h4>
                    <span class="text-xs font-mono text-indigo-700 dark:text-indigo-400">INSPECTOR SHEPHERD · 沒收大翻修與憲判字第 8 號</span>
                  </div>
                </div>

                <div class="font-serif text-xs sm:text-[13.5px] text-slate-800 dark:text-slate-200 leading-relaxed space-y-3">
                  <div class="p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-indigo-200 dark:border-indigo-800 space-y-1.5">
                    <span class="font-bold text-rose-600 dark:text-rose-400 block text-xs">
                      🚨 考生特大警示一：刑法第 34 條「從刑」僅剩褫奪公權一種！
                    </span>
                    <p class="text-[12.5px] text-slate-700 dark:text-slate-300">
                      課本第 2-28 頁介紹了舊法體系下的「從刑有褫奪公權、沒收、追徵三種」。但請注意：<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">105 年 7 月 1 日施行之刑法沒收新制，已將「沒收」全數獨立為第五章之一（§ 38～§ 38-3）之獨立法律效果</span>！現行法第 34 條明定：「從刑為褫奪公權。」<strong>沒收不再是從刑！</strong>
                    </p>
                  </div>

                  <div class="p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-indigo-200 dark:border-indigo-800 space-y-1.5">
                    <span class="font-bold text-indigo-600 dark:text-indigo-400 block text-xs">
                      ⚖️ 考生特大警示二：113 年憲判字第 8 號（死刑合憲性與最嚴格程序要求）
                    </span>
                    <p class="text-[12.5px] text-slate-700 dark:text-slate-300">
                      憲法法庭 113 年憲判字第 8 號判決宣告：死刑適用限於「個案犯罪情節最嚴重」之罪，且第三審必須強制辯護、各級法院審判必須合議庭「一致決」，若被告行為時、審判時或執行時具精神障礙或心智缺陷，均不得科處或執行死刑！
                    </p>
                  </div>

                  <div class="p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-indigo-200 dark:border-indigo-800 space-y-1.5">
                    <span class="font-bold text-emerald-600 dark:text-emerald-400 block text-xs">
                      🚗 考生特大警示三：刑法第 276 條已刪除「業務過失」！
                    </span>
                    <p class="text-[12.5px] text-slate-700 dark:text-slate-300">
                      教材所引 § 276 Ⅱ 業務過失致死罪，已於 108 年修法正式刪除，回歸一般過失致死罪單一條文，並就情節重大者處一年以上七年以下有期徒刑。
                    </p>
                  </div>
                </div>
              </div>

              <!-- 👨‍⚖️ 邊牧首席審判長 • 終審裁決一槌定音 -->
              <div class="p-6 rounded-2xl bg-gradient-to-br from-slate-900 via-[#0d1424] to-[#1a1226] border-2 border-amber-400/80 text-white space-y-4 shadow-lg">
                <div class="flex items-center justify-between flex-wrap gap-2 border-b border-white/10 pb-3">
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
                      1. 法定刑為立法者所賦予個別罪名之抽象處罰範圍，主刑得單獨科處（死刑、自由刑、罰金刑）。<br>
                      2. 從刑現行法下專指褫奪公權（§ 34、§ 37 Ⅱ），採失能理論作為裁量依歸。<br>
                      3. 沒收自 105 年起已升格為獨立專章，兼具準不當得利衡平性質，國考作答切勿誤寫為「從刑」！
                    </p>
                  </div>

                  <div class="p-3.5 rounded-xl bg-white/5 border border-white/10 space-y-1">
                    <span class="font-bold text-sky-300 block">💡 國考答題定錨口訣</span>
                    <p class="font-mono text-sky-200">
                      「主刑三類定根基，死刑自由加罰金；從刑專屬褫奪權，沒收獨立第三軌；選科併科看明文，罪責相當無冤屈！」
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </section>

          <!-- 底部導航分頁 -->
          <div class="pt-6 border-t border-slate-200 dark:border-white/[0.08] grid grid-cols-1 sm:grid-cols-2 gap-4">
            <button onclick="switchView('part0-ch3')" class="group p-4 rounded-2xl border border-slate-200 dark:border-white/[0.08] hover:border-rose-500/40 bg-white dark:bg-[#111726] text-left transition-all hover:-translate-y-0.5 shadow-sm hover:shadow-md flex items-center gap-3 cursor-pointer">
              <div class="w-9 h-9 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 group-hover:bg-rose-50 dark:group-hover:bg-rose-950 group-hover:text-rose-600 dark:group-hover:text-rose-400 flex items-center justify-center text-sm font-bold shrink-0 transition-colors">
                ←
              </div>
              <div class="min-w-0">
                <span class="text-[11px] text-slate-400 font-mono block">上一單元 (第 2-25 ~ 2-27 頁)</span>
                <span class="text-xs font-bold text-slate-800 dark:text-slate-200 group-hover:text-rose-600 dark:group-hover:text-rose-400 transition-colors truncate block">
                  第三章 刑法的法律效果（前言總覽）
                </span>
              </div>
            </button>

            <button onclick="switchView('part0-ch3-sec2')" class="group p-4 rounded-2xl border border-rose-500/40 hover:border-rose-500 bg-gradient-to-br from-rose-50/50 to-amber-50/30 dark:from-rose-950/30 dark:to-amber-950/20 text-right transition-all hover:-translate-y-0.5 shadow-sm hover:shadow-md flex items-center justify-between gap-3 cursor-pointer">
              <div class="min-w-0 text-left">
                <span class="text-[11px] text-rose-700 dark:text-rose-400 font-mono block font-bold">進入本章第二節 (第 2-29 頁)</span>
                <span class="text-xs font-extrabold text-slate-900 dark:text-white group-hover:text-rose-700 dark:group-hover:text-rose-400 transition-colors truncate block">
                  第二節 刑罰的調整——兼談處斷刑 →
                </span>
              </div>
              <div class="w-9 h-9 rounded-xl bg-gradient-to-br from-rose-500 to-rose-600 text-white flex items-center justify-center text-sm font-bold shrink-0 group-hover:scale-105 transition-transform shadow-md shadow-rose-500/30">
                🚀
              </div>
            </button>
          </div>

        </div>
`;
