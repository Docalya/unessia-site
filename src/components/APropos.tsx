import { motion } from "framer-motion";
import { fadeUp, viewportOnce } from "../lib/motion";

export default function APropos() {
  return (
    <section id="a-propos" className="px-5 py-12 sm:px-8 sm:py-28">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="mx-auto max-w-3xl text-center"
      >
        <span className="inline-flex items-center gap-2 text-[13px] font-medium tracking-wide text-ink-soft">
          <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-sage" />
          À propos
        </span>
        <p className="font-display mt-6 text-[1.7rem] font-medium leading-[1.35] text-ink sm:text-[2.2rem]">
          Nous croyons que gérer sa vie administrative ne devrait demander ni
          temps, ni angoisse, ni expertise. Docalya est né d'une idée simple :
          remettre de l'ordre et de la <span className="text-sage-deep">sérénité</span> dans le
          quotidien de chacun.
        </p>
        <p className="mx-auto mt-6 max-w-xl text-[1.05rem] leading-relaxed text-ink-soft">
          Un espace clair, intelligent et respectueux de vos données — pensé pour
          vous accompagner, pas pour vous submerger.
        </p>
      </motion.div>
    </section>
  );
}
