interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  strokeWidth?: number;
}

export function StackingBlocks({
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
      {/* Bottom layer - base foundation */}
      <rect
        x="8"
        y="32"
        width="32"
        height="8"
        rx="2"
        fill="#2D3436"
      />
      {/* Middle layer - value add */}
      <rect
        x="12"
        y="20"
        width="24"
        height="8"
        rx="2"
        fill={color}
      />
      {/* Top layer - premium tier */}
      <rect
        x="16"
        y="8"
        width="16"
        height="8"
        rx="2"
        stroke="#2D3436"
        strokeWidth={strokeWidth}
        fill="none"
      />
    </svg>
  );
}

StackingBlocks.displayName = 'StackingBlocks';
