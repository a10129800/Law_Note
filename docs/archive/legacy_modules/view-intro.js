// ==============================================================================
// VIEW: 導論導讀 (Intro View)
// 封裝自刑法總則【圖說系列】之導論 犯罪概念與論罪結構 Conducted Read
// ==============================================================================
window.APP_VIEWS = window.APP_VIEWS || {};
window.APP_VIEWS['viewIntro'] = window.APP_VIEWS['intro'] = `
        <!-- VIEW A: 本篇導讀 (初始畫面：按下第一章前僅顯示導讀，其餘內容不出現) -->
        <div id="viewIntro" class="fade-enter hidden space-y-6">
          
          <!-- 原書扉頁風格呈現：導論 犯罪概念與論罪結構 -->
          <div class="relative max-w-2xl mx-auto my-4 p-8 sm:p-12 bg-white dark:bg-[#121827] rounded-3xl border border-slate-200/90 dark:border-white/10 shadow-xl shadow-slate-200/50 dark:shadow-none flex flex-col items-center text-center">
            
            <!-- 頂部印章徽章：導 論 -->
            <div class="flex items-center justify-center gap-3 mb-6">
              <span class="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-200 flex items-center justify-center text-sm font-serif font-bold shadow-inner">
                導
              </span>
              <span class="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-200 flex items-center justify-center text-sm font-serif font-bold shadow-inner">
                論
              </span>
            </div>

            <!-- 主標題：犯罪概念與論罪結構 -->
            <h2 class="text-3xl sm:text-4xl font-serif font-black text-slate-900 dark:text-white tracking-wider leading-snug mb-10">
              犯罪概念與<br class="hidden sm:inline" />論罪結構
            </h2>

            <!-- 本篇導讀便籤框 (依原圖擬真手繪信籤排版) -->
            <div class="relative w-full max-w-lg mt-3 p-6 sm:p-8 rounded-2xl border-2 border-slate-300 dark:border-slate-600/80 bg-slate-50/70 dark:bg-[#161f30] shadow-sm">
              
              <!-- 頂部居中鉛筆徽飾與導讀標籤 -->
              <div class="absolute -top-6 left-1/2 -translate-x-1/2 bg-white dark:bg-[#121827] px-4 py-1 rounded-full border border-slate-300 dark:border-slate-600 shadow-sm flex flex-col items-center">
                <div class="flex items-center gap-1.5 text-slate-800 dark:text-slate-100 text-xs font-serif font-bold tracking-widest">
                  <span>✏️</span>
                  <span>本篇導讀</span>
                </div>
                <span class="text-[9px] font-serif italic text-slate-600 dark:text-slate-300 -mt-0.5">Conducted read</span>
              </div>

              <!-- 原文導讀內文 (精確還原字句與標點) -->
              <p class="text-sm sm:text-base text-slate-700 dark:text-slate-200 leading-relaxed font-serif text-justify pt-2 tracking-wide indent-6">
                本篇是對刑法的初步鳥瞰，首先介紹犯罪概念與通說採取的三階層體系論，再快速瀏覽刑法的論罪結構。期望帶領讀者建立一個穩固又立體的思維流程，畢竟法律不該是象牙塔裡的學問，而是人類生活經驗的縮影與結晶。
              </p>
            </div>

            <!-- 頁碼註釋 -->
            <div class="mt-6 text-[11px] font-mono text-slate-600 dark:text-slate-300">
              教材第 XVIII-1 頁
            </div>
          </div>

          <!-- Chapter Bottom Pagination: 導論導讀底部 -->
          <div class="pt-6 border-t border-slate-200 dark:border-white/[0.08] grid grid-cols-1 sm:grid-cols-2 gap-4">
            <button onclick="switchView('home')" class="group p-4 rounded-2xl border border-slate-200 dark:border-white/[0.08] hover:border-blue-500/40 bg-white dark:bg-[#111726] text-left transition-all hover:-translate-y-0.5 shadow-sm hover:shadow-md flex items-center gap-3">
              <div class="w-9 h-9 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 group-hover:bg-blue-50 dark:group-hover:bg-blue-950 group-hover:text-blue-600 dark:group-hover:text-blue-400 flex items-center justify-center text-sm font-bold shrink-0 transition-colors">
                ←
              </div>
              <div class="min-w-0">
                <span class="text-[11px] text-slate-400 font-mono block">上一單元</span>
                <span class="text-xs font-bold text-slate-800 dark:text-slate-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors truncate block">
                  🏠 書籍主頁 (首頁看板)
                </span>
              </div>
            </button>

            <button onclick="switchView('chapter-1')" class="group p-4 rounded-2xl border border-blue-500/40 hover:border-blue-500 bg-gradient-to-br from-blue-50/50 to-indigo-50/30 dark:from-blue-950/30 dark:to-indigo-950/20 text-right transition-all hover:-translate-y-0.5 shadow-sm hover:shadow-md flex items-center justify-between gap-3">
              <div class="min-w-0 text-left">
                <span class="text-[11px] text-blue-600 dark:text-blue-400 font-mono block font-bold">下一單元・進入內文</span>
                <span class="text-xs font-extrabold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors truncate block">
                  第一章 犯罪的概念 (第 1-1 頁) →
                </span>
              </div>
              <div class="w-9 h-9 rounded-xl bg-blue-600 text-white flex items-center justify-center text-sm font-bold shrink-0 group-hover:scale-105 transition-transform shadow-md shadow-blue-600/30">
                →
              </div>
            </button>
          </div>

        </div>
`;
