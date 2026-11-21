/* ===== الطبقة 64 - ما بعد نجاح التحقق + لوحة الإدارة بلا انهيار + معلومات التسجيل لبريد الإدارة =====
   التشخيص: (1) لوحة الإدارة كانت تنهار (SB.client فارغة) عند النشر - المكتبة لا تتحمل دائمًا.
   (2) مسار نجاح التحقق الاحتياطي كان يظهر رسالة (تم التحقق) ولا يغلق شاشة الرمز.
   (3) إشعار التسجيل لبريد الإدارة كان مفقودًا من مسار الخطوة 3 الجديد. */
try{
/* 64.ب بعد نجاح التحقق: إغلاق شاشة الرمز فورًا ثم الملف أو الخطوة 3 - يعمل بلا مكتبة */
x52AfterVerify=function(){
  var goStep3=function(){
    try{USER.profile=null}catch(eF){}
    try{AUTH.tab='profile';XAUTH18.step=2;XAUTH18.prefilled=false}catch(eG){}
    try{toast('✅ تم التحقق من بريدك — أكمل ملفك الشخصي (الخطوة 3 من 3)')}catch(eH){}
    try{navigate('auth')}catch(eI){try{render()}catch(eI2){}}
  };
  var goHome=function(){
    try{toast('✅ تم التحقق من بريدك — أهلًا بك!')}catch(eD){}
    try{navigate('home')}catch(eE){try{render()}catch(eE2){}}
  };
  try{
    if(SB&&SB.ready&&SB.client&&USER.session&&USER.session.user){
      try{loadUserProfile(true);return}catch(eX){}
    }
  }catch(eA){}
  try{
    var k=x52Keys();
    if(!k||!USER.session||!USER.session.user){goStep3();return}
    var uid=(USER.session.user&&USER.session.user.id)||'';
    var tk=(USER.session&&USER.session.access_token)||'';
    fetch(k.url+'/rest/v1/profiles?id=eq.'+encodeURIComponent(uid)+'&select=*',{headers:{'apikey':k.anon,'Authorization':'Bearer '+tk}}).then(function(r){return r.json()}).then(function(arr){
      if(arr&&arr.length&&!arr.error){
        var d=arr[0];
        try{USER.profile=d}catch(eC1){}
        try{AUTH.form={fn:d.first_name||'',ln:d.last_name||'',by:(d.birth_year||'')+'',level:d.level||'ثانوي',year:d.study_year||'',branch:d.branch||'',gender:d.gender||''}}catch(eC2){}
        try{XAUTH18.form={fn:d.first_name||'',ln:d.last_name||'',by:((d.birth_year||'')+''),year:d.study_year||'',branch:d.branch||'',gender:d.gender||''}}catch(eC3){}
        goHome();
      }else{goStep3()}
    }).catch(function(){goStep3()});
    return;
  }catch(eJ){}
  goStep3();
};
/* 64.ج الخطوة 3 تعمل دائمًا (REST بلا مكتبة) + إشعار التسجيل يصل بريد الإدارة */
var __x64FN=x18FormNext;
x18FormNext=function(){
  try{
    var hasSession=!!(USER.session&&USER.session.user&&USER.session.user.id);
    if(!hasSession){return __x64FN()}
    try{x18CollectForm()}catch(eC1){}
    var f=XAUTH18.form;
    XAUTH18.errs={};
    if(!f.fn.trim())XAUTH18.errs.fn='اكتب اسمك';
    if(!f.ln.trim())XAUTH18.errs.ln='اكتب لقبك';
    if(!f.year)XAUTH18.errs.year='اختر السنة الدراسية';
    if(!f.branch)XAUTH18.errs.branch='اختر الشعبة';
    XAUTH18.consent=!!((gid('x18-consent')||{}).checked);
    if(!XAUTH18.consent)XAUTH18.errs.consent='يلزم الموافقة على سياسة الخصوصية';
    if(XAUTH18.errs.fn||XAUTH18.errs.ln||XAUTH18.errs.year||XAUTH18.errs.branch||XAUTH18.errs.consent){try{xSound('error')}catch(eS1){}try{render()}catch(eS2){}return}
    var editing=!!(USER.session&&USER.profile);
    var u=USER.session.user;
    var row={id:u.id,email:(u.email||XAUTH18.email||''),first_name:f.fn.trim(),last_name:f.ln.trim(),
      birth_year:(f.by?parseInt(f.by,10):null),level:(f.level||'ثانوي'),study_year:f.year,branch:f.branch,
      gender:(f.gender||null),avatar_url:((USER.profile&&USER.profile.avatar_url)||''),role:'student'};
    AUTH.busy=true;try{render()}catch(eS3){}
    var k=x52Keys();
    var saveRow=function(){
      if(!k){return Promise.resolve(false)}
      return fetch(k.url+'/rest/v1/profiles?on_conflict=id',{method:'POST',headers:{'apikey':k.anon,'Authorization':'Bearer '+((USER.session&&USER.session.access_token)||k.anon),'Content-Type':'application/json','Prefer':'resolution=merge-duplicates'},body:JSON.stringify(row)}).then(function(r){return r.ok}).catch(function(){return false});
    };
    var notifyOwner=function(){
      try{
        var em=(u.email||XAUTH18.email||'');
        x19Send('تسجيل مستخدم جديد — '+f.fn.trim()+' '+f.ln.trim(),
          'الاسم: '+f.fn.trim()+' '+f.ln.trim()+' | البريد: '+em+' | المستوى: '+(f.level||'ثانوي')+' | السنة: '+(f.year||'')+' | الشعبة: '+(f.branch||'')+(f.gender?(' | الجنس: '+f.gender):''),
          em);
      }catch(eN1){}
    };
    saveRow().then(function(ok){
      AUTH.busy=false;
      try{stSet('x18_user',{email:(u.email||XAUTH18.email||''),profile:x18ProfileFromForm()})}catch(eS4){}
      if(ok){
        try{USER.profile=x18ProfileFromForm()}catch(eS5){}
        try{xSound('success')}catch(eS6){}
        try{toast('🎉 وصلت معلوماتك إلى حساب الإدارة — أهلًا بك في منصة X!')}catch(eS7){}
        if(!editing){notifyOwner()}
        try{navigate(editing?'profile':'home')}catch(eS8){}
      }else{
        try{toast('⚠️ تعذر الاتصال بالخادم الآن — معلوماتك محفوظة عندك وستُرسل إلى إدارة المنصة')}catch(eS10){}
        if(!editing){notifyOwner()}
        try{navigate(editing?'profile':'home')}catch(eS11){}
      }
    });
  }catch(eS12){try{return __x64FN()}catch(eS13){}}
};
/* 64.ا لوحة الإدارة بلا انهيار وتعمل عبر REST بلا مكتبة */
var __x64AL=admLoad;
admLoad=function(){
  try{
    if(SB&&SB.client&&SB.ready){return __x64AL()}
  }catch(eP1){}
  try{
    if(!isAdmin()){return}
    var k=x52Keys();
    if(!k){ADM.err='مفاتيح الاتصال غير متوفرة';ADM.users=[];ADM.loaded=true;try{render()}catch(eP2){}return}
    var tk=(USER.session&&USER.session.access_token)||k.anon;
    var q=ADM.q||'';
    var url=k.url+'/rest/v1/profiles?select=*&order=created_at.asc&limit=200'+(q?('&email=ilike.*'+encodeURIComponent(q)+'*'):'');
    fetch(url,{headers:{'apikey':k.anon,'Authorization':'Bearer '+tk}}).then(function(r){return r.json()}).then(function(arr){
      if(arr&&arr.error){
        ADM.err='تعذر قراءة المستخدمين: '+((arr.error.message||arr.error)||'');ADM.users=[];
      }else{
        try{ADM.users=(arr||[])}catch(eP3){ADM.users=[]}
        ADM.err='';
      }
      ADM.loaded=true;
      try{
        fetch(k.url+'/rest/v1/progress?select=user_id,data&limit=500',{headers:{'apikey':k.anon,'Authorization':'Bearer '+tk}}).then(function(r2){return r2.json()}).then(function(pr){
          try{
            var map={};
            var isArr=(pr&&typeof pr.length==='number');
            if(isArr){pr.forEach(function(row){map[row.user_id]=row.data||{}})}
            var tot=0;try{tot=(CH_MATH.length+CH_PHYS.length)}catch(eP4){tot=0}
            ADM.users.forEach(function(u2){var d2=map[u2.id]||{};var done=0;try{done=Object.keys(d2.done||{}).length}catch(eP5){}u2.pct=(tot?Math.round(100*done/tot):0)});
          }catch(eP6){}
          try{render()}catch(eP7){}
        }).catch(function(){try{render()}catch(eP8){}});
      }catch(eP9){}
      try{render()}catch(eP10){}
    }).catch(function(){ADM.err='انقطع الاتصال';ADM.users=[];ADM.loaded=true;try{render()}catch(eP11){}});
  }catch(eP12){}
};
var __x64AP=adPublish;
adPublish=function(){
  try{
    if(SB&&SB.client&&SB.ready){return __x64AP()}
  }catch(eQ1){}
  try{
    var t=(''+(((gid('adm-nt')||{}).value)||'')).trim();
    var b=(''+(((gid('adm-nb')||{}).value)||'')).trim();
    if(!t||!b){try{toast('✍️ اكتب عنوان الإعلان ونصه')}catch(eQ2){}return}
    var k=x52Keys();
    if(!k){try{toast('❌ مفاتيح الاتصال غير متوفرة')}catch(eQ3){}return}
    var tk=(USER.session&&USER.session.access_token)||k.anon;
    fetch(k.url+'/rest/v1/announcements',{method:'POST',headers:{'apikey':k.anon,'Authorization':'Bearer '+tk,'Content-Type':'application/json'},body:JSON.stringify({title:t,body:b,published:true})}).then(function(r){
      if(r.ok){
        try{XNEWS.loaded=false;XNEWS.items=null}catch(eQ4){}
        try{toast('✅ نُشر الإعلان — سيظهر لجميع المستخدمين')}catch(eQ5){}
        try{render()}catch(eQ6){}
      }else{
        r.json().then(function(j){try{toast('❌ تعذر النشر: '+((j&&(j.message||j.error))||('HTTP '+r.status)))}catch(eQ7){}}).catch(function(){try{toast('❌ تعذر النشر — تأكد من إنشاء جدول الإعلانات')}catch(eQ8){}});
      }
    }).catch(function(){try{toast('❌ انقطع الاتصال')}catch(eQ9){}});
  }catch(eQ10){}
};
APP_META.ver='64.0';
APP_META.notes='الإصدار 64 — بعد نجاح التحقق يغلق شاشة الرمز فورًا وينتقل إلى الخطوة 3 (أو الرئيسية إن كان ملفك مكتملاً) حتى بدون مكتبة الاتصال، لوحة الإدارة لم تعد تنهار وتعمل عبر REST مباشرة (قائمة المستخدمين ونشر الإعلانات)، ومعلومات كل تسجيل جديد تُرسل تلقائيًا إلى بريد إدارة المنصة مع احتفاظ احتياطي على جهاز الطالب.';
try{APP_META.lastUpdate='2026-11-04'}catch(eO){}
try{if(APP_META.changelog&&APP_META.changelog.unshift){APP_META.changelog.unshift({ver:'64.0',date:'2026-11-04',notes:'الانتقال التلقائي بعد نجاح التحقق + لوحة إدارة بلا انهيار + إشعار التسجيل لبريد الإدارة'})}}catch(eP){}
}catch(eR){}
