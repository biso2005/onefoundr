export type SalesTrack = 'services' | 'products' | 'local' | 'everyone';

export interface SalesTopic {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  track: SalesTrack;
  order: number;
  hasArticle: boolean;
}

export const salesTopics: SalesTopic[] = [
  {
    slug: 'selling-with-zero-proof',
    title: 'Selling With Zero Proof',
    subtitle: 'How to close clients when you have no portfolio or testimonials',
    description: 'You have no case studies, no testimonials, and no portfolio. Here is how to land paying clients anyway.',
    track: 'services',
    order: 1,
    hasArticle: false,
  },
  {
    slug: 'finding-clients',
    title: 'Finding Clients Without Cold DMs',
    subtitle: '7 ways to get your first 10 clients without spamming strangers',
    description: 'Practical outreach methods that work for solo service providers who refuse to spam people on LinkedIn.',
    track: 'services',
    order: 2,
    hasArticle: false,
  },
  {
    slug: 'sales-conversation',
    title: 'The Sales Conversation',
    subtitle: 'What to say when someone asks what you do',
    description: 'A natural conversation framework that replaces awkward scripts. Works on calls, in person, and in DMs.',
    track: 'services',
    order: 3,
    hasArticle: false,
  },
  {
    slug: 'pricing-conversations',
    title: 'Talking About Money',
    subtitle: 'The framework for discussing fees without cringing',
    description: 'How to confidently state your price, handle objections, and stop apologising for charging what you are worth.',
    track: 'services',
    order: 4,
    hasArticle: false,
  },
  {
    slug: 'proposals',
    title: 'The One-Page Proposal',
    subtitle: 'Stop writing proposals nobody reads',
    description: 'The only proposal template you need. One page, clear scope, clear price, clear next step.',
    track: 'services',
    order: 5,
    hasArticle: false,
  },
  {
    slug: 'follow-up',
    title: 'Following Up Without Being Annoying',
    subtitle: 'Stay in touch without feeling like a stalker',
    description: 'The follow-up system for solopreneurs. When to chase, what to say, and when to walk away.',
    track: 'services',
    order: 6,
    hasArticle: false,
  },
  {
    slug: 'repeat-and-referrals',
    title: 'Repeat Business & Referrals',
    subtitle: 'Never start from zero again',
    description: 'How to get existing clients to come back, spend more, and send you their friends.',
    track: 'services',
    order: 7,
    hasArticle: false,
  },
  {
    slug: 'selling-products-online',
    title: 'Selling Products Online',
    subtitle: 'Landing pages, pricing, and conversion for physical and digital products',
    description: 'How to set up a product page that converts. Covers physical goods, digital downloads, and everything in between.',
    track: 'products',
    order: 1,
    hasArticle: false,
  },
  {
    slug: 'marketplace-selling',
    title: 'Marketplace & Platform Selling',
    subtitle: 'How to sell on Etsy, Amazon, Airbnb, Gumroad without getting buried',
    description: 'Optimise your listings, get reviews, and stand out on crowded platforms.',
    track: 'products',
    order: 2,
    hasArticle: false,
  },
  {
    slug: 'launch-strategy',
    title: 'Launch Strategy',
    subtitle: 'How to launch to an audience of zero and still make sales',
    description: 'The step-by-step launch playbook for solopreneurs. Works for products, services, and courses.',
    track: 'products',
    order: 3,
    hasArticle: false,
  },
  {
    slug: 'getting-local-clients',
    title: 'Getting Local Clients',
    subtitle: 'Facebook groups, Google Business, referral partners, and word of mouth',
    description: 'How to fill your calendar using local marketing methods. No website required. No paid ads needed.',
    track: 'local',
    order: 1,
    hasArticle: false,
  },
  {
    slug: 'referral-network',
    title: 'Building a Referral Network',
    subtitle: 'The partnership playbook for local solopreneurs',
    description: 'Get complementary businesses to send you clients. Vets recommend petsitters. Wedding planners recommend bakers. Build your network.',
    track: 'local',
    order: 2,
    hasArticle: false,
  },
  {
    slug: 'testimonials',
    title: 'Getting Testimonials That Sell For You',
    subtitle: 'The system for collecting proof that does your selling for you',
    description: 'How to ask for testimonials, what questions to use, and where to put them so they actually drive sales.',
    track: 'everyone',
    order: 1,
    hasArticle: false,
  },
  {
    slug: 'pricing-strategy',
    title: 'How to Set Your Prices',
    subtitle: 'Cost-based, value-based, hourly, project, subscription — which fits you',
    description: 'The complete pricing guide. How to calculate your prices, which model to use, and when to raise them.',
    track: 'everyone',
    order: 2,
    hasArticle: false,
  },
  {
    slug: 'keeping-clients',
    title: 'Keeping Clients',
    subtitle: 'Getting a new client costs 5x more than keeping one',
    description: 'The simple retention system for making clients stay longer, spend more, and never want to leave.',
    track: 'everyone',
    order: 3,
    hasArticle: false,
  },
];

export const trackInfo: Record<
  SalesTrack,
  {
    title: string;
    subtitle: string;
    emoji: string;
    badgeColor: string;
  }
> = {
  services: {
    title: 'Selling Services',
    subtitle: 'For freelancers, consultants, coaches, and anyone who sells their time and expertise',
    emoji: '🤝',
    badgeColor: 'bg-blue-100 text-blue-700',
  },
  products: {
    title: 'Selling Products',
    subtitle: 'For makers, creators, and anyone selling physical or digital products',
    emoji: '📦',
    badgeColor: 'bg-purple-100 text-purple-700',
  },
  local: {
    title: 'Selling Locally',
    subtitle: 'For solopreneurs who serve local customers face to face',
    emoji: '📍',
    badgeColor: 'bg-amber-100 text-amber-700',
  },
  everyone: {
    title: 'For Everyone',
    subtitle: 'Essential sales skills no matter what you sell',
    emoji: '⭐',
    badgeColor: 'bg-emerald-100 text-emerald-700',
  },
};
