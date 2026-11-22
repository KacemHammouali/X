/* ================================================================
   منصة X التعليمية — طبقة الإصدار 116.0 (js/109k-ver116.js)
   © 2026 مؤسسة X.HAK (HAMMOUALI Kacem)
   116.أ — محرك التسجيل المباشر: إرسال الرمز بلا اعتماد على أي مكتبة
           خارجية، مع جرعة إعادة محاولة ذكية وتشخيص صادق للسبب الحقيقي.
   116.ب — جلوس الجلسة: الجلسة تُحفظ وتُستعاد تلقائيًا بعد كل إعادة فتح.
   116.ج — إعادة رسم أيقونات المنصة بمستوى التطبيقات العالمية.
   116.د — سلّم طباعي كامل + هوية علوية موحدة + تلميع شاشة الدخول.
   ES5 فقط — آخر تعريف للدالة يفوز — لا مساس بالوظائف أو المفاتيح.
   ================================================================ */
;(function(){
'use strict';

/* ---------- بيانات الإصدار ---------- */
try{
APP_META.ver='116.0';APP_META.date='2026-11-22';APP_META.lastUpdate='2026-11-22';
APP_META.notes='الإصدار 116 — محرك تسجيل مباشر بلا أي مكتبة خارجية: زر المتابعة يرسل الرمز من التطبيق مباشرة إلى خدمة التحقق مع إعادات محاولة ذكية ورسالة صادقة عن السبب الحقيقي عند أي فشل، ودخول فوري بدون رمز إن كان وضع التأكيد التلقائي مفعّلًا عندك، وجلسة تُستعاد وحدها بعد كل إغلاق وفتح. معه: أيقونات مرسومة يدويًا بمستوى إنستغرام وتيليجرام، سلّم طباعي كامل، وهوية علوية موحدة.';
}catch(eM0){try{APP_META.ver='116.0'}catch(eM0b){}}
try{
if(APP_META.changelog&&APP_META.changelog.unshift){
  var has116=false;for(var ci=0;ci<APP_META.changelog.length;ci++){try{if((''+(APP_META.changelog[ci].ver||''))==='116.0'){has116=true;break}}catch(ec0){}}
  if(!has116){APP_META.changelog.unshift({ver:'116.0',date:'2026-11-22',notes:'محرك تسجيل مباشر بلا مكتبات + أيقونات مرسومة + سلّم طباعي وهوية علوية'});}
}
}catch(eM1){}

function fallbackNews18(){
  return [{title:'الإصدار 116 — محرك التسجيل المباشر + الأيقونات العالمية',
    body:'زر المتابعة يرسل الرمز مباشرة بلا وسطاء مع رسائل تقول السبب الحقيقي عند أي فشل، ودخول فوري إن كان التأكيد التلقائي مفعّلًا، وجلسة تستعاد وحدها. أيقونات مرسومة يدويًا وسلّم طباعي كامل وهوية علوية موحدة.',
    date:APP_META.date}];
}
try{window.fallbackNews18=fallbackNews18}catch(eM2){}

/* ================================================================
   116.أ محرك الإرسال المباشر — يعيد تعريف x52SendOtp (القناة الفعالة)
   ================================================================ */
var X116={retry:0,last:null};
try{window.X116=X116}catch(eA0){}

function x116ErrTxt(st,msg){
  msg=(''+(msg||''));
  try{
    if(st===429){return '⏳ طلبت رموزًا كثيرة — انتظر دقيقة واحدة ثم أعد المحاولة. استعمل رمز آخر رسالة فقط.'}
    if(st===422){
      if(/rate|limit/i.test(msg)){return '⏳ محاولات كثيرة — انتظر دقيقة ثم أعد.'}
      return '✉️ تحقق من كتابة البريد بشكل صحيح ثم أعد المحاولة';
    }
    if(st===400||st===401){
      if(/invalid/i.test(msg)&&/mail/i.test(msg)){return '✉️ البريد غير صالح — اكتبه كاملًا بشكل صحيح'}
      return '🔑 الخدمة رفضت الطلب ('+st+') — إن تكرر راسل الإدارة';
    }
    if(st===403){
      if(/signups|not allowed/i.test(msg)){return '⛔ التسجيل الجديد معطّل في لوحة السحابة — فعّل «Allow new users» من لوحة Supabase'}
      if(/captcha/i.test(msg)){return '🤖 الحماية (captcha) مفعّلة في لوحة السحابة — عطّلها من Authentication لإرسال الرمز'}
      return '⛔ الخدمة منعت الطلب (403) — إن تكرر راسل الإدارة';
    }
    if(st===500||st===501){
      if(/mail|smtp|send/i.test(msg)){return '📮 المستخدم أُنشئ لكن رسالة الرمز فشل إرسالها من قناة البريد — اطلب رمزًا بعد دقيقة أو استعمل «ادخل برابط الرسالة»'}
      return '☁️ خطأ داخلي في السحابة (500) — أعد المحاولة بعد لحظات';
    }
    if(st===502||st===503||st===504){return '☁️ السحابة تستيقظ من السبات — نعيد المحاولة تلقائيًا'}
  }catch(eA1){}
  if(/mail|smtp|send/i.test(msg)){return '📮 تعذر إرسال رسالة الرمز من قناة البريد — أعد المحاولة بعد دقيقة'}
  return (''+(msg||('HTTP '+st)));
}

function x116Post(path,body,bearer){
  var k=x52Keys();
  if(!k){return Promise.reject({code:'nokeys'})}
  var url=k.url+path;
  var tok=bearer||k.anon;
  return fetch(url,{
    method:'POST',
    headers:{'apikey':k.anon,'Authorization':'Bearer '+tok,'Content-Type':'application/json','Cache-Control':'no-store'},
    body:JSON.stringify(body||{}),
    cache:'no-store'
  }).then(function(r){
    return r.json().catch(function(){return {}}).then(function(j){
      return {ok:r.ok,status:r.status,json:j};
    });
  },function(e){
    throw {code:'network',message:(e&&e.message)||'',name:(e&&e.name)||''};
  });
}

function x116Health(){
  var k=x52Keys();
  if(!k){return Promise.resolve(false)}
  try{
    return fetch(k.url+'/auth/v1/health?apikey='+encodeURIComponent(k.anon),{method:'GET',cache:'no-store'})
      .then(function(r){return !!r.ok})
      .catch(function(){return false});
  }catch(eA2){return Promise.resolve(false)}
}

/* القناة الجديدة: إرسال رمز التحقق مع إعادات محاولة وتشخيص صادق */
function x116SendOtpGo(em,att){
  att=att||0;
  var k=x52Keys();
  if(!k){return false}
  try{AUTH.busy=true}catch(eA3){}
  try{if(att===0){X116.retry=0;X116.last=em}}catch(eA4){}
  try{if(att>0){toast('☁️ السحابة تستيقظ من السبات — نعيد المحاولة ('+(att+1)+'/3)')}}catch(eA5){}
  function fail(err,finalMsg){
    try{AUTH.busy=false}catch(eA6){}
    XAUTH18.errs={top:finalMsg};AUTH.errs={top:finalMsg};
    try{aErr('top',finalMsg)}catch(eA7){}
    try{xSound('error')}catch(eA8){}
    try{render()}catch(eA9){}
    try{console.warn('[x116] otp send failed',err)}catch(eA10){}
  }
  function retryable(st){return st===502||st===503||st===504||st===0}
  x116Post('/auth/v1/otp',{email:em,create_user:true}).then(function(res){
    if(res.ok){
      var j=res.json||{};
      var s=j.session||((j.access_token&&j.user)?j:null);
      if(s&&s.access_token&&s.user){
        try{
          USER.session={access_token:s.access_token,refresh_token:(s.refresh_token||''),token_type:'bearer',expires_at:Math.floor(new Date().getTime()/1000)+(s.expires_in||3600),user:s.user};
          x116SessSave();
        }catch(eA11){}
        try{AUTH.busy=false}catch(eA12){}
        toast('✅ تم الدخول مباشرة بلا رمز — وضع التأكيد التلقائي مفعّل لديك في لوحة السحابة');
        try{x52AfterVerify()}catch(eA13){}
        try{render()}catch(eA14){}
        return;
      }
      try{AUTH.busy=false;AUTH.tab='x44code';AUTH.sent=true;XAUTH18.step=1;XAUTH18.errs={};AUTH.errs={}}catch(eA15){}
      try{x116ShowCode(em)}catch(eA16){}
      try{toast('📩 أُرسل رمز التحقق إلى بريدك — الرمز رقم في آخر رسالة')}catch(eA17){}
      try{render()}catch(eA18){}
      return;
    }
    if(retryable(res.status)&&att<2){
      setTimeout(function(){x116SendOtpGo(em,att+1)},4000);
      return;
    }
    fail(res,x116ErrTxt(res.status,(res.json&&(res.json.msg||res.json.error_description||res.json.error||res.json.message))||('HTTP '+res.status)));
  },function(err){
    if(att<2){
      setTimeout(function(){x116SendOtpGo(em,att+1)},4000);
      return;
    }
    if(err&&err.code==='network'){
      if(typeof navigator!=='undefined'&&!navigator.onLine){fail(err,'📡 الجهاز يقول إن الإنترنت مقطوع فعليًا الآن — شغّل البيانات أو WiFi وأعد المحاولة');return}
      x116Health().then(function(alive){
        if(alive){fail(err,'🔎 خدمة التحقق حيّة لكن طلب الرمز لم يجتز الشبكة — أعد المحاولة، وإن تكرر جرّب 4G بدل WiFi أو العكس')}
        else{fail(err,'☁️ خدمة التحقق لا ترد من شبكتك حاليًا — انتظر دقيقة أو غيّر الشبكة (4G بدل WiFi أو العكس) ثم أعد المحاولة')}
      });
      return;
    }
    fail(err,'تعذر إرسال الرمز — أعد المحاولة');
  });
  return true;
}

/* شاشة الرمز تظهر حتى بدون مكتبة (نفس روح 52) */
function x116ShowCode(em){
  try{AUTH.email=em}catch(eA19){}
  try{XAUTH18.email=em}catch(eA20){}
  try{localStorage.setItem('x63_mail',em)}catch(eA21){}
}

/* القناة الفعالة فعليًا عند الضغط: غلاف 63 يحفظ البريد ثم يستدعينا */
try{
x52SendOtp=function(em){
  var k=x52Keys();
  if(!k){return false}
  x116SendOtpGo(em,0);
  return true;
};
}catch(eA22){}

/* زر إعادة الإرسال في شاشة الرمز */
try{
x44OtpSend=function(){
  try{
    var em=((''+(((gid('a-email')||{}).value)||'')).trim())||AUTH.email||XAUTH18.email||'';
    if(validEmail(em)){x116SendOtpGo(em,0);return}
  }catch(eA23){}
  try{return x116SendOtpGo((AUTH.email||XAUTH18.email||''),0)}catch(eA24){}
};
}catch(eA25){}

/* ================================================================
   116.ب جلوس الجلسة — حفظ واستعادة تلقائية + تجديد صامت
   ================================================================ */
function x116SessSave(){
  try{
    var s=USER.session;
    if(s&&s.access_token){
      localStorage.setItem('x116_sess',JSON.stringify({
        at:s.access_token,rt:s.refresh_token||'',exp:s.expires_at||0,
        uid:(s.user&&s.user.id)||'',mail:(s.user&&s.user.email)||''
      }));
    }
  }catch(eB0){}
}
function x116JwtExp(at){
  try{
    var p=(''+at).split('.');if(p.length<2){return 0}
    var b=p[1].replace(/-/g,'+').replace(/_/g,'/');
    while(b.length%4){b+='='}
    var j=decodeURIComponent(escape(atob(b)));
    var o=JSON.parse(j);
    return (o&&o.exp)||0;
  }catch(eB1){return 0}
}
function x116Restore(){
  try{
    if(USER.session&&USER.session.access_token){return}
    var raw=localStorage.getItem('x116_sess');
    if(!raw){return}
    var s=JSON.parse(raw);
    if(!s||!s.at){return}
    var now=Math.floor(new Date().getTime()/1000);
    var exp=s.exp||x116JwtExp(s.at);
    if(exp&&exp<now){return}
    USER.session={access_token:s.at,refresh_token:s.rt,token_type:'bearer',expires_at:exp,user:{id:s.uid,email:s.mail}};
    if(!s.uid){return}
    try{toast('أهلًا بعودتك — تمت إعادة الدخول تلقائيًا')}catch(eB2){}
    try{x52AfterVerify()}catch(eB3){}
  }catch(eB4){}
}
function x116Refresh(cb){
  try{
    var raw=localStorage.getItem('x116_sess');
    if(!raw){return}
    var s=JSON.parse(raw);
    if(!s||!s.rt){return}
    x116Post('/auth/v1/token?grant_type=refresh_token',{refresh_token:s.rt}).then(function(res){
      if(res.ok&&res.json&&res.json.access_token){
        var j=res.json;
        try{
          USER.session={access_token:j.access_token,refresh_token:(j.refresh_token||s.rt),token_type:'bearer',expires_at:Math.floor(new Date().getTime()/1000)+(j.expires_in||3600),user:(j.user||{id:s.uid,email:s.mail})};
          x116SessSave();
        }catch(eB5){}
      }
      try{cb&&cb()}catch(eB6){}
    })['catch'](function(){try{cb&&cb()}catch(eB7){}});
  }catch(eB8){}
}
/* حفظ تلقائي عند كل تعيين جلسة ناجحة (بعد التحقق) */
try{
var __x116AV=x52AfterVerify;
x52AfterVerify=function(){x116SessSave();return __x116AV()};
}catch(eB9){}
/* مسح الجلسة عند الخروج */
try{
var __x116LO=logoutUser;
logoutUser=function(){
  try{localStorage.removeItem('x116_sess')}catch(eB10){}
  try{return __x116LO()}catch(eB11){}
};
}catch(eB12){}

/* ================================================================
   116.ج الأيقونات المرسومة — نظام موحد بلمسة ممتلئة للنشط
   ================================================================ */
try{
var I16={
  home:'<path d="M4 10.6 12 4.2l8 6.4"/><path d="M6.2 9.4V19a1.3 1.3 0 0 0 1.3 1.3h9a1.3 1.3 0 0 0 1.3-1.3V9.4"/><path data-f="1" d="M10.4 20.2v-4.6a1.6 1.6 0 0 1 3.2 0v4.6z"/>',
  grid:'<rect x="3.6" y="3.6" width="7.2" height="7.2" rx="2.2"/><rect x="13.2" y="3.6" width="7.2" height="7.2" rx="2.2" data-f="1"/><rect x="3.6" y="13.2" width="7.2" height="7.2" rx="2.2"/><rect x="13.2" y="13.2" width="7.2" height="7.2" rx="2.2"/>',
  chart:'<path d="M5.6 20v-6.6"/><path d="M12 20V5.2"/><path d="M18.4 20V9.6"/><path d="M3.4 20.6h17.2" opacity=".55"/>',
  user:'<circle cx="12" cy="8.2" r="3.7"/><path data-f="1" d="M5.2 20.3c.9-3.5 3.7-5.3 6.8-5.3s5.9 1.8 6.8 5.3z"/>',
  gear:'<circle cx="12" cy="12" r="3.1"/><circle cx="12" cy="12" r="7.1" opacity=".55"/><path d="M12 1.8v2.6M12 19.6v2.6M1.8 12h2.6M19.6 12h2.6M4.8 4.8l1.9 1.9M17.3 17.3l1.9 1.9M19.2 4.8l-1.9 1.9M6.7 17.3l-1.9 1.9" opacity=".8"/>',
  book:'<path data-f="1" d="M4.2 5.6c2.5-1.4 5.1-1.4 7.6 0v13.2c-2.5-1.4-5.1-1.4-7.6 0z"/><path d="M11.8 5.6c2.5-1.4 5.5-1.4 8 0v13.2c-2.5-1.4-5.5-1.4-8 0"/>',
  atom:'<ellipse cx="12" cy="12" rx="9.2" ry="3.7" transform="rotate(28 12 12)"/><ellipse cx="12" cy="12" rx="9.2" ry="3.7" transform="rotate(-28 12 12)"/><circle data-f="1" cx="12" cy="12" r="1.7"/>',
  arrow:'<path d="M9.2 5.4 15.8 12l-6.6 6.6"/>',
  sun:'<circle cx="12" cy="12" r="4"/><path d="M12 2.4v2.5M12 19.1v2.5M2.4 12h2.5M19.1 12h2.5M5 5l1.8 1.8M17.2 17.2 19 19M19 5l-1.8 1.8M6.8 17.2 5 19"/>',
  moon:'<path d="M20.2 13.4A8.4 8.4 0 1 1 10.6 3.8a6.8 6.8 0 0 0 9.6 9.6z"/><circle data-f="1" cx="17" cy="6" r="1.1"/>',
  wand:'<path d="M4 20 15.4 8.6"/><path d="M14 5.6 18.4 10"/><path d="M19.8 3.4l.6 1.7 1.7.6-1.7.6-.6 1.7-.6-1.7-1.7-.6 1.7-.6z" data-f="1"/>',
  zap:'<path data-f="1" d="M13.2 2.4 5.4 13.6h5l-1.4 8 8.6-11.6h-5z"/>',
  search:'<circle cx="11" cy="11" r="6.4"/><path d="M15.8 15.8 21 21"/>'
};
var k16;for(k16 in I16){X17I[k16]=I16[k16]}
/* إعادة رسم الرسوم كاملة: وزن خط موحد 2 + شكل ممتلئ رقيق للنشط */
var __x116xi=xi;
xi=function(n,sz){
  sz=sz||18;
  var p=(X17I&&X17I[n])?X17I[n]:'';
  return '<svg class="x116ic" viewBox="0 0 24 24" width="'+sz+'" height="'+sz+'" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">'+p+'</svg>';
};
}catch(eC0){}

/* ================================================================
   116.د سلّم طباعي + هوية علوية موحدة + تلميع شاشة الدخول
   ================================================================ */
try{
var __x116s=document.createElement('style');
__x116s.id='x116-style';
__x116s.textContent=
 /* أيقونات: الشكل الممتلئ يظهر بالنشط فقط كما في إنستغرام وتيليجرام */
 '.x116ic [data-f]{fill:currentColor;stroke:none;opacity:0;transition:opacity .25s}'+
 '.bnav-btn.bnav-on .x116ic [data-f]{opacity:.95}'+
 '.bnav-btn .x116ic{transition:transform .25s cubic-bezier(.34,1.56,.64,1)}'+
 '.bnav-btn.bnav-on .x116ic{transform:translateY(-1px) scale(1.06)}'+
 /* سلّم طباعي كامل */
 'html{font-size:16px;-webkit-text-size-adjust:100%}'+
 'body{font-size:15.5px;line-height:1.75;letter-spacing:.1px}'+
 'h1{font-size:clamp(26px,5.2vw,44px);font-weight:900;line-height:1.28;letter-spacing:-.2px}'+
 'h2{font-size:clamp(21px,4.2vw,31px);font-weight:900;line-height:1.35}'+
 'h3{font-size:19px;font-weight:800;line-height:1.45}'+
 'h4{font-size:16.5px;font-weight:800;line-height:1.5}'+
 'iframe,svg{vertical-align:middle}'+
 /* شاشة الدخول: لبنة عنوان وأقوى تدرج رسمي */
 '.auth-title{font-size:27px !important;font-weight:900 !important;letter-spacing:-.2px !important}'+
 '.auth-sub{font-size:14.5px !important;letter-spacing:.3px}'+
 '.auth-card{backdrop-filter:blur(20px) saturate(1.5);-webkit-backdrop-filter:blur(20px) saturate(1.5)}'+
 '.steps-fill{background:linear-gradient(90deg,#35BDF2,#5C8AE6,#8B6CFF) !important}'+
 '.sb-warn{border-radius:14px;border:1px solid rgba(106,179,243,.35);background:rgba(106,179,243,.10);padding:10px 14px;font-size:13.5px}'+
 /* الخط الفاصل العلوي: هوية موحدة (يعوّض أي شريط عشوائي) */
 '#x116-rail{position:fixed;top:0;right:0;left:0;height:2.5px;z-index:900;pointer-events:none;background:linear-gradient(90deg,#8B6CFF,#5C8AE6,#35BDF2);opacity:.92}'+
 /* حقول: حجم 16 وقلم تركيز متوهج يمنع تكبير iOS ويعطي إحساس التطبيقات الكبرى */
 '.fld input,.fld select,.fld textarea,.inp{font-size:16px !important;border-radius:14px !important}'+
 '.fld input:focus,.fld select:focus,.fld textarea:focus,.inp:focus{outline:none;border-color:var(--cyan);box-shadow:0 0 0 3px rgba(53,189,242,.22),0 1px 8px rgba(53,189,242,.25)}'+
 /* أزرار: تدرج رسمي موحد مطابق للأزرار الكبرى */
 '.btn-primary{background:linear-gradient(135deg,#35BDF2,#5C8AE6 55%,#8B6CFF) !important;border:0 !important;font-weight:800 !important;letter-spacing:.2px}'+
 '.btn-primary:active{transform:scale(.97)}'+
 /* خطأ واضح ببطاقة نظيفة */
 '.auth-wrap p[style*="color: #e06c5a"],.a-err{border-radius:14px}'+
 /* نقاط الخطوة بالمنتصف تمامًا */
 '.steps-bar span{justify-content:center !important;align-items:center !important}'+
 /* الشريط السفلي: خط عناوين أنضف */
 '.bnav-btn span{font-size:12px;font-weight:800;letter-spacing:.15px}'+
 /* تمرير سماوي موحد */
 '*::-webkit-scrollbar{width:9px;height:9px}'+
 '*::-webkit-scrollbar-thumb{background:linear-gradient(180deg,#35BDF2,#5C8AE6);border-radius:8px}'+
 '*::selection{background:rgba(53,189,242,.32)}';
(document.head||document.documentElement).appendChild(__x116s);
}catch(eD0){}

/* الخط الفاصل العلوي الرسمي */
try{
var rail=document.createElement('div');rail.id='x116-rail';rail.setAttribute('aria-hidden','true');
(document.body||document.documentElement).appendChild(rail);
}catch(eD1){}

/* مسحة فوقية: إخفاء أي شريط ملوّن عشوائي أعلى الشاشة (غير معروف المصدر) فلا يبقى سوى الخط الرسمي */
function x116Sweep(){
  try{
    var all=document.body?document.body.querySelectorAll('*'):[];
    for(var i=0;i<all.length;i++){
      var el=all[i];
      if(!el||el.id||!el.className||typeof el.className!=='string'){continue}
      if(el.getAttribute('data-x116-swept')){continue}
      if(el.offsetWidth===0&&el.offsetHeight===0){continue}
      var r=null;try{r=el.getBoundingClientRect()}catch(eD2){continue}
      if(!r||r.top>9||r.height>13||r.height<=0){continue}
      var cs=null;try{cs=getComputedStyle(el)}catch(eD3){continue}
      if(!/gradient/i.test(cs.backgroundImage||'')){continue}
      if(/bnav|toast|readbar|readfill|boot|veil/.test(el.className)){continue}
      el.setAttribute('data-x116-swept','1');
      el.setAttribute('data-x116-hidden',el.className);
      el.style.setProperty('display','none','important');
    }
  }catch(eD4){}
}
try{setTimeout(x116Sweep,900)}catch(eD5){}
try{setTimeout(x116Sweep,2600)}catch(eD6){}
try{
var __x116R16=render;
render=function(){try{var out=__x116R16();setTimeout(x116Sweep,80);return out}catch(eD7){return __x116R16()}};
}catch(eD8){}

/* إقلاع الطبقة: استعادة الجلسة بعد تشغيل التطبيق */
try{
window.x116Restore=x116Restore;window.x116SessSave=x116SessSave;window.x116Sweep=x116Sweep;window.x116SendOtpGo=x116SendOtpGo;
}catch(eE9){}

try{
var prevBoot116=null;
try{prevBoot116=(typeof boot==='function')?boot:null}catch(eE0){}
var wrappedBoot116=function(){try{if(prevBoot116){prevBoot116()}}catch(eE1){}try{setTimeout(x116Restore,400)}catch(eE2){}try{setInterval(function(){try{if(USER.session&&USER.session.access_token){x116SessSave()}}catch(eE3){}},60000)}catch(eE4){}};
try{boot=wrappedBoot116}catch(eE5){try{window.boot=wrappedBoot116}catch(eE6){}}
}catch(eE7){}

/* غلاف أخير على إعلان الإصدار داخل الواجهة (آخر تعريف يفوز) */
try{window.x116t=true}catch(eE8){}

})();
