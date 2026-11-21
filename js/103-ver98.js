try{

/* ============ الطبقة 98 — الإصدار 98.0: تطبيق حقيقي يعمل بلا إنترنت (مع صفحة عدم اتصال أنيقة) + شريط سفلي أكبر وأضوأ بأسلوب إنستغرام مع فقاعات أصغر وخط تبويب واحد حاد واضح + صورة الملف بجودة عالية وقص دائري يملأ الدائرة وعرض بالأبعاد الحقيقية + تنظيف صفحة الملف وترتيب أزرارها في مجموعتين مع خانتي الخروج والحذف + نزع بطاقة الإبلاغ وزر التبليغ (يبقى الإبلاغ في الإعدادات) + أزرار بطاقة التطبيق الثلاثة موحدة بنفس الأسلوب + «الخدمة» بدل «المنتج» مضمونة نهائيًا ============ */
(function(){
/* 98.أ CSS */
try{
  var st98=document.createElement('style');
  st98.id='x98-style';
  st98.textContent=
   '/* 98: تعطيل سحب-للتحديث نهائيًا — تطبيق حقيقي وليس موقعًا */'+
   'html{overscroll-behavior-y:none!important}'+
   'html body{overscroll-behavior-y:none!important}'+
   '/* 98: الشريط السفلي أكبر وأضوأ وأكثر احترافية في التطبيق */'+
   'html:not(.x81web) .bnav{height:calc(74px + env(safe-area-inset-bottom,0px))!important;padding:10px 6px calc(10px + env(safe-area-inset-bottom,0px))!important;background:linear-gradient(180deg,#0C1728 0%,#060B14 80%)!important;border-top:1px solid rgba(84,199,240,.20)!important;box-shadow:0 -10px 32px rgba(2,8,20,.55),0 -3px 20px rgba(53,189,242,.10)!important}'+
   'html:not(.x81web)[data-theme="light"] .bnav{background:linear-gradient(180deg,#FFFFFF 0%,#F3F8FD 100%)!important;border-top:1px solid rgba(2,132,199,.16)!important;box-shadow:0 -10px 32px rgba(15,23,42,.10),0 -3px 20px rgba(2,132,199,.08)!important}'+
   'html:not(.x81web) body{padding-bottom:calc(100px + env(safe-area-inset-bottom,0px))!important}'+
   'html:not(.x81web) .x69-backbtn{bottom:calc(88px + env(safe-area-inset-bottom,0px))!important}'+
   'html:not(.x81web) .x41-back{bottom:calc(102px + env(safe-area-inset-bottom,0px))!important}'+
   '/* 98: فقاعات أصغر بكثير وأنظف (تطبيق وموقع) */'+
   '.bnav .bnav-btn{height:42px!important;min-height:42px!important;max-width:64px!important;flex:1 1 0!important;padding:0 2px!important;margin:0 2px!important;border-radius:13px!important;border:1px solid transparent!important;background:none!important}'+
   '.bnav .bnav-btn svg{width:22px!important;height:22px!important}'+
   '.bnav .bnav-btn .avatar{width:23px!important;height:23px!important}'+
   '.bnav .bnav-btn.bnav-on{background:linear-gradient(180deg,rgba(42,171,238,.22),rgba(42,171,238,.07))!important;border:1px solid rgba(84,199,240,.40)!important;box-shadow:0 3px 12px rgba(42,171,238,.24)!important;border-radius:13px!important}'+
   'html[data-theme="light"] .bnav .bnav-btn.bnav-on{background:linear-gradient(180deg,rgba(2,132,199,.13),rgba(2,132,199,.04))!important;border-color:rgba(2,132,199,.32)!important;box-shadow:0 3px 12px rgba(2,132,199,.13)!important}'+
   '/* 98: خط تبويب واحد حاد وواضح داخل الفقعة (إزالة الضبابية) */'+
   '.bnav-btn.bnav-on:before{content:none!important;display:none!important}'+
   '.bnav .bnav-btn .x97line{display:none;position:absolute;top:4px!important;left:30%!important;right:30%!important;height:3.5px!important;border-radius:99px!important;pointer-events:none;background:linear-gradient(90deg,#8FE3FF,#35BDF2 55%,#8B6CFF)!important;box-shadow:0 0 5px 1px rgba(120,224,255,.95),0 0 12px 2px rgba(53,189,242,.45)!important;z-index:2}'+
   'html[data-theme="light"] .bnav .bnav-btn .x97line{background:linear-gradient(90deg,#16A8E0,#0284C7 55%,#7657DB)!important;box-shadow:0 0 5px 1px rgba(2,132,199,.55),0 0 10px 2px rgba(2,132,199,.30)!important}'+
   '.bnav .bnav-btn.bnav-on .x97line{display:block!important}'+
   '/* 98: الصورة داخل الدائرة قص دائري يملؤها بالكامل */'+
   '#x97avc img{width:100%!important;height:100%!important;max-width:100%!important;max-height:100%!important;object-fit:cover!important}'+
   '/* 98: تنظيم صفحة الملف في مجموعات أنيقة */'+
   '.pv98{display:flex;flex-direction:column;gap:12px;margin:14px 0 4px}'+
   '.pv98-sec{border-radius:18px;padding:13px 12px;background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08)}'+
   'html[data-theme="light"] .pv98-sec{background:rgba(15,23,42,.035);border-color:rgba(15,23,42,.08)}'+
   '.pv98-t{font-size:12px;font-weight:800;opacity:.62;letter-spacing:.5px;margin:0 2px 10px}'+
   '.pv98-grid{display:grid;grid-template-columns:1fr 1fr;gap:9px}'+
   '.pv98-grid .btn{width:100%!important;box-sizing:border-box;margin:0!important;padding:12px 8px!important;font-size:13px!important;font-weight:700!important;min-height:48px!important}'+
   '.pv98-two{display:grid;grid-template-columns:1fr 1fr;gap:9px}'+
   '.pv98-two .btn{width:100%!important;box-sizing:border-box;margin:0!important;padding:13px 8px!important;font-size:13.5px!important;font-weight:800!important;min-height:52px!important}'+
   '.pv98-out{background:rgba(245,158,11,.10)!important;border:1px solid rgba(245,158,11,.38)!important;color:#F5B942!important}'+
   'html[data-theme="light"] .pv98-out{background:rgba(217,119,6,.08)!important;border-color:rgba(217,119,6,.32)!important;color:#B45309!important}'+
   '.pv98-del{background:rgba(239,68,68,.10)!important;border:1px solid rgba(239,68,68,.38)!important;color:#F87171!important}'+
   'html[data-theme="light"] .pv98-del{background:rgba(220,38,38,.07)!important;border-color:rgba(220,38,38,.30)!important;color:#DC2626!important}'+
   '/* 98: أزرار بطاقة التطبيق الثلاثة موحدة بنفس الأسلوب الأنيق */'+
   '.x98-appbtn{width:100%!important;box-sizing:border-box;display:inline-flex!important;align-items:center;justify-content:center;gap:6px;margin:9px 0 0!important;padding:13px 14px!important;background:rgba(255,255,255,.05)!important;border:1px solid rgba(140,200,240,.22)!important;color:inherit!important;text-decoration:none!important;font-size:14px!important;font-weight:800!important;min-height:50px!important;transition:transform .12s ease,border-color .18s ease}'+
   '.x98-appbtn:active{transform:scale(.98)}'+
   'html[data-theme="light"] .x98-appbtn{background:rgba(2,132,199,.05)!important;border-color:rgba(2,132,199,.20)!important}';
  (document.head||document.documentElement).appendChild(st98);
}catch(eS98){}

/* 98.ب «الخدمة» بدل «المنتج» مضمونة في كل نافذة (حزام أمان فوق إصلاح المصدر) */
try{
  var __x98M=xModal;
  xModal=function(){
    try{
      if(arguments.length>1&&arguments[1]!==null&&arguments[1]!==undefined){
        arguments[1]=(''+arguments[1]).split('<b>المنتج</b>').join('<b>الخدمة</b>');
      }
    }catch(eM1){}
    return __x98M.apply(this,arguments);
  };
}catch(eM2){}

/* 98.ج صفحة الملف: نزع بطاقة الإبلاغ وزر التبليغ (يبقى الإبلاغ في الإعدادات) + ترتيب الأزرار في مجموعتين أنيقتين مع خانتي تسجيل الخروج وحذف الحساب */
try{
  var __x98Pv=renderProfilePage18;
  renderProfilePage18=function(){
    var h='';
    try{h=''+__x98Pv()}catch(eP0){h=''}
    try{
      h=h.split('<button class="btn" id="x97RepBtn" onclick="try{x97Report()}catch(e){}">📢 تبليغ / مراسلة الإدارة</button>').join('');
      if(h.indexOf('x97RepBtn')>=0){
        h=h.replace(/<button[^>]*x97RepBtn[^>]*>[\s\S]*?<\/button>/,'');
      }
      h=h.replace(/<section class="contact[\s\S]*?<\/section>/,'');
      var i=h.indexOf('<div class="pv-actions');
      if(i>=0){
        var j=h.indexOf('</div>',i);
        if(j>i){
          var acts=h.slice(i,j+6);
          var has=function(k){return acts.indexOf(k)>=0};
          var nb='<div class="pv98">';
          nb+='<div class="pv98-sec"><div class="pv98-t">🧰 إدارة الحساب</div><div class="pv98-grid">';
          if(has("navigate('auth')")){nb+='<button class="btn" onclick="navigate(\'auth\')">✏️ تعديل المعلومات</button>'}
          if(has('xPickAvatar()')){nb+='<button class="btn" onclick="xPickAvatar()">🖼️ تغيير الصورة</button>'}
          if(has('xChangeEmail()')){nb+='<button class="btn" onclick="xChangeEmail()">📧 تغيير البريد</button>'}
          if(has('x18Resend()')){nb+='<button class="btn" onclick="x18Resend()">📨 إعادة إرسال البيانات</button>'}
          if(has("navigate('settings')")){nb+='<button class="btn" onclick="navigate(\'settings\')">⚙️ الإعدادات</button>'}
          nb+='</div></div>';
          nb+='<div class="pv98-sec"><div class="pv98-t">🔒 الجلسة</div><div class="pv98-two">';
          if(has('logoutUser()')){nb+='<button class="btn pv98-out" onclick="logoutUser()">🚪 تسجيل الخروج</button>'}
          if(has('xDeleteAccount()')){nb+='<button class="btn pv98-del" onclick="xDeleteAccount()">🗑️ حذف الحساب</button>'}
          nb+='</div></div>';
          nb+='</div>';
          h=h.slice(0,i)+nb+h.slice(j+6);
        }
      }
    }catch(eP1){}
    return h;
  };
}catch(eP2){}

/* 98.د صورة الملف بجودة عالية عند اختيارها: قص مركزي 800×800 وتخزين JPEG عالي الجودة — لتظهر داخل الدائرة وبأبعادها الحقيقية عند الضغط */
window.xPickAvatar=function(){
  var inp=null;
  try{inp=document.createElement('input');inp.type='file';inp.accept='image/*'}catch(eI1){try{toast('ℹ️ تغيير الصورة يحتاج متصفحًا حقيقيًا')}catch(eT1){}return}
  inp.onchange=function(){
    var f=(inp.files&&inp.files[0]);
    if(!f){return}
    try{
      var rd=new FileReader();
      rd.onload=function(){
        try{
          var img=new Image();
          img.onload=function(){
            try{
              var iw=img.width||800,ih=img.height||800,m=Math.min(iw,ih);
              var SZ=800;
              var cv=document.createElement('canvas');cv.width=SZ;cv.height=SZ;
              var g=cv.getContext('2d');
              if(!g){try{toast('❌ تعذرت معالجة الصورة')}catch(eT2){}return}
              g.fillStyle='#ffffff';g.fillRect(0,0,SZ,SZ);
              try{g.imageSmoothingEnabled=true;g.imageSmoothingQuality='high'}catch(eSm1){}
              g.drawImage(img,(iw-m)/2,(ih-m)/2,m,m,0,0,SZ,SZ);
              var d='';
              try{d=cv.toDataURL('image/jpeg',0.92)}catch(eD1){d=''}
              if(d&&d.indexOf('data:image/jpeg')===0){
                USER.profile.avatar_url=d;
                x18SaveUser(USER.profile);
                try{toast('✅ تم تحديث صورتك بجودة عالية')}catch(eT3){}
                try{render()}catch(eR1){}
              }else{try{toast('❌ تعذرت معالجة الصورة')}catch(eT4){}}
            }catch(eC1){try{toast('❌ تعذرت معالجة الصورة')}catch(eT5){}}
          };
          img.onerror=function(){try{toast('❌ تعذر قراءة الصورة')}catch(eT6){}};
          img.src=rd.result;
        }catch(eRd2){try{toast('❌ تعذر قراءة الصورة')}catch(eT7){}}
      };
      rd.readAsDataURL(f);
    }catch(eRd3){try{toast('❌ تعذر قراءة الصورة')}catch(eT8){}}
  };
  try{inp.click()}catch(eCk1){}
};

/* 98.هـ بطاقة التطبيق: ثلاثة أزرار متراكبة بنفس الأسلوب الأنيق (مشاركة + تنزيل APK + عن المؤسسة) */
window.x77AppSheet=function(){
  try{
    var apk='';
    try{apk=(typeof x42ApkUrl==='function')?x42ApkUrl():'./X.apk'}catch(eA1){apk='./X.apk'}
    xModal('📲 التطبيق — شاركه أو نزّله',
     '<button class="btn x98-appbtn" onclick="try{x77Share()}catch(e){}">📤 مشاركة</button>'+
     '<a class="btn x98-appbtn" href="'+escAttr(apk||'./X.apk')+'" download="X.apk">⬇️ تنزيل APK</a>'+
     '<button class="btn x98-appbtn" onclick="try{xShowDoc(\'about\')}catch(e){}">🏛️ عن المؤسسة</button>'+
     '<p class="x17-mute" style="margin-top:12px;font-size:12.5px">«مشاركة» تفتح تطبيقات هاتفك مباشرة، و«تنزيل APK» يجلب التطبيق إلى هاتفك مباشرة، و«عن المؤسسة» يعرّفك بمؤسسة X.HAK صاحبة الخدمة.</p>');
  }catch(eA2){}
};

/* 98.و بيانات الإصدار */
APP_META.ver='98.0';APP_META.date='2026-11-09';APP_META.lastUpdate='2026-11-09';
APP_META.notes='الإصدار 98.0 — الأقوى: التطبيق يعمل بلا إنترنت كتطبيق حقيقي (افتحه مرة واحدة مع اتصال ثم استخدمه في أي وقت بلا شبكة) مع صفحة أنيقة عند غياب الاتصال بدل الخطأ، وتعطيل سحب-التحديث نهائيًا، الشريط السفلي أكبر وأضوأ وأكثر احترافية بأسلوب إنستغرام مع فقاعات أصغر بكثير وخط تبويب واحد حاد وواضح بدل الضبابي، صورة الملف تُحفظ بجودة عالية (800 بكسل) وتظهر داخل الدائرة قصًا دائريًا يملؤها ثم كاملة بأبعادها الحقيقية عند الضغط، صفحة الملف نظيفة ومنظمة: نُزعت بطاقة الإبلاغ وزر التبليغ (يبقى الإبلاغ في الإعدادات) ورُتبت الأزرار في مجموعتين أنيقتين مع خانة واضحة لتسجيل الخروج وخانة لحذف الحساب (الحذف على هذا الجهاز فقط ولا يمس حسابك في القناة الأخرى)، وأزرار بطاقة التطبيق الثلاثة (مشاركة وتنزيل وعن المؤسسة) أصبحت موحدة بنفس الأسلوب الأنيق، و«الخدمة» بدل «المنتج» في صفحة عن المؤسسة مضمونة نهائيًا — مع كل مزايا الإصدارات السابقة دون أي تعطيل.';
try{
  APP_META.changelog.unshift({ver:'98.0',date:'2026-11-09',notes:'تطبيق حقيقي يعمل بلا إنترنت بعد أول فتح مع اتصال + صفحة عدم اتصال أنيقة بدل الخطأ + تعطيل سحب-التحديث + شريط سفلي أكبر وأضوأ بفقاعات أصغر وخط تبويب حاد واضح + صورة الملف بجودة عالية 800 بكسل بقص دائري وعرض بالأبعاد الحقيقية + تنظيف صفحة الملف (نزع الإبلاغ والتبليغ) وترتيب الأزرار بمجموعتين مع خانتي الخروج والحذف + أزرار بطاقة التطبيق الثلاثة موحدة + «الخدمة» بدل «المنتج» نهائيًا.'});
}catch(eM3){}
window.fallbackNews18=function(){
  return [{title:'الإصدار 98.0 — الأقوى: تطبيق حقيقي بلا إنترنت',
    body:'يعمل التطبيق الآن بدون إنترنت بعد أول فتح مع اتصال، الشريط السفلي أكبر وأضوأ بفقاعات أصغر وخط حاد واضح، صورتك تُحفظ بجودة عالية وتظهر دائرية كاملة، صفحة الملف منظمة بنظافة تامة، وأزرار بطاقة التطبيق موحدة الأناقة.',
    date:APP_META.date}];
};
window.x98t={pv:renderProfilePage18,modal:xModal,appsheet:window.x77AppSheet,avatar:window.xPickAvatar};
})();
}catch(eW98){}
