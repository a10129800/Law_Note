/**
 * view-part0-ch2-sec2.js
 * 第零篇 第二章 第二節 刑法的解釋方法 (教材第 2-14 ～ 2-19 頁)
 * 涵蓋：
 * 1. 法律解釋二分法（司法解釋 vs. 立法解釋 § 10）
 * 2. 四大司法解釋方法（文義、歷史、目的、體系）與罪刑法定vs.法益保護之拉扯架構圖
 * 3. 案例 2-7（撞人後留現場抽煙冒充目擊者案）
 * 4. 案例 2-8（甲乙兩男合意口交案：通姦罪構成要件解釋與釋字第 791 號廢除追蹤）
 * 5. 特殊的憲法解釋方法（合憲性解釋 vs. 憲法取向解釋、鄧元貞重婚案與釋字第 242 號）
 * 6. 立法解釋概說（§ 10 各款項）與公務員概念（一般化公務員三類型 vs. 個別化公務員概念、原書【表2】完整流程表）
 */
window.APP_VIEWS = window.APP_VIEWS || {};
window.APP_VIEWS['viewPart0Ch2Sec2'] = window.APP_VIEWS['part0Ch2Sec2'] = window.APP_VIEWS['part0-ch2-sec2'] = `
        <!-- VIEW: 第零篇 第二章 第二節 刑法的解釋方法 (教材第 2-14 ～ 2-19 頁) -->
        <div id="viewPart0Ch2Sec2" class="fade-enter hidden space-y-8">
          
          <!-- Breadcrumb & Back -->
          <div class="flex items-center justify-between gap-4 border-b border-slate-100 dark:border-white/[0.06] pb-3">
            <nav class="flex items-center gap-2 text-xs font-medium text-slate-400 flex-wrap">
              <button onclick="switchView('part-0')" class="hover:text-indigo-500 transition-colors">第零篇 刑法的運作、操作原理與法律效果</button>
              <span>/</span>
              <button onclick="switchView('part0-chapter-2')" class="hover:text-indigo-500 transition-colors">第二章 刑法的操作原理</button>
              <span>/</span>
              <span class="text-indigo-600 dark:text-indigo-400 font-bold">第二節 刑法的解釋方法</span>
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
              <span>第零篇 第二章・第二節</span>
              <span class="px-2 py-0.5 rounded-md bg-indigo-50 dark:bg-indigo-950/40 text-[11px] border border-indigo-200 dark:border-indigo-900/50">
                教材第 2-14 ～ 2-24 頁 原文精確完整收錄
              </span>
            </div>
            <h2 class="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
              第二節 刑法的解釋方法
            </h2>
            <p class="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
              全面收錄法律解釋之二元分類（司法解釋 vs. 立法解釋）、四大傳統司法解釋方法之拉扯圖解、案例 2-7 肇逃爭議、案例 2-8 通姦罪要件解釋與釋字 791 號追蹤、合憲性解釋與憲法取向解釋，以及刑法 § 10 公務員概念（身分、授權、委託）與【表2】判斷流程
            </p>
          </div>

          <!-- 一、法律解釋之二分法：司法解釋 vs. 立法解釋（教材第 2-14 頁 原文前言） -->
          <section id="sec-p0ch2-sec2-classification" class="space-y-6 pt-2">
            <div class="flex items-center gap-3">
              <span class="w-2 h-6 rounded-full bg-indigo-600"></span>
              <h3 class="text-lg sm:text-xl font-black text-slate-900 dark:text-white tracking-tight">
                一、法律解釋之二元體系：司法解釋 vs. 立法解釋（教材第 2-14 頁）
              </h3>
            </div>

            <!-- 天藍色概念焦點框 (Focus Box) -->
            <div class="box-legal-navy p-6 sm:p-8 rounded-3xl space-y-5">
              <div class="flex items-center justify-between border-b border-sky-300/40 dark:border-sky-700/40 pb-3">
                <div class="flex items-center gap-2">
                  <span class="text-xl">⚖️</span>
                  <h4 class="text-base sm:text-lg font-black text-[#032034] dark:text-white">
                    法律解釋的兩大途徑（教材第 2-14 頁 原文精華）
                  </h4>
                </div>
                <span class="px-2.5 py-0.5 rounded-full bg-white dark:bg-slate-800 text-[#0369a1] dark:text-sky-300 text-xs font-mono font-bold border border-sky-300 dark:border-sky-600 shadow-xs">
                  教材第 2-14 頁
                </span>
              </div>

              <blockquote class="border-l-4 border-[#0284c7] pl-4 py-1 text-xs sm:text-sm text-[#0c4a6e] dark:text-sky-100 leading-relaxed italic space-y-1">
                <p>
                  「法律的解釋方法有二：其一為針對既存條文適用上的司法解釋，另一為預先以條文方式加以定義的立法解釋。就刑法而言，前者涉及一般法律的法學解釋方法，後者則在 § 10 加以規範。」—— 陳奕廷《刑法總則【圖說系列】》第 2-14 頁
                </p>
              </blockquote>

              <!-- 兩大解釋途徑對比網格 -->
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                
                <!-- 途徑 1: 司法解釋 -->
                <div class="p-5 rounded-2xl bg-white/95 dark:bg-slate-900/90 border border-sky-200 dark:border-sky-800 space-y-3 shadow-xs">
                  <div class="flex items-center justify-between">
                    <span class="px-2 py-0.5 rounded bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 font-mono font-bold text-[11px] border border-blue-200 dark:border-blue-800">
                      既存條文適用
                    </span>
                    <span class="text-xs font-bold text-blue-600 dark:text-blue-400">法學方法論</span>
                  </div>
                  <h5 class="text-sm font-black text-slate-900 dark:text-white flex items-center gap-1.5">
                    <span>🏛️</span>
                    <span>1. 司法解釋（Judicial Interpretation）</span>
                  </h5>
                  <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    法官或司法實務在具體個案中，針對現行既存法律條文之文義與規範意旨所進行之法律適用闡釋。
                  </p>
                  <div class="pt-2 border-t border-slate-100 dark:border-slate-800 text-[11px] text-slate-500 dark:text-slate-400 space-y-1">
                    <div>• <strong>本質</strong>：涉及一般法律的法學解釋方法。</div>
                    <div>• <strong>四大工具</strong>：文義解釋、歷史解釋、目的解釋、體系解釋。</div>
                  </div>
                </div>

                <!-- 途徑 2: 立法解釋 -->
                <div class="p-5 rounded-2xl bg-white/95 dark:bg-slate-900/90 border border-sky-200 dark:border-sky-800 space-y-3 shadow-xs">
                  <div class="flex items-center justify-between">
                    <span class="px-2 py-0.5 rounded bg-purple-50 dark:bg-purple-950/60 text-purple-700 dark:text-purple-300 font-mono font-bold text-[11px] border border-purple-200 dark:border-purple-800">
                      刑法 § 10 明文規範
                    </span>
                    <span class="text-xs font-bold text-purple-600 dark:text-purple-400">法定名詞定義</span>
                  </div>
                  <h5 class="text-sm font-black text-slate-900 dark:text-white flex items-center gap-1.5">
                    <span>📜</span>
                    <span>2. 立法解釋（Legislative Interpretation）</span>
                  </h5>
                  <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    立法者在法典中，預先以明文條文方式對特定法律概念進行抽象界定與定義之規範。
                  </p>
                  <div class="pt-2 border-t border-slate-100 dark:border-slate-800 text-[11px] text-slate-500 dark:text-slate-400 space-y-1">
                    <div>• <strong>法源依據</strong>：刑法第 10 條【名詞定義】。</div>
                    <div>• <strong>具體內容</strong>：公務員、公文書、重傷、性交、電磁紀錄等法定標準。</div>
                  </div>
                </div>

              </div>
            </div>
          </section>

          <!-- 二、四大司法解釋方法與刑法特有之「拉扯」關係（教材第 2-14 ～ 2-15 頁） -->
          <section id="sec-p0ch2-sec2-methods" class="space-y-6 pt-2">
            <div class="flex items-center gap-3">
              <span class="w-2 h-6 rounded-full bg-blue-600"></span>
              <h3 class="text-lg sm:text-xl font-black text-slate-900 dark:text-white tracking-tight">
                二、四大司法解釋方法與刑法特有之「拉扯」關係（教材第 2-14 ～ 2-15 頁）
              </h3>
            </div>

            <div class="p-6 sm:p-7 rounded-3xl border-2 border-blue-200 dark:border-blue-800/80 border-l-[8px] border-l-blue-600 bg-white dark:bg-[#111726] shadow-md space-y-5">
              <div class="flex items-center justify-between border-b border-blue-100 dark:border-blue-900/50 pb-3">
                <div class="flex items-center gap-2">
                  <span class="text-xl">📖</span>
                  <div>
                    <span class="text-[11px] font-mono font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider block">
                      FOUR INTERPRETATION METHODS
                    </span>
                    <h4 class="text-base sm:text-lg font-black text-slate-900 dark:text-white">
                      四大司法解釋方法之相互角力與拉扯架構（教材第 2-14 ～ 2-15 頁）
                    </h4>
                  </div>
                </div>
                <span class="text-[10px] font-mono px-2.5 py-1 rounded-full bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300 font-bold border border-blue-200 dark:border-blue-800">
                  教材第 2-14 ～ 2-15 頁
                </span>
              </div>

              <!-- 🐣 四大司法解釋方法小白秒懂專區 -->
              <div class="rounded-2xl border-2 border-amber-300 dark:border-amber-700/80 bg-gradient-to-br from-amber-50/90 via-orange-50/60 to-yellow-50/70 dark:from-amber-950/40 dark:via-orange-950/30 dark:to-yellow-950/30 p-5 space-y-4 shadow-sm">
                <div class="flex items-center gap-2.5 border-b border-amber-200 dark:border-amber-800/60 pb-3">
                  <span class="text-2xl animate-bounce">🐣</span>
                  <div>
                    <h4 class="text-sm sm:text-base font-black text-amber-950 dark:text-amber-200">
                      【小白秒懂專區】四大司法解釋方法：法官判案到底怎麼讀法條？
                    </h4>
                    <p class="text-xs text-amber-800 dark:text-amber-300 font-medium">
                      四大白話口訣：文字是絕對紅線，目的是心臟靈魂，歷史是立委記憶，體系是左右協調！
                    </p>
                  </div>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-4 gap-3 text-xs sm:text-sm">
                  <div class="p-3.5 rounded-xl bg-white/95 dark:bg-slate-900/90 border border-amber-200 dark:border-amber-800/60 space-y-1.5 shadow-xs">
                    <span class="text-blue-700 dark:text-blue-400 font-black block flex items-center gap-1.5">
                      <span class="w-5 h-5 rounded-full bg-blue-100 dark:bg-blue-950 text-blue-800 dark:text-blue-200 flex items-center justify-center text-xs font-bold">1</span>
                      <span>文義解釋（字面極限）</span>
                    </span>
                    <p class="text-xs text-slate-700 dark:text-slate-200 leading-relaxed font-normal">
                      <strong>罪刑法定的絕對天花板！</strong> 中文字典怎麼寫就是邊界。法官解釋再怎麼合情合理，絕對不能超出文字「可能的字面含義」，否則就是違法類推！
                    </p>
                  </div>

                  <div class="p-3.5 rounded-xl bg-white/95 dark:bg-slate-900/90 border border-amber-200 dark:border-amber-800/60 space-y-1.5 shadow-xs">
                    <span class="text-emerald-700 dark:text-emerald-400 font-black block flex items-center gap-1.5">
                      <span class="w-5 h-5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-200 flex items-center justify-center text-xs font-bold">2</span>
                      <span>目的解釋（法益心臟）</span>
                    </span>
                    <p class="text-xs text-slate-700 dark:text-slate-200 leading-relaxed font-normal">
                      <strong>保護法益的終極追求！</strong> 法律不是死文字，法官要問：「這條罪是為了保護誰的安全？防範什麼壞事？」不能拘泥字面而讓壞人鑽漏洞。
                    </p>
                  </div>

                  <div class="p-3.5 rounded-xl bg-white/95 dark:bg-slate-900/90 border border-amber-200 dark:border-amber-800/60 space-y-1.5 shadow-xs">
                    <span class="text-purple-700 dark:text-purple-400 font-black block flex items-center gap-1.5">
                      <span class="w-5 h-5 rounded-full bg-purple-100 dark:bg-purple-950 text-purple-800 dark:text-purple-200 flex items-center justify-center text-xs font-bold">3</span>
                      <span>歷史解釋（立法原意）</span>
                    </span>
                    <p class="text-xs text-slate-700 dark:text-slate-200 leading-relaxed font-normal">
                      <strong>翻看當年立法院筆記！</strong> 查立法院草案說明、會議紀錄，了解當年立法者立這條法到底在想什麼，跟文義解釋最麻吉。
                    </p>
                  </div>

                  <div class="p-3.5 rounded-xl bg-white/95 dark:bg-slate-900/90 border border-amber-200 dark:border-amber-800/60 space-y-1.5 shadow-xs">
                    <span class="text-indigo-700 dark:text-indigo-400 font-black block flex items-center gap-1.5">
                      <span class="w-5 h-5 rounded-full bg-indigo-100 dark:bg-indigo-950 text-indigo-800 dark:text-indigo-200 flex items-center justify-center text-xs font-bold">4</span>
                      <span>體系解釋（前後協調）</span>
                    </span>
                    <p class="text-xs text-slate-700 dark:text-slate-200 leading-relaxed font-normal">
                      <strong>整部法典不能自相矛盾！</strong> 看看上一條、下一條、其他條文怎麼用詞，避免左手打右手。作為文義與目的拉扯時的輔助調解員。
                    </p>
                  </div>
                </div>
              </div>

              <blockquote class="p-4 rounded-2xl border-l-4 border-indigo-500 bg-indigo-50/50 dark:bg-indigo-950/30 text-xs sm:text-sm text-slate-800 dark:text-slate-100 leading-relaxed space-y-2">
                <p class="italic">
                  「一般的法律解釋方法，比如說『文義解釋（一切解釋的起點並構成解釋的最外延）』、『歷史解釋（探求立法者的意思）』、『目的解釋（確認規範的當代目的）』、『體系解釋（作為選定解釋的佐證或條文意涵的調整）』等，在刑法中皆完全可以適用。」
                </p>
                <p class="font-bold text-slate-900 dark:text-white">
                  「但因為『罪刑法定原則』之故，刑法更加重視『文義解釋』，且由於法益保護為刑法的終極目的，故相對地也重視『目的解釋』，所以刑法的解釋常在『文義解釋』與『目的解釋』間來回拉扯。」
                </p>
              </blockquote>

              <!-- 四大解釋方法四象限網格卡片 -->
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                
                <!-- 1. 文義解釋 -->
                <div class="p-4.5 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border-2 border-blue-500/40 space-y-2">
                  <div class="flex items-center justify-between">
                    <span class="px-2 py-0.5 rounded bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 font-mono font-bold text-[10px]">
                      起點與最外延
                    </span>
                    <span class="text-xs font-mono font-bold text-blue-600 dark:text-blue-400">METHOD 1</span>
                  </div>
                  <h4 class="text-sm font-black text-slate-900 dark:text-white flex items-center gap-1.5">
                    <span>🔤</span>
                    <span>文義解釋（Grammatical）</span>
                  </h4>
                  <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    <strong>一切解釋的起點，並構成法律解釋的最外延！</strong> 基於罪刑法定原則，任何法律解釋絕對不得超越法條字面的可能文義範圍，否則即構成禁止之不利類推適用。
                  </p>
                </div>

                <!-- 2. 目的解釋 -->
                <div class="p-4.5 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border-2 border-emerald-500/40 space-y-2">
                  <div class="flex items-center justify-between">
                    <span class="px-2 py-0.5 rounded bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 font-mono font-bold text-[10px]">
                      確認當代目的
                    </span>
                    <span class="text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400">METHOD 2</span>
                  </div>
                  <h4 class="text-sm font-black text-slate-900 dark:text-white flex items-center gap-1.5">
                    <span>🎯</span>
                    <span>目的解釋（Teleological）</span>
                  </h4>
                  <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    <strong>確認規範的當代目的！</strong> 由於法益保護為刑法的終極目的，探求條文旨在保護何種法益、防範何種實質危險，確保刑法發揮實質機能。
                  </p>
                </div>

                <!-- 3. 歷史解釋 -->
                <div class="p-4.5 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-2">
                  <div class="flex items-center justify-between">
                    <span class="px-2 py-0.5 rounded bg-slate-200/80 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-mono font-bold text-[10px]">
                      立法者原意
                    </span>
                    <span class="text-xs font-mono font-bold text-slate-400">METHOD 3</span>
                  </div>
                  <h4 class="text-sm font-black text-slate-900 dark:text-white flex items-center gap-1.5">
                    <span>📜</span>
                    <span>歷史解釋（Historical）</span>
                  </h4>
                  <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    <strong>探求立法者的意思！</strong> 參酌法條立法草案理由書、審查會紀錄與沿革背景，與文義解釋關係最為相近。
                  </p>
                </div>

                <!-- 4. 體系解釋 -->
                <div class="p-4.5 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-2">
                  <div class="flex items-center justify-between">
                    <span class="px-2 py-0.5 rounded bg-slate-200/80 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-mono font-bold text-[10px]">
                      佐證與調整
                    </span>
                    <span class="text-xs font-mono font-bold text-slate-400">METHOD 4</span>
                  </div>
                  <h4 class="text-sm font-black text-slate-900 dark:text-white flex items-center gap-1.5">
                    <span>🧩</span>
                    <span>體系解釋（Systematic）</span>
                  </h4>
                  <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    <strong>作為選定解釋的佐證或條文意涵的調整！</strong> 綜觀法律整體條文結構，避免體系評價矛盾，居於輔助地位。
                  </p>
                </div>

              </div>
            </div>
          </section>

          <!-- 三、原書架構圖：司法解釋的相互關係（教材第 2-15 頁 原文圖解） -->
          <section id="sec-p0ch2-sec2-diagram" class="space-y-6 pt-2">
            <div class="flex items-center gap-3">
              <span class="w-2 h-6 rounded-full bg-indigo-600"></span>
              <h3 class="text-lg sm:text-xl font-black text-slate-900 dark:text-white tracking-tight">
                三、原書架構圖：司法解釋的相互關係（教材第 2-15 頁）
              </h3>
            </div>

            <div class="p-6 rounded-3xl border border-slate-200 dark:border-white/[0.08] bg-white dark:bg-[#101623] shadow-sm space-y-5">
              <div class="flex items-center justify-between flex-wrap gap-2">
                <span class="text-xs font-bold text-slate-700 dark:text-slate-300 flex items-center gap-2 font-mono">
                  <span>📊</span>
                  <span>【原書圖說】司法解釋的相互關係與拉扯模型</span>
                </span>
                <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400 font-bold">
                  教材第 2-15 頁 原圖重現
                </span>
              </div>

              <!-- 互動拉扯架構畫布 -->
              <div class="p-5 sm:p-7 rounded-2xl bg-gradient-to-br from-slate-50 via-blue-50/20 to-indigo-50/30 dark:from-slate-950 dark:via-blue-950/20 dark:to-indigo-950/30 border border-slate-200/90 dark:border-slate-800 space-y-6">
                
                <!-- 上方兩大支柱：罪刑法定 vs 法益保護 -->
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
                  
                  <!-- 左翼：罪刑法定原則 (重視文義解釋與歷史解釋) -->
                  <div class="p-5 rounded-2xl bg-white dark:bg-slate-900 border-2 border-blue-500 shadow-sm space-y-4">
                    <div class="flex items-center justify-between border-b border-blue-100 dark:border-blue-900 pb-2">
                      <span class="text-xs font-black text-blue-700 dark:text-blue-300 uppercase tracking-wider font-mono">
                        🏛️ 罪刑法定原則
                      </span>
                      <span class="text-[10px] font-mono px-1.5 py-0.5 rounded bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 font-bold">起原 / 基礎</span>
                    </div>

                    <div class="grid grid-cols-2 gap-3 items-center">
                      <!-- 歷史解釋 -->
                      <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-center space-y-1">
                        <span class="text-[11px] font-mono text-slate-400 block font-bold">探求立法原意</span>
                        <span class="text-xs font-bold text-slate-800 dark:text-slate-200">歷史解釋</span>
                      </div>

                      <!-- 相近雙向箭頭 -->
                      <div class="flex items-center justify-center text-xs font-mono font-bold text-blue-600 dark:text-blue-400">
                        <span>← 相近 →</span>
                      </div>
                    </div>

                    <!-- 文義解釋 (中心樞紐) -->
                    <div class="p-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-center shadow-md shadow-blue-500/20 space-y-0.5">
                      <span class="text-[10px] uppercase font-mono tracking-wider opacity-90 block">起點與最外延</span>
                      <h5 class="text-sm font-black">文義解釋（起原）</h5>
                    </div>
                  </div>

                  <!-- 右翼：法益保護原則 (重視目的解釋) -->
                  <div class="p-5 rounded-2xl bg-white dark:bg-slate-900 border-2 border-emerald-500 shadow-sm space-y-4 flex flex-col justify-between">
                    <div class="flex items-center justify-between border-b border-emerald-100 dark:border-emerald-900 pb-2">
                      <span class="text-xs font-black text-emerald-700 dark:text-emerald-300 uppercase tracking-wider font-mono">
                        🛡️ 法益保護原則
                      </span>
                      <span class="text-[10px] font-mono px-1.5 py-0.5 rounded bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 font-bold">終極目的</span>
                    </div>

                    <!-- 目的解釋 -->
                    <div class="p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-800 text-center space-y-1">
                      <span class="text-[11px] font-mono text-emerald-600 dark:text-emerald-400 font-bold block">確認當代目的</span>
                      <h5 class="text-sm font-black text-emerald-900 dark:text-emerald-200">目的解釋</h5>
                    </div>

                    <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-xs text-slate-600 dark:text-slate-300 text-center">
                      法益保護乃刑法終極目的，探求實質保護範圍
                    </div>
                  </div>

                </div>

                <!-- 中間核心拉扯指示條 (文義解釋 vs 目的解釋) -->
                <div class="p-3 rounded-xl bg-amber-100 dark:bg-amber-950/60 border border-amber-300 dark:border-amber-800 text-center text-xs font-bold text-amber-900 dark:text-amber-200 flex items-center justify-center gap-2">
                  <span>⚡</span>
                  <span><strong>核心拉扯：</strong>文義解釋（罪刑法定起點） ⟷【相互拉扯・左右抗衡】⟷ 目的解釋（法益保護終極目的）</span>
                  <span>⚡</span>
                </div>

                <!-- 下方基石：體系解釋 (輔助地位) -->
                <div class="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-center space-y-2">
                  <div class="flex items-center justify-center gap-2 text-xs font-mono font-bold text-slate-500">
                    <span>↑ 幫助</span>
                    <span>•</span>
                    <span>體系解釋（輔助）</span>
                    <span>•</span>
                    <span>輔助 ↑</span>
                  </div>
                  <h5 class="text-xs sm:text-sm font-black text-slate-900 dark:text-white">
                    體系解釋（調整條文意涵，兼顧歷史解釋與目的解釋之輔助佐證）
                  </h5>
                </div>

              </div>
            </div>
          </section>

          <!-- 四、實例演練：案例 2-7（撞人後留現場抽煙案，教材第 2-15 頁 原文案例） -->
          <section id="sec-p0ch2-sec2-case-2-7" class="space-y-6 pt-2">
            <div class="flex items-center gap-3">
              <span class="w-2 h-6 rounded-full bg-amber-500"></span>
              <h3 class="text-lg sm:text-xl font-black text-slate-900 dark:text-white tracking-tight">
                四、實例演練：案例 2-7——文義與目的解釋之拉扯碰撞（教材第 2-15 頁）
              </h3>
            </div>

            <!-- 案例卡片容器 -->
            <div class="p-6 sm:p-7 rounded-3xl border-2 border-amber-300 dark:border-amber-700/80 border-l-[8px] border-l-amber-500 bg-white dark:bg-[#111726] shadow-md space-y-5">
              
              <!-- 案例標頭 -->
              <div class="flex items-center justify-between flex-wrap gap-2 border-b border-amber-100 dark:border-amber-900/40 pb-3">
                <div class="flex items-center gap-2.5">
                  <span class="text-2xl">🚗</span>
                  <div>
                    <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-500/10 text-amber-700 dark:text-amber-300 font-bold">
                      教材第 2-15 頁 原文案例
                    </span>
                    <h4 class="text-base sm:text-lg font-black text-slate-900 dark:text-white">
                      案例 2-7：撞人後留現場抽煙冒充目擊者案（肇事逃逸罪 § 185-4）
                    </h4>
                  </div>
                </div>

                <div class="flex items-center gap-2">
                  <button type="button" class="statute-popover-trigger px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-blue-600 dark:text-blue-400 text-xs font-semibold border border-slate-200 dark:border-slate-700 cursor-pointer" data-statute="185-4">
                    📜 刑法 § 185-4
                  </button>
                  <button type="button" onclick="copyCaseNote('case-2-7', this)" class="px-2.5 py-1 rounded-lg bg-amber-100 dark:bg-amber-900/60 hover:bg-amber-200 dark:hover:bg-amber-800 text-amber-800 dark:text-amber-200 text-xs font-bold transition-all shadow-xs flex items-center gap-1 cursor-pointer" title="複製 Anki/Notion 格式案例筆記">
                    <span>📋</span>
                    <span>複製筆記</span>
                  </button>
                </div>
              </div>

              <!-- 🐣 案例 2-7 肇逃拉扯小白秒懂專區 -->
              <div class="rounded-2xl border-2 border-amber-300 dark:border-amber-700/80 bg-gradient-to-br from-amber-50/90 via-orange-50/60 to-yellow-50/70 dark:from-amber-950/40 dark:via-orange-950/30 dark:to-yellow-950/30 p-5 space-y-4 shadow-sm">
                <div class="flex items-center gap-2.5 border-b border-amber-200 dark:border-amber-800/60 pb-3">
                  <span class="text-2xl animate-bounce">🐣</span>
                  <div>
                    <h4 class="text-sm sm:text-base font-black text-amber-950 dark:text-amber-200">
                      【小白秒懂專區】案例 2-7：撞了人沒跑，蹲在路邊抽菸裝路人，算「逃逸」嗎？
                    </h4>
                    <p class="text-xs text-amber-800 dark:text-amber-300 font-medium">
                      文義 vs 目的的真實對決：人沒走，但心跑了，算不算逃？
                    </p>
                  </div>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs sm:text-sm">
                  <div class="p-3.5 rounded-xl bg-white/95 dark:bg-slate-900/90 border border-amber-200 dark:border-amber-800/60 space-y-1.5 shadow-xs">
                    <span class="text-blue-700 dark:text-blue-300 font-black block flex items-center gap-1.5">
                      <span class="w-5 h-5 rounded-full bg-blue-100 dark:bg-blue-950 text-blue-800 dark:text-blue-200 flex items-center justify-center text-xs font-bold">1</span>
                      <span>文義解釋說：不算逃！</span>
                    </span>
                    <p class="text-xs text-slate-700 dark:text-slate-200 leading-relaxed font-normal">
                      「逃逸」兩字國語字典寫得清清楚楚，就是「腳底抹油、離開現場」。甲全程蹲在路邊抽菸，腳步根本沒挪開！硬說蹲著抽菸叫逃逸，就是超越文字最外延的違法類推！
                    </p>
                  </div>

                  <div class="p-3.5 rounded-xl bg-white/95 dark:bg-slate-900/90 border border-amber-200 dark:border-amber-800/60 space-y-1.5 shadow-xs">
                    <span class="text-emerald-700 dark:text-emerald-300 font-black block flex items-center gap-1.5">
                      <span class="w-5 h-5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-200 flex items-center justify-center text-xs font-bold">2</span>
                      <span>目的解釋說：這就是逃！</span>
                    </span>
                    <p class="text-xs text-slate-700 dark:text-slate-200 leading-relaxed font-normal">
                      當初立這條罪是為了保護傷者生命、釐清肇事責任。甲把撞爛的車藏起來、隱匿身分還騙警察往東邊抓人，被害人照樣無人救助，實質上就是「責任與身分的全面逃脫」！
                    </p>
                  </div>

                  <div class="p-3.5 rounded-xl bg-white/95 dark:bg-slate-900/90 border border-amber-200 dark:border-amber-800/60 space-y-1.5 shadow-xs">
                    <span class="text-amber-700 dark:text-amber-300 font-black block flex items-center gap-1.5">
                      <span class="w-5 h-5 rounded-full bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-200 flex items-center justify-center text-xs font-bold">3</span>
                      <span>國考閱卷老師最愛看點</span>
                    </span>
                    <p class="text-xs text-slate-700 dark:text-slate-200 leading-relaxed font-normal">
                      遇到這題千萬別只寫一種結論！<strong>必須「兩說並陳」</strong>：先寫文義嚴格限制，再寫目的實質保護；目前實務多採實質脫逃肯定說，學說則強調罪刑法定邊界，拿到最高分！
                    </p>
                  </div>
                </div>
              </div>

              <!-- 教材原文案件事實 -->
              <div class="space-y-2">
                <span class="text-xs font-bold text-slate-500 uppercase tracking-wider font-mono flex items-center gap-1">
                  <span>📌</span>
                  <span>案件事實（教材第 2-15 頁 原文）</span>
                </span>
                <blockquote class="p-4 rounded-2xl border-l-4 border-amber-500 bg-amber-50/50 dark:bg-amber-950/30 text-xs sm:text-sm text-slate-800 dark:text-slate-200 leading-relaxed italic">
                  「甲駕駛汽車不當撞傷路人乙，乙倒在路中央，地上碎片狼藉，甲將汽車駛並於一旁暗處後，便在蹲在肇事現場旁的人行道上抽煙。待一小時後警察才經民眾通報而來到現場，並對一旁的甲詢問犯人去處，甲答稱自己是車禍目擊者，目睹肇事者已駕車往東方加速逃離。試問甲是否構成肇事逃逸罪？」
                </blockquote>
              </div>

              <!-- 教材原文問題導引 -->
              <div class="space-y-2">
                <span class="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider font-mono flex items-center gap-1">
                  <span>◀</span>
                  <span>問題導引（教材第 2-15 頁 原文分析）</span>
                </span>
                <div class="p-4 rounded-2xl bg-indigo-50/50 dark:bg-indigo-950/30 border border-indigo-200/80 dark:border-indigo-900/50 space-y-2 text-xs sm:text-sm text-slate-700 dark:text-slate-200 leading-relaxed font-medium">
                  <p>
                    「『逃逸』按文義解釋應是積極的逃跑動作，甲既未逃跑，無法吻合文義解釋。但探求本罪之目的，無論對保護法益採取何種見解，甲均放任法益侵害發生，其行為應屬於本罪所要掌握的態樣。此時便發生文義解釋與目的解釋的來回拉扯。」
                  </p>
                </div>
              </div>

              <!-- 深度對照拆解：文義 vs 目的解釋在案例 2-7 的拉扯角力 -->
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                
                <!-- 角度 1: 文義解釋角度 -->
                <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-2">
                  <div class="flex items-center justify-between">
                    <span class="text-xs font-bold text-blue-600 dark:text-blue-400 font-mono">文義解釋立場</span>
                    <span class="px-2 py-0.5 rounded bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400 font-mono font-bold text-[10px]">罪刑法定</span>
                  </div>
                  <h5 class="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
                    甲並未離開現場，不合「逃逸」客觀文義
                  </h5>
                  <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    「逃逸」在一般社會通念與字面文義上，指「積極逃離、離開現場以逃避責任」。甲全程蹲在人行道上抽煙並未移動離開，若將留在現場也解釋為「逃逸」，將超越字面可能文義的最外延，有違罪刑法定原則。
                  </p>
                </div>

                <!-- 角度 2: 目的解釋角度 -->
                <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-2">
                  <div class="flex items-center justify-between">
                    <span class="text-xs font-bold text-emerald-600 dark:text-emerald-400 font-mono">目的解釋立場</span>
                    <span class="px-2 py-0.5 rounded bg-emerald-50 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 font-mono font-bold text-[10px]">法益保護</span>
                  </div>
                  <h5 class="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
                    放任法益危險，實質該當本罪掌握態樣
                  </h5>
                  <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    本罪規範目的在於促使肇事者履行救護義務、確保被害人生命身體法益，並便於確認責任。甲藏匿車輛、偽裝目擊者誤導警察，形同徹底隱匿身分並放任乙陷於無助，實質具備本罪可罰之違法內涵。
                  </p>
                </div>

              </div>

              <!-- 2026 現行法規與實務發展查核 -->
              <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 space-y-1.5 text-xs">
                <div class="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-1">
                  <span class="font-bold text-slate-700 dark:text-slate-300 flex items-center gap-1 text-[11.5px]">
                    <span>📌</span>
                    <span>【2026 現行法規與司法實務追蹤：刑法 § 185-4】</span>
                  </span>
                  <span class="px-2 py-0.5 rounded bg-emerald-50 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 font-mono font-bold text-[10px]">
                    釋字第 777 號後新法
                  </span>
                </div>
                <div class="space-y-1 text-slate-600 dark:text-slate-300 text-[11px] leading-relaxed">
                  <div>• <strong>法條最新狀態</strong>：刑法 § 185-4 於 110 年 5 月 28 日修正施行，明訂「發生交通事故，致人傷害而逃逸者處六月以上五年以下有期徒刑；致重傷或死亡者處一年以上七年以下」。</div>
                  <div>• <strong>最高法院目前實務</strong>：實務裁判多數認為行為人縱使未離開現場，若故意隱瞞肇事身分、冒充路人甚至誤導員警偵查，仍屬逃避責任之實質脫逃，可能認定成立肇事逃逸；惟學說嚴格本於罪刑法定，主張應透過修法或論以遺棄罪（§ 294）評價，不可逾越文義邊界。</div>
                </div>
              </div>

            </div>
          </section>

          <!-- 五、實例演練：案例 2-8（甲男與有配偶之乙男合意口交案，教材第 2-16 ～ 2-17 頁） -->
          <section id="sec-p0ch2-sec2-case-2-8" class="space-y-6 pt-2">
            <div class="flex items-center gap-3">
              <span class="w-2 h-6 rounded-full bg-rose-500"></span>
              <h3 class="text-lg sm:text-xl font-black text-slate-900 dark:text-white tracking-tight">
                五、實例演練：案例 2-8——通姦罪構成要件之多重法律解釋方法（教材第 2-16 ～ 2-17 頁）
              </h3>
            </div>

            <!-- 案例卡片容器 -->
            <div class="p-6 rounded-3xl border-2 border-rose-500/40 bg-white dark:bg-[#101623] shadow-sm space-y-5">
              
              <!-- 案例標頭 -->
              <div class="flex items-center justify-between flex-wrap gap-2 border-b border-slate-100 dark:border-white/[0.06] pb-3">
                <div class="flex items-center gap-2.5">
                  <span class="text-xl">⚖️</span>
                  <div>
                    <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-rose-500/10 text-rose-700 dark:text-rose-300 font-bold">
                      教材第 2-16 ～ 2-17 頁
                    </span>
                    <h4 class="text-base sm:text-lg font-black text-slate-900 dark:text-white">
                      案例 2-8：男男合意口交案——通姦罪構成要件解釋（刑法 § 239 原文爭點剖析）
                    </h4>
                  </div>
                </div>

                <div class="flex items-center gap-2">
                  <button type="button" class="statute-popover-trigger px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-rose-600 dark:text-rose-400 text-xs font-semibold border border-slate-200 dark:border-slate-700 cursor-pointer" data-statute="239">
                    📜 刑法 § 239 (已廢止)
                  </button>
                  <button type="button" onclick="copyCaseNote('case-2-8', this)" class="px-2.5 py-1 rounded-lg bg-rose-100 dark:bg-rose-900/60 hover:bg-rose-200 dark:hover:bg-rose-800 text-rose-800 dark:text-rose-200 text-xs font-bold transition-all shadow-xs flex items-center gap-1 cursor-pointer" title="複製 Anki/Notion 格式案例筆記">
                    <span>📋</span>
                    <span>複製筆記</span>
                  </button>
                </div>
              </div>

              <!-- 教材原文案件事實 -->
              <div class="space-y-2">
                <span class="text-xs font-bold text-slate-500 uppercase tracking-wider font-mono flex items-center gap-1">
                  <span>📌</span>
                  <span>案件事實（教材第 2-16 頁 原文）</span>
                </span>
                <blockquote class="p-4 rounded-2xl border-l-4 border-rose-500 bg-rose-50/50 dark:bg-rose-950/30 text-xs sm:text-sm text-slate-800 dark:text-slate-200 leading-relaxed italic">
                  「甲男與有配偶之乙男在合意下為口交行為，試問甲、乙是否構成通姦（與相姦）罪？」
                </blockquote>
              </div>

              <!-- 教材原文問題導引 -->
              <div class="space-y-4">
                <span class="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider font-mono flex items-center gap-1">
                  <span>◀</span>
                  <span>問題導引（教材第 2-16 頁 原文分析）</span>
                </span>
                
                <div class="p-4 rounded-2xl bg-indigo-50/50 dark:bg-indigo-950/30 border border-indigo-200/80 dark:border-indigo-900/50 text-xs sm:text-sm text-slate-700 dark:text-slate-200 leading-relaxed">
                  本問題涉及刑法通姦罪（§ 239）構成要件的解釋，其規定「有配偶而與人通姦者以及相姦者」成立通姦罪。書中從兩大層次抽絲剝繭：
                </div>

                <!-- 兩大爭點對決網格 -->
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                  
                  <!-- 爭點 (一)：通姦＝性交？ -->
                  <div class="p-5 rounded-2xl bg-white dark:bg-slate-900/90 border-2 border-rose-200 dark:border-rose-900/60 space-y-3">
                    <div class="flex items-center justify-between">
                      <span class="text-xs font-black text-rose-700 dark:text-rose-300 font-mono">爭點 (一)</span>
                      <span class="px-2 py-0.5 rounded bg-rose-100 dark:bg-rose-950 text-rose-700 dark:text-rose-300 text-[10px] font-bold">
                        【文義＋歷史 vs. 目的＋體系】
                      </span>
                    </div>
                    <h5 class="text-sm font-black text-slate-900 dark:text-white">
                      「通姦＝性交」？口交是否該當「姦」？
                    </h5>
                    
                    <div class="space-y-2.5 text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                      <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800 space-y-1">
                        <span class="font-bold text-blue-600 dark:text-blue-400 block">• 文義＋歷史解釋（狹義說・實務見解）：</span>
                        按「姦」字之文義，係專指<strong>性器官的接合</strong>，而性交範圍較為廣泛。民國 88 年刑法修正時，將妨害性自主與妨害風化罪章內的「姦淫」二字改為「性交」，<strong>惟獨通姦罪的文字用語，依據歷史解釋，似乎立法者係有意省略</strong>（實務見解採此說：台灣高等法院 91 年法律座談會）。
                      </div>
                      <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800 space-y-1">
                        <span class="font-bold text-emerald-600 dark:text-emerald-400 block">• 目的＋體系解釋（廣義說・學理見解）：</span>
                        若就體系解釋而論，既然妨害性自主與妨害風化罪章內「姦淫」均改為「性交」，妨害家庭罪章並無特異其趣之處，自然應採與性交相同之解釋；且<strong>通姦罪之目的在於保護家庭法益，無論是性器接合或口交、肛交，都會造成家庭和諧破壞</strong>，故應採較廣義解釋。
                      </div>
                    </div>
                  </div>

                  <!-- 爭點 (二)：是否限於異性之間？ -->
                  <div class="p-5 rounded-2xl bg-white dark:bg-slate-900/90 border-2 border-purple-200 dark:border-purple-900/60 space-y-3">
                    <div class="flex items-center justify-between">
                      <span class="text-xs font-black text-purple-700 dark:text-purple-300 font-mono">爭點 (二)</span>
                      <span class="px-2 py-0.5 rounded bg-purple-100 dark:bg-purple-950 text-purple-700 dark:text-purple-300 text-[10px] font-bold">
                        【文義＋體系 vs. 目的】
                      </span>
                    </div>
                    <h5 class="text-sm font-black text-slate-900 dark:text-white">
                      是否限於異性之間？同性通姦是否該當？
                    </h5>

                    <div class="space-y-2.5 text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                      <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800 space-y-1">
                        <span class="font-bold text-blue-600 dark:text-blue-400 block">• 文義＋體系解釋（不限異性）：</span>
                        按條文文義，係指「與人通姦」，<strong>並未要求通姦者性別必須相異，自然兼及異性與同性</strong>；依體系解釋，§ 231 II 規定「使人為猥褻之行為...」其「人」亦兼及男女兩性，通姦罪殊無特別解釋之必要。
                      </div>
                      <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800 space-y-1">
                        <span class="font-bold text-amber-600 dark:text-amber-400 block">• 目的解釋（舊實務見解・限異性）：</span>
                        若就目的解釋而言，本罪係保護婚姻圓滿不可侵犯性，<strong>既然婚姻僅存在異性之間，且我國尚未允准同性間之婚姻，故通姦罪自然僅限於異性之間</strong>（實務見解採此說：法務部 87 法檢二字第 02560 號）。
                      </div>
                    </div>
                  </div>

                </div>
              </div>

              <!-- 原書作者叮嚀卡片 (教材第 2-16 ～ 2-17 頁 原文精闢反思) -->
              <div class="p-5 rounded-2xl bg-amber-50/80 dark:bg-amber-950/40 border-2 border-amber-400/60 space-y-3">
                <div class="flex items-center gap-2 text-amber-800 dark:text-amber-200">
                  <span class="text-lg">💡</span>
                  <h5 class="text-sm font-black tracking-tight">【作者叮嚀】實務見解之荒謬反思與目的解釋的正確認知（教材第 2-16 ～ 2-17 頁）</h5>
                </div>
                <blockquote class="text-xs sm:text-sm text-amber-900 dark:text-amber-100 leading-relaxed italic border-l-4 border-amber-500 pl-3.5 py-0.5 space-y-2">
                  <p>
                    「其實實務見解的看法也有點奇怪，若通姦罪存在的目的是婚姻圓滿不可侵犯性，那無論配偶是與異性或同性發生關係，都應該會使婚姻關係破裂才是。難道只有男女配會讓太太感覺不安與難過，男男配就不會嗎？」
                  </p>
                  <p>
                    「否則按照實務見解，太太在發現乙男為丈夫甲口交的驚人事實後，應該只會很欣慰的說：『<strong>我的婚姻真是堅若磐石呀！丈夫只敢找男人，不敢玩女人！</strong>』豈不哂哉。」
                  </p>
                  <p class="font-bold not-italic pt-1 text-amber-950 dark:text-amber-50">
                    「因此若正確地操作目的解釋，應會得出『不限異性之間』的結論才是。就此而言，文義、體系與目的解釋均導出相同看法。」
                  </p>
                </blockquote>
              </div>

              <!-- 2026 現行法規與憲法法庭重大里程碑追蹤 -->
              <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 space-y-2 text-xs">
                <div class="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-1.5">
                  <span class="font-bold text-slate-800 dark:text-slate-200 flex items-center gap-1.5 text-[11.5px]">
                    <span>⚖️</span>
                    <span>【2026 現行法規與憲法裁判重大查核：通姦罪除刑化與同婚合法化】</span>
                  </span>
                  <span class="px-2 py-0.5 rounded bg-rose-100 dark:bg-rose-950 text-rose-700 dark:text-rose-300 font-mono font-bold text-[10px]">
                    司法院釋字第 791 號
                  </span>
                </div>
                <div class="space-y-1.5 text-slate-600 dark:text-slate-300 text-[11px] leading-relaxed">
                  <div>• <strong>大法官釋字第 791 號解釋（109.05.29）</strong>：大法官明確宣告刑法第 239 條通姦罪違憲立即失效！理由在於通姦罪對憲法第 22 條保障之性自主權構成嚴重干預，國家動用刑罰介入私德領域違反比例原則，且刑事訴訟法第 239 條但書對配偶撤回告訴效力不及於相姦人亦違反平等原則。</div>
                  <div>• <strong>立法院正式刪除條文</strong>：立法院於 <strong>民國 110 年 6 月 16 日公布刪除刑法第 239 條</strong>，通姦在台灣已全面除刑化，回歸民法侵權行為損害賠償評價。</div>
                  <div>• <strong>同性婚姻合法化</strong>：我國已於民國 108 年 5 月 24 日施行《司法院釋字第 748 號解釋施行法》，法律正式保障同性配偶之婚姻關係，婚姻法益已不再受限於異性。</div>
                </div>
              </div>

            </div>
          </section>

          <!-- 六、特殊的憲法解釋方法：合憲性解釋 vs. 憲法取向解釋（教材第 2-17 頁） -->
          <section id="sec-p0ch2-sec2-constitutional" class="space-y-6 pt-2">
            <div class="flex items-center gap-3">
              <span class="w-2 h-6 rounded-full bg-emerald-600"></span>
              <h3 class="text-lg sm:text-xl font-black text-slate-900 dark:text-white tracking-tight">
                六、特殊的憲法解釋方法：合憲性解釋 vs. 憲法取向解釋（教材第 2-17 頁）
              </h3>
            </div>

            <div class="p-6 rounded-3xl border border-slate-200 dark:border-white/[0.08] bg-white dark:bg-[#101623] shadow-sm space-y-6">
              
              <!-- 前言引言 -->
              <div class="p-4.5 rounded-2xl bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border border-emerald-500/20 space-y-2">
                <span class="text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider block">
                  CONSTITUTIONAL INTERPRETATION METHODS
                </span>
                <p class="text-xs sm:text-sm text-slate-700 dark:text-slate-200 leading-relaxed font-medium">
                  「任何法律解釋都離不開憲法，因此『特殊的憲法解釋方法』在刑法解釋中當然有適用空間。此類解釋方法有二：『<strong>合憲性解釋</strong>』與『<strong>憲法取向解釋</strong>』。」—— 陳奕廷《刑法總則【圖說系列】》第 2-17 頁
                </p>
              </div>

              <!-- 兩大特殊憲法解釋方法深度對比網格 -->
              <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
                
                <!-- 1. 合憲性解釋 -->
                <div class="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border-2 border-emerald-500/40 space-y-3">
                  <div class="flex items-center justify-between">
                    <span class="px-2.5 py-0.5 rounded-md bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 font-mono font-bold text-[11px]">
                      避免違憲宣告
                    </span>
                    <span class="text-xs font-bold text-emerald-600 dark:text-emerald-400">權力相互尊重</span>
                  </div>
                  
                  <h4 class="text-base font-black text-slate-900 dark:text-white flex items-center gap-1.5">
                    <span>🏛️</span>
                    <span>1. 合憲性解釋（Verfassungskonforme Auslegung）</span>
                  </h4>

                  <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    指一項法律條文的解釋，若有多種可能結果，<strong>只要其中一種結果可以避免宣告該項法律條文違憲時，便應選擇其作為裁判之結論</strong>，而不可採納其他可能導致違憲的法律解釋，此乃「權力相互尊重」的體現（如釋字第 509 號誹謗罪實質真實惡意原則）。
                  </p>

                  <!-- 兩大界線 -->
                  <div class="pt-2 border-t border-slate-200 dark:border-slate-800 space-y-1.5 text-xs">
                    <span class="font-bold text-rose-600 dark:text-rose-400 flex items-center gap-1 text-[11px]">
                      <span>⚠️</span>
                      <span>合憲性解釋之兩大嚴格界線（釋字第 585 號許宗力大法官部分不同意見書）：</span>
                    </span>
                    <div class="pl-3 border-l-2 border-rose-400/60 space-y-1 text-slate-600 dark:text-slate-300 text-[11.5px]">
                      <div><strong>界線一：</strong>不得逾越文字可能合理理解的範圍（文義外延紅線）。</div>
                      <div><strong>界線二：</strong>並不能偏離法律明顯可辨的基本價值決定或規範核心。</div>
                    </div>
                  </div>
                </div>

                <!-- 2. 憲法取向解釋 -->
                <div class="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border-2 border-teal-500/40 space-y-3">
                  <div class="flex items-center justify-between">
                    <span class="px-2.5 py-0.5 rounded-md bg-teal-100 dark:bg-teal-950 text-teal-800 dark:text-teal-300 font-mono font-bold text-[11px]">
                      最密切相合
                    </span>
                    <span class="text-xs font-bold text-teal-600 dark:text-teal-400">價值精神引領</span>
                  </div>

                  <h4 class="text-base font-black text-slate-900 dark:text-white flex items-center gap-1.5">
                    <span>🌟</span>
                    <span>2. 憲法取向解釋（Verfassungsorientierte Auslegung）</span>
                  </h4>

                  <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    乃指在「<strong>多種合憲解釋</strong>」可能性中，<strong>選擇與憲法基本精神最密切相合者</strong>。
                  </p>

                  <div class="p-3 rounded-xl bg-teal-50 dark:bg-teal-950/40 border border-teal-200 dark:border-teal-800 text-xs text-slate-700 dark:text-slate-200 leading-relaxed space-y-1">
                    <span class="font-bold text-teal-800 dark:text-teal-200 block">• 突破罪刑法定過度僵化：</span>
                    這個解釋方法時常被人遺忘，尤其在刑法領域過度著重「文義解釋」的導引之下，造成許多個案上的不正義。雖然很多人都用「罪刑法定原則」作為辯解，殊不知<strong>「罪刑法定原則」在憲法的影響之下，已經不是那麼僵硬地適用，而是有所修正</strong>。
                  </div>
                </div>

              </div>

              <!-- 作者叮嚀卡片：鄧元貞重婚案與釋字 242 號 -->
              <div class="p-5 rounded-2xl bg-amber-50/80 dark:bg-amber-950/40 border-2 border-amber-400/60 space-y-3">
                <div class="flex items-center gap-2 text-amber-800 dark:text-amber-200">
                  <span class="text-lg">💡</span>
                  <h5 class="text-sm font-black tracking-tight">【作者叮嚀】並非在解釋「憲法」，而是在解釋「其他法律」！——鄧元貞重婚案的血淚教訓（教材第 2-17 頁）</h5>
                </div>
                <blockquote class="text-xs sm:text-sm text-amber-900 dark:text-amber-100 leading-relaxed italic border-l-4 border-amber-500 pl-3.5 py-0.5 space-y-2">
                  <p>
                    「相信大家在憲法的領域中，也有學習過『合憲性解釋』與『憲法取向解釋』，<strong>但要釐清的是，這兩種解釋方法並非在解釋『憲法』，而是在解釋『憲法以外的其他法律』</strong>。」
                  </p>
                  <p>
                    「其中筆者覺得最重要的是『憲法取向解釋』，這個常常被大家所忘記的解釋方法，現實上的確造成了許多的不正義後果，比如鼎鼎大名的『<strong>鄧元貞重婚案</strong>』，法院就是忽略了憲法取向解釋而造成了令人無法忍受的後果，雖然俟後釋 242 號挽救，但卻無可避免的造成釋憲實務上的另一個爭點——大法官可否解釋『判決』的問題。所以請各位在解釋法律時，將『憲法取向解釋』謹記在心！」
                  </p>
                </blockquote>

                <!-- 鄧元貞案速記小錦囊 -->
                <div class="p-3 rounded-xl bg-white/80 dark:bg-slate-900/80 border border-amber-200 dark:border-amber-800 text-[11px] text-slate-600 dark:text-slate-300 space-y-1">
                  <div><strong>📌 經典釋憲回顧：釋字第 242 號（鄧元貞重婚案）</strong></div>
                  <div>在兩岸因戰亂隔絕特殊歷史背景下，人民被迫在台再婚。民法第 988 條及第 992 條若僵硬文義適用而撤銷後婚姻，嚴重危害後婚姻家庭安定與人性尊嚴。大法官本於憲法對婚姻與家庭之制度性保障，破例宣告該確定判決所適用之民法規定「在兩岸隔絕前婚姻無從維持之特定歷史條件下」違憲，挽救了後婚姻，亦立下重大里程碑。</div>
                </div>
              </div>

            </div>
          </section>

          <!-- 七、立法解釋概說與公務員概念之兩大體系（教材第 2-17 ～ 2-19 頁） -->
          <section id="sec-p0ch2-sec2-public-official" class="space-y-6 pt-2">
            <div class="flex items-center gap-3">
              <span class="w-2 h-6 rounded-full bg-purple-600"></span>
              <h3 class="text-lg sm:text-xl font-black text-slate-900 dark:text-white tracking-tight">
                七、立法解釋（§ 10）概說與公務員概念之兩大體系（教材第 2-17 ～ 2-19 頁）
              </h3>
            </div>

            <div class="p-6 rounded-3xl border border-slate-200 dark:border-white/[0.08] bg-white dark:bg-[#101623] shadow-sm space-y-6">
              
              <!-- 刑法 § 10 立法解釋六大範疇總覽 -->
              <div class="p-4.5 rounded-2xl bg-purple-50/60 dark:bg-purple-950/30 border border-purple-200 dark:border-purple-900/60 space-y-3">
                <div class="flex items-center justify-between">
                  <span class="text-xs font-mono font-bold text-purple-700 dark:text-purple-300 uppercase tracking-wider flex items-center gap-1.5">
                    <span>📜</span>
                    <span>刑法第 10 條【名詞定義章】立法解釋六大項目（教材第 2-17 ～ 2-18 頁）</span>
                  </span>
                  <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 font-bold">
                    教材第 2-17 ～ 2-18 頁
                  </span>
                </div>
                <p class="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                  「立法解釋主要規定在 § 10，計有『以上、以下、以內之計算』、『公務員』、『公文書』、『重傷』、『性交』與『電磁紀錄』，<strong>其中較為重要者係公務員、重傷與性交</strong>。」
                </p>
                <div class="flex flex-wrap gap-2 pt-1 text-[11px] font-medium">
                  <span class="px-2.5 py-1 rounded-lg bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">§ 10 Ⅰ 以上、以下、以內之計算</span>
                  <span class="px-2.5 py-1 rounded-lg bg-purple-100 dark:bg-purple-900/60 text-purple-800 dark:text-purple-200 border border-purple-300 dark:border-purple-700 font-bold">★ § 10 Ⅱ 公務員（三大類型）</span>
                  <span class="px-2.5 py-1 rounded-lg bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">§ 10 Ⅲ 公文書</span>
                  <span class="px-2.5 py-1 rounded-lg bg-purple-100 dark:bg-purple-900/60 text-purple-800 dark:text-purple-200 border border-purple-300 dark:border-purple-700 font-bold">★ § 10 Ⅳ 重傷</span>
                  <span class="px-2.5 py-1 rounded-lg bg-purple-100 dark:bg-purple-900/60 text-purple-800 dark:text-purple-200 border border-purple-300 dark:border-purple-700 font-bold">★ § 10 Ⅴ 性交</span>
                  <span class="px-2.5 py-1 rounded-lg bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">§ 10 Ⅵ 電磁紀錄</span>
                </div>
              </div>

              <!-- 一、公務員（§ 10 II）：一般化 vs 個別化概念 -->
              <div class="space-y-4">
                <div class="flex items-center gap-2">
                  <span class="text-indigo-600 dark:text-indigo-400 font-black text-base">一、公務員（§ 10 Ⅱ）</span>
                  <span class="text-xs text-slate-400 font-mono">一般化公務員概念 vs. 個別化公務員概念</span>
                </div>
                
                <p class="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
                  刑法採取<strong>一般化公務員概念</strong>，並設計有三種公務員類型。相對而言，有力說則採取<strong>個別化公務員概念</strong>。
                </p>

                <!-- (一) 一般化公務員三大類型展開 -->
                <div class="space-y-4">
                  <div class="flex items-center gap-2 text-sm font-bold text-slate-900 dark:text-white">
                    <span class="w-1.5 h-4 rounded-full bg-blue-600"></span>
                    <span>(一) 一般化公務員概念：透過刑法總則作一般性的定義（教材第 2-18 頁）</span>
                  </div>

                  <!-- 🐣 刑法公務員三大類型小白秒懂專區 -->
                  <div class="rounded-2xl border-2 border-amber-300 dark:border-amber-700/80 bg-gradient-to-br from-amber-50/90 via-orange-50/60 to-yellow-50/70 dark:from-amber-950/40 dark:via-orange-950/30 dark:to-yellow-950/30 p-5 space-y-4 shadow-sm">
                    <div class="flex items-center gap-2.5 border-b border-amber-200 dark:border-amber-800/60 pb-3">
                      <span class="text-2xl animate-bounce">🐣</span>
                      <div>
                        <h4 class="text-sm sm:text-base font-black text-amber-950 dark:text-amber-200">
                          【小白秒懂專區】刑法公務員三大類型：在政府上班就算公務員嗎？
                        </h4>
                        <p class="text-xs text-amber-800 dark:text-amber-300 font-medium">
                          三大白話口訣：身分看「機關權限」，授權看「公共事務」，委託看「公權力移轉」！
                        </p>
                      </div>
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs sm:text-sm">
                      <div class="p-3.5 rounded-xl bg-white/95 dark:bg-slate-900/90 border border-amber-200 dark:border-amber-800/60 space-y-1.5 shadow-xs">
                        <span class="text-blue-700 dark:text-blue-300 font-black block flex items-center gap-1.5">
                          <span class="w-5 h-5 rounded-full bg-blue-100 dark:bg-blue-950 text-blue-800 dark:text-blue-200 flex items-center justify-center text-xs font-bold">1</span>
                          <span>身分公務員（正牌公家機關）</span>
                        </span>
                        <p class="text-xs text-slate-700 dark:text-slate-200 leading-relaxed font-normal">
                          <strong>服務於公家機關＋有法定權限！</strong> 例如法官、檢察官、警察、立委、村里長。注意：清潔阿姨、警衛、司機雖然也在公家機關，但<strong>沒有法定職務權限</strong>，絕不是刑法公務員！
                        </p>
                      </div>

                      <div class="p-3.5 rounded-xl bg-white/95 dark:bg-slate-900/90 border border-amber-200 dark:border-amber-800/60 space-y-1.5 shadow-xs">
                        <span class="text-indigo-700 dark:text-indigo-300 font-black block flex items-center gap-1.5">
                          <span class="w-5 h-5 rounded-full bg-indigo-100 dark:bg-indigo-950 text-indigo-800 dark:text-indigo-200 flex items-center justify-center text-xs font-bold">2</span>
                          <span>授權公務員（非機關但管公事）</span>
                        </span>
                        <p class="text-xs text-slate-700 dark:text-slate-200 leading-relaxed font-normal">
                          <strong>依法從事公共事務＋有法定權限！</strong> 例如農田水利會人員、公立學校總務處<strong>辦理工程採購的職員</strong>。注意：如果是台鐵便當店員、中油加油員賣油，這屬於「私經濟行為」，不算公務員！
                        </p>
                      </div>

                      <div class="p-3.5 rounded-xl bg-white/95 dark:bg-slate-900/90 border border-amber-200 dark:border-amber-800/60 space-y-1.5 shadow-xs">
                        <span class="text-purple-700 dark:text-purple-300 font-black block flex items-center gap-1.5">
                          <span class="w-5 h-5 rounded-full bg-purple-100 dark:bg-purple-950 text-purple-800 dark:text-purple-200 flex items-center justify-center text-xs font-bold">3</span>
                          <span>委託公務員（受託行使公權力）</span>
                        </span>
                        <p class="text-xs text-slate-700 dark:text-slate-200 leading-relaxed font-normal">
                          <strong>受政府委託行使公權力！</strong> 例如海基會驗證大陸文書、大學教評會審查教師升等。<strong>大考大陷阱：</strong>民間拖吊場司機、地檢署採尿員只是跑腿打雜的「行政助手」，絕非委託公務員！
                        </p>
                      </div>
                    </div>
                  </div>

                  <!-- 三大公務員類型卡片網格 -->
                  <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                    
                    <!-- 1. 身分公務員 -->
                    <div class="p-4.5 rounded-2xl bg-blue-50/50 dark:bg-slate-900 border-2 border-blue-400/60 space-y-3 flex flex-col justify-between">
                      <div class="space-y-2">
                        <div class="flex items-center justify-between">
                          <span class="px-2 py-0.5 rounded bg-blue-100 dark:bg-blue-950 text-blue-800 dark:text-blue-300 font-mono font-bold text-[10px]">
                            § 10 Ⅱ ① 前段
                          </span>
                          <span class="text-[11px] font-bold text-blue-600 dark:text-blue-400">機關＋權限</span>
                        </div>
                        <h5 class="text-sm font-black text-slate-900 dark:text-white">
                          1. 身分公務員
                        </h5>
                        <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed italic">
                          「依法令服務於國家、地方自治團體所屬機關而具有法定職務權限者。」
                        </p>
                        
                        <div class="space-y-2 pt-2 border-t border-blue-200 dark:border-blue-900 text-xs text-slate-700 dark:text-slate-300">
                          <div>
                            <strong class="text-blue-700 dark:text-blue-400">(1) 機關要件：</strong>行使公權力之政府組織體，包含憲政機關、各級地方政府以及其他獨立組織體。
                          </div>
                          <div>
                            <strong class="text-blue-700 dark:text-blue-400">(2) 權限要件：</strong>需具有法定職務權限，而負有特別保護義務與服從義務。<strong>至於該項職務是否涉及公權力行使之公共事務，則非所問（並不要求事務要件，如 96 台上 5853 決）</strong>。
                          </div>
                        </div>
                      </div>

                      <div class="p-2.5 rounded-xl bg-white dark:bg-slate-800/80 border border-blue-200 dark:border-blue-900 text-[11px] text-slate-500 dark:text-slate-400 space-y-1">
                        <div><strong>典型舉例：</strong>立法委員、法官、法制人員。</div>
                        <div class="text-rose-600 dark:text-rose-400"><strong>主要排除：</strong>無法定職務權限之約聘僱人員、清潔工、警衛、司機、郵政人員等。</div>
                      </div>
                    </div>

                    <!-- 2. 授權公務員 -->
                    <div class="p-4.5 rounded-2xl bg-indigo-50/50 dark:bg-slate-900 border-2 border-indigo-400/60 space-y-3 flex flex-col justify-between">
                      <div class="space-y-2">
                        <div class="flex items-center justify-between">
                          <span class="px-2 py-0.5 rounded bg-indigo-100 dark:bg-indigo-950 text-indigo-800 dark:text-indigo-300 font-mono font-bold text-[10px]">
                            § 10 Ⅱ ① 後段
                          </span>
                          <span class="text-[11px] font-bold text-indigo-600 dark:text-indigo-400">權限＋公事務</span>
                        </div>
                        <h5 class="text-sm font-black text-slate-900 dark:text-white">
                          2. 授權公務員
                        </h5>
                        <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed italic">
                          「雖非服務於國家、地方自治團體所屬機關，但卻依法令從事於公共事務，且具有法定職務權限者。」
                        </p>
                        
                        <div class="space-y-2 pt-2 border-t border-indigo-200 dark:border-indigo-900 text-xs text-slate-700 dark:text-slate-300">
                          <div>
                            <strong class="text-indigo-700 dark:text-indigo-400">(1) 權限要件：</strong>需具有法定職務權限。例如依律師懲戒規則所組成之律師懲戒委員會，該規則對其權限即有所規範；同理，農田水利會會長及其職員、公立學校或公營事業辦理採購業務人員等均屬之。
                          </div>
                          <div>
                            <strong class="text-indigo-700 dark:text-indigo-400">(2) 事務要件：</strong>該項職務必須涉及公權力行使之公共事務，<strong>排除私經濟行為（96 台上 6032 決）</strong>。
                          </div>
                        </div>
                      </div>

                      <div class="p-2.5 rounded-xl bg-white dark:bg-slate-800/80 border border-indigo-200 dark:border-indigo-900 text-[11px] text-slate-500 dark:text-slate-400 space-y-1">
                        <div><strong>典型舉例：</strong>農田水利會會長、公立學校採購人員。</div>
                        <div class="text-rose-600 dark:text-rose-400"><strong>主要排除：</strong>私經濟行為（例如單純公營事業販賣商品等採購外的私法營利行為）。</div>
                      </div>
                    </div>

                    <!-- 3. 委託公務員 -->
                    <div class="p-4.5 rounded-2xl bg-purple-50/50 dark:bg-slate-900 border-2 border-purple-400/60 space-y-3 flex flex-col justify-between">
                      <div class="space-y-2">
                        <div class="flex items-center justify-between">
                          <span class="px-2 py-0.5 rounded bg-purple-100 dark:bg-purple-950 text-purple-800 dark:text-purple-300 font-mono font-bold text-[10px]">
                            § 10 Ⅱ ②
                          </span>
                          <span class="text-[11px] font-bold text-purple-600 dark:text-purple-400">委託公權力＋公事務</span>
                        </div>
                        <h5 class="text-sm font-black text-slate-900 dark:text-white">
                          3. 委託公務員
                        </h5>
                        <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed italic">
                          「受國家、地方自治團體所屬機關依法委託，從事與委託機關權限有關之公共事務者。」
                        </p>
                        
                        <div class="space-y-2 pt-2 border-t border-purple-200 dark:border-purple-900 text-xs text-slate-700 dark:text-slate-300">
                          <div>
                            <strong class="text-purple-700 dark:text-purple-400">(1) 權限要件：</strong>需依法受有公權力之委託，<strong>排除「行政輔助人（＝行政助手）」</strong>，如民間拖吊業者協助政府從事拖吊業務、受地檢署委託採尿業務之民間業者等，均非委託公務員。
                          </div>
                          <div>
                            <strong class="text-purple-700 dark:text-purple-400">(2) 事務要件：</strong>該項職務必須涉及公權力行使之公共事務，例如陸委會委託海基會處理兩岸事務、教育部委託各大學教評會評審教師升等、紡託審裁員、受託行使船上治安權之船長等，均為委託公務員。<strong>同樣排除私經濟行為</strong>。
                          </div>
                        </div>
                      </div>

                      <div class="p-2.5 rounded-xl bg-white dark:bg-slate-800/80 border border-purple-200 dark:border-purple-900 text-[11px] text-slate-500 dark:text-slate-400 space-y-1">
                        <div><strong>典型舉例：</strong>海基會人員、大學教評會委員、紡託審裁員、具船上治安權船長。</div>
                        <div class="text-rose-600 dark:text-rose-400"><strong>主要排除：</strong>行政輔助人（拖吊業者、檢察署採尿人員）與私經濟行為。</div>
                      </div>
                    </div>

                  </div>
                </div>

                <!-- 【表2】一般化公務員概念的判斷流程（教材第 2-19 頁 原書表格精確完整再現） -->
                <div id="sec-p0ch2-sec2-table-2" class="space-y-3 pt-3">
                  <div class="flex items-center justify-between">
                    <span class="text-xs font-bold text-slate-700 dark:text-slate-300 flex items-center gap-1.5 font-mono">
                      <span>📊</span>
                      <span>【表2】一般化公務員概念的判斷流程（教材第 2-19 頁 原書對照表）</span>
                    </span>
                    <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 font-bold">
                      教材第 2-19 頁 表2
                    </span>
                  </div>

                  <!-- 現代化高對比響應式表格 -->
                  <div class="overflow-x-auto rounded-2xl border-2 border-slate-200 dark:border-slate-800 shadow-sm">
                    <table class="w-full text-left text-xs border-collapse">
                      <thead>
                        <tr class="bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white font-bold border-b border-slate-200 dark:border-slate-700">
                          <th class="p-3.5 w-24 text-center font-black">項目</th>
                          <th class="p-3.5 border-l border-slate-200 dark:border-slate-700 bg-blue-50/80 dark:bg-blue-950/40 text-blue-900 dark:text-blue-200">
                            身分公務員
                          </th>
                          <th class="p-3.5 border-l border-slate-200 dark:border-slate-700 bg-indigo-50/80 dark:bg-indigo-950/40 text-indigo-900 dark:text-indigo-200">
                            授權公務員
                          </th>
                          <th class="p-3.5 border-l border-slate-200 dark:border-slate-700 bg-purple-50/80 dark:bg-purple-950/40 text-purple-900 dark:text-purple-200">
                            委託公務員
                          </th>
                        </tr>
                      </thead>
                      <tbody class="divide-y divide-slate-200 dark:divide-slate-800 text-slate-700 dark:text-slate-300">
                        <tr class="hover:bg-slate-50 dark:hover:bg-slate-800/40">
                          <td class="p-3 font-bold text-center bg-slate-50/80 dark:bg-slate-800/60 text-slate-900 dark:text-white">條文依據</td>
                          <td class="p-3 border-l border-slate-200 dark:border-slate-800 font-mono font-bold text-blue-600 dark:text-blue-400">§ 10 Ⅱ ① 前</td>
                          <td class="p-3 border-l border-slate-200 dark:border-slate-800 font-mono font-bold text-indigo-600 dark:text-indigo-400">§ 10 Ⅱ ① 後</td>
                          <td class="p-3 border-l border-slate-200 dark:border-slate-800 font-mono font-bold text-purple-600 dark:text-purple-400">§ 10 Ⅱ ②</td>
                        </tr>
                        <tr class="hover:bg-slate-50 dark:hover:bg-slate-800/40">
                          <td class="p-3 font-bold text-center bg-slate-50/80 dark:bg-slate-800/60 text-slate-900 dark:text-white">機關要件<br><span class="text-[10px] text-slate-400 font-normal">（服務於……）</span></td>
                          <td class="p-3 border-l border-slate-200 dark:border-slate-800 font-semibold text-emerald-700 dark:text-emerald-300">行使公權力之政府組織體</td>
                          <td class="p-3 border-l border-slate-200 dark:border-slate-800 text-center font-bold text-rose-500">✕</td>
                          <td class="p-3 border-l border-slate-200 dark:border-slate-800 text-center font-bold text-rose-500">✕</td>
                        </tr>
                        <tr class="hover:bg-slate-50 dark:hover:bg-slate-800/40">
                          <td class="p-3 font-bold text-center bg-slate-50/80 dark:bg-slate-800/60 text-slate-900 dark:text-white">權限要件</td>
                          <td class="p-3 border-l border-slate-200 dark:border-slate-800 font-semibold">有法定職務權限</td>
                          <td class="p-3 border-l border-slate-200 dark:border-slate-800 font-semibold">有法定職務權限</td>
                          <td class="p-3 border-l border-slate-200 dark:border-slate-800 font-semibold">依法受有公權力之委託</td>
                        </tr>
                        <tr class="hover:bg-slate-50 dark:hover:bg-slate-800/40">
                          <td class="p-3 font-bold text-center bg-slate-50/80 dark:bg-slate-800/60 text-slate-900 dark:text-white">事務要件</td>
                          <td class="p-3 border-l border-slate-200 dark:border-slate-800 text-center font-bold text-rose-500">✕</td>
                          <td class="p-3 border-l border-slate-200 dark:border-slate-800 font-semibold text-indigo-700 dark:text-indigo-300">涉及公權力行使之公共事務</td>
                          <td class="p-3 border-l border-slate-200 dark:border-slate-800 font-semibold text-purple-700 dark:text-purple-300">涉及公權力行使之公共事務</td>
                        </tr>
                        <tr class="hover:bg-slate-50 dark:hover:bg-slate-800/40">
                          <td class="p-3 font-bold text-center bg-slate-50/80 dark:bg-slate-800/60 text-slate-900 dark:text-white">舉例</td>
                          <td class="p-3 border-l border-slate-200 dark:border-slate-800 space-y-0.5">
                            <div>1. 立法委員</div>
                            <div>2. 法官</div>
                            <div>3. 法制人員</div>
                          </td>
                          <td class="p-3 border-l border-slate-200 dark:border-slate-800 space-y-0.5">
                            <div>1. 農田水利會會長</div>
                            <div>2. 公立學校辦理採購人員</div>
                          </td>
                          <td class="p-3 border-l border-slate-200 dark:border-slate-800 space-y-0.5">
                            <div>1. 紡託審裁員（受政府委託承辦紡織品出口事務）</div>
                            <div>2. 海基會人員</div>
                            <div>3. 大學教評會委員</div>
                            <div>4. 船長（受政府委託行使船上治安權）</div>
                          </td>
                        </tr>
                        <tr class="hover:bg-slate-50 dark:hover:bg-slate-800/40">
                          <td class="p-3 font-bold text-center bg-slate-50/80 dark:bg-slate-800/60 text-slate-900 dark:text-white">主要排除</td>
                          <td class="p-3 border-l border-slate-200 dark:border-slate-800 text-rose-600 dark:text-rose-400">
                            所僱用的清潔或保全人員
                          </td>
                          <td class="p-3 border-l border-slate-200 dark:border-slate-800 text-rose-600 dark:text-rose-400">
                            私經濟行為
                          </td>
                          <td class="p-3 border-l border-slate-200 dark:border-slate-800 text-rose-600 dark:text-rose-400 space-y-0.5">
                            <div><strong>行政輔助人</strong></div>
                            <div class="text-[11px] text-slate-500 dark:text-slate-400">例如：拖吊業者、檢察署採尿人員</div>
                            <div>私經濟行為</div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <!-- (二) 個別化公務員概念（黃榮堅教授學說，教材第 2-19 頁） -->
                <div id="sec-p0ch2-sec2-individualized" class="p-5 rounded-2xl bg-amber-50/50 dark:bg-slate-900 border-2 border-amber-300 dark:border-amber-700/60 space-y-4 pt-3">
                  <div class="flex items-center justify-between">
                    <span class="text-xs font-bold text-amber-800 dark:text-amber-200 flex items-center gap-1.5 font-mono">
                      <span>💡</span>
                      <span>(二) 個別化公務員概念（有力說・黃榮堅教授學說）</span>
                    </span>
                    <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-200 font-bold">
                      教材第 2-19 頁 註2
                    </span>
                  </div>

                  <div class="space-y-3 text-xs sm:text-sm text-slate-700 dark:text-slate-200 leading-relaxed">
                    <p class="font-medium">
                      <strong>1. 總則統一定義的本末倒置之弊：</strong><br>
                      認為在刑法總則中統一定義公務員是本末倒置的，因為確認公務員概念的目的在於適用刑法分則的構成要件（諸如公務員圖利罪、妨害公務罪、偽造公文書罪等等），<strong>既然分則構成要件的解釋將會隨保護法益而有所不同，那麼不同犯罪的公務員概念當然也會有所不同</strong>。因此，公務員概念必須按個別犯罪構成要件分開、獨立判斷，乃分別個別要件的解釋問題，無法透過總則作統一的解釋。
                    </p>

                    <p class="font-medium">
                      <strong>2. 就不同法益侵害型態歸納公務員類型：</strong><br>
                      承上所述，我們就可以就不同的法益侵害型態，大致上歸納出兩種公務員概念，並供作分別條文的解釋依據：
                    </p>

                    <div class="p-3.5 rounded-xl bg-white dark:bg-slate-800 border border-amber-200 dark:border-amber-800/60 space-y-1.5">
                      <span class="font-bold text-amber-900 dark:text-amber-200 text-xs flex items-center gap-1">
                        <span>(1)</span>
                        <span>保護「公務正確性」➔ 廣義功能意義的公務員概念：</span>
                      </span>
                      <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                        重點在所從事公務的內容，<strong>是否專屬國家統治任務的行為，至於在哪裡服務根本不是關鍵</strong>。在此意義下的公務員，如妨害公務罪（被妨害者必須執行公務行使國家統治任務，如行政強制執行）、偽造公文書罪（公文書必須針對執行國家統治任務所製作，如法院搜索票）、圖利罪（必須在執行國家統治任務中圖利自己或他人）、賄賂罪（必須在執行國家統治任務中收受賄賂）。
                      </p>
                    </div>

                    <div class="p-3.5 rounded-xl bg-white dark:bg-slate-800 border border-amber-200 dark:border-amber-800/60 space-y-1.5">
                      <span class="font-bold text-amber-900 dark:text-amber-200 text-xs flex items-center gap-1">
                        <span>(2)</span>
                        <span>保護「公務員廉潔性」➔ 嚴格組織意義的公務員概念（教材第 2-20 頁）：</span>
                      </span>
                      <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                        所謂廉潔其實是人民對「公務員」這個人的特殊期待，是<strong>屬人的因素，與事務無關</strong>。因此只要公務員是與國家間具有特殊身分意義，便足以建構人民的期待感，<strong>故服務於國家機關的公務員方屬之，並限於依據公務人員任用法所任用之公務員</strong>。在此意義下的公務員，如貪污治罪條例中的公務員竊盜侵占公物罪是。
                      </p>
                    </div>

                    <div class="pt-2 border-t border-amber-200 dark:border-amber-800/50 text-[11px] text-slate-500 dark:text-slate-400 italic">
                      註2整理自：黃榮堅，基礎刑法學（上），2012，P.138以下、刑法上個別化公務員概念，台大法學論叢，38-4，P.273以下。
                    </div>
                  </div>
                </div>

                <!-- (三) 公務員實務重要案例演練：案例 2-9 ～ 2-11（教材第 2-20 ～ 2-21 頁） -->
                <div class="space-y-4 pt-3">
                  <div class="flex items-center gap-2 text-sm font-bold text-slate-900 dark:text-white">
                    <span class="w-1.5 h-4 rounded-full bg-indigo-600"></span>
                    <span>(三) 公務員身分實務重要爭議案例演練（教材第 2-20 ～ 2-21 頁）</span>
                  </div>

                  <!-- 案例 2-9：村長、里長 -->
                  <div class="p-5 rounded-2xl bg-white dark:bg-slate-900/90 border-2 border-blue-400/60 space-y-3">
                    <div class="flex items-center justify-between flex-wrap gap-2 border-b border-slate-100 dark:border-slate-800 pb-2">
                      <div class="flex items-center gap-2">
                        <span class="text-base">⚖️</span>
                        <span class="text-xs font-mono font-bold px-2 py-0.5 rounded bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300">
                          教材第 2-20 頁
                        </span>
                        <h5 class="text-sm font-black text-slate-900 dark:text-white">
                          案例 2-9：村長、里長是否為刑法上的公務員？
                        </h5>
                      </div>
                      <button type="button" onclick="copyCaseNote('case-2-9', this)" class="px-2.5 py-1 rounded-lg bg-blue-50 dark:bg-blue-950/60 hover:bg-blue-100 dark:hover:bg-blue-900 text-blue-700 dark:text-blue-300 text-xs font-bold transition-all shadow-xs flex items-center gap-1 cursor-pointer" title="複製 Anki/Notion 筆記">
                        <span>📋</span>
                        <span>複製筆記</span>
                      </button>
                    </div>

                    <div class="p-3.5 rounded-xl bg-blue-50/50 dark:bg-slate-800/60 border border-blue-200/80 dark:border-blue-900/50 text-xs text-slate-700 dark:text-slate-300 space-y-1.5 leading-relaxed">
                      <div class="font-bold text-blue-700 dark:text-blue-300 flex items-center gap-1">
                        <span>◀</span>
                        <span>問題導引（實務見解：最高法院 98 台上 7191 號判決）</span>
                      </div>
                      <p>
                        地方制度法 § 5 Ⅱ 明定各級地方自治團體均各有其立法機關與行政機關，而依 § 5 Ⅳ 及同法 § 59 規定，各村、里辦公處係由各鄉、鎮、縣轄市及區所設，受其指揮監督，<strong>為地方自治團體設於各村、里之地方行政機關</strong>，且村、里長一人，辦理村、里之公務及交辦事項，<strong>故村、里長自屬依法服務於地方自治團體所屬機關而具有法定職務權限之公務員（身分公務員）</strong>。
                      </p>
                    </div>
                  </div>

                  <!-- 案例 2-10：軍人 -->
                  <div class="p-5 rounded-2xl bg-white dark:bg-slate-900/90 border-2 border-indigo-400/60 space-y-3">
                    <div class="flex items-center justify-between flex-wrap gap-2 border-b border-slate-100 dark:border-slate-800 pb-2">
                      <div class="flex items-center gap-2">
                        <span class="text-base">⚖️</span>
                        <span class="text-xs font-mono font-bold px-2 py-0.5 rounded bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300">
                          教材第 2-20 頁
                        </span>
                        <h5 class="text-sm font-black text-slate-900 dark:text-white">
                          案例 2-10：軍人是否為刑法上的公務員？
                        </h5>
                      </div>
                      <button type="button" onclick="copyCaseNote('case-2-10', this)" class="px-2.5 py-1 rounded-lg bg-indigo-50 dark:bg-indigo-950/60 hover:bg-indigo-100 dark:hover:bg-indigo-900 text-indigo-700 dark:text-indigo-300 text-xs font-bold transition-all shadow-xs flex items-center gap-1 cursor-pointer" title="複製 Anki/Notion 筆記">
                        <span>📋</span>
                        <span>複製筆記</span>
                      </button>
                    </div>

                    <div class="p-3.5 rounded-xl bg-indigo-50/50 dark:bg-slate-800/60 border border-indigo-200/80 dark:border-indigo-900/50 text-xs text-slate-700 dark:text-slate-300 space-y-1.5 leading-relaxed">
                      <div class="font-bold text-indigo-700 dark:text-indigo-300 flex items-center gap-1">
                        <span>◀</span>
                        <span>問題導引（教材第 2-20 頁 原文分析）</span>
                      </div>
                      <p>
                        <strong>一般士兵雖依照法令服務於國家所屬機關，但其並無法定職務權限，並非刑法上之公務員！</strong> 僅在別有法令依據而從事一定公務者（例如軍法官、具有採購權限之軍需官等），始屬於身分公務員。
                      </p>
                    </div>
                  </div>

                  <!-- 案例 2-11：大學教授核銷補助費 -->
                  <div class="p-5 rounded-2xl bg-white dark:bg-slate-900/90 border-2 border-purple-400/60 space-y-3">
                    <div class="flex items-center justify-between flex-wrap gap-2 border-b border-slate-100 dark:border-slate-800 pb-2">
                      <div class="flex items-center gap-2">
                        <span class="text-base">⚖️</span>
                        <span class="text-xs font-mono font-bold px-2 py-0.5 rounded bg-purple-100 dark:bg-purple-950 text-purple-700 dark:text-purple-300">
                          教材第 2-21 頁
                        </span>
                        <h5 class="text-sm font-black text-slate-900 dark:text-white">
                          案例 2-11：大學教授以不實單據核銷國科會補助費，是否為刑法上公務員？
                        </h5>
                      </div>
                      <button type="button" onclick="copyCaseNote('case-2-11', this)" class="px-2.5 py-1 rounded-lg bg-purple-50 dark:bg-purple-950/60 hover:bg-purple-100 dark:hover:bg-purple-900 text-purple-700 dark:text-purple-300 text-xs font-bold transition-all shadow-xs flex items-center gap-1 cursor-pointer" title="複製 Anki/Notion 筆記">
                        <span>📋</span>
                        <span>複製筆記</span>
                      </button>
                    </div>

                    <div class="p-3.5 rounded-xl bg-purple-50/50 dark:bg-slate-800/60 border border-purple-200/80 dark:border-purple-900/50 text-xs text-slate-700 dark:text-slate-300 space-y-2 leading-relaxed">
                      <div class="font-bold text-purple-700 dark:text-purple-300 flex items-center gap-1">
                        <span>◀</span>
                        <span>問題導引（最高法院 103 年第 10 次刑庭決議・三大類型逐一排除）</span>
                      </div>
                      <div class="space-y-1.5 pl-1">
                        <div>
                          <strong>(一) 非身分公務員：</strong>大學教授並非「依法令服務於國家、地方自治團體所屬機關而具有法定職務權限之人」，不是身分公務員。
                        </div>
                        <div>
                          <strong>(二) 非授權公務員：</strong>公立大學教授受政府委託負責科學技術研發計畫，<strong>性質上仍屬學術研究，未經法令授權取得任何法定職務權限</strong>。為完成計畫參與相關採購僅屬執行計畫之附隨事項，無涉公權力行使，亦非攸關國計民生之公共事務，不符授權公務員。
                        </div>
                        <div>
                          <strong>(三) 非委託公務員：</strong>縱該採購係公立大學依政府採購法辦理，因教授並非學校之「承辦或監辦採購人員」，非立法理由例示之授權公務員；教授參與之採購非行使公權力，復與補助機關權限無關，不符委託公務員。
                        </div>
                        <div class="pt-1.5 border-t border-purple-200 dark:border-purple-900 text-purple-900 dark:text-purple-200 font-bold">
                          ★ 結論：公立大學教授受委託負責執行科研計畫，於辦理相關採購事務，<strong>並不具有刑法公務員身分</strong>（103 年第 10 次決議）。
                        </div>
                      </div>
                    </div>
                  </div>

                </div>

              </div>

            </div>
          </section>

          <!-- 八、重傷之立法解釋（刑法 § 10 IV，教材第 2-21 ～ 2-24 頁） -->
          <section id="sec-p0ch2-sec2-grievous-bodily-harm" class="space-y-6 pt-2">
            <div class="flex items-center gap-3">
              <span class="w-2 h-6 rounded-full bg-red-600"></span>
              <h3 class="text-lg sm:text-xl font-black text-slate-900 dark:text-white tracking-tight">
                八、重傷之立法解釋（§ 10 Ⅳ）：列舉與概括規定之適用關係與實例演練（教材第 2-21 ～ 2-24 頁）
              </h3>
            </div>

            <div class="p-6 sm:p-7 rounded-3xl border-2 border-red-200 dark:border-red-900/80 border-l-[8px] border-l-red-600 bg-white dark:bg-[#111726] shadow-md space-y-6">
              
              <!-- 前言定義引言 -->
              <div class="p-4.5 rounded-2xl bg-red-50/50 dark:bg-red-950/20 border border-red-200 dark:border-red-900/50 space-y-2">
                <div class="flex items-center justify-between">
                  <span class="text-xs font-mono font-bold text-red-600 dark:text-red-400 uppercase tracking-wider flex items-center gap-1.5">
                    <span>🩸</span>
                    <span>刑法第 10 條第 4 項【重傷定義】體系構造</span>
                  </span>
                  <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-red-100 dark:bg-red-900/60 text-red-700 dark:text-red-300 font-bold">
                    教材第 2-21 ～ 2-22 頁
                  </span>
                </div>
                <p class="text-xs sm:text-sm text-slate-700 dark:text-slate-200 leading-relaxed font-medium">
                  刑法 § 10 Ⅳ 明定重傷類型，體系上劃分為「前五款之列舉規定」與「第六款之概括規定」。
                </p>
              </div>

              <!-- 🐣 刑法重傷定義小白秒懂專區 -->
              <div class="rounded-2xl border-2 border-amber-300 dark:border-amber-700/80 bg-gradient-to-br from-amber-50/90 via-orange-50/60 to-yellow-50/70 dark:from-amber-950/40 dark:via-orange-950/30 dark:to-yellow-950/30 p-5 space-y-4 shadow-sm">
                <div class="flex items-center gap-2.5 border-b border-amber-200 dark:border-amber-800/60 pb-3">
                  <span class="text-2xl animate-bounce">🐣</span>
                  <div>
                    <h4 class="text-sm sm:text-base font-black text-amber-950 dark:text-amber-200">
                      【小白秒懂專區】刑法重傷定義（§ 10 Ⅳ）：傷成怎樣才叫「重傷」？
                    </h4>
                    <p class="text-xs text-amber-800 dark:text-amber-300 font-medium">
                      三大黃金鐵律：前五款專屬壟斷，第六款是最後備胎，重大必須接近生命危險！
                    </p>
                  </div>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs sm:text-sm">
                  <div class="p-3.5 rounded-xl bg-white/95 dark:bg-slate-900/90 border border-amber-200 dark:border-amber-800/60 space-y-1.5 shadow-xs">
                    <span class="text-red-700 dark:text-red-300 font-black block flex items-center gap-1.5">
                      <span class="w-5 h-5 rounded-full bg-red-100 dark:bg-red-950 text-red-800 dark:text-red-200 flex items-center justify-center text-xs font-bold">1</span>
                      <span>前五款壟斷審查（眼耳語嗅肢生殖）</span>
                    </span>
                    <p class="text-xs text-slate-700 dark:text-slate-200 leading-relaxed font-normal">
                      法條指名的器官（看、聽、講、聞、手腳、生殖），必須達到<strong>「完全毀敗」或「嚴重減損大部分機能」</strong>！只要是這幾樣器官沒達到標準，<strong>絕對不能偷渡到第六款</strong>（排他壟斷效力）！
                    </p>
                  </div>

                  <div class="p-3.5 rounded-xl bg-white/95 dark:bg-slate-900/90 border border-amber-200 dark:border-amber-800/60 space-y-1.5 shadow-xs">
                    <span class="text-amber-700 dark:text-amber-300 font-black block flex items-center gap-1.5">
                      <span class="w-5 h-5 rounded-full bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-200 flex items-center justify-center text-xs font-bold">2</span>
                      <span>第六款是「最後備胎條款」</span>
                    </span>
                    <p class="text-xs text-slate-700 dark:text-slate-200 leading-relaxed font-normal">
                      「其他身體健康重大不治或難治」：必須是前五款以外的身體部位（例如被潑硫酸全身大面積毀容、內臟脾臟破裂等），前五款用不上時才輪到它上場！
                    </p>
                  </div>

                  <div class="p-3.5 rounded-xl bg-white/95 dark:bg-slate-900/90 border border-amber-200 dark:border-amber-800/60 space-y-1.5 shadow-xs">
                    <span class="text-indigo-700 dark:text-indigo-300 font-black block flex items-center gap-1.5">
                      <span class="w-5 h-5 rounded-full bg-indigo-100 dark:bg-indigo-950 text-indigo-800 dark:text-indigo-200 flex items-center justify-center text-xs font-bold">3</span>
                      <span>「重大」必須接近生命危險！</span>
                    </span>
                    <p class="text-xs text-slate-700 dark:text-slate-200 leading-relaxed font-normal">
                      重傷罪刑責極重（最少五年起跳，幾乎等同殺人未遂）！學說強力主張傷勢必須<strong>實質威脅生命</strong>才算重大，實務早期把割耳朵、刺青也當重傷，受到學界一面倒批判！
                    </p>
                  </div>
                </div>
              </div>

              <!-- 兩大規定類型展開網格 -->
              <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
                
                <!-- (一) 列舉規定 -->
                <div class="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border-2 border-red-400/50 space-y-3">
                  <div class="flex items-center justify-between">
                    <span class="px-2.5 py-0.5 rounded-md bg-red-100 dark:bg-red-950 text-red-800 dark:text-red-300 font-mono font-bold text-[11px]">
                      § 10 Ⅳ ①～⑤
                    </span>
                    <span class="text-xs font-bold text-red-600 dark:text-red-400">專屬壟斷審查</span>
                  </div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900 dark:text-white">
                    (一) 列舉規定（§ 10 Ⅳ ①②③④⑤）
                  </h4>

                  <div class="space-y-3 text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    <div class="p-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 space-y-1">
                      <span class="font-bold text-red-700 dark:text-red-300 block">1. 毀敗（完全且永久喪失）：</span>
                      指生理機能<strong>完全且永久喪失，縱使經過診治亦無法恢復原狀（28 上 1098 例）</strong>；至於一時喪失或僅減衰其機能者，則非屬之。諸如：視盲、耳聾、無味、失嗅都是毀敗的情形。
                    </div>
                    <div class="p-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 space-y-1">
                      <span class="font-bold text-red-700 dark:text-red-300 block">2. 嚴重減損（大部分機能喪失）：</span>
                      包括未完全喪失機能者，但<strong>已喪失大部分機能之情形</strong>。應就各款所列之生理機能檢驗，視傷害對於該器官或肢體原本功能之影響程度是否嚴重而斷。諸如：<strong>切斷拇指與食指，失去抓握的能力（29 上 135 例）</strong>、斷腳筋。
                    </div>
                  </div>
                </div>

                <!-- (二) 概括規定 -->
                <div class="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border-2 border-amber-400/50 space-y-3">
                  <div class="flex items-center justify-between">
                    <span class="px-2.5 py-0.5 rounded-md bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300 font-mono font-bold text-[11px]">
                      § 10 Ⅳ ⑥
                    </span>
                    <span class="text-xs font-bold text-amber-600 dark:text-amber-400">補充性質</span>
                  </div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900 dark:text-white">
                    (二) 概括規定（§ 10 Ⅳ ⑥）
                  </h4>

                  <div class="space-y-2 text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    <p>
                      <strong>「其他於身體或健康，有重大不治或難治之傷害。」</strong>
                    </p>
                    <div class="p-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 space-y-1.5">
                      <div>
                        <strong>•「不治或難治」：</strong>指依現今醫療技術，無法治療或治療耗資過大資源，例如遭人亂刀砍潑灑硫酸毀容之情形（47 台上 11433 例、80 台上 2128 決）。
                      </div>
                      <div>
                        <strong>•「重大」要件之爭點：</strong>所謂「重大」乃是<strong>該傷勢接近生命危險</strong>！實務向來忽略「重大」此要件，認為「耳廓被割（23 上 4573 例）」、「鼻準被割（19 上 2052 例）」、「身體大面積刺青（95 台上 4394 決）」皆是 § 10 Ⅳ ⑥ 的重傷，<strong>學說則持反對態度</strong>。
                      </div>
                    </div>
                  </div>
                </div>

              </div>

              <!-- 原書解題提示卡片 (教材第 2-22 頁 原文提示) -->
              <div class="p-4 rounded-2xl bg-blue-50/80 dark:bg-blue-950/40 border border-blue-300 dark:border-blue-800 space-y-2">
                <div class="flex items-center gap-2 text-blue-900 dark:text-blue-200 text-xs font-bold font-mono">
                  <span>📖</span>
                  <span>【解題提示】列舉規定與概括規定間的適用關係（教材第 2-22 頁）</span>
                </div>
                <p class="text-xs text-slate-700 dark:text-slate-200 leading-relaxed">
                  小心列舉規定與概括規定間的適用關係，亦即<strong>第六款只有補充性質，僅在自始無法適用前五款時方得考慮</strong>。此外，針對視覺、聽覺、語能、味能、嗅能、一肢之機能與生殖機能的重傷判斷，<strong>已完全被列舉規定所壟斷，自始排除概括規定的適用可能</strong>！
                </p>
              </div>

              <!-- 重傷實務案例演練：案例 2-12 ～ 2-15 -->
              <div class="space-y-4 pt-2">
                <div class="flex items-center gap-2 text-sm font-bold text-slate-900 dark:text-white">
                  <span class="w-1.5 h-4 rounded-full bg-red-600"></span>
                  <span>重傷實務重要爭議案例深度剖析（教材第 2-22 ～ 2-24 頁）</span>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                  
                  <!-- 案例 2-12：切除單腎 -->
                  <div class="p-4.5 rounded-2xl bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-800 space-y-3 flex flex-col justify-between">
                    <div class="space-y-2">
                      <div class="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-2">
                        <span class="text-xs font-bold text-red-600 dark:text-red-400 font-mono">【案例 2-12】</span>
                        <button type="button" onclick="copyCaseNote('case-2-12', this)" class="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 text-[11px] font-semibold transition-all">
                          📋 複製
                        </button>
                      </div>
                      <h5 class="text-xs sm:text-sm font-black text-slate-900 dark:text-white">
                        使他人一顆腎臟破裂切除，是否構成重傷？
                      </h5>
                      <div class="space-y-1.5 text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                        <p>
                          <strong>• 實務見解（76 台上 2907 決、86 台上 1787 決）：</strong>腎臟為人體排泄之重要器官，出手毆打使被害人左腎破裂切除，對健康屬重大傷害且為不治，<strong>核與 § 10 Ⅳ ⑥ 符合，構成重傷</strong>。
                        </p>
                        <p>
                          <strong>• 學說見解（反對）：</strong>重傷法定刑與殺人無異，概括條款須嚴審是否「接近生命危險」。原則上人有兩顆腎臟，醫學上一顆腎臟仍足以擔負整體過濾機能而不威脅生命，<strong>故非重傷</strong>。
                        </p>
                      </div>
                    </div>
                  </div>

                  <!-- 案例 2-13：剪斷生殖器僅餘兩公分 -->
                  <div class="p-4.5 rounded-2xl bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-800 space-y-3 flex flex-col justify-between">
                    <div class="space-y-2">
                      <div class="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-2">
                        <span class="text-xs font-bold text-red-600 dark:text-red-400 font-mono">【案例 2-13】</span>
                        <button type="button" onclick="copyCaseNote('case-2-13', this)" class="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 text-[11px] font-semibold transition-all">
                          📋 複製
                        </button>
                      </div>
                      <h5 class="text-xs sm:text-sm font-black text-slate-900 dark:text-white">
                        剪斷生殖器僅餘兩公分，但仍能勃起正常排尿，是否構成重傷？
                      </h5>
                      <div class="space-y-1.5 text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                        <p>
                          <strong>• 排泄機能：</strong>乙仍得正常排尿，排泄機能完全不受影響，非重傷（否則古代太監豈不全部死於尿毒症？）。
                        </p>
                        <p>
                          <strong>• 生殖機能 vs. 性功能：</strong>前者指製造精子、分泌雄性荷爾蒙使他方受孕之機能；後者指勃起快感。<strong>條文所指生殖機能為前者（78 台上 3271 決）</strong>。若睪丸製造精子機能完好，未喪失大部分生殖機能，客觀上不該當重傷。
                        </p>
                      </div>
                    </div>
                  </div>

                  <!-- 案例 2-14：斷手接回恢復良好 -->
                  <div class="p-4.5 rounded-2xl bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-800 space-y-3 flex flex-col justify-between">
                    <div class="space-y-2">
                      <div class="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-2">
                        <span class="text-xs font-bold text-red-600 dark:text-red-400 font-mono">【案例 2-14】</span>
                        <button type="button" onclick="copyCaseNote('case-2-14', this)" class="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 text-[11px] font-semibold transition-all">
                          📋 複製
                        </button>
                      </div>
                      <h5 class="text-xs sm:text-sm font-black text-slate-900 dark:text-white">
                        斬斷手掌後送醫手術接回恢復良好，是否構成重傷？
                      </h5>
                      <div class="space-y-1.5 text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                        <p>
                          <strong>• 後果持續存在原則：</strong>重傷應限於<strong>後果持續存在的情形</strong>，罪刑始能相當，否則就不是在處罰身體重大傷害，而是處罰被害人感到失去肢體的驚嚇。
                        </p>
                        <p>
                          毋須終其一生，只要無法在可預見期間內治癒即可（28 上 1098 例）。若手術接回恢復良好且無日後功能障礙，不構成重傷（蔡聖偉，〈斷手是否罪〉，台灣法學 199，p.244 以下）。
                        </p>
                      </div>
                    </div>
                  </div>

                  <!-- 案例 2-15：小提琴家斷中指 -->
                  <div class="p-4.5 rounded-2xl bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-800 space-y-3 flex flex-col justify-between">
                    <div class="space-y-2">
                      <div class="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-2">
                        <span class="text-xs font-bold text-red-600 dark:text-red-400 font-mono">【案例 2-15】</span>
                        <button type="button" onclick="copyCaseNote('case-2-15', this)" class="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 text-[11px] font-semibold transition-all">
                          📋 複製
                        </button>
                      </div>
                      <h5 class="text-xs sm:text-sm font-black text-slate-900 dark:text-white">
                        小提琴絕世高手右手中指被切斷終身無法演奏，是否構成重傷？
                      </h5>
                      <div class="space-y-1.5 text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                        <p>
                          <strong>• 個人功能考量說：</strong>認為重傷應置入個人職業特殊功能的考量，成立重傷。
                        </p>
                        <p>
                          <strong>• 一般性客觀標準（通說）：</strong>刑法上的重傷應該是<strong>一般性的客觀標準，不能因人而異</strong>，其最基本抓握功能仍健全，所以只是普通傷害（通說）。同理，切斷職業軍人右手食指導致終身無法扣扳機開槍，亦屬相同爭議。
                        </p>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </section>

          <!-- 九、性交之立法解釋（刑法 § 10 V，教材第 2-24 頁） -->
          <section id="sec-p0ch2-sec2-sexual-intercourse" class="space-y-6 pt-2">
            <div class="flex items-center gap-3">
              <span class="w-2 h-6 rounded-full bg-pink-600"></span>
              <h3 class="text-lg sm:text-xl font-black text-slate-900 dark:text-white tracking-tight">
                九、性交之立法解釋（§ 10 Ⅴ）：三大核心構成審查要件（教材第 2-24 頁）
              </h3>
            </div>

            <div class="p-6 sm:p-7 rounded-3xl border-2 border-pink-200 dark:border-pink-900/80 border-l-[8px] border-l-pink-600 bg-white dark:bg-[#111726] shadow-md space-y-6">
              
              <div class="p-4.5 rounded-2xl bg-pink-50/60 dark:bg-pink-950/20 border border-pink-200 dark:border-pink-900/40 space-y-2">
                <div class="flex items-center justify-between">
                  <span class="text-xs font-mono font-bold text-pink-600 dark:text-pink-400 uppercase tracking-wider flex items-center gap-1.5">
                    <span>📜</span>
                    <span>刑法第 10 條第 5 項【性交定義】立法規範</span>
                  </span>
                  <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-pink-100 dark:bg-pink-900/60 text-pink-700 dark:text-pink-300 font-bold">
                    教材第 2-24 頁
                  </span>
                </div>
                <p class="text-xs sm:text-sm text-slate-700 dark:text-slate-200 leading-relaxed font-medium">
                  刑法第 10 條第 5 項明定：「稱性交者，謂非基於正當目的所為之下列性侵入行為：一、以性器進入他人之性器、肛門或口腔，或使之接合之行為。二、以性器以外之其他身體部位或器物進入他人之性器、肛門，或使之接合之行為。」
                </p>
              </div>

              <!-- 🐣 刑法性交三大審查要件小白秒懂專區 -->
              <div class="rounded-2xl border-2 border-amber-300 dark:border-amber-700/80 bg-gradient-to-br from-amber-50/90 via-orange-50/60 to-yellow-50/70 dark:from-amber-950/40 dark:via-orange-950/30 dark:to-yellow-950/30 p-5 space-y-4 shadow-sm">
                <div class="flex items-center gap-2.5 border-b border-amber-200 dark:border-amber-800/60 pb-3">
                  <span class="text-2xl animate-bounce">🐣</span>
                  <div>
                    <h4 class="text-sm sm:text-base font-black text-amber-950 dark:text-amber-200">
                      【小白秒懂專區】刑法性交定義（§ 10 Ⅴ）：現代法律標準怎麼看？
                    </h4>
                    <p class="text-xs text-amber-800 dark:text-amber-300 font-medium">
                      三大關鍵拆解：排除正當醫療、徹底性別平權、進入受體嚴格鎖定三大孔道！
                    </p>
                  </div>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs sm:text-sm">
                  <div class="p-3.5 rounded-xl bg-white/95 dark:bg-slate-900/90 border border-amber-200 dark:border-amber-800/60 space-y-1.5 shadow-xs">
                    <span class="text-pink-700 dark:text-pink-300 font-black block flex items-center gap-1.5">
                      <span class="w-5 h-5 rounded-full bg-pink-100 dark:bg-pink-950 text-pink-800 dark:text-pink-200 flex items-center justify-center text-xs font-bold">1</span>
                      <span>非正當目的（保證醫生不犯法）</span>
                    </span>
                    <p class="text-xs text-slate-700 dark:text-slate-200 leading-relaxed font-normal">
                      為什麼婦產科醫師內診、護士幫病患插導尿管或量肛溫不犯法？因為法條主觀要件寫明<strong>「非基於正當目的」</strong>！醫療業務行為自始就<strong>不是性交</strong>，連犯罪構成要件都不該當！
                    </p>
                  </div>

                  <div class="p-3.5 rounded-xl bg-white/95 dark:bg-slate-900/90 border border-amber-200 dark:border-amber-800/60 space-y-1.5 shadow-xs">
                    <span class="text-indigo-700 dark:text-indigo-300 font-black block flex items-center gap-1.5">
                      <span class="w-5 h-5 rounded-full bg-indigo-100 dark:bg-indigo-950 text-indigo-800 dark:text-indigo-200 flex items-center justify-center text-xs font-bold">2</span>
                      <span>性別平權（打破舊法男性專屬）</span>
                    </span>
                    <p class="text-xs text-slate-700 dark:text-slate-200 leading-relaxed font-normal">
                      舊法時代只有「男人姦淫女人」才算性侵害；新法徹底平權化：<strong>男對女、女對男、男對男、女對女</strong>，所有人都能成為性自主權保護的被害人與加害人！
                    </p>
                  </div>

                  <div class="p-3.5 rounded-xl bg-white/95 dark:bg-slate-900/90 border border-amber-200 dark:border-amber-800/60 space-y-1.5 shadow-xs">
                    <span class="text-amber-700 dark:text-amber-300 font-black block flex items-center gap-1.5">
                      <span class="w-5 h-5 rounded-full bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-200 flex items-center justify-center text-xs font-bold">3</span>
                      <span>受體鎖定三大孔道（考點大魔王）</span>
                    </span>
                    <p class="text-xs text-slate-700 dark:text-slate-200 leading-relaxed font-normal">
                      進入的受體<strong>只有「性器、肛門、口腔」三處</strong>！如果是用器物或手指進入胸部、腋下、大腿夾縫，在法律上<strong>不能論以性交（強制性交罪）</strong>，只能論以猥褻罪！
                    </p>
                  </div>
                </div>
              </div>

              <!-- 三大審查維度網格卡片 -->
              <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                
                <!-- 1. 主觀要件：非基於正當目的 -->
                <div class="p-4.5 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border-2 border-pink-400/50 space-y-2.5">
                  <div class="flex items-center justify-between">
                    <span class="px-2 py-0.5 rounded bg-pink-100 dark:bg-pink-950 text-pink-800 dark:text-pink-300 font-mono font-bold text-[10px]">
                      主觀要件
                    </span>
                    <span class="text-[11px] font-bold text-pink-600 dark:text-pink-400">排除正當醫療</span>
                  </div>
                  <h4 class="text-sm font-black text-slate-900 dark:text-white">
                    (一) 非基於正當目的
                  </h4>
                  <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    行為人主觀上必須<strong>「非基於正當目的」</strong>，用以排除基於正當目的的醫療行為，例如婦產科醫生的內診、小兒科護理師幫嬰兒量肛溫等，可<strong>自始排除在性交的定義之外，進而無構成要件該當性</strong>。
                  </p>
                </div>

                <!-- 2. 主客體要件：性別無差異 -->
                <div class="p-4.5 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border-2 border-pink-400/50 space-y-2.5">
                  <div class="flex items-center justify-between">
                    <span class="px-2 py-0.5 rounded bg-pink-100 dark:bg-pink-950 text-pink-800 dark:text-pink-300 font-mono font-bold text-[10px]">
                      主客體要件
                    </span>
                    <span class="text-[11px] font-bold text-pink-600 dark:text-pink-400">雙向無性別差</span>
                  </div>
                  <h4 class="text-sm font-black text-slate-900 dark:text-white">
                    (二) 性別無差異性
                  </h4>
                  <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    行為主體與行為客體之間，<strong>沒有性別上的差異</strong>，可以是男對女、男對男、女對女、女對男的各種可能情形，破除傳統舊法僅限男對女姦淫之侷限。
                  </p>
                </div>

                <!-- 3. 客觀行為態樣與受體限制 -->
                <div class="p-4.5 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border-2 border-pink-400/50 space-y-2.5">
                  <div class="flex items-center justify-between">
                    <span class="px-2 py-0.5 rounded bg-pink-100 dark:bg-pink-950 text-pink-800 dark:text-pink-300 font-mono font-bold text-[10px]">
                      行為與受體
                    </span>
                    <span class="text-[11px] font-bold text-pink-600 dark:text-pink-400">受體三處嚴格鎖定</span>
                  </div>
                  <h4 class="text-sm font-black text-slate-900 dark:text-white">
                    (三) 進入接合與受體限制
                  </h4>
                  <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    行為態樣包括<strong>「進入」或「使之接合」</strong>，可以按照各種情形具體判斷；但請特別注意：<strong>受體部分只有「性器、肛門與口腔」三者</strong>，其餘身體部位（如胸部、腋下、大腿等）均非性交之受體！
                  </p>
                </div>

              </div>

            </div>
          </section>

          <!-- 十、本單元進度待續提示卡 (Progress & Scope Callout) -->
          <div class="p-5 sm:p-6 rounded-3xl border-2 border-dashed border-indigo-300 dark:border-indigo-800/80 bg-indigo-50/30 dark:bg-indigo-950/20 text-center space-y-2">
            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100 dark:bg-indigo-900/60 text-indigo-700 dark:text-indigo-300 text-xs font-bold">
              <span>📖 教材進度里程碑</span>
              <span class="w-1.5 h-1.5 rounded-full bg-indigo-500"></span>
              <span>第 2-14 ～ 2-24 頁已完整收錄</span>
            </div>
            <h4 class="text-sm sm:text-base font-black text-slate-900 dark:text-white">
              第二節 刑法的解釋方法（司法解釋、憲法解釋與公務員、重傷、性交立法解釋）全數收錄完畢
            </h4>
            <p class="text-xs text-slate-500 dark:text-slate-400 max-w-xl mx-auto leading-relaxed">
              本節目前已完整整合司法解釋四大方法、案例 2-7 至 2-15、合憲性與憲法取向解釋，以及刑法 § 10 名詞定義（公務員三大類型【表2】與個別化、重傷列舉與概括【案例 2-12～2-15】、性交三大審查要件）。教材第 2-25 頁起之後續內容，待後續頁面提供後即時增補！
            </p>
          </div>

          <!-- Chapter Bottom Pagination: 第二節底部雙向導航 -->
          <div class="pt-8 border-t border-slate-200 dark:border-white/[0.08] grid grid-cols-1 sm:grid-cols-2 gap-4">
            <button onclick="switchView('part0-ch2-sec1')" class="group p-4 rounded-2xl border border-slate-200 dark:border-white/[0.08] hover:border-indigo-500/40 bg-white dark:bg-[#111726] text-left transition-all hover:-translate-y-0.5 shadow-sm hover:shadow-md flex items-center gap-3 cursor-pointer">
              <div class="w-9 h-9 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 group-hover:bg-indigo-50 dark:group-hover:bg-indigo-950 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 flex items-center justify-center text-sm font-bold shrink-0 transition-colors">
                ←
              </div>
              <div class="min-w-0">
                <span class="text-[11px] text-slate-400 font-mono block">上一單元 (第 2-9 ～ 2-14 頁)</span>
                <span class="text-xs font-bold text-slate-800 dark:text-slate-200 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors truncate block">
                  第一節 刑法的適用效力
                </span>
              </div>
            </button>

            <button onclick="switchView('part0-chapter-3')" class="group p-4 rounded-2xl border border-indigo-500/40 hover:border-indigo-500 bg-gradient-to-br from-indigo-50/50 to-blue-50/30 dark:from-indigo-950/30 dark:to-blue-950/20 text-right transition-all hover:-translate-y-0.5 shadow-sm hover:shadow-md flex items-center justify-between gap-3 cursor-pointer">
              <div class="min-w-0 text-left">
                <span class="text-[11px] text-indigo-700 dark:text-indigo-400 font-mono block font-bold">下一章・插槽預備</span>
                <span class="text-xs font-extrabold text-slate-900 dark:text-white group-hover:text-indigo-700 dark:group-hover:text-indigo-400 transition-colors truncate block">
                  第三章 刑法的法律效果 (插槽) →
                </span>
              </div>
              <div class="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 to-indigo-600 text-white flex items-center justify-center text-sm font-bold shrink-0 group-hover:scale-105 transition-transform shadow-md shadow-indigo-500/30">
                ⚖️
              </div>
            </button>
          </div>

        </div>
`;
