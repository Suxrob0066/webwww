import {
  ShoppingCart,
  Home,
  Scissors,
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  ArrowRight,
  Calendar,
  Compass,
  Shield,
  Award,
  Users,
  ThumbsUp,
  Menu,
  X,
  ChevronRight,
  ChevronLeft,
  ArrowLeft,
  Check,
  AlertTriangle,
  Sun,
  Moon,
  type LucideProps,
} from "lucide-react";

/** Instagram glyph (brand icons are not shipped in lucide-react). */
function InstagramIcon({ size = 20, strokeWidth = 2, className, ...rest }: LucideProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...rest}
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

/** Figma "Icon" component set — 20×20, 2px stroke, Lucide style. */
export const icons = {
  "shopping-cart": ShoppingCart,
  home: Home,
  scissors: Scissors,
  phone: Phone,
  mail: Mail,
  "map-pin": MapPin,
  clock: Clock,
  send: Send,
  "arrow-right": ArrowRight,
  calendar: Calendar,
  compass: Compass,
  shield: Shield,
  award: Award,
  users: Users,
  "thumbs-up": ThumbsUp,
  menu: Menu,
  close: X,
  instagram: InstagramIcon,
  "chevron-right": ChevronRight,
  "chevron-left": ChevronLeft,
  "arrow-left": ArrowLeft,
  check: Check,
  "alert-triangle": AlertTriangle,
  sun: Sun,
  moon: Moon,
} as const;

export type IconName = keyof typeof icons;

type IconProps = Omit<LucideProps, "ref"> & { name: IconName };

export function Icon({ name, size = 20, strokeWidth = 2, ...rest }: IconProps) {
  const Cmp = icons[name];
  return <Cmp size={size} strokeWidth={strokeWidth} aria-hidden="true" {...rest} />;
}

/** 40×40 brand-subtle chip with a brand-colored icon (Figma "icon-chip"). */
export function IconChip({ name, className = "" }: { name: IconName; className?: string }) {
  return (
    <span
      className={`inline-flex size-10 shrink-0 items-center justify-center rounded-[8px] bg-brand-subtle text-icon-brand ${className}`}
    >
      <Icon name={name} />
    </span>
  );
}
