import { useId } from "react";
import { cn } from "@/lib/utils";

/** Static asset for meta tags, email templates, etc. */
export const LOGO_SRC = "/sphereops-logo.svg";

export type BrandLogoVariant = "default" | "onDark";

type BrandLogoProps = {
  className?: string;
  /** Tailwind height utility, e.g. h-8, h-10 */
  heightClass?: string;
  /** `onDark` for navy/hero backgrounds; `default` for white/light headers */
  variant?: BrandLogoVariant;
};

const palette = {
  default: {
    sphere: "#0f172a",
    ops: "#2dd4bf",
    markTeal: "#14b8a6",
    markCyan: "#38bdf8",
    markNavy: "#0f172a",
    ring: "rgba(15,23,42,0.12)",
  },
  onDark: {
    sphere: "#f8fafc",
    ops: "#5eead4",
    markTeal: "#5eead4",
    markCyan: "#7dd3fc",
    markNavy: "#1e293b",
    ring: "rgba(248,250,252,0.2)",
  },
} as const;

export const BrandLogo = ({
  className,
  heightClass = "h-9",
  variant = "default",
}: BrandLogoProps) => {
  const c = palette[variant];
  const uid = useId().replace(/:/g, "");
  const clipId = `sphereops-mark-${uid}`;

  return (
    <svg
      viewBox="0 0 216 44"
      role="img"
      aria-label="SphereOps"
      className={cn("w-auto shrink-0", heightClass, className)}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>SphereOps</title>
      <defs>
        <clipPath id={clipId}>
          <circle cx="22" cy="22" r="20" />
        </clipPath>
      </defs>
      <g clipPath={`url(#${clipId})`}>
        <circle cx="22" cy="22" r="22" fill={c.markNavy} opacity="0.15" />
        <ellipse
          cx="16"
          cy="22"
          rx="18"
          ry="22"
          fill={c.markTeal}
          transform="rotate(-12 16 22)"
        />
        <ellipse
          cx="28"
          cy="26"
          rx="16"
          ry="20"
          fill={c.markCyan}
          opacity="0.92"
          transform="rotate(8 28 26)"
        />
        <ellipse cx="24" cy="14" rx="9" ry="11" fill={c.markNavy} />
      </g>
      <circle
        cx="22"
        cy="22"
        r="20"
        fill="none"
        stroke={c.ring}
        strokeWidth="1"
      />
      <text
        x="52"
        y="30"
        fontFamily="Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
        fontSize="20"
        fontWeight="600"
        letterSpacing="-0.02em"
      >
        <tspan fill={c.sphere}>Sphere</tspan>
        <tspan fill={c.ops}>Ops</tspan>
      </text>
    </svg>
  );
};
