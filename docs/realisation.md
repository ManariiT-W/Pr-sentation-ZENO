> Rapport de la version précédente. Pour Motion V2, consulter motion-v2.md et verification-v2.md.

# Réalisation et conservation

## Sources consultées

- Mission « Texte collé(1).txt » : refonte complète autorisée, noir et or, trois personnages et neuf transitions.
- Dossier IMG_Personnage_Logo.zip : 17 images, dont trois planches de personnages, une image supplémentaire de Manarii, le logo ZENO, cinq concurrents, cinq fournisseurs/services et deux organismes.
- Dernier index.html corrigé lors du travail précédent : sauvegardé dans reference/index_valide.html. Aucun nouveau fichier HTML n’était présent dans le ZIP d’images.
- Première vidéo cinématographique : déjà examinée pendant la réalisation du prototype précédent ; référence d’atmosphère et de caméra. Aucun croquis n’était présent dans le nouveau ZIP.

Le développement concerne le diaporama, pas la plateforme commerciale ZENO. Les données ne sont pas recalculées à partir d’un autre business plan : elles sont conservées depuis la version validée, conformément à la mission.

## Modifications textuelles autorisées

| Diapo | Décision |
|---|---|
| 1, 2, 4, 6, 8, 9, 10 | Textes conservés ; disposition et visuels modifiés. |
| 3 | « Pour découvrir le service » rétabli, selon l’arbitrage explicite de l’utilisateur en faveur de la nouvelle mission. Tarifs et crédits conservés. |
| 5 | Suppression de « L’opportunité pour ZENO » et de son explication. Précision des catégories indirectes locales / directes internationales. Tous les résultats d’enquête conservés. |
| 7 | Actions de la nouvelle mission : pages professionnelles, vidéo prévue environ quinze jours avant ouverture, rencontres prévues au premier mois. Arbitrage explicite de l’utilisateur. Les trois étapes commerciales sont conservées. |

La diapo 8 conserve les tests avant ouverture ; les rencontres du premier mois en diapo 7 sont une action commerciale distincte. Aucune date officielle ni aide accordée n’est annoncée.

## Personnages et identité

- ZENO : poses générées à partir de sa planche officielle ; costume noir, détails dorés, visage et coiffure guidés par la référence. Une génération d’image ne garantit pas une identité biométrique parfaite.
- Client : même traitement à partir de la planche du dirigeant ; costume anthracite, aucune tenue ZENO.
- Manarii : planche officielle originale, cadrée par CSS sur le portrait du haut du corps, uniquement en diapo 2. Pas de visage régénéré.
- Logos : fichiers originaux copiés sans recoloration ni redessin. Les fonds propres aux logos sont préservés.
- Scènes 6 et 9 : aucun personnage.
- Polices locales : Cormorant et Inter, licences SIL OFL dans assets/fonts.

## Adaptation des neuf transitions

| Passage | Traitement réalisé |
|---|---|
| 1 → 2 | Agrandissement du personnage autour du visage, fondu sombre, apparition de Manarii. |
| 2 → 3 | Recul du portrait, retour vers ZENO et les trois abonnements. |
| 3 → 4 | Déplacement latéral et raccord vers la pose de poignée de main. Le mouvement orbital derrière un modèle et le serrage articulé sont remplacés par ce raccord d’images. |
| 4 → 5 | Recul de la poignée de main, apparition de la pose de réflexion à gauche. |
| 5 → 6 | Disparition du personnage et montée des trois avantages. |
| 6 → 7 | Fondu vers la pose de conversation ; pas d’animation faciale ou gestuelle articulée. |
| 7 → 8 | Recul de la conversation et apparition du bras en vue subjective. |
| 8 → 9 | Retrait du bras, environnement financier sans personnage. |
| 9 → 10 | Recul vers le personnage aux bras ouverts, rappel visuel de l’introduction. |

Les mouvements se renversent lors du retour à la diapo précédente. Un saut direct par les numéros utilise un raccord court. Les séquences durent entre 0,9 et 1,25 seconde et sont déclenchées manuellement. Pas de WebGL, pas de dépendance à un GPU 3D, pas de boucle permanente. Le repli en cas d’indisponibilité de l’API d’animation affiche immédiatement la diapo.

## Médias dérivés

Cinq images ont été créées avec l’outil de génération intégré à partir des planches fournies : open.png, handshake.png, thinking.png, conversation.png et pov.png. Elles sont des images fixes, pas des vidéos pré-rendues. Les intentions de génération sont consignées dans prompts-visuels.md. Les références originales restent incluses dans assets/characters.
