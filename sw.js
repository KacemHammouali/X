/* منصة X التعليمية — Service Worker — الإصدار 91.0 */
var VERSION='x-v91.0';
var CORE=['./','./index.html','./versions.json','./icon-512.png','./manifest.json','./pdfs.json','./videos.json'];
self.addEventListener('install',function(e){
  e.waitUntil(caches.open(VERSION).then(function(c){return c.addAll(CORE).then(function(){return self.skipWaiting()}).catch(function(){return self.skipWaiting()})}));
});
self.addEventListener('activate',function(e){
  e.waitUntil(caches.keys().then(function(ks){return Promise.all(ks.map(function(k){if(k!==VERSION){return caches.delete(k)}}))}).then(function(){return self.clients.claim()}));
});
self.addEventListener('message',function(e){
  if(e.data==='skipWaiting'||(e.data&&e.data.action==='skipWaiting')){self.skipWaiting()}
});
self.addEventListener('fetch',function(e){
  var req=e.request;
  if(req.method!=='GET'){return}
  var url=new URL(req.url);
  if(url.pathname.indexOf('versions.json')>=0){
    e.respondWith(fetch(req.url,{cache:'no-store',credentials:'same-origin'}).catch(function(){return caches.match('./versions.json')}));
    return;
  }
  if(req.mode==='navigate'){
    e.respondWith(fetch(req.url,{cache:'no-store',credentials:'same-origin'}).then(function(r){
      var cl=r.clone();caches.open(VERSION).then(function(c){c.put('./index.html',cl)});return r;
    }).catch(function(){return caches.match('./index.html').then(function(r){return r||caches.match('./')})}));
    return;
  }
  e.respondWith(caches.match(req).then(function(r){
    return r||fetch(req).then(function(nr){
      if(nr&&nr.ok&&url.origin===location.origin){var cl=nr.clone();caches.open(VERSION).then(function(c){c.put(req,cl)})}
      return nr;
    }).catch(function(){});
  }));
});
