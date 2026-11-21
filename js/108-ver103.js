try{
(function(){
/* ============ الطبقة 103 — الإصدار 103.0: الدروس تظهر دائمًا (ضمانة رؤية ثلاثية) + تأثير حذف واضح احترافي + نص معاينة القص في الأعلى ============ */

/* ---- 103.أ CSS ---- */
try{
  var st103=document.createElement('style');
  st103.id='x103-style';
  st103.textContent=
   /* نص معاينة القص مثبت أعلى الشاشة */
   '#x102crop{justify-content:flex-start!important;align-items:center!important;padding-top:calc(env(safe-area-inset-top,0px) + 26px)!important}'+
   '#x102crop .x102cr-t{margin-top:0!important}'+
   /* ضمانة رؤية الدروس: لا يبقى أي محتوى عالقًا بحالة بداية حركة (opacity:0) داخل صفحات الدرس */
   '#x71lpb,#x72sec-bd{opacity:1!important;visibility:visible!important;display:block!important}'+
   '#x71lpb *,#x72sec-bd *{animation:none!important}'+
   '#x71lpb .fade-in,#x72sec-bd .fade-in,.x72-toc.fade-in,.lesson-view.fade-in{opacity:1!important;transform:none!important}'+
   /* تأثير الحذف: ستارة كاملة أنيقة بحلقة الهوية */
   '#x103veil{position:fixed;top:0;left:0;right:0;bottom:0;z-index:2147483600;background:rgba(4,9,17,.9);display:flex;flex-direction:column;align-items:center;justify-content:center;opacity:0;transition:opacity .22s ease;direction:rtl;font-family:inherit}'+
   '#x103veil.x103-on{opacity:1}'+
   '#x103veil .x103v-ring{width:62px;height:62px;border-radius:50%;border:4px solid rgba(53,189,242,.22);border-top-color:#35BDF2;animation:x103spin .8s linear infinite}'+
   '@keyframes x103spin{to{transform:rotate(360deg)}}'+
   '#x103veil .x103v-t{color:#fff;margin-top:16px;font-size:15px;font-weight:800;letter-spacing:.2px}'+
   '#x103veil .x103v-s{color:rgba(255,255,255,.62);margin-top:6px;font-size:12px}'+
   '@media(prefers-reduced-motion:reduce){#x103veil .x103v-ring{animation:none}}';
  var hd103=document.head||document.documentElement||(document.body&&document.body.parentNode);
  if(hd103&&hd103.appendChild){hd103.appendChild(st103)}
  else if(document.body){document.body.appendChild(st103)}
}catch(eC103){}

/* ---- 103.ب إصلاح حالة التخزين: يمنع انهيار رسم الدرس إن كانت البيانات المحلية تالفة ---- */
function x103StateFix(){
  try{
    if(typeof STATE!=='undefined'&&STATE){
      if(!STATE.done||typeof STATE.done!=='object'||STATE.done instanceof Array){STATE.done={}}
      if(!STATE.saved||typeof STATE.saved.push!=='function'){STATE.saved=[]}
      if(!STATE.quiz||typeof STATE.quiz!=='object'||STATE.quiz instanceof Array){STATE.quiz={}}
    }
  }catch(eS103){}
  try{
    if(typeof X72L!=='undefined'&&X72L){if(!X72L.secs||typeof X72L.secs.push!=='function'){X72L.secs=[]}if(!X72L.titles||typeof X72L.titles.push!=='function'){X72L.titles=[]}}
  }catch(eS2x){}
  try{
    if(typeof X71!=='undefined'&&X71){if(!X71.sid)X71.sid=null;if(!X71.cid)X71.cid=null}
  }catch(eS3x){}
}

/* ---- 103.ج حلّ الدرس: يجد الفصل الصحيح مهما كانت المادة الممرَّرة (يمنع عنوان درس آخر) ---- */
function x103Resolve(sid,cid){
  var s=(''+(sid==null?'':sid)).replace(/^\s+|\s+$/g,'');
  var c=(''+(cid==null?'':cid)).replace(/^\s+|\s+$/g,'');
  var ch=null;
  try{ch=(typeof findChapter==='function')?findChapter(s,c):null}catch(eR1){ch=null}
  if(ch){return {sid:s,cid:c,ch:ch}}
  try{
    var lists=[['math',CH_MATH],['phys',CH_PHYS]];
    for(var i=0;i<lists.length;i++){
      var arr=lists[i][1];
      if(arr&&arr.length){
        for(var j=0;j<arr.length;j++){
          if(arr[j]&&arr[j].id===c){return {sid:lists[i][0],cid:c,ch:arr[j]}}
        }
      }
    }
  }catch(eR2){}
  return {sid:s,cid:c,ch:null};
}

/* ---- 103.د ضمانة المحتوى: جسم الدرس لا يبقى فارغًا أبدًا — محرك أصلي ثم خام ثم بطاقة سقوط ---- */
function x103FallbackCard(ch){
  try{
    if(!ch){
      return '<div class="x17-card" style="text-align:center;padding:34px 18px">'+
        '<div style="font-size:42px;margin-bottom:10px">🧭</div>'+
        '<b style="font-size:16px">تعذر فتح هذا الدرس</b>'+
        '<p class="x17-mute" style="margin-top:8px;line-height:1.9">اضغط السهم أعلى الشاشة للعودة ثم أعد فتح الدرس من قائمة المادة.</p>'+
        '<button class="btn btn-primary" style="margin-top:14px" onclick="try{x69Back()}catch(e){navigate(\'home\')}">رجوع</button></div>';
    }
    var h='<div class="lesson-view"><div class="lesson-header glass-strong">'+
      '<h1>'+(ch.icon||'📘')+' '+(ch.title||'الدرس')+'</h1>'+
      (ch.obj?'<div class="objectives"><strong>🎯 أهداف المحور:</strong> '+ch.obj+'</div>':'')+
      (ch.desc?'<p style="margin-top:10px;line-height:1.9">'+ch.desc+'</p>':'')+
      '</div><div class="lesson-content glass">';
    if(ch.take&&ch.take.length){
      h+='<div class="summary-box"><span class="dt">🧠 أهم النقاط من '+(ch.title||'')+'</span><ul>';
      for(var i=0;i<ch.take.length;i++){h+='<li>'+ch.take[i]+'</li>'}
      h+='</ul></div>';
    }
    h+='<p class="x17-mute" style="line-height:1.9">عرض مبسّط لمحتوى الدرس — أعد فتح الدرس لتحميل المحتوى الكامل.</p></div></div>';
    return h;
  }catch(eF103){return '<div class="lesson-view"><div class="lesson-content glass">تعذر عرض المحتوى — أعد فتح الدرس.</div></div>'}
}
function x103BuildBody(sid,cid){
  var h='';
  try{h=(typeof x72LessonHtml==='function')?(x72LessonHtml(sid,cid)||''):''}catch(eB1){h=''}
  var t=(''+h).replace(/<[^>]*>/g,' ').replace(/\s+/g,' ').trim();
  if(t.length<40){
    try{h=(typeof renderLesson==='function')?(renderLesson(sid,cid)||''):''}catch(eB2){h=''}
    t=(''+h).replace(/<[^>]*>/g,' ').replace(/\s+/g,' ').trim();
  }
  if(t.length<40){
    var r=x103Resolve(sid,cid);
    h=x103FallbackCard(r.ch);
  }
  return h;
}
function x103BodyBare(bb){
  try{
    var txt=(''+(bb.innerText||bb.textContent||'')).replace(/\s+/g,'');
    return txt.length<10;
  }catch(eB3){return false}
}
function x103EnsureBody(sid,cid){
  try{
    var bb=document.getElementById('x71lpb');
    if(!bb){return}
    var hasCard=false;
    try{var tx=(''+(bb.innerText||bb.textContent||''));hasCard=(tx.indexOf('قادم قريبًا')>=0)||(tx.indexOf('فارغ حاليًا')>=0)||(tx.indexOf('تعذر فتح هذا الدرس')>=0)}catch(eT1){}
    if(hasCard||x103BodyBare(bb)){
      bb.innerHTML=x103BuildBody(sid,cid)+'<div class="x71-footpad"></div>';
      try{bb.scrollTop=0}catch(eS4x){}
    }
    /* إصلاح رؤية فوري: لا يبقى الجسم شفافًا مهما كان سبب تعثر الحركة */
    try{bb.style.opacity='1';bb.style.visibility='visible'}catch(eV1){}
  }catch(eE103){}
}

/* ---- 103.هـ غلاف x71Show: عنوان صحيح دائمًا + محتوى مضمون + محاولة مؤجلة ---- */
var __x103S71=(typeof x71Show==='function')?x71Show:null;
if(__x103S71){
  x71Show=function(sid,cid){
    x103StateFix();
    var r=x103Resolve(sid,cid);
    try{__x103S71(r.sid,r.cid)}catch(eS71){}
    try{
      var lp=document.getElementById('x71lp');
      if(lp){
        /* تصحيح العنوان: إن أظهر الترويسة درسًا آخر يُعاد بناؤها من الفصل الصحيح */
        var hb=document.getElementById('x71lph');
        if(hb&&r.ch){
          var ht='';try{ht=(''+(hb.innerText||hb.textContent||''))}catch(eH1){}
          if(ht.indexOf(r.ch.title)<0){
            try{hb.innerHTML=x71HeadHtml(r.sid,r.cid)}catch(eH2){}
          }
        }
        x103EnsureBody(r.sid,r.cid);
        setTimeout(function(){
          try{
            var lp2=document.getElementById('x71lp');
            if(!lp2){return}
            var bb2=document.getElementById('x71lpb');
            if(!bb2){return}
            if(x103BodyBare(bb2)){
              try{bb2.innerHTML=x103BuildBody(r.sid,r.cid)+'<div class="x71-footpad"></div>'}catch(eD1){}
            }
            try{bb2.style.opacity='1';bb2.style.visibility='visible'}catch(eD2){}
          }catch(eD3){}
        },600);
      }
    }catch(eO103){}
  };
}

/* ---- 103.و غلاف x72OpenSec: لا أجزاء من درس سابق (ذاكرة X72L القديمة تُصلح فورًا) ---- */
var __x103OSec=(typeof x72OpenSec==='function')?x72OpenSec:null;
if(__x103OSec){
  x72OpenSec=function(i){
    x103StateFix();
    try{
      var cur=(typeof X71!=='undefined'&&X71)?X71:null;
      if(cur&&cur.sid&&cur.cid&&(typeof X72L==='undefined'||!X72L||X72L.sid!==cur.sid||X72L.cid!==cur.cid||!X72L.secs||!X72L.secs.length)){
        if(typeof x72LessonHtml==='function'){try{x72LessonHtml(cur.sid,cur.cid)}catch(eW1x){}}
      }
    }catch(eW2x){}
    try{__x103OSec(i)}catch(eW3x){}
    try{
      var bd=document.getElementById('x72sec-bd');
      if(bd&&x103BodyBare(bd)){
        bd.innerHTML='<div class="x17-card" style="text-align:center;padding:30px 18px">'+
          '<div style="font-size:42px;margin-bottom:10px">📭</div>'+
          '<b style="font-size:16px">هذا الجزء فارغ حاليًا</b>'+
          '<p class="x17-mute" style="margin-top:8px;line-height:1.9">المحتوى لم يُنشر بعد لهذا الجزء — اضغط «عودة إلى فهرس الدرس» لتتابع قراءة بقية الأجزاء.</p></div>';
      }
    }catch(eW5x){}
  };
}

/* ---- 103.ز تأثير الحذف الواضح: ستارة كاملة بحلقة دوّارة ونص — تُرى فعلًا قبل التنفيذ ---- */
function x103Vanish(label,done){
  var off=false;
  try{off=document.documentElement.classList.contains('x99-off')}catch(eVx1){}
  var rm=false;
  try{rm=!!(window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches)}catch(eVx2){}
  if(!document||!document.body||typeof document.createElement!=='function'){try{done()}catch(eVx3){}return}
  var v=null;
  try{
    v=document.createElement('div');
    v.id='x103veil';
    v.innerHTML='<div class="x103v-ring"></div><div class="x103v-t">'+(label||'جارٍ التنفيذ…')+'</div><div class="x103v-s">لحظة واحدة</div>';
    document.body.appendChild(v);
  }catch(eVx4){try{done()}catch(eVx5){}return}
  if(off||rm){
    /* بلا حركات: تظهر الستارة فورًا وتختفي بعد التنفيذ */
    try{v.style.opacity='1'}catch(eVx6){}
    setTimeout(function(){
      try{done()}catch(eVx7){}
      setTimeout(function(){try{if(v&&v.parentNode){v.parentNode.removeChild(v)}}catch(eVx8){}},60);
    },420);
    return;
  }
  setTimeout(function(){try{v.classList.add('x103-on')}catch(eVx9){}},16);
  setTimeout(function(){
    try{done()}catch(eVx10){}
    setTimeout(function(){
      try{v.classList.remove('x103-on')}catch(eVx11){}
      setTimeout(function(){try{if(v&&v.parentNode){v.parentNode.removeChild(v)}}catch(eVx12){}},280);
    },200);
  },360);
}

/* غلاف x54Confirm الخارجي: كل عناوين الحذف (حذف الحساب/حذف الملف/…) تُظهر الستارة قبل التنفيذ */
var __x103Conf=(typeof x54Confirm==='function')?x54Confirm:null;
if(__x103Conf){
  x54Confirm=function(t,m,cb){
    try{
      var tt=''+(t||'');
      if(tt.indexOf('حذف')>=0&&tt.indexOf('الخروج')<0&&typeof cb==='function'){
        return __x103Conf(t,m,function(){x103Vanish('جارٍ الحذف…',cb)});
      }
    }catch(eCx103){}
    return __x103Conf(t,m,cb);
  };
}
/* غلاف مسح الذاكرة المؤقتة: نفس الستارة */
var __x103Clr=(typeof x48Clear==='function')?x48Clear:null;
if(__x103Clr){
  x48Clear=function(){x103Vanish('جارٍ المسح…',__x103Clr)};
}

/* ---- 103.ط بيانات الإصدار 103 ---- */
APP_META.ver='103.0';
APP_META.date='2026-11-14';
APP_META.lastUpdate='2026-11-14';
APP_META.notes='الإصدار 103.0 — إصدار «كل شيء يعمل»: صفحات الدروس مضمونة الرؤية ثلاثيًا (لا يبقى المحتوى شفافًا عالقًا بحالة حركة لم تبدأ على بعض الأجهزة، مع تصحيح فوري لأي عنوان درس قديم يظهر خطأً، وبطاقة محتوى مبسطة من بيانات الدرس نفسه إن تعذر الرسم الكامل — فلا صفحة بيضاء أبدًا)، وتأثير حذف واضح وراقٍ: ستارة كاملة بحلقة دوّارة بألوان الهوية ونص «جارٍ الحذف…» تظهر فعلًا عند حذف الحساب وحذف الملفات ومسح الذاكرة المؤقتة قبل التنفيذ، ونص تعليمات معاينة قصّ صورة الملف الشخصي مثبت أعلى الشاشة مباشرة ليُقرأ أولًا. مع كل مزايا 102: الصوت الفوري المستقر، ثبات التبويبات، الخطوة الأولى بعد الخروج، ومعاينة القص بالسحب والتكبير.';
try{
  APP_META.changelog.unshift({ver:'103.0',date:'2026-11-14',notes:'ضمانة رؤية الدروس: لا صفحات فارغة أبدًا (إصلاح المحتوى الشفاف العالق + تصحيح العنوان القديم + بطاقة مبسطة عند التعذر) + تأثير حذف واضح احترافي (ستارة بحلقة دوّارة) عند حذف الحساب والملفات ومسح الذاكرة المؤقتة + نص معاينة قصّ الصورة مثبت أعلى الشاشة.'});
}catch(eM103){}
window.fallbackNews18=function(){
  return [{title:'الإصدار 103.0 — كل شيء يعمل',
    body:'الدروس مضمونة الظهور دائمًا مع إصلاح ذاتي فوري، تأثير حذف واضح وراقٍ عند كل عملية حذف، ونص إرشادات معاينة القص في أعلى الشاشة — مع كل مزايا 102:',
    date:APP_META.date}];
};
window.x103t={ver:APP_META.ver,vanish:x103Vanish,ensure:x103EnsureBody,resolve:x103Resolve,stateFix:x103StateFix};

})();
}catch(eW103){}
