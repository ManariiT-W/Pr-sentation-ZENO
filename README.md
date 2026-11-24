# ZENO — Motion V2

## Ouvrir sur Windows, hors ligne

Extraire entièrement le ZIP, ouvrir le dossier ZENO_Motion_V2, puis double-cliquer sur **index.html**. Conserver tous les sous-dossiers ensemble. Aucun logiciel à installer, aucun accès Internet nécessaire pour utiliser la présentation. Navigateur récent : Edge, Chrome ou Firefox.

## Commandes

- Flèches gauche/droite, Page précédente/suivante, espace : navigation manuelle.
- Début / Fin : première / dernière diapo.
- Barre numérotée en bas : accès direct. Elle disparaît après 2,6 secondes d’inactivité et revient au mouvement du pointeur, au toucher ou au clavier. Un bouton conservant le focus clavier reste accessible.
- Écran tactile : glissement horizontal pour changer de diapo ; un mouvement vertical ou trop court ne déclenche rien.
- F11 : plein écran du navigateur ; Échap ou F11 pour en sortir selon le navigateur. Le raccourci F est également disponible.
- La préférence système de réduction des animations est respectée. Le raccourci P active le repli simplifié sans ajouter de commande visible.

Aucun passage automatique. Aucune animation permanente. Les montants affichent leur valeur exacte dès leur apparition.

## Ce qui change

Les dix scènes et leurs textes sont conservés. Le personnage de la diapo 3 est supprimé. Les neuf raccords utilisent une chronologie synchronisée, des zooms et dézooms distincts, une couche typographique monumentale temporaire, un flou de transition et des révélations par groupes. La conclusion dure 2,9 secondes, plus longtemps que les autres raccords. Les commandes visibles « Mode performance » et « Plein écran » sont supprimées.

## Limites importantes

**Cette version ne satisfait pas encore les deux interactions articulées demandées en 03→04 et 04→05.** Le serrage et la séparation des mains ne sont pas animés : ces passages utilisent encore une image de poignée de main avec mouvement de caméra. La conversation est également une pose fixe. Les personnages ne sont pas des modèles 3D animables.

Il faut des modèles articulés fidèles aux personnages, ou des vidéos pré-rendues de ces gestes, pour remplacer ces raccords de repli. Aucun effet CSS n’est présenté comme une animation 3D volumétrique. Les limites et les médias nécessaires sont détaillés dans docs/motion-v2.md.

Les tests de contenu et de logique ont réussi. Le rendu et la fluidité n’ont pas été vérifiés en navigateur : le contrôle visuel était bloqué dans l’environnement de réalisation. Tester les dix scènes sur le PC de projection avant l’oral.

## Organisation

index.html reste léger. Les dix contenus sont séparés dans src/slides ; les neuf chronologies dans src/transitions/sequences.js ; la barre et les gestes tactiles dans src/navigation.js ; la navigation générale dans src/main.js. Images, logos et polices sont locaux dans assets. Les documents de référence et le rapport de conservation sont inclus.

La sauvegarde historique dans reference est distincte et peut contenir ses anciennes dépendances réseau. Elle n’est pas nécessaire à l’exécution de Motion V2.
