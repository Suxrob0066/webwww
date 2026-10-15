import { Shell } from "@/components/Shell";
import { Hero } from "@/components/sections/Hero";
import { GalleryStrip } from "@/components/sections/GalleryStrip";
import { About } from "@/components/sections/About";
import { Directions } from "@/components/sections/Directions";
import { StatsBanner } from "@/components/sections/Blocks";
import { Contact } from "@/components/sections/Contact";
import { buildStrip, homeGalleryWidths, site } from "@/lib/site";

// Google uchun mahalliy biznes ma'lumoti (schema.org)
const businessJsonLd = {
  "@context": "https://schema.org",
  "@type": "Store",
  name: site.name,
  description: site.description,
  url: site.url,
  image: `${site.url}/images/hero/majmua.jpg`,
  telephone: site.phoneHref.replace("tel:", ""),
  foundingDate: String(site.foundedYear),
  address: {
    "@type": "PostalAddress",
    streetAddress: "Ochabuloq MFY",
    addressLocality: "Qo'shrabot tumani",
    addressRegion: "Samarqand viloyati",
    addressCountry: "UZ",
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    opens: "08:00",
    closes: "22:00",
  },
  sameAs: [site.telegramHref, site.instagramHref],
};

export default function HomePage() {
  return (
    <Shell active="home">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(businessJsonLd) }} />
      <Hero />
      <GalleryStrip photos={buildStrip("home", homeGalleryWidths, "Ochabuloq Savdo")} tone="surface" />
      <About />
      <Directions />
      <StatsBanner />
      <Contact />
    </Shell>
  );
}
