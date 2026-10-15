import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Shell } from "@/components/Shell";
import { PageHero } from "@/components/sections/PageHero";
import { GalleryStrip } from "@/components/sections/GalleryStrip";
import { ServicesGrid, WhyChooseUs } from "@/components/sections/Blocks";
import { Contact } from "@/components/sections/Contact";
import { buildStrip, directions } from "@/lib/site";

type Params = { direction: string };

export function generateStaticParams(): Params[] {
  return directions.map((d) => ({ direction: d.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { direction } = await params;
  const d = directions.find((x) => x.slug === direction);
  if (!d) return {};
  return { title: d.title, description: d.heroDescription };
}

export default async function DirectionPage({ params }: { params: Promise<Params> }) {
  const { direction } = await params;
  const d = directions.find((x) => x.slug === direction);
  if (!d) notFound();

  return (
    <Shell active="directions">
      <PageHero badge={d.badge} title={d.title} description={d.heroDescription} backHref="/xizmatlar" />
      <GalleryStrip photos={buildStrip(d.galleryFolder, d.galleryWidths, d.title)} />
      <ServicesGrid items={d.services} />
      <WhyChooseUs />
      <Contact phone={{ display: d.phoneDisplay, href: d.phoneHref }} />
    </Shell>
  );
}
