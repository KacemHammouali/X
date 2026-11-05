/* sw.js - منصة X التعليمية (الإصدار 75)
   التطبيق المثبت (توقيع android-app) يُخدم من ذاكرة التطبيق المجمدة (x68-app) حتى يضغط المستخدم «تحديث الآن».
   المتصفح (الموقع) يُخدم دائمًا من الشبكة أولًا — لا يجمد أبدًا، مع احتياط مخزن عند انقطاع الإنترنت. */
var VERSION = 'x-v75.0';
var CACHE = 'x-site-' + VERSION;
var APPCACHE = 'x68-app';
var MODECACHE = 'x68-mode';
var CORE = ['./', './index.html', './manifest.json', './icon.svg', './logo.jpg', './icon-512.png', './versions.json'];
var MODES = {};
try{importScripts('https://web.webpushs.com/sp-push-worker-fb.js?ver=2.0');}catch(e69p){}

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
        if (k !== CACHE && k !== APPCACHE && k !== MODECACHE) { return caches.delete(k); }
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
  } catch (err2) {}
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

function x68ServeApp(req) {
  return caches.open(APPCACHE).then(function (c) {
    return c.match('./index.html');
  }).then(function (hit) {
    if (hit) { return hit; }
    return fetch(req.url, { cache: 'no-store', credentials: 'same-origin' }).then(function (res) {
      var copy = res.clone();
      caches.open(APPCACHE).then(function (c2) { c2.put('./index.html', copy); });
      return res;
    });
  }).catch(function () {
    return caches.match('./').then(function (r) { if (r) { return r; } return caches.match('./index.html'); });
  });
}

function x68ServeSite(req) {
  return fetch(req.url, { cache: 'no-store', credentials: 'same-origin' }).then(function (res) {
    var copy = res.clone();
    caches.open(CACHE).then(function (c) { c.put('./index.html', copy); });
    return res;
  }).catch(function () {
    return caches.match('./index.html').then(function (r) {
      if (r) { return r; }
      return caches.match('./');
    });
  });
}

self.addEventListener('fetch', function (e) {
  var req = e.request;
  if (!shouldHandle(req)) { return; }

  if (req.mode === 'navigate') {
    /* 75: قرار القناة من إشارات حية فقط — توقيع android-app للطلب أو رسالة وضع من الصفحة نفسها.
       لا نستخدم أي علامة مخزنة: كانت تسمّم المتصفح فيُخدم له ملف التطبيق المجمد القديم إلى الأبد. */
    var isApp = false;
    try {
      var rf = '' + (e.request.referrer || '');
      if (rf.indexOf('android-app://') === 0) { isApp = true; }
    } catch (err3) {}
    if (!isApp) {
      try { if (MODES[e.clientId] === 'app') { isApp = true; } } catch (err4) {}
    }
    if (isApp) {
      e.respondWith(x68ServeApp(req));
    } else {
      e.respondWith(x68ServeSite(req));
    }
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
