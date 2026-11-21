/* ============ الطبقة 108b — الإصدار 105.0: الاستقرار الجذري + اللمسة العالمية ============ */
/* (أ) حارس ظهور الدروس: مسح دوري يرفع عن الشفافية أي عنصر درس عالق مهما كان سببها.
   (ب) فحص قاعدة البيانات الذكي: ثلاث محاولات تلقائية ورسالة صادقة تشرح استيقاظ السحابة من السبات (HTTP 504)
       وتظهر خطوة الأصلاح الواضحة (Restore من لوحة Supabase) بدل رسالة غامضة.
   (ج) الضغط المطوّل على التبويب السفلي يُظهر اسم التبويب فقاعة أنيقة فوقه — مثل واتساب وتيليجرام —
       دون إلغاء الضغطة العادية: ضغطة قصيرة = انتقال، ضغط مطوّل = اسم التبويب. */
(function(){
'use strict';

/* ---------- 105.أ حارس ظهور الدروس ---------- */
function x105Unstick(root){
  try{
    var list=root.querySelectorAll('.fade-in,.lesson-view,.x72-toc,#x71lpb,#x72sec-bd,#x72sec-bd *,#x71lpb *');
    for(var i=0;i<list.length&&i<600;i++){
      var el=list[i];var cs=null;
      try{cs=getComputedStyle(el)}catch(e1){cs=null}
      if(!cs)continue;
      var fix=false;
      if(cs.opacity==='0'){fix=true}
      if(cs.visibility==='hidden'){fix=true}
      if(cs.display==='none'&&(el.id==='x71lpb'||el.id==='x72sec-bd')){fix=true}
      if(fix){
        try{el.style.opacity='1'}catch(eA){}
        try{el.style.visibility='visible'}catch(eB){}
        try{el.style.animation='none'}catch(eC){}
        try{el.style.transform='none'}catch(eD){}
      }
    }
  }catch(e2){}
}
function x105Burst(){
  var n=0;
  var iv=setInterval(function(){
    n++;
    try{x105Unstick(document.getElementById('app')||document.body)}catch(e3){}
    if(n>15){clearInterval(iv)}
  },400);
}
try{
  var __x105Nav=navigate;
  window.navigate=function(){
    try{x105Burst()}catch(eN1){}
    setTimeout(function(){try{x105Unstick(document.getElementById('app')||document.body)}catch(eN2){}},80);
    setTimeout(function(){try{x105Unstick(document.getElementById('app')||document.body)}catch(eN3){}},450);
    return __x105Nav.apply(this,arguments);
  };
}catch(eNav){}
setTimeout(x105Burst,50);
setTimeout(x105Burst,1300);
setTimeout(x105Burst,3200);

/* ---------- 105.ب فحص قاعدة البيانات الذكي (3 محاولات + رسالة صادقة) ---------- */
try{
  var __x105PR=x72ProbeRest;
  window.x72ProbeRest=function(){
    var tries=0,k=null;
    try{k=(typeof x66Keys==='function')?x66Keys():null}catch(eK){k=null}
    if(!k||!k.url||!k.anon){
      try{x72PaintRest('bad','لا مفتاح اتصال محفوظًا على هذا الجهاز — جهّز اتصال قاعدة البيانات من الإعدادات')}catch(e1){}
      return;
    }
    function once(){
      tries++;
      try{x72PaintRest('wait',tries>1?('إعادة محاولة تلقائية ('+tries+' من 3)…'):'يجري الآن اتصال حقيقي بجدول الإعلانات…')}catch(e2){}
      try{
        fetch(k.url+'/rest/v1/announcements?select=id&limit=1',{headers:{'apikey':k.anon,'Authorization':'Bearer '+k.anon}})
        .then(function(r){
          try{
            if(r&&r.ok){
              x72PaintRest('ok','متصل ويعمل — جدول الإعلانات يقرأ بنجاح (بعد '+tries+(tries===1?' محاولة':' محاولات')+')');
              try{X72.restState='ok'}catch(eX){}
            }else{
              var stt=(r&&r.status)?r.status:0;
              if(stt===504||stt===503||stt===502){
                if(tries<3){setTimeout(once,900)}
                else{
                  x72PaintRest('wait','السحابة تستيقظ من السبات (HTTP '+stt+') — المشاريع المجانية في Supabase تتوقف عند الخمول: افتح لوحة Supabase في المتصفح واضغط Restore على المشروع، وبعد دقيقة إعادة الفحص هنا');
                  try{X72.restState='off'}catch(eX2){}
                }
              }else{
                x72PaintRest('bad','فشل الاتصال الحقيقي (HTTP '+stt+') — نفّذ سكربت SQL المرفق في هذه البطاقة من لوحة Supabase ثم اضغط إعادة الفحص');
                try{X72.restState='bad'}catch(eX3){}
              }
            }
          }catch(eP4){}
        })
        .catch(function(){
          try{
            if(tries<3){setTimeout(once,900)}
            else{x72PaintRest('wait','تعذر الوصول لقاعدة البيانات — تحقق من اتصال الإنترنت ثم أعد الفحص');try{X72.restState='off'}catch(eX4){}}
          }catch(eP5){}
        });
      }catch(eK2){try{x72PaintRest('wait','تعذر بدء الفحص — أعد المحاولة')}catch(eK3){}}
    }
    once();
  };
}catch(eDB){}

/* ---------- 105.ج الضغط المطوّل على تبويب الشريط السفلي = فقاعة الاسم (مثل واتساب) ---------- */
try{
  var css=''+
    '#x105-tip{position:fixed;z-index:2147483600;background:rgba(13,22,37,.97);color:#F5F7FC;'+
      'font-family:Tajawal,-apple-system,sans-serif;font-size:13.5px;font-weight:700;padding:8px 16px;'+
      'border-radius:14px;border:1px solid rgba(255,255,255,.14);box-shadow:0 10px 30px rgba(2,8,18,.5);'+
      'opacity:0;transform:translate(-50%,8px) scale(.85);transition:opacity .18s ease,transform .18s ease;'+
      'pointer-events:none;white-space:nowrap;text-align:center}'+
    '#x105-tip.x105-on{opacity:1;transform:translate(-50%,0) scale(1)}'+
    '@media (prefers-reduced-motion: reduce){#x105-tip{transition:none}}';
  var stl=document.createElement('style');stl.id='x105-style';
    try{if(!stl.styleSheet){stl.textContent=css}}catch(eS){}
  (document.head||document.documentElement).appendChild(stl);
}catch(eC0){}

function x105Closest(el,cls){
  try{
    while(el&&el!==document){
      var c=el.className||'';
      c=(''+(c.baseVal!==undefined?c.baseVal:c));
      if((' '+c+' ').indexOf(' '+cls+' ')>=0){return el}
      el=el.parentElement;
    }
  }catch(e){return null}
  return null;
}
function x105BtnName(btn){
  var n='';
  try{
    var sp=btn.querySelector('span');
    if(sp&&sp.textContent)n=sp.textContent.replace(/^\s+|\s+$/g,'');
    if(!n)n=btn.getAttribute('aria-label')||'';
  }catch(e){}
  return n||'تبويب';
}
function x105ShowTip(btn){
  try{
    var tip=document.getElementById('x105-tip');
    if(!tip){tip=document.createElement('div');tip.id='x105-tip';document.body.appendChild(tip)}
    tip.textContent=x105BtnName(btn);
    tip.className='';
    tip.style.display='block';
    var r=btn.getBoundingClientRect();
    var x=r.left+r.width/2,y=window.innerHeight-120;
    var th=tip.offsetHeight||36;
    y=r.top-th-10;
    if(!r.width){x=window.innerWidth/2;y=window.innerHeight-120}
    if(x<80)x=80;
    if(x>(window.innerWidth-80))x=window.innerWidth-80;
    if(y<10)y=10;
    tip.style.left=x+'px';
    tip.style.top=y+'px';
    setTimeout(function(){try{tip.className='x105-on'}catch(eT1){}},10);
  }catch(eT2){}
}
function x105HideTip(){
  try{
    var tip=document.getElementById('x105-tip');
    if(tip){tip.className='';setTimeout(function(){try{tip.style.display='none'}catch(eH1){}},200)}
  }catch(eH2){}
}
(function(){
  var btn=null,timer=null,fired=false,blocking=false;
  function x105Block(ev){
    try{ev.preventDefault();ev.stopPropagation()}catch(eB1){}
    if(ev&&ev.stopImmediatePropagation){ev.stopImmediatePropagation()}
  }
  document.addEventListener('touchstart',function(ev){
    try{
      if(!ev||!ev.touches||!ev.touches.length)return;
      var t=ev.target;
      var b=(t&&t.parentElement)?x105Closest(t,'bnav-btn'):null;
      if(!b){return}
      btn=b;fired=false;
      if(timer){clearTimeout(timer)}
      timer=setTimeout(function(){
        fired=true;
        try{x105ShowTip(btn)}catch(eL1){}
        try{if(navigator.vibrate)navigator.vibrate(12)}catch(eL2){}
      },430);
    }catch(eL3){}
  },{passive:true});
  function endPress(){try{if(timer){clearTimeout(timer);timer=null}}catch(eE1){}}
  document.addEventListener('touchend',function(ev){
    try{
      var b=btn;var wasFired=fired;
      endPress();
      try{x105HideTip()}catch(eE2){}
      if(wasFired&&b&&!blocking){
        blocking=true;
        document.addEventListener('click',x105Block,{capture:true});
        setTimeout(function(){
          try{document.removeEventListener('click',x105Block,{capture:true})}catch(eE3){}
          blocking=false;
          fired=false;
        },250);
      }
      btn=null;
    }catch(eE4){}
  },{passive:true});
  document.addEventListener('touchcancel',function(){try{endPress();x105HideTip();btn=null;fired=false}catch(eC1){}},{passive:true});
})();

/* ---------- 105.د الميتاداتا: الإصدار 105.0 ---------- */
APP_META.ver='105.0';APP_META.date='2026-11-21';APP_META.lastUpdate='2026-11-21';
APP_META.notes='الإصدار 105.0 — الاستقرار الجذري: حارس ظهور يحرّس الدروس فيمسح أي شفافية عالقة فور التنقل وكل ثوان الإقلاع فلا دروس فارغة أبدًا على أي جهاز. فحص قاعدة البيانات صار ذكيًا: ثلاث محاولات تلقائية ثم رسالة صادقة تشرح استيقاظ السحابة من السبات (HTTP 504) وخطتين واضحتين للإصلاح. ميزة عالمية جديدة كواتساب وتيليجرام: الضغط المطوّل على أي تبويب في الشريط السفلي يُظهر فقاعة أنيقة باسم التبويب مع اهتزاز خفيف، والضغطة العادية تبقى انتقالًا فوريًا كما هي.';
try{APP_META.changelog.unshift({ver:'105.0',date:'2026-11-21',notes:'حارس ظهور الدروس (مسح تلقائي ضد الشفافية العالقة في كل التنقل)، فحص قاعدة البيانات بثلاث محاولات تلقائية ورسائل صادقة تشرح استيقاظ Supabase من السبات (HTTP 504)، وميزة الضغط المطوّل على تبويبات الشريط السفلي تُظهر اسم التبويب فقاعة أنيقة مثل واتساب وتيليجرام — والضغطة العادية تبقى انتقالًا فوريًا.'});}catch(eM105){}
window.fallbackNews18=function(){
  return [{title:'الإصدار 105.0 — الاستقرار الجذري + اللمسة العالمية',
    body:'حارس ظهور يمنع الدروس الفارغة نهائيًا، فحص سحابي ذكي بثلاث محاولات، وضغط مطوّل على التبويبات يُظهر أسماءها مثل واتساب وتيليجرام.',
    date:APP_META.date}];
};
window.x105t={ver:APP_META.ver,guard:true,longpress:true,dbretry:true};
})();
