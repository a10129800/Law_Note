/**
 * view-part0-ch3-sec2.js
 * 第零篇 第三章 第二節 刑罰的調整——兼談處斷刑（教材第 2-29 ～ 2-31 頁 原文體系精讀）
 * 遵循 AGENTS.md 最高行為憲法規範：
 * 1. 1:1 教科書原文忠實收錄（無錯字、零腦補）
 * 2. 嚴禁 grid-cols-2 橫向並排，嚴格單欄垂直上下堆疊 (Strict Vertical Stacking)
 * 3. 純紅底線規範（嚴禁刺眼全紅文字）
 * 4. 犬系法學四大天王五位一體劇院與 2026 最新法條動態備註（釋字 775 號違憲裁量、自首得減裁量權、釋字 812 號強制工作違憲）
 * 5. Zero-CORS 本機雙擊秒開相容
 */
window.APP_VIEWS = window.APP_VIEWS || {};
window.APP_VIEWS['viewPart0Ch3Sec2'] = window.APP_VIEWS['part0Ch3Sec2'] = window.APP_VIEWS['part0-ch3-sec2'] = `
        <!-- VIEW: 第零篇 第三章 第二節 刑罰的調整——兼談處斷刑 (教材第 2-29 ～ 2-31 頁) -->
        <div id="viewPart0Ch3Sec2" class="fade-enter hidden space-y-8">
          
          <!-- 頂部麵包屑導航與快速跳轉 -->
          <div class="flex items-center justify-between gap-4 border-b border-slate-200/80 dark:border-white/10 pb-3">
            <nav class="flex items-center gap-2 text-xs font-medium text-slate-500 dark:text-slate-400 flex-wrap">
              <button onclick="switchView('part0')" class="hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer">第零篇</button>
              <span>/</span>
              <button onclick="switchView('part0-ch3')" class="hover:text-rose-600 dark:hover:text-rose-400 transition-colors cursor-pointer">第三章 刑法的法律效果</button>
              <span>/</span>
              <span class="text-rose-600 dark:text-rose-400 font-bold">第二節 刑罰的調整——兼談處斷刑</span>
            </nav>
            <div class="flex items-center gap-2">
              <button onclick="switchView('part0-ch3-sec1')" class="text-xs text-slate-500 dark:text-slate-400 hover:text-rose-600 dark:hover:text-rose-400 flex items-center gap-1 transition-colors shrink-0 font-medium cursor-pointer">
                <span>← 上一單元：第一節 刑罰的種類</span>
              </button>
            </div>
          </div>

          <!-- 章節大標題 -->
          <div class="space-y-2">
            <div class="flex items-center gap-2 text-rose-600 dark:text-rose-400 font-mono text-xs font-bold">
              <span>第零篇・第三章・第二節</span>
              <span class="px-2 py-0.5 rounded-md bg-rose-50 dark:bg-rose-950/40 text-[11px] border border-rose-200 dark:border-rose-900/50">
                教材第 2-29 ～ 2-31 頁 原文體系全收錄
              </span>
            </div>
            <h2 class="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
              第二節 刑罰的調整——兼談處斷刑
            </h2>
            <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-serif leading-relaxed">
              法定刑之伸縮調整：處斷刑概念與「先加後減」法則、刑罰加重事由累犯（§ 47～§ 49）、刑罰減輕事由自首（§ 62）及自首 vs 投案 vs 自白三大界線辨析。
            </p>
          </div>

          <!-- ══════════════════════════════════════════════════════════ -->
          <!-- 一、處斷刑之概念與加減通則 (教材第 2-29 頁) -->
          <!-- ══════════════════════════════════════════════════════════ -->
          <section id="sec-p0ch3-sec2-concept" class="space-y-6 pt-2">
            <div class="flex items-center gap-3">
              <span class="w-2 h-6 rounded-full bg-rose-600"></span>
              <h3 class="text-lg sm:text-xl font-black text-slate-900 dark:text-white tracking-tight">
                一、處斷刑之概念與加減通則（教材第 2-29 頁）
              </h3>
            </div>

            <div class="p-6 rounded-3xl border border-slate-200 dark:border-white/[0.08] bg-white dark:bg-[#101623] shadow-sm space-y-6">
              
              <!-- 旗艦卡片：處斷刑定義與法條原貌 -->
              <div class="p-6 rounded-2xl bg-gradient-to-br from-rose-50 via-pink-50/40 to-slate-50 dark:from-[#2a0e17] dark:via-[#1e1322] dark:to-[#0f172a] border-2 border-rose-300 dark:border-rose-500/80 border-l-[8px] border-l-rose-600 dark:border-l-rose-400 shadow-sm space-y-4">
                <div class="flex items-center justify-between flex-wrap gap-2">
                  <div class="flex items-center gap-2.5">
                    <span class="text-2xl">📐</span>
                    <div>
                      <span class="font-black text-sm sm:text-base text-rose-950 dark:text-rose-100">
                        處斷刑之本質：法定刑加重或減輕後之具體刑罰範圍
                      </span>
                      <span class="block text-[11px] font-mono font-bold text-rose-600 dark:text-rose-400 tracking-wider">
                        MODIFIED STATUTORY PENALTY · 先加後減原則
                      </span>
                    </div>
                  </div>
                  <span class="text-xs font-mono font-bold px-3 py-1 rounded-lg bg-rose-600 text-white shadow-xs">
                    教材第 2-29 頁
                  </span>
                </div>

                <!-- 1:1 原文呈現 -->
                <div class="p-4 rounded-xl bg-white dark:bg-slate-900 border-2 border-rose-200 dark:border-rose-900/60 font-serif text-xs sm:text-[14px] text-slate-800 dark:text-slate-200 leading-relaxed space-y-3">
                  <p class="text-justify indent-6">
                    法定刑只是立法者對該犯罪的最基本法律效果，此外還有某些加重或減輕刑罰範圍的調整事由，而<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">經過調整的刑罰範圍就被稱作處斷刑</span>。
                  </p>
                  <p class="text-justify indent-6">
                    有關處斷刑之調整，刑法分則也有零星規定，例如 § 134：「公務員假借職務上之權利、機會或方法，以故意犯本章以外之罪者，加重其刑至二分之一。」至於 § 347 Ⅴ規定：「犯第一項之罪，未經取贖而釋放被害人者，減輕其刑；取贖後而釋放被害人者，得減輕其刑。」乃是減輕。
                  </p>
                  <p class="text-justify indent-6">
                    有關加重、減輕的標準與方法，請自行參考 § 63～§ 73（<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">不過請記得：先加後減</span>）。以下要介紹的是兩種影響處斷刑的總則規定——<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">累犯加重以及自首減輕</span>。
                  </p>
                </div>

                <!-- 分則 vs 總則 處斷刑調整體系對照卡片 (Strict Vertical Stacking) -->
                <div class="space-y-2 text-xs font-serif">
                  <div class="p-3 rounded-lg bg-white dark:bg-slate-900 border border-rose-200 dark:border-rose-900/60 flex items-start gap-2">
                    <span class="font-bold text-rose-600 dark:text-rose-400 shrink-0">🏛️ 分則零星加減：</span>
                    <span class="text-slate-800 dark:text-slate-200">
                      如刑法 § 134 公務員犯罪加重、§ 347 Ⅴ 擄人勒贖釋放被害人必減或得減。
                    </span>
                  </div>
                  <div class="p-3 rounded-lg bg-white dark:bg-slate-900 border border-rose-200 dark:border-rose-900/60 flex items-start gap-2">
                    <span class="font-bold text-blue-600 dark:text-blue-400 shrink-0">⚖️ 總則兩大核心：</span>
                    <span class="text-slate-800 dark:text-slate-200">
                      <strong>累犯加重（§ 47～§ 49）</strong> ➔ 刑罰加重事由；<strong>自首減輕（§ 62）</strong> ➔ 刑罰減輕事由。
                    </span>
                  </div>
                  <div class="p-2.5 rounded-lg bg-amber-50/80 dark:bg-amber-950/40 text-amber-900 dark:text-amber-200 text-[11.5px] font-bold">
                    ★ 鐵律：數種加重減輕事由競合時，一律遵循<strong>「先加後減」</strong>之順序調整處斷刑（§ 71 Ⅰ）！
                  </div>
                </div>

              </div>

            </div>
          </section>

          <!-- ══════════════════════════════════════════════════════════ -->
          <!-- 二、刑罰加重事由 ➔ 累犯 (教材第 2-29～2-30 頁) -->
          <!-- ══════════════════════════════════════════════════════════ -->
          <section id="sec-p0ch3-sec2-recidivism" class="space-y-6 pt-2">
            <div class="flex items-center gap-3">
              <span class="w-2 h-6 rounded-full bg-blue-600"></span>
              <h3 class="text-lg sm:text-xl font-black text-slate-900 dark:text-white tracking-tight">
                二、刑罰加重事由 ➔ 累犯（§ 47～§ 49）（教材第 2-29 ～ 2-30 頁）
              </h3>
            </div>

            <div class="p-6 rounded-3xl border border-slate-200 dark:border-white/[0.08] bg-white dark:bg-[#101623] shadow-sm space-y-6">
              
              <!-- 累犯基本定義與學理批評 -->
              <div class="p-5 rounded-2xl bg-white dark:bg-slate-900 border-2 border-blue-300 dark:border-blue-900/60 border-l-[8px] border-l-blue-600 shadow-xs space-y-3">
                <div class="flex items-center justify-between flex-wrap gap-2">
                  <span class="font-black text-blue-950 dark:text-blue-100 text-base sm:text-lg flex items-center gap-2">
                    <span>🔁</span>
                    <span>累犯之核心概念與法理爭議</span>
                  </span>
                  <span class="text-xs font-mono font-bold px-2.5 py-0.5 rounded bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300">
                    § 47 Ⅰ · 加重本刑至二分之一
                  </span>
                </div>

                <div class="font-serif text-xs sm:text-[13.5px] text-slate-800 dark:text-slate-200 leading-relaxed space-y-2 text-justify">
                  <p>
                    當犯罪人經裁判確定而受一定徒刑之宣告，<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">經執行完畢或赦免後，5年之內又再故意犯有期徒刑以上之罪</span>，便是累犯，<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">可以加重本刑至二分之一</span>。
                  </p>
                  <p class="text-slate-600 dark:text-slate-400 pl-3 border-l-4 border-slate-300 dark:border-slate-700 text-xs">
                    學理上對累犯加重有諸多批評，例如用前科作為加重刑罰的理由，違反重複評價禁止原則與罪責原則；況且有時短時間內的犯罪行為，反而還可能是減輕刑罰的依據。
                  </p>
                </div>
              </div>

              <!-- (一) 累犯之成立要件 (Strict Vertical Stacking) -->
              <div class="space-y-4">
                <h4 class="text-sm sm:text-base font-black text-slate-900 dark:text-white flex items-center gap-1.5">
                  <span class="w-2 h-4 rounded bg-indigo-600"></span>
                  <span>(一) 累犯成立五大要件拆解</span>
                </h4>

                <!-- 要件 1：行為人必須曾受徒刑之執行 -->
                <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-800 space-y-2 text-xs font-serif">
                  <span class="font-bold text-slate-900 dark:text-white block text-sm">
                    1. 行為人必須曾受徒刑之執行：
                  </span>
                  <ul class="space-y-1.5 pl-4 list-disc text-slate-700 dark:text-slate-300">
                    <li>(1) 若僅受<span class="font-bold text-rose-600 dark:text-rose-400">拘役、罰金或易服勞役</span>之執行，<strong>無成立累犯之餘地</strong>。</li>
                    <li>(2) 若受有期徒刑宣告，但<span class="font-bold text-blue-600 dark:text-blue-400">轉為易科罰金而執行</span>，仍屬有期徒刑之執行，<strong>有成立累犯的可能</strong>。</li>
                    <li>(3) 受有期徒刑宣告與緩刑宣告，<strong>若緩刑未撤銷，即未受有期徒刑之執行，無由構成累犯</strong>；若緩刑遭撤銷，執行徒刑宣告後，仍可能成立累犯。</li>
                  </ul>
                  <!-- 案例插卡 -->
                  <div class="p-3 rounded-lg bg-amber-50/80 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800/60 text-[12px] text-slate-800 dark:text-slate-200 leading-relaxed">
                    <strong class="text-amber-900 dark:text-amber-200">★ 課本經典舉例：</strong>若甲受7個月有期徒刑之宣告，緩刑2年，卻在緩刑期間故意犯他罪使緩刑遭撤銷，因而入獄服刑7個月，服刑期滿後出獄立馬故意再犯強盜罪，<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">此時甲便是累犯</span>。
                  </div>
                </div>

                <!-- 要件 2：犯罪必須發生於徒刑執行完畢或赦免後 5 年內 -->
                <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-800 space-y-1.5 text-xs font-serif text-slate-700 dark:text-slate-300 leading-relaxed">
                  <span class="font-bold text-slate-900 dark:text-white block text-sm">
                    2. 犯罪必須發生於徒刑執行完畢或赦免後5年內：
                  </span>
                  <p>
                    必須是<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">「執行完畢」後犯罪</span>，若行為人受判決確定但還沒執行，或在執行中，或在假釋中復再犯罪（假釋只是暫時釋放，並還沒有執行完畢），<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">均無累犯之適用</span>。
                  </p>
                </div>

                <!-- 要件 3：行為人「故意」再犯「有期徒刑以上」之罪 -->
                <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-800 space-y-1.5 text-xs font-serif text-slate-700 dark:text-slate-300 leading-relaxed">
                  <span class="font-bold text-slate-900 dark:text-white block text-sm">
                    3. 行為人「故意」再犯「有期徒刑以上」之罪：
                  </span>
                  <p>
                    對於累犯而言，<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">前罪不以故意犯罪為限，但再犯之後罪必須是故意犯</span>。
                  </p>
                </div>

                <!-- 要件 4：前罪非於外國法院受裁判 (§ 49) -->
                <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-800 space-y-1.5 text-xs font-serif text-slate-700 dark:text-slate-300 leading-relaxed">
                  <span class="font-bold text-slate-900 dark:text-white block text-sm">
                    4. 前罪非於外國法院受裁判（§ 49）：
                  </span>
                  <p>
                    在受外國法院裁判之罪，不適用累犯之規定。
                  </p>
                </div>

                <!-- 要件 5：準累犯 (§ 47 Ⅱ) -->
                <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-800 space-y-1.5 text-xs font-serif text-slate-700 dark:text-slate-300 leading-relaxed">
                  <span class="font-bold text-slate-900 dark:text-white block text-sm">
                    5. 準累犯（§ 47 Ⅱ）：
                  </span>
                  <p>
                    § 98 Ⅱ關於因強制工作而免其刑之執行者，於受強制工作處分之執行完畢或一部之執行而免除後，5年內故意再犯有期徒刑以上之罪者，以累犯論。
                  </p>
                </div>

                <!-- (二) 法律效果 -->
                <div class="p-4 rounded-xl bg-blue-50/80 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800 text-xs font-serif space-y-1">
                  <span class="font-bold text-blue-900 dark:text-blue-200 block text-sm">
                    (二) 累犯法律效果：加重本刑至二分之一
                  </span>
                  <p class="text-slate-700 dark:text-slate-300">
                    加重本刑至二分之一。法院必須加重，但加重幅度是一種自由裁量，只不過上限為二分之一。
                  </p>
                </div>

              </div>

            </div>
          </section>

          <!-- ══════════════════════════════════════════════════════════ -->
          <!-- 三、刑罰減輕事由 ➔ 自首 (教材第 2-30～2-31 頁) -->
          <!-- ══════════════════════════════════════════════════════════ -->
          <section id="sec-p0ch3-sec2-surrender" class="space-y-6 pt-2">
            <div class="flex items-center gap-3">
              <span class="w-2 h-6 rounded-full bg-emerald-600"></span>
              <h3 class="text-lg sm:text-xl font-black text-slate-900 dark:text-white tracking-tight">
                三、刑罰減輕事由 ➔ 自首（§ 62）（教材第 2-30 ～ 2-31 頁）
              </h3>
            </div>

            <div class="p-6 rounded-3xl border border-slate-200 dark:border-white/[0.08] bg-white dark:bg-[#101623] shadow-sm space-y-6">
              
              <!-- 自首核心概念卡片 -->
              <div class="p-5 rounded-2xl bg-white dark:bg-slate-900 border-2 border-emerald-300 dark:border-emerald-900/60 border-l-[8px] border-l-emerald-600 shadow-xs space-y-3">
                <div class="flex items-center justify-between flex-wrap gap-2">
                  <span class="font-black text-emerald-950 dark:text-emerald-100 text-base sm:text-lg flex items-center gap-2">
                    <span>🕊️</span>
                    <span>自首之核心定義與立法目的</span>
                  </span>
                  <span class="text-xs font-mono font-bold px-2.5 py-0.5 rounded bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300">
                    § 62 · 得減輕其刑
                  </span>
                </div>

                <div class="font-serif text-xs sm:text-[13.5px] text-slate-800 dark:text-slate-200 leading-relaxed text-justify">
                  <p>
                    <span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">行為人主動向特定機關申告自己尚未被發覺的犯罪行為，並且願意接受法院之審判者</span>，得因自首而減輕其刑。
                  </p>
                </div>
              </div>

              <!-- (一) 自首之成立要件 (Strict Vertical Stacking) -->
              <div class="space-y-4">
                <h4 class="text-sm sm:text-base font-black text-slate-900 dark:text-white flex items-center gap-1.5">
                  <span class="w-2 h-4 rounded bg-emerald-600"></span>
                  <span>(一) 自首成立三大要件</span>
                </h4>

                <!-- 要件 1：行為人申告自己之犯罪 -->
                <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-800 space-y-2 text-xs font-serif text-slate-700 dark:text-slate-300 leading-relaxed text-justify">
                  <span class="font-bold text-slate-900 dark:text-white block text-sm">
                    1. 行為人申告自己之犯罪：
                  </span>
                  <p>
                    並無任何形式要件限制（63台上1101例），甚至可以委託他人代為行之（50台上65例），不過必須是申告自己的犯罪，若是申告他人之犯罪，係屬告訴或告發。
                  </p>
                  <p class="p-2.5 rounded-lg bg-amber-50/80 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800/60 text-slate-800 dark:text-slate-200">
                    <strong>★ 重點裁判要旨：</strong>還有一個重點，縱或行為人自首，<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">嗣後卻又翻供甚至否認犯罪之行為，依然不影響先前自首的效力</span>（99台上7333決）。
                  </p>
                </div>

                <!-- 要件 2：犯罪尚未被偵查機關發覺 (辨析自首 vs 投案 vs 自白) -->
                <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-800 space-y-3 text-xs font-serif text-slate-700 dark:text-slate-300 leading-relaxed text-justify">
                  <span class="font-bold text-slate-900 dark:text-white block text-sm">
                    2. 犯罪尚未被偵查機關發覺：
                  </span>
                  <p>
                    所謂未發覺，指犯罪事實尚未被發覺，或發知有犯罪事實，但不知犯人為何人的情況。以<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">「有權偵查機關」是否發覺為準</span>（20上1721例）。
                  </p>

                  <!-- 自首 vs 投案 vs 自白 三大概念比較卡片 -->
                  <div class="space-y-2 pt-1">
                    <div class="p-2.5 rounded-lg bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800">
                      <strong class="text-emerald-800 dark:text-emerald-300">① 自首：</strong>有權偵查機關未發覺犯罪或不知犯人前，主動申告受審。
                    </div>
                    <div class="p-2.5 rounded-lg bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800">
                      <strong class="text-amber-800 dark:text-amber-300">② 投案：</strong>若有權偵查機關已經鎖定犯罪嫌疑人，即無自首之可能，充其量僅能稱之為<strong>投案</strong>。
                    </div>
                    <div class="p-2.5 rounded-lg bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800">
                      <strong class="text-blue-800 dark:text-blue-300">③ 自白：</strong>至於行為人不利於己的犯罪陳述，則稱之為<strong>自白</strong>。
                    </div>
                  </div>
                </div>

                <!-- 要件 3：申告後必須自動接受裁判 -->
                <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-800 space-y-1.5 text-xs font-serif text-slate-700 dark:text-slate-300 leading-relaxed text-justify">
                  <span class="font-bold text-slate-900 dark:text-white block text-sm">
                    3. 申告後必須自動接受裁判：
                  </span>
                  <p>
                    倘若申告後拒不到案或逃逸無蹤，無法成立自首（這樣根本就是向檢警機關挑釁，參考94台上5690決）。
                  </p>
                </div>

                <!-- (二) 法律效果 -->
                <div class="p-4 rounded-xl bg-emerald-50/80 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-xs font-serif space-y-1">
                  <span class="font-bold text-emerald-900 dark:text-emerald-200 block text-sm">
                    (二) 法律效果：得減輕其刑
                  </span>
                  <p class="text-slate-700 dark:text-slate-300">
                    法律效果為<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">得減輕其刑</span>（94年修法後已由「必減」改為「得減」，賦予法院審酌真誠悔悟與犯後態度之自由裁量空間）。
                  </p>
                </div>

              </div>

            </div>
          </section>

          <!-- ══════════════════════════════════════════════════════════ -->
          <!-- 四、五位一體法學劇院：四大天王名師點評與 2026 關鍵法規查核 -->
          <!-- ══════════════════════════════════════════════════════════ -->
          <section id="sec-p0ch3-sec2-theatre" class="space-y-6 pt-2">
            <div class="flex items-center gap-3">
              <span class="w-2 h-6 rounded-full bg-amber-500"></span>
              <h3 class="text-lg sm:text-xl font-black text-slate-900 dark:text-white tracking-tight">
                四、犬系法學四大天王・法學客廳與 2026 最新法規雷達查核
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
                    <span class="text-xs font-mono text-amber-700 dark:text-amber-400">PROF. SHIBA · 累犯拉皮條與自首快易通</span>
                  </div>
                </div>

                <div class="font-serif text-xs sm:text-[13.5px] text-slate-800 dark:text-slate-200 leading-relaxed space-y-2">
                  <p>
                    處斷刑就是法官手裡的「彈性伸縮尺」！法定刑是原始長度，遇到<strong>累犯</strong>尺就拉長（加重至二分之一），遇到<strong>自首</strong>尺就縮短（得減輕）。
                  </p>
                  <p>
                    大家特別記清楚：自首必須是<strong>「警察還不知道是你幹的」</strong>時候自己跑去投案！如果警察已經調了監視器、拿著你的照片在門口堵你，你這時候喊「我承認」，那叫<strong>投案加自白</strong>，不是自首啦！
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
                    <span class="text-xs font-mono text-blue-700 dark:text-blue-400">COUNSELOR GOLDEN · 翻供抗辯與自首效力防護盾</span>
                  </div>
                </div>

                <div class="font-serif text-xs sm:text-[13.5px] text-slate-800 dark:text-slate-200 leading-relaxed space-y-2">
                  <p>
                    在法庭審理實戰中，檢察官常常以「被告開庭後否認犯罪、狡辯翻供」為由，主張被告自首無悔意、不應適用 § 62 減刑。
                  </p>
                  <p>
                    辯護大律師此時必須亮出 <span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">最高法院 99 年台上字第 7333 號判決</span>：自首效力於向偵查機關自首並願接受裁判時即已確鑿成立！翻供乃被告憲法防禦權行使，絕不能溯及消滅自首之既成效力！
                  </p>
                </div>
              </div>

              <!-- 🛡️ 德牧法規巡查官 • 法規雷達查核 (2026 最新法制演進) -->
              <div class="p-6 rounded-2xl bg-indigo-50/80 dark:bg-[#13132d] border-2 border-indigo-300 dark:border-indigo-700/80 space-y-3">
                <div class="flex items-center gap-3 border-b border-indigo-200 dark:border-indigo-800/60 pb-3">
                  <div class="w-12 h-12 rounded-xl overflow-hidden border-2 border-indigo-400 shadow-xs shrink-0">
                    <img src="images/shepherd_law_inspector.jpg" alt="德牧法規巡查官" class="w-full h-full object-cover" style="object-position: center 15%; transform: scale(1.4);"/>
                  </div>
                  <div>
                    <h4 class="font-black text-indigo-950 dark:text-indigo-100 text-sm sm:text-base">
                      🛡️ 德牧法規巡查官 • 法規雷達查核（2026 最新法制演進）
                    </h4>
                    <span class="text-xs font-mono text-indigo-700 dark:text-indigo-400">INSPECTOR SHEPHERD · 釋字 775 號違憲限縮與釋字 812 號廢止強制工作</span>
                  </div>
                </div>

                <div class="font-serif text-xs sm:text-[13.5px] text-slate-800 dark:text-slate-200 leading-relaxed space-y-3">
                  <div class="p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-indigo-200 dark:border-indigo-800 space-y-1.5">
                    <span class="font-bold text-rose-600 dark:text-rose-400 block text-xs">
                      🚨 考生特大警示一：司法院釋字第 775 號解釋（累犯一律加重違憲）
                    </span>
                    <p class="text-[12.5px] text-slate-700 dark:text-slate-300">
                      刑法 § 47 Ⅰ 原規定「一律加重本刑至二分之一」，大法官於釋字 775 號宣告：不論情節輕重一律加重，於罪責不相當之微罪個案過苛違憲！<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">現行實務下，法院裁量審酌若被告不具特別惡性或無再犯實質危險，得裁量「不加重其刑」</span>！
                    </p>
                  </div>

                  <div class="p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-indigo-200 dark:border-indigo-800 space-y-1.5">
                    <span class="font-bold text-indigo-600 dark:text-indigo-400 block text-xs">
                      ⚖️ 考生特大警示二：司法院釋字第 812 號解釋（強制工作全數違憲廢除）
                    </span>
                    <p class="text-[12.5px] text-slate-700 dark:text-slate-300">
                      教材所引刑法 § 47 Ⅱ「準累犯」關於強制工作執行之規定，因司法院釋字第 812 號解釋已宣告刑法與保安處分執行法之「強制工作」處分全數違憲立即失效，故該款準累犯在強制工作面向上已無實質適用空間。
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
                      1. 處斷刑為法定刑加減後之界限，遵守先加後減之法定順位。<br>
                      2. 累犯核心在於「受徒刑執行完畢後 5 年內故意再犯有期徒刑以上之罪」，且必須受釋字 775 號合憲限縮拘束。<br>
                      3. 自首在「有權偵查機關未發覺犯罪或犯罪人」前自動投案受審，事後翻供不減損自首資格，法律效果為「得減輕其刑」。
                    </p>
                  </div>

                  <div class="p-3.5 rounded-xl bg-white/5 border border-white/10 space-y-1">
                    <span class="font-bold text-sky-300 block">💡 國考答題定錨口訣</span>
                    <p class="font-mono text-sky-200">
                      「處斷尺規先加減，累犯五年看執行；釋字七七五可免加，罪責相當防苛罰；自首未發願受審，得減裁量慎思刑！」
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </section>

          <!-- 底部導航分頁 -->
          <div class="pt-6 border-t border-slate-200 dark:border-white/[0.08] grid grid-cols-1 sm:grid-cols-2 gap-4">
            <button onclick="switchView('part0-ch3-sec1')" class="group p-4 rounded-2xl border border-slate-200 dark:border-white/[0.08] hover:border-rose-500/40 bg-white dark:bg-[#111726] text-left transition-all hover:-translate-y-0.5 shadow-sm hover:shadow-md flex items-center gap-3 cursor-pointer">
              <div class="w-9 h-9 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 group-hover:bg-rose-50 dark:group-hover:bg-rose-950 group-hover:text-rose-600 dark:group-hover:text-rose-400 flex items-center justify-center text-sm font-bold shrink-0 transition-colors">
                ←
              </div>
              <div class="min-w-0">
                <span class="text-[11px] text-slate-400 font-mono block">上一單元 (第 2-27 ~ 2-29 頁)</span>
                <span class="text-xs font-bold text-slate-800 dark:text-slate-200 group-hover:text-rose-600 dark:group-hover:text-rose-400 transition-colors truncate block">
                  第一節 刑罰的種類——兼談法定刑
                </span>
              </div>
            </button>

            <button onclick="switchView('part0-ch3-sec3')" class="group p-4 rounded-2xl border border-rose-500/40 hover:border-rose-500 bg-gradient-to-br from-rose-50/50 to-amber-50/30 dark:from-rose-950/30 dark:to-amber-950/20 text-right transition-all hover:-translate-y-0.5 shadow-sm hover:shadow-md flex items-center justify-between gap-3 cursor-pointer">
              <div class="min-w-0 text-left">
                <span class="text-[11px] text-rose-700 dark:text-rose-400 font-mono block font-bold">下一單元 (第 2-31 ~ 2-32 頁)</span>
                <span class="text-xs font-extrabold text-slate-900 dark:text-white group-hover:text-rose-700 dark:group-hover:text-rose-400 transition-colors truncate block">
                  第三節 刑罰的量定——兼談宣告刑 →
                </span>
              </div>
              <div class="w-9 h-9 rounded-xl bg-gradient-to-br from-rose-500 to-rose-600 text-white flex items-center justify-center text-sm font-bold shrink-0 group-hover:scale-105 transition-transform shadow-md shadow-rose-500/30">
                ⚖️
              </div>
            </button>
          </div>

        </div>
`;
