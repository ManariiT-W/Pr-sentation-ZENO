# ZENO — Présentation cinématographique complète

## Démarrage sur Windows, hors ligne

1. Télécharger l’archive ZIP.
2. Clic droit → **Extraire tout**. Ne pas ouvrir la présentation à l’intérieur du ZIP.
3. Ouvrir le dossier ZENO_Cinema_Complet.
4. Double-cliquer sur **index.html**, avec Microsoft Edge, Chrome ou Firefox récent.

Aucune installation et aucune connexion Internet ne sont nécessaires. Les polices, logos et images sont inclus. Conserver l’ensemble des sous-dossiers à côté d’index.html. La sauvegarde historique dans reference est distincte et peut conserver ses anciennes dépendances Internet.

## Pendant l’oral

| Commande | Action |
|---|---|
| Flèche droite, Page suivante, espace | Diapo suivante |
| Flèche gauche, Page précédente | Diapo précédente |
| Début / Home | Première diapo |
| Fin / End | Dernière diapo |
| Boutons 01 à 10 | Accès direct |
| F ou bouton Plein écran | Entrer / sortir du plein écran |
| Échap | Quitter le plein écran dans le navigateur |
| P ou Mode performance | Réduire les animations |

Si le plein écran est refusé par le navigateur, utiliser **F11**. La présentation ne passe jamais automatiquement à la diapo suivante. Le mode performance conserve les visuels et les informations, sans mouvements de caméra ni compteurs progressifs. La préférence système de réduction des animations est respectée.

## Organisation du projet

- index.html : point d’entrée léger.
- src/slides/01.js à 10.js : contenu des dix diapos, un fichier par diapo.
- src/styles/ : palette, compositions, polices et adaptations.
- src/transitions/sequences.js : neuf séquences avant/arrière.
- src/animations/data.js : pourcentages et montants.
- src/characters/preload.js : préchargement des images.
- src/main.js : navigation, plein écran et mode performance.
- src/data/contenu.json : inventaire textuel avant/après.
- assets/ : toutes les ressources visuelles et typographiques.
- reference/ : mission et sauvegarde du contenu d’origine.
- docs/ : choix de réalisation, conservation et tests.

Les fichiers JavaScript classiques permettent le double-clic hors ligne sans serveur local. Ne pas convertir les chargements en modules ou en fetch sans prévoir un serveur local.

## Nature des animations et limites

Les personnages sont des **images de référence et des poses dérivées**, mises en scène par des déplacements de caméra, zooms et fondus. Ce ne sont pas des modèles 3D animables. La poignée de main et la conversation sont des poses fixes ; les doigts, les lèvres et les articulations ne sont pas animés. Les adaptations précises sont décrites dans docs/realisation.md.

Les contrôles de contenu et les tests de logique ont été réalisés. Le rendu final en navigateur, les éventuels chevauchements à la projection, la fluidité réelle et le plein écran doivent encore être vérifiés sur l’ordinateur de l’oral : l’accès au navigateur de contrôle était bloqué dans l’environnement de réalisation.

Avant l’oral, parcourir les dix diapos à la résolution de projection, essayer les retours arrière et le plein écran. Utiliser le mode performance si nécessaire.
