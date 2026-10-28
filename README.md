# Studio 88

Atelier de piano en une seule page : séance minutée, métronome, parcours de leçons,
exercices de lecture et d'oreille, clavier jouable, cercle des quintes et suivi de
répertoire avec rappels de révision.

Aucune dépendance, aucun compte, aucun serveur : un fichier HTML, du Web Audio pour
le son, et tes données enregistrées sur ton appareil.

## Ce qu'il y a dedans

| Onglet | À quoi ça sert |
| --- | --- |
| **Aujourd'hui** | Ce que tu t'es laissé à revoir, série de jours, minutes contre l'objectif, prochaine leçon, morceaux à réviser, graphe sur 14 jours, jalons, et la citation du jour. |
| **Séance** | Deux modes. **Simple** : tu choisis une durée, le minuteur tourne, rien d'autre — le temps est réservé, le bilan le compte. La durée écoulée, le minuteur ne coupe pas : il repart en avant (`+03:12`) et c'est toi qui arrêtes. **Guidée** : tu choisis le morceau au programme et la durée : les blocs, les consignes et les repères de métronome se déduisent de son état d'avancement, de sa tonalité, de ses tempos et de ses passages difficiles. Le programme se lit d'un bloc ; pendant la séance, un ruban proportionnel montre où tu en es et la consigne du moment s'affiche sous le minuteur. Carillon de fin de bloc, bilan qui reporte le tempo atteint sur le morceau — et où tu écris ce qu'il faudra revoir la prochaine fois, qui t'attendra en haut de l'onglet et sur **Aujourd'hui**. |
| **Apprentissage** | 18 leçons en 4 niveaux : un paragraphe, une chose à faire, le lien vers l'exercice correspondant et ta réussite récente dessus. |
| **Exercices** | Lecture de notes (clés de sol, de fa, les deux), trouve la touche, intervalles, accords à l'oreille, mémoire mélodique, armures. |
| **Métronome** | 30–240 bpm, tap tempo, mesures 2/4 à 7/8, subdivisions, accent sur le premier temps, indication de tempo italienne, mode progressif. |
| **Clavier** | Clavier jouable (souris, AZERTY, ou clavier MIDI en option), explorateur de gammes avec doigtés et explorateur d'accords avec renversements. |
| **Théorie** | Cercle des quintes cliquable : armure, gamme, les sept accords du ton, cadences jouables. |
| **Répertoire** | Tes morceaux avec état, tonalité, tempo actuel vers tempo cible, passages à surveiller, et une fréquence de révision par état (2 à 21 jours). C'est d'ici que part la séance du jour. |
| **Journal** | Séances, totaux, moyenne, réussite par exercice sur 30 jours, ajout de séances passées, réglages. |

## Où vivent les données

Dans le navigateur de l'appareil (`localStorage`), sous la clé `studio88.v1`.
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
