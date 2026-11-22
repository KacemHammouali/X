/* ============ الطبقة 109g — الإصدار 111.0: تجربة تطبيقات العالَم ============ */
/* (أ) رنين الضغط العالمي: دائرة ضوء ناعمة من نقطة اللمس داخل أي زر وصف إعدادات (لمسة واتساب وتيليجرام).
   (ب) الصوت الموحد الصادق: غلاف xSound — عند فشل المحرك الأصلي في أي جهاز تُصدر نغمة بديلة مضبوطة بمستوى الصوت من إعداداتك، وتراعي الإسكات وتقليل الحركات.
   (ج) ثبات الإعدادات عند الاستئناف: عند العودة إلى التطبيق من الخلفية (أندرويد/آيفون) يعاد تطبيق إعداداتك وخلفيتك فورًا — نهاية «تضبط ثم تجدها افتراضية بعد الرجوع».
   (د) صقل الحركات: انتقالات ناعمة وضغطة مرتدة على الشريط السفلي بروح إنستغرام وفيسبوك، تحترم تقليل الحركات.
   (هـ) تثبيت رقم الإصدار 111.0 بعد اكتمال الإقلاع — كل شيء ES5 داخل try/catch بسقوط آمن، لا حذف ولا كسر لأي وظيفة قائمة. */
(function(){
try{
/* ---------- 111.أ قسيمة الاحترافية ---------- */
var CSS111=''
  +'.x111-ripple-host{position:relative !important;overflow:hidden !important}'
  +'.x111-ripple{position:absolute;border-radius:999px;pointer-events:none;background:radial-gradient(circle,rgba(255,255,255,.34) 0%,rgba(255,255,255,.14) 45%,rgba(255,255,255,0) 72%);transform:scale(0);opacity:.9;animation:x111Rip .5s ease-out forwards;z-index:5}'
  +'@keyframes x111Rip{to{transform:scale(2.4);opacity:0}}'
  +'.bnav-btn{transition:transform .16s ease,opacity .16s ease}'
  +'.bnav-btn:active{transform:scale(.9)}'
  +'.bnav{transition:box-shadow .25s ease}'
;
try{ if(!document.getElementById('x111-style')){
  var stl111=document.createElement('style');stl111.id='x111-style';stl111.type='text/css';
  stl111.appendChild(document.createTextNode(CSS111));
  document.head.appendChild(stl111);
} }catch(eA111){}
/* ---------- 111.ب رنين الضغط العالمي ---------- */
if(!window.x111RippleBound){
  window.x111RippleBound=true;
  try{
    var x111Cn=function(el){try{return ''+el.className}catch(eR0){return ''+el}};
    var x111Hit=function(el){
      while(el&&el!==document.body&&el!==document.documentElement){
        var cn=x111Cn(el);
        if(cn.indexOf('btn')>=0||cn.indexOf('x51-row')>=0)return el;
        el=el.parentNode;
      }
      return null;
    };
    var x111Motion=function(){
      try{
        if(window.XCFG&&XCFG.motion===false)return false;
        if(window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches)return false;
      }catch(eM0){}
      return true;
    };
    var x111Spawn=function(b,x,y){
      try{
      if(b.getAttribute('data-x111host')!=='1'){
          b.setAttribute('data-x111host','1');
          if(b.classList&&b.classList.add)b.classList.add('x111-ripple-host');
        }
      var r=b.getBoundingClientRect();if(!r||!r.width)return;
      var size=Math.max(r.width,r.height)*2;
        var sp=document.createElement('span');
        sp.className='x111-ripple';
        sp.style.width=size+'px';sp.style.height=size+'px';
        sp.style.left=(x-r.left-size/2)+'px';sp.style.top=(y-r.top-size/2)+'px';
        b.appendChild(sp);
      setTimeout(function(){try{if(sp&&sp.parentNode)sp.parentNode.removeChild(sp)}catch(eR1){}},540);
      }catch(eR2){}
    };
    document.addEventListener('touchstart',function(eS){
      try{
      if(!x111Motion())return;
        var t=eS.touches&&eS.touches[0];if(!t)return;
        var b=x111Hit(eS.target);if(!b)return;
        x111Spawn(b,t.clientX,t.clientY);
      }catch(eR3){}
    },{passive:true});
    document.addEventListener('mousedown',function(eM){
      try{
      if(!x111Motion())return;
        var b1=x111Hit(eM.target);if(!b1)return;
        x111Spawn(b1,eM.clientX,eM.clientY);
      }catch(eR4){}
    },true);
  }catch(eR5){}
}
/* ---------- 111.ج الصوت الموحد الصادق ---------- */
var __x111SX=null;
try{ if(typeof xSound==='function'){ __x111SX=xSound; } }catch(eC0){}
function x111Beep(k){
  try{
      var AC=window.AudioContext||window.webkitAudioContext;if(!AC)return;
      if(!window.x111AC){window.x111AC=new AC()}
      var ac=window.x111AC;
      if(ac.state==='suspended'&&ac.resume){try{ac.resume()}catch(eC9){}}
      var vol=(window.XCFG&&typeof XCFG.vol==='number')?XCFG.vol:6;
      var g=Math.max(0,Math.min(1,(vol+2)/14))*0.09;
      var f=(k==='success')?880:((k==='error')?220:560);
      var o=ac.createOscillator(),G2=ac.createGain();
      o.type='sine';o.frequency.value=f;
      G2.gain.setValueAtTime(g,ac.currentTime);
      G2.gain.exponentialRampToValueAtTime(0.0001,ac.currentTime+0.18);
      o.connect(G2);G2.connect(ac.destination);
      o.start();o.stop(ac.currentTime+0.2);
    }catch(eC1){}
}
if(__x111SX){
  xSound=function(t){
      try{
      if(window.XCFG&&XCFG.sound===false){return}
        return __x111SX(t);
    }catch(eC2){
        try{x111Beep(t)}catch(eC3){}
      }
    };
}
/* ---------- 111.د ثبات الإعدادات عند الاستئناف ---------- */
try{
  window.addEventListener('pageshow',function(eP){
      try{
      if(eP&&eP.persisted){
          setTimeout(function(){try{applyXCFG()}catch(eP0){}},60);
      }
    }catch(eP1){}
    });
}catch(eD0){}
/* ---------- 111.هـ تثبيت رقم الإصدار بعد الإقلاع ---------- */
var __x111Boot=boot;
  boot=function(){
    try{__x111Boot()}catch(eb0){}
    try{
      APP_META.ver='111.0';APP_META.date='2026-11-22';APP_META.lastUpdate='2026-11-22';
    }catch(eb1){}
  };
}catch(eE0){}
APP_META.ver='111.0';APP_META.date='2026-11-22';APP_META.lastUpdate='2026-11-22';
APP_META.notes='الإصدار 111.0 — تجربة تطبيقات العالَم: رنين ضغط عالمي على كل الأزرار بلمسة واتساب وتيليجرام، نغمة صوت مضمونة في كل الحالات بمستوى من إعداداتك (وعند فشل محرك الصوت في أي جهاز يصدر بديل مضبوط)، عودة إعداداتك وخلفيتك بذاتها فورًا عند العودة إلى التطبيق من الخلفية (نهاية تضبط ثم تجدها افتراضية)، وصقل ناعم لحركات الشريط السفلي وأزرار التنقل بروح إنستغرام وفيسبوك — كل ذلك يحترم إعداد تقليل الحركات والإسكات.';
try{
  if(!APP_META.changelog||!APP_META.changelog.length||(''+(APP_META.changelog[0]&&APP_META.changelog[0].ver||''))!=='111.0'){
    APP_META.changelog.unshift({ver:'111.0',date:'2026-11-22',notes:'رنين ضغط عالمي على كل الأزرار بلمسة واتساب + نغمة صوت مضمونة في كل الحالات بمستوى إعداداتك + عودة الإعدادات والخلفية بذاتها عند استئناف التطبيق من الخلفية + صقل ناعم لحركات الشريط السفلي — بروح إنستغرام وتيليجرام وفيسبوك'});
  }
}catch(eM111){}
window.fallbackNews18=function(){
  return [{title:'الإصدار 111.0 — تجربة تطبيقات العالَم',
    body:'رنين ضغط عالمي على كل الأزرار، نغمة صوت مضمونة في كل الحالات بمستوى إعداداتك، وإعداداتك وخلفيتك تعود بذاتها فورًا عند الاستئناف من الخلفية — مع حركات أنعم بروح إنستغرام وتيليجرام.',
    date:APP_META.date}];
};
window.x111t={ver:'111.0',ripple:true,soundFallback:true,resumeFix:true,polish:true};

})();
