import Link from "next/link";
import { Icon } from "./Icon";
import { Button } from "./Button";

/** Back link (Figma 373:5409) — sits under the navbar on inner pages. */
export function BackLink({ href = "/", label = "Orqaga qaytish" }: { href?: string; label?: string }) {
  return (
    <Link
      href={href}
      className="inline-flex items-center gap-2 py-2.5 t-sm-medium text-fg-brand hover:underline focus-ring rounded-md"
    >
      <Icon name="arrow-left" className="text-icon-brand" />
      {label}
    </Link>
  );
}

/** Filter chip (Figma 354:501). */
export function FilterChip({
  active,
  children,
  onClick,
}: {
  active?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`shrink-0 rounded-full border px-[18px] py-2.5 t-sm-medium whitespace-nowrap transition-colors focus-ring ${
        active
          ? "bg-brand border-line-brand text-fg-on-brand"
          : "bg-surface border-line text-fg-secondary hover:bg-hover"
      }`}
    >
      {children}
    </button>
  );
}

/** Form result card (Figma 373:5436) — Success / Error. */
export function FormResult({
  state,
  onReset,
  onRetry,
  telegramHref,
  successTitle = "Xabaringiz yuborildi",
  successBody = "Tez orada siz bilan bog'lanamiz. Shoshilinch bo'lsa, Telegram orqali yozing yoki qo'ng'iroq qiling.",
  errorTitle = "Xabar yuborilmadi",
  errorBody = "Texnik nosozlik yuz berdi. Qayta urinib ko'ring yoki to'g'ridan-to'g'ri Telegramda yozing.",
}: {
  state: "success" | "error";
  onReset?: () => void;
  onRetry?: () => void;
  telegramHref: string;
  successTitle?: string;
  successBody?: string;
  errorTitle?: string;
  errorBody?: string;
}) {
  const ok = state === "success";
  return (
    <div
      role="status"
      className={`flex w-full flex-col items-center gap-4 rounded-[16px] border bg-surface px-8 py-10 text-center ${
        ok ? "border-line-success-status" : "border-line-error-status"
      }`}
    >
      <span
        className={`inline-flex size-14 items-center justify-center rounded-full ${
          ok ? "bg-success-subtle text-fg-success" : "bg-error-subtle text-fg-error"
        }`}
      >
        <Icon name={ok ? "check" : "alert-triangle"} size={26} />
      </span>
      <p className="t-xl-semibold text-fg-primary">{ok ? successTitle : errorTitle}</p>
      <p className="t-sm text-fg-secondary">{ok ? successBody : errorBody}</p>
      <div className="flex w-full flex-col gap-2.5 pt-2">
        {ok ? (
          <Button hierarchy="secondary" size="lg" onClick={onReset} className="w-full">
            Yana xabar yuborish
          </Button>
        ) : (
          <>
            <Button size="lg" onClick={onRetry} className="w-full">
              Qayta urinish
            </Button>
            <Button hierarchy="secondary" size="lg" href={telegramHref} className="w-full">
              Telegramda yozish
            </Button>
          </>
        )}
      </div>
    </div>
  );
}
