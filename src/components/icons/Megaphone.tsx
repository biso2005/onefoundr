interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  strokeWidth?: number;
}

export function Megaphone({
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
      {/* Megaphone body */}
      <path
        d="M12 20V28C12 30.2091 13.7909 32 16 32H28C31.3137 32 34 29.3137 34 26V22C34 18.6863 31.3137 16 28 16H16C13.7909 16 12 17.7909 12 20Z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Sound waves */}
      <path
        d="M36 18C37.1046 18 38 17.1046 38 16C38 14.8954 37.1046 14 36 14"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M36 26C37.1046 26 38 26.8954 38 28C38 29.1046 37.1046 30 36 30"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Handle */}
      <rect
        x="8"
        y="22"
        width="4"
        height="4"
        rx="1"
        fill={color}
      />
    </svg>
  );
}

Megaphone.displayName = 'Megaphone';
