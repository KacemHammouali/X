/* ============================================================
   X v15 — نظام الحسابات والملف الشخصي والتقدم والإعدادات والإدارة والتحديثات
   (طبقة مضافة فوق محرك الإصدار 14 — لا تحذف شيئًا من وظائفه)
   ملاحظة للمالك: املأ SB_CFG أدناه بعد إنشاء خدمة Supabase (انظر دليل الإعداد).
   لا تضع هنا مطلقًا مفتاح service_role — المفتاح العام anon آمن مع سياسات RLS.
   ============================================================ */
var APP_META={
  ver:'18.0',date:'2026-10-30',lastUpdate:'2026-10-30',
  minVer:'18.0',
  changelog:['الدخول بالبريد الإلكتروني: بريدك ← معلوماتك الشخصية ← إرسال من بريدك إلى بريد الإدارة ← دخول فوري — بلا كلمة مرور ولا خدمة مصادقة خارجية','كل بيانات المستخدم والتقدم محفوظة محليًا على الجهاز نفسه — لا توجد قاعدة بيانات خارجية','إصلاح قسم الرسائل والإبلاغ: يفتح تطبيق بريدك برسالة جاهزة إلى بريد المنصة مباشرة مع زر «نسخ الرسالة»','إصلاحات في الإعدادات: إدارة حساب محلية بالكامل وإصلاح مفتاحي المؤثرات والمظهر','صورة شخصية محفوظة محليًا بلا خدمة رفع خارجية','لمسات سلاسة واحترافية: انتقالات ناعمة عند اللمس والتحويم','واجهة جديدة كليًا بهوية بصرية احترافية: ألوان رسمية موحدة وأيقونات خطية بدل الرموز التعبيرية','صفحة المواد الجديدة وشريط سفلي بخمسة تبويبات: الرئيسية والمواد والتقدم وملفي والإعدادات','صفحة رئيسية معاد تصميمها: ترحيب باسمك وبطاقة حساب وبطاقتي المادتين ومتابعة التعلم من آخر درس','تقرير تشخيص محسّن يجمع كل الأخطاء بالترتيب ولا يمحو أي رسالة — لتحديد أي عطل بدقة','الموقع الرسمي القابل للتثبيت كتطبيق (PWA): زر تثبيت في الإعدادات وعمل بلا إنترنت بعد الاستضافة','ظهور جميع وحدات الفيزياء الاثنتي عشرة في صفحة المادة (أصلحنا اختفاء ثلاث وحدات)','إصلاح التنقل ليصحح نفسه في البيئات التي لا تدعم روابط # (عارضات الملفات المحلية)','حفظ كل بيانات المستخدم على جهازه — تحديث الواجهة لا يمسها','تسجيل دخول بالبريد الإلكتروني فقط عبر رسالة من بريد المستخدم إلى إدارة المنصة','ملف شخصي لكل مستخدم مع الصورة والمعلومات الدراسية','تقدم دراسي محفوظ على الجهاز','شريط تنقل سفلي: الرئيسية/الإعدادات/الملف الشخصي','إعدادات متقدمة: مظهر تلقائي وألوان تمييز وحجم خط وأصوات ومؤثرات','لوحة مالك محلية بمعلومات المنصة وحالة خدماتها','نظام إصدارات وفحص تحديثات'],
  updateURL:'versions.json' /* رابط فحص التحديثات — مسار نسبي يعمل على أي عنوان استضافة تلقائيًا */
};
var SB_CFG={url:'',anon:''};
var SB={ready:false,client:null,lib:false};
function sbInit(){
  SB.lib=(typeof window!=='undefined')&&(typeof window.supabase!=='undefined')&&(typeof window.supabase.createClient==='function');
  if(SB.lib&&SB_CFG.url&&SB_CFG.anon){try{SB.client=window.supabase.createClient(SB_CFG.url,SB_CFG.anon);SB.ready=true}catch(e){SB.ready=false}}
}
function sbStatus(){return SB.ready?'متصل':(SB.lib?'غير مهيأ — يلزم إدخال إعدادات Supabase':'مكتبة المصادقة غير محمّلة (تحتاج اتصالًا بالإنترنت أو استضافة)')}

/* ---------------- 15.1 إعدادات المستخدم ---------------- */
var XCFG={
  theme:'dark',accent:'blue',font:'m',motion:true,fxLevel:'full',
  sound:true,vol:6,beep:true,
  notifNews:true,notifStudy:false,
  lang:'ar'
};
function xcfgKey(){return (USER&&USER.session&&USER.session.user&&USER.session.user.id)?('x15_cfg_'+USER.session.user.id):'x15_cfg_local'}
function loadXCFG(){var v=stGet(xcfgKey(),null);if(v){for(var k in v){if(XCFG.hasOwnProperty(k))XCFG[k]=v[k]}}}
function saveXCFG(){stSet(xcfgKey(),XCFG)}
var ACCENTS={blue:['#6ab3f3','#4a9de0'],teal:['#5ec8b8','#3fa99a'],violet:['#a08ee0','#8268d0'],rose:['#e07f9a','#c96380'],amber:['#e0b96a','#cf9f45']};
function applyXCFG(){
  try{
    var t=XCFG.theme;if(t==='auto'){t=(window.matchMedia&&window.matchMedia('(prefers-color-scheme: light)').matches)?'light':'dark'}
    STATE.theme=t;stSet('n14_theme',t);applyTheme();
    var ac=ACCENTS[XCFG.accent]||ACCENTS.blue;
    document.documentElement.style.setProperty('--cyan',ac[0]);
    document.documentElement.style.setProperty('--cyan-glow',ac[1]);
    document.body.classList.toggle('font-lg',XCFG.font==='l');
    document.body.classList.toggle('font-sm',XCFG.font==='s');
    document.body.classList.toggle('motion-off',!XCFG.motion);
    document.body.classList.toggle('fx-min',XCFG.fxLevel==='min');
    var wantFx=XCFG.motion&&XCFG.fxLevel!=='off';
    if(STATE.fx!==wantFx){STATE.fx=wantFx;saveState();applyFX()}
  }catch(e){}
}
function setX(k,v){XCFG[k]=v;saveXCFG();applyXCFG();render();toast('✅ تم تطبيق الإعداد وحفظه')}

/* ---------------- 15.2 الصوت ---------------- */
function xSound(kind){
  if(!XCFG.sound||!XCFG.beep)return;
  try{
    var AC=window.AudioContext||window.webkitAudioContext;if(!AC)return;
    if(!xSound.ctx)xSound.ctx=new AC();var ctx=xSound.ctx;
    if(ctx.state==='suspended')ctx.resume();
    var seq=(kind==='success')?[[660,.0,.09],[880,.10,.12]]:(kind==='error')?[[220,.0,.16]]:[[520,.0,.07]];
    for(var i=0;i<seq.length;i++){
      var o=ctx.createOscillator(),g=ctx.createGain();
      o.frequency.value=seq[i][0];o.type='sine';
      g.gain.setValueAtTime(0.0001,ctx.currentTime+seq[i][1]);
      g.gain.exponentialRampToValueAtTime((XCFG.vol/10)*0.18,ctx.currentTime+seq[i][1]+.01);
      g.gain.exponentialRampToValueAtTime(0.0001,ctx.currentTime+seq[i][1]+seq[i][2]);
      o.connect(g);g.connect(ctx.destination);
      o.start(ctx.currentTime+seq[i][1]);o.stop(ctx.currentTime+seq[i][1]+seq[i][2]+.02);
    }
  }catch(e){}
}

/* ---------------- 15.3 حالة المستخدم والجلسة ---------------- */
var USER={session:null,profile:null};
var XGUEST_KEY='x15_guest';
function isGuest(){try{return localStorage.getItem(XGUEST_KEY)==='1'}catch(e){return stGet(XGUEST_KEY,false)===true}}
function setGuest(v){try{if(v)localStorage.setItem(XGUEST_KEY,'1');else localStorage.removeItem(XGUEST_KEY)}catch(e){stSet(XGUEST_KEY,v===true)}}
function authScreenNeeded(){return !USER.session&&!isGuest()&&ROUTE.page!=='auth'}
function authWrap(inner,step,total){
  var p=total?Math.round(100*step/total):0;
  var bar=total?('<div class="steps-bar"><div class="steps-fill" style="width:'+p+'%"></div><span>'+(total?('الخطوة '+step+' من '+total):'')+'</span></div>'):'';
  return '<div class="auth-wrap fade-in">'+
   '<div class="logo-big"><div class="logo-mark">'+LOGO+'</div><span class="logo-text">X</span></div>'+
   '<h2 class="auth-title">منصة X</h2>'+
   '<p class="auth-sub">منصة X التعليمية — الطوران المتوسط والثانوي</p>'+bar+
   '<div class="auth-card glass-strong">'+inner+'</div>'+
   '<p class="auth-links"><a onclick="xShowDoc(\'privacy\')">سياسة الخصوصية</a> · <a onclick="xShowDoc(\'terms\')">شروط الاستخدام</a></p>'+
   '</div>';
}
function sbBanner(){
  if(SB.ready)return '';
  return '<div class="sb-warn">ℹ️ خدمة الحسابات غير مهيأة بعد'+(SB.lib?'':' (مكتبة المصادقة تحتاج اتصالًا بالإنترنت عند الاستضافة)')+'. يمكنك حاليًا <a onclick="xGoGuest()">المتابعة كزائر</a> — وتفعيل الحسابات يتطلب إعداد الإدارة للخدمة الخلفية وفق دليل الإعداد.</div>';
}

/* ---------------- 15.4 تدفق التسجيل والدخول ---------------- */
var AUTH={tab:'new',email:'',pass:'',pass2:'',sent:false,busy:false,
  form:{fn:'',ln:'',by:'',level:'ثانوي',year:'',branch:'',gender:'',avatar:''},
  errs:{},consent:false,mode:'new',data:{}};
function validEmail(e){return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(e)}
function aErr(k,msg){AUTH.errs[k]=msg}
function renderAuth(){
  var inn='';
  if(AUTH.tab==='new'){inn=authNew()}else if(AUTH.tab==='exist'){inn=authExist()}else if(AUTH.tab==='profile'){inn=authProfile(false)}else if(AUTH.tab==='summary'){inn=authSummary()}else if(AUTH.tab==='verify'){inn=authVerify()}else if(AUTH.tab==='otp'){inn=authOtp()}
  var steps={new:1,profile:2,summary:3,verify:2,exist:1,otp:1};
  return authWrap(sbBanner()+inn,AUTH.tab in steps?steps[AUTH.tab]:0,3);
}
function authTabs(){
  return '<div class="auth-tabs">'+
   '<button class="auth-tab '+(AUTH.tab==='new'?'on':'')+'" onclick="AUTH.tab=\'new\';AUTH.errs={};render()">حساب جديد</button>'+
   '<button class="auth-tab '+(AUTH.tab==='exist'?'on':'')+'" onclick="AUTH.tab=\'exist\';AUTH.errs={};render()">تسجيل الدخول</button>'+
   '</div>';
}
function fErr(k){return AUTH.errs[k]?('<div class="f-err">'+AUTH.errs[k]+'</div>'):''}
function authNew(){
  return authTabs()+
  '<h3>أنشئ حسابك في منصة X</h3>'+
  '<p class="auth-note">حساب واحد لكل بريد — تحفظ فيه تقدمك وإعداداتك وتجده من أي جهاز.</p>'+
  '<label class="fld"><span>البريد الإلكتروني</span><input id="a-email" type="email" dir="ltr" value="'+escAttr(AUTH.email)+'" placeholder="you@example.com">'+fErr('email')+'</label>'+
  '<label class="fld"><span>كلمة المرور</span><input id="a-pass" type="password" dir="ltr" placeholder="6 أحرف على الأقل">'+fErr('pass')+'</label>'+
  '<label class="fld"><span>تأكيد كلمة المرور</span><input id="a-pass2" type="password" dir="ltr">'+fErr('pass2')+'</label>'+
  fErr('top')+
  '<button class="btn btn-primary btn-block" onclick="signupSubmit()">'+(AUTH.busy?'⏳ جارٍ الإنشاء…':'متابعة →')+'</button>'+
  '<p class="auth-alt">لديك حساب؟ <a onclick="AUTH.tab=\'exist\';AUTH.errs={};render()">سجّل الدخول</a></p>';
}
function authExist(){
  return authTabs()+
  '<h3>تسجيل الدخول</h3>'+
  '<label class="fld"><span>البريد الإلكتروني</span><input id="a-email" type="email" dir="ltr" value="'+escAttr(AUTH.email)+'">'+fErr('email')+'</label>'+
  '<label class="fld"><span>كلمة المرور</span><input id="a-pass" type="password" dir="ltr">'+fErr('pass')+'</label>'+
  fErr('top')+
  '<button class="btn btn-primary btn-block" onclick="loginSubmit()">'+(AUTH.busy?'⏳ جارٍ التحقق…':'تسجيل الدخول →')+'</button>'+
  '<p class="auth-alt">نسيت كلمة المرور؟ <a onclick="AUTH.tab=\'otp\';AUTH.errs={};render()">استعادة الوصول بالبريد</a></p>'+
  '<p class="auth-alt">جديد هنا؟ <a onclick="AUTH.tab=\'new\';AUTH.errs={};render()">أنشئ حسابًا</a></p>';
}
function authOtp(){
  return '<h3>استعادة الوصول</h3>'+
  '<p class="auth-note">أدخل بريدك وستصلك رسالة تحتوي رابط دخول آمن.</p>'+
  '<label class="fld"><span>البريد الإلكتروني</span><input id="a-email" type="email" dir="ltr" value="'+escAttr(AUTH.email)+'">'+fErr('email')+'</label>'+
  (AUTH.sent?'<div class="ok-note">📩 إذا كان البريد مرتبطًا بحساب فقد أُرسل إليه رابط الدخول. افتحه ثم عُد واضغط «فتح المنصة».</div>':'')+
  fErr('top')+
  '<button class="btn btn-primary btn-block" onclick="otpSubmit()">'+(AUTH.sent?'إعادة الإرسال':'أرسل رابط الدخول')+'</button>'+
  '<button class="btn btn-block" onclick="refreshSession(true)">فتح المنصة بعد فتح الرابط</button>'+
  '<p class="auth-alt"><a onclick="AUTH.tab=\'exist\';AUTH.sent=false;render()">رجوع لتسجيل الدخول</a></p>';
}
function authVerify(){
  return '<h3>📬 أكّد بريدك الإلكتروني</h3>'+
  '<p class="auth-note">أرسلنا رسالة تحقق إلى <b dir="ltr">'+escAttr(AUTH.email)+'</b>. افتحها واضغط الرابط الذي فيها، ثم ارجع هنا واضغط «تحققت — متابعة».<br>لم تصلك؟ راقب مجلد الرسائل غير المرغوبة أو أعد المحاولة بعد قليل.</p>'+
  fErr('top')+
  '<button class="btn btn-primary btn-block" onclick="refreshSession(true)">✅ تحققت — متابعة</button>'+
  '<p class="auth-alt"><a onclick="AUTH.tab=\'new\';render()">تغيير البريد</a> · <a onclick="xGoGuest()">متابعة كزائر الآن</a></p>';
}
function signupSubmit(){
  AUTH.email=(gid('a-email')||{}).value||AUTH.email;AUTH.pass=(gid('a-pass')||{}).value||'';AUTH.pass2=(gid('a-pass2')||{}).value||'';
  AUTH.errs={};
  if(!validEmail(AUTH.email))aErr('email','اكتب بريدًا إلكترونيًا صالحًا');
  if(AUTH.pass.length<6)aErr('pass','كلمة المرور 6 أحرف على الأقل');
  if(AUTH.pass!==AUTH.pass2)aErr('pass2','الكلمتان غير متطابقتين');
  if(AUTH.errs.email||AUTH.errs.pass||AUTH.errs.pass2){xSound('error');render();return}
  if(!SB.ready){aErr('top','تعذّر إنشاء الحساب: خدمة المصادقة غير مهيأة. '+sbStatus()+' — استخدم «متابعة كزائر» إلى أن يُكمل الإدارة الإعداد.');xSound('error');render();return}
  AUTH.busy=true;render();
  SB.client.auth.signUp({email:AUTH.email,password:AUTH.pass}).then(function(r){
    AUTH.busy=false;
    if(r.error){aErr('top',(r.error.message||'تعذر التسجيل')+'');xSound('error');render();return}
    if(r.data.session){USER.session=r.data.session;AUTH.tab='profile';toast('✅ أُنشئ الحساب — أكمل ملفك الشخصي');navigate('auth')}
    else{AUTH.tab='verify';toast('📩 أرسلنا رسالة التحقق إلى بريدك');navigate('auth')}
  }).catch(function(e){AUTH.busy=false;aErr('top','انقطع الاتصال بالخدمة — تحقق من الإنترنت وأعد المحاولة');xSound('error');render()});
}
function loginSubmit(){
  AUTH.email=(gid('a-email')||{}).value||AUTH.email;AUTH.pass=(gid('a-pass')||{}).value||'';
  AUTH.errs={};
  if(!validEmail(AUTH.email))aErr('email','اكتب بريدًا إلكترونيًا صالحًا');
  if(!AUTH.pass)aErr('pass','اكتب كلمة المرور');
  if(AUTH.errs.email||AUTH.errs.pass){render();return}
  if(!SB.ready){aErr('top','تسجيل الدخول غير متاح حاليًا: '+sbStatus());render();return}
  AUTH.busy=true;render();
  SB.client.auth.signInWithPassword({email:AUTH.email,password:AUTH.pass}).then(function(r){
    AUTH.busy=false;
    if(r.error){aErr('top',r.error.message==='Invalid login credentials'?'البريد أو كلمة المرور غير صحيحة':(r.error.message||'تعذر الدخول'));xSound('error');render();return}
    USER.session=r.data.session;
    loadUserProfile(true);
  }).catch(function(e){AUTH.busy=false;aErr('top','انقطع الاتصال بالخدمة — تحقق من الإنترنت وأعد المحاولة');render()});
}
function otpSubmit(){
  AUTH.email=(gid('a-email')||{}).value||AUTH.email;AUTH.errs={};
  if(!validEmail(AUTH.email)){aErr('email','اكتب بريدًا إلكترونيًا صالحًا');render();return}
  if(!SB.ready){aErr('top','الاستعادة غير متاحة: '+sbStatus());render();return}
  AUTH.busy=true;
  SB.client.auth.signInWithOtp({email:AUTH.email}).then(function(r){
    AUTH.busy=false;AUTH.sent=true;
    if(r.error){aErr('top',r.error.message||'تعذر الإرسال');xSound('error')}
    render();
  }).catch(function(e){AUTH.busy=false;aErr('top','انقطع الاتصال — أعد المحاولة');render()});
}
function refreshSession(fromVerify){
  if(!SB.ready){toast('❌ خدمة المصادقة غير مهيأة');return}
  SB.client.auth.getSession().then(function(r){
    if(r.data&&r.data.session){USER.session=r.data.session;if(fromVerify){toast('✅ تم التحقق من بريدك');}loadUserProfile(true)}
    else if(fromVerify){AUTH.errs={top:'لم يكتمل التحقق بعد — افتح رابط الرسالة أولًا ثم عد'};render()}
  }).catch(function(e){toast('❌ تعذر الاتصال بالخدمة')});
}
function logoutUser(){
  setGuest(false);
  if(SB.ready){try{SB.client.auth.signOut()}catch(e){}}
  USER.session=null;USER.profile=null;AUTH={tab:'new',email:'',pass:'',pass2:'',sent:false,busy:false,form:{fn:'',ln:'',by:'',level:'ثانوي',year:'',branch:'',gender:'',avatar:''},errs:{},consent:false,mode:'new',data:{}};
  toast('👋 سجّلت الخروج بأمان');navigate('auth');
}
function xGoGuest(){setGuest(true);toast('👤 أنت الآن في وضع الزائر — تقدمك محفوظ على هذا الجهاز فقط');navigate('home')}
function gid(id){return document.getElementById(id)}

/* ---------------- 15.5 الملف الشخصي — النماذج ---------------- */
var YEARS={'السنة الأولى ثانوي':['جذع مشترك علوم وتكنولوجيا','جذع مشترك آداب'], 'السنة الثانية ثانوي':['رياضيات','تقني رياضي','علوم تجريبية','تسيير واقتصاد','آداب وفلسفة','لغات أجنبية'], 'السنة الثالثة ثانوي':['رياضيات','تقني رياضي','علوم تجريبية','تسيير واقتصاد','آداب وفلسفة','لغات أجنبية']};
function yearOptions(sel){var h='';for(var y in YEARS){h+='<option value="'+y+'"'+(sel===y?' selected':'')+'>'+y+'</option>'}return h}
function branchOptions(year,sel){var h='';var arr=YEARS[year]||[];for(var i=0;i<arr.length;i++){h+='<option value="'+escAttr(arr[i])+'"'+(sel===arr[i]?' selected':'')+'>'+arr[i]+'</option>'}return h}
function collectProfileForm(){
  var f=AUTH.form;
  f.fn=(gid('p-fn')||{}).value||f.fn;f.ln=(gid('p-ln')||{}).value||f.ln;
  f.by=(gid('p-by')||{}).value||f.by;
  f.year=(gid('p-year')||{}).value||f.year;
  f.branch=(gid('p-branch')||{}).value||f.branch;
  f.gender=(gid('p-gender')||{}).value||f.gender;
  return f;
}
function profileFormFields(f,editing){
  return ''+
  '<div class="p-grid">'+
  '<label class="fld"><span>الاسم *</span><input id="p-fn" value="'+escAttr(f.fn)+'" placeholder="مثال: كريم">'+fErr('fn')+'</label>'+
  '<label class="fld"><span>اللقب *</span><input id="p-ln" value="'+escAttr(f.ln)+'" placeholder="مثال: بن يوسف">'+fErr('ln')+'</label>'+
  '</div>'+
  '<div class="p-grid">'+
  '<label class="fld"><span>سنة الميلاد (اختياري)</span><input id="p-by" type="number" min="1995" max="2015" value="'+escAttr(f.by)+'"></label>'+
  '<label class="fld"><span>الجنس (اختياري)</span><select id="p-gender"><option value=""'+(f.gender?'':' selected')+'>بدون تحديد</option><option value="m"'+(f.gender==='m'?' selected':'')+'>ذكر</option><option value="f"'+(f.gender==='f'?' selected':'')+'>أنثى</option></select></label>'+
  '</div>'+
  '<div class="p-grid">'+
  '<label class="fld"><span>المستوى *</span><select id="p-level" onchange="AUTH.form.year=\'\';AUTH.form.branch=\'\';collectProfileForm();render()">'+
  '<option value="ثانوي" selected>تعليم ثانوي</option></select>'+fErr('level')+'</label>'+
  '<label class="fld"><span>السنة الدراسية *</span><select id="p-year" onchange="AUTH.form.branch=\'\';collectProfileForm();render()">'+yearOptions(f.year)+'</select>'+fErr('year')+'</label>'+
  '</div>'+
  '<label class="fld"><span>الشعبة *</span><select id="p-branch">'+branchOptions(f.year,f.branch)+'</select>'+fErr('branch')+'</label>'+
  (editing?'':'<p class="auth-note">الصورة الشخصية اختيارية تمامًا ويمكن إضافتها لاحقًا من ملفك الشخصي.</p>');
}
function validateProfile(){
  var f=collectProfileForm();AUTH.errs={};
  if(!f.fn.trim())aErr('fn','اكتب اسمك');
  if(!f.ln.trim())aErr('ln','اكتب لقبك');
  if(!f.year)aErr('year','اختر السنة الدراسية');
  if(!f.branch)aErr('branch','اختر الشعبة');
  return !(AUTH.errs.fn||AUTH.errs.ln||AUTH.errs.year||AUTH.errs.branch);
}
function authProfile(editing){
  return '<h3>'+(editing?'تعديل بياناتي':'أنشئ ملفك الشخصي')+'</h3>'+
  '<p class="auth-note">نستعمل هذه البيانات لتخصيص دروسك ومتابعة تقدمك فقط — وتفاصيلها في سياسة الخصوصية.</p>'+
  profileFormFields(AUTH.form,editing)+
  fErr('top')+
  '<div class="btn-row">'+
  '<button class="btn" onclick="AUTH.tab=\'new\';render()">← رجوع</button>'+
  '<button class="btn btn-primary" onclick="profileNext()">متابعة →</button>'+
  '</div>';
}
function profileNext(){
  if(!validateProfile()){xSound('error');render();return}
  AUTH.tab='summary';render();
}
function authSummary(){
  var f=AUTH.form;
  return '<h3>تأكيد وإنشاء الحساب</h3>'+
  '<div class="sum-card">'+
  '<div class="sum-row"><span>البريد</span><b dir="ltr">'+escAttr(AUTH.email)+'</b></div>'+
  '<div class="sum-row"><span>الاسم واللقب</span><b>'+escAttr(f.fn)+' '+escAttr(f.ln)+'</b></div>'+
  '<div class="sum-row"><span>المستوى</span><b>ثانوي — '+escAttr(f.year)+'</b></div>'+
  '<div class="sum-row"><span>الشعبة</span><b>'+escAttr(f.branch)+'</b></div>'+
  '</div>'+
  '<p class="auth-note">جمعنا هذه البيانات لإنشاء ملفك الدراسي وربط تقدمك به. لا نجمع أي بيانات أخرى ولا نشارك بريدك مع أي طرف ثالث.</p>'+
  '<label class="chk"><input type="checkbox" id="p-consent" '+(AUTH.consent?'checked':'')+' onchange="AUTH.consent=this.checked"> أوافق على <a onclick="xShowDoc(\'privacy\')">سياسة الخصوصية</a> و<a onclick="xShowDoc(\'terms\')">شروط الاستخدام</a> *</label>'+
  fErr('top')+
  '<div class="btn-row">'+
  '<button class="btn" onclick="AUTH.tab=\'profile\';render()">← رجوع</button>'+
  '<button class="btn btn-primary" onclick="createAccount()">'+(AUTH.busy?'⏳ جارٍ الحفظ…':'✅ إنشاء حسابي')+'</button>'+
  '</div>';
}
function createAccount(){
  AUTH.consent=!!(gid('p-consent')||{}).checked;
  if(!AUTH.consent){aErr('top','يلزم الموافقة على سياسة الخصوصية لإكمال التسجيل');xSound('error');render();return}
  if(!validateProfile()){AUTH.tab='profile';render();return}
  if(!USER.session){aErr('top','انتهت صلاحية التسجيل أو لم يكتمل التحقق — سجّل من جديد بالبريد نفسه ولن يُنشأ حساب مكرر');render();return}
  if(!SB.ready){aErr('top','خدمة البيانات غير مهيأة');render();return}
  AUTH.busy=true;render();
  saveProfileRow().then(function(ok){
    AUTH.busy=false;
    if(!ok){aErr('top','تعذر حفظ الملف الشخصي — حسابك موجود وسليم، أعد المحاولة الآن أو لاحقًا دون إنشاء حساب جديد');xSound('error');render();return}
    xSound('success');toast('🎉 أهلًا بك في منصة X يا '+AUTH.form.fn);
    loadUserProfile(true);
  });
}
function profileRow(){
  var u=USER.session.user,f=AUTH.form;
  return {id:u.id,email:u.email||AUTH.email,first_name:f.fn,last_name:f.ln,birth_year:(f.by?parseInt(f.by,10):null),level:f.level,study_year:f.year,branch:f.branch,gender:f.gender||null,role:(USER.profile&&USER.profile.role)||'student'};
}
function saveProfileRow(){
  return SB.client.from('profiles').upsert(profileRow()).then(function(r){
    if(r.error){return false}return true;
  }).catch(function(e){return false});
}

/* ---------------- 15.6 جلسة وتحميل الملف ---------------- */
function loadUserProfile(redirect){
  if(!SB.ready||!USER.session){render();return}
  var uid=USER.session.user.id;
  SB.client.from('profiles').select('*').eq('id',uid).maybeSingle().then(function(r){
    if(r.error){toast('❌ تعذر تحميل ملفك الشخصي — أعد المحاولة');render();return}
    if(!r.data){
      AUTH.form.fn='';AUTH.tab='profile';
      toast('📋 أكمل ملفك الشخصي لإكمال التسجيل');
      navigate('auth');return;
    }
    USER.profile=r.data;
    AUTH.form={fn:r.data.first_name||'',ln:r.data.last_name||'',by:(r.data.birth_year||'')+'',level:r.data.level||'ثانوي',year:r.data.study_year||'',branch:r.data.branch||'',gender:r.data.gender||'',avatar:''};
    loadXCFG();applyXCFG();
    xPull(uid);
    if(redirect){navigate('home')}
    else render();
  }).catch(function(e){toast('❌ انقطع الاتصال أثناء تحميل ملفك');render()});
}
function restoreSession(){
  if(!SB.ready)return;
  SB.client.auth.getSession().then(function(r){
    if(r.data&&r.data.session){USER.session=r.data.session;loadUserProfile(false)}
  }).catch(function(e){});
}

/* ---------------- 15.7 التقدم: بدء الدروس والإحصاء والمزامنة ---------------- */
STATE.started=stGet('x15_started',{});
STATE.lastLesson=stGet('x15_last',null);
function saveState(){
  saveState14();
  try{stSet('x15_started',STATE.started);stSet('x15_last',STATE.lastLesson)}catch(e){}
  xSync();
}
function renderLesson(sid,cid){
  if(cid){
    STATE.started[cid]=STATE.started[cid]||1;
    var ch=findChapter(sid,cid);
    STATE.lastLesson={sid:sid,cid:cid,t:ch?ch.title:''};
    saveState();
  }
  return renderLesson14(sid,cid);
}
function markDone(sid,cid){markDone14(sid,cid);xSound('done')}
function confetti(){confetti14();xSound('success')}
/* إعادة إظهار شريط التنقل السفلي بعد الإجابة على سؤال (إعادة رسم المحرك لا تتضمنه) */
function answerQuiz(idx){answerQuiz14(idx);try{var r=gid('app');if(r)r.innerHTML+=renderBottomNav()}catch(e){}}
function xTotalLessons(){return CH_MATH.length+CH_PHYS.length}
function xStats(){
  var doneK=Object.keys(STATE.done||{}),startK=Object.keys(STATE.started||{});
  var quizK=Object.keys(STATE.quiz||{});
  var quizDone=0,quizPerfect=0;
  for(var i=0;i<quizK.length;i++){var q=STATE.quiz[quizK[i]];if(q&&q.total){quizDone++;if(q.best>=q.total)quizPerfect++}}
  var pct=Math.round(100*doneK.length/xTotalLessons());
  return {done:doneK.length,started:startK.length,quizAtt:quizK.length,quizDone:quizDone,quizPerfect:quizPerfect,pct:pct,total:xTotalLessons(),saved:(STATE.saved||[]).length};
}
function xSync(){
  if(!SB.ready||!USER.session)return;
  try{
    if(xSync.t)clearTimeout(xSync.t);
    xSync.t=setTimeout(function(){
      SB.client.from('progress').upsert({user_id:USER.session.user.id,
        data:{done:STATE.done,saved:STATE.saved,quiz:STATE.quiz,started:STATE.started,last:STATE.lastLesson}}).then(function(r){if(r.error)console.warn('sync',r.error.message)}).catch(function(e){});
    },800);
  }catch(e){}
}
function xPull(uid){
  if(!SB.ready)return;
  SB.client.from('progress').select('data,updated_at').eq('user_id',uid).maybeSingle().then(function(r){
    if(r.error||!r.data||!r.data.data)return;
    var d=r.data.data||{};
    var i,k;
    if(d.done)for(k in d.done)STATE.done[k]=d.done[k];
    if(d.started)for(k in d.started)STATE.started[k]=1;
    if(d.quiz)for(k in d.quiz){var a=STATE.quiz[k],b=d.quiz[k];if(!a||!b||(b.best>a.best))STATE.quiz[k]=b}
    if(d.saved&&d.saved.length){var set={};for(i=0;i<STATE.saved.length;i++)set[STATE.saved[i]]=1;for(i=0;i<d.saved.length;i++)if(!set[d.saved[i]]){set[d.saved[i]]=1;STATE.saved.push(d.saved[i])}}
    if(!STATE.lastLesson&&d.last)STATE.lastLesson=d.last;
    saveState();render();
    toast('☁️ تم استرجاع تقدمك من حسابك');
  }).catch(function(e){});
}

/* ---------------- 15.8 الإعلانات ---------------- */
var XNEWS={loaded:false,items:null};
function renderNews(){
  var items=(XNEWS.items||fallbackNews18()).slice(0,3),h='';
  for(var i=0;i<items.length;i++){
    h+='<div class="news-item"><b>'+escAttr(items[i].title||'')+'</b><span>'+escAttr((items[i].date||'')+'')+'</span><p>'+(items[i].body||'')+'</p></div>';
  }
  return h;
}
function fetchNews(){
  if(!SB.ready||XNEWS.loaded)return;
  SB.client.from('announcements').select('title,body,created_at').eq('published',true).order('created_at',{ascending:false}).limit(5).then(function(r){
    if(r.error||!r.data||!r.data.length)return;
    XNEWS.loaded=true;XNEWS.items=r.data.map(function(a){return {title:a.title,body:a.body,date:(a.created_at||'').slice(0,10)}});
    var el=gid('xnews');if(el)el.innerHTML=renderNews();
  }).catch(function(e){});
}

/* ---------------- 15.9 الصفحة الرئيسية v15 ---------------- */
function avatarHTML(size,cls){
  var p=USER.profile;
  if(p&&p.avatar_url)return '<div class="avatar '+(cls||'')+'" style="width:'+size+'px;height:'+size+'px"><img src="'+escAttr(p.avatar_url)+'" alt="صورتي"></div>';
  var ch=(p&&p.first_name)?p.first_name.charAt(0):(USER.session?(USER.session.user.email||'?').charAt(0).toUpperCase():'?');
  return '<div class="avatar av-txt '+(cls||'')+'" style="width:'+size+'px;height:'+size+'px;font-size:'+Math.round(size*0.42)+'px">'+ch+'</div>';
}
function renderHome(){
  var st=xStats(),ll=STATE.lastLesson;
  var inn=USER.session&&USER.profile;
  var greet=inn?('أهلًا '+USER.profile.first_name+' 👋'):(USER.session?'أهلًا بك 👋':'أهلًا بك في منصة X 👋');
  var who=inn?(escAttr(USER.profile.first_name+' '+USER.profile.last_name)+' — '+escAttr(USER.profile.study_year||'')+' ('+escAttr(USER.profile.branch||'')+')'):(isGuest()?'وضع الزائر — التقدم محفوظ على هذا الجهاز فقط':'');
  var h='<div class="fade-in">';
  h+='<div class="hero15">'+
   '<div class="h15-top">'+avatarHTML(56,'av-hero')+'<div><h1>'+greet+'</h1><p class="h15-sub">'+who+'</p></div>'+
   '<span class="ver-badge">الإصدار '+APP_META.ver+'</span></div>';
  h+='<div class="h15-cards">';
  if(ll){h+='<div class="h15-card glass-strong"><span class="h15-k">📌 متابعة التعلم</span><b class="h15-t">'+escAttr(ll.t||'')+'</b>'+
   (STATE.done[ll.cid]?'<span class="h15-ok">✅ أكملت هذا الدرس</span>':'')+
   '<div class="btn-row"><button class="btn btn-primary" onclick="navigate(\'lesson\',\''+ll.sid+'\',\''+ll.cid+'\')">📖 استئناف الدرس</button>'+
   '<button class="btn" onclick="navigate(\'quiz\',\''+ll.sid+'\',\''+ll.cid+'\')">🎯 اختبر نفسك</button></div></div>';}
  else{h+='<div class="h15-card glass-strong"><span class="h15-k">📌 ابدأ رحلتك</span><b class="h15-t">11 محور رياضيات + 12 وحدة فيزياء</b><div class="btn-row"><button class="btn btn-primary" onclick="navigate(\'subject\',\'math\')">📐 الرياضيات</button><button class="btn" onclick="navigate(\'subject\',\'phys\')">⚛️ الفيزياء</button></div></div>';}
  h+='<div class="h15-card glass-strong"><span class="h15-k">📊 تقدمي</span>'+
   '<div class="pbar"><div class="pfill" style="width:'+st.pct+'%"></div></div>'+
   '<p class="h15-stat">'+st.pct+'% — '+st.done+' من '+st.total+' درسًا مكتملا · '+st.quizAtt+' اختبارًا</p>'+
   '<div class="btn-row"><button class="btn" onclick="navigate(\'dash\')">📈 التفاصيل</button><button class="btn" onclick="navigate(\'profile\')">👤 ملفي</button></div></div>';
  h+='</div>';
  if(!USER.session){h+='<div class="h15-cta glass">👤 <b>أنشئ حسابك</b> لتحفظ تقدمك وتجده من أي جهاز — أو سجّل دخولك. <button class="btn btn-sm btn-primary" onclick="navigate(\'auth\')">إنشاء حساب / دخول</button></div>';}
  var inProg=[],ids=Object.keys(STATE.started||{});
  for(var i=0;i<ids.length&&inProg.length<4;i++){if(!STATE.done[ids[i]]){var c=findChapter((ids[i].indexOf('ph')===0?'phys':'math'),ids[i]);if(c)inProg.push(c)}}
  if(inProg.length){
    h+='<h2 class="sec15">▶ دروس بدأتها ولم تكتمل</h2><div class="grid15">';
    for(i=0;i<inProg.length;i++){h+='<div class="subject-card glass" onclick="navigate(\'lesson\',\''+(inProg[i].id.indexOf('ph')===0?'phys':'math')+'\',\''+inProg[i].id+'\')">'+inProg[i].icon+' '+inProg[i].title+'</div>';}
    h+='</div>';
  }
  h+='<h2 class="sec15">📚 المواد</h2><div class="grid15">'+
   '<div class="subject-card glass" onclick="navigate(\'subject\',\'math\')"><div><div class="subject-icon math">📐</div><b>الرياضيات</b><span>'+CH_MATH.length+' محاور وفق البرنامج الرسمي</span></div></div>'+
   '<div class="subject-card glass" onclick="navigate(\'subject\',\'phys\')"><div><div class="subject-icon phys">⚛️</div><b>الفيزياء والكيمياء</b><span>'+CH_PHYS.length+' وحدة وفق البرنامج الرسمي</span></div></div>'+
   '<div class="subject-card glass" onclick="navigate(\'dash\')"><div><div class="subject-icon">📊</div><b>تقدّمي ومراجعتي</b><span>النتائج والدروس المحفوظة والقوانين</span></div></div>'+
   '</div>';
  if(XCFG.notifNews){
    h+='<h2 class="sec15">📣 آخر إعلانات المنصة</h2><div id="xnews" class="news-wrap glass">'+renderNews()+'</div>';
  }
  h+='<div class="h15-foot">'+contactHTML()+'</div>';
  h+='</div>';
  fetchNews();
  return h;
}

/* ---------------- 15.10 شريط التنقل السفلي ---------------- */
function renderBottomNav(){
  if(ROUTE.page==='auth')return '';
  var act=function(p){return (ROUTE.page===p)?' bnav-on':''};
  return '<nav class="bnav glass-strong" role="navigation" aria-label="التنقل الرئيسي">'+
   '<button class="bnav-btn'+act('profile')+'" onclick="navigate(\'profile\')" aria-label="الملف الشخصي">'+avatarHTML(26,'av-nav')+'<span>ملفي</span></button>'+
   '<button class="bnav-btn'+act('settings')+'" onclick="navigate(\'settings\')" aria-label="الإعدادات">⚙️<span>الإعدادات</span></button>'+
   '<button class="bnav-btn bnav-home'+act('home')+'" onclick="navigate(\'home\')" aria-label="الرئيسية">🏠<span>الرئيسية</span></button>'+
   '</nav>';
}

/* ---------------- 15.11 صفحة الملف الشخصي ---------------- */
function renderProfilePage(){
  if(!USER.session){
    return '<div class="auth-wrap fade-in"><div class="auth-card glass-strong">'+
    '<div class="pv-center">'+avatarHTML(72)+'</div>'+
    '<h3>هذه صفحتك الشخصية</h3>'+
    '<p class="auth-note">'+(isGuest()?'أنت في وضع الزائر، فلا يوجد ملف شخصي محفوظ. أنشئ حسابًا لتتبع تقدمك ويظهر ملفك هنا.':'سجّل دخولك لتظهر بياناتك وتقدمك هنا.')+'</p>'+
    '<button class="btn btn-primary btn-block" onclick="navigate(\'auth\')">🔑 تسجيل الدخول / حساب جديد</button>'+
    '</div></div>';
  }
  var p=USER.profile,st=xStats();
  if(!p){
    return '<div class="auth-wrap fade-in"><div class="auth-card glass-strong"><h3>أكمل ملفك الشخصي</h3><p class="auth-note">حسابك موجود لكن ملفك لم يكتمل — أكمل الناقص فقط.</p>'+authProfile(true)+'</div></div>';
  }
  var h='<div class="fade-in pv15">';
  h+='<div class="pv-head glass-strong">'+
   avatarHTML(84,'av-pv')+
   '<div class="pv-id"><h2>'+escAttr(p.first_name+' '+p.last_name)+'</h2>'+
   '<p dir="ltr">'+escAttr(p.email||'')+'</p>'+
   '<p>'+escAttr(p.study_year||'')+' — شعبة '+escAttr(p.branch||'')+'</p>'+
   '<p class="pv-date">📅 عضو منذ '+escAttr((p.created_at||'').slice(0,10))+'</p></div>'+
   (p.role==='admin'?'<button class="btn btn-sm btn-primary" onclick="navigate(\'admin\')">🛡️ لوحة الإدارة</button>':'')+
   '</div>';
  h+='<div class="h15-cards">';
  h+='<div class="h15-card glass-strong"><span class="h15-k">📊 تقدمي الدراسي</span><div class="pbar"><div class="pfill" style="width:'+st.pct+'%"></div></div>'+
   '<ul class="pv-stats"><li>اكتمل: <b>'+st.done+'/'+st.total+'</b> درسًا</li><li>بدأته: <b>'+st.started+'</b></li><li>اختبارات أجريتها: <b>'+st.quizAtt+'</b></li><li>نتائج كاملة: <b>'+st.quizPerfect+'</b></li></ul>'+
   '<button class="btn" onclick="navigate(\'dash\')">📈 تقرير التقدم الكامل</button></div>';
  h+='<div class="h15-card glass-strong"><span class="h15-k">🔖 مراجعتي</span><p class="auth-note">'+st.saved+' عنصرًا محفوظًا للمراجعة</p><button class="btn" onclick="navigate(\'dash\')">عرض المحفوظات والقوانين</button></div>';
  h+='</div>';
  h+='<div class="pv-actions glass">'+
   '<button class="btn" onclick="AUTH.tab=\'profile\';navigate(\'auth\');setTimeout(function(){},0)">✏️ تعديل المعلومات</button>'+
   '<button class="btn" onclick="xPickAvatar()">🖼️ تغيير الصورة</button>'+
   '<button class="btn" onclick="xChangeEmail()">📧 تغيير البريد</button>'+
   '<button class="btn btn-danger-ghost" onclick="logoutUser()">🚪 تسجيل الخروج</button>'+
   '<button class="btn btn-danger-ghost" onclick="xDeleteAccount()">🗑️ طلب حذف الحساب</button>'+
   '</div>';
  h+='</div>';
  return h;
}
function xPickAvatar(){
  if(!SB.ready){toast('ℹ️ رفع الصور يحتاج إعداد تخزين الصور (Supabase Storage) — انظر دليل الإعداد');return}
  var inp=document.createElement('input');inp.type='file';inp.accept='image/*';
  inp.onchange=function(){
    var f=inp.files&&inp.files[0];if(!f)return;
    toast('⏳ جارٍ رفع الصورة…');
    SB.client.storage.from('avatars').upload(USER.session.user.id+'/'+f.name,f,{upsert:true}).then(function(r){
      if(r.error){toast('❌ تعذر رفع الصورة: '+(r.error.message||''));return}
      SB.client.storage.from('avatars').getPublicUrl(USER.session.user.id+'/'+f.name).then(function(u){
        var url=u.data.publicUrl;
        SB.client.from('profiles').update({avatar_url:url}).eq('id',USER.session.user.id).then(function(rr){
          if(rr.error){toast('❌ تعذر تحديث الملف');return}
          USER.profile.avatar_url=url;toast('✅ تم تحديث صورتك');render();
        });
      });
    }).catch(function(e){toast('❌ انقطع الاتصال أثناء الرفع')});
  };
  inp.click();
}
function xChangeEmail(){
  var cur=(USER.session.user.email||'');
  var ne=prompt('بريدك الحالي: '+cur+'\nاكتب بريدك الجديد — ستصل إليه رسالة تحقق وثم يُفعّل بعد تأكيده:','');
  if(!ne)return;
  if(!validEmail(ne)){toast('❌ بريد غير صالح');return}
  if(!SB.ready){toast('ℹ️ تغيير البريد يحتاج خدمة الحسابات المهيأة');return}
  SB.client.auth.updateUser({email:ne}).then(function(r){
    if(r.error){toast('❌ '+r.error.message);return}
    toast('📩 أرسلنا رسالة تحقق إلى بريدك الجديد — أكدها ليكتمل التغيير');
  }).catch(function(e){toast('❌ انقطع الاتصال')});
}
function xDeleteAccount(){
  if(!confirm('سيُرسل طلب حذف حسابك وبياناتك إلى إدارة المنصة، ولا يمكن التراجع بعد التنفيذ. هل أنت متأكد؟'))return;
  if(!SB.ready){toast('ℹ️ طلب الحذف يحتاج خدمة الحسابات المهيأة');return}
  SB.client.from('delete_requests').insert({user_id:USER.session.user.id,email:USER.session.user.email,note:'طلب حذف من الواجهة'}).then(function(r){
    if(r.error){toast('❌ تعذر إرسال الطلب — أعد المحاولة لاحقًا');return}
    toast('📨 سُجل طلب حذف حسابك — ستنفذه الإدارة وفق سياسة الخصوصية');
  }).catch(function(e){toast('❌ انقطع الاتصال')});
}

/* ---------------- 15.12 الإعدادات ---------------- */
function xToggle(label,on,fn){
  return '<button class="xtg'+(on?' on':'')+'" onclick="'+fn+'">'+label+'<span class="xtg-k">'+(on?'✔ مفعّل':'✖ معطّل')+'</span></button>';
}
function xPill(group,cur,val,txt){
  return '<button class="xpill'+(cur===val?' on':'')+'" onclick="setX(\''+group+'\',\''+val+'\')">'+txt+'</button>';
}
function xSect(title,inner){return '<div class="set-card glass-strong"><h3>'+title+'</h3>'+inner+'</div>'}
function renderSettingsPage(){
  var h='<div class="fade-in set-wrap"><h2 class="sec15">⚙️ الإعدادات</h2>';
  h+=xSect('🎨 المظهر',
   '<div class="set-line"><span>الوضع</span><div class="pills">'+xPill('theme',XCFG.theme,'dark','🌙 داكن')+xPill('theme',XCFG.theme,'light','☀️ فاتح')+xPill('theme',XCFG.theme,'auto','🌗 تلقائي (حسب الجهاز)')+'</div></div>'+
   '<div class="set-line"><span>لون التمييز</span><div class="pills">'+
   '<button class="xdot'+(XCFG.accent==='blue'?' on':'')+'" style="background:#6ab3f3" onclick="setX(\'accent\',\'blue\')" aria-label="أزرق"></button>'+
   '<button class="xdot'+(XCFG.accent==='teal'?' on':'')+'" style="background:#5ec8b8" onclick="setX(\'accent\',\'teal\')" aria-label="تركوازي"></button>'+
   '<button class="xdot'+(XCFG.accent==='violet'?' on':'')+'" style="background:#a08ee0" onclick="setX(\'accent\',\'violet\')" aria-label="بنفسجي"></button>'+
   '<button class="xdot'+(XCFG.accent==='rose'?' on':'')+'" style="background:#e07f9a" onclick="setX(\'accent\',\'rose\')" aria-label="وردي"></button>'+
   '<button class="xdot'+(XCFG.accent==='amber'?' on':'')+'" style="background:#e0b96a" onclick="setX(\'accent\',\'amber\')" aria-label="ذهبي"></button>'+
   '</div></div>'+
   '<div class="set-line"><span>حجم الخط</span><div class="pills">'+xPill('font',XCFG.font,'s','صغير')+xPill('font',XCFG.font,'m','عادي')+xPill('font',XCFG.font,'l','كبير')+'</div></div>'+
   '<p class="set-note">كل التغييرات تُطبَّق فورًا على القوائم والبطاقات والحقول والرسائل، وتُحفظ تلقائيًا.</p>');
  h+=xSect('🔊 الصوت',
   xToggle('الأصوات',XCFG.sound,'setSoundEvent(this)')+
   xToggle('صوت التنبيهات والرسائل',XCFG.beep,'setX(\'beep\','+(!XCFG.beep)+')')+
   '<div class="set-line"><span>الشدة</span><input type="range" min="1" max="10" value="'+XCFG.vol+'" oninput="XCFG.vol=+this.value;saveXCFG()" onchange="xSound(\'tap\')" class="xrange"></div>'+
   '<button class="btn btn-sm" onclick="xSound(\'success\')">▶ معاينة الصوت</button>'+
   '<p class="set-note">لا يُشغَّل أي صوت تلقائيًا عند فتح المنصة.</p>');
  h+=xSect('✨ المؤثرات البصرية',
   '<div class="set-line"><span>المستوى</span><div class="pills">'+xPill('fxLevel',XCFG.fxLevel,'off','معطّل')+xPill('fxLevel',XCFG.fxLevel,'min','هادئ')+xPill('fxLevel',XCFG.fxLevel,'full','كامل')+'</div></div>'+
   xToggle('الحركة والانتقالات',XCFG.motion,'setX(\'motion\','+(!XCFG.motion)+')')+
   '<p class="set-note">المستوى الهادئ يخفف الجسيمات والانتقالات لتوفير البطارية، ويحترم إعداد الجهاز «تقليل الحركة» في الوضع التلقائي.</p>');
  h+=xSect('🔔 الإشعارات',
   xToggle('إعلانات المنصة الجديدة',XCFG.notifNews,'setX(\'notifNews\','+(!XCFG.notifNews)+')')+
   xToggle('تذكيرات الدراسة',XCFG.notifStudy,'setX(\'notifStudy\','+(!XCFG.notifStudy)+')')+
   '<p class="set-note">إشعارات نظام التشغيل تتطلب تثبيت المنصة كتطبيق ويب (PWA) بعد الاستضافة — راجع دليل الإعداد. الإشعارات داخل المنصة تعمل الآن.</p>');
  h+=xSect('🌐 اللغة',
   '<div class="pills"><button class="xpill on">العربية ✔</button><button class="xpill" disabled>français — قريبًا</button><button class="xpill" disabled>English — soon</button></div>'+
   '<p class="set-note">العربية مدعومة بالكامل؛ الفرنسية والإنجليزية قيد الإعداد ولا نعرضها إلا بعد اكتمالها.</p>');
  var acc='';
  if(USER.session&&USER.profile){
    acc='<div class="btn-col">'+
    '<button class="btn" onclick="navigate(\'auth\')">✏️ تعديل المعلومات</button>'+
    '<button class="btn" onclick="xPickAvatar()">🖼️ تغيير الصورة</button>'+
    '<button class="btn" onclick="xChangeEmail()">📧 تغيير البريد الإلكتروني</button>'+
    '<button class="btn btn-danger-ghost" onclick="logoutUser()">🚪 تسجيل الخروج</button>'+
    '<button class="btn btn-danger-ghost" onclick="xDeleteAccount()">🗑️ حذف الحساب وبياناته من هذا الجهاز</button></div>'+
'</div>';try{if((typeof x54OwnerOk==='function')&&x54OwnerOk()){acc+='<p class="set-note">بياناتك محفوظة على جهازك أنت — لا توجد خدمة حسابات خارجية ولا كلمات مرور.</p>'}}catch(eD){}
  }else{
    acc='<p class="set-note">'+(isGuest()?'أنت في وضع الزائر — سجّل ببريدك لتظهر بياناتك هنا.':'سجّل ببريدك الإلكتروني لإدارة بياناتك.')+'</p>'+
    '<button class="btn btn-primary" onclick="navigate(\'auth\')">🔑 الدخول بالبريد الإلكتروني</button>';
  }
  h+=xSect('👤 الحساب',acc);
  h+=xSect('ℹ️ عن المنصة',
   '<div class="about-x"><div class="logo-mark x39-about-logo">'+X30_LOGO+'</div><div><b>منصة X</b> — الإصدار '+APP_META.ver+'<br>آخر تحديث: '+APP_META.lastUpdate+'</div></div>'+
   '<div class="btn-row"><button class="btn" onclick="xShowDoc(\'about\')">📄 معلومات التطبيق</button>'+
   '<button class="btn" onclick="checkUpdate()">🔄 التحقق من التحديثات</button></div>'+
   '<div class="btn-row"><button class="btn btn-ghost" onclick="xShowDoc(\'privacy\')">سياسة الخصوصية</button>'+
   '<button class="btn btn-ghost" onclick="xShowDoc(\'terms\')">شروط الاستخدام</button></div>');
  h+='</div>';
  return h;
}
function setSoundEvent(){setX('sound',!XCFG.sound)}

/* ---------------- 15.13 التحديثات ---------------- */
var XUPD={checked:false,newer:null};
function checkUpdate(){
  if(!APP_META.updateURL){toast('ℹ️ فحص التحديثات يحتاج استضافة المنصة على عنوان رسمي وتعبئة رابط versions.json — راجع دليل الإعداد. نسختك الحالية: '+APP_META.ver);return}
  fetch(APP_META.updateURL,{cache:'no-store'}).then(function(r){return r.json()}).then(function(j){
    XUPD.checked=true;
    if(j&&j.ver&&j.ver!==APP_META.ver){
      XUPD.newer=j;
      toast('🔄 توفر إصدار جديد: '+j.ver+' — ستجد تفاصيله في الصفحة الرئيسية');
      render();
    }else{XUPD.newer=null;toast('✅ أنت على أحدث إصدار ('+APP_META.ver+')')}
  }).catch(function(e){toast('❌ تعذر جلب معلومات التحديث — تحقق من الاتصال')});
}
function updBanner(){
  if(!XUPD.newer)return '';
  var j=XUPD.newer;
  return '<div class="upd-card glass-strong">🔄 <b>إصدار جديد متوفر: '+escAttr(j.ver||'')+'</b><p>'+escAttr(j.notes||'')+'</p><div class="btn-row">'+
   '<button class="btn btn-primary" onclick="applyUpdate()">تحديث الآن</button>'+
   (j.force?'':'<button class="btn" onclick="XUPD.newer=null;render()">لاحقًا</button>')+'</div></div>';
}
function applyUpdate(){
  if(!APP_META.updateURL){toast('ℹ️ يتطلب الاستضافة أولًا');return}
  if(typeof location!=='undefined'&&location.reload)location.reload();
}

/* ---------------- 15.14 لوحة الإدارة (إدارة المنصة) ---------------- */
var ADM={q:'',users:null,loaded:false,err:''};
function isAdmin(){return USER.session&&USER.profile&&USER.profile.role==='admin'}
function renderAdminPage(){
  if(!USER.session){return '<div class="auth-wrap fade-in"><div class="auth-card glass-strong"><h3>🛡️ لوحة الإدارة</h3><p class="auth-note">سجّل دخولك بحساب الإدارة للوصول.</p><button class="btn btn-primary btn-block" onclick="navigate(\'auth\')">تسجيل الدخول</button></div></div>'}
  if(!isAdmin()){return '<div class="auth-wrap fade-in"><div class="auth-card glass-strong"><h3>🛡️ لوحة الإدارة</h3><p class="auth-note">هذه الصفحة مخصصة لإدارة مؤسسة X.HAK فقط. الدخول محكوم بدور المدير في الخادم (role=admin) وسياسات RLS — ورفض الوصول هنا لا يعتمد على إخفاء الرابط.</p><button class="btn btn-block" onclick="navigate(\'home\')">العودة للرئيسية</button></div></div>'}
  if(!SB.ready){return '<div class="auth-wrap fade-in"><div class="auth-card glass-strong"><h3>🛡️ لوحة الإدارة</h3><p class="auth-note">لوحة الإدارة تعمل بعد إعداد خدمة Supabase (المستخدمون والإعلانات والتقدم تُقرأ من قاعدة البيانات). راجع دليل الإعداد.</p></div></div>'}
  var h='<div class="fade-in set-wrap"><h2 class="sec15">🛡️ لوحة الإدارة</h2>';
  h+='<div id="adm-stats" class="h15-cards">'+((ADM.loaded&&ADM.users)?('<div class="h15-card glass-strong"><span class="h15-k">👥 الحسابات المسجلة</span><b class="adm-big">'+ADM.users.length+'</b></div><div class="h15-card glass-strong"><span class="h15-k">📅 آخر تسجيل</span><b class="adm-t">'+escAttr(((ADM.users[ADM.users.length-1]||{}).created_at||'').slice(0,10))+'</b></div>'):'<p class="set-note">⏳ جارٍ تحميل بيانات المستخدمين…</p>')+'</div>';
  h+=xSect('🔎 المستخدمون',
   '<div class="set-line"><input id="adm-q" class="xin" dir="ltr" placeholder="بحث بالبريد" value="'+escAttr(ADM.q)+'"><button class="btn btn-sm btn-primary" onclick="ADM.q=(document.getElementById(\'adm-q\')||{}).value||\'\';ADM.users=null;render();admLoad()">بحث</button></div>'+
   '<div id="adm-users" class="adm-tbl">'+admUsersHTML()+'</div>');
  h+=xSect('📣 نشر إعلان',
   '<input id="adm-nt" class="xin" placeholder="عنوان الإعلان">'+
   '<textarea id="adm-nb" class="xin" rows="3" placeholder="نص الإعلان (سيظهر في الصفحة الرئيسية لكل المستخدمين)"></textarea>'+
   '<button class="btn btn-primary" onclick="adPublish()">🚀 نشر الإعلان</button>');
  h+=xSect('🗂️ سجل الإصدارات',
   '<p class="set-note">الإصدار الحالي المنشور: <b>'+APP_META.ver+'</b> — تاريخ '+APP_META.date+'.</p>'+
   '<ul class="pv-stats">'+APP_META.changelog.map(function(c){return '<li>'+c+'</li>'}).join('')+'</ul>'+
   '<p class="set-note">نشر إصدار جديد = استضافة ملف الإصدار الجديد ثم تحديث versions.json — الخطوات في دليل الإعداد، وتُرسل الإشعارات من الخدمة الخلفية لا من المتصفح.</p>');
  h+='</div>';
  if(!ADM.loaded)admLoad();
  return h;
}
function admUsersHTML(){
  if(ADM.err)return '<p class="f-err">'+ADM.err+'</p>';
  if(!ADM.users)return '<p class="set-note">⏳ جارٍ التحميل…</p>';
  if(!ADM.users.length)return '<p class="set-note">لا نتائج.</p>';
  var h='<div class="adm-row adm-hd"><span>البريد</span><span>الاسم</span><span>الشعبة</span><span>التقدم</span><span>الحالة</span></div>';
  for(var i=0;i<ADM.users.length;i++){
    var u=ADM.users[i];
    h+='<div class="adm-row"><span dir="ltr">'+escAttr(u.email||'')+'</span><span>'+escAttr((u.first_name||'')+' '+(u.last_name||''))+'</span><span>'+escAttr(u.branch||'')+'</span><span>'+(u.pct!=null?u.pct+'%':'—')+'</span><span>'+(u.role==='admin'?'مدير':'طالب')+'</span></div>';
  }
  return h;
}
function admLoad(){
  if(!SB.ready||!isAdmin())return;
  var q=ADM.q||'';
  var req=SB.client.from('profiles').select('*').order('created_at',{ascending:true}).limit(200);
  if(q)req=req.ilike('email','%'+q+'%');
  req.then(function(r){
    if(r.error){ADM.err='تعذر قراءة المستخدمين: '+(r.error.message||'');ADM.users=[];render();return}
    ADM.users=r.data||[];ADM.loaded=true;
    SB.client.from('progress').select('user_id,data').then(function(pr){
      var map={};(pr.data||[]).forEach(function(row){map[row.user_id]=row.data||{}});
      ADM.users.forEach(function(u){var d=map[u.id]||{};var done=Object.keys(d.done||{}).length;u.pct=Math.round(100*done/(CH_MATH.length+CH_PHYS.length))});
      render();
    }).catch(function(){render()});
  }).catch(function(e){ADM.err='انقطع الاتصال';render()});
}
function adPublish(){
  var t=(gid('adm-nt')||{}).value||'',b=(gid('adm-nb')||{}).value||'';
  if(!t.trim()||!b.trim()){toast('✍️ اكتب عنوان الإعلان ونصه');return}
  SB.client.from('announcements').insert({title:t,body:b,published:true}).then(function(r){
    if(r.error){toast('❌ تعذر النشر: '+(r.error.message||''));return}
    XNEWS.loaded=false;XNEWS.items=null;
    toast('✅ نُشر الإعلان — سيظهر لجميع المستخدمين');
    render();
  }).catch(function(e){toast('❌ انقطع الاتصال')});
}

/* ---------------- 15.15 سياسة الخصوصية والشروط وعن المنصة ---------------- */
function xModal(title,html){
  var old=gid('xmodal');if(old)old.remove();
  var d=document.createElement('div');d.id='xmodal';d.className='xmodal';
  d.innerHTML='<div class="xmodal-bg" onclick="xCloseModal()"></div><div class="xmodal-card glass-strong"><h3>'+title+'</h3><div class="xmodal-body">'+html+'</div><button class="btn btn-primary btn-block" onclick="xCloseModal()">فهمت</button></div>';
  document.body.appendChild(d);
}
function xCloseModal(){
  var d=gid('xmodal');
  if(d){
    try{
      var c=d.querySelector('.xmodal-card');
      if(c){c.style.transition='transform .26s cubic-bezier(.4,.1,.9,.4),opacity .26s ease';c.style.transform='translateY(-24px) scale(.7)';c.style.opacity='0'}
      d.style.transition='opacity .26s ease';d.style.opacity='0';
      setTimeout(function(){if(d&&d.parentNode){d.parentNode.removeChild(d)}},280);
    }catch(e){if(d)d.remove()}
  }
}
function xShowDoc(which){
  if(which==='privacy'){
    xModal('🔒 سياسة الخصوصية',
    '<p>نجمع الحد الأدنى اللازم لتشغيل حسابك:</p>'+
    '<ul><li><b>بيانات الحساب:</b> البريد الإلكتروني (مع تحقق منه)، الاسم واللقب، السنة الدراسية والشعبة، وسنة الميلاد والصورة الشخصية إن أدخلتها طوعًا.</li>'+
    '<li><b>بيانات التقدم:</b> الدروس التي بدأتها وأكملتها، نتائج الاختبارات، العناصر المحفوظة للمراجعة، وإعداداتك.</li></ul>'+
    '<p><b>لماذا؟</b> لربط تقدمك بحسابك حتى تجده من أي جهاز، ولعرض إحصاءاتك لك أنت فقط.</p>'+
    '<p><b>إشعار المؤسسة:</b> عند إكمال تسجيل جديد تصل إلى مؤسسة X.HAK رسالة تعريفية تتضمن تاريخ التسجيل والاسم والمعلومات الدراسية — <u>ولا تشمل أبدًا كلمات المرور أو رموز التحقق</u>.</p>'+
    '<p><b>حقوقك:</b> يمكنك تعديل بياناتك وتغيير بريدك وطلب حذف حسابك وبياناتك من صفحة ملفك، وننفذ الحذف وفق هذه السياسة. لا نشارك بياناتك مع أي طرف ثالث.</p>');
  }else if(which==='terms'){
    xModal('📜 شروط الاستخدام',
    '<ul><li>المنصة مخصصة للدعم الدراسي لتلاميذ الطورين المتوسط والثانوي (الجزائر)، والمحتوى يقدم كما هو لخدمة التلميذ.</li>'+
    '<li>الحساب شخصي — لا تشارك كلمة مرورك مع أحد، وأنت مسؤول عن نشاط حسابك.</li>'+
    '<li>يُمنع إساءة الاستخدام: محاولات الاختراق، أو إغراق الخدمة برسائل آلية.</li>'+
    '<li>قد تُحدَّث المنصة وتُضاف ميزات، وستظهر لك إعلانات التحديث داخلها.</li>'+
    '<li>بقاء الحساب مرهون باستخدام سليم؛ ويُحذف بطلب صاحبه.</li></ul>');
  }else{
    xModal('ℹ️ عن منصة X',
    '<p><b>منصة X</b> — الإصدار '+APP_META.ver+' · آخر تحديث '+APP_META.lastUpdate+'</p>'+
    '<p>منصة تعليمية جزائرية مجانية للطورين المتوسط والثانوي بكل المواد والشعب: دروس وملخصات وقوانين وتمارين وفروض واختبارات تفاعلية، مع مكتبة ملفات PDF ومكتبة فيديو ومتابعة التقدم خطوة بخطوة.</p>'+
    '<p>تدير المنصة مؤسسة X.HAK — والدخول الأول بالرمز السري من البريد مع خيار «متابعة عبر جوجل».</p>'+
    '<p class="set-note">حالة الخدمات: المصادقة — '+sbStatus()+'.</p>');
  }
}

/* ---------------- 15.16 محرك v15: التوجيه والعرض والإقلاع ---------------- */
function parseHash(){
  var h=location.hash.replace(/^#\/?/,'');var p=h.split('/').filter(Boolean);
  ROUTE={page:'home',subject:null,chapter:null};
  var known=['home','subject','lesson','quiz','dash','profile','settings','admin','auth'];
  if(p.length){ROUTE.page=p[0];if(known.indexOf(ROUTE.page)<0)ROUTE.page='home';if(p[1])ROUTE.subject=p[1];if(p[2])ROUTE.chapter=p[2]}
  if(ROUTE.page==='lesson'||ROUTE.page==='quiz'){if(!ROUTE.subject||!findChapter(ROUTE.subject,ROUTE.chapter||'')){ROUTE.page='home'}}
}
function toggleTheme(){XCFG.theme=(STATE.theme==='light'?'dark':'light');saveXCFG();applyXCFG();render()}
function toggleFX(){XCFG.motion=true;XCFG.fxLevel=(XCFG.motion&&XCFG.fxLevel!=='off')?'off':'full';saveXCFG();applyXCFG();render();toast((XCFG.fxLevel==='off')?'💤 الوضع الهادئ مفعّل (أداء أسرع)':'✨ المؤثرات مفعّلة')}
function render(){
  parseHash();
  if(authScreenNeeded()){ROUTE={page:'auth',subject:null,chapter:null}}
  var app=document.getElementById('app');
  var body='';
  switch(ROUTE.page){
    case 'subject':body=renderSubject(ROUTE.subject||'math');break;
    case 'lesson':body=renderLesson(ROUTE.subject,ROUTE.chapter);break;
    case 'quiz':body=renderQuiz(ROUTE.subject,ROUTE.chapter);break;
    case 'dash':body=renderDash();break;
    case 'profile':body=renderProfilePage();break;
    case 'settings':body=renderSettingsPage();break;
    case 'admin':body=renderAdminPage();break;
    case 'auth':body=renderAuth();break;
    default:body=renderHome();
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
function boot(){
  sbInit();loadXCFG();
  applyTheme();initReadbar();applyXCFG();
  if(!location.hash)location.hash='#/home';
  parseHash();
  render();
  restoreSession();
  if(STATE.fx){try{initField()}catch(e){var c=document.getElementById('bg-canvas');if(c)c.style.display='none'}}
  document.addEventListener('touchstart',function(e){var t=e.target;if(t&&t.closest&&t.closest('.kp-vp'))kpTouchStart(e.touches[0].clientX)},{passive:true});
  document.addEventListener('touchend',function(e){if(typeof __ksw!=='undefined'&&__ksw!==null)kpTouchEnd(e.changedTouches[0].clientX)},{passive:true});
  window.addEventListener('load',function(){setTimeout(function(){KAT=(typeof renderMathInElement==='function');typesetApp()},600)});
  try{window.matchMedia('(prefers-color-scheme: light)').addEventListener('change',function(){if(XCFG.theme==='auto')applyXCFG()})}catch(e){}
}
/* التقط نسخ طبقة 15 هنا قبل أن ترفع طبقة 16 تعريفاتها وتحل محلها (إصلاح رفع الدوال داخل نفس الكتلة) */
var parseHash15=parseHash,navigate15=navigate,renderSettingsPage15=renderSettingsPage,checkUpdate15=checkUpdate,applyUpdate15=applyUpdate,boot15=boot;
