"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { navLinks, site, type NavKey } from "@/lib/site";
import { Logo } from "./ui/Logo";
import { Button } from "./ui/Button";
import { ThemeToggle } from "./ui/ThemeToggle";
import { Icon } from "./ui/Icon";

function NavLink({
  href,
  active,
  children,
  onClick,
}: {
  href: string;
  active?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      aria-current={active ? "page" : undefined}
      className={`group flex flex-col items-center gap-1.5 py-2 t-md-medium whitespace-nowrap focus-ring rounded-md ${
        active ? "text-fg-primary" : "text-fg-secondary hover:text-fg-primary"
      }`}
    >
      {children}
      <span
        aria-hidden="true"
        className={`h-0.5 w-full rounded-[2px] ${active ? "bg-brand" : "bg-transparent"}`}
      />
    </Link>
  );
}

export function Navbar({ active }: { active: NavKey }) {
  const [open, setOpen] = useState(false);

  // Lock scroll + close on Escape while the drawer is open
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-canvas">
      {/* Desktop: 84px; Mobile: 64px */}
      <div className="container-page flex h-16 items-center justify-between !pr-3 lg:h-[84px] lg:!pr-20">
        <div className="hidden lg:block">
          <Logo size="md" />
        </div>
        <div className="lg:hidden">
          <Logo size="sm" />
        </div>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Asosiy navigatsiya">
          {navLinks.map((l) => (
            <NavLink key={l.key} href={l.href} active={l.key === active}>
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-1 lg:gap-3">
          <div className="hidden lg:block">
            <ThemeToggle />
          </div>
          <Button href="/#aloqa" size="md">
            Bog&apos;lanish
          </Button>
          <button
            type="button"
            className="inline-flex size-11 items-center justify-center rounded-[8px] text-icon hover:bg-hover focus-ring lg:hidden"
            aria-label="Menyuni ochish"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen(true)}
          >
            <Icon name="menu" />
          </button>
        </div>
      </div>

      {/* Mobile menu drawer (Figma 363:2917) — full-screen overlay */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Menyu"
        className={`fixed inset-0 z-50 flex flex-col bg-canvas px-5 pb-8 pt-6 transition-[opacity,transform] duration-200 lg:hidden ${
          open ? "opacity-100 translate-y-0" : "pointer-events-none opacity-0 -translate-y-2"
        }`}
        aria-hidden={!open}
      >
        <div className="flex items-center justify-between">
          <span className="t-md-semibold text-fg-primary">Menyu</span>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <button
              type="button"
              className="inline-flex size-11 items-center justify-center rounded-[8px] text-icon hover:bg-hover focus-ring"
              aria-label="Menyuni yopish"
              onClick={() => setOpen(false)}
            >
              <Icon name="close" />
            </button>
          </div>
        </div>

        <nav className="flex flex-col gap-1 pt-3" aria-label="Mobil navigatsiya">
          {navLinks.map((l) => (
            <div key={l.key} className="py-3.5">
              <NavLink href={l.href} active={l.key === active} onClick={() => setOpen(false)}>
                {l.label}
              </NavLink>
            </div>
          ))}
        </nav>

        <div className="flex flex-col gap-3 pt-4">
          <Button size="lg" href={site.telegramHref} className="w-full">
            Telegramda yozish
          </Button>
          <Button size="lg" hierarchy="secondary" href={site.phoneHref} className="w-full">
            Qo&apos;ng&apos;iroq qilish
          </Button>
        </div>
      </div>
    </header>
  );
}
