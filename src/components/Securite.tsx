import { motion } from "framer-motion";
import { Cpu, Timer, ScrollText, Share2, KeyRound, Download, MapPin, type LucideIcon } from "lucide-react";
import { HEBERGEMENT_FRANCE_VERIFIE } from "../config";
import { fadeUp, stagger, viewportOnce } from "../lib/motion";

type Point = { icon: LucideIcon; title: string; text: string };

// Uniquement des garanties vérifiées dans le code du serveur (novembre 2026).
const points: Point[] = [
  {
    icon: Cpu,
    title: "Aucune intelligence artificielle tierce",
    text: "La lecture de vos papiers est faite par notre propre serveur. Leur contenu n'est confié à aucun service d'IA extérieur.",
  },
  {
    icon: Timer,
    title: "Des liens qui expirent",
    text: "Chaque ouverture d'un document passe par un lien temporaire, valable cinq minutes.",
  },
  {
    icon: ScrollText,
    title: "Des accès consignés",
    text: "Les ouvertures, téléchargements et partages de vos documents sont inscrits dans un journal d'accès.",
  },
  {
    icon: Share2,
    title: "Un partage sous contrôle",
    text: "Lien valable 24 heures, mot de passe et téléchargement unique si vous le souhaitez, filigrane en option.",
  },
  {
    icon: KeyRound,
    title: "Votre compte protégé",
    text: "Double authentification, et la liste de vos sessions ouvertes pour fermer celles que vous ne reconnaissez pas.",
  },
  {
    icon: Download,
    title: "Vos données, à vous",
    text: "Exportez vos données quand vous le souhaitez. La suppression de votre compte efface ce qu'il contient.",
  },
  ...(HEBERGEMENT_FRANCE_VERIFIE
    ? [{ icon: MapPin, title: "Hébergé en France", text: "Vos données sont hébergées en France." }]
    : []),
];

export default function Securite() {
  return (
    <section id="securite" className="bg-ivory px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={viewportOnce} className="min-w-0">
            <p className="surtitre">Confidentialité</p>
            <h2 className="font-display mt-4 text-[2rem] font-extrabold leading-[1.12] text-ink sm:text-[2.9rem]">
              Votre vie vous appartient.
            </h2>
            <p className="mt-5 max-w-md text-[1.03rem] leading-relaxed text-ink-soft sm:text-[1.12rem]">
              Une pièce d'identité, une ordonnance, un avis d'imposition. Des papiers
              ordinaires, qui méritent qu'on en prenne soin.
            </p>
            {/* Notre engagement (anciennement une section à part) */}
            <figure className="mt-9 border-l-2 border-gold pl-6">
              <blockquote className="text-[1.2rem] font-bold leading-snug text-ink sm:text-[1.35rem]">
                Vos papiers ne sont jamais lus par une intelligence artificielle qui ne
                nous appartient pas.
              </blockquote>
              <figcaption className="mt-3 text-[14.5px] leading-relaxed text-ink-soft">
                C'est la contrainte que nous nous sommes donnée dès le premier jour. Elle
                nous coûte cher en ingénierie. Elle n'est pas négociable.
              </figcaption>
            </figure>
          </motion.div>

          <motion.ul variants={stagger} initial="hidden" whileInView="show" viewport={viewportOnce} className="grid gap-x-10 gap-y-7 sm:grid-cols-2">
            {points.map(({ icon: Icon, title, text }) => (
              <motion.li key={title} variants={fadeUp} className="flex gap-4">
                <Icon className="mt-0.5 h-[22px] w-[22px] shrink-0 text-antique" strokeWidth={1.5} aria-hidden="true" />
                <div>
                  <h3 className="text-[1.04rem] font-extrabold tracking-[-0.01em] text-ink">{title}</h3>
                  <p className="mt-1.5 text-[15px] leading-relaxed text-ink-soft">{text}</p>
                </div>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  );
}
