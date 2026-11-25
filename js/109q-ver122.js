/* =====================================================================
   X.HAK | v122.0 layer 109q - "الصفاء الهندسي"
   ---------------------------------------------------------------------
   ماذا يفعل هذا الملف (بالعربي):
   1) تصحيح اتجاه النص من الجذر: تجوال واحد شامل على كل العقد النصية
      تحت #app (دون توقف عند الروابط أو الخط العريض)، يصلح التلاصق
      («Xالتعليمية»، «X.HAKالتقنية») ويثبت الأقواس والجمل المختلطة.
   2) صيد زر الشيفرون الدائري المرسوم SVG (بلا نص): يُقاس مكانه
      بنسبة الشاشة — أي عنصر ثابت/مطلق صغير محتواه رسم SVG فقط
      وملتصق بأسفل الشاشة يُخفى (زر الرجوع العلوي والشريط السفلي
      وعناصر الصفحة العادية لمس حماية).
   3) رفع زر «↑» أعلى بوضوح فوق شريط التنقل كي لا يتراكب معه أبدا.
   4) تهدئة الشريط السفلي: لا أي حركة تحريك أو ارتعاش على الشريط
      وأزراره — الحبة المنزلقة وحدها ناعمة.
   5) ضمان الظهور: أي زر رجوع/عنصر واجهة عالق بشفافية يُنقذ تلقائيا
      بعد كل رسم صفحة (استمرار حارس 105 بذات القواعد).
   ===================================================================== */

;(function(){
'use strict';

/* ---------- 0) بيانات الإصدار ---------- */
try{
  APP_META.ver='122.0';APP_META.date='2026-11-25';APP_META.lastUpdate='2026-11-25';
}catch(eM0){try{APP_META.ver='122.0'}catch(eM0b){}}
try{
  if(APP_META.changelog&&APP_META.changelog.unshift){
    var h122=false;
    for(var ci=0;ci<APP_META.changelog.length;ci++){
      try{if((''+(APP_META.changelog[ci].ver||''))==='122.0'){h122=true;break}}catch(ec0){}
    }
    if(!h122){APP_META.changelog.unshift({ver:'122.0',date:'2026-11-25',notes:'الصفاء الهندسي: تصحيح النص من الجذر حتى داخل الروابط، صيد زر الشيفرون SVG بالمكان لا بالنص، رفع زر الصعود فوق الشريط، تهدئة كاملة للشريط السفلي'});}
  }
}catch(eM1){}

function fallbackNews18(){
  try{
    return [{title:'تحديث 122.0',body:'صفاء هندسي: نصوص سليمة داخل الروابط، لا أزرار شاردة SVG، زر صعود فوق الشريط، شريط سفلي ثابت هادئ.',date:'2026-11-25'}];
  }catch(eN0){return []}
}
try{window.fallbackNews18=fallbackNews18}catch(eM2){}

/* ---------- 1) CSS: تهدئة الشريط السفلي وحماية الحبة ---------- */
try{
  var __x122s=document.createElement('style');
  __x122s.id='x122-style';
  __x122s.textContent=
    '.bnav{position:relative!important;transform:none!important;animation:none!important;transition:none!important}'+
    '.bnav *{animation:none!important;transition:background-color .2s ease,color .2s ease}'+
    '#x119-pill{display:none!important}'+
    '.bnav .x97line{display:none!important}'+
    '#x120-pill,#x121-pill,#x122-pill{transition:left .30s ease,width .30s ease}';
  (document.head||document.documentElement).appendChild(__x122s);
}catch(eS0){}

var X122={paraHits:0,chevHidden:0,pillOk:false,init:false};
try{window.X122=X122}catch(eA0){}

/* ---------- 2) إصلاح النص المختلط على مستوى العقدة، شاملًا الروابط ---------- */
function x122ParaT(t){
  try{
    if(!t||t.length<4){return null}
    if(t.indexOf('\u200E')>=0){return null}
    var Q0=/[\u0600-\u06FF]/.test(t),Q1=/[A-Za-z0-9]/.test(t);
    if(!Q0||!Q1){return null}
    var Q2=t;
    Q2=Q2.replace(/([A-Za-z0-9\)\.\!])([\u0600-\u06FF])/g,'$1 $2');
    Q2=Q2.replace(/([\u0600-\u06FF])([A-Za-z0-9\(])/g,'$1 $2');
    Q2=Q2.replace(/\(?[A-Za-z][A-Za-z0-9.\-_.&\/ ]*\)?/g,function(seg){
      return '\u200E'+seg+'\u200E';
    });
    return Q2!==t?Q2:null;
  }catch(e){return null}
}

function x122FixNodeText(node){
  try{
    var t=node.nodeValue||'';
    if(!t||t.length<4){return}
    var fixed=x122ParaT(t);
    if(fixed!==null){node.nodeValue=fixed;X122.paraHits++}
  }catch(e){}
}

/* تجوال شامل: لا يتوقف عند a أو b أو span — يتوقف فقط عند الوسوم الخام */
function x122WalkText(el){
  try{
    var cn=el.childNodes;
    for(var i=0;i<cn.length;i++){
      var ch=cn[i];
      if(ch.nodeType===3){x122FixNodeText(ch)}
      else if(ch.nodeType===1){
        var tg=(''+(ch.tagName||'')).toUpperCase();
        if(tg==='SCRIPT'||tg==='STYLE'||tg==='TEXTAREA'||tg==='INPUT'||tg==='IMG'||tg==='VIDEO'||tg==='IFRAME'||tg==='SVG'){continue}
        x122WalkText(ch);
      }
    }
  }catch(e){}
}

/* تثبيت الأقواس العابرة للعقد */
function x122ParenTouch(el){
  try{
    var cn=el.childNodes;
    for(var i=0;i<cn.length;i++){
      var ch=cn[i];
      if(ch.nodeType!==3){continue}
      var v=ch.nodeValue||'';
      if(v.indexOf('\u200E')>=0){continue}
      var nx=ch.nextSibling;
      var nxT=nx?((nx.nodeType===3)?(nx.nodeValue||''):(''+(nx.textContent||''))):'';
      var pv=ch.previousSibling;
      var pvT=pv?((pv.nodeType===3)?(pv.nodeValue||''):(''+(pv.textContent||''))):'';
      if(/[A-Za-z]/.test(v)&&/[\u0600-\u06FF]/.test(pvT)&&!/[\u0600-\u06FF]/.test(v)){
        ch.nodeValue='\u200E'+v+'\u200E';
      }else if(/\(\s*$/.test(v)&&/[A-Za-z]/.test(nxT)){
        ch.nodeValue=v.replace(/\(\s*$/,'(\u200E');
      }else if(/^\s*\)/.test(v)&&/[A-Za-z0-9\u200E]/.test((pvT||'').slice(-1))){
        ch.nodeValue='\u200E'+v;
      }
    }
  }catch(e){}
}

function x122FixBidi(root){
  try{
    if(!root){return}
    var els=root.querySelectorAll('p,h1,h2,h3,h4,h5,h6,li,footer,header,div,span,a,b,strong,em,label,button');
    var guard=0;
    for(var i=0;i<els.length&&guard<900;i++){
      var el=els[i];
      x122WalkText(el);
      x122ParenTouch(el);
      guard++;
    }
  }catch(eB0){}
}

/* ---------- 3) صيد الشيفرون الدائري SVG بالمكان (لا بالنص) ---------- */
function x122ChevSweep(){
  try{
    var suspect=document.querySelectorAll('div,button,a,span');
    var limit=(suspect.length>6000)?6000:suspect.length;
    for(var i=0;i<limit;i++){
      try{
        var el=suspect[i];
        if(!el||!el.style){continue}
        var html=''+(el.innerHTML||'');
        if(html.indexOf('<svg')<0){continue}
        var txt=(''+(el.textContent||'')).replace(/\s+/g,'');
        if(txt!==''){continue}
        var cs=null;
        try{cs=window.getComputedStyle?window.getComputedStyle(el):null}catch(eF0){cs=null}
        var pos=cs?cs.position:'';
        if(pos!=='fixed'&&pos!=='absolute'){continue}
        var btm=(cs&&cs.bottom)?parseFloat(cs.bottom):NaN;
        if(isNaN(btm)||btm>Math.max(160,window.innerHeight*0.28)){continue}
        var isSafe=((' '+(el.className||'')+' ').indexOf(' bnav ')>=0)||
                   (el.id&&(''+el.id).indexOf('xdiag')===0)||
                   (el.closest&&el.closest('.bnav'));
        if(isSafe){continue}
        try{el.style.display='none';X122.chevHidden++}catch(eF2){}
      }catch(eF3){}
    }
  }catch(eB1){}
}

/* ---------- 4) زر الصعود يرتفع فوق الشريط بوضوح ---------- */
function x122UpFix(){
  try{
    var suspect=document.querySelectorAll('div,button,a,span');
    var limit=(suspect.length>6000)?6000:suspect.length;
    for(var i=0;i<limit;i++){
      try{
        var el=suspect[i];
        if(!el||!el.style){continue}
        var txt=(''+(el.textContent||'')).trim();
        if(txt!=='↑'&&txt!=='⬆'){continue}
        var cs=null;
        try{cs=window.getComputedStyle?window.getComputedStyle(el):null}catch(eF0){cs=null}
        var pos=cs?cs.position:'';
        if(pos!=='fixed'&&pos!=='absolute'){continue}
        var isSafe=((' '+(el.className||'')+' ').indexOf(' bnav ')>=0)||(el.closest&&el.closest('.bnav'));
        if(isSafe){continue}
        el.style.left='14px';el.style.right='auto';el.style.top='auto';
        el.style.bottom='calc(112px + env(safe-area-inset-bottom,0px))';
        el.style.width='50px';el.style.height='50px';
        el.style.zIndex='2147483000';
        el.style.opacity='1';el.style.visibility='visible';el.style.transform='none';
      }catch(eF1){}
    }
  }catch(eB2){}
}

/* ---------- 5) إنقاذ أي زر/عنصر واجهة عالق بشفافية بعد كل رسم ---------- */
function x122Unstick(){
  try{
    var stuck=document.querySelectorAll('.fade-in,.lesson-view,.x72-toc,#x71lpb,#x72sec-bd,button,a.bnav-btn,.btn-primary');
    var guard=0;
    for(var i=0;i<stuck.length&&guard<200;i++){
      try{
        var el=stuck[i];
        var cs=null;
        try{cs=window.getComputedStyle?window.getComputedStyle(el):null}catch(e0){cs=null}
        if(cs&&cs.opacity==='0'&&cs.animationName==='none'){
          el.style.opacity='1';el.style.visibility='visible';
        }
        guard++;
      }catch(e1){}
    }
  }catch(eB3){}
}

/* ---------- 6) الحبة المنزلقة ---------- */
function x122Pill(){
  try{
    var nav=document.querySelector('.bnav');
    if(!nav){return}
    var on=nav.querySelector('.bnav-btn.bnav-on')||nav.querySelector('.bnav-on');
    var pill=document.getElementById('x122-pill')||document.getElementById('x121-pill')||document.getElementById('x120-pill');
    if(!on){
      if(pill){pill.style.opacity='0'}
      return;
    }
    if(!pill){
      pill=document.createElement('div');
      pill.id='x122-pill';
      nav.appendChild(pill);
    }
    var Q2=on.offsetLeft,Q3=on.offsetWidth;
    if(Q2>=0&&Q3>0){
      pill.style.left=Q2+'px';
      pill.style.width=Q3+'px';
      pill.style.opacity='1';
      X122.pillOk=true;
    }
  }catch(eB2){}
}

/* ---------- 7) المراقب ومحرك الدوران ---------- */
var X122Dirty=true;
try{
  if(typeof MutationObserver==='function'){
    var mo122=new MutationObserver(function(){X122Dirty=true});
    mo122.observe(document.documentElement,{childList:true,subtree:true});
  }
}catch(eO0){}

function x122Tick(){
  try{
    if(!X122Dirty){return}
    X122Dirty=false;
    x122FixBidi(document.getElementById('app')||document.body);
    x122ChevSweep();
    x122UpFix();
    x122Pill();
    x122Unstick();
  }catch(eB3){}
}

function x122Init(){
  try{
    if(X122.init){return}
    X122.init=true;
    X122Dirty=true;
    try{setInterval(function(){try{x122Tick()}catch(eT0){}},1000)}catch(eT1){}
    try{setTimeout(function(){try{X122Dirty=true;x122Tick()}catch(eT2){}},300)}catch(eT3){}
    try{x122Tick()}catch(eT4){}
  }catch(eT5){}
}

/* ---------- 8) غلاف الإقلاع: تثبيت 122.0 بعد الإقلاع القديم ---------- */
var V122='122.0';
function x122PinVer(){try{APP_META.ver=V122;APP_META.date='2026-11-25'}catch(eP1){}}
var prevBoot122=null;
try{prevBoot122=(typeof window.boot==='function')?window.boot:null}catch(eB0){}
var wrappedBoot122=function(){
  try{if(prevBoot122){prevBoot122()}}catch(eB1){}
  x122PinVer();
  try{setTimeout(x122PinVer,400)}catch(eB2){}
  try{setTimeout(x122PinVer,1500)}catch(eB3){}
  try{setTimeout(x122PinVer,4000)}catch(eB4){}
  try{setTimeout(x122Init,200)}catch(eB5){}
};
try{window.boot=wrappedBoot122}catch(eB6){try{boot=wrappedBoot122}catch(eB7){}}

try{window.x122t=true}catch(eF1){}

})();
