import { motion } from "framer-motion";
import { fadeUp, viewportOnce } from "../lib/motion";

export default function APropos() {
  return (
    <section id="a-propos" className="bg-ivory px-5 py-20 sm:px-8 sm:py-24">
      <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={viewportOnce} className="mx-auto max-w-3xl text-center">
        <p className="surtitre">À propos</p>
        <p className="font-display mt-6 text-[1.5rem] font-bold leading-[1.4] text-ink sm:text-[2rem]">
          Nous croyons que gérer sa vie administrative et quotidienne ne devrait
          demander ni angoisse, ni expertise, ni des heures de votre temps. Unessia est
          né d'une idée simple : remettre de l'ordre et de la{" "}
          <span className="text-antique">sérénité</span> dans le quotidien de chacun.
        </p>
        <div aria-hidden="true" className="mx-auto mt-8 h-0.5 w-14 rounded-full bg-gold" />
        <p className="mx-auto mt-6 max-w-xl text-[1.03rem] leading-relaxed text-ink-soft">
          Un espace clair et respectueux de vos données, pensé pour vous accompagner,
          pas pour vous submerger.
        </p>
      </motion.div>
    </section>
  );
}
