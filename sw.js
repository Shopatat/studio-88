/*
 * Service worker : rend Studio 88 utilisable sans réseau.
 *
 * Navigation  -> réseau d'abord, cache en secours (tu reçois la dernière version
 *                dès que tu as du réseau, et la page s'ouvre quand tu n'en as pas).
 * Le reste    -> cache d'abord, y compris les polices Google, mises en cache au
 *                premier passage.
 *
 * Après une modification de la page, incrémente CACHE pour forcer le
 * renouvellement chez tous les appareils.
 */
'use strict';
var CACHE = 'studio88-v12';
var SHELL = ['./', './index.html', './manifest.webmanifest', './icon-180.png', './icon-512.png'];

self.addEventListener('install', function (e) {
  e.waitUntil(
    caches.open(CACHE).then(function (c) {
      return Promise.all(SHELL.map(function (u) {
        return c.add(new Request(u, { cache: 'reload' })).catch(function () {});
      }));
    }).then(function () { return self.skipWaiting(); })
  );
});

self.addEventListener('activate', function (e) {
  e.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(keys.map(function (k) {
        return k === CACHE ? null : caches.delete(k);
      }));
    }).then(function () { return self.clients.claim(); })
  );
});

function isFontHost(url) {
  return url.hostname === 'fonts.googleapis.com' || url.hostname === 'fonts.gstatic.com';
}

self.addEventListener('fetch', function (e) {
  var req = e.request;
  if (req.method !== 'GET') return;
  var url;
  try { url = new URL(req.url); } catch (err) { return; }

  if (req.mode === 'navigate') {
    e.respondWith(
      /* no-cache : GitHub Pages autorise 10 min de cache HTTP ; on revalide toujours
         pour que l'iPad reçoive la nouvelle version dès la première ouverture. */
      fetch(req.url, { cache: 'no-cache', credentials: 'same-origin' }).then(function (res) {
        var copy = res.clone();
        caches.open(CACHE).then(function (c) { c.put('./index.html', copy); });
        return res;
      }).catch(function () {
        return caches.match('./index.html').then(function (hit) {
          return hit || new Response('Hors ligne et rien en cache.', { status: 503 });
        });
      })
    );
    return;
  }

  if (url.origin !== location.origin && !isFontHost(url)) return;

  e.respondWith(
    caches.match(req).then(function (hit) {
      if (hit) return hit;
      return fetch(req).then(function (res) {
        if (res && (res.ok || res.type === 'opaque')) {
          var copy = res.clone();
          caches.open(CACHE).then(function (c) { c.put(req, copy); });
        }
        return res;
      });
    })
  );
});
