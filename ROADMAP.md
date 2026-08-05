# Step-by-Step Build & Free Server Deployment Roadmap (`Roadmap.md`)

This roadmap provides the exact step-by-step instructions to build, style, animate, test, and deploy the Multi-Brand Cement Seller Platform for **$0 / month** on free servers.

---

## 🚩 PHASE 1: Project Initialization & Theme Setup

### Step 1.1: Create Project Folder & Install Next.js
```bash
npx create-next-app@latest cement-site --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"
cd cement-site
```

### Step 1.2: Install Required Libraries
```bash
npm install framer-motion lucide-react clsx tailwind-merge react-hook-form zod @hookform/resolvers @supabase/supabase-js resend
```

### Step 1.3: Configure Design Tokens & Fonts
- Update `src/app/globals.css` with the design tokens from `DESIGN.md`:
  `--bg-obsidian: #0B0E14`, `--bg-slate: #131822`, `--accent-orange: #FF5500`, `--accent-cyan: #00E5FF`.
- Load *Space Grotesk*, *JetBrains Mono*, and *Inter* fonts in `src/app/layout.tsx`.

---

## 🏗️ PHASE 2: Component & Feature Development

### Step 2.1: Navigation Bar & Ticker
- Build top utility strip: "Authorized Wholesale Dealer • Direct Factory Rates • Express Site Delivery".
- Build sticky glassmorphism header (`backdrop-blur-md`).

### Step 2.2: Hero Section & Metric Counters
- Implement bold title reveal: "DIRECT AUTHORIZED SUPPLIER FOR TOP CEMENT BRANDS".
- Build metric counter strip (15,000+ Tonnes, 3-4 Top Brands, 58.5 MPa Avg Strength).

### Step 2.3: Multi-Brand Cement Showcase Slider & Filters
- Build filter tabs for brands (Ultrix, Maximo, DS Power, etc.) and grades (OPC 53, PPC, PSC).
- Create cards featuring 28-day strength, setting times, standard codes, and 1-click WhatsApp (`wa.me`) quote buttons.

### Step 2.4: "Which Cement is Best?" Comparison Guide
- Build interactive comparison matrix comparing OPC 53 vs PPC vs PSC for roof slabs, columns, footings, and plastering.

### Step 2.5: Live Cement Quantity & Cost Calculator
- Develop concrete volume calculation logic (`Length x Width x Thickness`).
- Display estimated 50kg bags and metric tonnes.
- Add 1-click "Send Calculation to WhatsApp (`wa.me`)" button.

### Step 2.6: App-Like Mobile Sticky Bottom Bar
- Create fixed bottom bar for mobile viewports (< 768px):
  - 📞 **Call**: `tel:+18005550199`
  - 📱 **WhatsApp Quote**: `wa.me/15551234567`
  - 🧮 **Quick Calculator Modal**: Slide-up drawer.

---

## ⚡ PHASE 3: Free Backend & Lead Setup

### Step 3.1: Supabase Free Tier Database (No Credit Card)
1. Sign up at [supabase.com](https://supabase.com) (Free Account).
2. Create project `titan-cement-site`.
3. In SQL Editor, execute schema from `PRD.md`:
   ```sql
   CREATE TABLE dealer_quote_requests (
     id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
     created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
     full_name TEXT NOT NULL,
     phone_whatsapp TEXT NOT NULL,
     city_pincode TEXT NOT NULL,
     preferred_brand TEXT NOT NULL,
     cement_grade TEXT NOT NULL,
     estimated_bags INTEGER NOT NULL,
     notes TEXT
   );
   ```
4. Copy `NEXT_PUBLIC_SUPABASE_URL` & `NEXT_PUBLIC_SUPABASE_ANON_KEY` to `.env.local`.

### Step 3.2: Free Email Alert Setup (Resend API)
1. Register at [resend.com](https://resend.com) (Free 3,000 emails/mo).
2. Create API key and set `RESEND_API_KEY` in `.env.local`.
3. Create API route `src/app/api/quote/route.ts` to email sales leads instantly.

---

## 🚀 PHASE 4: Free Deployment & Hosting

### Step 4.1: Deploy to Vercel (Recommended - $0/mo)
1. Push code to GitHub repository.
2. Sign up at [vercel.com](https://vercel.com) using GitHub.
3. Import project `cement-site`.
4. Add environment variables in Vercel settings.
5. Click **Deploy**. Vercel will build and provide a live URL (`https://your-site.vercel.app`).

### Step 4.2: Alternative Free Hosting (Netlify or Firebase Hosting)
- **Netlify**: Connect GitHub repository -> Deploy.
- **Firebase Hosting**: Run `firebase init hosting` -> `firebase deploy`.

### Step 4.3: Connect Free Custom Domain & SSL
- In Vercel Settings -> **Domains** -> Add custom domain (e.g., `titancement.com`).
- Update DNS records with your domain registrar. SSL is auto-provisioned for free.

---

## 🔍 PHASE 5: Performance, SEO & Quality Audit

1. **Lighthouse Performance Test**: Verify 95+ score on Mobile & Desktop.
2. **SEO Setup**: Add dynamic OpenGraph tags (`og-image.jpg`), Schema.org structured data, and submit `sitemap.xml` to Google Search Console.
