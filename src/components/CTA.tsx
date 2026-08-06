import { motion } from "framer-motion";
import { APP_URL } from "../config";
import { fadeUp, viewportOnce } from "../lib/motion";

export default function CTA() {
  return (
    <section className="px-5 py-9 sm:px-8 sm:py-20">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="mx-auto max-w-3xl text-center"
      >
        <h2 className="font-display text-[2.3rem] font-medium leading-[1.08] text-ink sm:text-[3.4rem]">
          Reprenez le contrôle,
          <br />
          en toute <span className="text-sage-deep">sérénité.</span>
        </h2>
        <p className="mx-auto mt-5 max-w-md text-[1.05rem] leading-relaxed text-ink-soft">
          Créez votre compte, déposez une facture, et voyez ce qu'il en sort.
          Vous saurez tout de suite si c'est fait pour vous.
        </p>
        <a
          href={APP_URL}
          className="mt-8 inline-flex items-center justify-center rounded-full bg-ink px-8 py-4 text-[15px] font-medium text-cream transition-all duration-200 hover:-translate-y-px hover:bg-black"
        >
          Créer mon compte gratuitement
        </a>
        <p className="mt-4 text-[13.5px] text-ink-muted">
          Gratuit, sans carte bancaire · Application iPhone disponible
        </p>
      </motion.div>
    </section>
  );
}
