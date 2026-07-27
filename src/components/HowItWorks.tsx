import { motion } from "framer-motion";
import { fadeUp, stagger, viewportOnce } from "../lib/motion";

const steps = [
  {
    n: "01",
    title: "Déposez",
    text: "Ajoutez un document, ou laissez Unessia le comprendre à votre place. Rien à trier, rien à nommer.",
  },
  {
    n: "02",
    title: "Unessia s'organise",
    text: "Il classe, relie vos papiers à votre budget, repère les échéances et ce qui mérite votre attention.",
  },
  {
    n: "03",
    title: "Respirez",
    text: "Votre vie administrative est à sa place. Vous gardez l'esprit libre pour le reste.",
  },
];

export default function HowItWorks() {
  return (
    <section className="px-5 py-20 sm:px-8 sm:py-24">
      <div className="mx-auto max-w-6xl rounded-xl border border-beige-deep/70 bg-cream-deep px-6 py-16 sm:px-14 sm:py-20">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="max-w-2xl"
        >
          <span className="inline-flex items-center gap-2 text-[13px] font-medium tracking-wide text-ink-soft">
            <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-sage" />
            En trois temps
          </span>
          <h2 className="font-display mt-5 text-[2.1rem] font-normal leading-[1.1] text-ink sm:text-[3rem]">
            La sérénité, sans effort.
          </h2>
        </motion.div>

        <motion.ol
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-14 grid gap-10 sm:grid-cols-3 sm:gap-8"
        >
          {steps.map(({ n, title, text }) => (
            <motion.li key={n} variants={fadeUp} className="relative">
              <span className="font-display text-[1.4rem] font-normal text-ink-muted">{n}</span>
              <div className="mt-4 h-px w-full bg-beige-deep" />
              <h3 className="mt-5 text-[1.15rem] font-semibold tracking-[-0.01em] text-ink">
                {title}
              </h3>
              <p className="mt-2.5 max-w-xs text-[14.5px] leading-relaxed text-ink-soft">
                {text}
              </p>
            </motion.li>
          ))}
        </motion.ol>
      </div>
    </section>
  );
}
