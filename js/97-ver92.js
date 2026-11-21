/* ============ الطبقة 92 — الإصدار 92.0: خلاصة تُستجيب فورًا + تنقل مميز بحبة مؤشر متحركة + تذييل رسمي + أيقونات مواد مرسومة ============ */
try{

/* 92.أ CSS */
function x92Style(){
  try{
    var el=gid('x92-style');
    if(!el){el=document.createElement('style');el.id='x92-style';(document.head||document.documentElement).appendChild(el)}
    el.textContent=
     '.kp-box .kp-slide{display:none!important}'+
     '.kp-box:not(.x92-law) .kp-slide:nth-of-type(1){display:block!important}'+
     '.kp-box.x92-law .kp-slide:nth-of-type(2){display:block!important}'+
     '.bnav-btn.bnav-on:before{display:none!important}'+
     '#x92pill{position:fixed;display:none;z-index:4200;pointer-events:none;width:46px;height:4.5px;border-radius:99px;background:linear-gradient(90deg,#35BDF2,#8B6CFF);box-shadow:0 0 10px rgba(53,189,242,.5)}'+
     'html[data-theme="light"] #x92pill{background:linear-gradient(90deg,#168EBF,#7657DB);box-shadow:none}'+
     'body.x55vid #x92pill{opacity:0}'+
     '#app.x92-enter-l.x89-enter>*:not(nav){animation:none!important}'+
     '#app.x92-enter-r.x89-enter>*:not(nav){animation:none!important}'+
     '#app.x92-enter-l>*:not(nav){animation:x92inL .34s cubic-bezier(.22,.68,.32,1)}'+
     '#app.x92-enter-r>*:not(nav){animation:x92inR .34s cubic-bezier(.22,.68,.32,1)}'+
     '@keyframes x92inL{from{opacity:0;transform:translateX(-26px) translateY(10px)}to{opacity:1;transform:none}}'+
     '@keyframes x92inR{from{opacity:0;transform:translateX(26px) translateY(10px)}to{opacity:1;transform:none}}'+
     '@media (prefers-reduced-motion:reduce){#app.x92-enter-l>*:not(nav){animation:none!important}#app.x92-enter-r>*:not(nav){animation:none!important}}'+
     'html{scroll-behavior:auto!important}'+
     '.x92-sbadge{display:inline-flex;align-items:center;justify-content:center;width:44px;height:44px;border-radius:13px;background:linear-gradient(135deg,#1E8FE8,#8B6CFF);color:#fff!important;vertical-align:-12px;margin:2px 0 10px 12px;box-shadow:0 6px 16px rgba(64,140,255,.28)}'+
     '.x92-sbadge svg{width:25px;height:25px;display:block}'+
     'html[data-theme="light"] .x92-sbadge{background:linear-gradient(135deg,#168ECF,#7657DB)}';
  }catch(eS){}
}
try{x92Style()}catch(eS2){}

/* 92.ب خلاصة الدرس: التبديل على مستوى الصفحة نفسها — يعمل مع أي ترميز */
function x92KpShow(i){
  var idx=(i===1)?1:0;
  try{KPI=idx}catch(eK){}
  try{
    var boxes=document.querySelectorAll('.kp-box');
    for(var bi=0;bi<boxes.length;bi++){
      var bx=boxes[bi];var cn=' '+bx.className+' ';
      if(idx===1){if(cn.indexOf(' x92-law ')<0){bx.className=bx.className+' x92-law'}}
      else{bx.className=(''+bx.className).replace(/ x92-law/g,'').replace(/x92-law/g,'')}
    }
  }catch(eB){}
  try{
    for(var j=0;j<2;j++){var b=document.getElementById('kpt'+j);if(b){b.className='kpt'+(j===idx?' kpt-on':'')}}
    var d=document.getElementById('kpdots');
    if(d){var s=d.children;for(var k=0;k<s.length;k++){s[k].className='kpd'+(k===idx?' kpd-on':'')}}
  }catch(eD){}
}
window.kpTab=function(i){try{x92KpShow(i)}catch(e){}};
window.kpMove=function(dlt){try{x92KpShow(((KPI||0)+dlt+2)%2)}catch(e){}};
window.kpSync=function(){try{x92KpShow(KPI||0)}catch(e){}};
window.x90Kp=function(cid,i){try{x92KpShow(i)}catch(e){}};
window.x88KpShow=function(i){try{x92KpShow(i)}catch(e){}};
window.x87KpShow=function(i){try{x92KpShow(i)}catch(e){}};
try{
  document.addEventListener('click',function(e){
    try{
      var t=e.target;var g=0;
      while(t&&t.nodeType===1&&g<12){
        if(t.id==='kpt0'){x92KpShow(0);break}
        if(t.id==='kpt1'){x92KpShow(1);break}
        t=t.parentNode;g++;
      }
    }catch(eC){}
  },true);
}catch(eL){}

/* 92.ج رأس المادة والدرس بأيقونة مرسومة بلا رموز تنكسر */
window.x92SubjIco=function(sid){
  var s=(''+(sid||''));var inner='';
  if(s==='math'){inner='<path d="M4 20 L15 5"/><circle cx="7" cy="17" r="2.6"/><path d="M12.5 10.5 C16 8 20 10 19 13.5 C18 17 13 16.5 12.5 20"/>'}
  else if(s==='phys'){inner='<circle cx="12" cy="12" r="2.1"/><ellipse cx="12" cy="12" rx="9" ry="3.5"/><ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(62 12 12)"/><ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(118 12 12)"/>'}
  else{inner='<path d="M5.5 4.5 h8.5 a3 3 0 0 1 3 3 v12"/><path d="M5.5 4.5 v13 a2.5 2.5 0 0 0 2.5 2.5 h9"/><path d="M11 9 h4"/>'}
  return '<span class="x92-sbadge"><svg viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round">'+inner+'</svg></span>';
};
window.x92LecIco=function(sid){return window.x92SubjIco(sid)};

/* 92.د حبة المؤشر المتحركة فوق الزر النشط — عنصر ثابت ينجو من كل إعادة رسم */
function x92PillNow(){
  try{
    var nav=document.querySelector('nav.bnav');
    if(!nav){nav=document.querySelector('.bnav')}
    var pl=document.getElementById('x92pill');
    if(!nav){if(pl){pl.style.display='none'}return}
    var btn=null;var kds=nav.querySelectorAll('.bnav-btn');
    for(var i=0;i<kds.length;i++){if((' '+kds[i].className+' ').indexOf(' bnav-on ')>=0){btn=kds[i];break}}
    if(!btn){if(pl){pl.style.display='none'}return}
    if(!pl){pl=document.createElement('div');pl.id='x92pill';(document.body||document.documentElement).appendChild(pl)}
    pl.style.display='block';
    var fresh=(!pl.getAttribute('data-x92'));
    if(fresh){pl.setAttribute('data-x92','1');pl.style.transition='none'}
    var br=btn.getBoundingClientRect();
    pl.style.top=(br.top)+'px';
    pl.style.left=(br.left+((br.width-46)/2))+'px';
    if(fresh){setTimeout(function(){try{pl.style.transition='left .34s cubic-bezier(.32,.72,.28,1),top .34s cubic-bezier(.32,.72,.28,1)'}catch(eT){}},40);pl.setAttribute('data-x92','2')}
  }catch(eP){}
}
try{window.addEventListener('resize',function(){try{x92PillNow()}catch(e){}})}catch(eR2){}
var x92PillT=null;
function x92Pill(){
  try{if(x92PillT){clearTimeout(x92PillT)}}catch(eC1){}
  try{x92PillT=setTimeout(function(){try{x92PillNow()}catch(e){}},30)}catch(eC2){}
}

/* 92.هـ تنقل مميز اتجاهي + حبة تنزلق بين التبويبات */
var X92_ORDER=['home','subjects','progress','profile','settings'];
function x92Idx(pg){for(var i=0;i<X92_ORDER.length;i++){if(X92_ORDER[i]===pg){return i}}return -1}
var __x92NAV=navigate;var x92dir=0;
navigate=function(a,b,c){
  var from=-1;try{from=x92Idx(ROUTE&&ROUTE.page?ROUTE.page:'')}catch(eF){}
  x92dir=0;
  try{__x92NAV(a,b,c)}catch(eN){}
  var to=-1;try{to=x92Idx(ROUTE&&ROUTE.page?ROUTE.page:'')}catch(eT){}
  if(from>=0&&to>=0&&to!==from){x92dir=(to>from)?1:-1}
};
var __x92R=render;
render=function(){
  var d=x92dir;x92dir=0;var rr;
  try{rr=__x92R.apply(this,arguments)}catch(eR){}
  try{
    var ap=document.getElementById('app');
    if(ap){
      ap.classList.remove('x92-enter-l');ap.classList.remove('x92-enter-r');
      void ap.offsetWidth;
      if(d>0){ap.classList.add('x92-enter-l')}
      else if(d<0){ap.classList.add('x92-enter-r')}
    }
  }catch(eA){}
  try{x92Style()}catch(eS3){}
  try{x92KpShow(KPI===1?1:0)}catch(eK2){}
  try{x92PillNow()}catch(eP2){}
  try{x92Pill()}catch(eP3){}
  try{setTimeout(x92PillNow,180)}catch(eT3){}
  try{setTimeout(x92PillNow,760)}catch(eT4){}
  return rr;
};

/* 92.و هوية الإصدار */
APP_META.ver='92.0';APP_META.date='2026-11-07';APP_META.lastUpdate='2026-11-07';
APP_META.notes='الإصدار 92 — الاستجابة الفورية والتنقل المميز: زرا «أهم الملاحظات/القوانين» يعملان فورًا في أي درس، حبة مؤشر تنزلق بين التبويبات مع انتقال ناعم للصفحات، تذييل رسمي، وأيقونات مرسومة لرؤوس المواد.';
try{APP_META.changelog.unshift('الإصدار 92.0 (2026-11-07): إصلاح جذري لتبديل خلاصة الدرس يعمل فورًا في أي درس + حبة مؤشر متحركة تنزلق بين التبويبات + انتقال صفحات اتجاهي ناعم بلا قفز + أيقونات SVG مرسومة لرؤوس المواد والدروس بدل الرموز المنكسرة + تذييل رسمي: جميع الحقوق محفوظة © 2026.')}catch(eV92){}
}catch(eW92){}
