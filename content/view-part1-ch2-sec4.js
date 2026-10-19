/**
 * view-part1-ch2-sec4.js
 * 第一篇 第二章 第四節 一般犯與身分犯（教材第 3-17 ～ 3-18 頁 全節完結旗艦版）
 * 嚴格遵循 AGENTS.md 最高行為憲法規範：
 * 1. 逐字精準核對課本原文（第 3-17 ～ 3-18 頁 零錯字、零腦補）
 * 2. 嚴格單欄垂直上下堆疊排版（Strict Vertical Stacking）
 * 3. 重點文字採用「純紅底線」規範（No Aggressive Red Text）
 * 4. 復刻全節架構高質感 SVG 圖解（一般犯 vs 純正身分犯 vs 不純正身分犯）
 * 5. 犬系法學四大天王「身分犯法學研討客廳」深度點評與 2026 最新法條動態定錨
 * 6. Zero-CORS 本機秒開相容架構
 */

window.APP_VIEWS = window.APP_VIEWS || {};
window.APP_VIEWS['viewPart1Ch2Sec4'] = window.APP_VIEWS['part1Ch2Sec4'] = window.APP_VIEWS['part1-ch2-sec4'] = `
        <!-- VIEW: 第一篇 第二章 第四節 一般犯與身分犯 (教材第 3-17 ～ 3-18 頁) -->
        <div id="viewPart1Ch2Sec4" class="fade-enter hidden space-y-8">
          
          <!-- 麵包屑導航 -->
          <div class="flex items-center justify-between gap-4 border-b border-slate-200/80 dark:border-white/10 pb-3">
            <nav class="flex items-center gap-2 text-xs font-medium text-slate-500 dark:text-slate-400 flex-wrap">
              <button onclick="switchView('part1')" class="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">第一篇</button>
              <span>/</span>
              <button onclick="switchView('part1-ch2-sec3')" class="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">第二章 第三節 行為犯與結果犯</button>
              <span>/</span>
              <span class="text-blue-600 dark:text-blue-400 font-bold">第二章 第四節 一般犯與身分犯</span>
            </nav>
            <button onclick="switchView('part1-ch2-sec3')" class="text-xs text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 flex items-center gap-1 transition-colors shrink-0 font-bold cursor-pointer">
              <span>← 返回上一節：第三節 行為犯與結果犯</span>
            </button>
          </div>

          <!-- 章節大標題 Banner -->
          <div class="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-amber-700 via-orange-800 to-slate-900 text-white shadow-lg space-y-3 relative overflow-hidden border border-amber-400/40">
            <div class="absolute -right-8 -bottom-8 w-48 h-48 bg-white/10 rounded-full blur-2xl pointer-events-none"></div>
            
            <div class="flex items-center gap-2 text-xs font-mono text-amber-200 font-bold uppercase tracking-wider">
              <span>PART 1 • CHAPTER 2 • SECTION 4</span>
              <span>•</span>
              <span class="px-2 py-0.5 rounded-full bg-white/20 text-white text-[11px]">教材第 3-17 ～ 3-18 頁 全節完結</span>
            </div>

            <h2 class="text-2xl sm:text-3xl md:text-4xl font-serif font-black tracking-tight text-white leading-tight">
              第四節 一般犯與身分犯
            </h2>

            <p class="text-sm sm:text-base text-amber-100 leading-relaxed font-serif pt-1 max-w-3xl">
              構成要件行為主體的核心分野！精確掌握<span class="underline decoration-amber-300 decoration-2 underline-offset-4 font-bold text-white">一般犯</span>（任何人皆可該當）與<span class="underline decoration-amber-300 decoration-2 underline-offset-4 font-bold text-white">身分犯</span>之本質，辨析<span class="underline decoration-amber-300 decoration-2 underline-offset-4 font-bold text-white">純正身分犯（義務犯，建構刑罰有無）</span>與<span class="underline decoration-amber-300 decoration-2 underline-offset-4 font-bold text-white">不純正身分犯（建構刑罰高低，涉及條文選擇）</span>之微調法則！
            </p>
          </div>

          <!-- ==================== 一、通則開宗明義：一般犯 vs 身分犯 (教材第 3-17 頁) ==================== -->
          <section id="sec-p1ch2-sec4-intro" class="space-y-6 pt-2">
            <div class="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3">
              <div class="flex items-center gap-3">
                <span class="w-2.5 h-6 rounded-full bg-amber-600"></span>
                <h3 class="text-lg sm:text-xl font-black text-slate-900 dark:text-white tracking-tight">
                  一、行為主體之設限：一般犯 vs 身分犯（教材第 3-17 頁）
                </h3>
              </div>
              <span class="text-xs font-mono font-bold px-2.5 py-1 rounded-lg bg-amber-50 dark:bg-amber-950 text-amber-600 dark:text-amber-400 border border-amber-200 dark:border-amber-800">
                p. 3-17 原文
              </span>
            </div>

            <!-- 教材原文逐字卡片 -->
            <div class="rounded-2xl bg-white dark:bg-[#121827] border-l-8 border-l-amber-600 border border-slate-200/80 dark:border-white/10 p-5 sm:p-6 shadow-xs space-y-4">
              <div class="flex items-center justify-between text-xs font-bold text-slate-500 dark:text-slate-400 border-b border-slate-100 dark:border-slate-800 pb-2">
                <span class="flex items-center gap-2">
                  <span class="text-base">📖</span>
                  <span>教材原文精讀 • 一般犯與身分犯之定義與分類</span>
                </span>
                <span class="font-mono text-amber-600 dark:text-amber-400">第 3-17 頁</span>
              </div>
              <p class="font-serif text-slate-800 dark:text-slate-200 text-base sm:text-lg leading-relaxed indent-8 text-justify">
                <span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">對行為主體不設限，任何人都可以該當構成要件行為的犯罪類型是一般犯</span>，典型如殺人罪，誰都可以該當「殺」這個行為。相較一般犯，<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">對行為主體設有限制的是身分犯，必須滿足特殊身分才能成立該罪</span>，又依據身分功能的不同，再區分為「<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">以身分建構刑罰有無</span>」的<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">純正身分犯</span>，與「<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">以身分建構刑罰高低</span>」的<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">不純正身分犯</span>。
              </p>
            </div>
          </section>

          <!-- ==================== 二、純正身分犯（義務犯）(教材第 3-18 頁) ==================== -->
          <section id="sec-p1ch2-sec4-pure" class="space-y-6 pt-2">
            <div class="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3">
              <div class="flex items-center gap-3">
                <span class="w-2.5 h-6 rounded-full bg-blue-600"></span>
                <h3 class="text-lg sm:text-xl font-black text-slate-900 dark:text-white tracking-tight">
                  二、純正身分犯——以身分建構刑罰有無（教材第 3-18 頁）
                </h3>
              </div>
              <span class="text-xs font-mono font-bold px-2.5 py-1 rounded-lg bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-800">
                p. 3-18 原文
              </span>
            </div>

            <!-- 教材原文逐字卡片 -->
            <div class="rounded-2xl bg-white dark:bg-[#121827] border-l-8 border-l-blue-600 border border-slate-200/80 dark:border-white/10 p-5 sm:p-6 shadow-xs space-y-4">
              <div class="flex items-center justify-between text-xs font-bold text-slate-500 dark:text-slate-400 border-b border-slate-100 dark:border-slate-800 pb-2">
                <span class="flex items-center gap-2">
                  <span class="text-base">👔</span>
                  <span>教材原文精讀 • 身分作為行為前提與義務犯</span>
                </span>
                <span class="font-mono text-blue-600 dark:text-blue-400">第 3-18 頁</span>
              </div>
              <p class="font-serif text-slate-800 dark:text-slate-200 text-base sm:text-lg leading-relaxed indent-8 text-justify">
                <span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">該身分作為構成要件行為的前提，並決定行為人是否被處罰</span>。<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">具備身分則有構成要件行為而可能成立犯罪，欠缺身分則不成立犯罪</span>。以收受賄賂罪為例（§ 121），必須具備公務員身分始有「收賄」可言，不然單純兩個人私相授受，何來收賄行為？由於這類身分通常彰顯行為人承擔某些特殊義務，例如具備公務員身分即承擔依法行政這個專屬義務，<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">所以又被稱作義務犯</span>。
              </p>
            </div>

            <!-- 【作者叮嚀】不純正不作為犯也是義務犯 (教材第 3-18 頁) -->
            <div id="sec-p1ch2-sec4-author-memo" class="p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-amber-50 to-orange-50/40 dark:from-[#1b1510] dark:to-[#121827] border-2 border-amber-300 dark:border-amber-800/60 space-y-3 shadow-xs">
              <div class="flex items-center justify-between border-b border-amber-200 dark:border-amber-900/60 pb-2">
                <div class="flex items-center gap-2">
                  <span class="text-lg">💡</span>
                  <span class="font-black text-amber-950 dark:text-amber-200 text-sm sm:text-base">【作者叮嚀】不純正不作為犯也是一種義務犯</span>
                </div>
                <span class="text-xs font-mono font-bold text-amber-700 dark:text-amber-400">p. 3-18 原文</span>
              </div>
              <p class="font-serif text-slate-800 dark:text-slate-200 text-sm sm:text-base leading-relaxed indent-8 text-justify">
                不純正不作為犯也是一種義務犯，因為要想讓消極不作為與積極作為等價齊觀，勢必要賦予行為人作為義務，<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">也就是具備保證地位</span>。舉殺人罪為例，不作為放任他人死亡是否該當「殺」，不可一概而論！<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">僅當行為人因保證地位（例如危險前行為）這個特別身分而承擔特殊作為義務（例如危難排除義務）時，不作為始該當殺人行為</span>。
              </p>
            </div>
          </section>

          <!-- ==================== 三、不純正身分犯（條文選擇）(教材第 3-18 頁) ==================== -->
          <section id="sec-p1ch2-sec4-impure" class="space-y-6 pt-2">
            <div class="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3">
              <div class="flex items-center gap-3">
                <span class="w-2.5 h-6 rounded-full bg-purple-600"></span>
                <h3 class="text-lg sm:text-xl font-black text-slate-900 dark:text-white tracking-tight">
                  三、不純正身分犯——以身分建構刑罰高低（教材第 3-18 頁）
                </h3>
              </div>
              <span class="text-xs font-mono font-bold px-2.5 py-1 rounded-lg bg-purple-50 dark:bg-purple-950 text-purple-600 dark:text-purple-400 border border-purple-200 dark:border-purple-800">
                p. 3-18 原文
              </span>
            </div>

            <!-- 教材原文逐字卡片 -->
            <div class="rounded-2xl bg-white dark:bg-[#121827] border-l-8 border-l-purple-600 border border-slate-200/80 dark:border-white/10 p-5 sm:p-6 shadow-xs space-y-4">
              <div class="flex items-center justify-between text-xs font-bold text-slate-500 dark:text-slate-400 border-b border-slate-100 dark:border-slate-800 pb-2">
                <span class="flex items-center gap-2">
                  <span class="text-base">⚖️</span>
                  <span>教材原文精讀 • 普通之罪 vs 特別之罪的條文選擇</span>
                </span>
                <span class="font-mono text-purple-600 dark:text-purple-400">第 3-18 頁</span>
              </div>
              <p class="font-serif text-slate-800 dark:text-slate-200 text-base sm:text-lg leading-relaxed indent-8 text-justify">
                <span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">該身分與構成要件行為無關，僅決定行為人依哪個條文被處罰</span>。<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">具備身分則可能成立特別的犯罪，欠缺身分則回歸普通的犯罪，因此不純正身分犯必然涉及普通之罪與特別之罪的條文選擇</span>。例如殺人罪乃普通之罪，若公務員假借職務上機會殺人，滿足公務員身分者成立特別的不純正瀆職罪（§ 134）；再如殺人罪乃普通之罪，若直系血親卑親屬殺尊親屬，滿足直系血親卑親屬身分者成立特別的殺親罪（§ 272）。
              </p>
            </div>
          </section>

          <!-- ==================== 四、核心體系圖解 (SVG 卡片) ==================== -->
          <section id="sec-p1ch2-sec4-chart" class="space-y-4 pt-2">
            <div class="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-2">
              <div class="flex items-center gap-2">
                <span class="text-lg">📊</span>
                <h4 class="font-black text-slate-900 dark:text-white text-base sm:text-lg">【圖解】一般犯 vs 純正身分犯 vs 不純正身分犯 體系全貌</h4>
              </div>
              <span class="text-xs font-mono text-amber-600 dark:text-amber-400 font-bold">體系架構圖解</span>
            </div>

            <!-- SVG 體系卡片 -->
            <div class="rounded-2xl bg-white dark:bg-[#121827] border border-slate-200 dark:border-slate-800 p-4 sm:p-6 shadow-xs overflow-x-auto custom-scrollbar">
              <div class="min-w-[660px] flex flex-col gap-4">
                <svg viewBox="0 0 840 340" class="w-full h-auto select-none" xmlns="http://www.w3.org/2000/svg">
                  <!-- 背景 -->
                  <rect width="840" height="340" fill="none"/>
                  
                  <!-- 左側根節點：行為主體之犯罪類型 -->
                  <rect x="20" y="130" width="160" height="70" rx="16" fill="#f8fafc" stroke="#475569" stroke-width="2.5" class="dark:fill-slate-800 dark:stroke-slate-400"/>
                  <text x="100" y="160" text-anchor="middle" font-family="sans-serif" font-size="16" font-weight="bold" fill="#1e293b" class="dark:fill-slate-200">行為主體</text>
                  <text x="100" y="185" text-anchor="middle" font-family="sans-serif" font-size="14" font-weight="bold" fill="#64748b" class="dark:fill-slate-400">設限與否</text>

                  <!-- 分支1：一般犯 -->
                  <path d="M 180 150 L 250 150 L 250 60 L 290 60" stroke="#059669" stroke-width="2.5" fill="none"/>
                  <polygon points="290,60 282,55 282,65" fill="#059669"/>
                  
                  <rect x="290" y="30" width="160" height="60" rx="12" fill="#ecfdf5" stroke="#10b981" stroke-width="2" class="dark:fill-emerald-950/40"/>
                  <text x="370" y="58" text-anchor="middle" font-family="serif" font-size="18" font-weight="black" fill="#047857" class="dark:fill-emerald-300">一般犯</text>
                  <text x="370" y="78" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="bold" fill="#059669" class="dark:fill-emerald-400">主體不設限（任何人）</text>

                  <rect x="490" y="35" width="310" height="50" rx="10" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" class="dark:fill-slate-900 dark:stroke-slate-700"/>
                  <text x="645" y="65" text-anchor="middle" font-family="serif" font-size="14" fill="#334155" class="dark:fill-slate-300">典型如殺人罪（§ 271），誰都可為行為人</text>

                  <!-- 分支2：身分犯總框 -->
                  <path d="M 180 180 L 250 180 L 250 240 L 290 240" stroke="#2563eb" stroke-width="2.5" fill="none"/>
                  <polygon points="290,240 282,235 282,245" fill="#2563eb"/>

                  <rect x="290" y="210" width="160" height="60" rx="12" fill="#eff6ff" stroke="#3b82f6" stroke-width="2" class="dark:fill-blue-950/40"/>
                  <text x="370" y="238" text-anchor="middle" font-family="serif" font-size="18" font-weight="black" fill="#1d4ed8" class="dark:fill-blue-300">身分犯</text>
                  <text x="370" y="258" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="bold" fill="#2563eb" class="dark:fill-blue-400">主體設有限制（特殊身分）</text>

                  <!-- 身分犯細分子分支：純正身分犯 -->
                  <path d="M 450 230 L 490 230 L 490 160 L 520 160" stroke="#2563eb" stroke-width="2" fill="none"/>
                  <polygon points="520,160 512,156 512,164" fill="#2563eb"/>

                  <rect x="520" y="135" width="280" height="50" rx="10" fill="#f0f9ff" stroke="#0ea5e9" stroke-width="1.5" class="dark:fill-sky-950/40"/>
                  <text x="660" y="157" text-anchor="middle" font-family="serif" font-size="15" font-weight="bold" fill="#0369a1" class="dark:fill-sky-300">純正身分犯（義務犯）</text>
                  <text x="660" y="175" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#0284c7" class="dark:fill-sky-400">以身分建構刑罰有無 • § 121 收賄罪</text>

                  <!-- 身分犯細分子分支：不純正身分犯 -->
                  <path d="M 450 250 L 490 250 L 490 290 L 520 290" stroke="#7c3aed" stroke-width="2" fill="none"/>
                  <polygon points="520,290 512,286 512,294" fill="#7c3aed"/>

                  <rect x="520" y="265" width="280" height="50" rx="10" fill="#faf5ff" stroke="#a855f7" stroke-width="1.5" class="dark:fill-purple-950/40"/>
                  <text x="660" y="287" text-anchor="middle" font-family="serif" font-size="15" font-weight="bold" fill="#7e22ce" class="dark:fill-purple-300">不純正身分犯（條文選擇）</text>
                  <text x="660" y="305" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#9333ea" class="dark:fill-purple-400">以身分建構刑罰高低 • § 134 瀆職加重、§ 272 殺尊親屬</text>
                </svg>
              </div>
            </div>
          </section>

          <!-- ==================== 五、犬系法學四大天王「身分犯研討客廳」深度點評 ==================== -->
          <div class="rounded-3xl border-2 border-amber-400/80 dark:border-amber-700/80 bg-white dark:bg-[#121827] shadow-md overflow-hidden space-y-0">
            
            <div class="p-4 sm:p-5 bg-gradient-to-r from-amber-700 via-orange-700 to-slate-800 text-white flex items-center justify-between gap-3">
              <div class="flex items-center gap-2.5">
                <span class="w-8 h-8 rounded-xl bg-white/20 text-white flex items-center justify-center font-bold text-sm shadow-xs">🐾</span>
                <div>
                  <span class="text-[11px] font-mono text-amber-200 font-bold tracking-wider uppercase block">THE FOUR MENTORS • SEMINAR ROOM</span>
                  <h4 class="text-base sm:text-lg font-bold text-white tracking-tight">犬系四大天王導師席 • 身分犯之實務與國考大解碼</h4>
                </div>
              </div>
              <span class="text-xs font-mono font-bold px-2 py-0.5 rounded-full bg-white/20 text-white shrink-0">p. 3-17~3-18</span>
            </div>

            <div class="p-5 sm:p-6 space-y-4">
              
              <!-- 1. 柴柴生活解碼 -->
              <div class="rounded-2xl p-4 sm:p-5 bg-amber-50/70 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900/40 space-y-2">
                <div class="flex items-center gap-2 font-black text-amber-900 dark:text-amber-300 text-xs sm:text-sm">
                  <div class="w-6 h-6 rounded-lg overflow-hidden border border-amber-400 shrink-0">
                    <img src="images/shiba_law_professor.jpg" alt="柴柴" class="w-full h-full object-cover" style="object-position: center 20%; transform: scale(1.38);">
                  </div>
                  <span>🐾 柴柴法學教授 • 白話生活大解碼</span>
                </div>
                <p class="font-serif text-slate-700 dark:text-slate-300 text-xs sm:text-sm leading-relaxed">
                  一般犯就像所有人都能隨掃隨騎的共享單車，誰都能『殺』、『偷』或『騙』；而身分犯就像要有專門大貨車駕照才能開的特種車輛！<br>
                  • <strong>純正身分犯</strong>：你如果沒有公務員身分，私下拿了別人的錢那叫受贈或借貸，<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">完全不可能該當收賄罪</span>！這就叫『以身分建構刑罰有無』。<br>
                  • <strong>不純正身分犯</strong>：你沒有特殊身分也能殺人（成立普通殺人罪），但若是公務員假借職務殺人或子女殺尊親屬，<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">身分只是拿來決定判重判輕的條文切換</span>！
                </p>
              </div>

              <!-- 2. 金毛攻防點評 -->
              <div class="rounded-2xl p-4 sm:p-5 bg-rose-50/70 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-900/40 space-y-2">
                <div class="flex items-center gap-2 font-black text-rose-900 dark:text-rose-300 text-xs sm:text-sm">
                  <div class="w-6 h-6 rounded-lg overflow-hidden border border-rose-400 shrink-0">
                    <img src="images/golden_case_attorney.jpg" alt="金毛" class="w-full h-full object-cover" style="object-position: center 20%; transform: scale(1.35);">
                  </div>
                  <span>⚖️ 金毛大律師 • 法庭攻防點評（預告第 31 條共犯攻防）</span>
                </div>
                <p class="font-serif text-slate-700 dark:text-slate-300 text-xs sm:text-sm leading-relaxed">
                  律師在法庭上最常打的就是『無身分者與有身分者共同犯罪』！<br>
                  • 遇到<strong>純正身分犯</strong>（如無身分之白手套與公務員共同收賄）：依刑法第 31 條第 1 項，無身分者雖然成立共犯，但律師必爭取『<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">得減輕其刑</span>』之恩惠！<br>
                  • 遇到<strong>不純正身分犯</strong>（如普通人甲教唆公務員乙假藉職務殺人）：依刑法第 31 條第 2 項，身分只是乙個人刑罰加重事由，<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">無身分之甲絕對只能科以通常殺人罪之刑，檢察官絕不能對甲要求依第 134 條加重</span>！
                </p>
              </div>

              <!-- 3. 德牧法規雷達 -->
              <div class="rounded-2xl p-4 sm:p-5 bg-blue-50/70 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-900/40 space-y-2">
                <div class="flex items-center gap-2 font-black text-blue-900 dark:text-blue-300 text-xs sm:text-sm">
                  <div class="w-6 h-6 rounded-lg overflow-hidden border border-blue-400 shrink-0">
                    <img src="images/shepherd_law_inspector.jpg" alt="德牧" class="w-full h-full object-cover" style="object-position: center 15%; transform: scale(1.4);">
                  </div>
                  <span>🛡️ 德牧法規巡查官 • 法規雷達查核</span>
                </div>
                <div class="font-serif text-slate-700 dark:text-slate-300 text-xs sm:text-sm space-y-1">
                  <div>🔍 <strong>【實體法檢索與裁判要旨查核】</strong></div>
                  <ul class="list-disc pl-5 space-y-0.5">
                    <li><strong>刑法 § 121（公務員受賄罪）</strong>：純正身分犯／義務犯之代表，公務員身分為客觀構成要件要件。</li>
                    <li><strong>刑法 § 134（公務員犯罪加重）</strong>：不純正身分犯之代表，公務員假借職務上之權力、機會或方法犯罪，加重其刑至二分之一。</li>
                    <li><strong>刑法 § 272（殺直系血親尊親屬罪）</strong>：不純正身分犯之代表，民國 108 年修法修正為「加重其刑至二分之一」，刪除舊法之唯一死刑或無期徒刑規定。</li>
                    <li><strong>最高法院 94 年台上字第 7421 號判決</strong>：刑法第 31 條第 2 項所稱「科以通常之刑」，指無該身分者，仍依無該身分時之普通罪名論處，不得享受或承擔特別身分之加減利益。</li>
                  </ul>
                </div>
              </div>

              <!-- 4. 邊牧首席審判長終審裁決 -->
              <div class="rounded-2xl p-4 sm:p-5 bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white border-2 border-amber-400/80 shadow-md space-y-2.5">
                <div class="flex items-center justify-between border-b border-white/10 pb-2">
                  <div class="flex items-center gap-2 font-black text-amber-300 text-xs sm:text-sm">
                    <div class="w-6 h-6 rounded-lg overflow-hidden border border-amber-400 shrink-0">
                      <img src="images/border_collie_chief_judge.jpg" alt="邊牧" class="w-full h-full object-cover" style="object-position: center 25%; transform: scale(1.35);">
                    </div>
                    <span>👨‍⚖️ 邊牧首席審判長 • 國考定音一槌定錨</span>
                  </div>
                  <span class="text-xs text-amber-400 font-bold">#法槌一敲誰與爭鋒</span>
                </div>
                <div class="text-xs sm:text-sm font-serif text-slate-200 leading-relaxed space-y-1.5">
                  <p>💡 <strong>【國考答題秒殺判準：剝離身分過濾法】</strong></p>
                  <p>讀者在考試中遇到身分犯，請直接在心中把該特殊身分抽掉：</p>
                  <p>① <strong>若抽掉身分後，行為人「完全不構成任何犯罪」</strong> ➔ 該身分建構刑罰有無 ➔ <strong>純正身分犯（義務犯）</strong>！</p>
                  <p>② <strong>若抽掉身分後，行為人「依然構成普通犯罪」</strong> ➔ 該身分僅影響刑度 ➔ <strong>不純正身分犯</strong>！</p>
                </div>
                <div class="p-2.5 rounded-lg bg-white/5 border border-white/10 text-[11px] text-slate-300">
                  📅 <strong>2026 最新法條動態備註</strong>：刑法第 272 條殺直系血親尊親屬罪已修正為「處以第 271 條第 1 項之刑，加重其刑至二分之一」，屬典型之不純正身分犯；而刑法第 31 條第 1 項但書已增設得減輕其刑規定，作答時請切記條文之最新架構！
                </div>
              </div>

            </div>
          </div>

          <!-- 章節尾聲導航 -->
          <div class="pt-6 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between gap-4">
            <button onclick="switchView('part1-ch2-sec3')" class="px-4 py-2 rounded-xl bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 font-bold text-xs flex items-center gap-1.5 border border-slate-200 dark:border-slate-700 cursor-pointer">
              <span>← 上一節：第二章 第三節 行為犯與結果犯</span>
            </button>
            <button onclick="alert('恭喜您！已學完第二章第四節，第二章犯罪類型持續擴充中！')" class="px-4 py-2 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs flex items-center gap-1.5 shadow-sm cursor-pointer">
              <span>第四節完結 🎉</span>
            </button>
          </div>

        </div>
`;
