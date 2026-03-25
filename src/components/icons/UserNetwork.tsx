interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  strokeWidth?: number;
}

export function UserNetwork({
  size = 48,
  color = '#00B894',
  className = '',
  strokeWidth = 2,
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
      {/* Central leader/magnet node */}
      <circle
        cx="24"
        cy="14"
        r="6"
        fill={color}
      />
      {/* Left audience member */}
      <circle
        cx="12"
        cy="34"
        r="5"
        fill="#2D3436"
      />
      {/* Right audience member */}
      <circle
        cx="36"
        cy="34"
        r="5"
        fill="#2D3436"
      />
      {/* Connection from center to left */}
      <path
        d="M16 28L20 22"
        stroke="#2D3436"
        strokeWidth={strokeWidth}
      />
      {/* Connection from center to right */}
      <path
        d="M32 28L28 22"
        stroke="#2D3436"
        strokeWidth={strokeWidth}
      />
      {/* Horizontal connection between audience members */}
      <path
        d="M18 34H30"
        stroke="#2D3436"
        strokeWidth={strokeWidth}
      />
    </svg>
  );
}

UserNetwork.displayName = 'UserNetwork';
