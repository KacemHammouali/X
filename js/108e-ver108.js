/* ============ الطبقة 108e — الإصدار 108.0: نهاية لوحة «هناك تحديث» + ثبات الخلفية والإعدادات ============ */
/* (أ) العلة الجذرية الأولى (لوحة التحديث الأبدية): الملف الأخير 109-ver104-meta يعيد ضبط رقم
       الإصدار إلى 104.0 بعد كل الطبقات، فيظن التطبيق نفسه قديمًا بينما ملفاته جديدة — فتظهر
       لوحة «هناك تحديث» دائمًا حتى بعد التحديث. الغلاف هنا يعيد تثبيت الرقم الحقيقي بعد اكتمال
       الإقلاع — نفس العلة تُعالج أينما وُجدت.
   (ب) العلة الجذرية الثانية (خلفية تختفي بعد إعادة الفتح): عند تسجيل الدخول قد تكون سحابة
       الحسابات نائمة (HTTP 504) فيفشل جلب ملف إعدادات المسجل ولا يُعاد تحميله أبدًا فترجع
       الافتراضية. هنا: مزامنة مؤجلة تنتظر ظهور الجلسة وتعيد تحميل الإعدادات وتطبقها حتى لو
       كانت السحابة نائمة (الملف المشترك على الجهاز يكفي)، ومن يملك ملفًا أقدم لا يطغى على
       الأحدث (كل حفظ يحمل طورًا زمنيًا يقرأ منه الأحدث فحسب).
   (ج) إصلاح غلاف قفزة التمرير الذي كان ميتًا في 107 (return قبل سطر الإعادة): يعمل الآن فعليًا.
   (د) ضمانة التحديث النهائية: كل ضغطة «تحديث الآن» تسجل الإصدار الهدف؛ إن لم يصل التطبيق
       إليه بعد ثلاثة إقلاعات يُمسح عامل الخدمة وكل الذواكر ويُعاد التحميل — فالتحديث يصل حتمًا.
   (هـ) ملء الخلفية للوضعين معًا: من يختار خلفية والوضع الآخر افتراضي يجدها في الوضعين فلا «مفاجأة
       تغيير خامالة» عند تبديل الوضع.
   (و) كل شيء ES5 داخل try/catch مع سقوط آمن — لا حذف ولا كسر لأي وظيفة قائمة. */
(function(){
/* ---------- 108.أ الإعدادات ملفان بتطور زمني: ملف الأحدث يفوز دائمًا ---------- */
try{
  saveXCFG=function(){
    try{XCFG.ts=Date.now()}catch(eS0){}
    try{stSet('x15_cfg_local',XCFG)}catch(eS1){}
    try{
      var uid=(USER&&USER.session&&USER.session.user&&USER.session.user.id)?('x15_cfg_'+USER.session.user.id):'';
      if(uid){try{stSet(uid,XCFG)}catch(eS3){}}
    }catch(eS2){}
    try{window.__x108Dirty=true}catch(eS4){}
  };
  loadXCFG=function(){
    var vL=null,vU=null,tL=0,tU=0;
    try{vL=stGet('x15_cfg_local',null)}catch(eK0){vL=null}
    try{
      var uid=(USER&&USER.session&&USER.session.user&&USER.session.user.id)?('x15_cfg_'+USER.session.user.id):'';
      if(uid){vU=stGet(uid,null)}
    }catch(eK1){}
    try{tL=(vL&&vL.ts)?(+vL.ts||0):0}catch(eK2){tL=0}
    try{tU=(vU&&vU.ts)?(+vU.ts||0):0}catch(eK3){tU=0}
    /* ملف الجهاز المحلي مصدر موثوق من الإصدار 107 (حفظ مزدوج) — والمسجل إذا كان أحدث */
    var pick=vU;
    if(!(vU&&(tU>=tL))){pick=vL}
    if(pick){try{for(var k in pick){if(XCFG.hasOwnProperty(k)){XCFG[k]=pick[k]}}}catch(eK5){}}
    try{XCFG.ts=(tU>tL)?tU:tL}catch(eK6){}
  };
}catch(e0){}
/* حرس المفاتيح (نفس قواعد 107): تعبئة الناقص ثم التحميل ثم التطبيق */
var X108_DEFAULTS={theme:'dark',accent:'blue',font:'m',motion:true,fxLevel:'full',sound:true,vol:6,beep:true,
  notifNews:true,notifStudy:false,lang:'ar',
  density:'cozy',contrast:false,borders:false,hideMail:false,quiet:false,sndNtf:true,ntfUpd:true,
  bgD:'def',bgL:'def',dimD:.45,dimL:.15,imgD:'',imgL:'',posD:'center',posL:'center',inkD:'',inkL:''};
function x108Guard(){
  try{
    var fixed=false;
    for(var k in X108_DEFAULTS){if(X108_DEFAULTS.hasOwnProperty(k)&&XCFG[k]===undefined){XCFG[k]=X108_DEFAULTS[k];fixed=true}}
    if(fixed){try{var wD=window.__x108Dirty;saveXCFG();window.__x108Dirty=wD}catch(eG1){}}
    try{loadXCFG()}catch(eG2){}
    try{applyXCFG()}catch(eG3){}
  }catch(eG4){}
}
try{x108Guard()}catch(e1){}

/* ---------- 108.ب إصلاح غلاف قفزة التمرير (كان ميتًا: return قبل الإعادة) ---------- */
try{
  var __x108SetX=setX;
  setX=function(k,v){
    var y=0;
    try{y=window.pageYOffset||(document.documentElement&&document.documentElement.scrollTop)||0}catch(eR0){y=0}
    try{__x108SetX(k,v)}catch(eS1){
      try{XCFG[k]=v;saveXCFG();applyXCFG();render()}catch(eS2){}
    }
    /* إعادة موضع التمرير بعد رسم الصفحة — تعمل الآن في كل الحالات */
    try{
      setTimeout(function(){
        try{window.scrollTo(0,y)}catch(eR1){try{window.scrollTo(y,0)}catch(eR2){}}
      },0);
    }catch(eR3){}
  };
}catch(e2){}

/* ---------- 108.ج الخلفية للوضعين معًا عند فراغ أحدهما ---------- */
try{
  var __x108BASel=x48BgApplySel;
  x48BgApplySel=function(){
    try{__x108BASel()}catch(eB0){
      try{
        var eff=x48EffTheme();
        if(eff==='light'){XCFG.bgL=(X48.pimg?'def':(X48.pid||'def'));XCFG.imgL=X48.pimg||'';XCFG.dimL=(+X48.pdim||0)/100;XCFG.posL=X48.ppos||'center'}
        else{XCFG.bgD=(X48.pimg?'def':(X48.pid||'def'));XCFG.imgD=X48.pimg||'';XCFG.dimD=(+X48.pdim||0)/100;XCFG.posD=X48.ppos||'center'}
        saveXCFG();x48BgApply();xCloseModal();
      }catch(eB1){}
      return;
    }
    try{
      var filledD=(XCFG.bgD&&XCFG.bgD!=='def')||(XCFG.imgD&&XCFG.imgD!=='');
      var filledL=(XCFG.bgL&&XCFG.bgL!=='def')||(XCFG.imgL&&XCFG.imgL!=='');
      if(filledD&&!filledL){XCFG.bgL=XCFG.bgD;XCFG.imgL=XCFG.imgD;XCFG.dimL=XCFG.dimD;XCFG.posL=XCFG.posD;saveXCFG();try{x48BgApply()}catch(eB2){}}
      else if(filledL&&!filledD){XCFG.bgD=XCFG.bgL;XCFG.imgD=XCFG.imgL;XCFG.dimD=XCFG.dimL;XCFG.posD=XCFG.posL;saveXCFG();try{x48BgApply()}catch(eB3){}}
    }catch(eB4){}
  };
}catch(e3){}

/* ---------- 108.د ضمانة التحديث: سجل الهدف + إنقاذ نووي بعد ثلاثة إقلاعات ---------- */
try{
  var __x108AU=window.applyUpdate;
  window.applyUpdate=function(){
    try{
      var t=(typeof XUPD!=='undefined'&&XUPD.newer&&XUPD.newer.ver)?(''+XUPD.newer.ver):'108.0';
      try{stSet('x108_target',t)}catch(eT1){}
      try{stSet('x108_att',0)}catch(eT2){}
    }catch(eT0){}
    try{return __x108AU()}catch(eU1){
      try{if(typeof x50HardReload==='function'){return x50HardReload()}}catch(eU2){}
      try{location.reload()}catch(eU3){}
    }
  };
}catch(e4){}
function x108Nuke(){
  try{localStorage.removeItem('x32_upd_seen')}catch(eN0){}
  try{localStorage.removeItem('x108_target')}catch(eN1){}
  try{localStorage.removeItem('x108_att')}catch(eN2){}
  try{
    if(navigator.serviceWorker&&navigator.serviceWorker.getRegistrations){
      navigator.serviceWorker.getRegistrations().then(function(rs){
        for(var i=0;i<(rs||[]).length;i++){try{rs[i].unregister()}catch(eN3){}}
        try{
          caches.keys().then(function(ks){
            return Promise.all(ks.map(function(k){return caches.delete(k)}));
          }).catch(function(){}).then(function(){
            try{location.replace((''+location.pathname).split('?')[0]+'?x108='+Date.now()+(location.hash||''))}catch(eN4){try{location.reload()}catch(eN5){}}
          });
        }catch(eN6){try{location.reload()}catch(eN7){}}
      }).catch(function(){try{location.reload()}catch(eN8){}});
      return;
    }
  }catch(eN9){}
  try{location.reload()}catch(eN10){}
}
try{
  var t108=null;
  try{t108=stGet('x108_target',null)}catch(eK7){t108=null}
  if(t108){
    var ahead=false;
    try{ahead=(typeof x41VerNum==='function')&&(x41VerNum(APP_META.ver)>=x41VerNum(''+t108))}catch(eK8){ahead=('+'+APP_META.ver>='+'+t108)}
    if(ahead){
      try{localStorage.removeItem('x108_target')}catch(eK9){}
      try{localStorage.removeItem('x108_att')}catch(eKA){}
    }else{
      var att=0;
      try{att=parseInt(stGet('x108_att',0),10)||0}catch(eKB){att=0}
      att=att+1;
      try{stSet('x108_att',att)}catch(eKC){}
      if(att>=3){x108Nuke()}
    }
  }
}catch(e5){}

/* ---------- 108.هـ ميث الإقلاع: تثبيت رقم الإصدار + مزامنة مؤجلة للإعدادات ---------- */
var X108_META_DONE=false;
try{
  var __x108Boot=boot;
  boot=function(){
    try{__x108Boot()}catch(eB0){}
    try{x108Guard()}catch(eB1){}
    try{
      if(!X108_META_DONE){
        X108_META_DONE=true;
        APP_META.ver='108.0';APP_META.date='2026-11-22';APP_META.lastUpdate='2026-11-22';
      }
    }catch(eB2){}
    /* مزامنة مؤجلة: عند ظهور الجلسة (حتى مع سحابة نائمة) تُعاد قراءة الإعدادات وتطبَّق */
    try{
      var ticks=0,x108Synced=false;
      var iv=setInterval(function(){
        ticks=ticks+1;
        try{
          var hasSess=(USER&&USER.session&&USER.session.user&&USER.session.user.id)?true:false;
          if(hasSess&&!x108Synced){
            var before=window.__x108Dirty;
            loadXCFG();
            if(!before){try{applyXCFG()}catch(eY1){}}
            x108Synced=true;clearInterval(iv);
          }
        }catch(eY0){}
        if(ticks>25){try{clearInterval(iv)}catch(eY2){}}
      },400);
    }catch(eB3){}
  };
}catch(e6){}

/* ---------- 108.و الميتاداتا: الإصدار 108.0 ---------- */
APP_META.ver='108.0';APP_META.date='2026-11-22';APP_META.lastUpdate='2026-11-22';
APP_META.notes='الإصدار 108.0 — نهاية لوحة «هناك تحديث» نهائيًا: سببها الجذري أن آخر ملف في التطبيق كان يعيد رقم الإصدار إلى الأثر فيظن التطبيق قديمًا دائمًا؛ الآن رقم الإصدار مثبت من طبقة الإقلاع نفسها، وكل ضغطة «تحديث الآن» تسجل هدفها وإن لم يصل بعد ثلاثة محاولات يُمسح عامل الخدمة وكل الذواكر ويُعاد التحميل فالتحديث يصل حتمًا. وفي الإعدادات: الخلفية التي تختارها تبقى بعد خروجك من التطبيق حتى مع أطفاء سحابة الحسابات (مزامنة مؤجلة تقرأ الجهاز نفسه)، والملف الأحدث هو المتغلب دائمًا بطور زمني، وملء الخلفية للوضعين الداكن والفاتح معًا إذا كان أحدهما افتراضيًا، وإصلاح حقيقي لبقاء موضع التمرير عند كل تغيير إعداد.';
try{
  if(!APP_META.changelog||!APP_META.changelog.length||(''+(APP_META.changelog[0]&&APP_META.changelog[0].ver||''))!=='108.0'){
    APP_META.changelog.unshift({ver:'108.0',date:'2026-11-22',notes:'نهاية لوحة «هناك تحديث» (تثبيت رقم الإصدار + ضمانة وصول التحديث بعد ثلاث محاولات) + ثبات الخلفية بعد إعادة الفتح حتى مع سحابة نائمة + الخلفية للوضعين معًا + بقاء موضع التمرير فعليًا عند كل تغيير'});
  }
}catch(eM108){}
window.fallbackNews18=function(){
  return [{title:'الإصدار 108.0 — لوحة «هناك تحديث» انتهت نهائيًا',
    body:'رقم الإصدار يثبت من طبقة الإقلاع، والتحديث يصل حتمًا بضمانة ثلاث محاولات، والخلفية وإعداداتك تبقى بعد خروجك من التطبيق حتى مع أطفاء سحابة الحسابات.',
    date:APP_META.date}];
};
window.x108t={ver:'108.0',verHeal:true,updateNuke:true,cfgTS:true,scrollKeepFixed:true,bgBothModes:true};
})();
