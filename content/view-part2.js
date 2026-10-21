/**
 * view-part2.js
 * 第二篇 故意既遂犯的構成要件該當性（本篇導讀 1:1 原書復刻旗艦版）
 * 嚴格遵循 AGENTS.md 最高行為憲法規範：
 * 1. 逐字精準核對課本原文（第 3-28 頁 零錯字、零腦補、1:1 原書排版復刻）
 * 2. 圓圈徽章【第】【二】【篇】、粗襯線體大標題、手繪鋼筆旗幟與雙線邊框卡片
 * 3. 沉浸式導讀原則（無右側欄干擾、首行縮排、純粹紙本書籍典雅質感）
 * 4. 犬系法學四大天王「行為非價 vs 結果非價」深度法理點評客廳與 2026 最新法條動態定錨
 * 5. 核心原理拆解卡片：行為不法（行為非價）與結果不法（結果非價）之雙重可罰性基礎
 * 6. Zero-CORS 本機秒開相容架構
 */

window.APP_VIEWS = window.APP_VIEWS || {};
window.APP_VIEWS['viewPart2'] = window.APP_VIEWS['part2'] = `
        <!-- VIEW: 第二篇 故意既遂犯的構成要件該當性 (本篇導讀 1:1 原書復刻) -->
        <div id="viewPart2" class="fade-enter hidden space-y-8 flex flex-col items-center">
          
          <!-- 頂部快速返回導航條 -->
          <div class="w-full max-w-2xl flex items-center justify-between p-3 rounded-2xl bg-blue-50/60 dark:bg-blue-950/30 border border-blue-200/60 dark:border-blue-900/40">
            <button onclick="switchView('cover')" class="px-3.5 py-1.5 rounded-xl bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-blue-700 dark:text-blue-300 text-xs font-bold flex items-center gap-1.5 transition-all shadow-2xs border border-blue-200/50 dark:border-blue-800/50 cursor-pointer">
              <span>← 返回書籍主頁 / 封面</span>
            </button>
            <div class="flex items-center gap-2">
              <button onclick="switchView('part1-ch3-sec2')" class="px-3.5 py-1.5 rounded-xl bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 text-xs font-bold flex items-center gap-1.5 transition-all shadow-2xs border border-slate-200/50 dark:border-slate-800/50 cursor-pointer">
                <span>← 上一單元：第一篇 第三章第二節 各種論罪類型</span>
              </button>
              <span class="text-xs font-mono font-medium text-slate-500 dark:text-slate-400 hidden sm:inline">第二篇導讀</span>
            </div>
          </div>

          <!-- ══════════════════════════════════════════════════════════ -->
          <!-- 1:1 復刻原書紙本卡片 (居中單欄・沈浸純粹無污染) -->
          <!-- ══════════════════════════════════════════════════════════ -->
          <div class="w-full max-w-2xl book-page-canvas rounded-2xl bg-white dark:bg-[#151c2d] border border-slate-300/80 dark:border-slate-700 p-8 sm:p-12 transition-all space-y-10 relative shadow-lg">
            
            <!-- 頂部黑邊線與角標 -->
            <div class="flex justify-between items-center pb-2 border-b border-slate-900/80 dark:border-slate-400 text-[10px] font-mono tracking-widest text-slate-400">
              <span>PREFACE</span>
              <span>PART 2</span>
            </div>

            <!-- 1. 篇號徽章：【第】【二】【篇】三個圓圈 -->
            <div class="flex justify-center pt-2">
              <div class="inline-flex items-center gap-2 px-5 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800/80 border border-slate-300 dark:border-slate-600 shadow-2xs">
                <span class="w-7 h-7 rounded-full bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-slate-100 flex items-center justify-center font-serif font-black text-sm border border-slate-400 dark:border-slate-500">
                  第
                </span>
                <span class="w-7 h-7 rounded-full bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-slate-100 flex items-center justify-center font-serif font-black text-sm border border-slate-400 dark:border-slate-500">
                  二
                </span>
                <span class="w-7 h-7 rounded-full bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-slate-100 flex items-center justify-center font-serif font-black text-sm border border-slate-400 dark:border-slate-500">
                  篇
                </span>
              </div>
            </div>

            <!-- 2. 篇章大標題：粗襯線大標題 -->
            <div class="text-center space-y-2 py-2">
              <h1 class="font-serif font-black text-2xl sm:text-3xl text-slate-900 dark:text-white tracking-wider leading-relaxed">
                故意既遂犯的構成<br>
                要件該當性
              </h1>
              <div class="w-14 h-0.5 bg-slate-900 dark:bg-slate-300 mx-auto rounded-full mt-3"></div>
            </div>

            <!-- 3. 原書手繪旗幟與本篇導讀雙線邊框卡片 (教材第 3-28 頁) -->
            <div class="relative mt-8 pt-7 pb-6 px-6 sm:px-8 rounded-2xl border-2 border-slate-800 dark:border-slate-300 bg-slate-50/40 dark:bg-slate-900/30 space-y-4">
              
              <!-- 頂端懸浮的手繪旗幟與鋼筆圖示 -->
              <div class="absolute -top-5 left-1/2 -translate-x-1/2 bg-white dark:bg-[#151c2d] px-4 py-0.5 rounded-full border-2 border-slate-800 dark:border-slate-300 flex items-center gap-2 shadow-2xs">
                <!-- 鋼筆圖示 -->
                <svg class="w-4 h-4 text-slate-800 dark:text-slate-200 -rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                </svg>
                <div class="text-center">
                  <span class="font-serif font-bold text-sm text-slate-900 dark:text-white tracking-widest block leading-tight">
                    本篇導讀
                  </span>
                  <span class="font-script text-[11px] text-slate-500 dark:text-slate-400 block -mt-0.5">
                    Conducted read
                  </span>
                </div>
              </div>

              <!-- 導讀正文 (逐字精確無錯字，忠實復刻原書第 3-28 頁) -->
              <div class="pt-2">
                <p class="font-serif text-[15px] sm:text-base text-slate-800 dark:text-slate-200 leading-loose text-justify indent-8 tracking-wide">
                  故意既遂犯的構成要件該當型式是組合Ⅰ：【客觀該當＋主觀該當】，其可罰性基礎很單純，可以從兩個角度切入。由行為看來，展現出極為高度的社會損害性；由結果看來，造成人類日常生活中最典型、嚴重的法益侵害。因此，一個由高度社會損害性行為所引發的法益侵害結果，理所當然成為處罰原則。這種建構可罰性的詮釋方法，分別稱為行為不法（也稱行為非價）與結果不法（也稱結果非價），前者較關注行為人做社會損害性行為的態度及決意，與故意相關；後者較關注法益侵害的具體實現，與既遂相關。「故意」做社會損害性行為並使法益侵害「既遂」，便是刑法在構成要件該當性階層所欲掌握的核心犯罪類型——故意既遂犯。
                </p>
              </div>

              <!-- 底端出處 -->
              <div class="pt-3 flex items-center justify-between text-[11px] font-serif text-slate-400 dark:text-slate-500 border-t border-slate-200 dark:border-slate-800">
                <span>高點文化 • 陳奕廷律師編著</span>
                <span>第二篇 導讀（第 3-28 頁）</span>
              </div>

            </div>

            <!-- 底部微裝飾線 -->
            <div class="pt-2 flex justify-between items-center text-[10px] font-mono text-slate-400 border-t border-slate-200 dark:border-slate-800">
              <span>CRIMINAL LAW GENERAL PRINCIPLES</span>
              <span>PART 2 PREFACE</span>
            </div>

          </div>

          <!-- ══════════════════════════════════════════════════════════ -->
          <!-- 核心法理拆解卡：行為非價（行為不法）vs 結果非價（結果不法） -->
          <!-- ══════════════════════════════════════════════════════════ -->
          <div class="w-full max-w-2xl p-6 sm:p-7 rounded-3xl bg-white dark:bg-[#121827] border border-slate-200/90 dark:border-white/10 shadow-sm space-y-4">
            <div class="flex items-center gap-2 text-xs font-mono text-blue-600 dark:text-blue-400 font-bold uppercase tracking-wider">
              <span>💡 核心法理解構</span>
              <span>•</span>
              <span>可罰性的雙重視角</span>
            </div>

            <h3 class="font-serif font-black text-lg sm:text-xl text-slate-900 dark:text-white">
              為什麼「故意既遂犯」理所當然成為刑法的處罰原則？
            </h3>

            <!-- 雙欄對稱可罰性架構（響應式單欄垂直堆疊） -->
            <div class="space-y-3 pt-1">
              <!-- 行為不法 (行為非價) -->
              <div class="p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-indigo-50/70 to-slate-50 dark:from-indigo-950/30 dark:to-slate-900 border-2 border-indigo-200 dark:border-indigo-800/60 border-l-[6px] border-l-indigo-600 shadow-xs space-y-2">
                <div class="flex items-center justify-between">
                  <span class="text-xs font-mono font-black px-2 py-0.5 rounded bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200">
                    角度 ① • 行為視角
                  </span>
                  <span class="text-xs font-bold text-indigo-600 dark:text-indigo-400 font-mono">Handlungsunwert</span>
                </div>
                <h4 class="font-black text-base text-slate-900 dark:text-white">
                  行為不法（行為非價）➔ 鎖定「主觀故意」
                </h4>
                <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-serif leading-relaxed text-justify">
                  關注行為人實施高度社會損害性行為時的<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">主觀態度與犯罪決意</span>。明知法規禁止卻執意為之，具備高度的惡意與規範敵對性。
                </p>
              </div>

              <!-- 結果不法 (結果非價) -->
              <div class="p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-blue-50/70 to-slate-50 dark:from-blue-950/30 dark:to-slate-900 border-2 border-blue-200 dark:border-blue-800/60 border-l-[6px] border-l-blue-600 shadow-xs space-y-2">
                <div class="flex items-center justify-between">
                  <span class="text-xs font-mono font-black px-2 py-0.5 rounded bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200">
                    角度 ② • 結果視角
                  </span>
                  <span class="text-xs font-bold text-blue-600 dark:text-blue-400 font-mono">Erfolgsunwert</span>
                </div>
                <h4 class="font-black text-base text-slate-900 dark:text-white">
                  結果不法（結果非價）➔ 鎖定「客觀既遂」
                </h4>
                <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-serif leading-relaxed text-justify">
                  關注外在世界中<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">法益侵害結果的具體實現</span>。造成人類日常生活中最典型、最嚴重的法益破壞（如生命喪失、財物被奪），客觀侵害完全發生。
                </p>
              </div>

              <!-- 雙非價交會總結卡 -->
              <div class="p-4 rounded-xl bg-amber-50/80 dark:bg-amber-950/30 border border-amber-300/80 dark:border-amber-700/60 text-xs sm:text-sm text-amber-950 dark:text-amber-200 font-serif leading-relaxed">
                👉 <strong>總結金鑰：</strong>「故意」（行為非價）做社會損害性行為，並使法益侵害「既遂」（結果非價），兩者齊備，便共同構築了刑法構成要件該當性階層的核心帝王類型——<strong>故意既遂犯</strong>！
              </div>
            </div>
          </div>

          <!-- ══════════════════════════════════════════════════════════ -->
          <!-- 犬系法學四大天王：第二篇開篇導讀研討客廳 -->
          <!-- ══════════════════════════════════════════════════════════ -->
          <div class="w-full max-w-2xl space-y-4 font-serif">
            
            <div class="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-2">
              <div class="flex items-center gap-2 font-black text-slate-900 dark:text-white text-base">
                <span>🐾</span>
                <span>犬系法學四大天王 • 第二篇導讀研討客廳</span>
              </div>
              <span class="text-xs font-mono text-amber-600 dark:text-amber-400 font-bold">
                法理點睛
              </span>
            </div>

            <!-- 1. 柴柴法學教授 -->
            <div class="p-5 rounded-2xl bg-gradient-to-br from-amber-50/90 to-orange-50/50 dark:from-amber-950/30 dark:to-slate-900 border-2 border-amber-300 dark:border-amber-700/60 border-l-[6px] border-l-amber-500 flex items-start gap-4 shadow-xs">
              <div class="w-12 h-12 rounded-full overflow-hidden shrink-0 border-2 border-amber-500 shadow-xs">
                <img src="images/shiba_law_professor.jpg" alt="柴柴法學教授" class="w-full h-full object-cover" style="object-position: center 20%; transform: scale(1.38);">
              </div>
              <div class="space-y-1.5 text-xs sm:text-sm text-slate-800 dark:text-slate-200">
                <div class="font-black text-amber-950 dark:text-amber-300 text-sm sm:text-base">
                  🐾 柴柴法學教授 • 白話生活大解碼
                </div>
                <p class="leading-relaxed">
                  「柴柴來幫大家把這段文字翻譯成白話！刑法為什麼要抓人去關？因為你<strong>『心態超壞（行為非價）』</strong>而且<strong>『真的造成重大傷害（結果非價）』</strong>！如果只有壞心態但沒成功，那是未遂；如果真的造成傷害但不是故意的，那是過失。只有第二篇要講的<strong>故意既遂犯</strong>，是兩樣全中！它是整個刑法分則所有罪名最核心的模板！」
                </p>
              </div>
            </div>

            <!-- 2. 金毛大律師 -->
            <div class="p-5 rounded-2xl bg-gradient-to-br from-blue-50/90 to-slate-50 dark:from-blue-950/30 dark:to-slate-900 border-2 border-blue-300 dark:border-blue-700/60 border-l-[6px] border-l-blue-600 flex items-start gap-4 shadow-xs">
              <div class="w-12 h-12 rounded-full overflow-hidden shrink-0 border-2 border-blue-500 shadow-xs">
                <img src="images/golden_case_attorney.jpg" alt="金毛辯護律師" class="w-full h-full object-cover" style="object-position: center 20%; transform: scale(1.35);">
              </div>
              <div class="space-y-1.5 text-xs sm:text-sm text-slate-800 dark:text-slate-200">
                <div class="font-black text-blue-950 dark:text-blue-300 text-sm sm:text-base">
                  ⚖️ 金毛大律師 • 實戰攻防眼光
                </div>
                <p class="leading-relaxed">
                  「在法庭交鋒中，行為非價與結果非價就是辯護律師的解構利刃！只要能在法官面前打掉其中一根柱子——例如證明被害人的法益損害另有他因（中斷結果非價），或者證明被告行為時毫無認識決意（擊破行為非價），故意既遂的重罪大網就會當場裂解！」
                </p>
              </div>
            </div>

            <!-- 3. 德牧法規巡查官 -->
            <div class="p-5 rounded-2xl bg-gradient-to-br from-slate-100 to-slate-50 dark:from-slate-800/80 dark:to-slate-900 border-2 border-slate-300 dark:border-slate-700 border-l-[6px] border-l-slate-600 flex items-start gap-4 shadow-xs">
              <div class="w-12 h-12 rounded-full overflow-hidden shrink-0 border-2 border-slate-500 shadow-xs">
                <img src="images/shepherd_law_inspector.jpg" alt="德牧法規巡查官" class="w-full h-full object-cover" style="object-position: center 15%; transform: scale(1.4);">
              </div>
              <div class="space-y-1.5 text-xs sm:text-sm text-slate-800 dark:text-slate-200">
                <div class="font-black text-slate-900 dark:text-white text-sm sm:text-base">
                  🛡️ 德牧法規巡查官 • 法規雷達查核
                </div>
                <p class="leading-relaxed">
                  「實體法檢索：刑法第 12 條第 1 項明定『行為非出於故意或過失者，不罰。』處罰故意既遂乃原則。第二篇即將深入審查構成要件該當性的兩大翅膀：客觀構成要件（行為、結果、因果關係與客觀歸責）與主觀構成要件（構成要件故意與意圖）。」
                </p>
              </div>
            </div>

            <!-- 4. 邊牧首席審判長 -->
            <div class="p-5 rounded-2xl bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white border-2 border-amber-400/80 shadow-md flex items-start gap-4">
              <div class="w-12 h-12 rounded-full overflow-hidden shrink-0 border-2 border-amber-400 shadow-xs">
                <img src="images/border_collie_chief_judge.jpg" alt="邊牧審判長" class="w-full h-full object-cover" style="object-position: center 25%; transform: scale(1.35);">
              </div>
              <div class="space-y-1.5 text-xs sm:text-sm">
                <div class="font-black text-amber-300 text-sm sm:text-base">
                  👨‍⚖️ 邊牧首席審判長 • 終審裁定與 2026 答題定錨
                </div>
                <p class="leading-relaxed text-slate-200">
                  「#法槌一敲誰與爭鋒！第二篇是全體刑法學習中最重磅、篇幅最龐大的一篇。國考任何一道刑法實例題，有 80% 的篇幅都在檢驗第二篇的構成要件該當性。請讀者保持定力，我們即將正式進入這座宏偉的刑法殿堂！」
                </p>
              </div>
            </div>

          </div>

          <!-- ══════════════════════════════════════════════════════════ -->
          <!-- 第二篇後續章節研讀進度卡片 (第一章已全章解鎖) -->
          <!-- ══════════════════════════════════════════════════════════ -->
          <div class="w-full max-w-2xl p-5 rounded-2xl border-2 border-blue-400 dark:border-blue-700 bg-gradient-to-br from-blue-50/80 to-indigo-50/50 dark:from-blue-950/40 dark:to-indigo-950/30 space-y-3 font-serif shadow-xs">
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-2">
                <span class="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                <span class="font-black text-sm text-blue-950 dark:text-blue-200">第二篇 • 第一章 現已正式解鎖！</span>
              </div>
              <span class="text-[11px] font-mono font-bold px-2 py-0.5 rounded bg-emerald-100 dark:bg-emerald-900 text-emerald-800 dark:text-emerald-200">
                教材 4-1～4-5 完結
              </span>
            </div>
            <p class="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
              <strong>第一章 構成要件該當性的發展歷史（＝犯罪審查的發展歷史）</strong>：帶您橫跨「科學至上 ➔ 故意搬移 ➔ 風險社會 ➔ 承接發展」百年四大時期，澈底弄懂【分娩案】與【翻車案】的法理大進化！
            </p>
            <div class="pt-1">
              <button onclick="switchView('part2-ch1')" class="w-full py-2.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-md shadow-blue-500/20 active:scale-98 cursor-pointer">
                <span>📜 立即進入研讀：第一章 構成要件該當性的發展歷史</span>
                <span>→</span>
              </button>
            </div>
          </div>

          <!-- 第二篇導讀 底部導航條 -->
          <div class="w-full max-w-2xl flex items-center justify-between p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-blue-50/80 via-white to-indigo-50/80 dark:from-[#121827] dark:to-[#162035] border border-blue-200/80 dark:border-blue-900/40 shadow-xs flex-wrap gap-3">
            <button onclick="switchView('part1-ch3-sec2')" class="px-4 py-2 rounded-xl bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 font-bold text-xs flex items-center gap-1.5 border border-slate-200 dark:border-slate-700 cursor-pointer">
              <span>← 上一單元：第一篇 第三章第二節</span>
            </button>
            <div class="flex items-center gap-2 flex-wrap">
              <button onclick="switchView('cover')" class="px-4 py-2 rounded-xl bg-amber-50 dark:bg-amber-950/40 text-amber-800 dark:text-amber-200 hover:bg-amber-100 dark:hover:bg-amber-900/50 font-bold text-xs flex items-center gap-1.5 border border-amber-300 dark:border-amber-700/60 cursor-pointer">
                <span>🏠 書籍首頁</span>
              </button>
              <button onclick="switchView('part2-ch1')" class="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs flex items-center gap-1.5 transition-all shadow-md shadow-blue-500/20 active:scale-95 cursor-pointer">
                <span>第一章 發展歷史 →</span>
              </button>
            </div>
          </div>

        </div>
`;
