import { useState } from "react";
import { motion } from "framer-motion";
import { Check, ChevronDown } from "lucide-react";
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

// Tarifs, contenus et conditions inchangés : seule la présentation évolue.
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

/** Sur téléphone, les trois premiers points restent visibles, le reste se déplie. */
const VISIBLES_MOBILE = 3;

function Carte({ f }: { f: Forfait }) {
  const [ouvert, setOuvert] = useState(false);
  return (
    <motion.li
      variants={fadeUp}
      className={`relative flex h-full flex-col rounded-card p-6 sm:p-7 ${
        f.vedette ? "bg-white shadow-[0_30px_70px_-34px_rgba(62,46,30,0.45)] ring-1 ring-gold/60" : "bg-white/70 ring-1 ring-sand/70"
      }`}
    >
      {f.vedette && (
        <span className="absolute -top-3 left-6 rounded-full bg-antique px-3 py-1 text-[11px] font-extrabold uppercase tracking-[0.12em] text-white">
          Recommandé
        </span>
      )}

      {/* Hauteur minimale : les prix s'alignent d'une carte à l'autre. */}
      <div className="sm:min-h-[4.6rem]">
        <h3 className="text-[1.2rem] font-extrabold tracking-[-0.01em] text-ink">{f.nom}</h3>
        <p className="mt-1 text-[14px] leading-snug text-ink-muted">{f.pour}</p>
      </div>

      <p className="font-display mt-3 text-[2.15rem] font-extrabold leading-none text-ink">
        {f.prix}
        {f.periode && <span className="ml-1 text-[14px] font-semibold text-ink-muted">{f.periode}</span>}
      </p>

      <ul className="mt-6 flex-1 space-y-2.5 border-t border-sand/70 pt-6">
        {f.points.map((p, i) => (
          <li
            key={p}
            className={`items-start gap-2.5 text-[14.5px] leading-relaxed text-ink-soft ${
              i >= VISIBLES_MOBILE && !ouvert ? "hidden sm:flex" : "flex"
            }`}
          >
            <span aria-hidden="true" className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center text-sage-deep">
              <Check className="h-3.5 w-3.5" strokeWidth={2.6} />
            </span>
            {p}
          </li>
        ))}
      </ul>
      {f.points.length > VISIBLES_MOBILE && (
        <button
          type="button"
          onClick={() => setOuvert((v) => !v)}
          aria-expanded={ouvert}
          className="mt-3 inline-flex items-center gap-1 self-start text-[14px] font-bold text-antique sm:hidden"
        >
          {ouvert ? "Masquer le détail" : `Voir le détail (${f.points.length - VISIBLES_MOBILE} de plus)`}
          <ChevronDown className={`h-4 w-4 transition-transform ${ouvert ? "rotate-180" : ""}`} aria-hidden="true" />
        </button>
      )}

      <a
        href={APP_URL}
        className={`mt-7 inline-flex items-center justify-center rounded-full px-5 py-3.5 text-[15px] font-bold transition-all duration-200 hover:-translate-y-px ${
          f.vedette ? "bg-ink text-white hover:bg-black" : "bg-cream-deep text-ink ring-1 ring-sand hover:bg-cream"
        }`}
      >
        Créer mon compte
      </a>
      <p className="mt-3 text-center text-[12px] leading-snug text-ink-muted">
        Sur le web, puis retrouvez tout dans l'application
      </p>
    </motion.li>
  );
}

export default function Forfaits() {
  return (
    <section id="forfaits" className="bg-cream px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={viewportOnce} className="mx-auto max-w-2xl text-center">
          <p className="surtitre">Forfaits</p>
          <h2 className="font-display mt-4 text-[2rem] font-extrabold leading-[1.12] text-ink sm:text-[2.9rem]">
            Commencez gratuitement,
            <br className="hidden sm:block" /> changez d'avis <span className="text-antique">quand vous voulez.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-md text-[1.03rem] leading-relaxed text-ink-soft sm:text-[1.08rem]">
            Sans engagement, résiliable à tout moment. Vous choisissez votre forfait
            sur le web, et vous retrouvez votre compte sur l'application iPhone.
          </p>
        </motion.div>

        <motion.ul
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-12 grid items-stretch gap-6 sm:mt-16 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5"
        >
          {forfaits.map((f) => <Carte key={f.cle} f={f} />)}
        </motion.ul>
      </div>
    </section>
  );
}
