import { motion } from "framer-motion";
import { Cpu, KeyRound, Share2, MapPin, type LucideIcon } from "lucide-react";
import { APP_URL, HEBERGEMENT_FRANCE_VERIFIE, LEGAL_LINKS } from "../config";
import { fadeUp, stagger, viewportOnce } from "../lib/motion";

type Badge = { icon: LucideIcon; label: string };

// Seulement ce qui est vérifié (voir la section Confidentialité).
const badges: Badge[] = [
  { icon: Cpu, label: "Aucune IA tierce" },
  { icon: KeyRound, label: "Double authentification" },
  { icon: Share2, label: "Partage sous contrôle" },
  ...(HEBERGEMENT_FRANCE_VERIFIE ? [{ icon: MapPin, label: "Hébergé en France" }] : []),
];

export default function Footer() {
  return (
    <footer className="border-t border-sand/70 bg-cream px-5 py-14 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <motion.ul
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-9"
        >
          {badges.map(({ icon: Icon, label }) => (
            <motion.li key={label} variants={fadeUp} className="inline-flex items-center gap-2 text-[14px] font-semibold text-ink-soft">
              <Icon className="h-4 w-4 text-antique" strokeWidth={1.6} aria-hidden="true" />
              {label}
            </motion.li>
          ))}
        </motion.ul>

        <ul className="mt-12 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 border-t border-sand/60 pt-8">
          {LEGAL_LINKS.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="text-[13.5px] text-ink-muted transition-colors hover:text-ink">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="mt-8 flex flex-col items-center gap-4 pt-2 sm:flex-row sm:justify-between">
          <span className="text-[14px] font-bold uppercase tracking-[0.3em] text-ink">Unessia</span>
          <p className="text-[13px] text-ink-muted">© {new Date().getFullYear()} Unessia. Tous droits réservés.</p>
          <a href={APP_URL} className="text-[14px] font-semibold text-ink-soft transition-colors hover:text-ink">
            Accéder à l'application
          </a>
        </div>
      </div>
    </footer>
  );
}
