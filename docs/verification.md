# Compte rendu des contrôles

## Résultats obtenus

- Dix scènes présentes, dans l’ordre de référence ; neuf séquences de transition définies.
- Textes des diapos 1, 2, 4, 6, 8, 9 et 10 identiques après normalisation des espaces.
- Modifications des diapos 3, 5 et 7 limitées aux arbitrages consignés dans realisation.md.
- Six montants financiers exacts : 810 500 ; 3 034 860 ; 1 897 286 ; 560 000 ; 577 574 ; 2 122 285 F.
- Trois pourcentages exacts : 50 ; 73,3 ; 26,7 %. Les cercles se remplissent proportionnellement et s’arrêtent.
- Syntaxe de tous les fichiers JavaScript vérifiée.
- Ressources d’images et de polices présentes localement ; aucune dépendance réseau de fonctionnement.
- Sauvegarde originale identique octet par octet à la présentation validée utilisée pour ce travail.
- Logos conservés dans leurs fichiers d’origine ; aucune recoloration.
- Aucun personnage dans les diapos 6 et 9 ; Manarii présent uniquement dans la diapo 2.

## Tests de logique exécutés

Tests sous Node.js avec jsdom et une horloge d’animation contrôlée :

- Parcours des neuf passages vers l’avant puis des neuf passages vers l’arrière.
- Une seule scène active et accessible après chaque passage.
- Compteur de page et désactivation des boutons aux extrémités.
- Commandes rapides avant/arrière et traitement de la dernière destination demandée.
- Changement de mode performance pendant une transition.
- Touches Début et Fin et accès direct par numéro.
- Valeurs finales des six compteurs et des trois anneaux.
- Arrêt des callbacks d’animation après achèvement.
- Vérification de tous les chemins d’images utilisés.

Une protection a été ajoutée au gestionnaire clavier pour traiter correctement un événement dont la cible n’est pas un élément HTML.

## Limites de vérification

jsdom ne calcule pas le rendu graphique d’un navigateur. Les tests d’animation utilisent une simulation de l’API Web Animations ; ils vérifient la logique, pas la qualité visuelle des mouvements.

L’accès au navigateur de contrôle étant bloqué, il n’a pas été possible de certifier les chevauchements, les dimensions de texte à l’écran, le comportement réel du plein écran, la fluidité GPU ou le rendu à 1366 × 768 et 1920 × 1080. La composition est conçue sur une scène de 1600 × 900, mise à l’échelle uniformément pour ces résolutions.

Contrôle restant sur le PC de l’oral : parcourir les dix diapos en plein écran, vérifier lisibilité et cadrages, naviguer en arrière, puis essayer le mode performance. Aucun succès de test visuel n’est revendiqué dans cette livraison.
