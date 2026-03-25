interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  strokeWidth?: number;
}

export default function Icon({
  size = 48,
  color = '#00B894',
  className = '',
  strokeWidth = 3,
  ...props
}: IconProps & React.SVGProps<SVGSVGElement>) {
  return {
    size,
    color,
    className,
    strokeWidth,
    ...props,
  };
}

// Helper function to create icons consistently
export function createIcon(
  svgContent: (color: string, strokeWidth: number) => React.ReactNode,
  displayName: string
) {
  const Component = ({
    size = 48,
    color = '#00B894',
    className = '',
    strokeWidth = 3,
  }: IconProps) => {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
      >
        {svgContent(color, strokeWidth)}
      </svg>
    );
  };

  Component.displayName = displayName;
  return Component;
}
