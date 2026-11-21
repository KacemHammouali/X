/* ===== طبقة 76: احترافية أزرار الرجوع + موقع أنقى + لمسات إبهار ===== */
function x76Svg(){
  return '<svg class="x76arw" viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 6l6 6-6 6"/></svg>';
}
function x76Arrowify(b){
  if(!b){return}
  try{
    if(b.getAttribute&&b.getAttribute('data-x76')){return}
    b.innerHTML='<span class="x76sp">'+x76Svg()+'</span>';
    if(b.setAttribute){b.setAttribute('data-x76','1')}
  }catch(e0){}
}
function x76Arrows(){
  try{
    var b=null;try{b=gid('x69-back')}catch(e1){b=null}
    x76Arrowify(b);
    try{
      var els=document.querySelectorAll('.x71-backbtn,.x72sec-b');
      for(var i=0;i<els.length;i++){x76Arrowify(els[i])}
    }catch(e2){}
    try{
      var sb=document.querySelector('.x51-back');
      if(sb&&(!sb.getAttribute||!sb.getAttribute('data-x76'))){
        var t=(''+(sb.textContent||''));t=t.replace('‹','');t=t.replace(/^[\s]+|[\s]+$/g,'');
        sb.innerHTML='<span class="x51-bic">'+x76Svg()+'</span>'+t;
        if(sb.setAttribute){sb.setAttribute('data-x76','1')}
      }
    }catch(e3){}
  }catch(e4){}
}
function x76IsApp(){
  try{if(typeof x68Mode==='function'){if(x68Mode()==='app'){return true}}}catch(e0){}
  try{if(typeof x51Channel==='function'){if(x51Channel()==='app'){return true}}}catch(e1){}
  try{if(navigator&&navigator.standalone===true){return true}}catch(e2){}
  try{if(window.matchMedia&&window.matchMedia('(display-mode: standalone)').matches){return true}}catch(e3){}
  return false;
}
function x76ChSync(){
  try{
    var b=document.body;
    if(!b||!b.classList){return}
    if(x76IsApp()){try{b.classList.remove('x76web')}catch(e5){}}
    else{try{b.classList.add('x76web')}catch(e6){}}
    var has=false;
    try{has=!!document.querySelector('.x51-back')}catch(e7){}
    if(has){try{b.classList.add('x76sec')}catch(e8){}}
    else{try{b.classList.remove('x76sec')}catch(e9){}}
  }catch(e4){}
}
var __x76BN=renderBottomNav;
renderBottomNav=function(){
  var h='';try{h=__x76BN()}catch(e0){h=''}
  try{
    if(!x76IsApp()&&h){
      var parts=(''+h).split('<button'),out=[parts[0]];
      for(var i=1;i<parts.length;i++){
        var p=parts[i];
        if(p.indexOf("navigate('settings')")>=0){continue}
        if(p.indexOf("navigate('profile')")>=0){continue}
        out.push(p);
      }
      h=out.join('<button');
    }
  }catch(e1){}
  return h;
};
function x76Prog(){
  try{
    var d=null;try{d=gid('x76prog')}catch(e1){d=null}
    if(!d){return}
    var sc=0;
    try{sc=(document.documentElement&&document.documentElement.scrollTop)||document.body.scrollTop||window.pageYOffset||0}catch(e2){sc=0}
    var sh=0;
    try{sh=Math.max(document.body.scrollHeight||0,document.documentElement.scrollHeight||0)}catch(e3){sh=0}
    var wh=0;
    try{wh=window.innerHeight||0}catch(e4){wh=0}
    var p=(sh>wh&&wh>0)?(sc/((sh-wh)||1)):0;
    if(!(p>=0)){p=0}
    if(p>1){p=1}
    d.style.width=(''+Math.round(p*100))+'%';
  }catch(e0){}
}
var __x76R=render;
render=function(){
  try{__x76R()}catch(e0){}
  try{x76Arrows()}catch(e1){}
  try{x76ChSync()}catch(e2){}
  try{x76Prog()}catch(e3){}
};
try{(function(){
  var st76=document.createElement('style');
  st76.id='x76-style';
  st76.textContent=
   '.x51-back{position:fixed!important;top:calc(10px + env(safe-area-inset-top,0px))!important;right:14px!important;left:auto!important;display:inline-flex!important;align-items:center!important;justify-content:center!important;gap:9px;margin:0!important;padding:13px 24px!important;border-radius:16px!important;border:1px solid rgba(255,255,255,.28)!important;background:linear-gradient(135deg,#2A7DE1,#229ED9)!important;color:#fff!important;font-size:16.5px!important;font-weight:800!important;line-height:1!important;cursor:pointer;z-index:9600!important;box-shadow:0 10px 30px rgba(20,90,160,.42)!important;backdrop-filter:blur(14px);-webkit-backdrop-filter:blur(14px);transition:transform .15s ease!important}'+
   'html[dir="ltr"] .x51-back{left:14px!important;right:auto!important}'+
   '.x51-back:active{transform:scale(.94)}'+
   '.x51-bic{display:inline-flex!important;align-items:center!important;justify-content:center!important;width:28px!important;height:28px!important;line-height:1!important;margin:0!important}'+
   '.x76sec .x48-page{padding-top:calc(72px + env(safe-area-inset-top,0px))!important}'+
   '.x69-backbtn,#x69-back,.x71-backbtn,.x72sec-b{display:inline-flex!important;align-items:center!important;justify-content:center!important;padding:0!important;text-align:center!important}'+
   '.x76sp{display:inline-flex!important;align-items:center!important;justify-content:center!important;width:100%!important;height:100%!important;line-height:1!important}'+
   '.x76arw{display:block!important;margin:0 auto!important}'+
   'html[dir="ltr"] .x76arw{transform:scaleX(-1)}'+
   '.x76web .bnav button[onclick*="navigate(\'settings\')"],.x76web .bnav button[onclick*="navigate(\'profile\')"]{display:none!important}'+
   '#x76prog{position:fixed;top:0;left:0;height:3px;width:0;z-index:99999;background:linear-gradient(90deg,#229ED9,#a08ee0,#e07f9a);border-radius:0 3px 3px 0;pointer-events:none;transition:width .1s linear}'+
   '@media(prefers-reduced-motion:reduce){#x76prog{transition:none!important}.x51-back{transition:none!important}}'+
   '.bnav-btn.bnav-on{background:linear-gradient(135deg,rgba(34,158,217,.24),rgba(42,125,225,.13))!important;box-shadow:inset 0 4px 16px rgba(34,158,217,.2)}'+
   '.bnav-btn:active{transform:scale(.88)}'+
   '.x51-row:active{transform:scale(.985);background:rgba(42,125,225,.08)}'+
   'html[data-theme="light"] .x51-back{color:#fff!important}';
  (document.head||document.documentElement).appendChild(st76);
  var pr76=document.createElement('div');
  pr76.id='x76prog';
  (document.body||document.documentElement).appendChild(pr76);
  try{window.addEventListener('scroll',function(){try{x76Prog()}catch(e0){}},true)}catch(e5){}
  try{window.addEventListener('resize',function(){try{x76Prog()}catch(e1){}},true)}catch(e6){}
})();}catch(e76s){}
var x76t=null;
function x76Kick(){
  if(x76t){return}
  x76t=setTimeout(function(){x76t=null;try{x76Arrows()}catch(e0){}},30);
}
try{
  if(typeof MutationObserver!=='undefined'&&document.body){
    var x76mo=new MutationObserver(function(){x76Kick()});
    x76mo.observe(document.body,{childList:true,subtree:true});
  }
}catch(e7){}
try{setTimeout(function(){try{x76Arrows()}catch(e0){}try{x76ChSync()}catch(e1){}try{x76Prog()}catch(e2){}},250)}catch(e8){}
APP_META.ver='76.0';APP_META.date='2026-11-05';APP_META.lastUpdate='2026-11-05';
APP_META.notes='الإصدار 76 — احترافية أزرار الرجوع: زر رجوع الإعدادات أكبر وثابت في الأعلى لا يختفي أثناء التمرير، السهم متمركز تمامًا في كل الأزرار الدائرية برسم SVG حاد، وفي الموقع أُخفيت الإعدادات وملفي من الشريط السفلي (يبقيان في التطبيق)، شريط تقدم تمرير علوي أنيق، وتوهج التبويب النشط.';
try{APP_META.changelog.unshift({ver:'76.0',date:'2026-11-05',notes:'زر رجوع الإعدادات كبير وثابت لا يختفي + سهم SVG متمركز في كل الأزرار الدائرية + إخفاء الإعدادات وملفي من شريط الموقع + شريط تقدم التمرير + توهج التبويب النشط.'})}catch(e9){}
