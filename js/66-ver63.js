/* ===== الطبقة 63 - حفظ البريد عند الارسال: الجذر الحقيقي لرفض كل الرموز الصحيحة =====
   التشخيص (بصورة الإدارة): شاشة الرمز كانت تعرض (ارسلنا رمزا سريا الى .) - البريد فارغ!
   لان x52SendOtp كان يرسل الرمز دون حفظ البريد في AUTH.email/XAUTH18.email،
   فيخرج طلب التحقق من السلسلة بلا بريد فيرفض الخادم اي رمز مهما كان صحيحا.
   63.ا حفظ البريد في كل مسارات الارسال + localStorage يقوى عبر اعادة الفتح.
   63.ب استرجاع البريد قبل التحقق، وان تعذر اصلا فلا تحرق اي محاولة + رسالة صادقة.
   63.ج شفاء شاشة الرمز: البريد يسترجع ويعرض دائما. */
try{
var __x63Save=function(em){
  try{
    em=(''+(em||'')).trim();
    var ok=false;
    try{ok=(typeof validEmail==='function')?!!validEmail(em):(em.indexOf('@')>0&&em.indexOf('.')>1)}catch(eV){}
    if(em&&ok){
      try{AUTH.email=em}catch(eA){}
      try{XAUTH18.email=em}catch(eB){}
      try{localStorage.setItem('x63_mail',em)}catch(eC){}
      return true;
    }
  }catch(eD){}
  return false;
};
var __x63Mail=function(){
  var m='';
  try{m=(''+((AUTH&&AUTH.email)||'')).trim()}catch(eE){}
  if(m.indexOf('@')<1){m='';try{m=(''+((XAUTH18&&XAUTH18.email)||'')).trim()}catch(eF){}}
  if(m.indexOf('@')<1){m='';try{var v63=localStorage.getItem('x63_mail');m=(''+(v63||'')).trim()}catch(eG){}}
  if(m.indexOf('@')<1){m='';try{m=(''+(((gid('a-email')||{}).value)||'')).trim()}catch(eH){}}
  return (m.indexOf('@')>0)?m:'';
};
var __x63SO=x52SendOtp;
x52SendOtp=function(em){try{__x63Save(em)}catch(eH2){}return __x63SO(em)};
var __x63EN=x18EmailNext;
x18EmailNext=function(){try{__x63Save(((gid('a-email')||{}).value)||'')}catch(eI){}return __x63EN()};
var __x63OS=x44OtpSend;
x44OtpSend=function(){try{__x63Save(((gid('a-email')||{}).value)||AUTH.email||XAUTH18.email||'')}catch(eJ){}return __x63OS()};
var __x63OC=x44OtpCheck;
x44OtpCheck=function(){
  try{
    var m=__x63Mail();
    if(m){__x63Save(m);return __x63OC()}
    XAUTH18.errs={code:'لم يحفظ بريدك في هذه الجلسة - اضغط (تغيير البريد) واكتب بريدك من جديد ثم اطلب رمزا'};
    AUTH.errs={code:'لم يحفظ بريدك في هذه الجلسة - اضغط (تغيير البريد) واكتب بريدك من جديد ثم اطلب رمزا'};
    try{xSound('error')}catch(eK){}
    try{render()}catch(eL){}
  }catch(eM){}
};
var __x63R=render;
render=function(){
  try{
    if(AUTH&&AUTH.tab==='x44code'&&(!AUTH.email||(''+AUTH.email).indexOf('@')<1)){
      var m=__x63Mail();
      if(m){__x63Save(m)}
    }
  }catch(eN){}
  return __x63R();
};
APP_META.ver='63.0';
APP_META.notes='الإصدار 63 - إصلاح الجذر الحقيقي لرفض الرمز: البريد لم يكن يحفظ بعد إرسال الرمز (شاشة (ارسلنا رمزا سريا الى .) بلا بريد هي الدليل) فكان طلب التحقق يخرج بلا بريد ويرفض الخادم كل رمز مهما كان صحيحا. الآن البريد يحفظ في كل مسارات الإرسال ويسترجع قبل التحقق ويعرض في شاشة الرمز، مع رسالة صادقة إن تعذر استرجاعه دون حرق أي محاولة.';
try{APP_META.lastUpdate='2026-11-04'}catch(eO){}
try{if(APP_META.changelog&&APP_META.changelog.unshift){APP_META.changelog.unshift({ver:'63.0',date:'2026-11-04',notes:'حفظ البريد عند إرسال الرمز - إصلاح رفض كل الرموز الصحيحة'})}}catch(eP){}
}catch(eQ){}
