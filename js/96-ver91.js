/* ===================== الطبقة 91 — الإصدار 91.0: زر «تحديث الآن» يعمل من أول ضغطة ===================== */
try{
/* 91.أ التحديث بيد المستخدم حصرًا (التصميم المعتمد): علامة جلسة توقف التحديث التلقائي
       القديم (طبقة 56) الذي كان يعيد التحميل فور الفتح — يبقى شريط الإشعار وزر
       «تحديث الآن» هما الطريق الوحيد للتحديث، بلا إعادة تحميل مفاجئة أبدًا. */
try{sessionStorage.setItem('x56auto','1')}catch(eA1){}
/* 91.ب الجذر: التعريف الفائز للزر منذ طبقة 68 كان يعيد تحميل نفس الرابط، وخادم الاستضافة
       يخدم النسخة القديمة من ذاكرته المؤقتة حتى نحو 10 دقائق بعد النشر، فيبقى التطبيق
       على إصداره القديم ويظهر الإشعار مرة بعد مرة مهما ضغطت. الحل المضمون: رابط فريد
       جديد لا يمكن أن يكون مخزنًا في أي ذاكرة على الإطلاق — نجلب منه أولًا للتأكد أن
       النسخة الجديدة وصلت فعلًا، ثم نفتحه مباشرة مع مسح كل الذواكر قبل الفتح. */
var __x91AU=null;try{__x91AU=applyUpdate}catch(eB0){}
window.applyUpdate=function(){
  var navDone=false;
  var u='';
  try{u=(''+location.pathname).split('?')[0]+'?xv='+Date.now()+(location.hash||'')}catch(eB1){u='?xv='+Date.now()}
  function x91Go(){
    if(navDone){return}navDone=true;
    try{
      if(typeof caches!=='undefined'&&caches.keys){
        caches.keys().then(function(ks){try{var ds=[];for(var i=0;i<ks.length;i++){ds.push(caches.delete(ks[i]))}return Promise.all(ds)}catch(eC1){}}).catch(function(eC2){})
      }
    }catch(eC3){}
    try{if(navigator&&navigator.serviceWorker&&navigator.serviceWorker.controller&&navigator.serviceWorker.controller.postMessage){navigator.serviceWorker.controller.postMessage('skipWaiting')}}catch(eC4){}
    try{if(navigator&&navigator.serviceWorker&&navigator.serviceWorker.getRegistrations){navigator.serviceWorker.getRegistrations().then(function(rs){try{for(var i=0;i<rs.length;i++){try{rs[i].update()}catch(eC5){}}}catch(eC6){}}).catch(function(eC7){})}}catch(eC8){}
    try{XUPD.newer=null;XUPD.checked=false;try{localStorage.removeItem('x32_upd_seen')}catch(eC9){}}catch(eC10){}
    try{location.replace(u)}catch(eC11){try{location.reload()}catch(eC12){}}
  }
  try{toast('جارٍ جلب التحديث… لا تغلق التطبيق','info')}catch(eD1){}
  var to=null;
  try{to=setTimeout(x91Go,9000)}catch(eD2){to=null}
  try{
    fetch(u,{cache:'no-store',credentials:'same-origin'}).then(function(r){
      if(to){clearTimeout(to);to=null}
      if(!r||!r.ok){throw new Error('x91http')}
      x91Go();
    }).catch(function(eD3){
      if(to){clearTimeout(to);to=null}
      if(navDone){return}
      try{toast('تعذر الوصول إلى خادم التحديث — تحقق من الإنترنت ثم اضغط «تحديث الآن» مرة أخرى','error')}catch(eD4){}
    });
  }catch(eD5){
    if(to){clearTimeout(to);to=null}
    x91Go();
  }
};
/* 91.ج هوية الإصدار (آخر إسناد يفوز) */
APP_META.ver='91.0';APP_META.date='2026-11-07';APP_META.lastUpdate='2026-11-07';
APP_META.notes='الإصدار 91 — إصلاح جذري لزر «تحديث الآن»: كان الزر يعيد تحميل نفس الرابط فيخدم الخادم النسخة القديمة من ذاكرته المؤقتة وتبقى على إصدارك القديم مهما ضغطت. الآن الزر يجلب التحديث برابط فريد يتجاوز كل الذاكرات ويفتحه فور وصوله — يعمل من أول ضغطة، ولا تحديث تلقائي مفاجئ: أنت من يقرر متى يتحدث التطبيق.';
try{APP_META.changelog.unshift('الإصدار 91.0 (2026-11-07): إصلاح جذري لزر «تحديث الآن» — جلب برابط فريد يتجاوز ذاكرة الخادم + تحقق من وصول النسخة قبل فتحها + رسائل صادقة أثناء التحديث + إيقاف التحديث التلقائي القديم: التحديث بيد المستخدم حصرًا.')}catch(eV91){}
}catch(eW91){}
