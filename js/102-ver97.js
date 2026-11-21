/* ============ الطبقة 97 — الإصدار 97.0: بوابة تسجيل مضمونة (الموقع والتطبيق) + خط التبويب متوهج داخل الفقعة بأسلوب إنستغرام/تيليجرام + صورة الملف في دائرة بالجودة الأصلية فوق خلفية مموهة مع عرض كامل بشاشة سوداء + زر «تبليغ» في صفحة الملف (نفس قسم الإبلاغ) + «عن المؤسسة» في بطاقة التطبيق بالموقع + «الخدمة» بدل «المنتج» ============ */
try{
(function(){

/* 97.أ CSS */
try{
  var st97=document.createElement('style');
  st97.id='x97-style';
  st97.textContent=
   '#x93pill{display:none!important}'+
   '#x92pill{display:none!important}'+
   '.bnav .bnav-btn{position:relative!important;padding:5px 2px!important}'+
   '.bnav .bnav-btn.bnav-on{border-radius:12px!important}'+
   '.bnav .bnav-btn .x97line{display:none;position:absolute;top:4.5px;left:26%;right:26%;height:4px;border-radius:99px;pointer-events:none;background:linear-gradient(90deg,#54C7F0,#8B6CFF)!important;box-shadow:0 0 9px 2px rgba(53,189,242,.75),0 0 22px 5px rgba(53,189,242,.38)!important;z-index:2}'+
   'html[data-theme="light"] .bnav .bnav-btn .x97line{background:linear-gradient(90deg,#168EBF,#7657DB)!important;box-shadow:0 0 8px 2px rgba(22,142,191,.55)!important}'+
   '.bnav .bnav-btn.bnav-on .x97line{display:block!important}'+
   '.avatar.av-pv{cursor:pointer}'+
   '#x97avv{position:fixed;top:0;left:0;right:0;bottom:0;z-index:2147483000;display:flex;flex-direction:column;align-items:center;justify-content:center;background:rgba(6,10,18,.55);backdrop-filter:blur(16px);-webkit-backdrop-filter:blur(16px)}'+
   '#x97avc{width:212px;height:212px;border-radius:50%;overflow:hidden;display:flex;align-items:center;justify-content:center;background:linear-gradient(135deg,rgba(34,158,217,.25),rgba(139,108,255,.22));border:3px solid rgba(84,199,240,.55);box-shadow:0 18px 60px rgba(0,0,0,.55),0 0 40px rgba(53,189,242,.25);cursor:pointer}'+
   '#x97avc img{max-width:100%;max-height:100%;width:auto;height:auto;object-fit:contain;display:block}'+
   '#x97avc.x97lt span{font-size:86px;font-weight:900;color:#54C7F0;line-height:1}'+
   '#x97hint{color:#fff;font-size:12.5px;font-weight:700;margin:14px 0 0;text-shadow:0 1px 8px rgba(0,0,0,.6)}'+
   '#x97x{position:absolute;top:18px;left:18px;width:42px;height:42px;border-radius:50%;border:0;background:rgba(255,255,255,.14);color:#fff;font-size:20px;font-weight:900;cursor:pointer;font-family:inherit}'+
   '#x97full{position:fixed;top:0;left:0;right:0;bottom:0;z-index:2147483001;background:#000;display:flex;align-items:center;justify-content:center;cursor:pointer}'+
   '#x97full img{max-width:96vw;max-height:96vh;width:auto;height:auto;object-fit:contain;display:block}';
  (document.head||document.documentElement).appendChild(st97);
}catch(eS97){}

/* 97.ب خط التبويب: حبة مضيئة داخل الفقعة نفسها في أعلاها (تموضع CSS صرف — تظهر فقط على التبويب النشط) */
function x97NavLine(){
  try{
    var navs=document.querySelectorAll('nav.bnav');
    if(!navs||!navs.length){navs=document.querySelectorAll('.bnav')}
    if(!navs||!navs.length){return}
    for(var k=0;k<navs.length;k++){
      var btns=navs[k].querySelectorAll('.bnav-btn');
      for(var i=0;i<btns.length;i++){
        if(!btns[i].querySelector('.x97line')){
          var ln=document.createElement('span');
          ln.className='x97line';
          btns[i].appendChild(ln);
        }
      }
    }
  }catch(eL97){}
}
try{
  document.addEventListener('click',function(e){
    try{
      var t=e.target;var g=0;
      while(t&&t.nodeType===1&&g<10){
        if(typeof t.className==='string'&&(' '+t.className+' ').indexOf(' bnav-btn ')>=0){
          setTimeout(function(){try{x97NavLine()}catch(e0){}},20);
          break;
        }
        t=t.parentNode;g++;
      }
    }catch(eC97){}
  },true);
}catch(eA97){}

/* 97.ج الأفاتار: أول حرف من الاسم عند غياب الصورة + دائرة بالجودة الأصلية + خلفية مموهة + شاشة سوداء بالقياس الطبيعي */
function x97AvLetter(){
  var ch='?';
  try{
    var p=USER.profile;
    if(p&&p.first_name&&(''+p.first_name).length){ch=(''+p.first_name).charAt(0)}
    else if(USER.session&&USER.session.user&&USER.session.user.email){ch=(''+USER.session.user.email).charAt(0)}
  }catch(eP97){}
  return ch;
}
function x97AvOpen(){
  try{
    var old=document.getElementById('x97avv');
    if(old&&old.parentNode){try{old.parentNode.removeChild(old)}catch(e0){}}
    var src='';
    try{var p=USER.profile;if(p&&p.avatar_url){src=''+p.avatar_url}}catch(eP1){}
    var ch=x97AvLetter();
    var ov=document.createElement('div');
    ov.id='x97avv';
    ov.innerHTML='<button id="x97x" type="button" aria-label="إغلاق">✕</button>'+
      (src?('<div id="x97avc"><img id="x97avimg" alt="صورتي"></div>'):('<div id="x97avc" class="x97lt"><span>'+escAttr(ch)+'</span></div>'))+
      (src?'<p id="x97hint">اضغط على الدائرة لرؤية الصورة كاملة</p>':'');
    (document.body||document.documentElement).appendChild(ov);
    if(src){
      var im=document.getElementById('x97avimg');
      if(im){
        im.src=src;
        im.onerror=function(){
          try{
            var c=document.getElementById('x97avc');
            if(c){c.className='x97lt';c.innerHTML='<span>'+escAttr(ch)+'</span>'}
            var hh=document.getElementById('x97hint');
            if(hh&&hh.parentNode){try{hh.parentNode.removeChild(hh)}catch(eI2){}}
          }catch(eI1){}
        };
      }
    }
    ov.onclick=function(ev){
      try{
        var t=ev.target;
        if(t&&t.id==='x97x'){try{ov.parentNode.removeChild(ov)}catch(eC1){}return}
        if(t&&t.id==='x97avv'){try{ov.parentNode.removeChild(ov)}catch(eC2){}return}
        var cc=null;
        try{cc=document.getElementById('x97avc')}catch(eC3){}
        var inside=false,nd=t,g=0;
        while(nd&&nd.nodeType===1&&g<8){if(nd===cc){inside=true;break}nd=nd.parentNode;g++}
        if(inside&&src){x97AvFull(src)}
      }catch(eC4){}
    };
  }catch(eV97){}
}
function x97AvFull(src){
  try{
    var fo=document.createElement('div');
    fo.id='x97full';
    fo.innerHTML='<img alt="صورتي كاملة">';
    (document.body||document.documentElement).appendChild(fo);
    var fIm=fo.getElementsByTagName('img')[0];
    if(fIm){fIm.src=src}
    fo.onclick=function(){try{fo.parentNode.removeChild(fo)}catch(eF1){}};
  }catch(eF97){}
}
try{
  document.addEventListener('click',function(e){
    try{
      var t=e.target;var g=0;
      while(t&&t.nodeType===1&&g<9){
        if(typeof t.className==='string'){
          var cn=' '+t.className+' ';
          if(cn.indexOf('av-pv')>=0&&cn.indexOf('avatar')>=0){x97AvOpen();break}
        }
        t=t.parentNode;g++;
      }
    }catch(eA98){}
  },true);
}catch(eA99){}

/* 97.د زر «تبليغ» في صفحة الملف بعد حذف الحساب — يفتح نفس قسم الإبلاغ الموجود في التطبيق ويرسل عبر القنوات المرتبطة */
var __x97Pv=renderProfilePage18;
renderProfilePage18=function(){
  var h='';
  try{h=__x97Pv()}catch(e0){h=''}
  try{
    h=''+h;
    if(h.indexOf('x97RepBtn')<0){
      h=h.replace('🗑️ حذف الحساب</button>',
        '🗑️ حذف الحساب</button><button class="btn" id="x97RepBtn" onclick="try{x97Report()}catch(e){}">📢 تبليغ / مراسلة الإدارة</button>');
    }
  }catch(e1){}
  return h;
};
function x97Report(){
  try{
    var c='';
    try{c=(typeof __x43Contact==='function')?(''+__x43Contact()):''}catch(eC1){c=''}
    if(!c){
      c='<section class="contact glass-strong">'+
        '<h3 class="ct-head">📬 أرسل رسالة أو أبلغ عن خطأ</h3>'+
        '<p class="ct-sub">لاحظت خطأً في درس؟ عندك اقتراح أو استفسار؟ اكتب رسالتك هنا وسنصلك فورًا.</p>'+
        '<div class="ct-form">'+
        '<input id="msg-mail" class="inp" type="email" placeholder="بريدك الإلكتروني (ليصلك الرد)">'+
        '<select id="msg-type" class="inp"><option>تصحيح خطأ في درس</option><option>استفسار في درس</option><option>اقتراح تحسين</option><option>طلب حل تمرين / تحدي بكالوريا</option></select>'+
        '<textarea id="msg-body" class="inp" rows="4" placeholder="اكتب رسالتك هنا — إن كان خطأً اذكر الدرس والفقرة بالضبط…"></textarea>'+
        '<div class="btn-row"><button id="sendMsg" class="btn btn-primary" onclick="try{sendMsg()}catch(e){}">✉️ إرسال الرسالة</button></div>'+
        '</div></section>';
    }
    try{xModal('📢 التبليغ — رسالة إلى الإدارة',c)}catch(eM97){}
  }catch(e2){}
}
window.x97Report=x97Report;

/* 97.هـ «عن المؤسسة» تحت التنزيل في بطاقة التطبيق (شريط الموقع فقط) — مثل التي في التطبيق */
window.x77AppSheet=function(){
  try{
    var apk='';
    try{apk=(typeof x42ApkUrl==='function')?x42ApkUrl():'./X.apk'}catch(e0){apk='./X.apk'}
    xModal('📲 التطبيق — شاركه أو نزّله',
     '<div class="btn-row" style="display:flex;flex-wrap:wrap;gap:10px">'+
     '<button class="btn btn-primary" onclick="try{x77Share()}catch(e){}" style="flex:1 1 140px">📤 مشاركة</button>'+
     '<a class="btn btn-primary" href="'+escAttr(apk||'./X.apk')+'" download="X.apk" style="flex:1 1 140px;text-decoration:none;display:inline-flex;align-items:center;justify-content:center">⬇️ تنزيل APK</a>'+
     '</div>'+
     '<button class="btn" style="width:100%;margin-top:10px;box-sizing:border-box" onclick="try{xShowDoc(\'about\')}catch(e){}">🏛️ عن المؤسسة</button>'+
     '<p class="x17-mute" style="margin-top:12px;font-size:12.5px">«مشاركة» تفتح تطبيقات هاتفك مباشرة، و«تنزيل APK» يجلب التطبيق إلى هاتفك مباشرة، و«عن المؤسسة» يعرّفك بمؤسسة X.HAK صاحبة الخدمة.</p>');
  }catch(e1){}
};

/* 97.و «الخدمة» بدل «المنتج» في صفحة عن المؤسسة (صياغة مؤسسية احترافية) */
window.x74AboutHtml=function(){
  var lv='',lu='';
  try{lv=''+APP_META.ver}catch(eV1){lv='97.0'}
  try{lu=''+APP_META.lastUpdate}catch(eV2){lu='2026-11-09'}
  var lg='';
  try{lg=''+LOGO}catch(eV3){lg='X'}
  return '<div class="x74-about">'+
   '<div class="x74-ablogo"><div class="logo-mark">'+lg+'</div></div>'+
   '<h3 class="x74-h4c">X.HAK Technologies</h3>'+
   '<p class="x74-tag">مؤسسة جزائرية مستقلة للتقنية والتعليم الرقمي</p>'+
   '<p>تُطوّر مؤسسة <b>X.HAK التقنية</b> حلولًا برمجية وتطبيقات تعليمية رقمية، وتقود مشروع «منصة X التعليمية» — منصة جزائرية مجانية بالكامل لتلاميذ الطورين المتوسط والثانوي: دروس وملخصات وقوانين وتمارين واختبارات تفاعلية ومكتبات PDF وفيديو، تعمل بلا إنترنت بإشعارات فورية.</p>'+
   '<div class="x74-facts">'+
   '<div><b>التأسيس</b><span>2026 · الجزائر</span></div>'+
   '<div><b>المؤسِّس والرئيس</b><span dir="ltr">HAMMOUALI Kacem</span></div>'+
   '<div><b>الخدمة</b><span>منصة X التعليمية</span></div>'+
   '</div>'+
   '<p class="set-note">الإصدار '+lv+' · آخر تحديث '+lu+' · جميع الحقوق محفوظة © 2026 X.HAK</p>'+
   '</div>';
};

/* 97.ز حذف الحساب يمسح كل أثر بياناتك من الجهاز — التسجيل الجديد يبدأ من الصفر (أما الخروج وحده فيحفظ بياناتك) */
function x97Wipe(){
  try{
    var uid='';
    try{uid=''+((((USER||{}).session||{}).user||{}).id||'')}catch(eU1){}
    var kill=['x18_user','x65_sess','x45_stayflag','x15_guest','n12_done','n12_saved','n12_quiz','x15_started','x15_last'];
    try{
      var ks=[],i;
      for(i=0;i<localStorage.length;i++){try{ks.push(''+localStorage.key(i))}catch(eK1){}}
      for(i=0;i<ks.length;i++){
        var k=ks[i];
        if(!k){continue}
        if(k.indexOf('x15_cfg')===0){kill.push(k)}
        if(uid&&uid.length>8&&k.indexOf(uid)>=0){kill.push(k)}
      }
    }catch(eK2){}
    for(var n=0;n<kill.length;n++){try{localStorage.removeItem(kill[n])}catch(eK3){}}
    try{sessionStorage.removeItem('x65_gate');sessionStorage.removeItem('x66_gate')}catch(eK4){}
    try{
      if(typeof STATE!=='undefined'&&STATE){
        STATE.done={};STATE.saved={};STATE.started={};STATE.quiz={};STATE.lastLesson=null;
      }
    }catch(eS3){}
    try{if(typeof saveState==='function'){saveState()}}catch(eS4){}
    try{if(typeof SB!=='undefined'&&SB&&SB.client){try{SB.client.auth.signOut()}catch(eS1){}}}catch(eS2){}
  }catch(eW98){}
}
var __x97Conf=x54Confirm;
x54Confirm=function(t,m,cb){
  try{
    if((''+t).indexOf('حذف الحساب')>=0&&typeof cb==='function'){
      return __x97Conf(t,m,function(){
        try{x97Wipe()}catch(e1){}
        try{cb()}catch(e2){}
      });
    }
  }catch(e3){}
  return __x97Conf(t,m,cb);
};

/* 97.ح بوابة التسجيل المقواة: لا استخدام للموقع ولا للتطبيق قبل أول تسجيل — وبعد حذف الحساب يُمنع الاستخدام حتى تسجيل جديد */
var __x97Gate=render;
render=function(){
  try{
    var pg='';
    try{pg=''+(((window.ROUTE||{}).page)||'')}catch(eG1){}
    var ok=false;
    try{ok=(USER&&USER.session)?true:false}catch(eG2){}
    if(!ok){try{ok=(typeof x66Logged==='function')&&x66Logged()}catch(eG3){}}
    if(!ok&&pg!=='auth'){try{navigate('auth')}catch(eG4){}}
  }catch(eG5){}
  var r=null;
  try{r=__x97Gate.apply(this,arguments)}catch(eR98){}
  try{x97NavLine()}catch(eN1){}
  return r;
};
try{setTimeout(function(){try{x97NavLine()}catch(e0){}},350)}catch(eT1){}
try{setTimeout(function(){try{x97NavLine()}catch(e1){}},1000)}catch(eT2){}

/* 97.ي بيانات الإصدار */
APP_META.ver='97.0';APP_META.date='2026-11-09';APP_META.lastUpdate='2026-11-09';
APP_META.notes='الإصدار 97.0 — بوابة التسجيل والجودة العالمية: لا استخدام للموقع أو التطبيق قبل أول تسجيل، وحذف الحساب يمسح كل بياناتك من الجهاز فتبدأ من الصفر عند أي تسجيل جديد (بينما الخروج وحده يحفظ بياناتك ويعيدك مباشرة)، خط التبويب السفلي صار حبة متوهجة داخل الفقعة في أعلاها بأسلوب إنستغرام وتيليجرام مع فقعة أصغر قليلًا، الضغط على صورتك في الملف يعرضها في دائرة بجودتها الأصلية فوق خلفية مموهة (أو الحرف الأول من اسمك عند غيابها) والضغط على الدائرة يعرضها كاملة على شاشة سوداء بقياسها الحقيقي، زر «تبليغ» جديد في صفحة الملف بعد أزرار الخروج وحذف الحساب يفتح قسم الإبلاغ نفسه الموجود في التطبيق ويرسل عبر القنوات المرتبطة بالموقع، وزر «عن المؤسسة» جديد تحت التنزيل في بطاقة التطبيق بشريط الموقع، و«الخدمة» بدل «المنتج» في صفحة عن المؤسسة — مع كل مزايا الإصدارات السابقة دون تعطيل أي وظيفة.';
try{
  APP_META.changelog.unshift({ver:'97.0',date:'2026-11-09',notes:'بوابة تسجيل مضمونة للموقع والتطبيق + مسح كامل للبيانات عند حذف الحساب (الخروج وحده يحفظها) + خط تبويب متوهج داخل الفقعة بأسلوب إنستغرام + أفاتار دائري بالجودة الأصلية مع خلفية مموهة وشاشة سوداء كاملة + زر تبليغ في صفحة الملف + عن المؤسسة في بطاقة التطبيق بالموقع + «الخدمة» بدل «المنتج».'});
}catch(eM1){}
window.fallbackNews18=function(){
  return [{title:'الإصدار 97.0 — بوابة التسجيل والجودة العالمية',
    body:'لا استخدام قبل أول تسجيل، حذف الحساب يمسح بياناتك كاملة، خط التبويب متوهج داخل الفقعة، صورتك في دائرة بجودتها الأصلية مع عرض كامل، زر تبليغ في صفحة الملف، وعن المؤسسة في بطاقة التطبيق.',
    date:APP_META.date}];
};
window.x97t={navline:x97NavLine,rep:x97Report,avOpen:x97AvOpen,avFull:x97AvFull,letter:x97AvLetter,wipe:x97Wipe,pv:renderProfilePage18};
})();
}catch(eW97){}
