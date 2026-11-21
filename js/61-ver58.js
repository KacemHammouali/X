/* ===================== طبقة 58.0 - منصة X — إصلاح جذري للتنقل وزر الرجوع ===================== */
/* 58.0 بيانات الإصدار */
try{
APP_META.ver='58.0';APP_META.date='2026-11-04';APP_META.lastUpdate='2026-11-04';
APP_META.notes='الإصدار 58 — إصلاح جذري للتنقل وزر الرجوع: كل حركة في التطبيق تسجل مدخل تاريخ واحدًا فقط (كانت تسجل مدخلين فتستنزف ذاكرة الرجوع بضعف السرعة ويظهر إشعار الخروج أثناء التنقل بين التبويبات وترجعك الرئيسية عند فتح درس بعد رجوع سريع)، والضغط السريع المتكرر على زر الرجوع يصبح خطوة واحدة فقط، وشاشة رمز التحقق تقبل الأرقام العربية والإنجليزية معًا مع إرشاد واضح أن الرمز يؤخذ من آخر رسالة فقط.';
}catch(eW0){try{APP_META.ver='58.0'}catch(eW0b){}}
try{APP_META.changelog.unshift('الإصدار 58 — إصلاح جذري للتنقل وزر الرجوع وتقوية شاشة رمز التحقق.')}catch(eW1){}
try{
fallbackNews18=function(){
  return [{title:'الإصدار 58.0 — إصلاح جذري للتنقل والرجوع',
    body:'كل حركة تسجل مدخلًا واحدًا فذاكرة الرجوع لا تُستنزف أبدًا، والضغط السريع على زر الرجوع خطوة واحدة فقط، وشاشة الرمز تقبل الأرقام العربية والإنجليزية مع إرشاد أخذ الرمز من آخر رسالة.',
    date:APP_META.date}];
};
}catch(eW2){}
/* 58.أ تنقل موحد: مدخل تاريخ واحد لكل حركة — يلغي تداخل الهاش مع ذاكرة الرجوع نهائيًا
   (في 57 وما قبلها كانت كل نقرة تنشئ مدخلين: مدخل هاش حقيقي + مدخل ظل، فتستنزف الذاكرة
   بضعف السرعة ويظهر إشعار «اضغط للخروج» أثناء التنقل، وقد تبتلع ضغطة الدرس التالية). */
try{
navigate=function(page,subject,chapter){
  var want={page:page,subject:subject||null,chapter:chapter||null};
  try{
    if((want.page==='lesson'||want.page==='quiz')&&!findChapter(want.subject||'',want.chapter||'')){want={page:'home',subject:null,chapter:null}}
  }catch(eN1){}
  X30_HASH=want;
  try{render()}catch(eN2){}
  try{history.replaceState(null,'',x57Hash(want))}catch(eN3){}
};
}catch(eN4){}
/* 58.ب زر الرجوع: الضغط السريع المتكرر = خطوة واحدة فقط (كان يستنزف ذاكرة الرجوع) */
var X58_BT=0;
try{
x41Back=function(){
  try{
    var now=+new Date();
    if(now-X58_BT<300){return}
    X58_BT=now;
  }catch(eB1){}
  try{x57Back()}catch(eB2){}
};
}catch(eB3){}
/* 58.ج شاشة رمز التحقق: قبول الأرقام العربية والفارسية والكاملة بتحويلها إلى إنجليزية قبل الإرسال
   + خصائص الإدخال (نمط رقمي + الإكمال التلقائي للرمز) + إرشاد ثابت: الرمز من آخر رسالة فقط */
try{
var __x58R=render;
render=function(){
  __x58R();
  try{
    var oc=gid('a-code');
    if(oc){
      try{oc.setAttribute('maxlength','10')}catch(eL1){}
      try{oc.maxLength=10}catch(eL2){}
      try{oc.setAttribute('pattern','[0-9]*')}catch(eL3){}
      try{oc.setAttribute('inputmode','numeric')}catch(eL4){}
      try{oc.setAttribute('autocomplete','one-time-code')}catch(eL5){}
      try{oc.setAttribute('placeholder','••••••••••')}catch(eL6){}
      try{
        if(!gid('x58otphint')&&oc.parentNode&&oc.parentNode.parentNode){
          var hd=document.createElement('div');
          hd.id='x58otphint';
          hd.className='auth-note';
          hd.setAttribute('dir','rtl');
          hd.innerHTML='📌 اكتب الرمز من <b>آخر رسالة</b> وصلت فقط — كل رسالة جديدة تُلغي رموز الرسائل الأقدم، وفتح الرابط داخل الرسالة يُلغي الرمز أيضًا.';
          try{oc.parentNode.parentNode.insertBefore(hd,oc.parentNode.nextSibling)}catch(eL7){}
        }
      }catch(eL8){}
    }
  }catch(eL9){}
};
}catch(eL10){}
/* 58.د التحقق: تحويل أي أرقام غير إنجليزية كتبها المستخدم قبل الإرسال إلى الخادم */
try{
var __x58OC=x44OtpCheck;
x44OtpCheck=function(){
  try{
    var oc=gid('a-code');
    if(oc){
      var v=''+(oc.value||'');
      v=v.replace(/[\u0660-\u0669]/g,function(d){return String.fromCharCode(d.charCodeAt(0)-0x0660+48)});
      v=v.replace(/[\u06F0-\u06F9]/g,function(d){return String.fromCharCode(d.charCodeAt(0)-0x06F0+48)});
      v=v.replace(/[\uFF10-\uFF19]/g,function(d){return String.fromCharCode(d.charCodeAt(0)-0xFF10+48)});
      v=v.replace(/\s+/g,'');
      try{oc.value=v}catch(eV1){}
    }
  }catch(eV2){}
  return __x58OC();
};
}catch(eV3){}
/* 58.هـ رسالة خطأ الرمز: واضحة وصادقة — بدل الإرشاد الطويل القديم */
try{
var __x58ET=x52ErrTxt;
x52ErrTxt=function(st,msg){
  try{
    if((''+st)==='400'||(''+st)==='401'){
      return 'الرمز غير صحيح — انسخ الرمز من آخر رسالة وصلت فقط، ولا تفتح الرابط قبل إدخاله. أعد المحاولة أو اطلب رمزًا جديدًا من زر إعادة الإرسال.';
    }
  }catch(eE1){}
  try{return __x58ET(st,msg)}catch(eE2){return (''+(msg||('HTTP '+st)))}
};
}catch(eE3){}
