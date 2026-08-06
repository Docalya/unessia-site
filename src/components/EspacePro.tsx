import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { APP_URL } from "../config";
import { fadeUp, stagger, viewportOnce } from "../lib/motion";

function Phone({ src, alt, className = "" }: { src: string; alt: string; className?: string }) {
  return (
    <div className={`relative mx-auto w-full max-w-[280px] rounded-[42px] border border-beige-deep bg-white p-2.5 shadow-float ${className}`}>
      <div className="overflow-hidden rounded-[34px] border border-beige-deep/50">
        <img src={src} alt={alt} loading="lazy" className="block w-full" />
      </div>
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
    <section id="espace-pro" className="px-5 py-9 sm:px-8 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="grid items-center gap-9 sm:gap-14 lg:grid-cols-2 lg:gap-16">
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={viewportOnce}>
            <motion.span variants={fadeUp} className="inline-flex items-center gap-2 text-[13px] font-medium tracking-wide text-ink-soft">
              <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-sage" />
              Micro-entreprise
            </motion.span>
            <motion.h2 variants={fadeUp} className="font-display mt-5 text-[2.1rem] font-medium leading-[1.1] text-ink sm:text-[3rem]">
              Un espace pro, <span className="text-sage-deep">cloisonné du personnel.</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-5 max-w-md text-[1.05rem] leading-relaxed text-ink-soft">
              Vos justificatifs, vos recettes et vos dépenses vivent dans un espace
              séparé. On bascule de l'un à l'autre d'un geste, sans jamais les mélanger.
            </motion.p>
            <motion.ul variants={fadeUp} className="mt-8 space-y-3.5">
              {atouts.map((a) => (
                <li key={a} className="flex items-start gap-3 text-[15px] leading-relaxed text-ink">
                  <span aria-hidden="true" className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-beige-deep bg-cream-deep text-sage-deep">
                    <Check className="h-3.5 w-3.5" strokeWidth={2.2} />
                  </span>
                  {a}
                </li>
              ))}
            </motion.ul>
            <motion.a variants={fadeUp} href={APP_URL} className="group mt-9 inline-flex items-center gap-1.5 text-[15px] font-medium text-ink transition-colors hover:text-sage-deep">
              Ouvrir mon espace pro
              <span aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-0.5">→</span>
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <Phone src={ecrans[0].src} alt={ecrans[0].alt} />
          </motion.div>
        </div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-12 sm:mt-20 grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-8"
        >
          {ecrans.slice(1).map((s) => (
            <motion.div key={s.label} variants={fadeUp} className="flex flex-col items-center">
              <Phone src={s.src} alt={s.alt} className="max-w-[230px]" />
              <span className="mt-6 text-[12px] font-semibold uppercase tracking-[0.14em] text-ink-soft">
                {s.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}