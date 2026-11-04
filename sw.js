/* sw.js - منصة X التعليمية (الإصدار 67)
   عمل كامل بلا إنترنت بعد أول فتح + تحكم كامل بالتحديث:
   - الموقع في المتصفح: يتحدث نفسه تلقائيًا (الشبكة أولًا).
   - التطبيق المثبت: لا يحدث نفسه أبدًا - يخدم النسخة المخزنة حتى يضغط المستخدم تحديث الآن.
   - الفيديو وملفات PDF وطلبات قاعدة البيانات لا تُخزن (تحتاج إنترنت). */
var VERSION = 'x-v67.0';
var CACHE = 'x-site-' + VERSION;
var CORE = ['./', './index.html', './manifest.json', './icon.svg', './logo.jpg', './icon-512.png', './versions.json'];
var MODES = {};

self.addEventListener('install', function (e) {
  e.waitUntil(
    caches.open(CACHE).then(function (c) {
      return Promise.all(CORE.map(function (u) {
        return c.add(u).catch(function () {});
      }));
    }).then(function () {
      return self.skipWaiting();
    })
  );
});

self.addEventListener('activate', function (e) {
  e.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(keys.map(function (k) {
        if (k !== CACHE) { return caches.delete(k); }
      }));
    }).then(function () {
      return self.clients.claim();
    })
  );
});

self.addEventListener('message', function (e) {
  try {
    if (e.data && typeof e.data === 'object' && e.data.t === 'mode') {
      MODES[e.source.id] = e.data.m;
      return;
    }
  } catch (err) {}
  if (e.data === 'skipWaiting') {
    self.skipWaiting();
  }
});

function shouldHandle(req) {
  if (req.method !== 'GET') { return false; }
  var u;
  try { u = new URL(req.url); } catch (err) { return false; }
  return u.origin === self.location.origin;
}

self.addEventListener('fetch', function (e) {
  var req = e.request;
  if (!shouldHandle(req)) { return; }

  if (req.mode === 'navigate') {
    var m = 'site';
    try { m = MODES[e.clientId] || 'site'; } catch (err) {}
    if (m === 'app') {
      /* التطبيق المثبت: النسخة المخزنة أولًا حتى يضغط المستخدم تحديث الآن */
      e.respondWith(
        caches.match('./index.html').then(function (hit) {
          if (hit) { return hit; }
          return fetch(req.url, { cache: 'no-store', credentials: 'same-origin' }).then(function (res) {
            var copy = res.clone();
            caches.open(CACHE).then(function (c) { c.put('./index.html', copy); });
            return res;
          });
        }).catch(function () { return caches.match('./'); })
      );
      return;
    }
    /* الموقع: الشبكة أولًا (تحديث تلقائي) مع الاحتياط المخزن عند انقطاع الإنترنت */
    e.respondWith(
      fetch(req.url, { cache: 'no-store', credentials: 'same-origin' }).then(function (res) {
        var copy = res.clone();
        caches.open(CACHE).then(function (c) { c.put('./index.html', copy); });
        return res;
      }).catch(function () {
        return caches.match('./index.html').then(function (r) {
          if (r) { return r; }
          return caches.match('./');
        });
      })
    );
    return;
  }

  if (req.url.indexOf('versions.json') >= 0) {
    e.respondWith(
      fetch(req.url, { cache: 'no-store' }).then(function (res) {
        if (res && res.ok) {
          var copy = res.clone();
          caches.open(CACHE).then(function (c) { c.put(req, copy); });
        }
        return res;
      }).catch(function () {
        return caches.match(req).then(function (r) {
          if (r) { return r; }
          return new Response('{"ver":"0"}', { headers: { 'Content-Type': 'application/json' } });
        });
      })
    );
    return;
  }

  e.respondWith(
    caches.match(req).then(function (hit) {
      var net = fetch(req).then(function (res) {
        if (res && res.ok) {
          var copy = res.clone();
          caches.open(CACHE).then(function (c) {
            c.put(req, copy);
          });
        }
        return res;
      }).catch(function () {
        return hit;
      });
      return hit || net;
    })
  );
});
