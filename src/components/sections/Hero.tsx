import Image from "next/image";
import { Badge } from "../ui/Badge";
import { Button } from "../ui/Button";
import { Logomark } from "../ui/Logo";

const heroStats = [
  { value: "2019", label: "Yildan beri" },
  { value: "08:00–22:00", label: "Har kuni" },
  { value: "3", label: "Yo'nalish" },
];

/** Home hero — always dark band (Figma 343:103 desktop / 363:2891 mobile). */
export function Hero() {
  return (
    <section className="dark-band relative overflow-hidden bg-canvas text-fg-primary">
      {/* photo */}
      <Image
        src="/images/hero/majmua.jpg"
        alt="Ochabuloq Savdo majmuasi"
        fill
        priority
        sizes="100vw"
        className="object-cover object-bottom"
      />
      {/* scrim (horizontal) */}
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(17,19,24,0.93) 0%, rgba(17,19,24,0.70) 45%, rgba(17,19,24,0.42) 100%)",
        }}
      />
      {/* scrim-bottom (vertical) */}
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(17,19,24,0.30) 0%, rgba(17,19,24,0.42) 45%, rgba(17,19,24,0.96) 100%)",
        }}
      />
      {/* glow */}
      <div
        aria-hidden="true"
        className="absolute inset-0 mix-blend-screen"
        style={{
          background:
            "linear-gradient(144.46deg, rgba(65,95,246,0.30) 7.35%, rgba(65,95,246,0.09) 44.12%, rgba(65,95,246,0) 95.59%)",
        }}
      />
      {/* ghost-mark */}
      <Logomark
        className="pointer-events-none absolute left-[208px] top-[115px] size-[330px] text-white/[0.06] lg:left-[1099px] lg:top-[50px] lg:size-[620px]"
      />

      <div className="container-page relative">
        <div className="flex max-w-[680px] flex-col gap-5 pb-[60px] pt-[83px] lg:gap-8 lg:pb-[157px] lg:pt-[144px]">
          <div className="hidden lg:block">
            <Badge>Samarqand viloyati · Qo&apos;shrabot tumani</Badge>
          </div>
          <div className="lg:hidden">
            <Badge>Qo&apos;shrabot tumani</Badge>
          </div>
          <h1 className="t-display-md-semibold lg:t-display-2xl text-fg-primary">Ochabuloq Savdo</h1>
          <p className="t-md lg:t-xl text-fg-secondary">
            Oziq-ovqat, xo&apos;jalik mollari va zamonaviy sartaroshxona — sifat va ishonch bir
            manzilda.
          </p>
          <div className="flex flex-col gap-3 pt-1 lg:flex-row lg:gap-4 lg:pt-2">
            <Button size="lg" href="/xizmatlar" className="w-full lg:w-auto">
              Xizmatlarni ko&apos;rish
            </Button>
            <Button size="lg" hierarchy="secondary" href="/#aloqa" className="w-full lg:w-auto">
              Bog&apos;lanish
            </Button>
          </div>
          <dl className="flex gap-6 pt-3 lg:gap-12 lg:pt-6">
            {heroStats.map((s) => (
              <div key={s.label} className="flex flex-col gap-1 lg:gap-1.5">
                <dt className="sr-only">{s.label}</dt>
                <dd className="t-lg-semibold lg:t-display-sm text-fg-primary whitespace-nowrap">
                  {s.value}
                </dd>
                <dd className="t-eyebrow text-fg-tertiary whitespace-nowrap">{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
