interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  strokeWidth?: number;
}

export function Stack({
  size = 48,
  color = '#00B894',
  className = '',
  strokeWidth = 2.5,
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
      {/* Top layer */}
      <rect
        x="10"
        y="12"
        width="28"
        height="8"
        rx="2"
        stroke={color}
        strokeWidth={strokeWidth}
        fill="none"
      />
      {/* Middle layer */}
      <rect
        x="10"
        y="22"
        width="28"
        height="8"
        rx="2"
        stroke={color}
        strokeWidth={strokeWidth}
        fill="none"
      />
      {/* Bottom layer */}
      <rect
        x="10"
        y="32"
        width="28"
        height="8"
        rx="2"
        stroke={color}
        strokeWidth={strokeWidth}
        fill="none"
      />
      {/* Connector dots */}
      <circle cx="14" cy="28" r="1.5" fill={color} />
      <circle cx="14" cy="38" r="1.5" fill={color} />
    </svg>
  );
}

Stack.displayName = 'Stack';
