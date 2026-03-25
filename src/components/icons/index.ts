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
export { Package } from './Package';
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
