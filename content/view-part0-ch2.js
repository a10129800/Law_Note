/**
 * view-part0-ch2.js
 * 第零篇 第二章 刑法的操作原理 (教材第 2-9 ～ 2-24 頁 原文體系)
 * 圖二標準規範 (SECTION_DESIGN_GUIDE_IMAGE2.md) 旗艦視覺重構版
 */
window.APP_VIEWS = window.APP_VIEWS || {};
window.APP_VIEWS['viewPart0Chapter2'] = window.APP_VIEWS['viewPart0Ch2'] = window.APP_VIEWS['part0Ch2'] = window.APP_VIEWS['part0Chapter2'] = window.APP_VIEWS['part0-chapter-2'] = `
        <!-- VIEW 9: 第零篇 第二章 刑法的操作原理 (教材第 2-9 ～ 2-24 頁) -->
        <div id="viewPart0Chapter2" class="fade-enter hidden space-y-8">
          
          <!-- Breadcrumb & Back -->
          <div class="flex items-center justify-between gap-4 border-b border-slate-100 dark:border-white/[0.06] pb-3">
            <nav class="flex items-center gap-2 text-xs font-medium text-slate-400 flex-wrap">
              <button onclick="switchView('part-0')" class="hover:text-blue-500 transition-colors">第零篇 刑法的運作、操作原理與法律效果</button>
              <span>/</span>
              <span class="text-blue-600 dark:text-blue-400 font-bold">第二章 刑法的操作原理</span>
            </nav>
            <button onclick="switchView('part-0')" class="text-xs text-slate-400 hover:text-blue-500 flex items-center gap-1 transition-colors shrink-0">
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
              </svg>
              <span>返回第零篇導讀</span>
            </button>
          </div>

          <!-- Chapter Header -->
          <div class="space-y-2">
            <div class="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-mono text-xs font-bold">
              <span>第零篇・第二章</span>
              <span class="px-2 py-0.5 rounded-md bg-blue-50 dark:bg-blue-950/40 text-[11px] border border-blue-200 dark:border-blue-900/50">
                教材第 2-9 ～ 2-24 頁 原文體系全收錄
              </span>
            </div>
            <h2 class="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
              第二章 刑法的操作原理
            </h2>
            <p class="text-xs sm:text-sm text-slate-800 dark:text-slate-200 font-medium leading-relaxed">
              刑法操作的前理解：時間效力（從舊從輕 § 2）、空間效力（屬地/隔地/屬人/保護/世界 § 3～§ 8）、人之效力（憲法豁免特權）與四大法律解釋方法及刑法 § 10 核心法定名詞精確審查
            </p>
          </div>

          <!-- 一、篇章導讀：刑法操作工具箱與兩大核心支柱 -->
          <section id="sec-p0ch2-overview" class="space-y-6 pt-2">
            <div class="flex items-center gap-3">
              <span class="w-2 h-6 rounded-full bg-blue-600"></span>
              <h3 class="text-lg sm:text-xl font-black text-slate-900 dark:text-white tracking-tight">
                一、篇章導讀：刑法操作工具箱與兩大核心支柱（教材第 0-1、2-9、2-15 頁）
              </h3>
            </div>

            <div class="p-6 rounded-3xl border border-slate-200 dark:border-white/[0.08] bg-white dark:bg-[#101623] shadow-sm space-y-6">
              
              <!-- 旗艦卡片 1：操作原理核心定位 -->
              <div class="p-6 rounded-2xl bg-gradient-to-br from-blue-100 via-indigo-50 to-sky-100 dark:from-[#082f49] dark:via-[#1e1b4b] dark:to-[#0f172a] border-2 border-blue-400 dark:border-blue-500/80 border-l-[8px] border-l-blue-600 dark:border-l-blue-400 shadow-lg shadow-blue-500/15 space-y-5">
                
                <div class="flex items-center justify-between flex-wrap gap-2">
                  <div class="flex items-center gap-2.5">
                    <span class="text-2xl drop-shadow-sm">🧰</span>
                    <div>
                      <span class="font-black text-sm sm:text-base text-blue-950 dark:text-blue-100 tracking-wide">
                        刑法操作原理：實體審查前的「前理解工具箱」
                      </span>
                      <span class="block text-[11px] font-mono font-bold text-blue-700 dark:text-blue-300 tracking-wider">
                        TEMPORAL & SPATIAL JURISDICTION · INTERPRETATIO IURIS
                      </span>
                    </div>
                  </div>
                  <div class="flex items-center gap-2">
                    <span class="text-xs font-mono font-black px-3 py-1 rounded-lg bg-blue-600 text-white shadow-sm border border-blue-400">
                      教材第 2-9 ～ 2-24 頁
                    </span>
                    <button onclick="toggleOriginalQuote()" class="text-xs font-mono font-bold px-3 py-1 rounded-lg bg-white dark:bg-slate-800 text-blue-700 dark:text-blue-300 shadow-sm border border-blue-300 dark:border-blue-700 hover:scale-105 transition-all flex items-center gap-1 cursor-pointer">
                      <span id="quoteToggleIcon">📄</span>
                      <span id="quoteToggleText">查看教材引言</span>
                    </button>
                  </div>
                </div>

                <!-- 隱藏的純文字引文（點擊按鈕可隨時展開） -->
                <div id="originalQuoteContainer" class="hidden">
                  <blockquote class="p-4 rounded-xl border-l-4 border-blue-500 bg-white dark:bg-slate-900 text-xs sm:text-sm text-slate-800 dark:text-slate-200 leading-relaxed font-serif italic space-y-2">
                    <p>
                      「本篇是正式踏入刑法學習前的暖身，介紹影響刑法運作的四大支柱，以及刑法操作的前理解（諸如刑法的適用效力、解釋方法）。在檢討行為人是否該當特定罪名之前，若該案件根本不在我國刑法的時空管轄範圍內，或是行為態樣超越了法條文字的可能文義，實體犯罪審查根本無從開展。」—— 陳奕廷《刑法總則【圖說系列】》第 0-1 頁導讀
                    </p>
                  </blockquote>
                </div>

                <!-- 核心金句卡片 -->
                <div class="p-4 sm:p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-blue-400/80 dark:border-blue-700/80 border-l-4 border-l-blue-600 shadow-md space-y-2">
                  <div class="flex items-center justify-between text-xs font-mono border-b border-blue-100 dark:border-slate-800 pb-2">
                    <span class="font-bold text-blue-800 dark:text-blue-300 flex items-center gap-1.5">
                      <span class="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
                      陳奕廷（易律師）刑法操作核心心法
                    </span>
                    <span class="px-2 py-0.5 rounded bg-blue-100 dark:bg-blue-900/60 text-blue-800 dark:text-blue-200 font-bold text-[11px]">
                      ★ 審查門檻先決條件
                    </span>
                  </div>
                  <p class="text-base sm:text-lg font-black text-blue-950 dark:text-blue-50 leading-relaxed font-serif tracking-wide py-1">
                    「先問能不能用（時空人管轄），再問怎麼讀懂（四大解釋與定義），最後才進三階層！」
                  </p>
                </div>

                <!-- 兩大核心支柱對照卡片 -->
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                  <!-- 支柱 1 -->
                  <div class="p-4 rounded-xl bg-white/95 dark:bg-slate-900/90 border-2 border-indigo-400/80 dark:border-indigo-600 border-l-4 border-l-indigo-600 shadow-xs space-y-2">
                    <div class="flex items-center justify-between">
                      <span class="font-black text-indigo-950 dark:text-indigo-100 flex items-center gap-1.5 text-xs sm:text-sm">
                        <span class="w-5 h-5 rounded-md bg-indigo-600 text-white flex items-center justify-center font-mono font-bold text-[11px]">①</span>
                        <span>適用效力：時空身分邊界（第一節）</span>
                      </span>
                      <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-indigo-100 dark:bg-indigo-900/60 text-indigo-700 dark:text-indigo-300 font-bold">第 2-9 ～ 2-14 頁</span>
                    </div>
                    <p class="text-slate-800 dark:text-slate-200 text-xs font-medium leading-relaxed">
                      包含<strong>時的效力</strong>（從舊從輕原則 § 2、繼續犯行為時、限時法追溯力）、<strong>地的效力</strong>（屬地原則 § 3、隔地犯 § 4、屬人 § 6、保護 § 5、世界原則、外國裁判複動 § 9）與<strong>人的效力</strong>（總統與民代豁免特權）。
                    </p>
                  </div>

                  <!-- 支柱 2 -->
                  <div class="p-4 rounded-xl bg-white/95 dark:bg-slate-900/90 border-2 border-purple-400/80 dark:border-purple-600 border-l-4 border-l-purple-600 shadow-xs space-y-2">
                    <div class="flex items-center justify-between">
                      <span class="font-black text-purple-950 dark:text-purple-100 flex items-center gap-1.5 text-xs sm:text-sm">
                        <span class="w-5 h-5 rounded-md bg-purple-600 text-white flex items-center justify-center font-mono font-bold text-xs">②</span>
                        <span>解釋方法：辭典法規定義（第二節）</span>
                      </span>
                      <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-purple-100 dark:bg-purple-900/60 text-purple-700 dark:text-purple-300 font-bold">第 2-15 ～ 2-24 頁</span>
                    </div>
                    <p class="text-slate-800 dark:text-slate-200 text-xs font-medium leading-relaxed">
                      包含<strong>四大司法解釋方法</strong>（文義、體系、歷史、目的）、合憲性解釋，以及<strong>刑法第 10 條核心名詞三大深水區</strong>（公務員三大類型【身分/授權/委託】、重傷重大不治難治、性交性自主侵害審查）。
                    </p>
                  </div>
                </div>

                <!-- 🐣 【超亮眼白話文專區】第二章總覽小白秒懂專區 -->
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
                          刑法操作原理到底在操什麼？30 秒白話破解「伺服器規則與官方字典」！
                        </h4>
                      </div>
                    </div>
                    <span class="text-xs font-bold text-amber-800 dark:text-amber-300 bg-amber-100 dark:bg-amber-900/60 px-2.5 py-1 rounded-lg border border-amber-300 dark:border-amber-700">
                      🎮 遊戲伺服器比喻
                    </span>
                  </div>

                  <!-- 一句話白話金句 -->
                  <div class="p-3.5 sm:p-4 rounded-xl bg-white dark:bg-slate-900 border-2 border-amber-300 dark:border-amber-600 shadow-xs">
                    <div class="text-[11px] font-black text-amber-600 dark:text-amber-400 uppercase tracking-wider mb-1">
                      📢 一句話大白話翻譯
                    </div>
                    <p class="text-sm sm:text-base font-black text-slate-900 dark:text-white leading-relaxed">
                      👉「<span class="text-amber-600 dark:text-amber-400 underline decoration-amber-400 underline-offset-4">第二章就是刑法遊戲的『連線管區』與『官方辭典』！</span>先確認你在不在伺服器服務範圍（時空身分），再翻開官方辭典查字詞（公務員、性交、重傷），通通過關才能判刑！」
                    </p>
                  </div>

                  <!-- 趣味日常比喻 -->
                  <div class="p-4 rounded-xl bg-amber-100/60 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800/60 space-y-2 text-xs sm:text-[13px] text-slate-800 dark:text-slate-200 leading-relaxed">
                    <div class="font-black text-amber-900 dark:text-amber-200 flex items-center gap-1.5 text-sm">
                      <span>🕹️</span>
                      <span>生活超有感比喻：【國際線上遊戲開外掛被抓，到底由誰來封鎖帳號？】</span>
                    </div>
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                      <div class="p-3 rounded-xl bg-white dark:bg-slate-900 border-2 border-indigo-300 dark:border-indigo-700 shadow-2xs space-y-1">
                        <span class="font-black text-indigo-900 dark:text-indigo-200 block text-xs sm:text-[13px]">① 適用效力（你連到哪台伺服器？）：</span>
                        <p class="text-slate-800 dark:text-slate-200 text-xs font-medium leading-relaxed">
                          台灣人在日本飛機上偷東西、外國人在公海攻擊台灣漁船，台灣警察能抓嗎？遊戲公司昨天剛改版禁用連點程式，能把上星期用連點的人封號嗎？（從舊從輕原則）這就是<strong>適用效力</strong>！
                        </p>
                      </div>
                      <div class="p-3 rounded-xl bg-white dark:bg-slate-900 border-2 border-purple-300 dark:border-purple-700 shadow-2xs space-y-1">
                        <span class="font-black text-purple-900 dark:text-purple-200 block text-xs sm:text-[13px]">② 解釋方法（遊戲規則的字面定義）：</span>
                        <p class="text-slate-800 dark:text-slate-200 text-xs font-medium leading-relaxed">
                          遊戲公告寫「禁止使用惡意第三方程式」，那螢幕放大鏡算不算？刑法寫「公務員貪污重罰」，那公立大學教授買試劑洗錢算不算公務員？（刑法 § 10）這就是<strong>解釋方法</strong>！
                        </p>
                      </div>
                    </div>
                  </div>

                  <!-- 3 步驟檢驗卡 -->
                  <div class="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs">
                    <div class="p-3.5 rounded-xl bg-white dark:bg-slate-900 border-2 border-blue-300 dark:border-blue-700 space-y-1">
                      <span class="font-black text-blue-800 dark:text-blue-300 block">第 1 步：查時之效力</span>
                      <span class="text-slate-700 dark:text-slate-200 font-medium">行為時是否有法？行為後修法有無從舊從輕（§ 2）？</span>
                    </div>
                    <div class="p-3.5 rounded-xl bg-white dark:bg-slate-900 border-2 border-indigo-300 dark:border-indigo-700 space-y-1">
                      <span class="font-black text-indigo-800 dark:text-indigo-300 block">第 2 步：查地與人之管轄</span>
                      <span class="text-slate-700 dark:text-slate-200 font-medium">境內外國船舶？侵害本國法益（§ 3～§ 8）？有無豁免權？</span>
                    </div>
                    <div class="p-3.5 rounded-xl bg-white dark:bg-slate-900 border-2 border-purple-300 dark:border-purple-700 space-y-1">
                      <span class="font-black text-purple-800 dark:text-purple-300 block">第 3 步：翻 § 10 官方字典</span>
                      <span class="text-slate-700 dark:text-slate-200 font-medium">公務員三大類型核對、重傷六款審查、性交行為該當檢驗。</span>
                    </div>
                  </div>

                </div>

              </div>

            </div>
          </section>

          <!-- 二、子單元旗艦導航卡片 (Sub-Sections Roadmap) -->
          <section id="sec-p0ch2-subsections-nav" class="space-y-6 pt-2">
            <div class="flex items-center gap-3">
              <span class="w-2 h-6 rounded-full bg-indigo-600"></span>
              <h3 class="text-lg sm:text-xl font-black text-slate-900 dark:text-white tracking-tight">
                二、第二章子單元旗艦導航（教材第 2-9 ～ 2-24 頁）
              </h3>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              
              <!-- 第一節 卡片 -->
              <div class="p-6 rounded-2xl border-2 border-indigo-400 dark:border-indigo-500/80 border-l-[8px] border-l-indigo-600 dark:border-l-indigo-400 bg-gradient-to-br from-indigo-50/90 via-blue-50/40 to-slate-50/60 dark:from-[#131138] dark:to-[#0d1424] shadow-md shadow-indigo-500/10 space-y-4 flex flex-col justify-between group hover:shadow-lg transition-all">
                <div class="space-y-3">
                  <div class="flex items-center justify-between">
                    <span class="text-xs font-mono font-black text-indigo-700 dark:text-indigo-400 flex items-center gap-1.5">
                      <span class="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                      <span>SECTION 1 • FULLY COMPLETE</span>
                    </span>
                    <span class="text-xs font-mono font-black px-2.5 py-0.5 rounded-lg bg-indigo-600 text-white shadow-xs">
                      教材第 2-9 ～ 2-14 頁
                    </span>
                  </div>
                  <h4 class="text-base sm:text-lg font-black text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    第一節 刑法的適用效力
                  </h4>
                  <p class="text-xs sm:text-[13px] text-slate-700 dark:text-slate-300 font-medium leading-relaxed">
                    三大先天限制（時、地、人）：從舊從輕原則（§ 2）、案例 2-1 繼續犯之行為時、案例 2-2 限時法追溯力、保安處分雙軌制；屬地原則（§ 3+§ 4）、屬人原則（§ 6）、保護原則（§ 5）、世界原則、外國裁判複動（§ 9）、廣大興案；總統與民代憲法豁免特權。
                  </p>
                  <div class="flex flex-wrap gap-1.5 pt-1 text-[11px] font-mono">
                    <span class="px-2 py-0.5 rounded bg-white dark:bg-slate-800 border border-indigo-200 dark:border-indigo-800 text-indigo-700 dark:text-indigo-300 font-bold">§ 2 從舊從輕</span>
                    <span class="px-2 py-0.5 rounded bg-white dark:bg-slate-800 border border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-300 font-bold">§ 3~§ 8 地之效力</span>
                    <span class="px-2 py-0.5 rounded bg-white dark:bg-slate-800 border border-purple-200 dark:border-purple-800 text-purple-700 dark:text-purple-300 font-bold">§ 9 外國裁判</span>
                  </div>
                </div>

                <div class="pt-3 border-t border-indigo-100 dark:border-indigo-900/40 flex items-center justify-between">
                  <span class="text-xs font-mono text-slate-500 dark:text-slate-400">共 6 大案例演練收錄</span>
                  <button onclick="switchView('part0-ch2-sec1')" class="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-black shadow-md shadow-indigo-600/25 transition-all flex items-center gap-1.5 hover:scale-105 active:scale-95 cursor-pointer">
                    <span>🚀 開始研讀第一節</span>
                    <span>→</span>
                  </button>
                </div>
              </div>

              <!-- 第二節 卡片 -->
              <div class="p-6 rounded-2xl border-2 border-purple-400 dark:border-purple-500/80 border-l-[8px] border-l-purple-600 dark:border-l-purple-400 bg-gradient-to-br from-purple-50/90 via-fuchsia-50/40 to-slate-50/60 dark:from-[#2e1065] dark:to-[#0f172a] shadow-md shadow-purple-500/10 space-y-4 flex flex-col justify-between group hover:shadow-lg transition-all">
                <div class="space-y-3">
                  <div class="flex items-center justify-between">
                    <span class="text-xs font-mono font-black text-purple-700 dark:text-purple-400 flex items-center gap-1.5">
                      <span class="w-2.5 h-2.5 rounded-full bg-purple-500"></span>
                      <span>SECTION 2 • FULLY COMPLETE</span>
                    </span>
                    <span class="text-xs font-mono font-black px-2.5 py-0.5 rounded-lg bg-purple-600 text-white shadow-xs">
                      教材第 2-15 ～ 2-24 頁
                    </span>
                  </div>
                  <h4 class="text-base sm:text-lg font-black text-slate-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                    第二節 刑法之解釋方法
                  </h4>
                  <p class="text-xs sm:text-[13px] text-slate-700 dark:text-slate-300 font-medium leading-relaxed">
                    四大司法解釋方法（文義、體系、歷史、目的）、合憲性解釋；案例 2-7 至 2-15；刑法第 10 條核心名詞三大深水區：公務員三大類型（身分/授權/委託公務員【表2】與個別化公務員）、重傷列舉與概括重大不治或難治、性交三大審查要件。
                  </p>
                  <div class="flex flex-wrap gap-1.5 pt-1 text-[11px] font-mono">
                    <span class="px-2 py-0.5 rounded bg-white dark:bg-slate-800 border border-purple-200 dark:border-purple-800 text-purple-700 dark:text-purple-300 font-bold">四大解釋方法</span>
                    <span class="px-2 py-0.5 rounded bg-white dark:bg-slate-800 border border-fuchsia-200 dark:border-fuchsia-800 text-fuchsia-700 dark:text-fuchsia-300 font-bold">§ 10 公務員三類</span>
                    <span class="px-2 py-0.5 rounded bg-white dark:bg-slate-800 border border-rose-200 dark:border-rose-800 text-rose-700 dark:text-rose-300 font-bold">§ 10 重傷與性交</span>
                  </div>
                </div>

                <div class="pt-3 border-t border-purple-100 dark:border-purple-900/40 flex items-center justify-between">
                  <span class="text-xs font-mono text-slate-500 dark:text-slate-400">共 9 大案例演練收錄</span>
                  <button onclick="switchView('part0-ch2-sec2')" class="px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-700 text-white text-xs font-black shadow-md shadow-purple-600/25 transition-all flex items-center gap-1.5 hover:scale-105 active:scale-95 cursor-pointer">
                    <span>🚀 開始研讀第二節</span>
                    <span>→</span>
                  </button>
                </div>
              </div>

            </div>
          </section>

          <!-- 三、第二章 重要法條與概念速查矩陣 -->
          <section id="sec-p0ch2-statutes-matrix" class="space-y-6 pt-2">
            <div class="flex items-center gap-3">
              <span class="w-2 h-6 rounded-full bg-emerald-600"></span>
              <h3 class="text-lg sm:text-xl font-black text-slate-900 dark:text-white tracking-tight">
                三、第二章 重要法條與概念速查矩陣（教材第 2-9 ～ 2-24 頁）
              </h3>
            </div>

            <div class="p-6 rounded-3xl border border-slate-200 dark:border-white/[0.08] bg-white dark:bg-[#101623] shadow-sm space-y-4">
              <div class="overflow-x-auto rounded-2xl border-2 border-slate-300 dark:border-slate-700 shadow-sm">
                <table class="w-full text-left border-collapse text-xs">
                  <thead>
                    <tr class="bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white border-b-2 border-slate-300 dark:border-slate-700 font-black">
                      <th class="p-3 w-1/6">法條條號</th>
                      <th class="p-3 border-l-2 border-slate-200 dark:border-slate-700 w-1/4">法條主題名稱</th>
                      <th class="p-3 border-l-2 border-slate-200 dark:border-slate-700 w-1/6">所屬單元</th>
                      <th class="p-3 border-l-2 border-slate-200 dark:border-slate-700 w-5/12">核心規範要旨與考點關鍵</th>
                    </tr>
                  </thead>
                  <tbody class="divide-y-2 divide-slate-200 dark:divide-slate-800 text-slate-800 dark:text-slate-200 font-medium text-[11.5px]">
                    <tr class="hover:bg-slate-50 dark:hover:bg-slate-850/50">
                      <td class="p-3 font-mono font-black text-indigo-700 dark:text-indigo-400 bg-indigo-50/50 dark:bg-indigo-950/20">§ 2</td>
                      <td class="p-3 border-l-2 border-slate-200 dark:border-slate-800 font-black text-slate-900 dark:text-white">從舊從輕原則</td>
                      <td class="p-3 border-l-2 border-slate-200 dark:border-slate-800 font-bold text-indigo-600">第一節（時）</td>
                      <td class="p-3 border-l-2 border-slate-200 dark:border-slate-800">原則適用行為時法，但行為後之法律有利於行為人者，適用最有利於行為人之法律。拘束人身自由保安處分亦準用之。</td>
                    </tr>
                    <tr class="hover:bg-slate-50 dark:hover:bg-slate-850/50">
                      <td class="p-3 font-mono font-black text-blue-700 dark:text-blue-400 bg-blue-50/50 dark:bg-blue-950/20">§ 3、§ 4</td>
                      <td class="p-3 border-l-2 border-slate-200 dark:border-slate-800 font-black text-slate-900 dark:text-white">屬地主義與隔地犯</td>
                      <td class="p-3 border-l-2 border-slate-200 dark:border-slate-800 font-bold text-blue-600">第一節（地）</td>
                      <td class="p-3 border-l-2 border-slate-200 dark:border-slate-800">在中華民國領域內犯罪者適用之；在中華民國船舶或航空器內犯罪者以在中華民國領域內犯罪論。行為地或結果地在境內皆屬之。</td>
                    </tr>
                    <tr class="hover:bg-slate-50 dark:hover:bg-slate-850/50">
                      <td class="p-3 font-mono font-black text-purple-700 dark:text-purple-400 bg-purple-50/50 dark:bg-purple-950/20">§ 5 ～ § 8</td>
                      <td class="p-3 border-l-2 border-slate-200 dark:border-slate-800 font-black text-slate-900 dark:text-white">地之輔助管轄基準</td>
                      <td class="p-3 border-l-2 border-slate-200 dark:border-slate-800 font-bold text-purple-600">第一節（地）</td>
                      <td class="p-3 border-l-2 border-slate-200 dark:border-slate-800">保護原則（國家法益、重大個人法益）、屬人原則（我國國民境內外犯罪）、世界原則（內亂外患、偽造貨幣、海盜、加重詐欺）。</td>
                    </tr>
                    <tr class="hover:bg-slate-50 dark:hover:bg-slate-850/50">
                      <td class="p-3 font-mono font-black text-emerald-700 dark:text-emerald-400 bg-emerald-50/50 dark:bg-emerald-950/20">§ 9</td>
                      <td class="p-3 border-l-2 border-slate-200 dark:border-slate-800 font-black text-slate-900 dark:text-white">外國裁判之效力</td>
                      <td class="p-3 border-l-2 border-slate-200 dark:border-slate-800 font-bold text-emerald-600">第一節（地）</td>
                      <td class="p-3 border-l-2 border-slate-200 dark:border-slate-800">同一行為雖經外國確定裁判，仍得依我國刑法處斷（主權獨立性）；但在外國已受刑之全部或一部執行者，得免其刑之全部或一部之執行。</td>
                    </tr>
                    <tr class="hover:bg-slate-50 dark:hover:bg-slate-850/50">
                      <td class="p-3 font-mono font-black text-fuchsia-700 dark:text-fuchsia-400 bg-fuchsia-50/50 dark:bg-fuchsia-950/20">§ 10</td>
                      <td class="p-3 border-l-2 border-slate-200 dark:border-slate-800 font-black text-slate-900 dark:text-white">核心名詞定義</td>
                      <td class="p-3 border-l-2 border-slate-200 dark:border-slate-800 font-bold text-fuchsia-600">第二節（解釋）</td>
                      <td class="p-3 border-l-2 border-slate-200 dark:border-slate-800">公務員三類型（身分/授權/委託公務員）；重傷列舉五款與概括第六款（重大不治或難治）；性交定義（生殖器/器官/器物進入侵入）。</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          <!-- Chapter Bottom Pagination: 第二章底部 -->
          <div class="pt-6 border-t border-slate-200 dark:border-white/[0.08] grid grid-cols-1 sm:grid-cols-2 gap-4">
            <button onclick="switchView('part0-ch1-sec3')" class="group p-4 rounded-2xl border border-slate-200 dark:border-white/[0.08] hover:border-blue-500/40 bg-white dark:bg-[#111726] text-left transition-all hover:-translate-y-0.5 shadow-sm hover:shadow-md flex items-center gap-3">
              <div class="w-9 h-9 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 group-hover:bg-blue-50 dark:group-hover:bg-blue-950 group-hover:text-blue-600 dark:group-hover:text-blue-400 flex items-center justify-center text-sm font-bold shrink-0 transition-colors">
                ←
              </div>
              <div class="min-w-0">
                <span class="text-[11px] text-slate-400 font-mono block">上一單元 (第 2-7 ~ 2-8 頁)</span>
                <span class="text-xs font-bold text-slate-800 dark:text-slate-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors truncate block">
                  第一章 第三節 罪責原則
                </span>
              </div>
            </button>

            <button onclick="switchView('part0-ch2-sec1')" class="group p-4 rounded-2xl border border-indigo-500/40 hover:border-indigo-500 bg-gradient-to-br from-indigo-50/50 to-blue-50/30 dark:from-indigo-950/30 dark:to-blue-950/20 text-right transition-all hover:-translate-y-0.5 shadow-sm hover:shadow-md flex items-center justify-between gap-3 cursor-pointer">
              <div class="min-w-0 text-left">
                <span class="text-[11px] text-indigo-700 dark:text-indigo-400 font-mono block font-bold">進入本章第一節 (第 2-9 頁)</span>
                <span class="text-xs font-extrabold text-slate-900 dark:text-white group-hover:text-indigo-700 dark:group-hover:text-indigo-400 transition-colors truncate block">
                  第一節 刑法的適用效力 →
                </span>
              </div>
              <div class="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 to-indigo-600 text-white flex items-center justify-center text-sm font-bold shrink-0 group-hover:scale-105 transition-transform shadow-md shadow-indigo-500/30">
                🚀
              </div>
            </button>
          </div>

        </div>
`;
