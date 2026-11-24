import { FIN, PLANS, STATS, LOGOS } from '../data/content.js';
const C = 'assets/characters/', L = 'assets/logos/';
const lg = (id, cls = '') => { const [f, n, bg] = LOGOS[id]; return `<span class="lg ${cls}" style="background:${bg}"><img src="${L}${f}" alt="${n}"></span>`; };
const li = (a) => a.map((x) => `<li>${x}</li>`).join('');
const hud = (n, lab) => `<div class="hud r"><img src="${L}zeno.png" alt=""><b>ZENO</b><span>${n} / ${lab}</span></div>`;
const ring = (s) => `<div class="stat c r" style="--d:.5">
  <svg viewBox="0 0 220 220" class="ring" style="--p:${s.pct / 100}"><circle cx="110" cy="110" r="90" class="bgc"/><circle cx="110" cy="110" r="90" class="fgc"/></svg>
  <div class="pc"><span data-count="${s.pct}" data-dec="${s.pct % 1 ? 1 : 0}">0</span>&nbsp;%</div>
  <h3>${s.k}</h3><p>${s.txt}</p><p class="n">${s.n}</p></div>`;

// Chaque slide : { id, label, eye?, html }. Le titre principal porte la classe .t (cible des transitions).
export const SLIDES = [
{ id: 1, eye: '46% 44%', html: () => `
  <div class="bg"></div>
  <h1 class="t giant" data-o="50% 55%">ZENO</h1>
  <div class="tag r" style="--d:.2">IMAGINEZ. CRÉEZ. DÉVELOPPEZ.</div>
  ${hud('01', 'Mon projet')}
  <img class="ch dim" style="left:540px;top:250px;width:840px" src="${C}zeno_haut.webp" alt="Personnage ZENO">
  <img class="logo3d r" style="--d:.9" src="${L}zeno.png" alt="Logo ZENO">
  <div class="col L r" style="--d:.5"><p class="lead">Créer son influenceur virtuel et ses vidéos publicitaires avec l’intelligence artificielle.</p><p>Promouvoir ses produits sans avoir à se filmer.</p><h4>Un influenceur virtuel ?</h4><p>Un personnage créé avec l’IA pour représenter une entreprise et présenter ses produits.</p></div>
  <div class="col R r" style="--d:.7"><h4>Pour qui ?</h4><p>Les professionnels de Polynésie française</p><h4>Comment ?</h4><p>Une future plateforme en ligne par abonnement</p><h4>Implantation envisagée :</h4><p>Paea, Tahiti</p></div>
  <div class="foot r" style="--d:1">Communication numérique</div>` },

{ id: 2, html: () => `
  <div class="bg"></div>${hud('02', 'Le porteur du projet')}
  <img class="ch" style="left:30px;top:190px;width:780px" src="${C}manarii_haut.webp" alt="Manarii">
  <h1 class="t" data-o="14% 20%" style="left:860px;top:90px">Qui suis-je ?</h1>
  <div class="who r" style="--d:.4"><b>Manarii</b> TAUFA-WOJTYCZKA<small>Porteur du projet ZENO · Paea · Tahiti</small></div>
  <div class="grid2" style="left:860px;top:370px">
   <div class="box r" style="--d:.5"><h3>Mon expérience</h3><ul>${li(['Bac pro obtenu · deux ans d’études en informatique', 'Business en ligne après mes études', 'Expérience en magasin'])}</ul></div>
   <div class="box r" style="--d:.65"><h3>Mes compétences</h3><ul>${li(['Développement web', 'Marketing digital', 'Utilisation des outils d’IA'])}</ul></div>
   <div class="box r" style="--d:.8"><h3>Ma motivation</h3><ul>${li(['Un besoin vécu dans mon business en ligne', 'Créer des vidéos prend trop de temps', 'Envie de proposer une solution simple'])}</ul></div>
   <div class="box r" style="--d:.95"><h3>Mon objectif</h3><ul>${li(['Améliorer la visibilité des entreprises', 'Créer des emplois à terme'])}</ul></div>
  </div>` },

{ id: 3, html: () => `
  <div class="bg"></div>${hud('03', 'L’offre ZENO')}
  <img class="ch ghost" style="left:560px;top:90px;width:800px" src="${C}zeno_haut.webp" alt="">
  <h1 class="t ctr" data-o="30% 50%">Ce que je vais vendre</h1>
  <p class="sub ctr r" style="--d:.3">Trois abonnements mensuels prévus pour créer sa publicité avec l’IA.</p>
  <div class="plans">${PLANS.map((p, i) => `<div class="plan c r" style="--d:${.5 + i * .15}"><i>${p.n}</i><h2>${p.name}</h2><div class="price"><b>${p.price}</b><span>F CFP / mois</span></div><div class="cr">${p.credits} crédits / mois</div><p>${p.use}</p></div>`).join('')}</div>
  <div class="how r" style="--d:1.1"><h4>De l’idée à la vidéo</h4><p>Le client décrira sa publicité, générera sa vidéo et la téléchargera pour la publier lui-même.</p></div>` },

{ id: 4, html: () => `
  <div class="bg"></div>${hud('04', 'Mes clients')}
  <img class="ch chL dim2" style="left:440px;top:230px;width:560px" src="${C}zeno_3q.webp" alt="">
  <img class="ch chR dim2" style="left:920px;top:230px;width:560px" src="${C}client_3q_mir.webp" alt="">
  <div class="flare"></div>
  <h1 class="t" data-o="20% 50%" style="left:90px;top:70px">À qui vais-je vendre ?</h1>
  <div class="panel" style="left:90px;top:300px;width:700px"><div class="r" style="--d:.5"><h3>Mon cœur de cible</h3><p class="big">Auto-entrepreneurs et très petites entreprises</p><p>Restauration · Commerce · Tourisme · Artisanat</p></div>
   <div class="r" style="--d:.7"><h3>Cibles secondaires :</h3><p>Moyennes entreprises. Grandes entreprises.</p></div></div>
  <div class="panel" style="left:1130px;top:300px;width:700px"><div class="r" style="--d:.6"><h3>Leurs trois besoins</h3><ol class="needs">${li(['Gagner du temps', 'Respecter leur budget', 'Créer des vidéos facilement'])}</ol></div>
   <div class="r" style="--d:.8"><h3>Zone géographique</h3><p class="big">Tahiti et Moorea en priorité</p><p>Puis les autres archipels de Polynésie française.</p></div></div>` },

{ id: 5, html: () => `
  <div class="bg"></div>${hud('05', 'Mon étude de marché')}
  <img class="ch" style="left:-30px;top:180px;width:560px" src="${C}zeno_3q.webp" alt="">
  <h1 class="t sm" data-o="30% 40%" style="left:520px;top:92px;font-size:74px">Ce que mon étude de marché m’a appris</h1>
  <div class="surv r" style="--d:.3"><b data-count="30">0</b> professionnels interrogés en Polynésie française</div>
  <div class="stats">${STATS.map(ring).join('')}</div>
  <div class="note r" style="--d:.9">Enquête réalisée avant la fixation des tarifs définitifs des abonnements.</div>
  <div class="comp r" style="--d:.8"><h3>Mes concurrents</h3>
   <div><h5>Concurrents indirects locaux · Agences locales</h5><div class="lgs">${lg('exotic', 'xl')}${lg('tiki', 'xl')}</div></div>
   <div><h5>Concurrents directs internationaux · Plateformes</h5><div class="lgs">${lg('heygen', 'xl')}${lg('synthesia', 'xl')}${lg('did', 'xl')}</div></div></div>` },

{ id: 6, html: () => `
  <div class="bg"></div>${hud('06', 'Pourquoi choisir ZENO ?')}
  <h1 class="t ctr" data-o="30% 50%" style="font-size:96px">Pourquoi les clients viendront chez moi ?</h1>
  <p class="sub ctr r" style="--d:.3">Les engagements de la future plateforme.</p>
  <div class="trio">
   <div class="card c" style="--d:.1"><i>01</i><h2>Une identité personnalisée</h2><p>Un influenceur virtuel à l’image de l’entreprise : apparence, identité et voix.</p></div>
   <div class="card c" style="--d:.28"><i>02</i><h2>Éthique et protection des données</h2><ul>${li(['Engagement de confidentialité', 'Mesures de protection prévues'])}</ul></div>
   <div class="card c" style="--d:.46"><i>03</i><h2>Créer depuis son entreprise</h2><ul>${li(['Aucun déplacement nécessaire', 'Accès dans les archipels avec une connexion adaptée'])}</ul></div>
  </div>` },

{ id: 7, html: () => `
  <div class="bg"></div>${hud('07', 'Me faire connaître et vendre')}
  <img class="ch ghost chL" style="left:620px;top:30px;width:400px" src="${C}zeno_3q.webp" alt="">
  <img class="ch ghost chR" style="left:900px;top:30px;width:400px" src="${C}client_3q_mir.webp" alt="">
  <h1 class="t sm" data-o="20% 50%" style="left:90px;top:80px;width:620px">Comment vais-je me faire connaître et vendre ?</h1>
  <div class="trio t7">
   <div class="card c r" style="--d:.4"><i>1</i><h2>Faire découvrir ZENO</h2><p>Je montrerai des exemples de vidéos sur Facebook, Instagram et TikTok.</p></div>
   <div class="card c r" style="--d:.55"><i>2</i><h2>Vendre sur mon site</h2><p>Le client s’inscrira et choisira son abonnement mensuel.</p></div>
   <div class="card c r" style="--d:.7"><i>3</i><h2>Garder mes clients</h2><p>J’accompagnerai les utilisateurs et recueillerai leurs retours.</p></div>
  </div>
  <div class="acts r" style="--d:.95"><h4>Pour démarrer : trois actions concrètes (prévisionnel)</h4><div>
   <p><b>Préparation du lancement</b>Création des pages professionnelles sur les réseaux sociaux.</p>
   <p><b>Environ 15 jours avant l’ouverture</b>Vidéo de présentation de ZENO.</p>
   <p><b>Premier mois d’activité</b>Rencontres avec des professionnels pour leur présenter le service.</p></div></div>` },

{ id: 8, html: () => `
  <div class="bg"></div>${hud('08', 'De la préparation au lancement')}
  <img class="pov" src="${C}zeno_manche.webp" alt="">
  <h1 class="t" data-o="20% 50%" style="left:90px;top:70px">Mon organisation</h1>
  <div class="tl"><i class="line"></i>${[['Préparation', 'Épargne et démarches administratives.'], ['Fournisseurs', 'Comparer les devis et choisir les prestataires.'], ['Matériel', 'Acheter et installer les équipements.'], ['Pré-lancement', 'Site, réseaux sociaux et teaser ZENO'], ['Tests et retours', 'Avis sur le teaser et essais du site'], ['Ouverture', 'Corrections finales, puis lancement officiel']].map((s, i) => `<div class="st r" style="--d:${.4 + i * .13}"><b>${i + 1}</b><h3>${s[0]}</h3><p>${s[1]}</p></div>`).join('')}</div>
  <div class="sup r" style="--d:1.3"><h5>Fournisseurs envisagés</h5><div class="lgs">${['cybertech', 'vercel', 'supabase', 'openai', 'higgsfield'].map((x) => lg(x, 'md')).join('')}</div></div>` },

{ id: 9, html: () => `
  <div class="bg plain"></div>${hud('09', 'Prévisions financières')}
  <h1 class="t" data-o="20% 50%" style="left:90px;top:70px">Mon projet en chiffres</h1>
  <p class="sub r" style="left:90px;top:210px;--d:.3">Année 1 — Montants prévisionnels en F CFP</p>
  <div class="fin">${FIN.map((f, i) => `<div class="kpi c r" style="--d:${.4 + i * .12}"><i class="draw"></i><h3>${f.k}</h3><div class="v"><span data-count="${f.v}">0</span> <small>F CFP</small></div><p>${f.s}</p></div>`).join('')}</div>
  <div class="note r" style="--d:1.3;left:90px;bottom:60px;right:90px">Financement complémentaire de 120 500 F CFP à constituer par épargne. Aide FA’ATI’A conditionnelle.</div>` },

{ id: 10, eye: '45% 36%', html: () => `
  <div class="bg"></div>${hud('10', 'Financement et lancement')}
  <div class="beam"></div>
  <h1 class="t giant sm2" data-o="50% 55%">ZENO</h1>
  <img class="ch dim" style="left:600px;top:190px;width:720px" src="${C}zeno_haut.webp" alt="Personnage ZENO">
  <div class="thx r" style="--d:1.1"><b>Merci pour votre attention.</b><span>Je suis à votre disposition pour vos questions.</span></div>
  <div class="col L2 r" style="--d:.5"><h4>Formation et démarches d’accompagnement</h4>${lg('tahiti', 'lgw')}${lg('sefi', 'lgw')}</div>
  <div class="col R2 r" style="--d:.7"><h3>Préparer le lancement de ZENO</h3>
   <div class="pri"><b>01</b><div><h4>Constituer mon épargne</h4><p>120 500 F CFP supplémentaires à épargner</p></div></div>
   <div class="pri"><b>02</b><div><h4>Confirmer le financement</h4><p>Vérifier mon éligibilité à l’aide FA’ATI’A</p></div></div>
   <div class="pri"><b>03</b><div><h4>Finaliser ZENO</h4><p>Développer, tester puis ouvrir la plateforme</p></div></div>
   <p class="note2">Aide FA’ATI’A soumise à éligibilité et accord.</p></div>` },
];
