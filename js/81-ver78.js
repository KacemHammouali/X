/* ===== طبقة 78: شريط إنستغرام حقيقي على مستوى DOM (موقع + تطبيق) + سلاسة وثبات ===== */
function x78IsApp(){try{return (typeof x76IsApp==='function')?x76IsApp():false}catch(e0){return false}}
function x78NavHtml(){
  var page='';try{page=(ROUTE&&ROUTE.page)||''}catch(e1){page=''}
  var act=function(pages){for(var i=0;i<pages.length;i++){if(pages[i]===page){return ' bnav-on'}}return ''};
  var isApp=false;try{isApp=x78IsApp()}catch(e2){}
  var av='👤';try{av=(typeof avatarHTML==='function')?avatarHTML(26,'av-nav'):'👤'}catch(e3){}
  var h='';
  h+='<button class="bnav-btn x78-t'+act(['home','cycle','year','branch','subjecthub','pdflib'])+'" onclick="navigate(\'home\')" aria-label="الرئيسية">'+xi('home',25)+'<span>الرئيسية</span></button>';
  h+='<button class="bnav-btn x78-t'+act(['subjects','subject','lesson','quiz'])+'" onclick="navigate(\'subjects\')" aria-label="المواد">'+xi('grid',25)+'<span>المواد</span></button>';
  h+='<button class="bnav-btn x78-t'+act(['dash'])+'" onclick="navigate(\'dash\')" aria-label="التقدم">'+xi('chart',25)+'<span>تقدّمي</span></button>';
  if(isApp){
    h+='<button class="bnav-btn x78-t'+act(['profile'])+'" onclick="navigate(\'profile\')" aria-label="ملفي">'+av+'<span>ملفي</span></button>';
    h+='<button class="bnav-btn x78-t'+act(['settings'])+'" onclick="navigate(\'settings\')" aria-label="الإعدادات">'+xi('gear',25)+'<span>الإعدادات</span></button>';
  }else{
    h+='<button class="bnav-btn x78-t x78-appbtn" onclick="try{x77AppSheet()}catch(e){}" aria-label="التطبيق">📲<span>التطبيق</span></button>';
  }
  return h;
}
function x78Patch(){
  try{
    var n=null;try{n=(document.querySelector?document.querySelector('nav.bnav'):null)||((document.querySelector?document.querySelector('.bnav'):null))}catch(e1){n=null}
    if(!n){return}
    var sig='';try{sig=x78NavHtml()}catch(e2){sig=''}
    if(!sig){return}
    try{if(n.getAttribute&&n.getAttribute('data-x78')===sig){return}}catch(e3){}
    try{n.innerHTML=sig}catch(e4){}
    try{if(n.setAttribute){n.setAttribute('data-x78',sig)}}catch(e5){}
  }catch(e0){}
}
var __x78R=render;
render=function(){try{__x78R()}catch(e0){}try{x78Patch()}catch(e1){}};
try{(function(){
  var st78=document.createElement('style');
  st78.id='x78-style';
  st78.textContent=
   '/* شريط إنستغرام حقيقي: أسود ممتد ثابت أيقونات فقط موزعة بالتساوي */'+
   '.bnav{position:fixed!important;bottom:0!important;left:0!important;right:0!important;width:100%!important;border-radius:0!important;height:calc(52px + env(safe-area-inset-bottom,0px))!important;padding:0 2px 2px!important;margin:0!important;display:flex!important;justify-content:space-around!important;align-items:center!important;background:#000000!important;border:0!important;border-top:1px solid #262626!important;box-shadow:none!important;backdrop-filter:none!important;-webkit-backdrop-filter:none!important;z-index:9000!important}'+
   'html[data-theme="light"] .bnav{background:#ffffff!important;border-top:1px solid #DBDBDB!important}'+
   '.bnav-btn{flex:1 1 0!important;max-width:80px!important;height:48px!important;padding:9px 0!important;margin:0!important;background:none!important;border:0!important;border-radius:0!important;display:flex!important;flex-direction:column!important;align-items:center!important;justify-content:center!important;gap:0!important;color:#F5F5F5!important;font-size:22px!important;line-height:1!important;transition:transform .08s ease!important}'+
   'html[data-theme="light"] .bnav-btn{color:#0F1419!important}'+
   '.bnav-btn span{display:none!important}'+
   '.bnav-btn svg{width:25px!important;height:25px!important;stroke-width:1.9!important}'+
   '.bnav-btn .avatar{width:26px!important;height:26px!important}'+
   '.bnav-btn.bnav-on{background:none!important;color:#F5F5F5!important;transform:scale(1.06)}'+
   'html[data-theme="light"] .bnav-btn.bnav-on{color:#0F1419!important}'+
   '.bnav-btn.bnav-on svg{stroke-width:2.5!important}'+
   '.bnav-btn:active{transform:scale(.86)}'+
   '.bnav.x68-hide{transform:none!important;opacity:1!important;pointer-events:auto!important}'+
   'body{padding-bottom:calc(62px + env(safe-area-inset-bottom,0px))!important}'+
   'body{padding-bottom:calc(62px + env(safe-area-inset-bottom,0px))!important}'+
   '*{-webkit-tap-highlight-color:transparent}'+
   'html{-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility}'+
   '@media(prefers-reduced-motion:reduce){.bnav-btn{transition:none!important}.bnav-btn:active{transform:none}}';
  (document.head||document.documentElement).appendChild(st78);
})();}catch(e78s){}
var x78t=null;
function x78Kick(){if(x78t){return}x78t=setTimeout(function(){x78t=null;try{x78Patch()}catch(e0){}},30)}
try{
  if(typeof MutationObserver!=='undefined'&&document.body){
    var x78mo=new MutationObserver(function(){x78Kick()});
    x78mo.observe(document.body,{childList:true,subtree:true});
  }
}catch(e6){}
try{setTimeout(function(){try{x78Patch()}catch(e0){}},120)}catch(e7){}
try{setTimeout(function(){try{x78Patch()}catch(e1){}},700)}catch(e8){}
APP_META.ver='78.0';APP_META.date='2026-11-05';APP_META.lastUpdate='2026-11-05';
APP_META.notes='الإصدار 78 — شريط إنستغرام حقيقي على مستوى DOM: أسود ممتد ثابت في أسفل الشاشة، أيقونات فقط موزعة بالتساوي بلا كتابة، يُرسم مباشرة بعد كل عرض فيمضمون ظهوره في الموقع والتطبيق — زر التطبيق 📲 في الموقع وملفي والإعدادات في التطبيق، مع سلاسة لمس وسرعة عرض.';
try{APP_META.changelog.unshift({ver:'78.0',date:'2026-11-05',notes:'شريط إنستغرام DOM (أسود، أيقونات فقط، ثابت) + زر التطبيق 📲 مضمون في الموقع + سلاسة وثبات.'})}catch(e9){}
