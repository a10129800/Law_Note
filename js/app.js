// ===================================================
// 刑法總則【圖說系列】研讀筆記 - 核心控制器 (App Controller)
// ===================================================

// ==================== 0. 全域節點快取與樣式常數宣告 ====================
const ACTIVE_CLASS = ['bg-blue-50', 'dark:bg-blue-950/70', 'text-blue-800', 'dark:text-blue-300', 'font-semibold'];
const INACTIVE_CLASS = ['text-slate-600', 'dark:text-slate-400', 'font-medium'];

let viewHome = null;
let viewIntro = null;
let viewChapter1 = null;
let viewChapter2 = null;
let viewPart0 = null;
let viewPart0Chapter1 = null;
let viewPart0Ch1Sec1 = null;
let viewPart0Ch1Sec2 = null;
let viewPart0Ch1Sec3 = null;
let viewPart0Chapter2 = null;
let viewPart0Ch2Sec1 = null;
let viewPart0Ch2Sec2 = null;
let viewPart0Chapter3 = null;
let viewPart0Ch3Sec1 = null;
let viewPart0Ch3Sec2 = null;
let viewPart0Ch3Sec3 = null;
let viewPart0Ch3Sec4 = null;

let rightTocAside = null;
let currentChapterBadge = null;

let navBtnHome = null;
let navDotHome = null;
let navBtnIntro = null;
let navBtnChapter1 = null;
let navBtnChapter2 = null;
let navBtnPart0 = null;
let navBtnPart0Intro = null;
let navBtnPart0Ch1 = null;
let navBtnPart0Ch1Sec1 = null;
let navBtnPart0Ch1Sec2 = null;
let navBtnPart0Ch1Sec3 = null;
let navBtnPart0Ch2 = null;
let navBtnPart0Ch2Sec1 = null;
let navBtnPart0Ch2Sec2 = null;
let navBtnPart0Ch3 = null;
let navBtnPart0Ch3Sec1 = null;
let navBtnPart0Ch3Sec2 = null;
let navBtnPart0Ch3Sec3 = null;
let navBtnPart0Ch3Sec4 = null;

function refreshViewElements() {
  viewHome = document.getElementById('viewHome');
  viewIntro = document.getElementById('viewIntro');
  viewChapter1 = document.getElementById('viewChapter1');
  viewChapter2 = document.getElementById('viewChapter2');
  viewPart0 = document.getElementById('viewPart0');
  viewPart0Chapter1 = document.getElementById('viewPart0Chapter1');
  viewPart0Ch1Sec1 = document.getElementById('viewPart0Ch1Sec1');
  viewPart0Ch1Sec2 = document.getElementById('viewPart0Ch1Sec2');
  viewPart0Ch1Sec3 = document.getElementById('viewPart0Ch1Sec3');
  viewPart0Chapter2 = document.getElementById('viewPart0Chapter2');
  viewPart0Ch2Sec1 = document.getElementById('viewPart0Ch2Sec1');
  viewPart0Ch2Sec2 = document.getElementById('viewPart0Ch2Sec2');
  viewPart0Chapter3 = document.getElementById('viewPart0Chapter3');
  viewPart0Ch3Sec1 = document.getElementById('viewPart0Ch3Sec1');
  viewPart0Ch3Sec2 = document.getElementById('viewPart0Ch3Sec2');
  viewPart0Ch3Sec3 = document.getElementById('viewPart0Ch3Sec3');
  viewPart0Ch3Sec4 = document.getElementById('viewPart0Ch3Sec4');

  rightTocAside = document.getElementById('rightTocAside');
  currentChapterBadge = document.getElementById('currentChapterBadge');

  navBtnHome = document.getElementById('navBtnHome');
  navDotHome = document.getElementById('navDotHome');
  navBtnIntro = document.getElementById('navBtnIntro');
  navBtnChapter1 = document.getElementById('navBtnChapter1');
  navBtnChapter2 = document.getElementById('navBtnChapter2');
  navBtnPart0 = document.getElementById('navBtnPart0');
  navBtnPart0Intro = document.getElementById('navBtnPart0Intro');
  navBtnPart0Ch1 = document.getElementById('navBtnPart0Ch1');
  navBtnPart0Ch1Sec1 = document.getElementById('navBtnPart0Ch1Sec1');
  navBtnPart0Ch1Sec2 = document.getElementById('navBtnPart0Ch1Sec2');
  navBtnPart0Ch1Sec3 = document.getElementById('navBtnPart0Ch1Sec3');
  navBtnPart0Ch2 = document.getElementById('navBtnPart0Ch2');
  navBtnPart0Ch2Sec1 = document.getElementById('navBtnPart0Ch2Sec1');
  navBtnPart0Ch2Sec2 = document.getElementById('navBtnPart0Ch2Sec2');
  navBtnPart0Ch3 = document.getElementById('navBtnPart0Ch3');
  navBtnPart0Ch3Sec1 = document.getElementById('navBtnPart0Ch3Sec1');
  navBtnPart0Ch3Sec2 = document.getElementById('navBtnPart0Ch3Sec2');
  navBtnPart0Ch3Sec3 = document.getElementById('navBtnPart0Ch3Sec3');
  navBtnPart0Ch3Sec4 = document.getElementById('navBtnPart0Ch3Sec4');
}

// ==================== 0.1 視圖掛載系統 (Mount Views System) ====================
function mountAllViews() {
  try {
    const container = document.getElementById('mainContentContainer');
    if (!container || !window.APP_VIEWS) return;

    const orderedViews = [
      window.APP_VIEWS.viewHome || window.APP_VIEWS.home,
      window.APP_VIEWS.viewIntro || window.APP_VIEWS.intro,
      window.APP_VIEWS.viewChapter1 || window.APP_VIEWS.chapter1,
      window.APP_VIEWS.viewChapter2 || window.APP_VIEWS.chapter2,
      window.APP_VIEWS.viewPart0 || window.APP_VIEWS.part0,
      window.APP_VIEWS.viewPart0Chapter1 || window.APP_VIEWS.viewPart0Ch1 || window.APP_VIEWS.part0Chapter1 || window.APP_VIEWS.part0Ch1,
      window.APP_VIEWS.viewPart0Ch1Sec1 || window.APP_VIEWS.part0Ch1Sec1,
      window.APP_VIEWS.viewPart0Ch1Sec2 || window.APP_VIEWS.part0Ch1Sec2,
      window.APP_VIEWS.viewPart0Ch1Sec3 || window.APP_VIEWS.part0Ch1Sec3,
      window.APP_VIEWS.viewPart0Chapter2 || window.APP_VIEWS.viewPart0Ch2 || window.APP_VIEWS.part0Chapter2 || window.APP_VIEWS['part0-chapter-2'],
      window.APP_VIEWS.viewPart0Ch2Sec1 || window.APP_VIEWS.part0Ch2Sec1 || window.APP_VIEWS['part0-ch2-sec1'],
      window.APP_VIEWS.viewPart0Ch2Sec2 || window.APP_VIEWS.part0Ch2Sec2 || window.APP_VIEWS['part0-ch2-sec2'],
      window.APP_VIEWS.viewPart0Chapter3 || window.APP_VIEWS.viewPart0Ch3 || window.APP_VIEWS.part0Chapter3 || window.APP_VIEWS['part0-chapter-3'],
      window.APP_VIEWS.viewPart0Ch3Sec1 || window.APP_VIEWS.part0Ch3Sec1 || window.APP_VIEWS['part0-ch3-sec1'],
      window.APP_VIEWS.viewPart0Ch3Sec2 || window.APP_VIEWS.part0Ch3Sec2 || window.APP_VIEWS['part0-ch3-sec2'],
      window.APP_VIEWS.viewPart0Ch3Sec3 || window.APP_VIEWS.part0Ch3Sec3 || window.APP_VIEWS['part0-ch3-sec3'],
      window.APP_VIEWS.viewPart0Ch3Sec4 || window.APP_VIEWS.part0Ch3Sec4 || window.APP_VIEWS['part0-ch3-sec4']
    ];

    const views = [];
    const addedHtmls = new Set();

    orderedViews.forEach(html => {
      if (html && typeof html === 'string') {
        views.push(html);
        addedHtmls.add(html);
      }
    });

    // 保底：若有任何其他視圖字串，也自動掛載
    Object.keys(window.APP_VIEWS).forEach(k => {
      const html = window.APP_VIEWS[k];
      if (html && typeof html === 'string' && !addedHtmls.has(html)) {
        views.push(html);
        addedHtmls.add(html);
      }
    });

    container.innerHTML = views.filter(Boolean).join('\n');
    refreshViewElements();
  } catch (err) {
    console.error('mountAllViews error:', err);
  }
}

// 立即同步掛載所有視圖並綁定節點
mountAllViews();
refreshViewElements();

// 引用外部抽取之資料常數
const TOC_CONFIG = window.TOC_CONFIG || {};
const SEARCH_DATABASE = window.SEARCH_DATABASE || [];
const STATUTE_POPUP_DB = window.STATUTE_POPUP_DB || {};
const CASE_NOTES_DATABASE = window.CASE_NOTES_DATABASE || {};

// ==================== 1. 深淺閱讀模式切換系統 (Light / Dark) ====================
const THEMES = ['light', 'dark'];
let currentTheme = localStorage.getItem('theme') || 'light';
if (currentTheme !== 'dark') currentTheme = 'light';

function applyTheme(theme, saveToStorage = true) {
  currentTheme = (theme === 'dark') ? 'dark' : 'light';
  document.documentElement.classList.remove('sepia');

  if (currentTheme === 'dark') {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }

  // 更新 Header 圖示與文字標籤
  const headerIcon = document.getElementById('themeHeaderIcon');
  const headerLabel = document.getElementById('themeHeaderLabel');
  if (headerIcon) headerIcon.textContent = currentTheme === 'dark' ? '🌙' : '☀️';
  if (headerLabel) headerLabel.textContent = currentTheme === 'dark' ? '暗夜' : '明亮';

  // 更新 Popover 按鈕高亮
  const btnLight = document.getElementById('themeBtn-light');
  const btnDark = document.getElementById('themeBtn-dark');
  const activeClass = 'bg-blue-600 text-white font-bold shadow-xs';
  const inactiveClass = 'text-slate-600 dark:text-slate-300 hover:text-blue-600';

  if (btnLight) {
    btnLight.className = `py-1.5 rounded-lg transition-all flex items-center justify-center gap-1.5 ${currentTheme === 'light' ? activeClass : inactiveClass}`;
  }
  if (btnDark) {
    btnDark.className = `py-1.5 rounded-lg transition-all flex items-center justify-center gap-1.5 ${currentTheme === 'dark' ? activeClass : inactiveClass}`;
  }

  if (saveToStorage) {
    localStorage.setItem('theme', currentTheme);
  }
}

function toggleTheme() {
  applyTheme(currentTheme === 'dark' ? 'light' : 'dark');
}

function cycleTheme() {
  toggleTheme();
}

function setTheme(theme) {
  applyTheme(theme);
}

// ==================== 1.2 正文行距呼吸感控制 (Line Height) ====================
const LINE_HEIGHT_CONFIG = {
  'compact': { height: 1.68, spacing: '1.05em', label: '緊湊 (1.68)' },
  'comfortable': { height: 1.88, spacing: '1.35em', label: '舒適 (1.88)' },
  'spacious': { height: 2.10, spacing: '1.60em', label: '寬鬆 (2.10)' }
};

let currentLineHeight = localStorage.getItem('reader-line-height') || 'comfortable';
if (!LINE_HEIGHT_CONFIG[currentLineHeight]) currentLineHeight = 'comfortable';

function applyLineHeight(key, saveToStorage = true) {
  const config = LINE_HEIGHT_CONFIG[key] || LINE_HEIGHT_CONFIG['comfortable'];
  currentLineHeight = key;

  document.documentElement.style.setProperty('--reader-line-height', config.height.toString());
  document.documentElement.style.setProperty('--reader-para-spacing', config.spacing);

  const label = document.getElementById('lineHeightLabel');
  if (label) label.textContent = config.label;

  ['compact', 'comfortable', 'spacious'].forEach(k => {
    const btn = document.getElementById(`lineHeightBtn-${k}`);
    const activeClass = 'bg-white dark:bg-slate-700 text-blue-600 dark:text-blue-400 font-bold shadow-xs';
    const inactiveClass = 'text-slate-600 dark:text-slate-300 hover:text-blue-600';

    if (btn) btn.className = `py-1.5 rounded-lg transition-all ${k === key ? activeClass : inactiveClass}`;
  });

  if (saveToStorage) {
    localStorage.setItem('reader-line-height', key);
  }
}

function setLineHeightPreset(key) {
  applyLineHeight(key);
}

function resetReaderPreferences() {
  applyFontScale(100);
  applyTheme('light');
  applyLineHeight('comfortable');
}

// ==================== 1.5 閱讀器字級等比調整邏輯 (Aa Popover) ====================
const FONT_PRESETS = {
  'sm': 90,
  'md': 100,
  'lg': 112,
  'xl': 125
};

let currentFontScale = parseInt(localStorage.getItem('reader-font-scale'), 10) || 100;

function applyFontScale(scale, saveToStorage = true) {
  scale = Math.max(80, Math.min(140, Math.round(scale)));
  currentFontScale = scale;

  document.documentElement.style.setProperty('--reader-scale', (scale / 100).toString());

  const badge = document.getElementById('fontScaleBadge');
  const indicator = document.getElementById('fontScaleIndicator');
  if (badge) badge.textContent = `${scale}%`;
  if (indicator) indicator.textContent = `${scale}%`;

  const keys = ['sm', 'md', 'lg', 'xl'];
  keys.forEach(k => {
    const btn = document.getElementById(`fontPresetBtn-${k}`);
    if (btn) {
      if (FONT_PRESETS[k] === scale) {
        btn.className = 'py-1.5 rounded-lg transition-all bg-white dark:bg-slate-700 text-blue-600 dark:text-blue-400 font-bold shadow-xs';
      } else {
        btn.className = 'py-1.5 rounded-lg transition-all text-slate-600 dark:text-slate-300 hover:text-blue-600';
      }
    }
  });

  if (saveToStorage) {
    localStorage.setItem('reader-font-scale', scale);
  }
}

function setFontScalePreset(presetKey) {
  if (FONT_PRESETS[presetKey]) {
    applyFontScale(FONT_PRESETS[presetKey]);
  }
}

function adjustFontSize(deltaPercent) {
  applyFontScale(currentFontScale + deltaPercent);
}

function resetFontSize() {
  applyFontScale(100);
}

function toggleFontMenu(e) {
  if (e) e.stopPropagation();
  const menu = document.getElementById('fontSettingsMenu');
  const btn = document.getElementById('fontSettingsBtn');
  if (!menu) return;
  const isHidden = menu.classList.contains('hidden');
  if (isHidden) {
    menu.classList.remove('hidden');
    if (btn) btn.setAttribute('aria-expanded', 'true');
  } else {
    menu.classList.add('hidden');
    if (btn) btn.setAttribute('aria-expanded', 'false');
  }
}

document.addEventListener('click', (e) => {
  const container = document.getElementById('fontSettingsContainer');
  const menu = document.getElementById('fontSettingsMenu');
  const btn = document.getElementById('fontSettingsBtn');
  if (container && menu && !container.contains(e.target)) {
    menu.classList.add('hidden');
    if (btn) btn.setAttribute('aria-expanded', 'false');
  }
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    const menu = document.getElementById('fontSettingsMenu');
    const btn = document.getElementById('fontSettingsBtn');
    if (menu && !menu.classList.contains('hidden')) {
      menu.classList.add('hidden');
      if (btn) btn.setAttribute('aria-expanded', 'false');
    }
  }
});

// 初始化閱讀偏好
applyFontScale(currentFontScale, false);
applyTheme(currentTheme, false);
applyLineHeight(currentLineHeight, false);

// ==================== 2. 行動端控制 (Mobile Controls) ====================
function toggleMobileDrawer() {
  const drawer = document.getElementById('mobileDrawer');
  if (drawer) drawer.classList.toggle('hidden');
}

function toggleMobileTocModal() {
  const modal = document.getElementById('mobileTocModal');
  if (modal) modal.classList.toggle('hidden');
}

// ==================== 3. 視圖元素與導航節點獲取 (已於頂部宣告並由 refreshViewElements() 統一綁定) ====================

function clearNavStyles() {
  if (navBtnChapter1) {
    navBtnChapter1.classList.remove(...ACTIVE_CLASS);
    navBtnChapter1.classList.add(...INACTIVE_CLASS);
  }
  if (navBtnChapter2) {
    navBtnChapter2.classList.remove(...ACTIVE_CLASS);
    navBtnChapter2.classList.add(...INACTIVE_CLASS);
  }
  if (navBtnPart0) {
    navBtnPart0.classList.remove(...ACTIVE_CLASS);
    navBtnPart0.classList.add(...INACTIVE_CLASS);
  }
  if (navBtnPart0Intro) {
    navBtnPart0Intro.classList.remove(...ACTIVE_CLASS);
    navBtnPart0Intro.classList.add(...INACTIVE_CLASS);
  }
  if (navBtnPart0Ch1) {
    navBtnPart0Ch1.classList.remove(...ACTIVE_CLASS);
    navBtnPart0Ch1.classList.add(...INACTIVE_CLASS);
  }
  if (navBtnPart0Ch1Sec1) {
    navBtnPart0Ch1Sec1.classList.remove(...ACTIVE_CLASS);
    navBtnPart0Ch1Sec1.classList.add(...INACTIVE_CLASS);
  }
  if (navBtnPart0Ch1Sec2) {
    navBtnPart0Ch1Sec2.classList.remove(...ACTIVE_CLASS);
    navBtnPart0Ch1Sec2.classList.add(...INACTIVE_CLASS);
  }
  if (navBtnPart0Ch1Sec3) {
    navBtnPart0Ch1Sec3.classList.remove(...ACTIVE_CLASS);
    navBtnPart0Ch1Sec3.classList.add(...INACTIVE_CLASS);
  }
  if (navBtnPart0Ch2) {
    navBtnPart0Ch2.classList.remove(...ACTIVE_CLASS);
    navBtnPart0Ch2.classList.add(...INACTIVE_CLASS);
  }
  if (navBtnPart0Ch2Sec1) {
    navBtnPart0Ch2Sec1.classList.remove(...ACTIVE_CLASS);
    navBtnPart0Ch2Sec1.classList.add(...INACTIVE_CLASS);
  }
  if (navBtnPart0Ch2Sec2) {
    navBtnPart0Ch2Sec2.classList.remove(...ACTIVE_CLASS);
    navBtnPart0Ch2Sec2.classList.add(...INACTIVE_CLASS);
  }
  if (navBtnPart0Ch3) {
    navBtnPart0Ch3.classList.remove(...ACTIVE_CLASS);
    navBtnPart0Ch3.classList.add(...INACTIVE_CLASS);
  }
  if (navBtnPart0Ch3Sec1) {
    navBtnPart0Ch3Sec1.classList.remove(...ACTIVE_CLASS);
    navBtnPart0Ch3Sec1.classList.add(...INACTIVE_CLASS);
  }
  if (navBtnPart0Ch3Sec2) {
    navBtnPart0Ch3Sec2.classList.remove(...ACTIVE_CLASS);
    navBtnPart0Ch3Sec2.classList.add(...INACTIVE_CLASS);
  }
  if (navBtnPart0Ch3Sec3) {
    navBtnPart0Ch3Sec3.classList.remove(...ACTIVE_CLASS);
    navBtnPart0Ch3Sec3.classList.add(...INACTIVE_CLASS);
  }
  if (navBtnPart0Ch3Sec4) {
    navBtnPart0Ch3Sec4.classList.remove(...ACTIVE_CLASS);
    navBtnPart0Ch3Sec4.classList.add(...INACTIVE_CLASS);
  }
  if (navBtnHome) {
    navBtnHome.classList.remove(...ACTIVE_CLASS);
    navBtnHome.classList.add(...INACTIVE_CLASS);
  }
  if (navDotHome) {
    navDotHome.classList.replace('bg-blue-600', 'bg-transparent');
    navDotHome.classList.replace('bg-blue-500', 'bg-transparent');
  }
  if (navBtnIntro) {
    navBtnIntro.classList.remove('text-blue-800', 'dark:text-blue-300', 'text-blue-600', 'dark:text-blue-400');
  }
}

// ==================== 4. TOC 渲染邏輯 (多欄位Note Skill 規範) ====================
function renderToc(viewName) {
  const config = TOC_CONFIG[viewName] || TOC_CONFIG['chapter-1'];
  const tocNav = document.getElementById('tocNav');
  const tocChapterBadge = document.getElementById('tocChapterBadge');
  const tocTitle = document.getElementById('tocTitle');

  if (tocChapterBadge) tocChapterBadge.textContent = config.badge;
  if (tocTitle) tocTitle.textContent = config.title;

  if (tocNav && config.items) {
    tocNav.innerHTML = config.items.map(item => {
      if (item.action) {
        return `<button onclick="${item.action}" class="toc-link block w-full text-left py-1.5 pl-3 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-100/60 dark:hover:bg-slate-800/40 rounded-r-lg transition-all text-xs font-medium">${item.label}</button>`;
      }
      if (item.id) {
        return `<a href="#${item.id}" onclick="scrollToSection(event, '${item.id}')" class="toc-link block py-1.5 pl-3 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-100/60 dark:hover:bg-slate-800/40 rounded-r-lg transition-all text-xs font-medium">${item.label}</a>`;
      }
      return `<span class="block py-1.5 pl-3 text-slate-400 text-xs italic">${item.label}</span>`;
    }).join('');
  }

  // 同步更新手機彈窗 TOC
  const mobileNav = document.querySelector('#mobileTocModal nav');
  if (mobileNav && config.items) {
    mobileNav.innerHTML = config.items.map(item => {
      if (item.action) {
        return `<button onclick="${item.action}; toggleMobileTocModal();" class="block w-full text-left py-1.5 text-slate-700 dark:text-slate-300 font-medium">${item.label}</button>`;
      }
      if (item.id) {
        return `<a href="#${item.id}" onclick="scrollToSection(event, '${item.id}'); toggleMobileTocModal();" class="block py-1.5 text-slate-700 dark:text-slate-300 font-medium">${item.label}</a>`;
      }
      return `<span class="block py-1.5 text-slate-400 italic">${item.label}</span>`;
    }).join('');
  }
}

function setRightTocVisibility(shouldShow) {
  if (!rightTocAside) return;
  const isDesktopLayout = window.matchMedia('(min-width: 1241px)').matches;
  const isCollapsed = document.body.classList.contains('toc-collapsed');
  const visible = shouldShow && isDesktopLayout && !isCollapsed;
  rightTocAside.style.setProperty('display', visible ? 'block' : 'none', 'important');

  const restoreBtn = document.getElementById('floatingTocRestoreBtn');
  if (restoreBtn) {
    if (shouldShow && isCollapsed && isDesktopLayout) {
      restoreBtn.classList.remove('hidden');
    } else {
      restoreBtn.classList.add('hidden');
    }
  }
}

/**
 * 切換/收合右側章節清單，釋放最大閱讀空間
 */
function toggleRightToc(show) {
  const isCurrentlyCollapsed = document.body.classList.contains('toc-collapsed');
  const shouldShow = typeof show === 'boolean' ? show : isCurrentlyCollapsed;
  const restoreBtn = document.getElementById('floatingTocRestoreBtn');

  if (shouldShow) {
    document.body.classList.remove('toc-collapsed');
    if (restoreBtn) restoreBtn.classList.add('hidden');
    setRightTocVisibility(true);
  } else {
    document.body.classList.add('toc-collapsed');
    if (restoreBtn) restoreBtn.classList.remove('hidden');
    if (rightTocAside) rightTocAside.style.setProperty('display', 'none', 'important');
  }
}
window.toggleRightToc = toggleRightToc;

/**
 * 智慧章節摺疊樹狀管理 (Intelligent Subtree Folding)
 * 自動展開當前閱讀的章節小節，其餘章節優雅收合，徹底解除左欄擁擠感
 */
function updateSidebarSubtrees(viewName) {
  const ch1Tree = document.getElementById('part0Ch1SubTree');
  const ch2Tree = document.getElementById('part0Ch2SubTree');
  const ch3Tree = document.getElementById('part0Ch3SubTree');
  const chev1 = document.getElementById('chevron-part0Ch1');
  const chev2 = document.getElementById('chevron-part0Ch2');
  const chev3 = document.getElementById('chevron-part0Ch3');

  if (!ch1Tree || !ch2Tree || !ch3Tree) return;

  const isCh1 = viewName.startsWith('part0-ch1') || viewName === 'part0-chapter-1';
  const isCh2 = viewName.startsWith('part0-ch2') || viewName === 'part0-chapter-2';
  const isCh3 = viewName.startsWith('part0-ch3') || viewName === 'part0-chapter-3';

  if (isCh1) {
    ch1Tree.classList.remove('hidden');
    ch2Tree.classList.add('hidden');
    ch3Tree.classList.add('hidden');
    if (chev1) chev1.textContent = '▼';
    if (chev2) chev2.textContent = '▶';
    if (chev3) chev3.textContent = '▶';
  } else if (isCh2) {
    ch1Tree.classList.add('hidden');
    ch2Tree.classList.remove('hidden');
    ch3Tree.classList.add('hidden');
    if (chev1) chev1.textContent = '▶';
    if (chev2) chev2.textContent = '▼';
    if (chev3) chev3.textContent = '▶';
  } else if (isCh3) {
    ch1Tree.classList.add('hidden');
    ch2Tree.classList.add('hidden');
    ch3Tree.classList.remove('hidden');
    if (chev1) chev1.textContent = '▶';
    if (chev2) chev2.textContent = '▶';
    if (chev3) chev3.textContent = '▼';
  } else if (viewName === 'part-0') {
    ch1Tree.classList.remove('hidden');
    ch2Tree.classList.add('hidden');
    ch3Tree.classList.add('hidden');
    if (chev1) chev1.textContent = '▼';
    if (chev2) chev2.textContent = '▶';
    if (chev3) chev3.textContent = '▶';
  }
}

/**
 * 手動展開/收合章節樹
 */
function toggleSubTree(treeId, event) {
  if (event) {
    event.stopPropagation();
    event.preventDefault();
  }
  const tree = document.getElementById(treeId);
  if (!tree) return;
  const isHidden = tree.classList.toggle('hidden');
  const chevronId = treeId === 'part0Ch1SubTree' ? 'chevron-part0Ch1' : 
                    treeId === 'part0Ch2SubTree' ? 'chevron-part0Ch2' : 
                    treeId === 'part0Ch3SubTree' ? 'chevron-part0Ch3' : null;
  if (chevronId) {
    const chev = document.getElementById(chevronId);
    if (chev) chev.textContent = isHidden ? '▶' : '▼';
  }
}
window.toggleSubTree = toggleSubTree;

// ==================== 5. 視圖切換系統 (View Switcher) ====================
function switchView(viewName, shouldScrollTop = true) {
  if (!viewHome || !document.getElementById('viewHome')) {
    const container = document.getElementById('mainContentContainer');
    if (container && container.children.length === 0) {
      mountAllViews();
    }
  }
  refreshViewElements();
  clearNavStyles();
  updateSidebarSubtrees(viewName);

  const allViews = [
    viewHome, viewIntro, viewChapter1, viewChapter2, 
    viewPart0, viewPart0Chapter1, viewPart0Ch1Sec1, viewPart0Ch1Sec2, viewPart0Ch1Sec3,
    viewPart0Chapter2, viewPart0Ch2Sec1, viewPart0Ch2Sec2, viewPart0Chapter3, 
    viewPart0Ch3Sec1, viewPart0Ch3Sec2, viewPart0Ch3Sec3, viewPart0Ch3Sec4
  ];

  // 隱藏全部
  allViews.forEach(v => {
    if (v) v.classList.add('hidden');
  });

  if (viewName === 'home') {
    if (viewHome) viewHome.classList.remove('hidden');
    document.body.classList.remove('in-chapter', 'in-chapter-1', 'intro-active');
    document.body.classList.add('in-home');

    setRightTocVisibility(false);

    if (navBtnHome) {
      navBtnHome.classList.remove(...INACTIVE_CLASS);
      navBtnHome.classList.add(...ACTIVE_CLASS);
    }
    if (navDotHome) {
      navDotHome.classList.replace('bg-transparent', 'bg-blue-600');
    }

    if (currentChapterBadge) currentChapterBadge.textContent = '書籍主頁';
    document.title = '刑法總則【圖說系列】研讀筆記 | 書籍主頁';
    renderToc('home');

    if (shouldScrollTop) window.scrollTo({ top: 0, behavior: 'smooth' });
    if (window.history && window.history.replaceState) history.replaceState(null, '', '#home');

  } else if (viewName === 'chapter-1') {
    if (viewChapter1) viewChapter1.classList.remove('hidden');
    document.body.classList.remove('intro-active', 'in-home');
    document.body.classList.add('in-chapter', 'in-chapter-1');

    setRightTocVisibility(true);

    if (navBtnChapter1) {
      navBtnChapter1.classList.remove(...INACTIVE_CLASS);
      navBtnChapter1.classList.add(...ACTIVE_CLASS);
    }

    if (currentChapterBadge) currentChapterBadge.textContent = '第一章';
    document.title = '第一章 犯罪的概念 | 刑法總則研讀筆記';
    renderToc('chapter-1');

    if (shouldScrollTop) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      if (window.history && window.history.replaceState) history.replaceState(null, '', '#chapter-1');
    }

  } else if (viewName === 'chapter-2') {
    if (viewChapter2) viewChapter2.classList.remove('hidden');
    document.body.classList.remove('in-chapter-1', 'intro-active', 'in-home');
    document.body.classList.add('in-chapter');

    setRightTocVisibility(true);

    if (navBtnChapter2) {
      navBtnChapter2.classList.remove(...INACTIVE_CLASS);
      navBtnChapter2.classList.add(...ACTIVE_CLASS);
    }

    if (currentChapterBadge) currentChapterBadge.textContent = '第二章';
    document.title = '第二章 刑法的論罪結構 | 刑法總則研讀筆記';
    renderToc('chapter-2');

    if (shouldScrollTop) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      if (window.history && window.history.replaceState) history.replaceState(null, '', '#chapter-2');
    }

  } else if (viewName === 'part-0') {
    if (viewPart0) viewPart0.classList.remove('hidden');
    document.body.classList.remove('in-chapter', 'in-chapter-1', 'intro-active', 'in-home');

    setRightTocVisibility(false);

    if (navBtnPart0) navBtnPart0.classList.add('text-blue-600', 'dark:text-blue-400');
    if (navBtnPart0Intro) {
      navBtnPart0Intro.classList.remove(...INACTIVE_CLASS);
      navBtnPart0Intro.classList.add(...ACTIVE_CLASS);
    }

    if (currentChapterBadge) currentChapterBadge.textContent = '第零篇';
    document.title = '第零篇 刑法的運作、操作原理與法律效果 | 刑法總則研讀筆記';
    renderToc('part-0');

    if (shouldScrollTop) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      if (window.history && window.history.replaceState) history.replaceState(null, '', '#part-0');
    }

  } else if (viewName === 'part0-chapter-1') {
    if (viewPart0Chapter1) viewPart0Chapter1.classList.remove('hidden');
    document.body.classList.remove('in-chapter-1', 'intro-active', 'in-home');
    document.body.classList.add('in-chapter');

    setRightTocVisibility(true);

    if (navBtnPart0) navBtnPart0.classList.add('text-blue-600', 'dark:text-blue-400');
    if (navBtnPart0Ch1) {
      navBtnPart0Ch1.classList.remove(...INACTIVE_CLASS);
      navBtnPart0Ch1.classList.add(...ACTIVE_CLASS);
    }

    if (currentChapterBadge) currentChapterBadge.textContent = '第零篇 第一章';
    document.title = '第零篇 第一章 刑法的運作原理 | 刑法總則研讀筆記';
    renderToc('part0-chapter-1');

    if (shouldScrollTop) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      if (window.history && window.history.replaceState) history.replaceState(null, '', '#part0-chapter-1');
    }

  } else if (viewName === 'part0-ch1-sec1') {
    if (viewPart0Ch1Sec1) viewPart0Ch1Sec1.classList.remove('hidden');
    document.body.classList.remove('in-chapter-1', 'intro-active', 'in-home');
    document.body.classList.add('in-chapter');

    setRightTocVisibility(true);

    if (navBtnPart0) navBtnPart0.classList.add('text-blue-600', 'dark:text-blue-400');
    if (navBtnPart0Ch1) navBtnPart0Ch1.classList.add('text-indigo-600', 'dark:text-indigo-400');
    if (navBtnPart0Ch1Sec1) {
      navBtnPart0Ch1Sec1.classList.remove(...INACTIVE_CLASS);
      navBtnPart0Ch1Sec1.classList.add(...ACTIVE_CLASS);
    }

    if (currentChapterBadge) currentChapterBadge.textContent = '第零篇 第一章・第一節';
    document.title = '第一節 法益保護原則——何謂法益？ | 刑法總則研讀筆記';
    renderToc('part0-ch1-sec1');

    if (shouldScrollTop) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      if (window.history && window.history.replaceState) history.replaceState(null, '', '#part0-ch1-sec1');
    }

  } else if (viewName === 'part0-ch1-sec2') {
    if (viewPart0Ch1Sec2) viewPart0Ch1Sec2.classList.remove('hidden');
    document.body.classList.remove('in-chapter-1', 'intro-active', 'in-home');
    document.body.classList.add('in-chapter');

    setRightTocVisibility(true);

    if (navBtnPart0) navBtnPart0.classList.add('text-blue-600', 'dark:text-blue-400');
    if (navBtnPart0Ch1) navBtnPart0Ch1.classList.add('text-indigo-600', 'dark:text-indigo-400');
    if (navBtnPart0Ch1Sec2) {
      navBtnPart0Ch1Sec2.classList.remove(...INACTIVE_CLASS);
      navBtnPart0Ch1Sec2.classList.add(...ACTIVE_CLASS);
    }

    if (currentChapterBadge) currentChapterBadge.textContent = '第零篇 第一章・第二節';
    document.title = '第二節 罪刑法定原則——付出代價的根據何在？ | 刑法總則研讀筆記';
    renderToc('part0-ch1-sec2');

    if (shouldScrollTop) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      if (window.history && window.history.replaceState) history.replaceState(null, '', '#part0-ch1-sec2');
    }

  } else if (viewName === 'part0-ch1-sec3') {
    if (viewPart0Ch1Sec3) viewPart0Ch1Sec3.classList.remove('hidden');
    document.body.classList.remove('in-chapter-1', 'intro-active', 'in-home');
    document.body.classList.add('in-chapter');

    setRightTocVisibility(true);

    if (navBtnPart0) navBtnPart0.classList.add('text-blue-600', 'dark:text-blue-400');
    if (navBtnPart0Ch1) navBtnPart0Ch1.classList.add('text-indigo-600', 'dark:text-indigo-400');
    if (navBtnPart0Ch1Sec3) {
      navBtnPart0Ch1Sec3.classList.remove(...INACTIVE_CLASS);
      navBtnPart0Ch1Sec3.classList.add(...ACTIVE_CLASS);
    }

    if (currentChapterBadge) currentChapterBadge.textContent = '第零篇 第一章・第三節';
    document.title = '第三節 罪責原則——付出代價的極限何在？ | 刑法總則研讀筆記';
    renderToc('part0-ch1-sec3');

    if (shouldScrollTop) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      if (window.history && window.history.replaceState) history.replaceState(null, '', '#part0-ch1-sec3');
    }

  } else if (viewName === 'part0-chapter-2') {
    if (viewPart0Chapter2) viewPart0Chapter2.classList.remove('hidden');
    document.body.classList.remove('in-chapter-1', 'intro-active', 'in-home');
    document.body.classList.add('in-chapter');

    setRightTocVisibility(true);

    if (navBtnPart0) navBtnPart0.classList.add('text-blue-600', 'dark:text-blue-400');
    if (navBtnPart0Ch2) {
      navBtnPart0Ch2.classList.remove(...INACTIVE_CLASS);
      navBtnPart0Ch2.classList.add(...ACTIVE_CLASS);
    }

    if (currentChapterBadge) currentChapterBadge.textContent = '第零篇 第二章';
    document.title = '第零篇 第二章 刑法的操作原理 | 刑法總則研讀筆記';
    renderToc('part0-chapter-2');

    if (shouldScrollTop) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      if (window.history && window.history.replaceState) history.replaceState(null, '', '#part0-chapter-2');
    }

  } else if (viewName === 'part0-ch2-sec1') {
    if (viewPart0Ch2Sec1) viewPart0Ch2Sec1.classList.remove('hidden');
    document.body.classList.remove('in-chapter-1', 'intro-active', 'in-home');
    document.body.classList.add('in-chapter');

    setRightTocVisibility(true);

    if (navBtnPart0) navBtnPart0.classList.add('text-blue-600', 'dark:text-blue-400');
    if (navBtnPart0Ch2) navBtnPart0Ch2.classList.add('text-indigo-600', 'dark:text-indigo-400');
    if (navBtnPart0Ch2Sec1) {
      navBtnPart0Ch2Sec1.classList.remove(...INACTIVE_CLASS);
      navBtnPart0Ch2Sec1.classList.add(...ACTIVE_CLASS);
    }

    if (currentChapterBadge) currentChapterBadge.textContent = '第零篇 第二章・第一節';
    document.title = '第一節 刑法的適用效力 | 刑法總則研讀筆記';
    renderToc('part0-ch2-sec1');

    if (shouldScrollTop) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      if (window.history && window.history.replaceState) history.replaceState(null, '', '#part0-ch2-sec1');
    }

  } else if (viewName === 'part0-ch2-sec2') {
    if (viewPart0Ch2Sec2) viewPart0Ch2Sec2.classList.remove('hidden');
    document.body.classList.remove('in-chapter-1', 'intro-active', 'in-home');
    document.body.classList.add('in-chapter');

    setRightTocVisibility(true);

    if (navBtnPart0) navBtnPart0.classList.add('text-blue-600', 'dark:text-blue-400');
    if (navBtnPart0Ch2) navBtnPart0Ch2.classList.add('text-indigo-600', 'dark:text-indigo-400');
    if (navBtnPart0Ch2Sec2) {
      navBtnPart0Ch2Sec2.classList.remove(...INACTIVE_CLASS);
      navBtnPart0Ch2Sec2.classList.add(...ACTIVE_CLASS);
    }

    if (currentChapterBadge) currentChapterBadge.textContent = '第零篇 第二章・第二節';
    document.title = '第二節 刑法之解釋方法 | 刑法總則研讀筆記';
    renderToc('part0-ch2-sec2');

    if (shouldScrollTop) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      if (window.history && window.history.replaceState) history.replaceState(null, '', '#part0-ch2-sec2');
    }

  } else if (viewName === 'part0-chapter-3') {
    if (viewPart0Chapter3) viewPart0Chapter3.classList.remove('hidden');
    document.body.classList.remove('in-chapter-1', 'intro-active', 'in-home');
    document.body.classList.add('in-chapter');

    setRightTocVisibility(true);

    if (navBtnPart0) navBtnPart0.classList.add('text-blue-600', 'dark:text-blue-400');
    if (navBtnPart0Ch3) {
      navBtnPart0Ch3.classList.remove(...INACTIVE_CLASS);
      navBtnPart0Ch3.classList.add(...ACTIVE_CLASS);
    }

    if (currentChapterBadge) currentChapterBadge.textContent = '第零篇 第三章';
    document.title = '第零篇 第三章 刑法的法律效果 | 刑法總則研讀筆記';
    renderToc('part0-chapter-3');

    if (shouldScrollTop) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      if (window.history && window.history.replaceState) history.replaceState(null, '', '#part0-chapter-3');
    }

  } else if (viewName === 'part0-ch3-sec1') {
    if (viewPart0Ch3Sec1) viewPart0Ch3Sec1.classList.remove('hidden');
    document.body.classList.remove('in-chapter-1', 'intro-active', 'in-home');
    document.body.classList.add('in-chapter');

    setRightTocVisibility(true);

    if (navBtnPart0) navBtnPart0.classList.add('text-blue-600', 'dark:text-blue-400');
    if (navBtnPart0Ch3) navBtnPart0Ch3.classList.add('text-indigo-600', 'dark:text-indigo-400');
    if (navBtnPart0Ch3Sec1) {
      navBtnPart0Ch3Sec1.classList.remove(...INACTIVE_CLASS);
      navBtnPart0Ch3Sec1.classList.add(...ACTIVE_CLASS);
    }

    if (currentChapterBadge) currentChapterBadge.textContent = '第零篇 第三章・第一節';
    document.title = '第一節 刑罰的種類——兼談法定刑 | 刑法總則研讀筆記';
    renderToc('part0-ch3-sec1');

    if (shouldScrollTop) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      if (window.history && window.history.replaceState) history.replaceState(null, '', '#part0-ch3-sec1');
    }

  } else if (viewName === 'part0-ch3-sec2') {
    if (viewPart0Ch3Sec2) viewPart0Ch3Sec2.classList.remove('hidden');
    document.body.classList.remove('in-chapter-1', 'intro-active', 'in-home');
    document.body.classList.add('in-chapter');

    setRightTocVisibility(true);

    if (navBtnPart0) navBtnPart0.classList.add('text-blue-600', 'dark:text-blue-400');
    if (navBtnPart0Ch3) navBtnPart0Ch3.classList.add('text-indigo-600', 'dark:text-indigo-400');
    if (navBtnPart0Ch3Sec2) {
      navBtnPart0Ch3Sec2.classList.remove(...INACTIVE_CLASS);
      navBtnPart0Ch3Sec2.classList.add(...ACTIVE_CLASS);
    }

    if (currentChapterBadge) currentChapterBadge.textContent = '第零篇 第三章・第二節';
    document.title = '第二節 刑罰的調整——兼談處斷刑 | 刑法總則研讀筆記';
    renderToc('part0-ch3-sec2');

    if (shouldScrollTop) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      if (window.history && window.history.replaceState) history.replaceState(null, '', '#part0-ch3-sec2');
    }

  } else if (viewName === 'part0-ch3-sec3') {
    if (viewPart0Ch3Sec3) viewPart0Ch3Sec3.classList.remove('hidden');
    document.body.classList.remove('in-chapter-1', 'intro-active', 'in-home');
    document.body.classList.add('in-chapter');

    setRightTocVisibility(true);

    if (navBtnPart0) navBtnPart0.classList.add('text-blue-600', 'dark:text-blue-400');
    if (navBtnPart0Ch3) navBtnPart0Ch3.classList.add('text-indigo-600', 'dark:text-indigo-400');
    if (navBtnPart0Ch3Sec3) {
      navBtnPart0Ch3Sec3.classList.remove(...INACTIVE_CLASS);
      navBtnPart0Ch3Sec3.classList.add(...ACTIVE_CLASS);
    }

    if (currentChapterBadge) currentChapterBadge.textContent = '第零篇 第三章・第三節';
    document.title = '第三節 刑罰的量定——兼談宣告刑 | 刑法總則研讀筆記';
    renderToc('part0-ch3-sec3');

    if (shouldScrollTop) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      if (window.history && window.history.replaceState) history.replaceState(null, '', '#part0-ch3-sec3');
    }

  } else if (viewName === 'part0-ch3-sec4') {
    if (viewPart0Ch3Sec4) viewPart0Ch3Sec4.classList.remove('hidden');
    document.body.classList.remove('in-chapter-1', 'intro-active', 'in-home');
    document.body.classList.add('in-chapter');

    setRightTocVisibility(true);

    if (navBtnPart0) navBtnPart0.classList.add('text-blue-600', 'dark:text-blue-400');
    if (navBtnPart0Ch3) navBtnPart0Ch3.classList.add('text-indigo-600', 'dark:text-indigo-400');
    if (navBtnPart0Ch3Sec4) {
      navBtnPart0Ch3Sec4.classList.remove(...INACTIVE_CLASS);
      navBtnPart0Ch3Sec4.classList.add(...ACTIVE_CLASS);
    }

    if (currentChapterBadge) currentChapterBadge.textContent = '第零篇 第三章・第四節';
    document.title = '第四節 刑罰的執行——兼談執行刑 | 刑法總則研讀筆記';
    renderToc('part0-ch3-sec4');

    if (shouldScrollTop) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      if (window.history && window.history.replaceState) history.replaceState(null, '', '#part0-ch3-sec4');
    }

  } else {
    // 導論畫面
    if (viewIntro) viewIntro.classList.remove('hidden');
    document.body.classList.remove('in-chapter', 'in-chapter-1', 'in-home');

    setRightTocVisibility(false);

    if (navBtnIntro) navBtnIntro.classList.add('text-blue-800', 'dark:text-blue-300');
    if (currentChapterBadge) currentChapterBadge.textContent = '導論';
    document.title = '導論 犯罪概念與論罪結構 | 刑法總則研讀筆記';
    renderToc('intro');

    if (shouldScrollTop) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      if (window.history && window.history.replaceState) history.replaceState(null, '', '#intro');
    }
  }

  // 視圖切換後延遲重新掛載動態觸發器
  setTimeout(() => {
    initStatuteTriggers();
    setupCaseCopyButtons();
    setupCaseAccordion();
    setupZoomableDiagrams();
    updateReadingProgress();
  }, 80);
}

// ==================== 6. 案例篩選與爭點矩陣控制 ====================
function switchJustTab(tabName) {
  const panelLegal = document.getElementById('panelJustLegal');
  const secExtra = document.getElementById('sec-extra-unlawful');
  if (panelLegal) panelLegal.classList.remove('hidden');
  if (secExtra) secExtra.classList.remove('hidden');
}

function filterJustCase(scope, caseId) {
  const container = scope === 'legal' ? document.getElementById('panelJustLegal') : 
                    scope === 'extra' ? document.getElementById('sec-extra-unlawful') : null;
  if (!container) return;

  const cards = container.querySelectorAll('[id^="case-card-"]');
  cards.forEach(card => {
    const cardCaseId = card.getAttribute('data-case');
    if (caseId === 'all' || cardCaseId === caseId) {
      card.classList.remove('hidden');
      card.classList.add('fade-enter');
    } else {
      card.classList.add('hidden');
    }
  });

  const pillContainer = scope === 'legal' ? document.getElementById('pillsLegal') : document.getElementById('pillsExtra');
  if (pillContainer) {
    const pillButtons = pillContainer.querySelectorAll('.just-pill-btn');
    pillButtons.forEach(btn => {
      const onclickAttr = btn.getAttribute('onclick') || '';
      if (onclickAttr.includes(`'${caseId}'`)) {
        btn.classList.add('active-pill');
      } else {
        btn.classList.remove('active-pill');
      }
    });
  }
}

function switchMatrixTab(tabKey) {
  const panels = {
    'tabA': document.getElementById('matrixPanelA'),
    'tabB': document.getElementById('matrixPanelB'),
    'tabC': document.getElementById('matrixPanelC'),
    'tabAll': document.getElementById('matrixPanelAll')
  };

  const buttons = {
    'tabA': document.getElementById('btnTabA'),
    'tabB': document.getElementById('btnTabB'),
    'tabC': document.getElementById('btnTabC'),
    'tabAll': document.getElementById('btnTabAll')
  };

  Object.keys(panels).forEach(key => {
    if (panels[key]) panels[key].classList.add('hidden');
    if (buttons[key]) buttons[key].classList.remove('active-matrix-tab');
  });

  if (panels[tabKey]) {
    panels[tabKey].classList.remove('hidden');
    panels[tabKey].classList.add('fade-enter');
  }
  if (buttons[tabKey]) {
    buttons[tabKey].classList.add('active-matrix-tab');
  }

  if (tabKey === 'tabAll') {
    const cA = document.getElementById('allTableAContainer');
    const cB = document.getElementById('allTableBContainer');
    const cC = document.getElementById('allTableCContainer');
    const tA = document.querySelector('#matrixPanelA .overflow-x-auto');
    const tB = document.querySelector('#matrixPanelB .overflow-x-auto');
    const tC = document.querySelector('#matrixPanelC .overflow-x-auto');

    if (cA && tA && !cA.hasChildNodes()) cA.appendChild(tA.cloneNode(true));
    if (cB && tB && !cB.hasChildNodes()) cB.appendChild(tB.cloneNode(true));
    if (cC && tC && !cC.hasChildNodes()) cC.appendChild(tC.cloneNode(true));
  }
}

function filterMatrixRows(query) {
  const q = (query || '').trim().toLowerCase();
  const clearBtn = document.getElementById('clearMatrixSearchBtn');
  if (clearBtn) {
    clearBtn.classList.toggle('hidden', !q);
  }

  const allRows = document.querySelectorAll('#sec-mega-comparison-matrix tbody tr');
  allRows.forEach(row => {
    if (!q) {
      row.style.display = '';
      return;
    }
    const searchKeywords = (row.getAttribute('data-search') || '').toLowerCase();
    const textContent = (row.textContent || '').toLowerCase();
    const isMatch = searchKeywords.includes(q) || textContent.includes(q);
    row.style.display = isMatch ? '' : 'none';
  });
}

function clearMatrixSearch() {
  const input = document.getElementById('matrixSearchInput');
  if (input) {
    input.value = '';
    filterMatrixRows('');
    input.focus();
  }
}

function jumpToCaseCard(caseId) {
  if (viewChapter1 && viewChapter1.classList.contains('hidden')) {
    switchView('chapter-1', false);
  }

  if (['1-7', '1-8', '1-9', '1-10', '1-11'].includes(caseId)) {
    filterJustCase('legal', caseId);
  } else if (['1-12', '1-13', '1-14', '1-15'].includes(caseId)) {
    filterJustCase('extra', caseId);
  }

  let targetEl = document.getElementById(`case-card-${caseId}`);
  if (!targetEl) {
    const allCards = document.querySelectorAll('div.case-card, div[data-case]');
    for (const c of allCards) {
      if (c.textContent.includes(`案例 ${caseId}`) || c.getAttribute('data-case') === caseId) {
        targetEl = c;
        break;
      }
    }
  }

  if (targetEl) {
    if (targetEl.classList.contains('case-collapsed')) {
      toggleCaseCard(targetEl);
    }

    const headerOffset = 90;
    const elementPosition = targetEl.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });

    targetEl.classList.remove('card-pulse-target');
    void targetEl.offsetWidth;
    targetEl.classList.add('card-pulse-target');

    showToast(`🎯 已定位至 案例 ${caseId}`, '⚖️');
  } else {
    showToast(`查無 案例 ${caseId} 卡片`, '⚠️');
  }
}

// ==================== 7. 平滑滾動至錨點 ====================
function scrollToSection(e, targetId) {
  if (e) e.preventDefault();
  
  if (targetId.startsWith('sec-ch2-')) {
    if (viewChapter2 && viewChapter2.classList.contains('hidden')) {
      switchView('chapter-2', false);
    }
  } else if (targetId.startsWith('sec-p0ch3-sec4-')) {
    if (viewPart0Ch3Sec4 && viewPart0Ch3Sec4.classList.contains('hidden')) {
      switchView('part0-ch3-sec4', false);
    }
  } else if (targetId.startsWith('sec-p0ch3-sec3-')) {
    if (viewPart0Ch3Sec3 && viewPart0Ch3Sec3.classList.contains('hidden')) {
      switchView('part0-ch3-sec3', false);
    }
  } else if (targetId.startsWith('sec-p0ch3-sec2-')) {
    if (viewPart0Ch3Sec2 && viewPart0Ch3Sec2.classList.contains('hidden')) {
      switchView('part0-ch3-sec2', false);
    }
  } else if (targetId.startsWith('sec-p0ch3-sec1-')) {
    if (viewPart0Ch3Sec1 && viewPart0Ch3Sec1.classList.contains('hidden')) {
      switchView('part0-ch3-sec1', false);
    }
  } else if (targetId.startsWith('sec-p0ch3-')) {
    if (viewPart0Chapter3 && viewPart0Chapter3.classList.contains('hidden')) {
      switchView('part0-chapter-3', false);
    }
  } else if (targetId.startsWith('sec-p0ch2-sec2-')) {
    if (viewPart0Ch2Sec2 && viewPart0Ch2Sec2.classList.contains('hidden')) {
      switchView('part0-ch2-sec2', false);
    }
  } else if (targetId.startsWith('sec-p0ch2-sec1-')) {
    if (viewPart0Ch2Sec1 && viewPart0Ch2Sec1.classList.contains('hidden')) {
      switchView('part0-ch2-sec1', false);
    }
  } else if (targetId.startsWith('sec-p0ch2-')) {
    if (viewPart0Chapter2 && viewPart0Chapter2.classList.contains('hidden')) {
      switchView('part0-chapter-2', false);
    }
  } else if (targetId.startsWith('sec-p0ch1-sec3-')) {
    if (viewPart0Ch1Sec3 && viewPart0Ch1Sec3.classList.contains('hidden')) {
      switchView('part0-ch1-sec3', false);
    }
  } else if (targetId.startsWith('sec-p0ch1-sec2-')) {
    if (viewPart0Ch1Sec2 && viewPart0Ch1Sec2.classList.contains('hidden')) {
      switchView('part0-ch1-sec2', false);
    }
  } else if (targetId.startsWith('sec-p0ch1-sec1-')) {
    if (viewPart0Ch1Sec1 && viewPart0Ch1Sec1.classList.contains('hidden')) {
      switchView('part0-ch1-sec1', false);
    }
  } else if (targetId.startsWith('sec-p0ch1-')) {
    if (viewPart0Chapter1 && viewPart0Chapter1.classList.contains('hidden')) {
      switchView('part0-chapter-1', false);
    }
  } else if (targetId.startsWith('sec-p0-')) {
    if (viewPart0 && viewPart0.classList.contains('hidden')) {
      switchView('part-0', false);
    }
  } else {
    if (viewChapter1 && viewChapter1.classList.contains('hidden')) {
      switchView('chapter-1', false);
    }
  }
  
  const target = document.getElementById(targetId);
  if (target) {
    const headerOffset = 80;
    const elementPosition = target.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
    
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
    
    if (window.history && window.history.replaceState) {
      window.history.replaceState(null, '', '#' + targetId);
    }
  }
}

function copyPageUrl() {
  navigator.clipboard.writeText(window.location.href).then(() => {
    const el = document.getElementById('copyUrlText');
    if (el) {
      el.textContent = '已複製連結！';
      setTimeout(() => { el.textContent = '複製本頁連結'; }, 2000);
    }
  }).catch(() => {
    alert('已複製網址：' + window.location.href);
  });
}

// ==================== 8. Hash 路由監聽 ====================
let isInitialLoad = !sessionStorage.getItem('has_visited_site');
sessionStorage.setItem('has_visited_site', 'true');

function handleHashRouting() {
  const hash = window.location.hash;

  if (isInitialLoad && !hash.startsWith('#sec-')) {
    isInitialLoad = false;
    switchView('home', false);
    return;
  }

  if (!hash || hash === '' || hash === '#home') {
    switchView('home', false);
  } else if (hash.startsWith('#sec-ch2-')) {
    switchView('chapter-2', false);
    const targetId = hash.substring(1);
    setTimeout(() => { scrollToSection(null, targetId); }, 50);
  } else if (hash.startsWith('#sec-p0ch3-sec4-')) {
    switchView('part0-ch3-sec4', false);
    const targetId = hash.substring(1);
    setTimeout(() => { scrollToSection(null, targetId); }, 50);
  } else if (hash.startsWith('#sec-p0ch3-sec3-')) {
    switchView('part0-ch3-sec3', false);
    const targetId = hash.substring(1);
    setTimeout(() => { scrollToSection(null, targetId); }, 50);
  } else if (hash.startsWith('#sec-p0ch3-sec2-')) {
    switchView('part0-ch3-sec2', false);
    const targetId = hash.substring(1);
    setTimeout(() => { scrollToSection(null, targetId); }, 50);
  } else if (hash.startsWith('#sec-p0ch3-sec1-')) {
    switchView('part0-ch3-sec1', false);
    const targetId = hash.substring(1);
    setTimeout(() => { scrollToSection(null, targetId); }, 50);
  } else if (hash.startsWith('#sec-p0ch3-')) {
    switchView('part0-chapter-3', false);
    const targetId = hash.substring(1);
    setTimeout(() => { scrollToSection(null, targetId); }, 50);
  } else if (hash.startsWith('#sec-p0ch2-sec2-')) {
    switchView('part0-ch2-sec2', false);
    const targetId = hash.substring(1);
    setTimeout(() => { scrollToSection(null, targetId); }, 50);
  } else if (hash.startsWith('#sec-p0ch2-sec1-')) {
    switchView('part0-ch2-sec1', false);
    const targetId = hash.substring(1);
    setTimeout(() => { scrollToSection(null, targetId); }, 50);
  } else if (hash.startsWith('#sec-p0ch2-')) {
    switchView('part0-chapter-2', false);
    const targetId = hash.substring(1);
    setTimeout(() => { scrollToSection(null, targetId); }, 50);
  } else if (hash.startsWith('#sec-p0ch1-sec3-')) {
    switchView('part0-ch1-sec3', false);
    const targetId = hash.substring(1);
    setTimeout(() => { scrollToSection(null, targetId); }, 50);
  } else if (hash.startsWith('#sec-p0ch1-sec2-')) {
    switchView('part0-ch1-sec2', false);
    const targetId = hash.substring(1);
    setTimeout(() => { scrollToSection(null, targetId); }, 50);
  } else if (hash.startsWith('#sec-p0ch1-sec1-')) {
    switchView('part0-ch1-sec1', false);
    const targetId = hash.substring(1);
    setTimeout(() => { scrollToSection(null, targetId); }, 50);
  } else if (hash.startsWith('#sec-p0ch1-')) {
    switchView('part0-chapter-1', false);
    const targetId = hash.substring(1);
    setTimeout(() => { scrollToSection(null, targetId); }, 50);
  } else if (hash.startsWith('#sec-p0-')) {
    switchView('part-0', false);
    const targetId = hash.substring(1);
    setTimeout(() => { scrollToSection(null, targetId); }, 50);
  } else if (hash.startsWith('#sec-')) {
    switchView('chapter-1', false);
    const targetId = hash.substring(1);
    setTimeout(() => { scrollToSection(null, targetId); }, 50);
  } else if (hash === '#chapter-1') {
    switchView('chapter-1', true);
  } else if (hash === '#chapter-2') {
    switchView('chapter-2', true);
  } else if (hash === '#intro') {
    switchView('intro', true);
  } else if (hash === '#part-0') {
    switchView('part-0', true);
  } else if (hash === '#part0-chapter-1') {
    switchView('part0-chapter-1', true);
  } else if (hash === '#part0-ch1-sec1') {
    switchView('part0-ch1-sec1', true);
  } else if (hash === '#part0-ch1-sec2') {
    switchView('part0-ch1-sec2', true);
  } else if (hash === '#part0-ch1-sec3' || hash === '#part0_ch1-sec3') {
    switchView('part0-ch1-sec3', true);
  } else if (hash === '#part0-chapter-2' || hash === '#part0-ch2') {
    switchView('part0-chapter-2', true);
  } else if (hash === '#part0-ch2-sec1') {
    switchView('part0-ch2-sec1', true);
  } else if (hash === '#part0-ch2-sec2') {
    switchView('part0-ch2-sec2', true);
  } else if (hash === '#part0-chapter-3' || hash === '#part0-ch3') {
    switchView('part0-chapter-3', true);
  } else if (hash === '#part0-ch3-sec1') {
    switchView('part0-ch3-sec1', true);
  } else if (hash === '#part0-ch3-sec2') {
    switchView('part0-ch3-sec2', true);
  } else if (hash === '#part0-ch3-sec3') {
    switchView('part0-ch3-sec3', true);
  } else if (hash === '#part0-ch3-sec4') {
    switchView('part0-ch3-sec4', true);
  } else {
    switchView('home', false);
  }
}

handleHashRouting();
window.addEventListener('DOMContentLoaded', handleHashRouting);
window.addEventListener('hashchange', handleHashRouting);

// ==================== 9. Scrollspy 滾動動態錨點追蹤 ====================
const scrollOffset = 130;
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section[id], div[id^="sec-"], div[id="intro-conducted-read"]');
  let currentActiveId = '';

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - scrollOffset;
    if (window.scrollY >= sectionTop) {
      currentActiveId = section.getAttribute('id');
    }
  });

  document.querySelectorAll('#tocNav a').forEach((link) => {
    if (link.getAttribute('href') === `#${currentActiveId}`) {
      link.className = 'toc-link block py-1.5 pl-3 text-blue-600 dark:text-blue-400 font-semibold -ml-px border-l-2 border-blue-600 dark:border-blue-400 bg-blue-50/50 dark:bg-blue-950/30 rounded-r-lg transition-all';
    } else {
      link.className = 'toc-link block py-1.5 pl-3 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-100/60 dark:hover:bg-slate-800/40 rounded-r-lg transition-all';
    }
  });
}, { passive: true });

// ==================== 10. 研讀滾動進度條與回到頂部環形進度 ====================
function updateReadingProgress() {
  const progressBar = document.getElementById('readingProgressBar');
  const winHeight = window.innerHeight;
  const docHeight = document.documentElement.scrollHeight;
  const maxScroll = docHeight - winHeight;

  let percent = 0;
  if (maxScroll > 0) {
    const currentScroll = window.scrollY;
    percent = Math.min(100, Math.max(0, (currentScroll / maxScroll) * 100));
  }

  if (progressBar) {
    progressBar.style.width = `${percent}%`;
  }

  const tocPercent = document.getElementById('tocProgressPercent');
  const tocBar = document.getElementById('tocProgressBarFill');
  if (tocPercent) tocPercent.textContent = `${Math.round(percent)}%`;
  if (tocBar) tocBar.style.width = `${percent}%`;

  const ring = document.getElementById('backToTopCircle');
  const bttBtn = document.getElementById('floatingBackToTop');
  const bttPercent = document.getElementById('backToTopPercent');
  const circumference = 125.66;

  if (ring) {
    const offset = circumference - (percent / 100) * circumference;
    ring.style.strokeDashoffset = offset;
  }
  if (bttPercent) {
    bttPercent.textContent = `${Math.round(percent)}%`;
  }
  if (bttBtn) {
    if (window.scrollY > 300) {
      bttBtn.classList.remove('btn-hidden');
      bttBtn.classList.add('btn-visible');
    } else {
      bttBtn.classList.remove('btn-visible');
      bttBtn.classList.add('btn-hidden');
    }
  }
}

window.addEventListener('scroll', updateReadingProgress, { passive: true });
window.addEventListener('resize', updateReadingProgress, { passive: true });

// ==================== 11. 全域快速搜尋系統 (Ctrl+K Global Search Engine) ====================
let currentSearchCategory = 'all';
let currentSearchFilteredResults = [];
let searchActiveIndex = -1;

function openSearchModal() {
  const modal = document.getElementById('searchModal');
  const input = document.getElementById('globalSearchInput');
  if (!modal || !input) return;

  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';

  input.value = '';
  currentSearchCategory = 'all';
  updateSearchCategoryChips();
  renderSearchResults(SEARCH_DATABASE, '');

  setTimeout(() => {
    input.focus();
  }, 50);
}

function closeSearchModal() {
  const modal = document.getElementById('searchModal');
  if (!modal) return;
  modal.classList.add('hidden');
  document.body.style.overflow = '';
  searchActiveIndex = -1;
}

function setSearchFilter(category) {
  currentSearchCategory = category;
  updateSearchCategoryChips();
  const input = document.getElementById('globalSearchInput');
  const query = input ? input.value.trim() : '';
  filterAndRenderSearch(query);
}

function updateSearchCategoryChips() {
  const categories = ['all', 'case', 'article', 'concept'];
  categories.forEach(cat => {
    const btn = document.getElementById(`searchChip-${cat}`);
    if (!btn) return;
    if (cat === currentSearchCategory) {
      btn.className = 'px-2.5 py-1 rounded-lg font-semibold transition-all bg-blue-600 text-white shadow-2xs';
    } else {
      btn.className = 'px-2.5 py-1 rounded-lg font-medium text-slate-600 dark:text-slate-400 hover:bg-slate-200/80 dark:hover:bg-slate-800 transition-all';
    }
  });
}

function handleSearchInput(value) {
  filterAndRenderSearch(value.trim());
}

function filterAndRenderSearch(query) {
  const q = query.toLowerCase();
  let results = SEARCH_DATABASE;

  if (currentSearchCategory !== 'all') {
    results = results.filter(item => item.category === currentSearchCategory);
  }

  if (q) {
    results = results.filter(item => {
      const inTitle = item.title.toLowerCase().includes(q);
      const inDesc = item.desc.toLowerCase().includes(q);
      const inPage = item.page.toLowerCase().includes(q);
      const inKeywords = item.keywords.some(k => k.toLowerCase().includes(q));
      return inTitle || inDesc || inPage || inKeywords;
    });
  }

  renderSearchResults(results, query);
}

function renderSearchResults(results, query) {
  currentSearchFilteredResults = results;
  searchActiveIndex = results.length > 0 ? 0 : -1;

  const countEl = document.getElementById('searchResultCount');
  if (countEl) {
    countEl.textContent = `${results.length} 個結果`;
  }

  const listContainer = document.getElementById('searchResultsList');
  if (!listContainer) return;

  if (results.length === 0) {
    listContainer.innerHTML = `
      <div class="py-12 text-center text-slate-400 dark:text-slate-500 space-y-2">
        <span class="text-3xl block">🔍</span>
        <p class="text-sm font-medium text-slate-600 dark:text-slate-400">找不到與「<span class="text-blue-500 font-bold">${escapeHtml(query)}</span>」相符的案例或法條</p>
        <p class="text-xs">試試搜尋：<button type="button" onclick="quickFillSearch('西瓜刀')" class="text-blue-500 hover:underline">西瓜刀</button>、<button type="button" onclick="quickFillSearch('正當防衛')" class="text-blue-500 hover:underline">正當防衛</button>、<button type="button" onclick="quickFillSearch('§ 23')" class="text-blue-500 hover:underline">§ 23</button>、<button type="button" onclick="quickFillSearch('四塊拼圖')" class="text-blue-500 hover:underline">四塊拼圖</button></p>
      </div>
    `;
    return;
  }

  listContainer.innerHTML = results.map((item, idx) => {
    const badgeColor = item.category === 'case' 
      ? 'bg-amber-500/10 text-amber-700 dark:text-amber-300 border-amber-500/20' 
      : item.category === 'article' 
        ? 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border-emerald-500/20'
        : 'bg-blue-500/10 text-blue-700 dark:text-blue-300 border-blue-500/20';

    const categoryIcon = item.category === 'case' ? '⚖️' : item.category === 'article' ? '📜' : '💡';
    const isActive = idx === searchActiveIndex ? 'search-item-active' : '';

    return `
      <div id="searchResultItem-${idx}" 
           onclick="selectSearchResultByIndex(${idx})" 
           class="search-result-item p-3 rounded-xl border border-transparent hover:border-blue-400/50 hover:bg-slate-50 dark:hover:bg-slate-800/60 transition-all cursor-pointer group ${isActive}">
        <div class="flex items-center justify-between gap-2 mb-1">
          <div class="flex items-center gap-2 min-w-0">
            <span class="text-xs px-2 py-0.5 rounded-md border font-semibold flex items-center gap-1 ${badgeColor}">
              <span>${categoryIcon}</span>
              <span>${item.categoryLabel}</span>
            </span>
            <span class="font-mono text-[11px] text-slate-400">${item.page}</span>
          </div>
          <span class="text-[10px] text-slate-400 font-mono group-hover:text-blue-500 transition-colors">跳轉 →</span>
        </div>
        <h4 class="text-xs sm:text-sm font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          ${highlightSearchMatch(item.title, query)}
        </h4>
        <p class="text-[11px] text-slate-500 dark:text-slate-400 line-clamp-2 mt-0.5 leading-relaxed">
          ${highlightSearchMatch(item.desc, query)}
        </p>
      </div>
    `;
  }).join('');
}

function quickFillSearch(keyword) {
  const input = document.getElementById('globalSearchInput');
  if (input) {
    input.value = keyword;
    filterAndRenderSearch(keyword);
  }
}

function highlightSearchMatch(text, query) {
  if (!query) return escapeHtml(text);
  const regex = new RegExp(`(${escapeRegex(query)})`, 'gi');
  return escapeHtml(text).replace(regex, '<mark class="bg-amber-200/80 dark:bg-amber-500/30 text-slate-900 dark:text-white rounded px-0.5 font-bold">$1</mark>');
}

function escapeHtml(str) {
  return (str || '').replace(/[&<>"']/g, m => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  })[m]);
}

function escapeRegex(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function moveSearchActiveIndex(delta) {
  if (currentSearchFilteredResults.length === 0) return;
  const oldIndex = searchActiveIndex;
  searchActiveIndex = Math.max(0, Math.min(currentSearchFilteredResults.length - 1, searchActiveIndex + delta));

  if (oldIndex !== searchActiveIndex) {
    const oldEl = document.getElementById(`searchResultItem-${oldIndex}`);
    const newEl = document.getElementById(`searchResultItem-${searchActiveIndex}`);
    if (oldEl) oldEl.classList.remove('search-item-active');
    if (newEl) {
      newEl.classList.add('search-item-active');
      newEl.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
    }
  }
}

function selectActiveSearchResult() {
  if (searchActiveIndex >= 0 && searchActiveIndex < currentSearchFilteredResults.length) {
    selectSearchResultByIndex(searchActiveIndex);
  }
}

function selectSearchResultByIndex(index) {
  const item = currentSearchFilteredResults[index];
  if (item) {
    selectSearchResult(item);
  }
}

function selectSearchResult(item) {
  closeSearchModal();

  if (item.view) {
    switchView(item.view, false);
  }

  setTimeout(() => {
    const target = document.getElementById(item.anchor);
    if (target) {
      const headerOffset = 90;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });

      target.classList.remove('search-target-highlight');
      void target.offsetWidth;
      target.classList.add('search-target-highlight');
      setTimeout(() => {
        target.classList.remove('search-target-highlight');
      }, 2600);

      if (window.history && window.history.replaceState) {
        window.history.replaceState(null, '', '#' + item.anchor);
      }
    }
  }, 75);
}

window.addEventListener('keydown', (e) => {
  const modal = document.getElementById('searchModal');
  const isModalOpen = modal && !modal.classList.contains('hidden');

  if ((e.ctrlKey || e.metaKey) && (e.key === 'k' || e.key === 'K')) {
    e.preventDefault();
    if (isModalOpen) {
      closeSearchModal();
    } else {
      openSearchModal();
    }
    return;
  }

  if (isModalOpen) {
    if (e.key === 'Escape') {
      e.preventDefault();
      closeSearchModal();
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      moveSearchActiveIndex(1);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      moveSearchActiveIndex(-1);
    } else if (e.key === 'Enter') {
      e.preventDefault();
      selectActiveSearchResult();
    }
  }
});

// ==================== 12. 法條原地懸浮卡片邏輯 (Statute Popover) ====================
let popoverTimeout = null;
let popoverHoverTimer = null;

function showStatutePopover(key, targetEl) {
  clearTimeout(popoverTimeout);
  const data = STATUTE_POPUP_DB[key];
  if (!data) return;

  const popover = document.getElementById('statutePopover');
  const backdrop = document.getElementById('statutePopoverBackdrop');
  const titleEl = document.getElementById('statutePopTitle');
  const badgeEl = document.getElementById('statutePopBadge');
  const bodyEl = document.getElementById('statutePopBody');
  const subEl = document.getElementById('statutePopSub');
  const roleEl = document.getElementById('statutePopRole');

  if (titleEl) titleEl.textContent = data.title;
  if (badgeEl) badgeEl.textContent = data.badge;
  if (bodyEl) bodyEl.textContent = data.body;
  if (subEl) subEl.textContent = data.stage;
  if (roleEl) roleEl.textContent = data.role;

  const isMobile = window.innerWidth < 640;

  if (isMobile) {
    if (backdrop) backdrop.classList.remove('hidden');
  } else {
    if (backdrop) backdrop.classList.add('hidden');

    const rect = targetEl.getBoundingClientRect();
    const popWidth = Math.min(432, window.innerWidth - 24);
    let left = rect.left + (rect.width / 2) - (popWidth / 2);
    left = Math.max(12, Math.min(left, window.innerWidth - popWidth - 12));

    let top;
    const estimatedHeight = 260;
    if (rect.top > estimatedHeight + 16) {
      top = rect.top - estimatedHeight - 8;
    } else {
      top = rect.bottom + 8;
    }

    popover.style.left = `${left}px`;
    popover.style.top = `${top}px`;
  }

  popover.classList.add('popover-visible');
}

function hideStatutePopover(immediate = false) {
  const doHide = () => {
    const popover = document.getElementById('statutePopover');
    const backdrop = document.getElementById('statutePopoverBackdrop');
    if (popover) popover.classList.remove('popover-visible');
    if (backdrop) backdrop.classList.add('hidden');
  };

  if (immediate) {
    clearTimeout(popoverTimeout);
    clearTimeout(popoverHoverTimer);
    doHide();
  } else {
    popoverTimeout = setTimeout(doHide, 160);
  }
}

const popoverEl = document.getElementById('statutePopover');
if (popoverEl) {
  popoverEl.addEventListener('mouseenter', () => { clearTimeout(popoverTimeout); });
  popoverEl.addEventListener('mouseleave', () => {
    if (window.innerWidth >= 640) hideStatutePopover();
  });
}

function initStatuteTriggers() {
  const caseBadges = document.querySelectorAll('div.flex.items-center.justify-between > span');
  caseBadges.forEach(el => {
    if (el.dataset.statuteBound) return;
    const text = el.textContent || '';
    const match = text.match(/§\s*(\d+)/);
    if (match && STATUTE_POPUP_DB[match[1]]) {
      bindStatuteElement(el, match[1]);
    }
  });

  const mojLinks = document.querySelectorAll('a[href*="law.moj.gov.tw/LawClass/LawSingle.aspx?pcode=C0000001&flno="]');
  mojLinks.forEach(el => {
    if (el.dataset.statuteBound) return;
    const match = el.href.match(/flno=(\d+)/);
    if (match && STATUTE_POPUP_DB[match[1]]) {
      bindStatuteElement(el, match[1]);
    }
  });

  const customElements = document.querySelectorAll('[data-statute]');
  customElements.forEach(el => {
    if (el.dataset.statuteBound) return;
    const key = el.dataset.statute;
    if (STATUTE_POPUP_DB[key]) {
      bindStatuteElement(el, key);
    }
  });
}

function bindStatuteElement(el, matchedKey) {
  el.dataset.statuteBound = 'true';
  el.classList.add('statute-trigger');
  let statuteLabel = `刑法第 ${matchedKey} 條`;
  if (matchedKey === '113-8') statuteLabel = '113 年憲判字第 8 號判決';
  else if (matchedKey === '384') statuteLabel = '司法院釋字第 384 號解釋';
  else if (matchedKey === '630') statuteLabel = '司法院釋字第 630 號解釋';
  else if (matchedKey === '19-3') statuteLabel = '刑法第 19 條第 3 項';
  el.setAttribute('title', `查看 ${statuteLabel} 條文與爭點`);

  el.addEventListener('mouseenter', () => {
    if (window.innerWidth >= 640) {
      clearTimeout(popoverHoverTimer);
      popoverHoverTimer = setTimeout(() => {
        showStatutePopover(matchedKey, el);
      }, 260);
    }
  });

  el.addEventListener('mouseleave', () => {
    if (window.innerWidth >= 640) {
      clearTimeout(popoverHoverTimer);
      hideStatutePopover();
    }
  });

  el.addEventListener('click', (e) => {
    if (el.tagName === 'A') {
      e.preventDefault();
    }
    showStatutePopover(matchedKey, el);
  });
}

// ==================== 13. 案例爭點筆記複製與 Toast ====================
let toastTimeout = null;
function showToast(message, icon = '✓') {
  clearTimeout(toastTimeout);
  const toast = document.getElementById('toastNotification');
  const msgEl = document.getElementById('toastMessage');
  const iconEl = document.getElementById('toastIcon');

  if (msgEl) msgEl.textContent = message;
  if (iconEl) iconEl.textContent = icon;

  if (toast) {
    toast.classList.remove('toast-hidden');
    toast.classList.add('toast-visible');

    toastTimeout = setTimeout(() => {
      toast.classList.remove('toast-visible');
      toast.classList.add('toast-hidden');
    }, 2500);
  }
}

function copyCaseNote(caseId, event) {
  if (event) event.stopPropagation();
  const textToCopy = CASE_NOTES_DATABASE[caseId];

  if (!textToCopy) {
    showToast(`案例 ${caseId} 爭點筆記整理中...`, 'ℹ️');
    return;
  }

  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(textToCopy).then(() => {
      showToast(`已複製「案例 ${caseId}」爭點筆記（可直接貼入 Anki / Notion）！`, '📋');
    }).catch(() => {
      fallbackCopyText(textToCopy, caseId);
    });
  } else {
    fallbackCopyText(textToCopy, caseId);
  }

  if (event && event.currentTarget) {
    const btn = event.currentTarget;
    const originalHtml = btn.innerHTML;
    btn.innerHTML = `
      <svg class="w-3.5 h-3.5 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"/>
      </svg>
      <span class="text-emerald-600 dark:text-emerald-400 font-bold">已複製！</span>
    `;
    setTimeout(() => {
      btn.innerHTML = originalHtml;
    }, 1800);
  }
}

function fallbackCopyText(text, caseId) {
  const textarea = document.createElement('textarea');
  textarea.value = text;
  textarea.style.position = 'fixed';
  textarea.style.opacity = '0';
  document.body.appendChild(textarea);
  textarea.select();
  try {
    document.execCommand('copy');
    showToast(`已複製「案例 ${caseId}」爭點筆記（可直接貼入 Anki / Notion）！`, '📋');
  } catch (err) {
    alert('複製失敗，請手動複製');
  }
  document.body.removeChild(textarea);
}

function setupCaseCopyButtons() {
  const allHeaders = document.querySelectorAll('div.flex.items-center.justify-between');
  allHeaders.forEach(firstHeader => {
    const headerText = firstHeader.textContent || '';
    const match = headerText.match(/案例\s*(\d+-\d+)/);
    if (!match) return;

    const card = firstHeader.parentElement;
    if (!card) return;

    const caseId = card.getAttribute('data-case') || match[1];

    if (!card.getAttribute('data-case')) {
      card.setAttribute('data-case', caseId);
    }

    if (firstHeader.querySelector('.copy-case-btn')) return;

    const copyBtn = document.createElement('button');
    copyBtn.type = 'button';
    copyBtn.className = 'copy-case-btn inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-semibold bg-slate-100/90 hover:bg-blue-50 dark:bg-slate-800/80 dark:hover:bg-blue-950/60 text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 border border-slate-200/80 dark:border-white/[0.08] transition-all cursor-pointer shadow-2xs group shrink-0 ml-2';
    copyBtn.title = `一鍵複製案例 ${caseId} 考點結構（相容 Anki / Notion / Obsidian）`;
    copyBtn.innerHTML = `
      <svg class="w-3.5 h-3.5 text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"/>
      </svg>
      <span>複製筆記</span>
    `;
    copyBtn.onclick = (e) => copyCaseNote(caseId, e);

    firstHeader.appendChild(copyBtn);
  });
}

// ==================== 14. 案例手風琴折疊系統 ====================
function setupCaseAccordion() {
  const allHeaders = document.querySelectorAll('div.flex.items-center.justify-between');
  allHeaders.forEach(firstHeader => {
    const headerText = firstHeader.textContent || '';
    const match = headerText.match(/案例\s*(\d+-\d+)/);
    if (!match) return;

    const card = firstHeader.parentElement;
    if (!card || card.classList.contains('case-card')) return;

    card.classList.add('case-card');
    firstHeader.classList.add('case-card-header');

    if (!firstHeader.querySelector('.case-accordion-btn')) {
      const toggleBtn = document.createElement('button');
      toggleBtn.type = 'button';
      toggleBtn.className = 'case-accordion-btn inline-flex items-center justify-center w-7 h-7 rounded-lg text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all shrink-0 ml-1 cursor-pointer';
      toggleBtn.title = '展開 / 收合此案例';
      toggleBtn.innerHTML = `
        <svg class="w-4 h-4 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7"/>
        </svg>
      `;
      firstHeader.appendChild(toggleBtn);
    }

    firstHeader.onclick = (e) => {
      if (e.target.closest('.copy-case-btn') || e.target.closest('[data-statute]') || e.target.closest('a')) {
        return;
      }
      toggleCaseCard(card);
    };

    if (!card.querySelector('.case-collapsed-preview')) {
      let previewText = '點擊展開完整案件事實與爭點審查...';
      const textEl = card.querySelector('div.p-3\\.5, blockquote, p');
      if (textEl) {
        const cleaned = textEl.textContent.trim().replace(/\s+/g, ' ');
        if (cleaned) previewText = cleaned.length > 55 ? cleaned.substring(0, 55) + '...' : cleaned;
      }

      const previewEl = document.createElement('div');
      previewEl.className = 'case-collapsed-preview pt-2 text-xs text-slate-500 dark:text-slate-400 items-center justify-between gap-2 border-t border-slate-100 dark:border-slate-800/60 mt-1 cursor-pointer';
      previewEl.innerHTML = `
        <div class="flex items-center gap-1.5 min-w-0 truncate">
          <span class="text-blue-500 shrink-0 text-[10px]">▶</span>
          <span class="truncate font-sans text-[11.5px]">${previewText}</span>
        </div>
        <span class="text-[10.5px] text-blue-600 dark:text-blue-400 font-bold shrink-0 hover:underline">展開詳解 ↓</span>
      `;
      previewEl.onclick = (e) => {
        e.stopPropagation();
        toggleCaseCard(card);
      };

      if (firstHeader.nextSibling) {
        card.insertBefore(previewEl, firstHeader.nextSibling);
      } else {
        card.appendChild(previewEl);
      }
    }
  });

  setupGlobalCaseControllers();
}

function toggleCaseCard(cardEl) {
  if (!cardEl) return;
  cardEl.classList.toggle('case-collapsed');
}

function toggleAllCases(expand = true) {
  const activeViews = document.querySelectorAll('#viewChapter1:not(.hidden), #viewChapter2:not(.hidden)');
  activeViews.forEach(view => {
    const cards = view.querySelectorAll('.case-card');
    cards.forEach(card => {
      if (expand) {
        card.classList.remove('case-collapsed');
      } else {
        card.classList.add('case-collapsed');
      }
    });
  });
  showToast(expand ? '已展開當前章節全數案例詳解' : '已收合成精簡案例看板模式', '🗂️');
}

function setupGlobalCaseControllers() {
  const sec3List = document.querySelector('#sec-legal-cases .space-y-4');
  if (sec3List && !sec3List.previousElementSibling?.classList.contains('case-batch-controller')) {
    const controller = document.createElement('div');
    controller.className = 'case-batch-controller flex items-center justify-between py-2 px-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/70 border border-slate-200/70 dark:border-slate-800 text-xs mb-3.5 shadow-2xs';
    controller.innerHTML = `
      <div class="flex items-center gap-1.5 font-bold text-slate-700 dark:text-slate-300 text-[11.5px]">
        <span>🗂️ 案例研讀模式：</span>
      </div>
      <div class="flex items-center gap-2">
        <button type="button" onclick="toggleAllCases(false)" class="px-2.5 py-1 rounded-lg bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 font-semibold border border-slate-200/80 dark:border-slate-700 text-[11px] shadow-2xs hover:shadow-xs transition-all flex items-center gap-1 cursor-pointer" title="收合為清單看板">
          <span>⊞</span><span>精簡看板</span>
        </button>
        <button type="button" onclick="toggleAllCases(true)" class="px-2.5 py-1 rounded-lg bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 font-semibold border border-slate-200/80 dark:border-slate-700 text-[11px] shadow-2xs hover:shadow-xs transition-all flex items-center gap-1 cursor-pointer" title="展開所有案件事實與詳解">
          <span>⊟</span><span>展開詳解</span>
        </button>
      </div>
    `;
    sec3List.parentNode.insertBefore(controller, sec3List);
  }
}

// ==================== 15. 核心架構圖燈箱無損放大鏡系統 ====================
let currentLightboxScale = 1;
let lightboxIsDragging = false;
let lightboxStartX = 0;
let lightboxStartY = 0;
let lightboxTranslateX = 0;
let lightboxTranslateY = 0;

function openDiagramLightbox(element, title = '核心架構圖解', page = '原書圖解') {
  const modal = document.getElementById('diagramLightbox');
  const titleEl = document.getElementById('lightboxTitle');
  const pageBadge = document.getElementById('lightboxPageBadge');
  const canvas = document.getElementById('lightboxCanvas');
  
  if (!modal || !canvas) return;

  if (titleEl) titleEl.textContent = title;
  if (pageBadge) pageBadge.textContent = page;

  canvas.innerHTML = '';
  const clone = element.cloneNode(true);
  
  const badges = clone.querySelectorAll('.zoomable-badge');
  badges.forEach(b => b.remove());
  
  clone.classList.remove('cursor-pointer', 'hover:border-blue-500/50', 'hover:shadow-md');
  clone.style.width = '100%';
  clone.style.maxWidth = '780px';
  clone.style.margin = '0 auto';
  canvas.appendChild(clone);

  lightboxResetZoom();

  modal.style.display = 'flex';
  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function closeDiagramLightbox() {
  const modal = document.getElementById('diagramLightbox');
  if (modal) {
    modal.classList.add('hidden');
    modal.style.display = 'none';
  }
  document.body.style.overflow = '';
}

function lightboxZoom(delta) {
  currentLightboxScale = Math.min(2.5, Math.max(0.5, currentLightboxScale + delta));
  applyLightboxTransform();
}

function lightboxResetZoom() {
  currentLightboxScale = 1;
  lightboxTranslateX = 0;
  lightboxTranslateY = 0;
  applyLightboxTransform();
}

function applyLightboxTransform() {
  const canvas = document.getElementById('lightboxCanvas');
  const scaleDisplay = document.getElementById('lightboxScaleDisplay');
  if (canvas) {
    canvas.style.transform = `translate(${lightboxTranslateX}px, ${lightboxTranslateY}px) scale(${currentLightboxScale})`;
  }
  if (scaleDisplay) {
    scaleDisplay.textContent = `${Math.round(currentLightboxScale * 100)}%`;
  }
  const container = document.getElementById('lightboxCanvasContainer');
  if (container) {
    container.style.cursor = currentLightboxScale > 1 ? (lightboxIsDragging ? 'grabbing' : 'grab') : 'default';
  }
}

function initLightboxEvents() {
  const container = document.getElementById('lightboxCanvasContainer');
  if (!container) return;

  container.addEventListener('wheel', (e) => {
    e.preventDefault();
    const delta = e.deltaY < 0 ? 0.15 : -0.15;
    lightboxZoom(delta);
  }, { passive: false });

  container.addEventListener('mousedown', (e) => {
    if (currentLightboxScale <= 1) return;
    lightboxIsDragging = true;
    lightboxStartX = e.clientX - lightboxTranslateX;
    lightboxStartY = e.clientY - lightboxTranslateY;
    container.style.cursor = 'grabbing';
  });

  window.addEventListener('mousemove', (e) => {
    if (!lightboxIsDragging) return;
    lightboxTranslateX = e.clientX - lightboxStartX;
    lightboxTranslateY = e.clientY - lightboxStartY;
    applyLightboxTransform();
  });

  window.addEventListener('mouseup', () => {
    if (lightboxIsDragging) {
      lightboxIsDragging = false;
      applyLightboxTransform();
    }
  });

  container.addEventListener('dblclick', () => {
    if (currentLightboxScale === 1) {
      lightboxZoom(0.6);
    } else {
      lightboxResetZoom();
    }
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      const modal = document.getElementById('diagramLightbox');
      if (modal && !modal.classList.contains('hidden') && modal.style.display !== 'none') {
        closeDiagramLightbox();
      }
    }
  });
}

function setupZoomableDiagrams() {
  // 依使用者需求：已移除「點擊放大檢視」懸浮標籤與燈箱觸發功能
  document.querySelectorAll('.zoomable-badge').forEach(el => el.remove());
  document.querySelectorAll('.zoomable-diagram').forEach(el => {
    el.classList.remove('zoomable-diagram');
    el.style.cursor = 'default';
  });
}

// 頁面初始化監聽
window.addEventListener('DOMContentLoaded', () => {
  initStatuteTriggers();
  setupCaseCopyButtons();
  setupCaseAccordion();
  initLightboxEvents();
  setupZoomableDiagrams();
});

window.addEventListener('load', () => {
  initStatuteTriggers();
  setupCaseCopyButtons();
  setupCaseAccordion();
  initLightboxEvents();
  setupZoomableDiagrams();
});

// ==================== 16. 全域 API 導出 (確保 HTML inline onclick 100% 可呼叫) ====================
window.switchView = switchView;
window.toggleTheme = toggleTheme;
window.cycleTheme = cycleTheme;
window.setTheme = setTheme;
window.applyTheme = applyTheme;
window.applyLineHeight = applyLineHeight;
window.setLineHeightPreset = setLineHeightPreset;
window.resetReaderPreferences = resetReaderPreferences;
window.applyFontScale = applyFontScale;
window.setFontScalePreset = setFontScalePreset;
window.adjustFontSize = adjustFontSize;
window.resetFontSize = resetFontSize;
window.toggleFontMenu = toggleFontMenu;
window.toggleMobileDrawer = toggleMobileDrawer;
window.toggleMobileTocModal = toggleMobileTocModal;
window.openSearchModal = openSearchModal;
window.closeSearchModal = closeSearchModal;
window.setSearchFilter = setSearchFilter;
window.handleSearchInput = handleSearchInput;
window.quickFillSearch = quickFillSearch;
window.scrollToSection = scrollToSection;
window.copyPageUrl = copyPageUrl;
window.showStatutePopover = showStatutePopover;
window.hideStatutePopover = hideStatutePopover;
window.copyCaseNote = copyCaseNote;
window.toggleCaseCard = toggleCaseCard;
window.toggleAllCases = toggleAllCases;
window.switchJustTab = switchJustTab;
window.filterJustCase = filterJustCase;
window.switchMatrixTab = switchMatrixTab;
window.filterMatrixConcept = filterMatrixConcept;
window.openDiagramLightbox = openDiagramLightbox;
window.closeDiagramLightbox = closeDiagramLightbox;
window.lightboxZoom = lightboxZoom;
window.lightboxResetZoom = lightboxResetZoom;
window.refreshViewElements = refreshViewElements;
window.mountAllViews = mountAllViews;

function toggleOriginalQuote() {
  const container = document.getElementById('originalQuoteContainer');
  const text = document.getElementById('quoteToggleText');
  const icon = document.getElementById('quoteToggleIcon');
  if (!container) return;
  if (container.classList.contains('hidden')) {
    container.classList.remove('hidden');
    if (text) text.innerText = '隱藏純文字引文';
    if (icon) icon.innerText = '✕';
  } else {
    container.classList.add('hidden');
    if (text) text.innerText = '查看純文字引文';
    if (icon) icon.innerText = '📄';
  }
}
window.toggleOriginalQuote = toggleOriginalQuote;
