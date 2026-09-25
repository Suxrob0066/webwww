import { Icon, IconChip, type IconName } from "../ui/Icon";
import { SectionHeader } from "./PageHero";

const features: { icon: IconName; title: string; text: string }[] = [
  { icon: "shield", title: "Ishonch", text: "Yuqori sifat va ishonchli xizmat" },
  { icon: "award", title: "Tajriba", text: "2019-yildan beri mamnun mijozlar" },
  { icon: "thumbs-up", title: "Qulaylik", text: "Siz uchun shinam muhit va sharoit" },
];

const cards: { icon: IconName; title: string; text: string; textMobile: string }[] = [
  {
    icon: "calendar",
    title: "Qachondan beri faol?",
    text: "2019-yildan buyon xizmat ko'rsatib kelmoqdamiz va doimiy rivojlanishdamiz.",
    textMobile: "2019-yildan buyon xizmat ko'rsatib kelmoqdamiz.",
  },
  {
    icon: "compass",
    title: "Asosiy yo'nalishlar",
    text: "Oziq-ovqat do'koni · Xo'jalik mollari · Sartaroshxona",
    textMobile: "Oziq-ovqat · Xo'jalik mollari · Sartaroshxona",
  },
  {
    icon: "users",
    title: "Bizning maqsadimiz",
    text: "Har bir mijozga yuqori sifatli xizmat ko'rsatish va ishonchni oqlash.",
    textMobile: "Har bir mijozga sifatli xizmat va ishonchni oqlash.",
  },
];

/** About section (Figma 348:131 / 365:2908). */
export function About() {
  return (
    <section id="biz-haqimizda" className="scroll-mt-16 bg-surface lg:scroll-mt-[84px]">
      <div className="container-page flex flex-col gap-7 py-14 lg:flex-row lg:gap-12 lg:py-[100px]">
        <div className="flex flex-1 flex-col gap-6">
          <SectionHeader badge="Biz haqimizda" title="Ishonchli savdo majmuasi" />
          <p className="t-md text-fg-secondary hidden lg:block">
            &quot;Ochabuloq Savdo&quot; — Samarqand viloyatida joylashgan zamonaviy savdo markazi.
            Mijozlarimizga sifatli xizmat, keng assortiment va qulay muhit yaratishni ustuvor
            vazifamiz deb bilamiz.
          </p>
          <p className="t-md text-fg-secondary lg:hidden">
            &quot;Ochabuloq Savdo&quot; — Samarqand viloyatidagi zamonaviy savdo markazi. Sifatli
            xizmat, keng assortiment va qulay muhit ustuvor vazifamiz.
          </p>
          <ul className="flex flex-col gap-4 lg:pt-2">
            {features.map((f) => (
              <li key={f.title} className="flex items-center gap-3.5 lg:gap-4">
                <IconChip name={f.icon} />
                <div className="flex flex-col gap-0.5">
                  <p className="t-md-semibold text-fg-primary">{f.title}</p>
                  <p className="t-sm text-fg-secondary">{f.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-1 flex-col gap-3 lg:gap-5">
          {cards.map((c) => (
            <div
              key={c.title}
              className="flex flex-col gap-2.5 rounded-[16px] border border-line bg-canvas p-5 lg:gap-3 lg:bg-surface lg:px-8 lg:py-7"
            >
              <div className="flex items-center gap-2.5 lg:gap-3">
                <Icon name={c.icon} className="shrink-0 text-icon-brand" />
                <p className="t-md-semibold lg:t-lg-semibold text-fg-primary">{c.title}</p>
              </div>
              <p className="t-sm text-fg-secondary hidden lg:block">{c.text}</p>
              <p className="t-sm text-fg-secondary lg:hidden">{c.textMobile}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
