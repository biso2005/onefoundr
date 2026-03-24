export interface CostItem {
  name: string;
  cost: string;
  note: string;
}

export interface SpendCategory {
  label: string;
  emoji: string;
  color: string;
  badgeColor: string;
  description: string;
  items: CostItem[];
}

export const spendCategories: SpendCategory[] = [
  {
    label: 'Spend This',
    emoji: '🟢',
    color: 'border-emerald-200',
    badgeColor: 'bg-emerald-100 text-emerald-700',
    description: 'These are genuinely essential. You cannot skip them.',
    items: [
      {
        name: 'Domain name',
        cost: '£10/year',
        note: 'Your online address. Get a .com or .co.uk from Namecheap or Porkbun.',
      },
      {
        name: 'Website (basic)',
        cost: '£0–£12/month',
        note: 'Carrd (£0–£5/month) or a free WordPress site. You do NOT need a custom site.',
      },
      {
        name: 'Email address',
        cost: '£0–£6/month',
        note: 'Zoho Mail free tier or Google Workspace at £5.20/month.',
      },
      {
        name: 'Invoicing tool',
        cost: '£0',
        note: 'Wave, Zoho Invoice, or PayPal invoicing. All free.',
      },
      {
        name: 'Basic contract template',
        cost: '£0',
        note: 'Free templates from AND CO or download from our template library.',
      },
    ],
  },
  {
    label: 'Maybe',
    emoji: '🟡',
    color: 'border-yellow-200',
    badgeColor: 'bg-yellow-100 text-yellow-700',
    description: 'Depends on your business type. Only buy if you actually need it.',
    items: [
      {
        name: 'Logo',
        cost: '£0–£50',
        note: 'Use Canva free or pay £20–£50 on Fiverr. Do NOT spend £500 on branding yet.',
      },
      {
        name: 'Email marketing tool',
        cost: '£0',
        note: 'Mailchimp, MailerLite, or Buttondown all have free tiers up to 500–1,000 subscribers.',
      },
      {
        name: 'Scheduling tool',
        cost: '£0',
        note: 'Calendly free tier is enough. Cal.com is free and open source.',
      },
      {
        name: 'Social media scheduler',
        cost: '£0',
        note: 'Buffer free tier. Or just post manually — you only need one platform.',
      },
      {
        name: 'Business cards',
        cost: '£15–£25',
        note: 'Only if you meet people in person. Vistaprint basic cards.',
      },
      {
        name: 'Professional insurance',
        cost: '£5–£15/month',
        note: 'Required for some industries. Check if yours needs it before buying.',
      },
    ],
  },
  {
    label: 'Do Not Spend This',
    emoji: '🔴',
    color: 'border-red-200',
    badgeColor: 'bg-red-100 text-red-700',
    description: 'These are the things that feel productive but waste your money before you have revenue.',
    items: [
      {
        name: 'Custom designed website',
        cost: '£1,000–£5,000',
        note: 'You do not need this until you are making consistent revenue. A simple landing page converts just as well.',
      },
      {
        name: 'Paid advertising',
        cost: '£any',
        note: 'Do not run ads until you have proven your offer converts organically first.',
      },
      {
        name: 'Office space or co-working',
        cost: '£100–£500/month',
        note: 'Work from home. A coffee shop costs £3.',
      },
      {
        name: 'Premium tools and subscriptions',
        cost: '£50–£200/month',
        note: 'Free tiers exist for almost everything. Only upgrade when you hit the limits.',
      },
      {
        name: 'Business coaching or courses',
        cost: '£500–£5,000',
        note: 'You are reading OneFoundr for free. That is enough to start.',
      },
      {
        name: 'LLC or Ltd company formation',
        cost: '£50–£200',
        note: 'Start as a sole trader. You can incorporate later when revenue justifies it.',
      },
      {
        name: 'Fancy equipment',
        cost: '£varies',
        note: 'Use what you already have. Your laptop and phone are enough.',
      },
    ],
  },
];

export interface BusinessTypeCost {
  slug: string;
  name: string;
  totalStartup: string;
  monthlyRunning: string;
  description: string;
  essentials: { tool: string; cost: string }[];
  modelLink: string;
  hasArticle: boolean;
}

export const businessTypeCosts: BusinessTypeCost[] = [
  {
    slug: 'freelancing',
    name: 'Freelancing',
    totalStartup: 'Under £50',
    monthlyRunning: '£0–£20/month',
    description: 'The cheapest business to start. You need a laptop, a portfolio, and the ability to send invoices.',
    essentials: [
      { tool: 'Portfolio site (Carrd)', cost: '£0–£5/month' },
      { tool: 'Invoicing (Wave)', cost: '£0' },
      { tool: 'Contract template', cost: '£0' },
    ],
    modelLink: '/start/business-models/freelancing',
    hasArticle: false,
  },
  {
    slug: 'consulting',
    name: 'Consulting',
    totalStartup: 'Under £100',
    monthlyRunning: '£10–£30/month',
    description: 'Slightly more than freelancing because you need professional positioning. Still very cheap.',
    essentials: [
      { tool: 'Simple website', cost: '£0–£12/month' },
      { tool: 'Email (Google Workspace)', cost: '£5.20/month' },
      { tool: 'Scheduling (Calendly)', cost: '£0' },
    ],
    modelLink: '/start/business-models/consulting',
    hasArticle: false,
  },
  {
    slug: 'productized-services',
    name: 'Productized Services',
    totalStartup: 'Under £100',
    monthlyRunning: '£10–£40/month',
    description: 'Same as freelancing plus a proper landing page and payment system.',
    essentials: [
      { tool: 'Landing page (Carrd or Framer)', cost: '£0–£12/month' },
      { tool: 'Payment (Stripe)', cost: '£0 (pay per transaction)' },
      { tool: 'Project management (Notion)', cost: '£0' },
    ],
    modelLink: '/start/business-models/productized-services',
    hasArticle: false,
  },
  {
    slug: 'digital-products',
    name: 'Digital Products',
    totalStartup: 'Under £50',
    monthlyRunning: '£0–£15/month',
    description: 'Create once, sell forever. Your time is the main investment, not money.',
    essentials: [
      { tool: 'Sales platform (Gumroad)', cost: '£0 (pay per sale)' },
      { tool: 'Design tool (Canva)', cost: '£0' },
      { tool: 'Email list (MailerLite)', cost: '£0' },
    ],
    modelLink: '/start/business-models/digital-products',
    hasArticle: false,
  },
  {
    slug: 'saas-software',
    name: 'SaaS / Software',
    totalStartup: 'Under £200',
    monthlyRunning: '£20–£50/month',
    description: 'The most expensive to start solo but still far cheaper than people think. No-code tools make this accessible.',
    essentials: [
      { tool: 'No-code platform (Bubble or Glide)', cost: '£0–£30/month' },
      { tool: 'Domain + hosting', cost: '£10–£20/month' },
      { tool: 'Payment (Stripe)', cost: '£0 (pay per transaction)' },
    ],
    modelLink: '/start/business-models/saas-software',
    hasArticle: false,
  },
  {
    slug: 'content-media',
    name: 'Content & Media',
    totalStartup: 'Under £50',
    monthlyRunning: '£0–£20/month',
    description: 'Start a blog, newsletter, or YouTube channel with almost zero upfront cost.',
    essentials: [
      { tool: 'Blog or newsletter (Substack or Ghost)', cost: '£0' },
      { tool: 'Domain name', cost: '£10/year' },
      { tool: 'Design (Canva)', cost: '£0' },
    ],
    modelLink: '/start/business-models/content-media',
    hasArticle: false,
  },
  {
    slug: 'coaching-teaching',
    name: 'Coaching & Teaching',
    totalStartup: 'Under £50',
    monthlyRunning: '£0–£20/month',
    description: 'One of the cheapest models. You need a way to book calls, take payment, and deliver sessions.',
    essentials: [
      { tool: 'Video calls (Zoom free)', cost: '£0' },
      { tool: 'Scheduling (Calendly)', cost: '£0' },
      { tool: 'Payment (Stripe or PayPal)', cost: '£0' },
    ],
    modelLink: '/start/business-models/coaching-teaching',
    hasArticle: false,
  },
  {
    slug: 'agency-of-one',
    name: 'Agency of One',
    totalStartup: 'Under £200',
    monthlyRunning: '£30–£80/month',
    description: 'The most expensive solo model because you need professional positioning and project management tools.',
    essentials: [
      { tool: 'Professional website', cost: '£0–£20/month' },
      { tool: 'Project management (Notion or ClickUp)', cost: '£0' },
      { tool: 'Professional email + CRM', cost: '£10–£30/month' },
    ],
    modelLink: '/start/business-models/agency-of-one',
    hasArticle: false,
  },
];

export interface MilestoneInvestment {
  milestone: string;
  description: string;
  investments: { item: string; cost: string; why: string }[];
}

export const reinvestmentPlan: MilestoneInvestment[] = [
  {
    milestone: 'First £1K month',
    description: 'You have proven the idea works. Now invest in efficiency.',
    investments: [
      { item: 'Professional email domain', cost: '£5/month', why: 'Credibility with clients' },
      { item: 'Accounting software (FreeAgent)', cost: '£12/month', why: 'Stop using spreadsheets for finances' },
      { item: 'One paid tool upgrade', cost: '£10–£30/month', why: 'Upgrade whichever free tool is holding you back most' },
    ],
  },
  {
    milestone: 'First £3K month',
    description: 'You have consistent income. Now invest in growth and systems.',
    investments: [
      { item: 'Proper website', cost: '£20–£50/month', why: 'Upgrade from Carrd to something more professional' },
      { item: 'Email marketing paid tier', cost: '£15–£30/month', why: 'You have an audience now. Nurture it.' },
      { item: 'Professional insurance', cost: '£10–£20/month', why: 'Protect yourself as revenue grows' },
      { item: 'Consider Ltd company', cost: '£50 one-off', why: 'Tax benefits start kicking in around this level' },
    ],
  },
  {
    milestone: 'First £5K month',
    description: 'You are running a real business. Now invest in scale and delegation.',
    investments: [
      { item: 'Automation tools (Zapier paid)', cost: '£20–£50/month', why: 'Automate repetitive tasks' },
      { item: 'Contractor for overflow work', cost: '£varies', why: 'Buy back your time on low-value tasks' },
      { item: 'Accountant', cost: '£50–£150/month', why: 'Your time is too valuable for tax returns now' },
      { item: 'Premium tools across the board', cost: '£50–£100/month', why: 'You can afford the best versions now' },
    ],
  },
];
