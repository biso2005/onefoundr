interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  strokeWidth?: number;
}

export function PricingTag({
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
      {/* Price tag shape */}
      <path
        d="M8 14C8 12.8954 8.89543 12 10 12H24L34 22L24 32H10C8.89543 32 8 31.1046 8 30V14Z"
        stroke={color}
        strokeWidth={strokeWidth}
        fill="none"
      />
      {/* Price hole */}
      <circle
        cx="14"
        cy="22"
        r="2"
        fill={color}
      />
      {/* Dollar sign for pricing */}
      <path
        d="M24 18V26M22 20H26C26.5523 20 27 20.4477 27 21V23C27 23.5523 26.5523 24 26 24H22C21.4477 24 21 24.4477 21 25V27C21 27.5523 21.4477 28 22 28H26"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

PricingTag.displayName = 'PricingTag';
