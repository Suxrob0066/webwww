import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { site } from "@/lib/site";
import { themeInitScript } from "@/components/ui/ThemeToggle";
import "./globals.css";

// Inter (variable) — self-hosted, SIL OFL 1.1
const inter = localFont({
  src: [
    { path: "../fonts/inter-latin-wght-normal.woff2", style: "normal" },
    { path: "../fonts/inter-latin-ext-wght-normal.woff2", style: "normal" },
    { path: "../fonts/inter-cyrillic-wght-normal.woff2", style: "normal" },
  ],
  weight: "100 900",
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://ochabuloq.uz"),
  title: {
    default: `${site.name} — savdo majmuasi`,
    template: `%s — ${site.name}`,
  },
  description: site.description,
  openGraph: {
    type: "website",
    locale: "uz_UZ",
    siteName: site.name,
    title: `${site.name} — savdo majmuasi`,
    description: site.description,
    images: ["/images/hero/majmua.jpg"],
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#111318" },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="uz" className={`${inter.variable} h-full antialiased`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="flex min-h-full flex-col bg-canvas text-fg-primary">{children}</body>
    </html>
  );
}
