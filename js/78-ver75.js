/* ===================== طبقة 75.0 - منصة X — الإصدار الحاسم: قناة حية + حركة مضمونة + نزع «برابط الرسالة» نهائيًا + زر إشعارات واحد في ملفي + زر العودة للأعلى + تصميم موحد ===================== */
/* 75.أ تنظيف سُمّ القناة القديمة: منذ 75 تُعرف قناة التطبيق من إشارات حية عند كل تشغيل (توقيع android-app أو وضع التثبيت) — لا علامة مخزنة يمكن أن تسمّم المتصفح فتجمّد عليه نسخة قديمة وتشاركه الحساب */
try{localStorage.removeItem('x51_channel')}catch(eF0){}

/* 75.ب الحركة (التمرير) مضمونة: قواعد inline على html أقوى من كل طبقة + عقدة ستايل + حارس عند كل عرض */
try{
  var x75he=document.documentElement;
  if(x75he&&x75he.style&&x75he.style.setProperty){
    x75he.style.setProperty('overflow','visible','important');
    x75he.style.setProperty('overflow-x','visible','important');
    x75he.style.setProperty('overflow-y','visible','important');
  }
}catch(eSC1){}
try{
  var st75a=document.createElement('style');
  st75a.id='x75-style-a';
  st75a.textContent=
   'html{overflow:visible!important;overflow-x:visible!important;overflow-y:visible!important}'+
   'html,body{touch-action:pan-x pan-y!important}'+
   'body{-webkit-overflow-scrolling:touch!important}'+
   'body.x71-lock{overflow:hidden!important}'+
   '#x71lp .x71-body,#x72sec-bd{overflow-y:auto!important;-webkit-overflow-scrolling:touch}'+
   'body::before{background-attachment:fixed!important}'+
   '#x73bgfix{position:fixed!important;top:0!important;left:0!important;right:0!important;bottom:0!important}';
  var x75hdA=document.head||document.documentElement;
  if(x75hdA&&x75hdA.appendChild){x75hdA.appendChild(st75a)}
}catch(eSC2){}

/* 75.ج مراقب دائم: أي ظهور لسطر «برابط الرسالة» من أي مسار قديم يُمسح فورًا */
var X75_OTP='📌 الرمز هو <b>الرقم الكبير</b> في <b>آخر رسالة</b> فقط — كل رسالة جديدة تُلغي رموز الرسائل الأقدم.';
function x75Purge(){
  try{
    var a=gid('x61-linkrow');
    if(a){try{if(a.parentNode){a.parentNode.removeChild(a)}}catch(e1){try{a.remove()}catch(e2){}}}
    var b=gid('x61-link');
    if(b){try{if(b.parentNode){b.parentNode.removeChild(b)}}catch(e3){}}
    var c=gid('x58otphint');
    if(c&&((''+c.innerHTML).indexOf('برابط الرسالة')>=0)){try{c.innerHTML=X75_OTP}catch(e4){}}
    var d=gid('x61paste');
    if(d){try{if(d.parentNode){d.parentNode.removeChild(d)}}catch(e5){}}
  }catch(e6){}
}
try{
  if(window.MutationObserver&&document.body){
    var x75MO=new window.MutationObserver(function(){x75Purge()});
    x75MO.observe(document.body,{childList:true,subtree:true});
  }
}catch(eMO1){}
try{x61LinkToggle=function(){try{toast('أدخل الرمز الرقمي فقط — طريقة الرابط لم تعد مستعملة','error')}catch(eT1){}}}catch(eLT1){}

/* 75.د الإشعارات: بطاقتا الإعدادات تختفيان نهائيًا — زر واحد نظيف في «ملفي» */
try{x72PushCardHtml=function(){return ''}}catch(ePC1){}
try{x74PushDataHtml=function(){return ''}}catch(ePC2){}
function x75NotifHtml(){
  return '<div class="set-card glass" id="x75push-card">'+
   '<h4>🔔 إشعارات المنصة</h4>'+
   '<p class="set-note">فعّلها لتصلك الدروس والإعلانات الجديدة حتى والتطبيق مغلق — بضغطة واحدة.</p>'+
   '<button class="btn btn-primary btn-block" onclick="try{x75PushOn()}catch(e){}">🔔 تفعيل الإشعارات</button>'+
   '</div>';
}
function x75PushOn(){
  var ok=false;
  try{if(typeof x72PushFix==='function'){x72PushFix();ok=true}}catch(e1){}
  if(!ok){
    try{
      var NN=(typeof Notification!=='undefined')?Notification:((window&&window.Notification)?window.Notification:null);
      if(NN&&NN.requestPermission){
        NN.requestPermission(function(p){
          try{toast((p==='granted')?'✅ الإشعارات مفعّلة على هذا الجهاز':'⚠️ لم تُمنح الصلاحية — فعّلها من إعدادات الجهاز ثم أعد المحاولة',(p==='granted')?'success':'error')}catch(e2){}
        });
        return;
      }
    }catch(e3){}
    try{toast('⚠️ هذا الجهاز لا يدعم الإشعارات','error')}catch(e4){}
  }
}
var __x75Prof=renderProfilePage18;
renderProfilePage18=function(){
  var h='';
  try{h=__x75Prof()}catch(e1){}
  try{h=(''+h)+x75NotifHtml()}catch(e2){}
  return h;
};

/* 75.هـ زر العودة للأعلى (ميزة جديدة) */
function x75TopBtn(){
  try{
    var b=document.getElementById('x75top');
    if(!b){
      b=document.createElement('button');
      b.type='button';b.id='x75top';
      b.innerHTML='<span style="display:inline-flex;align-items:center;justify-content:center;width:100%;height:100%;line-height:1;font-size:19px;font-weight:900">\u2191</span>';
      try{b.onclick=function(){try{window.scrollTo({top:0,behavior:'smooth'})}catch(e1){try{window.scrollTo(0,0)}catch(e2){}}}}catch(e3){}
      try{(document.body||document.documentElement).appendChild(b)}catch(e4){}
    }
    try{
      var sy=0;
      try{sy=window.pageYOffset||((document.documentElement&&document.documentElement.scrollTop)||0)}catch(e5){}
      b.style.display=(sy>600)?'flex':'none';
    }catch(e6){}
  }catch(e7){}
}
try{window.addEventListener('scroll',function(){try{x75TopBtn()}catch(e){}},true)}catch(e8){}

/* 75.و غلاف render الأخير: حارس الحركة + نزع بقايا بطاقتي الإشعارات + التطهير + زر الأعلى */
var __x75R=render;
render=function(){
  var o=null;
  try{o=__x75R()}catch(e1){}
  try{
    try{
      var bd=document.body;
      if(bd&&bd.classList&&bd.classList.contains('x71-lock')){
        var lp=null,sp=null;
        try{lp=gid('x71lp')}catch(e2){}
        try{sp=gid('x72sec')}catch(e3){}
        if(!lp&&!sp){try{bd.classList.remove('x71-lock')}catch(e4){}try{bd.style.overflow=''}catch(e5){}}
      }
    }catch(e6){}
    try{
      var pc=gid('x72push-card');
      if(pc&&pc.parentNode){try{pc.parentNode.removeChild(pc)}catch(e7){}}
      var pd=gid('x74pushdata');
      if(pd&&pd.parentNode){try{pd.parentNode.removeChild(pd)}catch(e8){}}
    }catch(e9){}
    try{x75Purge()}catch(e10){}
    try{x75TopBtn()}catch(e11){}
  }catch(e12){}
  return o;
};

/* 75.ز التصميم الموحد بروح إنستغرام/تيليجرام: أسطح أنظف + صفوف الإعدادات + أزرار + شريط أنقى + وضع فاتح */
try{
  var st75z=document.createElement('style');
  st75z.id='x75-style';
  st75z.textContent=
   '.glass{border-radius:20px!important;border:1px solid rgba(255,255,255,.075)!important;box-shadow:0 12px 34px rgba(0,0,0,.35)!important}'+
   '.glass-strong{border-radius:22px!important;border:1px solid rgba(255,255,255,.10)!important}'+
   '.set-card,.h15-card,.auth-card{border-radius:20px!important}'+
   '.btn{border-radius:14px!important;font-weight:800!important;transition:transform .16s ease,box-shadow .2s ease,border-color .2s ease}'+
   '.btn:active{transform:scale(.96)!important}'+
   '.btn-primary{background:linear-gradient(115deg,#2A7DE1 0%,#229ED9 100%)!important;border:0!important;box-shadow:0 8px 24px rgba(34,158,217,.35)!important}'+
   '.x51-hero{border-radius:24px!important;background:linear-gradient(135deg,rgba(131,58,180,.18),rgba(225,48,108,.10) 55%,rgba(247,119,55,.15))!important;border:1px solid rgba(225,48,108,.20)!important}'+
   '.x51-grpt{font-weight:900!important;letter-spacing:.4px!important;margin:20px 4px 8px!important}'+
   '.x51-row{background:linear-gradient(145deg,rgba(255,255,255,.055),rgba(255,255,255,.02))!important;border:1px solid rgba(255,255,255,.085)!important;border-radius:16px!important;margin:0 0 10px!important;padding:13px 15px!important;transition:transform .15s ease,background .2s ease!important}'+
   '.x51-row:active{transform:scale(.975)!important;background:rgba(255,255,255,.09)!important}'+
   '.x51-back,.x69-backbtn,.x71-backbtn,.x72sec-b{display:inline-flex!important;align-items:center!important;justify-content:center!important;line-height:1!important;padding:0!important}'+
   '.bnav-btn.bnav-on{color:#F4F6F8!important}'+
   '.bnav-btn.bnav-on svg{stroke-width:2.5;filter:none!important}'+
   '.subject-card,.info-card{transition:transform .22s ease,box-shadow .25s ease}'+
   '.subject-card:active,.info-card:active{transform:scale(.985)}'+
   '.inp,.fld input,.fld select,.fld textarea{border-radius:13px!important}'+
   '.toast{border-radius:16px!important}'+
   '#x75top{position:fixed;bottom:calc(86px + env(safe-area-inset-bottom,0px));right:14px;z-index:90;width:46px;height:46px;border-radius:50%;border:1px solid rgba(255,255,255,.16);background:linear-gradient(135deg,#2A7DE1,#7C3AED);color:#fff;font-family:inherit;cursor:pointer;box-shadow:0 10px 28px rgba(44,110,210,.45);display:none;align-items:center;justify-content:center;padding:0}'+
   '#x75top:active{transform:scale(.9)}'+
   'html[data-theme="light"] .x51-row{background:#fff!important;border-color:rgba(15,23,42,.09)!important;box-shadow:0 4px 14px rgba(15,23,42,.06)!important}'+
   'html[data-theme="light"] .glass{border-color:rgba(15,23,42,.07)!important}'+
   'html[data-theme="light"] .x51-hero{border-color:rgba(225,48,108,.18)!important}'+
   'html[data-theme="light"] .bnav-btn.bnav-on{color:#0F1419!important}'+
   '@media(prefers-reduced-motion:reduce){#x75top,.x51-row,.btn{transition:none!important}}';
  var x75hdZ=document.head||document.documentElement;
  if(x75hdZ&&x75hdZ.appendChild){x75hdZ.appendChild(st75z)}
}catch(eStZ){}

/* 75.ح بيانات الإصدار */
try{
APP_META.ver='75.0';APP_META.date='2026-11-05';APP_META.lastUpdate='2026-11-05';
APP_META.notes='الإصدار 75 — الإصلاح الحاسم: كشف قناة التطبيق أصبح حيًا عند كل تشغيل (يشفي تجميد المتصفح على نسخة قديمة وتشارك الحساب بين التطبيق والموقع)، الحركة (التمرير) مضمونة بقواعد أقوى من كل الطبقات، نزع «برابط الرسالة» نهائيًا بمراقب دائم يرى كل المسارات، زر إشعارات واحد نظيف في «ملفي»، زر العودة للأعلى، سهم متمركز، شريط سفلي إنستغرام أنقى، وتصميم موحد عالمي.';
try{if(APP_META.changelog&&APP_META.changelog.unshift){APP_META.changelog.unshift({ver:'75.0',date:'2026-11-05',notes:'قناة حية + حركة مضمونة + نزع رابط الرسالة بمراقب دائم + زر إشعارات في ملفي + زر العودة للأعلى + تصميم موحد.'})}}catch(eV2){}
try{if(typeof fallbackNews18==='function'){fallbackNews18()}}catch(eV3){}
}catch(eV1){}

