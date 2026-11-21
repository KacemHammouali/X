'use strict';
/* ============================================================
   الطبقة 29 — الإصدار 29: النسخة العالمية
   1) نزع الشريط العلوي والجانبي — التنقل من التبويب السفلي فقط (5 تبويبات فيه الإعدادات)
   2) نزع بطاقات الإرسال التقنية من صفحة الإعدادات (الوارد/الحصص/الفحص) وإبقاء بطاقة الاتصال
   3) عدّ تنازلي حي (HH:MM:SS) للرسالة القادمة — يُحفظ على الجهاز ويصمد عبر التحديثات
   4) تثبيت التطبيق (PWA): بطاقة تثبيت + التقاط beforeinstallprompt
   ============================================================ */
/* ---- 29.1 نزع الشريط العلوي والجانبي ---- */
renderNavbar=function(){return ''};
/* ---- 29.2 التبويب السفلي: خمسة تبويبات (الإعدادات أصبحت تبويبًا أساسيًا) ---- */
renderBottomNav=function(){
  if(ROUTE.page==='auth')return '';
  var act=function(pages){return (pages.indexOf(ROUTE.page)>=0)?' bnav-on':''};
  return '<nav class="bnav glass-strong" role="navigation" aria-label="التنقل الرئيسي">'+
   '<button class="bnav-btn'+act(['home'])+'" onclick="navigate(\'home\')" aria-label="الرئيسية">'+xi('home',21)+'<span>الرئيسية</span></button>'+
   '<button class="bnav-btn'+act(['subjects','subject','lesson','quiz'])+'" onclick="navigate(\'subjects\')" aria-label="المواد">'+xi('grid',21)+'<span>المواد</span></button>'+
   '<button class="bnav-btn'+act(['dash'])+'" onclick="navigate(\'dash\')" aria-label="التقدم">'+xi('chart',21)+'<span>تقدّمي</span></button>'+
   '<button class="bnav-btn'+act(['profile'])+'" onclick="navigate(\'profile\')" aria-label="الملف الشخصي">'+avatarHTML(24,'av-nav')+'<span>ملفي</span></button>'+
   '<button class="bnav-btn'+act(['settings'])+'" onclick="navigate(\'settings\')" aria-label="الإعدادات">'+xi('gear',21)+'<span>الإعدادات</span></button>'+
   '</nav>';
};
/* ---- 29.3 نزع بطاقات الإرسال التقنية من صفحة الإعدادات (يبقى الاتصال بالإدارة) ---- */
x22OutHTML=function(){return ''};
x27HTML=function(){return ''};
x28ToolsHTML=function(){return ''};
/* ---- 29.4 العدّ التنازلي الحي: رسالة واحدة كل 12 ساعة مع مؤقت HH:MM:SS يصمد عبر التحديثات ---- */
var X29_CD=null;
function x29CountdownStop(){if(X29_CD){try{clearInterval(X29_CD)}catch(e){}X29_CD=null}}
function x29CountdownOpen(){
  var d=x27DayOK();
  if(d.ok){toast('✅ يمكنك إرسال رسالتك الآن — لا انتظار عليك','success');return}
  x29CountdownStop();
  xModal('⏳ رسالتك القادمة',
    '<div style="text-align:center;padding:4px 0 2px">'+
    '<p style="margin:0 0 12px;font-size:14px;line-height:1.9">وصلت رسالتك السابقة بنجاح — رسالة واحدة لكل زائر كل 12 ساعة، وتُفتح رسالتك القادمة بعد:</p>'+
    '<div id="x29-cd" dir="ltr" style="font-size:38px;font-weight:900;letter-spacing:2px;color:var(--x-accent);font-variant-numeric:tabular-nums">--:--:--</div>'+
    '<p style="margin:12px 0 0;font-size:12px;color:var(--text-mute);line-height:1.9">يُحفظ هذا العدّ على جهازك ويستمر من حيث توقف — حتى لو أعدت تحميل الصفحة أو صدر تحديث جديد للمنصة.</p>'+
    '</div>');
  X29_CD=setInterval(function(){
    var el=gid('x29-cd');
    if(!el){x29CountdownStop();return}
    var last=stGet(X27_DAY_KEY,0)||0;
    var rest=43200000-(Date.now()-last);
    if(rest<=0){
      el.textContent='00:00:00';
      x29CountdownStop();
      try{xCloseModal()}catch(e){}
      toast('✅ انتهى الانتظار — يمكنك إرسال رسالتك الآن','success');
      return;
    }
    var s=Math.floor(rest/1000);
    var hh=Math.floor(s/3600),mm2=Math.floor((s%3600)/60),ss=s%60;
    el.textContent=((hh<10?'0':'')+hh)+':'+((mm2<10?'0':'')+mm2)+':'+((ss<10?'0':'')+ss);
  },1000);
}
/* ---- 29.5 الإرسال: نفس مسار الطبقة 27 لكن المنع اليومي يفتح العدّ التنازلي الحي ---- */
x19Send=function(subject,body,from,onResult){
  var d=x27DayOK();
  if(!d.ok){
    x29CountdownOpen();
    if(typeof onResult==='function'){try{onResult(false,false)}catch(e){}}
    return;
  }
  var p={_subject:subject,_template:'box',message:body,name:(from?'مستخدم':'زائر')+' منصة X'};
  if(from){p.email=from;p._replyto=from}
  var handled=false;
  var finish=function(success,queued){if(typeof onResult==='function'){try{onResult(success,queued)}catch(e){}}};
  var fullBody=body+'\n\n'+((from)?('— من: '+from+'\n'):'')+'— أُرسلت من منصة X الإصدار '+APP_META.ver;
  function delivered(){
    handled=true;
    x27DayMark();
    toast('⚡ تم إرسال رسالتك بنجاح','success');
    finish(true,false);
  }
  function backupPath(){
    x24ComposerOpen(subject,fullBody,function(success,queued){
      if(handled){return}
      handled=true;
      if(success||queued){x27DayMark()}
      finish(success,queued);
    });
    x20SendForm(p,function(){
      if(handled){return}
      handled=true;
      x27DayMark();
      x24ComposerClose();
      toast('✅ أُرسلت رسالتك تلقائيًا إلى بريد المنصة — لم تحتج أي خطوة','success');
      finish(true,false);
    },function(needsActivation){if(needsActivation){x23TriggerActivation()}});
  }
  function tryChan(ch,onDead){
    var q=x27QuotaRaw();
    if(x27Left(q,ch)<=0){onDead();return}
    x27SendRaw(ch,subject,fullBody,from,function(ok,ex){
      if(handled){return}
      if(ok){x27Count(ch);delivered();return}
      if(ex){x27Kill(ch)}
      onDead();
    });
  }
  var c1=x27Pick(),c2=(c1==='w3f')?'ejs':'w3f';
  if(!c1){
    toast('ℹ️ اكتملت حصة الإرسال الفوري لهذا الشهر — فُتحت نافذة بريدك الشخصي: تصل مضمونة','info');
    backupPath();
    return;
  }
  tryChan(c1,function(){
    if(handled){return}
    tryChan(c2,function(){
      if(handled){return}
      toast('⚠️ تعثر الإرسال الفوري لحظيًا — فُتحت لك الطريقة الاحتياطية المضمونة','error');
      backupPath();
    });
  });
};
/* ---- 29.6 تثبيت التطبيق (PWA) ---- */
var X29_INSTALL=null;
try{
  window.addEventListener('beforeinstallprompt',function(e){X29_INSTALL=e;try{e.preventDefault()}catch(x){}});
}catch(e){}
function x29Install(){
  if(!X29_INSTALL){toast('ℹ️ لتثبيت التطبيق: افتح قائمة المتصفح (⋮) ثم «تثبيت التطبيق» أو «إضافة إلى الشاشة الرئيسية»','info');return}
  try{X29_INSTALL.prompt();X29_INSTALL=null}catch(e){toast('ℹ️ لتثبيت التطبيق: افتح قائمة المتصفح (⋮) ثم «تثبيت التطبيق»','info')}
}
function x29AppCard(){
  return '<section class="x17-card fade-in" id="x29-app-card" style="margin:16px auto 0">'+
   '<h3 style="margin:0 0 4px">📱 تطبيق منصة X</h3>'+
   '<p class="x17-mute" style="font-size:12.5px;margin:8px 0 10px">ثبّت المنصة كتطبيق حقيقي على هاتفك: أيقونة على الشاشة الرئيسية، ملء الشاشة، وتعمل بلا إنترنت — كأي تطبيق عالمي.</p>'+
   '<div class="btn-row" style="margin:8px 0 0"><button class="btn btn-sm btn-primary" onclick="x29Install()">📥 تثبيت التطبيق الآن</button></div>'+
   '</section>';
}
/* ---- 29.7 صفحة الإعدادات: نظيفة — بطاقة الاتصال + بطاقة التطبيق ---- */
var __x29SettingsBase=renderSettingsPage;
renderSettingsPage=function(){return __x29SettingsBase()+x29AppCard()};
/* ---- 29.8 بيان التطبيق الثابت: نبقي manifest.json الرسمي ولا نسمح باستبداله ---- */
var __x29MB=xBuildManifest;
xBuildManifest=function(){
  try{
    var l=document.querySelector('link[rel="manifest"]');
    if(l){
      var h=(l.getAttribute('href')||'');
      if(h==='manifest.json'||h==='./manifest.json'){return true}
    }
  }catch(e){}
  return __x29MB();
};
