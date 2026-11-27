import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { APP_URL, CTA_LABEL, NAV_LINKS } from "../config";

function Logo() {
  return (
    <img
      src="/logo-unessia.png"
      alt=""
      width="36"
      height="36"
      className="h-9 w-9 rounded-[11px] object-cover"
    />
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);
  // Transparent au-dessus du hero, voile crème dès qu'on fait défiler.
  const [defile, setDefile] = useState(false);
  useEffect(() => {
    const maj = () => setDefile(window.scrollY > 24);
    maj();
    window.addEventListener("scroll", maj, { passive: true });
    return () => window.removeEventListener("scroll", maj);
  }, []);
  const voile = defile || open;

  return (
    <motion.header
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        voile ? "border-b border-sand/60 bg-cream/85 backdrop-blur-xl" : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav
        aria-label="Navigation principale"
        className="mx-auto flex h-[68px] max-w-6xl items-center justify-between px-5 sm:h-20 sm:px-8"
      >
        <a href="#top" className="flex items-center gap-3" aria-label="Unessia — accueil">
          <Logo />
          <span className="text-[14.5px] font-bold uppercase tracking-[0.32em] text-ink">Unessia</span>
        </a>

        {/* Onglets — ordinateur */}
        <ul className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="text-[15px] font-semibold text-ink-soft transition-colors hover:text-ink">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Actions — ordinateur */}
        <div className="hidden items-center gap-5 lg:flex">
          <a href={APP_URL} className="text-[15px] font-semibold text-ink-soft transition-colors hover:text-ink">
            Se connecter
          </a>
          <a
            href={APP_URL}
            className="inline-flex items-center justify-center rounded-full bg-ink px-5 py-2.5 text-[15px] font-bold text-white shadow-[0_10px_24px_-12px_rgba(62,46,30,0.6)] transition-all duration-200 hover:-translate-y-px hover:bg-black"
          >
            {CTA_LABEL}
          </a>
        </div>

        {/* Menu — mobile */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={open}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-sand/70 bg-white/75 text-ink transition-colors hover:bg-white lg:hidden"
        >
          {open ? <X className="h-5 w-5" strokeWidth={1.8} /> : <Menu className="h-5 w-5" strokeWidth={1.8} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-sand/50 lg:hidden"
          >
            <ul className="flex flex-col gap-1 px-5 py-4">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-xl px-3 py-3 text-[16px] font-semibold text-ink-soft transition-colors hover:bg-cream-deep hover:text-ink"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li className="mt-2 flex flex-col gap-2 border-t border-sand/50 pt-4">
                <a href={APP_URL} className="rounded-full px-3 py-3 text-center text-[16px] font-semibold text-ink-soft hover:text-ink">
                  Se connecter
                </a>
                <a href={APP_URL} className="rounded-full bg-ink px-5 py-3.5 text-center text-[15px] font-bold text-white transition-colors hover:bg-black">
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
