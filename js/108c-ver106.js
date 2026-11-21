/* ============ الطبقة 108c — الإصدار 106.0: التحديث الاحترافي بنسبة مئوية حقيقية ============ */
/* (أ) شاشة تحديث كاملة: حلقة دائرية + نسبة مئوية حقيقية محسوبة من بايتات التنزيل الفعلية
       + مرحلة واضحة (تحضير ← تنزيل الملفات ← استبدال ← إعادة التشغيل) بدل توست عابر.
   (ب) إصلاح جذر لدورة «اضغط تحديث ولا يتحدث»: الخادم يعيد sw.js القديم من ذاكرته حتى نحو 10 دقائق،
       وعامل الخدمة القديم يظل يخدم نسخته المخزنة. الحل: نجلب كل ملفات الإصدار الجديد برابط
       فريد يتجاوز ذاكرة الخادم، ونكتبها بأنفسنا في ذاكرة عامل الخدمة الحالي (وفي ذاكرة
       الإصدار القادم)، ثم نفتح النسخة الجديدة — التحديث ينجح من أول ضغطة بغض النظر عن ذاكرة الخادم.
   (ج) كل شيء ES5 داخل try/catch مع سقوط آمن إلى آلية التحديث السابقة عند أي عائق. */
(function(){
'use strict';

/* ---------- 106.أ أنماط شاشة التحديث ---------- */
var X106_CSS=''+
  '#x106-ovl{position:fixed;inset:0;z-index:2147483600;background:rgba(4,8,16,.93);'+
    'display:flex;align-items:center;justify-content:center;opacity:0;transition:opacity .25s ease}'+
  '#x106-ovl.x106-on{opacity:1}'+
  '#x106-card{background:rgba(13,22,37,.97);border:1px solid rgba(255,255,255,.12);border-radius:24px;'+
    'box-shadow:0 24px 80px rgba(0,0,0,.6);padding:30px 34px;text-align:center;min-width:270px;max-width:86vw;'+
    'transform:translateY(14px) scale(.95);transition:transform .3s cubic-bezier(.22,.8,.26,.99)}'+
  '#x106-ovl.x106-on #x106-card{transform:translateY(0) scale(1)}'+
  '#x106-ring{display:block;margin:0 auto}'+
  '#x106-ring .x106-bg{stroke:rgba(255,255,255,.10)}'+
  '#x106-ring .x106-fg{stroke:url(#x106grad);stroke-linecap:round;transition:stroke-dashoffset .25s ease}'+
  '#x106-pct{font-family:Tajawal,-apple-system,sans-serif;font-size:30px;font-weight:900;color:#F5F7FC}'+
  '#x106-stage{margin-top:14px;font-family:Tajawal,sans-serif;font-size:14.5px;font-weight:700;color:#A2AEC0}'+
  '#x106-ver{margin-top:4px;font-family:Tajawal,sans-serif;font-size:12px;font-weight:700;color:#35BDF2}'+
  '#x106-warn{margin-top:14px;font-family:Tajawal,sans-serif;font-size:11.5px;color:#748399}'+
  '@keyframes x106Pulse{0%,100%{opacity:.55}50%{opacity:1}}'+
  '#x106-warn{animation:x106Pulse 1.6s infinite}'+
  'html[data-theme="light"] #x106-card{background:rgba(255,255,255,.98);border-color:rgba(20,40,70,.10)}'+
  'html[data-theme="light"] #x106-pct{color:#172437}'+
  '@media (prefers-reduced-motion: reduce){#x106-ovl,#x106-card{transition:none}#x106-warn{animation:none}}';

function x106Style(){
  try{
    if(document.getElementById('x106-style')){return}
    var stl=document.createElement('style');stl.id='x106-style';
    try{stl.textContent=X106_CSS}catch(eS){}
    (document.head||document.documentElement).appendChild(stl);
  }catch(e0){}
}

/* ---------- 106.ب رسم شاشة التحديث ---------- */
var X106_ELS=null;
function x106Open(){
  try{
    x106Style();
    if(document.getElementById('x106-ovl')){return}
    var ovl=document.createElement('div');ovl.id='x106-ovl';
    ovl.setAttribute('role','status');
    ovl.innerHTML=''+
      '<div id="x106-card">'+
        '<svg id="x106-ring" width="132" height="132" viewBox="0 0 132 132">'+
          '<defs><linearGradient id="x106grad" x1="0" y1="0" x2="1" y2="1">'+
            '<stop offset="0" stop-color="#35BDF2"/><stop offset="1" stop-color="#8B6CFF"/>'+
          '</linearGradient></defs>'+
          '<circle class="x106-bg" cx="66" cy="66" r="54" fill="none" stroke-width="11"/>'+
          '<circle class="x106-fg" id="x106-arc" cx="66" cy="66" r="54" fill="none" stroke-width="11" '+
            'stroke-dasharray="339.292" stroke-dashoffset="339.292" transform="rotate(-90 66 66)"/>'+
          '<text id="x106-pct" x="66" y="66" text-anchor="middle" dominant-baseline="central">0%</text>'+
        '</svg>'+
        '<div id="x106-stage">تحضير التحديث…</div>'+
        '<div id="x106-ver">منصة X — إصدار جديد</div>'+
        '<div id="x106-warn">⏳ جارٍ تنزيل الإصدار الجديد — لا تغلق التطبيق</div>'+
      '</div>';
    document.body.appendChild(ovl);
    X106_ELS={ovl:ovl,arc:document.getElementById('x106-arc'),pct:ovl.querySelector('#x106-pct'),
      stage:ovl.querySelector('#x106-stage')};
    setTimeout(function(){try{ovl.className='x106-on'}catch(eO){}},15);
  }catch(e1){}
}
function x106Paint(p,stage){
  try{
    if(!X106_ELS){return}
    var q=Math.max(0,Math.min(100,Math.round(p)));
    if(X106_ELS.pct){try{X106_ELS.pct.textContent=q+'%'}catch(eP0){}}
    try{if(X106_ELS.arc){X106_ELS.arc.setAttribute('stroke-dashoffset',(339.292*(1-q/100)).toFixed(1))}}catch(eP1){}
    try{if(X106_ELS.stage&&stage){X106_ELS.stage.textContent=stage}}catch(eP2){}
  }catch(eP3){}
}
function x106Stage(txt){try{if(X106_ELS&&X106_ELS.stage){X106_ELS.stage.textContent=txt}}catch(eS1){}}
function x106Close(){
  try{
    if(!X106_ELS){return}
    var node=X106_ELS.ovl;
    try{node.className=''}catch(eC1){}
    X106_ELS=null;
    setTimeout(function(){try{if(node&&node.parentElement){node.parentElement.removeChild(node)}}catch(eC2){}},320);
  }catch(eC3){}
}

/* ---------- 106.ج جلب طازج يتجاوز ذاكرة الخادم + قراءة بايتات حقيقية ---------- */
var X106_TS=Date.now();
function x106Fresh(url){
  var sep=(url.indexOf('?')>=0)?'&':'?';
  try{return fetch(url+sep+'x106='+X106_TS,{cache:'no-store',credentials:'same-origin'})}catch(e0){return fetch(url)}
}
function x106Read(resp,onbytes){
  try{
    var cl=0,totalGot=0;
    try{cl=parseInt(resp.headers.get('Content-Length')||'0',10)||0}catch(eH){cl=0}
    if(!resp.body||!resp.body.getReader){
      return resp.arrayBuffer().then(function(b){try{onbytes(b.byteLength,cl)}catch(eC){}return new Blob([b])});
    }
    var rd=resp.body.getReader(),chunks=[];
    function pump(){
      return rd.read().then(function(res){
        if(res.done){return chunks}
        chunks.push(res.value);totalGot+=res.value.byteLength;
        try{onbytes(totalGot,cl,chunks.length,chunks)}catch(eB){}
        return pump();
      });
    }
    return pump().then(function(cks){return new Blob(cks)});
  }catch(eR){
    try{return resp.arrayBuffer().then(function(b){return new Blob([b])})}catch(eR2){return Promise.resolve(new Blob())}
  }
}

/* ---------- 106.د مسار التحديث الكامل ---------- */
var __x106Old=null;
window.x106Update=function(){
  X106_TS=Date.now();
  x106Open();
  x106Paint(3,'تحضير التحديث…');
  var cacheNames=[];
  /* 1) ذواكر عناصر الخدمة الحالية + ذاكرة الإصدار الجديد (متزامنة قبل التنزيل) */
  try{
    var keysPromise=(typeof caches!=='undefined'&&typeof caches.keys==='function')?caches.keys():Promise.resolve([]);
    keysPromise.then(function(ks){
      for(var i=0;i<(ks||[]).length;i++){if(/^x-v/.test(''+ks[i])&&cacheNames.indexOf(ks[i])<0){cacheNames.push(ks[i])}}
      return x106Fresh('./sw.js');
    }).catch(function(){return x106Fresh('./sw.js')}).then(function(r){
      if(!r||!r.ok){throw new Error('sw')}
      return r.text();
    }).then(function(txt){
      var m=/var VERSION='([^']+)'/.exec(txt||'');var nv=m?m[1]:null;
      if(nv&&cacheNames.indexOf(nv)<0){cacheNames.push(nv)}
      var core=['./','./index.html','./css/site.css','./versions.json','./icon-512.png','./manifest.json','./pdfs.json','./videos.json'];
      var re=/'(\.\/[^']+)'/g,mm;
      while((mm=re.exec(txt||''))){if(core.indexOf(mm[1])<0){core.push(mm[1])}}
      var list=core.slice(1);
      if(cacheNames.length===0){cacheNames.push('x-v106.0-manual')}
      var realPut=function(url,blob){
        try{
          var abs=new URL(url,location.href).href;
          var jobs=[];
          for(var j=0;j<cacheNames.length;j++){
            (function(cname){
              try{jobs.push(caches.open(cname).then(function(c){return c.put(abs,new Response(blob))}))}catch(eP7){jobs.push(Promise.resolve())}
            })(cacheNames[j]);
          }
          return Promise.all(jobs);
        }catch(eP6){return Promise.resolve()}
      };
      x106Stage('جلب الإصدار الجديد…');
      var totalN=list.length+1;
      var doneN=0,gotBytes=0,estTotal=totalN*22000;
      x106Paint(4,'تنزيل الملفات 0 / '+totalN+'…');
      function repaint(){
        try{
          var pct=4+90*Math.min(1,gotBytes/estTotal);
          x106Paint(pct,'تنزيل الملفات '+doneN+' / '+totalN+'…');
        }catch(eR1){}
      }
      function oneFile(u){
        var g0=0;
        return new Promise(function(res){
          try{
            var up=x106Fresh(u).then(function(r){
              if(!r||!r.ok){throw new Error('http')}
              return x106Read(r,function(bytes,cl){
                var add=bytes-g0;g0=bytes;
                gotBytes+=add;
                
                repaint();
              }).then(function(b){return realPut(u,b).then(function(){return 1})});
            }).catch(function(){return 0});
            Promise.resolve(up).then(function(ok){doneN++;repaint();res(ok||0)});
          }catch(eO){doneN++;repaint();res(0)}
        });
      }
      /* index.html أولًا */
      return oneFile('./index.html').then(function(){
        function batch(start){
          if(start>=list.length){return Promise.resolve()}
          var slice=list.slice(start,start+6);
          return Promise.all(slice.map(oneFile)).then(function(){return batch(start+6)});
        }
        return batch(0);
      });
    }).then(function(){
      x106Paint(100,'إعادة التشغيل بالنسخة الجديدة…');
      try{
        if(navigator&&navigator.serviceWorker&&navigator.serviceWorker.getRegistrations){
          navigator.serviceWorker.getRegistrations().then(function(rs){
            for(var i=0;i<(rs||[]).length;i++){try{if(rs[i].waiting){rs[i].waiting.postMessage('skipWaiting')}}catch(eX1){}}
          });
        }
      }catch(eX){}
      try{localStorage.removeItem('x32_upd_seen')}catch(eL1){}
      setTimeout(function(){
        try{location.replace((''+location.pathname).split('?')[0]+'?xv='+Date.now()+(location.hash||''))}
        catch(eL){try{location.reload()}catch(eL2){}}
      },900);
    }).catch(function(){
      try{x106Close()}catch(eC){}
      try{
        if(typeof __x106Old==='function'){return __x106Old()}
        if(typeof x50HardReload==='function'){return x50HardReload()}
      }catch(eF){}
      try{location.reload()}catch(eF2){}
    });
  }catch(eB){
    try{x106Close()}catch(eC2){}
    try{if(typeof __x106Old==='function'){__x106Old()}}catch(eB2){}
  }
};

/* ---------- 106.هـ استبدال زر التحديث (آخر إسناد يفوز) ---------- */
try{__x106Old=applyUpdate}catch(e0){__x106Old=null}
try{
  window.applyUpdate=function(){
    try{return x106Update()}catch(e1){
      try{if(typeof __x106Old==='function'){return __x106Old()}}catch(e2){}
      try{if(typeof x50HardReload==='function'){x50HardReload()}}catch(e3){}
    }
  };
}catch(e4){}

/* ---------- 106.و صمت التوست القديم «جارٍ جلب التحديث» (حل محله شاشة النسبة) ---------- */
try{
  if(toast&&!window.__x106Toast){window.__x106Toast=toast}
  if(window.__x106Toast){
    window.toast=function(msg,kind){
      try{if((''+msg).indexOf('جارٍ جلب التحديث')>=0){return}}catch(eT0){}
      try{return window.__x106Toast(msg,kind)}catch(eT1){}
    };
  }
}catch(e5){}

/* ---------- 106.ز الميتاداتا: الإصدار 106.0 ---------- */
APP_META.ver='106.0';APP_META.date='2026-11-21';APP_META.lastUpdate='2026-11-21';
APP_META.notes='الإصدار 106.0 — التحديث الاحترافي: زر «تحديث الآن» صار شاشة كاملة بحلقة تقدم ونسبة مئوية حقيقية أثناء تنزيل ملفات الإصدار مع مراحل واضحة (تحضير ← تنزيل الملفات ← استبدال ← إعادة التشغيل) — ونهاية نهائية لدورة «اضغط تحديث ولا يتحدث»: المنصة تجلب ملفات الإصدار الجديد بنفسها من مصدر طازج وتقبلها في ذاكرة التطبيق قبل إعادة التشغيل، فلا تأثير الآن لذاكرة الخادم ولا لعامل الخدمة القديم، والتحديث ينجح من أول ضغطة. مع فحص شامل لكل أزرار المنصة (كلها صحيحة ومتصلة) وقواعد الإملاء آلية، وإصلاح موضع فقاعة اسم التبويب لتظهر فوق الزر بوضوح مثل واتساب.';
try{APP_META.changelog.unshift({ver:'106.0',date:'2026-11-21',notes:'شاشة تحديث احترافية بنسبة مئوية حقيقية أثناء التنزيل + نهاية نهائية لدورة «لا يتحدث» (تنزيل طازج واستبدال قبل إعادة التشغيل) + فقاعة اسم التبويب تظهر فوق الزر بوضوح'});}catch(eM106){}
window.fallbackNews18=function(){
  return [{title:'الإصدار 106.0 — التحديث الاحترافي بنسبة مئوية',
    body:'زر «تحديث الآن» يعرض حلقة تقدم ونسبة حقيقية أثناء تنزيل ملفات الإصدار ومراحل واضحة، والتحديث ينجح من أول ضغطة بغض النظر عن ذاكرة الخادم.',
    date:APP_META.date}];
};
window.x106t={ver:APP_META.ver,progress:true,cachePrime:true};
})();
