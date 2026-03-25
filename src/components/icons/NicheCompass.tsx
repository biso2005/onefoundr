interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  strokeWidth?: number;
}

export function NicheCompass({
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
      {/* Outer compass ring */}
      <circle
        cx="24"
        cy="24"
        r="18"
        stroke="#2D3436"
        strokeWidth={strokeWidth}
      />
      {/* Center point */}
      <circle cx="24" cy="24" r="4" fill={color} />
      {/* North indicator */}
      <path
        d="M24 14V20"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      {/* South indicator */}
      <path
        d="M24 28V34"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      {/* West indicator */}
      <path
        d="M14 24H20"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      {/* East indicator */}
      <path
        d="M28 24H34"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
    </svg>
  );
}

NicheCompass.displayName = 'NicheCompass';
