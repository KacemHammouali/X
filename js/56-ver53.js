/* ===================== طبقة 53.0 - منصة X — الاحترافية والاستقرار ===================== */
/* 53.0 بيانات الاصدار */
try{
APP_META.ver='53.0';APP_META.date='2026-11-03';APP_META.lastUpdate='2026-11-03';
APP_META.notes='الإصدار 53 — الاحترافية والاستقرار: عادت صفحات الإعدادات المستقلة وكل زر يفتح صفحته الخاصة، وعند الرجوع تبقى في موضع تمريرك نفسه لا في بداية الصفحة. الخلفيات تعمل الآن بنقرة واحدة فورًا بألوان واضحة بلا تعتيم يخفيها، مع حبر ذكي يكيّف لون الكتابة تلقائيًا مع الخلفية الفاتحة أو الداكنة. شاشة رمز التحقق تظهر دائمًا بعد إدخال البريد حتى لو حُجبت المكتبات الخارجية. الشريط السفلي عائم دائري متناسق مع زر رجوع أنيق، والمسافات موحدة في كل الصفحات بما فيها الدروس، وزر التحديث ينهي حلقة الإصدار القديم نهائيًا.';
}catch(eV0){}
try{APP_META.changelog.unshift('الإصدار 53 — إصدار الاحترافية والاستقرار: صفحات إعدادات مستقلة مع حفظ موضع التمرير عند الرجوع، خلفيات فورية واضحة مع حبر ذكي يتكيف معها، شاشة التحقق تظهر دائمًا، شريط سفلي عائم احترافي، وتحديث أقوى يكسر حلقة الإصدار القديم.')}catch(eV1){}
function fallbackNews18(){
  return [{title:'الإصدار 53 — الاحترافية والاستقرار',
    body:'صفحات إعدادات مستقلة تحفظ موضع تمريرك عند الرجوع، خلفيات تعمل بنقرة واحدة بألوان واضحة وحبر ذكي يتكيف معها، شاشة التحقق تظهر دائمًا، وشريط سفلي عائم احترافي متناسق.',
    date:APP_META.date}];
}
/* 52.أ القناة الفعالة: تطبيق أم موقع */
function x52Ch(){
  try{if(typeof x51Channel==='function'){var c=x51Channel();if(c==='app'||c==='web'){return c}}}catch(eX1){}
  try{if((''+location.href).indexOf('android-app://')===0){return 'app'}}catch(eX2){}
  try{if(window.matchMedia&&window.matchMedia('(display-mode: standalone)').matches){return 'app'}}catch(eX3){}
  try{if(localStorage.getItem('x51_channel')==='app'){return 'app'}}catch(eX4){}
  return 'web';
}
/* 52.ب الشريط السفلي العائم الدائري + توحيد المسافات */
try{
var x52s=document.createElement('style');x52s.id='x52-style';
x52s.textContent=
 '.bnav{left:10px;right:10px;width:auto;bottom:calc(8px + env(safe-area-inset-bottom,0px));height:58px;border-radius:26px;border:1px solid var(--border);box-shadow:0 10px 30px rgba(0,0,0,.35);padding-bottom:0}'+
 'body{padding-bottom:calc(86px + env(safe-area-inset-bottom,0px))!important}'+
 '.lesson-view{max-width:680px;margin:0 auto}'+
 '.x48-page{max-width:680px}'+
 '.lesson-content,.lesson-header{border-radius:18px}'+
 '.bnav-btn{padding:8px 14px;border-radius:16px}';
(document.head||document.documentElement).appendChild(x52s);
}catch(eX5){}
/* 52.ج زر الاعدادات في الشريط السفلي: للتطبيق فقط */
try{
var __x52BN=renderBottomNav;
renderBottomNav=function(){
  var h=__x52BN();
  if(x52Ch()!=='app'){
    try{
      var parts=(''+h).split('<button'),out=[parts[0]];
      for(var i=1;i<parts.length;i++){
        if(parts[i].indexOf("navigate('settings')")>=0){continue}
        out.push(parts[i]);
      }
      h=out.join('<button');
    }catch(eX6){}
  }
  return h;
};
}catch(eX7){}
/* 52.د بطاقات التطبيق: تثبيت في الموقع فقط، مشاركة في التطبيق فقط */
try{
var __x52IR=xInstallRow;
xInstallRow=function(){if(x52Ch()==='app'){return ''}return __x52IR()};
}catch(eX8){}
try{
var __x52Apk=x42ApkCard;
x42ApkCard=function(){
  if(x52Ch()==='app'){
    var h='<section class="x17-card fade-in" style="margin:16px auto 0">'+
     '<h3 style="margin:0 0 4px">📤 شارك التطبيق مع صديق</h3>'+
     '<p class="x17-mute" style="font-size:12.5px;margin:8px 0 10px">أرسل رابط التنزيل لزميلك فيصل مباشرة إلى صفحة تنزيل التطبيق على هاتفه.</p>'+
     '<div class="btn-row" style="margin:8px 0 0">'+
     '<button class="btn btn-sm" onclick="x42CopyApk()">🔗 نسخ رابط التنزيل</button>';
    try{if(typeof x44Share==='function'){h+='<button class="btn btn-sm" onclick="try{x44Share()}catch(e){}">📤 مشاركة</button>'}}catch(eX9){}
    h+='</div></section>';
    return h;
  }
  return __x52Apk();
};
}catch(eX10){}
/* 52.هـ الخلفيات: تطبيق فوري بنقرة واحدة بلا معاينة */
try{
var __x52Pv=x48BgPreview;
x48BgPreview=function(id){
  try{
    X48.pid=id;X48.pimg='';X48.pendingImg='';
    var eff=x48EffTheme();
    X48.pdim=((eff==='light')?(XCFG.dimL===undefined?.15:XCFG.dimL):(XCFG.dimD===undefined?.45:XCFG.dimD))*100;
    X48.ppos=(eff==='light')?(XCFG.posL||'center'):(XCFG.posD||'center');
    if(typeof x48BgApplySel==='function'){x48BgApplySel();return}
  }catch(eX11){}
  try{return __x52Pv(id)}catch(eX12){}
};
}catch(eX13){}
/* 52.و الحبر الذكي: لون الكتابة يتكيف تلقائيًا مع الخلفية الفاتحة أو الداكنة */
function x52HexLum(h){
  try{
    h=(''+h).replace('#','');
    if(h.length===3){h=h[0]+h[0]+h[1]+h[1]+h[2]+h[2]}
    var r=parseInt(h.substring(0,2),16),g=parseInt(h.substring(2,4),16),b=parseInt(h.substring(4,6),16);
    var lum=(0.2126*r+0.7152*g+0.0722*b)/255;
    return isNaN(lum)?.5:lum;
  }catch(eX14){return .5}
}
function x52CssLum(css,dim,eff){
  var m,re=/#([0-9a-fA-F]{6}|[0-9a-fA-F]{3})/g,ls=[];
  while((m=re.exec(''+css))){ls.push(x52HexLum(m[0]))}
  if(!ls.length){return .5}
  var s=0;for(var i=0;i<ls.length;i++){s+=ls[i]}
  var l=s/ls.length;
  var d=(dim===undefined?0:dim);
  if(eff==='light'){return l*(1-d)+0.95*d}
  return l*(1-d)+0.03*d;
}
function x52ImgLum(im){
  try{
    var cv=document.createElement('canvas');cv.width=12;cv.height=12;
    var cx=cv.getContext&&cv.getContext('2d');if(!cx){return .5}
    cx.drawImage(im,0,0,12,12);
    var d=cx.getImageData(0,0,12,12).data;
    var s=0,n=0;
    for(var i=0;i<d.length;i+=4){s+=(0.2126*d[i]+0.7152*d[i+1]+0.0722*d[i+2])/255;n++}
    return n?s/n:.5;
  }catch(eX15){return .5}
}
function x52InkSet(m){
  try{
    var el=gid('x52-autoink');
    if(!el){el=document.createElement('style');el.id='x52-autoink';(document.head||document.documentElement).appendChild(el)}
    var css='';
    if(m==='dark'){css='html[data-theme="dark"]{--text:#07090C !important;--text-dim:#36404B !important;--text-mute:#68737F !important}'}
    else if(m==='light'){css='html[data-theme="light"]{--text:#FFFFFF !important;--text-dim:#E2EAF3 !important;--text-mute:#BAC6D4 !important}'}
    el.textContent=css;
    try{var hd=(document.head||document.documentElement);if(el.parentNode){hd.appendChild(el)}}catch(eX16){}
  }catch(eX17){}
}
function x52InkPick(l,eff){
  if(l>0.52){x52InkSet(eff==='dark'?'dark':'');return}
  if(l<0.35){x52InkSet(eff==='light'?'light':'');return}
  x52InkSet('');
}
function x52AutoInkNow(){
  try{
    var eff=x48EffTheme();
    var key=(eff==='light')?'inkL':'inkD';
    if(XCFG[key]&&XCFG[key]!=='def'){x52InkSet('');return}
    var img=(eff==='light')?(XCFG.imgL||''):(XCFG.imgD||'');
    var dim=(eff==='light')?(XCFG.dimL===undefined?.15:XCFG.dimL):(XCFG.dimD===undefined?.45:XCFG.dimD);
    if(img){
      var im=new Image();
      im.onload=function(){try{x52InkPick(x52ImgLum(im),eff)}catch(eX18){}};
      im.onerror=function(){try{x52InkSet('')}catch(eX19){}};
      im.src=img;
      return;
    }
    var id=(eff==='light')?(XCFG.bgL||'def'):(XCFG.bgD||'def');
    if(!id||id==='def'){x52InkSet('');return}
    var cssv='';for(var i=0;i<X48_BGS.length;i++){if(X48_BGS[i].id===id){cssv=X48_BGS[i].css}}
    if(!cssv){x52InkSet('');return}
    x52InkPick(x52CssLum(cssv,dim,eff),eff);
  }catch(eX20){}
}
try{
var __x52BGA=x48BgApply;
x48BgApply=function(){try{__x52BGA()}catch(eX21){}try{x52AutoInkNow()}catch(eX22){}};
}catch(eX23){}
try{
var __x52AA=x48ApplyAll;
x48ApplyAll=function(){try{__x52AA()}catch(eX24){}try{x52AutoInkNow()}catch(eX25){}};
}catch(eX26){}
/* 52.ز تحديث أقوى: إلغاء تسجيل عمال الخدمة القدامى أولًا لكسر حلقة التحديث */
try{
var __x52AU=applyUpdate;
applyUpdate=function(){
  var done=false;
  function go(){if(done){return}done=true;try{__x52AU()}catch(eX27){try{x50HardReload()}catch(eX28){}}}
  try{
    if(navigator.serviceWorker&&navigator.serviceWorker.getRegistrations){
      navigator.serviceWorker.getRegistrations().then(function(rs){
        var ps=[];
        for(var i=0;i<rs.length;i++){try{ps.push(rs[i].unregister())}catch(eX29){}}
        return ps.length?Promise.all(ps):null;
      }).then(go,go);
      try{setTimeout(go,4000)}catch(eX30){}
      return;
    }
  }catch(eX31){}
  go();
};
}catch(eX32){}
/* 52.ح رسائل واضحة عند انقطاع الإنترنت وعودته */
try{
window.addEventListener('offline',function(){try{toast('📡 انقطع الإنترنت - الدروس التي فتحتها سابقًا تعمل بلا مشكلة')}catch(eX33){}});
window.addEventListener('online',function(){try{toast('📡 عاد الاتصال بالإنترنت')}catch(eX34){}});
if(!navigator.onLine){try{setTimeout(function(){try{toast('📡 أنت الآن بلا إنترنت - الدروس التي فتحتها سابقًا تعمل بلا مشكلة')}catch(eX35){}},1500)}catch(eX36){}}
}catch(eX37){}
/* 52.ي التحقق بلا مكتبات خارجية: شاشة رمز التحقق تظهر دائمًا حتى لو حُجب CDN -
       إرسال الرمز والتحقق منه عبر REST مباشرة بمفتاح anon العام (تحميه سياسات RLS) */
function x52Keys(){
  try{
    var u=(SB_CFG&&SB_CFG.url)?SB_CFG.url:((typeof X49_SB_DEF!=='undefined'&&X49_SB_DEF)?X49_SB_DEF.url:'');
    var a=(SB_CFG&&SB_CFG.anon)?SB_CFG.anon:((typeof X49_SB_DEF!=='undefined'&&X49_SB_DEF)?X49_SB_DEF.anon:'');
    if(u&&a){
      if(typeof x49Url==='function'){u=x49Url(u)}
      u=(''+u).replace(/\/+$/,'');
      return {url:u,anon:''+a};
    }
  }catch(eK1){}
  return null;
}
function x52ErrTxt(st,msg){
  try{
    if(st===429){return 'طلبت رموزًا كثيرة - انتظر دقيقة ثم أعد المحاولة'}
    if(st===400||st===401){return 'الرمز غير صحيح أو انتهت صلاحيته - اطلب رمزًا جديدًا'}
    if(st===422){return 'تحقق من كتابة البريد بشكل صحيح'}
  }catch(eK2){}
  return (''+(msg||('HTTP '+st)));
}
function x52SendOtp(em){
  var k=x52Keys();
  if(!k){return false}
  AUTH.busy=true;try{render()}catch(eK3){}
  fetch(k.url+'/auth/v1/otp',{method:'POST',headers:{'apikey':k.anon,'Authorization':'Bearer '+k.anon,'Content-Type':'application/json'},body:JSON.stringify({email:em,create_user:true})}).then(function(r){
    AUTH.busy=false;
    if(r.ok){
      AUTH.tab='x44code';AUTH.sent=true;XAUTH18.step=1;XAUTH18.errs={};AUTH.errs={};
      toast('📩 أُرسل رمز التحقق إلى بريدك');
      try{render()}catch(eK4){}
      return;
    }
    return r.json().catch(function(){return {}}).then(function(j){
      var m=(j&&(j.msg||j.error_description||j.error||j.message))||('HTTP '+r.status);
      XAUTH18.errs={top:x52ErrTxt(r.status,m)};AUTH.errs={top:x52ErrTxt(r.status,m)};
      try{xSound('error')}catch(eK5){}
      try{render()}catch(eK6){}
    });
  }).catch(function(){
    AUTH.busy=false;XAUTH18.errs={top:'انقطع الاتصال بخدمة التحقق - تحقق من الإنترنت وأعد المحاولة'};AUTH.errs={top:'انقطع الاتصال بخدمة التحقق - تحقق من الإنترنت وأعد المحاولة'};
    try{xSound('error')}catch(eK7){}
    try{render()}catch(eK8){}
  });
  return true;
}
function x52AfterVerify(){
  if(SB&&SB.ready){try{loadUserProfile(true);return}catch(eK9){}}
  var k=x52Keys();
  if(!k){XAUTH18.step=2;try{render()}catch(eK10){}return}
  var uid=(USER.session&&USER.session.user&&USER.session.user.id)||'';
  fetch(k.url+'/rest/v1/profiles?id=eq.'+encodeURIComponent(uid)+'&select=*',{headers:{'apikey':k.anon,'Authorization':'Bearer '+USER.session.access_token}}).then(function(r){return r.json()}).then(function(arr){
    if(arr&&arr.length){
      var d=arr[0];
      USER.profile=d;
      try{AUTH.form={fn:d.first_name||'',ln:d.last_name||'',by:(d.birth_year||'')+'',level:d.level||'ثانوي',year:d.study_year||'',branch:d.branch||'',gender:d.gender||'',avatar:''}}catch(eK11){}
      toast('✅ تم التحقق من بريدك');
      navigate('home');
    }else{
      toast('✅ تم التحقق من بريدك - أكمل ملفك الشخصي');
      XAUTH18.step=2;XAUTH18.errs={};
      try{render()}catch(eK12){}
    }
  }).catch(function(){
    toast('✅ تم التحقق من بريدك - أكمل ملفك الشخصي');
    XAUTH18.step=2;
    try{render()}catch(eK13){}
  });
}
try{
var __x52EN=x18EmailNext;
x18EmailNext=function(){
  try{
    var em=(''+(((gid('a-email')||{}).value)||'')).trim();
    XAUTH18.errs={};AUTH.errs={};
    if(!validEmail(em)){XAUTH18.errs={email:'اكتب بريدًا إلكترونيًا صالحًا'};AUTH.errs={email:'اكتب بريدًا إلكترونيًا صالحًا'};try{xSound('error')}catch(eK14){}try{render()}catch(eK15){}return}
    if(x52SendOtp(em)){return}
  }catch(eK16){}
  try{return __x52EN()}catch(eK17){}
};
}catch(eK18){}
try{
var __x52OS=x44OtpSend;
x44OtpSend=function(){
  try{
    var em=((''+(((gid('a-email')||{}).value)||'')).trim())||AUTH.email||XAUTH18.email||'';
    AUTH.email=em;XAUTH18.email=em;AUTH.errs={};
    if(!validEmail(em)){AUTH.errs={email:'اكتب بريدًا إلكترونيًا صالحًا'};XAUTH18.errs={email:'اكتب بريدًا إلكترونيًا صالحًا'};try{xSound('error')}catch(eK19){}try{render()}catch(eK20){}return}
    if(x52SendOtp(em)){return}
  }catch(eK21){}
  try{return __x52OS()}catch(eK22){}
};
}catch(eK23){}
try{
var __x52OC=x44OtpCheck;
x44OtpCheck=function(){
  try{
    var code=(''+((gid('a-code')||{}).value||'')).replace(/\s+/g,'');
    AUTH.errs={};
    if(code.length<4){aErr('code','اكتب رمز التحقق كما وصل إلى بريدك');try{xSound('error')}catch(eK24){}try{render()}catch(eK25){}return}
    var k=x52Keys();
    if(!k){return __x52OC()}
    var em=AUTH.email||XAUTH18.email||'';
    AUTH.busy=true;try{render()}catch(eK26){}
    fetch(k.url+'/auth/v1/verify',{method:'POST',headers:{'apikey':k.anon,'Authorization':'Bearer '+k.anon,'Content-Type':'application/json'},body:JSON.stringify({email:em,token:code,type:'email'})}).then(function(r){
      AUTH.busy=false;
      if(!r.ok){
        return r.json().catch(function(){return {}}).then(function(j){
          var m=(j&&(j.msg||j.error_description||j.error||j.message))||('HTTP '+r.status);
          aErr('top',x52ErrTxt(r.status,m));try{xSound('error')}catch(eK27){}
          try{render()}catch(eK28){}
        });
      }
      return r.json().then(function(j){
        if(j&&j.access_token&&j.user){
          USER.session={access_token:j.access_token,refresh_token:j.refresh_token,token_type:(j.token_type||'bearer'),expires_at:Math.floor(new Date().getTime()/1000)+(j.expires_in||3600),user:j.user};
          x52AfterVerify();
        }else{
          aErr('top','تعذر إكمال التحقق - أعد المحاولة');try{render()}catch(eK29){}
        }
      });
    }).catch(function(){
      AUTH.busy=false;aErr('top','انقطع الاتصال بالخدمة - أعد المحاولة');try{xSound('error')}catch(eK30){}
      try{render()}catch(eK31){}
    });
    return;
  }catch(eK32){}
  try{return __x52OC()}catch(eK33){}
};
}catch(eK34){}
try{
var __x52RA=renderAuth18;
renderAuth18=function(){
  try{
    if(AUTH.tab==='x44code'&&typeof x44CodeScreen==='function'&&x52Keys()){
      try{return authWrap(x44CodeScreen(),2,2)}catch(eK35){}
    }
  }catch(eK36){}
  return __x52RA();
};
}catch(eK37){}
/* 52.ط تشغيل الحبر الذكي الآن */
try{x52AutoInkNow()}catch(eX38){}
/* ===================== إضافات 53 ===================== */
/* 53.أ حفظ موضع التمرير: عند فتح صفحة إعدادات فرعية نحفظ أين كنت، وعند الرجوع نعيدك إلى الموضع نفسه لا إلى بداية الصفحة */
var X51S=0;
try{
var __x53Open=x51Open;
x51Open=function(id){
  try{X51S=(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0)}catch(eS1){}
  return __x53Open(id);
};
}catch(eS2){}
try{
var __x53Back=x51Back;
x51Back=function(){
  var r;
  try{r=__x53Back()}catch(eS3){}
  try{setTimeout(function(){try{window.scrollTo(0,X51S||0)}catch(eS4){}},60)}catch(eS5){}
  return r;
};
}catch(eS6){}
/* 53.ب الخلفيات المقواة: خلفيات المعرض تظهر بألوانها الحقيقية بلا طبقة تعتيم تخفيها (التعتيم يبقى للصور الشخصية فقط)،
       وتُطبق على الجسم والواجهة معًا، ويُخفى الرسم الهندسي الافتراضي حتى لا يعلو خلفيتك */
function x53BgWrite(){
  try{
    var el=gid('x48-bgstyle');
    if(!el){el=document.createElement('style');el.id='x48-bgstyle';(document.head||document.documentElement).appendChild(el)}
    var ex=gid('x53-bgextra');
    if(!ex){ex=document.createElement('style');ex.id='x53-bgextra';(document.head||document.documentElement).appendChild(ex)}
    var eff=x48EffTheme();
    var img=(eff==='light')?(XCFG.imgL||''):(XCFG.imgD||'');
    var id=(eff==='light')?(XCFG.bgL||'def'):(XCFG.bgD||'def');
    var pos=(eff==='light')?(XCFG.posL||'center'):(XCFG.posD||'center');
    var dim=(eff==='light')?(XCFG.dimL===undefined?.15:XCFG.dimL):(XCFG.dimD===undefined?.45:XCFG.dimD);
    var cssv='';
    if(img){cssv='url("'+(''+img).split('"').join('%22')+'")'}else if(id&&id!=='def'){for(var i=0;i<X48_BGS.length;i++){if(X48_BGS[i].id===id){cssv=X48_BGS[i].css}}}
    if(!cssv){el.textContent='';ex.textContent='';return}
    var ov='';
    if(img){ov=((eff==='light')?'rgba(244,247,252,':'rgba(8,13,24,')+(+dim||0)+'),'}
    var bs='background:'+ov+cssv+' !important;background-size:cover !important;background-position:'+pos+' !important';
    el.textContent='body{'+bs+'}body::before{'+bs+'}html{'+bs+'}';
    ex.textContent='#bg-canvas{display:none!important}';
  }catch(eS7){}
}
try{
var __x53BGA=x48BgApply;
x48BgApply=function(){try{__x53BGA()}catch(eS8){}try{x53BgWrite()}catch(eS9){}try{x52AutoInkNow()}catch(eS10){}};
}catch(eS11){}
try{
var __x53AA=x48ApplyAll;
x48ApplyAll=function(){try{__x53AA()}catch(eS12){}try{x53BgWrite()}catch(eS13){}try{x52AutoInkNow()}catch(eS14){}};
}catch(eS15){}
try{x53BgWrite()}catch(eS16){}
/* 53.ج زر الرجوع العائم الأنيق: يطفو فوق الشريط الدائري بنفس الأسلوب لا كتبويب خامس داخله، وتنسيق موحد للمسافات */
try{
var x53s=document.createElement('style');x53s.id='x53-style';
x53s.textContent=
 '.x41-back{left:10px;bottom:calc(78px + env(safe-area-inset-bottom,0px));border-radius:999px;padding:10px 18px;font-weight:800;box-shadow:0 10px 30px rgba(0,0,0,.35);backdrop-filter:blur(12px);-webkit-backdrop-filter:blur(12px)}'+
 '.x51-back{padding:10px 16px;border-radius:14px;font-weight:800}'+
 '.x17-card{border-radius:18px}'+
 'button{-webkit-tap-highlight-color:transparent}'+
 '.bnav-btn:focus-visible,.x51-row:focus-visible,.x41-back:focus-visible{outline:2px solid var(--cyan);outline-offset:2px}';
(document.head||document.documentElement).appendChild(x53s);
}catch(eS17){}

