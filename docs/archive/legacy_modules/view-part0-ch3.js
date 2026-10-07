/**
 * view-part0-ch3.js
 * 第零篇 第三章 刑法的法律效果 (教材第 2-25 ～ 2-27 頁)
 * 依據多欄位Note Skill 規範整理：
 * 完整收錄刑罰目的理論（應報、一般預防、特別預防、結合）、雙軌制裁體系要件、三大生動典故、刑罰思考四大步驟原書圖解
 */
window.APP_VIEWS = window.APP_VIEWS || {};
window.APP_VIEWS['viewPart0Chapter3'] = window.APP_VIEWS['viewPart0Ch3'] = window.APP_VIEWS['part0Ch3'] = window.APP_VIEWS['part0Chapter3'] = window.APP_VIEWS['part0-chapter-3'] = `
        <!-- VIEW: 第零篇 第三章 刑法的法律效果 -->
        <div id="viewPart0Chapter3" class="fade-enter hidden space-y-8">
          
          <!-- Breadcrumb & Back -->
          <div class="flex items-center justify-between gap-4 border-b border-slate-100 dark:border-white/[0.06] pb-3">
            <nav class="flex items-center gap-2 text-xs font-medium text-slate-400">
              <button onclick="switchView('part-0')" class="hover:text-blue-500 transition-colors">第零篇 刑法的運作、操作原理與法律效果</button>
              <span>/</span>
              <span class="text-blue-600 dark:text-blue-400 font-bold">第三章 刑法的法律效果</span>
            </nav>
            <button onclick="switchView('part-0')" class="text-xs text-slate-400 hover:text-blue-500 flex items-center gap-1 transition-colors">
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
              </svg>
              <span>返回第零篇導讀</span>
            </button>
          </div>

          <!-- Chapter Header -->
          <div class="space-y-2">
            <div class="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-mono text-xs font-bold">
              <span>第零篇・第三章</span>
              <span class="px-2 py-0.5 rounded-md bg-blue-50 dark:bg-blue-950/40 text-[11px] border border-blue-200 dark:border-blue-900/50 text-blue-700 dark:text-blue-400">
                教材第 2-25 ～ 2-27 頁
              </span>
              <span class="px-2 py-0.5 rounded-md bg-emerald-50 dark:bg-emerald-950/40 text-[11px] border border-emerald-200 dark:border-emerald-900/50 text-emerald-700 dark:text-emerald-400 font-bold">
                完整收錄
              </span>
            </div>
            <h2 class="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
              第三章 刑法的法律效果
            </h2>
            <p class="text-xs sm:text-sm font-bold text-blue-700 dark:text-blue-300 leading-relaxed">
              刑罰目的理論（應報、一般預防、特別預防、結合）、雙軌制裁體系（TB+R+S vs. TB+R）與刑罰思考四大步驟（法定刑 → 處斷刑 → 宣告刑 → 執行刑）
            </p>
          </div>

          <!-- 第三章 四大子單元旗艦導航卡片 -->
          <div class="p-5 sm:p-6 rounded-3xl border-2 border-indigo-200 dark:border-indigo-800/80 bg-gradient-to-br from-indigo-50/60 via-purple-50/40 to-blue-50/50 dark:from-indigo-950/40 dark:via-purple-950/30 dark:to-blue-950/30 space-y-4 shadow-sm">
            <div class="flex items-center justify-between border-b border-indigo-200/60 dark:border-indigo-800/60 pb-2.5">
              <div class="flex items-center gap-2">
                <span class="text-xl">🧭</span>
                <h3 class="text-sm sm:text-base font-black text-slate-900 dark:text-white">
                  第三章 四大子單元旗艦研讀導航（完整收錄 教材第 2-27 ～ 2-37 頁）
                </h3>
              </div>
              <span class="px-2.5 py-0.5 rounded-full bg-indigo-600 text-white font-mono font-bold text-xs">
                4 SECTIONS COMPLETE
              </span>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
              <button onclick="switchView('part0-ch3-sec1')" class="p-3.5 rounded-2xl bg-white dark:bg-slate-900 border border-indigo-200 dark:border-indigo-800 hover:border-indigo-500 hover:-translate-y-1 transition-all text-left space-y-1.5 shadow-xs cursor-pointer group">
                <span class="px-2 py-0.5 rounded bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 font-mono font-bold text-[10px]">第一節 • P. 2-27～2-29</span>
                <h4 class="font-black text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400">刑罰種類・法定刑</h4>
                <p class="text-[11px] text-slate-500">完全性法條構造、主刑三種、從刑與沒收新制。</p>
              </button>

              <button onclick="switchView('part0-ch3-sec2')" class="p-3.5 rounded-2xl bg-white dark:bg-slate-900 border border-indigo-200 dark:border-indigo-800 hover:border-indigo-500 hover:-translate-y-1 transition-all text-left space-y-1.5 shadow-xs cursor-pointer group">
                <span class="px-2 py-0.5 rounded bg-purple-100 dark:bg-purple-950 text-purple-700 dark:text-purple-300 font-mono font-bold text-[10px]">第二節 • P. 2-29～2-31</span>
                <h4 class="font-black text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400">刑罰調整・處斷刑</h4>
                <p class="text-[11px] text-slate-500">先加後減法則、累犯加重與釋字 775、自首減輕。</p>
              </button>

              <button onclick="switchView('part0-ch3-sec3')" class="p-3.5 rounded-2xl bg-white dark:bg-slate-900 border border-indigo-200 dark:border-indigo-800 hover:border-indigo-500 hover:-translate-y-1 transition-all text-left space-y-1.5 shadow-xs cursor-pointer group">
                <span class="px-2 py-0.5 rounded bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 font-mono font-bold text-[10px]">第三節 • P. 2-31～2-32</span>
                <h4 class="font-black text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400">刑罰量定・宣告刑</h4>
                <p class="text-[11px] text-slate-500">罪刑相當原則、§ 57 量刑十款、§ 59 情堪憫恕酌減。</p>
              </button>

              <button onclick="switchView('part0-ch3-sec4')" class="p-3.5 rounded-2xl bg-white dark:bg-slate-900 border border-indigo-200 dark:border-indigo-800 hover:border-indigo-500 hover:-translate-y-1 transition-all text-left space-y-1.5 shadow-xs cursor-pointer group">
                <span class="px-2 py-0.5 rounded bg-amber-100 dark:bg-amber-950 text-amber-700 dark:text-amber-300 font-mono font-bold text-[10px]">第四節 • P. 2-32～2-37</span>
                <h4 class="font-black text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400">刑罰執行・執行刑</h4>
                <p class="text-[11px] text-slate-500">案例 3-1 四階推導、易刑處分、緩刑、假釋與時效。</p>
              </button>
            </div>
          </div>

          <!-- ==================== 一、導論：為何提前探討刑法的法律效果？ ==================== -->
          <section id="sec-p0ch3-intro" class="space-y-5 pt-2">
            <div class="flex items-center justify-between border-b border-slate-100 dark:border-white/[0.06] pb-2">
              <div class="flex items-center gap-3">
                <span class="w-2 h-6 rounded-full bg-blue-600"></span>
                <h3 class="text-lg sm:text-xl font-black text-slate-900 dark:text-white tracking-tight">
                  一、犯罪成立後的最終考驗：手段與目的之比例關係
                </h3>
              </div>
              <span class="text-[11px] font-mono px-2 py-0.5 rounded bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400 font-bold">
                教材第 2-25 頁
              </span>
            </div>

            <!-- 天藍色概念焦點框 (Focus Box) -->
            <div class="box-legal-navy p-6 sm:p-7 rounded-3xl space-y-4">
              <div class="flex items-center gap-2 text-base font-bold text-[#032034] dark:text-white">
                <span class="text-xl">👶</span>
                <h4>拒絕「玩扮家家酒」式的刑法學習</h4>
              </div>

              <blockquote class="border-l-4 border-[#0284c7] pl-4 py-1 text-xs sm:text-sm text-[#0c4a6e] dark:text-sky-100 leading-relaxed italic space-y-1.5">
                <p>
                  「正式進入刑法學習之前，我們先來談談犯罪成立後的法律效果，如果不能對法律效果有初步理解，那麼大言不慚地說『某某人會成立本罪！』就猶如小孩子在玩扮家家酒般，距離現實非常遙遠，當然也沒辦法體會手段（刑罰）與目的（法益保護原則）之間的比例關係。」
                </p>
              </blockquote>

              <div class="p-4 rounded-2xl bg-white/90 dark:bg-slate-900/80 border border-sky-200 dark:border-sky-800 text-xs text-slate-700 dark:text-slate-300 leading-relaxed space-y-1.5">
                <div class="font-bold text-sky-900 dark:text-sky-200 flex items-center gap-1.5">
                  <span>⚖️</span>
                  <span>核心啟示：比例原則（Verhältnismäßigkeitsgrundsatz）的真實錨定</span>
                </div>
                <p>
                  刑法不是單純玩弄法律構成要件的文字遊戲，發動國家最嚴厲的刑罰權（剝奪生命、自由或財產），必須無時無刻檢視：<strong>採取的手段（刑罰）是否與欲達成的法益保護目的合乎比例？</strong>
                </p>
              </div>
            </div>

            <!-- 作者叮嚀 1: 刑罰理論的學習心態與投報率 -->
            <div id="sec-p0ch3-author-advice-1" class="p-5 sm:p-6 rounded-3xl bg-amber-50/70 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900/50 space-y-3">
              <div class="flex items-center justify-between border-b border-amber-200/60 dark:border-amber-900/50 pb-2">
                <div class="flex items-center gap-2 text-amber-900 dark:text-amber-200 font-bold text-sm">
                  <span class="text-lg">📢</span>
                  <span>【作者叮嚀】為何將「刑罰理論」拉到全書最前頭？</span>
                </div>
                <span class="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-amber-200/60 dark:bg-amber-900 text-amber-800 dark:text-amber-300">
                  作者心聲・投報率分析
                </span>
              </div>
              <p class="text-xs sm:text-sm text-amber-900/90 dark:text-amber-200/90 leading-relaxed">
                這部分涉及到「刑罰理論」，多數書籍都是放在最後一個篇章說明，除了內容較枯燥乏味外，<strong>考試的投資報酬率也極低</strong>。筆者將刑罰理論拉到前頭來，是要讓大家知道<strong>往後的種種討論都是通往這個最終效果</strong>，理解我們究竟要付出什麼代價後，才能更審慎地研究法學問題，期待我們共勉之。<br>
                <span class="text-amber-700 dark:text-amber-400 font-semibold block pt-1">
                  💡（第一次接觸刑法的同學們可以輕鬆愉快地翻閱本章，看不懂也沒關係，只要看過去有個印象就足夠了！）
                </span>
              </p>
            </div>
          </section>

          <!-- ==================== 二、刑罰目的理論體系全景流程圖 ==================== -->
          <section id="sec-p0ch3-theories" class="space-y-6 pt-2">
            <div class="flex items-center justify-between border-b border-slate-100 dark:border-white/[0.06] pb-2">
              <div class="flex items-center gap-3">
                <span class="w-2 h-6 rounded-full bg-indigo-600"></span>
                <h3 class="text-lg sm:text-xl font-black text-slate-900 dark:text-white tracking-tight">
                  二、刑罰目的理論體系全景流程圖（教材第 2-25 ～ 2-27 頁）
                </h3>
              </div>
              <span class="text-[11px] font-mono px-2 py-0.5 rounded bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 font-bold">
                Draw.io 體系架構復刻
              </span>
            </div>

            <!-- ==================== Draw.io 格式體系流程架構圖 (圖 1 標準格式復刻) ==================== -->
            <div id="sec-p0ch3-drawio-diagram" class="p-4 sm:p-6 rounded-3xl bg-white dark:bg-slate-900 border-2 border-indigo-200 dark:border-indigo-800/80 shadow-sm space-y-4">
              
              <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 dark:border-slate-800 pb-3">
                <div class="space-y-1">
                  <div class="flex items-center gap-2">
                    <span class="text-xl">📊</span>
                    <h4 class="text-base sm:text-lg font-black text-slate-900 dark:text-white">
                      刑罰目的理論體系全景流程圖（Draw.io 格式復刻）
                    </h4>
                  </div>
                  <p class="text-xs text-slate-500 dark:text-slate-400">
                    完整整合教材第 2-25 ～ 2-27 頁：應報理論、預防理論（一般/特別預防）、結合理論、雙軌制裁體系與四大審查步驟
                  </p>
                </div>

                <div class="flex items-center gap-2 shrink-0 flex-wrap">
                  <!-- 顯示寬度切換 (適配 / 100% 原圖) -->
                  <div class="flex items-center bg-slate-100 dark:bg-slate-800 p-0.5 rounded-xl text-xs font-semibold">
                    <button type="button" id="btnCh3FitWidth" onclick="setCh3ImgMode('fit')"
                      class="px-2.5 py-1 rounded-lg bg-white dark:bg-slate-700 text-blue-600 dark:text-blue-400 shadow-xs transition-all font-bold cursor-pointer"
                      title="自動適配畫面欄位寬度">
                      適配頁面
                    </button>
                    <button type="button" id="btnCh3OriginWidth" onclick="setCh3ImgMode('origin')"
                      class="px-2.5 py-1 rounded-lg text-slate-600 dark:text-slate-400 hover:text-slate-900 transition-all font-medium cursor-pointer"
                      title="展開為 100% 原始解析度大圖（支援水平橫移捲動）">
                      100% 原始大圖
                    </button>
                  </div>

                  <button type="button" onclick="openDiagramLightbox(document.getElementById('ch3FlowchartImg'), '刑罰目的理論體系全景流程圖', '教材第 2-25 ～ 2-27 頁')"
                    class="px-3 py-1.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer shadow-xs"
                    title="在全螢幕燈箱放大檢視">
                    <span>🔍</span>
                    <span>全螢幕檢視</span>
                  </button>
                </div>
              </div>

              <!-- 圖片呈現容器：純圖片、完全固定、禁止拖拽移動 (user-select: none, draggable: false) -->
              <div id="ch3ImgContainer" class="w-full rounded-2xl border border-slate-200 dark:border-slate-800 bg-white shadow-xs transition-all">
                <img 
                  id="ch3FlowchartImg"
                  src="images/part0-ch3-flowchart.svg" 
                  alt="刑罰目的理論體系全景流程圖 (教材第 2-25 ～ 2-27 頁)" 
                  draggable="false"
                  onclick="openDiagramLightbox(this, '刑罰目的理論體系全景流程圖', '教材第 2-25 ～ 2-27 頁')"
                  class="w-full h-auto block select-none pointer-events-auto cursor-zoom-in rounded-2xl transition-all"
                  style="-webkit-user-drag: none; user-select: none; -webkit-touch-callout: none;"
                  title="💡 點擊全螢幕放大檢視"
                />
              </div>

              <!-- 底部圖解說明 -->
              <div class="flex flex-wrap items-center justify-between gap-2 pt-1 text-[11.5px] text-slate-500 dark:text-slate-400">
                <div class="flex items-center gap-2">
                  <span class="w-2 h-2 rounded-full bg-emerald-500"></span>
                  <span>💡 提示：字體已大幅加粗放大！點擊圖片任一處或「全螢幕檢視」即可開全屏大圖，亦可切換「100% 原始大圖」</span>
                </div>
                <div class="text-[10.5px] font-mono text-slate-400">
                  HIGH CONTRAST • ULTRA SHARP
                </div>
              </div>

            </div>

            <!-- ==================== 流程圖白話文速讀導引專區 ==================== -->
            <div id="sec-p0ch3-flowchart-guide" class="p-5 sm:p-7 rounded-3xl bg-gradient-to-br from-amber-50/90 via-orange-50/40 to-yellow-50/60 dark:from-amber-950/30 dark:via-orange-950/20 dark:to-yellow-950/20 border-2 border-amber-300 dark:border-amber-700/80 shadow-sm space-y-5">
              
              <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-amber-200 dark:border-amber-800/60 pb-3">
                <div class="flex items-center gap-2.5">
                  <span class="text-2xl animate-bounce">💡</span>
                  <div>
                    <span class="text-[11px] font-mono font-bold text-amber-700 dark:text-amber-400 uppercase tracking-wider block">
                      PLAIN-LANGUAGE FLOWCHART GUIDE
                    </span>
                    <h4 class="text-base sm:text-lg font-black text-amber-950 dark:text-amber-200">
                      【白話文專區】一張圖看懂刑罰目的與雙軌體系——全景流程圖核心脈絡白話拆解
                    </h4>
                  </div>
                </div>
                <span class="px-2.5 py-1 rounded-full bg-amber-600 text-white font-mono font-bold text-xs shadow-xs shrink-0 self-start sm:self-auto">
                  3 分鐘速通流程圖
                </span>
              </div>

              <!-- 4 步驟對應流程圖的四大區塊 -->
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
                
                <!-- 區塊 1: 算舊帳 vs 防未來 -->
                <div class="p-4 rounded-2xl bg-white/95 dark:bg-slate-900/90 border border-amber-200/80 dark:border-amber-800/60 space-y-2 shadow-xs">
                  <div class="flex items-center justify-between">
                    <span class="font-bold text-rose-700 dark:text-rose-400 text-sm flex items-center gap-1.5">
                      <span class="w-5 h-5 rounded-full bg-rose-100 dark:bg-rose-950 text-rose-700 dark:text-rose-300 flex items-center justify-center text-xs font-bold">1</span>
                      <span>起點：國家為什麼要處罰人？（兩大對立思路）</span>
                    </span>
                    <span class="text-[10.5px] font-mono px-2 py-0.5 rounded bg-rose-50 dark:bg-rose-950 text-rose-600 dark:text-rose-400 font-bold">
                      應報 vs. 預防
                    </span>
                  </div>
                  <p class="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                    流程圖最上方顯示，刑法終極目標是「保護大家的法益」，但手段有兩種極端想法：
                  </p>
                  <ul class="list-disc list-inside space-y-1 text-slate-600 dark:text-slate-300 text-xs">
                    <li><strong>應報理論（算舊帳）：</strong>「你做多少壞事，就受多少痛苦！」源自古代《漢摩拉比法典》以眼還眼。核心是<strong>以罪責當天花板</strong>，絕不能超額處罰。</li>
                    <li><strong>預防理論（看未來）：</strong>處罰是為了防止再犯！細分兩種：
                      <div class="pl-4 pt-1 space-y-0.5 text-[11.5px] text-slate-500 dark:text-slate-400">
                        • <strong>一般預防：</strong>「殺雞儆猴」，像孫武練兵斬美姬立威，威嚇社會大眾不敢犯法。<br/>
                        • <strong>特別預防：</strong>針對這個犯人本身施以教化矯治，像《飛越杜鵑窩》反思的醫療矯治，讓他回歸社會不再犯罪。
                      </div>
                    </li>
                  </ul>
                </div>

                <!-- 區塊 2: 現代通說 結合理論 -->
                <div class="p-4 rounded-2xl bg-white/95 dark:bg-slate-900/90 border border-amber-200/80 dark:border-amber-800/60 space-y-2 shadow-xs">
                  <div class="flex items-center justify-between">
                    <span class="font-bold text-teal-700 dark:text-teal-400 text-sm flex items-center gap-1.5">
                      <span class="w-5 h-5 rounded-full bg-teal-100 dark:bg-teal-950 text-teal-700 dark:text-teal-300 flex items-center justify-center text-xs font-bold">2</span>
                      <span>現代通說：結合理論（雙劍合璧，截長補短）</span>
                    </span>
                    <span class="text-[10.5px] font-mono px-2 py-0.5 rounded bg-teal-50 dark:bg-teal-950 text-teal-600 dark:text-teal-400 font-bold">
                      我國刑法通說
                    </span>
                  </div>
                  <p class="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                    單一說法都有致命缺點（光算帳犯人回不去社會；光威嚇容易演變成酷刑亂世重典）。因此現代刑法採取<strong>結合理論</strong>：
                  </p>
                  <div class="p-3 rounded-xl bg-teal-50/70 dark:bg-teal-950/40 border border-teal-200 dark:border-teal-900 text-xs text-teal-900 dark:text-teal-200 leading-relaxed">
                    <strong>⚖️ 核心黃金公式：</strong><br/>
                    「<strong>以製造危害的罪責為上限（取自應報）＋ 在上限範圍內追求威嚇與教化預防（取自預防）</strong>」！法官絕對不能以「想嚇死大眾」為由，判超越他罪過的超重刑度！
                  </div>
                </div>

                <!-- 區塊 3: 雙軌制裁體系 -->
                <div class="p-4 rounded-2xl bg-white/95 dark:bg-slate-900/90 border border-amber-200/80 dark:border-amber-800/60 space-y-2 shadow-xs">
                  <div class="flex items-center justify-between">
                    <span class="font-bold text-indigo-700 dark:text-indigo-400 text-sm flex items-center gap-1.5">
                      <span class="w-5 h-5 rounded-full bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 flex items-center justify-center text-xs font-bold">3</span>
                      <span>雙軌制裁體系：「處罰」與「看病」的兩條平行線</span>
                    </span>
                    <span class="text-[10.5px] font-mono px-2 py-0.5 rounded bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 font-bold">
                      刑罰 vs. 保安處分
                    </span>
                  </div>
                  <p class="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                    流程圖中間的「雙軌體系」，說明了刑法處置壞事的兩套工具：
                  </p>
                  <ul class="list-disc list-inside space-y-1.5 text-xs text-slate-600 dark:text-slate-300">
                    <li><strong>軌道一【刑罰】（處罰罪人）：</strong>發動門檻最高！必須通過<strong>三階層審查（TB + R + S）</strong>，有懂事責任能力才能判刑。</li>
                    <li><strong>軌道二【保安處分】（治病防危）：</strong>門檻只要具備<strong>不法（TB + R）且具危險性</strong>即可啟動！就算精神崩潰阻卻罪責不罰，法院仍可宣告送精神醫院「監護強制治療」。</li>
                    <li><strong>兩軌可雙管齊下：</strong>例如吸毒犯可判坐牢（刑罰），同時宣告令入戒癮處所禁戒（保安處分），兩者絕非互斥！</li>
                  </ul>
                </div>

                <!-- 區塊 4: 刑罰思考四大步驟 -->
                <div class="p-4 rounded-2xl bg-white/95 dark:bg-slate-900/90 border border-amber-200/80 dark:border-amber-800/60 space-y-2 shadow-xs">
                  <div class="flex items-center justify-between">
                    <span class="font-bold text-purple-700 dark:text-purple-400 text-sm flex items-center gap-1.5">
                      <span class="w-5 h-5 rounded-full bg-purple-100 dark:bg-purple-950 text-purple-700 dark:text-purple-300 flex items-center justify-center text-xs font-bold">4</span>
                      <span>落地執行：法官決定關幾年的四大關卡</span>
                    </span>
                    <span class="text-[10.5px] font-mono px-2 py-0.5 rounded bg-purple-50 dark:bg-purple-950 text-purple-600 dark:text-purple-400 font-bold">
                      四大審查步驟
                    </span>
                  </div>
                  <p class="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                    流程圖最底部的四大步驟，就是本章後續一至四節要研讀的核心主線：
                  </p>
                  <div class="grid grid-cols-2 gap-2 text-xs pt-1">
                    <div class="p-2 rounded-lg bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">
                      <span class="font-bold text-slate-900 dark:text-white block">① 法定刑（找範圍）</span>
                      <span class="text-[11px] text-slate-500">法條寫的死範圍（第一節）</span>
                    </div>
                    <div class="p-2 rounded-lg bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">
                      <span class="font-bold text-slate-900 dark:text-white block">② 處斷刑（算加減）</span>
                      <span class="text-[11px] text-slate-500">累犯加重、自首減輕（第二節）</span>
                    </div>
                    <div class="p-2 rounded-lg bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">
                      <span class="font-bold text-slate-900 dark:text-white block">③ 宣告刑（定數字）</span>
                      <span class="text-[11px] text-slate-500">法官敲槌判具體刑期（第三節）</span>
                    </div>
                    <div class="p-2 rounded-lg bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">
                      <span class="font-bold text-slate-900 dark:text-white block">④ 執行刑（掏錢坐牢）</span>
                      <span class="text-[11px] text-slate-500">數罪合併定刑、緩刑（第四節）</span>
                    </div>
                  </div>
                </div>

              </div>

              <!-- 總結引導語 -->
              <div class="p-3.5 rounded-2xl bg-amber-100/70 dark:bg-amber-950/50 border border-amber-300 dark:border-amber-800 text-xs text-amber-950 dark:text-amber-200 flex items-center justify-between">
                <span>📌 <strong>圖解銜接提示：</strong>看完上方宏觀全景圖與白話導引後，緊接著下方<strong>第三大段</strong>即為<strong>原書第 2-27 頁的「刑罰理論思考步驟架構圖」</strong>，帶您進入具體量刑與執行的詳細操作！</span>
              </div>

            </div>
          </section>
          <!-- ==================== 三、原書架構圖解：刑罰理論的思考四大步驟 ==================== -->
          <section id="sec-p0ch3-steps-diagram" class="space-y-6 pt-2">
            <div class="flex items-center justify-between border-b border-slate-100 dark:border-white/[0.06] pb-2">
              <div class="flex items-center gap-3">
                <span class="w-2 h-6 rounded-full bg-purple-600"></span>
                <h3 class="text-lg sm:text-xl font-black text-slate-900 dark:text-white tracking-tight">
                  三、原書架構圖解：刑罰理論的思考四大步驟（教材第 2-27 頁）
                </h3>
              </div>
              <span class="text-[11px] font-mono px-2 py-0.5 rounded bg-purple-50 dark:bg-purple-950 text-purple-600 dark:text-purple-400 font-bold">
                教材第 2-27 頁 原書圖解
              </span>
            </div>

            <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              刑罰的產生過程可拆解成四大步驟，分別是「<strong>找尋基本範圍</strong>」、「<strong>調整處斷範圍</strong>」、「<strong>範圍內選定刑罰</strong>」以及「<strong>執行刑罰</strong>」，這四大步驟同時與<strong>法定刑、處斷刑、宣告刑與執行刑</strong>息息相關，亦即本章後續第一節至第四節之核心研讀主軸：
            </p>

            <!-- ==================== 刑罰思考四大步驟流程圖 (Draw.io 格式標準復刻) ==================== -->
            <div id="sec-p0ch3-steps-flowchart" class="p-4 sm:p-6 rounded-3xl bg-white dark:bg-slate-900 border-2 border-purple-200 dark:border-purple-800/80 shadow-sm space-y-4">
              
              <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 dark:border-slate-800 pb-3">
                <div class="space-y-1">
                  <div class="flex items-center gap-2">
                    <span class="text-xl">📊</span>
                    <h4 class="text-base sm:text-lg font-black text-slate-900 dark:text-white">
                      刑罰理論的思考四大步驟流程圖（Draw.io 格式復刻）
                    </h4>
                  </div>
                  <p class="text-xs text-slate-500 dark:text-slate-400">
                    完整復刻教材第 2-27 頁：第一大階段量定刑罰（法定刑 ➔ 處斷刑 ➔ 宣告刑）與第二大階段執行刑罰（執行刑）
                  </p>
                </div>

                <div class="flex items-center gap-2 shrink-0 flex-wrap">
                  <!-- 顯示寬度切換 (適配 / 100% 原圖) -->
                  <div class="flex items-center bg-slate-100 dark:bg-slate-800 p-0.5 rounded-xl text-xs font-semibold">
                    <button type="button" id="btnCh3StepsFitWidth" onclick="setCh3StepsImgMode('fit')"
                      class="px-2.5 py-1 rounded-lg bg-white dark:bg-slate-700 text-purple-600 dark:text-purple-400 shadow-xs transition-all font-bold cursor-pointer"
                      title="自動適配畫面欄位寬度">
                      適配頁面
                    </button>
                    <button type="button" id="btnCh3StepsOriginWidth" onclick="setCh3StepsImgMode('origin')"
                      class="px-2.5 py-1 rounded-lg text-slate-600 dark:text-slate-400 hover:text-slate-900 transition-all font-medium cursor-pointer"
                      title="展開為 100% 原始解析度大圖（支援水平橫移捲動）">
                      100% 原始大圖
                    </button>
                  </div>

                  <button type="button" onclick="openDiagramLightbox(document.getElementById('ch3StepsDiagramImg'), '刑罰理論的思考四大步驟體系流程圖', '教材第 2-27 頁')"
                    class="px-3 py-1.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer shadow-xs"
                    title="在全螢幕燈箱放大檢視">
                    <span>🔍</span>
                    <span>全螢幕檢視</span>
                  </button>
                </div>
              </div>

              <!-- 圖片呈現容器：純圖片、完全固定、禁止拖拽移動 (user-select: none, draggable: false) -->
              <div id="ch3StepsImgContainer" class="w-full rounded-2xl border border-slate-200 dark:border-slate-800 bg-white shadow-xs transition-all">
                <img 
                  id="ch3StepsDiagramImg"
                  src="images/part0-ch3-steps-diagram.svg" 
                  alt="刑罰理論的思考四大步驟流程圖 (教材第 2-27 頁)" 
                  draggable="false"
                  onclick="openDiagramLightbox(this, '刑罰理論的思考四大步驟體系流程圖', '教材第 2-27 頁')"
                  class="w-full h-auto block select-none pointer-events-auto cursor-zoom-in rounded-2xl transition-all"
                  style="-webkit-user-drag: none; user-select: none; -webkit-touch-callout: none;"
                  title="💡 點擊全螢幕放大檢視"
                />
              </div>

              <!-- 底部圖解說明 -->
              <div class="flex flex-wrap items-center justify-between gap-2 pt-1 text-[11.5px] text-slate-500 dark:text-slate-400">
                <div class="flex items-center gap-2">
                  <span class="w-2 h-2 rounded-full bg-purple-500"></span>
                  <span>💡 提示：向量高解析圖檔！點擊圖片或「全螢幕檢視」即可開燈箱，亦可切換「100% 原始大圖」</span>
                </div>
                <div class="text-[10.5px] font-mono text-purple-600 dark:text-purple-400 font-bold">
                  FOUR STEPS • HIGH RESOLUTION SVG
                </div>
              </div>

            </div>

            <!-- ==================== 四大步驟白話文速讀專區 ==================== -->
            <div id="sec-p0ch3-steps-guide" class="p-5 sm:p-7 rounded-3xl bg-gradient-to-br from-purple-50/90 via-indigo-50/50 to-pink-50/50 dark:from-purple-950/30 dark:via-indigo-950/20 dark:to-pink-950/20 border-2 border-purple-300 dark:border-purple-700/80 shadow-sm space-y-5">
              
              <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-purple-200 dark:border-purple-800/60 pb-3">
                <div class="flex items-center gap-2.5">
                  <span class="text-2xl animate-bounce">🛒</span>
                  <div>
                    <span class="text-[11px] font-mono font-bold text-purple-700 dark:text-purple-400 uppercase tracking-wider block">
                      PLAIN-LANGUAGE SHOPPING METAPHOR
                    </span>
                    <h4 class="text-base sm:text-lg font-black text-purple-950 dark:text-purple-200">
                      【白話文專區】刑罰思考四大步驟：法官怎麼決定把你關幾年？——「量刑大賣場購物」秒懂拆解！
                    </h4>
                  </div>
                </div>
                <span class="px-2.5 py-1 rounded-full bg-purple-600 text-white font-mono font-bold text-xs shadow-xs shrink-0 self-start sm:self-auto">
                  超生動購物結帳比喻
                </span>
              </div>

              <p class="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                想像法官在決定一個人要被關多久時，就像走進一家<strong>「量刑大賣場」</strong>挑選商品的結帳過程：
              </p>

              <!-- 4 步驟大賣場購物比喻卡片網格 -->
              <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs sm:text-sm">
                
                <!-- 1. 法定刑 -->
                <div class="p-3.5 rounded-2xl bg-white/95 dark:bg-slate-900/90 border border-purple-200 dark:border-purple-800/60 space-y-1.5 shadow-xs">
                  <div class="flex items-center justify-between">
                    <span class="text-indigo-700 dark:text-indigo-400 font-black flex items-center gap-1.5">
                      <span class="w-5 h-5 rounded-full bg-indigo-100 dark:bg-indigo-950 text-indigo-800 dark:text-indigo-200 flex items-center justify-center text-xs font-bold">1</span>
                      <span>法定刑（架上原價標籤）</span>
                    </span>
                  </div>
                  <div class="text-[11px] font-mono text-indigo-600 font-bold">立法院貼好的公定價</div>
                  <p class="text-xs text-slate-700 dark:text-slate-200 leading-relaxed font-normal">
                    <strong>法律條文寫的死範圍！</strong> 就像大賣場商品標籤上印好的死價格。例如殺人罪（§ 271）「死刑、無期徒刑或 10 年以上有期徒刑」。這是所有思考的原始起點。
                  </p>
                </div>

                <!-- 2. 處斷刑 -->
                <div class="p-3.5 rounded-2xl bg-white/95 dark:bg-slate-900/90 border border-purple-200 dark:border-purple-800/60 space-y-1.5 shadow-xs">
                  <div class="flex items-center justify-between">
                    <span class="text-purple-700 dark:text-purple-400 font-black flex items-center gap-1.5">
                      <span class="w-5 h-5 rounded-full bg-purple-100 dark:bg-purple-950 text-purple-800 dark:text-purple-200 flex items-center justify-center text-xs font-bold">2</span>
                      <span>處斷刑（折扣或加價活動）</span>
                    </span>
                  </div>
                  <div class="text-[11px] font-mono text-purple-600 font-bold">加減計算後的全新浮動區間</div>
                  <p class="text-xs text-slate-700 dark:text-slate-200 leading-relaxed font-normal">
                    <strong>加減刑後的全新浮動範圍！</strong> 如果是累犯要加價（加重本刑至 1/2），如果有自首要打折（得減輕其刑）。加加減減後，算出一個法官可以裁量的「新區間」。
                  </p>
                </div>

                <!-- 3. 宣告刑 -->
                <div class="p-3.5 rounded-2xl bg-white/95 dark:bg-slate-900/90 border border-purple-200 dark:border-purple-800/60 space-y-1.5 shadow-xs">
                  <div class="flex items-center justify-between">
                    <span class="text-emerald-700 dark:text-emerald-400 font-black flex items-center gap-1.5">
                      <span class="w-5 h-5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-200 flex items-center justify-center text-xs font-bold">3</span>
                      <span>宣告刑（結帳發票定案）</span>
                    </span>
                  </div>
                  <div class="text-[11px] font-mono text-emerald-600 font-bold">敲定單一具體數字印在判決</div>
                  <p class="text-xs text-slate-700 dark:text-slate-200 leading-relaxed font-normal">
                    <strong>法官挑選出具體數字！</strong> 法官在處斷刑範圍內，依 § 57 審酌犯人動機、態度，敲下法槌：「判處有期徒刑 12 年」！這就是印在判決主文上的宣告刑。
                  </p>
                </div>

                <!-- 4. 執行刑 -->
                <div class="p-3.5 rounded-2xl bg-white/95 dark:bg-slate-900/90 border border-purple-200 dark:border-purple-800/60 space-y-1.5 shadow-xs">
                  <div class="flex items-center justify-between">
                    <span class="text-amber-700 dark:text-amber-300 font-black flex items-center gap-1.5">
                      <span class="w-5 h-5 rounded-full bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-200 flex items-center justify-center text-xs font-bold">4</span>
                      <span>執行刑（真正從錢包掏錢）</span>
                    </span>
                  </div>
                  <div class="text-[11px] font-mono text-amber-600 font-bold">檢察官負責具體落實執行</div>
                  <p class="text-xs text-slate-700 dark:text-slate-200 leading-relaxed font-normal">
                    <strong>最後實際怎麼執行！</strong> 如果犯好幾條罪（數罪併罰定執行刑），或者能不能易科罰金一天一千塊、能不能宣告緩刑不必進去關，由檢察官具體指揮落實。
                  </p>
                </div>

              </div>

              <!-- 四大概念精華比對表 -->
              <div class="grid grid-cols-1 sm:grid-cols-4 gap-2.5 pt-1 text-xs">
                <div class="p-3 rounded-xl bg-white/90 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 space-y-1">
                  <span class="font-bold text-slate-900 dark:text-white block">1. 法定刑（起點）</span>
                  <span class="text-slate-500 text-[11px] block">立法院立法明定於刑法各分則條文之抽象刑罰範圍。</span>
                </div>
                <div class="p-3 rounded-xl bg-white/90 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 space-y-1">
                  <span class="font-bold text-slate-900 dark:text-white block">2. 處斷刑（調幅）</span>
                  <span class="text-slate-500 text-[11px] block">依總則法定加重（如累犯）或減輕（如自首）調整後之範圍。</span>
                </div>
                <div class="p-3 rounded-xl bg-white/90 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 space-y-1">
                  <span class="font-bold text-slate-900 dark:text-white block">3. 宣告刑（定槌）</span>
                  <span class="text-slate-500 text-[11px] block">法官依 § 57 量刑基準，挑選出具體刑期並於主文宣告。</span>
                </div>
                <div class="p-3 rounded-xl bg-white/90 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 space-y-1">
                  <span class="font-bold text-slate-900 dark:text-white block">4. 執行刑（落地）</span>
                  <span class="text-slate-500 text-[11px] block">數罪宣告刑合併定執行刑，或移送檢察官具體落實執行。</span>
                </div>
              </div>

            </div>
          </section>

          <!-- ==================== Chapter Bottom Pagination: 第三章底部雙向導航 ==================== -->
          <div class="pt-8 border-t border-slate-200 dark:border-white/[0.08] grid grid-cols-1 sm:grid-cols-2 gap-4">
            <button onclick="switchView('part0-ch2-sec2')" class="group p-4 rounded-2xl border border-slate-200 dark:border-white/[0.08] hover:border-indigo-500/40 bg-white dark:bg-[#111726] text-left transition-all hover:-translate-y-0.5 shadow-sm hover:shadow-md flex items-center gap-3 cursor-pointer">
              <div class="w-9 h-9 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 group-hover:bg-indigo-50 dark:group-hover:bg-indigo-950 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 flex items-center justify-center text-sm font-bold shrink-0 transition-colors">
                ←
              </div>
              <div class="min-w-0">
                <span class="text-[11px] text-slate-400 font-mono block">上一單元 (教材第 2-14 ～ 2-24 頁)</span>
                <span class="text-xs font-bold text-slate-800 dark:text-slate-200 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors truncate block">
                  第二章 第二節 刑法之解釋方法
                </span>
              </div>
            </button>

            <button onclick="switchView('part0-ch3-sec1')" class="group p-4 rounded-2xl border border-indigo-500/40 hover:border-indigo-500 bg-gradient-to-br from-indigo-50/50 to-blue-50/30 dark:from-indigo-950/30 dark:to-blue-950/20 text-right transition-all hover:-translate-y-0.5 shadow-sm hover:shadow-md flex items-center justify-between gap-3 cursor-pointer">
              <div class="min-w-0 text-left">
                <span class="text-[11px] text-indigo-700 dark:text-indigo-400 font-mono block font-bold">下一單元・進入第一節</span>
                <span class="text-xs font-extrabold text-slate-900 dark:text-white group-hover:text-indigo-700 dark:group-hover:text-indigo-400 transition-colors truncate block">
                  第一節 刑罰的種類——兼談法定刑 (第 2-27～2-29 頁) →
                </span>
              </div>
              <div class="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 to-indigo-600 text-white flex items-center justify-center text-sm font-bold shrink-0 group-hover:scale-105 transition-transform shadow-md shadow-indigo-500/30">
                ⚖️
              </div>
            </button>
          </div>

        </div>
`;
