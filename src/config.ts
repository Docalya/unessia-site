// ============================================================
// Unessia — Configuration centrale
// ============================================================

/** URL de l'application (toutes les CTA pointent ici). */
export const APP_URL = "https://app.unessia.fr";

/** Libellé du bouton principal, cohérent sur toute la page. */
export const CTA_LABEL = "Créer mon compte";

/** Liens de navigation (ancres vers les sections). */
export const NAV_LINKS = [
  { label: "Fonctionnalités", href: "#fonctionnalites" },
  { label: "Comment ça marche", href: "#comment-ca-marche" },
  { label: "Indépendants", href: "#espace-pro" },
  { label: "Sécurité", href: "#securite" },
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
