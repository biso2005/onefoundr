# Content Guides Workflow

**Updated guide-writing workflow for OneFoundr**

Three key files power this system:
- `.github/copilot-instructions.md` — System prompt for guide writing
- `.github/review-instructions.md` — System prompt for agent self-review
- `review-checklist.md` — Final human gut-check before publishing

---

## The 6-Step Flow

```
STEP 1: Fill out brief
        └─> Use: briefs/guide-brief-template.md
        └─> Duplicate template, fill in all 8 required fields
        └─> Save as: briefs/{slug}-brief.md
                          ↓
STEP 2: Agent writes draft (using copilot-instructions.md)
        └─> Agent reads the brief + system prompt
        └─> Agent generates full guide in Markdown
        └─> Saves to: drafts/{slug}.md (NOT published yet)
                          ↓
STEP 3: Agent reviews draft (using review-instructions.md)  [AUTOMATED]
        └─> Agent reads draft against review checklist
        └─> Agent runs: SEO check, readability, AI detection, content quality, brief compliance
        └─> Agent produces: structured review report (list of issues and fixes needed)
                          ↓
STEP 4: Agent applies fixes and delivers revised draft  [AUTOMATED]
        └─> Agent uses review report to fix issues
        └─> Agent rewrites any flagged sections
        └─> Agent re-checks and confirms all fixes passed
        └─> Agent saves revised draft (overwrite original)
        └─> Agent notifies user: "Ready for human review"
                          ↓
STEP 5: Human does final gut-check (using review-checklist.md)  [MANUAL: 5 min]
        └─> Human does quick scan: hook, first paragraph, tone
        └─> Human skims: intro, one section, conclusion
        └─> Human checks: personality, examples, CTA alignment
        └─> Human flags any red flags or minor fixes
        └─> Approval decision: PASS ✅ / NEEDS MINOR FIXES ⚠️ / NEEDS MAJOR REWRITE ❌
                          ↓
STEP 6: Publish or iterate
        └─> If PASS: Move draft to published/{slug}.md, deploy to site
        └─> If NEEDS MINOR: Send back to agent with quick fixes, repeat step 3-5
        └─> If NEEDS MAJOR: Send back to agent with detailed feedback, restart from step 2
```

---

## Key Files in This Workflow

| File | Purpose | Used By | When |
|---|---|---|---|
| `briefs/guide-brief-template.md` | Reusable template for guide briefs | Human author | STEP 1 |
| `briefs/{slug}-brief.md` | Completed brief for a specific guide | Agent + Human | STEPS 2-5 |
| `.github/copilot-instructions.md` | System prompt for writing | Agent | STEP 2 |
| `drafts/{slug}.md` | Draft guide (work-in-progress) | Agent + Human | STEPS 2-4 |
| `.github/review-instructions.md` | System prompt for agent self-review | Agent | STEP 3-4 |
| `review-checklist.md` | Final human review checklist | Human | STEP 5 |
| `published/{slug}.md` | Final, published guide | Website | STEP 6 |

---

## What Each Guide System File Contains

### `.github/copilot-instructions.md`
- Your role and goals
- 8 required pieces of info to gather before writing
- Humanization rules (the most important part)
- Guide structure template (H1, intro, body, conclusion, etc.)
- Writing rules (readability targets, SEO, word choice, formatting)
- Self-check before delivering

### `.github/review-instructions.md`
- When and how to review a guide
- Five detailed review checks:
  1. SEO compliance (keywords, links, structure)
  2. Readability analysis (Flesch score, sentence length, transitions)
  3. AI detection risk (banned words, sentence variation, structure)
  4. Content quality (actionable, specific, relevant)
  5. Brief compliance (matches all requirements)
- Structured review report format to output

### `review-checklist.md`
- Quick 5-minute human gut-check
- Red flags that stop publishing
- Quick fixes if needed
- Approval decision: PASS / NEEDS MINOR / NEEDS MAJOR REWRITE

---

## Common Workflows

### I have a brief, write the guide
1. Place brief in `briefs/my-topic-brief.md`
2. Tell agent: "Read my-topic-brief.md and write the guide"
3. Agent does steps 2-4 automatically
4. You review using `review-checklist.md` (STEP 5)
5. Approve and move to `published/`

### I want to edit a draft
1. Agent applies your feedback and re-runs STEP 3-4
2. You re-check using `review-checklist.md`
3. Repeat until PASS ✅

### I want to skip the agent review and go straight to human
- Tell agent: "Write draft, skip automated review" (STEP 2 only)
- You do both review-instructions and review-checklist yourself
- Trade-off: faster, but higher risk of misses

---

## Tips

**For authors (STEP 1):**
- Fill out the brief completely. Don't skip the "Unique Angle" field — it's the secret sauce.
- Be specific about audience and intent. Vagueness leads to vague guides.

**For the agent (STEPS 2-4):**
- Follow the system prompt religiously. It exists for a reason (AI detection, readability, SEO).
- The humanization rules are non-negotiable. Your guide must pass AI detectors.
- Don't argue with the review report. Fix every flagged issue.

**For humans (STEP 5):**
- This is your last chance to catch tone/voice mismatches.
- If something feels "off," it probably is. Trust your gut.
- Red flags are blockers. Everything else can be minor fixes.

---

## Metrics to Track

Over time, measure:
- **Agent compliance**: % of drafts passing review without major issues
- **Human approval rate**: % of revised drafts that pass STEP 5 on first try
- **Time to publish**: Days from brief to published guide
- **Content performance**: Search rankings, CTR, time on page

