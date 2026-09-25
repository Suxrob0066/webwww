import Link from "next/link";

/**
 * Logomark — three rounded arcs forming a broken ring (Figma "Logomark" 392:6176).
 * `size` is the ring size in px; the parent square tile is drawn by <Logo/>.
 */
export function Logomark({ size = 24, className = "" }: { size?: number; className?: string }) {
  // Circle r=9 → circumference ≈ 56.55. Three arcs of ~15 with ~3.85 gaps.
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <circle
        cx="12"
        cy="12"
        r="9"
        stroke="currentColor"
        strokeWidth="3.2"
        strokeLinecap="round"
        strokeDasharray="14.2 4.65"
        strokeDashoffset="3"
        transform="rotate(-20 12 12)"
      />
    </svg>
  );
}

type LogoProps = {
  /** "md" = 40px tile / 18px wordmark (desktop, footer); "sm" = 32px tile / 16px wordmark (mobile navbar) */
  size?: "md" | "sm";
  href?: string;
  className?: string;
};

export function Logo({ size = "md", href = "/", className = "" }: LogoProps) {
  const tile =
    size === "md"
      ? "size-10 rounded-[10px]"
      : "size-8 rounded-[8px]";
  const ring = size === "md" ? 24 : 20;
  const word = size === "md" ? "t-lg-semibold" : "t-md-semibold";
  return (
    <Link
      href={href}
      className={`inline-flex items-center gap-3 text-fg-primary focus-ring rounded-md ${className}`}
      aria-label="Ochabuloq Savdo — bosh sahifa"
    >
      <span
        className={`inline-flex shrink-0 items-center justify-center bg-brand text-white ${tile}`}
      >
        <Logomark size={ring} />
      </span>
      <span className={`${word} whitespace-nowrap`}>Ochabuloq Savdo</span>
    </Link>
  );
}
