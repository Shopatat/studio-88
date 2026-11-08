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
| 9 | La séance en écran unique : pendant qu’elle tourne, le minuteur passe en pleine largeur et en premier, les réglages du programme s’effacent, et trois tiroirs s’ouvrent sous la consigne — clavier d’une octave avec la gamme et l’armure du morceau, réglages de mesure et de subdivision, note qui part droit dans le bilan | **fait** |
| 10 | Le cours du bloc en tiroir : `openCours` scindé en un corps de cours réutilisable (`coursHTML` / `wireCoursBody`) et une feuille qui n’en est plus que l’un des hôtes, un quatrième outil de séance qui lit le cours du bloc sur place, suit les blocs, enchaîne les « à lire ensuite » et sait s’ouvrir en grand | **fait** |

| 11 | L’écran unique pris au mot : la séance tient dans la hauteur de l’écran et la page ne défile plus, le programme passe dans un cinquième tiroir, les cinq outils tiennent sur une ligne, et le paysage d’un téléphone passe à deux colonnes sans barre d’onglets | **fait** |
| 12 | L’onglet **Impro** : neuf tournes jouées en boucle (moteur à programmation anticipée, quatre styles d’accompagnement, décompte d’une mesure), la grille qui s’allume mesure par mesure, et le clavier qui montre soit la gamme de la tourne soit celle de l’accord du moment, trouvée par rotation de la gamme de la grille | **fait** |
| 13 | Les consignes d’impro : dix-huit contraintes tirées sans répétition (sac vidé avant d’être rempli) et un minuteur de 2, 3 ou 5 minutes avec carillon, sous la grille qui tourne | **fait** |
| 14 | Huit cours d’improvisation de plus (treize en tout), les liens croisés depuis les gammes, l’harmonie et le répertoire, le bouton « Ouvrir l’improvisation » sur leurs feuilles, et « Improviser dans ce ton » depuis le cercle des quintes | **fait** |
| 15 | Cohabiter avec une autre appli : session audio `ambient` au choix (sans quoi iOS met l’autre appli en pause), notes MIDI reçues sans les doubler, et un message juste sur l’absence de Web MIDI dans Safari | **fait** |
| 16 | L’iPad 12,9 en paysage : colonne à 1240 au-delà de 1200, trois cartes de front dans l’impro au-delà de 1180, clavier plus haut au-delà de 1100, et la séance en écran unique à deux colonnes avec le programme à demeure | **fait** |
| 17 | Fluidité et ergonomie : en-tête qui s’efface en descendant (196 → 105 points), pastilles sur une ligne, place gardée par onglet, survol réservé aux pointeurs et retour d’appui au doigt, page vraiment figée sous la feuille d’un cours | **fait** |
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

**Rien en cours.** Les dix-sept étapes sont faites et poussées. La
dix-septième a rendu un dixième de l’écran du téléphone à ce qu’on y
lit, et remplacé le survol par un vrai retour d’appui.

**Le chantier iPad s’arrête là, et c’est volontaire.** Ce qui est fait reste
(les largeurs, les deux réglages de cohabitation) et ne coûte rien : les deux
cases sont décochées par défaut, donc rien ne change sur l’iPhone. Mais l’iPad
ne sera pas utilisé pour jouer : posé sur le pupitre, il prend la place de la
partition papier, et la seule façon de l’y installer serait de numériser les
partitions. Refusé, pour une raison qui vaut pour tout le reste de l’appli :
**brancher, lancer, jouer.** Un pas de préparation en plus et on ne joue plus.
L’usage réel reste l’iPhone posé à côté de la partition. Donc pas de lecteur
de partition, pas de scan, pas d’import PDF — inutile de le reproposer.

84 cours en neuf thèmes. On y entre de huit façons : le lien « Comment on fait ? » d’un
bloc de séance, le « Que faire à ce stade ? » d’un morceau du répertoire, le « Bien
choisir un morceau » de la carte d’ajout, le « À quoi sert cet exercice ? » de la carte
d’un exercice, la bibliothèque de l’onglet Apprentissage, sa recherche, le « Lire le
cours » de chaque leçon du parcours, et la liste du thème Improviser au bas
de l’onglet Impro. Le journal ajoute « Comment lire ces chiffres ? »
sous la réussite par exercice. Aucun cours n’est orphelin, aucun lien « à lire ensuite »
ne pointe dans le vide, et les 18 leçons ont maintenant toutes un cours — la 17e,
« Reconnaître un intervalle », n’en avait pas.

## Décisions prises aux dernières étapes

- **Étape 17.** Mesuré avant de toucher à quoi que ce soit : l’en-tête
  faisait 196 points sur 812, et la barre d’onglets cachait six onglets sur
  dix. La barre garde son défilement — elle a déjà ses ombres de bord et
  l’onglet actif s’y amène tout seul — mais l’en-tête se replie.
- Les règles de survol sont enveloppées **sur place**, une par une. Les
  regrouper en un seul bloc à la fin changeait l’ordre de la cascade :
  `.btn:hover` serait passé après `.btn.primary`, et le bouton doré aurait
  pâli au survol.
- Première version du repli : chaque ouverture de feuille décalait la page de
  45 points. En figeant la page, le défilement retombe à zéro, l’en-tête se
  redéployait derrière la feuille, et le navigateur rattrapait la hauteur
  retrouvée. Deux garde-fous : l’en-tête ne bouge pas tant que la page est
  figée, et il prend sa taille d’arrivée **avant** un changement d’onglet.
- La séance en écran unique est exclue du repli (`body.lower:not(.solo)`) :
  elle ne défile pas, elle hériterait de l’état laissé par la page
  précédente et montrerait son titre une fois sur deux.
- À 320 points de large les pastilles tiennent encore sur deux lignes. Les
  faire tenir demanderait de rogner l’objectif du jour ; laissé tel quel.

- **Étape 15.** Vérifié avant de coder : Safari n’a pas le Web MIDI, sur
  iPhone comme sur iPad (caniuse, octobre 2026, « non supporté » jusqu’à iOS
  27.2 ; la page d’état de WebKit est retirée). Aucun navigateur iOS n’y
  change rien, ils partagent le moteur d’Apple. L’extension qui l’ajoute
  n’existe que sur macOS. Le message de l’appli le dit maintenant.
- `audioSession.type` était figé sur `playback`. C’est ce qui donne le son
  en mode silencieux, mais c’est aussi ce qui met les autres applis en
  pause : dans un écran partagé avec une appli de piano, le métronome aurait
  coupé l’instrument. Le réglage `mix` bascule en `ambient`, qui se mélange
  mais suit le bouton silencieux. Il se change en marche, sans recharger.
- **Étape 16.** Les largeurs visées viennent de l’écran partagé d’iPadOS
  (507, 678, 860) et du plein écran (1366). Aucune détection d’appareil :
  des requêtes de média, que la fenêtre d’un ordinateur traverse aussi.
- La règle du clavier plus haut, écrite près des autres largeurs, ne passait
  pas : `.kb.sm{height:112px}` est définie plus bas dans le fichier, à
  spécificité égale. Déplacée juste après sa règle de base.
- En écran unique sur grand écran couché, le programme s’affiche à demeure
  dans la colonne de gauche et son tiroir disparaît de la barre. Les deux
  listes sont peintes par la même fonction, appelée à chaque bloc : l’une
  des deux seulement est visible.

- **Étape 14.** Les huit nouveaux cours évitent de refaire ceux des gammes :
  « la pentatonique » reste dans *Gammes et tonalités*, « la pentatonique
  au-dessus d’une grille » dit ce qu’on en fait, et chacun renvoie à l’autre.
  Même partage pour les modes et pour les voicings.
- `go:'impro'` ouvre l’onglet depuis la feuille d’un cours : le ternaire des
  libellés attendait une valeur de plus. Les cinq cours d’impro déjà là l’ont
  reçu aussi.
- Le script de vérification a servi à ça : il a signalé deux cours orphelins
  (aucun `see` ne menait à eux) avant le commit.

- **Étape 13.** Le tirage des consignes est un sac, pas un tirage au sort :
  on mélange les dix-huit index, on les sort un par un, et on ne remélange
  qu’une fois le sac vide. Une consigne ne revient donc jamais avant que les
  autres soient passées, et le dernier tirage d’un sac ne peut pas répéter le
  premier du suivant.
- Le minuteur de la consigne est indépendant de `T` (la séance) et de `M` (le
  métronome) : il n’a ni verrou d’écran ni audio programmé, seulement une
  date de fin et un carillon. Arrêté à la main il disparaît ; arrivé à zéro
  il reste à 0:00, pour qu’on voie pourquoi le carillon a sonné.

- **Étape 12.** L’accompagnement réutilise la technique du métronome : on
  programme le son une fraction de seconde à l’avance et on repeint l’écran
  au moment où il sort (`setTimeout` gardé par un numéro de génération), pas
  quand on le programme. `IM` est un état séparé de `M` : lancer une tourne
  arrête le métronome, et changer d’onglet arrête la tourne.
- La gamme sur un accord n’est pas une table d’accords vers gammes. Si
  l’accord tient dans la gamme de la tourne, on affiche cette gamme-là lue
  depuis la fondamentale de l’accord : on la reconnaît en comparant la
  signature des intervalles à celles de `SCALES`. La seule exception codée en
  dur est le V majeur d’une grille mineure (`min:1`) : phrygien dominant,
  mode ajouté à `SCALES` pour l’occasion. Sans le drapeau `min`, le V d’un
  blues majeur recevait lui aussi le phrygien dominant, ce qui est faux.
- Trois orthographes se sont succédé avant la bonne. Une gamme s’écrit avec
  une lettre par degré : on part de la lettre de la fondamentale, on avance
  d’une lettre par degré, et l’écart avec la note réelle donne l’altération
  (`imSpell`). `flatFor` seul ne suffit pas : il décide par tonalité, pas par
  note, et affichait « la♯ » dans un mixolydien de do.
- `noteOptions()` écrit les douze notes avec des dièses : la liste des
  toniques de l’impro a la sienne, pour qu’on y choisisse mi♭ et non ré♯.

- **Étape 11.** « Un écran » voulait dire : qui ne défile pas. `body.solo`
  (séance en cours **et** onglet Séance) met la page en colonne flex de
  `100dvh`, `overflow:hidden`, et chaque niveau jusqu’au tiroir porte
  `min-height:0` — sans quoi un enfant de flex refuse de rétrécir sous son
  contenu. Deux pièges rencontrés : la marge auto de `.wrap` fait rétrécir
  `main` sur son contenu dans une colonne flex (d’où `width:100%`), et
  `align-items:start`, hérité de `.g2` en grille, empêchait la carte de
  prendre la hauteur offerte.
- Le budget se compte en pixels : en 375×812 il reste environ 280 px au
  tiroir. Les pictogrammes des boutons d’outils passent dans un `<i>` retiré
  en écran unique, et les deux libellés les plus longs ont une forme courte
  (`.lg` / `.sh`) : cinq boutons sur une ligne au lieu de deux rangs, trente-
  huit pixels rendus au tiroir. Le reste vient du minuteur réduit quand un
  tiroir est ouvert (`body.tool`) et du clavier à 86 px.
- Un tiroir ouvert en cachait un autre : `closeTools()` ne fermait pas
  `#toolCours`, absent de sa liste depuis l’étape 10. Le cours et le clavier
  pouvaient donc être ouverts ensemble.
- En paysage de téléphone (`max-height:620px`), la barre d’onglets s’efface :
  375 px de haut ne tiennent pas une barre de plus. C’est assumé — reposer le
  téléphone droit ou terminer la séance la ramène.

- **Étape 10.** Un cours ne s’affiche plus à un seul endroit : `coursHTML(c,inline)`
  rend le corps, `wireCoursBody(root,c,onSee)` le câble, et la feuille superposée
  comme le tiroir de séance s’en servent. Le paramètre `inline` retire ce qui
  emmène ailleurs — « Ouvrir l’exercice », « Ouvrir <l’onglet> », « Ouvrir au
  clavier » — parce qu’un tiroir de séance qui fait quitter la séance ne sert à
  rien. `onSee` décide de l’enchaînement : la feuille enchaîne dans la feuille,
  le tiroir dans le tiroir.
- Piège rencontré : `buildKB()` réécrit le `className` de son élément. Le crochet
  du clavier dans un cours est donc un attribut (`data-ckb`) et non une classe,
  sinon il disparaît à la construction — sans rien casser, mais en rendant tout
  contrôle ultérieur aveugle.
- Le tiroir suit le bloc : `paintSessTools()` compare `helpFor(bloc)` au cours
  affiché et recharge, sauf si on est parti lire autre chose par un « à lire
  ensuite » (`sessCoursAuto`). Sans ce drapeau, le repaint deux fois par seconde
  ramènerait de force au cours du bloc.
- Le bouton disparaît quand le bloc n’a pas de cours (séance simple, bloc écrit
  à la main) : `.tbtn[hidden]{display:none}` est nécessaire, `display` étant déjà
  posé sur `.tbtn`.
- Hauteur bornée (46 vh) sur grand écran pour garder le minuteur à l’écran ;
  sur téléphone, le cours coule en entier — le minuteur est déjà dans la barre
  du haut, et deux zones de défilement imbriquées sont ingérables au pouce.

- **Étape 9.** « Tout en un » veut dire : ne plus jamais quitter l’écran de la
  séance pour un outil. La grille de l’onglet porte une classe `insess` tant
  que `sessionBusy()` : `#nowCard` passe devant et prend toute la largeur,
  `#focusCard` disparaît. Tout tient dans du CSS, aucun nœud n’est déplacé.
- Les tiroirs n’ont pas de moteur à eux, par principe — c’est ce qui a rendu le
  bandeau de métronome sûr à l’étape 8. Le clavier appelle `buildKB()` et
  `highlight()`, les réglages de mesure passent par `viaField()`, qui écrit dans
  le champ de l’onglet Métronome et rappelle son `onchange` : la remise à
  l’heure de la mesure en marche y est déjà, et un seul endroit décide.
- Un seul tiroir ouvert à la fois, et le même bouton referme : en jouant, on a
  une main et deux secondes. `paintSessTools()` est appelée par `paintMini()`,
  donc deux fois par seconde pendant la séance ; elle ne repeint que le tiroir
  ouvert, et l’accusé « Noté » passe par un horodatage (`noteFlash`) plutôt que
  par un `setTimeout` qu’un repaint écraserait.
- La note va dans `#logNotes`, préfixée du nom du bloc (sauf en séance simple,
  qui n’en a pas). Elle survit à une séance trop courte pour ouvrir le bilan :
  le champ garde son texte jusqu’à la prochaine séance enregistrée.
- `focusKeySig()` remonte du ton du morceau à l’entrée de `KEYS` pour nommer
  l’armure — en mineur, en passant par la relative majeure (`+3` demi-tons).
  La cadence devient `i – iv – V – i` en mineur, le V restant majeur.

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
- La feuille superposée pourrait disparaître aussi de la bibliothèque, au profit
  d’un cours qui s’ouvre dans la page : le corps est désormais rendu n’importe où.
- Un favori ou un historique des cours lus, maintenant que les cours s’ouvrent
  depuis la séance : ce qu’on relit souvent mériterait d’être à portée.
- Un favori ou un historique des cours lus — la bibliothèque commence à être grande.
- Des cours liés aux morceaux eux-mêmes : une fiche par compositeur ou par époque,
  puisque « varier ce que tu joues » le demande sans rien proposer.
- Le cercle des quintes de l’onglet Théorie n’a pas encore de lien vers les cours.
