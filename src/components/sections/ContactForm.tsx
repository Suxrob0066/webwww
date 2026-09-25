"use client";

import { useState, type FormEvent } from "react";
import { site } from "@/lib/site";
import { Button } from "../ui/Button";
import { Input, Textarea } from "../ui/Field";
import { FormResult } from "../ui/misc";

type Status = "idle" | "sending" | "success" | "error";

const PHONE_RE = /^\+?998[\s()-]*\d{2}[\s()-]*\d{3}[\s-]*\d{2}[\s-]*\d{2}$/;

export function ContactForm({ compact = false }: { compact?: boolean }) {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<{ name?: string; phone?: string; message?: string }>({});
  const [values, setValues] = useState({ name: "", phone: "", message: "", website: "" });

  function validate() {
    const e: typeof errors = {};
    if (values.name.trim().length < 2) e.name = "Ismingizni kiriting";
    if (!PHONE_RE.test(values.phone.trim())) e.phone = "Telefon raqamini +998 formatida kiriting";
    if (values.message.length > 1000) e.message = "1000 belgidan oshmasin";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  async function onSubmit(ev: FormEvent) {
    ev.preventDefault();
    if (!validate()) return;
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
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
        onReset={() => {
          setValues({ name: "", phone: "", message: "", website: "" });
          setStatus("idle");
        }}
        onRetry={() => setStatus("idle")}
      />
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className={`flex w-full flex-col rounded-[16px] border border-line bg-surface ${
        compact ? "gap-4 px-5 py-6" : "gap-4 px-5 py-6 lg:gap-5 lg:p-8"
      }`}
    >
      <div className="flex flex-col gap-1.5 lg:gap-2">
        <p className="t-lg-semibold lg:t-xl-semibold text-fg-primary">Xabar qoldiring</p>
        <p className="t-sm text-fg-tertiary">
          Xabaringiz to&apos;g&apos;ridan-to&apos;g&apos;ri Telegram botimizga tushadi — tez orada
          javob beramiz.
        </p>
      </div>

      {/* honeypot */}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        value={values.website}
        onChange={(e) => setValues({ ...values, website: e.target.value })}
        className="hidden"
        aria-hidden="true"
      />

      <Input
        label="Ismingiz"
        name="name"
        placeholder="Sardor Rahimov"
        hint="Majburiy"
        autoComplete="name"
        required
        value={values.name}
        onChange={(e) => setValues({ ...values, name: e.target.value })}
        error={errors.name}
      />
      <Input
        label="Telefon raqamingiz"
        name="phone"
        type="tel"
        inputMode="tel"
        placeholder="+998 (90) 123-45-67"
        hint="Telegram botga shu raqam yuboriladi"
        autoComplete="tel"
        required
        value={values.phone}
        onChange={(e) => setValues({ ...values, phone: e.target.value })}
        error={errors.phone}
      />
      <Textarea
        label="Xabaringiz"
        name="message"
        placeholder="Assalomu alaykum, savolim bor edi..."
        hint="Ixtiyoriy, 1000 belgigacha"
        maxLength={1000}
        value={values.message}
        onChange={(e) => setValues({ ...values, message: e.target.value })}
        error={errors.message}
      />
      <Button type="submit" size="lg" className="w-full" disabled={status === "sending"}>
        {status === "sending" ? "Yuborilmoqda…" : "Yuborish"}
      </Button>
    </form>
  );
}
