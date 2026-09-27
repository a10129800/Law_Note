/**
 * view-part0-ch1-sec1.js
 * 第零篇 第一章 第一節 法益保護原則——何謂法益？ (教材第 2-1 ~ 2-4 頁)
 * 圖二標準規範 (SECTION_DESIGN_GUIDE_IMAGE2.md) 旗艦視覺重構版
 */
window.APP_VIEWS = window.APP_VIEWS || {};
window.APP_VIEWS['viewPart0Ch1Sec1'] = window.APP_VIEWS['part0Ch1Sec1'] = `
        <!-- VIEW 6: 第零篇 第一章・第一節 法益保護原則——何謂法益？ (教材第 2-1 ~ 2-4 頁) -->
        <div id="viewPart0Ch1Sec1" class="fade-enter hidden space-y-8">
          
          <!-- Breadcrumb & Back -->
          <div class="flex items-center justify-between gap-4 border-b border-slate-100 dark:border-white/[0.06] pb-3">
            <nav class="flex items-center gap-2 text-xs font-medium text-slate-400 flex-wrap">
              <button onclick="switchView('part-0')" class="hover:text-indigo-500 transition-colors">第零篇</button>
              <span>/</span>
              <button onclick="switchView('part0-chapter-1')" class="hover:text-indigo-500 transition-colors">第一章 刑法的運作原理</button>
              <span>/</span>
              <span class="text-indigo-600 dark:text-indigo-400 font-bold">第一節 法益保護原則</span>
            </nav>
            <button onclick="switchView('part0-chapter-1')" class="text-xs text-slate-400 hover:text-indigo-500 flex items-center gap-1 transition-colors shrink-0">
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
              </svg>
              <span>返回第一章總覽</span>
            </button>
          </div>

          <!-- Section Header -->
          <div class="space-y-2">
            <div class="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-mono text-xs font-bold">
              <span>第零篇・第一章・第一節</span>
              <span class="px-2 py-0.5 rounded-md bg-indigo-50 dark:bg-indigo-950/40 text-[11px] border border-indigo-200 dark:border-indigo-900/50">教材第 2-1 ~ 2-4 頁 原文體系</span>
            </div>
            <h2 class="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
              第一節 法益保護原則——何謂法益？
            </h2>
            <p class="text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-medium">
              凡是以法律手段而加以保護之重要生活利益，即稱為法益。本節深入剖析法益之實質先在性、界限機能與構成要件之最高指導原則
            </p>
          </div>

          <!-- 一、法益之核心法定定義 -->
          <section id="sec-p0ch1-sec1-def" class="space-y-6 pt-2">
            <div class="flex items-center gap-3">
              <span class="w-2 h-6 rounded-full bg-blue-600"></span>
              <h3 class="text-lg sm:text-xl font-black text-slate-900 dark:text-white tracking-tight">
                一、法益之核心法定定義（教材第 2-1 頁 原文定義）
              </h3>
            </div>

            <div class="p-6 rounded-3xl border border-slate-200 dark:border-white/[0.08] bg-white dark:bg-[#101623] shadow-sm space-y-6">
              
              <!-- 旗艦卡片 1：核心法定定義 -->
              <div class="p-6 rounded-2xl bg-gradient-to-br from-sky-100 via-blue-50 to-indigo-100 dark:from-[#082f49] dark:via-[#0c4a6e]/70 dark:to-[#0f172a] border-2 border-sky-400 dark:border-sky-500/80 border-l-[8px] border-l-blue-600 dark:border-l-sky-400 shadow-lg shadow-sky-500/15 space-y-5">
                
                <div class="flex items-center justify-between flex-wrap gap-2">
                  <div class="flex items-center gap-2.5">
                    <span class="text-2xl drop-shadow-sm">💎</span>
                    <div>
                      <span class="font-black text-sm sm:text-base text-blue-950 dark:text-sky-100 tracking-wide">
                        法益核心法定定義（LEGAL INTEREST）
                      </span>
                      <span class="block text-[11px] font-mono font-bold text-blue-700 dark:text-sky-300 tracking-wider uppercase">
                        CONCEPTUS BONI IURIDICI · MATERIALES RECHTSGUT
                      </span>
                    </div>
                  </div>
                  <div class="flex items-center gap-2">
                    <span class="text-xs font-mono font-black px-3 py-1 rounded-lg bg-blue-600 text-white shadow-sm border border-blue-400">
                      教材第 2-1 頁 原文定義
                    </span>
                    <span class="text-xs font-mono font-black px-3 py-1 rounded-lg bg-indigo-600 text-white shadow-sm border border-indigo-400">
                      ⚖️ 刑法發動正當性唯一基石
                    </span>
                  </div>
                </div>

                <!-- 核心立法金句卡 -->
                <div class="p-4 sm:p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-blue-400/80 dark:border-blue-700/80 border-l-4 border-l-blue-600 shadow-md space-y-2">
                  <div class="flex items-center justify-between text-xs font-mono border-b border-blue-100 dark:border-slate-800 pb-2">
                    <span class="font-bold text-blue-800 dark:text-blue-300 flex items-center gap-1.5">
                      <span class="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
                      法理原文核心界定
                    </span>
                    <span class="px-2 py-0.5 rounded bg-blue-100 dark:bg-blue-900/60 text-blue-800 dark:text-blue-200 font-bold text-[11px]">
                      ★ 實質刑法核心骨架
                    </span>
                  </div>
                  <p class="text-base sm:text-lg md:text-xl font-black text-blue-950 dark:text-blue-50 leading-relaxed font-serif tracking-wide py-1">
                    「凡是以法律手段而加以保護之重要生活利益，即稱為法益。」
                  </p>
                  <p class="text-xs sm:text-sm text-slate-800 dark:text-slate-100 font-medium leading-relaxed pt-1">
                    <span class="font-bold text-blue-700 dark:text-blue-300">▶ 教義地位剖析：</span>法益是整個刑法理論與犯罪論體系的大基石。刑法之所以具備發動刑罰制裁的實質正當性，正在於行為人的行徑<span class="font-bold text-rose-700 dark:text-rose-300 bg-rose-50 dark:bg-rose-950/60 px-1.5 py-0.5 rounded border border-rose-200 dark:border-rose-800">實質侵害或威脅了這項「重要生活利益」</span>，而非單純違反國家意志或道德規範。
                  </p>
                </div>

                <!-- 核心三要素結構網格 -->
                <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1 text-xs">
                  <div class="p-3.5 rounded-xl bg-white dark:bg-slate-900 border-2 border-slate-300 dark:border-slate-700 space-y-1">
                    <span class="block font-black text-blue-900 dark:text-blue-200 text-sm">① 生活利益之本質</span>
                    <p class="text-slate-800 dark:text-slate-200 font-medium leading-relaxed">
                      植根於個人生存發展與社會社群共同生活所不可或缺之真實客觀價值。
                    </p>
                  </div>
                  <div class="p-3.5 rounded-xl bg-white dark:bg-slate-900 border-2 border-indigo-300 dark:border-indigo-700 space-y-1">
                    <span class="block font-black text-indigo-900 dark:text-indigo-200 text-sm">② 法律手段之昇華</span>
                    <p class="text-slate-800 dark:text-slate-200 font-medium leading-relaxed">
                      經由法治國民主立法程序，將該生活利益承認為值得且需要由公權力捍衛之對象。
                    </p>
                  </div>
                  <div class="p-3.5 rounded-xl bg-white dark:bg-slate-900 border-2 border-emerald-300 dark:border-emerald-700 space-y-1">
                    <span class="block font-black text-emerald-900 dark:text-emerald-200 text-sm">③ 重要性之最後手段</span>
                    <p class="text-slate-800 dark:text-slate-200 font-medium leading-relaxed">
                      唯有最攸關存續之重大利益始得動用刑法，此即刑法謙抑性（最後手段性）之源頭。
                    </p>
                  </div>
                </div>

              </div>

              <!-- 🐣 專屬小白秒懂專區 -->
              <div class="rounded-2xl p-5 sm:p-6 bg-gradient-to-br from-amber-50 via-orange-50/80 to-yellow-100 dark:from-[#2a1c0c] dark:via-[#221608] dark:to-[#171005] border-2 border-amber-400 dark:border-amber-500 border-l-[8px] border-l-amber-500 shadow-md shadow-amber-500/10 space-y-4">
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
                        到底什麼是「法益」？國家憑什麼派警察抓人去坐牢？
                      </h4>
                    </div>
                  </div>
                  <span class="text-xs font-bold text-amber-800 dark:text-amber-300 bg-amber-100 dark:bg-amber-900/60 px-2.5 py-1 rounded-lg border border-amber-300 dark:border-amber-700">
                    🎯 法益入門第一課
                  </span>
                </div>

                <!-- 金句框 -->
                <div class="p-3.5 sm:p-4 rounded-xl bg-white dark:bg-slate-900 border-2 border-amber-300 dark:border-amber-600 shadow-xs">
                  <div class="text-[11px] font-black text-amber-600 dark:text-amber-400 uppercase tracking-wider mb-1">
                    📢 一句話大白話翻譯
                  </div>
                  <p class="text-sm sm:text-base font-black text-slate-900 dark:text-white leading-relaxed">
                    👉「<span class="text-amber-600 dark:text-amber-400 underline decoration-amber-400 underline-offset-4">法益就是『值得國家動用手銬保護的真正寶貝』！沒傷到別人的真實利益，國家連一根手指都不准碰你！</span>」
                  </p>
                </div>

                <!-- 生活比喻對照 -->
                <div class="p-4 rounded-xl bg-amber-100/60 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800/60 space-y-2 text-xs sm:text-[13px] text-slate-800 dark:text-slate-200 leading-relaxed">
                  <div class="font-black text-amber-900 dark:text-amber-200 flex items-center gap-1.5 text-sm">
                    <span>🎯</span>
                    <span>生活超有感比喻：【房間髒亂 vs 拿西瓜刀砍人】</span>
                  </div>
                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                    <div class="p-3 rounded-xl bg-white dark:bg-slate-900 border-2 border-slate-300 dark:border-slate-700 shadow-2xs space-y-1">
                      <span class="font-black text-slate-900 dark:text-white block text-xs sm:text-[13px]">🛏️ 情境 A：你在房間裡三天不洗澡、棉被不折</span>
                      <p class="text-slate-800 dark:text-slate-200 text-xs sm:text-[13px] font-medium leading-relaxed">
                        媽媽看了很生氣，但<span class="font-bold text-blue-700 dark:text-blue-300">沒有侵害任何人的「法益」</span>。國家刑法絕不能立法把「不折棉被」抓去坐牢，否則就是極權暴政！
                      </p>
                    </div>
                    <div class="p-3 rounded-xl bg-white dark:bg-slate-900 border-2 border-rose-300 dark:border-rose-700 shadow-2xs space-y-1">
                      <span class="font-black text-rose-700 dark:text-rose-300 block text-xs sm:text-[13px]">🔪 情境 B：隔壁惡煞持刀破門搶走你存摺</span>
                      <p class="text-slate-800 dark:text-slate-200 text-xs sm:text-[13px] font-medium leading-relaxed">
                        他直接重創了你的<span class="font-bold text-rose-700 dark:text-rose-300">「生命自由與財產法益」</span>！這就是刑法設立的唯一天職，必須動用警力逮捕重判，這就叫「保護法益」！
                      </p>
                    </div>
                  </div>
                  <p class="text-amber-950 dark:text-amber-100 font-bold bg-white/80 dark:bg-slate-900/60 p-2.5 rounded-lg border border-amber-300/60">
                    💡 <strong>新手秒記口訣：</strong>刑法不是道德糾察隊，刑法是<strong>「法益護衛隊」</strong>！有法益受損，刑法才能出鞘！
                  </p>
                </div>

                <!-- 三步快速審查速查卡 -->
                <div class="space-y-2">
                  <div class="text-xs font-black text-amber-950 dark:text-amber-200 flex items-center gap-1">
                    <span>⚡</span>
                    <span>小白 3 步速查：這件事到底能不能算「侵害法益」？</span>
                  </div>
                  <div class="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs">
                    <div class="p-3 rounded-xl bg-white dark:bg-slate-900 border-2 border-blue-400/80 dark:border-blue-700/80 border-l-4 border-l-blue-600 shadow-xs">
                      <span class="font-bold text-blue-800 dark:text-blue-300 block mb-1">第 1 步：利益真實存在嗎？</span>
                      <span class="text-slate-800 dark:text-slate-100 font-medium">是人命、財產、自由，還是只是鄰居單純心情不爽？（純心情不爽不是法益）</span>
                    </div>
                    <div class="p-3 rounded-xl bg-white dark:bg-slate-900 border-2 border-indigo-400/80 dark:border-indigo-700/80 border-l-4 border-l-indigo-600 shadow-xs">
                      <span class="font-bold text-indigo-800 dark:text-indigo-300 block mb-1">第 2 步：法律宣誓保護了嗎？</span>
                      <span class="text-slate-800 dark:text-slate-100 font-medium">刑法分則有沒有明文規定「殺人、傷害、竊盜」要罰？（罪刑法定）</span>
                    </div>
                    <div class="p-3 rounded-xl bg-white dark:bg-slate-900 border-2 border-emerald-400/80 dark:border-emerald-700/80 border-l-4 border-l-emerald-600 shadow-xs">
                      <span class="font-bold text-emerald-800 dark:text-emerald-300 block mb-1">第 3 步：民事賠錢管得住嗎？</span>
                      <span class="text-slate-800 dark:text-slate-100 font-medium">如果民事賠錢就能解決，刑法就該退後；管不住時，刑罰才壓軸登場！</span>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </section>

          <!-- 二、法益之三大本質與源起特徵 -->
          <section id="sec-p0ch1-sec1-nature" class="space-y-6 pt-2">
            <div class="flex items-center gap-3">
              <span class="w-2 h-6 rounded-full bg-blue-600"></span>
              <h3 class="text-lg sm:text-xl font-black text-slate-900 dark:text-white tracking-tight">
                二、法益之三大本質與源起特徵（教材第 2-1 頁 原文分析）
              </h3>
            </div>

            <div class="p-6 rounded-3xl border border-slate-200 dark:border-white/[0.08] bg-white dark:bg-[#101623] shadow-sm space-y-6">
              
              <!-- 旗艦卡片 2：三大特徵分析 -->
              <div class="p-6 rounded-2xl bg-gradient-to-br from-indigo-100 via-blue-50 to-slate-100 dark:from-[#1e1b4b] dark:via-[#1e293b] dark:to-[#0f172a] border-2 border-indigo-400 dark:border-indigo-500/80 border-l-[8px] border-l-indigo-600 dark:border-l-indigo-400 shadow-lg shadow-indigo-500/15 space-y-5">
                
                <div class="flex items-center justify-between flex-wrap gap-2">
                  <div class="flex items-center gap-2.5">
                    <span class="text-2xl drop-shadow-sm">🏛️</span>
                    <div>
                      <span class="font-black text-sm sm:text-base text-indigo-950 dark:text-indigo-100 tracking-wide">
                        法益之三大本質與源起特徵（ESSENTIA ET ORIGO）
                      </span>
                      <span class="block text-[11px] font-mono font-bold text-indigo-700 dark:text-indigo-300 tracking-wider uppercase">
                        PRAEEXISTENTIA MATERIALIS · RECHTSGUTSTHEORIE
                      </span>
                    </div>
                  </div>
                  <div class="flex items-center gap-2">
                    <span class="text-xs font-mono font-black px-3 py-1 rounded-lg bg-indigo-600 text-white shadow-sm border border-indigo-400">
                      教材第 2-1 頁 原文剖析
                    </span>
                    <span class="text-xs font-mono font-black px-3 py-1 rounded-lg bg-amber-500 text-white shadow-sm border border-amber-300">
                      ⭐ 實質先在性命題
                    </span>
                  </div>
                </div>

                <!-- 三大本質旗艦三欄卡片 -->
                <div class="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                  <!-- 特徵 1 -->
                  <div class="p-4 sm:p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-blue-400/80 dark:border-blue-700/80 border-l-4 border-l-blue-600 shadow-md space-y-2.5">
                    <div class="flex items-center justify-between">
                      <span class="font-black text-sm text-blue-900 dark:text-blue-200 flex items-center gap-1.5">
                        <span class="w-6 h-6 rounded-lg bg-blue-600 text-white flex items-center justify-center font-mono font-bold text-xs">1</span>
                        <span>社會倫理價值觀念</span>
                      </span>
                      <span class="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-blue-100 dark:bg-blue-900/60 text-blue-800 dark:text-blue-200">源起母體</span>
                    </div>
                    <p class="text-slate-800 dark:text-slate-100 font-medium leading-relaxed">
                      法益並非立法者閉門造車或憑空捏造，而是植根於整體社會社群長期凝聚形成的<span class="font-bold text-blue-800 dark:text-blue-300">倫理價值觀念</span>與文明生活秩序。
                    </p>
                    <div class="p-2.5 rounded-lg bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-900/40 text-blue-950 dark:text-blue-200 text-[11px] font-bold">
                      💡 社會共識是法益的土壤，法律不可脫離常理。
                    </div>
                  </div>

                  <!-- 特徵 2 -->
                  <div class="p-4 sm:p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-indigo-400/80 dark:border-indigo-700/80 border-l-4 border-l-indigo-600 shadow-md space-y-2.5">
                    <div class="flex items-center justify-between">
                      <span class="font-black text-sm text-indigo-900 dark:text-indigo-200 flex items-center gap-1.5">
                        <span class="w-6 h-6 rounded-lg bg-indigo-600 text-white flex items-center justify-center font-mono font-bold text-xs">2</span>
                        <span>先於法律規範而存在</span>
                      </span>
                      <span class="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-indigo-100 dark:bg-indigo-900/60 text-indigo-800 dark:text-indigo-200">實質先在性 ⭐</span>
                    </div>
                    <p class="text-slate-800 dark:text-slate-100 font-medium leading-relaxed">
                      人類的生命、身體、自由、財產等基本法益，在刑法條文制定之前即已實質客觀存在。<span class="font-bold text-rose-700 dark:text-rose-300">非先有法律才有法益，而是先有利益才有法律！</span>
                    </p>
                    <div class="p-2.5 rounded-lg bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-900/40 text-indigo-950 dark:text-indigo-200 text-[11px] font-bold">
                      💡 法律是利益的「承認者與保護者」，而非創造者。
                    </div>
                  </div>

                  <!-- 特徵 3 -->
                  <div class="p-4 sm:p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-emerald-400/80 dark:border-emerald-700/80 border-l-4 border-l-emerald-600 shadow-md space-y-2.5">
                    <div class="flex items-center justify-between">
                      <span class="font-black text-sm text-emerald-900 dark:text-emerald-200 flex items-center gap-1.5">
                        <span class="w-6 h-6 rounded-lg bg-emerald-600 text-white flex items-center justify-center font-mono font-bold text-xs">3</span>
                        <span>制度發展後確認保護</span>
                      </span>
                      <span class="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-emerald-100 dark:bg-emerald-900/60 text-emerald-800 dark:text-emerald-200">實證化擔保</span>
                    </div>
                    <p class="text-slate-800 dark:text-slate-100 font-medium leading-relaxed">
                      隨著現代法治國制度之演進，國家以成文刑法形式將這些重要生活利益<span class="font-bold text-emerald-800 dark:text-emerald-300">明文化確認</span>，並賦予最強力的法律效果予以實質保護。
                    </p>
                    <div class="p-2.5 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-900/40 text-emerald-950 dark:text-emerald-200 text-[11px] font-bold">
                      💡 成文法賦予強制執行力，使利益免受私力侵吞。
                    </div>
                  </div>
                </div>

              </div>

              <!-- 🐣 專屬小白秒懂專區 -->
              <div class="rounded-2xl p-5 sm:p-6 bg-gradient-to-br from-amber-50 via-orange-50/80 to-yellow-100 dark:from-[#2a1c0c] dark:via-[#221608] dark:to-[#171005] border-2 border-amber-400 dark:border-amber-500 border-l-[8px] border-l-amber-500 shadow-md shadow-amber-500/10 space-y-4">
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
                        先有「刑法第 271 條」，殺人才是犯罪？還是「殺人本來就不對」，法律才去寫這條？
                      </h4>
                    </div>
                  </div>
                  <span class="text-xs font-bold text-amber-800 dark:text-amber-300 bg-amber-100 dark:bg-amber-900/60 px-2.5 py-1 rounded-lg border border-amber-300 dark:border-amber-700">
                    🎯 搞懂實質先在性
                  </span>
                </div>

                <!-- 金句框 -->
                <div class="p-3.5 sm:p-4 rounded-xl bg-white dark:bg-slate-900 border-2 border-amber-300 dark:border-amber-600 shadow-xs">
                  <div class="text-[11px] font-black text-amber-600 dark:text-amber-400 uppercase tracking-wider mb-1">
                    📢 一句話大白話翻譯
                  </div>
                  <p class="text-sm sm:text-base font-black text-slate-900 dark:text-white leading-relaxed">
                    👉「<span class="text-amber-600 dark:text-amber-400 underline decoration-amber-400 underline-offset-4">先有想活命的渴望與寶藏，才有保護寶藏的警衛！法律不是利益的『發明者』，而是利益的『保鑣』！</span>」
                  </p>
                </div>

                <!-- 生活比喻對照 -->
                <div class="p-4 rounded-xl bg-amber-100/60 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800/60 space-y-2 text-xs sm:text-[13px] text-slate-800 dark:text-slate-200 leading-relaxed">
                  <div class="font-black text-amber-900 dark:text-amber-200 flex items-center gap-1.5 text-sm">
                    <span>🎯</span>
                    <span>生活超有感比喻：【金庫裡的金塊 vs 金庫的大門保全】</span>
                  </div>
                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                    <div class="p-3 rounded-xl bg-white dark:bg-slate-900 border-2 border-amber-300 dark:border-amber-700 shadow-2xs space-y-1">
                      <span class="font-black text-amber-900 dark:text-amber-200 block text-xs sm:text-[13px]">💰 金塊（法益）：實質客觀存在</span>
                      <p class="text-slate-800 dark:text-slate-200 text-xs sm:text-[13px] font-medium leading-relaxed">
                        人天生愛命、不想挨打、辛苦賺的錢不想被偷。這些「活下去的重要利益」早在立法院成立前幾萬年就客觀存在了！
                      </p>
                    </div>
                    <div class="p-3 rounded-xl bg-white dark:bg-slate-900 border-2 border-blue-300 dark:border-blue-700 shadow-2xs space-y-1">
                      <span class="font-black text-blue-900 dark:text-blue-200 block text-xs sm:text-[13px]">🛡️ 警衛與監視器（刑法）：事後確認與保護</span>
                      <p class="text-slate-800 dark:text-slate-200 text-xs sm:text-[13px] font-medium leading-relaxed">
                        國家看到金塊常常被人搶，才制定刑法條文配備手銬當保全。如果金庫裡空無一物，裝十萬支監視器也毫無意義！
                      </p>
                    </div>
                  </div>
                </div>

                <!-- 三大特徵快速記憶口訣 -->
                <div class="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs">
                  <div class="p-3 rounded-xl bg-white dark:bg-slate-900 border-2 border-blue-300 dark:border-blue-700 text-center space-y-1">
                    <span class="font-black text-blue-700 dark:text-blue-300 block">① 母體是人情事理</span>
                    <span class="text-slate-700 dark:text-slate-200 font-medium">全體社會公認該保的才是利益</span>
                  </div>
                  <div class="p-3 rounded-xl bg-white dark:bg-slate-900 border-2 border-indigo-300 dark:border-indigo-700 text-center space-y-1">
                    <span class="font-black text-indigo-700 dark:text-indigo-300 block">② 誕生在法律之前</span>
                    <span class="text-slate-700 dark:text-slate-200 font-medium">先有人命價值，才有殺人罪條文</span>
                  </div>
                  <div class="p-3 rounded-xl bg-white dark:bg-slate-900 border-2 border-emerald-300 dark:border-emerald-700 text-center space-y-1">
                    <span class="font-black text-emerald-700 dark:text-emerald-300 block">③ 法條明文加蓋鋼印</span>
                    <span class="text-slate-700 dark:text-slate-200 font-medium">白紙黑字寫進刑法，國家全力撐腰</span>
                  </div>
                </div>

              </div>

            </div>
          </section>

          <!-- 三、法益之雙重機能與界限 -->
          <section id="sec-p0ch1-sec1-func" class="space-y-6 pt-2">
            <div class="flex items-center gap-3">
              <span class="w-2 h-6 rounded-full bg-purple-600"></span>
              <h3 class="text-lg sm:text-xl font-black text-slate-900 dark:text-white tracking-tight">
                三、法益之雙重機能與界限（保護機能 vs 界限機能）
              </h3>
            </div>

            <div class="p-6 rounded-3xl border border-slate-200 dark:border-white/[0.08] bg-white dark:bg-[#101623] shadow-sm space-y-6">
              
              <!-- 旗艦卡片 3：雙重機能對照 -->
              <div class="p-6 rounded-2xl bg-gradient-to-br from-emerald-100 via-teal-50 to-amber-100 dark:from-[#064e3b]/80 dark:via-[#0f172a] dark:to-[#451a03]/60 border-2 border-emerald-400 dark:border-emerald-500/80 border-l-[8px] border-l-emerald-600 dark:border-l-emerald-400 shadow-lg shadow-emerald-500/15 space-y-5">
                
                <div class="flex items-center justify-between flex-wrap gap-2">
                  <div class="flex items-center gap-2.5">
                    <span class="text-2xl drop-shadow-sm">⚖️</span>
                    <div>
                      <span class="font-black text-sm sm:text-base text-emerald-950 dark:text-emerald-100 tracking-wide">
                        法益之雙重機能與界限（SCHUTZ- UND BEGRENZUNGSFUNKTION）
                      </span>
                      <span class="block text-[11px] font-mono font-bold text-emerald-800 dark:text-emerald-300 tracking-wider uppercase">
                        DUALIS FUNCTIO BONI IURIDICI · ULTRA VIRES LIMITATIO
                      </span>
                    </div>
                  </div>
                  <div class="flex items-center gap-2">
                    <span class="text-xs font-mono font-black px-3 py-1 rounded-lg bg-emerald-600 text-white shadow-sm border border-emerald-400">
                      教材第 2-1 頁 核心機能
                    </span>
                    <span class="text-xs font-mono font-black px-3 py-1 rounded-lg bg-amber-600 text-white shadow-sm border border-amber-400">
                      🛡️ 刑事政策批判尺規
                    </span>
                  </div>
                </div>

                <!-- 雙重機能高對比對照網格 -->
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <!-- 積極保護機能 -->
                  <div class="p-4 sm:p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-emerald-400/80 dark:border-emerald-700/80 border-l-4 border-l-emerald-600 shadow-md space-y-2.5">
                    <div class="flex items-center justify-between">
                      <span class="font-black text-sm text-emerald-900 dark:text-emerald-200 flex items-center gap-1.5">
                        <span class="text-base">🛡️</span>
                        <span>積極保護機能（SCHUTZFUNKTION）</span>
                      </span>
                      <span class="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-emerald-100 dark:bg-emerald-900/60 text-emerald-800 dark:text-emerald-200">正當性源頭</span>
                    </div>
                    <p class="text-slate-800 dark:text-slate-100 font-medium leading-relaxed">
                      刑法設立刑罰規範，旨在藉由<span class="font-bold text-emerald-700 dark:text-emerald-300">威嚇與實質制裁</span>，確立人民行為指引規範，達成保全人類共同生活必不可缺的重要利益。
                    </p>
                    <div class="p-2.5 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-900/40 text-emerald-950 dark:text-emerald-200 text-[11px] font-bold">
                      🎯 面向人民：阻絕壞人侵犯好人的權利空間。
                    </div>
                  </div>

                  <!-- 消極界限機能 -->
                  <div class="p-4 sm:p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-amber-400/80 dark:border-amber-700/80 border-l-4 border-l-amber-600 shadow-md space-y-2.5">
                    <div class="flex items-center justify-between">
                      <span class="font-black text-sm text-amber-900 dark:text-amber-200 flex items-center gap-1.5">
                        <span class="text-base">🚧</span>
                        <span>消極界限機能（BEGRENZUNGSFUNKTION）</span>
                      </span>
                      <span class="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-amber-100 dark:bg-amber-900/60 text-amber-800 dark:text-amber-200">批判立法依歸</span>
                    </div>
                    <p class="text-slate-800 dark:text-slate-100 font-medium leading-relaxed">
                      凡不具備實質法益侵害或危險之行為（如單純不合道德、同性戀、通姦或宗教禁忌），國家<span class="font-bold text-rose-700 dark:text-rose-300">不得任意動用刑罰處罰</span>，此乃除罪化思潮之根本指引。
                    </p>
                    <div class="p-2.5 rounded-lg bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-900/40 text-amber-950 dark:text-amber-200 text-[11px] font-bold">
                      🎯 面向國家：約束公權力不得化身為道德警察！
                    </div>
                  </div>
                </div>

              </div>

              <!-- 🐣 專屬小白秒懂專區 -->
              <div class="rounded-2xl p-5 sm:p-6 bg-gradient-to-br from-amber-50 via-orange-50/80 to-yellow-100 dark:from-[#2a1c0c] dark:via-[#221608] dark:to-[#171005] border-2 border-amber-400 dark:border-amber-500 border-l-[8px] border-l-amber-500 shadow-md shadow-amber-500/10 space-y-4">
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
                        刑法既是警察手裡的「盾牌」，為什麼更是關住國家的「籠子」？
                      </h4>
                    </div>
                  </div>
                  <span class="text-xs font-bold text-amber-800 dark:text-amber-300 bg-amber-100 dark:bg-amber-900/60 px-2.5 py-1 rounded-lg border border-amber-300 dark:border-amber-700">
                    🎯 雙重機能秒懂
                  </span>
                </div>

                <!-- 金句框 -->
                <div class="p-3.5 sm:p-4 rounded-xl bg-white dark:bg-slate-900 border-2 border-amber-300 dark:border-amber-600 shadow-xs">
                  <div class="text-[11px] font-black text-amber-600 dark:text-amber-400 uppercase tracking-wider mb-1">
                    📢 一句話大白話翻譯
                  </div>
                  <p class="text-sm sm:text-base font-black text-slate-900 dark:text-white leading-relaxed">
                    👉「<span class="text-amber-600 dark:text-amber-400 underline decoration-amber-400 underline-offset-4">刑罰是一頭猛獸：它用來咬退壞人（積極保護），但也必須被鐵鍊鎖好，不准咬向無辜善良百姓（消極界限）！</span>」
                  </p>
                </div>

                <!-- 生活比喻對照 -->
                <div class="p-4 rounded-xl bg-amber-100/60 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800/60 space-y-2 text-xs sm:text-[13px] text-slate-800 dark:text-slate-200 leading-relaxed">
                  <div class="font-black text-amber-900 dark:text-amber-200 flex items-center gap-1.5 text-sm">
                    <span>🎯</span>
                    <span>生活超有感比喻：【保鑣看家護院 vs 保鑣擅自管你吃青椒】</span>
                  </div>
                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                    <div class="p-3 rounded-xl bg-white dark:bg-slate-900 border-2 border-emerald-300 dark:border-emerald-700 shadow-2xs space-y-1">
                      <span class="font-black text-emerald-800 dark:text-emerald-300 block text-xs sm:text-[13px]">🛡️ 積極保護：強盜翻牆，保鑣重拳出擊</span>
                      <p class="text-slate-800 dark:text-slate-200 text-xs sm:text-[13px] font-medium leading-relaxed">
                        有人要搶劫殺人，刑罰必須迅速出擊把壞人抓進牢房，這叫保護你的安全（Schutzfunktion）。
                      </p>
                    </div>
                    <div class="p-3 rounded-xl bg-white dark:bg-slate-900 border-2 border-rose-300 dark:border-rose-700 shadow-2xs space-y-1">
                      <span class="font-black text-rose-700 dark:text-rose-300 block text-xs sm:text-[13px]">🚧 消極界限：你挑食不吃青椒，保鑣拿槍指著你？</span>
                      <p class="text-slate-800 dark:text-slate-200 text-xs sm:text-[13px] font-medium leading-relaxed">
                        挑食只是生活偏好，沒有傷害別人的法益。保鑣如果連這個都管，那就是越權作亂！法益界限就是給保鑣戴上手銬，不准亂發飆！
                      </p>
                    </div>
                  </div>
                </div>

                <!-- 現代實踐速查卡 -->
                <div class="p-3 rounded-xl bg-white dark:bg-slate-900 border border-amber-300 dark:border-amber-700 text-xs space-y-1">
                  <span class="font-black text-amber-950 dark:text-amber-200 block">📚 現代刑法除罪化經典實例（司法院大法官釋字第 791 號 通姦除罪）：</span>
                  <p class="text-slate-700 dark:text-slate-300 font-medium">
                    婚姻忠誠本屬個人感情與民事契約範疇，動用刑法抓人去關不但挽救不了婚姻，反而過度侵害隱私。這就是典型的「消極界限機能」發揮作用，促成刑法條文的廢止！
                  </p>
                </div>

              </div>

            </div>
          </section>

          <!-- 四、法益之二元區分與體系關聯 -->
          <section id="sec-p0ch1-sec1-classification" class="space-y-6 pt-2">
            <div class="flex items-center gap-3">
              <span class="w-2 h-6 rounded-full bg-indigo-600"></span>
              <h3 class="text-lg sm:text-xl font-black text-slate-900 dark:text-white tracking-tight">
                四、法益之二元區分與體系關聯（個人法益 vs 超個人法益、量相異說）
              </h3>
            </div>

            <div class="p-6 rounded-3xl border border-slate-200 dark:border-white/[0.08] bg-white dark:bg-[#101623] shadow-sm space-y-6">
              
              <!-- 旗艦卡片 4：二元區分與量相異說 -->
              <div class="p-6 rounded-2xl bg-gradient-to-br from-indigo-100 via-sky-50 to-purple-100 dark:from-[#1e1b4b] dark:via-[#0c4a6e]/60 dark:to-[#3b0764]/70 border-2 border-indigo-400 dark:border-indigo-500/80 border-l-[8px] border-l-indigo-600 dark:border-l-indigo-400 shadow-lg shadow-indigo-500/15 space-y-5">
                
                <div class="flex items-center justify-between flex-wrap gap-2">
                  <div class="flex items-center gap-2.5">
                    <span class="text-2xl drop-shadow-sm">⚖️</span>
                    <div>
                      <span class="font-black text-sm sm:text-base text-indigo-950 dark:text-indigo-100 tracking-wide">
                        法益二元論之「量相異說」（QUANTITATIVE DIFFERENZTHEORIE）
                      </span>
                      <span class="block text-[11px] font-mono font-bold text-indigo-700 dark:text-indigo-300 tracking-wider uppercase">
                        INDIVIDUALGÜTER VS. ÜBERINDIVIDUALGÜTER
                      </span>
                    </div>
                  </div>
                  <div class="flex items-center gap-2">
                    <span class="text-xs font-mono font-black px-3 py-1 rounded-lg bg-indigo-600 text-white shadow-sm border border-indigo-400">
                      教材第 2-2 頁 原文通說
                    </span>
                    <span class="text-xs font-mono font-black px-3 py-1 rounded-lg bg-blue-600 text-white shadow-sm border border-blue-400">
                      ⭐ 體系貫穿核心
                    </span>
                  </div>
                </div>

                <!-- 通說理論核心框 -->
                <div class="p-4 sm:p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-indigo-400/80 dark:border-indigo-700/80 border-l-4 border-l-indigo-600 shadow-md space-y-2">
                  <div class="flex items-center justify-between text-xs font-mono border-b border-indigo-100 dark:border-slate-800 pb-2">
                    <span class="font-bold text-indigo-800 dark:text-indigo-300 flex items-center gap-1.5">
                      <span class="w-2 h-2 rounded-full bg-indigo-600 animate-pulse"></span>
                      法益二元論通說立場
                    </span>
                    <span class="px-2 py-0.5 rounded bg-indigo-100 dark:bg-indigo-900/60 text-indigo-800 dark:text-indigo-200 font-bold text-[11px]">
                      ★ 量相異說（不是本質相異！）
                    </span>
                  </div>
                  <p class="text-sm sm:text-base font-black text-indigo-950 dark:text-indigo-100 leading-relaxed font-serif tracking-wide py-1">
                    「超個人法益與個人法益並非本質不同，而是只有數量上的差別。超個人法益乃個人法益的集合體，兩者的保護方向應屬一致，而非相互對立。」
                  </p>
                  <p class="text-xs sm:text-sm text-slate-800 dark:text-slate-100 font-medium leading-relaxed pt-1">
                    例如：刑法規範放火罪（§ 173）維護公共安全，看似保護超個人社會法益，實質上係在一次性保全該火場範圍內不特定多數人的生命、身體與財產！
                  </p>
                </div>

                <!-- 個人 vs 超個人對照卡 -->
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <!-- 個人法益 -->
                  <div class="p-4 sm:p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-blue-400/80 dark:border-blue-700/80 border-l-4 border-l-blue-600 shadow-md space-y-2">
                    <div class="flex items-center justify-between">
                      <span class="font-black text-sm text-blue-900 dark:text-blue-200 flex items-center gap-1.5">
                        <span class="w-6 h-6 rounded-lg bg-blue-600 text-white flex items-center justify-center font-mono font-bold text-xs">👤</span>
                        <span>個人法益（INDIVIDUALGÜTER）</span>
                      </span>
                      <span class="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-blue-100 dark:bg-blue-900/60 text-blue-800 dark:text-blue-200">微觀核心</span>
                    </div>
                    <p class="text-slate-800 dark:text-slate-100 font-medium leading-relaxed">
                      以特定具體個人作為享有權利主體的生活利益。可細分為：
                    </p>
                    <ul class="space-y-1.5 pt-1 text-slate-700 dark:text-slate-200">
                      <li>• <strong class="text-blue-900 dark:text-blue-300">專屬性法益（人格法益）：</strong>生命、身體、自由、名譽、秘密。不得拋棄處分。</li>
                      <li>• <strong class="text-indigo-900 dark:text-indigo-300">非專屬性法益（財產法益）：</strong>個別財產（竊盜）、整體財產（詐欺、背信）。</li>
                    </ul>
                  </div>

                  <!-- 超個人法益 -->
                  <div class="p-4 sm:p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-purple-400/80 dark:border-purple-700/80 border-l-4 border-l-purple-600 shadow-md space-y-2">
                    <div class="flex items-center justify-between">
                      <span class="font-black text-sm text-purple-900 dark:text-purple-200 flex items-center gap-1.5">
                        <span class="w-6 h-6 rounded-lg bg-purple-600 text-white flex items-center justify-center font-mono font-bold text-xs">🏛️</span>
                        <span>超個人法益（ÜBERINDIVIDUALGÜTER）</span>
                      </span>
                      <span class="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-purple-100 dark:bg-purple-900/60 text-purple-800 dark:text-purple-200">集合保全</span>
                    </div>
                    <p class="text-slate-800 dark:text-slate-100 font-medium leading-relaxed">
                      個人法益制度性化之集合保全環境。包含：
                    </p>
                    <ul class="space-y-1.5 pt-1 text-slate-700 dark:text-slate-200">
                      <li>• <strong class="text-purple-900 dark:text-purple-300">社會法益（§ 173 以下）：</strong>公共安全、公共信用、善良風俗。</li>
                      <li>• <strong class="text-indigo-900 dark:text-indigo-300">國家法益（§ 100 以下）：</strong>國家存立、職務公正、公權力行使、司法威信。</li>
                    </ul>
                  </div>
                </div>

              </div>

              <!-- 🐣 專屬小白秒懂專區 -->
              <div class="rounded-2xl p-5 sm:p-6 bg-gradient-to-br from-amber-50 via-orange-50/80 to-yellow-100 dark:from-[#2a1c0c] dark:via-[#221608] dark:to-[#171005] border-2 border-amber-400 dark:border-amber-500 border-l-[8px] border-l-amber-500 shadow-md shadow-amber-500/10 space-y-4">
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
                        什麼叫「超個人法益」？為什麼路上闖紅燈或燒空屋，沒有撞到我，警察也能抓？
                      </h4>
                    </div>
                  </div>
                  <span class="text-xs font-bold text-amber-800 dark:text-amber-300 bg-amber-100 dark:bg-amber-900/60 px-2.5 py-1 rounded-lg border border-amber-300 dark:border-amber-700">
                    🎯 量相異說白話通
                  </span>
                </div>

                <!-- 金句框 -->
                <div class="p-3.5 sm:p-4 rounded-xl bg-white dark:bg-slate-900 border-2 border-amber-300 dark:border-amber-600 shadow-xs">
                  <div class="text-[11px] font-black text-amber-600 dark:text-amber-400 uppercase tracking-wider mb-1">
                    📢 一句話大白話翻譯
                  </div>
                  <p class="text-sm sm:text-base font-black text-slate-900 dark:text-white leading-relaxed">
                    👉「<span class="text-amber-600 dark:text-amber-400 underline decoration-amber-400 underline-offset-4">『超個人法益』就是全體市民的『團購保險大禮包』！保護紅綠燈與消防安全，就是在保護走在馬路上的每一個人！</span>」
                  </p>
                </div>

                <!-- 生活比喻對照 -->
                <div class="p-4 rounded-xl bg-amber-100/60 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800/60 space-y-2 text-xs sm:text-[13px] text-slate-800 dark:text-slate-200 leading-relaxed">
                  <div class="font-black text-amber-900 dark:text-amber-200 flex items-center gap-1.5 text-sm">
                    <span>🎯</span>
                    <span>生活超有感比喻：【喝單杯水 vs 投毒到社區自來水水庫】</span>
                  </div>
                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                    <div class="p-3 rounded-xl bg-white dark:bg-slate-900 border-2 border-blue-300 dark:border-blue-700 shadow-2xs space-y-1">
                      <span class="font-black text-blue-900 dark:text-blue-200 block text-xs sm:text-[13px]">🥛 個人法益：單點一杯珍珠奶茶</span>
                      <p class="text-slate-800 dark:text-slate-200 text-xs sm:text-[13px] font-medium leading-relaxed">
                        壞人搶走你手上這杯飲料，是侵害你個人的財產法益；在你的飲料下毒，是侵害你個人的生命法益。
                      </p>
                    </div>
                    <div class="p-3 rounded-xl bg-white dark:bg-slate-900 border-2 border-purple-300 dark:border-purple-700 shadow-2xs space-y-1">
                      <span class="font-black text-purple-900 dark:text-purple-200 block text-xs sm:text-[13px]">🏭 超個人法益：在翡翠水庫自來水廠倒毒藥</span>
                      <p class="text-slate-800 dark:text-slate-200 text-xs sm:text-[13px] font-medium leading-relaxed">
                        毒藥倒下去的瞬間，還沒人真正喝進肚子，但這威脅了幾百萬人的生命！這就是把個人生命利益<strong>「團購打包保護」</strong>，統稱為公共安全法益！
                      </p>
                    </div>
                  </div>
                  <p class="text-amber-950 dark:text-amber-100 font-bold bg-white/80 dark:bg-slate-900/60 p-2.5 rounded-lg border border-amber-300/60">
                    💡 <strong>為什麼叫「量相異說」？</strong> 質是一樣的（都是為了保障人活命），差別只在受害人數是 1 個人還是 100 萬個人！
                  </p>
                </div>

              </div>

            </div>
          </section>

          <!-- 五、刑法分則體系架構圖解 -->
          <section id="sec-p0ch1-sec1-framework" class="space-y-6 pt-2">
            <div class="flex items-center gap-3">
              <span class="w-2 h-6 rounded-full bg-blue-600"></span>
              <h3 class="text-lg sm:text-xl font-black text-slate-900 dark:text-white tracking-tight">
                五、刑法分則體系架構圖解（個人・社會・國家法益之法定體系）
              </h3>
            </div>

            <div class="p-6 rounded-3xl border border-slate-200 dark:border-white/[0.08] bg-white dark:bg-[#101623] shadow-sm space-y-6">
              
              <!-- 旗艦卡片 5：分則體系架構圖 -->
              <div class="p-6 rounded-2xl bg-gradient-to-br from-blue-100 via-indigo-50 to-slate-100 dark:from-[#0c4a6e]/80 dark:via-[#1e1b4b]/70 dark:to-[#0f172a] border-2 border-blue-400 dark:border-blue-500/80 border-l-[8px] border-l-blue-600 dark:border-l-blue-400 shadow-lg shadow-blue-500/15 space-y-5">
                
                <div class="flex items-center justify-between flex-wrap gap-2">
                  <div class="flex items-center gap-2.5">
                    <span class="text-2xl drop-shadow-sm">🗺️</span>
                    <div>
                      <span class="font-black text-sm sm:text-base text-blue-950 dark:text-blue-100 tracking-wide">
                        刑法分則體系架構（SYSTEMATICA DELICTORUM）
                      </span>
                      <span class="block text-[11px] font-mono font-bold text-blue-700 dark:text-blue-300 tracking-wider uppercase">
                        TRIPARTITA PROTECTIO · CODEX POENALIS SPECIALIS
                      </span>
                    </div>
                  </div>
                  <div class="flex items-center gap-2">
                    <span class="text-xs font-mono font-black px-3 py-1 rounded-lg bg-blue-600 text-white shadow-sm border border-blue-400">
                      教材第 2-2 頁 體系架構圖
                    </span>
                    <span class="text-xs font-mono font-black px-3 py-1 rounded-lg bg-indigo-600 text-white shadow-sm border border-indigo-400">
                      三位一體大分類
                    </span>
                  </div>
                </div>

                <!-- 體系大架構圖示 (zoomable-diagram) -->
                <div class="zoomable-diagram p-5 sm:p-6 rounded-2xl bg-white dark:bg-slate-900 border-2 border-blue-200 dark:border-slate-800 space-y-5">
                  <div class="text-center pb-2 border-b border-slate-200 dark:border-slate-800">
                    <span class="text-sm font-black text-indigo-700 dark:text-indigo-300 tracking-wider">
                      刑法分則三大法益核心體系總覽（法定架構）
                    </span>
                  </div>

                  <div class="grid grid-cols-1 lg:grid-cols-2 gap-5">
                    <!-- 個人法益區塊 -->
                    <div class="p-4 sm:p-5 rounded-xl bg-blue-50/60 dark:bg-blue-950/30 border-2 border-blue-300 dark:border-blue-800 space-y-3">
                      <div class="flex items-center justify-between border-b border-blue-200 dark:border-blue-800 pb-2">
                        <span class="font-black text-sm text-blue-950 dark:text-blue-200 flex items-center gap-1.5">
                          <span>👤</span>
                          <span>侵害個人法益之罪</span>
                        </span>
                        <span data-statute="271" class="text-[11px] font-mono font-black px-2.5 py-0.5 rounded-lg bg-blue-600 text-white cursor-pointer hover:bg-blue-700 transition-colors" title="點擊查看法條全文">
                          § 271 以下
                        </span>
                      </div>

                      <div class="space-y-2.5 text-xs">
                        <div class="p-3 rounded-lg bg-white dark:bg-slate-900 border border-blue-200 dark:border-blue-900 space-y-1">
                          <span class="font-bold text-blue-800 dark:text-blue-300 block">🔹 專屬性法益（人格法益）</span>
                          <p class="text-slate-700 dark:text-slate-200">
                            生命（<span data-statute="271" class="statute-link text-blue-600 font-bold">§ 271</span>）、身體健康（<span data-statute="277" class="statute-link text-blue-600 font-bold">§ 277</span>）、自由（§ 296 以下）、名譽（§ 309）、秘密（§ 315）。<strong>個人專屬享有，不得由他人任意代為處分！</strong>
                          </p>
                        </div>
                        <div class="p-3 rounded-lg bg-white dark:bg-slate-900 border border-cyan-200 dark:border-cyan-900 space-y-1">
                          <span class="font-bold text-cyan-800 dark:text-cyan-300 block">🔹 非專屬性法益（財產法益）</span>
                          <div class="grid grid-cols-2 gap-2 pt-0.5">
                            <div class="p-2 rounded bg-slate-50 dark:bg-slate-800/80">
                              <span class="font-black text-slate-900 dark:text-white block">個別財產：</span>
                              <span class="text-slate-700 dark:text-slate-300">竊盜（<span data-statute="320" class="statute-link text-blue-600 font-bold">§ 320</span>）、侵占、毀損</span>
                            </div>
                            <div class="p-2 rounded bg-slate-50 dark:bg-slate-800/80">
                              <span class="font-black text-slate-900 dark:text-white block">整體財產：</span>
                              <span class="text-slate-700 dark:text-slate-300">詐欺（§ 339）、恐嚇、背信</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <!-- 超個人法益區塊 -->
                    <div class="p-4 sm:p-5 rounded-xl bg-purple-50/60 dark:bg-purple-950/30 border-2 border-purple-300 dark:border-purple-800 space-y-3">
                      <div class="flex items-center justify-between border-b border-purple-200 dark:border-purple-800 pb-2">
                        <span class="font-black text-sm text-purple-950 dark:text-purple-200 flex items-center gap-1.5">
                          <span>🏛️</span>
                          <span>侵害超個人法益之罪</span>
                        </span>
                        <span class="text-[11px] font-mono font-black px-2.5 py-0.5 rounded-lg bg-purple-600 text-white">
                          社會＋國家法益
                        </span>
                      </div>

                      <div class="space-y-2.5 text-xs">
                        <div class="p-3 rounded-lg bg-white dark:bg-slate-900 border border-purple-200 dark:border-purple-900 space-y-1">
                          <div class="flex items-center justify-between">
                            <span class="font-bold text-purple-800 dark:text-purple-300">🔸 社會法益</span>
                            <span class="font-mono text-purple-700 dark:text-purple-300 font-bold">§ 173 以下</span>
                          </div>
                          <ul class="text-slate-700 dark:text-slate-200 space-y-0.5 pl-2 border-l border-purple-300 dark:border-purple-800">
                            <li>• <strong>公共安全：</strong>放火（§ 173）、妨害交通（<span data-statute="185-4" class="statute-link text-blue-600 font-bold">§ 185-4</span>）</li>
                            <li>• <strong>公共信用：</strong>偽造貨幣（§ 195）、偽造文書印文（§ 210）</li>
                            <li>• <strong>善良風俗：</strong>妨害性自主（§ 221）、賭博、妨害風化</li>
                          </ul>
                        </div>
                        <div class="p-3 rounded-lg bg-white dark:bg-slate-900 border border-indigo-200 dark:border-indigo-900 space-y-1">
                          <div class="flex items-center justify-between">
                            <span class="font-bold text-indigo-800 dark:text-indigo-300">🔸 國家法益</span>
                            <span class="font-mono text-indigo-700 dark:text-indigo-300 font-bold">§ 100 以下</span>
                          </div>
                          <ul class="text-slate-700 dark:text-slate-200 space-y-0.5 pl-2 border-l border-indigo-300 dark:border-indigo-800">
                            <li>• <strong>存立安全：</strong>內亂罪（§ 100）、外患罪（§ 103）</li>
                            <li>• <strong>公務公正與威信：</strong>瀆職收賄（§ 121）、妨害公務（§ 135）</li>
                            <li>• <strong>司法權正當運作：</strong>脫逃罪（§ 161）、湮滅證據（§ 165）、偽證罪（§ 168）</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>

              <!-- 🐣 專屬小白秒懂專區 -->
              <div class="rounded-2xl p-5 sm:p-6 bg-gradient-to-br from-amber-50 via-orange-50/80 to-yellow-100 dark:from-[#2a1c0c] dark:via-[#221608] dark:to-[#171005] border-2 border-amber-400 dark:border-amber-500 border-l-[8px] border-l-amber-500 shadow-md shadow-amber-500/10 space-y-4">
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
                        刑法分則幾百條法條密密麻麻，到底該怎麼看懂它的目錄編排？
                      </h4>
                    </div>
                  </div>
                  <span class="text-xs font-bold text-amber-800 dark:text-amber-300 bg-amber-100 dark:bg-amber-900/60 px-2.5 py-1 rounded-lg border border-amber-300 dark:border-amber-700">
                    🎯 刑法族譜一秒看懂
                  </span>
                </div>

                <!-- 金句框 -->
                <div class="p-3.5 sm:p-4 rounded-xl bg-white dark:bg-slate-900 border-2 border-amber-300 dark:border-amber-600 shadow-xs">
                  <div class="text-[11px] font-black text-amber-600 dark:text-amber-400 uppercase tracking-wider mb-1">
                    📢 一句話大白話翻譯
                  </div>
                  <p class="text-sm sm:text-base font-black text-slate-900 dark:text-white leading-relaxed">
                    👉「<span class="text-amber-600 dark:text-amber-400 underline decoration-amber-400 underline-offset-4">把刑法想像成三大同心圓：核心是『個人（命根子與錢包）』，外圈是『社會（環境安全秩序）』，最外圈是『國家（總指揮塔運轉）』！</span>」
                  </p>
                </div>

                <!-- 生活比喻對照 -->
                <div class="p-4 rounded-xl bg-amber-100/60 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800/60 space-y-2 text-xs sm:text-[13px] text-slate-800 dark:text-slate-200 leading-relaxed">
                  <div class="font-black text-amber-900 dark:text-amber-200 flex items-center gap-1.5 text-sm">
                    <span>🎯</span>
                    <span>生活超有感比喻：【玩模擬城市遊戲（SimCity）的三層防護】</span>
                  </div>
                  <div class="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-1">
                    <div class="p-3 rounded-xl bg-white dark:bg-slate-900 border-2 border-blue-300 dark:border-blue-700 shadow-2xs space-y-1">
                      <span class="font-black text-blue-900 dark:text-blue-200 block text-xs sm:text-[13px]">1. 居民小人（個人法益）</span>
                      <p class="text-slate-800 dark:text-slate-200 text-xs font-medium leading-relaxed">
                        每個市民的血條（生命）、錢包（財產）、走路自由。有人被捅或被偷，刑法立刻出警。
                      </p>
                    </div>
                    <div class="p-3 rounded-xl bg-white dark:bg-slate-900 border-2 border-purple-300 dark:border-purple-700 shadow-2xs space-y-1">
                      <span class="font-black text-purple-900 dark:text-purple-200 block text-xs sm:text-[13px]">2. 城市道路水電（社會法益）</span>
                      <p class="text-slate-800 dark:text-slate-200 text-xs font-medium leading-relaxed">
                        不能有人在馬路上放火、偽造假鈔流通、在公共水塔下毒，否則整個社區全面癱瘓！
                      </p>
                    </div>
                    <div class="p-3 rounded-xl bg-white dark:bg-slate-900 border-2 border-emerald-300 dark:border-emerald-700 shadow-2xs space-y-1">
                      <span class="font-black text-emerald-900 dark:text-emerald-200 block text-xs sm:text-[13px]">3. 市政大廳與法院（國家法益）</span>
                      <p class="text-slate-800 dark:text-slate-200 text-xs font-medium leading-relaxed">
                        公務員不能收賄、法庭上不能作偽證、監獄不能放跑犯人，守護大腦指揮中樞正常運作！
                      </p>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </section>

          <!-- 六、法益三大功能與構成要件之解釋指導原則 -->
          <section id="sec-p0ch1-sec1-functions-three" class="space-y-6 pt-2">
            <div class="flex items-center gap-3">
              <span class="w-2 h-6 rounded-full bg-emerald-600"></span>
              <h3 class="text-lg sm:text-xl font-black text-slate-900 dark:text-white tracking-tight">
                六、法益三大功能與構成要件之解釋指導原則
              </h3>
            </div>

            <div class="p-6 rounded-3xl border border-slate-200 dark:border-white/[0.08] bg-white dark:bg-[#101623] shadow-sm space-y-6">
              
              <!-- 旗艦卡片 6：法益三大功能 -->
              <div class="p-6 rounded-2xl bg-gradient-to-br from-emerald-100 via-teal-50 to-indigo-100 dark:from-[#064e3b]/80 dark:via-[#0f172a] dark:to-[#1e1b4b]/70 border-2 border-emerald-400 dark:border-emerald-500/80 border-l-[8px] border-l-emerald-600 dark:border-l-emerald-400 shadow-lg shadow-emerald-500/15 space-y-5">
                
                <div class="flex items-center justify-between flex-wrap gap-2">
                  <div class="flex items-center gap-2.5">
                    <span class="text-2xl drop-shadow-sm">🧭</span>
                    <div>
                      <span class="font-black text-sm sm:text-base text-emerald-950 dark:text-emerald-100 tracking-wide">
                        法益三大功能與解釋指導原則（TRIA MUNERA BONI IURIDICI）
                      </span>
                      <span class="block text-[11px] font-mono font-bold text-emerald-800 dark:text-emerald-300 tracking-wider uppercase">
                        DIRECTORIA INTERPRETATIONIS · FUNDAMENTUM TYPICUM
                      </span>
                    </div>
                  </div>
                  <div class="flex items-center gap-2">
                    <span class="text-xs font-mono font-black px-3 py-1 rounded-lg bg-emerald-600 text-white shadow-sm border border-emerald-400">
                      教材第 2-2 頁 原文結論
                    </span>
                    <span class="text-xs font-mono font-black px-3 py-1 rounded-lg bg-amber-500 text-white shadow-sm border border-amber-300">
                      ★ 最高帝王指導原則
                    </span>
                  </div>
                </div>

                <!-- 教材第 2-2 頁 原文結論金句卡 -->
                <div class="p-4 sm:p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-emerald-400/80 dark:border-emerald-700/80 border-l-4 border-l-emerald-600 shadow-md space-y-2">
                  <div class="flex items-center justify-between text-xs font-mono border-b border-emerald-100 dark:border-slate-800 pb-2">
                    <span class="font-bold text-emerald-800 dark:text-emerald-300 flex items-center gap-1.5">
                      <span class="w-2 h-2 rounded-full bg-emerald-600 animate-pulse"></span>
                      法益最主要的核心功能
                    </span>
                    <span class="px-2 py-0.5 rounded bg-emerald-100 dark:bg-emerald-900/60 text-emerald-800 dark:text-emerald-200 font-bold text-[11px]">
                      ★ 避免本末倒置
                    </span>
                  </div>
                  <p class="text-base sm:text-lg md:text-xl font-black text-emerald-950 dark:text-emerald-50 leading-relaxed font-serif tracking-wide py-1">
                    「由於構成要件該當性是在表彰法益侵害，因此法益最主要的功能是：作為構成要件解釋的指導原則。職是之故，構成要件的解釋必須緊扣所保護的法益，不能本末倒置，否則將失卻立法的真正意旨。」
                  </p>
                </div>

                <!-- 三大功能旗艦展示網格 -->
                <div class="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                  <div class="p-4 sm:p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-slate-300 dark:border-slate-700 border-l-4 border-l-slate-600 shadow-md space-y-2">
                    <div class="flex items-center justify-between">
                      <span class="font-black text-sm text-slate-900 dark:text-white flex items-center gap-1.5">
                        <span class="w-6 h-6 rounded-lg bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-slate-200 flex items-center justify-center font-mono font-bold text-xs">1</span>
                        <span>要件設立基礎</span>
                      </span>
                      <span class="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">立法藍圖</span>
                    </div>
                    <p class="text-slate-800 dark:text-slate-200 font-medium leading-relaxed">
                      立法者制定條文時，唯有先確立想保護什麼法益，才能具體雕琢犯罪行為該當哪些客觀要件。
                    </p>
                  </div>

                  <div class="p-4 sm:p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-indigo-300 dark:border-indigo-700 border-l-4 border-l-indigo-600 shadow-md space-y-2">
                    <div class="flex items-center justify-between">
                      <span class="font-black text-sm text-indigo-900 dark:text-indigo-200 flex items-center gap-1.5">
                        <span class="w-6 h-6 rounded-lg bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 flex items-center justify-center font-mono font-bold text-xs">2</span>
                        <span>競合類型判準</span>
                      </span>
                      <span class="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-indigo-100 dark:bg-indigo-900/60 text-indigo-800 dark:text-indigo-200">罪數裁判</span>
                    </div>
                    <p class="text-slate-800 dark:text-slate-200 font-medium leading-relaxed">
                      判斷一行為侵害單一或數個法益、侵害專屬人格或非專屬財產法益，是論以想像競合或實質競合的唯一指針。
                    </p>
                  </div>

                  <div class="p-4 sm:p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-amber-400 dark:border-amber-600 border-l-4 border-l-amber-500 shadow-md space-y-2">
                    <div class="flex items-center justify-between">
                      <span class="font-black text-sm text-amber-900 dark:text-amber-200 flex items-center gap-1.5">
                        <span class="w-6 h-6 rounded-lg bg-amber-500 text-white flex items-center justify-center font-mono font-bold text-xs">3</span>
                        <span>要件解釋指導原則</span>
                      </span>
                      <span class="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-amber-100 dark:bg-amber-900/60 text-amber-800 dark:text-amber-200 font-bold">最核心主要功能！</span>
                    </div>
                    <p class="text-slate-800 dark:text-slate-200 font-medium leading-relaxed">
                      司法實務解釋模糊條文字眼時，<strong>法益是唯一不變的定海神針</strong>！任何解釋結論絕不可背離法益保護目的！
                    </p>
                  </div>
                </div>

              </div>

              <!-- 🐣 專屬小白秒懂專區 -->
              <div class="rounded-2xl p-5 sm:p-6 bg-gradient-to-br from-amber-50 via-orange-50/80 to-yellow-100 dark:from-[#2a1c0c] dark:via-[#221608] dark:to-[#171005] border-2 border-amber-400 dark:border-amber-500 border-l-[8px] border-l-amber-500 shadow-md shadow-amber-500/10 space-y-4">
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
                        為什麼法官解釋法條不能「只看字面死背」，一定要緊扣背後的法益？
                      </h4>
                    </div>
                  </div>
                  <span class="text-xs font-bold text-amber-800 dark:text-amber-300 bg-amber-100 dark:bg-amber-900/60 px-2.5 py-1 rounded-lg border border-amber-300 dark:border-amber-700">
                    🎯 定海神針原理
                  </span>
                </div>

                <!-- 金句框 -->
                <div class="p-3.5 sm:p-4 rounded-xl bg-white dark:bg-slate-900 border-2 border-amber-300 dark:border-amber-600 shadow-xs">
                  <div class="text-[11px] font-black text-amber-600 dark:text-amber-400 uppercase tracking-wider mb-1">
                    📢 一句話大白話翻譯
                  </div>
                  <p class="text-sm sm:text-base font-black text-slate-900 dark:text-white leading-relaxed">
                    👉「<span class="text-amber-600 dark:text-amber-400 underline decoration-amber-400 underline-offset-4">法益就是法條的『靈魂』！死摳文字容易抓錯人或放跑壞蛋；只有抓住背後的法益，法律才不會變成笑話！</span>」
                  </p>
                </div>

                <!-- 生活比喻對照 -->
                <div class="p-4 rounded-xl bg-amber-100/60 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800/60 space-y-2 text-xs sm:text-[13px] text-slate-800 dark:text-slate-200 leading-relaxed">
                  <div class="font-black text-amber-900 dark:text-amber-200 flex items-center gap-1.5 text-sm">
                    <span>🎯</span>
                    <span>生活超有感比喻：【媽媽出門交代：幫我看著爐子上的開水！】</span>
                  </div>
                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                    <div class="p-3 rounded-xl bg-white dark:bg-slate-900 border-2 border-rose-300 dark:border-rose-700 shadow-2xs space-y-1">
                      <span class="font-black text-rose-700 dark:text-rose-300 block text-xs sm:text-[13px]">❌ 呆板死扣文字（沒有法益靈魂）</span>
                      <p class="text-slate-800 dark:text-slate-200 text-xs sm:text-[13px] font-medium leading-relaxed">
                        水滾了溢出來澆滅瓦斯、廚房差點失火，你眼睛卻一直睜大「看著」它。媽媽回來罵你，你說：「你叫我『看著』啊，我一秒都沒眨眼看著呢！」這就叫死扣字眼！
                      </p>
                    </div>
                    <div class="p-3 rounded-xl bg-white dark:bg-slate-900 border-2 border-emerald-300 dark:border-emerald-700 shadow-2xs space-y-1">
                      <span class="font-black text-emerald-800 dark:text-emerald-300 block text-xs sm:text-[13px]">⭕ 緊扣法益目的（保護人身安全與廚房）</span>
                      <p class="text-slate-800 dark:text-slate-200 text-xs sm:text-[13px] font-medium leading-relaxed">
                        你深知這句話背後是要「保護廚房不要燒掉」，所以水一滾你就主動關瓦斯！這就叫做<strong>「用保護法益來指導條文解釋」</strong>！
                      </p>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </section>

          <!-- 七、實例演練【案例 1-1】：剪髮報復案——身體法益保護範疇爭議 -->
          <section id="sec-p0ch1-sec1-case-1-1" class="space-y-6 pt-2">
            <div class="flex items-center gap-3">
              <span class="w-2 h-6 rounded-full bg-rose-600"></span>
              <h3 class="text-lg sm:text-xl font-black text-slate-900 dark:text-white tracking-tight">
                七、實例演練【案例 1-1】：剪髮報復案——身體法益保護範疇爭議（§ 277 Ⅰ）
              </h3>
            </div>

            <!-- 案例卡片 0-1-1 -->
            <div id="case-card-0-1-1" data-case="0-1-1" class="case-card p-6 rounded-3xl border border-slate-200 dark:border-white/[0.08] bg-white dark:bg-[#101623] shadow-sm space-y-6">
              
              <!-- 旗艦卡片 7：剪髮案爭端本體 -->
              <div class="p-6 rounded-2xl bg-gradient-to-br from-rose-100 via-pink-50 to-indigo-50 dark:from-[#4c0519]/70 dark:via-[#1e1b4b]/60 dark:to-[#0f172a] border-2 border-rose-400 dark:border-rose-500/80 border-l-[8px] border-l-rose-600 dark:border-l-rose-400 shadow-lg shadow-rose-500/15 space-y-5">
                
                <div class="flex items-center justify-between flex-wrap gap-2">
                  <div class="flex items-center gap-2.5">
                    <span class="text-2xl drop-shadow-sm">✂️</span>
                    <div>
                      <span class="font-black text-sm sm:text-base text-rose-950 dark:text-rose-100 tracking-wide">
                        案例 1-1 剪髮報復案（身體法益保護範疇爭議）
                      </span>
                      <span class="block text-[11px] font-mono font-bold text-rose-700 dark:text-rose-300 tracking-wider uppercase">
                        DE LAESIONE CORPOREA CAPITORUM · CORPUS ET INTEGRITAS
                      </span>
                    </div>
                  </div>
                  <div class="flex items-center gap-2">
                    <span data-statute="277" class="text-xs font-mono font-black px-3 py-1 rounded-lg bg-rose-600 hover:bg-rose-700 text-white shadow-sm border border-rose-400 cursor-pointer transition-transform hover:scale-105" title="點擊查看刑法第 277 條全文">
                      <span>§</span> 刑法第 277 條第 1 項
                    </span>
                    <span class="text-xs font-mono font-black px-3 py-1 rounded-lg bg-amber-500 text-white shadow-sm border border-amber-300">
                      教材第 2-2 ～ 2-3 頁
                    </span>
                  </div>
                </div>

                <!-- 案件事實旗艦卡 -->
                <div class="p-4 sm:p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-rose-400/80 dark:border-rose-700/80 border-l-4 border-l-rose-600 shadow-md space-y-2">
                  <div class="flex items-center justify-between text-xs font-mono border-b border-rose-100 dark:border-slate-800 pb-2">
                    <span class="font-bold text-rose-800 dark:text-rose-300 flex items-center gap-1.5">
                      <span class="w-2 h-2 rounded-full bg-rose-600 animate-pulse"></span>
                      案件事實（教材第 2-2 頁 原文）
                    </span>
                    <span class="px-2 py-0.5 rounded bg-rose-100 dark:bg-rose-900/60 text-rose-800 dark:text-rose-200 font-bold text-[11px]">
                      經典考題原型
                    </span>
                  </div>
                  <p class="text-base sm:text-lg font-black text-rose-950 dark:text-rose-50 leading-relaxed font-serif tracking-wide py-1">
                    「甲為了報復乙女移情別戀，於是趁乙熟睡時將乙飄逸的長髮剪掉。」
                  </p>
                  <p class="text-xs sm:text-sm text-slate-800 dark:text-slate-100 font-medium leading-relaxed pt-1">
                    <span class="font-bold text-rose-700 dark:text-rose-300">❓ 核心問題意識：</span>甲趁乙熟睡剪斷其長髮，並未見血，亦未造成頭皮發炎，究竟是否該當刑法第 277 條第 1 項之「傷害人之身體或健康」？
                  </p>
                </div>

                <!-- 兩大說法深度對陣 -->
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                  <!-- 實務見解 -->
                  <div class="p-4 sm:p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-slate-300 dark:border-slate-700 border-l-4 border-l-slate-600 shadow-md space-y-2.5">
                    <div class="flex items-center justify-between">
                      <span class="font-black text-sm text-slate-900 dark:text-white flex items-center gap-1.5">
                        <span class="px-1.5 py-0.5 rounded bg-slate-200 dark:bg-slate-800 text-[11px] font-mono">說一</span>
                        <span>生理機能障礙說</span>
                      </span>
                      <span class="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-blue-100 dark:bg-blue-900/60 text-blue-800 dark:text-blue-300">早期實務</span>
                    </div>
                    <p class="text-slate-800 dark:text-slate-200 font-medium leading-relaxed">
                      對身體法益之侵害，限於<strong>「使人身之生理機能發生障礙，或使健康狀態產生不良變更者」</strong>，方屬傷害。
                    </p>
                    <div class="p-3 rounded-lg bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 space-y-1">
                      <span class="font-black text-slate-900 dark:text-white block">⚖️ 案情涵攝：</span>
                      <p class="text-slate-700 dark:text-slate-300 leading-relaxed">
                        頭髮為角質層無痛覺細胞，剪斷後頭皮血液呼吸無礙，日後亦會自然再生，故<strong class="text-rose-600 font-black">不構成普通傷害罪</strong>（僅可能構成民事侵權）。
                      </p>
                    </div>
                  </div>

                  <!-- 學說通說 -->
                  <div class="p-4 sm:p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-indigo-400 dark:border-indigo-600 border-l-4 border-l-indigo-600 shadow-md space-y-2.5">
                    <div class="flex items-center justify-between">
                      <span class="font-black text-sm text-indigo-900 dark:text-indigo-200 flex items-center gap-1.5">
                        <span class="px-1.5 py-0.5 rounded bg-indigo-200 dark:bg-indigo-950 text-[11px] font-mono">說二</span>
                        <span>身體完整性侵害說</span>
                      </span>
                      <span class="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-emerald-100 dark:bg-emerald-900/60 text-emerald-800 dark:text-emerald-300">學說通說 ⭐</span>
                    </div>
                    <p class="text-slate-800 dark:text-slate-200 font-medium leading-relaxed">
                      站在外觀物理變更與人身尊嚴角度，<strong>「凡有客觀侵害人體外部完整性者，即破壞身體法益」</strong>。
                    </p>
                    <div class="p-3 rounded-lg bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-900 space-y-1">
                      <span class="font-black text-indigo-900 dark:text-indigo-200 block">⚖️ 案情涵攝：</span>
                      <p class="text-indigo-950 dark:text-indigo-200 leading-relaxed font-medium">
                        頭髮係個人外表尊嚴與身體外觀完整之不可分割組成。乘人不備恣意剪斷，破壞身體完整性，<strong class="text-emerald-700 dark:text-emerald-400 font-black">成立刑法第 277 條第 1 項傷害罪</strong>！
                      </p>
                    </div>
                  </div>
                </div>

              </div>

              <!-- 🐣 專屬小白秒懂專區 -->
              <div class="rounded-2xl p-5 sm:p-6 bg-gradient-to-br from-amber-50 via-orange-50/80 to-yellow-100 dark:from-[#2a1c0c] dark:via-[#221608] dark:to-[#171005] border-2 border-amber-400 dark:border-amber-500 border-l-[8px] border-l-amber-500 shadow-md shadow-amber-500/10 space-y-4">
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
                        趁女生睡覺把留了五年的長髮剪成狗啃平頭，沒流一滴血，到底算不算傷害罪？
                      </h4>
                    </div>
                  </div>
                  <span class="text-xs font-bold text-amber-800 dark:text-amber-300 bg-amber-100 dark:bg-amber-900/60 px-2.5 py-1 rounded-lg border border-amber-300 dark:border-amber-700">
                    🎯 案例 1-1 大解密
                  </span>
                </div>

                <!-- 金句框 -->
                <div class="p-3.5 sm:p-4 rounded-xl bg-white dark:bg-slate-900 border-2 border-amber-300 dark:border-amber-600 shadow-xs">
                  <div class="text-[11px] font-black text-amber-600 dark:text-amber-400 uppercase tracking-wider mb-1">
                    📢 一句話大白話翻譯
                  </div>
                  <p class="text-sm sm:text-base font-black text-slate-900 dark:text-white leading-relaxed">
                    👉「<span class="text-amber-600 dark:text-amber-400 underline decoration-amber-400 underline-offset-4">身體不是只有『能跑能跳』才算完整！把女生的秀髮剪禿破壞外觀與尊嚴，通說認為這就是不折不扣的傷害！</span>」
                  </p>
                </div>

                <!-- 生活比喻對照 -->
                <div class="p-4 rounded-xl bg-amber-100/60 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800/60 space-y-2 text-xs sm:text-[13px] text-slate-800 dark:text-slate-200 leading-relaxed">
                  <div class="font-black text-amber-900 dark:text-amber-200 flex items-center gap-1.5 text-sm">
                    <span>🎯</span>
                    <span>生活超有感比喻：【修剪盆栽枯枝 vs 跑進別人家把珍貴櫻花樹砍光】</span>
                  </div>
                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                    <div class="p-3 rounded-xl bg-white dark:bg-slate-900 border-2 border-slate-300 dark:border-slate-700 shadow-2xs space-y-1">
                      <span class="font-black text-slate-900 dark:text-white block text-xs sm:text-[13px]">說一實務思路（機械維修思維）：</span>
                      <p class="text-slate-800 dark:text-slate-200 text-xs sm:text-[13px] font-medium leading-relaxed">
                        「又沒流血、頭皮又沒爛掉，頭髮過半年還會長出來嘛，怎麼能算傷害？」——這就是過度限縮在肉體生理機能的狹隘思維。
                      </p>
                    </div>
                    <div class="p-3 rounded-xl bg-white dark:bg-slate-900 border-2 border-indigo-300 dark:border-indigo-700 shadow-2xs space-y-1">
                      <span class="font-black text-indigo-900 dark:text-indigo-200 block text-xs sm:text-[13px]">說二通說思路（整全人格尊嚴思維）：</span>
                      <p class="text-slate-800 dark:text-slate-200 text-xs sm:text-[13px] font-medium leading-relaxed">
                        「頭髮是身體的一部分，未經同意剪掉直接毀掉外表完整性，甚至造成嚴重心理創傷，這當然是傷害身體法益！」
                      </p>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </section>

          <!-- 八、實例演練【案例 1-2】：黑吃黑皮夾案——竊盜罪保護法益爭議 -->
          <section id="sec-p0ch1-sec1-case-1-2" class="space-y-6 pt-2">
            <div class="flex items-center gap-3">
              <span class="w-2 h-6 rounded-full bg-amber-600"></span>
              <h3 class="text-lg sm:text-xl font-black text-slate-900 dark:text-white tracking-tight">
                八、實例演練【案例 1-2】：黑吃黑皮夾案——竊盜罪保護法益爭議（§ 320 Ⅰ）
              </h3>
            </div>

            <!-- 案例卡片 0-1-2 -->
            <div id="case-card-0-1-2" data-case="0-1-2" class="case-card p-6 rounded-3xl border border-slate-200 dark:border-white/[0.08] bg-white dark:bg-[#101623] shadow-sm space-y-6">
              
              <!-- 旗艦卡片 8：黑吃黑案 -->
              <div class="p-6 rounded-2xl bg-gradient-to-br from-amber-100 via-yellow-50 to-orange-100 dark:from-[#451a03]/70 dark:via-[#1e1b4b]/60 dark:to-[#0f172a] border-2 border-amber-400 dark:border-amber-500/80 border-l-[8px] border-l-amber-600 dark:border-l-amber-400 shadow-lg shadow-amber-500/15 space-y-5">
                
                <div class="flex items-center justify-between flex-wrap gap-2">
                  <div class="flex items-center gap-2.5">
                    <span class="text-2xl drop-shadow-sm">👛</span>
                    <div>
                      <span class="font-black text-sm sm:text-base text-amber-950 dark:text-amber-100 tracking-wide">
                        案例 1-2 黑吃黑皮夾案（竊盜罪保護法益爭議）
                      </span>
                      <span class="block text-[11px] font-mono font-bold text-amber-700 dark:text-amber-300 tracking-wider uppercase">
                        DE FURTO ET POSSESSIONE ILLEGITIMA · PROPRIETAS VS POSSESSIO
                      </span>
                    </div>
                  </div>
                  <div class="flex items-center gap-2">
                    <span data-statute="320" class="text-xs font-mono font-black px-3 py-1 rounded-lg bg-amber-600 hover:bg-amber-700 text-white shadow-sm border border-amber-400 cursor-pointer transition-transform hover:scale-105" title="點擊查看刑法第 320 條全文">
                      <span>§</span> 刑法第 320 條第 1 項
                    </span>
                    <span class="text-xs font-mono font-black px-3 py-1 rounded-lg bg-indigo-600 text-white shadow-sm border border-indigo-400">
                      教材第 2-3 頁
                    </span>
                  </div>
                </div>

                <!-- 案件事實旗艦卡 -->
                <div class="p-4 sm:p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-amber-400/80 dark:border-amber-700/80 border-l-4 border-l-amber-600 shadow-md space-y-2">
                  <div class="flex items-center justify-between text-xs font-mono border-b border-amber-100 dark:border-slate-800 pb-2">
                    <span class="font-bold text-amber-800 dark:text-amber-300 flex items-center gap-1.5">
                      <span class="w-2 h-2 rounded-full bg-amber-600 animate-pulse"></span>
                      案件事實（教材第 2-3 頁 原文）
                    </span>
                    <span class="px-2 py-0.5 rounded bg-amber-100 dark:bg-amber-900/60 text-amber-800 dark:text-amber-200 font-bold text-[11px]">
                      刑總分則聯動指標題
                    </span>
                  </div>
                  <p class="text-base sm:text-lg font-black text-amber-950 dark:text-amber-50 leading-relaxed font-serif tracking-wide py-1">
                    「甲自他人口袋中偷走皮夾一個，正當返家途中沾沾自喜之際，皮夾又被另一名竊賊乙偷走。」
                  </p>
                  <p class="text-xs sm:text-sm text-slate-800 dark:text-slate-100 font-medium leading-relaxed pt-1">
                    <span class="font-bold text-amber-700 dark:text-amber-300">❓ 核心問題意識：</span>乙偷走小偷甲所竊得之皮夾（黑吃黑），乙對甲到底成不成立刑法第 320 條第 1 項之竊盜罪？竊盜罪保護的法益究竟是「所有權」還是「持有」？
                  </p>
                </div>

                <!-- 三說鼎立三欄對照網格 -->
                <div class="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                  <!-- 說一：所有權說 -->
                  <div class="p-4 sm:p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-slate-300 dark:border-slate-700 border-l-4 border-l-slate-600 shadow-md space-y-2.5">
                    <div class="flex items-center justify-between">
                      <span class="font-black text-sm text-slate-900 dark:text-white flex items-center gap-1.5">
                        <span class="px-1.5 py-0.5 rounded bg-slate-200 dark:bg-slate-800 text-[11px] font-mono">說一</span>
                        <span>所有權說</span>
                      </span>
                      <span class="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">黃榮堅師說</span>
                    </div>
                    <p class="text-slate-800 dark:text-slate-200 font-medium leading-relaxed">
                      竊盜罪不保護單純的持有，而是保護所有人基於民法規範而在事實上所享有的利益。否則將使不法持有人地位凌駕於所有人之上。
                    </p>
                    <div class="p-2.5 rounded-lg bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-bold">
                      ⚖️ 結論：甲非所有人，乙對甲<span class="text-rose-600 font-black">不構成竊盜罪</span>。
                    </div>
                  </div>

                  <!-- 說二：持有說 -->
                  <div class="p-4 sm:p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-blue-400 dark:border-blue-600 border-l-4 border-l-blue-600 shadow-md space-y-2.5">
                    <div class="flex items-center justify-between">
                      <span class="font-black text-sm text-blue-900 dark:text-blue-200 flex items-center gap-1.5">
                        <span class="px-1.5 py-0.5 rounded bg-blue-100 dark:bg-blue-950 text-[11px] font-mono">說二</span>
                        <span>持有說</span>
                      </span>
                      <span class="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-blue-100 dark:bg-blue-900/60 text-blue-800 dark:text-blue-200">甘添貴師說</span>
                    </div>
                    <p class="text-slate-800 dark:text-slate-200 font-medium leading-relaxed">
                      竊盜罪保護的是財物持有利益本身。現代社會租賃利用普遍，且持有來源外人難以查驗，全面保護持有始能維護平穩支配秩序。
                    </p>
                    <div class="p-2.5 rounded-lg bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-900 text-blue-950 dark:text-blue-200 font-bold">
                      ⚖️ 結論：乙侵害甲事實支配，<span class="text-blue-600 font-black">構成竊盜罪</span>。
                    </div>
                  </div>

                  <!-- 說三：所有權及持有說 -->
                  <div class="p-4 sm:p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-emerald-400 dark:border-emerald-600 border-l-4 border-l-emerald-600 shadow-md space-y-2.5">
                    <div class="flex items-center justify-between">
                      <span class="font-black text-sm text-emerald-900 dark:text-emerald-200 flex items-center gap-1.5">
                        <span class="px-1.5 py-0.5 rounded bg-emerald-100 dark:bg-emerald-950 text-[11px] font-mono">說三</span>
                        <span>所有權及持有說</span>
                      </span>
                      <span class="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-emerald-100 dark:bg-emerald-900/60 text-emerald-800 dark:text-emerald-200 font-bold">通說 ⭐</span>
                    </div>
                    <p class="text-slate-800 dark:text-slate-200 font-medium leading-relaxed">
                      竊盜罪法益包含物之所有權關係，以及<strong>事實持有人對物之平穩支配關係</strong>。縱屬違法持有亦受刑法保護，嚴禁任何私力侵奪！
                    </p>
                    <div class="p-2.5 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-900 text-emerald-950 dark:text-emerald-200 font-bold">
                      ⚖️ 結論：禁止私力奪取，乙<span class="text-emerald-700 dark:text-emerald-400 font-black">成立竊盜罪</span>！
                    </div>
                  </div>
                </div>

              </div>

              <!-- 🐣 專屬小白秒懂專區 -->
              <div class="rounded-2xl p-5 sm:p-6 bg-gradient-to-br from-amber-50 via-orange-50/80 to-yellow-100 dark:from-[#2a1c0c] dark:via-[#221608] dark:to-[#171005] border-2 border-amber-400 dark:border-amber-500 border-l-[8px] border-l-amber-500 shadow-md shadow-amber-500/10 space-y-4">
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
                        小偷偷小偷剛偷到手的贓物，小偷有資格喊抓賊嗎？法律憑什麼保護小偷的「違法持有」？
                      </h4>
                    </div>
                  </div>
                  <span class="text-xs font-bold text-amber-800 dark:text-amber-300 bg-amber-100 dark:bg-amber-900/60 px-2.5 py-1 rounded-lg border border-amber-300 dark:border-amber-700">
                    🎯 黑吃黑大白話
                  </span>
                </div>

                <!-- 金句框 -->
                <div class="p-3.5 sm:p-4 rounded-xl bg-white dark:bg-slate-900 border-2 border-amber-300 dark:border-amber-600 shadow-xs">
                  <div class="text-[11px] font-black text-amber-600 dark:text-amber-400 uppercase tracking-wider mb-1">
                    📢 一句話大白話翻譯
                  </div>
                  <p class="text-sm sm:text-base font-black text-slate-900 dark:text-white leading-relaxed">
                    👉「<span class="text-amber-600 dark:text-amber-400 underline decoration-amber-400 underline-offset-4">法律保護小偷手上的贓物，絕對不是在挺小偷，而是為了防止大街瞬間淪為人人互搶的『海盜黑吃黑大亂鬥』！</span>」
                  </p>
                </div>

                <!-- 生活比喻對照 -->
                <div class="p-4 rounded-xl bg-amber-100/60 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800/60 space-y-2 text-xs sm:text-[13px] text-slate-800 dark:text-slate-200 leading-relaxed">
                  <div class="font-black text-amber-900 dark:text-amber-200 flex items-center gap-1.5 text-sm">
                    <span>🎯</span>
                    <span>生活超有感比喻：【警察沒收贓物 vs 隔壁流氓路過黑吃黑搶走】</span>
                  </div>
                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                    <div class="p-3 rounded-xl bg-white dark:bg-slate-900 border-2 border-rose-300 dark:border-rose-700 shadow-2xs space-y-1">
                      <span class="font-black text-rose-700 dark:text-rose-300 block text-xs sm:text-[13px]">❌ 如果採取「純所有權說」（縱容黑吃黑）：</span>
                      <p class="text-slate-800 dark:text-slate-200 text-xs sm:text-[13px] font-medium leading-relaxed">
                        只要皮夾不是你的，別人隨便從你口袋抽走都不算犯罪！大街上看到小偷大家隨便搶，整個社會秩序直接崩潰變成叢林社會！
                      </p>
                    </div>
                    <div class="p-3 rounded-xl bg-white dark:bg-slate-900 border-2 border-emerald-300 dark:border-emerald-700 shadow-2xs space-y-1">
                      <span class="font-black text-emerald-800 dark:text-emerald-300 block text-xs sm:text-[13px]">⭕ 通說「所有權及持有說」（維持公權力獨佔）：</span>
                      <p class="text-slate-800 dark:text-slate-200 text-xs sm:text-[13px] font-medium leading-relaxed">
                        不管皮夾是誰的，任何私人都<strong>不准擅自動手搶</strong>！乙偷走就是犯罪；至於甲偷東西的罪，交給檢察官法官來制裁追回！
                      </p>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </section>

          <!-- 九、實例演練【案例 1-3】：肇事逃逸罪要件解釋爭議 -->
          <section id="sec-p0ch1-sec1-case-1-3" class="space-y-6 pt-2">
            <div class="flex items-center gap-3">
              <span class="w-2 h-6 rounded-full bg-cyan-600"></span>
              <h3 class="text-lg sm:text-xl font-black text-slate-900 dark:text-white tracking-tight">
                九、實例演練【案例 1-3】：肇事逃逸罪要件解釋爭議（§ 185-4、致人死傷、肇事與逃逸）
              </h3>
            </div>

            <!-- 案例卡片 0-1-3 -->
            <div id="case-card-0-1-3" data-case="0-1-3" class="case-card p-6 rounded-3xl border border-slate-200 dark:border-white/[0.08] bg-white dark:bg-[#101623] shadow-sm space-y-6">
              
              <!-- 旗艦卡片 9：肇事逃逸罪要件爭議 -->
              <div class="p-6 rounded-2xl bg-gradient-to-br from-cyan-100 via-sky-50 to-indigo-100 dark:from-[#083344]/80 dark:via-[#0c4a6e]/70 dark:to-[#1e1b4b]/60 border-2 border-cyan-400 dark:border-cyan-500/80 border-l-[8px] border-l-cyan-600 dark:border-l-cyan-400 shadow-lg shadow-cyan-500/15 space-y-5">
                
                <div class="flex items-center justify-between flex-wrap gap-2">
                  <div class="flex items-center gap-2.5">
                    <span class="text-2xl drop-shadow-sm">🚗</span>
                    <div>
                      <span class="font-black text-sm sm:text-base text-cyan-950 dark:text-cyan-100 tracking-wide">
                        案例 1-3 肇事逃逸罪要件解釋爭議（§ 185-4）
                      </span>
                      <span class="block text-[11px] font-mono font-bold text-cyan-700 dark:text-cyan-300 tracking-wider uppercase">
                        DE DELICTO FUGAE POST ACCIDENTUM · SCHUTZGUT ET ELEMENTA
                      </span>
                    </div>
                  </div>
                  <div class="flex items-center gap-2">
                    <span data-statute="185-4" class="text-xs font-mono font-black px-3 py-1 rounded-lg bg-cyan-600 hover:bg-cyan-700 text-white shadow-sm border border-cyan-400 cursor-pointer transition-transform hover:scale-105" title="點擊查看刑法第 185-4 條全文">
                      <span>§</span> 刑法第 185-4 條
                    </span>
                    <span class="text-xs font-mono font-black px-3 py-1 rounded-lg bg-indigo-600 text-white shadow-sm border border-indigo-400">
                      教材第 2-3 ～ 2-4 頁
                    </span>
                  </div>
                </div>

                <!-- 三大案件事實旗艦網格 -->
                <div class="grid grid-cols-1 md:grid-cols-3 gap-3.5 text-xs">
                  <div class="p-4 rounded-xl bg-white dark:bg-slate-900 border-2 border-cyan-300 dark:border-cyan-700 border-l-4 border-l-cyan-600 shadow-xs space-y-2">
                    <div class="flex items-center justify-between">
                      <span class="font-black text-cyan-900 dark:text-cyan-200">子題 ㈠ 僅車損未傷人逃逸</span>
                      <span class="font-mono text-[10px] font-bold px-1.5 py-0.5 rounded bg-cyan-100 dark:bg-cyan-950 text-cyan-700 dark:text-cyan-300">致人死傷要件</span>
                    </div>
                    <p class="text-slate-800 dark:text-slate-200 leading-relaxed font-serif">
                      「甲駕車不慎與對向乙車擦撞，甲加速逃逸。乙車烤漆擦傷但無任何人員死傷。」
                    </p>
                    <span class="block text-[11px] font-bold text-cyan-800 dark:text-cyan-300">❓ 爭點：無人傷亡，是否構成肇逃罪？</span>
                  </div>

                  <div class="p-4 rounded-xl bg-white dark:bg-slate-900 border-2 border-indigo-300 dark:border-indigo-700 border-l-4 border-l-indigo-600 shadow-xs space-y-2">
                    <div class="flex items-center justify-between">
                      <span class="font-black text-indigo-900 dark:text-indigo-200">子題 ㈡ 無過失遭撞逕行離去</span>
                      <span class="font-mono text-[10px] font-bold px-1.5 py-0.5 rounded bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300">肇事要件解讀</span>
                    </div>
                    <p class="text-slate-800 dark:text-slate-200 leading-relaxed font-serif">
                      「甲在無過失狀態下遭闖紅燈之乙猛烈追撞，乙重傷流血，甲自認沒錯逕行開走。」
                    </p>
                    <span class="block text-[11px] font-bold text-indigo-800 dark:text-indigo-300">❓ 爭點：「肇事」是否包含無過失事故？</span>
                  </div>

                  <div class="p-4 rounded-xl bg-white dark:bg-slate-900 border-2 border-amber-300 dark:border-amber-700 border-l-4 border-l-amber-500 shadow-xs space-y-2">
                    <div class="flex items-center justify-between">
                      <span class="font-black text-amber-900 dark:text-amber-200">子題 ㈢ 移置叫車未留名離去</span>
                      <span class="font-mono text-[10px] font-bold px-1.5 py-0.5 rounded bg-amber-100 dark:bg-amber-950 text-amber-700 dark:text-amber-300">逃逸要件解讀</span>
                    </div>
                    <p class="text-slate-800 dark:text-slate-200 leading-relaxed font-serif">
                      「甲撞傷乙，將其移至路旁並電召救護車送醫，甲見醫護抵達後未留個資離去。」
                    </p>
                    <span class="block text-[11px] font-bold text-amber-800 dark:text-amber-300">❓ 爭點：生命已救助但隱匿身分算逃逸嗎？</span>
                  </div>
                </div>

                <!-- 三大學說交鋒網格 -->
                <div class="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs pt-1">
                  <!-- 說一 -->
                  <div class="p-4 rounded-xl bg-white dark:bg-slate-900 border-2 border-slate-300 dark:border-slate-700 border-l-4 border-l-slate-600 shadow-md space-y-2">
                    <span class="font-black text-sm text-slate-900 dark:text-white block">① 生命身體安全保障說（早期實務）</span>
                    <p class="text-slate-700 dark:text-slate-300 leading-relaxed">
                      本罪為遺棄罪特別規定，旨在<strong>減少死傷</strong>。
                    </p>
                    <ul class="text-[11px] text-slate-700 dark:text-slate-300 space-y-1 pl-2 border-l border-slate-300 dark:border-slate-700">
                      <li>• 致人死傷：核心構成要件要素</li>
                      <li>• 肇事：限於「有過失」才負救助義務</li>
                      <li>• 逃逸：指「對生命身體不予救助」</li>
                    </ul>
                    <div class="p-2 rounded bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 font-bold text-[11px]">
                      ㈠無傷不罰 ㈡無過失不罰 ㈢已救助不罰
                    </div>
                  </div>

                  <!-- 說二 -->
                  <div class="p-4 rounded-xl bg-white dark:bg-slate-900 border-2 border-purple-300 dark:border-purple-700 border-l-4 border-l-purple-600 shadow-md space-y-2">
                    <span class="font-black text-sm text-purple-900 dark:text-purple-200 block">② 公共安全保障說（少數說）</span>
                    <p class="text-slate-700 dark:text-slate-300 leading-relaxed">
                      本罪列於公共危險罪章，旨在<strong>防止現場引發後續連環危險</strong>。
                    </p>
                    <ul class="text-[11px] text-slate-700 dark:text-slate-300 space-y-1 pl-2 border-l border-purple-300 dark:border-purple-700">
                      <li>• 致人死傷：立法錯誤贅文（應予刪除）</li>
                      <li>• 肇事：限於有過失引發危險現場</li>
                      <li>• 逃逸：指「未對現場公共危險妥善控管」</li>
                    </ul>
                    <div class="p-2 rounded bg-purple-50 dark:bg-purple-950/40 text-purple-900 dark:text-purple-300 font-bold text-[11px]">
                      ㈠碎片未清可能成立 ㈡不成立 ㈢未清現場可能成立
                    </div>
                  </div>

                  <!-- 說三 -->
                  <div class="p-4 rounded-xl bg-white dark:bg-slate-900 border-2 border-emerald-400 dark:border-emerald-600 border-l-4 border-l-emerald-600 shadow-md space-y-2">
                    <span class="font-black text-sm text-emerald-900 dark:text-emerald-200 block">③ 確認利益保障說（有力說 ⭐）</span>
                    <p class="text-slate-700 dark:text-slate-300 leading-relaxed">
                      本罪旨在解決<strong>肇事責任之釐清與賠償確認</strong>。
                    </p>
                    <ul class="text-[11px] text-slate-700 dark:text-slate-300 space-y-1 pl-2 border-l border-emerald-300 dark:border-emerald-700">
                      <li>• 致人死傷：限縮處罰門檻之「客觀處罰條件」</li>
                      <li>• 肇事：不限故意過失，發生事故即負確認義務</li>
                      <li>• 逃逸：逃避責任歸屬義務之隱匿離去</li>
                    </ul>
                    <div class="p-2 rounded bg-emerald-50 dark:bg-emerald-950/40 text-emerald-900 dark:text-emerald-300 font-bold text-[11px]">
                      ㈠欠處罰條件不成立 ㈡成立！ ㈢未留個資成立！
                    </div>
                  </div>
                </div>

                <!-- 深度對照矩陣表格 -->
                <div class="space-y-2 pt-2">
                  <div class="text-xs font-black text-cyan-950 dark:text-cyan-200 flex items-center gap-1.5">
                    <span>📊</span>
                    <span>三大保護法益學說全面對照矩陣（教材第 2-4 頁 原文解析）</span>
                  </div>
                  <div class="overflow-x-auto rounded-2xl border-2 border-slate-300 dark:border-slate-700 shadow-sm">
                    <table class="w-full text-left text-xs border-collapse min-w-[620px]">
                      <thead>
                        <tr class="bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white border-b-2 border-slate-300 dark:border-slate-700">
                          <th class="py-2.5 px-3 font-black w-1/5">比較項目</th>
                          <th class="py-2.5 px-3 font-black w-4/15 text-blue-700 dark:text-blue-300">① 生命身體安全說</th>
                          <th class="py-2.5 px-3 font-black w-4/15 text-purple-700 dark:text-purple-300">② 公共安全說</th>
                          <th class="py-2.5 px-3 font-black w-4/15 text-emerald-700 dark:text-emerald-300 bg-emerald-500/10">③ 確認利益說 ⭐</th>
                        </tr>
                      </thead>
                      <tbody class="divide-y divide-slate-200 dark:divide-slate-800 text-[11.5px] text-slate-800 dark:text-slate-200">
                        <tr>
                          <td class="py-2.5 px-3 font-black bg-slate-50 dark:bg-slate-900">保護法益核心</td>
                          <td class="py-2.5 px-3 font-medium">被害人生命、身體安全</td>
                          <td class="py-2.5 px-3 font-medium">不特定多數人交通安全</td>
                          <td class="py-2.5 px-3 font-black text-emerald-900 dark:text-emerald-300 bg-emerald-500/10">民事求償與責任歸屬確認利益</td>
                        </tr>
                        <tr>
                          <td class="py-2.5 px-3 font-black bg-slate-50 dark:bg-slate-900">致人死傷定位</td>
                          <td class="py-2.5 px-3 font-medium">構成要件要素（實質損害）</td>
                          <td class="py-2.5 px-3 font-medium">立法贅文／錯誤應刪除</td>
                          <td class="py-2.5 px-3 font-black text-emerald-900 dark:text-emerald-300 bg-emerald-500/10">客觀處罰條件（限縮刑罰門檻）</td>
                        </tr>
                        <tr>
                          <td class="py-2.5 px-3 font-black bg-slate-50 dark:bg-slate-900">肇事之理解</td>
                          <td class="py-2.5 px-3 font-medium">限過失致人死傷（救助義務）</td>
                          <td class="py-2.5 px-3 font-medium">限過失致生危險（控管義務）</td>
                          <td class="py-2.5 px-3 font-black text-emerald-900 dark:text-emerald-300 bg-emerald-500/10">不限過失（參與事故即有義務）</td>
                        </tr>
                        <tr>
                          <td class="py-2.5 px-3 font-black bg-slate-50 dark:bg-slate-900">逃逸之理解</td>
                          <td class="py-2.5 px-3 font-medium">不顧人命危險逕行離去</td>
                          <td class="py-2.5 px-3 font-medium">對現場危險不為排除控管</td>
                          <td class="py-2.5 px-3 font-black text-emerald-900 dark:text-emerald-300 bg-emerald-500/10">逃避責任歸屬義務之隱匿身分</td>
                        </tr>
                        <tr>
                          <td class="py-2.5 px-3 font-black bg-slate-50 dark:bg-slate-900">㈠ 純車損未傷人</td>
                          <td class="py-2.5 px-3 font-bold text-rose-600">❌ 不成立（無死傷）</td>
                          <td class="py-2.5 px-3 font-bold text-amber-600">⚠️ 現場混亂可能成立</td>
                          <td class="py-2.5 px-3 font-bold text-rose-600 bg-emerald-500/10">❌ 不成立（欠缺處罰條件）</td>
                        </tr>
                        <tr>
                          <td class="py-2.5 px-3 font-black bg-slate-50 dark:bg-slate-900">㈡ 無過失遭撞逕離</td>
                          <td class="py-2.5 px-3 font-bold text-rose-600">❌ 不成立（無過失非肇事）</td>
                          <td class="py-2.5 px-3 font-bold text-rose-600">❌ 不成立（無過失不負義務）</td>
                          <td class="py-2.5 px-3 font-black text-emerald-700 dark:text-emerald-400 bg-emerald-500/10">⭕ 成立（發生事故應留現場）</td>
                        </tr>
                        <tr>
                          <td class="py-2.5 px-3 font-black bg-slate-50 dark:bg-slate-900">㈢ 救助送醫未留名</td>
                          <td class="py-2.5 px-3 font-bold text-rose-600">❌ 不成立（危險已救助）</td>
                          <td class="py-2.5 px-3 font-bold text-amber-600">⚠️ 殘骸未清可能成立</td>
                          <td class="py-2.5 px-3 font-black text-emerald-700 dark:text-emerald-400 bg-emerald-500/10">⭕ 成立（隱匿身分逃避責任）</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <!-- 2026 現行法規範延伸（釋字第 777 號與 110 年最新修法） -->
                <div class="p-4 sm:p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-blue-300 dark:border-blue-700 space-y-2">
                  <div class="flex items-center justify-between">
                    <span class="font-black text-xs text-blue-900 dark:text-blue-200 flex items-center gap-2">
                      <span>💡</span>
                      <span>現行法規範重大修正（司法院釋字第 777 號 ➔ 110 年最新修正刑法第 185-4 條）</span>
                    </span>
                    <span class="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200">最新修法考點</span>
                  </div>
                  <p class="text-xs text-slate-800 dark:text-slate-100 font-medium leading-relaxed">
                    司法院釋字第 777 號宣告舊法「肇事」涵義不清違反法律明確性原則後，立法院於 110 年修正公布現行法：將要件修正為<strong>「發生交通事故」</strong>（不再拘泥於字面肇事）；並依傷情分級處罰：致人傷害者處六月以上五年以下；致人重傷或死亡者處一年以上七年以下。更於第 2 項明定<strong>「犯前項之罪，無過失者，減輕或免除其刑」</strong>，實質融和了「人身救助」與「責任確認利益」！
                  </p>
                </div>

              </div>

              <!-- 🐣 專屬小白秒懂專區 -->
              <div class="rounded-2xl p-5 sm:p-6 bg-gradient-to-br from-amber-50 via-orange-50/80 to-yellow-100 dark:from-[#2a1c0c] dark:via-[#221608] dark:to-[#171005] border-2 border-amber-400 dark:border-amber-500 border-l-[8px] border-l-amber-500 shadow-md shadow-amber-500/10 space-y-4">
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
                        我開車被闖紅燈機車撞，錯完全不在我，我幫他叫了救護車，為什麼不能拍拍屁股走人？
                      </h4>
                    </div>
                  </div>
                  <span class="text-xs font-bold text-amber-800 dark:text-amber-300 bg-amber-100 dark:bg-amber-900/60 px-2.5 py-1 rounded-lg border border-amber-300 dark:border-amber-700">
                    🎯 肇逃三大爭端白話解
                  </span>
                </div>

                <!-- 金句框 -->
                <div class="p-3.5 sm:p-4 rounded-xl bg-white dark:bg-slate-900 border-2 border-amber-300 dark:border-amber-600 shadow-xs">
                  <div class="text-[11px] font-black text-amber-600 dark:text-amber-400 uppercase tracking-wider mb-1">
                    📢 一句話大白話翻譯
                  </div>
                  <p class="text-sm sm:text-base font-black text-slate-900 dark:text-white leading-relaxed">
                    👉「<span class="text-amber-600 dark:text-amber-400 underline decoration-amber-400 underline-offset-4">只要你在車禍現場，你就是事故關係人！叫救護車保命是基本良知，留下來等警察量測現場、釐清責任，才是法律的鐵律！</span>」
                  </p>
                </div>

                <!-- 生活比喻對照 -->
                <div class="p-4 rounded-xl bg-amber-100/60 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800/60 space-y-2 text-xs sm:text-[13px] text-slate-800 dark:text-slate-200 leading-relaxed">
                  <div class="font-black text-amber-900 dark:text-amber-200 flex items-center gap-1.5 text-sm">
                    <span>🎯</span>
                    <span>生活超有感比喻：【打碎昂貴花瓶，叫打掃阿姨來收，自己溜走？】</span>
                  </div>
                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                    <div class="p-3 rounded-xl bg-white dark:bg-slate-900 border-2 border-blue-300 dark:border-blue-700 shadow-2xs space-y-1">
                      <span class="font-black text-blue-900 dark:text-blue-200 block text-xs sm:text-[13px]">生命身體說（單純人命思維）：</span>
                      <p class="text-slate-800 dark:text-slate-200 text-xs font-medium leading-relaxed">
                        只要受傷的人送上救護車、命保住了，這條罪的目的就達成了，你走不走根本無所謂。但被害人家屬找不到人索賠該怎麼辦？
                      </p>
                    </div>
                    <div class="p-3 rounded-xl bg-white dark:bg-slate-900 border-2 border-emerald-300 dark:border-emerald-700 shadow-2xs space-y-1">
                      <span class="font-black text-emerald-800 dark:text-emerald-300 block text-xs sm:text-[13px]">確認利益說（制度責任思維 ⭐）：</span>
                      <p class="text-slate-800 dark:text-slate-200 text-xs font-medium leading-relaxed">
                        保命固然重要，但「誰撞誰、該賠多少」是每個現代公民享有之<strong>法益確認利益</strong>！你叫了車卻溜走，害對方求償無門，這就叫逃逸！
                      </p>
                    </div>
                  </div>
                </div>

                <!-- 考試實務通關口訣卡 -->
                <div class="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs">
                  <div class="p-3 rounded-xl bg-white dark:bg-slate-900 border-2 border-cyan-300 dark:border-cyan-700 space-y-1">
                    <span class="font-black text-cyan-800 dark:text-cyan-300 block">口訣 ㈠：車損不肇逃</span>
                    <span class="text-slate-700 dark:text-slate-200 font-medium">純車殼擦傷沒人受傷，走民事侵權，不成立刑法 § 185-4。</span>
                  </div>
                  <div class="p-3 rounded-xl bg-white dark:bg-slate-900 border-2 border-indigo-300 dark:border-indigo-700 space-y-1">
                    <span class="font-black text-indigo-800 dark:text-indigo-300 block">口訣 ㈡：被撞也要留</span>
                    <span class="text-slate-700 dark:text-slate-200 font-medium">就算錯在對方，只要對方受傷，就得留在現場（現行法無過失減免其刑）。</span>
                  </div>
                  <div class="p-3 rounded-xl bg-white dark:bg-slate-900 border-2 border-emerald-300 dark:border-emerald-700 space-y-1">
                    <span class="font-black text-emerald-800 dark:text-emerald-300 block">口訣 ㈢：叫車必留名</span>
                    <span class="text-slate-700 dark:text-slate-200 font-medium">叫完 119 還要向警方或對方表明身分留下聯絡方式，否則照樣算逃逸！</span>
                  </div>
                </div>

              </div>

            </div>
          </section>

          <!-- 十、解題提示：法益確認乃構成要件解釋與分則學習之先決基石 -->
          <section id="sec-p0ch1-sec1-tips-methodology" class="space-y-6 pt-2">
            <div class="flex items-center gap-3">
              <span class="w-2 h-6 rounded-full bg-amber-500"></span>
              <h3 class="text-lg sm:text-xl font-black text-slate-900 dark:text-white tracking-tight">
                十、解題提示：法益確認乃構成要件解釋與分則學習之先決基石（教材第 2-4 頁）
              </h3>
            </div>

            <div class="p-6 rounded-3xl border border-slate-200 dark:border-white/[0.08] bg-white dark:bg-[#101623] shadow-sm space-y-6">
              
              <!-- 旗艦卡片 10：解題提示方法論 -->
              <div class="p-6 rounded-2xl bg-gradient-to-br from-amber-100 via-orange-50 to-indigo-100 dark:from-[#451a03]/70 dark:via-[#1e1b4b]/60 dark:to-[#0f172a] border-2 border-amber-400 dark:border-amber-500/80 border-l-[8px] border-l-amber-600 dark:border-l-amber-400 shadow-lg shadow-amber-500/15 space-y-5">
                
                <div class="flex items-center justify-between flex-wrap gap-2">
                  <div class="flex items-center gap-2.5">
                    <span class="text-2xl drop-shadow-sm">📖</span>
                    <div>
                      <span class="font-black text-sm sm:text-base text-amber-950 dark:text-amber-100 tracking-wide">
                        教材第 2-4 頁 原文精華【解題提示】
                      </span>
                      <span class="block text-[11px] font-mono font-bold text-amber-700 dark:text-amber-300 tracking-wider uppercase">
                        METHODOLOGIA EXAMINIS · FUNDAMENTUM INTERPRETATIONIS
                      </span>
                    </div>
                  </div>
                  <div class="flex items-center gap-2">
                    <span class="text-xs font-mono font-black px-3 py-1 rounded-lg bg-amber-600 text-white shadow-sm border border-amber-400">
                      教材第 2-4 頁 原文精華
                    </span>
                    <span class="text-xs font-mono font-black px-3 py-1 rounded-lg bg-indigo-600 text-white shadow-sm border border-indigo-400">
                      考試作答破題通關鑰匙
                    </span>
                  </div>
                </div>

                <!-- 教材原文原汁原味重現卡 -->
                <div class="p-4 sm:p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-amber-400/80 dark:border-amber-700/80 border-l-4 border-l-amber-600 shadow-md space-y-2">
                  <div class="flex items-center justify-between text-xs font-mono border-b border-amber-100 dark:border-slate-800 pb-2">
                    <span class="font-bold text-amber-800 dark:text-amber-300 flex items-center gap-1.5">
                      <span class="w-2 h-2 rounded-full bg-amber-600 animate-pulse"></span>
                      作者叮嚀原文精華
                    </span>
                    <span class="px-2 py-0.5 rounded bg-amber-100 dark:bg-amber-900/60 text-amber-800 dark:text-amber-200 font-bold text-[11px]">
                      ★ 事半功倍之鑰
                    </span>
                  </div>
                  <p class="text-xs sm:text-sm md:text-base font-black text-slate-900 dark:text-slate-100 leading-relaxed font-serif tracking-wide py-1">
                    「前述幾個案例只是要告訴大家<span class="text-amber-700 dark:text-amber-300 underline decoration-amber-400 underline-offset-4 font-black">『保護法益的確認』將直接影響刑法分則構成要件要素的解釋與定位</span>。至於各個犯罪的細部要件爭執及立場抉擇，待分則處再逐一分析說明。因此刑法分則的學習上，<strong>確認保護法益是絕對必要的前置工作</strong>，只有清楚掌握該罪的保護法益，才能在紛雜的要素中正確歸類、整理，在案例解析上也十分重要，如果對所討論的犯罪可以先有一個既定保護法益存在，那檢討構成要件就會相對單純且<strong>事半功倍</strong>。」
                  </p>
                </div>

                <!-- 四步方法論模型網格 -->
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 text-xs pt-1">
                  <div class="p-4 rounded-xl bg-white dark:bg-slate-900 border-2 border-indigo-300 dark:border-indigo-700 border-l-4 border-l-indigo-600 shadow-xs space-y-1.5">
                    <div class="flex items-center justify-between">
                      <span class="font-black text-indigo-900 dark:text-indigo-200 flex items-center gap-1">
                        <span class="w-5 h-5 rounded bg-indigo-600 text-white flex items-center justify-center font-mono font-bold text-[11px]">1</span>
                        <span>先定法益</span>
                      </span>
                      <span class="text-[10px] font-mono font-bold px-1.5 py-0.5 rounded bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300">前置基石</span>
                    </div>
                    <p class="text-slate-700 dark:text-slate-300 font-medium leading-relaxed">
                      遇到任何法條或考題，先自問「本罪到底保護什麼利益？」區分人格、財產或社會秩序。
                    </p>
                  </div>

                  <div class="p-4 rounded-xl bg-white dark:bg-slate-900 border-2 border-blue-300 dark:border-blue-700 border-l-4 border-l-blue-600 shadow-xs space-y-1.5">
                    <div class="flex items-center justify-between">
                      <span class="font-black text-blue-900 dark:text-blue-200 flex items-center gap-1">
                        <span class="w-5 h-5 rounded bg-blue-600 text-white flex items-center justify-center font-mono font-bold text-[11px]">2</span>
                        <span>指導解釋</span>
                      </span>
                      <span class="text-[10px] font-mono font-bold px-1.5 py-0.5 rounded bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300">目的導向</span>
                    </div>
                    <p class="text-slate-700 dark:text-slate-300 font-medium leading-relaxed">
                      構成要件之文義解釋緊扣法益目的，避免望文生義或本末倒置，杜絕偏離立法意旨。
                    </p>
                  </div>

                  <div class="p-4 rounded-xl bg-white dark:bg-slate-900 border-2 border-emerald-300 dark:border-emerald-700 border-l-4 border-l-emerald-600 shadow-xs space-y-1.5">
                    <div class="flex items-center justify-between">
                      <span class="font-black text-emerald-900 dark:text-emerald-200 flex items-center gap-1">
                        <span class="w-5 h-5 rounded bg-emerald-600 text-white flex items-center justify-center font-mono font-bold text-[11px]">3</span>
                        <span>定位屬性</span>
                      </span>
                      <span class="text-[10px] font-mono font-bold px-1.5 py-0.5 rounded bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300">體系歸位</span>
                    </div>
                    <p class="text-slate-700 dark:text-slate-300 font-medium leading-relaxed">
                      判別文字屬於客觀行為、結果、不法要素或客觀處罰條件，條理井然，論述不漏接。
                    </p>
                  </div>

                  <div class="p-4 rounded-xl bg-white dark:bg-slate-900 border-2 border-purple-300 dark:border-purple-700 border-l-4 border-l-purple-600 shadow-xs space-y-1.5">
                    <div class="flex items-center justify-between">
                      <span class="font-black text-purple-900 dark:text-purple-200 flex items-center gap-1">
                        <span class="w-5 h-5 rounded bg-purple-600 text-white flex items-center justify-center font-mono font-bold text-[11px]">4</span>
                        <span>精準涵攝</span>
                      </span>
                      <span class="text-[10px] font-mono font-bold px-1.5 py-0.5 rounded bg-purple-100 dark:bg-purple-950 text-purple-700 dark:text-purple-300">事半功倍</span>
                    </div>
                    <p class="text-slate-700 dark:text-slate-300 font-medium leading-relaxed">
                      學說分歧均根源於對法益定位的不同。看清法益立足點，任何刁鑽案例均能迎刃而解！
                    </p>
                  </div>
                </div>

              </div>

              <!-- 🐣 專屬小白秒懂專區 -->
              <div class="rounded-2xl p-5 sm:p-6 bg-gradient-to-br from-amber-50 via-orange-50/80 to-yellow-100 dark:from-[#2a1c0c] dark:via-[#221608] dark:to-[#171005] border-2 border-amber-400 dark:border-amber-500 border-l-[8px] border-l-amber-500 shadow-md shadow-amber-500/10 space-y-4">
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
                        寫刑法申論題時，腦袋一片空白、爭點混亂怎麼辦？
                      </h4>
                    </div>
                  </div>
                  <span class="text-xs font-bold text-amber-800 dark:text-amber-300 bg-amber-100 dark:bg-amber-900/60 px-2.5 py-1 rounded-lg border border-amber-300 dark:border-amber-700">
                    🎯 考試事半功倍密技
                  </span>
                </div>

                <!-- 金句框 -->
                <div class="p-3.5 sm:p-4 rounded-xl bg-white dark:bg-slate-900 border-2 border-amber-300 dark:border-amber-600 shadow-xs">
                  <div class="text-[11px] font-black text-amber-600 dark:text-amber-400 uppercase tracking-wider mb-1">
                    📢 一句話大白話翻譯
                  </div>
                  <p class="text-sm sm:text-base font-black text-slate-900 dark:text-white leading-relaxed">
                    👉「<span class="text-amber-600 dark:text-amber-400 underline decoration-amber-400 underline-offset-4">法益就是你在考場上的『北極星與指南針』！拿到考題第一秒先問自己：這條罪到底在保護什麼？答案立刻自動浮現！</span>」
                  </p>
                </div>

                <!-- 生活比喻對照 -->
                <div class="p-4 rounded-xl bg-amber-100/60 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800/60 space-y-2 text-xs sm:text-[13px] text-slate-800 dark:text-slate-200 leading-relaxed">
                  <div class="font-black text-amber-900 dark:text-amber-200 flex items-center gap-1.5 text-sm">
                    <span>🎯</span>
                    <span>生活超有感比喻：【瞎子摸象 vs 站在高塔拿望遠鏡】</span>
                  </div>
                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                    <div class="p-3 rounded-xl bg-white dark:bg-slate-900 border-2 border-rose-300 dark:border-rose-700 shadow-2xs space-y-1">
                      <span class="font-black text-rose-700 dark:text-rose-300 block text-xs sm:text-[13px]">❌ 瞎子摸象式作答（死背要件）：</span>
                      <p class="text-slate-800 dark:text-slate-200 text-xs sm:text-[13px] font-medium leading-relaxed">
                        一看到題目就去背「著手、因果關係、未必故意」，結果要件兜不攏、立場前後打架，自己寫到精神錯亂。
                      </p>
                    </div>
                    <div class="p-3 rounded-xl bg-white dark:bg-slate-900 border-2 border-emerald-300 dark:border-emerald-700 shadow-2xs space-y-1">
                      <span class="font-black text-emerald-800 dark:text-emerald-300 block text-xs sm:text-[13px]">⭕ 登高望遠式作答（先定法益）：</span>
                      <p class="text-slate-800 dark:text-slate-200 text-xs sm:text-[13px] font-medium leading-relaxed">
                        先點出本罪保護的法益，各家學說為什麼吵架（因為保護的法益認知不同），順理成章給出結論，閱卷老師直接給高分！
                      </p>
                    </div>
                  </div>
                </div>

              </div>

              <!-- 全節大圓滿里程碑完結卡 -->
              <div class="p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-emerald-100 via-teal-50 to-indigo-100 dark:from-[#064e3b]/80 dark:via-[#0f172a] dark:to-[#1e1b4b]/70 border-2 border-emerald-400 dark:border-emerald-500 flex items-center justify-between flex-wrap gap-4 shadow-md">
                <div class="flex items-center gap-3.5">
                  <span class="text-3xl sm:text-4xl drop-shadow-sm">🎉</span>
                  <div class="space-y-1">
                    <div class="text-sm sm:text-base font-black text-emerald-950 dark:text-emerald-100">
                      教材第 2-1 ～ 2-4 頁 第一節【法益保護原則——何謂法益？】全 10 小節旗艦重構完畢！
                    </div>
                    <div class="text-xs text-slate-700 dark:text-slate-300 font-medium">
                      完整收錄核心法定定義、三大本質、雙重機能、二元區分量相異說、分則三大家族樹、三大功能、三大爭議案例（剪髮案、黑吃黑案、肇逃案）與解題提示四步模型，並全面配備「🐣 小白秒懂專區」！
                    </div>
                  </div>
                </div>
                <span class="px-4 py-2 rounded-xl bg-emerald-600 text-white font-mono text-xs font-black shadow-md border border-emerald-400 shrink-0">
                  第一節 完畢 (P. 2-1 ~ 2-4)
                </span>
              </div>

            </div>
          </section>

          <!-- Section Bottom Pagination: 第一節底部 -->
          <div class="pt-8 border-t border-slate-200 dark:border-white/[0.08] grid grid-cols-1 sm:grid-cols-2 gap-4">
            <button onclick="switchView('part0-chapter-1')" class="group p-4 rounded-2xl border border-slate-200 dark:border-white/[0.08] hover:border-indigo-500/40 bg-white dark:bg-[#111726] text-left transition-all hover:-translate-y-0.5 shadow-sm hover:shadow-md flex items-center gap-3">
              <div class="w-9 h-9 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 group-hover:bg-indigo-50 dark:group-hover:bg-indigo-950 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 flex items-center justify-center text-sm font-bold shrink-0 transition-colors">
                ←
              </div>
              <div class="min-w-0">
                <span class="text-[11px] text-slate-400 font-mono block">上一單元</span>
                <span class="text-xs font-bold text-slate-800 dark:text-slate-200 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors truncate block">
                  第一章 篇章前言與四大支柱 (第 2-1 頁)
                </span>
              </div>
            </button>

            <button onclick="switchView('part0-ch1-sec2')" class="group p-4 rounded-2xl border border-indigo-500/40 hover:border-indigo-500 bg-gradient-to-br from-indigo-50/50 to-blue-50/30 dark:from-indigo-950/30 dark:to-blue-950/20 text-right transition-all hover:-translate-y-0.5 shadow-sm hover:shadow-md flex items-center justify-between gap-3">
              <div class="min-w-0 text-left">
                <span class="text-[11px] text-indigo-700 dark:text-indigo-400 font-mono block font-bold">下一單元 (第 2-5 ～ 2-7 頁)</span>
                <span class="text-xs font-extrabold text-slate-900 dark:text-white group-hover:text-indigo-700 dark:group-hover:text-indigo-400 transition-colors truncate block">
                  第二節 罪刑法定原則——付出代價的根據何在？ →
                </span>
              </div>
              <div class="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 to-indigo-600 text-white flex items-center justify-center text-sm font-bold shrink-0 group-hover:scale-105 transition-transform shadow-md shadow-indigo-500/30">
                📜
              </div>
            </button>
          </div>

        </div>
`;
