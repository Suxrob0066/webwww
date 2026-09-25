"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef } from "react";
import { Icon } from "./ui/Icon";

export type LightboxImage = { src: string; alt: string };

/**
 * Lightbox (Figma 374:5406 desktop / 377:5809 mobile).
 * Esc / backdrop closes; arrows or swipe navigate.
 */
export function Lightbox({
  images,
  index,
  onClose,
  onIndexChange,
}: {
  images: LightboxImage[];
  index: number | null;
  onClose: () => void;
  onIndexChange: (i: number) => void;
}) {
  const open = index !== null;
  const touchX = useRef<number | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  const go = useCallback(
    (delta: number) => {
      if (index === null || images.length === 0) return;
      onIndexChange((index + delta + images.length) % images.length);
    },
    [index, images.length, onIndexChange],
  );

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") go(-1);
      if (e.key === "ArrowRight") go(1);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose, go]);

  if (!open) return null;
  const img = images[index];
  const counter = `${index + 1} / ${images.length}`;

  const navBtn =
    "inline-flex shrink-0 items-center justify-center rounded-full border border-line bg-surface text-fg-primary hover:bg-hover transition-colors focus-ring";

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={img.alt}
      className="dark-band fixed inset-0 z-[60] text-fg-primary"
      style={{ background: "rgba(5,5,8,0.94)" }}
      onClick={onClose}
      onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
      onTouchEnd={(e) => {
        if (touchX.current === null) return;
        const dx = e.changedTouches[0].clientX - touchX.current;
        if (Math.abs(dx) > 48) go(dx < 0 ? 1 : -1);
        touchX.current = null;
      }}
    >
      {/* top bar (mobile) / close (desktop) */}
      <div
        className="absolute inset-x-0 top-0 flex items-center justify-between py-3 pl-5 pr-3 pt-[max(12px,env(safe-area-inset-top))] lg:justify-end lg:p-10"
        onClick={(e) => e.stopPropagation()}
      >
        <span className="t-sm-medium text-fg-secondary lg:hidden">{counter}</span>
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          aria-label="Yopish"
          className={`${navBtn} size-11 lg:size-12`}
        >
          <Icon name="close" />
        </button>
      </div>

      {/* stage */}
      <div
        className="absolute inset-x-5 top-[110px] bottom-[190px] flex flex-col items-center gap-5 lg:inset-x-0 lg:top-1/2 lg:bottom-auto lg:mx-auto lg:w-full lg:max-w-[960px] lg:-translate-y-1/2"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex h-full w-full items-center gap-5">
          <button
            type="button"
            onClick={() => go(-1)}
            aria-label="Oldingi rasm"
            className={`${navBtn} hidden size-12 lg:inline-flex`}
          >
            <Icon name="chevron-left" />
          </button>
          <div className="relative h-full w-full flex-1 overflow-hidden rounded-[12px] border border-line bg-surface lg:h-[540px]">
            <Image
              key={img.src}
              src={img.src}
              alt={img.alt}
              fill
              sizes="(min-width: 1024px) 824px, 100vw"
              className="object-contain"
            />
          </div>
          <button
            type="button"
            onClick={() => go(1)}
            aria-label="Keyingi rasm"
            className={`${navBtn} hidden size-12 lg:inline-flex`}
          >
            <Icon name="chevron-right" />
          </button>
        </div>
        {/* desktop caption */}
        <div className="hidden w-full items-center justify-between lg:flex">
          <p className="t-md-medium text-fg-primary">{img.alt}</p>
          <p className="t-sm text-fg-tertiary">{counter}</p>
        </div>
      </div>

      {/* mobile bottom */}
      <div
        className="absolute inset-x-5 bottom-0 flex flex-col items-center gap-4 pb-[max(24px,env(safe-area-inset-bottom))] text-center lg:hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <p className="t-md-medium text-fg-primary">{img.alt}</p>
        <p className="t-sm text-fg-tertiary">
          Rasmni almashtirish uchun chapga yoki o&apos;ngga suring
        </p>
        <div className="flex gap-4">
          <button type="button" onClick={() => go(-1)} aria-label="Oldingi rasm" className={`${navBtn} size-[52px]`}>
            <Icon name="chevron-left" />
          </button>
          <button type="button" onClick={() => go(1)} aria-label="Keyingi rasm" className={`${navBtn} size-[52px]`}>
            <Icon name="chevron-right" />
          </button>
        </div>
      </div>
    </div>
  );
}
