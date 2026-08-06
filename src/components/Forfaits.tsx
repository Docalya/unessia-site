import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { APP_URL } from "../config";
import { fadeUp, stagger, viewportOnce } from "../lib/motion";

type Forfait = {
  cle: string;
  nom: string;
  prix: string;
  periode?: string;
  pour: string;
  points: string[];
  vedette?: boolean;
};

const forfaits: Forfait[] = [
  {
    cle: "gratuit",
    nom: "Gratuit",
    prix: "0 €",
    pour: "Pour essayer sans rien engager",
    points: [
      "10 documents",
      "3 analyses offertes",
      "1 rappel par tâche",
      "1 checklist Copilote",
      "Mes Aides en lecture seule",
      "Profil complet",
    ],
  },
  {
    cle: "essentiel",
    nom: "Essentiel",
    prix: "5,99 €",
    periode: "/ mois",
    pour: "Pour ne plus jamais compter",
    points: [
      "Documents et tâches illimités",
      "Récurrence et rappels multiples",
      "Budget complet",
      "Toutes les checklists Copilote",
      "Suggestions de démarches",
      "5 analyses par mois",
    ],
  },
  {
    cle: "premium",
    nom: "Premium",
    prix: "12,99 €",
    periode: "/ mois",
    pour: "Pour qu'Unessia travaille à votre place",
    points: [
      "Tout l'Essentiel",
      "Analyses illimitées",
      "Classement et échéances détectés",
      "Copilote administratif",
      "Alertes intelligentes",
      "Coach budgétaire",
    ],
    vedette: true,
  },
  {
    cle: "pro",
    nom: "Pro",
    prix: "19,99 €",
    periode: "/ mois",
    pour: "Pour les indépendants",
    points: [
      "Tout le Premium",
      "Espace professionnel",
      "Seuils et TVA suivis",
      "Estimation des cotisations",
      "Justificatifs rattachés",
      "Export comptable",
    ],
  },
];

export default function Forfaits() {
  return (
    <section id="forfaits" className="px-5 py-9 sm:px-8 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="inline-flex items-center gap-2 text-[13px] font-medium tracking-wide text-ink-soft">
            <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-sage" />
            Forfaits
          </span>
          <h2 className="font-display mt-5 text-[2.1rem] font-medium leading-[1.1] text-ink sm:text-[3rem]">
            Commencez gratuitement,
            <br className="hidden sm:block" /> changez d'avis <span className="text-sage-deep">quand vous voulez.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-md text-[1.05rem] leading-relaxed text-ink-soft">
            Sans engagement, résiliable à tout moment.
          </p>
        </motion.div>

        <motion.ul
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-10 sm:mt-16 grid items-stretch gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {forfaits.map((f) => (
            <motion.li
              key={f.cle}
              variants={fadeUp}
              className={`relative flex h-full flex-col rounded-card border bg-cream p-6 ${
                f.vedette ? "border-sage" : "border-beige-deep/70"
              }`}
            >
              {f.vedette && (
                <span className="absolute -top-3 left-6 rounded-full bg-sage px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.1em] text-cream">
                  Le plus choisi
                </span>
              )}

              {/* Hauteur minimale sur ce bloc : les prix s'alignent d'une carte
                  à l'autre même quand la ligne « pour qui » passe sur deux lignes. */}
              <div className="min-h-[4.5rem]">
                <h3 className="text-[1.15rem] font-semibold tracking-[-0.01em] text-ink">{f.nom}</h3>
                <p className="mt-1 text-[13.5px] leading-snug text-ink-muted">{f.pour}</p>
              </div>

              <p className="font-display mt-2 text-[2rem] font-medium leading-none text-ink">
                {f.prix}
                {f.periode && <span className="ml-1 text-[13px] font-normal text-ink-muted">{f.periode}</span>}
              </p>

              <ul className="mt-6 flex-1 space-y-2.5 border-t border-beige-deep/60 pt-6">
                {f.points.map((p) => (
                  <li key={p} className="flex items-start gap-2.5 text-[14px] leading-relaxed text-ink-soft">
                    <span aria-hidden="true" className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center text-sage-deep">
                      <Check className="h-3.5 w-3.5" strokeWidth={2.4} />
                    </span>
                    {p}
                  </li>
                ))}
              </ul>

              <a
                href={APP_URL}
                className={`mt-7 inline-flex items-center justify-center rounded-full px-5 py-3 text-[14.5px] font-medium transition-all duration-200 hover:-translate-y-px ${
                  f.vedette
                    ? "bg-ink text-cream hover:bg-black"
                    : "border border-beige-deep bg-cream-deep text-ink hover:bg-cream"
                }`}
              >
                {f.cle === "gratuit" ? "Créer mon compte" : `Choisir ${f.nom}`}
              </a>

              <p className="mt-3 text-center text-[11.5px] text-ink-muted">
                {f.cle === "gratuit" ? "Sans carte bancaire" : "Paiement via l'App Store"}
              </p>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}