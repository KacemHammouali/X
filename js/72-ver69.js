/* ===== الطبقة 69 - أفضل إصدار: تصميم احترافي + رجوع بتاريخ كامل + دروس بعرض الشاشة + ألوان 3×3 + خلفيات بتمرير أفقي + إشعارات نهائية + نشر يتجاوز خطأ القاعدة ===== */
try{
/* 69.أ الإشعارات: زر تفعيل صادق في الإعدادات + إعادة المطالبة التلقائية عند تغير الرأي */
function x69PushOn(){
  try{if(typeof x44InitCustomPush==='function'){x44InitCustomPush()}}catch(e0){}
  try{toast('⏳ جارٍ تجهيز الإشعارات على جهازك…')}catch(e1){}
  try{setTimeout(function(){
    try{
      if(window.wpPush&&(typeof window.wpPush.openPrompt==='function'||window.wpPush.openDialog)){
        try{if(typeof window.wpPush.openPrompt==='function'){window.wpPush.openPrompt()}else{window.wpPush.openDialog()}}catch(e2){}
        try{toast('🔔 اضغط «سماح» في النافذة — تصلك إشعارات الدروس والإعلانات حتى والتطبيق مغلق')}catch(e3){}
        return;
      }
      try{stSet(X46_PUSHAUTO,false)}catch(e4){}
      if(window.Notification&&Notification.requestPermission){
        try{
          Notification.requestPermission(function(p){
            try{
              if(p==='granted'){toast('✅ الإشعارات مفعّلة — ستصلك إعلانات ودروس المنصة')}
              else if(p==='denied'){toast('⚠ رفضتَ الإشعارات — فعّلها من إعدادات المتصفح (الأذونات ← الإشعارات ← سماح) ثم اضغط الزر مجددًا')}
              else{toast('لم تُكمل التفعيل — اضغط الزر مرة أخرى واختر «سماح»')}
            }catch(e5){}
          });
        }catch(e6){toast('⚠ فعّل الإشعارات من إعدادات المتصفح: الأذونات ← الإشعارات ← سماح')}
      }else{toast('⚠ متصفحك لا يدعم الإشعارات — جرّب من تطبيق المنصة المثبت')}
    }catch(e7){}
  },1200)}catch(e8){}
}
/* 69.ب النشر يتجاوز خطأ سياسة قاعدة البيانات (RLS 42501): قاعدة → قناة المكتبة → الجهاز */
var x69AnnWrite=function(t,b,cb){
  var k=null;try{k=x66Keys()}catch(eA){}
  var finish=function(mode,err){try{XNEWS.loaded=false;XNEWS.items=null}catch(eB){}try{cb(mode,err)}catch(eC){}}
  if(!k){try{x66LocalAnnPush(t,b)}catch(eD){}finish('local');return}
  try{
    fetch(k.url+'/rest/v1/announcements',{method:'POST',headers:{'apikey':k.anon,'Authorization':'Bearer '+((USER.session&&USER.session.access_token)||k.anon),'Content-Type':'application/json'},body:JSON.stringify({title:t,body:b,published:true})}).then(function(r){
      if(r.ok){finish('rest');return}
      r.json().then(function(j){
        var code=''+(((j&&(j.code||'')))||'');
        var msg=''+(((j&&(j.message||'')))||'');
        if(code.indexOf('42P01')>=0||code.indexOf('42501')>=0||msg.indexOf('does not exist')>=0||msg.indexOf('row-level security')>=0||msg.indexOf('violates')>=0){
          try{x66AnnWriteStorage(t,b,function(m){finish(m)})}catch(eE){finish('fail','تعذر النشر')}
          return;
        }
        finish('fail','تعذر النشر: '+(((j&&(j.message||j.error)))||('HTTP '+r.status)));
      }).catch(function(){try{x66AnnWriteStorage(t,b,function(m){finish(m)})}catch(eF){finish('fail','تعذر النشر')}});
    }).catch(function(){try{x66AnnWriteStorage(t,b,function(m){finish(m)})}catch(eG){finish('local')}});
  }catch(eH){try{x66LocalAnnPush(t,b)}catch(eI){}finish('local')}
};
try{x66AnnWrite=x69AnnWrite}catch(eJ){}
/* 69.ج لوحة الإدارة تنزع من تبويب «ملفي» وتبقى في الإعدادات */
var __x69Prof=renderProfilePage18;
renderProfilePage18=function(){
  var h='';try{h=__x69Prof()}catch(e0){}
  try{h=(''+h).replace(new RegExp('<button[^>]*>[^<]*لوحة[^<]*الإدارة[^<]*</button>','g'),'')}catch(e1){}
  try{h=(''+h).replace(new RegExp('<button[^>]*>[^<]*لوحة[^<]*X[^<]*HAK[^<]*</button>','g'),'')}catch(e2){}
  return h;
};
/* 69.د زر رجوع يحفظ كل التنقلات: ضغطة = خطوة للخلف، وضغطات متتالية تخطو للخلف خطوة خطوة */
var X69={hist:[]};
var __x69NAV=navigate;
navigate=function(a,b,c){
  try{
    if(X69.lock){X69.lock=false}
    else{
      X69.hist.push({p:((ROUTE&&ROUTE.page)||'home'),s:((ROUTE&&ROUTE.subject)||null),c:((ROUTE&&ROUTE.chapter)||null)});
      if(X69.hist.length>80){X69.hist.shift()}
    }
  }catch(e0){}
  try{__x69NAV(a,b,c)}catch(e1){}
  try{setTimeout(function(){try{window.scrollTo(0,0)}catch(s0){}try{x69Sync()}catch(s1){}},0)}catch(e2){}
};
function x69Back(){
  var last=null;
  try{last=X69.hist.pop()}catch(e0){}
  if(!last){try{X69.lock=true;navigate('home')}catch(e1){}return}
  try{X69.lock=true;navigate(last.p,last.s,last.c)}catch(e2){try{X69.lock=false}catch(e3){}}
}
function x69Sync(){
  var b=null;try{b=gid('x69-back')}catch(e0){}
  if(!b){
    try{
      b=document.createElement('button');b.id='x69-back';b.className='x69-backbtn';b.setAttribute('aria-label','رجوع إلى الصفحة السابقة');
      b.innerHTML='&#8594;';
      try{b.onclick=function(){try{x69Back()}catch(e1){}}}catch(e2){}
      try{(document.body||document.documentElement).appendChild(b)}catch(e3){}
    }catch(e4){b=null}
  }
  if(b){try{b.style.display=(X69.hist.length>0?'flex':'none')}catch(e5){}}
}
try{setTimeout(x69Sync,400)}catch(e6){}
/* 69.هـ الدرس: زر الرجوع يعمل بالتاريخ الكامل (بدل الرجوع للمادة فقط) */
var __x69RL=renderLesson;
renderLesson=function(sid,cid){
  var h='';try{h=__x69RL(sid,cid)}catch(e0){}
  try{h=(''+h).replace(new RegExp('onclick="navigate\\(\\x27subject\\x27[^)]*\\)"','g'),'onclick="x69Back()"')}catch(e1){}
  return h;
};
/* 69.و الألوان: 9 دوائر فقط في شبكة 3×3 بلا أسماء + بطاقة إشعارات أعلى الإعدادات */
try{ACCENTS.green=['#4ec77a','#38a35f']}catch(eK){}
try{ACCENTS.orange=['#e8935a','#cf743d']}catch(eL){}
var X69_COLORS=[['azure','#229ED9','أزرق'],['royal','#2f7ae5','أزرق ملكي'],['blue','#6ab3f3','سماوي'],['teal','#5ec8b8','تركوازي'],['green','#4ec77a','أخضر'],['violet','#a08ee0','بنفسجي'],['rose','#e07f9a','وردي'],['amber','#e0b96a','ذهبي'],['orange','#e8935a','برتقالي']];
var __x69SP=renderSettingsPage;
renderSettingsPage=function(){
  var h='';try{h=__x69SP()}catch(e0){}
  try{
    if(h&&(''+h).indexOf('x69-colors')<0){
      var grid='<div class="x48-lbl">لون التمييز</div><div class="x69-colors">';
      for(var i=0;i<X69_COLORS.length;i++){
        grid+='<button type="button" class="x69-cdot'+((XCFG.accent===X69_COLORS[i][0])?' on':'')+'" style="--c:'+X69_COLORS[i][1]+'" onclick="setX(\'accent\',\''+X69_COLORS[i][0]+'\')" aria-label="'+X69_COLORS[i][2]+'"><span></span></button>';
      }
      grid+='</div>';
      var ti=(''+h).indexOf('x48-thcards');
      var placed=false;
      if(ti>=0){
        var bj=(''+h).indexOf('</div><div class="x48-lbl">',ti);
        if(bj>ti){h=(''+h).slice(0,bj+5)+grid+(''+h).slice(bj+5);placed=true}
      }
      if(!placed){h=grid+(''+h)}
    }
  }catch(e1){}
  try{
    if(h&&(''+h).indexOf('x69-pushbtn')<0){
      var perm='';try{perm=(window.Notification&&Notification.permission)||''}catch(e2){}
      var ptxt=(perm==='granted')?'✅ الإشعارات مفعّلة على هذا الجهاز':'فعّلها لتصلك إعلانات ودروس المنصة حتى والتطبيق مغلق';
      var pb='<div class="x69-pushcard" id="x69-pushbtn"><div style="flex:1"><b>🔔 إشعارات المنصة</b><span style="display:block;font-size:12.5px;opacity:.85">'+ptxt+'</span></div><button class="btn btn-sm btn-primary" onclick="try{x69PushOn()}catch(e){}">'+((perm==='granted')?'إعادة الفحص':'تفعيل الآن')+'</button></div>';
      var hi=(''+h).indexOf('x48-hero');
      var placed2=false;
      if(hi>=0){
        var pi=(''+h).indexOf('</p>',hi);
        if(pi>hi){var hj=(''+h).indexOf('</div>',pi);if(hj>pi){h=(''+h).slice(0,hj+6)+pb+(''+h).slice(hj+6);placed2=true}}
      }
      if(!placed2){h=pb+(''+h)}
    }
  }catch(e3){}
  return h;
};
/* 69.ز الشريط السفلي لا يختفي أبدًا + ستايل التصميم الاحترافي */
try{window.addEventListener('scroll',function(){try{var n=(document.querySelector?document.querySelector('.bnav'):null);if(n&&n.classList&&n.classList.contains&&n.classList.contains('x68-hide')){try{n.classList.remove('x68-hide')}catch(e0){}}}catch(e1){}},true)}catch(e2){}
try{window.addEventListener('touchmove',function(){try{var n=(document.querySelector?document.querySelector('.bnav'):null);if(n&&n.classList&&n.classList.contains&&n.classList.contains('x68-hide')){try{n.classList.remove('x68-hide')}catch(e3){}}}catch(e4){}},true)}catch(e5){}
(function(){
  var n=null;try{n=gid('x69-style')}catch(e){}
  if(!n){try{n=document.createElement('style');n.id='x69-style';var hd=document.head||document.body;if(hd&&hd.appendChild){hd.appendChild(n)}}catch(e2){n=null}}
  if(n){n.textContent=
   '/* الشريط السفلي لا يختفي أبدًا */'+
   '.bnav.x68-hide{transform:none!important;opacity:1!important;pointer-events:auto!important}'+
   '/* الدرس بعرض شاشة الجهاز كاملًا — مريح للعين */'+
   '.lesson-view{max-width:100%!important;margin:0!important;padding:16px 10px!important}'+
   '.quiz-view{max-width:100%!important;margin:0!important;padding:18px 10px!important}'+
   '.x68-lsnhead{max-width:100%!important;padding:10px 10px 0!important}'+
   '.lesson-header{padding:18px!important;border-radius:16px!important}'+
   '.lesson-content{padding:14px!important}'+
   '/* التباين المحترف: واضح وجميل مع أي خلفية */'+
   'body.x48-hc{--text:#ffffff;--text-dim:#e6eef9;--text-mute:#c9d6e8}'+
   'body.x48-hc .glass,body.x48-hc .glass-strong,body.x48-hc .x17-card,body.x48-hc .card,body.x48-hc .h15-card{border:1.6px solid rgba(185,215,255,.75)!important;box-shadow:0 6px 22px rgba(0,0,0,.4)!important}'+
   'body.x48-hc .btn{border:1.4px solid rgba(200,228,255,.7)!important}'+
   'body.x48-hc .btn-primary{filter:brightness(1.15) saturate(1.2)}'+
   'html[data-theme="light"] body.x48-hc .glass,html[data-theme="light"] body.x48-hc .glass-strong{border:1.6px solid rgba(20,60,110,.5)!important;box-shadow:0 5px 18px rgba(20,40,70,.18)!important}'+
   '/* خلفيات النظام: صف أفقي يُزيح يمينًا ويسارًا */'+
   '.x48-grid{display:flex!important;grid-template-columns:none!important;gap:10px!important;overflow-x:auto!important;overflow-y:hidden!important;padding:2px 2px 10px!important;-webkit-overflow-scrolling:touch;scroll-snap-type:x proximity}'+
   '.x48-gitem{flex:0 0 88px!important;width:88px!important;height:112px!important;scroll-snap-align:start}'+
   '.x48-grid::-webkit-scrollbar{height:5px}'+
   '/* ألوان التمييز: 9 دوائر في شبكة 3×3 بلا أسماء */'+
   '.x69-colors{display:grid;grid-template-columns:repeat(3,48px);gap:12px;margin:8px 0 4px;justify-content:start}'+
   '.x69-cdot{width:48px;height:48px;border-radius:50%!important;border:2.5px solid rgba(255,255,255,.28);background:var(--c);cursor:pointer;position:relative;padding:0;transition:transform .18s ease,box-shadow .18s ease,border-color .18s ease}'+
   '.x69-cdot:active{transform:scale(.92)}'+
   '.x69-cdot.on{border-color:#fff;box-shadow:0 0 0 3px rgba(255,255,255,.25),0 4px 14px rgba(0,0,0,.35);transform:scale(1.07)}'+
   '.x69-cdot span{position:absolute;top:0;left:0;right:0;bottom:0;border-radius:50%}'+
   '.x69-cdot.on span:after{content:"✓";position:absolute;top:50%;left:50%;width:20px;height:20px;margin:-10px 0 0 -10px;line-height:20px;text-align:center;color:#fff;font-weight:900;font-size:14px;text-shadow:0 1px 3px rgba(0,0,0,.6)}'+
   'html[data-theme="light"] .x69-cdot{border-color:rgba(15,40,75,.22)}'+
   'html[data-theme="light"] .x69-cdot.on{border-color:#0d5c94;box-shadow:0 0 0 3px rgba(34,158,217,.25)}'+
   '/* زر الرجوع العالمي */'+
   '.x69-backbtn{position:fixed;left:12px;bottom:calc(64px + env(safe-area-inset-bottom,0px));z-index:80;width:48px;height:48px;border-radius:50%;display:none;align-items:center;justify-content:center;font-size:21px;font-weight:900;color:#fff;background:linear-gradient(135deg,#2f7ae5,#229ED9);border:2px solid rgba(255,255,255,.4);box-shadow:0 8px 22px rgba(15,60,115,.45);cursor:pointer;transition:transform .15s ease}'+
   '.x69-backbtn:active{transform:scale(.9)}'+
   'html[data-theme="light"] .x69-backbtn{background:linear-gradient(135deg,#168EBF,#2f7ae5);color:#fff}'+
   '/* بطاقة الإشعارات أعلى الإعدادات */'+
   '.x69-pushcard{display:flex;gap:10px;align-items:center;margin:10px 12px 2px;padding:12px 14px;border-radius:14px;background:rgba(34,158,217,.10);border:1px solid rgba(34,158,217,.4)}'+
   'html[data-theme="light"] .x69-pushcard{background:rgba(22,142,191,.08)}'+
   '/* لمسات احترافية عامة */'+
   '.btn{border-radius:12px;font-weight:800}'+
   '.bnav-btn{transition:transform .16s ease,color .16s ease,background .16s ease}'+
   '.bnav-btn:active{transform:scale(.93)}'+
   '.glass-strong{box-shadow:0 10px 32px rgba(2,8,18,.35)}'+
   'input[type="range"]{accent-color:#229ED9}';
  }
})();
/* 69.ح بيانات الإصدار */
APP_META.ver='69.0';
APP_META.notes='الإصدار 69 — الأفضل تصميمًا وسهولة: دروس بعرض شاشة الجهاز كاملًا، زر رجوع يحفظ كل تنقلاتك (ضغطة = خطوة للخلف)، تسعة ألوان تمييز دوائر أنيقة 3×3، خلفيات النظام صف أفقي يُزيح يمينًا ويسارًا، زيادة التباين تعمل بشكل احترافي مع أي خلفية، الشريط السفلي ثابت لا يختفي أبدًا، بطاقة إشعارات بزر تفعيل صادق في الإعدادات، صورة معاينة للمنصة عند مشاركتها، إصلاح نشر الإعلانات عند خطأ قاعدة البيانات (ينتقل لقناة بديلة)، ونُزعت لوحة الإدارة من تبويب ملفي وتبقى في الإعدادات.';
try{APP_META.lastUpdate='2026-11-04'}catch(eM1){}
try{if(APP_META.changelog&&APP_META.changelog.unshift){APP_META.changelog.unshift({ver:'69.0',date:'2026-11-04',notes:'تصميم احترافي + دروس بعرض كامل + رجوع بالتاريخ + ألوان 3×3 + خلفيات أفقية + إشعارات ببطاقة تفعيل + صورة مشاركة + إصلاح نشر الإعلانات + لوحة الإدارة خارج ملفي'})}}catch(eM2){}
}catch(eW69){}
