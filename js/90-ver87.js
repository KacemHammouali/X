/* ===================== طبقة الإصدار 87.0 — الاستقرار والثبات والاحترافية النهائية ===================== */
/* 87.أ CSS: مؤشر تبويب شريطي أنيق بدل المثلث + إزالة المثلثات الزخرفية + أيقونات المواد كبيرة واضحة + تثبيت هندسة تبويب الخلاصة */
function x87Style(){
  try{
    var el=gid('x87-style');
    if(!el){el=document.createElement('style');el.id='x87-style';(document.head||document.documentElement).appendChild(el)}
    el.textContent=
     '/* 87: مؤشر التبويب النشط — شريط مستدير أنيق (نمط عالمي) */'+
     '.bnav-btn.bnav-on:before{content:""!important;position:absolute!important;top:0!important;left:50%!important;margin-left:-11px!important;width:22px!important;height:4px!important;border:0!important;border-radius:99px!important;background:linear-gradient(90deg,#35BDF2,#8B6CFF)!important;box-shadow:0 0 8px rgba(53,189,242,.45)!important}'+
     'html[data-theme="light"] .bnav-btn.bnav-on:before{background:linear-gradient(90deg,#168EBF,#7657DB)!important;box-shadow:none!important}'+
     '/* 87: إزالة المثلثات الزخرفية التي تظهر كفتحات في الرؤوس */'+
     '.lesson-header:before,.x54-authhero:before,.x51-hero:before,.x48-hero:before,.hero:before{display:none!important;content:none!important}'+
     '/* 87: أيقونات المواد كبيرة واضحة داخل شارة متدرجة */'+
     '.x17-subj .x17-row>svg{width:58px;height:58px;flex:0 0 auto;padding:13px;box-sizing:border-box;border-radius:17px;background:linear-gradient(135deg,#1E8FE8,#8B6CFF);color:#fff!important;stroke-width:1.6;box-shadow:0 6px 16px rgba(64,140,255,.25);margin-top:2px}'+
     'html[data-theme="light"] .x17-subj .x17-row>svg{background:linear-gradient(135deg,#168ECF,#7657DB)}'+
     '/* 87: هندسة تبويب الخلاصة مثبتة */'+
     '.kp-vp{position:relative}'+
     '.kp-track{width:100%!important}'+
     '.kp-slide{flex:0 0 100%!important;min-width:100%!important;width:100%!important}'+
     '.kpt{min-height:44px}';
  }catch(eS0){}
}
try{x87Style()}catch(eS1){}

/* 87.ب إصلاح جذري لتنقل «أهم الملاحظات / القوانين» في خلاصة الدرس — يعمل دائمًا باللمس والنقر والسحب */
function x87KpShow(i){
  try{KPI=(i===1)?1:0}catch(eK){KPI=0}
  try{
    var tr=gid('kptrack');
    if(tr){tr.style.willChange='transform';tr.style.transform='translateX('+(KPI?'-100%':'0')+')'}
  }catch(eT){}
  try{
    for(var j=0;j<2;j++){var b=gid('kpt'+j);if(b){b.className='kpt'+(j===KPI?' kpt-on':'')}}
  }catch(eB){}
  try{
    var d=gid('kpdots');
    if(d){var s=d.children;for(var k=0;k<s.length;k++){s[k].className='kpd'+(k===KPI?' kpd-on':'')}}
  }catch(eD){}
}
try{
  window.kpTab=function(i){try{x87KpShow(i)}catch(e){}};
  window.kpMove=function(d){try{x87KpShow((KPI+d+2)%2)}catch(e){}};
}catch(eW){}
try{
  document.addEventListener('click',function(e){
    try{
      var t=e.target;var guard=0;
      while(t&&t.nodeType===1&&guard<12){
        if(t.id==='kpt0'){x87KpShow(0);break}
        if(t.id==='kpt1'){x87KpShow(1);break}
        t=t.parentNode;guard++;
      }
    }catch(eC){}
  },false);
}catch(eL){}

/* 87.ج زر مشاركة واحد فقط + إزالة كل الشروح الداخلية من صفحة «التطبيق وحول» */
function x87ShareFix(){
  try{
    if(!document.querySelector('.x48-infocard')){return}
    var btns=document.querySelectorAll('button'),kept=null,i;
    for(i=0;i<btns.length;i++){
      var t0=(''+(btns[i].textContent||'')).replace(/\s+/g,' ');
      if(!kept&&t0.indexOf('مشاركة')>=0){kept=btns[i]}
    }
    for(i=0;i<btns.length;i++){
      var b=btns[i];var tx=(''+(b.textContent||'')).replace(/\s+/g,' ');
      if(b===kept){try{b.className='btn btn-sm btn-primary'}catch(e1){}continue}
      if(tx.indexOf('مشاركة')>=0||tx.indexOf('رابط التنزيل')>=0||tx.indexOf('نسخ الرابط')>=0||tx.indexOf('نسخ رابط')>=0){try{b.parentNode.removeChild(b)}catch(e2){}}
    }
    var secs=document.querySelectorAll('section');
    for(i=0;i<secs.length;i++){
      var s=secs[i];var hh=s.querySelector('h3');
      if(!hh||((''+hh.textContent).indexOf('شارك التطبيق')<0)){continue}
      var ps=s.querySelectorAll('p');
      for(var j=0;j<ps.length;j++){try{ps[j].parentNode.removeChild(ps[j])}catch(e3){}}
    }
    var ps2=document.querySelectorAll('p');
    for(i=0;i<ps2.length;i++){
      var pt=''+(ps2[i].textContent||'');
      if(pt.indexOf('قناتين')>=0||pt.indexOf('appVer')>=0||pt.indexOf('طريقة الاستخدام')>=0){try{ps2[i].parentNode.removeChild(ps2[i])}catch(e4){}}
    }
  }catch(eX){}
}

/* 87.د تثبيت الخلفية المختارة من صور الهاتف في الموقع — ثابتة كما في التطبيق تمامًا */
function x87BgWeb(){
  try{
    var web=true;
    try{web=(typeof x52Ch==='function'&&x52Ch()==='app')?false:true}catch(eM){}
    if(!web){return}
    var he=document.documentElement;
    try{if(he&&he.classList){he.classList.add('x81web')}}catch(eC){}
    try{if(typeof x81ChSync==='function'){x81ChSync()}}catch(eS1){}
    try{if(typeof x81BgFix==='function'){x81BgFix()}}catch(eS2){}
    try{if(typeof x54BgApply==='function'){x54BgApply()}}catch(eS3){}
    var el=gid('x87-bgstyle');
    if(!el){el=document.createElement('style');el.id='x87-bgstyle';(document.head||document.documentElement).appendChild(el)}
    el.textContent='html,body{background-image:none!important;background-color:transparent!important}body::before{background:none!important;content:none!important}#x54-bg{position:fixed!important;top:0!important;left:0!important;right:0!important;bottom:0!important;z-index:0!important;pointer-events:none!important}#app{position:relative!important;z-index:1!important}';
  }catch(eB){}
}
try{x87BgWeb()}catch(eB1){}

/* 87.هـ مكنس واحد مؤجل بعد كل عرض */
var __x87To=null;
function x87After(){
  try{
    if(__x87To){clearTimeout(__x87To)}
    __x87To=setTimeout(function(){__x87To=null;try{x87ShareFix()}catch(e1){}try{x87BgWeb()}catch(e2){}},120)
  }catch(e){}
}
var __x87R=render;
render=function(){try{__x87R()}catch(e0){}try{x87After()}catch(e1){}};

/* 87.و هوية الإصدار */
APP_META.ver='87.0';APP_META.date='2026-11-06';APP_META.lastUpdate='2026-11-06';
APP_META.notes='الإصدار 87 — الاستقرار والثبات النهائي: زر مشاركة واحد نظيف، مؤشر تبويب شريطي أنيق، أيقونات مواد كبيرة واضحة، تنقل «أهم الملاحظات/القوانين» يعمل دائمًا، وخلفيتك المختارة ثابتة في الموقع كما في التطبيق.';
try{APP_META.changelog.unshift({ver:'87.0',date:'2026-11-06',notes:'زر مشاركة واحد + تنظيف الشروح الداخلية + مؤشر تبويب شريطي + أيقونات مواد كبيرة + إصلاح تنقل الخلاصة جذريًا + تثبيت الخلفية في الموقع.'})}catch(eV87){}
