import Link from "next/link";
import { directions, site } from "@/lib/site";
import { Logo } from "./ui/Logo";
import { Icon, type IconName } from "./ui/Icon";

const quickLinks = [
  { label: "Bosh sahifa", href: "/" },
  { label: "Biz haqimizda", href: "/#biz-haqimizda" },
  { label: "Yo'nalishlarimiz", href: "/xizmatlar" },
  { label: "Galereya", href: "/galereya" },
  { label: "Aloqa", href: "/#aloqa" },
];

const socials: { name: IconName; href: string; label: string }[] = [
  { name: "send", href: site.telegramHref, label: "Telegram" },
  { name: "instagram", href: site.instagramHref, label: "Instagram" },
  { name: "phone", href: site.phoneHref, label: "Qo'ng'iroq qilish" },
];

function Col({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-2.5 lg:gap-3">
      <p className="t-md-semibold text-fg-primary">{title}</p>
      {children}
    </div>
  );
}

const linkCls = "t-sm text-fg-secondary hover:text-fg-primary transition-colors focus-ring rounded-sm";

/** Footer — always a dark band (Figma 351:189 / 366:3027). */
export function Footer() {
  return (
    <footer id="footer" className="dark-band border-t border-line bg-surface text-fg-primary">
      <div className="container-page flex flex-col gap-7 pb-24 pt-12 lg:gap-10 lg:pb-8 lg:pt-[72px]">
        <div className="flex flex-col gap-7 lg:flex-row lg:gap-12">
          <div className="flex flex-1 flex-col gap-4">
            <Logo />
            <p className="t-sm text-fg-secondary max-w-[320px]">
              Siz uchun eng yaxshi va sifatli xizmatni maqsad qilgan ko&apos;p tarmoqli savdo
              majmuasi.
            </p>
            <div className="hidden gap-3 pt-2 lg:flex">
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  aria-label={s.label}
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="inline-flex size-10 items-center justify-center rounded-[8px] bg-hover text-icon hover:text-fg-primary transition-colors focus-ring"
                >
                  <Icon name={s.name} />
                </a>
              ))}
            </div>
          </div>

          <div className="flex-1">
            <Col title="Tezkor havolalar">
              {quickLinks.map((l) => (
                <Link key={l.label} href={l.href} className={linkCls}>
                  {l.label}
                </Link>
              ))}
            </Col>
          </div>

          <div className="flex-1">
            <Col title="Yo'nalishlarimiz">
              {directions.map((d) => (
                <Link key={d.slug} href={`/${d.slug}`} className={linkCls}>
                  {d.title}
                </Link>
              ))}
            </Col>
          </div>

          <div className="flex-1">
            <Col title="Aloqa">
              <p className="t-sm text-fg-secondary">{site.addressShort}</p>
              <a href={site.phoneHref} className={linkCls}>
                {site.phoneDisplay}
              </a>
              <a href={`mailto:${site.email}`} className={`${linkCls} hidden lg:block`}>
                {site.email}
              </a>
              <p className="t-sm text-fg-secondary">{site.hours}</p>
            </Col>
          </div>

          {/* Mobile social row */}
          <div className="flex gap-3 lg:hidden">
            {socials.map((s) => (
              <a
                key={s.name}
                href={s.href}
                aria-label={s.label}
                className="inline-flex size-10 items-center justify-center rounded-[8px] bg-hover text-icon focus-ring"
              >
                <Icon name={s.name} />
              </a>
            ))}
          </div>
        </div>

        <div className="hidden h-px w-full bg-line lg:block" />

        <div className="flex flex-col gap-2 t-sm text-fg-tertiary lg:flex-row lg:items-center lg:justify-between">
          <p>© {new Date().getFullYear()} Ochabuloq Savdo. Barcha huquqlar himoyalangan.</p>
          <p className="hidden lg:block">Samarqand viloyati, Qo&apos;shrabot tumani</p>
        </div>
      </div>
    </footer>
  );
}
