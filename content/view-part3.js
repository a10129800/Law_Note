/**
 * view-part3.js
 * 第三篇 未遂犯的構成要件該當性（本篇導讀 1:1 原書復刻旗艦版）
 * 嚴格遵循 AGENTS.md 最高行為憲法規範：
 * 1. 逐字精準核對課本原文（第 448～449 頁 零錯字、零腦補、1:1 原書排版復刻）
 * 2. 圓圈徽章【第】【三】【篇】、粗襯線體大標題、手繪鋼筆旗幟與雙線邊框卡片
 * 3. 沉浸式導讀原則（無右側欄干擾、首行縮排、純粹紙本書籍典雅質感）
 * 4. 核心法理拆解卡：主觀不法大於客觀不法、四種組合公式矩陣、先主後客審查風貌與 § 25 Ⅱ 罪刑法定原則
 * 5. 犬系法學四大天王「未遂犯審查提示與前階層思維」深度法理點評客廳與 2026 最新法條動態定錨
 * 6. Zero-CORS 本機秒開相容架構
 */

window.APP_VIEWS = window.APP_VIEWS || {};
window.APP_VIEWS['viewPart3'] = window.APP_VIEWS['part3'] = `
        <!-- VIEW: 第三篇 未遂犯的構成要件該當性 (本篇導讀 1:1 原書復刻) -->
        <div id="viewPart3" class="fade-enter hidden space-y-8 flex flex-col items-center">
          
          <!-- 頂部快速返回導航條 -->
          <div class="w-full max-w-2xl flex items-center justify-between p-3 rounded-2xl bg-blue-50/60 dark:bg-blue-950/30 border border-blue-200/60 dark:border-blue-900/40">
            <button onclick="switchView('cover')" class="px-3.5 py-1.5 rounded-xl bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-blue-700 dark:text-blue-300 text-xs font-bold flex items-center gap-1.5 transition-all shadow-2xs border border-blue-200/50 dark:border-blue-800/50 cursor-pointer">
              <span>← 返回書籍主頁 / 封面</span>
            </button>
            <div class="flex items-center gap-2">
              <button onclick="switchView('part2-ch4-special2')" class="px-3.5 py-1.5 rounded-xl bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 text-xs font-bold flex items-center gap-1.5 transition-all shadow-2xs border border-slate-200/50 dark:border-slate-800/50 cursor-pointer">
                <span>← 上一單元：第二篇 第四章 專題二</span>
              </button>
              <span class="text-xs font-mono font-medium text-slate-500 dark:text-slate-400 hidden sm:inline">第三篇導讀</span>
            </div>
          </div>

          <!-- ══════════════════════════════════════════════════════════ -->
          <!-- 1:1 復刻原書紙本卡片 (居中單欄・沈浸純粹無污染) -->
          <!-- ══════════════════════════════════════════════════════════ -->
          <div class="w-full max-w-2xl book-page-canvas rounded-2xl bg-white dark:bg-[#151c2d] border border-slate-300/80 dark:border-slate-700 p-8 sm:p-12 transition-all space-y-10 relative shadow-lg">
            
            <!-- 頂部黑邊線與角標 -->
            <div class="flex justify-between items-center pb-2 border-b border-slate-900/80 dark:border-slate-400 text-[10px] font-mono tracking-widest text-slate-400">
              <span>PREFACE</span>
              <span>PART 3</span>
            </div>

            <!-- 1. 篇號徽章：【第】【三】【篇】三個圓圈 -->
            <div class="flex justify-center pt-2">
              <div class="inline-flex items-center gap-2 px-5 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800/80 border border-slate-300 dark:border-slate-600 shadow-2xs">
                <span class="w-7 h-7 rounded-full bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-slate-100 flex items-center justify-center font-serif font-black text-sm border border-slate-400 dark:border-slate-500">
                  第
                </span>
                <span class="w-7 h-7 rounded-full bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-slate-100 flex items-center justify-center font-serif font-black text-sm border border-slate-400 dark:border-slate-500">
                  三
                </span>
                <span class="w-7 h-7 rounded-full bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-slate-100 flex items-center justify-center font-serif font-black text-sm border border-slate-400 dark:border-slate-500">
                  篇
                </span>
              </div>
            </div>

            <!-- 2. 篇章大標題：粗襯線大標題 -->
            <div class="text-center space-y-2 py-2">
              <h1 class="font-serif font-black text-2xl sm:text-3xl text-slate-900 dark:text-white tracking-wider leading-relaxed">
                未遂犯的構成要件<br>
                該當性
              </h1>
              <div class="w-14 h-0.5 bg-slate-900 dark:bg-slate-300 mx-auto rounded-full mt-3"></div>
            </div>

            <!-- 3. 原書手繪旗幟與本篇導讀雙線邊框卡片 (教材第 448～449 頁) -->
            <div class="relative mt-8 pt-7 pb-6 px-6 sm:px-8 rounded-2xl border-2 border-slate-800 dark:border-slate-300 bg-slate-50/40 dark:bg-slate-900/30 space-y-5">
              
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

              <!-- 導讀正文 (逐字精確無錯字，忠實復刻原書第 448～449 頁) -->
              <div class="pt-2 space-y-4">
                <p class="font-serif text-[15px] sm:text-base text-slate-800 dark:text-slate-200 leading-loose text-justify indent-8 tracking-wide">
                  未遂犯是一種主觀不法大於客觀不法的論罪類型，亦即主觀構成要件該當而有故意，客觀構成要件卻僅達著手，因此當構成要件呈現組合Ⅱ：【客觀不該當＋主觀該當】時，便是「未遂犯的審查提示」。基於先客後主之論罪習慣，若客觀構成要件不該當，除組合Ⅱ外尚有組合Ⅳ：【客觀不該當＋主觀不該當】的可能，應先排除完全不成立犯罪的組合Ⅳ，才能終局開啟未遂犯的審查。鑑於故意已在審查提示中先行檢驗，所以未遂犯的構成要件僅餘「客觀上是否著手？」待驗。坊間解題習慣將審查提示與構成要件混合書寫，形成未遂犯「先討論主觀故意、後討論客觀著手」的特殊風貌。《有關未遂犯審查提示的詳細說明，請參閱：蔡聖偉，未遂犯的「前審查階層」，甘添貴教授七秩華誕祝壽論文集（上），P.395以下》
                </p>
                <p class="font-serif text-[15px] sm:text-base text-slate-800 dark:text-slate-200 leading-loose text-justify indent-8 tracking-wide">
                  本篇將先說明未遂犯的處罰根據，復討論著手的判斷標準，再進入特殊未遂類型（不能未遂、中止未遂）的討論。最後請大家謹記，未遂犯身為刑事處罰的例外，必須以刑法分則特別規定處罰者為限才能論處（§25Ⅱ），這是罪刑法定原則的基本要求。
                </p>
              </div>

              <!-- 底端出處 -->
              <div class="pt-3 flex items-center justify-between text-[11px] font-serif text-slate-400 dark:text-slate-500 border-t border-slate-200 dark:border-slate-800">
                <span>高點文化 • 陳奕廷律師編著</span>
                <span>第三篇 導讀（第 448～449 頁）</span>
              </div>

            </div>

            <!-- 底部微裝飾線 -->
            <div class="pt-2 flex justify-between items-center text-[10px] font-mono text-slate-400 border-t border-slate-200 dark:border-slate-800">
              <span>CRIMINAL LAW GENERAL PRINCIPLES</span>
              <span>PART 3 PREFACE</span>
            </div>

          </div>

          <!-- ══════════════════════════════════════════════════════════ -->
          <!-- 核心法理拆解卡：未遂犯審查提示與四大要件組合矩陣 -->
          <!-- ══════════════════════════════════════════════════════════ -->
          <div class="w-full max-w-2xl p-6 sm:p-7 rounded-3xl bg-white dark:bg-[#121827] border border-slate-200/90 dark:border-white/10 shadow-sm space-y-4">
            <div class="flex items-center gap-2 text-xs font-mono text-blue-600 dark:text-blue-400 font-bold uppercase tracking-wider">
              <span>💡 核心法理解構</span>
              <span>•</span>
              <span>論罪類型矩陣與審查提示</span>
            </div>

            <h3 class="font-serif font-black text-lg sm:text-xl text-slate-900 dark:text-white">
              為什麼未遂犯會形成「先討論主觀故意、後討論客觀著手」的特殊風貌？
            </h3>

            <!-- 四大組合矩陣對照（嚴格單欄垂直堆疊） -->
            <div class="space-y-3 pt-1">
              
              <!-- 組合 Ⅰ -->
              <div class="p-4 rounded-2xl bg-gradient-to-br from-blue-50/70 to-slate-50 dark:from-blue-950/30 dark:to-slate-900 border border-blue-200 dark:border-blue-800/60 border-l-[6px] border-l-blue-600 shadow-xs space-y-1.5">
                <div class="flex items-center justify-between">
                  <span class="text-xs font-mono font-black px-2 py-0.5 rounded bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200">
                    組合 Ⅰ • 故意既遂（處罰原則）
                  </span>
                  <span class="text-xs font-bold text-blue-600 dark:text-blue-400 font-mono">客觀該當 ＋ 主觀該當</span>
                </div>
                <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-serif leading-relaxed">
                  第二篇所研討的核心帝王類型。行為人具備故意且法益侵害結果已具體實現。
                </p>
              </div>

              <!-- 組合 Ⅱ：本篇核心焦點 -->
              <div class="p-4.5 rounded-2xl bg-gradient-to-br from-purple-50/80 to-slate-50 dark:from-purple-950/40 dark:to-slate-900 border-2 border-purple-300 dark:border-purple-700/70 border-l-[8px] border-l-purple-600 shadow-xs space-y-2">
                <div class="flex items-center justify-between">
                  <span class="text-xs font-mono font-black px-2 py-0.5 rounded bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200">
                    組合 Ⅱ • 未遂犯審查提示（本篇焦點）
                  </span>
                  <span class="text-xs font-bold text-purple-600 dark:text-purple-400 font-mono">客觀不該當 ＋ 主觀該當</span>
                </div>
                <h4 class="font-black text-sm sm:text-base text-slate-900 dark:text-white">
                  主觀不法大於客觀不法：故意齊備，客觀僅達「著手」
                </h4>
                <p class="text-xs sm:text-sm text-slate-700 dark:text-slate-200 font-serif leading-relaxed text-justify">
                  基於先客後主論罪習慣，客觀構成要件既遂既不該當，便必須先排除組合 Ⅳ（主客均不該當），確認行為人<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">具有主觀故意</span>後，終局開啟未遂犯審查。因故意已在提示中檢驗，構成要件只需檢驗<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">「客觀上是否著手？」</span>。
                </p>
              </div>

              <!-- 組合 Ⅲ -->
              <div class="p-4 rounded-2xl bg-gradient-to-br from-slate-100 to-slate-50 dark:from-slate-800/60 dark:to-slate-900 border border-slate-300 dark:border-slate-700 border-l-[6px] border-l-slate-500 shadow-xs space-y-1.5">
                <div class="flex items-center justify-between">
                  <span class="text-xs font-mono font-black px-2 py-0.5 rounded bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-slate-200">
                    組合 Ⅲ • 過失犯
                  </span>
                  <span class="text-xs font-bold text-slate-600 dark:text-slate-400 font-mono">客觀該當 ＋ 主觀不該當</span>
                </div>
                <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-serif leading-relaxed">
                  客觀有法益損害結果，但主觀欠缺故意。僅在刑法分則特別明文處罰過失者方予論處（第四篇將詳論）。
                </p>
              </div>

              <!-- 組合 Ⅳ -->
              <div class="p-4 rounded-2xl bg-gradient-to-br from-emerald-50/70 to-slate-50 dark:from-emerald-950/30 dark:to-slate-900 border border-emerald-200 dark:border-emerald-800/60 border-l-[6px] border-l-emerald-600 shadow-xs space-y-1.5">
                <div class="flex items-center justify-between">
                  <span class="text-xs font-mono font-black px-2 py-0.5 rounded bg-emerald-100 dark:bg-emerald-900 text-emerald-800 dark:text-emerald-200">
                    組合 Ⅳ • 完全不成立犯罪
                  </span>
                  <span class="text-xs font-bold text-emerald-600 dark:text-emerald-400 font-mono">客觀不該當 ＋ 主觀不該當</span>
                </div>
                <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-serif leading-relaxed">
                  客觀既未既遂、主觀亦無故意，應直接排除於刑法評價之外，不成立任何犯罪。
                </p>
              </div>

              <!-- 核心法律要求提示卡 -->
              <div class="p-4 rounded-xl bg-amber-50/80 dark:bg-amber-950/30 border border-amber-300/80 dark:border-amber-700/60 text-xs sm:text-sm text-amber-950 dark:text-amber-200 font-serif leading-relaxed">
                ⚖️ <strong>刑法第 25 條第 2 項鐵律：</strong>未遂犯身為刑事處罰的例外，<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">必須以刑法分則特別規定處罰者為限才能論處</span>，這是罪刑法定原則的基本要求！若分則未明文「處罰未遂」，縱有著手亦絕對不罰。
              </div>

            </div>
          </div>

          <!-- ══════════════════════════════════════════════════════════ -->
          <!-- 犬系法學四大天王：第三篇開篇導讀研討客廳 -->
          <!-- ══════════════════════════════════════════════════════════ -->
          <div class="w-full max-w-2xl space-y-4 font-serif">
            
            <div class="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-2">
              <div class="flex items-center gap-2 font-black text-slate-900 dark:text-white text-base">
                <span>🐾</span>
                <span>犬系法學四大天王 • 第三篇導讀研討客廳</span>
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
                  「柴柴來用生活白話幫大家翻譯！想像你瞄準靶心開槍卻脫靶了，現實世界裡目標根本沒受傷（客觀未該當），但你腦袋裡確實想把人打死（主觀故意滿分），這就是<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">主觀不法大於客觀不法</span>！解題時看到沒死人，先別急著放人走，先抓出主觀故意，再確認有沒有跨過『著手』這條紅線，這就是未遂犯的核心思維！」
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
                  「法庭攻防上，辯護律師在未遂犯有兩道銅牆鐵壁！第一道是<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">擊破主觀故意</span>：只要當事人根本沒有犯意（排除組合 Ⅱ 導向組合 Ⅳ），未遂大門當場關閉；第二道是死守<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">預備與著手的界線</span>：只要檢方無法證明被告已達直接密接侵害之著手程度，在無罰預備罪的情形下，一律無罪防線固若金湯！」
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
                  「【實體法嚴格檢索】刑法第 25 條第 2 項是絕對的憲法級邊界：『未遂犯之處罰，以有特別規定者為限。』例如殺人罪（§ 271 Ⅲ）、竊盜罪（§ 320 Ⅲ）有罰未遂，但過失傷害、毀損罪等並無處罰未遂之明文。審查未遂犯時，第一步請先掃描法條有無『未遂犯罰之』，無明文者直接不成立犯罪！」
                </p>
              </div>
            </div>

            <!-- 4. 邊牧首席審判長 -->
            <div class="p-5 rounded-2xl bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white border-2 border-amber-400/80 shadow-md flex items-start gap-4">
              <div class="w-12 h-12 rounded-full overflow-hidden shrink-0 border-2 border-amber-400 shadow-xs">
                <img src="images/border_collie_chief_judge.jpg" alt="邊牧審判長" class="w-full h-full object-cover" style="object-position: center 25%; transform: scale(1.35);">
              </div>
              <div class="space-y-2 text-xs sm:text-sm">
                <div class="flex items-center justify-between">
                  <div class="font-black text-amber-300 text-sm sm:text-base">
                    👨‍⚖️ 邊牧首席審判長 • 終審裁定與國考答題定錨
                  </div>
                  <span class="text-[10px] font-mono px-2 py-0.5 rounded-full bg-amber-400/20 text-amber-300 border border-amber-400/40">
                    #法槌一敲誰與爭鋒
                  </span>
                </div>
                <p class="leading-relaxed text-slate-200">
                  「🔨【終審判定】：蔡聖偉教授提出的<strong>未遂犯『前審查階層』</strong>，徹底解開了坊間解題為何總是『先論主觀故意、後論客觀著手』的謎團！在國考實戰中，若判定客觀未遂，務必於答題開頭明引刑法第 25 條第 2 項及該罪之未遂處罰條款，確立審查標的。」
                </p>
                <div class="p-2.5 rounded-xl bg-white/10 border border-white/20 text-slate-200 space-y-1">
                  <div class="font-bold text-amber-200 flex items-center gap-1.5 text-xs">
                    <span>📅</span>
                    <span>2026 最新法條動態備註</span>
                  </div>
                  <p class="text-[11px] leading-relaxed text-slate-300">
                    現行刑法第 25 條（未遂犯定義與處罰）及第 26 條（不能未遂）、第 27 條（中止未遂）法規範體系穩定。考生於 2026 國考答題時，請放心以通說三階體系為架構，穩健展開！
                  </p>
                </div>
              </div>
            </div>

          </div>

          <!-- ══════════════════════════════════════════════════════════ -->
          <!-- 第三篇章節研讀規劃卡片 -->
          <!-- ══════════════════════════════════════════════════════════ -->
          <div class="w-full max-w-2xl p-5 rounded-2xl border-2 border-purple-400 dark:border-purple-700 bg-gradient-to-br from-purple-50/80 to-indigo-50/50 dark:from-purple-950/40 dark:to-indigo-950/30 space-y-3 font-serif shadow-xs">
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-2">
                <span class="w-2.5 h-2.5 rounded-full bg-purple-500 animate-pulse"></span>
                <span class="font-black text-sm text-purple-950 dark:text-purple-200">第三篇 • 體系學習路線</span>
              </div>
              <span class="text-[11px] font-mono font-bold px-2 py-0.5 rounded bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200">
                P. 448～449 導讀開啟
              </span>
            </div>
            <p class="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
              本篇將循序展開三大核心單元：<strong>① 未遂犯的處罰根據</strong> ➔ <strong>② 著手的判斷標準</strong> ➔ <strong>③ 特殊未遂類型（不能未遂、中止未遂）</strong>。
            </p>
          </div>

          <!-- 第三篇導讀 底部導航條 -->
          <div class="w-full max-w-2xl flex items-center justify-between p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-blue-50/80 via-white to-purple-50/80 dark:from-[#121827] dark:to-[#1a1833] border border-slate-200/80 dark:border-slate-800 shadow-xs flex-wrap gap-3">
            <button onclick="switchView('part2-ch4-special2')" class="px-4 py-2 rounded-xl bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 font-bold text-xs flex items-center gap-1.5 border border-slate-200 dark:border-slate-700 cursor-pointer">
              <span>← 上一單元：第二篇 第四章 專題二</span>
            </button>
            <div class="flex items-center gap-2 flex-wrap">
              <button onclick="switchView('cover')" class="px-4 py-2 rounded-xl bg-amber-50 dark:bg-amber-950/40 text-amber-800 dark:text-amber-200 hover:bg-amber-100 dark:hover:bg-amber-900/50 font-bold text-xs flex items-center gap-1.5 border border-amber-300 dark:border-amber-700/60 cursor-pointer">
                <span>🏠 書籍首頁</span>
              </button>
              <button onclick="switchView('part2')" class="px-4 py-2 rounded-xl bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300 hover:bg-blue-100 dark:hover:bg-blue-900/50 font-bold text-xs flex items-center gap-1.5 border border-blue-300 dark:border-blue-700/60 cursor-pointer">
                <span>📖 第二篇導讀</span>
              </button>
            </div>
          </div>

        </div>
`;

