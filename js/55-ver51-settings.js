/* ============ الطبقة 51 — الإصدار 51: إعدادات بصفحات مستقلة + نظام القناتين ============ */
/* 51.أ أنماط الصفحات الجديدة: عقدة CSS مستقلة لا تلمس أي نمط قديم — الهوية الرسمية نفسها */
(function(){
  try{
    var st=document.createElement('style');
    st.id='x51-style';
    st.textContent=
     '.x51-hero{margin:0 0 18px;text-align:center}'+
     '.x51-hero .x48-hicon{margin:0 auto}'+
     '.x51-hero h1{font-size:23px;margin:8px 0 2px}'+
     '.x51-hero p{font-size:13.5px;color:#A2AEC0;margin:0}'+
     '.x51-card{border-radius:16px;padding:15px;display:flex;align-items:center;gap:12px;margin:0 0 22px;border:1px solid #26384D;background:#111D2D}'+
     '.x51-grp{margin:0 0 18px}'+
     '.x51-grpt{font-size:12px;font-weight:900;color:#748399;letter-spacing:.4px;margin:0 4px 7px}'+
     '.x51-list{display:flex;flex-direction:column;gap:9px}'+
     '.x51-row{display:flex;align-items:center;gap:12px;width:100%;text-align:start;padding:13px 15px;border-radius:15px;border:1px solid #26384D;background:#111D2D;color:#F5F7FC;font-family:inherit;font-size:14px;font-weight:700;cursor:pointer;transition:border-color .2s,background .2s,transform .2s}'+
     '.x51-row:hover,.x51-row:focus-visible{border-color:rgba(53,189,242,.5);background:#17263A;transform:translateY(-1px)}'+
     '.x51-row .x48-ic{width:40px;height:40px;border-radius:12px;background:#17263A;display:flex;align-items:center;justify-content:center;color:#35BDF2;flex:0 0 auto}'+
     '.x51-rt{flex:1;display:flex;flex-direction:column;gap:1px;min-width:0}'+
     '.x51-rt b{display:block;font-size:15px}'+
     '.x51-rt span{display:block;font-size:12px;color:#A2AEC0;font-weight:500}'+
     '.x51-go{flex:0 0 auto;color:#748399;font-style:normal;font-size:20px;font-weight:900;line-height:1}'+
     '.x51-back{display:inline-flex;align-items:center;gap:6px;margin:0 0 14px;padding:8px 14px;border-radius:12px;border:1px solid #26384D;background:#111D2D;color:#A2AEC0;font-family:inherit;font-size:13px;font-weight:800;cursor:pointer;transition:color .2s,border-color .2s}'+
     '.x51-back:hover{color:#F5F7FC;border-color:rgba(53,189,242,.5)}'+
     '.x51-bic{font-style:normal;font-size:16px;font-weight:900;line-height:1}'+
     '.x51-sechead{display:flex;flex-direction:column;align-items:center;text-align:center;margin:0 0 18px}'+
     '.x51-sechead h1{font-size:21px;margin:10px 0 2px}'+
     '.x51-sechead p{font-size:13.5px;color:#A2AEC0;margin:0}'+
     '.x51-foot{text-align:center;color:#748399;font-size:12px;line-height:1.9;padding:18px 0 6px}'+
     'html[dir="ltr"] .x51-go,html[dir="ltr"] .x51-bic{transform:scaleX(-1)}'+
     'html[data-theme="light"] .x51-card,html[data-theme="light"] .x51-row,html[data-theme="light"] .x51-back{background:#FFFFFF;border-color:#DFE6EF}'+
     'html[data-theme="light"] .x51-row:hover,html[data-theme="light"] .x51-back:hover{background:#F4F7FC;border-color:rgba(22,142,191,.4)}'+
     'html[data-theme="light"] .x51-row{color:#172437}'+
     'html[data-theme="light"] .x51-row .x48-ic{background:#EDF2F8;color:#168EBF}'+
     'html[data-theme="light"] .x51-rt span,html[data-theme="light"] .x51-hero p,html[data-theme="light"] .x51-sechead p{color:#64748B}'+
     'html[data-theme="light"] .x51-grpt,html[data-theme="light"] .x51-go,html[data-theme="light"] .x51-foot,html[data-theme="light"] .x51-back{color:#64748B}'+
     '@media(prefers-reduced-motion:reduce){.x51-row,.x51-back{transition:none!important;transform:none!important}}';
    (document.head||document.getElementsByTagName('head')[0]||document.documentElement).appendChild(st);
  }catch(e){}
})();
/* 51.ب إضافات القاموس: أزرار الرجوع وعناوين المجموعات وسطور القناتين */
X48L.back=['رجوع','Retour','Back'];
X48L.grp_view=['التخصيص','Personnalisation','Customization'];
X48L.grp_pref=['التفضيلات','Préférences','Preferences'];
X48L.grp_priv=['الخصوصية والوصول','Confidentialité et accès','Privacy & access'];
X48L.grp_data=['البيانات والدعم','Données et support','Data & support'];
X48L.ch_row=['طريقة الاستخدام','Mode d utilisation','Usage mode'];
X48L.ch_app=['التطبيق المثبّت على الهاتف (قناة التطبيق)','Application installée (canal application)','Installed app (app channel)'];
X48L.ch_web=['الموقع عبر المتصفح (قناة الموقع)','Site via navigateur (canal site)','Browser site (web channel)'];
X48L.ch_note=['منصة X تعمل بقناتين منفصلتين: هذا الجهاز يتلقى تحديثات قنته فقط — التطبيق يراقب رقم appVer في ملف التحديثات والموقع يراقب ver، وكل ميزة قادمة قد تصل للتطبيق وحده أو للموقع وحده أو للاثنين معًا.','La plateforme X fonctionne sur deux canaux : cet appareil ne reçoit que les mises à jour de son propre canal.','Platform X runs on two channels: this device receives only its own channel updates.'];
/* 51.ج نظام القناتين: كشف قناة الاستخدام (تطبيق مثبّت / متصفح) مرة واحدة ثم تتثبت */
function x51Channel(){
  var app=false;
  try{if((''+document.referrer).indexOf('android-app://')===0){app=true}}catch(e1){}
  if(!app){
    try{if(window.matchMedia&&window.matchMedia('(display-mode: standalone)').matches){app=true}}catch(e2){}
  }
  if(!app){
    try{if(window.matchMedia&&(window.matchMedia('(display-mode: fullscreen)').matches||window.matchMedia('(display-mode: minimal-ui)').matches)){app=true}}catch(e4){}
  }
  if(!app){
    try{if(window.navigator&&window.navigator.standalone===true){app=true}}catch(e5){}
  }
  return app?'app':'web';
}
/* قناة التطبيق تقارن appVer (بسقوط آمن إلى ver) وتعرض appNotes — قناة الموقع تمر للفحص الأصلي كما هي */
var __x51CU=checkUpdate;
checkUpdate=function(silent){
  if(x51Channel()!=='app'){try{return __x51CU(silent)}catch(e0){return}}
  try{if(XSW&&XSW.reg&&XSW.reg.update){XSW.reg.update().catch(function(e){})}}catch(e1){}
  if(!APP_META.updateURL){if(!silent){toast('ℹ️ فحص التحديثات يحتاج استضافة المنصة على عنوان رسمي — نسختك الحالية: '+APP_META.ver,'info')}return}
  if(x41Offline()){if(!silent){toast('📴 لا يوجد اتصال بالإنترنت الآن — عاود الفحص عند عودة الشبكة','info')}return}
  fetch(APP_META.updateURL,{cache:'no-store'}).then(function(r){
    if(!r.ok){throw new Error('http'+r.status)}
    return r.text();
  }).then(function(t){
    var j=null;
    try{j=JSON.parse(t)}catch(e2){}
    if(!j||!(j.appVer||j.ver)){if(!silent){toast('⚠️ ملف التحديثات غير متاح على الخادم — تأكد من رفع versions.json مع index.html في نفس المجلد','error')}return}
    var v=(''+(j.appVer||j.ver));
    var jj={};
    for(var k in j){if(Object.prototype.hasOwnProperty.call(j,k)){jj[k]=j[k]}}
    jj.ver=v;
    jj.notes=(j.appNotes||j.notes||'');
    XUPD.checked=true;
    if(x41VerNum(v)>x41VerNum(APP_META.ver)){
      XUPD.newer=jj;
      toast('🔄 توفر إصدار جديد للتطبيق: '+v+' — ستجد تفاصيله في الصفحة الرئيسية','info');
      try{X30_HASH=ROUTE;render()}catch(e3){}
    }else{
      var had=!!XUPD.newer;
      XUPD.newer=null;
      if(!silent){toast('✅ أنت على أحدث إصدار ('+APP_META.ver+')','success')}
      if(had){try{X30_HASH=ROUTE;render()}catch(e4){}}
    }
  }).catch(function(){if(!silent){toast('❌ تعذر جلب معلومات التحديث — تحقق من الاتصال','error')}});
};
/* 51.د صفحات الإعدادات: رئيسية منظمة + صفحة مستقلة لكل قسم */
var X51={page:null};
function x51Find(id){
  for(var i=0;i<X48_SECS.length;i++){if(X48_SECS[i].id===id){return X48_SECS[i]}}
  return null;
}
function x51Open(id){
  X51.page=id;
  try{window.scrollTo(0,0)}catch(e0){}
  try{render()}catch(e1){}
}
function x51Back(){
  X51.page=null;
  try{window.scrollTo(0,0)}catch(e0){}
  try{render()}catch(e1){}
}
var __x51Nav=navigate;
navigate=function(page,subject,chapter){
  X51.page=null;
  try{return __x51Nav(page,subject,chapter)}catch(e0){}
};
function x51RowHtml(s){
  return '<button class="x51-row" onclick="x51Open(\''+s.id+'\')" aria-label="'+escAttr(x48T(s.k))+'">'+
   '<span class="x48-ic">'+X48_IC[s.icon]+'</span>'+
   '<span class="x51-rt"><b>'+x48T(s.k)+'</b><span>'+x48T(s.k+'_d')+'</span></span>'+
   '<i class="x51-go">‹</i></button>';
}
function x51RowsHtml(ids){
  var h='';
  for(var i=0;i<ids.length;i++){var s=x51Find(ids[i]);if(s){h+=x51RowHtml(s)}}
  return h;
}
function x51Main(){
  var eff=x48EffTheme();
  var modeName=x48T(XCFG.theme==='auto'?'auto':(XCFG.theme==='light'?'lightm':'dark'));
  var h='<div class="x48-page fade-in">';
  h+='<div class="x51-hero"><div class="x48-hicon">'+X48_IC.gear+'</div><h1>'+x48T('title')+'</h1><p>'+x48T('sub')+'</p></div>';
  h+='<div class="x51-card">'+
   '<div class="x48-qsw" aria-hidden="true"><i style="background:#080D18"></i><i style="background:'+(eff==='light'?'#F4F7FC':'#0D1625')+'"></i><i style="background:'+(eff==='light'?'#168EBF':'#35BDF2')+'"></i></div>'+
   '<div style="flex:1"><b>'+x48T('quick')+'</b><span style="display:block;font-size:12.5px;color:'+(eff==='light'?'#64748B':'#A2AEC0')+'">'+modeName+'</span></div>'+
   '<button class="btn btn-sm btn-primary" onclick="x51Open(\'ap\')" aria-label="'+escAttr(x48T('quickbtn'))+'">'+x48T('quickbtn')+'</button></div>';
  var grps=[{k:'grp_view',ids:['ap']},{k:'grp_pref',ids:['lang','snd','ntf']},{k:'grp_priv',ids:['priv','a11y']},{k:'grp_data',ids:['stor','help']}];
  for(var gi=0;gi<grps.length;gi++){
    h+='<div class="x51-grp"><div class="x51-grpt">'+x48T(grps[gi].k)+'</div><div class="x51-list">'+x51RowsHtml(grps[gi].ids)+'</div></div>';
  }
  h+='<div class="x51-grp"><div class="x51-list">'+x51RowsHtml(['app'])+'</div></div>';
  h+='<div class="x51-foot">'+x48T('rights')+'<br>'+x48T('ver')+' '+APP_META.ver+'</div>';
  h+='</div>';
  return h;
}
function x51SecPage(s){
  var h='<div class="x48-page fade-in">';
  h+='<button class="x51-back" onclick="x51Back()" aria-label="'+escAttr(x48T('back'))+'"><i class="x51-bic">‹</i>'+x48T('back')+'</button>';
  h+='<div class="x51-sechead"><div class="x48-hicon">'+X48_IC[s.icon]+'</div><h1>'+x48T(s.k)+'</h1><p>'+x48T(s.k+'_d')+'</p></div>';
  h+=s.b();
  h+='<div class="x51-foot">'+x48T('rights')+'<br>'+x48T('ver')+' '+APP_META.ver+'</div>';
  h+='</div>';
  if(s.id==='stor'){try{setTimeout(x48StorageFill,60)}catch(e0){}}
  return h;
}
/* القاعدة الحرجة: إسناد وليس تعريفًا مرفوعًا — طبقة 48 تسند renderSettingsPage وقت التشغيل */
var __x51RSP=renderSettingsPage;
renderSettingsPage=function(){
  try{
    if(X51.page){
      var s=x51Find(X51.page);
      if(s){return x51SecPage(s)}
    }
    return x51Main();
  }catch(e){try{return __x51RSP()}catch(e2){return ''}}
};
/* 51.ه قسم «التطبيق وحول»: سطر صادق لطريقة الاستخدام الحالية + شرح القناتين فوق المحتوى الأصلي */
(function(){
  var base=null;
  for(var i=0;i<X48_SECS.length;i++){if(X48_SECS[i].id==='app'){base=X48_SECS[i].b}}
  if(!base){return}
  for(var j=0;j<X48_SECS.length;j++){
    if(X48_SECS[j].id==='app'){
      X48_SECS[j].b=function(){
        var ch=x51Channel();
        var h='<p class="x48-note" style="margin-top:0">'+x48T('ch_row')+': <b>'+(ch==='app'?x48T('ch_app'):x48T('ch_web'))+'</b></p>';
        h+='<p class="x48-note">'+x48T('ch_note')+'</p>';
        h+=base();
        return h;
      };
      break;
    }
  }
})();
/* 51.و بيانات الإصدار */
APP_META.ver='51.0';APP_META.date='2026-11-03';APP_META.lastUpdate='2026-11-03';
APP_META.notes='الإصدار 51 — إعادة تنظيم الإعدادات بالكامل: صفحة رئيسية فيها بطاقة مظهر سريعة وأربع مجموعات مرتبة (التخصيص، التفضيلات، الخصوصية والوصول، البيانات والدعم) وقسم التطبيق وحده، وكل قسم من الأقسام التسعة يفتح صفحته المستقلة بزر رجوع يعود إلى الإعدادات، مع نظام القناتين: التطبيق المثبّت والموقع لكل منهما رقم تحديثه الخاص في versions.json (ver للموقع وappVer للتطبيق).';
try{APP_META.changelog.unshift('الإصدار 51 — الإعدادات صارت صفحة رئيسية منظمة وكل قسم يفتح صفحته المستقلة بزر رجوع يعود للإعدادات، وأُلغيت طريقة التوسيع القديمة، وأضيف نظام القناتين: تطوير التطبيق والموقع كلٌّ في قنته.')}catch(e){}
function fallbackNews18(){
  return [{title:'الإصدار 51 — إعدادات بصفحات مستقلة',
    body:'تبويب الإعدادات صار صفحة رئيسية منظمة: بطاقة مظهر سريعة وأربع مجموعات مرتبة، وكل قسم يفتح صفحته الخاصة بزر رجوع. وأضفنا نظام القناتين: التطبيق والموقع يتطورتان كلٌّ في قنته.',
    date:APP_META.date}];
}
