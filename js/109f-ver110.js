/* ============ الطبقة 109f — الإصدار 110.0: احترافية الظهور والتمركز وشفافية الخلفية ============ */
/* (أ) الصدق عن المتصفح: ما رآه المالك (شريط العنوان في الأعلى) ليس من التطبيق ولا من المستودع —
       المانيفست سليم (fullscreen) وملف assetlinks.json حي وبالبصمة الصحيحة وفي المستودع الجذري.
       الشريط يظهر عندما تُفتح المنصة داخل كروم نفسه، أو إذا لم يكتمل التحقق الأمني عند أول تثبيت بلا إنترنت.
       هنا: لافتة صادقة تظهر فقط عند الفتح من المتصفح تشرح الطريق الصحيح (أيقونة تطبيق منصة X = X.HAK)
       — ولا تظهر أبدًا داخل التطبيق المثبت. مع إضافة display_override إلى المانيفست (ملف منفصل).
   (ب) فقاعة اسم التبويب بالضغط المطول: إعادة تمركز دقيقة بعد استقرار الخط والانتقال — تنتهي
       الحالة «الاسم يخرج مزاحًا قليلًا». طبقة 108b الفقاعة داخل IIFE جمعية — لا يمكن لفّها بصمت:
       نستمع لللمسة بأسرنا الخاص ونعيد ضبط left من مركز الزر بعد 435ms وبعد ثوان ومجيء الخط.
   (ج) شفافية الخلفية والتفريغ: بطاقة تشخيص صادقة داخل قسم «معلومات التطبيق» تعرض أي ملف إعدادات
       فاز (محلي أو حساب) بطوره الزمني، وقيمة الخلفية الداكنة/الفاتحة وحجم صورها، وآخر حفظ منذ كم
       — لوحة حسم نهائي: إن ظهرت الخلفية محفوظة في البطاقة وعادت الافتراضية بعد تشغيل، الصورة لقطة
       واحدة تحسم مصدرها فورًا.
   (د) ضغط أعمق لصور الخلفية الكبيرة عند الحفظ: إن تجاوزت dataURL ~600 كيلوبايت تعاد الكبس بعرض
       720 وجودة 0.7 لضمان مخزون كافٍ للملفين (محلي+حساب) — نهاية «حُفظت ثم عادت الافتراضية»
       بسبب امتلاء مساحة التخزين.
   (و) كل شيء ES5 داخل try/catch مع سقوط آمن — لا حذف ولا كسر لأي وظيفة قائمة. */
(function(){

/* ---------- 110.أ لافتة المتصفح الصادقة (تظهر داخل المتصفح فقط) ---------- */
try{
  var x110InApp=false;
  try{
    var mm=window.matchMedia;
    x110InApp=(mm&&mm('(display-mode: fullscreen)').matches)||(mm&&mm('(display-mode: standalone)').matches)||(mm&&mm('(display-mode: minimal-ui)').matches)||(mm&&mm('(display-mode: window-controls-overlay)').matches);
  }catch(eA1){}
  if(!x110InApp){
    try{
      var seen=false;
      try{seen=(window.sessionStorage&&window.sessionStorage.getItem('x110_brw')==='1')?true:false}catch(eA2){}
      if(!seen){
        var bn=document.createElement('div');
        bn.id='x110-brw';
        bn.setAttribute('dir','rtl');
        bn.setAttribute('style','position:fixed;top:0;left:0;right:0;z-index:2147483500;background:rgba(13,22,37,.97);color:#F5F7FC;font-family:Tajawal,-apple-system,sans-serif;font-size:13px;line-height:1.7;padding:13px 16px;padding-bottom:calc(13px + env(safe-area-inset-top,0px));border-bottom:1px solid rgba(255,255,255,.14);box-shadow:0 6px 22px rgba(2,8,18,.45);display:none');
        bn.innerHTML='<b>أنت داخل المتصفح الآن؟</b><br>هذا الشريط العلوي من كروم نفسه ولا يستطيع أي موقع إزالته. افتح المنصة من <b>أيقونة تطبيق «منصة X» (X.HAK)</b> على شاشتك الرئيسية وستفتح بملء الشاشة دون شريط، وبتخزين ثابت يحفظ خلفيتك وإعداداتك دائمًا.'
          +'<br><span id="x110-try" style="display:inline-block;margin-top:8px;padding:6px 14px;border-radius:10px;background:#229ED9;color:#fff;font-weight:700;cursor:pointer">فهمت — لَن أفتحها من المتصفح مرة أخرى</span>';
        document.body.appendChild(bn);
        bn.style.display='block';
        var close110=function(){
          try{bn.style.display='none'}catch(eA4){}
          try{window.sessionStorage&&window.sessionStorage.setItem('x110_brw','1')}catch(eA5){}
        };
        var tk=document.getElementById('x110-try');
        if(tk&&tk.addEventListener){tk.addEventListener('click',close110,false)}
        try{if(tk){tk.onclick=close110}}catch(eA6){}
      }
    }catch(eA3){}
  }
}catch(eA0){}

/* ---------- 110.ب فقاعة التبويب متمركزة دائمًا ---------- */
try{
  var x110Btn=null;
  function x110Of(btn){
    try{
      var tip=document.getElementById('x105-tip');
      if(!tip||!btn){return}
      var r=btn.getBoundingClientRect();
      if(!r||!r.width){return}
      var x=r.left+r.width/2;
      var m=(tip.offsetWidth||120)/2+10;
      if(x<m)x=m;
      if(x>window.innerWidth-m)x=window.innerWidth-m;
      tip.style.left=x+'px';
      tip.style.transform='translateX(-50%) translateY(0)';
    }catch(eB0){}
  }
  document.addEventListener('touchstart',function(ev){
    try{
      if(!ev||!ev.touches||!ev.touches.length){return}
      var t=ev.target,b=null;
      while(t&&t!==document){var c=(''+(t.className||''));if((' '+c+' ').indexOf(' bnav-btn ')>=0){b=t;break}t=t.parentElement}
      x110Btn=b;
      if(b){setTimeout(function(){try{x110Of(x110Btn)}catch(eB1){}},435)}
    }catch(eB2){}
  },{passive:true,capture:true});
  try{
    if(document.fonts&&document.fonts.ready&&document.fonts.ready.then){document.fonts.ready.then(function(){try{x110Of(x110Btn)}catch(eB3){}}).catch(function(){})}
  }catch(eB4){}
  /* إعادة تمركز ثانية بعد انتهاء انتقال الفقاعة (يحسم انحراف مقياس البادئ) */
  try{
    var iv=setInterval(function(){
      try{
        var tip=document.getElementById('x105-tip');
        if(tip&&(''+tip.className).indexOf('x105-on')>=0){x110Of(x110Btn)}
      }catch(eB5){}
    },60);
    setTimeout(function(){try{clearInterval(iv)}catch(eB6){}},4000);
  }catch(eB7){}
}catch(eB){}

/* ---------- 110.ج ضغط أعمق لصورة الخلفية عند ضخامة dataURL ---------- */
try{
  var __x110Pv=x48PvModal;
  x48PvModal=function(){
    try{
      var pimg=X48&&X48.pimg;
      if(pimg&&(''+pimg).length>620000){
        var im=new Image();
        im.onload=function(){
          try{
            var mx=720,sc=Math.min(1,mx/Math.max(im.width,im.height));
            var cv=document.createElement('canvas');cv.width=Math.round(im.width*sc);cv.height=Math.round(im.height*sc);
            var cx=cv.getContext('2d');cx.drawImage(im,0,0,cv.width,cv.height);
            var d2=cv.toDataURL('image/jpeg',.7);
            if(d2.length<(''+X48.pimg).length){X48.pimg=d2;X48.pendingImg=d2}
          }catch(eC1){}
        };
        im.src=''+pimg;
      }
    }catch(eC0){}
    return __x110Pv.apply(this,arguments);
  };
}catch(eC){}

/* ---------- 110.د بطاقة تشخيص الخلفية في معلومات التطبيق ---------- */
try{
  var __x110App=x48BodyApp;
  x48BodyApp=function(){
    var h='';
    try{h=__x110App.apply(this,arguments)}catch(eD1){}
    try{
      var loc=null,uid='';
      try{loc=JSON.parse(localStorage.getItem('x15_cfg_local')||'null')}catch(eD2){}
      try{uid=(USER&&USER.session&&USER.session.user&&USER.session.user.id)?('x15_cfg_'+USER.session.user.id):''}catch(eD3){}
      var usr=null;
      try{usr=uid?JSON.parse(localStorage.getItem(uid)||'null'):null}catch(eD4){}
      var wl=(loc&&loc.ts)?loc.ts:0,wu=(usr&&usr.ts)?usr.ts:0,win=(wu>wl)?usr:loc,winKey=(wu>wl)?('حسابك'+(uid?' (ملف الحساب)':'')):'الجهاز (ملف الجهاز)';
      function fms(ts){try{if(!ts)return 'غير معروف';var d=Math.round((Date.now()-ts)/1000);return (d>=60?(Math.round(d/60)+' دقيقة'):d+' ثانية')+' مضت'}catch(e){return '?'}}
      function bgv(o,which){
        try{
          var k=(which==='D')?o.bgD:o.bgL;
          var s=(which==='D')?o.imgD:o.imgL;
          if(s&&s.length){return 'صورة من الجهاز ('+Math.round(s.length/1024)+' كيلوبايت)'}
          if(k&&k!=='def'){return 'خلفية المعرض: '+k}
          return 'الافتراضية';
        }catch(e){return '?'}
      }
      h+='<div style="margin-top:12px;border:1px solid rgba(106,179,243,.35);border-radius:14px;padding:10px 12px;background:rgba(47,122,229,.06)">'
        +'<b>🔍 تشخيص الخلفية (صادق لحظي)</b><br>'
        +'الملف الفائز: <b>'+winKey+'</b> — آخر ملف محفوظ منذ '+fms(win&&(win.ts))+'<br>'
        +'المحفوظ للوضع الداكن: <b>'+bgv(win||{},'D')+'</b> — للفاتح: <b>'+bgv(win||{},'L')+'</b><br>'
        +'إذا ظهر هنا «صورة من الجهاز» أو «خلفية المعرض» وعادت الافتراضية بعد التشغيل، فالمشكلة في مساحة التخزين وقت الحفظ — أرسل لقطة هذه البطاقة.';
      try{if(win&&win.ts===undefined){h+='<br>الملفات القديمة بلا طور زمني — أول حفظ جديد بعد هذا الإصدار سيكتب الطابع'}}catch(eD5){}
      h+='</div>';
    }catch(eD6){}
    return h;
  };
}catch(eD){}

/* ---------- 110.هـ ميث الإقلاع: تثبيت رقم الإصدار 110.0 فوق غلاف 108f ---------- */
var X110_META_DONE=false;
try{
  var __x110Boot=boot;
  boot=function(){
    try{__x110Boot()}catch(eH0){}
    try{
      if(!X110_META_DONE){
        X110_META_DONE=true;
        APP_META.ver='110.0';APP_META.date='2026-11-22';APP_META.lastUpdate='2026-11-22';
      }
    }catch(eH1){}
  };
}catch(eH){}

/* ---------- 110.و الميتاداتا: الإصدار 110.0 ---------- */
APP_META.ver='110.0';APP_META.date='2026-11-22';APP_META.lastUpdate='2026-11-22';
try{
  if(!APP_META.changelog||!APP_META.changelog.length||(''+(APP_META.changelog[0]&&APP_META.changelog[0].ver||''))!=='110.0'){
    APP_META.changelog.unshift({ver:'110.0',date:'2026-11-22',notes:'لافتة صادقة عند الفتح من المتصفح (الشريط من كروم — الحل أيقونة التطبيق) + تمركز فقاعة اسم التبويب بالضغط المطول بعد استقرار الخط + ضغط أعمق لصور الخلفية الكبيرة + بطاقة تشخيص خلفية صادقة في معلومات التطبيق'});
  }
}catch(eM110){}
window.fallbackNews18=function(){
  return [{title:'الإصدار 110.0 — احترافية الظهور والتمركز',
    body:'لافتة صادقة إذا فتحت من المتصفح (الشريط من كروم — الحل أيقونة التطبيق)، فقاعة اسم التبويب متمركزة دائمًا، صور خلفية أعمق ضغطًا لتبقى بعد التشغيل، وبطاقة تشخيص خلفية صادقة في معلومات التطبيق.',
    date:APP_META.date}];
};
window.x110t={ver:'110.0',browserNote:true,tipCenter:true,deepCompress:true,bgDiag:true};

})();
