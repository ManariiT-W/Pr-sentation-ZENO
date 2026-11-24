// Chiffres et contenus de référence validés (business plan + classeur Excel). Ne pas modifier sans validation.
export const FIN = [
  { k: 'Besoins initiaux recensés', v: 810500, s: 'Équipements et frais d’accès prévus' },
  { k: 'Chiffre d’affaires annuel', v: 3034860, s: '214 abonnements-mois prévus' },
  { k: 'Budget de fonctionnement', v: 1897286, s: 'Hors prélèvements personnels' },
  { k: 'Prélèvements personnels', v: 560000, s: 'Retraits progressifs sur l’année' },
  { k: 'Solde de gestion annuel', v: 577574, s: 'Après dépenses et prélèvements' },
  { k: 'Seuil de couverture annuel', v: 2122285, s: 'Environ 176 857 F CFP de chiffre d’affaires par mois' },
];
export const PLANS = [
  { n: '01', name: 'Essentiel', price: '4 990', credits: '2 000', use: 'Pour découvrir le service' },
  { n: '02', name: 'Créateur', price: '9 990', credits: '5 000', use: 'Pour créer régulièrement' },
  { n: '03', name: 'Prestige', price: '55 990', credits: '30 000', use: 'Pour des besoins intensifs' },
];
export const STATS = [
  { k: 'Le temps', pct: 50, txt: 'Manquent de temps pour créer des vidéos.', n: '15 répondants sur 30.' },
  { k: 'Le budget mensuel', pct: 73.3, txt: 'Envisagent un budget allant jusqu’à 10 000 F CFP par mois.', n: '22 répondants sur 30.' },
  { k: 'Les compétences techniques', pct: 26.7, txt: 'Citent le manque de compétences techniques comme frein.', n: '8 répondants sur 30.' },
];
// bg = couleur de la pastille (logos à fond sombre ou clair)
export const LOGOS = {
  exotic: ['exotic.png', 'Exotic Gardens', '#000'], tiki: ['tiki.png', 'Tiki Agency', '#222'],
  heygen: ['heygen.png', 'HeyGen', '#fff'], synthesia: ['synthesia.png', 'Synthesia', '#fff'], did: ['did.png', 'D-ID', '#fff'],
  cybertech: ['cybertech.png', 'Cybertech', '#fff'], vercel: ['vercel.png', 'Vercel', '#fff'], supabase: ['supabase.png', 'Supabase', '#fff'],
  openai: ['openai.png', 'OpenAI', '#fff'], higgsfield: ['higgsfield.png', 'Higgsfield', '#fff'],
  tahiti: ['tahiti-formation.png', 'Tahiti Formation', '#fff'], sefi: ['sefi.png', 'SEFI', '#0b5a96'],
};
