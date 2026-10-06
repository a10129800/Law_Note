// =========================================================================
// 《圖說刑法總則【圖說系列】知識庫閱覽器》核心控制器 (app.js)
// 遵循 AGENTS.md 行為憲法：Zero-CORS 本機秒開、資料驅動極簡路由、犬系導師交互
// =========================================================================

// 1. 深色模式切換
function toggleDarkMode() {
  const html = document.documentElement;
  const themeIcon = document.getElementById('themeIcon');
  const themeText = document.getElementById('themeText');
  if (html.classList.contains('dark')) {
    html.classList.remove('dark');
    if (themeIcon) themeIcon.textContent = '🌙';
    if (themeText) themeText.textContent = '深色模式';
  } else {
    html.classList.add('dark');
    if (themeIcon) themeIcon.textContent = '☀️';
    if (themeText) themeText.textContent = '淺色模式';
  }
}

// 2. 高清大圖燈箱彈窗
function openLightbox() {
  const modal = document.getElementById('lightboxModal');
  if (modal) modal.classList.remove('hidden');
}

function closeLightbox() {
  const modal = document.getElementById('lightboxModal');
  if (modal) modal.classList.add('hidden');
}

let currentView = 'cover';

// 3. 金句複製
function copyQuote() {
  let quote = "客觀壞事先確立（不法）➔ 常理先推定壞人（罪責）➔ 遇免責反證立撕標籤！";
  if (currentView === 'chapter2') {
    quote = "原則只抓故意既遂（分則藍本）➔ 例外擴張嚴守明文（未遂審著手・過失審預見）➔ 阻卻事由嚴禁自陷與濫用！";
  } else if (currentView === 'part0-ch1') {
    quote = "目的在保護法益 ➔ 手段要最後謙抑 ➔ 預防要罪刑法定 ➔ 應報要罪責相稱！";
  } else if (currentView === 'part0-ch1-sec1') {
    quote = "讀分則先定法益，解要件不偏不倚！個人超個人數量差，三大案例展奇功！";
  }
  if (navigator.clipboard) {
    navigator.clipboard.writeText(quote).then(() => {
      alert("✨ 已複製柴柴教授金句到剪貼簿：\n\n" + quote);
    });
  } else {
    alert("✨ 已複製柴柴教授金句到剪貼簿：\n\n" + quote);
  }
}

// 4. Markdown 筆記匯出
function exportMarkdown() {
  let mdContent = "";
  let fileName = "";
  if (currentView === 'part0-ch1-sec1') {
    fileName = "第零篇第一章第一節_2-1_2-4頁_法益保護原則筆記.md";
    mdContent = `# 第零篇 第一章 第一節 法益保護原則——何謂法益？（教材第 2-1 底 ～ 2-4 頁精華整理）

## 一、法益之核心法定定義
凡是**以法律手段而加以保護之重要生活利益**，即稱為**法益**。
法益源於社會倫理價值觀念，係**先於法律規範而存在**，並在法律制度發展後**確認保護**。

## 二、法益二元論之量相關說（通說）
- **個人法益**：生命、身體、自由、財產。
- **超個人法益**：社會法益（公共安全、公共信用、善良風俗）、國家法益（國家存立、公務公正性）。
★ **量相關說核心**：超個人法益與個人法益並非本質不同，只有「數量上的差別」。超個人法益乃個人法益的集合體，兩者保護方向一致而非對立（保護公共安全即保護多數人之個人生命）。

## 三、法益的三大功能
1. 刑法分則犯罪成立要件設立與體系化之基礎。
2. 競合類型之判準。
3. **作為構成要件解釋的指導原則（最主要功能！）**：構成要件該當性在表彰法益侵害，要件解釋必須緊扣所保護之法益，不能本末倒置。

## 四、三大經典爭點案例
1. **案例 1-1（剪髮案）**：
   - 生理機能障礙說（實務）：毛髮無痛覺能再生，不構成傷害。
   - 身體完整性侵害說（通說）：破壞身體外觀完整性，構成傷害。
2. **案例 1-2（黑吃黑竊皮夾案）**：
   - 所有權說：不保持有，不成立竊盜。
   - 持有說（甘添貴）：全面保護持有，成立竊盜。
   - 所有權及持有說（通說）：保護所有權及事實支配，違法持有亦受保護，成立竊盜。
3. **案例 1-3（肇事逃逸三大要件）**：
   - 隨保護法益（生命身體安全說 vs 公共安全說 vs 確認利益保障說）的不同，致人死傷、肇事、逃逸三要件之法律性質完全隨之變動！

> 📢 **柴柴教授金句**：讀分則先定法益，解要件不偏不倚！個人超個人數量差，三大案例展奇功！
`;
  } else if (currentView === 'part0-ch1') {
    fileName = "第零篇第一章_2-1頁_刑法的運作原理筆記.md";
    mdContent = `# 第零篇 第一章 刑法的運作原理（教材第 2-1 頁精華整理）

## 一、刑法的目的與起點
1. 應報思想（回顧過往）：對過往犯罪施加相稱制裁。
2. 預防思想（展望未來）：藉由法律威嚇與教化減少犯罪發生。
★ 唯一終極目標：保護「人類極為重要生活利益」➔ 簡稱【法益保護】。

## 二、刑罰手段之本質
- 刑罰是法律中最嚴厲之利刃（生命剝奪、自由喪失）。
- 比例原則與動用節制：施加必須與目的成正比，逼不得已才動用 ➔ 【最後手段性原則（謙抑性思想）】。

## 三、刑法的四大支柱（The Four Pillars）
① 法益保護原則（第一節）：刑法的存在目的。
② 最後手段性原則（互為光影）：手段的節制與謙抑性。
③ 罪刑法定原則（第二節）：基於預防思想，使人民安措其手足。
④ 罪責原則（第三節）：基於應報思想，小罪不能大罰、重罪重罰。

## 四、柴柴法學教授・白話名師客廳
1. **為什麼最後手段性是「大砲不能打小鳥」？**
   刑罰剝奪生命與自由，是原子彈級武器。民事道歉或賠償足以解決者，絕不動用刑罰。
2. **為什麼課本說「互為光影」？**
   最後手段性要求國家節制刑罰，必須靠【罪刑法定】（不隨意擴張）與【罪責原則】（小罪不大罰）具體落實。

> 📢 **柴柴教授金句**：目的在保護法益 ➔ 手段要最後謙抑 ➔ 預防要罪刑法定 ➔ 應報要罪責相稱！

—— 整理自陳奕廷律師《刑法總則【圖說系列】》
`;
  } else if (currentView === 'chapter2') {
    fileName = "導論第二章_1-13_1-16頁_刑法論罪結構筆記.md";
    mdContent = `# 導論・第二章 刑法的論罪結構（教材第 1-13 ～ 1-16 頁）

## 一、構成要件的本質與「故意＋既遂」處罰原則
構成要件是經驗累積的產物，能夠被編寫成犯罪構成要件之所作所為，必然都是最典型的不法，只要是身為人類都無法忍受的犯行（如英美法之謀殺、性侵、強盜等）。
以殺人罪為例，立法者設想之殺人係「出於殺人故意而殺死他人」，客觀（既遂）與主觀（故意）完全該當。「故意＋既遂」是立法者最想掌握的處罰原則。

## 二、例外擴張處罰與觀念辨正
若客觀未該當是「非既遂（≠ 未遂）」，主觀未該當是「非故意（≠ 過失）」。
非既遂與非故意原則上都不足以建構行為的可罰性，若要想例外地擴張處罰，除要有法律的明示處罰規定外，還必須滿足其他犯罪成立要件。

## 三、犯罪基本審查五階流程（教材第 1-16 頁 原書圖解）
1. 行為階層：確認為刑法意義之行為（排除非行為，如反射動作、絕對強制）。
2. 構成要件該當性 (TB)：原則審故意既遂，例外依法律明文審未遂 (§ 25) 或過失 (§ 12、§ 14)。
3. 違法性 (R)：實質不法審查，具備阻卻違法事由（法定 § 21~24、超法定承諾等）則阻卻；挑唆防衛或命令違法不予阻卻。
4. 罪責 (S)：個人非難性審查，具備阻卻罪責事由（責任能力 § 18、§ 19 Ⅰ、期待可能性）則阻卻；原因自由行為 (§ 19 Ⅲ) 排除免責。
5. 其他刑罰要件：客觀處罰條件、個人排除/解除刑罰事由。
結論：成立 ○○ 罪之故意既遂犯、未遂犯或過失犯。

## 四、實戰案例解析
- 案例 2-1（西瓜刀法與凌波微步）：未砍中人屬非既遂，因刑法 § 271 Ⅱ 明文處罰且已著手，例外擴張處罰未遂犯。
- 案例 2-2（練生疏西瓜刀法誤傷乙身亡）：無殺人故意屬非故意，因刑法 § 276 Ⅰ 明文處罰過失致死且能預見，例外擴張處罰過失犯。
- 案例 2-3（挑唆防衛雨傘案）：故意挑釁誘使他人動手再予反擊，屬權利濫用，排除正當防衛阻卻違法。
- 案例 2-4（借酒裝瘋行兇案）：清醒時具備犯意而故意灌醉自己行兇，依 § 19 Ⅲ 原因自由行為排除阻卻罪責免責。

> 📢 **柴柴教授金句**：原則只抓故意既遂（分則藍本）➔ 例外擴張嚴守明文（未遂審著手・過失審預見）➔ 阻卻事由嚴禁自陷與濫用！
`;
  } else {
    fileName = "導論第一章_1-1頁_犯罪概念筆記.md";
    mdContent = `# 導論・第一章 犯罪的概念（教材第 1-1 頁）

## 一、犯罪的概念：一個壞人做了一件壞事
刑法是一部處理犯罪的法律。至於何謂犯罪？簡單說，「一個壞人」做了一件「壞事」就是犯罪。經驗告訴我們判斷誰是壞人非常困難，但判斷一件壞事卻比較容易，因此我們決定先判斷「是否有一件壞事發生」，再判斷「做這件壞事的人是不是一個壞人」。

基於經驗的累積，會做壞事的人絕大多數（不是百分之百！）都是壞人，所以確定一件壞事的發生，就先「推定」做這件壞事的人是一個壞人，這就是「壞事推定壞人」原則。

有鑑於這只是一個經驗上的直覺假設，而人類經驗卻不完全可靠，使用推定這個法律概念，為我們保留反證推翻假設的機會。我們將壞事以「不法」代稱，壞人以「罪責」代稱，前述的推定模式就是「不法推定罪責」原則，而推翻罪責推定的理由稱為「阻卻罪責事由」。

---

## 二、不法推定罪責原則 架構圖解
- **源頭**：【犯罪】
- **雙軌分流評價**：
  - 客觀行為面：【壞事】 ➔ 【評價行為】 ➔ 【不法】
  - 主觀行為人面：【壞人】 ➔ 【評價行為人】 ➔ 【罪責】
- **核心動態**：
  - 【不法】向下垂直【推定】➔【罪責】
  - 【罪責】向右繞回逆向【反證】➔ 阻卻罪責事由

---

## 三、柴柴法學教授・名師白話客廳
1. **為什麼先抓壞事？** 砸破窗戶是客觀鐵證，壞事最容易認定，故審查排在第一步（不法）。
2. **為什麼推定是壞人？** 社會常情做壞事者八九成是壞蛋，故常理預設為壞人以利審判（罪責推定）。
3. **萬一被冤枉？** 若是為了救火救人砸窗，提出反證即可撕掉壞人標籤（阻卻罪責）。

> 📢 **柴柴教授金句**：客觀壞事先確立（不法）➔ 常理先推定壞人（罪責）➔ 遇免責反證立撕標籤！
`;
  }
  const blob = new Blob([mdContent], { type: 'text/markdown;charset=utf-8;' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = fileName;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

// 5. 字級調整系統
function setFontSize(size) {
  const html = document.documentElement;
  html.classList.remove('font-sz-sm', 'font-sz-md', 'font-sz-lg', 'font-sz-xl');
  html.classList.add('font-sz-' + size);
  
  const sizes = ['sm', 'md', 'lg', 'xl'];
  sizes.forEach(s => {
    const btn = document.getElementById('btnFont' + s.charAt(0).toUpperCase() + s.slice(1));
    if (btn) {
      if (s === size) {
        btn.className = "px-2 py-1 rounded-lg text-xs font-mono font-bold bg-blue-600 text-white shadow-xs transition-all";
      } else {
        btn.className = "px-2 py-1 rounded-lg text-xs font-mono font-medium text-slate-600 dark:text-slate-300 hover:bg-white dark:hover:bg-slate-700 transition-all";
      }
    }
  });
  try {
    localStorage.setItem('doc-font-size', size);
  } catch (e) {}
}

// 初始化字級：預設為 md（舒適 16.5px）
(function initFontSize() {
  try {
    const saved = localStorage.getItem('doc-font-size') || 'md';
    setFontSize(saved);
  } catch (e) {
    setFontSize('md');
  }
})();

// 6. 視圖切換器：資料驅動 (Data-Driven) 極簡路由
const VIEW_CONFIG = {
  'cover': {
    paneId: 'viewCover',
    tag: '圖說系列', sub: '書籍首頁',
    title: '📚 刑法總則【圖說系列】書籍規格與核心導讀',
    tab: '書籍主頁 | 刑法總則【圖說系列】研讀筆記'
  },
  'chapter1': {
    paneId: 'viewChapter1', tocId: 'tocNavChapter1',
    tag: '導論篇', sub: '第一章 內文',
    title: '📘 導論・第一章 犯罪的概念（教材第 1-1～1-11 頁）',
    tab: '第一章 犯罪的概念 | 刑法總則【圖說系列】'
  },
  'chapter2': {
    paneId: 'viewChapter2', tocId: 'tocNavChapter2',
    tag: '導論篇', sub: '第二章 內文',
    title: '📙 導論・第二章 刑法的論罪結構（教材第 1-13～1-16 頁）',
    tab: '第二章 刑法的論罪結構 | 刑法總則【圖說系列】'
  },
  'part0': {
    paneId: 'viewPart0',
    tag: '第零篇', sub: '本篇導讀',
    title: '⚖️ 第零篇 刑法的運作原理・本篇導讀（教材第 0-1 頁）',
    tab: '第零篇 刑法的運作原理 | 刑法總則【圖說系列】'
  },
  'part0-ch1': {
    paneId: 'viewPart0Chapter1',
    tag: '第零篇', sub: '第一章 內文',
    title: '⚖️ 第零篇・第一章 刑法的運作原理（教材第 2-1 頁精讀）',
    tab: '第一章 刑法的運作原理 | 刑法總則【圖說系列】'
  },
  'part0-ch1-sec1': {
    paneId: 'viewPart0Ch1Sec1', tocId: 'tocNavPart0Ch1Sec1',
    tag: '第零篇', sub: '第一節 內文',
    title: '🛡️ 第零篇・第一章 第一節 法益保護原則（教材第 2-1～2-4 頁）',
    tab: '第一節 法益保護原則 | 刑法總則【圖說系列】'
  }
};

const NAV_STYLE_MAP = {
  cover: {
    active: "bg-amber-100/90 dark:bg-amber-950/70 text-amber-900 dark:text-amber-200 border-amber-300 dark:border-amber-700/80 font-bold shadow-xs",
    inactive: "bg-amber-50/50 dark:bg-amber-950/30 hover:bg-amber-100/80 dark:hover:bg-amber-900/50 text-amber-800 dark:text-amber-300 border-amber-200/60 dark:border-amber-900/40 font-semibold"
  },
  blue: {
    active: "bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 border-blue-200/60 dark:border-blue-800/40 shadow-xs font-bold",
    inactive: "bg-slate-50 dark:bg-slate-800/60 hover:bg-blue-50 dark:hover:bg-blue-950/60 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 border-slate-200/60 dark:border-slate-800 hover:shadow-xs font-bold"
  },
  indigo: {
    active: "bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 border-indigo-200/60 dark:border-indigo-800/40 shadow-xs font-bold",
    inactive: "bg-slate-50 dark:bg-slate-800/60 hover:bg-indigo-50 dark:hover:bg-indigo-950/60 text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 border-slate-200/60 dark:border-slate-800 hover:shadow-xs font-bold"
  }
};

const NAV_BTN_REFS = [
  { key: 'cover', dt: 'navBtnCover', mb: 'mNavBtnCover', style: 'cover', base: 'w-full px-3 py-2 rounded-xl flex items-center justify-between transition-colors border group cursor-pointer' },
  { key: 'chapter1', dt: 'navBtnChapter1', mb: 'mNavBtnChapter1', style: 'blue', base: 'w-full px-3 py-2 rounded-xl flex items-center justify-between border transition-all text-left cursor-pointer' },
  { key: 'chapter2', dt: 'navBtnChapter2', mb: 'mNavBtnChapter2', style: 'indigo', base: 'w-full px-3 py-2 rounded-xl flex items-center justify-between border transition-all text-left cursor-pointer' },
  { key: 'part0', dt: 'navBtnPart0', mb: 'mNavBtnPart0', style: 'blue', base: 'w-full px-3 py-2 rounded-xl flex items-center justify-between border transition-all text-left cursor-pointer' },
  { key: 'part0-ch1', dt: 'navBtnPart0Ch1', mb: 'mNavBtnPart0Ch1', style: 'blue', base: 'w-full px-2.5 py-1.5 rounded-xl flex items-center justify-between border transition-all text-left cursor-pointer' },
  { key: 'part0-ch1-sec1', dt: 'navBtnPart0Ch1Sec1', mb: 'mNavBtnPart0Ch1Sec1', style: 'blue', base: 'w-full px-2.5 py-1.5 rounded-lg flex items-center justify-between border transition-all text-left text-xs cursor-pointer' }
];

function switchView(view) {
  currentView = view;
  const meta = VIEW_CONFIG[view] || VIEW_CONFIG.chapter1;

  // 1. 頂部 Meta 與標題列同步更新
  const hBadgeTag = document.getElementById('headerBadgeTag');
  const hBadgeSub = document.getElementById('headerBadgeSub');
  const hTitle = document.getElementById('headerMainTitle');
  if (hBadgeTag) hBadgeTag.textContent = meta.tag;
  if (hBadgeSub) hBadgeSub.textContent = meta.sub;
  if (hTitle) hTitle.textContent = meta.title;
  document.title = meta.tab;

  // 2. 視圖面板切換
  Object.entries(VIEW_CONFIG).forEach(([k, cfg]) => {
    const pane = document.getElementById(cfg.paneId);
    if (pane) pane.classList.toggle('hidden', k !== view);
  });

  // 3. 右側目錄 (Right TOC) 顯隱與主版面寬度響應式調整
  const hasToc = Boolean(meta.tocId);
  const rightToc = document.getElementById('rightTocAside');
  const mainContainer = document.getElementById('mainContainer');
  if (rightToc) {
    rightToc.classList.toggle('hidden', !hasToc);
    rightToc.classList.toggle('lg:block', hasToc);
  }
  if (mainContainer) {
    mainContainer.className = (hasToc ? "lg:col-span-6 xl:col-span-6" : "lg:col-span-9 xl:col-span-9") + " space-y-8 transition-all duration-300";
  }
  ['tocNavChapter1', 'tocNavChapter2', 'tocNavPart0Ch1Sec1'].forEach(id => {
    const tocEl = document.getElementById(id);
    if (tocEl) tocEl.classList.toggle('hidden', id !== meta.tocId);
  });

  // 4. 側邊欄按鈕（桌面版＋手機版）高亮更新
  NAV_BTN_REFS.forEach(btn => {
    const isActive = btn.key === view;
    const styleTokens = NAV_STYLE_MAP[btn.style];
    const stateClass = isActive ? styleTokens.active : styleTokens.inactive;
    const dtEl = document.getElementById(btn.dt);
    if (dtEl) dtEl.className = `${btn.base} ${stateClass}`;
    const mbEl = document.getElementById(btn.mb);
    if (mbEl) mbEl.className = `${btn.base} ${stateClass}`;
  });

  // 5. 特殊章節心智圖重繪
  if (view === 'part0-ch1-sec1') {
    setTimeout(redrawAllMindMaps, 100);
  }
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// 依據 URL Hash 初始化
window.addEventListener('DOMContentLoaded', () => {
  const hash = window.location.hash;
  if (hash && hash !== '#sec-book-cover') {
    if (hash === '#part0' || hash === '#part-0' || hash === '#viewPart0') {
      switchView('part0');
    } else if (hash === '#part0-ch1-sec1' || hash === '#viewPart0Ch1Sec1' || hash.startsWith('#sec-p0c1s1-')) {
      switchView('part0-ch1-sec1');
      if (hash.startsWith('#sec-p0c1s1-')) {
        setTimeout(() => {
          const el = document.querySelector(hash);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 150);
      }
    } else if (hash === '#part0-ch1' || hash === '#part0-chapter-1' || hash === '#viewPart0Chapter1' || hash.startsWith('#sec-p0c1-')) {
      switchView('part0-ch1');
      if (hash.startsWith('#sec-p0c1-')) {
        setTimeout(() => {
          const el = document.querySelector(hash);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 150);
      }
    } else if (hash.startsWith('#sec-c2-')) {
      switchView('chapter2');
      setTimeout(() => {
        const el = document.querySelector(hash);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 150);
    } else if (hash.startsWith('#sec-')) {
      switchView('chapter1');
      setTimeout(() => {
        const el = document.querySelector(hash);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 150);
    } else {
      switchView('cover');
    }
  } else {
    switchView('cover');
  }
});

// 第零篇第一章專用互動函式
function toggleOriginalTextPart0Ch1() {
  const card = document.getElementById('origTextCardPart0Ch1');
  const label = document.getElementById('origTextLabelP0C1');
  const icon = document.getElementById('origTextIconP0C1');
  if (!card) return;
  if (card.classList.contains('hidden')) {
    card.classList.remove('hidden');
    if (label) label.textContent = '收合原書對照文';
    if (icon) icon.textContent = '▲';
  } else {
    card.classList.add('hidden');
    if (label) label.textContent = '查看原書對照文';
    if (icon) icon.textContent = '📖';
  }
}

function copyPart0Ch1Notes() {
  const notes = `# 第零篇 第一章 刑法的運作原理（教材第 2-1 頁精華整理）

## 一、刑法的目的與起點
1. 應報思想（回顧過往）：對過往犯罪施加相稱制裁。
2. 預防思想（展望未來）：藉由法律威嚇與教化減少犯罪發生。
★ 唯一終極目標：保護「人類極為重要生活利益」➔ 簡稱【法益保護】。

## 二、刑罰手段之本質
- 刑罰是法律中最嚴厲之利刃（生命剝奪、自由喪失）。
- 比例原則與動用節制：施加必須與目的成正比，逼不得已才動用 ➔ 【最後手段性原則（謙抑性思想）】。

## 三、刑法的四大支柱（The Four Pillars）
① 法益保護原則（第一節）：刑法的存在目的。
② 最後手段性原則（互為光影）：手段的節制與謙抑性。
③ 罪刑法定原則（第二節）：基於預防思想，使人民安措其手足。
④ 罪責原則（第三節）：基於應報思想，小罪不能大罰、重罪重罰。

—— 整理自陳奕廷律師《刑法總則【圖說系列】》`;

  if (navigator.clipboard) {
    navigator.clipboard.writeText(notes).then(() => {
      showGlobalToast("已成功複製四大支柱精華筆記！");
    }).catch(() => {
      showGlobalToast("已複製筆記精華！");
    });
  } else {
    showGlobalToast("已複製筆記精華！");
  }
}

// 第零篇第一章第一節專用互動函式
function toggleOriginalTextPart0Ch1Sec1() {
  const card = document.getElementById('origTextCardPart0Ch1Sec1');
  const label = document.getElementById('origTextLabelP0C1S1');
  const icon = document.getElementById('origTextIconP0C1S1');
  if (!card) return;
  if (card.classList.contains('hidden')) {
    card.classList.remove('hidden');
    if (label) label.textContent = '收合原書對照文';
    if (icon) icon.textContent = '▲';
  } else {
    card.classList.add('hidden');
    if (label) label.textContent = '查看原書對照文';
    if (icon) icon.textContent = '📖';
  }
}

function copyPart0Ch1Sec1Notes() {
  const notes = `# 第零篇 第一章 第一節 法益保護原則——何謂法益？（教材第 2-1 底 ～ 2-4 頁精華整理）

## 一、法益之核心法定定義
凡是以法律手段而加以保護之重要生活利益，即稱為法益。
法益源於社會倫理價值觀念，係先於法律規範而存在，並在法律制度發展後確認保護。

## 二、法益二元論之量相關說（通說）
超個人法益與個人法益並非本質不同，只有數量上的差別。超個人法益乃個人法益的集合體，兩者保護方向一致而非對立（保護公共安全即保護多數人之個人生命）。

## 三、法益的三大功能
1. 刑法分則犯罪成立要件設立與體系化之基礎。
2. 競合類型之判準。
3. 作為構成要件解釋的指導原則（最主要功能！）。

## 四、三大經典爭點案例
1. 案例 1-1（剪髮案）：生理機能障礙說（實務）vs 身體完整性侵害說（通說）。
2. 案例 1-2（黑吃黑竊皮夾案）：所有權說 vs 甘添貴持有說 vs 所有權及持有說（通說）。
3. 案例 1-3（肇事逃逸三大要件）：隨保護法益不同，致人死傷、肇事、逃逸三要件性質完全連動變更！

—— 整理自陳奕廷律師《刑法總則【圖說系列】》`;

  if (navigator.clipboard) {
    navigator.clipboard.writeText(notes).then(() => {
      showGlobalToast("已成功複製第一節法益保護原則精華筆記！");
    }).catch(() => {
      showGlobalToast("已複製筆記精華！");
    });
  } else {
    showGlobalToast("已複製筆記精華！");
  }
}

function showGlobalToast(msg) {
  let toast = document.getElementById('toastNotification');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toastNotification';
    toast.className = 'fixed bottom-6 right-6 z-50 transform translate-y-20 opacity-0 transition-all duration-300 pointer-events-none';
    toast.innerHTML = '<div class="px-4 py-2 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-xs font-bold shadow-xl flex items-center gap-2"><span>✓</span><span id="toastMsg">' + msg + '</span></div>';
    document.body.appendChild(toast);
  }
  const toastMsg = document.getElementById('toastMsg');
  if (toastMsg) toastMsg.textContent = msg;
  toast.classList.remove('translate-y-20', 'opacity-0');
  toast.classList.add('translate-y-0', 'opacity-100');
  setTimeout(() => {
    toast.classList.remove('translate-y-0', 'opacity-100');
    toast.classList.add('translate-y-20', 'opacity-0');
  }, 2200);
}

// 7. 心智圖專用提示彈窗 (共用統一函式)
function showSection1Tip(index, title, desc) {
  const modal = document.getElementById('section1TipModal' + index);
  const titleEl = document.getElementById('section1TipTitle' + index);
  const descEl = document.getElementById('section1TipDesc' + index);
  if (!modal) return;
  if (titleEl) titleEl.innerHTML = '🐾 柴柴法學教授重點錦囊：' + title;
  if (descEl) descEl.textContent = desc;
  modal.classList.remove('hidden');
}

function closeSection1Tip(index) {
  const modal = document.getElementById('section1TipModal' + index);
  if (modal) modal.classList.add('hidden');
}

const showSection1Tip2 = (t, d) => showSection1Tip(2, t, d);
const closeSection1Tip2 = () => closeSection1Tip(2);
const showSection1Tip3 = (t, d) => showSection1Tip(3, t, d);
const closeSection1Tip3 = () => closeSection1Tip(3);

// 8. 通用貝茲曲線心智圖連線繪製器 (Zero-Jitter 原地自適應)
function renderMindMapSvg(svgId, wrapperId, rootId, links) {
  const svg = document.getElementById(svgId);
  const wrap = document.getElementById(wrapperId);
  if (!svg || !wrap) return;
  const wrapRect = wrap.getBoundingClientRect();
  svg.innerHTML = '';

  links.forEach(([fromId, toId]) => {
    const fromEl = document.getElementById(fromId);
    const toEl = document.getElementById(toId);
    if (!fromEl || !toEl) return;
    const f = fromEl.getBoundingClientRect();
    const t = toEl.getBoundingClientRect();

    const x1 = f.right - wrapRect.left;
    const y1 = f.top + f.height / 2 - wrapRect.top;
    const x2 = t.left - wrapRect.left;
    const y2 = t.top + t.height / 2 - wrapRect.top;
    const dx = Math.max(10, (x2 - x1) * 0.5);

    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('d', `M ${x1} ${y1} C ${x1 + dx} ${y1}, ${x2 - dx} ${y2}, ${x2} ${y2}`);
    path.setAttribute('class', 'mindmap-svg-path');
    if (fromId === rootId) path.style.strokeWidth = '2.2px';
    svg.appendChild(path);
  });
}

const MM_SEC1_2_LINKS = [
  ['mmSec1_2_Root', 'mmSec1_2_B1'], ['mmSec1_2_Root', 'mmSec1_2_B2'], ['mmSec1_2_Root', 'mmSec1_2_B3'],
  ['mmSec1_2_B1', 'mmSec1_2_B1_1'], ['mmSec1_2_B1', 'mmSec1_2_B1_2'], ['mmSec1_2_B1', 'mmSec1_2_B1_3'],
  ['mmSec1_2_B1_1', 'mmSec1_2_B1_1_box'], ['mmSec1_2_B1_2', 'mmSec1_2_B1_2_box'], ['mmSec1_2_B1_3', 'mmSec1_2_B1_3_box'],
  ['mmSec1_2_B2', 'mmSec1_2_B2_1'], ['mmSec1_2_B2', 'mmSec1_2_B2_2'], ['mmSec1_2_B2', 'mmSec1_2_B2_3'],
  ['mmSec1_2_B2_1', 'mmSec1_2_B2_1_box'], ['mmSec1_2_B2_2', 'mmSec1_2_B2_2_box'], ['mmSec1_2_B2_3', 'mmSec1_2_B2_3_box'],
  ['mmSec1_2_B3', 'mmSec1_2_B3_1'], ['mmSec1_2_B3', 'mmSec1_2_B3_2'], ['mmSec1_2_B3', 'mmSec1_2_B3_3'],
  ['mmSec1_2_B3_1', 'mmSec1_2_B3_1_box'], ['mmSec1_2_B3_2', 'mmSec1_2_B3_2_box'], ['mmSec1_2_B3_3', 'mmSec1_2_B3_3_box']
];

const MM_SEC1_3_LINKS = [
  ['mmSec1_3_Root', 'mmSec1_3_B1'], ['mmSec1_3_Root', 'mmSec1_3_B2'], ['mmSec1_3_Root', 'mmSec1_3_B3'],
  ['mmSec1_3_B1', 'mmSec1_3_B1_1'], ['mmSec1_3_B1', 'mmSec1_3_B1_2'], ['mmSec1_3_B1', 'mmSec1_3_B1_3'],
  ['mmSec1_3_B1_1', 'mmSec1_3_B1_1_box'], ['mmSec1_3_B1_2', 'mmSec1_3_B1_2_box'], ['mmSec1_3_B1_3', 'mmSec1_3_B1_3_box'],
  ['mmSec1_3_B2', 'mmSec1_3_B2_1'], ['mmSec1_3_B2', 'mmSec1_3_B2_2'], ['mmSec1_3_B2', 'mmSec1_3_B2_3'],
  ['mmSec1_3_B2_1', 'mmSec1_3_B2_1_box'], ['mmSec1_3_B2_2', 'mmSec1_3_B2_2_box'], ['mmSec1_3_B2_3', 'mmSec1_3_B2_3_box'],
  ['mmSec1_3_B3', 'mmSec1_3_B3_1'], ['mmSec1_3_B3', 'mmSec1_3_B3_2'], ['mmSec1_3_B3', 'mmSec1_3_B3_3'],
  ['mmSec1_3_B3_1', 'mmSec1_3_B3_1_box'], ['mmSec1_3_B3_2', 'mmSec1_3_B3_2_box'], ['mmSec1_3_B3_3', 'mmSec1_3_B3_3_box']
];

function drawSection1MindMap2() {
  renderMindMapSvg('mindmapSvgSec1_2', 'mindmapWrapperSec1_2', 'mmSec1_2_Root', MM_SEC1_2_LINKS);
}
function drawSection1MindMap3() {
  renderMindMapSvg('mindmapSvgSec1_3', 'mindmapWrapperSec1_3', 'mmSec1_3_Root', MM_SEC1_3_LINKS);
}

function redrawAllMindMaps() {
  drawSection1MindMap2();
  drawSection1MindMap3();
}

window.addEventListener('resize', redrawAllMindMaps);

// 9. 手機版抽屜導航控制
function openMobileNav() {
  const overlay = document.getElementById('mobileNavOverlay');
  if (overlay) {
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
}

function closeMobileNav() {
  const overlay = document.getElementById('mobileNavOverlay');
  if (overlay) {
    overlay.classList.remove('open');
    document.body.style.overflow = '';
  }
}

document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') closeMobileNav();
});
