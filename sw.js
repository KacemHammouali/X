/* منصة X التعليمية — Service Worker — الإصدار 110.0 — الدمج الاحترافي العالمي: أزرق تيليجرام للتفاعل + لمسات إنستغرام للحلقات + صوت فوري مستقر + هوية تيليجرام × إنستغرام + تطبيق حقيقي يعمل بلا إنترنت + فتح فوري + تحديث خلفي */
var VERSION='x-v117.0';
var CORE=['./','./index.html','./css/site.css','./versions.json','./icon-512.png','./manifest.json','./pdfs.json','./videos.json',
  './js/00-keys.js',
  './js/01-diag.js',
  './js/02-katex.min.js',
  './js/03-katex-auto.min.js',
  './js/10-core-v16.js',
  './js/11-accounts.js',
  './js/12-pwa-v16.js',
  './js/13-identity-v17.js',
  './js/14-auth-email-v18.js',
  './js/15-send-v19.js',
  './js/16-blue-v20.js',
  './js/20-math-1.js',
  './js/21-math-2.js',
  './js/22-math-3.js',
  './js/23-math-4.js',
  './js/24-physics.js',
  './js/25-summary.js',
  './js/26-bac.js',
  './js/30-v22.js',
  './js/31-v23.js',
  './js/32-v24.js',
  './js/33-v25.js',
  './js/34-v29.js',
  './js/35-v30.js',
  './js/36-v31.js',
  './js/37-v31d.js',
  './js/38-v32.js',
  './js/39-v33.js',
  './js/40-v34.js',
  './js/41-v35.js',
  './js/42-v36.js',
  './js/43-v37.js',
  './js/44-v38.js',
  './js/45-v39.js',
  './js/50-quiz-bank.js',
  './js/51-ver472.js',
  './js/52-ver48-settings.js',
  './js/53-ver49.js',
  './js/54-ver50-update.js',
  './js/55-ver51-settings.js',
  './js/56-ver53.js',
  './js/57-ver54.js',
  './js/58-ver55.js',
  './js/59-ver56.js',
  './js/60-ver57.js',
  './js/61-ver58.js',
  './js/62-ver59.js',
  './js/63-ver60.js',
  './js/64-ver61.js',
  './js/65-ver62.js',
  './js/66-ver63.js',
  './js/67-ver64.js',
  './js/68-ver65.js',
  './js/69-ver66.js',
  './js/70-ver67.js',
  './js/71-ver68.js',
  './js/72-ver69.js',
  './js/73-ver70.js',
  './js/74-ver71.js',
  './js/75-ver72.js',
  './js/76-ver73.js',
  './js/77-ver74.js',
  './js/78-ver75.js',
  './js/79-ver76.js',
  './js/80-ver77.js',
  './js/81-ver78.js',
  './js/82-ver79.js',
  './js/83-ver80.js',
  './js/84-ver81.js',
  './js/85-ver82.js',
  './js/86-ver82x.js',
  './js/87-ver83.js',
  './js/88-ver85.js',
  './js/89-ver86.js',
  './js/90-ver87.js',
  './js/91-ver88.js',
  './js/92-ver89.js',
  './js/93-ver89x.js',
  './js/94-ver89y.js',
  './js/95-ver90.js',
  './js/96-ver91.js',
  './js/97-ver92.js',
  './js/98-ver93.js',
  './js/99-ver94.js',
  './js/100-ver95.js',
  './js/101-ver96.js',
  './js/102-ver97.js',
  './js/103-ver98.js',
  './js/104-ver99.js',
  './js/105-ver100.js',
  './js/106-ver101.js',
  './js/107-ver102.js',
  './js/108-ver103.js',
  './js/108b-ver105.js',
  './js/108c-ver106.js',
  './js/108d-ver107.js',
  './js/108e-ver108.js',
  './js/108f-ver109.js',
  './js/109f-ver110.js',
  './js/109g-ver111.js',
  './js/109h-ver112.js',
  './js/109i-ver113.js',
  './js/109j-ver114.js',
'./js/109k-ver116.js',
'./js/109l-ver117.js',
  './js/109-ver104-meta.js'
];
/* 98: فشل التثبيت (بلا إنترنت) لا يُفعّل العامل الجديد — يبقى العامل القديم يخدم المحتوى المحفوظ */
self.addEventListener('install',function(e){
  e.waitUntil(caches.open(VERSION).then(function(c){return c.addAll(CORE,{cache:'reload'})}).then(function(){return self.skipWaiting()}));
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
