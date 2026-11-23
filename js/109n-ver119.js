/* ================================================================
   منصة X التعليمية — طبقة الإصدار 119.0 (js/109n-ver119.js)
   © 2026 مؤسسة X.HAK (HAMMOUALI Kacem)
   «الحركة العالمية»: سباق تيليجرام وأنستقرام في التفاصيل الحية
   119.أ — انتقال شاشات: كل صفحة تدخل بحركة صعود ناعمة واحدة
   119.ب — دخول متدرج (stagger): البطاقات والصفوف تظهر تباعًا
   119.ج — مؤشر تبويب منزلق مضيء يطير بين الأزرار (تيليجرام)
   119.د — توهج زر رئيسي متحرك + حلقة شعار تدور ببطء (أنستقرام)
   119.هـ — احترام كامل لوضع الهدوء (x99-off / reduced-motion / XCFG.motion)
   ES5 فقط — آخر تعريف يفوز — لا مساس بjs/00-keys.js.
   ================================================================ */
;(function(){
'use strict';

/* ---------- ميتاداتا الإصدار ---------- */
try{
APP_META.ver='119.0';APP_META.date='2026-11-23';APP_META.lastUpdate='2026-11-23';
APP_META.notes='الإصدار 119 — الحركة العالمية: انتقال شاشات ناعم، ودخول متدرج للبطاقات والصفوف، ومؤشر تبويب منزلق مضيء يطير بين الأزرار، وتوهج زر متحرك وحلقة شعار دوارة، مع احترام وضع الهدوء وتقليل الحركة بالكامل.';
}catch(eM0){try{APP_META.ver='119.0'}catch(eM0b){}}
try{
if(APP_META.changelog&&APP_META.changelog.unshift){
  var h119=false;for(var ci=0;ci<APP_META.changelog.length;ci++){try{if((''+(APP_META.changelog[ci].ver||''))==='119.0'){h119=true;break}}catch(ec0){}}
  if(!h119){APP_META.changelog.unshift({ver:'119.0',date:'2026-11-23',notes:'الحركة العالمية: انتقالات الشاشات + مؤشر التبويب المنزلق + الدخول المتدرج + التوهجات الحية'});}
}
}catch(eM1){}

function fallbackNews18(){
  return [{title:'الإصدار 119 — الحركة العالمية',
    body:'انتقال شاشات ناعم، مؤشر تبويب يطير بين الأزرار، بطاقات تدخل تباعًا، وتوهجات حية — بأسلوب تطبيقات العالم الكبرى، مع احترام وضع الهدوء.',
    date:APP_META.date}];
}
try{window.fallbackNews18=fallbackNews18}catch(eM2){}

/* ---------- 119.أ/ب/د/هـ عقدة الأسلوب ---------- */
try{
var __x119s=document.createElement('style');
__x119s.id='x119-style';
__x119s.textContent=
 'html.x119-calm *{animation:none!important;transition:none!important}'+
 '@keyframes x119scr{from{opacity:0;transform:translateY(14px) scale(.995)}to{opacity:1;transform:none}}'+
 '#app > *{animation:x119scr .34s cubic-bezier(.22,.9,.28,1) both}'+
 '@media (prefers-reduced-motion:reduce){#app > *{animation:none!important}}'+
 '@keyframes x119up{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:none}}'+
 '.x51-row,.x66-card,.pv98{animation:x119up .4s cubic-bezier(.2,.9,.3,1) both}'+
 '.x51-row:nth-child(1),.x66-card:nth-child(1){animation-delay:.02s}'+
 '.x51-row:nth-child(2),.x66-card:nth-child(2){animation-delay:.06s}'+
 '.x51-row:nth-child(3),.x66-card:nth-child(3){animation-delay:.10s}'+
 '.x51-row:nth-child(4),.x66-card:nth-child(4){animation-delay:.14s}'+
 '.x51-row:nth-child(5),.x66-card:nth-child(5){animation-delay:.18s}'+
 '.x51-row:nth-child(6),.x66-card:nth-child(6){animation-delay:.22s}'+
 '@media (prefers-reduced-motion:reduce){.x51-row,.x66-card,.pv98{animation:none!important}}'+
 '.bnav{position:relative!important}'+
 '#x119-pill{position:absolute;bottom:5px;left:0;height:3px;width:48px;border-radius:4px;'+
 'background:linear-gradient(90deg,#35BDF2,#8B6CFF);box-shadow:0 0 14px rgba(53,189,242,.85);'+
 'transition:transform .32s cubic-bezier(.34,1.35,.5,1),width .32s ease;pointer-events:none;z-index:5}'+
 'body:not(.x119-pill-ready) #x119-pill{transition:none}'+
 'html.x119-pill-on .bnav .x97line{display:none!important}'+
 '@keyframes x119glow{0%,100%{box-shadow:0 6px 20px rgba(53,189,242,.30)}50%{box-shadow:0 8px 30px rgba(139,108,255,.48)}}'+
 '.btn-primary{animation:x119glow 3.6s ease-in-out infinite}'+
 '@media (prefers-reduced-motion:reduce){.btn-primary{animation:none!important}}'+
 '@keyframes x119spin{to{transform:rotate(360deg)}}'+
 '.x54-authlogo::before,#x97avc::before{content:"";position:absolute;inset:-3px;border-radius:inherit;'+
 'background:conic-gradient(from 0deg,#35BDF2,#8B6CFF,#5C8AE6,#35BDF2);z-index:-1;'+
 'animation:x119spin 7s linear infinite;opacity:.85}'+
 '.x54-authlogo,#x97avc{position:relative!important;overflow:visible!important}'+
 '@media (prefers-reduced-motion:reduce){.x54-authlogo::before,#x97avc::before{animation:none!important}}';
(document.head||document.documentElement).appendChild(__x119s);
}catch(eS0){}

/* ---------- 119.ج محرك المؤشر المنزلق ---------- */
var X119={pillOk:false,init:false};
try{window.X119=X119}catch(eA0){}

function x119Pill(){
  try{
    var nav=document.querySelector('.bnav');
    if(!nav){return}
    var on=nav.querySelector('.bnav-btn.bnav-on')||nav.querySelector('.bnav-on');
    var pill=document.getElementById('x119-pill');
    if(!on){
      if(pill){pill.style.opacity='0'}
      return;
    }
    if(!pill){
      pill=document.createElement('div');
      pill.id='x119-pill';
      nav.appendChild(pill);
      document.body.className=(' '+document.body.className+' ').indexOf(' x119-pill-ready ')<0
        ? document.body.className+=' x119-pill-ready' : 0;
    }
    var r=on.getBoundingClientRect();
    var nr=nav.getBoundingClientRect();
    if(r.width>0&&nr.width>0){
      pill.style.width=r.width+'px';
      pill.style.transform='translateX('+(r.left-nr.left)+'px)';pill.style.left='0';
      pill.style.right='auto';
      pill.style.opacity='1';
      X119.pillOk=true;
      document.documentElement.className+=' x119-pill-on';
    }
  }catch(eB0){}
}

function x119Init(){
  try{
    if(X119.init){return}
    X119.init=true;
    try{x119Pill()}catch(eI0){}
    try{
      if(typeof MutationObserver==='function'){
        var mo=new MutationObserver(function(){try{x119Pill()}catch(eI1){}});
        mo.observe(document.body,{attributes:true,subtree:true,attributeFilter:['class']});
      }
    }catch(eI2){}
    try{
      document.addEventListener('click',function(e2){
        try{
          var t=e2.target;
          while(t&&t!==document.body){
            if(t.className&&(' '+t.className+' ').indexOf(' bnav-btn ')>=0){setTimeout(x119Pill,30);break}
            t=t.parentNode;
          }
        }catch(eI3){}
      },true);
    }catch(eI4){}
    try{window.addEventListener('resize',function(){try{x119Pill()}catch(eI5){}})}catch(eI6){}
    try{setInterval(function(){try{x119Pill()}catch(eI7){}},1500)}catch(eI8){}
  }catch(eI9){}
}

function x119CalmApply(){
  try{
    var calm=false;
    try{if(typeof XCFG!=='undefined'&&XCFG&&XCFG.motion===false){calm=true}}catch(eC0){}
    try{if(window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches){calm=true}}catch(eC1){}
    try{if(document.documentElement.className.indexOf('x99-off')>=0){calm=true}}catch(eC2){}
    try{if(calm){document.documentElement.className+=' x119-calm'}}catch(eC3){}
  }catch(eC4){}
}

/* ---------- تثبيت رقم الإصدار بعد الإقلاع (أسلوب 118) + الإقلاع البدئي ---------- */
var V119='119.0';
function x119PinVer(){try{APP_META.ver=V119;APP_META.date='2026-11-23'}catch(eP1){}}
var prevBoot119=null;
try{prevBoot119=(typeof window.boot==='function')?window.boot:null}catch(eB0){}
var wrappedBoot119=function(){
  try{if(prevBoot119){prevBoot119()}}catch(eB1){}
  x119PinVer();
  try{setTimeout(x119PinVer,400)}catch(eB2){}
  try{setTimeout(x119PinVer,1500)}catch(eB3){}
  try{setTimeout(x119PinVer,4000)}catch(eB4){}
  x119CalmApply();
  try{setTimeout(x119Init,150)}catch(eB5){}
};
try{window.boot=wrappedBoot119}catch(eB5){try{boot=wrappedBoot119}catch(eB6){}}

/* ---------- ميتاداتا الأخيرة ---------- */
try{window.x119t=true}catch(eF1){}

})();
