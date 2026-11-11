/* منصة X التعليمية — Service Worker — الإصدار 99.0 — تطبيق حقيقي يعمل بلا إنترنت + فتح فوري + تحديث خلفي */
var VERSION='x-v99.0';
var CORE=['./','./index.html','./versions.json','./icon-512.png','./manifest.json','./pdfs.json','./videos.json'];
/* 98: فشل التثبيت (بلا إنترنت) لا يُفعّل العامل الجديد — يبقى العامل القديم يخدم المحتوى المحفوظ */
self.addEventListener('install',function(e){
  e.waitUntil(caches.open(VERSION).then(function(c){return c.addAll(CORE)}).then(function(){return self.skipWaiting()}));
});
/* 98: لا يُحذف كاش الإصدار القديم إلا إذا اكتمل كاش الجديدة فعلاً — فلا ينكسر العمل بلا إنترنت أبدًا */
self.addEventListener('activate',function(e){
  e.waitUntil(caches.open(VERSION).then(function(c){
    return c.match('./index.html').then(function(hit){
      return caches.keys().then(function(ks){
        return Promise.all(ks.map(function(k){if(k!==VERSION&&hit){return caches.delete(k)}}));
      });
    });
  }).then(function(){return self.clients.claim()}));
});
self.addEventListener('message',function(e){
  if(e.data==='skipWaiting'||(e.data&&e.data.action==='skipWaiting')){self.skipWaiting()}
});
/* 98: صفحة عدم اتصال أنيقة بالهوية بدل خطأ المتصفح */
function x98Offline(){
  var h='<!DOCTYPE html><html lang="ar" dir="rtl"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>منصة X — بلا اتصال</title><style>body{margin:0;min-height:100vh;display:flex;flex-direction:column;align-items:center;justify-content:center;background:#0e1621;color:#fff;font-family:system-ui,-apple-system,"Segoe UI",Tahoma,sans-serif;text-align:center;padding:24px;box-sizing:border-box}.lg{width:76px;height:76px;border-radius:20px;background:linear-gradient(45deg,#833AB4,#E1306C 45%,#F77737);display:flex;align-items:center;justify-content:center;font-size:36px;font-weight:900;margin-bottom:20px;box-shadow:0 16px 40px rgba(225,48,108,.30)}h2{margin:0 0 10px;font-size:19px}p{margin:0 0 24px;opacity:.75;font-size:14px;line-height:1.9;max-width:430px}button{border:0;border-radius:14px;padding:13px 32px;font-size:15px;font-weight:800;font-family:inherit;background:linear-gradient(90deg,#35BDF2,#8B6CFF);color:#fff;cursor:pointer}</style></head><body><div class="lg">X</div><h2>📴 لا يوجد اتصال بالإنترنت</h2><p>التطبيق يعمل بدون إنترنت بعد أول فتح له مع اتصال — افتح التطبيق مرة واحدة بوجود الإنترنت لتحميل محتواه الكامل ثم استخدمه في أي وقت بلا شبكة، وأعد المحاولة الآن أو تحقق من اتصالك.</p><button onclick="location.replace(location.href)">🔄 إعادة المحاولة</button></body></html>';
  return new Response(h,{status:200,headers:{'Content-Type':'text/html; charset=utf-8','Cache-Control':'no-store'}});
}
self.addEventListener('fetch',function(e){
  var req=e.request;
  if(req.method!=='GET'){return}
  var url=new URL(req.url);
  if(url.pathname.indexOf('versions.json')>=0){
    /* 98: نسخة حية عند الاتصال (وتُحفظ للعمل بلا إنترنت) وسقوط للذاكرة عند انقطاعه */
    e.respondWith(fetch(req.url,{cache:'no-store',credentials:'same-origin'}).then(function(r){
      if(r&&r.ok){var cl=r.clone();caches.open(VERSION).then(function(c){c.put('./versions.json',cl)})}
      return r;
    }).catch(function(){return caches.match('./versions.json')}));
    return;
  }
  if(req.mode==='navigate'){
    /* 98: فتح فوري من الذاكرة + تحديث خلفي صامت — وسلسلة إنقاذ ثلاثية عند غياب الكاش ثم صفحة عدم اتصال أنيقة */
    e.respondWith(caches.match('./index.html').then(function(cached){
      try{
        fetch(req.url,{cache:'no-store',credentials:'same-origin'}).then(function(r){
          if(r&&r.ok){var cl=r.clone();caches.open(VERSION).then(function(c){c.put('./index.html',cl)})}
        }).catch(function(){});
      }catch(eBG1){}
      if(cached){return cached}
      return caches.match('./').then(function(root){
        if(root){return root}
        return fetch(req.url,{cache:'no-store',credentials:'same-origin'}).then(function(r){
          if(r&&r.ok){var cl=r.clone();caches.open(VERSION).then(function(c){c.put('./index.html',cl)})}
          return r;
        }).catch(function(){return x98Offline()});
      });
    }));
    return;
  }
  /* 98: الأصول من الذاكرة أولًا ثم الشبكة (وتُحفظ) — ولا خطأ قاسٍ عند انقطاع الاتصال */
  e.respondWith(caches.match(req).then(function(r){
    return r||fetch(req).then(function(nr){
      if(nr&&nr.ok&&url.origin===location.origin){var cl=nr.clone();caches.open(VERSION).then(function(c){c.put(req,cl)})}
      return nr;
    }).catch(function(){return new Response('',{status:504,statusText:'offline'})});
  }));
});
