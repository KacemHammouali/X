'use strict';
/* ============================================================
   X v16 — الموقع الرسمي: تثبيت PWA + إصلاح الفهرسة والتنقل
   (طبقة ثالثة فوق الإصدارين 14 و15 — لا تحذف شيئًا منهما)
   ============================================================ */

/* ---- 16.1 إصلاح فهرس الفصول: يُبنى من بيانات الفصول نفسها فلا تختفي أي وحدة ---- */
function xRebuildTerms(){
  var i,j,s,arr,defs;
  try{
    defs=[['math',CH_MATH],['phys',CH_PHYS]];
    TERMS={math:{},phys:{}};
    for(i=0;i<defs.length;i++){
      arr=defs[i][1];
      for(j=0;j<arr.length;j++){
        s=arr[j].sem||1;
        if(!TERMS[defs[i][0]][s])TERMS[defs[i][0]][s]=[];
        TERMS[defs[i][0]][s].push(arr[j].id);
      }
    }
  }catch(e){}
}

/* ---- 16.2 إصلاح التنقل: مسار قسري يُستهلك مرة واحدة — يعمل حتى لو تجاهلت البيئة روابط # ---- */
var XFORCE=null;
function parseHash(){
  if(XFORCE){
    ROUTE={page:XFORCE.page,subject:XFORCE.subject,chapter:XFORCE.chapter};
    var KNOWN16=['home','subject','lesson','quiz','dash','profile','settings','admin','auth'];
    if(KNOWN16.indexOf(ROUTE.page)<0)ROUTE={page:'home',subject:null,chapter:null};
    if((ROUTE.page==='lesson'||ROUTE.page==='quiz')&&!findChapter(ROUTE.subject||'',ROUTE.chapter||'')){ROUTE={page:'home',subject:null,chapter:null}}
    XFORCE=null;
    return;
  }
  return parseHash15();
}
function navigate(page,subject,chapter){
  var want={page:page,subject:subject||null,chapter:chapter||null};
  if((want.page==='lesson'||want.page==='quiz')&&!findChapter(want.subject||'',want.chapter||'')){want={page:'home',subject:null,chapter:null}}
  XFORCE=want;
  try{navigate15(page,subject,chapter)}catch(e){}
  if(XFORCE){try{render()}catch(e){}XFORCE=null}
  else{XFORCE=null}
}
/* ---- 16.3 أيقونة التطبيق (تُرسم برمجيًا — لا تحتاج ملفات صور) ---- */
function xIconData(size){
  try{
    var cv=document.createElement('canvas');cv.width=size;cv.height=size;
    var g=cv.getContext('2d');if(!g)return null;
    var r=size*0.225;
    g.beginPath();
    g.moveTo(r,0);g.lineTo(size-r,0);g.quadraticCurveTo(size,0,size,r);
    g.lineTo(size,size-r);g.quadraticCurveTo(size,size,size-r,size);
    g.lineTo(r,size);g.quadraticCurveTo(0,size,0,size-r);
    g.lineTo(0,r);g.quadraticCurveTo(0,0,r,0);
    g.closePath();
    g.fillStyle='#0a0a0a';g.fill();
    var gr=g.createLinearGradient(0,0,size,size);
    gr.addColorStop(0,'#ff6b5e');gr.addColorStop(.45,'#f51d0d');gr.addColorStop(1,'#8f0b02');
    g.save();g.translate(size/2,size/2);
    g.fillStyle=gr;
    var bw=size*0.74,bh=size*0.2;
    g.rotate(Math.PI/4);g.fillRect(-bw/2,-bh/2,bw,bh);
    g.rotate(-Math.PI/2);g.fillRect(-bw/2,-bh/2,bw,bh);
    g.restore();
    var d=cv.toDataURL('image/png');
    return (d&&d.indexOf('data:image')===0)?d:null;
  }catch(e){return null}
}

/* ---- 16.4 بيان التطبيق (Manifest): يُبنى وقت التشغيل بعنوان الاستضافة الفعلي ---- */
function xBuildManifest(){
  try{
    if(!location||!/^(https?:)$/.test(location.protocol||''))return false;
    var i192=xIconData(192),i512=xIconData(512);
    if(!i192||!i512)return false;
    var base=(location.href||'').split('#')[0].split('?')[0];
    if(base.indexOf('file:')===0)return false;
    var m={
      name:'منصة X التعليمية — المتوسط والثانوي',
      short_name:'منصة X',
      description:'منصة تعليمية جزائرية للطورين المتوسط والثانوي: دروس وملخصات وتمارين واختبارات ومكتبات PDF وفيديو.',
      lang:'ar',dir:'rtl',
      start_url:base+'?source=pwa',
      scope:base.slice(0,base.lastIndexOf('/')+1),
      display:'standalone',
      background_color:'#0e1621',theme_color:'#0e1621',
      icons:[
        {src:i192,sizes:'192x192',type:'image/png',purpose:'any'},
        {src:i512,sizes:'512x512',type:'image/png',purpose:'any'},
        {src:i512,sizes:'512x512',type:'image/png',purpose:'maskable'}
      ]
    };
    var l=null;
    try{l=document.querySelector('link[rel="manifest"]')}catch(e){l=null}
    if(!l){
      l=document.createElement('link');
      l.setAttribute('rel','manifest');
      (document.head||document.documentElement).appendChild(l);
    }
    l.href='data:application/manifest+json;charset=utf-8,'+encodeURIComponent(JSON.stringify(m));
    return true;
  }catch(e){return false}
}

/* ---- 16.5 خدمة العمل: عمل بلا إنترنت + تبليغ فوري عند نشر نسخة جديدة ---- */
var XSW={reg:null,ok:false};
function xRegisterSW(){
  try{
    if(typeof navigator==='undefined'||!navigator.serviceWorker)return false;
    if(!location||!/^(https?:)$/.test(location.protocol||''))return false;
    if(location.protocol==='http:'&&location.hostname!=='localhost')return false;
    navigator.serviceWorker.register('sw.js').then(function(reg){
      XSW.reg=reg;XSW.ok=true;
      reg.addEventListener('updatefound',function(){
        var nw=reg.installing;if(!nw)return;
        nw.addEventListener('statechange',function(){
          try{
            if(nw.state==='installed'&&navigator.serviceWorker.controller){
              XUPD.checked=true;
              XUPD.newer={ver:'واجهة محدّثة',notes:'نسخة جديدة من واجهة المنصة جاهزة — اضغط تحديث الآن لتطبيقها فورًا.',sw:true};
              render();
            }
          }catch(e){}
        });
      });
    }).catch(function(e){});
    return true;
  }catch(e){return false}
}

/* ---- 16.6 زر التثبيت (أندرويد/سطح المكتب) + إرشادات iPhone ---- */
var XINSTALL=null;
function xIsIOS(){try{return /iphone|ipad|ipod/i.test((navigator&&navigator.userAgent)||'')}catch(e){return false}}
function xHosted(){try{return /^(https?:)$/.test(location.protocol||'')}catch(e){return false}}
function xInstallRow(){
  var h='';
  if(XINSTALL){
    h+='<div class="set-line"><span>📲 ثبّت منصة X كتطبيق — أيقونة على شاشتك الرئيسية ويعمل بلا إنترنت بعد أول زيارة.</span> <button class="btn btn-sm btn-primary" onclick="xInstallNow()">📲 تثبيت التطبيق</button></div>';
  }else if(!xHosted()){
    h+='<p class="set-note">📲 التثبيت متاح على الموقع الرسمي المستضاف (الرابط الذي ينشره الإدارة) — هذه النسخة تعمل الآن كملف محلي بدون استضافة.</p>';
  }else if(xIsIOS()){
    h+='<p class="set-note">📲 على iPhone/iPad: افتح الموقع في متصفح Safari ← زر المشاركة (المربع مع السهم) ← «إضافة إلى الشاشة الرئيسية».</p>';
  }else{
    h+='<p class="set-note">📲 يظهر زر التثبيت هنا تلقائيًا بعد أول تنقّل في الموقع (أندرويد — كروم/إيدج، وسطح المكتب).</p>';
  }
  h+='<p class="set-note">🔐 بياناتك محفوظة على جهازك أنت — تحديث واجهة المنصة لا يمسها إطلاقًا.</p>';
  return h;
}
function xInstallNow(){
  if(!XINSTALL)return;
  var ev=XINSTALL;
  try{ev.prompt()}catch(e){}
  try{ev.userChoice.then(function(){XINSTALL=null;try{render()}catch(e){}})}catch(e){}
}
try{
window.addEventListener('beforeinstallprompt',function(e){
  e.preventDefault();XINSTALL=e;
  try{toast('📲 صار بإمكانك تثبيت منصة X كتطبيق — زر التثبيت في الإعدادات')}catch(x){}
  try{render()}catch(x){}
},false);
window.addEventListener('appinstalled',function(){
  XINSTALL=null;
  try{toast('🎉 تم تثبيت تطبيق منصة X على جهازك')}catch(x){}
  try{render()}catch(x){}
},false);
}catch(e){}

/* ---- 16.7 صفحة الإعدادات: قسم التطبيق ---- */
function renderSettingsPage(){
  var h=renderSettingsPage15();
  try{
    var i=h.lastIndexOf('</div>');
    if(i>0)h=h.slice(0,i)+xSect('📲 تطبيق المنصة (PWA)',xInstallRow())+h.slice(i);
  }catch(e){}
  return h;
}

/* ---- 16.8 التحديثات: خدمة العمل تُبقي الواجهة محدّثة فور النشر ---- */
function checkUpdate(){
  try{if(XSW.reg&&XSW.reg.update)XSW.reg.update().catch(function(e){})}catch(e){}
  return checkUpdate15();
}
function applyUpdate(){
  if(XUPD.newer&&XUPD.newer.sw){
    try{if(XSW.reg&&XSW.reg.waiting)XSW.reg.waiting.postMessage('skipWaiting')}catch(e){}
    try{location.reload()}catch(e){}
    return;
  }
  return applyUpdate15();
}

/* ---- 16.9 الإقلاع ---- */
function boot(){
  xRebuildTerms();
  boot15();
  xBuildManifest();
  xRegisterSW();
}
/* التقط نسخ طبقة 16 هنا قبل أن ترفع طبقة 17 تعريفاتها وتحل محلها (إصلاح رفع الدوال داخل نفس الكتلة) */
var parseHash16=parseHash,navigate16=navigate,renderSettingsPage16=renderSettingsPage,boot16=boot;
