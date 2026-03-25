interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  strokeWidth?: number;
}

export function Wrench({
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
      {/* Wrench handle */}
      <path
        d="M10 32L28 14"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Wrench head circle */}
      <circle
        cx="32"
        cy="10"
        r="5"
        stroke={color}
        strokeWidth={strokeWidth}
        fill="none"
      />
      {/* Wrench jaw */}
      <path
        d="M28 14C28 14 26 16 24 18"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Bottom adjustment */}
      <rect
        x="8"
        y="38"
        width="6"
        height="3"
        rx="1"
        fill={color}
      />
    </svg>
  );
}

Wrench.displayName = 'Wrench';
