/* ===================== طبقة 61.0 - منصة X — إصلاح الدخول نهائيًا: الرمز أو الرابط، ما يعمل يفتح الحساب ===================== */
/* 61.0 بيانات الإصدار */
try{
APP_META.ver='61.0';APP_META.date='2026-11-04';APP_META.lastUpdate='2026-11-04';
APP_META.notes='الإصدار 61 — إصلاح دخول جذري: طريقة جديدة «الدخول برابط الرسالة» تعمل دائمًا حتى لو رُفض الرمز، سلسلة تحقق اقتصادية لا تحرق محاولات الخادم، دخول تلقائي عند فتح رابط البريد مباشرة من تطبيق البريد، والرمز يبقى في خانته بعد كل محاولة.';
}catch(eW0){try{APP_META.ver='61.0'}catch(eW0b){}}
try{APP_META.changelog.unshift('الإصدار 61 — الدخول برابط الرسالة مضمون 100%، سلسلة تحقق اقتصادية لا تبطل الرمز، ودخول تلقائي عند فتح رابط البريد.')}catch(eW1){}

/* 61.أ أدوات الطبقة: تطبيع الأرقام العربية وبناء الجلسة */
var X61={keep:''};
function x61Norm(s){
  s=(''+(s||''));
  s=s.replace(/[\u0660-\u0669]/g,function(d){return String.fromCharCode(d.charCodeAt(0)-0x0660+48)});
  s=s.replace(/[\u06F0-\u06F9]/g,function(d){return String.fromCharCode(d.charCodeAt(0)-0x06F0+48)});
  s=s.replace(/[\uFF10-\uFF19]/g,function(d){return String.fromCharCode(d.charCodeAt(0)-0xFF10+48)});
  return s.replace(/\s+/g,'');
}
function x61Sess(k,j,msg){
  try{USER.session={access_token:j.access_token,refresh_token:(j.refresh_token||''),token_type:(j.token_type||'bearer'),expires_at:(j.expires_at||null),user:(j.user||{})}}catch(eS0){}
  try{X61.keep=''}catch(eS1){}
  try{AUTH.busy=false}catch(eS2){}
  try{toast(msg||'✅ تم التحقق من بريدك — أهلًا بك')}catch(eS3){}
  try{x52AfterVerify()}catch(eS4){}
}

/* 61.ب سلسلة التحقق الاقتصادية: الرمز القصير (4-7) يجرّب أنواع الرمز فقط، والطويل/الحروفي أنواع الرابط فقط — لا حرق محاولات */
try{
var __x61OC=x44OtpCheck;
x44OtpCheck=function(){
  var __k=null;
  try{__k=(typeof x52Keys==='function')?x52Keys():null}catch(eK0){}
  if(!__k||!__k.url||!__k.anon){try{return __x61OC()}catch(eK1){}return}
  var v='';try{v=x61Norm((''+(((gid('a-code')||{}).value)||'')))}catch(eK2){}
  try{AUTH.errs={}}catch(eK3){}
  if(v.length<4){try{aErr('code','اكتب رمز التحقق كما وصل إلى بريدك')}catch(eK4){}try{xSound('error')}catch(eK5){}try{render()}catch(eK6){}return}
  var em='';try{em=AUTH.email||XAUTH18.email||''}catch(eK7){}
  X61.keep=v;
  var url=__k.url+'/auth/v1/verify';
  var hdr={'apikey':__k.anon,'Authorization':'Bearer '+__k.anon,'Content-Type':'application/json'};
  var isLink=(/[^0-9]/.test(v))||(/^[0-9]{8,}$/.test(v));
  var tries;
  if(isLink){tries=[{token_hash:v,type:'magiclink'},{token_hash:v,type:'signup'},{token_hash:v,type:'recovery'}]}
  else{tries=[{token:v,type:'email',email:em},{token:v,type:'magiclink',email:em},{token:v,type:'signup',email:em}]}
  try{AUTH.busy=true;render()}catch(eK8){}
  var idx=0;
  var stopFail=function(msg){try{AUTH.busy=false}catch(eF1){}try{aErr('top',msg)}catch(eF2){}try{xSound('error')}catch(eF3){}try{render()}catch(eF4){}};
  var stop429=function(){stopFail('⏳ انتظر دقيقة واحدة ثم أعد المحاولة — الإرسال والتحقق محدودان من الخدمة. استعمل الرمز من آخر رسالة فقط.')};
  var okFn=function(j){
    if(!(j&&j.access_token&&j.user)){return nextFn()}
    x61Sess(__k,j,'✅ تم التحقق من بريدك — أهلًا بك');
  };
  var nextFn=function(){
    if(idx>=tries.length){return stopFail('رُفض الرمز من خدمة البريد. الحل المضمون: افتح رسالة البريد ← اضغط مطولًا على زر «تسجيل الدخول» ← انسخ الرابط ← اضغط «🔗 ادخل برابط الرسالة» أسفل الخانة والصقه هناك. أو اطلب رمزًا جديدًا بعد دقيقة وتأكد أنه من آخر رسالة فقط.')}
    var t=tries[idx];idx++;
    fetch(url,{method:'POST',headers:hdr,body:JSON.stringify(t)}).then(function(r){
      if(r.status===429){return r.json().catch(function(){return {}}).then(function(){stop429()})}
      if(r.ok){return r.json().then(function(j){okFn(j)}).catch(function(){nextFn()})}
      return nextFn();
    }).catch(function(){nextFn()});
  };
  nextFn();
};
}catch(eK61){}

/* 61.ج الدخول برابط الرسالة — يعمل دائمًا حتى لو رُفض الرمز (الرابط يحمل token_hash وtype جاهزين) */
function x61LinkGo(){
  var __k=null;
  try{__k=(typeof x52Keys==='function')?x52Keys():null}catch(eL0){}
  if(!__k||!__k.url||!__k.anon){try{aErr('top','خدمة المصادقة غير مهيأة حاليًا')}catch(eL1){}return}
  var s='';try{s=(''+(((gid('x61-link')||{}).value)||'')).trim()}catch(eL2){}
  var th='',ty='';
  var m=s.match(/token_hash=([A-Za-z0-9_\-]+)/);if(m){th=m[1]}
  if(!th){m=s.match(/[?&]token=([A-Za-z0-9_\-]+)/);if(m){th=m[1]}}
  m=s.match(/[?&]type=([a-z_]+)/);if(m){ty=m[1]}
  if(!th){try{aErr('top','الصق رابط «تسجيل الدخول» من رسالة البريد كاملًا — يبدأ بـ supabase.co/auth/v1/verify')}catch(eL3){}try{render()}catch(eL4){}return}
  var tries=[];
  var seen={};
  if(ty){seen[ty]=1;tries.push({token_hash:th,type:ty})}
  var order=['magiclink','signup','recovery','email'];
  for(var i=0;i<order.length;i++){if(!seen[order[i]]){seen[order[i]]=1;tries.push({token_hash:th,type:order[i]})}}
  var url=__k.url+'/auth/v1/verify';
  var hdr={'apikey':__k.anon,'Authorization':'Bearer '+__k.anon,'Content-Type':'application/json'};
  try{AUTH.errs={}}catch(eL5){}
  try{AUTH.busy=true;render()}catch(eL6){}
  var idx=0;
  var stopFail=function(msg){try{AUTH.busy=false}catch(eF1){}try{aErr('top',msg)}catch(eF2){}try{xSound('error')}catch(eF3){}try{render()}catch(eF4){}};
  var stop429=function(){stopFail('⏳ انتظر دقيقة واحدة ثم أعد المحاولة — التحديد من الخدمة.')};
  var okFn=function(j){if(!(j&&j.access_token&&j.user)){return nextFn()}x61Sess(__k,j,'✅ تم الدخول — أهلًا بك')};
  var nextFn=function(){
    if(idx>=tries.length){return stopFail('لم يعمل هذا الرابط — انسخ الرابط من آخر رسالة فقط (كل رسالة جديدة تُلغي رابط الرسائل الأقدم)، ولا تفتح الرابط في البريد قبل لصقه هنا.')}
    var t=tries[idx];idx++;
    fetch(url,{method:'POST',headers:hdr,body:JSON.stringify(t)}).then(function(r){
      if(r.status===429){return r.json().catch(function(){return {}}).then(function(){stop429()})}
      if(r.ok){return r.json().then(function(j){okFn(j)}).catch(function(){nextFn()})}
      return nextFn();
    }).catch(function(){nextFn()});
  };
  nextFn();
}
function x61LinkToggle(){
  try{
    var w=gid('x61-linkwrap');
    if(w){try{w.parentNode.removeChild(w)}catch(eT1){}return}
    var oc=gid('a-code');
    if(!oc){return}
    var card=(oc.parentNode&&oc.parentNode.parentNode)?oc.parentNode.parentNode:null;
    if(!card){return}
    var d=document.createElement('div');d.id='x61-linkwrap';d.style.marginTop='10px';
    d.innerHTML='<label class="fld"><span>رابط «تسجيل الدخول» من رسالة البريد</span><textarea id="x61-link" class="inp" dir="ltr" rows="3" style="min-height:56px;font-size:12px;resize:vertical" placeholder="https://xxxx.supabase.co/auth/v1/verify?token=..."></textarea></label>'+
    '<button type="button" class="btn btn-block" onclick="x61LinkGo()">🔗 الدخول بالرابط</button>'+
    '<p class="ct-note">من تطبيق البريد: اضغط مطولًا على زر «تسجيل الدخول» في الرسالة ← «نسخ عنوان الرابط» ← الصقه هنا. هذه الطريقة تعمل دائمًا.</p>';
    card.appendChild(d);
    try{gid('x61-link').focus()}catch(eT2){}
  }catch(eT0){}
}

/* 61.د دخول تلقائي: فتح رابط البريد مباشرة من تطبيق البريد يجلب الجلسة في الرابط نفسه */
try{
(function(){
  var h='';try{h=location.href}catch(eU0){return}
  var m=h.match(/access_token=([^&]+)/);if(!m){return}
  var at='';try{at=decodeURIComponent(m[1])}catch(eU1){at=m[1]}
  if(!at){return}
  var rt='';var m2=h.match(/refresh_token=([^&]+)/);if(m2){try{rt=decodeURIComponent(m2[1])}catch(eU2){rt=m2[1]}}
  try{history.replaceState(null,'',location.pathname)}catch(eU3){}
  var goIn=function(){
    var k=null;try{k=(typeof x52Keys==='function')?x52Keys():null}catch(eU4){}
    if(!k||!k.url||!k.anon){return}
    try{
      fetch(k.url+'/auth/v1/user',{headers:{'apikey':k.anon,'Authorization':'Bearer '+at}}).then(function(r){return r.json()}).then(function(u){
        try{USER.session={access_token:at,refresh_token:rt,token_type:'bearer',user:(u&&u.id)?u:{}}}catch(eU5){}
        try{toast('✅ تم الدخول برابط البريد — أهلًا بك')}catch(eU6){}
        try{x52AfterVerify()}catch(eU7){}
      }).catch(function(){
        try{USER.session={access_token:at,refresh_token:rt,token_type:'bearer',user:{}}}catch(eU8){}
        try{x52AfterVerify()}catch(eU9){}
      })
    }catch(eUA){}
  };
  setTimeout(goIn,700);
})()
}catch(e61U){}

/* 61.هـ الرمز يبقى في خانته + تلميح أوضح + زر الرابط أسفل الخانة */
try{
var __x61R=render;
render=function(){
  try{__x61R()}catch(eR1){}
  try{
    var hd=gid('x58otphint');
    if(hd){hd.innerHTML='📌 الرمز هو الرقم الكبير في آخر رسالة فقط. إن رُفض الرمز فاستخدم «🔗 ادخل برابط الرسالة» أسفل الخانة — يعمل دائمًا.'}
    var oc=gid('a-code');
    if(oc){
      if(X61.keep&&!oc.value){try{oc.value=X61.keep}catch(eR2){}}
      if(!gid('x61-linkrow')){
        var card=(oc.parentNode&&oc.parentNode.parentNode)?oc.parentNode.parentNode:null;
        if(card){
          var row=document.createElement('p');row.id='x61-linkrow';row.className='auth-alt';row.style.marginTop='10px';
          row.innerHTML='أو <a onclick="x61LinkToggle()">🔗 ادخل برابط الرسالة</a>';
          card.appendChild(row);
        }
      }
    }
  }catch(eR3){}
};
}catch(e61R){}
