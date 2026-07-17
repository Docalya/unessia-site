import { motion } from "framer-motion";
import { APP_URL, CTA_LABEL } from "../config";
import { fadeUp, viewportOnce } from "../lib/motion";

export default function CTA() {
  return (
    <section className="px-5 py-12 sm:px-8 sm:py-28">
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
        <p className="mx-auto mt-6 max-w-md text-[1.05rem] leading-relaxed text-ink-soft">
          Ouvrez Docalya et laissez votre vie administrative se mettre en ordre.
        </p>
        <a
          href={APP_URL}
          className="mt-10 inline-flex items-center justify-center rounded-full bg-ink px-8 py-4 text-[15px] font-medium text-cream transition-all duration-200 hover:-translate-y-px hover:bg-black"
        >
          {CTA_LABEL}
        </a>
      </motion.div>
    </section>
  );
}
