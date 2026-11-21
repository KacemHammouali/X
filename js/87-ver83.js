/* ===================== طبقة 83.0 — كل القوانين تُرسم حقيقة + شريط التطبيق أكبر قليلًا + فحص شامل ===================== */
/* 83.أ ضمان عام لكل القوانين: أي قانون متعدد الأسطر بشرطة عارية (خارج أي بيئة) يُحوَّل تلقائيًا إلى بيئة array فيُرسم معادلة حقيقية دائمًا — في الدروس والخلاصات وأي صفحة قادمة */
function x83FixTex(t){
  try{
    t=''+t;
    if(!t||t.indexOf('\\begin')>=0){return t}
    var rs='\\\\';
    if(t.indexOf(rs)<0){return t}
    var parts=t.split(rs),i,out='';
    for(i=0;i<parts.length;i++){
      parts[i]=parts[i].replace(/^\s+/,'').replace(/\s+$/,'');
      if(!parts[i]){continue}
      out+=parts[i];
      if(i<parts.length-1){out+=rs+'[4pt]'}
    }
    if(!out){return t}
    return '\\begin{array}{l}'+out+'\\end{array}';
  }catch(e0){return t}
}
var __x83MB=mathBlock;
mathBlock=function(tex){
  var fixed=tex;
  try{fixed=x83FixTex(tex)}catch(e1){fixed=tex}
  try{return __x83MB(fixed)}catch(e2){}
  try{return __x83MB(tex)}catch(e3){}
  return '';
};
/* 83.ب البديل المقروء بلا إنترنت أنظف من أي وقت: لا بقايا LaTeX خام أبدًا (إزالة \; و \\[4pt] وبيئات array/cases وأمثالها) */
var __x83TF=texFallback;
texFallback=function(tex){
  var s=''+tex;
  try{
    s=s.replace(/\\\\\[[^\]]*\]/g,'   ');
    s=s.replace(/\\begin\{[A-Za-z*]+\}(\{[^{}]*\})?/g,' ');
    s=s.replace(/\\end\{[A-Za-z*]+\}/g,' ');
    s=s.replace(/\\;/g,' ').replace(/\\:/g,' ').replace(/\\,/g,' ').replace(/\\!/g,'');
    s=s.replace(/\\ /g,' ').replace(/\\\{/g,'{').replace(/\\\}/g,'}');
  }catch(e0){}
  try{return __x83TF(s)}catch(e1){}
  return s;
};
/* 83.ج الشريط السفلي أكبر قليلًا في التطبيق فقط — وزر الرجوع يبقى فوقه بمسافة مريحة ثابتة لا يلمسه أبدًا */
function x83Style(){
  try{
    var el=gid('x83-style');
    if(!el){el=document.createElement('style');el.id='x83-style';(document.head||document.documentElement).appendChild(el)}
    el.textContent=
     'html:not(.x81web) .bnav{height:calc(68px + env(safe-area-inset-bottom,0px))!important;padding:7px 8px calc(7px + env(safe-area-inset-bottom,0px))!important}'+
     'html:not(.x81web) .bnav-btn{height:58px!important}'+
     'html:not(.x81web) .bnav-btn span{font-size:12.5px!important}'+
     'html:not(.x81web) body{padding-bottom:calc(92px + env(safe-area-inset-bottom,0px))!important}'+
     'html:not(.x81web) .x69-backbtn{bottom:calc(82px + env(safe-area-inset-bottom,0px))!important}'+
     'html:not(.x81web) .x41-back{bottom:calc(96px + env(safe-area-inset-bottom,0px))!important}';
  }catch(e0){}
}
try{x83Style()}catch(e1){}
/* 83.د هوية الإصدار */
APP_META.ver='83.0';APP_META.date='2026-11-06';APP_META.lastUpdate='2026-11-06';
APP_META.notes='الإصدار 83 — إصلاح كل قوانين الدروس من الجذر: كل قانون متعدد الأسطر يُرسم معادلة حقيقية دائمًا (وبديل مقروء نظيف تمامًا عند غياب الإنترنت)، شريط سفلي أكبر قليلًا في التطبيق فقط مع بقاء زر الرجوع في مكانه المريح فوقه، نص «التزايد الصارم» مصحح، وإغلاق صحيح للصفحة. فحص شامل: كل الأزرار (120) معرّفة والكود ES5 نظيف.';
try{APP_META.changelog.unshift({ver:'83.0',date:'2026-11-06',notes:'قوانين مرسومة من الجذر لكل الدروس والخلاصات + بديل مقروء نظيف بلا إنترنت + شريط التطبيق أكبر قليلًا بلا لمس زر الرجوع + تصحيح نصوص + إغلاق صحيح للصفحة.'})}catch(eV1){}
