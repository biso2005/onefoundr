interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  strokeWidth?: number;
}

export function AutomationGear({
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
      {/* Central hub - AI/automation core */}
      <path
        d="M32 24C32 28.4183 28.4183 32 24 32C19.5817 32 16 28.4183 16 24C16 19.5817 19.5817 16 24 16C28.4183 16 32 19.5817 32 24Z"
        fill={color}
      />
      {/* Radiating tool connections - 8 directions */}
      <path
        d="M24 10V4M24 44V38M38 24H44M4 24H10M33.9 14.1L38.1 9.9M9.9 38.1L14.1 33.9M33.9 33.9L38.1 38.1M9.9 9.9L14.1 14.1"
        stroke="#2D3436"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
    </svg>
  );
}

AutomationGear.displayName = 'AutomationGear';
