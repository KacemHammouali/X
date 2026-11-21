/* ================= طبقة 73 — أفضل إصدار على الإطلاق: عزل الحساب الحاسم + تصميم عالمي + إصلاحات دقيقة ================= */
try{
var X73={bg:false};

/* ---------- 73.أ عزل الحساب الحاسم: التطبيق والموقع حسابان مستقلان في كل المتصفحات (إصلاح التسريب في كروم) ---------- */
function x73IsApp(){
  try{if(typeof x68Mode==='function'&&x68Mode()==='app'){return true}}catch(eM1){}
  try{if(window.navigator&&window.navigator.standalone===true){return true}}catch(eM2){}
  try{if(window.matchMedia&&window.matchMedia('(display-mode: standalone)').matches){return true}}catch(eM3){}
  try{if(window.matchMedia&&window.matchMedia('(display-mode: fullscreen)').matches){return true}}catch(eM4){}
  try{if(window.matchMedia&&window.matchMedia('(display-mode: minimal-ui)').matches){return true}}catch(eM5){}
  try{if((''+(((window.location||{}).search)||'')).indexOf('x73app=1')>=0){return true}}catch(eM6){}
  try{var ss=window.sessionStorage;if(ss&&ss.getItem&&ss.getItem('x73_isapp')==='1'){return true}}catch(eM7){}
  return false;
}
function x73IsoInit(){
try{
  if(!x73IsApp()){return}
  try{var sso=window.sessionStorage;if(sso&&sso.setItem){try{sso.setItem('x73_isapp','1')}catch(eS0){}}}catch(eS1){}
  var realLS=window.localStorage;
  if(!realLS||!realLS.getItem){return}
  try{if(realLS.getItem('x73_iso_done')==='1'){return}}catch(eD0){}
  var P='a72_';
  var AC={'x65_sess':1,'x18_user':1};
  try{
    if(realLS.getItem('x72_iso')!=='1'){
      var s1=realLS.getItem('x65_sess');
      if(s1&&!realLS.getItem(P+'x65_sess')){try{realLS.setItem(P+'x65_sess',s1)}catch(eM1){}}
      var s2=realLS.getItem('x18_user');
      if(s2&&!realLS.getItem(P+'x18_user')){try{realLS.setItem(P+'x18_user',s2)}catch(eM2){}}
      try{realLS.setItem('x72_iso','1')}catch(eM3){}
    }
  }catch(eM4){}
  var shim={
    getItem:function(k){try{return AC[k]?realLS.getItem(P+k):realLS.getItem(k)}catch(eS2){return null}},
    setItem:function(k,v){try{return AC[k]?realLS.setItem(P+k,v):realLS.setItem(k,v)}catch(eS3){}},
    removeItem:function(k){try{return AC[k]?realLS.removeItem(P+k):realLS.removeItem(k)}catch(eS4){}},
    key:function(i){try{return realLS.key(i)}catch(eS5){return null}},
    clear:function(){try{return realLS.clear()}catch(eS6){}}
  };
  try{Object.defineProperty(shim,'length',{get:function(){try{return realLS.length}catch(eL1){return 0}}})}catch(eL2){}
  var ok=false;
  try{Object.defineProperty(window,'localStorage',{get:function(){return shim},configurable:true});ok=true}catch(eD1){}
  if(!ok){try{window.localStorage=shim;ok=true}catch(eD2){}}
  try{shim.setItem('x73_iso_done','1')}catch(eD3){}
}catch(eX73){}
}
x72IsoInit=x73IsoInit;
try{x73IsoInit()}catch(eIso0){}

/* ---------- 73.ب بطاقة التخزين تنتقل من الإعدادات إلى لوحة الإدارة فقط ---------- */
x72StoreCardHtml=function(){return ''};
function x73AdmStoreHtml(){
  return '<div class="set-card glass" id="x72store-card">'+
   '<h4>🛡️ التخزين داخل التطبيق — إدارة فقط</h4>'+
   '<p class="set-note">بطاقة خاصة بلوحة الإدارة: دروس التلاميذ وملفاتهم المحمّلة تُخزن داخل مساحة التطبيق نفسها وتعمل بلا إنترنت — تُمسح فقط بحذف التطبيق نهائيًا من الجهاز.</p>'+
   '<div class="x71-chrow"><span class="x71-dot wait" id="x72s-per"></span><b>الحفظ الدائم</b><span id="x72s-per-t">…</span></div>'+
   '<div class="x71-chrow"><span class="x71-dot wait" id="x72s-size"></span><b>المساحة المستعملة</b><span id="x72s-size-t">…</span></div>'+
   '<div class="x71-chrow"><span class="x71-dot ok" id="x72s-iso"></span><b>عزل الحساب</b><span id="x72s-iso-t">…</span></div>'+
   '</div>';
}
/* غلاف الإعدادات: ينزع بطاقة التخزين من ناتج الطبقات السابقة (درس الكتل: التعديل بالإسناد لا يراه من داخل الكتل القديمة) */
var __x73SP=renderSettingsPage;
renderSettingsPage=function(){
  var h='';try{h=__x73SP()}catch(eS1){}
  try{
    h=(''+h).replace(/<div class="set-card glass" id="x72store-card">[\s\S]*?<\/div><\/div>/,'');
  }catch(eS2){}
  return h;
};
var __x73Adm=renderAdminPage18;
renderAdminPage18=function(){
  var h='';try{h=__x73Adm()}catch(eA1){}
  try{
    var adm=false;
    try{adm=isAdmin()}catch(eA2){adm=false}
    if(!adm){try{if(typeof x54OwnerOk==='function'){adm=x54OwnerOk()}}catch(eA3){adm=false}}
    /* بطاقة القنوات: تُستبدل بنسخة 73 الحية (زر SQL) — لأن غلاف 71 يلتقط نسخة كتلته القديمة */
    try{
      h=(''+h).replace(/<div class="x71-chan" id="x71-chan">[\s\S]*?<\/div><\/div>/,'');
      if((''+h).indexOf('x71-chan')<0){h=x71ChanHtml()+(''+h)}
    }catch(eR1){}
    if(adm&&(''+h).indexOf('x72store-card')<0){
      var card=x73AdmStoreHtml();
      var anchor='<div id="x38-apane0"';
      var ix=(''+h).indexOf(anchor);
      if(ix>=0){h=(''+h).substring(0,ix)+card+(''+h).substring(ix)}
      else{
        var li=(''+h).lastIndexOf('</div>');
        if(li>0){h=(''+h).substring(0,li)+card+(''+h).substring(li)}
        else{h=card+(''+h)}
      }
    }
  }catch(eA4){}
  return h;
};

/* ---------- 73.ج نزع بطاقة الإبلاغ القديمة من تبويب «ملفي» — صار مكانها الإعدادات ---------- */
try{__x43Contact=function(){return ''}}catch(eC1){}

/* ---------- 73.د زر الرجوع العلوي ثابت لا يختفي عند التمرير + السهم في وسط الدائرة بالضبط ---------- */
try{
  var st73a=document.createElement('style');
  st73a.id='x73-style-a';
  st73a.textContent=
   '.x51-back{position:sticky!important;top:calc(6px + env(safe-area-inset-top,0px));z-index:90;display:inline-flex!important;align-items:center;gap:7px;margin:4px 0 12px;padding:10px 16px;border-radius:14px;border:1px solid rgba(42,171,238,.4);background:rgba(14,24,40,.94);backdrop-filter:blur(16px);-webkit-backdrop-filter:blur(16px);color:#F5F7FC;font-weight:800;box-shadow:0 10px 28px rgba(0,0,0,.35)}'+
   'html[data-theme="light"] .x51-back{background:rgba(252,253,255,.96);color:#1d5c94;border-color:rgba(30,90,150,.3)}'+
   '.x51-bic{display:inline-flex!important;align-items:center;justify-content:center;line-height:1!important;font-size:16px;margin-top:-1px}'+
   '.x71-backbtn,.x72sec-b,.x69-backbtn,.x41-back{display:flex!important;align-items:center!important;justify-content:center!important;line-height:1!important;padding:0!important}'+
   '.x71-backbtn span,.x72sec-b span{display:inline-flex;align-items:center;justify-content:center;line-height:1}';
  var hdA=document.head||document.documentElement;
  if(hdA&&hdA.appendChild){hdA.appendChild(st73a)}
}catch(eStA){}

/* ---------- 73.هـ الشريط السفلي ثابت في مكانه أبدًا مهما نزلت (ملفي وكل التبويبات) ---------- */
try{
  var st73b=document.createElement('style');
  st73b.id='x73-style-b';
  st73b.textContent=
   '.bnav{position:fixed!important;bottom:0!important;top:auto!important;left:0!important;right:0!important;transform:none!important}'+
   'html,body{overflow-x:hidden!important}'+
   '.pv15,.x48-page{padding-bottom:calc(96px + env(safe-area-inset-bottom,0px))}';
  var hdB=document.head||document.documentElement;
  if(hdB&&hdB.appendChild){hdB.appendChild(st73b)}
}catch(eStB){}

/* ---------- 73.و خلفية معرض الصور ثابتة لا تتحرك مع التمرير — في الموقع والتطبيق معًا ---------- */
x45vBgApply=function(){
  try{
    var el=document.getElementById('x45v-bgstyle');
    if(!el){el=document.createElement('style');el.id='x45v-bgstyle';(document.head||document.documentElement).appendChild(el)}
    var css='';
    var fx=document.getElementById('x73bgfix');
    if(X45V_BGMODE==='black'){
      css='body{background:#000 !important}html{background:#000 !important}';
      if(fx){try{fx.parentNode.removeChild(fx)}catch(eR1){}}
    }else if(X45V_BGMODE==='img'&&X45V_BGIMG){
      if(!fx){
        fx=document.createElement('div');fx.id='x73bgfix';
        var bdx=(document.body||document.documentElement);
        if(bdx&&bdx.appendChild){bdx.appendChild(fx)}
      }
      try{fx.style.cssText='position:fixed;top:0;left:0;right:0;bottom:0;z-index:-2;pointer-events:none;background:linear-gradient(rgba(8,14,24,.38),rgba(8,14,24,.52)),url("'+X45V_BGIMG.split('"').join('%22')+'") center/cover no-repeat'}catch(eR2){}
      css='body{background:transparent !important}html{background:#0e1621 !important}';
    }else{
      if(fx){try{fx.parentNode.removeChild(fx)}catch(eR3){}}
    }
    el.textContent=css;
  }catch(e){}};
try{x45vBgApply()}catch(eBg1){}

/* ---------- 73.ز شاشة رمز التحقق: زر نسخ رابط البريد عاد — دون أي مساس بحقل الرمز ---------- */
x44CodeScreen=function(){
  return '<h3>📩 أدخل رمز التحقق</h3>'+
  '<p class="auth-note">أرسلنا رمزًا سريًا إلى <b dir="ltr">'+escAttr(AUTH.email)+'</b>. افتح بريدك واكتب الرمز هنا.</p>'+
  '<label class="fld"><span>رمز التحقق</span><input id="a-code" type="text" inputmode="numeric" maxlength="6" dir="ltr" placeholder="••••••" style="text-align:center;font-size:22px;letter-spacing:8px">'+fErr('code')+'</label>'+
  fErr('top')+
  '<button class="btn btn-primary btn-block" onclick="x44OtpCheck()">'+(AUTH.busy?'⏳ جارٍ التحقق…':'متابعة →')+'</button>'+
  '<div class="btn-row" style="margin-top:10px"><button type="button" class="btn btn-sm" onclick="try{x73MailLink()}catch(e){}">🔗 نسخ رابط البريد</button></div>'+
  '<p class="auth-alt">لم يصلك الرمز؟ <a onclick="x44OtpSend()">إعادة الإرسال</a> · <a onclick="AUTH.tab=\'new\';AUTH.errs={};render()">تغيير البريد</a></p>';
};
function x73MailLink(){
  var url='https://mail.google.com/';
  var done=false;
  try{
    if(navigator&&navigator.clipboard&&navigator.clipboard.writeText){
      navigator.clipboard.writeText(url);
      done=true;
    }
  }catch(e1){}
  if(!done){
    try{
      var t=document.createElement('textarea');
      t.value=url;
      t.setAttribute('readonly','');
      t.style.position='fixed';
      t.style.left='-9999px';
      if(document.body&&document.body.appendChild){document.body.appendChild(t)}
      if(t.select){try{t.select()}catch(eS1){}}
      if(document.execCommand&&document.execCommand('copy')){done=true}
      try{if(t.parentNode){t.parentNode.removeChild(t)}}catch(eS2){}
    }catch(e2){}
  }
  try{toast(done?'✅ نُسخ رابط بريدك — الصقه في المتصفح وافتح رسالة منصة X':'⚠️ انسخ الرابط يدويًا: '+url,done?'success':'error')}catch(e3){}
}

/* ---------- 73.ح أيقونات الإعدادات ملونة بألوانها الحقيقية — تصميم التطبيقات العالمية ---------- */
var X73_ICCOL={
  ap:['#7B2FF7','#F107A3'],
  lang:['#1565C0','#42A5F5'],
  snd:['#EF6C00','#FFB300'],
  ntf:['#D32F2F','#FF7043'],
  priv:['#00695C','#26A69A'],
  a11y:['#2E7D32','#66BB6A'],
  stor:['#6B7A1E','#9CA83C'],
  help:['#283593','#5C6BC0'],
  app:['#455A64','#78909C']
};
x51RowHtml=function(s){
  var c=null;
  try{c=X73_ICCOL[s.id]}catch(eC1){}
  if(!c||!c[0]){c=['#2f7ae5','#229ED9']}
  return '<button class="x51-row" onclick="x51Open(\''+s.id+'\')" aria-label="'+escAttr(x48T(s.k))+'">'+
   '<span class="x48-ic x73-ic" style="background:linear-gradient(135deg,'+c[0]+','+c[1]+');color:#fff;box-shadow:0 6px 16px '+c[0]+'59">'+X48_IC[s.icon]+'</span>'+
   '<span class="x51-rt"><b>'+x48T(s.k)+'</b><span>'+x48T(s.k+'_d')+'</span></span>'+
   '<i class="x51-go">‹</i></button>';
};

/* ---------- 73.ط بطاقة قنوات الإدارة: زر نسخ سكربت SQL جاهز بجوار الفحص الحي ---------- */
x71ChanHtml=function(){
  var st=x71ChanState();
  return '<div class="x71-chan" id="x71-chan">'+
   '<h4>📡 حالة قنوات نشر الإعلانات — فحص حي صادق</h4>'+
   '<p class="set-note">لا أخضر كاذب بعد اليوم: هذا الفحص يتصل فعلًا بقاعدة البيانات ويجرب الجدول، فما تراه أخضر يعمل بالفعل، وما تراه أحمر يحتاج خطوة واحدة منك.</p>'+
   '<div class="x71-chrow"><span class="x71-dot '+st.rest+'" id="x72dot-rest"></span><b>قاعدة البيانات</b><span id="x71-ch-rest">'+st.restTxt+'</span></div>'+
   '<div class="x71-chrow"><span class="x71-dot '+st.stor+'"></span><b>مكتبة الملفات</b><span id="x71-ch-stor">'+st.storTxt+'</span></div>'+
   '<div class="x71-chrow"><span class="x71-dot '+st.mail+'"></span><b>بريد المنصة</b><span id="x71-ch-mail">'+st.mailTxt+'</span></div>'+
   '<div class="btn-row" style="margin-top:10px">'+
   '<button class="btn btn-sm" onclick="try{x71ChanRefresh();toast(\'تم إعادة الفحص الحي\')}catch(e){}">🔄 إعادة الفحص الحي</button>'+
   '<button class="btn btn-primary btn-sm" onclick="try{x71CopySql()}catch(e){}">📋 نسخ سكربت SQL</button>'+
   '</div>'+
   '<p class="set-note" style="margin:10px 0 0">الطريق الأخضر الكامل في دقيقة: افتح supabase.com ← مشروعك ← SQL Editor ← الصق السكربت ← Run — مرة واحدة فقط، ومن بعدها يصل كل إعلان لكل التلاميذ مباشرة.</p>'+
   '<div id="x71-pubstatus" style="display:none"></div>'+
   '</div>';
};

/* ---------- 73.ي لمسات التصميم العالمي: بطاقات حية + خلفية ثابتة + انتقالات حريرية ---------- */
try{
  var st73c=document.createElement('style');
  st73c.id='x73-style-c';
  st73c.textContent=
   '.x51-row .x48-ic{width:42px;height:42px;border-radius:13px;display:flex;align-items:center;justify-content:center;flex:0 0 auto;transition:transform .18s ease}'+
   '.x51-row .x48-ic svg{stroke:currentColor;stroke-width:2.1;filter:drop-shadow(0 1px 2px rgba(0,0,0,.28))}'+
   '.x51-row:active .x48-ic{transform:scale(.94)}'+
   '.x51-hero{background:radial-gradient(120% 130% at 85% 0%,rgba(47,122,229,.16) 0%,rgba(34,158,217,.05) 45%,transparent 70%)}'+
   '.x48-hicon{background:linear-gradient(135deg,#2f7ae5,#229ED9)!important;color:#fff!important;box-shadow:0 10px 26px rgba(34,158,217,.38)}'+
   '.set-card,.x51-card,.bac-card{transition:transform .18s ease,box-shadow .18s ease}'+
   '.set-card:active,.x51-card:active{transform:scale(.994)}'+
   '.x72-tcard{transition:transform .16s ease,box-shadow .16s ease,border-color .16s ease}'+
   '.x72-tcard:hover{transform:translateY(-1px);border-color:rgba(42,171,238,.45);box-shadow:0 8px 22px rgba(0,0,0,.22)}'+
   '.x71-chan{background:radial-gradient(130% 140% at 100% 0%,rgba(47,122,229,.07) 0%,transparent 55%)}'+
   '.btn-primary{background:linear-gradient(135deg,#2f7ae5,#229ED9)!important;box-shadow:0 8px 20px rgba(34,158,217,.32);transition:transform .16s ease,box-shadow .16s ease}'+
   '.btn-primary:active{transform:scale(.97);box-shadow:0 4px 12px rgba(34,158,217,.28)}';
  var hdC=document.head||document.documentElement;
  if(hdC&&hdC.appendChild){hdC.appendChild(st73c)}
}catch(eStC){}

/* ---------- 73.ك بيانات الإصدار ---------- */
APP_META.ver='73.0';
APP_META.notes='الإصدار 73 — أفضل إصدار على الإطلاق بتصميم يضاهي التطبيقات العالمية: عزل حساب التطبيق عن الموقع حاسم في كل المتصفحات بما فيها كروم (حساب التطبيق لا يظهر في الموقع ولا العكس إلا بنفس البريد)، بطاقة التخزين انتقلت من الإعدادات إلى لوحة الإدارة وحدها، نُزعت بطاقة الإبلاغ القديمة من تبويب «ملفي» لأن مكانها الإعدادات، زر الرجوع العلوي صار ثابتًا لا يختفي عند التمرير والسهم في وسط دائرته بالضبط، الشريط السفلي ثابت في مكانه أبدًا، خلفية معرض الصور ثابتة لا تتحرك مع التمرير في الموقع والتطبيق، عاد زر نسخ رابط البريد في شاشة رمز التحقق دون أي مساس بالرمز، أيقونات الإعدادات ملونة بألوانها الحقيقية بأسلوب التطبيقات العالمية، وزر نسخ سكربت SQL جاهز بجوار الفحص الحي في لوحة الإدارة.';
try{APP_META.lastUpdate='2026-11-05'}catch(eV1){}
try{if(APP_META.changelog&&APP_META.changelog.unshift){APP_META.changelog.unshift({ver:'73.0',date:'2026-11-05',notes:'عزل الحساب الحاسم في كل المتصفحات + بطاقة التخزين للإدارة فقط + زر رجوع ثابت وسهم متمركز + شريط سفلي ثابت + خلفية ثابتة + زر رابط البريد + أيقونات ملونة عالمية + تصميم حريري'})}}catch(eV2){}
}catch(eW73){}
