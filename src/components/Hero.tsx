import { motion } from "framer-motion";
import { APP_URL, CTA_PRINCIPAL } from "../config";
import { fadeUp, stagger } from "../lib/motion";

/** Un écran réel de l'application, dans un cadre léger. */
function Ecran({ src, alt, className = "" }: { src: string; alt: string; className?: string }) {
  return (
    <div className={`absolute overflow-hidden rounded-[34px] bg-white shadow-float ring-1 ring-ink/5 ${className}`}>
      <img src={src} alt={alt} width="640" height="1278" className="block h-auto w-full" />
    </div>
  );
}

export default function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden bg-ivory">
      {/* Magnolias sur l'eau : présents en bas et sur les côtés, zone claire pour le texte */}
      <img
        src="/serenite/hero-magnolias-2400.webp"
        srcSet="/serenite/hero-magnolias-1200.webp 1200w, /serenite/hero-magnolias-2400.webp 2400w"
        sizes="100vw"
        alt=""
        aria-hidden="true"
        fetchPriority="high"
        decoding="async"
        className="absolute inset-x-0 bottom-0 -z-10 h-[560px] w-full object-cover object-bottom lg:inset-0 lg:h-full lg:object-[center_88%]"
      />
      {/* Voiles crème : lisibilité du texte, puis fondu vers la section suivante */}
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,#fbf7ef_0%,rgba(251,247,239,0.97)_45%,rgba(251,247,239,0.35)_75%,rgba(251,247,239,0)_100%)] lg:bg-[linear-gradient(90deg,rgba(251,247,239,0.96)_0%,rgba(251,247,239,0.88)_34%,rgba(251,247,239,0.25)_62%,rgba(251,247,239,0)_80%)]" />
      <div aria-hidden="true" className="absolute inset-0 -z-10 hidden bg-[linear-gradient(180deg,rgba(251,247,239,0.92)_0%,rgba(251,247,239,0.35)_30%,rgba(251,247,239,0)_55%)] lg:block" />
      <div aria-hidden="true" className="absolute inset-x-0 bottom-0 -z-10 h-56 bg-gradient-to-b from-transparent to-cream" />

      <div className="mx-auto grid max-w-6xl items-center gap-11 px-5 pb-20 pt-28 text-center sm:px-8 lg:min-h-[900px] lg:grid-cols-[1.05fr_1fr] lg:gap-10 lg:pb-36 lg:pt-36 lg:text-left">
        <motion.div variants={stagger} initial="hidden" animate="show">
          <motion.p variants={fadeUp} className="surtitre !text-[11px] sm:!text-[12.5px]">
            Votre conciergerie personnelle digitale
          </motion.p>
          <motion.h1
            variants={fadeUp}
            className="font-display mt-4 text-[2.9rem] font-extrabold leading-[1.03] text-ink sm:mt-5 sm:text-[4.75rem]"
          >
            Moins à penser.
            <br />
            <span className="text-antique">Plus à vivre.</span>
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="mx-auto mt-5 max-w-[500px] text-[1.06rem] leading-relaxed text-ink-soft sm:mt-6 sm:text-[1.19rem] lg:mx-0"
          >
            Vos documents, vos tâches, votre agenda, votre budget et vos projets de vie
            réunis dans un espace pensé pour votre sérénité.
          </motion.p>
          <motion.div variants={fadeUp} className="mt-8 flex flex-col items-center gap-5 sm:mt-10 sm:flex-row lg:items-center">
            <a
              href={APP_URL}
              className="inline-flex w-full items-center justify-center rounded-full bg-ink px-8 py-[17px] text-[16.5px] font-bold text-white shadow-[0_14px_30px_-14px_rgba(62,46,30,0.7)] transition-all duration-200 hover:-translate-y-px hover:bg-black sm:w-auto"
            >
              {CTA_PRINCIPAL}
            </a>
            {/* Secondaire et discret : il mène à la présentation, juste dessous. */}
            <a
              href="#fonctionnalites"
              className="inline-flex items-center gap-2 border-b border-sand pb-0.5 text-[16px] font-bold text-ink transition-colors hover:border-antique"
            >
              Découvrir Unessia <span aria-hidden="true">↓</span>
            </a>
          </motion.div>
          <motion.p
            variants={fadeUp}
            className="mt-6 flex flex-col items-center gap-1 text-[13.5px] text-ink-muted sm:flex-row sm:gap-2.5 lg:items-center"
          >
            <span>Forfait gratuit, sans engagement</span>
            <span aria-hidden="true" className="hidden h-1 w-1 rounded-full bg-champagne sm:inline-block" />
            <span>Application iPhone disponible</span>
          </motion.p>
        </motion.div>

        {/* Trois vrais écrans, légèrement superposés */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto h-[500px] w-full max-w-[520px] sm:h-[640px]"
        >
          <Ecran src="/app/documents.webp" alt="Mes documents, rangés par thème" className="left-[-4%] top-[60px] w-[49%] -rotate-[5deg] sm:left-[2%] sm:top-[70px]" />
          <Ecran src="/app/taches.webp" alt="Mes tâches, du bon moment à plus tard" className="right-[-4%] top-[60px] w-[49%] rotate-[5deg] sm:right-[2%] sm:top-[70px]" />
          <Ecran src="/app/accueil.webp" alt="L'accueil d'Unessia et son Point Sérénité" className="left-1/2 top-0 z-10 w-[58%] -translate-x-1/2" />
        </motion.div>
      </div>
    </section>
  );
}
