'use strict';
/* ============ الطبقة 37 — الإصدار 37: الإصلاح الشامل والاحترافية ============ */
/* 37.1 الصفحة الرئيسية: بلا قسم التقدم — تقدمك يُتابع من تبويب «تقدّمي» في الأسفل */
renderHome18=function(){
  var signed=!!(USER.session&&USER.profile);
  var h='<div class="fade-in x30-home">';
  h+='<section class="x20-hero glass">'+X30_LOGO+
   '<h2>'+(signed
     ?('أهلًا بك مجددًا في '+X30_BRAND.name+'، '+escAttr(USER.profile.first_name||'صديقنا')+' 👋')
     :('أهلًا بك في '+X30_BRAND.name+' 👋'))+
   '</h2>'+
   '<p>'+X30_BRAND.desc+' — منصة جزائرية تجمع لك: الدروس والملخصات والقوانين والتمارين والفروض والاختبارات وملفات PDF وشروحات الفيديو.</p>'+
   '<span class="x30-chip">📘 الدروس</span>'+
   '<span class="x30-chip">📄 ملفات PDF</span>'+
   '<span class="x30-chip">📝 فروض واختبارات</span>'+
   '<span class="x30-chip">🎬 شروحات مرئية</span>'+
   (signed?'':'<button class="btn btn-primary" onclick="navigate(\'auth\')">🔑 ابدأ الآن</button>')+
   '</section>';
  h+='<section class="x30-cycles">'+
   '<div class="x30-cycle" onclick="x30Go({page:\'cycle\',cycle:\'mid\'})"><div class="x30-cico">'+xi('book',30)+'</div><h3>الطور المتوسط</h3><p class="set-note">السنوات الأربع + قسم شهادة التعليم المتوسط</p><button class="btn btn-sm btn-primary">الدخول إلى الطور المتوسط</button></div>'+
   '<div class="x30-cycle" onclick="x30Go({page:\'cycle\',cycle:\'sec\'})"><div class="x30-cico">'+xi('atom',30)+'</div><h3>الطور الثانوي</h3><p class="set-note">السنوات الثلاث — شعب علمية وتقنية ورياضيات</p><button class="btn btn-sm btn-primary">الدخول إلى الطور الثانوي</button></div>'+
   '</section>';
  h+='</div>';
  return h;
};
/* 37.2 صفحة الشعبة: بلا زر «مكتبة الفيديو الخاصة بالشعبة» — الفيديو متاح داخل صفحة كل مادة */
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
/* 37.3 الإعدادات: نزع الكتابة أسفل «لون التمييز» + إضافة اللون الأزرق الملكي */
var __x37Settings=renderSettingsPage;
renderSettingsPage=function(){
  var h=__x37Settings();
  try{
    var i=h.indexOf('كل التغييرات تُطبَّق');
    if(i>0){
      var k=h.lastIndexOf('<p',i);
      var j=h.indexOf('</p>',i);
      if(k>=0&&j>0){h=h.slice(0,k)+h.slice(j+4)}
    }
  }catch(e){}
  try{
    var d=h.indexOf('xdot');
    if(d>0){
      h=h.slice(0,d)+'<button class="xdot'+(XCFG.accent==='royal'?' on':'')+'" style="background:#2f7ae5" onclick="setX(\'accent\',\'royal\')" aria-label="أزرق ملكي"></button>'+h.slice(d);
    }
  }catch(e){}
  return h;
};
try{ACCENTS.royal=['#2f7ae5','#1f5fc4']}catch(e){}
/* 37.4 تصحيح إملائي: «اختر سنواتك الدراسية» ← «اختر سنتك الدراسية» */
var __x37Cycle=renderX30Cycle;
renderX30Cycle=function(cycle){
  var h=__x37Cycle(cycle);
  try{h=(''+h).split('اختر سنواتك الدراسية').join('اختر سنتك الدراسية')}catch(e){}
  return h;
};
/* 37.5 لوحة الإدارة الاحترافية: لوحة إحصاء فورية + أزرار سريعة + نصوص نظيفة */
function x37AdminDash(){
  var np='—',nv='—';
  try{if(typeof X33_PDFS!=='undefined'&&X33_PDFS&&typeof X33_PDFS.length==='number'){np=''+X33_PDFS.length}}catch(e){}
  try{if(typeof X35_VIDS!=='undefined'&&X35_VIDS&&typeof X35_VIDS.length==='number'){nv=''+X35_VIDS.length}}catch(e){}
  var banks=0;try{banks=Object.keys(QUIZZES||{}).length}catch(e){}
  var h='<div class="x37-dash">'+
   '<div class="x37-dcard"><span>📄 ملفات PDF</span><b id="x37-npdf">'+np+'</b><i>تُدار بملف pdfs.json</i></div>'+
   '<div class="x37-dcard"><span>🎬 فيديوهات</span><b id="x37-nvid">'+nv+'</b><i>تُدار بملف videos.json</i></div>'+
   '<div class="x37-dcard"><span>🧪 بنوك الاختبارات</span><b>'+banks+'</b><i>اختبارات تفاعلية</i></div>'+
   '<div class="x37-dcard"><span>🚀 الإصدار</span><b>'+APP_META.ver+'</b><i>'+APP_META.date+'</i></div>'+
   '</div>'+
   '<div class="x30-row" style="margin:10px 0 4px;flex-wrap:wrap">'+
   '<button class="btn btn-sm" onclick="x33LibReload()">🔄 تحديث مكتبة PDF</button>'+
   '<button class="btn btn-sm" onclick="x35VidReload()">🔄 تحديث مكتبة الفيديو</button>'+
   '<button class="btn btn-sm" onclick="checkUpdate()">🔄 فحص تحديث المنصة</button>'+
   '</div>';
  return h;
}
function x37CountFix(){
  try{
    if(typeof X33_PDFS==='undefined'||!X33_PDFS){
      x30Files(false,function(list){var d=gid('x37-npdf');if(d&&list&&typeof list.length==='number'){d.textContent=''+list.length}});
    }
    if(typeof X35_VIDS==='undefined'||!X35_VIDS){
      x35Files(false,function(list){var d=gid('x37-nvid');if(d&&list&&typeof list.length==='number'){d.textContent=''+list.length}});
    }
  }catch(e){}
}
var __x37Admin=renderAdminPage18;
renderAdminPage18=function(){
  var h=__x37Admin();
  try{
    if(isAdmin()){
      var i=h.indexOf('</h2>');
      if(i>0){h=h.slice(0,i+5)+x37AdminDash()+h.slice(i+5)}
      h=h.split('لوحة الإدارة — معلومات محلية').join('لوحة الإدارة — مركز الإدارة');
      var a=h.indexOf(' — منذ الإصدار 20 الصفحة الرئيسية غنية');
      if(a>0){var b=h.indexOf('</p>',a);if(b>0){h=h.slice(0,a)+h.slice(b)}}
      var t=h.indexOf('منذ الإصدار 20 الهوية زرقاء');
      if(t>0){var u=h.indexOf('</p>',t);if(u>0){h=h.slice(0,t)+'كل بيانات الطلاب محفوظة على أجهزتهم بلا قاعدة بيانات خارجية، وتُدار مكتبتا PDF والفيديو بملفي pdfs.json و videos.json في المستودع مباشرة.'+h.slice(u)}}
      setTimeout(function(){try{x37CountFix()}catch(e){}},60);
    }
  }catch(e){}
  return h;
};
/* 37.6 بيانات الإصدار 37 */
APP_META.ver='37.0';APP_META.date='2026-10-31';
APP_META.notes='الإصدار 37 — التطوير والاحترافية: قُتل الخط الأبيض أعلى الشاشة نهائيًا (كان شريط تقدم القراءة الرفيع فأُخفي كليًا)، ونُزع قسم التقدم من الصفحة الرئيسية (يُتابع التقدم من تبويب «تقدّمي» في الشريط السفلي)، ونُزع زر «مكتبة الفيديو الخاصة بالشعبة» من صفحة الشعبة (الفيديو داخل صفحة كل مادة)، ونُزعت الكتابة أسفل «لون التمييز» في الإعدادات وأُضيف لون أزرق ملكي جديد، وأُضيف للشريط السفلي تصميم احترافي بمؤشر مضيء للتبويب النشط، وطُورت لوحة الإدارة لتصبح مركز إدارة احترافيًا بلوحة إحصاء فورية (عدد ملفات PDF والفيديوهات وبنوك الاختبارات والإصدار) وأزرار سريعة، مع حركات ناعمة للبطاقات وتصحيح إملائي شامل.';
try{APP_META.changelog.unshift('الإصدار 37 — تطوير شامل واحترافية: قتل الخط الأبيض أعلى اليمين نهائيًا (كان شريط تقدم القراءة)، نزع قسم التقدم من الرئيسية، نزع زر مكتبة الفيديو من صفحة الشعبة (الفيديو داخل المادة)، نزع الكتابة أسفل لون التمييز وإضافة الأزرق الملكي، شريط سفلي احترافي بمؤشر مضيء، لوحة مالك احترافية بلوحة إحصاء فورية وأزرار سريعة، حركات ناعمة للبطاقات، وتصحيح إملائي.')}catch(e){}
function fallbackNews18(){
  return [{title:'الإصدار 37 — تطوير شامل واحترافية',
    body:'قُتل الخط الأبيض أعلى الشاشة نهائيًا، ونُزع قسم التقدم من الرئيسية وزر الفيديو من صفحة الشعبة، وطُورت لوحة الإدارة والشريط السفلي بتصميم احترافي.',
    date:APP_META.date}];
}
