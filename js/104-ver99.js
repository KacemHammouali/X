try{

/* ============ الطبقة 99 — الإصدار 99.0: إصدار الاستقرار والاحترافية ============ */
/* خط تبويب واحد حاد أسفل الفقاعة (لا أعلى) + فقاعات التطبيق صغيرة مثل الموقع تمامًا (إصلاح سبب الجذري: قاعدة 58px أعلى تحديدًا) + تأكيد قبل تسجيل الخروج وحذف الحساب + العودة إلى صفحة تسجيل الدخول لا صفحة المعلومات + نزع زر ✕ من عارض الصورة (الإغلاق بالضغط على الفراغ) + الشعار في تسجيل الدخول كاملًا غير مقصوص + بطاقة التطبيق: خمسة أزرار (مشاركة/تنزيل/عن المؤسسة/تسجيل الخروج/حذف الحساب) بلا فقرة شرح + خفة أداء تلقائية عند انقطاع الإنترنت ============ */
(function(){
/* 99.أ CSS */
try{
  var st99=document.createElement('style');
  st99.id='x99-style';
  st99.textContent=
   '/* 99: خط التبويب الحاد في أسفل الفقاعة (المطلوب) */'+
   '.bnav .bnav-btn .x97line{top:auto!important;bottom:3px!important;left:30%!important;right:30%!important;height:3.5px!important;border-radius:99px!important}'+
   'html[data-theme="light"] .bnav .bnav-btn .x97line{top:auto!important;bottom:3px!important}'+
   '/* 99: فقاعات التطبيق صغيرة مثل الموقع تمامًا — نفس المقاس بالضبط (تغلب قاعدة 58px القديمة بتحديد أعلى) */'+
   'html:not(.x81web) .bnav .bnav-btn{height:42px!important;min-height:42px!important;max-height:42px!important;max-width:64px!important;flex:1 1 0!important;padding:0 2px!important;margin:0 2px!important;border-radius:13px!important}'+
   'html:not(.x81web) .bnav .bnav-btn svg{width:22px!important;height:22px!important}'+
   'html:not(.x81web) .bnav .bnav-btn .avatar{width:23px!important;height:23px!important}'+
   'html:not(.x81web) .bnav .bnav-btn.bnav-on{background:linear-gradient(180deg,rgba(42,171,238,.22),rgba(42,171,238,.07))!important;border:1px solid rgba(84,199,240,.40)!important;box-shadow:0 3px 12px rgba(42,171,238,.24)!important;border-radius:13px!important}'+
   'html:not(.x81web)[data-theme="light"] .bnav .bnav-btn.bnav-on{background:linear-gradient(180deg,rgba(2,132,199,.13),rgba(2,132,199,.04))!important;border-color:rgba(2,132,199,.32)!important;box-shadow:0 3px 12px rgba(2,132,199,.13)!important}'+
   '/* 99: زر ✕ من عارض الصورة نُزع — الإغلاق بالضغط على الفراغ */'+
   '#x97x{display:none!important}'+
   '/* 99: الشعار في تسجيل الدخول كاملًا غير مقصوص (بلا clip-path) */'+
   '.x54-authlogo{clip-path:none!important;border-radius:26px!important}'+
   '.x54-authlogo .x30-logo{object-fit:contain!important;border-radius:0!important}'+
   '/* 99: أزرار تسجيل الخروج وحذف الحساب في بطاقة التطبيق (بنفس الأناقة مع لون دال) */'+
   '.x99-out{background:rgba(245,158,11,.10)!important;border:1px solid rgba(245,158,11,.38)!important;color:#F5B942!important}'+
   'html[data-theme="light"] .x99-out{background:rgba(217,119,6,.08)!important;border-color:rgba(217,119,6,.32)!important;color:#B45309!important}'+
   '.x99-del{background:rgba(239,68,68,.10)!important;border:1px solid rgba(239,68,68,.38)!important;color:#F87171!important}'+
   'html[data-theme="light"] .x99-del{background:rgba(220,38,38,.07)!important;border-color:rgba(220,38,38,.30)!important;color:#DC2626!important}'+
   '/* 99: خفة أداء عند انقطاع الإنترنت (وضع هادئ تلقائي) */'+
   'html.x99-off *{animation:none!important;transition:none!important}'+
   'html.x99-off *{backdrop-filter:none!important;-webkit-backdrop-filter:none!important}'+
   'html.x99-off #bg-canvas{display:none!important}'+
   'html.x99-off .fade-in{animation:none!important;opacity:1!important;transform:none!important}';
  (document.head||document.documentElement).appendChild(st99);
}catch(eS99){}

/* 99.ب خفة الأداء عند انقطاع الإنترنت: وضع هادئ تلقائي (بلا مؤثرات ولا ضبابية) ويعود كل شيء عند عودة الاتصال */
var x99PrevFx=null;
function x99ApplyOff(){
  var off=false;
  try{off=(typeof navigator!=='undefined'&&navigator.onLine===false)}catch(eO0){off=false}
  try{
    var r=document.documentElement;
    if(r&&r.classList){
      if(off){if(!r.classList.contains('x99-off'))r.classList.add('x99-off')}
      else{if(r.classList.contains('x99-off'))r.classList.remove('x99-off')}
    }
  }catch(eO1){}
  try{
    if(typeof STATE!=='undefined'&&STATE&&typeof STATE.fx==='boolean'&&typeof applyFX==='function'){
      if(off){
        if(STATE.fx){x99PrevFx=true;STATE.fx=false;applyFX()}
      }else{
        if(x99PrevFx){x99PrevFx=null;STATE.fx=true;applyFX()}
      }
    }
  }catch(eO2){}
}
try{x99ApplyOff()}catch(eO3){}
try{window.addEventListener('online',function(){try{x99ApplyOff()}catch(eO4){}})}catch(eO5){}
try{window.addEventListener('offline',function(){try{x99ApplyOff()}catch(eO6){}})}catch(eO7){}
try{setTimeout(function(){try{x99ApplyOff()}catch(eO8){}},1500)}catch(eO9){}

/* 99.ج تصفير خطوات التسجيل كي تظهر صفحة تسجيل الدخول (البريد) لا صفحة المعلومات بعد الخروج أو الحذف */
function x99ResetAuth(){
  try{
    XAUTH18={step:1,email:'',errs:{},consent:false,prefilled:false,form:{fn:'',ln:'',by:'',year:'',branch:'',gender:'',wilaya:'',phone:''}};
  }catch(eR1){}
  try{AUTH.email='';AUTH.errs={}}catch(eR2){}
  try{if(typeof sessionStorage!=='undefined'&&sessionStorage&&sessionStorage.removeItem){sessionStorage.removeItem('x18_email')}}catch(eR3){}
}

/* 99.د تسجيل الخروج: شاشة تأكيد أولًا ثم تنفيذ آمن ثم صفحة تسجيل الدخول */
try{
  var __x99LO=(typeof logoutUser==='function')?logoutUser:null;
  if(__x99LO){
    logoutUser=function(){
      try{
        x54Confirm('تسجيل الخروج','هل تريد تسجيل الخروج من منصة X؟ بياناتك وتقدمك محفوظة على هذا الجهاز ويمكنك العودة في أي وقت.',function(){
          try{__x99LO()}catch(eL1){}
          try{x99ResetAuth()}catch(eL2){}
          try{render()}catch(eL3){}
        });
      }catch(eL4){try{__x99LO()}catch(eL5){}}
    };
  }
}catch(eL6){}

/* 99.هـ حذف الحساب: بعد التأكيد والمسح يُعاد المستخدم إلى صفحة تسجيل الدخول (البريد) لا صفحة المعلومات */
try{
  var __x99Conf=(typeof x54Confirm==='function')?x54Confirm:null;
  if(__x99Conf){
    x54Confirm=function(t,m,cb){
      try{
        if((''+(t||'')).indexOf('حذف الحساب')>=0&&typeof cb==='function'){
          var w=function(){
            try{cb()}catch(eD1){}
            try{x99ResetAuth()}catch(eD2){}
            try{render()}catch(eD3){}
          };
          return __x99Conf(t,m,w);
        }
      }catch(eD4){}
      return __x99Conf(t,m,cb);
    };
  }
}catch(eD5){}

/* 99.و عارض الصورة: نزع زر ✕ العلوي — الإغلاق بالضغط على الفراغ كما هو */
try{
  if(typeof x97AvOpen==='function'){
    var __x99Av=x97AvOpen;
    x97AvOpen=function(){
      var r=__x99Av.apply(this,arguments);
      try{
        setTimeout(function(){try{var x=document.getElementById('x97x');if(x&&x.parentNode){x.parentNode.removeChild(x)}}catch(eV1){}},0);
      }catch(eV2){}
      return r;
    };
  }
}catch(eV3){}

/* 99.ز بطاقة التطبيق: خمسة أزرار أنيقة بلا فقرة شرح — مشاركة وتنزيل وعن المؤسسة + تسجيل الخروج وحذف الحساب (للمسجلين) بتأكيد قبل التنفيذ */
window.x77AppSheet=function(){
  try{
    var apk='';try{apk=(typeof x42ApkUrl==='function')?x42ApkUrl():'./X.apk'}catch(eA1){apk='./X.apk'}
    var logged=false;try{logged=!!(USER&&USER.session)}catch(eA2){logged=false}
    var h='<button class="btn x98-appbtn" onclick="try{x77Share()}catch(e){}">📤 مشاركة</button>'+
     '<a class="btn x98-appbtn" href="'+escAttr(apk||'./X.apk')+'" download="X.apk">⬇️ تنزيل APK</a>'+
     '<button class="btn x98-appbtn" onclick="try{xShowDoc(\'about\')}catch(e){}">🏛️ عن المؤسسة</button>';
    if(logged){
      h+='<button class="btn x98-appbtn x99-out" onclick="try{logoutUser()}catch(e){}">🚪 تسجيل الخروج</button>'+
         '<button class="btn x98-appbtn x99-del" onclick="try{xDeleteAccount()}catch(e){}">🗑️ حذف الحساب</button>';
    }
    xModal('📲 التطبيق — شاركه أو نزّله',h);
  }catch(eA3){}
};

/* 99.ح بيانات الإصدار */
APP_META.ver='99.0';APP_META.date='2026-11-11';APP_META.lastUpdate='2026-11-11';
APP_META.notes='الإصدار 99.0 — إصدار الاستقرار والاحترافية: خط التبويب المتوهج الحاد أصبح أسفل الفقاعة بدل أعلاها، وفقاعات التطبيق أصبحت صغيرة مثل الموقع تمامًا (كان سبب اختلافهما قاعدة قديمة أعلى تحديدًا تُطبق في التطبيق فقط)، وتسجيل الخروج وحذف الحساب يطلبان تأكيدًا أولًا قبل التنفيذ في الموقع والتطبيق، وبعد الخروج أو الحذف تُفتح صفحة تسجيل الدخول (البريد) مباشرة بدل صفحة المعلومات، وزر ✕ أُزيل من عارض الصورة الشخصية — الإغلاق بالضغط على الفراغ، والشعار في شاشة تسجيل الدخول يظهر كاملًا غير مقصوص من أي حافة، وبطاقة التطبيق في الموقع صارت بخمسة أزرار أنيقة (مشاركة وتنزيل APK وعن المؤسسة وتسجيل الخروج وحذف الحساب) بلا نصوص شرح زائدة، وعند انقطاع الإنترنت يتحول التطبيق تلقائيًا إلى وضع هادئ خفيف سريع (بلا مؤثرات ثقيلة) ويعود كامل الجمال عند عودة الاتصال — مع كل مزايا الإصدار 98 (العمل بلا إنترنت والشريط الإنستغرامي وجودة الصورة العالية وترتيب صفحة الملف) دون أي تعطيل.';
try{
  APP_META.changelog.unshift({ver:'99.0',date:'2026-11-11',notes:'خط التبويب أسفل الفقاعة + فقاعات التطبيق صغيرة مثل الموقع تمامًا (إصلاح جذري) + تأكيد قبل تسجيل الخروج وحذف الحساب + العودة إلى صفحة تسجيل الدخول بعد الخروج/الحذف + نزع ✕ من عارض الصورة + الشعار كاملًا غير مقصوص في تسجيل الدخول + بطاقة التطبيق بخمسة أزرار بلا نصوص زائدة + وضع هادئ تلقائي خفيف عند انقطاع الإنترنت.'});
}catch(eM1){}
window.fallbackNews18=function(){
  return [{title:'الإصدار 99.0 — الاستقرار والاحترافية',
    body:'خط التبويب أسفل الفقاعة، فقاعات التطبيق صغيرة مثل الموقع، تأكيد قبل تسجيل الخروج وحذف الحساب، والعودة إلى صفحة تسجيل الدخول مباشرة، الشعار كاملًا غير مقصوص، عارض الصورة بلا زر ✕، وخفة أداء تلقائية عند انقطاع الإنترنت.',
    date:APP_META.date}];
};
window.x99t={ver:APP_META.ver,resetAuth:x99ResetAuth,applyOff:x99ApplyOff,sheet:window.x77AppSheet};
})();
}catch(eW99){}
