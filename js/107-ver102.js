/* ============ الطبقة 102 — الإصدار 102.0: دمج احترافي إنستغرام × تيليجرام + صوت فوري مستقر + ثبات كامل ============ */
try{
(function(){
'use strict';

/* ---- 102.أ CSS: نظام هوية بأدوار واضحة — أزرق تيليجرام للتفاعل، تدرج إنستغرام لللمسات ---- */
try{
  var st102=document.createElement('style');
  st102.id='x102-style';
  st102.textContent=
   '/* 102: لون التفاعل الموحد — أزرق تيليجرام الاحترافي */'+
   ':root{--x-accent:#2AABEE;--x-accent-deep:#1D8FD1}'+
   'html[data-theme="light"]{--x-accent:#1D8FD1;--x-accent-deep:#157FB8}'+
   '.btn-primary{background:linear-gradient(135deg,#2AABEE,#1D8FD1)!important;border:0!important;color:#fff!important;box-shadow:0 6px 18px rgba(42,171,238,.26)!important}'+
   'html[data-theme="light"] .btn-primary{background:linear-gradient(135deg,#2AABEE,#1D8FD1)!important;box-shadow:0 5px 14px rgba(29,143,209,.20)!important}'+
   '.btn-primary:active{transform:scale(.97)}'+
   '/* 102: الفقاعة النشطة وخط التبويب بأزرق تيليجرام الهادئ */'+
   '.bnav .bnav-btn.bnav-on{background:rgba(42,171,238,.13)!important;border:1px solid rgba(42,171,238,.40)!important;box-shadow:0 3px 12px rgba(42,171,238,.15)!important}'+
   'html[data-theme="light"] .bnav .bnav-btn.bnav-on{background:rgba(29,143,209,.10)!important;border-color:rgba(29,143,209,.32)!important}'+
   '.bnav .bnav-btn .x97line{background:#2AABEE!important;box-shadow:0 0 1px 0 rgba(255,255,255,.45),0 0 6px 1px rgba(42,171,238,.55)!important}'+
   'html[data-theme="light"] .bnav .bnav-btn .x97line{background:#1D8FD1!important;box-shadow:0 0 4px 1px rgba(29,143,209,.40)!important}'+
   '/* 102: تبويبات الدخول وحبوب الإعدادات النشطة بنفس الأزرق */'+
   '.auth-tab.on{color:#2AABEE!important;box-shadow:inset 0 -2.5px 0 #2AABEE}'+
   'html[data-theme="light"] .auth-tab.on{color:#1D8FD1!important;box-shadow:inset 0 -2.5px 0 #1D8FD1}'+
   '.x48-pill.on{border-color:#2AABEE!important;color:#1D8FD1!important;background:rgba(42,171,238,.12)!important}'+
   '/* 102: لمسات إنستغرام — حلقات الهوية فقط (الأفاتار والشعار وعارض الصورة) */'+
   '#x97avc{background:linear-gradient(#0B1424,#0B1424) padding-box,linear-gradient(135deg,#833AB4,#E1306C 55%,#F77737) border-box!important}'+
   'html[data-theme="light"] #x97avc{background:linear-gradient(#F4F7FC,#F4F7FC) padding-box,linear-gradient(135deg,#833AB4,#E1306C 55%,#F77737) border-box!important}'+
   '.x54-authlogo{box-shadow:0 0 0 2.5px rgba(225,48,108,.38),0 0 28px rgba(131,58,180,.30)!important}'+
   '.x39-about-logo{box-shadow:0 0 0 2px rgba(225,48,108,.30),0 0 20px rgba(247,119,55,.18)}'+
   '/* 102: نزع مؤثرات الحذف القديمة نهائيًا — الحذف صار بأسلوب تيليجرام السلس */'+
   '.x101-ring,.x101-veil,.x100sq{display:none!important}'+
   '/* 102: حلقة التركيز بلون التفاعل الموحد */'+
   'body.x101-focus a:focus,body.x101-focus button:focus,body.x101-focus [role="button"]:focus,body.x101-focus input:focus,body.x101-focus select:focus,body.x101-focus textarea:focus{outline:3px solid #2AABEE!important;outline-offset:2px!important}'+
   '/* 102: مودال قصّ صورة الملف الشخصي — اختر الجزء الذي سيظهر في الدائرة */'+
   '#x102crop{position:fixed;top:0;left:0;right:0;bottom:0;z-index:2147483400;background:rgba(4,9,17,.95);display:flex;flex-direction:column;align-items:center;justify-content:center;direction:rtl;font-family:inherit}'+
   '#x102crop .x102cr-t{color:#fff;font-size:15.5px;font-weight:800;margin:0 0 6px;text-align:center;padding:0 18px;line-height:1.7}'+
   '#x102crop .x102cr-s{color:rgba(255,255,255,.65);font-size:12.5px;margin:0 0 14px;text-align:center;padding:0 24px;line-height:1.8}'+
   '#x102crop .x102cr-stage{position:relative;overflow:hidden;border-radius:18px;background:#0a0f1a;touch-action:none;box-shadow:0 10px 40px rgba(0,0,0,.5)}'+
   '#x102crop .x102cr-stage img{position:absolute;left:50%;top:50%;max-width:none;user-select:none;-webkit-user-select:none;-webkit-touch-callout:none;pointer-events:none;will-change:transform}'+
   '#x102crop .x102cr-mask{position:absolute;border-radius:50%;box-shadow:0 0 0 200vmax rgba(4,9,17,.68);border:2.5px solid rgba(255,255,255,.92);pointer-events:none}'+
   '#x102crop .x102cr-zoom{display:flex;align-items:center;gap:10px;margin-top:16px;width:min(86vw,340px);color:rgba(255,255,255,.85);font-size:16px}'+
   '#x102crop .x102cr-zoom input{flex:1;accent-color:#2AABEE;height:34px}'+
   '#x102crop .x102cr-btns{display:flex;gap:10px;margin-top:18px}'+
   '#x102crop .x102cr-btns .btn{min-width:120px}'+
   '@media (prefers-reduced-motion:reduce){#x102crop *{transition:none!important}}';
  (document.head||document.documentElement).appendChild(st102);
}catch(eS102){}

/* ---- 102.ب الصوت: فوري ومستقر ومتسق — مسار واحد دائمًا، بلا تأخير وبلا تفاوت في القوة ---- */
/* السبب الجذري الذي أُصلح: المسار القديم كان يسقط إلى ملف WAV عند انشغال قناة الصوت
   فصار الصوت متأخرًا ثوانٍ وقويًا فجأة، بينما مسار القناة الحية كان خافتًا —
   الآن: قناة صوت دائمة تُوقظ فورًا عند أول لمسة، والصوت يُجدول لحظة عملها،
   ومستوى الصوت موحّد وواضح ويتغير فعليًا مع المنزلق، والنغمة المختارة تُسمع فورًا. */
function x102Ctx(){
  try{
    var AC=window.AudioContext||window.webkitAudioContext;
    if(!AC){return null}
    var c=window.x102CtxObj;
    if(!c||c.state==='closed'){c=new AC();window.x102CtxObj=c}
    return c;
  }catch(e1){return null}
}
function x102Vol(){
  try{
    var v=XCFG.vol;
    if(typeof v!=='number'||isNaN(v)){v=6}
    v=Math.max(0,Math.min(10,v));
    return 0.04+(v/10)*0.42;
  }catch(e2){return 0.28}
}
function x102Play(c,seq,vol){
  try{
    for(var i=0;i<seq.length;i++){
      try{
        var f=seq[i][0],when=seq[i][1],dur=seq[i][2];
        var o=c.createOscillator(),g=c.createGain();
        o.frequency.value=f;o.type='sine';
        var t0=c.currentTime+when;
        g.gain.setValueAtTime(0.0001,t0);
        g.gain.exponentialRampToValueAtTime(Math.max(0.005,vol),t0+0.006);
        g.gain.exponentialRampToValueAtTime(0.0001,t0+dur);
        o.connect(g);g.connect(c.destination);
        o.start(t0);o.stop(t0+dur+0.03);
      }catch(eB){}
    }
  }catch(eP){}
}
var x102LastTap=0;
window.xSound=function(kind){
  try{
    if(!window.XCFG){return}
    if(!XCFG.sound){return}
    if(kind==='tap'){if(!XCFG.beep){return}}else{if(XCFG.sndNtf===false){return}}
    var now=Date.now();
    if(kind==='tap'){
      if(now-x102LastTap<70){return}
      x102LastTap=now;
    }
    var vol=x102Vol();
    var seq=null;
    try{seq=((typeof x95Seqs==='function')?x95Seqs(kind):null)}catch(eS1){seq=null}
    if(!seq||!seq.length){seq=(kind==='success')?[[660,0,.09],[880,.10,.12]]:(kind==='error')?[[220,0,.16]]:[[520,0,.07]]}
    var c=x102Ctx();
    if(!c){return}
    if(c.state==='running'){x102Play(c,seq,vol);return}
    /* القناة مشغولة (suspended): نوقظها فورًا ونُشغّل الصوت لحظة جهوزها — بلا سقوط إلى WAV وبلا تأخير متراكم */
    try{
      var p=c.resume();
      var go=function(){try{if(c.state==='running'){x102Play(c,seq,vol)}}catch(eG1){}};
      if(p&&typeof p.then==='function'){p.then(go,go)}
      else{setTimeout(go,0)}
    }catch(eR3){}
  }catch(eX){}
};
/* 102.ب2: قفل الصوت عند أول لمسة (pointerdown أسرع من click) — الصوت يأتي مع أول ضغطة فعلًا */
window.x102Unlock=function(){
  try{
    var c=x102Ctx();
    if(!c){return}
    if(c.state!=='running'){try{var p=c.resume();if(p&&p.catch){p.catch(function(){})}}catch(eU1){}}
  }catch(eU2){}
};
try{
  document.addEventListener('pointerdown',function(){try{window.x102Unlock()}catch(e1){}},true);
  document.addEventListener('touchstart',function(){try{window.x102Unlock()}catch(e2){}},true);
}catch(eLU102){}
/* 102.ب3: تغذية فورية عند تغيير شدة الصوت في الإعدادات — تسمع الفرق لحظة تحريك المنزلق */
var x102VolT=null;
window.x102VolPrev=function(){
  try{window.xSound('tap')}catch(e1){}
  try{
    if(x102VolT){clearTimeout(x102VolT)}
    x102VolT=setTimeout(function(){try{toast('🔊 شدة الصوت: '+((XCFG.vol===undefined)?6:XCFG.vol)+' من 10')}catch(e2){}},450);
  }catch(e3){}
};

/* ---- 102.ج ثبات التبويبات: إعادة الضغط على نفس التبويب لا تفعل شيئًا — بلا وميض وبلا اختفاء ---- */
var __x102NAV=(typeof navigate==='function')?navigate:null;
if(__x102NAV)navigate=function(a,b,c){
  try{
    var pg=(a===undefined||a===null)?'home':a;
    var still={home:1,subjects:1,dash:1,profile:1,settings:1,about:1,contact:1,subject:1};
    var same=(ROUTE&&ROUTE.page===pg&&((ROUTE.subject||null)===(b||null))&&((ROUTE.chapter||null)===(c||null)));
    var goingBack=false;
    try{goingBack=!!(typeof X72!=='undefined'&&X72&&X72.back)}catch(eB1){goingBack=false}
    if(same&&still[pg]&&!goingBack){return}
  }catch(eG102){}
  return __x102NAV(a,b,c);
};

/* ---- 102.د بعد الخروج أو حذف الحساب: شاشة التسجيل تفتح دائمًا في الخطوة الأولى (البريد) ---- */
function x102Logged(){
  try{if(USER&&USER.session){return true}}catch(e1){}
  try{if(typeof x66Logged==='function'&&x66Logged()){return true}}catch(e2){}
  return false;
}
var __x102RA=(typeof renderAuth==='function')?renderAuth:null;
if(__x102RA)renderAuth=function(){
  try{
    if(!x102Logged()){
      var t=AUTH.tab;
      if(t==='profile'||t==='summary'||t==='verify'||t==='x44code'){AUTH.tab='new';try{AUTH.errs={}}catch(eE1){}}
    }
  }catch(e0){}
  return __x102RA.apply(this,arguments);
};
var __x102RA18=(typeof renderAuth18==='function')?renderAuth18:null;
if(__x102RA18)renderAuth18=function(){
  try{
    if(!x102Logged()&&XAUTH18&&XAUTH18.step!==1){XAUTH18.step=1;XAUTH18.prefilled=false}
  }catch(e0){}
  return __x102RA18.apply(this,arguments);
};

/* ---- 102.هـ الدروس تعمل دائمًا: محرك مُثبت + إصلاح ذاتي فوري + محاولة ثانية مؤجلة ---- */
try{
  if(!window.katex){window.katex={render:function(){},renderToString:function(s){return (s===undefined)?'':String(s)}}}
  if(typeof window.renderMathInElement!=='function'){window.renderMathInElement=function(){}}
}catch(eK102){}
var __x102FC=(typeof findChapter==='function')?findChapter:null;
if(__x102FC)findChapter=function(sid,cid){
  try{
    if(!sid||!cid){return null}
    var arr=null;
    try{arr=(sid==='phys')?CH_PHYS:((sid==='math')?CH_MATH:null)}catch(eF1){arr=null}
    if(!arr||!arr.length){return null}
  }catch(eF2){}
  try{return __x102FC(sid,cid)}catch(eF3){return null}
};
var __x102LH=(typeof x72LessonHtml==='function')?x72LessonHtml:null;
if(__x102LH)x72LessonHtml=function(sid,cid){
  var h='';
  try{h=__x102LH(sid,cid)||''}catch(eL1){h=''}
  try{
    var txt=(''+h).replace(/<[^>]*>/g,' ').replace(/\s+/g,' ').trim();
    if(txt.length<40){
      var h2='';
      try{h2=renderLesson(sid,cid)||''}catch(eL2){h2=''}
      var t2=(''+h2).replace(/<[^>]*>/g,' ').replace(/\s+/g,' ').trim();
      if(t2.length>=40){h=h2}
    }
  }catch(eL3){}
  return h;
};
function x102BodyBare(bb){
  try{
    var txt=(''+(bb.innerText||bb.textContent||'')).replace(/\s+/g,'');
    return txt.length<10;
  }catch(eB1){return false}
}
var __x102S71=(typeof x71Show==='function')?x71Show:null;
if(__x102S71)x71Show=function(sid,cid){
  try{__x102S71(sid,cid)}catch(eS1){}
  try{
    var bb=document.getElementById('x71lpb');
    if(!bb){return}
    var txt=(''+(bb.innerText||bb.textContent||''));
    var hasCard=(txt.indexOf('قادم قريبًا')>=0)||(txt.indexOf('فارغ حاليًا')>=0);
    if(hasCard||x102BodyBare(bb)){
      var h='';
      try{h=x72LessonHtml(sid,cid)||''}catch(eS2){h=''}
      var t=(''+h).replace(/<[^>]*>/g,' ').replace(/\s+/g,' ').trim();
      if(t.length>=40){bb.innerHTML=h+'<div class="x71-footpad"></div>'}
    }
  }catch(eS3){}
  /* محاولة ثانية مؤجلة: إن كان المحتوى يجهز ببطء على أجهزة ضعيفة يُبنى تلقائيًا */
  setTimeout(function(){
    try{
      var lp=document.getElementById('x71lp');
      if(!lp){return}
      var bb2=document.getElementById('x71lpb');
      if(!bb2){return}
      if(x102BodyBare(bb2)){
        var h3='';
        try{h3=renderLesson(sid,cid)||''}catch(eS4){h3=''}
        var t3=(''+h3).replace(/<[^>]*>/g,' ').replace(/\s+/g,' ').trim();
        if(t3.length>=40){bb2.innerHTML=h3+'<div class="x71-footpad"></div>'}
      }
    }catch(eS5){}
  },600);
};

/* ---- 102.و الحذف بأسلوب تيليجرام: انزلاق وخفوت سريع أنيق ثم التنفيذ — بلا حلقات ولا وميض ---- */
var __x102Conf=(typeof x54Confirm==='function')?x54Confirm:null;
if(__x102Conf){
  x54Confirm=function(t,m,cb){
    try{
      var tt=''+(t||'');
      if(tt.indexOf('حذف')>=0&&tt.indexOf('الخروج')<0&&typeof cb==='function'){
        return __x102Conf(t,m,function(){
          try{
            var app=document.getElementById('app');
            if(app&&app.style){
              app.style.transition='opacity .17s ease,transform .17s ease';
              app.style.opacity='0';
              app.style.transform='scale(.965)';
            }
          }catch(eV1){}
          setTimeout(function(){
            try{cb()}catch(eC1){}
            setTimeout(function(){
              try{
                var app2=document.getElementById('app');
                if(app2&&app2.style){
                  app2.style.opacity='';
                  app2.style.transform='';
                  setTimeout(function(){try{app2.style.transition=''}catch(eV3){}},320);
                }
              }catch(eV2){}
            },40);
          },180);
        });
      }
    }catch(eD102){}
    return __x102Conf(t,m,cb);
  };
}

/* ---- 102.ز معاينة قصّ صورة الملف الشخصي: اختر بالضبط الجزء الذي سيظهر في الدائرة ---- */
window.x102CropOpen=function(img,dataUrl,finish,fail){
  var ov=null,stage=null,im=null,mask=null,zin=null;
  var S=260,sc0=1,z=1,es=1,ox=0,oy=0,imgW=img.width||600,imgH=img.height||600;
  var stageW=0,stageH=0;
  function clampO(){
    try{
      es=sc0*z;
      var mx=Math.max(0,(imgW*es-S)/2),my=Math.max(0,(imgH*es-S)/2);
      if(ox>mx){ox=mx}if(ox<-mx){ox=-mx}
      if(oy>my){oy=my}if(oy<-my){oy=-my}
    }catch(e1){}
  }
  function apply(){
    try{
      es=sc0*z;
      im.style.width=(imgW*es)+'px';
      im.style.height=(imgH*es)+'px';
      im.style.transform='translate(-50%,-50%) translate('+ox+'px,'+oy+'px)';
      mask.style.width=S+'px';mask.style.height=S+'px';
      mask.style.left=((stageW-S)/2)+'px';mask.style.top=((stageH-S)/2)+'px';
    }catch(e2){}
  }
  function cleanup(){
    try{if(ov&&ov.parentNode){ov.parentNode.removeChild(ov)}}catch(e3){}
  }
  try{
    ov=document.createElement('div');ov.id='x102crop';
    var tt=document.createElement('div');tt.className='x102cr-t';tt.innerHTML='🖼️ اختر الجزء الذي سيظهر في الدائرة';
    var ss=document.createElement('div');ss.className='x102cr-s';ss.innerHTML='اسحب الصورة بإصبعك لتضع ما تريد داخل الدائرة، وكبّر أو صغّر بالمنزلق — هذه المعاينة هي ما سيظهر في ملفك تمامًا.';
    stage=document.createElement('div');stage.className='x102cr-stage';
    im=document.createElement('img');im.src=dataUrl;im.alt='';im.draggable=false;
    mask=document.createElement('div');mask.className='x102cr-mask';
    stage.appendChild(im);stage.appendChild(mask);
    var zr=document.createElement('div');zr.className='x102cr-zoom';
    zr.innerHTML='<span>🔍</span>';
    zin=document.createElement('input');zin.type='range';zin.min='1';zin.max='4';zin.step='0.01';zin.value='1';
    zr.appendChild(zin);
    var br=document.createElement('div');br.className='x102cr-btns';
    var ok=document.createElement('button');ok.className='btn btn-primary';ok.innerHTML='✓ تحديد';
    var no=document.createElement('button');no.className='btn';no.innerHTML='إلغاء';
    br.appendChild(ok);br.appendChild(no);
    ov.appendChild(tt);ov.appendChild(ss);ov.appendChild(stage);ov.appendChild(zr);ov.appendChild(br);
    (document.body||document.documentElement).appendChild(ov);
    /* القياسات: مربع القص يملأ المسرح بحد أقصى 340px */
    stageW=Math.min(window.innerWidth-28,420);
    stageH=Math.round(Math.min(window.innerHeight*0.46,380));
    if(stageW<180){stageW=180}
    if(stageH<180){stageH=180}
    S=Math.floor(Math.min(stageW,stageH)*0.86);
    stage.style.width=stageW+'px';stage.style.height=stageH+'px';
    sc0=Math.max(S/imgW,S/imgH);
    es=sc0;ox=0;oy=0;
    apply();
    var dragging=false,px0=0,py0=0,ox0=0,oy0=0;
    function down(x,y){dragging=true;px0=x;py0=y;ox0=ox;oy0=oy}
    function move(x,y){
      if(!dragging){return}
      ox=ox0+(x-px0);oy=oy0+(y-py0);
      clampO();apply();
    }
    function up(){dragging=false}
    try{
      stage.addEventListener('touchstart',function(e){try{var t=e.touches[0];down(t.clientX,t.clientY);if(e.preventDefault){e.preventDefault()}}catch(eT1){}},{passive:false});
      stage.addEventListener('touchmove',function(e){try{var t=e.touches[0];move(t.clientX,t.clientY);if(e.preventDefault){e.preventDefault()}}catch(eT2){}},{passive:false});
      stage.addEventListener('touchend',function(){try{up()}catch(eT3){}});
      stage.addEventListener('mousedown',function(e){try{down(e.clientX,e.clientY)}catch(eM1){}});
      window.addEventListener('mousemove',function(e){try{move(e.clientX,e.clientY)}catch(eM2){}});
      window.addEventListener('mouseup',function(){try{up()}catch(eM3){}});
    }catch(eE1){}
    zin.oninput=function(){try{z=+zin.value||1;clampO();apply()}catch(eZ1){}};
    no.onclick=function(){try{cleanup()}catch(eN1){}try{fail()}catch(eN2){}};
    ok.onclick=function(){
      try{
        es=sc0*z;
        var sw=S/es;
        var sxp=(imgW/2)-((S/2+ox)/es);
        var syp=(imgH/2)-((S/2+oy)/es);
        var sizes=[720,480,320,200];var ix=0;
        var attempt=function(){
          if(ix>=sizes.length){try{cleanup()}catch(eC9){}try{fail()}catch(eC10){}return}
          try{
            var SZ=sizes[ix];
            var cv=document.createElement('canvas');cv.width=SZ;cv.height=SZ;
            var cx2=cv.getContext('2d');
            if(!cx2){ix++;attempt();return}
            cx2.fillStyle='#ffffff';cx2.fillRect(0,0,SZ,SZ);
            try{cx2.imageSmoothingEnabled=true;cx2.imageSmoothingQuality='high'}catch(eSm){}
            cx2.drawImage(img,sxp,syp,sw,sw,0,0,SZ,SZ);
            var d='';
            try{d=cv.toDataURL('image/jpeg',0.9)}catch(eD1){d=''}
            if(d&&d.indexOf('data:image/jpeg')===0&&d.length>1000){try{cleanup()}catch(eC11){}finish(d)}
            else{ix++;attempt()}
          }catch(eC1){ix++;attempt()}
        };
        attempt();
      }catch(eO1){try{cleanup()}catch(eO2){}try{fail()}catch(eO3){}}
    };
  }catch(eOpen){
    try{if(ov&&ov.parentNode){ov.parentNode.removeChild(ov)}}catch(eO4){}
    try{fail()}catch(eO5){}
  }
};
window.xPickAvatar=function(){
  var inp=null;
  try{inp=document.createElement('input');inp.type='file';inp.accept='image/*'}catch(eI1){try{toast('ℹ️ تغيير الصورة يحتاج متصفحًا حقيقيًا')}catch(eT1){}return}
  inp.onchange=function(){
    var f=(inp.files&&inp.files[0]);
    if(!f){return}
    var done=false;
    var finish=function(d){
      if(done){return}done=true;
      try{
        if(!USER.profile){USER.profile={}}
        USER.profile.avatar_url=d;
        if(typeof x18SaveUser==='function'){x18SaveUser(USER.profile)}
        try{toast('✅ تم تحديث صورتك','success')}catch(eT3){}
        try{render()}catch(eR1){}
      }catch(eF1){}
    };
    var fail=function(){
      if(done){return}
      try{
        if(f.size&&f.size<300*1024){
          var rd2=new FileReader();
          rd2.onload=function(){try{var d2=''+rd2.result;if(d2.indexOf('data:image')===0){finish(d2)}else{try{toast('❌ تعذر قراءة الصورة — جرّب صورة أخرى','error')}catch(eT9){}}}catch(eF9){}};
          rd2.onerror=function(){try{toast('❌ تعذر قراءة الصورة — جرّب صورة أخرى','error')}catch(eT8){}};
          rd2.readAsDataURL(f);
          return;
        }
      }catch(eL1){}
      try{toast('❌ تعذر معالجة الصورة — جرّب صورة أصغر حجمًا','error')}catch(eT7){}
    };
    try{
      var rd=new FileReader();
      rd.onload=function(){
        try{
          var img=new Image();
          img.onload=function(){
            try{
              var iw=img.width||0,ih=img.height||0;
              if(!iw||!ih){fail();return}
              window.x102CropOpen(img,''+rd.result,finish,fail);
            }catch(eC2){fail()}
          };
          img.onerror=function(){fail()};
          img.src=rd.result;
        }catch(eRd2){fail()}
      };
      rd.onerror=function(){fail()};
      rd.readAsDataURL(f);
    }catch(eRd3){fail()}
  };
  try{inp.click()}catch(eCk1){try{toast('ℹ️ تغيير الصورة يحتاج متصفحًا حقيقيًا')}catch(eT0){}}
};

/* ---- 102.ح الإعدادات: تغيير شدة الصوت يُسمع فورًا أثناء التحريك ---- */
try{
  var secs102=window.X48_SECS;
  if(secs102&&secs102.length){
    for(var s102i=0;s102i<secs102.length;s102i++){
      if(secs102[s102i].id==='snd'){
        var __x102SndB=secs102[s102i].b;
        secs102[s102i].b=(function(fPrev){return function(){
          var r='';
          try{r=fPrev()}catch(e1){r=''}
          try{
            r=(''+r).split('XCFG.vol=+this.value;saveXCFG()').join('XCFG.vol=+this.value;saveXCFG();try{x102VolPrev()}catch(e0){}');
          }catch(e2){}
          return r;
        }})(__x102SndB);
      }
    }
  }
}catch(eS102b){}

/* ---- 102.ط بيانات الإصدار 102 ---- */
try{
  APP_META.ver='102.0';APP_META.date='2026-11-14';APP_META.lastUpdate='2026-11-14';
  APP_META.notes='الإصدار 102.0 — دمج احترافي بأسلوب عالمي: أزرق تيليجرام الهادئ لكل عناصر التفاعل (الأزرار، الفقاعة النشطة، خط التبويب) مع لمسات تدرج إنستغرام الراقية في حلقات الأفاتار والشعار وعارض الصورة فقط — هوية بأدوار واضحة لا مزج عشوائي. الصوت فوري ومستقر: قناة صوت دائمة تُوقظ عند أول لمسة، مستوى موحد واضح يتغير فعليًا مع المنزلق مع سماع الفرق لحظة التحريك، والنغمة المختارة تُسمع فورًا، وبلا تأخير ولا تفاوت بين قوي وضعيف. ثبات التبويبات: إعادة الضغط على نفس التبويب لا تفعل شيئًا — بلا وميض ولا اختفاء. بعد الخروج أو حذف الحساب تفتح شاشة التسجيل دائمًا في الخطوة الأولى (إدخال البريد). الدروس تعمل دائمًا مع إصلاح ذاتي فوري ومحاولة ثانية مؤجلة. الحذف بأسلوب تيليجرام السلس: خفوت وانزلاق أنيق بلا حلقات ولا مربعات. معاينة قصّ صورة الملف الشخصي: اسحب وكبّر واختر بالضبط الجزء الذي سيظهر في الدائرة.';
}catch(eM102){}
try{
  APP_META.changelog.unshift({ver:'102.0',date:'2026-11-14',notes:'دمج احترافي إنستغرام × تيليجرام بأدوار واضحة + صوت فوري مستقر بمستوى موحد يتغير مع الإعدادات + منع وميض إعادة الضغط على نفس التبويب + شاشة التسجيل تبدأ من خطوة البريد بعد الخروج/الحذف + إصلاح ذاتي للدروس + حذف بأسلوب تيليجرام + معاينة قصّ صورة الملف الشخصي بالسحب والتكبير.'});
}catch(eC102){}
window.fallbackNews18=function(){
  return [{title:'الإصدار 102.0 — دمج احترافي وثبات كامل',
    body:'هوية عالمية بأدوار واضحة: أزرق تيليجرام للتفاعل ولمسات إنستغرام في الحلقات، صوت فوري مستقر تتغير شدته فعلًا من الإعدادات، تبويبات ثابتة بلا وميض، شاشة التسجيل تبدأ من البريد بعد الخروج أو الحذف، الدروس مع إصلاح ذاتي، حذف بأسلوب تيليجرام السلس، ومعاينة قصّ صورة الملف الشخصي بالسحب والتكبير.',
    date:APP_META.date}];
};
window.x102t={ver:APP_META.ver,snd:function(){try{return {ctx:(window.x102CtxObj?window.x102CtxObj.state:'none'),vol:x102Vol()}}catch(e){return null}},crop:window.x102CropOpen,pick:window.xPickAvatar};
})();
}catch(eW102){}
