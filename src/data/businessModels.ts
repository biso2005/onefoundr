export type Scalability = 'Low' | 'Low–Medium' | 'Medium' | 'Medium–High' | 'High' | 'Very High';

export interface BusinessModel {
  slug: string;
  name: string;
  description: string;
  revenueRange: string;
  timeToFirstRevenue: string;
  scalability: Scalability;
  bestFor: string;
  icon: string;
  hasArticle: boolean;
}

export const businessModels: BusinessModel[] = [
  {
    slug: 'freelancing',
    name: 'Freelancing',
    description: 'Sell your skills and time directly to clients on a project or hourly basis.',
    revenueRange: '£2K–£10K/month',
    timeToFirstRevenue: '1–2 weeks',
    scalability: 'Low',
    bestFor: 'Skilled professionals who need income fast',
    icon: 'Pencil',
    hasArticle: true,
  },
  {
    slug: 'consulting',
    name: 'Consulting',
    description: 'Advise businesses or individuals based on your industry expertise and experience.',
    revenueRange: '£3K–£15K/month',
    timeToFirstRevenue: '2–4 weeks',
    scalability: 'Low–Medium',
    bestFor: 'Experts with deep industry experience',
    icon: 'Briefcase',
    hasArticle: true,
  },
  {
    slug: 'productized-services',
    name: 'Productized Services',
    description: 'Package your service into a fixed-scope, fixed-price offering that is repeatable and predictable.',
    revenueRange: '£3K–£20K/month',
    timeToFirstRevenue: '2–3 weeks',
    scalability: 'Medium',
    bestFor: 'People who want repeatable, predictable work',
    icon: 'Package',
    hasArticle: true,
  },
  {
    slug: 'digital-products',
    name: 'Digital Products',
    description: 'Create and sell courses, templates, ebooks, or other digital assets. Build once, sell forever.',
    revenueRange: '£500–£20K/month',
    timeToFirstRevenue: '4–8 weeks',
    scalability: 'High',
    bestFor: 'Teachers, writers, and designers',
    icon: 'Download',
    hasArticle: true,
  },
  {
    slug: 'saas-software',
    name: 'SaaS / Software',
    description: 'Build a software tool or app and charge users a monthly subscription.',
    revenueRange: '£1K–£50K/month',
    timeToFirstRevenue: '2–6 months',
    scalability: 'Very High',
    bestFor: 'Developers or no-code builders',
    icon: 'Code',
    hasArticle: false,
  },
  {
    slug: 'content-media',
    name: 'Content & Media',
    description: 'Build an audience through a blog, newsletter, podcast, or YouTube channel. Monetise with ads, affiliates, and sponsorships.',
    revenueRange: '£500–£15K/month',
    timeToFirstRevenue: '3–6 months',
    scalability: 'High',
    bestFor: 'Writers, creators, and personality-driven founders',
    icon: 'FileText',
    hasArticle: false,
  },
  {
    slug: 'coaching-teaching',
    name: 'Coaching & Teaching',
    description: 'Help people achieve a specific transformation through 1:1 or group sessions.',
    revenueRange: '£2K–£15K/month',
    timeToFirstRevenue: '1–3 weeks',
    scalability: 'Medium',
    bestFor: 'People with transformational expertise',
    icon: 'Users',
    hasArticle: false,
  },
  {
    slug: 'agency-of-one',
    name: 'Agency of One',
    description: 'Position yourself as an agency but operate solo, using systems and contractors for overflow.',
    revenueRange: '£5K–£25K/month',
    timeToFirstRevenue: '2–4 weeks',
    scalability: 'Medium–High',
    bestFor: 'Generalists who can manage projects and contractors',
    icon: 'Building',
    hasArticle: false,
  },
];

export interface ModelScenario {
  question: string;
  description: string;
  recommendedModels: string[];
}

export const modelScenarios: ModelScenario[] = [
  {
    question: 'I need income this month',
    description: 'You need to start earning quickly with minimal setup time.',
    recommendedModels: ['freelancing', 'coaching-teaching'],
  },
  {
    question: 'I want predictable recurring revenue',
    description: 'You want to know what is coming in every month without constantly chasing new clients.',
    recommendedModels: ['productized-services', 'saas-software'],
  },
  {
    question: 'I want to earn while I sleep',
    description: 'You want to build something once and generate passive or semi-passive income.',
    recommendedModels: ['digital-products', 'content-media'],
  },
  {
    question: 'I want maximum revenue as one person',
    description: 'You want to push your solo income ceiling as high as possible.',
    recommendedModels: ['agency-of-one', 'consulting'],
  },
];

export const ideaCategories = businessModels.map(m => m.slug);

export const scalabilityValues: Scalability[] = ['Low', 'Low–Medium', 'Medium', 'Medium–High', 'High', 'Very High'];
