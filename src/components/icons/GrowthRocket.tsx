interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  strokeWidth?: number;
}

export function GrowthRocket({
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
      {/* Rocket body with launch trajectory */}
      <path
        d="M24 6V22M24 22L16 14M24 22L32 14"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Rocket flame/base */}
      <path
        d="M12 36C12 33.7909 13.7909 32 16 32H32C34.2091 32 36 33.7909 36 36V42H12V36Z"
        fill={color}
      />
      {/* Window */}
      <rect
        x="18"
        y="24"
        width="12"
        height="6"
        rx="2"
        stroke="#2D3436"
        strokeWidth="2"
      />
    </svg>
  );
}

GrowthRocket.displayName = 'GrowthRocket';
