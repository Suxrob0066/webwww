import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";

export type ButtonHierarchy = "primary" | "secondary" | "tertiary";
export type ButtonSize = "md" | "lg";

const base =
  "inline-flex items-center justify-center whitespace-nowrap select-none transition-colors duration-150 focus-ring disabled:cursor-not-allowed";

const sizes: Record<ButtonSize, string> = {
  md: "px-4 py-2.5 rounded-[8px] t-sm-semibold",
  lg: "px-6 py-3 rounded-[10px] t-md-semibold",
};

const hierarchies: Record<ButtonHierarchy, string> = {
  primary:
    "bg-brand text-fg-on-brand hover:bg-brand-hover disabled:bg-disabled disabled:text-fg-disabled",
  secondary:
    "border border-line-strong text-fg-primary hover:bg-hover hover:border-line-brand disabled:border-line-subtle disabled:text-fg-disabled disabled:hover:bg-transparent",
  tertiary:
    "text-fg-brand hover:bg-hover disabled:text-fg-disabled disabled:hover:bg-transparent",
};

export function buttonClasses(
  hierarchy: ButtonHierarchy = "primary",
  size: ButtonSize = "md",
  className = "",
) {
  return `${base} ${sizes[size]} ${hierarchies[hierarchy]} ${className}`;
}

type CommonProps = {
  hierarchy?: ButtonHierarchy;
  size?: ButtonSize;
  className?: string;
};

type ButtonAsButton = CommonProps &
  Omit<ComponentPropsWithoutRef<"button">, "className"> & { href?: undefined };

type ButtonAsLink = CommonProps &
  Omit<ComponentPropsWithoutRef<"a">, "className" | "href"> & { href: string };

export type ButtonProps = ButtonAsButton | ButtonAsLink;

export function Button(props: ButtonProps) {
  const { hierarchy = "primary", size = "md", className = "", ...rest } = props;
  const cls = buttonClasses(hierarchy, size, className);

  if ("href" in rest && typeof rest.href === "string") {
    const { href, ...anchor } = rest as ButtonAsLink;
    const external = /^(https?:|tel:|mailto:)/.test(href);
    if (external) {
      return (
        <a
          href={href}
          className={cls}
          {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
          {...anchor}
        />
      );
    }
    return <Link href={href} className={cls} {...anchor} />;
  }

  const { type = "button", ...button } = rest as ButtonAsButton;
  return <button type={type} className={cls} {...button} />;
}
