#!/usr/bin/env node
/*
 * build.js — fabrique index.html à partir de studio88.html.
 *
 * studio88.html contient la page elle-même (titre, styles, markup, script) sans
 * squelette de document : c'est la forme attendue par l'outil Artifact de
 * claude.ai, qui ajoute l'enveloppe au moment de la publication.
 * Pour GitHub Pages il faut un document complet : ce script ajoute le doctype,
 * l'en-tête, les métadonnées d'installation (manifeste, icônes, plein écran iOS)
 * et l'enregistrement du service worker.
 *
 *   node build.js
 */
'use strict';
var fs = require('fs');
var path = require('path');

var root = __dirname;
var body = fs.readFileSync(path.join(root, 'studio88.html'), 'utf8');

var head = '<!doctype html>\n' +
'<html lang="fr">\n' +
'<head>\n' +
'<meta charset="utf-8">\n' +
'<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">\n' +
'<meta name="description" content="Atelier de piano : séance minutée, métronome, parcours de leçons, exercices de lecture et d\'oreille, suivi de répertoire avec rappels de révision.">\n' +
'<meta name="theme-color" content="#EDEBE6" media="(prefers-color-scheme: light)">\n' +
'<meta name="theme-color" content="#141316" media="(prefers-color-scheme: dark)">\n' +
'<meta name="apple-mobile-web-app-capable" content="yes">\n' +
'<meta name="mobile-web-app-capable" content="yes">\n' +
'<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">\n' +
'<meta name="apple-mobile-web-app-title" content="Studio 88">\n' +
'<link rel="manifest" href="manifest.webmanifest">\n' +
'<link rel="apple-touch-icon" href="icon-180.png">\n' +
'<link rel="icon" type="image/png" href="icon-512.png">\n' +
'<style>\n' +
':root{color-scheme:light;padding-top:env(safe-area-inset-top,0px);padding-bottom:env(safe-area-inset-bottom,0px)}\n' +
'body{margin:0;font:14px system-ui,-apple-system,"Segoe UI",Roboto,sans-serif}\n' +
'img{max-width:100%}\n' +
'[hidden]{display:none!important}\n' +
'</style>\n' +
'</head>\n' +
'<body>\n';

var tail = '\n<script>\n' +
'if("serviceWorker" in navigator){\n' +
'  window.addEventListener("load", function(){\n' +
'    navigator.serviceWorker.register("sw.js").catch(function(){});\n' +
'  });\n' +
'}\n' +
'</scr' + 'ipt>\n' +
'</body>\n' +
'</html>\n';

var out = head + body + tail;
fs.writeFileSync(path.join(root, 'index.html'), out);
console.log('index.html écrit — ' + out.length + ' octets');
