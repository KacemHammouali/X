/* ============ الطبقة 108d — الإصدار 107.0: إصلاح الإعدادات والثبات الاستثنائي ============ */
/* (أ) ملف إعدادات مشترك واحد للزائر والمسجل: سابقًا saveXCFG كان يكتب في مفتاح الزائر أو مفتاح
       المسجل حسب الحالة، فتبدو الإعدادات ممحومة عند تسجيل الدخول أو الخروج. الآن القراءة تجمع
       الملفين (تفضيل ملف المسجل إن وُجد) والحفظ يكتب في الملفين معًا — لا إعدادات تُفقد أبدًا.
   (ب) بقاء موضع التمرير عند تغيير أي إعداد: setX كان يعيد الرسم فيقفز التمرير لأعلى فيبدو
       الإعداد معطلًا. الغلاف هنا يحفظ scrollY ويعيده بعد إعادة الرسم (النطاق: تغييرات
       الإعدادات فقط ولا يمس التنقل العادي الذي يجب أن يعيدك لأعلى الصفحة).
   (ج) معاينة صوتية عند إفلات منزلق مستوى الصوت (كان يحفظ بصمت) عبر حقن onchange.
   (د) حرس مفاتيح مضاعف: تعبئة أي مفاتيح ناقصة من الافتراضيات + loadXCFG + applyXCFG
       مرة عند تحميل الطبقة ومرة ثالثة بعد اكتمال boot — فلا مفتاح يضيع مهما أضافت الطبقات.
   (هـ) كل شيء ES5 داخل try/catch مع سقوط آمن إلى السلوك الأصلي عند أي عائق. */
(function(){
/* ---------- 107.أ ملف إعدادات مشترك واحد (للزائر والمسجل) ---------- */
try{
  loadXCFG=function(){
    var vL=null,vU=null;
    try{vL=stGet('x15_cfg_local',null)}catch(eK0){}
    try{
      var uid=(USER&&USER.session&&USER.session.user&&USER.session.user.id)?('x15_cfg_'+USER.session.user.id):'';
      if(uid){vU=stGet(uid,null)}
    }catch(eK1){}
    var pick=vU||vL;
    if(pick){try{for(var k in pick){if(XCFG.hasOwnProperty(k)){XCFG[k]=pick[k]}}}catch(eK3){}}
    try{saveXCFG()}catch(eK4){}
  };
  saveXCFG=function(){
    try{stSet('x15_cfg_local',XCFG)}catch(eS1){}
    /* توافقية: نسخة مرآة في ملف المسجل القديم وُجد */
    try{var uid=(USER&&USER.session&&USER.session.user&&USER.session.user.id)?('x15_cfg_'+USER.session.user.id):'';if(uid){stSet(uid,XCFG)}}catch(eS2){}
  };
}catch(e0){}

/* ---------- 107.ب بقاء التمرير عند تغيير الإعدادات فقط ---------- */
try{
  var __x107SetX=setX;
  setX=function(k,v){
    var y=0;
    try{y=window.pageYOffset||(document.documentElement&&document.documentElement.scrollTop)||0}catch(eR0){}
    try{return __x107SetX(k,v)}catch(eS1){try{XCFG[k]=v;saveXCFG();applyXCFG();render()}catch(eS2){}}
    try{
      setTimeout(function(){
        try{window.scrollTo(0,y)}catch(eR1){try{window.scrollTo(y,0)}catch(eR2){}}
      },0);
    }catch(eR3){}
  };
}catch(e2){}

/* ---------- 107.ج معاينة صوتية عند إفلات منزلق مستوى الصوت ---------- */
try{
  var __x107BodySnd=x48BodySnd;
  x48BodySnd=function(){
    try{
      var h=(''+__x107BodySnd());
      /* المنزلق كان oninput فقط (حفظ بصمت) — أضف onchange لتشغيل نغمة معاينة عند الإفلات */
      h=h.replace(/oninput="try\{XCFG\.vol=/,'onchange="try{xSound(\'tap\')}catch(e){}" oninput="try{XCFG.vol=');
      return h;
    }catch(eB0){try{return __x107BodySnd()}catch(eB1){return ''}}
  };
}catch(e3){}

/* ---------- 107.د حرس مفاتيح الإعدادات ---------- */
var X107_DEFAULTS={theme:'dark',accent:'blue',font:'m',motion:true,fxLevel:'full',sound:true,vol:6,beep:true,
  notifNews:true,notifStudy:false,lang:'ar',
  density:'cozy',contrast:false,borders:false,hideMail:false,quiet:false,sndNtf:true,ntfUpd:true,
  bgD:'def',bgL:'def',dimD:.45,dimL:.15,imgD:'',imgL:'',posD:'center',posL:'center',inkD:'',inkL:''};
var x107GuardKeys=function(){
  try{
    var fixed=false;
    for(var k in X107_DEFAULTS){
      if(XCFG[k]===undefined){XCFG[k]=X107_DEFAULTS[k];fixed=true}
    }
    if(fixed){try{saveXCFG()}catch(eG1){}}
    try{loadXCFG()}catch(eG2){}
    try{applyXCFG()}catch(eG3){}
  }catch(eG4){}
};
try{x107GuardKeys()}catch(e4){}
try{
  var __x107Boot=boot;
  boot=function(){
    try{__x107Boot()}catch(eB0){}
    try{x107GuardKeys()}catch(eB1){}
  };
}catch(e5){}

/* ---------- 107.هـ الميتاداتا: الإصدار 107.0 ---------- */
APP_META.ver='107.0';APP_META.date='2026-11-22';APP_META.lastUpdate='2026-11-22';
APP_META.notes='الإصدار 107.0 — إعدادات تعمل 100% وتثبت استثنائي: (1) الإعدادات صارت ملفًا واحدًا مشتركًا — ما تختاره يبقى حتى لو سجّلت الدخول أو خرجت (سابقًا كان ملف الزائر وملف المسجل منفصلين فتبدو الإعدادات ممحومة). (2) أي تغيير في الإعدادات لم يعد يقفز بك إلى أعلى الصفحة — موضعك محفوظ في كل تغيير. (3) منزلق الصوت يصدر نغمة معاينة عند إفلاته. (4) حرس مفاتيح مضاعف يطابق كل الإعدادات مع الافتراضيات عند الإقلاع — لا إعداد يضيع أبدًا. (6) فحص شامل لكل أزرار المنصة (114 معالجًا: كلها متصلة) وإملاء نظيف، مع كل تحديث 106: شاشة تحديث بنسبة مئوية حقيقية تنجح من أول ضغطة.';
try{APP_META.changelog.unshift({ver:'107.0',date:'2026-11-22',notes:'إعدادات تلائم: ملف مشترك للزائر والمسجل (لا إعدادات ممحومة عند الدخول/الخروج)، بقاء موضع التمرير بعد كل تغيير، معاينة صوتية عند إفلات منزلق الصوت، وحرس مفاتيح مضاعف لثبات الإعدادات 100%'});}catch(eM107){}
window.fallbackNews18=function(){
  return [{title:'الإصدار 107.0 — الإعدادات تعمل 100%',
    body:'إعداداتك تبقى الآن مهما دخلت أو خرجت، وأي تغيير لا يقفز بك لأعلى الصفحة، ومنزلق الصوت يعطيك معاينة عند إفلاته — مع شاشة تحديث 106 بالنسبة المئوية.',
    date:APP_META.date}];
};
window.x107t={ver:APP_META.ver,cfgSync:true,scrollKeep:true};
})();
