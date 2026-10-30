/* sw.js — عامل الخدمة لمنصة X (الإصدار 23 — الإرسال المستقر)
   مهمته: عمل الموقع بلا إنترنت بعد أول زيارة + التحديث الفوري عند إصدار جديد.
   الرفع للنشر: جذر الموقع مع index.html و versions.json (الملفات الثلاثة تُرفع معًا إلى GitHub Pages).
   عند كل إصدار جديد من المنصة: عدّل قيمة VERSION أدناه فقط،
   فيلاحظ المتصفح التغيير ويعرض زر «تحديث الآن» داخل المنصة تلقائيًا. */

var VERSION = 'x-v23';
var CACHE = 'x-site-' + VERSION;
var CORE = ['./', './index.html'];

/* التثبيت: نخزّن الصفحة الأساسية ثم نفعّل العامل الجديد فورًا */
self.addEventListener('install', function (e) {
  e.waitUntil(
    caches.open(CACHE).then(function (c) {
      return c.addAll(CORE);
    }).then(function () {
      return self.skipWaiting();
    })
  );
});

/* التفعيل: حذف أي ذاكرة قديمة من إصدارات سابقة ثم السيطرة على كل الصفحات */
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

/* الاستماع لأمر «skipWaiting» من المنصة عند نقر المستخدم «تحديث الآن» */
self.addEventListener('message', function (e) {
  if (e.data === 'skipWaiting') {
    self.skipWaiting();
  }
});

/* فحص أن الطلب من نفس الموقع ونوعه GET — كل ما عدا ذلك نتجاهله:
   لا نلمس طلبات CDN (الخطوط و KaTeX)،
   فتلك تحتاج إنترنت حيًا دائمًا ولا يجب تقديمها من الذاكرة. */
function shouldHandle(req) {
  if (req.method !== 'GET') { return false; }
  var u;
  try { u = new URL(req.url); } catch (err) { return false; }
  return u.origin === self.location.origin;
}

/* التنقل (فتح الصفحة): الشبكة أولًا، وعند انقطاع الإنترنت نقدم النسخة المخزنة.
   الملفات والأصول: نقدم المخزن فورًا ونحدّثه في الخلفية (stale-while-revalidate). */
self.addEventListener('fetch', function (e) {
  var req = e.request;
  if (!shouldHandle(req)) { return; }

  if (req.mode === 'navigate') {
    e.respondWith(
      fetch(req).then(function (res) {
        var copy = res.clone();
        caches.open(CACHE).then(function (c) {
          c.put('./index.html', copy);
        });
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
