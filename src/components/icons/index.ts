/**
 * OneFoundr Icon System
 * 
 * Unified SVG icons following the OneFoundr design system:
 * - Color: #00B894 (Mint Green accent)
 * - Stroke: 2.5-3px for clean, rounded lines
 * - Viewbox: 0 0 48 48 for consistent sizing
 * 
 * Usage:
 * import { GrowthRocket, Package, Megaphone } from '@/components/icons';
 * 
 * <GrowthRocket size={32} color="#00B894" />
 */

export { GrowthRocket } from './GrowthRocket';
export { Lightbulb } from './Lightbulb';
export { NicheCompass } from './NicheCompass';
export { Package } from './Package';
export { Stack } from './Stack';
export { StackingBlocks } from './StackingBlocks';
export { PricingTag } from './PricingTag';
export { PricingHouse } from './PricingHouse';
export { ValueCheck } from './ValueCheck';
export { ContentSignal } from './ContentSignal';
export { Megaphone } from './Megaphone';
export { Handshake } from './Handshake';
export { Gear } from './Gear';
export { Wrench } from './Wrench';
export { Coins } from './Coins';

// Icon mapping by cluster
export const CLUSTER_ICONS = {
  start: 'Lightbulb',
  offer: 'Package',
  marketing: 'Megaphone',
  sales: 'Handshake',
  systems: 'Gear',
  tools: 'Wrench',
  money: 'Coins',
  growth: 'GrowthRocket',
} as const;

// Additional offer-related icons
export const OFFER_ICONS = {
  niche: 'NicheCompass',
  stack: 'Stack',
  stackingBlocks: 'StackingBlocks',
  pricing: 'PricingTag',
  pricingModels: 'PricingHouse',
  value: 'ValueCheck',
} as const;

// Marketing-related icons
export const MARKETING_ICONS = {
  contentStrategy: 'ContentSignal',
} as const;
