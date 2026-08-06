import { motion } from "framer-motion";
import { APP_URL } from "../config";
import { fadeUp, stagger } from "../lib/motion";

export default function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden">
      {/* Photo de fond — sérénité, nature, lumière */}
      <img
        src="/hero-beach.jpg"
        alt=""
        aria-hidden="true"
        fetchPriority="high"
        className="absolute inset-0 -z-10 h-full w-full object-cover object-center"
      />
      {/* Voiles crème : lisibilité du texte à gauche + fondu vers le bas */}
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-r from-cream/95 via-cream/55 to-transparent" />
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-t from-cream/85 via-transparent to-cream/20" />

      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-40 lg:py-48">
        <motion.div variants={stagger} initial="hidden" animate="show" className="max-w-xl">
          <motion.h1
            variants={fadeUp}
            className="font-display text-[2.9rem] font-medium leading-[1.04] text-ink sm:text-[4.3rem]"
          >
            Photographiez un papier.
            <br />
            Le reste <span className="text-sage-deep">se range seul.</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-5 max-w-md text-[1.05rem] leading-relaxed text-ink-soft"
          >
            Unessia lit vos documents, les nomme, les classe, repère les échéances
            et met votre budget à jour. Sans qu'ils soient jamais envoyés à une IA
            extérieure.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <a
              href={APP_URL}
              className="inline-flex items-center justify-center rounded-full bg-ink px-7 py-3.5 text-[15px] font-medium text-cream transition-all duration-200 hover:-translate-y-px hover:bg-black"
            >
              Créer mon compte gratuitement
            </a>
            <a
              href={APP_URL}
              className="inline-flex items-center justify-center rounded-full border border-beige-deep bg-cream/80 px-7 py-3.5 text-[15px] font-medium text-ink backdrop-blur-sm transition-all duration-200 hover:-translate-y-px hover:bg-cream"
            >
              Se connecter
            </a>
          </motion.div>

          <motion.p variants={fadeUp} className="mt-5 text-[13.5px] text-ink-muted">
            Sans carte bancaire · Vos documents restent en France
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}