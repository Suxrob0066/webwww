import { Shell } from "@/components/Shell";
import { Button } from "@/components/ui/Button";
import { site } from "@/lib/site";

export default function NotFound() {
  return (
    <Shell active="home">
      <section className="bg-canvas">
        <div className="container-page flex flex-col items-center gap-4 py-20 text-center lg:py-[140px]">
          <p className="t-display-md-semibold lg:t-display-2xl text-fg-brand">404</p>
          <h1 className="t-section-heading text-fg-primary">Sahifa topilmadi</h1>
          <p className="t-md text-fg-secondary max-w-[560px]">
            Siz qidirgan sahifa o&apos;chirilgan yoki manzili o&apos;zgargan bo&apos;lishi mumkin.
            Bosh sahifaga qayting yoki biz bilan bog&apos;laning.
          </p>
          <div className="flex w-full flex-col gap-3 pt-3 lg:w-auto lg:flex-row">
            <Button size="lg" href="/" className="w-full lg:w-auto">
              Bosh sahifaga qaytish
            </Button>
            <Button size="lg" hierarchy="secondary" href={site.telegramHref} className="w-full lg:w-auto">
              Telegramda yozish
            </Button>
          </div>
        </div>
      </section>
    </Shell>
  );
}
