/* =====================================================================
   X.HAK | v121.0 layer 109p - "النظافة النهائية"
   ---------------------------------------------------------------------
   ماذا يفعل هذا الملف (بالعربي):
   1) تصحيح اتجاه النص العربي/اللاتيني على مستوى كل عقدة نصية:
      - يضيف الفراغات المفقودة بين الكلمات العربية واللاتينية
        (مثال: "Xالتعليمية" تصبح "X التعليمية").
      - يحيط المقاطع اللاتينية بعلامة LRM حتى لا تتقطع في وسط الجملة
        (مثال: "الممخصاتPDF" تصبح "الممخصات PDF").
      - يثبت الأقواس المحيطة بالنص اللاتيني مثل (X.HAK Technologies)
        حتى لا تنكسر بين سطرين.
      - يعمل على العقد النصية فقط، فلا يدمر أي تنسيق داخلي (خط ملون، خط عريض).
   2) مسح نهائي للأزرار العائمة الشاردة:
      - أي عنصر ثابت/مطلق نصه ">" أو مشابه يخفى نهائيا (بعمق غير محدود).
      - زر السهم للأعلى "↑" يعاد تثبيته يمين أسفل فوق شريط التنقل.
      - عناصر شريط التنقل نفسه محمية ولا تلمس أبدا.
   3) حبة منزلقة (Pill) واحدة أسفل الشريط تحت الزر النشط،
      وإخفاء الخط القديم المكرر والشريط القديم نهائيا.
   4) ضبط الإصدار على 121.0 بعد الإقلاع، مع مراقب خفيف يعيد الفحص عند أي تغيير في الصفحة.
   ===================================================================== */

;(function(){
'use strict';

/* ---------- 0) بيانات الإصدار ---------- */
try{
  APP_META.ver='121.0';APP_META.date='2026-11-24';APP_META.lastUpdate='2026-11-24';
}catch(eM0){try{APP_META.ver='121.0'}catch(eM0b){}}
try{
  if(APP_META.changelog&&APP_META.changelog.unshift){
    var h121=false;
    for(var ci=0;ci<APP_META.changelog.length;ci++){
      try{if((''+(APP_META.changelog[ci].ver||''))==='121.0'){h121=true;break}}catch(ec0){}
    }
    if(!h121){APP_META.changelog.unshift({ver:'121.0',date:'2026-11-24',notes:'نظافة نهائية: تصحيح اتجاه النص، إخفاء الأزرار الشاردة، حبة منزلقة واحدة'});}
  }
}catch(eM1){}

function fallbackNews18(){
  try{
    return [{title:'تحديث 121.0',body:'نظافة نهائية للواجهة: نص عربي سليم، لا أزرار شاردة، شريط تنقل نظيف.',date:'2026-11-24'}];
  }catch(eN0){return []}
}
try{window.fallbackNews18=fallbackNews18}catch(eM2){}

/* ---------- 1) طبقة CSS: إخفاء غير مشروط للخط القديم ---------- */
try{
  var __x121s=document.createElement('style');
  __x121s.id='x121-style';
  __x121s.textContent=
    '#x119-pill{display:none!important}'+
    '.bnav{position:relative!important}'+
    '.bnav .x97line{display:none!important}'+
    '#x120-pill,#x121-pill{position:absolute;bottom:5px;height:3px;border-radius:4px;'+
      'background:linear-gradient(90deg,#35BDF2,#8B6CFF);box-shadow:0 0 14px rgba(53,189,242,.85);'+
      'transition:left .30s ease,width .30s ease;pointer-events:none;z-index:6;left:0;width:48px}';
  (document.head||document.documentElement).appendChild(__x121s);
}catch(eS0){}

var X121={paraHits:0,fabHidden:0,pillOk:false,init:false};
try{window.X121=X121}catch(eA0){}

/* ---------- 2) هنا الإصلاح الحقيقي لأخطاء الكتابة المتلاصقة ---------- */
/* يصحح نص عقدة نصية واحدة فقط (لا يدمر وسوم التنسيق الداخلي) */
function x121ParaT(t){
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

function x121FixNodeText(node){
  try{
    var t=node.nodeValue||'';
    if(!t||t.length<4){return}
    var fixed=x121ParaT(t);
    if(fixed!==null){node.nodeValue=fixed;X121.paraHits++}
  }catch(e){}
}

/* يتجول في العقد النصية فقط، ويتوقف عند الوسوم التفاعلية/الوسائط */
function x121WalkText(el){
  try{
    var cn=el.childNodes;
    for(var i=0;i<cn.length;i++){
      var ch=cn[i];
      if(ch.nodeType===3){x121FixNodeText(ch)}
      else if(ch.nodeType===1){
        var tg=(''+(ch.tagName||'')).toUpperCase();
        if(tg==='IMG'||tg==='SVG'||tg==='VIDEO'||tg==='INPUT'||tg==='TEXTAREA'||tg==='A'||tg==='BUTTON'||tg==='SCRIPT'||tg==='STYLE'){continue}
        x121WalkText(ch);
      }
    }
  }catch(e){}
}

/* يثبت الأقواس: "(" في آخر عقدة عربية ويتبعها لاتيني، أو ")" تبدأ بها عقدة وكان قبلها لاتيني */
function x121ParenTouch(el){
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
      if(/\(\s*$/.test(v)&&/[A-Za-z]/.test(nxT)){
        ch.nodeValue=v.replace(/\(\s*$/,'(\u200E');
      }else if(/^\s*\)/.test(v)&&/[A-Za-z0-9\u200E]/.test((pvT||'').slice(-1))){
        ch.nodeValue='\u200E'+v;
      }
    }
  }catch(e){}
}

function x121FixBidi(root){
  try{
    var els=root.querySelectorAll('p,h1,h2,h3,h4,h5,h6,div,span,footer,header,li');
    var guard=0;
    for(var i=0;i<els.length&&guard<250;i++){
      var el=els[i];
      x121WalkText(el);
      x121ParenTouch(el);
      guard++;
    }
  }catch(eB0){}
}

/* ---------- 3) المسح النهائي للأزرار العائمة الشاردة ---------- */
function x121FabSweep(){
  try{
    var suspect=document.querySelectorAll('div,button,a,span');
    var limit=(suspect.length>6000)?6000:suspect.length;
    for(var i=0;i<limit;i++){
      try{
        var el=suspect[i];
        if(!el||!el.style){continue}
        var txt=(el.textContent||'').trim();
        if(txt!=='>'&&txt!=='›'&&txt!=='▶'&&txt!=='➤'&&txt!=='❯'&&txt!=='↑'&&txt!=='⬆'){continue}
        var cs=null;
        try{cs=window.getComputedStyle?window.getComputedStyle(el):null}catch(eF0){cs=null}
        var pos=cs?cs.position:'';
        if(pos!=='fixed'&&pos!=='absolute'){continue}
        var isChat=((' '+(el.className||'')+' ').indexOf(' bnav ')>=0)||(el.id&&(''+el.id).indexOf('xdiag')===0)||(el.closest&&el.closest('.bnav'));
        if(isChat){continue}
        if(txt==='↑'||txt==='⬆'){
          try{
            el.style.left='14px';el.style.right='auto';el.style.top='auto';
            el.style.bottom='calc(88px + env(safe-area-inset-bottom,0px))';
            el.style.width='50px';el.style.height='50px';
            el.style.zIndex='2147483000';
          }catch(eF1){}
        }else{
          try{el.style.display='none';X121.fabHidden++}catch(eF2){}
        }
      }catch(eF3){}
    }
  }catch(eB1){}
}

/* ---------- 4) الحبة المنزلقة تحت الزر النشط ---------- */
function x121Pill(){
  try{
    var nav=document.querySelector('.bnav');
    if(!nav){return}
    var on=nav.querySelector('.bnav-btn.bnav-on')||nav.querySelector('.bnav-on');
    var pill=document.getElementById('x121-pill')||document.getElementById('x120-pill');
    if(!on){
      if(pill){pill.style.opacity='0'}
      return;
    }
    if(!pill){
      pill=document.createElement('div');
      pill.id='x121-pill';
      nav.appendChild(pill);
    }
    var Q2=on.offsetLeft,Q3=on.offsetWidth;
    if(Q2>=0&&Q3>0){
      pill.style.left=Q2+'px';
      pill.style.width=Q3+'px';
      pill.style.opacity='1';
      X121.pillOk=true;
    }
  }catch(eB2){}
}

/* ---------- 5) مراقبة التغييرات ومحرك الدوران ---------- */
var X121Dirty=true;
try{
  if(typeof MutationObserver==='function'){
    var mo121=new MutationObserver(function(){X121Dirty=true});
    mo121.observe(document.documentElement,{childList:true,subtree:true});
  }
}catch(eO0){}

function x121Tick(){
  try{
    if(!X121Dirty){return}
    X121Dirty=false;
    x121FixBidi(document.getElementById('app')||document.body);
    x121FabSweep();
    x121Pill();
  }catch(eB3){}
}

function x121Init(){
  try{
    if(X121.init){return}
    X121.init=true;
    X121Dirty=true;
    try{setInterval(function(){try{x121Tick()}catch(eT0){}},1000)}catch(eT1){}
    try{setTimeout(function(){try{X121Dirty=true;x121Tick()}catch(eT2){}},300)}catch(eT3){}
    try{x121Tick()}catch(eT4){}
  }catch(eT5){}
}

/* ---------- 6) غلاف الإقلاع: تثبيت الإصدار بعد الإقلاع القديم ---------- */
var V121='121.0';
function x121PinVer(){try{APP_META.ver=V121;APP_META.date='2026-11-24'}catch(eP1){}}
var prevBoot121=null;
try{prevBoot121=(typeof window.boot==='function')?window.boot:null}catch(eB0){}
var wrappedBoot121=function(){
  try{if(prevBoot121){prevBoot121()}}catch(eB1){}
  x121PinVer();
  try{setTimeout(x121PinVer,400)}catch(eB2){}
  try{setTimeout(x121PinVer,1500)}catch(eB3){}
  try{setTimeout(x121PinVer,4000)}catch(eB4){}
  x121CalmApply121();
  try{setTimeout(x121Init,200)}catch(eB5){}
};
function x121CalmApply121(){
  try{
    var calm=false;
    try{if(typeof XCFG!=='undefined'&&XCFG&&XCFG.motion===false){calm=true}}catch(eC0){}
    try{if(window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches){calm=true}}catch(eC1){}
    try{if(document.documentElement.className.indexOf('x99-off')>=0){calm=true}}catch(eC2){}
    /* v121: الوضع الهادئ محترم تلقائيا لأن الطبقة لا تضيف أي أنيميشن جديد */
  }catch(eB9){}
}
try{window.boot=wrappedBoot121}catch(eB6){try{boot=wrappedBoot121}catch(eB7){}}

try{window.x121t=true}catch(eF1){}

})();
