import { motion } from "framer-motion";
import {
  FolderClosed,
  CalendarClock,
  PieChart,
  Leaf,
  Bell,
  Lock,
  type LucideIcon,
} from "lucide-react";
import { fadeUp, stagger, viewportOnce } from "../lib/motion";

type Feature = { icon: LucideIcon; title: string; description: string };

const features: Feature[] = [
  {
    icon: FolderClosed,
    title: "Nommés et rangés tout seuls",
    description:
      "« IMG_4417 » devient « Bulletin de paie — juillet 2026 », classé dans Travail.",
  },
  {
    icon: CalendarClock,
    title: "Un papier, trois conséquences",
    description:
      "Une facture crée la tâche, inscrit la dépense au budget et pose le rappel.",
  },
  {
    icon: PieChart,
    title: "Un budget qui éclaire",
    description:
      "Une vision claire de vos revenus, dépenses et épargne. Aujourd'hui et demain.",
  },
  {
    icon: Leaf,
    title: "Les aides faites pour vous",
    description:
      "Unessia détecte les aides auxquelles vous avez droit, sans que vous cherchiez.",
  },
  {
    icon: Bell,
    title: "Un agenda qui simplifie",
    description:
      "Toutes vos tâches et rendez-vous au même endroit, bien rangés, jamais oubliés.",
  },
  {
    icon: Lock,
    title: "Lus sans jamais être envoyés",
    description:
      "Aucune IA externe ne voit vos papiers. Hébergement en France, accès journalisés.",
  },
];

export default function Features() {
  return (
    <section id="fonctionnalites" className="px-5 py-9 sm:px-8 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mx-auto max-w-2xl text-center"
        >
          <span aria-hidden="true" className="mx-auto flex h-9 w-9 items-center justify-center text-sage">
            <Leaf className="h-5 w-5" strokeWidth={1.5} />
          </span>
          <h2 className="font-display mt-4 text-[2.1rem] font-medium leading-[1.1] text-ink sm:text-[3rem]">
            Tout ce qui compte,
            <br className="hidden sm:block" /> réuni <span className="text-sage-deep">au même endroit.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-md text-[1.05rem] leading-relaxed text-ink-soft">
            Un espace unique qui comprend votre situation, anticipe vos besoins et
            simplifie votre quotidien.
          </p>
        </motion.div>

        <motion.ul
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-10 sm:mt-16 grid gap-x-8 gap-y-9 sm:gap-y-12 text-center sm:grid-cols-3"
        >
          {features.map(({ icon: Icon, title, description }) => (
            <motion.li key={title} variants={fadeUp} className="flex flex-col items-center px-2">
              <span className="flex h-14 w-14 items-center justify-center rounded-full border border-beige-deep bg-cream text-ink">
                <Icon className="h-[22px] w-[22px]" strokeWidth={1.4} aria-hidden="true" />
              </span>
              <h3 className="mt-5 text-[1.02rem] font-semibold tracking-[-0.01em] text-ink">
                {title}
              </h3>
              <p className="mt-2.5 max-w-[15rem] text-[14px] leading-relaxed text-ink-soft">
                {description}
              </p>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
