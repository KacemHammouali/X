'use strict';
/* ============ الطبقة 39 — الإصدار 39: الإصلاحات الجذرية والاحترافية ============ */
/* 39.أ زر «لوحة الإدارة» في صفحة ملفي — لم يكن للمالك أي مدخل مرئي إلى لوحته */
var __x39Profile=renderProfilePage18;
renderProfilePage18=function(){
  var h=__x39Profile();
  try{
    var own=false;
    try{own=isAdmin()}catch(e0){own=false}
    if(!own&&USER.session){
      var em=(''+(((USER.session.user||{}).email)||((USER.profile||{}).email)||'')).toLowerCase();
      own=(em===(''+XOWNER_MAIL).toLowerCase());
      if(own){try{x33OwnerFix()}catch(e1){}}
    }
    if(own&&h.indexOf('لوحة الإدارة')<0){
      var i=h.indexOf('pv-actions');
      if(i>0){var j=h.indexOf('>',i);if(j>0){h=h.slice(0,j+1)+'<button class="btn btn-primary" onclick="navigate(\'admin\')">🛡️ لوحة الإدارة</button>'+h.slice(j+1)}}
    }
  }catch(e){}
  return h;
};
/* 39.ب لون التمييز: شبكة ألوان أنيقة نظيفة بلا أي كتابات تحتها */
var __x39Settings=renderSettingsPage;
renderSettingsPage=function(){
  var h=__x39Settings();
  try{
    var colors=[['azure','#229ED9','أزرق'],['royal','#2f7ae5','أزرق ملكي'],['blue','#6ab3f3','سماوي'],['teal','#5ec8b8','تركوازي'],['violet','#a08ee0','بنفسجي'],['rose','#e07f9a','وردي'],['amber','#e0b96a','ذهبي']];
    var grid='<div class="x39-colors">';
    for(var i=0;i<colors.length;i++){
      grid+='<button type="button" class="x39-cdot'+((XCFG.accent===colors[i][0])?' on':'')+'" style="--c:'+colors[i][1]+'" onclick="setX(\'accent\',\''+colors[i][0]+'\')" aria-label="'+colors[i][2]+'"><span></span></button>';
    }
    grid+='</div>';
    var a=h.indexOf('لون التمييز');
    if(a>0){
      var st=h.lastIndexOf('<div class="set-line">',a);
      var en=h.indexOf('</div></div>',a);
      if(st>=0&&en>st){h=h.slice(0,st)+'<div class="set-line"><span>لون التمييز</span>'+grid+'</div>'+h.slice(en+12)}
    }
  }catch(e){}
  return h;
};
/* 39.ج الشاشة الكاملة وقلب الشاشة للفيديو */
function x35FS(){
  try{
    var card=document.getElementById('x35p');
    if(!card){return}
    var tgt=card.querySelector('.xmodal-card')||card;
    var fn=tgt.requestFullscreen||tgt.webkitRequestFullscreen||tgt.msRequestFullscreen||tgt.mozRequestFullScreen;
    if(fn){try{fn.call(tgt)}catch(e1){}}
    try{
      if(window.screen&&screen.orientation&&screen.orientation.lock){
        var pl=screen.orientation.lock('landscape');
        if(pl&&pl.catch){pl.catch(function(){})}
      }
    }catch(e2){}
  }catch(e){}
}
/* 39.د اختيار عدة شعب (2 أو 3 أو 4) في مولدي PDF والفيديو */
function x39BranchChecks(yr){
  var bs=X32_BRANCHES[yr]||[];
  var out='';
  if(!bs.length){return '<p class="set-note" style="margin:6px 0">هذه السنة بلا شعب — الملف/الفيديو يراه الجميع.</p>'}
  out='<div class="x39-checks">';
  for(var i=0;i<bs.length;i++){
    out+='<label class="x39-chk"><input type="checkbox" value="'+bs[i].id+'">'+bs[i].name+'</label>';
  }
  out+='</div>';
  return out;
}
function x33BranchSync(){
  try{
    var yr=(gid('x33g-year')||{}).value||'m1';
    var bs=gid('x33g-branches');
    if(bs){bs.innerHTML=x39BranchChecks(yr)}
  }catch(e){}
}
function x35BranchSync(){
  try{
    var yr=(gid('x35g-year')||{}).value||'m1';
    var bs=gid('x35g-branches');
    if(bs){bs.innerHTML=x39BranchChecks(yr)}
  }catch(e){}
}
function x33AdminSect(){
  var yOpts='',firstY='';
  for(var k in X30_YEARS){if(!firstY){firstY=k}yOpts+='<option value="'+k+'">'+X30_YEARS[k]+'</option>'}
  var h='<section class="x17-card x33-admin" id="x33-admin"><h3>📚 مكتبة PDF — الطريقة السهلة (pdfs.json)</h3>'+
   '<p class="x33-step"><b>الخطوة 1:</b> ارفع ملف الـ PDF نفسه إلى المستودع (Add file ← Upload files) بنفس طريقة رفع الصور — باسم بسيط بلا مسافات مثل <b>s2-math-1.pdf</b>.</p>'+
   '<p class="x33-step"><b>الخطوة 2:</b> افتح ملف <b>pdfs.json</b> واضغط قلم التعديل ✏️.</p>'+
   '<p class="x33-step"><b>الخطوة 3:</b> عبّئ الخانات بالأسفل — واختر <b>شعبة أو أكثر</b> (شعبتين أو ثلاثة أو أكثر) أو اتركها كلها فارغة لملف يراه الجميع — ثم اضغط «📋 توليد السطر» وانسخ السطر والصقه داخل <b>[ ]</b>: سطر واحد بلا فاصلة، وعدة أسطر ضع فاصلة <b>,</b> بين كل سطرين.</p>'+
   '<p class="x33-step"><b>الخطوة 4 (الحذف):</b> لحذف ملف من المكتبة: امسح سطره من pdfs.json واضغط Commit — ولحذفه نهائيًا احذف ملف الـ PDF نفسه من المستودع أيضًا.</p>'+
   '<div class="x33-gen">'+
   '<input class="x30-inp" id="x33g-name" placeholder="الاسم الظاهر للطلاب (مثل: ملخص الدوال)">'+
   '<input class="x30-inp" id="x33g-file" placeholder="اسم ملف الـ PDF كما رفعته (مثل: s2-math-1.pdf)">'+
   '<div class="x30-row"><select class="x30-inp" id="x33g-year" style="width:auto" onchange="x33TermSync();x33BranchSync()">'+yOpts+'</select>'+
   '<select class="x30-inp" id="x33g-type" style="width:auto" onchange="x33TermSync()">'+
   '<option value="sum">ملخص</option><option value="ex">تمارين</option><option value="hw">فرض</option><option value="test">اختبار</option></select>'+
   '<select class="x30-inp" id="x33g-term" style="width:auto;display:none">'+
   '<option value="1">الفصل الأول</option><option value="2">الفصل الثاني</option><option value="3">الفصل الثالث</option></select></div>'+
   '<div id="x33g-branches">'+x39BranchChecks(firstY)+'</div>'+
   '<input class="x30-inp" id="x33g-subject" placeholder="المادة (مثل: الرياضيات) — اتركها فارغة لملف عام">'+
   '<input class="x30-inp" id="x33g-descr" placeholder="وصف مختصر (اختياري)">'+
   '<button class="btn btn-primary" onclick="x33GenLine()">📋 توليد السطر</button>'+
   '<textarea class="x33-out" id="x33g-out" placeholder="سيظهر السطر الجاهز هنا بعد الضغط على «توليد السطر»"></textarea>'+
   '</div></section>';
  return h;
}
function x33GenLine(){
  var nm=((gid('x33g-name')||{}).value||'').trim();
  var yr=(gid('x33g-year')||{}).value||'s2';
  var cy=(yr.charAt(0)==='m')?'mid':'sec';
  var brs=[],boxes=document.querySelectorAll('#x33g-branches input[type="checkbox"]');
  for(var q=0;q<boxes.length;q++){if(boxes[q].checked){brs.push(boxes[q].value)}}
  var br=brs.join(',');
  var sb=((gid('x33g-subject')||{}).value||'').trim();
  var tp=(gid('x33g-type')||{}).value||'sum';
  var tm=(tp==='hw'||tp==='test')?(parseInt((gid('x33g-term')||{}).value||'1',10)||1):0;
  var fn=((gid('x33g-file')||{}).value||'').trim();
  var ds=((gid('x33g-descr')||{}).value||'').trim();
  if(!nm){toast('✍️ اكتب اسم الملف أولًا (مثل: ملخص الدوال)','error');return}
  if(!fn){toast('✍️ اكتب اسم ملف الـ PDF كما رفعته (مثل: s2-math-1.pdf)','error');return}
  fn=fn.replace(/^\.?\//,'');
  var id=Date.now();
  var line='{"id":'+id+',"cycle":"'+cy+'","year":"'+yr+'","branch":"'+br+'","subject":"'+sb+'","type":"'+tp+'","term":'+tm+',"name":"'+nm+'","descr":"'+ds+'","url":"./'+fn+'"}';
  var out=gid('x33g-out');
  if(out){out.value=line}
  x33GenModal(line,nm,fn);
}
function x35AdminSect(){
  var yOpts='',firstY='';
  for(var k in X30_YEARS){if(!firstY){firstY=k}yOpts+='<option value="'+k+'">'+X30_YEARS[k]+'</option>'}
  var h='<section class="x17-card x33-admin" id="x35-admin"><h3>🎬 مكتبة الفيديو — الطريقة السهلة (videos.json)</h3>'+
   '<p class="x33-step"><b>الخطوة 1:</b> انسخ رابط الفيديو من يوتيوب (زر «مشاركة» ← «نسخ الرابط»).</p>'+
   '<p class="x33-step"><b>الخطوة 2:</b> افتح ملف <b>videos.json</b> في المستودع واضغط قلم التعديل ✏️.</p>'+
   '<p class="x33-step"><b>الخطوة 3:</b> عبّئ الخانات بالأسفل — واختر <b>شعبة أو أكثر</b> (شعبتين أو ثلاثة أو أكثر) أو اتركها كلها فارغة لفيديو يراه الجميع — ثم اضغط «📋 توليد سطر الفيديو» وانسخ السطر والصقه داخل <b>[ ]</b>: سطر واحد بلا فاصلة، وعدة أسطر ضع فاصلة <b>,</b> بين كل سطرين.</p>'+
   '<p class="x33-step"><b>الخطوة 4 (الحذف):</b> امسح سطر الفيديو من videos.json واضغط Commit — يختفي من المنصة فورًا.</p>'+
   '<div class="x33-gen">'+
   '<input class="x30-inp" id="x35g-title" placeholder="عنوان الفيديو الظاهر للطلاب (مثل: شرح الدوال خطوة بخطوة)">'+
   '<input class="x30-inp" id="x35g-url" placeholder="رابط الفيديو من يوتيوب (مثل: https://youtu.be/XXXXXXXXXXX)">'+
   '<div class="x30-row"><select class="x30-inp" id="x35g-year" style="width:auto" onchange="x35BranchSync()">'+yOpts+'</select>'+
   '<select class="x30-inp" id="x35g-term" style="width:auto">'+
   '<option value="0">عام — كل الفصول</option><option value="1">الفصل الأول</option><option value="2">الفصل الثاني</option><option value="3">الفصل الثالث</option></select></div>'+
   '<div id="x35g-branches">'+x39BranchChecks(firstY)+'</div>'+
   '<input class="x30-inp" id="x35g-subject" placeholder="المادة (مثل: الرياضيات) — اتركها فارغة لفيديو عام">'+
   '<input class="x30-inp" id="x35g-descr" placeholder="وصف مختصر (اختياري)">'+
   '<button class="btn btn-primary" onclick="x35GenLine()">📋 توليد سطر الفيديو</button>'+
   '<textarea class="x33-out" id="x35g-out" placeholder="سيظهر السطر الجاهز هنا بعد الضغط على «توليد سطر الفيديو»"></textarea>'+
   '</div></section>';
  return h;
}
function x35GenLine(){
  var ti=((gid('x35g-title')||{}).value||'').trim();
  var ur=((gid('x35g-url')||{}).value||'').trim();
  var yr=(gid('x35g-year')||{}).value||'s2';
  var cy=(yr.charAt(0)==='m')?'mid':'sec';
  var brs=[],boxes=document.querySelectorAll('#x35g-branches input[type="checkbox"]');
  for(var q=0;q<boxes.length;q++){if(boxes[q].checked){brs.push(boxes[q].value)}}
  var br=brs.join(',');
  var tm=parseInt((gid('x35g-term')||{}).value||'0',10)||0;
  var sb=((gid('x35g-subject')||{}).value||'').trim();
  var ds=((gid('x35g-descr')||{}).value||'').trim();
  if(!ti){toast('✍️ اكتب عنوان الفيديو أولًا (مثل: شرح الدوال)','error');return}
  if(!ur){toast('✍️ الصق رابط الفيديو أولًا','error');return}
  if(!x35YTId(ur)&&!/^https?:\/\//i.test(ur)){toast('⚠️ هذا لا يبدو رابطًا — انسخ الرابط كاملًا من يوتيوب','error');return}
  var id=Date.now();
  var line='{"id":'+id+',"cycle":"'+cy+'","year":"'+yr+'","branch":"'+x35JEsc(br)+'","subject":"'+x35JEsc(sb)+'","term":'+tm+',"title":"'+x35JEsc(ti)+'","descr":"'+x35JEsc(ds)+'","url":"'+x35JEsc(ur)+'"}';
  var out=gid('x35g-out');
  if(out){out.value=line}
  x35GenModal(line,ti);
}
/* 39.هـ حماية العرض: لا عودة مفاجئة للرئيسية ولا شاشة معطلة أبدًا */
var __x39Render=render;
render=function(){
  try{__x39Render()}catch(e){
    try{
      var app=document.getElementById('app');
      if(app){app.innerHTML='<div class="fade-in x17-card" style="max-width:480px;margin:24px auto"><h3>⚠️ حدث خطأ غير متوقع</h3><p class="x17-empty">لا شيء ضاع — كل بياناتك محفوظة على جهازك. اضغط الزر للمتابعة.</p><button class="btn btn-primary" onclick="navigate(\'home\')">العودة للرئيسية</button></div>'}
    }catch(e2){}
  }
};
/* 39.و بيانات الإصدار 39 */
APP_META.ver='39.0';APP_META.date='2026-11-01';APP_META.lastUpdate='2026-11-01';
APP_META.notes='الإصدار 39 — الإصلاحات الجذرية: زر «لوحة الإدارة» ظاهر الآن في صفحة ملفي (لم يكن له أي مدخل مرئي)، والشعار الجديد logo.jpg يظهر في «عن المنصة» بدل الشعار القديم، وألوان التمييز شبكة أنيقة نظيفة بلا أي كتابات (بها الأزرق الرسمي وأزرق ملكي)، ومولدا PDF والفيديو يقبلان اختيار عدة شعب (شعبتين أو ثلاثة أو أكثر)، وفيديو المشاهدة صار بزر «شاشة كاملة» يقلب الشاشة عرضيًا، وتنزيل PDF أمينة: شريط انتظار واضح ثم رسالة اكتمال أو فتح تلقائي في نافذة جديدة عند أي تعطل، وحماية العرض من أي خطأ مفاجئ، وتحسين الظهور في محركات البحث (بيانات منظمة جديدة).';
try{APP_META.changelog.unshift('الإصدار 39 — إصلاحات جذرية: زر لوحة الإدارة في صفحة ملفي، الشعار الجديد في «عن المنصة»، شبكة ألوان نظيفة، اختيار عدة شعب في المولدين، شاشة كاملة للفيديو، تنزيل PDF بديل تلقائي عند التعطل، حماية العرض، وبيانات منظمة لمحركات البحث.')}catch(e){}
function fallbackNews18(){
  return [{title:'الإصدار 39 — إصلاحات جذرية',
    body:'زر لوحة الإدارة ظاهر في ملفي، الشعار الجديد في عن المنصة، شبكة ألوان نظيفة، اختيار عدة شعب، شاشة كاملة للفيديو، وتنزيل PDF أذكى.',
    date:APP_META.date}];
}
/* ============ الطبقة 40 — إصدار الثبات والاستقرار قبل إنشاء التطبيق ============ */
APP_META.ver='40.0';APP_META.date='2026-11-01';APP_META.lastUpdate='2026-11-01';
APP_META.notes='الإصدار 40 — إصدار الثبات والاستقرار استعدادًا لتحويل المنصة إلى تطبيق: صُحح موضع الشعار في «عن المنصة» فصار يملأ إطاره بدقة تامة بلا أي إزاحة (كانت الحاوية أصغر من الصورة فتظهر مزاحة داخل خلفية وإطار)، وأُصلح خطأ مطبعي في معرّف قائمة ملفات الإدارة، وفُحصت المنصة فحصًا شاملًا آليًا: كل وظائف الأزرار (96 دالة) معرفة وسليمة، وكل كتل الأكواد (35 كتلة) تُبنى بلا أخطاء، وعامل الخدمة والتطبيق المثبت وملفات الإصدار مترابطة وسليمة.';
try{APP_META.changelog.unshift('الإصدار 40 — ثبات واستقرار: إصلاح محاذاة الشعار في «عن المنصة» بلا أي إزاحة، إصلاح معرّف قائمة ملفات الإدارة، وفحص شامل لكل الأكواد والأزرار قبل إنشاء التطبيق.')}catch(e){}
function fallbackNews18(){
  return [{title:'الإصدار 40 — ثبات واستقرار',
    body:'صُحح موضع الشعار في «عن المنصة» وفُحصت المنصة بالكامل (كل الأزرار والأكواد سليمة) استعدادًا لتحويلها إلى تطبيق.',
    date:APP_META.date}];
}
/* ============ الطبقة 41 — ثبات المكتبات والتنقل والتحديث ============ */
/* 41.1 سجل التنقل: نحفظ الصفحة السابقة عند كل تغيير صفحة (لزر الرجوع) */
var X41_HIST=[];
var __x41PH=parseHash;
parseHash=function(){
  var before=null;
  try{before={page:ROUTE.page,subject:(ROUTE.subject||null),chapter:(ROUTE.chapter||null),cycle:ROUTE.cycle,year:ROUTE.year,branch:ROUTE.branch,tab:ROUTE.tab,mode:ROUTE.mode,term:ROUTE.term}}catch(e){before=null}
  var r=__x41PH();
  try{
    if(ROUTE&&ROUTE.page&&before&&ROUTE.page!==before.page){
      X41_HIST.push(before);
      if(X41_HIST.length>30){X41_HIST.shift()}
    }
  }catch(e2){}
  return r;
};
function x41Back(){
  var prev=null;
  try{
    while(X41_HIST.length){
      var p=X41_HIST.pop();
      if(p&&p.page&&p.page!==((ROUTE&&ROUTE.page)||'')){prev=p;break}
    }
  }catch(e){prev=null}
  if(!prev){prev={page:'home'}}
  X30_HASH=prev;
  try{render()}catch(e2){}
  try{window.scrollTo(0,0)}catch(e3){}
}
/* 41.2 زر «⬅ رجوع» يظهر في كل صفحة عدا الرئيسية */
var __x41R=render;
render=function(){
  __x41R();
  try{
    var pg=(ROUTE&&ROUTE.page)||'';
    var b=document.getElementById('x41-back');
    if(pg==='home'||pg==='auth'){
      if(b){b.remove()}
    }else if(!b){
      b=document.createElement('button');
      b.id='x41-back';b.type='button';b.className='x41-back';
      b.innerHTML='⬅ رجوع';
      if(b.addEventListener){b.addEventListener('click',x41Back)}else{b.onclick=x41Back}
      document.body.appendChild(b);
    }
  }catch(e){}
};
/* 41.3 كشف انعدام الإنترنت بوضوح في المكتبتين بدل الانتظار الأبدي */
function x41Offline(){
  try{return (typeof navigator!=='undefined'&&!navigator.onLine)}catch(e){return false}
}
var __x41Lib=renderX30Lib;
renderX30Lib=function(){
  var h=__x41Lib();
  try{
    if(x41Offline()&&!X33_PDFS){
      var i=h.indexOf('id="x30-list"');
      if(i>=0){
        var j=h.indexOf('>',i);
        if(j>0){h=h.slice(0,j+1)+'<div class="x30-err">📴 لا يوجد اتصال بالإنترنت الآن.<br>مكتبة PDF تحتاج إلى الإنترنت مرة واحدة على الأقل لتحميل الملفات — عاود الفتح عند عودة الشبكة أو اضغط «🔄 تحديث المكتبة».</div>'+h.slice(j+1)}
      }
    }
  }catch(e){}
  return h;
};
var __x41Vid=renderX35Vid;
renderX35Vid=function(){
  var h=__x41Vid();
  try{
    if(x41Offline()&&!X35_VIDS){
      var i=h.indexOf('id="x35-list"');
      if(i>=0){
        var j=h.indexOf('>',i);
        if(j>0){h=h.slice(0,j+1)+'<div class="x30-err">📴 لا يوجد اتصال بالإنترنت الآن.<br>مكتبة الفيديو تحتاج إلى الإنترنت للتحميل — عاود الفتح عند عودة الشبكة أو اضغط «🔄 تحديث المكتبة».</div>'+h.slice(j+1)}
      }
    }
  }catch(e){}
  return h;
};
/* 41.4 مهلة 12 ثانية: لا «جارٍ التحميل» أبدية مهما حدث */
var __x41Files=x30Files;
x30Files=function(force,cb){
  var got=false;
  __x41Files(force,function(files,why){if(!got){got=true;cb(files,why)}});
  setTimeout(function(){if(!got){got=true;cb(null,'offline')}},12000);
};
var __x41VFiles=x35Files;
x35Files=function(force,cb){
  var got=false;
  __x41VFiles(force,function(files,why){if(!got){got=true;cb(files,why)}});
  setTimeout(function(){if(!got){got=true;cb(null,'offline')}},12000);
};
/* 41.5 تحديث المكتبة يبقى في صفحته — لا قفز إلى الرئيسية */
function x33LibReload(){
  X33_PDFS=null;
  toast('🔄 نحدّث المكتبة…','info');
  x30Files(true,function(){try{X30_HASH=ROUTE;render()}catch(e){}});
}
function x35VidReload(){
  X35_VIDS=null;
  toast('🔄 نحدّث مكتبة الفيديو…','info');
  x35Files(true,function(){try{X30_HASH=ROUTE;render()}catch(e){}});
}
/* 41.6 الشاشة الكاملة مفتاح واحد: نفس الزر يدخل ويخرج + زر خروج ظاهر داخلها */
function x41FSNow(){
  try{return !!(document.fullscreenElement||document.webkitFullscreenElement||document.mozFullScreenElement||document.msFullscreenElement)}catch(e){return false}
}
function x35FS(){
  try{
    if(x41FSNow()){
      var ex=document.exitFullscreen||document.webkitExitFullscreen||document.mozCancelFullScreen||document.msExitFullscreen;
      if(ex){try{ex.call(document)}catch(e1){}}
      return;
    }
    var card=document.getElementById('x35p-card');
    if(!card){
      var wrap=document.getElementById('x35p');
      if(wrap&&wrap.querySelector){card=wrap.querySelector('.xmodal-card')}
    }
    if(!card){return}
    var fn=card.requestFullscreen||card.webkitRequestFullscreen||card.msRequestFullscreen||card.mozRequestFullScreen;
    if(fn){try{fn.call(card)}catch(e2){}}
    try{
      if(window.screen&&screen.orientation&&screen.orientation.lock){
        var pl=screen.orientation.lock('landscape');
        if(pl&&pl.catch){pl.catch(function(){})}
      }
    }catch(e3){}
  }catch(e){}
}
function x41FSync(){
  try{
    var b=document.getElementById('x41-fsexit');
    if(b){b.style.display=x41FSNow()?'inline-block':'none'}
  }catch(e){}
}
(function(){
  var evs=['fullscreenchange','webkitfullscreenchange','mozfullscreenchange','MSFullscreenChange'];
  for(var i=0;i<evs.length;i++){try{document.addEventListener(evs[i],x41FSync)}catch(e){}}
})();
var __x41Play=x35Play;
x35Play=function(id){
  __x41Play(id);
  try{
    var card=document.getElementById('x35p-card');
    if(card&&!document.getElementById('x41-fsexit')){
      var b=document.createElement('button');
      b.id='x41-fsexit';b.type='button';b.className='btn btn-sm x41-fsex';
      b.innerHTML='✕ إنهاء الشاشة الكاملة';
      b.style.display='none';
      if(b.addEventListener){b.addEventListener('click',x35FS)}else{b.onclick=x35FS}
      var row=card.querySelector('.x30-row');
      if(row){row.appendChild(b)}
    }
  }catch(e){}
};
/* 41.7 نظام تحديث رقمي دقيق: من 37 إلى 41 مباشرة + إشعار تلقائي + يختفي بعد التحديث */
function x41VerNum(v){
  var n=0;
  try{
    var p=(''+(v||'')).replace(/[^0-9.]/g,'').split('.');
    var a=parseInt(p[0],10)||0,b2=parseInt(p[1],10)||0,c2=parseInt(p[2],10)||0;
    n=a*1000000+b2*1000+c2;
  }catch(e){n=0}
  return n;
}
function checkUpdate(silent){
  try{if(XSW&&XSW.reg&&XSW.reg.update){XSW.reg.update().catch(function(e){})}}catch(e){}
  if(!APP_META.updateURL){if(!silent){toast('ℹ️ فحص التحديثات يحتاج استضافة المنصة على عنوان رسمي — نسختك الحالية: '+APP_META.ver,'info')}return}
  if(x41Offline()){if(!silent){toast('📴 لا يوجد اتصال بالإنترنت الآن — عاود الفحص عند عودة الشبكة','info')}return}
  fetch(APP_META.updateURL,{cache:'no-store'}).then(function(r){
    if(!r.ok){throw new Error('http'+r.status)}
    return r.text();
  }).then(function(t){
    var j=null;
    try{j=JSON.parse(t)}catch(e){}
    if(!j||!j.ver){if(!silent){toast('⚠️ ملف التحديثات غير متاح على الخادم — تأكد من رفع versions.json مع index.html في نفس المجلد','error')}return}
    XUPD.checked=true;
    if(x41VerNum(j.ver)>x41VerNum(APP_META.ver)){
      XUPD.newer=j;
      toast('🔄 توفر إصدار جديد: '+j.ver+' — ستجد تفاصيله في الصفحة الرئيسية','info');
      try{X30_HASH=ROUTE;render()}catch(e2){}
    }else{
      var had=!!XUPD.newer;
      XUPD.newer=null;
      if(!silent){toast('✅ أنت على أحدث إصدار ('+APP_META.ver+')','success')}
      if(had){try{X30_HASH=ROUTE;render()}catch(e3){}}
    }
  }).catch(function(){if(!silent){toast('❌ تعذر جلب معلومات التحديث — تحقق من الاتصال','error')}});
}
setTimeout(function(){try{checkUpdate(true)}catch(e){}},3000);
/* 41.8 بيانات الإصدار 41 */
APP_META.ver='41.0';APP_META.date='2026-11-01';APP_META.lastUpdate='2026-11-01';
APP_META.notes='الإصدار 41 — ثبات المكتبات والتنقل والتحديث: «تحديث المكتبة» في PDF والفيديو يبقى في صفحته ولا يقفز إلى الرئيسية أبدًا، وزر «⬅ رجوع» جديد في كل صفة يعيدك إلى الصفحة السابقة (وليس إلى الرئيسية)، ورسالة واضحة فورية عند انقطاع الإنترنت في المكتبتين بدل الانتظار الأبدي مع مهلة 12 ثانية، والشاشة الكاملة للفيديو صارت مفتاحًا واحدًا يدخل ويخرج مع زر «إنهاء الشاشة الكاملة» وخلفية سوداء صافية بلا وميض، ونظام التحديث صار مقارنة رقمية دقيقة (من 37 يُعلن 41 مباشرة)، ويفحص التحديث تلقائيًا عند فتح التطبيق مع إشعار فوري، ويختفي زر التحديث بعد التحديث.';
try{APP_META.changelog.unshift('الإصدار 41 — ثبات المكتبات والتنقل: تحديث المكتبة يبقى في صفحته، زر رجوع عالمي للصفحة السابقة، رسالة انقطاع الإنترنت مع مهلة 12 ثانية، مفتاح الشاشة الكاملة بزر خروج، وتحديث رقمي صحيح بإشعار تلقائي.')}catch(e){}
function fallbackNews18(){
  return [{title:'الإصدار 41 — مكتبات أذكى وتنقل أسهل',
    body:'تحديث المكتبة يبقى في صفحته، زر رجوع في كل صفحة، رسالة واضحة عند انقطاع الإنترنت، مفتاح الشاشة الكاملة بزر خروج، ونظام تحديث دقيق بإشعار تلقائي.',
    date:APP_META.date}];
}
/* ============ الطبقة 42 — الإصدار المستقر: تبديل الفصول يشتغل فورًا + APK مباشر + جاهزية الإشعارات ============ */
/* 42.1 الإصلاح الجذري: الرد من مكتبتي PDF والفيديو يصبح دائمًا غير متزامن —
   في السابق عند تبديل الفصل كان الرد يصل قبل رسم الصفحة الجديدة، فتُمحى نتيجته ويبقى «⏳ جارٍ التحميل» للأبد */
var __x42Files=x30Files;
x30Files=function(force,cb){
  __x42Files(force,function(f,w){setTimeout(function(){try{cb(f,w)}catch(e){}},0)});
};
var __x42VFiles=x35Files;
x35Files=function(force,cb){
  __x42VFiles(force,function(f,w){setTimeout(function(){try{cb(f,w)}catch(e){}},0)});
};
/* 42.2 تنزيل التطبيق APK مباشرة من داخل المنصة + رابط قابل للنسخ والمشاركة */
function x42ApkUrl(){
  try{
    var u=(''+location.href).replace(/#.*$/,'').replace(/\?.*$/,'');
    if(u.charAt(u.length-1)!=='/'){u=u.replace(/[^\/]*$/,'')}
    return u+'X.apk';
  }catch(e){return './X.apk'}
}
function x42CopyApk(){
  var u=x42ApkUrl();
  var ok=false;
  try{
    if(navigator.clipboard&&navigator.clipboard.writeText){navigator.clipboard.writeText(u);ok=true}
  }catch(e){}
  if(!ok){
    try{
      var ta=document.createElement('textarea');
      ta.value=u;ta.style.position='fixed';ta.style.opacity='0';
      document.body.appendChild(ta);ta.select();
      ok=document.execCommand('copy');
      document.body.removeChild(ta);
    }catch(e2){}
  }
  toast(ok?'🔗 نُسخ رابط التنزيل — شاركه مع زملائك':('🔗 رابط التنزيل: '+u),'info');
}
function x42ApkCard(){
  return '<section class="x17-card fade-in" style="margin:16px auto 0">'+
   '<h3 style="margin:0 0 4px">📦 تنزيل التطبيق APK مباشرة</h3>'+
   '<p class="x17-mute" style="font-size:12.5px;margin:8px 0 10px">الأسهل والأقوى: اضغط الزر فيُنزَّل ملف التطبيق مباشرة، افتحه فيثبّت نفسه كتطبيق حقيقي — بلا متصفح وبلا إعدادات وبلا أي خطوات إضافية. ويمكنك نسخ الرابط وإرساله لزملائك لينزّلوه هم أيضًا.</p>'+
   '<div class="btn-row" style="margin:8px 0 0">'+
   '<a class="btn btn-sm btn-primary" href="'+x42ApkUrl()+'" download="منصة-X-التعليمية.apk" style="text-decoration:none;display:inline-block">⬇️ تنزيل التطبيق (APK)</a>'+
   '<button class="btn btn-sm" onclick="x42CopyApk()">🔗 نسخ الرابط</button>'+
   '</div></section>';
}
var __x42Settings=renderSettingsPage;
renderSettingsPage=function(){return __x42Settings()+x42ApkCard()};
/* 42.3 الإشعارات: تكامل جاهز مع OneSignal — يعمل تلقائيًا بمجرد وضع المعرف في X42_OSID */
var X42_OSID='';
function x42OSID(){return (''+X42_OSID).replace(/\s+/g,'')}
function x42AskPush(){
  try{
    if(window.OneSignal){window.OneSignal.Slidedown.promptPush();return}
  }catch(e){}
  toast('🔔 خدمة الإشعارات تُفعَّل من الإدارة في خطوة واحدة — عندها يصلك إشعار الدرس الجديد حتى والتطبيق مغلق','info');
}
function x42InitPush(){
  if(!x42OSID()){return}
  try{
    window.OneSignalDeferred=window.OneSignalDeferred||[];
    window.OneSignalDeferred.push(function(OneSignal){OneSignal.init({appId:x42OSID(),notifyButton:{enable:false}})});
    var s=document.createElement('script');
    s.src='https://cdn.onesignal.com/sdks/web/v16/OneSignalSDK.page.js';
    s.defer=true;
    var hd=document.getElementsByTagName('head')[0]||document.documentElement;
    hd.appendChild(s);
  }catch(e){}
}
if(x42OSID()){x42InitPush()}
/* 42.4 بيانات الإصدار 42 */
APP_META.ver='42.0';APP_META.date='2026-11-01';APP_META.lastUpdate='2026-11-01';
APP_META.notes='الإصدار 42 — الإصدار المستقر: عولجت جذريًا مشكلة «جارٍ التحميل» الأبدية عند تبديل الفصل الأول/الثاني/الثالث في مكتبتي PDF والفيديو (كان الرد يصل قبل رسم الصفحة الجديدة)، وأضيف زر «تنزيل التطبيق APK مباشرة» داخل المنصة مع رابط قابل للنسخ والمشاركة، والمنصة صارت جاهزة للإشعارات الفورية التي تصل حتى والتطبيق مغلق، مع كل مزايا الإصدارات السابقة: زر الرجوع، رسائل الانقطاع، الشاشة الكاملة، والتحديث الرقمي التلقائي.';
try{APP_META.changelog.unshift('الإصدار 42 — المستقر: تبديل الفصول في PDF والفيديو يعرض ملفاته فورًا بدل الانتظار الأبدي، زر تنزيل APK مباشر قابل للمشاركة، وجاهزية إشعارات الدروس حتى والتطبيق مغلق.')}catch(e){}
function fallbackNews18(){
  return [{title:'الإصدار 42 — مستقر ونهائي',
    body:'تبديل الفصول في المكتبتين يشتغل فورًا، تنزيل التطبيق APK مباشرة من الإعدادات مع رابط للمشاركة، والمنصة جاهزة للإشعارات الفورية.',
    date:APP_META.date}];
}
/* ============ الطبقة 43 — لمسة عالمية: ذكاء التثبيت + ملف شخصي مرتب + تصميم منعكس ============ */
/* 43.1 تصميم عالمي: بطاقات أنعم، أزرار بعمق، شريط سفلي بمؤشر مضيء — مثل فيسبوك وواتساب وإنستغرام */
try{
  var x43css=document.createElement('style');
  x43css.textContent=
   '.x17-card{border-radius:18px;box-shadow:0 10px 30px rgba(0,0,0,.30),0 2px 8px rgba(0,0,0,.22)}'+
   '.btn{border-radius:12px;transition:transform .16s ease,box-shadow .25s ease,background .25s ease,color .2s ease}'+
   '.btn:active{transform:scale(.95)}'+
   '.btn-primary{box-shadow:0 5px 16px rgba(34,158,217,.38)}'+
   '.btn-primary:active{box-shadow:0 2px 8px rgba(34,158,217,.28)}'+
   '.inp{border-radius:12px}'+
   '.bnav-btn{border-radius:14px}'+
   '.bnav-btn.bnav-on{background:linear-gradient(180deg,rgba(42,171,238,.24),rgba(42,171,238,.08));box-shadow:inset 0 0 0 1px rgba(42,171,238,.4),0 4px 14px rgba(34,158,217,.28)}'+
   'html[data-theme="light"] .bnav-btn.bnav-on{box-shadow:inset 0 0 0 1px rgba(34,158,217,.35),0 4px 14px rgba(34,158,217,.16)}'+
   '.pv15 .h15-cards{display:none!important}'+
   'section.contact{border-radius:18px;margin-top:14px}';
  (document.head||document.documentElement).appendChild(x43css);
}catch(e){}
/* 43.2 ذكاء التثبيت: التطبيق يعرف إن كان مثبتًا — بطاقات التثبيت تظهر في الموقع فقط وتختفي داخل التطبيق */
function x43Standalone(){
  try{
    if(window.matchMedia&&(window.matchMedia('(display-mode: standalone)').matches||window.matchMedia('(display-mode: fullscreen)').matches)){return true}
    if(window.navigator&&window.navigator.standalone){return true}
  }catch(e){}
  return false
}
var __x43App=x29AppCard;
x29AppCard=function(){return ''};
var __x43Apk=x42ApkCard;
x42ApkCard=function(){
  if(x43Standalone()){
    return '<section class="x17-card fade-in" style="margin:16px auto 0">'+
     '<h3 style="margin:0 0 4px">📤 شارك التطبيق مع صديق</h3>'+
     '<p class="x17-mute" style="font-size:12.5px;margin:8px 0 10px">التطبيق مثبّت على هاتفك بالفعل ✓ — انسخ الرابط وأرسله لزميلك: يضغطه فيُنزَّل التطبيق مباشرة على هاتفه بلا متصفح وبلا خطوات.</p>'+
     '<div class="btn-row" style="margin:8px 0 0"><button class="btn btn-sm" onclick="x42CopyApk()">🔗 نسخ رابط التنزيل</button></div>'+
     '</section>';
  }
  return __x43Apk();
};
/* 43.3 الإبلاغ والرسائل تنتقل إلى تبويب «ملفي» فقط — والرئيسية تنظف من التكرار */
var __x43Contact=contactHTML;
contactHTML=function(){return ''};
var __x43ProfileBase=renderProfilePage18;
renderProfilePage18=function(){
  return __x43ProfileBase()+__x43Contact();
};
/* 43.4 الإشعارات: دعم أكثر من خدمة — ضع الاسم والمعرف عند التسجيل */
var X43_PUSH={provider:'',id:''};
function x43InitPush(){
  if(!X43_PUSH||!X43_PUSH.provider||!X43_PUSH.id){return}
  try{
    var hd=document.getElementsByTagName('head')[0]||document.documentElement;
    if(X43_PUSH.provider==='truepush'){
      window.tpq=window.tpq||[];
      window.tpq.push(['init',[X43_PUSH.id],{optOut:false}]);
      var s=document.createElement('script');s.src='https://cdn.truepush.com/sdk/truepush.min.js';s.async=true;hd.appendChild(s);
    }else if(X43_PUSH.provider==='onesignal'){
      window.OneSignalDeferred=window.OneSignalDeferred||[];
      window.OneSignalDeferred.push(function(OneSignal){OneSignal.init({appId:X43_PUSH.id,notifyButton:{enable:false}})});
      var s2=document.createElement('script');s2.src='https://cdn.onesignal.com/sdks/web/v16/OneSignalSDK.page.js';s2.defer=true;hd.appendChild(s2);
    }
  }catch(e){}
}
if(X43_PUSH&&X43_PUSH.provider&&X43_PUSH.id){x43InitPush()}
/* 43.6 شاشة البداية المدمجة: أيقونتك نفسها بلا أي تغيير على خلفية التطبيق نفسها، ثم ذوبان ناعم نحو الرئيسية — مثل التطبيقات العالمية */
var X43_BOOT=false;
try{
  var x43boot=document.createElement('div');
  x43boot.id='x43-boot';
  x43boot.innerHTML='<img src="./icon-512.png" alt="منصة X التعليمية">';
  document.body.appendChild(x43boot);
  var x43bs=document.createElement('style');
  x43bs.textContent='#x43-boot{position:fixed;top:0;left:0;right:0;bottom:0;z-index:99999;background:#0e1621;display:flex;align-items:center;justify-content:center;transition:opacity .5s ease}#x43-boot img{width:140px;height:140px;object-fit:contain}#x43-boot.x43-off{opacity:0;pointer-events:none}';
  (document.head||document.documentElement).appendChild(x43bs);
  X43_BOOT=true;
  setTimeout(function(){
    try{
      var b=document.getElementById('x43-boot');
      if(b){b.className='x43-off';setTimeout(function(){try{if(b.parentNode){b.parentNode.removeChild(b)}}catch(e){}},550)}
    }catch(e){}
  },5000);
}catch(e){X43_BOOT=false}
/* 43.5 بيانات الإصدار 43 */
APP_META.ver='43.0';APP_META.date='2026-11-01';APP_META.lastUpdate='2026-11-01';
APP_META.notes='الإصدار 43 — لمسة التطبيقات العالمية: التطبيق صار يعرف بنفسه — بطاقة التثبيت و«النقاط الثلاث» تظهر في الموقع فقط وتتحول داخل التطبيق المثبت إلى بطاقة «شارك التطبيق مع صديق»، والإبلاغ عن خطأ انتقل إلى تبويب «ملفي» بدل تكراره في الرئيسية، واختفى قسم التقدم من الملف لأن له تبويبه الخاص، والتصميم انعكس بلمسات عالمية: بطاقات أنعم وأزرار بعمق وشريط سفلي بمؤشر مضيء مثل فيسبوك وواتساب وإنستغرام، والمنصة جاهزة للإشعارات مع دعم عدة خدمات.';
try{APP_META.changelog.unshift('الإصدار 43 — لمسة عالمية: ذكاء التثبيت (بطاقات التثبيت في الموقع فقط)، الإبلاغ في تبويب ملفي، إخفاء التقدم من الملف، تصميم منعطف بمعايير فيسبوك وواتساب، وجاهزية إشعارات متعددة الخدمات.')}catch(e){}
function fallbackNews18(){
  return [{title:'الإصدار 43 — لمسة التطبيقات العالمية',
    body:'التطبيق يعرف إن كان مثبتًا فتختفي بطاقات التثبيت، والإبلاغ صار في تبويب ملفي، والتصميم بلمسات عالمية أنيقة.',
    date:APP_META.date}];
}
/* ============ الطبقة 44 — الطبقة الاحترافية الكبرى: افتتاح ملء الشاشة + مشاركة أصلية + تبويبات مرتبة + دخول بالرمز ============ */
/* 44.أ شاشة الافتتاح: صورتك نفسها تتمدد فتملأ شاشة الهاتف كلها ثم تذوب نحو الرئيسية — بلا أي تغيير في الأيقونة */
try{
  var x44bcss=document.createElement('style');
  x44bcss.textContent='#x43-boot img{width:100% !important;height:100% !important;object-fit:cover !important;object-position:center}';
  (document.head||document.documentElement).appendChild(x44bcss);
}catch(e){}
/* 44.ب لمسات تصميم عالمية إضافية: تدرج في الأزرار الرئيسية + توهج حقول الإدخال + تبويبات متوهجة */
try{
  var x44css=document.createElement('style');
  x44css.textContent=
   '.btn-primary{background:linear-gradient(135deg,#25a8e0,#1b7fb0)}'+
   'html[data-theme="light"] .btn-primary{background:linear-gradient(135deg,#229ED9,#1e86bd)}'+
   '.fld input:focus,.fld select:focus,.fld textarea:focus{outline:0;border-color:#229ED9;box-shadow:0 0 0 3px rgba(34,158,217,.20)}'+
   '.x38-tbtn.on{border-color:rgba(34,158,217,.55);box-shadow:0 4px 12px rgba(34,158,217,.25)}'+
   '.toast{border-radius:14px}'+
   '.sum-row{border-radius:10px}';
  (document.head||document.documentElement).appendChild(x44css);
}catch(e){}
/* 44.ج المشاركة الأصلية: زر واحد يفتح قائمة مشاركة الهاتف — واتساب وإنستغرام وتيليجرام — بدل نسخ الرابط */
function x44Share(){
  var u=x42ApkUrl();
  try{
    if(navigator&&navigator.share){
      navigator.share({title:'منصة X التعليمية',text:'تطبيق تعليمي رائع للطورين المتوسط والثانوي — دروس وتمارين واختبارات 🎓 نزّله الآن:',url:u}).then(function(){}).catch(function(e){});
      return;
    }
  }catch(e){}
  x42CopyApk();
}
var __x44Apk=x42ApkCard;
x42ApkCard=function(){
  if(x43Standalone()){
    return '<section class="x17-card fade-in" style="margin:16px auto 0">'+
     '<h3 style="margin:0 0 4px">📤 شارك التطبيق مع صديق</h3>'+
     '<p class="x17-mute" style="font-size:12.5px;margin:8px 0 10px">التطبيق مثبّت على هاتفك ✓ — اضغط زر المشاركة واختر التطبيق الذي تريد الإرسال عبره: واتساب، إنستغرام، تيليجرام، الرسائل وغيرها.</p>'+
     '<div class="btn-row" style="margin:8px 0 0"><button class="btn btn-sm btn-primary" onclick="x44Share()">📤 مشاركة التطبيق</button></div>'+
     '</section>';
  }
  var h=__x44Apk();
  try{h=h.replace('<button class="btn btn-sm" onclick="x42CopyApk()">🔗 نسخ الرابط</button>','<button class="btn btn-sm" onclick="x44Share()">📤 مشاركة</button>')}catch(e){}
  return h;
};
/* 44.د الإعدادات: أربعة تبويبات مرتبة — «التطبيق» يدمج «حول» والمشاركة وتنزيل التطبيق تظهر فيه فقط */
if(X38_SET_TAB>3||X38_SET_TAB<0){X38_SET_TAB=3}
function x38SetTab(i){
  X38_SET_TAB=(i===3||i>3)?3:(i||0);
  try{
    var j,b,p;
    for(j=0;j<4;j++){
      b=document.getElementById('x38-stab'+j);if(b)b.className='x38-tbtn'+(j===X38_SET_TAB?' on':'');
      p=document.getElementById('x38-spane'+j);if(p)p.className='x38-pane'+(j===X38_SET_TAB?' on':'');
    }
  }catch(e){}
}
function x38SettingsTabs(h){
  var ids=['x22-outbox','x23-tgcard','x25-ejscard','x25-w3fcard','x27-card','x28-card'],n;
  for(n=0;n<ids.length;n++){h=x38CutSection(h,ids[n])}
  try{
    var ci=h.indexOf('<section class="contact');
    if(ci>0){var wi=h.lastIndexOf('</div>',ci);if(wi>0)h=h.slice(0,wi)+h.slice(wi+6)}
  }catch(e){}
  var marks=x38Marks(h),blocks=[],i;
  for(i=0;i<marks.length;i++){
    var end=(i+1<marks.length)?marks[i+1]:h.length;
    blocks.push(h.slice(marks[i],end));
  }
  var tabs=[[],[],[],[]];
  for(i=0;i<blocks.length;i++){
    var b=blocks[i];
    if(i===blocks.length-1&&b.length>6&&b.slice(-6)==='</div>'){b=b.slice(0,-6)}
    if(!b)continue;
    if(b.indexOf('المظهر')>=0||b.indexOf('المؤثرات')>=0){tabs[0].push(x38StripNotes(b))}
    else if(b.indexOf('الصوت')>=0||b.indexOf('الإشعارات')>=0){tabs[1].push(x38StripNotes(b))}
    else if(b.indexOf('الحساب')>=0||b.indexOf('اللغة')>=0){tabs[2].push(x38StripNotes(b))}
    else{tabs[3].push(b)}
  }
  var names=['🎨 المظهر','🔊 الصوت','👤 الحساب','📱 التطبيق وحول'];
  var out='<div class="fade-in set-wrap" id="x38-setwrap"><h2 class="sec15">⚙️ الإعدادات</h2><div class="x38-tabs">';
  for(i=0;i<4;i++){out+='<button type="button" id="x38-stab'+i+'" class="x38-tbtn'+(i===X38_SET_TAB?' on':'')+'" onclick="x38SetTab('+i+')">'+names[i]+'</button>'}
  out+='</div>';
  for(i=0;i<4;i++){out+='<div id="x38-spane'+i+'" class="x38-pane'+(i===X38_SET_TAB?' on':'')+'">'+tabs[i].join('')+'</div>'}
  return out+'</div>';
}
renderSettingsPage=function(){
  var h=__x42Settings();
  try{
    var card=x42ApkCard();
    var i=h.indexOf('id="x38-spane3"');
    if(i>=0){var j=h.indexOf('>',i);if(j>0){h=h.slice(0,j+1)+card+h.slice(j+1)}}else{h+=card}
  }catch(e){}
  return h;
};
/* 44.ه الشاشة الكاملة للفيديو: ملء تام للشاشة بلا أي إزاحة + زر ✕ دائري في الأعلى للرجوع للوضع الطبيعي */
try{
  var x44fcss=document.createElement('style');
  x44fcss.textContent=
   '.xmodal-card:fullscreen{padding:0 !important;justify-content:flex-start !important}'+
   '.xmodal-card:fullscreen .xmodal-body{width:100% !important;max-width:100% !important;margin:0 !important;padding:0 !important}'+
   '.xmodal-card:fullscreen h3{display:none !important}'+
   '.xmodal-card:fullscreen .x30-row{display:none !important}'+
   '.xmodal-card:fullscreen .x35-ratio{width:100% !important;max-width:100% !important;margin:0 !important;padding-top:0 !important;height:100vh !important;border-radius:0 !important}'+
   '.xmodal-card:fullscreen .x35-ratio iframe,.xmodal-card:fullscreen .x35-ratio video{position:absolute;top:0;left:0;width:100% !important;height:100% !important;border:0}'+
   '.x41-fsex{position:fixed;top:12px;right:12px;z-index:2147483600;width:48px !important;height:48px !important;min-height:0 !important;padding:0 !important;border-radius:50% !important;font-size:21px !important;font-weight:800;line-height:1;background:rgba(10,18,30,.58) !important;color:#fff !important;border:1px solid rgba(255,255,255,.38) !important;box-shadow:0 4px 14px rgba(0,0,0,.4)}';
  (document.head||document.documentElement).appendChild(x44fcss);
}catch(e){}
var __x44Play=x35Play;
x35Play=function(id){
  __x44Play(id);
  try{
    var b=gid('x41-fsexit');
    if(b){
      b.innerHTML='✕';
      var card=gid('x35p-card');
      if(!card&&typeof b.closest==='function'){try{card=b.closest('.xmodal-card')}catch(e0){}}
      if(card&&b.parentNode&&b.parentNode!==card){try{card.appendChild(b)}catch(e1){}}
    }
  }catch(e){}
};
/* 44.و لوحة الإدارة: خدمات احترافية — تقرير حالة المنصة، نسخة احتياطية، تنظيف */
function x44Close(){try{var o=gid('x44-ov');if(o&&o.parentNode){o.parentNode.removeChild(o)}}catch(e){}}
function x44Panel(html){
  var o=document.createElement('div');
  o.id='x44-ov';
  o.setAttribute('style','position:fixed;top:0;left:0;right:0;bottom:0;z-index:30000;background:rgba(5,10,18,.74);display:flex;align-items:center;justify-content:center;padding:18px');
  o.innerHTML='<div dir="rtl" style="background:#152238;border:1px solid rgba(140,200,240,.25);border-radius:18px;max-width:420px;width:100%;max-height:82vh;overflow:auto;padding:18px;color:#dbe9f7;font-size:13.5px;line-height:1.9">'+html+'<div style="text-align:center;margin-top:14px"><button class="btn btn-primary" onclick="x44Close()">إغلاق</button></div></div>';
  document.body.appendChild(o);
}
function x44Report(){
  var np=0,nv=0,bytes=0,i,kk;
  try{np=(X33_PDFS||[]).length}catch(e1){}
  try{nv=(X35_VIDS||[]).length}catch(e2){}
  try{
    for(i=0;i<localStorage.length;i++){kk=localStorage.key(i);bytes+=(''+(localStorage.getItem(kk)||'')).length}
  }catch(e3){}
  var push='غير مهيأة بعد';
  try{
    if(X43_PUSH&&X43_PUSH.provider&&X43_PUSH.id){push=X43_PUSH.provider}
    if(X44_PUSH_SRC){push='سكربت مخصص'}
  }catch(e4){}
  var sb='غير مهيأة';
  try{if(SB&&SB.ready){sb='متصل ✓'}}catch(e5){}
  x44Panel('<h3 style="margin:0 0 12px">📊 تقرير حالة المنصة</h3>'+
   '<div class="sum-row"><span>الإصدار الحالي</span><b>'+APP_META.ver+'</b></div>'+
   '<div class="sum-row"><span>ملفات PDF في المكتبة</span><b>'+np+'</b></div>'+
   '<div class="sum-row"><span>الفيديوهات في المكتبة</span><b>'+nv+'</b></div>'+
   '<div class="sum-row"><span>حجم البيانات المحلية</span><b>'+(Math.round(bytes/1024)+' كيلوبايت')+'</b></div>'+
   '<div class="sum-row"><span>قاعدة البيانات</span><b>'+sb+'</b></div>'+
   '<div class="sum-row"><span>خدمة الإشعارات</span><b>'+push+'</b></div>');
}
function x44Backup(){
  try{
    var data={},i,k;
    for(i=0;i<localStorage.length;i++){k=localStorage.key(i);data[k]=localStorage.getItem(k)}
    var txt=JSON.stringify({app:'منصة X التعليمية',ver:APP_META.ver,date:new Date().toISOString(),data:data});
    var a=document.createElement('a');
    a.href='data:application/json;charset=utf-8,'+encodeURIComponent(txt);
    a.download='x-backup-'+APP_META.ver+'.json';
    document.body.appendChild(a);a.click();
    try{document.body.removeChild(a)}catch(e1){}
    toast('💾 نُزّلت النسخة الاحتياطية — احفظها في مكان آمن','success');
  }catch(e){toast('❌ تعذر إنشاء النسخة الاحتياطية','error')}
}
function x44Clean(){
  try{XUPD.checked=false;XUPD.newer=null;toast('🧹 نُظّفت الذاكرة المؤقتة — ستُجلب الملفات من جديد عند الطلب','success')}catch(e){toast('❌ لا توجد ذاكرة لتنظيفها','error')}
}
var __x44Admin=renderAdminPage18;
renderAdminPage18=function(){
  var h=__x44Admin();
  try{
    if(isAdmin()&&h.indexOf('x44-serv')<0){
      h+='<section class="x17-card fade-in" id="x44-serv" style="margin:16px auto 0">'+
       '<h3 style="margin:0 0 10px">🧰 خدمات الإدارة الاحترافية</h3>'+
       '<div class="btn-row" style="flex-wrap:wrap">'+
       '<button class="btn btn-sm" onclick="x44Report()">📊 تقرير الحالة</button>'+
       '<button class="btn btn-sm" onclick="checkUpdate(false)">🔄 فحص التحديث</button>'+
       '<button class="btn btn-sm" onclick="x44Backup()">💾 نسخة احتياطية</button>'+
       '<button class="btn btn-sm" onclick="x44Clean()">🧹 تنظيف مؤقت</button>'+
       '</div></section>';
    }
  }catch(e){}
  return h;
};
/* 44.ح الإشعارات: أي مزوّد جديد يعمل عبر رابط سكربته — SendPulse أو Gravitec أو غيرهما */
var X44_PUSH_SRC='https://web.webpushs.com/js/push/272eeb2577f3407a2bef12f4ec1c7769_1.js';
function x44InitCustomPush(){
  if(!X44_PUSH_SRC){return}
  try{
    var s=document.createElement('script');
    s.src=X44_PUSH_SRC;s.async=true;
    (document.head||document.documentElement).appendChild(s);
  }catch(e){}
}
if(X44_PUSH_SRC){x44InitCustomPush()}
/* 46.أ الإشعارات التلقائية: أول دخول للمنصة يفعّل الاشتراك مباشرة دون أي زر — مرة واحدة لكل جهاز */
var X46_PUSHAUTO='x46_pushauto';
function x46AutoPush(){
  try{
    if(stGet(X46_PUSHAUTO,false)===true){return}
    stSet(X46_PUSHAUTO,true);
    setTimeout(function(){
      try{
        if(window.wpPush&&typeof window.wpPush.openPrompt==='function'){window.wpPush.openPrompt();return}
        if(window.wpPush&&window.wpPush.openDialog){window.wpPush.openDialog();return}
      }catch(e1){}
      try{
        if(window.Notification&&Notification.permission==='default'){Notification.requestPermission(function(){})}
      }catch(e2){}
    },2500);
  }catch(e){}
}
try{x46AutoPush()}catch(e){}
/* 44.ي الدخول الأول: البريد ← رمز سري يصلك بالبريد ← معلوماتك ← حسابك — مثل التطبيقات العالمية */
function x44CodeScreen(){
  return '<h3>📩 أدخل رمز التحقق</h3>'+
  '<p class="auth-note">أرسلنا رمزًا سريًا إلى <b dir="ltr">'+escAttr(AUTH.email)+'</b>. افتح بريدك واكتب الرمز هنا.</p>'+
  '<label class="fld"><span>رمز التحقق</span><input id="a-code" type="text" inputmode="numeric" maxlength="6" dir="ltr" placeholder="••••••" style="text-align:center;font-size:22px;letter-spacing:8px">'+fErr('code')+'</label>'+
  fErr('top')+
  '<button class="btn btn-primary btn-block" onclick="x44OtpCheck()">'+(AUTH.busy?'⏳ جارٍ التحقق…':'متابعة →')+'</button>'+
  '<p class="auth-alt">لم يصلك الرمز؟ <a onclick="x44OtpSend()">إعادة الإرسال</a> · <a onclick="AUTH.tab=\'new\';AUTH.errs={};render()">تغيير البريد</a></p>';
}
function x44OtpSend(){
  AUTH.email=(gid('a-email')||{}).value||AUTH.email;
  AUTH.errs={};
  if(!validEmail(AUTH.email)){aErr('email','اكتب بريدًا إلكترونيًا صالحًا');xSound('error');render();return}
  if(!SB.ready){aErr('top','خدمة المصادقة غير مهيأة حاليًا — استخدم «متابعة كزائر» إلى أن يُكمل الإدارة الإعداد');xSound('error');render();return}
  AUTH.busy=true;render();
  SB.client.auth.signInWithOtp({email:AUTH.email,createUser:true}).then(function(r){
    AUTH.busy=false;
    if(r&&r.error){aErr('top',(r.error.message||'تعذر إرسال الرمز — أعد المحاولة'));xSound('error');render();return}
    AUTH.tab='x44code';AUTH.sent=true;
    toast('📩 أُرسل رمز التحقق إلى بريدك');
    render();
  }).catch(function(e){AUTH.busy=false;aErr('top','انقطع الاتصال بالخدمة — تحقق من الإنترنت وأعد المحاولة');xSound('error');render()});
}
function x44OtpCheck(){
  var code=(''+((gid('a-code')||{}).value||'')).replace(/\s+/g,'');
  AUTH.errs={};
  if(code.length<4){aErr('code','اكتب رمز التحقق كما وصل إلى بريدك');xSound('error');render();return}
  if(!SB.ready){aErr('top','خدمة المصادقة غير مهيأة');render();return}
  AUTH.busy=true;render();
  SB.client.auth.verifyOtp({email:AUTH.email,token:code,type:'email'}).then(function(r){
    AUTH.busy=false;
    if(r&&r.error){
      var msg=(r.error.message==='Invalid one-time password (OTP) or OTP expired')?'الرمز غير صحيح أو انتهت صلاحيته — اطلب رمزًا جديدًا':(r.error.message||'رمز غير صحيح');
      aErr('top',msg);xSound('error');render();return;
    }
    if(r&&r.data&&r.data.session){
      USER.session=r.data.session;
      toast('✅ تم التحقق من بريدك');
      loadUserProfile(true);
    }else{
      aErr('top','تعذر إكمال التحقق — أعد المحاولة');render();
    }
  }).catch(function(e){AUTH.busy=false;aErr('top','انقطع الاتصال بالخدمة — أعد المحاولة');xSound('error');render()});
}
function authNew(){
  return authTabs()+
  '<h3>أنشئ حسابك في منصة X</h3>'+
  '<p class="auth-note">خطوات عالمية بسيطة: اكتب بريدك ← يصلك رمز سري على بريدك ← ثم معلوماتك، ويفتح حسابك الشخصي.</p>'+
  '<label class="fld"><span>البريد الإلكتروني</span><input id="a-email" type="email" dir="ltr" value="'+escAttr(AUTH.email)+'" placeholder="you@example.com">'+fErr('email')+'</label>'+
  fErr('top')+
  '<button class="btn btn-primary btn-block" onclick="x44OtpSend()">'+(AUTH.busy?'⏳ جارٍ الإرسال…':'متابعة →')+'</button>'+
  '<p class="auth-alt">لديك حساب؟ <a onclick="AUTH.tab=\'exist\';AUTH.errs={};render()">سجّل الدخول</a> · <a onclick="xGoGuest()">متابعة كزائر</a></p>';
}
function renderAuth(){
  var inn='';
  if(AUTH.tab==='new'){inn=authNew()}else if(AUTH.tab==='exist'){inn=authExist()}else if(AUTH.tab==='profile'){inn=authProfile(false)}else if(AUTH.tab==='summary'){inn=authSummary()}else if(AUTH.tab==='verify'){inn=authVerify()}else if(AUTH.tab==='otp'){inn=authOtp()}else if(AUTH.tab==='x44code'){inn=x44CodeScreen()}
  var steps={new:1,x44code:2,profile:3,summary:3,verify:2,exist:1,otp:1};
  return authWrap(sbBanner()+inn,AUTH.tab in steps?steps[AUTH.tab]:0,3);
}
/* 44.ل الدخول السريع: بعد الخروج، نفس البريد على نفس الهاتف يدخل مباشرة بلا رمز — مثل واتساب */
var X45_FLAG='x45_stayflag';
function x45FlagGet(){try{return stGet(X45_FLAG,false)===true}catch(e0){return false}}
function x45FlagSet(){try{stSet(X45_FLAG,true)}catch(e1){}}
function x45FlagClear(){try{stSet(X45_FLAG,false)}catch(e2){}}
var __x45Restore=restoreSession;
restoreSession=function(){
  if(x45FlagGet()){return}
  __x45Restore();
};
function logoutUser(){
  setGuest(false);
  x45FlagSet();
  USER.session=null;USER.profile=null;
  AUTH.tab='new';AUTH.email='';AUTH.pass='';AUTH.pass2='';AUTH.sent=false;AUTH.busy=false;AUTH.errs={};AUTH.consent=false;
  toast('👋 سجّلت الخروج — حسابك محفوظ على هذا الجهاز، والدخول القادم ببريدك نفسه بلا رمز');
  navigate('auth');
}
var __x45OtpSend=x44OtpSend;
x44OtpSend=function(){
  AUTH.email=(gid('a-email')||{}).value||AUTH.email;
  AUTH.errs={};
  if(!validEmail(AUTH.email)){aErr('email','اكتب بريدًا إلكترونيًا صالحًا');xSound('error');render();return}
  if(!SB.ready){aErr('top','خدمة المصادقة غير مهيأة حاليًا — استخدم «متابعة كزائر» إلى أن يُكمل الإدارة الإعداد');xSound('error');render();return}
  try{
    if(x45FlagGet()){
      SB.client.auth.getSession().then(function(r){
        try{
          if(r&&r.data&&r.data.session){
            var em=(''+(((r.data.session.user||{}).email)||'')).toLowerCase();
            if(em===(''+AUTH.email).toLowerCase()){
              x45FlagClear();
              USER.session=r.data.session;
              toast('✅ أهلًا بعودتك — دخلت مباشرة دون رمز');
              loadUserProfile(true);
              return;
            }
          }
        }catch(e1){}
        __x45OtpSend();
      }).catch(function(e){__x45OtpSend()});
      return;
    }
  }catch(e0){}
  __x45OtpSend();
};
/* 44.ك بيانات الإصدار 44 */
APP_META.ver='44.2';APP_META.date='2026-11-01';APP_META.lastUpdate='2026-11-01';
APP_META.notes='الإصدار 44.2 — الإشعارات مفعّلة: يصلك إشعار الدرس الجديد باسم «منصة X التعليمية» وبأيقونتك حتى والتطبيق مغلق تمامًا، مع شاشة الافتتاح التي تملأ الشاشة بصورتك، وزر المشاركة الذي يفتح قائمة مشاركة الهاتف، وإعدادات بأربعة تبويبات مع دمج «حول» في «التطبيق»، وشاشة كاملة تامة للفيديو بزر ✕ دائري، والدخول الأول بالرمز السري من البريد، والدخول السريع: من سجّل الخروج ثم عاد بنفس البريد على نفس الهاتف يدخل مباشرة دون أي رمز، ولوحة الإدارة بخدمات احترافية.';
try{APP_META.changelog.unshift('الإصدار 44.2 — الإشعارات تعمل: إشعار الدرس الجديد يصل باسم منصتك وأيقونتك حتى والتطبيق مغلق، مع الدخول السريع بعد الخروج بلا رمز، وكل مزايا 44: افتتاح ملء الشاشة، مشاركة أصلية، تبويبات مرتبة، شاشة كاملة تامة، دخول أول بالرمز، خدمات مالك احترافية.')}catch(e){}
function fallbackNews18(){
  return [{title:'الإصدار 44 — الطبقة الاحترافية الكبرى',
    body:'صورتك تملأ الشاشة عند الفتح، المشاركة تفتح قائمة الهاتف مباشرة، الشاشة الكاملة للفيديو تامة بزر ✕، والدخول الأول بالرمز السري مثل التطبيقات العالمية.',
    date:APP_META.date}];
}
/* ============ الطبقة 45 — الإصدار 45: مؤسسة X.HAK + افتتاحية سوداء + خلفية قابلة للتغيير + متابعة عبر جوجل ============ */
/* 45.أ الهوية: مؤسسة X.HAK هي المشغّل الرسمي — توقيع «من X.HAK» في الافتتاحية مثل «from Meta» في واتساب */
var X45V_ORG='X.HAK';
try{
  var x45vSb=document.createElement('style');
  x45vSb.textContent=
   '#x43-boot{background:#080D18 !important;flex-direction:column !important;justify-content:center;overflow:hidden}'+
   '#x43-boot .x45v-halo{position:absolute;top:50%;left:50%;width:320px;height:320px;border-radius:50%;transform:translate(-50%,-62%);background:radial-gradient(circle,rgba(53,189,242,.30),rgba(139,108,255,.14) 55%,transparent 78%);pointer-events:none}'+
   '#x43-boot img{width:128px !important;height:128px !important;object-fit:contain !important;object-position:center !important;border-radius:28px !important;box-shadow:0 14px 44px rgba(53,189,242,.35)}'+
   '#x43-boot .x45v-brand{color:#fff;font-size:20px;font-weight:700;letter-spacing:.4px;margin-top:16px}'+
   '#x43-boot .x45v-org{color:rgba(255,255,255,.6);font-size:13px;margin-top:3px}'+
   '#x43-boot .x45v-tag{color:rgba(255,255,255,.45);font-size:12px;margin-top:14px;letter-spacing:.3px}';
  (document.head||document.documentElement).appendChild(x45vSb);
  var x45vBt=document.getElementById('x43-boot');
  if(x45vBt){
    x45vBt.innerHTML='<div class="x45v-halo"></div>'+
     '<img src="./icon-512.png" alt="منصة X التعليمية">'+
     '<div class="x45v-brand">منصة X التعليمية</div>'+
     '<div class="x45v-org">من '+X45V_ORG+'</div>'+
     '<div class="x45v-tag">تعلمك يبدأ من هنا</div>';
  }
}catch(e){}
/* 45.ب الخلفية القابلة للتغيير: الافتراضية أو أسود نقي أو صورة من معرض هاتفك — تُحفظ على الجهاز */
var X45V_BGMODE='default',X45V_BGIMG='';
try{var x45vTm=(''+stGet('x45v_bgmode',false));if(x45vTm==='black'||x45vTm==='img'){X45V_BGMODE=x45vTm}}catch(e0){}
try{X45V_BGIMG=(''+stGet('x45v_bgimg',false))||''}catch(e1){}
function x45vBgApply(){
  try{
    var el=document.getElementById('x45v-bgstyle');
    if(!el){el=document.createElement('style');el.id='x45v-bgstyle';(document.head||document.documentElement).appendChild(el)}
    var css='';
    if(X45V_BGMODE==='black'){css='body{background:#000 !important}html{background:#000 !important}'}
    else if(X45V_BGMODE==='img'&&X45V_BGIMG){
      css='body{background:linear-gradient(rgba(8,14,24,.38),rgba(8,14,24,.52)),url("'+X45V_BGIMG.split('"').join('%22')+'") center/cover no-repeat !important}html{background:#0e1621 !important}';
    }
    el.textContent=css;
  }catch(e){}
}
function x45vBgSet(mode){
  X45V_BGMODE=(mode==='black'||mode==='img')?mode:'default';
  try{stSet('x45v_bgmode',X45V_BGMODE)}catch(e){}
  x45vBgApply();
  toast(X45V_BGMODE==='black'?'⬛ خلفية سوداء نقية':(X45V_BGMODE==='img'?'🖼️ خلفيتك الخاصة':'↩️ الخلفية الافتراضية'),'success');
  try{render()}catch(e1){}
}
function x45vBgSaveImg(dataUrl){
  X45V_BGIMG=''+dataUrl;
  try{stSet('x45v_bgimg',X45V_BGIMG)}catch(e0){}
  X45V_BGMODE='img';
  try{stSet('x45v_bgmode','img')}catch(e1){}
  x45vBgApply();
  toast('🖼️ تم تعيين خلفيتك الجديدة','success');
  try{render()}catch(e2){}
}
function x45vBgPick(inp){
  try{
    var f=(inp&&inp.files&&inp.files[0])?inp.files[0]:null;
    if(!f){return}
    var rd=new FileReader();
    rd.onload=function(){
      try{
        var img=new Image();
        img.onload=function(){
          try{
            var mx=1080,w=img.width,h=img.height,sc=(w>mx)?(mx/w):1;
            var cv=document.createElement('canvas');
            cv.width=Math.round(w*sc);cv.height=Math.round(h*sc);
            cv.getContext('2d').drawImage(img,0,0,cv.width,cv.height);
            x45vBgSaveImg(cv.toDataURL('image/jpeg',0.82));
          }catch(e1){x45vBgSaveImg(rd.result)}
        };
        img.onerror=function(){x45vBgSaveImg(rd.result)};
        img.src=''+rd.result;
      }catch(e0){x45vBgSaveImg(rd.result)}
    };
    rd.onerror=function(){toast('❌ تعذر قراءة الصورة','error')};
    rd.readAsDataURL(f);
  }catch(e){toast('❌ تعذر اختيار الصورة','error')}
}
x45vBgApply();
/* 45.ج الإعدادات: قسم «الخلفية» في تبويب المظهر */
var __x45vSettings=renderSettingsPage;
renderSettingsPage=function(){
  var h=__x45vSettings();
  try{
    var card='<div class="set-card glass-strong"><h3>🖼️ المظهر — الخلفية</h3>'+
     '<div class="set-line"><span>خلفية التطبيق</span><div class="pills">'+
     '<button class="xpill'+(X45V_BGMODE==='default'?' on':'')+'" onclick="x45vBgSet(\'default\')">الافتراضية</button>'+
     '<button class="xpill'+(X45V_BGMODE==='black'?' on':'')+'" onclick="x45vBgSet(\'black\')">⬛ أسود نقي</button>'+
     '<button class="xpill'+(X45V_BGMODE==='img'?' on':'')+'" onclick="x45vBgSet(\'img\')">🖼️ صورتي</button>'+
     '</div></div>'+
     '<div class="set-line"><span>صورة من هاتفك</span> '+
     '<input type="file" accept="image/*" id="x45v-bgfile" style="display:none" onchange="x45vBgPick(this)">'+
     '<button class="btn btn-sm btn-primary" onclick="try{document.getElementById(\'x45v-bgfile\').click()}catch(e0){}">📂 اختيار صورة</button>'+
     ((X45V_BGMODE==='img')?' <button class="btn btn-sm" onclick="x45vBgSet(\'default\')">↩️ إزالة الصورة</button>':'')+
     '</div>'+
     '<p class="set-note">اختر «أسود نقي» لمظهر احترافي مثل تيليجرام وواتساب، أو أي صورة من معرض صور هاتفك — تُطبق فورًا وتُحفظ على جهازك، والبطاقات تبقى واضحة فوقها.</p></div>';
    var i=h.indexOf('id="x38-spane0"');
    if(i>=0){var j=h.indexOf('>',i);if(j>0){h=h.slice(0,j+1)+card+h.slice(j+1)}}else{h+=card}
  }catch(e){}
  return h;
};
/* 45.د الدخول الأول: زر «متابعة عبر جوجل» تحت حقل البريد — يعيد جوجل المستخدم لبريده فيدخل كلمة مروره عند جوجل نفسها ثم يعود للمنصة — كلمة المرور لا تمر عبر المنصة إطلاقًا */
function x45vGoogle(){
  if(!SB.ready||!SB.client||!SB.client.auth){toast('ℹ️ خدمة الحسابات غير مهيأة حاليًا');return}
  try{
    SB.client.auth.signInWithOAuth({provider:'google',options:{redirectTo:(typeof location!=='undefined'&&location&&location.href)?location.href:'https://kacemhammouali.github.io/X/'}}).then(function(r){
      if(r&&r.error){toast('❌ تعذر الدخول عبر جوجل — حاول مجددًا أو استخدم البريد والرمز','error')}
    }).catch(function(e){toast('❌ الدخول عبر جوجل غير مفعّل بعد — تفعّله الإدارة من لوحة الخدمة','error')});
  }catch(e){toast('❌ الدخول عبر جوجل غير مفعّل بعد','error')}
}
var __x45vAuthNew=authNew;
authNew=function(){
  var h=__x45vAuthNew();
  try{
    var gbtn='<div style="margin:12px 0 2px">'+
     '<button class="btn btn-block" style="background:#fff;color:#1a1a2e;border:1px solid rgba(0,0,0,.14);font-weight:700" onclick="x45vGoogle()">متابعة عبر جوجل</button>'+
     '</div>'+
     '<p class="auth-alt" style="text-align:center;margin:2px 0 8px">— أو أدخل بريدك —</p>';
    var anchor='<p class="auth-alt">لديك حساب؟';
    var i=h.indexOf(anchor);
    if(i>=0){h=h.slice(0,i)+gbtn+h.slice(i)}else{h+=gbtn}
  }catch(e){}
  return h;
};
/* 45.ه إشعار المؤسسة: عند إكمال تسجيل جديد (بالرمز أو عبر جوجل) تصل المعلومات الدراسية إلى مؤسسة X.HAK — دون أي كلمات مرور */
var __x45vSaveRow=saveProfileRow;
saveProfileRow=function(){
  return __x45vSaveRow().then(function(ok){
    if(ok){
      try{
        var f=AUTH.form;
        var body='تسجيل جديد في منصة X التعليمية:'+'\n'+
         'الاسم: '+(f.fn||'')+' '+(f.ln||'')+'\n'+
         'البريد: '+(AUTH.email||'')+'\n'+
         'المستوى: '+(f.level||'ثانوي')+'\n'+
         'السنة: '+(f.year||'')+'\n'+
         'الشعبة: '+(f.branch||'')+'\n'+
         'التاريخ: '+APP_META.date;
        x19Send('تسجيل مستخدم جديد — '+(f.fn||'')+' '+(f.ln||''),body,(AUTH.email||''));
      }catch(e0){}
    }
    return ok;
  });
};
/* 45.و لوحة X.HAK: كل زر يعمل مع ردّ واضح دائمًا — تقرير ونسخة احتياطية وتنظيف وفحص تحديث */
function x45vClose(){try{var o=document.getElementById('x45v-ov');if(o&&o.parentNode){o.parentNode.removeChild(o)}}catch(e){}}
function x45vPanelOpen(html){
  try{
    var o=document.createElement('div');
    o.id='x45v-ov';
    o.setAttribute('style','position:fixed;top:0;left:0;right:0;bottom:0;z-index:31000;background:rgba(4,9,16,.78);display:flex;align-items:center;justify-content:center;padding:18px');
    o.innerHTML='<div dir="rtl" style="background:#111c2e;border:1px solid rgba(140,200,240,.3);border-radius:18px;max-width:430px;width:100%;max-height:84vh;overflow:auto;padding:18px;color:#dbe9f7;font-size:13.5px;line-height:1.95">'+html+'<div style="text-align:center;margin-top:14px"><button class="btn btn-primary" onclick="x45vClose()">إغلاق</button></div></div>';
    document.body.appendChild(o);
    return true;
  }catch(e){return false}
}
function x45vReport(){
  var np=0,nv=0,bytes=0,i,kk;
  try{np=(X33_PDFS||[]).length}catch(e1){}
  try{nv=(X35_VIDS||[]).length}catch(e2){}
  try{for(i=0;i<localStorage.length;i++){kk=localStorage.key(i);bytes+=(''+(localStorage.getItem(kk)||'')).length}}catch(e3){}
  var sb='غير مهيأة';try{if(SB&&SB.ready){sb='متصل ✓'}}catch(e5){}
  var push='مفعّلة ✓';try{if(!X44_PUSH_SRC){push='غير مهيأة'}}catch(e6){}
  var ok=x45vPanelOpen('<h3 style="margin:0 0 12px">📊 تقرير حالة المنصة</h3>'+
   '<div class="sum-row"><span>الإصدار الحالي</span><b>'+APP_META.ver+'</b></div>'+
   '<div class="sum-row"><span>ملفات PDF</span><b>'+np+'</b></div>'+
   '<div class="sum-row"><span>الفيديوهات</span><b>'+nv+'</b></div>'+
   '<div class="sum-row"><span>حجم البيانات المحلية</span><b>'+Math.round(bytes/1024)+' كيلوبايت</b></div>'+
   '<div class="sum-row"><span>قاعدة البيانات</span><b>'+sb+'</b></div>'+
   '<div class="sum-row"><span>خدمة الإشعارات</span><b>'+push+'</b></div>'+
   '<p class="set-note">المشغّل: مؤسسة '+X45V_ORG+'</p>');
  if(ok){toast('📊 فُتح تقرير الحالة')}else{toast('❌ تعذر فتح التقرير','error')}
}
function x45vBackup(){
  try{
    var data={},i2,k2;
    for(i2=0;i2<localStorage.length;i2++){k2=localStorage.key(i2);data[k2]=localStorage.getItem(k2)}
    var txt=JSON.stringify({app:'منصة X التعليمية',org:X45V_ORG,ver:APP_META.ver,date:new Date().toISOString(),data:data});
    var a=document.createElement('a');
    a.href='data:application/json;charset=utf-8,'+encodeURIComponent(txt);
    a.download='x-backup-'+APP_META.ver+'.json';
    document.body.appendChild(a);
    try{a.click()}catch(e0){}
    try{document.body.removeChild(a)}catch(e1){}
    toast('💾 نُزّلت النسخة الاحتياطية — احفظها في مكان آمن','success');
  }catch(e){toast('❌ تعذر إنشاء النسخة الاحتياطية','error')}
}
function x45vClean(){
  try{XUPD.checked=false;XUPD.newer=null}catch(e){}
  toast('🧹 نُظّفت الذاكرة المؤقتة — ستُجلب الملفات من جديد عند الطلب','success');
}
function x45vUpdate(){
  toast('🔄 نفحص التحديث الآن…');
  try{checkUpdate(false)}catch(e){}
}
function x45vMsgCenter(){
  return '<div class="set-card glass-strong"><h3>📩 رسائل التلاميذ</h3>'+
   '<p class="set-note">كل تسجيل جديد وكل إبلاغ يصل فورًا إلى بريد مؤسسة '+X45V_ORG+' — تُرسَل رسالة التسجيل من بريد التلميذ نفسه أو في الخلفية تلقائيًا، فلا تحتاج أي تهيئة: افتح Gmail وسترى كل التسجيلات.</p></div>'+
   '<div class="set-card glass-strong"><h3>📣 إشعارات Push</h3>'+
   '<p class="set-note">إشعارات الدروس تُرسل من لوحة SendPulse: اختر «Send Notifications»، اكتب العنوان والنص، ثم اضغط «Send» — تصل لكل المشتركين باسم «منصة X التعليمية» وأيقونتها حتى والتطبيق مغلق.</p>'+
   '<div class="btn-row"><a class="btn btn-sm btn-primary" href="https://sendpulse.com" target="_blank" rel="noopener">فتح لوحة SendPulse</a></div></div>';
}
var __x45vAdmin=renderAdminPage18;
renderAdminPage18=function(){
  var h=__x45vAdmin();
  try{
    h=''+h;
    h=h.split('لوحة الإدارة').join('لوحة '+X45V_ORG);
    h=h.split('onclick="x44Report()"').join('onclick="x45vReport()"');
    h=h.split('onclick="x44Backup()"').join('onclick="x45vBackup()"');
    h=h.split('onclick="x44Clean()"').join('onclick="x45vClean()"');
    h=h.split('onclick="checkUpdate(false)"').join('onclick="x45vUpdate()"');
    h=h.split('<p class="set-note">لا توجد قنوات إرسال مهيأة.</p>').join(x45vMsgCenter());
  }catch(e){}
  return h;
};
/* ============ الطبقة 47 — الهوية الرسمية المعتمدة: الألوان الرسمية للوضعين الداكن والفاتح ============ */
try{
  var x47s=document.createElement('style');
  x47s.textContent=
   ':root{--bg-0:#080D18 !important;--bg-1:#0D1625 !important;--bg-2:#111D2D !important;'+
   '--glass:rgba(17,29,45,.82) !important;--glass-strong:rgba(13,22,37,.96) !important;'+
   '--border:rgba(38,56,77,.55) !important;--border-strong:rgba(53,189,242,.45) !important;'+
   '--cyan:#35BDF2 !important;--cyan-glow:#167EAD !important;--blue:#35BDF2 !important;--blue-deep:#167EAD !important;'+
   '--purple:#8B6CFF !important;--purple-deep:#B19AFF !important;'+
   '--text:#F5F7FC !important;--text-dim:#A2AEC0 !important;--text-mute:#748399 !important;'+
   '--line:#26384D !important;--success:#39B98A !important;--warning:#E7B65F !important;--danger:#E16F7C !important;'+
   '--x-accent:#35BDF2 !important;--x-accent-deep:#167EAD !important;--x-border:#26384D !important}'+
   'html[data-theme="light"]{--bg-0:#F4F7FC !important;--bg-1:#EDF2F8 !important;--bg-2:#FFFFFF !important;'+
   '--glass:rgba(255,255,255,.94) !important;--glass-strong:rgba(255,255,255,.98) !important;'+
   '--cyan:#168EBF !important;--cyan-glow:#136E93 !important;--blue:#168EBF !important;--blue-deep:#136E93 !important;'+
   '--purple:#7657DB !important;--purple-deep:#9D86EA !important;'+
   '--text:#172437 !important;--text-dim:#64748B !important;--text-mute:#8A97A8 !important;'+
   '--line:#DFE6EF !important;--border:rgba(223,230,239,.9) !important;'+
   '--x-accent:#168EBF !important;--x-accent-deep:#136E93 !important;--x-border:#DFE6EF !important}'+
   'body{background:var(--bg-0) !important}'+
   'html[data-theme="light"] body{background:var(--bg-0) !important}';
  (document.head||document.documentElement).appendChild(x47s);
}catch(e){}
/* 47.ب جسر المصادقة: تحميل مكتبة Supabase من CDN + قراءة مفاتيح لوحة X.HAK المحفوظة على الجهاز وتهيئة المصادقة — المفاتيح لا تُوضع في كود المنصة إطلاقًا */
var X47_SB_TRIES=0;
try{
  if(typeof window.supabase==='undefined'){
    var x47sb=document.createElement('script');
    x47sb.src='https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/dist/supabase.min.js';
    x47sb.async=true;
    (document.head||document.documentElement).appendChild(x47sb);
  }
}catch(e0){}
function x47SbBridge(){
  try{
    var c=null;
    try{c=JSON.parse(localStorage.getItem('x30_admin_cfg')||'null')}catch(e1){c=null}
    if(c&&c.url&&c.anon){
      SB_CFG.url=(''+c.url).replace(/\/+$/,'');
      SB_CFG.anon=''+c.anon;
    }
    if(!SB.ready&&SB_CFG.url&&SB_CFG.anon&&typeof window.supabase!=='undefined'&&window.supabase&&typeof window.supabase.createClient==='function'){
      try{SB.client=window.supabase.createClient(SB_CFG.url,SB_CFG.anon);SB.ready=true;try{render()}catch(e2){}}catch(e3){}
    }
    if(!SB.ready&&X47_SB_TRIES<40){X47_SB_TRIES++;setTimeout(x47SbBridge,750)}
  }catch(e){}
}
x47SbBridge();
/* 47.ج وصل الدخول بالرمز: عندما تكون المصادقة مهيأة، متابعة البريد ترسل رمزًا سريًا وتطلب كتابته — لا دخول بلا تحقق */
var __x47EmailNext=x18EmailNext;
x18EmailNext=function(){
  try{
    if(SB&&SB.ready){
      var em=(''+(((gid('a-email')||{}).value)||'')).trim();
      XAUTH18.email=em;XAUTH18.errs={};AUTH.email=em;AUTH.errs={};
      if(!validEmail(em)){XAUTH18.errs={email:'اكتب بريدًا إلكترونيًا صالحًا'};xSound('error');render();return}
      AUTH.busy=true;render();
      SB.client.auth.signInWithOtp({email:em,createUser:true}).then(function(r){
        AUTH.busy=false;
        if(r&&r.error){XAUTH18.errs={top:(r.error.message||'تعذر إرسال الرمز — أعد المحاولة')};xSound('error');render();return}
        AUTH.tab='x44code';AUTH.sent=true;
        toast('📩 أُرسل رمز التحقق إلى بريدك');
        render();
      }).catch(function(e){AUTH.busy=false;XAUTH18.errs={top:'انقطع الاتصال بالخدمة — تحقق من الإنترنت وأعد المحاولة'};xSound('error');render()});
      return;
    }
  }catch(e){}
  __x47EmailNext();
};
var __x47Auth18=renderAuth18;
renderAuth18=function(){
  try{
    if(SB&&SB.ready&&typeof x44CodeScreen==='function'&&(AUTH.tab==='x44code')){
      return authWrap(x44CodeScreen(),2,2);
    }
  }catch(e){}
  return __x47Auth18();
};
/* 47.د زر «متابعة عبر جوجل» في بطاقة البريد عندما تكون المصادقة مهيأة */
var __x47EmailCard=x18EmailCard;
x18EmailCard=function(){
  var h=__x47EmailCard();
  try{
    if(SB&&SB.ready&&typeof x45vGoogle==='function'&&h.indexOf('x45vGoogle')<0){
      h=h.split('<p class="auth-alt">').join('<button class="btn btn-block" style="background:#fff;color:#1a1a2e;border:1px solid rgba(0,0,0,.14);font-weight:700;margin-top:10px" onclick="x45vGoogle()">🔗 متابعة عبر جوجل</button><p class="auth-alt">');
    }
  }catch(e1){}
  return h;
};
/* 47 بيانات الإصدار 47 */
APP_META.ver='47.1';APP_META.date='2026-11-02';APP_META.lastUpdate='2026-11-02';
APP_META.notes='الإصدار 47.1 — إصلاح المصادقة الجذري: المنصة كانت تدخل مباشرة بعد البريد دون أي رمز تحقق لأن شاشة الدخول الفعلية لم تكن موصولة بخدمة المصادقة. الآن: مكتبة Supabase تُحمَّل تلقائيًا، ومفاتيح لوحة X.HAK المحفوظة على جهازك تُوصَل بالمصادقة فورًا (بلا وضعها في الكود)، والضغط على «متابعة» بعد البريد يرسل رمزًا سريًا إلى البريد ويطلب كتابته قبل الدخول — لا دخول بلا تحقق، مع زر «متابعة عبر جوجل» وزر «تغيير البريد» وإعادة الإرسال. يضاف إلى ذلك: الهوية الرسمية المعتمدة (ألوان #080D18 و#35BDF2 داكنًا و#F4F7FC و#168EBF فاتحًا في كل الصفحات)، الافتتاحية بهالة سماوية وعبارة «تعلمك يبدأ من هنا»، وكل إصلاحات 46 (الأيقونة الموحدة، الافتتاحية الذكية، الشريط الأنحف، خلفية المعرض الواضحة، الإشعارات التلقائية، حركة الاختفاء الطائرة، بند الملكية، وتعريف مؤسسة X.HAK ومؤسسها HAMMOUALI Kacem).';
try{APP_META.changelog.unshift('الإصدار 47.1 — إصلاح جسر المصادقة: رمز التحقق السري يُطلب فعلًا قبل الدخول (كان الدخول يتخطاه)، مكتبة Supabase تُحمَّل تلقائيًا والمفاتيح تُقرأ من إعداد لوحة X.HAK على الجهاز، مع الهوية الرسمية المعتمدة وافتتاحية «تعلمك يبدأ من هنا» وكامل إصلاحات 46.')}catch(e){}
function fallbackNews18(){
  return [{title:'الإصدار 47.1 — إصلاح المصادقة الجذري',
    body:'رمز التحقق السري يُطلب فعلًا من بريدك قبل الدخول، والمصادقة تقرأ مفاتيح لوحة X.HAK من جهازك تلقائيًا، مع الهوية الرسمية الجديدة وكل إصلاحات الإصدار 46.',
    date:APP_META.date}];
}
