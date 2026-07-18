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

/** Pages légales (accessibles sans être connecté). */
export const LEGAL_LINKS = [
  { label: "Mentions légales",  href: `${APP_URL}/mentions-legales` },
  { label: "Confidentialité",   href: `${APP_URL}/confidentialite` },
  { label: "CGU",               href: `${APP_URL}/cgu` },
  { label: "CGV",               href: `${APP_URL}/cgv` },
  { label: "Remboursement",     href: `${APP_URL}/remboursement` },
] as const;
