interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  strokeWidth?: number;
}

export function ValueCheck({
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
      {/* Shield background */}
      <path
        d="M24 6L12 12V22C12 32 24 40 24 40C24 40 36 32 36 22V12L24 6Z"
        stroke={color}
        strokeWidth={strokeWidth}
        fill="none"
      />
      {/* Checkmark */}
      <path
        d="M18 24L22 28L30 18"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

ValueCheck.displayName = 'ValueCheck';
