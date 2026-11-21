/* ===================== طبقة الإصدار 88.0 — الإصلاحات النهائية والثبات ===================== */

/* 88.أ CSS: مؤشر موسّط بدقة + أيقونات عناوين الأقسام + إزالة بطاقة المظهر المكررة + خلاصة بتبديل مباشر */
function x88Style(){
  try{
    var el=gid('x88-style');
    if(!el){el=document.createElement('style');el.id='x88-style';(document.head||document.documentElement).appendChild(el)}
    el.textContent=
     '/* 88: مؤشر التبويب النشط — شريط عريض موسّط بدقة (نمط إنستغرام) */'+
     '.bnav-btn.bnav-on:before{content:""!important;position:absolute!important;top:0!important;left:0!important;right:0!important;margin-left:auto!important;margin-right:auto!important;width:42px!important;height:4.5px!important;border:0!important;border-radius:99px!important;background:linear-gradient(90deg,#35BDF2,#8B6CFF)!important;box-shadow:0 0 10px rgba(53,189,242,.5)!important}'+
     'html[data-theme="light"] .bnav-btn.bnav-on:before{background:linear-gradient(90deg,#168EBF,#7657DB)!important;box-shadow:none!important}'+
     '/* 88: إظهار أيقونة بجانب عناوين الأقسام (كانت شفافة بسبب تدرج النص) */'+
     '.section-header h2 svg{color:#78efff!important;vertical-align:-2px}'+
     'html[data-theme="light"] .section-header h2 svg{color:#168EBF!important}'+
     '/* 88: إزالة بطاقة «المظهر الحالي» المكررة من الإعدادات */'+
     '.x48-qcard{display:none!important}'+
     '/* 88: خلاصة الدرس — تبديل مباشر بالعرض (بلا transform) يعمل في كل البيئات */'+
     '#kptrack{display:block!important;transform:none!important;transition:none!important;will-change:auto!important;width:100%!important}'+
     '#kptrack .kp-slide{display:block;flex:none!important;width:100%!important;min-width:100%!important;box-sizing:border-box}'+
     '#kptrack .kp-slide+.kp-slide{display:none}';
  }catch(eS0){}}
try{x88Style()}catch(eS1){}

/* 88.ب خلاصة الدرس: تبديل الشرائح مباشرة بالعرض — يعمل دائمًا بالنقر واللمس والسحب */
function x88KpShow(i){
  var idx=(i===1)?1:0;
  try{KPI=idx}catch(eK){}
  try{
    var tr=gid('kptrack');
    if(tr){tr.style.transform='none';tr.style.willChange='auto'}
    var all=document.querySelectorAll('#kptrack .kp-slide');
    for(var j=0;j<all.length;j++){all[j].style.display=(j===idx)?'block':'none'}
  }catch(eT){}
  try{
    for(var j2=0;j2<2;j2++){var b=gid('kpt'+j2);if(b){b.className='kpt'+(j2===idx?' kpt-on':'')}}
  }catch(eB){}
  try{
    var d=gid('kpdots');
    if(d){var s=d.children;for(var k=0;k<s.length;k++){s[k].className='kpd'+(k===idx?' kpd-on':'')}}
  }catch(eD){}
}
try{
  window.kpTab=function(i){try{x88KpShow(i)}catch(e){}};
  window.kpMove=function(d){try{x88KpShow((KPI+d+2)%2)}catch(e){}};
  window.kpSync=function(){try{x88KpShow(0)}catch(e){}};
}catch(eW){}
try{
  document.addEventListener('click',function(e){
    try{
      var t=e.target;var guard=0;
      while(t&&t.nodeType===1&&guard<12){
        if(t.id==='kpt0'){x88KpShow(0);break}
        if(t.id==='kpt1'){x88KpShow(1);break}
        t=t.parentNode;guard++;
      }
    }catch(eC){}
  },true);
}catch(eL){}

/* 88.ج هوية الإصدار + إصلاح مدخل سجل 87 (كان يُعرض كـ [object Object]) */
APP_META.ver='88.0';APP_META.date='2026-11-06';APP_META.lastUpdate='2026-11-06';
APP_META.notes='الإصدار 88 — الاستقرار والاحترافية النهائية: مؤشر التبويب موسّط بدقة، تنقل «أهم الملاحظات/القوانين» بتبديل مباشر يعمل دائمًا، أيقونة ظاهرة بجانب «المواد الدراسية»، وواجهة أنظف بلا نصوص زائدة.';
try{if(APP_META.changelog&&APP_META.changelog.length&&typeof APP_META.changelog[0]==='object'){APP_META.changelog[0]='الإصدار 87.0 (2026-11-06): زر مشاركة واحد + تنظيف الشروح الداخلية + مؤشر تبويب شريطي + أيقونات مواد كبيرة + إصلاح تنقل الخلاصة + تثبيت الخلفية في الموقع.'}}catch(eC87){}
try{APP_META.changelog.unshift('الإصدار 88.0 (2026-11-06): مؤشر التبويب السفلي موسّط بدقة + إصلاح تنقل الملاحظات/القوانين نهائيًا بتبديل مباشر + إظهار أيقونة «المواد الدراسية» + إزالة «النسخة الكاملة» من سياسة الخصوصية + إزالة شرح الإبلاغ + إزالة بطاقة «المظهر الحالي» المكررة.')}catch(eV88){}

