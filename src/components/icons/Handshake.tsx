interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  strokeWidth?: number;
}

export function Handshake({
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
      {/* Left hand */}
      <path
        d="M8 24L12 18V26C12 28.2091 13.7909 30 16 30H22"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Right hand */}
      <path
        d="M40 24L36 18V26C36 28.2091 34.2091 30 32 30H26"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Handshake middle */}
      <path
        d="M22 30C24 32 26 30 28 28"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Connection point circle */}
      <circle
        cx="24"
        cy="28"
        r="2"
        fill={color}
      />
    </svg>
  );
}

Handshake.displayName = 'Handshake';
