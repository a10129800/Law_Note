/**
 * view-part2-ch1.js
 * 第二篇 第一章 構成要件該當性的發展歷史（＝犯罪審查的發展歷史）
 * 教材第 4-1 ～ 4-5 頁 全章完結旗艦版
 * 嚴格遵循 AGENTS.md 最高行為憲法規範：
 * 1. 逐字精準核對課本原文（第 4-1 ～ 4-5 頁 零錯字、零腦補、1:1 原書排版復刻）
 * 2. 嚴格單欄垂直上下堆疊排版（Strict Vertical Stacking，嚴禁橫向並排）
 * 3. 重點文字採用「純紅底線」規範（No Aggressive Red Text）
 * 4. 貫穿全篇兩大經典範例：【分娩案】與【翻車案】在四大時期的精準推演
 * 5. 兩大【作者叮嚀】（描述性 vs 規範性要件；實務通說學派光譜）原汁原味復刻
 * 6. 1:1 復刻第 4-5 頁「故意犯構成要件該當性發展的四大階段」高質感超級對照矩陣
 * 7. 犬系四大天王導師客廳與 2026 最新法條動態定錨
 * 8. Zero-CORS 本機秒開相容架構
 */

window.APP_VIEWS = window.APP_VIEWS || {};
window.APP_VIEWS['viewPart2Chapter1'] = window.APP_VIEWS['viewPart2Ch1'] = window.APP_VIEWS['part2Ch1'] = window.APP_VIEWS['part2Chapter1'] = window.APP_VIEWS['part2-ch1'] = `
        <!-- VIEW: 第二篇 第一章 構成要件該當性的發展歷史 (教材第 4-1 ～ 4-5 頁 全章完結) -->
        <div id="viewPart2Chapter1" class="fade-enter hidden space-y-8">
          
          <!-- 頂部麵包屑導航與快速返回 -->
          <div class="flex items-center justify-between gap-4 border-b border-slate-200/80 dark:border-white/10 pb-3">
            <nav class="flex items-center gap-2 text-xs font-medium text-slate-500 dark:text-slate-400 flex-wrap">
              <button onclick="switchView('part2')" class="hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer">第二篇 故意既遂犯構成要件</button>
              <span>/</span>
              <span class="text-blue-600 dark:text-blue-400 font-bold">第一章 發展歷史</span>
            </nav>
            <div class="flex items-center gap-2">
              <button onclick="switchView('part2')" class="text-xs text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 flex items-center gap-1 transition-colors shrink-0 font-bold cursor-pointer">
                <span>← 返回第二篇導讀</span>
              </button>
            </div>
          </div>

          <!-- 章節大標題 Banner (1:1 復刻原書倒三角章節抬頭風格) -->
          <div class="space-y-3">
            <div class="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-mono text-xs font-bold">
              <span>第二篇・第一章</span>
              <span class="px-2 py-0.5 rounded-md bg-blue-50 dark:bg-blue-950/40 text-[11px] border border-blue-200 dark:border-blue-900/50">
                教材第 4-1 ～ 4-5 頁 全章完結
              </span>
            </div>

            <!-- 原書風格章節標頭 -->
            <div class="relative pt-2 pb-1">
              <div class="inline-flex flex-col items-center">
                <span class="font-serif font-black text-xl sm:text-2xl text-slate-900 dark:text-white tracking-widest border-b-2 border-slate-800 dark:border-slate-200 pb-1 px-4">
                  第 一 章
                </span>
                <span class="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-slate-800 dark:border-t-slate-200 mt-0.5"></span>
              </div>
              <h2 class="text-2xl sm:text-3xl md:text-4xl font-serif font-black text-slate-900 dark:text-white tracking-tight mt-3">
                構成要件該當性的發展歷史<br class="hidden sm:inline">
                <span class="text-xl sm:text-2xl md:text-3xl text-slate-700 dark:text-slate-300 font-bold">（＝犯罪審查的發展歷史）</span>
              </h2>
            </div>
            
            <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-serif leading-relaxed max-w-3xl">
              百年刑法審查體系演進全貌！從科學至上、要件搬移、風險社會到承接發展，掌握【分娩案】與【翻車案】如何推動客觀歸責與主觀構成要件的誕生！
            </p>
          </div>

          <!-- ══════════════════════════════════════════════════════════ -->
          <!-- 章前引言：不法與罪責的百年演進 (教材第 4-1 頁) -->
          <!-- ══════════════════════════════════════════════════════════ -->
          <section id="sec-p2ch1-intro" class="space-y-6 pt-2">
            <div class="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3">
              <div class="flex items-center gap-3">
                <span class="w-2.5 h-6 rounded-full bg-blue-600"></span>
                <h3 class="text-lg sm:text-xl font-black text-slate-900 dark:text-white tracking-tight">
                  章前引言：三階論審查模式的百年演化（教材第 4-1 頁）
                </h3>
              </div>
              <span class="text-xs font-mono font-bold px-2.5 py-1 rounded-lg bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-800">
                p. 4-1 原文
              </span>
            </div>

            <!-- 原文精讀卡片 -->
            <div class="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#121827] border border-slate-200/90 dark:border-white/10 shadow-sm space-y-4">
              <div class="flex items-center gap-2 text-xs font-mono text-blue-600 dark:text-blue-400 font-bold uppercase tracking-wider">
                <span>📖 教材原文精讀</span>
                <span>•</span>
                <span>不法與罪責的本質區分</span>
              </div>
              
              <blockquote class="font-serif text-base sm:text-lg text-slate-800 dark:text-slate-200 leading-relaxed pl-4 border-l-4 border-blue-600 text-justify">
                刑法以<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">「不法」取代對行為（＝壞事）的判斷</span>，以<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">「罪責」取代對行為人（＝壞人）的評價</span>，僅「不法且有責」始成立犯罪。至於不法乃是「無正當理由的法益侵害」，又區分成「構成要件該當性（＝法益侵害）」與「違法性（＝無正當理由）」兩部分。這種三階論的犯罪審查模式約在十九世紀末成形，並歷經百餘年的逐步演化至今，可約略切割成下述四大階段：
              </blockquote>

              <!-- 演進四大階段導覽卡片（單欄垂直堆疊） -->
              <div class="space-y-3 pt-2">
                <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border-l-4 border-l-slate-500 border border-slate-200 dark:border-slate-700 flex items-start gap-3">
                  <span class="font-mono font-black text-xs px-2 py-0.5 rounded bg-slate-600 text-white shrink-0 mt-0.5">第一階段</span>
                  <div>
                    <h4 class="font-black text-slate-900 dark:text-white text-sm sm:text-base">【早期】科學至上時期（古典犯罪體系）</h4>
                    <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-serif mt-0.5">
                      不法純客觀、罪責純主觀。不法認定極度寬鬆，罪責承擔過濾犯罪的所有任務。
                    </p>
                  </div>
                </div>

                <div class="p-4 rounded-xl bg-indigo-50/70 dark:bg-indigo-950/30 border-l-4 border-l-indigo-600 border border-indigo-200 dark:border-indigo-800 flex items-start gap-3">
                  <span class="font-mono font-black text-xs px-2 py-0.5 rounded bg-indigo-600 text-white shrink-0 mt-0.5">第二階段</span>
                  <div>
                    <h4 class="font-black text-slate-900 dark:text-white text-sm sm:text-base">【中期】要件搬移時期（目的行為論）</h4>
                    <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-serif mt-0.5">
                      故意與違反注意義務上拉至構成要件。客觀仍極度寬鬆，主觀構成要件承擔過濾任務。
                    </p>
                  </div>
                </div>

                <div class="p-4 rounded-xl bg-blue-50/70 dark:bg-blue-950/30 border-l-4 border-l-blue-600 border border-blue-200 dark:border-blue-800 flex items-start gap-3">
                  <span class="font-mono font-black text-xs px-2 py-0.5 rounded bg-blue-600 text-white shrink-0 mt-0.5">第三階段</span>
                  <div>
                    <h4 class="font-black text-slate-900 dark:text-white text-sm sm:text-base">【晚期】風險社會時期（客觀歸責理論）</h4>
                    <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-serif mt-0.5">
                      引入「製造風險」與「實現風險」之客觀歸責，從客觀上限縮法益侵害，接手主觀的過濾任務。
                    </p>
                  </div>
                </div>

                <div class="p-4 rounded-xl bg-emerald-50/70 dark:bg-emerald-950/30 border-l-4 border-l-emerald-600 border border-emerald-200 dark:border-emerald-800 flex items-start gap-3">
                  <span class="font-mono font-black text-xs px-2 py-0.5 rounded bg-emerald-600 text-white shrink-0 mt-0.5">第四階段</span>
                  <div>
                    <h4 class="font-black text-slate-900 dark:text-white text-sm sm:text-base">【近期】承接發展時期（當代有力學說體系）</h4>
                    <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-serif mt-0.5">
                      客觀區分行為製造風險與結果實現風險；主觀排除過時之對應原則；過失犯建構主觀要件達到全體系一貫。
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </section>

          <!-- ══════════════════════════════════════════════════════════ -->
          <!-- 一、第一階段【早期】：科學至上時期 (教材第 4-1 ～ 4-2 頁) -->
          <!-- ══════════════════════════════════════════════════════════ -->
          <section id="sec-p2ch1-early" class="space-y-6 pt-2">
            <div class="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3">
              <div class="flex items-center gap-3">
                <span class="w-2.5 h-6 rounded-full bg-slate-600"></span>
                <h3 class="text-lg sm:text-xl font-black text-slate-900 dark:text-white tracking-tight">
                  一、第一階段【早期】：科學至上時期（教材第 4-1 ～ 4-2 頁）
                </h3>
              </div>
              <span class="text-xs font-mono font-bold px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-300 dark:border-slate-700">
                古典體系
              </span>
            </div>

            <div class="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#121827] border border-slate-200/90 dark:border-white/10 shadow-sm space-y-6 font-serif">
              
              <blockquote class="text-sm sm:text-base text-slate-800 dark:text-slate-200 leading-relaxed pl-4 border-l-4 border-slate-600 text-justify space-y-3">
                <p>
                  最早期的犯罪體系稱<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">「古典犯罪體系」</span>，該時期由於經驗主義的盛行與自然科學的快速發展，連帶形成「社會科學的自然主義」風潮，認為評價行為的「不法」只能自經驗可掌握的事實來判斷，不允許作任何價值判斷，始與科學精神相符，因而導出<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">「不法純客觀、罪責純主觀」</span>的體系結構。此時的構成要件只承認「描述性構成要件（毋須解釋就可以確認）」，不能有「規範性構成要件（必須透過解釋加以確認）」。
                </p>
                <p>
                  基於不法純客觀才「科學」的想法，當時認為構成要件行為是與構成要件結果有連結關係的任何舉動，而連結關係就是純粹的因果律，亦即經驗上可從事實捕捉到的相續條件（＝<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">條件理論＝事實因果審查</span>）。例如，甲母產子，日後該子持槍射殺乙，甲母的分娩行為是構成要件行為（簡稱<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">【分娩案】</span>）；再如甲持槍射殺乙，乙送醫途中巧遇恐怖攻擊，翻車摔入河中溺斃，溺斃結果是構成要件結果（簡稱<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">【翻車案】</span>）。
                </p>
                <p>
                  兩個案例的甲都做了一件壞事而該當不法，至於會否也是個壞人？則必須通過罪責（主要是故意、過失）檢驗，例如【分娩案】的甲做了一件壞事，卻因為主觀上次缺殺人故意而阻卻罪責。然而【翻車案】就沒那麼簡單，畢竟甲開槍當下確實具備殺人想法！就此難題，學說與實務提出一套解決方案，主張當<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">「自始主觀想法與嗣後客觀既遂事實差異甚鉅」</span>時，也會排除殺人故意，形成所謂<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">相當性公式</span>，藉此讓甲脫免故意，至多只有過失刑責。
                </p>
              </blockquote>

              <!-- 早期體系結論總結卡 -->
              <div class="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-2">
                <div class="flex items-center gap-2">
                  <span class="text-base">📌</span>
                  <h4 class="font-black text-sm sm:text-base text-slate-900 dark:text-white">
                    一言以蔽之：科學至上時期的體系特徵
                  </h4>
                </div>
                <p class="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed text-justify">
                  科學至上時期的犯罪體系，<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">由於不法認定極度寬鬆，罪責幾乎承擔過濾犯罪的所有任務</span>，另外，故意犯與過失犯不完全相同，差別僅在罪責。
                </p>
              </div>

            </div>
          </section>

          <!-- ══════════════════════════════════════════════════════════ -->
          <!-- 二、第二階段【中期】：要件搬移時期 (教材第 4-2 ～ 4-3 頁) -->
          <!-- ══════════════════════════════════════════════════════════ -->
          <section id="sec-p2ch1-middle" class="space-y-6 pt-2">
            <div class="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3">
              <div class="flex items-center gap-3">
                <span class="w-2.5 h-6 rounded-full bg-indigo-600"></span>
                <h3 class="text-lg sm:text-xl font-black text-slate-900 dark:text-white tracking-tight">
                  二、第二階段【中期】：要件搬移時期（教材第 4-2 ～ 4-3 頁）
                </h3>
              </div>
              <span class="text-xs font-mono font-bold px-2.5 py-1 rounded-lg bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-800">
                目的行為論
              </span>
            </div>

            <div class="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#121827] border border-slate-200/90 dark:border-white/10 shadow-sm space-y-6 font-serif">
              
              <blockquote class="text-sm sm:text-base text-slate-800 dark:text-slate-200 leading-relaxed pl-4 border-l-4 border-indigo-600 text-justify space-y-3">
                <p>
                  濫觴於<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">「目的行為理論」</span>的興起，主張「行為」是人類為了達到某種目的而評估各種可能結果後的計劃性行動，因而致力於將表彰「目的」的故意、過失，自罪責階層搬移到構成要件階層中。
                </p>
                <p>
                  在狂風暴雨下，罪責階層中的故意（認知＋意欲＋不法意識）剔除不法意識後，<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">上拉到構成要件階層形成構成要件故意</span>，【早期】的相當性公式也連帶搬移，並改穿<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">對應理論</span>新衣。罪責階層中的過失（預見可能性＋違反注意義務）則一分為二，僅<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">違反注意義務提昇至構成要件階層</span>，預見可能性依舊在罪責階層判斷。
                </p>
                <p>
                  犯罪審查體系經歷地震般大變動後，故意犯與過失犯的審查也分道揚鑣。就故意犯來說，客觀構成要件依舊維持【早期】結構，僅產生「主觀構成要件」此塊新大陸，構成要件顯現<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">「客、主觀的混合判斷」</span>。惟過失犯僅在構成要件中增添「違反注意義務」要素，體系上猶仍是「不法純客觀、罪責純主觀」。
                </p>
                <p>
                  操作前述兩個案例，<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">【分娩案】</span>的甲雖然客觀上造成法益侵害，但主觀上次缺殺人故意而沒有做一件壞事；<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">【翻車案】</span>的甲客觀上也造成法益侵害，惟「自始主觀想法與嗣後客觀既遂事實差異甚鉅」而無從對應，主觀上次缺殺人故意，至多只有過失刑責。
                </p>
              </blockquote>

              <!-- 中期體系結論總結卡 -->
              <div class="p-5 rounded-2xl bg-indigo-50/70 dark:bg-indigo-950/30 border border-indigo-200 dark:border-indigo-800 space-y-2">
                <div class="flex items-center gap-2">
                  <span class="text-base">📌</span>
                  <h4 class="font-black text-sm sm:text-base text-indigo-950 dark:text-indigo-200">
                    一言以蔽之：要件搬移時期的體系特徵
                  </h4>
                </div>
                <p class="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed text-justify">
                  要件搬移時期的犯罪體系，<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">由於客觀構成要件認定極度寬鬆，主觀構成要件必須承擔過濾法益侵害的任務</span>。另外故意犯與過失犯的構成要件審查脈絡出現歧異。
                </p>
              </div>

            </div>
          </section>

          <!-- ══════════════════════════════════════════════════════════ -->
          <!-- 三、第三階段【晚期】：風險社會時期 (教材第 4-3 ～ 4-4 頁) -->
          <!-- ══════════════════════════════════════════════════════════ -->
          <section id="sec-p2ch1-late" class="space-y-6 pt-2">
            <div class="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3">
              <div class="flex items-center gap-3">
                <span class="w-2.5 h-6 rounded-full bg-blue-600"></span>
                <h3 class="text-lg sm:text-xl font-black text-slate-900 dark:text-white tracking-tight">
                  三、第三階段【晚期】：風險社會時期（教材第 4-3 ～ 4-4 頁）
                </h3>
              </div>
              <span class="text-xs font-mono font-bold px-2.5 py-1 rounded-lg bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-800">
                客觀歸責理論
              </span>
            </div>

            <div class="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#121827] border border-slate-200/90 dark:border-white/10 shadow-sm space-y-6 font-serif">
              
              <blockquote class="text-sm sm:text-base text-slate-800 dark:text-slate-200 leading-relaxed pl-4 border-l-4 border-blue-600 text-justify space-y-3">
                <p>
                  20世紀人類文明快速發展，使得生活型態產生重大變化，人們開始慣於從事具有高度風險性的社會活動，諸如使用汽車、飛機、遊艇等交通工具，或各種外科手術，幾乎所有社會活動都帶有一定程度風險，倘若不加思索地將客觀上任何動作都看成構成要件行為（【分娩案】的分娩行為）、任何後果都看成構成要件結果（【翻車案】的翻車結果），是否妥適？
                </p>
                <p>
                  基於上述質疑，在故意犯脈絡有主張僅「具備構成要件所要掌握的重要條件」之行為，方屬構成要件行為，提出<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">重要性理論</span>；也有提倡僅「與一般生活經驗相當且尋常、合理」之結果，才是構成要件結果，形成<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">相當理論</span>（隨後更整合固有的條件理論轉變成相當因果關係理論）。20世紀中，學理逐步為重要性理論添加內涵，認為<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">「違反經驗規範而製造風險的行為」</span>才是構成要件行為；亦同時為相當理論充實內涵，<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">「違反規範目的而實現風險的結果」</span>始為構成要件結果。發展至此，學理統合「製造風險」與「實現風險」概念，歸納成<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">客觀歸責理論</span>，作為固有條件理論外的附加審查。
                </p>
                <p>
                  就<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">【分娩案】</span>而言，客觀上甲分娩行為雖與乙死亡結果間具條件理論下的因果關係，卻並非製造死亡風險的行為，客觀構成要件自始不該當；拿<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">【翻車案】</span>來說，客觀上甲開槍行為雖與乙死亡結果間具條件理論下的因果關係，也是製造死亡風險的行為，卻沒有實現規範目的預設的失血過多死亡結果，客觀構成要件亦自始不該當。
                </p>
                <p>
                  有趣的是，過失犯脈絡竟也出現十分雷同的討論！【中期】既已加入過失犯的「違反注意義務」概念，早期要求過失行為必須是「違反注意義務之行為」，過失結果限定在「注意義務所預設之結果」，與故意犯兩相對照，所謂注意義務其實就是避險規範的別稱！因此違反注意義務之行為＝違反避險規範而製造風險的行為；注意義務預設之結果＝違反規範目的而實現風險的結果。於是乎，<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">故意犯「客觀構成要件」與過失犯「構成要件」的審查脈絡再度合流，且合而為一</span>（不過僅限於客觀要件，畢竟主觀要件前者定位在構成要件階層、後者依舊維持在罪責階層）。
                </p>
              </blockquote>

              <!-- 晚期體系結論總結卡 -->
              <div class="p-5 rounded-2xl bg-blue-50/70 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800 space-y-2">
                <div class="flex items-center gap-2">
                  <span class="text-base">📌</span>
                  <h4 class="font-black text-sm sm:text-base text-blue-950 dark:text-blue-200">
                    一言以蔽之：風險社會時期的體系特徵
                  </h4>
                </div>
                <p class="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed text-justify">
                  風險社會時期的犯罪體系，客觀構成要件的風貌已與科學至上時期不同，<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">透過廣泛承認具有濃厚價值判斷色彩的「規範性構成要件」，從客觀上限縮法益侵害的範疇，就此接手主觀構成要件所肩負的任務</span>。另外故意犯與過失犯的客觀審查再度合一，僅主觀要件定位不同。
                </p>
              </div>

              <!-- 💡 作者叮嚀 ①：描述性 vs 規範性構成要件 (教材第 4-4 頁) -->
              <div class="p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-amber-50 to-orange-50/50 dark:from-amber-950/30 dark:to-slate-900 border-2 border-amber-300 dark:border-amber-700/60 border-l-[6px] border-l-amber-500 space-y-3">
                <div class="flex items-center gap-2 font-black text-amber-950 dark:text-amber-300 text-sm sm:text-base">
                  <span class="text-xl">✍️</span>
                  <span>【作・者・叮・嚀 ①】描述性構成要件 vs 規範性構成要件（教材第 4-4 頁）</span>
                </div>
                <div class="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed text-justify space-y-2">
                  <p>
                    所謂<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">「描述性構成要件」</span>，是不帶任何評價色彩的構成要件要素，僅單純描述事實，最常舉出例子是「人」這個要素。而<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">「規範性構成要件」</span>則是必須以規範評價角度加以理解的構成要件要素，例如「動產」，需要藉助民法概念來掌握。
                  </p>
                  <p>
                    實際上當代法學已經沒有什麼單純描述性的構成要件要素了，縱使是「人」，其始點與終點都帶有濃厚的規範評價色彩，換句話說，<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">什麼時候是胎兒？是自然人？是屍體？都有法規範上的爭執與標準</span>，只是解釋程度的難易罷了。
                  </p>
                </div>
              </div>

            </div>
          </section>

          <!-- ══════════════════════════════════════════════════════════ -->
          <!-- 四、第四階段【近期】：承接發展時期 (教材第 4-4 ～ 4-5 頁) -->
          <!-- ══════════════════════════════════════════════════════════ -->
          <section id="sec-p2ch1-recent" class="space-y-6 pt-2">
            <div class="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3">
              <div class="flex items-center gap-3">
                <span class="w-2.5 h-6 rounded-full bg-emerald-600"></span>
                <h3 class="text-lg sm:text-xl font-black text-slate-900 dark:text-white tracking-tight">
                  四、第四階段【近期】：承接發展時期（教材第 4-4 ～ 4-5 頁）
                </h3>
              </div>
              <span class="text-xs font-mono font-bold px-2.5 py-1 rounded-lg bg-emerald-50 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800">
                現代有力學說
              </span>
            </div>

            <div class="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#121827] border border-slate-200/90 dark:border-white/10 shadow-sm space-y-6 font-serif">
              
              <blockquote class="text-sm sm:text-base text-slate-800 dark:text-slate-200 leading-relaxed pl-4 border-l-4 border-emerald-600 text-justify space-y-3">
                <p>
                  既然客觀構成要件已接手主觀構成要件所肩負的過濾任務，那麼後者自「科學至上、故意搬移時期」發展出的對應原則，便有檢討必要。此外，客觀歸責理論係揉合「行為」的製造風險以及「結果」的實現風險而來，卻忽略行為與結果各自的觀察角度可能不同，亦需加以反省。最後，過失犯既然作為法益侵害態樣之一，其構成要件該當性自不應與故意既遂犯、未遂犯有所差異，是否必須沿襲【早期】「不法純客觀、罪責純主觀」的審查體系，確實有待商榷。
                </p>
                <p>
                  職是之故，客觀構成要件應區分<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">「構成要件行為」</span>與<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">「構成要件結果歸責」</span>分別討論；前者核心是<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">製造風險</span>；後者則是<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">實現風險</span>，並兼含事實因果審查（＝條件理論）與規範目的審查。<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">主觀構成要件應排除已卸下歷史任務的對應原則</span>，並另闢其他階層討論「自始主觀想法與嗣後客觀既遂事實差異甚鉅」的問題。至於過失犯應與故意既遂犯、未遂犯相同，<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">建構主觀構成要件過失</span>，以維持審查體系上的一貫性。
                </p>
              </blockquote>

              <!-- 💡 作者叮嚀 ②：學說與實務光譜 (教材第 4-5 頁) -->
              <div class="p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-amber-50 to-orange-50/50 dark:from-amber-950/30 dark:to-slate-900 border-2 border-amber-300 dark:border-amber-700/60 border-l-[6px] border-l-amber-500 space-y-3">
                <div class="flex items-center gap-2 font-black text-amber-950 dark:text-amber-300 text-sm sm:text-base">
                  <span class="text-xl">✍️</span>
                  <span>【作・者・叮・嚀 ②】學說與實務光譜定位（教材第 4-5 頁）</span>
                </div>
                <div class="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed text-justify space-y-2">
                  <p>
                    雖然有少數學說主張應復古地採取【早期】體系，惟<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">目前實務見解較貼近【中、晚期】，通說見解則幾乎落在【晚期】，至於有力學說的發展則到【近期】</span>，台灣刑法學界因而呈現百家爭鳴現象。本書將跟隨有力學說，採取「近期」書寫架構。
                  </p>
                  <p class="font-bold text-amber-950 dark:text-amber-200">
                    👉 其實刑法諸多爭議，不過是不同時期的理論選擇罷了，倘若忽略歷史發展而強學硬記，事倍功半也不令人意外。因此，請各位讀者澄記上述四大發展階段，這對之後的學習勢必大有助益！
                  </p>
                </div>
              </div>

            </div>
          </section>

          <!-- ══════════════════════════════════════════════════════════ -->
          <!-- 五、四大階段超級對照矩陣 (教材第 4-5 頁 1:1 復刻) -->
          <!-- ══════════════════════════════════════════════════════════ -->
          <section id="sec-p2ch1-matrix" class="space-y-6 pt-2">
            <div class="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3">
              <div class="flex items-center gap-3">
                <span class="w-2.5 h-6 rounded-full bg-blue-600"></span>
                <h3 class="text-lg sm:text-xl font-black text-slate-900 dark:text-white tracking-tight">
                  五、故意犯構成要件該當性發展的四大階段超級對照表（教材第 4-5 頁）
                </h3>
              </div>
              <span class="text-xs font-mono font-bold px-2.5 py-1 rounded-lg bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-800">
                1:1 復刻表
              </span>
            </div>

            <!-- 響應式橫向平滑滾動表格容器 -->
            <div class="p-4 sm:p-6 rounded-3xl bg-white dark:bg-[#121827] border border-slate-200/90 dark:border-white/10 shadow-sm space-y-4">
              <div class="w-full overflow-x-auto custom-scrollbar">
                <table class="w-full text-left border-collapse text-xs sm:text-sm font-serif min-w-[680px]">
                  <thead>
                    <tr class="border-b-2 border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-850">
                      <th class="p-3 font-black text-slate-900 dark:text-white w-28">比較項目</th>
                      <th class="p-3 font-black text-slate-700 dark:text-slate-300 text-center">第一階段（早期）<br><span class="text-[11px] font-mono text-slate-500">科學至上</span></th>
                      <th class="p-3 font-black text-indigo-700 dark:text-indigo-300 text-center">第二階段（中期）<br><span class="text-[11px] font-mono text-indigo-500">故意搬移</span></th>
                      <th class="p-3 font-black text-blue-700 dark:text-blue-300 text-center">第三階段（晚期）<br><span class="text-[11px] font-mono text-blue-500">風險社會</span></th>
                      <th class="p-3 font-black text-emerald-700 dark:text-emerald-300 text-center">第四階段（近期）<br><span class="text-[11px] font-mono text-emerald-500">承接發展</span></th>
                    </tr>
                  </thead>
                  <tbody class="divide-y divide-slate-200 dark:divide-slate-800 text-slate-700 dark:text-slate-300">
                    <!-- 核心體系 -->
                    <tr class="hover:bg-slate-50/50 dark:hover:bg-slate-800/40">
                      <td class="p-3 font-black text-slate-900 dark:text-white bg-slate-50/40 dark:bg-slate-800/20">核心體系</td>
                      <td class="p-3 text-center font-bold text-slate-600 dark:text-slate-400">古典犯罪體系</td>
                      <td class="p-3 text-center font-bold text-indigo-600 dark:text-indigo-400">目的行為論</td>
                      <td class="p-3 text-center font-bold text-blue-600 dark:text-blue-400">客觀歸責理論</td>
                      <td class="p-3 text-center font-bold text-emerald-600 dark:text-emerald-400">現代目的理性體系</td>
                    </tr>
                    <!-- 構成要件特徵 -->
                    <tr class="hover:bg-slate-50/50 dark:hover:bg-slate-800/40">
                      <td class="p-3 font-black text-slate-900 dark:text-white bg-slate-50/40 dark:bg-slate-800/20">構成要件的主要特徵</td>
                      <td class="p-3 text-center">構成要件乃<br><span class="font-bold text-slate-800 dark:text-slate-200">純客觀判斷</span></td>
                      <td colspan="3" class="p-3 text-center font-bold text-blue-800 dark:text-blue-200 bg-blue-50/20 dark:bg-blue-950/20 border-l border-slate-200 dark:border-slate-700">
                        構成要件乃客、主觀混合判斷
                      </td>
                    </tr>
                    <!-- 對構成要件行為的理解 -->
                    <tr class="hover:bg-slate-50/50 dark:hover:bg-slate-800/40">
                      <td class="p-3 font-black text-slate-900 dark:text-white bg-slate-50/40 dark:bg-slate-800/20">對構成要件行為的理解</td>
                      <td colspan="2" class="p-3 text-center">透過條件理論與結果相連結的行為</td>
                      <td class="p-3 text-center font-bold text-blue-700 dark:text-blue-300">製造風險之行為<br><span class="text-[11px] font-normal text-slate-500">（與實現風險合稱客觀歸責理論）</span></td>
                      <td class="p-3 text-center font-bold text-emerald-700 dark:text-emerald-300">製造風險之行為</td>
                    </tr>
                    <!-- 對構成要件結果的理解 -->
                    <tr class="hover:bg-slate-50/50 dark:hover:bg-slate-800/40">
                      <td class="p-3 font-black text-slate-900 dark:text-white bg-slate-50/40 dark:bg-slate-800/20">對構成要件結果的理解</td>
                      <td colspan="2" class="p-3 text-center">透過條件理論與行為相連結的結果</td>
                      <td class="p-3 text-xs">
                        <div class="space-y-1">
                          <div>(一) 透過條件理論與行為相連結的結果</div>
                          <div class="font-bold text-blue-700 dark:text-blue-300">(二) 實現風險之結果<br><span class="font-normal text-slate-500">（與製造風險合稱客觀歸責理論）</span></div>
                        </div>
                      </td>
                      <td class="p-3 text-xs font-bold text-emerald-700 dark:text-emerald-300">
                        <div class="space-y-1">
                          <div class="text-slate-900 dark:text-white">實現風險之結果：</div>
                          <div>(一) 事實因果審查<br><span class="font-normal text-slate-500">（＝條件理論）</span></div>
                          <div>(二) 規範目的審查</div>
                        </div>
                      </td>
                    </tr>
                    <!-- 對故意的理解 -->
                    <tr class="hover:bg-slate-50/50 dark:hover:bg-slate-800/40">
                      <td class="p-3 font-black text-slate-900 dark:text-white bg-slate-50/40 dark:bg-slate-800/20">對故意的理解</td>
                      <td class="p-3 text-center text-xs">罪責要件，並附<br><span class="font-bold text-slate-800 dark:text-slate-200">「相當性公式」</span></td>
                      <td colspan="2" class="p-3 text-center text-xs font-bold text-indigo-700 dark:text-indigo-300 bg-indigo-50/20 dark:bg-indigo-950/20 border-l border-slate-200 dark:border-slate-700">
                        主觀構成要件，並附加對應理論
                      </td>
                      <td class="p-3 text-center text-xs font-bold text-emerald-700 dark:text-emerald-300">
                        主觀構成要件，並<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">排除對應理論</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          <!-- ══════════════════════════════════════════════════════════ -->
          <!-- 六、犬系四大天王：犯罪審查體系百年風雲客廳 -->
          <!-- ══════════════════════════════════════════════════════════ -->
          <section id="sec-p2ch1-mentors" class="space-y-6 pt-2">
            <div class="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3">
              <div class="flex items-center gap-3">
                <span class="w-2.5 h-6 rounded-full bg-amber-500"></span>
                <h3 class="text-lg sm:text-xl font-black text-slate-900 dark:text-white tracking-tight">
                  六、犬系法學四大天王客廳：百年犯罪審查體系風雲大解碼
                </h3>
              </div>
              <span class="text-xs font-mono font-bold px-2.5 py-1 rounded-lg bg-amber-50 dark:bg-amber-950 text-amber-600 dark:text-amber-400 border border-amber-200 dark:border-amber-800">
                導師點睛
              </span>
            </div>

            <!-- 單欄垂直上下堆疊四大天王座談卡 -->
            <div class="space-y-4 font-serif">
              
              <!-- 柴柴法學教授 -->
              <div class="p-5 rounded-2xl bg-gradient-to-br from-amber-50/90 to-orange-50/50 dark:from-amber-950/30 dark:to-slate-900 border-2 border-amber-300 dark:border-amber-700/60 border-l-[6px] border-l-amber-500 flex items-start gap-4 shadow-xs">
                <div class="w-12 h-12 rounded-full overflow-hidden shrink-0 border-2 border-amber-500 shadow-xs">
                  <img src="images/shiba_law_professor.jpg" alt="柴柴法學教授" class="w-full h-full object-cover" style="object-position: center 20%; transform: scale(1.38);">
                </div>
                <div class="space-y-1.5 text-xs sm:text-sm text-slate-800 dark:text-slate-200">
                  <div class="font-black text-amber-950 dark:text-amber-300 text-sm sm:text-base">
                    🐾 柴柴法學教授 • 白話生活大解碼
                  </div>
                  <p class="leading-relaxed">
                    「同學們！讀完這章是不是豁然開朗了！以前背客觀歸責理論、製造風險、實現風險，總覺得是天上掉下來的複雜公式。現在明白了：早期因為不敢作價值判斷，只要有因果就該當不法，生小孩也該當殺人（分娩案），全靠罪責在擋；後來大家受不了了，才發明『客觀歸責』在客觀大門口直接把不相干的風險擋在門外！這就是百年刑法學的智慧演進！」
                  </p>
                </div>
              </div>

              <!-- 金毛首席辯護律師 -->
              <div class="p-5 rounded-2xl bg-gradient-to-br from-blue-50/90 to-slate-50 dark:from-blue-950/30 dark:to-slate-900 border-2 border-blue-300 dark:border-blue-700/60 border-l-[6px] border-l-blue-600 flex items-start gap-4 shadow-xs">
                <div class="w-12 h-12 rounded-full overflow-hidden shrink-0 border-2 border-blue-500 shadow-xs">
                  <img src="images/golden_case_attorney.jpg" alt="金毛辯護律師" class="w-full h-full object-cover" style="object-position: center 20%; transform: scale(1.35);">
                </div>
                <div class="space-y-1.5 text-xs sm:text-sm text-slate-800 dark:text-slate-200">
                  <div class="font-black text-blue-950 dark:text-blue-300 text-sm sm:text-base">
                    ⚖️ 金毛大律師 • 實戰抗辯戰略
                  </div>
                  <p class="leading-relaxed">
                    「在實務審判中，法官的心證往往深受『客觀歸責理論』影響。辯護人在面對重罪起訴時，最漂亮也最乾脆的打法，就是在客觀構成要件階段提出：『被告之舉動純屬容許風險，根本未製造法所不容許之險境』，或者『被害人翻車摔入河中溺斃，並未實現開槍所預設之風險』。客觀構成要件一旦不該當，全案連罪責都不用討論，直接宣告無罪！」
                  </p>
                </div>
              </div>

              <!-- 德牧法規巡查官 -->
              <div class="p-5 rounded-2xl bg-gradient-to-br from-slate-100 to-slate-50 dark:from-slate-800/80 dark:to-slate-900 border-2 border-slate-300 dark:border-slate-700 border-l-[6px] border-l-slate-600 flex items-start gap-4 shadow-xs">
                <div class="w-12 h-12 rounded-full overflow-hidden shrink-0 border-2 border-slate-500 shadow-xs">
                  <img src="images/shepherd_law_inspector.jpg" alt="德牧法規巡查官" class="w-full h-full object-cover" style="object-position: center 15%; transform: scale(1.4);">
                </div>
                <div class="space-y-1.5 text-xs sm:text-sm text-slate-800 dark:text-slate-200">
                  <div class="font-black text-slate-900 dark:text-white text-sm sm:text-base">
                    🛡️ 德牧法規巡查官 • 實務判決雷達
                  </div>
                  <p class="leading-relaxed">
                    「實務查核：我國最高法院早期判例多採『相當因果關係說』（例如 76 年台上字第 192 號判例），近年來判決則大量引進客觀歸責理論（如最高法院 96 年台上字第 5992 號、100 年台上字第 2376 號等），以『製造不容許之風險』及『該風險在規範目的防免範圍內實現』作為論罪依據。考生作答時若能精準點出相當因果與客觀歸責的流變，分數必名列前茅！」
                  </p>
                </div>
              </div>

              <!-- 邊牧首席審判長 -->
              <div class="p-5 rounded-2xl bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white border-2 border-amber-400/80 shadow-md flex items-start gap-4">
                <div class="w-12 h-12 rounded-full overflow-hidden shrink-0 border-2 border-amber-400 shadow-xs">
                  <img src="images/border_collie_chief_judge.jpg" alt="邊牧審判長" class="w-full h-full object-cover" style="object-position: center 25%; transform: scale(1.35);">
                </div>
                <div class="space-y-1.5 text-xs sm:text-sm">
                  <div class="font-black text-amber-300 text-sm sm:text-base">
                    👨‍⚖️ 邊牧首席審判長 • 終審裁定與 2026 國考定錨
                  </div>
                  <p class="leading-relaxed text-slate-200">
                    「#法槌一敲誰與爭鋒！國考閱卷老師最重視體系架構的一致性。本書跟隨當代有力學說採取『近期』書寫架構：客觀構成要件分『構成要件行為（製造風險）』與『構成要件結果歸責（實現風險）』。後續第二章、第三章的所有深入探討，皆以此四大階段演進史為基石。恭喜大家完成這場百年思想的洗禮！」
                  </p>
                </div>
              </div>

            </div>
          </section>

          <!-- 章節底端雙向分頁導航 -->
          <div class="pt-6 border-t border-slate-200/80 dark:border-white/10 flex items-center justify-between gap-4 flex-wrap">
            <button onclick="switchView('part2')" class="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-blue-400 hover:shadow-sm transition-all text-left flex items-center gap-3 cursor-pointer group">
              <span class="text-xl group-hover:-translate-x-1 transition-transform">←</span>
              <div>
                <span class="block text-[11px] font-mono text-slate-400 font-bold uppercase">PREVIOUS DIVISION</span>
                <span class="text-sm font-bold text-slate-800 dark:text-slate-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">第二篇 故意既遂犯構成要件導讀</span>
              </div>
            </button>
            <button onclick="switchView('part2-ch2-sec1')" class="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-blue-400 hover:shadow-sm transition-all text-right ml-auto flex items-center gap-3 cursor-pointer group">
              <div>
                <span class="block text-[11px] font-mono text-slate-400 font-bold uppercase">NEXT SECTION</span>
                <span class="text-sm font-bold text-slate-800 dark:text-slate-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">第二章 第一節 構成要件行為 →</span>
              </div>
              <span class="text-xl group-hover:translate-x-1 transition-transform">→</span>
            </button>
          </div>

        </div>
`;
