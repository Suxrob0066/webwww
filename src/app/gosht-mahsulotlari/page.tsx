import type { Metadata } from "next";
import Image from "next/image";
import { Shell } from "@/components/Shell";
import { PageHero, SectionHeader } from "@/components/sections/PageHero";
import { Icon } from "@/components/ui/Icon";
import { OrderForm } from "./OrderForm";

export const metadata: Metadata = {
  title: "Go'sht mahsulotlari",
  description: "Sifatli, yangi va ishonchli go'sht mahsulotlarini buyurtma qiling.",
};

const products = [
  { name: "Mol go'shti", text: "Yangi so'yilgan, saralangan lahm va suyakli bo'laklar.", image: "/images/gosht/mol.jpg" },
  { name: "Qo'y go'shti", text: "Palov, sho'rva va tandir uchun mayin, sifatli go'sht.", image: "/images/gosht/qoy.jpg" },
  { name: "Tovuq go'shti", text: "Butun tovuq hamda kundalik taomlar uchun bo'laklar.", image: "/images/gosht/tovuq.jpg" },
];

/** M03 · Go'sht mahsulotlari (Figma 1862:108292) — mobile-first; desktop layout extrapolated. */
export default function MeatPage() {
  return (
    <Shell active="directions">
      <PageHero
        badge="Go'sht mahsulotlari"
        title="Go'sht mahsulotlari"
        description="Sifatli, yangi va ishonchli go'sht mahsulotlarini buyurtma qiling."
        backHref="/oziq-ovqat-dokoni"
      />

      {/* Mahsulotlar va xizmat */}
      <section className="bg-surface">
        <div className="container-page flex flex-col gap-7 py-8 lg:gap-10 lg:py-[100px]">
          <div className="flex flex-col gap-3 lg:max-w-[760px]">
            <SectionHeader badge="Yangi va sifatli" title="Dasturxoningiz uchun saralangan mahsulotlar" />
            <p className="t-sm lg:t-md text-fg-secondary">
              Kerakli mahsulot va miqdorni belgilang. Buyurtmangizni tasdiqlash uchun siz bilan
              bog&apos;lanamiz.
            </p>
          </div>

          <ul className="grid grid-cols-1 gap-3 lg:grid-cols-3 lg:gap-6">
            {products.map((p) => (
              <li
                key={p.name}
                className="flex flex-col gap-3 rounded-[12px] border border-line bg-canvas p-3 lg:rounded-[16px] lg:p-4"
              >
                <div className="relative h-[180px] w-full overflow-hidden rounded-[8px] bg-hover lg:h-[220px] lg:rounded-[12px]">
                  <Image src={p.image} alt={p.name} fill sizes="(min-width: 1024px) 400px, 100vw" className="object-cover" />
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="t-lg-semibold text-fg-primary">{p.name}</h3>
                  <p className="t-sm text-fg-secondary">{p.text}</p>
                </div>
              </li>
            ))}
          </ul>

          <div className="flex flex-col gap-3.5 rounded-[16px] bg-brand-subtle p-4 lg:p-6">
            <div className="flex items-center gap-2.5">
              <Icon name="shield" className="shrink-0 text-icon-brand" />
              <p className="t-md-semibold text-fg-primary">Sifat va halollik kafolati</p>
            </div>
            <p className="t-sm text-fg-secondary">
              Mahsulotlar saqlash talablariga rioya qilingan holda tayyorlanadi. Narx va mavjudlik
              buyurtma tasdiqlanganda aniqlashtiriladi.
            </p>
          </div>
        </div>
      </section>

      {/* Buyurtma so'rovi */}
      <section id="buyurtma" className="bg-canvas">
        <div className="container-page flex flex-col gap-6 py-9 lg:flex-row lg:gap-12 lg:py-[100px]">
          <div className="flex flex-col gap-2.5 lg:flex-1 lg:gap-4">
            <SectionHeader badge="Buyurtma" title="Buyurtma qoldiring" />
            <p className="t-sm lg:t-md text-fg-secondary">
              Ma&apos;lumotlaringizni kiriting — mutaxassisimiz tez orada siz bilan bog&apos;lanadi.
            </p>
          </div>
          <div className="lg:flex-1">
            <OrderForm />
          </div>
        </div>
      </section>
    </Shell>
  );
}
