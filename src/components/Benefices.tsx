import { motion } from "framer-motion";
import { fadeUp, stagger, viewportOnce } from "../lib/motion";

const benefices = [
  {
    titre: "Retrouver facilement ce qui compte",
    texte: "Vos papiers rangés par thème, vos échéances au même endroit. Ce que vous cherchez est là, en un instant.",
    icone: (
      <>
        <path d="M6 14a3 3 0 0 1 3-3h9l4 4h17a3 3 0 0 1 3 3v17a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3z" />
        <circle cx="25" cy="26" r="5" />
        <path d="m29 30 4 4" />
      </>
    ),
  },
  {
    titre: "Anticiper sans tout garder en tête",
    texte: "Unessia vous rappelle ce qui approche, au bon moment, pour que votre esprit puisse se poser.",
    icone: (
      <>
        <rect x="8" y="11" width="32" height="29" rx="4" />
        <path d="M8 19h32M16 7v8M32 7v8" />
        <path d="m19 29 4 4 7-8" />
      </>
    ),
  },
  {
    titre: "Avancer à votre rythme",
    texte: "Une chose après l'autre, sans pression. Vous décidez de ce qui compte aujourd'hui.",
    icone: (
      <>
        <path d="M24 40c0-12 4-20 14-26-10 0-18 6-18 16" />
        <path d="M24 40c0-8-3-13-10-16 6 0 11 3 12 9" />
        <path d="M14 40h20" />
      </>
    ),
  },
];

export default function Benefices() {
  return (
    <section id="fonctionnalites" className="bg-cream px-5 pb-20 pt-6 sm:px-8 sm:pb-28 sm:pt-10">
      <div className="mx-auto max-w-6xl">
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={viewportOnce} className="mx-auto max-w-2xl text-center">
          <p className="surtitre">Pourquoi Unessia</p>
          <h2 className="font-display mt-4 text-[2rem] font-extrabold leading-[1.12] text-ink sm:text-[2.9rem]">
            Et si votre quotidien devenait plus léger&nbsp;?
          </h2>
          <div aria-hidden="true" className="mx-auto mt-6 h-0.5 w-14 rounded-full bg-gold" />
        </motion.div>

        <motion.ul
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-11 grid gap-7 sm:mt-16 sm:grid-cols-3 sm:gap-0"
        >
          {benefices.map((b, i) => (
            <motion.li
              key={b.titre}
              variants={fadeUp}
              className={`grid grid-cols-[44px_1fr] gap-x-4 text-left sm:block sm:px-10 sm:text-center ${
                i > 0 ? "border-t border-sand/80 pt-7 sm:border-l sm:border-t-0 sm:pt-1" : "sm:pt-1"
              }`}
            >
              <svg
                viewBox="0 0 48 48"
                aria-hidden="true"
                className="row-span-2 mt-0.5 h-10 w-10 text-antique sm:mx-auto sm:h-[52px] sm:w-[52px]"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {b.icone}
              </svg>
              <h3 className="text-[1.12rem] font-extrabold tracking-[-0.01em] text-ink sm:mt-5 sm:text-[1.25rem]">{b.titre}</h3>
              <p className="mt-1.5 text-[15.5px] leading-relaxed text-ink-soft sm:mx-auto sm:mt-3 sm:max-w-[290px] sm:text-[16px]">{b.texte}</p>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
