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

const checklist = [
  "Interface épurée et agréable",
  "Pensée pour votre tranquillité",
  "Accessible partout, tout le temps",
];

const gallery = [
  { src: "/app/planning.jpg", label: "Planning", alt: "Vos tâches et rendez-vous, réunis dans un agenda clair." },
  { src: "/app/budget.jpg", label: "Budget", alt: "Vos dépenses réparties par catégorie, en un coup d'œil." },
  { src: "/app/aides.jpg", label: "Aides", alt: "Les aides auxquelles vous pourriez avoir droit." },
];

export default function Showcase() {
  return (
    <section id="comment-ca-marche" className="px-5 py-12 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="grid items-center gap-9 sm:gap-14 lg:grid-cols-2 lg:gap-16">
          {/* Texte + checklist */}
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={viewportOnce}>
            <motion.span variants={fadeUp} className="inline-flex items-center gap-2 text-[13px] font-medium tracking-wide text-ink-soft">
              <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-sage" />
              Simple, fluide, intuitif
            </motion.span>
            <motion.h2 variants={fadeUp} className="font-display mt-5 text-[2.1rem] font-medium leading-[1.1] text-ink sm:text-[3rem]">
              Conçu pour vous <span className="text-sage-deep">simplifier la vie.</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-5 max-w-md text-[1.05rem] leading-relaxed text-ink-soft">
              Docalya s'adapte à vous. En quelques minutes, il comprend votre
              situation et vous accompagne, pas à pas.
            </motion.p>
            <motion.ul variants={fadeUp} className="mt-8 space-y-3.5">
              {checklist.map((c) => (
                <li key={c} className="flex items-center gap-3 text-[15px] text-ink">
                  <span aria-hidden="true" className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-beige-deep bg-cream-deep text-sage-deep">
                    <Check className="h-3.5 w-3.5" strokeWidth={2.2} />
                  </span>
                  {c}
                </li>
              ))}
            </motion.ul>
            <motion.a variants={fadeUp} href={APP_URL} className="group mt-9 inline-flex items-center gap-1.5 text-[15px] font-medium text-ink transition-colors hover:text-sage-deep">
              Découvrir Docalya
              <span aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-0.5">→</span>
            </motion.a>
          </motion.div>

          {/* Téléphone principal */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <Phone src="/app/accueil.jpg" alt="Écran d'accueil de Docalya : point sérénité et actions rapides." />
          </motion.div>
        </div>

        {/* Galerie — autres écrans */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-14 sm:mt-24 grid grid-cols-1 gap-10 sm:grid-cols-3 sm:gap-8"
        >
          {gallery.map((s) => (
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
