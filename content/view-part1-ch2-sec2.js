/**
 * view-part1-ch2-sec2.js
 * 第一篇 第二章 第二節 變體要素——兼論純正與不純正不作為犯（教材第 3-12 ～ 3-13 頁 全節完結旗艦版）
 * 嚴格遵循 AGENTS.md 最高行為憲法規範：
 * 1. 逐字精準核對課本原文（第 3-12 ～ 3-13 頁 零錯字、零腦補）
 * 2. 案例 2-5 ～ 2-6 嚴格落實「五位一體法學劇院」標準
 * 3. 嚴格單欄垂直上下堆疊排版（Strict Vertical Stacking）
 * 4. 重點文字採用「純紅底線」規範（No Aggressive Red Text）
 * 5. 不純正不作為犯「等價條款」與基本要素微調體系高質感圖解
 * 6. 犬系四大天王導師法定圖片比例與 2026 最新法條動態定錨
 */

window.APP_VIEWS = window.APP_VIEWS || {};
window.APP_VIEWS['viewPart1Ch2Sec2'] = window.APP_VIEWS['part1Ch2Sec2'] = window.APP_VIEWS['part1-ch2-sec2'] = `
        <!-- VIEW: 第一篇 第二章 第二節 變體要素——兼論純正與不純正不作為犯 (教材第 3-12 ～ 3-13 頁) -->
        <div id="viewPart1Ch2Sec2" class="fade-enter hidden space-y-8">
          
          <!-- 麵包屑導航 -->
          <div class="flex items-center justify-between gap-4 border-b border-slate-200/80 dark:border-white/10 pb-3">
            <nav class="flex items-center gap-2 text-xs font-medium text-slate-500 dark:text-slate-400 flex-wrap">
              <button onclick="switchView('part1')" class="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">第一篇</button>
              <span>/</span>
              <button onclick="switchView('part1-ch2-sec1')" class="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">第二章 第一節 基本要素</button>
              <span>/</span>
              <span class="text-blue-600 dark:text-blue-400 font-bold">第二章 第二節 變體要素</span>
            </nav>
            <button onclick="switchView('part1-ch2-sec1')" class="text-xs text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 flex items-center gap-1 transition-colors shrink-0 font-bold cursor-pointer">
              <span>← 返回上一節：第一節 基本要素</span>
            </button>
          </div>

          <!-- 章節大標題 Banner -->
          <div class="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-indigo-700 via-purple-800 to-slate-900 text-white shadow-lg space-y-3 relative overflow-hidden border border-purple-400/40">
            <div class="absolute -right-8 -bottom-8 w-48 h-48 bg-white/10 rounded-full blur-2xl pointer-events-none"></div>
            
            <div class="flex items-center gap-2 text-xs font-mono text-purple-200 font-bold uppercase tracking-wider">
              <span>PART 1 • CHAPTER 2 • SECTION 2</span>
              <span>•</span>
              <span class="px-2 py-0.5 rounded-full bg-white/20 text-white text-[11px]">教材第 3-12 ～ 3-13 頁 全節完結</span>
            </div>

            <h2 class="text-2xl sm:text-3xl md:text-4xl font-serif font-black tracking-tight text-white leading-tight">
              第二節 變體要素<br>
              <span class="text-xl sm:text-2xl font-sans font-bold text-purple-200">——兼論純正與不純正不作為犯</span>
            </h2>

            <p class="text-sm sm:text-base text-purple-100 leading-relaxed font-serif pt-1 max-w-3xl">
              構成要件要素的微調奧秘！深究<span class="underline decoration-amber-300 decoration-2 underline-offset-4 font-bold text-white">純正不作為犯</span>（文義上只能用不作為達成）與<span class="underline decoration-amber-300 decoration-2 underline-offset-4 font-bold text-white">不純正不作為犯</span>（文義上兼容作為與不作為）之分野，掌握刑法第 15 條<span class="underline decoration-amber-300 decoration-2 underline-offset-4 font-bold text-white">等價條款</span>與基本要素轉變公式。
            </p>
          </div>

          <!-- ==================== 一、不作為犯文義判準與兩大類型 (教材第 3-12 頁) ==================== -->
          <section id="sec-p1ch2-sec2-intro" class="space-y-6 pt-2">
            <div class="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3">
              <div class="flex items-center gap-3">
                <span class="w-2.5 h-6 rounded-full bg-purple-600"></span>
                <h3 class="text-lg sm:text-xl font-black text-slate-900 dark:text-white tracking-tight">
                  一、不作為犯之文義判準：純正 vs 不純正不作為犯（教材第 3-12 頁）
                </h3>
              </div>
              <span class="text-xs font-mono font-bold px-2.5 py-1 rounded-lg bg-purple-50 dark:bg-purple-950 text-purple-600 dark:text-purple-400 border border-purple-200 dark:border-purple-800">
                p. 3-12 原文
              </span>
            </div>

            <!-- 教材原文逐字卡片 -->
            <div class="rounded-2xl bg-white dark:bg-[#121827] border-l-8 border-l-purple-600 border border-slate-200/80 dark:border-white/10 p-5 sm:p-6 shadow-xs space-y-3">
              <div class="flex items-center justify-between text-xs font-bold text-slate-500 dark:text-slate-400 border-b border-slate-100 dark:border-slate-800 pb-2">
                <span class="flex items-center gap-2">
                  <span class="text-base">📖</span>
                  <span>教材原文精讀 • 不作為犯的分類標準</span>
                </span>
                <span class="font-mono text-purple-600 dark:text-purple-400">第 3-12 頁</span>
              </div>
              <p class="font-serif text-slate-800 dark:text-slate-200 text-base sm:text-lg leading-relaxed indent-8 text-justify">
                不排除既存風險乃不作為，已如上所述，惟不作為尚須觀察法條對構成要件行為的描述方式，<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">若文義上只能用不作為達成，乃純正不作為犯</span>，<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">若文義上兼容作為與不作為，係不純正不作為犯</span>。刑法分則的所有犯罪都可以拆解成五大構成要件要素，僅遇到不純正不作為犯時，必須對基本要素的內容作微調。
              </p>
            </div>
          </section>

          <!-- ==================== 案例 2-5 凱道抗議聚眾不解散案 五位一體法學劇院 ==================== -->
          <div id="case-2-5" class="rounded-3xl border-2 border-indigo-400/80 dark:border-indigo-700/80 bg-white dark:bg-[#121827] shadow-md overflow-hidden space-y-0">
            
            <!-- 案例標題 Bar -->
            <div class="p-4 sm:p-5 bg-gradient-to-r from-indigo-700 via-blue-700 to-indigo-800 text-white flex items-center justify-between gap-3">
              <div class="flex items-center gap-2.5">
                <span class="w-8 h-8 rounded-xl bg-white/20 text-white flex items-center justify-center font-bold text-sm shadow-xs">⚔️</span>
                <div>
                  <span class="text-[11px] font-mono text-indigo-200 font-bold tracking-wider uppercase block">CASE STUDY 2-5 • 純正不作為犯之典型</span>
                  <h4 class="text-base sm:text-lg font-bold text-white tracking-tight">案例 2-5 凱道聚眾舉牌不解散案（教材第 3-12 頁）</h4>
                </div>
              </div>
              <span class="text-xs font-mono font-bold px-2 py-0.5 rounded-full bg-white/20 text-white shrink-0">p. 3-12</span>
            </div>

            <!-- 案例事實與問題導引 -->
            <div class="p-5 sm:p-6 bg-slate-50/70 dark:bg-slate-900/50 border-b border-slate-200 dark:border-slate-800 space-y-3 font-serif">
              <div class="p-4 rounded-xl bg-white dark:bg-[#151c2d] border-l-4 border-l-indigo-600 shadow-2xs space-y-2">
                <div class="text-xs font-sans font-bold text-indigo-700 dark:text-indigo-300">【案件事實】</div>
                <p class="text-slate-800 dark:text-slate-200 text-sm sm:text-base leading-relaxed">
                  甲臨時在凱道上揪人於總統府外抗議，警察舉牌三次要求解散，大夥鳥都不鳥。
                </p>
              </div>
              <div class="p-4 rounded-xl bg-indigo-50/60 dark:bg-indigo-950/30 border border-indigo-200/80 dark:border-indigo-900/40 text-xs sm:text-sm text-slate-700 dark:text-slate-300 space-y-1.5 leading-relaxed">
                <div class="font-sans font-bold text-indigo-900 dark:text-indigo-200">【課本問題導引逐字】</div>
                <p>甲以消極不作為該當聚眾不解散罪（§ 149）的不解散行為，且文義上不解散行為限於用不作為的方式達成，<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">乃純正不作為犯</span>。</p>
              </div>
            </div>

            <!-- 五位一體法學劇院主體 (單欄垂直堆疊) -->
            <div class="p-5 sm:p-6 space-y-4">
              
              <!-- 1. 言詞辯論法庭對決區域 -->
              <div class="rounded-2xl p-4 sm:p-5 bg-gradient-to-br from-slate-100 to-indigo-50/50 dark:from-slate-900 dark:to-[#171a2e] border border-slate-300 dark:border-slate-700 space-y-3">
                <div class="flex items-center justify-between border-b border-slate-200 dark:border-slate-700 pb-2">
                  <span class="font-sans font-black text-xs sm:text-sm text-slate-900 dark:text-white flex items-center gap-1.5">
                    <span>🏛️</span>
                    <span>法庭言詞攻防對決現場</span>
                  </span>
                  <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300">#純正不作為犯</span>
                </div>
                <!-- 公訴赤狐 -->
                <div class="flex gap-3 items-start">
                  <div class="w-9 h-9 rounded-xl overflow-hidden border border-rose-400 shrink-0">
                    <img src="images/prosecutor_fox.jpg" alt="公訴檢察官赤狐女律師" class="w-full h-full object-cover" style="object-position: center 20%; transform: scale(1.35);">
                  </div>
                  <div class="flex-1 bg-rose-50 dark:bg-rose-950/40 p-3 rounded-xl border border-rose-200 dark:border-rose-900/40 text-xs sm:text-sm text-slate-800 dark:text-slate-200">
                    <strong class="text-rose-700 dark:text-rose-400 block mb-1">公訴檢察官赤狐女律師：</strong>
                    「警方當場依法連續舉牌三次下令解散，被告甲身為號召首謀，率眾頑抗滯留現場不走，消極不解散之構成要件該當，且條文已將處罰要件限制在『不解散』，屬最典型的純正不作為犯！」
                  </div>
                </div>
                <!-- 金毛辯護 -->
                <div class="flex gap-3 items-start">
                  <div class="w-9 h-9 rounded-xl overflow-hidden border border-amber-400 shrink-0">
                    <img src="images/golden_case_attorney.jpg" alt="金毛辯護大律師" class="w-full h-full object-cover" style="object-position: center 20%; transform: scale(1.35);">
                  </div>
                  <div class="flex-1 bg-amber-50 dark:bg-amber-950/40 p-3 rounded-xl border border-amber-200 dark:border-amber-900/40 text-xs sm:text-sm text-slate-800 dark:text-slate-200">
                    <strong class="text-amber-800 dark:text-amber-300 block mb-1">金毛首席辯護大律師：</strong>
                    「辯護方同意本罪定性為純正不作為犯！但請審判長明察，正因其為純正不作為犯，法條本身已直接要求『不作為』，故無須另外檢驗刑法第 15 條之保證人地位！辯護人將全力爭辯警方舉牌程序是否合法及現場是否給予合理撤離時間！」
                  </div>
                </div>
              </div>

              <!-- 2. 柴柴名師生活解碼 -->
              <div class="rounded-2xl p-4 sm:p-5 bg-amber-50/70 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900/40 space-y-2">
                <div class="flex items-center gap-2 font-black text-amber-900 dark:text-amber-300 text-xs sm:text-sm">
                  <div class="w-6 h-6 rounded-lg overflow-hidden border border-amber-400 shrink-0">
                    <img src="images/shiba_law_professor.jpg" alt="柴柴" class="w-full h-full object-cover" style="object-position: center 20%; transform: scale(1.38);">
                  </div>
                  <span>🐾 柴柴法學教授 • 白話生活大解碼</span>
                </div>
                <p class="font-serif text-slate-700 dark:text-slate-300 text-xs sm:text-sm leading-relaxed">
                  同學們，區分「純正」和「不純正」，只要看分則法條是怎麼寫的！如果法條本身就規定『你不做某件事就罰你』，文義上只能用消極擺爛來觸法，這就叫<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">純正不作為犯</span>（例如：不解散、不退去、不申報）。這類罪名不需要再去算什麼保證人地位，因為法律直接把不做的義務寫進條文裡了！
                </p>
              </div>

              <!-- 3. 金毛大律師攻防點評 (單欄堆疊) -->
              <div class="rounded-2xl p-4 sm:p-5 bg-blue-50/70 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-900/40 space-y-2">
                <div class="flex items-center gap-2 font-black text-blue-900 dark:text-blue-300 text-xs sm:text-sm">
                  <div class="w-6 h-6 rounded-lg overflow-hidden border border-blue-400 shrink-0">
                    <img src="images/golden_case_attorney.jpg" alt="金毛" class="w-full h-full object-cover" style="object-position: center 20%; transform: scale(1.35);">
                  </div>
                  <span>⚖️ 金毛大律師 • 訴訟抗辯關鍵</span>
                </div>
                <p class="font-serif text-slate-700 dark:text-slate-300 text-xs sm:text-sm leading-relaxed">
                  國考與實戰答題警示：純正不作為犯是「分則明文規定的不作為」，直接審查分則法定要件（如三次舉牌命令、解散之可能性、消極不退去）。切忌畫蛇添足去引刑法第 15 條檢驗保證人地位，那是不純正不作為犯專屬的！
                </p>
              </div>

              <!-- 4. 德牧法規雷達查核 (單欄堆疊) -->
              <div class="rounded-2xl p-4 sm:p-5 bg-emerald-50/70 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-900/40 space-y-2">
                <div class="flex items-center gap-2 font-black text-emerald-900 dark:text-emerald-300 text-xs sm:text-sm">
                  <div class="w-6 h-6 rounded-lg overflow-hidden border border-emerald-400 shrink-0">
                    <img src="images/shepherd_law_inspector.jpg" alt="德牧" class="w-full h-full object-cover" style="object-position: center 15%; transform: scale(1.4);">
                  </div>
                  <span>🛡️ 德牧法規巡查官 • 法規雷達查核</span>
                </div>
                <p class="font-serif text-slate-700 dark:text-slate-300 text-xs sm:text-sm leading-relaxed">
                  【法規雷達】刑法第 149 條公然聚眾不解散罪（109 年修法改為「在公共場所或公眾得出入之場所聚集三人以上」），受該管公務員解散命令三次以上而不解散者，處罰在場助勢之人與首謀。行為人消極不散去，即該當本罪。
                </p>
              </div>

              <!-- 5. 邊牧審判長終審裁定卡片 (星空金邊) -->
              <div class="rounded-2xl p-5 bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white border-2 border-amber-400/90 shadow-lg space-y-3">
                <div class="flex items-center justify-between border-b border-amber-400/30 pb-2">
                  <div class="flex items-center gap-2">
                    <div class="w-7 h-7 rounded-lg overflow-hidden border border-amber-400 shrink-0">
                      <img src="images/border_collie_chief_judge.jpg" alt="邊牧審判長" class="w-full h-full object-cover" style="object-position: center 25%; transform: scale(1.35);">
                    </div>
                    <span class="font-black text-amber-300 text-sm">👨‍⚖️ 邊牧首席審判長 • 終審裁定一槌定音</span>
                  </div>
                  <span class="text-xs text-amber-400 font-bold">#法槌一敲誰與爭鋒</span>
                </div>
                <p class="text-xs sm:text-sm font-serif text-slate-200 leading-relaxed">
                  🔨 <strong>【定讞結論】</strong>甲以消極不作為該當聚眾不解散罪（§ 149）之不解散要件，文義上限於用不作為方式達成，定性為純正不作為犯。
                </p>
                <div class="p-2.5 rounded-lg bg-white/5 border border-white/10 text-[11px] text-slate-300">
                  📅 <strong>2026 最新法條動態備註</strong>：刑法第 149 條與第 150 條妨害秩序罪章於近年經大幅翻修，將原先抽象之「公然聚眾」明確量化為「聚集三人以上」，並提高罰金與刑度，國考考生作答時應以現行法要件論述！
                </div>
              </div>

            </div>
          </div>

          <!-- ==================== 案例 2-6 單親媽媽不哺乳餓死嬰兒案 五位一體法學劇院 ==================== -->
          <div id="case-2-6" class="rounded-3xl border-2 border-rose-400/80 dark:border-rose-700/80 bg-white dark:bg-[#121827] shadow-md overflow-hidden space-y-0">
            
            <!-- 案例標題 Bar -->
            <div class="p-4 sm:p-5 bg-gradient-to-r from-rose-700 via-purple-700 to-rose-800 text-white flex items-center justify-between gap-3">
              <div class="flex items-center gap-2.5">
                <span class="w-8 h-8 rounded-xl bg-white/20 text-white flex items-center justify-center font-bold text-sm shadow-xs">⚔️</span>
                <div>
                  <span class="text-[11px] font-mono text-rose-200 font-bold tracking-wider uppercase block">CASE STUDY 2-6 • 不純正不作為犯之典型</span>
                  <h4 class="text-base sm:text-lg font-bold text-white tracking-tight">案例 2-6 單親媽媽不哺乳餓死親生嬰兒案（教材第 3-12 頁）</h4>
                </div>
              </div>
              <span class="text-xs font-mono font-bold px-2 py-0.5 rounded-full bg-white/20 text-white shrink-0">p. 3-12</span>
            </div>

            <!-- 案例事實與問題導引 -->
            <div class="p-5 sm:p-6 bg-slate-50/70 dark:bg-slate-900/50 border-b border-slate-200 dark:border-slate-800 space-y-3 font-serif">
              <div class="p-4 rounded-xl bg-white dark:bg-[#151c2d] border-l-4 border-l-rose-600 shadow-2xs space-y-2">
                <div class="text-xs font-sans font-bold text-rose-700 dark:text-rose-300">【案件事實】</div>
                <p class="text-slate-800 dark:text-slate-200 text-sm sm:text-base leading-relaxed">
                  單親媽媽甲為了甩掉拖油瓶乙再嫁豪門，故意用不哺乳的方式讓乙活活餓死。
                </p>
              </div>
              <div class="p-4 rounded-xl bg-rose-50/60 dark:bg-rose-950/30 border border-rose-200/80 dark:border-rose-900/40 text-xs sm:text-sm text-slate-700 dark:text-slate-300 space-y-1.5 leading-relaxed">
                <div class="font-sans font-bold text-rose-900 dark:text-rose-200">【課本問題導引逐字】</div>
                <p>甲以消極不作為該當殺人罪的殺人行為，但文義上殺人行為兼含作為與不作為，<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">乃不純正不作為犯</span>。</p>
              </div>
            </div>

            <!-- 五位一體法學劇院主體 (單欄垂直堆疊) -->
            <div class="p-5 sm:p-6 space-y-4">
              
              <!-- 1. 言詞辯論法庭對決區域 -->
              <div class="rounded-2xl p-4 sm:p-5 bg-gradient-to-br from-slate-100 to-rose-50/50 dark:from-slate-900 dark:to-[#22121e] border border-slate-300 dark:border-slate-700 space-y-3">
                <div class="flex items-center justify-between border-b border-slate-200 dark:border-slate-700 pb-2">
                  <span class="font-sans font-black text-xs sm:text-sm text-slate-900 dark:text-white flex items-center gap-1.5">
                    <span>🏛️</span>
                    <span>法庭言詞攻防對決現場</span>
                  </span>
                  <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-rose-100 dark:bg-rose-900 text-rose-700 dark:text-rose-300">#不純正不作為殺人</span>
                </div>
                <!-- 公訴赤狐 -->
                <div class="flex gap-3 items-start">
                  <div class="w-9 h-9 rounded-xl overflow-hidden border border-rose-400 shrink-0">
                    <img src="images/prosecutor_fox.jpg" alt="公訴檢察官赤狐女律師" class="w-full h-full object-cover" style="object-position: center 20%; transform: scale(1.35);">
                  </div>
                  <div class="flex-1 bg-rose-50 dark:bg-rose-950/40 p-3 rounded-xl border border-rose-200 dark:border-rose-900/40 text-xs sm:text-sm text-slate-800 dark:text-slate-200">
                    <strong class="text-rose-700 dark:text-rose-400 block mb-1">公訴檢察官赤狐女律師：</strong>
                    「被告甲身為生母，基於民法親權具有絕對的保護者保證地位！其消極不餵奶活活餓死親骨肉，在法律評價上與拿刀砍殺嬰兒完全等價，應成立刑法第 271 條第 1 項殺人既遂罪（不純正不作為犯）！」
                  </div>
                </div>
                <!-- 金毛辯護 -->
                <div class="flex gap-3 items-start">
                  <div class="w-9 h-9 rounded-xl overflow-hidden border border-amber-400 shrink-0">
                    <img src="images/golden_case_attorney.jpg" alt="金毛辯護大律師" class="w-full h-full object-cover" style="object-position: center 20%; transform: scale(1.35);">
                  </div>
                  <div class="flex-1 bg-amber-50 dark:bg-amber-950/40 p-3 rounded-xl border border-amber-200 dark:border-amber-900/40 text-xs sm:text-sm text-slate-800 dark:text-slate-200">
                    <strong class="text-amber-800 dark:text-amber-300 block mb-1">金毛首席辯護大律師：</strong>
                    「辯護人確認甲之定性為不純正不作為犯。但依刑法第 15 條第 2 項規定，不純正不作為犯之處罰『得減輕其刑』，且需深究其產後身心憂鬱狀態是否欠缺期待可能性，請合議庭慎思量刑！」
                  </div>
                </div>
              </div>

              <!-- 2. 柴柴名師生活解碼 -->
              <div class="rounded-2xl p-4 sm:p-5 bg-amber-50/70 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900/40 space-y-2">
                <div class="flex items-center gap-2 font-black text-amber-900 dark:text-amber-300 text-xs sm:text-sm">
                  <div class="w-6 h-6 rounded-lg overflow-hidden border border-amber-400 shrink-0">
                    <img src="images/shiba_law_professor.jpg" alt="柴柴" class="w-full h-full object-cover" style="object-position: center 20%; transform: scale(1.38);">
                  </div>
                  <span>🐾 柴柴法學教授 • 白話生活大解碼</span>
                </div>
                <p class="font-serif text-slate-700 dark:text-slate-300 text-xs sm:text-sm leading-relaxed">
                  殺人罪條文只寫『殺人者』，你可以拿刀砍（作為），也可以故意不餵奶讓他餓死（不作為），這就叫<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">不純正不作為犯</span>！但是大家想一想，如果路邊隨便一個陌生人看到嬰兒餓肚子不餵奶，也會成立殺人罪嗎？當然不會！只有具備特別義務的『保證人』（親生母親），消極不餵奶才能被當成拿刀殺人！
                </p>
              </div>

              <!-- 3. 金毛大律師攻防點評 (單欄堆疊) -->
              <div class="rounded-2xl p-4 sm:p-5 bg-blue-50/70 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-900/40 space-y-2">
                <div class="flex items-center gap-2 font-black text-blue-900 dark:text-blue-300 text-xs sm:text-sm">
                  <div class="w-6 h-6 rounded-lg overflow-hidden border border-blue-400 shrink-0">
                    <img src="images/golden_case_attorney.jpg" alt="金毛" class="w-full h-full object-cover" style="object-position: center 20%; transform: scale(1.35);">
                  </div>
                  <span>⚖️ 金毛大律師 • 訴訟抗辯關鍵</span>
                </div>
                <p class="font-serif text-slate-700 dark:text-slate-300 text-xs sm:text-sm leading-relaxed">
                  審查不純正不作為犯，法庭核心在於「作為可能性」與「假設因果關係」！必須證明：如果甲及時餵乳，乙之死亡結果在客觀上「幾乎可確定不會發生」。若嬰兒本身已有先天致命疾患，縱餵乳亦難挽回生命者，因果關係即斷裂，不成立殺人既遂！
                </p>
              </div>

              <!-- 4. 德牧法規雷達查核 (單欄堆疊) -->
              <div class="rounded-2xl p-4 sm:p-5 bg-emerald-50/70 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-900/40 space-y-2">
                <div class="flex items-center gap-2 font-black text-emerald-900 dark:text-emerald-300 text-xs sm:text-sm">
                  <div class="w-6 h-6 rounded-lg overflow-hidden border border-emerald-400 shrink-0">
                    <img src="images/shepherd_law_inspector.jpg" alt="德牧" class="w-full h-full object-cover" style="object-position: center 15%; transform: scale(1.4);">
                  </div>
                  <span>🛡️ 德牧法規巡查官 • 法規雷達查核</span>
                </div>
                <p class="font-serif text-slate-700 dark:text-slate-300 text-xs sm:text-sm leading-relaxed">
                  【法規雷達】刑法第 15 條第 1 項規定：「對於一定結果之發生，法律上有防止之義務，能防止而不防止者，與因自己行為致該結果發生者同。」生母對親生幼兒依民法第 1084 條具保護教養義務，為依法令之保證人。
                </p>
              </div>

              <!-- 5. 邊牧審判長終審裁定卡片 (星空金邊) -->
              <div class="rounded-2xl p-5 bg-gradient-to-br from-slate-900 via-rose-950 to-slate-900 text-white border-2 border-amber-400/90 shadow-lg space-y-3">
                <div class="flex items-center justify-between border-b border-amber-400/30 pb-2">
                  <div class="flex items-center gap-2">
                    <div class="w-7 h-7 rounded-lg overflow-hidden border border-amber-400 shrink-0">
                      <img src="images/border_collie_chief_judge.jpg" alt="邊牧審判長" class="w-full h-full object-cover" style="object-position: center 25%; transform: scale(1.35);">
                    </div>
                    <span class="font-black text-amber-300 text-sm">👨‍⚖️ 邊牧首席審判長 • 終審裁定一槌定音</span>
                  </div>
                  <span class="text-xs text-amber-400 font-bold">#法槌一敲誰與爭鋒</span>
                </div>
                <p class="text-xs sm:text-sm font-serif text-slate-200 leading-relaxed">
                  🔨 <strong>【定讞結論】</strong>甲具備保證人地位，故意不為防止死亡之作為致乙餓死，成立刑法第 271 條第 1 項殺人既遂罪（不純正不作為犯）。
                </p>
                <div class="p-2.5 rounded-lg bg-white/5 border border-white/10 text-[11px] text-slate-300">
                  📅 <strong>2026 最新法條動態備註</strong>：刑法第 272 條殺直系血親尊親屬罪雖有加重規定，但殺直系血親「卑親屬」並無加重，適用普通殺人罪；惟若涉虐待兒童致死，得適用刑法第 286 條妨害幼童發育罪之加重規定，國考答題應注意競合評價！
                </div>
              </div>

            </div>
          </div>

          <!-- 【作者叮嚀】純正作為犯之概念 (教材第 3-12 頁) -->
          <div id="sec-p1ch2-sec2-author-note" class="p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-amber-50 to-orange-50/40 dark:from-[#1b1510] dark:to-[#121827] border-2 border-amber-300 dark:border-amber-800/60 space-y-3 shadow-xs">
            <div class="flex items-center justify-between border-b border-amber-200 dark:border-amber-900/60 pb-2">
              <div class="flex items-center gap-2">
                <span class="text-lg">💡</span>
                <span class="font-black text-amber-950 dark:text-amber-200 text-sm sm:text-base">【作者叮嚀】純正作為犯的概念</span>
              </div>
              <span class="text-xs font-mono font-bold text-amber-700 dark:text-amber-400">p. 3-12</span>
            </div>
            <p class="font-serif text-slate-800 dark:text-slate-200 text-sm sm:text-base leading-relaxed indent-8 text-justify">
              當行為人是作為，且法條文義限於用作為方式成立的犯罪類型，也可以依樣畫葫蘆地稱<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">純正作為犯</span>，比如通姦罪（§239）實很難想像怎麼用不作為的方式成立。不過純正作為犯的概念鮮少提及，知道一下就可以了。
            </p>
          </div>

          <!-- ==================== 二、等價條款與基本要素微調 (教材第 3-13 頁) ==================== -->
          <section id="sec-p1ch2-sec2-equivalent" class="space-y-6 pt-4">
            <div class="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3">
              <div class="flex items-center gap-3">
                <span class="w-2.5 h-6 rounded-full bg-purple-600"></span>
                <h3 class="text-lg sm:text-xl font-black text-slate-900 dark:text-white tracking-tight">
                  二、等價條款與基本要素微調法則（教材第 3-13 頁）
                </h3>
              </div>
              <span class="text-xs font-mono font-bold px-2.5 py-1 rounded-lg bg-purple-50 dark:bg-purple-950 text-purple-600 dark:text-purple-400 border border-purple-200 dark:border-purple-800">
                p. 3-13 原文
              </span>
            </div>

            <!-- 教材原文逐字卡片 -->
            <div class="rounded-2xl bg-white dark:bg-[#121827] border-l-8 border-l-purple-600 border border-slate-200/80 dark:border-white/10 p-5 sm:p-6 shadow-xs space-y-4">
              <div class="flex items-center justify-between text-xs font-bold text-slate-500 dark:text-slate-400 border-b border-slate-100 dark:border-slate-800 pb-2">
                <span class="flex items-center gap-2">
                  <span class="text-base">📖</span>
                  <span>教材原文精讀 • 為惡 vs 不行善與等價條款</span>
                </span>
                <span class="font-mono text-purple-600 dark:text-purple-400">第 3-13 頁</span>
              </div>
              <p class="font-serif text-slate-800 dark:text-slate-200 text-base sm:text-lg leading-relaxed indent-8 text-justify">
                舉殺人罪為例，積極作為的殺人（＝為惡）與消極不作為的殺人（＝不行善）都適用§271，但好逸惡勞是人的本性，我們本來就可以理直氣壯地處罰行為人積極為惡，卻難以義正辭嚴地處罰行為人消極不行善。若要想用同一條文處罰消極不作為，就必須建構其與積極行為間的等同性。<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">因此不純正不作為犯有著「等價條款」的要求，僅在「不作為」加上「由保證地位所建構的作為義務」才能與作為等價齊觀</span>。易言之，當行為人有作為義務卻不為法所期待之作為時，始具備可罰性基礎。
              </p>
              <div class="p-4 rounded-xl bg-purple-50/70 dark:bg-purple-950/40 border border-purple-200 dark:border-purple-800 space-y-2 font-serif text-sm sm:text-base text-slate-800 dark:text-slate-200">
                <div class="font-sans font-bold text-purple-900 dark:text-purple-300">【應用在基本要素之微調法則】</div>
                <p class="indent-4">
                  ① 行為主體轉變成「<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">保證人（＝人＋保證地位）</span>」<br>
                  ② 構成要件行為轉變成「<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">有作為可能性卻不為法所期待之作為</span>」<br>
                  ③ 至於其他要素則依舊相同。
                </p>
              </div>
            </div>

            <!-- 等價條款視覺圖解 (SVG 卡片) -->
            <div class="rounded-2xl bg-white dark:bg-[#121827] border border-slate-200 dark:border-slate-800 p-5 sm:p-6 shadow-xs space-y-3">
              <div class="font-bold text-slate-900 dark:text-white text-sm flex items-center gap-2 border-b border-slate-100 dark:border-slate-800 pb-2">
                <span>⚖️</span>
                <span>不純正不作為犯「等價齊觀」公式圖解</span>
              </div>
              <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700 flex flex-col md:flex-row items-center justify-around gap-4 text-center font-serif text-xs sm:text-sm">
                <div class="p-3.5 rounded-xl bg-rose-50 dark:bg-rose-950/40 border border-rose-300 text-rose-900 dark:text-rose-200 font-bold">
                  【積極作為】<br>
                  <span class="text-xs font-normal">揮刀砍殺（為惡）</span>
                </div>
                <span class="text-xl font-black text-purple-600">≡ 等價等同 ≡</span>
                <div class="p-3.5 rounded-xl bg-purple-50 dark:bg-purple-950/40 border border-purple-300 text-purple-900 dark:text-purple-200 font-bold">
                  【消極不作為】＋【保證地位（作為義務）】<br>
                  <span class="text-xs font-normal">生母有餵奶義務卻故意不餵（§ 15 Ⅰ）</span>
                </div>
              </div>
            </div>
          </section>

          <!-- 底部單元導航條 -->
          <div class="flex items-center justify-between p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-purple-50/80 via-white to-indigo-50/80 dark:from-[#121827] dark:to-[#162035] border border-purple-200/80 dark:border-purple-900/40 shadow-xs flex-wrap gap-3">
            <button onclick="switchView('part1-ch2-sec1')" class="px-4 py-2 rounded-xl bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 font-bold text-xs flex items-center gap-1.5 border border-slate-200 dark:border-slate-700 cursor-pointer">
              <span>← 上一單元：第二章 第一節 基本要素</span>
            </button>
            <div class="flex items-center gap-2 flex-wrap">
              <button onclick="switchView('part1')" class="px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 font-bold text-xs flex items-center gap-1.5 transition-all shadow-xs cursor-pointer">
                <span>📖 第一篇導讀</span>
              </button>
              <button onclick="exportMarkdown()" class="px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs flex items-center gap-1.5 transition-all shadow-xs cursor-pointer">
                <span>📄 下載第二節完整筆記</span>
              </button>
            </div>
          </div>

        </div> <!-- 閉合 #viewPart1Ch2Sec2 -->
`;
