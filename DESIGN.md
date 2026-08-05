# Design Specification: Titan Industrial Kinetic (`Design.md`)

## 1. Brand & Aesthetic Vision: "Titan Industrial Kinetic"

This design system embodies the **Kinetic Industrial Slate** aesthetic—a fusion of heavy-duty engineering trust, tactical reliability, and cutting-edge technical performance for high-volume cement distribution.

### Core Visual Directives:
1. **Obsidian & Slate Surface Hierarchy**: Deep obsidian carbon background (`#10131a` / `#0b0e14`) paired with dark charcoal cards (`#161B22` / `#1d2026`) and technical steel borders (`rgba(255, 255, 255, 0.12)`).
2. **Industrial Safety Orange Action Anchor**: `#ff5708` / `#facc15` used for primary CTAs, quote requests, and active state indicators—providing an authoritative industrial signal.
3. **Tech Cyan Data Metric Highlights**: `#00daf3` used exclusively for technical values, 28-day MPa strength metrics, and IS/NABL accredited lab codes.
4. **Ergonomic Rounded Geometry**: Full pill rounded buttons (`rounded-full` / `50px`), rounded cards (`rounded-2xl` / `16px`), rounded inputs (`rounded-lg` / `10px`). Zero sharp blocky corners.
5. **Focused 3D Bag Picture Tilt**: 3D tilt perspective animation (`perspective(800px) rotateX(...) rotateY(...) scale(1.08)`) applied **exclusively to the cement bag images / pictures** that you will upload.

---

## 2. Color System Tokens

| Token Name | Hex / Value | Purpose |
| :--- | :--- | :--- |
| `surface-dim` | `#10131a` | Base Floor Background |
| `surface-card` | `#161B22` | Card & Section Container |
| `primary-container` | `#ff5708` | Industrial Safety Orange Action |
| `primary-accent` | `#facc15` | Golden Yellow Highlight |
| `tertiary` | `#00daf3` | Tech Cyan Metric Highlight |
| `success-green` | `#10B981` | WhatsApp & System Online Indicator |
| `border-subtle` | `rgba(255, 255, 255, 0.12)` | Subtle Steel Wire Grid |

---

## 3. Typographic Hierarchy

- **Display Hero (`Space Grotesk`)**: 72px Desktop / 32px Mobile, Weight 800, Line height 1.1. Used for main value proposition.
- **Headline Large (`Space Grotesk`)**: 48px Desktop / 32px Mobile, Weight 700. Used for section headers.
- **Technical Data (`JetBrains Mono`)**: 14px, Weight 500, Letter spacing 0.05em. Used for MPa metrics, lab test reports, and technical chips.
- **Body Medium (`Plus Jakarta Sans`)**: 16px, Weight 400, Line height 1.6. Used for descriptive text.
- **Label Caps (`JetBrains Mono`)**: 12px, Weight 700, Letter spacing 0.1em, All-Caps. Used for buttons, chips, and navigational tabs.

---

## 4. Key Interactive Components

1. **Top Navigation Bar**: Sticky glassmorphic header with logo, navigation links, sales phone hotline (`+1-800-TITAN-CEMENT`), and 1-tap WhatsApp quote button.
2. **Dynamic Construction Building Frame**: Background wireframe animation (`@keyframes constructBuilding`) evoking structural progress.
3. **Hero Section & Glassmorphic Fast Quote Form**: High-contrast headline paired with a yellow/orange glassmorphic fast quote form.
4. **Factory Direct Multi-Brand Catalog**: Scrollable cards for UltraTech OPC 53, Ambuja PPC, and ACC PSC Slag with 3D bag image tilt physics and 1-click WhatsApp (`wa.me`) quote buttons.
5. **The Titan Legacy & Strategic B2B Partnerships**: Dedicated sections for contractor credit accounts, regional logistics sidings (Assam & Arunachal Pradesh), and site dealing.
6. **Mobile App Sticky Bottom Bar**: Fixed bottom bar for phone viewports (< 768px) with 1-tap Call Hub, WhatsApp, and Calculator triggers.
