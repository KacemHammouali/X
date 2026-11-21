/* ===== طبقة 89.2: إعادة بوابة الإدارة — رسالة واحدة كل 12 ساعة =====
   بوابة «رسالة واحدة لكل زائر كل 12 ساعة (رسالة التسجيل تُحسب منها)»
   بمدة 12 ساعة بدل 24 كما طلب الإدارة، مع العدّ التنازلي الحي،
   وقناتا الإرسال (Web3Forms ثم EmailJS) وتوزيع الحصة الشهرية كما هما. */

/* 89.2.أ بوابة 12 ساعة (تُلغي تحييد 89.1 وتعيد المنطق الحقيقي بمدة 12 ساعة) */
window.x27DayOK=function(){
  var last=0;
  try{last=stGet('x27_day',0)||0}catch(eG892){last=0}
  var now=Date.now();
  var rest=43200000-(now-last);
  if(last>0&&rest>0){return {ok:false,h:Math.ceil(rest/3600000)}}
  return {ok:true};
};

/* 89.2.ب سلسلة الإرسال: البوابة أولًا ثم الأكبر فالأصغر ثم الطوارئ،
   والنجاح من أي مسار يعلّم بوابة الـ12 ساعة */
window.x19Send=function(subject,body,from,onResult){
  var fullBody=body+'\n\n'+((from)?('— من: '+from+'\n'):'')+'— أُرسلت من منصة X الإصدار '+APP_META.ver;
  var finish=function(success,queued){
    if(success){try{x27DayMark()}catch(eM){}}
    if(typeof onResult==='function'){try{onResult(!!success,!!queued)}catch(e){}}
  };
  var d=null;
  try{d=x27DayOK()}catch(eD){d={ok:true,h:0}}
  if(d&&!d.ok){
    try{toast('⏳ رسالة واحدة كل 12 ساعة — تنطلق رسالتك القادمة بعد نحو '+(d.h||1)+' ساعة','error')}catch(eT0){}
    try{x29CountdownOpen()}catch(eC0){}
    if(typeof onResult==='function'){try{onResult(false,false)}catch(e1){}}
    return;
  }
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
    try{toast('ℹ️ اكتملت حصة القناتين لهذا الشهر — يعمل الآن مسار الطوارئ المضمون','info')}catch(eT1){}
    emergency();
    return;
  }
  try{toast('⏳ جارٍ إرسال رسالتك إلى الإدارة…')}catch(eT2){}
  x891Try(c1,subject,fullBody,from,function(ok1,ex1){
    if(handled){return}
    if(ok1){
      try{toast('✅ وصلت رسالتك إلى الإدارة بنجاح ('+(c1==='w3f'?'Web3Forms':'EmailJS')+')','success')}catch(eS1){}
      okDone();return;
    }
    if(ex1){try{x27Kill(c1)}catch(eK1){}}
    var c2=(c1==='w3f')?'ejs':'w3f';
    var q=null;try{q=x27QuotaRaw()}catch(eQ){}
    var left2=0;try{left2=x27Left(q,c2)}catch(eL){left2=0}
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

/* 89.2.ج هوية الإصدار */
APP_META.ver='89.2';
APP_META.date='2026-11-07';
APP_META.lastUpdate='2026-11-07';
APP_META.notes='الإصدار 89.2 — إعادة بوابة الإدارة برسالة واحدة كل 12 ساعة (التسجيل يُحسب منها) مع بقاء قناتي الإرسال Web3Forms (250/شهر) ثم EmailJS (200/شهر) بتوزيع الحصة الشهرية الذكي والعدّ التنازلي الحي.';
try{APP_META.changelog.unshift('الإصدار 89.2 (2026-11-07): إعادة بوابة «رسالة واحدة كل 12 ساعة» بتصميم الإدارة (بدل 24) — كل النصوص والعدّ التنازلي والمنطق أصبحت 12 ساعة، والنجاح من أي مسار (قناتا الإدارة أو الطوارئ) يعلّم البوابة، مع بقاء توزيع الحصة الشهرية كاملًا.')}catch(eV892){}


