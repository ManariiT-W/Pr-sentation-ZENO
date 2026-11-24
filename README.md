# ZENO — Présentation cinématographique (10 diapos, 9 transitions)

## Lancer (Windows, hors ligne)
1. Dézipper le dossier complet (ne pas ouvrir depuis le ZIP).
2. Double-cliquer sur **Lancer_ZENO.bat** (ouvre Chrome ou Edge en plein écran) — ou ouvrir `index.html` dans Chrome/Edge.
3. Aucune installation, aucun serveur, aucune connexion internet : polices, images et script sont inclus.

## Commandes pendant l'oral
| Touche | Action |
|---|---|
| → / Espace / Entrée / Page↓ | Diapo suivante (déclenche la transition) |
| ← / Retour arrière / Page↑ | Diapo précédente |
| F | Plein écran (on/off) |
| P | Mode performance (transitions en fondu simple, sans flou) — mémorisé |
| Début / Fin | Première / dernière diapo |
Rien ne défile automatiquement. Les boutons discrets en bas à droite (visibles au survol) font la même chose.
`index.html#5` ouvre directement la diapo 5 (utile pour s'entraîner).

## Transitions (style de la vidéo de référence)
1→2 zoom dans le regard · 2→3 lettres géantes · 3→4 rencontre + éclat doré · 4→5 dézoom · 5→6 cartes qui montent · 6→7 lettres géantes · 7→8 dézoom · 8→9 lettres géantes · 9→10 sortie de la vision (dézoom depuis le flou).
Retour arrière : zoom avant inversé, court.

## Structure
`index.html` · `dist/zeno.js` (version compilée utilisée) · `src/` (main.js, slides/, transitions/, animations/, data/, styles/) · `assets/` (characters, logos, fonts) · `docs/`.
Modifier le code puis recompiler : `npm install` puis `npm run build` (Node.js requis, uniquement pour modifier).
Contenus et chiffres : `src/data/content.js` et `src/slides/slides.js`.

## Limites connues (à lire)
- **Personnages = images de tes planches** (recadrées, éclairées en noir/or, animées par caméra/profondeur). Il n'y a **aucun modèle 3D animable ni pré-rendu** : je ne peux pas en créer ici.
- **Non réalisables fidèlement sans ressources supplémentaires** : bras ouverts (diapos 1, 3, 10), main au menton (diapo 5), **poignée de main** (transition 3→4 et fond diapo 4), **bras à la première personne** (diapo 8, remplacé par une manche floue en avant-plan), échange entre les deux personnages (diapo 7, deux plans fixes).
  Solution : générer ces plans (ex. Higgsfield, déjà prévu) à partir des planches, puis les ajouter dans `assets/videos/` et les brancher dans `src/transitions/engine.js`.
- Résolution des planches limitée : les personnages sont volontairement sombres et fondus pour masquer le grain.
- Les quatre transitions « lettres géantes / regard » sont des effets de caméra CSS/WAAPI, pas de la 3D.
- Testé avec Chromium (aucune erreur JavaScript). Chrome ou Edge recommandés (Firefox non testé).

## Différences avec l'ancien index.html (à valider)
- Diapo 3 : « Pour découvrir le service » (prompt + business plan) au lieu de « Pour créer ses premières publicités ».
- Diapo 7 : les 3 actions suivent le prompt (pages réseaux · vidéo de présentation ~15 jours avant · rencontres le premier mois) ; l'ancien « teaser / inviter des testeurs » reste présent en diapo 8 (étapes 4 et 5).
- Diapo 5 : « L'opportunité pour ZENO » supprimée (seule suppression), logos agrandis.
- Diapo 9 : pas d'anneau pour les montants (valeurs absolues), compteurs + trait lumineux uniquement.
