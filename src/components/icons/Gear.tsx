interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  strokeWidth?: number;
}

export function Gear({
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
      {/* Outer gear teeth */}
      <circle
        cx="24"
        cy="24"
        r="16"
        stroke={color}
        strokeWidth={strokeWidth}
        fill="none"
      />
      {/* Gear teeth - top */}
      <rect
        x="22"
        y="6"
        width="4"
        height="3"
        rx="1"
        fill={color}
      />
      {/* Gear teeth - right */}
      <rect
        x="39"
        y="22"
        width="3"
        height="4"
        rx="1"
        fill={color}
      />
      {/* Gear teeth - bottom */}
      <rect
        x="22"
        y="39"
        width="4"
        height="3"
        rx="1"
        fill={color}
      />
      {/* Gear teeth - left */}
      <rect
        x="6"
        y="22"
        width="3"
        height="4"
        rx="1"
        fill={color}
      />
      {/* Inner circle */}
      <circle
        cx="24"
        cy="24"
        r="6"
        stroke={color}
        strokeWidth={strokeWidth}
        fill="none"
      />
      {/* Center dot */}
      <circle
        cx="24"
        cy="24"
        r="2"
        fill={color}
      />
    </svg>
  );
}

Gear.displayName = 'Gear';
