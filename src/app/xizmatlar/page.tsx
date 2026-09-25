import type { Metadata } from "next";
import { Shell } from "@/components/Shell";
import { PageHero } from "@/components/sections/PageHero";
import { ServicesGrid, StatsBanner, WhyChooseUs } from "@/components/sections/Blocks";
import { Contact } from "@/components/sections/Contact";
import { directions } from "@/lib/site";

export const metadata: Metadata = {
  title: "Xizmatlarimiz",
  description:
    "Ochabuloq Savdo majmuasida sizga sifatli va kafolatlangan xizmat turlarini taklif qilamiz.",
};

// Umumiy xizmatlar sahifasi — har bir yo'nalishdan bittadan asosiy xizmat
const overview = [
  { icon: "shopping-cart", title: "Oziq-ovqat do'koni", description: directions[0].shortDescription, href: "/oziq-ovqat-dokoni" },
  { icon: "home", title: "Xo'jalik mollari", description: directions[1].shortDescription, href: "/xojalik-mollari" },
  { icon: "scissors", title: "Sartaroshxona", description: directions[2].shortDescription, href: "/sartaroshxona" },
  { icon: "shield", title: "Go'sht mahsulotlari", description: "Sertifikatlangan va halol go'sht — buyurtma bilan, har doim yangi.", href: "/gosht-mahsulotlari" },
];

export default function ServicesPage() {
  return (
    <Shell active="directions">
      <PageHero
        badge="Xizmatlarimiz"
        title="Bizning xizmatlarimiz"
        description="Ochabuloq Savdo majmuasida sizga sifatli va kafolatlangan xizmat turlarini taklif qilamiz."
      />
      <ServicesGrid items={overview} />
      <StatsBanner />
      <WhyChooseUs />
      <Contact />
    </Shell>
  );
}
