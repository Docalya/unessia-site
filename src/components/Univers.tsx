import { motion } from "framer-motion";
import { fadeUp, stagger, viewportOnce } from "../lib/motion";

// Les univers réellement disponibles dans l'application.
const univers = [
  { e: "💍", nom: "Mariage", texte: "Chaque étape préparée dans l'ordre, sans rien oublier." },
  { e: "👶", nom: "Naissance", texte: "Les démarches et les papiers à prévoir, au bon moment." },
  { e: "✈️", nom: "Voyage", texte: "Papiers, réservations, valises : partez l'esprit léger." },
  { e: "🥂", nom: "Réception", texte: "Invités, menu et « qui apporte quoi », réunis au même endroit." },
  { e: "🏡", nom: "Rituels du foyer", texte: "Ces petites choses qui reviennent : Unessia y pense pour vous." },
  { e: "🌸", nom: "Prendre soin de moi", texte: "Vos habitudes de bien-être, à votre rythme." },
];

export default function Univers() {
  return (
    <section id="univers" className="bg-cream px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={viewportOnce} className="mx-auto max-w-3xl text-center">
          <p className="surtitre">Mes univers</p>
          <h2 className="font-display mt-4 text-[2rem] font-extrabold leading-[1.12] text-ink sm:text-[2.9rem]">
            Unessia vous accompagne <br className="hidden sm:block" />à chaque étape de votre vie.
          </h2>
          <p className="mx-auto mt-5 max-w-[560px] text-[1.03rem] leading-relaxed text-ink-soft sm:text-[1.12rem]">
            Au-delà du quotidien, les grands moments : préparés pas à pas, pour que vous
            puissiez en profiter.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 grid overflow-hidden rounded-[30px] bg-white shadow-[0_30px_70px_-40px_rgba(62,46,30,0.35)] sm:mt-16 lg:grid-cols-[1.05fr_1fr]"
        >
          <img
            src="/serenite/terrasse-1600.webp"
            srcSet="/serenite/terrasse-800.webp 800w, /serenite/terrasse-1600.webp 1600w"
            sizes="(min-width: 1024px) 600px, 100vw"
            alt="Une terrasse baignée de lumière au lever du jour"
            loading="lazy"
            decoding="async"
            className="h-[220px] w-full object-cover sm:h-[320px] lg:h-full lg:min-h-[560px]"
          />
          <motion.ul variants={stagger} initial="hidden" whileInView="show" viewport={viewportOnce} className="flex flex-col px-5 py-3 sm:px-12 sm:py-10">
            {univers.map((u, i) => (
              <motion.li
                key={u.nom}
                variants={fadeUp}
                className={`grid grid-cols-[48px_1fr] items-center gap-4 py-[18px] ${i > 0 ? "border-t border-sand/60" : ""}`}
              >
                <span aria-hidden="true" className="flex h-12 w-12 items-center justify-center rounded-full bg-ivory text-[23px]">{u.e}</span>
                <span>
                  <span className="block text-[17.5px] font-extrabold text-ink">{u.nom}</span>
                  <span className="mt-0.5 block text-[15px] leading-relaxed text-ink-soft">{u.texte}</span>
                </span>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </div>
    </section>
  );
}
