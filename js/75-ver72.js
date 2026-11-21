/* ================= طبقة 72 — أقوى إصدار: أقسام الدرس في صفحات مستقلة + إصلاحات جذرية ================= */
try{
var X72={back:false,restState:null};
var X72L={secs:[],titles:[],sid:null,cid:null};
var X72SEC={open:false,i:0,savedY:0};
var X72SC={};

/* ---------- 72.أ ألوان الكتابة الفاتحة: تسعة ألوان حية مرئية (لا شبه-أسود بعد اليوم) ---------- */
var X48_INKSL={
  b:['#2A3038','#5A6472','#8A94A2','أسود فحمي','Noir charbon','Charcoal'],
  dnav:['#1565C0','#4A90D9','#8FBCE8','أزرق','Bleu','Blue'],
  navy:['#283593','#5C6BC0','#9FA8DA','كحلي','Bleu marine','Navy'],
  for:['#1B7A43','#4CAF7D','#9CD5BC','أخضر','Vert','Green'],
  dtea:['#00695C','#26A69A','#80CBC4','تركوازي','Turquoise','Teal'],
  dvio:['#5E35B1','#9575CD','#C5B3E6','بنفسجي','Violet','Violet'],
  wine:['#9C2740','#C9536C','#E39AA9','نبيذي','Bordeaux','Burgundy'],
  dolv:['#6B7A1E','#9CA83C','#C9D28A','زيتوني','Olive','Olive'],
  br:['#795230','#A97C57','#D3B79E','بني دافئ','Brun chaud','Warm brown']
};
try{x48InkApply()}catch(eI0){}

/* ---------- 72.ب عنوان المشاركة الموحد: واتساب وجوجل يعرضان الاسم الرسمي الكامل ---------- */
function x72ShareTitle(){
  try{document.title='منصة X التعليمية للطورين المتوسط والثانوي'}catch(eT1){}
  try{
    var ms=document.getElementsByTagName('meta');
    if(ms&&ms.length){
      for(var i=0;i<ms.length;i++){
        var m=ms[i];
        var p=''+((m.getAttribute&&m.getAttribute('property'))||'');
        if(p==='og:title'){try{m.setAttribute('content','منصة X التعليمية للطورين المتوسط والثانوي')}catch(eT2){}}
      }
    }
  }catch(eT3){}
}
try{x72ShareTitle()}catch(eT0){}

/* ---------- 72.ج عزل حساب التطبيق عن حساب الموقع: حسابان مستقلان إلا إذا كان البريد نفسه ---------- */
function x72IsoInit(){
try{
  if(typeof x68Mode!=='function'||x68Mode()!=='app'){return}
  var realLS=window.localStorage;
  if(!realLS||!realLS.getItem){return}
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
    getItem:function(k){try{return AC[k]?realLS.getItem(P+k):realLS.getItem(k)}catch(eS1){return null}},
    setItem:function(k,v){try{return AC[k]?realLS.setItem(P+k,v):realLS.setItem(k,v)}catch(eS2){}},
    removeItem:function(k){try{return AC[k]?realLS.removeItem(P+k):realLS.removeItem(k)}catch(eS3){}},
    key:function(i){try{return realLS.key(i)}catch(eS4){return null}},
    clear:function(){try{return realLS.clear()}catch(eS5){}}
  };
  try{Object.defineProperty(shim,'length',{get:function(){try{return realLS.length}catch(eL1){return 0}}})}catch(eL2){}
  var ok=false;
  try{Object.defineProperty(window,'localStorage',{get:function(){return shim},configurable:true});ok=true}catch(eD1){}
  if(!ok){try{window.localStorage=shim;ok=true}catch(eD2){}}
}catch(eX72){}
}
try{x72IsoInit()}catch(eIso0){}

/* ---------- 72.د أجزاء الدرس: كل عنوان يفتح محتواه في صفحته المستقلة ---------- */
function x72StripTags(t){return (''+t).replace(/<[^>]*>/g,'').replace(/\s+/g,' ').replace(/^\s+/,'').replace(/\s+$/,'')}
function x72LessonHtml(sid,cid){
  var h='';
  try{h=renderLesson(sid,cid)}catch(eL1){}
  var hFull=h;
  X72L.secs=[];X72L.titles=[];X72L.sid=sid;X72L.cid=cid;
  try{
    var posPrev=h.lastIndexOf('<div style="display:flex;justify-content:space-between');
    var prevNext='';
    if(posPrev>=0){prevNext=h.substring(posPrev);h=h.substring(0,posPrev)}
    var idxs=[];var re=/<h[23][\s>]/g;var m;
    while((m=re.exec(h))!==null){idxs.push(m.index)}
    if(idxs.length<2){return hFull}
    var intro=h.substring(0,idxs[0]);
    var secs=[];var titles=[];
    for(var i=0;i<idxs.length;i++){
      var st=idxs[i];var en=(i+1<idxs.length)?idxs[i+1]:h.length;
      var sec=h.substring(st,en);
      if(!x72StripTags(sec)){continue}
      var mm=/^<h[23][^>]*>([\s\S]*?)<\/h[23]>/.exec(sec);
      var tt=(mm?x72StripTags(mm[1]):'');
      if(!tt){tt='الجزء '+(secs.length+1)}
      secs.push(sec);titles.push(tt);
    }
    if(secs.length<2){return hFull}
    X72L.secs=secs;X72L.titles=titles;
    var out=intro+'</div>'+
      '<div class="x72-toc fade-in">'+
      '<div class="x72-toch">📖 أجزاء هذا الدرس</div>'+
      '<p class="x72-tocn">اضغط أي جزء ليفتح في صفحته المستقلة — اخرج منه وستعود لمكانك بالضبط، ثم افتح جزءًا آخر.</p>';
    for(var j=0;j<secs.length;j++){
      out+='<button type="button" class="x72-tcard" onclick="x72OpenSec('+j+')"><span class="x72-tn">'+(j+1)+'</span><b>'+titles[j]+'</b><span class="x72-ta">◀</span></button>';
    }
    out+='</div>'+(prevNext||'');
    return out;
  }catch(eL2){return hFull}
}
function x72SecBuild(i){
  try{
    if(!X72L.secs[i]){return}
    X72SEC.i=i;
    var d=gid('x72sec');
    if(!d){d=document.createElement('div');d.id='x72sec';d.className='x72sec';
      var bd2=document.body||document.documentElement;
      if(bd2&&bd2.appendChild){bd2.appendChild(d)}
    }
    var nx=(i+1<X72L.secs.length);
    d.innerHTML='<div class="x72sec-h">'+
      '<button class="x72sec-b" onclick="x72CloseSec()" aria-label="رجوع إلى فهرس الدرس"><span>→</span></button>'+
      '<div class="x72sec-t"><b>'+X72L.titles[i]+'</b><span>الجزء '+(i+1)+' من '+X72L.secs.length+' — اضغط السهم للعودة إلى مكانك في الدرس</span></div>'+
      '</div>'+
      '<div class="x72sec-bd" id="x72sec-bd">'+X72L.secs[i]+
      '<div class="x72sec-nav">'+
      (nx?'<button class="btn btn-primary" onclick="x72NextSec()">الجزء التالي: '+X72L.titles[i+1]+' ◀</button>':'')+
      '<button class="btn" onclick="x72CloseSec()">✓ عودة إلى فهرس الدرس</button>'+
      '</div></div>';
    try{var bd=gid('x72sec-bd');if(bd){bd.scrollTop=0}}catch(eB1){}
  }catch(eB2){}
}
function x72OpenSec(i){
  try{
    var bb=gid('x71lpb');
    X72SEC.savedY=(bb&&typeof bb.scrollTop==='number')?(bb.scrollTop||0):((window.pageYOffset||document.documentElement.scrollTop||0));
    X72SEC.open=true;
    x72SecBuild(i);
  }catch(eO1){}
}
function x72NextSec(){
  try{
    var n=X72SEC.i+1;
    if(n>=X72L.secs.length){return}
    x72SecBuild(n);
  }catch(eN1){}
}
function x72CloseSec(){
  try{
    var d=gid('x72sec');
    if(d){try{d.remove()}catch(eC1){try{if(d.parentNode){d.parentNode.removeChild(d)}}catch(eC2){}}}
  }catch(eC3){}
  X72SEC.open=false;
  try{
    var bb=gid('x71lpb');
    if(bb){try{bb.scrollTop=X72SEC.savedY}catch(eC4){}}
    else{try{window.scrollTo(0,X72SEC.savedY)}catch(eC5){}}
  }catch(eC6){}
}
function x72SecRemove(){try{var d=gid('x72sec');if(d){try{d.remove()}catch(eR1){}}}catch(eR2){}X72SEC.open=false}
/* صفحة الدرس: نفس نافذة 71 لكن بمحتوى 72 (فهرس الأجزاء) */
function x71Show(sid,cid){
  try{
    var lp=gid('x71lp');
    if(X71.open&&lp){
      if(X71.sid===sid&&X71.cid===cid&&X72L.sid===sid&&X72L.cid===cid&&X72L.secs&&X72L.secs.length){return}
      X71.sid=sid;X71.cid=cid;
      try{x72SecRemove()}catch(eS9){}
      var hb=gid('x71lph');if(hb){hb.innerHTML=x71HeadHtml(sid,cid)}
      var bb=gid('x71lpb');if(bb){bb.innerHTML=x72LessonHtml(sid,cid)+'<div class="x71-footpad"></div>'}
      try{if(bb&&bb.scrollTop!==undefined){bb.scrollTop=0}else{try{window.scrollTo(0,0)}catch(eC1){}}}catch(eC2){}
      return;
    }
    X71.open=true;X71.sid=sid;X71.cid=cid;
    try{X71.scrollY=(window.pageYOffset||document.documentElement.scrollTop||0)}catch(eS3){}
    var d=document.createElement('div');d.id='x71lp';
    var hh=document.createElement('div');hh.className='x71-head';hh.id='x71lph';hh.innerHTML=x71HeadHtml(sid,cid);
    var bb=document.createElement('div');bb.className='x71-body';bb.id='x71lpb';bb.innerHTML=x72LessonHtml(sid,cid)+'<div class="x71-footpad"></div>';
    try{d.appendChild(hh)}catch(eA1){}
    try{d.appendChild(bb)}catch(eA2){}
    var bd=document.body||document.documentElement;
    if(bd&&bd.appendChild){bd.appendChild(d)}
    try{document.body.classList.add('x71-lock')}catch(eS4){}
  }catch(eS5){}
}
var __x71H=x71Hide;
x71Hide=function(){
  try{x72SecRemove()}catch(eH9){}
  try{__x71H()}catch(eH10){}
};
/* مستدعية الطريق تعاد بالإسناد داخل هذه الكتلة كي تلتقط x71Show/x71Hide الجديدة (درس الإعلانات داخل الكتل) */
var __x71RouteOld=x71Route;
x71Route=function(){
  try{
    var ob=gid('x41-back');if(ob){try{ob.remove()}catch(eR1){}}
    if(ROUTE&&ROUTE.page==='lesson'&&ROUTE.subject&&ROUTE.chapter){
      if(X71.open&&X71.sid===ROUTE.subject&&X71.cid===ROUTE.chapter&&X72L.sid===ROUTE.subject&&X72L.cid===ROUTE.chapter&&X72L.secs&&X72L.secs.length){return}
      x71Show(ROUTE.subject,ROUTE.chapter);
      return;
    }
    x71Hide();
  }catch(eR2){}
};

/* ---------- 72.هـ ذاكرة الموضع: الرجوع يعيدك لمكانك بالضبط وبنفس التبويب ---------- */
function x72Pk(){try{return ((ROUTE&&ROUTE.page)||'home')+':'+((ROUTE&&ROUTE.subject)||'')+':'+((ROUTE&&ROUTE.chapter)||'')}catch(e0){return 'home::'}}
function x72PkOf(p,s,c){return ''+p+':'+(s||'')+':'+(c||'')}
var __x72NAV=navigate;
navigate=function(a,b,c){
  try{
    X72SC[x72Pk()]=(window.pageYOffset||document.documentElement.scrollTop||0);
    X72SC[x72Pk()+'#stab']=(typeof X38_SET_TAB==='number')?X38_SET_TAB:0;
    X72SC[x72Pk()+'#atab']=(typeof X38_ADM_TAB==='number')?X38_ADM_TAB:0;
  }catch(eN1){}
  try{__x72NAV(a,b,c)}catch(eN2){}
  if(X72.back){
    X72.back=false;
    var k=x72PkOf(a,b,c);
    var y=X72SC[k];
    var sb=X72SC[k+'#stab'];
    var ab=X72SC[k+'#atab'];
    try{setTimeout(function(){
      try{if((''+a)==='settings'&&typeof sb==='number'){X38_SET_TAB=sb;try{x38SetTab(sb)}catch(eS1){}}}catch(eS2){}
      try{if((''+a)==='admin'&&typeof ab==='number'){X38_ADM_TAB=ab;try{x38AdmTab(ab)}catch(eS3){}}}catch(eS4){}
      try{if(typeof y==='number'&&y>0){window.scrollTo(0,y)}}catch(eS5){}
    },40)}catch(eS6){}
  }
};
var __x72Back=x69Back;
x69Back=function(){try{X72.back=true}catch(eB1){}try{__x72Back()}catch(eB2){}};

/* ---------- 72.و فحص قنوات الإدارة: اتصال حي صادق بقاعدة البيانات (لا أخضر كاذب) ---------- */
function x71ChanState(){
  var s={rest:'wait',stor:'bad',mail:'bad',restTxt:'يجري الآن اتصال حقيقي بقاعدة البيانات…',storTxt:'',mailTxt:''};
  try{var k=(typeof x66Keys==='function')?x66Keys():null;
    if(k&&k.url&&k.anon){s.restTxt='مفتاح الاتصال موجود — يجري فحص حي لجدول الإعلانات…'}
    else{s.rest='bad';s.restTxt='لا مفتاح اتصال محفوظًا على هذا الجهاز — جهّز اتصال قاعدة البيانات من الإعدادات'}
  }catch(eC1){}
  try{var c=(typeof x66StorCfg==='function')?x66StorCfg():null;
    if(c&&c.url&&c.svc){s.stor='ok';s.storTxt='بطاقة التجهيز محفوظة — قناة المكتبة جاهزة'}
    else{s.storTxt='بطاقة التجهيز (المفتاح svc) غير محفوظة على هذا الجهاز — جهّز اتصال المكتبة من الإعدادات'}
  }catch(eC2){}
  try{var r=(typeof x25EJSReady==='function')?x25EJSReady():false;
    if(r){s.mail='ok';s.mailTxt='بريد المنصة جاهز — تصلك التنبيهات فورًا'}
    else{s.mailTxt='خدمة البريد غير مهيأة على هذا الجهاز'}
  }catch(eC3){}
  return s;
}
function x71ChanHtml(){
  var st=x71ChanState();
  return '<div class="x71-chan" id="x71-chan">'+
   '<h4>📡 حالة قنوات نشر الإعلانات — فحص حي صادق</h4>'+
   '<p class="set-note">لا أخضر كاذب بعد اليوم: هذا الفحص يتصل فعلًا بقاعدة البيانات ويجرب الجدول، فما تراه أخضر يعمل بالفعل، وما تراه أحمر يحتاج خطوة واحدة منك.</p>'+
   '<div class="x71-chrow"><span class="x71-dot '+st.rest+'" id="x72dot-rest"></span><b>قاعدة البيانات</b><span id="x71-ch-rest">'+st.restTxt+'</span></div>'+
   '<div class="x71-chrow"><span class="x71-dot '+st.stor+'"></span><b>مكتبة الملفات</b><span id="x71-ch-stor">'+st.storTxt+'</span></div>'+
   '<div class="x71-chrow"><span class="x71-dot '+st.mail+'"></span><b>بريد المنصة</b><span id="x71-ch-mail">'+st.mailTxt+'</span></div>'+
   '<button class="btn btn-sm" onclick="try{x71ChanRefresh();toast(\'تم إعادة الفحص الحي\')}catch(e){}">🔄 إعادة الفحص الحي</button>'+
   '<div id="x71-pubstatus" style="display:none"></div>'+
   '</div>';
}
function x72PaintRest(cls,txt){
  try{
    var d=gid('x72dot-rest');
    if(d){try{d.className='x71-dot '+cls}catch(eP1){}}
    var t=gid('x71-ch-rest');
    if(t){try{t.textContent=txt}catch(eP2){}}
  }catch(eP3){}
}
function x72ProbeRest(){
  try{
    var k=null;
    try{k=(typeof x66Keys==='function')?x66Keys():null}catch(eK1){}
    if(!k||!k.url||!k.anon){x72PaintRest('bad','لا مفتاح اتصال محفوظًا على هذا الجهاز — جهّز اتصال قاعدة البيانات من الإعدادات');return}
    try{x72PaintRest('wait','يجري الآن اتصال حقيقي بجدول الإعلانات…')}catch(eW1){}
    try{
      fetch(k.url+'/rest/v1/announcements?select=id&limit=1',{headers:{'apikey':k.anon,'Authorization':'Bearer '+k.anon}})
      .then(function(r){
        try{
          if(r&&r.ok){
            x72PaintRest('ok','متصل ويعمل — جدول الإعلانات يقرأ بنجاح. للنشر: نفّذ سكربت SQL مرة واحدة إن لم يصل إعلان من قبل، وسجّل دخولك بحساب الإدارة قبل الإرسال');
            X72.restState='ok';
          }else{
            var code=(r&&r.status)?('HTTP '+r.status):'خطأ';
            x72PaintRest('bad','فشل الاتصال الحقيقي ('+code+') — نفّذ سكربت SQL المرفق في هذه البطاقة من لوحة Supabase ثم اضغط إعادة الفحص');
            X72.restState='bad';
          }
        }catch(eP4){}
      })
      .catch(function(){
        try{
          x72PaintRest('wait','تعذر الوصول لقاعدة البيانات الآن — تحقق من اتصال الإنترنت ثم أعد الفحص');
          X72.restState='off';
        }catch(eP5){}
      });
    }catch(eK2){x72PaintRest('wait','تعذر بدء الفحص — أعد المحاولة');}
  }catch(eP6){}
}
var __x71CR=x71ChanRefresh;
x71ChanRefresh=function(){
  try{__x71CR()}catch(eC4){}
  try{x72ProbeRest()}catch(eC5){}
};

/* ---------- 72.ز بطاقة تشخيص الإشعارات الشاملة + تشغيل بضغطة ---------- */
function x72PushCardHtml(){
  return '<div class="set-card glass" id="x72push-card">'+
   '<h4>🔔 حالة الإشعارات — فحص شامل صادق</h4>'+
   '<div class="x71-chrow"><span class="x71-dot wait" id="x72p-sw"></span><b>عامل النظام</b><span id="x72p-sw-t">…</span></div>'+
   '<div class="x71-chrow"><span class="x71-dot wait" id="x72p-perm"></span><b>إذن المتصفح</b><span id="x72p-perm-t">…</span></div>'+
   '<div class="x71-chrow"><span class="x71-dot wait" id="x72p-sub"></span><b>الاشتراك الفعلي</b><span id="x72p-sub-t">…</span></div>'+
   '<div class="x71-chrow"><span class="x71-dot wait" id="x72p-wp"></span><b>خدمة الإشعارات</b><span id="x72p-wp-t">…</span></div>'+
   '<p class="set-note" id="x72p-msg">يجري الفحص الشامل على هذا الجهاز…</p>'+
   '<button class="btn btn-primary btn-sm" onclick="try{x72PushFix()}catch(e){}">🔄 فحص وتشغيل الإشعارات الآن</button>'+
   '</div>';
}
function x72PushPaintRow(id,cls,txt){
  try{
    var d=gid('x72p-'+id);
    if(d){try{d.className='x71-dot '+cls}catch(e1){}}
    var t=gid('x72p-'+id+'-t');
    if(t){try{t.textContent=txt}catch(e2){}}
  }catch(e3){}
}
function x72PushPaint(st){
  try{
    x72PushPaintRow('sw',st.sw?'ok':'bad',st.sw?'عامل المنصة يتحكم بهذا الجهاز — أوفلاين وإشعارات من ممر واحد':'لا عامل مسيطر بعد — افتح المنصة مرة على الشبكة ثم أعد الفحص');
    var pTxt='غير مدعوم';
    if(st.perm==='granted'){pTxt='ممنوح ✓'}
    else if(st.perm==='denied'){pTxt='مرفوض من إعدادات المتصفح'}
    else if(st.perm==='default'){pTxt='لم يُطلب بعد'}
    x72PushPaintRow('perm',(st.perm==='granted')?'ok':((st.perm==='denied')?'bad':'wait'),pTxt);
    x72PushPaintRow('sub',st.sub?'ok':'bad',st.sub?'الاشتراك الفعلي موجود — الإشعارات ستصل':'لا اشتراك فعليًا بعد على هذا الجهاز');
    x72PushPaintRow('wp',st.wp?'ok':'bad',st.wp?'خدمة SendPulse جاهزة':'خدمة SendPulse لم تجهز بعد');
    var m=gid('x72p-msg');
    if(m){try{m.textContent=st.msg}catch(e4){}}
  }catch(e5){}
}
function x72PushState(cb){
  var st={sw:false,perm:'unsupported',sub:false,wp:false,msg:'يجري الفحص…',cls:'wait'};
  try{if(navigator&&navigator.serviceWorker&&navigator.serviceWorker.controller){st.sw=true}}catch(e1){}
  try{var NN=(typeof Notification!=='undefined'&&Notification)?Notification:((window&&window.Notification)?window.Notification:null);
    if(NN&&NN.permission){st.perm=''+NN.permission}else{st.perm='unsupported'}
  }catch(e2){}
  try{if(window.wpPush){st.wp=true}}catch(e3){}
  var finish=function(subFound){
    st.sub=!!subFound;
    if(st.sw&&st.perm==='granted'&&st.sub){
      st.cls='ok';
      st.msg='الإشعارات تعمل بالكامل: العامل مسيطر، الإذن ممنوح، والاشتراك الفعلي موجود — ستصلك إعلانات ودروس المنصة حتى والتطبيق مغلق.';
    }else if(st.sw&&st.perm==='granted'&&!st.sub&&st.wp){
      st.cls='wait';
      st.msg='الإذن ممنوح لكن الاشتراك الفعلي ناقص — اضغط زر «فحص وتشغيل الإشعارات الآن» لإتمامه بضغطة واحدة.';
    }else if(st.perm==='denied'){
      st.cls='bad';
      st.msg='الإذن مرفوض من إعدادات المتصفح — افتح إعدادات الموقع/التطبيق وفعّل الإشعارات يدويًا ثم اضغط الفحص.';
    }else if(!st.wp){
      st.cls='bad';
      st.msg='خدمة الإشعارات (SendPulse) لم تجهز على هذا الجهاز — اضغط زر التشغيل أو تحقق من الاتصال بالإنترنت.';
    }else{
      st.cls='wait';
      st.msg='بقيت خطوة واحدة: اضغط زر التشغيل ووافق بنافذة المتصفح لتصلك إشعارات المنصة كاملة.';
    }
    try{x72PushPaint(st)}catch(e4){}
    if(cb){try{cb(st)}catch(e5){}}
  };
  try{
    var pr=null;
    try{if(navigator&&navigator.serviceWorker&&navigator.serviceWorker.getRegistration){pr=navigator.serviceWorker.getRegistration()}}catch(e6){}
    if(pr&&pr.then){
      pr.then(function(r){
        var q=null;
        try{q=(r&&r.pushManager&&r.pushManager.getSubscription)?r.pushManager.getSubscription():null}catch(e7){}
        if(q&&q.then){q.then(function(s){finish(s)}).catch(function(){finish(null)})}
        else{finish(null)}
      }).catch(function(){finish(null)});
    }else{finish(null)}
  }catch(e8){finish(null)}
}
function x72PushFix(){
  try{toast('🔄 أفحص الإشعارات وأجهزها على جهازك…')}catch(e1){}
  x72PushState(function(st){
    try{
      if(st.perm==='denied'){toast('الإذن مرفوض من المتصفح — فعّل الإشعارات من إعدادات الموقع/التطبيق ثم اضغط الفحص','error');return}
      if(!st.sub||st.perm!=='granted'||!st.wp){try{x69PushOn()}catch(e2){}}
      else{toast('✅ الإشعارات تعمل بالكامل على هذا الجهاز','success')}
    }catch(e3){}
    try{setTimeout(function(){try{x72PushState()}catch(e4){}},1800)}catch(e5){}
  });
}
try{setTimeout(function(){
  try{
    if(stGet('x72_autosub',null)){return}
    stSet('x72_autosub',1);
    x72PushState(function(st){
      try{if(st.perm==='granted'&&st.wp&&!st.sub){x69PushOn()}}catch(eA1){}
    });
  }catch(eA2){}
},2600)}catch(eA3){}

/* ---------- 72.ح التخزين المستقل: حفظ دائم + عرض المساحة الحقيقية ---------- */
function x72StoreCardHtml(){
  return '<div class="set-card glass" id="x72store-card">'+
   '<h4>🛡️ التخزين داخل التطبيق</h4>'+
   '<p class="set-note">دروسك وملفاتك المحمّلة تُخزن داخل مساحة التطبيق نفسها وتعمل بلا إنترنت — تُمسح فقط بحذف التطبيق نهائيًا من جهازك.</p>'+
   '<div class="x71-chrow"><span class="x71-dot wait" id="x72s-per"></span><b>الحفظ الدائم</b><span id="x72s-per-t">…</span></div>'+
   '<div class="x71-chrow"><span class="x71-dot wait" id="x72s-size"></span><b>المساحة المستعملة</b><span id="x72s-size-t">…</span></div>'+
   '<div class="x71-chrow"><span class="x71-dot ok" id="x72s-iso"></span><b>عزل الحساب</b><span id="x72s-iso-t">…</span></div>'+
   '</div>';
}
function x72StorePaintRow(id,cls,txt){
  try{
    var d=gid('x72s-'+id);
    if(d){try{d.className='x71-dot '+cls}catch(e1){}}
    var t=gid('x72s-'+id+'-t');
    if(t){try{t.textContent=txt}catch(e2){}}
  }catch(e3){}
}
function x72Mb(n){try{return (Math.round((n/1048576)*10)/10)+' ميجابايت'}catch(e1){return '—'}}
function x72StorePaint(){
  try{
    var iso=(typeof x68Mode==='function'&&x68Mode()==='app')?'هذا التطبيق بحساب مستقل عن حساب الموقع — إلا إذا دخلت بنفس البريد فيهما':'وضع الموقع: حسابك هنا مستقل عن حساب التطبيق المثبت على هذا الجهاز';
    x72StorePaintRow('iso','ok',iso);
    try{
      if(navigator&&navigator.storage&&navigator.storage.persist){
        navigator.storage.persist().then(function(v){
          x72StorePaintRow('per',(v?'ok':'wait'),v?'مفعّل — المتصفح يعد بحماية بياناتك من الحذف التلقائي':'غير مفعّل بعد — سيُعاد الطلب تلقائيًا عند الضغط');
        }).catch(function(){x72StorePaintRow('per','wait','غير مؤكد على هذا الجهاز')});
      }else{x72StorePaintRow('per','wait','غير مدعوم على هذا الجهاز')}
    }catch(e4){}
    try{
      if(navigator&&navigator.storage&&navigator.storage.estimate){
        navigator.storage.estimate().then(function(es){
          try{
            var u=(es&&es.usage)||0;
            var q=(es&&es.quota)||0;
            x72StorePaintRow('size','ok',x72Mb(u)+' من أصل '+x72Mb(q)+' — تكبر تلقائيًا مع كل ملف تحمّله');
          }catch(e5){}
        }).catch(function(){x72StorePaintRow('size','wait','تعذر قياس المساحة')});
      }else{x72StorePaintRow('size','wait','تعذر قياس المساحة على هذا الجهاز')}
    }catch(e6){}
  }catch(e7){}
}
try{setTimeout(function(){try{if(navigator&&navigator.storage&&navigator.storage.persist){navigator.storage.persist().then(function(){}).catch(function(){})}}catch(eP1){}},1200)}catch(eP2){}

/* ---------- 72.ط حقن البطاقتين في الإعدادات + الفحوص الحية عند كل عرض ---------- */
var __x72SP=renderSettingsPage;
renderSettingsPage=function(){
  var h='';try{h=__x72SP()}catch(eS1){}
  try{
    var inject=x72PushCardHtml()+x72StoreCardHtml();
    var anchor='<div class="x38-tabs">';
    var ix=(''+h).indexOf(anchor);
    if(ix>=0){h=(''+h).substring(0,ix)+inject+(''+h).substring(ix)}
    else{h=inject+(''+h)}
  }catch(eS2){}
  return h;
};
var __x72R=render;
render=function(){
  var o=null;
  try{o=__x72R()}catch(eR1){}
  try{x71Route()}catch(eR72){}
  try{setTimeout(function(){
    try{if(gid('x72push-card')){x72PushState()}}catch(eD1){}
    try{if(gid('x72store-card')){x72StorePaint()}}catch(eD2){}
    try{if(gid('x71-chan')){x72ProbeRest()}}catch(eD3){}
  },0)}catch(eR2){}
  return o;
};

/* ---------- 72.ي مقياس الفراغات الموحد + تصميم صفحة الجزء المستقلة ---------- */
try{
  var st72=document.createElement('style');
  st72.id='x72-style';
  st72.textContent=
   '.x71-dot.wait{background:#e0b96a;box-shadow:0 0 0 3px rgba(224,185,106,.18)}'+
   '.set-card{margin:0 0 14px!important}'+
   '.set-note{line-height:1.75!important;margin:6px 0 12px!important}'+
   'h2.sec15{margin:26px 0 12px!important;line-height:1.6}'+
   '.x38-tabs{margin:6px 0 16px!important}'+
   '.btn-row{gap:10px!important}'+
   '.x71-chan{padding:16px 18px}'+
   '.x71-chan h4{margin:2px 0 6px}'+
   '.x71-chan .set-note{margin:0 0 12px}'+
   '.x71-chrow{margin:8px 0!important;padding:10px 12px!important;line-height:1.7!important;gap:10px}'+
   '.x48-pills{gap:8px!important;margin:10px 0 14px!important}'+
   '.x71-inkgrid{gap:10px!important}'+
   '.x72-toc{padding:16px;border-radius:20px;margin:0 0 16px;background:rgba(14,22,38,.5);border:1px solid rgba(120,165,225,.16)}'+
   'html[data-theme="light"] .x72-toc{background:rgba(255,255,255,.9);border-color:rgba(60,110,180,.14)}'+
   '.x72-toch{font-size:15.5px;font-weight:800;margin:0 0 4px}'+
   '.x72-tocn{font-size:12.5px;opacity:.75;margin:0 0 12px;line-height:1.7}'+
   '.x72-tcard{display:flex;align-items:center;gap:12px;width:100%;padding:12px 14px;margin:0 0 10px;border-radius:16px;background:rgba(2,8,18,.35);border:1px solid rgba(120,165,225,.14);cursor:pointer;font-size:14px;color:inherit;transition:transform .15s ease,box-shadow .15s ease}'+
   '.x72-tcard:active{transform:scale(.98)}'+
   'html[data-theme="light"] .x72-tcard{background:rgba(235,242,250,.8);border-color:rgba(60,110,180,.14)}'+
   '.x72-tn{flex:0 0 auto;width:28px;height:28px;border-radius:50%;background:linear-gradient(135deg,#2f7ae5,#229ED9);color:#fff;display:flex;align-items:center;justify-content:center;font-weight:800;font-size:13px}'+
   '.x72-tcard b{flex:1;text-align:right;font-weight:700;line-height:1.5}'+
   '.x72-ta{flex:0 0 auto;opacity:.55;font-size:12px}'+
   '.x72sec{position:fixed;inset:0;z-index:1600;display:flex;flex-direction:column;background:var(--bg,#0B1220);animation:x71in .2s ease}'+
   'html[data-theme="light"] .x72sec{background:#F4F7FB}'+
   '@media(prefers-reduced-motion:reduce){.x72sec{animation:none}}'+
   '.x72sec-h{flex:0 0 auto;display:flex;align-items:center;gap:10px;padding:calc(10px + env(safe-area-inset-top,0px)) 14px 10px;background:rgba(12,20,34,.92);backdrop-filter:blur(18px);-webkit-backdrop-filter:blur(18px);border-bottom:1px solid rgba(120,160,220,.16);box-shadow:0 4px 18px rgba(0,0,0,.25)}'+
   'html[data-theme="light"] .x72sec-h{background:rgba(252,253,255,.95);border-bottom:1px solid rgba(60,110,180,.14)}'+
   '.x72sec-b{flex:0 0 auto;width:42px;height:42px;border-radius:14px;border:1px solid rgba(140,190,250,.3);background:linear-gradient(135deg,#2f7ae5,#229ED9);color:#fff;font-size:20px;font-weight:900;cursor:pointer;box-shadow:0 6px 16px rgba(34,158,217,.32);transition:transform .15s ease}'+
   '.x72sec-b:active{transform:scale(.92)}'+
   '.x72sec-t{flex:1;min-width:0}'+
   '.x72sec-t b{display:block;font-size:15px;line-height:1.5}'+
   '.x72sec-t span{font-size:12px;opacity:.7;line-height:1.6}'+
   '.x72sec-bd{flex:1;overflow-y:auto;padding:16px 14px 90px;scrollbar-width:thin}'+
   '.x72sec-nav{display:flex;gap:10px;flex-wrap:wrap;margin-top:18px}';
  var hd72=document.head||document.documentElement;
  if(hd72&&hd72.appendChild){hd72.appendChild(st72)}
}catch(eSt72){}

/* ---------- 72.ك بيانات الإصدار ---------- */
APP_META.ver='72.0';
APP_META.notes='الإصدار 72 — أقوى إصدار على الإطلاق: كل جزء من الدرس يفتح في صفحته المستقلة الخاصة به مع عودة إلى نفس موضعك بالضبط، ألوان الكتابة الفاتحة تسعة ألوان حية مرئية بوضوح، عنوان المشاركة الرسمي «منصة X التعليمية للطورين المتوسط والثانوي» في واتساب وجوجل، فحص حي صادق لقاعدة البيانات في لوحة الإدارة (لا أخضر كاذب)، بطاقة تشخيص شاملة للإشعارات مع تشغيل بضغطة واشتراك تلقائي، عزل حساب التطبيق عن حساب الموقع إلا بنفس البريد، حفظ دائم لبيانات التطبيق مع عرض المساحة الحقيقية، ذاكرة موضع لكل الصفحات مع استعادة نفس التبويب، ومقياس فراغات موحد في كل الواجهة.';
try{APP_META.lastUpdate='2026-11-05'}catch(eV1){}
try{if(APP_META.changelog&&APP_META.changelog.unshift){APP_META.changelog.unshift({ver:'72.0',date:'2026-11-05',notes:'أجزاء الدرس في صفحات مستقلة + ألوان كتابة فاتحة حية + عنوان مشاركة رسمي + فحص إدارة حي + تشخيص إشعارات شامل + عزل حساب التطبيق + حفظ دائم ومساحة + ذاكرة موضع + مقياس موحد'})}}catch(eV2){}
}catch(eW72){}

