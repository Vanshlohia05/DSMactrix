# Tech Stack & Free Server Architecture (`Tech_Stack.md`)

## 1. 100% Free Stack Architecture ($0 Budget / NO Credit Card Needed)

This architecture is built for maximum speed, zero monthly cost, and complete independence from paid APIs or credit card requirements.

```
+-------------------------------------------------------------------------------+
|                       FRONTEND FRAMEWORK & SPEED ENGINE                       |
|   Next.js 14 (App Router)  OR  Vite + React (TypeScript)                       |
|   Tailwind CSS (Styling) + Framer Motion (Kinetic Animations) + Lucide Icons  |
+---------------------------------------┬---------------------------------------+
                                        │
                                        ▼
+-------------------------------------------------------------------------------+
|                       FREE BACKEND & DATABASE STORAGE                         |
|   Supabase Free Tier (500MB PostgreSQL, 1GB Storage, Instant REST API)        |
|   OR Firebase Spark Plan (1GB Firestore, 50,000 Reads/Day - NO Credit Card)    |
+---------------------------------------┬---------------------------------------+
                                        │
                                        ▼
+-------------------------------------------------------------------------------+
|                       FREE LEAD CAPTURE & COMMUNICATION                       |
|   1. Direct WhatsApp Schema: wa.me/15551234567?text=... (100% Free Forever)   |
|   2. Resend API / EmailJS (Free 3,000 quote alert emails/month)               |
|   3. Direct Click-to-Call: tel:+18005550199                                   |
+---------------------------------------┬---------------------------------------+
                                        │
                                        ▼
+-------------------------------------------------------------------------------+
|                       FREE HOSTING & GLOBAL CDN DEPLOYMENT                    |
|   Vercel / Netlify / Cloudflare Pages (100% Free Lifetime Tier + Free SSL)    |
+-------------------------------------------------------------------------------+
```

---

## 2. Technology Selection Rationale

### A. Next.js 14+ (App Router) or Vite + React (TypeScript)
- **Why**: Fast initial load (FCP < 1.0s), automatic code splitting, static site generation (SSG) for top Google SEO.
- **Styling**: Tailwind CSS v3 / v4 with custom design tokens for rapid, responsive UI construction.

### B. Animations & Motion Physics:
- **Framer Motion**: Hardware-accelerated CSS animations (`transform: translate3d`) for 60fps smooth scroll reveals, micro-haptics, and tab switching without slowing down the site.

### C. Free Communication & Leads:
- **`wa.me` Schema**: Direct WhatsApp link integration allowing customers to send pre-calculated bag orders to your phone with 1 tap. **Requires 0 API fees and NO developer account**.
- **Resend API**: Free 3,000 emails/month to notify your sales team instantly when a quote form is submitted.

---

## 3. Package Dependencies (`package.json`)

```json
{
  "name": "titan-multi-brand-cement",
  "version": "2.0.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "next": "^14.2.0",
    "react": "^18.3.0",
    "react-dom": "^18.3.0",
    "framer-motion": "^11.2.0",
    "lucide-react": "^0.380.0",
    "clsx": "^2.1.1",
    "tailwind-merge": "^2.3.0",
    "react-hook-form": "^7.51.0",
    "zod": "^3.23.0",
    "@hookform/resolvers": "^3.4.0",
    "@supabase/supabase-js": "^2.43.0",
    "resend": "^3.2.0"
  },
  "devDependencies": {
    "@types/node": "^20.12.0",
    "@types/react": "^18.3.0",
    "@types/react-dom": "^18.3.0",
    "postcss": "^8.4.0",
    "tailwindcss": "^3.4.0",
    "typescript": "^5.4.0"
  }
}
```
