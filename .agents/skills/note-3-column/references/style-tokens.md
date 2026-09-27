# Note 3 Column - Style Tokens & Aesthetic System

## 1. Palette Tokens

| Semantic Token | Dark Mode Value | Light Mode Value | Description |
| :--- | :--- | :--- | :--- |
| `background` | `#0B0F17` (Deep Obsidian) | `#F8FAFC` (Slate 50) | Page background |
| `surface` | `#101623` / `#131926` | `#FFFFFF` | Card & sidebar containers |
| `border` | `rgba(255, 255, 255, 0.08)` / `#1E293B` | `#E2E8F0` | Subtle hairline dividers |
| `brand-primary` | `#6366F1` (Indigo 500) | `#4F46E5` (Indigo 600) | Buttons, active borders, brand glows |
| `brand-secondary` | `#8B5CF6` (Violet 500) | `#7C3AED` (Violet 600) | Secondary badges & gradients |
| `text-primary` | `#F8FAFC` | `#0F172A` | Primary headings & body |
| `text-muted` | `#94A3B8` | `#64748B` | Metadata, breadcrumbs, descriptions |

---

## 2. Callout Color Map

- **Note (Blue/Cyan)**: `border-blue-500/30 bg-blue-950/20 text-blue-200`
- **Tip (Emerald)**: `border-emerald-500/30 bg-emerald-950/20 text-emerald-200`
- **Warning (Amber)**: `border-amber-500/30 bg-amber-950/20 text-amber-200`
- **Important (Purple)**: `border-purple-500/30 bg-purple-950/20 text-purple-200`

---

## 3. Custom Scrollbar CSS Snippet

```css
::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}
::-webkit-scrollbar-track {
  background: transparent;
}
::-webkit-scrollbar-thumb {
  background: rgba(148, 163, 184, 0.3);
  border-radius: 9999px;
}
.dark ::-webkit-scrollbar-thumb {
  background: rgba(51, 65, 85, 0.5);
}
.dark ::-webkit-scrollbar-thumb:hover {
  background: rgba(71, 85, 105, 0.8);
}
```
