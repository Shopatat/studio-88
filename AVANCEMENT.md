# Avancement — chantier « Cours »

## Objectif

Qu'une consigne de séance ne reste jamais une énigme. Quand un bloc dit
« Gamme de fa dièse majeur et son arpège, mains ensemble, deux octaves », il faut
pouvoir toucher la consigne et lire, sur place, ce qu'est cette gamme, à quoi elle
sert et comment on la travaille — puis revenir à la séance qui tourne toujours.

Au-delà du pont : faire de Studio 88 de quoi apprendre et approfondir. Une
bibliothèque de cours courts, denses, consultables depuis n'importe où : gammes
et tonalités, accords et harmonie, improvisation, rythme, pédale, lecture,
mémoire, et d'où tout cela vient.

## Ce qui existe déjà

- **Parcours** (onglet Apprentissage) : 18 leçons graduées, niveaux 1 à 4,
  progression cochée, chacune renvoyant vers un exercice ou un onglet. On le garde
  tel quel : c'est le chemin pour débuter, pas une encyclopédie.
- **Séance guidée** : `RECIPES` par état d'avancement du morceau, consignes à
  trous (`{gamme}`, `{spots}`, `{climb}`…) remplies par `fillTask()`.
- Avant l'étape 1, aucune fenêtre superposée dans l'appli : tout était onglets et
  cartes. La feuille (`.sheet`) est le premier élément de ce genre.

## Plan

| Étape | Contenu | État |
|---|---|---|
| 1 | Le pont et la bibliothèque : feuille superposée (`sheet`), structure `COURS` + thèmes, bascule Parcours/Cours dans Apprentissage, lien « Comment on fait ? » sur chaque bloc de séance, et les 20 cours que ces blocs appellent | **fait** |
| 2 | Gammes et tonalités : 10 cours de plus (douze notes, gamme majeure, armure, cercle des quintes, mineures, modes, pentatonique, blues, chromatique, transposer) + un cours d'histoire sur le tempérament, et un clavier dessiné dans la feuille | **fait** |
| 3 | Accords, harmonie, impro : 7 cours d'harmonie (triades, renversements, septièmes, degrés, cadences, chiffrage, voicings) et 5 d'improvisation (commencer, question-réponse, grille de blues, ii-V-I, accompagner), plus l'accord dessiné dans la feuille | **fait** |
| 4 | Rythme, pédale, lecture, mémoire : subdivisions, swing, syncope, les trois pédales, lecture à vue, apprendre par cœur ; et les cours d'histoire (d'où viennent les modes, Bach et les 24 tonalités, le blues) | à faire |
| 5 | Finitions : recherche dans les cours, liens croisés, les 18 leçons du parcours reliées aux cours, README, relecture d'ensemble | à faire |

Chaque étape finit par un commit poussé et une mise à jour de ce fichier.

## Décisions prises

- **Les cours vivent dans l'onglet Apprentissage**, sous le parcours, pas dans un
  dixième onglet : la barre est déjà pleine sur iPhone.
- **Une feuille superposée** plutôt qu'un changement d'onglet, pour qu'un cours
  ouvert en pleine séance ne fasse pas perdre le minuteur de vue.
- **Deux objets distincts** : le parcours (gradué, coché, linéaire) et les cours
  (référence, par thème, consultables dans n'importe quel ordre). Ils se citent
  l'un l'autre.
- Les cours ne sont pas cochables : on ne « finit » pas une référence.

## Étape en cours

Étapes 1 à 3 faites et poussées. 43 cours : 17 « Travailler », 13 « Gammes et
tonalités », 7 « Accords et harmonie », 5 « Improviser », 1 « D’où ça vient ».
Dans la feuille, `sc:` dessine une gamme et `ch:` un accord sur un clavier d’une
octave, avec le son ; `sc:'auto'` prend la tonalité du morceau au programme et
`ch:'2:m7'` fixe la fondamentale (ré) pour illustrer l’accord dont parle le texte.

Prochaine action : étape 4 — rythme et pédale, lecture et mémoire, et les cours
d’histoire. Les thèmes `rythme` et `lecture` de `COURS_TH` sont encore vides et ne
s’affichent donc pas.
