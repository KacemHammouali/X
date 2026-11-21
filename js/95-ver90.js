/* ===================== طبقة الإصدار 90.0 — آخر إصدار تصميمي وأقواهم: مؤشر مثالي + خلاصة بصنف واحد + هوية X.HAK ===================== */

/* 90.أ CSS: مؤشر موسّط هندسيًا فوق الزر النشط + رأس إعدادات مريح + خلاصة الدرس بصنف واحد + تمرير سلس */
function x90Style(){
  try{
    var el=gid('x90-style');
    if(!el){el=document.createElement('style');el.id='x90-style';(document.head||document.documentElement).appendChild(el)}
    el.textContent=
     '/* 90: المؤشر — الزر نفسه مرجع التموضع والتوسيط هندسي مضمون بلا هامش صفر يلغيه */'+
     '.bnav-btn{position:relative!important}'+
     '.bnav-btn.bnav-on:before{content:""!important;position:absolute!important;top:0!important;left:0!important;right:0!important;margin-left:auto!important;margin-right:auto!important;inset-inline:auto!important;width:42px!important;height:4.5px!important;border:0!important;border-radius:99px!important;background:linear-gradient(90deg,#35BDF2,#8B6CFF)!important;box-shadow:0 0 10px rgba(53,189,242,.5)!important}'+
     'html[data-theme="light"] .bnav-btn.bnav-on:before{background:linear-gradient(90deg,#168EBF,#7657DB)!important;box-shadow:none!important}'+
     '/* 90: رأس الإعدادات — أيقونة بعيدة عن الجدار وموسّطة */'+
     '.x51-hero{padding:18px 14px 12px!important}'+
     '.x51-hero .x48-hicon{margin:0 auto 6px!important}'+
     '/* 90: خلاصة الدرس — صنف واحد يبدّل الشريحتين بلا إعادة توليد innerHTML */'+
     '#kptrack{display:block!important;transform:none!important;transition:none!important;width:100%!important}'+
     '.kp-slide{display:none!important;width:100%!important;min-width:100%!important;box-sizing:border-box}'+
     '.kp-box.x90-k0 .x90-s0{display:block!important}'+
     '.kp-box.x90-k1 .x90-s1{display:block!important}'+
     'html{scroll-behavior:smooth}';
  }catch(eS0){}
}
try{x90Style()}catch(eS1){}

/* 90.ب خلاصة الدرس: الشريحتان معًا في HTML و onclick="x90Kp(cid,N)" يبدّل صنف الصندوق فقط — يعمل فورًا في أي درس */
function x90KpInner(cid){
  var kp=KP[cid];if(!kp)return '';
  var pts=(kp.pts||[]).map(function(t){return '<li>'+t+'</li>'}).join('');
  var laws=(kp.laws||[]).map(function(l){return '<div class="kp-law"><div class="kp-lt">📌 '+l.t+'</div>'+(l.m?mathBlock(l.m):(l.x?'<div class="kp-lx">'+l.x+'</div>':''))+'</div>'}).join('');
  if(!(kp.pts||[]).length&&!(kp.laws||[]).length)return '';
  return '<div class="kp-head">🗂️ خلاصة الدرس — أهم الملاحظات والقوانين التي يجب أن تتذكرها</div>'+
   '<div class="kp-tabs">'+
   '<button id="kpt0" class="kpt'+((KPI===1)?'':' kpt-on')+'" onclick="x90Kp(\''+cid+'\',0)">🧠 أهم الملاحظات <span class="kpt-n">'+(kp.pts||[]).length+'</span></button>'+
   '<button id="kpt1" class="kpt'+((KPI===1)?' kpt-on':'')+'" onclick="x90Kp(\''+cid+'\',1)">📜 القوانين <span class="kpt-n">'+(kp.laws||[]).length+'</span></button>'+
   '</div>'+
   '<div class="kp-vp" id="kpvp"><div class="kp-track" id="kptrack">'+
   '<div class="kp-slide x90-s0"><div class="kp-ch">🧠 أهم الملاحظات</div><ul class="kp-pts">'+pts+'</ul></div>'+
   '<div class="kp-slide x90-s1"><div class="kp-ch">📜 القوانين الواجب حفظها</div>'+laws+'</div>'+
   '</div></div>'+
   '<div class="kp-nav"><button class="kp-ar" onclick="kpMove(-1)" aria-label="السابق">◀</button><div class="kp-dots" id="kpdots"><span class="kpd'+((KPI===1)?'':' kpd-on')+'">●</span><span class="kpd'+((KPI===1)?' kpd-on':'')+'">●</span></div><button class="kp-ar" onclick="kpMove(1)" aria-label="التالي">▶</button></div>';
}
window.kpHTML=function(cid){
  var kp=KP[cid];if(!kp)return '';
  if(!(kp.pts||[]).length&&!(kp.laws||[]).length)return '';
  return '<div class="kp-box fade-in'+((KPI===1)?' x90-k1':' x90-k0')+'" id="kpbox" data-cid="'+cid+'">'+x90KpInner(cid)+'</div>';
};
window.x90Kp=function(cid,i){
  var idx=(i===1)?1:0;
  try{KPI=idx}catch(eK){}
  try{var box=gid('kpbox');if(box){box.className='kp-box fade-in x90-k'+idx}}catch(eB){}
  try{
    for(var j=0;j<2;j++){var b=gid('kpt'+j);if(b){b.className='kpt'+(j===idx?' kpt-on':'')}}
    var d=gid('kpdots');if(d){var s=d.children;for(var k=0;k<s.length;k++){s[k].className='kpd'+(k===idx?' kpd-on':'')}}
  }catch(eD){}
};
window.kpTab=function(i){try{x90Kp('',i)}catch(e){}};
window.kpMove=function(d){try{x90Kp('',((KPI||0)+d+2)%2)}catch(e){}};
window.kpSync=function(){};
window.x87KpShow=function(){};
window.x88KpShow=function(){};
try{
  document.addEventListener('click',function(e){
    try{
      var t=e.target;var guard=0;
      while(t&&t.nodeType===1&&guard<12){
        if(t.id==='kpt0'){x90Kp('',0);break}
        if(t.id==='kpt1'){x90Kp('',1);break}
        t=t.parentNode;guard++;
      }
    }catch(eC){}
  },true);
}catch(eL){}

/* 90.ج غلاف render: يعيد وصل x90Kp وعقدة الستايل بعد كل عرض */
try{
  var __x90R=render;
  render=function(){var r90=__x90R.apply(this,arguments);try{x90Style()}catch(eR0){}try{x90Kp('',(KPI===1)?1:0)}catch(eR1){}return r90};
}catch(eW90){}

/* 90.د هوية الإصدار (آخر إسناد يفوز) */
APP_META.ver='90.0';APP_META.date='2026-11-07';APP_META.lastUpdate='2026-11-07';
APP_META.notes='الإصدار 90 — آخر إصدار تصميمي وأقواهم: مؤشر التبويب في منتصف الزر النشط تحديدًا حتى الأطراف، خلاصة الدرس (الملاحظات/القوانين) بصنف واحد يتبدل فورًا في أي درس، رأس إعدادات مريح والأيقونة بعيدة عن الجدار، وهوية مؤسسة X.HAK بلا ذكر مالك.';
try{APP_META.changelog.unshift('الإصدار 90.0 (2026-11-07): مؤشر التبويب موسّط تحديدًا فوق الزر النشط + خلاصة الدرس بصنف واحد بلا إعادة توليد + رأس الإعدادات «خصص تجربتك وتحكم في منصة X التعليمية» + تذييل «منصة من مؤسسة X.HAK التقنية» و«تديرها مؤسسة X.HAK» + كل «المالك» في نصوص الواجهة أصبحت «الإدارة».')}catch(eV90){}

