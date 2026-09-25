# Ochabuloq Savdo — veb-sayt

Samarqand viloyati, Qo'shrabot tumanidagi "Ochabuloq Savdo" savdo majmuasi sayti.
Figma dizayni asosida **Next.js 16 (App Router) + Tailwind CSS v4** bilan yozilgan.

Figma: `Admin Panel (WMS PDA)` → "Ochabuloq" sahifasi.

## Ishga tushirish

```bash
npm install
cp .env.example .env.local   # Telegram bot ma'lumotlarini kiriting
npm run dev                  # http://localhost:3000
```

Production: `npm run build && npm start`. Vercel'ga to'g'ridan-to'g'ri deploy qilsa bo'ladi
(env o'zgaruvchilarini Vercel sozlamalariga qo'shing).

## Sahifalar

| Yo'l | Figma |
|---|---|
| `/` | 01 · Bosh sahifa (Hero, galereya lentasi, Biz haqimizda, Yo'nalishlar, Statistika, Aloqa) |
| `/xizmatlar` | 02 · Xizmatlar |
| `/oziq-ovqat-dokoni` | 03 · Oziq-ovqat do'koni |
| `/xojalik-mollari` | 04 · Xo'jalik mollari |
| `/sartaroshxona` | 05 · Sartaroshxona |
| `/galereya` | Gallery page grid (filtr + lightbox) |
| `/gosht-mahsulotlari` | M03 · Go'sht mahsulotlari (buyurtma formasi) |
| boshqa har qanday yo'l | 07 · 404 |

Quyuq / oq tema: navbar'dagi tugma, tanlov `localStorage`da saqlanadi. Hero va footer har doim quyuq.

## Telegram bot

Aloqa formasi (`/api/contact`) va buyurtma formasi (`/api/order`) xabarlarni Telegram botga yuboradi:

1. [@BotFather](https://t.me/BotFather) orqali bot yarating → `TELEGRAM_BOT_TOKEN`
2. Botni kerakli guruh/kanalga qo'shing, chat ID sini oling → `TELEGRAM_CHAT_ID`
3. `.env.local` ga yozing. Env bo'lmasa, dev rejimida xabar konsolga chiqadi.

## Rasmlar

`public/images/` ichidagi barcha `.jpg` fayllar **vaqtinchalik placeholder** (Figma'dan rasmlarni
avtomatik yuklab bo'lmadi). Figma'dan eksport qilib, xuddi shu nomlar bilan almashtiring:

| Papka | Fayllar | Figma manbasi |
|---|---|---|
| `hero/` | `majmua.jpg` (1920×1080) | Hero / Desktop → "photo" qatlami |
| `home/` | `1.jpg … 7.jpg` | Gallery strip / Category=Bosh sahifa |
| `oziq-ovqat/` | `1.jpg … 8.jpg` | Gallery strip / Category=Mini market |
| `xojalik/` | `1.jpg … 9.jpg` | Gallery strip / Category=Xo'jalik mollari |
| `sartaroshxona/` | `1.jpg … 5.jpg` | Gallery strip / Category=Sartaroshona |
| `directions/` | `oziq-ovqat.jpg`, `xojalik.jpg`, `sartaroshxona.jpg` | Direction card → "card-img" |
| `gosht/` | `mol.jpg`, `qoy.jpg`, `tovuq.jpg` | M03 → "Mahsulot rasmi" |
| `gallery/` | `1.jpg … 12.jpg` | Gallery page grid |
| `map/` | `map.jpg` | Contact → xarita (yoki Google Maps iframe bilan almashtiring) |

Rasm tartibi va nisbatlari `src/lib/site.ts` dagi `galleryWidths` massivlarida (Figma'dagi kenglik, 320px balandlikda).

## Tuzilma

```
src/
  app/            sahifalar, API route'lar, globals.css (tokenlar)
  components/     Navbar, Footer, StickyBar, Lightbox, sections/*, ui/*
  lib/site.ts     matnlar, kontaktlar, yo'nalishlar, galereya
  lib/telegram.ts Telegram yuborish + rate limit
  fonts/          Inter (variable, o'z-o'zidan host qilingan)
```

Dizayn tokenlari `globals.css` da CSS o'zgaruvchilar sifatida (`--bg-canvas`, `--text-primary` …),
Tailwind'da `bg-canvas`, `text-fg-primary`, `border-line` kabi nomlar bilan ishlatiladi.
Matn uslublari: `t-display-lg`, `t-md-semibold`, `t-eyebrow` va h.k.

Kontaktlar (telefon, Telegram, Instagram, email, manzil) — `src/lib/site.ts` da.
