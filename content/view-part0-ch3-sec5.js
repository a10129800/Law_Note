// =========================================================================
// 《圖說刑法總則【圖說系列】知識庫閱覽器》視圖模組 (view-part0-ch3-sec5.js)
// 第零篇 刑法的運作原理・第三章 刑法的法律效果
// 第五節 保安處分（教材第 2-37 ～ 2-38 頁 全節完結・第三章大結局）
// 遵循 AGENTS.md 憲法：Zero-CORS 本機秒開、單欄垂直堆疊、純紅底線重點、犬系四大天王法學劇院
// =========================================================================

window.APP_VIEWS = window.APP_VIEWS || {};

window.APP_VIEWS['viewPart0Ch3Sec5'] = `
        <div id="viewPart0Ch3Sec5" class="fade-enter space-y-8 max-w-4xl mx-auto pb-16">

          <!-- 頂部導航麵包屑 -->
          <nav aria-label="Breadcrumb" class="text-xs font-mono text-slate-500 dark:text-slate-400 flex items-center gap-2">
            <span class="hover:text-rose-600 cursor-pointer" onclick="switchView('part0')">第零篇 刑法的運作原理</span>
            <span>/</span>
            <span class="hover:text-rose-600 cursor-pointer" onclick="switchView('part0-ch3')">第三章 刑法的法律效果</span>
            <span>/</span>
            <span class="text-rose-600 dark:text-rose-400 font-bold">第五節 保安處分</span>
          </nav>

          <!-- 節大標題與規格卡片 (教材 1:1 復刻風格) -->
          <header class="relative p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-rose-50/70 via-white to-amber-50/40 dark:from-slate-900 dark:via-slate-900/90 dark:to-rose-950/20 border border-rose-200/60 dark:border-rose-900/40 shadow-sm">
            <div class="flex flex-wrap items-center justify-between gap-3 mb-4">
              <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-rose-100/80 dark:bg-rose-950/60 text-rose-800 dark:text-rose-300 border border-rose-200/60 dark:border-rose-800/40">
                <span class="w-2 h-2 rounded-full bg-rose-500 animate-pulse"></span>
                <span>教材第 2-37 ～ 2-38 頁（第三章全章圓滿完結）</span>
              </div>
              <div class="flex items-center gap-2">
                <span class="text-xs font-mono text-slate-500 dark:text-slate-400">P. 2-37 ~ 2-38</span>
                <span class="px-2 py-0.5 text-[11px] font-mono rounded bg-slate-200/60 dark:bg-slate-800 text-slate-700 dark:text-slate-300">§ 86～§ 95</span>
              </div>
            </div>

            <div class="space-y-2">
              <div class="inline-block px-2.5 py-1 text-xs font-mono font-bold rounded-md bg-rose-500 text-white shadow-xs">
                第五節
              </div>
              <h1 class="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight font-serif">
                保安處分
              </h1>
              <p class="text-sm sm:text-base text-slate-600 dark:text-slate-300 font-serif leading-relaxed pt-1">
                刑法法律效果的第二軌：社會防衛與特別預防機制。透析拘束人身自由與非拘束人身自由兩大體系，兼論鑑定程序闕如與合憲性審查界限。
              </p>
            </div>
          </header>

          <!-- 前言導讀：雙軌制裁體系與社會防衛措施 -->
          <section id="sec-p0ch3-sec5-intro" class="p-6 sm:p-7 rounded-2xl bg-white dark:bg-[#111726] border-l-8 border-l-rose-500 border border-slate-200 dark:border-white/[0.08] shadow-sm space-y-4">
            <div class="flex items-center justify-between flex-wrap gap-2">
              <div class="flex items-center gap-2.5">
                <span class="text-xl">🛡️</span>
                <h2 class="text-lg font-bold text-slate-900 dark:text-white">
                  保安處分前言：雙軌制裁體系與特別預防目的
                </h2>
              </div>
              <span class="text-xs font-mono px-2 py-0.5 rounded bg-rose-50 dark:bg-rose-950/50 text-rose-700 dark:text-rose-300 font-bold border border-rose-200 dark:border-rose-900/40">
                教材第 2-37 頁 原文
              </span>
            </div>

            <div class="space-y-3 font-serif text-sm sm:text-base leading-relaxed text-slate-700 dark:text-slate-300 text-justify">
              <p>
                保安處分與刑罰並稱<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">「雙軌制裁體系」</span>，均為現行刑法承認的法律效果。
              </p>
              <p>
                保安處分是針對特定行為人的<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">社會危險性</span>所設的社會防衛措施，乃<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">特別預防下的產物</span>。
              </p>
              <p>
                刑法區分<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">「拘束人身自由的保安處分」</span>與<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">「非拘束人身自由的保安處分」</span>兩者，前者與刑罰等同視之，有<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">罪刑法定原則</span>與<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">從舊從輕原則</span>的嚴格適用。
              </p>
              <p>
                但保安處分制度的運作，取決於是否有專業的鑑定人，現行法雖然增列許多實質要件，惟程序上應由何人依照何程序來認定卻付之闕如，<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">此乃亟待改善之處</span>。
              </p>
            </div>

            <!-- 雙軌制裁架構卡 -->
            <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-2">
              <span class="text-xs font-mono font-bold text-rose-600 dark:text-rose-400 block">📌 刑法雙軌制裁體系之雙重屬性對比</span>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 text-xs sm:text-sm">
                <div class="p-3 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 space-y-1">
                  <span class="font-bold text-blue-600 dark:text-blue-400 font-mono block">⚖️ 第一軌 • 刑罰體系</span>
                  <p class="text-slate-600 dark:text-slate-300 text-xs">
                    以行為人之<strong>責任</strong>為基礎，評價過去已發生之不法與罪責，重在<strong>應報與一般預防</strong>。
                  </p>
                </div>
                <div class="p-3 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 space-y-1">
                  <span class="font-bold text-rose-600 dark:text-rose-400 font-mono block">🛡️ 第二軌 • 保安處分體系</span>
                  <p class="text-slate-600 dark:text-slate-300 text-xs">
                    以行為人之<strong>社會危險性</strong>為基礎，針對未來可能發生之危害進行防衛與矯治，重在<strong>特別預防與社會防衛</strong>。
                  </p>
                </div>
              </div>
            </div>
          </section>

          <!-- 互動體系圖解：保安處分雙軌分類樹 -->
          <section id="sec-p0ch3-sec5-tree" class="p-6 sm:p-7 rounded-2xl bg-white dark:bg-[#111726] border-l-8 border-l-blue-600 border border-slate-200 dark:border-white/[0.08] shadow-sm space-y-5">
            <div class="flex items-center justify-between flex-wrap gap-2">
              <div class="flex items-center gap-2.5">
                <span class="text-xl">📊</span>
                <h3 class="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                  保安處分全景體系架構圖（教材第 2-37 ～ 2-38 頁）
                </h3>
              </div>
              <span class="text-xs font-mono px-2.5 py-1 rounded bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300 border border-blue-200/60 dark:border-blue-800/40">
                雙軌分類樹
              </span>
            </div>

            <!-- 手機橫向滾動容器 -->
            <div class="rounded-xl overflow-x-auto custom-scrollbar p-1">
              <div class="mindmap-canvas min-w-[560px] sm:min-w-full space-y-4">
                
                <!-- 頂層樞紐 -->
                <div class="p-4 rounded-xl bg-gradient-to-r from-rose-500 via-rose-600 to-indigo-600 text-white text-center shadow-md">
                  <div class="text-xs font-mono font-bold tracking-widest uppercase opacity-80">DUAL-TRACK SANCTIONS SYSTEM</div>
                  <div class="text-base sm:text-lg font-black tracking-wide">刑法保安處分雙軌體系（特別預防・社會防衛）</div>
                </div>

                <!-- 兩大分支 -->
                <div class="grid grid-cols-2 gap-4">
                  
                  <!-- 左翼：拘束人身自由 -->
                  <div class="p-4 rounded-xl bg-rose-50/70 dark:bg-rose-950/30 border-2 border-rose-300 dark:border-rose-800 space-y-2">
                    <div class="flex items-center justify-between">
                      <span class="font-bold text-rose-800 dark:text-rose-300 text-sm">一、拘束人身自由（等同刑罰審查）</span>
                      <span class="text-[10px] font-mono px-1.5 py-0.5 rounded bg-rose-200 dark:bg-rose-900 text-rose-900 dark:text-rose-200 font-bold">嚴格罪刑法定</span>
                    </div>
                    <p class="text-xs text-slate-600 dark:text-slate-400">
                      剝奪自由強度等同刑罰，嚴格適用罪刑法定與從舊從輕原則（刑法 § 1 但書、§ 2 Ⅰ）。
                    </p>
                    <ul class="space-y-1.5 text-xs font-medium text-slate-700 dark:text-slate-300 pt-1">
                      <li class="p-2 rounded bg-white dark:bg-slate-900 border border-rose-200 dark:border-rose-900 flex items-center justify-between">
                        <span>1. 感化教育（§ 86）</span>
                        <span class="text-[10px] text-slate-500 font-mono">未滿18歲少年</span>
                      </li>
                      <li class="p-2 rounded bg-white dark:bg-slate-900 border border-rose-200 dark:border-rose-900 flex items-center justify-between">
                        <span>2. 監護處分（§ 87）</span>
                        <span class="text-[10px] text-slate-500 font-mono">無/限制責任能力</span>
                      </li>
                      <li class="p-2 rounded bg-white dark:bg-slate-900 border border-rose-200 dark:border-rose-900 flex items-center justify-between">
                        <span>3. 禁戒處分（§ 88、§ 89）</span>
                        <span class="text-[10px] text-slate-500 font-mono">毒癮・酗酒成癮</span>
                      </li>
                      <li class="p-2 rounded bg-white dark:bg-slate-900 border border-rose-200 dark:border-rose-900 flex items-center justify-between">
                        <span>4. 強制工作（§ 90）</span>
                        <span class="text-[10px] text-rose-600 dark:text-rose-400 font-bold font-mono">已宣告違憲失效</span>
                      </li>
                      <li class="p-2 rounded bg-white dark:bg-slate-900 border border-rose-200 dark:border-rose-900 flex items-center justify-between">
                        <span>5. 強制治療（§ 91、§ 91-1）</span>
                        <span class="text-[10px] text-slate-500 font-mono">花柳病・性犯罪</span>
                      </li>
                    </ul>
                  </div>

                  <!-- 右翼：非拘束人身自由 -->
                  <div class="p-4 rounded-xl bg-blue-50/70 dark:bg-blue-950/30 border-2 border-blue-300 dark:border-blue-800 space-y-2">
                    <div class="flex items-center justify-between">
                      <span class="font-bold text-blue-800 dark:text-blue-300 text-sm">二、非拘束人身自由（緩和措施）</span>
                      <span class="text-[10px] font-mono px-1.5 py-0.5 rounded bg-blue-200 dark:bg-blue-900 text-blue-900 dark:text-blue-200 font-bold">從新原則</span>
                    </div>
                    <p class="text-xs text-slate-600 dark:text-slate-400">
                      未實質限制人身行動自由，重在引導合規生活或主權行政管轄（刑法 § 2 Ⅱ 適用裁判時法）。
                    </p>
                    <ul class="space-y-1.5 text-xs font-medium text-slate-700 dark:text-slate-300 pt-1">
                      <li class="p-2 rounded bg-white dark:bg-slate-900 border border-blue-200 dark:border-blue-900 flex items-center justify-between">
                        <span>1. 保護管束（§ 92、§ 93）</span>
                        <span class="text-[10px] text-slate-500 font-mono">委託特定機構/替代手段</span>
                      </li>
                      <li class="p-2 rounded bg-white dark:bg-slate-900 border border-blue-200 dark:border-blue-900 flex items-center justify-between">
                        <span>2. 驅逐出境（§ 95）</span>
                        <span class="text-[10px] text-slate-500 font-mono">限不具本國籍外國人</span>
                      </li>
                    </ul>
                    <div class="p-2.5 rounded-lg bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800/50 text-[11px] text-amber-900 dark:text-amber-200 space-y-1">
                      <span class="font-bold block">💡 學說精華點評：</span>
                      <p>
                        保護管束可替代其他拘束自由保安處分；驅逐出境學說主張宜逕由行政法規撤銷居留，無須納入刑法。
                      </p>
                    </div>
                  </div>

                </div>

              </div>
            </div>
          </section>

          <!-- 一、拘束人身自由的保安處分 (五大類型 1:1 逐條精讀) -->
          <section id="sec-p0ch3-sec5-detention" class="p-6 sm:p-7 rounded-2xl bg-white dark:bg-[#111726] border-l-8 border-l-rose-500 border border-slate-200 dark:border-white/[0.08] shadow-sm space-y-6">
            <div class="flex items-center justify-between flex-wrap gap-2">
              <div class="flex items-center gap-2.5">
                <span class="text-xl">🔒</span>
                <h2 class="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                  一、拘束人身自由的保安處分（教材第 2-37 ～ 2-38 頁）
                </h2>
              </div>
              <span class="text-xs font-mono px-2 py-0.5 rounded bg-rose-50 dark:bg-rose-950/50 text-rose-700 dark:text-rose-300 font-bold border border-rose-200 dark:border-rose-900/40">
                等同刑罰看待
              </span>
            </div>

            <div class="space-y-4">
              
              <!-- (一) 感化教育 (§ 86) -->
              <div class="p-4 sm:p-5 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 space-y-2">
                <div class="flex items-center justify-between flex-wrap gap-2">
                  <div class="flex items-center gap-2">
                    <span class="font-bold text-slate-900 dark:text-white text-sm sm:text-base">
                      (一) 感化教育（§ 86）
                    </span>
                    <span class="text-xs font-mono px-2 py-0.5 rounded bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold">少年保護</span>
                  </div>
                  <span class="text-xs font-mono text-slate-500 dark:text-slate-400">教材第 2-37 頁 原文</span>
                </div>
                <div class="font-serif text-sm leading-relaxed text-slate-700 dark:text-slate-300 text-justify space-y-1.5">
                  <p>
                    乃針對<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">未滿18歲的少年</span>，施以感化以<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">矯正其惡性</span>的保安處分。
                  </p>
                  <p>
                    學說上有認為<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">少年事件處理法已經有相同之規定</span>，故刑法中之規定<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">應可刪除</span>。
                  </p>
                </div>
              </div>

              <!-- (二) 監護 (§ 87) -->
              <div class="p-4 sm:p-5 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 space-y-2">
                <div class="flex items-center justify-between flex-wrap gap-2">
                  <div class="flex items-center gap-2">
                    <span class="font-bold text-slate-900 dark:text-white text-sm sm:text-base">
                      (二) 監護（§ 87）
                    </span>
                    <span class="text-xs font-mono px-2 py-0.5 rounded bg-blue-100 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 font-bold">醫療保護處分</span>
                  </div>
                  <span class="text-xs font-mono text-slate-500 dark:text-slate-400">教材第 2-37 頁 原文</span>
                </div>
                <div class="font-serif text-sm leading-relaxed text-slate-700 dark:text-slate-300 text-justify space-y-1.5">
                  <p>
                    乃針對因<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">精神障礙或其他心智欠缺原因而成無責任能力或限制責任能力之人</span>，所為之治療、保護處分。
                  </p>
                  <p>
                    行為人必須是因為<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">精神上的異常或特殊的精神上困擾</span>，而導致其控制能力完全喪失或受到嚴重限制之情形。
                  </p>
                  <p class="text-slate-600 dark:text-slate-400 bg-amber-50/60 dark:bg-amber-950/30 p-2.5 rounded-lg border border-amber-200/60 dark:border-amber-900/40">
                    ⚠️ <strong>排除要件警示</strong>：若非源自於精神方面的問題，而是因為<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">毒癮、藥癮或酒癮</span>而引發不法行為，<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">無本條之適用</span>。
                  </p>
                </div>
              </div>

              <!-- (三) 禁戒 (§ 88、§ 89) -->
              <div class="p-4 sm:p-5 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 space-y-2">
                <div class="flex items-center justify-between flex-wrap gap-2">
                  <div class="flex items-center gap-2">
                    <span class="font-bold text-slate-900 dark:text-white text-sm sm:text-base">
                      (三) 禁戒（§ 88、§ 89）
                    </span>
                    <span class="text-xs font-mono px-2 py-0.5 rounded bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 font-bold">戒癮戒毒</span>
                  </div>
                  <span class="text-xs font-mono text-slate-500 dark:text-slate-400">教材第 2-37 頁 原文</span>
                </div>
                <div class="font-serif text-sm leading-relaxed text-slate-700 dark:text-slate-300 text-justify">
                  <p>
                    針對<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">施毒或酗酒成癮之犯罪人</span>，所予以戒除其癮之處分。
                  </p>
                </div>
              </div>

              <!-- (四) 強制工作 (§ 90) -->
              <div class="p-4 sm:p-5 rounded-xl bg-rose-50/50 dark:bg-rose-950/20 border-2 border-rose-200 dark:border-rose-900/60 space-y-2">
                <div class="flex items-center justify-between flex-wrap gap-2">
                  <div class="flex items-center gap-2">
                    <span class="font-bold text-slate-900 dark:text-white text-sm sm:text-base">
                      (四) 強制工作（§ 90）
                    </span>
                    <span class="text-xs font-mono px-2 py-0.5 rounded bg-rose-200 dark:bg-rose-900 text-rose-800 dark:text-rose-200 font-bold">重磅批判・違憲宣告</span>
                  </div>
                  <span class="text-xs font-mono text-slate-500 dark:text-slate-400">教材第 2-37 頁 原文</span>
                </div>
                <div class="font-serif text-sm leading-relaxed text-slate-700 dark:text-slate-300 text-justify space-y-2">
                  <p>
                    針對<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">遊手好閒且有犯罪習慣者</span>，所施以的強制勞動處分。
                  </p>
                  <div class="p-3 rounded-lg bg-white dark:bg-slate-900 border border-rose-300 dark:border-rose-800 space-y-1">
                    <span class="text-xs font-mono font-bold text-rose-600 dark:text-rose-400 block">📢 作者原書重磅針砭：</span>
                    <p class="text-slate-800 dark:text-slate-200 italic">
                      不過將<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">「懶惰、遊蕩」</span>作為犯罪原因，是一種沒有根據的說法；又將<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">「懶惰、遊蕩」作為一種可以治療的病徵</span>，更是<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">荒謬的立論</span>。
                    </p>
                  </div>
                </div>
              </div>

              <!-- (五) 強制治療 (§ 91、§ 91之1) -->
              <div class="p-4 sm:p-5 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 space-y-3">
                <div class="flex items-center justify-between flex-wrap gap-2">
                  <div class="flex items-center gap-2">
                    <span class="font-bold text-slate-900 dark:text-white text-sm sm:text-base">
                      (五) 強制治療（§ 91、§ 91之1）
                    </span>
                    <span class="text-xs font-mono px-2 py-0.5 rounded bg-purple-100 dark:bg-purple-950/60 text-purple-700 dark:text-purple-300 font-bold">傳染病 vs 性犯罪</span>
                  </div>
                  <span class="text-xs font-mono text-slate-500 dark:text-slate-400">教材第 2-38 頁 原文</span>
                </div>
                <div class="font-serif text-sm leading-relaxed text-slate-700 dark:text-slate-300 text-justify space-y-2">
                  <p>
                    針對特定犯罪行為人，所予以<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">治療生理傳染疾病或心理疾病</span>的處分。所謂特定犯罪行為人有兩種：
                  </p>
                  <ul class="list-disc list-inside space-y-1.5 pl-1 text-xs sm:text-sm">
                    <li>
                      <strong>第一種</strong>：是<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">「犯傳染花柳病癤瘋病罪，尚未治癒者」</span>，於<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">刑前治療</span>，並至治癒時為止。
                    </li>
                    <li>
                      <strong>第二種</strong>：是<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">「犯妨害性自主罪、妨害風化罪及其特別法之罪，而有再犯之危險者」</span>，於<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">刑期屆滿前治療</span>，並至評估再犯危險顯著降低為止。
                    </li>
                  </ul>
                  <div class="p-3 rounded-lg bg-amber-50/70 dark:bg-amber-950/30 border border-amber-300 dark:border-amber-800 space-y-1">
                    <span class="text-xs font-mono font-bold text-amber-800 dark:text-amber-300 block">⚖️ 學說合憲性重大質疑：</span>
                    <p class="text-slate-800 dark:text-slate-200">
                      學說上認為第二種情形等同<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">絕對不定期刑的效果</span>，法院可以不經一般的正當審判程序，僅憑評估鑑定人員的報告，輕易地以裁定單面宣告不定期保安處分，<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">因此有違憲之虞</span>。
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </section>

          <!-- 二、非拘束人身自由的保安處分 (兩大類型 1:1 逐條精讀) -->
          <section id="sec-p0ch3-sec5-non-detention" class="p-6 sm:p-7 rounded-2xl bg-white dark:bg-[#111726] border-l-8 border-l-blue-600 border border-slate-200 dark:border-white/[0.08] shadow-sm space-y-6">
            <div class="flex items-center justify-between flex-wrap gap-2">
              <div class="flex items-center gap-2.5">
                <span class="text-xl">🕊️</span>
                <h2 class="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                  二、非拘束人身自由的保安處分（教材第 2-38 頁）
                </h2>
              </div>
              <span class="text-xs font-mono px-2 py-0.5 rounded bg-blue-50 dark:bg-blue-950/50 text-blue-700 dark:text-blue-300 font-bold border border-blue-200 dark:border-blue-900/40">
                緩和防衛手段
              </span>
            </div>

            <div class="space-y-4">
              
              <!-- (一) 保護管束 (§ 92、§ 93) -->
              <div class="p-4 sm:p-5 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 space-y-2">
                <div class="flex items-center justify-between flex-wrap gap-2">
                  <div class="flex items-center gap-2">
                    <span class="font-bold text-slate-900 dark:text-white text-sm sm:text-base">
                      (一) 保護管束（§ 92、§ 93）
                    </span>
                    <span class="text-xs font-mono px-2 py-0.5 rounded bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 font-bold">替代手段</span>
                  </div>
                  <span class="text-xs font-mono text-slate-500 dark:text-slate-400">教材第 2-38 頁 原文</span>
                </div>
                <div class="font-serif text-sm leading-relaxed text-slate-700 dark:text-slate-300 text-justify space-y-1.5">
                  <p>
                    乃委託、指定特定的機構或個人來<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">保護、約束犯罪行為人</span>，使其營正常、合法之生活。
                  </p>
                  <p class="font-bold text-blue-700 dark:text-blue-300">
                    保護管束得作為其他保安處分的<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">替代手段</span>。
                  </p>
                </div>
              </div>

              <!-- (二) 驅逐出境 (§ 95) -->
              <div class="p-4 sm:p-5 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 space-y-2">
                <div class="flex items-center justify-between flex-wrap gap-2">
                  <div class="flex items-center gap-2">
                    <span class="font-bold text-slate-900 dark:text-white text-sm sm:text-base">
                      (二) 驅逐出境（§ 95）
                    </span>
                    <span class="text-xs font-mono px-2 py-0.5 rounded bg-amber-100 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300 font-bold">外國人處分</span>
                  </div>
                  <span class="text-xs font-mono text-slate-500 dark:text-slate-400">教材第 2-38 頁 原文</span>
                </div>
                <div class="font-serif text-sm leading-relaxed text-slate-700 dark:text-slate-300 text-justify space-y-1.5">
                  <p>
                    指將受有期徒刑以上刑之宣告之<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">外國人</span>，在刑執行完畢或赦免後，強制其離開我國境內之處分。
                  </p>
                  <p>
                    所謂外國人，<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">限於不具本國國籍之外國人</span>。
                  </p>
                  <p class="text-slate-600 dark:text-slate-400 italic">
                    學說上有認為本處分只要透過相關行政法規，<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">撤銷外國人居留權即可</span>，無須作為刑法上保安處分之手段，<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">應予以刪除</span>。
                  </p>
                </div>
              </div>

            </div>
          </section>

          <!-- 🐣 小白秒懂專區・白話文大翻譯 -->
          <section id="sec-p0ch3-sec5-novice" class="rounded-2xl p-5 sm:p-6 bg-gradient-to-br from-amber-50 via-orange-50/80 to-yellow-100 dark:from-[#2a1c0c] border-2 border-amber-400 dark:border-amber-500 border-l-[8px] border-l-amber-500 shadow-md shadow-amber-500/10 space-y-4">
            <div class="flex items-center justify-between flex-wrap gap-2 border-b border-amber-200 dark:border-amber-900/60 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-2xl animate-bounce">🐣</span>
                <div>
                  <div class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-white text-[11px] font-black shadow-xs">
                    <span>💡 零基礎秒懂專區</span><span>•</span><span>白話文大翻譯</span>
                  </div>
                  <h4 class="text-base sm:text-lg font-black text-amber-950 dark:text-amber-100 pt-0.5">
                    刑罰與保安處分到底差在哪？「罰過去」vs「防未來」！
                  </h4>
                </div>
              </div>
            </div>

            <!-- 一句話白話金句 -->
            <div class="p-4 rounded-xl bg-white dark:bg-slate-900 border-2 border-amber-300 dark:border-amber-700 space-y-1">
              <span class="text-xs font-mono font-bold text-amber-700 dark:text-amber-400 block">📢 一句話大白話翻譯</span>
              <p class="font-serif text-sm sm:text-base font-bold text-slate-800 dark:text-slate-100 leading-relaxed">
                👉「<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">刑罰</span>是因為你昨天幹了壞事，國家依法賞你一頓板子；<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">保安處分</span>是怕你明天又發作失控，國家幫你送醫、戒毒或矯正，不讓危險炸彈在路上亂晃！」
              </p>
            </div>

            <!-- 生活日常比喻 -->
            <div class="space-y-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-serif leading-relaxed">
              <p>
                <strong>🎲 生活小白劇場：生病的猛獸與鐵籠比喻</strong><br>
                想像鄰居家養了一隻狂犬病發作的大狗咬傷人。把狗關進籠子、打疫苗隔離治療，不是為了「報仇」懲罰牠，而是因為「牠現在有危險性，放出來大家都會遭殃」——這就是保安處分（特別預防）！
              </p>
              <p>
                <strong>⚠️ 但最危險的陷阱在哪裡？</strong><br>
                如果政府打著「為了保護大家安全」或「為了治好你」的名義，就可以隨便把你關進精神病院或戒治所，而且「什麼時候治好由我說了算」，那不就等於<strong>實質上的無期徒刑</strong>嗎？！所以大法官釋字第 812 號廢止了強制工作、釋字第 799 號限制了性犯罪強制治療，要求拘束人身自由的保安處分<strong>一定要嚴格講究程序正義，絕不能無限期關押</strong>！
              </p>
            </div>
          </section>

          <!-- ══════════════════════════════════════════════════════════ -->
          <!-- 案例研習：犬系四大天王五位一體法學劇院（重大爭點特審法庭） -->
          <!-- 遵循 AGENTS.md 嚴格單欄垂直堆疊規範，嚴禁並排！ -->
          <!-- ══════════════════════════════════════════════════════════ -->
          <section id="sec-p0ch3-sec5-theatre" class="p-6 sm:p-7 rounded-2xl bg-white dark:bg-[#111726] border-l-8 border-l-purple-600 border border-slate-200 dark:border-white/[0.08] shadow-sm space-y-6">
            
            <div class="flex items-center justify-between flex-wrap gap-2 border-b border-purple-200 dark:border-purple-900/60 pb-3">
              <div class="flex items-center gap-2.5">
                <span class="text-2xl">🏛️</span>
                <div>
                  <h3 class="text-lg sm:text-xl font-black text-slate-900 dark:text-white">
                    犬系法學四大天王五位一體法學劇院：保安處分之合憲性防線特審
                  </h3>
                  <span class="text-xs font-mono text-purple-600 dark:text-purple-400">
                    SPECIAL MOOT COURT • 釋字 812 號強制工作違憲 ＆ 釋字 799 號強制治療定期限
                  </span>
                </div>
              </div>
              <span class="text-xs font-mono px-2.5 py-1 rounded bg-purple-50 dark:bg-purple-950/60 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-800 font-bold">
                #憲法法庭定錨
              </span>
            </div>

            <!-- 單欄垂直堆疊容器 (AGENTS.md 第 5 點規範：space-y-3 單欄垂直排版) -->
            <div class="space-y-4">

              <!-- 1. ⚔️ 原被告/檢控辯護法庭正面言詞辯論（法庭對決區域） -->
              <div class="p-4 sm:p-5 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-4">
                <div class="flex items-center justify-between border-b border-slate-200 dark:border-slate-700 pb-2">
                  <span class="text-xs font-mono font-bold text-slate-500 dark:text-slate-400">
                    ⚔️ 法庭正面言詞辯論：社會防衛特別預防 vs 人身自由比例原則
                  </span>
                  <span class="text-[11px] font-mono px-2 py-0.5 rounded bg-rose-100 dark:bg-rose-950/60 text-rose-700 dark:text-rose-300 font-bold">
                    控辯交鋒
                  </span>
                </div>

                <!-- 檢察官控方主張 -->
                <div class="flex items-start gap-3">
                  <div class="w-10 h-10 rounded-xl overflow-hidden border-2 border-rose-400 shrink-0 shadow-xs">
                    <img src="images/prosecutor_fox.jpg" alt="公訴檢察官赤狐女律師" class="w-full h-full object-cover" style="object-position: center 20%; transform: scale(1.35);"/>
                  </div>
                  <div class="space-y-1">
                    <div class="flex items-center gap-2">
                      <span class="font-bold text-xs sm:text-sm text-slate-900 dark:text-white">公訴檢察官 赤狐女律師</span>
                      <span class="text-[10px] font-mono px-1.5 py-0.2 rounded bg-rose-50 text-rose-600 dark:bg-rose-950/50 dark:text-rose-300">控方主張</span>
                    </div>
                    <p class="font-serif text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed text-justify">
                      「審判長！社會大眾對性犯罪、吸毒成癮與具再犯高危險性之慣犯深感惶恐！保安處分本非以應報為目的，而是基於<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">社會防衛與特別預防</span>，若未達再犯危險顯著降低或治癒，任由未癒之危險行為人重返社會，無異視被害人生命法益於無物！檢方堅決請求依現行法宣告拘束人身自由保安處分，防杜社會危害！」
                    </p>
                  </div>
                </div>

                <!-- 辯護人辯方抗辯 -->
                <div class="flex items-start gap-3 pt-2 border-t border-slate-200 dark:border-slate-800">
                  <div class="w-10 h-10 rounded-xl overflow-hidden border-2 border-amber-400 shrink-0 shadow-xs">
                    <img src="images/golden_case_attorney.jpg" alt="金毛首席辯護大律師" class="w-full h-full object-cover" style="object-position: center 20%; transform: scale(1.35);"/>
                  </div>
                  <div class="space-y-1">
                    <div class="flex items-center gap-2">
                      <span class="font-bold text-xs sm:text-sm text-slate-900 dark:text-white">辯護人 金毛大律師</span>
                      <span class="text-[10px] font-mono px-1.5 py-0.2 rounded bg-amber-50 text-amber-700 dark:bg-amber-950/50 dark:text-amber-300">辯方防線</span>
                    </div>
                    <p class="font-serif text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed text-justify">
                      「反對檢察官的突襲！國家絕不能打著『為你好、為社會好』的特別預防幌子，將人身自由無限期剝奪！拘束人身自由之保安處分在實質侵害強度上<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">與刑罰別無二致</span>，必須嚴格恪遵罪刑法定、從舊從輕與正當法律程序！如作者書中所痛斥：『將懶惰遊蕩當作病徵甚至強制勞動，立論極其荒謬』，已遭大法官釋字第 812 號宣判違憲！性犯罪強制治療亦不得以不經一般審判程序之行政裁定宣告實質不定期刑！」
                    </p>
                  </div>
                </div>
              </div>

              <!-- 2. 🐾 柴柴法學教授 • 白話生活大解碼 -->
              <div class="p-4 sm:p-5 rounded-xl bg-amber-50/50 dark:bg-amber-950/20 border border-amber-300/60 dark:border-amber-800/50 space-y-3">
                <div class="flex items-center gap-3">
                  <div class="w-10 h-10 rounded-xl overflow-hidden border-2 border-amber-400 shrink-0 shadow-xs">
                    <img src="images/shiba_law_professor.jpg" alt="柴柴法學教授" class="w-full h-full object-cover" style="object-position: center 20%; transform: scale(1.38);"/>
                  </div>
                  <div>
                    <div class="font-bold text-xs sm:text-sm text-amber-950 dark:text-amber-200">
                      🐾 柴柴法學教授 • 白話生活大解碼
                    </div>
                    <div class="text-[11px] font-mono text-amber-700 dark:text-amber-400">
                      Prof. Shiba's Core Doctrine
                    </div>
                  </div>
                </div>

                <div class="font-serif text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed space-y-2 text-justify">
                  <p>
                    同學們請看清楚：刑法在第三章的體系安排中，先講完法定刑、處斷刑、宣告刑與執行刑這條「刑罰本軌」後，壓軸登場的就是<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">「保安處分」這條第二軌</span>。
                  </p>
                  <p>
                    請特別記住：刑罰有「罪責上限」的保護（不管行為人再壞，偷一條巧克力最多只能判半年，不能判死刑）；但保安處分如果沒有憲法煞車，國家就會說「因為你還沒被治好，所以我要把你關一輩子」，這就是作者點出<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">「等同絕對不定期刑、有違憲之虞」</span>的核心痛點！
                  </p>
                  <p>
                    因此，現代法學發展出「拘束人身自由保安處分之刑罰化審查」，必須同樣接受<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">罪刑法定</span>、<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">從舊從輕</span>與<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">正當法律程序（律師在場、鑑定人交叉詰問）</span>之嚴格拘束！
                  </p>
                </div>
              </div>

              <!-- 3. ⚖️ 金毛大律師 • 法庭攻防點評 -->
              <div class="p-4 sm:p-5 rounded-xl bg-blue-50/50 dark:bg-blue-950/20 border border-blue-300/60 dark:border-blue-800/50 space-y-3">
                <div class="flex items-center gap-3">
                  <div class="w-10 h-10 rounded-xl overflow-hidden border-2 border-blue-400 shrink-0 shadow-xs">
                    <img src="images/golden_case_attorney.jpg" alt="金毛大律師" class="w-full h-full object-cover" style="object-position: center 20%; transform: scale(1.35);"/>
                  </div>
                  <div>
                    <div class="font-bold text-xs sm:text-sm text-blue-950 dark:text-blue-200">
                      ⚖️ 金毛大律師 • 法庭攻防點評
                    </div>
                    <div class="text-[11px] font-mono text-blue-700 dark:text-blue-400">
                      Litigation Battle Tactics
                    </div>
                  </div>
                </div>

                <div class="font-serif text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed space-y-2 text-justify">
                  <p>
                    在法庭實務戰場上，面對檢方聲請拘束人身自由保安處分，辯護人有三大必勝防線：
                  </p>
                  <ul class="list-disc list-inside space-y-1 text-xs">
                    <li><span class="font-bold">第一防線（阻絕程序突襲）</span>：嚴格落實正當法律程序！依釋字 799 號意旨，檢方聲請強制治療或延長處分，法院未給予當事人陳述意見、未傳喚精神醫學評估小組到庭接受詰問者，一律構成程序重大違法！</li>
                    <li><span class="font-bold">第二防線（爭取替代手段）</span>：緊抓刑法 § 92 保護管束！主張以「社區門診保護管束」替代「機構式拘禁監護」，既維護法益亦符合比例原則。</li>
                    <li><span class="font-bold">第三防線（排除要件嚴查）</span>：刑法 § 87 監護處分限於「精神障礙或心智欠缺」，若被告係單純酒癮、毒癮發作，嚴格禁止援引 § 87 裁定監護！</li>
                  </ul>
                </div>
              </div>

              <!-- 4. 🛡️ 德牧法規巡查官 • 法規雷達查核 -->
              <div class="p-4 sm:p-5 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-300 dark:border-slate-700 space-y-3">
                <div class="flex items-center gap-3">
                  <div class="w-10 h-10 rounded-xl overflow-hidden border-2 border-slate-500 shrink-0 shadow-xs">
                    <img src="images/shepherd_law_inspector.jpg" alt="德牧法規巡查官" class="w-full h-full object-cover" style="object-position: center 15%; transform: scale(1.4);"/>
                  </div>
                  <div>
                    <div class="font-bold text-xs sm:text-sm text-slate-900 dark:text-white">
                      🛡️ 德牧法規巡查官 • 法規雷達查核
                    </div>
                    <div class="text-[11px] font-mono text-slate-500 dark:text-slate-400">
                      Statutory Compliance & Precedents
                    </div>
                  </div>
                </div>

                <div class="font-serif text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed space-y-2 text-justify">
                  <div class="p-3 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 space-y-1">
                    <span class="font-bold text-rose-600 dark:text-rose-400 block font-mono text-xs">
                      🔍 【大法官解釋 ＆ 憲法裁判全盤查核】
                    </span>
                    <ul class="list-disc list-inside space-y-1 text-xs">
                      <li><strong>大法官釋字第 812 號（強制工作違憲失效）</strong>：宣告刑法 § 90、竊盜犯贓物犯保安處分條例等強制工作規定，違反憲法第 23 條比例原則、第 8 條人身自由保障，自公布日起立即失效！</li>
                      <li><strong>大法官釋字第 799 號（性犯罪強制治療合憲性暨程序保障）</strong>：宣告受處分人未獲正當法律程序保障違憲；後續立法院修正刑法 § 91-1 及刑事訴訟法增訂保安處分專章，明定強制治療審查程序與定期限。</li>
                      <li><strong>111 年刑法 § 87 修正案（監護處分分層延長）</strong>：監護期間原定 5 年以下，修正增訂「屆滿前經法院裁定得延長，第一次延長 3 年以下，第二次起每次 1 年以下，每年定期評估」之制度，兼顧人權保障與社會防衛。</li>
                      <li><strong>刑法 § 1 但書與 § 2 Ⅰ、Ⅱ</strong>：拘束人身自由保安處分嚴格適用罪刑法定與從舊從輕原則；非拘束人身自由保安處分適用裁判時之法律。</li>
                    </ul>
                  </div>
                </div>
              </div>

              <!-- 5. 👨‍⚖️ 邊牧首席審判長 • 終審裁決一槌定音（講結論的吉祥物） -->
              <div class="p-5 sm:p-6 rounded-2xl bg-[#0f172a] text-white border-2 border-amber-400 shadow-xl space-y-4">
                <div class="flex items-center justify-between border-b border-amber-400/40 pb-3">
                  <div class="flex items-center gap-3">
                    <div class="w-12 h-12 rounded-xl overflow-hidden border-2 border-amber-400 shrink-0 shadow-md">
                      <img src="images/border_collie_chief_judge.jpg" alt="邊牧首席審判長" class="w-full h-full object-cover" style="object-position: center 25%; transform: scale(1.35);"/>
                    </div>
                    <div>
                      <div class="font-black text-sm sm:text-base text-amber-300">
                        👨‍⚖️ 邊牧首席審判長 • 終審裁決一槌定音
                      </div>
                      <div class="text-[11px] font-mono text-amber-200/70">
                        Chief Judge Collie • Final Ruling
                      </div>
                    </div>
                  </div>
                  <span class="text-xs font-mono font-black px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 border border-amber-400/40">
                    #法槌一敲誰與爭鋒
                  </span>
                </div>

                <div class="space-y-3 font-serif text-xs sm:text-[13.5px] leading-relaxed text-slate-200">
                  <div class="p-3.5 rounded-xl bg-white/5 border border-white/10 space-y-1">
                    <span class="font-bold text-amber-300 block">🔨 【實體法定讞】</span>
                    <p>
                      1. 保安處分與刑罰構成我國刑事制裁之雙軌體系，前者專以行為人之社會危險性為基礎，屬特別預防之社會防衛手段。<br>
                      2. 拘束人身自由之保安處分（感化教育、監護、禁戒、強制治療）因剝奪人身自由實質強度等同刑罰，嚴格適用刑法第 1 條罪刑法定原則與第 2 條第 1 項從舊從輕原則。<br>
                      3. 強制工作（§ 90）違反比例原則與工作權保障，業經大法官釋字第 812 號宣告違憲失效。<br>
                      4. 性犯罪強制治療（§ 91-1）與監護處分（§ 87）均已納入刑事訴訟法正當法律程序，嚴禁未經鑑定詰問之單面裁判，落實憲法比例原則。
                    </p>
                  </div>

                  <div class="p-3.5 rounded-xl bg-sky-500/10 border border-sky-400/30 space-y-1">
                    <span class="font-bold text-sky-300 block">💡 國考答題定錨口訣</span>
                    <p class="font-mono text-sky-200">
                      「雙軌制裁防危險，拘束自由等同刑；從舊從輕法定守，強制工作已失效；性侵治療定期限，監護延長逐年審；非拘自由從新法，保護管束代手段！」
                    </p>
                  </div>

                  <div class="p-3.5 rounded-xl bg-amber-500/10 border border-amber-400/30 space-y-1">
                    <span class="font-bold text-amber-300 block">📅 2026 最新法條動態備註（第三章法律效果全章大圓滿）</span>
                    <p class="text-xs text-amber-200/90 leading-relaxed">
                      至此，第零篇第三章「刑法的法律效果」從法定刑（第一節）、處斷刑（第二節）、宣告刑（第三節）、執行刑（第四節）至保安處分（第五節）全數圓滿精研完結！2026 最新命題焦點已全面鎖定：① 刑法 § 87 監護處分之定期限與延長審查體系；② 釋字 812 號強制工作違憲後的除罪化及行政轉銜；③ 釋字 799 號暨 112 憲判 9 號性自主強制治療審判保障；④ 刑法 § 2 拘束人身自由保安處分之從舊從輕原則嚴格審查。考生務必以「雙軌制裁」與「特別預防界限」作為總結作答定錨！
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </section>

          <!-- 底部導航分頁 -->
          <div class="pt-6 border-t border-slate-200 dark:border-white/[0.08] grid grid-cols-1 sm:grid-cols-2 gap-4">
            <button onclick="switchView('part0-ch3-sec4')" class="group p-4 rounded-2xl border border-slate-200 dark:border-white/[0.08] hover:border-rose-500/40 bg-white dark:bg-[#111726] text-left transition-all hover:-translate-y-0.5 shadow-sm hover:shadow-md flex items-center gap-3 cursor-pointer">
              <div class="w-9 h-9 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 group-hover:bg-rose-50 dark:group-hover:bg-rose-950 group-hover:text-rose-600 dark:group-hover:text-rose-400 flex items-center justify-center text-sm font-bold shrink-0 transition-colors">
                ←
              </div>
              <div class="min-w-0">
                <span class="text-[11px] text-slate-400 font-mono block">上一單元 (第 2-33 ~ 2-37 頁)</span>
                <span class="text-xs font-bold text-slate-800 dark:text-slate-200 group-hover:text-rose-600 dark:group-hover:text-rose-400 transition-colors truncate block">
                  第四節 刑罰的執行——兼談執行刑
                </span>
              </div>
            </button>

            <button onclick="switchView('part0-ch3')" class="group p-4 rounded-2xl border border-rose-500/40 hover:border-rose-500 bg-gradient-to-br from-rose-50/50 to-amber-50/30 dark:from-rose-950/30 dark:to-amber-950/20 text-right transition-all hover:-translate-y-0.5 shadow-sm hover:shadow-md flex items-center justify-between gap-3 cursor-pointer">
              <div class="min-w-0 text-left">
                <span class="text-[11px] text-rose-700 dark:text-rose-400 font-mono block font-bold">第三章全章圓滿完結</span>
                <span class="text-xs font-extrabold text-slate-900 dark:text-white group-hover:text-rose-700 dark:group-hover:text-rose-400 transition-colors truncate block">
                  返回第三章 刑法的法律效果 總覽 →
                </span>
              </div>
              <div class="w-9 h-9 rounded-xl bg-gradient-to-br from-rose-500 to-rose-600 text-white flex items-center justify-center text-sm font-bold shrink-0 group-hover:scale-105 transition-transform shadow-md shadow-rose-500/30">
                🎉
              </div>
            </button>
          </div>

        </div>
`;
