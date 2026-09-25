import { useId, type ComponentPropsWithoutRef } from "react";

type BaseProps = {
  label: string;
  hint?: string;
  error?: string;
  /** Field surface: "surface" (contact form) or "canvas" (order form on M03 page) */
  tone?: "surface" | "canvas";
  className?: string;
};

const fieldBase =
  "w-full rounded-[8px] border px-3.5 py-3 t-md text-fg-primary placeholder:text-fg-placeholder outline-none transition-[border-color,box-shadow] duration-150 " +
  "focus:border-line-brand focus:shadow-brand-glow focus:ring-1 focus:ring-line-brand " +
  "disabled:bg-disabled disabled:border-line-subtle disabled:text-fg-disabled";

function surfaceCls(tone: "surface" | "canvas", error?: string) {
  const bg = tone === "surface" ? "bg-surface" : "bg-canvas";
  const border = error ? "border-line-error" : "border-line-strong";
  return `${bg} ${border}`;
}

export function Input({
  label,
  hint,
  error,
  tone = "surface",
  className = "",
  id,
  ...rest
}: BaseProps & Omit<ComponentPropsWithoutRef<"input">, "className">) {
  const auto = useId();
  const inputId = id ?? auto;
  const helpId = `${inputId}-help`;
  return (
    <div className={`flex flex-col gap-1.5 ${className}`}>
      <label htmlFor={inputId} className="t-sm-medium text-fg-secondary">
        {label}
      </label>
      <input
        id={inputId}
        className={`${fieldBase} ${surfaceCls(tone, error)}`}
        aria-invalid={error ? true : undefined}
        aria-describedby={hint || error ? helpId : undefined}
        {...rest}
      />
      {(error || hint) && (
        <p id={helpId} className={`t-sm ${error ? "text-fg-error" : "text-fg-tertiary"}`}>
          {error || hint}
        </p>
      )}
    </div>
  );
}

export function Textarea({
  label,
  hint,
  error,
  tone = "surface",
  className = "",
  id,
  ...rest
}: BaseProps & Omit<ComponentPropsWithoutRef<"textarea">, "className">) {
  const auto = useId();
  const inputId = id ?? auto;
  const helpId = `${inputId}-help`;
  return (
    <div className={`flex flex-col gap-1.5 ${className}`}>
      <label htmlFor={inputId} className="t-sm-medium text-fg-secondary">
        {label}
      </label>
      <textarea
        id={inputId}
        className={`${fieldBase} ${surfaceCls(tone, error)} min-h-[120px] resize-y`}
        aria-invalid={error ? true : undefined}
        aria-describedby={hint || error ? helpId : undefined}
        {...rest}
      />
      {(error || hint) && (
        <p id={helpId} className={`t-sm ${error ? "text-fg-error" : "text-fg-tertiary"}`}>
          {error || hint}
        </p>
      )}
    </div>
  );
}
