"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { galleryCategories, galleryImages, type GalleryCategory } from "@/lib/site";
import { FilterChip } from "@/components/ui/misc";
import { Button } from "@/components/ui/Button";
import { Lightbox } from "@/components/Lightbox";

const PAGE = 12;

/** Gallery page grid (Figma 354:502 / 367:3094). */
export function GalleryGrid() {
  const [cat, setCat] = useState<GalleryCategory>("all");
  const [shown, setShown] = useState(PAGE);
  const [open, setOpen] = useState<number | null>(null);

  const list = useMemo(
    () => (cat === "all" ? galleryImages : galleryImages.filter((g) => g.category === cat)),
    [cat],
  );
  const visible = list.slice(0, shown);

  return (
    <section className="bg-canvas">
      <div className="container-page flex flex-col gap-7 pb-14 pt-8 lg:gap-8 lg:pb-[88px] lg:pt-14">
        <div
          className="scrollbar-none -mx-5 flex gap-2 overflow-x-auto px-5 lg:mx-0 lg:flex-wrap lg:gap-3 lg:px-0"
          role="group"
          aria-label="Kategoriya bo'yicha saralash"
        >
          {galleryCategories.map((c) => (
            <FilterChip
              key={c.key}
              active={c.key === cat}
              onClick={() => {
                setCat(c.key);
                setShown(PAGE);
              }}
            >
              {c.label}
            </FilterChip>
          ))}
        </div>

        <p className="t-sm text-fg-tertiary">Jami: {list.length} ta rasm</p>

        <ul className="grid grid-cols-2 gap-3 lg:grid-cols-4 lg:gap-5">
          {visible.map((g, i) => (
            <li
              key={g.src}
              className="relative aspect-[169/140] overflow-hidden rounded-[12px] border border-line bg-surface lg:aspect-[305/230]"
            >
              <button
                type="button"
                onClick={() => setOpen(i)}
                className="absolute inset-0 focus-ring"
                aria-label={`${g.alt} — kattalashtirish`}
              >
                <Image
                  src={g.src}
                  alt={g.alt}
                  fill
                  sizes="(min-width: 1024px) 305px, 50vw"
                  className="object-cover transition-transform duration-300 hover:scale-[1.03]"
                />
              </button>
            </li>
          ))}
        </ul>

        {shown < list.length && (
          <div>
            <Button
              hierarchy="secondary"
              size="lg"
              className="w-full lg:w-auto"
              onClick={() => setShown((s) => s + PAGE)}
            >
              <span className="hidden lg:inline">Ko&apos;proq rasmlarni yuklash</span>
              <span className="lg:hidden">Ko&apos;proq yuklash</span>
            </Button>
          </div>
        )}
      </div>

      <Lightbox images={visible} index={open} onClose={() => setOpen(null)} onIndexChange={setOpen} />
    </section>
  );
}
