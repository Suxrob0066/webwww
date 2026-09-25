import Image from "next/image";
import Link from "next/link";
import { directions } from "@/lib/site";
import { Icon, type IconName } from "../ui/Icon";
import { buttonClasses } from "../ui/Button";
import { SectionHeader } from "./PageHero";

/** Direction card (Figma 342:56330) — whole card is a link; hover = brand border + shadow. */
function DirectionCard({ d }: { d: (typeof directions)[number] }) {
  return (
    <Link
      href={`/${d.slug}`}
      className="group flex flex-col overflow-hidden rounded-[16px] border border-line bg-surface transition-[border-color,box-shadow] duration-200 hover:border-line-brand hover:shadow-card focus-ring"
    >
      <div className="relative h-[220px] w-full bg-hover">
        <Image
          src={d.image}
          alt={d.title}
          fill
          sizes="(min-width: 1024px) 410px, 100vw"
          className="object-cover"
        />
      </div>
      <div className="flex flex-col gap-3 px-6 pb-5 pt-6">
        <div className="flex items-center gap-2">
          <Icon name={d.icon as IconName} className="shrink-0 text-icon-brand" />
          <h3 className="t-xl-semibold text-fg-primary">{d.title}</h3>
        </div>
        <p className="t-sm text-fg-secondary hidden lg:block">{d.shortDescription}</p>
        <p className="t-sm text-fg-secondary lg:hidden">{d.shortDescriptionMobile}</p>
      </div>
      <div className="mt-auto px-6 pb-6">
        <span
          className={buttonClasses(
            "secondary",
            "md",
            "group-hover:bg-hover group-hover:border-line-brand",
          )}
        >
          Batafsil
        </span>
      </div>
    </Link>
  );
}

/** Directions section (Figma 350:148 / 365:2965). */
export function Directions() {
  return (
    <section id="yonalishlar" className="scroll-mt-16 bg-canvas lg:scroll-mt-[84px]">
      <div className="container-page flex flex-col gap-7 py-14 lg:gap-10 lg:py-[100px]">
        <SectionHeader badge="Yo'nalishlarimiz" title="Bizning xizmatlarimiz" />
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-6">
          {directions.map((d) => (
            <DirectionCard key={d.slug} d={d} />
          ))}
        </div>
      </div>
    </section>
  );
}
