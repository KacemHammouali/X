'use strict';
/* ================================================================
   منصة X — طبقة الإصدار 18: الدخول بالبريد + الإصلاحات الشاملة
   - إزالة خدمة المصادقة والتسجيل الخارجية بالكامل (بلا كلمات مرور)
   - تدفق جديد: البريد ← المعلومات الشخصية ← إرسال عبر بريد المستخدم
     إلى بريد الإدارة ← دخول فوري إلى الصفحة الرئيسية
   - كل بيانات المستخدم محفوظة محليًا على جهازه
   - إصلاح الإرسال في قسم الرسائل والإبلاغ (mailto مباشر + نسخ احتياطي)
   - إصلاحات الإعدادات: إدارة حساب محلية، إصلاح مفتاحي المظهر والمؤثرات
   ================================================================ */

/* ---- 18.1 ثوابت وحالة الدخول الجديدة ---- */
var XOWNER_MAIL='kasembouhonali@gmail.com';
var XAUTH18={step:1,email:'',errs:{},consent:false,
  form:{fn:'',ln:'',by:'',year:'',branch:'',gender:'',wilaya:'',phone:''}};
function x18FErr(k){return (XAUTH18.errs&&XAUTH18.errs[k])?('<div class="f-err">'+XAUTH18.errs[k]+'</div>'):''}
function x18Mailto(subject,body){
  try{return 'mailto:'+XOWNER_MAIL+'?subject='+encodeURIComponent(subject)+'&body='+encodeURIComponent(body)}catch(e){return ''}
}
function x18SendMail(url){
  try{window.location.href=url}catch(e){}
  return url;
}
function x18StorageOK(){try{localStorage.setItem('__x18t','1');localStorage.removeItem('__x18t');return true}catch(e){return false}}
function x18ProfileFromForm(){
  var f=XAUTH18.form;
  return {email:XAUTH18.email,first_name:f.fn,last_name:f.ln,
    birth_year:(f.by?parseInt(f.by,10):null),level:'ثانوي',study_year:f.year,branch:f.branch,
    gender:(f.gender||null),wilaya:(f.wilaya||''),phone:(f.phone||''),
    avatar_url:((USER.profile&&USER.profile.avatar_url)||''),role:'student',
    created_at:((USER.profile&&USER.profile.created_at)||new Date().toISOString())};
}
function x18SaveUser(profile){
  var em=XAUTH18.email||(profile&&profile.email)||((USER.session&&USER.session.user&&USER.session.user.email)||'');
  stSet('x18_user',{email:em,profile:profile});
  USER.session={user:{email:em}};
  USER.profile=profile;
}
function x18Restore(){
  var u=stGet('x18_user',null);
  if(u&&u.email&&u.profile){
    USER.session={user:{email:u.email}};USER.profile=u.profile;
    loadXCFG();applyXCFG();
    if(ROUTE.page==='auth'){ROUTE={page:'home',subject:null,chapter:null};try{render()}catch(e){}}
  }
}
function x18Prefill(){
  var p=USER.profile||{};
  XAUTH18.email=(USER.session&&USER.session.user&&USER.session.user.email)||'';
  XAUTH18.step=2;XAUTH18.errs={};XAUTH18.consent=true;
  XAUTH18.form={fn:p.first_name||'',ln:p.last_name||'',by:((p.birth_year||'')+''),
    year:p.study_year||'',branch:p.branch||'',gender:p.gender||'',wilaya:p.wilaya||'',phone:p.phone||''};
}
function x18RegBody(f,em){
  return 'تسجيل مستخدم جديد في منصة X\n\n'+
   'البريد الإلكتروني: '+em+'\n'+
   'الاسم: '+f.fn+' '+f.ln+'\n'+
   'سنة الميلاد: '+(f.by||'غير محددة')+'\n'+
   'الجنس: '+(f.gender==='m'?'ذكر':(f.gender==='f'?'أنثى':'غير محدد'))+'\n'+
   'المستوى: ثانوي — '+f.year+' — شعبة '+f.branch+'\n'+
   'الولاية: '+(f.wilaya||'غير محددة')+'\n'+
   'الهاتف: '+(f.phone||'غير محدد')+'\n'+
   'تاريخ التسجيل: '+new Date().toISOString().slice(0,16).replace('T',' ')+'\n'+
   'الإصدار: '+APP_META.ver+'\n— أُرسلت تلقائيًا من منصة X';
}

/* ---- 18.2 صفحة الدخول الجديدة (خطوتان فقط) ---- */
function renderAuth18(){
  if(USER.session&&USER.profile&&XAUTH18.prefilled!==true){x18Prefill();XAUTH18.prefilled=true}
  var inn=(XAUTH18.step===1)?x18EmailCard():x18FormCard();
  return authWrap(inn,XAUTH18.step,2);
}
function x18EmailCard(){
  return '<h3>أهلًا بك في منصة X 👋</h3>'+
  '<p class="auth-note">سجّل ببريدك الإلكتروني فقط — بلا كلمة مرور. بعد إكمال معلوماتك تدخل مباشرة.</p>'+
  '<label class="fld"><span>البريد الإلكتروني</span><input id="a-email" type="email" dir="ltr" value="'+escAttr(XAUTH18.email)+'" placeholder="you@example.com">'+x18FErr('email')+'</label>'+
  x18FErr('top')+
  '<button class="btn btn-primary btn-block" onclick="x18EmailNext()">متابعة →</button>'+
  '<p class="auth-alt"><a onclick="xGoGuest()">أو تابع كزائر الآن</a></p>';
}
function x18EmailNext(){
  XAUTH18.email=((gid('a-email')||{}).value||'').trim();
  XAUTH18.errs={};
  if(!validEmail(XAUTH18.email)){XAUTH18.errs={email:'اكتب بريدًا إلكترونيًا صالحًا'};xSound('error');render();return}
  XAUTH18.step=2;render();
}
function x18FormCard(){
  var f=XAUTH18.form,editing=!!(USER.session&&USER.profile);
  return '<h3>'+(editing?'تعديل معلوماتك':'معلوماتك الشخصية')+'</h3>'+
  '<p class="auth-note">'+(editing?'عدّل ما تريد ثم احفظ.':'أكمل بياناتك ثم ادخل مباشرة.')+'</p>'+
  '<div class="p-grid">'+
  '<label class="fld"><span>الاسم *</span><input id="p-fn" value="'+escAttr(f.fn)+'" placeholder="مثال: كريم">'+x18FErr('fn')+'</label>'+
  '<label class="fld"><span>اللقب *</span><input id="p-ln" value="'+escAttr(f.ln)+'" placeholder="مثال: بن يوسف">'+x18FErr('ln')+'</label>'+
  '</div>'+
  '<div class="p-grid">'+
  '<label class="fld"><span>سنة الميلاد (اختياري)</span><input id="p-by" type="number" min="1995" max="2015" value="'+escAttr(f.by)+'"></label>'+
  '<label class="fld"><span>الجنس (اختياري)</span><select id="p-gender"><option value=""'+(f.gender?'':' selected')+'>بدون تحديد</option><option value="m"'+(f.gender==='m'?' selected':'')+'>ذكر</option><option value="f"'+(f.gender==='f'?' selected':'')+'>أنثى</option></select></label>'+
  '</div>'+
  '<div class="p-grid">'+
  '<label class="fld"><span>السنة الدراسية *</span><select id="p-year" onchange="x18CollectForm();XAUTH18.form.year=this.value;XAUTH18.form.branch=\'\';render()">'+yearOptions(f.year)+'</select>'+x18FErr('year')+'</label>'+
  '<label class="fld"><span>الشعبة *</span><select id="p-branch">'+branchOptions(f.year,f.branch)+'</select>'+x18FErr('branch')+'</label>'+
  '</div>'+
  '<div class="p-grid">'+
  '<label class="fld"><span>الولاية (اختياري)</span><input id="p-wilaya" value="'+escAttr(f.wilaya)+'" placeholder="مثال: الجزائر"></label>'+
  '<label class="fld"><span>رقم الهاتف (اختياري)</span><input id="p-phone" dir="ltr" value="'+escAttr(f.phone)+'" placeholder="05..."></label>'+
  '</div>'+
  '<label class="chk"><input type="checkbox" id="x18-consent" '+(XAUTH18.consent?'checked':'')+' onchange="XAUTH18.consent=this.checked"> أوافق على <a onclick="xShowDoc(\'privacy\')">سياسة الخصوصية</a> *</label>'+
  x18FErr('consent')+
  x18FErr('top')+
  '<div class="btn-row">'+
  '<button class="btn" onclick="XAUTH18.step=1;render()">← رجوع</button>'+
  '<button class="btn btn-primary" onclick="x18FormNext()">'+(editing?'💾 حفظ التعديلات':'متابعة')+'</button>'+
  '</div>';
}
function x18CollectForm(){
  var f=XAUTH18.form;
  f.fn=(gid('p-fn')||{}).value||f.fn;
  f.ln=(gid('p-ln')||{}).value||f.ln;
  f.by=(gid('p-by')||{}).value||f.by;
  f.year=(gid('p-year')||{}).value||f.year;
  f.branch=(gid('p-branch')||{}).value||f.branch;
  f.gender=(gid('p-gender')||{}).value||f.gender;
  f.wilaya=(gid('p-wilaya')||{}).value||f.wilaya;
  f.phone=(gid('p-phone')||{}).value||f.phone;
  return f;
}
function x18FormNext(){
  x18CollectForm();
  var f=XAUTH18.form,editing=!!(USER.session&&USER.profile);
  XAUTH18.errs={};
  if(!f.fn.trim())XAUTH18.errs.fn='اكتب اسمك';
  if(!f.ln.trim())XAUTH18.errs.ln='اكتب لقبك';
  if(!f.year)XAUTH18.errs.year='اختر السنة الدراسية';
  if(!f.branch)XAUTH18.errs.branch='اختر الشعبة';
  XAUTH18.consent=!!((gid('x18-consent')||{}).checked);
  if(!XAUTH18.consent)XAUTH18.errs.consent='يلزم الموافقة على سياسة الخصوصية';
  if(XAUTH18.errs.fn||XAUTH18.errs.ln||XAUTH18.errs.year||XAUTH18.errs.branch||XAUTH18.errs.consent){xSound('error');render();return}
  if(editing){
    var p=x18ProfileFromForm();
    x18SaveUser(p);
    xSound('success');toast('✅ تم حفظ تعديلاتك');
    navigate('profile');
    return;
  }
  var em=XAUTH18.email;
  var url=x18Mailto('تسجيل مستخدم جديد — '+f.fn+' '+f.ln,x18RegBody(f,em));
  x18SaveUser(x18ProfileFromForm());
  XAUTH18.prefilled=true;
  if(url){x18SendMail(url)}
  xSound('success');
  toast('📩 فُتح تطبيق البريد لديك لإرسال بياناتك إلى إدارة المنصة — أكمل الإرسال من هناك، وأهلًا بك في منصة X!');
  navigate('home');
}
function x18Resend(){
  var p=USER.profile;if(!p)return;
  var f={fn:p.first_name||'',ln:p.last_name||'',by:((p.birth_year||'')+''),year:p.study_year||'',branch:p.branch||'',gender:p.gender||'',wilaya:p.wilaya||'',phone:p.phone||''};
  var em=(USER.session&&USER.session.user&&USER.session.user.email)||p.email||'';
  var url=x18Mailto('تسجيل مستخدم — '+f.fn+' '+f.ln,x18RegBody(f,em));
  if(url){x18SendMail(url)}
  toast('📩 فُتح تطبيق البريد لإرسال بياناتك مجددًا — أكمل الإرسال من هناك');
}

/* ---- 18.3 الحساب المحلي: خروج/حذف/بريد/صورة ---- */
function logoutUser(){
  setGuest(false);
  try{localStorage.removeItem('x18_user')}catch(e){stSet('x18_user',null)}
  USER.session=null;USER.profile=null;
  XAUTH18={step:1,email:'',errs:{},consent:false,prefilled:false,form:{fn:'',ln:'',by:'',year:'',branch:'',gender:'',wilaya:'',phone:''}};
  toast('👋 سجّلت الخروج — بياناتك بقيت محفوظة على هذا الجهاز ويمكنك العودة ببريدك');
  navigate('auth');
}
function xChangeEmail(){
  var cur=(USER.session&&USER.session.user&&USER.session.user.email)||'';
  var ne=window.prompt('بريدك الحالي: '+cur+'\nاكتب بريدك الجديد:',cur);
  if(ne===null)return;
  ne=(''+ne).trim();
  if(!ne){toast('❌ اكتب بريدًا صالحًا');return}
  if(!validEmail(ne)){toast('❌ بريد غير صالح');return}
  XAUTH18.email=ne;
  x18SaveUser(USER.profile);
  toast('✅ تم تحديث بريدك — استعمله للدخول في المرة القادمة');
  render();
}
function xDeleteAccount(){
  if(!window.confirm('سيُحذف حسابك وبياناتك الشخصية من هذا الجهاز نهائيًا. هل أنت متأكد؟'))return;
  try{localStorage.removeItem('x18_user')}catch(e){stSet('x18_user',null)}
  USER.session=null;USER.profile=null;
  toast('🗑️ حُذف حسابك وبياناتك من هذا الجهاز');
  navigate('home');
}
function xPickAvatar(){
  var inp=null;
  try{inp=document.createElement('input');inp.type='file';inp.accept='image/*'}catch(e){toast('ℹ️ تغيير الصورة يحتاج متصفحًا حقيقيًا');return}
  inp.onchange=function(){
    var f=(inp.files&&inp.files[0]);if(!f)return;
    try{
      var rd=new FileReader();
      rd.onload=function(){
        try{
          var img=new Image();
          img.onload=function(){
            try{
              var cv=document.createElement('canvas');cv.width=96;cv.height=96;
              var g=cv.getContext('2d');if(!g){toast('❌ تعذرت معالجة الصورة');return}
              var iw=img.width||96,ih=img.height||96,m=Math.min(iw,ih);
              g.drawImage(img,(iw-m)/2,(ih-m)/2,m,m,0,0,96,96);
              var d=cv.toDataURL('image/png');
              if(d&&d.indexOf('data:image')===0){
                USER.profile.avatar_url=d;x18SaveUser(USER.profile);
                toast('✅ تم تحديث صورتك');render();
              }else{toast('❌ تعذرت معالجة الصورة')}
            }catch(e){toast('❌ تعذرت معالجة الصورة')}
          };
          img.src=rd.result;
        }catch(e){toast('❌ تعذرت معالجة الصورة')}
      };
      rd.readAsDataURL(f);
    }catch(e){toast('❌ تعذر قراءة الصورة')}
  };
  try{inp.click()}catch(e){}
}

/* ---- 18.4 إصلاح الإرسال في قسم الرسائل والإبلاغ (mailto مباشر) ---- */
function sendMsg(){
  var e=gid('msg-mail'),t=gid('msg-type'),b=gid('msg-body');
  var em=((e&&e.value)||'').trim(),ty=(t&&t.value)||'رسالة',bd=((b&&b.value)||'').trim();
  if(!em||em.indexOf('@')<1){toast('✍️ اكتب بريدك الإلكتروني أولًا','error');return}
  if(bd.length<5){toast('✍️ اكتب رسالتك أولًا','error');return}
  var body=bd+'\n\n— نوع الرسالة: '+ty+'\n— من: '+em+'\n— أُرسلت من منصة X الإصدار '+APP_META.ver;
  var url=x18Mailto('[منصة X] '+ty,body);
  if(url){x18SendMail(url);toast('📩 فُتح تطبيق البريد لديك برسالة جاهزة إلى بريد المنصة — أكمل الإرسال من هناك','success')}
  else{toast('⚠️ تعذر تجهيز الرسالة — استخدم زر «نسخ الرسالة»','error')}
}
function xCopyMsg(){
  var e=gid('msg-mail'),t=gid('msg-type'),b=gid('msg-body');
  var em=((e&&e.value)||'').trim(),ty=(t&&t.value)||'رسالة',bd=((b&&b.value)||'').trim();
  var txt='إلى: '+XOWNER_MAIL+'\nالموضوع: [منصة X] '+ty+'\n\n'+bd+'\n\n— من: '+em;
  var fb=function(){try{window.prompt('انسخ الرسالة ثم أرسلها من تطبيق بريدك:',txt)}catch(e2){}};
  try{
    if(navigator.clipboard&&navigator.clipboard.writeText){
      navigator.clipboard.writeText(txt).then(function(){toast('✅ نُسخت الرسالة — الصقها في تطبيق بريدك وأرسلها إلى بريد المنصة')},fb);
    }else{fb()}
  }catch(err){fb()}
}

/* ---- 18.5 إصلاح مفتاحي المظهر والمؤثرات (أخطاء الإعدادات) ---- */
function toggleTheme(){
  XCFG.theme=((STATE.theme==='light')?'dark':'light');
  saveXCFG();applyXCFG();render();
}
function toggleFX(){
  XCFG.motion=true;
  XCFG.fxLevel=(XCFG.fxLevel==='off')?'full':'off';
  saveXCFG();applyXCFG();render();
  toast((XCFG.fxLevel==='off')?'💤 الوضع الهادئ مفعّل (أداء أسرع)':'✨ المؤثرات مفعّلة');
}

/* ---- 18.6 الإعلان الافتراضي للإصدار 18 ---- */
function fallbackNews18(){
  return [{title:'الإصدار 19 — الإرسال الصامت والواجهة المبسطة',
    body:'التسجيل والإبلاغ يُرسلان الآن مباشرة من داخل المنصة دون فتح تطبيق البريد، والصفحة الرئيسية مبسطة بالشعار والاسم والموجز، وانتقال تلقائي بين أسئلة الاختبار.',
    date:APP_META.date}];
}

/* ---- 18.7 سياسة الخصوصية والشروط وعن المنصة (النموذج المحلي) ---- */
function xShowDoc(which){
  if(which==='privacy'){
    xModal('🔒 سياسة الخصوصية',
    '<p>نحفظ الحد الأدنى اللازم لتشغيل حسابك:</p>'+
    '<ul><li><b>بياناتك:</b> البريد الإلكتروني، الاسم واللقب، السنة الدراسية والشعبة، وما تدخله طوعًا (سنة الميلاد، الجنس، الولاية، الهاتف، الصورة الشخصية).</li>'+
    '<li><b>أين تُحفظ؟</b> على جهازك أنت داخل مساحة تخزين المتصفح — لا نحتفظ بها في أي خدمة خارجية، ولا نجمع كلمات مرور إطلاقًا.</li>'+
    '<li><b>إرسال التسجيل:</b> عند إنشاء حسابك تُرسل بيانات التسجيل الدراسية إلى بريد مؤسسة X.HAK المشغّلة للمنصة. لا تُرسل البيانات إلا بعد موافقتك على السياسة وإكمال التسجيل — <u>ولا تشمل أبدًا كلمات المرور أو رموز التحقق</u>.</li>'+
    '<li><b>بيانات التقدم:</b> الدروس والاختبارات والمحفوظات تُحفظ على جهازك وتظهر لك أنت فقط.</li></ul>'+
    '<p><b>حقوقك:</b> عدّل بياناتك أو احذف حسابك وبياناته من جهازك في أي وقت من صفحة ملفك.</p>');
  }else if(which==='terms'){
    xModal('📜 شروط الاستخدام',
    '<ul><li>المنصة مخصصة للدعم الدراسي لتلاميذ الطورين المتوسط والثانوي (الجزائر)، والمحتوى يقدم كما هو لخدمة التلميذ.</li>'+
    '<li>بياناتك الشخصية على جهازك أمانتك — لا تترك جهازك مفتوحًا على حسابك في يد أحد.</li>'+
    '<li>يُمنع إساءة الاستخدام: محاولات الاختراق أو إغراق بريد الإدارة برسائل آلية.</li>'+
    '<li><b>الملكية الفكرية:</b> منصة X ومحتواها وهييتها البرمجية ملك لمؤسسة X.HAK — يُمنع نسخ المنصة أو محاكاتها أو إعادة نشر محتواها تحت أي اسم آخر بدون إذن كتابي من المؤسسة.</li>'+
    '<li>قد تُحدَّث المنصة وتُضاف ميزات، وستظهر لك إعلانات التحديث داخلها.</li></ul>');
  }else{
    xModal('ℹ️ عن منصة X',
    '<p><b>منصة X</b> — الإصدار '+APP_META.ver+' · آخر تحديث '+APP_META.lastUpdate+'</p>'+
    '<p>منصة تعليمية جزائرية مجانية للطورين المتوسط والثانوي بكل المواد والشعب: دروس وملخصات وقوانين وتمارين وفروض واختبارات تفاعلية، مع مكتبة ملفات PDF ومكتبة فيديو ومتابعة التقدم خطوة بخطوة.</p>'+
    '<p>تديرها مؤسسة X.HAK، وتعمل كتطبيق (PWA) يثبّت على هاتفك ويعمل بلا إنترنت، مع إشعارات تصل حتى والتطبيق مغلق.</p>'+
    '<p><b>عن المؤسسة:</b> X.HAK — مؤسسة جزائرية مستقلة أسسها المبرمج <b dir="ltr">HAMMOUALI Kacem</b>، تعمل في تطوير الحلول البرمجية والتطبيقات التعليمية الرقمية، وتقود مشروع «منصة X التعليمية» لخدمة تلاميذ الطورين المتوسط والثانوي في الجزائر بمحتوى مجاني بالكامل.</p>'+
    '<p class="set-note">حالة الخدمات: التخزين المحلي '+(x18StorageOK()?'جاهز ✅':'غير متاح ⚠️')+' — البيانات محفوظة على جهازك.</p>');
  }
}

/* ---- 18.8 صفحة الملف الشخصي (محلية بالكامل) ---- */
function renderProfilePage18(){
  if(!USER.session){
    return '<div class="auth-wrap fade-in"><div class="auth-card glass-strong">'+
    '<div class="pv-center">'+avatarHTML(72)+'</div>'+
    '<h3>هذه صفحتك الشخصية</h3>'+
    '<p class="auth-note">'+(isGuest()?'أنت في وضع الزائر — سجّل ببريدك لتظهر بياناتك هنا.':'سجّل ببريدك لتظهر بياناتك هنا.')+'</p>'+
    '<button class="btn btn-primary btn-block" onclick="navigate(\'auth\')">🔑 الدخول بالبريد الإلكتروني</button>'+
    '</div></div>';
  }
  var p=USER.profile||{first_name:'',last_name:'',study_year:'',branch:''};
  var st=xStats();
  var h='<div class="fade-in pv15">';
  h+='<div class="pv-head glass-strong">'+
   avatarHTML(84,'av-pv')+
   '<div class="pv-id"><h2>'+escAttr((p.first_name||'')+' '+(p.last_name||''))+'</h2>'+
   '<p dir="ltr">'+escAttr((USER.session.user&&USER.session.user.email)||'')+'</p>'+
   '<p>'+escAttr(p.study_year||'')+(p.branch?' — شعبة '+escAttr(p.branch):'')+'</p>'+
   (p.wilaya?'<p>📍 '+escAttr(p.wilaya)+'</p>':'')+
   (p.created_at?'<p class="pv-date">📅 عضو منذ '+escAttr((p.created_at||'').slice(0,10))+'</p>':'')+'</div>'+
   '</div>';
  h+='<div class="h15-cards">';
  h+='<div class="h15-card glass-strong"><span class="h15-k">📊 تقدمي الدراسي</span><div class="pbar"><div class="pfill" style="width:'+st.pct+'%"></div></div>'+
   '<ul class="pv-stats"><li>اكتمل: <b>'+st.done+'/'+st.total+'</b> درسًا</li><li>بدأته: <b>'+st.started+'</b></li><li>اختبارات أجريتها: <b>'+st.quizAtt+'</b></li><li>نتائج كاملة: <b>'+st.quizPerfect+'</b></li></ul>'+
   '<button class="btn" onclick="navigate(\'dash\')">📈 تقرير التقدم الكامل</button></div>';
  h+='<div class="h15-card glass-strong"><span class="h15-k">🔖 مراجعتي</span><p class="auth-note">'+st.saved+' عنصرًا محفوظًا للمراجعة</p><button class="btn" onclick="navigate(\'dash\')">عرض المحفوظات والقوانين</button></div>';
  h+='</div>';
  h+='<div class="pv-actions glass">'+
   '<button class="btn" onclick="navigate(\'auth\')">✏️ تعديل المعلومات</button>'+
   '<button class="btn" onclick="xPickAvatar()">🖼️ تغيير الصورة</button>'+
   '<button class="btn" onclick="xChangeEmail()">📧 تغيير البريد</button>'+
   '<button class="btn" onclick="x18Resend()">📨 إعادة إرسال بيانات التسجيل</button>'+
   '<button class="btn btn-danger-ghost" onclick="logoutUser()">🚪 تسجيل الخروج</button>'+
   '<button class="btn btn-danger-ghost" onclick="xDeleteAccount()">🗑️ حذف الحساب</button>'+
   '</div>';
  h+='</div>';
  return h;
}

/* ---- 18.9 لوحة الإدارة المحلية (بلا قاعدة بيانات) ---- */
function renderAdminPage18(){
  if(!USER.session){
    return '<div class="auth-wrap fade-in"><div class="auth-card glass-strong"><h3>🛡️ لوحة الإدارة</h3><p class="auth-note">سجّل ببريدك للوصول.</p><button class="btn btn-primary btn-block" onclick="navigate(\'auth\')">🔑 الدخول بالبريد الإلكتروني</button></div></div>';
  }
  var st=xStats();
  var banks=0;try{banks=Object.keys(QUIZZES||{}).length}catch(e){}
  var storageTxt='غير متاح';
  try{var used=0;for(var kk in localStorage){if(localStorage.hasOwnProperty(kk))used+=((localStorage.getItem(kk)||'')+'').length}storageTxt=used+' حرفًا'}catch(e){}
  var katOK=false;try{katOK=(typeof renderMathInElement==='function')}catch(e){}
  var h='<div class="fade-in set-wrap"><h2 class="sec15">🛡️ لوحة الإدارة — معلومات محلية</h2>';
  h+=xSect('📊 حالة المنصة',
   '<div class="set-line"><span>الإصدار الحالي</span><b>'+APP_META.ver+' ('+APP_META.date+')</b></div>'+
   '<div class="set-line"><span>المحاور والوحدات</span><b>'+(CH_MATH.length+CH_PHYS.length)+' — '+CH_MATH.length+' رياضيات + '+CH_PHYS.length+' فيزياء</b></div>'+
   '<div class="set-line"><span>بنوك الاختبارات</span><b>'+banks+' بنكًا</b></div>'+
   '<div class="set-line"><span>تقدمك أنت</span><b>'+st.done+'/'+st.total+' درسًا ('+st.pct+'%)</b></div>'+
   '<div class="set-line"><span>التخزين المحلي</span><b>'+storageTxt+'</b></div>'+
   '<div class="set-line"><span>خدمة العمل (PWA)</span><b>'+((typeof XSW!=='undefined'&&XSW.ok)?'نشطة ✅':'غير مسجلة (تحتاج استضافة HTTPS)')+'</b></div>'+
   '<div class="set-line"><span>KaTeX (المعادلات)</span><b>'+(katOK?'جاهز ✅':'غير محمّل (يتطلب اتصالًا)')+'</b></div>');
  h+=xSect('📣 إعلان المنصة الحالي',
   '<p class="set-note">إعلان المنصة: «'+escAttr(((fallbackNews18()[0]||{}).title||''))+'» — منذ الإصدار 20 الصفحة الرئيسية غنية (ترحيب وبطاقتا المواد والتقدم الحقيقي) ولا تعرض الإعلانات.</p>');
  h+=xSect('🧰 أدوات',
   '<div class="btn-col">'+
   '<button class="btn" onclick="checkUpdate()">🔄 التحقق من التحديثات</button>'+
   '<button class="btn" onclick="xShowDoc(\'about\')">ℹ️ عن المنصة</button>'+
   '</div>'+
   '<p class="set-note">منصة X التعليمية — تعمل بلا إنترنت وبياناتك محفوظة على جهازك.</p>');
  h+='</div>';
  return h;
}

/* ---- 18.10 الصفحة الرئيسية v18 ---- */
function renderHome18(){
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
   '<div style="margin:10px 0 0"><span class="ver-badge">الإصدار 18 — الدخول بالبريد والإصلاحات الشاملة</span></div>'+
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
     '<p class="x17-mute">تقدمك محفوظ على هذا الجهاز. سجّل ببريدك ليعود تقدمك معك من أي جهاز.</p></div>'+
     '<button class="btn btn-sm btn-primary" onclick="navigate(\'auth\')">الدخول بالبريد</button></div>';
  }
  /* بطاقات المادتين */
  html+='<div class="section-header"><h2>'+xi('grid',20)+' المواد الدراسية</h2><p>محاور ووحدات كاملة مع الدروس والتمارين والاختبارات.</p></div>'+
   '<div class="cards-grid">'+x17SubjCard('math')+x17SubjCard('phys')+'</div>';
  /* متابعة التعلم — من بيانات فعلية فقط */
  var doneIds=Object.keys(STATE.done);
  var lastId=doneIds.length?doneIds[doneIds.length-1]:null;
  html+='<div class="section-header"><h2>متابعة التعلم</h2><p>استأنف من حيث توقفت.</p></div>';
  var cont=null;
  if(lastId){
    var lsid=CH_MATH.some(function(c){return c.id===lastId})?'math':'phys';
    cont=findChapter(lsid,lastId);
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

/* ---- 18.11 الإقلاع ---- */
function boot(){
  boot17();
  x18Restore();
}
