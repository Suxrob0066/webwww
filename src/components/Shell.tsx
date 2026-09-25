import type { NavKey } from "@/lib/site";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { StickyBar } from "./StickyBar";

/** Navbar + content + footer + mobile sticky bar. */
export function Shell({ active, children }: { active: NavKey; children: React.ReactNode }) {
  return (
    <>
      <Navbar active={active} />
      <main className="flex-1">{children}</main>
      <Footer />
      <StickyBar />
    </>
  );
}
