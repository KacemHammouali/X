/* ============ الطبقة 50 — الإصدار 50: إصلاح حلقة التحديث النهائي + صيانة شاملة ============ */
/* 50.أ إصلاح حلقة التحديث: كان المتصفح يعرض نسخة قديمة محفوظة في ذاكرته المؤقتة (GitHub Pages
       يحتفظ بها 10 دقائق)، فيظل التطبيق يعلن وجود تحديث حتى بعد التحديث. الآن عند الضغط على
       «تحديث الآن»: نمسح كل الذواكر المؤقتة للموقع، نطلب من عامل الخدمة التفعيل الفوري،
       ثم نعيد التحميل برابط فريد جديد يتجاوز الذاكرة نهائيًا — فتفتح النسخة الجديدة فعليًا. */
function x50HardReload(){
  try{
    if(typeof caches!=='undefined'&&caches.keys){
      caches.keys().then(function(ks){
        try{
          var ds=[];
          for(var i=0;i<ks.length;i++){ds.push(caches.delete(ks[i]))}
          return Promise.all(ds);
        }catch(e1){}
      }).catch(function(e2){});
    }
  }catch(e0){}
  try{
    if(typeof navigator!=='undefined'&&navigator.serviceWorker&&navigator.serviceWorker.getRegistrations){
      navigator.serviceWorker.getRegistrations().then(function(rs){
        try{
          for(var i=0;i<rs.length;i++){
            try{if(rs[i].waiting){rs[i].waiting.postMessage('skipWaiting')}}catch(e3){}
            try{rs[i].update()}catch(e4){}
          }
        }catch(e5){}
      }).catch(function(e6){});
    }
  }catch(e7){}
  try{XUPD.newer=null;XUPD.checked=false;try{localStorage.removeItem('x32_upd_seen')}catch(e11){}}catch(e8){}
  try{
    var u=(''+location.pathname).split('?')[0]+'?xv='+Date.now()+(location.hash||'');
    location.replace(u);
  }catch(e9){try{location.reload()}catch(e10){}}
}
var __x50AU=applyUpdate;
applyUpdate=function(){
  try{
    try{if(XUPD.newer&&XUPD.newer.sw&&XSW&&XSW.reg&&XSW.reg.waiting){XSW.reg.waiting.postMessage('skipWaiting')}}catch(e0){}
    x50HardReload();
  }catch(e1){try{return __x50AU()}catch(e2){}}
};
/* 50.ب مسح رابط التحديث الفاني: بعد فتح النسخة الجديدة نظفف رقم التحديث الفريد من الرابط
       حتى لا يبقى في العنوان ولا في الروابط التي تنسخها */
try{
  if(typeof location!=='undefined'&&(''+location.href).indexOf('?xv=')>=0){
    try{history.replaceState(null,'',(''+location.pathname)+(location.hash||''))}catch(e12){}
  }
}catch(e13){}
/* 50.ج بيانات الإصدار */
APP_META.ver='50.0';APP_META.date='2026-11-02';APP_META.lastUpdate='2026-11-02';
APP_META.notes='الإصدار 50 — إصلاح حلقة التحديث النهائي: كان التطبيق يظل يعلن «يوجد تحديث» حتى بعد التحديث، لأن المتصفح كان يفتح نسخة قديمة محفوظة في ذاكرته المؤقتة لمدة 10 دقائق. الآن زر «تحديث الآن» يمسح كل الذواكر المؤقتة ويفتح النسخة الجديدة برابط فريد يتجاوز الذاكرة نهائيًا، ويختفي إشعار التحديث فورًا بعد التحديث. مع تصحيح أخطاء إملائية (معرض الخلفيات 24 وليس 25) وتحصين فحص الإصدارات ليعمل دائمًا من الشبكة مباشرة.';
try{APP_META.changelog.unshift('الإصدار 50 — إصلاح حلقة التحديث: «تحديث الآن» يمسح الذواكر المؤقتة ويعيد التحميل برابط فريد يتجاوز ذاكرة المتصفح، فيفتح الإصدار الجديد فعليًا ويختفي الإشعار — مع تصحيحات إملائية وتحصين فحص الإصدارات.')}catch(e14){}
function fallbackNews18(){
  return [{title:'الإصدار 50 — نهاية حلقة التحديث',
    body:'زر «تحديث الآن» صار يمسح كل الذواكر المؤقتة ويفتح النسخة الجديدة فورًا برابط يتجاوز الذاكرة — لا يعود التطبيق يعلن تحديثًا بعد أن حدّثته.',
    date:APP_META.date}];
}
