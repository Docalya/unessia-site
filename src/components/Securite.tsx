import { motion } from "framer-motion";
import { ShieldCheck, Lock, EyeOff, MapPin, Cpu, type LucideIcon } from "lucide-react";
import { fadeUp, stagger, viewportOnce } from "../lib/motion";

type Point = { icon: LucideIcon; title: string; text: string };

const points: Point[] = [
  {
    icon: Lock,
    title: "Chiffrement de bout en bout",
    text: "Vos documents sont chiffrés au repos et en transit. Personne d'autre que vous n'y accède.",
  },
  {
    icon: EyeOff,
    title: "Rien n'est revendu",
    text: "Vos données vous appartiennent. Elles ne sont ni vendues, ni exploitées à des fins publicitaires.",
  },
  {
    icon: ShieldCheck,
    title: "Partage sous contrôle",
    text: "Chaque lien de partage est à usage unique, filigrané et expirable. Vous décidez qui voit quoi.",
  },
  {
    icon: MapPin,
    title: "Hébergé en France",
    text: "Vos informations restent en France, dans le respect du RGPD.",
  },
  {
    icon: Cpu,
    title: "Analyse 100 % locale",
    text: "Docalya lit et classe vos documents sur sa propre infrastructure. Leur contenu n'est jamais envoyé à un service d'intelligence artificielle tiers.",
  },
];

export default function Securite() {
  return (
    <section id="securite" className="px-5 py-12 sm:px-8 sm:py-28">
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
            La sérénité commence par la certitude que vos documents sont en
            sécurité. C'est la première promesse de Docalya.
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
