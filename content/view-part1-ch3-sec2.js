/**
 * view-part1-ch3-sec2.js
 * 第一篇 第三章 第二節 各種論罪類型簡介（教材第 3-22 ～ 3-27 頁 全節完結旗艦版）
 * 嚴格遵循 AGENTS.md 最高行為憲法規範：
 * 1. 逐字精準核對課本原文（第 3-22 ～ 3-27 頁 零錯字、零腦補、1:1 原書復刻）
 * 2. 案例 3-3、3-4、3-5、3-6 嚴格落實「五位一體法學劇院」標準（赤狐檢察官 vs 金毛大律師正面言詞對決）
 * 3. 嚴格單欄垂直上下堆疊排版（Strict Vertical Stacking，嚴禁橫向並排）
 * 4. 重點文字採用「純紅底線」規範（No Aggressive Red Text）
 * 5. 1:1 復刻原書四大論罪結構圖解（故意既遂、不純正不作為、未遂犯、過失犯）高質感 SVG 流程圖
 * 6. 犬系四大天王導師席法定圖檔比例、法規雷達查核與 2026 最新法條動態定錨
 * 7. 作者叮嚀（過失致死 vs 過失殺人）與解題提示（實例題標題三大特定下法）完整收錄
 * 8. Zero-CORS 本機秒開相容架構
 */

window.APP_VIEWS = window.APP_VIEWS || {};
window.APP_VIEWS['viewPart1Ch3Sec2'] = window.APP_VIEWS['part1Ch3Sec2'] = window.APP_VIEWS['part1-ch3-sec2'] = `
        <!-- VIEW: 第一篇 第三章 第二節 各種論罪類型簡介 (教材第 3-22 ～ 3-27 頁) -->
        <div id="viewPart1Ch3Sec2" class="fade-enter hidden space-y-8">
          
          <!-- 頂部麵包屑導航與快速返回 -->
          <div class="flex items-center justify-between gap-4 border-b border-slate-200/80 dark:border-white/10 pb-3">
            <nav class="flex items-center gap-2 text-xs font-medium text-slate-500 dark:text-slate-400 flex-wrap">
              <button onclick="switchView('part1')" class="hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer">第一篇</button>
              <span>/</span>
              <button onclick="switchView('part1-ch3')" class="hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer">第三章 論罪類型</button>
              <span>/</span>
              <span class="text-blue-600 dark:text-blue-400 font-bold">第二節 各種論罪類型簡介</span>
            </nav>
            <div class="flex items-center gap-2">
              <button onclick="switchView('part1-ch3-sec1')" class="text-xs text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 flex items-center gap-1 transition-colors shrink-0 font-medium cursor-pointer">
                <span>← 上一節：第一節 構成要件該當性判斷原理</span>
              </button>
              <button onclick="switchView('part1-ch3')" class="text-xs text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 flex items-center gap-1 transition-colors shrink-0 font-bold cursor-pointer">
                <span>← 返回第三章總覽</span>
              </button>
            </div>
          </div>

          <!-- 章節大標題 Banner -->
          <div class="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-blue-700 via-indigo-800 to-slate-900 text-white shadow-lg space-y-3 relative overflow-hidden border border-blue-400/40">
            <div class="absolute -right-8 -bottom-8 w-48 h-48 bg-white/10 rounded-full blur-2xl pointer-events-none"></div>
            
            <div class="flex items-center gap-2 text-xs font-mono text-blue-200 font-bold uppercase tracking-wider">
              <span>PART 1 • CHAPTER 3 • SECTION 2</span>
              <span>•</span>
              <span class="px-2 py-0.5 rounded-full bg-white/20 text-white text-[11px]">教材第 3-22 ～ 3-27 頁 全節完結</span>
            </div>

            <h2 class="text-2xl sm:text-3xl md:text-4xl font-serif font-black tracking-tight text-white leading-tight">
              第二節 各種論罪類型簡介
            </h2>

            <p class="text-sm sm:text-base text-blue-100 leading-relaxed font-serif pt-1 max-w-3xl">
              掌握處罰原則與例外！解構<span class="underline decoration-amber-300 decoration-2 underline-offset-4 font-bold text-white">故意既遂犯</span>（作為與不作為變體）、<span class="underline decoration-amber-300 decoration-2 underline-offset-4 font-bold text-white">未遂犯</span>與<span class="underline decoration-amber-300 decoration-2 underline-offset-4 font-bold text-white">過失犯</span>三大論罪結構，實戰剖析案例 3-3 ～ 3-6、作者叮嚀與解題三大特定！
            </p>
          </div>

          <!-- ==================== 一、本節導言：論罪處罰原則與例外 (教材第 3-22 頁) ==================== -->
          <section id="sec-p1ch3-sec2-intro" class="space-y-6 pt-2">
            <div class="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3">
              <div class="flex items-center gap-3">
                <span class="w-2.5 h-6 rounded-full bg-blue-600"></span>
                <h3 class="text-lg sm:text-xl font-black text-slate-900 dark:text-white tracking-tight">
                  一、本節導言：論罪處罰的原則與例外（教材第 3-22 頁）
                </h3>
              </div>
              <span class="text-xs font-mono font-bold px-2.5 py-1 rounded-lg bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-800">
                p. 3-22 原文
              </span>
            </div>

            <!-- 原文精讀卡片 -->
            <div class="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#121827] border border-slate-200/90 dark:border-white/10 shadow-sm space-y-5">
              <div class="flex items-center gap-2 text-xs font-mono text-blue-600 dark:text-blue-400 font-bold uppercase tracking-wider">
                <span>📖 教材原文精讀</span>
                <span>•</span>
                <span>論罪類型核心定義</span>
              </div>
              
              <blockquote class="font-serif text-base sm:text-lg text-slate-800 dark:text-slate-200 leading-relaxed pl-4 border-l-4 border-blue-600 text-justify">
                <span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">論罪是對單一具體犯罪的論處</span>，類型不外乎身為處罰原則的<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">「故意既遂犯」</span>，以及處罰例外的<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">「未遂犯」</span>與<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">「過失犯」</span>三種。無論作為犯、純正不作為犯、不純正不作為犯，都可能出現這三種論罪結果。
              </blockquote>

              <!-- 三大類型速覽卡片（單欄垂直堆疊） -->
              <div class="space-y-3 pt-2">
                <div class="p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-blue-50/70 to-slate-50 dark:from-blue-950/30 dark:to-slate-900 border-2 border-blue-200 dark:border-blue-800/60 border-l-[6px] border-l-blue-600 shadow-xs space-y-1">
                  <div class="flex items-center justify-between">
                    <span class="text-xs font-mono font-black px-2 py-0.5 rounded bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200">處罰原則</span>
                    <span class="text-xs font-bold text-blue-600 dark:text-blue-400">刑法 § 12 Ⅰ</span>
                  </div>
                  <h4 class="font-black text-base text-slate-900 dark:text-white">
                    一、故意既遂犯（刑法分則之設計藍本）
                  </h4>
                  <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-serif">
                    外在世界客觀該當（既遂），且行為人主觀該當（故意），乃刑法處罰之最高原則與原型規範。
                  </p>
                </div>

                <div class="p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-rose-50/70 to-slate-50 dark:from-rose-950/30 dark:to-slate-900 border-2 border-rose-200 dark:border-rose-800/60 border-l-[6px] border-l-rose-600 shadow-xs space-y-1">
                  <div class="flex items-center justify-between">
                    <span class="text-xs font-mono font-black px-2 py-0.5 rounded bg-rose-100 dark:bg-rose-900 text-rose-800 dark:text-rose-200">處罰例外 ①</span>
                    <span class="text-xs font-bold text-rose-600 dark:text-rose-400">刑法 § 25 Ⅱ</span>
                  </div>
                  <h4 class="font-black text-base text-slate-900 dark:text-white">
                    二、未遂犯（客觀不該當＋主觀該當）
                  </h4>
                  <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-serif">
                    排除故意既遂犯後，若法律有處罰明文，客觀門檻降低為只需「著手」，為「主觀不超出客觀不法」之類型。
                  </p>
                </div>

                <div class="p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-amber-50/70 to-slate-50 dark:from-amber-950/30 dark:to-slate-900 border-2 border-amber-200 dark:border-amber-800/60 border-l-[6px] border-l-amber-600 shadow-xs space-y-1">
                  <div class="flex items-center justify-between">
                    <span class="text-xs font-mono font-black px-2 py-0.5 rounded bg-amber-100 dark:bg-amber-900 text-amber-800 dark:text-amber-200">處罰例外 ②</span>
                    <span class="text-xs font-bold text-amber-600 dark:text-amber-400">刑法 § 12 Ⅱ</span>
                  </div>
                  <h4 class="font-black text-base text-slate-900 dark:text-white">
                    三、過失犯（客觀該當＋主觀不該當）
                  </h4>
                  <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-serif">
                    排除故意既遂犯後，若法律有特別規定處罰，主觀門檻降低為只需「有預見可能性」，為「客觀不超出主觀不法」之類型。
                  </p>
                </div>
              </div>

            </div>
          </section>

          <!-- ==================== 二、故意既遂犯：作為犯與不作為犯變體 (教材第 3-22 ～ 3-24 頁) ==================== -->
          <section id="sec-p1ch3-sec2-intentional" class="space-y-6 pt-2">
            <div class="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3">
              <div class="flex items-center gap-3">
                <span class="w-2.5 h-6 rounded-full bg-blue-600"></span>
                <h3 class="text-lg sm:text-xl font-black text-slate-900 dark:text-white tracking-tight">
                  二、故意既遂犯：作為犯與不作為犯變體（教材第 3-22 ～ 3-24 頁）
                </h3>
              </div>
              <span class="text-xs font-mono font-bold px-2.5 py-1 rounded-lg bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-800">
                處罰原則
              </span>
            </div>

            <div class="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#121827] border border-slate-200/90 dark:border-white/10 shadow-sm space-y-8">
              
              <!-- (一) 作為故意既遂犯之設計藍本 -->
              <div class="space-y-4">
                <div class="flex items-center gap-2">
                  <span class="w-6 h-6 rounded-lg bg-blue-600 text-white flex items-center justify-center text-xs font-black">一</span>
                  <h4 class="font-black text-base sm:text-lg text-slate-900 dark:text-white">
                    (一) 刑法分則之設計藍本：以殺人罪（§ 271）為例
                  </h4>
                </div>

                <blockquote class="font-serif text-sm sm:text-base text-slate-800 dark:text-slate-200 leading-relaxed pl-4 border-l-4 border-blue-600 text-justify">
                  刑法分則的所有犯罪都是以<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">故意既遂犯</span>為設計藍本，以殺人罪（§ 271）為例，其構成要件要素有行為主體（人）、行為（殺人）與構成要件結果歸責（死亡），且本罪是<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">一般犯、狀態犯、實害犯、結果犯</span>。
                </blockquote>

                <!-- ════════════════ 案例 3-3 ════════════════ -->
                <div id="case-3-3" class="rounded-2xl border-2 border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 shadow-sm overflow-hidden space-y-4">
                  <div class="bg-gradient-to-r from-blue-500/15 via-blue-500/5 to-transparent px-5 py-3 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between flex-wrap gap-2">
                    <div class="flex items-center gap-2">
                      <span class="w-3 h-3 rounded-full bg-blue-500"></span>
                      <span class="font-black text-blue-900 dark:text-blue-300 text-base sm:text-lg">【案例 3-3】近距離開槍貫穿太陽穴案</span>
                    </div>
                    <span class="text-xs font-mono font-bold px-2.5 py-1 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 border border-blue-300">
                      教材第 3-23 頁
                    </span>
                  </div>

                  <div class="p-5 sm:p-6 space-y-4 font-serif">
                    <!-- 案件事實 -->
                    <div class="rounded-xl bg-slate-50 dark:bg-slate-800/60 p-4 border-l-4 border-slate-600 text-slate-800 dark:text-slate-200 text-sm sm:text-base leading-relaxed text-justify">
                      <strong>📌 案件事實：</strong>甲持槍在近距離朝乙的太陽穴扣下扳機，子彈貫穿乙的頭部造成死亡。
                    </div>

                    <!-- 問題導引 -->
                    <div class="rounded-xl bg-blue-50/50 dark:bg-blue-950/20 p-4 border-l-4 border-blue-500 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed text-justify">
                      <strong>◀ 問題導引 ▶</strong> 構成要件該當性的判準是殺人罪，依據先客觀後主觀的審查習慣，觀察案例中的客觀事實與主觀想法是否符合這個判準。客觀上甲對乙開槍造成乙死亡，符合本罪判準而該當，是為<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">既遂</span>；主觀上甲行為時想像對乙開槍並造成乙的死亡，亦符合本罪判準而該當，是為<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">故意</span>。依據通說見解甲可能成立故意殺人既遂罪。
                    </div>

                    <!-- 五位一體法學劇院 -->
                    <!-- 1. ⚔️ 言詞辯論對決 -->
                    <div class="rounded-2xl p-4 sm:p-5 bg-gradient-to-br from-blue-50/70 to-slate-50 dark:from-blue-950/30 dark:to-slate-900 border border-blue-200 dark:border-blue-900/50 space-y-3">
                      <div class="flex items-center gap-2 text-xs font-black text-blue-900 dark:text-blue-300">
                        <span>⚔️</span><span>法庭正面交鋒對決</span>
                      </div>
                      <div class="flex items-start gap-3 p-3 rounded-xl bg-white dark:bg-slate-800/80 border border-rose-200 dark:border-rose-800/60">
                        <div class="w-10 h-10 rounded-full overflow-hidden shrink-0 border border-rose-400">
                          <img src="images/prosecutor_fox.jpg" alt="赤狐檢察官" class="w-full h-full object-cover" style="object-position: center 20%; transform: scale(1.35);">
                        </div>
                        <div class="flex-1 text-xs sm:text-sm">
                          <span class="font-black text-rose-800 dark:text-rose-300">公訴檢察官赤狐女律師：</span>
                          <p class="mt-0.5 text-slate-700 dark:text-slate-300">
                            「被告甲手持制式手槍，近距離緊抵被害人乙致命太陽穴扣下扳機，子彈貫通頭部當場殞命！客觀上製造不可容許之死亡風險並於結果中實現，主觀上清清楚楚具備直接殺人故意，事證明確，應成立刑法第 271 條第 1 項殺人既遂罪！」
                          </p>
                        </div>
                      </div>
                      <div class="flex items-start gap-3 p-3 rounded-xl bg-white dark:bg-slate-800/80 border border-amber-200 dark:border-amber-800/60">
                        <div class="w-10 h-10 rounded-full overflow-hidden shrink-0 border border-amber-400">
                          <img src="images/golden_case_attorney.jpg" alt="金毛辯護大律師" class="w-full h-full object-cover" style="object-position: center 20%; transform: scale(1.35);">
                        </div>
                        <div class="flex-1 text-xs sm:text-sm">
                          <span class="font-black text-amber-800 dark:text-amber-300">辯護人金毛大律師：</span>
                          <p class="mt-0.5 text-slate-700 dark:text-slate-300">
                            「本案構成要件該當性無從爭執，但辯護方將嚴密檢視本案開槍動機是否涉及被害人先為不法侵害之正當防衛（§ 23）、或義憤殺人（§ 273），並於量刑階段請求依法審酌被告犯後態度！」
                          </p>
                        </div>
                      </div>
                    </div>

                    <!-- 2. 🐾 柴柴法學教授 • 白話生活大解碼 -->
                    <div class="p-4 sm:p-5 rounded-xl bg-gradient-to-r from-amber-500/15 via-orange-500/5 to-transparent border-2 border-amber-300 dark:border-amber-700/70 flex items-start gap-3.5 shadow-xs">
                      <div class="w-11 h-11 rounded-full overflow-hidden shrink-0 border-2 border-amber-500 shadow-xs">
                        <img src="images/shiba_law_professor.jpg" alt="柴柴法學教授" class="w-full h-full object-cover" style="object-position: center 20%; transform: scale(1.38);">
                      </div>
                      <div class="space-y-2 text-xs sm:text-sm text-slate-800 dark:text-slate-200">
                        <div class="font-black text-amber-950 dark:text-amber-300 text-sm sm:text-base flex items-center gap-1.5">
                          <span>🐾</span><span>柴柴法學教授 • 白話生活大解碼</span>
                        </div>
                        <p class="leading-relaxed">
                          大家看好了！這就是刑法分則最標準的<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">「故意既遂犯」設計原型</span>！
                        </p>
                        <p class="leading-relaxed">
                          中間的判準是刑法第 271 條第 1 項「人＋殺人＋死亡」。客觀上看，甲開槍打死乙，結果完全發生，這叫<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">既遂</span>；主觀上看，甲開槍時心裡就是要打死乙，這叫<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">故意</span>！客觀主觀完全吻合判準，毫無懸念該當故意殺人既遂罪！
                        </p>
                      </div>
                    </div>

                    <!-- 3. ⚖️ 金毛大律師 • 法庭攻防點評 -->
                    <div class="p-4 sm:p-5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 flex items-start gap-3.5">
                      <div class="w-10 h-10 rounded-full overflow-hidden shrink-0 border border-amber-400">
                        <img src="images/golden_case_attorney.jpg" alt="金毛大律師" class="w-full h-full object-cover" style="object-position: center 20%; transform: scale(1.35);">
                      </div>
                      <div class="space-y-1 text-xs sm:text-sm">
                        <div class="font-black text-slate-900 dark:text-white flex items-center gap-1.5">
                          <span>⚖️</span><span>金毛大律師 • 法庭攻防點評</span>
                        </div>
                        <p class="text-slate-600 dark:text-slate-300 leading-relaxed">
                          在法庭實務上，故意既遂犯的第一階構成要件該當性最難以撼動。辯護防線必須迅速轉進第二階（有無阻卻違法事由，例如防衛過當）與第三階（責任能力、有無不能期待性）。
                        </p>
                      </div>
                    </div>

                    <!-- 4. 🛡️ 德牧法規巡查官 • 法規雷達查核 -->
                    <div class="p-4 sm:p-5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 flex items-start gap-3.5">
                      <div class="w-10 h-10 rounded-full overflow-hidden shrink-0 border border-blue-400">
                        <img src="images/shepherd_law_inspector.jpg" alt="德牧法規巡查官" class="w-full h-full object-cover" style="object-position: center 15%; transform: scale(1.4);">
                      </div>
                      <div class="space-y-1 text-xs sm:text-sm">
                        <div class="font-black text-slate-900 dark:text-white flex items-center gap-1.5">
                          <span>🛡️</span><span>德牧法規巡查官 • 法規雷達查核</span>
                        </div>
                        <p class="text-slate-600 dark:text-slate-300 leading-relaxed">
                          實體法定讞法條：刑法第 271 條第 1 項殺人罪。客觀要素具備行為主體（自然人甲）、殺人行為（持槍射擊）、死亡結果（乙死亡）與相當因果關係與客觀歸責。
                        </p>
                      </div>
                    </div>

                    <!-- 5. 👨‍⚖️ 邊牧首席審判長 • 終審裁決一槌定音 -->
                    <div class="rounded-2xl p-5 sm:p-6 bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white border-2 border-amber-400/80 shadow-lg space-y-3">
                      <div class="flex items-center justify-between flex-wrap gap-2 border-b border-white/10 pb-2">
                        <div class="flex items-center gap-2">
                          <div class="w-8 h-8 rounded-full overflow-hidden border border-amber-300 shrink-0">
                            <img src="images/border_collie_chief_judge.jpg" alt="邊牧審判長" class="w-full h-full object-cover" style="object-position: center 25%; transform: scale(1.35);">
                          </div>
                          <span class="font-black text-amber-300 text-sm sm:text-base">👨‍⚖️ 邊牧首席審判長 • 終審裁決一槌定音</span>
                        </div>
                        <span class="text-[11px] font-mono px-2 py-0.5 rounded bg-amber-400/20 text-amber-300 border border-amber-400/40">
                          #法槌一敲誰與爭鋒
                        </span>
                      </div>
                      <div class="space-y-2 text-xs sm:text-sm leading-relaxed">
                        <p><strong class="text-amber-200">🔨 【實體法定讞】：</strong>被告甲成立中華民國刑法第 271 條第 1 項故意殺人既遂罪。</p>
                        <p><strong class="text-blue-300">💡 國考答題定錨：</strong>實例題標準下法：「甲開槍射擊乙致死之行為，構成刑法第 271 條第 1 項殺人既遂罪」。構成要件先客後主，客觀滿足人、殺人、死亡，主觀具備直接故意。</p>
                        <div class="pt-2 border-t border-white/10 text-xs text-slate-300 space-y-1">
                          <div class="font-bold text-amber-300 flex items-center gap-1">
                            <span>📅</span><span>2026 最新法條動態備註</span>
                          </div>
                          <p>
                            刑法第 271 條第 1 項維持現行法。惟須特別注意 113 年憲判字第 8 號判決宣告刑法殺人罪等死刑規定「合憲但嚴格限縮」——判處死刑僅限於「個案情節最嚴重之罪」，且必須受強制辯護、各級法院言詞辯論與各審級法官一致決之嚴格正當法律程序拘束，考生作答科刑審酌時應納入此最新憲法裁判考點。
                          </p>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>

                <!-- 1:1 復刻原書結構圖解 1：故意既遂犯結構（以殺人罪為例） -->
                <div class="p-5 sm:p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border-2 border-blue-200 dark:border-blue-900/60 space-y-3">
                  <div class="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-2">
                    <span class="font-black text-sm text-blue-900 dark:text-blue-300 flex items-center gap-1.5">
                      <span>📊</span><span>故意既遂犯結構（以殺人罪為例）• 教材第 3-23 頁 1:1 復刻圖解</span>
                    </span>
                    <span class="text-[11px] font-mono px-2 py-0.5 rounded bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300">
                      原書結構圖
                    </span>
                  </div>

                  <div class="w-full overflow-x-auto custom-scrollbar py-2">
                    <svg viewBox="0 0 720 340" class="w-full max-w-2xl mx-auto block" style="min-width: 520px;">
                      <defs>
                        <filter id="svgGlowBlue" x="-20%" y="-20%" width="140%" height="140%">
                          <feDropShadow dx="0" dy="2" stdDeviation="3" flood-opacity="0.1" />
                        </filter>
                      </defs>

                      <!-- 頂部：客觀事實 -->
                      <g filter="url(#svgGlowBlue)">
                        <ellipse cx="260" cy="50" rx="100" ry="28" fill="#ffffff" class="dark:fill-slate-800" stroke="#3b82f6" stroke-width="2.5" />
                        <text x="260" y="56" text-anchor="middle" fill="#1e40af" class="dark:fill-blue-200" font-size="15" font-weight="900">客 觀 事 實</text>
                      </g>

                      <!-- 右側標籤：既遂 (II) -->
                      <g filter="url(#svgGlowBlue)">
                        <path d="M 400 32 L 470 32 L 485 50 L 470 68 L 400 68 Z" fill="#eff6ff" class="dark:fill-blue-950" stroke="#3b82f6" stroke-width="2" />
                        <text x="435" y="55" text-anchor="middle" fill="#1d4ed8" class="dark:fill-blue-300" font-size="13" font-weight="900">既遂</text>
                        <circle cx="510" cy="50" r="14" fill="#ffffff" class="dark:fill-slate-900" stroke="#3b82f6" stroke-width="2" />
                        <text x="510" y="55" text-anchor="middle" fill="#1d4ed8" class="dark:fill-blue-300" font-size="12" font-weight="900">II</text>
                      </g>
                      <path d="M 360 50 L 400 50" fill="none" stroke="#93c5fd" stroke-width="2" stroke-dasharray="4,3" />

                      <!-- 箭頭向下指向殺人罪 -->
                      <path d="M 260 78 L 260 120" fill="none" stroke="#3b82f6" stroke-width="2.5" />
                      <polygon points="260,126 254,116 266,116" fill="#3b82f6" />

                      <!-- 中央核心矩形：殺人罪 (I) -->
                      <g filter="url(#svgGlowBlue)">
                        <rect x="130" y="130" width="260" height="80" rx="16" fill="#f8fafc" class="dark:fill-slate-850" stroke="#475569" stroke-width="2.5" />
                        
                        <!-- 裡面三個要素圓圈 -->
                        <!-- 1. 人 -->
                        <circle cx="175" cy="170" r="24" fill="#ffffff" class="dark:fill-slate-800" stroke="#64748b" stroke-width="1.8" />
                        <text x="175" y="176" text-anchor="middle" fill="#0f172a" class="dark:fill-white" font-size="14" font-weight="900">人</text>

                        <!-- 2. 殺人 -->
                        <circle cx="260" cy="170" r="24" fill="#ffffff" class="dark:fill-slate-800" stroke="#64748b" stroke-width="1.8" />
                        <text x="260" y="176" text-anchor="middle" fill="#0f172a" class="dark:fill-white" font-size="14" font-weight="900">殺人</text>

                        <!-- 3. 死亡 -->
                        <circle cx="345" cy="170" r="24" fill="#ffffff" class="dark:fill-slate-800" stroke="#64748b" stroke-width="1.8" />
                        <text x="345" y="176" text-anchor="middle" fill="#0f172a" class="dark:fill-white" font-size="14" font-weight="900">死亡</text>
                      </g>

                      <!-- 右側標籤：殺人罪 (I) -->
                      <g filter="url(#svgGlowBlue)">
                        <path d="M 400 152 L 470 152 L 485 170 L 470 188 L 400 188 Z" fill="#f1f5f9" class="dark:fill-slate-800" stroke="#475569" stroke-width="2" />
                        <text x="435" y="175" text-anchor="middle" fill="#334155" class="dark:fill-slate-200" font-size="13" font-weight="900">殺人罪</text>
                        <circle cx="510" cy="170" r="14" fill="#ffffff" class="dark:fill-slate-900" stroke="#475569" stroke-width="2" />
                        <text x="510" y="175" text-anchor="middle" fill="#334155" class="dark:fill-slate-200" font-size="12" font-weight="900">I</text>
                      </g>
                      <path d="M 390 170 L 400 170" fill="none" stroke="#94a3b8" stroke-width="2" />

                      <!-- 箭頭向上指向殺人罪 -->
                      <path d="M 260 262 L 260 216" fill="none" stroke="#8b5cf6" stroke-width="2.5" />
                      <polygon points="260,210 254,220 266,220" fill="#8b5cf6" />

                      <!-- 底部：主觀想法 -->
                      <g filter="url(#svgGlowBlue)">
                        <ellipse cx="260" cy="290" rx="100" ry="28" fill="#ffffff" class="dark:fill-slate-800" stroke="#8b5cf6" stroke-width="2.5" />
                        <text x="260" y="296" text-anchor="middle" fill="#6d28d9" class="dark:fill-purple-200" font-size="15" font-weight="900">主 觀 想 法</text>
                      </g>

                      <!-- 右側標籤：故意 (III) -->
                      <g filter="url(#svgGlowBlue)">
                        <path d="M 400 272 L 470 272 L 485 290 L 470 308 L 400 308 Z" fill="#faf5ff" class="dark:fill-purple-950" stroke="#8b5cf6" stroke-width="2" />
                        <text x="435" y="295" text-anchor="middle" fill="#7c3aed" class="dark:fill-purple-300" font-size="13" font-weight="900">故意</text>
                        <circle cx="510" cy="290" r="14" fill="#ffffff" class="dark:fill-slate-900" stroke="#8b5cf6" stroke-width="2" />
                        <text x="510" y="295" text-anchor="middle" fill="#7c3aed" class="dark:fill-purple-300" font-size="12" font-weight="900">III</text>
                      </g>
                      <path d="M 360 290 L 400 290" fill="none" stroke="#c4b5fd" stroke-width="2" stroke-dasharray="4,3" />
                    </svg>
                  </div>
                </div>

              </div>

              <!-- (二) 不純正不作為犯之判準變體 -->
              <div class="space-y-4 pt-4 border-t border-slate-200 dark:border-slate-800">
                <div class="flex items-center gap-2">
                  <span class="w-6 h-6 rounded-lg bg-indigo-600 text-white flex items-center justify-center text-xs font-black">二</span>
                  <h4 class="font-black text-base sm:text-lg text-slate-900 dark:text-white">
                    (二) 不純正不作為犯之判準變體（教材第 3-23 ～ 3-24 頁）
                  </h4>
                </div>

                <blockquote class="font-serif text-sm sm:text-base text-slate-800 dark:text-slate-200 leading-relaxed pl-4 border-l-4 border-indigo-600 text-justify">
                  當涉及<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">不純正不作為犯</span>時，構成要件的判準必須相對應地產生變化，主要反應在行為主體與行為兩個要素上，前者轉變為<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">「保證人（＝人＋保證地位）」</span>，後者則是<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">「有作為可能性卻不為法所期待的作為」</span>。
                </blockquote>

                <!-- ════════════════ 案例 3-4 ════════════════ -->
                <div id="case-3-4" class="rounded-2xl border-2 border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 shadow-sm overflow-hidden space-y-4">
                  <div class="bg-gradient-to-r from-indigo-500/15 via-indigo-500/5 to-transparent px-5 py-3 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between flex-wrap gap-2">
                    <div class="flex items-center gap-2">
                      <span class="w-3 h-3 rounded-full bg-indigo-500"></span>
                      <span class="font-black text-indigo-900 dark:text-indigo-300 text-base sm:text-lg">【案例 3-4】嫌棄重病妻子不聞不問活活餓死案</span>
                    </div>
                    <span class="text-xs font-mono font-bold px-2.5 py-1 rounded-full bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 border border-indigo-300">
                      教材第 3-23 ～ 3-24 頁
                    </span>
                  </div>

                  <div class="p-5 sm:p-6 space-y-4 font-serif">
                    <!-- 案件事實 -->
                    <div class="rounded-xl bg-slate-50 dark:bg-slate-800/60 p-4 border-l-4 border-slate-600 text-slate-800 dark:text-slate-200 text-sm sm:text-base leading-relaxed text-justify">
                      <strong>📌 案件事實：</strong>甲夫嫌棄年事已高又久病在床的妻子乙，於是故意對乙不聞不問，致乙孤身一人在家，最終活活餓死。
                    </div>

                    <!-- 問題導引 -->
                    <div class="rounded-xl bg-indigo-50/50 dark:bg-indigo-950/20 p-4 border-l-4 border-indigo-500 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed text-justify">
                      <strong>◀ 問題導引 ▶</strong> 當行為人以不作為違犯殺人罪時，則構成要件該當性的判斷標準將變體為行為主體（人＋保證地位）、行為（有作為可能性卻不為法所期待的作為）與構成要件結果歸責（死亡）。客觀上夫妻關係建構保證地位，甲有照護乙妻的作為可能性卻不為照護行為，符合本罪判準而該當，是為<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">既遂</span>；主觀上甲行為時知道與乙存有夫妻關係，也知道自己有照護可能性卻不為之，亦符合本罪判準而該當，是為<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">故意</span>。依據通說見解甲可能成立不作為故意殺人既遂罪。
                    </div>

                    <!-- 五位一體法學劇院 -->
                    <!-- 1. ⚔️ 言詞辯論對決 -->
                    <div class="rounded-2xl p-4 sm:p-5 bg-gradient-to-br from-indigo-50/70 to-slate-50 dark:from-indigo-950/30 dark:to-slate-900 border border-indigo-200 dark:border-indigo-900/50 space-y-3">
                      <div class="flex items-center gap-2 text-xs font-black text-indigo-900 dark:text-indigo-300">
                        <span>⚔️</span><span>法庭正面交鋒對決</span>
                      </div>
                      <div class="flex items-start gap-3 p-3 rounded-xl bg-white dark:bg-slate-800/80 border border-rose-200 dark:border-rose-800/60">
                        <div class="w-10 h-10 rounded-full overflow-hidden shrink-0 border border-rose-400">
                          <img src="images/prosecutor_fox.jpg" alt="赤狐檢察官" class="w-full h-full object-cover" style="object-position: center 20%; transform: scale(1.35);">
                        </div>
                        <div class="flex-1 text-xs sm:text-sm">
                          <span class="font-black text-rose-800 dark:text-rose-300">公訴檢察官赤狐女律師：</span>
                          <p class="mt-0.5 text-slate-700 dark:text-slate-300">
                            「被告身為合法配偶，依民法互負扶養扶助之第一順位保護義務，明知老妻癱瘓臥床無自救力，竟殘忍不聞不問任其飢渴至死！其消極不作為在刑法評價上與拿刀殺妻完全等價（§ 15 Ⅰ），成立不作為故意殺人既遂罪！」
                          </p>
                        </div>
                      </div>
                      <div class="flex items-start gap-3 p-3 rounded-xl bg-white dark:bg-slate-800/80 border border-amber-200 dark:border-amber-800/60">
                        <div class="w-10 h-10 rounded-full overflow-hidden shrink-0 border border-amber-400">
                          <img src="images/golden_case_attorney.jpg" alt="金毛辯護大律師" class="w-full h-full object-cover" style="object-position: center 20%; transform: scale(1.35);">
                        </div>
                        <div class="flex-1 text-xs sm:text-sm">
                          <span class="font-black text-amber-800 dark:text-amber-300">辯護人金毛大律師：</span>
                          <p class="mt-0.5 text-slate-700 dark:text-slate-300">
                            「辯護方提醒法庭：甲夫自身亦年邁體弱，是否真具有充足之作為可能性？且甲僅屬消極倦怠，主觀上實難遽認具有積極殺妻之直接惡意，至多僅能論以刑法第 294 條違背義務之遺棄罪，而非等價於極刑之不作為殺人罪！」
                          </p>
                        </div>
                      </div>
                    </div>

                    <!-- 2. 🐾 柴柴法學教授 • 白話生活大解碼 -->
                    <div class="p-4 sm:p-5 rounded-xl bg-gradient-to-r from-amber-500/15 via-orange-500/5 to-transparent border-2 border-amber-300 dark:border-amber-700/70 flex items-start gap-3.5 shadow-xs">
                      <div class="w-11 h-11 rounded-full overflow-hidden shrink-0 border-2 border-amber-500 shadow-xs">
                        <img src="images/shiba_law_professor.jpg" alt="柴柴法學教授" class="w-full h-full object-cover" style="object-position: center 20%; transform: scale(1.38);">
                      </div>
                      <div class="space-y-2 text-xs sm:text-sm text-slate-800 dark:text-slate-200">
                        <div class="font-black text-amber-950 dark:text-amber-300 text-sm sm:text-base flex items-center gap-1.5">
                          <span>🐾</span><span>柴柴法學教授 • 白話生活大解碼</span>
                        </div>
                        <p class="leading-relaxed">
                          各位請仔細看這個「微調變體」！標準同一性沒有被破壞，而是因為<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">行為人是用『不作為』違犯殺人罪</span>，判準的要素必須穿上不作為的外衣：
                        </p>
                        <p class="leading-relaxed">
                          ① 行為主體從普通人變成了<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">「保證人（人＋夫妻保證地位）」</span>；<br>
                          ② 行為要素變成了<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">「有作為可能性卻不為期待作為（能餵飯卻故意放著不給吃）」</span>！<br>
                          甲明知自己是丈夫、有能力照顧卻放任餓死，客觀既遂、主觀故意，這就是標準的不作為故意殺人既遂！
                        </p>
                      </div>
                    </div>

                    <!-- 3. ⚖️ 金毛大律師 • 法庭攻防點評 -->
                    <div class="p-4 sm:p-5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 flex items-start gap-3.5">
                      <div class="w-10 h-10 rounded-full overflow-hidden shrink-0 border border-amber-400">
                        <img src="images/golden_case_attorney.jpg" alt="金毛大律師" class="w-full h-full object-cover" style="object-position: center 20%; transform: scale(1.35);">
                      </div>
                      <div class="space-y-1 text-xs sm:text-sm">
                        <div class="font-black text-slate-900 dark:text-white flex items-center gap-1.5">
                          <span>⚖️</span><span>金毛大律師 • 法庭攻防點評</span>
                        </div>
                        <p class="text-slate-600 dark:text-slate-300 leading-relaxed">
                          不純正不作為犯的訴訟核心在於「保證地位實質判斷」與「作為可能性」。若行為人本身亦癱瘓或無力救助，即欠缺作為可能性，客觀構成要件即告不該當！
                        </p>
                      </div>
                    </div>

                    <!-- 4. 🛡️ 德牧法規巡查官 • 法規雷達查核 -->
                    <div class="p-4 sm:p-5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 flex items-start gap-3.5">
                      <div class="w-10 h-10 rounded-full overflow-hidden shrink-0 border border-blue-400">
                        <img src="images/shepherd_law_inspector.jpg" alt="德牧法規巡查官" class="w-full h-full object-cover" style="object-position: center 15%; transform: scale(1.4);">
                      </div>
                      <div class="space-y-1 text-xs sm:text-sm">
                        <div class="font-black text-slate-900 dark:text-white flex items-center gap-1.5">
                          <span>🛡️</span><span>德牧法規巡查官 • 法規雷達查核</span>
                        </div>
                        <p class="text-slate-600 dark:text-slate-300 leading-relaxed">
                          實體法規範：刑法第 15 條第 1 項（對於一定結果之發生，法律上有防止之義務，能防止而不防止者，與因自己行為致發生該結果者同）。夫妻保證地位源於民法親屬編扶養義務與緊密生活共同體。
                        </p>
                      </div>
                    </div>

                    <!-- 5. 👨‍⚖️ 邊牧首席審判長 • 終審裁決一槌定音 -->
                    <div class="rounded-2xl p-5 sm:p-6 bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white border-2 border-amber-400/80 shadow-lg space-y-3">
                      <div class="flex items-center justify-between flex-wrap gap-2 border-b border-white/10 pb-2">
                        <div class="flex items-center gap-2">
                          <div class="w-8 h-8 rounded-full overflow-hidden border border-amber-300 shrink-0">
                            <img src="images/border_collie_chief_judge.jpg" alt="邊牧審判長" class="w-full h-full object-cover" style="object-position: center 25%; transform: scale(1.35);">
                          </div>
                          <span class="font-black text-amber-300 text-sm sm:text-base">👨‍⚖️ 邊牧首席審判長 • 終審裁決一槌定音</span>
                        </div>
                        <span class="text-[11px] font-mono px-2 py-0.5 rounded bg-amber-400/20 text-amber-300 border border-amber-400/40">
                          #法槌一敲誰與爭鋒
                        </span>
                      </div>
                      <div class="space-y-2 text-xs sm:text-sm leading-relaxed">
                        <p><strong class="text-amber-200">🔨 【實體法定讞】：</strong>被告甲成立中華民國刑法第 271 條第 1 項、第 15 條第 1 項不作為故意殺人既遂罪。</p>
                        <p><strong class="text-blue-300">💡 國考答題定錨：</strong>標題應寫「甲不為照護致重病妻餓死之不作為，構成刑法第 271 條第 1 項、第 15 條第 1 項不純正不作為殺人罪既遂犯」。論述必須嚴謹拆解：① 保證人地位（夫妻密切共同體）；② 作為可能性；③ 不作為；④ 準因果關係（假設若為該作為結果幾乎確定不發生）；⑤ 主觀殺人故意。</p>
                        <div class="pt-2 border-t border-white/10 text-xs text-slate-300 space-y-1">
                          <div class="font-bold text-amber-300 flex items-center gap-1">
                            <span>📅</span><span>2026 最新法條動態備註</span>
                          </div>
                          <p>
                            刑法第 15 條與第 271 條維持現行法。實務上關於「不作為殺人罪」與「遺棄致死罪（§ 294 Ⅱ）」之分界，最高法院歷來通說見解以「行為人主觀犯意」為斷：若具致人於死之殺人故意，成立不作為殺人罪；若僅具遺棄惡意而對死亡結果有預見可能，則成立遺棄致死之加重結果犯。
                          </p>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>

                <!-- 1:1 復刻原書結構圖解 2：不純正不作為犯結構（以殺人罪為例） -->
                <div class="p-5 sm:p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border-2 border-indigo-200 dark:border-indigo-900/60 space-y-3">
                  <div class="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-2">
                    <span class="font-black text-sm text-indigo-900 dark:text-indigo-300 flex items-center gap-1.5">
                      <span>📊</span><span>不純正不作為犯結構（以殺人罪為例）• 教材第 3-24 頁 1:1 復刻圖解</span>
                    </span>
                    <span class="text-[11px] font-mono px-2 py-0.5 rounded bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300">
                      原書結構圖
                    </span>
                  </div>

                  <div class="w-full overflow-x-auto custom-scrollbar py-2">
                    <svg viewBox="0 0 760 360" class="w-full max-w-2xl mx-auto block" style="min-width: 560px;">
                      <defs>
                        <filter id="svgGlowIndigo" x="-20%" y="-20%" width="140%" height="140%">
                          <feDropShadow dx="0" dy="2" stdDeviation="3" flood-opacity="0.1" />
                        </filter>
                      </defs>

                      <!-- 頂部：客觀事實 -->
                      <g filter="url(#svgGlowIndigo)">
                        <ellipse cx="280" cy="50" rx="110" ry="28" fill="#ffffff" class="dark:fill-slate-800" stroke="#4f46e5" stroke-width="2.5" />
                        <text x="280" y="56" text-anchor="middle" fill="#3730a3" class="dark:fill-indigo-200" font-size="15" font-weight="900">客 觀 事 實</text>
                      </g>

                      <!-- 右側標籤：既遂 (II) -->
                      <g filter="url(#svgGlowIndigo)">
                        <path d="M 430 32 L 500 32 L 515 50 L 500 68 L 430 68 Z" fill="#eef2ff" class="dark:fill-indigo-950" stroke="#4f46e5" stroke-width="2" />
                        <text x="465" y="55" text-anchor="middle" fill="#4338ca" class="dark:fill-indigo-300" font-size="13" font-weight="900">既遂</text>
                        <circle cx="540" cy="50" r="14" fill="#ffffff" class="dark:fill-slate-900" stroke="#4f46e5" stroke-width="2" />
                        <text x="540" y="55" text-anchor="middle" fill="#4338ca" class="dark:fill-indigo-300" font-size="12" font-weight="900">II</text>
                      </g>
                      <path d="M 390 50 L 430 50" fill="none" stroke="#a5b4fc" stroke-width="2" stroke-dasharray="4,3" />

                      <!-- 箭頭向下指向不作為殺人罪 -->
                      <path d="M 280 78 L 280 120" fill="none" stroke="#4f46e5" stroke-width="2.5" />
                      <polygon points="280,126 274,116 286,116" fill="#4f46e5" />

                      <!-- 中央核心矩形：不作為殺人罪 (I) -->
                      <g filter="url(#svgGlowIndigo)">
                        <rect x="110" y="130" width="340" height="90" rx="16" fill="#f8fafc" class="dark:fill-slate-850" stroke="#475569" stroke-width="2.5" />
                        
                        <!-- 裡面三個要素圓圈與圓角方塊 -->
                        <!-- 1. 人＋保證地位 -->
                        <rect x="125" y="142" width="65" height="66" rx="12" fill="#ffffff" class="dark:fill-slate-800" stroke="#64748b" stroke-width="1.8" />
                        <text x="157" y="170" text-anchor="middle" fill="#0f172a" class="dark:fill-white" font-size="12" font-weight="900">人</text>
                        <text x="157" y="184" text-anchor="middle" fill="#64748b" class="dark:fill-slate-300" font-size="10" font-weight="800">＋</text>
                        <text x="157" y="198" text-anchor="middle" fill="#4338ca" class="dark:fill-indigo-300" font-size="10" font-weight="900">保證地位</text>

                        <!-- 2. 有作為可能性不為法所期待之作為 -->
                        <rect x="200" y="142" width="160" height="66" rx="12" fill="#ffffff" class="dark:fill-slate-800" stroke="#64748b" stroke-width="1.8" />
                        <text x="280" y="167" text-anchor="middle" fill="#0f172a" class="dark:fill-white" font-size="11" font-weight="800">有作為可能性卻</text>
                        <text x="280" y="187" text-anchor="middle" fill="#e11d48" class="dark:fill-rose-400" font-size="11" font-weight="900">不為法所期待之作為</text>

                        <!-- 3. 死亡 -->
                        <circle cx="405" cy="175" r="26" fill="#ffffff" class="dark:fill-slate-800" stroke="#64748b" stroke-width="1.8" />
                        <text x="405" y="180" text-anchor="middle" fill="#0f172a" class="dark:fill-white" font-size="13" font-weight="900">死亡</text>
                      </g>

                      <!-- 右側標籤：不作為殺人罪 (I) -->
                      <g filter="url(#svgGlowIndigo)">
                        <path d="M 470 157 L 540 157 L 555 175 L 540 193 L 470 193 Z" fill="#f1f5f9" class="dark:fill-slate-800" stroke="#475569" stroke-width="2" />
                        <text x="505" y="174" text-anchor="middle" fill="#334155" class="dark:fill-slate-200" font-size="11" font-weight="900">不作為</text>
                        <text x="505" y="187" text-anchor="middle" fill="#334155" class="dark:fill-slate-200" font-size="11" font-weight="900">殺人罪</text>
                        <circle cx="580" cy="175" r="14" fill="#ffffff" class="dark:fill-slate-900" stroke="#475569" stroke-width="2" />
                        <text x="580" y="180" text-anchor="middle" fill="#334155" class="dark:fill-slate-200" font-size="12" font-weight="900">I</text>
                      </g>
                      <path d="M 450 175 L 470 175" fill="none" stroke="#94a3b8" stroke-width="2" />

                      <!-- 箭頭向上指向不作為殺人罪 -->
                      <path d="M 280 272 L 280 226" fill="none" stroke="#8b5cf6" stroke-width="2.5" />
                      <polygon points="280,220 274,230 286,230" fill="#8b5cf6" />

                      <!-- 底部：主觀想法 -->
                      <g filter="url(#svgGlowIndigo)">
                        <ellipse cx="280" cy="300" rx="110" ry="28" fill="#ffffff" class="dark:fill-slate-800" stroke="#8b5cf6" stroke-width="2.5" />
                        <text x="280" y="306" text-anchor="middle" fill="#6d28d9" class="dark:fill-purple-200" font-size="15" font-weight="900">主 觀 想 法</text>
                      </g>

                      <!-- 右側標籤：故意 (III) -->
                      <g filter="url(#svgGlowIndigo)">
                        <path d="M 430 282 L 500 282 L 515 300 L 500 318 L 430 318 Z" fill="#faf5ff" class="dark:fill-purple-950" stroke="#8b5cf6" stroke-width="2" />
                        <text x="465" y="305" text-anchor="middle" fill="#7c3aed" class="dark:fill-purple-300" font-size="13" font-weight="900">故意</text>
                        <circle cx="540" cy="300" r="14" fill="#ffffff" class="dark:fill-slate-900" stroke="#8b5cf6" stroke-width="2" />
                        <text x="540" y="305" text-anchor="middle" fill="#7c3aed" class="dark:fill-purple-300" font-size="12" font-weight="900">III</text>
                      </g>
                      <path d="M 390 300 L 430 300" fill="none" stroke="#c4b5fd" stroke-width="2" stroke-dasharray="4,3" />
                    </svg>
                  </div>
                </div>

              </div>

            </div>
          </section>

          <!-- ==================== 三、未遂犯：主觀不超出客觀不法 (教材第 3-24 ～ 3-25 頁) ==================== -->
          <section id="sec-p1ch3-sec2-attempt" class="space-y-6 pt-2">
            <div class="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3">
              <div class="flex items-center gap-3">
                <span class="w-2.5 h-6 rounded-full bg-rose-600"></span>
                <h3 class="text-lg sm:text-xl font-black text-slate-900 dark:text-white tracking-tight">
                  三、未遂犯：主觀不超出客觀不法（教材第 3-24 ～ 3-25 頁）
                </h3>
              </div>
              <span class="text-xs font-mono font-bold px-2.5 py-1 rounded-lg bg-rose-50 dark:bg-rose-950 text-rose-600 dark:text-rose-400 border border-rose-200 dark:border-rose-800">
                處罰例外 ①
              </span>
            </div>

            <div class="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#121827] border border-slate-200/90 dark:border-white/10 shadow-sm space-y-8">
              
              <div class="space-y-4">
                <blockquote class="font-serif text-sm sm:text-base text-slate-800 dark:text-slate-200 leading-relaxed pl-4 border-l-4 border-rose-600 text-justify">
                  該當與否的判斷，其中一種結論是<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">「客觀不該當＋主觀該當」</span>，我們可以先得出一個結論——行為人不成立故意既遂犯。排除故意既遂犯不代表行為人不構成犯罪，因為還有未遂犯的處罰例外。結構上列舉仍然相同，只不過客觀上的要求降低了，只需要<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">「著手」</span>已足。緣此未遂犯是<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">「同一判準下，主觀不超出客觀不法」</span>的犯罪類型。
                </blockquote>

                <!-- ════════════════ 案例 3-5 ════════════════ -->
                <div id="case-3-5" class="rounded-2xl border-2 border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 shadow-sm overflow-hidden space-y-4">
                  <div class="bg-gradient-to-r from-rose-500/15 via-rose-500/5 to-transparent px-5 py-3 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between flex-wrap gap-2">
                    <div class="flex items-center gap-2">
                      <span class="w-3 h-3 rounded-full bg-rose-500"></span>
                      <span class="font-black text-rose-900 dark:text-rose-300 text-base sm:text-lg">【案例 3-5】開槍欲致死聽聲辨位閃避案</span>
                    </div>
                    <span class="text-xs font-mono font-bold px-2.5 py-1 rounded-full bg-rose-100 dark:bg-rose-900 text-rose-800 dark:text-rose-200 border border-rose-300">
                      教材第 3-25 頁
                    </span>
                  </div>

                  <div class="p-5 sm:p-6 space-y-4 font-serif">
                    <!-- 案件事實 -->
                    <div class="rounded-xl bg-slate-50 dark:bg-slate-800/60 p-4 border-l-4 border-slate-600 text-slate-800 dark:text-slate-200 text-sm sm:text-base leading-relaxed text-justify">
                      <strong>📌 案件事實：</strong>甲持槍朝乙射擊，欲致乙於死地，乙聽聲辨位後迅速閃過。
                    </div>

                    <!-- 問題導引 -->
                    <div class="rounded-xl bg-rose-50/50 dark:bg-rose-950/20 p-4 border-l-4 border-rose-500 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed text-justify">
                      <strong>◀ 問題導引 ▶</strong> 標準採用殺人罪，客觀上並未滿足本罪的結果要素，並非既遂；主觀上甲行為時想像對乙開槍並造成乙的死亡，符合本罪判準而具有故意，甲不構成故意既遂犯。由於本罪有處罰未遂（§ 271 II），故繼續審查較低度的客觀要件：著手與否？甲開始射擊無論如何都是與殺人行為具有密切關連性的舉動，該當著手，成立殺人未遂罪。
                    </div>

                    <!-- 五位一體法學劇院 -->
                    <!-- 1. ⚔️ 言詞辯論對決 -->
                    <div class="rounded-2xl p-4 sm:p-5 bg-gradient-to-br from-rose-50/70 to-slate-50 dark:from-rose-950/30 dark:to-slate-900 border border-rose-200 dark:border-rose-900/50 space-y-3">
                      <div class="flex items-center gap-2 text-xs font-black text-rose-900 dark:text-rose-300">
                        <span>⚔️</span><span>法庭正面交鋒對決</span>
                      </div>
                      <div class="flex items-start gap-3 p-3 rounded-xl bg-white dark:bg-slate-800/80 border border-rose-200 dark:border-rose-800/60">
                        <div class="w-10 h-10 rounded-full overflow-hidden shrink-0 border border-rose-400">
                          <img src="images/prosecutor_fox.jpg" alt="赤狐檢察官" class="w-full h-full object-cover" style="object-position: center 20%; transform: scale(1.35);">
                        </div>
                        <div class="flex-1 text-xs sm:text-sm">
                          <span class="font-black text-rose-800 dark:text-rose-300">公訴檢察官赤狐女律師：</span>
                          <p class="mt-0.5 text-slate-700 dark:text-slate-300">
                            「被告持槍實施射擊，子彈出膛直接威脅生命法益，已達毫無疑義之『著手實行』！被害人係憑聽聲辨位僥倖閃避，絲毫不影響被告開槍殺人犯意，構成刑法第 271 條第 2 項殺人未遂罪！」
                          </p>
                        </div>
                      </div>
                      <div class="flex items-start gap-3 p-3 rounded-xl bg-white dark:bg-slate-800/80 border border-amber-200 dark:border-amber-800/60">
                        <div class="w-10 h-10 rounded-full overflow-hidden shrink-0 border border-amber-400">
                          <img src="images/golden_case_attorney.jpg" alt="金毛辯護大律師" class="w-full h-full object-cover" style="object-position: center 20%; transform: scale(1.35);">
                        </div>
                        <div class="flex-1 text-xs sm:text-sm">
                          <span class="font-black text-amber-800 dark:text-amber-300">辯護人金毛大律師：</span>
                          <p class="mt-0.5 text-slate-700 dark:text-slate-300">
                            「客觀上死亡結果完全未發生，確認排除故意既遂罪！辯護方將爭辯被告射擊距離、彈道偏差是否真具實質危險？縱成立未遂，懇請合議庭依刑法第 25 條第 2 項減輕其刑！」
                          </p>
                        </div>
                      </div>
                    </div>

                    <!-- 2. 🐾 柴柴法學教授 • 白話生活大解碼 -->
                    <div class="p-4 sm:p-5 rounded-xl bg-gradient-to-r from-amber-500/15 via-orange-500/5 to-transparent border-2 border-amber-300 dark:border-amber-700/70 flex items-start gap-3.5 shadow-xs">
                      <div class="w-11 h-11 rounded-full overflow-hidden shrink-0 border-2 border-amber-500 shadow-xs">
                        <img src="images/shiba_law_professor.jpg" alt="柴柴法學教授" class="w-full h-full object-cover" style="object-position: center 20%; transform: scale(1.38);">
                      </div>
                      <div class="space-y-2 text-xs sm:text-sm text-slate-800 dark:text-slate-200">
                        <div class="font-black text-amber-950 dark:text-amber-300 text-sm sm:text-base flex items-center gap-1.5">
                          <span>🐾</span><span>柴柴法學教授 • 白話生活大解碼</span>
                        </div>
                        <p class="leading-relaxed">
                          這就是上一節學到的<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">組合 Ⅱ【客觀不該當＋主觀該當】</span>！
                        </p>
                        <p class="leading-relaxed">
                          第一步：客觀上乙沒死，殺人罪結果沒發生，<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">先排除故意既遂犯</span>！<br>
                          第二步：排除既遂不等於沒事，因為刑法第 271 條第 2 項明文罰未遂！客觀條件門檻降格為<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">只要「著手」就過關</span>。甲扣扳機開槍是極度密接法益的行為，百分之百著手，成立殺人未遂罪！這就是「同一判準下，主觀不超出客觀不法」！
                        </p>
                      </div>
                    </div>

                    <!-- 3. ⚖️ 金毛大律師 • 法庭攻防點評 -->
                    <div class="p-4 sm:p-5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 flex items-start gap-3.5">
                      <div class="w-10 h-10 rounded-full overflow-hidden shrink-0 border border-amber-400">
                        <img src="images/golden_case_attorney.jpg" alt="金毛大律師" class="w-full h-full object-cover" style="object-position: center 20%; transform: scale(1.35);">
                      </div>
                      <div class="space-y-1 text-xs sm:text-sm">
                        <div class="font-black text-slate-900 dark:text-white flex items-center gap-1.5">
                          <span>⚖️</span><span>金毛大律師 • 法庭攻防點評</span>
                        </div>
                        <p class="text-slate-600 dark:text-slate-300 leading-relaxed">
                          未遂犯的三大抗辯破口：① 著手時點（形式預備 vs 實質密接）；② 不能未遂（刑法 § 26 行為無危險不罰）；③ 中止未遂（刑法 § 27 己意中止減免其刑）。開槍沒中雖難以爭執著手，但可全力爭取第 25 條第 2 項減刑。
                        </p>
                      </div>
                    </div>

                    <!-- 4. 🛡️ 德牧法規巡查官 • 法規雷達查核 -->
                    <div class="p-4 sm:p-5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 flex items-start gap-3.5">
                      <div class="w-10 h-10 rounded-full overflow-hidden shrink-0 border border-blue-400">
                        <img src="images/shepherd_law_inspector.jpg" alt="德牧法規巡查官" class="w-full h-full object-cover" style="object-position: center 15%; transform: scale(1.4);">
                      </div>
                      <div class="space-y-1 text-xs sm:text-sm">
                        <div class="font-black text-slate-900 dark:text-white flex items-center gap-1.5">
                          <span>🛡️</span><span>德牧法規巡查官 • 法規雷達查核</span>
                        </div>
                        <p class="text-slate-600 dark:text-slate-300 leading-relaxed">
                          法規依據：刑法第 25 條第 1 項（已著手於犯罪行為之實行而不遂者，為未遂犯）、刑法第 271 條第 2 項（前項之未遂犯罰之）。未遂犯以法律有特別規定處罰者為限（§ 25 Ⅱ）。
                        </p>
                      </div>
                    </div>

                    <!-- 5. 👨‍⚖️ 邊牧首席審判長 • 終審裁決一槌定音 -->
                    <div class="rounded-2xl p-5 sm:p-6 bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white border-2 border-amber-400/80 shadow-lg space-y-3">
                      <div class="flex items-center justify-between flex-wrap gap-2 border-b border-white/10 pb-2">
                        <div class="flex items-center gap-2">
                          <div class="w-8 h-8 rounded-full overflow-hidden border border-amber-300 shrink-0">
                            <img src="images/border_collie_chief_judge.jpg" alt="邊牧審判長" class="w-full h-full object-cover" style="object-position: center 25%; transform: scale(1.35);">
                          </div>
                          <span class="font-black text-amber-300 text-sm sm:text-base">👨‍⚖️ 邊牧首席審判長 • 終審裁決一槌定音</span>
                        </div>
                        <span class="text-[11px] font-mono px-2 py-0.5 rounded bg-amber-400/20 text-amber-300 border border-amber-400/40">
                          #法槌一敲誰與爭鋒
                        </span>
                      </div>
                      <div class="space-y-2 text-xs sm:text-sm leading-relaxed">
                        <p><strong class="text-amber-200">🔨 【實體法定讞】：</strong>被告甲成立中華民國刑法第 271 條第 2 項、第 1 項殺人未遂罪。</p>
                        <p><strong class="text-blue-300">💡 國考答題定錨：</strong>實例題標準下法：「甲開槍射擊乙未中之行為，構成刑法第 271 條第 2 項、第 1 項殺人未遂罪」。審查架構：先簡要排除既遂（死亡結果未發生），再檢驗未遂犯要件：主觀殺人故意（具備）＋ 客觀已著手實行（具備密切關聯危險）。</p>
                        <div class="pt-2 border-t border-white/10 text-xs text-slate-300 space-y-1">
                          <div class="font-bold text-amber-300 flex items-center gap-1">
                            <span>📅</span><span>2026 最新法條動態備註</span>
                          </div>
                          <p>
                            刑法第 25 條普通未遂犯、第 271 條第 2 項維持現行法。國考評分重點在於「未遂犯之著手認定」——主客觀混合理論（主觀犯意躍動＋客觀密接侵害），考生應明確論述甲扣扳機發射子彈已進入實行著手階段。
                          </p>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>

                <!-- 1:1 復刻原書結構圖解 3：未遂犯結構（以殺人罪為例） -->
                <div class="p-5 sm:p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border-2 border-rose-200 dark:border-rose-900/60 space-y-3">
                  <div class="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-2">
                    <span class="font-black text-sm text-rose-900 dark:text-rose-300 flex items-center gap-1.5">
                      <span>📊</span><span>未遂犯結構（以殺人罪為例）• 教材第 3-25 頁 1:1 復刻圖解</span>
                    </span>
                    <span class="text-[11px] font-mono px-2 py-0.5 rounded bg-rose-100 dark:bg-rose-950 text-rose-700 dark:text-rose-300">
                      原書結構圖
                    </span>
                  </div>

                  <div class="w-full overflow-x-auto custom-scrollbar py-2">
                    <svg viewBox="0 0 740 340" class="w-full max-w-2xl mx-auto block" style="min-width: 540px;">
                      <defs>
                        <filter id="svgGlowRose" x="-20%" y="-20%" width="140%" height="140%">
                          <feDropShadow dx="0" dy="2" stdDeviation="3" flood-opacity="0.1" />
                        </filter>
                      </defs>

                      <!-- 頂部：客觀事實（死亡結果並未發生） -->
                      <g filter="url(#svgGlowRose)">
                        <ellipse cx="260" cy="50" rx="120" ry="30" fill="#ffffff" class="dark:fill-slate-800" stroke="#e11d48" stroke-width="2.5" />
                        <text x="260" y="46" text-anchor="middle" fill="#9f1239" class="dark:fill-rose-200" font-size="14" font-weight="900">客 觀 事 實</text>
                        <text x="260" y="64" text-anchor="middle" fill="#e11d48" class="dark:fill-rose-300" font-size="11" font-weight="800">（死亡結果並未發生）</text>
                      </g>

                      <!-- 右側標籤：非既遂！但已著手 (II) -->
                      <g filter="url(#svgGlowRose)">
                        <path d="M 410 28 L 515 28 L 530 50 L 515 72 L 410 72 Z" fill="#fff1f2" class="dark:fill-rose-950" stroke="#e11d48" stroke-width="2" />
                        <text x="465" y="44" text-anchor="middle" fill="#be123c" class="dark:fill-rose-200" font-size="11" font-weight="900">非既遂！</text>
                        <text x="465" y="60" text-anchor="middle" fill="#be123c" class="dark:fill-rose-200" font-size="11" font-weight="900">但已著手</text>
                        <circle cx="555" cy="50" r="14" fill="#ffffff" class="dark:fill-slate-900" stroke="#e11d48" stroke-width="2" />
                        <text x="555" y="55" text-anchor="middle" fill="#be123c" class="dark:fill-rose-300" font-size="12" font-weight="900">II</text>
                      </g>
                      <path d="M 380 50 L 410 50" fill="none" stroke="#fda4af" stroke-width="2" stroke-dasharray="4,3" />

                      <!-- 箭頭向下指向殺人罪 -->
                      <path d="M 260 80 L 260 120" fill="none" stroke="#e11d48" stroke-width="2.5" />
                      <polygon points="260,126 254,116 266,116" fill="#e11d48" />

                      <!-- 中央核心矩形：殺人罪 (I) -->
                      <g filter="url(#svgGlowRose)">
                        <rect x="130" y="130" width="260" height="80" rx="16" fill="#f8fafc" class="dark:fill-slate-855" stroke="#475569" stroke-width="2.5" />
                        
                        <!-- 裡面三個要素圓圈 -->
                        <!-- 1. 人 -->
                        <circle cx="175" cy="170" r="24" fill="#ffffff" class="dark:fill-slate-800" stroke="#64748b" stroke-width="1.8" />
                        <text x="175" y="176" text-anchor="middle" fill="#0f172a" class="dark:fill-white" font-size="14" font-weight="900">人</text>

                        <!-- 2. 殺人 -->
                        <circle cx="260" cy="170" r="24" fill="#ffffff" class="dark:fill-slate-800" stroke="#64748b" stroke-width="1.8" />
                        <text x="260" y="176" text-anchor="middle" fill="#0f172a" class="dark:fill-white" font-size="14" font-weight="900">殺人</text>

                        <!-- 3. 死亡 -->
                        <circle cx="345" cy="170" r="24" fill="#ffffff" class="dark:fill-slate-800" stroke="#e11d48" stroke-width="2" stroke-dasharray="3,2" />
                        <text x="345" y="176" text-anchor="middle" fill="#e11d48" class="dark:fill-rose-400" font-size="14" font-weight="900">死亡</text>
                      </g>

                      <!-- 右側標籤：殺人罪 (I) -->
                      <g filter="url(#svgGlowRose)">
                        <path d="M 410 152 L 480 152 L 495 170 L 480 188 L 410 188 Z" fill="#f1f5f9" class="dark:fill-slate-800" stroke="#475569" stroke-width="2" />
                        <text x="445" y="175" text-anchor="middle" fill="#334155" class="dark:fill-slate-200" font-size="13" font-weight="900">殺人罪</text>
                        <circle cx="520" cy="170" r="14" fill="#ffffff" class="dark:fill-slate-900" stroke="#475569" stroke-width="2" />
                        <text x="520" y="175" text-anchor="middle" fill="#334155" class="dark:fill-slate-200" font-size="12" font-weight="900">I</text>
                      </g>
                      <path d="M 390 170 L 410 170" fill="none" stroke="#94a3b8" stroke-width="2" />

                      <!-- 箭頭向上指向殺人罪 -->
                      <path d="M 260 262 L 260 216" fill="none" stroke="#8b5cf6" stroke-width="2.5" />
                      <polygon points="260,210 254,220 266,220" fill="#8b5cf6" />

                      <!-- 底部：主觀想法 -->
                      <g filter="url(#svgGlowRose)">
                        <ellipse cx="260" cy="290" rx="100" ry="28" fill="#ffffff" class="dark:fill-slate-800" stroke="#8b5cf6" stroke-width="2.5" />
                        <text x="260" y="296" text-anchor="middle" fill="#6d28d9" class="dark:fill-purple-200" font-size="15" font-weight="900">主 觀 想 法</text>
                      </g>

                      <!-- 右側標籤：故意 (III) -->
                      <g filter="url(#svgGlowRose)">
                        <path d="M 410 272 L 480 272 L 495 290 L 480 308 L 410 308 Z" fill="#faf5ff" class="dark:fill-purple-950" stroke="#8b5cf6" stroke-width="2" />
                        <text x="445" y="295" text-anchor="middle" fill="#7c3aed" class="dark:fill-purple-300" font-size="13" font-weight="900">故意</text>
                        <circle cx="520" cy="290" r="14" fill="#ffffff" class="dark:fill-slate-900" stroke="#8b5cf6" stroke-width="2" />
                        <text x="520" y="295" text-anchor="middle" fill="#7c3aed" class="dark:fill-purple-300" font-size="12" font-weight="900">III</text>
                      </g>
                      <path d="M 360 290 L 410 290" fill="none" stroke="#c4b5fd" stroke-width="2" stroke-dasharray="4,3" />
                    </svg>
                  </div>
                </div>

              </div>

            </div>
          </section>

          <!-- ==================== 四、過失犯：客觀不超出主觀不法 (教材第 3-25 ～ 3-26 頁) ==================== -->
          <section id="sec-p1ch3-sec2-negligence" class="space-y-6 pt-2">
            <div class="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3">
              <div class="flex items-center gap-3">
                <span class="w-2.5 h-6 rounded-full bg-amber-600"></span>
                <h3 class="text-lg sm:text-xl font-black text-slate-900 dark:text-white tracking-tight">
                  四、過失犯：客觀不超出主觀不法（教材第 3-25 ～ 3-26 頁）
                </h3>
              </div>
              <span class="text-xs font-mono font-bold px-2.5 py-1 rounded-lg bg-amber-50 dark:bg-amber-950 text-amber-600 dark:text-amber-400 border border-amber-200 dark:border-amber-800">
                處罰例外 ②
              </span>
            </div>

            <div class="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#121827] border border-slate-200/90 dark:border-white/10 shadow-sm space-y-8">
              
              <div class="space-y-4">
                <blockquote class="font-serif text-sm sm:text-base text-slate-800 dark:text-slate-200 leading-relaxed pl-4 border-l-4 border-amber-600 text-justify">
                  該當與否的判斷，另一種結論是<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">「客觀該當＋主觀不該當」</span>，我們可以先得出一個結論——行為人不成立故意既遂犯。同樣地，排除故意既遂犯並不代表行為人不構成犯罪，因為還有過失犯的處罰例外存在。結構上列舉仍然相同，只不過主觀上的要求降低了，只需要<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">「有預見可能性」</span>已足。緣此過失犯是<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">「同一判準下，客觀不超出主觀不法」</span>的犯罪類型。
                </blockquote>

                <!-- ════════════════ 案例 3-6 ════════════════ -->
                <div id="case-3-6" class="rounded-2xl border-2 border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 shadow-sm overflow-hidden space-y-4">
                  <div class="bg-gradient-to-r from-amber-500/15 via-amber-500/5 to-transparent px-5 py-3 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between flex-wrap gap-2">
                    <div class="flex items-center gap-2">
                      <span class="w-3 h-3 rounded-full bg-amber-500"></span>
                      <span class="font-black text-amber-900 dark:text-amber-300 text-base sm:text-lg">【案例 3-6】走廊練習揮棒誤擊路人致死案</span>
                    </div>
                    <span class="text-xs font-mono font-bold px-2.5 py-1 rounded-full bg-amber-100 dark:bg-amber-900 text-amber-800 dark:text-amber-200 border border-amber-300">
                      教材第 3-26 頁
                    </span>
                  </div>

                  <div class="p-5 sm:p-6 space-y-4 font-serif">
                    <!-- 案件事實 -->
                    <div class="rounded-xl bg-slate-50 dark:bg-slate-800/60 p-4 border-l-4 border-slate-600 text-slate-800 dark:text-slate-200 text-sm sm:text-base leading-relaxed text-justify">
                      <strong>📌 案件事實：</strong>棒球隊隊長強棒甲，某日在走廊拿木棒練習揮棒時，未注意到乙從身後經過，一棒擊中乙的頸部，導致乙顱內出血死亡。
                    </div>

                    <!-- 問題導引 -->
                    <div class="rounded-xl bg-amber-50/50 dark:bg-amber-950/20 p-4 border-l-4 border-amber-500 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed text-justify">
                      <strong>◀ 問題導引 ▶</strong> 標準採用殺人罪，客觀上甲持棒攻擊乙並造成乙死亡，符合本罪判準而為<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">既遂</span>；主觀上甲行為時未想像對乙攻擊並造成乙的死亡，並非故意，甲不構成故意既遂犯。由於本罪有處罰過失（§ 276），故繼續審查較低度的主觀要件：有無預見可能性？甲對在走廊上揮棒會誤中行人應有預見可能性，該當過失，成立過失致死罪。
                    </div>

                    <!-- 五位一體法學劇院 -->
                    <!-- 1. ⚔️ 言詞辯論對決 -->
                    <div class="rounded-2xl p-4 sm:p-5 bg-gradient-to-br from-amber-50/70 to-slate-50 dark:from-amber-950/30 dark:to-slate-900 border border-amber-200 dark:border-amber-900/50 space-y-3">
                      <div class="flex items-center gap-2 text-xs font-black text-amber-900 dark:text-amber-300">
                        <span>⚔️</span><span>法庭正面交鋒對決</span>
                      </div>
                      <div class="flex items-start gap-3 p-3 rounded-xl bg-white dark:bg-slate-800/80 border border-rose-200 dark:border-rose-800/60">
                        <div class="w-10 h-10 rounded-full overflow-hidden shrink-0 border border-rose-400">
                          <img src="images/prosecutor_fox.jpg" alt="赤狐檢察官" class="w-full h-full object-cover" style="object-position: center 20%; transform: scale(1.35);">
                        </div>
                        <div class="flex-1 text-xs sm:text-sm">
                          <span class="font-black text-rose-800 dark:text-rose-300">公訴檢察官赤狐女律師：</span>
                          <p class="mt-0.5 text-slate-700 dark:text-slate-300">
                            「走廊係公共往來之封閉狹窄通道，被告身為經驗豐富之棒球隊長，手持具致命破壞力之木棒全力揮擊，按其情節應注意能注意而不注意，客觀製造不容許之行人危險致乙喪命，構成刑法第 276 條過失致死罪！」
                          </p>
                        </div>
                      </div>
                      <div class="flex items-start gap-3 p-3 rounded-xl bg-white dark:bg-slate-800/80 border border-amber-200 dark:border-amber-800/60">
                        <div class="w-10 h-10 rounded-full overflow-hidden shrink-0 border border-amber-400">
                          <img src="images/golden_case_attorney.jpg" alt="金毛辯護大律師" class="w-full h-full object-cover" style="object-position: center 20%; transform: scale(1.35);">
                        </div>
                        <div class="flex-1 text-xs sm:text-sm">
                          <span class="font-black text-amber-800 dark:text-amber-300">辯護人金毛大律師：</span>
                          <p class="mt-0.5 text-slate-700 dark:text-slate-300">
                            「甲主觀上絕無殺害乙或傷害乙之故意，故意既遂犯已完全排除！辯護人將力爭甲揮棒前是否已先察看四周？乙自背後盲區突入是否超出信賴原則與一般人合理之『預見可能性』？」
                          </p>
                        </div>
                      </div>
                    </div>

                    <!-- 2. 🐾 柴柴法學教授 • 白話生活大解碼 -->
                    <div class="p-4 sm:p-5 rounded-xl bg-gradient-to-r from-amber-500/15 via-orange-500/5 to-transparent border-2 border-amber-300 dark:border-amber-700/70 flex items-start gap-3.5 shadow-xs">
                      <div class="w-11 h-11 rounded-full overflow-hidden shrink-0 border-2 border-amber-500 shadow-xs">
                        <img src="images/shiba_law_professor.jpg" alt="柴柴法學教授" class="w-full h-full object-cover" style="object-position: center 20%; transform: scale(1.38);">
                      </div>
                      <div class="space-y-2 text-xs sm:text-sm text-slate-800 dark:text-slate-200">
                        <div class="font-black text-amber-950 dark:text-amber-300 text-sm sm:text-base flex items-center gap-1.5">
                          <span>🐾</span><span>柴柴法學教授 • 白話生活大解碼</span>
                        </div>
                        <p class="leading-relaxed">
                          大家看清楚這組經典的<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">組合 Ⅲ【客觀該當＋主觀不該當】</span>！
                        </p>
                        <p class="leading-relaxed">
                          第一步：客觀上乙被木棒打中頭部死了，客觀構成要件該當；但主觀上甲只是在練揮棒，根本不知道身後有人，更沒有想殺死乙的念頭，主觀不該當，<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">立刻排除故意殺人既遂犯</span>！<br>
                          第二步：排除故意既遂犯後，審查處罰例外——過失犯（§ 276）。主觀門檻降低為<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">只需要「有預見可能性」</span>！在人來人往的走廊揮大木棒，隨便想都知道可能敲到路過的人，甲具有預見可能性，成立過失致死罪！這就是「同一判準下，客觀不超出主觀不法」！
                        </p>
                      </div>
                    </div>

                    <!-- 3. ⚖️ 金毛大律師 • 法庭攻防點評 -->
                    <div class="p-4 sm:p-5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 flex items-start gap-3.5">
                      <div class="w-10 h-10 rounded-full overflow-hidden shrink-0 border border-amber-400">
                        <img src="images/golden_case_attorney.jpg" alt="金毛大律師" class="w-full h-full object-cover" style="object-position: center 20%; transform: scale(1.35);">
                      </div>
                      <div class="space-y-1 text-xs sm:text-sm">
                        <div class="font-black text-slate-900 dark:text-white flex items-center gap-1.5">
                          <span>⚖️</span><span>金毛大律師 • 法庭攻防點評</span>
                        </div>
                        <p class="text-slate-600 dark:text-slate-300 leading-relaxed">
                          過失犯的法庭防禦四道關卡：① 注意義務存在；② 注意義務違反；③ 客觀歸責（合義務替代行為結果是否仍發生）；④ 個人預見能力（主觀過失）。若事發時現場燈光全暗或被害人極端違規衝撞，即有爭取無罪空間。
                        </p>
                      </div>
                    </div>

                    <!-- 4. 🛡️ 德牧法規巡查官 • 法規雷達查核 -->
                    <div class="p-4 sm:p-5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 flex items-start gap-3.5">
                      <div class="w-10 h-10 rounded-full overflow-hidden shrink-0 border border-blue-400">
                        <img src="images/shepherd_law_inspector.jpg" alt="德牧法規巡查官" class="w-full h-full object-cover" style="object-position: center 15%; transform: scale(1.4);">
                      </div>
                      <div class="space-y-1 text-xs sm:text-sm">
                        <div class="font-black text-slate-900 dark:text-white flex items-center gap-1.5">
                          <span>🛡️</span><span>德牧法規巡查官 • 法規雷達查核</span>
                        </div>
                        <p class="text-slate-600 dark:text-slate-300 leading-relaxed">
                          實體法定讞：刑法第 12 條第 2 項（過失行為之處罰，以有特別規定者為限）、刑法第 14 條第 1 項（無認識過失定義）、刑法第 276 條（因過失致人於死者，處五年以下有期徒刑、拘役或五十萬元以下罰金）。
                        </p>
                      </div>
                    </div>

                    <!-- 5. 👨‍⚖️ 邊牧首席審判長 • 終審裁決一槌定音 -->
                    <div class="rounded-2xl p-5 sm:p-6 bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white border-2 border-amber-400/80 shadow-lg space-y-3">
                      <div class="flex items-center justify-between flex-wrap gap-2 border-b border-white/10 pb-2">
                        <div class="flex items-center gap-2">
                          <div class="w-8 h-8 rounded-full overflow-hidden border border-amber-300 shrink-0">
                            <img src="images/border_collie_chief_judge.jpg" alt="邊牧審判長" class="w-full h-full object-cover" style="object-position: center 25%; transform: scale(1.35);">
                          </div>
                          <span class="font-black text-amber-300 text-sm sm:text-base">👨‍⚖️ 邊牧首席審判長 • 終審裁決一槌定音</span>
                        </div>
                        <span class="text-[11px] font-mono px-2 py-0.5 rounded bg-amber-400/20 text-amber-300 border border-amber-400/40">
                          #法槌一敲誰與爭鋒
                        </span>
                      </div>
                      <div class="space-y-2 text-xs sm:text-sm leading-relaxed">
                        <p><strong class="text-amber-200">🔨 【實體法定讞】：</strong>被告甲成立中華民國刑法第 276 條過失致死罪。</p>
                        <p><strong class="text-blue-300">💡 國考答題定錨：</strong>標題應寫「甲在走廊練習揮棒擊中乙頸部致死之行為，構成刑法第 276 條過失致死罪」。論述先簡述排除殺人故意，再論證過失犯之要件：注意義務違反、因果關聯與客觀歸責、主觀預見可能性。</p>
                        <div class="pt-2 border-t border-white/10 text-xs text-slate-300 space-y-1">
                          <div class="font-bold text-amber-300 flex items-center gap-1">
                            <span>📅</span><span>2026 最新法條動態備註</span>
                          </div>
                          <p>
                            刑法第 276 條於民國 108 年全面修正，廢除舊法「業務過失致死罪」雙軌制，將刑度提高為 5 年以下有期徒刑並統一回歸普通過失致死罪。至 2026 年維持此一元化架構，國考答題嚴禁再援引舊法第 276 條第 2 項！
                          </p>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>

                <!-- 1:1 復刻原書結構圖解 4：過失犯結構（以殺人罪為例） -->
                <div class="p-5 sm:p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border-2 border-amber-200 dark:border-amber-900/60 space-y-3">
                  <div class="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-2">
                    <span class="font-black text-sm text-amber-900 dark:text-amber-300 flex items-center gap-1.5">
                      <span>📊</span><span>過失犯結構（以殺人罪為例）• 教材第 3-26 頁 1:1 復刻圖解</span>
                    </span>
                    <span class="text-[11px] font-mono px-2 py-0.5 rounded bg-amber-100 dark:bg-amber-950 text-amber-700 dark:text-amber-300">
                      原書結構圖
                    </span>
                  </div>

                  <div class="w-full overflow-x-auto custom-scrollbar py-2">
                    <svg viewBox="0 0 760 340" class="w-full max-w-2xl mx-auto block" style="min-width: 560px;">
                      <defs>
                        <filter id="svgGlowAmber" x="-20%" y="-20%" width="140%" height="140%">
                          <feDropShadow dx="0" dy="2" stdDeviation="3" flood-opacity="0.1" />
                        </filter>
                      </defs>

                      <!-- 頂部：客觀事實 -->
                      <g filter="url(#svgGlowAmber)">
                        <ellipse cx="260" cy="50" rx="100" ry="28" fill="#ffffff" class="dark:fill-slate-800" stroke="#d97706" stroke-width="2.5" />
                        <text x="260" y="56" text-anchor="middle" fill="#b45309" class="dark:fill-amber-200" font-size="15" font-weight="900">客 觀 事 實</text>
                      </g>

                      <!-- 右側標籤：既遂 (II) -->
                      <g filter="url(#svgGlowAmber)">
                        <path d="M 400 32 L 470 32 L 485 50 L 470 68 L 400 68 Z" fill="#fffbeb" class="dark:fill-amber-950" stroke="#d97706" stroke-width="2" />
                        <text x="435" y="55" text-anchor="middle" fill="#b45309" class="dark:fill-amber-300" font-size="13" font-weight="900">既遂</text>
                        <circle cx="510" cy="50" r="14" fill="#ffffff" class="dark:fill-slate-900" stroke="#d97706" stroke-width="2" />
                        <text x="510" y="55" text-anchor="middle" fill="#b45309" class="dark:fill-amber-300" font-size="12" font-weight="900">II</text>
                      </g>
                      <path d="M 360 50 L 400 50" fill="none" stroke="#fcd34d" stroke-width="2" stroke-dasharray="4,3" />

                      <!-- 箭頭向下指向殺人罪 -->
                      <path d="M 260 78 L 260 120" fill="none" stroke="#d97706" stroke-width="2.5" />
                      <polygon points="260,126 254,116 266,116" fill="#d97706" />

                      <!-- 中央核心矩形：殺人罪 (I) -->
                      <g filter="url(#svgGlowAmber)">
                        <rect x="130" y="130" width="260" height="80" rx="16" fill="#f8fafc" class="dark:fill-slate-855" stroke="#475569" stroke-width="2.5" />
                        
                        <!-- 裡面三個要素圓圈 -->
                        <!-- 1. 人 -->
                        <circle cx="175" cy="170" r="24" fill="#ffffff" class="dark:fill-slate-800" stroke="#64748b" stroke-width="1.8" />
                        <text x="175" y="176" text-anchor="middle" fill="#0f172a" class="dark:fill-white" font-size="14" font-weight="900">人</text>

                        <!-- 2. 殺人 -->
                        <circle cx="260" cy="170" r="24" fill="#ffffff" class="dark:fill-slate-800" stroke="#64748b" stroke-width="1.8" />
                        <text x="260" y="176" text-anchor="middle" fill="#0f172a" class="dark:fill-white" font-size="14" font-weight="900">殺人</text>

                        <!-- 3. 死亡 -->
                        <circle cx="345" cy="170" r="24" fill="#ffffff" class="dark:fill-slate-800" stroke="#64748b" stroke-width="1.8" />
                        <text x="345" y="176" text-anchor="middle" fill="#0f172a" class="dark:fill-white" font-size="14" font-weight="900">死亡</text>
                      </g>

                      <!-- 右側標籤：殺人罪 (I) -->
                      <g filter="url(#svgGlowAmber)">
                        <path d="M 400 152 L 470 152 L 485 170 L 470 188 L 400 188 Z" fill="#f1f5f9" class="dark:fill-slate-800" stroke="#475569" stroke-width="2" />
                        <text x="435" y="175" text-anchor="middle" fill="#334155" class="dark:fill-slate-200" font-size="13" font-weight="900">殺人罪</text>
                        <circle cx="510" cy="170" r="14" fill="#ffffff" class="dark:fill-slate-900" stroke="#475569" stroke-width="2" />
                        <text x="510" y="175" text-anchor="middle" fill="#334155" class="dark:fill-slate-200" font-size="12" font-weight="900">I</text>
                      </g>
                      <path d="M 390 170 L 400 170" fill="none" stroke="#94a3b8" stroke-width="2" />

                      <!-- 箭頭向上指向殺人罪 -->
                      <path d="M 260 262 L 260 216" fill="none" stroke="#b45309" stroke-width="2.5" />
                      <polygon points="260,210 254,220 266,220" fill="#b45309" />

                      <!-- 底部：主觀想法（並無殺人的意識） -->
                      <g filter="url(#svgGlowAmber)">
                        <ellipse cx="260" cy="290" rx="120" ry="30" fill="#ffffff" class="dark:fill-slate-800" stroke="#b45309" stroke-width="2.5" />
                        <text x="260" y="286" text-anchor="middle" fill="#78350f" class="dark:fill-amber-200" font-size="14" font-weight="900">主 觀 想 法</text>
                        <text x="260" y="304" text-anchor="middle" fill="#b45309" class="dark:fill-amber-300" font-size="11" font-weight="800">（並無殺人的意識）</text>
                      </g>

                      <!-- 右側標籤：非故意！但有預見可能性 (III) -->
                      <g filter="url(#svgGlowAmber)">
                        <path d="M 420 268 L 540 268 L 555 290 L 540 312 L 420 312 Z" fill="#fffbeb" class="dark:fill-amber-950" stroke="#b45309" stroke-width="2" />
                        <text x="480" y="284" text-anchor="middle" fill="#92400e" class="dark:fill-amber-200" font-size="11" font-weight="900">非故意！</text>
                        <text x="480" y="300" text-anchor="middle" fill="#92400e" class="dark:fill-amber-200" font-size="11" font-weight="900">但有預見可能性</text>
                        <circle cx="580" cy="290" r="14" fill="#ffffff" class="dark:fill-slate-900" stroke="#b45309" stroke-width="2" />
                        <text x="580" y="295" text-anchor="middle" fill="#92400e" class="dark:fill-amber-300" font-size="12" font-weight="900">III</text>
                      </g>
                      <path d="M 380 290 L 420 290" fill="none" stroke="#fcd34d" stroke-width="2" stroke-dasharray="4,3" />
                    </svg>
                  </div>
                </div>

              </div>

            </div>
          </section>

          <!-- ==================== 五、作者叮嚀：過失致死 vs 過失殺人 (教材第 3-26 ～ 3-27 頁) ==================== -->
          <section id="sec-p1ch3-sec2-author-note" class="space-y-6 pt-2">
            <div class="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3">
              <div class="flex items-center gap-3">
                <span class="w-2.5 h-6 rounded-full bg-amber-500"></span>
                <h3 class="text-lg sm:text-xl font-black text-slate-900 dark:text-white tracking-tight">
                  五、作者叮嚀：用語考辨「過失致死」vs「過失殺人」（教材第 3-26 ～ 3-27 頁）
                </h3>
              </div>
              <span class="text-xs font-mono font-bold px-2.5 py-1 rounded-lg bg-amber-50 dark:bg-amber-950 text-amber-700 dark:text-amber-400 border border-amber-200 dark:border-amber-800">
                國考用語大忌
              </span>
            </div>

            <!-- 原書風格作者叮嚀卡片（仿原書手繪叮嚀小章） -->
            <div class="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-amber-50 via-orange-50/60 to-yellow-50 dark:from-[#251805] dark:via-[#1c1407] dark:to-[#171005] border-2 border-amber-300 dark:border-amber-600/60 border-l-[8px] border-l-amber-500 shadow-sm space-y-4 font-serif">
              <div class="flex items-center gap-2 text-amber-900 dark:text-amber-300 font-black text-base sm:text-lg">
                <span class="text-2xl">✍️</span>
                <span>【作・者・叮・嚀】小心駛得萬年船，考試嚴防用語陷阱！</span>
              </div>

              <blockquote class="text-sm sm:text-base text-slate-800 dark:text-slate-200 leading-relaxed pl-4 border-l-4 border-amber-500 text-justify space-y-2">
                <p>
                  文獻雖有使用「過失殺人」來詮釋殺人罪的過失犯，而<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">學說上對這箇用語有點敏感，認為「殺人」已經限定行為人的主觀心態是故意，所以只有過失致死，沒有過失殺人</span>。
                </p>
                <p>
                  筆者自己是將「殺人」當成一個中性用語，僅代表生命法益受到侵害的現象，至於行為人的心態究竟是故意或過失，並不影響「殺人」的意義。
                </p>
                <p class="font-bold text-amber-950 dark:text-amber-200 pt-1">
                  👉 <span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">不過小心駛得萬年船，考試還是儘量避免出現過失殺人的字句。</span>
                </p>
              </blockquote>

              <div class="p-3.5 rounded-xl bg-white dark:bg-slate-900/90 border border-amber-200 dark:border-amber-800/60 text-xs sm:text-sm text-slate-700 dark:text-slate-300 flex items-center gap-2">
                <span class="text-base shrink-0">💡</span>
                <span><strong>評卷考場通則：</strong>閱卷老師多為德派正統學者，強烈排斥英美法譯詞「過失殺人（Manslaughter）」，請務必統一書寫法定規範罪名<strong>「過失致死罪」</strong>！</span>
              </div>
            </div>
          </section>

          <!-- ==================== 六、解題提示：實例題三大特定標題下法 (教材第 3-27 頁) ==================== -->
          <section id="sec-p1ch3-sec2-exam-tips" class="space-y-6 pt-2">
            <div class="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3">
              <div class="flex items-center gap-3">
                <span class="w-2.5 h-6 rounded-full bg-emerald-600"></span>
                <h3 class="text-lg sm:text-xl font-black text-slate-900 dark:text-white tracking-tight">
                  六、解題提示：實例題標題「三大特定」黃金下法（教材第 3-27 頁）
                </h3>
              </div>
              <span class="text-xs font-mono font-bold px-2.5 py-1 rounded-lg bg-emerald-50 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800">
                國考得高分關鍵
              </span>
            </div>

            <div class="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#121827] border border-slate-200/90 dark:border-white/10 shadow-sm space-y-6 font-serif">
              
              <div class="space-y-3">
                <div class="flex items-center gap-2">
                  <span class="text-2xl">🎓</span>
                  <h4 class="font-black text-base sm:text-lg text-slate-900 dark:text-white">
                    刑法實例題標題之核心精髓：「三大特定」
                  </h4>
                </div>
                <blockquote class="text-sm sm:text-base text-slate-800 dark:text-slate-200 leading-relaxed pl-4 border-l-4 border-emerald-600 text-justify">
                  刑法實例題十分強調標題的下法，尤其一個好的標題必須具備<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">「三大特定」——特定行為人、特定行為、特定罪名</span>。本節所提到的「犯罪類型」與「論罪類型」便與特定罪名息息相關。
                </blockquote>
              </div>

              <!-- 標題公式旗艦卡片 -->
              <div class="p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-emerald-50 via-teal-50/50 to-slate-50 dark:from-[#062c24] dark:via-[#08332b] dark:to-[#0f172a] border-2 border-emerald-300 dark:border-emerald-600/60 border-l-[8px] border-l-emerald-600 shadow-sm space-y-3">
                <div class="flex items-center justify-between">
                  <span class="text-xs font-mono font-black px-2 py-0.5 rounded bg-emerald-600 text-white">典型標題公式</span>
                  <span class="text-xs font-bold text-emerald-800 dark:text-emerald-300 font-mono">GOLDEN FORMULA</span>
                </div>
                <div class="p-4 rounded-xl bg-white dark:bg-slate-900 border-2 border-emerald-400/80 text-center shadow-xs">
                  <p class="text-base sm:text-xl font-black text-emerald-950 dark:text-emerald-100 font-mono tracking-wide">
                    甲某某行為，構成<span class="text-blue-600 dark:text-blue-400">○○罪</span>的<span class="text-rose-600 dark:text-rose-400">□□犯</span>。
                  </p>
                </div>
                <div class="space-y-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed text-justify">
                  <p>
                    • <strong class="text-blue-800 dark:text-blue-300">前段「○○罪」部分：</strong>與<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">犯罪類型</span>有關，依賴一般犯、狀態犯、實害犯、結果犯等犯罪類型來蒐集資訊，確定基本判準（例如：殺人罪）。
                  </p>
                  <p>
                    • <strong class="text-rose-800 dark:text-rose-300">後段「□□犯」部分：</strong>與<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">論罪類型</span>相連，包含處罰的原則與例外（例如：故意既遂犯、未遂犯、過失犯）。
                  </p>
                </div>
              </div>

              <!-- 原書示範範例卡片（逐字復刻教材第 3-27 頁） -->
              <div class="space-y-3 pt-2">
                <div class="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider font-mono">
                  📌 教材示範標題演練（未遂與過失之表達）：
                </div>
                
                <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-2">
                  <div class="flex items-start gap-2">
                    <span class="px-2 py-0.5 rounded bg-rose-100 dark:bg-rose-900 text-rose-800 dark:text-rose-200 text-xs font-mono font-bold shrink-0 mt-0.5">〔3-3〕</span>
                    <div class="text-xs sm:text-sm text-slate-800 dark:text-slate-200">
                      <strong>甲對乙開槍卻未中之行為（對應案例 3-5）：</strong><br>
                      構成刑法殺人罪的<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">未遂犯</span>（或直接寫<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">殺人未遂罪</span>）。
                    </div>
                  </div>
                </div>

                <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-2">
                  <div class="flex items-start gap-2">
                    <span class="px-2 py-0.5 rounded bg-amber-100 dark:bg-amber-900 text-amber-800 dark:text-amber-200 text-xs font-mono font-bold shrink-0 mt-0.5">〔3-4〕</span>
                    <div class="text-xs sm:text-sm text-slate-800 dark:text-slate-200">
                      <strong>甲在走廊上甩木棒擊中乙頸部致乙死亡之行為（對應案例 3-6）：</strong><br>
                      構成刑法殺人罪的<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">過失犯</span>（建議直接寫<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">過失致死罪</span>）。
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </section>

          <!-- ==================== 七、犬系四大天王法學客廳 (開章總結與答題心法) ==================== -->
          <section id="sec-p1ch3-sec2-mentors" class="space-y-6 pt-2">
            <div class="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3">
              <div class="flex items-center gap-3">
                <span class="w-2.5 h-6 rounded-full bg-amber-500"></span>
                <h3 class="text-lg sm:text-xl font-black text-slate-900 dark:text-white tracking-tight">
                  七、犬系法學四大天王客廳：第二節核心總結與 2026 答題心法
                </h3>
              </div>
              <span class="text-xs font-mono font-bold px-2.5 py-1 rounded-lg bg-amber-50 dark:bg-amber-950 text-amber-600 dark:text-amber-400 border border-amber-200 dark:border-amber-800">
                導師點睛
              </span>
            </div>

            <!-- 單欄垂直上下堆疊四大天王座談卡 -->
            <div class="space-y-4 font-serif">
              
              <!-- 柴柴法學教授 -->
              <div class="p-5 rounded-2xl bg-gradient-to-br from-amber-50/90 to-orange-50/50 dark:from-amber-950/30 dark:to-slate-900 border-2 border-amber-300 dark:border-amber-700/60 border-l-[6px] border-l-amber-500 flex items-start gap-4 shadow-xs">
                <div class="w-12 h-12 rounded-full overflow-hidden shrink-0 border-2 border-amber-500 shadow-xs">
                  <img src="images/shiba_law_professor.jpg" alt="柴柴法學教授" class="w-full h-full object-cover" style="object-position: center 20%; transform: scale(1.38);">
                </div>
                <div class="space-y-1.5 text-xs sm:text-sm text-slate-800 dark:text-slate-200">
                  <div class="font-black text-amber-950 dark:text-amber-300 text-sm sm:text-base">
                    🐾 柴柴法學教授 • 體系通盤融會
                  </div>
                  <p class="leading-relaxed">
                    「同學們！第二節把上一節抽象的四大排列組合具體化了：故意既遂犯是基本原型（作為是典型，不作為則是保證人與義務作為的變體）；客觀沒死但想殺轉入未遂（門檻降為著手）；客觀死了但沒想殺轉入過失（門檻降為預見可能）。這三套結構圖記熟，整部刑法總則的骨架就完全立起來了！」
                  </p>
                </div>
              </div>

              <!-- 金毛首席辯護律師 -->
              <div class="p-5 rounded-2xl bg-gradient-to-br from-blue-50/90 to-slate-50 dark:from-blue-950/30 dark:to-slate-900 border-2 border-blue-300 dark:border-blue-700/60 border-l-[6px] border-l-blue-600 flex items-start gap-4 shadow-xs">
                <div class="w-12 h-12 rounded-full overflow-hidden shrink-0 border-2 border-blue-500 shadow-xs">
                  <img src="images/golden_case_attorney.jpg" alt="金毛辯護律師" class="w-full h-full object-cover" style="object-position: center 20%; transform: scale(1.35);">
                </div>
                <div class="space-y-1.5 text-xs sm:text-sm text-slate-800 dark:text-slate-200">
                  <div class="font-black text-blue-950 dark:text-blue-300 text-sm sm:text-base">
                    ⚖️ 金毛大律師 • 實戰抗辯精華
                  </div>
                  <p class="leading-relaxed">
                    「在訴訟中，辯護人的工作就是精準利用論罪類型的結構漏洞：把檢方起訴的『故意既遂』打成『未遂』（爭取第 25 條第 2 項減刑）或打成『過失』（大幅降低法定刑上限）。遇到不作為犯更要猛攻『作為可能性』與『保證地位』，只要其中一環動搖，全盤崩解！」
                  </p>
                </div>
              </div>

              <!-- 德牧法規巡查官 -->
              <div class="p-5 rounded-2xl bg-gradient-to-br from-slate-100 to-slate-50 dark:from-slate-800/80 dark:to-slate-900 border-2 border-slate-300 dark:border-slate-700 border-l-[6px] border-l-slate-600 flex items-start gap-4 shadow-xs">
                <div class="w-12 h-12 rounded-full overflow-hidden shrink-0 border-2 border-slate-500 shadow-xs">
                  <img src="images/shepherd_law_inspector.jpg" alt="德牧法規巡查官" class="w-full h-full object-cover" style="object-position: center 15%; transform: scale(1.4);">
                </div>
                <div class="space-y-1.5 text-xs sm:text-sm text-slate-800 dark:text-slate-200">
                  <div class="font-black text-slate-900 dark:text-white text-sm sm:text-base">
                    🛡️ 德牧法規巡查官 • 法規雷達總巡邏
                  </div>
                  <p class="leading-relaxed">
                    「提醒考生嚴格把關法條依據：故意既遂適用刑法第 12 條第 1 項原則；未遂犯依刑法第 25 條第 2 項，必須法律有特別規定處罰者始成立；過失犯依刑法第 12 條第 2 項，亦以特別規定者為限。另外刑法第 276 條過失致死罪已無業務過失之分，請勿再寫錯！」
                  </p>
                </div>
              </div>

              <!-- 邊牧首席審判長 -->
              <div class="p-5 rounded-2xl bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white border-2 border-amber-400/80 shadow-md flex items-start gap-4">
                <div class="w-12 h-12 rounded-full overflow-hidden shrink-0 border-2 border-amber-400 shadow-xs">
                  <img src="images/border_collie_chief_judge.jpg" alt="邊牧審判長" class="w-full h-full object-cover" style="object-position: center 25%; transform: scale(1.35);">
                </div>
                <div class="space-y-1.5 text-xs sm:text-sm">
                  <div class="font-black text-amber-300 text-sm sm:text-base">
                    👨‍⚖️ 邊牧首席審判長 • 終審定錨與 2026 展望
                  </div>
                  <p class="leading-relaxed text-slate-200">
                    「解題提示的『三大特定』是閱卷老師改考卷給分的第一印象！甲某某行為，構成○○罪的□□犯。標題下得精準乾脆，論述層次自然清清楚楚。第二節全節至 2026 年皆為穩定精華核心，掌握好本節，第三章就已大功告成！」
                  </p>
                </div>
              </div>

            </div>
          </section>

          <!-- 章節底端雙向分頁導航 -->
          <div class="pt-6 border-t border-slate-200/80 dark:border-white/10 flex items-center justify-between gap-4 flex-wrap">
            <button onclick="switchView('part1-ch3-sec1')" class="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-blue-400 hover:shadow-sm transition-all text-left flex items-center gap-3 cursor-pointer group">
              <span class="text-xl group-hover:-translate-x-1 transition-transform">←</span>
              <div>
                <span class="block text-[11px] font-mono text-slate-400 font-bold uppercase">PREVIOUS SECTION</span>
                <span class="text-sm font-bold text-slate-800 dark:text-slate-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">第一節 構成要件該當性判斷原理</span>
              </div>
            </button>
            <button onclick="switchView('part2')" class="p-4 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white shadow-sm transition-all text-right flex items-center gap-3 ml-auto cursor-pointer group">
              <div>
                <span class="block text-[11px] font-mono text-blue-200 font-bold uppercase">NEXT DIVISION</span>
                <span class="text-sm font-bold text-white group-hover:underline transition-all">進入 第二篇 故意既遂犯構成要件導讀</span>
              </div>
              <span class="text-xl group-hover:translate-x-1 transition-transform">→</span>
            </button>
          </div>

        </div>
`;
