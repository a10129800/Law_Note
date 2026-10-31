// =========================================================================
// 第二篇 故意既遂犯的構成要件該當性
// 第二章 客觀構成要件該當性・專題研究二 客觀構成要件審查的極度例外——合法替代行為 (教材第 4-25 ～ 4-27 頁 全篇完結)
// 嚴格依據陳奕廷律師《刑法總則【圖說系列】》原書 1:1 忠實復刻
// 憲政遵循：AGENTS.md (純紅底線、單欄垂直堆疊、犬系四大天王、Zero-CORS、2026法條備註)
// =========================================================================

window.APP_VIEWS = window.APP_VIEWS || {};

window.APP_VIEWS['viewPart2Ch2Special2'] = `
<div id="viewPart2Ch2Special2" class="fade-enter space-y-8 max-w-4xl mx-auto">

  <!-- ==================== 頁首徽章與大標題 (1:1 復刻原書 4-25) ==================== -->
  <header class="text-center space-y-3 pt-2">
    <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100/80 dark:bg-indigo-900/40 text-indigo-800 dark:text-indigo-300 text-xs font-mono font-bold tracking-wider uppercase border border-indigo-200 dark:border-indigo-800">
      <span>第二篇 • 故意既遂犯構成要件</span>
      <span>•</span>
      <span>第二章 專題研究二</span>
      <span>•</span>
      <span>p. 4-25～4-27</span>
    </div>
    
    <!-- 圓形專題研究徽章 1:1 復刻原書 -->
    <div class="flex items-center justify-center gap-3">
      <div class="inline-flex items-center justify-center w-12 h-12 rounded-full border-2 border-dashed border-indigo-600 dark:border-indigo-400 bg-indigo-50/70 dark:bg-indigo-950/40 text-indigo-700 dark:text-indigo-300 font-serif font-black text-sm shadow-xs">
        專研
      </div>
    </div>

    <h1 class="text-2xl sm:text-3xl lg:text-4xl font-serif font-black text-slate-900 dark:text-white tracking-tight">
      客觀構成要件審查的極度例外——<br class="hidden sm:inline">合法替代行為
      <sup class="text-xs font-sans text-indigo-600 dark:text-indigo-400 font-bold ml-1">5</sup>
    </h1>

    <div class="flex items-center justify-center gap-2 pt-1">
      <div class="h-0.5 w-12 bg-indigo-500/60 rounded-full"></div>
      <h2 class="text-sm sm:text-base font-serif font-bold text-indigo-700 dark:text-indigo-400">
        平等原則與假設因果檢驗・罪疑唯輕說 vs 風險升高說
      </h2>
      <div class="h-0.5 w-12 bg-indigo-500/60 rounded-full"></div>
    </div>

    <!-- 註腳 5 (忠實收錄原書文獻出處) -->
    <div class="max-w-2xl mx-auto px-4 py-1.5 rounded-xl bg-slate-100/70 dark:bg-slate-800/50 text-[11px] text-slate-600 dark:text-slate-400 font-serif border border-slate-200/80 dark:border-slate-700 text-justify">
      <span class="font-bold text-indigo-600 dark:text-indigo-400">註 5</span>：以下說明參考自：Wolfgang Frisch（蔡聖偉譯），客觀之結果歸責，法學新論 32，P.34～P.36；林書楷，刑法總則，2010，P.91以下；許恒達，合法替代行為與過失犯的結果歸責，台大法學論叢 40-2，P.722以下。
    </div>
  </header>

  <!-- ==================== 前言與合法替代行為定義 (4-25) ==================== -->
  <section id="sec-special2-intro" class="scroll-mt-24 p-6 sm:p-7 rounded-3xl bg-white dark:bg-[#121827] border border-slate-200/90 dark:border-white/10 shadow-sm space-y-4 font-serif">
    <div class="flex items-center gap-2 text-xs font-mono text-indigo-600 dark:text-indigo-400 font-bold uppercase tracking-wider">
      <span>📖 核心概念</span>
      <span>•</span>
      <span>客觀構成要件審查之極端例外</span>
    </div>

    <p class="text-sm sm:text-base text-slate-700 dark:text-slate-200 leading-relaxed text-justify indent-8">
      原則上通過「構成要件行為」與「構成要件結果歸責」審查後，將導出客觀構成要件該當結論，但還是有極端例外情形將否定該當性，這類群組稱<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">合法替代行為</span>。
    </p>

    <p class="text-sm sm:text-base text-slate-700 dark:text-slate-200 leading-relaxed text-justify indent-8">
      所謂合法替代行為，指行為人「事實上」雖滿足構成要件行為與結果歸責，但<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">「假設」行為人沒有構成要件行為時，相同的結果歸責卻依舊會發生</span>。
    </p>

    <div class="p-4 rounded-2xl bg-indigo-50/80 dark:bg-indigo-950/30 border-l-4 border-l-indigo-600 border border-indigo-200 dark:border-indigo-900/40 text-xs sm:text-sm text-indigo-950 dark:text-indigo-200 space-y-1.5">
      <div class="font-bold flex items-center gap-1.5">
        <span>⚖️</span>
        <span>否定該當性之法理基礎：平等原則</span>
      </div>
      <p class="leading-relaxed text-justify">
        否定該當性的理由在於<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">平等原則</span>，因為不論行為人有無構成要件行為，結果歸責都完全相同，基於「等者等之、不等者不等之」的禁止差別對待法理，<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">「評價上」應類同無構成要件行為</span>，客觀構成要件不該當。
      </p>
    </div>
  </section>

  <!-- ==================== 案例 2-25【皮革加工案】(4-25) ==================== -->
  <section id="case-2-25-leather" class="scroll-mt-24 rounded-3xl bg-white dark:bg-[#121827] border border-slate-200/90 dark:border-white/10 p-6 sm:p-7 space-y-5 shadow-sm font-serif">
    <div class="flex items-center justify-between border-b border-slate-200/60 dark:border-white/10 pb-3 flex-wrap gap-2">
      <div class="flex items-center gap-2">
        <span class="px-2.5 py-1 rounded-xl bg-indigo-100 dark:bg-indigo-950/80 text-indigo-700 dark:text-indigo-300 font-mono text-xs font-black">
          案例 2-25
        </span>
        <h3 class="font-serif font-black text-slate-900 dark:text-white text-base sm:text-lg">
          【皮革加工案】——未經消毒皮革染菌女工身亡案
        </h3>
      </div>
      <span class="text-xs font-mono text-slate-500 dark:text-slate-400">教材第 4-25 頁</span>
    </div>

    <!-- 案情原文 -->
    <div class="p-4 sm:p-5 rounded-2xl bg-slate-50 dark:bg-[#161f30] border-l-4 border-l-blue-600 border border-slate-200 dark:border-slate-800 text-xs sm:text-sm text-slate-800 dark:text-slate-200 leading-relaxed text-justify">
      工廠主人甲將未經消毒的皮革交給女工乙加工製成毛筆，然而依據法律規定，該原料應先經過消毒程序始可交付。事後乙果然因該批皮革染菌身亡，然而法院鑑定後卻發現，縱使甲有經過消毒程序，依當時科技水準確定無法殺死該種細菌，乙的死亡結果仍然無從避免。
    </div>

    <!-- 小題導引原文 -->
    <div class="p-4 sm:p-5 rounded-2xl bg-indigo-50/70 dark:bg-indigo-950/30 border border-indigo-200 dark:border-indigo-900/40 text-xs sm:text-sm text-slate-700 dark:text-slate-300 space-y-2 text-justify">
      <div class="font-bold text-indigo-900 dark:text-indigo-200 flex items-center gap-1.5">
        <span>🧭</span>
        <span>【問題導引】原書解析：</span>
      </div>
      <p class="indent-6 leading-relaxed">
        甲違反法律規定交付未經消毒的皮革給乙，並在事實上導致乙染菌身亡，且該結果與規範目的預設結果相同（以上審查從略）。惟若依鑑定報告假設甲履行消毒程序，死亡結果卻依舊會發生，基於<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">平等原則</span>，評價上<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">客觀構成要件不該當</span>。
      </p>
    </div>

    <!-- 劇院導師解析 (單欄垂直堆疊) -->
    <div class="space-y-4 pt-1">
      <div class="p-5 rounded-2xl bg-amber-50/80 dark:bg-[#18181b] border-l-4 border-l-amber-500 border border-amber-200/80 dark:border-white/10 space-y-2">
        <div class="flex items-center gap-2">
          <span class="text-base">🐾</span>
          <span class="font-bold text-xs sm:text-sm text-amber-950 dark:text-amber-200">柴柴法學教授 • 白話大解碼</span>
        </div>
        <p class="text-xs sm:text-sm text-slate-700 dark:text-slate-200 leading-relaxed text-justify indent-6">
          老闆甲雖然違法偷懶沒消毒，但在真實世界裡，就算甲老老實實照規定消毒，那種頑強的細菌在當時科技根本殺不死！
          換句話說，「消毒」跟「不消毒」的結果根本一模一樣，死亡無可避免。既然合法做這件事女工一樣會死，法律就不能把女工的死怪在甲沒消毒這件事上，這就是「等者等之」的平等原則！
        </p>
      </div>
    </div>
  </section>

  <!-- ==================== 案例 2-26【醫師漏未止血案】(4-26) ==================== -->
  <section id="case-2-26-medical-surgery" class="scroll-mt-24 rounded-3xl bg-white dark:bg-[#121827] border border-slate-200/90 dark:border-white/10 p-6 sm:p-7 space-y-5 shadow-sm font-serif">
    <div class="flex items-center justify-between border-b border-slate-200/60 dark:border-white/10 pb-3 flex-wrap gap-2">
      <div class="flex items-center gap-2">
        <span class="px-2.5 py-1 rounded-xl bg-indigo-100 dark:bg-indigo-950/80 text-indigo-700 dark:text-indigo-300 font-mono text-xs font-black">
          案例 2-26
        </span>
        <h3 class="font-serif font-black text-slate-900 dark:text-white text-base sm:text-lg">
          【醫療手術疏失】——腎臟移植漏未止血與血小板凝血不全案
        </h3>
      </div>
      <span class="text-xs font-mono text-slate-500 dark:text-slate-400">教材第 4-26 頁</span>
    </div>

    <!-- 案情原文 -->
    <div class="p-4 sm:p-5 rounded-2xl bg-slate-50 dark:bg-[#161f30] border-l-4 border-l-blue-600 border border-slate-200 dark:border-slate-800 text-xs sm:text-sm text-slate-800 dark:text-slate-200 leading-relaxed text-justify">
      醫師甲在為乙動腎臟移植手術時，漏未進行止血的安全措施，導致乙失血過多而死亡。惟嗣後法醫驗屍發現，乙天生患有血小板凝固不全的疾病，根本無法承受大規模的動刀手術，即使甲有進行止血措施，乙仍然會失血過多而死亡。
    </div>

    <!-- 小題導引原文 -->
    <div class="p-4 sm:p-5 rounded-2xl bg-indigo-50/70 dark:bg-indigo-950/30 border border-indigo-200 dark:border-indigo-900/40 text-xs sm:text-sm text-slate-700 dark:text-slate-300 space-y-2 text-justify">
      <div class="font-bold text-indigo-900 dark:text-indigo-200 flex items-center gap-1.5">
        <span>🧭</span>
        <span>【問題導引】原書解析：</span>
      </div>
      <p class="indent-6 leading-relaxed">
        甲違反醫療法規未進行止血程序，並在事實上導致乙失血而亡的結果，且該結果與規範目的預設結果相同（以上審查從略）。惟若依驗屍報告假設甲進行止血措施，死亡結果卻依舊會發生，基於<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">平等原則</span>，評價上<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">客觀構成要件不該當</span>。
      </p>
    </div>

    <!-- 【作者叮嚀】高對比卡片 (1:1 復刻原書 4-26) -->
    <div class="p-5 rounded-2xl bg-amber-50/90 dark:bg-amber-950/40 border-2 border-amber-400/70 dark:border-amber-700/60 space-y-2">
      <div class="flex items-center gap-2 text-amber-900 dark:text-amber-200 font-bold text-xs sm:text-sm">
        <span>💡</span>
        <span>【作者叮嚀】評價上等同 vs 自始不該當：</span>
      </div>
      <p class="text-xs sm:text-sm text-amber-950 dark:text-amber-100 leading-relaxed text-justify indent-6">
        請注意，合法替代行為在<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">真實流程中仍然該當構成要件行為</span>，僅是「評價上」等同無構成要件行為，千萬不能誤會是自始不該當構成要件行為。
      </p>
    </div>
  </section>

  <!-- ==================== 原書圖解：平等原則審查 (4-26 1:1 復刻) ==================== -->
  <section id="sec-special2-chart" class="scroll-mt-24 space-y-4 font-serif">
    <div class="flex items-center justify-between border-b border-slate-200/80 dark:border-white/10 pb-3">
      <div class="flex items-center gap-2.5">
        <span class="w-3.5 h-3.5 rounded-full bg-indigo-600"></span>
        <h3 class="text-lg sm:text-xl font-serif font-black text-slate-900 dark:text-white tracking-wide">
          平等原則審查 架構流程圖解
        </h3>
      </div>
      <span class="text-xs font-mono font-bold px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
        教材第 4-26 頁 1:1 圖解復刻
      </span>
    </div>

    <div class="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#121827] border border-slate-200/90 dark:border-white/10 shadow-sm flex flex-col items-center">
      <div class="w-full max-w-2xl py-2 select-none" style="-webkit-user-drag: none; user-select: none;">
        <svg viewBox="0 0 620 320" class="w-full h-auto block drop-shadow-xs" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <marker id="sp2-arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 1.5 L 10 5 L 0 8.5 z" fill="#475569" />
            </marker>
          </defs>

          <!-- 左側起點：行為 (圓角矩形) -->
          <rect x="20" y="160" width="85" height="50" rx="14" class="fill-slate-100 dark:fill-slate-800 stroke-slate-400 dark:stroke-slate-600" stroke-width="2" />
          <text x="62.5" y="191" text-anchor="middle" class="fill-slate-900 dark:fill-white font-serif font-black" font-size="16">行為</text>

          <!-- 箭頭：通過條件理論的審查 -->
          <path d="M 105 185 L 195 185" fill="none" stroke="#475569" stroke-width="2" marker-end="url(#sp2-arrow)" />
          <text x="150" y="175" text-anchor="middle" class="fill-slate-500 dark:fill-slate-400 font-serif" font-size="11">通過條件理論的審查</text>

          <!-- 中間：實現該罪 (圓角矩形) -->
          <rect x="200" y="160" width="95" height="50" rx="14" class="fill-indigo-50 dark:fill-indigo-950/60 stroke-indigo-500 dark:stroke-indigo-400" stroke-width="2" />
          <text x="247.5" y="191" text-anchor="middle" class="fill-indigo-950 dark:fill-indigo-200 font-serif font-black" font-size="16">實現該罪</text>

          <!-- 向上箭頭引出平等原則檢驗 -->
          <path d="M 247.5 160 L 247.5 95 L 295 95" fill="none" stroke="#475569" stroke-width="2" marker-end="url(#sp2-arrow)" />

          <!-- 平等原則審查核心大框 -->
          <rect x="300" y="60" width="130" height="70" rx="14" class="fill-amber-50 dark:fill-amber-950/40 stroke-amber-500 dark:stroke-amber-400" stroke-width="2" />
          <text x="365" y="88" text-anchor="middle" class="fill-amber-950 dark:fill-amber-200 font-serif font-bold" font-size="13">假設有效合法行為，</text>
          <text x="365" y="110" text-anchor="middle" class="fill-amber-950 dark:fill-amber-200 font-serif font-bold" font-size="13">是否仍實現該罪？</text>

          <!-- 分支：否 ➔ 客觀 TB 該當 -->
          <path d="M 430 80 L 460 80" fill="none" stroke="#475569" stroke-width="2" marker-end="url(#sp2-arrow)" />
          <circle cx="480" cy="80" r="14" class="fill-slate-100 dark:fill-slate-800 stroke-slate-500" stroke-width="1.5" />
          <text x="480" y="85" text-anchor="middle" class="fill-slate-800 dark:fill-slate-200 font-serif font-bold" font-size="13">否</text>
          <text x="502" y="85" class="fill-slate-500 dark:fill-slate-400 font-serif font-bold" font-size="16">＝</text>
          <rect x="525" y="64" width="85" height="32" rx="8" class="fill-rose-50 dark:fill-rose-950/50 stroke-rose-500" stroke-width="1.5" />
          <text x="567.5" y="85" text-anchor="middle" class="fill-rose-700 dark:fill-rose-300 font-serif font-black" font-size="13">客觀TB該當</text>

          <!-- 分支：是 ➔ 客觀 TB 不該當 -->
          <path d="M 430 115 L 460 115" fill="none" stroke="#475569" stroke-width="2" marker-end="url(#sp2-arrow)" />
          <circle cx="480" cy="115" r="14" class="fill-emerald-100 dark:fill-emerald-950/80 stroke-emerald-600" stroke-width="1.5" />
          <text x="480" y="120" text-anchor="middle" class="fill-emerald-800 dark:fill-emerald-200 font-serif font-bold" font-size="13">是</text>
          <text x="502" y="120" class="fill-slate-500 dark:fill-slate-400 font-serif font-bold" font-size="16">＝</text>
          <rect x="525" y="99" width="85" height="32" rx="8" class="fill-emerald-50 dark:fill-emerald-950/50 stroke-emerald-600" stroke-width="1.5" />
          <text x="567.5" y="120" text-anchor="middle" class="fill-emerald-700 dark:fill-emerald-300 font-serif font-black" font-size="13">客觀TB不該當</text>

          <!-- 底部雲狀備註：必須論、探究實際上所發生的結果，因此只能採取事後說 -->
          <rect x="180" y="235" width="155" height="55" rx="18" class="fill-blue-50 dark:fill-blue-950/40 stroke-blue-400 dark:stroke-blue-600" stroke-width="1.5" stroke-dasharray="4 3" />
          <path d="M 247.5 210 L 247.5 235" fill="none" stroke="#60A5FA" stroke-width="1.5" stroke-dasharray="2 2" />
          <text x="257.5" y="255" text-anchor="middle" class="fill-blue-900 dark:fill-blue-200 font-serif" font-size="11">必須論、探究</text>
          <text x="257.5" y="271" text-anchor="middle" class="fill-blue-900 dark:fill-blue-200 font-serif" font-size="11">實際上所發生的</text>
          <text x="257.5" y="285" text-anchor="middle" class="fill-blue-900 dark:fill-blue-200 font-serif" font-size="11">結果，因此只能採</text>
          <text x="257.5" y="299" text-anchor="middle" class="fill-blue-900 dark:fill-blue-200 font-serif font-bold" font-size="11">取事後說</text>
        </svg>
      </div>
    </div>
  </section>

  <!-- ==================== 案例 2-27【單車騎士案】(4-27) ==================== -->
  <section id="case-2-27-cyclist" class="scroll-mt-24 rounded-3xl bg-white dark:bg-[#121827] border border-slate-200/90 dark:border-white/10 p-6 sm:p-7 space-y-5 shadow-sm font-serif">
    <div class="flex items-center justify-between border-b border-slate-200/60 dark:border-white/10 pb-3 flex-wrap gap-2">
      <div class="flex items-center gap-2">
        <span class="px-2.5 py-1 rounded-xl bg-indigo-100 dark:bg-indigo-950/80 text-indigo-700 dark:text-indigo-300 font-mono text-xs font-black">
          案例 2-27
        </span>
        <h3 class="font-serif font-black text-slate-900 dark:text-white text-base sm:text-lg">
          【單車騎士案】——違規超車與假設流程發生不明（通說 vs 少數說）
        </h3>
      </div>
      <span class="text-xs font-mono text-slate-500 dark:text-slate-400">教材第 4-27 頁</span>
    </div>

    <!-- 案情原文 -->
    <div class="p-4 sm:p-5 rounded-2xl bg-slate-50 dark:bg-[#161f30] border-l-4 border-l-blue-600 border border-slate-200 dark:border-slate-800 text-xs sm:text-sm text-slate-800 dark:text-slate-200 leading-relaxed text-justify">
      汽車駕駛人甲並未遵循交通法規，以過於接近的距離超越單車騎士乙，結果由於乙騎單車時的晃動，導致乙被捲入輪下而死亡。法院嗣後的鑑定報告指出，因為乙飲酒在先，倘若甲以合法的超車間距經過乙身旁，乙也「有可能」因過度的搖晃而命喪輪下。
    </div>

    <!-- 小題導引原文 -->
    <div class="p-4 sm:p-5 rounded-2xl bg-indigo-50/70 dark:bg-indigo-950/30 border border-indigo-200 dark:border-indigo-900/40 text-xs sm:text-sm text-slate-700 dark:text-slate-300 space-y-3 text-justify">
      <div class="font-bold text-indigo-900 dark:text-indigo-200 flex items-center gap-1.5">
        <span>🧭</span>
        <span>【問題導引】原書解析：</span>
      </div>
      <p class="indent-6 leading-relaxed">
        甲違反交通規則超車，並在事實上導致乙車禍死亡的結果，且該結果與規範目的預設結果相同（以上審查從略）。惟若依鑑定報告假設甲保持合法間距，死亡結果仍然<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">「有可能會發生」</span>，此時正反意見分歧：
      </p>

      <!-- 兩大學說清晰對比卡片 -->
      <div class="space-y-2.5 pt-1">
        <!-- ㈠ 罪疑唯輕說（通說） -->
        <div class="p-3.5 rounded-xl bg-emerald-50/80 dark:bg-emerald-950/30 border border-emerald-300 dark:border-emerald-800/50 space-y-1">
          <div class="font-bold text-emerald-950 dark:text-emerald-300 text-xs flex items-center gap-1.5">
            <span>🌿</span>
            <span>㈠ 罪疑唯輕說（通說）：</span>
          </div>
          <p class="text-xs text-slate-700 dark:text-slate-200 leading-relaxed indent-4">
            當無法確認乙的死亡結果會否實現，應依據<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">罪疑唯輕原則作有利甲的認定</span>，亦即認定死亡結果依舊會發生，基於平等原則，評價上<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">客觀構成要件不該當</span>。
          </p>
        </div>

        <!-- ㈡ 風險升高說（少數說） -->
        <div class="p-3.5 rounded-xl bg-rose-50/80 dark:bg-rose-950/30 border border-rose-300 dark:border-rose-800/50 space-y-1">
          <div class="font-bold text-rose-950 dark:text-rose-300 text-xs flex items-center gap-1.5">
            <span>🚨</span>
            <span>㈡ 風險升高說（少數說）：</span>
          </div>
          <p class="text-xs text-slate-700 dark:text-slate-200 leading-relaxed indent-4">
            罪疑唯輕原則僅適用在事實流程發生不明，若是假設流程發生不明，並無適用餘地。此情形不考慮合法替代行為，結論是<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">客觀構成要件該當</span>。
          </p>
        </div>
      </div>
    </div>

    <!-- 五位一體法學劇院：單欄垂直堆疊 (Strict Vertical Stacking) -->
    <div class="space-y-4 pt-1 font-serif">
      
      <!-- 1. ⚔️ 原被告/檢控辯護法庭正面言詞辯論 -->
      <div class="p-5 rounded-2xl bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white space-y-4 shadow-sm border border-indigo-800/40">
        <div class="flex items-center justify-between border-b border-indigo-800/60 pb-2">
          <div class="flex items-center gap-2">
            <span class="text-base">⚔️</span>
            <span class="font-bold text-xs sm:text-sm text-indigo-200">法庭言詞攻防對決</span>
          </div>
          <span class="text-[10px] font-mono px-2 py-0.5 rounded-full bg-indigo-500/30 text-indigo-200 border border-indigo-400/30">
            #合法替代行為爭鋒
          </span>
        </div>

        <div class="space-y-3 text-xs sm:text-sm leading-relaxed">
          <!-- 控方赤狐女檢察官 (主張少數說：風險升高論) -->
          <div class="flex items-start gap-3 p-3 rounded-xl bg-slate-800/60 border border-rose-500/30">
            <div class="w-10 h-10 rounded-full overflow-hidden shrink-0 border border-rose-400 shadow-xs">
              <img src="images/prosecutor_fox.jpg" alt="公訴檢察官赤狐女律師" class="w-full h-full object-cover" style="object-position: center 20%; transform: scale(1.35);">
            </div>
            <div class="flex-1 space-y-1">
              <div class="font-bold text-rose-300 text-xs">公訴檢察官 赤狐女律師：</div>
              <p class="text-slate-200 text-justify">
                「被告甲未保持法規規定之安全間距，違規貼近超車，客觀上顯著升高了乙被捲入輪下的致死風險！『罪疑唯輕原則』只管真實發生的客觀事實，不能拿未發生的『假設幻影』來替被告脫罪！只要被告違規升高了風險，就該當過失致死罪！」
              </p>
            </div>
          </div>

          <!-- 辯方金毛首席大律師 (主張通說：罪疑唯輕與平等原則) -->
          <div class="flex items-start gap-3 p-3 rounded-xl bg-slate-800/60 border border-amber-500/30">
            <div class="w-10 h-10 rounded-full overflow-hidden shrink-0 border border-amber-400 shadow-xs">
              <img src="images/golden_case_attorney.jpg" alt="金毛首席辯護大律師" class="w-full h-full object-cover" style="object-position: center 20%; transform: scale(1.35);">
            </div>
            <div class="flex-1 space-y-1">
              <div class="font-bold text-amber-300 text-xs">辯護人 金毛首席大律師：</div>
              <p class="text-slate-200 text-justify">
                「反對檢方論點！鑑定報告載明乙酒醉晃動，縱使甲保持合法距離，乙仍然『極可能』晃倒命喪輪下。刑法處罰的是『因違法行為而招致的結果』，既然合法替代行為下結果仍可能發生，依據憲法最高位階之<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">罪疑唯輕原則與平等原則</span>，疑點利益一律歸於被告，應認定客觀構成要件不該當！」
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- 2. 🐾 柴柴法學教授 • 白話生活大解碼 -->
      <div class="p-5 rounded-2xl bg-amber-50/80 dark:bg-[#18181b] border-l-4 border-l-amber-500 border border-amber-200/80 dark:border-white/10 space-y-3">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-xl overflow-hidden shrink-0 border-2 border-amber-400 shadow-xs">
            <img src="images/shiba_law_professor.jpg" alt="柴柴法學教授" class="w-full h-full object-cover" style="object-position: center 20%; transform: scale(1.38);">
          </div>
          <div>
            <div class="font-black text-amber-950 dark:text-amber-200 text-xs sm:text-sm">🐾 柴柴法學教授 • 白話生活大解碼</div>
            <div class="text-[10px] text-amber-700 dark:text-amber-400 font-mono">Prof. Shiba • Daily Life Decoding</div>
          </div>
        </div>

        <div class="text-xs sm:text-sm text-slate-700 dark:text-slate-200 space-y-2 leading-relaxed text-justify">
          <p class="indent-6">
            很多同學讀到「合法替代行為」容易頭昏，柴柴老師用一句話點醒大家：
          </p>
          <p class="indent-6">
            <span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">「如果我守法，悲劇也注定發生，那悲劇就不能怪我違法！」</span>
          </p>
          <p class="indent-6">
            比如皮革工廠案，就算甲花大錢消毒，那種怪菌當時科技也殺不死，女工依然會感染；動手術時醫生就算做了止血，病人天生血小板不全也必定血崩死亡。在這種情況下，法律把死因怪在老闆和醫生頭上就違背了「等者等之」的平等原則！
          </p>
          <p class="indent-6">
            而在單車騎士超車案，差別只在於「守法會不會死不確定」，這時通說祭出刑事訴訟的神盾——<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">罪疑唯輕（In dubio pro reo）</span>，既然無法百分之百肯定守法就不會死，就要推定即使守法也一樣會死，進而推定客觀構成要件不該當！
          </p>
        </div>
      </div>

      <!-- 3. ⚖️ 金毛大律師 • 法庭攻防點評 (單欄堆疊) -->
      <div class="p-5 rounded-2xl bg-blue-50/80 dark:bg-[#151c2d] border-l-4 border-l-blue-600 border border-blue-200/80 dark:border-blue-900/40 space-y-3">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-xl overflow-hidden shrink-0 border-2 border-blue-400 shadow-xs">
            <img src="images/golden_case_attorney.jpg" alt="金毛首席辯護大律師" class="w-full h-full object-cover" style="object-position: center 20%; transform: scale(1.35);">
          </div>
          <div>
            <div class="font-black text-blue-950 dark:text-blue-200 text-xs sm:text-sm">⚖️ 金毛大律師 • 法庭攻防點評</div>
            <div class="text-[10px] text-blue-700 dark:text-blue-400 font-mono">Counselor Golden • Litigation Strategy</div>
          </div>
        </div>

        <div class="text-xs sm:text-sm text-slate-700 dark:text-slate-200 space-y-2 leading-relaxed text-justify">
          <p class="indent-6">
            辯護實務上，面對交通過失致死或醫療過失案件，「合法替代行為」是我們翻轉戰局的大絕招！
          </p>
          <p class="indent-6">
            只要法醫鑑定或交通事故覆議鑑定中出現「縱依規定處置，亦無法避免死亡結果」或「被害人自身體質／嚴重酒醉即使合法間距亦可能摔倒」之文字，辯護人必須立刻援引司律通說與平等原則，力主排除客觀構成要件該當，斬斷檢方之過失致死既遂指控！
          </p>
        </div>
      </div>

      <!-- 4. 🛡️ 德牧法規巡查官 • 法規雷達查核 (單欄堆疊) -->
      <div class="p-5 rounded-2xl bg-emerald-50/80 dark:bg-[#13221c] border-l-4 border-l-emerald-600 border border-emerald-200/80 dark:border-emerald-900/40 space-y-3">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-xl overflow-hidden shrink-0 border-2 border-emerald-400 shadow-xs">
            <img src="images/shepherd_law_inspector.jpg" alt="德牧法規巡查官" class="w-full h-full object-cover" style="object-position: center 15%; transform: scale(1.4);">
          </div>
          <div>
            <div class="font-black text-emerald-950 dark:text-emerald-200 text-xs sm:text-sm">🛡️ 德牧法規巡查官 • 法規雷達查核</div>
            <div class="text-[10px] text-emerald-700 dark:text-emerald-400 font-mono">Inspector Shepherd • Statutory Verification</div>
          </div>
        </div>

        <div class="text-xs sm:text-sm text-slate-700 dark:text-slate-200 space-y-2 leading-relaxed text-justify">
          <p class="indent-6">
            巡查刑法第 276 條（過失致死罪）及過失犯客觀歸責體系：
          </p>
          <p class="indent-6">
            【裁判要旨查核】：我國最高法院多數判決嚴格要求過失與死亡結果間須具「相當因果關係」，若結果之發生係因被害人自身特殊體質或不可抗力，縱行為人未遵守常規亦不致加重或改變該結果者，實務多直接認定「無相當因果關係」判決無罪。學理上客觀歸責理論將此問題精準定性為「合法替代行為阻卻客觀構成要件該當」，兩者在結論上具有高度一致性！
          </p>
        </div>
      </div>

      <!-- 5. 👨‍⚖️ 邊牧首席審判長 • 終審裁決一槌定音 -->
      <div class="p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-slate-900 via-[#101426] to-slate-950 border-2 border-amber-400/40 text-white space-y-3 shadow-md">
        <div class="flex items-center justify-between border-b border-amber-400/30 pb-2">
          <div class="flex items-center gap-2">
            <div class="w-9 h-9 rounded-xl overflow-hidden shrink-0 border border-amber-300">
              <img src="images/border_collie_chief_judge.jpg" alt="邊牧首席審判長" class="w-full h-full object-cover" style="object-position: center 25%; transform: scale(1.35);">
            </div>
            <span class="font-black text-amber-300 text-xs sm:text-sm">👨‍⚖️ 邊牧首席審判長 • 終審裁定一槌定音</span>
          </div>
          <span class="text-[10px] font-mono px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-400/30">
            #法槌一敲誰與爭鋒
          </span>
        </div>

        <div class="space-y-2 text-xs sm:text-sm text-slate-200 leading-relaxed text-justify">
          <p class="indent-6">
            🔨 <strong>【實體法定讞】</strong>：合法替代行為為客觀構成要件審查之極度例外。事實上雖具因果與歸責，惟假設有效合法行為結果依舊發生者，基於平等原則評價上客觀構成要件不該當。當假設流程發生不明（如單車騎士案），依通說「罪疑唯輕原則」作有利被告認定，客觀構成要件不該當！
          </p>
          <p class="indent-6">
            💡 <strong>【國考答題定錨】</strong>：考生在作答案例 2-27 時，客觀構成要件務必分為：㈠ 肯定說（風險升高論，少數說：罪疑唯輕不及於假設流程，該當過失致死）；㈡ 否定說（罪疑唯輕說，通說：疑點利益歸於被告，阻卻客觀構成要件）；㈢ 結論採通說罪疑唯輕論，評價上不該當構成要件！
          </p>

          <!-- 2026 最新法條動態備註 -->
          <div class="p-3 rounded-xl bg-slate-800/90 border border-amber-400/30 space-y-1 text-xs">
            <div class="font-bold text-amber-300 flex items-center gap-1.5">
              <span>📅</span>
              <span>2026 最新法條動態備註：</span>
            </div>
            <p class="text-slate-300 leading-relaxed">
              刑法第 276 條（過失致死罪）至 2026 年維持現行刑度施行。近年司法官與律師二試命題對於過失犯之「結果迴避可能性（合法替代行為）」檢驗考得極為細緻，特別在醫療糾紛、工安意外與重大車禍案例中，考生切記務必區分真實流程之該當性與評價上之不該當性，精準展現法理深度！
            </p>
          </div>
        </div>
      </div>

    </div>
  </section>

  <!-- ==================== 底部前後單元導航條 ==================== -->
  <div class="flex items-center justify-between p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-indigo-50/80 via-white to-blue-50/80 dark:from-[#121827] dark:to-[#162035] border border-indigo-200/80 dark:border-indigo-900/40 shadow-xs flex-wrap gap-3 font-serif">
    <button onclick="switchView('part2-ch2-special1')" class="px-4 py-2 rounded-xl bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 font-bold text-xs flex items-center gap-1.5 border border-slate-200 dark:border-slate-700 cursor-pointer">
      <span>← 上一單元：第二篇 第二章 專題研究一 被害人與第三人介入</span>
    </button>
    <div class="flex items-center gap-2 flex-wrap">
      <button onclick="switchView('cover')" class="px-4 py-2 rounded-xl bg-amber-50 dark:bg-amber-950/40 text-amber-800 dark:text-amber-200 hover:bg-amber-100 dark:hover:bg-amber-900/50 font-bold text-xs flex items-center gap-1.5 border border-amber-300 dark:border-amber-700/60 cursor-pointer">
        <span>🏠 書籍首頁</span>
      </button>
      <button onclick="switchView('part2')" class="px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 font-bold text-xs flex items-center gap-1.5 transition-all shadow-xs cursor-pointer">
        <span>第二篇導讀</span>
      </button>
    </div>
  </div>

</div>
`;
