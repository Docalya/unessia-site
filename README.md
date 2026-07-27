# Unessia — Landing page

Landing page premium (style Apple / Linear / Stripe) pour Unessia.

## Stack
React 19 · Vite · TypeScript · Tailwind CSS v4 · Framer Motion · Lucide React

## Démarrer
```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # tsc -b && vite build  (aucune erreur TS)
npm run lint     # 0 warning / 0 erreur
```

## Structure
```
src/
├── assets/
├── components/
│   ├── Header.tsx     Logo UNESSIA · Se connecter · Demander mon accès
│   ├── Hero.tsx       Titre "apaisé" · image sereine · carte flottante
│   ├── Offer.tsx      Bandeau offre de lancement + compteur
│   ├── Features.tsx   4 cartes (documents, échéances, aides, sérénité)
│   ├── CTA.tsx        Section vert clair
│   └── Footer.tsx     3 badges de confiance
├── lib/motion.ts      Variants Framer Motion partagés
├── config.ts          ⚙️ URL app + compteur de places (à modifier ici)
├── App.tsx
├── main.tsx
└── index.css          Thème Tailwind v4 (couleurs, rayons, ombres)
```

## Configuration rapide — `src/config.ts`
```ts
export const APP_URL    = "https://app.unessia.fr"; // cible de toutes les CTA
export const SPOTS_TOTAL = 15;  // places totales
export const SPOTS_TAKEN = 5;   // places prises
// SPOTS_LEFT est calculé automatiquement
```

## Image du Hero
L'image (lac de montagne) est chargée depuis Unsplash (libre de droits).
Pour l'héberger en local : déposez le fichier dans `src/assets/`,
puis `import heroImg from "../assets/hero.jpg"` dans `Hero.tsx`.
