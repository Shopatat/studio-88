#!/usr/bin/env node
/*
 * check-cours.js — relit studio88.html et vérifie la bibliothèque de cours.
 *
 * Rien ici ne dépend d'un navigateur : on extrait les tableaux de données du
 * script de la page, on les évalue, et on contrôle ce qu'un coup d'œil ne voit
 * plus à soixante-seize cours — un « à lire ensuite » qui pointe dans le vide,
 * un cours qu'aucun lien n'atteint, une leçon du parcours sans cours, un onglet
 * ou un exercice cité sous un nom qui n'existe pas.
 *
 * Les familles calculées sont connues du script : le bouton d'un morceau vaut
 * coursBtn('etat-'+st.id) et celui d'un exercice coursBtn('exo-'+kind), donc
 * ces cours-là sont atteignables sans que leur identifiant figure nulle part.
 *
 *   node tools/check-cours.js      (sortie non nulle s'il y a un problème)
 */
'use strict';
var fs=require('fs');
var path=require('path');
var file=path.join(__dirname,'..','studio88.html');
var s=fs.readFileSync(file,'utf8');
var bad=0;
function ko(m){console.log('✗ '+m);bad++;}

/* La syntaxe de tout le script de la page, sans l'exécuter. */
var sc=s.match(/<script>([\s\S]*)<\/script>/);
if(!sc)ko('pas de bloc <script>');
else{try{new Function(sc[1]);console.log('✓ script : syntaxe valide');}
     catch(e){ko('syntaxe : '+e.message);}}

/* Un tableau de données du script, de « var NOM=[ » jusqu'au « \n]; » suivant. */
function arr(name,end){
  var i=s.indexOf('var '+name+'=[');
  if(i<0){ko('tableau introuvable : '+name);return [];}
  var j=s.indexOf(end,i);
  return eval('('+s.slice(i+('var '+name+'=').length,j+2)+')');
}
var TH=arr('COURS_TH','\n];');
var COURS=arr('COURS','\n];\n/*');
var LESSONS=arr('LESSONS','\n];');
var HINTS=(s.match(/var COURS_HINTS=\[([\s\S]*?)\n\];/)||['',''])[1];

console.log('→ '+COURS.length+' cours, '+TH.length+' thèmes, '+LESSONS.length+' leçons');

var TABS=['aujourdhui','seance','apprentissage','exercices','metronome','clavier',
          'theorie','repertoire','journal'];
var KINDS=['read','keys','interval','chord','echo','keysig'];
var ETATS=['decouverte','travail','presque','memorise','entretien'];

/* Identifiants uniques, thèmes connus, champs obligatoires. */
var ids={},thIds=TH.map(function(t){return t[0];});
COURS.forEach(function(c){
  if(ids[c.id])ko('identifiant en double : '+c.id);
  ids[c.id]=c;
  if(thIds.indexOf(c.th)<0)ko(c.id+' : thème inconnu « '+c.th+' »');
  if(!c.t||!c.b||!c.b.length)ko(c.id+' : titre ou corps manquant');
});
TH.forEach(function(t){
  if(!COURS.filter(function(c){return c.th===t[0];}).length)ko('thème sans cours : '+t[0]);
});

/* « À lire ensuite », onglets et exercices cités. */
COURS.forEach(function(c){
  (c.see||[]).forEach(function(x){if(!ids[x])ko(c.id+' → see « '+x+' » n’existe pas');});
  if(c.go&&TABS.indexOf(c.go)<0)ko(c.id+' : onglet inconnu « '+c.go+' »');
  if(c.ex&&KINDS.indexOf(c.ex.k)<0)ko(c.id+' : exercice inconnu « '+c.ex.k+' »');
});

/* Les leçons du parcours renvoient toutes à un cours qui existe. */
LESSONS.forEach(function(l){
  if(!l.c)ko('leçon '+l.id+' sans cours');
  else if(!ids[l.c])ko('leçon '+l.id+' → cours « '+l.c+' » n’existe pas');
});

/* Aucun cours orphelin : atteignable autrement que par la bibliothèque. */
var reach={};
COURS.forEach(function(c){(c.see||[]).forEach(function(x){reach[x]=1;});});
LESSONS.forEach(function(l){if(l.c)reach[l.c]=1;});
HINTS.replace(/'([a-z0-9-]+)'\]/g,function(m,id){reach[id]=1;return m;});
s.replace(/coursBtn\('([a-z0-9-]+)'/g,function(m,id){reach[id]=1;return m;});
s.replace(/h:'([a-z0-9-]+)'/g,function(m,id){reach[id]=1;return m;});
ETATS.forEach(function(x){reach['etat-'+x]=1;});
KINDS.forEach(function(k){reach['exo-'+k]=1;});
COURS.forEach(function(c){if(!reach[c.id])ko('cours orphelin : '+c.id+' ('+c.t+')');});

/* Les familles calculées ont bien leur cours, sinon le bouton disparaît. */
ETATS.forEach(function(x){if(!ids['etat-'+x])ko('état sans cours : etat-'+x);});
KINDS.forEach(function(k){if(!ids['exo-'+k])ko('exercice sans cours : exo-'+k);});

/* La recherche de la bibliothèque compare sans accents. */
function un(x){return x.normalize('NFD').replace(/[̀-ͯ]/g,'');}
['pedale','intervalle','reussite','armure'].forEach(function(q){
  var n=COURS.filter(function(c){
    return un((c.t+' '+(c.s||'')+' '+c.b.join(' ')+' '+(c.k||'')).toLowerCase()).indexOf(q)>=0;
  }).length;
  if(!n)ko('la recherche « '+q+' » ne trouve rien');
});

console.log(bad?('\n'+bad+' problème(s)'):'\nTout est bon.');
process.exit(bad?1:0);
