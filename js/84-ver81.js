/* ===================== طبقة 81.0 — قناة دقيقة + مشاركة حقيقية + خلفية ثابتة في الموقع + شريط أكبر + سلاسة حقيقية ===================== */
/* 81.أ القناة الدقيقة: المتصفح الحقيقي (display-mode: browser) = موقع دائمًا مهما كان المصدر — يمنع تسميم رابط android-app في المتصفح والتبويبات المخصصة */
function x51Channel(){
  var app=false;
  try{if(window.matchMedia&&window.matchMedia('(display-mode: browser)').matches){return 'web'}}catch(eW0){}
  try{if(window.matchMedia&&window.matchMedia('(display-mode: standalone)').matches){app=true}}catch(e1){}
  if(!app){try{if(window.matchMedia&&(window.matchMedia('(display-mode: fullscreen)').matches||window.matchMedia('(display-mode: minimal-ui)').matches)){app=true}}catch(e2){}}
  if(!app){try{if(window.navigator&&window.navigator.standalone===true){app=true}}catch(e3){}}
  if(!app){try{if((''+document.referrer).indexOf('android-app://')===0){app=true}}catch(e4){}}
  return app?'app':'web';
}
/* 81.أ2 إسقاط العلامة المخزّنة القديمة من مسار القناة نهائيًا — الكشف حي لا محفوظ */
function x52Ch(){
  try{var c=x51Channel();if(c==='app'||c==='web'){return c}}catch(eX1){}
  try{if(window.matchMedia&&window.matchMedia('(display-mode: standalone)').matches){return 'app'}}catch(eX3){}
  return 'web';
}
/* 81.ب المشاركة الحقيقية: قائمة الهاتف إن توفرت، وإلا واتساب مباشرة، وإلا نسخ صادق */
function x81Base(){try{return (''+location.origin)+(''+location.pathname).replace(/[^\\/]*$/,'')}catch(e0){return ''}}
function x81Share(txt){
  var u=x81Base();
  var t=txt||'جرّب منصة X التعليمية — دروس وملخصات وتحديات للطورين المتوسط والثانوي:';
  try{if(navigator&&navigator.share){try{navigator.share({title:'منصة X التعليمية',text:t,url:u}).then(function(){}).catch(function(){})}catch(e1){}return}}catch(e2){}
  try{var wa='https://wa.me/?text='+encodeURIComponent(t+' '+u);var w=window.open(wa,'_blank');if(w){try{toast('📤 فتحنا واتساب — أرسل الرابط لصديقك','success')}catch(e3){}return}}catch(e4){}
  try{if(navigator&&navigator.clipboard&&navigator.clipboard.writeText){navigator.clipboard.writeText(u);try{toast('✅ نُسخ الرابط — هذا المتصفح لا يفتح قائمة المشاركة','success')}catch(e5){}return}}catch(e6){}
  try{toast('⚠️ المشاركة غير مدعومة هنا')}catch(e7){}
}
x77Share=function(){x81Share()};
x44Share=function(){x81Share('تطبيق تعليمي رائع للطورين المتوسط والثانوي — دروس وتمارين واختبارات 🎓 نزّله الآن:');};
/* 81.ج الخلفية لا تتحرك في الموقع: طبقة ثابتة واحدة خلف المحتوى بدل خلفية الجسم المتحركة في متصفح الهاتف */
var __x81BGA=null;
try{__x81BGA=x54BgApply}catch(eB0){}
function x81ChSync(){
  try{
    var he=document.documentElement;
    if(!he||!he.classList){return}
    var isweb=true;
    try{if(typeof x68Mode==='function'&&x68Mode()==='app'){isweb=false}}catch(e1){}
    try{if(typeof x51Channel==='function'&&x51Channel()==='app'){isweb=false}}catch(e2){}
    if(isweb){try{he.classList.add('x81web')}catch(e3){}}else{try{he.classList.remove('x81web')}catch(e4){}}
  }catch(e5){}
}
function x81BgFix(){
  try{
    var el=gid('x81-style');
    if(!el){el=document.createElement('style');el.id='x81-style';(document.head||document.documentElement).appendChild(el)}
    el.textContent=
     'html.x81web{background-image:none!important;background-color:var(--bg-0,transparent)!important}'+
     'html.x81web body{background-image:none!important;background-color:transparent!important}'+
     'html.x81web body::before{background:none!important}'+
     'html.x81web #x54-bg{position:fixed!important;top:0!important;left:0!important;right:0!important;bottom:0!important;z-index:-1!important;pointer-events:none!important}'+
     '/* الشريط السفلي أكبر وأريح في التطبيق والموقع معًا */'+
     '.bnav{align-items:center!important;height:calc(62px + env(safe-area-inset-bottom,0px))!important;padding:6px 8px calc(6px + env(safe-area-inset-bottom,0px))!important}'+
     '.bnav-btn{height:52px!important}'+
     '.x69-backbtn{bottom:calc(76px + env(safe-area-inset-bottom,0px))!important}'+
     '.x41-back{bottom:calc(90px + env(safe-area-inset-bottom,0px))!important}';
  }catch(e0){}
}
try{
x54BgApply=function(){try{if(__x81BGA){__x81BGA()}}catch(eS1){}try{x81ChSync()}catch(eS2){}try{x81BgFix()}catch(eS3){}};
}catch(eB1){}
/* 81.د السلاسة: مراقب DOM واحد مؤجل بدل فحص كل طفرة، وتصيير المعادلات مرة واحدة عند الطلب */
try{if(typeof x80mo!=='undefined'&&x80mo&&x80mo.disconnect){x80mo.disconnect()}}catch(eO0){}
var x81moTo=null;
try{
  if(typeof MutationObserver!=='undefined'&&document.body){
    var x81mo=new MutationObserver(function(){
      try{if(x81moTo){return}x81moTo=setTimeout(function(){x81moTo=null;try{x80SyncPush()}catch(e1){}try{x79OneNav()}catch(e2){}},140)}catch(eM9){}
    });
    x81mo.observe(document.body,{childList:true,subtree:true});
  }
}catch(eO1){}
var __x81TS=typesetApp;
var x81TSTo=null;
typesetApp=function(){
  try{if(x81TSTo){return}x81TSTo=setTimeout(function(){x81TSTo=null;try{__x81TS()}catch(e0){}},80)}catch(e1){}
};
/* 81.هـ غلاف render: مزامنة القناة بعد كل عرض */
var __x81R=render;
render=function(){try{__x81R()}catch(e0){}try{x81ChSync()}catch(e1){}};
try{x81ChSync()}catch(eI1){}
try{x81BgFix()}catch(eI2){}
/* 81.و هوية الإصدار */
APP_META.ver='81.0';APP_META.date='2026-11-06';APP_META.lastUpdate='2026-11-06';
APP_META.notes='الإصدار 81 — قناة دقيقة تعرف المتصفح الحقيقي فلا يظهر شكل التطبيق في الموقع، مشاركة حقيقية تفتح تطبيقات هاتفك (وقائمة واتساب عند غيابها)، خلفية المعرض لا تتحرك في الموقع أبدًا، شريط سفلي أكبر وأريح، ومراقب واحد مؤجل بدل عشرات الفحوص مع كل طفرة — سلاسة وسرعة حقيقتان.';
try{APP_META.changelog.unshift({ver:'81.0',date:'2026-11-06',notes:'قناة دقيقة (المتصفح=موقع دائمًا) + مشاركة تفتح تطبيقات الهاتف وواتساب + خلفية ثابتة في الموقع + شريط أكبر + مراقب DOM واحد مؤجل = سرعة وسلاسة.'})}catch(eV1){}
