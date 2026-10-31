// =========================================================================
// 第二篇 故意既遂犯的構成要件該當性
// 第二章 客觀構成要件該當性・專題研究一 被害人介入型與第三人介入型的構成要件該當判斷 (教材第 4-21 ～ 4-24 頁 全篇完結)
// 嚴格依據陳奕廷律師《刑法總則【圖說系列】》原書 1:1 忠實復刻
// 憲政遵循：AGENTS.md (純紅底線、單欄垂直堆疊、犬系四大天王、Zero-CORS、2026法條備註)
// =========================================================================

window.APP_VIEWS = window.APP_VIEWS || {};

window.APP_VIEWS['viewPart2Ch2Special1'] = `
<div id="viewPart2Ch2Special1" class="fade-enter space-y-8 max-w-4xl mx-auto">

  <!-- ==================== 頁首徽章與大標題 (1:1 復刻原書 4-21) ==================== -->
  <header class="text-center space-y-3 pt-2">
    <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100/80 dark:bg-indigo-900/40 text-indigo-800 dark:text-indigo-300 text-xs font-mono font-bold tracking-wider uppercase border border-indigo-200 dark:border-indigo-800">
      <span>第二篇 • 故意既遂犯構成要件</span>
      <span>•</span>
      <span>第二章 專題研究一</span>
      <span>•</span>
      <span>p. 4-21～4-24</span>
    </div>
    
    <!-- 圓形專題研究徽章 1:1 復刻原書 -->
    <div class="flex items-center justify-center gap-3">
      <div class="inline-flex items-center justify-center w-12 h-12 rounded-full border-2 border-dashed border-indigo-600 dark:border-indigo-400 bg-indigo-50/70 dark:bg-indigo-950/40 text-indigo-700 dark:text-indigo-300 font-serif font-black text-sm shadow-xs">
        專研
      </div>
    </div>

    <h1 class="text-2xl sm:text-3xl lg:text-4xl font-serif font-black text-slate-900 dark:text-white tracking-tight">
      被害人介入型與第三人介入型的<br class="hidden sm:inline">構成要件該當判斷
      <sup class="text-xs font-sans text-indigo-600 dark:text-indigo-400 font-bold ml-1">4</sup>
    </h1>

    <div class="flex items-center justify-center gap-2 pt-1">
      <div class="h-0.5 w-12 bg-indigo-500/60 rounded-full"></div>
      <h2 class="text-sm sm:text-base font-serif font-bold text-indigo-700 dark:text-indigo-400">
        客觀歸責理論之自主行為介入審查・自我負責原則與回溯禁止
      </h2>
      <div class="h-0.5 w-12 bg-indigo-500/60 rounded-full"></div>
    </div>

    <!-- 註腳 4 (忠實收錄原書出處) -->
    <div class="max-w-2xl mx-auto px-4 py-1.5 rounded-xl bg-slate-100/70 dark:bg-slate-800/50 text-[11px] text-slate-600 dark:text-slate-400 font-serif border border-slate-200/80 dark:border-slate-700">
      <span class="font-bold text-indigo-600 dark:text-indigo-400">註 4</span>：參考自 Wolfgang Frisch（蔡聖偉譯），客觀之結果歸責，法學新論 32，P.21～P.28。
    </div>
  </header>

  <!-- ==================== 前言概念 (4-21) ==================== -->
  <section id="sec-special1-intro" class="scroll-mt-24 p-6 sm:p-7 rounded-3xl bg-white dark:bg-[#121827] border border-slate-200/90 dark:border-white/10 shadow-sm space-y-4 font-serif">
    <div class="flex items-center gap-2 text-xs font-mono text-indigo-600 dark:text-indigo-400 font-bold uppercase tracking-wider">
      <span>📖 專題核心導論</span>
      <span>•</span>
      <span>居間自主行為之歸責定性</span>
    </div>

    <p class="text-sm sm:text-base text-slate-700 dark:text-slate-200 leading-relaxed text-justify indent-8">
      前面談到的都是行為人以自身行為導致結果發生的案例，不過還有一種特殊類型，是透過<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">被害人或第三人居間的自主行為而引發結果</span>，前者稱<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">被害人介入型</span>，學理上多用<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">自我負責原則</span>詮釋，後者稱<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">第三人介入型</span>，流行的說法是<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">回溯禁止原則</span>。
    </p>

    <p class="text-sm sm:text-base text-slate-700 dark:text-slate-200 leading-relaxed text-justify indent-8">
      實際上無論用什麼理論來說明，皆不脫離前述操作，只不過究竟是在<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">構成要件行為</span>或是<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">構成要件結果歸責</span>排除罷了。
    </p>

    <div class="p-4 rounded-2xl bg-indigo-50/80 dark:bg-indigo-950/30 border border-indigo-200 dark:border-indigo-900/40 text-xs sm:text-sm text-indigo-900 dark:text-indigo-200 space-y-1.5">
      <div class="font-bold flex items-center gap-1.5">
        <span>🧭</span>
        <span>體系思維指南：</span>
      </div>
      <p class="leading-relaxed">
        居間自主行為介入案件，本質上均是「限制行為自由」與「法益保護」的拉鋸。若受讓人有理性決定能力，原則上自我負責；僅於受讓人缺乏理性、行為人掌握優越事實、負有監督保證義務或本在促使他人犯罪時，方有限制行為人自由之正當性基礎！
      </p>
    </div>
  </section>

  <!-- ==================== 一、被害人介入型——被害人自我負責 (4-21) ==================== -->
  <section id="sec-special1-part1" class="scroll-mt-24 space-y-6">
    <div class="flex items-center justify-between border-b border-slate-200/80 dark:border-white/10 pb-3">
      <div class="flex items-center gap-2.5">
        <span class="w-3.5 h-3.5 rounded-full bg-indigo-600"></span>
        <h3 class="text-lg sm:text-xl font-serif font-black text-slate-900 dark:text-white tracking-wide">
          一、被害人介入型——被害人自我負責
        </h3>
      </div>
      <span class="text-xs font-mono font-bold px-2.5 py-1 rounded-lg bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-800">
        教材第 4-21 頁 原文
      </span>
    </div>

    <!-- 原文論述卡片 -->
    <div class="p-6 sm:p-7 rounded-3xl bg-white dark:bg-[#121827] border border-slate-200/90 dark:border-white/10 shadow-sm space-y-4 font-serif text-slate-800 dark:text-slate-100 text-sm sm:text-base leading-relaxed text-justify">
      <p class="indent-8">
        案例特徵在於透過<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">被害人居間的自主行為</span>，繼而引發自我侵害，例如行為人交付特定物件給被害人，被害人藉由該物件對自己施加侵害。這類案例行為人是否對被害人製造該罪所不容許的風險，需要仰賴<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">限制行為自由的思考模式</span>。
      </p>

      <p class="indent-8">
        被害人於收受物件或資訊後錯誤地運用，廣泛存在於我們的日常生活中，可以想像有人購買剪刀來自殘、領取木炭來自殺等等。若因為存有自我侵害可能性便全面禁止物件或資訊流通，對轉讓者（如賣方）與受讓者（如買方）而言，都是行為自由的過度限制。
      </p>

      <div class="p-4 rounded-2xl bg-amber-50/80 dark:bg-amber-950/30 border-l-4 border-l-amber-500 border border-amber-200/80 dark:border-amber-900/40 text-xs sm:text-sm text-amber-950 dark:text-amber-200 space-y-1">
        <div class="font-bold flex items-center gap-1.5">
          <span>⚖️</span>
          <span>利益平衡之黃金準則：</span>
        </div>
        <p class="leading-relaxed">
          取得平衡的方法是：<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">若受讓者有理性決定能力，則受讓者（＝被害人）自我負責</span>。不過被害人縱有理性決定能力，但卻沒有認識到某些重要情狀，當行為人掌握此類<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">優越事實</span>時，為了保護那些無法充分自我防護的被害人，行為自由的限制便取得正當性基礎。
        </p>
      </div>
    </div>

    <!-- ──────────────── 案例 2-18【自我侵害行為】(4-21~4-22) ──────────────── -->
    <div id="case-2-18-self-harm" class="scroll-mt-24 rounded-3xl bg-white dark:bg-[#121827] border border-slate-200/90 dark:border-white/10 p-6 sm:p-7 space-y-5 shadow-sm">
      <div class="flex items-center justify-between border-b border-slate-200/60 dark:border-white/10 pb-3 flex-wrap gap-2">
        <div class="flex items-center gap-2">
          <span class="px-2.5 py-1 rounded-xl bg-indigo-100 dark:bg-indigo-950/80 text-indigo-700 dark:text-indigo-300 font-mono text-xs font-black">
            案例 2-18
          </span>
          <h4 class="font-serif font-black text-slate-900 dark:text-white text-base sm:text-lg">
            【自我侵害行為】——雜貨店賣水果刀割腕案
          </h4>
        </div>
        <span class="text-xs font-mono text-slate-500 dark:text-slate-400">教材第 4-21～4-22 頁</span>
      </div>

      <!-- 案情原文 -->
      <div class="p-4 sm:p-5 rounded-2xl bg-slate-50 dark:bg-[#161f30] border-l-4 border-l-blue-600 border border-slate-200 dark:border-slate-800 text-xs sm:text-sm font-serif text-slate-800 dark:text-slate-200 leading-relaxed text-justify">
        雜貨店老闆甲販賣一把水果刀給顧客乙，孰料乙返家後竟然用該水果刀割腕自殺。請問甲應否對乙的死亡結果負加工自殺罪之責？倘若甲早知乙患有嚴重憂鬱症，並有多次自殺經驗，購買水果刀當下乙精神狀態明顯不穩定，則評價上有無不同？
      </div>

      <!-- 小題導引原文 -->
      <div class="p-4 sm:p-5 rounded-2xl bg-indigo-50/70 dark:bg-indigo-950/30 border border-indigo-200 dark:border-indigo-900/40 text-xs sm:text-sm font-serif text-slate-700 dark:text-slate-300 space-y-2 text-justify">
        <div class="font-bold text-indigo-900 dark:text-indigo-200 flex items-center gap-1.5">
          <span>🧭</span>
          <span>【小題導引】原書解析：</span>
        </div>
        <p class="indent-6 leading-relaxed">
          甲是否該當構成要件行為，取決於乙是否有理性決定能力。由事前角度觀察，倘若一般人均無法探知乙有自殺傾向，便不宜貿然限制甲的行為自由。反之，若一般人均可探知乙的自殺傾向，則有限制甲行為自由的正當基礎，甲該當構成要件行為。這類案例稱為「<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">自我侵害行為</span>」，舉凡買繩自吊、買藥自戕均屬之。
        </p>
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
              #加工自殺罪爭鋒
            </span>
          </div>

          <div class="space-y-3 text-xs sm:text-sm leading-relaxed">
            <!-- 控方公訴赤狐女律師 -->
            <div class="flex items-start gap-3 p-3 rounded-xl bg-slate-800/60 border border-rose-500/30">
              <div class="w-10 h-10 rounded-full overflow-hidden shrink-0 border border-rose-400 shadow-xs">
                <img src="images/prosecutor_fox.jpg" alt="公訴檢察官赤狐女律師" class="w-full h-full object-cover" style="object-position: center 20%; transform: scale(1.35);">
              </div>
              <div class="flex-1 space-y-1">
                <div class="font-bold text-rose-300 text-xs">公訴檢察官 赤狐女律師：</div>
                <p class="text-slate-200 text-justify">
                  「刑法第 275 條加工自殺罪旨在絕對保護生命法益！甲販賣極具致死危險性的水果刀給乙，最終直接促成乙割腕死亡。若甲知悉乙患有重度憂鬱且神情恍惚，卻仍交付兇器，客觀上已製造不容許的自殺危險，豈能任由其推託免責？」
                </p>
              </div>
            </div>

            <!-- 辯方金毛首席大律師 -->
            <div class="flex items-start gap-3 p-3 rounded-xl bg-slate-800/60 border border-amber-500/30">
              <div class="w-10 h-10 rounded-full overflow-hidden shrink-0 border border-amber-400 shadow-xs">
                <img src="images/golden_case_attorney.jpg" alt="金毛首席辯護大律師" class="w-full h-full object-cover" style="object-position: center 20%; transform: scale(1.35);">
              </div>
              <div class="flex-1 space-y-1">
                <div class="font-bold text-amber-300 text-xs">辯護人 金毛首席大律師：</div>
                <p class="text-slate-200 text-justify">
                  「反對檢方過度擴張刑罰！水果刀為日常民生必需品，一般情狀下賣刀僅屬中性交易日常行為。乙為具備理性判斷能力的成年人，返家割腕純屬自主自我侵害，依<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">被害人自我負責原則</span>，甲根本未製造不容許之風險，構成要件行為自始不該當！」
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
              同學們想像一下，如果法律規定「只要買刀的人可能自殘，雜貨店老闆就不能賣刀」，那全台灣的五金行、文具店、超商通通都得關門了！這就是所謂<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">過度限制大眾的交易行為自由</span>。
            </p>
            <p class="indent-6">
              因此，法律劃定界線：正常成年人自己拿刀割腕、買繩自吊，屬於自己的決定，由自己負責。
            </p>
            <p class="indent-6">
              但如果老闆早就知道客人嚴重憂鬱、以前常割腕，而且買刀當下眼神空洞喃喃自語——這就構成了<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">掌握優越事實</span>！這時候客人已經缺乏自主防護能力，老闆賣刀就跨越了紅線，製造了刑法所不容許的加工自殺風險！
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
              辯護人在法庭攻防時，第一道防火牆必須釘死在<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">構成要件行為階層（事前判斷）</span>！
            </p>
            <p class="indent-6">
              我們要向審判長力證：從一般人事前客觀認知來看，販售合格之民生水果刀完全屬於常態中性商業行為，不能以事後被害人割腕的悲劇反推行為人有罪。除非檢方能確切舉證被告掌握特別認知或精神異常的「優越事實」，否則在第一步就必須無罪釋放！
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
              查核刑法第 275 條規定：教唆或幫助他人使之自殺者，處一年以上七年以下有期徒刑。
            </p>
            <p class="indent-6">
              【裁判要旨查核】：最高法院向來嚴守「幫助自殺」之成立，須行為人明知他人有自殺決意，而對其自殺行為施以助力。若單純交付日常用品而無從探知自殘決意者，自不得遽以幫助自殺罪相繩。但若已知他人精神不穩、自殘前科且處於發病狀態，此時交付致命凶器即等同提供自殺工具，具有構成要件相當性！
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
              🔨 <strong>【實體法定讞】</strong>：一般情狀下，乙具有理性決定能力，甲販售水果刀不該當加工自殺之構成要件行為；倘若甲掌握乙重度憂鬱且神態異常之「優越事實」，限制行為自由取得正當性，甲該當加工自殺罪之構成要件行為！
            </p>
            <p class="indent-6">
              💡 <strong>【國考答題定錨】</strong>：本案於國考作答時，關鍵在於引述<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">「自我負責原則」</span>與<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">「事前優越事實判斷」</span>，分別就一般情狀（不該當）與知悉重度憂鬱特殊情狀（該當）做兩造對比涵攝，定得高分！
            </p>

            <!-- 2026 最新法條動態備註 -->
            <div class="p-3 rounded-xl bg-slate-800/90 border border-amber-400/30 space-y-1 text-xs">
              <div class="font-bold text-amber-300 flex items-center gap-1.5">
                <span>📅</span>
                <span>2026 最新法條動態備註：</span>
              </div>
              <p class="text-slate-300 leading-relaxed">
                刑法第 275 條（加工自殺罪）於 108 年修正後條文至 2026 年維持穩定施行。實務對受託受囑與單純幫助自殺之要件審查嚴謹，考生答題時務必區分「自始不該當構成要件行為」與「阻卻違法」之層次差異，切莫混淆！
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>

    <!-- ──────────────── 案例 2-19【自我危險行為】(4-22) ──────────────── -->
    <div id="case-2-19-self-danger" class="scroll-mt-24 rounded-3xl bg-white dark:bg-[#121827] border border-slate-200/90 dark:border-white/10 p-6 sm:p-7 space-y-5 shadow-sm">
      <div class="flex items-center justify-between border-b border-slate-200/60 dark:border-white/10 pb-3 flex-wrap gap-2">
        <div class="flex items-center gap-2">
          <span class="px-2.5 py-1 rounded-xl bg-indigo-100 dark:bg-indigo-950/80 text-indigo-700 dark:text-indigo-300 font-mono text-xs font-black">
            案例 2-19
          </span>
          <h4 class="font-serif font-black text-slate-900 dark:text-white text-base sm:text-lg">
            【自我危險行為】——藥師未叮嚀服藥禁劇烈運動案
          </h4>
        </div>
        <span class="text-xs font-mono text-slate-500 dark:text-slate-400">教材第 4-22 頁</span>
      </div>

      <!-- 案情原文 -->
      <div class="p-4 sm:p-5 rounded-2xl bg-slate-50 dark:bg-[#161f30] border-l-4 border-l-blue-600 border border-slate-200 dark:border-slate-800 text-xs sm:text-sm font-serif text-slate-800 dark:text-slate-200 leading-relaxed text-justify">
        甲持醫師所開立的處方箋至藥局拿藥，藥師乙並未遵照處方箋上的警囑，提醒甲不能在從事劇烈運動前服用該藥，便將藥物交付給甲。甲在服用該藥後旋即進行馬拉松訓練，因而產生藥物副作用而死亡，試問應如何評價乙的行為？
      </div>

      <!-- 小題導引原文 -->
      <div class="p-4 sm:p-5 rounded-2xl bg-indigo-50/70 dark:bg-indigo-950/30 border border-indigo-200 dark:border-indigo-900/40 text-xs sm:text-sm font-serif text-slate-700 dark:text-slate-300 space-y-2 text-justify">
        <div class="font-bold text-indigo-900 dark:text-indigo-200 flex items-center gap-1.5">
          <span>🧭</span>
          <span>【小題導引】原書解析：</span>
        </div>
        <p class="indent-6 leading-relaxed">
          藥師乙對藥物的副作用較一般人之甚詳，故交付藥物卻未做任何說明，對甲而言便<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">製造不容許的風險</span>。這類案例稱為「<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">自我危險行為</span>」，例如毒販販賣毒品給毒蟲，結果毒蟲自己吸食過量而暴斃身亡，毒蟲自始沒有自我侵害的意思，但卻藉由吸食毒品而陷入危險境地，由於毒蟲有理性決定能力，故應自我負責。
        </p>
      </div>

      <!-- 四大天王導師劇院 (垂直堆疊) -->
      <div class="space-y-4 pt-1 font-serif">
        <!-- 柴柴白話生活大解碼 -->
        <div class="p-5 rounded-2xl bg-amber-50/80 dark:bg-[#18181b] border-l-4 border-l-amber-500 border border-amber-200/80 dark:border-white/10 space-y-2">
          <div class="flex items-center gap-2">
            <span class="text-base">🐾</span>
            <span class="font-bold text-xs sm:text-sm text-amber-950 dark:text-amber-200">柴柴教授 • 觀念快拆</span>
          </div>
          <p class="text-xs sm:text-sm text-slate-700 dark:text-slate-200 leading-relaxed text-justify indent-6">
            請注意「自我侵害」與「自我危險」的差別：
            在案例 2-18 割腕，乙本來就想傷害自己；但在案例 2-19 跑步或吸毒，當事人根本「不想死」，只是讓自己暴露在危險中。
            吸毒暴斃案中，毒蟲明知毒品危害仍甘願冒險，具有理性決定能力，所以自我負責；但本案的跑者甲根本不知道藥物有這個致命副作用，而藥師乙有專業優越事實卻不警告，因此乙製造了不容許風險，該當過失致死罪！
          </p>
        </div>

        <!-- 邊牧裁決一槌定音 -->
        <div class="p-4 sm:p-5 rounded-2xl bg-slate-900 text-white space-y-2 border border-amber-400/30 text-xs sm:text-sm">
          <div class="font-bold text-amber-300 flex items-center gap-1.5">
            <span>🔨</span>
            <span>審判長定音：專業注意義務與優越事實</span>
          </div>
          <p class="text-slate-200 leading-relaxed text-justify indent-6">
            藥師負有處方箋用藥安全說明之法定專業義務，其專業知識形成絕對的「優越事實」。病患在欠缺重要情狀認知下冒險，不能阻卻藥師之過失構成要件該當，乙成立過失致死罪！
          </p>
        </div>
      </div>
    </div>

    <!-- ──────────────── 案例 2-20【消防員與警察職業風險】(4-22~4-23) ──────────────── -->
    <div id="case-2-20-firefighter" class="scroll-mt-24 rounded-3xl bg-white dark:bg-[#121827] border border-slate-200/90 dark:border-white/10 p-6 sm:p-7 space-y-5 shadow-sm">
      <div class="flex items-center justify-between border-b border-slate-200/60 dark:border-white/10 pb-3 flex-wrap gap-2">
        <div class="flex items-center gap-2">
          <span class="px-2.5 py-1 rounded-xl bg-indigo-100 dark:bg-indigo-950/80 text-indigo-700 dark:text-indigo-300 font-mono text-xs font-black">
            案例 2-20
          </span>
          <h4 class="font-serif font-black text-slate-900 dark:text-white text-base sm:text-lg">
            【典型職業風險】——放火燒破廟消防員救火罹難案
          </h4>
        </div>
        <span class="text-xs font-mono text-slate-500 dark:text-slate-400">教材第 4-22～4-23 頁</span>
      </div>

      <!-- 案情原文 -->
      <div class="p-4 sm:p-5 rounded-2xl bg-slate-50 dark:bg-[#161f30] border-l-4 border-l-blue-600 border border-slate-200 dark:border-slate-800 text-xs sm:text-sm font-serif text-slate-800 dark:text-slate-200 leading-relaxed text-justify">
        甲心情不好而放火焚燒郊區破廟，不料消防隊員乙奮力救火時竟不幸罹難。
      </div>

      <!-- 小題導引原文 -->
      <div class="p-4 sm:p-5 rounded-2xl bg-indigo-50/70 dark:bg-indigo-950/30 border border-indigo-200 dark:border-indigo-900/40 text-xs sm:text-sm font-serif text-slate-700 dark:text-slate-300 space-y-2 text-justify">
        <div class="font-bold text-indigo-900 dark:text-indigo-200 flex items-center gap-1.5">
          <span>🧭</span>
          <span>【小題導引】原書解析：</span>
        </div>
        <p class="indent-6 leading-relaxed">
          這也是自我危險行為的案例。甲縱火乃製造「廟內人員罹難」風險的殺人行為，至於消防隊員死亡是否殺人罪的預設結果？該風險並未失效，且轉變成「消防人員落難」風險，機率也不是太低而非變種，然而乙基於自由意志選擇消防隊員為業，受有專業訓練並享有相關福利，<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">本應承擔典型職業風險</span>，故衡酌規範特殊考量後，乙的死亡並非預設結果，客觀構成要件不該當。警察飛車追捕現行犯卻出車禍死亡，結論亦同。
        </p>
      </div>

      <!-- 四大天王導師劇院 (垂直堆疊) -->
      <div class="space-y-4 pt-1 font-serif">
        <!-- 德牧法規巡查官 -->
        <div class="p-5 rounded-2xl bg-emerald-50/80 dark:bg-[#13221c] border-l-4 border-l-emerald-600 border border-emerald-200/80 dark:border-emerald-900/40 space-y-2">
          <div class="flex items-center gap-2">
            <span class="text-base">🛡️</span>
            <span class="font-bold text-xs sm:text-sm text-emerald-950 dark:text-emerald-200">德牧巡查官 • 規範目的之「特殊考量」</span>
          </div>
          <p class="text-xs sm:text-sm text-slate-700 dark:text-slate-200 leading-relaxed text-justify indent-6">
            在此要特別注意結果歸責中的「規範特殊考量」！
            縱火罪或殺人罪的規範目的，在於防範「無辜大眾」遭波及，而非轉嫁由已受專業避險訓練、領取危險津貼並專職救災的公務人員。除非縱火現場有未告知的「非典型爆炸物」或特殊陷阱，否則典型殉職風險均由職業承擔，阻卻甲之殺人結果歸責！
          </p>
        </div>

        <!-- 邊牧審判長 -->
        <div class="p-4 sm:p-5 rounded-2xl bg-slate-900 text-white space-y-2 border border-amber-400/30 text-xs sm:text-sm">
          <div class="font-bold text-amber-300 flex items-center gap-1.5">
            <span>🔨</span>
            <span>審判長定音：典型職業風險排除結果歸責</span>
          </div>
          <p class="text-slate-200 leading-relaxed text-justify indent-6">
            消防員奮勇殉職令人敬佩，但在刑法客觀歸責評價上，消防員與追捕警察承受者乃自身選擇之「典型職業風險」，依規範特殊考量排除結果歸責。甲僅成立刑法第 173 條或 174 條放火罪，不成立殺人既遂罪！
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- ==================== 二、第三人介入型——第三人自我負責 (4-23) ==================== -->
  <section id="sec-special1-part2" class="scroll-mt-24 space-y-6">
    <div class="flex items-center justify-between border-b border-slate-200/80 dark:border-white/10 pb-3">
      <div class="flex items-center gap-2.5">
        <span class="w-3.5 h-3.5 rounded-full bg-indigo-600"></span>
        <h3 class="text-lg sm:text-xl font-serif font-black text-slate-900 dark:text-white tracking-wide">
          二、第三人介入型——第三人自我負責
        </h3>
      </div>
      <span class="text-xs font-mono font-bold px-2.5 py-1 rounded-lg bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-800">
        教材第 4-23 頁 原文
      </span>
    </div>

    <!-- 原文論述卡片 -->
    <div class="p-6 sm:p-7 rounded-3xl bg-white dark:bg-[#121827] border border-slate-200/90 dark:border-white/10 shadow-sm space-y-4 font-serif text-slate-800 dark:text-slate-100 text-sm sm:text-base leading-relaxed text-justify">
      <p class="indent-8">
        案例特徵在於透過<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">第三人居間的自主行為</span>，繼而引發法益侵害，例如行為人交付特定物件給第三人，第三人藉由該物件對他人施加侵害。
      </p>

      <p class="indent-8">
        這類案例行為人是否對他人製造該罪所不容許的風險，需要仰賴限制行為自由的思考模式，因為禁止這些活動將對行為自由形成無法忍受的限制。取得平衡的方法是：<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">若受讓者有理性決定能力，則受讓者（＝第三人）自我負責</span>。
      </p>

      <!-- 兩大核心例外規則高對比框 -->
      <div class="space-y-3 pt-1">
        <div class="p-4 rounded-2xl bg-blue-50/80 dark:bg-blue-950/30 border-l-4 border-l-blue-600 border border-blue-200/80 dark:border-blue-900/40 text-xs sm:text-sm text-blue-950 dark:text-blue-200 space-y-1">
          <div class="font-bold flex items-center gap-1.5">
            <span>🛡️</span>
            <span>例外一：監督者的保證義務</span>
          </div>
          <p class="leading-relaxed">
            行為人若對特定物件負有<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">監督者的保證義務</span>，則讓他人接觸該物件便製造不容許的風險。
          </p>
        </div>

        <div class="p-4 rounded-2xl bg-rose-50/80 dark:bg-rose-950/30 border-l-4 border-l-rose-500 border border-rose-200/80 dark:border-rose-900/40 text-xs sm:text-sm text-rose-950 dark:text-rose-200 space-y-1">
          <div class="font-bold flex items-center gap-1.5">
            <span>🚨</span>
            <span>例外二：行為本身在促使第三人犯罪</span>
          </div>
          <p class="leading-relaxed">
            若行為本身就是在<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">促使第三人犯罪</span>（例如提供運鈔車資訊、銀行保險箱密碼與保全配置圖，或讓與萬能鑰匙、長距離狙擊槍等等），鑑於無所謂「促使他人犯罪」的自由，乃製造不容許的風險。
          </p>
        </div>
      </div>
    </div>

    <!-- ──────────────── 案例 2-21【幼童起火裝置案】(4-23) ──────────────── -->
    <div id="case-2-21-toddler-fire" class="scroll-mt-24 rounded-3xl bg-white dark:bg-[#121827] border border-slate-200/90 dark:border-white/10 p-6 sm:p-7 space-y-5 shadow-sm">
      <div class="flex items-center justify-between border-b border-slate-200/60 dark:border-white/10 pb-3 flex-wrap gap-2">
        <div class="flex items-center gap-2">
          <span class="px-2.5 py-1 rounded-xl bg-indigo-100 dark:bg-indigo-950/80 text-indigo-700 dark:text-indigo-300 font-mono text-xs font-black">
            案例 2-21
          </span>
          <h4 class="font-serif font-black text-slate-900 dark:text-white text-base sm:text-lg">
            【無決定能力第三人】——烤肉起火裝置交給七歲幼童案
          </h4>
        </div>
        <span class="text-xs font-mono text-slate-500 dark:text-slate-400">教材第 4-23 頁</span>
      </div>

      <div class="p-4 sm:p-5 rounded-2xl bg-slate-50 dark:bg-[#161f30] border-l-4 border-l-blue-600 border border-slate-200 dark:border-slate-800 text-xs sm:text-sm font-serif text-slate-800 dark:text-slate-200 leading-relaxed text-justify">
        甲將烤肉用的起火裝置交給鄰居家的七歲幼童乙，請乙轉交給家內的大人。乙自行把玩該裝置時不慎誤觸開關，放火燒燬他人停在路邊的汽車。
      </div>

      <div class="p-4 sm:p-5 rounded-2xl bg-indigo-50/70 dark:bg-indigo-950/30 border border-indigo-200 dark:border-indigo-900/40 text-xs sm:text-sm font-serif text-slate-700 dark:text-slate-300 space-y-2 text-justify">
        <div class="font-bold text-indigo-900 dark:text-indigo-200 flex items-center gap-1.5">
          <span>🧭</span>
          <span>【小題導引】原書解析：</span>
        </div>
        <p class="indent-6 leading-relaxed">
          由於 7 歲小孩<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">尚無理性決定能力</span>，甲製造不容許風險，該當構成要件行為。
        </p>
      </div>

      <!-- 四大天王劇院 (垂直堆疊) -->
      <div class="space-y-4 pt-1 font-serif">
        <div class="p-4 sm:p-5 rounded-2xl bg-amber-50/80 dark:bg-[#18181b] border-l-4 border-l-amber-500 border border-amber-200/80 dark:border-white/10 space-y-2 text-xs sm:text-sm">
          <div class="font-bold text-amber-950 dark:text-amber-200 flex items-center gap-1.5">
            <span>🐾</span>
            <span>柴柴教授評析：間接正犯與工具利用</span>
          </div>
          <p class="text-slate-700 dark:text-slate-200 leading-relaxed text-justify indent-6">
            幼童在刑法上被視為「無責任能力人」，欠缺辨別事理之理性決定能力。甲將具危險性的噴火點火裝置交付給無法控制危險的小孩，等於是讓危險失控。甲不能主張「由小孩自己負責」，甲成立刑法第 175 條失火燒燬他人所有物罪之構成要件該當！
          </p>
        </div>
      </div>
    </div>

    <!-- ──────────────── 案例 2-22【西瓜刀促使犯罪案】(4-23~4-24) ──────────────── -->
    <div id="case-2-22-watermelon-knife" class="scroll-mt-24 rounded-3xl bg-white dark:bg-[#121827] border border-slate-200/90 dark:border-white/10 p-6 sm:p-7 space-y-5 shadow-sm">
      <div class="flex items-center justify-between border-b border-slate-200/60 dark:border-white/10 pb-3 flex-wrap gap-2">
        <div class="flex items-center gap-2">
          <span class="px-2.5 py-1 rounded-xl bg-indigo-100 dark:bg-indigo-950/80 text-indigo-700 dark:text-indigo-300 font-mono text-xs font-black">
            案例 2-22
          </span>
          <h4 class="font-serif font-black text-slate-900 dark:text-white text-base sm:text-lg">
            【促使他人犯罪】——雜貨店賣西瓜刀砍死仇人案
          </h4>
        </div>
        <span class="text-xs font-mono text-slate-500 dark:text-slate-400">教材第 4-23～4-24 頁</span>
      </div>

      <div class="p-4 sm:p-5 rounded-2xl bg-slate-50 dark:bg-[#161f30] border-l-4 border-l-blue-600 border border-slate-200 dark:border-slate-800 text-xs sm:text-sm font-serif text-slate-800 dark:text-slate-200 leading-relaxed text-justify">
        雜貨店老闆甲販賣一把西瓜刀給顧客乙，孰料乙竟然用西瓜刀砍死丙。試問甲應否對丙的死亡結果負責？倘若甲早知乙想要殺死丙，購買西瓜刀當下乙精神狀態十分亢奮，逕對店外大吼「丙你好膽賣走！」，則評價上有無不同？
      </div>

      <div class="p-4 sm:p-5 rounded-2xl bg-indigo-50/70 dark:bg-indigo-950/30 border border-indigo-200 dark:border-indigo-900/40 text-xs sm:text-sm font-serif text-slate-700 dark:text-slate-300 space-y-2 text-justify">
        <div class="font-bold text-indigo-900 dark:text-indigo-200 flex items-center gap-1.5">
          <span>🧭</span>
          <span>【小題導引】原書解析：</span>
        </div>
        <p class="indent-6 leading-relaxed">
          若一般人均無法探知乙有殺丙傾向，不宜過度限制甲的行為自由，甲不該當構成要件行為。反之，若一般人均可探知乙的殺人傾向，那麼交付西瓜刀無疑是在<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">促使乙犯罪</span>，則有限制甲行為自由的正當基礎。
        </p>
      </div>

      <!-- 四大天王劇院 (垂直堆疊) -->
      <div class="space-y-4 pt-1 font-serif">
        <div class="p-4 sm:p-5 rounded-2xl bg-blue-50/80 dark:bg-[#151c2d] border-l-4 border-l-blue-600 border border-blue-200/80 dark:border-blue-900/40 space-y-2 text-xs sm:text-sm">
          <div class="font-bold text-blue-950 dark:text-blue-200 flex items-center gap-1.5">
            <span>⚖️</span>
            <span>金毛大律師點評：中性業務行為的界限</span>
          </div>
          <p class="text-slate-700 dark:text-slate-200 leading-relaxed text-justify indent-6">
            常態商業銷售行為受憲法工作權保障。但是，當買家已經在大吼「丙你好膽賣走」，殺人犯意昭然若揭時，西瓜刀就不再只是「切水果的工具」，而是「殺人行兇之凶器」！此時老闆若仍遞上刀具，就是促使犯罪，構成刑法殺人罪之幫助犯！
          </p>
        </div>
      </div>
    </div>

    <!-- ──────────────── 案例 2-23【警察遺忘配槍案】(4-24) ──────────────── -->
    <div id="case-2-23-police-gun" class="scroll-mt-24 rounded-3xl bg-white dark:bg-[#121827] border border-slate-200/90 dark:border-white/10 p-6 sm:p-7 space-y-5 shadow-sm">
      <div class="flex items-center justify-between border-b border-slate-200/60 dark:border-white/10 pb-3 flex-wrap gap-2">
        <div class="flex items-center gap-2">
          <span class="px-2.5 py-1 rounded-xl bg-indigo-100 dark:bg-indigo-950/80 text-indigo-700 dark:text-indigo-300 font-mono text-xs font-black">
            案例 2-23
          </span>
          <h4 class="font-serif font-black text-slate-900 dark:text-white text-base sm:text-lg">
            【監督者保證義務】——警察執勤配槍遺忘車內仇殺案
          </h4>
        </div>
        <span class="text-xs font-mono text-slate-500 dark:text-slate-400">教材第 4-24 頁</span>
      </div>

      <div class="p-4 sm:p-5 rounded-2xl bg-slate-50 dark:bg-[#161f30] border-l-4 border-l-blue-600 border border-slate-200 dark:border-slate-800 text-xs sm:text-sm font-serif text-slate-800 dark:text-slate-200 leading-relaxed text-justify">
        警察甲開車執勤時搭載自己的朋友乙，甲暫時下車處理公務，卻將配槍遺忘在車內，乙趁機取甲的配槍，並利用該槍殺死恰巧路過的仇人丙。
      </div>

      <div class="p-4 sm:p-5 rounded-2xl bg-indigo-50/70 dark:bg-indigo-950/30 border border-indigo-200 dark:border-indigo-900/40 text-xs sm:text-sm font-serif text-slate-700 dark:text-slate-300 space-y-2 text-justify">
        <div class="font-bold text-indigo-900 dark:text-indigo-200 flex items-center gap-1.5">
          <span>🧭</span>
          <span>【小題導引】原書解析：</span>
        </div>
        <p class="indent-6 leading-relaxed">
          警察甲對配槍<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">負有監督者的保證義務</span>，必須防止他人接觸，今甲怠於履行義務便製造不容許的風險。且防止他人接觸配槍的規範目的在避免槍枝的誤用與濫用，今乙利用甲的配槍殺死丙<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">正是預設結果</span>，客觀構成要件該當。
        </p>
      </div>

      <!-- 四大天王劇院 (垂直堆疊) -->
      <div class="space-y-4 pt-1 font-serif">
        <div class="p-4 sm:p-5 rounded-2xl bg-emerald-50/80 dark:bg-[#13221c] border-l-4 border-l-emerald-600 border border-emerald-200/80 dark:border-emerald-900/40 space-y-2 text-xs sm:text-sm">
          <div class="font-bold text-emerald-950 dark:text-emerald-200 flex items-center gap-1.5">
            <span>🛡️</span>
            <span>德牧法規巡查官：危險物持有者之保證義務</span>
          </div>
          <p class="text-slate-700 dark:text-slate-200 leading-relaxed text-justify indent-6">
            槍砲彈藥刀械管制條例與警察人員使用警械規範明定警用槍彈屬高度危險物。警察甲具有監督管理之保證人地位，其將警槍留在無人看管的車內任由乙取得，違反防止他人接觸之作為義務。乙拿槍殺人恰好落在該規範欲防止的射程範圍內，甲該當過失致死罪之客觀構成要件！
          </p>
        </div>
      </div>
    </div>

    <!-- ──────────────── 案例 2-24【醫療錯誤診治案】(4-24) ──────────────── -->
    <div id="case-2-24-medical-malpractice" class="scroll-mt-24 rounded-3xl bg-white dark:bg-[#121827] border border-slate-200/90 dark:border-white/10 p-6 sm:p-7 space-y-5 shadow-sm">
      <div class="flex items-center justify-between border-b border-slate-200/60 dark:border-white/10 pb-3 flex-wrap gap-2">
        <div class="flex items-center gap-2">
          <span class="px-2.5 py-1 rounded-xl bg-indigo-100 dark:bg-indigo-950/80 text-indigo-700 dark:text-indigo-300 font-mono text-xs font-black">
            案例 2-24
          </span>
          <h4 class="font-serif font-black text-slate-900 dark:text-white text-base sm:text-lg">
            【醫療錯誤診治】——下毒急救不作為 vs 誤注劇毒作為案
          </h4>
        </div>
        <span class="text-xs font-mono text-slate-500 dark:text-slate-400">教材第 4-24 頁</span>
      </div>

      <div class="p-4 sm:p-5 rounded-2xl bg-slate-50 dark:bg-[#161f30] border-l-4 border-l-blue-600 border border-slate-200 dark:border-slate-800 text-xs sm:text-sm font-serif text-slate-800 dark:text-slate-200 leading-relaxed text-justify">
        甲基於殺人故意向乙下毒，乙中毒後送醫急救，<br>
        ㈠ 若醫師丙未依據醫療常規幫乙施打解毒劑，僅投以簡單腸胃藥物，乙最終毒發身亡。<br>
        ㈡ 若醫師丁不慎將劇毒當成解毒劑注入乙體內，導致乙因藥物反應而死亡。
      </div>

      <div class="p-4 sm:p-5 rounded-2xl bg-indigo-50/70 dark:bg-indigo-950/30 border border-indigo-200 dark:border-indigo-900/40 text-xs sm:text-sm font-serif text-slate-700 dark:text-slate-300 space-y-2 text-justify">
        <div class="font-bold text-indigo-900 dark:text-indigo-200 flex items-center gap-1.5">
          <span>🧭</span>
          <span>【小題導引】原書解析：</span>
        </div>
        <p class="indent-6 leading-relaxed">
          這類案例被稱作<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">醫療錯誤診治</span>，案例中甲製造或不排除「乙中毒死亡」風險，且不可想像不存在地導致乙死亡並無疑問，爭議在於規範目的審查。<br>
          <span class="font-bold">㈠ 當醫生的錯誤診治係以不作為呈現</span>，並不影響甲的規範目的審查，導致該風險依然有效且未生變種，<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">甲客觀構成要件該當</span>。<br>
          <span class="font-bold">㈡ 當醫生的錯誤診治係以作為呈現</span>，則必須詳加衡量有無風險失效與風險變種。案例中該風險雖然依然有效，卻轉變成「醫生誤注低毒」風險，由於此類風險轉變機率過低，<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">係風險變種而未實現構成要件結果歸責</span>，甲客觀構成要件不該當。
        </p>
      </div>

      <!-- 四大天王劇院 (垂直堆疊) -->
      <div class="space-y-4 pt-1 font-serif">
        <!-- 柴柴白話生活大解碼 -->
        <div class="p-5 rounded-2xl bg-amber-50/80 dark:bg-[#18181b] border-l-4 border-l-amber-500 border border-amber-200/80 dark:border-white/10 space-y-3">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-xl overflow-hidden shrink-0 border-2 border-amber-400 shadow-xs">
              <img src="images/shiba_law_professor.jpg" alt="柴柴法學教授" class="w-full h-full object-cover" style="object-position: center 20%; transform: scale(1.38);">
            </div>
            <div>
              <div class="font-black text-amber-950 dark:text-amber-200 text-xs sm:text-sm">🐾 柴柴法學教授 • 不作為 vs 作為之精準辨析</div>
              <div class="text-[10px] text-amber-700 dark:text-amber-400 font-mono">Prof. Shiba • Omission vs Action Distinction</div>
            </div>
          </div>

          <div class="text-xs sm:text-sm text-slate-700 dark:text-slate-200 space-y-2 leading-relaxed text-justify">
            <p class="indent-6">
              這題是國考超常出現的「第三人醫療過失介入」大考點！大家務必牢記這套判準：
            </p>
            <p class="indent-6">
              在 ㈠ 的情況，醫生只是「袖手旁觀／消極給錯普通藥」，原本甲下的毒藥依然在乙體內肆虐，毒死乙的正是甲一開始製造的那個毒！所以甲的風險沒有失效，甲要為殺人既遂負全責！
            </p>
            <p class="indent-6">
              但在 ㈡ 的情況，醫生積極「打入新劇毒」，害死乙的是醫生注入的新毒藥！甲原本下的毒等於被醫生的致命失誤給攔截變種了，這屬於極其罕見的「風險變種」，甲只要為殺人未遂負責即可！
            </p>
          </div>
        </div>

        <!-- 邊牧審判長定錨與 2026 動態 -->
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
              🔨 <strong>【實體法定讞】</strong>：第三人醫療錯誤診治介入案件，應嚴格區分「消極不作為」與「積極作為」。消極不作為不阻斷原行為人之風險實現，原行為人該當既遂；積極作為產生極罕見新致死原因者，成立風險變種，阻卻原行為人之結果歸責，原行為人僅論未遂！
            </p>
            <p class="indent-6">
              💡 <strong>【國考答題定錨】</strong>：考生在作答案例 2-24 時，必須先寫條件因果（不可想像其不存在），再於規範目的審查中，清晰分列「㈠ 不作為：風險未失效、未變種」與「㈡ 作為：風險變種中斷結果歸責」，層次井然必獲閱卷老師青睞！
            </p>

            <div class="p-3 rounded-xl bg-slate-800/90 border border-amber-400/30 space-y-1 text-xs">
              <div class="font-bold text-amber-300 flex items-center gap-1.5">
                <span>📅</span>
                <span>2026 最新法條動態備註：</span>
              </div>
              <p class="text-slate-300 leading-relaxed">
                刑法第 271 條（殺人罪）至 2026 年維持穩定。司法實務（如 102 台上 2682 等判決）對醫療過失介入是否中斷因果，多從「異常獨立因果關係」與「通常經驗之因果歷程偏離」檢驗，學理之客觀歸責風險變種理論已成為司律二試判斷之絕對主流！
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>

  <!-- ==================== 底部前後單元導航條 ==================== -->
  <div class="flex items-center justify-between p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-indigo-50/80 via-white to-blue-50/80 dark:from-[#121827] dark:to-[#162035] border border-indigo-200/80 dark:border-indigo-900/40 shadow-xs flex-wrap gap-3 font-serif">
    <button onclick="switchView('part2-ch2-sec2')" class="px-4 py-2 rounded-xl bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 font-bold text-xs flex items-center gap-1.5 border border-slate-200 dark:border-slate-700 cursor-pointer">
      <span>← 上一單元：第二篇 第二章 第二節 結果歸責</span>
    </button>
    <div class="flex items-center gap-2 flex-wrap">
      <button onclick="switchView('cover')" class="px-4 py-2 rounded-xl bg-amber-50 dark:bg-amber-950/40 text-amber-800 dark:text-amber-200 hover:bg-amber-100 dark:hover:bg-amber-900/50 font-bold text-xs flex items-center gap-1.5 border border-amber-300 dark:border-amber-700/60 cursor-pointer">
        <span>🏠 書籍首頁</span>
      </button>
      <button onclick="switchView('part2')" class="px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 font-bold text-xs flex items-center gap-1.5 transition-all shadow-xs cursor-pointer">
        <span>第二篇導讀</span>
      </button>
      <button onclick="switchView('part2-ch2-special2')" class="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs flex items-center gap-1.5 transition-all shadow-xs cursor-pointer">
        <span>👉 下一單元：專題研究二 合法替代行為 →</span>
      </button>
    </div>
  </div>

</div>
`;
