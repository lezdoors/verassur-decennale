interface LogoProps {
  className?: string;
  variant?: "light" | "dark";
}

export function Logo({ className = "", variant = "dark" }: LogoProps) {
  const textColor = variant === "light" ? "#FFFFFF" : "#171717";
  const accentColor = variant === "light" ? "#FFFFFF" : "#171717";

  return (
    <svg
      viewBox="0 0 180 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="AssureNao"
    >
      {/* Mark: AN monogram in a square */}
      <rect
        x="0"
        y="2"
        width="28"
        height="28"
        rx="6"
        fill={accentColor}
      />
      <text
        x="14"
        y="22"
        textAnchor="middle"
        fontFamily="Inter, system-ui, sans-serif"
        fontWeight="800"
        fontSize="16"
        fill={variant === "light" ? "#171717" : "#FFFFFF"}
        letterSpacing="-0.5"
      >
        AN
      </text>

      {/* Wordmark */}
      <text
        x="36"
        y="22"
        fontFamily="Inter, system-ui, sans-serif"
        fontWeight="700"
        fontSize="20"
        fill={textColor}
        letterSpacing="-0.5"
      >
        AssureNao
      </text>
    </svg>
  );
}
