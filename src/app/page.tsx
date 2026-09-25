import { Shell } from "@/components/Shell";
import { Hero } from "@/components/sections/Hero";
import { GalleryStrip } from "@/components/sections/GalleryStrip";
import { About } from "@/components/sections/About";
import { Directions } from "@/components/sections/Directions";
import { StatsBanner } from "@/components/sections/Blocks";
import { Contact } from "@/components/sections/Contact";
import { buildStrip, homeGalleryWidths } from "@/lib/site";

export default function HomePage() {
  return (
    <Shell active="home">
      <Hero />
      <GalleryStrip photos={buildStrip("home", homeGalleryWidths, "Ochabuloq Savdo")} tone="surface" />
      <About />
      <Directions />
      <StatsBanner />
      <Contact />
    </Shell>
  );
}
