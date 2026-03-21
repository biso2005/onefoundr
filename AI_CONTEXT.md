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
- [x] Homepage — Hero section
- [x] Homepage — Category journey map section (6 cards)
- [x] Homepage — Featured guides section (1 large + 3 small)

## CURRENT TASK
Build Homepage — Solopreneur Stories Section

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
14. Using placeholder data for featured articles (will connect to CMS later)
15. Colored placeholder squares instead of real images for now

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
│   ├── page.tsx          (homepage)
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
├── components/           (reusable UI components - build next)
│   ├── Header.tsx
│   ├── Footer.tsx
│   └── NewsletterSignup.tsx
└── lib/
    └── constants.ts      (site config, nav links, footer links)
```