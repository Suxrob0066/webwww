"use client";

import { useSyncExternalStore } from "react";
import { Icon } from "./Icon";

type Theme = "light" | "dark";

function subscribe(cb: () => void) {
  const mo = new MutationObserver(cb);
  mo.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
  return () => mo.disconnect();
}
const getSnapshot = (): Theme =>
  document.documentElement.dataset.theme === "dark" ? "dark" : "light";
const getServerSnapshot = (): Theme => "light";

export function setTheme(next: Theme) {
  document.documentElement.dataset.theme = next;
  try {
    localStorage.setItem("theme", next);
  } catch {}
}

/**
 * Theme toggle (Figma 382:5906). The icon shows what you switch TO:
 * moon in light theme, sun in dark theme. Choice persists in localStorage.
 */
export function ThemeToggle({ className = "" }: { className?: string }) {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const next: Theme = theme === "dark" ? "light" : "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(next)}
      className={`inline-flex size-10 items-center justify-center rounded-[10px] border border-line bg-surface text-icon hover:bg-hover transition-colors focus-ring ${className}`}
      aria-label={next === "dark" ? "Quyuq temaga o'tish" : "Oq temaga o'tish"}
      title={next === "dark" ? "Quyuq tema" : "Oq tema"}
    >
      <Icon name={theme === "dark" ? "sun" : "moon"} />
    </button>
  );
}

/** Inline script that applies the saved theme before first paint (no flash). */
export const themeInitScript = `(function(){try{var t=localStorage.getItem('theme');if(t!=='dark'&&t!=='light'){t=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';}document.documentElement.dataset.theme=t;}catch(e){}})();`;
