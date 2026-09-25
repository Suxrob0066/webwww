import Image from "next/image";
import { site } from "@/lib/site";
import { Icon, IconChip, type IconName } from "../ui/Icon";
import { Button } from "../ui/Button";
import { SectionHeader } from "./PageHero";
import { ContactForm } from "./ContactForm";

const info: { icon: IconName; label: string; value: string; valueMobile?: string; href?: string; desktopOnly?: boolean }[] = [
  { icon: "map-pin", label: "Manzil", value: site.address, valueMobile: site.addressShort, href: site.mapsHref },
  { icon: "clock", label: "Ish vaqti", value: site.hours },
  { icon: "phone", label: "Telefon", value: site.phoneDisplay, href: site.phoneHref },
  { icon: "mail", label: "Email", value: site.email, href: `mailto:${site.email}`, desktopOnly: true },
];

/** Contact section (Figma 344:103 / 366:2967). Mobile order: header → quick actions → info → map → form. */
export function Contact() {
  const quickActions = (
    <div className="flex flex-col gap-3 lg:flex-row lg:pt-2">
      <Button size="lg" href={site.telegramHref} className="w-full lg:w-auto">
        Telegramda yozish
      </Button>
      <Button size="lg" hierarchy="secondary" href={site.phoneHref} className="w-full lg:w-auto">
        Qo&apos;ng&apos;iroq qilish
      </Button>
    </div>
  );

  return (
    <section id="aloqa" className="scroll-mt-16 bg-canvas lg:scroll-mt-[84px]">
      <div className="container-page flex flex-col gap-6 py-14 lg:flex-row lg:gap-12 lg:py-[100px]">
        <div className="flex flex-1 flex-col gap-6">
          <SectionHeader badge="Aloqa" title="Biz bilan bog'laning" />
          <p className="t-md text-fg-secondary hidden lg:block">
            Savollaringiz bormi? Telegram orqali yozing, qo&apos;ng&apos;iroq qiling yoki
            markazimizga tashrif buyuring.
          </p>
          <p className="t-md text-fg-secondary lg:hidden">
            Telegram orqali yozing, qo&apos;ng&apos;iroq qiling yoki markazimizga tashrif buyuring.
          </p>

          <div className="lg:hidden">{quickActions}</div>

          <ul className="flex flex-col gap-3.5 lg:gap-4 lg:pt-2">
            {info.map((row) => (
              <li
                key={row.label}
                className={`items-start gap-3 ${row.desktopOnly ? "hidden lg:flex" : "flex"}`}
              >
                <IconChip name={row.icon} />
                <div className="flex flex-col gap-0.5">
                  <p className="t-sm-medium text-fg-secondary">{row.label}</p>
                  {row.href ? (
                    <a
                      href={row.href}
                      className="t-md-medium text-fg-primary hover:text-fg-brand focus-ring rounded-sm"
                      {...(row.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    >
                      <span className="hidden lg:inline">{row.value}</span>
                      <span className="lg:hidden">{row.valueMobile ?? row.value}</span>
                    </a>
                  ) : (
                    <p className="t-md-medium text-fg-primary">{row.value}</p>
                  )}
                </div>
              </li>
            ))}
          </ul>

          <div className="hidden lg:block">{quickActions}</div>

          <a
            href={site.mapsHref}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Xaritada ochish"
            className="relative flex h-[180px] w-full items-center justify-center overflow-hidden rounded-[16px] border border-line bg-surface focus-ring lg:h-[220px]"
          >
            <Image
              src="/images/map/map.jpg"
              alt=""
              fill
              sizes="(min-width: 1024px) 616px, 100vw"
              className="object-cover"
            />
            <span className="relative inline-flex size-10 items-center justify-center rounded-full bg-brand text-white shadow-card">
              <Icon name="map-pin" />
            </span>
          </a>
        </div>

        <div className="flex flex-1">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
