// ============================================================
// Unessia — Configuration centrale
// ============================================================

/** URL de l'application (toutes les CTA pointent ici). */
export const APP_URL = "https://app.unessia.fr";

/** Libellé du bouton de l'en-tête. */
export const CTA_LABEL = "Créer mon espace";

/** Libellé du bouton principal (hero, dernière section). */
export const CTA_PRINCIPAL = "Créer mon espace gratuitement";

/** Liens de navigation (ancres vers les sections). Les anciennes ancres
 *  (#fonctionnalites, #comment-ca-marche, #espace-pro, #securite, #forfaits)
 *  existent toujours dans la page : les liens déjà partagés restent valables. */
export const NAV_LINKS = [
  { label: "Fonctionnalités", href: "#comment-ca-marche" }, // section « L'application »
  { label: "Univers", href: "#univers" },
  { label: "Indépendants", href: "#espace-pro" },
  { label: "Confidentialité", href: "#securite" },
  { label: "Tarifs", href: "#forfaits" },
] as const;

/** Pages légales (servies en statique par la landing, accessibles sans compte). */
export const LEGAL_LINKS = [
  { label: "Mentions légales",  href: "/mentions-legales.html" },
  { label: "Confidentialité",   href: "/confidentialite.html" },
  { label: "CGU",               href: "/cgu.html" },
  { label: "CGV",               href: "/cgv.html" },
  { label: "Remboursement",     href: "/remboursement.html" },
  { label: "Aide",              href: "/aide.html" },
] as const;

/** « Hébergé en France » n'est affiché que lorsque la région de l'hébergement
 *  a été vérifiée (réglages du projet Supabase). Passer à true après vérification. */
export const HEBERGEMENT_FRANCE_VERIFIE = false;