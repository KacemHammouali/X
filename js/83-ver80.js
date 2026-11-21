/* ===== طبقة 80: نهاية «الطبقتين» + إشعارات ذكية + قوانين تُصيَّر دائمًا ===== */

/* 80.أ الشريط السفلي: الأيقونات في أسفل الشريط فوق منطقة أندرويد مباشرة — فلا يبدو هناك طبقتان */
/* 80.ب زر الرجوع أنزل قليلًا (70px) + زر x41 (84px) */
/* 80.ج بطاقة الإشعارات: تختفي من كل المنصة عند التفعيل وتعود عند الإيقاف */
var __x80SP=renderSettingsPage;
renderSettingsPage=function(){
  var h='';try{h=__x80SP()}catch(e0){h=''}
  try{
    var perm='default';
    try{perm=(typeof Notification==='undefined'||!Notification)?'default':(''+(Notification.permission||'default'))}catch(e1){perm='default'}
    if(perm==='granted'){
      var tag='<div class="x69-pushcard" id="x69-pushbtn">';
      var ix=(''+h).indexOf(tag);
      if(ix>=0){
        var end=(''+h).indexOf('</button></div>',ix);
        if(end>ix){h=(''+h).substring(0,ix)+(''+h).substring(end+15)}
      }
    }
  }catch(e2){}
  return h;
};
function x80SyncPush(){
  try{
    var cards=document.querySelectorAll('.x69-pushcard');
    if(!cards||!cards.length)return;
    var perm='granted';
    try{perm=(typeof Notification==='undefined'||!Notification)?'granted':(''+(Notification.permission||'default'))}catch(e0){perm='granted'}
    if(perm==='granted'){for(var i=0;i<cards.length;i++){var c=cards[i];if(c&&c.parentNode){try{c.parentNode.removeChild(c)}catch(e1){}}}}
  }catch(e2){}
}

/* 80.د القوانين والمعادلات: تصيير KaTeX بكل المحددات + ضمان ألا يبقى LaTeX خام أبدًا */
typesetApp=function(){
  var app=document.getElementById('app');if(!app)return;
  if(KAT===true){
    try{
      renderMathInElement(app,{delimiters:[
        {left:'$$',right:'$$',display:true},
        {left:'\\[',right:'\\]',display:true},
        {left:'$',right:'$',display:false},
        {left:'\\(',right:'\\)',display:false}
      ],throwOnError:false});
    }catch(e){try{KAT=false}catch(eK){}}
  }
  if(KAT===false){
    try{
      var els=app.querySelectorAll('.math-block[data-tex]:not([data-done])');
      for(var i=0;i<els.length;i++){
        try{els[i].textContent=texFallback(els[i].getAttribute('data-tex'));els[i].className=els[i].className+' math-fallback';els[i].setAttribute('data-done','1')}catch(e1){}
      }
    }catch(e2){}
    return;
  }
  if(KAT===true){
    try{
      var els2=app.querySelectorAll('.math-block[data-tex]:not([data-done])');
      for(var j=0;j<els2.length;j++){
        var t=''+((els2[j].textContent)||'');
        if(t.indexOf('$$')>=0||t.indexOf('\\frac')>=0||t.indexOf('\\longrightarrow')>=0||t.indexOf('\\mathbb')>=0){
          try{els2[j].textContent=texFallback(els2[j].getAttribute('data-tex'));els2[j].className=els2[j].className+' math-fallback';els2[j].setAttribute('data-done','1')}catch(e3){}
        }
      }
    }catch(e4){}
    return;
  }
  setTimeout(function(){try{KAT=(typeof renderMathInElement==='function')}catch(e5){KAT=null}typesetApp()},900);
};

/* 80.هـ ستايل 80 */
try{
  var st80=document.createElement('style');
  st80.id='x80-style';
  st80.textContent=
   '/* الأيقونات أسفل الشريط: طبقة واحدة متصلة فوق منطقة أندرويد */'+
   '.bnav{align-items:flex-end!important;padding:0 2px calc(4px + env(safe-area-inset-bottom,0px))!important;height:calc(56px + env(safe-area-inset-bottom,0px))!important}'+
   '.bnav-btn{height:46px!important}'+
   '/* زر الرجوع أنزل قليلًا */'+
   '.x69-backbtn{bottom:calc(70px + env(safe-area-inset-bottom,0px))!important}'+
   '.x41-back{bottom:calc(84px + env(safe-area-inset-bottom,0px))!important}'+
   '/* المعادلات: لا انقطاع ولا خروج عن البطاقة */'+
   '.math-block{overflow-x:auto!important;overflow-y:hidden!important;direction:ltr!important;max-width:100%!important;-webkit-overflow-scrolling:touch}'+
   '.katex-display{overflow-x:auto!important;max-width:100%!important;padding:2px 0}'+
   '/* بطاقة الإشعارات واضحة في الوضعين */'+
   'html[data-theme="dark"] .x69-pushcard b{color:#F0F5FB!important}'+
   'html[data-theme="dark"] .x69-pushcard span{color:#B9C8DE!important}'+
   'html[data-theme="light"] .x69-pushcard b{color:#172437!important}'+
   'html[data-theme="light"] .x69-pushcard span{color:#5B6B80!important}';
  var hd80=document.head||document.documentElement;
  if(hd80&&hd80.appendChild){hd80.appendChild(st80)}
}catch(eSt80){}

/* 80.و غلاف render: مزامنة الإشعارات + تصيير المعادلات بعد كل عرض */
var __x80R=render;
render=function(){
  try{__x80R()}catch(e0){}
  try{x80SyncPush()}catch(e1){}
  try{typesetApp()}catch(e2){}
};
try{
  if(typeof MutationObserver!=='undefined'&&document.body){
    var x80mo=new MutationObserver(function(){
      try{x80SyncPush()}catch(e1){}
    });
    x80mo.observe(document.body,{childList:true,subtree:true});
  }
}catch(e4){}

/* 80.ز هوية الإصدار */
APP_META.ver='80.0';APP_META.date='2026-11-05';APP_META.lastUpdate='2026-11-05';
APP_META.notes='الإصدار 80 — طبقة واحدة حقيقية في التطبيق: أيقونات الشريط صارت في أسفله متصلة بمنطقة أندرويد فلا يبدو هناك طبقتان، زر الرجوع أنزل قليلًا لمكانه الطبيعي، بطاقة الإشعارات تختفي من كل المنصة عند التفعيل وتعود عند الإيقاف وألوانها واضحة في الوضعين، ومعادلات الدروس والقوانين تُصيَّر دائمًا: KaTeX بكل المحددات ($$ والرمز المفرد والقوسين) وبديل مقروء مضمون إن غاب الاتصال، مع منع انقطاع المعادلات الطويلة خلف بطاقاتها.';
try{APP_META.changelog.unshift({ver:'80.0',date:'2026-11-05',notes:'طبقة واحدة في التطبيق (أيقونات أسفل الشريط) + إنزال زر الرجوع + اختفاء بطاقة الإشعارات عند التفعيل + تصيير القوانين والمعادلات دائمًا بلا LaTeX خام.'})}catch(e9){}
