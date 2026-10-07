/**
 * view-part0-ch3-sec2.js
 * 第零篇 第三章 第二節 刑罰的調整——兼談處斷刑 (教材第 2-29 ～ 2-31 頁)
 * 依據多欄位Note Skill 規範：
 * 完整收錄處斷刑本質、加減標準與方法（先加後減）、
 * 累犯加重（成立五大要件、釋字775號審查）、
 * 自首減輕（成立三大要件、翻供不影響效力、自首 vs 投案 vs 自白）
 * 升級至 Image 2 頂級旗艦標準：具備三個「🐣 小白秒懂專區」、厚左邊框、高對比標籤與層次卡片
 */
window.APP_VIEWS = window.APP_VIEWS || {};
window.APP_VIEWS['viewPart0Ch3Sec2'] = window.APP_VIEWS['part0Ch3Sec2'] = window.APP_VIEWS['part0-ch3-sec2'] = `
        <!-- VIEW: 第零篇 第三章 第二節 刑罰的調整——兼談處斷刑 -->
        <div id="viewPart0Ch3Sec2" class="fade-enter hidden space-y-8">
          
          <!-- Breadcrumb & Back -->
          <div class="flex items-center justify-between gap-4 border-b border-slate-100 dark:border-white/[0.06] pb-3">
            <nav class="flex items-center gap-2 text-xs font-medium text-slate-400">
              <button onclick="switchView('part-0')" class="hover:text-blue-500 transition-colors">第零篇</button>
              <span>/</span>
              <button onclick="switchView('part0-chapter-3')" class="hover:text-indigo-500 transition-colors">第三章 刑法的法律效果</button>
              <span>/</span>
              <span class="text-indigo-600 dark:text-indigo-400 font-bold">第二節 刑罰的調整——兼談處斷刑</span>
            </nav>
            <button onclick="switchView('part0-ch3-sec1')" class="text-xs text-slate-400 hover:text-indigo-500 flex items-center gap-1 transition-colors cursor-pointer">
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
              </svg>
              <span>返回第一節 刑罰種類</span>
            </button>
          </div>

          <!-- Section Header Banner -->
          <div class="space-y-3">
            <div class="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-mono text-xs font-bold">
              <span>第零篇・第三章・第二節</span>
              <span class="px-2.5 py-0.5 rounded-full bg-indigo-50 dark:bg-indigo-950/60 text-[11px] border border-indigo-200 dark:border-indigo-900/50 text-indigo-700 dark:text-indigo-300">
                教材第 2-29 ～ 2-31 頁
              </span>
              <span class="px-2.5 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-[11px] border border-emerald-200 dark:border-emerald-900/50 text-emerald-700 dark:text-emerald-300 font-bold">
                處斷刑與量刑裁量
              </span>
            </div>
            <h2 class="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
              第二節 刑罰的調整——兼談處斷刑
            </h2>
            <p class="text-xs sm:text-sm font-bold text-blue-700 dark:text-blue-300 leading-relaxed">
              法定刑之調整事由（先加後減法則）、累犯加重事由（§ 47～§ 49 與釋字 775 號裁量審查）、自首減輕事由（§ 62 三大要件與自首/投案/自白辨析）
            </p>
          </div>

          <!-- ==================== 一、處斷刑之概念與調整法則 ==================== -->
          <section id="sec-p0ch3-sec2-concept" class="space-y-5 pt-2">
            <div class="flex items-center justify-between border-b border-slate-100 dark:border-white/[0.06] pb-2">
              <div class="flex items-center gap-3">
                <span class="w-2 h-6 rounded-full bg-indigo-600"></span>
                <h3 class="text-lg sm:text-xl font-black text-slate-900 dark:text-white tracking-tight">
                  一、何謂處斷刑？基本概念與完全法條之調整（教材第 2-29 頁）
                </h3>
              </div>
              <span class="text-[11px] font-mono px-2 py-0.5 rounded bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 font-bold">
                法定刑 ➔ 處斷刑
              </span>
            </div>

            <!-- 天藍色概念焦點框 (Focus Box) -->
            <div class="p-6 sm:p-7 rounded-3xl bg-slate-50 dark:bg-slate-900/80 border-2 border-l-[8px] border-sky-500 space-y-4 shadow-sm">
              <div class="flex items-center justify-between border-b border-sky-200 dark:border-sky-800 pb-2">
                <h4 class="text-base font-black text-slate-900 dark:text-white flex items-center gap-2">
                  <span>📐</span>
                  <span>法定刑 vs. 處斷刑之本質區隔</span>
                </h4>
                <span class="text-xs font-mono font-bold px-2 py-0.5 rounded bg-white dark:bg-slate-800 text-[#0369a1] dark:text-sky-300 border border-sky-300 dark:border-sky-600">
                  PENALTY ADJUSTMENT
                </span>
              </div>

              <blockquote class="border-l-4 border-[#0284c7] pl-4 py-1 text-xs sm:text-sm text-[#0c4a6e] dark:text-sky-100 leading-relaxed italic space-y-1">
                <p>
                  「法定刑只是立法者對該犯罪的最基本法律效果，此外還有某些加重或減輕刑罰範圍的調整事由，而經過調整的刑罰範圍就被稱作處斷刑。」
                </p>
              </blockquote>

              <div class="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1 text-xs">
                <!-- 分則零星調整規定 -->
                <div class="p-4 rounded-2xl bg-white dark:bg-slate-950 border border-sky-200 dark:border-sky-800 space-y-2">
                  <span class="font-bold text-sky-900 dark:text-sky-200 flex items-center gap-1.5">
                    <span>📑</span>
                    <span>1. 分則零星調整事由範例</span>
                  </span>
                  <div class="space-y-1.5 text-[11.5px] text-slate-600 dark:text-slate-300">
                    <div class="p-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                      <strong>分則加重（§ 134）：</strong>公務員假借職務上之權力、機會或方法故意犯他罪者，<strong>加重其刑至二分之一</strong>。
                    </div>
                    <div class="p-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                      <strong>分則減輕（§ 347 Ⅴ）：</strong>擄人勒贖未經取贖而釋放被害人者，<strong>減輕其刑</strong>；取贖後釋放者，<strong>得減輕其刑</strong>。
                    </div>
                  </div>
                </div>

                <!-- 總則黃金法則：先加後減 -->
                <div class="p-4 rounded-2xl bg-white dark:bg-slate-950 border border-amber-200 dark:border-amber-800 space-y-2">
                  <span class="font-bold text-amber-900 dark:text-amber-200 flex items-center gap-1.5">
                    <span>⚖️</span>
                    <span>2. 加減標準與方法之黃金法則（§ 63 ～ § 73）</span>
                  </span>
                  <p class="text-[11.5px] text-slate-600 dark:text-slate-300 leading-relaxed">
                    刑法總則第 63 條至第 73 條明定刑罰加減之詳細換算標準（如死刑減輕為無期徒刑，無期徒刑減輕為 20 年以下有期徒刑等）。
                  </p>
                  <div class="p-2.5 rounded-xl bg-amber-100/80 dark:bg-amber-950/60 border border-amber-300 dark:border-amber-700 text-amber-950 dark:text-amber-200 font-bold text-xs flex items-center gap-2">
                    <span class="text-base">⭐</span>
                    <span>刑法 § 71 核心口訣：同時有加減事由時，「先加後減」！</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- 🐣 小白秒懂專區：處斷刑與先加後減法則 -->
            <div class="p-5 sm:p-6 rounded-3xl bg-amber-500/10 border-2 border-l-[8px] border-amber-500 space-y-4">
              <div class="flex items-center justify-between border-b border-amber-500/20 pb-2">
                <span class="font-extrabold text-amber-700 dark:text-amber-300 text-sm sm:text-base flex items-center gap-2">
                  <span class="animate-bounce">🐣</span> 小白秒懂專區：處斷刑與先加後減法則
                </span>
                <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-500/20 text-amber-800 dark:text-amber-200 font-bold">
                  RULE OF CALCULATION
                </span>
              </div>
              <p class="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                刑法不是法官隨便喊價的！從「法條原本寫的刑期（法定刑）」到「實際能量刑的範圍（處斷刑）」，背後有嚴格的數學次序：
              </p>
              <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div class="p-3.5 rounded-2xl bg-white dark:bg-slate-900 border border-amber-200 dark:border-amber-900/60 space-y-1.5">
                  <div class="font-bold text-amber-600 dark:text-amber-400 text-xs flex items-center gap-1.5">
                    <span>1️⃣</span> 什麼是處斷刑？
                  </div>
                  <p class="text-[11.5px] text-slate-600 dark:text-slate-300 leading-relaxed">
                    法定刑就像未打折的商品原價。若被告有「累犯加重」或「未遂/自首減輕」，法官必須先依法<strong>把上下限重新計算</strong>，算出來的新區間就是<strong>處斷刑</strong>。
                  </p>
                </div>
                <div class="p-3.5 rounded-2xl bg-white dark:bg-slate-900 border border-amber-200 dark:border-amber-900/60 space-y-1.5">
                  <div class="font-bold text-amber-600 dark:text-amber-400 text-xs flex items-center gap-1.5">
                    <span>2️⃣</span> 為什麼要「先加後減」？
                  </div>
                  <p class="text-[11.5px] text-slate-600 dark:text-slate-300 leading-relaxed">
                    若被告既是累犯（+1/2）又有自首（-1/2），依刑法 § 71 規定<strong>必須先加重、再減輕</strong>！因為先加後減會使刑期區間更加寬容，嚴禁倒過來計算。
                  </p>
                </div>
                <div class="p-3.5 rounded-2xl bg-white dark:bg-slate-900 border border-amber-200 dark:border-amber-900/60 space-y-1.5">
                  <div class="font-bold text-amber-600 dark:text-amber-400 text-xs flex items-center gap-1.5">
                    <span>3️⃣</span> 各種刑種如何折算？
                  </div>
                  <p class="text-[11.5px] text-slate-600 dark:text-slate-300 leading-relaxed">
                    死刑減輕為無期或15年徒刑；無期減輕為20年以下12年以上（§ 64、§ 65）；有期徒刑與罰金加減皆為二分之一（§ 67、§ 68）。
                  </p>
                </div>
              </div>
            </div>
          </section>

          <!-- ==================== 二、刑罰加重事由：累犯 ==================== -->
          <section id="sec-p0ch3-sec2-recidivism" class="space-y-6 pt-2">
            <div class="flex items-center justify-between border-b border-slate-100 dark:border-white/[0.06] pb-2">
              <div class="flex items-center gap-3">
                <span class="w-2 h-6 rounded-full bg-rose-600"></span>
                <h3 class="text-lg sm:text-xl font-black text-slate-900 dark:text-white tracking-tight">
                  二、刑罰加重事由 ➔ 累犯（§ 47 ～ § 49，教材第 2-29 ～ 2-30 頁）
                </h3>
              </div>
              <span class="text-[11px] font-mono px-2 py-0.5 rounded bg-rose-50 dark:bg-rose-950 text-rose-600 dark:text-rose-400 font-bold">
                加重本刑至 1/2
              </span>
            </div>

            <!-- 核心定義與學理批判 -->
            <div class="p-5 rounded-3xl bg-slate-50 dark:bg-slate-900/60 border-2 border-l-[8px] border-rose-500 space-y-3">
              <div class="flex items-center justify-between border-b border-rose-200 dark:border-rose-900/60 pb-2">
                <span class="font-bold text-slate-900 dark:text-white text-sm flex items-center gap-1.5">
                  <span>⛓️</span>
                  <span>刑法第 47 條第 1 項：累犯核心法定構成</span>
                </span>
                <span class="text-xs font-mono font-bold text-rose-600">§ 47 Ⅰ</span>
              </div>
              <blockquote class="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed italic border-l-4 border-rose-500 pl-3">
                「受徒刑之執行完畢，或一部之執行而赦免後，五年以內故意再犯有期徒刑以上之罪者，為累犯，加重本刑至二分之一。」
              </blockquote>
              <div class="p-3 rounded-2xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-900 text-xs text-rose-900 dark:text-rose-200 space-y-1">
                <span class="font-bold">⚠️ 學理諸多批評（重要法理思維）：</span>
                <p class="text-[11.5px] leading-relaxed text-slate-600 dark:text-slate-300">
                  學理強烈質疑<strong>用前科作為加重後罪刑罰的理由，違反「重複評價禁止原則」與「罪責原則」</strong>；況且有時短時間內的再犯行為，往往源於行為人再社會化支援不足或生存困境，反而還可能是應減輕刑罰的考量依據。
                </p>
              </div>
            </div>

            <!-- 累犯成立五大要件深度展開卡 -->
            <div class="space-y-4">
              <h4 class="text-sm font-bold text-slate-800 dark:text-slate-200 flex items-center gap-2">
                <span>🔍</span>
                <span>(一) 累犯成立五大嚴格審查要件</span>
              </h4>

              <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                
                <!-- 要件 1: 曾受徒刑執行 -->
                <div class="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
                  <div class="font-bold text-rose-700 dark:text-rose-400 flex items-center justify-between">
                    <span>1. 行為人必須「曾受徒刑之執行」</span>
                    <span class="font-mono text-[10px] px-1.5 py-0.5 rounded bg-rose-50 dark:bg-rose-950">徒刑限定</span>
                  </div>
                  <div class="space-y-1.5 text-[11.5px] text-slate-600 dark:text-slate-300">
                    <div>• <strong>拘役、罰金、易服勞役：</strong>若僅受此類執行，<strong>無成立累犯之餘地</strong>。</div>
                    <div>• <strong>易科罰金執行：</strong>受有期徒刑宣告轉為易科罰金繳納完畢者，<strong>仍屬有期徒刑之執行</strong>，有成立累犯可能。</div>
                    <div>• <strong>緩刑之情狀：</strong>受徒刑宣告獲緩刑，若<strong>緩刑期滿未經撤銷，即自始未受執行</strong>，無由構成累犯；若緩刑遭撤銷入監服刑完畢，5 年內再犯則成立累犯（如甲宣告徒刑 7 月緩刑 2 年，緩刑期內故意犯他罪致緩刑撤銷，入獄服滿出獄後再犯強盜，即屬累犯）。</div>
                  </div>
                </div>

                <!-- 要件 2: 執行完畢或赦免後 5 年內 -->
                <div class="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
                  <div class="font-bold text-rose-700 dark:text-rose-400 flex items-center justify-between">
                    <span>2. 犯罪必須發生於「執行完畢或赦免後 5 年內」</span>
                    <span class="font-mono text-[10px] px-1.5 py-0.5 rounded bg-rose-50 dark:bg-rose-950">5年時限</span>
                  </div>
                  <div class="space-y-1.5 text-[11.5px] text-slate-600 dark:text-slate-300">
                    <p>必須是<strong>「執行完畢」後</strong>犯罪！</p>
                    <div class="p-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                      <strong>🚫 均無累犯適用之三種情狀：</strong><br>
                      ① 判決確定但<strong>尚未執行</strong>而犯罪。<br>
                      ② 徒刑<strong>執行中</strong>（如在監脫逃或在監鬥毆）再犯罪。<br>
                      ③ <strong>假釋中</strong>再犯罪（假釋僅屬暫時釋放，在假釋期滿前尚未執行完畢）。
                    </div>
                  </div>
                </div>

                <!-- 要件 3: 故意再犯有期徒刑以上之罪 -->
                <div class="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
                  <div class="font-bold text-rose-700 dark:text-rose-400 flex items-center justify-between">
                    <span>3. 行為人「故意」再犯「有期徒刑以上」之罪</span>
                    <span class="font-mono text-[10px] px-1.5 py-0.5 rounded bg-rose-50 dark:bg-rose-950">後罪主客觀</span>
                  </div>
                  <p class="text-[11.5px] text-slate-600 dark:text-slate-300 leading-relaxed">
                    對於累犯而言，<strong>前罪不以故意犯罪為限</strong>（前罪為過失致死服刑完畢亦可），但<strong>再犯之後罪必須是「故意犯」</strong>且法定刑為有期徒刑以上之罪。若後罪為過失犯罪（如過失傷害），不成立累犯。
                  </p>
                </div>

                <!-- 要件 4 & 5: 外國排除與準累犯 -->
                <div class="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
                  <div class="font-bold text-rose-700 dark:text-rose-400 flex items-center justify-between">
                    <span>4. 前罪非於外國受裁判 ＆ 5. 準累犯</span>
                    <span class="font-mono text-[10px] px-1.5 py-0.5 rounded bg-rose-50 dark:bg-rose-950">§ 49、§ 47 Ⅱ</span>
                  </div>
                  <div class="space-y-1.5 text-[11.5px] text-slate-600 dark:text-slate-300">
                    <div>• <strong>外國裁判排除（§ 49）：</strong>累犯以內國法院之有罪徒刑確定裁判為限，在外國法院受裁判者不適用。</div>
                    <div>• <strong>準累犯（§ 47 Ⅱ）：</strong>原條文規定因強制工作免其刑之執行，5 年內故意再犯者以累犯論。</div>
                  </div>
                </div>

              </div>
            </div>

            <!-- 法律效果與 2026 釋字 775 號重大審查指引 -->
            <div class="p-5 rounded-3xl bg-amber-50/80 dark:bg-amber-950/40 border-2 border-l-[8px] border-amber-500 space-y-2.5">
              <div class="flex items-center justify-between">
                <span class="text-xs font-bold text-amber-900 dark:text-amber-200 flex items-center gap-1.5">
                  <span>🏛️</span>
                  <span>(二) 法律效果與【司法院釋字第 775 號解釋】重大合憲性拘束</span>
                </span>
                <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-200 dark:bg-amber-900 text-amber-800 dark:text-amber-200 font-bold">
                  重大釋憲
                </span>
              </div>
              <p class="text-xs text-amber-950 dark:text-amber-200 leading-relaxed">
                原條文規定「加重本刑至二分之一」，法院必須加重，加重幅度在二分之一內為法官裁量。然而：
              </p>
              <div class="p-3.5 rounded-2xl bg-white/90 dark:bg-slate-900/90 border border-amber-200 dark:border-amber-800 text-xs text-slate-700 dark:text-slate-200 space-y-1.5 leading-relaxed">
                <div class="font-bold text-rose-600 dark:text-rose-400">• 釋字第 775 號解釋文意旨：</div>
                <p>
                  刑法第 47 條第 1 項規定<strong>不分情節一律加重最低本刑</strong>，於不符合刑罰應報及罪責原則之處，違反憲法第 23 條比例原則。為避免過苛，<strong>法院於審理累犯個案時，得審酌罪責原則，裁量「不予加重最低本刑」</strong>！
                </p>
                <div class="text-[11px] text-slate-500 pt-0.5">
                  📌 另註：司法院釋字第 812 號解釋已宣告刑法與保安處分中「強制工作」規定全數違憲失效，準累犯（§ 47 Ⅱ）失其附麗。
                </div>
              </div>
            </div>

            <!-- 🐣 小白秒懂專區：累犯加重與釋字 775 號救命丹 -->
            <div class="p-5 sm:p-6 rounded-3xl bg-rose-500/10 border-2 border-l-[8px] border-rose-500 space-y-4">
              <div class="flex items-center justify-between border-b border-rose-500/20 pb-2">
                <span class="font-extrabold text-rose-700 dark:text-rose-300 text-sm sm:text-base flex items-center gap-2">
                  <span class="animate-bounce">🐣</span> 小白秒懂專區：累犯加重與釋字 775 號救命丹
                </span>
                <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-rose-500/20 text-rose-800 dark:text-rose-200 font-bold">
                  RECIDIVISM & JUDICIAL YUAN NO. 775
                </span>
              </div>
              <p class="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                很多人以為「只要有前科再犯就是累犯」，大錯特錯！刑法累犯有極端嚴格的關卡：
              </p>
              <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div class="p-3.5 rounded-2xl bg-white dark:bg-slate-900 border border-rose-200 dark:border-rose-900/60 space-y-1.5">
                  <div class="font-bold text-rose-600 dark:text-rose-400 text-xs flex items-center gap-1.5">
                    <span>1️⃣</span> 前後罪的嚴格限制
                  </div>
                  <p class="text-[11.5px] text-slate-600 dark:text-slate-300 leading-relaxed">
                    前罪必須曾受<strong>徒刑執行完畢</strong>（前科若只有罰金或拘役不算）；後罪必須在出獄後<strong>5年以內「故意」犯徒刑之罪</strong>（後罪如果是過失撞傷人不算累犯）。
                  </p>
                </div>
                <div class="p-3.5 rounded-2xl bg-white dark:bg-slate-900 border border-rose-200 dark:border-rose-900/60 space-y-1.5">
                  <div class="font-bold text-rose-600 dark:text-rose-400 text-xs flex items-center gap-1.5">
                    <span>2️⃣</span> 假釋或監獄中犯罪算累犯嗎？
                  </div>
                  <p class="text-[11.5px] text-slate-600 dark:text-slate-300 leading-relaxed">
                    <strong>不算！</strong>因為法條明定要「執行完畢後」。在假釋期間或在監服刑中犯罪，刑期根本還沒結束，不符累犯要件（會面臨撤銷假釋或數罪併罰，但不是累犯加重）。
                  </p>
                </div>
                <div class="p-3.5 rounded-2xl bg-white dark:bg-slate-900 border border-rose-200 dark:border-rose-900/60 space-y-1.5">
                  <div class="font-bold text-rose-600 dark:text-rose-400 text-xs flex items-center gap-1.5">
                    <span>3️⃣</span> 釋字 775 號的大法官救命丹
                  </div>
                  <p class="text-[11.5px] text-slate-600 dark:text-slate-300 leading-relaxed">
                    以前條文寫「必加重」，導致偷小麵包也要被強制判超重。大法官宣告違憲後，現在法官可依個案情節<strong>裁量「不加重最低本刑」</strong>，避免罪刑失衡！
                  </p>
                </div>
              </div>
            </div>
          </section>

          <!-- ==================== 三、刑罰減輕事由：自首 ==================== -->
          <section id="sec-p0ch3-sec2-surrender" class="space-y-6 pt-2">
            <div class="flex items-center justify-between border-b border-slate-100 dark:border-white/[0.06] pb-2">
              <div class="flex items-center gap-3">
                <span class="w-2 h-6 rounded-full bg-emerald-600"></span>
                <h3 class="text-lg sm:text-xl font-black text-slate-900 dark:text-white tracking-tight">
                  三、刑罰減輕事由 ➔ 自首（§ 62，教材第 2-30 ～ 2-31 頁）
                </h3>
              </div>
              <span class="text-[11px] font-mono px-2 py-0.5 rounded bg-emerald-50 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 font-bold">
                得減輕其刑
              </span>
            </div>

            <!-- 自首核心法條 -->
            <div class="p-5 rounded-3xl bg-slate-50 dark:bg-slate-900/60 border-2 border-l-[8px] border-emerald-500 space-y-3">
              <div class="flex items-center justify-between border-b border-emerald-200 dark:border-emerald-900/60 pb-2">
                <span class="font-bold text-slate-900 dark:text-white text-sm flex items-center gap-1.5">
                  <span>🕊️</span>
                  <span>刑法第 62 條：自首之法定定義</span>
                </span>
                <span class="text-xs font-mono font-bold text-emerald-600">§ 62</span>
              </div>
              <blockquote class="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed italic border-l-4 border-emerald-500 pl-3">
                「對於未發覺之罪自首而受裁判者，得減輕其刑。但有特別規定者，依其規定。」
              </blockquote>
              <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                行為人主動向特定機關申告自己尚未被發覺的犯罪行為，並且願意接受法院之審判者，得因自首而減輕其刑（鼓勵犯罪人悔悟、節省國家偵查成本）。
              </p>
            </div>

            <!-- 自首成立三大要件深度拆解 -->
            <div class="space-y-4">
              <h4 class="text-sm font-bold text-slate-800 dark:text-slate-200 flex items-center gap-2">
                <span>⚖️</span>
                <span>(一) 自首成立三大審查要件</span>
              </h4>

              <div class="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                
                <!-- 要件 1: 申告自己之犯罪 -->
                <div class="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2.5 flex flex-col justify-between">
                  <div class="space-y-2">
                    <div class="font-bold text-emerald-700 dark:text-emerald-400 flex items-center justify-between">
                      <span>1. 行為人申告自己之犯罪</span>
                      <span class="font-mono text-[10px] px-1.5 py-0.5 rounded bg-emerald-50 dark:bg-emerald-950">對己之罪</span>
                    </div>
                    <p class="text-[11.5px] text-slate-600 dark:text-slate-300 leading-relaxed">
                      並<strong>無任何形式要件限制</strong>（親自到場、書面、電話皆可，63台上1101例），甚至可以<strong>委託他人代為自首</strong>（50台上65例）。
                    </p>
                    <div class="p-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-[11px] text-slate-600 dark:text-slate-300">
                      • 必須申告<strong>自己的犯罪</strong>；若申告他人之罪，僅屬告訴或告發。
                    </div>
                  </div>
                  <!-- 重要判決：翻供不影響 -->
                  <div class="p-2.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-[10.5px] text-emerald-900 dark:text-emerald-200 leading-relaxed">
                    <strong>⭐ 關鍵重點（99台上7333決）：</strong>行為人自首後，嗣後縱使<strong>翻供甚至否認犯罪，依然完全不影響先前自首之效力</strong>！
                  </div>
                </div>

                <!-- 要件 2: 犯罪尚未被偵查機關發覺 -->
                <div class="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2.5 flex flex-col justify-between">
                  <div class="space-y-2">
                    <div class="font-bold text-emerald-700 dark:text-emerald-400 flex items-center justify-between">
                      <span>2. 犯罪尚未被偵查機關發覺</span>
                      <span class="font-mono text-[10px] px-1.5 py-0.5 rounded bg-emerald-50 dark:bg-emerald-950">未發覺基準</span>
                    </div>
                    <p class="text-[11.5px] text-slate-600 dark:text-slate-300 leading-relaxed">
                      所謂「未發覺」，指犯罪事實未被發覺，或<strong>雖知有犯罪事實，但不知犯人為誰</strong>的情況。
                    </p>
                    <div class="p-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-[11px] text-slate-600 dark:text-slate-300">
                      • 基準：以<strong>「有權偵查機關」（檢察官、司法警察）</strong>是否發覺為準（20上1721例）。
                    </div>
                  </div>
                  <div class="p-2.5 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 text-[10.5px] text-amber-900 dark:text-amber-200 leading-relaxed">
                    <strong>⚠️ 鎖定嫌疑人即非自首：</strong>若檢警已鎖定其為犯罪嫌疑人，便無自首可能，充其量僅能稱為<strong>「投案」</strong>。
                  </div>
                </div>

                <!-- 要件 3: 申告後自動接受裁判 -->
                <div class="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2.5 flex flex-col justify-between">
                  <div class="space-y-2">
                    <div class="font-bold text-emerald-700 dark:text-emerald-400 flex items-center justify-between">
                      <span>3. 申告後必須自動接受裁判</span>
                      <span class="font-mono text-[10px] px-1.5 py-0.5 rounded bg-emerald-50 dark:bg-emerald-950">受裁判意思</span>
                    </div>
                    <p class="text-[11.5px] text-slate-600 dark:text-slate-300 leading-relaxed">
                      行為人申告後，必須願意接受法院之裁判與後續偵審程序。
                    </p>
                    <div class="p-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-[11px] text-slate-600 dark:text-slate-300">
                      • 倘若申告後<strong>拒不到案或逃逸無蹤</strong>，無法成立自首！
                    </div>
                  </div>
                  <div class="p-2.5 rounded-xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-900 text-[10.5px] text-rose-900 dark:text-rose-200 leading-relaxed">
                    <strong>⚠️ 挑釁檢警不成立自首（94台上5690決）：</strong>打電話跟警察說「人是我殺的」隨即逃亡藏匿，這根本是向檢警挑釁，絕不成立自首。
                  </div>
                </div>

              </div>
            </div>

            <!-- 核心概念三部曲辨析卡：自首 vs 投案 vs 自白 -->
            <div id="sec-p0ch3-sec2-surrender-vs-confession" class="p-6 rounded-3xl bg-slate-50 dark:bg-slate-900/60 border-2 border-l-[8px] border-indigo-500 space-y-4">
              <div class="flex items-center justify-between border-b border-indigo-200 dark:border-indigo-800 pb-2">
                <h4 class="text-sm sm:text-base font-black text-slate-900 dark:text-white flex items-center gap-2">
                  <span>💡</span>
                  <span>關鍵法學概念辨析：自首 vs. 投案 vs. 自白</span>
                </h4>
                <span class="text-xs font-mono font-bold text-indigo-600 dark:text-indigo-400">
                  三者嚴格對比
                </span>
              </div>

              <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                <!-- 自首 -->
                <div class="p-3.5 rounded-2xl bg-white dark:bg-slate-900 border-2 border-emerald-500/60 space-y-1.5">
                  <div class="font-bold text-emerald-700 dark:text-emerald-300 flex items-center justify-between">
                    <span>1. 自首（§ 62）</span>
                    <span class="px-1.5 py-0.2 rounded bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 text-[10px]">法定得減輕</span>
                  </div>
                  <p class="text-[11.5px] text-slate-600 dark:text-slate-300 leading-relaxed">
                    在有權偵查機關<strong>「發覺犯人之前」</strong>主動申告並願意接受裁判。具實質法律減輕效果。
                  </p>
                </div>

                <!-- 投案 -->
                <div class="p-3.5 rounded-2xl bg-white dark:bg-slate-900 border-2 border-amber-500/60 space-y-1.5">
                  <div class="font-bold text-amber-700 dark:text-amber-300 flex items-center justify-between">
                    <span>2. 投案（量刑事由）</span>
                    <span class="px-1.5 py-0.2 rounded bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300 text-[10px]">§ 57 態度考量</span>
                  </div>
                  <p class="text-[11.5px] text-slate-600 dark:text-slate-300 leading-relaxed">
                    偵查機關<strong>「已發覺犯罪人身分」</strong>後，行為人始出面報到。不構成自首，僅能作為 § 57 犯後態度良好之量刑審酌。
                  </p>
                </div>

                <!-- 自白 -->
                <div class="p-3.5 rounded-2xl bg-white dark:bg-slate-900 border-2 border-blue-500/60 space-y-1.5">
                  <div class="font-bold text-blue-700 dark:text-blue-300 flex items-center justify-between">
                    <span>3. 自白（訴訟陳述）</span>
                    <span class="px-1.5 py-0.2 rounded bg-blue-100 dark:bg-blue-950 text-blue-800 dark:text-blue-300 text-[10px]">供述證據</span>
                  </div>
                  <p class="text-[11.5px] text-slate-600 dark:text-slate-300 leading-relaxed">
                    行為人在偵查或審判中，<strong>承認自己犯罪或為不利於己之犯罪陳述</strong>。部分特別法有自白減刑之特別規定（如毒品條例、貪污條例）。
                  </p>
                </div>
              </div>
            </div>

            <!-- 🐣 小白秒懂專區：自首三大密碼與自首/投案/自白 -->
            <div class="p-5 sm:p-6 rounded-3xl bg-emerald-500/10 border-2 border-l-[8px] border-emerald-500 space-y-4">
              <div class="flex items-center justify-between border-b border-emerald-500/20 pb-2">
                <span class="font-extrabold text-emerald-700 dark:text-emerald-300 text-sm sm:text-base flex items-center gap-2">
                  <span class="animate-bounce">🐣</span> 小白秒懂專區：自首三大密碼與自首／投案／自白
                </span>
                <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-800 dark:text-emerald-200 font-bold">
                  SURRENDER VS CONFESSION
                </span>
              </div>
              <p class="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                刑法鼓勵「回頭是岸」，自首給予法官「得減輕其刑」的權限，但千萬不能弄混：
              </p>
              <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div class="p-3.5 rounded-2xl bg-white dark:bg-slate-900 border border-emerald-200 dark:border-emerald-900/60 space-y-1.5">
                  <div class="font-bold text-emerald-600 dark:text-emerald-400 text-xs flex items-center gap-1.5">
                    <span>1️⃣</span> 警官還沒鎖定你！
                  </div>
                  <p class="text-[11.5px] text-slate-600 dark:text-slate-300 leading-relaxed">
                    只要檢警<strong>還不知道兇手是誰</strong>（就算現場已經發現屍體），你跑去自首，就符合「未發覺」！如果警察已經調監視器鎖定你了，這時才去只能叫「投案」。
                  </p>
                </div>
                <div class="p-3.5 rounded-2xl bg-white dark:bg-slate-900 border border-emerald-200 dark:border-emerald-900/60 space-y-1.5">
                  <div class="font-bold text-emerald-600 dark:text-emerald-400 text-xs flex items-center gap-1.5">
                    <span>2️⃣</span> 到法院翻供，自首還算嗎？
                  </div>
                  <p class="text-[11.5px] text-slate-600 dark:text-slate-300 leading-relaxed">
                    <strong>依然算自首！</strong>最高法院 99 台上 7333 號判決指明：自首一經完成，事後翻供或否認犯罪，<strong>完全不影響先前自首的法律效力</strong>！
                  </p>
                </div>
                <div class="p-3.5 rounded-2xl bg-white dark:bg-slate-900 border border-emerald-200 dark:border-emerald-900/60 space-y-1.5">
                  <div class="font-bold text-emerald-600 dark:text-emerald-400 text-xs flex items-center gap-1.5">
                    <span>3️⃣</span> 打電話嗆聲後落跑算自首嗎？
                  </div>
                  <p class="text-[11.5px] text-slate-600 dark:text-slate-300 leading-relaxed">
                    <strong>不算！</strong>自首必須「願受裁判」。如果打電話跟警察說「人是我幹的，有種來抓我」然後躲起來，這叫挑釁司法，絕不成立自首！
                  </p>
                </div>
              </div>
            </div>

            <div class="p-3.5 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-xs text-emerald-900 dark:text-emerald-200 flex items-center justify-between">
              <span>(二) <strong>法律效果：</strong>刑法第 62 條明定為<strong>「得減輕其刑」</strong>（94 年修法由必減改為得減，賦予法院依個案真誠悔悟程度自由裁量）。</span>
            </div>
          </section>

          <!-- ==================== Chapter Bottom Pagination: 第二節底部雙向導航 ==================== -->
          <div class="pt-8 border-t border-slate-200 dark:border-white/[0.08] grid grid-cols-1 sm:grid-cols-2 gap-4">
            <button onclick="switchView('part0-ch3-sec1')" class="group p-4 rounded-2xl border border-slate-200 dark:border-white/[0.08] hover:border-indigo-500/40 bg-white dark:bg-[#111726] text-left transition-all hover:-translate-y-0.5 shadow-sm hover:shadow-md flex items-center gap-3 cursor-pointer">
              <div class="w-9 h-9 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 group-hover:bg-indigo-50 dark:group-hover:bg-indigo-950 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 flex items-center justify-center text-sm font-bold shrink-0 transition-colors">
                ←
              </div>
              <div class="min-w-0">
                <span class="text-[11px] text-slate-400 font-mono block">上一單元 (教材第 2-27 ～ 2-29 頁)</span>
                <span class="text-xs font-bold text-slate-800 dark:text-slate-200 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors truncate block">
                  第一節 刑罰的種類——兼談法定刑
                </span>
              </div>
            </button>

            <button onclick="switchView('part0-ch3-sec3')" class="group p-4 rounded-2xl border border-indigo-500/40 hover:border-indigo-500 bg-gradient-to-br from-indigo-50/50 to-blue-50/30 dark:from-indigo-950/30 dark:to-blue-950/20 text-right transition-all hover:-translate-y-0.5 shadow-sm hover:shadow-md flex items-center justify-between gap-3 cursor-pointer">
              <div class="min-w-0 text-left">
                <span class="text-[11px] text-indigo-700 dark:text-indigo-400 font-mono block font-bold">下一單元 (教材第 2-31 ～ 2-32 頁)</span>
                <span class="text-xs font-extrabold text-slate-900 dark:text-white group-hover:text-indigo-700 dark:group-hover:text-indigo-400 transition-colors truncate block">
                  第三節 刑罰的量定——兼談宣告刑 →
                </span>
              </div>
              <div class="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 to-indigo-600 text-white flex items-center justify-center text-sm font-bold shrink-0 group-hover:scale-105 transition-transform shadow-md shadow-indigo-500/30">
                ⚖️
              </div>
            </button>
          </div>

        </div>
`;
