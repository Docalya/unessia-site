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
