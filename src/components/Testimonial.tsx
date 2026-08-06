import { motion } from "framer-motion";
import { fadeUp, viewportOnce } from "../lib/motion";

export default function Testimonial() {
  return (
    <section className="px-5 py-10 sm:px-8 sm:py-24">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="mx-auto grid max-w-6xl overflow-hidden rounded-xl border border-beige-deep/70 bg-cream-deep md:grid-cols-2"
      >
        <div className="flex flex-col justify-center p-8 sm:p-14">
          <span className="inline-flex items-center gap-2 text-[13px] font-medium tracking-wide text-ink-soft">
            <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-sage" />
            Notre engagement
          </span>
          <p className="font-display mt-5 text-[1.5rem] font-medium leading-[1.35] text-ink sm:text-[1.95rem]">
            Vos papiers ne quitteront jamais la France, et ne seront jamais lus par
            une intelligence artificielle qui ne nous appartient pas.
          </p>
          <p className="mt-5 text-[14.5px] leading-relaxed text-ink-soft">
            C'est la contrainte que nous nous sommes donnée dès le premier jour. Elle
            nous coûte cher en ingénierie. Elle n'est pas négociable.
          </p>
        </div>

        <div className="relative min-h-[260px] md:min-h-full">
          <img
            src="/testimonial.jpg"
            alt="Composition sereine : un vase et une branche d'olivier posés près de la mer."
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
      </motion.div>
    </section>
  );
}
