/* ============ الطبقة 109h — الإصدار 112.0: ملف المفاتيح الخارجية + صبر رمز التحقق + صقل زجاجي عميق ============ */
/* (أ) جسر ملف المفاتيح js/00-keys.js: يُقرأ window.X_KEYS تلقائيًا ويُوصل المفاتيح بالمنصة
       (Supabase url/anon، وسكربت الإشعارات) — من اليوم ملف واحد للمفاتيح لا يمسه أي تحديث.
   (ب) صبر إرسال رمز التحقق: عند فشل الإرسال لسبب نوم سحابة الحسابات (HTTP 504) يعاد المحاولة
       تلقائيًا 3 مرات كل 5 ثوان مع إشعار صادق — نهاية «انقطع الاتصال بخدمة التحقق» عند أول مردود.
   (ج) صقل زجاجي عميق: شريط سفلي زجاجي أوضح وانتقالات أنعم بروح إنستغرام وتيليجرام.
   (د) تثبيت رقم الإصدار 112.0 بعد الإقلاع — كل شيء ES5 داخل try/catch بسقوط آمن. */
(function(){
try{
/* ---------- 112.أ جسر ملف المفاتيح الخارجية ---------- */
try{
  var K=window.X_KEYS;
  if(K){
    if(K.supabase&&K.supabase.url){
      var u=(''+K.supabase.url).replace(/\/rest\/v1\/?$/,'').replace(/\/+$/,'');
      try{ if(window.SB_CFG){ if(!SB_CFG.url){SB_CFG.url=u} if(!SB_CFG.anon&&K.supabase.anon){SB_CFG.anon=''+K.supabase.anon} } }catch(eK0){}
      try{ if(window.X49_SB_DEF){ if(!X49_SB_DEF.url){X49_SB_DEF.url=u} if(!X49_SB_DEF.anon&&K.supabase.anon){X49_SB_DEF.anon=''+K.supabase.anon} } }catch(eK1){}
    }
    try{
      if(K.push&&K.push.src&&typeof window.X44_PUSH_SRC!=='undefined'&&(''+window.X44_PUSH_SRC)!==(''+K.push.src)){
        window.X44_PUSH_SRC=''+K.push.src;
        if(typeof x44InitCustomPush==='function'){x44InitCustomPush()}
      }
    }catch(eK2){}
    window.XKEYS_READY=true;
  }
}catch(eA112){}
/* ---------- 112.ب صبر إرسال رمز التحقق ---------- */
try{
  if(typeof x44OtpSend==='function'){
    var __x112Otp=x44OtpSend;
    x44OtpSend=function(){
      var args=arguments,self=this,n=0;
      function notify(){try{if(typeof toast==='function')toast('السحابة تستيقظ من السبات — نعيد إرسال الرمز تلقائيًا ('+n+' من 3)')}catch(eT0){}}
      return new Promise(function(res,rej){
        function go(){
          n=n+1;var r;
          try{r=__x112Otp.apply(self,args)}catch(e0){r=Promise.reject(e0)}
          if(!r||typeof r.then!=='function'){r=Promise.resolve(r)}
          r.then(function(v){
            if(v&&v.error&&n<3){notify();setTimeout(go,5000)}
            else{res(v)}
          },function(err){
            if(n<3){notify();setTimeout(go,5000)}
            else{rej(err)}
          });
        }
        go();
      });
    };
  }
}catch(eB112){}
/* ---------- 112.ج صقل زجاجي عميق ---------- */
var CSS112 = ''
  +'.bnav{background:rgba(8,13,24,.8) !important;-webkit-backdrop-filter:blur(20px) !important;backdrop-filter:blur(20px) !important;box-shadow:0 -6px 30px rgba(0,0,0,.35) !important}'
  +'html[data-theme="light"] .bnav{background:rgba(244,247,252,.88) !important;box-shadow:0 -6px 30px rgba(23,36,55,.10) !important}'
  +'.x51-row,.bnav-btn{transition:transform .16s ease,box-shadow .25s ease,background-color .2s ease}'
  +'.x51-row:active{transform:scale(.985)}'
;
try{ if(!document.getElementById('x112-style')){
  var stl112=document.createElement('style');stl112.id='x112-style';stl112.type='text/css';
  stl112.appendChild(document.createTextNode(CSS112));
  document.head.appendChild(stl112);
} }catch(eC112){}
/* ---------- 112.د تثبيت رقم الإصدار بعد الإقلاع ---------- */
var __x112Boot=boot;
  boot=function(){
    try{__x112Boot()}catch(eb0){}
    try{
      APP_META.ver='112.0';APP_META.date='2026-11-22';APP_META.lastUpdate='2026-11-22';
    }catch(eb1){}
  };
}catch(eD112){}
APP_META.ver='112.0';APP_META.date='2026-11-22';APP_META.lastUpdate='2026-11-22';
APP_META.notes='الإصدار 112.0 — ملف المفاتيح الخارجية js/00-keys.js: من اليوم كل مفاتيح الخدمات الخارجية في ملف واحد مستقل لا يمسه أي تحديث (Supabase وسكربت الإشعارات ومن يُضاف لاحقًا)، ويُقرأ تلقائيًا عند الإقلاع. + صبر إرسال رمز التحقق: عند نوم سحابة الحسابات يعاد الإرسال تلقائيًا ثلاث مرات كل خمس ثوان مع إشعار صادق بدل «انقطع الاتصال بخدمة التحقق» من أول مردود. + صقل زجاجي عميق للشريط السفلي — بروح إنستغرام وتيليجرام ويحترم تقليل الحركات.';
try{
  if(!APP_META.changelog||!APP_META.changelog.length||(''+(APP_META.changelog[0]&&APP_META.changelog[0].ver||''))!=='112.0'){
    APP_META.changelog.unshift({ver:'112.0',date:'2026-11-22',notes:'ملف المفاتيح الخارجية js/00-keys.js (لا يمسه أي تحديث) + صبر إرسال رمز التحقق (3 محاولات تلقائية عند نوم السحابة) + صقل زجاجي عميق للشريط السفلي'});
  }
}catch(eM112){}
window.fallbackNews18=function(){
  return [{title:'الإصدار 112.0 — ملف المفاتيح + صبر رمز التحقق',
    body:'كل مفاتيح الخدمات الآن في ملف واحد مستقل لا يمسه أي تحديث، وإرسال رمز التحقق صار صبورًا: عند نوم السحابة يعيد المحاولة تلقائيًا ثلاث مرات بدل رسالة انقطاع فورية.',
    date:APP_META.date}];
};
window.x112t={ver:'112.0',keysBridge:true,otpPatient:true,glassPolish:true};

})();
