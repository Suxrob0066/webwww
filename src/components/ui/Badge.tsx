export type BadgeColor = "brand" | "success" | "error" | "neutral";

const colors: Record<BadgeColor, string> = {
  brand: "bg-brand-subtle text-fg-brand",
  success: "bg-success-subtle text-fg-success",
  error: "bg-error-subtle text-fg-error",
  neutral: "bg-hover text-fg-secondary",
};

export function Badge({
  color = "brand",
  children,
  className = "",
}: {
  color?: BadgeColor;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border border-line px-3 py-1.5 t-eyebrow whitespace-nowrap ${colors[color]} ${className}`}
    >
      <span className="size-1.5 shrink-0 rounded-full bg-current" aria-hidden="true" />
      {children}
    </span>
  );
}
