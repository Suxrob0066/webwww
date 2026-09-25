import { NextResponse } from "next/server";
import { esc, rateLimited, sendTelegramMessage } from "@/lib/telegram";

const PHONE_RE = /^\+?998[\s()-]*\d{2}[\s()-]*\d{3}[\s-]*\d{2}[\s-]*\d{2}$/;

export async function POST(req: Request) {
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  if (rateLimited(ip)) {
    return NextResponse.json({ ok: false, error: "rate_limited" }, { status: 429 });
  }

  let body: { name?: string; phone?: string; message?: string; website?: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "bad_json" }, { status: 400 });
  }

  // honeypot
  if (body.website) return NextResponse.json({ ok: true });

  const name = (body.name ?? "").trim().slice(0, 100);
  const phone = (body.phone ?? "").trim().slice(0, 30);
  const message = (body.message ?? "").trim().slice(0, 1000);

  if (name.length < 2 || !PHONE_RE.test(phone)) {
    return NextResponse.json({ ok: false, error: "validation" }, { status: 422 });
  }

  const text =
    `<b>📩 Yangi xabar — sayt</b>\n` +
    `👤 Ism: ${esc(name)}\n` +
    `📞 Telefon: ${esc(phone)}\n` +
    (message ? `💬 Xabar: ${esc(message)}\n` : "") +
    `🕒 ${new Date().toLocaleString("uz-UZ", { timeZone: "Asia/Tashkent" })}`;

  const sent = await sendTelegramMessage(text);
  return NextResponse.json({ ok: sent }, { status: sent ? 200 : 502 });
}
