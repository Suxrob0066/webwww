import { site, stats, whyChooseUs } from "@/lib/site";
import { IconChip, type IconName } from "../ui/Icon";
import { Button } from "../ui/Button";
import { SectionHeader } from "./PageHero";

/** Stats banner (Figma 352:473 / 374:5423). */
export function StatsBanner() {
  return (
    <section className="bg-brand-subtle">
      <div className="container-page grid grid-cols-2 gap-3 py-8 lg:flex lg:justify-between lg:gap-8 lg:py-12">
        {stats.map((s) => (
          <div
            key={s.label}
            className="flex flex-col gap-1 rounded-[12px] bg-canvas p-4 lg:items-center lg:gap-1.5 lg:rounded-none lg:bg-transparent lg:p-0"
          >
            <p className="t-lg-semibold lg:t-display-md text-fg-brand whitespace-nowrap">{s.value}</p>
            <p className="t-sm text-fg-secondary hidden lg:block whitespace-nowrap">{s.label}</p>
            <p className="t-sm text-fg-secondary lg:hidden">{s.labelMobile}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/** Why choose us (Figma 353:471 / 367:3004). */
export function WhyChooseUs() {
  return (
    <section className="bg-surface">
      <div className="container-page flex flex-col gap-7 py-14 lg:gap-10 lg:py-[100px]">
        <SectionHeader badge="Afzalliklarimiz" title="Nima uchun Ochabuloq Savdo?" />
        <ul className="grid grid-cols-1 gap-3 lg:grid-cols-3 lg:gap-6">
          {whyChooseUs.map((w) => (
            <li
              key={w.title}
              className="flex flex-col gap-2.5 rounded-[16px] border border-line bg-canvas p-5 lg:gap-3 lg:bg-surface lg:p-6"
            >
              <IconChip name={w.icon as IconName} />
              <p className="t-md-semibold lg:t-lg-semibold text-fg-primary">{w.title}</p>
              <p className="t-sm text-fg-secondary">{w.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export type ServiceItem = {
  icon: string;
  title: string;
  description: string;
  href?: string;
};

/** Services grid (Figma 353:522 / 367:3055). */
export function ServicesGrid({ items }: { items: readonly ServiceItem[] }) {
  return (
    <section className="bg-canvas">
      <div className="container-page flex flex-col gap-7 py-14 lg:gap-10 lg:py-[100px]">
        <SectionHeader badge="Bizning xizmatlarimiz" title="Nimalar taklif qilamiz" />
        <ul className="grid grid-cols-1 gap-3 lg:grid-cols-2 lg:gap-6">
          {items.map((s) => {
            const inner = (
              <>
                <IconChip name={s.icon as IconName} />
                <div className="flex flex-col gap-1 lg:gap-1.5">
                  <p className="t-md-semibold lg:t-lg-semibold text-fg-primary">{s.title}</p>
                  <p className="t-sm text-fg-secondary">{s.description}</p>
                </div>
              </>
            );
            const cls =
              "flex items-start gap-3.5 rounded-[16px] border border-line bg-surface p-5 lg:gap-4 lg:p-7";
            return (
              <li key={s.title}>
                {s.href ? (
                  <a
                    href={s.href}
                    className={`${cls} transition-[border-color,box-shadow] hover:border-line-brand hover:shadow-card focus-ring`}
                  >
                    {inner}
                  </a>
                ) : (
                  <div className={cls}>{inner}</div>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

/** CTA band (Figma 352:486 / 367:3118). */
export function CtaBand() {
  return (
    <section className="bg-surface">
      <div className="container-page flex flex-col gap-7 py-14 lg:items-center lg:gap-5 lg:py-[88px] lg:text-center">
        <h2 className="t-section-heading text-fg-primary">Bizga tashrif buyuring</h2>
        <p className="t-md text-fg-secondary lg:max-w-[640px]">
          Keling, barchasini o&apos;z ko&apos;zingiz bilan ko&apos;ring — har kuni 08:00 dan 22:00
          gacha ochiqmiz.
        </p>
        <div className="flex flex-col gap-3 lg:flex-row lg:pt-3">
          <Button size="lg" href={site.telegramHref} className="w-full lg:w-auto">
            Telegramda yozish
          </Button>
          <Button size="lg" hierarchy="secondary" href={site.mapsHref} className="w-full lg:w-auto">
            Manzilni ochish
          </Button>
        </div>
      </div>
    </section>
  );
}
