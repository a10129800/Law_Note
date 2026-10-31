// =========================================================================
// 第二篇 故意既遂犯的構成要件該當性
// 第二章 客觀構成要件該當性・第二節 構成要件結果歸責 (教材第 4-13 ～ 4-19 頁 全節完結)
// 嚴格依據陳奕廷律師《刑法總則【圖說系列】》原書 1:1 忠實復刻
// 憲政遵循：AGENTS.md (純紅底線、單欄垂直堆疊、犬系四大天王、Zero-CORS、2026法條備註)
// =========================================================================

window.APP_VIEWS = window.APP_VIEWS || {};

window.APP_VIEWS['viewPart2Ch2Sec2'] = `
<div id="viewPart2Ch2Sec2" class="fade-enter space-y-8 max-w-4xl mx-auto">

  <!-- ==================== 頁首徽章與大標題 (1:1 復刻原書 4-13) ==================== -->
  <header class="text-center space-y-3 pt-2">
    <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/80 dark:bg-blue-900/40 text-blue-800 dark:text-blue-300 text-xs font-mono font-bold tracking-wider uppercase border border-blue-200 dark:border-blue-800">
      <span>第二篇 • 故意既遂犯構成要件</span>
      <span>•</span>
      <span>第二章 第二節</span>
      <span>•</span>
      <span>p. 4-13～4-19</span>
    </div>
    
    <div class="flex items-center justify-center gap-3">
      <span class="inline-flex items-center justify-center w-8 h-8 rounded-full border-2 border-slate-700 dark:border-slate-300 font-serif font-black text-slate-800 dark:text-slate-200 text-base">第</span>
      <span class="inline-flex items-center justify-center w-8 h-8 rounded-full border-2 border-slate-700 dark:border-slate-300 font-serif font-black text-slate-800 dark:text-slate-200 text-base">二</span>
      <span class="inline-flex items-center justify-center w-8 h-8 rounded-full border-2 border-slate-700 dark:border-slate-300 font-serif font-black text-slate-800 dark:text-slate-200 text-base">章</span>
    </div>

    <h1 class="text-2xl sm:text-3xl lg:text-4xl font-serif font-black text-slate-900 dark:text-white tracking-tight">
      客觀構成要件該當性
    </h1>

    <div class="flex items-center justify-center gap-2 pt-1">
      <div class="h-0.5 w-12 bg-blue-500/60 rounded-full"></div>
      <h2 class="text-lg sm:text-xl font-serif font-bold text-blue-700 dark:text-blue-400">
        第二節 構成要件結果歸責
      </h2>
      <div class="h-0.5 w-12 bg-blue-500/60 rounded-full"></div>
    </div>
  </header>

  <!-- ==================== 前言與觀察時點 (4-13) ==================== -->
  <section id="sec-p2ch2s2-intro" class="scroll-mt-24 p-6 sm:p-7 rounded-3xl bg-white dark:bg-[#121827] border border-slate-200/90 dark:border-white/10 shadow-sm space-y-4 font-serif">
    <div class="flex items-center gap-2 text-xs font-mono text-blue-600 dark:text-blue-400 font-bold uppercase tracking-wider">
      <span>📖 核心概念</span>
      <span>•</span>
      <span>風險實現檢驗與事後觀察時點</span>
    </div>

    <p class="text-sm sm:text-base text-slate-700 dark:text-slate-200 leading-relaxed text-justify indent-8">
      既然行為人朝「實現該罪的方向」製造了「不容許的風險」（＝構成要件行為），那麼結果歸責階層便要探討<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">「此不容許風險有無實現？」</span>，若有實現，該結果即可歸責於行為人，而滿足構成要件結果歸責要素。
    </p>

    <p class="text-sm sm:text-base text-slate-700 dark:text-slate-200 leading-relaxed text-justify indent-8">
      由於結果歸責關注的是「已發生的客觀結果」，因此不同於行為階層採取事前說，本階層<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">只能採取事後說</span>。客觀歸責理論將結果歸責分成兩步驟：第一步為「事實因果審查（條件理論）」，第二步為「規範目的審查」。
    </p>

    <div class="p-4 rounded-2xl bg-blue-50/80 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-900/40 text-xs sm:text-sm text-blue-900 dark:text-blue-200 space-y-1">
      <div class="font-bold flex items-center gap-1.5">
        <span>🧭</span>
        <span>結果歸責兩大審查階梯：</span>
      </div>
      <ol class="list-decimal list-inside space-y-1 pl-1 text-slate-700 dark:text-slate-300">
        <li><strong>壹、事實因果審查</strong>：以條件理論（等價理論）確認行為與結果間具備客觀因果連結（-P → -Q）。</li>
        <li><strong>貳、規範目的審查</strong>：比對規範預設防範之結果與具體發生之結果，過濾風險失效、風險變種與規範特殊考量。</li>
      </ol>
    </div>
  </section>

  <!-- ==================== 壹、事實因果審查 (4-13 ～ 4-16) ==================== -->
  <section id="sec-p2ch2s2-causation" class="scroll-mt-24 space-y-6 font-serif">
    
    <div class="flex items-center gap-3 border-b border-slate-200 dark:border-slate-800 pb-2">
      <span class="px-2.5 py-1 rounded-lg bg-blue-600 text-white font-mono text-xs font-bold">壹</span>
      <h3 class="text-xl sm:text-2xl font-serif font-black text-slate-900 dark:text-white">
        事實因果審查（條件理論／等價理論）
      </h3>
    </div>

    <!-- 條件理論核心公式 -->
    <div class="p-6 rounded-3xl bg-white dark:bg-[#121827] border border-slate-200/90 dark:border-white/10 shadow-sm space-y-4">
      <div class="text-xs font-mono text-blue-600 dark:text-blue-400 font-bold uppercase tracking-wider">
        📐 條件公式（Condition Sine Qua Non）
      </div>
      
      <div class="p-4 sm:p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border-2 border-slate-300 dark:border-slate-700 text-center space-y-2">
        <div class="text-base sm:text-lg font-black text-slate-900 dark:text-white tracking-wide">
          「若無前行為，即無後結果者，則前行為即為後結果之條件。」
        </div>
        <div class="text-xs sm:text-sm font-mono text-blue-600 dark:text-blue-400 font-bold">
          公式代號：－Ｐ → －Ｑ （若非Ｐ則非Ｑ）
        </div>
      </div>

      <p class="text-sm sm:text-base text-slate-700 dark:text-slate-200 leading-relaxed text-justify indent-8">
        依此公式，只要該行為是造成結果不可想像其不存在的條件，即具備事實因果關係。在條件理論之下，<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">所有條件皆具備等價的因果力</span>，不區分主因、次因或遠因，因此在學理上又稱為「等價理論」。
      </p>
    </div>

    <!-- 案例 2-8【醫院案＝間接因果關係】 (4-13) -->
    <div id="case-2-8-hospital" class="scroll-mt-24 rounded-3xl bg-white dark:bg-[#121827] border-l-8 border-l-blue-600 border border-slate-200/90 dark:border-white/10 shadow-sm p-6 sm:p-7 space-y-4">
      <div class="flex items-center justify-between flex-wrap gap-2">
        <div class="flex items-center gap-2">
          <span class="px-2.5 py-0.5 rounded-full bg-blue-100 dark:bg-blue-950 text-blue-800 dark:text-blue-300 text-xs font-mono font-bold">案例 2-8</span>
          <h4 class="text-base sm:text-lg font-bold text-slate-900 dark:text-white">【醫院案＝間接因果關係】</h4>
        </div>
        <span class="text-xs font-mono text-slate-400">教材 p. 4-13</span>
      </div>

      <div class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/40 text-sm leading-relaxed text-slate-700 dark:text-slate-200 text-justify">
        <strong>【案情回顧】</strong>：甲開槍射擊乙之非致命部位，乙送醫急救，因醫師丙在手術過程中發生嚴重醫療疏失，導致乙失血過多休克死亡。甲之開槍射擊行為與乙之死亡結果間，有無事實因果關係？
      </div>

      <div class="p-4 rounded-2xl bg-blue-50/60 dark:bg-blue-950/30 border border-blue-200/60 dark:border-blue-900/40 space-y-2 text-sm">
        <div class="font-bold text-blue-900 dark:text-blue-200">🔍 解析精要：</div>
        <p class="leading-relaxed text-slate-700 dark:text-slate-200 text-justify indent-8">
          甲開槍雖未直接致乙於死地，但若無甲開槍射擊之非致命傷害，乙即毋須送醫急救，更不致在醫院中遭受醫師丙之醫療疏失而死亡。因此，按照條件理論（－Ｐ → －Ｑ），甲之開槍行為與乙之死亡結果間，仍具備不可想像其不存在的條件關係，此即學理上所謂的<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">「間接因果關係」</span>。
        </p>
      </div>

      <!-- 原書流程圖復刻：間接因果關係 (4-13) -->
      <div class="p-4 rounded-2xl bg-slate-50/80 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 flex flex-col items-center">
        <div class="text-xs font-mono text-slate-500 dark:text-slate-400 mb-2 font-bold">▲ 案例 2-8 間接因果關係流程圖（教材第 4-13 頁 原書圖解）</div>
        <div class="w-full max-w-lg py-2 select-none">
          <svg viewBox="0 0 520 100" class="w-full h-auto block" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <marker id="arrow-c28" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 1.5 L 10 5 L 0 8.5 z" fill="#3B82F6" />
              </marker>
            </defs>
            <!-- 節點 1: 甲行為 -->
            <rect x="10" y="25" width="100" height="50" rx="12" class="fill-blue-50 dark:fill-blue-950/70 stroke-blue-500" stroke-width="2"/>
            <text x="60" y="55" text-anchor="middle" class="fill-blue-900 dark:fill-blue-200 text-xs font-bold font-sans">甲開槍殺傷</text>

            <line x1="110" y1="50" x2="145" y2="50" stroke="#3B82F6" stroke-width="2" marker-end="url(#arrow-c28)"/>

            <!-- 節點 2: 乙送醫 -->
            <rect x="150" y="25" width="95" height="50" rx="12" class="fill-slate-100 dark:fill-slate-800 stroke-slate-400" stroke-width="1.5"/>
            <text x="197.5" y="55" text-anchor="middle" class="fill-slate-800 dark:fill-slate-200 text-xs font-medium font-sans">乙送醫急救</text>

            <line x1="245" y1="50" x2="280" y2="50" stroke="#3B82F6" stroke-width="2" marker-end="url(#arrow-c28)"/>

            <!-- 節點 3: 醫療疏失 -->
            <rect x="285" y="25" width="105" height="50" rx="12" class="fill-amber-50 dark:fill-amber-950/70 stroke-amber-500" stroke-width="1.5"/>
            <text x="337.5" y="47" text-anchor="middle" class="fill-amber-900 dark:fill-amber-200 text-[11px] font-bold font-sans">醫師丙介入</text>
            <text x="337.5" y="63" text-anchor="middle" class="fill-amber-900 dark:fill-amber-200 text-[11px] font-bold font-sans">醫療過失疏失</text>

            <line x1="390" y1="50" x2="425" y2="50" stroke="#3B82F6" stroke-width="2" marker-end="url(#arrow-c28)"/>

            <!-- 節點 4: 死亡結果 -->
            <rect x="430" y="25" width="80" height="50" rx="12" class="fill-rose-50 dark:fill-rose-950/70 stroke-rose-500" stroke-width="2"/>
            <text x="470" y="55" text-anchor="middle" class="fill-rose-900 dark:fill-rose-200 text-xs font-bold font-sans">乙死亡</text>
          </svg>
        </div>
      </div>
    </div>

    <!-- 案例 2-9【累積因果關係】 (4-13) -->
    <div id="case-2-9-cumulative" class="scroll-mt-24 rounded-3xl bg-white dark:bg-[#121827] border-l-8 border-l-purple-600 border border-slate-200/90 dark:border-white/10 shadow-sm p-6 sm:p-7 space-y-4">
      <div class="flex items-center justify-between flex-wrap gap-2">
        <div class="flex items-center gap-2">
          <span class="px-2.5 py-0.5 rounded-full bg-purple-100 dark:bg-purple-950 text-purple-800 dark:text-purple-300 text-xs font-mono font-bold">案例 2-9</span>
          <h4 class="text-base sm:text-lg font-bold text-slate-900 dark:text-white">【累積因果關係】</h4>
        </div>
        <span class="text-xs font-mono text-slate-400">教材 p. 4-13</span>
      </div>

      <div class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/40 text-sm leading-relaxed text-slate-700 dark:text-slate-200 text-justify">
        <strong>【案情回顧】</strong>：甲、乙二人互不相謀，各自向丙之咖啡中投入微量毒藥。單獨一人的劑量均不足以致死，但兩人毒藥在丙體內累積發作，致丙毒發身亡。甲、乙各別之行為與丙之死亡結果有無因果關係？
      </div>

      <div class="p-4 rounded-2xl bg-purple-50/60 dark:bg-purple-950/30 border border-purple-200/60 dark:border-purple-900/40 space-y-2 text-sm">
        <div class="font-bold text-purple-900 dark:text-purple-200">🔍 解析精要：</div>
        <p class="leading-relaxed text-slate-700 dark:text-slate-200 text-justify indent-8">
          若無甲下毒，丙體內毒素不足致死量，丙即不致死亡；若無乙下毒，丙亦不致死亡。因此，甲、乙二人各自之下毒行為，與丙之死亡結果間，均具備「若無前行為即無後結果」的不可想像其不存在之條件關係，此即<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">「累積因果關係」</span>，甲、乙皆具備事實因果關係！
        </p>
      </div>
    </div>

    <!-- 條件理論三大規則 (4-14 ～ 4-15) -->
    <div id="sec-p2ch2s2-rules" class="scroll-mt-24 p-6 sm:p-7 rounded-3xl bg-white dark:bg-[#121827] border border-slate-200/90 dark:border-white/10 shadow-sm space-y-6">
      <div class="border-b border-slate-200 dark:border-slate-800 pb-2">
        <h4 class="text-lg sm:text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
          <span>📜</span>
          <span>條件理論的三大規則（教材第 4-14 ～ 4-15 頁）</span>
        </h4>
      </div>

      <!-- 規則一 -->
      <div class="space-y-3">
        <div class="p-3 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-300 dark:border-amber-800 text-amber-900 dark:text-amber-200 font-bold text-sm">
          📌 規則一：「未發生的假設結果」不納入討論範圍
        </div>
        <p class="text-sm text-slate-700 dark:text-slate-300 leading-relaxed text-justify indent-8">
          條件理論審查時，只討論實際上「已經發生的具體結果」，縱使客觀上有其他必然發生的假設事實，亦不得引為扣除條件因果之理由。
        </p>

        <!-- 案例 2-10【假設因果關係】 (4-14) -->
        <div id="case-2-10-hypothetical" class="scroll-mt-24 rounded-2xl bg-slate-50 dark:bg-slate-800/50 p-5 space-y-3 border border-slate-200 dark:border-slate-700">
          <div class="flex items-center justify-between">
            <span class="font-bold text-slate-900 dark:text-white text-sm">案例 2-10【假設因果關係】（墜機案）</span>
            <span class="text-xs font-mono text-slate-400">p. 4-14</span>
          </div>
          <p class="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed text-justify">
            <strong>【案情】</strong>：甲持刀將乙砍死。事後查明，乙原訂搭乘一小時後的班機出國，而該班機在起飛後不幸墜毀，機上乘客無一生還。若甲未砍死乙，乙搭上飛機同樣會死。甲抗辯「縱使我不砍乙，乙搭機也會死，我的行為與死亡無因果關係」，此抗辯是否有理？
          </p>
          <p class="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed text-justify indent-8">
            <strong>【解析】</strong>：無理由！條件理論只鎖定「實際發生的具體結果」（乙被刀砍死）。乙搭機墜機罹難乃「未發生的假設事實」，依規則一<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">嚴禁納入討論範圍</span>。因此，甲之砍殺行為與乙之死亡結果間，因果關係不受任何影響，仍具備事實因果關係！
          </p>
          
          <!-- SVG 圖解：假設因果關係 (4-14) -->
          <div class="p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 flex flex-col items-center">
            <div class="text-[11px] font-mono text-slate-500 font-bold mb-1">▲ 假設因果關係圖解（墜機案）</div>
            <svg viewBox="0 0 460 90" class="w-full max-w-md h-auto block" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <marker id="arrow-c210" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                  <path d="M 0 1.5 L 10 5 L 0 8.5 z" fill="#3B82F6" />
                </marker>
              </defs>
              <rect x="10" y="10" width="110" height="32" rx="8" class="fill-blue-50 dark:fill-blue-950/70 stroke-blue-500" stroke-width="1.5"/>
              <text x="65" y="31" text-anchor="middle" class="fill-blue-900 dark:fill-blue-200 text-xs font-bold font-sans">甲持刀砍殺</text>

              <line x1="120" y1="26" x2="180" y2="26" stroke="#3B82F6" stroke-width="2" marker-end="url(#arrow-c210)"/>

              <rect x="185" y="10" width="130" height="32" rx="8" class="fill-rose-50 dark:fill-rose-950/70 stroke-rose-500" stroke-width="1.5"/>
              <text x="250" y="31" text-anchor="middle" class="fill-rose-900 dark:fill-rose-200 text-xs font-bold font-sans">乙失血過多死亡 (✔)</text>

              <!-- 虛線假設分支 -->
              <path d="M 65 42 L 65 70 L 180 70" fill="none" stroke="#94A3B8" stroke-width="1.5" stroke-dasharray="4 2" marker-end="url(#arrow-c210)"/>
              <rect x="185" y="54" width="220" height="32" rx="8" class="fill-slate-100 dark:fill-slate-800 stroke-slate-400 stroke-dasharray-4" stroke-width="1"/>
              <text x="295" y="74" text-anchor="middle" class="fill-slate-500 dark:fill-slate-400 text-[11px] font-sans">乙原訂班機墜毀罹難 (未發生，不考慮✖)</text>
            </svg>
          </div>
        </div>
      </div>

      <!-- 規則二 -->
      <div class="space-y-3 pt-2">
        <div class="p-3 rounded-xl bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-300 dark:border-indigo-800 text-indigo-900 dark:text-indigo-200 font-bold text-sm">
          📌 規則二：被討論的結果係「實際發生的具體結果」
        </div>
        <p class="text-sm text-slate-700 dark:text-slate-300 leading-relaxed text-justify indent-8">
          結果不能抽象化為一般的死亡，必須嚴格鎖定具體發生的時間、地點與死亡方式。若前行為之危險尚未實現前，已有後行為搶先獨立引發結果，則前行為之因果進程已被後行為「截斷超越」。
        </p>

        <!-- 案例 2-11【超越因果關係】 (4-15) -->
        <div id="case-2-11-superseding" class="scroll-mt-24 rounded-2xl bg-slate-50 dark:bg-slate-800/50 p-5 space-y-3 border border-slate-200 dark:border-slate-700">
          <div class="flex items-center justify-between">
            <span class="font-bold text-slate-900 dark:text-white text-sm">案例 2-11【超越因果關係】（下毒被槍殺案）</span>
            <span class="text-xs font-mono text-slate-400">p. 4-15</span>
          </div>
          <p class="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed text-justify">
            <strong>【案情】</strong>：甲意圖殺害乙，在乙之茶水中下毒，乙飲下毒茶後腹痛難耐，但毒性尚未達致死發作階段。此時仇家丙突然衝入，持槍對準乙心臟射擊，乙當場中槍斃命。甲之下毒行為與乙中槍死亡有無因果關係？
          </p>
          <p class="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed text-justify indent-8">
            <strong>【解析】</strong>：無因果關係！被討論的結果係「中槍死亡的具體結果」。若無甲下毒，乙仍會因丙開槍而於同一時間地點中槍死亡。甲之下毒因果進程被丙之槍擊<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">完全超越</span>（超越因果關係／中斷因果關係）。甲僅能論以殺人未遂罪，丙則成立殺人既遂罪！
          </p>

          <!-- SVG 圖解：超越因果關係 (4-15) -->
          <div class="p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 flex flex-col items-center">
            <div class="text-[11px] font-mono text-slate-500 font-bold mb-1">▲ 超越因果關係圖解（下毒被槍殺案）</div>
            <svg viewBox="0 0 460 90" class="w-full max-w-md h-auto block" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <marker id="arrow-c211" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                  <path d="M 0 1.5 L 10 5 L 0 8.5 z" fill="#7C3AED" />
                </marker>
              </defs>
              <rect x="10" y="10" width="90" height="32" rx="8" class="fill-purple-50 dark:fill-purple-950/70 stroke-purple-500" stroke-width="1.5"/>
              <text x="55" y="31" text-anchor="middle" class="fill-purple-900 dark:fill-purple-200 text-xs font-bold font-sans">甲下毒</text>

              <line x1="100" y1="26" x2="160" y2="26" stroke="#94A3B8" stroke-width="2" stroke-dasharray="3 3"/>
              <text x="130" y="20" text-anchor="middle" class="fill-rose-500 text-[10px] font-bold">被超越✖</text>

              <rect x="10" y="52" width="90" height="32" rx="8" class="fill-rose-50 dark:fill-rose-950/70 stroke-rose-500" stroke-width="1.5"/>
              <text x="55" y="73" text-anchor="middle" class="fill-rose-900 dark:fill-rose-200 text-xs font-bold font-sans">丙開槍</text>

              <line x1="100" y1="68" x2="190" y2="68" stroke="#7C3AED" stroke-width="2.5" marker-end="url(#arrow-c211)"/>

              <rect x="195" y="30" width="130" height="38" rx="10" class="fill-rose-100 dark:fill-rose-900/60 stroke-rose-600" stroke-width="2"/>
              <text x="260" y="54" text-anchor="middle" class="fill-rose-950 dark:fill-rose-100 text-xs font-black font-sans">乙中槍死亡 (既遂)</text>
            </svg>
          </div>
        </div>
      </div>

      <!-- 規則三 -->
      <div class="space-y-3 pt-2">
        <div class="p-3 rounded-xl bg-rose-50 dark:bg-rose-950/40 border border-rose-300 dark:border-rose-800 text-rose-900 dark:text-rose-200 font-bold text-sm">
          📌 規則三：「擇一因果關係」是條件理論的唯一例外
        </div>
        <p class="text-sm text-slate-700 dark:text-slate-300 leading-relaxed text-justify indent-8">
          若嚴格適用「－Ｐ → －Ｑ」公式，在數人各自製造足量致死條件時，將產生荒謬的兩免責任現象。為此，法學建立了條件理論的唯一修正例外。
        </p>

        <!-- 案例 2-12【擇一因果關係】 (4-15) -->
        <div id="case-2-12-alternative" class="scroll-mt-24 rounded-2xl bg-slate-50 dark:bg-slate-800/50 p-5 space-y-3 border border-slate-200 dark:border-slate-700">
          <div class="flex items-center justify-between">
            <span class="font-bold text-slate-900 dark:text-white text-sm">案例 2-12【擇一因果關係】（足量下毒案）</span>
            <span class="text-xs font-mono text-slate-400">p. 4-15</span>
          </div>
          <p class="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed text-justify">
            <strong>【案情】</strong>：甲、乙二人互不相謀，各自向丙之水杯中投入足量致死（致死量為 1 公克，甲下 2 公克、乙亦下 2 公克）的毒藥。丙飲用後毒發身亡。甲、乙二人是否均具備因果關係？
          </p>
          <p class="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed text-justify indent-8">
            <strong>【解析】</strong>：若死板套用條件公式：若無甲下毒，因乙下之 2 公克已足致死，丙仍會死亡（甲無因果）；反之若無乙下毒，因甲下之劑量亦足致死，丙亦會死亡（乙無因果），將導致兩個殺人犯都不用對死亡負責的離譜結論！
          </p>
          <div class="p-3 rounded-xl bg-amber-50 dark:bg-amber-950/30 border border-amber-300 dark:border-amber-700 text-xs sm:text-sm text-amber-900 dark:text-amber-200 font-bold">
            💡 條件理論唯一修正公式：<br>
            「數個互不相謀之行為，若各自均足以導致具體結果發生，則各該行為均為結果之條件。」故甲、乙兩人行為均與丙之死亡結果具有因果關係！
          </div>
        </div>
      </div>

    </div>

    <!-- 綜合實戰案例 2-13【南投夫婦毒殺案】 (4-16) -->
    <div id="case-2-13-nantou" class="scroll-mt-24 rounded-3xl bg-white dark:bg-[#121827] border-l-8 border-l-rose-500 border border-slate-200/90 dark:border-white/10 shadow-sm p-6 sm:p-7 space-y-5">
      <div class="flex items-center justify-between flex-wrap gap-2">
        <div class="flex items-center gap-2">
          <span class="px-2.5 py-0.5 rounded-full bg-rose-100 dark:bg-rose-950 text-rose-800 dark:text-rose-300 text-xs font-mono font-bold">案例 2-13</span>
          <h4 class="text-base sm:text-lg font-bold text-slate-900 dark:text-white">【南投夫婦毒殺案】（社會矚目重大真實案例改編）</h4>
        </div>
        <span class="text-xs font-mono text-slate-400">教材 p. 4-16</span>
      </div>

      <!-- 小題 (一) 催芽劑案 -->
      <div class="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700 space-y-3 text-sm">
        <div class="font-bold text-blue-700 dark:text-blue-300 flex items-center gap-2">
          <span>(一)</span>
          <span>催芽劑案（足量下毒嘔吐 vs 肉毒桿菌超越）</span>
        </div>
        <p class="leading-relaxed text-slate-700 dark:text-slate-200 text-justify">
          <strong>【案情】</strong>：甲女意圖殺害其夫乙，在乙之米酒中摻入致死量之劇毒農藥「催芽劑」。乙飲用後胃部劇烈絞痛引發劇烈嘔吐，將胃中催芽劑及酒液全數吐出，因而保住性命。數日後，乙因食用鄰居所贈受肉毒桿菌嚴重污染之竹筍包，引發急性肉毒桿菌中毒窒息死亡。甲對乙之死亡是否具因果關係？
        </p>
        <div class="p-3 rounded-xl bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-900/40 text-xs sm:text-sm text-slate-700 dark:text-slate-200 leading-relaxed text-justify indent-8">
          <strong>【法理剖析】</strong>：乙最終之死亡結果係由「肉毒桿菌中毒」所致。甲之催芽劑下毒雖已達致死量，但因嘔吐而未發生死亡結果，原下毒因果進程已被後續之肉毒桿菌中毒<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">完全超越（超越因果關係）</span>。甲之下毒與乙之死亡結果無因果關係，甲僅成立刑法第 271 條第 2 項之殺人未遂罪。
        </div>
      </div>

      <!-- 小題 (二) 肉毒桿菌案 -->
      <div class="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700 space-y-3 text-sm">
        <div class="font-bold text-purple-700 dark:text-purple-300 flex items-center gap-2">
          <span>(二)</span>
          <span>肉毒桿菌案（未達致死量毒素 vs 特殊體質累積）</span>
        </div>
        <p class="leading-relaxed text-slate-700 dark:text-slate-200 text-justify">
          <strong>【案情】</strong>：甲、乙二人互不相謀，各自在丙之食物中滴入微量毒素，單獨劑量均不足以致死。然而丙本身患有罕見肝臟解毒功能障礙（特殊體質），兩者之微量毒素與丙之特殊體質結合後，引發急性肝中毒死亡。甲、乙二人是否均具因果關係？
        </p>
        <div class="p-3 rounded-xl bg-purple-50 dark:bg-purple-950/30 border border-purple-200 dark:border-purple-900/40 text-xs sm:text-sm text-slate-700 dark:text-slate-200 leading-relaxed text-justify indent-8">
          <strong>【法理剖析】</strong>：若無甲之微量毒素，丙之肝臟尚能代償運作而不致死亡；若無乙之毒素亦然。本題屬於典型之<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">「累積因果關係＋被害人特殊體質」</span>。依條件理論，各該行為均屬丙死亡不可想像其不存在之條件，甲、乙兩人行為與丙之死亡結果均具備事實因果關係！
        </div>
      </div>
    </div>

  </section>

  <!-- ==================== 貳、規範目的審查 (4-16 ～ 4-19) ==================== -->
  <section id="sec-p2ch2s2-normative" class="scroll-mt-24 space-y-6 font-serif">
    
    <div class="flex items-center gap-3 border-b border-slate-200 dark:border-slate-800 pb-2">
      <span class="px-2.5 py-1 rounded-lg bg-emerald-600 text-white font-mono text-xs font-bold">貳</span>
      <h3 class="text-xl sm:text-2xl font-serif font-black text-slate-900 dark:text-white">
        規範目的審查（客觀歸責核心核心檢驗）
      </h3>
    </div>

    <!-- 概念說明與腳註引用 -->
    <div class="p-6 sm:p-7 rounded-3xl bg-white dark:bg-[#121827] border border-slate-200/90 dark:border-white/10 shadow-sm space-y-4">
      <div class="text-xs font-mono text-emerald-600 dark:text-emerald-400 font-bold uppercase tracking-wider">
        🎯 審查原理與文獻基礎
      </div>

      <p class="text-sm sm:text-base text-slate-700 dark:text-slate-200 leading-relaxed text-justify indent-8">
        通過條件理論事實因果審查後，僅代表具備最基本的因果關聯，但條件理論門檻極低（分娩案亦具因果），絕不能直接歸責。此時必須進入第二步：<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">規範目的審查</span>。
      </p>

      <p class="text-sm sm:text-base text-slate-700 dark:text-slate-200 leading-relaxed text-justify indent-8">
        規範目的審查之核心在於：行為人所違反的禁制規範，其目的究竟在於「防範何種結果的發生」？我們必須將<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">「規範目的所預設的結果」</span>與<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">「案例當中實際發生的結果」</span>進行相互比較：
      </p>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm font-sans pt-1">
        <div class="p-3.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-800 space-y-1">
          <div class="font-bold text-emerald-800 dark:text-emerald-200">✔ 兩者相同 ➔ 結果可歸責</div>
          <p class="text-slate-600 dark:text-slate-300 text-xs">具體結果恰好落在法規範所欲防範的射程範圍內，風險實現，成立既遂！</p>
        </div>
        <div class="p-3.5 rounded-xl bg-rose-50 dark:bg-rose-950/40 border border-rose-300 dark:border-rose-800 space-y-1">
          <div class="font-bold text-rose-800 dark:text-rose-200">✖ 兩者相異 ➔ 結果不可歸責</div>
          <p class="text-slate-600 dark:text-slate-300 text-xs">具體結果非原規範所欲避免之危險，風險未實現，排除結果歸責！</p>
        </div>
      </div>

      <!-- 腳註 3 Frisch / 許恒達 文獻標註 -->
      <div class="text-[11px] font-mono text-slate-500 dark:text-slate-400 pt-2 border-t border-slate-100 dark:border-slate-800">
        ※ 腳註 3 參照：Wolfgang Frisch（蔡聖偉譯），客觀之結果歸責，法學新論第 32 期，p. 15～21；許恒達，客觀歸責與規範目的，政大法學評論第 121 期。
      </div>
    </div>

    <!-- ==================== 原書圖 5 復刻：規範目的審查架構圖 ==================== -->
    <div id="sec-p2ch2s2-chart" class="scroll-mt-24 p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#121827] border border-slate-200/90 dark:border-white/10 shadow-sm flex flex-col items-center space-y-4">
      <div class="flex items-center justify-between w-full border-b border-slate-200 dark:border-slate-800 pb-2">
        <span class="text-xs font-mono font-bold text-slate-500 uppercase">原書架構圖 1:1 復刻</span>
        <span class="text-xs font-mono font-bold px-2 py-0.5 rounded bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300">圖 5 規範目的審查</span>
      </div>

      <div class="w-full max-w-xl py-3 select-none" style="-webkit-user-drag: none; user-select: none;">
        <svg viewBox="0 0 540 240" class="w-full h-auto block drop-shadow-xs" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <marker id="arrow-norm" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 1.5 L 10 5 L 0 8.5 z" fill="#475569" />
            </marker>
            <marker id="arrow-dash" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 1.5 L 10 5 L 0 8.5 z" fill="#64748B" />
            </marker>
          </defs>

          <!-- 行為 (左側圓形) -->
          <circle cx="55" cy="85" r="32" class="fill-slate-50 dark:fill-slate-800 stroke-slate-500 dark:stroke-slate-400" stroke-width="2" />
          <text x="55" y="91" text-anchor="middle" class="fill-slate-900 dark:fill-white font-sans font-bold text-base">行為</text>

          <!-- 行為 ➔ 規範目的預設結果 (上方虛線箭頭) -->
          <path d="M 87 75 L 135 45" fill="none" stroke="#64748B" stroke-width="2" stroke-dasharray="4 2" marker-end="url(#arrow-dash)"/>

          <!-- 行為 ➔ 實際發生結果 (下方實線箭頭) -->
          <path d="M 87 95 L 135 125" fill="none" stroke="#475569" stroke-width="2.5" marker-end="url(#arrow-norm)"/>

          <!-- 節點 1: 規範目的所預設的結果 (上方方框) -->
          <rect x="140" y="20" width="135" height="52" rx="12" class="fill-slate-50 dark:fill-slate-800/90 stroke-slate-400 dark:stroke-slate-600" stroke-width="1.8" />
          <text x="207.5" y="43" text-anchor="middle" class="fill-slate-800 dark:fill-slate-100 font-sans font-bold text-xs">規範目的</text>
          <text x="207.5" y="60" text-anchor="middle" class="fill-slate-800 dark:fill-slate-100 font-sans font-bold text-xs">所預設的結果</text>

          <!-- 節點 2: 案例當中實際發生的結果 (下方方框) -->
          <rect x="140" y="100" width="135" height="52" rx="12" class="fill-slate-50 dark:fill-slate-800/90 stroke-slate-400 dark:stroke-slate-600" stroke-width="1.8" />
          <text x="207.5" y="123" text-anchor="middle" class="fill-slate-800 dark:fill-slate-100 font-sans font-bold text-xs">案例當中實際</text>
          <text x="207.5" y="140" text-anchor="middle" class="fill-slate-800 dark:fill-slate-100 font-sans font-bold text-xs">發生的結果</text>

          <!-- 匯流括號/雙箭頭 ➔ 相互比較 -->
          <path d="M 275 46 L 305 46 L 305 126 L 275 126" fill="none" stroke="#475569" stroke-width="2"/>
          <line x1="305" y1="86" x2="330" y2="86" stroke="#475569" stroke-width="2"/>
          <text x="360" y="90" text-anchor="middle" class="fill-slate-700 dark:text-slate-300 font-sans font-bold text-xs">相互比較</text>
          <line x1="390" y1="86" x2="415" y2="86" stroke="#475569" stroke-width="2" marker-end="url(#arrow-norm)"/>

          <!-- 右側裁決卡片：相同/相異 -->
          <rect x="420" y="55" width="110" height="62" rx="10" class="fill-white dark:fill-slate-900 stroke-slate-600 dark:stroke-slate-400" stroke-width="2" />
          <line x1="420" y1="86" x2="530" y2="86" stroke="#CBD5E1" stroke-width="1"/>
          
          <text x="475" y="75" text-anchor="middle" class="fill-emerald-600 dark:fill-emerald-400 font-sans font-bold text-xs">相同＝可歸責</text>
          <text x="475" y="105" text-anchor="middle" class="fill-rose-600 dark:fill-rose-400 font-sans font-bold text-xs">相異＝不可歸責</text>

          <!-- 下方雲狀思維泡泡：事後說 -->
          <path d="M 125 185 C 115 175, 135 160, 155 165 C 170 155, 205 155, 215 165 C 235 158, 265 165, 265 180 C 275 190, 270 215, 250 220 C 235 230, 185 232, 165 225 C 145 232, 120 220, 125 198 Z" 
                class="fill-slate-100 dark:fill-slate-800 stroke-slate-400 dark:stroke-slate-600" stroke-width="1.5" stroke-dasharray="3 2"/>
          <text x="195" y="188" text-anchor="middle" class="fill-slate-700 dark:fill-slate-300 font-sans font-medium text-[10.5px]">必須討論、探究</text>
          <text x="195" y="203" text-anchor="middle" class="fill-slate-700 dark:fill-slate-300 font-sans font-medium text-[10.5px]">實際上所發生的結果，</text>
          <text x="195" y="218" text-anchor="middle" class="fill-blue-600 dark:fill-blue-400 font-sans font-bold text-[10.5px]">因此只能採取事後說</text>
          
          <!-- 從雲狀泡泡指向實際結果的虛線 -->
          <line x1="195" y1="160" x2="195" y2="154" stroke="#64748B" stroke-width="1.5" stroke-dasharray="2 2" marker-end="url(#arrow-norm)"/>
        </svg>
      </div>

      <div class="text-xs font-mono text-slate-500 dark:text-slate-400 text-center">
        ▲ 規範目的審查流程圖（教材第 4-16 頁 原書圖解）
      </div>
    </div>

    <!-- 步驟一：審查有無發生風險失效？ (4-17) -->
    <div id="sec-p2ch2s2-step1" class="scroll-mt-24 space-y-4">
      <div class="p-4 rounded-2xl bg-slate-100 dark:bg-slate-800/60 border-l-4 border-l-blue-600">
        <h4 class="text-base sm:text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
          <span>🚦</span>
          <span>步驟一：審查有無發生「風險失效」？（教材第 4-17 頁）</span>
        </h4>
        <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-1">
          行為人所製造之不容許風險，是否在結果發生前已告終止或失效？
        </p>
      </div>

      <!-- 案例 2-14【闖紅燈續行500公尺案】 -->
      <div id="case-2-14-redlight" class="scroll-mt-24 rounded-3xl bg-white dark:bg-[#121827] border border-slate-200/90 dark:border-white/10 shadow-sm p-6 space-y-3">
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-2">
            <span class="px-2.5 py-0.5 rounded-full bg-blue-100 dark:bg-blue-950 text-blue-800 dark:text-blue-300 text-xs font-mono font-bold">案例 2-14</span>
            <span class="font-bold text-slate-900 dark:text-white text-sm sm:text-base">【闖紅燈續行500公尺撞人案】</span>
          </div>
          <span class="text-xs font-mono text-slate-400">p. 4-17</span>
        </div>
        <p class="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed text-justify">
          <strong>【案情】</strong>：甲駕車闖紅燈通過交岔路口，續行 500 公尺後，突然有一名違規行人乙自中央分隔島草叢衝出穿越馬路，甲煞車不及將乙撞擊致死。甲是否應負過失致死罪責？
        </p>
        <div class="p-3.5 rounded-2xl bg-blue-50/60 dark:bg-blue-950/30 border border-blue-200/60 dark:border-blue-900/40 text-xs sm:text-sm text-slate-700 dark:text-slate-200 leading-relaxed text-justify indent-8">
          <strong>【解析】</strong>：交通規範禁止闖紅燈之規範目的，在於防止「在交岔路口因闖紅燈與他車或橫越路口之行人碰撞」。甲闖紅燈之危險，於其安然通過該交岔路口後即已<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">「告一段落而失效」</span>。續行 500 公尺後之撞擊，與闖紅燈規範之防範目的無關，闖紅燈風險已失效，乙之死亡不可歸責於甲之闖紅燈行為！
        </div>
      </div>

      <!-- 案例 2-15【車禍斷腿拐杖斷裂跌倒案（後發損害）】 -->
      <div id="case-2-15-crutch" class="scroll-mt-24 rounded-3xl bg-white dark:bg-[#121827] border border-slate-200/90 dark:border-white/10 shadow-sm p-6 space-y-3">
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-2">
            <span class="px-2.5 py-0.5 rounded-full bg-blue-100 dark:bg-blue-950 text-blue-800 dark:text-blue-300 text-xs font-mono font-bold">案例 2-15</span>
            <span class="font-bold text-slate-900 dark:text-white text-sm sm:text-base">【拐杖瑕疵跌倒案＝後發損害】</span>
          </div>
          <span class="text-xs font-mono text-slate-400">p. 4-17</span>
        </div>
        <p class="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed text-justify">
          <strong>【案情】</strong>：甲駕車不慎撞傷乙，致乙右腿骨折。三個月後，乙傷勢逐漸痊癒並拄拐杖在公園散步復健，因該拐杖存在原廠製造瑕疵突然斷裂，乙重心不穩摔倒，頭部猛烈撞擊石階身亡。甲過失撞傷乙之行為，與乙三個月後之死亡結果能否歸責？
        </p>
        <div class="p-3.5 rounded-2xl bg-blue-50/60 dark:bg-blue-950/30 border border-blue-200/60 dark:border-blue-900/40 text-xs sm:text-sm text-slate-700 dark:text-slate-200 leading-relaxed text-justify indent-8">
          <strong>【解析】</strong>：交通安全規範禁止碰撞之防範目的，在於被害人身體遭受外力撞擊之直接損害。三個月後因拐杖製造瑕疵所生之二次後發損害，已<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">完全脫離原交通禁制規範之保護射程</span>，原車禍之風險已因傷勢受控而失效，死亡結果不可歸責於甲，甲僅成立過失傷害罪。
        </div>
      </div>

      <!-- 【作者叮嚀】脫離險境與參與理論之脫離 (4-17) -->
      <div class="p-5 rounded-2xl bg-amber-50/80 dark:bg-amber-950/30 border-2 border-amber-300/80 dark:border-amber-700/60 space-y-2 text-xs sm:text-sm">
        <div class="font-bold text-amber-900 dark:text-amber-200 flex items-center gap-2">
          <span>✍️</span>
          <span>【作者叮嚀】送醫脫離險境與參與理論之脫離（教材第 4-17 頁）</span>
        </div>
        <p class="text-slate-700 dark:text-slate-300 leading-relaxed text-justify indent-8">
          判斷風險是否失效，實務與學說常以被害人是否已經<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">「脫離險境」</span>為標準。例如傷者送達醫院經緊急救治後，生命跡象已經穩定，即代表原行為之致死風險已告終結；倘若此時醫院因突遭縱火或電線走火燒死傷者，原加害人之殺人或傷害行為即無從歸責死亡結果！此概念亦可與總則「共犯與參與理論之脫離」相呼應對照。
        </p>
      </div>
    </div>

    <!-- 步驟二：審查有無發生風險變種？ (4-18) -->
    <div id="sec-p2ch2s2-step2" class="scroll-mt-24 space-y-4">
      <div class="p-4 rounded-2xl bg-slate-100 dark:bg-slate-800/60 border-l-4 border-l-purple-600">
        <h4 class="text-base sm:text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
          <span>⚡</span>
          <span>步驟二：審查有無發生「風險變種」？（教材第 4-18 頁）</span>
        </h4>
        <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-1">
          所發生的結果是否屬於異常的因果進程或異常的損害型態？
        </p>
      </div>

      <!-- 案例 2-16【違規超車受驚心臟病發案】 -->
      <div id="case-2-16-overtaking" class="scroll-mt-24 rounded-3xl bg-white dark:bg-[#121827] border border-slate-200/90 dark:border-white/10 shadow-sm p-6 space-y-3">
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-2">
            <span class="px-2.5 py-0.5 rounded-full bg-purple-100 dark:bg-purple-950 text-purple-800 dark:text-purple-300 text-xs font-mono font-bold">案例 2-16</span>
            <span class="font-bold text-slate-900 dark:text-white text-sm sm:text-base">【違規超車受驚心臟病發案】</span>
          </div>
          <span class="text-xs font-mono text-slate-400">p. 4-18</span>
        </div>
        <p class="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed text-justify">
          <strong>【案情】</strong>：甲在山區道路違規跨越雙黃線超車，雖未與前車乙發生任何擦撞與接觸，但前車駕駛乙因突遭甲之近距離超車而受到極度驚嚇，引發急性心肌梗塞，經緊急送醫後不治死亡。甲是否應負刑法第 276 條過失致死罪責？
        </p>
        <div class="p-3.5 rounded-2xl bg-purple-50/60 dark:bg-purple-950/30 border border-purple-200/60 dark:border-purple-900/40 text-xs sm:text-sm text-slate-700 dark:text-slate-200 leading-relaxed text-justify indent-8">
          <strong>【解析】</strong>：交通法規規定禁止違規超車與保持安全間距，其規範目的在於防範「車輛擦撞、翻覆之物理性機械事故」，並非用以防範「他車駕駛人因心理脆弱受驚嚇引發心臟病發之特殊體質後果」。乙因心理驚嚇誘發心臟病死亡，屬於<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">「風險變種」（異常因果進程）</span>，超出規範預設防範之結果射程，死亡不可歸責於甲，甲不成立過失致死罪！
        </div>
      </div>
    </div>

    <!-- 步驟三：審查有無規範的特殊考量？ (4-18 ～ 4-19) -->
    <div id="sec-p2ch2s2-step3" class="scroll-mt-24 space-y-4">
      <div class="p-4 rounded-2xl bg-slate-100 dark:bg-slate-800/60 border-l-4 border-l-emerald-600">
        <h4 class="text-base sm:text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
          <span>💡</span>
          <span>步驟三：審查有無「規範的特殊考量」？（教材第 4-18 ～ 4-19 頁）</span>
        </h4>
        <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-1">
          法規範是否另有制度目的或不具有強加他人注意義務之特殊考量？
        </p>
      </div>

      <!-- 案例 2-17【雙機車夜行未開車頭燈案】 -->
      <div id="case-2-17-headlight" class="scroll-mt-24 rounded-3xl bg-white dark:bg-[#121827] border border-slate-200/90 dark:border-white/10 shadow-sm p-6 space-y-3">
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-2">
            <span class="px-2.5 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 text-xs font-mono font-bold">案例 2-17</span>
            <span class="font-bold text-slate-900 dark:text-white text-sm sm:text-base">【雙機車夜行未開車頭燈案】</span>
          </div>
          <span class="text-xs font-mono text-slate-400">p. 4-18~4-19</span>
        </div>
        <p class="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed text-justify">
          <strong>【案情】</strong>：深夜無路燈之路段，甲、乙兩人各自騎乘機車同向行駛，甲在前、乙在後。兩人均違反交通安全法規未開啟車頭大燈。前車甲因視線昏暗撞及違規橫越馬路之行人丙致死。檢察官起訴後車乙亦成立過失致死罪，起訴理由為：「若後車乙依規定開啟大燈，大燈之強光即可照亮前方道路，前車甲便能提早看見行人丙而及時煞停。」乙是否成立過失致死罪？
        </p>
        <div class="p-3.5 rounded-2xl bg-emerald-50/60 dark:bg-emerald-950/30 border border-emerald-200/60 dark:border-emerald-900/40 text-xs sm:text-sm text-slate-700 dark:text-slate-200 leading-relaxed text-justify indent-8">
          <strong>【解析】</strong>：交通規則要求機車夜間開啟頭燈之規範目的，在於「為駕駛人自己照亮前方行車視線，並使其他用路人得以辨識自己之車輛」，其目的<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">絕對不是課予後車義務「替前車照明前方道路」</span>！基於規範目的之特殊考量，後車未開大燈之行為，並未實現該規範欲防範之結果，丙之死亡不可歸責於後車乙，乙不成立過失致死罪！
        </div>
      </div>
    </div>

  </section>

  <!-- ==================== 五位一體法學劇院：犬系四大天王法學講堂 ==================== -->
  <section id="sec-p2ch2s2-mentors" class="scroll-mt-24 space-y-5 font-serif">
    
    <div class="flex items-center gap-2 border-b border-amber-200 dark:border-white/10 pb-2">
      <span class="text-xl">🐾</span>
      <h3 class="text-lg sm:text-xl font-serif font-black text-slate-900 dark:text-white">
        犬系四大天王法學講堂 • 五位一體實戰研習成果
      </h3>
    </div>

    <!-- 1. 法庭對決區域 (金毛大律師 vs 赤狐女檢察官) -->
    <div class="rounded-3xl bg-white dark:bg-[#121827] border border-slate-200/90 dark:border-white/10 shadow-sm p-6 sm:p-7 space-y-4">
      <div class="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-2">
        <span class="font-bold text-slate-900 dark:text-white text-sm flex items-center gap-2">
          <span>⚔️</span>
          <span>法庭正面言詞辯論：雙機車夜行未開大燈案</span>
        </span>
        <span class="text-xs font-mono px-2 py-0.5 rounded bg-blue-100 dark:bg-blue-900/60 text-blue-700 dark:text-blue-300">#法庭攻防戰</span>
      </div>

      <!-- 單欄垂直堆疊 (嚴禁 grid-cols-2 並排) -->
      <div class="space-y-4">
        
        <!-- 控方：赤狐女檢察官 -->
        <div class="p-4 rounded-2xl bg-rose-50/80 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-900/40 flex items-start gap-3">
          <div class="w-12 h-12 rounded-xl overflow-hidden border-2 border-rose-400 shrink-0 bg-slate-900">
            <img src="images/prosecutor_fox.jpg" alt="公訴檢察官赤狐女律師" class="w-full h-full object-cover" style="object-position: center 20%; transform: scale(1.35);">
          </div>
          <div class="space-y-1 min-w-0 flex-1 text-xs sm:text-sm">
            <div class="font-black text-rose-950 dark:text-rose-200 flex items-center gap-1.5">
              <span>公訴檢察官赤狐女律師</span>
              <span class="text-[10px] font-mono px-1.5 py-0.2 rounded bg-rose-200/70 dark:bg-rose-900/60 text-rose-800 dark:text-rose-300">控方主張</span>
            </div>
            <p class="leading-relaxed text-slate-700 dark:text-slate-200 text-justify">
              「後車乙違反道路交通安全規則夜間未開大燈，若其開啟大燈，強烈光束必然照射至前方 50 公尺，使前車甲看清行人！依條件理論（－Ｐ → －Ｑ），乙未開燈是造成甲無法及時煞停之不可想像其不存在之條件，具有因果關係，自應同負過失致死罪責！」
            </p>
          </div>
        </div>

        <!-- 辯方：金毛首席辯護大律師 -->
        <div class="p-4 rounded-2xl bg-blue-50/80 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-900/40 flex items-start gap-3">
          <div class="w-12 h-12 rounded-xl overflow-hidden border-2 border-blue-400 shrink-0 bg-slate-900">
            <img src="images/golden_case_attorney.jpg" alt="金毛辯護大律師" class="w-full h-full object-cover" style="object-position: center 20%; transform: scale(1.35);">
          </div>
          <div class="space-y-1 min-w-0 flex-1 text-xs sm:text-sm">
            <div class="font-black text-blue-950 dark:text-blue-200 flex items-center gap-1.5">
              <span>金毛首席辯護大律師</span>
              <span class="text-[10px] font-mono px-1.5 py-0.2 rounded bg-blue-200/70 dark:bg-blue-900/60 text-blue-800 dark:text-blue-300">辯護抗辯</span>
            </div>
            <p class="leading-relaxed text-slate-700 dark:text-slate-200 text-justify">
              「反對檢察官過度擴張！事實因果僅為第一道門檻，本案必須通過『規範目的審查』。道路交通安全法規課予騎士開車頭燈，目的是『為自己照亮前方，並使他人發現自己』，法律從未課予後車替前車照明之保護他人義務！非規範目的欲防範之結果，<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">根本不可歸責於後車乙</span>，請庭上諭知被告無罪！」
            </p>
          </div>
        </div>

      </div>
    </div>

    <!-- 2. 柴柴法學教授 • 白話生活大解碼 -->
    <div class="p-6 rounded-3xl bg-amber-50/70 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900/40 space-y-3">
      <div class="flex items-center gap-3">
        <div class="w-12 h-12 rounded-xl overflow-hidden border-2 border-amber-400 shrink-0 bg-amber-100">
          <img src="images/shiba_law_professor.jpg" alt="柴柴法學教授" class="w-full h-full object-cover" style="object-position: center 20%; transform: scale(1.38);">
        </div>
        <div>
          <div class="font-black text-amber-950 dark:text-amber-200 text-sm sm:text-base">🐾 柴柴法學教授 • 白話生活大解碼</div>
          <div class="text-xs text-amber-700 dark:text-amber-400 font-mono">Prof. Shiba, LL.D.</div>
        </div>
      </div>
      <div class="space-y-2 text-xs sm:text-sm text-slate-700 dark:text-slate-200 leading-relaxed text-justify">
        <p class="indent-8">
          「同學們！結果歸責其實就兩句話：<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">第一步看連不連得上（條件理論）</span>，<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">第二步看是不是法律當初想防的那件事（規範目的）</span>！
        </p>
        <p class="indent-8">
          條件理論的唯一修正例外就是『擇一因果關係』，大家千萬不要在考卷上死板扣除條件而導出兩個下毒兇手都無罪的荒謬結論！而在規範目的審查中，三大過濾器『風險失效（脫離險境）』、『風險變種（心臟病發）』與『特殊考量（不替前車照明）』更是國考必考的三把手術刀，精準劃開罪與非罪的界線！」
        </p>
      </div>
    </div>

    <!-- 3. 德牧法規巡查官 • 法規雷達查核 -->
    <div class="p-6 rounded-3xl bg-blue-50/70 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-900/40 space-y-3">
      <div class="flex items-center gap-3">
        <div class="w-12 h-12 rounded-xl overflow-hidden border-2 border-blue-400 shrink-0 bg-blue-100">
          <img src="images/shepherd_law_inspector.jpg" alt="德牧法規巡查官" class="w-full h-full object-cover" style="object-position: center 15%; transform: scale(1.4);">
        </div>
        <div>
          <div class="font-black text-blue-950 dark:text-blue-200 text-sm sm:text-base">🛡️ 德牧法規巡查官 • 法規雷達查核</div>
          <div class="text-xs text-blue-700 dark:text-blue-400 font-mono">Inspector Shepherd</div>
        </div>
      </div>
      <div class="space-y-2 text-xs sm:text-sm text-slate-700 dark:text-slate-200 leading-relaxed text-justify">
        <p class="indent-8">
          【裁判要旨檢索與實務比對】：實務最高法院過去慣用「相當因果關係說」（76年台上字第192號判例），但近代裁判已逐步融入客觀歸責思維。在交通事故案件中，最高法院一再揭示「行為人雖有違規，但若該違規與結果之發生無常態相當性，且非避險規範所欲防止之特定結果時，不得令負過失致死罪責」（最高法院 97 年度台上字第 5042 號裁判參照）。
        </p>
      </div>
    </div>

    <!-- 4. 邊牧首席審判長 • 終審裁決一槌定音 (深色星空金邊卡片) -->
    <div class="p-6 sm:p-7 rounded-3xl bg-slate-900 text-white border-2 border-amber-400/70 shadow-xl space-y-4">
      <div class="flex items-center justify-between border-b border-white/10 pb-3 flex-wrap gap-2">
        <div class="flex items-center gap-3">
          <div class="w-12 h-12 rounded-xl overflow-hidden border-2 border-amber-400 shrink-0 bg-slate-800">
            <img src="images/border_collie_chief_judge.jpg" alt="邊牧首席審判長" class="w-full h-full object-cover" style="object-position: center 25%; transform: scale(1.35);">
          </div>
          <div>
            <div class="font-black text-amber-300 text-sm sm:text-base">👨‍⚖️ 邊牧首席審判長 • 終審裁決一槌定音</div>
            <div class="text-xs text-slate-400 font-mono">Chief Judge Border Collie</div>
          </div>
        </div>
        <span class="text-xs font-mono font-bold px-2.5 py-1 rounded-full bg-amber-400/20 text-amber-300 border border-amber-400/30">
          #法槌一敲誰與爭鋒
        </span>
      </div>

      <div class="space-y-3 text-xs sm:text-sm text-slate-200 leading-relaxed text-justify">
        <p class="indent-8">
          🔨 <strong>【實體法定讞】</strong>：結果歸責審查為客觀構成要件之核心支柱。第一階以條件理論（－Ｐ → －Ｑ）建構事實關聯，嚴守未發生假設不考慮、具體結果為準與擇一因果例外三規則；第二階以規範目的審查過濾風險失效、風險變種與規範特殊考量。凡結果溢出規範目的射程之外者，一律阻卻結果歸責！
        </p>
        <p class="indent-8">
          💡 <strong>【國考答題定錨】</strong>：考生在作答故意既遂犯或過失犯時，客觀構成要件務必分為兩段書寫：㈠「構成要件行為（製造不容許風險）」；㈡「構成要件結果歸責（事實因果＋規範目的實現風險）」。條理井然，高分定錨！
        </p>
        
        <!-- 📅 2026 最新法條動態備註 -->
        <div class="p-3.5 rounded-2xl bg-slate-800/90 border border-amber-400/30 space-y-1.5 text-xs">
          <div class="font-bold text-amber-300 flex items-center gap-1.5">
            <span>📅</span>
            <span>2026 最新法條動態備註：</span>
          </div>
          <p class="text-slate-300 leading-relaxed">
            刑法第 271 條（普通殺人罪）、第 276 條（過失致死罪）、第 277 條（傷害致死罪）至 2026 年要件文字持續穩定施行。實務與學說對於客觀歸責理論之規範目的審查已形成高度共識，各類國家考試（司律、法警、高普考）評分標準均將「事實因果」與「規範目的」兩階段精準涵攝列為關鍵給分點，請考生審慎作答！
          </p>
        </div>
      </div>
    </div>

  </section>

  <!-- ==================== 底部前後單元導航條 ==================== -->
  <div class="flex items-center justify-between p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-blue-50/80 via-white to-indigo-50/80 dark:from-[#121827] dark:to-[#162035] border border-blue-200/80 dark:border-blue-900/40 shadow-xs flex-wrap gap-3 font-serif">
    <button onclick="switchView('part2-ch2-sec1')" class="px-4 py-2 rounded-xl bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 font-bold text-xs flex items-center gap-1.5 border border-slate-200 dark:border-slate-700 cursor-pointer">
      <span>← 上一單元：第二章 第一節 構成要件行為</span>
    </button>
    <div class="flex items-center gap-2 flex-wrap">
      <button onclick="switchView('cover')" class="px-4 py-2 rounded-xl bg-amber-50 dark:bg-amber-950/40 text-amber-800 dark:text-amber-200 hover:bg-amber-100 dark:hover:bg-amber-900/50 font-bold text-xs flex items-center gap-1.5 border border-amber-300 dark:border-amber-700/60 cursor-pointer">
        <span>🏠 書籍首頁</span>
      </button>
      <button onclick="switchView('part2')" class="px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 font-bold text-xs flex items-center gap-1.5 transition-all shadow-xs cursor-pointer">
        <span>第二篇導讀</span>
      </button>
      <button onclick="switchView('part2-ch2-special1')" class="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs flex items-center gap-1.5 transition-all shadow-xs cursor-pointer">
        <span>👉 下一單元：專題研究一 被害人與第三人介入 →</span>
      </button>
    </div>
  </div>

</div>
`;
