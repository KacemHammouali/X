'use strict';
/* ============ الطبقة 33 — الإصدار 33: إصلاح كل الأخطاء ============ */
/* 33.1 صفحة السنة: العنوان في موضعه الصحيح مرة واحدة (مسار التنقل للأعالي فقط + عنوان كبير واحد) */
function renderX30Year(cycle,year){
  var yName=x30YearOf(year);
  if(!yName){return '<div class="fade-in x17-card"><p class="x17-empty">غير موجود</p></div>'}
  var branches=X32_BRANCHES[year]||null;
  var isSec=(cycle==='sec');
  var h='<div class="fade-in x30-home"><section class="x17-card">'+
   '<div class="x30-crumb"><button onclick="navigate(\'home\')">الرئيسية</button><span>←</span>'+
   '<button onclick="x30Go({page:\'cycle\',cycle:\''+cycle+'\'})">'+escAttr(x30CycleOf(cycle)?x30CycleOf(cycle).name:'')+'</button></div>'+
   '<h2>'+escAttr(yName)+'</h2>';
  if(isSec&&branches){
    var tag=(year==='s1')?'الجذعين المشتركين':'الشُّعب الست';
    h+='<p class="set-note">اختر جذعك/شعبتك من '+tag+' وفق المنهاج الجزائري:</p></section>'+
     '<section class="x32-branches">';
    for(var i=0;i<branches.length;i++){
      var b=branches[i];
      var hasReal=!!(X32_REAL[year]&&X32_REAL[year][b.id]);
      h+='<div class="x32-branch" onclick="x30Go({page:\'branch\',cycle:\''+cycle+'\',year:\''+year+'\',branch:\''+b.id+'\'})">'+
       '<h4>'+escAttr(b.name)+'</h4><p>'+escAttr(b.note||'')+'</p>'+
       (hasReal?'<span class="x32-tag">📘 الدروس متاحة الآن</span>':'')+
       '</div>';
    }
    h+='</section>';
  }else{
    h+='<div class="x30-err">📘 المواد الدراسية لهذا المستوى لم تُفتح بعد — نضيفها تدريجيًا في الإصدارات القادمة وفق المنهاج الجزائري الرسمي، ودون أي محتوى تخميني.</div>'+
     '<button class="btn" onclick="x30Go({page:\'pdflib\',cycle:\''+cycle+'\',year:\''+year+'\',subject:\'\',tab:\'sum\',mode:\'\',term:0})">📄 مكتبة PDF لهذه السنة</button></section>';
  }
  h+='</div>';
  return h;
}
/* 33.2 صفحة الشعبة: اسم الشعبة مرة واحدة في موضعه الصحيح + مكتبة PDF خاصة بالشعبة */
function renderX32Branch(cycle,year,branch){
  var b=x32Branch(year,branch);
  if(!b){return '<div class="fade-in x17-card"><p class="x17-empty">غير موجود</p></div>'}
  var real=(X32_REAL[year]&&X32_REAL[year][branch])||null;
  var h='<div class="fade-in x30-home"><section class="x17-card">'+
   '<div class="x30-crumb"><button onclick="navigate(\'home\')">الرئيسية</button><span>←</span>'+
   '<button onclick="x30Go({page:\'cycle\',cycle:\''+cycle+'\'})">'+escAttr(x30CycleOf(cycle)?x30CycleOf(cycle).name:'')+'</button><span>←</span>'+
   '<button onclick="x30Go({page:\'year\',cycle:\''+cycle+'\',year:\''+year+'\'})">'+escAttr(x30YearOf(year))+'</button></div>'+
   '<h2>'+escAttr(b.name)+'</h2>';
  if(real){
    h+='<p class="set-note">المواد المفتوحة حاليًا في هذه الشعبة:</p></section><section class="x30-cycles">';
    for(var i=0;i<real.length;i++){
      h+='<div class="x30-cycle" onclick="x30Go({page:\'subjecthub\',cycle:\''+cycle+'\',year:\''+year+'\',branch:\''+branch+'\',subject:\''+real[i].id+'\'})">'+
       '<h3>'+escAttr(real[i].name)+'</h3></div>';
    }
    h+='</section>';
  }else{
    h+='<div class="x30-err">📘 دروس هذه الشعبة/الجذع لم تُفتح بعد — تُفتح تدريجيًا في الإصدارات القادمة وفق المنهاج الجزائري الرسمي، ودون أي محتوى تخميني.</div>'+
     '<button class="btn" onclick="x30Go({page:\'pdflib\',cycle:\''+cycle+'\',year:\''+year+'\',branch:\''+branch+'\',subject:\'\',tab:\'sum\',mode:\'\',term:0})">📄 مكتبة PDF الخاصة بالشعبة</button></section>';
  }
  h+='</div>';
  return h;
}
/* 33.2.1 صفحة المادة: العنوان مرة واحدة + مكتبة PDF تحمل الشعبة تلقائيًا */
var __x33Hub=renderX30Hub;
renderX30Hub=function(cycle,year,subject){
  var br='';
  try{br=(ROUTE.branch||'')+''}catch(e){br=''}
  var subs=X30_SUBJECTS[year]||[];
  var nm='';
  for(var i=0;i<subs.length;i++){if(subs[i].id===subject)nm=subs[i].name}
  var hasLessons=!!nm;
  var h='<div class="fade-in x30-home"><section class="x17-card">'+
   '<div class="x30-crumb"><button onclick="navigate(\'home\')">الرئيسية</button><span>←</span>'+
   '<button onclick="x30Go({page:\'year\',cycle:\''+cycle+'\',year:\''+year+'\'})">'+escAttr(x30YearOf(year))+'</button></div>'+
   '<h2>'+escAttr(hasLessons?nm:'المادة')+'</h2></section><section class="x30-hub">'+
   '<div class="x30-hubcard" onclick="'+(hasLessons?('navigate(\'subject\',\''+subject+'\')'):'x30NoLessons()')+'">'+xi('book',26)+'<h3>📘 الدروس</h3><p class="set-note">الوحدات والدروس التفاعلية</p></div>'+
   '<div class="x30-hubcard" onclick="x30Go({page:\'pdflib\',cycle:\''+cycle+'\',year:\''+year+'\',branch:\''+br+'\',subject:\''+(hasLessons?escAttr(nm):'')+'\',tab:\'sum\',mode:\'\',term:0})">'+xi('file',26)+'<h3>📄 ملفات PDF</h3><p class="set-note">ملخصات · تمارين · فروض واختبارات</p></div>'+
   '</section></div>';
  return h;
};
/* 33.3 مكتبة PDF الجديدة السهلة: ملف pdfs.json في المستودع هو كل شيء — إضافة وحذف بلا أي خدمة خارجية */
var X33_PDFS=null;
var __x33Files=x30Files;
x30Files=function(force,cb){
  if(X33_PDFS&&!force){cb(X33_PDFS);return}
  try{
    fetch('./pdfs.json?nc='+Date.now()).then(function(r){
      if(!r.ok){throw new Error('nojson')}
      return r.json();
    }).then(function(list){
      if(!list||typeof list.length!=='number'){throw new Error('bad')}
      X33_PDFS=list;
      try{localStorage.setItem('x33_pdfs_cache',JSON.stringify(list))}catch(e2){}
      cb(list);
    }).catch(function(){
      /* لا يوجد pdfs.json أو لا إنترنت: نستخدم آخر نسخة محفوظة على الجهاز */
      var cached=null;
      try{cached=JSON.parse(localStorage.getItem('x33_pdfs_cache')||'null')}catch(e3){cached=null}
      if(cached&&typeof cached.length==='number'){X33_PDFS=cached;cb(cached);return}
      cb(null,'nojson');
    });
  }catch(e){cb(null,'nojson')}
};
function x33LibReload(){
  X33_PDFS=null;
  toast('🔄 نحدّث المكتبة…','info');
  x30Files(true,function(){try{render()}catch(e){}});
}
/* 33.4 صفحة المكتبة: عنوان واحد في موضعه + زر تحديث + مكتبة خاصة بالشعبة + رسالة صادقة عند غياب pdfs.json */
function renderX30Lib(){
  var r=ROUTE;
  var cycle=r.cycle||'sec',year=r.year||'s2',subject=r.subject||'';
  var branch=(r.branch||'')+'';
  var tab=r.tab||'sum',mode=r.mode||'hw',term=r.term||0;
  var yName=x30YearOf(year);
  var bObj=x32Branch(year,branch);
  var bName=(branch&&bObj)?bObj.name:'';
  var h='<div class="fade-in x30-home"><section class="x17-card">'+
   '<div class="x30-crumb"><button onclick="navigate(\'home\')">الرئيسية</button><span>←</span>'+
   '<button onclick="x30Go({page:\'year\',cycle:\''+cycle+'\',year:\''+year+'\'})">'+escAttr(yName)+'</button>'+
   (bName?('<span>←</span><button onclick="x30Go({page:\'branch\',cycle:\''+cycle+'\',year:\''+year+'\',branch:\''+branch+'\'})">'+escAttr(bName)+'</button>'):'')+
   '</div>'+
   '<h2>📄 مكتبة ملفات PDF'+(bName?(' — '+escAttr(bName)):'')+(subject?(' — '+escAttr(subject)):'')+'</h2><div>';
  for(var t=0;t<X30_TYTAB.length;t++){
    var tt=X30_TYTAB[t];
    h+='<button class="x30-tab'+((tt.id===tab)?' on':'')+'" onclick="x30Go({page:\'pdflib\',cycle:\''+cycle+'\',year:\''+year+'\',branch:\''+branch+'\',subject:\''+escAttr(subject)+'\',tab:\''+tt.id+'\',mode:\'\',term:0})">'+tt.name+'</button>';
  }
  h+='</div>';
  if(tab==='hwex'){
    h+='<div>'+
     '<button class="x30-tab'+((mode==='hw')?' on':'')+'" onclick="x30Go({page:\'pdflib\',cycle:\''+cycle+'\',year:\''+year+'\',branch:\''+branch+'\',subject:\''+escAttr(subject)+'\',tab:\'hwex\',mode:\'hw\',term:0})">📝 الفروض</button>'+
     '<button class="x30-tab'+((mode==='test')?' on':'')+'" onclick="x30Go({page:\'pdflib\',cycle:\''+cycle+'\',year:\''+year+'\',branch:\''+branch+'\',subject:\''+escAttr(subject)+'\',tab:\'hwex\',mode:\'test\',term:0})">🧪 الاختبارات</button>'+
     '</div><div>';
    for(var tm=1;tm<=3;tm++){
      h+='<button class="x30-tab'+((term===tm)?' on':'')+'" onclick="x30Go({page:\'pdflib\',cycle:\''+cycle+'\',year:\''+year+'\',branch:\''+branch+'\',subject:\''+escAttr(subject)+'\',tab:\'hwex\',mode:\''+mode+'\',term:'+tm+'})">'+X30_TERMS[tm]+'</button>';
    }
    h+='</div>';
  }
  h+='<div class="x30-row" style="margin-top:8px"><button class="btn btn-sm" onclick="x33LibReload()">🔄 تحديث المكتبة</button></div>';
  h+='</section><section class="x17-card" id="x30-list"><p class="x17-empty">⏳ جارٍ تحميل المكتبة…</p></section></div>';
  x30Files(false,function(files,why){
    var box=gid('x30-list');
    if(!box){return}
    if(!files){
      if(why==='nojson'){
        box.innerHTML='<div class="x30-err">📄 لم تُضف ملفات PDF بعد.<br>يضيف الإدارة الملفات برفعها إلى المستودع مع ملف pdfs.json — وتظهر هنا فورًا دون تعديل الكود.<br>الشرح الكامل خطوة بخطوة في «لوحة الإدارة» داخل التطبيق.</div>';
      }else{
        box.innerHTML='<div class="x30-err">⚠️ تعذر جلب الملفات الآن — تحقق من اتصالك واضغط «🔄 تحديث المكتبة».</div>';
      }
      return;
    }
    var rows=[];
    for(var i=0;i<files.length;i++){
      var f=files[i];
      var okC=(!cycle||f.cycle===cycle),okY=(!year||f.year===year),okS=(!subject||f.subject===subject);
      /* خصوصية الشعب: ملف الشعبة يظهر لطلاب شعبته فقط، والملف العام يظهر للجميع */
      var fbr=(''+(f.branch||'')).split(',');var okB=(!f.branch)||(branch&&(fbr.indexOf(branch)>=0));      var okT=true;
      if(tab==='sum'){okT=(f.type==='sum')}
      else if(tab==='ex'){okT=(f.type==='ex')}
      else{okT=(f.type===mode&&(!term||!f.term||(''+f.term)===(''+term)))}
      if(okC&&okY&&okS&&okB&&okT){rows.push(f)}
    }
    try{rows.sort(function(a,b){var ta=(a&&a.term)?(parseInt(a.term,10)||0):0,tb=(b&&b.term)?(parseInt(b.term,10)||0):0;if(ta!==tb){return ta-tb}return (''+((a&&a.name)||'')).localeCompare(''+((b&&b.name)||''))})}catch(e35s){}
    if(!rows.length){
      box.innerHTML='<p class="x17-empty">'+(bName?('لا توجد ملفات في مكتبة هذه الشعبة بعد — تضيفها إدارة المنصة قريبًا.'):'لا توجد ملفات في هذا القسم بعد — تُضاف تدريجيًا.')+'</p>';
      return;
    }
    var b='';
    for(var k=0;k<rows.length;k++){
      var ff=rows[k];
      var metaParts=[X30_TYPE[ff.type]||'',x30YearOf(ff.year)||''];
      if(bName){metaParts.push(bName)}
      if(ff.subject){metaParts.push(ff.subject)}
      if(ff.term&&(X30_TERMS[ff.term]||'')){metaParts.push(X30_TERMS[ff.term])}
      var meta='';
      for(var m=0;m<metaParts.length;m++){if(metaParts[m]){meta+=((m>0&&meta)?' · ':'')+escAttr(metaParts[m])}}
      b+='<div class="x30-file"><b>'+escAttr(ff.name||'ملف')+'</b>'+
       ((ff.descr)?('<div class="x30-meta">'+escAttr(ff.descr)+'</div>'):'')+
       ((meta)?('<div class="x30-meta">'+meta+'</div>'):'')+
       '<button class="btn btn-sm" onclick="x30Preview('+ff.id+')">👁 معاينة قبل التنزيل</button> '+
       '<button class="btn btn-sm btn-primary" onclick="x30Dl('+ff.id+')">⬇️ تنزيل</button></div>';
    }
    box.innerHTML=b;
  });
  return h;
}
/* 33.4.1 إصلاح المعاينة والتنزيل: البحث في ملفات pdfs.json الجديدة أولًا ثم في النظام القديم */
var __x33Find=x30Find;
x30Find=function(id){
  try{
    var l=X33_PDFS;
    if(l&&l.length){
      for(var i=0;i<l.length;i++){if((''+l[i].id)===(''+id)){return l[i]}}
    }
  }catch(e){}
  return __x33Find(id);
};
/* 33.5 لوحة الإدارة: الشرح السهل + مولّد سطر pdfs.json (بشعبة خاصة أو عام) */
function x33CopyTxt(txt){
  try{
    var ta=document.createElement('textarea');
    ta.value=txt;ta.style.position='fixed';ta.style.opacity='0';
    document.body.appendChild(ta);ta.select();
    var ok=false;
    try{ok=document.execCommand('copy')}catch(e){ok=false}
    try{ta.remove()}catch(e){}
    if(ok){toast('✅ نُسخ السطر — الصقه في ملف pdfs.json','success');return}
  }catch(e){}
  toast('📋 انسخ السطر يدويًا من المربع','info');
}
function x33BranchOpts(yr){
  var bs=X32_BRANCHES[yr]||null;
  var o='<option value="">عام — لكل الشعب</option>';
  if(bs){for(var i=0;i<bs.length;i++){o+='<option value="'+bs[i].id+'">'+bs[i].name+'</option>'}}
  return o;
}
function x33BranchSync(){
  try{
    var yr=(gid('x33g-year')||{}).value||'m1';
    var bs=gid('x33g-branch');
    if(bs){bs.innerHTML=x33BranchOpts(yr)}
  }catch(e){}
}
function x33GenLine(){
  var nm=((gid('x33g-name')||{}).value||'').trim();
  var yr=(gid('x33g-year')||{}).value||'s2';
  var cy=(yr.charAt(0)==='m')?'mid':'sec';
  var br=((gid('x33g-branch')||{}).value||'');
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
function x33GenModal(line,nm,fn){
  xModal('📋 سطر pdfs.json جاهز — انسخه والصقه',
   '<p class="x33-step"><b>1.</b> انسخ السطر التالي.</p>'+
   '<textarea class="x33-out" id="x33g-copy">'+escAttr(line)+'</textarea>'+
   '<p class="x33-step"><b>2.</b> افتح ملف <b>pdfs.json</b> في المستودع.</p>'+
   '<p class="x33-step"><b>3.</b> الصق السطر داخل القوس المربع <b>[ ]</b> — سطر واحد لا يحتاج أي فاصلة نهائيًا، وعند وجود عدة أسطر ضع فاصلة <b>,</b> بين كل سطرين فقط.</p>'+
   '<p class="x33-step"><b>4.</b> اضغط Commit changes — سيظهر الملف «'+escAttr(nm)+'» في مكتبة شعبته مباشرة.</p>'+
   '<div class="x30-row"><button class="btn btn-primary" onclick="x33CopyTxt(document.getElementById(\'x33g-copy\').value)">📋 نسخ السطر</button></div>');
}
function x33AdminSect(){
  var yOpts='',firstY='';
  for(var k in X30_YEARS){if(!firstY){firstY=k}yOpts+='<option value="'+k+'">'+X30_YEARS[k]+'</option>'}
  var h='<section class="x17-card x33-admin" id="x33-admin"><h3>📚 مكتبة PDF — الطريقة السهلة الجديدة (pdfs.json)</h3>'+
   '<p class="x33-step"><b>الخطوة 1:</b> ارفع ملف الـ PDF نفسه إلى المستودع (Add file ← Upload files) بنفس طريقة رفع الصور — باسم بسيط بلا مسافات مثل <b>s2-math-1.pdf</b>.</p>'+
   '<p class="x33-step"><b>الخطوة 2:</b> افتح ملف <b>pdfs.json</b> واضغط قلم التعديل ✏️.</p>'+
   '<p class="x33-step"><b>الخطوة 3:</b> عبّئ الخانات بالأسفل — واختر <b>الشعبة</b> الخاصة بالملف (أو «عام» لملف يشترك فيه الجميع) — ثم اضغط «📋 توليد السطر» وانسخ السطر والصقه داخل <b>[ ]</b>: سطر واحد بلا فاصلة، وعدة أسطر ضع فاصلة <b>,</b> بين كل سطرين.</p>'+
   '<p class="x33-step"><b>الخطوة 4 (الحذف):</b> لحذف ملف من المكتبة: امسح سطره من pdfs.json واضغط Commit — ولحذفه نهائيًا احذف ملف الـ PDF نفسه من المستودع أيضًا.</p>'+
   '<div class="x33-gen">'+
   '<input class="x30-inp" id="x33g-name" placeholder="الاسم الظاهر للطلاب (مثل: ملخص الدوال)">'+
   '<input class="x30-inp" id="x33g-file" placeholder="اسم ملف الـ PDF كما رفعته (مثل: s2-math-1.pdf)">'+
   '<div class="x30-row"><select class="x30-inp" id="x33g-year" style="width:auto" onchange="x33TermSync();x33BranchSync()">'+yOpts+'</select>'+
   '<select class="x30-inp" id="x33g-branch" style="width:auto">'+x33BranchOpts(firstY)+'</select>'+
   '<select class="x30-inp" id="x33g-type" style="width:auto" onchange="x33TermSync()">'+
   '<option value="sum">ملخص</option><option value="ex">تمارين</option><option value="hw">فرض</option><option value="test">اختبار</option></select>'+
   '<select class="x30-inp" id="x33g-term" style="width:auto;display:none">'+
   '<option value="1">الفصل الأول</option><option value="2">الفصل الثاني</option><option value="3">الفصل الثالث</option></select></div>'+
   '<input class="x30-inp" id="x33g-subject" placeholder="المادة (مثل: الرياضيات) — اتركها فارغة لملف عام">'+
   '<input class="x30-inp" id="x33g-descr" placeholder="وصف مختصر (اختياري)">'+
   '<button class="btn btn-primary" onclick="x33GenLine()">📋 توليد السطر</button>'+
   '<textarea class="x33-out" id="x33g-out" placeholder="سيظهر السطر الجاهز هنا بعد الضغط على «توليد السطر»"></textarea>'+
   '</div></section>';
  return h;
}
function x33TermSync(){
  try{
    var tp=(gid('x33g-type')||{}).value||'sum';
    var tr=gid('x33g-term');
    if(tr){tr.style.display=((tp==='hw'||tp==='test')?'':'none')}
  }catch(e){}
}
var __x33Admin=renderAdminPage18;
renderAdminPage18=function(){
  var h=__x33Admin();
  try{
    if(isAdmin()){
      var i=h.indexOf('<section class="x17-card x30-admin"');
      if(i>0){h=h.slice(0,i)+x33AdminSect()+h.slice(i)}
      else{var j=h.lastIndexOf('</div>');if(j>0){h=h.slice(0,j)+x33AdminSect()+h.slice(j)}}
    }
  }catch(e){}
  return h;
};
/* 33.6 بيانات الإصدار 33.1 */
APP_META.ver='33.1';APP_META.date='2026-10-31';
APP_META.notes='الإصدار 33.1 — مكتبة PDF خاصة بكل شعبة: لكل جذع وكل شعبة ملفاتها الخاصة (ملخصات وتمارين وفروض واختبارات) لا يراها طلاب الشعب الأخرى، مع إصلاح أزرار المعاينة والتنزيل لتعمل مع النظام الجديد، إضافة إلى إصلاحات الإصدار 33: لا خط أبيض أعلى الشاشة، واسم الشعبة والسنة في موضعه الصحيح مرة واحدة، ونصوص أوضح وأكبر، وطريقة سهلة تمامًا لإدارة الملفات عبر pdfs.json ومولّد السطر في لوحة الإدارة، ولوحة الإدارة تفتح لحساب الإدارة وحده.';
try{APP_META.changelog.unshift('الإصدار 33.1 — مكتبة PDF خاصة بكل شعبة (لا ملفات مشتركة بين الشعب): اختر الشعبة عند توليد السطر فيظهر الملف لطلابها فقط، وأُصلحت أزرار المعاينة والتنزيل لتعمل مع pdfs.json. إضافة إلى إصلاحات الإصدار 33: قتل الخط الأبيض أعلى الشاشة نهائيًا، واسم الشعبة/السنة مرة واحدة في موضعه الصحيح، وكل النصوص الباهتة صارت أكبر وأوضح في الوضعين الرأسي والأفقي.')}catch(e){}
function fallbackNews18(){
  return [{title:'الإصدار 33.1 — مكتبة PDF خاصة بكل شعبة',
    body:'لكل جذع وكل شعبة ملفاتها الخاصة — ملخصات وتمارين وفروض واختبارات لا يراها إلا طلابها، مع إصلاح أزرار المعاينة والتنزيل وكل إصلاحات الإصدار 33: لا خط أبيض أعلى الشاشة، وعنوان واحد في موضعه الصحيح، ونصوص أوضح.',
    date:APP_META.date}];
}
/* 33.7 صلاحية الإدارة: حساب الإدارة يفتح لوحة الإدارة تلقائيًا — والطلاب لا يرونها أبدًا */
var __x33SaveUser=x18SaveUser;
x18SaveUser=function(profile){
  try{
    if(profile){
      var em=(''+(profile.email||XAUTH18.email||'')).toLowerCase();
      if(em&&em===(''+XOWNER_MAIL).toLowerCase()){profile.role='admin'}
    }
  }catch(e){}
  __x33SaveUser(profile);
};
function x33OwnerFix(){
  try{
    if(USER.session&&USER.profile&&USER.profile.role!=='admin'){
      var em=(''+(USER.profile.email||((USER.session.user||{}).email)||'')).toLowerCase();
      if(em&&em===(''+XOWNER_MAIL).toLowerCase()){USER.profile.role='admin';x18SaveUser(USER.profile)}
    }
  }catch(e){}
}
var __x33Restore=x18Restore;
x18Restore=function(){__x33Restore();try{x33OwnerFix()}catch(e){}};
var __x33AdminGate=renderAdminPage18;
renderAdminPage18=function(){
  if(!USER.session){return __x33AdminGate()}
  if(!isAdmin()){
    return '<div class="auth-wrap fade-in"><div class="auth-card glass-strong"><h3>🛡️ لوحة الإدارة</h3><p class="auth-note">هذه الصفحة مخصصة لإدارة مؤسسة X.HAK فقط.</p><button class="btn btn-block" onclick="navigate(\'home\')">العودة للرئيسية</button></div></div>';
  }
  return __x33AdminGate();
};
try{x33OwnerFix()}catch(e){}
