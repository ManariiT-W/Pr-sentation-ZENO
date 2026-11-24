# Contrôles Motion V2

- Textes des dix scènes identiques à la version précédente.
- Aucun personnage dans les diapos 3, 6 et 9 ; Manarii seulement dans la diapo 2.
- Syntaxe de tous les fichiers JavaScript contrôlée.
- Parcours des neuf transitions dans les deux sens, sous DOM simulé.
- Une seule scène active après chaque transition, numérotation et bornes correctes.
- Commandes rapides, destination en attente, interruption par changement de préférence d’animation.
- Durée commune des couches, direction inverse des chronologies, offsets croissants des images clés.
- Valeurs financières et statistiques finales exactes ; pas de callbacks d’animation restant après stabilisation.
- Commandes visibles Mode performance et Plein écran absentes.
- Masquage de la barre par temporisation, réapparition au pointeur.
- Gestes tactiles avant/arrière et annulation du geste.
- Calcul de mise à l’échelle contrôlé à 1366 × 768 et 1920 × 1080.
- Chemins des images et polices locaux.

Ces tests utilisent jsdom et des animations simulées. Ils ne constituent pas un test de rendu en navigateur, ni un essai de fluidité GPU, ni une validation réelle du plein écran ou du tactile sur matériel. Les interactions 3D articulées restent non réalisées, comme indiqué dans le README.
