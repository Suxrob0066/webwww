export const site = {
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "https://ochabuloq.vercel.app").replace(/\/$/, ""),
  name: "Ochabuloq Savdo",
  description:
    "Oziq-ovqat, xo'jalik mollari va zamonaviy sartaroshxona — sifat va ishonch bir manzilda. Samarqand viloyati, Qo'shrabot tumani, Ochabuloq MFY.",
  phoneDisplay: "+998 (97) 878-07-78",
  phoneHref: "tel:+998978780778",
  telegramHref: "https://t.me/ochabuloq_savdo",
  instagramHref: "https://instagram.com/_suxrob.0066",
  email: "info@ochabuloq.uz",
  address: "Samarqand viloyati, Qo'shrabot tumani, Ochabuloq MFY",
  addressShort: "Qo'shrabot tumani, Ochabuloq MFY",
  hours: "Har kuni 08:00 – 22:00",
  mapsHref: "https://maps.google.com/?q=Ochabuloq+MFY,+Qo'shrabot,+Samarqand",
  foundedYear: 2019,
};

export type NavKey = "home" | "about" | "directions" | "contact";

export const navLinks: { key: NavKey; label: string; href: string }[] = [
  { key: "home", label: "Bosh sahifa", href: "/" },
  { key: "about", label: "Biz haqimizda", href: "/#biz-haqimizda" },
  { key: "directions", label: "Yo'nalishlarimiz", href: "/xizmatlar" },
  { key: "contact", label: "Aloqa", href: "/#aloqa" },
];

export const directions = [
  {
    slug: "oziq-ovqat-dokoni",
    phoneDisplay: "+998 (93) 236-13-45",
    phoneHref: "tel:+998932361345",
    title: "Oziq-ovqat do'koni",
    badge: "OZIQ-OVQAT",
    icon: "shopping-cart",
    image: "/images/directions/oziq-ovqat.jpg",
    shortDescription:
      "Kundalik ehtiyoj uchun sifatli va yangi mahsulotlar hamda oziq-ovqatlar.",
    shortDescriptionMobile:
      "Kundalik ehtiyoj uchun sifatli va yangi mahsulotlar.",
    heroDescription:
      "Kundalik ehtiyojingiz uchun eng sara, yangi va hamyonbop mahsulotlar bir joyda.",
    galleryFolder: "oziq-ovqat",
    galleryWidths: [261, 180, 324, 240, 240, 240, 240, 240],
    services: [
      {
        icon: "shopping-cart",
        title: "Yangi meva va sabzavotlar",
        description:
          "Har kuni daladan keltiriladigan, vitaminlarga boy sarxil mahsulotlar.",
      },
      {
        icon: "home",
        title: "Sut mahsulotlari",
        description:
          "Tabiiy sut, qatiq, qaymoq va pishloqning keng assortimenti.",
      },
      {
        icon: "award",
        title: "Non va pishiriqlar",
        description:
          "Har kuni issiq pishirilgan non, kulcha va turli pishiriqlar.",
      },
    ],
  },
  {
    slug: "xojalik-mollari",
    phoneDisplay: "+998 (88) 911-77-88",
    phoneHref: "tel:+998889117788",
    title: "Xo'jalik mollari",
    badge: "XO'JALIK MOLLARI",
    icon: "home",
    image: "/images/directions/xojalik.jpg",
    shortDescription:
      "Uy-ro'zg'or uchun kerakli barcha sifatli tovarlar va asbob-uskunalar.",
    shortDescriptionMobile:
      "Uy-ro'zg'or uchun kerakli sifatli tovarlar va asboblar.",
    heroDescription:
      "Uyingiz va ro'zg'oringiz uchun zarur bo'lgan sifatli tovarlar hamda asbob-uskunalar.",
    galleryFolder: "xojalik",
    galleryWidths: [560, 180, 324, 569, 180, 569, 180, 180, 569],
    // Figma'da bu sahifa uchun alohida matn yo'q — komponent izohiga ko'ra moslashtirildi
    services: [
      {
        icon: "home",
        title: "Uy-ro'zg'or buyumlari",
        description:
          "Oshxona, hammom va yashash xonasi uchun kundalik kerakli buyumlar.",
      },
      {
        icon: "shield",
        title: "Tozalash vositalari",
        description:
          "Kir yuvish, idish yuvish va uy tozalash uchun ishonchli mahsulotlar.",
      },
      {
        icon: "award",
        title: "Asbob-uskunalar",
        description:
          "Ta'mirlash va bog' ishlari uchun sifatli qo'l asboblari.",
      },
      {
        icon: "shopping-cart",
        title: "Elektr va santexnika",
        description:
          "Lampalar, kabellar, jo'mraklar va boshqa zarur ehtiyot qismlar.",
      },
    ],
  },
  {
    slug: "sartaroshxona",
    phoneDisplay: "+998 (94) 670-50-37",
    phoneHref: "tel:+998946705037",
    title: "Sartaroshxona",
    badge: "SARTAROSHXONA",
    icon: "scissors",
    image: "/images/directions/sartaroshxona.jpg",
    shortDescription:
      "Zamonaviy uslublar va tajribali ustalardan professional xizmatlar.",
    shortDescriptionMobile:
      "Zamonaviy uslublar va tajribali ustalardan xizmatlar.",
    heroDescription:
      "Zamonaviy uslub va tajribali ustalardan professional darajadagi xizmatlar.",
    galleryFolder: "sartaroshxona",
    galleryWidths: [569, 180, 180, 320, 320],
    services: [
      {
        icon: "scissors",
        title: "Erkaklar soch turmagi",
        description:
          "Klassik va zamonaviy uslublar — har bir mijozga mos yechim.",
      },
      {
        icon: "users",
        title: "Bolalar uchun soch olish",
        description:
          "Bolalarga qulay, tez va ehtiyotkorlik bilan xizmat ko'rsatiladi.",
      },
      {
        icon: "award",
        title: "Soqol va mo'ylov parvarishi",
        description:
          "Shakl berish, tekislash va professional vositalar bilan parvarish.",
      },
      {
        icon: "shield",
        title: "Gigiyena va sterilizatsiya",
        description:
          "Har bir mijozdan so'ng asboblar sterilizatsiya qilinadi.",
      },
    ],
  },
] as const;

export type Direction = (typeof directions)[number];

export const whyChooseUs = [
  {
    icon: "award",
    title: "Sifatli mahsulotlar",
    description: "Har bir tovar va xizmat sinchkovlik bilan tekshiriladi.",
  },
  {
    icon: "users",
    title: "Tajribali mutaxassislar",
    description: "Sizga o'z sohasining ustalari xizmat ko'rsatadi.",
  },
  {
    icon: "thumbs-up",
    title: "Qulay narxlar",
    description: "Sifat va narx mutanosibligi bizning ustunligimiz.",
  },
  {
    icon: "home",
    title: "Zamonaviy muhit",
    description: "Xaridorlar uchun shinam va toza sharoit.",
  },
  {
    icon: "shopping-cart",
    title: "Keng assortiment",
    description: "Izlagan narsangizni bir manzildan topasiz.",
  },
  {
    icon: "shield",
    title: "Ishonchli xizmat",
    description: "2019-yildan beri hududdagi doimiy hamkor.",
  },
] as const;

export const stats = [
  { value: "2019", label: "Yildan beri faoliyat", labelMobile: "Yildan beri" },
  { value: "08:00–22:00", label: "Har kuni ochiq", labelMobile: "Har kuni ochiq" },
  { value: "3", label: "Asosiy yo'nalish", labelMobile: "Asosiy yo'nalish" },
  { value: "1", label: "Manzil — hammasi bir joyda", labelMobile: "Bitta manzil" },
] as const;

export const homeGalleryWidths = [569, 569, 180, 569, 180, 180, 569] as const;

export type GalleryCategory =
  | "all"
  | "oziq-ovqat"
  | "xojalik"
  | "sartaroshxona"
  | "tashqi";

export const galleryCategories: { key: GalleryCategory; label: string }[] = [
  { key: "all", label: "Barchasi" },
  { key: "oziq-ovqat", label: "Oziq-ovqat do'koni" },
  { key: "xojalik", label: "Xo'jalik mollari" },
  { key: "sartaroshxona", label: "Sartaroshxona" },
  { key: "tashqi", label: "Tashqi ko'rinish" },
];

export type GalleryImage = {
  src: string;
  alt: string;
  category: Exclude<GalleryCategory, "all">;
};

export const galleryImages: GalleryImage[] = [
  ...[261, 180, 324, 240, 240, 240, 240, 240].map((_, i) => ({
    src: `/images/oziq-ovqat/${i + 1}.jpg`,
    alt: `Oziq-ovqat do'koni — ${i + 1}`,
    category: "oziq-ovqat" as const,
  })),
  ...[560, 180, 324, 569, 180, 569, 180, 180, 569].map((_, i) => ({
    src: `/images/xojalik/${i + 1}.jpg`,
    alt: `Xo'jalik mollari — ${i + 1}`,
    category: "xojalik" as const,
  })),
  ...[569, 180, 180, 320, 320].map((_, i) => ({
    src: `/images/sartaroshxona/${i + 1}.jpg`,
    alt: `Sartaroshxona — ${i + 1}`,
    category: "sartaroshxona" as const,
  })),
  ...[1, 2].map((i) => ({
    src: `/images/home/${i}.jpg`,
    alt: `Tashqi ko'rinish — ${i}`,
    category: "tashqi" as const,
  })),
];

export type StripPhoto = { src: string; alt: string; width: number };

/** Builds a photo strip list from a public/images/<folder>/N.jpg series. */
export function buildStrip(folder: string, widths: readonly number[], altPrefix: string): StripPhoto[] {
  return widths.map((w, i) => ({
    src: `/images/${folder}/${i + 1}.jpg`,
    alt: `${altPrefix} — ${i + 1}`,
    width: w,
  }));
}
