import { NextResponse } from "next/server";
import { esc, rateLimited, sendTelegramMessage } from "@/lib/telegram";

const PHONE_RE = /^\+?998[\s()-]*\d{2}[\s()-]*\d{3}[\s-]*\d{2}[\s-]*\d{2}$/;

/** Go'sht mahsulotlari — buyurtma so'rovi */
export async function POST(req: Request) {
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  if (rateLimited(ip)) {
    return NextResponse.json({ ok: false, error: "rate_limited" }, { status: 429 });
  }

  let body: {
    name?: string;
    phone?: string;
    product?: string;
    quantity?: string;
    note?: string;
    website?: string;
  };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "bad_json" }, { status: 400 });
  }
  if (body.website) return NextResponse.json({ ok: true });

  const name = (body.name ?? "").trim().slice(0, 100);
  const phone = (body.phone ?? "").trim().slice(0, 30);
  const product = (body.product ?? "").trim().slice(0, 100);
  const quantity = (body.quantity ?? "").trim().slice(0, 50);
  const note = (body.note ?? "").trim().slice(0, 1000);

  if (name.length < 2 || !PHONE_RE.test(phone) || !product || !quantity) {
    return NextResponse.json({ ok: false, error: "validation" }, { status: 422 });
  }

  const text =
    `<b>🥩 Yangi buyurtma — go'sht mahsulotlari</b>\n` +
    `👤 Ism: ${esc(name)}\n` +
    `📞 Telefon: ${esc(phone)}\n` +
    `🛒 Mahsulot: ${esc(product)}\n` +
    `⚖️ Miqdor: ${esc(quantity)}\n` +
    (note ? `📝 Izoh: ${esc(note)}\n` : "") +
    `🕒 ${new Date().toLocaleString("uz-UZ", { timeZone: "Asia/Tashkent" })}`;

  const sent = await sendTelegramMessage(text);
  return NextResponse.json({ ok: sent }, { status: sent ? 200 : 502 });
}
