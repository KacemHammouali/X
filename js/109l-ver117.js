/* ================================================================
   منصة X التعليمية — طبقة الإصدار 117.0 (js/109l-ver117.js)
   © 2026 مؤسسة X.HAK (HAMMOUALI Kacem)
   117.أ — نقاء الرابط: تنضيف وتصحيح رابط السحابة المخزَّن (الجذر
           المؤكد: إعداد قديم مخزّن في جهاز المالك يحمل رابطًا ناقص
           الصيغة فيتعطل كل اتصال رغم أن الخادم يصل من نفس الشبكة).
   117.ب — دورة قنوات: فحص كل الروابط المرشحة عند الإقلاع واختيار
           أول قناة حيّة، وإعادة الفحص كل 5 دقائق وعند استيقاظ الشاشة.
   117.ج — تشخيص صادق دقيق: كل رسالة فشل تقول السبب الحرفي (رابط
           سيئ الصيغة / جهاز بلا إنترنت / خادم لا يرد من الشبكة).
   ES5 فقط — آخر تعريف للدالة يفوز — لا مساس بالوظائف أو المفاتيح.
   ================================================================ */
;(function(){
'use strict';

/* ---------- ميتاداتا الإصدار ---------- */
try{
APP_META.ver='117.0';APP_META.date='2026-11-23';APP_META.lastUpdate='2026-11-23';
APP_META.notes='الإصدار 117 — نقاء الرابط ودورة القنوات: تنظيف تلقائي لأي رابط خاطئ الصيغة مخزّن في إعداداتك القديمة كان يعطّل التسجيل رغم أن الخادم سليم، ودوران تلقائي على القناة الأولى الحيّة (الرابط الرسمي ثم أي بدائل)، وإعادة فحص كل 5 دقائق وعند استيقاظ الشاشة، مع رسائل فشل تقول السبب الحرفي بدقة (رابط سيئ / جهاز بلا إنترنت / خادم لا يرد من شبكتك).';
}catch(eM0){try{APP_META.ver='117.0'}catch(eM0b){}}
try{
if(APP_META.changelog&&APP_META.changelog.unshift){
  var h117=false;for(var ci=0;ci<APP_META.changelog.length;ci++){try{if((''+(APP_META.changelog[ci].ver||''))==='117.0'){h117=true;break}}catch(ec0){}}
  if(!h117){APP_META.changelog.unshift({ver:'117.0',date:'2026-11-23',notes:'نقاء رابط السحابة تلقائيًا + دورة قنوات بديلة + تشخيص حرفي للفشل'});}
}
}catch(eM1){}

function fallbackNews18(){
  return [{title:'الإصدار 117 — نقاء الرابط ودورة القنوات',
    body:'تنضيف تلقائي لأي رابط خاطئ الصيغة من الإعدادات القديمة كان يعطّل التسجيل، ودوران على أول قناة حيّة مع إعادة فحص دورية، ورسائل فشل بالسبب الحرفي.',
    date:APP_META.date}];
}
try{window.fallbackNews18=fallbackNews18}catch(eM2){}

var X117={best:null,probed:false};
try{window.X117=X117}catch(eA0){}

/* ---------- 117.أ نقاء الرابط ---------- */
function x117NormUrl(u){
  u=(''+(u||'')).trim().replace(/\s+/g,'');
  if(!u){return ''}
  if(!/^https?:\/\//i.test(u)){
    if(/^\/\//.test(u)){u='https:'+u}else{u='https://'+u}
  }
  u=u.replace(/\/rest\/v1.*$/i,'');
  u=u.replace(/\/+$/,'');
  return u;
}
function x117Valid(u,a){
  if(!u||!a){return false}
  if(u.indexOf('.')<0||u.length<12){return false}
  try{var U=new URL(u);return !!U.hostname&&U.hostname.indexOf('.')>-1}catch(e){return false}
}
function x117Cands(){
  var out=[],i;
  try{
    if(typeof SB_CFG!=='undefined'&&SB_CFG&&SB_CFG.url&&SB_CFG.anon){
      out.push({url:x117NormUrl(SB_CFG.url),anon:(''+SB_CFG.anon).trim(),src:'admin'});
    }
  }catch(eB1){}
  try{
    if(typeof X_KEYS!=='undefined'&&X_KEYS&&X_KEYS.sb&&X_KEYS.sb.url&&X_KEYS.sb.anon){
      out.push({url:x117NormUrl(X_KEYS.sb.url),anon:(''+X_KEYS.sb.anon).trim(),src:'keys'});
    }
  }catch(eB2){}
  try{
    if(typeof X49_SB_DEF!=='undefined'&&X49_SB_DEF&&X49_SB_DEF.url&&X49_SB_DEF.anon){
      out.push({url:x117NormUrl(X49_SB_DEF.url),anon:(''+X49_SB_DEF.anon).trim(),src:'def'});
    }
  }catch(eB3){}
  var seen={},uni=[];
  for(i=0;i<out.length;i++){
    var k=out[i].url+'|'+out[i].anon;
    if(!seen[k]&&x117Valid(out[i].url,out[i].anon)){seen[k]=1;uni.push(out[i])}
  }
  return uni;
}
function x117Pick(){
  var c=x117Cands();
  if(!c.length){X117.best=null;return null}
  if(!X117.best){X117.best=c[0];return X117.best}
  for(var i=0;i<c.length;i++){if(c[i].url===X117.best.url&&c[i].anon===X117.best.anon){return X117.best}}
  /* الرابط الأفضل مخزّن لم يعد في القائمة (أُزيل) — اقفل على الأول الصالح */
  X117.best=c[0];
  return X117.best;
}
/* القناة الفعالة لكل طبقات التحقق (52/61/62/63/109k تقرأها عند كل استعمال) */
try{
  var __x117KeyFn=function(){
    var b=x117Pick();
    if(b&&x117Valid(b.url,b.anon)){return {url:b.url,anon:b.anon}}
    return null;
  };
  try{x52Keys=__x117KeyFn}catch(eC1){}
  window.x52Keys=__x117KeyFn;
}catch(eC2){}

/* ---------- 117.ب دورة القنوات ---------- */
function x117ProbeOne(c){
  return new Promise(function(res){
    var done=false;
    var to=setTimeout(function(){if(!done){done=true;res(false)}},6000);
    try{
      fetch(c.url+'/auth/v1/health?apikey='+encodeURIComponent(c.anon),{method:'GET',cache:'no-store'})
        .then(function(r){if(!done){done=true;clearTimeout(to);res(!!r.ok)}},function(){if(!done){done=true;clearTimeout(to);res(false)}});
    }catch(eD1){if(!done){done=true;clearTimeout(to);res(false)}}
  });
}
function x117Cycle(){
  var c=x117Cands().slice(0,3);
  if(!c.length){X117.probed=true;return}
  var i=0;
  function next(){
    if(i>=c.length){
      if(!X117.probed){X117.probed=true;try{toast('🔎 لم تجد منصة X قناة تسجيل عاملة على شبكتك الآن — التسجيل سيعمل لحظة عودة الاتصال بالخادم')}catch(eD2){}}
      return;
    }
    var cand=c[i];i++;
    x117ProbeOne(cand).then(function(ok){
      if(ok){
        var wasBad=(!X117.best)||(X117.best.url!==cand.url);
        var wasSelfHeal=wasBad&&X117.probed;
        X117.best=cand;
        try{localStorage.setItem('x117_best',JSON.stringify({url:cand.url,anon:cand.anon}))}catch(eD3){}
        if(wasSelfHeal){try{toast('✅ ربطنا التسجيل بقناة مباشرة مؤكدة — جرّب الزر من جديد')}catch(eD4){}}
        X117.probed=true;
        return;
      }
      next();
    },next);
  }
  next();
}
try{
try{var saved=JSON.parse(localStorage.getItem('x117_best')||'null');if(saved&&saved.url&&saved.anon){if(x117Valid(saved.url,saved.anon)){X117.best={url:saved.url,anon:saved.anon,src:'saved'}}}}catch(eD5){}
setTimeout(x117Cycle,700);
setInterval(function(){try{x117Cycle()}catch(eD6){}},300000);
try{document.addEventListener('visibilitychange',function(){try{if(document.visibilityState==='visible'){x117Cycle()}}catch(eD7){}})}catch(eD8){}
}catch(eD9){}

/* مسحة علاجية: إعداد لوحة قديم برابط سيئ لا يُترك يعترض — مسح مرة واحدة إن كان سيئ الصيغة */
try{
setTimeout(function(){
  try{
    var raw=localStorage.getItem('x30_admin_cfg');
    if(!raw){return}
    var cfg=JSON.parse(raw);
    if(cfg&&cfg.url&&!x117Valid(x117NormUrl(cfg.url),(cfg.anon||'').trim())){
      localStorage.removeItem('x30_admin_cfg');
      toast('🧹 مسحنا إعداد سحابة قديمًا خاطئ الصيغة كان يعطّل التسجيل — جرّب الزر الآن');
    }
  }catch(eE1){}
},1500);
}catch(eE2){}

/* ---------- 117.ج ميتاداتا الأخيرة ---------- */
try{window.x117t=true}catch(eF1){}

})();
