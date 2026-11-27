import { motion } from "framer-motion";
import { fadeUp, stagger, viewportOnce } from "../lib/motion";

const points = [
  "C'est fait d'un geste, ou reporté à demain.",
  "Une idée vous traverse ? Notez-la, Unessia s'en souvient.",
  "Vous avancez, sans vous sentir submergé.",
];

export default function PointSerenite() {
  return (
    <section id="point-serenite" className="relative isolate overflow-hidden px-5 py-20 sm:px-8 sm:py-32">
      <img
        src="/serenite/lac-1600.webp"
        srcSet="/serenite/lac-800.webp 800w, /serenite/lac-1600.webp 1600w"
        sizes="100vw"
        alt=""
        aria-hidden="true"
        loading="lazy"
        decoding="async"
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,#fbf7ef_0%,rgba(251,247,239,0.92)_35%,rgba(251,247,239,0.6)_70%,#fbf7ef_100%)] lg:bg-[linear-gradient(90deg,rgba(251,247,239,0.95)_0%,rgba(251,247,239,0.86)_40%,rgba(251,247,239,0.2)_75%,rgba(251,247,239,0.05)_100%)]" />
      <div aria-hidden="true" className="absolute inset-0 -z-10 hidden bg-[linear-gradient(180deg,#fbf7ef_0%,rgba(251,247,239,0)_18%,rgba(251,247,239,0)_82%,#fbf7ef_100%)] lg:block" />

      <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={viewportOnce} className="min-w-0">
          <motion.p variants={fadeUp} className="surtitre">Point Sérénité</motion.p>
          <motion.h2 variants={fadeUp} className="font-display mt-4 text-[2rem] font-extrabold leading-[1.12] text-ink sm:text-[2.9rem]">
            L'essentiel,
            <br /> au bon moment.
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-5 max-w-[480px] text-[1.03rem] leading-relaxed text-ink-soft sm:mt-6 sm:text-[1.19rem]">
            Chaque jour, votre accueil met en avant une seule chose : celle qui compte le
            plus, d'après vos échéances et leur importance. Le reste peut attendre.
          </motion.p>
          <motion.ul variants={fadeUp} className="mt-7 space-y-3.5 sm:mt-8">
            {points.map((p) => (
              <li key={p} className="flex items-start gap-3.5 text-[16px] leading-snug text-ink sm:text-[16.5px]">
                <span aria-hidden="true" className="mt-0.5 flex h-[22px] w-[22px] shrink-0 items-center justify-center rounded-full border-[1.5px] border-gold">
                  <span className="h-2 w-2 rounded-full bg-gold" />
                </span>
                {p}
              </li>
            ))}
          </motion.ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto w-full max-w-[380px] overflow-hidden rounded-[30px] shadow-[0_40px_90px_-30px_rgba(62,46,30,0.45)] ring-1 ring-white/60"
        >
          <img src="/app/point-serenite.webp" alt="Le Point Sérénité, sur l'accueil d'Unessia" width="700" height="728" loading="lazy" className="block h-auto w-full" />
        </motion.div>
      </div>
    </section>
  );
}
