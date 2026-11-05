# Studio 88

Atelier de piano en une seule page : séance minutée, métronome, cours et parcours de leçons,
exercices de lecture et d'oreille, clavier jouable, cercle des quintes et suivi de
répertoire avec rappels de révision.

Aucune dépendance, aucun compte, aucun serveur : un fichier HTML, du Web Audio pour
le son, et tes données enregistrées sur ton appareil.

## Ce qu'il y a dedans

| Onglet | À quoi ça sert |
| --- | --- |
| **Aujourd'hui** | Ce que tu t'es laissé à revoir, série de jours, minutes contre l'objectif, prochaine leçon, morceaux à réviser, graphe sur 14 jours et jalons. |
| **Séance** | Deux modes. **Simple** : tu choisis une durée, le minuteur tourne, rien d'autre — le temps est réservé, le bilan le compte. La durée écoulée, le minuteur ne coupe pas : il repart en avant (`+03:12`) et c'est toi qui arrêtes. **Guidée** : tu choisis le morceau au programme et la durée : les blocs, les consignes et les repères de métronome se déduisent de son état d'avancement, de sa tonalité, de ses tempos et de ses passages difficiles. Le programme se lit d'un bloc ; pendant la séance, un ruban proportionnel montre où tu en es et la consigne du moment s'affiche sous le minuteur. Séance lancée, l'écran devient le poste de travail : le minuteur passe en pleine largeur, les réglages du programme s'effacent, et tout ce dont on a besoin en jouant s'ouvre dessous. Le métronome est sous la consigne : il démarre sur le tempo du bloc, suit les blocs suivants, et s'arrête avec la séance. Sous lui, quatre outils, un tiroir à la fois : **📖 Le cours** (le cours du bloc en cours, lu sur place ; il suit quand tu passes au bloc suivant, et « Ouvrir en grand » donne la feuille complète), **🎹 Clavier** (une octave, la gamme du morceau marquée sur les touches, son armure nommée, la gamme et la cadence à l'oreille), **⏱ Mesure** (mesure, subdivision, accent, montée progressive) et **✎ Note** (ce qui coince, noté sur l'instant, préfixé du bloc, qui t'attend dans le bilan). Carillon de fin de bloc, bilan qui reporte le tempo atteint sur le morceau — et où tu écris ce qu'il faudra revoir la prochaine fois, qui t'attendra en haut de l'onglet et sur **Aujourd'hui**. |
| **Apprentissage** | Deux entrées. **Parcours** : 18 leçons en 4 niveaux, un paragraphe chacune, une chose à faire, le lien vers l'exercice correspondant et ta réussite récente dessus. **Cours** : 76 pages courtes en neuf thèmes — travailler, mener un morceau, gammes et tonalités, accords et harmonie, improviser, rythme et pédale, lire et mémoriser, s'exercer, d'où ça vient — à lire dans n'importe quel ordre — et surtout à ouvrir depuis une consigne de séance, quand elle te demande quelque chose dont tu ne connais pas le principe. |
| **Exercices** | Lecture de notes (clés de sol, de fa, les deux), trouve la touche, intervalles, accords à l'oreille, mémoire mélodique, armures. Chacun porte un lien **À quoi sert cet exercice ?** vers son cours. |
| **Métronome** | 30–240 bpm, tap tempo, mesures 2/4 à 7/8, subdivisions, accent sur le premier temps, indication de tempo italienne, mode progressif. |
| **Clavier** | Clavier jouable (souris, AZERTY, ou clavier MIDI en option), explorateur de gammes avec doigtés et explorateur d'accords avec renversements. |
| **Théorie** | Cercle des quintes cliquable : armure, gamme, les sept accords du ton, cadences jouables. |
| **Répertoire** | Tes morceaux avec état, tonalité, tempo actuel vers tempo cible, passages à surveiller, et une fréquence de révision par état (2 à 21 jours). C'est d'ici que part la séance du jour. |
| **Journal** | Séances, totaux, moyenne, réussite par exercice sur 30 jours, ajout de séances passées, réglages. |

## Du bloc au cours

Un bloc de séance qui dit « Gamme de fa dièse majeur et son arpège, mains ensemble,
deux octaves » ne sert à rien si on ne sait pas ce que ça demande. Chaque bloc porte
donc un lien **Comment on fait ?**, sous le programme comme sous le minuteur, qui
ouvre le cours correspondant dans une feuille superposée : la séance continue de
tourner derrière, et on la retrouve en fermant.

Les recettes de séance désignent leur cours par un identifiant (`h`). Les blocs que tu
as écrits toi-même, et la routine libre, n'en ont pas : le lien se déduit alors des
mots du bloc (`COURS_HINTS`), de sorte qu'un bloc nommé « Gammes » trouve quand même
quelque chose à dire.

Un cours qui parle d'une gamme la dessine : un clavier d'une octave dans la feuille,
les notes allumées, la tonique marquée, un bouton pour l'entendre et un autre pour
ouvrir l'onglet Clavier si tu veux les doigtés. Quand le morceau au programme a une
tonalité, c'est cette gamme-là qui s'affiche, pas celle de Do. Un cours d'accord fait de
même : l'accord dessiné, joué, et l'explorateur d'accords à un bouton.

Dans l'autre sens, chacune des 18 leçons du parcours renvoie au cours qui
l'approfondit, et un champ de recherche filtre les 76 pages sur leur texte entier,
accents ignorés : « pedale » trouve « pédale ».

## La séance, écran unique

Pendant une séance, changer d'onglet pour régler un tempo ou vérifier une note,
c'est perdre de vue le minuteur, la consigne et le ruban — et souvent ne pas
revenir. Dès que la séance tourne, l'écran se réorganise donc autour d'elle :
carte du minuteur en pleine largeur et en premier, réglages du programme
masqués (on ne refait pas sa séance en la jouant), et une barre d'outils sous
la consigne.

Aucun tiroir n'a de moteur à lui. Le clavier est le composant de l'onglet
Clavier, les réglages de mesure passent par les champs de l'onglet Métronome —
un seul endroit décide, et ce qui est réglé ici l'est partout. Le cours est le
même qu'ailleurs, rendu sans la feuille superposée : elle masquait le minuteur
et la consigne, c'est-à-dire ce qu'on lit le cours pour faire. En tiroir, il ne
propose rien qui ferme la séance des yeux — pas d'« ouvrir l'exercice », pas
d'onglet ; les « à lire ensuite » s'ouvrent dans le tiroir, et un retour ramène
au cours du bloc. La note, elle,
va droit dans les notes du bilan, précédée du nom du bloc où elle est née :
relue le soir, elle situe.

## Quand le son disparaît

Sur iPhone, un appel, Siri, une autre appli qui prend la sortie audio — et le
contexte audio du navigateur passe dans un état dont il ne sort pas tout seul.
L'écran continue, le minuteur tourne, mais plus rien ne sonne, et rien ne le dit.

L'appli le rattrape de quatre façons : à chaque son demandé, au retour au premier
plan, au premier geste qui suit — un geste n'est jamais refusé par iOS — et en
refabriquant le contexte s'il a été fermé pour de bon. Tant que le son n'est pas
revenu, une pastille **🔇 son coupé** s'affiche dans l'en-tête : la toucher rend le
son et le confirme par un carillon. Si elle apparaît souvent, c'est le système qui
coupe, pas l'appli qui plante.

## Les exercices, et ce qu'ils mesurent

Un exercice qui ne dit pas ce qu'il mesure ne sert qu'à faire un score. Chacun des six
a donc son cours, sous le titre de la carte : ce qu'il travaille, dans quel ordre on
monte les niveaux, les repères qui remplacent le comptage — les lignes Mi Sol Si Ré Fa
plutôt que le Do central, les groupes de deux et trois noires plutôt qu'une note
cherchée de loin, une chanson par intervalle, une couleur par accord — et quand y
revenir.

Un neuvième cours explique les chiffres : la série dit si c'est solide, le score dit où
tu en es, et la réussite sur trente jours du journal est la seule qui compte. En dessous
de 70 % l'exercice est trop dur, entre 70 et 85 % c'est là qu'on apprend, au-dessus de
90 % il faut changer quelque chose. Le lien **Comment lire ces chiffres ?** est sous la
réussite par exercice, dans le journal.

## Mener un morceau

Le répertoire a son thème de cours. Chaque morceau de la liste porte un lien **Que
faire à ce stade ?** qui ouvre le cours de son état — découverte, en travail, presque
prêt, mémorisé, entretien — avec ce qu'on y cherche, comment une séance s'y organise
et à quoi on reconnaît qu'il est temps de passer au suivant. La carte d'ajout renvoie
au cours sur le choix d'un morceau, et le thème contient de quoi décider du reste :
combien de morceaux mener de front, pourquoi l'appli rappelle un morceau au bout de
deux, trois, cinq, dix ou vingt et un jours, quand mettre une pièce de côté, comment
préparer de jouer devant quelqu'un, et pourquoi trois époques valent mieux que trois
pièces du même compositeur.

## Où vivent les données

Dans le navigateur de l'appareil (`localStorage`), sous la clé `studio88.v1`.
Au démarrage, l'appli demande au navigateur de marquer ce stockage comme persistant
(`navigator.storage.persist()`) : Safari l'accorde aux applis de l'écran d'accueil,
ce qui met les données à l'abri d'un nettoyage automatique — mais pas d'un effacement
des données de sites. D'où la sauvegarde, et le rappel qui s'affiche sur
**Aujourd'hui** quand la dernière copie date de plus de trois semaines.
Sur iPhone et iPad, le bouton **Partager…** du Journal passe par la feuille de partage
iOS : le fichier part dans Fichiers, iCloud Drive, un mail ou un AirDrop, là où un
téléchargement se perdrait.
Rien ne part sur le réseau, et il n'y a donc pas de synchronisation entre ton
ordinateur et ton iPad : chacun garde son propre journal. Vider les données du site
efface le suivi.

Le même fichier, publié comme artifact sur claude.ai, utilise à la place une base
attachée à la page et se synchronise alors d'un appareil à l'autre. Le code détecte
l'un ou l'autre contexte tout seul (`window.claude`), sans réglage.

Une écriture qui n'atteint pas la base — réseau coupé, base pas encore ouverte — est
consignée sous la clé `studio88.pending`, relue au démarrage suivant et rejouée. La
pastille de l'en-tête dit où on en est : `local`, `synchronisé`, `n en attente`, ou
`non enregistré` si le navigateur refuse d'écrire.

## Installer sur iPhone ou iPad

1. Ouvre l'adresse du site dans **Safari**.
2. Bouton Partager → **Sur l'écran d'accueil**.
3. L'icône lance l'appli en plein écran, sans barre de navigateur, et elle fonctionne
   sans réseau grâce au service worker.

L'appli ne se laisse pas zoomer, ni au double tap ni au pincement : elle se met déjà
à la taille de l'écran, et un zoom accidentel en pleine séance est pénible. Trois
verrous, parce qu'aucun ne suffit seul : `user-scalable=no` dans la balise viewport
(respecté par l'appli de l'écran d'accueil, ignoré par Safari en onglet),
`touch-action: pan-x pan-y` sur tous les éléments, et les événements `gesture*`
de Safari interceptés. Le défilement, lui, est intact.

Le bouton silencieux de l'iPhone ne coupe pas le son de l'appli : par défaut une
page web joue dans la session audio « ambient », que ce bouton éteint, alors l'appli
déclare `navigator.audioSession.type = "playback"` (Safari 16.4+) et sort comme une
appli de musique. Revers de la médaille : pendant qu'elle joue, la musique lancée
ailleurs se met en pause.

Garde l'écran allumé pendant une séance : iOS coupe l'audio dès le verrouillage, ce
qui arrêterait le métronome. L'appli demande le maintien de l'écran quand le minuteur
tourne, et Safari récent l'accorde.

Le MIDI (onglet Clavier, bloc facultatif) n'existe pas sur iOS : aucun navigateur iOS
n'implémente Web MIDI. Il fonctionne sur Chrome, Edge et Opera, pas sur Safari ni Firefox.

## Développement

```sh
node tools/make-icons.js   # régénère icon-180.png et icon-512.png
node build.js              # régénère index.html à partir de studio88.html
node tools/check-cours.js  # vérifie la bibliothèque de cours : liens, orphelins, leçons
```

- `studio88.html` est la source : titre, styles, markup et script, sans squelette de
  document. C'est la forme attendue par l'outil Artifact de claude.ai.
- `index.html` est **généré** : ne le modifie pas à la main, modifie `studio88.html`
  puis relance `node build.js`.
- Après une modification publiée, incrémente `CACHE` dans `sw.js` pour que les
  appareils déjà installés récupèrent la nouvelle version.

Pour servir le dossier en local :

```sh
npx --yes serve .
```

## Licence

MIT — voir `LICENSE`.
