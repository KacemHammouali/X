/* ===== الطبقة 70 - أقوى إصدار: ثبات كامل + تصميم منافس للتطبيقات العالمية (انستغرام/واتساب/تيليجرام) ===== */
try{
/* 70.أ إصلاح ثبات: التنقل لنفس الصفحة لا يملأ سجل الرجوع + زر الرجوع يختفي في شاشة الدخول */
var __x70NAV=navigate;
navigate=function(a,b,c){
  try{
    if(a===ROUTE.page&&(b===null||b===undefined)&&(c===null||c===undefined)&&X69.lock!==true){X69.lock=true}
  }catch(e0){}
  try{__x70NAV(a,b,c)}catch(e1){}
  try{setTimeout(function(){try{x70Sync()}catch(s0){}},0)}catch(e2){}
};
function x70Sync(){
  try{
    var b=gid('x69-back');
    if(b&&ROUTE&&ROUTE.page==='auth'){b.style.display='none'}
  }catch(e0){}
}
try{setTimeout(x70Sync,500)}catch(e1){}
/* 70.ب التصميم العالمي: شريط سفلي عائم مثل تيليجرام وواتساب + أزرار حبوب مثل انستغرام + بطاقات ناعمة + مدخلات حديثة */
(function(){
  var n=null;try{n=gid('x70-style')}catch(e){}
  if(!n){try{n=document.createElement('style');n.id='x70-style';var hd=document.head||document.body;if(hd&&hd.appendChild){hd.appendChild(n)}}catch(e2){n=null}}
  if(n){n.textContent=
   '/* === الشريط السفلي العائم الحديث === */'+
   '.bnav{left:10px!important;right:10px!important;bottom:calc(8px + env(safe-area-inset-bottom,0px))!important;border-radius:24px!important;height:auto!important;padding:8px 4px!important;background:rgba(10,16,28,.92)!important;backdrop-filter:blur(22px)!important;-webkit-backdrop-filter:blur(22px)!important;border:1px solid rgba(130,170,230,.14)!important;box-shadow:0 14px 44px rgba(0,0,0,.32)!important}'+
   'html[data-theme="light"] .bnav{background:rgba(252,253,255,.94)!important;border:1px solid rgba(60,110,180,.14)!important;box-shadow:0 12px 36px rgba(30,50,80,.14)!important}'+
   '.bnav-btn{border-radius:16px!important;padding:7px 15px!important;transition:transform .18s ease,background .18s ease,color .18s ease!important}'+
   '.bnav-btn.bnav-on{background:rgba(34,158,217,.15)!important;border-radius:16px!important}'+
   '.bnav-btn.bnav-on .bnav-btn,.bnav-btn.bnav-on svg{transform:scale(1.07)}'+
   '.bnav-btn span{font-size:11.5px!important}'+
   'body{padding-bottom:calc(96px + env(safe-area-inset-bottom,0px))!important}'+
   '/* === أزرار حبوب عالمية === */'+
   '.btn{border-radius:999px!important;font-weight:800!important;transition:transform .16s ease,box-shadow .2s ease,border-color .2s ease!important}'+
   '.btn:active{transform:scale(.96)}'+
   '.btn-primary{background:linear-gradient(135deg,#2f7ae5,#229ED9)!important;border:1px solid rgba(255,255,255,.16)!important;box-shadow:0 6px 18px rgba(34,158,217,.34)!important;color:#fff!important}'+
   '.btn-primary:active{box-shadow:0 3px 10px rgba(34,158,217,.28)!important}'+
   'html[data-theme="light"] .btn{background:#fff;border:1px solid #DCE5EF}'+
   'html[data-theme="light"] .btn-primary{background:linear-gradient(135deg,#2f7ae5,#229ED9)!important;color:#fff!important}'+
   '/* === بطاقات ناعمة بظلال طبقية === */'+
   '.x17-card,.h15-card,.glass,.glass-strong,.set-card,.x48-qcard,.news-item,.qcard{border-radius:20px!important}'+
   '.x17-card,.h15-card,.x48-qcard{box-shadow:0 12px 34px rgba(2,8,18,.26),0 2px 8px rgba(2,8,18,.18)!important}'+
   'html[data-theme="light"] .x17-card,html[data-theme="light"] .h15-card{box-shadow:0 10px 28px rgba(25,45,75,.10),0 2px 6px rgba(25,45,75,.07)!important;border:1px solid #E3EAF2!important}'+
   '.card:hover,.x17-card:hover,.h15-card:hover{transform:translateY(-2px)}'+
   '.card,.x17-card,.h15-card{transition:transform .2s ease,box-shadow .2s ease,border-color .2s ease}'+
   '/* === رأس الإعدادات والمظهر === */'+
   '.x48-hero{border-radius:22px!important;padding:22px 18px!important;background:linear-gradient(140deg,rgba(34,158,217,.16),rgba(47,122,229,.10))!important;border:1px solid rgba(120,170,240,.18)!important}'+
   '.x48-qcard{border-radius:18px!important}'+
   '.x48-thc{border-radius:18px!important;border:2px solid transparent!important;transition:border-color .2s ease,box-shadow .2s ease,transform .2s ease}'+
   '.x48-thc.on{border-color:#229ED9!important;box-shadow:0 6px 20px rgba(34,158,217,.28)!important;transform:translateY(-2px)}'+
   '.x48-pill{border-radius:999px!important}'+
   '.x48-row{border-radius:16px!important}'+
   '/* === مدخلات حديثة === */'+
   '.fld input,.fld textarea,.x30-inp,input[type="text"],input[type="email"],input[type="password"],textarea,select{border-radius:12px!important;background:rgba(255,255,255,.05)!important;border:1px solid rgba(140,180,240,.22)!important;padding:11px 14px!important;font-size:15px!important;transition:border-color .18s ease,box-shadow .18s ease!important}'+
   'html[data-theme="light"] .fld input,html[data-theme="light"] input[type="text"],html[data-theme="light"] textarea,html[data-theme="light"] select{background:#fff!important;border:1px solid #DCE5EF!important}'+
   '.fld input:focus,.x30-inp:focus,input[type="text"]:focus,input[type="email"]:focus,textarea:focus{outline:none!important;border-color:#229ED9!important;box-shadow:0 0 0 3px rgba(34,158,217,.18)!important}'+
   '/* === نافذة منبثقة وتنبيهات === */'+
   '.xmodal-card{border-radius:24px!important;border:1px solid rgba(140,180,240,.2)!important;box-shadow:0 30px 80px rgba(0,0,0,.5)!important}'+
   '.toast{border-radius:16px!important;font-weight:700!important;max-width:440px}'+
   '/* === عناوين وخطوط === */'+
   'h1,h2,h3{letter-spacing:-.3px}'+
   '.section-header h2,.x48-hero h1{font-weight:900!important}'+
   '/* === عناصر عامة === */'+
   '.set-line{border-radius:14px!important}'+
   '.news-item{border-radius:16px!important}'+
   '.auth-card{border-radius:24px!important}'+
   '.upd-card{border-radius:18px!important}'+
   '/* === تمرير أنيق === */'+
   '::-webkit-scrollbar{width:4px;height:4px}'+
   '::-webkit-scrollbar-thumb{background:rgba(120,160,220,.28);border-radius:999px}'+
   '::-webkit-scrollbar-track{background:transparent}'+
   '/* === وصولية وحركة === */'+
   ':focus-visible{outline:2px solid #229ED9!important;outline-offset:2px}'+
   '@media (prefers-reduced-motion: reduce){*{animation-duration:.01ms!important;animation-iteration-count:1!important;transition-duration:.01ms!important}}'+
   'html[data-theme="light"] ::-webkit-scrollbar-thumb{background:rgba(60,100,160,.25)}';
  }
})();
/* 70.ج بيانات الإصدار */
APP_META.ver='70.0';
APP_META.notes='الإصدار 70 — أقوى إصدار: ثبات كامل وتصميم منافس للتطبيقات العالمية (انستغرام وواتساب وفيسبوك وتيليجرام): شريط سفلي عائم زجاجي بحدود ناعمة وظل طبقي، أزرار حبوب بتدرج أزرق احترافي، بطاقات بحدود 20px وظلال ناعمة ترتفع عند اللمس، مدخلات حديثة بحلقة تركيز واضحة، رأس إعدادات متدرج، نافذة منبثقة بنعومة أكبر، تمرير أنيق، احترام تقليل الحركة لذوي الاحتياجات، وإصلاح ثبات: التنقل لنفس الصفحة لا يملأ سجل الرجوع، وزر الرجوع لا يظهر في شاشة الدخول.';
try{APP_META.lastUpdate='2026-11-05'}catch(eM1){}
try{if(APP_META.changelog&&APP_META.changelog.unshift){APP_META.changelog.unshift({ver:'70.0',date:'2026-11-05',notes:'تصميم عالمي: شريط عائم + أزرار حبوب + بطاقات ناعمة + مدخلات حديثة + ثبات: سجل رجوع نظيف وزر رجوع بلا تعارض مع شاشة الدخول'})}}catch(eM2){}
}catch(eW70){}
