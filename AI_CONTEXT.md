# OneFoundr - AI Context File
# Last Updated: March 21, 2026
# AI: Read this file before every task.

## PROJECT OVERVIEW
- Name: OneFoundr
- URL: onefoundr.com
- Purpose: Resource hub for solopreneurs and solo founders
- Tagline: "Build Solo. Build Smart."
- Stack: Next.js 14, TypeScript, Tailwind CSS, App Router

## BRAND
- Primary Color: #2D3436 (Charcoal)
- Accent Color: #00B894 (Mint Green)
- Background: #FFFFFF
- Font: Inter
- Tone: Professional but approachable

## SITE STRUCTURE
- /start/ - Starting a solo business
- /offer/ - Building your offer
- /marketing/ - Marketing guides
- /sales/ - Sales strategies
- /systems/ - Systems & operations
- /tools/ - Tools & AI
- /about/ - About page
- /start-here/ - New visitor guide
- /newsletter/ - Newsletter signup
- /stories/ - Solopreneur stories
- /resources/ - Templates & downloads

## DESIGN RULES
- Clean, minimal, lots of whitespace
- Mobile-first responsive
- Max content width: 1200px
- Use Tailwind CSS only (no custom CSS unless necessary)
- Components go in /src/components/
- Reusable UI in /src/components/ui/

## COMPLETED FEATURES
- [x] Project setup (Next.js 14, TypeScript, Tailwind)
- [x] Brand colors configured
- [x] Inter font setup
- [x] Constants file with nav links and footer links
- [x] Root layout with metadata
- [x] Header component (desktop + mobile)
- [x] Footer component (newsletter + links + bottom bar)
- [x] Homepage — COMPLETE ✅
  - Hero section
  - Category journey map (6 cards)
  - Featured guides (1 large + 3 small)
  - Solopreneur stories (3 cards)
  - Free resources / lead magnet
  - Latest guides grid (6 cards)
- [x] About page — COMPLETE ✅
  - Page hero
  - The problem section
  - What OneFoundr is
  - 5 principles
  - What you'll find here (10 categories)
  - Comparison table
  - CTA section

## CURRENT TASK
Build the Start Here page

## DECISIONS MADE
1. Using App Router (not Pages Router)
2. Tailwind CSS only (no CSS modules)
3. Header is "use client" component
4. Footer is server component
5. Homepage is server component
6. No icon library — using emoji for category icons
7. Mobile breakpoint at 768px (md: in Tailwind)
8. Newsletter form is UI only (no backend yet)
9. Max content width: 1200px
10. CTA buttons: primary (filled green) and secondary (outlined)
11. Stats card with muted background on hero right side
12. Category cards stored as array
13. Cards are fully clickable links with hover effects
14. Using placeholder data for featured articles
15. Colored placeholder squares instead of real images
16. Story cards use initials avatar (no real photos)
17. Dark section for stories creates visual contrast
18. Revenue shown as green pill badge
19. Green background for lead magnet section (high visibility)
20. Checklist card shows value ($149 crossed out → free)
21. Article cards use placeholder gray area instead of images
22. Category filter tabs are visual only (no functionality yet)
23. Line-clamp-2 on titles and excerpts for consistent card height
24. Homepage sections extracted into /components/home/
25. Homepage visual flow: white → gray → white → dark → green → white → footer
26. About page uses narrower content width (800px max vs 1200px)
27. About page is a server component with exported metadata
28. Reading pages use max-w-3xl for comfortable reading
29. Comparison table uses green left border for OneFoundr column
30. Principle cards use numbered circles with accent/10 background

## DO NOT
- Don't use CSS modules (Tailwind only)
- Don't use class components (functional + hooks only)
- Don't install unnecessary packages
- Don't change the color scheme without asking
- Don't modify existing working components without asking
- Don't commit to main without testing locally
- Don't add features not requested in current task

## USEFUL COMMANDS
```bash
# In /home/zinnox/projects/onefoundr.com/onefoundr/
npm run dev          # Start dev server (runs on port 3000+)
npm run build        # Build for production
npm run lint         # Run ESLint
git log              # View commit history
```

## FILE STRUCTURE
```
src/
├── app/
│   ├── layout.tsx        (root layout with metadata)
│   ├── page.tsx          (homepage - renders 6 section components)
│   ├── error.tsx         (error boundary component)
│   ├── not-found.tsx     (404 page component)
│   ├── globals.css       (Tailwind directives)
│   ├── start/page.tsx
│   ├── offer/page.tsx
│   ├── marketing/page.tsx
│   ├── sales/page.tsx
│   ├── systems/page.tsx
│   ├── tools/page.tsx
│   ├── about/page.tsx
│   ├── start-here/page.tsx
│   └── newsletter/page.tsx
├── components/
│   ├── Header.tsx        (navigation header)
│   ├── Footer.tsx        (footer with links and newsletter)
│   ├── NewsletterSignup.tsx
│   ├── home/             (homepage section components)
│   │   ├── HeroSection.tsx
│   │   ├── CategoryMap.tsx
│   │   ├── FeaturedGuides.tsx
│   │   ├── SolopreneurStories.tsx
│   │   ├── FreeResources.tsx
│   │   └── LatestGuides.tsx
│   └── about/            (about page components)
│       └── CTAButtons.tsx
└── lib/
    └── constants.ts      (site config, nav links, footer links)
```