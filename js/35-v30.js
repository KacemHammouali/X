'use strict';
/* ============ الطبقة 30 — منصة X التعليمية: الطوران + مكتبة PDF ============ */
/* 30.1 الهوية الرسمية والشعار الجديد (logo.jpg يُرفع للمستودع بنفس الاسم) */
var X30_BRAND={name:'منصة X التعليمية',desc:'منصة X التعليمية للطورين المتوسط والثانوي'};
var X30_LOGO='<img src="./icon-512.png" alt="شعار منصة X التعليمية" class="x30-logo">';
/* 30.2 بنية الطور ← السنة ← المادة (الشعبة تُضاف مستقبلًا دون هدم) */
var X30_CYCLES=[
 {id:'mid',name:'الطور المتوسط',icon:'book',desc:'السنوات الأربع + قسم شهادة التعليم المتوسط',years:['m1','m2','m3','m4']},
 {id:'sec',name:'الطور الثانوي',icon:'atom',desc:'السنوات الثلاث',years:['s1','s2','s3']}
];
var X30_YEARS={m1:'السنة الأولى متوسط',m2:'السنة الثانية متوسط',m3:'السنة الثالثة متوسط',m4:'السنة الرابعة متوسط',s1:'السنة الأولى ثانوي',s2:'السنة الثانية ثانوي',s3:'السنة الثالثة ثانوي'};
/* المواد المفتوحة فعليًا فقط — لا محتوى تخميني */
var X30_SUBJECTS={s2:[{id:'math',name:'الرياضيات'},{id:'phys',name:'الفيزياء'}]};
var X30_TYPE={sum:'ملخص',ex:'تمارين',hw:'فرض',test:'اختبار'};
var X30_TYTAB=[{id:'sum',name:'الملخصات'},{id:'ex',name:'التمارين'},{id:'hwex',name:'الفروض والاختبارات'}];
var X30_TERMS=['','الفصل الأول','الفصل الثاني','الفصل الثالث'];
function x30CycleOf(id){for(var i=0;i<X30_CYCLES.length;i++){if(X30_CYCLES[i].id===id)return X30_CYCLES[i]}return null}
function x30YearOf(id){return X30_YEARS[id]||''}
/* 30.3 التوجيه عبر X30_HASH (لا يكسر توجيه hash الأصلي) */
var X30_HASH=null;
var __x30PH=parseHash;
parseHash=function(){
  if(X30_HASH){var r=X30_HASH;X30_HASH=null;ROUTE=r;return}
  return __x30PH();
};
function x30Go(route){X30_HASH=route;try{render()}catch(e){}}
/* 30.4 محرك العرض: الصفحات القديمة كما هي + صفحات الطور/السنة/المادة/المكتبة */
var __x30R=render;
render=function(){
  parseHash();
  if(authScreenNeeded()){ROUTE={page:'auth',subject:null,chapter:null}}
  var app=document.getElementById('app');
  var body='';
  switch(ROUTE.page){
    case 'subject':body=renderSubject(ROUTE.subject||'math');break;
    case 'subjects':body=renderSubjectsPage();break;
    case 'lesson':body=renderLesson(ROUTE.subject,ROUTE.chapter);break;
    case 'quiz':body=renderQuiz(ROUTE.subject,ROUTE.chapter);break;
    case 'dash':body=renderDash();break;
    case 'profile':body=renderProfilePage18();break;
    case 'settings':body=renderSettingsPage();break;
    case 'admin':body=renderAdminPage18();break;
    case 'auth':body=renderAuth18();break;
    case 'cycle':body=renderX30Cycle(ROUTE.cycle);break;
    case 'year':body=renderX30Year(ROUTE.cycle,ROUTE.year);break;
    case 'subjecthub':body=renderX30Hub(ROUTE.cycle,ROUTE.year,ROUTE.subject);break;
    case 'pdflib':body=renderX30Lib();break;
    default:body=renderHome18();
  }
  var navHtml=(ROUTE.page==='auth')?'':renderNavbar();
  app.innerHTML=navHtml+body+updBanner()+renderBottomNav();
  typesetApp();
  try{kpSync()}catch(e){}
};
/* 30.5 الشريط السفلي: أربعة تبويبات فقط */
renderBottomNav=function(){
  if(ROUTE.page==='auth')return '';
  var act=function(pages){return (pages.indexOf(ROUTE.page)>=0)?' bnav-on':''};
  return '<nav class="bnav">'+
   '<button class="bnav-btn'+act(['home','cycle','year','subjecthub','pdflib','subjects','subject','lesson','quiz'])+'" onclick="navigate(\'home\')">'+xi('home',21)+'<span>الرئيسية</span></button>'+
   '<button class="bnav-btn'+act(['dash'])+'" onclick="navigate(\'dash\')">'+xi('chart',21)+'<span>تقدّمي</span></button>'+
   '<button class="bnav-btn'+act(['profile'])+'" onclick="navigate(\'profile\')">'+avatarHTML(24,'av-nav')+'<span>ملفي</span></button>'+
   '<button class="bnav-btn'+act(['settings'])+'" onclick="navigate(\'settings\')">'+xi('gear',21)+'<span>الإعدادات</span></button>'+
   '</nav>';
};
/* 30.6 الصفحة الرئيسية الجديدة: تعريف + بطاقتا الطورين + التقدم */
var __x30Home=renderHome18;
renderHome18=function(){
  var signed=!!(USER.session&&USER.profile);
  var st=xStats();
  var h='<div class="fade-in x30-home">';
  h+='<section class="x20-hero glass">'+X30_LOGO+
   '<h2>أهلًا بك مجددًا في '+X30_BRAND.name+' 👋</h2>'+
   '<p>'+X30_BRAND.desc+' — منصة جزائرية تجمع لك: الدروس والملخصات والقوانين والتمارين والفروض والاختبارات وملفات PDF، مع متابعة تقدمك خطوة بخطوة.</p>'+
   '<span class="x30-chip">📘 الدروس</span>'+
   '<span class="x30-chip">📄 ملفات PDF</span>'+
   '<span class="x30-chip">📝 فروض واختبارات</span>'+
   '<span class="x30-chip">📊 متابعة التقدم</span>'+
   (signed?'':'<button class="btn btn-primary" onclick="navigate(\'auth\')">🔑 ابدأ الآن</button>')+
   '</section>';
  h+='<section class="x30-cycles">'+
   '<div class="x30-cycle" onclick="x30Go({page:\'cycle\',cycle:\'mid\'})"><div class="x30-cico">'+xi('book',30)+'</div><h3>الطور المتوسط</h3><p class="set-note">السنوات الأربع + قسم شهادة التعليم المتوسط</p><button class="btn btn-sm btn-primary">الدخول إلى الطور المتوسط</button></div>'+
   '<div class="x30-cycle" onclick="x30Go({page:\'cycle\',cycle:\'sec\'})"><div class="x30-cico">'+xi('atom',30)+'</div><h3>الطور الثانوي</h3><p class="set-note">السنوات الثلاث — شعب علمية وتقنية ورياضيات</p><button class="btn btn-sm btn-primary">الدخول إلى الطور الثانوي</button></div>'+
   '</section>';
  h+='<section class="x17-card"><h3>📊 تقدّمي الدراسي</h3>'+
   '<div class="x17-prog big"><span style="width:'+st.pct+'%"></span></div>'+
   '<p class="set-note">أكملت '+st.done+' من '+st.total+' درسًا — استمر، أنت تتقدم!</p>'+
   '<button class="btn" onclick="navigate(\'dash\')">📈 تقرير التقدم الكامل</button></section>';
  h+='</div>';
  return h;
};
/* 30.7 صفحة الطور: السنوات */
function renderX30Cycle(cycle){
  var c=x30CycleOf(cycle);
  if(!c){return '<div class="fade-in x17-card"><p class="x17-empty">غير موجود</p></div>'}
  var h='<div class="fade-in x30-home"><section class="x17-card">'+
   '<div class="x30-crumb"><button onclick="navigate(\'home\')">الرئيسية</button><span>←</span><b>'+escAttr(c.name)+'</b></div>'+
   '<h2>'+xi(c.icon,22)+' '+escAttr(c.name)+'</h2>'+
   '<p class="set-note">'+escAttr(c.desc)+' — اختر سنواتك الدراسية.</p></section><section class="x30-cycles">';
  for(var i=0;i<c.years.length;i++){
    var yid=c.years[i];
    h+='<div class="x30-cycle" onclick="x30Go({page:\'year\',cycle:\''+cycle+'\',year:\''+yid+'\'})">'+
     '<h3>'+escAttr(x30YearOf(yid))+'</h3>'+
     ((yid==='m4')?'<span class="x30-chip">قسم شهادة التعليم المتوسط BEM</span>':'')+
     '<button class="btn btn-sm">دخول</button></div>';
  }
  h+='</section></div>';
  return h;
}
/* 30.8 صفحة السنة: المواد المفتوحة فقط (حالة صادقة لغير المفتوح) */
function renderX30Year(cycle,year){
  var yName=x30YearOf(year);
  if(!yName){return '<div class="fade-in x17-card"><p class="x17-empty">غير موجود</p></div>'}
  var subs=X30_SUBJECTS[year]||null;
  var h='<div class="fade-in x30-home"><section class="x17-card">'+
   '<div class="x30-crumb"><button onclick="navigate(\'home\')">الرئيسية</button><span>←</span>'+
   '<button onclick="x30Go({page:\'cycle\',cycle:\''+cycle+'\'})">'+escAttr(x30CycleOf(cycle)?x30CycleOf(cycle).name:'')+'</button><span>←</span><b>'+escAttr(yName)+'</b></div>'+
   '<h2>'+escAttr(yName)+'</h2>';
  if(subs){
    h+='</section><section class="x30-cycles">';
    for(var i=0;i<subs.length;i++){
      h+='<div class="x30-cycle" onclick="x30Go({page:\'subjecthub\',cycle:\''+cycle+'\',year:\''+year+'\',subject:\''+subs[i].id+'\'})">'+
       '<h3>'+escAttr(subs[i].name)+'</h3></div>';
    }
    h+='</section>';
  }else{
    h+='<div class="x30-err">📘 المواد الدراسية لهذا المستوى لم تُفتح بعد — نضيفها تدريجيًا في الإصدارات القادمة (31 ثم 32) وفق المنهاج الجزائري الرسمي، ودون أي محتوى تخميني.</div>'+
     '<button class="btn" onclick="x30Go({page:\'pdflib\',cycle:\''+cycle+'\',year:\''+year+'\',subject:\'\',tab:\'sum\',mode:\'\',term:0})">📄 مكتبة PDF لهذه السنة</button></section>';
  }
  h+='</div>';
  return h;
}
/* 30.9 مركز المادة: الدروس | ملفات PDF */
function renderX30Hub(cycle,year,subject){
  var subs=X30_SUBJECTS[year]||[];
  var nm='';
  for(var i=0;i<subs.length;i++){if(subs[i].id===subject)nm=subs[i].name}
  var hasLessons=!!nm;
  var h='<div class="fade-in x30-home"><section class="x17-card">'+
   '<div class="x30-crumb"><button onclick="navigate(\'home\')">الرئيسية</button><span>←</span>'+
   '<button onclick="x30Go({page:\'year\',cycle:\''+cycle+'\',year:\''+year+'\'})">'+escAttr(x30YearOf(year))+'</button><span>←</span><b>'+escAttr(hasLessons?nm:'المادة')+'</b></div>'+
   '<h2>'+escAttr(hasLessons?nm:'المادة')+'</h2></section><section class="x30-hub">'+
   '<div class="x30-hubcard" onclick="'+(hasLessons?('navigate(\'subject\',\''+subject+'\')'):'x30NoLessons()')+'">'+xi('book',26)+'<h3>📘 الدروس</h3><p class="set-note">الوحدات والدروس التفاعلية</p></div>'+
   '<div class="x30-hubcard" onclick="x30Go({page:\'pdflib\',cycle:\''+cycle+'\',year:\''+year+'\',subject:\''+(hasLessons?escAttr(nm):'')+'\',tab:\'sum\',mode:\'\',term:0})">'+xi('file',26)+'<h3>📄 ملفات PDF</h3><p class="set-note">ملخصات · تمارين · فروض واختبارات</p></div>'+
   '</section></div>';
  return h;
}
function x30NoLessons(){toast('📘 دروس هذه المادة تُفتح في الإصدارات القادمة','info')}
/* 30.10 مكتبة PDF: إعدادات الاتصال الخارجي + الجلب */
var X30_CACHE={files:null,cfg:null};
function x30Cfg(cb){
  if(X30_CACHE.cfg){cb(X30_CACHE.cfg);return}
  try{
    fetch('./x30-config.json').then(function(r){if(!r.ok)throw new Error('cfg');return r.json()}).then(function(j){
      if(j&&j.url&&j.anon){X30_CACHE.cfg=j;cb(j)}else{cb(null)}
    }).catch(function(){cb(null)});
  }catch(e){cb(null)}
}
function x30Files(force,cb){
  if(X30_CACHE.files&&!force){cb(X30_CACHE.files);return}
  x30Cfg(function(cfg){
    if(!cfg){cb(null,'noconfig');return}
    try{
      fetch(cfg.url+'/rest/v1/x30_files?select=*&order=created_at.desc',{headers:{'apikey':cfg.anon,'Authorization':'Bearer '+cfg.anon}}).then(function(r){return r.json()}).then(function(list){
        if(list&&typeof list.length==='number'){X30_CACHE.files=list;cb(list)}else{cb(null,'bad')}
      }).catch(function(){cb(null,'err')});
    }catch(e){cb(null,'err')}
  });
}
function x30Find(id){
  var fs=X30_CACHE.files||[];
  for(var i=0;i<fs.length;i++){if((''+fs[i].id)===(''+id))return fs[i]}
  return null;
}
/* 30.11 صفحة المكتبة: الملخصات | التمارين | الفروض والاختبارات (بالفصول) */
function renderX30Lib(){
  var r=ROUTE;
  var cycle=r.cycle||'sec',year=r.year||'s2',subject=r.subject||'';
  var tab=r.tab||'sum',mode=r.mode||'hw',term=r.term||0;
  var yName=x30YearOf(year);
  var h='<div class="fade-in x30-home"><section class="x17-card">'+
   '<div class="x30-crumb"><button onclick="navigate(\'home\')">الرئيسية</button><span>←</span>'+
   '<button onclick="x30Go({page:\'year\',cycle:\''+cycle+'\',year:\''+year+'\'})">'+escAttr(yName)+'</button><span>←</span><b>📄 مكتبة PDF'+(subject?(' — '+escAttr(subject)):'')+'</b></div>'+
   '<h2>📄 مكتبة ملفات PDF'+(subject?(' — '+escAttr(subject)):'')+'</h2><div>';
  for(var t=0;t<X30_TYTAB.length;t++){
    var tt=X30_TYTAB[t];
    h+='<button class="x30-tab'+((tt.id===tab)?' on':'')+'" onclick="x30Go({page:\'pdflib\',cycle:\''+cycle+'\',year:\''+year+'\',subject:\''+escAttr(subject)+'\',tab:\''+tt.id+'\',mode:\'\',term:0})">'+tt.name+'</button>';
  }
  h+='</div>';
  if(tab==='hwex'){
    h+='<div>'+
     '<button class="x30-tab'+((mode==='hw')?' on':'')+'" onclick="x30Go({page:\'pdflib\',cycle:\''+cycle+'\',year:\''+year+'\',subject:\''+escAttr(subject)+'\',tab:\'hwex\',mode:\'hw\',term:0})">📝 الفروض</button>'+
     '<button class="x30-tab'+((mode==='test')?' on':'')+'" onclick="x30Go({page:\'pdflib\',cycle:\''+cycle+'\',year:\''+year+'\',subject:\''+escAttr(subject)+'\',tab:\'hwex\',mode:\'test\',term:0})">🧪 الاختبارات</button>'+
     '</div><div>';
    for(var tm=1;tm<=3;tm++){
      h+='<button class="x30-tab'+((term===tm)?' on':'')+'" onclick="x30Go({page:\'pdflib\',cycle:\''+cycle+'\',year:\''+year+'\',subject:\''+escAttr(subject)+'\',tab:\'hwex\',mode:\''+mode+'\',term:'+tm+'})">'+X30_TERMS[tm]+'</button>';
    }
    h+='</div>';
  }
  h+='</section><section class="x17-card" id="x30-list"><p class="x17-empty">⏳ جارٍ تحميل المكتبة…</p></section></div>';
  x30Files(false,function(files,why){
    var box=gid('x30-list');
    if(!box)return;
    if(!files){
      if(why==='noconfig'){
        box.innerHTML='<div class="x30-err">⚙️ مكتبة PDF جاهزة تقنيًا، لكن لم يُربط مخزن الملفات الخارجي بعد.<br>يظهر المحتوى تلقائيًا فور تجهيز الإدارة للاتصال — دون إعادة نشر المنصة.</div>';
      }else{
        box.innerHTML='<div class="x30-err">⚠️ تعذر جلب الملفات الآن — تحقق من اتصالك وحاول مجددًا.</div>';
      }
      return;
    }
    var rows=[];
    for(var i=0;i<files.length;i++){
      var f=files[i];
      var okC=(!cycle||f.cycle===cycle),okY=(!year||f.year===year),okS=(!subject||f.subject===subject);
      var okT=true;
      if(tab==='sum'){okT=(f.type==='sum')}
      else if(tab==='ex'){okT=(f.type==='ex')}
      else{okT=(f.type===mode&&(!term||!f.term||(''+f.term)===(''+term)))}
      if(okC&&okY&&okS&&okT){rows.push(f)}
    }
    if(!rows.length){
      box.innerHTML='<p class="x17-empty">لا توجد ملفات في هذا القسم بعد — تُضاف تدريجيًا.</p>';
      return;
    }
    var b='';
    for(var k=0;k<rows.length;k++){
      var ff=rows[k];
      b+='<div class="x30-file"><b>'+escAttr(ff.name||'ملف')+'</b>'+
       ((ff.descr)?('<div class="x30-meta">'+escAttr(ff.descr)+'</div>'):'')+
       '<div class="x30-meta">'+escAttr(X30_TYPE[ff.type]||'')+' · '+escAttr(x30YearOf(ff.year)||'')+
       ((ff.term)?(' · '+X30_TERMS[ff.term]||''):'')+
       ((ff.size)?(' · '+(Math.max(1,Math.round((ff.size||0)/1024)))+' ك.ب'):'')+'</div>'+
       '<button class="btn btn-sm" onclick="x30Preview('+ff.id+')">👁 معاينة قبل التنزيل</button> '+
       '<button class="btn btn-sm btn-primary" onclick="x30Dl('+ff.id+')">⬇️ تنزيل</button></div>';
    }
    box.innerHTML=b;
  });
  return h;
}
/* 30.12 المعاينة قبل التنزيل + التنزيل الاختياري */
function x30Preview(id){
  var f=x30Find(id);
  if(!f){toast('⚠️ لم يُعثر على الملف — حدّث الصفحة','error');return}
  xModal('👁 معاينة: '+escAttr(f.name||'ملف PDF'),
   '<div class="x30-meta">'+escAttr(X30_TYPE[f.type]||'')+' · '+escAttr(x30YearOf(f.year)||'')+
   ((f.subject)?(' · '+escAttr(f.subject)):'')+((f.term)?(' · '+(X30_TERMS[f.term]||'')):'')+'</div>'+
   ((f.descr)?('<p class="set-note">'+escAttr(f.descr)+'</p>'):'')+
   '<iframe class="x30-preview-frame" src="'+escAttr(f.url)+'" title="معاينة PDF"></iframe>'+
   '<button class="btn btn-primary" onclick="x30Dl('+f.id+')">⬇️ تنزيل PDF</button>');
}
function x30Dl(id){
  var f=x30Find(id);
  if(!f){toast('⚠️ لم يُعثر على الملف','error');return}
  toast('⏳ جارٍ تنزيل: '+(f.name||'الملف')+'…','info');
  var done=false;
  var fallback=function(){
    if(done){return}
    done=true;
    try{
      window.open(f.url,'_blank');
      toast('ℹ️ فتحنا الملف في نافذة جديدة — نزّله من هناك','info');
    }catch(e){toast('⚠️ تعذر التنزيل — تحقق من وجود الملف في المستودع','error')}
  };
  var timer=setTimeout(fallback,25000);
  try{
    fetch(f.url).then(function(r){if(!r.ok)throw new Error('dl');return r.blob()}).then(function(b){
      if(done){return}
      done=true;
      clearTimeout(timer);
      var u=URL.createObjectURL(b);
      var a=document.createElement('a');
      a.href=u;
      a.download=(f.name||'ملف')+'.pdf';
      document.body.appendChild(a);
      a.click();
      setTimeout(function(){try{URL.revokeObjectURL(u);a.remove()}catch(e){}},4000);
      toast('✅ اكتمل تنزيل: '+(f.name||'الملف'),'success');
    }).catch(function(){clearTimeout(timer);fallback()});
  }catch(e){clearTimeout(timer);fallback()}
}/* 30.13 إعدادات الإدارة (تُحفظ محليًا في متصفح المدير فقط — لا مفاتيح في الكود المنشور) */
function x30AGet(){try{return JSON.parse(localStorage.getItem('x30_admin_cfg')||'null')}catch(e){return null}}
function x30ASet(cfg){try{localStorage.setItem('x30_admin_cfg',JSON.stringify(cfg))}catch(e){}}
function x30AShowCfg(){
  var c=x30AGet();
  if(!c||!c.url||!c.anon){toast('⚠️ احفظ الإعداد أولًا','error');return}
  var txt='{"url":"'+c.url+'","anon":"'+c.anon+'"}';
  xModal('⚙️ نص ملف x30-config.json',
   '<p class="set-note">انسخ هذا النص وارفعه كملف باسم <b>x30-config.json</b> في جذر المستودع (بجانب index.html). لا يُدرَج فيه المفتاح السري أبدًا.</p>'+
   '<div class="x30-code">'+escAttr(txt)+'</div>');
}
function x30Upload(){
  var c=x30AGet();
  if(!c||!c.url||!c.anon||!c.svc){toast('⚠️ جهّز اتصال المكتبة أولًا من بطاقة التجهيز','error');return}
  var fi=gid('x30u-file');
  var file=(fi&&fi.files&&fi.files[0])||null;
  if(!file){toast('⚠️ اختر ملف PDF من جهازك','error');return}
  var cycle=(gid('x30u-cycle')||{}).value||'sec';
  var year=(gid('x30u-year')||{}).value||'s2';
  var subject=(((gid('x30u-subject')||{}).value)||'').trim();
  if(!subject){toast('⚠️ اكتب اسم المادة','error');return}
  var name=(((gid('x30u-name')||{}).value)||'').trim();
  if(!name){toast('⚠️ اكتب اسم الملف','error');return}
  var descr=(((gid('x30u-descr')||{}).value)||'').trim();
  var type=(gid('x30u-type')||{}).value||'sum';
  var term=0;
  if(type==='hw'||type==='test'){term=parseInt((gid('x30u-term')||{}).value||'0',10)||0}
  if((type==='hw'||type==='test')&&!term){toast('⚠️ حدد الفصل الدراسي','error');return}
  var path='x30/'+cycle+'/'+year+'/'+encodeURIComponent(subject)+'/'+type+'/'+Date.now()+'.pdf';
  var pubUrl=c.url+'/storage/v1/object/public/x30-pdfs/'+path;
  toast('⏳ جارٍ رفع الملف…','info');
  fetch(c.url+'/storage/v1/object/x30-pdfs/'+path,{method:'POST',headers:{'apikey':c.svc,'Authorization':'Bearer '+c.svc,'Content-Type':'application/pdf','x-upsert':'true'},body:file}).then(function(r){
    if(!r.ok)throw new Error('up');
    return fetch(c.url+'/rest/v1/x30_files',{method:'POST',headers:{'apikey':c.svc,'Authorization':'Bearer '+c.svc,'Content-Type':'application/json'},body:JSON.stringify({cycle:cycle,year:year,subject:subject,type:type,term:term,name:name,descr:descr,url:pubUrl,size:(file.size||0)})});
  }).then(function(r2){
    if(!r2.ok)throw new Error('row');
    X30_CACHE.files=null;
    toast('✅ رُفع الملف بنجاح وظهر في المكتبة','success');
    try{render()}catch(e){}
  }).catch(function(){toast('⚠️ فشل الرفع — تحقق من البيانات والمفاتيح','error')});
}
function x30UTsync(){
  try{
    var t=(gid('x30u-type')||{}).value||'';
    var row=gid('x30u-termrow');
    if(row){row.style.display=((t==='hw'||t==='test')?'block':'none')}
  }catch(e){}
}
function x30ADel(id){
  var f=x30Find(id);
  if(!f){toast('⚠️ لم يُعثر على الملف','error');return}
  var c=x30AGet();
  if(!c||!c.svc){toast('⚠️ جهّز الاتصال أولًا','error');return}
  try{if(!window.confirm('حذف الملف «'+(f.name||'')+'» نهائيًا؟'))return}catch(e){}
  var path='';
  var m=(f.url||'').indexOf('/storage/v1/object/public/x30-pdfs/');
  if(m>=0){path=(f.url||'').substring(m+'/storage/v1/object/public/x30-pdfs/'.length)}
  var p1=(path)?(fetch(c.url+'/storage/v1/object/x30-pdfs/'+path,{method:'DELETE',headers:{'apikey':c.svc,'Authorization':'Bearer '+c.svc}}).catch(function(){})):Promise.resolve();
  Promise.resolve(p1).then(function(){
    return fetch(c.url+'/rest/v1/x30_files?id=eq.'+f.id,{method:'DELETE',headers:{'apikey':c.svc,'Authorization':'Bearer '+c.svc}});
  }).then(function(){
    X30_CACHE.files=null;
    toast('🗑 حُذف الملف','success');
    try{render()}catch(e){}
  }).catch(function(){toast('⚠️ تعذر الحذف','error')});
}
function x30AEdit(id){
  var f=x30Find(id);
  if(!f){toast('⚠️ لم يُعثر على الملف','error');return}
  xModal('✏️ تعديل: '+escAttr(f.name||''),
   '<input class="x30-inp" id="x30e-name" value="'+escAttr(f.name||'')+'" placeholder="اسم الملف">'+
   '<input class="x30-inp" id="x30e-descr" value="'+escAttr(f.descr||'')+'" placeholder="وصف مختصر">'+
   '<button class="btn btn-primary" onclick="x30AEditSave('+f.id+')">💾 حفظ التعديل</button>');
}
function x30AEditSave(id){
  var c=x30AGet();
  if(!c||!c.svc){toast('⚠️ جهّز الاتصال أولًا','error');return}
  var name=(((gid('x30e-name')||{}).value)||'').trim();
  var descr=(((gid('x30e-descr')||{}).value)||'').trim();
  if(!name){toast('⚠️ اكتب اسم الملف','error');return}
  fetch(c.url+'/rest/v1/x30_files?id=eq.'+id,{method:'PATCH',headers:{'apikey':c.svc,'Authorization':'Bearer '+c.svc,'Content-Type':'application/json'},body:JSON.stringify({name:name,descr:descr})}).then(function(r){
    if(!r.ok)throw new Error('e');
    X30_CACHE.files=null;
    try{xCloseModal()}catch(e){}
    toast('✅ حُفظ التعديل','success');
    try{render()}catch(e){}
  }).catch(function(){toast('⚠️ تعذر حفظ التعديل','error')});
}
/* 30.14 قسم الإدارة: تجهيز الاتصال + الرفع + إدارة الملفات */
function x30AdminSect(){
  var c=x30AGet()||{url:'',anon:'',svc:''};
  var yOpts='';
  for(var k in X30_YEARS){yOpts+='<option value="'+k+'">'+X30_YEARS[k]+'</option>'}
  var h='<section class="x17-card x30-admin" id="x30-admin"><h3>📚 مكتبة PDF — الرفع والإدارة (الإصدار 30)</h3>';
  /* بطاقة التجهيز */
  h+='<details open><summary>⚙️ تجهيز الاتصال بخدمة التخزين (مرة واحدة)</summary>'+
   '<p class="set-note">تُحفظ هذه البيانات في متصفحك فقط (localStorage) ولا تُنشر داخل كود المنصة إطلاقًا.</p>'+
   '<input class="x30-inp" id="x30a-url" value="'+escAttr(c.url)+'" placeholder="Project URL — مثل https://xxxx.supabase.co">'+
   '<input class="x30-inp" id="x30a-anon" value="'+escAttr(c.anon)+'" placeholder="Anon (public) Key">'+
   '<input class="x30-inp" id="x30a-svc" value="'+escAttr(c.svc)+'" placeholder="Service Role Key (سري — للمدير فقط)">'+
   '<div class="x30-row"><button class="btn btn-primary" onclick="x30ASave()">💾 حفظ الإعداد</button>'+
   '<button class="btn" onclick="x30AShowCfg()">📄 توليد نص x30-config.json</button></div></details>';
  /* بطاقة الرفع */
  h+='<details open><summary>⬆️ رفع ملف PDF جديد</summary>'+
   '<input class="x30-inp" id="x30u-file" type="file" accept="application/pdf">'+
   '<div class="x30-row"><select class="x30-inp" id="x30u-cycle" style="width:auto">'+
   '<option value="mid">الطور المتوسط</option><option value="sec" selected>الطور الثانوي</option></select>'+
   '<select class="x30-inp" id="x30u-year" style="width:auto">'+yOpts+'</select></div>'+
   '<input class="x30-inp" id="x30u-subject" placeholder="المادة (مثل: الرياضيات)">'+
   '<input class="x30-inp" id="x30u-name" placeholder="اسم الملف (مثل: ملخص الدوال)">'+
   '<input class="x30-inp" id="x30u-descr" placeholder="وصف مختصر (اختياري)">'+
   '<div class="x30-row"><select class="x30-inp" id="x30u-type" style="width:auto" onchange="x30UTsync()">'+
   '<option value="sum">ملخص</option><option value="ex">تمارين</option><option value="hw">فرض</option><option value="test">اختبار</option></select></div>'+
   '<div id="x30u-termrow" style="display:none"><select class="x30-inp" id="x30u-term">'+
   '<option value="1">الفصل الأول</option><option value="2">الفصل الثاني</option><option value="3">الفصل الثالث</option></select></div>'+
   '<button class="btn btn-primary" onclick="x30Upload()">⬆️ رفع الملف إلى المكتبة</button></details>';
  /* إدارة الملفات المرفوعة */
  h+='<details><summary>🗂 إدارة الملفات المرفوعة (تعديل / حذف)</summary><div id="x30-alist"><p class="x17-empty">اضغط لعرض الملفات</p></div></details>';
  h+='</section>';
  return h;
}
function x30ASave(){
  var cfg={url:((gid('x30a-url')||{}).value||'').replace(/\/+$/,''),anon:(gid('x30a-anon')||{}).value||'',svc:(gid('x30a-svc')||{}).value||''};
  if(!cfg.url||!cfg.anon||!cfg.svc){toast('⚠️ أكمل الخانات الثلاث (الرابط والمفتاحان)','error');return}
  x30ASet(cfg);
  X30_CACHE.cfg=null;
  toast('✅ حُفظ إعداد المكتبة — لن يُطلب منك مجددًا','success');
}
function x30AList(){
  var box=gid('x30-alist');
  if(!box)return;
  box.innerHTML='<p class="x17-empty">⏳ جارٍ الجلب…</p>';
  x30Files(true,function(files,why){
    var b=gid('x30-alist');
    if(!b)return;
    if(!files){b.innerHTML='<div class="x30-err">'+((why==='noconfig')?'⚙️ جهّز الاتصال أولًا':'⚠️ تعذر الجلب')+'</div>';return}
    if(!files.length){b.innerHTML='<p class="x17-empty">لا ملفات مرفوعة بعد</p>';return}
    var h='';
    for(var i=0;i<files.length;i++){
      var f=files[i];
      h+='<div class="x30-list-item"><b>'+escAttr(f.name||'ملف')+'</b> — '+escAttr(X30_TYPE[f.type]||'')+' · '+escAttr(x30YearOf(f.year)||'')+
       ((f.subject)?(' · '+escAttr(f.subject)):'')+((f.term)?(' · '+(X30_TERMS[f.term]||'')):'')+
       ' <button class="btn btn-sm" onclick="x30AEdit('+f.id+')">✏️</button>'+
       ' <button class="btn btn-sm" onclick="x30ADel('+f.id+')">🗑</button></div>';
    }
    b.innerHTML=h;
  });
}
/* 30.15 حقن قسم المكتبة في لوحة الإدارة فقط */
var __x30AdminBase=renderAdminPage18;
renderAdminPage18=function(){
  var h=__x30AdminBase();
  try{
    if(isAdmin()){
      var i=h.lastIndexOf('</div>');
      if(i>0){h=h.slice(0,i)+x30AdminSect()+h.slice(i)}
    }
  }catch(e){}
  return h;
};
/* 30.16 فتح قائمة الإدارة عند فتح اللوحة */
var __x30Render=render;
render=function(){
  __x30Render();
  try{
    var d=document.getElementById('x30-alist');
    if(d){x30AList()}
  }catch(e){}
};
