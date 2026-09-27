/**
 * view-part0-ch3-sec1.js
 * 第零篇 第三章 第一節 刑罰的種類——兼談法定刑 (教材第 2-27 ～ 2-29 頁)
 * 依據多欄位Note Skill 規範：
 * 完整收錄完全性法條構造、主刑三種（死刑/自由刑/罰金刑）、從刑（褫奪公權/沒收/追徵抵償）
 * 沒收新制2026查核對照、四大主刑配置模式（唯一主刑、選科、併科、選科或併科）
 */
window.APP_VIEWS = window.APP_VIEWS || {};
window.APP_VIEWS['viewPart0Ch3Sec1'] = window.APP_VIEWS['part0Ch3Sec1'] = window.APP_VIEWS['part0-ch3-sec1'] = `
        <!-- VIEW: 第零篇 第三章 第一節 刑罰的種類——兼談法定刑 -->
        <div id="viewPart0Ch3Sec1" class="fade-enter hidden space-y-8">
          
          <!-- Breadcrumb & Back -->
          <div class="flex items-center justify-between gap-4 border-b border-slate-100 dark:border-white/[0.06] pb-3">
            <nav class="flex items-center gap-2 text-xs font-medium text-slate-400">
              <button onclick="switchView('part-0')" class="hover:text-blue-500 transition-colors">第零篇</button>
              <span>/</span>
              <button onclick="switchView('part0-chapter-3')" class="hover:text-indigo-500 transition-colors">第三章 刑法的法律效果</button>
              <span>/</span>
              <span class="text-indigo-600 dark:text-indigo-400 font-bold">第一節 刑罰的種類——兼談法定刑</span>
            </nav>
            <button onclick="switchView('part0-chapter-3')" class="text-xs text-slate-400 hover:text-indigo-500 flex items-center gap-1 transition-colors">
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
              </svg>
              <span>返回第三章總覽</span>
            </button>
          </div>

          <!-- Section Header -->
          <div class="space-y-2">
            <div class="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-mono text-xs font-bold">
              <span>第零篇・第三章・第一節</span>
              <span class="px-2 py-0.5 rounded-md bg-indigo-50 dark:bg-indigo-950/40 text-[11px] border border-indigo-200 dark:border-indigo-900/50 text-indigo-700 dark:text-indigo-400">
                教材第 2-27 ～ 2-29 頁
              </span>
              <span class="px-2 py-0.5 rounded-md bg-emerald-50 dark:bg-emerald-950/40 text-[11px] border border-emerald-200 dark:border-emerald-900/50 text-emerald-700 dark:text-emerald-400 font-bold">
                法條完全性與刑種體系
              </span>
            </div>
            <h2 class="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
              第一節 刑罰的種類——兼談法定刑
            </h2>
            <p class="text-xs sm:text-sm font-bold text-blue-700 dark:text-blue-300 leading-relaxed">
              完全性法條結構（要件＋法定刑）、主刑三大類（死刑/自由刑/罰金刑）、從刑（褫奪公權/沒收/追徵抵償）與四大主刑配置模式（唯一、選科、併科、選科或併科）
            </p>
          </div>

          <!-- ==================== 一、法定刑之概念與完全性法條 ==================== -->
          <section id="sec-p0ch3-sec1-statutory-penalty" class="space-y-5 pt-2">
            <div class="flex items-center justify-between border-b border-slate-100 dark:border-white/[0.06] pb-2">
              <div class="flex items-center gap-3">
                <span class="w-2 h-6 rounded-full bg-indigo-600"></span>
                <h3 class="text-lg sm:text-xl font-black text-slate-900 dark:text-white tracking-tight">
                  一、法定刑之本質與「完全性法條」構造（教材第 2-27 頁）
                </h3>
              </div>
              <span class="text-[11px] font-mono px-2 py-0.5 rounded bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 font-bold">
                成立要件 ＋ 法律效果
              </span>
            </div>

            <!-- 天藍色概念焦點框 (Focus Box) -->
            <div class="box-legal-navy p-6 sm:p-7 rounded-3xl space-y-4">
              <div class="flex items-center justify-between border-b border-sky-300/40 dark:border-sky-700/40 pb-2">
                <h4 class="text-base font-bold text-[#032034] dark:text-white flex items-center gap-2">
                  <span>📜</span>
                  <span>何謂法定刑？</span>
                </h4>
                <span class="text-xs font-mono font-bold px-2 py-0.5 rounded bg-white dark:bg-slate-800 text-[#0369a1] dark:text-sky-300 border border-sky-300 dark:border-sky-600">
                  STATUTORY PENALTY
                </span>
              </div>

              <!-- 🐣 完全性法條與主從刑小白秒懂專區 -->
              <div class="rounded-2xl border-2 border-amber-300 dark:border-amber-700/80 bg-gradient-to-br from-amber-50/90 via-orange-50/60 to-yellow-50/70 dark:from-amber-950/40 dark:via-orange-950/30 dark:to-yellow-950/30 p-5 space-y-4 shadow-sm">
                <div class="flex items-center gap-2.5 border-b border-amber-200 dark:border-amber-800/60 pb-3">
                  <span class="text-2xl animate-bounce">🐣</span>
                  <div>
                    <h4 class="text-sm sm:text-base font-black text-amber-950 dark:text-amber-200">
                      【小白秒懂專區】完全性法條與主刑從刑：法條到底怎麼讀？
                    </h4>
                    <p class="text-xs text-amber-800 dark:text-amber-300 font-medium">
                      法條就是「如果……就……」：前半段是條件，後半段是懲罰！
                    </p>
                  </div>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs sm:text-sm">
                  <div class="p-3.5 rounded-xl bg-white/95 dark:bg-slate-900/90 border border-amber-200 dark:border-amber-800/60 space-y-1.5 shadow-xs">
                    <span class="text-blue-700 dark:text-blue-400 font-black block flex items-center gap-1.5">
                      <span class="w-5 h-5 rounded-full bg-blue-100 dark:bg-blue-950 text-blue-800 dark:text-blue-200 flex items-center justify-center text-xs font-bold">1</span>
                      <span>完全性法條（如果與就）</span>
                    </span>
                    <p class="text-xs text-slate-700 dark:text-slate-200 leading-relaxed font-normal">
                      刑法條文不是雞湯文！以殺人罪為例：「殺人者（如果幹了壞事）➔ 處死刑、無期徒刑或十年以上有期徒刑（就接受這幾種處罰）」。有要件＋有效果，才叫「完全性法條」！
                    </p>
                  </div>

                  <div class="p-3.5 rounded-xl bg-white/95 dark:bg-slate-900/90 border border-amber-200 dark:border-amber-800/60 space-y-1.5 shadow-xs">
                    <span class="text-indigo-700 dark:text-indigo-400 font-black block flex items-center gap-1.5">
                      <span class="w-5 h-5 rounded-full bg-indigo-100 dark:bg-indigo-950 text-indigo-800 dark:text-indigo-200 flex items-center justify-center text-xs font-bold">2</span>
                      <span>主刑三本柱（命、自由、錢）</span>
                    </span>
                    <p class="text-xs text-slate-700 dark:text-slate-200 leading-relaxed font-normal">
                      法官可以單獨判的主刑只有三種：<strong>死刑（剝奪生命）、自由刑（無期/有期徒刑/拘役，剝奪行動自由）、罰金刑（剝奪財產）</strong>。
                    </p>
                  </div>

                  <div class="p-3.5 rounded-xl bg-white/95 dark:bg-slate-900/90 border border-amber-200 dark:border-amber-800/60 space-y-1.5 shadow-xs">
                    <span class="text-amber-700 dark:text-amber-300 font-black block flex items-center gap-1.5">
                      <span class="w-5 h-5 rounded-full bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-200 flex items-center justify-center text-xs font-bold">3</span>
                      <span>從刑與沒收新制大變革</span>
                    </span>
                    <p class="text-xs text-slate-700 dark:text-slate-200 leading-relaxed font-normal">
                      從刑只能附帶判（褫奪公權）。特別注意：<strong>2016 年修法後「沒收」已經被踢出從刑，變成獨立的「準不當得利衡平措施」</strong>！任何人都不能坐享犯罪好處，全部沒收吐出來！
                    </p>
                  </div>
                </div>
              </div>

              <p class="text-xs sm:text-sm text-slate-700 dark:text-slate-200 leading-relaxed">
                <strong>法定刑</strong>是刑法典上針對個別罪名所定之刑。我國刑法條文原則上都是由「<strong>成立要件 ＋ 法律效果（法定刑）</strong>」所組成的完全性法條：
              </p>

              <!-- 殺人罪完全法條拆解展示卡 -->
              <div class="p-4 sm:p-5 rounded-2xl bg-white/95 dark:bg-slate-900/90 border border-sky-200 dark:border-sky-800 space-y-3">
                <div class="text-xs font-bold text-slate-800 dark:text-slate-200 flex items-center gap-2">
                  <span class="px-2 py-0.5 rounded bg-rose-500/10 text-rose-600 font-mono">範例法條</span>
                  <span>刑法第 271 條第 1 項 普通殺人罪</span>
                </div>
                <div class="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/80 font-mono text-xs sm:text-sm text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700">
                  「<span class="text-blue-600 dark:text-blue-400 font-bold bg-blue-50 dark:bg-blue-950/60 px-1 rounded">殺人者</span>，<span class="text-rose-600 dark:text-rose-400 font-bold bg-rose-50 dark:bg-rose-950/60 px-1 rounded">處死刑、無期徒刑或十年以上有期徒刑</span>。」
                </div>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs pt-1">
                  <div class="p-3 rounded-xl bg-blue-50/60 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-900">
                    <span class="font-bold text-blue-700 dark:text-blue-300 block mb-1">① 前半段：犯罪成立要件（Tatbestand）</span>
                    <span class="text-slate-600 dark:text-slate-300">「殺人者」即為客觀與主觀不法構成要件。</span>
                  </div>
                  <div class="p-3 rounded-xl bg-rose-50/60 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-900">
                    <span class="font-bold text-rose-700 dark:text-rose-300 block mb-1">② 後半段：法律效果（Rechtsfolge）</span>
                    <span class="text-slate-600 dark:text-slate-300">「處死刑、無期徒刑或十年以上有期徒刑」即為法定刑。</span>
                  </div>
                </div>
              </div>

              <div class="text-xs text-sky-950 dark:text-sky-200 flex items-center gap-2 pt-1">
                <span>📌</span>
                <span>至於法定刑內的幾種選擇，就是<strong>刑法第 32 條</strong>所規範的刑罰種類，區分為<strong>得單獨科處的「主刑」</strong>，以及<strong>附屬於主刑的「從刑」</strong>。</span>
              </div>
            </div>
          </section>

          <!-- ==================== 二、主刑三大體系 ==================== -->
          <section id="sec-p0ch3-sec1-principal-penalties" class="space-y-6 pt-2">
            <div class="flex items-center justify-between border-b border-slate-100 dark:border-white/[0.06] pb-2">
              <div class="flex items-center gap-3">
                <span class="w-2 h-6 rounded-full bg-blue-600"></span>
                <h3 class="text-lg sm:text-xl font-black text-slate-900 dark:text-white tracking-tight">
                  二、主刑有「死刑」、「自由刑」與「罰金刑」三種（教材第 2-27 頁）
                </h3>
              </div>
              <span class="text-[11px] font-mono px-2 py-0.5 rounded bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400 font-bold">
                刑法 § 33
              </span>
            </div>

            <!-- 主刑三大卡片網格 -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
              
              <!-- 1. 死刑 -->
              <div class="p-5 rounded-3xl bg-white dark:bg-slate-900 border-2 border-rose-500/40 shadow-sm space-y-3 flex flex-col justify-between">
                <div class="space-y-2.5">
                  <div class="flex items-center justify-between">
                    <span class="text-xs font-mono font-bold text-rose-600 dark:text-rose-400 flex items-center gap-1">
                      <span>⚡</span>
                      <span>生命刑（最嚴厲）</span>
                    </span>
                    <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-rose-50 dark:bg-rose-950 text-rose-600 dark:text-rose-400 font-bold">
                      § 33 ①
                    </span>
                  </div>
                  <h4 class="text-base font-black text-slate-900 dark:text-white">
                    (一) 死刑（Todesstrafe）
                  </h4>
                  <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    最強烈的刑罰，剝奪行為人之生命法益。
                  </p>
                  
                  <!-- § 63 限制 -->
                  <div class="p-3 rounded-2xl bg-rose-50/70 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-900 text-xs text-rose-950 dark:text-rose-200 space-y-1">
                    <span class="font-bold flex items-center gap-1 text-[11px]">
                      <span>⚠️</span>
                      <span>刑法 § 63 絕對年齡限制：</span>
                    </span>
                    <blockquote class="italic text-[11.5px] leading-relaxed pl-2 border-l-2 border-rose-400">
                      「未滿十八歲或已滿八十歲之犯罪人，不得處以死刑或無期徒刑；若本刑為死刑或無期徒刑者，減輕為有期徒刑。」
                    </blockquote>
                  </div>

                  <!-- 2026 憲法法庭判決備註 -->
                  <div class="p-2.5 rounded-xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900/50 text-[10.5px] text-amber-800 dark:text-amber-300 space-y-1">
                    <span class="font-bold block">📌 113 年憲判字第 8 號判決（113.09.20）：</span>
                    <span>死刑合憲，但嚴格限於「情節最嚴重罪行」、各審級強制辯護、言詞辯論、一致決；行為時或審判執行時具精神障礙者不得科處與執行。</span>
                  </div>
                </div>
              </div>

              <!-- 2. 自由刑 -->
              <div class="p-5 rounded-3xl bg-white dark:bg-slate-900 border-2 border-blue-500/40 shadow-sm space-y-3 flex flex-col justify-between">
                <div class="space-y-2.5">
                  <div class="flex items-center justify-between">
                    <span class="text-xs font-mono font-bold text-blue-600 dark:text-blue-400 flex items-center gap-1">
                      <span>🚪</span>
                      <span>自由刑（剝奪行動自由）</span>
                    </span>
                    <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400 font-bold">
                      § 33 ②③④
                    </span>
                  </div>
                  <h4 class="text-base font-black text-slate-900 dark:text-white">
                    (二) 自由刑（Freiheitsstrafe）
                  </h4>
                  <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    分為三種不同層級之自由剝奪體系：
                  </p>

                  <div class="space-y-2 text-xs">
                    <!-- 無期徒刑 -->
                    <div class="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                      <span class="font-bold text-slate-800 dark:text-slate-200">1. 無期徒刑：</span>
                      <span class="text-slate-600 dark:text-slate-400 text-[11.5px]">終身監禁（亦受 § 63 年齡限制保護）。</span>
                    </div>

                    <!-- 有期徒刑 -->
                    <div class="p-2.5 rounded-xl bg-blue-50/60 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-900">
                      <span class="font-bold text-blue-800 dark:text-blue-200">2. 有期徒刑：</span>
                      <div class="text-[11.5px] text-slate-600 dark:text-slate-300 pt-0.5">
                        • 原則：<strong>2 個月以上，15 年以下</strong><br>
                        • 遇加減：可減至 2 月未滿，<strong>加重至 20 年</strong>（§ 33 ③）
                      </div>
                    </div>

                    <!-- 拘役 -->
                    <div class="p-2.5 rounded-xl bg-indigo-50/60 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-900">
                      <span class="font-bold text-indigo-800 dark:text-indigo-200">3. 拘役：</span>
                      <div class="text-[11.5px] text-slate-600 dark:text-slate-300 pt-0.5">
                        • 原則：<strong>1 日以上，60 日未滿</strong><br>
                        • 遇加重：得加至 <strong>120 日</strong>（§ 33 ④）
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- 3. 罰金刑 -->
              <div class="p-5 rounded-3xl bg-white dark:bg-slate-900 border-2 border-emerald-500/40 shadow-sm space-y-3 flex flex-col justify-between">
                <div class="space-y-2.5">
                  <div class="flex items-center justify-between">
                    <span class="text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                      <span>💰</span>
                      <span>財產刑（最輕微）</span>
                    </span>
                    <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-50 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 font-bold">
                      § 33 ⑤
                    </span>
                  </div>
                  <h4 class="text-base font-black text-slate-900 dark:text-white">
                    (三) 罰金刑（Geldstrafe）
                  </h4>
                  <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    指<strong>新台幣 1000 元以上</strong>之刑罰，以百元計算之，屬於刑法體系中最輕微的主刑處罰。
                  </p>

                  <div class="p-3.5 rounded-2xl bg-emerald-50/70 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-900 text-xs text-emerald-950 dark:text-emerald-200 space-y-1.5">
                    <span class="font-bold block">💡 易服勞役制度銜接（§ 42）：</span>
                    <p class="text-[11.5px] leading-relaxed text-slate-600 dark:text-slate-300">
                      罰金應於裁判確定後 2 個月內完納。期滿不完納者強制執行；無力完納者得易服勞役（以新台幣 1000 元至 3000 元折算一日，最長不逾 1 年）。
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </section>

          <!-- ==================== 三、從刑三大體系與沒收新制變革 ==================== -->
          <section id="sec-p0ch3-sec1-accessory-penalties" class="space-y-6 pt-2">
            <div class="flex items-center justify-between border-b border-slate-100 dark:border-white/[0.06] pb-2">
              <div class="flex items-center gap-3">
                <span class="w-2 h-6 rounded-full bg-purple-600"></span>
                <h3 class="text-lg sm:text-xl font-black text-slate-900 dark:text-white tracking-tight">
                  三、從刑之規範與沒收新制重大變革（教材第 2-28 頁）
                </h3>
              </div>
              <span class="text-[11px] font-mono px-2 py-0.5 rounded bg-purple-50 dark:bg-purple-950 text-purple-600 dark:text-purple-400 font-bold">
                § 34、§ 37、§ 38
              </span>
            </div>

            <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              教材在此整理傳統刑法體系之三大從刑概念（褫奪公權、沒收、追徵追繳或抵償），並深入解析其發動要件與核心爭議：
            </p>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-5">
              
              <!-- 1. 褫奪公權 -->
              <div class="p-6 rounded-3xl bg-slate-50 dark:bg-slate-900/60 border-2 border-indigo-500/40 space-y-4 flex flex-col justify-between">
                <div class="space-y-3">
                  <div class="flex items-center justify-between">
                    <span class="px-2.5 py-0.5 rounded-full bg-indigo-100 dark:bg-indigo-950 text-indigo-800 dark:text-indigo-300 font-mono font-bold text-[11px]">
                      現行唯一從刑
                    </span>
                    <span class="text-xs font-bold text-indigo-600 dark:text-indigo-400 font-mono">§ 37</span>
                  </div>

                  <h4 class="text-base font-black text-slate-900 dark:text-white">
                    (一) 褫奪公權（資格刑）
                  </h4>

                  <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    剝奪行為人<strong>擔任公務員及公職人員候選人之資格</strong>。
                  </p>

                  <div class="p-3 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-900 text-xs text-amber-900 dark:text-amber-200 space-y-1">
                    <span class="font-bold">⚠️ 注意新舊法重大演進：</span>
                    <span class="text-[11.5px] block leading-relaxed">舊法曾規定剝奪「選舉、罷免、創制、複決四權」，新法已刪除，<strong>四權已不復存在</strong>！</span>
                  </div>

                  <!-- 失能理論 -->
                  <div class="p-3 rounded-2xl bg-white dark:bg-slate-800 border border-indigo-200 dark:border-indigo-800 text-xs space-y-1">
                    <span class="font-bold text-indigo-700 dark:text-indigo-300">💡 裁量基準：失能理論</span>
                    <p class="text-[11.5px] text-slate-600 dark:text-slate-300 leading-relaxed">
                      § 37 Ⅱ 規定宣告 1 年以上有期徒刑認有必要者宣告 1～10 年。採<strong>失能理論</strong>：剝奪權能等同失去犯罪能力（如對貪污公務員剝奪資格有效；對強盜者宣告則毫無實質意義）。
                    </p>
                  </div>
                </div>

                <div class="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-[11px] text-slate-500">
                  <strong>起算點：</strong>原則自主刑執行完畢後起算；但若有緩刑或褫奪公權終身者，則自<strong>裁判確定時</strong>發生效力。
                </div>
              </div>

              <!-- 2. 沒收 -->
              <div class="p-6 rounded-3xl bg-slate-50 dark:bg-slate-900/60 border-2 border-emerald-500/40 space-y-4 flex flex-col justify-between">
                <div class="space-y-3">
                  <div class="flex items-center justify-between">
                    <span class="px-2.5 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 font-mono font-bold text-[11px]">
                      物之強制徵收
                    </span>
                    <span class="text-xs font-bold text-emerald-600 dark:text-emerald-400 font-mono">§ 38</span>
                  </div>

                  <h4 class="text-base font-black text-slate-900 dark:text-white">
                    (二) 沒收（Confiscation）
                  </h4>

                  <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    將物品強制徵收歸於國庫。課本依 § 38 區分三大標的：
                  </p>

                  <div class="space-y-1.5 text-xs text-slate-600 dark:text-slate-300">
                    <div class="p-2 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                      <strong>1. 必沒收之違禁物：</strong>無合法持有權限之物（71台上745例）。
                    </div>
                    <div class="p-2 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                      <strong>2. 得沒收之供犯罪用物：</strong>如行兇水果刀。
                    </div>
                    <div class="p-2 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                      <strong>3. 得沒收之犯罪所得物：</strong>如殺人酬勞。
                    </div>
                  </div>

                  <div class="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-[11.5px] text-slate-600 dark:text-slate-300">
                    <strong>相對沒收 vs. 絕對沒收：</strong>前者限於犯人所有且附隨主刑；後者不限犯人所有（§ 38 Ⅱ）得單獨宣告（§ 40 Ⅱ）。
                  </div>
                </div>

                <!-- 2026 沒收新制重大查核 -->
                <div class="p-2.5 rounded-xl bg-emerald-100/70 dark:bg-emerald-950/60 border border-emerald-300 dark:border-emerald-800 text-[10.5px] text-emerald-900 dark:text-emerald-200">
                  <strong>📌 2026 沒收新制：</strong>105 年起沒收已抽離從刑，獨立為<strong>第五編之一專章獨立法律效果</strong>，任何人不得保有犯罪所得！
                </div>
              </div>

              <!-- 3. 追徵、追繳或抵償 -->
              <div class="p-6 rounded-3xl bg-slate-50 dark:bg-slate-900/60 border-2 border-amber-500/40 space-y-4 flex flex-col justify-between">
                <div class="space-y-3">
                  <div class="flex items-center justify-between">
                    <span class="px-2.5 py-0.5 rounded-full bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300 font-mono font-bold text-[11px]">
                      沒收之補充規定
                    </span>
                    <span class="text-xs font-bold text-amber-600 dark:text-amber-400 font-mono">§ 38-1</span>
                  </div>

                  <h4 class="text-base font-black text-slate-900 dark:text-white">
                    (三) 追徵、追繳或抵償
                  </h4>

                  <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    當沒收標的物因故無從執行時（如賄款已被花用殆盡），以<strong>追徵價額</strong>加以取代，徹底剝奪犯罪不法利得。
                  </p>

                  <!-- 總額原則 vs 淨額原則爭點框 -->
                  <div class="p-3 rounded-2xl bg-white dark:bg-slate-800 border border-amber-200 dark:border-amber-800 space-y-1.5 text-xs">
                    <span class="font-bold text-amber-800 dark:text-amber-300 flex items-center gap-1">
                      <span>⚖️</span>
                      <span>重大爭議：是否扣除犯罪成本？</span>
                    </span>
                    <div class="space-y-1 text-[11.5px] text-slate-600 dark:text-slate-300">
                      <div>• <strong>總額原則（Bruttoprinzip）：</strong>不應扣除犯罪成本（免刑成本＋犯罪利潤全沒收，現行實務通說）。</div>
                      <div>• <strong>淨額原則（Nettoprinzip）：</strong>應扣除正當成本，僅剝奪實質淨利潤。</div>
                    </div>
                  </div>
                </div>

                <div class="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-[11px] text-slate-500">
                  新制下統一使用「<strong>追徵其價額</strong>」，體系更為統一明晰。
                </div>
              </div>

            </div>
          </section>

          <!-- ==================== 四、法定刑之四大主刑配置模式 ==================== -->
          <section id="sec-p0ch3-sec1-penalty-patterns" class="space-y-6 pt-2">
            <div class="flex items-center justify-between border-b border-slate-100 dark:border-white/[0.06] pb-2">
              <div class="flex items-center gap-3">
                <span class="w-2 h-6 rounded-full bg-teal-600"></span>
                <h3 class="text-lg sm:text-xl font-black text-slate-900 dark:text-white tracking-tight">
                  四、法定刑之四大主刑配置模式（教材第 2-28 ～ 2-29 頁）
                </h3>
              </div>
              <span class="text-[11px] font-mono px-2 py-0.5 rounded bg-teal-50 dark:bg-teal-950 text-teal-600 dark:text-teal-400 font-bold">
                選科 vs 併科
              </span>
            </div>

            <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              當法定刑只有唯一主刑時不會發生任何理解困難；但在有複數主刑時則有<strong>選科（多數中擇一）</strong>與<strong>併科（得同時科處多數）</strong>之分，教材歸納出四大標準模式：
            </p>

            <!-- 🐣 四大主刑配置模式小白秒懂專區 -->
            <div class="rounded-2xl border-2 border-amber-300 dark:border-amber-700/80 bg-gradient-to-br from-amber-50/90 via-orange-50/60 to-yellow-50/70 dark:from-amber-950/40 dark:via-orange-950/30 dark:to-yellow-950/30 p-5 space-y-4 shadow-sm">
              <div class="flex items-center gap-2.5 border-b border-amber-200 dark:border-amber-800/60 pb-3">
                <span class="text-2xl animate-bounce">🐣</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-amber-950 dark:text-amber-200">
                    【小白秒懂專區】四大主刑配置：選科與併科到底怎麼區分？
                  </h4>
                  <p class="text-xs text-amber-800 dark:text-amber-300 font-medium">
                    國考法條暗號大解密：或（二選一）、併（買一送一）、或科或併（隨意自由配）！
                  </p>
                </div>
              </div>

              <div class="grid grid-cols-1 md:grid-cols-4 gap-3 text-xs sm:text-sm">
                <div class="p-3.5 rounded-xl bg-white/95 dark:bg-slate-900/90 border border-amber-200 dark:border-amber-800/60 space-y-1.5 shadow-xs">
                  <span class="text-slate-700 dark:text-slate-300 font-black block flex items-center gap-1.5">
                    <span class="w-5 h-5 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-200 flex items-center justify-center text-xs font-bold">1</span>
                    <span>唯一主刑（無選擇）</span>
                  </span>
                  <p class="text-xs text-slate-700 dark:text-slate-200 leading-relaxed font-normal">
                    條文只寫一種刑，法官沒有其他種類可挑，只能在該範圍內決定期數（如過失致死未遂處二年以下徒刑）。
                  </p>
                </div>

                <div class="p-3.5 rounded-xl bg-white/95 dark:bg-slate-900/90 border border-amber-200 dark:border-amber-800/60 space-y-1.5 shadow-xs">
                  <span class="text-blue-700 dark:text-blue-400 font-black block flex items-center gap-1.5">
                    <span class="w-5 h-5 rounded-full bg-blue-100 dark:bg-blue-950 text-blue-800 dark:text-blue-200 flex items-center justify-center text-xs font-bold">2</span>
                    <span>選科（多選一）</span>
                  </span>
                  <p class="text-xs text-slate-700 dark:text-slate-200 leading-relaxed font-normal">
                    條文寫「有期徒刑、拘役<strong>『或』</strong>罰金」。法官只能三選一，絕對不能既判坐牢又罰錢！
                  </p>
                </div>

                <div class="p-3.5 rounded-xl bg-white/95 dark:bg-slate-900/90 border border-amber-200 dark:border-amber-800/60 space-y-1.5 shadow-xs">
                  <span class="text-purple-700 dark:text-purple-400 font-black block flex items-center gap-1.5">
                    <span class="w-5 h-5 rounded-full bg-purple-100 dark:bg-purple-950 text-purple-800 dark:text-purple-200 flex items-center justify-center text-xs font-bold">3</span>
                    <span>併科（雙管齊下）</span>
                  </span>
                  <p class="text-xs text-slate-700 dark:text-slate-200 leading-relaxed font-normal">
                    條文寫「處有期徒刑，<strong>『得併科』</strong>罰金」。法官判你坐牢之外，還可以再狠狠罰你一筆錢！
                  </p>
                </div>

                <div class="p-3.5 rounded-xl bg-white/95 dark:bg-slate-900/90 border border-amber-200 dark:border-amber-800/60 space-y-1.5 shadow-xs">
                  <span class="text-emerald-700 dark:text-emerald-400 font-black block flex items-center gap-1.5">
                    <span class="w-5 h-5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-200 flex items-center justify-center text-xs font-bold">4</span>
                    <span>選科或併科（最大彈性）</span>
                  </span>
                  <p class="text-xs text-slate-700 dark:text-slate-200 leading-relaxed font-normal">
                    條文寫「處徒刑，<strong>『或科或併科』</strong>罰金」。法官可以只判罰金，也可以判坐牢＋罰金，裁量權最大！
                  </p>
                </div>
              </div>
            </div>

            <!-- 四大模式對比網格 -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              
              <!-- 模式 1: 唯一主刑模式 -->
              <div class="p-5 rounded-3xl bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-800 space-y-3">
                <div class="flex items-center justify-between">
                  <span class="px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-mono font-bold text-[11px]">
                    模式 ①
                  </span>
                  <span class="text-xs font-mono text-slate-400 font-bold">唯一主刑</span>
                </div>
                <h4 class="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <span>🔒</span>
                  <span>唯一主刑模式（無選擇空間）</span>
                </h4>
                <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 font-mono text-xs text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700">
                  如刑法 § 271 Ⅲ：「……處二年以下有期徒刑。」
                </div>
                <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  條文中僅有一種主刑種類規定，法官只能在該刑度範圍內決定刑期，沒有其他主刑種類可供挑選。
                </p>
              </div>

              <!-- 模式 2: 多數主刑選科模式 -->
              <div class="p-5 rounded-3xl bg-white dark:bg-slate-900 border-2 border-blue-500/40 space-y-3">
                <div class="flex items-center justify-between">
                  <span class="px-2.5 py-0.5 rounded-full bg-blue-100 dark:bg-blue-950 text-blue-800 dark:text-blue-300 font-mono font-bold text-[11px]">
                    模式 ②
                  </span>
                  <span class="text-xs font-mono text-blue-600 dark:text-blue-400 font-bold">選科模式</span>
                </div>
                <h4 class="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <span>🎯</span>
                  <span>多數主刑選科模式（多中選一）</span>
                </h4>
                <div class="p-3 rounded-xl bg-blue-50/60 dark:bg-blue-950/40 font-mono text-xs text-slate-800 dark:text-slate-200 border border-blue-200 dark:border-blue-900">
                  如刑法 § 276 Ⅰ：「……處五年以下有期徒刑、拘役或五十萬元以下罰金。」
                </div>
                <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  可以在<strong>有期徒刑、拘役與罰金中挑選一個科處</strong>，不能同時宣告兩個以上主刑。
                </p>
              </div>

              <!-- 模式 3: 多數主刑併科模式 -->
              <div class="p-5 rounded-3xl bg-white dark:bg-slate-900 border-2 border-purple-500/40 space-y-3">
                <div class="flex items-center justify-between">
                  <span class="px-2.5 py-0.5 rounded-full bg-purple-100 dark:bg-purple-950 text-purple-800 dark:text-purple-300 font-mono font-bold text-[11px]">
                    模式 ③
                  </span>
                  <span class="text-xs font-mono text-purple-600 dark:text-purple-400 font-bold">併科模式</span>
                </div>
                <h4 class="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <span>➕</span>
                  <span>多數主刑併科模式（主刑＋罰金）</span>
                </h4>
                <div class="p-3 rounded-xl bg-purple-50/60 dark:bg-purple-950/40 font-mono text-xs text-slate-800 dark:text-slate-200 border border-purple-200 dark:border-purple-900">
                  如刑法 § 276 Ⅱ 舊法：「……處五年以下有期徒刑或拘役，得併科三千元以下罰金。」
                </div>
                <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  除了在有期徒刑與拘役中選擇外，法官還<strong>可以同時併科罰金</strong>，同時發動自由刑與財產刑。
                </p>
              </div>

              <!-- 模式 4: 多數主刑選科或併科模式 -->
              <div class="p-5 rounded-3xl bg-white dark:bg-slate-900 border-2 border-emerald-500/40 space-y-3">
                <div class="flex items-center justify-between">
                  <span class="px-2.5 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 font-mono font-bold text-[11px]">
                    模式 ④
                  </span>
                  <span class="text-xs font-mono text-emerald-600 dark:text-emerald-400 font-bold">選科或併科</span>
                </div>
                <h4 class="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <span>🔀</span>
                  <span>多數主刑選科或併科模式（雙重彈性）</span>
                </h4>
                <div class="p-3 rounded-xl bg-emerald-50/60 dark:bg-emerald-950/40 font-mono text-xs text-slate-800 dark:text-slate-200 border border-emerald-200 dark:border-emerald-900">
                  如刑法 § 185-3 舊法：「……處二年以下有期徒刑、拘役或科或併科二十萬元以下罰金。」
                </div>
                <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  法官享有雙重裁量彈性：可以就本罪<strong>僅選擇單獨科處罰金</strong>，或是除判處有期徒刑/拘役外，<strong>同時併科罰金</strong>。
                </p>
              </div>

            </div>
          </section>

          <!-- ==================== Chapter Bottom Pagination: 第一節底部雙向導航 ==================== -->
          <div class="pt-8 border-t border-slate-200 dark:border-white/[0.08] grid grid-cols-1 sm:grid-cols-2 gap-4">
            <button onclick="switchView('part0-chapter-3')" class="group p-4 rounded-2xl border border-slate-200 dark:border-white/[0.08] hover:border-indigo-500/40 bg-white dark:bg-[#111726] text-left transition-all hover:-translate-y-0.5 shadow-sm hover:shadow-md flex items-center gap-3 cursor-pointer">
              <div class="w-9 h-9 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 group-hover:bg-indigo-50 dark:group-hover:bg-indigo-950 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 flex items-center justify-center text-sm font-bold shrink-0 transition-colors">
                ←
              </div>
              <div class="min-w-0">
                <span class="text-[11px] text-slate-400 font-mono block">上一單元 (教材第 2-25 ～ 2-27 頁)</span>
                <span class="text-xs font-bold text-slate-800 dark:text-slate-200 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors truncate block">
                  第三章 導論（刑罰目的理論與思考步驟）
                </span>
              </div>
            </button>

            <button onclick="switchView('part0-ch3-sec2')" class="group p-4 rounded-2xl border border-blue-500/40 hover:border-blue-500 bg-gradient-to-br from-blue-50/50 to-indigo-50/30 dark:from-blue-950/30 dark:to-indigo-950/20 text-right transition-all hover:-translate-y-0.5 shadow-sm hover:shadow-md flex items-center justify-between gap-3 cursor-pointer">
              <div class="min-w-0 text-left">
                <span class="text-[11px] text-blue-700 dark:text-blue-400 font-mono block font-bold">下一單元 (教材第 2-29 ～ 2-31 頁)</span>
                <span class="text-xs font-extrabold text-slate-900 dark:text-white group-hover:text-blue-700 dark:group-hover:text-blue-400 transition-colors truncate block">
                  第二節 刑罰的調整——兼談處斷刑 →
                </span>
              </div>
              <div class="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white flex items-center justify-center text-sm font-bold shrink-0 group-hover:scale-105 transition-transform shadow-md shadow-blue-500/30">
                ⚖️
              </div>
            </button>
          </div>

        </div>
`;
