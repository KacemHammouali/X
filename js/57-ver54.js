/* ===== طبقة الإصدار 54.0 — الاستقرار والثبات والاحترافية ===== */
/* ===================== طبقة 54.0 - منصة X — الاستقرار والاحترافية ===================== */
/* 54.0 بيانات الاصدار */
try{
APP_META.ver='54.0';APP_META.date='2026-11-03';APP_META.lastUpdate='2026-11-03';
APP_META.notes='الإصدار 54 — الاستقرار والاحترافية: تصميم عصري جديد لكل شاشات الدخول والتسجيل والإشعارات، لوحة إدارة احترافية مقفلة حصرًا ببريد الإدارة kasembouhonali@gmail.com، تبويبات مستقلة يتذكر كل تبويب موضع تمريرك، نظام خلفيات جذري يعمل في الوضعين الداكن والفاتح ويدعم صور المعرض بصدق كامل، تجاوب كامل مع الهاتف والحاسوب بشريط عائم متمركز، ورسائل تأكيد عصرية بدل النوافذ المنبثقة القديمة.';
}catch(eV0){}
try{APP_META.changelog.unshift('الإصدار 54 — إصدار الاستقرار والاحترافية: شاشات دخول جديدة، لوحة إدارة للمالك وحده ببريده الموثّق، تبويبات مستقلة تتذكر موضعك، خلفيات جذرية للوضعين مع دعم صور المعرض، تجاوب الحاسوب الكامل، ورسائل تأكيد عصرية.')}catch(eV1){}
function fallbackNews18(){
  return [{title:'الإصدار 54 — الاستقرار والاحترافية',
    body:'شاشات دخول جديدة بتصميم المنصة الحديث، لوحة إدارة مقفلة ببريد الإدارة، تبويبات مستقلة تتذكر موضع تمريرك، خلفيات تعمل دائمًا مع صور من معرض هاتفك، وتجاوب كامل مع الحاسوب.',
    date:APP_META.date}];
}
/* 54.أ قفل الإدارة: لوحة الإدارة لحساب بريد الإدارة الموثّق حصرًا — فوق دور المدير من الخادم */
var X54_OWNER='kasembouhonali@gmail.com';
function x54OwnerOk(){
  try{
    var em=''+((USER&&USER.session&&USER.session.user&&USER.session.user.email)||'');
    em=em.toLowerCase();
    return em===X54_OWNER;
  }catch(eO1){return false}
}
try{
var __x54IA=isAdmin;
isAdmin=function(){try{return __x54IA()&&x54OwnerOk()}catch(eO2){return false}};
}catch(eO3){}
function x54DeniedCard(){
  return '<div class="auth-wrap fade-in"><div class="auth-card glass-strong">'+
   '<div class="x54-lock">🛡️</div><h3>لوحة الإدارة</h3>'+
   '<p class="auth-note">هذه اللوحة مخصصة حصرًا لمالك منصة X.HAK. الوصول محكوم ببريد الإدارة الموثّق عبر خدمة المصادقة، مع دور المدير في الخادم وسياسات RLS — ولا يمنحه إخفاء الرابط ولا أي استثناء.</p>'+
   '<button class="btn btn-block" onclick="navigate(\'home\')">العودة للرئيسية</button></div></div>';
}
/* 54.ب لوحة الإدارة الاحترافية: قفل صارم + رأس حديث + أقسام المستخدمين ونشر الإعلان وسجل الإصدارات */
try{
var __x54AP18=renderAdminPage18;
renderAdminPage18=function(){
  try{
    if(!USER.session){return __x54AP18()}
    if(!x54OwnerOk()){return x54DeniedCard()}
    var h=__x54AP18();
    try{h=(''+h).replace('لوحة الإدارة — معلومات محلية','مركز التحكم — نظرة عامة')}catch(eA1){}
    var hero='<div class="x54-admhero glass-strong fade-in">'+
     '<div class="x54-adm-ic">🛡️</div>'+
     '<div class="x54-adm-t"><h2>لوحة الإدارة</h2><p>'+X54_OWNER+'</p></div>'+
     '<span class="x54-chip">v '+APP_META.ver+'</span></div>';
    h=hero+h;
    try{
      if(typeof admUsersHTML==='function'){
        h+='<div class="set-card glass-strong"><h3>🔎 المستخدمون</h3>'+
         '<div class="set-line"><input id="adm-q" class="xin" dir="ltr" placeholder="بحث بالبريد" value="'+escAttr(ADM.q)+'"><button class="btn btn-sm btn-primary" onclick="ADM.q=(document.getElementById(\'adm-q\')||{}).value||\'\';ADM.users=null;render();admLoad()">بحث</button></div>'+
         '<div id="adm-users" class="adm-tbl">'+admUsersHTML()+'</div></div>';
      }
      if(typeof adPublish==='function'){
        h+='<div class="set-card glass-strong"><h3>📣 نشر إعلان</h3>'+
         '<input id="adm-nt" class="xin" placeholder="عنوان الإعلان">'+
         '<textarea id="adm-nb" class="xin" rows="3" placeholder="نص الإعلان (يظهر في الصفحة الرئيسية لكل المستخدمين)"></textarea>'+
         '<button class="btn btn-primary" onclick="adPublish()">🚀 نشر الإعلان</button></div>';
      }
      if(typeof admLoad==='function'){try{if(!ADM.loaded)admLoad()}catch(eA2){}}
    }catch(eA3){}
    return h;
  }catch(eA4){try{return __x54AP18()}catch(eA5){return ''}}
};
}catch(eA6){}
try{
var __x54AP=renderAdminPage;
renderAdminPage=function(){
  try{if(USER.session&&!x54OwnerOk()){return x54DeniedCard()}}catch(eA7){}
  return __x54AP();
};
}catch(eA8){}
/* 54.ب2 زر لوحة الإدارة يظهر في صفحة الملف الشخصي لحساب الإدارة فقط */
try{
var __x54RP=renderProfilePage18;
renderProfilePage18=function(){
  var h=__x54RP();
  try{
    if(x54OwnerOk()&&h){
      var card='<div class="set-card glass-strong"><h3>🛡️ إدارة المنصة</h3>'+
       '<p class="set-note">قناة خاصة بإدارة المنصة فقط — لا تظهر لأي حساب آخر.</p>'+
       '<button class="btn btn-primary" onclick="navigate(\'admin\')">فتح لوحة الإدارة</button></div>';
      var i=(''+h).lastIndexOf('</div>');
      if(i>0){h=(''+h).substring(0,i)+card+'</div>'}else{h+=card}
    }
  }catch(eR1){}
  return h;
};
}catch(eR2){}
/* 54.ج شاشات الدخول والتسجيل بتصميم المنصة الحديث — تحل محل الشريط الأزرق القديم «الخطوة X من Y» */
try{
var __x54AW=authWrap;
authWrap=function(inner,step,total){
  var dots='';
  try{
    if(total){
      dots='<div class="x54-steps" role="progressbar" aria-valuenow="'+step+'" aria-valuemax="'+total+'">';
      for(var i=1;i<=total;i++){dots+='<i'+((i<=step)?' class="on"':'')+'></i>'}
      dots+='<span>الخطوة '+step+' من '+total+'</span></div>';
    }
  }catch(eW1){}
  return '<div class="auth-wrap fade-in x54-auth">'+
   '<div class="x54-authhero"><div class="x54-authlogo"><div class="logo-mark">'+LOGO+'</div></div>'+
   '<h2>منصة <span>X</span></h2><p>منصة X التعليمية — الطوران المتوسط والثانوي</p>'+dots+'</div>'+
   '<div class="auth-card glass-strong">'+inner+'</div>'+
   '<p class="auth-links"><a onclick="xShowDoc(\'privacy\')">سياسة الخصوصية</a> · <a onclick="xShowDoc(\'terms\')">شروط الاستخدام</a></p>'+
   '</div>';
};
}catch(eW2){}
/* 54.د رسائل التأكيد العصرية بدل النوافذ المنبثقة القديمة — لكل مواضع الحذف في المنصة */
function x54CfmClose(){try{var ov=gid('x54-cfm');if(ov&&ov.parentNode){ov.parentNode.removeChild(ov)}}catch(eC1){}}
function x54Confirm(title,msg,onYes){
  try{
    x54CfmClose();
    var ov=document.createElement('div');ov.id='x54-cfm';
    var bgc=document.createElement('div');bgc.className='x54-cfm-bg';bgc.onclick=x54CfmClose;
    var card=document.createElement('div');card.className='x54-cfm-card glass-strong';card.setAttribute('role','dialog');card.setAttribute('aria-modal','true');
    card.innerHTML='<div class="x54-cfm-ic">⚠️</div><h3>'+title+'</h3><p>'+msg+'</p>';
    var row=document.createElement('div');row.className='btn-row';
    var bNo=document.createElement('button');bNo.className='btn';bNo.textContent='إلغاء';bNo.onclick=x54CfmClose;
    var bYes=document.createElement('button');bYes.className='btn btn-primary';bYes.textContent='تأكيد';
    bYes.onclick=function(){x54CfmClose();try{onYes()}catch(eC2){}};
    row.appendChild(bNo);row.appendChild(bYes);card.appendChild(row);
    ov.appendChild(bgc);ov.appendChild(card);
    (document.body||document.documentElement).appendChild(ov);
  }catch(eC3){}
}
try{
xDeleteAccount=function(){
  x54Confirm('حذف الحساب','سيُحذف حسابك وبياناتك الشخصية من هذا الجهاز نهائيًا — لا يمكن التراجع.',function(){
    try{localStorage.removeItem('x18_user')}catch(eD1){try{stSet('x18_user',null)}catch(eD2){}}
    USER.session=null;USER.profile=null;
    toast('🗑️ حُذف حسابك وبياناتك من هذا الجهاز');
    navigate('home');
  });
};
}catch(eD3){}
try{
var __x54AD=x30ADel;
x30ADel=function(id){
  var nm='';
  try{var f2=x30Find(id);nm=(f2&&f2.name)||''}catch(eD4){}
  x54Confirm('حذف الملف','سيُحذف الملف «'+nm+'» نهائيًا من المكتبة.',function(){
    var oc=window.confirm;
    window.confirm=function(){window.confirm=oc;return true};
    try{__x54AD(id)}catch(eD5){window.confirm=oc}
  });
};
}catch(eD6){}
/* 54.هـ الخلفيات الجذرية: طبقة خلفية مستقلة بأسلوب مباشر لا تتأثر بأي قاعدة CSS،
       وتُطبق في الوضعين معًا، وصور المعرض في مفتاح تخزين خاص بصدق كامل */
function x54BgLayerNode(){
  var el=gid('x54-bg');
  if(!el){
    el=document.createElement('div');el.id='x54-bg';
    el.style.cssText='position:fixed;top:0;right:0;bottom:0;left:0;z-index:-1;pointer-events:none;display:none';
    (document.body||document.documentElement).appendChild(el);
  }
  return el;
}
function x54ImgKey(eff){return (eff==='light')?'x54_bg_img_l':'x54_bg_img_d'}
function x54BgResolve(eff){
  var img=(eff==='light')?(XCFG.imgL||''):(XCFG.imgD||'');
  if(!img){return ''}
  if((''+img).indexOf('data:')===0){return ''+img}
  if((''+img).indexOf('x54ref')===0){
    try{var v54=localStorage.getItem(x54ImgKey(eff));if(v54===null||v54===undefined){return ''}return ''+v54}catch(eG1){}
  }
  return '';
}
function x54BgApply(){
  try{
    var lay=x54BgLayerNode();
    var node=gid('x48-bgstyle');
    if(!node){node=document.createElement('style');node.id='x48-bgstyle';(document.head||document.documentElement).appendChild(node)}
    var ex=gid('x53-bgextra');
    if(!ex){ex=document.createElement('style');ex.id='x53-bgextra';(document.head||document.documentElement).appendChild(ex)}
    var eff=x48EffTheme();
    var img=x54BgResolve(eff);
    var id=(eff==='light')?(XCFG.bgL||'def'):(XCFG.bgD||'def');
    var pos=(eff==='light')?(XCFG.posL||'center'):(XCFG.posD||'center');
    var dim=(eff==='light')?(XCFG.dimL===undefined?.15:XCFG.dimL):(XCFG.dimD===undefined?.45:XCFG.dimD);
    var cssv='';
    if(img){cssv='url("'+(''+img).split('"').join('%22')+'")'}
    else if(id&&id!=='def'){for(var i=0;i<X48_BGS.length;i++){if(X48_BGS[i].id===id){cssv=X48_BGS[i].css}}}
    if(!cssv){lay.style.display='none';lay.style.background='';node.textContent='';ex.textContent='';return}
    var bg;
    if(img){
      var ov=(eff==='light')?('rgba(244,247,252,'+(+dim||0)+'),'):('rgba(8,13,24,'+(+dim||0)+'),');
      bg=ov+'url("'+(''+img).split('"').join('%22')+'") '+((pos==='center')?'center':pos)+' / cover no-repeat';
    }else{bg=cssv}
    lay.style.display='block';
    lay.style.background=bg;
    node.textContent='body::before{background:none!important}#bg-canvas{display:none!important}@media print{#x54-bg{display:none!important}}';
    ex.textContent='';
  }catch(eG2){}
}
try{
var __x54BGA=x48BgApply;
x48BgApply=function(){try{__x54BGA()}catch(eG3){}try{x54BgApply()}catch(eG4){}try{x52AutoInkNow()}catch(eG5){}};
}catch(eG6){}
try{
var __x54AA=x48ApplyAll;
x48ApplyAll=function(){try{__x54AA()}catch(eG7){}try{x54BgApply()}catch(eG8){}try{x52AutoInkNow()}catch(eG9){}};
}catch(eG10){}
/* 54.هـ2 التطبيق: خلفية واحدة للوضعين معًا + صورة المعرض في مفتاح خاص + صدق كامل عند ضيق التخزين */
try{
x48BgApplySel=function(){
  try{
    var eff=x48EffTheme();
    var d=(+X48.pdim||0)/100;
    var pid=(X48.pimg?'def':(X48.pid||'def'));
    var okSave=true;
    var imgRef='';
    if(X48.pimg){
      try{
        localStorage.setItem('x54_bg_img_d',''+X48.pimg);
        localStorage.setItem('x54_bg_img_l',''+X48.pimg);
        var rb=(''+localStorage.getItem('x54_bg_img_d'));
        okSave=(rb===(''+X48.pimg));
      }catch(eS1){okSave=false}
      if(okSave){imgRef='x54ref'}else{imgRef=''+X48.pimg}
    }
    XCFG.bgD=pid;XCFG.bgL=pid;
    XCFG.imgD=imgRef;XCFG.imgL=imgRef;
    if(eff==='light'){XCFG.dimL=d}else{XCFG.dimD=d}
    XCFG.posD=(X48.ppos||'center');XCFG.posL=(X48.ppos||'center');
    saveXCFG();
    x48BgApply();try{xCloseModal()}catch(eS6){}
    if(okSave){toast('🖼️ تم تطبيق الخلفية في الوضعين معًا وحفظها','success')}
    else{toast('⚠️ الخلفية ظاهرة الآن — لكن مساحة التخزين ضاقت عن حفظ الصورة فستعود الافتراضية بعد إعادة الفتح. جرّب صورة أصغر أو خلفية من المعرض','error')}
    try{render()}catch(eS2){}
  }catch(eS3){try{toast('❌ تعذر تطبيق الخلفية','error')}catch(eS4){}}
};
}catch(eS5){}
/* 54.هـ3 اختيار صورة أصغر بمعالجة صادقة للأخطاء */
try{
x48BgPick=function(inp){
  try{
    var f=inp.files&&inp.files[0];if(!f)return;
    if(!/^image\//.test(f.type||'')){toast('⚠️ اختر ملف صورة فقط','error');return}
    if(f.size>8*1024*1024){toast('⚠️ الصورة كبيرة جدًا (الحد 8 ميغابايت)','error');return}
    var rd=new FileReader();
    rd.onload=function(){
      try{
        var im=new Image();
        im.onload=function(){
          try{
            var mx=900,sc=Math.min(1,mx/Math.max(im.width,im.height));
            var cv=document.createElement('canvas');cv.width=Math.round(im.width*sc);cv.height=Math.round(im.height*sc);
            var cx=cv.getContext('2d');cx.drawImage(im,0,0,cv.width,cv.height);
            X48.pendingImg=cv.toDataURL('image/jpeg',.78);
            X48.pid='';X48.pimg=X48.pendingImg;
            var eff=x48EffTheme();
            X48.pdim=((eff==='light')?(XCFG.dimL===undefined?.15:XCFG.dimL):(XCFG.dimD===undefined?.45:XCFG.dimD))*100;
            X48.ppos=(eff==='light')?(XCFG.posL||'center'):(XCFG.posD||'center');
            x48PvModal(true);
          }catch(eP1){toast('❌ تعذر معالجة الصورة — جرّب صورة أصغر','error')}
        };
        im.onerror=function(){try{toast('❌ تعذر قراءة الصورة','error')}catch(eP2){}};
        im.src=''+rd.result;
      }catch(eP3){toast('❌ تعذر قراءة الصورة','error')}
    };
    rd.onerror=function(){try{toast('❌ تعذر فتح الملف','error')}catch(eP4){}};
    rd.readAsDataURL(f);
  }catch(eP5){toast('❌ تعذر اختيار الصورة','error')}
};
}catch(eP6){}
/* 54.هـ4 ترحيل صور الخلفيات القديمة من إعدادات الحساب إلى المفتاح الخاص */
try{
(function(){
  var moved=false;
  function mig(eff){
    try{
      var v=(eff==='light')?XCFG.imgL:XCFG.imgD;
      if(v&&(''+v).indexOf('data:')===0){
        localStorage.setItem(x54ImgKey(eff),''+v);
        if(eff==='light'){XCFG.imgL='x54ref'}else{XCFG.imgD='x54ref'}
        moved=true;
      }
    }catch(eM1){}
  }
  mig('dark');mig('light');
  if(moved){try{saveXCFG()}catch(eM2){}}
})();
}catch(eM3){}
try{
var __x54RST=x48BgReset;
x48BgReset=function(){try{localStorage.removeItem('x54_bg_img_d')}catch(eR1){}try{localStorage.removeItem('x54_bg_img_l')}catch(eR2){}try{return __x54RST()}catch(eR3){}};
var __x54RMI=x48BgRemoveImg;
x48BgRemoveImg=function(){try{var eff=x48EffTheme();localStorage.removeItem(x54ImgKey(eff))}catch(eR4){}try{return __x54RMI()}catch(eR5){}};
}catch(eR6){}
try{x54BgApply()}catch(eG11){}
/* 54.و تبويبات مستقلة: كل تبويب يتذكر موضع تمريرك وتعود إليه تمامًا كما في التطبيقات العالمية */
var X54SCROLL={};
try{
var __x54Nav=navigate;
navigate=function(p,s,c){
  var from='';
  try{from=(ROUTE&&ROUTE.page)||''}catch(eN1){}
  try{if(from){X54SCROLL[from]=(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0)}}catch(eN2){}
  var r=__x54Nav(p,s,c);
  try{
    var to=(ROUTE&&ROUTE.page)||'';
    if(to!==from){
      var y=(X54SCROLL[to]!==undefined)?X54SCROLL[to]:0;
      setTimeout(function(){try{window.scrollTo(0,y)}catch(eN3){}},40);
    }
  }catch(eN4){}
  return r;
};
}catch(eN5){}
/* 54.ح إشعار التحديث العصري الموحد بدل البطاقة القديمة */
try{
var __x54UB=updBanner;
updBanner=function(){
  try{
    if(!XUPD||!XUPD.newer){return ''}
    var j=XUPD.newer;
    return '<div class="x54-upd fade-in"><div class="x54-upd-ic">🔄</div><div class="x54-upd-tx">'+
     '<b>إصدار جديد متوفر: '+escAttr(j.ver||'')+'</b><p>'+escAttr(j.notes||'')+'</p>'+
     '<div class="btn-row"><button class="btn btn-primary btn-sm" onclick="applyUpdate()">تحديث الآن</button>'+
     (j.force?'':'<button class="btn btn-sm" onclick="XUPD.newer=null;render()">لاحقًا</button>')+
     '</div></div></div>';
  }catch(eU1){try{return __x54UB()}catch(eU2){return ''}}
};
}catch(eU3){}
/* 54.ي التنسيق الاحترافي الموحد + تجاوب الحاسوب الكامل */
try{
var x54s=document.createElement('style');x54s.id='x54-style';
x54s.textContent=
 '.x54-authhero{text-align:center;padding:26px 18px 10px}'+
 '.x54-authlogo{width:78px;height:78px;margin:0 auto 14px;border-radius:24px;display:flex;align-items:center;justify-content:center;background:linear-gradient(145deg,rgba(106,179,243,.16),rgba(157,184,232,.10));border:1px solid var(--border);box-shadow:0 14px 40px rgba(0,0,0,.35),inset 0 1px 0 rgba(255,255,255,.08)}'+
 '.x54-authlogo .logo-mark{width:54px;height:54px;margin:0}'+
 '.x54-authhero h2{margin:0 0 4px;font-size:26px;letter-spacing:.5px}'+
 '.x54-authhero h2 span{color:var(--cyan)}'+
 '.x54-authhero p{margin:0 0 14px;color:var(--text-mute);font-size:13.5px}'+
 '.x54-steps{display:flex;align-items:center;justify-content:center;gap:7px;margin:0 auto 16px}'+
 '.x54-steps i{width:9px;height:9px;border-radius:999px;background:var(--bg-2);border:1px solid var(--border);display:block}'+
 '.x54-steps i.on{background:linear-gradient(135deg,var(--cyan),var(--purple-deep));border-color:transparent;box-shadow:0 0 10px rgba(106,179,243,.5)}'+
 '.x54-steps span{font-size:12px;color:var(--text-mute);font-weight:800;margin-inline-start:8px}'+
 '.x54-upd{display:flex;gap:14px;align-items:flex-start;max-width:680px;margin:14px auto 0;padding:16px;border-radius:18px;border:1px solid var(--border-strong);background:var(--glass-strong);box-shadow:0 16px 44px rgba(0,0,0,.28)}'+
 '.x54-upd-ic{width:44px;height:44px;border-radius:14px;display:flex;align-items:center;justify-content:center;font-size:22px;background:rgba(106,179,243,.14);flex:0 0 auto}'+
 '.x54-upd-tx{flex:1;min-width:0}'+
 '.x54-upd-tx b{display:block;margin-bottom:4px}'+
 '.x54-upd-tx p{margin:0 0 10px;font-size:13px;color:var(--text-dim)}'+
 '.x54-cfm{position:fixed;top:0;right:0;bottom:0;left:0;z-index:3000;display:flex;align-items:center;justify-content:center;padding:22px}'+
 '.x54-cfm-bg{position:absolute;top:0;right:0;bottom:0;left:0;background:rgba(4,8,14,.62)}'+
 '.x54-cfm-card{position:relative;max-width:400px;width:100%;border-radius:20px;padding:24px;text-align:center;border:1px solid var(--border-strong);box-shadow:0 30px 80px rgba(0,0,0,.5)}'+
 '.x54-cfm-ic{font-size:38px;margin-bottom:8px}'+
 '.x54-cfm-card h3{margin:0 0 8px}'+
 '.x54-cfm-card p{margin:0 0 18px;color:var(--text-dim);font-size:14px;line-height:1.8}'+
 '.x54-admhero{display:flex;align-items:center;gap:14px;max-width:680px;margin:14px auto;padding:18px;border-radius:20px;border:1px solid var(--border-strong);box-shadow:0 16px 44px rgba(0,0,0,.28)}'+
 '.x54-adm-ic{width:52px;height:52px;border-radius:16px;background:linear-gradient(135deg,rgba(106,179,243,.2),rgba(157,184,232,.12));display:flex;align-items:center;justify-content:center;font-size:24px;flex:0 0 auto}'+
 '.x54-adm-t h2{margin:0;font-size:19px}'+
 '.x54-adm-t p{margin:2px 0 0;font-size:12.5px;color:var(--text-mute);direction:ltr;text-align:right}'+
 '.x54-chip{margin-inline-start:auto;background:rgba(106,179,243,.14);border:1px solid var(--border-strong);color:var(--cyan);border-radius:999px;padding:4px 12px;font-size:12px;font-weight:800;white-space:nowrap}'+
 '.x54-lock{font-size:44px;margin-bottom:6px}'+
 '.adm-tbl{border-radius:14px;overflow:hidden;border:1px solid var(--border)}'+
 '.adm-row:hover{background:rgba(106,179,243,.06)}'+
 'html[data-theme="light"] .x54-upd,html[data-theme="light"] .x54-admhero,html[data-theme="light"] .x54-cfm-card{box-shadow:0 14px 36px rgba(25,35,50,.12)}'+
 '@media(min-width:1024px){'+
  '.bnav{left:50%;right:auto;transform:translateX(-50%);width:600px;justify-content:center}'+
  '.bnav-btn{padding:10px 30px;font-size:14px}'+
  '.x41-back{left:calc(50% - 300px + 8px)}'+
  'body{padding-bottom:calc(80px + env(safe-area-inset-bottom,0px))}'+
  '#app{max-width:920px;margin:0 auto;padding:0}'+
  '.x48-page,.lesson-view{max-width:760px}'+
  '.auth-wrap{max-width:520px;margin:0 auto;padding:32px 16px}'+
  '.x51-row:hover,.adm-row:hover{background:rgba(106,179,243,.07)}'+
 '}';
(document.head||document.documentElement).appendChild(x54s);
}catch(eY1){}

