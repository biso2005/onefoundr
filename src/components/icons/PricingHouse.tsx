interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  strokeWidth?: number;
}

export function PricingHouse({
  size = 48,
  color = '#00B894',
  className = '',
  strokeWidth = 3,
}: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* House structure - pricing foundation */}
      <path
        d="M8 12V36C8 38.2091 9.79086 40 12 40H36C38.2091 40 40 38.2091 40 36V12L24 6L8 12Z"
        stroke="#2D3436"
        strokeWidth={strokeWidth}
        fill="none"
      />
      {/* Price indicator - dot at top */}
      <circle
        cx="24"
        cy="16"
        r="3"
        fill={color}
      />
      {/* Approval checkmark */}
      <path
        d="M18 28L22 32L30 24"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

PricingHouse.displayName = 'PricingHouse';
