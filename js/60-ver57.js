/* ===================== طبقة 57.0 - منصة X — الاحترافية والاستقرار والثبات ===================== */
/* 57.0 بيانات الإصدار */
try{
APP_META.ver='57.0';APP_META.date='2026-11-04';APP_META.lastUpdate='2026-11-04';
APP_META.notes='الإصدار 57 — الاحترافية والاستقرار والثبات: اكتُشف السبب الجذري الحقيقي لتعطل خلفيات معرض الصور وأُصلح نهائيًا (كانت طبقة التعتيم تُكتب كصورة أولى بلون مفرد بصيغة غير صالحة فيسقط المتصفح الخلفية كلها، فأُعيدت بصيغة تدرج صحيحة فتظهر خلفيات الصور في المعاينة وفي التطبيق في الوضعين معًا)، وارتفع حد إدخال رمز التحقق من 6 إلى 10 أرقام، وزر الرجوع صار يتذكر كل حركة داخل التطبيق — الصفحات والتبويبات السفلية والتبويبات الداخلية وخطوات الدخول — فيرجعك خطوة خطوة مثل التطبيقات العالمية، وزر الرجوع في الهاتف نفسه يعمل بنفس الذاكرة الكاملة ويغلق النوافذ المنبثقة أولًا.';
}catch(eV0){}
try{APP_META.changelog.unshift('الإصدار 57 — الاحترافية والاستقرار: إصلاح جذري نهائي لخلفيات معرض الصور، رمز التحقق حتى 10 أرقام، وزر رجوع كامل الذاكرة يعمل خطوة بخطوة في كل شيء.')}catch(eV1){}
try{
fallbackNews18=function(){
  return [{title:'الإصدار 57.0 — الاحترافية والاستقرار والثبات',
    body:'إصلاح جذري نهائي لخلفيات معرض الصور (اكتُشف السبب الحقيقي وأُصلح)، رمز التحقق حتى 10 أرقام، وزر رجوع يتذكر كل حركة خطوة بخطوة في التطبيق كله.',
    date:APP_META.date}];
};
}catch(eV2){}
/* 57.أ الخلفيات — الإصلاح الجذري الحقيقي: طبقة التعتيم كانت تُكتب rgba(…) كطبقة أولى مفردة
       وهذا غير صالح في CSS فيسقط المتصفح إعلان الخلفية كاملًا (لذلك ظهرت المعاينة فارغة
       ولم تظهر صور المعرض إطلاقًا). الصيغة الصحيحة: تدرج linear-gradient بنفس اللون مرتين. */
try{
x48PvCss=function(){
  var bgc='';
  try{
    if(X48.pimg){bgc='url("'+(''+X48.pimg).split('"').join('%22')+'")'}
    else{for(var i=0;i<X48_BGS.length;i++){if(X48_BGS[i].id===X48.pid){bgc=X48_BGS[i].css}}}
  }catch(eP0){}
  var d=(+X48.pdim||0)/100;
  var c=(x48EffTheme()==='light')?'244,247,252':'8,13,24';
  return 'linear-gradient(rgba('+c+','+d+'),rgba('+c+','+d+')),'+bgc;
};
x54BgApply=function(){
  try{
    var lay=x54BgLayerNode();
    var node=gid('x48-bgstyle');
    if(!node){node=document.createElement('style');node.id='x48-bgstyle';(document.head||document.documentElement).appendChild(node)}
    var ex=gid('x53-bgextra');
    if(!ex){ex=document.createElement('style');ex.id='x53-bgextra';(document.head||document.documentElement).appendChild(ex)}
    var eff=x48EffTheme();
    var img=x54BgResolve(eff);
    var id=(eff==='light')?(XCFG.bgL||'def'):(XCFG.bgD||'def');
    var pos=(eff==='light')?(XCFG.posL||'center'):(XCFG.posD||'center');
    var dim=(eff==='light')?(XCFG.dimL===undefined?.15:XCFG.dimL):(XCFG.dimD===undefined?.45:XCFG.dimD);
    var cssv='';
    if(img){cssv='url("'+(''+img).split('"').join('%22')+'")'}
    else if(id&&id!=='def'){for(var i=0;i<X48_BGS.length;i++){if(X48_BGS[i].id===id){cssv=X48_BGS[i].css}}}
    if(!cssv){lay.style.display='none';lay.style.background='';node.textContent='';ex.textContent='';return}
    var cc=(eff==='light')?'244,247,252':'8,13,24';
    var dm=(+dim||0);
    var ov='';
    if(img){ov='linear-gradient(rgba('+cc+','+dm+'),rgba('+cc+','+dm+')),'}
    var bs='background:'+ov+cssv+' !important;background-size:cover !important;background-position:'+((pos==='center')?'center':pos)+' !important;background-attachment:fixed !important';
    node.textContent='body{'+bs+'}body::before{'+bs+'}html{'+bs+'}#bg-canvas{display:none!important}@media print{#x54-bg{display:none!important}}';
    ex.textContent='';
    lay.style.display='block';
    lay.style.zIndex='0';
    lay.style.background=ov+cssv+' '+((pos==='center')?'center':pos)+' / cover no-repeat';
  }catch(e57B){}
};
try{x48BgApply()}catch(e57C){}
}catch(e57D){}
/* 57.ب رمز التحقق: الحد الأقصى 10 أرقام بدل 6 (يُطبَّق بعد كل عرض) */
/* 57.ج زر الرجوع الكامل: ذاكرة تحفظ كل حركة — الصفحات والتبويبات الداخلية وخطوات الدخول —
       وزر رجوع الهاتف يمشي في نفس الذاكرة ويغلق النوافذ المنبثقة أولًا */
var X57_HIST=[];
var X57_LAST=null;
var X57_LOCK=false;
var X57_NOPOP=0;
var X57_T0=+new Date();
var X57_KEYS=['page','subject','chapter','cycle','year','branch','mode','term','stab','atab','auth'];
function x57Snap(){
  var o={page:'home',y:0};
  try{
    o.page=((ROUTE&&ROUTE.page)||'home');
    o.subject=((ROUTE&&ROUTE.subject)||null);
    o.chapter=((ROUTE&&ROUTE.chapter)||null);
    o.cycle=(ROUTE&&ROUTE.cycle)||null;
    o.year=(ROUTE&&ROUTE.year)||null;
    o.branch=(ROUTE&&ROUTE.branch)||null;
    o.mode=(ROUTE&&ROUTE.mode)||null;
    o.term=(ROUTE&&ROUTE.term)||null;
    o.stab=(typeof X38_SET_TAB==='number')?X38_SET_TAB:0;
    o.atab=(typeof X38_ADM_TAB==='number')?X38_ADM_TAB:0;
    o.auth=(typeof AUTH!=='undefined'&&AUTH&&AUTH.tab)?(''+AUTH.tab):'';
    o.y=(window.pageYOffset||document.documentElement.scrollTop||0);
  }catch(eS0){}
  return o;
}
function x57Eq(a,b){
  var i;
  for(i=0;i<X57_KEYS.length;i++){
    var k=X57_KEYS[i];
    var va=(a&&a[k]!==undefined&&a[k]!==null)?a[k]:null;
    var vb=(b&&b[k]!==undefined&&b[k]!==null)?b[k]:null;
    if(va!==vb){return false}
  }
  return true;
}
function x57Hash(s){
  var p=['home','subject','lesson','quiz','subjects','cycle','year','subjecthub','pdflib','dash','profile','settings','admin','auth'];
  if(!s||!s.page||p.indexOf(s.page)<0){s={page:'home'}}
  var h='#/'+s.page;
  if(s.subject){h+='/'+s.subject}
  if(s.chapter){h+='/'+s.chapter}
  return h;
}
function x57Rec(cur){
  try{
    if(X57_LOCK){X57_LAST=cur;return}
    if(X57_LAST&&x57Eq(X57_LAST,cur)){X57_LAST=cur;return}
    if(X57_LAST){try{X57_LAST.y=cur.y}catch(eR0){}X57_HIST.push(X57_LAST);if(X57_HIST.length>60){X57_HIST.shift()}try{history.pushState({x57:1},'')}catch(eR1){}}
    X57_LAST=cur;
  }catch(eR2){}
}
function x57PopDiff(){
  while(X57_HIST.length){
    var p=X57_HIST.pop();
    if(p&&!x57Eq(p,x57Snap())){return p}
  }
  return null;
}
function x57Restore(s){
  X57_LOCK=true;
  try{
    if(s.auth&&typeof AUTH!=='undefined'&&AUTH){AUTH.tab=s.auth}
    try{X38_SET_TAB=(typeof s.stab==='number')?s.stab:0}catch(eS1){}
    try{X38_ADM_TAB=(typeof s.atab==='number')?s.atab:0}catch(eS2){}
    X30_HASH={page:s.page,subject:s.subject||null,chapter:s.chapter||null,cycle:s.cycle||null,year:s.year||null,branch:s.branch||null,tab:null,mode:s.mode||null,term:s.term||null};
  }catch(eS3){}
}
function x57Back(){
  try{if(gid('xmodal')){xCloseModal();return}}catch(eM3){}
  var hadStack=true;
  var p=x57PopDiff();
  if(!p){
    if(((ROUTE||{}).page)==='home'){try{toast('أنت في الصفحة الرئيسية')}catch(eT3){}return}
    p={page:'home'};hadStack=false;
  }
  x57Restore(p);
  try{render()}catch(eR3){}
  X57_LOCK=false;
  try{history.replaceState(null,'',x57Hash(p))}catch(eH4){}
  try{var yy=(+p.y||0);setTimeout(function(){try{window.scrollTo(0,yy)}catch(eS5){}},80)}catch(eS6){}
  if(hadStack){
    X57_NOPOP=1;
    try{history.back()}catch(eB2){X57_NOPOP=0}
    setTimeout(function(){X57_NOPOP=0},300);
  }
}
try{x41Back=function(){try{x57Back()}catch(eBB1){}}}catch(eBB2){}
try{
var __x57ST=x38SetTab;
x38SetTab=function(i){
  var r=__x57ST(i);
  try{x57Rec(x57Snap())}catch(eT57a){}
  return r;
};
}catch(eT57b){}
try{
var __x57AT=x38AdmTab;
x38AdmTab=function(i){
  var r=__x57AT(i);
  try{x57Rec(x57Snap())}catch(eT57c){}
  return r;
};
}catch(eT57d){}
try{
window.addEventListener('popstate',function(e){
  try{
    if(X57_NOPOP){X57_NOPOP=0;return}
    if((+new Date())-X57_T0<1200){return}
    var shadow=(e&&e.state&&e.state.x57)?1:0;
    try{if(gid('xmodal')){xCloseModal();try{history.pushState({x57:1},'')}catch(eP1){}return}}catch(eM2){}
    var p=x57PopDiff();
    if(!p){
      var pg=((ROUTE||{}).page)||'';
      if(pg!=='home'&&pg!=='auth'){p={page:'home'}}
      else{
        if(shadow){try{history.pushState({x57:1},'')}catch(eP2){}}
        else{
          try{toast('اضغط رجوع مرة أخرى للخروج')}catch(eT2){}
          try{X30_HASH={page:pg};setTimeout(function(){try{X30_HASH=null}catch(eC1){}},200)}catch(eC2){}
        }
        return;
      }
    }
    x57Restore(p);
    if(shadow){
      try{render()}catch(eR2){}
      X57_LOCK=false;
      try{var yy1=(+p.y||0);setTimeout(function(){try{window.scrollTo(0,yy1)}catch(eS1){}},80)}catch(eS2){}
    }else{
      setTimeout(function(){X57_LOCK=false;try{X30_HASH=null}catch(eC3){}},200);
      try{var yy2=(+p.y||0);setTimeout(function(){try{window.scrollTo(0,yy2)}catch(eS3){}},380)}catch(eS4){}
    }
    try{history.replaceState(null,'',x57Hash(p))}catch(eH3){}
  }catch(eX57){}
});
}catch(ePopReg){}
/* 57.د غلاف العرض: تفعيل حد الرمز 10 أرقام + تسجيل كل حركة في ذاكرة الرجوع */
try{
var __x57R=render;
render=function(){
  __x57R();
  try{
    var oc=gid('a-code');
    if(oc){
      try{oc.setAttribute('maxlength','10')}catch(eL1){}
      try{oc.maxLength=10}catch(eL2){}
      try{oc.setAttribute('placeholder','••••••••••')}catch(eL3){}
    }
    x57Rec(x57Snap());
  }catch(eR57){}
};
}catch(eR58){}
