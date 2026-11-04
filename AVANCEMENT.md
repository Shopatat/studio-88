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
| 7 | S’exercer : un neuvième thème de huit cours sur les exercices (un par exercice, plus la lecture des scores), un cours sur les intervalles qui comble la seule leçon du parcours sans cours, le lien « À quoi sert cet exercice ? » sur la carte de l’onglet et « Comment lire ces chiffres ? » sous la réussite du journal | **fait** |
| 8 | Le son qui disparaît, et la séance tout-en-un : réveil du contexte audio dans tous ses états (y compris l’« interrupted » de l’iPhone, qui ne se répare pas tout seul), pastille « son coupé » dans l’en-tête, et le métronome en bandeau sous la consigne, qui démarre sur le tempo du bloc et suit les blocs suivants | **fait** |

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

**Rien en cours.** Les huit étapes sont faites et poussées.

76 cours en neuf thèmes. On y entre de sept façons : le lien « Comment on fait ? » d’un
bloc de séance, le « Que faire à ce stade ? » d’un morceau du répertoire, le « Bien
choisir un morceau » de la carte d’ajout, le « À quoi sert cet exercice ? » de la carte
d’un exercice, la bibliothèque de l’onglet Apprentissage, sa recherche, et le « Lire le
cours » de chaque leçon du parcours. Le journal ajoute « Comment lire ces chiffres ? »
sous la réussite par exercice. Aucun cours n’est orphelin, aucun lien « à lire ensuite »
ne pointe dans le vide, et les 18 leçons ont maintenant toutes un cours — la 17e,
« Reconnaître un intervalle », n’en avait pas.

## Décisions prises aux dernières étapes

- **Étape 8, le son.** La panne venait d’un seul test : `ac()` ne réveillait le
  contexte que s’il était `suspended`. L’iPhone, lui, le met en `interrupted` dès
  qu’un appel ou une autre appli prend la sortie audio, et il n’en ressort jamais
  seul : tout son demandé ensuite partait dans le vide, sans la moindre erreur.
  Désormais tout état autre que `running` déclenche une reprise, un contexte
  `closed` est refabriqué (avec son compresseur, qui appartenait à l’ancien), et
  quatre déclencheurs s’en chargent : chaque son, le retour au premier plan, le
  `pageshow`, et le premier geste venu. Les gestes sont le seul recours qu’iOS ne
  refuse jamais, d’où le `pointerdown` en capture.
- La pastille **🔇 son coupé** ne s’affiche que si la reprise échoue. Elle évite
  la seule conclusion possible autrement : « l’appli est cassée ». `paintSnd()`
  est appelée à chaque note, donc elle ne touche le DOM qu’au changement d’état.
- **Étape 8, la séance.** Le bandeau de métronome n’a pas de moteur à lui : même
  `M`, mêmes fonctions, une deuxième série de lampes. Elles portent un `data-i`
  parce que `lampAt` peint maintenant deux listes d’un coup.
- Le tempo du bloc s’impose au démarrage du métronome et au changement de bloc,
  par `setBpmLive()` — qui ne touche pas au tempo enregistré dans l’onglet
  Métronome. Un bloc sans tempo ne change rien. « Terminer » arrête le métronome.
- Piège rencontré, à retenir : dans `String.replace(a, b)`, un `$$` du texte de
  remplacement vaut un `$` littéral. Les scripts de remplacement de ce dépôt
  passent donc une **fonction** comme second argument, sinon `$$('#x')` devient
  `$('#x')` — ce qui s’exécute sans erreur et casse en silence.

- **Étape 6** : les cours d’état portent des identifiants réguliers (etat-decouverte,
  etat-travail, etat-presque, etat-memorise, etat-entretien) pour que le bouton d’un
  morceau se calcule d’un seul `coursBtn('etat-'+st.id)`. Ajouter un état à STATUS
  demandera donc d’écrire le cours du même nom.
- **Étape 7**, même principe : les cours d’exercice s’appellent `exo-<kind>` —
  exo-read, exo-keys, exo-interval, exo-chord, exo-echo, exo-keysig — et `setDrill()`
  en déduit le bouton par `coursBtn('exo-'+kind)`. Ajouter un exercice à DRILL_INFO
  demandera d’écrire le cours du même nom, sinon le bouton disparaît silencieusement
  (coursBtn rend une chaîne vide pour un identifiant inconnu).
- Les cours d’exercice ne décrivent pas la manipulation (la carte le fait déjà en une
  ligne) mais ce que l’exercice mesure, l’ordre des niveaux et quand y revenir.
- `exo-score` est le premier cours à renvoyer vers le journal : la liste d’onglets de
  `openCours` a gagné `journal`.

## Vérification

`node tools/check-cours.js` relit `studio88.html` et vérifie : la syntaxe du script
entier, l’unicité des identifiants, les thèmes connus, les `see` qui existent, les onglets et exercices cités,
les 18 leçons reliées, aucun cours orphelin (en tenant compte des familles calculées
`etat-` et `exo-`), et que la recherche sans accents trouve bien les nouveaux mots.
À lancer après chaque lot de cours : il sort en erreur s’il trouve quelque chose.

## Pistes si on y revient

- Les exercices dans la tonalité du morceau au programme : `focusKey()` existe
  déjà, les tirages sont encore au hasard des douze tonalités.
- Métronome, Clavier et Théorie sont les trois derniers onglets d’où aucun cours
  ne part, alors que les cours correspondants existent tous.
- Un favori ou un historique des cours lus — la bibliothèque commence à être grande.
- Des cours liés aux morceaux eux-mêmes : une fiche par compositeur ou par époque,
  puisque « varier ce que tu joues » le demande sans rien proposer.
- Le cercle des quintes de l’onglet Théorie n’a pas encore de lien vers les cours.
