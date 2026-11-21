/* ===================== طبقة 60.0 - منصة X — إصلاح رمز التحقق نهائيًا: سلسلة أنواع ذكية ===================== */
/* 60.0 بيانات الإصدار */
try{
APP_META.ver='60.0';APP_META.date='2026-11-04';APP_META.lastUpdate='2026-11-04';
APP_META.notes='الإصدار 60 — إصلاح جذري لرمز التحقق: التطبيق يجرّب الرمز بكل الطرق التي يقبلها الخادم (رمز/رابط، بريد/مباشر/تسجيل) حتى ينجح الدخول من أول مرة، ورسائل صادقة عند تجاوز حد الإرسال، وتلميح أوضح: الرمز هو الرقم الكبير في آخر رسالة.';
}catch(eW0){try{APP_META.ver='60.0'}catch(eW0b){}}
try{APP_META.changelog.unshift('الإصدار 60 — سلسلة تحقق ذكية تجرب كل أنواع الرموز تلقائيًا فلا يُرفض رمز صحيح أبدًا، رسالة انتظار صادقة عند كثرة الطلبات، وتلميح أدق للرمز.')}catch(eW1){}

/* 60.أ سلسلة التحقق الذكية: الرمز الصحيح لا يُرفض أبدًا — نجرّب (رمز/بريد) ثم (رمز/مباشر) ثم (رمز/تسجيل) ثم (رقم الرابط/مباشر) ثم (رقم الرابط/تسجيل) */
try{
var __x60OC=x44OtpCheck;
x44OtpCheck=function(){
  var __k=null;
  try{__k=(typeof x52Keys==='function')?x52Keys():null}catch(eK0){}
  if(!__k||!__k.url||!__k.anon){try{return __x60OC()}catch(eK1){}return}
  var oc=null,v='';
  try{
    oc=gid('a-code');
    v=(''+((oc&&oc.value)||''));
    v=v.replace(/[\u0660-\u0669]/g,function(d){return String.fromCharCode(d.charCodeAt(0)-0x0660+48)});
    v=v.replace(/[\u06F0-\u06F9]/g,function(d){return String.fromCharCode(d.charCodeAt(0)-0x06F0+48)});
    v=v.replace(/[\uFF10-\uFF19]/g,function(d){return String.fromCharCode(d.charCodeAt(0)-0xFF10+48)});
    v=v.replace(/\s+/g,'');
  }catch(eK2){}
  try{AUTH.errs={}}catch(eK3){}
  if(v.length<4){try{aErr('code','اكتب رمز التحقق كما وصل إلى بريدك')}catch(eK4){}try{xSound('error')}catch(eK5){}try{render()}catch(eK6){}return}
  var em='';
  try{em=AUTH.email||XAUTH18.email||''}catch(eK7){}
  var tries=[
    {token:v,type:'email',email:em},
    {token:v,type:'magiclink',email:em},
    {token:v,type:'signup',email:em},
    {token_hash:v,type:'magiclink'},
    {token_hash:v,type:'signup'}
  ];
  var url=__k.url+'/auth/v1/verify';
  var hdr={'apikey':__k.anon,'Authorization':'Bearer '+__k.anon,'Content-Type':'application/json'};
  try{AUTH.busy=true;render()}catch(eK8){}
  var idx=0;
  var stopFail=function(msg){
    try{AUTH.busy=false}catch(eF1){}
    try{aErr('top',msg)}catch(eF2){}
    try{xSound('error')}catch(eF3){}
    try{render()}catch(eF4){}
  };
  var stop429=function(){stopFail('⏳ انتظر دقيقة واحدة ثم أعد المحاولة — طلبت رموز كثيرة والإرسال محدود. استعمل الرمز من آخر رسالة فقط.')};
  var ok60=function(j){
    try{AUTH.busy=false}catch(eO1){}
    if(!(j&&j.access_token&&j.user)){return next60()}
    try{USER.session={access_token:j.access_token,refresh_token:j.refresh_token,token_type:(j.token_type||'bearer'),user:j.user}}catch(eO2){}
    try{toast('✅ تم التحقق من بريدك')}catch(eO3){}
    try{x52AfterVerify()}catch(eO4){}
  };
  var next60=function(){
    if(idx>=tries.length){return stopFail('الرمز غير صحيح — انسخ الرقم الكبير من آخر رسالة وصلت فقط (وليس رابطًا ولا رقمًا من رسالة قديمة)، وكل رسالة جديدة تُلغي الرمز السابق. أعد المحاولة أو اطلب رمزًا جديدًا بعد دقيقة.')}
    var t=tries[idx];idx++;
    fetch(url,{method:'POST',headers:hdr,body:JSON.stringify(t)}).then(function(r){
      if(r.status===429){return r.json().catch(function(){return {}}).then(function(){stop429()})}
      if(r.ok){return r.json().then(function(j){ok60(j)}).catch(function(){next60()})}
      return next60();
    }).catch(function(){next60()});
  };
  next60();
};
}catch(eK60){}

/* 60.ب رسالة صادقة عند تجاوز حد إرسال الرموز (في كل مسارات الخطأ القديمة) */
try{
var __x60ET=x52ErrTxt;
x52ErrTxt=function(st,msg){
  try{
    if((''+st)==='429'){return '⏳ انتظر دقيقة واحدة ثم أعد المحاولة — الإرسال محدود لثلاث رسائل في الساعة. استعمل الرمز من آخر رسالة فقط.'}
  }catch(eE1){}
  try{return __x60ET(st,msg)}catch(eE2){return (''+(msg||('HTTP '+st)))}
};
}catch(eE3){}

/* 60.ج تلميح أدق على شاشة الرمز: الرمز هو الرقم الكبير في آخر رسالة */
try{
var __x60R=render;
render=function(){
  try{__x60R()}catch(eR1){}
  try{
    var hd=gid('x58otphint');
    if(hd){hd.innerHTML='📌 الرمز هو <b>الرقم الكبير</b> في <b>آخر رسالة</b> فقط — كل رسالة جديدة تُلغي رموز الرسائل الأقدم.'}
  }catch(eR2){}
};
}catch(eR3){}
