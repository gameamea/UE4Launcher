# TODO

## correction de bugs

- pourquoi l'image d'un asset (thumbnail) n'est pas "trouvée" si un asset local est un plugin
  - vérifier si cela fonctionne avec un asset qui n'est pas un plugin
- différencier les assets locaux "plugins" ou non

## améliorations

- vérifier si les assets locaux sont correctement ajoutés à un projet
- vérifier si les assets locaux , quand c'est un plugin, sont correctement ajoutés à un projet.
  - A priori non, ils sont ajouté comme des assets normaux
  - voir comment les ajouter correctement (dans le dossier content/plugins ?)
- changer l'affichage des asset pour mettre plus de détail (version compatible, catégorie, tag...)
- filter ou trier les assets locaux par dossier parent (ceux enregistré dans le fichier config.json)
- filter les assets du "vault"
  - par catégories
  - par tags
- trier les assets du "vault"
  - par date de parution
  - par date d'achat
- mémoriser si un plugin a été installé dans un moteur
  - utiliser le contenu du dossier .egstore du moteur ?