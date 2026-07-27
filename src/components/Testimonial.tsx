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
          <span aria-hidden="true" className="font-display text-6xl leading-none text-beige-deep">
            &ldquo;
          </span>
          <p className="font-display -mt-4 text-[1.5rem] font-medium leading-[1.35] text-ink sm:text-[1.95rem]">
            Grâce à Unessia, je me sens enfin organisée et sereine. Tout est clair,
            rien ne m'échappe plus.
          </p>
          <p className="mt-7 text-[14px] font-medium text-ink-soft">— Julie, 34 ans</p>
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
