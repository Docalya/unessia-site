// ============================================================
// Docalya — Configuration centrale
// ============================================================

/** URL de l'application (toutes les CTA pointent ici). */
export const APP_URL = "https://app.docalya.fr";

/** Libellé du bouton principal, cohérent sur toute la page. */
export const CTA_LABEL = "Créer mon compte";

/** Liens de navigation (ancres vers les sections). */
export const NAV_LINKS = [
  { label: "Fonctionnalités", href: "#fonctionnalites" },
  { label: "Comment ça marche", href: "#comment-ca-marche" },
  { label: "Sécurité", href: "#securite" },
  { label: "À propos", href: "#a-propos" },
] as const;

/** Pages légales (servies en statique par la landing, accessibles sans compte). */
export const LEGAL_LINKS = [
  { label: "Mentions légales",  href: "/mentions-legales" },
  { label: "Confidentialité",   href: "/confidentialite" },
  { label: "CGU",               href: "/cgu" },
  { label: "CGV",               href: "/cgv" },
  { label: "Remboursement",     href: "/remboursement" },
  { label: "Aide",              href: "/aide" },
] as const;
