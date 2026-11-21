try{
/* ============ الطبقة 100 — الإصدار 100.0: الإصدار الأقوى — أمان الجلسة الخطير + هوية تيليجرام × إنستغرام ============ */
/* إصلاح خطير نهائي: بعد تسجيل الخروج أو حذف الحساب لا تُستعاد أي جلسة عند إعادة الفتح أبدًا
   (السبب الجذري: رمز جلسة خدمة المصادقة يبقى في الذاكرة المحلية sb-...-auth-token فيُعاد
   الدخول تلقائيًا عند الفتح القادم — وقد يكون بحساب الإدارة إن كانت قد دخلت من الجهاز نفسه)
   + خط تبويب حاد مضيء بلا ضبابية + هوية ألوان تيليجرام × إنستغرام + عارض صورة نظيف
   + تأثير المربعات الطائرة عند كل حذف (بأسلوب واتساب) + إعدادات بلا أزرار مكررة ============ */
(function(){
'use strict';

/* 100.أ CSS: الهوية الجديدة والخط الحاد والعارض النظيف والمربعات الطائرة */
try{
  var st100=document.createElement('style');
  st100.id='x100-style';
  st100.textContent=
   '/* 100: خط التبويب الحاد المضيء أسفل الفقاعة — توهج نقي بلا ضبابية */'+
   '.bnav .bnav-btn .x97line{top:auto!important;bottom:3px!important;left:24%!important;right:24%!important;height:3px!important;border-radius:99px!important;background:linear-gradient(90deg,#2AABEE,#833AB4 55%,#E1306C)!important;box-shadow:0 0 1px 0 rgba(255,255,255,.45),0 0 5px 1px rgba(42,171,238,.5)!important}'+
   'html[data-theme="light"] .bnav .bnav-btn .x97line{background:linear-gradient(90deg,#168EBF,#7657DB 55%,#C13584)!important;box-shadow:0 0 4px 1px rgba(22,142,191,.4)!important}'+
   '/* 100: الفقاعة النشطة بتدرج تيليجرام × إنستغرام (التطبيق والموقع معًا) */'+
   'html:not(.x81web) .bnav .bnav-btn.bnav-on{background:linear-gradient(135deg,rgba(42,171,238,.20),rgba(131,58,180,.12) 55%,rgba(225,48,108,.10))!important;border:1px solid rgba(42,171,238,.45)!important;box-shadow:0 3px 14px rgba(42,171,238,.22)!important;border-radius:13px!important}'+
   'html:not(.x81web)[data-theme="light"] .bnav .bnav-btn.bnav-on{background:linear-gradient(135deg,rgba(22,142,191,.14),rgba(118,87,219,.08) 55%,rgba(193,53,132,.07))!important;border-color:rgba(22,142,191,.35)!important;box-shadow:0 3px 12px rgba(22,142,191,.14)!important}'+
   '.bnav .bnav-btn.bnav-on{background:linear-gradient(135deg,rgba(42,171,238,.18),rgba(131,58,180,.10) 55%,rgba(225,48,108,.08))!important;border:1px solid rgba(42,171,238,.38)!important;box-shadow:0 3px 12px rgba(42,171,238,.18)!important}'+
   '/* 100: الأزرار الرئيسية بتدرج تيليجرام × إنستغرام */'+
   '.btn-primary{background:linear-gradient(135deg,#2AABEE,#8A3ABE 62%,#E1306C)!important;border:0!important;color:#fff!important;box-shadow:0 6px 18px rgba(42,171,238,.24)!important}'+
   'html[data-theme="light"] .btn-primary{background:linear-gradient(135deg,#168EBF,#7657DB 62%,#C13584)!important;box-shadow:0 6px 16px rgba(22,142,191,.2)!important}'+
   '/* 100: عارض الصورة الشخصية نظيف كإنستغرام — خلفية داكنة صافية بلا ضبابية */'+
   '#x97avv{background:rgba(2,5,11,.96)!important;backdrop-filter:none!important;-webkit-backdrop-filter:none!important}'+
   '#x97avc{border:3px solid transparent!important;background:linear-gradient(#0B1424,#0B1424) padding-box,linear-gradient(135deg,#2AABEE,#833AB4,#E1306C) border-box!important;box-shadow:0 18px 60px rgba(0,0,0,.65)!important}'+
   'html[data-theme="light"] #x97avc{background:linear-gradient(#F4F7FC,#F4F7FC) padding-box,linear-gradient(135deg,#168EBF,#7657DB,#C13584) border-box!important}'+
   '#x97hint{color:rgba(255,255,255,.62)!important}'+
   '/* 100: المربعات الطائرة — تأثير الحذف الاحترافي */'+
   '.x100sq{position:fixed;width:13px;height:13px;border-radius:4px;z-index:2147483600;pointer-events:none;opacity:1;will-change:transform,opacity;transition:transform .85s cubic-bezier(.17,.67,.35,1),opacity .9s ease-out}'+
   '@media (prefers-reduced-motion: reduce){.x100sq{display:none!important}}'+
   '/* 100: حلقة الشعار في تسجيل الدخول بتدرج الهوية */'+
   '.x54-authlogo{box-shadow:0 0 0 2px rgba(42,171,238,.30),0 0 30px rgba(131,58,180,.30)!important}';
  (document.head||document.documentElement).appendChild(st100);
}catch(eS100){}

/* 100.ب تأثير المربعات الطائرة (بأسلوب حذف واتساب) — مربعات صغيرة بألوان الهوية تطير وتتلاشى */
var X100_COLS=['#2AABEE','#833AB4','#E1306C','#F77737','#54C7F0','#C13584'];
function x100FlyAt(cx,cy,n){
  try{
    var r=document.documentElement;
    if(r&&r.classList&&r.classList.contains('x99-off')){return}
    try{if(window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches){return}}catch(eM0){}
    if(!n){n=16}
    for(var i=0;i<n;i++){
      (function(idx){
        var s=document.createElement('i');
        s.className='x100sq';
        var sz=8+Math.floor(Math.random()*10);
        s.style.width=sz+'px';
        s.style.height=sz+'px';
        s.style.left=(cx-sz/2)+'px';
        s.style.top=(cy-sz/2)+'px';
        s.style.background=X100_COLS[idx%X100_COLS.length];
        (document.body||document.documentElement).appendChild(s);
        var dx=(Math.random()-.5)*280;
        var dy=-(30+Math.random()*180);
        var rot=(Math.random()*720-360);
        setTimeout(function(){
          try{s.style.transform='translate('+dx+'px,'+dy+'px) rotate('+rot+'deg)';s.style.opacity='0'}catch(e1){}
        },30+idx*14);
        setTimeout(function(){try{if(s&&s.parentNode){s.parentNode.removeChild(s)}}catch(e2){}},1150);
      })(i);
    }
  }catch(eF0){}
}
function x100Fly(el,n){
  var cx=0,cy=0,got=false;
  try{
    if(el&&el.getBoundingClientRect){
      var rc=el.getBoundingClientRect();
      if(rc&&rc.width){cx=rc.left+rc.width/2;cy=rc.top+rc.height/2;got=true}
    }
  }catch(eF1){}
  if(!got){try{cx=window.innerWidth/2;cy=window.innerHeight*0.42}catch(eF2){cx=160;cy=240}}
  x100FlyAt(cx,cy,n);
}

/* 100.ج الإصلاح الخطير: قتل الجلسة نهائيًا من كل مكان في الجهاز */
function x100MarkGet(){try{return (window.localStorage&&localStorage.getItem('x100_out')==='1')?true:false}catch(eM1){return false}}
function x100MarkSet(){try{localStorage.setItem('x100_out','1')}catch(eM2){}}
function x100MarkClear(){try{localStorage.removeItem('x100_out')}catch(eM3){}}
function x100KillSession(mark){
  /* 1) خروج حقيقي من خدمة المصادقة (يمسح رمزها المحلي) */
  try{if(typeof SB!=='undefined'&&SB&&SB.client&&SB.client.auth){try{SB.client.auth.signOut()}catch(eS1){}}}catch(eS0){}
  /* 2) مسح كل مفاتيح رموز الجلسة من الذاكرة المحلية (بأي بادئة) */
  try{
    var ks=[],i;
    for(i=0;i<localStorage.length;i++){try{ks.push(''+localStorage.key(i))}catch(eK1){}}
    for(i=0;i<ks.length;i++){
      var k=ks[i];
      if(!k){continue}
      if(k.indexOf('sb-')===0||k.indexOf('x65_sess')>=0||k.indexOf('x45_stayflag')>=0){try{localStorage.removeItem(k)}catch(eK2){}}
    }
  }catch(eK3){}
  try{localStorage.removeItem('x65_sess')}catch(eS2){}
  try{localStorage.removeItem('x45_stayflag')}catch(eS3){}
  /* 3) مسح آثار الجلسة المؤقتة والبريد المحفوظ للنموذج */
  try{sessionStorage.removeItem('x18_email')}catch(eS4){}
  try{sessionStorage.removeItem('x65_gate')}catch(eS5){}
  try{sessionStorage.removeItem('x66_gate')}catch(eS6){}
  try{if(typeof MEM!=='undefined'&&MEM){MEM['x65_sess']=null;MEM['x45_stayflag']=false}}catch(eS7){}
  /* 4) تصفير حالة المستخدم وشاشة الدخول كليًا (بلا بريد مسبق لأي حساب) */
  try{USER.session=null;USER.profile=null}catch(eS8){}
  try{if(typeof setGuest==='function'){setGuest(false)}}catch(eS9){}
  try{
    AUTH.tab='new';AUTH.email='';AUTH.pass='';AUTH.pass2='';AUTH.sent=false;AUTH.busy=false;AUTH.errs={};AUTH.consent=false;
  }catch(eS10){}
  try{if(typeof x99ResetAuth==='function'){x99ResetAuth()}}catch(eS11){}
  /* 5) علامة الخروج: تمنع أي استرجاع جلسة عند إعادة الفتح حتى دخول جديد فعلي */
  if(mark){x100MarkSet()}
}

/* 100.د تسجيل الخروج: تأكيد واحد ثم قتل الجلسة نهائيًا ثم صفحة تسجيل الدخول */
try{
  logoutUser=function(){
    try{
      x54Confirm('تسجيل الخروج','هل تريد تسجيل الخروج؟ عند إعادة فتح التطبيق ستُستقبل بشاشة تسجيل الدخول مباشرة — وتقدمك وإعداداتك تبقى محفوظة على هذا الجهاز.',function(){
        try{x100KillSession(true)}catch(eL1){}
        try{toast('👋 سجّلت الخروج بأمان — نراك قريبًا!')}catch(eL2){}
        try{navigate('auth')}catch(eL3){}
        try{render()}catch(eL4){}
      });
    }catch(eL5){}
  };
}catch(eL6){}

/* 100.هـ كل حذف: تأثير المربعات الطائرة — وحذف الحساب تحديدًا: قتل الجلسة نهائيًا أيضًا */
try{
  var __x100Conf=(typeof x54Confirm==='function')?x54Confirm:null;
  if(__x100Conf){
    x54Confirm=function(t,m,cb){
      try{
        var tt=''+(t||'');
        if(tt.indexOf('حذف')>=0&&tt.indexOf('الخروج')<0&&typeof cb==='function'){
          return __x100Conf(t,m,function(){
            try{x100FlyAt(window.innerWidth/2,window.innerHeight*0.38,22)}catch(eF3){}
            try{cb()}catch(eD1){}
            try{if(tt.indexOf('حذف الحساب')>=0){x100KillSession(true)}}catch(eD2){}
            try{render()}catch(eD3){}
          });
        }
      }catch(eD4){}
      return __x100Conf(t,m,cb);
    };
  }
}catch(eD5){}

/* 100.و مسح الذاكرة المؤقتة: تأثير المربعات الطائرة أيضًا */
try{
  var __x100Clr=(typeof x48Clear==='function')?x48Clear:null;
  if(__x100Clr){
    x48Clear=function(){
      try{x100FlyAt(window.innerWidth/2,window.innerHeight*0.4,18)}catch(eC1){}
      return __x100Clr();
    };
  }
}catch(eC2){}

/* 100.ز حرس الإقلاع الحاسم: إذا كانت علامة الخروج موجودة فلا استرجاع جلسة أبدًا —
   حتى لو بقي أي رمز قديم في أي مكان، يُمسح فورًا ويبقى المستخدم في شاشة الدخول */
try{
  var __x100RS=(typeof restoreSession==='function')?restoreSession:null;
  if(__x100RS){
    restoreSession=function(){
      try{
        if(x100MarkGet()){
          try{x100KillSession(false)}catch(eR1){}
          return;
        }
      }catch(eR2){}
      return __x100RS();
    };
  }
}catch(eR3){}

/* 100.ح عند أي دخول ناجح تُرفع علامة الخروج — فالاسترجاع يعمل طبيعيًا من جديد */
try{
  var __x100AV=(typeof x52AfterVerify==='function')?x52AfterVerify:null;
  if(__x100AV){
    x52AfterVerify=function(){
      try{x100MarkClear()}catch(eV1){}
      return __x100AV();
    };
  }
}catch(eV2){}

/* 100.ط إعدادات بلا تكرار: تبويب «إمكانية الوصول» يبقي ما يميزه فقط —
   (التباين والحدود وحجم الخط موجودة أصلًا في «المظهر والعرض» فكانت مكررة) */
function x100BodyA11y(){
  var h=x48Sw(XCFG.motion===false,'a11y_rm','','setX(\'motion\',!this.checked)');
  h+='<p class="x48-note">'+x48T('a11y_sr')+'</p>';
  return h;
}
try{
  if(typeof X48_SECS!=='undefined'&&X48_SECS){
    for(var i100=0;i100<X48_SECS.length;i100++){
      if(X48_SECS[i100]&&X48_SECS[i100].id==='a11y'){X48_SECS[i100].b=x100BodyA11y}
    }
  }
}catch(eA100){}

/* 100.ي بيانات الإصدار 100 */
APP_META.ver='100.0';APP_META.date='2026-11-13';APP_META.lastUpdate='2026-11-13';
APP_META.notes='الإصدار 100.0 — الإصدار الأقوى: إصلاح خطير نهائي لأمان الحساب — بعد تسجيل الخروج أو حذف الحساب لن يُفتح التطبيق مسجلًا أبدًا عند إعادة الفتح (كان رمز الجلسة يبقى في الجهاز فيعيد الدخول تلقائيًا، وربما بحساب الإدارة إن دخلت منه) — الآن الخروج خروج حقيقي كامل ويُستقبل بك شاشة تسجيل الدخول دائمًا، مع هوية ألوان جديدة مزيج تيليجرام × إنستغرام (الأزرار الرئيسية والفقاعة النشطة وخط التبويب وحلقة الشعار)، وخط التبويب المتوهج صار حادًا نقيًا بلا ضبابية، وعارض الصورة الشخصية صار بخلفية داكنة صافية أنيقة بلا ضبابية مع حلقة متدرجة، وتأثير المربعات الطائرة الاحترافي (بأسلوب واتساب) يرافق كل عملية حذف — حذف الحساب ومسح الذاكرة المؤقتة وحذف الملفات، وتبويب «إمكانية الوصول» في الإعدادات صار بلا أزرار مكررة مع «المظهر» — مع كل مزايا الإصدار 99 دون أي تعطيل.';
try{
  APP_META.changelog.unshift({ver:'100.0',date:'2026-11-13',notes:'إصلاح خطير: بعد الخروج أو حذف الحساب لا يُستعاد أي جلسة عند إعادة الفتح أبدًا (خروج حقيقي كامل + حرس إقلاع يمنع الاسترجاع) + هوية تيليجرام × إنستغرام في الأزرار والفقاعة وخط التبويب + خط التبويب حاد بلا ضبابية + عارض الصورة بخلفية صافية وحلقة متدرجة + تأثير المربعات الطائرة عند كل حذف + إزالة الأزرار المكررة من إمكانية الوصول.'});
}catch(eM1){}
window.fallbackNews18=function(){
  return [{title:'الإصدار 100.0 — الإصدار الأقوى',
    body:'أمان الحساب أُحكم نهائيًا: بعد الخروج أو الحذف يُستقبلك التطبيق بشاشة تسجيل الدخول دائمًا، مع هوية تيليجرام × إنستغرام الجديدة، خط تبويب حاد مضيء، عارض صورة أنيق، وتأثير المربعات الطائرة عند كل حذف.',
    date:APP_META.date}];
};
window.x100t={ver:APP_META.ver,kill:x100KillSession,fly:x100FlyAt,flyAt:x100FlyAt,markGet:x100MarkGet,markClear:x100MarkClear,a11y:x100BodyA11y};
})();
}catch(eW100){}

