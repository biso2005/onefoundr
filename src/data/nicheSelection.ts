export interface NicheExample {
  slug: string;
  name: string;
  description: string;
  skill: string;
  audience: string;
  pain: string;
  revenueRange: string;
  rating: 'Excellent' | 'Good' | 'Avoid';
}

export const nicheExamples: NicheExample[] = [
  {
    slug: 'web-design-coffee-shops',
    name: 'Web design for independent coffee shops',
    description: 'Build simple websites for local independent coffee shops and cafes.',
    skill: 'Web design',
    audience: 'Independent coffee shop owners',
    pain: 'Their website looks terrible and they get no bookings.',
    revenueRange: '£2K–£5K/month',
    rating: 'Excellent',
  },
  {
    slug: 'bookkeeping-tradespeople',
    name: 'Bookkeeping for electricians and plumbers',
    description: 'Manage accounts and invoices for self employed tradespeople.',
    skill: 'Bookkeeping',
    audience: 'Sole trader electricians and plumbers',
    pain: 'They hate paperwork and always leave it until the last minute.',
    revenueRange: '£2.5K–£6K/month',
    rating: 'Excellent',
  },
  {
    slug: 'copywriting-saas',
    name: 'Copywriting for B2B SaaS startups',
    description: 'Write website copy and sales pages for early stage SaaS companies.',
    skill: 'Copywriting',
    audience: 'SaaS founders with 1-10 employees',
    pain: 'They can explain their product but nobody buys it.',
    revenueRange: '£3K–£8K/month',
    rating: 'Excellent',
  },
  {
    slug: 'social-media-dentists',
    name: 'Social media for private dentists',
    description: 'Manage Instagram and Facebook for private dental clinics.',
    skill: 'Social media',
    audience: 'Private dental practice owners',
    pain: 'They want more new patients but hate social media.',
    revenueRange: '£2K–£4K/month',
    rating: 'Good',
  },
  {
    slug: 'seo-freelancers',
    name: 'SEO for freelance writers',
    description: 'Help freelance writers get more clients through Google.',
    skill: 'SEO',
    audience: 'Freelance writers and copywriters',
    pain: 'They rely 100% on Upwork and referrals.',
    revenueRange: '£1.5K–£4K/month',
    rating: 'Good',
  },
  {
    slug: 'onboarding-freelance-designers',
    name: 'Client onboarding for freelance designers',
    description: 'Create templates and systems for freelance designers.',
    skill: 'Operations',
    audience: 'Freelance designers earning £3K+/month',
    pain: 'They are drowning in admin and client communication.',
    revenueRange: '£2K–£5K/month',
    rating: 'Excellent',
  },
  {
    slug: 'fitness-new-parents',
    name: 'Fitness coaching for new parents',
    description: '15 minute at home workout plans for people with a new baby.',
    skill: 'Fitness coaching',
    audience: 'Parents with children under 1 year old',
    pain: 'They have no time and no energy for the gym.',
    revenueRange: '£1.5K–£4K/month',
    rating: 'Excellent',
  },
  {
    slug: 'career-coaching-software-engineers',
    name: 'Career coaching for software engineers',
    description: 'Help senior engineers get promoted or change jobs.',
    skill: 'Career coaching',
    audience: 'Software engineers with 3-10 years experience',
    pain: 'They are underpaid and stuck but don\'t know how to leave.',
    revenueRange: '£3K–£7K/month',
    rating: 'Excellent',
  },
  {
    slug: 'web-design-general',
    name: 'Generalist web designer',
    description: 'Build websites for anyone who will pay you.',
    skill: 'Web design',
    audience: 'Everyone',
    pain: 'General need for websites',
    revenueRange: '£1K–£3K/month',
    rating: 'Good',
  },
  {
    slug: 'life-coaching-everyone',
    name: 'General life coach',
    description: 'Life coaching for anyone.',
    skill: 'Coaching',
    audience: 'Everyone',
    pain: 'General life problems',
    revenueRange: '£500–£2K/month',
    rating: 'Avoid',
  },
  {
    slug: 'marketing-agency-startups',
    name: 'Marketing for funded startups',
    description: 'Full service marketing for VC backed startups.',
    skill: 'Marketing',
    audience: 'VC funded startups',
    pain: 'They have budget but no time.',
    revenueRange: '£5K–£15K/month',
    rating: 'Avoid',
  },
  {
    slug: 'social-media-influencers',
    name: 'Social media management for influencers',
    description: 'Manage accounts for full time influencers.',
    skill: 'Social media',
    audience: 'Influencers with 100k+ followers',
    pain: 'They don\'t have time to post every day.',
    revenueRange: '£2K–£5K/month',
    rating: 'Good',
  },
];

export const nicheQuestions = [
  {
    question: 'Can you reach 100 of these people online this week?',
    explanation: 'If you can\'t easily find and message them, it\'s not a good niche.'
  },
  {
    question: 'Are they already paying someone for this?',
    explanation: 'If nobody is paying for a solution, there is no market.'
  },
  {
    question: 'Can one person deliver this solution?',
    explanation: 'If it requires a team, it\'s not a solopreneur niche.'
  },
  {
    question: 'Do they complain about this publicly?',
    explanation: 'Look for Reddit threads, Twitter rants, Facebook groups complaining about this problem.'
  },
  {
    question: 'Can you charge at least £500 for this?',
    explanation: 'Below this price point the economics don\'t work for solo founders.'
  },
];
