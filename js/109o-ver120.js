/* ================================================================
   منصة X التعليمية — طبقة الإصدار 120.0 (js/109o-ver120.js)
   © 2026 مؤسسة X.HAK (HAMMOUALI Kacem)
   «التسوية»: إصلاح العيوب الخمسة بلمسات من لقطات المالك
   120.أ — نصوص عربية + لاتينية مكسورة (bidi): تُلف الدوال
           اللاتينية بترم LRM فتعطف يمينًا/يسارًا كما يجب
   120.ب — الأزرار العائمة: سهم «>» الذي يغطي المحتوى يُنزَع،
           وزر «↑» يستلم المكان المنضبط أسفل يسار
   120.ج — الخط المنزلق: نسخة أثبت تقيس offsetLeft لا إحداثيا
           الشاشة (مضادة للتشويش أثناء حركات الدخول)
   120.د — بطاقات الخدمات: شبكة عمودين منتظمة
   ES5 فقط — آخر تعريف يفوز — لا مساس بjs/00-keys.js.
   ================================================================ */
;(function(){
'use strict';

/* ---------- ميتاداتا الإصدار ---------- */
try{
APP_META.ver='120.0';APP_META.date='2026-11-23';APP_META.lastUpdate='2026-11-23';
APP_META.notes='الإصدار 120 — التسوية: زر «>» العائم الذي يغطي المحتوى نُزع، وزر «↑» بمكانه المنضبط، ونصوص «عن المؤسسة» مختلطة عربي/لاتيني صارت بترتيب سليم، والخط المنزلق في الشريط السفلي أثبت بالمليمتر، وبطاقات الخدمات بشبكة عمودين منتظمة.';
}catch(eM0){try{APP_META.ver='120.0'}catch(eM0b){}}
try{
if(APP_META.changelog&&APP_META.changelog.unshift){
  var h120=false;for(var ci=0;ci<APP_META.changelog.length;ci++){try{if((''+(APP_META.changelog[ci].ver||''))==='120.0'){h120=true;break}}catch(ec0){}}
  if(!h120){APP_META.changelog.unshift({ver:'120.0',date:'2026-11-23',notes:'التسوية: نزع زر العوائق + إصلاح النصوص المختلطة + ثبات الخط المنزلق + شبكة الخدمات'});}
}
}catch(eM1){}

function fallbackNews18(){
  return [{title:'الإصدار 120 — التسوية',
    body:'نزع الزر الذي يغطي المحتوى، ترتيب النصوص العربية الممزوجة باللاتينية، خط تبويب أثبت، وشبكة خدمات منتظمة.',
    date:APP_META.date}];
}
try{window.fallbackNews18=fallbackNews18}catch(eM2){}

/* ---------- 120.هـ عقدة الأسلوب ---------- */
try{
var __x120s=document.createElement('style');
__x120s.id='x120-style';
__x120s.textContent=
 /* 120.ج الخط المنزلق الأثبت: يحل محل 119 */
 '#x119-pill{display:none!important}'+
 '.bnav{position:relative!important}'+
 '#x120-pill{position:absolute;bottom:5px;height:3px;border-radius:4px;'+
 'background:linear-gradient(90deg,#35BDF2,#8B6CFF);box-shadow:0 0 14px rgba(53,189,242,.85);'+
 'transition:left .30s ease,width .30s ease;pointer-events:none;z-index:6;left:0;width:48px}'+
 /* 120.د شبكة الخدمات المنتظمة */
 '.pv98{display:grid!important;grid-template-columns:repeat(2,minmax(0,1fr))!important;gap:10px!important;text-align:right}'+
 /* 120.أ النصوص المختلطة: العزل يحمي القوس والسطر */
 '.x120-bidi{unicode-bidi:isolate}';
(document.head||document.documentElement).appendChild(__x120s);
}catch(eS0){}

/* ---------- 120.أ مصلح النصوص المختلطة ---------- */
function x120BidiOne(t){
  try{
    if(!t||t.length<4){return null}
    if(t.indexOf('\u200E')>=0){return null}
    var Q0=/[\u0600-\u06FF]/.test(t),Q1=/[A-Za-z0-9]{2,}/.test(t);
    if(!Q0||!Q1){return null}
    return t.replace(/\(?[A-Za-z][A-Za-z0-9.\-_.&\/ ]*\)?/g, function(seg){
      return '\u200E'+seg+'\u200E';
    });
  }catch(e){return null}
}
var X120={bidiHits:0,fabHidden:0,pillOk:false,init:false};
try{window.X120=X120}catch(eA0){}

function x120FixBidi(root){
  try{
    if(!document.createTreeWalker){return}
    var wr=document.createTreeWalker(root,NodeFilter.SHOW_TEXT,null,false);
    var n=wr.nextNode(),guard=0;
    while(n&&guard<150){
      guard++;
      var nv=x120BidiOne(n.nodeValue);
      if(nv!==null&&nv!==n.nodeValue){n.nodeValue=nv;X120.bidiHits++}
      n=wr.nextNode();
    }
  }catch(eB0){}
}

/* ---------- 120.ب زراريات عائمة: نزع العائق وترتيب المفيد ---------- */
function x120FabSweep(){
  try{
    var lvl1=document.body.children;
    var el,cs,txt,inner,k;
    for(var i=0;i<lvl1.length;i++){
      el=lvl1[i];
      try{cs=window.getComputedStyle?window.getComputedStyle(el):null}catch(eF0){cs=null}
      txt=(el.textContent||'').trim();
      var isChat=((' '+el.className+' ').indexOf(' bnav ')>=0)||(el.id&&el.id.indexOf('xdiag')===0);
      if(isChat){continue}
      if(cs&&cs.position==='fixed'){
        if(txt==='↑'||txt==='⬆'){
          try{
            el.style.left='14px';el.style.right='auto';
            el.style.bottom='calc(88px + env(safe-area-inset-bottom,0px))';
            el.style.width='50px';el.style.height='50px';
            el.style.zIndex='2147483000';
          }catch(eF1){}
        }else if(txt==='>'||txt==='›'||txt==='▶'||txt==='➤'||txt==='❯'){
          try{el.style.display='none';X120.fabHidden++}catch(eF2){}
        }
      }
      for(k=0;k<el.children.length;k++){
        try{
          inner=el.children[k];
          var cs2=window.getComputedStyle(inner);
          var txt2=(inner.textContent||'').trim();
          if(cs2&&cs2.position==='fixed'&&!isChat){
            if(txt2==='↑'){try{inner.style.left='14px';inner.style.right='auto';inner.style.bottom='calc(88px + env(safe-area-inset-bottom,0px))'}catch(eF3){}}
            else if(txt2==='>'||txt2==='›'||txt2==='▶'||txt2==='➤'||txt2==='❯'){try{inner.style.display='none';X120.fabHidden++}catch(eF4){}}
          }
        }catch(eF5){}
      }
    }
  }catch(eB1){}
}

/* ---------- 120.ج الخط المنزلق الأثبت ---------- */
function x120Pill(){
  try{
    var nav=document.querySelector('.bnav');
    if(!nav){return}
    var on=nav.querySelector('.bnav-btn.bnav-on')||nav.querySelector('.bnav-on');
    var pill=document.getElementById('x120-pill');
    if(!on){
      if(pill){pill.style.opacity='0'}
      return;
    }
    if(!pill){
      pill=document.createElement('div');
      pill.id='x120-pill';
      nav.appendChild(pill);
    }
    var Q2=on.offsetLeft,Q3=on.offsetWidth;
    if(Q2>=0&&Q3>0){
      pill.style.left=Q2+'px';
      pill.style.width=Q3+'px';
      pill.style.opacity='1';
      X120.pillOk=true;
    }
  }catch(eB2){}
}

/* ---------- حلقة الصيانة: بعد كل رسم إعادة كاملة ---------- */
var X120Dirty=false;
try{
  if(typeof MutationObserver==='function'){
    var mo120=new MutationObserver(function(){X120Dirty=true});
    mo120.observe(document.documentElement,{childList:true,subtree:true});
  }
}catch(eO0){}

function x120Tick(){
  try{
    if(!X120Dirty){return}
    X120Dirty=false;
    x120FixBidi(document.getElementById('app')||document.body);
    x120FabSweep();
    x120Pill();
  }catch(eB3){}
}
function x120Init(){
  try{
    if(X120.init){return}
    X120.init=true;
    X120Dirty=true;
    try{setInterval(function(){try{x120Tick()}catch(eT0){}},1200)}catch(eT1){}
    try{x120Tick()}catch(eT2){}
  }catch(eT3){}
}

/* ---------- تثبيت رقم الإصدار + الإقلاع البدئي (أسلوب 118/119) ---------- */
var V120='120.0';
function x120PinVer(){try{APP_META.ver=V120;APP_META.date='2026-11-23'}catch(eP1){}}
var prevBoot120=null;
try{prevBoot120=(typeof window.boot==='function')?window.boot:null}catch(eB0){}
var wrappedBoot120=function(){
  try{if(prevBoot120){prevBoot120()}}catch(eB1){}
  x120PinVer();
  try{setTimeout(x120PinVer,400)}catch(eB2){}
  try{setTimeout(x120PinVer,1500)}catch(eB3){}
  try{setTimeout(x120PinVer,4000)}catch(eB4){}
  x120CalmApply120();
  try{setTimeout(x120Init,200)}catch(eB5){}
};
function x120CalmApply120(){
  try{
    var calm=false;
    try{if(typeof XCFG!=='undefined'&&XCFG&&XCFG.motion===false){calm=true}}catch(eC0){}
    try{if(window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches){calm=true}}catch(eC1){}
    try{if(document.documentElement.className.indexOf('x99-off')>=0){calm=true}}catch(eC2){}
  }catch(eB9){}
}
try{window.boot=wrappedBoot120}catch(eB6){try{boot=wrappedBoot120}catch(eB7){}}

/* ---------- ميتاداتا الأخيرة ---------- */
try{window.x120t=true}catch(eF1){}

})();
