/* ===== الطبقة 65 - بوابة التسجيل + جلسة دائمة على الموقع والتطبيق + إصلاح التكبير ===== */
try{
var X65_SESS='x65_sess';
var x65SaveSess=function(){
  try{
    var s=USER.session;
    if(!s||!s.access_token){return}
    var exp=0;
    try{if(s.expires_in){exp=Date.now()+((s.expires_in|0)*1000)}}catch(eA){}
    if(!exp){try{if(s.expires_at&&(s.expires_at*1000>Date.now())){exp=s.expires_at*1000}}catch(eB){}}
    if(!exp){exp=Date.now()+3600000}
    stSet(X65_SESS,{t:s.access_token,r:(s.refresh_token||''),exp:exp,u:(s.user||null),em:((s.user&&s.user.email)||((XAUTH18&&XAUTH18.email)||''))});
  }catch(eC){}
};
var x65Refresh=function(){
  try{
    var d=stGet(X65_SESS,null);
    if(!d||!d.r){return}
    var k=x52Keys();
    if(!k){return}
    fetch(k.url+'/auth/v1/token?grant_type=refresh_token',{method:'POST',headers:{'apikey':k.anon,'Content-Type':'application/json'},body:JSON.stringify({refresh_token:d.r})}).then(function(r){return r.json()}).then(function(j){
      if(j&&j.access_token){
        try{USER.session={access_token:j.access_token,refresh_token:(j.refresh_token||d.r),token_type:'bearer',expires_at:Math.floor((Date.now()+((j.expires_in||3600)*1000))/1000),user:(j.user||d.u||null)}}catch(eG){}
        x65SaveSess();
        try{loadUserProfile(false)}catch(eH){}
      }
    }).catch(function(){});
  }catch(eI){}
};
var x65LoadSess=function(){
  try{
    var d=stGet(X65_SESS,null);
    if(!d||!d.t){return false}
    try{USER.session={access_token:d.t,refresh_token:(d.r||''),token_type:'bearer',expires_at:Math.floor((d.exp||0)/1000),user:(d.u||null)}}catch(eD){}
    try{if(d.em){if(!AUTH.email){AUTH.email=d.em}if(!XAUTH18.email){XAUTH18.email=d.em}}}catch(eE){}
    if(d.exp&&Date.now()>(d.exp)){x65Refresh()}
    return true;
  }catch(eF){}
  return false;
};
var x65HasAccount=function(){
  try{
    if(USER&&USER.session&&USER.session.access_token){return true}
    var d=stGet(X65_SESS,null);
    if(d&&d.t){return true}
    var lu=stGet('x18_user',null);
    if(lu&&(lu.email||lu.profile)){return true}
  }catch(eJ){}
  return false;
};
var x65CurPage=function(){
  try{
    if(typeof X30_HASH!=='undefined'&&X30_HASH&&X30_HASH.page){return X30_HASH.page}
    if(typeof ROUTE!=='undefined'&&ROUTE&&ROUTE.page){return ROUTE.page}
  }catch(eK){}
  return 'home';
};
/* 65.ا الجلسة الدائمة: استرجاع قبل اول رسم + حفظ عند كل دخول ناجح */
try{x65LoadSess()}catch(eL){}
var __x65AV=x52AfterVerify;
x52AfterVerify=function(){try{x65SaveSess()}catch(eM){}return __x65AV()};
var __x65RS=restoreSession;
restoreSession=function(){
  try{
    if(x65LoadSess()){
      try{
        var k=x52Keys();
        if(k&&USER.session&&USER.session.user){
          var uid=(USER.session.user&&USER.session.user.id)||'';
          var tk=USER.session.access_token||'';
          fetch(k.url+'/rest/v1/profiles?id=eq.'+encodeURIComponent(uid)+'&select=*',{headers:{'apikey':k.anon,'Authorization':'Bearer '+tk}}).then(function(r){return r.json()}).then(function(arr){
            try{if(arr&&arr.length&&!arr.error){USER.profile=arr[0]}}catch(eN){}
          }).catch(function(){});
        }
      }catch(eO){}
      return;
    }
  }catch(eP){}
  return __x65RS();
};
/* 65.ب بوابة التسجيل: لا محتوى قبل اول تسجيل - مثل التطبيقات العالمية */
var __x65R=render;
render=function(){
  try{
    if(!x65HasAccount()){
      var p=x65CurPage();
      if(p!=='auth'){
        var once=false;try{once=(sessionStorage.getItem('x65_gate')==='1')}catch(eQ1){}
        if(!once){try{sessionStorage.setItem('x65_gate','1')}catch(eQ2){}try{toast('🔐 سجّل ببريدك مرة واحدة فقط — تدخل بعدها مباشرة في كل مرة')}catch(eQ3){}}
        try{navigate('auth')}catch(eQ4){}
      }
    }
  }catch(eQ5){}
  return __x65R();
};
/* 65.ج التكبير: ايقاف حقيقي للقرصة عند اطفاء الزر (متصفح الهاتف يتجاهل user-scalable=no) */
var x65ZoomCss=function(){
  try{
    if(typeof XCFG!=='undefined'&&XCFG&&XCFG.font==='l'){return ''}
    return 'html,body{touch-action:pan-x pan-y!important;-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}';
  }catch(eR1){}
  return '';
};
var x65ZoomSync=function(){
  try{
    var css=x65ZoomCss();
    var n=null;try{n=gid('x65-zoom')}catch(eR2){}
    if(!n){
      try{n=document.createElement('style');n.id='x65-zoom';try{var hd=document.head||document.body;if(hd&&hd.appendChild){hd.appendChild(n)}}catch(eR3){n=null}}catch(eR4){n=null}
    }
    if(n){try{n.textContent=css}catch(eR5){}}
  }catch(eR6){}
};
try{x65ZoomSync()}catch(eR7){}
var __x65AXC=applyXCFG;
applyXCFG=function(){var r65;try{r65=__x65AXC()}catch(eR8){}try{x65ZoomSync()}catch(eR9){}return r65};
try{
  document.addEventListener('touchstart',function(eT){
    try{if(typeof XCFG!=='undefined'&&XCFG&&XCFG.font==='l'){return}if(eT.touches&&eT.touches.length>1){eT.preventDefault()}}catch(eT2){}
  },{passive:false});
  document.addEventListener('touchmove',function(eT3){
    try{if(typeof XCFG!=='undefined'&&XCFG&&XCFG.font==='l'){return}if(eT3.touches&&eT3.touches.length>1){eT3.preventDefault()}}catch(eT4){}
  },{passive:false});
}catch(eT5){}
APP_META.ver='65.0';
APP_META.notes='الإصدار 65 — بوابة التسجيل الاحترافية: لا يُعرض أي محتوى قبل تسجيل أول مرة (مثل التطبيقات العالمية)، والجلسة تصبح دائمة على الموقع والتطبيق معًا: تسجل مرة واحدة وتدخل مباشرة في كل مرة بعدها حتى بعد إغلاق المتصفح (مع تجديد تلقائي للجلسة عند انتهائها)، وإصلاح زر التكبير: عند إطفائه يتوقف التكبير بالإصبعين فعليًا في التطبيق (الحاجز الحقيقي للقرصة، لأن متصفح الهاتف يتجاهل user-scalable=no).';
try{APP_META.lastUpdate='2026-11-04'}catch(eU){}
try{if(APP_META.changelog&&APP_META.changelog.unshift){APP_META.changelog.unshift({ver:'65.0',date:'2026-11-04',notes:'بوابة التسجيل + جلسة دائمة على الموقع والتطبيق + إصلاح التكبير'})}}catch(eV){}
}catch(eW){}
