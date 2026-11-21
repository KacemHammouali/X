/* ===== طبقة 89.1: قناتا الإدارة للإرسال إلى الإدارة + توزيع الحصة الشهرية الذكي =====
   Web3Forms (250 رسالة/شهر — الحصة الأكبر) أولًا، ثم EmailJS (200 رسالة/شهر).
   عند نفاد حصة قناة من الخادم (رمز 429 أو رسالة الحد) تُعلَّم القناة لهذا الشهر
   وينتقل الإرسال فورًا للأخرى، وفي مطلع كل شهر يُعاد العد من القناة الأكبر.
   بلا بوابة «رسالة كل 12 ساعة»: البلاغ والتسجيل يرسلان فورًا دائمًا.
   الطوارئ: إن اكتملت الحصتان يعمل FormSubmit بلا حصة شهرية. */

/* 89.1.أ تثبيت مفاتيح الإدارة (نفسها المخبأة في الأساس) في تخزين الجهاز
   كي يعمل المحركان بالقيم الصحيحة مهما كان المخزن القديم */
try{
  stSet('x25_emailjs',{service:'service_kvr39ms',template:'template_rmyruhm',key:'82bMO1V13gj-GXgte'});
  stSet('x25_w3f',{key:'df136111-7a8e-4f35-9480-c3f77db614c6'});
}catch(eK891){}

/* 89.1.ب نزع بوابة الـ12 ساعة نهائيًا — لا شيء يمنع البلاغ أو التسجيل */
window.x27DayOK=function(){return {ok:true,h:0}};

/* 89.1.ج المحاولة عبر قناة واحدة (محركات الأساس x27SendRaw/x25) */
function x891Try(ch,subject,fullBody,from,cb){
  var done=false;
  function fin(ok,ex){if(done){return}done=true;try{cb(!!ok,!!ex)}catch(e){}}
  try{
    x27SendRaw(ch,subject,fullBody,from,function(ok,ex){
      if(ok){try{x27Count(ch)}catch(eC){}}
      fin(ok,ex);
    });
  }catch(eX){fin(false,false)}
}

/* 89.1.د سلسلة الإرسال الموحدة: الأكبر أولًا ثم الثانية ثم طوارئ FormSubmit */
window.x19Send=function(subject,body,from,onResult){
  var fullBody=body+'\n\n'+((from)?('— من: '+from+'\n'):'')+'— أُرسلت من منصة X الإصدار '+APP_META.ver;
  var finish=function(success,queued){if(typeof onResult==='function'){try{onResult(!!success,!!queued)}catch(e){}}};
  var handled=false;
  function okDone(){if(handled){return}handled=true;finish(true,false)}
  var emergencyStarted=false;
  function emergency(){
    if(emergencyStarted||handled){return}
    emergencyStarted=true;
    try{x89Send(subject,body,from,function(ok,qd){finish(ok,qd)})}catch(eE){finish(false,false)}
  }
  var c1='';
  try{c1=x27Pick()}catch(eP){}
  if(!c1){
    try{toast('ℹ️ اكتملت حصة القناتين لهذا الشهر — يعمل الآن مسار الطوارئ المضمون','info')}catch(eT0){}
    emergency();
    return;
  }
  try{toast('⏳ جارٍ إرسال رسالتك إلى الإدارة…')}catch(eT1){}
  x891Try(c1,subject,fullBody,from,function(ok1,ex1){
    if(handled){return}
    if(ok1){
      try{toast('✅ وصلت رسالتك إلى الإدارة بنجاح ('+(c1==='w3f'?'Web3Forms':'EmailJS')+')','success')}catch(eS){}
      okDone();return;
    }
    if(ex1){try{x27Kill(c1)}catch(eK){}}
    var c2=(c1==='w3f')?'ejs':'w3f';
    var q=null;
    try{q=x27QuotaRaw()}catch(eQ){}
    var left2=0;
    try{left2=x27Left(q,c2)}catch(eL){left2=0}
    if(!(c2&&left2>0)){emergency();return}
    x891Try(c2,subject,fullBody,from,function(ok2,ex2){
      if(handled){return}
      if(ok2){
        try{toast('✅ وصلت رسالتك إلى الإدارة بنجاح ('+(c2==='w3f'?'Web3Forms':'EmailJS')+')','success')}catch(eS2){}
        okDone();return;
      }
      if(ex2){try{x27Kill(c2)}catch(eK2){}}
      emergency();
    });
  });
};

/* 89.1.هـ هوية الإصدار */
APP_META.ver='89.1';
APP_META.date='2026-11-07';
APP_META.lastUpdate='2026-11-07';
APP_META.notes='الإصدار 89.1 — إرسال الإدارة عبر قناتيك: Web3Forms (250 رسالة/شهر — الأكبر) أولًا ثم EmailJS (200 رسالة/شهر)، بتبديل تلقائي عند نفاد حصة الشهر، وتجديد شهري يعيد العد من القناة الأكبر، وبلا أي بوابة تمنع البلاغ أو التسجيل.';
try{APP_META.changelog.unshift('الإصدار 89.1 (2026-11-07): تفعيل قناتي الإدارة (Web3Forms + EmailJS) بمفاتيحهما الجاهزة + توزيع الحصة الشهرية الذكي (الأكبر 250 أولًا ثم 200، النفاد من الخادم = تبديل فوري، تجديد شهري تلقائي) + إزالة بوابة الرسالة/12 ساعة التي كانت تحبس التسجيل والبلاغ + FormSubmit مسار طوارئ بلا حصة.')}catch(eV891){}


