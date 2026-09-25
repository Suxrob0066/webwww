"use client";

import { useState, type FormEvent } from "react";
import { site } from "@/lib/site";
import { Button } from "@/components/ui/Button";
import { Input, Textarea } from "@/components/ui/Field";
import { FormResult } from "@/components/ui/misc";

type Status = "idle" | "sending" | "success" | "error";
const PHONE_RE = /^\+?998[\s()-]*\d{2}[\s()-]*\d{3}[\s-]*\d{2}[\s-]*\d{2}$/;

const empty = { name: "", phone: "", product: "", quantity: "", note: "", website: "" };

/** Order form — "Buyurtma shakli" (Figma 1862:108360). Fields use canvas tone (inside a surface card). */
export function OrderForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [values, setValues] = useState(empty);
  const [errors, setErrors] = useState<Partial<Record<keyof typeof empty, string>>>({});

  function validate() {
    const e: typeof errors = {};
    if (values.name.trim().length < 2) e.name = "Ismingizni kiriting";
    if (!PHONE_RE.test(values.phone.trim())) e.phone = "Telefon raqamini +998 formatida kiriting";
    if (!values.product.trim()) e.product = "Mahsulot turini kiriting";
    if (!values.quantity.trim()) e.quantity = "Miqdorni kiriting";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  async function onSubmit(ev: FormEvent) {
    ev.preventDefault();
    if (!validate()) return;
    setStatus("sending");
    try {
      const res = await fetch("/api/order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      setStatus(res.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success" || status === "error") {
    return (
      <FormResult
        state={status}
        telegramHref={site.telegramHref}
        successTitle="Buyurtmangiz qabul qilindi"
        successBody="Mutaxassisimiz narx va mavjudlikni aniqlashtirish uchun tez orada siz bilan bog'lanadi."
        errorTitle="Buyurtma yuborilmadi"
        onReset={() => {
          setValues(empty);
          setStatus("idle");
        }}
        onRetry={() => setStatus("idle")}
      />
    );
  }

  const set = (k: keyof typeof empty) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setValues({ ...values, [k]: e.target.value });

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="flex flex-col gap-3 rounded-[12px] border border-line bg-surface p-4 lg:gap-4 lg:rounded-[16px] lg:p-8"
    >
      <input type="text" name="website" tabIndex={-1} autoComplete="off" value={values.website} onChange={set("website")} className="hidden" aria-hidden="true" />

      <div className="grid gap-3 lg:grid-cols-2 lg:gap-4">
        <Input tone="canvas" label="Ismingiz" name="name" placeholder="Ismingizni kiriting" autoComplete="name" required value={values.name} onChange={set("name")} error={errors.name} />
        <Input tone="canvas" label="Telefon raqamingiz" name="phone" type="tel" inputMode="tel" placeholder="+998 90 123-45-67" autoComplete="tel" required value={values.phone} onChange={set("phone")} error={errors.phone} />
        <Input tone="canvas" label="Mahsulot turi" name="product" placeholder="Masalan, mol go'shti" required value={values.product} onChange={set("product")} error={errors.product} />
        <Input tone="canvas" label="Miqdori" name="quantity" placeholder="Masalan, 5 kg" required value={values.quantity} onChange={set("quantity")} error={errors.quantity} />
      </div>
      <Textarea tone="canvas" label="Qo'shimcha izoh" name="note" placeholder="Yetkazib berish manzili yoki tilagingiz..." maxLength={1000} value={values.note} onChange={set("note")} className="[&_textarea]:min-h-[104px]" />

      <Button type="submit" size="lg" className="w-full" disabled={status === "sending"}>
        {status === "sending" ? "Yuborilmoqda…" : "Buyurtma yuborish"}
      </Button>
      <p className="t-sm text-fg-tertiary text-center">
        Ma&apos;lumotlaringiz faqat buyurtmani tasdiqlash uchun ishlatiladi.
      </p>
    </form>
  );
}
