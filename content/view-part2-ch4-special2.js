/**
 * 第二篇・第四章 專題研究二：故意的不法前行為所建構的作為義務（教材第 4-46 ～ 4-47 頁 全篇完結）
 * 嚴格遵循 AGENTS.md 專案憲法：
 * 1. 1:1 忠實復刻原書排版、標題、註11出處、案例 4-10、4-11、4-12 及學說體系比較。
 * 2. 五位一體法學劇院（赤狐檢察官 vs 金毛大律師、柴柴生活大解碼、金毛點評、德牧雷達、邊牧定音＋2026 最新法條備註）。
 * 3. 純紅底線規範（decoration-red-500，嚴禁刺眼全紅字）。
 * 4. 金毛與德牧單欄垂直上下堆疊（嚴禁並排）。
 * 5. 四大天王法定肖像路徑與比例標準。
 * 6. Zero-CORS 本機秒開相容，掛載於 window.APP_VIEWS。
 */

window.APP_VIEWS = window.APP_VIEWS || {};

window.APP_VIEWS['viewPart2Ch4Special2'] = `
<div id="viewPart2Ch4Special2" class="fade-enter space-y-8 pb-12 font-sans">

  <!-- ==================== 專題徽章大標題區 (1:1 復刻原書 P. 4-46) ==================== -->
  <section class="rounded-3xl border border-slate-200/90 dark:border-white/10 bg-gradient-to-br from-white via-indigo-50/20 to-slate-50 dark:from-[#121827] dark:via-[#161f38] dark:to-[#0f172a] p-6 sm:p-8 backdrop-blur shadow-sm space-y-5">
    
    <!-- 頂端徽章與出處標籤 -->
    <div class="flex flex-wrap items-center justify-between gap-3 border-b border-indigo-100 dark:border-indigo-950/60 pb-4">
      <div class="flex items-center gap-3">
        <!-- 復刻原書圓形 Research 印章徽章 -->
        <div class="w-11 h-11 rounded-full border-2 border-dashed border-indigo-500 flex items-center justify-center p-0.5 shadow-2xs shrink-0 bg-indigo-50 dark:bg-indigo-950/50">
          <div class="w-full h-full rounded-full border border-indigo-400 flex flex-col items-center justify-center text-indigo-700 dark:text-indigo-300">
            <span class="text-[8px] font-black tracking-tighter leading-none">專題</span>
            <span class="text-[7px] font-mono tracking-tighter leading-none">研究</span>
          </div>
        </div>
        <div>
          <div class="flex items-center gap-2">
            <span class="px-2 py-0.5 rounded-full text-[10px] font-mono font-bold bg-indigo-100 dark:bg-indigo-950/80 text-indigo-700 dark:text-indigo-300 border border-indigo-200/60 dark:border-indigo-800/60">
              SPECIAL TOPIC 2
            </span>
            <span class="text-xs text-slate-400 font-mono">P. 4-46 ～ 4-47</span>
          </div>
          <div class="text-[11px] text-slate-500 dark:text-slate-400 font-serif mt-0.5">
            第二篇 故意既遂犯的構成要件該當性 • 第四章 不純正不作為犯
          </div>
        </div>
      </div>

      <!-- 右側完結榮譽標章 -->
      <span class="text-[11px] font-bold text-amber-600 dark:text-amber-400 px-3 py-1 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-300/60 dark:border-amber-800/60 flex items-center gap-1.5 shadow-2xs">
        <span>✒️</span>
        <span>第二篇 故意既遂犯 全篇完結</span>
      </span>
    </div>

    <!-- 標題本體 -->
    <div class="space-y-2 pt-1">
      <h1 class="text-2xl sm:text-3xl font-black font-serif text-slate-900 dark:text-white tracking-tight leading-snug">
        專題研究：故意的不法前行為所建構的作為義務
      </h1>
      <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-serif leading-relaxed">
        探討「故意砍人倒地後欣賞死亡」與「裝定時炸彈後遭逼供」等極端情境下，故意不法前行為究竟能否建構保證地位？通說之「沒必要」論述有何重大漏洞？有力說如何透過競合理論化解法益保護真空？
      </p>
    </div>

    <!-- 原書引註出處卡片 (註 11) -->
    <div class="p-3.5 rounded-xl bg-indigo-50/70 dark:bg-indigo-950/40 border border-indigo-200/60 dark:border-indigo-900/60 text-xs text-slate-600 dark:text-slate-300 font-serif flex items-start gap-2.5">
      <span class="text-indigo-600 dark:text-indigo-400 text-sm font-bold shrink-0">📌</span>
      <div class="space-y-0.5 leading-relaxed">
        <strong class="text-slate-800 dark:text-slate-200 font-bold">【原書引註 11】</strong>
        <span>本專題研究的主要架構整理自：<span class="font-bold text-indigo-700 dark:text-indigo-300">蔡聖偉</span>，《刑法問題研究(一)》，2008，P. 221 以下。</span>
      </div>
    </div>
  </section>

  <!-- ==================== 一、通說見解 (P. 4-46) ==================== -->
  <section id="sec-p2ch4-sp2-general" class="rounded-2xl border-l-[8px] border-l-blue-600 border border-slate-200/80 dark:border-white/10 bg-white dark:bg-[#121827] p-6 sm:p-7 shadow-xs space-y-5">
    <div class="flex items-center gap-2 text-blue-700 dark:text-blue-400 font-mono text-xs font-bold tracking-wider uppercase">
      <span>SECTION 1</span>
      <span>•</span>
      <span>GENERAL OPINION</span>
    </div>
    <h2 class="text-xl sm:text-2xl font-black font-serif text-slate-900 dark:text-white">
      一、通說見解：僅「過失不法前行為」方建構作為義務
    </h2>

    <div class="prose dark:prose-invert max-w-none text-slate-700 dark:text-slate-200 font-serif text-sm sm:text-base leading-relaxed space-y-4">
      <p class="indent-8 text-justify">
        通說見解向來認為，<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">故意的不法前行為不會建構作為義務</span>（換句話說，故意的不法前行為並非保證地位），例如甲將水果刀刺入乙腹部後，慢慢地「欣賞」乙死前掙扎而不施予救助，只要論甲一個作為殺人罪即可，至於後續欣賞乙死亡的行為，不再論不作為殺人罪，理由是<span class="font-bold text-slate-900 dark:text-white">沒必要</span>。
      </p>

      <p class="indent-8 text-justify">
        通說更進一步認為，<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">僅「過失的不法前行為」方建構作為義務</span>，例如甲不小心將水果刀刺入乙的腹部中，而之後又不為救助行為，事後續行為方才可成立不作為殺人罪。在這個個案中，結論上的確只論以作為殺人罪即可，但是理由並非僅是「沒必要」，我們可以先來看看下面幾個案例。
      </p>
    </div>

    <!-- 通說水果刀刺腹比喻對照卡 -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
      <div class="p-4 rounded-xl bg-rose-50/70 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-900/40 space-y-2">
        <div class="flex items-center gap-2 font-black text-rose-900 dark:text-rose-200 text-xs">
          <span>🔪</span>
          <span>情境 A：故意刺腹＋欣賞掙扎不救</span>
        </div>
        <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-serif">
          甲故意刺乙腹部，隨後袖手旁觀欣賞乙痛苦死前掙扎。通說認為：前行為已成立作為殺人罪，後續不作為「沒必要」再論不作為殺人罪。故意前行為不建構作為義務！
        </p>
      </div>

      <div class="p-4 rounded-xl bg-blue-50/70 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-900/40 space-y-2">
        <div class="flex items-center gap-2 font-black text-blue-900 dark:text-blue-200 text-xs">
          <span>🩹</span>
          <span>情境 B：過失刺腹＋見死不救</span>
        </div>
        <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-serif">
          甲不小心過失刺傷乙，此時甲負有危險前行為之作為義務（保證地位）；隨後甲故意不予送醫，後續不作為方才成立刑法第 271 條不作為殺人既遂罪！
        </p>
      </div>
    </div>
  </section>

  <!-- ==================== 核心三大案例集群 (案例 4-10、4-11、4-12 原文) ==================== -->
  <section id="sec-p2ch4-sp2-cases" class="space-y-4">
    <div class="flex items-center justify-between px-1">
      <h3 class="text-base sm:text-lg font-black font-serif text-slate-900 dark:text-white flex items-center gap-2">
        <span>📖</span>
        <span>原書三大經典測驗案例（P. 4-46 ～ 4-47）</span>
      </h3>
      <span class="text-[11px] font-mono text-slate-400">CASES 4-10 ~ 4-12</span>
    </div>

    <!-- 案例 4-10 -->
    <div id="case-4-10-dissuade" class="p-5 sm:p-6 rounded-2xl border-l-[6px] border-l-rose-500 border border-slate-200/80 dark:border-white/10 bg-white dark:bg-[#121827] shadow-2xs space-y-3">
      <div class="flex items-center justify-between">
        <div class="flex items-center gap-2">
          <span class="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-rose-100 dark:bg-rose-950 text-rose-700 dark:text-rose-300">
            案例 4-10
          </span>
          <h4 class="font-bold text-slate-900 dark:text-white text-sm sm:text-base">
            砍殺倒地悔悟欲叫救護車 • 第三人極力勸阻案
          </h4>
        </div>
        <span class="text-xs text-slate-400 font-mono">P. 4-46</span>
      </div>
      <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800 text-slate-700 dark:text-slate-300 text-xs sm:text-sm font-serif leading-relaxed">
        <span class="font-bold text-slate-900 dark:text-white">【案例事實】</span>
        甲基於殺人故意將乙砍殺倒地，在其看見乙倒臥於血泊中的痛苦表情後，突然心生悔意而打算電話召救護車。此時與犯行無關之第三人丙卻極力勸阻甲，促使其放棄救助的念頭，最後乙因失血過多而死亡。
      </div>
    </div>

    <!-- 案例 4-11 -->
    <div id="case-4-11-incapacity" class="p-5 sm:p-6 rounded-2xl border-l-[6px] border-l-amber-500 border border-slate-200/80 dark:border-white/10 bg-white dark:bg-[#121827] shadow-2xs space-y-3">
      <div class="flex items-center justify-between">
        <div class="flex items-center gap-2">
          <span class="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-amber-100 dark:bg-amber-950 text-amber-700 dark:text-amber-300">
            案例 4-11
          </span>
          <h4 class="font-bold text-slate-900 dark:text-white text-sm sm:text-base">
            無過咎自陷無責任能力砍殺 • 清醒後故意不救案
          </h4>
        </div>
        <span class="text-xs text-slate-400 font-mono">P. 4-46</span>
      </div>
      <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800 text-slate-700 dark:text-slate-300 text-xs sm:text-sm font-serif leading-relaxed">
        <span class="font-bold text-slate-900 dark:text-white">【案例事實】</span>
        甲無過咎地陷入無責任能力的狀態，並且在此狀態下故意砍殺乙，甲清醒之後，故意不對陷入生命危險的乙採取任何的救助措施，最後乙因為未能及時就醫而失血過多死亡。
      </div>
    </div>

    <!-- 案例 4-12 -->
    <div id="case-4-12-time-bomb" class="p-5 sm:p-6 rounded-2xl border-l-[6px] border-l-purple-500 border border-slate-200/80 dark:border-white/10 bg-white dark:bg-[#121827] shadow-2xs space-y-3">
      <div class="flex items-center justify-between">
        <div class="flex items-center gap-2">
          <span class="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-purple-100 dark:bg-purple-950 text-purple-700 dark:text-purple-300">
            案例 4-12
          </span>
          <h4 class="font-bold text-slate-900 dark:text-white text-sm sm:text-base">
            客機安裝定時炸彈同歸於盡 • 乘客暴力逼供防衛案
          </h4>
        </div>
        <span class="text-xs text-slate-400 font-mono">P. 4-47</span>
      </div>
      <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800 text-slate-700 dark:text-slate-300 text-xs sm:text-sm font-serif leading-relaxed">
        <span class="font-bold text-slate-900 dark:text-white">【案例事實】</span>
        甲在登上某班飛機後，於機上安裝了一枚定時炸彈，想要和其他乘客同歸於盡。飛機上的其他人於飛機起飛後得知此事，但無法找到炸彈，於是使用暴力逼迫甲取出炸彈並解除設定。
      </div>
    </div>
  </section>

  <!-- ==================== 二、不承認故意不法前行為的評價盲點 (P. 4-47) ==================== -->
  <section id="sec-p2ch4-sp2-reject" class="rounded-2xl border-l-[8px] border-l-rose-500 border border-slate-200/80 dark:border-white/10 bg-white dark:bg-[#121827] p-6 sm:p-7 shadow-xs space-y-4">
    <div class="flex items-center gap-2 text-rose-700 dark:text-rose-400 font-mono text-xs font-bold tracking-wider uppercase">
      <span>SECTION 2</span>
      <span>•</span>
      <span>THE DILEMMA OF REJECTION</span>
    </div>
    <h2 class="text-xl sm:text-2xl font-black font-serif text-slate-900 dark:text-white">
      二、不承認故意的不法前行為所建構的作為義務（通說之荒謬結論）
    </h2>

    <p class="text-slate-700 dark:text-slate-200 font-serif text-sm sm:text-base leading-relaxed indent-8 text-justify">
      依據通說見解，不承認故意的不法前行為可以建構作為義務，那麼上述的三個例子都會出現<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">令人無法接受的結論</span>：
    </p>

    <div class="space-y-3 font-serif text-xs sm:text-sm">
      <div class="p-3.5 rounded-xl bg-rose-50/70 dark:bg-rose-950/30 border border-rose-200/80 dark:border-rose-900/60 leading-relaxed text-slate-700 dark:text-slate-200">
        <strong class="text-rose-700 dark:text-rose-300 font-mono font-bold block sm:inline">【案例 4-10 盲點】</strong>
        丙勸阻甲的救助行為，可初步評價為教唆行為，但是否成立教唆犯，依通說見解應必須檢討從屬性。甲砍殺行為乃「故意的」不法前行為，無法建構積極救助的作為義務，從而不作為因欠缺保證地位而無不法，<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">丙不成立教唆犯</span>（惡性重大的勸阻者丙竟然全身而退！）。
      </div>

      <div class="p-3.5 rounded-xl bg-rose-50/70 dark:bg-rose-950/30 border border-rose-200/80 dark:border-rose-900/60 leading-relaxed text-slate-700 dark:text-slate-200">
        <strong class="text-rose-700 dark:text-rose-300 font-mono font-bold block sm:inline">【案例 4-11 盲點】</strong>
        前行為因欠缺罪責而不成立犯罪，又甲砍殺乙乃「故意的」不法前行為，無法建構積極送醫的作為義務，之後的不作為構成要件不該當，<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">亦不成立犯罪</span>（清醒後故意眼睜睜看著乙死掉，竟完全無罪！）。
      </div>

      <div class="p-3.5 rounded-xl bg-rose-50/70 dark:bg-rose-950/30 border border-rose-200/80 dark:border-rose-900/60 leading-relaxed text-slate-700 dark:text-slate-200">
        <strong class="text-rose-700 dark:text-rose-300 font-mono font-bold block sm:inline">【案例 4-12 盲點】</strong>
        機上乘客使用一切必要手段強迫甲說出炸彈所在，可考慮主張正當防衛。惟裝炸彈乃「故意的」不法前行為，不會建構說出炸彈在哪裡的作為義務，隨後的逼迫行為並非面臨現在不法侵害，<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">無法主張正當防衛</span>（乘客為求自保逼問拆彈，竟然反遭認定為非法傷害甚至強制罪！）。
      </div>
    </div>
  </section>

  <!-- ==================== 三、承認故意不法前行為之化解 (P. 4-47) ==================== -->
  <section id="sec-p2ch4-sp2-admit" class="rounded-2xl border-l-[8px] border-l-emerald-600 border border-slate-200/80 dark:border-white/10 bg-white dark:bg-[#121827] p-6 sm:p-7 shadow-xs space-y-4">
    <div class="flex items-center gap-2 text-emerald-700 dark:text-emerald-400 font-mono text-xs font-bold tracking-wider uppercase">
      <span>SECTION 3</span>
      <span>•</span>
      <span>THE SOLUTION OF CONCURRENCE</span>
    </div>
    <h2 class="text-xl sm:text-2xl font-black font-serif text-slate-900 dark:text-white">
      三、承認故意的不法前行為所建構的作為義務（競合理論之完美化解）
    </h2>

    <p class="text-slate-700 dark:text-slate-200 font-serif text-sm sm:text-base leading-relaxed indent-8 text-justify">
      承認故意的不法前行為可以建構作為義務，那麼以上案例均可以<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">迎刃而解</span>，而且並不會造成評價上的矛盾（因為還有<span class="font-bold text-slate-900 dark:text-white">「競合理論」</span>的把關）：
    </p>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 pt-1 font-serif text-xs sm:text-sm">
      <div class="p-4 rounded-xl bg-emerald-50/70 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-900/40 space-y-2">
        <div class="flex items-center gap-1.5 font-black text-emerald-900 dark:text-emerald-200">
          <span>⚖️</span>
          <span>案例 4-10 之化解</span>
        </div>
        <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-xs">
          甲成立作為殺人罪與不作為殺人罪的<span class="font-bold text-slate-900 dark:text-white">法條競合</span>（最終僅論處一罪）；丙則得以成立<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">不作為殺人罪的教唆犯</span>！成功填補處罰漏洞！
        </p>
      </div>

      <div class="p-4 rounded-xl bg-emerald-50/70 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-900/40 space-y-2">
        <div class="flex items-center gap-1.5 font-black text-emerald-900 dark:text-emerald-200">
          <span>🧠</span>
          <span>案例 4-11 之化解</span>
        </div>
        <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-xs">
          甲的前行為因欠缺罪責而不成立犯罪，但清醒後的後續不作為行為<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">仍可以成立不作為殺人罪</span>！落實法益保護！
        </p>
      </div>

      <div class="p-4 rounded-xl bg-emerald-50/70 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-900/40 space-y-2">
        <div class="flex items-center gap-1.5 font-black text-emerald-900 dark:text-emerald-200">
          <span>✈️</span>
          <span>案例 4-12 之化解</span>
        </div>
        <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-xs">
          甲因負有排除危險發生的作為義務，機上乘客使用法律所允許的手段迫使其履行義務，<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">可以主張正當防衛</span>！合理解套自衛權限！
        </p>
      </div>
    </div>
  </section>

  <!-- ==================== 四、五位一體法學劇院實戰演繹 ==================== -->
  <section id="sec-p2ch4-sp2-theater" class="space-y-4">
    <div class="flex items-center justify-between px-1">
      <div class="flex items-center gap-2">
        <span class="text-lg">🏛️</span>
        <h3 class="text-base sm:text-lg font-black font-serif text-slate-900 dark:text-white">
          五位一體法學劇院 • 案例 4-10 & 4-12 深度對決
        </h3>
      </div>
      <span class="text-[10px] font-mono px-2 py-0.5 rounded-full bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 font-bold">
        #故意前行為激辯
      </span>
    </div>

    <!-- 1. ⚔️ 原被告/檢控辯護法庭正面言詞辯論 (法庭對決區域) -->
    <div class="p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-slate-900 via-[#1a2035] to-slate-900 text-white border border-slate-700 shadow-md space-y-4">
      <div class="flex items-center justify-between border-b border-white/10 pb-3">
        <div class="flex items-center gap-2">
          <span class="text-base">⚔️</span>
          <span class="font-bold text-sm tracking-wide text-amber-300 font-serif">法庭正面言詞辯論：公訴檢察官 vs 辯護人</span>
        </div>
        <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-500/20 text-blue-300 border border-blue-400/30">
          【案例 4-10 勸阻救助教唆爭議】
        </span>
      </div>

      <div class="space-y-3.5 text-xs sm:text-sm font-serif">
        <!-- 控方：赤狐檢察官 -->
        <div class="flex gap-3 items-start p-3.5 rounded-xl bg-rose-950/40 border border-rose-500/30">
          <div class="w-10 h-10 rounded-xl overflow-hidden shrink-0 border border-rose-400/50 shadow-xs">
            <img src="images/prosecutor_fox.jpg" alt="公訴檢察官赤狐女律師" class="w-full h-full object-cover" style="object-position: center 20%; transform: scale(1.35);">
          </div>
          <div class="space-y-1 min-w-0 flex-1">
            <div class="flex items-center gap-2">
              <span class="font-black text-rose-300 text-xs">公訴檢察官 赤狐女律師</span>
              <span class="text-[10px] font-mono text-rose-400/80">PROSECUTOR FOX</span>
            </div>
            <p class="text-rose-100/90 leading-relaxed text-justify">
              「審判長！被告丙在甲心生悔悟欲打電話叫救護車之際，極力勸阻甲救助，直接導致被害人乙失血過多死亡！若依通說認為故意砍殺前行為不建構作為義務，將得出甲的不救助無不法、丙因而因共犯從屬性不成立教唆犯的荒唐結論！蔡聖偉老師精闢指出：<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">故意前行為人同樣負有排除危險之作為義務</span>，甲成立作為與不作為殺人罪之法條競合，丙自應成立不作為殺人罪之教唆犯，請合議庭依法重判丙！」
            </p>
          </div>
        </div>

        <!-- 辯方：金毛大律師 -->
        <div class="flex gap-3 items-start p-3.5 rounded-xl bg-blue-950/40 border border-blue-500/30">
          <div class="w-10 h-10 rounded-xl overflow-hidden shrink-0 border border-blue-400/50 shadow-xs">
            <img src="images/golden_case_attorney.jpg" alt="金毛首席辯護大律師" class="w-full h-full object-cover" style="object-position: center 20%; transform: scale(1.35);">
          </div>
          <div class="space-y-1 min-w-0 flex-1">
            <div class="flex items-center gap-2">
              <span class="font-black text-blue-300 text-xs">辯護人 金毛首席大律師</span>
              <span class="text-[10px] font-mono text-blue-400/80">COUNSELOR GOLDEN</span>
            </div>
            <p class="text-blue-100/90 leading-relaxed text-justify">
              「請檢察官冷靜！刑法學理之罪刑法定與謙抑性格外嚴謹。通說之所以向來不承認故意不法前行為建構作為義務，是因為行為人早以積極作為成立故意殺人既遂罪，期待一個持刀行兇者回頭積極救護，無異於強人所難！既然甲本身之後續不作為不該當不純正不作為犯之保證人地位，基於共犯從屬性，丙當然不構成教唆犯，此乃罪刑法定原則的嚴格貫徹！」
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- 2. 🐾 柴柴法學教授 • 白話生活大解碼 -->
    <div class="p-5 sm:p-6 rounded-2xl bg-amber-50/80 dark:bg-[#1a1714] border border-amber-200/80 dark:border-amber-900/40 shadow-2xs space-y-3">
      <div class="flex items-center gap-3">
        <div class="w-12 h-12 rounded-2xl overflow-hidden border-2 border-amber-400 shadow-xs shrink-0">
          <img src="images/shiba_law_professor.jpg" alt="柴柴法學教授" class="w-full h-full object-cover" style="object-position: center 20%; transform: scale(1.38);">
        </div>
        <div>
          <div class="font-black text-amber-950 dark:text-amber-200 text-sm sm:text-base">
            🐾 柴柴法學教授 • 白話生活大解碼
          </div>
          <div class="text-[11px] text-amber-700 dark:text-amber-400 font-mono">
            Prof. Shiba's Decode: 放火的人難道反而沒有義務叫消防車？
          </div>
        </div>
      </div>

      <div class="text-slate-700 dark:text-slate-200 text-xs sm:text-sm font-serif leading-relaxed space-y-3 pt-1">
        <p class="indent-6 text-justify">
          「同學們！請大家用日常直覺想一想：如果今天小黑『不小心打翻蠟燭』引發火災，法律說小黑有危險前行為，必須負責叫消防車救火；但如果今天是小黑『故意拿汽油放火』，法律卻反而說：『因為你是故意的，所以你沒有撲滅火勢的義務！』這符合常理嗎？
        </p>

        <p class="indent-6 text-justify">
          通說說『沒必要』論不作為，在『只有一個人犯案』的時候好像言之成理（反正小黑都被判殺人罪了）。但一旦遇到<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">第三人介入勸阻（案例 4-10）</span>、<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">精神喪失清醒不救（案例 4-11）</span>或<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">機上定時炸彈乘客防衛逼供（案例 4-12）</span>，通說的漏洞就徹底炸開了！
        </p>

        <p class="indent-6 text-justify">
          蔡聖偉老師的精妙之處，就是大膽承認：<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">故意不法前行為當然建構排除危險的義務</span>！至於會不會過度處罰小黑？不用擔心，因為後端還有『法條競合』把關，小黑依然只被判一個殺人罪，但這時候勸阻小黑的壞蛋丙，就能以教唆犯绳之以法！這才叫體系嚴謹！」
        </p>
      </div>
    </div>

    <!-- 3. ⚖️ 金毛大律師 • 法庭攻防點評 與 4. 🛡️ 德牧法規巡查官 • 法規雷達查核 (嚴格單欄垂直堆疊) -->
    <div class="space-y-3">
      
      <!-- 3. ⚖️ 金毛大律師 • 法庭攻防點評 -->
      <div class="p-4 sm:p-5 rounded-2xl bg-white dark:bg-[#121827] border border-blue-200 dark:border-blue-900/40 shadow-2xs space-y-2.5">
        <div class="flex items-center gap-2.5">
          <div class="w-9 h-9 rounded-xl overflow-hidden border border-blue-400 shrink-0">
            <img src="images/golden_case_attorney.jpg" alt="金毛首席辯護大律師" class="w-full h-full object-cover" style="object-position: center 20%; transform: scale(1.35);">
          </div>
          <div>
            <h4 class="font-bold text-slate-900 dark:text-white text-xs sm:text-sm">
              ⚖️ 金毛大律師 • 法庭攻防點評
            </h4>
            <span class="text-[10px] font-mono text-blue-600 dark:text-blue-400">訴訟實務抗辯戰術</span>
          </div>
        </div>
        <div class="text-xs text-slate-600 dark:text-slate-300 font-serif leading-relaxed space-y-1.5 pl-1">
          <p>
            • <strong class="text-slate-800 dark:text-slate-200">辯護人核心防線（採通說無保證地位抗辯）</strong>：代表案例 4-10 之丙答辯時，首選防禦盾牌即為我國實務通說。抗辯正犯甲出於殺人故意砍擊，依通說前行為乃故意犯罪，本質上不生防阻義務，後續不救助欠缺保證地位，正犯不作為無不法，教唆人丙自屬無罪。
          </p>
          <p>
            • <strong class="text-slate-800 dark:text-slate-200">檢方突穿防線（採競合理論化解攻防）</strong>：公訴人欲將丙定罪，必須引用學者蔡聖偉見解，闡明刑法第 15 條第 2 項文義並未排除故意行為，正犯甲同時該當作為與不作為，以實質不法肯定丙之教唆責任。
          </p>
        </div>
      </div>

      <!-- 4. 🛡️ 德牧法規巡查官 • 法規雷達查核 -->
      <div class="p-4 sm:p-5 rounded-2xl bg-white dark:bg-[#121827] border border-indigo-200 dark:border-indigo-900/40 shadow-2xs space-y-2.5">
        <div class="flex items-center gap-2.5">
          <div class="w-9 h-9 rounded-xl overflow-hidden border border-indigo-400 shrink-0">
            <img src="images/shepherd_law_inspector.jpg" alt="德牧法規巡查官" class="w-full h-full object-cover" style="object-position: center 15%; transform: scale(1.4);">
          </div>
          <div>
            <h4 class="font-bold text-slate-900 dark:text-white text-xs sm:text-sm">
              🛡️ 德牧法規巡查官 • 法規雷達查核
            </h4>
            <span class="text-[10px] font-mono text-indigo-600 dark:text-indigo-400">刑法第 15 條要件與裁判要旨檢索</span>
          </div>
        </div>
        <div class="text-xs text-slate-600 dark:text-slate-300 font-serif leading-relaxed space-y-1.5 pl-1">
          <p>
            • <strong class="text-slate-800 dark:text-slate-200">實體法要件查核（刑法第 15 條第 2 項）</strong>：「因自己行為致有發生一定結果之危險者，負防阻其結果發生之義務。」條文文字僅規定「因自己行為」，文義上並未限定過失，從文義解釋無法得出排除故意行為之結論。
          </p>
          <p>
            • <strong class="text-slate-800 dark:text-slate-200">裁判要旨檢驗（最高法院 31 年上字第 2324 號判例等）</strong>：實務早期著眼於行為人前行為已成立獨立之故意犯罪，毋庸就消極狀態重複論罪。惟近年來因共犯評價與正當防衛（如案例 4-12 逼供拆彈）之嚴峻現實考驗，學說有力論述正逐漸影響司法裁判之深化發展。
          </p>
        </div>
      </div>

    </div>

    <!-- 5. 👨‍⚖️ 邊牧首席審判長 • 終審裁決一槌定音 -->
    <div class="p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-[#0b0f19] via-[#121b2d] to-[#0a0d16] border-2 border-amber-400/80 text-white shadow-xl space-y-3.5">
      <div class="flex items-center justify-between border-b border-amber-400/30 pb-3">
        <div class="flex items-center gap-2.5">
          <div class="w-9 h-9 rounded-xl overflow-hidden border border-amber-400/80 shrink-0">
            <img src="images/border_collie_chief_judge.jpg" alt="邊牧首席審判長" class="w-full h-full object-cover" style="object-position: center 25%; transform: scale(1.35);">
          </div>
          <div>
            <div class="font-black text-amber-300 text-xs sm:text-sm tracking-wide">
              👨‍⚖️ 邊牧首席審判長 • 終審裁決一槌定音
            </div>
            <div class="text-[10px] font-mono text-amber-400/80">#法槌一敲誰與爭鋒</div>
          </div>
        </div>
        <span class="text-xs px-2.5 py-1 rounded-full bg-amber-400/20 text-amber-300 font-bold border border-amber-400/40">
          🔨 終審判定
        </span>
      </div>

      <div class="space-y-3 text-xs sm:text-sm font-serif leading-relaxed text-slate-200">
        <div>
          <strong class="text-amber-300 block mb-1">🔨 【實體法定讞】</strong>
          <p class="indent-6 text-justify text-slate-300">
            本院審酌：通說以「沒必要」排除故意不法前行為之作為義務，於單一行為人尚可自圓其說，然於涉及第三人共犯評價、責任能力斷層及緊急正當防衛（定時炸彈案）時，將導致嚴重法益保護空洞。蔡聖偉老師所提倡之<span class="underline decoration-red-500 decoration-2 underline-offset-4 font-bold">承認作為義務＋競合理論雙層把關說</span>，兼顧實質正義與體系邏輯，為現代刑法總則至為精準之解方！
          </p>
        </div>

        <div>
          <strong class="text-amber-300 block mb-1">💡 【國考答題定錨】</strong>
          <p class="indent-6 text-justify text-slate-300">
            在國家考試若遇此類題型（尤其是勸阻救助致死、機上炸彈防衛逼問）：
            <br>1. <span class="font-bold text-white">先論述通說見解</span>：說明故意不法前行為不建構作為義務，推導出甲不成立不作為犯、丙無教唆犯之盲點。
            <br>2. <span class="font-bold text-white">次論述有力說（蔡聖偉老師）見解</span>：指出刑法第 15 條第 2 項文義無限制，故意前行為人亦負有防阻義務；甲成立作為與不作為殺人罪之法條競合，丙成立不作為殺人罪教唆犯；乘客對甲之逼供亦得成立正當防衛。展現雙重學理涵攝功底，必獲高分！
          </p>
        </div>

        <div class="p-3 rounded-xl bg-amber-950/40 border border-amber-400/40 text-[11.5px] leading-relaxed text-amber-200">
          <strong class="text-amber-300">📅 2026 最新法條動態備註：</strong>
          刑法第 15 條（不純正不作為犯與危險前行為）至 2026 年最新法規狀態均維持現行條文，未見文字修正。考生作答時應以現行法為基準，重點在於構成要件涵攝與競合理論之深入發揮！
        </div>
      </div>
    </div>
  </section>

  <!-- ==================== 第二篇 全篇宏偉完結祝賀卡片 (P. 4-47 羽毛筆) ==================== -->
  <section class="rounded-3xl border-2 border-indigo-500/40 bg-gradient-to-br from-indigo-900 via-slate-900 to-[#0b0f19] text-white p-6 sm:p-8 text-center space-y-4 shadow-xl">
    <div class="w-16 h-16 mx-auto rounded-full bg-gradient-to-tr from-amber-400 to-indigo-500 p-0.5 shadow-lg flex items-center justify-center">
      <div class="w-full h-full rounded-full bg-slate-900 flex items-center justify-center text-2xl">
        ✒️
      </div>
    </div>

    <div class="space-y-1">
      <span class="text-xs font-mono font-bold tracking-widest text-amber-300 uppercase">
        GRAND FINALE OF PART TWO
      </span>
      <h3 class="text-xl sm:text-2xl font-black font-serif text-white">
        🎉 恭喜完成：第二篇 故意既遂犯構成要件 全篇四大章與四大專題！
      </h3>
    </div>

    <p class="text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto leading-relaxed font-serif">
      您已完整修畢第二篇全部內容：第一章發展歷史、第二章客觀構成要件（行為、結果歸責、被害人介入專題、合法替代行為專題）、第三章主觀構成要件（故意、意圖）、第四章不純正不作為犯，以及黃榮堅老師保證地位特殊理解專題、故意不法前行為作為義務專題！三階論第一階層（構成要件該當性）已全面通關！
    </p>

    <div class="pt-2 flex flex-wrap justify-center gap-3">
      <button onclick="switchView('part2-ch4-special1')" class="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs transition-all cursor-pointer">
        ← 返回專題研究一（保證地位特殊理解）
      </button>
      <button onclick="switchView('part2-ch4')" class="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs transition-all cursor-pointer">
        ← 返回第四章 不純正不作為犯正文
      </button>
      <button onclick="switchView('part2')" class="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs transition-all shadow-md cursor-pointer flex items-center gap-1.5">
        <span>📖 返回第二篇導讀</span>
      </button>
      <button onclick="switchView('cover')" class="px-4 py-2 rounded-xl bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 font-bold text-xs transition-all border border-amber-400/30 cursor-pointer">
        🏠 回到書籍主頁
      </button>
    </div>
  </section>

  <!-- ==================== 頁尾導航按鈕 ==================== -->
  <footer class="max-w-4xl mx-auto pt-6 border-t border-slate-200/80 dark:border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
    <button onclick="switchView('part2-ch4-special1')" class="w-full sm:w-auto px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 font-bold text-xs flex items-center justify-center gap-1.5 transition-all cursor-pointer">
      <span>←</span>
      <span>上一單元：第四章 專題研究一 黃榮堅老師保證地位特殊理解 (4-44~4-45)</span>
    </button>

    <button onclick="switchView('part2')" class="w-full sm:w-auto px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-all shadow-xs cursor-pointer">
      <span>📖 返回第二篇導讀（全篇完結）</span>
      <span>→</span>
    </button>
  </footer>

</div>
`;
