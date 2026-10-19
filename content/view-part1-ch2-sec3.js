/**
 * view-part1-ch2-sec3.js
 * 第一篇 第二章 第三節 行為犯與結果犯（教材第 3-14 ～ 3-17 頁 全節完結旗艦版）
 * 嚴格遵循 AGENTS.md 最高行為憲法規範：
 * 1. 逐字精準核對課本原文（第 3-14 ～ 3-17 頁 零錯字、零腦補）
 * 2. 案例 2-7、案例 2-8、案例 2-9 嚴格落實「五位一體法學劇院」標準
 * 3. 嚴格單欄垂直上下堆疊排版（Strict Vertical Stacking）
 * 4. 重點文字採用「純紅底線」規範（No Aggressive Red Text）
 * 5. 復刻原書兩大核心圖解：「實害犯與危險犯」與「實害犯、危險犯與行為犯、結果犯關係圖」
 * 6. 犬系四大天王導師法定圖片比例與 2026 最新法條動態定錨
 */

window.APP_VIEWS = window.APP_VIEWS || {};
window.APP_VIEWS['viewPart1Ch2Sec3'] = window.APP_VIEWS['part1Ch2Sec3'] = window.APP_VIEWS['part1-ch2-sec3'] = `
        <!-- VIEW: 第一篇 第二章 第三節 行為犯與結果犯 (教材第 3-14 ～ 3-17 頁) -->
        <div id="viewPart1Ch2Sec3" class="fade-enter hidden space-y-8">
          
          <!-- 麵包屑導航 -->
          <div class="flex items-center justify-between gap-4 border-b border-slate-200/80 dark:border-white/10 pb-3">
            <nav class="flex items-center gap-2 text-xs font-medium text-slate-500 dark:text-slate-400 flex-wrap">
              <button onclick="switchView('part1')" class="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">第一篇</button>
              <span>/</span>
              <button onclick="switchView('part1-ch2-sec2')" class="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">第二章 第二節 變體要素</button>
              <span>/</span>
              <span class="text-blue-600 dark:text-blue-400 font-bold">第二章 第三節 行為犯與結果犯</span>
            </nav>
            <button onclick="switchView('part1-ch2-sec2')" class="text-xs text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 flex items-center gap-1 transition-colors shrink-0 font-bold cursor-pointer">
              <span>← 返回上一節：第二節 變體要素</span>
            </button>
          </div>

          <!-- 章節大標題 Banner -->
          <div class="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-emerald-700 via-teal-800 to-slate-900 text-white shadow-lg space-y-3 relative overflow-hidden border border-teal-400/40">
            <div class="absolute -right-8 -bottom-8 w-48 h-48 bg-white/10 rounded-full blur-2xl pointer-events-none"></div>
            
            <div class="flex items-center gap-2 text-xs font-mono text-teal-200 font-bold uppercase tracking-wider">
              <span>PART 1 • CHAPTER 2 • SECTION 3</span>
              <span>•</span>
              <span class="px-2 py-0.5 rounded-full bg-white/20 text-white text-[11px]">教材第 3-14 ～ 3-17 頁 全節完結</span>
            </div>

            <h2 class="text-2xl sm:text-3xl md:text-4xl font-serif font-black tracking-tight text-white leading-tight">
              第三節 行為犯與結果犯
            </h2>

            <p class="text-sm sm:text-base text-teal-100 leading-relaxed font-serif pt-1 max-w-3xl">
              看似簡單的分類，隱藏十分關鍵的重點！徹底掌握<span class="underline decoration-amber-300 decoration-2 underline-offset-4 font-bold text-white">事前說（一般認知＋優越事實）</span>與<span class="underline decoration-amber-300 decoration-2 underline-offset-4 font-bold text-white">事後說（全盤事實）</span>之時點切分，釐清實害犯、具體危險犯（結果犯）、抽象危險犯（行為犯）與適格犯（適性犯）之精妙體系。
            </p>
          </div>

          <!-- ==================== 一、要件設計與觀察時點 (教材第 3-14 頁) ==================== -->
          <section id="sec-p1ch2-sec3-intro" class="space-y-6 pt-2">
            <div class="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3">
              <div class="flex items-center gap-3">
                <span class="w-2.5 h-6 rounded-full bg-emerald-600"></span>
                <h3 class="text-lg sm:text-xl font-black text-slate-900 dark:text-white tracking-tight">
                  一、基本概念與兩大觀察時點（教材第 3-14 頁）
                </h3>
              </div>
              <span class="text-xs font-mono font-bold px-2.5 py-1 rounded-lg bg-emerald-50 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800">
                p. 3-14 原文
              </span>
            </div>

            <!-- 教材原文逐字卡片 1 -->
            <div class="rounded-2xl bg-white dark:bg-[#121827] border-l-8 border-l-emerald-600 border border-slate-200/80 dark:border-white/10 p-5 sm:p-6 shadow-xs space-y-4">
              <div class="flex items-center justify-between text-xs font-bold text-slate-500 dark:text-slate-400 border-b border-slate-100 dark:border-slate-800 pb-2">
                <span class="flex items-center gap-2">
                  <span class="text-base">📖</span>
                  <span>教材原文精讀 • 行為犯與結果犯之定義與要件設計</span>
                </span>
                <span class="font-mono text-emerald-600 dark:text-emerald-400">第 3-14 頁</span>
              </div>
              <p class="font-serif text-slate-800 dark:text-slate-200 text-base sm:text-lg leading-relaxed indent-8 text-justify">
                依據構成要件除行為要素外，是否尚須結果要素分為「<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">行為犯（＝舉動犯）</span>」與「<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">結果犯</span>」，前者僅要求構成要件行為，後者則必須行為與結果齊備。這看似簡單的分類，卻隱藏十分關鍵的重點。
              </p>
              <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-2 font-serif text-sm sm:text-base text-slate-800 dark:text-slate-200">
                <div class="font-sans font-bold text-emerald-800 dark:text-emerald-300">一、要件設計</div>
                <p class="indent-4 leading-relaxed">
                  要求構成要件結果的結果犯，<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">必須額外審查構成要件結果歸責</span>；僅要求構成要件行為的行為犯，<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">則毋須檢驗</span>。
                </p>
              </div>
            </div>

            <!-- 教材原文逐字卡片 2：觀察時點 -->
            <div class="rounded-2xl bg-white dark:bg-[#121827] border-l-8 border-l-teal-600 border border-slate-200/80 dark:border-white/10 p-5 sm:p-6 shadow-xs space-y-4">
              <div class="flex items-center justify-between text-xs font-bold text-slate-500 dark:text-slate-400 border-b border-slate-100 dark:border-slate-800 pb-2">
                <span class="flex items-center gap-2">
                  <span class="text-base">🕰️</span>
                  <span>教材原文精讀 • 事前說 vs 事後說</span>
                </span>
                <span class="font-mono text-teal-600 dark:text-teal-400">第 3-14 頁</span>
              </div>
              <p class="font-serif text-slate-800 dark:text-slate-200 text-base sm:text-lg leading-relaxed indent-8 text-justify">
                法律評價的觀察時點有兩種，其一是立於行為人實施犯罪行為時，也可說是立於侵害流程的發端，稱為<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">事前說（另有學者譯作「事中說」）</span>。其二是立於所有的侵害流程已然結束時，稱為<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">事後說</span>。可以確定的是，事後說所知悉的資訊必然較事前說來得完整。
              </p>
              <div class="space-y-3 font-serif text-sm sm:text-base text-slate-800 dark:text-slate-200">
                <div class="p-4 rounded-xl bg-teal-50/70 dark:bg-teal-950/40 border border-teal-200 dark:border-teal-800 space-y-1.5">
                  <div class="font-sans font-bold text-teal-900 dark:text-teal-300">㈠ 構成要件行為（採事前說）</div>
                  <p class="leading-relaxed">
                    對行為的觀察時點採取<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">事前說</span>，<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">判斷時不應、也不能偷看後續所引發的任何事實</span>。至於擷取事實的範圍，通說認為應擷取一般人所能認知的事實（＝一般認知），以及行為人優越於一般人認知的真正事實（＝優越事實）。結論是，<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">自事前擷取一般認知與優越事實，判斷是否為法規範欲禁止的行為</span>。
                  </p>
                </div>
                <div class="p-4 rounded-xl bg-blue-50/70 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800 space-y-1.5">
                  <div class="font-sans font-bold text-blue-900 dark:text-blue-300">㈡ 構成要件結果歸責（採事後說）</div>
                  <p class="leading-relaxed">
                    對構成要件結果歸責的觀察採取<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">事後說</span>，判斷時更可擷取案例中發生的所有事實。結論是，<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">自事後擷取所有事實，判斷是否為法規範欲避免的結果</span>。
                  </p>
                </div>
              </div>
            </div>

            <!-- 教材原文逐字卡片 3：實害犯與危險犯的本質與具體危險犯 -->
            <div class="rounded-2xl bg-white dark:bg-[#121827] border-l-8 border-l-indigo-600 border border-slate-200/80 dark:border-white/10 p-5 sm:p-6 shadow-xs space-y-4">
              <div class="flex items-center justify-between text-xs font-bold text-slate-500 dark:text-slate-400 border-b border-slate-100 dark:border-slate-800 pb-2">
                <span class="flex items-center gap-2">
                  <span class="text-base">⚡</span>
                  <span>教材原文精讀 • 實害犯、抽象危險犯與具體危險犯（第 3-14 ～ 3-15 頁）</span>
                </span>
                <span class="font-mono text-indigo-600 dark:text-indigo-400">第 3-14~3-15 頁</span>
              </div>
              <p class="font-serif text-slate-800 dark:text-slate-200 text-base sm:text-lg leading-relaxed indent-8 text-justify">
                當立法者選擇結果犯的立法模式，意味著僅構成要件行為還不足以彰顯法益侵害，尚須齊備結果與歸責始足，結果與歸責乃法益實際遭受侵害的表徵，也可說是一種<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">實害犯</span>。至於行為犯的立法模式，則是在一滿足構成要件行為便被預測必然發生法益侵害，毋庸結果與歸責。會說「預測」，是鑑於構成要件行為採事前說而不能觀察後續發展，所以真正的法益侵害究竟發生與否，觀察者並不知情，也正因為不知情，令觀察者有一種說不準、未知的危險感覺，故行為犯可說是一種<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">危險犯</span>。
              </p>
              <p class="font-serif text-slate-800 dark:text-slate-200 text-base sm:text-lg leading-relaxed indent-8 text-justify">
                然而我國還有一種立法方法，是在構成要件行為外增加「致生……危險」的描述，如 § 185 Ⅰ 除損壞或壅塞行為，尚須致生往來之危險。問題在於：這類犯罪究竟是實害犯或危險犯？行為犯或結果犯？通說與實務見解認為這類犯罪並非招致法益侵害，而是僅有法益侵害的危險，屬<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">危險犯</span>；且「致生……危險」是行為所引發的外在事實狀態，乃<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">結果犯</span>。為了在名稱上有所區隔，稱前述行為犯類型的危險犯罪為<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">抽象危險犯</span>，稱結果犯類型的危險犯罪為<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">具體危險犯</span>，且具體危險犯引發的結果是危險結果，與實害犯引發的實害結果內涵不同。
              </p>
            </div>
          </section>

          <!-- ==================== 核心圖解 1：實害犯與危險犯 (教材第 3-15 頁) ==================== -->
          <section id="sec-p1ch2-sec3-chart1" class="space-y-4 pt-2">
            <div class="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-2">
              <div class="flex items-center gap-2">
                <span class="text-lg">📊</span>
                <h4 class="font-black text-slate-900 dark:text-white text-base sm:text-lg">【圖解 1】實害犯與危險犯結構全景圖（教材第 3-15 頁）</h4>
              </div>
              <span class="text-xs font-mono text-emerald-600 dark:text-emerald-400 font-bold">p. 3-15 原圖復刻</span>
            </div>

            <!-- SVG 圖卡容器 -->
            <div class="rounded-2xl bg-white dark:bg-[#121827] border border-slate-200 dark:border-slate-800 p-4 sm:p-6 shadow-xs overflow-x-auto custom-scrollbar">
              <div class="min-w-[640px] flex flex-col gap-4">
                <svg viewBox="0 0 860 380" class="w-full h-auto select-none" xmlns="http://www.w3.org/2000/svg">
                  <!-- 背景網格 -->
                  <rect width="860" height="380" fill="none"/>
                  
                  <!-- 左側欄位：三種犯罪類型標籤 -->
                  <!-- 實害犯 -->
                  <g>
                    <rect x="30" y="30" width="120" height="60" rx="30" fill="#f8fafc" stroke="#dc2626" stroke-width="2.5" class="dark:fill-slate-800"/>
                    <text x="90" y="67" text-anchor="middle" font-family="serif" font-size="18" font-weight="bold" fill="#dc2626">實害犯</text>
                  </g>
                  <!-- 具體危險犯 -->
                  <g>
                    <rect x="30" y="150" width="120" height="60" rx="30" fill="#f8fafc" stroke="#2563eb" stroke-width="2.5" class="dark:fill-slate-800"/>
                    <text x="90" y="177" text-anchor="middle" font-family="serif" font-size="16" font-weight="bold" fill="#2563eb">具體</text>
                    <text x="90" y="197" text-anchor="middle" font-family="serif" font-size="16" font-weight="bold" fill="#2563eb">危險犯</text>
                  </g>
                  <!-- 抽象危險犯 -->
                  <g>
                    <rect x="30" y="270" width="120" height="60" rx="30" fill="#f8fafc" stroke="#059669" stroke-width="2.5" class="dark:fill-slate-800"/>
                    <text x="90" y="297" text-anchor="middle" font-family="serif" font-size="16" font-weight="bold" fill="#059669">抽象</text>
                    <text x="90" y="317" text-anchor="middle" font-family="serif" font-size="16" font-weight="bold" fill="#059669">危險犯</text>
                  </g>

                  <!-- 垂直大虛線邊界：構成要件行為 -->
                  <line x1="200" y1="20" x2="200" y2="350" stroke="#94a3b8" stroke-width="2" stroke-dasharray="6 6"/>
                  <rect x="180" y="90" width="40" height="180" rx="8" fill="#f1f5f9" stroke="#64748b" stroke-width="1.5" class="dark:fill-slate-800"/>
                  <text x="200" y="125" text-anchor="middle" font-family="sans-serif" font-size="14" font-weight="bold" fill="#334155" class="dark:fill-slate-300">構</text>
                  <text x="200" y="155" text-anchor="middle" font-family="sans-serif" font-size="14" font-weight="bold" fill="#334155" class="dark:fill-slate-300">成</text>
                  <text x="200" y="185" text-anchor="middle" font-family="sans-serif" font-size="14" font-weight="bold" fill="#334155" class="dark:fill-slate-300">要</text>
                  <text x="200" y="215" text-anchor="middle" font-family="sans-serif" font-size="14" font-weight="bold" fill="#334155" class="dark:fill-slate-300">件</text>
                  <text x="200" y="245" text-anchor="middle" font-family="sans-serif" font-size="14" font-weight="bold" fill="#334155" class="dark:fill-slate-300">行</text>
                  <text x="200" y="275" text-anchor="middle" font-family="sans-serif" font-size="14" font-weight="bold" fill="#334155" class="dark:fill-slate-300">為</text>

                  <!-- 實害犯：導致箭頭 -->
                  <path d="M 235 60 L 340 60" stroke="#dc2626" stroke-width="2.5" fill="none"/>
                  <polygon points="340,60 330,55 330,65" fill="#dc2626"/>
                  <rect x="250" y="45" width="60" height="28" rx="6" fill="#fee2e2" stroke="#fca5a5" stroke-width="1"/>
                  <text x="280" y="64" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="bold" fill="#dc2626">導致</text>

                  <!-- 具體危險犯：導致箭頭 -->
                  <path d="M 235 180 L 340 180" stroke="#2563eb" stroke-width="2.5" fill="none"/>
                  <polygon points="340,180 330,175 330,185" fill="#2563eb"/>
                  <rect x="250" y="165" width="60" height="28" rx="6" fill="#dbeafe" stroke="#93c5fd" stroke-width="1"/>
                  <text x="280" y="184" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="bold" fill="#2563eb">導致</text>

                  <!-- 第二道垂直大虛線邊界：構成要件結果 -->
                  <line x1="360" y1="20" x2="360" y2="230" stroke="#94a3b8" stroke-width="2" stroke-dasharray="6 6"/>
                  <rect x="340" y="40" width="40" height="150" rx="8" fill="#f1f5f9" stroke="#64748b" stroke-width="1.5" class="dark:fill-slate-800"/>
                  <text x="360" y="70" text-anchor="middle" font-family="sans-serif" font-size="14" font-weight="bold" fill="#334155" class="dark:fill-slate-300">構</text>
                  <text x="360" y="95" text-anchor="middle" font-family="sans-serif" font-size="14" font-weight="bold" fill="#334155" class="dark:fill-slate-300">成</text>
                  <text x="360" y="120" text-anchor="middle" font-family="sans-serif" font-size="14" font-weight="bold" fill="#334155" class="dark:fill-slate-300">要</text>
                  <text x="360" y="145" text-anchor="middle" font-family="sans-serif" font-size="14" font-weight="bold" fill="#334155" class="dark:fill-slate-300">件</text>
                  <text x="360" y="170" text-anchor="middle" font-family="sans-serif" font-size="14" font-weight="bold" fill="#334155" class="dark:fill-slate-300">結</text>
                  <text x="360" y="195" text-anchor="middle" font-family="sans-serif" font-size="14" font-weight="bold" fill="#334155" class="dark:fill-slate-300">果</text>

                  <!-- 實害結果框 -->
                  <rect x="400" y="35" width="220" height="50" rx="8" fill="#fef2f2" stroke="#f87171" stroke-width="1.5" class="dark:fill-rose-950/40"/>
                  <text x="510" y="65" text-anchor="middle" font-family="serif" font-size="15" font-weight="bold" fill="#b91c1c" class="dark:fill-rose-300">結果表徵法益實際上受到侵害</text>

                  <!-- 具體危險結果框 -->
                  <rect x="400" y="155" width="220" height="50" rx="8" fill="#eff6ff" stroke="#60a5fa" stroke-width="1.5" class="dark:fill-blue-950/40"/>
                  <text x="510" y="185" text-anchor="middle" font-family="serif" font-size="15" font-weight="bold" fill="#1d4ed8" class="dark:fill-blue-300">結果表徵法益有受侵害的危險</text>

                  <!-- 抽象危險犯長虛線路徑 (直接穿透至法益侵害) -->
                  <path d="M 235 300 L 630 300" stroke="#059669" stroke-width="2" stroke-dasharray="6 4" fill="none"/>
                  <rect x="270" y="280" width="240" height="36" rx="6" fill="#ecfdf5" stroke="#6ee7b7" stroke-width="1" class="dark:fill-emerald-950/60"/>
                  <text x="390" y="303" text-anchor="middle" font-family="serif" font-size="14" font-weight="bold" fill="#047857" class="dark:fill-emerald-300">行為表徵法益隱制地受到侵害</text>

                  <!-- 匯總到右側：法益侵害 -->
                  <line x1="620" y1="60" x2="680" y2="60" stroke="#dc2626" stroke-width="2"/>
                  <polygon points="680,60 672,56 672,64" fill="#dc2626"/>

                  <line x1="620" y1="180" x2="680" y2="180" stroke="#2563eb" stroke-width="2"/>
                  <polygon points="680,180 672,176 672,184" fill="#2563eb"/>

                  <polygon points="680,300 672,296 672,304" fill="#059669"/>

                  <!-- 右側欄位：法益侵害括弧/長方塊 -->
                  <rect x="680" y="30" width="45" height="300" rx="8" fill="#fffbeb" stroke="#f59e0b" stroke-width="2" class="dark:fill-amber-950/30"/>
                  <text x="702" y="120" text-anchor="middle" font-family="serif" font-size="18" font-weight="bold" fill="#b45309" class="dark:fill-amber-300">法</text>
                  <text x="702" y="160" text-anchor="middle" font-family="serif" font-size="18" font-weight="bold" fill="#b45309" class="dark:fill-amber-300">益</text>
                  <text x="702" y="200" text-anchor="middle" font-family="serif" font-size="18" font-weight="bold" fill="#b45309" class="dark:fill-amber-300">侵</text>
                  <text x="702" y="240" text-anchor="middle" font-family="serif" font-size="18" font-weight="bold" fill="#b45309" class="dark:fill-amber-300">害</text>
                </svg>
              </div>
            </div>
          </section>

          <!-- ==================== 案例 2-7 龜山島放火燒屋案 五位一體法學劇院 (教材第 3-15 頁) ==================== -->
          <div id="case-2-7" class="rounded-3xl border-2 border-indigo-400/80 dark:border-indigo-700/80 bg-white dark:bg-[#121827] shadow-md overflow-hidden space-y-0">
            
            <!-- 案例標題 Bar -->
            <div class="p-4 sm:p-5 bg-gradient-to-r from-teal-700 via-indigo-700 to-slate-800 text-white flex items-center justify-between gap-3">
              <div class="flex items-center gap-2.5">
                <span class="w-8 h-8 rounded-xl bg-white/20 text-white flex items-center justify-center font-bold text-sm shadow-xs">⚔️</span>
                <div>
                  <span class="text-[11px] font-mono text-teal-200 font-bold tracking-wider uppercase block">CASE STUDY 2-7 • 具體危險犯 vs 抽象危險犯</span>
                  <h4 class="text-base sm:text-lg font-bold text-white tracking-tight">案例 2-7 龜山島放火燒屋案（教材第 3-15 頁）</h4>
                </div>
              </div>
              <span class="text-xs font-mono font-bold px-2 py-0.5 rounded-full bg-white/20 text-white shrink-0">p. 3-15</span>
            </div>

            <!-- 案例事實與問題導引 -->
            <div class="p-5 sm:p-6 bg-slate-50/70 dark:bg-slate-900/50 border-b border-slate-200 dark:border-slate-800 space-y-3 font-serif">
              <div class="p-4 rounded-xl bg-white dark:bg-[#151c2d] border-l-4 border-l-teal-600 shadow-2xs space-y-2">
                <div class="text-xs font-sans font-bold text-teal-700 dark:text-teal-300">【案件事實】</div>
                <p class="text-slate-800 dark:text-slate-200 text-sm sm:text-base leading-relaxed">
                  甲放火燒燬自己所有獨立佇立在龜山島的一棟透天厝，試問是否構成現非供人使用放火罪？倘若該透天厝是乙所有，只是荒廢已久，是否能構成現非供人使用放火罪？
                </p>
              </div>
              <div class="p-4 rounded-xl bg-teal-50/60 dark:bg-teal-950/30 border border-teal-200/80 dark:border-teal-900/40 text-xs sm:text-sm text-slate-700 dark:text-slate-300 space-y-1.5 leading-relaxed">
                <div class="font-sans font-bold text-teal-900 dark:text-teal-200">【課本問題導引逐字】</div>
                <p class="indent-4">
                  § 174 Ⅰ 是抽象危險犯，§ 174 Ⅱ 是具體危險犯，保護法益都是「火勢延燒」的公共危險。首先，甲放火燒燬「自己所有物」適用 § 174 Ⅱ，且由於該透天厝是獨立佇立在龜山島，實際上不生火勢延燒的危險，<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">無法滿足本罪「致生公共危險」之要件</span>。若甲放火燒燬的是「現非供人使用的他人住宅」而適用 § 174 Ⅰ，甲僅放火燒燬住宅便已構成本罪，<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">至於實際上生不生危險性並不重要（就算事實上在龜山島的確不會有火勢延燒的危險性，也在所不同）</span>。
                </p>
              </div>
            </div>

            <!-- 五位一體法學劇院主體 (單欄垂直堆疊) -->
            <div class="p-5 sm:p-6 space-y-4">
              
              <!-- 1. 言詞辯論法庭對決區域 -->
              <div class="rounded-2xl p-4 sm:p-5 bg-gradient-to-br from-slate-100 to-teal-50/50 dark:from-slate-900 dark:to-[#122327] border border-slate-300 dark:border-slate-700 space-y-3">
                <div class="flex items-center justify-between border-b border-slate-200 dark:border-slate-700 pb-2">
                  <span class="font-sans font-black text-xs sm:text-sm text-slate-900 dark:text-white flex items-center gap-1.5">
                    <span>🏛️</span>
                    <span>法庭言詞攻防對決現場</span>
                  </span>
                  <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-teal-100 dark:bg-teal-900 text-teal-700 dark:text-teal-300">#具體vs抽象危險犯</span>
                </div>
                <!-- 公訴赤狐 -->
                <div class="flex gap-3 items-start">
                  <div class="w-9 h-9 rounded-xl overflow-hidden border border-rose-400 shrink-0">
                    <img src="images/prosecutor_fox.jpg" alt="公訴檢察官赤狐女律師" class="w-full h-full object-cover" style="object-position: center 20%; transform: scale(1.35);">
                  </div>
                  <div class="flex-1 bg-rose-50 dark:bg-rose-950/40 p-3 rounded-xl border border-rose-200 dark:border-rose-900/40 text-xs sm:text-sm text-slate-800 dark:text-slate-200">
                    <strong class="text-rose-700 dark:text-rose-400 block mb-1">公訴檢察官赤狐女律師：</strong>
                    「放火乃高度危險行為，立法者在刑法第 174 條第 1 項針對他人所有建築物明定為抽象危險犯，只要著手點火燒毀即已構成，被告不能以身在孤島狡辯無延燒可能；縱使針對第 2 項自己所有物，放火本身亦已破壞公共安寧，應嚴懲以儆效尤！」
                  </div>
                </div>
                <!-- 金毛辯護 -->
                <div class="flex gap-3 items-start">
                  <div class="w-9 h-9 rounded-xl overflow-hidden border border-amber-400 shrink-0">
                    <img src="images/golden_case_attorney.jpg" alt="金毛辯護大律師" class="w-full h-full object-cover" style="object-position: center 20%; transform: scale(1.35);">
                  </div>
                  <div class="flex-1 bg-amber-50 dark:bg-amber-950/40 p-3 rounded-xl border border-amber-200 dark:border-amber-900/40 text-xs sm:text-sm text-slate-800 dark:text-slate-200">
                    <strong class="text-amber-800 dark:text-amber-300 block mb-1">金毛首席辯護大律師：</strong>
                    「請審判長明察條文構造！刑法第 174 條第 2 項明定『致生公共危險』，通說與最高法院判例一致定性為『具體危險犯（結果犯）』！該透天厝孤立於龜山島荒野，四週全無延燒對象，事後客觀審查根本不存在具體延燒危險，故燒毀自己所有物部分絕對不成立犯罪！」
                  </div>
                </div>
              </div>

              <!-- 2. 柴柴名師生活解碼 -->
              <div class="rounded-2xl p-4 sm:p-5 bg-amber-50/70 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900/40 space-y-2">
                <div class="flex items-center gap-2 font-black text-amber-900 dark:text-amber-300 text-xs sm:text-sm">
                  <div class="w-6 h-6 rounded-lg overflow-hidden border border-amber-400 shrink-0">
                    <img src="images/shiba_law_professor.jpg" alt="柴柴" class="w-full h-full object-cover" style="object-position: center 20%; transform: scale(1.38);">
                  </div>
                  <span>🐾 柴柴法學教授 • 白話生活大解碼</span>
                </div>
                <p class="font-serif text-slate-700 dark:text-slate-300 text-xs sm:text-sm leading-relaxed">
                  大家看懂這兩者的魔鬼細節了嗎？<br>
                  ① 燒『別人的房子』（§ 174 Ⅰ）：是<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">抽象危險犯（行為犯）</span>！立法者直接推定只要燒別人房子就有危險，法官『不能事後偷看』是不是在孤島，一燒就成立！<br>
                  ② 燒『自己的房子』（§ 174 Ⅱ）：條文有『致生公共危險』，是<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">具體危險犯（結果犯）</span>！法官必須站在事後角度，檢驗這把火到底會不會燒到鄰居家。在孤島四面環海根本燒不到別人，欠缺危險結果，無罪！
                </p>
              </div>

              <!-- 3. 金毛攻防點評 -->
              <div class="rounded-2xl p-4 sm:p-5 bg-rose-50/70 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-900/40 space-y-2">
                <div class="flex items-center gap-2 font-black text-rose-900 dark:text-rose-300 text-xs sm:text-sm">
                  <div class="w-6 h-6 rounded-lg overflow-hidden border border-rose-400 shrink-0">
                    <img src="images/golden_case_attorney.jpg" alt="金毛" class="w-full h-full object-cover" style="object-position: center 20%; transform: scale(1.35);">
                  </div>
                  <span>⚖️ 金毛大律師 • 法庭攻防點評</span>
                </div>
                <p class="font-serif text-slate-700 dark:text-slate-300 text-xs sm:text-sm leading-relaxed">
                  在法庭辯護上，只要條文出現『致生……危險』六個字，律師的防禦武器就是『具體危險審查』！我們要立刻聲請現場勘驗，證明客觀環境（如四面環海、四周全為水泥阻隔）完全不具備延燒可能性，徹底打掉『致生危險』這項構成要件結果！
                </p>
              </div>

              <!-- 4. 德牧法規雷達 -->
              <div class="rounded-2xl p-4 sm:p-5 bg-blue-50/70 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-900/40 space-y-2">
                <div class="flex items-center gap-2 font-black text-blue-900 dark:text-blue-300 text-xs sm:text-sm">
                  <div class="w-6 h-6 rounded-lg overflow-hidden border border-blue-400 shrink-0">
                    <img src="images/shepherd_law_inspector.jpg" alt="德牧" class="w-full h-full object-cover" style="object-position: center 15%; transform: scale(1.4);">
                  </div>
                  <span>🛡️ 德牧法規巡查官 • 法規雷達查核</span>
                </div>
                <div class="font-serif text-slate-700 dark:text-slate-300 text-xs sm:text-sm space-y-1">
                  <div>🔍 <strong>【實體法檢索】刑法第 174 條（放火燒燬現非供人使用之他人所有或自己所有住宅罪）</strong></div>
                  <ul class="list-disc pl-5 space-y-0.5">
                    <li>第 1 項（他人所有）：抽象危險犯，不以致生公共危險為要件。</li>
                    <li>第 2 項（自己所有）：具體危險犯，明文「致生公共危險者」始克該當。</li>
                    <li>【裁判要旨查核】最高法院 29 年上字第 358 號判例：具體危險係指客觀上具體達到可能延燒之狀態，如獨立空地縱然起火亦無公共危險可言。</li>
                  </ul>
                </div>
              </div>

              <!-- 5. 邊牧首席審判長終審裁決 -->
              <div class="rounded-2xl p-4 sm:p-5 bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white border-2 border-amber-400/80 shadow-md space-y-2.5">
                <div class="flex items-center justify-between border-b border-white/10 pb-2">
                  <div class="flex items-center gap-2 font-black text-amber-300 text-xs sm:text-sm">
                    <div class="w-6 h-6 rounded-lg overflow-hidden border border-amber-400 shrink-0">
                      <img src="images/border_collie_chief_judge.jpg" alt="邊牧" class="w-full h-full object-cover" style="object-position: center 25%; transform: scale(1.35);">
                    </div>
                    <span>👨‍⚖️ 邊牧首席審判長 • 終審裁決一槌定音</span>
                  </div>
                  <span class="text-xs text-amber-400 font-bold">#法槌一敲誰與爭鋒</span>
                </div>
                <div class="text-xs sm:text-sm font-serif text-slate-200 leading-relaxed space-y-1.5">
                  <p>🔨 <strong>【實體法定讞結論】</strong></p>
                  <p>① 甲放火燒燬自己所有之孤島透天厝：因無延燒公共危險，不該當刑法第 174 條第 2 項之「致生公共危險」要件，<strong>不成立犯罪</strong>！</p>
                  <p>② 若透天厝為荒廢之他人所有：該當刑法第 174 條第 1 項，屬抽象危險犯，一經燒燬即構成犯罪，事實上在孤島無危險性在所不問，<strong>成立本罪既遂</strong>！</p>
                </div>
                <div class="p-2.5 rounded-lg bg-white/5 border border-white/10 text-[11px] text-slate-300">
                  📅 <strong>2026 最新法條動態備註</strong>：刑法公共危險罪章中關於「放火燒燬」之既遂判準，實務向採「效用喪失說」或「獨立燃燒說」（不以完全灰燼為必要）。考生答題時務必嚴格依據法條有無「致生公共危險」字樣精準判定行為犯與結果犯！
                </div>
              </div>

            </div>
          </div>

          <!-- ==================== 核心圖解 2：「實害犯、危險犯」與「行為犯、結果犯」通說關係圖 (教材第 3-16 頁) ==================== -->
          <section id="sec-p1ch2-sec3-chart2" class="space-y-4 pt-2">
            <div class="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-2">
              <div class="flex items-center gap-2">
                <span class="text-lg">🗺️</span>
                <h4 class="font-black text-slate-900 dark:text-white text-base sm:text-lg">【圖解 2】「實害犯、危險犯」與「行為犯、結果犯」之關係（通說）（教材第 3-16 頁）</h4>
              </div>
              <span class="text-xs font-mono text-emerald-600 dark:text-emerald-400 font-bold">p. 3-16 原圖復刻</span>
            </div>

            <!-- SVG 關係樹狀圖 -->
            <div class="rounded-2xl bg-white dark:bg-[#121827] border border-slate-200 dark:border-slate-800 p-4 sm:p-6 shadow-xs overflow-x-auto custom-scrollbar">
              <div class="min-w-[620px] flex flex-col gap-4">
                <svg viewBox="0 0 800 320" class="w-full h-auto select-none" xmlns="http://www.w3.org/2000/svg">
                  <!-- 背景 -->
                  <rect width="800" height="320" fill="none"/>
                  
                  <!-- 實害犯 -->
                  <rect x="160" y="40" width="130" height="56" rx="28" fill="#f8fafc" stroke="#dc2626" stroke-width="2.5" class="dark:fill-slate-800"/>
                  <text x="225" y="75" text-anchor="middle" font-family="serif" font-size="18" font-weight="bold" fill="#dc2626">實害犯</text>

                  <!-- 危險犯總框 -->
                  <rect x="160" y="160" width="130" height="56" rx="28" fill="#f8fafc" stroke="#2563eb" stroke-width="2.5" class="dark:fill-slate-800"/>
                  <text x="225" y="195" text-anchor="middle" font-family="serif" font-size="18" font-weight="bold" fill="#2563eb">危險犯</text>

                  <!-- 實害結果線條至結果犯 -->
                  <path d="M 290 68 L 560 68" stroke="#dc2626" stroke-width="2.5" fill="none"/>
                  <polygon points="560,68 550,63 550,73" fill="#dc2626"/>
                  <text x="420" y="58" text-anchor="middle" font-family="sans-serif" font-size="14" font-weight="bold" fill="#dc2626">實害結果</text>

                  <!-- 危險犯分支 -->
                  <path d="M 290 188 L 330 188 L 330 145 L 350 145" stroke="#2563eb" stroke-width="2" fill="none"/>
                  <path d="M 330 188 L 330 245 L 350 245" stroke="#2563eb" stroke-width="2" fill="none"/>

                  <!-- 具體危險犯 -->
                  <rect x="350" y="120" width="140" height="50" rx="10" fill="#eff6ff" stroke="#3b82f6" stroke-width="2" class="dark:fill-blue-950/40"/>
                  <text x="420" y="151" text-anchor="middle" font-family="serif" font-size="16" font-weight="bold" fill="#1d4ed8" class="dark:fill-blue-300">具體危險犯</text>

                  <!-- 抽象危險犯 -->
                  <rect x="350" y="220" width="140" height="50" rx="10" fill="#ecfdf5" stroke="#10b981" stroke-width="2" class="dark:fill-emerald-950/40"/>
                  <text x="420" y="251" text-anchor="middle" font-family="serif" font-size="16" font-weight="bold" fill="#047857" class="dark:fill-emerald-300">抽象危險犯</text>

                  <!-- 具體危險犯 ➔ 結果犯 (危險結果) -->
                  <path d="M 490 145 L 530 145 L 530 85 L 560 85" stroke="#2563eb" stroke-width="2" fill="none"/>
                  <polygon points="560,85 550,80 550,90" fill="#2563eb"/>
                  <text x="525" y="125" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="bold" fill="#2563eb">危險結果</text>

                  <!-- 抽象危險犯 ➔ 行為犯 (行為典型伴隨危險) -->
                  <path d="M 490 245 L 560 245" stroke="#059669" stroke-width="2" fill="none"/>
                  <polygon points="560,245 550,240 550,250" fill="#059669"/>
                  <text x="525" y="235" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="bold" fill="#059669">行為典型伴隨危險</text>

                  <!-- 右側大方塊：結果犯 -->
                  <rect x="560" y="45" width="150" height="60" rx="12" fill="#fff1f2" stroke="#e11d48" stroke-width="2.5" class="dark:fill-rose-950/40"/>
                  <text x="635" y="82" text-anchor="middle" font-family="serif" font-size="20" font-weight="black" fill="#be123c" class="dark:fill-rose-300">結果犯</text>

                  <!-- 右側大方塊：行為犯 -->
                  <rect x="560" y="215" width="150" height="60" rx="12" fill="#f0fdf4" stroke="#16a34a" stroke-width="2.5" class="dark:fill-emerald-950/40"/>
                  <text x="635" y="252" text-anchor="middle" font-family="serif" font-size="20" font-weight="black" fill="#15803d" class="dark:fill-emerald-300">行為犯</text>
                </svg>
              </div>
            </div>
          </section>

          <!-- ==================== 【作者叮嚀】「致生」（結果犯）vs「足生」（適格犯）(教材第 3-16 頁) ==================== -->
          <div id="sec-p1ch2-sec3-author-memo" class="p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-amber-50 to-orange-50/40 dark:from-[#1b1510] dark:to-[#121827] border-2 border-amber-300 dark:border-amber-800/60 space-y-3 shadow-xs">
            <div class="flex items-center justify-between border-b border-amber-200 dark:border-amber-900/60 pb-2">
              <div class="flex items-center gap-2">
                <span class="text-lg">💡</span>
                <span class="font-black text-amber-950 dark:text-amber-200 text-sm sm:text-base">【作者叮嚀】千萬注意：「致生」vs「足生」（適格犯＝適性犯）之截然不同！</span>
              </div>
              <span class="text-xs font-mono font-bold text-amber-700 dark:text-amber-400">p. 3-16 原文</span>
            </div>
            <p class="font-serif text-slate-800 dark:text-slate-200 text-sm sm:text-base leading-relaxed indent-8 text-justify">
              千萬要注意的是，立法上還有一種「足生……」的描述，例如偽造文書罪（§ 210）的「足以生損害於公眾或他人」，這與具體危險犯的「致生……危險」截然不同！
            </p>
            <p class="font-serif text-slate-800 dark:text-slate-200 text-sm sm:text-base leading-relaxed indent-8 text-justify">
              「<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">致生</span>」按通說乃是針對結果歸責的描述，也就是構成要件行為「導致發生某某結果」的意思，<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">絕對是一種結果犯的立法模式</span>。惟「<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">足生</span>」是針對行為的形容，亦即「有可能發生某某結果」的構成要件行為，至於是否行為犯或結果犯，還必須取決於該罪有無設計結果歸責要件。學理上將附加「足生……」於構成要件行為之犯罪稱為「<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">適格犯（＝適性犯）</span>」，藉此與具體危險犯相別。
            </p>
          </div>

          <!-- ==================== 案例 2-8 敲天靈蓋致身高不到180案 五位一體法學劇院 (教材第 3-16 ～ 3-17 頁) ==================== -->
          <div id="case-2-8" class="rounded-3xl border-2 border-purple-400/80 dark:border-purple-700/80 bg-white dark:bg-[#121827] shadow-md overflow-hidden space-y-0">
            
            <!-- 案例標題 Bar -->
            <div class="p-4 sm:p-5 bg-gradient-to-r from-purple-700 via-indigo-700 to-slate-800 text-white flex items-center justify-between gap-3">
              <div class="flex items-center gap-2.5">
                <span class="w-8 h-8 rounded-xl bg-white/20 text-white flex items-center justify-center font-bold text-sm shadow-xs">⚔️</span>
                <div>
                  <span class="text-[11px] font-mono text-purple-200 font-bold tracking-wider uppercase block">CASE STUDY 2-8 • 結果犯修法轉變為適格犯（行為犯）</span>
                  <h4 class="text-base sm:text-lg font-bold text-white tracking-tight">案例 2-8 敲天靈蓋致身高不到180案（教材第 3-16 ～ 3-17 頁）</h4>
                </div>
              </div>
              <span class="text-xs font-mono font-bold px-2 py-0.5 rounded-full bg-white/20 text-white shrink-0">p. 3-16~3-17</span>
            </div>

            <!-- 案例事實與問題導引 -->
            <div class="p-5 sm:p-6 bg-slate-50/70 dark:bg-slate-900/50 border-b border-slate-200 dark:border-slate-800 space-y-3 font-serif">
              <div class="p-4 rounded-xl bg-white dark:bg-[#151c2d] border-l-4 border-l-purple-600 shadow-2xs space-y-2">
                <div class="text-xs font-sans font-bold text-purple-700 dark:text-purple-300">【案件事實】</div>
                <p class="text-slate-800 dark:text-slate-200 text-sm sm:text-base leading-relaxed">
                  甲血淚控訴其父乙經常於甲年幼時敲打甲的天靈蓋，致使甲現在身高不到180，因此無法當麻豆，試問乙是否構成妨害幼童發育罪（§ 286）？請就修法前後分析之。
                </p>
              </div>
              <div class="p-4 rounded-xl bg-purple-50/60 dark:bg-purple-950/30 border border-purple-200/80 dark:border-purple-900/40 text-xs sm:text-sm text-slate-700 dark:text-slate-300 space-y-2 leading-relaxed">
                <div class="font-sans font-bold text-purple-900 dark:text-purple-200">【課本問題導引逐字】</div>
                <p class="indent-4">
                  ㈠ 101年修法前，除施以凌虐外，還要滿足「<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">致妨害其身體之自然發育</span>」，通說與實務成本罪是<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">具體危險犯、結果犯</span>，必須證明有妨害身體自然發育之結果與因果歸責關係。惟現今醫療技術根本難以認定受虐孩童身體自然發育有無受到妨害，或是難以證明構成要件結果歸責，導致本條成為贅文。
                </p>
                <p class="indent-4">
                  ㈡ 101年修法後改為「<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">施以凌虐或以他法足以妨害其身心之健全或發展</span>」，轉變為<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">適格犯（＝適性犯）、行為犯</span>，只需證明乙有足以妨害甲身心健全或發展的行為即可，適度迴避證明困境，達成預設立法目的。
                </p>
              </div>
            </div>

            <!-- 五位一體法學劇院主體 (單欄垂直堆疊) -->
            <div class="p-5 sm:p-6 space-y-4">
              
              <!-- 1. 言詞辯論法庭對決區域 -->
              <div class="rounded-2xl p-4 sm:p-5 bg-gradient-to-br from-slate-100 to-purple-50/50 dark:from-slate-900 dark:to-[#1f1329] border border-slate-300 dark:border-slate-700 space-y-3">
                <div class="flex items-center justify-between border-b border-slate-200 dark:border-slate-700 pb-2">
                  <span class="font-sans font-black text-xs sm:text-sm text-slate-900 dark:text-white flex items-center gap-1.5">
                    <span>🏛️</span>
                    <span>法庭言詞攻防對決現場</span>
                  </span>
                  <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300">#致妨害vs足生妨害</span>
                </div>
                <!-- 公訴赤狐 -->
                <div class="flex gap-3 items-start">
                  <div class="w-9 h-9 rounded-xl overflow-hidden border border-rose-400 shrink-0">
                    <img src="images/prosecutor_fox.jpg" alt="公訴檢察官赤狐女律師" class="w-full h-full object-cover" style="object-position: center 20%; transform: scale(1.35);">
                  </div>
                  <div class="flex-1 bg-rose-50 dark:bg-rose-950/40 p-3 rounded-xl border border-rose-200 dark:border-rose-900/40 text-xs sm:text-sm text-slate-800 dark:text-slate-200">
                    <strong class="text-rose-700 dark:text-rose-400 block mb-1">公訴檢察官赤狐女律師：</strong>
                    「被告乙長期暴力敲打幼童天靈蓋，依 101 年修法後刑法第 286 條規定，本罪已轉型為適格犯（行為犯）！只要該施暴凌虐之行止『客觀上足以妨害幼童身心健全或發育』即告既遂，控方根本毋庸舉證其長不到180公分與敲打之間具有醫學因果關係！」
                  </div>
                </div>
                <!-- 金毛辯護 -->
                <div class="flex gap-3 items-start">
                  <div class="w-9 h-9 rounded-xl overflow-hidden border border-amber-400 shrink-0">
                    <img src="images/golden_case_attorney.jpg" alt="金毛辯護大律師" class="w-full h-full object-cover" style="object-position: center 20%; transform: scale(1.35);">
                  </div>
                  <div class="flex-1 bg-amber-50 dark:bg-amber-950/40 p-3 rounded-xl border border-amber-200 dark:border-amber-900/40 text-xs sm:text-sm text-slate-800 dark:text-slate-200">
                    <strong class="text-amber-800 dark:text-amber-300 block mb-1">金毛首席辯護大律師：</strong>
                    「辯護人懇請合議庭注意行為時點之法律適用！若敲打天靈蓋發生於 101 年修法前，依從舊從輕原則（§ 2 Ⅰ），必須適用舊法之『結果犯』！控方必須確實證明『致妨害身體自然發育之結果』。身高受基因影響極大，欠缺醫學因果鑑定，舊法下絕對不能入罪！」
                  </div>
                </div>
              </div>

              <!-- 2. 柴柴名師生活解碼 -->
              <div class="rounded-2xl p-4 sm:p-5 bg-amber-50/70 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900/40 space-y-2">
                <div class="flex items-center gap-2 font-black text-amber-900 dark:text-amber-300 text-xs sm:text-sm">
                  <div class="w-6 h-6 rounded-lg overflow-hidden border border-amber-400 shrink-0">
                    <img src="images/shiba_law_professor.jpg" alt="柴柴" class="w-full h-full object-cover" style="object-position: center 20%; transform: scale(1.38);">
                  </div>
                  <span>🐾 柴柴法學教授 • 白話生活大解碼</span>
                </div>
                <p class="font-serif text-slate-700 dark:text-slate-300 text-xs sm:text-sm leading-relaxed">
                  為什麼立法者要把『致……』改成『足以……』？這就是刑法超神的地方！以前寫『致妨害身體自然發育』，檢察官要證明小孩本來可以長到180，卻因為被打變成170，全台灣沒有一個醫生敢開這種證明，法條直接變成廢紙！101年改成『足以妨害』後，變成<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">適格犯（行為犯）</span>，只要你敲打天靈蓋的危險行為本身『足以』危害發育，不用管他後來長多高，直接成立犯罪！
                </p>
              </div>

              <!-- 3. 金毛攻防點評 -->
              <div class="rounded-2xl p-4 sm:p-5 bg-rose-50/70 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-900/40 space-y-2">
                <div class="flex items-center gap-2 font-black text-rose-900 dark:text-rose-300 text-xs sm:text-sm">
                  <div class="w-6 h-6 rounded-lg overflow-hidden border border-rose-400 shrink-0">
                    <img src="images/golden_case_attorney.jpg" alt="金毛" class="w-full h-full object-cover" style="object-position: center 20%; transform: scale(1.35);">
                  </div>
                  <span>⚖️ 金毛大律師 • 法庭攻防點評</span>
                </div>
                <p class="font-serif text-slate-700 dark:text-slate-300 text-xs sm:text-sm leading-relaxed">
                  國考必考陷阱！遇到刑法第 286 條，請先看題目給的行為年份：<br>
                  • 101年修法前：具體危險犯／結果犯 ➔ 須證明因果歸責，無法證明則不成立。<br>
                  • 101年修法後：適格犯／行為犯 ➔ 不以發生發育妨害結果為要件，只需行為具備危害適格性即可成立！
                </p>
              </div>

              <!-- 4. 德牧法規雷達 -->
              <div class="rounded-2xl p-4 sm:p-5 bg-blue-50/70 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-900/40 space-y-2">
                <div class="flex items-center gap-2 font-black text-blue-900 dark:text-blue-300 text-xs sm:text-sm">
                  <div class="w-6 h-6 rounded-lg overflow-hidden border border-blue-400 shrink-0">
                    <img src="images/shepherd_law_inspector.jpg" alt="德牧" class="w-full h-full object-cover" style="object-position: center 15%; transform: scale(1.4);">
                  </div>
                  <span>🛡️ 德牧法規巡查官 • 法規雷達查核</span>
                </div>
                <div class="font-serif text-slate-700 dark:text-slate-300 text-xs sm:text-sm space-y-1">
                  <div>🔍 <strong>【實體法檢索】刑法第 286 條（妨害幼童發育罪之立法演進）</strong></div>
                  <ul class="list-disc pl-5 space-y-0.5">
                    <li>民國 101 年以前舊法：文字為「致妨害其身體之自然發育」，實務定性為結果犯。</li>
                    <li>民國 101 年修正：將「致」修正為「足以」，化解「結果歸責舉證困境」，定性為適格犯（行為犯）。</li>
                    <li>民國 108 年再修：增訂第 2 項至第 4 項加重結果犯（致死處無期徒刑或 10 年以上；致重傷處 5 年至 12 年）。</li>
                  </ul>
                </div>
              </div>

              <!-- 5. 邊牧首席審判長終審裁決 -->
              <div class="rounded-2xl p-4 sm:p-5 bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white border-2 border-amber-400/80 shadow-md space-y-2.5">
                <div class="flex items-center justify-between border-b border-white/10 pb-2">
                  <div class="flex items-center gap-2 font-black text-amber-300 text-xs sm:text-sm">
                    <div class="w-6 h-6 rounded-lg overflow-hidden border border-amber-400 shrink-0">
                      <img src="images/border_collie_chief_judge.jpg" alt="邊牧" class="w-full h-full object-cover" style="object-position: center 25%; transform: scale(1.35);">
                    </div>
                    <span>👨‍⚖️ 邊牧首席審判長 • 終審裁決一槌定音</span>
                  </div>
                  <span class="text-xs text-amber-400 font-bold">#法槌一敲誰與爭鋒</span>
                </div>
                <div class="text-xs sm:text-sm font-serif text-slate-200 leading-relaxed space-y-1.5">
                  <p>🔨 <strong>【定讞結論】</strong></p>
                  <p>① <strong>若適用 101 年舊法</strong>：為結果犯，因醫療技術無法證明天靈蓋敲打與成年未達180公分有結果歸責關係，乙不構成舊法第 286 條。</p>
                  <p>② <strong>若適用現行法</strong>：為適格犯（行為犯），常態性敲打幼童頭部客觀上足以妨害其發育，毋庸證明身高因果關係，乙<strong>成立現行刑法第 286 條第 1 項妨害幼童發育罪既遂</strong>！</p>
                </div>
                <div class="p-2.5 rounded-lg bg-white/5 border border-white/10 text-[11px] text-slate-300">
                  📅 <strong>2026 最新法條動態備註</strong>：刑法第 286 條於民國 108 年更大幅提高法定刑，且增列意圖營利凌虐幼童之重罰規定，國考答題應格外注意修法年份與罪名要件體系之變遷！
                </div>
              </div>

            </div>
          </div>

          <!-- ==================== 案例 2-9 產婦醫院產子不告而別案 五位一體法學劇院 (教材第 3-17 頁) ==================== -->
          <div id="case-2-9" class="rounded-3xl border-2 border-rose-400/80 dark:border-rose-700/80 bg-white dark:bg-[#121827] shadow-md overflow-hidden space-y-0">
            
            <!-- 案例標題 Bar -->
            <div class="p-4 sm:p-5 bg-gradient-to-r from-rose-700 via-purple-700 to-slate-800 text-white flex items-center justify-between gap-3">
              <div class="flex items-center gap-2.5">
                <span class="w-8 h-8 rounded-xl bg-white/20 text-white flex items-center justify-center font-bold text-sm shadow-xs">⚔️</span>
                <div>
                  <span class="text-[11px] font-mono text-rose-200 font-bold tracking-wider uppercase block">CASE STUDY 2-9 • 遺棄罪之爭鳴：結果犯說 vs 行為犯說</span>
                  <h4 class="text-base sm:text-lg font-bold text-white tracking-tight">案例 2-9 產婦在醫院產子不告而別案（教材第 3-17 頁）</h4>
                </div>
              </div>
              <span class="text-xs font-mono font-bold px-2 py-0.5 rounded-full bg-white/20 text-white shrink-0">p. 3-17</span>
            </div>

            <!-- 案例事實與問題導引 -->
            <div class="p-5 sm:p-6 bg-slate-50/70 dark:bg-slate-900/50 border-b border-slate-200 dark:border-slate-800 space-y-3 font-serif">
              <div class="p-4 rounded-xl bg-white dark:bg-[#151c2d] border-l-4 border-l-rose-600 shadow-2xs space-y-2">
                <div class="text-xs font-sans font-bold text-rose-700 dark:text-rose-300">【案件事實】</div>
                <p class="text-slate-800 dark:text-slate-200 text-sm sm:text-base leading-relaxed">
                  遺棄罪（§ 293以下）是危險犯無疑，不過究竟是行為犯還是結果犯呢？孕婦甲在醫院產子乙後不告而別，是否成立違背義務遺棄罪（§ 294 Ⅰ）呢？
                </p>
              </div>
              <div class="p-4 rounded-xl bg-rose-50/60 dark:bg-rose-950/30 border border-rose-200/80 dark:border-rose-900/40 text-xs sm:text-sm text-slate-700 dark:text-slate-300 space-y-2 leading-relaxed">
                <div class="font-sans font-bold text-rose-900 dark:text-rose-200">【課本問題導引逐字】</div>
                <p class="indent-4">
                  ㈠ <span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">結果犯說</span>：雖說遺棄罪並無「致生……危險」之描述，但解釋上除遺棄行為外，還要遺棄行為致生死亡危險，才有刑罰必要。而這個死亡危險就是危險結果，因此遺棄罪是<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">具體危險犯、結果犯</span>。甲的不告而別未致乙有死亡危險，不成立違背義務遺棄罪。
                </p>
                <p class="indent-4">
                  ㈡ <span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">行為犯說</span>：本罪並無「致生……危險」之描述，絕對不是具體危險犯，若解釋上必須附加死亡危險，也是附加在行為的內涵中，亦即只有足以引起死亡危險的遺棄行為才是本罪構成要件行為，形成<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">適格犯（＝適性犯）、行為犯</span>。甲的不告而別並非足以引起死亡危險的遺棄行為，不成立違背義務遺棄罪。
                </p>
              </div>
            </div>

            <!-- 五位一體法學劇院主體 (單欄垂直堆疊) -->
            <div class="p-5 sm:p-6 space-y-4">
              
              <!-- 1. 言詞辯論法庭對決區域 -->
              <div class="rounded-2xl p-4 sm:p-5 bg-gradient-to-br from-slate-100 to-rose-50/50 dark:from-slate-900 dark:to-[#22121e] border border-slate-300 dark:border-slate-700 space-y-3">
                <div class="flex items-center justify-between border-b border-slate-200 dark:border-slate-700 pb-2">
                  <span class="font-sans font-black text-xs sm:text-sm text-slate-900 dark:text-white flex items-center gap-1.5">
                    <span>🏛️</span>
                    <span>法庭言詞攻防對決現場</span>
                  </span>
                  <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-rose-100 dark:bg-rose-900 text-rose-700 dark:text-rose-300">#遺棄罪學說大交鋒</span>
                </div>
                <!-- 公訴赤狐 -->
                <div class="flex gap-3 items-start">
                  <div class="w-9 h-9 rounded-xl overflow-hidden border border-rose-400 shrink-0">
                    <img src="images/prosecutor_fox.jpg" alt="公訴檢察官赤狐女律師" class="w-full h-full object-cover" style="object-position: center 20%; transform: scale(1.35);">
                  </div>
                  <div class="flex-1 bg-rose-50 dark:bg-rose-950/40 p-3 rounded-xl border border-rose-200 dark:border-rose-900/40 text-xs sm:text-sm text-slate-800 dark:text-slate-200">
                    <strong class="text-rose-700 dark:text-rose-400 block mb-1">公訴檢察官赤狐女律師：</strong>
                    「被告甲身為產婦，對新生兒乙依民法負有扶助、養育之保護義務。甲生完孩子竟悄悄開溜不告而別，此種消極遺棄之不作為，已使嬰兒脫離親生母親之保護！本罪條文無『致生危險』四字，只要具備遺棄行為即成立，依法應論以刑法第 294 條第 1 項！」
                  </div>
                </div>
                <!-- 金毛辯護 -->
                <div class="flex gap-3 items-start">
                  <div class="w-9 h-9 rounded-xl overflow-hidden border border-amber-400 shrink-0">
                    <img src="images/golden_case_attorney.jpg" alt="金毛辯護大律師" class="w-full h-full object-cover" style="object-position: center 20%; transform: scale(1.35);">
                  </div>
                  <div class="flex-1 bg-amber-50 dark:bg-amber-950/40 p-3 rounded-xl border border-amber-200 dark:border-amber-900/40 text-xs sm:text-sm text-slate-800 dark:text-slate-200">
                    <strong class="text-amber-800 dark:text-amber-300 block mb-1">金毛首席辯護大律師：</strong>
                    「合議庭請看現場客觀情境！嬰兒乙身處現代化公立醫院產房，周遭有專業醫師、護理師 24 小時照料保溫與餵奶，殊無生存生命之立即危險！無論採【結果犯說】（未發生生命危險結果）或【行為犯/適格犯說】（在醫院離開並非足以引起生命危險之遺棄行為），雙說殊途同歸，均認定甲不成立違背義務遺棄罪！」
                  </div>
                </div>
              </div>

              <!-- 2. 柴柴名師生活解碼 -->
              <div class="rounded-2xl p-4 sm:p-5 bg-amber-50/70 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900/40 space-y-2">
                <div class="flex items-center gap-2 font-black text-amber-900 dark:text-amber-300 text-xs sm:text-sm">
                  <div class="w-6 h-6 rounded-lg overflow-hidden border border-amber-400 shrink-0">
                    <img src="images/shiba_law_professor.jpg" alt="柴柴" class="w-full h-full object-cover" style="object-position: center 20%; transform: scale(1.38);">
                  </div>
                  <span>🐾 柴柴法學教授 • 白話生活大解碼</span>
                </div>
                <p class="font-serif text-slate-700 dark:text-slate-300 text-xs sm:text-sm leading-relaxed">
                  這個案例是國考超經典的『殊途同歸』神題！<br>
                  • <strong>結果犯說</strong>：把危險當作『結果』。既然在醫院有護士照顧，小孩根本沒陷入死亡危險，欠缺危險結果 ➔ 不構成！<br>
                  • <strong>行為犯/適格犯說</strong>：條文沒寫『致生危險』，所以危險不是結果，而是行為的『內涵資格』。在醫院留下小孩，不是『足以引起死亡危險的遺棄行為』 ➔ 也不構成！<br>
                  所以不管採哪一說，甲在醫院落跑都不會成立遺棄罪！
                </p>
              </div>

              <!-- 3. 金毛攻防點評 -->
              <div class="rounded-2xl p-4 sm:p-5 bg-rose-50/70 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-900/40 space-y-2">
                <div class="flex items-center gap-2 font-black text-rose-900 dark:text-rose-300 text-xs sm:text-sm">
                  <div class="w-6 h-6 rounded-lg overflow-hidden border border-rose-400 shrink-0">
                    <img src="images/golden_case_attorney.jpg" alt="金毛" class="w-full h-full object-cover" style="object-position: center 20%; transform: scale(1.35);">
                  </div>
                  <span>⚖️ 金毛大律師 • 法庭攻防點評</span>
                </div>
                <p class="font-serif text-slate-700 dark:text-slate-300 text-xs sm:text-sm leading-relaxed">
                  考試作答秘笈大公開：遇到這題，兩說必須並陳！先寫結果犯說之立論與結論，再寫行為犯（適格犯）說之論述，最後點出『本案無論依結果犯說抑或行為犯說，甲均不成立違背義務遺棄罪』，這就是閱卷委員心中的滿分答題模板！
                </p>
              </div>

              <!-- 4. 德牧法規雷達 -->
              <div class="rounded-2xl p-4 sm:p-5 bg-blue-50/70 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-900/40 space-y-2">
                <div class="flex items-center gap-2 font-black text-blue-900 dark:text-blue-300 text-xs sm:text-sm">
                  <div class="w-6 h-6 rounded-lg overflow-hidden border border-blue-400 shrink-0">
                    <img src="images/shepherd_law_inspector.jpg" alt="德牧" class="w-full h-full object-cover" style="object-position: center 15%; transform: scale(1.4);">
                  </div>
                  <span>🛡️ 德牧法規巡查官 • 法規雷達查核</span>
                </div>
                <div class="font-serif text-slate-700 dark:text-slate-300 text-xs sm:text-sm space-y-1">
                  <div>🔍 <strong>【實體法與實務要旨檢索】刑法第 294 條第 1 項</strong></div>
                  <ul class="list-disc pl-5 space-y-0.5">
                    <li>條文：「對於無自救力之人，依法令或契約應扶助、養育或保護而遺棄之，或不為其生存所必要之扶助、養育或保護者……」</li>
                    <li>【29年上字第3777號判例】：刑法上遺棄罪以對於無自救力之人，不盡扶養或保護義務，而致其有不能生存之危險為成立要件。</li>
                    <li>【87年台上字第2474號判決】：若已有他人（醫院醫護）為之照顧，難認有何生命危險，即無成立本罪餘地。</li>
                  </ul>
                </div>
              </div>

              <!-- 5. 邊牧首席審判長終審裁決 -->
              <div class="rounded-2xl p-4 sm:p-5 bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white border-2 border-amber-400/80 shadow-md space-y-2.5">
                <div class="flex items-center justify-between border-b border-white/10 pb-2">
                  <div class="flex items-center gap-2 font-black text-amber-300 text-xs sm:text-sm">
                    <div class="w-6 h-6 rounded-lg overflow-hidden border border-amber-400 shrink-0">
                      <img src="images/border_collie_chief_judge.jpg" alt="邊牧" class="w-full h-full object-cover" style="object-position: center 25%; transform: scale(1.35);">
                    </div>
                    <span>👨‍⚖️ 邊牧首席審判長 • 終審裁決一槌定音</span>
                  </div>
                  <span class="text-xs text-amber-400 font-bold">#法槌一敲誰與爭鋒</span>
                </div>
                <div class="text-xs sm:text-sm font-serif text-slate-200 leading-relaxed space-y-1.5">
                  <p>🔨 <strong>【定讞結論】</strong></p>
                  <p>甲雖負有民法之親權保護義務，惟產房嬰兒有醫護人員即時看護，不具客觀生存危險。依【結果犯說】因未致生危險結果而不該當，依【行為犯/適格犯說】亦因該行止欠缺足以引起死亡危險之適格性而不該當，甲<strong>不成立刑法第 294 條第 1 項違背義務遺棄罪</strong>！</p>
                </div>
                <div class="p-2.5 rounded-lg bg-white/5 border border-white/10 text-[11px] text-slate-300">
                  📅 <strong>2026 最新法條動態備註</strong>：刑法遺棄罪章與兒童及少年福利與權益保障法（兒少法）之關係密切。縱刑法不構成遺棄罪，行為人仍可能面臨兒少法第 56 條之行政安置與行政裁罰，實務操作時切勿混淆！
                </div>
              </div>

            </div>
          </div>

          <!-- 章節尾聲導航 -->
          <div class="pt-6 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between gap-4">
            <button onclick="switchView('part1-ch2-sec2')" class="px-4 py-2 rounded-xl bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 font-bold text-xs flex items-center gap-1.5 border border-slate-200 dark:border-slate-700 cursor-pointer">
              <span>← 上一節：第二章 第二節 變體要素</span>
            </button>
            <button onclick="alert('恭喜您！已學完第二章第三節，後續章節持續更新中！')" class="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center gap-1.5 shadow-sm cursor-pointer">
              <span>第三節完結 🎉</span>
            </button>
          </div>

        </div>
`;
