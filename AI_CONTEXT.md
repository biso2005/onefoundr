# OneFoundr - AI Context File
- Background: #FFFFFF
- Font: Inter
- Tone: Professional but approachable

## SITE STRUCTURE
- /start/ - Starting a solo business
- /offer/ - Building your offer
- /marketing/ - Marketing guides
- /sales/ - Sales strategies
- /resources/ - Templates & downloads

## DESIGN RULES
- Clean, minimal, lots of whitespace
- Mobile-first responsive
- Max content width: 1200px
- Use Tailwind CSS only (no custom CSS unless necessary)
- Components go in /src/components/
- Reusable UI in /src/components/ui/

## COMPLETED FEATURES
  - Latest guides grid (6 cards)
- [x] About page — COMPLETE ✅
  - Page hero
  - The problem section
  - What OneFoundr is
  - 5 principles

- [x] Project setup (Next.js 14, TypeScript, Tailwind)
- [x] Brand colors configured
- [x] Inter font setup
- [x] Constants file with nav links and footer links
- [x] Root layout with metadata
- [x] Header component (desktop + mobile)
- [x] Footer component (newsletter + links + bottom bar)
- [x] Homepage — COMPLETE ✅
- [x] About page — COMPLETE ✅
- [x] Start Here page — COMPLETE ✅
- [x] Category Hub Pages — COMPLETE ✅ (all 6)
- [x] Newsletter landing page — COMPLETE ✅
  - Hero with email form
  - What you get (4 benefits)
  - What you won't get (honesty)
  - Sample issue (mock email)
  - Social proof (3 testimonials)
  - Final CTA with second email form
  - What you'll find here (10 categories)
  - Comparison table
  - CTA section
  - Journey steps visualization
  - 3 path cards (Starting, Running, Scaling)
  - Top 10 popular guides
  - Free resources grid
  - Newsletter signup
  - Final CTA with action rows
 [x] Start Here page — COMPLETE ✅
  - Journey steps visualization
  - 3 path cards (Starting, Running, Scaling)
  - Top 10 popular guides
  - Free resources grid
  - Newsletter signup
  - Final CTA with action rows
[x] Category Hub Pages — COMPLETE ✅
  - Reusable CategoryHub component
  - /start — Start Solo
  - /offer — Build Your Offer
  - /marketing — Marketing
  - /sales — Sales
  - /systems — Systems & Ops
  - /tools — Tools & AI

## CURRENT TASK
Build the blog/content system with MDX

## ALL PAGES BUILT
- / (homepage)
- /about
- /start-here
- /start
- /offer
- /marketing
- /sales
- /systems
- /tools
- /newsletter

## DECISIONS MADE
1-42. [previous decisions]
43. Newsletter page has TWO email forms (hero + final CTA)
44. Sample issue shows realistic mock email content
45. Testimonials use placeholder names and roles
46. Newsletter page is conversion-focused (minimal distractions)
47. "What you won't get" section builds trust through honesty

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
│   ├── layout.tsx
│   ├── page.tsx (homepage)
│   ├── about/page.tsx
│   ├── start-here/page.tsx
│   ├── start/page.tsx
│   ├── offer/page.tsx
│   ├── marketing/page.tsx
│   ├── sales/page.tsx
│   ├── systems/page.tsx
│   ├── tools/page.tsx
│   └── newsletter/page.tsx (next)
├── components/
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── CategoryHub.tsx (reusable)
│   ├── home/
│   │   ├── HeroSection.tsx
│   │   ├── CategoryMap.tsx
│   │   ├── FeaturedGuides.tsx
│   │   ├── SolopreneurStories.tsx
│   │   ├── FreeResources.tsx
│   │   └── LatestGuides.tsx
│   └── start-here/ (if extracted)
└── lib/
  └── constants.ts
37. CategoryHub is a reusable server component
38. Category data is passed as props (not hardcoded in component)
39. Each category page file is short — just data + component
40. All 6 category pages share same layout structure
41. Subcategories show article count badges
42. Related categories show 3 other relevant categories
43. Category newsletter CTA customizes heading per category
```