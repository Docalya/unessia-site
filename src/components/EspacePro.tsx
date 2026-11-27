import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { APP_URL } from "../config";
import { fadeUp, stagger, viewportOnce } from "../lib/motion";

function Phone({ src, alt, className = "" }: { src: string; alt: string; className?: string }) {
  return (
    <div className={`mx-auto w-full max-w-[280px] overflow-hidden rounded-[34px] bg-white shadow-float ring-1 ring-ink/5 ${className}`}>
      <img src={src} alt={alt} loading="lazy" className="block w-full" />
    </div>
  );
}

const atouts = [
  "Recettes et dépenses, chaque écriture avec son justificatif",
  "Seuils de la micro-entreprise et franchise de TVA suivis en direct",
  "Estimation des cotisations selon votre activité — BNC, BIC ou CIPAV",
  "Factures clients et fournisseurs distinguées automatiquement",
];

const ecrans = [
  { src: "/pro/pro_accueil.png", label: "Accueil pro", alt: "L'accueil de l'espace professionnel : chiffre d'affaires, seuils et échéances." },
  { src: "/pro/pro_copilote.png", label: "Copilote", alt: "Le copilote professionnel : démarches et obligations à venir." },
  { src: "/pro/pro_finances.png", label: "Finances", alt: "Recettes et dépenses professionnelles, avec justificatifs rattachés." },
];

export default function EspacePro() {
  return (
    // Un ton plus professionnel : fond sauge très clair, mêmes formes et mêmes ors.
    <section id="espace-pro" className="bg-sage-mist px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={viewportOnce} className="min-w-0">
            <motion.p variants={fadeUp} className="inline-flex items-center gap-2 rounded-full border border-sage/30 bg-white/70 px-3.5 py-1.5 text-[12px] font-extrabold uppercase tracking-[0.2em] text-sage-deep">
              Espace Pro · Micro-entreprise
            </motion.p>
            <motion.h2 variants={fadeUp} className="font-display mt-5 text-[2rem] font-extrabold leading-[1.12] text-ink sm:text-[2.9rem]">
              Un espace pro, <span className="text-sage-deep">cloisonné du personnel.</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-5 max-w-md text-[1.03rem] leading-relaxed text-ink-soft sm:text-[1.12rem]">
              Vos justificatifs, vos recettes et vos dépenses vivent dans un espace
              séparé. On bascule de l'un à l'autre d'un geste, sans jamais les mélanger.
            </motion.p>
            <motion.ul variants={fadeUp} className="mt-8 space-y-3.5">
              {atouts.map((a) => (
                <li key={a} className="flex items-start gap-3 text-[15.5px] leading-relaxed text-ink">
                  <span aria-hidden="true" className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white text-sage-deep ring-1 ring-sage/25">
                    <Check className="h-3.5 w-3.5" strokeWidth={2.4} />
                  </span>
                  {a}
                </li>
              ))}
            </motion.ul>
            <motion.a variants={fadeUp} href={APP_URL} className="group mt-9 inline-flex items-center gap-1.5 border-b border-sage/40 pb-0.5 text-[16px] font-bold text-ink transition-colors hover:text-sage-deep">
              Ouvrir mon espace pro
              <span aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-0.5">→</span>
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto h-[470px] w-full max-w-[460px] sm:h-[580px]"
          >
            <div className="absolute left-0 top-12 w-[52%] -rotate-[4deg] opacity-95"><Phone src={ecrans[2].src} alt={ecrans[2].alt} /></div>
            <div className="absolute right-0 top-12 w-[52%] rotate-[4deg] opacity-95"><Phone src={ecrans[1].src} alt={ecrans[1].alt} /></div>
            <div className="absolute left-1/2 top-0 z-10 w-[60%] -translate-x-1/2"><Phone src={ecrans[0].src} alt={ecrans[0].alt} /></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
