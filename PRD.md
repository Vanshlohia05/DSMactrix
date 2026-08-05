# Product Requirements Document (PRD)

## Project Name: Multi-Brand Industrial Cement Seller & Dealer Platform
**Brand Name**: TITAN CEMENT DISTRIBUTORS (Multi-Brand Dealer Platform)  
**Version**: 2.0.0 (Post-Grill Alignment Update)  
**Target Platform**: Web (Desktop, Tablet, Mobile) — Mobile-First App-Like Experience  
**Hosting & Backend Constraint**: 100% FREE ($0 Budget, NO Credit Card Required)  

---

## 1. Executive Summary & Core Objectives

This platform is engineered specifically for a **Multi-Brand Cement Seller / Dealer** supplying 3-4 premier cement brands (e.g., Ultrix, Maximo, DS Power, UltraTech, Ambuja, ACC) to contractors, real estate developers, and individual homebuilders.

### Key Objectives:
1. **Praise-Worthy Unique Design**: A fusion of **Kinetic Industrial Slate & Obsidian + Cyber Glassmorphism** that looks state-of-the-art and completely eliminates the generic "AI template" look.
2. **Sub-Second Page Load Performance**: 95+ Lighthouse score using CSS hardware acceleration and lightweight Framer Motion physics, perfectly optimized for free hosting servers (Vercel, Netlify, Firebase Spark Plan).
3. **Multi-Brand Catalog & Comparison Engine**: Interactive slider and comparison table guiding buyers on which brand/grade is best for slabs, columns, footings, or plastering.
4. **App-Like Mobile Experience**: Sticky mobile bottom action bar with 1-tap WhatsApp (`wa.me`) quote launcher, direct click-to-call, and quick calculator drawer.
5. **Zero-Cost Operation**: Uses 100% free-tier services (Vercel Hosting, Supabase / Firebase Free Database, Resend API / EmailJS, and direct `wa.me` schemas).

---

## 2. Target Audience Personas

| Persona | Needs & Goals | Core Site Features Used |
| :--- | :--- | :--- |
| **Individual Homebuilder (B2C)** | Unsure which cement brand is best for roof slab vs brick wall plastering. Wants quick bag estimate. | Cement Recommendation Guide, Live Quantity Calculator, 1-Tap WhatsApp Quote (`wa.me`). |
| **Building Contractor (B2B)** | Needs 200+ bags of OPC 53 Grade with factory batch certificates and express delivery. | Multi-Brand Comparison Matrix, Technical Spec Download, Phone Hotline. |
| **Architect / Structural Engineer** | Checking 28-day MPa strength, setting times, and chemical composition. | Quality Control Spec Table, TDS PDF Downloader. |

---

## 3. Detailed Functional Requirements

### 3.1: Announcement Strip & Glassmorphism Header
- **Top Utility Ticker**: Live operational status ("Authorized Dealer for Ultrix, Maximo, DS Power • 24h Site Dispatch • NABL Certified Batches").
- **Header Navigation**: Sticky frosted glass navbar (`backdrop-blur-md bg-#131822/80`), logo with 3D geometric icon, links to Brands, Guide, Calculator, Contact, and "Instant WhatsApp Quote" CTA.

### 3.2: Hero & Multi-Brand Showcase Carousel
- **Typography-Driven Hero**: Bold title "DIRECT AUTHORIZED SUPPLIER FOR TOP CEMENT BRANDS" with kinetic text entrance and particle grid backdrop.
- **Key Metrics Ticker**: Animated numbers showcasing 15,000+ Tonnes Delivered, 3-4 Top Authorized Brands, 58.5 MPa Avg Strength, 2-Hour Express Dispatch.
- **Interactive Multi-Brand Slider**: Cards displaying 3-4 featured cement brands with hover 3D tilt effects.

### 3.3: Multi-Brand Product Catalog & Technical Showcase
- **Brand & Grade Filters**: `[ All Brands ]`, `[ ULTRIX ]`, `[ MAXIMO ]`, `[ DS POWER ]` | `[ OPC 53 ]`, `[ PPC ]`, `[ PSC ]`.
- **Per Brand Card Features**:
  - High-res bag preview image with zoom hover.
  - Core Metric Table: 28-Day Strength (MPa), Initial/Final Setting Time, Standard IS/ASTM Code.
  - Ideal Application Tags ("Roof Slab", "High-Rise Columns", "Underground Footings", "Plastering").
  - 1-Click WhatsApp (`wa.me`) Quote Button pre-filled with brand name and selected grade.

### 3.4: "Which Cement is Best?" Interactive Comparison & Guide
- Matrix comparing OPC 53 vs PPC vs PSC for various structural elements.
- Buyer's guide highlighting workability, crack resistance, curing period, and heat of hydration.

### 3.5: Live Cement Quantity & Cost Calculator
- **User Inputs**: Structure Type (Roof Slab, Columns, Footings, Masonry), Length (ft/m), Width (ft/m), Thickness (in/cm).
- **Live Output**: Estimated 50kg bags count, metric tonnes, sand/aggregate requirement.
- **Action**: "Send Calculation to WhatsApp (`wa.me`)" button generating a pre-formatted message:  
  `"Hello Titan Cement, I calculated my requirement as [X] bags of [Brand] via your site calculator. Please share the live bulk rate."`

### 3.6: App-Like Mobile Sticky Bottom Bar
- Fixed bar at screen bottom for mobile users:
  - 📞 **Instant Call**: Triggering `tel:+18005550199`.
  - 📱 **WhatsApp Quote**: Triggering `wa.me/15551234567` with custom prompt.
  - 🧮 **Quick Calculator**: Slide-up modal for fast bag calculations on site.

### 3.7: Multi-Channel Lead & Contact Form
- Direct contact cards (Call, WhatsApp, Email).
- Quote Form synced to Supabase / Firebase with instant email alert via Resend API.

---

## 4. Free Server Infrastructure Architecture

```
                               ┌─────────────────────────────────────────┐
                               │       CLIENT BROWSER (Desktop/Mobile)   │
                               └────────────────────┬────────────────────┘
                                                    │
                                                    ▼
                               ┌─────────────────────────────────────────┐
                               │   Vercel / Netlify / Firebase Hosting   │
                               │   (100% Free Lifetime Tier - SSL)       │
                               └────────────────────┬────────────────────┘
                                                    │
            ┌───────────────────────────────────────┼───────────────────────────────────────┐
            │                                       │                                       │
            ▼                                       ▼                                       ▼
┌───────────────────────┐               ┌───────────────────────┐               ┌───────────────────────┐
│  WhatsApp (wa.me)     │               │  Supabase / Firebase  │               │   Resend Email API    │
│  (Direct Schema - $0) │               │  (Free DB & Storage)  │               │   (Free 3k emails/mo) │
└───────────────────────┘               └───────────────────────┘               └───────────────────────┘
```

---

## 5. Database Schema (Supabase PostgreSQL / Firebase Firestore)

```sql
CREATE TABLE dealer_quote_requests (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  full_name TEXT NOT NULL,
  phone_whatsapp TEXT NOT NULL,
  city_pincode TEXT NOT NULL,
  preferred_brand TEXT NOT NULL, -- e.g., Ultrix, Maximo, DS Power, UltraTech
  cement_grade TEXT NOT NULL,    -- e.g., OPC 53, PPC, PSC
  estimated_bags INTEGER NOT NULL,
  notes TEXT,
  source TEXT DEFAULT 'website_calculator'
);
```
