interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  strokeWidth?: number;
}

export function Lightbulb({
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
      {/* Bulb */}
      <path
        d="M24 8C18.48 8 14 12.48 14 18C14 22.64 16.88 26.52 21 27.6V32H27V27.6C31.12 26.52 34 22.64 34 18C34 12.48 29.52 8 24 8Z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Base */}
      <rect
        x="20"
        y="32"
        width="8"
        height="3"
        rx="1"
        fill={color}
      />
      <rect
        x="18"
        y="36"
        width="12"
        height="2"
        rx="1"
        fill={color}
      />
    </svg>
  );
}

Lightbulb.displayName = 'Lightbulb';
