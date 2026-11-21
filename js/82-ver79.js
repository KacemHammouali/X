/* ===== طبقة 79: الاستقرار والثبات والاحترافية ===== */

/* 79.أ شاشة رمز التحقق نظيفة: بلا زر «نسخ رابط البريد» — دون أي مساس بحقل الرمز ولا بخدمة التحقق */
x44CodeScreen=function(){
  return '<h3>📩 أدخل رمز التحقق</h3>'+
  '<p class="auth-note">أرسلنا رمزًا سريًا إلى <b dir="ltr">'+escAttr(AUTH.email)+'</b>. افتح بريدك واكتب الرمز هنا.</p>'+
  '<label class="fld"><span>رمز التحقق</span><input id="a-code" type="text" inputmode="numeric" maxlength="6" dir="ltr" placeholder="••••••" style="text-align:center;font-size:22px;letter-spacing:8px">'+fErr('code')+'</label>'+
  fErr('top')+
  '<button class="btn btn-primary btn-block" onclick="x44OtpCheck()">'+(AUTH.busy?'⏳ جارٍ التحقق…':'متابعة →')+'</button>'+
  '<p class="auth-alt">لم يصلك الرمز؟ <a onclick="x44OtpSend()">إعادة الإرسال</a> · <a onclick="AUTH.tab=\'new\';AUTH.errs={};render()">تغيير البريد</a></p>';
};
function x79StripMailBtn(){
  try{
    var ids=['x74mailrow','x74mailbtn'];
    for(var i=0;i<ids.length;i++){var el=document.getElementById(ids[i]);if(el&&el.parentNode){try{el.parentNode.removeChild(el)}catch(e1){}}}
    var oc=document.getElementById('a-code');
    if(oc){
      var card=oc;var guard=0;
      while(card&&guard<4){card=card.parentNode;guard++}
      if(card&&card.querySelectorAll){
        var bs=card.querySelectorAll('button');
        for(var j=0;j<bs.length;j++){
          var t=''+((bs[j].textContent)||'');
          if(t.indexOf('نسخ رابط البريد')>=0){var rw=bs[j].parentNode;if(rw&&rw.parentNode){try{rw.parentNode.removeChild(rw)}catch(e2){}}}
        }
      }
    }
  }catch(e0){}
}

/* 79.ب نافذة التطبيق نظيفة: الخانتان فقط بلا فقرة الشرح */
x77AppSheet=function(){
  try{
    var apk='';try{apk=(typeof x42ApkUrl==='function')?x42ApkUrl():'./X.apk'}catch(e0){apk='./X.apk'}
    xModal('📲 التطبيق — شاركه أو نزّله',
     '<div class="btn-row" style="display:flex;flex-wrap:wrap;gap:10px">'+
     '<button class="btn btn-primary" onclick="try{x77Share()}catch(e){}" style="flex:1 1 140px">📤 مشاركة</button>'+
     '<a class="btn btn-primary" href="'+escAttr(apk||'./X.apk')+'" download="X.apk" style="flex:1 1 140px;text-decoration:none;display:inline-flex;align-items:center;justify-content:center">⬇️ تنزيل APK</a>'+
     '</div>');
  }catch(e2){}
};

/* 79.ج شريط سفلي واحد فقط — لا طبقات أبدًا */
function x79OneNav(){
  try{
    if(!document.querySelectorAll)return;
    var ns=document.querySelectorAll('nav.bnav');
    if(ns&&ns.length>1){for(var i=1;i<ns.length;i++){if(ns[i].parentNode){try{ns[i].parentNode.removeChild(ns[i])}catch(e1){}}}}
  }catch(e0){}
}
var __x79AQ=answerQuiz;
answerQuiz=function(idx){try{__x79AQ(idx)}catch(e0){}try{x79OneNav()}catch(e1){}try{if(typeof x78Patch==='function'){x78Patch()}}catch(e2){}};

/* 79.د لوحة الإدارة مرتبة: حالة المنصة ثم الإعلان ثم المستخدمون ثم القنوات ثم التخزين ثم الإصدارات ثم الأدوات */
function x79AdmOrder(){
  try{
    if(!document.querySelector)return;
    var wrap=document.querySelector('.set-wrap');
    if(!wrap)return;
    var isAdm=false;
    try{isAdm=!!(document.getElementById('adm-users')||document.querySelector('.x71-chan')||document.getElementById('adm-nt'))}catch(e9){}
    if(!isAdm)return;
    var cards=document.querySelectorAll('.set-card');
    if(!cards||cards.length<2)return;
    var parents=[];
    for(var i=0;i<cards.length;i++){var p=cards[i].parentNode;var seen=false;for(var j=0;j<parents.length;j++){if(parents[j]===p){seen=true;break}}if(!seen)parents.push(p)}
    var score=function(el){
      var t='';try{var h3=el.querySelector('h3');if(h3)t=''+(h3.textContent||'')}catch(e2){}
      if(t.indexOf('حالة المنصة')>=0||t.indexOf('نظرة عامة')>=0||t.indexOf('إحصائيات')>=0)return 0;
      if(t.indexOf('إعلان')>=0)return 1;
      if(t.indexOf('مستخدم')>=0)return 2;
      if(t.indexOf('قنوات')>=0||t.indexOf('الرسائل')>=0)return 3;
      if(t.indexOf('تخزين')>=0)return 4;
      if(t.indexOf('إصدار')>=0)return 5;
      if(t.indexOf('أدوات')>=0)return 6;
      return 8;
    };
    for(var k=0;k<parents.length;k++){
      var par=parents[k];
      var cs=[];
      var nds=par.childNodes;
      for(var m=0;m<nds.length;m++){var nd=nds[m];if(nd.nodeType===1&&((''+(nd.className||'')).indexOf('set-card')>=0)){cs.push(nd)}}
      if(cs.length<2)continue;
      cs.sort(function(a,b){return score(a)-score(b)});
      for(var n2=0;n2<cs.length;n2++){par.appendChild(cs[n2])}
    }
  }catch(e0){}
}

/* 79.هـ ستايل 79: تباين الوضعين + زر الرجوع فوق الشريط بلا تراكب + لوحة أنيقة */
try{
  var st79=document.createElement('style');
  st79.id='x79-style';
  st79.textContent=
   '/* زر الرجوع العائم فوق الشريط بلا تراكب — نهاية «الطبقتين» */'+
   '.x69-backbtn{bottom:calc(82px + env(safe-area-inset-bottom,0px))!important;box-shadow:0 6px 14px rgba(15,60,115,.35)!important}'+
   '.x41-back{bottom:calc(94px + env(safe-area-inset-bottom,0px))!important}'+
   '/* دقة الوضع الداكن: كل الكلمات فاتحة واضحة */'+
   'html[data-theme="dark"] body{color:#E8EEF6!important}'+
   'html[data-theme="dark"] .sec15,html[data-theme="dark"] .set-card h3,html[data-theme="dark"] .xmodal-card h3,html[data-theme="dark"] .auth-card h3,html[data-theme="dark"] .set-wrap h2{color:#F2F6FB!important}'+
   'html[data-theme="dark"] .set-note,html[data-theme="dark"] .x17-mute,html[data-theme="dark"] .auth-note,html[data-theme="dark"] .sub,html[data-theme="dark"] .label,html[data-theme="dark"] .x48-lbl,html[data-theme="dark"] .h15-k,html[data-theme="dark"] .adm-t,html[data-theme="dark"] .x17-empty,html[data-theme="dark"] .x51-foot,html[data-theme="dark"] .x51-grpt,html[data-theme="dark"] .x51-go,html[data-theme="dark"] .x48-chv,html[data-theme="dark"] .x48-hero p,html[data-theme="dark"] .x51-hero p,html[data-theme="dark"] .x48-sech span,html[data-theme="dark"] .x48-row span,html[data-theme="dark"] .x48-note,html[data-theme="dark"] .x51-rt span,html[data-theme="dark"] .x51-sechead p{color:#9AAAC0!important}'+
   'html[data-theme="dark"] .set-line span{color:#A9B8CE!important}'+
   'html[data-theme="dark"] .pv-stats li{color:#C6D2E4!important}'+
   'html[data-theme="dark"] .auth-alt{color:#9AAAC0!important}'+
   'html[data-theme="dark"] .auth-alt a{color:#58B6F0!important}'+
   'html[data-theme="dark"] .f-err{color:#FF9B9B!important}'+
   'html[data-theme="dark"] .xin{color:#E8EEF6!important}'+
   'html[data-theme="dark"] .xin::placeholder{color:#8A9AB2!important}'+
   'html[data-theme="dark"] .x38-tbtn{color:#9FB4C9!important}'+
   '/* دقة الوضع الفاتح: كل الكلمات داكنة واضحة */'+
   'html[data-theme="light"] body{color:#0F1419!important}'+
   'html[data-theme="light"] .sec15,html[data-theme="light"] .set-card h3,html[data-theme="light"] .xmodal-card h3,html[data-theme="light"] .auth-card h3,html[data-theme="light"] .set-wrap h2{color:#0F1419!important}'+
   'html[data-theme="light"] .set-note,html[data-theme="light"] .x17-mute,html[data-theme="light"] .auth-note,html[data-theme="light"] .sub,html[data-theme="light"] .label,html[data-theme="light"] .x48-lbl,html[data-theme="light"] .h15-k,html[data-theme="light"] .adm-t,html[data-theme="light"] .x17-empty,html[data-theme="light"] .x51-foot,html[data-theme="light"] .x51-grpt,html[data-theme="light"] .x51-go,html[data-theme="light"] .x48-chv,html[data-theme="light"] .x48-hero p,html[data-theme="light"] .x51-hero p,html[data-theme="light"] .x48-sech span,html[data-theme="light"] .x48-row span,html[data-theme="light"] .x48-note,html[data-theme="light"] .x51-rt span,html[data-theme="light"] .x51-sechead p{color:#5B6B80!important}'+
   'html[data-theme="light"] .set-line span{color:#3D4B5E!important}'+
   'html[data-theme="light"] .pv-stats li{color:#2A3644!important}'+
   'html[data-theme="light"] .auth-alt{color:#5B6B80!important}'+
   'html[data-theme="light"] .auth-alt a{color:#1D6FA8!important}'+
   'html[data-theme="light"] .f-err{color:#C0392B!important}'+
   'html[data-theme="light"] .xin{color:#0F1419!important}'+
   'html[data-theme="light"] .xin::placeholder{color:#8A96A6!important}'+
   'html[data-theme="light"] .x38-tbtn{color:#41566C!important}'+
   '/* لوحة الإدارة والإعدادات: بطاقات موحدة أنيقة */'+
   '.set-card{border-radius:18px!important;margin:14px 0!important}'+
   '.h15-cards{display:grid!important;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));gap:10px}'+
   '.adm-tbl{border:1px solid rgba(140,180,230,.16);border-radius:12px;overflow:hidden}'+
   '.adm-row{border-bottom:1px solid rgba(140,180,230,.10)}'+
   'html[data-theme="light"] .adm-tbl{border-color:rgba(40,70,110,.16)}'+
   'html[data-theme="light"] .adm-row{border-color:rgba(40,70,110,.10)}';
  var hd79=document.head||document.documentElement;
  if(hd79&&hd79.appendChild){hd79.appendChild(st79)}
}catch(eSt79){}

/* 79.و غلاف render الأخير: بعد كل عرض — شريط واحد + لا زر نسخ + لوحة مرتبة */
var __x79R=render;
render=function(){
  try{__x79R()}catch(e0){}
  try{x79OneNav()}catch(e1){}
  try{x79StripMailBtn()}catch(e2){}
  try{x79AdmOrder()}catch(e3){}
};
try{
  if(typeof MutationObserver!=='undefined'&&document.body){
    var x79mo=new MutationObserver(function(){
      try{x79StripMailBtn()}catch(e1){}
      try{x79OneNav()}catch(e2){}
    });
    x79mo.observe(document.body,{childList:true,subtree:true});
  }
}catch(e4){}

/* 79.ط هوية الإصدار */
APP_META.ver='79.0';APP_META.date='2026-11-05';APP_META.lastUpdate='2026-11-05';
APP_META.notes='الإصدار 79 — الاستقرار والثبات والاحترافية: نُزع زر «نسخ رابط البريد» من شاشة رمز التحقق في الموقع والتطبيق دون أي مساس بحقل الرمز ولا بخدمة التحقق، تباين دقيق للوضعين الداكن والفاتح فلا تختفي أي كلمة بعد اليوم، نافذة التطبيق نظيفة بخانتَي المشاركة والتنزيل فقط بلا شرح، شريط سفلي واحد سليم والزر العائم عُلِّي فوق الشريط فانتهت «الطبقتان»، ولوحة الإدارة مرتبة بترتيب ثابت احترافي مع بطاقات موحدة.';
try{APP_META.changelog.unshift({ver:'79.0',date:'2026-11-05',notes:'نزع زر نسخ رابط البريد من شاشة الرمز + تباين الوضعين + نافذة التطبيق بلا شرح + شريط واحد وزر عائم غير متراكب + لوحة إدارة مرتبة.'})}catch(e9){}
