'use strict';
/* ============ الطبقة 32 — الإصدار 32: الثبات والقوة ============ */
/* 32.1 شُعب الطور الثانوي (المنهاج الجزائري): جذعان مشتركان في الأولى + ست شعب في الثانية والثالثة */
var X32_BRANCHES={
 s1:[{id:'tech',name:'جذع مشترك علوم وتكنولوجيا',note:'التوجيه نحو الشعب العلمية والتقنية'},{id:'lit',name:'جذع مشترك آداب',note:'التوجيه نحو شعب الآداب واللغات'}],
 s2:[{id:'math',name:'شعبة الرياضيات',note:'علوم دقيقة'},{id:'tm',name:'شعبة التقني رياضي',note:'رياضيات وتقني'},{id:'exp',name:'شعبة العلوم التجريبية',note:'علوم طبيعية'},{id:'eco',name:'شعبة التسيير والاقتصاد',note:'اقتصاد وتسيير'},{id:'philo',name:'شعبة الآداب والفلسفة',note:'آداب وفلسفة'},{id:'lang',name:'شعبة اللغات الأجنبية',note:'ترجمة ولغات'}],
 s3:[{id:'math',name:'شعبة الرياضيات',note:'علوم دقيقة'},{id:'tm',name:'شعبة التقني رياضي',note:'رياضيات وتقني'},{id:'exp',name:'شعبة العلوم التجريبية',note:'علوم طبيعية'},{id:'eco',name:'شعبة التسيير والاقتصاد',note:'اقتصاد وتسيير'},{id:'philo',name:'شعبة الآداب والفلسفة',note:'آداب وفلسفة'},{id:'lang',name:'شعبة اللغات الأجنبية',note:'ترجمة ولغات'}]
};
/* المواد المفتوحة فعليًا (بلا محتوى تخميني): حاليًا 2AS شعبة الرياضيات فقط */
var X32_REAL={s2:{math:[{id:'math',name:'الرياضيات'},{id:'phys',name:'الفيزياء'}]}};
function x32Branch(year,branch){
  var bs=X32_BRANCHES[year]||[];
  for(var i=0;i<bs.length;i++){if(bs[i].id===branch)return bs[i]}
  return null;
}
/* 32.2 صفحة السنة الثانوية: تعرض الجذوع/الشعب بدل المواد مباشرة */
function renderX30Year(cycle,year){
  var yName=x30YearOf(year);
  if(!yName){return '<div class="fade-in x17-card"><p class="x17-empty">غير موجود</p></div>'}
  var branches=X32_BRANCHES[year]||null;
  var isSec=(cycle==='sec');
  var h='<div class="fade-in x30-home"><section class="x17-card">'+
   '<div class="x30-crumb"><button onclick="navigate(\'home\')">الرئيسية</button><span>←</span>'+
   '<button onclick="x30Go({page:\'cycle\',cycle:\''+cycle+'\'})">'+escAttr(x30CycleOf(cycle)?x30CycleOf(cycle).name:'')+'</button><span>←</span><b>'+escAttr(yName)+'</b></div>'+
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
/* 32.3 صفحة الجذع/الشعبة: مواد حقيقية أو حالة صادقة */
function renderX32Branch(cycle,year,branch){
  var b=x32Branch(year,branch);
  if(!b){return '<div class="fade-in x17-card"><p class="x17-empty">غير موجود</p></div>'}
  var real=(X32_REAL[year]&&X32_REAL[year][branch])||null;
  var h='<div class="fade-in x30-home"><section class="x17-card">'+
   '<div class="x30-crumb"><button onclick="navigate(\'home\')">الرئيسية</button><span>←</span>'+
   '<button onclick="x30Go({page:\'cycle\',cycle:\''+cycle+'\'})">'+escAttr(x30CycleOf(cycle)?x30CycleOf(cycle).name:'')+'</button><span>←</span>'+
   '<button onclick="x30Go({page:\'year\',cycle:\''+cycle+'\',year:\''+year+'\'})">'+escAttr(x30YearOf(year))+'</button><span>←</span><b>'+escAttr(b.name)+'</b></div>'+
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
     '<button class="btn" onclick="x30Go({page:\'pdflib\',cycle:\''+cycle+'\',year:\''+year+'\',subject:\'\',tab:\'sum\',mode:\'\',term:0})">📄 مكتبة PDF لهذه السنة</button></section>';
  }
  h+='</div>';
  return h;
}
/* 32.4 الخصوصية: لا يرى أي زائر بريد الإدارة — إزالة زر «إرسال من تطبيق بريد» وزر النسخ الذي يكشف العنوان */
var __x32C=contactHTML;
contactHTML=function(){
  var h=__x32C();
  try{
    while(h.indexOf('x22MailtoMsg')>=0){
      h=h.replace(/<button[^>]*x22MailtoMsg\(\)[^>]*>[^<]*<\/button>/,'');
    }
    while(h.indexOf('xCopyMsg')>=0){
      h=h.replace(/<button[^>]*xCopyMsg\(\)[^>]*>[^<]*<\/button>/,'');
    }
    h=h.replace(/ · <\/p>/g,'</p>').replace(/ · <\/div>/g,'</div>');
  }catch(e){}
  return h;
};
x22MailtoMsg=function(){toast('📩 الإرسال يتم من داخل المنصة بزر «إرسال الرسالة» — يصلنا فورًا','info')};
xCopyMsg=function(){toast('📩 اكتب رسالتك واضغط «إرسال الرسالة» — تصلنا فورًا من داخل المنصة','info')};
x24ComposerOpen=function(subject,body,onDone){
  toast('⏳ قنوات الإرسال مشغولة مؤقتًا — أعد المحاولة بعد قليل','error');
  if(typeof onDone==='function'){try{onDone(false)}catch(e){}}
};
var __x32Out=x22OutHTML;
x22OutHTML=function(){
  var h=__x32Out();
  try{
    while(h.indexOf('x22MailtoQueued')>=0){
      h=h.replace(/<button[^>]*x22MailtoQueued\(\)[^>]*>[^<]*<\/button>/,'');
    }
  }catch(e){}
  return h;
};
x22MailtoQueued=function(){toast('📩 الإرسال يتم من داخل المنصة — اضغط «إرسال الكل الآن»','info')};
x18SendMail=function(){toast('🔒 الإرسال عبر تطبيق البريد مُعطّل في هذه النسخة — أرسل رسائلك من داخل المنصة','info');return ''};
/* 32.5 إلغاء وضع الزائر نهائيًا: الدخول بالتسجيل فقط (وعند عدم تجهيز خدمة الحسابات يبقى التصفح مفتوحًا بصمت) */
function isGuest(){return false}
function xGoGuest(){toast('🔐 أُلغي وضع الزائر — أنشئ حسابك ببريدك الإلكتروني للدخول','info')}
authScreenNeeded=function(){
  if(USER.session)return false;
  try{if(typeof SB!=='undefined'&&SB&&!SB.ready)return false}catch(e){}
  return ROUTE.page!=='auth';
};
var __x32Auth=renderAuth18;
renderAuth18=function(){
  var h=__x32Auth();
  try{
    while(h.indexOf('xGoGuest')>=0){
      h=h.replace(/<a[^>]*xGoGuest\(\)[^>]*>[^<]*<\/a>/,'');
    }
    h=h.replace(/ · <\/p>/g,'</p>');
    h=h.replace(' — وتفعيل الحسابات يتطلب إعداد الإدارة للخدمة الخلفية وفق دليل الإعداد.','.').replace(' يمكنك حاليًا  —','');
  }catch(e){}
  return h;
};
/* 32.6 التحديث الإجباري بعد 10 أيام: إشعار أولًا ثم توقف كامل حتى التحديث */
function x32GateStart(){
  try{
    if(!XUPD.newer)return;
    var k='x32_upd_seen',now=Date.now(),seen=0;
    try{seen=parseInt((localStorage.getItem(k)||'0'),10)||0}catch(e){seen=0}
    if(!seen){try{localStorage.setItem(k,''+now)}catch(e){}}
  }catch(e){}
}
function x32DaysLeft(){
  try{
    if(!XUPD.newer)return -1;
    if(XUPD.newer.force)return 0;
    var now=Date.now(),seen=0;
    try{seen=parseInt((localStorage.getItem('x32_upd_seen')||'0'),10)||0}catch(e){seen=0}
    if(!seen)return 10;
    var left=10-Math.floor((now-seen)/43200000);
    return Math.max(0,left);
  }catch(e){return -1}
}
function x32Blocked(){
  try{
    if(!XUPD.newer)return false;
    if(XUPD.newer.force)return true;
    var now=Date.now(),seen=0;
    try{seen=parseInt((localStorage.getItem('x32_upd_seen')||'0'),10)||0}catch(e){seen=0}
    if(!seen)return false;
    return (now-seen)>10*43200000;
  }catch(e){return false}
}
var __x32UB=updBanner;
updBanner=function(){
  var h=__x32UB();
  if(h&&XUPD.newer){
    var d=x32DaysLeft();
    if(d>=0){
      h=h.replace('</div></div>','<p class="set-note">⏳ يكف التطبيق عن العمل بعد '+d+' يومًا من الآن إن لم تُحدّث — بياناتك محفوظة على جهازك.</p></div></div>');
    }
  }
  return h;
};
function x32ForceScreen(){
  var app=document.getElementById('app');
  app.innerHTML='<div class="x32-force glass-strong">'+X30_LOGO+
   '<h2>🔄 تحديث إلزامي متوفر</h2>'+
   '<p>هذا الإصدار الذي تستخدمه تجاوز مهلة التحديث (10 أيام). اضغط «تحديث الآن» لتواصل الاستخدام بأمان — كل بياناتك وتقدمك محفوظة على جهازك ولا تُمس.</p>'+
   '<button class="btn btn-primary" style="font-size:16px;padding:12px 26px" onclick="applyUpdate()">🔄 تحديث الآن</button>'+
   '</div>';
}
/* 32.7 محرك العرض: كل الصفحات + صفحة الشعبة + بوابة التحديث الإجباري */
var __x32R=render;
render=function(){
  x32GateStart();
  if(x32Blocked()){x32ForceScreen();return}
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
    case 'branch':body=renderX32Branch(ROUTE.cycle,ROUTE.year,ROUTE.branch);break;
    case 'subjecthub':body=renderX30Hub(ROUTE.cycle,ROUTE.year,ROUTE.subject);break;
    case 'pdflib':body=renderX30Lib();break;
    default:body=renderHome18();
  }
  var navHtml=(ROUTE.page==='auth')?'':renderNavbar();
  app.innerHTML=navHtml+body+updBanner()+renderBottomNav();
  try{
    var mm=document.getElementById('mmenu');
    if(mm)mm.classList.add('hidden');
  }catch(e){}
  typesetApp();
  try{kpSync()}catch(e){}
  try{
    var d=document.getElementById('x30-alist');
    if(d){x30AList()}
  }catch(e){}
};
/* 32.8 التبويب السفلي: صفحة الشعبة تُحسب ضمن الرئيسية */
renderBottomNav=function(){
  if(ROUTE.page==='auth')return '';
  var act=function(pages){return (pages.indexOf(ROUTE.page)>=0)?' bnav-on':''};
  return '<nav class="bnav glass-strong" role="navigation" aria-label="التنقل الرئيسي">'+
   '<button class="bnav-btn'+act(['home','cycle','year','branch','subjecthub','pdflib','subjects','subject','lesson','quiz'])+'" onclick="navigate(\'home\')" aria-label="الرئيسية">'+xi('home',21)+'<span>الرئيسية</span></button>'+
   '<button class="bnav-btn'+act(['dash'])+'" onclick="navigate(\'dash\')" aria-label="التقدم">'+xi('chart',21)+'<span>تقدّمي</span></button>'+
   '<button class="bnav-btn'+act(['profile'])+'" onclick="navigate(\'profile\')" aria-label="الملف الشخصي">'+avatarHTML(24,'av-nav')+'<span>ملفي</span></button>'+
   '<button class="bnav-btn'+act(['settings'])+'" onclick="navigate(\'settings\')" aria-label="الإعدادات">'+xi('gear',21)+'<span>الإعدادات</span></button>'+
   '</nav>';
};
/* 32.9 بيانات الإصدار 32 */
APP_META.ver='32.0';APP_META.date='2026-10-31';
APP_META.notes='الإصدار 32 — الثبات والقوة: شُعب الطور الثانوي وفق المنهاج الجزائري (جذعان مشتركان في السنة الأولى: علوم وتكنولوجيا وآداب — وست شعب في الثانية والثالثة: الرياضيات، التقني رياضي، العلوم التجريبية، التسيير والاقتصاد، الآداب والفلسفة، اللغات الأجنبية)، وخصوصية كاملة لبريد الإدارة (لم يعد يظهر لأي زائر أبدًا وأُزيل زر الإرسال من تطبيق البريد)، وإلغاء وضع الزائر نهائيًا (الدخول بالتسجيل)، والإشعارات تظهر من الأعلى في الوسط كالتطبيقات العالمية، وتحديث إلزامي: إشعار تحديث لا يجبرك، وبعد 10 أيام بلا تحديث يتوقف التطبيق حتى تحدّث.';
try{APP_META.changelog.unshift('الإصدار 32 — الثبات والقوة: بنية شُعب الطور الثانوي الرسمية (جذعان مشتركان للسنة الأولى وست شعب للثانية والثالثة) مع مواد مفتوحة حقيقية فقط لبقية بلا محتوى تخميني، حجب بريد الإدارة عن كل الزوار وإزالة زر الإرسال من تطبيق البريد وزر النسخ الذي يكشف العنوان، إلغاء وضع الزائر مع بقاء التصفح مفتوحًا بصمت إن لم تُجهز خدمة الحسابات، إشعارات من الأعلى في الوسط بحركة انسيابية، وتحديث إلزامي بعد مهلة 10 أيام مع عد تنازلي واضح في بطاقة التحديث.')}catch(e){}
function fallbackNews18(){
  return [{title:'الإصدار 32 — الثبات والقوة',
    body:'شُعب الطور الثانوي الرسمية في مكانها: جذعان مشتركان للسنة الأولى وست شعب للثانية والثالثة، وخصوصية بريد الإدارة مضمونة (لا يراه أي زائر)، ووضع الزائر أُلغي، والإشعارات تصلك من الأعلى في الوسط، والتحديث يصبح إلزاميًا بعد 10 أيام من إصداره حماية لاستقرار التطبيق.',
    date:APP_META.date}];
}
