import { Badge } from "../ui/Badge";
import { BackLink } from "../ui/misc";

/** Inner-page hero (Figma 352:467 / 367:2997). */
export function PageHero({
  badge,
  title,
  description,
  backHref = "/",
}: {
  badge: string;
  title: string;
  description: string;
  backHref?: string;
}) {
  return (
    <section className="border-b border-line bg-surface">
      <div className="container-page flex flex-col gap-7 py-10 lg:gap-4 lg:py-[72px]">
        <BackLink href={backHref} />
        <div className="flex flex-col gap-3 lg:gap-4">
          <div>
            <Badge>{badge}</Badge>
          </div>
          <h1 className="t-display-md-semibold lg:t-display-xl text-fg-primary">{title}</h1>
          <p className="t-md lg:t-xl text-fg-secondary max-w-[760px]">{description}</p>
        </div>
      </div>
    </section>
  );
}

/** Badge + heading (+ optional lead) block used at the top of most sections. */
export function SectionHeader({
  badge,
  title,
  lead,
  id,
}: {
  badge: string;
  title: string;
  lead?: string;
  id?: string;
}) {
  return (
    <div className="flex flex-col gap-3 lg:gap-4">
      <div>
        <Badge>{badge}</Badge>
      </div>
      <h2 id={id} className="t-section-heading text-fg-primary">
        {title}
      </h2>
      {lead && <p className="t-md text-fg-secondary">{lead}</p>}
    </div>
  );
}
