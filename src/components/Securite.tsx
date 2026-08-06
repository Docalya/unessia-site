import { motion } from "framer-motion";
import { ShieldCheck, Lock, EyeOff, MapPin, Cpu, type LucideIcon } from "lucide-react";
import { fadeUp, stagger, viewportOnce } from "../lib/motion";

type Point = { icon: LucideIcon; title: string; text: string };

const points: Point[] = [
  {
    icon: Cpu,
    title: "Aucune intelligence artificielle tierce",
    text: "La lecture de vos papiers commence sur votre appareil. Si elle échoue, le relais est notre propre serveur, en France, qui ne conserve rien. Le contenu de vos documents n'est transmis à aucun service extérieur — jamais.",
  },
  {
    icon: MapPin,
    title: "Hébergé en France",
    text: "Vos documents sont stockés à Paris, sur une infrastructure européenne. Ils ne quittent pas le territoire.",
  },
  {
    icon: Lock,
    title: "Chiffrés, et sous surveillance",
    text: "Vos fichiers sont chiffrés au repos et en transit. Chaque ouverture passe par un lien temporaire de cinq minutes, et tous les accès sont consignés dans un journal que personne ne peut réécrire.",
  },
  {
    icon: EyeOff,
    title: "Rien n'est mesuré, rien n'est revendu",
    text: "Aucun traceur, aucune statistique d'usage, aucune publicité. Nous ne savons pas quelles pages vous consultez ni combien de temps vous restez.",
  },
  {
    icon: ShieldCheck,
    title: "Partage sous contrôle",
    text: "Chaque lien de partage est à usage unique, filigrané, protégé par mot de passe si vous le souhaitez, et expire au bout de 24 heures.",
  },
];

export default function Securite() {
  return (
    <section id="securite" className="px-5 py-9 sm:px-8 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="max-w-2xl"
        >
          <span className="inline-flex items-center gap-2 text-[13px] font-medium tracking-wide text-ink-soft">
            <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-sage" />
            Sécurité
          </span>
          <h2 className="font-display mt-5 text-[2.1rem] font-medium leading-[1.1] text-ink sm:text-[3rem]">
            Vos papiers méritent la confiance.
          </h2>
          <p className="mt-5 max-w-lg text-[1.05rem] leading-relaxed text-ink-soft">
            Une pièce d'identité, une ordonnance, un avis d'imposition. Des papiers
            ordinaires — traités comme nulle part ailleurs.
          </p>
        </motion.div>

        <motion.ul
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-14 grid gap-4 sm:grid-cols-2"
        >
          {points.map(({ icon: Icon, title, text }, i) => (
            <motion.li
              key={title}
              variants={fadeUp}
              className={`flex gap-4 rounded-card border border-beige-deep/70 bg-cream p-7 ${i === points.length - 1 && points.length % 2 === 1 ? "sm:col-span-2" : ""}`}
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-beige-deep bg-cream-deep text-ink">
                <Icon className="h-[18px] w-[18px]" strokeWidth={1.5} aria-hidden="true" />
              </span>
              <div>
                <h3 className="text-[1.02rem] font-semibold tracking-[-0.01em] text-ink">{title}</h3>
                <p className="mt-1.5 text-[14.5px] leading-relaxed text-ink-soft">{text}</p>
              </div>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
