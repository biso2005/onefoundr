export const SITE_NAME = "OneFoundr";
export const SITE_TAGLINE = "Build Solo. Build Smart.";
export const SITE_URL = "https://onefoundr.com";
export const SITE_DESCRIPTION =
  "Practical guides, tools, and systems for solopreneurs who want to build profitable businesses without a team.";

// Category emoji mapping
export const CATEGORY_EMOJI: Record<string, string> = {
  start: '💡',
  offer: '📦',
  marketing: '📣',
  sales: '🤝',
  systems: '⚙️',
  tools: '🛠️',
  mindset: '🧠',
  money: '💰',
  growth: '📈',
  productivity: '⏰',
};

// Valid content categories for dynamic routes
export const VALID_CONTENT_CATEGORIES = ['start', 'offer', 'marketing', 'sales', 'systems', 'tools', 'mindset'] as const;

// Reserved routes that should NOT be caught by dynamic routes
export const RESERVED_ROUTES = ['about', 'start-here', 'newsletter', 'resources', 'stories', 'community', 'contact', 'advertise', 'write-for-us', 'privacy', 'terms', 'money', 'growth', 'productivity'] as const;

export const NAV_LINKS = [
  { name: "Start", href: "/start" },
  { name: "Offer", href: "/offer" },
  { name: "Marketing", href: "/marketing" },
  { name: "Sales", href: "/sales" },
  { name: "Systems", href: "/systems" }
];

export const SECONDARY_NAV_LINKS = [
  { name: "Money", href: "/money" },
  { name: "Growth", href: "/growth" },
  { name: "Productivity", href: "/productivity" },
  { name: "Mindset", href: "/mindset" }
];

// TODO: Create these pages
// - /stories — Founder success stories and case studies
// - /templates — Free templates and tools library
// - /community — Community forum or Slack channel
// - /contact — Contact form and support page
// - /advertise — Advertising opportunities and partnerships
// - /write-for-us — Guest post submission guidelines

export const FOOTER_LINKS = {
  Categories: NAV_LINKS,
  Resources: [
    { name: "Stories (Coming Soon)", href: "/start-here" },
    { name: "Templates (Coming Soon)", href: "/start-here" },
    { name: "Newsletter", href: "/newsletter" },
    { name: "Community (Coming Soon)", href: "/start-here" }
  ],
  Company: [
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Advertise (Coming Soon)", href: "/start-here" },
    { name: "Write for Us (Coming Soon)", href: "/start-here" }
  ],
  Legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" }
  ]
};
