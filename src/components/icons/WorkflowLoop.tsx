interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  strokeWidth?: number;
}

export function WorkflowLoop({
  size = 48,
  color = '#00B894',
  className = '',
  strokeWidth = 3,
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
      {/* Starting process box */}
      <rect
        x="6"
        y="6"
        width="14"
        height="14"
        rx="2"
        fill="#2D3436"
      />
      {/* Ending/output process box */}
      <rect
        x="28"
        y="28"
        width="14"
        height="14"
        rx="2"
        fill={color}
      />
      {/* Forward flow path - from first to second box */}
      <path
        d="M20 13H35C37.2091 13 39 14.7909 39 17V28"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      {/* Backward/return flow path - closing the loop */}
      <path
        d="M28 35H13C10.7909 35 9 33.2091 9 31V20"
        stroke="#2D3436"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
    </svg>
  );
}

WorkflowLoop.displayName = 'WorkflowLoop';
