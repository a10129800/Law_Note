/**
 * view-part0-ch3-sec3.js
 * 第零篇 第三章 第三節 刑罰的量定——兼談宣告刑 (教材第 2-31 ～ 2-32 頁)
 * 依據多欄位Note Skill 規範：
 * 完整收錄罪刑相當原則、處斷刑內量刑考量標的（§ 57 與四大憲法法理原則、99台上6995緘默權判決）、
 * 超出處斷刑之量刑補充規則（§ 58 酌加、§ 59 酌減、§ 61 酌免）與有罪免刑本質
 * 升級至 Image 2 頂級旗艦標準：具備兩個「🐣 小白秒懂專區」、厚左邊框、高對比標籤與層次卡片
 */
window.APP_VIEWS = window.APP_VIEWS || {};
window.APP_VIEWS['viewPart0Ch3Sec3'] = window.APP_VIEWS['part0Ch3Sec3'] = window.APP_VIEWS['part0-ch3-sec3'] = `
        <!-- VIEW: 第零篇 第三章 第三節 刑罰的量定——兼談宣告刑 -->
        <div id="viewPart0Ch3Sec3" class="fade-enter hidden space-y-8">
          
          <!-- Breadcrumb & Back -->
          <div class="flex items-center justify-between gap-4 border-b border-slate-100 dark:border-white/[0.06] pb-3">
            <nav class="flex items-center gap-2 text-xs font-medium text-slate-400">
              <button onclick="switchView('part-0')" class="hover:text-blue-500 transition-colors">第零篇</button>
              <span>/</span>
              <button onclick="switchView('part0-chapter-3')" class="hover:text-indigo-500 transition-colors">第三章 刑法的法律效果</button>
              <span>/</span>
              <span class="text-indigo-600 dark:text-indigo-400 font-bold">第三節 刑罰的量定——兼談宣告刑</span>
            </nav>
            <button onclick="switchView('part0-ch3-sec2')" class="text-xs text-slate-400 hover:text-indigo-500 flex items-center gap-1 transition-colors cursor-pointer">
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
              </svg>
              <span>返回第二節 刑罰調整</span>
            </button>
          </div>

          <!-- Section Header Banner -->
          <div class="space-y-3">
            <div class="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-mono text-xs font-bold">
              <span>第零篇・第三章・第三節</span>
              <span class="px-2.5 py-0.5 rounded-full bg-indigo-50 dark:bg-indigo-950/60 text-[11px] border border-indigo-200 dark:border-indigo-900/50 text-indigo-700 dark:text-indigo-300">
                教材第 2-31 ～ 2-32 頁
              </span>
              <span class="px-2.5 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-[11px] border border-emerald-200 dark:border-emerald-900/50 text-emerald-700 dark:text-emerald-300 font-bold">
                量刑基準與宣告刑
              </span>
            </div>
            <h2 class="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
              第三節 刑罰的量定——兼談宣告刑
            </h2>
            <p class="text-xs sm:text-sm font-bold text-blue-700 dark:text-blue-300 leading-relaxed">
              量刑中心思想（罪刑相當原則）、處斷刑範圍內量刑考量標的（§ 57 十大事由與四大憲法法理）、超出處斷刑範圍之量刑補充規則（§ 58 酌加、§ 59 酌減、§ 61 酌免）
            </p>
          </div>

          <!-- ==================== 一、量刑中心思想與宣告刑之概念 ==================== -->
          <section id="sec-p0ch3-sec3-concept" class="space-y-5 pt-2">
            <div class="flex items-center justify-between border-b border-slate-100 dark:border-white/[0.06] pb-2">
              <div class="flex items-center gap-3">
                <span class="w-2 h-6 rounded-full bg-indigo-600"></span>
                <h3 class="text-lg sm:text-xl font-black text-slate-900 dark:text-white tracking-tight">
                  一、量刑中心思想：罪刑相當原則與宣告刑（教材第 2-31 頁）
                </h3>
              </div>
              <span class="text-[11px] font-mono px-2 py-0.5 rounded bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 font-bold">
                處斷刑 ➔ 宣告刑
              </span>
            </div>

            <!-- 天藍色概念焦點框 (Focus Box) -->
            <div class="p-6 sm:p-7 rounded-3xl bg-slate-50 dark:bg-slate-900/80 border-2 border-l-[8px] border-sky-500 space-y-4 shadow-sm">
              <div class="flex items-center justify-between border-b border-sky-200 dark:border-sky-800 pb-2">
                <h4 class="text-base font-black text-slate-900 dark:text-white flex items-center gap-2">
                  <span>⚖️</span>
                  <span>罪刑相當原則：決定量刑之最高指導原則</span>
                </h4>
                <span class="text-xs font-mono font-bold px-2 py-0.5 rounded bg-white dark:bg-slate-800 text-[#0369a1] dark:text-sky-300 border border-sky-300 dark:border-sky-600">
                  SENTENCING ESSENCE
                </span>
              </div>

              <blockquote class="border-l-4 border-[#0284c7] pl-4 py-1 text-xs sm:text-sm text-[#0c4a6e] dark:text-sky-100 leading-relaxed italic space-y-1">
                <p>
                  「決定量刑的中心思想是罪刑相當原則，意指刑事處罰必須與行為所具有的罪責相當，個案中所有施加的刑罰不得超過罪責之範圍。雖然刑罰經過法定刑與處斷刑的確認，但依然是一個（相對）不定期刑，法官必須在這個框架內依據罪刑相當原則找出合理的、公平的刑罰，而這個刑罰稱作宣告刑。」
                </p>
              </blockquote>

              <div class="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1 text-xs">
                <!-- 合理的刑罰 -->
                <div class="p-4 rounded-2xl bg-white dark:bg-slate-950 border border-sky-200 dark:border-sky-800 space-y-2">
                  <div class="flex items-center justify-between">
                    <span class="font-bold text-sky-900 dark:text-sky-200 flex items-center gap-1.5">
                      <span>🎯</span>
                      <span>1. 合理的刑罰（合理性要求）</span>
                    </span>
                    <span class="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-sky-100 dark:bg-sky-950 text-sky-700 dark:text-sky-300">
                      罪刑相當
                    </span>
                  </div>
                  <p class="text-[11.5px] text-slate-600 dark:text-slate-300 leading-relaxed">
                    <strong>「小罪不能大罰，大罪不能小罰」</strong>：個案中判處的具體刑度，必須嚴格與行為人不法內涵及罪責輕重合乎比例，刑罰絕對不得凌駕於個人責任之上。
                  </p>
                </div>

                <!-- 公平的刑罰 -->
                <div class="p-4 rounded-2xl bg-white dark:bg-slate-950 border border-indigo-200 dark:border-indigo-800 space-y-2">
                  <div class="flex items-center justify-between">
                    <span class="font-bold text-indigo-900 dark:text-indigo-200 flex items-center gap-1.5">
                      <span>⚖️</span>
                      <span>2. 公平的刑罰（平等性要求）</span>
                    </span>
                    <span class="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300">
                      平等原則
                    </span>
                  </div>
                  <p class="text-[11.5px] text-slate-600 dark:text-slate-300 leading-relaxed">
                    <strong>「同等情況受同等對待，不同情況受不同對待」</strong>：避免法官個人主觀好惡或同罪不同判之恣意量刑，落實實質平等的司法正義。
                  </p>
                </div>
              </div>

              <div class="p-3 rounded-2xl bg-sky-50 dark:bg-sky-950/40 border border-sky-200 dark:border-sky-800 text-xs text-sky-900 dark:text-sky-200 flex items-center gap-2">
                <span class="text-base">📌</span>
                <span><strong>宣告刑之定義：</strong>法官在經由加減調整後的「處斷刑」範圍內，斟酌個案具體情狀所定下的一個<strong>具體確定刑度</strong>（如判處有期徒刑 3 年 6 月），並於判決主文正式對外宣告。</span>
              </div>
            </div>
          </section>

          <!-- ==================== 二、在處斷刑範圍內的「量刑考量標的」（§ 57） ==================== -->
          <section id="sec-p0ch3-sec3-sentencing-factors" class="space-y-6 pt-2">
            <div class="flex items-center justify-between border-b border-slate-100 dark:border-white/[0.06] pb-2">
              <div class="flex items-center gap-3">
                <span class="w-2 h-6 rounded-full bg-blue-600"></span>
                <h3 class="text-lg sm:text-xl font-black text-slate-900 dark:text-white tracking-tight">
                  二、在處斷刑範圍內的「量刑考量標的」（§ 57，教材第 2-31 頁）
                </h3>
              </div>
              <span class="text-[11px] font-mono px-2 py-0.5 rounded bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400 font-bold">
                § 57 量刑基準
              </span>
            </div>

            <!-- 法條展示 -->
            <div class="p-5 rounded-3xl bg-slate-50 dark:bg-slate-900/60 border-2 border-l-[8px] border-blue-500 space-y-3">
              <div class="flex items-center justify-between border-b border-blue-200 dark:border-blue-900/60 pb-2">
                <span class="font-bold text-slate-900 dark:text-white text-sm flex items-center gap-1.5">
                  <span>📜</span>
                  <span>刑法第 57 條：科刑時應審酌一切情狀</span>
                </span>
                <span class="text-xs font-mono font-bold text-blue-600">§ 57</span>
              </div>
              <p class="text-xs sm:text-[13px] font-bold text-blue-600 dark:text-blue-400 leading-relaxed">
                「科刑時應以行為人之責任為基礎，並審酌一切情狀，尤應注意下列事項，為科刑輕重之標準：」
              </p>
              <div class="grid grid-cols-2 sm:grid-cols-5 gap-2.5 pt-1.5">
                <div class="p-2.5 rounded-xl bg-slate-200/95 dark:bg-slate-800 border-2 border-slate-400/80 dark:border-slate-600 shadow-sm flex items-center gap-2 hover:bg-slate-300 dark:hover:bg-slate-700 hover:-translate-y-0.5 transition-all cursor-default">
                  <span class="w-6 h-6 rounded-lg bg-slate-800 dark:bg-slate-200 text-white dark:text-slate-900 font-extrabold text-[11px] flex items-center justify-center shrink-0 shadow-xs">①</span>
                  <span class="text-[12px] font-bold text-slate-900 dark:text-slate-100 leading-tight">犯罪之動機、目的</span>
                </div>
                <div class="p-2.5 rounded-xl bg-slate-200/95 dark:bg-slate-800 border-2 border-slate-400/80 dark:border-slate-600 shadow-sm flex items-center gap-2 hover:bg-slate-300 dark:hover:bg-slate-700 hover:-translate-y-0.5 transition-all cursor-default">
                  <span class="w-6 h-6 rounded-lg bg-slate-800 dark:bg-slate-200 text-white dark:text-slate-900 font-extrabold text-[11px] flex items-center justify-center shrink-0 shadow-xs">②</span>
                  <span class="text-[12px] font-bold text-slate-900 dark:text-slate-100 leading-tight">犯罪時所受之刺激</span>
                </div>
                <div class="p-2.5 rounded-xl bg-slate-200/95 dark:bg-slate-800 border-2 border-slate-400/80 dark:border-slate-600 shadow-sm flex items-center gap-2 hover:bg-slate-300 dark:hover:bg-slate-700 hover:-translate-y-0.5 transition-all cursor-default">
                  <span class="w-6 h-6 rounded-lg bg-slate-800 dark:bg-slate-200 text-white dark:text-slate-900 font-extrabold text-[11px] flex items-center justify-center shrink-0 shadow-xs">③</span>
                  <span class="text-[12px] font-bold text-slate-900 dark:text-slate-100 leading-tight">犯罪之手段</span>
                </div>
                <div class="p-2.5 rounded-xl bg-slate-200/95 dark:bg-slate-800 border-2 border-slate-400/80 dark:border-slate-600 shadow-sm flex items-center gap-2 hover:bg-slate-300 dark:hover:bg-slate-700 hover:-translate-y-0.5 transition-all cursor-default">
                  <span class="w-6 h-6 rounded-lg bg-slate-800 dark:bg-slate-200 text-white dark:text-slate-900 font-extrabold text-[11px] flex items-center justify-center shrink-0 shadow-xs">④</span>
                  <span class="text-[12px] font-bold text-slate-900 dark:text-slate-100 leading-tight">行為人之生活狀況</span>
                </div>
                <div class="p-2.5 rounded-xl bg-slate-200/95 dark:bg-slate-800 border-2 border-slate-400/80 dark:border-slate-600 shadow-sm flex items-center gap-2 hover:bg-slate-300 dark:hover:bg-slate-700 hover:-translate-y-0.5 transition-all cursor-default">
                  <span class="w-6 h-6 rounded-lg bg-slate-800 dark:bg-slate-200 text-white dark:text-slate-900 font-extrabold text-[11px] flex items-center justify-center shrink-0 shadow-xs">⑤</span>
                  <span class="text-[12px] font-bold text-slate-900 dark:text-slate-100 leading-tight">行為人之品行</span>
                </div>
                <div class="p-2.5 rounded-xl bg-slate-200/95 dark:bg-slate-800 border-2 border-slate-400/80 dark:border-slate-600 shadow-sm flex items-center gap-2 hover:bg-slate-300 dark:hover:bg-slate-700 hover:-translate-y-0.5 transition-all cursor-default">
                  <span class="w-6 h-6 rounded-lg bg-slate-800 dark:bg-slate-200 text-white dark:text-slate-900 font-extrabold text-[11px] flex items-center justify-center shrink-0 shadow-xs">⑥</span>
                  <span class="text-[12px] font-bold text-slate-900 dark:text-slate-100 leading-tight">行為人之智識程度</span>
                </div>
                <div class="p-2.5 rounded-xl bg-slate-200/95 dark:bg-slate-800 border-2 border-slate-400/80 dark:border-slate-600 shadow-sm flex items-center gap-2 hover:bg-slate-300 dark:hover:bg-slate-700 hover:-translate-y-0.5 transition-all cursor-default">
                  <span class="w-6 h-6 rounded-lg bg-slate-800 dark:bg-slate-200 text-white dark:text-slate-900 font-extrabold text-[11px] flex items-center justify-center shrink-0 shadow-xs">⑦</span>
                  <span class="text-[12px] font-bold text-slate-900 dark:text-slate-100 leading-tight">行為人與被害人之關係</span>
                </div>
                <div class="p-2.5 rounded-xl bg-slate-200/95 dark:bg-slate-800 border-2 border-slate-400/80 dark:border-slate-600 shadow-sm flex items-center gap-2 hover:bg-slate-300 dark:hover:bg-slate-700 hover:-translate-y-0.5 transition-all cursor-default">
                  <span class="w-6 h-6 rounded-lg bg-slate-800 dark:bg-slate-200 text-white dark:text-slate-900 font-extrabold text-[11px] flex items-center justify-center shrink-0 shadow-xs">⑧</span>
                  <span class="text-[12px] font-bold text-slate-900 dark:text-slate-100 leading-tight">行為人違反義務之程度</span>
                </div>
                <div class="p-2.5 rounded-xl bg-slate-200/95 dark:bg-slate-800 border-2 border-slate-400/80 dark:border-slate-600 shadow-sm flex items-center gap-2 hover:bg-slate-300 dark:hover:bg-slate-700 hover:-translate-y-0.5 transition-all cursor-default">
                  <span class="w-6 h-6 rounded-lg bg-slate-800 dark:bg-slate-200 text-white dark:text-slate-900 font-extrabold text-[11px] flex items-center justify-center shrink-0 shadow-xs">⑨</span>
                  <span class="text-[12px] font-bold text-slate-900 dark:text-slate-100 leading-tight">犯罪所生之危險或損害</span>
                </div>
                <div class="p-2.5 rounded-xl bg-slate-200/95 dark:bg-slate-800 border-2 border-slate-400/80 dark:border-slate-600 shadow-sm flex items-center gap-2 hover:bg-slate-300 dark:hover:bg-slate-700 hover:-translate-y-0.5 transition-all cursor-default">
                  <span class="w-6 h-6 rounded-lg bg-slate-800 dark:bg-slate-200 text-white dark:text-slate-900 font-extrabold text-[11px] flex items-center justify-center shrink-0 shadow-xs">⑩</span>
                  <span class="text-[12px] font-bold text-slate-900 dark:text-slate-100 leading-tight">犯罪後之態度</span>
                </div>
              </div>
            </div>

            <!-- 原書重點：四大憲法與法理原則審查 -->
            <div class="space-y-4">
              <h4 class="text-sm font-bold text-slate-800 dark:text-slate-200 flex items-center gap-2">
                <span>🛡️</span>
                <span>量刑考量標的之四大核心法理原則（教材深度剖析）</span>
              </h4>

              <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                
                <!-- 原則 1: 例示規定非列舉規定 -->
                <div class="p-5 rounded-3xl bg-white dark:bg-slate-900 border-2 border-l-[8px] border-blue-500 space-y-3 shadow-xs">
                  <div class="flex items-center justify-between">
                    <span class="text-xs font-mono font-bold text-blue-600 dark:text-blue-400 flex items-center gap-1.5">
                      <span>📋</span>
                      <span>(一) 例示規定（非列舉規定）</span>
                    </span>
                    <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400 font-bold">
                      開放式裁量
                    </span>
                  </div>
                  <h5 class="text-sm font-bold text-slate-900 dark:text-white">
                    可以考量法條文字以外的有利/不利因素
                  </h5>
                  <p class="text-[11.5px] text-slate-600 dark:text-slate-300 leading-relaxed">
                    刑法第 57 條明定「尤應注意下列事項」，文義顯示各款僅為<strong>「例示規定」</strong>，並非封閉之列舉規定。法官在具體審判時，凡有助於查明行為人不法與罪責程度之事實，縱使未列在 10 款之內，依然可以納入量刑裁量考量。
                  </p>
                </div>

                <!-- 原則 2: 禁止重複評價原則 -->
                <div class="p-5 rounded-3xl bg-white dark:bg-slate-900 border-2 border-l-[8px] border-amber-500 space-y-3 shadow-xs">
                  <div class="flex items-center justify-between">
                    <span class="text-xs font-mono font-bold text-amber-600 dark:text-amber-400 flex items-center gap-1.5">
                      <span>⛔</span>
                      <span>(二) 禁止重複評價原則</span>
                    </span>
                    <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-50 dark:bg-amber-950 text-amber-600 dark:text-amber-400 font-bold">
                      Doppelverwertungsverbot
                    </span>
                  </div>
                  <h5 class="text-sm font-bold text-slate-900 dark:text-white">
                    已列入構成要件加減者，量刑不得再次重複評價
                  </h5>
                  <p class="text-[11.5px] text-slate-600 dark:text-slate-300 leading-relaxed">
                    若該審酌事項已經列入加重或減輕犯罪成立要件中，量刑時就<strong>不能再重複評價</strong>一次！
                  </p>
                  <div class="p-3.5 sm:p-4 rounded-2xl bg-amber-100/90 dark:bg-amber-950/70 border border-amber-400 dark:border-amber-600 shadow-sm space-y-1.5">
                    <div class="font-bold text-amber-800 dark:text-amber-300 flex items-center gap-1.5">
                      <span>💡</span>
                      <span class="text-[12px] font-black tracking-wide">教材經典範例</span>
                    </div>
                    <p class="leading-relaxed text-[11.5px] font-medium text-slate-800 dark:text-slate-200">
                      犯「殺害直系血親尊親屬罪」（§ 272），因身分關係已於分則直接加重其刑至二分之一，法官在 § 57 量刑時，<strong class="text-rose-600 dark:text-rose-400 font-extrabold underline decoration-rose-400 underline-offset-2">絕不能再次以第 ⑦ 款「行為人與被害人之關係」作為加重量刑之理由！</strong>
                    </p>
                  </div>
                </div>

                <!-- 原則 3: 權利行使不得作為不利事由 -->
                <div class="p-5 rounded-3xl bg-white dark:bg-slate-900 border-2 border-l-[8px] border-rose-500 space-y-3 shadow-xs">
                  <div class="flex items-center justify-between">
                    <span class="text-xs font-mono font-bold text-rose-600 dark:text-rose-400 flex items-center gap-1.5">
                      <span>🤐</span>
                      <span>(三) 權利行使不得作為加重量刑之事由</span>
                    </span>
                    <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-rose-50 dark:bg-rose-950 text-rose-600 dark:text-rose-400 font-bold">
                      憲法防禦權
                    </span>
                  </div>
                  <h5 class="text-sm font-bold text-slate-900 dark:text-white">
                    行使緘默權不得認定為犯後態度不佳（99台上6995決）
                  </h5>
                  <p class="text-[11.5px] text-slate-600 dark:text-slate-300 leading-relaxed">
                    訴訟防禦權利的行使，絕不得作為加重量刑的事由。被告在刑事訴訟中依法享有緘默權及辯明無罪之權利。
                  </p>
                  <div class="p-3.5 sm:p-4 rounded-2xl bg-rose-100/90 dark:bg-rose-950/70 border border-rose-400 dark:border-rose-600 shadow-sm space-y-1.5">
                    <div class="font-bold text-rose-800 dark:text-rose-300 flex items-center justify-between">
                      <span class="flex items-center gap-1.5 text-[12px] font-black">
                        <span>⭐</span>
                        <span>最高法院 99 年度台上字第 6995 號判決</span>
                      </span>
                      <span class="text-[10px] font-mono px-1.5 py-0.5 rounded bg-rose-200 dark:bg-rose-900 text-rose-800 dark:text-rose-200 font-bold">
                        防禦權保障
                      </span>
                    </div>
                    <p class="leading-relaxed text-[11.5px] font-medium text-slate-800 dark:text-slate-200">
                      被告於審判中行使緘默權或否認犯罪，純屬受憲法保障之正當防禦權行使，<strong class="text-rose-700 dark:text-rose-300 font-extrabold underline decoration-rose-400 underline-offset-2">不得據此認定為「犯罪後之態度不佳」（§ 57 ⑩）而予以加重量刑！</strong>
                    </p>
                  </div>
                </div>

                <!-- 原則 4: 不當聯結禁止原則 -->
                <div class="p-5 rounded-3xl bg-white dark:bg-slate-900 border-2 border-l-[8px] border-purple-500 space-y-3 shadow-xs">
                  <div class="flex items-center justify-between">
                    <span class="text-xs font-mono font-bold text-purple-600 dark:text-purple-400 flex items-center gap-1.5">
                      <span>🔗</span>
                      <span>(四) 不當聯結禁止原則</span>
                    </span>
                    <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-purple-50 dark:bg-purple-950 text-purple-600 dark:text-purple-400 font-bold">
                      關聯性要求
                    </span>
                  </div>
                  <h5 class="text-sm font-bold text-slate-900 dark:text-white">
                    操作「行為人人格品性」必須與本罪行為直接相關
                  </h5>
                  <p class="text-[11.5px] text-slate-600 dark:text-slate-300 leading-relaxed">
                    在操作刑法第 57 條第 ⑤ 款「行為人之品行」時，必須以<strong>已經成為人格特徵、並直接形成犯罪行為的建構基礎者</strong>，才能作為量刑因子。
                  </p>
                  <div class="p-3.5 sm:p-4 rounded-2xl bg-purple-100/90 dark:bg-purple-950/70 border border-purple-400 dark:border-purple-600 shadow-sm space-y-1.5">
                    <div class="font-bold text-purple-800 dark:text-purple-300 flex items-center gap-1.5">
                      <span>⚖️</span>
                      <span class="text-[12px] font-black tracking-wide">司法誡命・嚴禁不當聯結</span>
                    </div>
                    <p class="leading-relaxed text-[11.5px] font-medium text-slate-800 dark:text-slate-200">
                      與本案犯罪事實毫無實質因果關聯的生活不良習慣、私德瑕疵或家族出身，<strong class="text-purple-700 dark:text-purple-300 font-extrabold underline decoration-purple-400 underline-offset-2">法官均不得恣意聯結作為加重量刑之理由！</strong>
                    </p>
                  </div>
                </div>

              </div>
            </div>

            <!-- 🐣 小白秒懂專區：§ 57 量刑十款與四大憲法原則 -->
            <div class="p-5 sm:p-6 rounded-3xl bg-blue-500/10 border-2 border-l-[8px] border-blue-500 space-y-4">
              <div class="flex items-center justify-between border-b border-blue-500/20 pb-2">
                <span class="font-extrabold text-blue-700 dark:text-blue-300 text-sm sm:text-base flex items-center gap-2">
                  <span class="animate-bounce">🐣</span> 小白秒懂專區：§ 57 量刑十款與四大憲法原則
                </span>
                <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-500/20 text-blue-800 dark:text-blue-200 font-bold">
                  SENTENCING FACTORS & PRINCIPLES
                </span>
              </div>
              <p class="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                處斷刑像籃球場的邊界線，而法官要在這個球場裡投出最精準的「宣告刑」點位，必須遵守四大黃金鐵律：
              </p>
              <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div class="p-3.5 rounded-2xl bg-white dark:bg-slate-900 border border-blue-200 dark:border-blue-900/60 space-y-1.5">
                  <div class="font-bold text-blue-600 dark:text-blue-400 text-xs flex items-center gap-1.5">
                    <span>1️⃣</span> 十款只是參考清單（例示規定）
                  </div>
                  <p class="text-[11.5px] text-slate-600 dark:text-slate-300 leading-relaxed">
                    法條寫的 10 款不是鎖死的。法官可以看任何能證明被告可惡或可憐的客觀細節（例如有沒有積極跟被害人和解）。
                  </p>
                </div>
                <div class="p-3.5 rounded-2xl bg-white dark:bg-slate-900 border border-blue-200 dark:border-blue-900/60 space-y-1.5">
                  <div class="font-bold text-blue-600 dark:text-blue-400 text-xs flex items-center gap-1.5">
                    <span>2️⃣</span> 絕不能「一罪兩罰」（禁止重複評價）
                  </div>
                  <p class="text-[11.5px] text-slate-600 dark:text-slate-300 leading-relaxed">
                    如果某個事實已經在罪名裡加重過（例如殺爸爸已經加重1/2），量刑時法官就<strong>不能再拿「因為被害人是你爸」二次加重</strong>！
                  </p>
                </div>
                <div class="p-3.5 rounded-2xl bg-white dark:bg-slate-900 border border-blue-200 dark:border-blue-900/60 space-y-1.5">
                  <div class="font-bold text-blue-600 dark:text-blue-400 text-xs flex items-center gap-1.5">
                    <span>3️⃣</span> 被告保持沉默，絕不能加重！（99台上6995）
                  </div>
                  <p class="text-[11.5px] text-slate-600 dark:text-slate-300 leading-relaxed">
                    憲法保障人民緘默權。被告在法庭上說「我拒絕回答」或「我不認罪」，法官<strong>絕對不能當成「態度惡劣」而重判</strong>！
                  </p>
                </div>
              </div>
            </div>
          </section>

          <!-- ==================== 三、超出處斷刑範圍的「量刑補充規則」 ==================== -->
          <section id="sec-p0ch3-sec3-supplementary-rules" class="space-y-6 pt-2">
            <div class="flex items-center justify-between border-b border-slate-100 dark:border-white/[0.06] pb-2">
              <div class="flex items-center gap-3">
                <span class="w-2 h-6 rounded-full bg-emerald-600"></span>
                <h3 class="text-lg sm:text-xl font-black text-slate-900 dark:text-white tracking-tight">
                  三、超出處斷刑範圍的「量刑補充規則」（教材第 2-31 ～ 2-32 頁）
                </h3>
              </div>
              <span class="text-[11px] font-mono px-2 py-0.5 rounded bg-emerald-50 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 font-bold">
                例外打破處斷刑
              </span>
            </div>

            <div class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              這些都是<strong>容許法官超出處斷刑以外量刑的例外情形</strong>，乃法律賦予法官對抗極端不合情理個案的最後衡平機制，適用時<strong>必須審慎以對</strong>。
            </div>

            <!-- 三大補充規則展示卡片 -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
              
              <!-- 1. 酌加 (§ 58) -->
              <div class="p-5 rounded-3xl bg-white dark:bg-slate-900 border-2 border-l-[8px] border-rose-500 space-y-3 flex flex-col justify-between shadow-xs">
                <div class="space-y-2.5">
                  <div class="flex items-center justify-between">
                    <span class="font-bold text-rose-700 dark:text-rose-400 flex items-center gap-1.5">
                      <span>📈</span>
                      <span>(一) 酌加（§ 58）</span>
                    </span>
                    <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-rose-50 dark:bg-rose-950 text-rose-700 dark:text-rose-300 font-bold">
                      高於法定最高額
                    </span>
                  </div>
                  <h5 class="text-sm font-bold text-slate-900 dark:text-white">
                    所得利益範圍內加重罰金
                  </h5>
                  <p class="text-[11.5px] text-slate-600 dark:text-slate-300 leading-relaxed">
                    科罰金時，如行為人<strong>因犯罪而所得之利益超過罰金最多額</strong>，得於其<strong>所得利益之範圍內酌量加重</strong>。
                  </p>
                </div>
                <div class="p-3.5 sm:p-4 rounded-2xl bg-rose-100/90 dark:bg-rose-950/70 border border-rose-400 dark:border-rose-600 shadow-sm space-y-1.5">
                  <div class="font-bold text-rose-800 dark:text-rose-300 flex items-center gap-1.5">
                    <span>💡</span>
                    <span class="text-[12px] font-black tracking-wide">核心法理・剝奪不法利得</span>
                  </div>
                  <p class="leading-relaxed text-[11.5px] font-medium text-slate-800 dark:text-slate-200">
                    避免法定罰金刑上限過低，導致行為人繳完罰金後依然<strong class="text-rose-700 dark:text-rose-300 font-extrabold underline decoration-rose-400 underline-offset-2">「有利可圖」！</strong>
                  </p>
                </div>
              </div>

              <!-- 2. 酌減 (§ 59、§ 60) -->
              <div class="p-5 rounded-3xl bg-white dark:bg-slate-900 border-2 border-l-[8px] border-blue-500 space-y-3 flex flex-col justify-between shadow-xs">
                <div class="space-y-2.5">
                  <div class="flex items-center justify-between">
                    <span class="font-bold text-blue-700 dark:text-blue-400 flex items-center gap-1.5">
                      <span>📉</span>
                      <span>(二) 酌減（§ 59、§ 60）</span>
                    </span>
                    <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300 font-bold">
                      低於法定最低刑
                    </span>
                  </div>
                  <h5 class="text-sm font-bold text-slate-900 dark:text-white">
                    犯罪之情狀顯可憫恕
                  </h5>
                  <p class="text-[11.5px] text-slate-600 dark:text-slate-300 leading-relaxed">
                    犯罪之情狀顯可憫恕，認科以最低度刑仍嫌過重者，<strong>得酌量減輕其刑</strong>。
                  </p>
                </div>
                <div class="p-3.5 sm:p-4 rounded-2xl bg-amber-100/90 dark:bg-amber-950/70 border border-amber-400 dark:border-amber-600 shadow-sm space-y-1.5">
                  <div class="font-bold text-amber-800 dark:text-amber-300 flex items-center gap-1.5">
                    <span>⚠️</span>
                    <span class="text-[12px] font-black tracking-wide">教材警語・實務認定十分浮濫</span>
                  </div>
                  <p class="leading-relaxed text-[11.5px] font-medium text-slate-800 dark:text-slate-200">
                    實務上的認定<strong class="text-amber-700 dark:text-amber-300 font-extrabold underline decoration-amber-400 underline-offset-2">十分浮濫</strong>，只要犯罪之情狀顯可憫恕，便得酌減（如老病照顧弒親悲劇，法官常依 § 59 減刑至得易科罰金或緩刑之門檻）。
                  </p>
                </div>
              </div>

              <!-- 3. 酌免 (§ 61) -->
              <div class="p-5 rounded-3xl bg-white dark:bg-slate-900 border-2 border-l-[8px] border-emerald-500 space-y-3 flex flex-col justify-between shadow-xs">
                <div class="space-y-2.5">
                  <div class="flex items-center justify-between">
                    <span class="font-bold text-emerald-700 dark:text-emerald-400 flex items-center gap-1.5">
                      <span>🕊️</span>
                      <span>(三) 酌免（§ 61）</span>
                    </span>
                    <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-50 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 font-bold">
                      有罪免刑
                    </span>
                  </div>
                  <h5 class="text-sm font-bold text-slate-900 dark:text-white">
                    微罪情節輕微得免除其刑
                  </h5>
                  <p class="text-[11.5px] text-slate-600 dark:text-slate-300 leading-relaxed">
                    犯特定微罪（最重本刑 3 年以下等），情節輕微顯可憫恕，認受刑之宣告為不必要者，<strong>得免除其刑</strong>。
                  </p>
                </div>
                <div class="p-3.5 sm:p-4 rounded-2xl bg-emerald-100/90 dark:bg-emerald-950/70 border border-emerald-400 dark:border-emerald-600 shadow-sm space-y-1.5">
                  <div class="font-bold text-emerald-800 dark:text-emerald-300 flex items-center gap-1.5">
                    <span>⭐</span>
                    <span class="text-[12px] font-black tracking-wide">關鍵本質・依然是有罪判決</span>
                  </div>
                  <p class="leading-relaxed text-[11.5px] font-medium text-slate-800 dark:text-slate-200">
                    <strong class="text-emerald-800 dark:text-emerald-200 font-extrabold underline decoration-emerald-400 underline-offset-2">「不過還是有罪判決」！</strong>犯罪三階層（TB+R+S）全部成立，僅因刑事政策考量免除刑罰制裁。
                  </p>
                </div>
              </div>

            </div>

            <!-- 🐣 小白秒懂專區：超出處斷刑三大錦囊 -->
            <div class="p-5 sm:p-6 rounded-3xl bg-emerald-500/10 border-2 border-l-[8px] border-emerald-500 space-y-4">
              <div class="flex items-center justify-between border-b border-emerald-500/20 pb-2">
                <span class="font-extrabold text-emerald-700 dark:text-emerald-300 text-sm sm:text-base flex items-center gap-2">
                  <span class="animate-bounce">🐣</span> 小白秒懂專區：超出處斷刑三大錦囊（§ 58、§ 59、§ 61）
                </span>
                <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-800 dark:text-emerald-200 font-bold">
                  BEYOND PENALTY RANGE
                </span>
              </div>
              <p class="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                刑法處斷刑原本是銅牆鐵壁，但遇到法律跟人情極端碰撞時，法官口袋裡有這三大特殊救濟錦囊：
              </p>
              <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div class="p-3.5 rounded-2xl bg-white dark:bg-slate-900 border border-emerald-200 dark:border-emerald-900/60 space-y-1.5">
                  <div class="font-bold text-emerald-600 dark:text-emerald-400 text-xs flex items-center gap-1.5">
                    <span>1️⃣</span> § 58 酌加：不准黑心發大財
                  </div>
                  <p class="text-[11.5px] text-slate-600 dark:text-slate-300 leading-relaxed">
                    違法撈了 1 億元，法條最高罰金卻只有 50 萬元？法官可用 § 58 在「犯罪所得利益內」加重罰金，把你賺的不義之財全吐出來！
                  </p>
                </div>
                <div class="p-3.5 rounded-2xl bg-white dark:bg-slate-900 border border-emerald-200 dark:border-emerald-900/60 space-y-1.5">
                  <div class="font-bold text-emerald-600 dark:text-emerald-400 text-xs flex items-center gap-1.5">
                    <span>2️⃣</span> § 59 酌減：情堪憫恕的破底解法
                  </div>
                  <p class="text-[11.5px] text-slate-600 dark:text-slate-300 leading-relaxed">
                    如長照悲歌老翁殺害久病老伴，殺人罪起跳是10年徒刑，法官同情處境覺得判10年都嫌太重，可用 § 59 減刑，甚至減到可以緩刑不用坐牢。
                  </p>
                </div>
                <div class="p-3.5 rounded-2xl bg-white dark:bg-slate-900 border border-emerald-200 dark:border-emerald-900/60 space-y-1.5">
                  <div class="font-bold text-emerald-600 dark:text-emerald-400 text-xs flex items-center gap-1.5">
                    <span>3️⃣</span> § 61 酌免：有罪免刑≠無罪
                  </div>
                  <p class="text-[11.5px] text-slate-600 dark:text-slate-300 leading-relaxed">
                    極輕微的小罪（如飢餓偷一顆茶葉蛋），情節可憫，法官可以判「免刑」。但千萬要記住：<strong>這依然是有罪判決</strong>，不是無罪放人！
                  </p>
                </div>
              </div>
            </div>
          </section>

          <!-- ==================== 四、刑罰量定全景對比總表 ==================== -->
          <section id="sec-p0ch3-sec3-comparison-matrix" class="space-y-4 pt-2">
            <div class="flex items-center justify-between border-b border-slate-100 dark:border-white/[0.06] pb-2">
              <div class="flex items-center gap-3">
                <span class="w-2 h-6 rounded-full bg-purple-600"></span>
                <h3 class="text-base sm:text-lg font-black text-slate-900 dark:text-white tracking-tight">
                  四、刑罰四階段思考與處斷刑內外量刑總結
                </h3>
              </div>
              <span class="text-[11px] font-mono px-2 py-0.5 rounded bg-purple-50 dark:bg-purple-950 text-purple-600 dark:text-purple-400 font-bold">
                統整矩陣
              </span>
            </div>

            <div class="overflow-x-auto rounded-2xl border-2 border-slate-200 dark:border-slate-800">
              <table class="w-full text-left text-xs border-collapse">
                <thead>
                  <tr class="bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-200 font-bold border-b border-slate-200 dark:border-slate-700">
                    <th class="p-3">量刑運作層次</th>
                    <th class="p-3">依據法條</th>
                    <th class="p-3">核心規範機制</th>
                    <th class="p-3">法律效果與界限</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-slate-100 dark:divide-slate-800 text-slate-600 dark:text-slate-300">
                  <tr class="hover:bg-slate-50 dark:hover:bg-slate-800/40">
                    <td class="p-3 font-bold text-blue-600 dark:text-blue-400">處斷刑內量刑</td>
                    <td class="p-3 font-mono font-bold">§ 57 十款</td>
                    <td class="p-3">以罪責為基礎，審酌動機、手段、被害關係、犯後態度等一切情狀。</td>
                    <td class="p-3">嚴格受<strong>處斷刑上下限拘束</strong>，挑選出一個確定刑度點（宣告刑）。</td>
                  </tr>
                  <tr class="hover:bg-slate-50 dark:hover:bg-slate-800/40">
                    <td class="p-3 font-bold text-rose-600 dark:text-rose-400">超出處斷刑：酌加</td>
                    <td class="p-3 font-mono font-bold">§ 58</td>
                    <td class="p-3">犯罪所得利益超過罰金最多額時發動。</td>
                    <td class="p-3"><strong>突破法定最高額</strong>，於所得利益範圍內加重罰金。</td>
                  </tr>
                  <tr class="hover:bg-slate-50 dark:hover:bg-slate-800/40">
                    <td class="p-3 font-bold text-amber-600 dark:text-amber-400">超出處斷刑：酌減</td>
                    <td class="p-3 font-mono font-bold">§ 59、§ 60</td>
                    <td class="p-3">犯罪情狀顯可憫恕，科最低度刑仍嫌過重時發動。</td>
                    <td class="p-3"><strong>跌破法定最低刑</strong>，酌量減輕其刑（實務浮濫）。</td>
                  </tr>
                  <tr class="hover:bg-slate-50 dark:hover:bg-slate-800/40">
                    <td class="p-3 font-bold text-emerald-600 dark:text-emerald-400">超出處斷刑：酌免</td>
                    <td class="p-3 font-mono font-bold">§ 61</td>
                    <td class="p-3">特定微罪且情節輕微顯可憫恕，認宣告刑為不必要。</td>
                    <td class="p-3"><strong>免除其刑</strong>（仍屬實體<strong>有罪判決</strong>，非無罪）。</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <!-- ==================== Chapter Bottom Pagination: 第三節底部雙向導航 ==================== -->
          <div class="pt-8 border-t border-slate-200 dark:border-white/[0.08] grid grid-cols-1 sm:grid-cols-2 gap-4">
            <button onclick="switchView('part0-ch3-sec2')" class="group p-4 rounded-2xl border border-slate-200 dark:border-white/[0.08] hover:border-indigo-500/40 bg-white dark:bg-[#111726] text-left transition-all hover:-translate-y-0.5 shadow-sm hover:shadow-md flex items-center gap-3 cursor-pointer">
              <div class="w-9 h-9 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 group-hover:bg-indigo-50 dark:group-hover:bg-indigo-950 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 flex items-center justify-center text-sm font-bold shrink-0 transition-colors">
                ←
              </div>
              <div class="min-w-0">
                <span class="text-[11px] text-slate-400 font-mono block">上一單元 (教材第 2-29 ～ 2-31 頁)</span>
                <span class="text-xs font-bold text-slate-800 dark:text-slate-200 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors truncate block">
                  第二節 刑罰的調整——兼談處斷刑
                </span>
              </div>
            </button>

            <button onclick="switchView('part0-ch3-sec4')" class="group p-4 rounded-2xl border border-indigo-500/40 hover:border-indigo-500 bg-gradient-to-br from-indigo-50/50 to-blue-50/30 dark:from-indigo-950/30 dark:to-blue-950/20 text-right transition-all hover:-translate-y-0.5 shadow-sm hover:shadow-md flex items-center justify-between gap-3 cursor-pointer">
              <div class="min-w-0 text-left">
                <span class="text-[11px] text-indigo-700 dark:text-indigo-400 font-mono block font-bold">下一單元 (教材第 2-32 ～ 2-37 頁)</span>
                <span class="text-xs font-extrabold text-slate-900 dark:text-white group-hover:text-indigo-700 dark:group-hover:text-indigo-400 transition-colors truncate block">
                  第四節 刑罰的執行——兼談執行刑 →
                </span>
              </div>
              <div class="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 to-indigo-600 text-white flex items-center justify-center text-sm font-bold shrink-0 group-hover:scale-105 transition-transform shadow-md shadow-indigo-500/30">
                →
              </div>
            </button>
          </div>

        </div>
`;
