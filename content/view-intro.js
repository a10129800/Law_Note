// ==============================================================================
// VIEW: 導論導讀 (Intro View)
// 封裝自刑法總則【圖說系列】之導論 犯罪概念與論罪結構 Conducted Read
// ==============================================================================
window.APP_VIEWS = window.APP_VIEWS || {};
window.APP_VIEWS['viewIntro'] = window.APP_VIEWS['intro'] = `
        <!-- VIEW A: 本篇導讀 (初始畫面：按下第一章前僅顯示導讀，其餘內容不出現) -->
        <div id="viewIntro" class="fade-enter hidden space-y-6">
          
          <div class="space-y-1.5">
            <span class="text-xs font-mono text-blue-600 dark:text-blue-400 font-bold uppercase tracking-wider">PREFACE • CONDUCTED READ</span>
            <h2 class="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
              導論 犯罪概念與論罪結構
            </h2>
          </div>

          <!-- 本篇導讀卡片 (教材第 XVIII-1 頁原文) -->
          <div class="p-6 sm:p-8 rounded-3xl border-2 border-blue-500/30 bg-white dark:bg-[#101623] shadow-sm space-y-4">
            <div class="flex items-center justify-between border-b border-slate-100 dark:border-white/[0.06] pb-3">
              <div class="flex items-center gap-2">
                <span class="text-xl">📖</span>
                <h3 class="text-base sm:text-lg font-bold text-slate-900 dark:text-white">本篇導讀 (Conducted Read)</h3>
              </div>
              <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-500/10 text-blue-500 dark:text-blue-400 font-bold">第 XVIII-1 頁</span>
            </div>

            <blockquote class="text-sm sm:text-base text-slate-700 dark:text-slate-200 leading-relaxed italic border-l-4 border-blue-500 pl-4 py-1">
              「本篇是對刑法的初步鳥瞰。首先介紹犯罪概念與通說採取的三階層體系論，再快速瀏覽刑法的論罪結構。期望帶領讀者建立一個穩固又直觀的思維流程，畢竟法律不該是象牙塔裡的學問，而是人類生活經驗的縮影與結晶。」
            </blockquote>
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
