/* ===================== طبقة الإصدار 89.0 — الإصلاحات الجذرية النهائية ===================== */

/* 89.أ CSS: جذر مؤشر التبويب + تباين بلا انزياح + إخفاء بطاقة المظهر الحالية الفعلية + تنقل سلس */
function x89Style(){
  try{
    var el=gid('x89-style');
    if(!el){el=document.createElement('style');el.id='x89-style';(document.head||document.documentElement).appendChild(el)}
    el.textContent=
     '/* 89: الجذر الحقيقي لمركزية المؤشر — الزر نفسه هو مرجع التموضع */'+
     '.bnav-btn{position:relative!important}'+
     '.bnav-btn.bnav-on:before{content:""!important;position:absolute!important;top:0!important;left:0!important;right:0!important;margin-left:auto!important;margin-right:auto!important;width:42px!important;height:4.5px!important;border:0!important;border-radius:99px!important;background:linear-gradient(90deg,#35BDF2,#8B6CFF)!important;box-shadow:0 0 10px rgba(53,189,242,.5)!important}'+
     'html[data-theme="light"] .bnav-btn.bnav-on:before{background:linear-gradient(90deg,#168EBF,#7657DB)!important;box-shadow:none!important}'+
     '/* 89: زيادة التباين بلا filter على body — الفلتر كان يفك تموضع العناصر الثابتة ويسبب انزياح الشاشة */'+
     'body.x48-hc{filter:none!important;--text:#ffffff!important;--text-dim:#e8eef8!important;--text-mute:#c3cfdf!important}'+
     'html[data-theme="light"] body.x48-hc{--text:#0a1220!important;--text-dim:#243349!important;--text-mute:#42536d!important}'+
     'html,body{overflow-x:hidden!important}'+
     '/* 89: بطاقة «المظهر الحالي» الحقيقية في الإعدادات (x51) + القديمة */'+
     '.x51-card,.x48-qcard{display:none!important}'+
     '/* 89: دخول الصفحات: حركة ناعمة مميزة عند التنقل */'+
     '#app.x89-enter>*:not(nav){animation:x89in .28s cubic-bezier(.21,.68,.35,1)}'+
     '@keyframes x89in{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:none}}'+
     '@media (prefers-reduced-motion:reduce){#app.x89-enter>*{animation:none!important}}'+
     '/* 89: خلاصة الدرس — شريحة واحدة ظاهرة في كل مرة */'+
     '#kptrack{display:block!important;transform:none!important;transition:none!important;width:100%!important}'+
     '.kp-slide{display:block!important;width:100%!important;min-width:100%!important;box-sizing:border-box}';
  }catch(eS0){}}
try{x89Style()}catch(eS1){}

/* 89.ب خلاصة الدرس: إعادة بناء كاملة — المحتوى الفعال يُولَّد وقت بناء HTML حسب التبويب المختار،
   فلا يعتمد على transform ولا display ولا أي CSS — يصمد أمام أي إعادة رسم مهما كان مصدرها */
function x89KpInner(cid,idx){
  var kp=KP[cid];if(!kp)return '';
  var pts=(kp.pts||[]).map(function(t){return '<li>'+t+'</li>'}).join('');
  var laws=(kp.laws||[]).map(function(l){return '<div class="kp-law"><div class="kp-lt">📌 '+l.t+'</div>'+(l.m?mathBlock(l.m):(l.x?'<div class="kp-lx">'+l.x+'</div>':''))+'</div>'}).join('');
  var content=(idx===1)?('<div class="kp-slide"><div class="kp-ch">📜 القوانين الواجب حفظها</div>'+laws+'</div>'):('<div class="kp-slide"><div class="kp-ch">🧠 أهم الملاحظات</div><ul class="kp-pts">'+pts+'</ul></div>');
  return '<div class="kp-head">🗂️ خلاصة الدرس — أهم الملاحظات والقوانين التي يجب أن تتذكرها</div>'+
   '<div class="kp-tabs">'+
   '<button id="kpt0" class="kpt'+(idx===0?' kpt-on':'')+'" onclick="kpTab(0)">🧠 أهم الملاحظات <span class="kpt-n">'+(kp.pts||[]).length+'</span></button>'+
   '<button id="kpt1" class="kpt'+(idx===1?' kpt-on':'')+'" onclick="kpTab(1)">📜 القوانين <span class="kpt-n">'+(kp.laws||[]).length+'</span></button>'+
   '</div>'+
   '<div class="kp-vp" id="kpvp"><div class="kp-track" id="kptrack">'+content+'</div></div>'+
   '<div class="kp-nav"><button class="kp-ar" onclick="kpMove(-1)" aria-label="السابق">◀</button><div class="kp-dots" id="kpdots"><span class="kpd'+(idx===0?' kpd-on':'')+'">●</span><span class="kpd'+(idx===1?' kpd-on':'')+'">●</span></div><button class="kp-ar" onclick="kpMove(1)" aria-label="التالي">▶</button></div>';
}
window.kpHTML=function(cid){
  var kp=KP[cid];if(!kp)return '';
  if(!(kp.pts||[]).length&&!(kp.laws||[]).length)return '';
  return '<div class="kp-box fade-in" id="kpbox" data-cid="'+cid+'">'+x89KpInner(cid,(KPI===1)?1:0)+'</div>';
};
window.kpTab=function(i){
  var idx=(i===1)?1:0;
  try{KPI=idx}catch(eK){}
  try{
    var box=gid('kpbox');
    if(box){
      var cid=(''+(box.getAttribute('data-cid')||''));
      if(cid&&KP[cid]){box.innerHTML=x89KpInner(cid,idx);return}
    }
  }catch(e0){}
  try{render()}catch(e1){}
};
window.kpMove=function(d){try{kpTab(((KPI||0)+d+2)%2)}catch(e){}};
window.kpSync=function(){};
window.x88KpShow=function(i){try{kpTab(i)}catch(e){}};
try{
  document.addEventListener('click',function(e){
    try{
      var t=e.target;var guard=0;
      while(t&&t.nodeType===1&&guard<12){
        if(t.id==='kpt0'){window.kpTab(0);break}
        if(t.id==='kpt1'){window.kpTab(1);break}
        t=t.parentNode;guard++;
      }
    }catch(eC){}
  },true);
}catch(eL){}

/* 89.ج الإرسال الحقيقي إلى الإدارة — مسار واحد واضح وصادق: FormSubmit مباشرة إلى بريد الإدارة،
   لا حصص ولا بوابات ولا مفاتيح، مع مسار احتياطي صادق (نسخ) إن تعذر الاتصال */
function x89Send(subject,body,from,onResult){
  var em='';try{em=''+XOWNER_MAIL}catch(eM){em=''}
  var full=body+'\n\n'+((from)?('— من: '+from+'\n'):'')+'— أُرسلت من منصة X الإصدار '+APP_META.ver;
  try{toast('⏳ جارٍ إرسال رسالتك إلى الإدارة…')}catch(e0){}
  var okFn=function(){try{toast('✅ وصلت رسالتك إلى الإدارة بنجاح','success')}catch(e1){}if(typeof onResult==='function'){try{onResult(true,false)}catch(e2){}}};
  var failFn=function(msg){
    try{navigator.clipboard.writeText('[منصة X] '+subject+'\n\n'+full)}catch(e3){}
    try{
      if(msg&&(''+msg).toLowerCase().indexOf('activat')>=0){
        toast('📩 يتطلب الإرسال تفعيلًا لمرة واحدة: افتح بريد الإدارة واضغط زر التفعيل في رسالة FormSubmit ثم أعد المحاولة','info');
      }else{
        toast('⚠️ تعذر الإرسال التلقائي — تحقق من اتصال الإنترنت ثم أعد المحاولة (نُسخ نص رسالتك للحفظ)','error');
      }
    }catch(e4){}
    if(typeof onResult==='function'){try{onResult(false,true)}catch(e5){}}
  };
  try{
    fetch('https://formsubmit.co/ajax/'+encodeURIComponent(em),{method:'POST',headers:{'Content-Type':'application/json','Accept':'application/json'},body:JSON.stringify({_subject:'[منصة X] '+subject,name:(from?('مستخدم منصة X — '+from):'زائر منصة X'),email:(from||em),_replyto:(from||em),message:full})})
    .then(function(r){return r.json()})
    .then(function(j){
      if(j&&(j.success===true||j.success==='true')){okFn()}
      else{failFn((j&&j.message)||'')}
    })
    .catch(function(err){failFn('')});
  }catch(eX){failFn('')}
}
window.x19Send=function(subject,body,from,onResult){try{x89Send(subject,body,from,onResult)}catch(e0){if(typeof onResult==='function'){try{onResult(false,false)}catch(e1){}}}};
window.x67ReportSend=function(){
  var t=(''+(((gid('x67-rt')||{}).value)||'')).trim();
  var s=(''+(((gid('x67-rs')||{}).value)||'رسالة'));
  var b=(''+(((gid('x67-rb')||{}).value)||'')).trim();
  var em=x67MyMail();
  if(!t){try{toast('✍️ اكتب عنوان المشكلة أولًا')}catch(e){}return}
  if(b.length<5){try{toast('✍️ اكتب تفاصيل المشكلة')}catch(e){}return}
  if(!em){try{toast('ℹ️ سجّل دخولك أولًا — البلاغ يُرسل من حسابك المسجل')}catch(e){}return}
  var body='عنوان البلاغ: '+t+' — النوع: '+s+' — من حساب: '+em+' — الإصدار: '+APP_META.ver+' — التفاصيل: '+b;
  x19Send('بلاغ من منصة X: '+t,body,em,function(ok){
    if(ok){
      try{
        var rr=gid('x67-rb');if(rr){rr.value=''}
        var rt2=gid('x67-rt');if(rt2){rt2.value=''}
      }catch(e){}
    }
  });
};

/* 89.د تنقل سلس ومميز: دخول الصفحة بحركة ناعمة + تصحيح فوري لأعلى عند التنقل */
var __x89NAV=navigate;
var x89nav=false;
navigate=function(a,b,c){x89nav=true;try{__x89NAV(a,b,c)}catch(e0){}};
var __x89R=render;
render=function(){
  var nv=x89nav;x89nav=false;
  try{__x89R()}catch(e0){}
  try{
    if(nv){
      try{window.scrollTo(0,0)}catch(e1){}
      var ap=document.getElementById('app');
      if(ap){ap.classList.remove('x89-enter');void ap.offsetWidth;ap.classList.add('x89-enter')}
    }
  }catch(e2){}
};

/* 89.هو هوية الإصدار */
APP_META.ver='89.0';APP_META.date='2026-11-07';APP_META.lastUpdate='2026-11-07';
APP_META.notes='الإصدار 89 — الاستقرار والاحترافية الجذرية: مؤشر التبويب مركز تمامًا فوق زره (إصلاح جذر التموضع)، تنقل الملاحظات/القوانين مُعاد البناء كليًا، إرسال حقيقي إلى الإدارة بلا بوابات، تباين بلا انزياح الشاشة، وتنقل سلس بين الصفحات.';
try{APP_META.changelog.unshift('الإصدار 89.0 (2026-11-07): جذر مركزية المؤشر (position:relative) + إعادة بناء خلاصة الدرس بتبديل وقت التوليد + إرسال البلاغ والتسجيل فعليًا إلى بريد الإدارة + إصلاح انزياح التباين + إخفاء بطاقة المظهر الحالية الحقيقية + أيقونة تقدّمي مرسومة + انتقالات صفحات ناعمة.')}catch(eV89){}


