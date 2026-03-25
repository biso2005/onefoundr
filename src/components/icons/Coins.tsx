interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  strokeWidth?: number;
}

export function Coins({
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
      {/* Back coin */}
      <circle
        cx="16"
        cy="28"
        r="8"
        stroke={color}
        strokeWidth={strokeWidth}
        fill="none"
      />
      {/* Back coin center */}
      <circle
        cx="16"
        cy="28"
        r="3"
        fill={color}
      />
      {/* Front coin */}
      <circle
        cx="28"
        cy="18"
        r="10"
        stroke={color}
        strokeWidth={strokeWidth}
        fill="none"
      />
      {/* Front coin center */}
      <circle
        cx="28"
        cy="18"
        r="4"
        fill={color}
      />
      {/* Currency symbol - dollar sign */}
      <path
        d="M28 14V22M26 16H30C30.5523 16 31 16.4477 31 17V19C31 19.5523 30.5523 20 30 20H26C25.4477 20 25 20.4477 25 21V23C25 23.5523 25.4477 24 26 24H30"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

Coins.displayName = 'Coins';
