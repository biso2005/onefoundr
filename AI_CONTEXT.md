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
- [x] Project setup (Next.js 14, TypeScript, Tailwind CSS, App Router)
- [x] Brand colors configured in tailwind.config.ts
- [x] Inter font imported from Google Fonts
- [x] Global styles and Tailwind directives
- [x] Placeholder pages created for all main routes
- [x] Constants file with site metadata and nav links
- [x] Git repo initialized and first commit
- [ ] Header component
- [ ] Footer component
- [ ] Homepage (detailed design)
- [ ] Category pages (full content)

## CURRENT TASK
Build Header and Footer components using Tailwind CSS and constants from src/lib/constants.ts

## DECISIONS MADE
1. Using Next.js 14 App Router (src/app directory)
2. TypeScript strict mode enabled
3. Tailwind CSS 4.0 with @tailwindcss/postcss plugin
4. No database required for MVP
5. Brand colors in tailwind config (primary #2D3436, accent #00B894)
6. Inter font from Google Fonts (no variable font)
7. Placeholder pages created with h1 titles (will replace with real content)
8. Git version control initialized
9. ESLint with Next.js + TypeScript rules

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