/**
 * view-part0-ch1-sec2.js
 * 第零篇 第一章 第二節 罪刑法定原則——付出代價的根據何在？ (教材第 2-5 ~ 2-7 頁)
 * 完全遵循 AGENTS.md「五位一體法學劇院」最高行為憲法規範：
 * 1. ⚔️ 原被告/檢控辯護法庭正面言詞辯論（金毛大律師 vs 赤狐女律師）
 * 2. 🐾 柴柴法學教授 • 白話生活大解碼（分段留白、純紅底線、生活比喻）
 * 3. ⚖️ 金毛大律師 • 法庭攻防點評（實務抗辯戰術）
 * 4. 🛡️ 德牧法規巡查官 • 法規雷達查核（實體法檢索與裁判要旨）
 * 5. 👨‍⚖️ 邊牧首席審判長 • 終審裁決一槌定音（#法槌一敲誰與爭鋒、實體法定讞、國考定錨、📅 2026 最新法條動態備註）
 * 排版：嚴格垂直單欄堆疊（space-y-3，嚴禁橫向並排），零刺眼全紅字。
 */
window.APP_VIEWS = window.APP_VIEWS || {};
window.APP_VIEWS['viewPart0Ch1Sec2'] = window.APP_VIEWS['part0Ch1Sec2'] = `
        <!-- VIEW: 第零篇 第一章・第二節 罪刑法定原則——付出代價的根據何在？ (教材第 2-5 ~ 2-7 頁) -->
        <div id="viewPart0Ch1Sec2" class="fade-enter hidden space-y-8">
          
          <!-- 麵包屑導航 -->
          <div class="flex items-center justify-between gap-4 border-b border-slate-200/80 dark:border-white/10 pb-3">
            <nav class="flex items-center gap-2 text-xs font-medium text-slate-500 dark:text-slate-400 flex-wrap">
              <button onclick="switchView('part0')" class="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">第零篇</button>
              <span>/</span>
              <button onclick="switchView('part0-ch1')" class="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">第一章 刑法的運作原理</button>
              <span>/</span>
              <span class="text-blue-600 dark:text-blue-400 font-bold">第二節 罪刑法定原則</span>
            </nav>
            <button onclick="switchView('part0-ch1')" class="text-xs text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 flex items-center gap-1 transition-colors shrink-0 font-bold">
              <span>← 返回第一章總覽</span>
            </button>
          </div>

          <!-- 章節大標題 -->
          <div class="space-y-2">
            <div class="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-mono text-xs font-bold">
              <span>第零篇・第一章・第二節</span>
              <span class="px-2 py-0.5 rounded-md bg-blue-50 dark:bg-blue-950/40 text-[11px] border border-blue-200 dark:border-blue-900/50">教材第 2-5 ～ 2-7 頁 原文體系</span>
            </div>
            <h2 class="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
              第二節 罪刑法定原則——付出代價的根據何在？
            </h2>
            <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-serif">
              「行為之處罰，以行為時之法律有明文規定者為限。」深入剖析習慣法禁止、類推適用禁止、罪刑明確性與法不溯及既往四大面向、成文法主義、文義極限與憲法法治國對照。
            </p>
          </div>

          <!-- ═══════════════ 一、罪刑法定原則核心定義與憲法法源 ═══════════════ -->
          <section id="sec-p0ch1-sec2-def" class="space-y-6 pt-2">
            <div class="flex items-center gap-3">
              <span class="w-2 h-6 rounded-full bg-blue-600"></span>
              <h3 class="text-lg sm:text-xl font-black text-slate-900 dark:text-white tracking-tight">
                一、罪刑法定原則核心定義與憲法法源（教材第 2-5 頁）
              </h3>
            </div>

            <div class="p-6 rounded-3xl border border-slate-200 dark:border-white/[0.08] bg-white dark:bg-[#101623] shadow-sm space-y-6">
              
              <!-- 核心法定定義與釋字 384 金句卡片 -->
              <div class="p-6 rounded-2xl bg-gradient-to-br from-sky-50 via-blue-50/50 to-indigo-50 dark:from-[#082f49] dark:via-[#0c4a6e]/70 dark:to-[#0f172a] border-2 border-sky-300 dark:border-sky-500/80 border-l-[8px] border-l-blue-600 dark:border-l-sky-400 shadow-sm space-y-5">
                
                <!-- 標頭列：法規名稱與拉丁名句 -->
                <div class="flex items-center justify-between flex-wrap gap-2">
                  <div class="flex items-center gap-2.5">
                    <span class="text-2xl drop-shadow-sm">📜</span>
                    <div>
                      <span class="font-black text-sm sm:text-base text-blue-950 dark:text-sky-100 tracking-wide">
                        罪刑法定原則
                      </span>
                      <span class="block text-[11px] font-mono font-bold text-blue-700 dark:text-sky-300 tracking-wider">
                        NULLUM CRIMEN, NULLA POENA SINE LEGE
                      </span>
                    </div>
                  </div>
                  <div class="flex items-center gap-2">
                    <span class="text-xs font-mono font-black px-3 py-1 rounded-lg bg-blue-600 text-white shadow-xs border border-blue-400 flex items-center gap-1">
                      <span>§</span> 刑法第 1 條
                    </span>
                    <span class="text-xs font-mono font-black px-3 py-1 rounded-lg bg-amber-500 text-white shadow-xs border border-amber-300 flex items-center gap-1">
                      <span>⚖️</span> 釋字第 384 號
                    </span>
                  </div>
                </div>

                <!-- 刑法第 1 條前段明文 -->
                <div class="p-4 sm:p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-blue-300 dark:border-blue-700/80 border-l-4 border-l-blue-600 shadow-xs space-y-2">
                  <div class="flex items-center justify-between text-xs font-mono border-b border-blue-100 dark:border-slate-800 pb-2">
                    <span class="font-bold text-blue-800 dark:text-blue-300 flex items-center gap-1.5">
                      <span class="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
                      刑法第 1 條前段明文
                    </span>
                    <span class="px-2 py-0.5 rounded bg-blue-100 dark:bg-blue-900/60 text-blue-800 dark:text-blue-200 font-bold text-[11px]">
                      ★ 刑法大憲章・帝王核心原則
                    </span>
                  </div>
                  <p class="text-base sm:text-lg md:text-xl font-black text-blue-950 dark:text-blue-50 leading-relaxed font-serif tracking-wide py-1">
                    「行為之處罰，以行為時之法律有明文規定者為限。」
                  </p>
                </div>

                <!-- 釋字 384 號理由書摘錄 -->
                <div class="p-4 sm:p-5 rounded-xl bg-amber-50 dark:bg-amber-950/40 border-2 border-amber-300 dark:border-amber-700 border-l-4 border-l-amber-500 shadow-xs space-y-2 text-xs sm:text-[13px]">
                  <div class="flex items-center justify-between font-bold text-amber-900 dark:text-amber-200 border-b border-amber-200/80 dark:border-amber-800/60 pb-1.5">
                    <span class="flex items-center gap-1.5 text-xs sm:text-sm">
                      <span class="text-base">⚖️</span>
                      <span>司法院釋字第 384 號解釋理由書（憲法法源依據）</span>
                    </span>
                    <span class="font-mono text-[11px] px-2 py-0.5 rounded bg-amber-200/80 dark:bg-amber-800/60 text-amber-950 dark:text-amber-100 font-bold">
                      憲法第 8 條 正當法律程序
                    </span>
                  </div>
                  <blockquote class="italic text-amber-950 dark:text-amber-100 leading-relaxed pl-3 border-l-2 border-amber-500 font-serif text-xs sm:text-sm font-medium">
                    「實質正當之法律程序，包括罪刑法定主義之要求。非經立法院通過、總統公布之法律明文規定，不得以習慣法創設罪刑，亦不得超越法條文義而類推適用，始符憲法保障人身自由之本旨。」
                  </blockquote>
                </div>

                <!-- 學理價值說明 -->
                <p class="text-xs sm:text-sm text-blue-950 dark:text-slate-200 leading-relaxed font-serif bg-white/80 dark:bg-slate-900/50 p-3.5 rounded-xl border border-blue-200/60 dark:border-blue-900/40">
                  罪刑法定原則被譽為<strong>「刑法的大憲章」</strong>。其核心價值在於<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">節制國家權力任意發動、保障人民行為自由與預測可能性</span>。國家欲使人民付出代價（發動刑罰制裁），必須以事前制定且明確的成文法律為唯一根據。
                </p>

                <!-- 🐣 小白秒懂專區 -->
                <div class="rounded-2xl p-5 bg-amber-50/70 dark:bg-[#1a1612] border-2 border-amber-300 dark:border-amber-800/60 border-l-[8px] border-l-amber-500 shadow-xs space-y-3 text-xs sm:text-sm">
                  <div class="flex items-center gap-2 border-b border-amber-200 dark:border-amber-900/40 pb-2">
                    <span class="text-xl">🐣</span>
                    <span class="font-black text-amber-950 dark:text-amber-200 text-sm">小白秒懂專區 • 30 秒白話搞懂「罪刑法定原則」</span>
                  </div>
                  <p class="text-slate-700 dark:text-slate-300 leading-relaxed font-serif">
                    想像你跟朋友玩桌遊，你剛擲出骰子，朋友突然大喊：「你丟骰子的姿勢太囂張了，按我家規矩要罰你一千塊！」你一定會抗議：「遊戲說明書裡哪裡有寫？！」
                  </p>
                  <p class="text-slate-800 dark:text-slate-200 font-bold bg-white/70 dark:bg-black/20 p-2.5 rounded-xl border border-amber-200 dark:border-amber-800/40 font-serif">
                    💡 刑法就是國家與人民的遊戲規則書！<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">沒先講好的規矩，不能事後找我算帳</span>；法律沒白紙黑字寫是犯罪，政府跟法官就絕對不能抓我去關！
                  </p>
                </div>

              </div>

              <!-- 四大面向派生子原則 原文架構圖 -->
              <div class="space-y-3 pt-2">
                <div class="flex items-center justify-between">
                  <h4 class="text-sm sm:text-base font-black text-slate-900 dark:text-white flex items-center gap-2">
                    <span class="text-blue-600 text-lg">🗺️</span>
                    <span>罪刑法定原則之四大面向派生子原則（教材第 2-5 頁 原文圖解）</span>
                  </h4>
                  <span class="text-xs font-mono font-bold text-blue-600 dark:text-blue-400 px-2 py-0.5 rounded bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-900">四大面向</span>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-xs">
                  <!-- 面向 1 -->
                  <div class="p-4 rounded-2xl bg-blue-50/70 dark:bg-slate-900 border-2 border-blue-200 dark:border-blue-800 border-l-4 border-l-blue-600 shadow-xs space-y-1.5">
                    <div class="flex items-center justify-between">
                      <span class="font-black text-blue-950 dark:text-blue-100 flex items-center gap-1.5 text-sm">
                        <span class="w-5 h-5 rounded bg-blue-600 text-white flex items-center justify-center font-mono font-bold text-xs">1</span>
                        <span>習慣法之禁止</span>
                      </span>
                      <span class="text-[10px] text-blue-700 dark:text-blue-300 font-mono font-bold px-1.5 py-0.5 rounded bg-blue-100 dark:bg-blue-900/60">成文法主義</span>
                    </div>
                    <p class="text-slate-700 dark:text-slate-300 leading-relaxed text-[11.5px] font-serif">
                      刑事處罰，必須以<strong>形式法律</strong>（立法院三讀、總統公布）加以規定，嚴禁逕以社會習慣作為處罰依據。
                    </p>
                  </div>

                  <!-- 面向 2 -->
                  <div class="p-4 rounded-2xl bg-indigo-50/70 dark:bg-slate-900 border-2 border-indigo-200 dark:border-indigo-800 border-l-4 border-l-indigo-600 shadow-xs space-y-1.5">
                    <div class="flex items-center justify-between">
                      <span class="font-black text-indigo-950 dark:text-indigo-100 flex items-center gap-1.5 text-sm">
                        <span class="w-5 h-5 rounded bg-indigo-600 text-white flex items-center justify-center font-mono font-bold text-xs">2</span>
                        <span>類推適用之禁止</span>
                      </span>
                      <span class="text-[10px] text-indigo-700 dark:text-indigo-300 font-mono font-bold px-1.5 py-0.5 rounded bg-indigo-100 dark:bg-indigo-900/60">文義射程極限</span>
                    </div>
                    <p class="text-slate-700 dark:text-slate-300 leading-relaxed text-[11.5px] font-serif">
                      刑事處罰，必須法律「針對該行為」加以規定。文義極限為處罰界限，嚴禁超出文字射程而為不利行為人之類推。
                    </p>
                  </div>

                  <!-- 面向 3 -->
                  <div class="p-4 rounded-2xl bg-amber-50/70 dark:bg-slate-900 border-2 border-amber-200 dark:border-amber-800 border-l-4 border-l-amber-600 shadow-xs space-y-1.5">
                    <div class="flex items-center justify-between">
                      <span class="font-black text-amber-950 dark:text-amber-100 flex items-center gap-1.5 text-sm">
                        <span class="w-5 h-5 rounded bg-amber-600 text-white flex items-center justify-center font-mono font-bold text-xs">3</span>
                        <span>罪刑明確性原則</span>
                      </span>
                      <span class="text-[10px] text-amber-700 dark:text-amber-300 font-mono font-bold px-1.5 py-0.5 rounded bg-amber-100 dark:bg-amber-900/60">行為可預見</span>
                    </div>
                    <p class="text-slate-700 dark:text-slate-300 leading-relaxed text-[11.5px] font-serif">
                      刑事處罰，必須「明確」加以規定。犯罪要件與法律效果均須具體清晰，嚴禁絕對不定期刑。
                    </p>
                  </div>

                  <!-- 面向 4 -->
                  <div class="p-4 rounded-2xl bg-rose-50/70 dark:bg-slate-900 border-2 border-rose-200 dark:border-rose-800 border-l-4 border-l-rose-600 shadow-xs space-y-1.5">
                    <div class="flex items-center justify-between">
                      <span class="font-black text-rose-950 dark:text-rose-100 flex items-center gap-1.5 text-sm">
                        <span class="w-5 h-5 rounded bg-rose-600 text-white flex items-center justify-center font-mono font-bold text-xs">4</span>
                        <span>法不溯及既往原則</span>
                      </span>
                      <span class="text-[10px] text-rose-700 dark:text-rose-300 font-mono font-bold px-1.5 py-0.5 rounded bg-rose-100 dark:bg-rose-900/60">信賴保護</span>
                    </div>
                    <p class="text-slate-700 dark:text-slate-300 leading-relaxed text-[11.5px] font-serif">
                      刑事處罰，必須「行為時」即加以規定。禁止搭時光機事後算帳，保障人民安排生活之信賴利益。
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </section>

          <!-- ═══════════════ 二、面向一：習慣法之禁止（案例 1-4） ═══════════════ -->
          <section id="sec-p0ch1-sec2-sub1-custom" class="space-y-6 pt-2">
            <div class="flex items-center gap-3">
              <span class="w-2 h-6 rounded-full bg-blue-600"></span>
              <h3 class="text-lg sm:text-xl font-black text-slate-900 dark:text-white tracking-tight">
                二、面向一：習慣法之禁止（教材第 2-5 頁）
              </h3>
            </div>

            <div class="p-6 rounded-3xl border border-slate-200 dark:border-white/[0.08] bg-white dark:bg-[#101623] shadow-sm space-y-6">
              
              <!-- 案例 1-4 容器 (五位一體法學劇院) -->
              <div id="case-card-0-1-4" class="p-5 sm:p-6 rounded-2xl border-2 border-blue-200 dark:border-blue-900/60 bg-gradient-to-br from-slate-50 to-blue-50/30 dark:from-slate-900 dark:to-blue-950/20 shadow-xs space-y-4">
                
                <div class="flex items-center justify-between flex-wrap gap-2">
                  <div class="flex items-center gap-2">
                    <span class="px-3 py-1 rounded-full bg-blue-600 text-white font-mono font-black text-xs shadow-xs">案例 1-4</span>
                    <h4 class="font-black text-base text-slate-900 dark:text-white">
                      原因自由行為與習慣法禁止之檢驗（教材第 2-5 頁）
                    </h4>
                  </div>
                  <span class="text-xs font-mono text-blue-600 dark:text-blue-400 font-bold">成文法保留與 § 19 Ⅲ 明文化</span>
                </div>

                <!-- 案情事實 -->
                <div class="p-4 rounded-2xl bg-blue-100/90 dark:bg-blue-950/85 border-2 border-blue-300 dark:border-blue-700/80 shadow-xs flex items-start gap-3.5">
                  <div class="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center shrink-0 text-lg shadow-sm">
                    🍺
                  </div>
                  <div class="flex-1 space-y-1">
                    <div class="flex items-center gap-2">
                      <span class="px-2 py-0.5 rounded-md bg-blue-600 text-white font-mono text-[10.5px] font-black tracking-wide shadow-xs">案件事實</span>
                      <span class="text-[11px] font-mono font-bold text-blue-700 dark:text-blue-300/90">#自陷精神障礙處罰根據</span>
                    </div>
                    <div class="space-y-1.5 text-xs sm:text-sm font-bold text-blue-950 dark:text-blue-100 leading-relaxed font-serif">
                      <p>早期學理上曾以習慣法為由，處罰原因自由之行為人，是否有違罪刑法定原則？</p>
                      <p>甲於行兇前猛灌烈酒壯膽，致實行階段陷入心智缺陷狀態，法官得否逕以法理或習慣法認定甲有罪？</p>
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
                            <span class="px-2 py-0.5 rounded-full bg-amber-100 dark:bg-amber-950 text-amber-900 dark:text-amber-300 font-extrabold text-[10px]">成文法防線</span>
                          </div>
                          <div class="text-[10.5px] text-amber-700 dark:text-amber-400 font-bold">主張：形式法律保留原則</div>
                        </div>
                      </div>
                      <div class="space-y-2 text-xs sm:text-[13px] text-slate-800 dark:text-slate-100 leading-relaxed font-serif">
                        <p class="font-bold text-amber-950 dark:text-amber-200">
                          「審判長！刑法第 1 條前段明定『行為時之法律有明文規定者為限』！」
                        </p>
                        <p>
                          早期刑法第 19 條僅規定精神障礙者不罰或減輕其刑，完全沒有明文排除自行招致之例外！法院逕自援引未明文化之德國『原因自由行為法理』論罪，本質上就是拿習慣法創設處罰，公然牴觸成文法保留原則！
                        </p>
                      </div>
                    </div>
                    <div class="p-2.5 rounded-xl bg-amber-50 dark:bg-amber-950/40 text-xs sm:text-[13px] font-bold text-amber-950 dark:text-amber-200 leading-snug border border-amber-200 dark:border-amber-800/60">
                      ❌ 未明文化前 ➔ <strong>逕以習慣法或法理論罪屬違憲！</strong>
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
                            <span class="px-2 py-0.5 rounded-full bg-rose-100 dark:bg-rose-950 text-rose-900 dark:text-rose-300 font-extrabold text-[10px]">實質正義論</span>
                          </div>
                          <div class="text-[10.5px] text-rose-700 dark:text-rose-400 font-bold">主張：實質可罰性與責任原則</div>
                        </div>
                      </div>
                      <div class="space-y-2 text-xs sm:text-[13px] text-slate-800 dark:text-slate-100 leading-relaxed font-serif">
                        <p class="font-bold text-rose-950 dark:text-rose-200">
                          「公訴方主張：故意使自己發瘋再去殺人，絕不容享有減免刑之法律優待！」
                        </p>
                        <p>
                          行為人在自陷缺陷之『原因設定階段』具備完全責任能力，且對犯罪結果有故意或預見，其責任非難點應前置於設定階段，非單純習慣法創設，乃法理當然解釋！
                        </p>
                      </div>
                    </div>
                    <div class="p-2.5 rounded-xl bg-rose-50 dark:bg-rose-950/40 text-xs sm:text-[13px] font-bold text-rose-950 dark:text-rose-200 leading-snug border border-rose-200 dark:border-rose-800/60">
                      ⚖️ 實質正義要求 ➔ <strong>立法院應迅即修法杜絕爭議！</strong>
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
                      <span class="text-[11px] px-2.5 py-0.5 rounded-full bg-amber-200/80 dark:bg-amber-900/60 text-amber-900 dark:text-amber-100 font-extrabold font-mono">成文法補破網</span>
                    </div>
                    <div class="space-y-2 text-xs sm:text-sm text-slate-800 dark:text-slate-100 leading-relaxed font-serif">
                      <p>
                        「借酒裝瘋殺人到底能不能罰？<br>
                        以前法條只寫『瘋子不罰』，嫌犯故意灌醉自己再去砍人。法官生氣判他有罪，法學者卻罵法官：『法條沒寫你就自己造法，破壞成文法主義！』
                      </p>
                      <p class="leading-relaxed">
                        <span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">
                          確實有違罪刑法定原則！因此 95 年刑法修正時增訂 § 19 Ⅲ，以杜爭議。
                        </span>
                      </p>
                      <p>
                        立法院白紙黑字增訂『自行招致者不適用之』，從此抓人 100% 站得住腳汪！」
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
                        <span class="text-[10px] px-2 py-0.5 rounded bg-amber-200 dark:bg-amber-900/60 text-amber-900 dark:text-amber-200 font-bold font-mono">實戰抗辯破局</span>
                      </div>
                      <div class="space-y-2 text-xs sm:text-sm text-slate-800 dark:text-slate-100 leading-relaxed font-serif">
                        <p>
                          「在修法前，身為辯護人必定死守成文法主義，主張習慣法禁止以爭取無罪或減刑！
                        </p>
                        <p>
                          <span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">
                            但在 95 年增訂 § 19 Ⅲ 後，辯護焦點必須轉移至『是否出於故意或過失自行招致』！<br>
                            若係他人灌醉或不可預見之藥物交互作用，仍得主張不受第 3 項排除，力爭回歸第 1、2 項減免責任！
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
                        <span class="text-[10px] px-2 py-0.5 rounded bg-blue-200 dark:bg-blue-900/60 text-blue-900 dark:text-blue-200 font-bold font-mono">成文條文溯源</span>
                      </div>
                      <div class="space-y-2 text-xs sm:text-sm text-slate-800 dark:text-slate-100 leading-relaxed font-serif">
                        <p class="font-black text-blue-950 dark:text-blue-300">
                          【成文法增訂依據查核】
                        </p>
                        <p class="leading-relaxed">
                          <span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">
                            民國 94 年 2 月 2 日總統令修正公布、民國 95 年 7 月 1 日施行之刑法第 19 條第 3 項：
                          </span>
                        </p>
                        <p>
                          「前二項規定，於因故意或過失自行招致者，不適用之。」自此『原因自由行為』正式完成形式法律保留程序，徹底擺脫以習慣法為處罰依據之違憲疑慮。
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
                          🔨 【實體法定讞】：修法前以習慣法論罪確屬違憲瑕疵；現行法下甲自陷精神障礙，依 § 19 Ⅲ 排除不罰，依法論罪科刑！
                        </p>
                        <p>
                          💡 <strong>國考答題定錨</strong>：考題若問及原因自由行為之正當性，必先指出早期『習慣法禁止』之合憲性爭議，再引出 95 年增訂第 19 條第 3 項明文化之里程碑意義，論述極具學理深度！
                        </p>
                        <div class="p-2.5 rounded-xl bg-indigo-900/60 border border-indigo-400/40 text-[11.5px] text-amber-200 font-mono">
                          📅 <strong>2026 最新法條動態備註</strong>：刑法第 19 條第 3 項至今維持現行有效法規，近年司法院憲法法庭裁判亦肯定其合憲性，無修法更動。
                        </div>
                      </div>
                    </div>
                  </div>

                </div>

              </div>

            </div>
          </section>

          <!-- ═══════════════ 三、面向二：類推適用之禁止（案例 1-5） ═══════════════ -->
          <section id="sec-p0ch1-sec2-sub2-analogy" class="space-y-6 pt-2">
            <div class="flex items-center gap-3">
              <span class="w-2 h-6 rounded-full bg-indigo-600"></span>
              <h3 class="text-lg sm:text-xl font-black text-slate-900 dark:text-white tracking-tight">
                三、面向二：類推適用之禁止（教材第 2-5 ～ 2-6 頁）
              </h3>
            </div>

            <div class="p-6 rounded-3xl border border-slate-200 dark:border-white/[0.08] bg-white dark:bg-[#101623] shadow-sm space-y-6">
              
              <!-- 案例 1-5 容器 (五位一體法學劇院) -->
              <div id="case-card-0-1-5" class="p-5 sm:p-6 rounded-2xl border-2 border-indigo-200 dark:border-indigo-900/60 bg-gradient-to-br from-slate-50 to-indigo-50/30 dark:from-slate-900 dark:to-indigo-950/20 shadow-xs space-y-4">
                
                <div class="flex items-center justify-between flex-wrap gap-2">
                  <div class="flex items-center gap-2">
                    <span class="px-3 py-1 rounded-full bg-indigo-600 text-white font-mono font-black text-xs shadow-xs">案例 1-5</span>
                    <h4 class="font-black text-base text-slate-900 dark:text-white">
                      竊取電能 vs 偷接第四台影音訊號（教材第 2-5 ～ 2-6 頁）
                    </h4>
                  </div>
                  <span class="text-xs font-mono text-indigo-600 dark:text-indigo-400 font-bold">文義最大極限與準動產擬制</span>
                </div>

                <!-- 案情事實 -->
                <div class="p-4 rounded-2xl bg-indigo-100/90 dark:bg-indigo-950/85 border-2 border-indigo-300 dark:border-indigo-700/80 shadow-xs flex items-start gap-3.5">
                  <div class="w-10 h-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center shrink-0 text-lg shadow-sm">
                    📺
                  </div>
                  <div class="flex-1 space-y-1">
                    <div class="flex items-center gap-2">
                      <span class="px-2 py-0.5 rounded-md bg-indigo-600 text-white font-mono text-[10.5px] font-black tracking-wide shadow-xs">案件事實</span>
                      <span class="text-[11px] font-mono font-bold text-indigo-700 dark:text-indigo-300/90">#訊號可否類推為能量</span>
                    </div>
                    <div class="space-y-1.5 text-xs sm:text-sm font-bold text-indigo-950 dark:text-indigo-100 leading-relaxed font-serif">
                      <p>竊取電能，是否成立竊盜罪？偷接第四台的影音訊號，可否成立竊盜罪？</p>
                      <p>甲爬上電線桿私接第四台線路收看電視，檢察官依刑法第 320 條、第 323 條竊取準動產起訴，法官應如何判決？</p>
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
                            <span class="px-2 py-0.5 rounded-full bg-amber-100 dark:bg-amber-950 text-amber-900 dark:text-amber-300 font-extrabold text-[10px]">文義邊界防線</span>
                          </div>
                          <div class="text-[10.5px] text-amber-700 dark:text-amber-400 font-bold">主張：條文文字可能文義範圍</div>
                        </div>
                      </div>
                      <div class="space-y-2 text-xs sm:text-[13px] text-slate-800 dark:text-slate-100 leading-relaxed font-serif">
                        <p class="font-bold text-amber-950 dark:text-amber-200">
                          「審判長！刑法第 323 條明定之『能量』，在日常文義下絕不包含影音訊號！」
                        </p>
                        <p>
                          訊號是影像與聲音之傳播資訊，甲接收後業者既未耗損任何具體電能，亦未喪失持有。若將『訊號』擴張解釋為『能量』，已徹底跨越文字可能文義射程，屬於違法之不利類推適用，本案依法必須判決無罪！
                        </p>
                      </div>
                    </div>
                    <div class="p-2.5 rounded-xl bg-amber-50 dark:bg-amber-950/40 text-xs sm:text-[13px] font-bold text-amber-950 dark:text-amber-200 leading-snug border border-amber-200 dark:border-amber-800/60">
                      ❌ 影音訊號非動產亦非能量 ➔ <strong>絕對不成立竊盜罪！</strong>
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
                            <span class="px-2 py-0.5 rounded-full bg-rose-100 dark:bg-rose-950 text-rose-900 dark:text-rose-300 font-extrabold text-[10px]">財產保護論</span>
                          </div>
                          <div class="text-[10.5px] text-rose-700 dark:text-rose-400 font-bold">主張：目的性擴張解釋</div>
                        </div>
                      </div>
                      <div class="space-y-2 text-xs sm:text-[13px] text-slate-800 dark:text-slate-100 leading-relaxed font-serif">
                        <p class="font-bold text-rose-950 dark:text-rose-200">
                          「公訴方主張：第四台訊號係業者耗費巨資發射之電磁載體，具有龐大經濟價值！」
                        </p>
                        <p>
                          被告擅自引接，侵害業者排他性收益利益，實質掠奪他人經濟成果。立法者制定第 323 條之規範目的本即在保護無形經濟價值，應作目的性擴張解釋納入準動產！
                        </p>
                      </div>
                    </div>
                    <div class="p-2.5 rounded-xl bg-rose-50 dark:bg-rose-950/40 text-xs sm:text-[13px] font-bold text-rose-950 dark:text-rose-200 leading-snug border border-rose-200 dark:border-rose-800/60">
                      ⚖️ 侵害排他性經濟利益 ➔ <strong>應以竊取準動產論科！</strong>
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
                      <span class="text-[11px] px-2.5 py-0.5 rounded-full bg-amber-200/80 dark:bg-amber-900/60 text-amber-900 dark:text-amber-100 font-extrabold font-mono">文義極限原則</span>
                    </div>
                    <div class="space-y-2 text-xs sm:text-sm text-slate-800 dark:text-slate-100 leading-relaxed font-serif">
                      <p>
                        「構成要件的解釋必須限縮在<strong>『日常的可能文義範圍內』</strong>，若超出則屬於類推適用的範疇！
                      </p>
                      <p class="leading-relaxed">
                        <span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">
                          一般來說，電能很難與動產畫上等號，正因為如此，立法者才在 § 323 有『電能以動產論』的擬制，因此竊電可以成立竊盜罪；<br>
                          然而偷接第四台的影音訊號，在性質上很難涵蓋在動產與準動產的日常可能文義範圍內，本於類推適用禁止原則，無法構成竊盜罪！
                        </span>
                      </p>
                      <p>
                        就像隔壁開演唱會你在自家陽台偷聽，歌手聲音傳過來，你能說你偷了歌手的動產嗎？文義是刑法的最高邊界汪！」
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
                        <span class="text-[10px] px-2 py-0.5 rounded bg-amber-200 dark:bg-amber-900/60 text-amber-900 dark:text-amber-200 font-bold font-mono">必勝無罪抗辯</span>
                      </div>
                      <div class="space-y-2 text-xs sm:text-sm text-slate-800 dark:text-slate-100 leading-relaxed font-serif">
                        <p>
                          「在刑事訴訟中，辯護人最重要的一把利劍就是<strong>『不利類推適用之禁止』</strong>！
                        </p>
                        <p>
                          <span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">
                            法官絕不能因為行為人在道德上有可非難性、或業者受有經濟損失，就自己跳出來當立法者填補漏洞！<br>
                            訊號非能量，刑法無明文，法官依法唯一能做的就是諭知無罪判決！
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
                        <span class="text-[10px] px-2 py-0.5 rounded bg-blue-200 dark:bg-blue-900/60 text-blue-900 dark:text-blue-200 font-bold font-mono">判例要旨校驗</span>
                      </div>
                      <div class="space-y-2 text-xs sm:text-sm text-slate-800 dark:text-slate-100 leading-relaxed font-serif">
                        <p class="font-black text-blue-950 dark:text-blue-300">
                          【司法實務見解查核】
                        </p>
                        <p class="leading-relaxed">
                          <span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">
                            實務見解亦採取相同看法：臺灣高等法院 97 年度上易字第 648 號刑事判決要旨明揭：
                          </span>
                        </p>
                        <p>
                          有線電視傳輸之影音訊號，係屬電磁波傳導之影像音訊載體，不具備可支配消耗之物理能量特質，不在刑法第 323 條準動產文義之內，不得以刑法竊盜罪處罰。另立法院事後於《有線廣播電視法》設專法規範以填補民事行政漏洞。
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
                          🔨 【實體法定讞】：刑法 § 323 採列舉與擬制主義，偷接第四台影音訊號不該當竊盜罪客觀構成要件，被告甲獲判無罪！
                        </p>
                        <p>
                          💡 <strong>國考答題定錨</strong>：考生務必精準闡述『可能文義邊界』是區分『合憲擴張解釋』與『違憲不利類推』的唯一界碑！引述高院 97 上易 648 號判決作為權威論據，定可拔得頭籌！
                        </p>
                        <div class="p-2.5 rounded-xl bg-indigo-900/60 border border-indigo-400/40 text-[11.5px] text-amber-200 font-mono">
                          📅 <strong>2026 最新法條動態備註</strong>：刑法第 323 條條文維持未變；司法實務對電磁紀錄、資訊訊號均嚴守文義邊限，未修正擴張至影音訊號。
                        </div>
                      </div>
                    </div>
                  </div>

                </div>

              </div>

            </div>
          </section>

          <!-- ═══════════════ 四、面向三：罪刑明確性原則（案例 1-6） ═══════════════ -->
          <section id="sec-p0ch1-sec2-sub3-clarity" class="space-y-6 pt-2">
            <div class="flex items-center gap-3">
              <span class="w-2 h-6 rounded-full bg-amber-600"></span>
              <h3 class="text-lg sm:text-xl font-black text-slate-900 dark:text-white tracking-tight">
                四、面向三：罪刑明確性原則（教材第 2-6 頁）
              </h3>
            </div>

            <div class="p-6 rounded-3xl border border-slate-200 dark:border-white/[0.08] bg-white dark:bg-[#101623] shadow-sm space-y-6">
              
              <!-- 案例 1-6 容器 (五位一體法學劇院) -->
              <div id="case-card-0-1-6" class="p-5 sm:p-6 rounded-2xl border-2 border-amber-200 dark:border-amber-900/60 bg-gradient-to-br from-slate-50 to-amber-50/30 dark:from-slate-900 dark:to-amber-950/20 shadow-xs space-y-4">
                
                <div class="flex items-center justify-between flex-wrap gap-2">
                  <div class="flex items-center gap-2">
                    <span class="px-3 py-1 rounded-full bg-amber-600 text-white font-mono font-black text-xs shadow-xs">案例 1-6</span>
                    <h4 class="font-black text-base text-slate-900 dark:text-white">
                      處罰方式之明確性：絕對不定期刑 vs 相對不定期刑（教材第 2-6 頁）
                    </h4>
                  </div>
                  <span class="text-xs font-mono text-amber-600 dark:text-amber-400 font-bold">法律效果明確性檢驗</span>
                </div>

                <!-- 案情事實 -->
                <div class="p-4 rounded-2xl bg-amber-100/90 dark:bg-amber-950/85 border-2 border-amber-300 dark:border-amber-700/80 shadow-xs flex items-start gap-3.5">
                  <div class="w-10 h-10 rounded-xl bg-amber-600 text-white flex items-center justify-center shrink-0 text-lg shadow-sm">
                    ⚖️
                  </div>
                  <div class="flex-1 space-y-1">
                    <div class="flex items-center gap-2">
                      <span class="px-2 py-0.5 rounded-md bg-amber-600 text-white font-mono text-[10.5px] font-black tracking-wide shadow-xs">案件事實</span>
                      <span class="text-[11px] font-mono font-bold text-amber-700 dark:text-amber-300/90">#刑罰效果明確性爭議</span>
                    </div>
                    <div class="space-y-1.5 text-xs sm:text-sm font-bold text-amber-950 dark:text-amber-100 leading-relaxed font-serif">
                      <p>下列兩種處罰方式設計，是否有違罪刑明確性原則？</p>
                      <p>
                        一、過失致人於死者，必須加以處罰。<br>
                        二、過失致人於死者，處兩年以下有期徒刑。
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
                            <span class="px-2 py-0.5 rounded-full bg-amber-100 dark:bg-amber-950 text-amber-900 dark:text-amber-300 font-extrabold text-[10px]">人身自由防線</span>
                          </div>
                          <div class="text-[10.5px] text-amber-700 dark:text-amber-400 font-bold">主張：法律效果必須具有可預見性</div>
                        </div>
                      </div>
                      <div class="space-y-2 text-xs sm:text-[13px] text-slate-800 dark:text-slate-100 leading-relaxed font-serif">
                        <p class="font-bold text-amber-950 dark:text-amber-200">
                          「審判長！第一種立法方式『必須加以處罰』，完全未訂刑種與刑度，乃典型絕對不定期刑！」
                        </p>
                        <p>
                          此種立法將刑罰輕重全權委由司法者或行政機關恣意決定，行為人根本無從預期自己將被判罰金、拘役還是關到死，嚴重違反法律效果明確性原則與憲法第 8 條，必須認定違憲無效！
                        </p>
                      </div>
                    </div>
                    <div class="p-2.5 rounded-xl bg-amber-50 dark:bg-amber-950/40 text-xs sm:text-[13px] font-bold text-amber-950 dark:text-amber-200 leading-snug border border-amber-200 dark:border-amber-800/60">
                      ❌ 絕對不定期刑 ➔ <strong>剝奪行為人預見可能性，絕對違憲！</strong>
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
                            <span class="px-2 py-0.5 rounded-full bg-rose-100 dark:bg-rose-950 text-rose-900 dark:text-rose-300 font-extrabold text-[10px]">裁量合憲論</span>
                          </div>
                          <div class="text-[10.5px] text-rose-700 dark:text-rose-400 font-bold">主張：相對不定期刑符合司法裁量</div>
                        </div>
                      </div>
                      <div class="space-y-2 text-xs sm:text-[13px] text-slate-800 dark:text-slate-100 leading-relaxed font-serif">
                        <p class="font-bold text-rose-950 dark:text-rose-200">
                          「第二種立法『處兩年以下有期徒刑』，訂有明確上限，屬於相對不定期刑！」
                        </p>
                        <p>
                          法律已明示最高剝奪自由界線為兩年，使法官得依個案情狀在零至兩年間精準量刑，人民亦能充分預見可能承擔之最大代價，完全符合罪刑明確性之合憲要求！
                        </p>
                      </div>
                    </div>
                    <div class="p-2.5 rounded-xl bg-rose-50 dark:bg-rose-950/40 text-xs sm:text-[13px] font-bold text-rose-950 dark:text-rose-200 leading-snug border border-rose-200 dark:border-rose-800/60">
                      ✅ 相對不定期刑 ➔ <strong>明定刑度上下限，合憲合法！</strong>
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
                      <span class="text-[11px] px-2.5 py-0.5 rounded-full bg-amber-200/80 dark:bg-amber-900/60 text-amber-900 dark:text-amber-100 font-extrabold font-mono">雙軌明確性解密</span>
                    </div>
                    <div class="space-y-2 text-xs sm:text-sm text-slate-800 dark:text-slate-100 leading-relaxed font-serif">
                      <p>
                        「明確性原則包含兩隻腳：『構成要件明確性』與『法律效果明確性』！
                      </p>
                      <p class="leading-relaxed">
                        <span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">
                          ㈠ 絕對不定期刑，係關於剝奪自由之期間完全不加限制，任由司法者或執行者視行為人是否改過自新而定，此嚴重違反罪刑明確性原則；<br>
                          ㈡ 相對不定期刑，係關於剝奪自由之期間僅訂有最高或最低期間之限制，司法者或執行者只能在該期間內決定刑期，由於仍具有一定的可預見性，不違反罪刑明確性原則！
                        </span>
                      </p>
                      <p>
                        如果法條寫『關到表現好為止』，典獄長心情不好你就要坐一輩子牢，這就是恐怖的絕對不定期刑汪！」
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
                        <span class="text-[10px] px-2 py-0.5 rounded bg-amber-200 dark:bg-amber-900/60 text-amber-900 dark:text-amber-200 font-bold font-mono">憲法審查武器</span>
                      </div>
                      <div class="space-y-2 text-xs sm:text-sm text-slate-800 dark:text-slate-100 leading-relaxed font-serif">
                        <p>
                          「在實務審判中，若遭遇構成要件過度抽象（例如『情節重大』卻無認定指引）或法律效果未明之法條，
                        </p>
                        <p>
                          <span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">
                            辯護人可依罪刑明確性原則，聲請法官裁定停止訴訟程序並聲請憲法裁判宣告違憲！<br>
                            明確性不是口號，而是保障人民不受公權力恣意侵害的實體防護盾！
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
                        <span class="text-[10px] px-2 py-0.5 rounded bg-blue-200 dark:bg-blue-900/60 text-blue-900 dark:text-blue-200 font-bold font-mono">大法官解釋要旨</span>
                      </div>
                      <div class="space-y-2 text-xs sm:text-sm text-slate-800 dark:text-slate-100 leading-relaxed font-serif">
                        <p class="font-black text-blue-950 dark:text-blue-300">
                          【憲法解釋與條文要旨查核】
                        </p>
                        <p class="leading-relaxed">
                          <span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">
                            司法院釋字第 432、521 及 471 號解釋明揭：法律明確性須符合『受規範者可得預見』及『得經司法審查確認』之要求。
                          </span>
                        </p>
                        <p>
                          刑法第 33 條主刑種類明確劃分；第 276 條過失致死罪現行規定『處五年以下有期徒刑、拘役或五十萬元以下罰金』，具備法定最高限度，屬合法之相對不定期刑。
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
                          🔨 【實體法定讞】：第一種立法（絕對不定期刑）違憲無效；第二種立法（相對不定期刑）具有最高期間限制，符合明確性原則，合憲有效！
                        </p>
                        <p>
                          💡 <strong>國考答題定錨</strong>：考生答題時務必展開雙軌審查：先審查構成要件是否模糊，再審查法律效果是否具備刑度上下限。切勿只寫法條明確，而漏掉刑罰效果之明確性檢視！
                        </p>
                        <div class="p-2.5 rounded-xl bg-indigo-900/60 border border-indigo-400/40 text-[11.5px] text-amber-200 font-mono">
                          📅 <strong>2026 最新法條動態備註</strong>：刑法第 276 條於 108 年修正提高刑度上限為 5 年有期徒刑；整體刑法分則均全面維持合憲之相對不定期刑體制。
                        </div>
                      </div>
                    </div>
                  </div>

                </div>

              </div>

            </div>
          </section>

          <!-- ═══════════════ 五、面向四：法不溯及既往原則（案例 1-7） ═══════════════ -->
          <section id="sec-p0ch1-sec2-sub4-retro" class="space-y-6 pt-2">
            <div class="flex items-center gap-3">
              <span class="w-2 h-6 rounded-full bg-rose-600"></span>
              <h3 class="text-lg sm:text-xl font-black text-slate-900 dark:text-white tracking-tight">
                五、面向四：法不溯及既往原則（教材第 2-6 ～ 2-7 頁）
              </h3>
            </div>

            <div class="p-6 rounded-3xl border border-slate-200 dark:border-white/[0.08] bg-white dark:bg-[#101623] shadow-sm space-y-6">
              
              <!-- 案例 1-7 容器 (五位一體法學劇院) -->
              <div id="case-card-0-1-7" class="p-5 sm:p-6 rounded-2xl border-2 border-rose-200 dark:border-rose-900/60 bg-gradient-to-br from-slate-50 to-rose-50/30 dark:from-slate-900 dark:to-rose-950/20 shadow-xs space-y-4">
                
                <div class="flex items-center justify-between flex-wrap gap-2">
                  <div class="flex items-center gap-2">
                    <span class="px-3 py-1 rounded-full bg-rose-600 text-white font-mono font-black text-xs shadow-xs">案例 1-7</span>
                    <h4 class="font-black text-base text-slate-900 dark:text-white">
                      小三條款溯及生效之合憲檢驗（教材第 2-6 ～ 2-7 頁）
                    </h4>
                  </div>
                  <span class="text-xs font-mono text-rose-600 dark:text-rose-400 font-bold">行為時法原則與信賴保護</span>
                </div>

                <!-- 案情事實 -->
                <div class="p-4 rounded-2xl bg-rose-100/90 dark:bg-rose-950/85 border-2 border-rose-300 dark:border-rose-700/80 shadow-xs flex items-start gap-3.5">
                  <div class="w-10 h-10 rounded-xl bg-rose-600 text-white flex items-center justify-center shrink-0 text-lg shadow-sm">
                    💔
                  </div>
                  <div class="flex-1 space-y-1">
                    <div class="flex items-center gap-2">
                      <span class="px-2 py-0.5 rounded-md bg-rose-600 text-white font-mono text-[10.5px] font-black tracking-wide shadow-xs">案件事實</span>
                      <span class="text-[11px] font-mono font-bold text-rose-700 dark:text-rose-300/90">#立法搭時光機爭議</span>
                    </div>
                    <div class="space-y-1.5 text-xs sm:text-sm font-bold text-rose-950 dark:text-rose-100 leading-relaxed font-serif">
                      <p>
                        有鑑於近期「小三風」大盛，為了遏止不良風氣，立法院今日在全民壓力下制定了小三條款：規定沈身處未婚狀態，只要被定義為「非單身之人」即負有特殊之忠貞義務，若與非配偶（如男女朋友）以外之人性交，處三年以下有期徒刑，並溯及自民國99年11月5日生效。
                      </p>
                      <p>試問：該溯及生效條款是否合憲？</p>
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
                            <span class="px-2 py-0.5 rounded-full bg-amber-100 dark:bg-amber-950 text-amber-900 dark:text-amber-300 font-extrabold text-[10px]">信賴利益防線</span>
                          </div>
                          <div class="text-[10.5px] text-amber-700 dark:text-amber-400 font-bold">主張：法安定性與信賴保護原則</div>
                        </div>
                      </div>
                      <div class="space-y-2 text-xs sm:text-[13px] text-slate-800 dark:text-slate-100 leading-relaxed font-serif">
                        <p class="font-bold text-amber-950 dark:text-amber-200">
                          「審判長！刑法第 1 條揭示『行為時之法律有明文規定者為限』！」
                        </p>
                        <p>
                          人民在行為時，完全依照當時合法有效之法秩序安排私生活。立法者縱使有強大之政治正當性，亦絕對不得制定『真正溯及既往』之刑罰條款搭時光機秋後算帳，否則人民對法秩序之信賴將毀於一旦！
                        </p>
                      </div>
                    </div>
                    <div class="p-2.5 rounded-xl bg-amber-50 dark:bg-amber-950/40 text-xs sm:text-[13px] font-bold text-amber-950 dark:text-amber-200 leading-snug border border-amber-200 dark:border-amber-800/60">
                      ❌ 突襲性溯及處罰 ➔ <strong>違憲無效，法官應拒絕適用！</strong>
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
                            <span class="px-2 py-0.5 rounded-full bg-rose-100 dark:bg-rose-950 text-rose-900 dark:text-rose-300 font-extrabold text-[10px]">重大公益論</span>
                          </div>
                          <div class="text-[10.5px] text-rose-700 dark:text-rose-400 font-bold">主張：民意壓力與重大公益維護</div>
                        </div>
                      </div>
                      <div class="space-y-2 text-xs sm:text-[13px] text-slate-800 dark:text-slate-100 leading-relaxed font-serif">
                        <p class="font-bold text-rose-950 dark:text-rose-200">
                          「公訴方主張：立法者係因全民壓力與維護家庭倫理之重大急迫公益而立法！」
                        </p>
                        <p>
                          若不溯及處罰此前猖獗之不法破壞者，立法目的將形同具文。立法院代表全國民意，在重大公益必要範圍內享有特別形成自由，應尊重立法者之溯及決定！
                        </p>
                      </div>
                    </div>
                    <div class="p-2.5 rounded-xl bg-rose-50 dark:bg-rose-950/40 text-xs sm:text-[13px] font-bold text-rose-950 dark:text-rose-200 leading-snug border border-rose-200 dark:border-rose-800/60">
                      ⚖️ 追求重大急迫倫理公益 ➔ <strong>請法院審酌立法形成空間！</strong>
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
                      <span class="text-[11px] px-2.5 py-0.5 rounded-full bg-amber-200/80 dark:bg-amber-900/60 text-amber-900 dark:text-amber-100 font-extrabold font-mono">問題導引核心</span>
                    </div>
                    <div class="space-y-2 text-xs sm:text-sm text-slate-800 dark:text-slate-100 leading-relaxed font-serif">
                      <p class="leading-relaxed">
                        <span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">
                          縱使小三條款具有立法上的正當性，僅該溯及條款並未考量人民之信賴而造成突襲，並傷及法律的安定性，違反法不溯及既往原則！
                        </span>
                      </p>
                      <p>
                        「昨天的我不歸今天的法律管！如果立法院可以看誰不順眼，今天立一條法說『五年前吃過炸雞的人通通判死刑』，老百姓明天誰敢出門？
                        信賴保護是法治國的命根子，刑罰絕對不准搭時光機汪！」
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
                        <span class="text-[10px] px-2 py-0.5 rounded bg-amber-200 dark:bg-amber-900/60 text-amber-900 dark:text-amber-200 font-bold font-mono">行為時法護盾</span>
                      </div>
                      <div class="space-y-2 text-xs sm:text-sm text-slate-800 dark:text-slate-100 leading-relaxed font-serif">
                        <p>
                          「在法庭上，只要檢方起訴之法條生效日期在被告行為日期之後，
                        </p>
                        <p>
                          <span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">
                            辯護人第一時間直接打出刑法第 1 條『行為時法原則』防線！<br>
                            縱使條文有立法院自行附帶之溯及條款，亦屬牴觸憲法第 8 條之違憲條款，法官應拒絕適用該溯及條款，宣告行為不罰諭知無罪！
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
                        <span class="text-[10px] px-2 py-0.5 rounded bg-blue-200 dark:bg-blue-900/60 text-blue-900 dark:text-blue-200 font-bold font-mono">時之效力校驗</span>
                      </div>
                      <div class="space-y-2 text-xs sm:text-sm text-slate-800 dark:text-slate-100 leading-relaxed font-serif">
                        <p class="font-black text-blue-950 dark:text-blue-300">
                          【時之效力與憲法釋字檢索】
                        </p>
                        <p class="leading-relaxed">
                          <span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">
                            刑法第 1 條『行為時法原則』與第 2 條第 1 項『從舊從輕原則』為刑法時之效力最高鐵律。
                          </span>
                        </p>
                        <p>
                          司法院釋字第 574、717 號解釋更強調信賴保護乃法治國核心原則。刑罰之真正溯及既往侵害人民生活安排與行為預見，在憲法審查上屬於『絕對嚴格禁止』之違憲領域！
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
                          🔨 【實體法定讞】：小三條款之溯及生效規定違反憲法第 8 條及法安定性原則而違憲無效；被告甲於修法前之行為依行為時法不罰，判決無罪！
                        </p>
                        <p>
                          💡 <strong>國考答題定錨</strong>：考生務必釐清『真正溯及既往』（對已終結之過去行為施加全新不利刑罰，原則絕對禁止）與『不真正溯及既往』之界線。答題時一針見血直指突襲性立法傷及信賴保護，直取高分！
                        </p>
                        <div class="p-2.5 rounded-xl bg-indigo-900/60 border border-indigo-400/40 text-[11.5px] text-amber-200 font-mono">
                          📅 <strong>2026 最新法條動態備註</strong>：我國刑法通則第 1 條及第 2 條維持從舊從輕與行為時法體系，未曾亦絕不可能允許真正溯及既往之不利刑罰條款。
                        </div>
                      </div>
                    </div>
                  </div>

                </div>

              </div>

            </div>
          </section>

          <!-- ═══════════════ 六、作者叮嚀：罪刑法定原則與公法概念對照 ═══════════════ -->
          <section id="sec-p0ch1-sec2-author-memo" class="space-y-6 pt-2">
            <div class="flex items-center gap-3">
              <span class="w-2 h-6 rounded-full bg-amber-600"></span>
              <h3 class="text-lg sm:text-xl font-black text-slate-900 dark:text-white tracking-tight">
                六、作者叮嚀：罪刑法定原則與公法（憲法）概念深度對照（教材第 2-7 頁）
              </h3>
            </div>

            <div class="p-6 rounded-3xl border-2 border-amber-300 dark:border-amber-700/80 border-l-[8px] border-l-amber-500 bg-amber-50/50 dark:bg-[#1a1510] shadow-sm space-y-5">
              
              <div class="flex items-center justify-between border-b border-amber-200 dark:border-amber-800/60 pb-3 flex-wrap gap-2">
                <div class="flex items-center gap-2.5">
                  <span class="text-2xl animate-pulse">📢</span>
                  <h4 class="font-black text-sm sm:text-base text-amber-950 dark:text-amber-100">
                    【作者叮嚀】易律師：用公法（特別是憲法）角度思考與記憶罪刑法定原則
                  </h4>
                </div>
                <span class="text-xs font-mono px-3 py-1 rounded-lg bg-amber-600 text-white font-black shadow-xs">
                  教材第 2-7 頁 原書對照
                </span>
              </div>

              <!-- 原書逐字忠實呈現 -->
              <div class="p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-900 border-2 border-amber-200 dark:border-amber-800/60 shadow-xs space-y-3 text-xs sm:text-[13.5px] leading-relaxed font-serif text-slate-800 dark:text-slate-100">
                <p>
                  其實我們也可以用公法（特別是憲法）的角度來思考與記憶罪刑法定原則。憲法上法治國原則有幾個下位概念：<strong>依法行政原則（法律優位＋法律保留）</strong>、<strong>明確性原則（法律明確＋授權明確）</strong>以及<strong>法安定性原則（法不溯及既往＋信賴保護）</strong>，剛好可以對應到罪刑法定原則的四個子概念中。
                </p>
                <p>
                  例如依法行政原則中的法律保留原則，在近代受到「<strong>重要性理論</strong>」的指引，並依「<strong>功能最適理論</strong>」的精神，逐步發展出「<strong>層級化法律保留體系</strong>」，使法律保留原則形成由立法與行政兩極排開之光譜。刑法因涉及生命權與身體自由的基本權干預，至少屬於「<strong>絕對法律保留</strong>」的範圍，必須由立法者以制定法律的方式來發動。故而，<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">不能以習慣法（社會造法）或類推適用（法官造法）的方法作為處罰之依據</span>。
                </p>
                <p>
                  同理，明確性原則在刑法中要求對成立要件與法律效果兩部分皆必須明確，因此形成刑法中的「<strong>罪（成立要件）刑（法律效果）明確性原則</strong>」。而法不溯及既往原則除了維護國家的法安定性外，更兼顧人民信賴之保護，<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">故以人民行為時可得預見為限</span>。
                </p>
              </div>

              <!-- 四大對應精華卡片 -->
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-xs">
                
                <div class="p-3.5 rounded-xl bg-white dark:bg-slate-900 border-2 border-blue-200 dark:border-blue-800 space-y-1">
                  <span class="font-black text-blue-800 dark:text-blue-300 block text-[13px]">① 習慣法禁止</span>
                  <span class="text-slate-700 dark:text-slate-300 font-serif">➔ 映射公法：<strong>絕對法律保留原則</strong>（生命、自由干預由形式法律獨占）</span>
                </div>

                <div class="p-3.5 rounded-xl bg-white dark:bg-slate-900 border-2 border-indigo-200 dark:border-indigo-800 space-y-1">
                  <span class="font-black text-indigo-800 dark:text-indigo-300 block text-[13px]">② 類推適用禁止</span>
                  <span class="text-slate-700 dark:text-slate-300 font-serif">➔ 映射公法：<strong>法官依法律獨立審判</strong>（嚴禁法官越俎代庖造法）</span>
                </div>

                <div class="p-3.5 rounded-xl bg-white dark:bg-slate-900 border-2 border-amber-200 dark:border-amber-800 space-y-1">
                  <span class="font-black text-amber-800 dark:text-amber-300 block text-[13px]">③ 罪刑明確性</span>
                  <span class="text-slate-700 dark:text-slate-300 font-serif">➔ 映射公法：<strong>法律明確性原則</strong>（要件明確＋法律效果明確）</span>
                </div>

                <div class="p-3.5 rounded-xl bg-white dark:bg-slate-900 border-2 border-rose-200 dark:border-rose-800 space-y-1">
                  <span class="font-black text-rose-800 dark:text-rose-300 block text-[13px]">④ 法不溯及既往</span>
                  <span class="text-slate-700 dark:text-slate-300 font-serif">➔ 映射公法：<strong>法安定性與信賴保護原則</strong>（禁止搭時光機事後算帳）</span>
                </div>

              </div>

            </div>
          </section>

          <!-- ═══════════════ 第二節 底部操作與單元分頁條 ═══════════════ -->
          <div class="w-full max-w-4xl mx-auto flex items-center justify-between p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-blue-50/80 via-white to-indigo-50/80 dark:from-[#121827] dark:to-[#162035] border border-blue-200/80 dark:border-blue-900/40 shadow-xs flex-wrap gap-3">
            <div class="flex items-center gap-2 flex-wrap">
              <button onclick="switchView('part0-ch1-sec1')" class="px-4 py-2 rounded-xl bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 font-bold text-xs flex items-center gap-1.5 border border-slate-200 dark:border-slate-700 cursor-pointer">
                <span>← 上一單元：第一節 法益保護原則 (2-1~2-4)</span>
              </button>
              <button onclick="copyPart0Ch1Sec2Notes()" class="px-3.5 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 font-bold text-xs flex items-center gap-1.5 cursor-pointer">
                <span>📋 複製第二節精華筆記</span>
              </button>
            </div>
            <div class="flex items-center gap-2 flex-wrap">
              <button onclick="switchView('cover')" class="px-4 py-2 rounded-xl bg-amber-50 dark:bg-amber-950/40 text-amber-800 dark:text-amber-200 hover:bg-amber-100 dark:hover:bg-amber-900/50 font-bold text-xs flex items-center gap-1.5 border border-amber-300 dark:border-amber-700/60 cursor-pointer">
                <span>🏠 返回首頁</span>
              </button>
              <button onclick="switchView('part0-ch1-sec3')" class="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs flex items-center gap-1.5 transition-all shadow-xs cursor-pointer">
                <span>前往 第三節 罪責原則 (2-7~2-8) →</span>
              </button>
            </div>
          </div>

        </div>
`;
