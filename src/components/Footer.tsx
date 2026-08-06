import { motion } from "framer-motion";
import { ShieldCheck, Lock, MapPin, type LucideIcon } from "lucide-react";
import { APP_URL, LEGAL_LINKS } from "../config";
import { fadeUp, stagger, viewportOnce } from "../lib/motion";

type Badge = { icon: LucideIcon; label: string };

const badges: Badge[] = [
  { icon: ShieldCheck, label: "Documents sécurisés" },
  { icon: Lock, label: "100 % confidentiel" },
  { icon: MapPin, label: "Hébergé en France" },
];

export default function Footer() {
  return (
    <footer className="border-t border-beige-deep/70 px-5 py-14 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <motion.ul
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-8"
        >
          {badges.map(({ icon: Icon, label }) => (
            <motion.li
              key={label}
              variants={fadeUp}
              className="inline-flex items-center gap-2 text-[13.5px] text-ink-soft"
            >
              <Icon className="h-4 w-4 text-ink-muted" strokeWidth={1.6} aria-hidden="true" />
              {label}
            </motion.li>
          ))}
        </motion.ul>

        <ul className="mt-12 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 border-t border-beige-deep/60 pt-8">
          {LEGAL_LINKS.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="text-[13px] text-ink-muted transition-colors hover:text-ink">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="mt-8 flex flex-col items-center gap-4 pt-2 sm:flex-row sm:justify-between">
          <span className="font-display text-[15px] font-medium tracking-[0.02em] text-ink">
            Unessia
          </span>
          <p className="text-[13px] text-ink-muted">
            © {new Date().getFullYear()} Unessia. Tous droits réservés.
          </p>
          <a
            href={APP_URL}
            className="text-[13.5px] font-medium text-ink-soft transition-colors hover:text-ink"
          >
            Accéder à l'application
          </a>
        </div>
      </div>
    </footer>
  );
}
