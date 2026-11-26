# ZENO Signature — Performance V2 | Architecture GitHub / Vercel

Version de présentation validée par le porteur du projet. Les dix scènes sont extraites **sans modification de leur contenu** du HTML autonome Performance V2. Le moteur, les neuf transitions et les modes Auto / Qualité / Fluide restent ceux de cette version ; seul le chargement initial des fichiers a été adapté.

## Déploiement
1. Extraire le ZIP, importer le contenu à la racine d’un dépôt GitHub (conserver tous les sous-dossiers).
2. Importer le dépôt dans Vercel. Le fichier `vercel.json` définit le dossier de publication `public`, le preset Other, et aucune commande d’installation ou de compilation. Root Directory : racine du dépôt.
3. Deploy. La présentation est à `/`, le secours fixe à `/secours.html`.
4. Attendre le bouton Lancer, puis vérifier les dix diapositives et le plein écran. Pas de requête de scène supplémentaire pendant la navigation après le préchargement.

## Organisation
- `public/index.html` : accueil, navigation et structure du lecteur.
- `public/assets/css/player.css` : interface et mise en page commune.
- `public/assets/js/player.js` : préchargement, transitions, navigation et qualité.
- `public/scenes/` : dix scènes autonomes (CSS, JS et images embarqués pour préserver le rendu et le fonctionnement srcdoc). Modifier la scène concernée, pas le lecteur, pour un ajustement de contenu.
- `public/secours.html` : présentation fixe autonome.
- `vercel.json` : paramètres de publication.

## Essai local (facultatif)
Avec Python installé, à la racine : `python -m http.server 8000 --directory public`, puis ouvrir http://localhost:8000. Le lecteur modulaire nécessite HTTP ; ne pas ouvrir directement son index via file://. Pour une utilisation hors ligne sans serveur, garder le HTML autonome Performance V2 original et le fichier secours.html sur une clé USB.

## Commandes
Flèches / Page haut-bas : naviguer ; Espace : suivant ; F : plein écran ; H : masquer/afficher les commandes ; M : sommaire ; P : pause/reprise ; R : rejouer ; S : synthèse figée ; D : mesures ; Q : Auto/Qualité/Fluide ; Home/End : première/dernière.

## Confidentialité
Le portrait et les prévisions financières sont visibles dans la présentation. Ne pas publier le classeur financier source. Un dépôt GitHub privé ne rend pas automatiquement le site Vercel privé : vérifier les paramètres de protection du déploiement avant publication. Ne pas ajouter de secrets ou clés API : aucun n’est nécessaire.

## Référence
Versions : 01 V06 · 02 V02 · 03 S05.1 · 04 V03 · 05 V04 · 06 V02 · 07 V01 · 08 V02 · 09 V04 · 10 V05, optimisations Performance V2. Prévisionnel de référence : CGE_ZU_GEST1_GEST2_CGE_ZENO_V4ZU_Tahiti_Formation(1).xlsx. L'aide est conditionnelle ; le taux 26,7 % de la diapo 5 reste à confirmer dans le questionnaire original.

## Contrôle technique
Les dix scènes correspondent octet pour octet aux scènes de Performance V2. Tests Chromium 720p avec réponses HTTP simulées (serveur local bloqué par la politique du navigateur de test) : préchargement des dix scènes, navigation complète avant/arrière, modes graphiques, pause/reprise, rejeu, synthèse, sommaire, une seule iframe après chaque transition, aucune erreur JavaScript ni requête de scène supplémentaire. Déploiement réel Vercel et performances sur le PC cible à revalider.
