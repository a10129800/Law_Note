# 3-Column Layout Architecture & Implementation Mechanics

## 1. Grid & Sticky Geometry (Flex-Sticky Architecture)

In modern web documentation platforms (Pagefy / Mintlify), sticky positioning and offset coordination are essential for smooth scrolling:

### Dimensions & Structure
- **Container**: `max-w-[92rem] mx-auto flex`.
- **Header**: Height `4rem` (`h-16`, 64px), `sticky top-0`, `z-40`, with `backdrop-blur-md`.
- **Left Sidebar**:
  - Width: `w-72` (288px) on tablet, `w-80` (320px) on desktop (`lg:w-80`).
  - Positioning: `fixed lg:sticky top-16 left-0 z-40 h-[calc(100vh-4rem)] shrink-0`.
  - Responsive: Mobile defaults to `-translate-x-full`, opens via drawer toggle with backdrop overlay.
  - **Crucial Rule**: Using `lg:sticky` with `shrink-0` inside a flex container prevents sidebar overlap issues entirely without relying on fragile padding arithmetic.
- **Center Main Reader**:
  - `flex-1 min-w-0 px-4 sm:px-8 xl:px-8 py-8 lg:py-10`.
  - Max inner width: `max-w-4xl` (896px).
- **Right Table of Contents (TOC)**:
  - Width: `w-64` (256px) or `w-72` (288px).
  - Positioning: `sticky top-24` (96px, giving 32px breathing room below header).
  - Class: `hidden xl:block w-64 shrink-0`.

---

## 2. Scrollspy Mechanics

To achieve seamless heading tracking as the user scrolls:

```javascript
// Calculate offset considering top navbar
const scrollOffset = 130; // 64px header + buffer

window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section[id], div[id^="case-"], div[id="matrix"]');
  let currentActiveId = '';

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - scrollOffset;
    if (window.scrollY >= sectionTop) {
      currentActiveId = section.getAttribute('id');
    }
  });

  // Update TOC active state
  document.querySelectorAll('.toc-link').forEach((link) => {
    if (link.getAttribute('href') === `#${currentActiveId}`) {
      link.className = 'toc-link block py-1.5 pl-3 text-indigo-500 font-semibold -ml-px border-l-2 border-indigo-500';
    } else {
      link.className = 'toc-link block py-1.5 pl-3 text-slate-600 dark:text-slate-400 hover:text-white';
    }
  });
}, { passive: true });
```

---

## 3. Keyboard Shortcut System (Cmd + K)

```javascript
window.addEventListener('keydown', (e) => {
  if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
    e.preventDefault();
    toggleSearchModal();
  } else if (e.key === 'Escape') {
    closeSearchModal();
  }
});
```
