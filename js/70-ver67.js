/* ===== الطبقة 67 - بلاغ من بريد الحساب + إصلاح أزرار الإعدادات + تحديث بيد المستخدم + إعلانات فورية ===== */
try{
/* 67.أ نموذج البلاغ: بلا خانة بريد - يرسل من بريد الحساب المسجل تلقائيًا */
function x67MyMail(){try{var s=USER.session&&USER.session.user;var em=(s&&s.email)||'';if(!em){var lu=stGet('x18_user',null);em=(lu&&lu.email)||''}if(!em){em=AUTH.email||''}return em}catch(e){return ''}}
contactHTML=function(){
  var em=x67MyMail();
  return '<section class="contact glass-strong fade-in">'+
   '<h3 class="ct-head">📬 أبلغ عن مشكلة أو أرسل ملاحظة</h3>'+
   '<div class="ct-form">'+
   '<input id="x67-rt" class="inp" placeholder="عنوان المشكلة (مختصرًا)">'+
   '<select id="x67-rs" class="inp"><option>مشكلة تقنية في المنصة</option><option>تصحيح خطأ في درس</option><option>استفسار في درس</option><option>اقتراح تحسين</option><option>مشكلة في الحساب أو الدخول</option><option>أخرى</option></select>'+
   '<textarea id="x67-rb" class="inp" rows="4" placeholder="اشرح المشكلة بالتفصيل — إن كانت في درس اذكر الدرس والفقرة بالضبط"></textarea>'+
   '<div class="btn-row"><button class="btn btn-primary" onclick="x67ReportSend()">✉️ إرسال البلاغ</button></div>'+
   '</div>'+
''+
   '</section>';
};
function x67ReportSend(){
  var t=(''+(((gid('x67-rt')||{}).value)||'')).trim();
  var s=(''+(((gid('x67-rs')||{}).value)||'رسالة'));
  var b=(''+(((gid('x67-rb')||{}).value)||'')).trim();
  var em=x67MyMail();
  if(!t){try{toast('✍️ اكتب عنوان المشكلة أولًا')}catch(e){}return}
  if(b.length<5){try{toast('✍️ اكتب تفاصيل المشكلة')}catch(e){}return}
  if(!em){try{toast('ℹ️ سجّل دخولك أولًا — البلاغ يُرسل من بريد حسابك المسجل')}catch(e){}return}
  var body='عنوان البلاغ: '+t+' — السبب: '+s+' — من حساب: '+em+' — الإصدار: '+APP_META.ver+' — التفاصيل: '+b;
  try{toast('⏳ جارٍ إرسال البلاغ…')}catch(e){}
  try{
    x19Send('بلاغ من منصة X: '+t,body,em,function(ok){
      if(ok){try{toast('✅ وصل بلاغك إلى المنصة — سيرد الإدارة على بريدك المسجل')}catch(e){}}
      else{try{toast('📨 جهزنا رسالة البلاغ في تطبيق البريد — أكمل الإرسال بنفسك')}catch(e){}}
      try{var rr=gid('x67-rb');if(rr){rr.value=''}var rt2=gid('x67-rt');if(rt2){rt2.value=''}}catch(e){}
      try{render()}catch(e){}
    });
  }catch(e){try{toast('📨 جهزنا رسالة البلاغ في تطبيق البريد — أكمل الإرسال بنفسك')}catch(e2){}}
};
try{x48ReportShow=function(){try{xModal(x48T('report'),contactHTML())}catch(e){}}}catch(e){}
/* 67.ب إصلاح أزرار الإعدادات الميتة: توصيل إمكانية الوصول واللغة بالتنفيذ الفعلي */
var __x67SX=setX;
setX=function(k,v){try{__x67SX(k,v)}catch(e){}try{if(typeof x48ApplyAll==='function'){x48ApplyAll()}}catch(e){}};
try{if(typeof x48ApplyAll==='function'){x48ApplyAll()}}catch(e){}
/* 67.ج تباين أوضح يُرى فعلًا */
try{
  var n67=null;try{n67=gid('x67-style')}catch(e){}
  if(!n67){try{n67=document.createElement('style');n67.id='x67-style';var hd67=document.head||document.body;if(hd67&&hd67.appendChild){hd67.appendChild(n67)}}catch(e){n67=null}}
  if(n67){n67.textContent='body.x48-hc{filter:contrast(1.28) saturate(1.10)!important}body.x48-ob button,body.x48-ob .btn{outline:1px solid rgba(120,160,220,.55)}'}
}catch(e){}
/* 67.د إعلانات: إشعار فوري عند إعلان جديد + عرض خمسة بدل ثلاثة */
var __x67AN=x66ApplyNews;
x66ApplyNews=function(arr,src){
  try{
    if(arr&&arr.length){
      var last='';try{last=stGet('x67_lastnews','')}catch(e){}
      var newest='';var newestT='';
      for(var i=0;i<arr.length;i++){var d=''+((arr[i].created_at||arr[i].date||''));if(d>newest){newest=d;newestT=(''+((arr[i].title||'إعلان جديد')))}}
      if(newest&&last&&newest!==last){try{toast('🔔 إعلان جديد من المنصة: '+newestT)}catch(e){}}
      if(newest){try{stSet('x67_lastnews',newest)}catch(e){}}
    }
  }catch(e){}
  return __x67AN(arr,src);
};
renderNews=function(){
  var items=(XNEWS.items||fallbackNews18()).slice(0,5),h='';
  for(var i=0;i<items.length;i++){h+='<div class="news-item"><b>'+escAttr(items[i].title||'')+'</b><span>'+escAttr((items[i].date||'')+'')+'</span><p>'+(items[i].body||'')+'</p></div>'}
  return h;
};
/* 67.هـ التحديث بيد المستخدم: مراقبة دورية أثناء الاستخدام + مسح كامل للذواكر عند التحديث */
function x67UpdWatch(){try{checkUpdate(true)}catch(e){}}
try{if(typeof __X67NOTIMER==='undefined'&&typeof setInterval==='function'){setInterval(x67UpdWatch,600000)}}catch(e){}
try{document.addEventListener('visibilitychange',function(){try{if(document.visibilityState==='visible'){x67UpdWatch()}}catch(e){}})}catch(e){}
try{window.addEventListener('online',function(){try{x67UpdWatch()}catch(e){}})}catch(e){}
applyUpdate=function(){
  try{
    var reloaded=false;
    var go=function(){if(reloaded){return}reloaded=true;try{if(location&&location.reload){location.reload()}}catch(e){}};
    var step=function(){try{if(navigator&&navigator.serviceWorker&&navigator.serviceWorker.controller&&navigator.serviceWorker.controller.postMessage){navigator.serviceWorker.controller.postMessage('skipWaiting')}}catch(e){}setTimeout(go,300)};
    var cs=null;try{cs=window.caches||(typeof caches!=='undefined'?caches:null)}catch(e){}
    if(cs&&cs.keys){try{cs.keys().then(function(ks){var ps=[];for(var i=0;i<ks.length;i++){ps.push(cs.delete(ks[i]))}return Promise.all(ps)}).then(step).catch(step)}catch(e){step()}}else{step()}
  }catch(e){try{location.reload()}catch(e2){}}
};
/* 67.و إخبار عامل الخدمة: هل هذا التطبيق المثبت أم الموقع - التطبيق لا يحدث نفسه أبدًا */
function x67Mode(){
  try{
    if(navigator&&navigator.standalone===true){return 'app'}
    if(window.matchMedia){
      try{if(window.matchMedia('(display-mode: standalone)').matches){return 'app'}}catch(e){}
      try{if(window.matchMedia('(display-mode: fullscreen)').matches){return 'app'}}catch(e){}
    }
  }catch(e){}
  return 'site';
}
function x67TellMode(){
  try{if(navigator&&navigator.serviceWorker&&navigator.serviceWorker.controller&&navigator.serviceWorker.controller.postMessage){navigator.serviceWorker.controller.postMessage({t:'mode',m:x67Mode()})}}catch(e){}
}
try{setTimeout(x67TellMode,1500)}catch(e){}
try{setTimeout(x67TellMode,6000)}catch(e){}
try{if(navigator&&navigator.serviceWorker&&navigator.serviceWorker.addEventListener){navigator.serviceWorker.addEventListener('controllerchange',function(){try{setTimeout(x67TellMode,500)}catch(e){}})}}catch(e){}
APP_META.ver='67.0';
APP_META.notes='الإصدار 67 — نموذج البلاغ من بريد حسابك المسجل بلا خانة بريد، إصلاح أزرار الإعدادات (التباين والكثافة والحدود واللغة) لتعمل فورًا، إشعار فوري عند كل إعلان جديد وعرض خمسة إعلانات، التحديث بيد المستخدم: التطبيق المثبت لا يحدث نفسه أبدًا بل يصله إشعار التحديث فيضغط تحديث الآن، والموقع يتحدث تلقائيًا، والمنصة تعمل بلا إنترنت بعد أول فتح (عدا الفيديو وملفات PDF).';
try{APP_META.lastUpdate='2026-11-04'}catch(e){}
try{if(APP_META.changelog&&APP_META.changelog.unshift){APP_META.changelog.unshift({ver:'67.0',date:'2026-11-04',notes:'بلاغ من بريد الحساب + إصلاح أزرار الإعدادات + تحديث بيد المستخدم + إعلانات فورية + عمل بلا إنترنت'})}}catch(e){}
}catch(e){}
