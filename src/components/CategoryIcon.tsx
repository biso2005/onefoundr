import {
  Lightbulb, Package, Megaphone, Handshake, Gear, AutomationGear, GrowthRocket
} from '@/components/icons';

const categoryConfig: Record<string, {
  icon: any;
  gradient: string;
  iconColor: string;
}> = {
  start: {
    icon: Lightbulb,
    gradient: 'from-emerald-50 to-teal-100',
    iconColor: 'text-emerald-600'
  },
  offer: {
    icon: Package,
    gradient: 'from-blue-50 to-indigo-100',
    iconColor: 'text-blue-600'
  },
  marketing: {
    icon: Megaphone,
    gradient: 'from-purple-50 to-violet-100',
    iconColor: 'text-purple-600'
  },
  sales: {
    icon: Handshake,
    gradient: 'from-amber-50 to-orange-100',
    iconColor: 'text-amber-600'
  },
  systems: {
    icon: Gear,
    gradient: 'from-slate-50 to-gray-200',
    iconColor: 'text-slate-600'
  },
  tools: {
    icon: AutomationGear,
    gradient: 'from-cyan-50 to-sky-100',
    iconColor: 'text-cyan-600'
  },
  growth: {
    icon: GrowthRocket,
    gradient: 'from-rose-50 to-pink-100',
    iconColor: 'text-rose-600'
  },
  mindset: {
    icon: Lightbulb,
    gradient: 'from-indigo-50 to-purple-100',
    iconColor: 'text-indigo-600'
  },
};

interface CategoryIconProps {
  category: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export function CategoryIcon({ category, size = 'md', className = '' }: CategoryIconProps) {
  const config = categoryConfig[category] || categoryConfig.start;
  const IconComponent = config.icon;

  const sizeClasses = {
    sm: 'h-32 w-full',
    md: 'h-48 w-full',
    lg: 'h-64 w-full',
  };

  const iconSizes = {
    sm: 32,
    md: 48,
    lg: 64,
  };

  return (
    <div className={`bg-gradient-to-br ${config.gradient} ${sizeClasses[size]} \
      rounded-xl flex items-center justify-center ${className}`}>
      <IconComponent
        size={iconSizes[size]}
        className={`${config.iconColor} opacity-60`}
      />
    </div>
  );
}

export { categoryConfig };
