/* ================================================================
   منصة X — طبقة الإصدار 17: الهوية البصرية الاحترافية
   إعادة تصميم الواجهة كاملة مع الحفاظ التام على:
   الحسابات • الجلسات • التقدم • الدروس • الاختبارات • التحديثات
   ================================================================ */

/* ---- 17.1 أيقونات خطية احترافية (SVG) بدل الرموز التعبيرية ---- */
var X17I={
 home:'<path d="M3 11.5 12 4l9 7.5"/><path d="M5.5 10.5V20a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-9.5"/>',
 grid:'<rect x="3.5" y="3.5" width="7" height="7" rx="1.6"/><rect x="13.5" y="3.5" width="7" height="7" rx="1.6"/><rect x="3.5" y="13.5" width="7" height="7" rx="1.6"/><rect x="13.5" y="13.5" width="7" height="7" rx="1.6"/>',
 chart:'<path d="M5 20v-6"/><path d="M12 20V7"/><path d="M19 20v-10"/><path d="M3 21h18"/>',
 user:'<circle cx="12" cy="8" r="3.6"/><path d="M5 20c1-3.6 3.8-5.4 7-5.4s6 1.8 7 5.4"/>',
 gear:'<circle cx="12" cy="12" r="3"/><path d="M12 2.5v2.7"/><path d="M12 18.8v2.7"/><path d="M2.5 12h2.7"/><path d="M18.8 12h2.7"/><path d="M5.3 5.3l1.9 1.9"/><path d="M16.8 16.8l1.9 1.9"/><path d="M18.7 5.3l-1.9 1.9"/><path d="M7.2 16.8l-1.9 1.9"/>',
 book:'<path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>',
 atom:'<circle cx="12" cy="12" r="1.6"/><ellipse cx="12" cy="12" rx="9.5" ry="4"/><ellipse cx="12" cy="12" rx="9.5" ry="4" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="9.5" ry="4" transform="rotate(120 12 12)"/>',
 arrow:'<path d="M19 12H6"/><path d="m13 6-6 6 6 6"/>',
 sun:'<circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="M4 12H2"/><path d="M22 12h-2"/><path d="M5 5l1.5 1.5"/><path d="M17.5 17.5 19 19"/><path d="M19 5l-1.5 1.5"/><path d="M6.5 17.5 5 19"/>',
 moon:'<path d="M21 13A9 9 0 1 1 11 3a7 7 0 0 0 10 10z"/>',
 wand:'<path d="M12 3l2 5 5 2-5 2-2 5-2-5-5-2 5-2z"/><path d="M19 15l1 2.5 2.5 1-2.5 1L19 22l-1-2.5-2.5-1 2.5-1z"/>',
 zap:'<path d="M13 2 4 14h6l-1 8 9-12h-6z"/>',
 search:'<circle cx="11" cy="11" r="7"/><path d="m21 21-4.5-4.5"/>'
};
function xi(n,sz){sz=sz||18;return '<svg viewBox="0 0 24 24" width="'+sz+'" height="'+sz+'" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">'+(X17I[n]||'')+'</svg>'}

/* ---- 17.2 لون الهوية الأزرق الرسمي (منصة X 20) ضمن منظومة الألوان القائمة ---- */
try{ACCENTS.azure=['#229ED9','#168AC3'];delete ACCENTS.crimson}catch(e){}

/* ---- 17.3 مسار «المواد» الجديد ---- */
var XFORCE17=null;
function parseHash(){
  if(XFORCE17){ROUTE={page:XFORCE17.page,subject:null,chapter:null};XFORCE17=null;return}
  try{var h=(location.hash||'').replace(/^#\/?/,'');var p=h.split('/').filter(Boolean);
    if(p.length&&p[0]==='subjects'){ROUTE={page:'subjects',subject:null,chapter:null};return}
  }catch(e){}
  return parseHash16();
}
function navigate(page,subject,chapter){
  if(page==='subjects'){
    XFORCE17={page:'subjects'};
    var same=false;try{same=(location.hash==='#/subjects')}catch(e){}
    if(!same){try{location.hash='#/subjects'}catch(e){}}
    try{render()}catch(e){}
    XFORCE17=null;
    try{window.scrollTo(0,0)}catch(e){}
    return;
  }
  return navigate16(page,subject,chapter);
}

/* ---- 17.4 الشريط العلوي الجديد ---- */
function renderNavbar(){
  var act=function(pages){return (pages.indexOf(ROUTE.page)>=0)?' class="nav-link active"':' class="nav-link"'};
  var mk=function(pg,label,ic){return '<span'+act(pg)+' onclick="navigate(\''+pg[0]+'\')">'+ic+'<span>'+label+'</span></span>'};
  var links=mk(['home'],'الرئيسية',xi('home',15))+mk(['subjects','subject','lesson','quiz'],'المواد',xi('grid',15))+mk(['dash'],'تقدّمي',xi('chart',15));
  return '<nav class="navbar">'+
   '<div class="logo" onclick="navigate(\'home\')"><div class="logo-mark">'+LOGO+'</div><span class="logo-text">منصة X</span></div>'+
   '<div class="nav-links">'+links+'</div>'+
   '<div class="nav-side">'+
     '<button class="btn btn-sm '+(XCFG.fxLevel!=='off'?'':'btn-ghost')+'" onclick="toggleFX()" title="تشغيل/إيقاف المؤثرات" aria-label="المؤثرات">'+(XCFG.fxLevel!=='off'?xi('wand',15):xi('zap',15))+'</button>'+
     '<button class="btn btn-sm btn-ghost" onclick="toggleTheme()" title="التبديل بين الوضع الليلي والنهاري" aria-label="المظهر">'+(STATE.theme==='light'?xi('moon',15):xi('sun',15))+'</button>'+
     '<button class="mobile-menu-btn" onclick="toggleMobile()" aria-label="القائمة">☰</button>'+
   '</div></nav>'+
   '<div id="mmenu" class="mobile-menu glass-strong hidden">'+links+'</div>';
}

/* ---- 17.5 الشريط السفلي: خمسة تبويبات ---- */
function renderBottomNav(){
  if(ROUTE.page==='auth')return '';
  var act=function(pages){return (pages.indexOf(ROUTE.page)>=0)?' bnav-on':''};
  return '<nav class="bnav glass-strong" role="navigation" aria-label="التنقل الرئيسي">'+
   '<button class="bnav-btn'+act(['home'])+'" onclick="navigate(\'home\')" aria-label="الرئيسية">'+xi('home',21)+'<span>الرئيسية</span></button>'+
   '<button class="bnav-btn'+act(['subjects','subject','lesson','quiz'])+'" onclick="navigate(\'subjects\')" aria-label="المواد">'+xi('grid',21)+'<span>المواد</span></button>'+
   '<button class="bnav-btn'+act(['dash'])+'" onclick="navigate(\'dash\')" aria-label="التقدم">'+xi('chart',21)+'<span>تقدّمي</span></button>'+
   '<button class="bnav-btn'+act(['profile'])+'" onclick="navigate(\'profile\')" aria-label="الملف الشخصي">'+avatarHTML(24,'av-nav')+'<span>ملفي</span></button>'+
   '<button class="bnav-btn'+act(['settings'])+'" onclick="navigate(\'settings\')" aria-label="الإعدادات">'+xi('gear',21)+'<span>الإعدادات</span></button>'+
   '</nav>';
}

/* ---- 17.6 صفحة اختيار المواد ---- */
function x17SubjCard(sid){
  var S=CURR[sid];var chs=S.chapters;var done=0;
  for(var i=0;i<chs.length;i++){if(STATE.done[chs[i].id])done++}
  var pct=chs.length?Math.round(done*100/chs.length):0;
  var ic=xi(sid==='math'?'book':'atom',26);
  return '<div class="x17-subj x17-card fade-in" onclick="navigate(\'subject\',\''+sid+'\')">'+
   '<div class="x17-row">'+ic+'<div><h3>'+S.name+'</h3><p class="x17-mute">'+S.desc+'</p></div></div>'+
   '<div class="x17-prog"><span style="width:'+pct+'%"></span></div>'+
   '<div class="x17-meta"><span>'+(sid==='math'?chs.length+' محاور':chs.length+' وحدات')+'</span><span>'+done+' مكتمل</span><span>'+pct+'%</span>'+
   '<b class="x17-go">دخول '+xi('arrow',13)+'</b></div></div>';
}
function renderSubjectsPage(){
  return '<div class="section-header fade-in"><h2>'+xi('grid',20)+' المواد الدراسية</h2><p>اختر مادتك للوصول إلى المحاور والدروس والتمارين والاختبارات.</p></div>'+
   '<div class="cards-grid">'+x17SubjCard('math')+x17SubjCard('phys')+'</div>';
}

/* ---- 17.7 الصفحة الرئيسية الجديدة ---- */
function renderHome(){
  var md=CH_MATH.filter(function(c){return STATE.done[c.id]}).length;
  var pd=CH_PHYS.filter(function(c){return STATE.done[c.id]}).length;
  var tot=CH_MATH.length+CH_PHYS.length;var dn=md+pd;
  var qk=Object.keys(STATE.quiz);var sb=0,stt=0;
  for(var i=0;i<qk.length;i++){sb+=(STATE.quiz[qk[i]].best||0);stt+=(STATE.quiz[qk[i]].total||0)}
  var qavg=(stt>0)?Math.round(sb*100/stt):0;
  var prof=(USER&&USER.session&&USER.profile)?USER.profile:null;
  var nm='';if(prof){nm=((prof.first_name||'')+(prof.last_name?' '+prof.last_name:'')).trim()}
  var html='';
  /* الرأس */
  html+='<header class="x17-hero fade-in">'+
   '<div class="x17-hero-top">'+
   '<div class="logo" onclick="navigate(\'home\')"><div class="logo-mark">'+LOGO+'</div><span class="logo-text">منصة X</span></div>'+
   '<div class="x17-hero-side">'+
   '<button class="btn btn-sm btn-ghost" onclick="navigate(\'settings\')" aria-label="الإعدادات">'+xi('gear',17)+'</button>'+
   '<button class="btn btn-sm btn-ghost" onclick="navigate(\'profile\')" aria-label="الملف الشخصي">'+avatarHTML(26)+'</button>'+
   '</div></div>'+
   '<h1>'+(nm?'أهلًا بك يا '+escAttr(nm):'أهلًا بك في منصة X')+'</h1>'+
   '<p class="x17-mute">منصة X التعليمية — الطوران المتوسط والثانوي — دروس وملخصات وتمارين واختبارات تفاعلية لكل المواد والشعب.</p>'+
   '<div style="margin:10px 0 0"><span class="ver-badge">الإصدار 17 — الهوية البصرية الاحترافية</span></div>'+
   '</header>';
  /* بطاقة الحساب أو الزائر */
  if(prof){
    html+='<div class="x17-acct x17-card fade-in">'+avatarHTML(46)+
     '<div class="x17-grow"><b>'+(nm?escAttr(nm):'مستخدم منصة X')+'</b>'+
     '<p class="x17-mute">'+escAttr(prof.study_year||'')+(prof.branch?' • '+escAttr(prof.branch):'')+'</p></div>'+
     '<button class="btn btn-sm" onclick="navigate(\'profile\')">ملفي الشخصي</button></div>';
  }else if(isGuest()){
    html+='<div class="x17-acct x17-card fade-in">'+avatarHTML(42)+
     '<div class="x17-grow"><b>وضع الزائر</b>'+
     '<p class="x17-mute">تقدمك محفوظ على هذا الجهاز فقط. أنشئ حسابًا ليُحفظ في قاعدة البيانات السحابية وتتابعه من أي هاتف.</p></div>'+
     '<button class="btn btn-sm btn-primary" onclick="navigate(\'auth\')">إنشاء حساب</button></div>';
  }
  /* بطاقات المادتين */
  html+='<div class="section-header"><h2>'+xi('grid',20)+' المواد الدراسية</h2><p>محاور ووحدات كاملة مع الدروس والتمارين والاختبارات.</p></div>'+
   '<div class="cards-grid">'+x17SubjCard('math')+x17SubjCard('phys')+'</div>';
  /* متابعة التعلم — من بيانات فعلية فقط */
  var doneIds=Object.keys(STATE.done);
  var lastId=doneIds.length?doneIds[doneIds.length-1]:null;
  html+='<div class="section-header"><h2>متابعة التعلم</h2><p>استأنف من حيث توقفت.</p></div>';
  if(lastId){
    var lsid=CH_MATH.some(function(c){return c.id===lastId})?'math':'phys';
    var cont=findChapter(lsid,lastId);
    if(cont){
      html+='<div class="x17-continue x17-card fade-in"><div><h4>'+(cont.icon||'📘')+' '+cont.title+'</h4><p class="x17-mute">آخر درس أكملته — واصل رحلتك في '+CURR[lsid].name+'.</p></div>'+
       '<button class="btn btn-primary" onclick="navigate(\'lesson\',\''+lsid+'\',\''+lastId+'\')">متابعة '+xi('arrow',13)+'</button></div>';
    }
  }
  if(!lastId||!cont){
    html+='<div class="x17-empty x17-card fade-in">لم تكمل أي درس بعد — اختر «المواد» في الأسفل وابدأ بأول محور، وسيظهر تقدمك هنا بالتفصيل.</div>';
  }
  /* التقدم — من بيانات فعلية فقط */
  html+='<div class="section-header"><h2>'+xi('chart',20)+' تقدّمي</h2><p>نسب محسوبة من نشاطك الفعلي لا من قيم ثابتة.</p></div>';
  if(dn||qk.length||STATE.saved.length){
    var pctAll=tot?Math.round(dn*100/tot):0;
    html+='<div class="x17-card fade-in"><div class="x17-prog big"><span style="width:'+pctAll+'%"></span></div>'+
     '<div class="x17-stats"><span><b>'+dn+'</b> من '+tot+' درسًا مكتملًا ('+pctAll+'%)</span>'+
     '<span><b>'+qk.length+'</b> اختبارًا — متوسط النتائج <b>'+qavg+'%</b></span>'+
     '<span><b>'+STATE.saved.length+'</b> محفوظًا للمراجعة</span></div>'+
     '<button class="btn btn-ghost btn-sm" onclick="navigate(\'dash\')">التقرير الكامل</button></div>';
  }else{
    html+='<div class="x17-empty x17-card fade-in">لا توجد بيانات تقدم بعد — ستظهر هنا فور إنجاز أول درس أو اختبار.</div>';
  }
  /* النشاط الأخير — من بيانات فعلية فقط */
  if(doneIds.length){
    var acts=doneIds.slice(-3).reverse();var rows='';
    for(var a=0;a<acts.length;a++){
      var asid=CH_MATH.some(function(c){return c.id===acts[a]})?'math':'phys';
      var ch2=findChapter(asid,acts[a]);if(!ch2)continue;
      rows+='<button class="x17-act" onclick="navigate(\'lesson\',\''+asid+'\',\''+acts[a]+'\')"><span style="font-size:20px">'+(ch2.icon||'📘')+'</span><div><b>'+ch2.title+'</b><p class="x17-mute">'+CURR[asid].name+' — مكتمل ✓</p></div></button>';
    }
    if(rows){html+='<div class="section-header"><h2>آخر نشاط لك</h2><p>الدروس التي أكملتها مؤخرًا.</p></div><div class="x17-card x17-acts fade-in">'+rows+'</div>'}
  }
  /* البحث */
  html+='<div class="section-header"><h2>'+xi('search',20)+' ابحث في كل المحاور</h2><p>اكتب كلمة مفتاحية (مثل: المماس، المرجح، الناقلية...) للوصول السريع.</p></div>'+
   '<div style="max-width:520px;margin:0 auto 4px;padding:0 16px"><div class="search-bar"><span>🔍</span><input id="homeSearch" placeholder="ابحث عن محور أو درس..." oninput="homeFilter(this.value)"></div></div>'+
   '<div id="searchGrid" class="cards-grid"></div>';
  /* إعلانات المنصة */
  html+='<h2 class="sec15">📣 آخر إعلانات المنصة</h2><div id="xnews" class="news-wrap glass">'+renderNews()+'</div>';
  try{fetchNews()}catch(e){}
  /* التواصل والتذييل */
  html+=contactHTML()+'<div class="footer-note">منصة X — مرجع تعليمي مساعد. طابق دائمًا مع التدرج السنوي لأستاذك والوثائق الرسمية للوزارة.</div>';
  return html;
}

/* ---- 17.8 الإعدادات: نقطة الهوية الزرقاء الرسمية ---- */
function renderSettingsPage(){
  var h=renderSettingsPage16();
  try{
    var i=h.indexOf('xdot');
    if(i>0){h=h.slice(0,i)+'<button class="xdot'+(XCFG.accent==='azure'?' on':'')+'" style="background:#229ED9" onclick="setX(\'accent\',\'azure\')" aria-label="أزرق منصة X"></button>'+h.slice(i)}
  }catch(e){}
  return h;
}

/* ---- 17.9 محرك العرض مع صفحة المواد ---- */
function render(){
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
    default:body=renderHome18();
  }
  var navHtml=(ROUTE.page==='auth')?'':renderNavbar();
  app.innerHTML=navHtml+body+updBanner()+renderBottomNav();
  var mm=document.getElementById('mmenu');if(mm)mm.classList.add('hidden');
  document.querySelectorAll('#mmenu .nav-link').forEach(function(el){
    el.addEventListener('click',function(){var m=document.getElementById('mmenu');m.classList.add('hidden');m.classList.remove('show')});
  });
  typesetApp();
  try{kpSync()}catch(e){}
}

/* ---- 17.10 الترحيل إلى الهوية الزرقاء (مرة واحدة) ---- */
function x17Migrate(){
  try{
    if(!ACCENTS.azure)ACCENTS.azure=['#229ED9','#168AC3'];
    try{delete ACCENTS.crimson}catch(e2){}
    if(stGet('x20_mig',false)!==true){
      XCFG.accent='azure';
      try{saveXCFG()}catch(e){}
      stSet('x20_mig',true);
    }
    applyXCFG();
  }catch(e){}
}

/* ---- 17.11 الإقلاع ---- */
function boot(){
  boot16();
  x17Migrate();
}
/* التقط نسخة طبقة 17 هنا قبل أن ترفع طبقة 18 تعريفاتها (إصلاح رفع الدوال داخل نفس الكتلة) */
var boot17=boot;
