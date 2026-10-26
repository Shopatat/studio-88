#!/usr/bin/env node
/*
 * make-icons.js — écrit icon-180.png et icon-512.png sans aucune dépendance.
 *
 * Le motif : fond laqué sombre, bande de feutre carmin, cinq touches blanches
 * avec leurs trois touches noires là où elles tombent vraiment (entre do-ré,
 * ré-mi et fa-sol, jamais entre mi-fa).
 *
 *   node tools/make-icons.js
 */
'use strict';
var fs = require('fs');
var path = require('path');
var zlib = require('zlib');

/* --- CRC32 --- */
var TABLE = (function () {
  var t = new Int32Array(256), c, n, k;
  for (n = 0; n < 256; n++) {
    c = n;
    for (k = 0; k < 8; k++) c = (c & 1) ? (0xEDB88320 ^ (c >>> 1)) : (c >>> 1);
    t[n] = c;
  }
  return t;
})();
function crc32(buf) {
  var c = -1;
  for (var i = 0; i < buf.length; i++) c = TABLE[(c ^ buf[i]) & 0xFF] ^ (c >>> 8);
  return (c ^ -1) >>> 0;
}
function chunk(type, data) {
  var len = Buffer.alloc(4);
  len.writeUInt32BE(data.length, 0);
  var head = Buffer.from(type, 'ascii');
  var crc = Buffer.alloc(4);
  crc.writeUInt32BE(crc32(Buffer.concat([head, data])), 0);
  return Buffer.concat([len, head, data, crc]);
}
function encodePNG(size, pixel) {
  var stride = size * 4 + 1;
  var raw = Buffer.alloc(stride * size);
  for (var y = 0; y < size; y++) {
    raw[y * stride] = 0; /* filtre: aucun */
    for (var x = 0; x < size; x++) {
      var c = pixel(x, y, size);
      var o = y * stride + 1 + x * 4;
      raw[o] = c[0]; raw[o + 1] = c[1]; raw[o + 2] = c[2]; raw[o + 3] = c.length > 3 ? c[3] : 255;
    }
  }
  var ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(size, 0);
  ihdr.writeUInt32BE(size, 4);
  ihdr[8] = 8;   /* 8 bits par canal */
  ihdr[9] = 6;   /* RGBA */
  return Buffer.concat([
    Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]),
    chunk('IHDR', ihdr),
    chunk('IDAT', zlib.deflateSync(raw, { level: 9 })),
    chunk('IEND', Buffer.alloc(0))
  ]);
}

/* --- le motif --- */
var BG = [0x18, 0x17, 0x1C];
var FELT = [0x8E, 0x24, 0x37];
var WHITE = [0xFB, 0xF9, 0xF4];
var EDGE = [0xB2, 0xAC, 0xA1];
var BLACK = [0x15, 0x14, 0x1B];
var BRASS = [0xC7, 0x9A, 0x4A];

function pixel(x, y, S) {
  var m = S * 0.17;                  /* marge, confortable pour une icône masquée */
  var left = m, right = S - m;
  if (x < left || x > right) return BG;

  var brassTop = S * 0.26, brassBot = S * 0.295;
  if (y >= brassTop && y <= brassBot) return BRASS;

  var feltTop = S * 0.325, feltBot = S * 0.365;
  if (y >= feltTop && y <= feltBot) return FELT;

  var kbTop = S * 0.40, kbBot = S * 0.80;
  if (y < kbTop || y > kbBot) return BG;

  var w = (right - left) / 5;
  var gap = Math.max(1, S * 0.009);
  var bw = w * 0.62;
  var bh = (kbBot - kbTop) * 0.60;

  if (y < kbTop + bh) {
    var blacks = [1, 2, 4];          /* frontières do-ré, ré-mi, fa-sol */
    for (var i = 0; i < blacks.length; i++) {
      if (Math.abs(x - (left + blacks[i] * w)) < bw / 2) return BLACK;
    }
  }
  if ((x - left) % w < gap) return EDGE;
  return WHITE;
}

var out = path.join(__dirname, '..');
[180, 512].forEach(function (size) {
  var file = path.join(out, 'icon-' + size + '.png');
  fs.writeFileSync(file, encodePNG(size, pixel));
  console.log('écrit ' + path.basename(file));
});
