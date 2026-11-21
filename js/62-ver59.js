/* ===================== طبقة 59.0 - منصة X — تسجيل من 3 خطوات + رمز أذكى + إصلاح التكبير والتباين ===================== */
/* 59.0 بيانات الإصدار */
try{
APP_META.ver='59.0';APP_META.date='2026-11-04';APP_META.lastUpdate='2026-11-04';
APP_META.notes='الإصدار 59 — التسجيل ثلاث خطوات واضحة: البريد ثم رمز التحقق ثم معلوماتك وتصل مباشرة إلى حساب الإدارة، ومحاولة تلقائية ذكية للرموز الطويلة المأخوذة من رابط الرسالة، وزر تكبير النصوص يتحكم فعليًا في تقريب الإصبعين، وزيادة التباين لم تعد تشوه خلفيات صور المعرض.';
}catch(eW0){try{APP_META.ver='59.0'}catch(eW0b){}}
try{APP_META.changelog.unshift('الإصدار 59 — تسجيل من ثلاث خطوات مع وصول معلومات المستخدم لحساب الإدارة مباشرة، تجربة الرمز من رابط الرسالة تلقائيًا، إصلاح زر تكبير النصوص، وعدم تشويه خلفيات الصور عند زيادة التباين.')}catch(eW1){}

/* 59.أ التسجيل 3 خطوات: البريد 1 من 3، الرمز 2 من 3، المعلومات 3 من 3 (كانت الشاشات القديمة تقول "من 2") */
try{
var __x59AW=authWrap;
authWrap=function(inner,step,total){
  try{
    if((''+total)==='2'){
      var st=step;
      if((''+step)==='1'){st=1}
      else if((''+step)==='2'){st=((typeof AUTH!=='undefined')&&(AUTH.tab==='x44code'))?2:3}
      return __x59AW(inner,st,3);
    }
  }catch(eA1){}
  return __x59AW(inner,step,total);
};
}catch(eA2){}

/* 59.ب بعد نجاح التحقق: إن لم يكن للطالب ملف بعد (أو جدول الملفات غير منشأ بعد) نفتح الخطوة 3 المعلومات بلا رسائل مخيفة */
try{
loadUserProfile=function(redirect){
  if(!SB||!SB.ready||!USER.session){try{render()}catch(eL1){}return}
  var uid=(USER.session.user&&USER.session.user.id)||'';
  SB.client.from('profiles').select('*').eq('id',uid).maybeSingle().then(function(r){
    var d=null;
    try{if(!(r&&r.error)&&r.data){d=r.data}}catch(eL2){}
    if(!d){
      try{USER.profile=null}catch(eL3){}
      try{AUTH.form.fn='';AUTH.tab='profile'}catch(eL4){}
      try{XAUTH18.step=2;XAUTH18.prefilled=false}catch(eL5){}
      try{toast('📝 أكمل ملفك الشخصي — الخطوة 3 من 3')}catch(eL6){}
      try{navigate('auth')}catch(eL7){try{render()}catch(eL8){}}
      return;
    }
    USER.profile=d;
    try{AUTH.form={fn:d.first_name||'',ln:d.last_name||'',by:(d.birth_year||'')+'',level:d.level||'ثانوي',year:d.study_year||'',branch:d.branch||'',gender:d.gender||''}}catch(eL9){}
    try{XAUTH18.form={fn:d.first_name||'',ln:d.last_name||'',by:((d.birth_year||'')+''),year:d.study_year||'',branch:d.branch||'',gender:d.gender||'',wilaya:(d.wilaya||''),phone:(d.phone||'')}}catch(eL10){}
    try{loadXCFG();applyXCFG()}catch(eL11){}
    try{xPull(uid)}catch(eL12){}
    if(redirect){try{navigate('home')}catch(eL13){}}else{try{render()}catch(eL14){}}
  }).catch(function(e){
    try{AUTH.tab='profile';XAUTH18.step=2}catch(eC1){}
    try{toast('📝 أكمل ملفك الشخصي — الخطوة 3 من 3')}catch(eC2){}
    try{navigate('auth')}catch(eC3){try{render()}catch(eC4){}}
  });
};
}catch(eL15){}

/* 59.ج الخطوة 3 المعلومات: الحفظ يصل مباشرة إلى حساب الإدارة (جدول profiles) — وبلا جلسة يعمل السلوك القديم */
try{
var __x59Upsert=function(row){
  return SB.client.from('profiles').upsert(row).then(function(r){return !(r&&r.error)}).catch(function(){return false});
};
x18FormNext=function(){
  x18CollectForm();
  var f=XAUTH18.form,editing=!!(USER.session&&USER.profile);
  XAUTH18.errs={};
  if(!f.fn.trim())XAUTH18.errs.fn='اكتب اسمك';
  if(!f.ln.trim())XAUTH18.errs.ln='اكتب لقبك';
  if(!f.year)XAUTH18.errs.year='اختر السنة الدراسية';
  if(!f.branch)XAUTH18.errs.branch='اختر الشعبة';
  XAUTH18.consent=!!((gid('x18-consent')||{}).checked);
  if(!XAUTH18.consent)XAUTH18.errs.consent='يلزم الموافقة على سياسة الخصوصية';
  if(XAUTH18.errs.fn||XAUTH18.errs.ln||XAUTH18.errs.year||XAUTH18.errs.branch||XAUTH18.errs.consent){try{xSound('error')}catch(eS1){}try{render()}catch(eS2){}return}
  var hasSession=!!(USER.session&&USER.session.user&&USER.session.user.id);
  if(hasSession&&SB&&SB.ready&&SB.client){
    var u=USER.session.user;
    var row={id:u.id,email:(u.email||XAUTH18.email||''),first_name:f.fn.trim(),last_name:f.ln.trim(),
      birth_year:(f.by?parseInt(f.by,10):null),level:(f.level||'ثانوي'),study_year:f.year,branch:f.branch,
      gender:(f.gender||null),avatar_url:((USER.profile&&USER.profile.avatar_url)||''),role:'student'};
    AUTH.busy=true;try{render()}catch(eS3){}
    __x59Upsert(row).then(function(ok){
      AUTH.busy=false;
      try{stSet('x18_user',{email:(u.email||XAUTH18.email||''),profile:x18ProfileFromForm()})}catch(eS4){}
      if(ok){
        try{USER.profile=x18ProfileFromForm()}catch(eS5){}
        try{xSound('success')}catch(eS6){}
        try{toast('🎉 وصلت معلوماتك إلى حساب الإدارة — أهلًا بك في منصة X!')}catch(eS7){}
        if(editing){try{navigate('profile')}catch(eS8){}}else{try{loadUserProfile(true)}catch(eS9){}}
      }else{
        try{toast('⚠️ تعذر إرسال البيانات للخادم الآن — معلوماتك محفوظة على جهازك، جرّب لاحقًا من صفحتي')}catch(eS10){}
        try{navigate('home')}catch(eS11){}
      }
    });
    return;
  }
  if(editing){
    var p=x18ProfileFromForm();
    try{x18SaveUser(p)}catch(eS12){};
    try{xSound('success')}catch(eS13){};try{toast('✅ تم حفظ تعديلاتك')}catch(eS14){};
    try{navigate('profile')}catch(eS15){}
    return;
  }
  var em=XAUTH18.email;
  var url=x18Mailto('تسجيل مستخدم جديد — '+f.fn+' '+f.ln,x18RegBody(f,em));
  try{x18SaveUser(x18ProfileFromForm())}catch(eS16){};
  XAUTH18.prefilled=true;
  if(url){try{x18SendMail(url)}catch(eS17){}}
  try{xSound('success')}catch(eS18){};
  try{toast('📩 فُتح تطبيق البريد لديك لإرسال بياناتك إلى إدارة المنصة — أكمل الإرسال من هناك، وأهلًا بك في منصة X!')}catch(eS19){};
  try{navigate('home')}catch(eS20){}
};
}catch(eS21){}

/* 59.د نص بطاقة المعلومات: بدل «تُرسل إلى بريد الإدارة» (زمن البريد) تصل مباشرة إلى حساب الإدارة */
try{
var __x59FC=x18FormCard;
x18FormCard=function(){
  var h='';
  try{h=__x59FC()}catch(eT1){return ''}
  try{h=(''+h).split('تُرسل بيانات التسجيل إلى بريد إدارة المنصة').join('تصل معلوماتك مباشرة إلى حساب إدارة المنصة')}catch(eT2){}
  return h;
};
}catch(eT3){}

/* 59.هـ الرمز الذكي: إذا أدخل الطالب رقمًا طويلًا (7 خانات أو أكثر) فهو غالبًا الرقم الموجود في رابط الرسالة — نجرّبه تلقائيًا كرمز رابط قبل رفضه */
try{
var __x59OC=x44OtpCheck;
var __x59HashFail=function(){try{AUTH.busy=false;render()}catch(eF1){}try{return __x59OC()}catch(eF2){}};
var __x59HashOk=function(j){
  AUTH.busy=false;
  if(j&&j.access_token&&j.user){
    USER.session={access_token:j.access_token,refresh_token:j.refresh_token,token_type:(j.token_type||'bearer'),user:j.user};
    try{toast('✅ تم التحقق من بريدك')}catch(eH2){}
    try{x52AfterVerify()}catch(eH3){}
  }else{try{return __x59OC()}catch(eH4){}}
};
x44OtpCheck=function(){
  try{
    var oc=gid('a-code');var v=(''+((oc&&oc.value)||'')).replace(/\s+/g,'');
    if(v.length>=7){
      var k=(typeof x52Keys==='function')?x52Keys():null;
      if(k&&k.url&&k.anon){
        AUTH.errs={};AUTH.busy=true;try{render()}catch(eH1){}
        var url=k.url+'/auth/v1/verify';
        var hdr={'apikey':k.anon,'Authorization':'Bearer '+k.anon,'Content-Type':'application/json'};
        fetch(url,{method:'POST',headers:hdr,body:JSON.stringify({token_hash:v,type:'magiclink'})}).then(function(r){
          if(r.ok){return r.json().then(function(j){__x59HashOk(j)}).catch(function(){return __x59HashFail()})}
          return fetch(url,{method:'POST',headers:hdr,body:JSON.stringify({token_hash:v,type:'signup'})}).then(function(r2){
            if(r2.ok){return r2.json().then(function(j2){__x59HashOk(j2)}).catch(function(){return __x59HashFail()})}
            return __x59HashFail();
          });
        }).catch(function(){return __x59HashFail()});
        return;
      }
    }
  }catch(eH8){}
  try{return __x59OC()}catch(eH9){}
};
}catch(eH10){}

/* 59.و زر تكبير النصوص يتحكم فعليًا في تقريب الإصبعين: مفعل = التقريب مسموح، معطل = ممنوع */
try{
var __x59SyncHc=function(){
  try{
    var eff=x48EffTheme();
    var img=(typeof x54BgResolve==='function')?x54BgResolve(eff):'';
    var b=document.body;
    if(b&&b.classList){
      if(XCFG&&XCFG.contrast===true&&img){try{b.classList.add('x59-hcphoto')}catch(e1){}}
      else{try{b.classList.remove('x59-hcphoto')}catch(e2){}}
    }
  }catch(e3){}
};
var __x59ZoomMeta=function(){
  try{
    var on=!!(XCFG&&(XCFG.font==='l'));
    var ms=(document.querySelectorAll?document.querySelectorAll('meta[name=viewport]'):[]);
    if(!ms||!ms.length){return}
    var c='width=device-width, initial-scale=1.0, viewport-fit=cover'+(on?', user-scalable=yes':', user-scalable=no, maximum-scale=1.0');
    try{ms[0].setAttribute('content',c)}catch(eZ1){}
  }catch(eZ2){}
};
var __x59AV=applyXCFG;
applyXCFG=function(){
  try{__x59AV()}catch(eZ3){}
  try{__x59ZoomMeta()}catch(eZ4){}
  try{__x59SyncHc()}catch(eZ5){}
};
var __x59BGA=x54BgApply;
x54BgApply=function(){
  var r='';
  try{r=__x59BGA()}catch(eG1){}
  try{__x59SyncHc()}catch(eG2){}
  return r;
};
}catch(eZ6){}

/* 59.ز زيادة التباين مع خلفية صورة من المعرض: لا نمرر مرشح التباين على الصورة حتى لا تتشوه — يبقى التباين على النصوص والواجهة فقط */
try{
var stN=document.createElement('style');stN.id='x59style';
(document.head||document.documentElement).appendChild(stN);
stN.textContent='body.x48-hc.x59-hcphoto{filter:none!important}'+
'body.x48-hc .fld span,body.x48-hc .auth-note{font-weight:600}';
}catch(eZ8){}
try{if(typeof __x59ZoomMeta==='function'){__x59ZoomMeta()}}catch(eZ9){}
try{if(typeof __x59SyncHc==='function'){__x59SyncHc()}}catch(eZ10){}
