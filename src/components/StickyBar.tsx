"use client";

import { useEffect, useState } from "react";
import { site } from "@/lib/site";
import { Button } from "./ui/Button";

/**
 * Mobile sticky bar (Figma 345:129): Telegram + call, fixed to the bottom,
 * hidden once the footer scrolls into view.
 */
export function StickyBar() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const footer = document.getElementById("footer");
    if (!footer || !("IntersectionObserver" in window)) return;
    const io = new IntersectionObserver(
      ([entry]) => setHidden(entry.isIntersecting),
      { threshold: 0.05 },
    );
    io.observe(footer);
    return () => io.disconnect();
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-30 border-t border-line bg-canvas px-4 pt-3 pb-3 pb-safe transition-transform duration-200 lg:hidden ${
        hidden ? "translate-y-full" : "translate-y-0"
      }`}
      aria-hidden={hidden}
    >
      <div className="flex gap-3">
        <Button href={site.telegramHref} className="flex-1" tabIndex={hidden ? -1 : undefined}>
          Telegram
        </Button>
        <Button
          href={site.phoneHref}
          hierarchy="secondary"
          className="flex-1"
          tabIndex={hidden ? -1 : undefined}
        >
          Qo&apos;ng&apos;iroq
        </Button>
      </div>
    </div>
  );
}
