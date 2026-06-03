# Centrid Hub Website Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a premium 5-page interior design studio website for Centrid Hub with editorial-magazine aesthetics, scroll-triggered animations, and mobile-first responsive design.

**Architecture:** Next.js 14 App Router with server components by default, client components only where interactivity is needed (animations, state). Framer Motion for all animations. Component-per-section pattern — each page section is its own component file for maintainability. Shared UI primitives (SplitText, AnimatedCounter, MagneticButton) are reusable across pages.

**Tech Stack:** Next.js 14+, Tailwind CSS, Framer Motion, Google Fonts (DM Serif Display + Inter), next/image for optimization

---

## File Structure

```
src/
  app/
    layout.tsx              — Root layout: fonts, metadata, Navbar, Footer, WhatsApp
    page.tsx                — Homepage (server component importing client sections)
    about/page.tsx          — About page
    partnership/page.tsx    — Signature x Centrid page
    portfolio/page.tsx      — Portfolio page
    contact/page.tsx        — Contact page
    globals.css             — Tailwind directives + custom utilities
  components/
    layout/
      Navbar.tsx            — Transparent→solid nav, mobile hamburger overlay
      Footer.tsx            — Site footer with links and branding
      WhatsAppButton.tsx    — Floating green button with pulse
      PageTransition.tsx    — Fade+slide wrapper for route transitions
    home/
      HeroSection.tsx       — Full-viewport hero, Ken Burns, split-text headline
      FeaturedProjects.tsx  — Horizontal scroll parallax project cards
      ServicesOverview.tsx   — 3-column services with SVG draw + counters
      StatsSection.tsx      — Dark navy stats with animated counters
      CTASection.tsx        — Word-by-word reveal + magnetic button
    about/
      AboutHero.tsx         — Bold philosophy quote with letter-spacing animation
      StorySection.tsx      — Offset image+text layout
      TimelineSection.tsx   — Alternating milestone timeline with drawn line
      ValuesSection.tsx     — Hover-reveal value cards in masonry grid
    partnership/
      PartnershipHero.tsx   — Split-screen co-branded hero with animated "x"
      WhyPartnership.tsx    — Side-by-side sliding cards
      KitchenShowcase.tsx   — Full-width draggable kitchen carousel
      FeaturesGrid.tsx      — Animated icon grid (smart storage, materials, etc.)
      TrustSection.tsx      — "Since 1994" large typography + counter
    portfolio/
      PortfolioClient.tsx   — Client component: filter state, grid, modal
      ProjectCard.tsx       — Individual masonry card with hover effects
      ProjectModal.tsx      — Scale+fade detail overlay
    contact/
      ContactClient.tsx     — Client component: form state + validation
      ContactInfo.tsx       — Right sidebar with info + map placeholder
    ui/
      SplitText.tsx         — Staggered word/char reveal animation
      AnimatedCounter.tsx   — Number counting animation on scroll
      MagneticButton.tsx    — Cursor-following magnetic hover button
      RevealOnScroll.tsx    — Generic scroll-triggered reveal wrapper
      SectionHeading.tsx    — Reusable section title with animated underline
  lib/
    data.ts                 — Projects array, services array, timeline milestones, values
    constants.ts            — Contact info, nav links, social links, colors
```

---

## Task 1: Scaffold Next.js Project

**Files:**
- Create: `package.json`, `tsconfig.json`, `tailwind.config.ts`, `next.config.ts`, `postcss.config.mjs`
- Create: `src/app/globals.css`, `src/app/layout.tsx`, `src/app/page.tsx`

- [ ] **Step 1: Create Next.js app with TypeScript and Tailwind**

```bash
cd "/Users/weichernlim/Documents/Portfolio/Centrid Design-Premium"
npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir --import-alias "@/*" --no-git --use-npm
```

- [ ] **Step 2: Install Framer Motion**

```bash
npm install framer-motion
```

- [ ] **Step 3: Verify dev server starts**

```bash
npm run dev
```

---

## Task 2: Global Styles, Fonts, Constants & Data

**Files:**
- Create: `src/lib/constants.ts`
- Create: `src/lib/data.ts`
- Modify: `src/app/globals.css`
- Modify: `tailwind.config.ts`

- [ ] **Step 1: Configure Tailwind with brand colors and fonts**

`tailwind.config.ts`:
```ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: { DEFAULT: "#2563EB", 50: "#EFF6FF", 100: "#DBEAFE", 200: "#BFDBFE", 300: "#93C5FD", 400: "#60A5FA", 500: "#2563EB", 600: "#1D4ED8", 700: "#1E40AF" },
        navy: { DEFAULT: "#0F172A", 50: "#1E293B", 100: "#334155" },
      },
      fontFamily: {
        serif: ['"DM Serif Display"', "Georgia", "serif"],
        sans: ['"Inter"', "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
```

- [ ] **Step 2: Write global CSS with custom utilities**

`src/app/globals.css`:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  html { scroll-behavior: smooth; }
  body { @apply font-sans text-navy antialiased; }
}

@layer utilities {
  .text-gradient { @apply bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-700; }
  .noise-overlay { background-image: url("data:image/svg+xml,..."); /* grain texture */ }
}
```

- [ ] **Step 3: Create constants file**

`src/lib/constants.ts` — nav links, contact info, WhatsApp number, social links.

- [ ] **Step 4: Create data file**

`src/lib/data.ts` — projects array (6 projects with title, category, sqft, location, year, image URL, description), services array (3 services), timeline milestones, values array.

---

## Task 3: UI Utility Components

**Files:**
- Create: `src/components/ui/SplitText.tsx`
- Create: `src/components/ui/AnimatedCounter.tsx`
- Create: `src/components/ui/MagneticButton.tsx`
- Create: `src/components/ui/RevealOnScroll.tsx`
- Create: `src/components/ui/SectionHeading.tsx`

Each is a "use client" component using Framer Motion. SplitText splits text by word and staggers fade+slide-up. AnimatedCounter uses useMotionValue + useTransform to count from 0 to target on viewport entry. MagneticButton tracks mouse position relative to button center and applies spring transform. RevealOnScroll wraps children with viewport-triggered fade+slide. SectionHeading renders an h2 with animated underline.

---

## Task 4: Layout Components

**Files:**
- Create: `src/components/layout/Navbar.tsx`
- Create: `src/components/layout/Footer.tsx`
- Create: `src/components/layout/WhatsAppButton.tsx`
- Create: `src/components/layout/PageTransition.tsx`

Navbar: transparent bg, becomes solid white+shadow on scroll (useMotionValueEvent on scrollY). Logo left, nav links center, CTA button right. Mobile: hamburger icon opens full-screen navy overlay with staggered link animations. Active link has animated blue underline.

Footer: Navy background, 4-column grid (brand+tagline, quick links, services, contact info), copyright bar.

WhatsAppButton: Fixed bottom-right, appears after 3s delay (AnimatePresence), green circle with WhatsApp SVG, pulse animation every 10s via CSS keyframe.

PageTransition: Wraps page children with fade+slide-up on mount using AnimatePresence.

---

## Task 5: Homepage

**Files:**
- Modify: `src/app/page.tsx`
- Create: `src/components/home/HeroSection.tsx`
- Create: `src/components/home/FeaturedProjects.tsx`
- Create: `src/components/home/ServicesOverview.tsx`
- Create: `src/components/home/StatsSection.tsx`
- Create: `src/components/home/CTASection.tsx`

HeroSection: Full viewport, background image with slow Ken Burns (scale 1→1.1 over 20s loop), dark overlay gradient. SplitText headline "Designing Spaces That Inspire", subtext fade-in, scroll indicator (animated chevron). CTA buttons with MagneticButton.

FeaturedProjects: Horizontal scrolling section. useRef + onScroll for drag-to-scroll. 6 project cards, each 400px wide. Image with parallax (translateY based on scroll position). Hover: scale 1.05, blue tint overlay, title slides up.

ServicesOverview: "01 / 02 / 03" large serif numbers. Interior Design, Build & Renovation, Kitchen Design. Each has SVG icon that draws on viewport entry (strokeDasharray + strokeDashoffset animation). Staggered entrance left-to-right.

StatsSection: Navy background with subtle grain texture overlay. 4 stats: 150+ Projects, 5+ Years, 50+ Happy Clients, 3 Showrooms. AnimatedCounter for each. Grid layout, numbers in large serif font.

CTASection: Large statement "Ready to transform your space?" with word-by-word reveal on scroll. MagneticButton CTA "Start Your Project". Subtle blue gradient background.

---

## Task 6: About Page

**Files:**
- Create: `src/app/about/page.tsx`
- Create: `src/components/about/AboutHero.tsx`
- Create: `src/components/about/StorySection.tsx`
- Create: `src/components/about/TimelineSection.tsx`
- Create: `src/components/about/ValuesSection.tsx`

AboutHero: Centered philosophy quote in large serif with letter-spacing animation (tracking tightens on load). Blue accent line below.

StorySection: Two-column offset layout — large image on left (60% width), text block overlapping bottom-right corner with white bg + shadow. Company founding story, mission.

TimelineSection: Vertical timeline with center line that draws itself downward as user scrolls. Milestones alternate left/right: 2019 Founded, 2020 First Major Project, 2021 Signature Partnership, 2023 100th Project, 2024 150+ Projects. Each milestone card slides in from its side.

ValuesSection: 4 value cards in a 2x2 grid with varying heights (masonry feel). Each card has front (icon + title) and reveals description on hover with a smooth height expansion. Values: Craftsmanship, Innovation, Client-First, Sustainability.

---

## Task 7: Partnership Page

**Files:**
- Create: `src/app/partnership/page.tsx`
- Create: `src/components/partnership/PartnershipHero.tsx`
- Create: `src/components/partnership/WhyPartnership.tsx`
- Create: `src/components/partnership/KitchenShowcase.tsx`
- Create: `src/components/partnership/FeaturesGrid.tsx`
- Create: `src/components/partnership/TrustSection.tsx`

PartnershipHero: Split-screen — left half blue bg with Centrid info, right half with kitchen image. Animated "x" symbol in center that rotates 360deg and scales from 0 on load. Both halves slide in from their sides.

WhyPartnership: Two columns side-by-side. Left card "What Signature Brings" slides in from left. Right card "What Centrid Brings" slides in from right. Each has a list of bullet points with staggered reveal. Cards meet in center on scroll.

KitchenShowcase: Full-width carousel with drag/swipe. Large kitchen images with specs overlay (material, dimensions). Navigation dots + arrows. Auto-advances every 5s, pauses on interaction.

FeaturesGrid: 2x3 grid of feature cards: Premium Materials, Custom Layouts, Smart Storage, Professional Installation, 10-Year Warranty, After-Sales Support. Each has an animated icon (SVG draw), staggered viewport entrance.

TrustSection: Large serif "Since 1994" typography. AnimatedCounter from 0→1994. "Malaysia's Largest Kitchen Manufacturer" subtext. Subtle background pattern.

---

## Task 8: Portfolio Page

**Files:**
- Create: `src/app/portfolio/page.tsx`
- Create: `src/components/portfolio/PortfolioClient.tsx`
- Create: `src/components/portfolio/ProjectCard.tsx`
- Create: `src/components/portfolio/ProjectModal.tsx`

PortfolioClient: Client component managing filter state and selected project. Filter bar at top with animated sliding underline. Uses AnimatePresence for grid item transitions — items scale down+fade out when filtered, new items scale up+fade in.

ProjectCard: Asymmetric sizing (some span 2 cols, some span 2 rows for masonry effect). Image fills card, dark gradient overlay at bottom for title+category+location. Hover: image scale 1.08, overlay lightens, "View Project ->" text slides up from bottom. onClick opens modal.

ProjectModal: Fixed overlay with dark backdrop (fade in). Modal content scales from 0.9→1 + fades in. Inside: large hero image, sidebar with project specs (category, sqft, location, year), description text, image gallery thumbnails. Close button + click-outside-to-close + escape key.

---

## Task 9: Contact Page

**Files:**
- Create: `src/app/contact/page.tsx`
- Create: `src/components/contact/ContactClient.tsx`
- Create: `src/components/contact/ContactInfo.tsx`

ContactClient: Split layout — form on left (60%), info on right (40%). Form fields: name, email, phone, project type (pill-selector buttons: Residential/Commercial/Kitchen/Other), message textarea. Bottom-border-only inputs with floating labels (label animates up on focus via Framer). Submit button with blue sweep-fill animation on hover. Basic client-side validation.

ContactInfo: Company address, phone, email, working hours in clean layout. Large clickable phone/email. Map placeholder (blue-tinted container with pin icon). WhatsApp CTA button prominent at bottom.

---

## Task 10: Root Layout, Metadata & SEO

**Files:**
- Modify: `src/app/layout.tsx`
- Create per-page metadata exports in each `page.tsx`

Root layout: Import Google Fonts (DM Serif Display + Inter) via next/font/google. Wrap children with Navbar + Footer + WhatsAppButton + PageTransition. Default metadata with OG tags. Each page exports its own metadata object for SEO.

---

## Task 11: Final Polish & Testing

- [ ] Run dev server, navigate all 5 pages
- [ ] Test mobile responsive (hamburger nav, stacked layouts)
- [ ] Test all scroll animations fire correctly
- [ ] Test portfolio filter + modal
- [ ] Test contact form validation
- [ ] Verify images load from Unsplash
- [ ] Check no console errors
