"use client";

import Image from "next/image";
import { useState } from "react";
import { Lightbox } from "../Lightbox";

import type { StripPhoto } from "@/lib/site";

/**
 * Horizontally scrollable photo strip (Figma 530:5819 / 530:5853).
 * Each photo keeps its own aspect ratio; all share one height.
 */
export function GalleryStrip({
  photos,
  tone = "canvas",
}: {
  photos: StripPhoto[];
  tone?: "canvas" | "surface";
}) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section
      className={`py-14 lg:py-[100px] ${tone === "surface" ? "bg-surface lg:bg-canvas" : "bg-canvas"}`}
      aria-label="Galereya"
    >
      <ul className="scrollbar-none flex gap-3 overflow-x-auto px-5 lg:gap-6 lg:px-20">
        {photos.map((p, i) => (
          <li
            key={p.src}
            className="relative h-[200px] shrink-0 overflow-hidden rounded-[12px] border border-line bg-surface lg:h-[320px] lg:rounded-[16px]"
            style={{ aspectRatio: `${p.width} / 320` }}
          >
            <button
              type="button"
              onClick={() => setOpen(i)}
              className="absolute inset-0 focus-ring"
              aria-label={`${p.alt} — kattalashtirish`}
            >
              <Image
                src={p.src}
                alt={p.alt}
                fill
                sizes="(min-width: 1024px) 570px, 360px"
                className="object-cover transition-transform duration-300 hover:scale-[1.03]"
              />
            </button>
          </li>
        ))}
      </ul>
      <Lightbox images={photos} index={open} onClose={() => setOpen(null)} onIndexChange={setOpen} />
    </section>
  );
}

