# OneFoundr - AI Context File
- Background: #FFFFFF
- Font: Inter
- Tone: Professional but approachable

## SITE STRUCTURE
## COMPLETED FEATURES
  - Latest guides grid (6 cards)
- [x] About page — COMPLETE ✅
  - The problem section
  - What OneFoundr is
  - 5 principles

- [x] Project setup (Next.js 14, TypeScript, Tailwind)
- [x] Brand colors configured
- [x] Inter font setup
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


## WRITING SYSTEM
This project uses the V2.4.1 AI Writing System.
Before writing ANY article, read WRITING_SYSTEM.md.

Key rules:
1. ALWAYS check persona consistency before claiming expertise
2. ALWAYS check the 10-article rotation window before choosing elements
3. NEVER use forbidden phrases (permanent + dynamic lists)
4. ALWAYS vary structure, tone, opening, and credibility from recent articles
5. MAX 3 consecutive articles from same pillar
6. MAX 30% personal experience credibility over 10 articles
7. EVERY article needs a publication package (SEO, excerpt, FAQ, social)
8. UPDATE WRITING_SYSTEM.md tracking after every article

Content pillars:
1. Starting Solo (20%)
2. Getting Clients (25%)  
3. Running Lean (25%)
4. Scaling Solo (15%)
5. Staying Sane (15%)


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

# Content Architecture (Pillars, Hubs, Spokes)

## PILLAR 1: STARTING SOLO (Start + Offer categories)
- **HUB: How to Start a One-Person Business**
  - SPOKE: Business Ideas for Solopreneurs
  - SPOKE: Idea Validation Methods
  - SPOKE: Niche Selection
  - SPOKE: Business Models That Work Solo
  - SPOKE: First 90 Days Plan
- **HUB: Building Your Offer**
  - SPOKE: Productized Services
  - SPOKE: Digital Products
  - SPOKE: Pricing Strategy
  - SPOKE: Offer Stacking
  - SPOKE: Memberships
- Depth: 20+ articles planned

## PILLAR 2: GETTING CLIENTS (Marketing + Sales categories)
- **HUB: Marketing for Solopreneurs**
  - SPOKE: Content Marketing (AI-Native Strategy)
  - SPOKE: SEO in 2025 (AI Overviews, E-E-A-T)
  - SPOKE: Newsletter Business
  - SPOKE: Personal Branding
  - SPOKE: Community-Led Growth
  - SPOKE: Short-Form Video Strategy
- **HUB: Sales for Solopreneurs**
  - SPOKE: Getting First 10 Clients
  - SPOKE: Discovery Calls
  - SPOKE: Sales Funnels
  - SPOKE: Proposals
  - SPOKE: Follow-Up Systems
- Depth: 25+ articles planned

## PILLAR 3: RUNNING LEAN (Systems + Tools categories)
- **HUB: The Solopreneur Operating System**
  - SPOKE: Creating SOPs
  - SPOKE: Client Onboarding
  - SPOKE: Workflow Automation
  - SPOKE: Project Management Solo
  - SPOKE: Templates Library
- **HUB: Tools & AI for Solopreneurs**
  - SPOKE: Complete Tech Stack
  - SPOKE: AI Tools That Replace a Team
  - SPOKE: No-Code Building
  - SPOKE: Tool Comparisons (X vs Y)
  - SPOKE: Automation Recipes
- Depth: 25+ articles planned

## PILLAR 4: SCALING SOLO (Growth + Money categories)
- **HUB: Scaling Without Hiring**
  - SPOKE: Recurring Revenue Models
  - SPOKE: Raising Prices
  - SPOKE: Outsourcing & Contractors
  - SPOKE: Partnerships
  - SPOKE: When to Hire
- **HUB: Solopreneur Finance**
  - SPOKE: Cash Flow Management
  - SPOKE: Tax Strategy
  - SPOKE: Pricing Models
  - SPOKE: Income Diversification
- Depth: 15+ articles planned

## PILLAR 5: STAYING SANE (Mindset + Productivity categories)
- **HUB: The Solopreneur Mindset**
  - SPOKE: Dealing with Loneliness
  - SPOKE: Decision Fatigue
  - SPOKE: Imposter Syndrome
  - SPOKE: Burnout Prevention
  - SPOKE: Work-Life Integration
- **HUB: Solopreneur Productivity**
  - SPOKE: Time Management
  - SPOKE: Deep Work
  - SPOKE: Routines
  - SPOKE: Energy Management
- Depth: 15+ articles planned

## WRITING SYSTEM
This project uses the V2.4.1 AI Writing System.
Before writing ANY article, read WRITING_SYSTEM.md.

Key rules:
1. ALWAYS check persona consistency before claiming expertise
2. ALWAYS check the 10-article rotation window before choosing elements
3. NEVER use forbidden phrases (permanent + dynamic lists)
4. ALWAYS vary structure, tone, opening, and credibility from recent articles
5. MAX 3 consecutive articles from same pillar
6. MAX 30% personal experience credibility over 10 articles
7. EVERY article needs a publication package (SEO, excerpt, FAQ, social)
8. UPDATE WRITING_SYSTEM.md tracking after every article

Content pillars:
1. Starting Solo (20%)
2. Getting Clients (25%)  
3. Running Lean (25%)
4. Scaling Solo (15%)
5. Staying Sane (15%)

## Article Writing Checklist

### BEFORE WRITING ANY ARTICLE:
━━━━━━━━━━━━━━━━━━━━━━━━━━

□ Check WRITING_SYSTEM.md — what's been used recently?
□ Pick credibility source (which is underused?)
□ Pick opening type (which hasn't been used?)
□ Pick structure (which hasn't been used?)
□ Pick tone (what contrasts with last article?)
□ Check pillar (am I over 3 consecutive?)
□ Check persona (can I credibly write this?)
□ Check forbidden phrases (permanent + dynamic)

### WHILE WRITING:
━━━━━━━━━━━━━

□ Vary sentence length (short. Then longer flowing ones.)
□ Use 3-5 conversational devices
□ Mix paragraph lengths (1-line to 5-line)
□ Use 5+ human variability elements
□ No forbidden phrases
□ Include specific data/stats from research
□ Real examples > generic advice

### AFTER WRITING:
━━━━━━━━━━━━━

□ Update article tracking in WRITING_SYSTEM.md
□ Update 10-article rolling window
□ Add overused phrases to dynamic forbidden log
□ Create publication package (SEO, FAQ, social)
□ Generate 10+ related article ideas
□ Commit the new/updated .mdx file