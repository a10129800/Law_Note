// ==============================================================================
// VIEW: 書籍主頁 (Home View)
// 封裝自刑法總則【圖說系列】之書籍主頁，包含 3D 書封、極光光暈、量化晶片、詳細規格與圖解藝廊
// ==============================================================================
window.APP_VIEWS = window.APP_VIEWS || {};
window.APP_VIEWS['viewHome'] = window.APP_VIEWS['home'] = `
        <!-- ========================================== -->
        <!-- VIEW 0: 書籍主頁 (Home View) -->
        <!-- ========================================== -->
        <div id="viewHome" class="fade-enter space-y-8">
          
          <!-- 書籍 Hero 卡片 (立體書封 + 極光微光背景 + 量化指標晶片 + 詳細規格資訊) -->
          <div class="relative overflow-hidden rounded-3xl border border-slate-200/80 dark:border-white/[0.1] bg-white/95 dark:bg-[#111726]/95 p-6 sm:p-8 lg:p-10 backdrop-blur shadow-[0_8px_30px_rgb(0,0,0,0.06)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.3)]">
            
            <!-- 極光微光光暈背景 (Navy & Champagne Gold 雙色協調微光) -->
            <div class="pointer-events-none absolute inset-0 overflow-hidden rounded-3xl -z-0">
              <div class="aurora-orb aurora-orb-amber absolute -top-16 -left-16 w-80 h-80 rounded-full bg-gradient-to-tr from-amber-400/20 via-amber-300/10 to-transparent blur-3xl opacity-75 dark:opacity-35"></div>
              <div class="aurora-orb aurora-orb-indigo absolute -top-20 -right-20 w-96 h-96 rounded-full bg-gradient-to-bl from-blue-700/20 via-blue-800/15 to-transparent blur-3xl opacity-80 dark:opacity-45"></div>
              <div class="aurora-orb aurora-orb-cyan absolute -bottom-20 left-1/4 w-80 h-80 rounded-full bg-gradient-to-t from-blue-900/15 via-amber-500/10 to-transparent blur-3xl opacity-60 dark:opacity-30"></div>
              <div class="absolute inset-0 bg-[radial-gradient(rgba(30,58,138,0.06)_1px,transparent_1px)] dark:bg-[radial-gradient(rgba(245,158,11,0.03)_1px,transparent_1px)] [background-size:22px_22px]"></div>
            </div>

            <div class="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-10 items-center">
              
              <!-- 左側：立體書籍封面展示區 -->
              <div class="md:col-span-4 lg:col-span-4 flex flex-col items-center justify-center py-2">
                <div class="book-3d-wrapper relative flex flex-col items-center">
                  
                  <!-- 懸浮晶透標籤 (Floating Glass Badge) -->
                  <div class="mb-3 px-3 py-1 rounded-full bg-amber-50/90 dark:bg-slate-900/90 backdrop-blur-md border border-amber-200/80 dark:border-amber-500/30 text-[11px] font-semibold text-amber-800 dark:text-amber-300 shadow-sm flex items-center gap-1.5 pointer-events-none transform -translate-y-0.5">
                    <span class="inline-block w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
                    <span>實體教材數位化・2026 最新校驗</span>
                  </div>

                  <!-- 3D 書封卡片 (帶有 float-breathing 呼吸懸浮動態) -->
                  <div class="book-3d-card float-breathing relative w-56 h-80 rounded-2xl overflow-hidden cursor-pointer select-none bg-slate-900 shadow-2xl">
                    
                    <!-- 實體封面圖片插槽 (優先載入專案相對路徑 cover.png，並支援本地回退與 CSS 擬真書封) -->
                    <img id="bookCoverImg" 
                         src="./cover.png" 
                         alt="刑法總則【圖說系列】封面" 
                         onerror="this.style.display='none'; var fb = document.getElementById('bookCoverFallback'); if(fb) fb.style.display='flex';" 
                         class="w-full h-full object-cover object-top">
                    
                    <!-- 優雅降級 Fallback 擬真書封 (若實體圖片加載失敗時自動呈現) -->
                    <div id="bookCoverFallback" class="hidden absolute inset-0 w-full h-full bg-gradient-to-br from-slate-900 via-blue-950 to-amber-950/80 p-5 flex flex-col justify-between text-white border border-white/20">
                      <div class="flex items-center justify-between relative z-10">
                        <span class="px-2 py-0.5 rounded bg-amber-400/20 text-amber-300 text-[10px] font-bold border border-amber-400/40">圖說系列</span>
                        <span class="text-[10px] text-white/70 font-mono">律師・司三・法研</span>
                      </div>
                      
                      <div class="space-y-2 my-auto relative z-10 text-center">
                        <div class="text-[10px] font-bold uppercase tracking-wider text-amber-300">高點法學圖說系列</div>
                        <h3 class="text-2xl font-black tracking-tight text-white leading-tight">刑法總則</h3>
                        <p class="text-xs text-blue-300 font-serif italic">Strafrecht</p>
                        <div class="h-0.5 w-10 bg-amber-400 rounded-full mx-auto my-1.5"></div>
                        <p class="text-[10px] text-white/80">概念圖示・清晰易懂<br>重點彙整・深入淺出<br>例題研究・必勝關鍵</p>
                      </div>

                      <div class="flex items-center justify-between text-[11px] text-white/80 pt-3 border-t border-white/15 relative z-10">
                        <span class="font-bold text-white">陳奕廷(易律師) 編著</span>
                        <span class="text-[10px] text-amber-300 font-bold">高點文化</span>
                      </div>

                      <!-- 擬文書脊反光陰影層 -->
                      <div class="book-spine-shine absolute inset-0 pointer-events-none"></div>
                    </div>

                  </div>

                  <!-- 3D 擬真地面接觸投影 (與浮動動態連動呼吸收放) -->
                  <div class="book-pedestal-shadow"></div>
                </div>
              </div>

              <!-- 右側：書籍詳細規格、指標晶片與資訊清單 -->
              <div class="md:col-span-8 lg:col-span-8 space-y-4">
                <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50/80 dark:bg-amber-950/40 text-amber-800 dark:text-amber-300 text-xs font-semibold border border-amber-200/70 dark:border-amber-800/50">
                  <span>📚 高點法學圖說系列</span>
                  <span class="w-1 h-1 rounded-full bg-amber-500"></span>
                  <span>國考權威用書</span>
                </div>
                
                <div>
                  <h1 class="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-slate-900 dark:text-white leading-tight">
                    刑法總則【圖說系列】
                  </h1>
                  <p class="text-xs sm:text-sm text-blue-800 dark:text-blue-300 font-mono font-medium mt-1">
                    Strafrecht ・ 概念圖示與例題解構
                  </p>
                </div>

                <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  本書專為法律國考與學術深造打造，以清晰的概念圖示化繁為簡，貫穿「不法推定罪責」與三階層論罪體系。緊扣重要學說爭點與司法實務見解，協助考生奠定最堅實的刑法總則思維。
                </p>

                <!-- 教材量化指標晶片 (Navy & Champagne Gold 藏青雅金節奏系統) -->
                <div class="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-1">
                  <!-- 晶片 1: 藏藍 -->
                  <div class="metric-chip p-3 rounded-2xl bg-blue-50/40 dark:bg-blue-950/20 border border-blue-200/70 dark:border-blue-800/40 backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:border-blue-400/60 group">
                    <div class="flex items-center gap-1.5 text-blue-800 dark:text-blue-300 text-xs font-semibold mb-0.5">
                      <span>📘</span>
                      <span class="text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors">體系單元</span>
                    </div>
                    <div class="text-base sm:text-lg font-black text-slate-900 dark:text-white tracking-tight">6 大單元</div>
                    <div class="text-[11px] text-slate-600 dark:text-slate-400 leading-snug whitespace-normal break-words mt-0.5">導論至法律效果</div>
                  </div>

                  <!-- 晶片 2: 雅金 -->
                  <div class="metric-chip p-3 rounded-2xl bg-amber-50/40 dark:bg-amber-950/20 border border-amber-200/70 dark:border-amber-800/40 backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:border-amber-400/60 group">
                    <div class="flex items-center gap-1.5 text-amber-700 dark:text-amber-400 text-xs font-semibold mb-0.5">
                      <span>📊</span>
                      <span class="text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 group-hover:text-amber-700 dark:group-hover:text-amber-300 transition-colors">體系圖解</span>
                    </div>
                    <div class="text-base sm:text-lg font-black text-slate-900 dark:text-white tracking-tight">15+ 幅</div>
                    <div class="text-[11px] text-slate-600 dark:text-slate-400 leading-snug whitespace-normal break-words mt-0.5">思維導圖審查流程</div>
                  </div>

                  <!-- 晶片 3: 藏藍 -->
                  <div class="metric-chip p-3 rounded-2xl bg-blue-50/40 dark:bg-blue-950/20 border border-blue-200/70 dark:border-blue-800/40 backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:border-blue-400/60 group">
                    <div class="flex items-center gap-1.5 text-blue-800 dark:text-blue-300 text-xs font-semibold mb-0.5">
                      <span>⚖️</span>
                      <span class="text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors">實務案例</span>
                    </div>
                    <div class="text-base sm:text-lg font-black text-slate-900 dark:text-white tracking-tight">50+ 則</div>
                    <div class="text-[11px] text-slate-600 dark:text-slate-400 leading-snug whitespace-normal break-words mt-0.5">經典裁判爭點解構</div>
                  </div>

                  <!-- 晶片 4: 雅金 -->
                  <div class="metric-chip p-3 rounded-2xl bg-amber-50/40 dark:bg-amber-950/20 border border-amber-200/70 dark:border-amber-800/40 backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:border-amber-400/60 group">
                    <div class="flex items-center gap-1.5 text-amber-700 dark:text-amber-400 text-xs font-semibold mb-0.5">
                      <span>🛡️</span>
                      <span class="text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 group-hover:text-amber-700 dark:group-hover:text-amber-300 transition-colors">現行校驗</span>
                    </div>
                    <div class="text-base sm:text-lg font-black text-slate-900 dark:text-white tracking-tight">2026</div>
                    <div class="text-[11px] text-slate-600 dark:text-slate-400 leading-snug whitespace-normal break-words mt-0.5">現行法規最新校驗</div>
                  </div>
                </div>

                <!-- 書籍中繼資料表格 (精確對應提供之資訊) -->
                <div class="grid grid-cols-2 gap-2.5 pt-1 text-xs">
                  <div class="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-800">
                    <span class="text-slate-400 block text-[10px] font-semibold">作者 / 編著</span>
                    <span class="font-bold text-slate-800 dark:text-slate-200">陳奕廷 (易律師) 編著</span>
                  </div>
                  <div class="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-800">
                    <span class="text-slate-400 block text-[10px] font-semibold">出版社 / 體系</span>
                    <span class="font-bold text-slate-800 dark:text-slate-200">高點 (高點法學系列)</span>
                  </div>
                  <div class="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-800">
                    <span class="text-slate-400 block text-[10px] font-semibold">出版日期 / 書號代碼</span>
                    <span class="font-bold text-slate-800 dark:text-slate-200">2022／10／31 (L602210)</span>
                  </div>
                  <div class="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-800">
                    <span class="text-slate-400 block text-[10px] font-semibold">國際標準書號 (ISBN)</span>
                    <span class="font-mono font-bold text-slate-800 dark:text-slate-200">9786263342880</span>
                  </div>
                </div>

                <!-- 領域標籤 Tags (藏青與雅金協調色) -->
                <div class="flex flex-wrap gap-1.5 pt-1">
                  <span class="px-2.5 py-0.5 rounded-md bg-amber-50 dark:bg-amber-950/40 text-amber-800 dark:text-amber-300 border border-amber-200/80 dark:border-amber-900/50 text-[11px] font-medium">#律師</span>
                  <span class="px-2.5 py-0.5 rounded-md bg-blue-50 dark:bg-blue-950/40 text-blue-800 dark:text-blue-300 border border-blue-200/80 dark:border-blue-900/50 text-[11px] font-medium">#司法三等</span>
                  <span class="px-2.5 py-0.5 rounded-md bg-blue-50 dark:bg-blue-950/40 text-blue-800 dark:text-blue-300 border border-blue-200/80 dark:border-blue-900/50 text-[11px] font-medium">#法研所</span>
                  <span class="px-2.5 py-0.5 rounded-md bg-amber-50 dark:bg-amber-950/40 text-amber-800 dark:text-amber-300 border border-amber-200/80 dark:border-amber-900/50 text-[11px] font-medium">#圖說系列</span>
                </div>

                <!-- 快速行動 CTA 按鈕 -->
                <div class="flex flex-wrap items-center gap-3 pt-2">
                  <button onclick="switchView('chapter-1')" class="group relative px-6 py-2.5 rounded-xl bg-gradient-to-r from-blue-700 via-blue-800 to-blue-900 hover:from-blue-600 hover:to-blue-800 text-white text-xs font-bold shadow-md shadow-blue-900/25 hover:shadow-lg hover:shadow-blue-900/35 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 flex items-center gap-2 border border-blue-500/30">
                    <span>🚀 開始閱讀第一章</span>
                    <svg class="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7"/></svg>
                  </button>
                  <button onclick="switchView('chapter-2')" class="px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200/80 dark:bg-slate-800/90 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 text-xs font-semibold border border-slate-200/80 dark:border-white/10 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 flex items-center gap-2">
                    <span>📄 閱讀第二章</span>
                  </button>
                  <button onclick="switchView('intro')" class="px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-semibold hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 flex items-center gap-2">
                    <span>📖 查看本篇導論</span>
                  </button>
                </div>

              </div>
            </div>
          </div>

          <!-- 教材三大核心特色 (封面標語解構 - 藏青雅金律動) -->
          <div class="space-y-3">
            <h3 class="text-xs font-bold uppercase tracking-wider text-slate-400">教材特色與編排方針</h3>
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div class="p-4 rounded-2xl border border-slate-200 dark:border-white/[0.08] hover:border-amber-400/40 bg-white dark:bg-[#111726] transition-all">
                <div class="w-8 h-8 rounded-lg bg-amber-500/15 text-amber-700 dark:text-amber-400 border border-amber-500/20 flex items-center justify-center font-bold mb-3">
                  📊
                </div>
                <h4 class="font-bold text-xs text-slate-900 dark:text-slate-100">概念圖示・清晰易懂</h4>
                <p class="text-[11px] text-slate-500 mt-1 leading-relaxed">運用圖解化結構呈現抽象刑法法理，化繁為簡，直觀掌握犯罪評價雙軸心。</p>
              </div>

              <div class="p-4 rounded-2xl border border-slate-200 dark:border-white/[0.08] hover:border-blue-400/40 bg-white dark:bg-[#111726] transition-all">
                <div class="w-8 h-8 rounded-lg bg-blue-600/15 text-blue-700 dark:text-blue-400 border border-blue-600/20 flex items-center justify-center font-bold mb-3">
                  ⚖️
                </div>
                <h4 class="font-bold text-xs text-slate-900 dark:text-slate-100">重點彙整・深入淺出</h4>
                <p class="text-[11px] text-slate-500 mt-1 leading-relaxed">嚴謹對齊易律師教材原文，彙整國內通說、重要實務爭點及 2026 現行法規查核。</p>
              </div>

              <div class="p-4 rounded-2xl border border-slate-200 dark:border-white/[0.08] hover:border-amber-400/40 bg-white dark:bg-[#111726] transition-all">
                <div class="w-8 h-8 rounded-lg bg-amber-500/15 text-amber-700 dark:text-amber-400 border border-amber-500/20 flex items-center justify-center font-bold mb-3">
                  🎯
                </div>
                <h4 class="font-bold text-xs text-slate-900 dark:text-slate-100">例題研究・必勝關鍵</h4>
                <p class="text-[11px] text-slate-500 mt-1 leading-relaxed">剖析代表性案例（如不知法律、責任能力判斷），提煉解題得分論述精華。</p>
              </div>
            </div>
          </div>

          <!-- 精選圖解與插圖藝廊 (Book Illustrations & Architecture Grid - 藏藍與雅金平衡) -->
          <div class="space-y-3">
            <div class="flex items-center justify-between">
              <h3 class="text-xs font-bold uppercase tracking-wider text-slate-400">書籍核心圖解與插圖預覽</h3>
              <span class="text-[11px] text-blue-700 dark:text-blue-400 font-semibold cursor-pointer hover:underline" onclick="switchView('chapter-1')">查看全部內文圖解 →</span>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <!-- 圖解卡片 1 (藏藍) -->
              <div class="group p-4 rounded-2xl border border-slate-200 dark:border-white/[0.08] bg-white dark:bg-[#111726] hover:border-blue-500/50 transition-all cursor-pointer shadow-sm hover:shadow-md" onclick="switchView('chapter-1')">
                <div class="h-36 rounded-xl bg-gradient-to-br from-blue-600/10 via-blue-800/5 to-slate-900/5 border border-blue-600/20 flex flex-col items-center justify-center p-4 text-center group-hover:scale-[1.01] transition-transform">
                  <span class="text-3xl mb-2">⚖️</span>
                  <span class="text-xs font-bold text-blue-800 dark:text-blue-300 font-mono">不法推定罪責流程圖</span>
                  <span class="text-[10px] text-slate-500 mt-1">壞事推定壞人原則與阻卻罪責反證</span>
                </div>
                <div class="mt-3">
                  <div class="flex items-center justify-between text-[11px]">
                    <span class="font-bold text-slate-800 dark:text-slate-200">圖 1-2：不法推定罪責原則</span>
                    <span class="text-blue-700 dark:text-blue-400 font-mono text-[10px]">P. 1-2</span>
                  </div>
                  <p class="text-[11px] text-slate-500 mt-1">
                    行為評價面（不法）與行為人評價面（罪責）之相互推定與反證架構。
                  </p>
                </div>
              </div>

              <!-- 圖解卡片 2 (雅金) -->
              <div class="group p-4 rounded-2xl border border-slate-200 dark:border-white/[0.08] bg-white dark:bg-[#111726] hover:border-amber-500/50 transition-all cursor-pointer shadow-sm hover:shadow-md" onclick="switchView('chapter-1')">
                <div class="h-36 rounded-xl bg-gradient-to-br from-amber-500/10 via-amber-700/5 to-slate-900/5 border border-amber-500/20 flex flex-col items-center justify-center p-4 text-center group-hover:scale-[1.01] transition-transform">
                  <span class="text-3xl mb-2">🛡️</span>
                  <span class="text-xs font-bold text-amber-700 dark:text-amber-300 font-mono">阻卻事由五大法定例示</span>
                  <span class="text-[10px] text-slate-500 mt-1">刑法 § 16, 18, 19, 20, 23但, 24但</span>
                </div>
                <div class="mt-3">
                  <div class="flex items-center justify-between text-[11px]">
                    <span class="font-bold text-slate-800 dark:text-slate-200">案例 1-1 ～ 1-5 體系例示</span>
                    <span class="text-amber-700 dark:text-amber-400 font-mono text-[10px]">P. 1-3~1-5</span>
                  </div>
                  <p class="text-[11px] text-slate-500 mt-1">
                    不知法律、年齡、精神障礙、瘖啞生理與防衛過當之法定抗辯檢驗。
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
`;
