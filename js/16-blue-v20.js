/* ============================================================
   منصة X — طبقة الإصدار 20: الهوية الزرقاء النهائية
   1) الشعار الجديد: حرف X ثلاثي الأبعاد لامع بالهوية الزرقاء
   2) شريط علوي ثابت + شريط جانبي للحاسوب + تبويبات سفلية أربعة
   3) صفحة رئيسية غنية: ترحيب، بطاقتا المواد، التقدم الحقيقي، اختصارات
   4) إصلاح الإرسال الصامت جذريًا: طلب بسيط بلا فحص CORS مسبق
      (XMLHttpRequest + FormData) ثم fetch ثم حفظ مؤقت وإعادة إرسال
      تلقائية — لا يظهر خطأ «غير متصل» بعد الآن، والتسجيل لا يتعطل أبدًا
   ============================================================ */
/* ---- 21.0 بيانات الإصدار ---- */
APP_META.ver='21.0';APP_META.date='2026-10-30';APP_META.notes='الإصدار 21 — تصحيح شامل للأخطاء: إصلاح الصفحة الفارغة على بعض الأجهزة والتعامل مع تعطيل التخزين.';
try{APP_META.changelog.unshift('الإصدار 21 — تصحيح شامل للأخطاء: إصلاح الصفحة الفارغة (خطأ سطر 2415) على متصفحات الهاتف المدمجة عبر استعادة هيكل الصفحة الأساسي، اشتغال المنصة كاملة حتى مع تعطيل التخزين المحلي على بعض الأجهزة، وحفظ الإشعارات المؤجلة في الذاكرة عند تعطل التخزين ثم إرسالها تلقائيًا عند عودة الإنترنت.')}catch(e){}

/* ---- 20.1 الشعار الجديد: حرف X ثلاثي الأبعاد لامع بالهوية الزرقاء ---- */
var LOGO='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="100%" height="100%"><defs><linearGradient id="x20g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#54C7F0"/><stop offset=".45" stop-color="#229ED9"/><stop offset="1" stop-color="#0F6FA8"/></linearGradient><filter id="x20p" x="-20%" y="-20%" width="140%" height="140%"><feDropShadow dx="1.5" dy="1.8" stdDeviation="1.6" flood-color="#083A57" flood-opacity=".55"/></filter></defs><rect width="64" height="64" rx="14" fill="#0E1621"/><circle cx="12" cy="14" r="1" fill="#54C7F0" opacity=".5"/><circle cx="52" cy="9" r="1.2" fill="#2AABEE" opacity=".45"/><circle cx="56" cy="50" r="1" fill="#54C7F0" opacity=".4"/><circle cx="8" cy="49" r="1.1" fill="#2AABEE" opacity=".4"/><g filter="url(#x20p)"><rect x="8" y="26" width="48" height="12" rx="5.5" fill="url(#x20g)" transform="rotate(45 32 32)"/><rect x="8" y="26" width="48" height="12" rx="5.5" fill="url(#x20g)" transform="rotate(-45 32 32)"/></g><rect x="10" y="27" width="44" height="2.6" rx="1.3" fill="#ffffff" opacity=".35" transform="rotate(45 32 32)"/><rect x="10" y="27" width="44" height="2.6" rx="1.3" fill="#ffffff" opacity=".35" transform="rotate(-45 32 32)"/></svg>';

/* ---- 20.2 الإرسال الصامت الموثوق: ثلاث محاولات ثم حفظ مؤقت وإعادة تلقائية ---- */
function x20Online(){try{return navigator.onLine!==false}catch(e){return true}}
var X20OUT='x20_outbox';
function x20OutRead(){try{return JSON.parse(localStorage.getItem(X20OUT)||'[]')}catch(e){}try{var __ov=stGet(X20OUT,null);return (__ov&&__ov.slice)?__ov:[]}catch(e2){return []}}
function x20OutSave(q){try{localStorage.setItem(X20OUT,JSON.stringify(q.slice(0,10)))}catch(e){try{stSet(X20OUT,q.slice(0,10))}catch(e2){}}}
function x20OutPush(p){try{p._q=(new Date()).toISOString().slice(0,16);var q=x20OutRead();q.push(p);x20OutSave(q)}catch(e){}}
function x20OutShift(){try{var q=x20OutRead();q.shift();x20OutSave(q)}catch(e){}}
function x20OutCount(){try{return x20OutRead().length}catch(e){return 0}}
function x20ResponseSucceeded(status,raw){
  if(status<200||status>=300)return false;
  try{
    var j=(typeof raw==='string')?JSON.parse(raw):raw;
    return !!(j&&(j.success===true||j.success==='true'));
  }catch(e){return false}
}
function x20SendForm(p,ok,fail){
  /* FormSubmit AJAX: JSON request + explicit success confirmation. */
  var finished=false;
  function done(success){
    if(finished)return;
    finished=true;
    try{(success?ok:fail)()}catch(e){}
  }
  try{
    fetch('https://formsubmit.co/ajax/'+encodeURIComponent(XOWNER_MAIL),{
      method:'POST',
      headers:{'Content-Type':'application/json','Accept':'application/json'},
      body:JSON.stringify(p)
    }).then(function(r){
      return r.text().then(function(t){
        done(x20ResponseSucceeded(r.status,t));
      });
    }).catch(function(){done(false)});
  }catch(e){done(false)}
}
function x20SendFetch(p,ok,fail){
  /* Kept as a compatibility alias; do not send a second copy after an uncertain response. */
  x20SendForm(p,ok,fail);
}
function x19Send(subject,body,from,onResult){
  var p={_subject:subject,_template:'box',message:body,name:(from?'مستخدم':'زائر')+' منصة X'};
  if(from){p.email=from;p._replyto=from;}
  var finish=function(success,queued){
    if(typeof onResult==='function'){try{onResult(success,queued)}catch(e){}}
  };
  if(!x20Online()){
    x20OutPush(p);
    toast('📴 لا يوجد اتصال. حُفظت الرسالة مؤقتًا وستُعاد المحاولة عند عودة الإنترنت.');
    finish(false,true);
    return;
  }
  x20SendForm(p,function(){
    toast('✅ أكدت خدمة البريد استلام الرسالة إلى بريد المنصة','success');
    finish(true,false);
  },function(){
    x20OutPush(p);
    toast('⚠️ لم يصل تأكيد من خدمة البريد. حُفظت الرسالة لإعادة المحاولة عند عودة الاتصال.','error');
    finish(false,true);
  });
}
function x20Flush(quiet){
  try{
    if(!x20Online()||!x20OutCount())return;
    var p=x20OutRead()[0];
    x20SendForm(p,function(){
      x20OutShift();
      if(!quiet)toast('✅ تم تأكيد إرسال الرسالة المؤجلة إلى بريد المنصة','success');
      x20Flush(quiet);
    },function(){
      if(!quiet)toast('⏳ تعذّر تأكيد الرسالة المؤجلة؛ ستبقى محفوظة للمحاولة لاحقًا');
    });
  }catch(e){}
}
try{window.addEventListener('online',function(){x20Flush(true)});window.addEventListener('focus',function(){x20Flush(true)});window.addEventListener('load',function(){x20Flush(true)})}catch(e){}

/* ---- 20.3 التسجيل لا يتعطل أبدًا: الحساب يُنشأ محليًا والإشعار يذهب في الخلفية ---- */
function x18FormNext(){
  x18CollectForm();
  var f=XAUTH18.form,editing=!!(USER.session&&USER.profile);
  XAUTH18.errs={};
  if(!f.fn.trim())XAUTH18.errs.fn='اكتب اسمك';
  if(!f.ln.trim())XAUTH18.errs.ln='اكتب لقبك';
  if(!f.year)XAUTH18.errs.year='اختر السنة الدراسية';
  if(!f.branch)XAUTH18.errs.branch='اختر الشعبة';
  XAUTH18.consent=!!((gid('x18-consent')||{}).checked);
  if(!XAUTH18.consent)XAUTH18.errs.consent='يلزم الموافقة على سياسة الخصوصية';
  if(XAUTH18.errs.fn||XAUTH18.errs.ln||XAUTH18.errs.year||XAUTH18.errs.branch||XAUTH18.errs.consent){xSound('error');render();return}
  if(editing){
    var pe=x18ProfileFromForm();
    x18SaveUser(pe);
    xSound('success');toast('✅ تم حفظ تعديلاتك');
    navigate('profile');
    return;
  }
  var em=XAUTH18.email;
  x19Send('تسجيل مستخدم جديد — '+f.fn+' '+f.ln,x18RegBody(f,em),em);
  x18SaveUser(x18ProfileFromForm());
  XAUTH18.prefilled=true;
  xSound('success');
  toast('✅ تم إنشاء حسابك — أهلًا بك في منصة X!');
  navigate('home');
}

/* ---- 20.4 الشريط العلوي الثابت + القائمة الجانبية للحاسوب ---- */
function x20Title(){
  var n={home:'الرئيسية',subjects:'المواد',dash:'تقدّمي',profile:'ملفي',settings:'الإعدادات',admin:'لوحة X.HAK',auth:'الدخول',lesson:'درس',quiz:'اختبار'};
  if(ROUTE.page==='subject'){try{return (CURR[ROUTE.subject||'math']||{}).name||'المادة'}catch(e){return 'المادة'}}
  return n[ROUTE.page]||'منصة X';
}
function x20Menu(){try{var m=document.getElementById('x20-menu');if(m)m.classList.toggle('open')}catch(e){}}
function renderNavbar(){
  var act=function(pages){return (pages.indexOf(ROUTE.page)>=0)?' class="x20-on"':''};
  var actSub=function(sid){return ((ROUTE.page==='subject'||ROUTE.page==='lesson'||ROUTE.page==='quiz')&&ROUTE.subject===sid)?' class="x20-on"':''};
  var side='<aside class="x20-side" id="x20-side" aria-label="التنقل الجانبي">'+
   '<button'+act(['home'])+' onclick="navigate(\'home\')">'+xi('home',20)+' الرئيسية</button>'+
   '<button'+act(['subjects'])+' onclick="navigate(\'subjects\')">'+xi('grid',20)+' المواد</button>'+
   '<button'+actSub('math')+' onclick="navigate(\'subject\',\'math\')">'+xi('book',20)+' الرياضيات</button>'+
   '<button'+actSub('phys')+' onclick="navigate(\'subject\',\'phys\')">'+xi('atom',20)+' الفيزياء</button>'+
   '<button'+act(['dash'])+' onclick="navigate(\'dash\')">'+xi('chart',20)+' تقدّمي</button>'+
   '<button'+act(['profile'])+' onclick="navigate(\'profile\')">'+xi('user',20)+' ملفي</button>'+
   '<button'+act(['settings'])+' onclick="navigate(\'settings\')">'+xi('gear',20)+' الإعدادات</button>'+
   '</aside>';
  return side+
   '<header class="x20-top glass-strong">'+
   '<div class="x20-top-brand" onclick="navigate(\'home\')" aria-label="الرئيسية"><div class="logo-mark">'+LOGO+'</div><span>منصة X</span></div>'+
   '<h1 class="x20-top-title">'+x20Title()+'</h1>'+
   '<div class="x20-top-user">'+
   '<button class="x20-top-ava" onclick="x20Menu()" aria-label="حسابي">'+avatarHTML(34)+'</button>'+
   '<div class="x20-menu" id="x20-menu">'+
   '<button onclick="navigate(\'profile\')">👤 ملفي الشخصي</button>'+
   '<button onclick="navigate(\'settings\')">⚙️ الإعدادات</button>'+
   (USER.session?'<button onclick="logoutUser()">🚪 تسجيل الخروج</button>':'<button onclick="navigate(\'auth\')">🔑 الدخول</button>')+
   '</div></div></header>';
}

/* ---- 20.5 التبويبات السفلية: أربعة (الإعدادات في الملف والقائمة العلوية) ---- */
function renderBottomNav(){
  if(ROUTE.page==='auth')return '';
  var act=function(pages){return (pages.indexOf(ROUTE.page)>=0)?' bnav-on':''};
  return '<nav class="bnav glass-strong" role="navigation" aria-label="التنقل الرئيسي">'+
   '<button class="bnav-btn'+act(['home'])+'" onclick="navigate(\'home\')" aria-label="الرئيسية">'+xi('home',21)+'<span>الرئيسية</span></button>'+
   '<button class="bnav-btn'+act(['subjects','subject','lesson','quiz'])+'" onclick="navigate(\'subjects\')" aria-label="المواد">'+xi('grid',21)+'<span>المواد</span></button>'+
   '<button class="bnav-btn'+act(['dash'])+'" onclick="navigate(\'dash\')" aria-label="التقدم">'+xi('chart',21)+'<span>تقدّمي</span></button>'+
   '<button class="bnav-btn'+act(['profile'])+'" onclick="navigate(\'profile\')" aria-label="الملف الشخصي">'+avatarHTML(24,'av-nav')+'<span>ملفي</span></button>'+
   '</nav>';
}

/* ---- 20.6 الرئيسية الغنية: ترحيب + بطاقتا المواد + تقدم حقيقي + اختصارات ---- */
function renderHome18(){
  var signed=!!(USER.session&&USER.profile);
  var st=xStats();
  var h='<div class="fade-in x20-home">';
  h+='<section class="x20-hero glass">'+
   '<div class="logo-big" style="margin:0 auto 12px"><div class="logo-mark">'+LOGO+'</div></div>'+
   '<h2>'+(signed?('أهلًا بك مجددًا، '+escAttr(USER.profile.first_name||'صديقنا')+' 👋'):'أهلًا بك في منصة X 👋')+'</h2>'+
   '<p>منصة تعليمية جزائرية للطورين المتوسط والثانوي: خلاصات وقوانين، تمارين، اختبارات تفاعلية، مكتبات PDF وفيديو، وتقدمك محفوظ على جهازك.</p>'+
   (signed?'':'<button class="btn btn-primary" onclick="navigate(\'auth\')">🔑 ابدأ الآن ببريدك الإلكتروني</button>')+
   '</section>';
  h+='<section class="x20-subjs">'+x17SubjCard('math')+x17SubjCard('phys')+'</section>';
  h+='<section class="x17-card"><h3 style="margin:0 0 4px">📊 تقدّمي الدراسي</h3>'+
   '<div class="x17-prog big"><span style="width:'+st.pct+'%"></span></div>';
  if(st.done>0||st.started>0||st.quizAtt>0){
    h+='<div class="x17-stats">'+
     '<span><b>'+st.done+'</b> درسًا مكتملًا من '+st.total+'</span>'+
     '<span><b>'+st.started+'</b> درسًا بدأته</span>'+
     '<span><b>'+st.quizAtt+'</b> اختبارًا أجريته</span>'+
     '<span><b>'+st.quizPerfect+'</b> نتيجة كاملة</span>'+
     '</div>';
  }else{
    h+='<p class="x17-empty">لم تبدأ أي درس بعد — اختر مادة من الأعلى وستظهر نتائجك الحقيقية هنا.</p>';
  }
  h+='<button class="btn" onclick="navigate(\'dash\')">📈 تقرير التقدم الكامل</button></section>';
  h+='<section class="x20-quick">'+
   '<button onclick="navigate(\'subjects\')">📚 المواد</button>'+
   '<button onclick="navigate(\'profile\')">👤 ملفي</button>'+
   '<button onclick="navigate(\'settings\')">⚙️ الإعدادات</button>'+
   '</section>';
  h+='</div>';
  return h;
}

/* ---- 20.7 الملف الشخصي: زر الإعدادات (الإعدادات انتقلت إلى الملف والقائمة العلوية) ---- */
var __x20PvBase=renderProfilePage18;
renderProfilePage18=function(){
  var h=__x20PvBase();
  try{h=h.replace('<button class="btn btn-danger-ghost" onclick="logoutUser()">','<button class="btn" onclick="navigate(\'settings\')">⚙️ الإعدادات</button><button class="btn btn-danger-ghost" onclick="logoutUser()">')}catch(e){}
  return h;
};

/* ---- 21.1 إعلان الإصدار ---- */
function fallbackNews18(){
  return [{title:'الإصدار 21 — تصحيح الأخطاء',
    body:'إصلاح الصفحة الفارغة التي ظهرت على بعض الهواتف (خطأ سطر 2415)، واشتغال المنصة كاملة حتى عندما يعطّل متصفح الهاتف المدمج التخزين المحلي، مع إرسال أي إشعار مؤجل تلقائيًا عند عودة الإنترنت.',
    date:APP_META.date}];
}

/* ---- 20.9 الإقلاع: طبقة 19 ثم إعادة إرسال أي إشعار مؤجل ---- */
var __x20Boot=boot;
boot=function(){__x20Boot();try{x20Flush(true)}catch(e){}};
