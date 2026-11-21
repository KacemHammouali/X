/* ===== الطبقة 68 - التطبيق لا يتحدث نفسه نهائيًا + إعدادات ترى بالعين + شريط سفلي عالمي + درس في صفحته ===== */
try{
/* 68.أ نموذج البلاغ في الإعدادات فقط - نُزعت بطاقة البلاغ من كل الصفحات (ملفي وغيرها) */
var x68ReportForm=contactHTML;
contactHTML=function(){return ''};
try{x48ReportShow=function(){try{xModal(x48T('report'),x68ReportForm())}catch(e){}}}catch(eR0){}
/* 68.ب الإعدادات تعمل وترى بالعين: تطبيق مباشر للأصناف + ستايل قوي بلا مرشح على الجسم (مرشح 59 كان يقتل التباين مع خلفيات الصور) */
function x68Sync(){try{var b=document.body;if(b&&b.classList){b.classList.toggle('x48-hc',XCFG.contrast===true);b.classList.toggle('x48-dense',XCFG.density==='compact');b.classList.toggle('x48-ob',XCFG.borders===true)}}catch(e){}}
var __x68SX=setX;
setX=function(k,v){try{__x68SX(k,v)}catch(e1){}try{x68Sync()}catch(e2){}};
try{x68Sync()}catch(e3){}
/* 68.ج الستايل: إعدادات مرئية + شريط سفلي عالمي يختفي عند النزول + درس في صفحة مستقلة */
(function(){
  var n=null;try{n=gid('x68-style')}catch(e){}
  if(!n){try{n=document.createElement('style');n.id='x68-style';var hd=document.head||document.body;if(hd&&hd.appendChild){hd.appendChild(n)}}catch(e2){n=null}}
  if(n){n.textContent=
   'body.x48-hc{--text:#ffffff;--text-dim:#e8eef8;--text-mute:#c3cfdf;color:var(--text)!important}'+
   'html[data-theme="light"] body.x48-hc{--text:#0a1220;--text-dim:#243349;--text-mute:#42536d}'+
   'body.x48-hc .x17-mute,body.x48-hc .set-note,body.x48-hc .ct-note{color:var(--text-dim)!important}'+
   'body.x48-hc .glass,body.x48-hc .glass-strong,body.x48-hc .card,body.x48-hc .x17-card{border-color:rgba(170,200,245,.55)!important}'+
   'body.x48-hc h1,body.x48-hc h2,body.x48-hc h3,body.x48-hc h4{font-weight:800}'+
   'body.x48-hc .btn{border-color:rgba(200,225,255,.6)!important}'+
   'body.x48-dense .glass,body.x48-dense .glass-strong,body.x48-dense .x17-card,body.x48-dense .card,body.x48-dense .h15-card{padding:9px!important;border-radius:10px!important}'+
   'body.x48-dense .btn{padding:7px 12px!important;font-size:12.5px!important}'+
   'body.x48-dense .section-header{margin:8px 0 5px!important}'+
   'body.x48-ob .glass,body.x48-ob .glass-strong,body.x48-ob .x17-card,body.x48-ob .card,body.x48-ob .h15-card,body.x48-ob .news-item{outline:2px solid rgba(150,190,245,.85)!important;outline-offset:-1px}'+
   'body.x48-ob .btn{outline:1px solid rgba(150,190,245,.7)!important}'+
   '.bnav{left:0!important;right:0!important;bottom:0!important;border-radius:0!important;height:calc(56px + env(safe-area-inset-bottom,0px))!important;padding:4px 6px calc(4px + env(safe-area-inset-bottom,0px))!important;background:rgba(9,14,25,.96)!important;border:0!important;border-top:1px solid rgba(120,150,190,.22)!important;box-shadow:0 -10px 30px rgba(0,0,0,.38)!important;transition:transform .28s ease,opacity .28s ease}'+
   'html[data-theme="light"] .bnav{background:rgba(250,252,255,.97)!important;border-top:1px solid #DFE6EF!important}'+
   '.bnav.x68-hide{transform:translateY(120%)!important;opacity:0!important;pointer-events:none!important}'+
   '.bnav-btn.bnav-on{background:transparent!important;color:var(--x-accent)!important}'+
   '.bnav-btn.bnav-on span{font-weight:900}'+
   '.x68-lsnhead{padding:10px 14px 0;max-width:1000px;margin:0 auto}'+
   '.lesson-view{animation:x68fade .25s ease}'+
   '@keyframes x68fade{from{opacity:.35;transform:translateY(8px)}to{opacity:1;transform:none}}';
  }
})();
/* 68.د الشريط السفلي يختفي عند النزول ويظهر عند الصعود */
var X68={lastY:0,ty:0};
function x68NavSync(){
  try{
    var y=0;try{y=(window.pageYOffset||(document.documentElement&&document.documentElement.scrollTop)||0)}catch(e){y=0}
    var n=null;try{n=(document.querySelector?document.querySelector('.bnav'):null)}catch(e2){n=null}
    if(!n){return}
    if(y>X68.lastY+16&&y>120){try{n.classList.add('x68-hide')}catch(e3){}}
    else if(y<X68.lastY-12||y<60){try{n.classList.remove('x68-hide')}catch(e4){}}
    X68.lastY=y;
  }catch(e5){}
}
try{window.addEventListener('scroll',x68NavSync,true)}catch(e6){}
try{window.addEventListener('touchmove',function(ev){try{var t=(ev.touches&&ev.touches[0])?ev.touches[0].clientY:0;if(!t){return}if(!X68.ty){X68.ty=t}var dy=X68.ty-t;X68.ty=t;var n=(document.querySelector?document.querySelector('.bnav'):null);if(!n){return}if(dy>26){try{n.classList.add('x68-hide')}catch(e1){}}else if(dy<-16){try{n.classList.remove('x68-hide')}catch(e2){}}}catch(e3){}},true)}catch(e7){}
/* 68.هـ كل درس في صفحته المستقلة: زر رجوع بارز أعلاه + إعادة للرأس عند كل تنقل */
var __x68RL=renderLesson;
renderLesson=function(sid,cid){
  var h='';try{h=__x68RL(sid,cid)}catch(e){h=''}
  try{
    var nm='';try{nm=escAttr(CURR[sid].name)}catch(e2){}
    if(!nm){nm='المادة'}
    h='<div class="x68-lsnhead fade-in"><button class="btn btn-sm" onclick="navigate(\'subject\',\''+sid+'\')">→ رجوع إلى '+nm+'</button></div>'+h;
  }catch(e3){}
  return h;
};
var __x68NAV=navigate;
navigate=function(a,b,c){try{__x68NAV(a,b,c)}catch(e){}try{setTimeout(function(){try{window.scrollTo(0,0)}catch(e2){}},0)}catch(e3){}};
/* 68.و كشف التطبيق الحقيقي عبر قناة 51 (توقيع android-app + standalone + العلامة المحفوظة) */
function x68Mode(){
  try{if(typeof x51Channel==='function'){var c=x51Channel();if(c==='app'){return 'app'}if(c==='web'){return 'site'}}}catch(e){}
  try{if(navigator&&navigator.standalone===true){return 'app'}}catch(e2){}
  try{if(window.matchMedia&&window.matchMedia('(display-mode: standalone)').matches){return 'app'}}catch(e3){}
  try{if(window.matchMedia&&window.matchMedia('(display-mode: fullscreen)').matches){return 'app'}}catch(e3b){}
  return 'site';
}
try{x67Mode=x68Mode}catch(eM0){}
x67TellMode=function(){try{if(navigator&&navigator.serviceWorker&&navigator.serviceWorker.controller&&navigator.serviceWorker.controller.postMessage){navigator.serviceWorker.controller.postMessage({t:'mode',m:x68Mode()})}}catch(e){}};
try{setTimeout(x67TellMode,120)}catch(eM1){}
try{if(navigator&&navigator.serviceWorker&&navigator.serviceWorker.addEventListener){navigator.serviceWorker.addEventListener('controllerchange',function(){try{setTimeout(x67TellMode,400)}catch(e){}})}}catch(eM2){}
try{x67TellMode()}catch(eM3){}
/* 68.ز فحص تحديث سريع عند كل فتح + التحديث بيد المستخدم يجمّد النسخة في ذاكرة التطبيق حتى يضغط */
try{setTimeout(function(){try{checkUpdate(true)}catch(e){}},1500)}catch(e6){}
applyUpdate=function(){
  try{
    var reloaded=false;
    var go=function(){if(reloaded){return}reloaded=true;try{location.reload()}catch(e){}};
    var step=function(){try{if(navigator&&navigator.serviceWorker&&navigator.serviceWorker.controller&&navigator.serviceWorker.controller.postMessage){navigator.serviceWorker.controller.postMessage('skipWaiting')}}catch(e1){}try{setTimeout(go,400)}catch(e2){go()}};
    var clearOthers=function(){try{var cs=window.caches||(typeof caches!=='undefined'?caches:null);if(cs&&cs.keys){return cs.keys().then(function(ks){var ps=[];for(var i=0;i<ks.length;i++){if(ks[i]==='x68-app'||ks[i]==='x68-mode'){continue}ps.push(cs.delete(ks[i]))}return Promise.all(ps)})}}catch(e3){}return Promise.resolve(1)};
    var p=''+location.pathname;var k=p.lastIndexOf('/');var base=(k>=0?p.substring(0,k+1):'/')+'index.html?x68u='+Date.now();
    var fresh=null;
    try{fresh=fetch(base,{cache:'no-store',credentials:'same-origin'}).then(function(r){if(!r||!r.ok){throw new Error('x68')}var cs=window.caches||(typeof caches!=='undefined'?caches:null);if(!cs||!cs.open){throw new Error('nc')}return cs.open('x68-app').then(function(c){return c.put('./index.html',r.clone())})}).catch(function(){})}catch(e4){}
    if(fresh&&fresh.then){fresh.then(function(){return clearOthers()}).then(step).catch(step)}else{clearOthers().then(step).catch(step)}
  }catch(e5){try{location.reload()}catch(e6){}}
};
APP_META.ver='68.0';
APP_META.notes='الإصدار 68 — التطبيق المثبت لا يتحدث نفسه نهائيًا (عامل الخدمة يتعرف على توقيع android-app مباشرة ويخدم النسخة المجمدة حتى تضغط تحديث الآن، والموقع يتحدث تلقائيًا)، المنصة تعمل بلا إنترنت، إصلاح أزرار الإعدادات بستايل يُرى بالعين (التباين والكثافة والحدود)، نموذج البلاغ في الإعدادات فقط ونُزع من كل الصفحات، شريط سفلي عالمي يختفي عند النزول ويظهر عند الصعود، وكل درس يفتح صفحته المستقلة بزر رجوع بارز.';
try{APP_META.lastUpdate='2026-11-04'}catch(e7){}
try{if(APP_META.changelog&&APP_META.changelog.unshift){APP_META.changelog.unshift({ver:'68.0',date:'2026-11-04',notes:'تحديث بيد المستخدم نهائيًا + عمل بلا إنترنت + إعدادات مرئية + شريط سفلي يختفي + درس في صفحة مستقلة'})}}catch(e8){}
}catch(eW68){}
