# Nouvelle référence de motion design — analyse et mise en œuvre

## Vidéo examinée

Fichier reçu : From Klickpin.com- Unique Pinterest marketing ideas that can help you create a more curated classy and Pinterest-worthy result for busy people who.mp4.
Durée mesurée : 7,033 secondes ; image 1280 × 960 ; 30 images/seconde.
Analyse par extraction de 28 images à intervalles de 0,25 seconde.

## Observations

- Environ 0 à 1 seconde : composition éditoriale sombre, portrait à gauche et grand titre à droite ; relative stabilité de lecture.
- Environ 1 à 1,75 seconde : accélération du grossissement du titre, lettres dépassant le cadre ; le portrait progresse à une échelle différente. La composition est traversée plutôt que remplacée par un simple fondu.
- Vers 1,75 à 2 secondes : bref passage sombre puis apparition d’un nouvel arrière-plan et d’un nouveau titre.
- Environ 3,25 à 4,5 secondes : nouveau rapprochement ; le titre déborde largement ; le décor suivant apparaît flou puis retrouve sa netteté.
- Environ 5,5 à 7 secondes : amplification de la typographie et du décor, sortie du cadre puis flou temporaire. La succession maintient une direction de mouvement.

Ces observations sont visuelles ; elles ne permettent pas d’identifier le logiciel ou les courbes d’animation employés par l’auteur. Les timings ci-dessus sont approximatifs.

## Adaptation à ZENO

Les passages utilisent l’API Web Animations avec la même origine temporelle pour toutes les couches. Chaque séquence définit ses images clés dans une durée commune ; le retour arrière inverse la chronologie complète. Les grands textes temporaires reprennent le titre existant, sans information commerciale ajoutée, et sont masqués à la fin. Les images n’ont pas la même vitesse que la typographie. Les flous sont transitoires. Les visuels de personnages restent les images déjà validées.

| Passage | Durée | Raccord et limite |
|---|---:|---|
| 01→02 | 1,85 s | Zoom jusqu’à ×28 autour de la zone du regard, éclairage local temporaire et apparition du portrait Manarii. Agrandissement d’image, pas caméra 3D. |
| 02→03 | 1,70 s | Recul vers une révélation échelonnée des trois offres. Aucun personnage dans la scène finale. |
| 03→04 | 1,80 s | Retrait en profondeur, apparition d’un cadrage rapproché de la poignée de main. Repli : le geste articulé n’est pas réalisé. |
| 04→05 | 1,75 s | Traversée par agrandissement du cadrage des mains, titre monumental, révélation de l’étude et remplissage proportionnel des anneaux. Repli : les mains ne se séparent pas. |
| 05→06 | 1,35 s | Effacement dans l’ombre et montée des trois avantages, profondeur et netteté progressives. |
| 06→07 | 1,60 s | Recul des avantages et apparition de la scène commune, puis des informations commerciales. Conversation fixe, sans gestes articulés. |
| 07→08 | 1,85 s | Recul des deux personnages, arrivée du bras subjectif et révélation échelonnée des six étapes. |
| 08→09 | 1,70 s | Retrait du bras ; six blocs financiers et montants révélés par échelle/position/netteté. Aucun chiffre intermédiaire ni arrondi. |
| 09→10 | 2,90 s | Recul plus long depuis un cadrage agrandi, révélation du personnage et éclairage chaud temporaire. Retour à la composition d’ouverture. |

## Ressources manquantes pour terminer les interactions

Pour 03→04 : séquence du contact puis du serrage des mains de ZENO et du client, fidèle aux vêtements et aux visages fournis, cadrage finissant sur les mains.
Pour 04→05 : séquence partant de cette poignée de main, montrant le desserrage naturel puis l’espace entre les mains pour le raccord caméra.
Pour une conversation réellement animée : séquence commune avec de petits gestes professionnels cohérents.

Solution acceptable : personnages riggés avec mains articulées et animations, ou vidéos pré-rendues fidèles (avec raccord avant et arrière prévu). Le dossier actuel ne contient pas ces ressources. Les champs requires dans les deux séquences identifient les raccords à remplacer ; ce ne sont pas un lecteur vidéo déjà raccordé ni des médias fictifs.

## Portée des vérifications

Les tests vérifient la logique, pas la qualité cinématographique perçue. La qualité visuelle comparable à la vidéo, l’absence de chevauchements à toutes les étapes du zoom et la fluidité sur un projecteur ne sont pas certifiées sans essai graphique réel.
