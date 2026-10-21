// =========================================================================
// 第二篇 故意既遂犯的構成要件該當性
// 第二章 客觀構成要件該當性・第一節 構成要件行為 (教材第 4-7 ～ 4-12 頁 全節完結)
// 嚴格依據陳奕廷律師《刑法總則【圖說系列】》原書 1:1 忠實復刻
// 憲政遵循：AGENTS.md (純紅底線、單欄垂直堆疊、犬系四大天王、Zero-CORS、2026法條備註)
// =========================================================================

window.APP_VIEWS = window.APP_VIEWS || {};

window.APP_VIEWS['viewPart2Ch2Sec1'] = `
<div id="viewPart2Ch2Sec1" class="fade-enter space-y-8 max-w-4xl mx-auto">

  <!-- ==================== 頁首徽章與大標題 (1:1 復刻原書 4-7) ==================== -->
  <header class="text-center space-y-3 pt-2">
    <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/80 dark:bg-blue-900/40 text-blue-800 dark:text-blue-300 text-xs font-mono font-bold tracking-wider uppercase border border-blue-200 dark:border-blue-800">
      <span>第二篇 • 故意既遂犯構成要件</span>
      <span>•</span>
      <span>第二章 第一節</span>
      <span>•</span>
      <span>p. 4-7～4-12</span>
    </div>
    
    <div class="flex items-center justify-center gap-3">
      <span class="inline-flex items-center justify-center w-8 h-8 rounded-full border-2 border-slate-700 dark:border-slate-300 font-serif font-black text-slate-800 dark:text-slate-200 text-base">第</span>
      <span class="inline-flex items-center justify-center w-8 h-8 rounded-full border-2 border-slate-700 dark:border-slate-300 font-serif font-black text-slate-800 dark:text-slate-200 text-base">二</span>
      <span class="inline-flex items-center justify-center w-8 h-8 rounded-full border-2 border-slate-700 dark:border-slate-300 font-serif font-black text-slate-800 dark:text-slate-200 text-base">章</span>
    </div>

    <h1 class="text-2xl sm:text-3xl lg:text-4xl font-serif font-black text-slate-900 dark:text-white tracking-tight">
      客觀構成要件該當性
    </h1>

    <div class="flex items-center justify-center gap-2 pt-1">
      <div class="h-0.5 w-12 bg-blue-500/60 rounded-full"></div>
      <h2 class="text-lg sm:text-xl font-serif font-bold text-blue-700 dark:text-blue-400">
        第一節 構成要件行為
      </h2>
      <div class="h-0.5 w-12 bg-blue-500/60 rounded-full"></div>
    </div>
  </header>

  <!-- ==================== 前言與正當性基礎 (4-7) ==================== -->
  <section id="sec-p2ch2s1-intro" class="scroll-mt-24 p-6 sm:p-7 rounded-3xl bg-white dark:bg-[#121827] border border-slate-200/90 dark:border-white/10 shadow-sm space-y-4 font-serif">
    <div class="flex items-center gap-2 text-xs font-mono text-blue-600 dark:text-blue-400 font-bold uppercase tracking-wider">
      <span>📖 核心概念</span>
      <span>•</span>
      <span>事前判斷與行為自由邊界</span>
    </div>

    <p class="text-sm sm:text-base text-slate-700 dark:text-slate-200 leading-relaxed text-justify indent-8">
      構成要件行為必須由事前角度擷取一般認知與優越事實，判斷是否為法規範所欲禁止的行為。法規範欲禁止的行為，說穿了就是<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">針對該罪製造不容許風險</span>的行為，而禁止這類行為的同時，也劃出行為自由的範圍。職是之故，製造實現該罪所不容許的風險，將形成<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">限制行為自由的正當性基礎</span>。
    </p>

    <!-- 腳註引用標註 -->
    <div class="text-[11px] font-mono text-slate-500 dark:text-slate-400 pt-1 border-t border-slate-100 dark:border-slate-800">
      ※ 以下案例多參考、整理自：Wolfgang Frisch（蔡聖偉譯），客觀之結果歸責，法學新論第 32 期，p. 15～21。
    </div>

    <!-- 解題提示卡片 (4-7) -->
    <div class="p-5 rounded-2xl bg-amber-50/80 dark:bg-amber-950/30 border-2 border-amber-300/80 dark:border-amber-700/60 space-y-2">
      <div class="flex items-center gap-2 font-black text-amber-900 dark:text-amber-200 text-sm sm:text-base">
        <span>📖</span>
        <span>【解題提示】定式犯罪 vs 不定式犯罪之檢驗差異</span>
      </div>
      <p class="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed text-justify">
        定式犯罪的構成要件行為被立法者給限定，一般說來法條描述已蘊含「不容許風險」在內，解題時沒必要重複檢驗，只需判斷可否與法條文義相符已足。惟<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">不定式犯罪的構成要件行為過於空泛</span>，是否針對該罪製造不容許風險尚待審查，因此遇到<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">殺人罪、傷害罪、重傷罪、墮胎罪、遺棄罪</span>時，都必須額外補充說明。
      </p>
    </div>
  </section>

  <!-- ==================== 一、風險降低行為 (4-7～4-9) ==================== -->
  <section id="sec-p2ch2s1-reduction" class="scroll-mt-24 space-y-4">
    <div class="p-6 sm:p-7 rounded-3xl bg-white dark:bg-[#121827] border-l-8 border-l-emerald-600 border border-slate-200/90 dark:border-white/10 shadow-sm space-y-4 font-serif">
      <div class="flex items-center justify-between flex-wrap gap-2">
        <h3 class="text-lg sm:text-xl font-black text-slate-900 dark:text-white flex items-center gap-2">
          <span class="text-emerald-600 dark:text-emerald-400">一、</span>
          <span>風險降低行為（＝未製造任何風險）</span>
        </h3>
        <span class="text-xs font-mono font-bold px-2.5 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300">
          教材第 4-7～4-9 頁
        </span>
      </div>

      <p class="text-sm sm:text-base text-slate-700 dark:text-slate-200 leading-relaxed text-justify indent-8">
        (一) 當行為人並未提高特定後果發生的風險，而是<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">降低這個風險時，顯然並未製造任何風險</span>，也不會該當構成要件行為。
      </p>

      <!-- 案例 2-1 敲擊案 (4-8) -->
      <div id="case-2-1-reduction" class="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-3">
        <div class="flex items-center justify-between border-b border-slate-200/80 dark:border-slate-700 pb-2">
          <span class="font-black text-slate-900 dark:text-white text-sm sm:text-base flex items-center gap-2">
            <span>🐾</span>
            <span>【案例 2-1】敲擊案＝風險降低行為</span>
          </span>
          <span class="text-[11px] font-mono font-bold px-2 py-0.5 rounded bg-emerald-100 dark:bg-emerald-900 text-emerald-700 dark:text-emerald-300">
            不該當構成要件
          </span>
        </div>
        <div class="p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed italic">
          「甲見乙持棍棒朝丙的頭部揮擊，為了避免丙受死亡威脅，趕緊推乙一把，造成棍棒偏離而落在丙的手臂上，僅造成輕傷結果。」
        </div>
        <div class="space-y-1.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
          <div class="font-bold text-blue-700 dark:text-blue-400">◀ 問題導引 ▶</div>
          <p class="leading-relaxed text-justify">
            就棍棒敲擊原本所要造成的風險而言，甲是使<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">同一風險由死亡降低為傷害</span>，評價上並未製造風險，不該當傷害行為。
          </p>
        </div>
      </div>

      <!-- 風險降低 vs 風險替代辨析 (4-8) -->
      <div class="p-4 rounded-2xl bg-indigo-50/70 dark:bg-indigo-950/30 border border-indigo-200 dark:border-indigo-800/60 space-y-2">
        <div class="font-black text-indigo-900 dark:text-indigo-200 text-xs sm:text-sm flex items-center gap-1.5">
          <span>⚡</span>
          <span>(二) 核心區辨：風險降低行為 vs 風險替代行為</span>
        </div>
        <p class="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed text-justify">
          請小心區分風險降低行為與風險替代行為，前者是「<strong>將同一風險由高降至低</strong>」，後者是「<strong>以另一風險取代原有風險</strong>」。由於風險替代行為依舊創造全新風險，仍然是製造不容許風險，該當構成要件行為。
        </p>
      </div>

      <!-- 案例 2-2 推丙跌倒案 (4-8) -->
      <div id="case-2-2-substitution" class="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-3">
        <div class="flex items-center justify-between border-b border-slate-200/80 dark:border-slate-700 pb-2">
          <span class="font-black text-slate-900 dark:text-white text-sm sm:text-base flex items-center gap-2">
            <span>🐾</span>
            <span>【案例 2-2】推丙跌倒案＝風險替代行為</span>
          </span>
          <span class="text-[11px] font-mono font-bold px-2 py-0.5 rounded bg-amber-100 dark:bg-amber-900 text-amber-700 dark:text-amber-300">
            要件該當・避難阻卻
          </span>
        </div>
        <div class="p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed italic">
          「甲見到乙持棍棒朝丙的頭部揮擊，為了避免丙受死亡威脅，趕緊推丙一把造成乙棍棒揮空，但丙也跌了一個狗吃屎造成手臂輕傷。」
        </div>
        <div class="space-y-1.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
          <div class="font-bold text-blue-700 dark:text-blue-400">◀ 問題導引 ▶</div>
          <p class="leading-relaxed text-justify">
            本例中甲創造新的傷害風險來取代原有的死亡風險，這是兩個迥然有異、互不相干的風險替代，與同一風險的降低行為截然不同。甲對丙<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">依舊成立傷害罪客觀構成要件該當</span>，不過在違法性的層次可以主張<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">緊急避難阻卻違法</span>（保全利益＞犧牲利益）。
          </p>
        </div>
      </div>

      <!-- 案例 2-3 屋頂失火案 (4-8) -->
      <div id="case-2-3-fire" class="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-3">
        <div class="flex items-center justify-between border-b border-slate-200/80 dark:border-slate-700 pb-2">
          <span class="font-black text-slate-900 dark:text-white text-sm sm:text-base flex items-center gap-2">
            <span>🐾</span>
            <span>【案例 2-3】屋頂失火案＝風險替代行為</span>
          </span>
          <span class="text-[11px] font-mono font-bold px-2 py-0.5 rounded bg-amber-100 dark:bg-amber-900 text-amber-700 dark:text-amber-300">
            要件該當・避難阻卻
          </span>
        </div>
        <div class="p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed italic">
          「在一個火災現場，甲為了避免嬰兒乙命喪火窟，於是將乙從窗外丟出，造成乙身體上的受傷。」
        </div>
        <div class="space-y-1.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
          <div class="font-bold text-blue-700 dark:text-blue-400">◀ 問題導引 ▶</div>
          <p class="leading-relaxed text-justify">
            這是一個經典的風險替代案例，用「新的、較低的傷害風險」替代「原有的、較高的死亡風險」，雖然傷害罪構成要件該當，卻可主張緊急避難阻卻違法。
          </p>
        </div>
      </div>

      <!-- 作者叮嚀：行為自由與風險替代/降低的深層價值 (4-9) -->
      <div id="sec-p2ch2s1-author-note1" class="p-5 rounded-2xl bg-amber-50/90 dark:bg-amber-950/30 border-2 border-amber-300 dark:border-amber-700/60 space-y-2.5">
        <div class="flex items-center gap-2 font-black text-amber-900 dark:text-amber-200 text-sm sm:text-base">
          <span>✍️</span>
          <span>【作者叮嚀】限制行為自由視角下的「降低」與「替代」</span>
        </div>
        <p class="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed text-justify">
          我們若由限制行為自由的角度來觀察上述三個案例，可以發現<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">風險替代仍是一個禁止行為，而風險降低則是容許行為</span>。價值判斷上所傳達出的訊息是：同樣一個出於救援的動作，若落救護者於另一個風險之中，那麼還是要三思而後行。
        </p>
        <p class="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed text-justify">
          因為「降低」有機會將風險減少至零而絕對有益於被害人；「替代」無論如何都存有另一個額外風險，這個風險可能低於原風險（主張緊急避難阻卻違法）、等於原風險（考量避難過當寬恕罪責）、甚至高於原風險（既無法阻卻違法也不能寬恕罪責）。故<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">並非絕對有益被害人的風險替代行為，就有被限制的正當性基礎</span>。
        </p>
      </div>
    </div>
  </section>

  <!-- ==================== 二、僅製造日常風險之行為 (4-9～4-11) ==================== -->
  <section id="sec-p2ch2s1-daily" class="scroll-mt-24 space-y-4 font-serif">
    <div class="p-6 sm:p-7 rounded-3xl bg-white dark:bg-[#121827] border-l-8 border-l-blue-600 border border-slate-200/90 dark:border-white/10 shadow-sm space-y-5">
      <div class="flex items-center justify-between flex-wrap gap-2">
        <h3 class="text-lg sm:text-xl font-black text-slate-900 dark:text-white flex items-center gap-2">
          <span class="text-blue-600 dark:text-blue-400">二、</span>
          <span>僅製造日常風險之行為（＝未製造不容許風險）</span>
        </h3>
        <span class="text-xs font-mono font-bold px-2.5 py-1 rounded-full bg-blue-100 dark:bg-blue-950 text-blue-800 dark:text-blue-300">
          教材第 4-9～4-11 頁
        </span>
      </div>

      <div class="space-y-3 text-sm sm:text-base text-slate-700 dark:text-slate-200 leading-relaxed text-justify indent-8">
        <p>
          (一) 日常風險是一般社會大眾所能接受的理性冒險，也可說是冒險的合理界線。由於許多活動有其<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">社會必要性或社會有益性</span>（例如開車上路），其重要程度在一定條件下（遵守行車規則）是被容許的，若行為僅製造日常風險，則不該當構成要件行為。
        </p>
        <p>
          我們同樣可以從行為自由的角度說明，若將日常風險評價為不容許風險而全面禁止，將導致整體社會活動停擺，造成難以估計的損失（上課上班永遠遲到、郵件無法準時送達等等）。
        </p>
        <p>
          (二) 我們可以依循下列兩大判準，檢驗是否僅製造日常風險：
        </p>
      </div>

      <!-- 判準 1：核心判準 (4-9～4-10) -->
      <div class="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 space-y-4">
        <div class="flex items-center gap-2 font-black text-blue-900 dark:text-blue-300 text-sm sm:text-base">
          <span>⚖️</span>
          <span>1. 核心判準——是否利益遠大於風險？</span>
        </div>
        <p class="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed text-justify">
          依據社會大眾的價值觀，行為所提供的利益越大，該風險就越必須被容許（＝日常風險）。
        </p>

        <!-- 案例 2-4 繼承案 (4-9~4-10) -->
        <div id="case-2-4-inheritance" class="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 space-y-2.5">
          <div class="flex items-center justify-between border-b border-slate-200/60 dark:border-slate-800 pb-1.5">
            <span class="font-bold text-slate-900 dark:text-white text-xs sm:text-sm">
              【案例 2-4】繼承案（森林雷擊散步）
            </span>
            <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300">
              僅日常風險・不該當
            </span>
          </div>
          <div class="text-xs text-slate-600 dark:text-slate-400 italic leading-relaxed">
            「甲覬覦叔父乙所擁有的龐大財產，突發奇想叫乙於雷雨天前往森林當中散步，希望乙遭雷擊斃命，便可單獨繼承乙的遺產。微料願望成真，乙真的在森林中遭雷擊斃。」
          </div>
          <div class="text-xs text-slate-700 dark:text-slate-300 space-y-1">
            <div class="font-bold text-blue-600 dark:text-blue-400">◀ 問題導引 ▶</div>
            <p class="leading-relaxed text-justify">
              雷雨天在外受雷擊的機率，依據常理研究約為五十萬分之一，如此微小的風險<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">不足以建構限制行為自由的正當性基礎</span>，故甲的行為僅製造日常風險，不該當殺人行為（除非甲是雷神索爾……）。
            </p>
          </div>
        </div>

        <!-- 案例 2-5 大怒神案 (4-10) -->
        <div id="case-2-5-drop-tower" class="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 space-y-2.5">
          <div class="flex items-center justify-between border-b border-slate-200/60 dark:border-slate-800 pb-1.5">
            <span class="font-bold text-slate-900 dark:text-white text-xs sm:text-sm">
              【案例 2-5】大怒神案（一般認知 vs 優越事實金屬疲勞）
            </span>
            <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300">
              優越事實轉換
            </span>
          </div>
          <div class="text-xs text-slate-600 dark:text-slate-400 italic leading-relaxed">
            「甲希望乙因為遊樂設施事故而死亡，因此購買一張遊樂園的門票送乙，並且極力慫恿乙搭乘招牌大怒神。結果乙果真前去，也不幸在搭乘大怒神時因器械故障而墜地身亡，試問甲應如何論處？倘若甲為該遊樂園的器械保養師，早知悉大怒神的細部零件已有金屬疲勞現象，於是計畫讓乙在金屬疲勞臨界當天搭乘大怒神，果不其然使乙發生意外死亡。」
          </div>
          <div class="text-xs text-slate-700 dark:text-slate-300 space-y-1.5">
            <div class="font-bold text-blue-600 dark:text-blue-400">◀ 問題導引 ▶</div>
            <p class="leading-relaxed text-justify">
              1. <strong>一般情形</strong>：遊樂設施故障是日常活動中所存在的一般性風險，縱然遊客因此身亡，但在機率上亦為少數，風險不足以建構限制行為自由的正當性基礎，甲僅製造日常風險，不該當殺人行為。
            </p>
            <p class="leading-relaxed text-justify">
              2. <strong>知悉金屬疲勞情形</strong>：惟若甲事先知悉該遊樂設施已臨近金屬疲勞的邊緣，此乃<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">優越事實</span>，必須納入判斷範圍，形成「甲促使乙搭乘已嚴重金屬疲勞的大怒神」，這個優越事實形成限制甲行為自由的正當性基礎，製造使乙死亡的不容許風險，<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">該當殺人行為</span>。
            </p>
          </div>
        </div>
      </div>

      <!-- 判準 2：輔助判準與信賴原則 (4-10～4-11) -->
      <div class="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 space-y-4">
        <div class="flex items-center gap-2 font-black text-indigo-900 dark:text-indigo-300 text-sm sm:text-base">
          <span>🚦</span>
          <span>2. 輔助判準——是否違反避險規範？兼談【信賴原則】</span>
        </div>
        <p class="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed text-justify">
          如果帶有風險的特定活動對社會有益且必要，通常會有刑法典外的避險規範存在，用以設定從事該行為的條件，例如行車規範、建築規範、醫療規範等等。行為不違反避險規範，原則上只製造日常風險，反之則該當構成要件行為。不過請注意，這個避險規範必須被全體公民所公認，畢竟任何避險規範都不能違反社會大眾的價值觀。
        </p>

        <!-- 案例 2-6 綠燈撞闖紅燈車案 (4-10~4-11) -->
        <div id="case-2-6-traffic" class="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 space-y-3">
          <div class="flex items-center justify-between border-b border-slate-200/60 dark:border-slate-800 pb-1.5">
            <span class="font-bold text-slate-900 dark:text-white text-xs sm:text-sm">
              【案例 2-6】綠燈行駛十字路口被闖紅燈車撞案
            </span>
            <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-100 dark:bg-emerald-900 text-emerald-700 dark:text-emerald-300">
              信賴原則・日常風險
            </span>
          </div>
          <div class="text-xs text-slate-600 dark:text-slate-400 italic leading-relaxed">
            「甲開車在十字路口處等紅燈，待燈號轉綠後驅車直行，橫向車道卻突然有乙汽車闖紅燈，甲車與乙車在十字路口中間發生碰撞，乙受到輕傷，甲則幸運毫髮無傷。」
          </div>
          <div class="text-xs text-slate-700 dark:text-slate-300 space-y-2">
            <div class="font-bold text-blue-600 dark:text-blue-400">◀ 問題導引 ▶</div>
            <p class="leading-relaxed text-justify">
              (一) 甲紅燈停、綠燈行，完全符合行車規範，僅製造日常風險，不該當傷害行為，學說與實務便從這個案例發展出「<strong>信賴原則</strong>」。當行為人遵循具有社會共識的避險規範時，可合理的信賴他人也會遵循這個共同規範，據此信賴所為之行為僅製造日常風險，不該當構成要件行為。
            </p>
            <div class="p-3 rounded-lg bg-rose-50/70 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-900/40 space-y-1.5">
              <div class="font-bold text-rose-900 dark:text-rose-200 text-xs">
                🚨 (二) 信賴原則的兩大極限（嚴禁濫用）：
              </div>
              <ul class="list-disc pl-4 space-y-1 text-slate-700 dark:text-slate-300 text-xs">
                <li>
                  <strong>違反避險規範在先之人無法引用</strong>：倘若行為人本身已經自我撕毀、踐踏避險規範在先，便再無理由信賴他人仍會遵循規範（84 台上 5360 例參照）。
                </li>
                <li>
                  <strong>他人已無從避難時無法引用</strong>：當面對行步緩慢的老年人或馬路中拐到腳而跌坐在地之人，都不能以「紅燈停、綠燈行」為理由撞擊他人並主張信賴原則（74 台上 4219 例參照）。
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ==================== 三、僅製造他罪風險之行為 (4-11) ==================== -->
  <section id="sec-p2ch2s1-other-crime" class="scroll-mt-24 space-y-4 font-serif">
    <div class="p-6 sm:p-7 rounded-3xl bg-white dark:bg-[#121827] border-l-8 border-l-purple-600 border border-slate-200/90 dark:border-white/10 shadow-sm space-y-4">
      <div class="flex items-center justify-between flex-wrap gap-2">
        <h3 class="text-lg sm:text-xl font-black text-slate-900 dark:text-white flex items-center gap-2">
          <span class="text-purple-600 dark:text-purple-400">三、</span>
          <span>僅製造他罪風險之行為（＝未針對該罪製造不容許風險）</span>
        </h3>
        <span class="text-xs font-mono font-bold px-2.5 py-1 rounded-full bg-purple-100 dark:bg-purple-950 text-purple-800 dark:text-purple-300">
          教材第 4-11 頁
        </span>
      </div>

      <p class="text-sm sm:text-base text-slate-700 dark:text-slate-200 leading-relaxed text-justify indent-8">
        既然探討的是特定罪名的構成要件行為是否該當，當然必須製造「<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">該罪</span>」所不容許的風險。
      </p>

      <!-- 案例 2-7 血友病案 (4-11) -->
      <div id="case-2-7-hemophilia" class="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-3">
        <div class="flex items-center justify-between border-b border-slate-200/80 dark:border-slate-700 pb-2">
          <span class="font-black text-slate-900 dark:text-white text-sm sm:text-base flex items-center gap-2">
            <span>🐾</span>
            <span>【案例 2-7】血友病案（一般劃傷 vs 優越事實）</span>
          </span>
          <span class="text-[11px] font-mono font-bold px-2 py-0.5 rounded bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300">
            特定罪名風險檢驗
          </span>
        </div>
        <div class="p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed italic">
          「甲用美工刀割傷乙的手臂，孰料乙為血友病患者，竟然因此失血過多而死亡。試問就乙的死亡結果而言，甲應如何論處？倘若甲早已知情乙為血友病患者，結論有無不同？」
        </div>
        <div class="space-y-1.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
          <div class="font-bold text-blue-700 dark:text-blue-400">◀ 問題導引 ▶</div>
          <p class="leading-relaxed text-justify">
            1. <strong>傷害罪層次</strong>：就傷害罪而言，甲用美工刀割劃，當然有製造受傷的不容許風險，該當傷害罪構成要件行為。
          </p>
          <p class="leading-relaxed text-justify">
            2. <strong>殺人罪層次（一般認知）</strong>：甲用美工刀劃傷乙的手臂，究竟有無製造死亡的不容許風險？由於血友病患者極稀少，僅由事前擷取一般認知判斷，甲僅「用美工刀割乙」，<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">不該當殺人行為</span>。
          </p>
          <p class="leading-relaxed text-justify">
            3. <strong>殺人罪層次（優越事實知情）</strong>：但在甲事先已知悉乙為血友病患者的情況下，此<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">優越事實必須納入判斷範圍</span>，形成「甲用美工刀割傷患有血友病的乙」，製造死亡的不容許風險，<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">該當殺人行為</span>。
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- ==================== 四、原書 1:1 SVG 圖解：構成要件行為的審查 (4-12) ==================== -->
  <section id="sec-p2ch2s1-chart" class="scroll-mt-24 p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#121827] border border-slate-200/90 dark:border-white/10 shadow-sm space-y-5 font-serif">
    <div class="text-center space-y-1">
      <div class="text-xs font-mono text-blue-600 dark:text-blue-400 font-bold uppercase tracking-wider">
        DIAGRAM OF CONSTITUENT BEHAVIOR
      </div>
      <h3 class="text-lg sm:text-xl font-black text-slate-900 dark:text-white">
        構成要件行為的審查（教材第 4-12 頁 原書圖解）
      </h3>
      <p class="text-xs text-slate-500 dark:text-slate-400">
        事前角度 • 考量行為方向之正確性 • 必須朝實現該罪方向製造不容許風險
      </p>
    </div>

    <!-- 1:1 SVG 圖解復刻 (支援深淺色無損向量縮放) -->
    <div class="w-full flex justify-center py-4 select-none">
      <svg viewBox="0 0 760 380" class="w-full max-w-2xl h-auto drop-shadow-xs" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <marker id="arrow-solid" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M 0 1.5 L 10 5 L 0 8.5 z" class="fill-slate-700 dark:fill-slate-200" />
          </marker>
          <marker id="arrow-dashed" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M 0 1.5 L 10 5 L 0 8.5 z" class="fill-slate-500 dark:fill-slate-400" />
          </marker>
          <filter id="shadow-cloud" x="-10%" y="-10%" width="120%" height="120%">
            <feDropShadow dx="1" dy="2" stdDeviation="3" flood-opacity="0.15" />
          </filter>
        </defs>

        <!-- 中心節點：行為 (圓形) -->
        <circle cx="240" cy="210" r="42" class="fill-slate-50 dark:fill-slate-800 stroke-slate-700 dark:stroke-slate-300" stroke-width="2.5" />
        <text x="240" y="217" text-anchor="middle" class="fill-slate-900 dark:fill-white font-sans font-black" font-size="20">行為</text>

        <!-- 錯誤發散方向箭頭 1: 左方 -->
        <line x1="198" y1="210" x2="110" y2="210" class="stroke-slate-400 dark:stroke-slate-500" stroke-width="2" stroke-dasharray="5 4" marker-end="url(#arrow-dashed)" />
        <text x="155" y="218" text-anchor="middle" class="fill-slate-400 dark:fill-slate-500 font-sans font-black" font-size="26">✖</text>

        <!-- 錯誤發散方向箭頭 2: 左上方 -->
        <line x1="210" y1="178" x2="150" y2="120" class="stroke-slate-400 dark:stroke-slate-500" stroke-width="2" stroke-dasharray="5 4" marker-end="url(#arrow-dashed)" />
        <text x="178" y="156" text-anchor="middle" class="fill-slate-400 dark:fill-slate-500 font-sans font-black" font-size="26">✖</text>

        <!-- 錯誤發散方向箭頭 3: 正上方 -->
        <line x1="240" y1="168" x2="240" y2="90" class="stroke-slate-400 dark:stroke-slate-500" stroke-width="2" stroke-dasharray="5 4" marker-end="url(#arrow-dashed)" />
        <text x="240" y="138" text-anchor="middle" class="fill-slate-400 dark:fill-slate-500 font-sans font-black" font-size="26">✖</text>

        <!-- 錯誤發散方向箭頭 4: 右上方 -->
        <line x1="270" y1="178" x2="330" y2="120" class="stroke-slate-400 dark:stroke-slate-500" stroke-width="2" stroke-dasharray="5 4" marker-end="url(#arrow-dashed)" />
        <text x="302" y="156" text-anchor="middle" class="fill-slate-400 dark:fill-slate-500 font-sans font-black" font-size="26">✖</text>

        <!-- 正確唯一方向箭頭: 正右方 (實線 + 虛線通往實現該罪) -->
        <line x1="282" y1="210" x2="390" y2="210" class="stroke-slate-800 dark:stroke-slate-200" stroke-width="3" marker-end="url(#arrow-solid)" />
        <!-- 綠色打勾標籤 -->
        <text x="330" y="217" text-anchor="middle" class="fill-emerald-600 dark:fill-emerald-400 font-sans font-black" font-size="24">✔</text>

        <!-- 延伸虛線箭頭 -->
        <line x1="395" y1="210" x2="550" y2="210" class="stroke-slate-600 dark:stroke-slate-400" stroke-width="2" stroke-dasharray="5 4" marker-end="url(#arrow-dashed)" />
        <text x="430" y="196" text-anchor="middle" class="fill-slate-800 dark:fill-slate-200 font-sans font-bold" font-size="15">方向正確</text>

        <!-- 右側目標方框：實現該罪 -->
        <rect x="555" y="180" width="130" height="60" rx="14" class="fill-slate-50 dark:fill-slate-800 stroke-slate-700 dark:stroke-slate-300" stroke-width="2.5" />
        <text x="620" y="217" text-anchor="middle" class="fill-slate-900 dark:fill-white font-sans font-black" font-size="18">實現該罪</text>

        <!-- 上方雲朵對話框 (指向延伸箭頭) -->
        <g filter="url(#shadow-cloud)">
          <!-- 雲朵外型路徑 -->
          <path d="M 430 70 
                   Q 410 40 450 30 
                   Q 480 15 520 25 
                   Q 560 15 590 35 
                   Q 625 45 615 75 
                   Q 635 105 605 125 
                   Q 570 145 530 135 
                   Q 490 145 460 130 
                   Q 420 120 430 70 Z" 
                class="fill-slate-100 dark:fill-slate-800 stroke-slate-300 dark:stroke-slate-600" stroke-width="1.5" />
          <!-- 雲朵小尾巴 -->
          <path d="M 490 135 Q 492 165 490 200" fill="none" class="stroke-slate-400 dark:stroke-slate-500" stroke-width="1.8" marker-end="url(#arrow-dashed)" />
        </g>
        <text x="525" y="65" text-anchor="middle" class="fill-slate-800 dark:fill-slate-100 font-sans font-medium" font-size="13">在此僅考量行為方向</text>
        <text x="525" y="86" text-anchor="middle" class="fill-slate-800 dark:fill-slate-100 font-sans font-medium" font-size="13">的正確性，尚無關所</text>
        <text x="525" y="107" text-anchor="middle" class="fill-slate-800 dark:fill-slate-100 font-sans font-medium" font-size="13">實現的結果如何，因此</text>
        <text x="525" y="128" text-anchor="middle" class="fill-blue-600 dark:fill-blue-400 font-sans font-bold" font-size="13.5">採取事前說。</text>

        <!-- 下方雲朵對話框 (指向行為圓圈) -->
        <g filter="url(#shadow-cloud)">
          <path d="M 170 300 
                   Q 145 275 175 255 
                   Q 195 240 235 248 
                   Q 265 240 295 255 
                   Q 330 265 320 295 
                   Q 335 325 310 345 
                   Q 275 365 240 355 
                   Q 200 365 175 348 
                   Q 145 335 170 300 Z" 
                class="fill-slate-100 dark:fill-slate-800 stroke-slate-300 dark:stroke-slate-600" stroke-width="1.5" />
          <!-- 雲朵向上小尾巴 -->
          <path d="M 240 248 Q 240 240 240 252" fill="none" class="stroke-slate-400 dark:stroke-slate-500" stroke-width="1.8" />
        </g>
        <text x="245" y="285" text-anchor="middle" class="fill-slate-800 dark:fill-slate-100 font-sans font-medium" font-size="13">行為必須朝實現該罪</text>
        <text x="245" y="306" text-anchor="middle" class="fill-slate-800 dark:fill-slate-100 font-sans font-medium" font-size="13">的方向而去，且製造不</text>
        <text x="245" y="327" text-anchor="middle" class="fill-blue-600 dark:fill-blue-400 font-sans font-bold" font-size="13">容許的風險，方屬構成</text>
        <text x="245" y="348" text-anchor="middle" class="fill-blue-600 dark:fill-blue-400 font-sans font-black" font-size="13.5">要件行為。</text>
      </svg>
    </div>
  </section>

  <!-- ==================== 犬系法學四大天王導師客廳 (五位一體架構) ==================== -->
  <section id="sec-p2ch2s1-mentors" class="scroll-mt-24 space-y-4 font-serif">
    <div class="p-6 sm:p-7 rounded-3xl bg-white dark:bg-[#121827] border border-slate-200/90 dark:border-white/10 shadow-sm space-y-4">
      <div class="flex items-center gap-2 text-xs font-mono text-amber-600 dark:text-amber-400 font-bold uppercase tracking-wider">
        <span>🐾 導師聯合講堂</span>
        <span>•</span>
        <span>四大天王實戰定錨</span>
      </div>
      <h3 class="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
        犬系法學四大天王 • 構成要件行為實戰點評
      </h3>

      <!-- 嚴格單欄垂直堆疊 (Strict Vertical Stacking) 嚴禁併排 -->
      <div class="space-y-4 pt-2">
        
        <!-- 1. 柴柴法學教授 -->
        <div class="p-5 rounded-2xl bg-gradient-to-br from-amber-50 to-orange-50/40 dark:from-amber-950/30 dark:to-slate-900 border-2 border-amber-300 dark:border-amber-800/60 border-l-[6px] border-l-amber-500 flex items-start gap-4 shadow-xs">
          <div class="w-12 h-12 rounded-full overflow-hidden shrink-0 border-2 border-amber-400 shadow-xs">
            <img src="images/shiba_law_professor.jpg" alt="柴柴法學教授" class="w-full h-full object-cover" style="object-position: center 20%; transform: scale(1.38);">
          </div>
          <div class="space-y-1.5 text-xs sm:text-sm text-slate-800 dark:text-slate-200">
            <div class="font-black text-amber-950 dark:text-amber-200 text-sm sm:text-base">
              🐾 柴柴法學教授 • 白話生活大解碼
            </div>
            <p class="leading-relaxed text-justify">
              「各位同學請記住，客觀構成要件第一步是抓『行為』！但刑法絕不當管家婆去懲罰日常生活。<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">降低風險絕對無罪</span>（推開棍棒救命）；<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">日常風險統統放行</span>（勸人散步雷劈、綠燈守規開車）；只有朝向實現該罪且製造『不容許風險』的舉動，才是刑法要抓的構成要件行為！」
            </p>
          </div>
        </div>

        <!-- 2. 金毛大律師 -->
        <div class="p-5 rounded-2xl bg-gradient-to-br from-rose-50 to-pink-50/40 dark:from-rose-950/30 dark:to-slate-900 border-2 border-rose-300 dark:border-rose-800/60 border-l-[6px] border-l-rose-500 flex items-start gap-4 shadow-xs">
          <div class="w-12 h-12 rounded-full overflow-hidden shrink-0 border-2 border-rose-400 shadow-xs">
            <img src="images/golden_case_attorney.jpg" alt="金毛辯護大律師" class="w-full h-full object-cover" style="object-position: center 20%; transform: scale(1.35);">
          </div>
          <div class="space-y-1.5 text-xs sm:text-sm text-slate-800 dark:text-slate-200">
            <div class="font-black text-rose-950 dark:text-rose-200 text-sm sm:text-base">
              ⚖️ 金毛大律師 • 法庭攻防點評
            </div>
            <p class="leading-relaxed text-justify">
              「在訴訟戰場上，阻擊檢方最漂亮的王牌就是『在客觀構成要件階段當場擊落』！如果檢方起訴當事人過失傷害，我們立刻調取行車記錄器證明當事人完全遵守避險規範，主張<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">信賴原則</span>，直接主張『未製造不容許風險，行為自始不該當』，連違法性與罪責都不必爭執，直接無罪結案！」
            </p>
          </div>
        </div>

        <!-- 3. 德牧法規巡查官 -->
        <div class="p-5 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50/40 dark:from-blue-950/30 dark:to-slate-900 border-2 border-blue-300 dark:border-blue-800/60 border-l-[6px] border-l-blue-600 flex items-start gap-4 shadow-xs">
          <div class="w-12 h-12 rounded-full overflow-hidden shrink-0 border-2 border-blue-400 shadow-xs">
            <img src="images/shepherd_law_inspector.jpg" alt="德牧法規巡查官" class="w-full h-full object-cover" style="object-position: center 15%; transform: scale(1.4);">
          </div>
          <div class="space-y-1.5 text-xs sm:text-sm text-slate-800 dark:text-slate-200">
            <div class="font-black text-blue-950 dark:text-blue-200 text-sm sm:text-base">
              🛡️ 德牧法規巡查官 • 法規雷達查核
            </div>
            <p class="leading-relaxed text-justify">
              「【實體裁判要旨查核】：最高法院 84 年台上字第 5360 號判例明定：『汽車駕駛人應可信賴其他參與交通之人員亦能遵守交通規則……但若駕駛人自身違反交通法規在先，則不得主張信賴原則。』最高法院 74 年台上字第 4219 號判例亦提醒：面對已無從避難之行人（如蹣跚老者或跌坐馬路之人），即使綠燈通行亦不得主張信賴原則硬闖！」
            </p>
          </div>
        </div>

        <!-- 4. 邊牧首席審判長 -->
        <div class="p-5 rounded-2xl bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white border-2 border-amber-400/80 shadow-md flex items-start gap-4">
          <div class="w-12 h-12 rounded-full overflow-hidden shrink-0 border-2 border-amber-400 shadow-xs">
            <img src="images/border_collie_chief_judge.jpg" alt="邊牧審判長" class="w-full h-full object-cover" style="object-position: center 25%; transform: scale(1.35);">
          </div>
          <div class="space-y-2 text-xs sm:text-sm">
            <div class="flex items-center justify-between">
              <span class="font-black text-amber-300 text-sm sm:text-base">
                👨‍⚖️ 邊牧首席審判長 • 終審裁決一槌定音
              </span>
              <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-400/20 text-amber-300 border border-amber-400/30">
                #法槌一敲誰與爭鋒
              </span>
            </div>
            <p class="leading-relaxed text-slate-200 text-justify">
              🔨 <strong>【實體法定讞】</strong>：不定式犯罪（殺人、傷害）之審查，必須以事前一般認知加優越事實為判準。風險降低不該當；風險替代該當要件但可於違法性主張緊急避難；日常風險受利益衡量與避險規範保護不該當；優越事實（金屬疲勞、血友病）則會將日常或他罪風險升格為該罪不容許風險！
            </p>
            <div class="p-3 rounded-xl bg-slate-800/90 border border-white/10 text-slate-300 space-y-1">
              <div class="font-bold text-amber-400">📅 2026 最新法條動態備註：</div>
              <p class="text-[11.5px] leading-relaxed">
                刑法第 271 條（殺人罪）、第 276 條（過失致死罪）、第 277 條（傷害罪）至 2026 年條文要件維持穩定。國考作答時，請考生務必在不定式犯罪開頭點出「事前角度判斷是否製造不容許之風險」，並依案情準確涵攝「風險降低」、「風險替代（阻卻違法）」或「優越事實」，即可穩拿高分！
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>

  <!-- ==================== 底部導航按鈕條 ==================== -->
  <div class="flex items-center justify-between p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-blue-50/80 via-white to-indigo-50/80 dark:from-[#121827] dark:to-[#162035] border border-blue-200/80 dark:border-blue-900/40 shadow-xs flex-wrap gap-3 font-serif">
    <button onclick="switchView('part2-ch1')" class="px-4 py-2 rounded-xl bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 font-bold text-xs flex items-center gap-1.5 border border-slate-200 dark:border-slate-700 cursor-pointer">
      <span>← 上一單元：第二篇 第一章 發展歷史</span>
    </button>
    <div class="flex items-center gap-2 flex-wrap">
      <button onclick="switchView('cover')" class="px-4 py-2 rounded-xl bg-amber-50 dark:bg-amber-950/40 text-amber-800 dark:text-amber-200 hover:bg-amber-100 dark:hover:bg-amber-900/50 font-bold text-xs flex items-center gap-1.5 border border-amber-300 dark:border-amber-700/60 cursor-pointer">
        <span>🏠 書籍首頁</span>
      </button>
      <button onclick="switchView('part2')" class="px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 font-bold text-xs flex items-center gap-1.5 transition-all shadow-xs cursor-pointer">
        <span>第二篇導讀</span>
      </button>
    </div>
  </div>

</div>
`;
