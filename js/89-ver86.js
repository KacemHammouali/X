/* ===================== طبقة 86.0 — التصميم العالمي المتكامل: لمسات هندسية + نصوص نظيفة + سلاسة بلا اهتزاز ===================== */
/* 86.أ إيقاف العمل الدوري الزائد: مكنس طبقة 85 كان يدور كل 2.5 ثانية إلى الأبد — يبقى المكنس بعد كل عرض فقط (أخف وأسلس) */
var __x86RSweep=(typeof x85RawSweep==='function')?x85RawSweep:(function(){});
var __x86NSweep=(typeof x85NoteSweep==='function')?x85NoteSweep:(function(){});
try{x85RawSweep=function(){}}catch(eS0){}
try{x85NoteSweep=function(){}}catch(eS1){}
/* 86.ب مراقب DOM واحد فقط: يُوقف مراقب طبقة 79 غير المؤجل (كان يفحص كل طفرة فورًا) ويُحتفظ بعمله عبر مراقب 81 المؤجل وحده */
try{if(typeof x79mo!=='undefined'&&x79mo&&x79mo.disconnect){x79mo.disconnect()}}catch(eO0){}
var __x86SP=(typeof x80SyncPush==='function')?x80SyncPush:(function(){});
try{
x80SyncPush=function(){try{__x86SP()}catch(e0){}try{if(typeof x79StripMailBtn==='function'){x79StripMailBtn()}}catch(e1){}};
}catch(eO1){}
/* 86.ج نظام التصميم العالمي: خط المنصة + شريط سفلي بمؤشر مثلثي + بطاقات موحدة + لمسات هندسية ثلاثية + انتقالات transform/opacity فقط */
function x86Style(){
  try{
    var el=document.getElementById('x86-style');
    if(!el){el=document.createElement('style');el.id='x86-style';(document.head||document.documentElement).appendChild(el)}
    el.textContent=
     'body{font-family:Tajawal,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,sans-serif!important;-webkit-font-smoothing:antialiased}'+
     'img{-webkit-user-drag:none}'+
     '*{-webkit-tap-highlight-color:transparent!important}'+
     '@keyframes x86Fade{from{opacity:0}to{opacity:1}}'+
     '.fade-in{animation:x86Fade .24s!important}'+
     '@keyframes x86Enter{from{opacity:.35}to{opacity:1}}'+
     '#app.x86-enter{animation:x86Enter .26s}'+
     '.bnav{background:rgba(9,15,26,.88)!important;border-top:1px solid rgba(255,255,255,.06)!important;box-shadow:0 -10px 34px rgba(2,8,18,.35)!important}'+
     'html[data-theme="light"] .bnav{background:rgba(255,255,255,.94)!important;border-top-color:rgba(20,40,70,.06)!important;box-shadow:0 -10px 30px rgba(20,40,80,.10)!important}'+
     '.bnav-btn{position:relative;transition:transform .18s cubic-bezier(.22,.8,.26,.99),color .18s,background .18s!important}'+
     '.bnav-btn:active{transform:scale(.92)}'+
     '.bnav-btn.bnav-on{color:#35BDF2!important}'+
     '.bnav-btn.bnav-on:before{content:"";position:absolute;top:0;left:50%;margin-left:-5px;width:0;height:0;border-left:5px solid transparent;border-right:5px solid transparent;border-top:5px solid #35BDF2}'+
     'html[data-theme="light"] .bnav-btn.bnav-on:before{border-top-color:#168EBF}'+
     '.navbar{background:rgba(9,15,26,.74)!important;border:1px solid rgba(255,255,255,.05)!important;box-shadow:0 10px 30px rgba(2,8,18,.35)!important}'+
     'html[data-theme="light"] .navbar{background:rgba(255,255,255,.84)!important;border-color:rgba(20,40,70,.07)!important;box-shadow:0 10px 26px rgba(20,40,80,.10)!important}'+
     '.nav-link{transition:color .18s,background .18s,border-color .18s!important}'+
     '.lawcard,.definition,.note-box,.example,.exer,.warning-box,.summary-box,.method,.kp-box,.auth-card,.set-card,.info-card,.subject-card,.qcard,.results-card,.stat-card{border-radius:20px!important}'+
     '.lesson-header,.x54-authhero,.x51-hero,.x48-hero{position:relative;overflow:hidden}'+
     '.lesson-header:before,.x54-authhero:before,.x51-hero:before,.x48-hero:before{content:"";position:absolute;top:0;left:0;width:120px;height:120px;background:linear-gradient(135deg,rgba(53,189,242,.13),rgba(139,108,255,.03) 72%);clip-path:polygon(0 0,100% 0,0 100%);pointer-events:none}'+
     '.hero{position:relative;overflow:hidden}'+
     '.hero:before{content:"";position:absolute;bottom:0;left:0;width:150px;height:110px;background:linear-gradient(45deg,rgba(139,108,255,.10),transparent 70%);clip-path:polygon(0 100%,0 0,100% 100%);pointer-events:none}'+
     '.sec15{position:relative;padding-inline-start:16px!important}'+
     '.sec15:before{content:"";position:absolute;inset-inline-start:0;top:50%;margin-top:-5px;width:10px;height:10px;transform:rotate(45deg);border-radius:2px;background:linear-gradient(135deg,#35BDF2,#8B6CFF)}'+
     '.btn{border-radius:14px!important;font-weight:800!important;transition:transform .16s cubic-bezier(.22,.8,.26,.99),box-shadow .2s,background .2s,border-color .2s!important}'+
     '.btn:active{transform:scale(.955)!important}'+
     '@media(hover:hover){.btn:hover{transform:translateY(-1px)}.x51-row:hover,.x48-row:hover{background:rgba(53,189,242,.05)}}'+
     '.btn-primary{background:linear-gradient(135deg,#35BDF2 0%,#5A8BFF 55%,#8B6CFF 100%)!important;border:none!important;color:#fff!important;box-shadow:0 6px 18px rgba(64,140,255,.30)!important}'+
     '.btn-primary:active{box-shadow:0 3px 10px rgba(64,140,255,.28)!important}'+
     'html[data-theme="light"] .btn-primary{background:linear-gradient(135deg,#168EBF,#7657DB)!important;box-shadow:0 6px 16px rgba(35,125,200,.28)!important}'+
     '.inp,.fld input,.fld select,.xin{transition:border-color .18s,box-shadow .18s!important}'+
     '.inp:focus,.fld input:focus,.fld select:focus,.xin:focus{box-shadow:0 0 0 3px rgba(53,189,242,.15)!important}'+
     '.lawcard .lt .num{background:linear-gradient(135deg,rgba(53,189,242,.18),rgba(139,108,255,.14))!important;border-color:transparent!important;color:#9cf4ff!important}'+
     'html[data-theme="light"] .lawcard .lt .num{color:#168EBF!important}'+
     '.xmodal-card{border-radius:22px!important;box-shadow:0 30px 90px rgba(0,0,0,.5)!important}'+
     '.x54-cfm-bg{backdrop-filter:blur(8px)!important;-webkit-backdrop-filter:blur(8px)!important}'+
     '.toast{border-radius:14px!important;box-shadow:0 14px 40px rgba(0,0,0,.4)!important;font-weight:600!important}'+
     '#toasts{bottom:calc(84px + env(safe-area-inset-bottom,0px))!important}'+
     '.x51-row,.x48-row{transition:background .16s,transform .16s!important}'+
     '.x51-row:active,.x48-row:active{transform:scale(.985)!important}'+
     '.x51-go{color:#35BDF2!important}'+
     '.auth-card{border-radius:22px!important;box-shadow:0 18px 60px rgba(0,0,0,.32)!important}'+
     '.x54-authlogo{border-radius:26px!important;clip-path:polygon(0 0,100% 0,100% calc(100% - 24px),calc(100% - 24px) 100%,0 100%)}'+
     '.subject-icon{clip-path:polygon(0 0,100% 0,100% calc(100% - 26px),calc(100% - 26px) 100%,0 100%)}'+
     '#readfill{background:linear-gradient(90deg,#35BDF2,#8B6CFF)!important}'+
     'html[data-theme="light"] .sec15:before{background:linear-gradient(135deg,#168EBF,#7657DB)}'+
     '@media(prefers-reduced-motion:reduce){.fade-in{animation:none!important}#app.x86-enter{animation:none!important}.btn,.bnav-btn,.x51-row,.x48-row{transition:none!important}}';
  }catch(eS3){}
}
try{x86Style()}catch(eS4){}
/* 86.د الأخبار: بلا ملاحظات إصدارات داخلية قديمة — تُعرض إعلانات الإدارة الحقيقية فقط، وعند عدم وجودها يُخفى القسم كاملًا */
try{fallbackNews18=function(){return []}}catch(eN1){}
function x86NewsFix(){
  try{
    var n=document.getElementById('xnews');
    if(!n){return}
    var txt=(''+n.innerHTML).replace(/<[^>]*>/g,'').replace(/\s+/g,' ').trim();
    if(!txt){
      n.style.display='none';
      var p=null;
      try{p=n.previousElementSibling}catch(eP){}
      if(p&&((''+(p.className||'')).indexOf('sec15')>=0)){p.style.display='none'}
    }
  }catch(e0){}
}
/* 86.هـ التنقل السلس: دخول ناعم (شفافية فقط — بلا transform حتى لا تتحرك العناصر الثابتة) عند تغيّر الصفحة فقط، ومكنس واحد بعد كل عرض */
var __x86R=render;
var __x86Prev=null;
var __x86To=null;
render=function(){
  var k='';
  try{k=''+(((typeof ROUTE!=='undefined')&&ROUTE&&ROUTE.page)?ROUTE.page:'')+'|'+(((typeof X51!=='undefined')&&X51&&X51.page)?X51.page:'')+'|'+(((typeof location!=='undefined')&&location.hash)?location.hash:'')}catch(eK){}
  var first=(__x86Prev===null);
  var ch86=(k!==__x86Prev);
  __x86Prev=k;
  try{__x86R()}catch(e0){}
  try{
    if(!first&&ch86){
      var ap=document.getElementById('app');
      if(ap){ap.classList.remove('x86-enter');try{void ap.offsetWidth}catch(eF){};ap.classList.add('x86-enter');setTimeout(function(){try{ap.classList.remove('x86-enter')}catch(e1){}},300)}
    }
  }catch(e2){}
  try{
    if(__x86To){clearTimeout(__x86To)}
    __x86To=setTimeout(function(){__x86To=null;try{__x86RSweep()}catch(e3){}try{__x86NSweep()}catch(e4){}try{x86NewsFix()}catch(e5){}},150)
  }catch(e6){}
};
/* 86.و هوية الإصدار */
APP_META.ver='86.0';APP_META.date='2026-11-06';APP_META.lastUpdate='2026-11-06';
APP_META.notes='الإصدار 86 — التصميم العالمي المتكامل: لمسات هندسية أنيقة في أدق التفاصيل، نصوص واجهة نظيفة بلا شروح داخلية، انتقال صفحات ناعم بلا اهتزاز، وأداء أخف بمراقب واحد ومكنس واحد بعد كل عرض.';
try{APP_META.changelog.unshift({ver:'86.0',date:'2026-11-06',notes:'تصميم عالمي متكامل + تنظيف نصوص الواجهة + انتقال ناعم بلا اهتزاز + مراقب واحد وأداء أخف.'})}catch(eV86){}
