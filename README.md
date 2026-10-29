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
| **Séance** | Deux modes. **Simple** : tu choisis une durée, le minuteur tourne, rien d'autre — le temps est réservé, le bilan le compte. La durée écoulée, le minuteur ne coupe pas : il repart en avant (`+03:12`) et c'est toi qui arrêtes. **Guidée** : tu choisis le morceau au programme et la durée : les blocs, les consignes et les repères de métronome se déduisent de son état d'avancement, de sa tonalité, de ses tempos et de ses passages difficiles. Le programme se lit d'un bloc ; pendant la séance, un ruban proportionnel montre où tu en es et la consigne du moment s'affiche sous le minuteur. Carillon de fin de bloc, bilan qui reporte le tempo atteint sur le morceau — et où tu écris ce qu'il faudra revoir la prochaine fois, qui t'attendra en haut de l'onglet et sur **Aujourd'hui**. |
| **Apprentissage** | Deux entrées. **Parcours** : 18 leçons en 4 niveaux, un paragraphe chacune, une chose à faire, le lien vers l'exercice correspondant et ta réussite récente dessus. **Cours** : une bibliothèque de pages courtes rangées par thème, à lire dans n'importe quel ordre — et surtout à ouvrir depuis une consigne de séance, quand elle te demande quelque chose dont tu ne connais pas le principe. |
| **Exercices** | Lecture de notes (clés de sol, de fa, les deux), trouve la touche, intervalles, accords à l'oreille, mémoire mélodique, armures. |
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
quelque chose à dire. Quand le morceau au programme a une tonalité, le cours sur les
gammes propose d'ouvrir celle-là au clavier, pas une autre.

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
