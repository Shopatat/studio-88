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
| 4 | Rythme et pédale (compter, métronome, swing et syncope, les trois pédales, rubato), lire et mémoriser (la portée, lire plus vite, nuances, ornements, indications italiennes) et trois cours d'histoire de plus (le piano et ses 88 touches, la notation, le blues) | **fait** |
| 5 | Finitions : recherche plein texte sans accents, les 18 leçons du parcours reliées aux cours, plus aucun cours orphelin, README | **fait** |
| 6 | Mener un morceau : un huitième thème de onze cours sur le répertoire (choisir, combien de front, un cours par état, les révisions espacées, laisser de côté, jouer devant, varier), le lien « Que faire à ce stade ? » sur chaque morceau et « Bien choisir un morceau » sur la carte d’ajout | **fait** |

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

**Rien en cours.** Les six étapes sont faites et poussées.

67 cours en huit thèmes. On y entre de six façons : le lien « Comment on fait ? »
d’un bloc de séance, le « Que faire à ce stade ? » d’un morceau du répertoire, le
« Bien choisir un morceau » de la carte d’ajout, la bibliothèque de l’onglet
Apprentissage, sa recherche, et le « Lire le cours » de chaque leçon du parcours.
Aucun cours n’est orphelin, aucun lien « à lire ensuite » ne pointe dans le vide.

Décision de l’étape 6 : les cours d’état portent des identifiants réguliers
(etat-decouverte, etat-travail, etat-presque, etat-memorise, etat-entretien) pour
que le bouton d’un morceau se calcule d’un seul coursBtn("etat-"+st.id). Ajouter
un état à STATUS demandera donc d’écrire le cours du même nom.

Pistes si on y revient : un favori ou un historique des cours lus, et des cours
liés aux exercices — ce que mesure chacun, quand le refaire.
