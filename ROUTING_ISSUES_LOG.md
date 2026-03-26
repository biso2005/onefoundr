# Dev Issues Log

---

## March 25, 2026

---

### Issue 1: `package-lock.json` had incorrect `devDependencies` flags

**Symptom:** `git status` showed `package-lock.json` as modified. Three packages had `"dev": true` incorrectly set.

**Affected packages:**
- `@types/react`
- `csstype`
- `tailwindcss`

**Resolution:** Staged and committed the corrected `package-lock.json`.

---

### Issue 2: New/updated pages not appearing after deploy

**Symptom:** Updated pages showed the old version on Vercel even after re-deploying. Local dev showed the correct version.

**Root Cause:** `src/lib/mdx.ts` used two in-memory variables (`allPostsCache`, `categoryPostsCache`) that cached all MDX post data at server startup. Because Vercel serves from a frozen build, these caches were populated once at build time and never refreshed — new or updated content was invisible until a full redeploy.

Additionally, there was no ISR (Incremental Static Regeneration) configured, meaning pages had no automatic revalidation window.

**Resolution:**

1. Removed `allPostsCache` and `categoryPostsCache` from `src/lib/mdx.ts`. Both `getAllPosts()` and `getPostsByCategory()` now always read from disk.
2. Added `export const revalidate = 60;` to:
   - `src/app/[category]/[slug]/page.tsx`
   - `src/app/marketing/page.tsx`

This means MDX-driven pages now revalidate at most every 60 seconds after the first visit following a deploy.

**Note:** `export const revalidate` only works on Server Components. It cannot be placed in files with `'use client'`.

---

### Issue 3: Dedicated `page.tsx` overridden by MDX-generated static pages

**Symptom:** Pages like `/start/business-models`, `/offer/coaching-consulting`, etc. were still showing old MDX-based content even though updated interactive `page.tsx` files existed at those paths.

**Root Cause:** Next.js App Router has two ways to serve a URL:
1. A dedicated `src/app/[path]/page.tsx` file
2. The dynamic `src/app/[category]/[slug]/page.tsx` route, which calls `generateStaticParams()` at build time and pre-renders a static HTML page for every MDX file found in `content/`

When **both** exist for the same URL, the statically pre-rendered MDX page wins and overrides the dedicated `page.tsx`. This is a build-time collision — clearing cache or redeploying without removing the conflict does nothing.

**Affected routes:**

| URL | Conflicting MDX file (renamed to .bak) |
|---|---|
| `/start/business-models` | `content/start/business-models.mdx` |
| `/offer/coaching-consulting` | `content/offer/coaching-consulting.mdx` |
| `/offer/digital-products` | `content/offer/digital-products.mdx` |
| `/offer/memberships` | `content/offer/memberships.mdx` |
| `/offer/offer-stacking` | `content/offer/offer-stacking.mdx` |
| `/offer/pricing-strategy` | `content/offer/pricing-strategy.mdx` |
| `/offer/productized-services` | `content/offer/productized-services.mdx` |
| `/start/niche-selection` | `content/start/niche-selection.mdx` |
| `/start/first-90-days` | `content/start/first-90-days.mdx` |
| `/marketing/content-marketing` | `content/marketing/content-marketing.mdx` |

**Resolution:** Renamed all 10 conflicting MDX files to `.mdx.bak` so they are no longer picked up by `generateStaticParams()`. Committed and redeployed.

---

### Issue 4: Sub-pages under `/start/business-models/` still showing wrong content

**Symptom:** After fixing Issue 3, URLs like `/start/business-models/consulting` still showed wrong content even though a dedicated `page.tsx` existed at `src/app/start/business-models/consulting/page.tsx`.

**Root Cause:** `src/app/start/business-models/[slug]/page.tsx` had its own `generateStaticParams()` that iterated the `businessModels` data array. That array included slugs (`consulting`, `freelancing`, `digital-products`, `productized-services`, `saas-software`) that all have dedicated `page.tsx` files. The `[slug]` dynamic route was pre-rendering them at build time, causing the same collision as Issue 3 but one level deeper — and with no MDX file involved.

**Resolution:** Added a `DEDICATED_PAGE_SLUGS` exclusion constant to `src/app/start/business-models/[slug]/page.tsx` and filtered those slugs out of `generateStaticParams()`:

```ts
const DEDICATED_PAGE_SLUGS = [
  'consulting',
  'freelancing',
  'digital-products',
  'productized-services',
  'saas-software'
];

export function generateStaticParams() {
  return [...mdxSlugs, ...dataSlugs].filter(
    ({ slug }) => !DEDICATED_PAGE_SLUGS.includes(slug)
  );
}
```

Committed and redeployed. All sub-pages now render correctly.

---

### Files Modified (summary)

| File | Change |
|---|---|
| `src/lib/mdx.ts` | Removed `allPostsCache` and `categoryPostsCache` |
| `src/app/[category]/[slug]/page.tsx` | Added `export const revalidate = 60` |
| `src/app/marketing/page.tsx` | Added `export const revalidate = 60` |
| `src/app/start/business-models/[slug]/page.tsx` | Added `DEDICATED_PAGE_SLUGS` filter in `generateStaticParams` |
| 10× `content/**/*.mdx` | Renamed to `.mdx.bak` to remove route collisions |

**Commits:** `97c9e5b`, `b33a898` on `main` → deployed to `https://www.onefoundr.com`

---

### Rules Going Forward

1. **Never have both `src/app/{path}/page.tsx` AND `content/{path}.mdx` for the same URL.** If using a dedicated `page.tsx`, rename or delete the MDX file.

2. **When adding a dedicated `page.tsx` inside a folder that has a `[slug]` route**, add the slug to a `DEDICATED_PAGE_SLUGS` exclusion array in that `[slug]/page.tsx`'s `generateStaticParams()`.

3. **`export const revalidate` only works in Server Components.** Do not add it to files with `'use client'` — it will break the build.

4. **Do not use module-level in-memory caches for content in Next.js.** They freeze at build time on Vercel and prevent ISR from working.

5. **Always commit to git before deploying.** Keeps deployment history traceable and rollbacks clean.
