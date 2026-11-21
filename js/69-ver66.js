/* ===== الطبقة 66 - إعلانات بلا جدول + خروج فوري + تجديد بصري ===== */
try{
var X66_ANN_LOCAL='x66_ann';
var X66_ANN_PATH='x30-pdfs/announcements.json';
var x66Trim=function(u){u=''+(u||'');while(u.length>0&&u.charAt(u.length-1)==='/'){u=u.substring(0,u.length-1)}return u};
var x66Keys=function(){try{return x52Keys()}catch(eA){return null}};
var x66StorCfg=function(){try{var c=x30AGet();if(c&&c.url&&c.svc){return {url:x66Trim(c.url),svc:c.svc}}}catch(eB){}return null};
var x66LocalAnn=function(){try{var a=stGet(X66_ANN_LOCAL,[]);if(a&&a.length!==undefined){return a}}catch(eC){}return []};
var x66LocalAnnPush=function(t,b){try{var a=x66LocalAnn();a.unshift({id:Date.now(),title:t,body:b,date:(new Date()).toISOString().slice(0,10)});if(a.length>30){a=a.slice(0,30)}stSet(X66_ANN_LOCAL,a)}catch(eD){}};
var x66ApplyNews=function(arr,src){try{if(arr&&arr.length){XNEWS.items=arr.map(function(a){return {title:(a.title||''),body:(a.body||''),date:((a.date||a.created_at||'')+'').slice(0,10)}})}else{XNEWS.items=null}XNEWS.loaded=true;try{XNEWS.src=src}catch(eE){}try{render()}catch(eF){}}catch(eG){}};
var x66NewsReadLocal=function(){var a=x66LocalAnn();if(a&&a.length){x66ApplyNews(a,'local')}else{try{XNEWS.loaded=true;XNEWS.src='none'}catch(eH){}}};
var x66NewsReadStorage=function(){var k=x66Keys();try{if(k){fetch(k.url+'/storage/v1/object/public/'+X66_ANN_PATH).then(function(r){return (r.ok?r.json():Promise.reject(0))}).then(function(arr){if(arr&&arr.length!==undefined){x66ApplyNews(arr,'storage');return}x66NewsReadLocal()}).catch(function(){x66NewsReadLocal()});return}}catch(eI){}x66NewsReadLocal()};
var x66NewsRead=function(){try{XNEWS.loaded=false;XNEWS.items=null;XNEWS.src=''}catch(eJ){}var k=x66Keys();if(!k){x66NewsReadLocal();return}try{fetch(k.url+'/rest/v1/announcements?select=title,body,created_at&published=eq.true&order=created_at.desc&limit=20',{headers:{'apikey':k.anon,'Authorization':'Bearer '+k.anon}}).then(function(r){return r.json()}).then(function(arr){if(arr&&arr.length!==undefined&&!(arr.error)){x66ApplyNews(arr,'rest');return}x66NewsReadStorage()}).catch(function(){x66NewsReadStorage()})}catch(eK){x66NewsReadStorage()}};
fetchNews=function(){try{if(XNEWS&&XNEWS.loaded){return}x66NewsRead()}catch(eL){}};
var x66AnnWriteStorage=function(t,b,done){
  var cfg=x66StorCfg();
  var item={id:Date.now(),title:t,body:b,created_at:(new Date()).toISOString()};
  var build=function(arr){if(!arr||arr.length===undefined){arr=[]}arr=[item].concat(arr);if(arr.length>30){arr=arr.slice(0,30)}return arr};
  var post=function(arr){try{fetch(cfg.url+'/storage/v1/object/'+X66_ANN_PATH,{method:'POST',headers:{'apikey':cfg.svc,'Authorization':'Bearer '+cfg.svc,'Content-Type':'application/json','x-upsert':'true'},body:JSON.stringify(arr)}).then(function(r){if(r.ok){done('storage')}else{x66LocalAnnPush(t,b);done('local')}}).catch(function(){x66LocalAnnPush(t,b);done('local')})}catch(eM){x66LocalAnnPush(t,b);done('local')}};
  if(!cfg){x66LocalAnnPush(t,b);done('local');return}
  try{fetch(cfg.url+'/storage/v1/object/public/'+X66_ANN_PATH).then(function(r){return (r.ok?r.json():[])}).then(function(arr){post(build(arr))}).catch(function(){post(build([]))})}catch(eN){post(build([]))}
};
var x66AnnWrite=function(t,b,cb){
  var k=x66Keys();
  var finish=function(mode,err){try{XNEWS.loaded=false;XNEWS.items=null}catch(eO){}cb(mode,err)};
  if(!k){x66LocalAnnPush(t,b);finish('local');return}
  try{
    fetch(k.url+'/rest/v1/announcements',{method:'POST',headers:{'apikey':k.anon,'Authorization':'Bearer '+((USER.session&&USER.session.access_token)||k.anon),'Content-Type':'application/json'},body:JSON.stringify({title:t,body:b,published:true})}).then(function(r){
      if(r.ok){finish('rest');return}
      r.json().then(function(j){
        var code=''+((j&&(j.code||''))||'');
        var msg=''+((j&&(j.message||'')))||'';
        if(code.indexOf('42P01')>=0||msg.indexOf('does not exist')>=0){x66AnnWriteStorage(t,b,function(m){finish(m)});return}
        finish('fail','تعذر النشر: '+((j&&(j.message||j.error))||('HTTP '+r.status)))
      }).catch(function(){x66AnnWriteStorage(t,b,function(m){finish(m)})});
    }).catch(function(){x66AnnWriteStorage(t,b,function(m){finish(m)})});
  }catch(eP){x66LocalAnnPush(t,b);finish('local')}
};
adPublish=function(){
  try{
    var t=(''+(((gid('adm-nt')||{}).value)||'')).trim();
    var b=(''+(((gid('adm-nb')||{}).value)||'')).trim();
    if(!t||!b){try{toast('✍️ اكتب عنوان الإعلان ونصه')}catch(eQ){}return}
    x66AnnWrite(t,b,function(mode,err){
      if(mode==='rest'){try{toast('✅ نُشر الإعلان في قاعدة البيانات — سيظهر لجميع التلاميذ')}catch(eR){}}
      else if(mode==='storage'){try{toast('✅ نُشر الإعلان عبر قناة المكتبة — سيظهر لجميع التلاميذ')}catch(eS){}}
      else if(mode==='local'){try{toast('💾 حُفظ الإعلان على هذا الجهاز مؤقتًا — لينشر لجميع التلاميذ نفّذ سكربت SQL من رسالة الإدارة')}catch(eT){}}
      else{try{toast('❌ '+err)}catch(eU){}}
      try{render()}catch(eV){}}
    );
  }catch(eW){}
};
var __x66ALSB=admLoad;
admLoad=function(){
  try{if(SB&&SB.client&&SB.ready){try{return __x66ALSB()}catch(eX1){}}}catch(eX2){}
  try{
    if(!isAdmin()){return}
    var k=x52Keys();
    if(!k){ADM.err='مفاتيح الاتصال غير متوفرة';ADM.users=[];ADM.loaded=true;try{render()}catch(eX3){}return}
    var tk=(USER.session&&USER.session.access_token)||k.anon;
    var q=ADM.q||'';
    var url=k.url+'/rest/v1/profiles?select=*&order=created_at.asc&limit=200'+(q?('&email=ilike.*'+encodeURIComponent(q)+'*'):'');
    fetch(url,{headers:{'apikey':k.anon,'Authorization':'Bearer '+tk}}).then(function(r){return r.json()}).then(function(arr){
      var eo=null;
      try{if(arr&&arr.error){eo=arr.error}}catch(eX4){}
      if(!eo){try{if(arr&&arr.code&&arr.message){eo=arr}}catch(eX5){}}
      if(eo){
        var msg=''+((eo.message||eo)||'');
        if(msg.indexOf('does not exist')>=0||msg.indexOf('Could not find')>=0||((''+(eo.code||'')).indexOf('42P01')>=0)){msg='قاعدة البيانات لم تُهيّأ بعد — نفّذ سكربت SQL من رسالة الإدارة وستعمل القائمة كاملة'}
        ADM.err='تعذر قراءة المستخدمين: '+msg;ADM.users=[];
      }else{
        try{ADM.users=(arr||[])}catch(eX6){ADM.users=[]}
        ADM.err='';
      }
      ADM.loaded=true;
      try{
        fetch(k.url+'/rest/v1/progress?select=user_id,data&limit=500',{headers:{'apikey':k.anon,'Authorization':'Bearer '+tk}}).then(function(r2){return r2.json()}).then(function(pr){
          try{
            var map={};var isArr=(pr&&typeof pr.length==='number');
            if(isArr){pr.forEach(function(row){map[row.user_id]=row.data||{}})}
            var tot=0;try{tot=(CH_MATH.length+CH_PHYS.length)}catch(eX7){tot=0}
            (ADM.users||[]).forEach(function(u2){var d2=map[u2.id]||{};var dn=0;try{dn=Object.keys(d2.done||{}).length}catch(eX8){}u2.pct=(tot?Math.round(100*dn/tot):0)});
          }catch(eX9){}
          try{render()}catch(eX10){}
        }).catch(function(){try{render()}catch(eX11){}});
      }catch(eX12){}
      try{render()}catch(eX13){}
    }).catch(function(){ADM.err='انقطع الاتصال';ADM.users=[];ADM.loaded=true;try{render()}catch(eX14){}});
  }catch(eX15){}
};
/* 66.ب خروج فوري: تسجيل الخروج أو حذف الحساب يغلقان المنصة حتى تسجيل جديد */
var __x66LO=logoutUser;
logoutUser=function(){
  try{__x66LO()}catch(eY1){}
  try{USER.session=null}catch(eY1b){}
  try{USER.profile=null}catch(eY1c){}
  try{x45FlagClear()}catch(eY2){}
  try{localStorage.removeItem('x65_sess')}catch(eY3){}
  try{MEM['x65_sess']=null}catch(eY4){}
  try{sessionStorage.removeItem('x65_gate')}catch(eY5){}
  try{sessionStorage.removeItem('x66_gate')}catch(eY6){}
  try{toast('🔒 خرجت من المنصة — سجّل الدخول للعودة')}catch(eY7){}
  try{navigate('auth')}catch(eY8){}
  try{render()}catch(eY9){}
};
xDeleteAccount=function(){
  try{
    x54Confirm('حذف الحساب','سيُحذف حسابك وبياناتك الشخصية من هذا الجهاز نهائيًا — لا يمكن التراجع.',function(){
      try{localStorage.removeItem('x18_user')}catch(eZ1){try{stSet('x18_user',null)}catch(eZ2){}}
      try{MEM['x18_user']=null}catch(eZ3){}
      try{localStorage.removeItem('x65_sess')}catch(eZ4){try{stSet('x65_sess',null)}catch(eZ5){}}
      try{MEM['x65_sess']=null}catch(eZ6){}
      try{sessionStorage.removeItem('x65_gate')}catch(eZ7){}
      try{sessionStorage.removeItem('x66_gate')}catch(eZ8){}
      USER.session=null;USER.profile=null;
      try{toast('🗑️ حُذف حسابك — أنشئ حسابًا جديدًا للعودة إلى المنصة')}catch(eZ9){}
      try{navigate('auth')}catch(eZ10){}
      try{render()}catch(eZ11){}
    });
  }catch(eZ12){}
};
/* 66.ج بوابة الجلسة: الجلسة الحية فقط تفتح المحتوى */
var x66Logged=function(){
  try{if(USER&&USER.session&&USER.session.access_token){return true}}catch(eH1){}
  try{var d=stGet('x65_sess',null);if(d&&d.t){return true}}catch(eH2){}
  return false;
};
var __x66RG=render;
render=function(){
  try{
    if(!x66Logged()){
      var p=x65CurPage();
      if(p!=='auth'){
        var once=false;try{once=(sessionStorage.getItem('x66_gate')==='1')}catch(eH3){}
        if(!once){try{sessionStorage.setItem('x66_gate','1')}catch(eH4){}try{toast('🔐 هذه الصفحة تحتاج تسجيل دخول')}catch(eH5){}}
        try{navigate('auth')}catch(eH6){}
      }
    }
  }catch(eH7){}
  return __x66RG();
};
/* 66.د التجديد البصري */
var x66Css=function(){
  try{
    var n=null;try{n=gid('x66-style')}catch(eI1){}
    if(!n){try{n=document.createElement('style');n.id='x66-style';var hd=document.head||document.body;if(hd&&hd.appendChild){hd.appendChild(n)}}catch(eI2){n=null}}
    if(n){
      n.textContent='html{-webkit-font-smoothing:antialiased}'+
        '.bnav{left:10px;right:10px;bottom:calc(8px + env(safe-area-inset-bottom,0px));border-radius:24px;border:1px solid rgba(120,150,190,.16);box-shadow:0 14px 44px rgba(0,0,0,.30);backdrop-filter:blur(22px);-webkit-backdrop-filter:blur(22px);height:auto;padding:8px 4px}'+
        '.bnav-btn{gap:4px;padding:10px 4px;border-radius:16px;font-size:11px}'+
        '.bnav-btn svg{width:23px;height:23px;stroke-width:1.9}'+
        '.bnav-btn.bnav-on{transform:translateY(-2px)}'+
        '.bnav-btn.bnav-on svg{stroke-width:2.2}'+
        '.bnav-btn:active{transform:scale(.94)}'+
        '.glass,.glass-strong,.card,.subject-card,.x17-card,.auth-card,.xmodal-card{border-radius:18px}'+
        '.btn{border-radius:14px;transition:transform .16s ease,box-shadow .16s ease,filter .16s ease}'+
        '.btn:active{transform:scale(.97)}'+
        '.btn-primary{box-shadow:0 8px 22px rgba(34,158,217,.28)}'+
        '.section-header h2,.sec15{letter-spacing:-.2px}'+
        '.section-header p{line-height:1.7}'+
        '.news-item,.set-line,.h15-card{transition:transform .15s ease}'+
        'input,textarea,select{border-radius:12px}'+
        '@media(hover:hover){.btn:hover{filter:brightness(1.06)}}';
    }
  }catch(eI3){}
};
x66Css();
APP_META.ver='66.0';
APP_META.notes='الإصدار 66 — الإعلانات تعمل حتى بدون جدول قاعدة بيانات (نشر عبر قناة مكتبة الملفات العامة مع احتياط محلي صادق ورسائل عربية نظيفة)، وتسجيل الخروج أو حذف الحساب يخرجان فورًا إلى بوابة تسجيل الدخول ولا يمكن استخدام المنصة بعدهما إلا بتسجيل جديد (تطبيقًا وموقعًا)، وتجديد بصري: شريط تنقل عائم أنيق وأيقونات أدق وتباعد أريح.';
try{APP_META.lastUpdate='2026-11-04'}catch(eI4){}
try{if(APP_META.changelog&&APP_META.changelog.unshift){APP_META.changelog.unshift({ver:'66.0',date:'2026-11-04',notes:'إعلانات بلا جدول + خروج فوري للبوابة + تجديد بصري'})}}catch(eI5){}
}catch(eI6){}
