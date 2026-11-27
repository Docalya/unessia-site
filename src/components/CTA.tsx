import { motion } from "framer-motion";
import { APP_URL, CTA_PRINCIPAL } from "../config";
import { fadeUp, viewportOnce } from "../lib/motion";

export default function CTA() {
  return (
    <section className="relative isolate overflow-hidden px-5 py-24 sm:px-8 sm:py-36">
      <img
        src="/serenite/magnolia-galets-1600.webp"
        srcSet="/serenite/magnolia-galets-800.webp 800w, /serenite/magnolia-galets-1600.webp 1600w"
        sizes="100vw"
        alt=""
        aria-hidden="true"
        loading="lazy"
        decoding="async"
        className="absolute inset-0 -z-10 h-full w-full object-cover object-[70%_center]"
      />
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,#fbf6ee_0%,rgba(251,246,238,0.75)_30%,rgba(251,247,239,0.55)_60%,rgba(251,247,239,0.9)_100%)]" />

      <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={viewportOnce} className="mx-auto max-w-3xl text-center">
        <h2 className="font-display text-[2.3rem] font-extrabold leading-[1.08] text-ink sm:text-[3.4rem]">
          Faites de la place
          <br /> à <span className="text-antique">l'essentiel.</span>
        </h2>
        <p className="mx-auto mt-5 max-w-md text-[1.06rem] leading-relaxed text-ink-soft sm:text-[1.15rem]">
          Un quotidien mieux organisé, un esprit plus disponible. Commencez à votre
          rythme avec Unessia.
        </p>
        <a
          href={APP_URL}
          className="mt-9 inline-flex w-full items-center justify-center rounded-full bg-ink px-8 py-[17px] text-[16.5px] font-bold text-white shadow-[0_14px_30px_-14px_rgba(62,46,30,0.7)] transition-all duration-200 hover:-translate-y-px hover:bg-black sm:w-auto"
        >
          {CTA_PRINCIPAL}
        </a>
        <p className="mt-4 text-[13.5px] text-ink-muted">Application iPhone disponible</p>
      </motion.div>
    </section>
  );
}
