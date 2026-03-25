interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  strokeWidth?: number;
}

export function ContentSignal({
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
      {/* Content source point */}
      <circle
        cx="10"
        cy="38"
        r="4"
        fill={color}
      />
      {/* Primary content wave/signal */}
      <path
        d="M10 28C16.6274 28 22 22.6274 22 16"
        stroke="#2D3436"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      {/* Secondary reach wave */}
      <path
        d="M10 18C21.0457 18 30 9.04569 30 0"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      {/* Content platform/distribution base */}
      <path
        d="M10 38H38C40.2091 38 42 36.2091 42 34V10"
        stroke="#2D3436"
        strokeWidth={strokeWidth}
      />
    </svg>
  );
}

ContentSignal.displayName = 'ContentSignal';
