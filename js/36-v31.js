'use strict';
/* ============ الطبقة 31 — إصدار الاستقرار: إصلاح كل خلل رُصد في الإصدار 30 ============ */
/* 31.1 الشعار: إذا غاب logo.jpg (لم يُرفع بعد) تعرض المنصة الشعار الرسومي القديم بدل مربع صورة مكسورة */
function x30LogoFail(el){
  try{
    var d=document.createElement('div');
    d.className='x30-logo x30-logo-fallback';
    d.innerHTML='<div class="logo-big" style="margin:0 auto 12px"><div class="logo-mark">'+LOGO+'</div></div>';
    el.parentNode.replaceChild(d,el);
  }catch(e){try{el.style.display='none'}catch(e2){}}
}
var X30_LOGO='<img src="./icon-512.png" alt="شعار منصة X التعليمية" class="x30-logo" onerror="x30LogoFail(this)">';
/* 31.2 الشريط السفلي: كانت فئة glass-strong ساقطة في الإصدار 30 فبدا شاحبًا شبه شفاف — نعيدها */
renderBottomNav=function(){
  if(ROUTE.page==='auth')return '';
  var act=function(pages){return (pages.indexOf(ROUTE.page)>=0)?' bnav-on':''};
  return '<nav class="bnav glass-strong" role="navigation" aria-label="التنقل الرئيسي">'+
   '<button class="bnav-btn'+act(['home','cycle','year','subjecthub','pdflib','subjects','subject','lesson','quiz'])+'" onclick="navigate(\'home\')" aria-label="الرئيسية">'+xi('home',21)+'<span>الرئيسية</span></button>'+
   '<button class="bnav-btn'+act(['dash'])+'" onclick="navigate(\'dash\')" aria-label="التقدم">'+xi('chart',21)+'<span>تقدّمي</span></button>'+
   '<button class="bnav-btn'+act(['profile'])+'" onclick="navigate(\'profile\')" aria-label="الملف الشخصي">'+avatarHTML(24,'av-nav')+'<span>ملفي</span></button>'+
   '<button class="bnav-btn'+act(['settings'])+'" onclick="navigate(\'settings\')" aria-label="الإعدادات">'+xi('gear',21)+'<span>الإعدادات</span></button>'+
   '</nav>';
};
/* 31.3 فتح صفحات الطور: تصفير التمرير للأعلى (كان يفتح الصفحة في منتصف الأسكرول فتبدو معطوبة) */
function x30Go(route){X30_HASH=route;try{render()}catch(e){}try{window.scrollTo(0,0)}catch(e){}}
/* 31.4 محرك العرض: إعادة سلوك إخفاء القائمة الجانبية بعد كل عرض (مطابق للسلوك الأصلي 17.9) */
var __x31Render=render;
render=function(){
  __x31Render();
  try{
    var mm=document.getElementById('mmenu');
    if(mm)mm.classList.add('hidden');
  }catch(e){}
};
/* 31.5 الصفحة الرئيسية: تحية بالاسم + إحصاءات تقدم حقيقية + حالة فارغة صادقة + شعار بم fallback */
var __x31Home=renderHome18;
renderHome18=function(){
  var signed=!!(USER.session&&USER.profile);
  var st=xStats();
  var h='<div class="fade-in x30-home">';
  h+='<section class="x20-hero glass">'+X30_LOGO+
   '<h2>'+(signed
     ?('أهلًا بك مجددًا في '+X30_BRAND.name+'، '+escAttr(USER.profile.first_name||'صديقنا')+' 👋')
     :('أهلًا بك في '+X30_BRAND.name+' 👋'))+
   '</h2>'+
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
  h+='<section class="x17-card"><h3 style="margin:0 0 4px">📊 تقدّمي الدراسي</h3>'+
   '<div class="x17-prog big"><span style="width:'+st.pct+'%"></span></div>';
  if(st.done>0||st.started>0||st.quizAtt>0){
    h+='<div class="x17-stats">'+
     '<span><b>'+st.done+'</b> درسًا مكتملًا من '+st.total+'</span>'+
     '<span><b>'+st.started+'</b> درسًا بدأته</span>'+
     '<span><b>'+st.quizAtt+'</b> اختبارًا أجريته</span>'+
     '<span><b>'+st.quizPerfect+'</b> نتيجة كاملة</span>'+
     '</div>';
  }else{
    h+='<p class="x17-empty">لم تبدأ أي درس بعد — اختر طورك الدراسي أعلاه وستظهر نتائجك الحقيقية هنا.</p>';
  }
  h+='<button class="btn" onclick="navigate(\'dash\')">📈 تقرير التقدم الكامل</button></section>';
  h+='</div>';
  return h;
};
/* 31.6 مكتبة PDF: إصلاح عرض «undefined» في وصف الفصل + عرض الحجم بأمان */
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
      var metaParts=[X30_TYPE[ff.type]||'',x30YearOf(ff.year)||''];
      if(ff.subject){metaParts.push(ff.subject)}
      if(ff.term&&(X30_TERMS[ff.term]||'')){metaParts.push(X30_TERMS[ff.term])}
      if(ff.size){metaParts.push(Math.max(1,Math.round((ff.size||0)/1024))+' ك.ب')}
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
/* 31.7 بيانات الإصدار 31 */
APP_META.ver='31.0';APP_META.date='2026-10-31';
APP_META.notes='الإصدار 31 — إصدار الاستقرار: إصلاح شحوب الشريط السفلي (إعادة الخلفية الزجاجية القوية glass-strong)، وإصلاح الصفحة الرئيسية (شعار بديل تلقائي إذا لم تُرفع صورة الشعار بعد، تحية بالاسم عند تسجيل الدخول، إحصاءات تقدم حقيقية مع حالة فارغة صادقة)، وتصفير التمرير للأعلى عند فتح صفحات الطور والسنة والمكتبة، وإصلاح ظهور «undefined» في وصف فروض المكتبة، وإعادة سلوك إخفاء القائمة بعد كل عرض، وجعل عامل الخدمة يتسامح مع أي ملف ناقص فلا يتعطل التحديث أبدًا.';
try{APP_META.changelog.unshift('الإصدار 31 — إصدار الاستقرار: إصلاح الشريط السفلي الشاحب بإعادة فئة glass-strong مع خصائص الوصول، وإصلاح الرئيسية بشعار بديل تلقائي (logo.jpg أو الشعار الرسومي) وتحية شخصية وإحصاءات تقدم حقيقية، وتصفير التمرير عند التنقل لصفحات الطور والمكتبة، وإصلاح وصف الفروض في المكتبة، وعامل خدمة متسامح مع الملفات الناقصة. كل وظائف الإصدار 30 باقية دون تغيير: الطوران والسنوات والمواد ومكتبة PDF بمعاينة قبل التنزيل ولوحة رفع المدير.')}catch(e){}
function fallbackNews18(){
  return [{title:'الإصدار 31 — إصدار الاستقرار',
    body:'إصلاح كل ما رُصد في الإصدار 30: الشريط السفلي عاد بخلفيته الزجاجية الواضحة، والصفحة الرئيسية تُظهر الشعار الصحيح تلقائيًا (الصورة الجديدة إن وُجدت وإلا الشعار الرسومي) مع تحية بالاسم وإحصاءات تقدم حقيقية، والتنقل بين الطور والسنة والمكتبة يبدأ من الأعلى دائمًا، وعامل الخدمة لم يعد يتعطل مع أي ملف ناقص.',
    date:APP_META.date}];
}
