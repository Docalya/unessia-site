import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FileText, CalendarDays, ListChecks, Wallet, LayoutGrid, type LucideIcon } from "lucide-react";
import { fadeUp, viewportOnce } from "../lib/motion";

type Ecran = { src: string; alt: string; label: string };
type Espace = { cle: string; icon: LucideIcon; nom: string; texte: string; src: string; alt: string; ecrans?: Ecran[] };

// Cinq espaces, une seule section : on touche un espace, l'écran change.
const espaces: Espace[] = [
  {
    cle: "tableau", icon: LayoutGrid, nom: "Mon tableau de bord",
    texte: "Vos projets et vos habitudes de vie, préparés étape par étape, directement depuis l'accueil.",
    src: "/app/accueil.webp", alt: "Mon tableau de bord, l'accueil d'Unessia",
  },
  {
    cle: "planning", icon: CalendarDays, nom: "Mon planning",
    texte: "Vos rendez-vous et vos échéances, à la semaine, avec des rappels au moment choisi.",
    src: "/app/planning.webp", alt: "Mon planning, à la semaine",
  },
  {
    cle: "taches", icon: ListChecks, nom: "Mes tâches",
    texte: "Ce qui vous attend, classé simplement : le bon moment, à votre rythme, plus tard.",
    src: "/app/taches.webp", alt: "Mes tâches",
  },
  {
    cle: "documents", icon: FileText, nom: "Mes documents",
    texte: "Vos papiers rangés par thème : identité, logement, santé, finances. Unessia repère les dates d'expiration pour vous.",
    src: "/app/documents.webp", alt: "Mes documents, rangés par thème",
  },
  {
    cle: "budget", icon: Wallet, nom: "Mon budget",
    texte: "Vos revenus et vos dépenses du mois, en un coup d'œil.",
    src: "/app/budget-apercu.webp", alt: "Mon budget du mois",
    // Plusieurs écrans : ils défilent seuls dans le téléphone, et on peut choisir.
    ecrans: [
      { src: "/app/budget-apercu.webp", alt: "Mon budget : le solde du mois et l'essentiel en un coup d'œil", label: "Aperçu" },
      { src: "/app/budget-depenses.webp", alt: "Mon budget : les dépenses du mois, par catégorie", label: "Dépenses" },
      { src: "/app/budget-revenus.webp", alt: "Mon budget : les revenus du mois, par catégorie", label: "Revenus" },
    ],
  },
];

export default function Features() {
  const [actif, setActif] = useState(0);
  const e = espaces[actif];
  // Écran affiché quand l'espace en a plusieurs. Défilement automatique,
  // arrêté dès que la personne choisit un écran ou préfère moins d'animations.
  const [ecran, setEcran] = useState(0);
  const [manuel, setManuel] = useState(false);
  useEffect(() => { setEcran(0); setManuel(false); }, [actif]);
  const nbEcrans = e.ecrans?.length ?? 0;
  useEffect(() => {
    if (nbEcrans < 2 || manuel) return;
    if (typeof window !== "undefined" && window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return;
    const t = window.setInterval(() => setEcran(i => (i + 1) % nbEcrans), 3500);
    return () => window.clearInterval(t);
  }, [actif, nbEcrans, manuel]);
  const vue = e.ecrans ? e.ecrans[ecran % e.ecrans.length] : { src: e.src, alt: e.alt };

  return (
    <section id="comment-ca-marche" className="bg-ivory px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={viewportOnce} className="min-w-0">
          <p className="surtitre">L'application</p>
          <h2 className="font-display mt-4 text-[2rem] font-extrabold leading-[1.12] text-ink sm:text-[2.9rem]">
            Tout ce qui compte,
            <br /> au même endroit.
          </h2>
          <p className="mt-5 max-w-[470px] text-[1.03rem] leading-relaxed text-ink-soft sm:text-[1.12rem]">
            Cinq espaces simples, pensés pour se répondre. Touchez-en un pour le découvrir.
          </p>

          {/* Mobile : pastilles à faire glisser */}
          <div role="tablist" aria-label="Les espaces d'Unessia" className="sans-barre -mx-5 mt-7 flex gap-2 overflow-x-auto px-5 pb-1 lg:hidden">
            {espaces.map((x, i) => (
              <button
                key={x.cle}
                role="tab"
                aria-selected={i === actif}
                onClick={() => setActif(i)}
                className={`shrink-0 rounded-full border px-4 py-2.5 text-[15px] font-bold transition-colors ${
                  i === actif ? "border-ink bg-ink text-white" : "border-sand bg-white/60 text-ink-soft"
                }`}
              >
                {x.nom}
              </button>
            ))}
          </div>
          <p className="mt-5 min-h-[4.9rem] text-[15.5px] leading-relaxed text-ink-soft lg:hidden">{e.texte}</p>

          {/* Ordinateur : liste dépliante */}
          <ul role="tablist" aria-label="Les espaces d'Unessia" className="mt-10 hidden flex-col gap-1.5 lg:flex">
            {espaces.map((x, i) => {
              const on = i === actif;
              const Icon = x.icon;
              return (
                <li key={x.cle}>
                  <button
                    role="tab"
                    aria-selected={on}
                    onClick={() => setActif(i)}
                    onMouseEnter={() => setActif(i)}
                    className={`grid w-full grid-cols-[28px_1fr] gap-4 rounded-[18px] px-5 py-[18px] text-left transition-all duration-300 ${
                      on ? "bg-white shadow-card" : "hover:bg-white/50"
                    }`}
                  >
                    <Icon aria-hidden="true" className={`mt-0.5 h-[22px] w-[22px] ${on ? "text-antique" : "text-ink-muted"}`} strokeWidth={1.6} />
                    <span>
                      <span className={`block text-[18px] font-extrabold ${on ? "text-ink" : "text-ink-soft"}`}>{x.nom}</span>
                      {on && <span className="mt-1.5 block text-[15.5px] leading-relaxed text-ink-soft">{x.texte}</span>}
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
        </motion.div>

        <div className="relative flex flex-col items-center lg:h-[640px] lg:justify-start">
          <div aria-hidden="true" className="absolute top-8 h-[340px] w-[340px] rounded-full bg-[radial-gradient(circle,rgba(212,180,122,0.3),rgba(212,180,122,0)_70%)] sm:h-[520px] sm:w-[520px]" />
          <div className="relative w-[250px] overflow-hidden rounded-[34px] bg-white shadow-float ring-1 ring-ink/5 sm:w-[300px]">
            <AnimatePresence mode="wait" initial={false}>
              <motion.img
                key={vue.src}
                src={vue.src}
                alt={vue.alt}
                width="640"
                height="1278"
                loading="lazy"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="block h-auto w-full"
              />
            </AnimatePresence>
          </div>
          {e.ecrans && (
            <div role="tablist" aria-label={`Écrans de ${e.nom}`} className="relative mt-5 flex gap-1.5">
              {e.ecrans.map((x, i) => {
                const on = i === ecran % e.ecrans!.length;
                return (
                  <button
                    key={x.src}
                    role="tab"
                    aria-selected={on}
                    onClick={() => { setEcran(i); setManuel(true); }}
                    className={`rounded-full border px-3.5 py-1.5 text-[13.5px] font-bold transition-colors ${
                      on ? "border-ink bg-ink text-white" : "border-sand bg-white/70 text-ink-soft"
                    }`}
                  >
                    {x.label}
                  </button>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}