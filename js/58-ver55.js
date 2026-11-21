/* ===== طبقة الإصدار 55.0 — الإصلاحات الجذرية والهوية الجديدة ===== */
/* ===== طبقة الإصدار 55.0 — الإصلاحات الجذرية والهوية الجديدة ===== */
/* ===================== طبقة 55.0 - منصة X — الإصلاحات الجذرية والهوية الجديدة ===================== */
/* 55.0 بيانات الاصدار */
try{
APP_META.ver='55.0';APP_META.date='2026-11-04';APP_META.lastUpdate='2026-11-04';
APP_META.notes='الإصدار 55 — الإصلاحات الجذرية: الخلفيات تعمل الآن فورًا في الوضعين الداكن والفاتح مع صور المعرض (إصلاح جذري لسبب الإخفاء الحقيقي)، الشعار الرسمي الجديد في كل مكان بدل القديم، الشريط السفلي وزر الرجوع لا يختفيان أبدًا حتى في شاشات الدخول ويخفيان فقط أثناء تشغيل الفيديو، رمز التحقق يقبل الآن رموز بريد التأكيد أيضًا، وتصميم أنعم بحركات سلسة.';
}catch(eV0){}
try{APP_META.changelog.unshift('الإصدار 55 — إصلاح الخلفيات جذريًا فتعمل في الوضعين مع صور المعرض، الشعار الجديد في كل الواجهة، شريط سفلي وزر رجوع دائمان إلا أثناء الفيديو، وقبول رموز بريد التأكيد.')}catch(eV1){}
function fallbackNews18(){
  return [{title:'الإصدار 55.0 — الخلفيات تعمل والهوية الجديدة',
    body:'إصلاح جذري للخلفيات فتعمل فورًا في الوضعين مع صور المعرض، الشعار الرسمي الجديد في كل الشاشات، شريط سفلي وزر رجوع لا يختفيان إلا أثناء الفيديو، وتصميم أنعم.',
    date:APP_META.date}];
}
/* 55.أ الشعار الرسمي الجديد في كل مكان: كل المواضع التي كانت تستخدم الشعار القديم ترسم شعار icon-512 الرسمي */
try{LOGO=X30_LOGO}catch(eA1){}
try{
var x55s=document.createElement('style');x55s.id='x55-style';
x55s.textContent=
 '.logo-mark .x30-logo{width:100%!important;height:100%!important;border-radius:inherit;box-shadow:none;margin:0;display:block;object-fit:contain}'+
 '.x54-authlogo .x30-logo{width:100%!important;height:100%!important;margin:0;box-shadow:none;border-radius:inherit;display:block;object-fit:contain}'+
 '.x54-authlogo .logo-mark{background:transparent;border:0}'+
 '';
(document.head||document.documentElement).appendChild(x55s);
}catch(eA2){}
/* 55.ب إصلاح الخلفيات الجذري: السبب الحقيقي كان أن الطبقة السابلة ترسم تحت خلفية الجسم المعتمة
       فتغطى تمامًا — الحل: كتابة الخلفية على الجسم والطبقة العلوية للجسم وhtml معًا بقواعد !important
       (آلية مثبتة تغلب كل قواعد الأساس) مع إبقاء الطبقة الإضافية احتياطًا وإخفاء الرسم الهندسي */
try{
x54BgApply=function(){
  try{
    var lay=x54BgLayerNode();
    var node=gid('x48-bgstyle');
    if(!node){node=document.createElement('style');node.id='x48-bgstyle';(document.head||document.documentElement).appendChild(node)}
    var ex=gid('x53-bgextra');
    if(!ex){ex=document.createElement('style');ex.id='x53-bgextra';(document.head||document.documentElement).appendChild(ex)}
    var eff=x48EffTheme();
    var img=x54BgResolve(eff);
    var id=(eff==='light')?(XCFG.bgL||'def'):(XCFG.bgD||'def');
    var pos=(eff==='light')?(XCFG.posL||'center'):(XCFG.posD||'center');
    var dim=(eff==='light')?(XCFG.dimL===undefined?.15:XCFG.dimL):(XCFG.dimD===undefined?.45:XCFG.dimD);
    var cssv='';
    if(img){cssv='url("'+(''+img).split('"').join('%22')+'")'}
    else if(id&&id!=='def'){for(var i=0;i<X48_BGS.length;i++){if(X48_BGS[i].id===id){cssv=X48_BGS[i].css}}}
    if(!cssv){lay.style.display='none';lay.style.background='';node.textContent='';ex.textContent='';return}
    var ov='';
    if(img){ov=((eff==='light')?'rgba(244,247,252,':'rgba(8,13,24,')+(+dim||0)+'),'}
    var bs='background:'+ov+cssv+' !important;background-size:cover !important;background-position:'+((pos==='center')?'center':pos)+' !important;background-attachment:fixed !important';
    node.textContent='body{'+bs+'}body::before{'+bs+'}html{'+bs+'}#bg-canvas{display:none!important}@media print{#x54-bg{display:none!important}}';
    ex.textContent='';
    lay.style.display='block';
    lay.style.background=ov+cssv+' '+((pos==='center')?'center':pos)+' / cover no-repeat';
  }catch(eB2){}
};
try{x54BgApply()}catch(eB3){}
}catch(eB4){}
/* 55.ج الشريط السفلي وزر الرجوع لا يختفيان: الشريط يظهر حتى في شاشات الدخول والتسجيل والتحقق
       وزر الرجوع يبقى معه في كل صفحة عدا الرئيسية (لا شيء خلفها للرجوع إليه) */
try{
var __x55BN=renderBottomNav;
renderBottomNav=function(){
  if(ROUTE.page==='auth'){
    try{
      return '<nav class="bnav glass-strong" role="navigation" aria-label="التنقل الرئيسي">'+
       '<button class="bnav-btn" onclick="navigate(\'home\')" aria-label="الرئيسية">'+xi('home',21)+'<span>الرئيسية</span></button>'+
       '<button class="bnav-btn" onclick="navigate(\'subjects\')" aria-label="المواد">'+xi('grid',21)+'<span>المواد</span></button>'+
       '<button class="bnav-btn" onclick="navigate(\'dash\')" aria-label="التقدم">'+xi('chart',21)+'<span>تقدّمي</span></button>'+
       '<button class="bnav-btn" onclick="navigate(\'profile\')" aria-label="ملفي">'+avatarHTML(24,'av-nav')+'<span>ملفي</span></button>'+
       '</nav>';
    }catch(eC1){}
  }
  return __x55BN();
};
}catch(eC2){}
try{
var __x55R=render;
render=function(){
  __x55R();
  try{
    var pg=(ROUTE&&ROUTE.page)||'';
    var b=document.getElementById('x41-back');
    if(pg==='home'){
      if(b){b.remove()}
    }else if(!b){
      b=document.createElement('button');
      b.id='x41-back';b.type='button';b.className='x41-back';
      b.innerHTML='⬅ رجوع';
      if(b.addEventListener){b.addEventListener('click',x41Back)}else{b.onclick=x41Back}
      document.body.appendChild(b);
    }
    if(AUTH&&!AUTH.email&&XAUTH18&&XAUTH18.email&&AUTH.tab==='x44code'){AUTH.email=XAUTH18.email}
  }catch(eC3){}
};
}catch(eC4){}
/* 55.د أثناء تشغيل الفيديو فقط يختفي الشريط وزر الرجوع: كشف التشغيل الحقيقي لعناصر الفيديو
       ونوافذ الفيديو بما فيها يوتيوب، مع إخفاء زر الرجوع فوق أي نافذة منبثقة كي لا يطفو فوقها */
function x55BodyCls(n,on){
  try{
    var b=document.body;if(!b)return;
    if(b.classList){if(on){b.classList.add(n)}else{b.classList.remove(n)}return}
    var c=''+(b.className||''),p=(' '+c+' ').indexOf(' '+n+' ')>=0;
    if(on&&!p){b.className=(c?c+' ':'')+n}
    if(!on&&p){b.className=(' '+c+' ').split(' '+n+' ').join(' ').replace(/^\s+|\s+$/g,'')}
  }catch(eZ1){}
}
try{
function x55VidOn(){x55BodyCls('x55vid',true)}
function x55VidOff(){x55BodyCls('x55vid',false)}
document.addEventListener('play',function(ev){try{var t=ev&&ev.target;if(t&&((''+(t.tagName||'')).toUpperCase()==='VIDEO')){x55VidOn()}}catch(eD1){}},true);
document.addEventListener('pause',function(ev){try{var t=ev&&ev.target;if(t&&((''+(t.tagName||'')).toUpperCase()==='VIDEO')){x55VidOff()}}catch(eD2){}},true);
document.addEventListener('ended',function(ev){try{var t=ev&&ev.target;if(t&&((''+(t.tagName||'')).toUpperCase()==='VIDEO')){x55VidOff()}}catch(eD3){}},true);
document.addEventListener('fullscreenchange',function(){try{if(document.fullscreenElement||document.webkitFullscreenElement){x55VidOn()}else{x55VidOff()}}catch(eD4){}});
var __x55XM=xModal;
xModal=function(t,h){
  try{if(/youtube\.com\/embed|<video/i.test(''+h)){x55VidOn()}x55BodyCls('x55modal',true)}catch(eD5){}
  return __x55XM(t,h);
};
var __x55XCM=xCloseModal;
xCloseModal=function(){try{x55BodyCls('x55modal',false)}catch(eD6){}try{x55VidOff()}catch(eD7){}try{return __x55XCM()}catch(eD8){};
};
}catch(eD9){}
/* 55.هـ رمز التحقق يقبل كل أنواع الرموز: بريد التأكيد (Confirm signup) وليس الرابط السحري فقط
       — إن رفض الخادم النوع الأول جرّب الذي يليه قبل إظهار الخطأ */
try{
var __x55OC=x44OtpCheck;
x44OtpCheck=function(){
  try{
    var code=(''+(((gid('a-code')||{}).value)||'')).replace(/\s+/g,'');
    AUTH.errs={};
    if(code.length<4){aErr('code','اكتب رمز التحقق كما وصل إلى بريدك');try{xSound('error')}catch(eE1){}try{render()}catch(eE2){}return}
    var k=x52Keys();
    if(!k){return __x55OC()}
    var em=AUTH.email||XAUTH18.email||'';
    AUTH.busy=true;try{render()}catch(eE3){}
    var ti=0,types=['email','signup','magiclink'];
    function x55Fail(st,m){
      AUTH.busy=false;
      aErr('top',x52ErrTxt(st,m));try{xSound('error')}catch(eE4){}try{render()}catch(eE5){}
    }
    function x55Try(){
      fetch(k.url+'/auth/v1/verify',{method:'POST',headers:{'apikey':k.anon,'Authorization':'Bearer '+k.anon,'Content-Type':'application/json'},body:JSON.stringify({email:em,token:code,type:types[ti]})}).then(function(r){
        if(!r.ok){
          if(ti<types.length-1&&r.status!==429&&r.status!==500&&r.status!==502&&r.status!==503){ti++;x55Try();return}
          return r.json().catch(function(){return {}}).then(function(j){
            x55Fail(r.status,(j&&(j.msg||j.error_description||j.error||j.message))||('HTTP '+r.status));
          });
        }
        return r.json().then(function(j){
          AUTH.busy=false;
          if(j&&j.access_token&&j.user){
            USER.session={access_token:j.access_token,refresh_token:j.refresh_token,token_type:(j.token_type||'bearer'),expires_at:Math.floor(new Date().getTime()/1000)+(j.expires_in||3600),user:j.user};
            try{x52AfterVerify()}catch(eE6){}
          }else{
            aErr('top','تعذر إكمال التحقق - أعد المحاولة');try{xSound('error')}catch(eE7){}try{render()}catch(eE8){}
          }
        });
      }).catch(function(){
        AUTH.busy=false;aErr('top','انقطع الاتصال بالخدمة - أعد المحاولة');try{render()}catch(eE9){}
      });
    }
    x55Try();
    return;
  }catch(eE10){}
  try{return __x55OC()}catch(eE11){}
};
}catch(eE12){}
/* 55.و لمسات التصميم العالمية: حركات سلسة على الشريط والأزرار والبطاقات وسرعة انتقال مريحة */
try{
var x55d=document.createElement('style');x55d.id='x55-dyn';
x55d.textContent=
 '.bnav-btn{transition:transform .16s ease,background .16s ease,color .16s ease}'+
 '.bnav-btn:active{transform:scale(.9)}'+
 '.btn{transition:transform .16s ease,box-shadow .16s ease}'+
 '.btn:active{transform:scale(.97)}'+
 '.x17-card,.set-card,.x51-card,.x48-gitem{transition:transform .2s ease,box-shadow .2s ease}'+
 '.fade-in{animation-duration:.28s}'+
 'body.x55vid .bnav,body.x55vid .x41-back{display:none!important}'+
 'body.x55modal .x41-back{display:none!important}'+
 '@media(min-width:1024px){.x17-card:hover,.set-card:hover,.x48-gitem:hover{transform:translateY(-2px);box-shadow:0 16px 40px rgba(0,0,0,.26)}}'+
 '';
(document.head||document.documentElement).appendChild(x55d);
}catch(eF1){}

