import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { APP_URL, CTA_LABEL, NAV_LINKS } from "../config";

function LeafMark() {
  return (
    <img
      src="/logo-docalya.png"
      alt="Unessia"
      width="36"
      height="36"
      className="h-9 w-9 rounded-[11px] border border-beige-deep object-cover"
    />
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="sticky top-0 z-50 border-b border-beige-deep/50 bg-cream/70 backdrop-blur-xl"
    >
      <nav
        aria-label="Navigation principale"
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:h-20 sm:px-8"
      >
        {/* Logo */}
        <a href="#top" className="flex items-center gap-2.5" aria-label="Unessia — accueil">
          <LeafMark />
          <span className="text-[15px] font-semibold uppercase tracking-[0.28em] text-ink">
            Unessia
          </span>
        </a>

        {/* Onglets — desktop */}
        <ul className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-[14.5px] text-ink-soft transition-colors hover:text-ink"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Actions — desktop */}
        <div className="hidden items-center gap-4 lg:flex">
          <a href={APP_URL} className="text-[14.5px] text-ink-soft transition-colors hover:text-ink">
            Se connecter
          </a>
          <a
            href={APP_URL}
            className="inline-flex items-center justify-center rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-cream transition-all duration-200 hover:-translate-y-px hover:bg-black"
          >
            {CTA_LABEL}
          </a>
        </div>

        {/* Burger — mobile */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={open}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-beige-deep bg-cream-deep text-ink transition-colors hover:bg-cream lg:hidden"
        >
          {open ? <X className="h-5 w-5" strokeWidth={1.8} /> : <Menu className="h-5 w-5" strokeWidth={1.8} />}
        </button>
      </nav>

      {/* Menu — mobile */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-beige-deep/50 bg-cream/95 backdrop-blur-xl lg:hidden"
          >
            <ul className="flex flex-col gap-1 px-5 py-4">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-xl px-3 py-2.5 text-[15px] text-ink-soft transition-colors hover:bg-cream-deep hover:text-ink"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li className="mt-2 flex flex-col gap-2 border-t border-beige-deep/50 pt-4">
                <a href={APP_URL} className="rounded-full px-3 py-2.5 text-center text-[15px] text-ink-soft hover:text-ink">
                  Se connecter
                </a>
                <a
                  href={APP_URL}
                  className="rounded-full bg-ink px-5 py-3 text-center text-sm font-medium text-cream transition-colors hover:bg-black"
                >
                  {CTA_LABEL}
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
