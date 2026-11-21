try{
/* ============ الطبقة 101 — الإصدار 101.0: الإصدار الاحترافي الشامل ============ */
/* (1) العودة إلى الهوية الرسمية المعتمدة لمنصة X (أزرق X.HAK × بنفسجي) بدل مزيج
   تيليجرام × إنستغرام في الأزرار والفقاعة وخط التبويب والحلقات.
   (2) نزع تأثير المربعات الطائرة نهائيًا واستبداله بتأثير «الذوبان الأنيق»
   الاحترافي: حلقة ضوء ناعمة تتسع + خفوت راقٍ بلا مربعات ولا ضجيج.
   (3) إصلاح جذري لصورة الملف الشخصي: تغيير الصورة يعمل مع كل الصور مهما كان
   حجمها (تصغير متدرج ذكي) ومعاينة فورية بلا رسالة خطأ.
   (4) نزع زر «الإعدادات» المكرر من صفحة الملف (التبويب موجود في الشريط السفلي).
   (5) تبويب «إمكانية الوصول» بخمس ميزات حقيقية تعمل فورًا.
   (6) خفة الأداء: إزالة الضبابية الثقيلة وتخفيف الظلال مع الحفاظ على الأناقة.
   (7) حرس الصفحات الفارغة: أي جزء درس فارغ يعرض رسالة أنيقة بدل صفحة بيضاء. ============ */
(function(){
'use strict';

/* ---- 101.أ CSS: الهوية الرسمية + خفة الأداء + إمكانية الوصول ---- */
try{
  var st101=document.createElement('style');
  st101.id='x101-style';
  st101.textContent=
   '/* 101: الأزرار الرئيسية بالهوية الرسمية المعتمدة (أزرق X.HAK × بنفسجي) */'+
   '.btn-primary{background:linear-gradient(135deg,#35BDF2,#8B6CFF)!important;border:0!important;color:#fff!important;box-shadow:0 6px 18px rgba(53,189,242,.22)!important}'+
   'html[data-theme="light"] .btn-primary{background:linear-gradient(135deg,#168EBF,#7657DB)!important;box-shadow:0 6px 16px rgba(22,142,191,.18)!important}'+
   '/* 101: خط التبويب السفلي بأزرق الهوية النقي الحاد */'+
   '.bnav .bnav-btn .x97line{background:#35BDF2!important;box-shadow:0 0 1px 0 rgba(255,255,255,.45),0 0 6px 1px rgba(53,189,242,.55)!important}'+
   'html[data-theme="light"] .bnav .bnav-btn .x97line{background:#168EBF!important;box-shadow:0 0 4px 1px rgba(22,142,191,.4)!important}'+
   '/* 101: الفقاعة النشطة بهوية X.HAK الرسمية */'+
   '.bnav .bnav-btn.bnav-on{background:rgba(53,189,242,.14)!important;border:1px solid rgba(53,189,242,.42)!important;box-shadow:0 3px 12px rgba(53,189,242,.18)!important}'+
   'html[data-theme="light"] .bnav .bnav-btn.bnav-on{background:rgba(22,142,191,.10)!important;border-color:rgba(22,142,191,.32)!important;box-shadow:0 3px 10px rgba(22,142,191,.12)!important}'+
   '/* 101: حلقة عارض الصورة وحلقة الشعار بالهوية الرسمية */'+
   '#x97avc{background:linear-gradient(#0B1424,#0B1424) padding-box,linear-gradient(135deg,#35BDF2,#8B6CFF) border-box!important}'+
   'html[data-theme="light"] #x97avc{background:linear-gradient(#F4F7FC,#F4F7FC) padding-box,linear-gradient(135deg,#168EBF,#7657DB) border-box!important}'+
   '.x54-authlogo{box-shadow:0 0 0 2px rgba(53,189,242,.32),0 0 26px rgba(139,108,255,.26)!important}'+
   '/* 101: نزع المربعات الطائرة نهائيًا — استُبدل بالذوبان الأنيق */'+
   '.x100sq{display:none!important}'+
   '/* 101: خفة الأداء — بلا ضبابية ثقيلة على البطاقات (أسرع فتحًا وتمريرًا) */'+
   '.glass,.glass-strong{backdrop-filter:none!important;-webkit-backdrop-filter:none!important}'+
   'html[data-theme="dark"] .glass,html:not([data-theme]) .glass{background:rgba(17,29,45,.94)!important}'+
   'html[data-theme="dark"] .glass-strong,html:not([data-theme]) .glass-strong{background:rgba(13,22,37,.97)!important}'+
   'html[data-theme="light"] .glass{background:rgba(244,247,252,.96)!important}'+
   'html[data-theme="light"] .glass-strong{background:rgba(255,255,255,.98)!important}'+
   '/* 101: تأثير الذوبان الأنيق عند الحذف — حلقة ضوء ناعمة تتسع وتتلاشى */'+
   '.x101-ring{position:fixed;z-index:2147483600;border:2px solid rgba(53,189,242,.55);border-radius:50%;pointer-events:none;opacity:1;will-change:transform,opacity;transition:transform .65s cubic-bezier(.17,.67,.35,1),opacity .65s ease}'+
   '.x101-veil{position:fixed;top:0;left:0;right:0;bottom:0;z-index:2147483590;background:rgba(53,189,242,.10);pointer-events:none;opacity:0;transition:opacity .3s ease}'+
   '.x101-veil.x101-on{opacity:1}'+
   '@media (prefers-reduced-motion: reduce){.x101-ring{display:none!important}}'+
   '/* 101: إمكانية الوصول — أزرار أكبر وروابط ظاهرة وحلقة تركيز وتباعد أسطر */'+
   'body.x101-big .btn{padding:14px 22px!important;font-size:16.5px!important}'+
   'body.x101-big .bnav-btn{font-size:14.5px!important}'+
   'body.x101-big .x48-row,body.x101-big .set-row{min-height:56px!important}'+
   'body.x101-ul a,body.x101-ul .nav-link{text-decoration:underline!important}'+
   'body.x101-focus a:focus,body.x101-focus button:focus,body.x101-focus [role="button"]:focus,body.x101-focus input:focus,body.x101-focus select:focus,body.x101-focus textarea:focus{outline:3px solid #35BDF2!important;outline-offset:2px!important}'+
   'body.x101-lh p,body.x101-lh li,body.x101-lh .lesson-view,body.x101-lh .x72sec-bd{line-height:2.05!important}';
  (document.head||document.documentElement).appendChild(st101);
}catch(eS101){}

/* ---- 101.ب تأثير الذوبان الأنيق: حلقة ضوء من مركز الشاشة + خفوت فيل --- */
function x101Pulse(cx,cy){
  try{
    var bd=document.body||document.documentElement;
    var veil=document.createElement('div');veil.className='x101-veil';
    bd.appendChild(veil);
    setTimeout(function(){try{veil.className='x101-veil x101-on'}catch(eV1){}},10);
    setTimeout(function(){try{veil.className='x101-veil'}catch(eV2){}},380);
    setTimeout(function(){try{if(veil&&veil.parentNode){veil.parentNode.removeChild(veil)}}catch(eV3){}},800);
  }catch(eV0){}
  try{
    var x=(typeof cx==='number')?cx:(window.innerWidth/2);
    var y=(typeof cy==='number')?cy:(window.innerHeight/2);
    var bd2=document.body||document.documentElement;
    var d=document.createElement('div');d.className='x101-ring';
    var s=64;
    d.style.width=s+'px';d.style.height=s+'px';
    d.style.left=(x-s/2)+'px';d.style.top=(y-s/2)+'px';
    bd2.appendChild(d);
    setTimeout(function(){try{d.style.transform='scale(7)';d.style.opacity='0'}catch(eR1){}},30);
    setTimeout(function(){try{if(d&&d.parentNode){d.parentNode.removeChild(d)}}catch(eR2){}},750);
  }catch(eR0){}
}

/* ---- 101.ج تأكيد الحذف: الذوبان الأنيق بدل المربعات — والسلسلة الأصلية (بما فيها
   إصلاح أمان الجلسة في 100) تعمل كما هي بعدها ---- */
try{
  var __x101Conf=(typeof x54Confirm==='function')?x54Confirm:null;
  if(__x101Conf){
    x54Confirm=function(t,m,cb){
      var tt=''+t;
      var isDel=(tt.indexOf('حذف')>=0&&tt.indexOf('الخروج')<0);
      if(isDel&&typeof cb==='function'){
        return __x101Conf(t,m,function(){
          try{x101Pulse(window.innerWidth/2,window.innerHeight/2)}catch(eP1){}
          setTimeout(function(){try{cb()}catch(eC101){}},180);
        });
      }
      return __x101Conf(t,m,cb);
    };
  }
}catch(eC101b){}

/* ---- 101.د مسح الذاكرة المؤقتة: الذوبان الأنيق أيضًا ---- */
try{
  var __x101Clr=(typeof x48Clear==='function')?x48Clear:null;
  if(__x101Clr){
    x48Clear=function(){
      try{x101Pulse(window.innerWidth/2,window.innerHeight*0.4)}catch(eC1){}
      return __x101Clr();
    };
  }
}catch(eC2){}

/* ---- 101.هـ صورة الملف الشخصي تعمل دائمًا: تصغير متدرج ذكي مع كل الصور ---- */
window.x101LastPick=0;
window.xPickAvatar=function(){
  var inp=null;
  try{inp=document.createElement('input');inp.type='file';inp.accept='image/*'}catch(eI1){try{toast('ℹ️ تغيير الصورة يحتاج متصفحًا حقيقيًا')}catch(eT1){}return}
  inp.onchange=function(){
    var f=(inp.files&&inp.files[0]);
    if(!f){return}
    var done=false;
    var finish=function(d){
      if(done)return;done=true;
      try{
        if(!USER.profile){USER.profile={}}
        USER.profile.avatar_url=d;
        if(typeof x18SaveUser==='function'){x18SaveUser(USER.profile)}
        try{toast('✅ تم تحديث صورتك','success')}catch(eT3){}
        try{render()}catch(eR1){}
      }catch(eF1){}
    };
    var fail=function(){
      if(done)return;
      /* محاولة أخيرة: الصورة كما هي إن كانت صغيرة — وإلا رسالة صادقة */
      try{
        if(f.size&&f.size<300*1024){
          var rd2=new FileReader();
          rd2.onload=function(){try{var d2=''+rd2.result;if(d2.indexOf('data:image')===0){finish(d2)}else{try{toast('❌ تعذر قراءة الصورة — جرّب صورة أخرى','error')}catch(eT9){}}}catch(eF9){}};
          rd2.onerror=function(){try{toast('❌ تعذر قراءة الصورة — جرّب صورة أخرى','error')}catch(eT8){}};
          rd2.readAsDataURL(f);
          return;
        }
      }catch(eL1){}
      try{toast('❌ تعذر معالجة الصورة — جرّب صورة أصغر حجمًا','error')}catch(eT7){}
    };
    try{
      var rd=new FileReader();
      rd.onload=function(){
        try{
          var img=new Image();
          img.onload=function(){
            try{
              var iw=img.width||0,ih=img.height||0;
              if(!iw||!ih){fail();return}
              var sizes=[720,480,320,200];
              var attempt=function(ix){
                if(ix>=sizes.length){fail();return}
                try{
                  var SZ=sizes[ix];
                  var m=Math.min(iw,ih);
                  var cv=document.createElement('canvas');cv.width=SZ;cv.height=SZ;
                  var g=cv.getContext('2d');
                  if(!g){attempt(ix+1);return}
                  g.fillStyle='#ffffff';g.fillRect(0,0,SZ,SZ);
                  try{g.imageSmoothingEnabled=true;g.imageSmoothingQuality='high'}catch(eSm){}
                  g.drawImage(img,(iw-m)/2,(ih-m)/2,m,m,0,0,SZ,SZ);
                  var d='';
                  try{d=cv.toDataURL('image/jpeg',0.9)}catch(eD1){d=''}
                  if(d&&d.indexOf('data:image/jpeg')===0&&d.length>1000){finish(d)}
                  else{attempt(ix+1)}
                }catch(eC1){attempt(ix+1)}
              };
              attempt(0);
            }catch(eC2){fail()}
          };
          img.onerror=function(){fail()};
          img.src=rd.result;
        }catch(eRd2){fail()}
      };
      rd.onerror=function(){fail()};
      rd.readAsDataURL(f);
    }catch(eRd3){fail()}
  };
  try{inp.click()}catch(eCk1){try{toast('ℹ️ تغيير الصورة يحتاج متصفحًا حقيقيًا')}catch(eT0){}}
};

/* ---- 101.و صفحة الملف بلا زر «الإعدادات» المكرر (تبويب الإعدادات في الشريط السفلي) ---- */
try{
  var __x101Prof=(typeof renderProfilePage18==='function')?renderProfilePage18:null;
  if(__x101Prof){
    renderProfilePage18=function(){
      var h='';
      try{h=__x101Prof()}catch(eP1){h=''}
      try{
        h=(''+h).split('<button class="btn" onclick="navigate(\'settings\')">⚙️ الإعدادات</button>').join('');
      }catch(eP2){}
      return h;
    };
  }
}catch(eP3){}

/* ---- 101.ز إمكانية الوصول: خمس ميزات حقيقية تعمل فورًا ---- */
/* المفاتيح الجديدة: aBig (أزرار أكبر) aLinks (إبراز الروابط) aFocus (حلقة تركيز) aSpace (تباعد أسطر) */
try{
  if(typeof XCFG!=='undefined'&&XCFG){
    if(typeof XCFG.aBig==='undefined'){XCFG.aBig=false}
    if(typeof XCFG.aLinks==='undefined'){XCFG.aLinks=false}
    if(typeof XCFG.aFocus==='undefined'){XCFG.aFocus=false}
    if(typeof XCFG.aSpace==='undefined'){XCFG.aSpace=false}
  }
}catch(eX1){}
try{if(typeof loadXCFG==='function'){loadXCFG()}}catch(eX2){}
function x101Sw(on,label,handler){
  return '<div class="x48-row" role="switch" aria-checked="'+(on?'true':'false')+'"><div><b>'+label+'</b></div>'+
   '<label class="x48-tsw"><input type="checkbox" '+(on?'checked':'')+' aria-label="'+escAttr(label)+'" onchange="'+handler+'"><i></i></label></div>';
}
function x101BodyA11y(){
  var h='';
  h+=x101Sw((typeof XCFG!=='undefined'&&XCFG&&XCFG.motion===false),'🚫 تقليل الحركات','setX(\'motion\',!this.checked)');
  h+=x101Sw(XCFG.aBig===true,'🔘 أزرار ولمسات أكبر','setX(\'aBig\',this.checked);try{x48ApplyAll()}catch(e101){}');
  h+=x101Sw(XCFG.aLinks===true,'🔗 إبراز الروابط بخط سفلي','setX(\'aLinks\',this.checked);try{x48ApplyAll()}catch(e101){}');
  h+=x101Sw(XCFG.aFocus===true,'🎯 حلقة تركيز واضحة عند التنقل بلوحة المفاتيح','setX(\'aFocus\',this.checked);try{x48ApplyAll()}catch(e101){}');
  h+=x101Sw(XCFG.aSpace===true,'📏 تباعد أسطر مريح للقراءة','setX(\'aSpace\',this.checked);try{x48ApplyAll()}catch(e101){}');
  h+='<p class="x48-note">هذه الميزات الخمس تعمل فورًا وتُحفظ على جهازك — والتباين والحدود وحجم الخط تجدها في تبويب «المظهر والعرض».</p>';
  return h;
}
try{
  if(typeof X48_SECS!=='undefined'&&X48_SECS){
    for(var i101=0;i101<X48_SECS.length;i101++){
      if(X48_SECS[i101]&&X48_SECS[i101].id==='a11y'){X48_SECS[i101].b=x101BodyA11y}
    }
  }
}catch(eA101){}
try{
  var __x101AA=(typeof x48ApplyAll==='function')?x48ApplyAll:null;
  if(__x101AA){
    x48ApplyAll=function(){
      try{__x101AA()}catch(eX3){}
      try{
        var b=document.body;
        if(!b){return}
        b.classList.toggle('x101-big',XCFG.aBig===true);
        b.classList.toggle('x101-ul',XCFG.aLinks===true);
        b.classList.toggle('x101-focus',XCFG.aFocus===true);
        b.classList.toggle('x101-lh',XCFG.aSpace===true);
      }catch(eX4){}
    };
  }
}catch(eX5){}
try{if(typeof x48ApplyAll==='function'){x48ApplyAll()}}catch(eX6){}

/* ---- 101.ح حرس الصفحات الفارغة: أي جزء درس فارغ يعرض رسالة أنيقة بدل البياض ---- */
try{
  var __x101Sec=(typeof x72SecBuild==='function')?x72SecBuild:null;
  if(__x101Sec){
    x72SecBuild=function(i){
      try{__x101Sec(i)}catch(eS1){}
      try{
        var bd=document.getElementById('x72sec-bd');
        if(bd){
          var txt=(bd.innerText||bd.textContent||'');
          txt=(''+txt).replace(/الجزء التالي[^]*|عودة إلى فهرس الدرس/g,'').replace(/\s+/g,'');
          if(txt.length<12){
            bd.innerHTML='<div class="x17-card" style="text-align:center;padding:30px 18px">'+
             '<div style="font-size:42px;margin-bottom:10px">📭</div>'+
             '<b style="font-size:16px">هذا الجزء فارغ حاليًا</b>'+
             '<p class="x17-mute" style="margin-top:8px;line-height:1.9">المحتوى لم يُنشر بعد لهذا الجزء — اضغط «عودة إلى فهرس الدرس» لتتابع قراءة بقية الأجزاء.</p></div>';
          }
        }
      }catch(eS2){}
    };
  }
}catch(eS3){}
try{
  var __x71Show101=(typeof x71Show==='function')?x71Show:null;
  if(__x71Show101){
    x71Show=function(sid,cid){
      try{__x71Show101(sid,cid)}catch(eL1){}
      try{
        var bb=document.getElementById('x71lpb');
        if(bb){
          var txt=(''+(bb.innerText||bb.textContent||'')).replace(/\s+/g,'');
          if(txt.length<10){
            bb.innerHTML='<div class="x17-card" style="text-align:center;padding:30px 18px">'+
             '<div style="font-size:42px;margin-bottom:10px">📖</div>'+
             '<b style="font-size:16px">محتوى هذا الدرس قادم قريبًا</b>'+
             '<p class="x17-mute" style="margin-top:8px;line-height:1.9">يُنشر محتوى الدرس تدريجيًا — تابع إشعارات المنصة.</p>'+
             '<button class="btn btn-primary" style="margin-top:14px" onclick="try{x69Back()}catch(e){navigate(\'home\')}">رجوع</button></div>';
          }
        }
      }catch(eL2){}
    };
  }
}catch(eL3){}

/* ---- 101.ط بيانات الإصدار 101 ---- */
APP_META.ver='101.0';APP_META.date='2026-11-13';APP_META.lastUpdate='2026-11-13';
APP_META.notes='الإصدار 101.0 — الإصدار الاحترافي الشامل: العودة إلى الهوية الرسمية المعتمدة (أزرق X.HAK × بنفسجي) في الأزرار والفقاعة النشطة وخط التبويب وحلقة الشعار وحلقة عارض الصورة، نزع تأثير المربعات الطائرة واستبداله بتأثير «الذوبان الأنيق» (حلقة ضوء ناعمة تتسع وتتلاشى)، إصلاح جذري لصورة الملف الشخصي: تغيير الصورة يعمل مع كل الصور مهما كان حجمها بتصغير متدرج ذكي ومعاينة فورية، نزع زر «الإعدادات» المكرر من صفحة الملف، تبويب «إمكانية الوصول» بخمس ميزات حقيقية (تقليل الحركات، أزرار أكبر، إبراز الروابط، حلقة تركيز، تباعد أسطر) تحفظ على جهازك، خفة أداء: إزالة الضبابية الثقيلة من البطاقات فالفتح والتمرير أسرع، وحرس الصفحات الفارغة: أي جزء درس لم يُنشر بعد يعرض رسالة أنيقة بدل صفحة بيضاء — مع كل مزايا الإصدار 100 وأمان الجلسة دون أي تعطيل.';
try{
  APP_META.changelog.unshift({ver:'101.0',date:'2026-11-13',notes:'الهوية الرسمية المعتمدة بدل تيليجرام × إنستغرام + الذوبان الأنيق بدل المربعات الطائرة + إصلاح صورة الملف مع كل الصور + نزع الإعدادات المكررة من الملف + خمس ميزات إمكانية وصول حقيقية + خفة أداء بلا ضبابية ثقيلة + حرس الصفحات الفارغة.'});
}catch(eM101){}
window.fallbackNews18=function(){
  return [{title:'الإصدار 101.0 — الإصدار الاحترافي الشامل',
    body:'الهوية الرسمية المعتمدة عادت بأزرق X.HAK وبنفسجي، تأثير حذف أنيق وراقٍ، صورة الملف تعمل مع كل الصور، إمكانية الوصول بخمس ميزات حقيقية، وأداء أخف وأسرع في الفتح والتمرير.',
    date:APP_META.date}];
};
window.x101t={ver:APP_META.ver,pulse:x101Pulse,a11y:x101BodyA11y,pick:window.xPickAvatar};
})();
}catch(eW101){}
try{

/* 101.ل مكمّل نهائي: الصوت مع كل ضغطة + حساب تخزين صادق دائمًا */
(function(){
'use strict';
try{
  document.addEventListener('click',function(e){
    try{
      var t=e.target;
      if(!t||!t.closest){return}
      if(t.closest('button,.btn,.bnav-btn,.x51-row,.x48-sech,.x69-cdot,.x48-thc,.x48-pill,.pv98 button,.x66-card')){xSound('tap')}
    }catch(e1){}
  },true);
}catch(eS0){}
try{
  var __x101SF=(typeof x48StorageFill==='function')?x48StorageFill:null;
  if(__x101SF){
    x48StorageFill=function(){
      try{__x101SF()}catch(eS1){}
      setTimeout(function(){
        try{
          var e2=gid('x48-stor2');
          if(!e2){return}
          var txt=e2.innerHTML||'';
          if(txt.indexOf('0 MB')>=0||txt.indexOf('…')>=0){
            var b=0,i,k;
            for(i=0;i<localStorage.length;i++){k=localStorage.key(i);b+=(''+(localStorage.getItem(k)||'')).length}
            e2.innerHTML=x48T('stor_used')+': <b>'+x48FmtMB(b)+'</b>';
          }
        }catch(eS2){}
      },350);
    };
  }
}catch(eS3){}
})();
}catch(eW101B){}

