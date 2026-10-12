/**
 * view-part0-ch2-sec2.js
 * 第零篇 第二章 第二節 刑法的解釋方法 (教材第 2-15 ～ 2-18 頁)
 * 嚴格遵循 AGENTS.md 最高行為憲法規範：
 * 1. 1:1 原書復刻與逐字精確核對：
 *    - 法律解釋二分法（司法解釋 vs. 立法解釋 § 10）
 *    - 四大司法解釋方法（文義、歷史、目的、體系）與罪刑法定vs.法益保護來回拉扯架構
 *    - 案例 2-7（車禍現場抽煙冒充目擊者 肇事逃逸案 § 185-4）
 *    - 案例 2-8（男男口交 通姦罪要件解釋 § 239 與釋字 791 號追蹤）
 *    - 特殊的憲法解釋方法（合憲性解釋 vs. 憲法取向解釋、鄧元貞重婚案與釋字第 242 號）
 *    - 立法解釋 § 10 概說與公務員概念三大類型（身分公務員、授權公務員、委託公務員）
 * 2. 案例研習一律採用「五位一體法學劇院」標準（案例 2-7、案例 2-8 全數配備）：
 *    - ⚔️ 原被告/檢控辯護法庭正面言詞辯論（辯護人金毛大律師 vs 公訴檢察官赤狐女律師）
 *    - 🐾 柴柴法學教授 • 白話生活大解碼（分段留白、純紅底線）
 *    - ⚖️ 金毛大律師 • 法庭攻防點評
 *    - 🛡️ 德牧法規巡查官 • 法規雷達查核
 *    - 👨‍⚖️ 邊牧首席審判長 • 終審裁決一槌定音（#法槌一敲誰與爭鋒、🔨 實體法定讞、💡 國考答題定錨、📅 2026 最新法條動態備註）
 * 3. 排版嚴格垂直單欄堆疊（space-y-3，嚴禁橫向並排），零刺眼全紅字（統一純紅底線語法）
 * 4. 犬系四大天王導師標準配置與特寫比例，Zero-CORS 本機秒開相容
 */
window.APP_VIEWS = window.APP_VIEWS || {};
window.APP_VIEWS['viewPart0Ch2Sec2'] = window.APP_VIEWS['part0Ch2Sec2'] = window.APP_VIEWS['part0-ch2-sec2'] = `
        <!-- VIEW: 第零篇 第二章・第二節 刑法的解釋方法 (教材第 2-15 ～ 2-18 頁) -->
        <div id="viewPart0Ch2Sec2" class="fade-enter hidden space-y-8">
          
          <!-- 麵包屑導航 -->
          <div class="flex items-center justify-between gap-4 border-b border-slate-200/80 dark:border-white/10 pb-3">
            <nav class="flex items-center gap-2 text-xs font-medium text-slate-500 dark:text-slate-400 flex-wrap">
              <button onclick="switchView('part0')" class="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">第零篇</button>
              <span>/</span>
              <button onclick="switchView('part0-ch2')" class="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">第二章 刑法的操作原理</button>
              <span>/</span>
              <span class="text-indigo-600 dark:text-indigo-400 font-bold">第二節 刑法的解釋方法</span>
            </nav>
            <div class="flex items-center gap-2 shrink-0">
              <button onclick="copyPart0Ch2Sec2Notes()" class="text-xs text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 flex items-center gap-1 transition-colors font-bold cursor-pointer">
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
              <span>第零篇・第二章・第二節</span>
              <span class="px-2 py-0.5 rounded-md bg-indigo-50 dark:bg-indigo-950/40 text-[11px] border border-indigo-200 dark:border-indigo-900/50">教材第 2-15 ～ 2-18 頁 原文體系全收錄</span>
            </div>
            <h2 class="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
              第二節 刑法的解釋方法
            </h2>
            <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-serif">
              深入探討法律解釋的兩大路徑：針對既存條文之「司法解釋」與預先以條文定義之「立法解釋（§ 10）」。剖析四大司法解釋方法（文義、歷史、目的、體系）在罪刑法定原則與法益保護原則間的來回拉扯；透過案例 2-7（車禍現場抽煙自稱目擊者肇逃爭議）與案例 2-8（男男口交與通姦罪要件解釋）展現實務攻防；闡釋特殊憲法解釋方法（合憲性解釋 vs. 憲法取向解釋、鄧元貞重婚案與釋字 242 號）；並精確界定刑法 § 10 Ⅱ 一般化公務員概念之三大類型（身分公務員、授權公務員、委託公務員）。
            </p>
          </div>

          <!-- ═══════════════ 一、法律解釋之二元途徑 ═══════════════ -->
          <section id="sec-p0ch2-sec2-classification" class="space-y-6 pt-2">
            <div class="flex items-center gap-3">
              <span class="w-2 h-6 rounded-full bg-indigo-600"></span>
              <h3 class="text-lg sm:text-xl font-black text-slate-900 dark:text-white tracking-tight">
                一、法律解釋之二元途徑：司法解釋 vs. 立法解釋（教材第 2-15 頁）
              </h3>
            </div>

            <div class="p-6 rounded-3xl border border-slate-200 dark:border-white/[0.08] bg-white dark:bg-[#101623] shadow-sm space-y-6">
              
              <!-- 課本原文展示盒 (1:1 復刻) -->
              <div class="rounded-2xl p-5 bg-slate-50/80 dark:bg-slate-900/80 border-2 border-slate-200 dark:border-slate-800 space-y-3">
                <div class="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-2">
                  <span class="font-bold text-xs text-slate-500 dark:text-slate-400 font-mono">📖 課本原文 1:1 忠實重現 (P. 2-15)</span>
                  <span class="text-[11px] px-2 py-0.5 rounded bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 font-bold font-mono">法律解釋的二元架構</span>
                </div>
                <blockquote class="text-xs sm:text-sm text-slate-800 dark:text-slate-200 leading-relaxed font-serif italic border-l-4 border-indigo-500 pl-3.5">
                  「法律的解釋方法有二：其一為針對既存條文適用上的司法解釋，另一為預先以條文方式加以定義的立法解釋。就刑法而言，前者涉及一般法律的法學解釋方法，後者則在 § 10 加以規範。」
                </blockquote>
              </div>

              <!-- 兩大解釋途徑對比網格 (8px 色軸) -->
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                
                <!-- 1. 司法解釋 -->
                <div class="p-5 rounded-2xl bg-slate-50/80 dark:bg-slate-900/60 border-2 border-blue-200 dark:border-blue-900/60 border-l-[8px] border-l-blue-600 space-y-2 shadow-xs">
                  <div class="flex items-center justify-between">
                    <span class="text-xs font-mono font-bold text-blue-600 dark:text-blue-400">PATHWAY 1</span>
                    <span class="text-base">🏛️</span>
                  </div>
                  <h4 class="text-sm font-bold text-slate-900 dark:text-white">司法解釋（Judicial Interpretation）</h4>
                  <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-serif">
                    針對<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">既存條文適用上</span>的解釋。涉及一般法律的法學方法論，包含文義解釋、歷史解釋、目的解釋與體系解釋等四種基本方法。
                  </p>
                  <div class="pt-2 border-t border-slate-200 dark:border-slate-800 text-[11px] text-slate-500 dark:text-slate-400">
                    • 核心精神：受罪刑法定原則與法益保護原則之共同指引與約束。
                  </div>
                </div>

                <!-- 2. 立法解釋 -->
                <div class="p-5 rounded-2xl bg-slate-50/80 dark:bg-slate-900/60 border-2 border-purple-200 dark:border-purple-900/60 border-l-[8px] border-l-purple-600 space-y-2 shadow-xs">
                  <div class="flex items-center justify-between">
                    <span class="text-xs font-mono font-bold text-purple-600 dark:text-purple-400">PATHWAY 2</span>
                    <span class="text-base">📜</span>
                  </div>
                  <h4 class="text-sm font-bold text-slate-900 dark:text-white">立法解釋（Legislative Interpretation）</h4>
                  <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-serif">
                    預先以<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">條文方式加以定義</span>的法定名詞解釋。刑法於第 10 條預先設有統一之定義規範，防止司法適用之歧異。
                  </p>
                  <div class="pt-2 border-t border-slate-200 dark:border-slate-800 text-[11px] text-slate-500 dark:text-slate-400">
                    • 核心條文：刑法 § 10（計算標準、公務員、公文書、重傷、性交、電磁紀錄）。
                  </div>
                </div>

              </div>

            </div>
          </section>

          <!-- ═══════════════ 二、四大司法解釋方法與拉扯關係 ═══════════════ -->
          <section id="sec-p0ch2-sec2-four-methods" class="space-y-6 pt-2">
            <div class="flex items-center gap-3">
              <span class="w-2 h-6 rounded-full bg-indigo-600"></span>
              <h3 class="text-lg sm:text-xl font-black text-slate-900 dark:text-white tracking-tight">
                二、四大司法解釋方法與「拉扯」關係（教材第 2-15 頁 原書圖解）
              </h3>
            </div>

            <div class="p-6 rounded-3xl border border-slate-200 dark:border-white/[0.08] bg-white dark:bg-[#101623] shadow-sm space-y-6">
              
              <!-- 課本原文展示盒 -->
              <div class="rounded-2xl p-5 bg-slate-50/80 dark:bg-slate-900/80 border-2 border-slate-200 dark:border-slate-800 space-y-3">
                <div class="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-2">
                  <span class="font-bold text-xs text-slate-500 dark:text-slate-400 font-mono">📖 課本原文 1:1 忠實重現 (P. 2-15)</span>
                  <span class="text-[11px] px-2 py-0.5 rounded bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 font-bold font-mono">四大解釋方法</span>
                </div>
                <blockquote class="text-xs sm:text-sm text-slate-800 dark:text-slate-200 leading-relaxed font-serif italic border-l-4 border-blue-500 pl-3.5 space-y-2">
                  <p>
                    「一般的法律解釋方法，比如說『文義解釋（一切解釋的起點並構成解釋的最外延）』、『歷史解釋（探求立法者的意思）』、『目的解釋（確認規範的當代目的）』、『體系解釋（作為選定解釋的佐證或條文字意義的糾核）』等，在刑法中皆完全可以適用。」
                  </p>
                  <p>
                    「但因為『罪刑法定原則』之故，刑法更加重視『文義解釋』，且由於法益保護為刑法的終極目的，故相對地也重視『目的解釋』，所以刑法的解釋常在『文義解釋』與『目的解釋』間來回地拉扯。」
                  </p>
                </blockquote>
              </div>

              <!-- 四大解釋方法卡片網格 (8px 色軸) -->
              <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-1">
                <!-- 1. 文義解釋 -->
                <div class="p-4.5 rounded-2xl bg-slate-50/80 dark:bg-slate-900/60 border-2 border-blue-200 dark:border-blue-900/60 border-l-[8px] border-l-blue-600 space-y-2 shadow-xs">
                  <div class="flex items-center justify-between">
                    <span class="text-xs font-mono font-bold text-blue-600 dark:text-blue-400">起點・最外延</span>
                    <span class="text-sm">🔤</span>
                  </div>
                  <h4 class="text-sm font-bold text-slate-900 dark:text-white">文義解釋</h4>
                  <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-serif">
                    <span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">一切解釋的起點並構成解釋的最外延</span>。受「罪刑法定原則」拘束，字面日常可能文義為處罰絕對天花板，嚴禁不利類推。
                  </p>
                </div>

                <!-- 2. 歷史解釋 -->
                <div class="p-4.5 rounded-2xl bg-slate-50/80 dark:bg-slate-900/60 border-2 border-indigo-200 dark:border-indigo-900/60 border-l-[8px] border-l-indigo-600 space-y-2 shadow-xs">
                  <div class="flex items-center justify-between">
                    <span class="text-xs font-mono font-bold text-indigo-600 dark:text-indigo-400">立法原意</span>
                    <span class="text-sm">📜</span>
                  </div>
                  <h4 class="text-sm font-bold text-slate-900 dark:text-white">歷史解釋</h4>
                  <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-serif">
                    探求<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">立法者的意思</span>。透過立法院草案總說明、會議紀錄與法條修正歷程，確認當時立意，與文義解釋最為相近。
                  </p>
                </div>

                <!-- 3. 目的解釋 -->
                <div class="p-4.5 rounded-2xl bg-slate-50/80 dark:bg-slate-900/60 border-2 border-rose-200 dark:border-rose-900/60 border-l-[8px] border-l-rose-500 space-y-2 shadow-xs">
                  <div class="flex items-center justify-between">
                    <span class="text-xs font-mono font-bold text-rose-600 dark:text-rose-400">當代目的</span>
                    <span class="text-sm">🎯</span>
                  </div>
                  <h4 class="text-sm font-bold text-slate-900 dark:text-white">目的解釋</h4>
                  <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-serif">
                    確認<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">規範的當代目的</span>。以「法益保護原則」為終極歸宿，探求該法條在當前社會中欲保護之核心利益，時常與文義解釋相左拉扯。
                  </p>
                </div>

                <!-- 4. 體系解釋 -->
                <div class="p-4.5 rounded-2xl bg-slate-50/80 dark:bg-slate-900/60 border-2 border-emerald-200 dark:border-emerald-900/60 border-l-[8px] border-l-emerald-600 space-y-2 shadow-xs">
                  <div class="flex items-center justify-between">
                    <span class="text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400">前後協調</span>
                    <span class="text-sm">🧩</span>
                  </div>
                  <h4 class="text-sm font-bold text-slate-900 dark:text-white">體系解釋</h4>
                  <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-serif">
                    作為選定解釋的佐證或<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">條文字意義的糾核</span>。在全法典上下文脈絡中尋求邏輯一致，輔助歷史與目的，幫助文義解釋。
                  </p>
                </div>
              </div>

              <!-- 原書【司法解釋的相互關係】架構圖解 (1:1 復刻教材第 2-15 頁流程圖) -->
              <div class="p-5 rounded-2xl bg-slate-100/90 dark:bg-slate-900/90 border-2 border-indigo-200 dark:border-indigo-800 space-y-4">
                <div class="flex items-center justify-between border-b border-indigo-200 dark:border-indigo-800 pb-2">
                  <div class="flex items-center gap-2">
                    <span class="text-base">📐</span>
                    <span class="font-bold text-xs text-slate-800 dark:text-slate-200">【司法解釋的相互關係】原書架構圖解（教材第 2-15 頁）</span>
                  </div>
                  <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-indigo-200 dark:bg-indigo-900 text-indigo-900 dark:text-indigo-200 font-bold">P. 2-15 原圖復刻</span>
                </div>

                <!-- 向量關係圖解展示盒 -->
                <div class="p-6 rounded-xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 space-y-6">
                  
                  <!-- 頂層原則與上層核心 -->
                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
                    <!-- 左翼：罪刑法定原則引導 -->
                    <div class="p-4 rounded-xl bg-blue-50/80 dark:bg-blue-950/40 border-2 border-blue-300 dark:border-blue-700 space-y-3">
                      <div class="text-center pb-2 border-b border-blue-200 dark:border-blue-800">
                        <span class="px-3 py-1 rounded-full bg-blue-600 text-white font-bold text-xs shadow-xs">罪刑法定原則</span>
                      </div>
                      <div class="flex items-center justify-around gap-2 pt-1">
                        <div class="p-2.5 rounded-lg bg-white dark:bg-slate-900 border border-blue-200 dark:border-blue-800 text-center flex-1 shadow-2xs">
                          <span class="text-[10px] text-slate-400 block font-mono">起原</span>
                          <span class="font-black text-xs text-blue-700 dark:text-blue-300">文義解釋</span>
                        </div>
                        <span class="text-xs font-bold text-slate-400">⇄ 相近</span>
                        <div class="p-2.5 rounded-lg bg-white dark:bg-slate-900 border border-blue-200 dark:border-blue-800 text-center flex-1 shadow-2xs">
                          <span class="text-[10px] text-slate-400 block font-mono">輔佐</span>
                          <span class="font-black text-xs text-indigo-700 dark:text-indigo-300">歷史解釋</span>
                        </div>
                      </div>
                    </div>

                    <!-- 右翼：法益保護原則引導 -->
                    <div class="p-4 rounded-xl bg-rose-50/80 dark:bg-rose-950/40 border-2 border-rose-300 dark:border-rose-700 space-y-3">
                      <div class="text-center pb-2 border-b border-rose-200 dark:border-rose-800">
                        <span class="px-3 py-1 rounded-full bg-rose-600 text-white font-bold text-xs shadow-xs">法益保護原則</span>
                      </div>
                      <div class="flex items-center justify-around gap-2 pt-1">
                        <span class="text-xs font-bold text-rose-500">⇋ 相左拉扯</span>
                        <div class="p-2.5 rounded-lg bg-white dark:bg-slate-900 border border-rose-200 dark:border-rose-800 text-center flex-1 shadow-2xs">
                          <span class="text-[10px] text-slate-400 block font-mono">終極目的</span>
                          <span class="font-black text-xs text-rose-700 dark:text-rose-300">目的解釋</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- 底層：體系解釋的全面輔助與糾核 -->
                  <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border-2 border-dashed border-slate-300 dark:border-slate-700 text-center space-y-2">
                    <div class="flex items-center justify-center gap-2">
                      <span class="px-3 py-0.5 rounded-full bg-emerald-600 text-white font-bold text-xs">體系解釋</span>
                      <span class="text-xs text-slate-500 font-mono">Systematic Interpretation</span>
                    </div>
                    <p class="text-xs text-slate-600 dark:text-slate-400 font-serif">
                      ↑ 向上提供三向支持：<strong>【幫助】文義解釋</strong> ＋ <strong>【輔助】歷史解釋</strong> ＋ <strong>【輔助】目的解釋</strong>
                    </p>
                    <div class="text-[11px] text-slate-500 dark:text-slate-400">
                      當「文義解釋」與「目的解釋」發生激烈衝突時，體系解釋扮演選定解釋之重要糾核佐證！
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </section>

          <!-- ═══════════════ 三、案例 2-7：車禍現場抽煙自稱目擊者案 ═══════════════ -->
          <section id="sec-p0ch2-sec2-case-2-7" class="space-y-6 pt-2">
            <div class="flex items-center gap-3">
              <span class="w-2 h-6 rounded-full bg-indigo-600"></span>
              <h3 class="text-lg sm:text-xl font-black text-slate-900 dark:text-white tracking-tight">
                三、案例 2-7：車禍現場抽煙冒充目擊者案——文義與目的之拉扯（教材第 2-15 頁）
              </h3>
            </div>

            <div class="p-6 rounded-3xl border border-slate-200 dark:border-white/[0.08] bg-white dark:bg-[#101623] shadow-sm space-y-6">
              
              <!-- 案例 2-7 容器 (五位一體法學劇院) -->
              <div id="case-card-2-7" class="p-5 sm:p-6 rounded-2xl border-2 border-indigo-200 dark:border-indigo-900/60 bg-gradient-to-br from-slate-50 to-indigo-50/30 dark:from-slate-900 dark:to-indigo-950/20 shadow-xs space-y-4">
                
                <div class="flex items-center justify-between flex-wrap gap-2">
                  <div class="flex items-center gap-2">
                    <span class="px-3 py-1 rounded-full bg-indigo-600 text-white font-mono font-black text-xs shadow-xs">案例 2-7</span>
                    <h4 class="font-black text-base text-slate-900 dark:text-white">
                      車禍現場抽煙冒充目擊者案——「逃逸」之文義與目的拉扯（教材第 2-15 頁）
                    </h4>
                  </div>
                  <span class="text-xs font-mono text-indigo-600 dark:text-indigo-400 font-bold">§ 185-4 肇事逃逸罪</span>
                </div>

                <!-- 案情事實 -->
                <div class="p-4 rounded-2xl bg-indigo-100/90 dark:bg-indigo-950/85 border-2 border-indigo-300 dark:border-indigo-700/80 shadow-xs flex items-start gap-3.5">
                  <div class="w-10 h-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center shrink-0 text-lg shadow-sm">
                    🚗
                  </div>
                  <div class="flex-1 space-y-1">
                    <div class="flex items-center gap-2">
                      <span class="px-2 py-0.5 rounded-md bg-indigo-600 text-white font-mono text-[10.5px] font-black tracking-wide shadow-xs">案件事實</span>
                      <span class="text-[11px] font-mono font-bold text-indigo-700 dark:text-indigo-300/90">#留滯現場冒充目擊者</span>
                    </div>
                    <div class="text-xs sm:text-sm font-bold text-indigo-950 dark:text-indigo-100 leading-relaxed font-serif">
                      甲駕駛汽車不當撞傷路人乙，乙倒在路中央，地上碎片狼藉，甲將汽車藏匿於一旁暗巷後，便蹲在肇事現場旁的人行道上抽煙。待一小時後警察才經民眾通報而來到現場，並對一旁的甲詢問犯人去處，甲答稱自己是車禍目擊者，目睹肇事者已駕車往東方加速逃離。試問甲是否構成肇事逃逸罪？
                    </div>
                  </div>
                </div>

                <!-- 問題導引 (教材原文) -->
                <div class="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs text-slate-700 dark:text-slate-300 font-serif leading-relaxed">
                  <strong class="text-indigo-600 dark:text-indigo-400">【教材問題導引】</strong>
                  「逃逸」按文義解釋應是積極的逃跑動作，甲既未逃跑，無法吻合文義解釋。惟探求本罪之目的，無論對保護法益採取何種見解，甲均放任法益侵害發生，其行為應屬於本罪所要掌握的態樣。此時便發生文義解釋與目的解釋的來回拉扯。
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
                            <span class="px-2 py-0.5 rounded-full bg-amber-100 dark:bg-amber-950 text-amber-900 dark:text-amber-300 font-extrabold text-[10px]">文義極限防線</span>
                          </div>
                          <div class="text-[10.5px] text-amber-700 dark:text-amber-400 font-bold">主張：被告未曾逃離現場，不構成「逃逸」</div>
                        </div>
                      </div>
                      <div class="space-y-2 text-xs sm:text-[13px] text-slate-800 dark:text-slate-100 leading-relaxed font-serif">
                        <p class="font-bold text-amber-950 dark:text-amber-200">
                          「審判長！刑法第 185-4 條明定為『逃逸』！中文字典上的逃逸就是逃跑、離開現場！」
                        </p>
                        <p>
                          被告自始至終就蹲在現場抽煙，完全沒有任何物理空間上的位移或離開動作！若將『蹲在現場抽煙說謊』硬套成『逃逸』，根本是跨越文義射程的不利類推適用，嚴重踐踏罪刑法定原則！
                        </p>
                      </div>
                    </div>
                    <div class="p-2.5 rounded-xl bg-amber-50 dark:bg-amber-950/40 text-xs sm:text-[13px] font-bold text-amber-950 dark:text-amber-200 leading-snug border border-amber-200 dark:border-amber-800/60">
                      🛡️ 辯方主張 ➔ <strong>物理上根本沒跑，文義射程不能把「蹲在現場」解釋成逃逸！</strong>
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
                            <span class="px-2 py-0.5 rounded-full bg-rose-100 dark:bg-rose-950 text-rose-900 dark:text-rose-300 font-extrabold text-[10px]">目的實質防線</span>
                          </div>
                          <div class="text-[10.5px] text-rose-700 dark:text-rose-400 font-bold">主張：放任傷患不顧＋隱匿身分＝實質逃逸</div>
                        </div>
                      </div>
                      <div class="space-y-2 text-xs sm:text-[13px] text-slate-800 dark:text-slate-100 leading-relaxed font-serif">
                        <p class="font-bold text-rose-950 dark:text-rose-200">
                          「被告把車藏匿暗巷，還向警察誆稱肇事者往東逃，實質上就是在逃避法律責任！」
                        </p>
                        <p>
                          肇事逃逸罪的核心目的在於保護傷患生命安全與確認事故責任。被告雖未離開空間，但透過隱瞞身分使國家司法與救護陷入癱瘓，實質效果與逃跑完全相同，目的解釋理應涵蓋！
                        </p>
                      </div>
                    </div>
                    <div class="p-2.5 rounded-xl bg-rose-50 dark:bg-rose-950/40 text-xs sm:text-[13px] font-bold text-rose-950 dark:text-rose-200 leading-snug border border-rose-200 dark:border-rose-800/60">
                      ⚔️ 控方主張 ➔ <strong>藏車＋騙警察＋不救人＝實質上脫離責任，符合規範目的！</strong>
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
                      <span class="text-[11px] px-2.5 py-0.5 rounded-full bg-amber-200/80 dark:bg-amber-900/60 text-amber-900 dark:text-amber-100 font-extrabold font-mono">文義與目的之交鋒</span>
                    </div>
                    <div class="space-y-2 text-xs sm:text-sm text-slate-800 dark:text-slate-100 leading-relaxed font-serif">
                      <p>
                        「本案是刑法解釋方法最精彩的拉扯示範！
                      </p>
                      <p>
                        從『文義解釋』來看，<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">逃逸二字必須是積極逃離現場的物理動作</span>。甲人明明站在原地，哪怕他滿口謊言，也無法塞進『逃跑』這個詞的字面射程。
                      </p>
                      <p>
                        但從『目的解釋』來看，<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">刑法處罰肇逃是為了促使肇事者救助被害人並釐清責任</span>。甲把車藏起來、騙警察犯人向東跑，實質上完全破壞了救護與責任確認，徹底吻合立法者想抓的惡行！
                      </p>
                      <p>
                        這就是法官天天面對的拉扯：文義說『不能抓』，目的說『非抓不可』汪！」
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
                        <span class="text-[10px] px-2 py-0.5 rounded bg-amber-200 dark:bg-amber-900/60 text-amber-900 dark:text-amber-200 font-bold font-mono">文義天花板防禦</span>
                      </div>
                      <div class="space-y-2 text-xs sm:text-sm text-slate-800 dark:text-slate-100 leading-relaxed font-serif">
                        <p>
                          「辯護實戰中，<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">文義解釋永遠是辯護人的最強防盾</span>！
                        </p>
                        <p>
                          不管公訴檢察官如何高唱『目的解釋』與『法益保護』，刑法第 1 條罪刑法定原則明確規定：未見於法律文字射程者不罰！只要行為無法涵蓋於字面可能意義，任何基於目的解釋之擴張，均屬不利被告之實質類推，法官必須嚴格判決無罪！」
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
                          【最高法院 92 年台上字第 4543 號判決要旨】
                        </p>
                        <p class="leading-relaxed">
                          <span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">
                            「肇事逃逸罪所謂『逃逸』，係指行為人主觀上有逃避責任之意圖，客觀上有離開現場之行為而言。」
                          </span>
                        </p>
                        <p>
                          若行為人留在現場但隱匿肇事身分，實務多數見解基於罪刑法定文義原則，認為雖屬不道德且成立過失傷害罪，但因欠缺離開現場之客觀行為，難遽論以肇事逃逸罪！
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
                          🔨 【實體法定讞】：文義解釋為刑法解釋不可跨越之絕對最外延。甲客觀上始終留滯現場，未具備「逃逸」文字所必須之離去動作，基於罪刑法定原則，甲不成立刑法第 185-4 條肇事逃逸罪！惟仍成立第 284 條過失傷害罪。
                        </p>
                        <p>
                          💡 <strong>國考答題定錨</strong>：考生作答肇事逃逸考題，若遇「留滯現場但冒充目擊者」或「找他人頂替」，必須採雙軌並陳：先論述目的解釋欲擴張掌握之理由，次以罪刑法定原則「文義為最外延極限」收尾採否定說，展現法學方法論高度！
                        </p>
                        <div class="p-2.5 rounded-xl bg-indigo-900/60 border border-indigo-400/40 text-[11.5px] text-amber-200 font-mono">
                          📅 <strong>2026 最新法條動態備註</strong>：大法官釋字第 777 號解釋宣告舊 § 185-4「肇事」涵蓋無過失違憲、且「情節輕微一律處 1 年以上有期徒刑」顯失苛酷違反比例原則；立法院遂於民國 110 年 5 月 28 日全面修正 § 185-4，改依「致人傷害（處 6 月以上 5 年以下）」與「致人重傷或死亡（處 1 年以上 7 年以下）」分級處罰，並增訂無過失減輕或免除其刑之規定。
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </section>

          <!-- ═══════════════ 四、案例 2-8：男男合意口交與通姦罪要件解釋 ═══════════════ -->
          <section id="sec-p0ch2-sec2-case-2-8" class="space-y-6 pt-2">
            <div class="flex items-center gap-3">
              <span class="w-2 h-6 rounded-full bg-indigo-600"></span>
              <h3 class="text-lg sm:text-xl font-black text-slate-900 dark:text-white tracking-tight">
                四、案例 2-8：男男合意口交案——通姦罪要件之多層次解釋（教材第 2-16 ～ 2-17 頁）
              </h3>
            </div>

            <div class="p-6 rounded-3xl border border-slate-200 dark:border-white/[0.08] bg-white dark:bg-[#101623] shadow-sm space-y-6">
              
              <!-- 案例 2-8 容器 (五位一體法學劇院) -->
              <div id="case-card-2-8" class="p-5 sm:p-6 rounded-2xl border-2 border-indigo-200 dark:border-indigo-900/60 bg-gradient-to-br from-slate-50 to-indigo-50/30 dark:from-slate-900 dark:to-indigo-950/20 shadow-xs space-y-4">
                
                <div class="flex items-center justify-between flex-wrap gap-2">
                  <div class="flex items-center gap-2">
                    <span class="px-3 py-1 rounded-full bg-indigo-600 text-white font-mono font-black text-xs shadow-xs">案例 2-8</span>
                    <h4 class="font-black text-base text-slate-900 dark:text-white">
                      男男合意口交案——「通姦＝性交？」與「是否限異性？」（教材第 2-16 頁）
                    </h4>
                  </div>
                  <span class="text-xs font-mono text-indigo-600 dark:text-indigo-400 font-bold">§ 239 通姦罪（釋字 791 號除罪追蹤）</span>
                </div>

                <!-- 案情事實 -->
                <div class="p-4 rounded-2xl bg-indigo-100/90 dark:bg-indigo-950/85 border-2 border-indigo-300 dark:border-indigo-700/80 shadow-xs flex items-start gap-3.5">
                  <div class="w-10 h-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center shrink-0 text-lg shadow-sm">
                    ⚖️
                  </div>
                  <div class="flex-1 space-y-1">
                    <div class="flex items-center gap-2">
                      <span class="px-2 py-0.5 rounded-md bg-indigo-600 text-white font-mono text-[10.5px] font-black tracking-wide shadow-xs">案件事實</span>
                      <span class="text-[11px] font-mono font-bold text-indigo-700 dark:text-indigo-300/90">#同性合意口交</span>
                    </div>
                    <div class="text-xs sm:text-sm font-bold text-indigo-950 dark:text-indigo-100 leading-relaxed font-serif">
                      甲男與有配偶之乙男在合意下為口交行為，試問甲、乙是否構成通姦（與相姦）罪？
                    </div>
                  </div>
                </div>

                <!-- 雙重爭點深入拆解 (教材原文 1:1 復刻) -->
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <!-- 爭點 1 -->
                  <div class="p-4.5 rounded-2xl bg-white dark:bg-slate-900 border-2 border-indigo-200 dark:border-indigo-800 space-y-2.5">
                    <span class="text-xs font-bold text-indigo-600 dark:text-indigo-400 font-mono">爭點 (一)</span>
                    <h5 class="text-sm font-bold text-slate-900 dark:text-white">
                      「通姦＝性交」？【文義＋歷史 vs. 目的＋體系】
                    </h5>
                    <div class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-serif space-y-1.5">
                      <p>
                        • <strong>文義＋歷史（實務見解）</strong>：按「姦」字專指性器官接合，民國 88 年修法將妨害性自主之「姦淫」改為「性交」，惟獨保留通姦罪之用語。依歷史解釋，立法者係有意省略，故通姦不含口交（高院 91 法律座談會）。
                      </p>
                      <p>
                        • <strong>目的＋體系</strong>：妨害家庭罪章並無特異其趣之處，通姦罪目的在維護家庭和諧，性器接合或口交均會破壞和諧，應採廣義性交解釋。
                      </p>
                    </div>
                  </div>

                  <!-- 爭點 2 -->
                  <div class="p-4.5 rounded-2xl bg-white dark:bg-slate-900 border-2 border-indigo-200 dark:border-indigo-800 space-y-2.5">
                    <span class="text-xs font-bold text-indigo-600 dark:text-indigo-400 font-mono">爭點 (二)</span>
                    <h5 class="text-sm font-bold text-slate-900 dark:text-white">
                      是否限於異性之間？【文義＋體系 vs. 目的】
                    </h5>
                    <div class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-serif space-y-1.5">
                      <p>
                        • <strong>文義＋體系</strong>：條文僅規定「與人通姦」，未要求性別相異，體系上 § 231 Ⅱ 之「人」亦兼及男女兩性。
                      </p>
                      <p>
                        • <strong>目的（舊實務見解）</strong>：本罪保護婚姻圓滿，因當時我國尚未允准同性婚姻，婚姻僅存於異性間，故通姦罪自然僅限於異性之間（法務部 87 法檢二字第 02560 號）。
                      </p>
                    </div>
                  </div>
                </div>

                <!-- 課本作者叮嚀展示盒 (1:1 復刻) -->
                <div class="p-4 sm:p-5 rounded-2xl bg-amber-50/90 dark:bg-amber-950/30 border-2 border-amber-300 dark:border-amber-700/80 space-y-2">
                  <div class="flex items-center gap-2">
                    <span class="text-lg">💡</span>
                    <span class="font-black text-xs sm:text-sm text-amber-950 dark:text-amber-200">【作者叮嚀】原文精確復刻（教材第 2-16 ～ 2-17 頁）</span>
                  </div>
                  <blockquote class="text-xs sm:text-sm text-slate-800 dark:text-slate-200 leading-relaxed font-serif italic space-y-2 border-l-4 border-amber-500 pl-3">
                    <p>
                      「其實實務見解的看法也有點奇怪，通姦罪存在的目的是婚姻圓滿不可侵犯性，那無論配偶是與異性或同性發生關係，都應該會使婚姻關係破裂才是。難道只有男女配偶會讓太太感覺不安與難過，男男配偶就不會嗎？否則按照實務見解，太太在發現乙男為丈夫甲口交的驚人事實後，應該只會很欣慰的說：『我的婚姻真是堅若磐石呀！丈夫只敢找男人，不敢玩女人！』豈不謬哉。」
                    </p>
                    <p class="font-bold text-amber-900 dark:text-amber-100">
                      「因此若正確操作目的解釋，應會得出『不限異性之間』的結論才是。就此而言，文義、體系與目的解釋均得出相同看法。」
                    </p>
                  </blockquote>
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
                            <span class="px-2 py-0.5 rounded-full bg-amber-100 dark:bg-amber-950 text-amber-900 dark:text-amber-300 font-extrabold text-[10px]">實務文義雙盾</span>
                          </div>
                          <div class="text-[10.5px] text-amber-700 dark:text-amber-400 font-bold">主張：口交非姦＋限於異性＝無罪</div>
                        </div>
                      </div>
                      <div class="space-y-2 text-xs sm:text-[13px] text-slate-800 dark:text-slate-100 leading-relaxed font-serif">
                        <p class="font-bold text-amber-950 dark:text-amber-200">
                          「審判長！依台灣高等法院法律座談會決議，『通姦』專指男女生殖器接合！」
                        </p>
                        <p>
                          88 年修法立法者刻意保留『姦』字，排除口交；且依主管機關函釋，通姦罪僅限異性！甲乙兩男口交既非男女性器接合、又非異性，雙重阻卻要件，依法應判無罪！
                        </p>
                      </div>
                    </div>
                    <div class="p-2.5 rounded-xl bg-amber-50 dark:bg-amber-950/40 text-xs sm:text-[13px] font-bold text-amber-950 dark:text-amber-200 leading-snug border border-amber-200 dark:border-amber-800/60">
                      🛡️ 辯方主張 ➔ <strong>實務長年見解：非異性性器接合，即不成立通姦罪！</strong>
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
                            <span class="px-2 py-0.5 rounded-full bg-rose-100 dark:bg-rose-950 text-rose-900 dark:text-rose-300 font-extrabold text-[10px]">目的實質防線</span>
                          </div>
                          <div class="text-[10.5px] text-rose-700 dark:text-rose-400 font-bold">主張：婚姻破裂無分性別與體位</div>
                        </div>
                      </div>
                      <div class="space-y-2 text-xs sm:text-[13px] text-slate-800 dark:text-slate-100 leading-relaxed font-serif">
                        <p class="font-bold text-rose-950 dark:text-rose-200">
                          「辯護人的主張將導致『找男人出軌不算外遇』之極端荒謬現象！」
                        </p>
                        <p>
                          條文明定『與人』，法律從未寫限異性！且通姦罪保護婚姻純潔與家庭和諧，同性口交對婚姻忠誠之破壞毫無二致，應依目的解釋與體系解釋認定成立犯罪！
                        </p>
                      </div>
                    </div>
                    <div class="p-2.5 rounded-xl bg-rose-50 dark:bg-rose-950/40 text-xs sm:text-[13px] font-bold text-rose-950 dark:text-rose-200 leading-snug border border-rose-200 dark:border-rose-800/60">
                      ⚔️ 控方主張 ➔ <strong>婚姻破壞不分性別，依目的與文義「與人」應論罪！</strong>
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
                      <span class="text-[11px] px-2.5 py-0.5 rounded-full bg-amber-200/80 dark:bg-amber-900/60 text-amber-900 dark:text-amber-100 font-extrabold font-mono">荒謬結論的破局</span>
                    </div>
                    <div class="space-y-2 text-xs sm:text-sm text-slate-800 dark:text-slate-100 leading-relaxed font-serif">
                      <p>
                        「舊實務見解認為『限於異性男女生殖器接合』，直接衍生出原書作者那個超諷刺的笑話：
                      </p>
                      <p>
                        太太抓到先生跟小王在床上口交，難道太太會破涕為笑說『好險我老公不是找小三，我的婚姻真是堅若磐石』嗎？
                      </p>
                      <p>
                        <span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">
                          這說明了死板拘泥文字或錯誤操作目的解釋，會產生多麼背離人情事理的怪胎判決！
                        </span>
                      </p>
                      <p>
                        當然，這段爭議如今已由大法官畫下休止符汪！」
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
                        <span class="text-[10px] px-2 py-0.5 rounded bg-amber-200 dark:bg-amber-900/60 text-amber-900 dark:text-amber-200 font-bold font-mono">憲法審查終極武器</span>
                      </div>
                      <div class="space-y-2 text-xs sm:text-sm text-slate-800 dark:text-slate-100 leading-relaxed font-serif">
                        <p>
                          「在法律解釋窮盡依然產生荒謬不正義時，<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">訴訟實務的終極殺招是聲請釋憲！</span>
                        </p>
                        <p>
                          刑法第 239 條通姦罪用刑罰介入私人性自主與婚姻領域，國家以偵查大棒搜查私密床第，根本違反比例原則。釋憲一出，全案直接諭知免訴，連解釋都省了！」
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
                        <span class="text-[10px] px-2 py-0.5 rounded bg-blue-200 dark:bg-blue-900/60 text-blue-900 dark:text-blue-200 font-bold font-mono">憲法解釋定錨</span>
                      </div>
                      <div class="space-y-2 text-xs sm:text-sm text-slate-800 dark:text-slate-100 leading-relaxed font-serif">
                        <p class="font-black text-blue-950 dark:text-blue-300">
                          【司法院釋字第 791 號解釋要旨（民國 109 年 5 月 29 日）】
                        </p>
                        <p class="leading-relaxed">
                          <span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">
                            「刑法第 239 條規定對憲法第 22 條保障之性自主權所為之限制，已逾越憲法第 23 條比例原則，與憲法保障性自主權之意旨有違，應自本解釋公布之日起，失其效力。」
                          </span>
                        </p>
                        <p>
                          通姦罪自 109 年 5 月 29 日起正式除罪化！刑訴第 239 條但書（得單獨撤回對配偶之告訴）亦同失其效力。
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
                          🔨 【實體法定讞】：刑法第 239 條通姦罪業經司法院釋字第 791 號解釋宣告違憲失效，依法應依刑事訴訟法第 302 條第 4 款諭知免訴判決！甲、乙兩人不負任何刑事責任。
                        </p>
                        <p>
                          💡 <strong>國考答題定錨</strong>：案例 2-8 雖因除罪化不再有刑事責任，但本題是「法律解釋方法（文義、歷史 vs. 目的、體系）」之教科書經典母題！考生作答必須熟記其論理路徑，並以釋字 791 號除罪作結，兼顧刑法本體與憲法意識！
                        </p>
                        <div class="p-2.5 rounded-xl bg-indigo-900/60 border border-indigo-400/40 text-[11.5px] text-amber-200 font-mono">
                          📅 <strong>2026 最新法條動態備註</strong>：刑法第 239 條除罪後，配偶外遇出軌行為全面回歸民事侵權行為法（民法第 184 條第 1 項後段、第 195 條第 3 項侵害配偶關係身分法益之損害賠償與慰撫金）。婚姻忠誠之維持已徹底退出國家刑罰刀刃之範疇！
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </section>

          <!-- ═══════════════ 五、特殊的憲法解釋方法 ═══════════════ -->
          <section id="sec-p0ch2-sec2-constitutional-methods" class="space-y-6 pt-2">
            <div class="flex items-center gap-3">
              <span class="w-2 h-6 rounded-full bg-indigo-600"></span>
              <h3 class="text-lg sm:text-xl font-black text-slate-900 dark:text-white tracking-tight">
                五、特殊的憲法解釋方法：合憲性解釋 vs. 憲法取向解釋（教材第 2-17 頁）
              </h3>
            </div>

            <div class="p-6 rounded-3xl border border-slate-200 dark:border-white/[0.08] bg-white dark:bg-[#101623] shadow-sm space-y-6">
              
              <!-- 課本原文展示盒 -->
              <div class="rounded-2xl p-5 bg-slate-50/80 dark:bg-slate-900/80 border-2 border-slate-200 dark:border-slate-800 space-y-3">
                <div class="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-2">
                  <span class="font-bold text-xs text-slate-500 dark:text-slate-400 font-mono">📖 課本原文 1:1 忠實重現 (P. 2-17)</span>
                  <span class="text-[11px] px-2 py-0.5 rounded bg-purple-100 dark:bg-purple-950 text-purple-700 dark:text-purple-300 font-bold font-mono">憲法解釋方法</span>
                </div>
                <blockquote class="text-xs sm:text-sm text-slate-800 dark:text-slate-200 leading-relaxed font-serif italic border-l-4 border-purple-500 pl-3.5 space-y-2">
                  <p>
                    「任何法律解釋都離不開憲法，因此『特殊的憲法解釋方法』在刑法解釋中當然有適用空間。此類解釋方法有二：『合憲性解釋』與『憲法取向解釋』。」
                  </p>
                </blockquote>
              </div>

              <!-- 兩大憲法解釋方法對比 (8px 色軸) -->
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                
                <!-- 1. 合憲性解釋 -->
                <div class="p-5 rounded-2xl bg-slate-50/80 dark:bg-slate-900/60 border-2 border-indigo-200 dark:border-indigo-900/60 border-l-[8px] border-l-indigo-600 space-y-3 shadow-xs">
                  <div class="flex items-center justify-between">
                    <span class="text-xs font-mono font-bold text-indigo-600 dark:text-indigo-400">METHOD 1</span>
                    <span class="text-base">🛡️</span>
                  </div>
                  <h4 class="text-sm font-bold text-slate-900 dark:text-white">合憲性解釋（Verfassungskonforme Auslegung）</h4>
                  <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-serif">
                    一項法律條文的解釋若有多種可能結果，只要其中一種結果可以<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">避免宣告該項法律條文違憲</span>時，便應選擇其作為裁判之結論，不可採納其他可能導致違憲的法律解釋，乃「權力相互尊重」之體現（如釋字第 509 號誹謗罪實質惡意原則）。
                  </p>
                  <div class="p-3 rounded-xl bg-indigo-100/60 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-800 text-[11px] text-slate-700 dark:text-slate-300 space-y-1">
                    <div class="font-bold text-indigo-900 dark:text-indigo-200">★ 兩大界線（釋字第 585 號許宗力大法官部分不同意見書）：</div>
                    <div>① <span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">不得逾越文字可能合理理解的範圍</span>。</div>
                    <div>② <span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">不能徹底違背法律明顯可決的基本價值決定或規範核心</span>。</div>
                  </div>
                </div>

                <!-- 2. 憲法取向解釋 -->
                <div class="p-5 rounded-2xl bg-slate-50/80 dark:bg-slate-900/60 border-2 border-purple-200 dark:border-purple-900/60 border-l-[8px] border-l-purple-600 space-y-3 shadow-xs">
                  <div class="flex items-center justify-between">
                    <span class="text-xs font-mono font-bold text-purple-600 dark:text-purple-400">METHOD 2</span>
                    <span class="text-base">🧭</span>
                  </div>
                  <h4 class="text-sm font-bold text-slate-900 dark:text-white">憲法取向解釋（Verfassungsorientierte Auslegung）</h4>
                  <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-serif">
                    當法律有「多種合憲解釋可能」時，<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">採擇與憲法基本精神最密切相合者</span>。這個方法時常被人遺忘，在過度著重文義解釋導引下造成許多個案不正義（如鄧元貞重婚案）。
                  </p>
                  <div class="p-3 rounded-xl bg-purple-100/60 dark:bg-purple-950/40 border border-purple-200 dark:border-purple-800 text-[11px] text-slate-700 dark:text-slate-300 space-y-1">
                    <div class="font-bold text-purple-900 dark:text-purple-200">★ 罪刑法定原則之憲法修正：</div>
                    <div>很多人常以「罪刑法定原則」為辯解，殊不知罪刑法定在憲法人權與實質正義影響下，已非僵硬套用，而是有所修正！</div>
                  </div>
                </div>

              </div>

              <!-- 課本作者叮嚀展示盒：鄧元貞重婚案與釋字 242 號 (1:1 復刻) -->
              <div class="p-4 sm:p-5 rounded-2xl bg-purple-50/90 dark:bg-purple-950/30 border-2 border-purple-300 dark:border-purple-700/80 space-y-2">
                <div class="flex items-center gap-2">
                  <span class="text-lg">💡</span>
                  <span class="font-black text-xs sm:text-sm text-purple-950 dark:text-purple-200">【作者叮嚀】原文精確復刻（教材第 2-17 頁）</span>
                </div>
                <blockquote class="text-xs sm:text-sm text-slate-800 dark:text-slate-200 leading-relaxed font-serif italic space-y-2 border-l-4 border-purple-500 pl-3">
                  <p>
                    「相信大家在憲法的領域中，也有學習過『合憲性解釋』與『憲法取向解釋』，但要釐清的是，<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">這兩種解釋方法並非在解釋『憲法』，而是在解釋『憲法以外的其他法律』</span>。」
                  </p>
                  <p>
                    「其中筆者覺得最重要的是『憲法取向解釋』，這個常常被大家所忘記的解釋方法，現實上的確造成了許多的不正義後果，比如鼎鼎大名的『鄧元貞重婚案』，法院就是忽略了憲法取向解釋而造成了令人無法忍受的後果，雖然彼後經釋 242 號說法，但卻無可避免的造成釋憲實務上的另一個爭點——大法官可否解釋『判決』的問題。所以請各位在解釋法律時，將『憲法取向解釋』謹記在心！」
                  </p>
                </blockquote>
              </div>

            </div>
          </section>

          <!-- ═══════════════ 六、立法解釋 § 10 與公務員概念三大類型 ═══════════════ -->
          <section id="sec-p0ch2-sec2-civil-servant" class="space-y-6 pt-2">
            <div class="flex items-center gap-3">
              <span class="w-2 h-6 rounded-full bg-indigo-600"></span>
              <h3 class="text-lg sm:text-xl font-black text-slate-900 dark:text-white tracking-tight">
                六、立法解釋 § 10 與公務員概念之三大類型（教材第 2-17 ～ 2-18 頁）
              </h3>
            </div>

            <div class="p-6 rounded-3xl border border-slate-200 dark:border-white/[0.08] bg-white dark:bg-[#101623] shadow-sm space-y-6">
              
              <!-- 課本前言展示盒 (1:1 復刻) -->
              <div class="rounded-2xl p-5 bg-slate-50/80 dark:bg-slate-900/80 border-2 border-slate-200 dark:border-slate-800 space-y-3">
                <div class="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-2">
                  <span class="font-bold text-xs text-slate-500 dark:text-slate-400 font-mono">📖 課本原文 1:1 忠實重現 (P. 2-17)</span>
                  <span class="text-[11px] px-2 py-0.5 rounded bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 font-bold font-mono">§ 10 名詞定義</span>
                </div>
                <blockquote class="text-xs sm:text-sm text-slate-800 dark:text-slate-200 leading-relaxed font-serif italic border-l-4 border-indigo-500 pl-3.5 space-y-2">
                  <p>
                    「立法解釋主要規定在 § 10，計有『以上、以下、以內之計算』、『公務員』、『公文書』、『重傷』、『性交』與『電磁紀錄』，其中較為重要者係公務員、重傷與性交。」
                  </p>
                  <p class="font-bold text-slate-900 dark:text-white">
                    「刑法採『一般化公務員概念』，並設計有三種公務員類型。相對而言，有力說則採取個別化公務員概念。」
                  </p>
                </blockquote>
              </div>

              <!-- 三大公務員類型深度拆解 (8px 色軸) -->
              <div class="space-y-4 pt-1">
                
                <!-- 1. 身分公務員 -->
                <div class="p-5 rounded-2xl bg-white dark:bg-slate-900 border-2 border-blue-200 dark:border-blue-900/60 border-l-[8px] border-l-blue-600 space-y-3 shadow-xs">
                  <div class="flex items-center justify-between">
                    <span class="px-2.5 py-0.5 rounded-full text-xs font-bold bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 border border-blue-300">
                      第 1 類：身分公務員
                    </span>
                    <span class="text-xs font-mono font-bold text-slate-500">§ 10 Ⅱ ① 前段</span>
                  </div>
                  <blockquote class="text-xs font-semibold text-slate-800 dark:text-slate-200 border-l-3 border-blue-500 pl-2.5 py-0.5 font-serif">
                    「依法令服務於國家、地方自治團體所屬機關而具有法定職務權限者。」
                  </blockquote>
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs text-slate-600 dark:text-slate-300 font-serif pt-1">
                    <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-1">
                      <strong class="text-blue-600 dark:text-blue-400">⑴ 機關要件：</strong>
                      <p>行使公權力之政府組織體，包含憲政機關、各級地方政府以及其他獨立組織體。</p>
                    </div>
                    <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-1">
                      <strong class="text-blue-600 dark:text-blue-400">⑵ 權限要件：</strong>
                      <p>需具有<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">法定職務權限</span>，負有特別保護義務與服從義務。至於該項職務是否涉公權力行使之公共事務，則非所問（不要求事務要件，96台上5853決）。</p>
                    </div>
                  </div>
                  <div class="text-[11.5px] p-2.5 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 text-amber-900 dark:text-amber-200 font-serif">
                    ⚠️ <strong>排除對象</strong>：無法定職務權限之約聘僱人員、清潔工、警衛、司機、郵政人員等。
                  </div>
                </div>

                <!-- 2. 授權公務員 -->
                <div class="p-5 rounded-2xl bg-white dark:bg-slate-900 border-2 border-indigo-200 dark:border-indigo-900/60 border-l-[8px] border-l-indigo-600 space-y-3 shadow-xs">
                  <div class="flex items-center justify-between">
                    <span class="px-2.5 py-0.5 rounded-full text-xs font-bold bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 border border-indigo-300">
                      第 2 類：授權公務員
                    </span>
                    <span class="text-xs font-mono font-bold text-slate-500">§ 10 Ⅱ ① 後段</span>
                  </div>
                  <blockquote class="text-xs font-semibold text-slate-800 dark:text-slate-200 border-l-3 border-indigo-500 pl-2.5 py-0.5 font-serif">
                    「雖非服務於國家、地方自治團體所屬機關，但因依法令從事於公共事務，而具有法定職務權限者。」
                  </blockquote>
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs text-slate-600 dark:text-slate-300 font-serif pt-1">
                    <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-1">
                      <strong class="text-indigo-600 dark:text-indigo-400">⑴ 權限要件：</strong>
                      <p>需具有<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">法定職務權限</span>。例如律師懲戒委員會委員、農田水利會會長職員、公立學校公營事業辦理採購業務人員等。</p>
                    </div>
                    <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-1">
                      <strong class="text-indigo-600 dark:text-indigo-400">⑵ 事務要件（嚴格具備！）：</strong>
                      <p>該項職務必須涉及<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">公權力行使之公共事務</span>。<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">排除私經濟行為</span>（96台上6032決）。</p>
                    </div>
                  </div>
                  <div class="text-[11.5px] p-2.5 rounded-xl bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-800 text-indigo-900 dark:text-indigo-200 font-serif">
                    📌 <strong>典型考點</strong>：公立大學教授辦理科技部專案採購，是否屬授權公務員？（最高法院決議認非屬公權力公共事務，不具公務員身分）。
                  </div>
                </div>

                <!-- 3. 委託公務員 -->
                <div class="p-5 rounded-2xl bg-white dark:bg-slate-900 border-2 border-emerald-200 dark:border-emerald-900/60 border-l-[8px] border-l-emerald-600 space-y-3 shadow-xs">
                  <div class="flex items-center justify-between">
                    <span class="px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 border border-emerald-300">
                      第 3 類：委託公務員
                    </span>
                    <span class="text-xs font-mono font-bold text-slate-500">§ 10 Ⅱ ②</span>
                  </div>
                  <blockquote class="text-xs font-semibold text-slate-800 dark:text-slate-200 border-l-3 border-emerald-500 pl-2.5 py-0.5 font-serif">
                    「受國家、地方自治團體所屬機關依法委託，從事與委託機關權限有關之公共事務者。」
                  </blockquote>
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs text-slate-600 dark:text-slate-300 font-serif pt-1">
                    <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-1">
                      <strong class="text-emerald-600 dark:text-emerald-400">⑴ 權限要件：</strong>
                      <p>需依法受有<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">公權力之委託</span>。<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">排除「行政輔助人（＝行政助手）」</span>！如民間拖吊業者、受地檢署委託採尿業者，均非委託公務員。</p>
                    </div>
                    <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-1">
                      <strong class="text-emerald-600 dark:text-emerald-400">⑵ 事務要件：</strong>
                      <p>該項職務必須涉及公權力行使之公共事務。例如陸委會委託海基會處理兩岸事務、教育部委託各大學校評會審查教師升等。</p>
                    </div>
                  </div>
                </div>

                <!-- 3. 委託公務員 補充說明 -->
                <div class="text-[11.5px] p-2.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-emerald-900 dark:text-emerald-200 font-serif">
                  📌 <strong>共通核心</strong>：委託公務員同樣<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">排除私經濟行為</span>！僅在受託行使公權力之公共事務範圍內，始具刑法公務員資格。
                </div>

                <!-- ═══════════ 【表2】一般化公務員概念的判斷流程 (教材第 2-19 頁 原書對照表) ═══════════ -->
                <div class="pt-4 space-y-3">
                  <div class="flex items-center justify-between">
                    <span class="text-xs font-bold text-slate-700 dark:text-slate-200 flex items-center gap-1.5 font-sans">
                      <span>📊</span> 【表2】一般化公務員概念的判斷流程（原書 1:1 精華矩陣）
                    </span>
                    <span class="text-[10px] font-mono text-slate-400">教材第 2-19 頁</span>
                  </div>
                  <div class="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-700">
                    <table class="w-full text-xs text-left text-slate-700 dark:text-slate-300 font-serif">
                      <thead class="bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white font-bold font-sans">
                        <tr>
                          <th class="p-2.5 border-b border-r border-slate-200 dark:border-slate-700">審查要件</th>
                          <th class="p-2.5 border-b border-r border-slate-200 dark:border-slate-700">身分公務員</th>
                          <th class="p-2.5 border-b border-r border-slate-200 dark:border-slate-700">授權公務員</th>
                          <th class="p-2.5 border-b border-slate-200 dark:border-slate-700">委託公務員</th>
                        </tr>
                      </thead>
                      <tbody class="divide-y divide-slate-200 dark:divide-slate-800 bg-white dark:bg-slate-900">
                        <tr>
                          <td class="p-2.5 font-bold font-sans bg-slate-50/50 dark:bg-slate-800/40 border-r border-slate-200 dark:border-slate-700">條文依據</td>
                          <td class="p-2.5 font-mono border-r border-slate-200 dark:border-slate-700">§ 10 Ⅱ ① 前</td>
                          <td class="p-2.5 font-mono border-r border-slate-200 dark:border-slate-700">§ 10 Ⅱ ① 後</td>
                          <td class="p-2.5 font-mono">§ 10 Ⅱ ②</td>
                        </tr>
                        <tr>
                          <td class="p-2.5 font-bold font-sans bg-slate-50/50 dark:bg-slate-800/40 border-r border-slate-200 dark:border-slate-700">機關要件<br><span class="text-[10px] font-normal text-slate-500">（服務於……）</span></td>
                          <td class="p-2.5 text-blue-700 dark:text-blue-300 font-bold border-r border-slate-200 dark:border-slate-700">行使公權力之政府組織體</td>
                          <td class="p-2.5 text-center text-slate-400 border-r border-slate-200 dark:border-slate-700">✕</td>
                          <td class="p-2.5 text-center text-slate-400">✕</td>
                        </tr>
                        <tr>
                          <td class="p-2.5 font-bold font-sans bg-slate-50/50 dark:bg-slate-800/40 border-r border-slate-200 dark:border-slate-700">權限要件</td>
                          <td colspan="2" class="p-2.5 text-center border-r border-slate-200 dark:border-slate-700 text-indigo-700 dark:text-indigo-300 font-bold bg-indigo-50/30 dark:bg-indigo-950/20">有法定職務權限</td>
                          <td class="p-2.5 text-emerald-700 dark:text-emerald-300 font-bold">依法受有公權力之委託</td>
                        </tr>
                        <tr>
                          <td class="p-2.5 font-bold font-sans bg-slate-50/50 dark:bg-slate-800/40 border-r border-slate-200 dark:border-slate-700">事務要件</td>
                          <td class="p-2.5 text-center text-slate-400 border-r border-slate-200 dark:border-slate-700">✕</td>
                          <td colspan="2" class="p-2.5 text-center text-rose-700 dark:text-rose-300 font-bold bg-rose-50/30 dark:bg-rose-950/20">涉及公權力行使之公共事務</td>
                        </tr>
                        <tr>
                          <td class="p-2.5 font-bold font-sans bg-slate-50/50 dark:bg-slate-800/40 border-r border-slate-200 dark:border-slate-700">典型舉例</td>
                          <td class="p-2.5 border-r border-slate-200 dark:border-slate-700">1. 立法委員<br>2. 法官<br>3. 法制人員</td>
                          <td class="p-2.5 border-r border-slate-200 dark:border-slate-700">1. 農田水利會會長<br>2. 公立學校教授辦理採購人員</td>
                          <td class="p-2.5">1. 紡拓會職員（受政府委託採辦紡織品出口事務）<br>2. 海基會人員<br>3. 大學校評會委員<br>4. 船長（受政府委託行使船上治安權）</td>
                        </tr>
                        <tr class="bg-amber-50/40 dark:bg-amber-950/20">
                          <td class="p-2.5 font-bold font-sans text-amber-900 dark:text-amber-200 border-r border-slate-200 dark:border-slate-700">主要排除</td>
                          <td class="p-2.5 border-r border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400">所僱用的清潔或保全人員</td>
                          <td colspan="2" class="p-2.5 text-amber-800 dark:text-amber-300 font-bold">
                            行政輔助人（＝行政助手）<br>
                            <span class="font-normal text-[11px] text-slate-600 dark:text-slate-400">例如：民間拖吊業者、檢察署委託採尿人員</span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <!-- ═══════════ (二) 個別化公務員概念 (教材第 2-19 ～ 2-20 頁 學說深度剖析) ═══════════ -->
                <div class="p-5 rounded-2xl bg-slate-50/80 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700 space-y-3">
                  <div class="flex items-center justify-between">
                    <span class="text-xs font-bold text-slate-800 dark:text-slate-100 flex items-center gap-1.5">
                      <span>💡</span> (二) 個別化公務員概念（學者黃榮堅見解）
                    </span>
                    <span class="text-[10px] font-mono text-slate-400">基礎刑法學（上）· 台大法學論叢</span>
                  </div>
                  <div class="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-serif space-y-2">
                    <p>
                      1. <span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">在刑法總則中統一定義公務員是本末倒置的</span>。因為確認公務員概念的目的在於適用刑法分則的構成要件（諸如公務員圖利罪、妨害公務罪、偽造公文書罪等等）。既然分則構成要件的解釋將會隨保護法益而有所不同，那麼不同犯罪的公務員概念當然也會有所不同。因此，公務員概念必須按個別犯罪構成要件分開、獨立判斷，乃分則個別要件的解釋問題，無法通過總則作統一的解釋。
                    </p>
                    <p>
                      2. 承上所說，我們就可以就不同的法益侵害型態，大致上歸納出兩種公務員概念，並供作分則條文的解釋依據：
                    </p>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
                      <div class="p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-blue-200 dark:border-blue-900 space-y-1.5">
                        <span class="font-black text-blue-700 dark:text-blue-300 text-xs">① 保護「公務正確性」➔ 廣義功能意義之公務員</span>
                        <p class="text-xs leading-relaxed">
                          重點在所從事公務的內容，<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">是否專屬國家統治任務的行為</span>，至於在何處服務根本不是關鍵。在此意義下的公務員，如：
                          <br>• <strong>妨害公務罪</strong>：被妨害著必須執行國家統治任務之行為（如行政強制執行）。
                          <br>• <strong>偽造公文書罪</strong>：公文書必須針對執行國家統治任務所製作（如法院搜索票）。
                          <br>• <strong>圖利罪／賄賂罪</strong>：必須在執行國家統治任務中圖利或收受賄賂。
                        </p>
                      </div>
                      <div class="p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-purple-200 dark:border-purple-900 space-y-1.5">
                        <span class="font-black text-purple-700 dark:text-purple-300 text-xs">② 保護「公務員廉潔性」➔ 嚴格組織意義之公務員</span>
                        <p class="text-xs leading-relaxed">
                          所謂廉潔其實是人民對「公務員」這個人的特殊期待，是屬人的因素，與事務無關。只要公務員是與國家間具有特殊身分意義，便足以建構人民的期待感，故服務於國家機關的公務員方屬之，並<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">限於依據公務人員任用法所任用之公務員</span>。在此意義下的公務員，如貪污治罪條例中的公務員竊盜侵占公物罪是。
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </section>

          <!-- ═══════════════ 七、案例 2-9：村長、里長是否為刑法上的公務員？ (教材第 2-20 頁) ═══════════════ -->
          <section id="sec-p0ch2-sec2-case-2-9" class="scroll-mt-24 space-y-4">
            <div class="p-6 sm:p-7 rounded-3xl bg-white dark:bg-[#121827] border border-slate-200/90 dark:border-white/10 shadow-xs space-y-5">
              
              <div class="flex items-center justify-between border-b border-slate-200/80 dark:border-white/10 pb-3 flex-wrap gap-2">
                <div class="flex items-center gap-2.5">
                  <span class="w-3 h-3 rounded-full bg-indigo-600"></span>
                  <h3 class="text-base sm:text-lg font-black text-slate-900 dark:text-white tracking-wide">
                    案例 2-9：村長、里長是否為刑法上的公務員？
                  </h3>
                </div>
                <span class="text-xs font-mono font-bold px-2.5 py-1 rounded-lg bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-800">
                  教材第 2-20 頁
                </span>
              </div>

              <!-- 案例事實卡片 -->
              <div class="p-4 sm:p-5 rounded-2xl bg-slate-50 dark:bg-[#161f30] border-l-[6px] border-l-indigo-500 space-y-2">
                <div class="text-xs font-bold text-slate-500 font-mono">CASE 2-9 FACT</div>
                <p class="text-sm sm:text-base font-serif text-slate-900 dark:text-slate-100 leading-relaxed font-bold">
                  村長、里長是否為刑法上的公務員？
                </p>
              </div>

              <!-- 問題導引 原文核對 -->
              <div class="p-4 rounded-xl bg-amber-50/60 dark:bg-amber-950/30 border border-amber-200/60 dark:border-amber-900/40 text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-serif leading-relaxed">
                <strong class="text-amber-900 dark:text-amber-200 font-sans">【原書問題導引】：</strong>
                實務見解（98台上7191決）認為：地方制度法 § 5 Ⅱ 明定各級地方自治團體均各有其立法機關與行政機關，而依 § 5 Ⅳ 及同法 § 59 規定，各村、里辦公處係由各鄉、鎮、縣轄市及區所設，受各鄉、鎮、縣轄市及區之指揮監督，為地方自治團體設於各村、里之地方行政機關，且村、里置村、里長一人，辦理村、里公務及交辦事項，故村、里長自屬依法服務於地方自治團體所屬機關而具有法定職務權限之公務員。
              </div>

              <!-- ═══════════ 五位一體法學劇院：案例 2-9 ═══════════ -->
              <div class="space-y-3 pt-2">
                
                <!-- 1. ⚔️ 原被告言詞辯論 -->
                <div class="p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-slate-900 to-indigo-950 text-white border border-indigo-500/30 space-y-3 shadow-sm">
                  <div class="flex items-center justify-between border-b border-indigo-500/30 pb-2">
                    <span class="font-black text-amber-300 text-xs sm:text-sm flex items-center gap-1.5">
                      <span>⚔️</span> 法庭言詞對決：村里長公務員屬性大交鋒
                    </span>
                    <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-indigo-900/80 text-indigo-200 border border-indigo-700">
                      身分要件辯論
                    </span>
                  </div>
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs leading-relaxed font-serif">
                    <div class="p-3 rounded-xl bg-white/10 space-y-1">
                      <div class="flex items-center gap-2">
                        <span class="font-sans font-bold text-rose-300">公訴檢察官赤狐女律師：</span>
                      </div>
                      <p>
                        「村里辦公處受鄉鎮市區公所指揮監督，為地方自治團體設於基層之行政機關；村里長依法受領事務補助費，辦理公務及自治交辦事項，具有實質法定權限，完全該當刑法第 10 條第 2 項第 1 款前段之身分公務員！」
                      </p>
                    </div>
                    <div class="p-3 rounded-xl bg-white/10 space-y-1">
                      <div class="flex items-center gap-2">
                        <span class="font-sans font-bold text-amber-300">辯護人金毛首席大律師：</span>
                      </div>
                      <p>
                        「村里長純係民選無給職之公職服務，非經公務人員考試任用，所領僅為事務補助費而非薪資，辦理鄰里瑣事多屬自治協調，並無實質公權力高權支配，不應動輒以刑法公務員重罪苛責！」
                      </p>
                    </div>
                  </div>
                </div>

                <!-- 2. 🐾 柴柴法學教授 • 白話生活大解碼 -->
                <div class="p-4 sm:p-5 rounded-2xl bg-amber-50/90 dark:bg-[#1a1714] border-2 border-amber-300/80 dark:border-amber-900/50 space-y-2">
                  <div class="flex items-center gap-2.5">
                    <div class="w-8 h-8 rounded-full overflow-hidden border border-amber-400 shadow-2xs shrink-0 cursor-pointer" onclick="openLightbox()">
                      <img src="images/shiba_law_professor.jpg" alt="柴柴教授" class="w-full h-full object-cover" style="object-position: center 20%; transform: scale(1.38);">
                    </div>
                    <span class="font-black text-amber-950 dark:text-amber-200 text-xs sm:text-sm">🐾 柴柴法學教授 • 白話生活大解碼</span>
                  </div>
                  <div class="text-xs sm:text-sm text-slate-800 dark:text-slate-200 leading-relaxed font-serif space-y-2">
                    <p>
                      很多同學直覺以為里長天天在里民活動中心發垃圾袋、處理路燈不亮，只是熱心里民，怎麼算官？
                    </p>
                    <p>
                      但法律條文是無情的！地方制度法把村里辦公處定位為<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">地方自治團體的所屬行政機關</span>，里長辦公務、發急難證明就是具有<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">法定職務權限</span>，因此在刑法上就是貨真價實的「身分公務員」汪！
                    </p>
                  </div>
                </div>

                <!-- 3. ⚖️ 金毛大律師 • 法庭攻防點評 -->
                <div class="p-4 sm:p-5 rounded-2xl bg-rose-50/80 dark:bg-rose-950/20 border border-rose-300 dark:border-rose-900/40 space-y-2">
                  <div class="flex items-center gap-2.5">
                    <div class="w-8 h-8 rounded-full overflow-hidden border border-rose-400 shadow-2xs shrink-0">
                      <img src="images/golden_case_attorney.jpg" alt="金毛律師" class="w-full h-full object-cover" style="object-position: center 20%; transform: scale(1.35);">
                    </div>
                    <span class="font-black text-rose-950 dark:text-rose-200 text-xs sm:text-sm">⚖️ 金毛大律師 • 法庭攻防點評</span>
                  </div>
                  <p class="text-xs sm:text-sm text-slate-800 dark:text-slate-200 leading-relaxed font-serif">
                    實務上村里長若涉及收受財物，辯護第一防線切勿硬凹「非公務員」，而是應強打<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">「非屬其法定職務權限範圍」</span>！若該事項純屬私人借貸、民事糾紛調處或非其權限之請託，即不構成職務收賄重罪！
                  </p>
                </div>

                <!-- 4. 🛡️ 德牧法規巡查官 • 法規雷達查核 -->
                <div class="p-4 sm:p-5 rounded-2xl bg-blue-50/80 dark:bg-blue-950/20 border border-blue-300 dark:border-blue-900/40 space-y-2">
                  <div class="flex items-center gap-2.5">
                    <div class="w-8 h-8 rounded-full overflow-hidden border border-blue-400 shadow-2xs shrink-0">
                      <img src="images/shepherd_law_inspector.jpg" alt="德牧巡查官" class="w-full h-full object-cover" style="object-position: center 15%; transform: scale(1.4);">
                    </div>
                    <span class="font-black text-blue-950 dark:text-blue-200 text-xs sm:text-sm">🛡️ 德牧法規巡查官 • 法規雷達查核</span>
                  </div>
                  <div class="text-xs sm:text-sm text-slate-800 dark:text-slate-200 leading-relaxed font-serif space-y-1">
                    <p class="font-bold text-blue-950 dark:text-blue-300">【最高法院 98 台上 7191 號判決定錨】</p>
                    <p>
                      地方制度法 § 5 Ⅳ 與 § 59 明定各村里辦公處受鄉鎮市區指揮監督，屬地方行政機關。村里長辦理村里公務及交辦事項，<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">自屬具有法定職務權限之身分公務員</span>。
                    </p>
                  </div>
                </div>

                <!-- 5. 👨‍⚖️ 邊牧首席審判長 • 終審裁決一槌定音 -->
                <div class="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white border-2 border-indigo-400/80 shadow-md space-y-3">
                  <div class="flex items-center justify-between border-b border-indigo-500/40 pb-2">
                    <div class="flex items-center gap-2">
                      <div class="w-8 h-8 rounded-full overflow-hidden border border-indigo-300 shrink-0">
                        <img src="images/border_collie_chief_judge.jpg" alt="邊牧審判長" class="w-full h-full object-cover" style="object-position: center 25%; transform: scale(1.35);">
                      </div>
                      <span class="font-black text-amber-300 text-xs sm:text-sm">👨‍⚖️ 邊牧首席審判長 • 終審裁決一槌定音</span>
                    </div>
                    <span class="text-xs font-mono font-bold text-indigo-300">#法槌一敲誰與爭鋒</span>
                  </div>
                  <div class="text-xs sm:text-sm space-y-2 leading-relaxed font-sans">
                    <p class="font-bold text-white">
                      🔨 <span class="text-amber-300">【實體法定讞】</span>：村長、里長依地方制度法規定，係依法服務於地方自治團體所屬機關而具有法定職務權限之人，<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold text-white">自屬刑法第 10 條第 2 項第 1 款前段之身分公務員</span>！
                    </p>
                    <p class="text-indigo-200">
                      💡 <strong>國考答題定錨：</strong>引出地方制度法 § 5 Ⅳ 及 § 59 之組織法依據，精準涵攝「服務機關要件」與「法定職務權限要件」，論證成立身分公務員。
                    </p>
                    <div class="p-2.5 rounded-xl bg-slate-950/60 border border-indigo-400/30 text-[11px] text-slate-300">
                      <span class="font-mono text-indigo-300 font-bold">📅 2026 最新法條動態備註：</span>地方制度法與刑法 § 10 體系至 2026 年維持有效，村里長身分公務員之司法定性毫不動搖。
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </section>

          <!-- ═══════════════ 八、案例 2-10：軍人是否為刑法上的公務員？ (教材第 2-20 頁) ═══════════════ -->
          <section id="sec-p0ch2-sec2-case-2-10" class="scroll-mt-24 space-y-4">
            <div class="p-6 sm:p-7 rounded-3xl bg-white dark:bg-[#121827] border border-slate-200/90 dark:border-white/10 shadow-xs space-y-5">
              
              <div class="flex items-center justify-between border-b border-slate-200/80 dark:border-white/10 pb-3 flex-wrap gap-2">
                <div class="flex items-center gap-2.5">
                  <span class="w-3 h-3 rounded-full bg-indigo-600"></span>
                  <h3 class="text-base sm:text-lg font-black text-slate-900 dark:text-white tracking-wide">
                    案例 2-10：軍人是否為刑法上的公務員？
                  </h3>
                </div>
                <span class="text-xs font-mono font-bold px-2.5 py-1 rounded-lg bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-800">
                  教材第 2-20 頁
                </span>
              </div>

              <!-- 案例事實卡片 -->
              <div class="p-4 sm:p-5 rounded-2xl bg-slate-50 dark:bg-[#161f30] border-l-[6px] border-l-indigo-500 space-y-2">
                <div class="text-xs font-bold text-slate-500 font-mono">CASE 2-10 FACT</div>
                <p class="text-sm sm:text-base font-serif text-slate-900 dark:text-slate-100 leading-relaxed font-bold">
                  軍人是否為刑法上的公務員？
                </p>
              </div>

              <!-- 問題導引 原文核對 -->
              <div class="p-4 rounded-xl bg-amber-50/60 dark:bg-amber-950/30 border border-amber-200/60 dark:border-amber-900/40 text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-serif leading-relaxed">
                <strong class="text-amber-900 dark:text-amber-200 font-sans">【原書問題導引】：</strong>
                一般士兵雖依法令服務於國家所屬機關，但其並無法定職務權限，並非刑法上之公務員。僅在別有法令依據而從事一定公務者，屬於身分公務員。
              </div>

              <!-- ═══════════ 五位一體法學劇院：案例 2-10 ═══════════ -->
              <div class="space-y-3 pt-2">
                
                <!-- 1. ⚔️ 原被告言詞辯論 -->
                <div class="p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-slate-900 to-indigo-950 text-white border border-indigo-500/30 space-y-3 shadow-sm">
                  <div class="flex items-center justify-between border-b border-indigo-500/30 pb-2">
                    <span class="font-black text-amber-300 text-xs sm:text-sm flex items-center gap-1.5">
                      <span>⚔️</span> 法庭言詞對決：國軍士兵身分屬性攻防
                    </span>
                    <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-indigo-900/80 text-indigo-200 border border-indigo-700">
                      權限要件攻防
                    </span>
                  </div>
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs leading-relaxed font-serif">
                    <div class="p-3 rounded-xl bg-white/10 space-y-1">
                      <div class="flex items-center gap-2">
                        <span class="font-sans font-bold text-rose-300">公訴檢察官赤狐女律師：</span>
                      </div>
                      <p>
                        「軍人依兵役法及陸海空軍軍官士官服役條例入營服役，隸屬國防部所屬部隊機關，肩負保家衛國之國防公務，受國家薪餉補貼，理應屬於身分公務員！」
                      </p>
                    </div>
                    <div class="p-3 rounded-xl bg-white/10 space-y-1">
                      <div class="flex items-center gap-2">
                        <span class="font-sans font-bold text-amber-300">辯護人金毛首席大律師：</span>
                      </div>
                      <p>
                        「服務於國家機關僅是『機關要件』，尚須具備『法定職務權限』！一般士兵僅屬被動受命服役，並無任何依法決定之職務權限，依修法意旨已嚴格排除於刑法公務員之外！」
                      </p>
                    </div>
                  </div>
                </div>

                <!-- 2. 🐾 柴柴法學教授 • 白話生活大解碼 -->
                <div class="p-4 sm:p-5 rounded-2xl bg-amber-50/90 dark:bg-[#1a1714] border-2 border-amber-300/80 dark:border-amber-900/50 space-y-2">
                  <div class="flex items-center gap-2.5">
                    <div class="w-8 h-8 rounded-full overflow-hidden border border-amber-400 shadow-2xs shrink-0 cursor-pointer" onclick="openLightbox()">
                      <img src="images/shiba_law_professor.jpg" alt="柴柴教授" class="w-full h-full object-cover" style="object-position: center 20%; transform: scale(1.38);">
                    </div>
                    <span class="font-black text-amber-950 dark:text-amber-200 text-xs sm:text-sm">🐾 柴柴法學教授 • 白話生活大解碼</span>
                  </div>
                  <div class="text-xs sm:text-sm text-slate-800 dark:text-slate-200 leading-relaxed font-serif space-y-2">
                    <p>
                      當兵拿槍站哨看起來威風凜凜，但小兵根本沒有公權力決定權！
                    </p>
                    <p>
                      95 年刑法修正公務員定義時，核心目的就是「大幅限縮公務員範圍」。穿軍服不等於具有法定職權，<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">一般士兵欠缺法定職務權限，絕非刑法上的公務員</span>汪！只有長官或軍法官等具有特別法令權限者才算！
                    </p>
                  </div>
                </div>

                <!-- 3. ⚖️ 金毛大律師 • 法庭攻防點評 -->
                <div class="p-4 sm:p-5 rounded-2xl bg-rose-50/80 dark:bg-rose-950/20 border border-rose-300 dark:border-rose-900/40 space-y-2">
                  <div class="flex items-center gap-2.5">
                    <div class="w-8 h-8 rounded-full overflow-hidden border border-rose-400 shadow-2xs shrink-0">
                      <img src="images/golden_case_attorney.jpg" alt="金毛律師" class="w-full h-full object-cover" style="object-position: center 20%; transform: scale(1.35);">
                    </div>
                    <span class="font-black text-rose-950 dark:text-rose-200 text-xs sm:text-sm">⚖️ 金毛大律師 • 法庭攻防點評</span>
                  </div>
                  <p class="text-xs sm:text-sm text-slate-800 dark:text-slate-200 leading-relaxed font-serif">
                    當一般士兵涉嫌營區竊盜、侵占裝備時，檢方常意圖論以貪污治罪條例！辯護人必須嚴格抗辯：<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">士兵不具備法定職務權限</span>，非刑法公務員，斷絕貪污重罪適用，爭取普通刑法或陸海空軍刑法之減輕！
                  </p>
                </div>

                <!-- 4. 🛡️ 德牧法規巡查官 • 法規雷達查核 -->
                <div class="p-4 sm:p-5 rounded-2xl bg-blue-50/80 dark:bg-blue-950/20 border border-blue-300 dark:border-blue-900/40 space-y-2">
                  <div class="flex items-center gap-2.5">
                    <div class="w-8 h-8 rounded-full overflow-hidden border border-blue-400 shadow-2xs shrink-0">
                      <img src="images/shepherd_law_inspector.jpg" alt="德牧巡查官" class="w-full h-full object-cover" style="object-position: center 15%; transform: scale(1.4);">
                    </div>
                    <span class="font-black text-blue-950 dark:text-blue-200 text-xs sm:text-sm">🛡️ 德牧法規巡查官 • 法規雷達查核</span>
                  </div>
                  <div class="text-xs sm:text-sm text-slate-800 dark:text-slate-200 leading-relaxed font-serif space-y-1">
                    <p class="font-bold text-blue-950 dark:text-blue-300">【刑法第 10 條修正立法理由雷達】</p>
                    <p>
                      立法理由明示：未具法定職務權限之體力勞務人員、基層雇員、一般士兵均排除於公務員之外。<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">僅在別有法令依據而賦予一定裁量決定之公務權限者</span>（如軍事檢察官、具有採購權限之軍官），始屬於身分公務員。
                    </p>
                  </div>
                </div>

                <!-- 5. 👨‍⚖️ 邊牧首席審判長 • 終審裁決一槌定音 -->
                <div class="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white border-2 border-indigo-400/80 shadow-md space-y-3">
                  <div class="flex items-center justify-between border-b border-indigo-500/40 pb-2">
                    <div class="flex items-center gap-2">
                      <div class="w-8 h-8 rounded-full overflow-hidden border border-indigo-300 shrink-0">
                        <img src="images/border_collie_chief_judge.jpg" alt="邊牧審判長" class="w-full h-full object-cover" style="object-position: center 25%; transform: scale(1.35);">
                      </div>
                      <span class="font-black text-amber-300 text-xs sm:text-sm">👨‍⚖️ 邊牧首席審判長 • 終審裁決一槌定音</span>
                    </div>
                    <span class="text-xs font-mono font-bold text-indigo-300">#法槌一敲誰與爭鋒</span>
                  </div>
                  <div class="text-xs sm:text-sm space-y-2 leading-relaxed font-sans">
                    <p class="font-bold text-white">
                      🔨 <span class="text-amber-300">【實體法定讞】</span>：<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold text-white">一般士兵並非刑法上之公務員</span>！僅在別有法令授權而從事特定法定職務者，始例外該當身分公務員。
                    </p>
                    <p class="text-indigo-200">
                      💡 <strong>國考答題定錨：</strong>切記分流「一般士兵（無職務權限＝非公務員）」與「具有特別法令依據從事公務者（有法定權限＝公務員）」。
                    </p>
                    <div class="p-2.5 rounded-xl bg-slate-950/60 border border-indigo-400/30 text-[11px] text-slate-300">
                      <span class="font-mono text-indigo-300 font-bold">📅 2026 最新法條動態備註：</span>兵役法制調整與義務役期更迭，皆不影響一般士兵欠缺法定職務權限而排除於刑法公務員之認定原則。
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </section>

          <!-- ═══════════════ 九、案例 2-11：大學教授以不實單據核銷國科會補助費，是否為刑法上公務員？ (教材第 2-21 頁) ═══════════════ -->
          <section id="sec-p0ch2-sec2-case-2-11" class="scroll-mt-24 space-y-4">
            <div class="p-6 sm:p-7 rounded-3xl bg-white dark:bg-[#121827] border border-slate-200/90 dark:border-white/10 shadow-xs space-y-5">
              
              <div class="flex items-center justify-between border-b border-slate-200/80 dark:border-white/10 pb-3 flex-wrap gap-2">
                <div class="flex items-center gap-2.5">
                  <span class="w-3 h-3 rounded-full bg-rose-600"></span>
                  <h3 class="text-base sm:text-lg font-black text-slate-900 dark:text-white tracking-wide">
                    案例 2-11：大學教授以不實單據核銷國科會補助費，是否為刑法上公務員？
                  </h3>
                </div>
                <span class="text-xs font-mono font-bold px-2.5 py-1 rounded-lg bg-rose-50 dark:bg-rose-950/60 text-rose-600 dark:text-rose-400 border border-rose-200 dark:border-rose-800">
                  教材第 2-21 頁
                </span>
              </div>

              <!-- 案例事實卡片 -->
              <div class="p-4 sm:p-5 rounded-2xl bg-slate-50 dark:bg-[#161f30] border-l-[6px] border-l-rose-500 space-y-2">
                <div class="text-xs font-bold text-slate-500 font-mono">CASE 2-11 FACT</div>
                <p class="text-sm sm:text-base font-serif text-slate-900 dark:text-slate-100 leading-relaxed font-bold">
                  大學教授以不實單據核銷國科會補助費，是否為刑法上公務員？
                </p>
              </div>

              <!-- 問題導引 原文核對 -->
              <div class="p-4 rounded-xl bg-amber-50/60 dark:bg-amber-950/30 border border-amber-200/60 dark:border-amber-900/40 text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-serif leading-relaxed space-y-1.5">
                <strong class="text-amber-900 dark:text-amber-200 font-sans">【原書問題導引 原文四段精準審查】：</strong>
                <p>
                  ㈠ 大學教授並非「依法令服務於國家、地方自治團體所屬機關而具有法定職務權限之人」，<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">不是所謂身分公務員</span>。
                </p>
                <p>
                  ㈡ 公立大學教授受政府或公立研究機關委託，負責科學技術研究發展計畫，性質上仍屬學術研究，並未經由法令授權而取得任何法定職務權限，亦非其為完成該計畫而參與相關之採購事務，僅屬執行該計畫之附隨事項，無涉公權力行使，亦非攸關國計民生，非屬公共事務，核與「依法令從事於公共事務而具有法定職務權限」不符，<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">不是所謂授權公務員</span>。
                </p>
                <p>
                  ㈢ 縱該項採購係所屬公立大學依政府採購法辦理，因該教授並非公立大學之「承辦或監辦採購人員」，而具有辦理採購事務之法定職務權限，亦非立法理由例示之授權公務員；因此教授為執行計畫所參與之相關採購事務，既非行使公權力或從事公共事務，復與委託或補助之政府或公立研究機關權限無關，不符「受國家、地方自治團體所屬機關依法委託，從事與委託機關權限有關之公共事務」，<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">不是所謂委託公務員</span>。
                </p>
                <p>
                  ㈣ 綜上所述，公立大學教授受政府或公立研究機關委託，負責執行科研計畫，於辦理相關採購事務，<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">並不具有刑法公務員身分（103 年第 10 次決議）</span>。
                </p>
              </div>

              <!-- ═══════════ 五位一體法學劇院：案例 2-11 ═══════════ -->
              <div class="space-y-3 pt-2">
                
                <!-- 1. ⚔️ 原被告言詞辯論 -->
                <div class="p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-slate-900 to-indigo-950 text-white border border-indigo-500/30 space-y-3 shadow-sm">
                  <div class="flex items-center justify-between border-b border-indigo-500/30 pb-2">
                    <span class="font-black text-amber-300 text-xs sm:text-sm flex items-center gap-1.5">
                      <span>⚔️</span> 法庭言詞對決：科研採購公款貪污定性大戰
                    </span>
                    <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-rose-900/80 text-rose-200 border border-rose-700">
                      三類公務員全盤封殺
                    </span>
                  </div>
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs leading-relaxed font-serif">
                    <div class="p-3 rounded-xl bg-white/10 space-y-1">
                      <div class="flex items-center gap-2">
                        <span class="font-sans font-bold text-rose-300">公訴檢察官赤狐女律師：</span>
                      </div>
                      <p>
                        「國科會研究補助全係全民納稅之公帑！公立大學教授受委託執行科研計畫，依政府採購法公款公用，卻浮報單據套取經費，縱非身分公務員，亦屬授權或受託行使公共事務之委託公務員，應依貪污治罪條例重判！」
                      </p>
                    </div>
                    <div class="p-3 rounded-xl bg-white/10 space-y-1">
                      <div class="flex items-center gap-2">
                        <span class="font-sans font-bold text-amber-300">辯護人金毛首席大律師：</span>
                      </div>
                      <p>
                        「學術研究受憲法講學自由保障，採購耗材僅為研究附隨行為，根本無涉國家高權統治公權力！教授既非公務員、亦非學校專責採購人員，三類公務員要件全數欠缺，絕不成立貪污重罪！」
                      </p>
                    </div>
                  </div>
                </div>

                <!-- 2. 🐾 柴柴法學教授 • 白話生活大解碼 -->
                <div class="p-4 sm:p-5 rounded-2xl bg-amber-50/90 dark:bg-[#1a1714] border-2 border-amber-300/80 dark:border-amber-900/50 space-y-2">
                  <div class="flex items-center gap-2.5">
                    <div class="w-8 h-8 rounded-full overflow-hidden border border-amber-400 shadow-2xs shrink-0 cursor-pointer" onclick="openLightbox()">
                      <img src="images/shiba_law_professor.jpg" alt="柴柴教授" class="w-full h-full object-cover" style="object-position: center 20%; transform: scale(1.38);">
                    </div>
                    <span class="font-black text-amber-950 dark:text-amber-200 text-xs sm:text-sm">🐾 柴柴法學教授 • 白話生活大解碼</span>
                  </div>
                  <div class="text-xs sm:text-sm text-slate-800 dark:text-slate-200 leading-relaxed font-serif space-y-2">
                    <p>
                      早期檢調大舉搜索大學實驗室抓教授貪污，全台學術界大地震！
                    </p>
                    <p>
                      課本分析無懈可擊：教授做實驗買試管、買電腦，是為了「搞學術」，不是在替國家行使統治高權。既然不是行政採購人員，買東西只是研究的附隨事項，就<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">不是公權力公共事務</span>！最後最高法院 103 年決議統一見解：通通不具有刑法公務員身分汪！
                    </p>
                  </div>
                </div>

                <!-- 3. ⚖️ 金毛大律師 • 法庭攻防點評 -->
                <div class="p-4 sm:p-5 rounded-2xl bg-rose-50/80 dark:bg-rose-950/20 border border-rose-300 dark:border-rose-900/40 space-y-2">
                  <div class="flex items-center gap-2.5">
                    <div class="w-8 h-8 rounded-full overflow-hidden border border-rose-400 shadow-2xs shrink-0">
                      <img src="images/golden_case_attorney.jpg" alt="金毛律師" class="w-full h-full object-cover" style="object-position: center 20%; transform: scale(1.35);">
                    </div>
                    <span class="font-black text-rose-950 dark:text-rose-200 text-xs sm:text-sm">⚖️ 金毛大律師 • 法庭攻防點評</span>
                  </div>
                  <p class="text-xs sm:text-sm text-slate-800 dark:text-slate-200 leading-relaxed font-serif">
                    此案為實務大勝之經典範例！一旦剔除「公務員」身分，刑期立即從十年以上之貪污治罪條例，降級為刑法第 339 條普通詐欺罪或第 216 條行使偽造文書罪，進而可爭取<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">易科罰金或宣告緩刑</span>，當事人得免除牢獄之災！
                  </p>
                </div>

                <!-- 4. 🛡️ 德牧法規巡查官 • 法規雷達查核 -->
                <div class="p-4 sm:p-5 rounded-2xl bg-blue-50/80 dark:bg-blue-950/20 border border-blue-300 dark:border-blue-900/40 space-y-2">
                  <div class="flex items-center gap-2.5">
                    <div class="w-8 h-8 rounded-full overflow-hidden border border-blue-400 shadow-2xs shrink-0">
                      <img src="images/shepherd_law_inspector.jpg" alt="德牧巡查官" class="w-full h-full object-cover" style="object-position: center 15%; transform: scale(1.4);">
                    </div>
                    <span class="font-black text-blue-950 dark:text-blue-200 text-xs sm:text-sm">🛡️ 德牧法規巡查官 • 法規雷達查核</span>
                  </div>
                  <div class="text-xs sm:text-sm text-slate-800 dark:text-slate-200 leading-relaxed font-serif space-y-1">
                    <p class="font-bold text-blue-950 dark:text-blue-300">【最高法院 103 年度第 10 次刑事庭會議決議】</p>
                    <p>
                      最高法院明確作成決議：公立大學教授受政府或公立機關委託執行科研計畫，非身分公務員；採購非屬公共事務，非授權公務員；亦非受託行使公權力，非委託公務員。<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">不具有刑法公務員身分</span>。
                    </p>
                  </div>
                </div>

                <!-- 5. 👨‍⚖️ 邊牧首席審判長 • 終審裁決一槌定音 -->
                <div class="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white border-2 border-indigo-400/80 shadow-md space-y-3">
                  <div class="flex items-center justify-between border-b border-indigo-500/40 pb-2">
                    <div class="flex items-center gap-2">
                      <div class="w-8 h-8 rounded-full overflow-hidden border border-indigo-300 shrink-0">
                        <img src="images/border_collie_chief_judge.jpg" alt="邊牧審判長" class="w-full h-full object-cover" style="object-position: center 25%; transform: scale(1.35);">
                      </div>
                      <span class="font-black text-amber-300 text-xs sm:text-sm">👨‍⚖️ 邊牧首席審判長 • 終審裁決一槌定音</span>
                    </div>
                    <span class="text-xs font-mono font-bold text-indigo-300">#法槌一敲誰與爭鋒</span>
                  </div>
                  <div class="text-xs sm:text-sm space-y-2 leading-relaxed font-sans">
                    <p class="font-bold text-white">
                      🔨 <span class="text-amber-300">【實體法定讞】</span>：公立大學教授執行科研採購辦理經費核銷，<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold text-white">自始不具有刑法上之公務員身分</span>！不成立貪污罪，僅論以普通刑法詐欺取財或偽造文書罪。
                    </p>
                    <p class="text-indigo-200">
                      💡 <strong>國考答題定錨：</strong>國考黃金公式！三段論證法：「非身分公務員（教學研究無職權）➔ 非授權公務員（非專責採購人員無公權力）➔ 非委託公務員（附隨事項非公權力委託）」，最後引出 103 年第 10 次決議作結！
                    </p>
                    <div class="p-2.5 rounded-xl bg-slate-950/60 border border-indigo-400/30 text-[11px] text-slate-300">
                      <span class="font-mono text-indigo-300 font-bold">📅 2026 最新法條動態備註：</span>科學技術基本法後續配合鬆綁採購規範，最高法院 103 年第 10 次決議判準持續穩定適用至 2026 年，為必考不敗考點。
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </section>

          <!-- ═══════════════ 十、立法解釋之二：重傷（§ 10 Ⅳ）全體系精解 (教材第 2-21 ～ 2-22 頁) ═══════════════ -->
          <section id="sec-p0ch2-sec2-serious-injury" class="scroll-mt-24 space-y-4">
            <div class="p-6 sm:p-7 rounded-3xl bg-white dark:bg-[#121827] border border-slate-200/90 dark:border-white/10 shadow-xs space-y-5">
              
              <div class="flex items-center justify-between border-b border-slate-200/80 dark:border-white/10 pb-3 flex-wrap gap-2">
                <div class="flex items-center gap-2.5">
                  <span class="w-3 h-3 rounded-full bg-emerald-600"></span>
                  <h3 class="text-base sm:text-lg font-black text-slate-900 dark:text-white tracking-wide">
                    二、重傷之立法解釋（刑法第 10 條第 4 項）
                  </h3>
                </div>
                <span class="text-xs font-mono font-bold px-2.5 py-1 rounded-lg bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800">
                  教材第 2-21 ～ 2-22 頁
                </span>
              </div>

              <!-- 法條與兩大支柱架構 -->
              <div class="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-serif space-y-3">
                <p>
                  刑法第 10 條第 4 項對於重傷之定義，採<strong class="text-indigo-600 dark:text-indigo-400">「列舉規定（第 1 至 5 款）」</strong>與<strong class="text-rose-600 dark:text-rose-400">「概括規定（第 6 款）」</strong>雙軌並行之立法模式：
                </p>

                <!-- (一) 列舉規定 -->
                <div class="p-4 sm:p-5 rounded-2xl bg-slate-50 dark:bg-[#161f30] border-l-[8px] border-l-indigo-600 space-y-3">
                  <div class="flex items-center justify-between">
                    <span class="font-black text-indigo-900 dark:text-indigo-200 text-sm">
                      (一) 列舉規定（§ 10 Ⅳ ①②③④⑤）
                    </span>
                    <span class="text-xs font-mono font-bold text-slate-500">五大生理機能</span>
                  </div>
                  <div class="space-y-2 text-xs sm:text-sm">
                    <p>
                      <strong>1. 毀敗：</strong>係指生理機能<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">完全且永久喪失，縱使經過診治亦無法恢復原狀</span>（28上1098例）；若僅一時喪失或減衰機能者，則非屬之。諸如：視盲、耳聾、無味、失嗅都是毀敗的情形。
                    </p>
                    <p>
                      <strong>2. 嚴重減損：</strong>包括未完全喪失機能者，但<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">已喪失大部分機能之情形</span>。應就各款所列之生理機能檢驗，視傷害對於該器官或肢體原本功能的影響程度是否嚴重而斷，諸如：切斷拇指與食指，失去抓握的能力（29上135例）、斷腳筋。
                    </p>
                    <div class="p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-[11.5px] text-slate-600 dark:text-slate-400">
                      📋 <strong>法條列舉五款：</strong>① 毀敗或嚴重減損視能。② 毀敗或嚴重減損聽能。③ 毀敗或嚴重減損語能、味能或嗅能。④ 毀敗或嚴重減損一肢以上之機能。⑤ 毀敗或嚴重減損生殖之機能。
                    </div>
                  </div>
                </div>

                <!-- (二) 概括規定 -->
                <div class="p-4 sm:p-5 rounded-2xl bg-slate-50 dark:bg-[#161f30] border-l-[8px] border-l-rose-600 space-y-3">
                  <div class="flex items-center justify-between">
                    <span class="font-black text-rose-900 dark:text-rose-200 text-sm">
                      (二) 概括規定（§ 10 Ⅳ ⑥）
                    </span>
                    <span class="text-xs font-mono font-bold text-slate-500">重大不治或難治</span>
                  </div>
                  <div class="space-y-2 text-xs sm:text-sm">
                    <blockquote class="text-xs font-semibold text-slate-800 dark:text-slate-200 border-l-3 border-rose-500 pl-2.5 py-0.5">
                      「其他於身體或健康，有重大不治或難治之傷害。」
                    </blockquote>
                    <p>
                      • <strong>「不治或難治」：</strong>指依現今醫療技術，無法治療或治療耗費龐大資源，例如遭人扁刀或潑灑硫酸毀容之情形（47台上1433例、80台上2128決）。
                    </p>
                    <p>
                      • <strong>「重大」之學說與實務激烈拉扯：</strong>學說認為所謂「重大」乃是<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">該傷勢必須接近生命危險</span>！實務向來忽視「重大」此要件，認為「耳廓被割（23上4573例）」、「鼻梁被割（19上2052例）」、「身體大規模刺青（95台上4394決）」皆是 § 10 Ⅳ ⑥ 的重傷，學說則持強烈反對態度。
                    </p>
                  </div>
                </div>

                <!-- 【解題提示】 原文核對 -->
                <div class="p-4 rounded-xl bg-amber-50/80 dark:bg-amber-950/30 border border-amber-300 dark:border-amber-900/50 space-y-1">
                  <div class="flex items-center gap-1.5 font-bold text-amber-950 dark:text-amber-200 text-xs sm:text-sm">
                    <span>📖</span> 【解題提示】小心列舉規定與概括規定的適用關係
                  </div>
                  <p class="text-xs text-slate-700 dark:text-slate-300 font-serif leading-relaxed">
                    第六款<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">只有補充性質</span>，僅在自始無法適用前五款時方得考慮。此外，針對視能、聽能、語能、味能、嗅能、一肢之機能與生殖機能的重傷判斷，已完全被列舉規定所登錄，<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">自始排除概括規定的適用可能</span>！
                  </p>
                </div>

              </div>

            </div>
          </section>

          <!-- ═══════════════ 十一、案例 2-12：使他人一顆腎臟破裂，是否構成重傷？ (教材第 2-22 頁) ═══════════════ -->
          <section id="sec-p0ch2-sec2-case-2-12" class="scroll-mt-24 space-y-4">
            <div class="p-6 sm:p-7 rounded-3xl bg-white dark:bg-[#121827] border border-slate-200/90 dark:border-white/10 shadow-xs space-y-5">
              
              <div class="flex items-center justify-between border-b border-slate-200/80 dark:border-white/10 pb-3 flex-wrap gap-2">
                <div class="flex items-center gap-2.5">
                  <span class="w-3 h-3 rounded-full bg-rose-600"></span>
                  <h3 class="text-base sm:text-lg font-black text-slate-900 dark:text-white tracking-wide">
                    案例 2-12：使他人一顆腎臟破裂，是否構成重傷？
                  </h3>
                </div>
                <span class="text-xs font-mono font-bold px-2.5 py-1 rounded-lg bg-rose-50 dark:bg-rose-950/60 text-rose-600 dark:text-rose-400 border border-rose-200 dark:border-rose-800">
                  教材第 2-22 頁
                </span>
              </div>

              <!-- 案例事實卡片 -->
              <div class="p-4 sm:p-5 rounded-2xl bg-slate-50 dark:bg-[#161f30] border-l-[6px] border-l-rose-500 space-y-2">
                <div class="text-xs font-bold text-slate-500 font-mono">CASE 2-12 FACT</div>
                <p class="text-sm sm:text-base font-serif text-slate-900 dark:text-slate-100 leading-relaxed font-bold">
                  使他人一顆腎臟破裂，是否構成重傷？
                </p>
              </div>

              <!-- 問題導引 原文核對 -->
              <div class="p-4 rounded-xl bg-amber-50/60 dark:bg-amber-950/30 border border-amber-200/60 dark:border-amber-900/40 text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-serif leading-relaxed">
                <strong class="text-amber-900 dark:text-amber-200 font-sans">【原書問題導引】：</strong>
                實務見解認為（76台上2907決參照、86台上1787決見解亦同）：按腎臟為人體排泄之重要器官，因上訴人出手毆打，使被害人左腎破裂必須切除，對人之身體健康自屬達於重大傷害，且為不治之傷害，核與 § 10 Ⅳ ⑥ 所稱重傷之規定符合。學說則認為重傷自法定刑的角度觀察已與殺人無異，故概括條款的解釋必須觀察該傷勢是否接近生命危險，原則上人有兩顆腎臟，且就醫學上的觀點而言，一顆腎臟仍足以擔負整體過濾機能而不威脅生命，故非重傷。
              </div>

              <!-- ═══════════ 五位一體法學劇院：案例 2-12 ═══════════ -->
              <div class="space-y-3 pt-2">
                
                <!-- 1. ⚔️ 原被告言詞辯論 -->
                <div class="p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-slate-900 to-indigo-950 text-white border border-indigo-500/30 space-y-3 shadow-sm">
                  <div class="flex items-center justify-between border-b border-indigo-500/30 pb-2">
                    <span class="font-black text-amber-300 text-xs sm:text-sm flex items-center gap-1.5">
                      <span>⚔️</span> 法庭言詞對決：單顆腎臟摘除重傷攻防
                    </span>
                    <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-rose-900/80 text-rose-200 border border-rose-700">
                      器官切除 vs 生命危險
                    </span>
                  </div>
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs leading-relaxed font-serif">
                    <div class="p-3 rounded-xl bg-white/10 space-y-1">
                      <div class="flex items-center gap-2">
                        <span class="font-sans font-bold text-rose-300">公訴檢察官赤狐女律師：</span>
                      </div>
                      <p>
                        「腎臟是不可逆之重要內臟器官！切除左腎後人體濾毒排泄機能永久缺損一半，永難恢復，實務歷來判決一致認定該當第 6 款之重大不治重傷！」
                      </p>
                    </div>
                    <div class="p-3 rounded-xl bg-white/10 space-y-1">
                      <div class="flex items-center gap-2">
                        <span class="font-sans font-bold text-amber-300">辯護人金毛首席大律師：</span>
                      </div>
                      <p>
                        「重傷罪法定刑高達 5 至 12 年，重傷之『重大』必須逼近生命危險！人體右腎代償能力極佳，單腎者壽命與常人無異，絕未危及生命，自罪刑相當原則絕非重傷！」
                      </p>
                    </div>
                  </div>
                </div>

                <!-- 2. 🐾 柴柴法學教授 • 白話生活大解碼 -->
                <div class="p-4 sm:p-5 rounded-2xl bg-amber-50/90 dark:bg-[#1a1714] border-2 border-amber-300/80 dark:border-amber-900/50 space-y-2">
                  <div class="flex items-center gap-2.5">
                    <div class="w-8 h-8 rounded-full overflow-hidden border border-amber-400 shadow-2xs shrink-0 cursor-pointer" onclick="openLightbox()">
                      <img src="images/shiba_law_professor.jpg" alt="柴柴教授" class="w-full h-full object-cover" style="object-position: center 20%; transform: scale(1.38);">
                    </div>
                    <span class="font-black text-amber-950 dark:text-amber-200 text-xs sm:text-sm">🐾 柴柴法學教授 • 白話生活大解碼</span>
                  </div>
                  <div class="text-xs sm:text-sm text-slate-800 dark:text-slate-200 leading-relaxed font-serif space-y-2">
                    <p>
                      很多人都捐過一顆腎救親人，捐腎的人算不算「受重傷」？醫學上剩一顆腎完全可以健康活到老！
                    </p>
                    <p>
                      這就是實務跟學說最大的鴻溝！實務死抓「切除不治」就判重傷；但刑法學者痛批：重傷罪刑罰幾乎跟殺人罪一樣重，如果沒有<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">接近生命危險</span>，怎麼可以隨便扣上重傷帽子汪！
                    </p>
                  </div>
                </div>

                <!-- 3. ⚖️ 金毛大律師 • 法庭攻防點評 -->
                <div class="p-4 sm:p-5 rounded-2xl bg-rose-50/80 dark:bg-rose-950/20 border border-rose-300 dark:border-rose-900/40 space-y-2">
                  <div class="flex items-center gap-2.5">
                    <div class="w-8 h-8 rounded-full overflow-hidden border border-rose-400 shadow-2xs shrink-0">
                      <img src="images/golden_case_attorney.jpg" alt="金毛律師" class="w-full h-full object-cover" style="object-position: center 20%; transform: scale(1.35);">
                    </div>
                    <span class="font-black text-rose-950 dark:text-rose-200 text-xs sm:text-sm">⚖️ 金毛大律師 • 法庭攻防點評</span>
                  </div>
                  <p class="text-xs sm:text-sm text-slate-800 dark:text-slate-200 leading-relaxed font-serif">
                    訴訟策略首要聲請醫學鑑定！證明被害人術後右腎肌酸酐、尿素氮等過濾指數均在正常範圍內，力主學說<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">「重大應限於接近生命危險說」</span>，力拼論以刑法第 277 條第 1 項普通傷害罪，爭取大幅減刑！
                  </p>
                </div>

                <!-- 4. 🛡️ 德牧法規巡查官 • 法規雷達查核 -->
                <div class="p-4 sm:p-5 rounded-2xl bg-blue-50/80 dark:bg-blue-950/20 border border-blue-300 dark:border-blue-900/40 space-y-2">
                  <div class="flex items-center gap-2.5">
                    <div class="w-8 h-8 rounded-full overflow-hidden border border-blue-400 shadow-2xs shrink-0">
                      <img src="images/shepherd_law_inspector.jpg" alt="德牧巡查官" class="w-full h-full object-cover" style="object-position: center 15%; transform: scale(1.4);">
                    </div>
                    <span class="font-black text-blue-950 dark:text-blue-200 text-xs sm:text-sm">🛡️ 德牧法規巡查官 • 法規雷達查核</span>
                  </div>
                  <div class="text-xs sm:text-sm text-slate-800 dark:text-slate-200 leading-relaxed font-serif space-y-1">
                    <p class="font-bold text-blue-950 dark:text-blue-300">【最高法院 76 台上 2907 號判決 vs 86 台上 1787 號判決】</p>
                    <p>
                      實務見解：腎臟為排泄重要器官，切除達於重大傷害且不治，<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">肯定構成 § 10 Ⅳ ⑥ 之重傷</span>。通說學者（林山田等）則持反對見解，認未達接近死亡危險。
                    </p>
                  </div>
                </div>

                <!-- 5. 👨‍⚖️ 邊牧首席審判長 • 終審裁決一槌定音 -->
                <div class="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white border-2 border-indigo-400/80 shadow-md space-y-3">
                  <div class="flex items-center justify-between border-b border-indigo-500/40 pb-2">
                    <div class="flex items-center gap-2">
                      <div class="w-8 h-8 rounded-full overflow-hidden border border-indigo-300 shrink-0">
                        <img src="images/border_collie_chief_judge.jpg" alt="邊牧審判長" class="w-full h-full object-cover" style="object-position: center 25%; transform: scale(1.35);">
                      </div>
                      <span class="font-black text-amber-300 text-xs sm:text-sm">👨‍⚖️ 邊牧首席審判長 • 終審裁決一槌定音</span>
                    </div>
                    <span class="text-xs font-mono font-bold text-indigo-300">#法槌一敲誰與爭鋒</span>
                  </div>
                  <div class="text-xs sm:text-sm space-y-2 leading-relaxed font-sans">
                    <p class="font-bold text-white">
                      🔨 <span class="text-amber-300">【實體法定讞】</span>：<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold text-white">實務判決認定構成重傷；通說學理則認為不構成重傷</span>。
                    </p>
                    <p class="text-indigo-200">
                      💡 <strong>國考答題定錨：</strong>經典實務學說對決題！考生作答必須兩說並列：先引實務 76 台上 2907 肯定說（強調重要器官不可逆不治）；次引學理否定說（強調重傷與殺人法定刑相當，重大需逼近生命危險）。
                    </p>
                    <div class="p-2.5 rounded-xl bg-slate-950/60 border border-indigo-400/30 text-[11px] text-slate-300">
                      <span class="font-mono text-indigo-300 font-bold">📅 2026 最新法條動態備註：</span>第 10 條第 4 項第 6 款概括規定文字至 2026 年未變，單腎切除之重傷實務學說爭點依然是國家考試熱門焦點。
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </section>

          <!-- ═══════════════ 十二、案例 2-13：剪斷生殖器僅餘兩公分丟入大排水溝，是否構成重傷？ (教材第 2-22 ～ 2-23 頁) ═══════════════ -->
          <section id="sec-p0ch2-sec2-case-2-13" class="scroll-mt-24 space-y-4">
            <div class="p-6 sm:p-7 rounded-3xl bg-white dark:bg-[#121827] border border-slate-200/90 dark:border-white/10 shadow-xs space-y-5">
              
              <div class="flex items-center justify-between border-b border-slate-200/80 dark:border-white/10 pb-3 flex-wrap gap-2">
                <div class="flex items-center gap-2.5">
                  <span class="w-3 h-3 rounded-full bg-rose-600"></span>
                  <h3 class="text-base sm:text-lg font-black text-slate-900 dark:text-white tracking-wide">
                    案例 2-13：剪斷生殖器僅餘兩公分丟入大排水溝，是否構成重傷？
                  </h3>
                </div>
                <span class="text-xs font-mono font-bold px-2.5 py-1 rounded-lg bg-rose-50 dark:bg-rose-950/60 text-rose-600 dark:text-rose-400 border border-rose-200 dark:border-rose-800">
                  教材第 2-22 ～ 2-23 頁
                </span>
              </div>

              <!-- 案例事實卡片 -->
              <div class="p-4 sm:p-5 rounded-2xl bg-slate-50 dark:bg-[#161f30] border-l-[6px] border-l-rose-500 space-y-2">
                <div class="text-xs font-bold text-slate-500 font-mono">CASE 2-13 FACT</div>
                <p class="text-sm sm:text-base font-serif text-slate-900 dark:text-slate-100 leading-relaxed font-bold">
                  甲女知悉乙男腳踏兩條船後，妒火中燒，夜間趁乙男熟睡之際，持利剪將乙男之生殖器剪斷，並將斷部丟棄於大排水溝之中。嗣後醫療報告指出，甲男生殖器雖然僅餘約兩公分，但仍可自然勃起、正常排尿。試問甲女是否構成重傷？
                </p>
              </div>

              <!-- 問題導引 原文核對 -->
              <div class="p-4 rounded-xl bg-amber-50/60 dark:bg-amber-950/30 border border-amber-200/60 dark:border-amber-900/40 text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-serif leading-relaxed space-y-1.5">
                <strong class="text-amber-900 dark:text-amber-200 font-sans">【原書問題導引 原文精確雙軌剖析】：</strong>
                <p>
                  本例可分別由「排泄」與「生殖」兩種身體機能切入觀察。先就排泄機能而言，由於乙男仍得正常排尿，排泄機能完全不受影響，並非重傷（否則古代太監豈不全部死於尿毒症？）。
                </p>
                <p>
                  再就生殖機能而言，於此恐怕必須先釐清「性功能」與「生殖機能」之差異，前者指勃起或感受性興奮、性快感之功能，後者（單就男性而言）則是製造精子、分泌男性賀爾蒙，並足以使他方受孕之機能。<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">條文所指生殖之機能應為後者（78台上3271決參照）</span>。倘若案例中乙男睪丸製造精子之能力依然完好，那麼乙男並未喪失大部分生殖機能而不該當嚴重減損之意義，甲女客觀上不該當重傷。
                </p>
              </div>

              <!-- ═══════════ 五位一體法學劇院：案例 2-13 ═══════════ -->
              <div class="space-y-3 pt-2">
                
                <!-- 1. ⚔️ 原被告言詞辯論 -->
                <div class="p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-slate-900 to-indigo-950 text-white border border-indigo-500/30 space-y-3 shadow-sm">
                  <div class="flex items-center justify-between border-b border-indigo-500/30 pb-2">
                    <span class="font-black text-amber-300 text-xs sm:text-sm flex items-center gap-1.5">
                      <span>⚔️</span> 法庭言詞對決：性功能損害 vs 生殖機能定義
                    </span>
                    <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-rose-900/80 text-rose-200 border border-rose-700">
                      生殖機能本質辯論
                    </span>
                  </div>
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs leading-relaxed font-serif">
                    <div class="p-3 rounded-xl bg-white/10 space-y-1">
                      <div class="flex items-center gap-2">
                        <span class="font-sans font-bold text-rose-300">公訴檢察官赤狐女律師：</span>
                      </div>
                      <p>
                        「生殖器僅餘兩公分，丟入水溝無法接回，已無法進行正常性交，對男人生理性機能造成毀滅性殘害，自屬毀敗或嚴重減損生殖之機能，應成立重傷罪！」
                      </p>
                    </div>
                    <div class="p-3 rounded-xl bg-white/10 space-y-1">
                      <div class="flex items-center gap-2">
                        <span class="font-sans font-bold text-amber-300">辯護人金毛首席大律師：</span>
                      </div>
                      <p>
                        「刑法明文保護的是『生殖機能』而非『性快感或性交能力』！乙男睪丸健全、仍能製造精子及分泌賀爾蒙，生殖受孕能力未損，排尿亦正常，客觀上絕不該當重傷罪！」
                      </p>
                    </div>
                  </div>
                </div>

                <!-- 2. 🐾 柴柴法學教授 • 白話生活大解碼 -->
                <div class="p-4 sm:p-5 rounded-2xl bg-amber-50/90 dark:bg-[#1a1714] border-2 border-amber-300/80 dark:border-amber-900/50 space-y-2">
                  <div class="flex items-center gap-2.5">
                    <div class="w-8 h-8 rounded-full overflow-hidden border border-amber-400 shadow-2xs shrink-0 cursor-pointer" onclick="openLightbox()">
                      <img src="images/shiba_law_professor.jpg" alt="柴柴教授" class="w-full h-full object-cover" style="object-position: center 20%; transform: scale(1.38);">
                    </div>
                    <span class="font-black text-amber-950 dark:text-amber-200 text-xs sm:text-sm">🐾 柴柴法學教授 • 白話生活大解碼</span>
                  </div>
                  <div class="text-xs sm:text-sm text-slate-800 dark:text-slate-200 leading-relaxed font-serif space-y-2">
                    <p>
                      課本作者的神比喻太經典了：古代太監被去勢閹割，割的是睪丸，尿尿機能完全沒壞，不然太監豈不是全部得尿毒症死光了？
                    </p>
                    <p>
                      這題考點在於文義解釋的精確性：<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">「性功能（勃起爽感）」≠「生殖機能（製造精子生小孩）」</span>！法條寫的是「生殖之機能」，既然睪丸工廠沒壞、精子還能使人受孕，就不能擴張解釋為重傷汪！
                    </p>
                  </div>
                </div>

                <!-- 3. ⚖️ 金毛大律師 • 法庭攻防點評 -->
                <div class="p-4 sm:p-5 rounded-2xl bg-rose-50/80 dark:bg-rose-950/20 border border-rose-300 dark:border-rose-900/40 space-y-2">
                  <div class="flex items-center gap-2.5">
                    <div class="w-8 h-8 rounded-full overflow-hidden border border-rose-400 shadow-2xs shrink-0">
                      <img src="images/golden_case_attorney.jpg" alt="金毛律師" class="w-full h-full object-cover" style="object-position: center 20%; transform: scale(1.35);">
                    </div>
                    <span class="font-black text-rose-950 dark:text-rose-200 text-xs sm:text-sm">⚖️ 金毛大律師 • 法庭攻防點評</span>
                  </div>
                  <p class="text-xs sm:text-sm text-slate-800 dark:text-slate-200 leading-relaxed font-serif">
                    訴訟防守核心在於嚴格遵守罪刑法定原則！拿出最高法院 78 台上 3271 號判決作為鐵盾，死守「生殖機能限於製造精子生殖能力」，抗辯本案僅成立刑法第 277 條第 1 項普通傷害罪，阻絕 5 年起跳之重傷罪！
                  </p>
                </div>

                <!-- 4. 🛡️ 德牧法規巡查官 • 法規雷達查核 -->
                <div class="p-4 sm:p-5 rounded-2xl bg-blue-50/80 dark:bg-blue-950/20 border border-blue-300 dark:border-blue-900/40 space-y-2">
                  <div class="flex items-center gap-2.5">
                    <div class="w-8 h-8 rounded-full overflow-hidden border border-blue-400 shadow-2xs shrink-0">
                      <img src="images/shepherd_law_inspector.jpg" alt="德牧巡查官" class="w-full h-full object-cover" style="object-position: center 15%; transform: scale(1.4);">
                    </div>
                    <span class="font-black text-blue-950 dark:text-blue-200 text-xs sm:text-sm">🛡️ 德牧法規巡查官 • 法規雷達查核</span>
                  </div>
                  <div class="text-xs sm:text-sm text-slate-800 dark:text-slate-200 leading-relaxed font-serif space-y-1">
                    <p class="font-bold text-blue-950 dark:text-blue-300">【最高法院 78 台上 3271 號判決要旨雷達】</p>
                    <p>
                      判決明定：刑法第 10 條第 4 項第 5 款所稱生殖之機能，<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">係指製造精子、卵子及受孕之生殖能力而言</span>，非指性交之快感或勃起功能。
                    </p>
                  </div>
                </div>

                <!-- 5. 👨‍⚖️ 邊牧首席審判長 • 終審裁決一槌定音 -->
                <div class="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white border-2 border-indigo-400/80 shadow-md space-y-3">
                  <div class="flex items-center justify-between border-b border-indigo-500/40 pb-2">
                    <div class="flex items-center gap-2">
                      <div class="w-8 h-8 rounded-full overflow-hidden border border-indigo-300 shrink-0">
                        <img src="images/border_collie_chief_judge.jpg" alt="邊牧審判長" class="w-full h-full object-cover" style="object-position: center 25%; transform: scale(1.35);">
                      </div>
                      <span class="font-black text-amber-300 text-xs sm:text-sm">👨‍⚖️ 邊牧首席審判長 • 終審裁決一槌定音</span>
                    </div>
                    <span class="text-xs font-mono font-bold text-indigo-300">#法槌一敲誰與爭鋒</span>
                  </div>
                  <div class="text-xs sm:text-sm space-y-2 leading-relaxed font-sans">
                    <p class="font-bold text-white">
                      🔨 <span class="text-amber-300">【實體法定讞】</span>：乙男排尿機能未損，且睪丸製造精子機能完好，<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold text-white">甲女客觀上不該當刑法第 10 條第 4 項第 5 款之重傷罪</span>，僅成立普通傷害罪！
                    </p>
                    <p class="text-indigo-200">
                      💡 <strong>國考答題定錨：</strong>雙軌並陳！第一軌論「排尿機能（未受損）」；第二軌論「生殖機能（嚴格區分性功能 vs 生殖機能，引 78 台上 3271 決）」，論述條理分明必得高分！
                    </p>
                    <div class="p-2.5 rounded-xl bg-slate-950/60 border border-indigo-400/30 text-[11px] text-slate-300">
                      <span class="font-mono text-indigo-300 font-bold">📅 2026 最新法條動態備註：</span>現行刑法第 10 條第 4 項第 5 款要件至 2026 年維持有效，生殖機能之精準文義界線為刑法總則解釋學典範。
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </section>

          <!-- ═══════════════ 十三、案例 2-14：斷手送醫接回恢復良好無障礙，是否構成重傷？ (教材第 2-23 頁) ═══════════════ -->
          <section id="sec-p0ch2-sec2-case-2-14" class="scroll-mt-24 space-y-4">
            <div class="p-6 sm:p-7 rounded-3xl bg-white dark:bg-[#121827] border border-slate-200/90 dark:border-white/10 shadow-xs space-y-5">
              
              <div class="flex items-center justify-between border-b border-slate-200/80 dark:border-white/10 pb-3 flex-wrap gap-2">
                <div class="flex items-center gap-2.5">
                  <span class="w-3 h-3 rounded-full bg-indigo-600"></span>
                  <h3 class="text-base sm:text-lg font-black text-slate-900 dark:text-white tracking-wide">
                    案例 2-14：斷手送醫接回恢復良好無障礙，是否構成重傷？
                  </h3>
                </div>
                <span class="text-xs font-mono font-bold px-2.5 py-1 rounded-lg bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-800">
                  教材第 2-23 頁
                </span>
              </div>

              <!-- 案例事實卡片 -->
              <div class="p-4 sm:p-5 rounded-2xl bg-slate-50 dark:bg-[#161f30] border-l-[6px] border-l-indigo-500 space-y-2">
                <div class="text-xs font-bold text-slate-500 font-mono">CASE 2-14 FACT</div>
                <p class="text-sm sm:text-base font-serif text-slate-900 dark:text-slate-100 leading-relaxed font-bold">
                  甲將乙的手掌斬斷，不過乙送醫後透過手術接回，恢復狀況良好且不會留下日後功能障礙，是否構成重傷？
                </p>
              </div>

              <!-- 問題導引 原文核對 -->
              <div class="p-4 rounded-xl bg-amber-50/60 dark:bg-amber-950/30 border border-amber-200/60 dark:border-amber-900/40 text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-serif leading-relaxed">
                <strong class="text-amber-900 dark:text-amber-200 font-sans">【原書問題導引】：</strong>
                重傷應限於結果持續存在的情形，罪刑始能相當，否則就不是在處罰身體重大傷害，而是行為人令被害人感到持續失去肢體的驚嚇。不過後果持續存在毋須達到終其一生的程度，只要無法在可預見的期間內治癒即可。（28上1098例亦同）
              </div>

              <!-- ═══════════ 五位一體法學劇院：案例 2-14 ═══════════ -->
              <div class="space-y-3 pt-2">
                
                <!-- 1. ⚔️ 原被告言詞辯論 -->
                <div class="p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-slate-900 to-indigo-950 text-white border border-indigo-500/30 space-y-3 shadow-sm">
                  <div class="flex items-center justify-between border-b border-indigo-500/30 pb-2">
                    <span class="font-black text-amber-300 text-xs sm:text-sm flex items-center gap-1.5">
                      <span>⚔️</span> 法庭言詞對決：肢體離斷後手術接回之定性
                    </span>
                    <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-indigo-900/80 text-indigo-200 border border-indigo-700">
                      結果持續存在性
                    </span>
                  </div>
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs leading-relaxed font-serif">
                    <div class="p-3 rounded-xl bg-white/10 space-y-1">
                      <div class="flex items-center gap-2">
                        <span class="font-sans font-bold text-rose-300">公訴檢察官赤狐女律師：</span>
                      </div>
                      <p>
                        「行為人揮刀斬斷整隻手掌，當下手掌脫離肉體，一肢機能已客觀毀敗！被害人送醫接回全靠現代醫術之恩賜，不能拿醫生的功勞替兇手免除重傷罪責！」
                      </p>
                    </div>
                    <div class="p-3 rounded-xl bg-white/10 space-y-1">
                      <div class="flex items-center gap-2">
                        <span class="font-sans font-bold text-amber-300">辯護人金毛首席大律師：</span>
                      </div>
                      <p>
                        「重傷本質在於『結果重大且持續存在』！若手術接回且毫無功能障礙，被害人肢體健全，處罰重傷就變成在處罰『斷掌瞬間的驚嚇』，嚴重違反罪刑相當原則！」
                      </p>
                    </div>
                  </div>
                </div>

                <!-- 2. 🐾 柴柴法學教授 • 白話生活大解碼 -->
                <div class="p-4 sm:p-5 rounded-2xl bg-amber-50/90 dark:bg-[#1a1714] border-2 border-amber-300/80 dark:border-amber-900/50 space-y-2">
                  <div class="flex items-center gap-2.5">
                    <div class="w-8 h-8 rounded-full overflow-hidden border border-amber-400 shadow-2xs shrink-0 cursor-pointer" onclick="openLightbox()">
                      <img src="images/shiba_law_professor.jpg" alt="柴柴教授" class="w-full h-full object-cover" style="object-position: center 20%; transform: scale(1.38);">
                    </div>
                    <span class="font-black text-amber-950 dark:text-amber-200 text-xs sm:text-sm">🐾 柴柴法學教授 • 白話生活大解碼</span>
                  </div>
                  <div class="text-xs sm:text-sm text-slate-800 dark:text-slate-200 leading-relaxed font-serif space-y-2">
                    <p>
                      手砍下來又縫回去，完全沒後遺症，到底算不算重傷既遂？
                    </p>
                    <p>
                      課本作者引述李聖傑教授的精闢見解：重傷罪是處罰「身體重大傷害的結果」，如果傷害結果根本沒有持續存在，那就只是一時的生理創傷！判決重傷既遂必須是<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">無法在可預見的期間內治癒</span>，接回完好就不算重傷既遂汪！
                    </p>
                  </div>
                </div>

                <!-- 3. ⚖️ 金毛大律師 • 法庭攻防點評 -->
                <div class="p-4 sm:p-5 rounded-2xl bg-rose-50/80 dark:bg-rose-950/20 border border-rose-300 dark:border-rose-900/40 space-y-2">
                  <div class="flex items-center gap-2.5">
                    <div class="w-8 h-8 rounded-full overflow-hidden border border-rose-400 shadow-2xs shrink-0">
                      <img src="images/golden_case_attorney.jpg" alt="金毛律師" class="w-full h-full object-cover" style="object-position: center 20%; transform: scale(1.35);">
                    </div>
                    <span class="font-black text-rose-950 dark:text-rose-200 text-xs sm:text-sm">⚖️ 金毛大律師 • 法庭攻防點評</span>
                  </div>
                  <p class="text-xs sm:text-sm text-slate-800 dark:text-slate-200 leading-relaxed font-serif">
                    辯護攻防點在於主客觀分流！客觀上被害人已完全復原，毀敗要件不該當，重傷既遂絕不成立；若檢方主張行為人具重傷故意，頂多退回爭執重傷未遂（或普通傷害既遂），爭取自首或和解爭取減刑！
                  </p>
                </div>

                <!-- 4. 🛡️ 德牧法規巡查官 • 法規雷達查核 -->
                <div class="p-4 sm:p-5 rounded-2xl bg-blue-50/80 dark:bg-blue-950/20 border border-blue-300 dark:border-blue-900/40 space-y-2">
                  <div class="flex items-center gap-2.5">
                    <div class="w-8 h-8 rounded-full overflow-hidden border border-blue-400 shadow-2xs shrink-0">
                      <img src="images/shepherd_law_inspector.jpg" alt="德牧巡查官" class="w-full h-full object-cover" style="object-position: center 15%; transform: scale(1.4);">
                    </div>
                    <span class="font-black text-blue-950 dark:text-blue-200 text-xs sm:text-sm">🛡️ 德牧法規巡查官 • 法規雷達查核</span>
                  </div>
                  <div class="text-xs sm:text-sm text-slate-800 dark:text-slate-200 leading-relaxed font-serif space-y-1">
                    <p class="font-bold text-blue-950 dark:text-blue-300">【最高法院 28 上 1098 號判例雷達】</p>
                    <p>
                      判例要旨：毀敗係指生理機能完全永久喪失；<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">至若一時喪失機能而能治癒恢復者，非屬毀敗</span>。手術成功復原即排除毀敗之適用。
                    </p>
                  </div>
                </div>

                <!-- 5. 👨‍⚖️ 邊牧首席審判長 • 終審裁決一槌定音 -->
                <div class="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white border-2 border-indigo-400/80 shadow-md space-y-3">
                  <div class="flex items-center justify-between border-b border-indigo-500/40 pb-2">
                    <div class="flex items-center gap-2">
                      <div class="w-8 h-8 rounded-full overflow-hidden border border-indigo-300 shrink-0">
                        <img src="images/border_collie_chief_judge.jpg" alt="邊牧審判長" class="w-full h-full object-cover" style="object-position: center 25%; transform: scale(1.35);">
                      </div>
                      <span class="font-black text-amber-300 text-xs sm:text-sm">👨‍⚖️ 邊牧首席審判長 • 終審裁決一槌定音</span>
                    </div>
                    <span class="text-xs font-mono font-bold text-indigo-300">#法槌一敲誰與爭鋒</span>
                  </div>
                  <div class="text-xs sm:text-sm space-y-2 leading-relaxed font-sans">
                    <p class="font-bold text-white">
                      🔨 <span class="text-amber-300">【實體法定讞】</span>：手掌手術接回且恢復良好未留後續障礙者，因傷害結果未持續存在，<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold text-white">不構成重傷既遂罪</span>！應視主觀犯意論以普通傷害既遂罪（或重傷未遂罪）。
                    </p>
                    <p class="text-indigo-200">
                      💡 <strong>國考答題定錨：</strong>深入探討「重傷結果之持續存在性」與 28 上 1098 判例，說明若無功能障礙則排除毀敗既遂。
                    </p>
                    <div class="p-2.5 rounded-xl bg-slate-950/60 border border-indigo-400/30 text-[11px] text-slate-300">
                      <span class="font-mono text-indigo-300 font-bold">📅 2026 最新法條動態備註：</span>現代顯微手術發展日新月異，接回功能復原案之刑法評價持續依「結果持久性」穩定判斷至 2026 年。
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </section>

          <!-- ═══════════════ 十四、案例 2-15：小提琴絕世高手被切斷右手食指，是否構成重傷？ (教材第 2-23 頁) ═══════════════ -->
          <section id="sec-p0ch2-sec2-case-2-15" class="scroll-mt-24 space-y-4">
            <div class="p-6 sm:p-7 rounded-3xl bg-white dark:bg-[#121827] border border-slate-200/90 dark:border-white/10 shadow-xs space-y-5">
              
              <div class="flex items-center justify-between border-b border-slate-200/80 dark:border-white/10 pb-3 flex-wrap gap-2">
                <div class="flex items-center gap-2.5">
                  <span class="w-3 h-3 rounded-full bg-purple-600"></span>
                  <h3 class="text-base sm:text-lg font-black text-slate-900 dark:text-white tracking-wide">
                    案例 2-15：小提琴絕世高手被切斷右手食指，是否構成重傷？
                  </h3>
                </div>
                <span class="text-xs font-mono font-bold px-2.5 py-1 rounded-lg bg-purple-50 dark:bg-purple-950/60 text-purple-600 dark:text-purple-400 border border-purple-200 dark:border-purple-800">
                  教材第 2-23 頁
                </span>
              </div>

              <!-- 案例事實卡片 -->
              <div class="p-4 sm:p-5 rounded-2xl bg-slate-50 dark:bg-[#161f30] border-l-[6px] border-l-purple-500 space-y-2">
                <div class="text-xs font-bold text-slate-500 font-mono">CASE 2-15 FACT</div>
                <p class="text-sm sm:text-base font-serif text-slate-900 dark:text-slate-100 leading-relaxed font-bold">
                  甲為小提琴絕世高手，然其右手食指卻被乙切斷，終身無法演奏，但最基本的抓握功能都還健全，是否構成重傷？
                </p>
              </div>

              <!-- 問題導引 原文核對 -->
              <div class="p-4 rounded-xl bg-amber-50/60 dark:bg-amber-950/30 border border-amber-200/60 dark:border-amber-900/40 text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-serif leading-relaxed">
                <strong class="text-amber-900 dark:text-amber-200 font-sans">【原書問題導引】：</strong>
                有認為重傷應該置入個人功能的考量，因此成立重傷；也有認為刑法重傷之肢體機能應以一般人生理機能為客觀標準，不應因個人特殊職業而異。
              </div>

              <!-- ═══════════ 五位一體法學劇院：案例 2-15 ═══════════ -->
              <div class="space-y-3 pt-2">
                
                <!-- 1. ⚔️ 原被告言詞辯論 -->
                <div class="p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-slate-900 to-indigo-950 text-white border border-indigo-500/30 space-y-3 shadow-sm">
                  <div class="flex items-center justify-between border-b border-indigo-500/30 pb-2">
                    <span class="font-black text-amber-300 text-xs sm:text-sm flex items-center gap-1.5">
                      <span>⚔️</span> 法庭言詞對決：個人才能破壞 vs 客觀一般人基準
                    </span>
                    <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-purple-900/80 text-purple-200 border border-purple-700">
                      主觀才能 vs 客觀生理
                    </span>
                  </div>
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs leading-relaxed font-serif">
                    <div class="p-3 rounded-xl bg-white/10 space-y-1">
                      <div class="flex items-center gap-2">
                        <span class="font-sans font-bold text-rose-300">公訴檢察官赤狐女律師：</span>
                      </div>
                      <p>
                        「食指是國際級演奏家的藝術生命！被告切斷食指直接摧毀了其終生職業與社會存在價值，對被害人而言具有毀滅性損害，重傷評價應置入個人功能的實質考量，論以重傷！」
                      </p>
                    </div>
                    <div class="p-3 rounded-xl bg-white/10 space-y-1">
                      <div class="flex items-center gap-2">
                        <span class="font-sans font-bold text-amber-300">辯護人金毛首席大律師：</span>
                      </div>
                      <p>
                        「刑法必須維護客觀預測可能性與法的安定性！切斷一指抓握完好，對常人而言僅是普通傷害。若因被害人職業特殊而將相同傷害升格為重傷，嚴重違反罪刑法定與客觀機能標準！」
                      </p>
                    </div>
                  </div>
                </div>

                <!-- 2. 🐾 柴柴法學教授 • 白話生活大解碼 -->
                <div class="p-4 sm:p-5 rounded-2xl bg-amber-50/90 dark:bg-[#1a1714] border-2 border-amber-300/80 dark:border-amber-900/50 space-y-2">
                  <div class="flex items-center gap-2.5">
                    <div class="w-8 h-8 rounded-full overflow-hidden border border-amber-400 shadow-2xs shrink-0 cursor-pointer" onclick="openLightbox()">
                      <img src="images/shiba_law_professor.jpg" alt="柴柴教授" class="w-full h-full object-cover" style="object-position: center 20%; transform: scale(1.38);">
                    </div>
                    <span class="font-black text-amber-950 dark:text-amber-200 text-xs sm:text-sm">🐾 柴柴法學教授 • 白話生活大解碼</span>
                  </div>
                  <div class="text-xs sm:text-sm text-slate-800 dark:text-slate-200 leading-relaxed font-serif space-y-2">
                    <p>
                      斷了一根手指，對普通人來說還能拿碗拿筆，但對世界級提琴家來說，音樂夢徹底碎了！
                    </p>
                    <p>
                      這就是刑法哲學的大難題：到底該同情被害人的天才命運（個人功能考量），還是堅持法律一視同仁（客觀一般人標準）？多數通說認為刑法保護的是<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">一般人的基礎生理機能</span>，特殊才能的損失應該由民法幾千萬的高額損害賠償來填補，刑事罪名不能因人而異汪！
                    </p>
                  </div>
                </div>

                <!-- 3. ⚖️ 金毛大律師 • 法庭攻防點評 -->
                <div class="p-4 sm:p-5 rounded-2xl bg-rose-50/80 dark:bg-rose-950/20 border border-rose-300 dark:border-rose-900/40 space-y-2">
                  <div class="flex items-center gap-2.5">
                    <div class="w-8 h-8 rounded-full overflow-hidden border border-rose-400 shadow-2xs shrink-0">
                      <img src="images/golden_case_attorney.jpg" alt="金毛律師" class="w-full h-full object-cover" style="object-position: center 20%; transform: scale(1.35);">
                    </div>
                    <span class="font-black text-rose-950 dark:text-rose-200 text-xs sm:text-sm">⚖️ 金毛大律師 • 法庭攻防點評</span>
                  </div>
                  <p class="text-xs sm:text-sm text-slate-800 dark:text-slate-200 leading-relaxed font-serif">
                    辯護時死守「肢體機能客觀性」！若依個人職業定罪，砍斷畫家的手算重傷、砍斷乞丐的手算輕傷，將造成可怕的階級歧視與罪名浮動。堅定主張僅構成刑法第 277 條第 1 項普通傷害罪，職業損害另尋民事和解！
                  </p>
                </div>

                <!-- 4. 🛡️ 德牧法規巡查官 • 法規雷達查核 -->
                <div class="p-4 sm:p-5 rounded-2xl bg-blue-50/80 dark:bg-blue-950/20 border border-blue-300 dark:border-blue-900/40 space-y-2">
                  <div class="flex items-center gap-2.5">
                    <div class="w-8 h-8 rounded-full overflow-hidden border border-blue-400 shadow-2xs shrink-0">
                      <img src="images/shepherd_law_inspector.jpg" alt="德牧巡查官" class="w-full h-full object-cover" style="object-position: center 15%; transform: scale(1.4);">
                    </div>
                    <span class="font-black text-blue-950 dark:text-blue-200 text-xs sm:text-sm">🛡️ 德牧法規巡查官 • 法規雷達查核</span>
                  </div>
                  <div class="text-xs sm:text-sm text-slate-800 dark:text-slate-200 leading-relaxed font-serif space-y-1">
                    <p class="font-bold text-blue-950 dark:text-blue-300">【通說與實務客觀一般人機能標準雷達】</p>
                    <p>
                      刑法第 10 條第 4 項第 4 款「一肢之機能」，實務與通說均採<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">客觀一般人基準</span>。僅斷一指而其餘四指與手掌抓握機能健全者，不該當「一肢機能嚴重減損」。
                    </p>
                  </div>
                </div>

                <!-- 5. 👨‍⚖️ 邊牧首席審判長 • 終審裁決一槌定音 -->
                <div class="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white border-2 border-indigo-400/80 shadow-md space-y-3">
                  <div class="flex items-center justify-between border-b border-indigo-500/40 pb-2">
                    <div class="flex items-center gap-2">
                      <div class="w-8 h-8 rounded-full overflow-hidden border border-indigo-300 shrink-0">
                        <img src="images/border_collie_chief_judge.jpg" alt="邊牧審判長" class="w-full h-full object-cover" style="object-position: center 25%; transform: scale(1.35);">
                      </div>
                      <span class="font-black text-amber-300 text-xs sm:text-sm">👨‍⚖️ 邊牧首席審判長 • 終審裁決一槌定音</span>
                    </div>
                    <span class="text-xs font-mono font-bold text-indigo-300">#法槌一敲誰與爭鋒</span>
                  </div>
                  <div class="text-xs sm:text-sm space-y-2 leading-relaxed font-sans">
                    <p class="font-bold text-white">
                      🔨 <span class="text-amber-300">【實體法定讞】</span>：本庭採通說客觀一般人標準，抓握機能健全者<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold text-white">不構成重傷罪</span>，論以普通傷害罪！個人特殊藝術職業利益之重大損失，應由民事侵權賠償制度完整填補。
                    </p>
                    <p class="text-indigo-200">
                      💡 <strong>國考答題定錨：</strong>答題時務必呈現「個人功能考量說」vs「客觀一般機能標準說」之對決，並點出罪刑法定原則與刑罰明確性，結論採客觀說。
                    </p>
                    <div class="p-2.5 rounded-xl bg-slate-950/60 border border-indigo-400/30 text-[11px] text-slate-300">
                      <span class="font-mono text-indigo-300 font-bold">📅 2026 最新法條動態備註：</span>肢體機能立法解釋維持現行客觀標準，未因個別職業而設差別條款，規範穩定施行至 2026 年。
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </section>

          <!-- ═══════════════ 八、立法解釋：性交（§ 10 Ⅴ，教材第 2-24 頁） ═══════════════ -->
          <section id="sec-p0ch2-sec2-sexual-intercourse" class="scroll-mt-24 p-6 sm:p-7 rounded-2xl bg-white dark:bg-[#111726] border-l-[8px] border-l-rose-500 border border-slate-200/80 dark:border-white/10 shadow-xs space-y-6">
            
            <!-- 標題與標籤 -->
            <div class="flex items-center justify-between border-b border-slate-100 dark:border-white/10 pb-4 flex-wrap gap-2">
              <div class="flex items-center gap-2.5">
                <span class="w-8 h-8 rounded-xl bg-rose-100 dark:bg-rose-950/60 text-rose-700 dark:text-rose-300 flex items-center justify-center font-bold text-base shadow-xs">
                  🔞
                </span>
                <div>
                  <h3 class="text-base sm:text-lg font-black text-slate-900 dark:text-white">
                    三、性交（§ 10 Ⅴ）之立法解釋（教材第 2-24 頁）
                  </h3>
                  <p class="text-xs text-slate-500 dark:text-slate-400 font-serif">
                    主觀正當目的排除 • 雙向性別平權 • 客觀態樣與受體三孔道嚴格限制
                  </p>
                </div>
              </div>
              <div class="flex items-center gap-1.5 flex-wrap">
                <span class="text-[11px] px-2.5 py-1 rounded-full bg-rose-100 dark:bg-rose-950/80 text-rose-800 dark:text-rose-200 font-bold border border-rose-300 dark:border-rose-800 font-mono">
                  立法解釋 § 10 Ⅴ
                </span>
                <span class="text-[11px] px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold border border-slate-200 dark:border-slate-700">
                  教材 p.2-24
                </span>
              </div>
            </div>

            <!-- 法條原文呈現 -->
            <div class="p-4 rounded-xl bg-rose-50/70 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-900/40 text-xs sm:text-sm text-rose-950 dark:text-rose-200 leading-relaxed font-serif space-y-1.5">
              <div class="font-bold text-rose-900 dark:text-rose-300 flex items-center gap-1.5 font-sans text-xs">
                <span>📜</span> <strong>刑法第 10 條第 5 項（性交之定義）法定條文：</strong>
              </div>
              <p class="pl-2 border-l-2 border-rose-400 dark:border-rose-700">
                「稱性交者，謂<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">非基於正當目的</span>所為之下列性侵入行為：<br>
                一、以性器進入他人之性器、肛門或口腔，或使之接合之行為。<br>
                二、以性器以外之其他身體部位或器物進入他人之性器、肛門，或使之接合之行為。」
              </p>
            </div>

            <!-- 教材三大核心要件逐項忠實復刻 (1:1 課本內文) -->
            <div class="space-y-4">
              <div class="font-bold text-xs sm:text-sm text-slate-800 dark:text-slate-200 flex items-center gap-2">
                <span class="w-2 h-2 rounded-full bg-rose-500"></span>
                <span>教材核心內文逐項解析（三大構成審查要件）：</span>
              </div>

              <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                
                <!-- (一) 非基於正當目的 -->
                <div class="p-4.5 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border-2 border-rose-300/70 dark:border-rose-800/60 space-y-2.5 flex flex-col justify-between">
                  <div class="space-y-2">
                    <div class="flex items-center justify-between">
                      <span class="px-2 py-0.5 rounded bg-rose-100 dark:bg-rose-950 text-rose-800 dark:text-rose-300 font-mono font-bold text-[10px]">
                        主觀要件
                      </span>
                      <span class="text-[11px] font-bold text-rose-600 dark:text-rose-400">排除正當醫療</span>
                    </div>
                    <h4 class="text-sm font-black text-slate-900 dark:text-white">
                      (一) 非基於正當目的
                    </h4>
                    <p class="text-xs text-slate-700 dark:text-slate-200 leading-relaxed font-serif">
                      行為人主觀上必須<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">「非基於正當目的」</span>，用以排除基於正當目的的醫療行為，例如婦產科醫生的內診、小兒科護士幫嬰兒量肛溫等，可<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">自始排除在性交的定義之外，繼而無構成要件該當性</span>。
                    </p>
                  </div>
                  <div class="pt-2 border-t border-slate-200 dark:border-white/10 text-[11px] text-rose-700 dark:text-rose-300 font-medium">
                    💡 構成要件即行排除，無須留待阻卻違法階層！
                  </div>
                </div>

                <!-- (二) 性別無差異 -->
                <div class="p-4.5 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border-2 border-indigo-300/70 dark:border-indigo-800/60 space-y-2.5 flex flex-col justify-between">
                  <div class="space-y-2">
                    <div class="flex items-center justify-between">
                      <span class="px-2 py-0.5 rounded bg-indigo-100 dark:bg-indigo-950 text-indigo-800 dark:text-indigo-300 font-mono font-bold text-[10px]">
                        主客體要件
                      </span>
                      <span class="text-[11px] font-bold text-indigo-600 dark:text-indigo-400">性別全平等</span>
                    </div>
                    <h4 class="text-sm font-black text-slate-900 dark:text-white">
                      (二) 性別無差異性
                    </h4>
                    <p class="text-xs text-slate-700 dark:text-slate-200 leading-relaxed font-serif">
                      行為主體與行為客體之間，<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">沒有性別上的差異</span>，可以是男對女、男對男、女對女、女對男的各種可能情形。
                    </p>
                  </div>
                  <div class="pt-2 border-t border-slate-200 dark:border-white/10 text-[11px] text-indigo-700 dark:text-indigo-300 font-medium">
                    💡 破除舊法男性專屬加害、女性專屬被害之落後思維！
                  </div>
                </div>

                <!-- (三) 行為態樣與受體限制 -->
                <div class="p-4.5 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border-2 border-amber-300/70 dark:border-amber-800/60 space-y-2.5 flex flex-col justify-between">
                  <div class="space-y-2">
                    <div class="flex items-center justify-between">
                      <span class="px-2 py-0.5 rounded bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300 font-mono font-bold text-[10px]">
                        客觀行為要件
                      </span>
                      <span class="text-[11px] font-bold text-amber-600 dark:text-amber-400">受體三處限制</span>
                    </div>
                    <h4 class="text-sm font-black text-slate-900 dark:text-white">
                      (三) 進入接合與受體限制
                    </h4>
                    <p class="text-xs text-slate-700 dark:text-slate-200 leading-relaxed font-serif">
                      行為態樣部分，包括<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">「進入」</span>或<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">「使之接合」</span>，可以按照各種情形具體判斷，但注意<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">受體部分只有性器、肛門與口腔三者</span>。
                    </p>
                  </div>
                  <div class="pt-2 border-t border-slate-200 dark:border-white/10 text-[11px] text-amber-700 dark:text-amber-300 font-medium">
                    💡 侵入胸部、腋下、大腿間非受體，僅成立猥褻罪！
                  </div>
                </div>

              </div>
            </div>

            <!-- 🐾 柴柴法學教授 • 白話生活大解碼 -->
            <div class="p-4 sm:p-5 rounded-2xl bg-amber-50/70 dark:bg-amber-950/20 border border-amber-200/80 dark:border-amber-800/60 flex items-start gap-3.5">
              <div class="w-12 h-12 rounded-2xl overflow-hidden shrink-0 border-2 border-amber-400 shadow-sm bg-white cursor-pointer hover:scale-105 transition-transform" onclick="openLightbox()" title="點擊放大柴柴">
                <img src="images/shiba_law_professor.jpg" alt="柴柴法學教授" class="w-full h-full object-cover" style="object-position: center 20%; transform: scale(1.38);">
              </div>
              <div class="flex-1 space-y-1.5">
                <div class="flex items-center gap-2 flex-wrap">
                  <span class="font-black text-amber-950 dark:text-amber-200 text-sm sm:text-base">柴柴法學教授 • 白話生活大解碼</span>
                  <span class="text-[10px] px-2 py-0.5 rounded-full bg-amber-200 dark:bg-amber-900/60 text-amber-900 dark:text-amber-200 font-bold font-mono">考點核心透析</span>
                </div>
                <div class="space-y-2 text-xs sm:text-sm text-slate-800 dark:text-slate-100 leading-relaxed font-sans">
                  <p>
                    「同學們注意！§ 10 Ⅴ 在考試中有兩大經典大陷阱，柴柴老師幫大家劃重點汪：」
                  </p>
                  <p>
                    <strong>第一，正當醫療不是在第二階阻卻違法，而是在第一階就不該當！</strong><br>
                    很多初學者看到婦產科醫生內診，會反射性跑去寫刑法第 22 條『業務上正當行為阻卻違法』。錯！法條明文把<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">『非基於正當目的』</span>明定為主觀要件，醫生基於醫療診斷目的，<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">在客觀與主觀上自始就不是刑法所稱的性交</span>，構成要件直接不該當，根本不必拖到違法性階層！
                  </p>
                  <p>
                    <strong>第二，受體孔道嚴格只有三處（性器、肛門、口腔）！</strong><br>
                    國考常考：嫌犯拿棍棒硬塞被害人胸部乳溝、腋下或大腿縫隙，這算不算性交？答案是<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">絕對不能論以強制性交罪</span>！因為法條第 2 款明文受體只有『性器、肛門』，第 1 款加上『口腔』。侵入其餘部位無論多惡劣，只能論以『強制猥褻罪（§ 224）』，這是罪刑法定文義極限！
                  </p>
                </div>
              </div>
            </div>

            <!-- ⚖️ 金毛與德牧單欄垂直堆疊 (Strict Vertical Stacking) -->
            <div class="space-y-3">
              
              <!-- ⚖️ 金毛大律師 • 法庭攻防點評 -->
              <div class="p-3.5 sm:p-4 rounded-xl bg-rose-50/80 dark:bg-rose-950/20 border border-rose-300 dark:border-rose-800/60 flex items-start gap-3">
                <div class="w-11 h-11 rounded-full overflow-hidden shrink-0 border border-rose-400 shadow-sm bg-slate-900">
                  <img src="images/golden_case_attorney.jpg" alt="金毛辯護大律師" class="w-full h-full object-cover" style="object-position: center 20%; transform: scale(1.35);">
                </div>
                <div class="flex-1 space-y-1">
                  <div class="flex items-center gap-2 flex-wrap">
                    <span class="font-black text-rose-950 dark:text-rose-200 text-sm sm:text-base">金毛大律師 • 法庭攻防點評</span>
                    <span class="text-[10px] px-2 py-0.5 rounded bg-rose-200 dark:bg-rose-900/60 text-rose-900 dark:text-rose-200 font-bold font-mono">辯護必勝防線</span>
                  </div>
                  <div class="space-y-1.5 text-xs sm:text-sm text-slate-800 dark:text-slate-100 leading-relaxed font-sans">
                    <p class="font-bold text-rose-950 dark:text-rose-300">
                      【法庭罪名降階抗辯：性交 vs 猥褻之生死界線】
                    </p>
                    <p>
                      在妨害性自主實務訴訟中，強制性交罪為 3 年以上 10 年以下重罪，而強制猥褻罪為 6 月以上 5 年以下輕罪。辯護人在法庭上必抓受體要件：只要器物或身體部位未真正進入或接合於<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">性器、肛門或口腔</span>，務必強力抗辯不成立性交，爭取變更起訴法條降為猥褻罪，為當事人爭取緩刑機會！
                    </p>
                  </div>
                </div>
              </div>

              <!-- 🛡️ 德牧巡查官 • 法規雷達查核 -->
              <div class="p-3.5 sm:p-4 rounded-xl bg-blue-50/80 dark:bg-blue-950/20 border border-blue-300 dark:border-blue-800/60 flex items-start gap-3">
                <div class="w-11 h-11 rounded-full overflow-hidden shrink-0 border border-blue-400 shadow-sm bg-blue-100">
                  <img src="images/shepherd_law_inspector.jpg" alt="德牧法規巡查官" class="w-full h-full object-cover" style="object-position: center 15%; transform: scale(1.4);">
                </div>
                <div class="flex-1 space-y-1">
                  <div class="flex items-center gap-2 flex-wrap">
                    <span class="font-black text-blue-950 dark:text-blue-200 text-sm sm:text-base">德牧巡查官 • 法規雷達查核</span>
                    <span class="text-[10px] px-2 py-0.5 rounded bg-blue-200 dark:bg-blue-900/60 text-blue-900 dark:text-blue-200 font-bold font-mono">法條體系校驗</span>
                  </div>
                  <div class="space-y-1.5 text-xs sm:text-sm text-slate-800 dark:text-slate-100 leading-relaxed font-sans">
                    <p class="font-bold text-blue-950 dark:text-blue-300">
                      【刑法第 10 條第 5 項之修正歷程與關聯條文】
                    </p>
                    <p>
                      現行 § 10 Ⅴ 係於民國 88 年刑法妨害性自主罪章大幅修正時增訂，徹底揚棄傳統舊法「姦淫」限男對女之狹隘概念，將異性、同性、口交、肛交、異物侵入等全數納入規範。此一定義全面適用於刑法第 16 章妨害性自主罪（§ 221、§ 222、§ 224-1、§ 225 等），體系連貫嚴謹。
                    </p>
                  </div>
                </div>
              </div>

            </div>

            <!-- 👨‍⚖️ 邊牧審判長 • 終審裁決一槌定音 (講結論的吉祥物) -->
            <div class="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white border-2 border-indigo-400/80 shadow-md flex items-start gap-3.5 relative overflow-hidden">
              <div class="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl overflow-hidden shrink-0 border-2 border-indigo-400 shadow-md bg-slate-800">
                <img src="images/border_collie_chief_judge.jpg" alt="邊牧審判長" class="w-full h-full object-cover" style="object-position: center 25%; transform: scale(1.35);">
              </div>
              <div class="flex-1 space-y-2 relative z-10">
                <div class="flex items-center justify-between flex-wrap gap-2">
                  <div class="flex items-center gap-2 flex-wrap">
                    <span class="font-black text-amber-300 text-sm sm:text-base flex items-center gap-1.5">
                      <span>👨‍⚖️</span> 邊牧審判長 • 終審裁決一槌定音
                    </span>
                    <span class="text-[10.5px] px-2.5 py-0.5 rounded-full bg-amber-400/20 text-amber-300 font-extrabold border border-amber-400/40 font-mono">
                      立法解釋定錨
                    </span>
                  </div>
                  <span class="text-xs font-mono font-bold text-indigo-300/90">#法槌一敲誰與爭鋒</span>
                </div>
                <div class="p-3 rounded-xl bg-white/10 backdrop-blur-xs border border-white/15 space-y-1.5 text-xs sm:text-sm">
                  <p class="font-bold text-white">
                    🔨 <strong class="text-amber-300">【實體法定讞】</strong>
                    刑法 § 10 Ⅴ 性交定義立足於性自主權之絕對平等保護：具正當醫療目的者自始不該當；主客體性別雙向無差；受體嚴格鎖定性器、肛門與口腔三處！
                  </p>
                </div>
                <div class="p-2.5 rounded-xl bg-slate-950/60 border border-indigo-400/30 text-[11px] text-slate-300">
                  <span class="font-mono text-indigo-300 font-bold">📅 2026 最新法條動態備註：</span>刑法 § 10 Ⅴ 性交定義規範穩定施行至 2026 年無修正。另民國 112 年增訂刑法第 28 章之 1「妨害性隱私及不實性影像罪」，與妨害性自主罪章共同構成性隱私與性自主之完備防護網。
                </div>
              </div>
            </div>

            <!-- 🔦 【作者叮嚀】復刻專區 (教材第 2-24 頁底部) -->
            <div id="sec-p0ch2-sec2-author-note" class="p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-slate-100 via-slate-50 to-slate-100 dark:from-slate-900/90 dark:via-slate-800/80 dark:to-slate-900/90 border-2 border-slate-300 dark:border-slate-700 shadow-xs space-y-3">
              <div class="flex items-center gap-2 border-b border-slate-200 dark:border-slate-700/80 pb-3">
                <span class="text-xl">🔦</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900 dark:text-white">
                    【作者叮嚀】立法解釋的體系意涵與學習心法（教材第 2-24 頁）
                  </h4>
                  <p class="text-xs text-slate-500 dark:text-slate-400 font-serif">
                    陳奕廷律師筆記叮嚀 • 構成要件階層思維的嚴謹貫徹
                  </p>
                </div>
              </div>
              <div class="text-xs sm:text-sm text-slate-700 dark:text-slate-200 leading-relaxed font-serif space-y-2">
                <p>
                  研讀至此，我們已經將刑法總則最核心的立法解釋名詞（<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">公務員、重傷、性交</span>）全數掌握！立法者之所以在第 10 條預先立法定義，正是為了防範司法實務恣意擴張處罰。
                </p>
                <p>
                  請同學們特別體會刑法的嚴密邏輯：當條文將「非基於正當目的」預先寫入要件時，正當醫療行為根本毋庸勞駕第二階「業務上正當行為（§ 22）」來阻卻違法；當條文嚴格鎖定受體時，逾越受體範圍即受罪刑法定原則文義之絕對拘束！掌握立法解釋，就是掌握分則各罪構成要件該當性判斷的第一道咽喉！
                </p>
              </div>
            </div>

          </section>

          <!-- ═══════════════ 九、本節完結里程碑提示卡 (Milestone Callout) ═══════════════ -->
          <div class="p-6 sm:p-7 rounded-3xl border-2 border-dashed border-emerald-400 dark:border-emerald-700/80 bg-gradient-to-br from-emerald-50/60 via-teal-50/40 to-emerald-50/60 dark:from-emerald-950/30 dark:via-teal-950/20 dark:to-emerald-950/30 text-center space-y-3 shadow-xs">
            <div class="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-100 dark:bg-emerald-900/60 text-emerald-800 dark:text-emerald-200 text-xs font-bold border border-emerald-300 dark:border-emerald-800">
              <span>🎉 教材里程碑達成</span>
              <span class="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping"></span>
              <span>第零篇 第二章 第二節【全節圓滿完結】</span>
            </div>
            <h4 class="text-base sm:text-lg font-black text-slate-900 dark:text-white">
              第二節 刑法的解釋方法（教材第 2-15 ～ 2-24 頁）全數收錄完成！
            </h4>
            <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
              本節已完整收錄：司法解釋四大方法與動態拉扯、案例 2-7 至 2-15 全部 9 大實務爭點案例、合憲性與憲法取向解釋、鄧元貞案、刑法 § 10 名詞定義全體系（身分／授權／委託公務員判斷流程【表2】、黃榮堅教授個別化公務員學說、重傷列舉毀敗嚴重減損與概括條款、性交三大構成要件與作者叮嚀）。
            </p>
            <div class="pt-2 flex items-center justify-center gap-3 flex-wrap">
              <span class="text-xs font-mono font-bold text-emerald-700 dark:text-emerald-300 bg-white dark:bg-slate-900 px-3 py-1 rounded-xl border border-emerald-200 dark:border-emerald-800">
                ✅ 2-15 ～ 2-24 頁 100% 忠實收錄
              </span>
              <span class="text-xs font-mono font-bold text-emerald-700 dark:text-emerald-300 bg-white dark:bg-slate-900 px-3 py-1 rounded-xl border border-emerald-200 dark:border-emerald-800">
                🐾 四大犬系天王完整定錨
              </span>
            </div>
          </div>

          <!-- ═══════════════ 底部操作控制列 ═══════════════ -->
          <div class="flex items-center justify-between gap-4 pt-6 border-t border-slate-200/80 dark:border-white/10 flex-wrap">
            <button onclick="switchView('part0-ch2-sec1')" class="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 font-bold text-xs flex items-center gap-1.5 transition-all cursor-pointer">
              <span>← 上一節：第一節 刑法的適用效力</span>
            </button>
            <div class="flex items-center gap-2">
              <button onclick="copyPart0Ch2Sec2Notes()" class="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs flex items-center gap-1.5 shadow-sm shadow-indigo-600/20 transition-all cursor-pointer">
                <span>📋 複製第二節完整筆記</span>
              </button>
              <button onclick="switchView('part0-ch2')" class="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 font-bold text-xs flex items-center gap-1.5 transition-all cursor-pointer">
                <span>返回第二章總覽 ↑</span>
              </button>
            </div>
          </div>

        </div>
`;
