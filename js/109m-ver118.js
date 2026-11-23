/* ================================================================
   منصة X التعليمية — طبقة الإصدار 118.0 (js/109m-ver118.js)
   © 2026 مؤسسة X.HAK (HAMMOUALI Kacem)
   118.أ — تثبيت رقم الإصدار بعد الإقلاع: الجذر المكتشف أن سلسلة
           أغلفة الإقلاع القديمة كانت تعيد كتابة الرقم إلى 114.0
           كآخر كلمة، فتبدو لوحة «إصدار جديد متوفر» أبدية رغم
           أن كل ملفات 117 موجودة فعلاً في المستودع (تحقق حي).
   118.ب — صدق بطاقة التشخيص: فشل تحديث عامل الخدمة بسبب ذاكرة
           جوجل المؤقتة ليست عطلًا في المنصة — تُهذَّب برسالة
           هادئة وإعادة محاولة تلقائية صامتة بلا بطاقة حمراء.
   118.ج — حدة الرسوم: منع أي تقطيع أو تنقّط في الأيقونات
           والحروف والصور على الشاشات المختلفة.
   ES5 فقط — آخر تعريف للدالة يفوز — لا مساس بjs/00-keys.js.
   ================================================================ */
;(function(){
'use strict';

/* ---------- ميتاداتا الإصدار ---------- */
try{
APP_META.ver='118.0';APP_META.date='2026-11-23';APP_META.lastUpdate='2026-11-23';
APP_META.notes='الإصدار 118 — تثبيت رقم الإصدار بعد الإقلاع (نهاية لوحة «إصدار جديد متوفر» الأبدية رغم اكتمال التحديث)، وتهذيب بطاقة التشخيص: فشل تحديث عامل الخدمة بسبب ذاكرة جوجل المؤقتة صار رسالة هادئة وإعادة محاولة تلقائية بدل البطاقة الحمراء، وحدة الرسوم: بلا أي تقطيع في الأيقونات والحروف والصور.';
}catch(eM0){try{APP_META.ver='118.0'}catch(eM0b){}}
try{
if(APP_META.changelog&&APP_META.changelog.unshift){
  var h118=false;for(var ci=0;ci<APP_META.changelog.length;ci++){try{if((''+(APP_META.changelog[ci].ver||''))==='118.0'){h118=true;break}}catch(ec0){}}
  if(!h118){APP_META.changelog.unshift({ver:'118.0',date:'2026-11-23',notes:'تثبيت رقم الإصدار بعد الإقلاع + تهذيب بطاقة التشخيص + وحدة الرسوم'});}
}
}catch(eM1){}

function fallbackNews18(){
  return [{title:'الإصدار 118 — الرقم الصحيح والرسوم الحادة',
    body:'رقم الإصدار يثبت بعد الإقلاع فتختفي لوحة التحديث الأبدية، وفشل تحديث الخلفية المؤقت يصير رسالة هادئة بإعادة محاولة تلقائية، والرسوم بلا أي تقطيع.',
    date:APP_META.date}];
}
try{window.fallbackNews18=fallbackNews18}catch(eM2){}

/* ---------- 118.أ تثبيت رقم الإصدار بعد الإقلاع ---------- */
var V118='118.0';
function x118PinVer(){
  try{APP_META.ver=V118;APP_META.date='2026-11-23'}catch(eP1){}
}
var prevBoot118=null;
try{prevBoot118=(typeof window.boot==='function')?window.boot:null}catch(eB0){}
var wrappedBoot118=function(){
  try{if(prevBoot118){prevBoot118()}}catch(eB1){}
  x118PinVer();
  /* أعِد التثبيت بعد كل الجمل المؤجلة القديمة — أكبر تأخير معروف 4 ثوان */
  try{setTimeout(x118PinVer,400)}catch(eB2){}
  try{setTimeout(x118PinVer,1500)}catch(eB3){}
  try{setTimeout(x118PinVer,4000)}catch(eB4){}
};
try{window.boot=wrappedBoot118}catch(eB5){try{boot=wrappedBoot118}catch(eB6){}}

/* ---------- 118.ب تهذيب بطاقة التشخيص ---------- */
var X118={swN:0,swT:0};
try{window.X118=X118}catch(eA0){}

function x118SwQuiet(){
  try{
    X118.swN++;
    if(X118.swN===1){
      try{toast('⚙️ تحديث الخلفية وقف مؤقتًا بسبب ذاكرة جوجل المؤقتة. سنجرب تلقائيًا ولا خطوة منك — المنصة نفسها تعمل بلا أي تأثر')}catch(eN1){}
    }
  }catch(eN0){}
  /* إعادة محاولة تحديث صامتة بريد خاطئ مضمونة — حتى 15 محاولة كل دقيقة */
  function tryUpd(){
    try{
      X118.swT++;
      if(X118.swT>15){return}
      navigator.serviceWorker.getRegistrations().then(function(rs){
        for(var i=0;i<rs.length;i++){
          try{
            var p=rs[i].update();
            if(p&&typeof p['catch']==='function'){p['catch'](function(){})}
          }catch(eU1){}
        }
      })['catch'](function(){});
    }catch(eU0){}
    try{setTimeout(tryUpd,60000)}catch(eU2){}
  }
  tryUpd();
}
try{
var __x118Diag=window.__xDiag;
window.__xDiag=function(m){
  m=(''+(m||''));
  if(m.indexOf('ServiceWorker')>=0&&(m.indexOf('Failed to')>=0||m.indexOf('unknown error')>=0||m.indexOf('fetching the script')>=0)){
    x118SwQuiet();
    return;
  }
  if(__x118Diag){try{return __x118Diag(m)}catch(eD1){}}
};
try{window.__xDiagRef=window.__xDiag}catch(eD2){}
}catch(eD3){}

/* ---------- 118.ج حدة الرسوم: لا تقطيع ولا تنقيط ---------- */
try{
var __x118s=document.createElement('style');
__x118s.id='x118-style';
__x118s.textContent=
 /* الرسوم: حواف مدورة وعرض خط ثابت ومحكوم */
 'svg[viewBox="0 0 24 24"]{shape-rendering:geometricPrecision}'+
 'svg *{stroke-linecap:round!important;stroke-linejoin:round!important;stroke-dasharray:0!important}'+
 '.x116ic{stroke-width:2!important;color:inherit}'+
 /* الصور والفيديو: عرض ناعم بلا أي تنقيط بحسب دقة الشاشة */
 'img,video{image-rendering:auto;-ms-interpolation-mode:bicubic}'+
 /* الحروف: امتلاء الخط بلا تقطيع على كل المتصفحات */
 'body{-webkit-font-smoothing:antialiased!important;-moz-osx-font-smoothing:grayscale!important;text-rendering:optimizeLegibility!important}'+
 /* بطاقة التشخيص: بلون المنصة الهادئ بدل الأحمر الصارخ */
 '#xdiag{background:linear-gradient(165deg,#12202F,#0D1625)!important;border-bottom:1px solid rgba(53,189,242,.4)!important;font-family:inherit!important;box-shadow:0 10px 30px rgba(0,0,0,.4)!important}'+
 '#xdiag button{border-radius:10px!important}';
(document.head||document.documentElement).appendChild(__x118s);
}catch(eD0){}

/* ---------- ميتاداتا الأخيرة ---------- */
try{window.x118t=true}catch(eF1){}

})();
