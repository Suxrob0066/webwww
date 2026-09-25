import type { Metadata } from "next";
import { Shell } from "@/components/Shell";
import { PageHero } from "@/components/sections/PageHero";
import { CtaBand } from "@/components/sections/Blocks";
import { GalleryGrid } from "./GalleryGrid";

export const metadata: Metadata = {
  title: "Galereya",
  description: "Ochabuloq Savdo majmuasi — do'kon, xo'jalik mollari va sartaroshxona rasmlari.",
};

export default function GalleryPage() {
  return (
    <Shell active="home">
      <PageHero
        badge="Galereya"
        title="Galereya"
        description="Majmuamizning ichki va tashqi ko'rinishi — har bir yo'nalish bo'yicha rasmlar."
      />
      <GalleryGrid />
      <CtaBand />
    </Shell>
  );
}
