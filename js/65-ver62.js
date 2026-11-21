/* ===================== طبقة 62.0 - منصة X — الرمز الصحيح بأي عدد خانات لا يُرفض أبدًا ===================== */
/* 62.0 بيانات الإصدار */
try{
APP_META.ver='62.0';APP_META.date='2026-11-04';APP_META.lastUpdate='2026-11-04';
APP_META.notes='الإصدار 62 — تحسين سلسلة التحقق: الرمز الرقمي من 4 إلى 10 خانات يُجرّب كرمز بريد أولًا بكل أنواعه ثم كرقم رابط احتياطًا — فلن يُرفض رمز صحيح مهما كان عدد خاناته، مع بقاء الدخول بالرابط والدخول التلقائي من الإصدار 61.';
}catch(eW0){try{APP_META.ver='62.0'}catch(eW0b){}}
try{APP_META.changelog.unshift('الإصدار 62 — الرمز بأي عدد خانات (4-10) يُقبل كرمز بريد أولًا ثم كرقم رابط احتياطًا — لا رفض لرمز صحيح.')}catch(eW1){}

/* 62.أ سلسلة التحقق الشاملة: الرمز أولًا بأي طول رقمي (4-10)، ثم رقم الرابط — وتوقُّف فوري عند حد الإرسال */
try{
var __x62OC=x44OtpCheck;
x44OtpCheck=function(){
  var __k=null;
  try{__k=(typeof x52Keys==='function')?x52Keys():null}catch(eK0){}
  if(!__k||!__k.url||!__k.anon){try{return __x62OC()}catch(eK1){}return}
  var v='';try{v=x61Norm((''+(((gid('a-code')||{}).value)||'')))}catch(eK2){}
  try{AUTH.errs={}}catch(eK3){}
  if(v.length<4){try{aErr('code','اكتب رمز التحقق كما وصل إلى بريدك')}catch(eK4){}try{xSound('error')}catch(eK5){}try{render()}catch(eK6){}return}
  var em='';try{em=AUTH.email||XAUTH18.email||''}catch(eK7){}
  try{X61.keep=v}catch(eK8){}
  var url=__k.url+'/auth/v1/verify';
  var hdr={'apikey':__k.anon,'Authorization':'Bearer '+__k.anon,'Content-Type':'application/json'};
  var isNum=/^[0-9]{4,10}$/.test(v);
  var tries;
  if(isNum){tries=[{token:v,type:'email',email:em},{token:v,type:'magiclink',email:em},{token:v,type:'signup',email:em},{token_hash:v,type:'magiclink'},{token_hash:v,type:'signup'}]}
  else{tries=[{token_hash:v,type:'magiclink'},{token_hash:v,type:'signup'},{token_hash:v,type:'recovery'}]}
  try{AUTH.busy=true;render()}catch(eK9){}
  var idx=0;
  var stopFail=function(msg){try{AUTH.busy=false}catch(eF1){}try{aErr('top',msg)}catch(eF2){}try{xSound('error')}catch(eF3){}try{render()}catch(eF4){}};
  var stop429=function(){stopFail('⏳ انتظر دقيقة واحدة ثم أعد المحاولة — الإرسال والتحقق محدودان من الخدمة. استعمل الرمز من آخر رسالة فقط.')};
  var okFn=function(j){
    if(!(j&&j.access_token&&j.user)){return nextFn()}
    try{x61Sess(__k,j,'✅ تم التحقق من بريدك — أهلًا بك')}catch(eO1){try{x52AfterVerify()}catch(eO2){}}
  };
  var nextFn=function(){
    if(idx>=tries.length){return stopFail('رُفض الرمز من خدمة البريد. تأكد أنه من آخر رسالة فقط (كل رسالة جديدة تُلغي ما قبلها) وانتظر دقيقة عند ظهور رسالة الانتظار. إن كان بريدك يحتوي رابط «تسجيل الدخول» فاضغط «🔗 ادخل برابط الرسالة» أسفل الخانة والصق الرابط كاملًا — يعمل دائمًا.')}
    var t=tries[idx];idx++;
    fetch(url,{method:'POST',headers:hdr,body:JSON.stringify(t)}).then(function(r){
      if(r.status===429){return r.json().catch(function(){return {}}).then(function(){stop429()})}
      if(r.ok){return r.json().then(function(j){okFn(j)}).catch(function(){nextFn()})}
      return nextFn();
    }).catch(function(){nextFn()});
  };
  nextFn();
};
}catch(eK62){}
