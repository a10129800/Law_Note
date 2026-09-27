// ==============================================================================
// VIEW: 第二章 刑法的論罪結構 (Chapter 2 View)
// 包含構成要件本質、例外擴張處罰、案例 2-1 至 2-4、其他刑罰要件及犯罪基本審查流程
// ==============================================================================
window.APP_VIEWS = window.APP_VIEWS || {};
window.APP_VIEWS['viewChapter2'] = window.APP_VIEWS['chapter2'] = `
        <!-- VIEW C: 第二章 刑法的論罪結構 (點擊第二章後顯示) -->
        <div id="viewChapter2" class="fade-enter hidden space-y-8">
          
          <!-- Breadcrumb & Back -->
          <div class="flex items-center justify-between gap-4 border-b border-slate-100 dark:border-white/[0.06] pb-3">
            <nav class="flex items-center gap-2 text-xs font-medium text-slate-400">
              <button onclick="switchView('intro')" class="hover:text-blue-500 transition-colors">導論 犯罪概念與論罪結構</button>
              <span>/</span>
              <span class="text-blue-600 dark:text-blue-400 font-bold">第二章 刑法的論罪結構</span>
            </nav>
            <button onclick="switchView('intro')" class="text-xs text-slate-400 hover:text-blue-500 flex items-center gap-1 transition-colors">
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
              </svg>
              <span>返回導讀</span>
            </button>
          </div>

          <!-- Chapter Header -->
          <div class="space-y-2">
            <div class="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-mono text-xs font-bold">
              <span>導論・第二章</span>
              <span class="px-2 py-0.5 rounded-md bg-blue-50 dark:bg-blue-950/40 text-[11px] border border-blue-200 dark:border-blue-900/50">教材第 1-13 ～ 1-15 頁 (第 1-12 頁為空白頁)</span>
            </div>
            <h2 class="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
              第二章 刑法的論罪結構
            </h2>
            <p class="text-xs sm:text-sm text-slate-500">
              探討構成要件本質、處罰原則（故意既遂）、例外擴張處罰門檻（未遂犯與過失犯）、阻卻事由之例外排除（挑唆防衛、原因自由行為）及其他刑罰要件
            </p>
          </div>

          <!-- 一、構成要件的本質與「故意＋既遂」處罰原則 -->
          <!-- 一、構成要件的本質與「故意＋既遂」處罰原則 -->
          <section id="sec-ch2-essence" class="space-y-6 pt-2">
            <div class="flex items-center gap-3">
              <span class="w-2 h-6 rounded-full bg-blue-600"></span>
              <h3 class="text-lg sm:text-xl font-black text-slate-900 dark:text-white tracking-tight">
                一、構成要件的本質與「故意＋既遂」處罰原則（教材第 1-13 頁）
              </h3>
            </div>

            <!-- 外層大卡片容器（依據圖二標準規則） -->
            <div class="p-6 rounded-3xl border border-slate-200 dark:border-white/[0.08] bg-white dark:bg-[#101623] shadow-sm space-y-6">
              
              <!-- 核心法定定義與刑法處罰原則卡片 (升級高飽和鮮明天藍色塊美學 + 實心色軸，完全遵循圖二規則) -->
              <div class="p-6 rounded-2xl bg-gradient-to-br from-sky-100 via-blue-50 to-indigo-100 dark:from-[#082f49] dark:via-[#0c4a6e]/70 dark:to-[#0f172a] border-2 border-sky-400 dark:border-sky-500/80 border-l-[8px] border-l-blue-600 dark:border-l-sky-400 shadow-lg shadow-sky-500/15 space-y-5">
                
                <!-- 標頭列：法規名稱與顯眼高彩度實心徽章 -->
                <div class="flex items-center justify-between flex-wrap gap-2">
                  <div class="flex items-center gap-2.5">
                    <span class="text-2xl drop-shadow-sm">📜</span>
                    <div>
                      <span class="font-black text-sm sm:text-base text-blue-950 dark:text-sky-100 tracking-wide">
                        構成要件本質與處罰原則
                      </span>
                      <span class="block text-[11px] font-mono font-bold text-blue-700 dark:text-sky-300 tracking-wider">
                        TATBESTANDSMÄSSIGKEIT & VORSATZ + VOLLENDUNG
                      </span>
                    </div>
                  </div>
                  <div class="flex items-center gap-2">
                    <span data-statute="12" class="text-xs font-mono font-black px-3 py-1 rounded-lg bg-blue-600 hover:bg-blue-700 text-white shadow-sm border border-blue-400 cursor-pointer transition-all hover:scale-105 active:scale-95 flex items-center gap-1" title="點擊檢視刑法第12條全文">
                      <span>§</span> 刑法第 12 條
                    </span>
                    <span class="text-xs font-mono font-black px-3 py-1 rounded-lg bg-amber-500 text-white shadow-sm border border-amber-300 flex items-center gap-1" title="立法者最想掌握之處罰典型">
                      <span>⚖️</span> 故意＋既遂原則
                    </span>
                  </div>
                </div>

                <!-- 核心立法處罰原則明文：高對比純白卡片 + 亮藍左導引線 + 呼吸燈 -->
                <div class="p-4 sm:p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-blue-400/80 dark:border-blue-700/80 border-l-4 border-l-blue-600 shadow-md space-y-2">
                  <div class="flex items-center justify-between text-xs font-mono border-b border-blue-100 dark:border-slate-800 pb-2">
                    <span class="font-bold text-blue-800 dark:text-blue-300 flex items-center gap-1.5">
                      <span class="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
                      核心立法處罰原則
                    </span>
                    <span class="px-2 py-0.5 rounded bg-blue-100 dark:bg-blue-900/60 text-blue-800 dark:text-blue-200 font-bold text-[11px]">
                      ★ 刑法典原型・故意＋既遂
                    </span>
                  </div>
                  <p class="text-base sm:text-lg md:text-xl font-black text-blue-950 dark:text-blue-50 leading-relaxed font-serif tracking-wide py-1">
                    「『故意 ＋ 既遂』是立法者最想掌握的處罰原則。」
                  </p>
                  <p class="text-xs sm:text-sm text-slate-800 dark:text-slate-100 font-medium leading-relaxed pt-1">
                    <span class="font-bold text-blue-700 dark:text-blue-300">▶ 具體例證：</span>以殺人罪為例，立法者經驗上所設想的係<span class="font-bold text-rose-700 dark:text-rose-300 bg-rose-50 dark:bg-rose-950/60 px-1.5 py-0.5 rounded border border-rose-200 dark:border-rose-800">「出於殺人故意而殺死他人之行為」</span>，亦即<span class="font-bold text-blue-900 dark:text-blue-200 bg-blue-100/80 dark:bg-blue-900/60 px-1.5 py-0.5 rounded border border-blue-200 dark:border-blue-700">客觀與主觀完全該當</span>之情形。
                  </p>
                </div>

                <!-- 經驗累積與英美法重罪（Felony）：飽滿鮮明暖金橙黃卡片 -->
                <div class="p-4 sm:p-5 rounded-xl bg-gradient-to-r from-amber-100 via-amber-50 to-yellow-50 dark:from-amber-950/70 dark:via-amber-900/40 dark:to-slate-900 border-2 border-amber-400 dark:border-amber-500/80 border-l-4 border-l-amber-600 shadow-sm space-y-3 text-xs sm:text-[13px]">
                  <div class="flex items-center justify-between font-bold text-amber-900 dark:text-amber-200 border-b border-amber-200/80 dark:border-amber-800/60 pb-1.5">
                    <span class="flex items-center gap-1.5 text-xs sm:text-sm">
                      <span class="text-base">🏛️</span>
                      <span>構成要件的本質：人類無法忍受的最典型非法</span>
                    </span>
                    <span class="font-mono text-[11px] px-2 py-0.5 rounded bg-amber-200/80 dark:bg-amber-800/60 text-amber-950 dark:text-amber-100 font-bold">
                      英美法重罪（Felony）處罰典型
                    </span>
                  </div>
                  <blockquote class="italic text-amber-950 dark:text-amber-100 leading-relaxed pl-3 border-l-2 border-amber-500 font-serif text-xs sm:text-sm font-medium">
                    「構成要件是經驗累積的產物，能夠被編寫成犯罪構成要件之所作所為，必然都是最典型的非法，也可以說只要是身為人類都無法忍受的犯行。」
                  </blockquote>

                  <!-- 6 格典型犯罪卡片 (超高對比極清灰色卡片・黑體粗字與白底清晰膠囊) -->
                  <div class="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-1.5 text-xs">
                    <div class="p-3 rounded-xl bg-slate-100 hover:bg-slate-200/80 dark:bg-slate-800/90 dark:hover:bg-slate-750 border-2 border-slate-300 dark:border-slate-600 hover:border-slate-400 dark:hover:border-slate-500 text-center shadow-xs transition-all">
                      <span class="block text-red-600 dark:text-red-400 font-black text-sm mb-1.5 tracking-tight">謀殺</span>
                      <span class="inline-block text-xs text-slate-800 dark:text-slate-100 font-bold px-2 py-0.5 rounded-md bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-600 shadow-2xs">最無爭議的典型</span>
                    </div>
                    <div class="p-3 rounded-xl bg-slate-100 hover:bg-slate-200/80 dark:bg-slate-800/90 dark:hover:bg-slate-750 border-2 border-slate-300 dark:border-slate-600 hover:border-slate-400 dark:hover:border-slate-500 text-center shadow-xs transition-all">
                      <span class="block text-slate-900 dark:text-white font-black text-sm mb-1.5 tracking-tight">強制性交</span>
                      <span class="inline-block text-xs text-slate-800 dark:text-slate-100 font-bold px-2 py-0.5 rounded-md bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-600 shadow-2xs">重大身體自主侵害</span>
                    </div>
                    <div class="p-3 rounded-xl bg-slate-100 hover:bg-slate-200/80 dark:bg-slate-800/90 dark:hover:bg-slate-750 border-2 border-slate-300 dark:border-slate-600 hover:border-slate-400 dark:hover:border-slate-500 text-center shadow-xs transition-all">
                      <span class="block text-slate-900 dark:text-white font-black text-sm mb-1.5 tracking-tight">強盜</span>
                      <span class="inline-block text-xs text-slate-800 dark:text-slate-100 font-bold px-2 py-0.5 rounded-md bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-600 shadow-2xs">強暴脅迫結合財產</span>
                    </div>
                    <div class="p-3 rounded-xl bg-slate-100 hover:bg-slate-200/80 dark:bg-slate-800/90 dark:hover:bg-slate-750 border-2 border-slate-300 dark:border-slate-600 hover:border-slate-400 dark:hover:border-slate-500 text-center shadow-xs transition-all">
                      <span class="block text-slate-900 dark:text-white font-black text-sm mb-1.5 tracking-tight">夜間侵入住宅</span>
                      <span class="inline-block text-xs text-slate-800 dark:text-slate-100 font-bold px-2 py-0.5 rounded-md bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-600 shadow-2xs">嚴重危及居住安寧</span>
                    </div>
                    <div class="p-3 rounded-xl bg-slate-100 hover:bg-slate-200/80 dark:bg-slate-800/90 dark:hover:bg-slate-750 border-2 border-slate-300 dark:border-slate-600 hover:border-slate-400 dark:hover:border-slate-500 text-center shadow-xs transition-all">
                      <span class="block text-slate-900 dark:text-white font-black text-sm mb-1.5 tracking-tight">惡意傷害</span>
                      <span class="inline-block text-xs text-slate-800 dark:text-slate-100 font-bold px-2 py-0.5 rounded-md bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-600 shadow-2xs">殘害他人身體健康</span>
                    </div>
                    <div class="p-3 rounded-xl bg-slate-100 hover:bg-slate-200/80 dark:bg-slate-800/90 dark:hover:bg-slate-750 border-2 border-slate-300 dark:border-slate-600 hover:border-slate-400 dark:hover:border-slate-500 text-center shadow-xs transition-all">
                      <span class="block text-slate-900 dark:text-white font-black text-sm mb-1.5 tracking-tight">放火</span>
                      <span class="inline-block text-xs text-slate-800 dark:text-slate-100 font-bold px-2 py-0.5 rounded-md bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-600 shadow-2xs">公共危險重大災難</span>
                    </div>
                  </div>
                </div>

                <!-- 客觀與主觀該當分野對照卡片 -->
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div class="p-3.5 rounded-xl bg-white dark:bg-slate-900 border-2 border-blue-400/80 dark:border-blue-700/80 border-l-4 border-l-blue-600 shadow-xs space-y-1.5">
                    <div class="text-xs font-bold text-blue-800 dark:text-blue-300 flex items-center justify-between">
                      <span class="flex items-center gap-1.5">
                        <span>🔵</span>
                        <span>客觀該當性</span>
                      </span>
                      <span class="font-extrabold text-blue-700 dark:text-blue-300 text-[11px] px-2 py-0.5 bg-blue-50 dark:bg-slate-800 rounded-md border border-blue-200 dark:border-blue-700">
                        學理稱「既遂」
                      </span>
                    </div>
                    <p class="text-xs sm:text-sm text-slate-800 dark:text-slate-100 font-medium leading-relaxed pt-0.5">
                      外在世界實行了構成要件該當行為，且<span class="font-bold text-blue-800 dark:text-blue-200 bg-blue-50 dark:bg-blue-950/80 px-1 py-0.5 rounded border border-blue-200 dark:border-blue-700">法益侵害結果完全發生</span><span class="text-rose-600 dark:text-rose-400 font-bold ml-1">（例如人死亡）</span>。
                    </p>
                  </div>

                  <div class="p-3.5 rounded-xl bg-white dark:bg-slate-900 border-2 border-indigo-400/80 dark:border-indigo-700/80 border-l-4 border-l-indigo-600 shadow-xs space-y-1.5">
                    <div class="text-xs font-bold text-indigo-800 dark:text-indigo-300 flex items-center justify-between">
                      <span class="flex items-center gap-1.5">
                        <span>🟣</span>
                        <span>主觀該當性</span>
                      </span>
                      <span class="font-extrabold text-indigo-700 dark:text-indigo-300 text-[11px] px-2 py-0.5 bg-indigo-50 dark:bg-slate-800 rounded-md border border-indigo-200 dark:border-indigo-700">
                        學理稱「故意」
                      </span>
                    </div>
                    <p class="text-xs sm:text-sm text-slate-800 dark:text-slate-100 font-medium leading-relaxed pt-0.5">
                      行為人內心<span class="font-bold text-indigo-900 dark:text-indigo-200 bg-indigo-50 dark:bg-indigo-950/80 px-1 py-0.5 rounded border border-indigo-200 dark:border-indigo-700">明知並有意使其發生</span><span class="font-mono font-bold text-indigo-700 dark:text-indigo-300">（刑法第 13 條第 1 項）</span>，具備<span class="font-bold text-purple-700 dark:text-purple-300 bg-purple-50 dark:bg-purple-950/80 px-1 py-0.5 rounded border border-purple-200 dark:border-purple-800">實質主觀惡性</span>。
                    </p>
                  </div>
                </div>

                <!-- 學理價值說明卡片 -->
                <p class="text-xs sm:text-sm text-blue-950 dark:text-slate-200 leading-relaxed font-medium bg-white/70 dark:bg-slate-900/50 p-3.5 rounded-xl border border-blue-200/60 dark:border-blue-900/40">
                  構成要件該當性具有嚴格的客觀與主觀雙重結構。「非既遂（≠ 未遂）」與「非故意（≠ 過失）」原則上皆不足以建構行為的可罰性，立法者最想掌握且預設處罰的，唯有「主客觀完全該當」之故意既遂犯！
                </p>

              </div>

              <!-- 🐣 【超亮眼白話文專區】讓不懂法的小白也能 30 秒秒懂（完全遵循圖二規格） -->
              <div class="rounded-2xl p-5 sm:p-6 bg-gradient-to-br from-amber-50 via-orange-50/80 to-yellow-100 dark:from-[#2a1c0c] dark:via-[#221608] dark:to-[#171005] border-2 border-amber-400 dark:border-amber-500 border-l-[8px] border-l-amber-500 shadow-md shadow-amber-500/10 space-y-4">
                
                <!-- 小白專區 Header -->
                <div class="flex items-center justify-between flex-wrap gap-2 border-b border-amber-200 dark:border-amber-800/80 pb-3">
                  <div class="flex items-center gap-2">
                    <span class="text-2xl animate-bounce">🐣</span>
                    <div>
                      <div class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-white text-[11px] font-black shadow-xs">
                        <span>💡 零基礎秒懂專區</span>
                        <span>•</span>
                        <span>白話文大翻譯</span>
                      </div>
                      <h4 class="text-base sm:text-lg font-black text-amber-950 dark:text-amber-100 pt-0.5">
                        到底什麼是構成要件？為什麼刑法預設只抓「故意＋既遂」？
                      </h4>
                    </div>
                  </div>
                  <span class="text-xs font-bold text-amber-800 dark:text-amber-300 bg-amber-100 dark:bg-amber-900/60 px-2.5 py-1 rounded-lg border border-amber-300 dark:border-amber-700">
                    🎯 刑法入門第 1 大定理
                  </span>
                </div>

                <!-- 一句話白話金句 -->
                <div class="p-3.5 sm:p-4 rounded-xl bg-white dark:bg-slate-900 border-2 border-amber-300 dark:border-amber-600 shadow-xs">
                  <div class="text-[11px] font-black text-amber-600 dark:text-amber-400 uppercase tracking-wider mb-1">
                    📢 一句話大白話翻譯
                  </div>
                  <p class="text-sm sm:text-base font-black text-slate-900 dark:text-white leading-relaxed">
                    👉「<span class="text-amber-600 dark:text-amber-400 underline decoration-amber-400 underline-offset-4">心裡想幹壞事（故意）＋ 現實真的幹成功了（既遂）＝ 100% 絕對抓去關！</span>」法律上的<strong>「構成要件」</strong>，說白了就是人類社會公認最無法忍受的<span class="text-red-600 dark:text-red-400">「作惡黑名單」</span>！
                  </p>
                </div>

                <!-- 趣味日常比喻：夜市打靶射擊遊戲 -->
                <div class="p-4 rounded-xl bg-amber-100/60 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800/60 space-y-2 text-xs sm:text-[13px] text-slate-800 dark:text-slate-200 leading-relaxed">
                  <div class="font-black text-amber-900 dark:text-amber-200 flex items-center gap-1.5 text-sm">
                    <span>🎯</span>
                    <span>生活超有感比喻：射擊打靶的「瞄準扣扳機」與「正中紅心」</span>
                  </div>
                  <p>
                    想像你在玩夜市射擊打靶遊戲：
                  </p>
                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                    <div class="p-3 rounded-xl bg-white dark:bg-slate-900 border-2 border-indigo-300 dark:border-indigo-700 shadow-2xs space-y-1">
                      <span class="font-black text-indigo-700 dark:text-indigo-300 block text-xs sm:text-[13px]">🟣 主觀心態（故意）＝ 眼睛瞄準＋手指扣下</span>
                      <p class="text-slate-800 dark:text-slate-100 text-xs sm:text-[13px] font-medium leading-relaxed">
                        大腦清清楚楚知道前面是人，而且手指<span class="font-bold text-indigo-900 dark:text-indigo-200 bg-indigo-50 dark:bg-indigo-950/80 px-1 py-0.5 rounded border border-indigo-200 dark:border-indigo-800">「故意」扣下扳機</span>，心裡就是要他死！<span class="text-purple-700 dark:text-purple-300 font-bold">（腦袋有惡念，不是手滑走火）</span>
                      </p>
                    </div>
                    <div class="p-3 rounded-xl bg-white dark:bg-slate-900 border-2 border-blue-300 dark:border-blue-700 shadow-2xs space-y-1">
                      <span class="font-black text-blue-700 dark:text-blue-300 block text-xs sm:text-[13px]">🔵 客觀現實（既遂）＝ 子彈擊中＋目標倒地死亡</span>
                      <p class="text-slate-800 dark:text-slate-100 text-xs sm:text-[13px] font-medium leading-relaxed">
                        子彈真實射穿心臟，<span class="font-bold text-rose-700 dark:text-rose-400 bg-rose-50 dark:bg-rose-950/80 px-1 py-0.5 rounded border border-rose-200 dark:border-rose-800">人真的斷氣了！</span><span class="text-blue-800 dark:text-blue-300 font-bold">（世界上真的發生了不可挽回的悲劇，壞事做成了）</span>
                      </p>
                    </div>
                  </div>
                  <p class="text-amber-950 dark:text-amber-100 font-bold bg-white/80 dark:bg-slate-900/60 p-2.5 rounded-lg border border-amber-300/60">
                    💡 <strong>為什麼這叫「原則」？</strong> 因為這就是最標準的「<strong>大壞蛋套餐</strong>」！立法者寫刑法時，預設只想抓這種「腦子想幹、現實也幹成了」的傢伙。至於「想幹但沒幹成（未遂）」或「沒想幹卻搞砸（過失）」，都叫<strong>例外</strong>，必須法律有特別規定才罰！
                  </p>
                </div>

                <!-- 小白必懂三大白話拆解 -->
                <div class="space-y-2">
                  <div class="text-xs font-black text-amber-950 dark:text-amber-200 flex items-center gap-1">
                    <span>⚡</span>
                    <span>白話拆解：兩大構成要件門檻（雙劍合璧才算數）</span>
                  </div>
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-2.5 text-xs">
                    
                    <div class="p-3.5 rounded-xl bg-white dark:bg-slate-900 border-2 border-blue-400/80 dark:border-blue-700/80 border-l-4 border-l-blue-600 shadow-xs space-y-2">
                      <div class="font-black text-blue-800 dark:text-blue-300 flex items-center justify-between text-xs sm:text-[13px]">
                        <span class="flex items-center gap-1.5">
                          <span>🔵</span>
                          <span>客觀該當性 ＝「既遂」</span>
                        </span>
                        <span class="text-[11px] font-mono font-bold px-2 py-0.5 rounded bg-blue-100 dark:bg-blue-900/60 text-blue-800 dark:text-blue-200 border border-blue-200 dark:border-blue-800">外在事實</span>
                      </div>
                      <div class="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-blue-50 dark:bg-blue-950/80 border border-blue-200 dark:border-blue-800 text-blue-900 dark:text-blue-200 font-bold text-xs">
                        🗣️ 小白白話：「壞事真的做成了！」
                      </div>
                      <p class="text-slate-800 dark:text-slate-100 font-medium leading-relaxed text-xs sm:text-[13px]">
                        外在世界有你開槍、揮刀的動作，且<span class="font-bold text-rose-700 dark:text-rose-400 bg-rose-50 dark:bg-rose-950/60 px-1.5 py-0.5 rounded border border-rose-200 dark:border-rose-800">最後真的有人死了</span>。用監視器或肉眼看，<span class="font-bold text-blue-800 dark:text-blue-300">所有犯罪結果都完全實現</span>。
                      </p>
                    </div>

                    <div class="p-3.5 rounded-xl bg-white dark:bg-slate-900 border-2 border-indigo-400/80 dark:border-indigo-700/80 border-l-4 border-l-indigo-600 shadow-xs space-y-2">
                      <div class="font-black text-indigo-800 dark:text-indigo-300 flex items-center justify-between text-xs sm:text-[13px]">
                        <span class="flex items-center gap-1.5">
                          <span>🟣</span>
                          <span>主觀該當性 ＝「故意」</span>
                        </span>
                        <span class="text-[11px] font-mono font-bold px-2 py-0.5 rounded bg-indigo-100 dark:bg-indigo-900/60 text-indigo-800 dark:text-indigo-200 border border-indigo-200 dark:border-indigo-800">內心惡念</span>
                      </div>
                      <div class="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-indigo-50 dark:bg-indigo-950/80 border border-indigo-200 dark:border-indigo-800 text-indigo-900 dark:text-indigo-200 font-bold text-xs">
                        🗣️ 小白白話：「心裡清清楚楚就是要幹！」
                      </div>
                      <p class="text-slate-800 dark:text-slate-100 font-medium leading-relaxed text-xs sm:text-[13px]">
                        <span class="font-bold text-purple-700 dark:text-purple-300">不是手滑、不是恍神、不是做夢！</span>明知道自己在做犯法的事，而且<span class="font-bold text-indigo-900 dark:text-indigo-200 bg-indigo-50 dark:bg-indigo-950/80 px-1.5 py-0.5 rounded border border-indigo-200 dark:border-indigo-800">心甘情願、故意要讓這個壞結果發生</span>。
                      </p>
                    </div>

                  </div>
                </div>

              </div>

            </div>
          </section>

          <!-- 二、例外擴張處罰之雙重門檻與觀念辨正 -->
          <section id="sec-ch2-expansion" class="space-y-6 pt-2">
            <div class="flex items-center gap-3">
              <span class="w-2 h-6 rounded-full bg-amber-500"></span>
              <h3 class="text-lg sm:text-xl font-black text-slate-900 dark:text-white tracking-tight">
                二、例外擴張處罰之雙重門檻與觀念辨正
              </h3>
            </div>

            <div class="box-legal-gold p-6 rounded-3xl space-y-5">
              
              <!-- 重要公式對比 -->
              <div class="space-y-3">
                <div class="text-xs font-black text-amber-950 dark:text-amber-200 bg-amber-100/90 dark:bg-amber-900/60 px-2.5 py-1 rounded-lg border border-amber-300 dark:border-amber-700 w-fit tracking-wide">
                  ⚠️ 關鍵法律公式・觀念釐清（教材第 1-13 頁）
                </div>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div class="p-4 rounded-2xl bg-white dark:bg-slate-900 border-2 border-amber-300 dark:border-amber-700/80 shadow-xs space-y-2.5">
                    <div class="flex items-center justify-between">
                      <span class="text-xs sm:text-[13px] font-black text-slate-800 dark:text-slate-100">客觀要件未該當</span>
                      <span class="text-[11px] font-mono px-2 py-0.5 rounded-full bg-amber-100 dark:bg-amber-900/70 text-amber-900 dark:text-amber-200 font-bold border border-amber-300/80">客觀面</span>
                    </div>
                    <div class="text-base sm:text-lg font-black text-slate-900 dark:text-white flex items-center gap-2">
                      <span class="px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700">非既遂</span>
                      <span class="text-red-600 dark:text-red-400 font-black text-xl">≠</span>
                      <span class="px-2 py-0.5 rounded-md bg-rose-50 dark:bg-rose-950/80 text-rose-700 dark:text-rose-300 font-black border border-rose-200 dark:border-rose-800">未遂</span>
                    </div>
                    <p class="text-xs sm:text-[13px] text-slate-800 dark:text-slate-100 font-medium leading-relaxed">
                      客觀構成要件不具備僅是<span class="font-bold text-slate-900 dark:text-white">「非既遂」</span>，<span class="font-bold text-rose-700 dark:text-rose-400 bg-rose-50 dark:bg-rose-950/80 px-1 py-0.5 rounded border border-rose-200 dark:border-rose-800">絕非當然等同於法律上的「未遂犯」</span>！
                    </p>
                  </div>

                  <div class="p-4 rounded-2xl bg-white dark:bg-slate-900 border-2 border-blue-300 dark:border-blue-700/80 shadow-xs space-y-2.5">
                    <div class="flex items-center justify-between">
                      <span class="text-xs sm:text-[13px] font-black text-slate-800 dark:text-slate-100">主觀要件未該當</span>
                      <span class="text-[11px] font-mono px-2 py-0.5 rounded-full bg-blue-100 dark:bg-blue-900/70 text-blue-900 dark:text-blue-200 font-bold border border-blue-300/80">主觀面</span>
                    </div>
                    <div class="text-base sm:text-lg font-black text-slate-900 dark:text-white flex items-center gap-2">
                      <span class="px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700">非故意</span>
                      <span class="text-red-600 dark:text-red-400 font-black text-xl">≠</span>
                      <span class="px-2 py-0.5 rounded-md bg-blue-50 dark:bg-blue-950/80 text-blue-700 dark:text-blue-300 font-black border border-blue-200 dark:border-blue-800">過失</span>
                    </div>
                    <p class="text-xs sm:text-[13px] text-slate-800 dark:text-slate-100 font-medium leading-relaxed">
                      主觀構成要件不具備僅是<span class="font-bold text-slate-900 dark:text-white">「非故意」</span>，<span class="font-bold text-blue-800 dark:text-blue-300 bg-blue-50 dark:bg-blue-950/80 px-1 py-0.5 rounded border border-blue-200 dark:border-blue-800">絕非當然等同於法律上的「過失犯」</span>！
                    </p>
                  </div>
                </div>
              </div>

              <!-- 原則不罰與例外要件 -->
              <div class="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-amber-100/90 via-amber-50 to-yellow-50 dark:from-amber-950/70 dark:via-amber-900/40 dark:to-slate-900 border-2 border-amber-400 dark:border-amber-500/80 border-l-4 border-l-amber-600 shadow-xs space-y-3">
                <div class="flex items-center gap-2 text-xs sm:text-sm font-black text-amber-950 dark:text-amber-100">
                  <span>🚨</span>
                  <span>可罰性建構原則：非既遂與非故意原則上均不足以建構處罰</span>
                </div>
                <p class="text-xs sm:text-sm text-slate-800 dark:text-slate-100 font-medium leading-relaxed">
                  若要想例外地擴張處罰，除要有<strong class="text-amber-950 dark:text-amber-100 bg-amber-200/90 dark:bg-amber-800/80 px-1.5 py-0.5 rounded border border-amber-300 dark:border-amber-700">法律的明示處罰規定外（罪刑法定原則）</strong>，還必須<strong class="text-blue-900 dark:text-blue-200 bg-blue-100/90 dark:bg-blue-900/70 px-1.5 py-0.5 rounded border border-blue-200 dark:border-blue-700">滿足其他犯罪成立要件</strong>。
                </p>

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                  <div class="p-3.5 rounded-xl bg-white dark:bg-slate-900 border-2 border-blue-300 dark:border-blue-700/80 shadow-2xs space-y-1.5">
                    <span class="text-xs sm:text-sm font-black text-blue-800 dark:text-blue-300 flex items-center gap-1.5">
                      <span>🔒</span>
                      <span>第一重門檻：法律明示規定</span>
                    </span>
                    <p class="text-xs sm:text-[13px] text-slate-800 dark:text-slate-100 font-medium leading-relaxed">
                      刑法分則或總則必須明文規定處罰（如未遂犯依 <span class="font-mono font-bold text-blue-700 dark:text-blue-300 bg-blue-50 dark:bg-blue-950/80 px-1 py-0.5 rounded border border-blue-200 dark:border-blue-800">§ 25 Ⅱ</span> 須有特別規定、過失犯依 <span class="font-mono font-bold text-blue-700 dark:text-blue-300 bg-blue-50 dark:bg-blue-950/80 px-1 py-0.5 rounded border border-blue-200 dark:border-blue-800">§ 12 Ⅱ</span> 須有特別規定）。
                    </p>
                  </div>

                  <div class="p-3.5 rounded-xl bg-white dark:bg-slate-900 border-2 border-indigo-300 dark:border-indigo-700/80 shadow-2xs space-y-1.5">
                    <span class="text-xs sm:text-sm font-black text-indigo-800 dark:text-indigo-300 flex items-center gap-1.5">
                      <span>🔑</span>
                      <span>第二重門檻：滿足其他成立要件</span>
                    </span>
                    <p class="text-xs sm:text-[13px] text-slate-800 dark:text-slate-100 font-medium leading-relaxed">
                      必須滿足該特別犯罪型態之實質要件（例如未遂犯須滿足<span class="font-bold text-indigo-900 dark:text-indigo-200 bg-indigo-50 dark:bg-indigo-950/80 px-1.5 py-0.5 rounded border border-indigo-200 dark:border-indigo-800">「客觀著手 ＋ 主觀故意」</span>）。
                    </p>
                  </div>
                </div>
              </div>

              <!-- 🐣 【超亮眼白話文專區】讓不懂法的小白也能 30 秒秒懂第二節：例外擴張處罰與雙重門檻 -->
              <div class="rounded-2xl p-5 sm:p-6 bg-gradient-to-br from-amber-50 via-orange-50/80 to-yellow-100 dark:from-[#2a1c0c] dark:via-[#221608] dark:to-[#171005] border-2 border-amber-400 dark:border-amber-500 border-l-[8px] border-l-amber-500 shadow-md shadow-amber-500/10 space-y-4">
                
                <!-- 小白專區 Header -->
                <div class="flex items-center justify-between flex-wrap gap-2 border-b border-amber-200 dark:border-amber-800/80 pb-3">
                  <div class="flex items-center gap-2">
                    <span class="text-2xl animate-bounce">🐣</span>
                    <div>
                      <div class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-white text-[11px] font-black shadow-xs">
                        <span>💡 零基礎秒懂專區</span>
                        <span>•</span>
                        <span>白話文大翻譯</span>
                      </div>
                      <h4 class="text-base sm:text-lg font-black text-amber-950 dark:text-amber-100 pt-0.5">
                        到底什麼是「非既遂 ≠ 未遂」、「非故意 ≠ 過失」？為什麼刑法原則上「不罰」？
                      </h4>
                    </div>
                  </div>
                  <span class="text-xs font-bold text-amber-800 dark:text-amber-300 bg-amber-100 dark:bg-amber-900/60 px-2.5 py-1 rounded-lg border border-amber-300 dark:border-amber-700">
                    🎯 刑法入門第 2 大定理
                  </span>
                </div>

                <!-- 一句話白話金句 -->
                <div class="p-3.5 sm:p-4 rounded-xl bg-white dark:bg-slate-900 border-2 border-amber-300 dark:border-amber-600 shadow-xs">
                  <div class="text-[11px] font-black text-amber-600 dark:text-amber-400 uppercase tracking-wider mb-1">
                    📢 一句話大白話翻譯
                  </div>
                  <p class="text-sm sm:text-base font-black text-slate-900 dark:text-white leading-relaxed">
                    👉「<span class="text-amber-600 dark:text-amber-400 underline decoration-amber-400 underline-offset-4">沒做成不等於未遂，沒故意不等於過失！原則上一律『不抓不罰』，除非法律特別開後門，而且手續全部辦齊！</span>」
                  </p>
                </div>

                <!-- 趣味日常比喻：吃霸王餐 vs 走錯包廂 -->
                <div class="p-4 rounded-xl bg-amber-100/60 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800/60 space-y-2 text-xs sm:text-[13px] text-slate-800 dark:text-slate-200 leading-relaxed">
                  <div class="font-black text-amber-900 dark:text-amber-200 flex items-center gap-1.5 text-sm">
                    <span>🎯</span>
                    <span>生活超有感比喻：【吃霸王餐拔腿跑 vs 走錯包廂吃錯飯】</span>
                  </div>
                  <p>
                    想像兩個人在餐廳發生的不同意外：
                  </p>
                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                    <div class="p-3 rounded-xl bg-white dark:bg-slate-900 border-2 border-rose-300 dark:border-rose-700 shadow-2xs space-y-1">
                      <span class="font-black text-rose-700 dark:text-rose-300 block text-xs sm:text-[13px]">🏃‍♂️ 情境 A（想幹沒幹成）：拔腿跑被店長抓住</span>
                      <p class="text-slate-800 dark:text-slate-100 text-xs sm:text-[13px] font-medium leading-relaxed">
                        小明吃完大餐想賴帳，拔腿往外衝（<span class="font-bold text-rose-700 dark:text-rose-400 bg-rose-50 dark:bg-rose-950/80 px-1 py-0.5 rounded border border-rose-200 dark:border-rose-800">客觀著手</span>），但門口被保全撲倒沒跑成（<span class="font-bold text-slate-900 dark:text-white">非既遂</span>）。因為他腦袋就是想吃霸王餐（<span class="font-bold text-indigo-900 dark:text-indigo-200 bg-indigo-50 dark:bg-indigo-950/80 px-1 py-0.5 rounded border border-indigo-200 dark:border-indigo-800">主觀故意</span>），這才構成「詐欺未遂」！如果他只是站在位子上想了一下根本沒跑，那連未遂都算不上，完全不罰！
                      </p>
                    </div>
                    <div class="p-3 rounded-xl bg-white dark:bg-slate-900 border-2 border-blue-300 dark:border-blue-700 shadow-2xs space-y-1">
                      <span class="font-black text-blue-700 dark:text-blue-300 block text-xs sm:text-[13px]">🤦‍♂️ 情境 B（沒想幹卻搞砸）：低頭滑手機走錯桌吃掉牛排</span>
                      <p class="text-slate-800 dark:text-slate-100 text-xs sm:text-[13px] font-medium leading-relaxed">
                        小華低頭滑手機，走進隔壁包廂順手把別人的頂級牛排吃光了（<span class="font-bold text-slate-900 dark:text-white">非故意</span>）。他不是小偷，只是粗心大意（<span class="font-bold text-blue-800 dark:text-blue-300 bg-blue-50 dark:bg-blue-950/80 px-1 py-0.5 rounded border border-blue-200 dark:border-blue-800">過失</span>）。刑法「竊盜罪」根本不罰過失，所以小華只要掏錢賠牛排（民事賠償），警察根本不能抓他去坐牢！
                      </p>
                    </div>
                  </div>
                  <p class="text-amber-950 dark:text-amber-100 font-bold bg-white/80 dark:bg-slate-900/60 p-2.5 rounded-lg border border-amber-300/60">
                    💡 <strong>為什麼叫「非既遂 ≠ 未遂」？</strong> 事情沒幹成（非既遂）範圍超級大，可能是你根本還沒動手、可能只是在心裡幻想、也可能是犯罪未遂。<strong>法律只抓「已經動手、心裡故意」的那一小部分未遂犯，其餘統統不罰！</strong>
                  </p>
                </div>

                <!-- 小白必懂雙門檻白話拆解 -->
                <div class="space-y-2">
                  <div class="text-xs font-black text-amber-950 dark:text-amber-200 flex items-center gap-1">
                    <span>⚡</span>
                    <span>白話拆解：例外處罰的兩道防護門（缺一不可，通關才能抓）</span>
                  </div>
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-2.5 text-xs">
                    
                    <div class="p-3.5 rounded-xl bg-white dark:bg-slate-900 border-2 border-blue-400/80 dark:border-blue-700/80 border-l-4 border-l-blue-600 shadow-xs space-y-2">
                      <div class="font-black text-blue-800 dark:text-blue-300 flex items-center justify-between text-xs sm:text-[13px]">
                        <span class="flex items-center gap-1.5">
                          <span>🔒</span>
                          <span>第 1 道門：查戶口（法條有沒有寫？）</span>
                        </span>
                        <span class="text-[11px] font-mono font-bold px-2 py-0.5 rounded bg-blue-100 dark:bg-blue-900/60 text-blue-800 dark:text-blue-200 border border-blue-200 dark:border-blue-800">罪刑法定</span>
                      </div>
                      <div class="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-blue-50 dark:bg-blue-950/80 border border-blue-200 dark:border-blue-800 text-blue-900 dark:text-blue-200 font-bold text-xs">
                        🗣️ 小白白話：「法條沒寫罰未遂或過失，法官直接放你走！」
                      </div>
                      <p class="text-slate-800 dark:text-slate-100 font-medium leading-relaxed text-xs sm:text-[13px]">
                        刑法預設只罰「故意既遂」。如果你沒幹成（未遂）或不小心搞砸（過失），<span class="font-bold text-blue-800 dark:text-blue-300">法條必須白紙黑字寫「處罰未遂」或「處罰過失」</span>。如果法條沒寫（例如毀損罪不罰未遂、竊盜罪不罰過失），直接判定<strong>無罪</strong>！
                      </p>
                    </div>

                    <div class="p-3.5 rounded-xl bg-white dark:bg-slate-900 border-2 border-indigo-400/80 dark:border-indigo-700/80 border-l-4 border-l-indigo-600 shadow-xs space-y-2">
                      <div class="font-black text-indigo-800 dark:text-indigo-300 flex items-center justify-between text-xs sm:text-[13px]">
                        <span class="flex items-center gap-1.5">
                          <span>🔑</span>
                          <span>第 2 道門：驗收資格（動作到底做了沒？）</span>
                        </span>
                        <span class="text-[11px] font-mono font-bold px-2 py-0.5 rounded bg-indigo-100 dark:bg-indigo-900/60 text-indigo-800 dark:text-indigo-200 border border-indigo-200 dark:border-indigo-800">實質要件</span>
                      </div>
                      <div class="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-indigo-50 dark:bg-indigo-950/80 border border-indigo-200 dark:border-indigo-800 text-indigo-900 dark:text-indigo-200 font-bold text-xs">
                        🗣️ 小白白話：「嘴巴說說或在旁邊看熱鬧，不能算未遂！」
                      </div>
                      <p class="text-slate-800 dark:text-slate-100 font-medium leading-relaxed text-xs sm:text-[13px]">
                        就算法律有罰未遂，你也必須真的<span class="font-bold text-rose-700 dark:text-rose-400 bg-rose-50 dark:bg-rose-950/60 px-1 py-0.5 rounded border border-rose-200 dark:border-rose-800">「拿刀砍下去（著手）」</span>＋<span class="font-bold text-indigo-900 dark:text-indigo-200 bg-indigo-50 dark:bg-indigo-950/80 px-1 py-0.5 rounded border border-indigo-200 dark:border-indigo-800">「心裡真的想砍死他（故意）」</span>！如果只是去五金行買把西瓜刀回家放著（預備階段），原則上根本不能當作未遂犯抓去關！
                      </p>
                    </div>

                  </div>
                </div>

              </div>

            </div>
          </section>

          <!-- 三、案例 2-1 西瓜刀砍人案與殺人未遂之審查 -->
          <section id="sec-ch2-case-2-1" class="space-y-6 pt-2">
            <div class="flex items-center gap-3">
              <span class="w-2 h-6 rounded-full bg-emerald-500"></span>
              <h3 class="text-lg sm:text-xl font-black text-slate-900 dark:text-white tracking-tight">
                三、案例 2-1 西瓜刀砍人案與殺人未遂之審查（教材第 1-13 頁）
              </h3>
            </div>

            <!-- Case Card -->
            <div class="box-legal-emerald p-6 rounded-3xl space-y-5">
              
              <!-- 案情標籤 -->
              <div class="flex items-center justify-between flex-wrap gap-2">
                <div class="flex items-center gap-2">
                  <span class="px-2.5 py-1 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-mono text-xs font-bold">
                    案例 2-1
                  </span>
                  <span class="text-xs font-bold text-slate-700 dark:text-slate-300">
                    西瓜刀砍人案・例外擴張處罰檢驗
                  </span>
                </div>
                <span class="text-xs text-slate-400 font-mono">教材第 1-13 頁 原文案例</span>
              </div>

              <!-- 案情事實 -->
              <div class="p-4 rounded-2xl bg-white dark:bg-slate-900 border-2 border-emerald-300 dark:border-emerald-700/80 shadow-xs space-y-1.5">
                <div class="text-xs font-black text-emerald-800 dark:text-emerald-300">【案例事實】</div>
                <p class="text-xs sm:text-sm font-medium text-slate-800 dark:text-slate-100 leading-relaxed">
                  甲手持<span class="font-bold text-slate-900 dark:text-white bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded border border-slate-300 dark:border-slate-700">西瓜刀</span>，耍了一套西瓜刀法<span class="font-bold text-rose-700 dark:text-rose-400 bg-rose-50 dark:bg-rose-950/80 px-1.5 py-0.5 rounded border border-rose-200 dark:border-rose-800">想要砍死乙</span>，不料乙施展<span class="font-bold text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/80 px-1.5 py-0.5 rounded border border-emerald-200 dark:border-emerald-800">凌波微步閃過</span>。
                </p>
              </div>

              <!-- 問題導引與階梯檢驗流程 -->
              <div class="space-y-3">
                <div class="text-xs font-black text-emerald-900 dark:text-emerald-200 bg-emerald-100/90 dark:bg-emerald-900/60 px-2.5 py-1 rounded-lg border border-emerald-300 dark:border-emerald-700 w-fit flex items-center gap-1.5">
                  <span>💡</span>
                  <span>【問題導引】論罪邏輯三階梯拆解</span>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <!-- Step 1 -->
                  <div class="p-3.5 rounded-2xl bg-white dark:bg-slate-900 border-2 border-slate-300 dark:border-slate-700 shadow-2xs space-y-1.5">
                    <div class="flex items-center justify-between text-xs font-black text-slate-800 dark:text-slate-100">
                      <span>步驟 1：客觀結果</span>
                      <span class="text-rose-700 dark:text-rose-300 font-mono text-[11px] font-black px-1.5 py-0.5 bg-rose-50 dark:bg-rose-950/80 rounded border border-rose-200 dark:border-rose-800">未該當</span>
                    </div>
                    <p class="text-xs sm:text-[13px] text-slate-800 dark:text-slate-100 font-medium leading-relaxed">
                      甲客觀上並未殺死乙，客觀構成要件未該當，<span class="font-bold text-rose-700 dark:text-rose-400 bg-rose-50 dark:bg-rose-950/80 px-1 py-0.5 rounded border border-rose-200 dark:border-rose-800">並非處罰原則（原則不罰）</span>。
                    </p>
                  </div>

                  <!-- Step 2 -->
                  <div class="p-3.5 rounded-2xl bg-white dark:bg-slate-900 border-2 border-amber-300 dark:border-amber-700/80 shadow-2xs space-y-1.5">
                    <div class="flex items-center justify-between text-xs font-black text-amber-900 dark:text-amber-200">
                      <span>步驟 2：明示法條依據</span>
                      <span class="text-amber-800 dark:text-amber-200 font-mono text-[11px] font-black px-1.5 py-0.5 bg-amber-100 dark:bg-amber-900/70 rounded border border-amber-300">罪刑法定</span>
                    </div>
                    <p class="text-xs sm:text-[13px] text-slate-800 dark:text-slate-100 font-medium leading-relaxed">
                      依<strong class="font-mono font-bold text-amber-900 dark:text-amber-100 bg-amber-200/90 dark:bg-amber-800/80 px-1.5 py-0.5 rounded border border-amber-300">刑法 § 25 Ⅱ ➔ § 271 Ⅱ</strong>，法律明文規定<span class="font-bold text-amber-950 dark:text-amber-100">殺人未遂犯罰之</span>。
                    </p>
                  </div>

                  <!-- Step 3 -->
                  <div class="p-3.5 rounded-2xl bg-white dark:bg-slate-900 border-2 border-emerald-300 dark:border-emerald-700/80 shadow-2xs space-y-1.5">
                    <div class="flex items-center justify-between text-xs font-black text-emerald-900 dark:text-emerald-200">
                      <span>步驟 3：實質要件審查</span>
                      <span class="text-emerald-800 dark:text-emerald-200 font-mono text-[11px] font-black px-1.5 py-0.5 bg-emerald-100 dark:bg-emerald-900/70 rounded border border-emerald-300">成立未遂</span>
                    </div>
                    <p class="text-xs sm:text-[13px] text-slate-800 dark:text-slate-100 font-medium leading-relaxed">
                      滿足其他犯罪成立要件：<strong class="font-bold text-emerald-900 dark:text-emerald-100 bg-emerald-100/90 dark:bg-emerald-900/60 px-1.5 py-0.5 rounded border border-emerald-300">客觀上有著手 ＋ 主觀上有故意</strong>，論以殺人未遂犯。
                    </p>
                  </div>
                </div>
              </div>

              <!-- 2026 現行法規查核區塊 (多欄位Note Skill 規範) -->
              <div class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/80 border-2 border-slate-300 dark:border-slate-700 space-y-3">
                <div class="flex items-center justify-between flex-wrap gap-2">
                  <span class="text-xs font-black text-slate-800 dark:text-slate-200 flex items-center gap-1.5">
                    <span>⚖️</span>
                    <span>2026 現行法規查核與裁判拘束狀態</span>
                  </span>
                  <span class="text-[11px] px-2.5 py-0.5 rounded-md bg-emerald-100 dark:bg-emerald-900/60 text-emerald-800 dark:text-emerald-200 font-black border border-emerald-300 dark:border-emerald-700">
                    條文無更動・受憲判字第 8 號拘束
                  </span>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div class="p-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 space-y-1.5">
                    <div class="font-black text-slate-900 dark:text-white flex items-center justify-between text-xs sm:text-[13px]">
                      <span>刑法第 25 條 (未遂犯)</span>
                      <a href="https://law.moj.gov.tw/LawClass/LawSingle.aspx?pcode=C0000001&flno=25" target="_blank" rel="noopener noreferrer" class="text-blue-600 dark:text-blue-400 font-bold hover:underline text-[11px]">全國法規 ↗</a>
                    </div>
                    <p class="text-slate-800 dark:text-slate-200 leading-relaxed font-medium">
                      第 1 項明定「已著手於犯罪行為之實行而不遂者，為未遂犯」；第 2 項明定「未遂犯之處罰，以有特別規定者為限，並得按既遂犯之刑減輕之」。
                    </p>
                  </div>

                  <div class="p-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 space-y-1.5">
                    <div class="font-black text-slate-900 dark:text-white flex items-center justify-between text-xs sm:text-[13px]">
                      <span>刑法第 271 條 (殺人罪)</span>
                      <a href="https://law.moj.gov.tw/LawClass/LawSingle.aspx?pcode=C0000001&flno=271" target="_blank" rel="noopener noreferrer" class="text-blue-600 dark:text-blue-400 font-bold hover:underline text-[11px]">全國法規 ↗</a>
                    </div>
                    <p class="text-slate-800 dark:text-slate-200 leading-relaxed font-medium">
                      第 2 項明定「前項之未遂犯罰之」。依憲法法庭 113 年憲判字第 8 號判決，死刑限情節最嚴重之既遂犯罪；未遂犯依 § 25 Ⅱ 得減輕其刑。
                    </p>
                  </div>
                </div>
              </div>

              <!-- 🐣 【超亮眼白話文專區】案例 2-1 西瓜刀砍人案 白話秒懂大拆解 -->
              <div class="rounded-2xl p-5 sm:p-6 bg-gradient-to-br from-emerald-50 via-teal-50/80 to-green-100 dark:from-[#0d2818] dark:via-[#091e12] dark:to-[#040e08] border-2 border-emerald-400 dark:border-emerald-500 border-l-[8px] border-l-emerald-500 shadow-md shadow-emerald-500/10 space-y-4">
                
                <!-- 小白專區 Header -->
                <div class="flex items-center justify-between flex-wrap gap-2 border-b border-emerald-200 dark:border-emerald-800/80 pb-3">
                  <div class="flex items-center gap-2">
                    <span class="text-2xl animate-bounce">🐣</span>
                    <div>
                      <div class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white text-[11px] font-black shadow-xs">
                        <span>💡 零基礎秒懂專區</span>
                        <span>•</span>
                        <span>白話文大翻譯</span>
                      </div>
                      <h4 class="text-base sm:text-lg font-black text-emerald-950 dark:text-emerald-100 pt-0.5">
                        西瓜刀砍人沒砍中，乙也沒受傷，憑什麼抓甲去坐牢？
                      </h4>
                    </div>
                  </div>
                  <span class="text-xs font-bold text-emerald-800 dark:text-emerald-300 bg-emerald-100 dark:bg-emerald-900/60 px-2.5 py-1 rounded-lg border border-emerald-300 dark:border-emerald-700">
                    🎯 案例 2-1 白話攻略
                  </span>
                </div>

                <!-- 一句話白話金句 -->
                <div class="p-3.5 sm:p-4 rounded-xl bg-white dark:bg-slate-900 border-2 border-emerald-300 dark:border-emerald-600 shadow-xs">
                  <div class="text-[11px] font-black text-emerald-600 dark:text-emerald-400 uppercase tracking-wider mb-1">
                    📢 一句話大白話翻譯
                  </div>
                  <p class="text-sm sm:text-base font-black text-slate-900 dark:text-white leading-relaxed">
                    👉「<span class="text-emerald-700 dark:text-emerald-400 underline decoration-emerald-400 underline-offset-4">砍人沒死≠沒事！刀已經揮出去了（著手）＋ 心裡真想置人於死（故意），法條有開罰，一樣要抓去關！</span>」
                  </p>
                </div>

                <!-- 趣味日常比喻：丟墨水球砸仇人名牌衣 -->
                <div class="p-4 rounded-xl bg-emerald-100/60 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/60 space-y-2 text-xs sm:text-[13px] text-slate-800 dark:text-slate-200 leading-relaxed">
                  <div class="font-black text-emerald-900 dark:text-emerald-200 flex items-center gap-1.5 text-sm">
                    <span>🎯</span>
                    <span>生活超有感比喻：【丟黑墨水球砸仇人名牌西裝】</span>
                  </div>
                  <p>
                    想像你跟死對頭吵架，你裝了滿滿一整顆黑色墨水大氣球：
                  </p>
                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                    <div class="p-3 rounded-xl bg-white dark:bg-slate-900 border-2 border-rose-300 dark:border-rose-700 shadow-2xs space-y-1">
                      <span class="font-black text-rose-700 dark:text-rose-300 block text-xs sm:text-[13px]">💣 砸出去但被閃過（沒成功）</span>
                      <p class="text-slate-800 dark:text-slate-100 text-xs sm:text-[13px] font-medium leading-relaxed">
                        你用盡全力朝他砸過去，結果他側身閃開，水球在水泥地上爆開，他的名牌衣服完全沒沾到一滴墨水（<span class="font-bold text-slate-900 dark:text-white">客觀沒得逞</span>）。
                      </p>
                    </div>
                    <div class="p-3 rounded-xl bg-white dark:bg-slate-900 border-2 border-emerald-300 dark:border-emerald-700 shadow-2xs space-y-1">
                      <span class="font-black text-emerald-700 dark:text-emerald-300 block text-xs sm:text-[13px]">⚖️ 為什麼西瓜刀要罰，有些事卻不罰？</span>
                      <p class="text-slate-800 dark:text-slate-100 text-xs sm:text-[13px] font-medium leading-relaxed">
                        如果是毀損衣服，刑法根本沒規定「毀損未遂要罰」，直接不罰！但甲今天揮的是西瓜刀、想的是要人命！<span class="font-bold text-emerald-800 dark:text-emerald-300">刑法第 271 條第 2 項白紙黑字寫著「殺人未遂要罰」</span>，所以甲逃不掉！
                      </p>
                    </div>
                  </div>
                  <p class="text-emerald-950 dark:text-emerald-100 font-bold bg-white/80 dark:bg-slate-900/60 p-2.5 rounded-lg border border-emerald-300/60">
                    💡 <strong>為什麼叫「凌波微步閃過」也要罰？</strong> 刑法不是只看運氣！乙能閃過是乙運氣好、身手敏捷，但甲惡性重大、刀法都揮出去了，對社會的威脅已經產生，這就是刑法設立<strong>「未遂犯」</strong>專門要制裁的對象！
                  </p>
                </div>

                <!-- 小白白話檢驗三步驟 -->
                <div class="space-y-2">
                  <div class="text-xs font-black text-emerald-950 dark:text-emerald-200 flex items-center gap-1">
                    <span>⚡</span>
                    <span>小白秒殺檢驗：三步判定甲是不是殺人未遂</span>
                  </div>
                  <div class="grid grid-cols-1 md:grid-cols-3 gap-2.5 text-xs">
                    
                    <div class="p-3.5 rounded-xl bg-white dark:bg-slate-900 border-2 border-slate-300 dark:border-slate-700 shadow-xs space-y-1.5">
                      <div class="font-black text-slate-800 dark:text-slate-200 text-xs">
                        第 1 步：看結果有沒有死人？
                      </div>
                      <p class="text-slate-800 dark:text-slate-100 font-medium leading-relaxed text-xs">
                        乙毫髮無傷 ➜ 客觀構成要件沒該當！<span class="font-bold text-rose-700 dark:text-rose-400">刑法原則是不罰的！</span>
                      </p>
                    </div>

                    <div class="p-3.5 rounded-xl bg-white dark:bg-slate-900 border-2 border-amber-300 dark:border-amber-700 shadow-xs space-y-1.5">
                      <div class="font-black text-amber-900 dark:text-amber-200 text-xs">
                        第 2 步：查法條有沒有開後門？
                      </div>
                      <p class="text-slate-800 dark:text-slate-100 font-medium leading-relaxed text-xs">
                        翻開法條看 ➜ 刑法第 271 條第 2 項寫「罰未遂」！<span class="font-bold text-amber-800 dark:text-amber-300">拿到例外開罰門票！</span>
                      </p>
                    </div>

                    <div class="p-3.5 rounded-xl bg-white dark:bg-slate-900 border-2 border-emerald-300 dark:border-emerald-700 shadow-xs space-y-1.5">
                      <div class="font-black text-emerald-900 dark:text-emerald-200 text-xs">
                        第 3 步：動作跟心態有齊全嗎？
                      </div>
                      <p class="text-slate-800 dark:text-slate-100 font-medium leading-relaxed text-xs">
                        西瓜刀砍出去了（著手）＋ 心裡想要砍死他（故意）➜ <span class="font-bold text-emerald-700 dark:text-emerald-400">正式成立殺人未遂！</span>
                      </p>
                    </div>

                  </div>
                </div>

              </div>

            </div>
          </section>

          <!-- 四、案例 2-2 西瓜刀練刀致死案與過失犯之審查 -->
          <section id="sec-ch2-case-2-2" class="space-y-6 pt-2">
            <div class="flex items-center gap-3">
              <span class="w-2 h-6 rounded-full bg-cyan-500"></span>
              <h3 class="text-lg sm:text-xl font-black text-slate-900 dark:text-white tracking-tight">
                四、案例 2-2 西瓜刀練刀致死案與過失犯之審查（教材第 1-14 頁）
              </h3>
            </div>

            <div class="box-legal-navy p-6 rounded-3xl space-y-5">
              
              <!-- 案情標籤 -->
              <div class="flex items-center justify-between flex-wrap gap-2">
                <div class="flex items-center gap-2">
                  <span class="px-2.5 py-1 rounded-xl bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 font-mono text-xs font-black border border-cyan-300 dark:border-cyan-700">
                    案例 2-2
                  </span>
                  <span class="text-xs font-bold text-slate-800 dark:text-slate-200">
                    西瓜刀練刀致死案・過失犯例外擴張處罰檢驗
                  </span>
                </div>
                <span class="text-xs text-slate-400 font-mono">教材第 1-14 頁 原文案例</span>
              </div>

              <!-- 案情事實 -->
              <div class="p-4 rounded-2xl bg-white dark:bg-slate-900 border-2 border-cyan-300 dark:border-cyan-700/80 shadow-xs space-y-1.5">
                <div class="text-xs font-black text-cyan-800 dark:text-cyan-300">【案例事實】</div>
                <p class="text-xs sm:text-sm font-medium text-slate-800 dark:text-slate-100 leading-relaxed">
                  甲手持<span class="font-bold text-slate-900 dark:text-white bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded border border-slate-300 dark:border-slate-700">西瓜刀</span>，在空地上認真練習西瓜刀法，乙施展<span class="font-bold text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/80 px-1.5 py-0.5 rounded border border-emerald-200 dark:border-emerald-800">凌波微步</span>自一旁走過，<span class="font-bold text-rose-700 dark:text-rose-400 bg-rose-50 dark:bg-rose-950/80 px-1.5 py-0.5 rounded border border-rose-200 dark:border-rose-800">不慎中刀身亡</span>。
                </p>
              </div>

              <!-- 論罪邏輯拆解：四階審查流程 -->
              <div class="space-y-3">
                <div class="text-xs font-black text-cyan-900 dark:text-cyan-200 bg-cyan-100/90 dark:bg-cyan-900/60 px-2.5 py-1 rounded-lg border border-cyan-300 dark:border-cyan-700 w-fit flex items-center gap-1.5">
                  <span>💡</span>
                  <span>【問題導引】過失犯之論罪邏輯四階梯拆解</span>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                  <!-- Step 1 -->
                  <div class="p-3.5 rounded-2xl bg-white dark:bg-slate-900 border-2 border-emerald-300 dark:border-emerald-700/80 shadow-2xs space-y-1.5">
                    <div class="flex items-center justify-between text-xs font-black text-emerald-900 dark:text-emerald-200">
                      <span>步驟 1：客觀結果</span>
                      <span class="text-emerald-800 dark:text-emerald-200 font-mono text-[11px] font-black px-1.5 py-0.5 bg-emerald-100 dark:bg-emerald-900/70 rounded border border-emerald-300">該當既遂</span>
                    </div>
                    <p class="text-xs sm:text-[13px] text-slate-800 dark:text-slate-100 font-medium leading-relaxed">
                      乙中刀死亡，客觀上發生死亡結果，客觀構成要件業已該當（<span class="font-bold text-emerald-800 dark:text-emerald-300">達既遂狀態</span>）。
                    </p>
                  </div>

                  <!-- Step 2 -->
                  <div class="p-3.5 rounded-2xl bg-white dark:bg-slate-900 border-2 border-rose-300 dark:border-rose-700/80 shadow-2xs space-y-1.5">
                    <div class="flex items-center justify-between text-xs font-black text-rose-900 dark:text-rose-200">
                      <span>步驟 2：主觀故意</span>
                      <span class="text-rose-700 dark:text-rose-300 font-mono text-[11px] font-black px-1.5 py-0.5 bg-rose-50 dark:bg-rose-950/80 rounded border border-rose-200 dark:border-rose-800">欠缺不該當</span>
                    </div>
                    <p class="text-xs sm:text-[13px] text-slate-800 dark:text-slate-100 font-medium leading-relaxed">
                      甲僅認真練刀，無殺害乙之故意。主觀要件不該當，<span class="font-bold text-rose-700 dark:text-rose-400 bg-rose-50 dark:bg-rose-950/80 px-1 py-0.5 rounded border border-rose-200 dark:border-rose-800">並非處罰原則（原則不罰）</span>。
                    </p>
                  </div>

                  <!-- Step 3 -->
                  <div class="p-3.5 rounded-2xl bg-white dark:bg-slate-900 border-2 border-amber-300 dark:border-amber-700/80 shadow-2xs space-y-1.5">
                    <div class="flex items-center justify-between text-xs font-black text-amber-900 dark:text-amber-200">
                      <span>步驟 3：明示法條</span>
                      <span class="text-amber-800 dark:text-amber-200 font-mono text-[11px] font-black px-1.5 py-0.5 bg-amber-100 dark:bg-amber-900/70 rounded border border-amber-300">罪刑法定</span>
                    </div>
                    <p class="text-xs sm:text-[13px] text-slate-800 dark:text-slate-100 font-medium leading-relaxed">
                      依<strong class="font-mono font-bold text-amber-900 dark:text-amber-100 bg-amber-200/90 dark:bg-amber-800/80 px-1.5 py-0.5 rounded border border-amber-300">刑法 § 12 Ⅱ ➔ § 276 Ⅰ</strong>，法律明文規定<span class="font-bold text-amber-950 dark:text-amber-100">過失致死罪罰之</span>。
                    </p>
                  </div>

                  <!-- Step 4 -->
                  <div class="p-3.5 rounded-2xl bg-white dark:bg-slate-900 border-2 border-cyan-300 dark:border-cyan-700/80 shadow-2xs space-y-1.5">
                    <div class="flex items-center justify-between text-xs font-black text-cyan-900 dark:text-cyan-200">
                      <span>步驟 4：實質審查</span>
                      <span class="text-cyan-800 dark:text-cyan-200 font-mono text-[11px] font-black px-1.5 py-0.5 bg-cyan-100 dark:bg-cyan-900/70 rounded border border-cyan-300">成立過失</span>
                    </div>
                    <p class="text-xs sm:text-[13px] text-slate-800 dark:text-slate-100 font-medium leading-relaxed">
                      滿足要件：<strong class="font-bold text-cyan-900 dark:text-cyan-100 bg-cyan-100/90 dark:bg-cyan-900/60 px-1.5 py-0.5 rounded border border-cyan-300">客觀達既遂 ＋ 主觀具預見可能性</strong>，論以過失致死罪！
                    </p>
                  </div>
                </div>
              </div>

              <!-- 2026 現行法規查核區塊 -->
              <div class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/80 border-2 border-slate-300 dark:border-slate-700 space-y-3">
                <div class="flex items-center justify-between flex-wrap gap-2">
                  <span class="text-xs font-black text-slate-800 dark:text-slate-200 flex items-center gap-1.5">
                    <span>⚖️</span>
                    <span>2026 現行法規查核與法定刑狀態</span>
                  </span>
                  <span class="text-[11px] px-2.5 py-0.5 rounded-md bg-cyan-100 dark:bg-cyan-900/60 text-cyan-800 dark:text-cyan-200 font-black border border-cyan-300 dark:border-cyan-700">
                    108 年廢除業務過失・全面適用第 1 項
                  </span>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div class="p-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 space-y-1.5">
                    <div class="font-black text-slate-900 dark:text-white flex items-center justify-between text-xs sm:text-[13px]">
                      <span>刑法第 12 條 (故意與過失)</span>
                      <a href="https://law.moj.gov.tw/LawClass/LawSingle.aspx?pcode=C0000001&flno=12" target="_blank" rel="noopener noreferrer" class="text-blue-600 dark:text-blue-400 font-bold hover:underline text-[11px]">全國法規 ↗</a>
                    </div>
                    <p class="text-slate-800 dark:text-slate-200 leading-relaxed font-medium">
                      第 1 項：「行為非出於故意或過失者，不罰。」<br>
                      第 2 項：「過失行為之處罰，以有特別規定者為限。」明定過失處罰之例外擴張原則。
                    </p>
                  </div>

                  <div class="p-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 space-y-1.5">
                    <div class="font-black text-slate-900 dark:text-white flex items-center justify-between text-xs sm:text-[13px]">
                      <span>刑法第 276 條 (過失致死罪)</span>
                      <a href="https://law.moj.gov.tw/LawClass/LawSingle.aspx?pcode=C0000001&flno=276" target="_blank" rel="noopener noreferrer" class="text-blue-600 dark:text-blue-400 font-bold hover:underline text-[11px]">全國法規 ↗</a>
                    </div>
                    <p class="text-slate-800 dark:text-slate-200 leading-relaxed font-medium">
                      第 1 項：「因過失致人於死者，處五年以下有期徒刑、拘役或五十萬元以下罰金。」（民國 108 年刪除第 2 項業務過失致死，回歸第 1 項統一評價）。
                    </p>
                  </div>
                </div>
              </div>

              <!-- 🐣 【超亮眼白話文專區】案例 2-2 西瓜刀練刀致死案 白話秒懂大拆解 -->
              <div class="rounded-2xl p-5 sm:p-6 bg-gradient-to-br from-cyan-50 via-sky-50/80 to-blue-100 dark:from-[#0a1e28] dark:via-[#07161e] dark:to-[#030b0f] border-2 border-cyan-400 dark:border-cyan-500 border-l-[8px] border-l-cyan-500 shadow-md shadow-cyan-500/10 space-y-4">
                
                <!-- 小白專區 Header -->
                <div class="flex items-center justify-between flex-wrap gap-2 border-b border-cyan-200 dark:border-cyan-800/80 pb-3">
                  <div class="flex items-center gap-2">
                    <span class="text-2xl animate-bounce">🐣</span>
                    <div>
                      <div class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-gradient-to-r from-cyan-600 to-blue-600 text-white text-[11px] font-black shadow-xs">
                        <span>💡 零基礎秒懂專區</span>
                        <span>•</span>
                        <span>白話文大翻譯</span>
                      </div>
                      <h4 class="text-base sm:text-lg font-black text-cyan-950 dark:text-cyan-100 pt-0.5">
                        甲只是在空地認真練刀，根本不想殺人，憑什麼要抓去坐牢？
                      </h4>
                    </div>
                  </div>
                  <span class="text-xs font-bold text-cyan-800 dark:text-cyan-300 bg-cyan-100 dark:bg-cyan-900/60 px-2.5 py-1 rounded-lg border border-cyan-300 dark:border-cyan-700">
                    🎯 案例 2-2 白話攻略
                  </span>
                </div>

                <!-- 一句話白話金句 -->
                <div class="p-3.5 sm:p-4 rounded-xl bg-white dark:bg-slate-900 border-2 border-cyan-300 dark:border-cyan-600 shadow-xs">
                  <div class="text-[11px] font-black text-cyan-600 dark:text-cyan-400 uppercase tracking-wider mb-1">
                    📢 一句話大白話翻譯
                  </div>
                  <p class="text-sm sm:text-base font-black text-slate-900 dark:text-white leading-relaxed">
                    👉「<span class="text-cyan-700 dark:text-cyan-400 underline decoration-cyan-400 underline-offset-4">沒故意≠免死金牌！拿真刀練功不看路，太粗心鬧出人命（過失），法條專門抓你這種粗心鬼！</span>」
                  </p>
                </div>

                <!-- 趣味日常比喻：人行道蒙眼打棒球 vs 踩破路人眼鏡 -->
                <div class="p-4 rounded-xl bg-cyan-100/60 dark:bg-cyan-950/40 border border-cyan-200 dark:border-cyan-800/60 space-y-2 text-xs sm:text-[13px] text-slate-800 dark:text-slate-200 leading-relaxed">
                  <div class="font-black text-cyan-900 dark:text-cyan-200 flex items-center gap-1.5 text-sm">
                    <span>🎯</span>
                    <span>生活超有感比喻：【在人行道蒙眼打棒球 vs 踩破路人眼鏡】</span>
                  </div>
                  <p>
                    想像兩件日常糊塗事，為什麼刑法待遇差這麼多：
                  </p>
                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                    <div class="p-3 rounded-xl bg-white dark:bg-slate-900 border-2 border-cyan-300 dark:border-cyan-700 shadow-2xs space-y-1">
                      <span class="font-black text-cyan-800 dark:text-cyan-300 block text-xs sm:text-[13px]">⚾ 情境 A：拿金屬球棒在熱鬧街道揮動</span>
                      <p class="text-slate-800 dark:text-slate-100 text-xs sm:text-[13px] font-medium leading-relaxed">
                        你雖然心裡沒想打死誰（<span class="font-bold text-slate-900 dark:text-white">無故意</span>），但在大家走動的地方大力揮棒，路人經過被打破頭死亡（<span class="font-bold text-rose-700 dark:text-rose-400">發生人命結果</span>）。你明明該看路卻不看（<span class="font-bold text-cyan-800 dark:text-cyan-300">應注意能注意而不注意＝過失</span>），刑法第 276 條明文抓「過失致死」，必須坐牢！
                      </p>
                    </div>
                    <div class="p-3 rounded-xl bg-white dark:bg-slate-900 border-2 border-amber-300 dark:border-amber-700 shadow-2xs space-y-1">
                      <span class="font-black text-amber-800 dark:text-amber-300 block text-xs sm:text-[13px]">👓 情境 B：跑步低頭不小心踩破別人眼鏡</span>
                      <p class="text-slate-800 dark:text-slate-100 text-xs sm:text-[13px] font-medium leading-relaxed">
                        你跑步沒看地上，一腳踩爛路人掉在地上的名牌眼鏡（<span class="font-bold text-slate-900 dark:text-white">過失弄壞東西</span>）。刑法「毀損罪」根本沒有過失犯規定！所以你只要掏錢賠眼鏡（<span class="font-bold text-emerald-700 dark:text-emerald-400">民事賠償</span>），警察無權抓你坐牢！
                      </p>
                    </div>
                  </div>
                  <p class="text-cyan-950 dark:text-cyan-100 font-bold bg-white/80 dark:bg-slate-900/60 p-2.5 rounded-lg border border-cyan-300/60">
                    💡 <strong>為什麼叫「過失處罰是例外」？</strong> 刑法是國家最嚴厲的武器，原則上只處罰「心懷不軌、故意使壞」的人。只有在最重大、無可挽回的法益（例如<strong>人命、重大身體安全</strong>）受到粗心侵害時，法律才會例外打開大門處罰過失犯！
                  </p>
                </div>

                <!-- 小白白話檢驗四步驟 -->
                <div class="space-y-2">
                  <div class="text-xs font-black text-cyan-950 dark:text-cyan-200 flex items-center gap-1">
                    <span>⚡</span>
                    <span>小白秒殺檢驗：四步判定甲是不是過失致死罪</span>
                  </div>
                  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 text-xs">
                    
                    <div class="p-3 rounded-xl bg-white dark:bg-slate-900 border-2 border-emerald-300 dark:border-emerald-700 shadow-xs space-y-1">
                      <div class="font-black text-emerald-900 dark:text-emerald-200 text-xs">
                        第 1 步：看結果有沒有死人？
                      </div>
                      <p class="text-slate-800 dark:text-slate-100 font-medium leading-relaxed text-xs">
                        乙中刀死亡 ➜ 客觀構成要件該當！<span class="font-bold text-emerald-700 dark:text-emerald-400">客觀結果發生！</span>
                      </p>
                    </div>

                    <div class="p-3 rounded-xl bg-white dark:bg-slate-900 border-2 border-rose-300 dark:border-rose-700 shadow-xs space-y-1">
                      <div class="font-black text-rose-900 dark:text-rose-200 text-xs">
                        第 2 步：看甲心裡想殺人嗎？
                      </div>
                      <p class="text-slate-800 dark:text-slate-100 font-medium leading-relaxed text-xs">
                        甲只是在練刀，根本不想殺人 ➜ <span class="font-bold text-rose-700 dark:text-rose-400">主觀無故意！原則不罰！</span>
                      </p>
                    </div>

                    <div class="p-3 rounded-xl bg-white dark:bg-slate-900 border-2 border-amber-300 dark:border-amber-700 shadow-xs space-y-1">
                      <div class="font-black text-amber-900 dark:text-amber-200 text-xs">
                        第 3 步：查法條有沒有開後門？
                      </div>
                      <p class="text-slate-800 dark:text-slate-100 font-medium leading-relaxed text-xs">
                        翻刑法第 276 條第 1 項 ➜ <span class="font-bold text-amber-800 dark:text-amber-300">明文寫「過失致死罰之」！拿到開罰門票！</span>
                      </p>
                    </div>

                    <div class="p-3 rounded-xl bg-white dark:bg-slate-900 border-2 border-cyan-300 dark:border-cyan-700 shadow-xs space-y-1">
                      <div class="font-black text-cyan-900 dark:text-cyan-200 text-xs">
                        第 4 步：實質檢驗有沒有過失？
                      </div>
                      <p class="text-slate-800 dark:text-slate-100 font-medium leading-relaxed text-xs">
                        公眾空地揮真刀不注意周圍 ➜ 具注意義務而未注意，<span class="font-bold text-cyan-700 dark:text-cyan-400">成立過失致死罪！</span>
                      </p>
                    </div>

                  </div>
                </div>

              </div>

            </div>
          </section>

          <!-- 五、【解題提示】直覺誤區辨正與 § 12 之法條邏輯證明 -->
          <section id="sec-ch2-tips-formula" class="space-y-6 pt-2">
            <div class="flex items-center gap-3">
              <span class="w-2 h-6 rounded-full bg-indigo-500"></span>
              <h3 class="text-lg sm:text-xl font-black text-slate-900 dark:text-white tracking-tight">
                五、【解題提示】直覺誤區辨正與 § 12 之法條邏輯證明（教材第 1-14 頁）
              </h3>
            </div>

            <div class="box-legal-navy p-6 rounded-3xl space-y-6">
              
              <!-- 核心警告提示 -->
              <div class="p-4 sm:p-5 rounded-2xl bg-amber-100/70 dark:bg-amber-950/50 border-2 border-amber-300 dark:border-amber-700 space-y-2">
                <div class="flex items-center gap-2 text-xs sm:text-sm font-black text-amber-900 dark:text-amber-200">
                  <span>⚠️</span>
                  <span>【解題提示】不可不慎的兩大直覺嚴重錯誤（法盲直覺 vs 刑法教義）</span>
                </div>
                <p class="text-xs sm:text-[13px] text-slate-900 dark:text-slate-100 font-medium leading-relaxed">
                  在初學刑法時，初學者常依生活直覺作出「非黑即白」的草率論斷，誤將客觀不該當等同於未遂、主觀不該當等同於過失。這兩大盲點是國考解題與實例審查中最致命的失分陷阱！
                </p>
              </div>

              <!-- 兩大誤區對照矩陣 -->
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <!-- 誤區 1 -->
                <div class="p-5 rounded-2xl bg-white dark:bg-slate-900 border-2 border-rose-300 dark:border-rose-700/80 shadow-xs space-y-3">
                  <div class="flex items-center justify-between">
                    <span class="text-xs font-black text-rose-700 dark:text-rose-400 flex items-center gap-1.5">
                      <span>❌</span>
                      <span>誤區一：客觀未該當 ＝ 未遂？</span>
                    </span>
                    <span class="text-[11px] font-mono px-2 py-0.5 rounded-full bg-rose-100 dark:bg-rose-950 text-rose-800 dark:text-rose-200 font-black border border-rose-300">嚴重錯誤</span>
                  </div>
                  <div class="text-base font-black text-slate-900 dark:text-white flex items-center gap-2">
                    <span>非既遂</span>
                    <span class="text-rose-600 font-black px-2 py-0.5 rounded-lg bg-rose-50 dark:bg-rose-950/80 border border-rose-300">≠</span>
                    <span>未遂犯</span>
                  </div>
                  <p class="text-xs sm:text-[13px] text-slate-800 dark:text-slate-100 font-medium leading-relaxed">
                    <strong class="text-rose-700 dark:text-rose-400 font-bold">【觀念辨正】：</strong>客觀構成要件不具備僅是「非既遂」。要成立未遂犯，除分則<strong class="font-bold text-amber-900 dark:text-amber-100 bg-amber-100 dark:bg-amber-900/60 px-1 py-0.5 rounded border border-amber-300">明文處罰未遂（§ 25 Ⅱ）</strong>外，更必須滿足實質要件：<strong class="font-bold text-indigo-900 dark:text-indigo-100 bg-indigo-50 dark:bg-indigo-950/80 px-1.5 py-0.5 rounded border border-indigo-200 dark:border-indigo-800">客觀上有著手 ＋ 主觀上有故意</strong>。若連著手都未達到（例如僅止於陰謀或預備階段），根本不成立未遂犯！
                  </p>
                </div>

                <!-- 誤區 2 -->
                <div class="p-5 rounded-2xl bg-white dark:bg-slate-900 border-2 border-rose-300 dark:border-rose-700/80 shadow-xs space-y-3">
                  <div class="flex items-center justify-between">
                    <span class="text-xs font-black text-rose-700 dark:text-rose-400 flex items-center gap-1.5">
                      <span>❌</span>
                      <span>誤區二：主觀未該當 ＝ 過失？</span>
                    </span>
                    <span class="text-[11px] font-mono px-2 py-0.5 rounded-full bg-rose-100 dark:bg-rose-950 text-rose-800 dark:text-rose-200 font-black border border-rose-300">嚴重錯誤</span>
                  </div>
                  <div class="text-base font-black text-slate-900 dark:text-white flex items-center gap-2">
                    <span>非故意</span>
                    <span class="text-rose-600 font-black px-2 py-0.5 rounded-lg bg-rose-50 dark:bg-rose-950/80 border border-rose-300">≠</span>
                    <span>過失犯</span>
                  </div>
                  <p class="text-xs sm:text-[13px] text-slate-800 dark:text-slate-100 font-medium leading-relaxed">
                    <strong class="text-rose-700 dark:text-rose-400 font-bold">【觀念辨正】：</strong>主觀構成要件不具備僅是「非故意」。要成立過失犯，除法律<strong class="font-bold text-amber-900 dark:text-amber-100 bg-amber-100 dark:bg-amber-900/60 px-1 py-0.5 rounded border border-amber-300">明文處罰過失（§ 12 Ⅱ）</strong>外，更必須滿足實質要件：<strong class="font-bold text-indigo-900 dark:text-indigo-100 bg-indigo-50 dark:bg-indigo-950/80 px-1.5 py-0.5 rounded border border-indigo-200 dark:border-indigo-800">客觀達既遂 ＋ 主觀具預見可能性</strong>。若根本欠缺預見可能性（不可抗力或意外事件），屬於「無過失」，依法絕對不罰！
                  </p>
                </div>
              </div>

              <!-- 法條邏輯鐵證卡片 -->
              <div class="p-5 rounded-2xl bg-gradient-to-br from-indigo-50/90 via-sky-50/60 to-blue-50/80 dark:from-indigo-950/60 dark:to-blue-950/50 border-2 border-indigo-300 dark:border-indigo-700 shadow-xs space-y-4">
                <div class="flex items-center justify-between flex-wrap gap-2">
                  <span class="text-xs sm:text-sm font-black text-indigo-950 dark:text-indigo-200 flex items-center gap-1.5">
                    <span>🔬</span>
                    <span>法條邏輯鐵證：刑法第 12 條第 1 項之反面解釋證明</span>
                  </span>
                  <span class="text-[11px] font-mono px-2.5 py-0.5 rounded-md bg-indigo-100 dark:bg-indigo-900/70 text-indigo-800 dark:text-indigo-200 font-black border border-indigo-300">教材核心精義</span>
                </div>

                <div class="p-4 rounded-xl bg-white dark:bg-slate-900 border-2 border-indigo-200 dark:border-indigo-800 text-xs sm:text-[13px] text-slate-800 dark:text-slate-200 space-y-1.5">
                  <div class="font-black text-slate-900 dark:text-white">《刑法第 12 條第 1 項》原文：</div>
                  <p class="font-mono text-indigo-700 dark:text-indigo-300 font-black text-sm bg-indigo-50/60 dark:bg-indigo-950/40 p-2 rounded-lg border border-indigo-200 dark:border-indigo-800">
                    「行為非出於故意或過失者，不罰。」
                  </p>
                </div>

                <div class="space-y-2 text-xs sm:text-[13px] text-slate-800 dark:text-slate-100 font-medium leading-relaxed">
                  <p class="font-black text-indigo-950 dark:text-indigo-200">
                    <strong>【嚴密反證邏輯推導】：</strong>
                  </p>
                  <ul class="list-disc pl-5 space-y-2 text-xs sm:text-[13px]">
                    <li>
                      <strong>假定反面命題成立：</strong>如果「非故意 ＝ 過失」，那麼世界上人類行為的主觀心理狀態就只有「故意」與「過失」兩種，非此即彼，絕無第三種可能。
                    </li>
                    <li>
                      <strong>推導出邏輯荒謬：</strong>若非故意即過失，則任何一個行為若「非出於故意」，就必然「出於過失」；世上根本不可能存在「非出於故意，且非出於過失」的狀態。
                    </li>
                    <li>
                      <strong>法條文字化為廢話：</strong>如此一來，刑法 § 12 Ⅰ 後半段「<strong>...或過失者，不罰</strong>」在現實中將永遠無適用的可能，整段立法將徹底淪為無意義的贅語！
                    </li>
                    <li>
                      <strong>邏輯結論：</strong>既然立法者特地明文寫下「非出於故意<strong>或過失</strong>者，不罰」，即鐵證證明世界上必定存在第三種心理狀態——<strong class="font-bold text-indigo-950 dark:text-white bg-indigo-200/90 dark:bg-indigo-800/80 px-2 py-0.5 rounded border border-indigo-300">【非故意 且 非過失】＝【無過失（意外事件）】</strong>！
                    </li>
                  </ul>
                </div>

                <!-- 心理三態視覺化標籤 -->
                <div class="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-1 text-center font-mono text-xs">
                  <div class="p-3 rounded-xl bg-rose-50 dark:bg-rose-950/60 border-2 border-rose-300 dark:border-rose-700 shadow-2xs space-y-0.5">
                    <span class="block text-rose-700 dark:text-rose-300 font-black text-xs sm:text-sm">① 故意</span>
                    <span class="text-[11px] text-slate-800 dark:text-slate-200 font-bold block">處罰原則（分則藍本）</span>
                  </div>
                  <div class="p-3 rounded-xl bg-amber-50 dark:bg-amber-950/60 border-2 border-amber-300 dark:border-amber-700 shadow-2xs space-y-0.5">
                    <span class="block text-amber-800 dark:text-amber-300 font-black text-xs sm:text-sm">② 過失</span>
                    <span class="text-[11px] text-slate-800 dark:text-slate-200 font-bold block">處罰例外（§ 12 Ⅱ 明文）</span>
                  </div>
                  <div class="p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 border-2 border-emerald-300 dark:border-emerald-700 shadow-2xs space-y-0.5">
                    <span class="block text-emerald-800 dark:text-emerald-300 font-black text-xs sm:text-sm">③ 無過失</span>
                    <span class="text-[11px] text-slate-800 dark:text-slate-200 font-bold block">絕對不罰（§ 12 Ⅰ 意外）</span>
                  </div>
                </div>
              </div>

              <!-- 🐣 【超亮眼白話文專區】直覺誤區與 § 12 邏輯密碼 白話秒懂大拆解 -->
              <div class="rounded-2xl p-5 sm:p-6 bg-gradient-to-br from-indigo-50 via-purple-50/80 to-blue-100 dark:from-[#13112c] dark:via-[#0e0c22] dark:to-[#090717] border-2 border-indigo-400 dark:border-indigo-500 border-l-[8px] border-l-indigo-600 shadow-md shadow-indigo-500/10 space-y-4">
                
                <!-- 小白專區 Header -->
                <div class="flex items-center justify-between flex-wrap gap-2 border-b border-indigo-200 dark:border-indigo-800/80 pb-3">
                  <div class="flex items-center gap-2">
                    <span class="text-2xl animate-bounce">🐣</span>
                    <div>
                      <div class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-[11px] font-black shadow-xs">
                        <span>💡 零基礎秒懂專區</span>
                        <span>•</span>
                        <span>白話文大翻譯</span>
                      </div>
                      <h4 class="text-base sm:text-lg font-black text-indigo-950 dark:text-indigo-100 pt-0.5">
                        為什麼法律人老愛說「沒成功≠未遂、沒故意≠過失」？到底在繞什麼口令？
                      </h4>
                    </div>
                  </div>
                  <span class="text-xs font-bold text-indigo-800 dark:text-indigo-300 bg-indigo-100 dark:bg-indigo-900/60 px-2.5 py-1 rounded-lg border border-indigo-300 dark:border-indigo-700">
                    🎯 直覺誤區秒懂攻略
                  </span>
                </div>

                <!-- 一句話白話金句 -->
                <div class="p-3.5 sm:p-4 rounded-xl bg-white dark:bg-slate-900 border-2 border-indigo-300 dark:border-indigo-600 shadow-xs">
                  <div class="text-[11px] font-black text-indigo-600 dark:text-indigo-400 uppercase tracking-wider mb-1">
                    📢 一句話大白話翻譯
                  </div>
                  <p class="text-sm sm:text-base font-black text-slate-900 dark:text-white leading-relaxed">
                    👉「<span class="text-indigo-700 dark:text-indigo-400 underline decoration-indigo-400 underline-offset-4">事情沒幹成（非既遂），大多只是白忙一場不犯法！沒打算使壞（非故意），純倒楣意外根本不必坐牢！</span>」
                  </p>
                </div>

                <!-- 趣味日常比喻：買假樂透兌獎 vs 路上被雷劈 -->
                <div class="p-4 rounded-xl bg-indigo-100/60 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-800/60 space-y-2 text-xs sm:text-[13px] text-slate-800 dark:text-slate-200 leading-relaxed">
                  <div class="font-black text-indigo-950 dark:text-indigo-200 flex items-center gap-1.5 text-sm">
                    <span>🎯</span>
                    <span>生活超有感比喻：【躺平做白日夢 vs 假彩券兌獎・被雷劈 vs 玩手機撞人】</span>
                  </div>
                  <p>
                    初學者最常犯「非黑即白」的錯誤，看看這兩組極端對比就懂了：
                  </p>
                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                    <div class="p-3 rounded-xl bg-white dark:bg-slate-900 border-2 border-rose-300 dark:border-rose-700 shadow-2xs space-y-1">
                      <span class="font-black text-rose-700 dark:text-rose-300 block text-xs sm:text-[13px]">🛌 誤區一：非既遂 ≠ 未遂</span>
                      <p class="text-slate-800 dark:text-slate-100 text-xs sm:text-[13px] font-medium leading-relaxed">
                        你躺在床上幻想搶銀行（<span class="font-bold text-slate-900 dark:text-white">沒搶成＝非既遂</span>），警察能把你抓去關「強盜未遂」嗎？當然不行！一定要你真的<span class="font-bold text-rose-700 dark:text-rose-400">掏出假槍指著行員（著手實行）</span>被警衛制伏，才算未遂！沒動手前的白日夢統統無罪！
                      </p>
                    </div>
                    <div class="p-3 rounded-xl bg-white dark:bg-slate-900 border-2 border-blue-300 dark:border-blue-700 shadow-2xs space-y-1">
                      <span class="font-black text-blue-700 dark:text-blue-300 block text-xs sm:text-[13px]">⚡ 誤區二：非故意 ≠ 過失</span>
                      <p class="text-slate-800 dark:text-slate-100 text-xs sm:text-[13px] font-medium leading-relaxed">
                        你在人行道好好走路，突然地層下陷你跌倒順便壓傷路人（<span class="font-bold text-slate-900 dark:text-white">沒想傷人＝非故意</span>）。難道你是過失犯？不是！這是無可預測的「意外（無過失）」，刑法保證免罰！只有<span class="font-bold text-blue-800 dark:text-blue-300">邊滑抖音閉眼走路撞傷人（應注意能注意而不注意）</span>才叫過失！
                      </p>
                    </div>
                  </div>
                  <p class="text-indigo-950 dark:text-indigo-100 font-bold bg-white/80 dark:bg-slate-900/60 p-2.5 rounded-lg border border-indigo-300/60">
                    💡 <strong>為什麼刑法 § 12 證明了「世上有第三種心態」？</strong> 法條說「不是故意或過失，不罰」。如果世上不是故意就是過失，那「非故意且非過失」就不可能存在，後半句就成廢話了！所以法條自己親口證明：<strong>世上有一大塊叫做「完全無過失的意外事件」，受憲法保障絕對不罰！</strong>
                  </p>
                </div>

                <!-- 小白心理三態光譜速記卡 -->
                <div class="space-y-2">
                  <div class="text-xs font-black text-indigo-950 dark:text-indigo-200 flex items-center gap-1">
                    <span>⚡</span>
                    <span>小白秒記光譜：人類行為的三種命運</span>
                  </div>
                  <div class="grid grid-cols-1 md:grid-cols-3 gap-2.5 text-xs">
                    
                    <div class="p-3.5 rounded-xl bg-white dark:bg-slate-900 border-2 border-rose-300 dark:border-rose-700 shadow-xs space-y-1.5">
                      <div class="font-black text-rose-700 dark:text-rose-300 text-xs flex items-center justify-between">
                        <span>😈 故意使壞</span>
                        <span class="px-1.5 py-0.5 rounded bg-rose-100 text-rose-800 font-bold text-[10px]">原則處罰</span>
                      </div>
                      <p class="text-slate-800 dark:text-slate-100 font-medium leading-relaxed text-xs">
                        明知故犯、心術不正 ➜ <span class="font-bold text-rose-700 dark:text-rose-400">刑法最主要打擊的對象！</span>
                      </p>
                    </div>

                    <div class="p-3.5 rounded-xl bg-white dark:bg-slate-900 border-2 border-amber-300 dark:border-amber-700 shadow-xs space-y-1.5">
                      <div class="font-black text-amber-900 dark:text-amber-200 text-xs flex items-center justify-between">
                        <span>🤦 粗心大意</span>
                        <span class="px-1.5 py-0.5 rounded bg-amber-100 text-amber-900 font-bold text-[10px]">例外處罰</span>
                      </div>
                      <p class="text-slate-800 dark:text-slate-100 font-medium leading-relaxed text-xs">
                        沒看路不小心搞砸 ➜ <span class="font-bold text-amber-800 dark:text-amber-300">法律有特別寫才罰，沒寫放人！</span>
                      </p>
                    </div>

                    <div class="p-3.5 rounded-xl bg-white dark:bg-slate-900 border-2 border-emerald-300 dark:border-emerald-700 shadow-xs space-y-1.5">
                      <div class="font-black text-emerald-900 dark:text-emerald-200 text-xs flex items-center justify-between">
                        <span>🕊️ 意外倒楣</span>
                        <span class="px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-900 font-bold text-[10px]">絕對不罰</span>
                      </div>
                      <p class="text-slate-800 dark:text-slate-100 font-medium leading-relaxed text-xs">
                        神仙也猜不到的天災意外 ➜ <span class="font-bold text-emerald-700 dark:text-emerald-400">無過失，刑法第 12 條保證無罪！</span>
                      </p>
                    </div>

                  </div>
                </div>

              </div>

            </div>
          </section>

          <!-- 六、阻卻違法之例外排除與案例 2-3（意圖式挑唆防衛） -->
          <section id="sec-ch2-case-2-3" class="space-y-6 pt-2">
            <div class="flex items-center gap-3">
              <span class="w-2 h-6 rounded-full bg-violet-500"></span>
              <h3 class="text-lg sm:text-xl font-black text-slate-900 dark:text-white tracking-tight">
                六、阻卻違法之例外排除與案例 2-3（意圖式挑唆防衛，教材第 1-14 ～ 1-15 頁）
              </h3>
            </div>

            <div class="box-legal-gold p-6 rounded-3xl space-y-6">
              
              <!-- 階層原則與例外對比導引 -->
              <div class="p-4 sm:p-5 rounded-2xl bg-amber-100/70 dark:bg-amber-950/50 border-2 border-amber-300 dark:border-amber-700 space-y-2">
                <h4 class="text-sm sm:text-base font-black text-amber-950 dark:text-amber-100 flex items-center gap-2">
                  <span class="px-2 py-0.5 rounded-md bg-amber-200 dark:bg-amber-900/80 text-amber-900 dark:text-amber-100 font-mono text-xs font-black border border-amber-300">階層邏輯</span>
                  <span>違法性階層之原則與「例外排除」</span>
                </h4>
                <p class="text-xs sm:text-[13px] text-slate-900 dark:text-slate-100 font-medium leading-relaxed">
                  該當構成要件之行為，原則上受違法性之推定；行為人若能主張正當防衛（§ 23）、緊急避難（§ 24）等法定或超法定事由，原則上阻卻違法。然而，<strong class="text-amber-950 dark:text-white underline decoration-amber-400">法律秩序絕不容許權利之濫用</strong>——若行為人客觀上看似符合防衛情狀，但實質上具有侵害意圖在先或嚴重權利濫用者，<strong class="font-bold text-rose-700 dark:text-rose-300 bg-rose-50 dark:bg-rose-950/80 px-1 py-0.5 rounded border border-rose-200 dark:border-rose-800">例外排除阻卻違法事由之適用，回歸違法並成立犯罪！</strong>
                </p>
              </div>

              <!-- 案例 2-3 卡片 -->
              <div class="p-5 rounded-2xl bg-white dark:bg-slate-900 border-2 border-violet-300 dark:border-violet-700/80 shadow-xs space-y-4">
                <div class="flex items-center justify-between flex-wrap gap-2">
                  <div class="flex items-center gap-2">
                    <span class="px-2.5 py-1 rounded-xl bg-violet-100 dark:bg-violet-950 text-violet-800 dark:text-violet-200 font-mono text-xs font-black border border-violet-300 dark:border-violet-700">
                      案例 2-3
                    </span>
                    <span class="text-xs font-bold text-slate-800 dark:text-slate-200">
                      意圖式挑唆防衛（法律系甲設局挑釁情敵案）
                    </span>
                  </div>
                  <span class="text-xs text-slate-400 font-mono">教材第 1-14 ～ 1-15 頁 原文案例</span>
                </div>

                <!-- 案情事實 -->
                <div class="p-4 rounded-2xl bg-violet-50/50 dark:bg-slate-950/60 border-2 border-violet-200 dark:border-violet-800/60 space-y-1.5">
                  <div class="text-xs font-black text-violet-800 dark:text-violet-300">【案例事實】</div>
                  <p class="text-xs sm:text-sm font-medium text-slate-800 dark:text-slate-100 leading-relaxed">
                    甲是<span class="font-bold text-slate-900 dark:text-white bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded border border-slate-300 dark:border-slate-700">法律系學生</span>，知道刑法第 23 條正當防衛不罰。甲想痛扁情敵乙，<span class="font-bold text-amber-800 dark:text-amber-200 bg-amber-50 dark:bg-amber-950/80 px-1.5 py-0.5 rounded border border-amber-200 dark:border-amber-800">故意設局在路上對乙瘋狂挑釁辱罵其祖宗十八代</span>，激怒乙出手朝甲揮拳。甲算準時機，<span class="font-bold text-rose-700 dark:text-rose-400 bg-rose-50 dark:bg-rose-950/80 px-1.5 py-0.5 rounded border border-rose-200 dark:border-rose-800">抄起預藏的鋼骨雨傘猛擊乙</span>，導致乙受有<span class="font-bold text-slate-900 dark:text-white bg-slate-100 dark:bg-slate-800 px-1 py-0.5 rounded">多處挫傷瘀血</span>。
                  </p>
                </div>

                <!-- 審查結構拆解 -->
                <div class="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
                  <div class="p-3.5 rounded-2xl bg-white dark:bg-slate-900 border-2 border-slate-300 dark:border-slate-700 shadow-2xs space-y-1.5">
                    <span class="text-xs font-black text-slate-800 dark:text-slate-200 block">① 表面防衛情狀</span>
                    <p class="text-slate-800 dark:text-slate-100 font-medium leading-relaxed text-xs sm:text-[13px]">
                      乙先出手揮拳，客觀上看似存在「現在不法之侵害」；甲持傘反擊看似為排除侵害之防衛行為。
                    </p>
                  </div>
                  <div class="p-3.5 rounded-2xl bg-white dark:bg-slate-900 border-2 border-amber-300 dark:border-amber-700/80 shadow-2xs space-y-1.5">
                    <span class="text-xs font-black text-amber-900 dark:text-amber-200 block">② 實質侵害意圖在先</span>
                    <p class="text-slate-800 dark:text-slate-100 font-medium leading-relaxed text-xs sm:text-[13px]">
                      甲自始具備傷害故意，設局辱罵誘敵出拳，將正當防衛作為傷害他人之掩護工具，構成<strong class="text-amber-900 dark:text-amber-200 bg-amber-100 dark:bg-amber-900/60 px-1 py-0.5 rounded">「意圖式挑唆防衛」</strong>。
                    </p>
                  </div>
                  <div class="p-3.5 rounded-2xl bg-white dark:bg-slate-900 border-2 border-rose-300 dark:border-rose-700/80 shadow-2xs space-y-1.5">
                    <span class="text-xs font-black text-rose-700 dark:text-rose-300 block">③ 例外排除阻卻違法</span>
                    <p class="text-slate-800 dark:text-slate-100 font-medium leading-relaxed text-xs sm:text-[13px]">
                      權利濫用不受法秩序保護！例外不得主張 § 23 正當防衛，甲仍成立<strong class="font-bold text-rose-700 dark:text-rose-400 bg-rose-50 dark:bg-rose-950/80 px-1 py-0.5 rounded border border-rose-200 dark:border-rose-800">刑法 § 277 條第 1 項普通傷害罪</strong>！
                    </p>
                  </div>
                </div>
              </div>

              <!-- 阻卻違法之相關例外盤點 (教材體系延伸) -->
              <div class="space-y-3">
                <div class="text-xs font-black text-violet-900 dark:text-violet-200 bg-violet-100/90 dark:bg-violet-900/60 px-2.5 py-1 rounded-lg border border-violet-300 dark:border-violet-700 w-fit flex items-center gap-1.5">
                  <span>📚</span>
                  <span>【體系盤點】教材中提及之阻卻違法「例外排除」情狀</span>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
                  <div class="p-3.5 rounded-2xl bg-white dark:bg-slate-900 border-2 border-slate-300 dark:border-slate-700 shadow-2xs space-y-1.5">
                    <span class="font-black text-violet-800 dark:text-violet-300 block text-xs sm:text-[13px]">🍒 利益絕對失衡（櫻桃案）</span>
                    <p class="text-slate-800 dark:text-slate-100 font-medium leading-relaxed text-xs">
                      防衛手段所保全之法益與侵害之法益顯失均衡（如為保護幾顆櫻桃而開槍擊斃偷摘少年），構成權利濫用，不阻卻違法。
                    </p>
                  </div>

                  <div class="p-3.5 rounded-2xl bg-white dark:bg-slate-900 border-2 border-slate-300 dark:border-slate-700 shadow-2xs space-y-1.5">
                    <span class="font-black text-violet-800 dark:text-violet-300 block text-xs sm:text-[13px]">💉 違反人性尊嚴（輸血案）</span>
                    <p class="text-slate-800 dark:text-slate-100 font-medium leading-relaxed text-xs">
                      避難手段不得踐踏人格尊嚴。即便是為救他人性命，亦絕對不得強行抽取非自願路人之血液，無緊急避難之適用。
                    </p>
                  </div>

                  <div class="p-3.5 rounded-2xl bg-white dark:bg-slate-900 border-2 border-slate-300 dark:border-slate-700 shadow-2xs space-y-1.5">
                    <span class="font-black text-violet-800 dark:text-violet-300 block text-xs sm:text-[13px]">📜 明知命令違法（§ 21 Ⅱ）</span>
                    <p class="text-slate-800 dark:text-slate-100 font-medium leading-relaxed text-xs">
                      公務員依所屬上級公務員命令之職務行為原則阻卻違法；但但書明定若「明知命令違法者」，例外排除，不阻卻違法。
                    </p>
                  </div>

                  <div class="p-3.5 rounded-2xl bg-white dark:bg-slate-900 border-2 border-slate-300 dark:border-slate-700 shadow-2xs space-y-1.5">
                    <span class="font-black text-violet-800 dark:text-violet-300 block text-xs sm:text-[13px]">🚒 特別義務關係（§ 24 Ⅱ）</span>
                    <p class="text-slate-800 dark:text-slate-100 font-medium leading-relaxed text-xs">
                      依公務或業務負有特別義務者（如消防員滅火、軍警執行任務），不得主張緊急避難以圖逃避本身應負之法定救助義務。
                    </p>
                  </div>
                </div>
              </div>

              <!-- 🐣 【超亮眼白話文專區】案例 2-3 意圖式挑唆防衛 白話秒懂大拆解 -->
              <div class="rounded-2xl p-5 sm:p-6 bg-gradient-to-br from-violet-50 via-purple-50/80 to-indigo-100 dark:from-[#1b0d2b] dark:via-[#140921] dark:to-[#0d0517] border-2 border-violet-400 dark:border-violet-500 border-l-[8px] border-l-violet-600 shadow-md shadow-violet-500/10 space-y-4">
                
                <!-- 小白專區 Header -->
                <div class="flex items-center justify-between flex-wrap gap-2 border-b border-violet-200 dark:border-violet-800/80 pb-3">
                  <div class="flex items-center gap-2">
                    <span class="text-2xl animate-bounce">🐣</span>
                    <div>
                      <div class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 text-white text-[11px] font-black shadow-xs">
                        <span>💡 零基礎秒懂專區</span>
                        <span>•</span>
                        <span>白話文大翻譯</span>
                      </div>
                      <h4 class="text-base sm:text-lg font-black text-violet-950 dark:text-violet-100 pt-0.5">
                        「明明是他先動手打我！」甲故意設局惹怒情敵再反擊，為什麼不能算正當防衛？
                      </h4>
                    </div>
                  </div>
                  <span class="text-xs font-bold text-violet-800 dark:text-violet-300 bg-violet-100 dark:bg-violet-900/60 px-2.5 py-1 rounded-lg border border-violet-300 dark:border-violet-700">
                    🎯 案例 2-3 白話攻略
                  </span>
                </div>

                <!-- 一句話白話金句 -->
                <div class="p-3.5 sm:p-4 rounded-xl bg-white dark:bg-slate-900 border-2 border-violet-300 dark:border-violet-600 shadow-xs">
                  <div class="text-[11px] font-black text-violet-600 dark:text-violet-400 uppercase tracking-wider mb-1">
                    📢 一句話大白話翻譯
                  </div>
                  <p class="text-sm sm:text-base font-black text-slate-900 dark:text-white leading-relaxed">
                    👉「<span class="text-violet-700 dark:text-violet-400 underline decoration-violet-400 underline-offset-4">假防衛真尋仇！正當防衛是給好人當『保命盾牌』，不是給你當『揍人球棒』！故意碰瓷激怒別人動手，法律直接沒收免死金牌！</span>」
                  </p>
                </div>

                <!-- 趣味日常比喻：假碰瓷惹人生氣 vs 走在路上被惡煞攻擊 -->
                <div class="p-4 rounded-xl bg-violet-100/60 dark:bg-violet-950/40 border border-violet-200 dark:border-violet-800/60 space-y-2 text-xs sm:text-[13px] text-slate-800 dark:text-slate-200 leading-relaxed">
                  <div class="font-black text-violet-950 dark:text-violet-200 flex items-center gap-1.5 text-sm">
                    <span>🎯</span>
                    <span>生活超有感比喻：【假裝碰瓷釣魚 vs 路人突遭惡煞攻擊】</span>
                  </div>
                  <p>
                    想像兩種完全不同的「還手打人」狀況：
                  </p>
                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                    <div class="p-3 rounded-xl bg-white dark:bg-slate-900 border-2 border-rose-300 dark:border-rose-700 shadow-2xs space-y-1">
                      <span class="font-black text-rose-700 dark:text-rose-300 block text-xs sm:text-[13px]">🪤 情境 A（意圖式挑唆＝假正義真碰瓷）：</span>
                      <p class="text-slate-800 dark:text-slate-100 text-xs sm:text-[13px] font-medium leading-relaxed">
                        甲早就想揍乙，傘都買好藏在身後，跑去對著乙狂噴「有種打我啊廢物！」。乙氣瘋出拳，甲立刻拿鋼骨傘把乙打進加護病房。法官不是傻子！這叫<span class="font-bold text-rose-700 dark:text-rose-400">「披著正當防衛皮的故意傷害」</span>，法律直接沒收正當防衛，當作傷害罪嚴辦！
                      </p>
                    </div>
                    <div class="p-3 rounded-xl bg-white dark:bg-slate-900 border-2 border-emerald-300 dark:border-emerald-700 shadow-2xs space-y-1">
                      <span class="font-black text-emerald-700 dark:text-emerald-300 block text-xs sm:text-[13px]">🛡️ 情境 B（真正的正當防衛＝純粹防身被動自保）：</span>
                      <p class="text-slate-800 dark:text-slate-100 text-xs sm:text-[13px] font-medium leading-relaxed">
                        你在人行道好好散步，突然衝出一個醉漢拿酒瓶要砸你。你危急中抄起隨身雨傘把對方推開造成對方摔倒擦傷。你<span class="font-bold text-emerald-700 dark:text-emerald-300">事前根本沒想惹事</span>，純粹為了救命，這才叫 100% 正當防衛，保證免罰！
                      </p>
                    </div>
                  </div>
                  <p class="text-violet-950 dark:text-violet-100 font-bold bg-white/80 dark:bg-slate-900/60 p-2.5 rounded-lg border border-violet-300/60">
                    💡 <strong>為什麼叫「阻卻違法之例外排除」？</strong> 刑法說「正當防衛不罰」，這是原則；但如果你自己惡劣在先、想鑽法律漏洞把正當防衛當成「合法的揍人執照」，法律秩序就會啟動防護罩——<strong>「例外排除阻卻違法」，把你打回傷害罪坐牢！</strong>
                  </p>
                </div>

                <!-- 小白白話檢驗三步驟 -->
                <div class="space-y-2">
                  <div class="text-xs font-black text-violet-950 dark:text-violet-200 flex items-center gap-1">
                    <span>⚡</span>
                    <span>小白秒殺檢驗：三步拆穿甲的碰瓷防衛</span>
                  </div>
                  <div class="grid grid-cols-1 md:grid-cols-3 gap-2.5 text-xs">
                    
                    <div class="p-3.5 rounded-xl bg-white dark:bg-slate-900 border-2 border-slate-300 dark:border-slate-700 shadow-xs space-y-1.5">
                      <div class="font-black text-slate-800 dark:text-slate-200 text-xs">
                        第 1 步：看表面誰先動手？
                      </div>
                      <p class="text-slate-800 dark:text-slate-100 font-medium leading-relaxed text-xs">
                        乙確實先出拳 ➜ <span class="font-bold text-slate-700 dark:text-slate-300">客觀看似有不法侵害。</span>
                      </p>
                    </div>

                    <div class="p-3.5 rounded-xl bg-white dark:bg-slate-900 border-2 border-amber-300 dark:border-amber-700 shadow-xs space-y-1.5">
                      <div class="font-black text-amber-900 dark:text-amber-200 text-xs">
                        第 2 步：掀底牌看甲在想啥？
                      </div>
                      <p class="text-slate-800 dark:text-slate-100 font-medium leading-relaxed text-xs">
                        鋼骨傘早就藏好、罵人也是故意的 ➜ <span class="font-bold text-amber-800 dark:text-amber-300">骨子裡就是想痛扁情敵（傷害故意）！</span>
                      </p>
                    </div>

                    <div class="p-3.5 rounded-xl bg-white dark:bg-slate-900 border-2 border-rose-300 dark:border-rose-700 shadow-xs space-y-1.5">
                      <div class="font-black text-rose-700 dark:text-rose-300 text-xs">
                        第 3 步：沒收免死金牌！
                      </div>
                      <p class="text-slate-800 dark:text-slate-100 font-medium leading-relaxed text-xs">
                        惡意挑唆構成權利濫用 ➜ <span class="font-bold text-rose-700 dark:text-rose-400">排除正當防衛，依普通傷害罪抓去關！</span>
                      </p>
                    </div>

                  </div>
                </div>

              </div>

            </div>
          </section>

          <!-- 七、阻卻罪責之例外排除與案例 2-4（原因自由行為） -->
          <section id="sec-ch2-case-2-4" class="space-y-6 pt-2">
            <div class="flex items-center gap-3">
              <span class="w-2 h-6 rounded-full bg-rose-500"></span>
              <h3 class="text-lg sm:text-xl font-black text-slate-900 dark:text-white tracking-tight">
                七、阻卻罪責之例外排除與案例 2-4（原因自由行為，教材第 1-15 頁）
              </h3>
            </div>

            <div class="box-legal-navy p-6 rounded-3xl space-y-6">
              
              <!-- 階層原則與例外對比導引 -->
              <div class="p-4 sm:p-5 rounded-2xl bg-rose-100/70 dark:bg-rose-950/50 border-2 border-rose-300 dark:border-rose-700 space-y-2">
                <h4 class="text-sm sm:text-base font-black text-rose-950 dark:text-rose-100 flex items-center gap-2">
                  <span class="px-2 py-0.5 rounded-md bg-rose-200 dark:bg-rose-900/80 text-rose-900 dark:text-rose-100 font-mono text-xs font-black border border-rose-300">階層邏輯</span>
                  <span>罪責階層之「同時性原則」與例外排除</span>
                </h4>
                <p class="text-xs sm:text-[13px] text-slate-900 dark:text-slate-100 font-medium leading-relaxed">
                  刑法基本原則要求<strong>「行為與責任能力同時存在」（責任同時性原則）</strong>。若行為人在著手行為之時，因精神障礙或心智缺陷致不能辨識行為違法或欠缺控制能力，依刑法 § 19 Ⅰ 原則上不罰（阻卻罪責）。然而，若行為人係<strong>「故意或過失自陷無責任能力狀態以實施犯罪」</strong>，法律將<strong class="font-bold text-rose-700 dark:text-rose-300 bg-white dark:bg-slate-900 px-1.5 py-0.5 rounded border border-rose-200 dark:border-rose-800">例外排除阻卻罪責之適用</strong>，此即<strong class="text-rose-700 dark:text-rose-400 font-black">「原因自由行為」（Actio libera in causa）</strong>！
                </p>
              </div>

              <!-- 案例 2-4 卡片 -->
              <div class="p-5 rounded-2xl bg-white dark:bg-slate-900 border-2 border-rose-300 dark:border-rose-700/80 shadow-xs space-y-4">
                <div class="flex items-center justify-between flex-wrap gap-2">
                  <div class="flex items-center gap-2">
                    <span class="px-2.5 py-1 rounded-xl bg-rose-100 dark:bg-rose-950 text-rose-800 dark:text-rose-200 font-mono text-xs font-black border border-rose-300 dark:border-rose-700">
                      案例 2-4
                    </span>
                    <span class="text-xs font-bold text-slate-800 dark:text-slate-200">
                      原因自由行為（生吞蛇膽灌烈酒壯膽殺情敵案）
                    </span>
                  </div>
                  <span class="text-xs text-slate-400 font-mono">教材第 1-15 頁 原文案例</span>
                </div>

                <div class="p-4 rounded-2xl bg-rose-50/50 dark:bg-slate-950/60 border-2 border-rose-200 dark:border-rose-800/60 space-y-1.5">
                  <div class="text-xs font-black text-rose-800 dark:text-rose-300">【案例事實】</div>
                  <p class="text-xs sm:text-sm font-medium text-slate-800 dark:text-slate-100 leading-relaxed">
                    甲想殺死情敵乙，但平日生性怯懦不敢下手。甲心生一計，<span class="font-bold text-amber-800 dark:text-amber-200 bg-amber-50 dark:bg-amber-950/80 px-1.5 py-0.5 rounded border border-amber-200 dark:border-amber-800">生吞蛇膽並狂灌高粱酒壯膽</span>，讓自己陷入<span class="font-bold text-slate-900 dark:text-white bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded border border-slate-300 dark:border-slate-700">爛醉如泥、喪失控制能力的泥醉狀態</span>。隨後甲在意識不清的爛醉狀態下，<span class="font-bold text-rose-700 dark:text-rose-400 bg-rose-50 dark:bg-rose-950/80 px-1.5 py-0.5 rounded border border-rose-200 dark:border-rose-800">持刀衝入乙家將乙亂刀刺死</span>。
                  </p>
                </div>

                <!-- 審查結構拆解 -->
                <div class="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
                  <div class="p-3.5 rounded-2xl bg-white dark:bg-slate-900 border-2 border-slate-300 dark:border-slate-700 shadow-2xs space-y-1.5">
                    <span class="text-xs font-black text-slate-800 dark:text-slate-200 block">① 實行行為時狀態</span>
                    <p class="text-slate-800 dark:text-slate-100 font-medium leading-relaxed text-xs sm:text-[13px]">
                      甲刺殺乙時，已陷入泥醉狀態，客觀上看似符合刑法 § 19 Ⅰ 不能辨識或控制之無責任能力外觀。
                    </p>
                  </div>
                  <div class="p-3.5 rounded-2xl bg-white dark:bg-slate-900 border-2 border-amber-300 dark:border-amber-700/80 shadow-2xs space-y-1.5">
                    <span class="text-xs font-black text-amber-900 dark:text-amber-200 block">② 原因設定階段可責</span>
                    <p class="text-slate-800 dark:text-slate-100 font-medium leading-relaxed text-xs sm:text-[13px]">
                      甲自陷泥醉前具完全責任能力，且係<strong class="text-amber-900 dark:text-amber-200 bg-amber-100 dark:bg-amber-900/60 px-1 py-0.5 rounded">基於殺人之故意而蓄意飲酒</strong>，後續殺人乃其意思決定之延伸。
                    </p>
                  </div>
                  <div class="p-3.5 rounded-2xl bg-white dark:bg-slate-900 border-2 border-rose-300 dark:border-rose-700/80 shadow-2xs space-y-1.5">
                    <span class="text-xs font-black text-rose-700 dark:text-rose-300 block">③ 依 § 19 Ⅲ 例外排除</span>
                    <p class="text-slate-800 dark:text-slate-100 font-medium leading-relaxed text-xs sm:text-[13px]">
                      依刑法第 19 條第 3 項明文排除責任減免，甲<strong class="text-rose-700 dark:text-rose-300 underline">不得主張阻卻罪責</strong>，仍成立<strong class="font-bold text-rose-700 dark:text-rose-400 bg-rose-50 dark:bg-rose-950/80 px-1 py-0.5 rounded border border-rose-200 dark:border-rose-800">刑法 § 271 Ⅰ 殺人既遂罪</strong>！
                    </p>
                  </div>
                </div>
              </div>

              <!-- 2026 現行法規查核區塊 -->
              <div class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/80 border-2 border-slate-300 dark:border-slate-700 space-y-3">
                <div class="flex items-center justify-between flex-wrap gap-2">
                  <span class="text-xs font-black text-slate-800 dark:text-slate-200 flex items-center gap-1.5">
                    <span>⚖️</span>
                    <span>2026 現行法規查核：刑法第 19 條立法沿革與適用</span>
                  </span>
                  <a href="https://law.moj.gov.tw/LawClass/LawSingle.aspx?pcode=C0000001&flno=19" target="_blank" rel="noopener noreferrer" class="text-blue-600 dark:text-blue-400 font-bold hover:underline text-xs">全國法規資料庫 ↗</a>
                </div>

                <div class="space-y-2 text-xs text-slate-800 dark:text-slate-200 leading-relaxed font-medium">
                  <div class="p-3.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 space-y-1.5">
                    <span class="font-black text-slate-900 dark:text-white">《刑法第 19 條第 3 項》明文規範：</span>
                    <p class="font-mono text-rose-700 dark:text-rose-400 font-bold bg-rose-50/60 dark:bg-rose-950/40 p-2 rounded-lg border border-rose-200 dark:border-rose-800">
                      「前二項規定，於因故意或過失自陷精神障礙或其他心智缺陷之狀態，致有第一項或第二項之情形者，不適用之。」
                    </p>
                    <p class="text-slate-800 dark:text-slate-200 pt-1 font-medium">
                      我國刑法自民國 94 年修法時，正式將德國與日本刑法學理上之「原因自由行為」法文化，明定為第 19 條第 3 項。凡行為人故意或過失自招心神喪失狀態者，徹底封死其主張無責任能力不罰之退路！
                    </p>
                  </div>
                </div>
              </div>

              <!-- 🐣 【超亮眼白話文專區】案例 2-4 原因自由行為 白話秒懂大拆解 -->
              <div class="rounded-2xl p-5 sm:p-6 bg-gradient-to-br from-rose-50 via-red-50/80 to-amber-100 dark:from-[#2a0b12] dark:via-[#1f070d] dark:to-[#140408] border-2 border-rose-400 dark:border-rose-500 border-l-[8px] border-l-rose-600 shadow-md shadow-rose-500/10 space-y-4">
                
                <!-- 小白專區 Header -->
                <div class="flex items-center justify-between flex-wrap gap-2 border-b border-rose-200 dark:border-rose-800/80 pb-3">
                  <div class="flex items-center gap-2">
                    <span class="text-2xl animate-bounce">🐣</span>
                    <div>
                      <div class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-gradient-to-r from-rose-600 to-red-600 text-white text-[11px] font-black shadow-xs">
                        <span>💡 零基礎秒懂專區</span>
                        <span>•</span>
                        <span>白話文大翻譯</span>
                      </div>
                      <h4 class="text-base sm:text-lg font-black text-rose-950 dark:text-rose-100 pt-0.5">
                        「我喝到斷片、發酒瘋才砍人的，那時我根本沒意識，憑什麼抓我判死刑？」
                      </h4>
                    </div>
                  </div>
                  <span class="text-xs font-bold text-rose-800 dark:text-rose-300 bg-rose-100 dark:bg-rose-900/60 px-2.5 py-1 rounded-lg border border-rose-300 dark:border-rose-700">
                    🎯 案例 2-4 白話攻略
                  </span>
                </div>

                <!-- 一句話白話金句 -->
                <div class="p-3.5 sm:p-4 rounded-xl bg-white dark:bg-slate-900 border-2 border-rose-300 dark:border-rose-600 shadow-xs">
                  <div class="text-[11px] font-black text-rose-600 dark:text-rose-400 uppercase tracking-wider mb-1">
                    📢 一句話大白話翻譯
                  </div>
                  <p class="text-sm sm:text-base font-black text-slate-900 dark:text-white leading-relaxed">
                    👉「<span class="text-rose-700 dark:text-rose-400 underline decoration-rose-400 underline-offset-4">想藉酒裝瘋逃避坐牢？門都沒有！你『清醒時』就預謀幹壞事，自己把自己灌醉當殺人武器，法律照樣當作清醒殺人嚴懲不貸！</span>」
                  </p>
                </div>

                <!-- 趣味日常比喻：把自己改造成定時炸彈 vs 被灌迷湯 -->
                <div class="p-4 rounded-xl bg-rose-100/60 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-800/60 space-y-2 text-xs sm:text-[13px] text-slate-800 dark:text-slate-200 leading-relaxed">
                  <div class="font-black text-rose-950 dark:text-rose-200 flex items-center gap-1.5 text-sm">
                    <span>🎯</span>
                    <span>生活超有感比喻：【把自己改造成遙控炸彈 vs 飲料被下藥】</span>
                  </div>
                  <p>
                    為什麼同樣是「喝醉發瘋」，法律處置天差地遠：
                  </p>
                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                    <div class="p-3 rounded-xl bg-white dark:bg-slate-900 border-2 border-rose-300 dark:border-rose-700 shadow-2xs space-y-1">
                      <span class="font-black text-rose-700 dark:text-rose-300 block text-xs sm:text-[13px]">💣 情境 A（自陷泥醉＝把自己的身體當遙控炸彈）：</span>
                      <p class="text-slate-800 dark:text-slate-100 text-xs sm:text-[13px] font-medium leading-relaxed">
                        甲不敢殺人，先設好鬧鐘、灌下三大瓶烈酒壯膽，讓自己進入暴走模式去砍人。酒是他自己喝的、人是他早就想殺的！法律看的是他<span class="font-bold text-rose-700 dark:text-rose-400">「舉杯喝醉那一刻的壞心眼」</span>，這就叫<strong>原因自由行為</strong>，一律當作清醒殺人判重刑！
                      </p>
                    </div>
                    <div class="p-3 rounded-xl bg-white dark:bg-slate-900 border-2 border-emerald-300 dark:border-emerald-700 shadow-2xs space-y-1">
                      <span class="font-black text-emerald-700 dark:text-emerald-300 block text-xs sm:text-[13px]">🍵 情境 B（無辜被下藥迷昏＝真正喪失心智）：</span>
                      <p class="text-slate-800 dark:text-slate-100 text-xs sm:text-[13px] font-medium leading-relaxed">
                        路人請你喝飲料偷偷下迷幻藥，你神智不清發狂打破店家玻璃。你事前完全不知情，也沒有想搞破壞的念頭，這才是刑法 § 19 條真正要保護的<span class="font-bold text-emerald-700 dark:text-emerald-300">「無責任能力免罰」</span>！
                      </p>
                    </div>
                  </div>
                  <p class="text-rose-950 dark:text-rose-100 font-bold bg-white/80 dark:bg-slate-900/60 p-2.5 rounded-lg border border-rose-300/60">
                    💡 <strong>為什麼叫「原因自由行為」？</strong> 雖然你在砍人當下「身不由己（結果不自由）」，但你在把高粱酒倒進嘴裡那一刻是「完全清醒、自由自在的（原因自由）」！你用清醒時的自由，製造了後來的犯罪工具，當然要為結果負全責！
                  </p>
                </div>

                <!-- 小白白話檢驗三步驟 -->
                <div class="space-y-2">
                  <div class="text-xs font-black text-rose-950 dark:text-rose-200 flex items-center gap-1">
                    <span>⚡</span>
                    <span>小白秒殺檢驗：三步識破裝瘋逃罪計謀</span>
                  </div>
                  <div class="grid grid-cols-1 md:grid-cols-3 gap-2.5 text-xs">
                    
                    <div class="p-3.5 rounded-xl bg-white dark:bg-slate-900 border-2 border-slate-300 dark:border-slate-700 shadow-xs space-y-1.5">
                      <div class="font-black text-slate-800 dark:text-slate-200 text-xs">
                        第 1 步：看動手時有沒有發瘋？
                      </div>
                      <p class="text-slate-800 dark:text-slate-100 font-medium leading-relaxed text-xs">
                        砍人時爛醉斷片 ➜ <span class="font-bold text-slate-700 dark:text-slate-300">客觀看似無意識狀態。</span>
                      </p>
                    </div>

                    <div class="p-3.5 rounded-xl bg-white dark:bg-slate-900 border-2 border-amber-300 dark:border-amber-700 shadow-xs space-y-1.5">
                      <div class="font-black text-amber-900 dark:text-amber-200 text-xs">
                        第 2 步：看是誰讓他發瘋的？
                      </div>
                      <p class="text-slate-800 dark:text-slate-100 font-medium leading-relaxed text-xs">
                        為了壯膽自己灌烈酒 ➜ <span class="font-bold text-amber-800 dark:text-amber-300">自己故意灌醉自己（原因自由）！</span>
                      </p>
                    </div>

                    <div class="p-3.5 rounded-xl bg-white dark:bg-slate-900 border-2 border-rose-300 dark:border-rose-700 shadow-xs space-y-1.5">
                      <div class="font-black text-rose-700 dark:text-rose-300 text-xs">
                        第 3 步：關門放狗不准減刑！
                      </div>
                      <p class="text-slate-800 dark:text-slate-100 font-medium leading-relaxed text-xs">
                        依刑法 § 19 條第 3 項 ➜ <span class="font-bold text-rose-700 dark:text-rose-400">排除無罪免責，依殺人既遂重判！</span>
                      </p>
                    </div>

                  </div>
                </div>

              </div>

            </div>
          </section>

          <!-- 八、刑法處罰光譜總整理與「其他刑罰要件」補充 -->
          <section id="sec-ch2-punishment-spectrum" class="space-y-6 pt-2">
            <div class="flex items-center gap-3">
              <span class="w-2 h-6 rounded-full bg-emerald-500"></span>
              <h3 class="text-lg sm:text-xl font-black text-slate-900 dark:text-white tracking-tight">
                八、刑法處罰光譜總整理與「其他刑罰要件」補充（教材第 1-15 頁）
              </h3>
            </div>

            <div class="box-legal-emerald p-6 rounded-3xl space-y-6">
              
              <!-- 處罰光譜總結導言 -->
              <div class="p-4 sm:p-5 rounded-2xl bg-emerald-100/70 dark:bg-emerald-950/50 border-2 border-emerald-300 dark:border-emerald-700 space-y-2">
                <h4 class="text-sm sm:text-base font-black text-emerald-950 dark:text-emerald-100 flex items-center gap-2">
                  <span class="px-2 py-0.5 rounded-md bg-emerald-200 dark:bg-emerald-900/80 text-emerald-900 dark:text-emerald-100 font-mono text-xs font-black border border-emerald-300">綜上所述</span>
                  <span>刑法分則之立法藍本與處罰光譜</span>
                </h4>
                <p class="text-xs sm:text-[13px] text-slate-900 dark:text-slate-100 font-medium leading-relaxed">
                  綜上所述，刑法分則之條文編寫，均係以<strong class="font-black text-emerald-800 dark:text-emerald-200 bg-white dark:bg-slate-900 px-1.5 py-0.5 rounded border border-emerald-200 dark:border-emerald-800">「故意 ＋ 既遂」作為設計藍本與原則處罰型態</strong>。任何逾越此原則之處罰，均屬例外擴張，必須嚴格遵守罪刑法定原則，具備法律之明文規定：
                </p>
              </div>

              <!-- 原則與例外對照表 -->
              <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                <div class="p-4 rounded-2xl bg-white dark:bg-slate-900 border-2 border-emerald-300 dark:border-emerald-700/80 shadow-2xs space-y-1.5">
                  <span class="font-black text-emerald-800 dark:text-emerald-300 text-sm block">👑 處罰原則</span>
                  <div class="font-bold text-slate-900 dark:text-white text-xs sm:text-[13px]">故意既遂犯</div>
                  <p class="text-slate-800 dark:text-slate-100 font-medium leading-relaxed text-xs">
                    分則所有條文之基本型態。分則未特別註明者，一律僅罰故意既遂。
                  </p>
                </div>

                <div class="p-4 rounded-2xl bg-white dark:bg-slate-900 border-2 border-blue-300 dark:border-blue-700/80 shadow-2xs space-y-1.5">
                  <span class="font-black text-blue-800 dark:text-blue-300 text-sm block">⚡ 例外擴張一</span>
                  <div class="font-bold text-slate-900 dark:text-white text-xs sm:text-[13px]">未遂犯（§ 25 Ⅱ）</div>
                  <p class="text-slate-800 dark:text-slate-100 font-medium leading-relaxed text-xs">
                    必須分則條文明文宣示「前項之未遂犯罰之」，始例外予以處罰。
                  </p>
                </div>

                <div class="p-4 rounded-2xl bg-white dark:bg-slate-900 border-2 border-amber-300 dark:border-amber-700/80 shadow-2xs space-y-1.5">
                  <span class="font-black text-amber-800 dark:text-amber-300 text-sm block">🌀 例外擴張二</span>
                  <div class="font-bold text-slate-900 dark:text-white text-xs sm:text-[13px]">過失犯（§ 12 Ⅱ）</div>
                  <p class="text-slate-800 dark:text-slate-100 font-medium leading-relaxed text-xs">
                    必須法律有特別明文規定（如 § 276 Ⅰ、§ 284 Ⅰ），始例外予以處罰。
                  </p>
                </div>
              </div>

              <!-- 經典罪名處罰光譜矩陣表 -->
              <div class="overflow-x-auto rounded-2xl border-2 border-slate-300 dark:border-slate-700">
                <table class="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr class="bg-slate-100 dark:bg-slate-800 border-b-2 border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white font-black">
                      <th class="p-3 font-black">罪名條文</th>
                      <th class="p-3 font-black text-center">故意既遂（原則）</th>
                      <th class="p-3 font-black text-center">故意未遂（§ 25 Ⅱ）</th>
                      <th class="p-3 font-black text-center">過失既遂（§ 12 Ⅱ）</th>
                      <th class="p-3 font-black text-center">過失未遂</th>
                    </tr>
                  </thead>
                  <tbody class="divide-y divide-slate-200 dark:divide-slate-800 font-mono text-xs sm:text-[13px]">
                    <tr class="hover:bg-slate-50 dark:hover:bg-slate-900/60 bg-white dark:bg-slate-900">
                      <td class="p-3 font-sans font-black text-slate-900 dark:text-white">殺人罪（§ 271）</td>
                      <td class="p-3 text-center text-emerald-700 dark:text-emerald-300 font-black">✅ 罰（§ 271 Ⅰ）</td>
                      <td class="p-3 text-center text-emerald-700 dark:text-emerald-300 font-black">✅ 罰（§ 271 Ⅱ）</td>
                      <td class="p-3 text-center text-emerald-700 dark:text-emerald-300 font-black">✅ 罰（§ 276 Ⅰ）</td>
                      <td class="p-3 text-center text-slate-500 dark:text-slate-400 font-bold">❌ 絕不罰</td>
                    </tr>
                    <tr class="hover:bg-slate-50 dark:hover:bg-slate-900/60 bg-white dark:bg-slate-900">
                      <td class="p-3 font-sans font-black text-slate-900 dark:text-white">傷害罪（§ 277）</td>
                      <td class="p-3 text-center text-emerald-700 dark:text-emerald-300 font-black">✅ 罰（§ 277 Ⅰ）</td>
                      <td class="p-3 text-center text-rose-600 dark:text-rose-400 font-black bg-rose-50/50 dark:bg-rose-950/20">❌ 不罰（未明文）</td>
                      <td class="p-3 text-center text-emerald-700 dark:text-emerald-300 font-black">✅ 罰（§ 284 Ⅰ）</td>
                      <td class="p-3 text-center text-slate-500 dark:text-slate-400 font-bold">❌ 絕不罰</td>
                    </tr>
                    <tr class="hover:bg-slate-50 dark:hover:bg-slate-900/60 bg-white dark:bg-slate-900">
                      <td class="p-3 font-sans font-black text-slate-900 dark:text-white">竊盜罪（§ 320）</td>
                      <td class="p-3 text-center text-emerald-700 dark:text-emerald-300 font-black">✅ 罰（§ 320 Ⅰ）</td>
                      <td class="p-3 text-center text-emerald-700 dark:text-emerald-300 font-black">✅ 罰（§ 320 Ⅲ）</td>
                      <td class="p-3 text-center text-rose-600 dark:text-rose-400 font-black bg-rose-50/50 dark:bg-rose-950/20">❌ 不罰（無過失犯）</td>
                      <td class="p-3 text-center text-slate-500 dark:text-slate-400 font-bold">❌ 絕不罰</td>
                    </tr>
                    <tr class="hover:bg-slate-50 dark:hover:bg-slate-900/60 bg-white dark:bg-slate-900">
                      <td class="p-3 font-sans font-black text-slate-900 dark:text-white">毀損罪（§ 354）</td>
                      <td class="p-3 text-center text-emerald-700 dark:text-emerald-300 font-black">✅ 罰（§ 354）</td>
                      <td class="p-3 text-center text-rose-600 dark:text-rose-400 font-black bg-rose-50/50 dark:bg-rose-950/20">❌ 不罰（無未遂犯）</td>
                      <td class="p-3 text-center text-rose-600 dark:text-rose-400 font-black bg-rose-50/50 dark:bg-rose-950/20">❌ 不罰（無過失犯）</td>
                      <td class="p-3 text-center text-slate-500 dark:text-slate-400 font-bold">❌ 絕不罰</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <!-- 最後補充：其他刑罰要件體系卡片 -->
              <div class="p-5 rounded-2xl bg-white dark:bg-slate-900 border-2 border-emerald-300 dark:border-emerald-700/80 shadow-xs space-y-4">
                <div class="flex items-center justify-between">
                  <span class="text-xs font-black text-slate-900 dark:text-white flex items-center gap-1.5">
                    <span>💎</span>
                    <span>【最後補充】犯罪成立後之「其他刑罰要件」</span>
                  </span>
                  <span class="text-[11px] font-mono px-2 py-0.5 rounded bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 font-black border border-emerald-300">教材第 1-15 頁 終結篇章</span>
                </div>

                <p class="text-xs sm:text-[13px] text-slate-900 dark:text-slate-100 font-medium leading-relaxed">
                  在刑法體系中，行為人只要同時具備<strong class="text-slate-900 dark:text-white bg-slate-100 dark:bg-slate-800 px-1 py-0.5 rounded border border-slate-300">「構成要件該當性 ＋ 違法性 ＋ 罪責」</strong>，其<strong>犯罪即告成立</strong>！然而，「犯罪成立」與「發動刑罰」是兩個不同層次的概念。立法者基於刑事政策、司法資源、人倫和諧或鼓勵悔改之考量，在特定犯罪中另外附加了「其他刑罰要件」：
                </p>

                <div class="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
                  <!-- 1. 客觀處罰條件 -->
                  <div class="p-3.5 rounded-xl bg-white dark:bg-slate-800/80 border-2 border-indigo-300 dark:border-indigo-700 shadow-2xs space-y-1.5">
                    <span class="font-black text-indigo-700 dark:text-indigo-300 block text-xs sm:text-[13px]">① 客觀處罰條件</span>
                    <p class="text-slate-800 dark:text-slate-100 font-medium leading-relaxed text-xs">
                      非屬犯罪構成要件，不要求行為人主觀上有認識，但客觀上必須該當特定外在事實，國家之刑罰權始能發動（如破產犯罪中宣告破產之事實）。
                    </p>
                  </div>

                  <!-- 2. 自始性個人排除刑罰事由 -->
                  <div class="p-3.5 rounded-xl bg-white dark:bg-slate-800/80 border-2 border-emerald-300 dark:border-emerald-700 shadow-2xs space-y-1.5">
                    <span class="font-black text-emerald-700 dark:text-emerald-300 block text-xs sm:text-[13px]">② 自始性排除刑罰事由</span>
                    <p class="text-slate-800 dark:text-slate-100 font-medium leading-relaxed text-xs">
                      行為時即因特定個人身分關係存在，使國家刑罰權自始即不得發動。例如刑法 <strong class="text-emerald-700 dark:text-emerald-300">§ 324 Ⅰ 親屬竊盜得免除其刑</strong>，或國際公法之外交豁免特權。
                    </p>
                  </div>

                  <!-- 3. 嗣後性個人解除刑罰事由 -->
                  <div class="p-3.5 rounded-xl bg-white dark:bg-slate-800/80 border-2 border-amber-300 dark:border-amber-700 shadow-2xs space-y-1.5">
                    <span class="font-black text-amber-800 dark:text-amber-300 block text-xs sm:text-[13px]">③ 嗣後性解除刑罰事由</span>
                    <p class="text-slate-800 dark:text-slate-100 font-medium leading-relaxed text-xs">
                      犯罪成立之後，因行為人後續發生特定法益防衛或自新行為，使既已成立之刑罰權因而解消。例如刑法 <strong class="text-amber-700 dark:text-amber-300">§ 27 中止未遂</strong>、刑法 <strong class="text-amber-700 dark:text-amber-300">§ 62 自首得減輕或免除其刑</strong>。
                    </p>
                  </div>
                </div>

              </div>

              <!-- 🐣 【超亮眼白話文專區】處罰光譜與其他刑罰要件 白話秒懂大拆解 -->
              <div class="rounded-2xl p-5 sm:p-6 bg-gradient-to-br from-emerald-50 via-teal-50/80 to-amber-100 dark:from-[#082218] dark:via-[#051710] dark:to-[#0f1710] border-2 border-emerald-400 dark:border-emerald-500 border-l-[8px] border-l-emerald-600 shadow-md shadow-emerald-500/10 space-y-4">
                
                <!-- 小白專區 Header -->
                <div class="flex items-center justify-between flex-wrap gap-2 border-b border-emerald-200 dark:border-emerald-800/80 pb-3">
                  <div class="flex items-center gap-2">
                    <span class="text-2xl animate-bounce">🐣</span>
                    <div>
                      <div class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white text-[11px] font-black shadow-xs">
                        <span>💡 零基礎秒懂專區</span>
                        <span>•</span>
                        <span>白話文大翻譯</span>
                      </div>
                      <h4 class="text-base sm:text-lg font-black text-emerald-950 dark:text-emerald-100 pt-0.5">
                        「為什麼偷拿老爸錢包的五百塊算犯罪，警察卻不能把我抓去坐牢？」
                      </h4>
                    </div>
                  </div>
                  <span class="text-xs font-bold text-emerald-800 dark:text-emerald-300 bg-emerald-100 dark:bg-emerald-900/60 px-2.5 py-1 rounded-lg border border-emerald-300 dark:border-emerald-700">
                    🎯 處罰要件白話攻略
                  </span>
                </div>

                <!-- 一句話白話金句 -->
                <div class="p-3.5 sm:p-4 rounded-xl bg-white dark:bg-slate-900 border-2 border-emerald-300 dark:border-emerald-600 shadow-xs">
                  <div class="text-[11px] font-black text-emerald-600 dark:text-emerald-400 uppercase tracking-wider mb-1">
                    📢 一句話大白話翻譯
                  </div>
                  <p class="text-sm sm:text-base font-black text-slate-900 dark:text-white leading-relaxed">
                    👉「<span class="text-emerald-700 dark:text-emerald-400 underline decoration-emerald-400 underline-offset-4">『犯罪成立』是量體溫確認你有病；『發動刑罰』是決定要不要抓你去隔離！法律有時為了人倫親情或鼓勵悔改，就算成立犯罪也會網開一面！</span>」
                  </p>
                </div>

                <!-- 趣味日常比喻：家規處置 vs 主動投案逃生門 -->
                <div class="p-4 rounded-xl bg-emerald-100/60 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/60 space-y-2 text-xs sm:text-[13px] text-slate-800 dark:text-slate-200 leading-relaxed">
                  <div class="font-black text-emerald-950 dark:text-emerald-200 flex items-center gap-1.5 text-sm">
                    <span>🎯</span>
                    <span>生活超有感比喻：【家法伺候免坐牢 vs 懸崖勒馬給條生路】</span>
                  </div>
                  <p>
                    為什麼三階層全都打勾該當了，最後卻可以不被抓去關？
                  </p>
                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                    <div class="p-3 rounded-xl bg-white dark:bg-slate-900 border-2 border-emerald-300 dark:border-emerald-700 shadow-2xs space-y-1">
                      <span class="font-black text-emerald-700 dark:text-emerald-300 block text-xs sm:text-[13px]">👨‍👩‍👧 情境 A（自始性排除＝親屬竊盜免刑）：</span>
                      <p class="text-slate-800 dark:text-slate-100 text-xs sm:text-[13px] font-medium leading-relaxed">
                        兒子偷老爸 1,000 元，該當竊盜罪無誤；但刑法 § 324 Ⅰ 認為清官難斷家務事，交給老爸用家法揍一頓就好，法官可以直接<span class="font-bold text-emerald-700 dark:text-emerald-400">「免除其刑」</span>，免得兒子抓去坐牢全家撕破臉！
                      </p>
                    </div>
                    <div class="p-3 rounded-xl bg-white dark:bg-slate-900 border-2 border-amber-300 dark:border-amber-700 shadow-2xs space-y-1">
                      <span class="font-black text-amber-800 dark:text-amber-300 block text-xs sm:text-[13px]">🕊️ 情境 B（嗣後性解除＝自首與中止未遂）：</span>
                      <p class="text-slate-800 dark:text-slate-100 text-xs sm:text-[13px] font-medium leading-relaxed">
                        殺手已經拔刀準備刺殺，最後一秒良心發現把刀扔掉並叫救護車（中止未遂）；或者犯案後主動投案自首（§ 62）。法律故意設一個<span class="font-bold text-amber-700 dark:text-amber-300">「後悔逃生門」</span>，鼓勵壞人懸崖勒馬！
                      </p>
                    </div>
                  </div>
                  <p class="text-emerald-950 dark:text-emerald-100 font-bold bg-white/80 dark:bg-slate-900/60 p-2.5 rounded-lg border border-emerald-300/60">
                    💡 <strong>一句話記住「其他刑罰要件」：</strong> 犯罪三階層（構成要件＋違法性＋罪責）是「論罪」，其他刑罰要件是「科刑的門檻與煞車」！
                  </p>
                </div>

                <!-- 小白白話檢驗三步驟 -->
                <div class="space-y-2">
                  <div class="text-xs font-black text-emerald-950 dark:text-emerald-200 flex items-center gap-1">
                    <span>⚡</span>
                    <span>小白秒殺檢驗：三步判斷要不要抓去關</span>
                  </div>
                  <div class="grid grid-cols-1 md:grid-cols-3 gap-2.5 text-xs">
                    
                    <div class="p-3.5 rounded-xl bg-white dark:bg-slate-900 border-2 border-slate-300 dark:border-slate-700 shadow-xs space-y-1.5">
                      <div class="font-black text-slate-800 dark:text-slate-200 text-xs">
                        第 1 步：查三階層有沒有通過？
                      </div>
                      <p class="text-slate-800 dark:text-slate-100 font-medium leading-relaxed text-xs">
                        構成要件＋違法＋有責任 ➜ <span class="font-bold text-slate-700 dark:text-slate-300">犯罪確定成立！</span>
                      </p>
                    </div>

                    <div class="p-3.5 rounded-xl bg-white dark:bg-slate-900 border-2 border-amber-300 dark:border-amber-700 shadow-xs space-y-1.5">
                      <div class="font-black text-amber-900 dark:text-amber-200 text-xs">
                        第 2 步：看有沒有煞車踏板？
                      </div>
                      <p class="text-slate-800 dark:text-slate-100 font-medium leading-relaxed text-xs">
                        是自家人竊盜？還是投案自首？ ➜ <span class="font-bold text-amber-800 dark:text-amber-300">檢查免除或減輕刑罰事由！</span>
                      </p>
                    </div>

                    <div class="p-3.5 rounded-xl bg-white dark:bg-slate-900 border-2 border-emerald-300 dark:border-emerald-700 shadow-xs space-y-1.5">
                      <div class="font-black text-emerald-700 dark:text-emerald-300 text-xs">
                        第 3 步：決定要不要判刑入監！
                      </div>
                      <p class="text-slate-800 dark:text-slate-100 font-medium leading-relaxed text-xs">
                        無煞車事由 ➜ <span class="font-bold text-emerald-700 dark:text-emerald-400">發動刑罰入監服刑！</span>
                      </p>
                    </div>

                  </div>
                </div>

              </div>

            </div>
          </section>

          <!-- ==================== 九、犯罪基本審查流程（教材第 1-16 頁 原文體系圖解） ==================== -->
          <section id="sec-ch2-basic-review-process" class="p-6 sm:p-8 rounded-3xl border-2 border-blue-400 dark:border-blue-600 bg-white dark:bg-slate-900/90 shadow-md space-y-8">
            
            <!-- Section Header -->
            <div class="flex items-center justify-between border-b-2 border-slate-200 dark:border-slate-800 pb-3">
              <div class="flex items-center gap-2">
                <span class="px-2.5 py-0.5 rounded-md text-[11px] font-black bg-blue-100 dark:bg-blue-950 text-blue-800 dark:text-blue-300 font-mono border border-blue-300">第 1-16 頁</span>
                <span class="text-xs font-bold text-slate-800 dark:text-slate-200">第二章 終篇統整體系</span>
              </div>
              <span class="text-xs font-black text-amber-700 dark:text-amber-300 flex items-center gap-1 bg-amber-50 dark:bg-amber-950/80 px-2 py-0.5 rounded-lg border border-amber-300">
                <span>🌟</span>
                <span>犯罪基本審查流程</span>
              </span>
            </div>

            <!-- Title & Quote -->
            <div class="space-y-3">
              <h3 class="text-xl sm:text-2xl font-black text-slate-900 dark:text-white tracking-tight flex items-center gap-2">
                <span>九、犯罪基本審查流程</span>
                <span class="text-xs font-mono font-black px-2 py-0.5 rounded-md bg-blue-100 dark:bg-blue-950 text-blue-800 dark:text-blue-300 border border-blue-300">教材第 1-16 頁</span>
              </h3>
              
              <blockquote class="p-4 rounded-2xl border-l-[6px] border-blue-600 bg-blue-50 dark:bg-blue-950/60 text-xs sm:text-sm text-slate-900 dark:text-slate-100 font-medium leading-relaxed shadow-sm">
                「<strong class="text-blue-800 dark:text-blue-300 font-black">免刑事由、（嗣後性的）個人解除或減免刑罰事由均屬之。我們可以用下圖表達犯罪的基本審查流程。</strong>」
              </blockquote>
            </div>

            <!-- 視覺化階梯審查流程圖 (Visual Step-by-Step Interactive Flowchart) -->
            <div class="space-y-4">
              <div class="flex items-center justify-between">
                <h4 class="text-sm sm:text-base font-black text-slate-900 dark:text-white flex items-center gap-2">
                  <span>🧭</span>
                  <span>五階審查與結論動態流程卡</span>
                </h4>
                <span class="text-xs font-mono font-bold text-blue-700 dark:text-blue-300 bg-blue-50 dark:bg-blue-950 px-2 py-0.5 rounded border border-blue-200">由上至下依序過濾審查</span>
              </div>

              <!-- 流程容器 -->
              <div class="space-y-3">

                <!-- 1. 行為 -->
                <div class="p-4 sm:p-5 rounded-2xl border-2 border-blue-300 dark:border-blue-700 bg-blue-50/50 dark:bg-slate-900/90 space-y-3 relative shadow-xs">
                  <div class="flex items-center justify-between">
                    <div class="flex items-center gap-2.5">
                      <span class="w-8 h-8 rounded-xl bg-blue-600 text-white font-black text-sm flex items-center justify-center shadow-sm">行</span>
                      <div>
                        <span class="text-[11px] font-mono font-black uppercase tracking-wider text-blue-700 dark:text-blue-300 block">階層 ① 行為 (Handlung)</span>
                        <h5 class="text-sm sm:text-base font-black text-slate-900 dark:text-white">刑法意義之行為？</h5>
                      </div>
                    </div>
                    <span class="text-xs px-2.5 py-1 rounded-lg bg-blue-100 dark:bg-blue-950 text-blue-800 dark:text-blue-300 font-black border border-blue-300">入門門檻</span>
                  </div>

                  <div class="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs pt-1">
                    <div class="p-3.5 rounded-xl bg-white dark:bg-slate-800 border-2 border-slate-300 dark:border-slate-700 space-y-1">
                      <div class="font-black text-blue-700 dark:text-blue-300 flex items-center gap-1">
                        <span>🔍</span>
                        <span>確認功能</span>
                      </div>
                      <p class="text-slate-800 dark:text-slate-100 font-medium leading-relaxed">確認所欲討論的具體人類行為。</p>
                    </div>

                    <div class="p-3.5 rounded-xl bg-white dark:bg-slate-800 border-2 border-amber-300 dark:border-amber-700 space-y-1">
                      <div class="font-black text-amber-800 dark:text-amber-300 flex items-center gap-1">
                        <span>🛡️</span>
                        <span>過濾功能</span>
                      </div>
                      <p class="text-slate-800 dark:text-slate-100 font-medium leading-relaxed">排除非刑法意義之行為（如反射動作、沉睡中動作、不可抗力、單純思想）。</p>
                    </div>

                    <div class="p-3.5 rounded-xl bg-white dark:bg-slate-800 border-2 border-indigo-300 dark:border-indigo-700 space-y-1">
                      <div class="font-black text-indigo-700 dark:text-indigo-300 flex items-center gap-1">
                        <span>🗂️</span>
                        <span>分類功能</span>
                      </div>
                      <p class="text-slate-800 dark:text-slate-100 font-medium leading-relaxed">作為、純正不作為、不純正不作為（§ 15 防止義務）。</p>
                    </div>
                  </div>
                </div>

                <!-- 箭頭向下 -->
                <div class="flex justify-center text-blue-600 dark:text-blue-400 font-black text-lg -my-1">
                  <span class="animate-bounce">⬇️</span>
                </div>

                <!-- 2. TB (構成要件) -->
                <div class="p-4 sm:p-5 rounded-2xl border-2 border-indigo-300 dark:border-indigo-700 bg-indigo-50/50 dark:bg-slate-900/90 space-y-3 shadow-xs">
                  <div class="flex items-center justify-between">
                    <div class="flex items-center gap-2.5">
                      <span class="w-8 h-8 rounded-xl bg-indigo-600 text-white font-black text-xs flex items-center justify-center shadow-sm">TB</span>
                      <div>
                        <span class="text-[11px] font-mono font-black uppercase tracking-wider text-indigo-700 dark:text-indigo-300 block">階層 ② 構成要件該當性 (Tatbestand)</span>
                        <h5 class="text-sm sm:text-base font-black text-slate-900 dark:text-white">法益侵害形式為何？</h5>
                      </div>
                    </div>
                    <span class="text-xs px-2.5 py-1 rounded-lg bg-indigo-100 dark:bg-indigo-950 text-indigo-800 dark:text-indigo-300 font-black border border-indigo-300">不法類型化</span>
                  </div>

                  <div class="grid grid-cols-1 sm:grid-cols-12 gap-2.5 text-xs pt-1">
                    <!-- 原則 -->
                    <div class="sm:col-span-6 p-3.5 rounded-xl bg-white dark:bg-slate-800 border-2 border-emerald-300 dark:border-emerald-700 space-y-1">
                      <div class="flex items-center justify-between">
                        <span class="px-2 py-0.5 rounded bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-200 font-black text-[11px] border border-emerald-300">【原則】</span>
                        <span class="font-mono text-emerald-700 dark:text-emerald-300 font-black">§ 13</span>
                      </div>
                      <div class="text-sm font-black text-slate-900 dark:text-white">故意既遂犯</div>
                      <p class="text-slate-800 dark:text-slate-100 font-medium text-xs">刑法分則條文設計之標準藍本，具備知與欲。</p>
                    </div>

                    <!-- 例外：未遂 -->
                    <div class="sm:col-span-3 p-3.5 rounded-xl bg-white dark:bg-slate-800 border-2 border-blue-300 dark:border-blue-700 space-y-1">
                      <div class="flex items-center justify-between">
                        <span class="px-2 py-0.5 rounded bg-blue-100 dark:bg-blue-950 text-blue-800 dark:text-blue-200 font-black text-[11px] border border-blue-300">【例外】未遂</span>
                        <span class="font-mono text-blue-700 dark:text-blue-300 font-black">§ 25</span>
                      </div>
                      <div class="text-sm font-black text-slate-900 dark:text-white">未遂犯</div>
                      <p class="text-slate-800 dark:text-slate-100 font-medium text-xs">已著手未既遂，須法律明文有處罰。</p>
                    </div>

                    <!-- 例外：過失 -->
                    <div class="sm:col-span-3 p-3.5 rounded-xl bg-white dark:bg-slate-800 border-2 border-amber-300 dark:border-amber-700 space-y-1">
                      <div class="flex items-center justify-between">
                        <span class="px-2 py-0.5 rounded bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-200 font-black text-[11px] border border-amber-300">【例外】過失</span>
                        <span class="font-mono text-amber-700 dark:text-amber-300 font-black">§ 12、§ 14</span>
                      </div>
                      <div class="text-sm font-black text-slate-900 dark:text-white">過失</div>
                      <p class="text-slate-800 dark:text-slate-100 font-medium text-xs">欠缺故意但具注意義務違反，亦須明文。</p>
                    </div>
                  </div>
                </div>

                <!-- 箭頭向下 -->
                <div class="flex justify-center text-indigo-600 dark:text-indigo-400 font-black text-lg -my-1">
                  <span class="animate-bounce">⬇️</span>
                </div>

                <!-- 3. R (違法性) -->
                <div class="p-4 sm:p-5 rounded-2xl border-2 border-emerald-300 dark:border-emerald-700 bg-emerald-50/50 dark:bg-slate-900/90 space-y-3 shadow-xs">
                  <div class="flex items-center justify-between">
                    <div class="flex items-center gap-2.5">
                      <span class="w-8 h-8 rounded-xl bg-emerald-600 text-white font-black text-xs flex items-center justify-center shadow-sm">R</span>
                      <div>
                        <span class="text-[11px] font-mono font-black uppercase tracking-wider text-emerald-700 dark:text-emerald-300 block">階層 ③ 違法性 (Rechtswidrigkeit)</span>
                        <h5 class="text-sm sm:text-base font-black text-slate-900 dark:text-white">有無阻卻違法事由？</h5>
                      </div>
                    </div>
                    <span class="text-xs px-2.5 py-1 rounded-lg bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 font-black border border-emerald-300">實質正當化</span>
                  </div>

                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs pt-1">
                    <!-- 可以阻卻違法 -->
                    <div class="p-3.5 rounded-xl bg-white dark:bg-slate-800 border-2 border-emerald-300 dark:border-emerald-700 space-y-1.5">
                      <div class="flex items-center justify-between">
                        <span class="px-2 py-0.5 rounded bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-200 font-black text-[11px] border border-emerald-300">✅ 可以阻卻違法</span>
                        <span class="font-mono text-emerald-700 dark:text-emerald-300 font-black">§ 21 ～ § 24</span>
                      </div>
                      <p class="text-slate-800 dark:text-slate-100 font-medium leading-relaxed">依法令行為、業務正當行為、正當防衛、緊急避難及超法定阻卻違法事由。</p>
                    </div>

                    <!-- 不能阻卻違法 -->
                    <div class="p-3.5 rounded-xl bg-white dark:bg-slate-800 border-2 border-rose-300 dark:border-rose-700 space-y-1.5">
                      <div class="flex items-center justify-between">
                        <span class="px-2 py-0.5 rounded bg-rose-100 dark:bg-rose-950 text-rose-800 dark:text-rose-200 font-black text-[11px] border border-rose-300">❌ 不能阻卻違法（例外排除）</span>
                        <span class="font-mono text-rose-700 dark:text-rose-300 font-black">§ 21 Ⅱ、§ 24 Ⅱ</span>
                      </div>
                      <p class="text-slate-800 dark:text-slate-100 font-medium leading-relaxed">明知命令違法、特別職務避難排除、挑唆防衛、櫻桃案利益失衡、輸血案人性尊嚴。</p>
                    </div>
                  </div>
                </div>

                <!-- 箭頭向下 -->
                <div class="flex justify-center text-emerald-600 dark:text-emerald-400 font-black text-lg -my-1">
                  <span class="animate-bounce">⬇️</span>
                </div>

                <!-- 4. S (罪責) -->
                <div class="p-4 sm:p-5 rounded-2xl border-2 border-purple-300 dark:border-purple-700 bg-purple-50/50 dark:bg-slate-900/90 space-y-3 shadow-xs">
                  <div class="flex items-center justify-between">
                    <div class="flex items-center gap-2.5">
                      <span class="w-8 h-8 rounded-xl bg-purple-600 text-white font-black text-xs flex items-center justify-center shadow-sm">S</span>
                      <div>
                        <span class="text-[11px] font-mono font-black uppercase tracking-wider text-purple-700 dark:text-purple-300 block">階層 ④ 罪責 (Schuld)</span>
                        <h5 class="text-sm sm:text-base font-black text-slate-900 dark:text-white">有無阻卻罪責事由？</h5>
                      </div>
                    </div>
                    <span class="text-xs px-2.5 py-1 rounded-lg bg-purple-100 dark:bg-purple-950 text-purple-800 dark:text-purple-300 font-black border border-purple-300">個人可非難性</span>
                  </div>

                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs pt-1">
                    <!-- 可以阻卻罪責 -->
                    <div class="p-3.5 rounded-xl bg-white dark:bg-slate-800 border-2 border-purple-300 dark:border-purple-700 space-y-1.5">
                      <div class="flex items-center justify-between">
                        <span class="px-2 py-0.5 rounded bg-purple-100 dark:bg-purple-950 text-purple-800 dark:text-purple-200 font-black text-[11px] border border-purple-300">✅ 可以阻卻罪責</span>
                        <span class="font-mono text-purple-700 dark:text-purple-300 font-black">§ 16、§ 18~20</span>
                      </div>
                      <p class="text-slate-800 dark:text-slate-100 font-medium leading-relaxed">未成年、精神障礙、瘖啞人、不可避免禁止錯誤、防衛過當／避難過當免刑。</p>
                    </div>

                    <!-- 不能阻卻罪責 -->
                    <div class="p-3.5 rounded-xl bg-white dark:bg-slate-800 border-2 border-rose-300 dark:border-rose-700 space-y-1.5">
                      <div class="flex items-center justify-between">
                        <span class="px-2 py-0.5 rounded bg-rose-100 dark:bg-rose-950 text-rose-800 dark:text-rose-200 font-black text-[11px] border border-rose-300">❌ 不能阻卻罪責（例外排除）</span>
                        <span class="font-mono text-rose-700 dark:text-rose-300 font-black">§ 16、§ 19 Ⅲ</span>
                      </div>
                      <p class="text-slate-800 dark:text-slate-100 font-medium leading-relaxed">可避免禁止錯誤仍有罪責（僅得減輕）、原因自由行為（故意或過失自陷無能力狀態）。</p>
                    </div>
                  </div>
                </div>

                <!-- 箭頭向下 -->
                <div class="flex justify-center text-purple-600 dark:text-purple-400 font-black text-lg -my-1">
                  <span class="animate-bounce">⬇️</span>
                </div>

                <!-- 5. 其他 (刑罰要件) -->
                <div class="p-4 sm:p-5 rounded-2xl border-2 border-sky-300 dark:border-sky-700 bg-sky-50/50 dark:bg-slate-900/90 space-y-3 shadow-xs">
                  <div class="flex items-center justify-between">
                    <div class="flex items-center gap-2.5">
                      <span class="w-8 h-8 rounded-xl bg-sky-600 text-white font-black text-xs flex items-center justify-center shadow-sm">其</span>
                      <div>
                        <span class="text-[11px] font-mono font-black uppercase tracking-wider text-sky-700 dark:text-sky-300 block">階層 ⑤ 其他刑罰要件</span>
                        <h5 class="text-sm sm:text-base font-black text-slate-900 dark:text-white">有無其他刑罰要件？</h5>
                      </div>
                    </div>
                    <span class="text-xs px-2.5 py-1 rounded-lg bg-sky-100 dark:bg-sky-950 text-sky-800 dark:text-sky-300 font-black border border-sky-300">刑事政策考量</span>
                  </div>

                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs pt-1">
                    <!-- 可以阻卻刑罰 -->
                    <div class="p-3.5 rounded-xl bg-white dark:bg-slate-800 border-2 border-sky-300 dark:border-sky-700 space-y-1.5">
                      <div class="flex items-center justify-between">
                        <span class="px-2 py-0.5 rounded bg-sky-100 dark:bg-sky-950 text-sky-800 dark:text-sky-200 font-black text-[11px] border border-sky-300">✅ 可以阻卻刑罰</span>
                        <span class="font-mono text-sky-700 dark:text-sky-300 font-black">§ 26、§ 27、客觀處罰條件</span>
                      </div>
                      <p class="text-slate-800 dark:text-slate-100 font-medium leading-relaxed">不能未遂不罰、中止犯必減免、客觀可罰性條件未具備、親屬竊盜免除其刑。</p>
                    </div>

                    <!-- 不能阻卻刑罰 -->
                    <div class="p-3.5 rounded-xl bg-white dark:bg-slate-800 border-2 border-emerald-300 dark:border-emerald-700 space-y-1.5">
                      <div class="flex items-center justify-between">
                        <span class="px-2 py-0.5 rounded bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-200 font-black text-[11px] border border-emerald-300">⚖️ 不能阻卻刑罰</span>
                        <span class="font-mono text-emerald-700 dark:text-emerald-300 font-black">刑罰發動</span>
                      </div>
                      <p class="text-slate-800 dark:text-slate-100 font-medium leading-relaxed">無阻卻刑罰事由，國家刑罰權合法正當發動，依法科處刑罰或宣告保安處分。</p>
                    </div>
                  </div>
                </div>

                <!-- 箭頭向下 -->
                <div class="flex justify-center text-sky-600 dark:text-sky-400 font-black text-lg -my-1">
                  <span class="animate-bounce">⬇️</span>
                </div>

                <!-- 6. 結論 -->
                <div class="p-5 rounded-2xl border-2 border-rose-400 dark:border-rose-600 bg-gradient-to-br from-rose-50 via-amber-50 to-blue-50 dark:from-[#22080d] dark:via-[#181108] dark:to-[#081220] space-y-3 shadow-md">
                  <div class="flex items-center justify-between">
                    <span class="text-xs font-black uppercase tracking-wider text-rose-800 dark:text-rose-200 flex items-center gap-1.5">
                      <span>🎯</span>
                      <span>審查結論 (Urteil)</span>
                    </span>
                    <span class="text-[11px] font-black px-2 py-0.5 rounded bg-rose-200 dark:bg-rose-900 text-rose-900 dark:text-rose-100 border border-rose-300">最終定罪型態</span>
                  </div>

                  <div class="p-4 rounded-xl bg-white dark:bg-slate-900 border-2 border-rose-300 dark:border-rose-700 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div class="text-base sm:text-lg font-black text-slate-900 dark:text-white">
                      成立 <span class="underline decoration-rose-600 decoration-4 underline-offset-4 text-rose-700 dark:text-rose-400">○○犯罪</span> 的：
                    </div>
                    <div class="flex flex-wrap items-center gap-2">
                      <span class="px-3 py-1.5 rounded-xl bg-blue-100 dark:bg-blue-950 border-2 border-blue-400 text-blue-900 dark:text-blue-200 font-black text-xs sm:text-sm shadow-xs">
                        ① 故意既遂犯
                      </span>
                      <span class="px-3 py-1.5 rounded-xl bg-amber-100 dark:bg-amber-950 border-2 border-amber-400 text-amber-900 dark:text-amber-200 font-black text-xs sm:text-sm shadow-xs">
                        ② 未遂犯
                      </span>
                      <span class="px-3 py-1.5 rounded-xl bg-purple-100 dark:bg-purple-950 border-2 border-purple-400 text-purple-900 dark:text-purple-200 font-black text-xs sm:text-sm shadow-xs">
                        ③ 過失犯
                      </span>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            <!-- 🐣 【超亮眼白話文專區】基本審查流程 白話秒懂大拆解 -->
            <div class="rounded-2xl p-5 sm:p-6 bg-gradient-to-br from-indigo-50 via-sky-50/80 to-amber-100 dark:from-[#0d1628] dark:via-[#091522] dark:to-[#17130a] border-2 border-indigo-400 dark:border-indigo-500 border-l-[8px] border-l-indigo-600 shadow-md shadow-indigo-500/10 space-y-4">
              
              <!-- 小白專區 Header -->
              <div class="flex items-center justify-between flex-wrap gap-2 border-b border-indigo-200 dark:border-indigo-800/80 pb-3">
                <div class="flex items-center gap-2">
                  <span class="text-2xl animate-bounce">🐣</span>
                  <div>
                    <div class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-gradient-to-r from-indigo-600 to-blue-600 text-white text-[11px] font-black shadow-xs">
                      <span>💡 零基礎秒懂專區</span>
                      <span>•</span>
                      <span>白話文大翻譯</span>
                    </div>
                    <h4 class="text-base sm:text-lg font-black text-indigo-950 dark:text-indigo-100 pt-0.5">
                      「老師常說刑法要一層一層審查，到底什麼是『五階基本審查流程』？」
                    </h4>
                  </div>
                </div>
                <span class="text-xs font-bold text-indigo-800 dark:text-indigo-300 bg-indigo-100 dark:bg-indigo-900/60 px-2.5 py-1 rounded-lg border border-indigo-300 dark:border-indigo-700">
                  🎯 審查流程白話攻略
                </span>
              </div>

              <!-- 一句話白話金句 -->
              <div class="p-3.5 sm:p-4 rounded-xl bg-white dark:bg-slate-900 border-2 border-indigo-300 dark:border-indigo-600 shadow-xs">
                <div class="text-[11px] font-black text-indigo-600 dark:text-indigo-400 uppercase tracking-wider mb-1">
                  📢 一句話大白話翻譯
                </div>
                <p class="text-sm sm:text-base font-black text-slate-900 dark:text-white leading-relaxed">
                  👉「<span class="text-indigo-700 dark:text-indigo-400 underline decoration-indigo-400 underline-offset-4">刑法審查就像『機場海關安檢』！每一關都必須亮綠燈通過，任何一關被擋下就原地放行或結案！五關全過，法官才能正式敲槌定罪！</span>」
                </p>
              </div>

              <!-- 趣味日常比喻：機場安檢五大關卡 -->
              <div class="p-4 rounded-xl bg-indigo-100/60 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-800/60 space-y-2 text-xs sm:text-[13px] text-slate-800 dark:text-slate-200 leading-relaxed">
                <div class="font-black text-indigo-950 dark:text-indigo-200 flex items-center gap-1.5 text-sm">
                  <span>🎯</span>
                  <span>生活超有感比喻：【出國過海關五大安檢閘門】</span>
                </div>
                <p>
                  判斷一個人有沒有罪，刑法設置了五道絕對不能跳步的「安全閘門」：
                </p>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                  <div class="p-3 rounded-xl bg-white dark:bg-slate-900 border-2 border-blue-300 dark:border-blue-700 shadow-2xs space-y-1">
                    <span class="font-black text-blue-800 dark:text-blue-300 block text-xs sm:text-[13px]">🚪 第 1 關 行為門（確認是活人有意控制）：</span>
                    <p class="text-slate-800 dark:text-slate-100 text-xs sm:text-[13px] font-medium leading-relaxed">
                      是活人自己動作嗎？如果是被強風吹倒壓到人、或作夢夢遊揮拳，第一關就被濾掉，根本不是刑法上的行為，直接無罪結案！
                    </p>
                  </div>
                  <div class="p-3 rounded-xl bg-white dark:bg-slate-900 border-2 border-indigo-300 dark:border-indigo-700 shadow-2xs space-y-1">
                    <span class="font-black text-indigo-800 dark:text-indigo-300 block text-xs sm:text-[13px]">🧳 第 2 關 X 光機（構成要件對號入座）：</span>
                    <p class="text-slate-800 dark:text-slate-100 text-xs sm:text-[13px] font-medium leading-relaxed">
                      掃描你的動作符合哪條罪名？是拿刀殺人（§ 271）、偷拿皮夾（§ 320），還是開車不專心撞傷人（§ 284）？條文沒寫的就無罪！
                    </p>
                  </div>
                  <div class="p-3 rounded-xl bg-white dark:bg-slate-900 border-2 border-emerald-300 dark:border-emerald-700 shadow-2xs space-y-1">
                    <span class="font-black text-emerald-800 dark:text-emerald-300 block text-xs sm:text-[13px]">🛡️ 第 3 關 合法證明書（違法性與正當防衛）：</span>
                    <p class="text-slate-800 dark:text-slate-100 text-xs sm:text-[13px] font-medium leading-relaxed">
                      你確實出手打傷人了，但你有沒有合法理由？如果是正當防衛（保命）、緊急避難（救火），立刻拿到放行條（阻卻違法不罰）！
                    </p>
                  </div>
                  <div class="p-3 rounded-xl bg-white dark:bg-slate-900 border-2 border-purple-300 dark:border-purple-700 shadow-2xs space-y-1">
                    <span class="font-black text-purple-800 dark:text-purple-300 block text-xs sm:text-[13px]">🧠 第 4 關 心智評估（罪責與年齡心神）：</span>
                    <p class="text-slate-800 dark:text-slate-100 text-xs sm:text-[13px] font-medium leading-relaxed">
                      你做壞事時腦袋清醒嗎？如果才 12 歲小孩（§ 18）或嚴重精神病發作喪失控制能力（§ 19），不具備罪責，不能怪罪於你！
                    </p>
                  </div>
                </div>
                <p class="text-indigo-950 dark:text-indigo-100 font-bold bg-white/80 dark:bg-slate-900/60 p-2.5 rounded-lg border border-indigo-300/60">
                  💡 <strong>最後第 5 關【其他刑罰要件】是什麼？</strong> 前面四關全過代表「你確定犯罪了」，但最後這關是「政策特別開恩」——比如你偷的是自己親生老爸的錢（親屬竊盜免刑），或者犯案後主動投案自首（減輕或免刑）！
                </p>
              </div>

              <!-- 小白白話檢驗三步驟 -->
              <div class="space-y-2">
                <div class="text-xs font-black text-indigo-950 dark:text-indigo-200 flex items-center gap-1">
                  <span>⚡</span>
                  <span>小白秒殺檢驗：解任何刑法大題的三步心法</span>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-2.5 text-xs">
                  
                  <div class="p-3.5 rounded-xl bg-white dark:bg-slate-900 border-2 border-slate-300 dark:border-slate-700 shadow-xs space-y-1.5">
                    <div class="font-black text-slate-800 dark:text-slate-200 text-xs">
                      第 1 步：絕不跳步！
                    </div>
                    <p class="text-slate-800 dark:text-slate-100 font-medium leading-relaxed text-xs">
                      永遠按 <span class="font-bold text-slate-800 dark:text-slate-200">①構成要件 ➔ ②違法性 ➔ ③罪責</span> 順序下筆，跳步直接扣分！
                    </p>
                  </div>

                  <div class="p-3.5 rounded-xl bg-white dark:bg-slate-900 border-2 border-amber-300 dark:border-amber-700 shadow-xs space-y-1.5">
                    <div class="font-black text-amber-900 dark:text-amber-200 text-xs">
                      第 2 步：原則為主、例外緊追！
                    </div>
                    <p class="text-slate-800 dark:text-slate-100 font-medium leading-relaxed text-xs">
                      先看故意既遂，再看 <span class="font-bold text-amber-800 dark:text-amber-300">未遂或過失是否有條文明文處罰</span>！
                    </p>
                  </div>

                  <div class="p-3.5 rounded-xl bg-white dark:bg-slate-900 border-2 border-indigo-300 dark:border-indigo-700 shadow-xs space-y-1.5">
                    <div class="font-black text-indigo-800 dark:text-indigo-300 text-xs">
                      第 3 步：小心例外排除陷阱！
                    </div>
                    <p class="text-slate-800 dark:text-slate-100 font-medium leading-relaxed text-xs">
                      遇到防衛看 <span class="font-bold text-indigo-700 dark:text-indigo-400">意圖挑唆</span>，遇到喝醉看 <span class="font-bold text-indigo-700 dark:text-indigo-400">原因自由行為</span>！
                    </p>
                  </div>

                </div>
              </div>

            </div>

            <!-- 教材第 1-16 頁 原文對齊精準對照表 (Verbatim Matrix Table) -->
            <div class="space-y-3">
              <div class="flex items-center justify-between">
                <h4 class="text-sm sm:text-base font-black text-slate-900 dark:text-white flex items-center gap-2">
                  <span>📊</span>
                  <span>教材第 1-16 頁 原文對照表格</span>
                </h4>
                <span class="text-xs text-slate-700 dark:text-slate-300 font-mono font-bold bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded border border-slate-300">完整條文代碼標註</span>
              </div>

              <div class="overflow-x-auto rounded-2xl border-2 border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 shadow-xs">
                <table class="w-full text-left text-xs border-collapse">
                  <tbody>
                    <!-- 行為 -->
                    <tr class="border-b-2 border-slate-200 dark:border-slate-800">
                      <td class="p-3.5 bg-slate-100 dark:bg-slate-800 font-black text-slate-900 dark:text-white text-center w-24 align-middle border-r-2 border-slate-200 dark:border-slate-800 text-xs sm:text-sm">
                        行為
                      </td>
                      <td class="p-3.5 space-y-1 text-slate-800 dark:text-slate-100 font-medium leading-relaxed">
                        <div class="font-black text-slate-900 dark:text-white text-xs sm:text-sm">刑法意義之行為？</div>
                        <div><strong class="text-blue-700 dark:text-blue-300">確認功能：</strong>確認所欲討論的具體人類行為</div>
                        <div><strong class="text-amber-700 dark:text-amber-300">過濾功能：</strong>排除非刑法意義之行為（反射、沉睡、不可抗力、單純思想）</div>
                        <div><strong class="text-indigo-700 dark:text-indigo-300">分類功能：</strong>作為、純正不作為、不純正不作為（§ 15）</div>
                      </td>
                    </tr>

                    <!-- TB -->
                    <tr class="border-b-2 border-slate-200 dark:border-slate-800">
                      <td class="p-3.5 bg-slate-100 dark:bg-slate-800 font-black text-slate-900 dark:text-white text-center w-24 align-middle border-r-2 border-slate-200 dark:border-slate-800 text-xs sm:text-sm">
                        TB
                      </td>
                      <td class="p-3.5 space-y-2 text-slate-800 dark:text-slate-100 font-medium">
                        <div class="font-black text-slate-900 dark:text-white text-xs sm:text-sm">法益侵害形式為何？</div>
                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                          <div class="p-2.5 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 border-2 border-emerald-300 dark:border-emerald-700">
                            <span class="font-black text-emerald-800 dark:text-emerald-200">原則：</span>
                            <span class="font-bold text-slate-900 dark:text-white">故意既遂犯（§ 13）</span>
                          </div>
                          <div class="p-2.5 rounded-lg bg-amber-50 dark:bg-amber-950/40 border-2 border-amber-300 dark:border-amber-700 flex flex-wrap gap-2">
                            <div><span class="font-black text-amber-800 dark:text-amber-200">例外：</span><span class="font-bold text-slate-900 dark:text-white">未遂犯（§ 25）</span></div>
                            <div class="font-bold text-slate-900 dark:text-white">過失（§ 12、§ 14、§ 17）</div>
                          </div>
                        </div>
                      </td>
                    </tr>

                    <!-- R -->
                    <tr class="border-b-2 border-slate-200 dark:border-slate-800">
                      <td class="p-3.5 bg-slate-100 dark:bg-slate-800 font-black text-slate-900 dark:text-white text-center w-24 align-middle border-r-2 border-slate-200 dark:border-slate-800 text-xs sm:text-sm">
                        R
                      </td>
                      <td class="p-3.5 space-y-2 text-slate-800 dark:text-slate-100 font-medium">
                        <div class="font-black text-slate-900 dark:text-white text-xs sm:text-sm">有無阻卻違法事由？</div>
                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                          <div class="p-2.5 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 border-2 border-emerald-300 dark:border-emerald-700">
                            <span class="font-black text-emerald-800 dark:text-emerald-200">✅ 可以阻卻違法</span>（§ 21 ～ § 24）
                          </div>
                          <div class="p-2.5 rounded-lg bg-rose-50 dark:bg-rose-950/40 border-2 border-rose-300 dark:border-rose-700">
                            <span class="font-black text-rose-800 dark:text-rose-200">❌ 不能阻卻違法</span>（§ 21 Ⅱ、§ 24 Ⅱ、其他法理）
                          </div>
                        </div>
                      </td>
                    </tr>

                    <!-- S -->
                    <tr class="border-b-2 border-slate-200 dark:border-slate-800">
                      <td class="p-3.5 bg-slate-100 dark:bg-slate-800 font-black text-slate-900 dark:text-white text-center w-24 align-middle border-r-2 border-slate-200 dark:border-slate-800 text-xs sm:text-sm">
                        S
                      </td>
                      <td class="p-3.5 space-y-2 text-slate-800 dark:text-slate-100 font-medium">
                        <div class="font-black text-slate-900 dark:text-white text-xs sm:text-sm">有無阻卻罪責事由？</div>
                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                          <div class="p-2.5 rounded-lg bg-purple-50 dark:bg-purple-950/40 border-2 border-purple-300 dark:border-purple-700">
                            <span class="font-black text-purple-800 dark:text-purple-200">✅ 可以阻卻罪責</span>（§ 16、§ 18 ～ § 20、§ 23 但、§ 24 Ⅰ 但）
                          </div>
                          <div class="p-2.5 rounded-lg bg-rose-50 dark:bg-rose-950/40 border-2 border-rose-300 dark:border-rose-700">
                            <span class="font-black text-rose-800 dark:text-rose-200">❌ 不能阻卻罪責</span>（§ 16、§ 19 Ⅲ、其他法理）
                          </div>
                        </div>
                      </td>
                    </tr>

                    <!-- 其他 -->
                    <tr class="border-b-2 border-slate-200 dark:border-slate-800">
                      <td class="p-3.5 bg-slate-100 dark:bg-slate-800 font-black text-slate-900 dark:text-white text-center w-24 align-middle border-r-2 border-slate-200 dark:border-slate-800 text-xs sm:text-sm">
                        其他
                      </td>
                      <td class="p-3.5 space-y-2 text-slate-800 dark:text-slate-100 font-medium">
                        <div class="font-black text-slate-900 dark:text-white text-xs sm:text-sm">有無其他刑罰要件？</div>
                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                          <div class="p-2.5 rounded-lg bg-sky-50 dark:bg-sky-950/40 border-2 border-sky-300 dark:border-sky-700">
                            <span class="font-black text-sky-800 dark:text-sky-200">✅ 可以阻卻刑罰</span>（§ 26、§ 27、客觀處罰條件）
                          </div>
                          <div class="p-2.5 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 border-2 border-emerald-300 dark:border-emerald-700">
                            <span class="font-black text-emerald-800 dark:text-emerald-200">⚖️ 不能阻卻刑罰</span>（依法發動刑罰）
                          </div>
                        </div>
                      </td>
                    </tr>

                    <!-- 結論 -->
                    <tr>
                      <td class="p-3.5 bg-slate-100 dark:bg-slate-800 font-black text-slate-900 dark:text-white text-center w-24 align-middle border-r-2 border-slate-200 dark:border-slate-800 text-xs sm:text-sm">
                        結論
                      </td>
                      <td class="p-3.5">
                        <div class="flex flex-col sm:flex-row sm:items-center gap-2.5">
                          <span class="font-black text-slate-900 dark:text-white text-xs sm:text-sm">成立○○犯罪的：</span>
                          <span class="px-2.5 py-1 rounded-lg bg-blue-100 dark:bg-blue-950 text-blue-900 dark:text-blue-200 font-black border border-blue-400">故意既遂犯</span>
                          <span class="px-2.5 py-1 rounded-lg bg-amber-100 dark:bg-amber-950 text-amber-900 dark:text-amber-200 font-black border border-amber-400">未遂犯</span>
                          <span class="px-2.5 py-1 rounded-lg bg-purple-100 dark:bg-purple-950 text-purple-900 dark:text-purple-200 font-black border border-purple-400">過失犯</span>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <!-- 2026 現行法規狀態實質查核專區 (Statutory Currency Check) -->
            <div class="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border-2 border-slate-300 dark:border-slate-700 space-y-4">
              <div class="flex items-center justify-between">
                <span class="text-xs font-black text-slate-900 dark:text-white flex items-center gap-1.5">
                  <span>⚖️</span>
                  <span>2026 現行法規狀態實質查核</span>
                </span>
                <span class="px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-200 text-[10px] font-black border border-emerald-300">
                  全國法規資料庫即時核驗
                </span>
              </div>

              <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                
                <!-- § 15 不真正不作為 -->
                <div class="p-3.5 rounded-xl bg-white dark:bg-slate-800 border-2 border-slate-300 dark:border-slate-700 space-y-1.5">
                  <div class="flex items-center justify-between">
                    <span class="font-black text-slate-900 dark:text-white">刑法第 15 條（不作為犯與防止義務）</span>
                    <span class="px-1.5 py-0.5 rounded bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 font-bold text-[10px] border border-emerald-300">維持現行法</span>
                  </div>
                  <p class="text-slate-800 dark:text-slate-100 font-medium leading-relaxed text-[11.5px]">
                    對一定結果發生法律上有防止義務能防止而不防止者，與積極行為同；因自己行為致有發生一定結果之危險者，負防止義務。
                  </p>
                  <a href="https://law.moj.gov.tw/LawClass/LawSingle.aspx?pcode=C0000001&flno=15" target="_blank" rel="noopener" class="text-blue-600 dark:text-blue-400 font-bold hover:underline text-[10.5px] inline-flex items-center gap-1 font-mono">
                    法規出處：全國法規資料庫 刑法第 15 條 ↗
                  </a>
                </div>

                <!-- § 17 加重結果犯 -->
                <div class="p-3.5 rounded-xl bg-white dark:bg-slate-800 border-2 border-slate-300 dark:border-slate-700 space-y-1.5">
                  <div class="flex items-center justify-between">
                    <span class="font-black text-slate-900 dark:text-white">刑法第 17 條（加重結果犯預見可能）</span>
                    <span class="px-1.5 py-0.5 rounded bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 font-bold text-[10px] border border-emerald-300">維持現行法</span>
                  </div>
                  <p class="text-slate-800 dark:text-slate-100 font-medium leading-relaxed text-[11.5px]">
                    因犯罪致發生一定之結果而有加重其刑之規定者，如行為人不能預見其發生時，不適用之。以客觀具備預見可能性為限。
                  </p>
                  <a href="https://law.moj.gov.tw/LawClass/LawSingle.aspx?pcode=C0000001&flno=17" target="_blank" rel="noopener" class="text-blue-600 dark:text-blue-400 font-bold hover:underline text-[10.5px] inline-flex items-center gap-1 font-mono">
                    法規出處：全國法規資料庫 刑法第 17 條 ↗
                  </a>
                </div>

                <!-- § 26 不能未遂 -->
                <div class="p-3.5 rounded-xl bg-white dark:bg-slate-800 border-2 border-slate-300 dark:border-slate-700 space-y-1.5">
                  <div class="flex items-center justify-between">
                    <span class="font-black text-slate-900 dark:text-white">刑法第 26 條（不能未遂絕對不罰）</span>
                    <span class="px-1.5 py-0.5 rounded bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 font-bold text-[10px] border border-emerald-300">維持現行法</span>
                  </div>
                  <p class="text-slate-800 dark:text-slate-100 font-medium leading-relaxed text-[11.5px]">
                    行為不能發生犯罪之結果，又無危險者，不罰。自 94 年修法後徹底改採不罰主義，排除刑罰發動。
                  </p>
                  <a href="https://law.moj.gov.tw/LawClass/LawSingle.aspx?pcode=C0000001&flno=26" target="_blank" rel="noopener" class="text-blue-600 dark:text-blue-400 font-bold hover:underline text-[10.5px] inline-flex items-center gap-1 font-mono">
                    法規出處：全國法規資料庫 刑法第 26 條 ↗
                  </a>
                </div>

                <!-- § 27 中止犯 -->
                <div class="p-3.5 rounded-xl bg-white dark:bg-slate-800 border-2 border-slate-300 dark:border-slate-700 space-y-1.5">
                  <div class="flex items-center justify-between">
                    <span class="font-black text-slate-900 dark:text-white">刑法第 27 條（中止未遂必減免）</span>
                    <span class="px-1.5 py-0.5 rounded bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 font-bold text-[10px] border border-emerald-300">維持現行法</span>
                  </div>
                  <p class="text-slate-800 dark:text-slate-100 font-medium leading-relaxed text-[11.5px]">
                    著手於犯罪行為之實行，因己意中止或防止結果發生者，減輕或免除其刑。享有嗣後解除刑罰事由之必減免寬典。
                  </p>
                  <a href="https://law.moj.gov.tw/LawClass/LawSingle.aspx?pcode=C0000001&flno=27" target="_blank" rel="noopener" class="text-blue-600 dark:text-blue-400 font-bold hover:underline text-[10.5px] inline-flex items-center gap-1 font-mono">
                    法規出處：全國法規資料庫 刑法第 27 條 ↗
                  </a>
                </div>

              </div>
            </div>

            <!-- 導論完成祝福結語 (置於終章底部) -->
            <div class="p-5 rounded-2xl bg-gradient-to-r from-blue-100 via-indigo-100 to-amber-100 dark:from-blue-950/60 dark:via-indigo-950/60 dark:to-amber-950/60 border-2 border-blue-400 dark:border-blue-600 flex flex-col sm:flex-row items-start sm:items-center gap-4 shadow-sm">
              <span class="text-3xl">🎉</span>
              <div class="space-y-1">
                <h4 class="font-black text-slate-900 dark:text-white text-sm sm:text-base">
                  恭喜完整研讀【導論】全書篇章（教材第 XVIII-1 ～ 1-16 頁）！
                </h4>
                <p class="text-xs sm:text-[13px] text-slate-800 dark:text-slate-100 font-medium leading-relaxed">
                  您已融會貫通<strong>第一章「犯罪的概念」</strong>（不法推定罪責、阻卻罪責、阻卻違法與二階／三階論體系）與<strong>第二章「刑法的論罪結構」</strong>（原則與例外擴張、阻卻事由之例外排除、其他刑罰要件及五階基本審查流程），建立起最扎實堅固的刑法總則解題邏輯地基！
                </p>
              </div>
            </div>

            <!-- Chapter Bottom Pagination: 第二章底部 -->
            <div class="pt-8 border-t border-slate-200 dark:border-white/[0.08] grid grid-cols-1 sm:grid-cols-2 gap-4">
              <button onclick="switchView('chapter-1')" class="group p-4 rounded-2xl border border-slate-200 dark:border-white/[0.08] hover:border-blue-500/40 bg-white dark:bg-[#111726] text-left transition-all hover:-translate-y-0.5 shadow-sm hover:shadow-md flex items-center gap-3">
                <div class="w-9 h-9 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 group-hover:bg-blue-50 dark:group-hover:bg-blue-950 group-hover:text-blue-600 dark:group-hover:text-blue-400 flex items-center justify-center text-sm font-bold shrink-0 transition-colors">
                  ←
                </div>
                <div class="min-w-0">
                  <span class="text-[11px] text-slate-400 font-mono block">上一篇</span>
                  <span class="text-xs font-bold text-slate-800 dark:text-slate-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors truncate block">
                    第一章 犯罪的概念 (第 1-1 頁)
                  </span>
                </div>
              </button>

              <button onclick="switchView('part-0')" class="group p-4 rounded-2xl border border-indigo-500/40 hover:border-indigo-500 bg-gradient-to-br from-indigo-50/50 to-blue-50/30 dark:from-indigo-950/30 dark:to-blue-950/20 text-right transition-all hover:-translate-y-0.5 shadow-sm hover:shadow-md flex items-center justify-between gap-3">
                <div class="min-w-0 text-left">
                  <span class="text-[11px] text-indigo-600 dark:text-indigo-400 font-mono block font-bold">下一大單元</span>
                  <span class="text-xs font-extrabold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors truncate block">
                    第零篇 刑法的運作原理與法律效果 →
                  </span>
                </div>
                <div class="w-9 h-9 rounded-xl bg-indigo-600 text-white flex items-center justify-center text-sm font-bold shrink-0 group-hover:scale-105 transition-transform shadow-md shadow-indigo-600/30">
                  →
                </div>
              </button>
            </div>

          </section>

        </div>
`;
