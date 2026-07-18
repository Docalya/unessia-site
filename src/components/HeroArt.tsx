/**
 * Composition premium du hero — 100 % SVG, faite main.
 * Un panneau « application » épuré (documents classés, budget) posé sur du vide,
 * survolé d'un trait botanique fin. Palette sable/encre, un seul accent sauge.
 * Aucune photo, aucune personne.
 */
export default function HeroArt() {
  return (
    <svg
      viewBox="0 0 620 560"
      role="img"
      aria-label="Vos documents, votre budget et vos échéances, réunis dans un espace clair et serein."
      className="mx-auto w-full max-w-[560px]"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <filter id="soft" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="10" stdDeviation="18" floodColor="#262521" floodOpacity="0.06" />
        </filter>
        <filter id="chip" x="-40%" y="-40%" width="180%" height="180%">
          <feDropShadow dx="0" dy="6" stdDeviation="12" floodColor="#262521" floodOpacity="0.07" />
        </filter>
      </defs>

      {/* Halo très doux */}
      <circle cx="330" cy="250" r="220" fill="#f5f1e8" opacity="0.7" />

      {/* Panneau principal */}
      <g filter="url(#soft)">
        <rect x="96" y="70" width="392" height="392" rx="30" fill="#ffffff" stroke="#ded4c1" strokeWidth="1" />
      </g>

      {/* En-tête du panneau */}
      <circle cx="132" cy="110" r="13" fill="#ebe4d5" />
      <rect x="154" y="102" width="120" height="8" rx="4" fill="#e0d7c6" />
      <rect x="154" y="118" width="72" height="7" rx="3.5" fill="#efe9dd" />
      <line x1="96" y1="146" x2="488" y2="146" stroke="#efe9dd" strokeWidth="1" />

      {/* Lignes « documents / catégories » */}
      {[178, 232, 286].map((y, i) => (
        <g key={y}>
          <rect x="124" y={y} width="36" height="36" rx="11" fill="#f0eade" />
          <rect x="174" y={y + 6} width={[176, 150, 196][i]} height="8" rx="4" fill="#e2d9c7" />
          <rect x="174" y={y + 22} width={[104, 128, 84][i]} height="7" rx="3.5" fill="#efe9dd" />
          {/* petit statut sauge sur la première ligne */}
          {i === 0 && <circle cx="452" cy={y + 18} r="4" fill="#6f8a65" />}
        </g>
      ))}

      {/* Anneau « budget » discret, bas du panneau */}
      <g transform="translate(150 356)">
        <circle cx="30" cy="30" r="26" fill="none" stroke="#efe9dd" strokeWidth="8" />
        <path d="M30 4 a26 26 0 0 1 22 39" fill="none" stroke="#cdbfa6" strokeWidth="8" strokeLinecap="round" />
        <path d="M30 4 a26 26 0 0 0 -24 16" fill="none" stroke="#6f8a65" strokeWidth="8" strokeLinecap="round" opacity="0.85" />
      </g>
      <rect x="230" y="366" width="150" height="9" rx="4.5" fill="#e2d9c7" />
      <rect x="230" y="386" width="110" height="8" rx="4" fill="#efe9dd" />
      <rect x="230" y="406" width="130" height="8" rx="4" fill="#efe9dd" />

      {/* Carte flottante — Document analysé */}
      <g filter="url(#chip)" transform="translate(40 300)">
        <rect x="0" y="0" width="176" height="66" rx="18" fill="#fbfaf6" stroke="#ded4c1" strokeWidth="1" />
        <rect x="16" y="16" width="34" height="34" rx="10" fill="#ffffff" stroke="#e6dccb" strokeWidth="1" />
        <path d="M25 33l6 6 11-13" fill="none" stroke="#6f8a65" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="62" y="20" width="94" height="8" rx="4" fill="#e2d9c7" />
        <rect x="62" y="36" width="66" height="7" rx="3.5" fill="#efe9dd" />
      </g>

      {/* Carte flottante — Échéance à venir */}
      <g filter="url(#chip)" transform="translate(408 118)">
        <rect x="0" y="0" width="170" height="72" rx="18" fill="#fbfaf6" stroke="#ded4c1" strokeWidth="1" />
        <rect x="16" y="18" width="36" height="36" rx="10" fill="#ffffff" stroke="#e6dccb" strokeWidth="1" />
        <rect x="23" y="14" width="4" height="8" rx="2" fill="#c9c0b0" />
        <rect x="41" y="14" width="4" height="8" rx="2" fill="#c9c0b0" />
        <line x1="16" y1="30" x2="52" y2="30" stroke="#e6dccb" strokeWidth="1.4" />
        <rect x="64" y="22" width="86" height="8" rx="4" fill="#e2d9c7" />
        <rect x="64" y="38" width="58" height="7" rx="3.5" fill="#efe9dd" />
      </g>

      {/* Trait botanique — signature calme */}
      <g stroke="#262521" strokeWidth="1.4" fill="none" strokeLinecap="round" opacity="0.8">
        <path d="M486 92c34 6 60 34 66 72" />
        <path d="M498 108c-2-14 4-26 16-32" />
        <path d="M516 128c-1-15 6-27 20-31" />
        <path d="M532 156c3-14 13-23 28-24" />
        <path d="M544 190c6-13 17-19 32-17" />
      </g>
      <g fill="#6f8a65" opacity="0.9">
        <circle cx="486" cy="92" r="2.6" />
      </g>
    </svg>
  );
}
