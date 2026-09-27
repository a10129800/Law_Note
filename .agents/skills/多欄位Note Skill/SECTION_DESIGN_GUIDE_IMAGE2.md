# 📘 圖二標準規範：旗艦核心卡片與小白白話文排版指南 (Image 2 Design Standard)

> **適用情境**：本規範完整收錄「圖二（`part0-ch1-sec2` 罪刑法定原則 / `chapter-2` 構成要件與故意既遂原則）」之旗艦級視覺排版標準。  
> 適用於法律筆記各篇章之**「核心法定原則」**、**「重大爭點」**、**「深奧法理導讀」**，同時兼顧**嚴謹法學教義**與**新手 30 秒秒懂白話文**。

---

## 🏛️ 視覺架構五大層次（從外到內）

```text
[章節大標題 + 實心色條]
  └── [外層大卡片容器: rounded-3xl, bg-white/dark:#101623, shadow-sm]
        ├── [1. 核心原則旗艦天藍卡片: border-l-[8px] 天藍實心色軸]
        │     ├── 標頭列：中文標題 + 拉丁文副標 + 右側法條徽章 (可點擊)
        │     ├── 核心明文卡：純白高對比 + 動態呼吸脈衝燈 + 法條金句
        │     ├── 歷史/教義暖金卡：暖金漸層底 + 引用區 + 典型犯行 6 格網格
        │     ├── 體系分野對照卡：客觀(既遂) vs 主觀(故意) 雙欄卡片
        │     └── 學理精華總結：半透明白底圓角註解段落
        │
        └── [2. 🐣 小白秒懂專區・白話文大翻譯: border-l-[8px] 暖橘實心色軸]
              ├── 標頭列：跳動小雞 🐣 + 零基礎秒懂膠囊 + 痛點問句
              ├── 一句話大白話翻譯金句框：高對比白底 + 螢光底線
              ├── 趣味日常比喻：結合生活經驗（如射擊打靶、打電動）雙欄拆解
              └── 小白白話對照卡：用大白話解釋主客觀門檻
```

---

## 📋 完整 HTML 程式碼範本（隨複製即用）

複製下方骨架並替換標題、法號與文字內容即可：

```html
<!-- ==================== 章節小節開始 ==================== -->
<section id="sec-your-section-id" class="space-y-6 pt-2">
  
  <!-- 0. 節次標題列 -->
  <div class="flex items-center gap-3">
    <span class="w-2 h-6 rounded-full bg-blue-600"></span>
    <h3 class="text-lg sm:text-xl font-black text-slate-900 dark:text-white tracking-tight">
      一、章節標題名稱（教材第 X-XX 頁）
    </h3>
  </div>

  <!-- 外層大卡片容器（圖二標準） -->
  <div class="p-6 rounded-3xl border border-slate-200 dark:border-white/[0.08] bg-white dark:bg-[#101623] shadow-sm space-y-6">
    
    <!-- =======================================================
         1. 核心法定定義與刑法處罰原則卡片 (旗艦高飽和天藍塊 + 實心左導引軸)
         ======================================================= -->
    <div class="p-6 rounded-2xl bg-gradient-to-br from-sky-100 via-blue-50 to-indigo-100 dark:from-[#082f49] dark:via-[#0c4a6e]/70 dark:to-[#0f172a] border-2 border-sky-400 dark:border-sky-500/80 border-l-[8px] border-l-blue-600 dark:border-l-sky-400 shadow-lg shadow-sky-500/15 space-y-5">
      
      <!-- 標頭列：法規名稱與顯眼高彩度實心徽章 -->
      <div class="flex items-center justify-between flex-wrap gap-2">
        <div class="flex items-center gap-2.5">
          <span class="text-2xl drop-shadow-sm">📜</span>
          <div>
            <span class="font-black text-sm sm:text-base text-blue-950 dark:text-sky-100 tracking-wide">
              原則／概念核心名稱
            </span>
            <span class="block text-[11px] font-mono font-bold text-blue-700 dark:text-sky-300 tracking-wider uppercase">
              LATIN OR GERMAN ACADEMIC SUBTITLE
            </span>
          </div>
        </div>
        <div class="flex items-center gap-2">
          <!-- 關聯法條膠囊 (點擊可呼叫原地法條彈窗) -->
          <span data-statute="法條條號數字" class="text-xs font-mono font-black px-3 py-1 rounded-lg bg-blue-600 hover:bg-blue-700 text-white shadow-sm border border-blue-400 cursor-pointer transition-all hover:scale-105 active:scale-95 flex items-center gap-1" title="點擊檢視法條全文">
            <span>§</span> 刑法第 XX 條
          </span>
          <!-- 概念核心識別徽章 -->
          <span class="text-xs font-mono font-black px-3 py-1 rounded-lg bg-amber-500 text-white shadow-sm border border-amber-300 flex items-center gap-1">
            <span>⚖️</span> 核心原則名稱
          </span>
        </div>
      </div>

      <!-- 核心立法明文卡片：高對比純白卡片 + 亮藍左導引線 + 呼吸燈 -->
      <div class="p-4 sm:p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-blue-400/80 dark:border-blue-700/80 border-l-4 border-l-blue-600 shadow-md space-y-2">
        <div class="flex items-center justify-between text-xs font-mono border-b border-blue-100 dark:border-slate-800 pb-2">
          <span class="font-bold text-blue-800 dark:text-blue-300 flex items-center gap-1.5">
            <!-- 動態呼吸訊號燈 -->
            <span class="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
            核心立法處罰原則 / 法定明文
          </span>
          <span class="px-2 py-0.5 rounded bg-blue-100 dark:bg-blue-900/60 text-blue-800 dark:text-blue-200 font-bold text-[11px]">
            ★ 核心帝王地位標籤
          </span>
        </div>
        <p class="text-base sm:text-lg md:text-xl font-black text-blue-950 dark:text-blue-50 leading-relaxed font-serif tracking-wide py-1">
          「此處放置教科書或法條最核心的名言、定義或原則明文。」
        </p>
        <p class="text-xs sm:text-sm text-slate-800 dark:text-slate-100 font-medium leading-relaxed pt-1">
          <span class="font-bold text-blue-700 dark:text-blue-300">▶ 具體例證：</span>以經典案例為例，立法者經驗上所設想的係<span class="font-bold text-rose-700 dark:text-rose-300 bg-rose-50 dark:bg-rose-950/60 px-1.5 py-0.5 rounded border border-rose-200 dark:border-rose-800">「出於特定故意而實施特定犯行」</span>，亦即<span class="font-bold text-blue-900 dark:text-blue-200 bg-blue-100/80 dark:bg-blue-900/60 px-1.5 py-0.5 rounded border border-blue-200 dark:border-blue-700">客觀與主觀完全該當</span>之情形。
        </p>
      </div>

      <!-- 歷史累積 / 學說背景 / 典型犯行：飽滿鮮明暖金橙黃卡片 -->
      <div class="p-4 sm:p-5 rounded-xl bg-gradient-to-r from-amber-100 via-amber-50 to-yellow-50 dark:from-amber-950/70 dark:via-amber-900/40 dark:to-slate-900 border-2 border-amber-400 dark:border-amber-500/80 border-l-4 border-l-amber-600 shadow-sm space-y-3 text-xs sm:text-[13px]">
        <div class="flex items-center justify-between font-bold text-amber-900 dark:text-amber-200 border-b border-amber-200/80 dark:border-amber-800/60 pb-1.5">
          <span class="flex items-center gap-1.5 text-xs sm:text-sm">
            <span class="text-base">🏛️</span>
            <span>學理源起或歷史經驗背景</span>
          </span>
          <span class="font-mono text-[11px] px-2 py-0.5 rounded bg-amber-200/80 dark:bg-amber-800/60 text-amber-950 dark:text-amber-100 font-bold">
            法源 / 歷史依據
          </span>
        </div>
        <blockquote class="italic text-amber-950 dark:text-amber-100 leading-relaxed pl-3 border-l-2 border-amber-500 font-serif text-xs sm:text-sm font-medium">
          「此處放置課本嚴謹的引言、經典釋字或外國法判例原則原文。」
        </blockquote>

        <!-- 典型範例格（6 格或 4 格網格，超高對比極清灰色卡片） -->
        <div class="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-1.5 text-xs">
          <div class="p-3 rounded-xl bg-slate-100 hover:bg-slate-200/80 dark:bg-slate-800/90 dark:hover:bg-slate-750 border-2 border-slate-300 dark:border-slate-600 hover:border-slate-400 dark:hover:border-slate-500 text-center shadow-xs transition-all">
            <span class="block text-red-600 dark:text-red-400 font-black text-sm mb-1.5 tracking-tight">範例項目 1 (謀殺)</span>
            <span class="inline-block text-xs text-slate-800 dark:text-slate-100 font-bold px-2 py-0.5 rounded-md bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-600 shadow-2xs">最無爭議的典型</span>
          </div>
          <div class="p-3 rounded-xl bg-slate-100 hover:bg-slate-200/80 dark:bg-slate-800/90 dark:hover:bg-slate-750 border-2 border-slate-300 dark:border-slate-600 hover:border-slate-400 dark:hover:border-slate-500 text-center shadow-xs transition-all">
            <span class="block text-slate-900 dark:text-white font-black text-sm mb-1.5 tracking-tight">範例項目 2</span>
            <span class="inline-block text-xs text-slate-800 dark:text-slate-100 font-bold px-2 py-0.5 rounded-md bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-600 shadow-2xs">核心侵害重點</span>
          </div>
          <div class="p-3 rounded-xl bg-slate-100 hover:bg-slate-200/80 dark:bg-slate-800/90 dark:hover:bg-slate-750 border-2 border-slate-300 dark:border-slate-600 hover:border-slate-400 dark:hover:border-slate-500 text-center shadow-xs transition-all">
            <span class="block text-slate-900 dark:text-white font-black text-sm mb-1.5 tracking-tight">範例項目 3</span>
            <span class="inline-block text-xs text-slate-800 dark:text-slate-100 font-bold px-2 py-0.5 rounded-md bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-600 shadow-2xs">核心侵害重點</span>
          </div>
          <div class="p-3 rounded-xl bg-slate-100 hover:bg-slate-200/80 dark:bg-slate-800/90 dark:hover:bg-slate-750 border-2 border-slate-300 dark:border-slate-600 hover:border-slate-400 dark:hover:border-slate-500 text-center shadow-xs transition-all">
            <span class="block text-slate-900 dark:text-white font-black text-sm mb-1.5 tracking-tight">範例項目 4</span>
            <span class="inline-block text-xs text-slate-800 dark:text-slate-100 font-bold px-2 py-0.5 rounded-md bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-600 shadow-2xs">核心侵害重點</span>
          </div>
          <div class="p-3 rounded-xl bg-slate-100 hover:bg-slate-200/80 dark:bg-slate-800/90 dark:hover:bg-slate-750 border-2 border-slate-300 dark:border-slate-600 hover:border-slate-400 dark:hover:border-slate-500 text-center shadow-xs transition-all">
            <span class="block text-slate-900 dark:text-white font-black text-sm mb-1.5 tracking-tight">範例項目 5</span>
            <span class="inline-block text-xs text-slate-800 dark:text-slate-100 font-bold px-2 py-0.5 rounded-md bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-600 shadow-2xs">核心侵害重點</span>
          </div>
          <div class="p-3 rounded-xl bg-slate-100 hover:bg-slate-200/80 dark:bg-slate-800/90 dark:hover:bg-slate-750 border-2 border-slate-300 dark:border-slate-600 hover:border-slate-400 dark:hover:border-slate-500 text-center shadow-xs transition-all">
            <span class="block text-slate-900 dark:text-white font-black text-sm mb-1.5 tracking-tight">範例項目 6</span>
            <span class="inline-block text-xs text-slate-800 dark:text-slate-100 font-bold px-2 py-0.5 rounded-md bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-600 shadow-2xs">核心侵害重點</span>
          </div>
        </div>
      </div>

      <!-- 體系對照卡（客觀 vs 主觀 / 正當化事由 vs 罪責事由） -->
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <!-- 左卡：藍色系 (客觀面) -->
        <div class="p-3.5 rounded-xl bg-white dark:bg-slate-900 border-2 border-blue-400/80 dark:border-blue-700/80 border-l-4 border-l-blue-600 shadow-xs space-y-1.5">
          <div class="text-xs font-bold text-blue-800 dark:text-blue-300 flex items-center justify-between">
            <span class="flex items-center gap-1.5">
              <span>🔵</span>
              <span>客觀該當性</span>
            </span>
            <span class="font-extrabold text-blue-700 dark:text-blue-300 text-[11px] px-2 py-0.5 bg-blue-50 dark:bg-slate-800 rounded-md border border-blue-200 dark:border-blue-700">
              學理稱「既遂」
            </span>
          </div>
          <p class="text-xs sm:text-sm text-slate-800 dark:text-slate-100 font-medium leading-relaxed pt-0.5">
            外在世界實行了構成要件該當行為，且<span class="font-bold text-blue-800 dark:text-blue-200 bg-blue-50 dark:bg-blue-950/80 px-1 py-0.5 rounded border border-blue-200 dark:border-blue-700">法益侵害結果完全發生</span><span class="text-rose-600 dark:text-rose-400 font-bold ml-1">（例如人死亡）</span>。
          </p>
        </div>

        <!-- 右卡：紫色系 (主觀面) -->
        <div class="p-3.5 rounded-xl bg-white dark:bg-slate-900 border-2 border-indigo-400/80 dark:border-indigo-700/80 border-l-4 border-l-indigo-600 shadow-xs space-y-1.5">
          <div class="text-xs font-bold text-indigo-800 dark:text-indigo-300 flex items-center justify-between">
            <span class="flex items-center gap-1.5">
              <span>🟣</span>
              <span>主觀該當性</span>
            </span>
            <span class="font-extrabold text-indigo-700 dark:text-indigo-300 text-[11px] px-2 py-0.5 bg-indigo-50 dark:bg-slate-800 rounded-md border border-indigo-200 dark:border-indigo-700">
              學理稱「故意」
            </span>
          </div>
          <p class="text-xs sm:text-sm text-slate-800 dark:text-slate-100 font-medium leading-relaxed pt-0.5">
            行為人內心<span class="font-bold text-indigo-900 dark:text-indigo-200 bg-indigo-50 dark:bg-indigo-950/80 px-1 py-0.5 rounded border border-indigo-200 dark:border-indigo-700">明知並有意使其發生</span><span class="font-mono font-bold text-indigo-700 dark:text-indigo-300">（刑法第 13 條第 1 項）</span>，具備<span class="font-bold text-purple-700 dark:text-purple-300 bg-purple-50 dark:bg-purple-950/80 px-1 py-0.5 rounded border border-purple-200 dark:border-purple-800">實質主觀惡性</span>。
          </p>
        </div>
      </div>

      <!-- 學理總結說明段落 -->
      <p class="text-xs sm:text-sm text-blue-950 dark:text-slate-200 leading-relaxed font-medium bg-white/70 dark:bg-slate-900/50 p-3.5 rounded-xl border border-blue-200/60 dark:border-blue-900/40">
        此處撰寫總結評釋，說明為何這兩者缺一不可，以及刑法立法架構上的預設評價邏輯。
      </p>

    </div>


    <!-- =======================================================
         2. 🐣 【超亮眼白話文專區】讓不懂法的小白也能 30 秒秒懂
         ======================================================= -->
    <div class="rounded-2xl p-5 sm:p-6 bg-gradient-to-br from-amber-50 via-orange-50/80 to-yellow-100 dark:from-[#2a1c0c] dark:via-[#221608] dark:to-[#171005] border-2 border-amber-400 dark:border-amber-500 border-l-[8px] border-l-amber-500 shadow-md shadow-amber-500/10 space-y-4">
      
      <!-- 小白專區 Header -->
      <div class="flex items-center justify-between flex-wrap gap-2 border-b border-amber-200 dark:border-amber-800/80 pb-3">
        <div class="flex items-center gap-2">
          <!-- 彈跳小雞動畫 -->
          <span class="text-2xl animate-bounce">🐣</span>
          <div>
            <div class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-white text-[11px] font-black shadow-xs">
              <span>💡 零基礎秒懂專區</span>
              <span>•</span>
              <span>白話文大翻譯</span>
            </div>
            <h4 class="text-base sm:text-lg font-black text-amber-950 dark:text-amber-100 pt-0.5">
              到底什麼是【專有名詞】？為什麼法律上要這樣規定？
            </h4>
          </div>
        </div>
        <span class="text-xs font-bold text-amber-800 dark:text-amber-300 bg-amber-100 dark:bg-amber-900/60 px-2.5 py-1 rounded-lg border border-amber-300 dark:border-amber-700">
          🎯 入門必備通識
        </span>
      </div>

      <!-- 一句話大白話翻譯金句 -->
      <div class="p-3.5 sm:p-4 rounded-xl bg-white dark:bg-slate-900 border-2 border-amber-300 dark:border-amber-600 shadow-xs">
        <div class="text-[11px] font-black text-amber-600 dark:text-amber-400 uppercase tracking-wider mb-1">
          📢 一句話大白話翻譯
        </div>
        <p class="text-sm sm:text-base font-black text-slate-900 dark:text-white leading-relaxed">
          👉「<span class="text-amber-600 dark:text-amber-400 underline decoration-amber-400 underline-offset-4">用最接地氣、最口語化的一句話精闢破題！</span>」例如：心裡想幹壞事＋現實幹成了＝100%抓去關！
        </p>
      </div>

      <!-- 趣味日常比喻卡片 (射擊遊戲 / 點餐 / 日常互動) -->
      <div class="p-4 rounded-xl bg-amber-100/60 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800/60 space-y-2 text-xs sm:text-[13px] text-slate-800 dark:text-slate-200 leading-relaxed">
        <div class="font-black text-amber-900 dark:text-amber-200 flex items-center gap-1.5 text-sm">
          <span>🎯</span>
          <span>生活超有感比喻：【比喻標題名稱】</span>
        </div>
        <p>
          想像一個日常生活無痛理解的情境：
        </p>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
          <div class="p-3 rounded-xl bg-white dark:bg-slate-900 border-2 border-indigo-300 dark:border-indigo-700 shadow-2xs space-y-1">
            <span class="font-black text-indigo-700 dark:text-indigo-300 block text-xs sm:text-[13px]">🟣 主觀心態 ＝ 腦中意圖</span>
            <p class="text-slate-800 dark:text-slate-100 text-xs sm:text-[13px] font-medium leading-relaxed">
              大腦清清楚楚知道自己在做什麼，手指<span class="font-bold text-indigo-900 dark:text-indigo-200 bg-indigo-50 dark:bg-indigo-950/80 px-1 py-0.5 rounded border border-indigo-200 dark:border-indigo-800">「故意」扣下扳機</span>，心裡就是要這個結果！<span class="text-purple-700 dark:text-purple-300 font-bold">（不是不小心走火）</span>
            </p>
          </div>
          <div class="p-3 rounded-xl bg-white dark:bg-slate-900 border-2 border-blue-300 dark:border-blue-700 shadow-2xs space-y-1">
            <span class="font-black text-blue-700 dark:text-blue-300 block text-xs sm:text-[13px]">🔵 客觀現實 ＝ 外部事實</span>
            <p class="text-slate-800 dark:text-slate-100 text-xs sm:text-[13px] font-medium leading-relaxed">
              子彈真實射出、<span class="font-bold text-rose-700 dark:text-rose-400 bg-rose-50 dark:bg-rose-950/80 px-1 py-0.5 rounded border border-rose-200 dark:border-rose-800">目標真實倒地！</span><span class="text-blue-800 dark:text-blue-300 font-bold">（世界上真實發生了不可挽回的損害）</span>
            </p>
          </div>
        </div>
        <p class="text-amber-950 dark:text-amber-100 font-bold bg-white/80 dark:bg-slate-900/60 p-2.5 rounded-lg border border-amber-300/60">
          💡 <strong>為什麼叫「原則」？</strong> 因為這就是標準的「大壞蛋套餐」！法律預設就是抓這種人；至於「想幹沒幹成（未遂）」或「沒想幹卻搞砸（過失）」，都是例外，有明文才罰。
        </p>
      </div>

      <!-- 小白必懂雙門檻白話拆解 -->
      <div class="space-y-2">
        <div class="text-xs font-black text-amber-950 dark:text-amber-200 flex items-center gap-1">
          <span>⚡</span>
          <span>白話拆解：兩大門檻（雙劍合璧才算數）</span>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-2.5 text-xs">
          
          <div class="p-3.5 rounded-xl bg-white dark:bg-slate-900 border-2 border-blue-400/80 dark:border-blue-700/80 border-l-4 border-l-blue-600 shadow-xs space-y-2">
            <div class="font-black text-blue-800 dark:text-blue-300 flex items-center justify-between text-xs sm:text-[13px]">
              <span class="flex items-center gap-1.5">
                <span>🔵</span>
                <span>客觀層面 ＝「既遂」</span>
              </span>
              <span class="text-[11px] font-mono font-bold px-2 py-0.5 rounded bg-blue-100 dark:bg-blue-900/60 text-blue-800 dark:text-blue-200 border border-blue-200 dark:border-blue-800">外在事實</span>
            </div>
            <div class="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-blue-50 dark:bg-blue-950/80 border border-blue-200 dark:border-blue-800 text-blue-900 dark:text-blue-200 font-bold text-xs">
              🗣️ 小白白話：「壞事真的做成了！」
            </div>
            <p class="text-slate-800 dark:text-slate-100 font-medium leading-relaxed text-xs sm:text-[13px]">
              外在世界有你開槍、揮刀的動作，且<span class="font-bold text-rose-700 dark:text-rose-400 bg-rose-50 dark:bg-rose-950/60 px-1.5 py-0.5 rounded border border-rose-200 dark:border-rose-800">最後真的有人受害</span>。用監視器或肉眼看，<span class="font-bold text-blue-800 dark:text-blue-300">所有犯罪結果都完全實現</span>。
            </p>
          </div>

          <div class="p-3.5 rounded-xl bg-white dark:bg-slate-900 border-2 border-indigo-400/80 dark:border-indigo-700/80 border-l-4 border-l-indigo-600 shadow-xs space-y-2">
            <div class="font-black text-indigo-800 dark:text-indigo-300 flex items-center justify-between text-xs sm:text-[13px]">
              <span class="flex items-center gap-1.5">
                <span>🟣</span>
                <span>主觀層面 ＝「故意」</span>
              </span>
              <span class="text-[11px] font-mono font-bold px-2 py-0.5 rounded bg-indigo-100 dark:bg-indigo-900/60 text-indigo-800 dark:text-indigo-200 border border-indigo-200 dark:border-indigo-800">內心惡念</span>
            </div>
            <div class="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-indigo-50 dark:bg-indigo-950/80 border border-indigo-200 dark:border-indigo-800 text-indigo-900 dark:text-indigo-200 font-bold text-xs">
              🗣️ 小白白話：「心裡清清楚楚就是要幹！」
            </div>
            <p class="text-slate-800 dark:text-slate-100 font-medium leading-relaxed text-xs sm:text-[13px]">
              <span class="font-bold text-purple-700 dark:text-purple-300">不是手滑、不是恍神、不是做夢！</span>明知道自己在做犯法的事，而且<span class="font-bold text-indigo-900 dark:text-indigo-200 bg-indigo-50 dark:bg-indigo-950/80 px-1.5 py-0.5 rounded border border-indigo-200 dark:border-indigo-800">心甘情願、故意要讓這個壞結果發生</span>。
            </p>
          </div>

        </div>
      </div>

    </div>

  </div>
</section>
<!-- ==================== 章節小節結束 ==================== -->
```

---

## 🎨 核心 CSS 樣式與色彩規範速查表 (Design Tokens)

| 元件區塊 | 明亮模式 (Light) 樣式 Token | 暗夜模式 (Dark) 樣式 Token | 功能說明 |
| :--- | :--- | :--- | :--- |
| **最外層容器** | `border-slate-200 bg-white shadow-sm` | `border-white/[0.08] bg-[#101623]` | 統一的三欄主流大白底大框 |
| **旗艦天藍主卡** | `bg-gradient-to-br from-sky-100 via-blue-50 to-indigo-100 border-sky-400` | `dark:from-[#082f49] dark:via-[#0c4a6e]/70 dark:to-[#0f172a] dark:border-sky-500/80` | 圖二最標誌性的科技天藍主題色 |
| **旗艦左導引主軸** | `border-l-[8px] border-l-blue-600` | `dark:border-l-sky-400` | 8px 實心立體視覺錨定軸 |
| **法條原地膠囊** | `bg-blue-600 text-white border-blue-400 hover:bg-blue-700` | `bg-blue-600 text-white border-blue-400` | `data-statute="XX"` 原地懸浮/抽屜聯動 |
| **概念金徽章** | `bg-amber-500 text-white border-amber-300` | `bg-amber-500 text-white` | 凸顯核心法律原則或大法官釋字 |
| **純白呼吸燈卡** | `bg-white border-2 border-blue-400/80 border-l-4 border-l-blue-600 shadow-md` | `dark:bg-slate-900 dark:border-blue-700/80` | 展示立法原文與金句核心 |
| **呼吸脈衝圓點** | `w-2 h-2 rounded-full bg-blue-600 animate-pulse` | `bg-blue-400` | 視覺引導，象徵核心運作中 |
| **教義暖金卡** | `bg-gradient-to-r from-amber-100 via-amber-50 to-yellow-50 border-amber-400 border-l-4 border-l-amber-600` | `dark:from-amber-950/70 dark:via-amber-900/40 dark:to-slate-900` | 展示歷史累積、英美重罪、阻卻事由教義 |
| **🐣 小白專區** | `bg-gradient-to-br from-amber-50 via-orange-50/80 to-yellow-100 border-amber-400 border-l-[8px] border-l-amber-500` | `dark:from-[#2a1c0c] dark:via-[#221608] dark:to-[#171005] dark:border-amber-500` | 讓新手 30 秒秒懂的生活化白話文解構 |
| **跳動小雞** | `text-2xl animate-bounce` | `text-2xl animate-bounce` | 活潑吸睛的微互動符號 |

---

## ⚠️ 寫作與維護四大鐵律

1. **嚴禁刪減原教材內容 (No Content Loss)**：
   - 增加「小白專區」旨在擴充理解，**絕對不能替代或刪除**原本教材的學說、法條、典型犯罪格與深度論述。兩者必須以垂直巢狀形式和諧共存。
2. **標籤閉合鐵律 (HTML Tag Integrity)**：
   - 每一組 `<div class="p-6 rounded-3xl...">` 必須精確閉合！
   - 絕不可缺少 `</div>` 或多出 `</div>`，否則會破壞三欄網格，導致右側 TOC 掉落至頁面下方或畫面全黑。
3. **法規標籤連動 (Statute Attribute)**：
   - 只要提到重要條號，均應加上 `data-statute="條號數字"`（如 `data-statute="12"`），以啟用點擊彈出法條全文或手機底部抽屜（Bottom Sheet）。
4. **比喻必須貼合常識 (Relatable Metaphors)**：
   - 趣味日常比喻務求具體生動（如打靶、開車、餐廳、購物），讓非法律背景讀者也能心領神會。
