// =========================================================================
// 《圖說刑法總則【圖說系列】知識庫閱覽器》視圖模組 (view-part0-ch3-sec3.js)
// 第零篇 刑法的運作原理・第三章 刑法的法律效果
// 第三節 刑罰的量定——兼談宣告刑（教材第 2-31 ～ 2-32 頁）
// 遵循 AGENTS.md 憲法：Zero-CORS 本機秒開、單欄垂直堆疊、純紅底線重點、犬系四大天王法學劇院
// =========================================================================

window.APP_VIEWS = window.APP_VIEWS || {};

window.APP_VIEWS['viewPart0Ch3Sec3'] = `
        <div id="viewPart0Ch3Sec3" class="fade-enter space-y-8 max-w-4xl mx-auto pb-16">

          <!-- 頂部導航麵包屑 -->
          <nav aria-label="Breadcrumb" class="text-xs font-mono text-slate-500 dark:text-slate-400 flex items-center gap-2">
            <span class="hover:text-rose-600 cursor-pointer" onclick="switchView('part0')">第零篇 刑法的運作原理</span>
            <span>/</span>
            <span class="hover:text-rose-600 cursor-pointer" onclick="switchView('part0-ch3')">第三章 刑法的法律效果</span>
            <span>/</span>
            <span class="text-rose-600 dark:text-rose-400 font-bold">第三節 刑罰的量定——兼談宣告刑</span>
          </nav>

          <!-- 節大標題與規格卡片 (教材 1:1 復刻風格) -->
          <header class="relative p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-rose-50/70 via-white to-amber-50/40 dark:from-slate-900 dark:via-slate-900/90 dark:to-rose-950/20 border border-rose-200/60 dark:border-rose-900/40 shadow-sm">
            <div class="flex flex-wrap items-center justify-between gap-3 mb-4">
              <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-rose-100/80 dark:bg-rose-950/60 text-rose-800 dark:text-rose-300 border border-rose-200/60 dark:border-rose-800/40">
                <span class="w-2 h-2 rounded-full bg-rose-500 animate-pulse"></span>
                <span>教材第 2-31 ～ 2-32 頁</span>
              </div>
              <div class="flex items-center gap-2">
                <span class="text-xs font-mono text-slate-500 dark:text-slate-400">P. 2-31 ~ 2-32</span>
                <span class="px-2 py-0.5 text-[11px] font-mono rounded bg-slate-200/60 dark:bg-slate-800 text-slate-700 dark:text-slate-300">§ 57～§ 61</span>
              </div>
            </div>

            <div class="space-y-2">
              <div class="inline-block px-2.5 py-1 text-xs font-mono font-bold rounded-md bg-rose-500 text-white shadow-xs">
                第三節
              </div>
              <h1 class="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight font-serif">
                刑罰的量定——兼談宣告刑
              </h1>
              <p class="text-sm sm:text-base text-slate-600 dark:text-slate-300 font-serif leading-relaxed pt-1">
                從相對不定期刑走向具體確定：法官在處斷刑框架內，以<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">罪刑相當原則</span>為指引，裁定公平合理之宣告刑。
              </p>
            </div>
          </header>

          <!-- 核心原則導讀：罪刑相當與宣告刑本質 -->
          <section id="sec-p0ch3-sec3-core" class="p-6 sm:p-7 rounded-2xl bg-white dark:bg-[#111726] border-l-8 border-l-rose-500 border border-slate-200 dark:border-white/[0.08] shadow-sm space-y-4">
            <div class="flex items-center gap-2.5">
              <span class="text-xl">⚖️</span>
              <h2 class="text-lg font-bold text-slate-900 dark:text-white">
                量刑中心思想：罪刑相當原則與宣告刑
              </h2>
            </div>
            <div class="space-y-3 font-serif text-sm sm:text-base leading-relaxed text-slate-700 dark:text-slate-300">
              <p>
                決定量刑的中心思想是<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">罪刑相當原則</span>，意指刑事處罰必須與行為所具有的<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">罪責相當</span>，個案中所有施加的刑罰不得超過罪責之範圍。
              </p>
              <p>
                雖然刑罰經過<span class="font-bold text-slate-900 dark:text-slate-100">法定刑</span>與<span class="font-bold text-slate-900 dark:text-slate-100">處斷刑</span>的確認，但依然是一個（相對）不定期刑，法官必須在這個框架內依據罪刑相當原則找出：
              </p>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                <div class="p-3.5 rounded-xl bg-rose-50/50 dark:bg-rose-950/20 border border-rose-200/50 dark:border-rose-900/30">
                  <span class="text-xs font-mono font-bold text-rose-700 dark:text-rose-400 block mb-1">【合理的刑罰】</span>
                  <p class="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200">
                    小罪不能大罰，大罪不能小罰。
                  </p>
                </div>
                <div class="p-3.5 rounded-xl bg-blue-50/50 dark:bg-blue-950/20 border border-blue-200/50 dark:border-blue-900/30">
                  <span class="text-xs font-mono font-bold text-blue-700 dark:text-blue-400 block mb-1">【公平的刑罰】</span>
                  <p class="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200">
                    同等情況受同等對待，不同情況受不同對待。
                  </p>
                </div>
              </div>
              <p class="pt-1 text-xs sm:text-sm text-slate-500 dark:text-slate-400 italic">
                而這個由法官在框架內最終選定並於裁判主文載明的具體刑罰，即稱作<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">宣告刑</span>。
              </p>
            </div>
          </section>

          <!-- 一、在處斷刑範圍內的「量刑考量標的」（§ 57） -->
          <section id="sec-p0ch3-sec3-considerations" class="p-6 sm:p-7 rounded-2xl bg-white dark:bg-[#111726] border-l-8 border-l-blue-600 border border-slate-200 dark:border-white/[0.08] shadow-sm space-y-5">
            <div class="flex items-center justify-between flex-wrap gap-2">
              <div class="flex items-center gap-2.5">
                <span class="text-xl">📋</span>
                <h2 class="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                  一、在處斷刑範圍內的「量刑考量標的」（§ 57）
                </h2>
              </div>
              <span class="text-xs font-mono px-2.5 py-1 rounded bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300 border border-blue-200/60 dark:border-blue-800/40">
                法定審酌事項
              </span>
            </div>

            <!-- 法條原文速查卡片 -->
            <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-2">
              <div class="flex items-center justify-between">
                <span class="text-xs font-mono font-bold text-blue-600 dark:text-blue-400">📖 刑法第 57 條（量刑審酌事由）</span>
                <span class="text-[11px] font-mono text-slate-400">現行條文</span>
              </div>
              <p class="text-xs sm:text-sm font-serif leading-relaxed text-slate-700 dark:text-slate-300">
                科刑時應以行為人之責任為基礎，並審酌一切情狀，尤應注意下列事項，為科刑輕重之標準：<br>
                <span class="font-mono text-xs text-slate-500 dark:text-slate-400 block pt-1.5 space-y-0.5">
                  一、犯罪之動機、目的。　二、犯罪時所受之刺激。<br>
                  三、犯罪之手段。　　　　四、犯人之生活狀況。<br>
                  五、犯人之品行。　　　　六、犯人之智識程度。<br>
                  七、犯人與被害人之關係。八、犯人違反義務之程度。<br>
                  九、犯罪所生之危險或損害。十、犯罪後之態度。
                </span>
              </p>
            </div>

            <!-- 教材核心四大原則解析 -->
            <div class="space-y-3">
              <h3 class="text-sm font-bold text-slate-800 dark:text-slate-200 flex items-center gap-2">
                <span>🔍</span> 刑法 § 57 操作之四大憲法與法理鐵則（教材重點精梳）
              </h3>

              <!-- 鐵則一 -->
              <div class="p-4 rounded-xl bg-slate-50/60 dark:bg-slate-900/40 border border-slate-200/80 dark:border-white/[0.05] space-y-1.5">
                <div class="flex items-center gap-2">
                  <span class="w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 flex items-center justify-center text-xs font-bold shrink-0">1</span>
                  <h4 class="font-bold text-slate-900 dark:text-white text-sm">
                    各款僅為「例示規定」，並非列舉規定
                  </h4>
                </div>
                <p class="text-xs sm:text-sm font-serif leading-relaxed text-slate-600 dark:text-slate-300 pl-8">
                  刑法第 57 條列出之十款事由僅屬例示，法官於個案中<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">可以考量法條文字以外的因素</span>，只要該因素與行為人責任具有實質內在關聯。
                </p>
              </div>

              <!-- 鐵則二 -->
              <div class="p-4 rounded-xl bg-slate-50/60 dark:bg-slate-900/40 border border-slate-200/80 dark:border-white/[0.05] space-y-1.5">
                <div class="flex items-center gap-2">
                  <span class="w-6 h-6 rounded-full bg-rose-100 dark:bg-rose-950 text-rose-700 dark:text-rose-300 flex items-center justify-center text-xs font-bold shrink-0">2</span>
                  <h4 class="font-bold text-slate-900 dark:text-white text-sm">
                    禁止重複評價原則（Ne bis in idem 精神延伸）
                  </h4>
                </div>
                <p class="text-xs sm:text-sm font-serif leading-relaxed text-slate-600 dark:text-slate-300 pl-8">
                  若該審酌事項<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">已經列入加重或減輕犯罪成立要件</span>中，量刑時就<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">不能再重複評價</span>。<br>
                  <span class="text-slate-500 dark:text-slate-400 text-xs italic">
                    📘 課本經典舉例：例如殺害直系血親尊親屬罪（§ 272），法律已因親屬身分加重刑度二分之一，於量定宣告刑時，法官便不能再依 § 57 第七款重複評價一次「行為人與被害人之關係」作為加重宣告之事由！
                  </span>
                </p>
              </div>

              <!-- 鐵則三 -->
              <div class="p-4 rounded-xl bg-slate-50/60 dark:bg-slate-900/40 border border-slate-200/80 dark:border-white/[0.05] space-y-1.5">
                <div class="flex items-center gap-2">
                  <span class="w-6 h-6 rounded-full bg-amber-100 dark:bg-amber-950 text-amber-700 dark:text-amber-300 flex items-center justify-center text-xs font-bold shrink-0">3</span>
                  <h4 class="font-bold text-slate-900 dark:text-white text-sm">
                    權利行使禁止不利推論（行使緘默權非態度不佳）
                  </h4>
                </div>
                <p class="text-xs sm:text-sm font-serif leading-relaxed text-slate-600 dark:text-slate-300 pl-8">
                  <span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">權利的行使不得作為加重量刑的事由</span>。<br>
                  比如說被告在偵審中行使憲法保障之緘默權，<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">不得認為是犯罪後之態度不佳</span>。（<span class="font-bold text-amber-600 dark:text-amber-400">99 台上 6995 決</span>）
                </p>
              </div>

              <!-- 鐵則四 -->
              <div class="p-4 rounded-xl bg-slate-50/60 dark:bg-slate-900/40 border border-slate-200/80 dark:border-white/[0.05] space-y-1.5">
                <div class="flex items-center gap-2">
                  <span class="w-6 h-6 rounded-full bg-purple-100 dark:bg-purple-950 text-purple-700 dark:text-purple-300 flex items-center justify-center text-xs font-bold shrink-0">4</span>
                  <h4 class="font-bold text-slate-900 dark:text-white text-sm">
                    不當聯結禁止原則（人格品性之嚴格關聯）
                  </h4>
                </div>
                <p class="text-xs sm:text-sm font-serif leading-relaxed text-slate-600 dark:text-slate-300 pl-8">
                  在操作 § 57 第五款「行為人人格品性」時，須以<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">已經成為人格特徵並直接形成犯罪行為的建構基礎者</span>，才能作為量刑因素。嚴禁法官以被告平日無關犯罪之個人偏好、私生活或政治傾向做恣意不利連結。
                </p>
              </div>
            </div>
          </section>

          <!-- 二、超出處斷刑範圍的「量刑補充規則」 -->
          <section id="sec-p0ch3-sec3-exceptional" class="p-6 sm:p-7 rounded-2xl bg-white dark:bg-[#111726] border-l-8 border-l-purple-600 border border-slate-200 dark:border-white/[0.08] shadow-sm space-y-5">
            <div class="flex items-center justify-between flex-wrap gap-2">
              <div class="flex items-center gap-2.5">
                <span class="text-xl">⚡</span>
                <h2 class="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                  二、超出處斷刑範圍的「量刑補充規則」
                </h2>
              </div>
              <span class="text-xs font-mono px-2.5 py-1 rounded bg-purple-50 dark:bg-purple-950/40 text-purple-700 dark:text-purple-300 border border-purple-200/60 dark:border-purple-800/40">
                例外突破處斷刑
              </span>
            </div>

            <p class="text-xs sm:text-sm font-serif leading-relaxed text-slate-600 dark:text-slate-300">
              這些都是容許法官<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">超出處斷刑以外量刑的例外情形</span>，屬於實質正義之安全閥機制，適用時必須審慎以對：
            </p>

            <div class="space-y-4">
              <!-- (一) 酌加 (§ 58) -->
              <div class="p-4 rounded-xl bg-purple-50/40 dark:bg-purple-950/20 border border-purple-200/60 dark:border-purple-900/40 space-y-2">
                <div class="flex items-center justify-between">
                  <div class="flex items-center gap-2">
                    <span class="px-2 py-0.5 rounded bg-purple-600 text-white text-xs font-bold font-mono">㈠ 酌加</span>
                    <span class="text-sm font-bold text-purple-900 dark:text-purple-200">罰金之酌加（§ 58）</span>
                  </div>
                  <span class="text-xs font-mono text-purple-600 dark:text-purple-400">突破法定上限</span>
                </div>
                <p class="text-xs sm:text-sm font-serif leading-relaxed text-slate-700 dark:text-slate-300">
                  <span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">高於法定最高額之罰金</span>，在<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">行為人所得利益範圍內</span>酌加。<br>
                  <span class="text-xs text-slate-500 dark:text-slate-400">
                    💡 原理：剝奪犯罪誘因，防止犯人「罰金幾十萬、犯罪賺幾千萬」的荒謬套利現象。
                  </span>
                </p>
              </div>

              <!-- (二) 酌減 (§ 59、§ 60) -->
              <div class="p-4 rounded-xl bg-amber-50/40 dark:bg-amber-950/20 border border-amber-200/60 dark:border-amber-900/40 space-y-2">
                <div class="flex items-center justify-between">
                  <div class="flex items-center gap-2">
                    <span class="px-2 py-0.5 rounded bg-amber-600 text-white text-xs font-bold font-mono">㈡ 酌減</span>
                    <span class="text-sm font-bold text-amber-900 dark:text-amber-200">酌量減輕（§ 59、§ 60）</span>
                  </div>
                  <span class="text-xs font-mono text-amber-600 dark:text-amber-400">突破法定下限</span>
                </div>
                <p class="text-xs sm:text-sm font-serif leading-relaxed text-slate-700 dark:text-slate-300">
                  <span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">低於法定最低刑之減輕</span>。<br>
                  作者於書中直言：<span class="italic text-slate-600 dark:text-slate-400">「實務上的認定十分浮濫，只要犯罪之情狀顯可憫恕，便得酌減。」</span><br>
                  <span class="text-xs text-slate-500 dark:text-slate-400">
                    ⚖️ 刑法第 59 條：犯罪之情狀顯可憫恕，認科以最低度刑仍嫌過重者，得酌量減輕其刑。（依 § 60 處斷刑前減輕規定，仍得減至法定最低刑以下）
                  </span>
                </p>
              </div>

              <!-- (三) 酌免 (§ 61) -->
              <div class="p-4 rounded-xl bg-emerald-50/40 dark:bg-emerald-950/20 border border-emerald-200/60 dark:border-emerald-900/40 space-y-2">
                <div class="flex items-center justify-between">
                  <div class="flex items-center gap-2">
                    <span class="px-2 py-0.5 rounded bg-emerald-600 text-white text-xs font-bold font-mono">㈢ 酌免</span>
                    <span class="text-sm font-bold text-emerald-900 dark:text-emerald-200">微罪免除其刑（§ 61）</span>
                  </div>
                  <span class="text-xs font-mono text-emerald-600 dark:text-emerald-400">免除刑罰執行</span>
                </div>
                <p class="text-xs sm:text-sm font-serif leading-relaxed text-slate-700 dark:text-slate-300">
                  對於微罪<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">得免除其刑</span>，不過<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">還是有罪判決</span>。<br>
                  <span class="text-xs text-slate-500 dark:text-slate-400">
                    🛡️ 定性警示：法官認定被告「有罪」，但因情節輕微、憫恕可原，宣告「免除其刑」。它不同於無罪判決，依然會留下實體違法罪責的前案紀錄！
                  </span>
                </p>
              </div>
            </div>
          </section>

          <!-- 三、犬系四大天王法學劇院：五位一體深度演繹 -->
          <section id="sec-p0ch3-sec3-theatre" class="space-y-4">
            <div class="flex items-center gap-2">
              <span class="text-xl">🎭</span>
              <h3 class="text-lg font-black text-slate-900 dark:text-white">
                犬系法學四大天王導師席 • 宣告刑量定實戰拆解
              </h3>
            </div>

            <!-- 單欄垂直堆疊 (遵循嚴禁並排原則) -->
            <div class="space-y-3">

              <!-- 🐾 柴柴法學教授 • 白話生活大解碼 -->
              <div class="p-5 sm:p-6 rounded-2xl bg-white dark:bg-[#111726] border-l-8 border-l-amber-500 border border-slate-200 dark:border-white/[0.08] shadow-sm space-y-3">
                <div class="flex items-center justify-between">
                  <div class="flex items-center gap-3">
                    <div class="w-12 h-12 rounded-xl overflow-hidden border-2 border-amber-400 shadow-md shrink-0">
                      <img src="images/shiba_law_professor.jpg" alt="柴柴法學教授" class="w-full h-full object-cover" style="object-position: center 20%; transform: scale(1.38);"/>
                    </div>
                    <div>
                      <h4 class="font-black text-slate-900 dark:text-white text-sm sm:text-base">
                        🐾 柴柴法學教授 • 白話生活大解碼
                      </h4>
                      <span class="text-xs font-mono text-amber-600 dark:text-amber-400">PROF. SHIBA · #量刑大賣場的結帳金額</span>
                    </div>
                  </div>
                  <span class="text-xs font-mono px-2.5 py-1 rounded bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-300 border border-amber-200/60 dark:border-amber-900/40">
                    生活白話
                  </span>
                </div>

                <div class="font-serif text-xs sm:text-[13.5px] leading-relaxed text-slate-700 dark:text-slate-300 space-y-2">
                  <p>
                    大家可以把刑罰的四階段想像成<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">去量販店買家電結帳</span>：
                  </p>
                  <p>
                    ① 架上的價格標籤寫著「建議售價 1 萬～ 5 萬元」，這就是<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">法定刑</span>。<br>
                    ② 櫃檯看你有沒有會員累犯加價、或是自首早鳥折價券，把範圍調整為「2 萬～ 4 萬元」，這就是<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">處斷刑</span>。<br>
                    ③ 接著，店長（法官）看你的平時態度、買家電做什麼用途（§ 57 審酌事由），決定結帳單敲定為「2 萬 8 千元」，這就是<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">宣告刑</span>！
                  </p>
                  <p>
                    但要是你賺太多贓款，店長能動用 § 58 往上突破加罰（<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">酌加</span>）；要是你身世悽慘被逼無奈，店長能動用 § 59 打骨折降價（<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">酌減</span>）；甚至是偷一包泡麵快餓死，店長直接給個警告免單（<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">酌免</span>）！
                  </p>
                </div>
              </div>

              <!-- ⚖️ 金毛大律師 • 法庭攻防點評 -->
              <div class="p-5 sm:p-6 rounded-2xl bg-white dark:bg-[#111726] border-l-8 border-l-yellow-500 border border-slate-200 dark:border-white/[0.08] shadow-sm space-y-3">
                <div class="flex items-center justify-between">
                  <div class="flex items-center gap-3">
                    <div class="w-12 h-12 rounded-xl overflow-hidden border-2 border-yellow-400 shadow-md shrink-0">
                      <img src="images/golden_case_attorney.jpg" alt="金毛首席辯護律師" class="w-full h-full object-cover" style="object-position: center 20%; transform: scale(1.35);"/>
                    </div>
                    <div>
                      <h4 class="font-black text-slate-900 dark:text-white text-sm sm:text-base">
                        ⚖️ 金毛大律師 • 法庭攻防點評
                      </h4>
                      <span class="text-xs font-mono text-yellow-600 dark:text-yellow-400">COUNSELOR GOLDEN · #緘默是權利不是罪過</span>
                    </div>
                  </div>
                  <span class="text-xs font-mono px-2.5 py-1 rounded bg-yellow-50 dark:bg-yellow-950/40 text-yellow-700 dark:text-yellow-300 border border-yellow-200/60 dark:border-yellow-800/40">
                    訴訟策略
                  </span>
                </div>

                <div class="font-serif text-xs sm:text-[13.5px] leading-relaxed text-slate-700 dark:text-slate-300 space-y-2">
                  <p>
                    各位辯護律師請把 <span class="font-mono font-bold text-yellow-700 dark:text-yellow-300">99 台上 6995 判決</span> 刻在公事包上！
                  </p>
                  <p>
                    實務上公訴檢察官最喜歡在結辯時指責被告：「開庭都行使緘默權、矢口否認，顯見犯罪後態度不佳，建請從重量刑！」這在法律上是<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">嚴格違法違憲</span>的！
                  </p>
                  <p>
                    緘默權是刑事訴訟法 § 95 賦予被告防衛自身的不自證己罪特權，<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">正當行使合法權利，絕不能倒果為因成為加重宣告刑的藉口</span>。法官若以此為由從重量刑，上訴審必以「判決適用法則不當」撤銷改判！
                  </p>
                </div>
              </div>

              <!-- 🛡️ 德牧法規巡查官 • 法規雷達查核 -->
              <div class="p-5 sm:p-6 rounded-2xl bg-white dark:bg-[#111726] border-l-8 border-l-blue-600 border border-slate-200 dark:border-white/[0.08] shadow-sm space-y-3">
                <div class="flex items-center justify-between">
                  <div class="flex items-center gap-3">
                    <div class="w-12 h-12 rounded-xl overflow-hidden border-2 border-blue-500 shadow-md shrink-0">
                      <img src="images/shepherd_law_inspector.jpg" alt="德牧法規巡查官" class="w-full h-full object-cover" style="object-position: center 15%; transform: scale(1.4);"/>
                    </div>
                    <div>
                      <h4 class="font-black text-slate-900 dark:text-white text-sm sm:text-base">
                        🛡️ 德牧法規巡查官 • 法規雷達查核
                      </h4>
                      <span class="text-xs font-mono text-blue-600 dark:text-blue-400">INSPECTOR SHEPHERD · #重複評價與裁量界限</span>
                    </div>
                  </div>
                  <span class="text-xs font-mono px-2.5 py-1 rounded bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300 border border-blue-200/60 dark:border-blue-800/40">
                    裁判雷達
                  </span>
                </div>

                <div class="font-serif text-xs sm:text-[13.5px] leading-relaxed text-slate-700 dark:text-slate-300 space-y-2">
                  <div class="p-3 rounded-lg bg-blue-50/50 dark:bg-blue-950/30 border border-blue-200/50 dark:border-blue-900/30">
                    <span class="font-bold text-blue-800 dark:text-blue-300 block mb-1">【裁判要旨查核：禁止重複評價原則】</span>
                    <p class="text-xs">
                       刑法分則之加重減輕（如 § 272 親屬身分、§ 321 加重竊盜各款）已由立法者將該情狀「耗盡評價」並提高法定刑。法官於 § 57 量刑時，嚴禁再將構成要件本質重複做不利評價。例如不能說「因為你加重竊盜攜帶凶器很危險，所以在 § 57 手段上再判你更重」，此即為典型重複評價瑕疵。
                    </p>
                  </div>
                  <div class="p-3 rounded-lg bg-slate-50 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800">
                    <span class="font-bold text-slate-800 dark:text-slate-200 block mb-1">【定性查核：§ 61 酌免非無罪】</span>
                    <p class="text-xs text-slate-600 dark:text-slate-400">
                      實務國考常設陷阱題！刑法 § 61 之免除其刑，判決主文宣告「○○○犯○○罪，免刑」，其本質依然是<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">有罪判決（有罪免刑）</span>，被告仍具備該罪名之犯罪紀錄，並非不成立犯罪之無罪判決（刑訴 § 301）。
                    </p>
                  </div>
                </div>
              </div>

              <!-- 👨‍⚖️ 邊牧首席審判長 • 終審裁決一槌定音 -->
              <div class="p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-slate-900 via-slate-800 to-amber-950 text-white border-2 border-amber-400/60 shadow-xl space-y-3">
                <div class="flex items-center justify-between">
                  <div class="flex items-center gap-3">
                    <div class="w-12 h-12 rounded-xl overflow-hidden border-2 border-amber-400 shadow-md shrink-0">
                      <img src="images/border_collie_chief_judge.jpg" alt="邊牧首席審判長" class="w-full h-full object-cover" style="object-position: center 25%; transform: scale(1.35);"/>
                    </div>
                    <div>
                      <h4 class="font-black text-amber-200 text-sm sm:text-base">
                        👨‍⚖️ 邊牧首席審判長 • 終審裁決一槌定音
                      </h4>
                      <span class="text-xs font-mono text-amber-400">CHIEF JUDGE COLLIE · #法槌一敲誰與爭鋒</span>
                    </div>
                  </div>
                  <span class="text-xs font-mono px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-400/40">
                    國考定錨
                  </span>
                </div>

                <div class="space-y-3 font-serif text-xs sm:text-[13.5px] leading-relaxed text-slate-200">
                  <div class="p-3.5 rounded-xl bg-white/5 border border-white/10 space-y-1">
                    <span class="font-bold text-amber-300 block">🔨 【實體法定讞】</span>
                    <p>
                      1. 量刑是罪刑相當原則的具體展現，個案宣告刑嚴禁超過罪責範圍。<br>
                      2. § 57 為例示性規範，四大量刑鐵則（例示非列舉、禁止重複評價、權利行使非態度不佳、不當聯結禁止）為合法量刑之外部界限。<br>
                      3. 量刑補充規則為例外突破處斷刑：§ 58 酌加（所得利益為限）、§ 59 酌減（顯可憫恕情狀）、§ 61 酌免（微罪有罪免刑）。
                    </p>
                  </div>

                  <div class="p-3.5 rounded-xl bg-sky-500/10 border border-sky-400/30 space-y-1">
                    <span class="font-bold text-sky-300 block">💡 國考答題定錨口訣</span>
                    <p class="font-mono text-sky-200">
                      「罪刑相當定宣告，五七十款為例示；重複評價斷不可，行使緘默非態度；利益酌加憫恕減，微罪雖免仍有罪！」
                    </p>
                  </div>

                  <div class="p-3.5 rounded-xl bg-amber-500/10 border border-amber-400/30 space-y-1">
                    <span class="font-bold text-amber-300 block">📅 2026 最新法條動態備註</span>
                    <p class="text-xs text-amber-200/90 leading-relaxed">
                      司法院持續推動「量刑資訊系統」與「量刑準則法制化」，限縮法官恣意裁量空間；此外 113 憲判 8 號對死刑量刑確立「第三審強制辯護＋合議庭一致決＋須具備情節最嚴重之罪」之最嚴苛程序，突顯憲法對量刑裁量之高度密度審查。
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </section>

          <!-- 底部導航分頁 -->
          <div class="pt-6 border-t border-slate-200 dark:border-white/[0.08] grid grid-cols-1 sm:grid-cols-2 gap-4">
            <button onclick="switchView('part0-ch3-sec2')" class="group p-4 rounded-2xl border border-slate-200 dark:border-white/[0.08] hover:border-rose-500/40 bg-white dark:bg-[#111726] text-left transition-all hover:-translate-y-0.5 shadow-sm hover:shadow-md flex items-center gap-3 cursor-pointer">
              <div class="w-9 h-9 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 group-hover:bg-rose-50 dark:group-hover:bg-rose-950 group-hover:text-rose-600 dark:group-hover:text-rose-400 flex items-center justify-center text-sm font-bold shrink-0 transition-colors">
                ←
              </div>
              <div class="min-w-0">
                <span class="text-[11px] text-slate-400 font-mono block">上一單元 (第 2-29 ~ 2-31 頁)</span>
                <span class="text-xs font-bold text-slate-800 dark:text-slate-200 group-hover:text-rose-600 dark:group-hover:text-rose-400 transition-colors truncate block">
                  第二節 刑罰的調整——兼談處斷刑
                </span>
              </div>
            </button>

            <button onclick="switchView('part0-ch3-sec4')" class="group p-4 rounded-2xl border border-rose-500/40 hover:border-rose-500 bg-gradient-to-br from-rose-50/50 to-amber-50/30 dark:from-rose-950/30 dark:to-amber-950/20 text-right transition-all hover:-translate-y-0.5 shadow-sm hover:shadow-md flex items-center justify-between gap-3 cursor-pointer">
              <div class="min-w-0 text-left">
                <span class="text-[11px] text-rose-700 dark:text-rose-400 font-mono block font-bold">下一單元 (第 2-33 ~ 2-37 頁)</span>
                <span class="text-xs font-extrabold text-slate-900 dark:text-white group-hover:text-rose-700 dark:group-hover:text-rose-400 transition-colors truncate block">
                  第四節 刑罰的執行——兼談執行刑 →
                </span>
              </div>
              <div class="w-9 h-9 rounded-xl bg-gradient-to-br from-rose-500 to-rose-600 text-white flex items-center justify-center text-sm font-bold shrink-0 group-hover:scale-105 transition-transform shadow-md shadow-rose-500/30">
                🚪
              </div>
            </button>
          </div>

        </div>
`;
